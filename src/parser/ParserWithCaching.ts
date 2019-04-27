import {IToken, tokenMatcher} from 'chevrotain'
import {absoluteCellAddress, absoluteColCellAddress, absoluteRowCellAddress, CellAddress, cellAddressFromString, CellReferenceType, getAbsoluteAddress, relativeCellAddress, SimpleCellAddress} from '../Cell'
import {CellDependency} from '../CellDependency'
import {Config} from '../Config'
import {SheetMapping} from '../SheetMapping'
import {Ast, AstNodeType, buildErrorAst, ParsingErrorType} from './Ast'
import {Cache, RelativeDependency} from './Cache'
import {FormulaLexer, FormulaParser} from './FormulaParser'
import {buildLexerConfig, CellReference, ILexerConfig} from './LexerConfig'
import {AbsoluteCellRange} from '../AbsoluteCellRange'

/**
 * Parses formula using caching if feasible.
 */
export class ParserWithCaching {
  public statsCacheUsed: number = 0
  private cache: Cache = new Cache()
  private lexer: FormulaLexer
  private lexerConfig: ILexerConfig
  private formulaParser: FormulaParser
  private cacheMapping: Map<string, SimpleCellAddress[]> = new Map()

  constructor(
    private readonly config: Config,
    private readonly sheetMapping: SheetMapping,
  ) {
    this.lexerConfig = buildLexerConfig(config)
    this.lexer = new FormulaLexer(this.lexerConfig)
    this.formulaParser = new FormulaParser(this.lexerConfig, this.sheetMapping)
  }

  /**
   * Parses a formula.
   *
   * @param text - formula to parse
   * @param formulaAddress - address with regard to which formula should be parsed. Impacts computed addresses in R0C0 format.
   */
  public parse(text: string, formulaAddress: SimpleCellAddress): { ast: Ast, dependencies: CellDependency[] } {
    const lexerResult = this.lexer.tokenizeFormula(text)

    if (lexerResult.errors.length > 0) {
      const ast = buildErrorAst(lexerResult.errors.map((e) =>
          ({
            type: ParsingErrorType.LexingError,
            message: e.message,
          }),
      ))
      return { ast, dependencies: [] }
    }

    const hash = this.computeHash(lexerResult.tokens, formulaAddress)
    this.setMapping(hash, formulaAddress)

    let cacheResult = this.cache.get(hash)
    if (cacheResult) {
      ++this.statsCacheUsed
    } else {
      const ast = this.formulaParser.parseFromTokens(lexerResult, formulaAddress)
      cacheResult = this.cache.set(hash, ast)
    }
    const { ast, relativeDependencies } = cacheResult
    const dependencies = absolutizeDependencies(relativeDependencies, formulaAddress)

    if (ast.type === AstNodeType.ERROR) {
      return { ast, dependencies: [] }
    } else {
      return { ast, dependencies }
    }
  }

  public computeHash(tokens: IToken[], baseAddress: SimpleCellAddress): string {
    let hash = ''
    let idx = 0
    while (idx < tokens.length) {
      const token = tokens[idx]
      if (tokenMatcher(token, CellReference)) {
        const cellAddress = cellAddressFromString(this.sheetMapping, token.image, baseAddress)
        hash = hash.concat(cellHashFromToken(cellAddress))
        idx++
      } else {
        hash = hash.concat(token.image)
        idx++
      }
    }
    return hash
  }

  public getCache(): Cache {
    return this.cache
  }

  public setMapping(hash: string, address: SimpleCellAddress) {
    if (!this.cacheMapping.has(hash)) {
      this.cacheMapping.set(hash, [])
    }
    this.cacheMapping.get(hash)!.push(address)
  }

  public getMapping(): Map<string, SimpleCellAddress[]> {
    return this.cacheMapping
  }
}

/**
 * Checks whether string looks like formula or not.
 *
 * @param text - formula
 */
export function isFormula(text: string): Boolean {
  return text.startsWith('=')
}

export function isMatrix(text: string): Boolean {
  return (text.length > 1) && (text[0] === "{") && (text[text.length - 1] === "}")
}

/**
 * Converts dependencies from maybe relative addressing to absolute addressing.
 *
 * @param deps - list of addresses in R0C0 format
 * @param baseAddress - base address with regard to which make a convertion
 */
const absolutizeDependencies = (deps: RelativeDependency[], baseAddress: SimpleCellAddress): CellDependency[] => {
  return deps.map((dep) => {
    if (Array.isArray(dep)) {
      return new AbsoluteCellRange(getAbsoluteAddress(dep[0], baseAddress), getAbsoluteAddress(dep[1], baseAddress))
    } else {
      return getAbsoluteAddress(dep, baseAddress)
    }
  })
}

const cellHashFromToken = (cellAddress: CellAddress): string => {
  switch (cellAddress.type) {
    case CellReferenceType.CELL_REFERENCE_RELATIVE: {
      return `#${cellAddress.sheet}#${cellAddress.row}R${cellAddress.col}`
    }
    case CellReferenceType.CELL_REFERENCE_ABSOLUTE: {
      return `#${cellAddress.sheet}#${cellAddress.row}A${cellAddress.col}`
    }
    case CellReferenceType.CELL_REFERENCE_ABSOLUTE_COL: {
      return `#${cellAddress.sheet}#${cellAddress.row}AC${cellAddress.col}`
    }
    case CellReferenceType.CELL_REFERENCE_ABSOLUTE_ROW: {
      return `#${cellAddress.sheet}#${cellAddress.row}AR${cellAddress.col}`
    }
  }
}
