(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{455:function(t,e,a){"use strict";a.r(e);var s=a(13),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"cell-references"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cell-references"}},[t._v("#")]),t._v(" Cell references")]),t._v(" "),e("p",[t._v("A formula can refer to one or more cells and automatically update its\ncontents whenever any of the referenced cells change. The values from\nother cells can be obtained using A1 notation which is a flexible\nway of pointing at different sources of data for the formulas.")]),t._v(" "),e("p",[t._v("The table below summarizes the most popular methods of referring to\ndifferent cells in the workbook.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Current sheet")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Different sheet")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Relative")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("=A1")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("=Sheet2!A1")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Absolute")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("=$A$1")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("=Sheet2!$A$1")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Mixed")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("=$A1")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("=Sheet2!$A1")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Circular (example)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("p",[t._v("A1=B1")]),t._v(" "),e("p",[e("em",[t._v("whereas")])]),t._v(" "),e("p",[t._v("B1=A1")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("p",[t._v("Sheet1!A1=Sheet2!A1")]),t._v(" "),e("p",[e("em",[t._v("whereas")])]),t._v(" "),e("p",[t._v("Sheet2!A1=Sheet1!A1")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Range")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("=A1:B2")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("=Sheet2!A1:B2")])])])]),t._v(" "),e("h3",{attrs:{id:"referring-to-named-expressions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#referring-to-named-expressions"}},[t._v("#")]),t._v(" Referring to named expressions")]),t._v(" "),e("p",[t._v("This is a special case in HyperFormula. Upon creation you define the\nscope of the expression:")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// define for a global scope")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// sheet id not passed")]),t._v("\nhfInstance"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("addNamedExpression")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'MyGlobal'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'=SUM(100+10)'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// define for a local scope")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// sheet id passed")]),t._v("\nhfInstance"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("addNamedExpression")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'MyLocal'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'=Sheet2!$A$1+100'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("And now you can use 'MyGlobal' and 'MyLocal' names.")]),t._v(" "),e("p",[t._v("HyperFormula is more limited than\ntypical spreadsheet software when it comes to referring to named ranges.\nFor more information about how\nHyperFormula handles named ranges,\nsee "),e("RouterLink",{attrs:{to:"/guide/named-expressions.html"}},[t._v("this section")]),t._v(".")],1),t._v(" "),e("h2",{attrs:{id:"relative-references"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#relative-references"}},[t._v("#")]),t._v(" Relative references")]),t._v(" "),e("p",[t._v("Relative and absolute references play a huge role in\n"),e("RouterLink",{attrs:{to:"/guide/clipboard-operations.html"}},[t._v("copy and paste")]),t._v(", autofill, and CRUD\noperations like moving cells or columns.")],1),t._v(" "),e("p",[t._v("By default, all references are relative which means that when you\ncopy them to other cells, the references are updated based on the\nnew coordinates. There are two main exceptions though: the move operation and named expressions, both of which use absolute references. HyperFormula provides\n"),e("code",[t._v("copy")]),t._v(" , "),e("code",[t._v("cut")]),t._v(" and "),e("code",[t._v("paste")]),t._v(" methods that allow for handling clipboard operations.")]),t._v(" "),e("p",[e("strong",[t._v("Cut and paste")]),t._v(" behaves a bit differently. If '=A1' is copied from cell B1 into B2 it will stay after being placed into B2.")]),t._v(" "),e("p",[e("strong",[t._v("Copy and paste")]),t._v(" will behave a bit different in a relative mean")]),t._v(" "),e("ul",[e("li",[t._v("if '=A1' will be copied from B1 into B2 cell it will be '=A2'.")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Formula in A1")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Action")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Result in A2")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("=B1+1")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("p",[t._v("Copy A1")]),t._v(" "),e("p",[t._v("Paste to A2")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("=B2+1")])])])]),t._v(" "),e("p",[t._v("This example shows the change after the move operation was done:")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// build with a simple dataset")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" hfInstance "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" HyperFormula"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("buildFromArray")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'=B2'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'=A1'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// these are the coordinates for a move operation")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" source "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("sheet")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("col")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("row")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" destination "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("sheet")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("col")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("row")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// move B1")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" changes "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" hfInstance"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("moveCells")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("start")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" source"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("end")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" source "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" destination"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// you can see the changes inside the console")]),t._v("\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("changes"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"absolute-references"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#absolute-references"}},[t._v("#")]),t._v(" Absolute references")]),t._v(" "),e("p",[t._v("A reference to a column (a letter) or a row (a number) may be\npreceded with a dollar sign "),e("code",[t._v("$")]),t._v(" to remain intact when the cell is\ncopied between different places.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Formula in A1")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Action")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Result in A2 and A3")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("=$B$1+1")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("p",[t._v("Copy A1")]),t._v(" "),e("p",[t._v("Paste to A2")]),t._v(" "),e("p",[t._v("Paste to A3")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("=$B$1+1")])])])]),t._v(" "),e("h2",{attrs:{id:"range-references"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#range-references"}},[t._v("#")]),t._v(" Range references")]),t._v(" "),e("p",[t._v("In HyperFormula, a range is a reference to a group of at least two adjacent cells.")]),t._v(" "),e("h3",{attrs:{id:"range-definition"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#range-definition"}},[t._v("#")]),t._v(" Range definition")]),t._v(" "),e("p",[t._v("Range "),e("code",[t._v("<Cell address 1>:<Cell address 2>")]),t._v(" is a reference to the smallest possible group of adjacent cells that includes:")]),t._v(" "),e("ul",[e("li",[t._v("The cell at "),e("code",[t._v("<Cell address 1>")])]),t._v(" "),e("li",[t._v("The cell at "),e("code",[t._v("<Cell address 2>")])]),t._v(" "),e("li",[t._v("If referencing across different sheets (so-called 3D reference): all cells on all sheets between "),e("code",[t._v("<Cell address 1>")]),t._v(" and "),e("code",[t._v("<Cell address 2>")])])]),t._v(" "),e("h3",{attrs:{id:"range-types"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#range-types"}},[t._v("#")]),t._v(" Range types")]),t._v(" "),e("p",[t._v("HyperFormula features the following types of ranges:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Range type")]),t._v(" "),e("th",[t._v("Description")]),t._v(" "),e("th",[t._v("Example")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Cell range")]),t._v(" "),e("td",[t._v("Has the shape of a finite rectangle")]),t._v(" "),e("td",[t._v("=A1:B2"),e("br"),t._v("or =A2:B1"),e("br"),t._v("or =B1:A2"),e("br"),t._v("or =B2:A1")])]),t._v(" "),e("tr",[e("td",[t._v("Column range")]),t._v(" "),e("td",[t._v("Contains entire columns")]),t._v(" "),e("td",[t._v("=A:B"),e("br"),t._v("or =B:A")])]),t._v(" "),e("tr",[e("td",[t._v("Row range")]),t._v(" "),e("td",[t._v("Contains entire rows")]),t._v(" "),e("td",[t._v("=1:2"),e("br"),t._v("or =2:1")])])])]),t._v(" "),e("h3",{attrs:{id:"referencing-ranges"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#referencing-ranges"}},[t._v("#")]),t._v(" Referencing ranges")]),t._v(" "),e("p",[t._v("You can reference ranges:")]),t._v(" "),e("ul",[e("li",[t._v("Through relative references (=A1:B2)")]),t._v(" "),e("li",[t._v("Through absolute references (=A$1:$B$2)")]),t._v(" "),e("li",[t._v("Across different sheets (=Sheet1!A1:Sheet5!B2)"),e("br"),t._v("If you don't specify a sheet name for the second cell address, the sheet name of the first cell address is used: "),e("code",[t._v("=Sheet5!A1:B2")]),t._v(" is equivalent to "),e("code",[t._v("=Sheet5!A1:Sheet5!B2")]),t._v(".")])]),t._v(" "),e("h3",{attrs:{id:"range-restraints"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#range-restraints"}},[t._v("#")]),t._v(" Range restraints")]),t._v(" "),e("p",[t._v("The following restraints apply:")]),t._v(" "),e("ul",[e("li",[t._v("You can't mix two different types of range references together (=A1:B).")]),t._v(" "),e("li",[t._v("Range expressions can't contain "),e("RouterLink",{attrs:{to:"/guide/named-expressions.html"}},[t._v("named expressions")]),t._v(".")],1),t._v(" "),e("li",[t._v("At the moment, HyperFormula doesn't support multi-cell range references (=A1:B2:C3).")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("In contrast to Google Sheets or Microsoft Excel, HyperFormula doesn't treat single cells as ranges. Instead, it immediately instantiates references to single cells as their values. Applying a scalar value to a function that takes ranges throws the "),e("RouterLink",{attrs:{to:"/api/classes/errormessage.html#cellrangeexpected"}},[e("code",[t._v("CellRangeExpected")])]),t._v(" error.")],1)]),t._v(" "),e("h3",{attrs:{id:"more-about-ranges"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#more-about-ranges"}},[t._v("#")]),t._v(" More about ranges")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/guide/dependency-graph.html#ranges-in-the-dependency-graph"}},[t._v("Ranges in the dependency graph")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/guide/types-of-operators.html#reference-operators"}},[t._v("Types of operators: Reference operators")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/api/classes/hyperformula.html#ranges"}},[t._v("API reference: Ranges")])],1)]),t._v(" "),e("h2",{attrs:{id:"circular-references"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#circular-references"}},[t._v("#")]),t._v(" Circular references")]),t._v(" "),e("p",[t._v("Since HyperFormula does not embed any UI, it allows for the input of a circular reference into a cell. Compared to popular spreadsheets,\nHyperFormula does not force any specific interaction with the user\n(i.e. displaying a warning ) when circular reference happens.")]),t._v(" "),e("p",[t._v("When circular reference happens, HyperFormula returns #CYCLE as\nthe value of the cell where the circular reference occurred. After\nsome CRUD operation is performed, the error might disappear when it is no longer\na cyclic dependency. No matter the outcome, other cells are\ncalculated normally and the dependency graph is updated. It\nis "),e("strong",[t._v("non-blocking")]),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"the-ref-error"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-ref-error"}},[t._v("#")]),t._v(" The #REF! error")]),t._v(" "),e("p",[t._v("By deleting the cell that is referenced in a formula you make the\nentire formula no longer valid. As a result, you will get the\n#REF! error which indicates that there is an invalid address\nused in a cell.")]),t._v(" "),e("p",[t._v("Consider the following example:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Formula in C1")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Action")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Result in B1")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("=A1+B1+20")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Delete column A")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("#REF!")])])])]),t._v(" "),e("p",[t._v("The #REF! error may also occur in other specific situations:")]),t._v(" "),e("ul",[e("li",[t._v("When you copy and paste formulas containing relative references,\nor example:")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Formula in B1")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Action")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Result in A1")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("=A1+1")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("p",[t._v("Cut from B1")]),t._v(" "),e("p",[t._v("Paste to A1")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("#REF!")])])])]),t._v(" "),e("ul",[e("li",[t._v("When the VLOOKUP is told to look up values in a column whose\nindex is out of the scope.")]),t._v(" "),e("li",[t._v("When the INDEX function is told to return values from rows or\ncolumns that are out of the scope.")])])])}),[],!1,null,null,null);e.default=n.exports}}]);