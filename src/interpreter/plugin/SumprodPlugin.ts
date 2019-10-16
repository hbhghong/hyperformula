import {AbsoluteCellRange} from '../../AbsoluteCellRange'
import {CellError, CellValue, ErrorType, simpleCellAddress, SimpleCellAddress} from '../../Cell'
import {DependencyGraph, RangeVertex} from '../../DependencyGraph'
import {Matrix} from '../../Matrix'
import {AstNodeType, ProcedureAst} from '../../parser'
import {FunctionPlugin} from './FunctionPlugin'
import {InterpreterValue, SimpleRangeValue} from '../InterpreterValue'

export class SumprodPlugin extends FunctionPlugin {
  public static implementedFunctions = {
    sumprod: {
      translationKey: 'SUMPRODUCT',
    },
  }

  public sumprod(ast: ProcedureAst, formulaAddress: SimpleCellAddress): CellValue {
    const [left, right] = ast.args

    const leftArgValue = this.evaluateAst(left, formulaAddress)
    const rightArgValue = this.evaluateAst(right, formulaAddress)

    if (typeof leftArgValue === 'number' && typeof rightArgValue === 'number') {
      return leftArgValue * rightArgValue
    } else if (!(leftArgValue instanceof SimpleRangeValue) || !(rightArgValue instanceof SimpleRangeValue)) {
      return new CellError(ErrorType.VALUE)
    }

    if (leftArgValue.numberOfElements() !== rightArgValue.numberOfElements()) {
      return new CellError(ErrorType.VALUE)
    }

    return this.reduceSumprod(leftArgValue, rightArgValue)
  }

  private reduceSumprod(left: SimpleRangeValue, right: SimpleRangeValue): number {
    let result = 0

    let lit = left.valuesFromTopLeftCorner()
    let rit = right.valuesFromTopLeftCorner()
    let l,r

    while (l = lit.next(), r = rit.next(), !l.done && !r.done) {
      if (typeof l.value === 'number' && typeof r.value === 'number') {
        result += l.value * r.value
      }
    }

    return result
  }
}

/**
 * Finds smaller range does have own vertex.
 *
 * @param rangeMapping - range mapping dependency
 * @param ranges - ranges to find smaller range in
 */
export const findSmallerRange = (dependencyGraph: DependencyGraph, ranges: AbsoluteCellRange[]): { smallerRangeVertex: RangeVertex | null, restRanges: AbsoluteCellRange[] } => {
  if (ranges[0].height() > 1) {
    const valuesRangeEndRowLess = simpleCellAddress(ranges[0].end.sheet, ranges[0].end.col, ranges[0].end.row - 1)
    const rowLessVertex = dependencyGraph.getRange(ranges[0].start, valuesRangeEndRowLess)
    if (rowLessVertex) {
      const restRanges = ranges.map((range) => {
        return new AbsoluteCellRange(simpleCellAddress(range.start.sheet, range.start.col, range.end.row), range.end)
      })

      return {
        smallerRangeVertex: rowLessVertex,
        restRanges,
      }
    }
  }
  return {
    smallerRangeVertex: null,
    restRanges: ranges,
  }
}
