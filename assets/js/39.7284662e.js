(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{332:function(t,a,s){"use strict";s.r(a);var e=s(14),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"batch-operations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#batch-operations"}},[t._v("#")]),t._v(" Batch operations")]),t._v(" "),a("p",[t._v("HyperFormula offers a built-in feature for doing batch operations.\nIt allows you to combine multiple data modification actions into a single operation.")]),t._v(" "),a("p",[t._v("In some cases, batch operations can result in better performance,\nespecially when your app requires doing a large number of operations.")]),t._v(" "),a("h2",{attrs:{id:"how-to-batch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-batch"}},[t._v("#")]),t._v(" How to batch")]),t._v(" "),a("h3",{attrs:{id:"using-the-batch-method"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-the-batch-method"}},[t._v("#")]),t._v(" Using the "),a("RouterLink",{attrs:{to:"/api/classes/hyperformula.html#batch"}},[a("code",[t._v("batch")])]),t._v(" method")],1),t._v(" "),a("p",[t._v("You can use the "),a("RouterLink",{attrs:{to:"/api/classes/hyperformula.html#batch"}},[a("code",[t._v("batch")])]),t._v(" method to batch operations. This method accepts\njust one parameter: a callback function that stacks the selected\noperations into one. It performs the cumulative operation at the end.")],1),t._v(" "),a("p",[t._v("This method returns a list of cells whose values were affected by this\noperation together with their absolute addresses and new values.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" hfInstance "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" HyperFormula"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("buildFromSheets")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("MySheet1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("MySheet2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'10'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// multiple operations in a single callback will trigger evaluation only once")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// and only one set of changes will be returned as a combined result of all")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the operations that were triggered within the callback")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" changes "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" hfInstance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("batch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  hfInstance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCellContents")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("col")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("row")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("sheet")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'=B1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  hfInstance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCellContents")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("col")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("row")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("sheet")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'=A1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// and numerous others")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"using-the-suspendevaluation-and-resumeevaluation-methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-the-suspendevaluation-and-resumeevaluation-methods"}},[t._v("#")]),t._v(" Using the "),a("RouterLink",{attrs:{to:"/api/classes/hyperformula.html#suspendevaluation"}},[a("code",[t._v("suspendEvaluation")])]),t._v(" and "),a("RouterLink",{attrs:{to:"/api/classes/hyperformula.html#resumeevaluation"}},[a("code",[t._v("resumeEvaluation")])]),t._v(" methods")],1),t._v(" "),a("p",[t._v("The same result can be achieved by suspending and resuming the\nevaluation.")]),t._v(" "),a("p",[t._v("To do that you need to explicitly suspend the evaluation, then do the\noperations one by one, and then resume the evaluation.")]),t._v(" "),a("p",[t._v("This method returns a list of cells which values were affected by the\noperation together with their absolute addresses and new values.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" hfInstance "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" HyperFormula"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("buildFromSheets")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("MySheet1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("MySheet2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'10'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// suspend the evaluation")]),t._v("\nhfInstance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("suspendEvaluation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// perform operations")]),t._v("\nhfInstance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCellContents")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("col")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("row")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("sheet")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'=B1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nhfInstance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setSheetContent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'50'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'60'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// resume the evaluation")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" changes "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" hfInstance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resumeEvaluation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("You can resume the evaluation by calling the "),a("RouterLink",{attrs:{to:"/api/classes/hyperformula.html#resumeevaluation"}},[a("code",[t._v("resumeEvaluation")])]),t._v(" method\nwhich triggers the recalculation. Just like in the case of the "),a("RouterLink",{attrs:{to:"/api/classes/hyperformula.html#batch"}},[a("code",[t._v("batch")])]),t._v("\nmethod, it returns a list of cells which values changed after the\noperation, together with their absolute addresses, and new values.")],1),t._v(" "),a("h3",{attrs:{id:"checking-the-evaluation-suspension-state"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#checking-the-evaluation-suspension-state"}},[t._v("#")]),t._v(" Checking the evaluation suspension state")]),t._v(" "),a("p",[t._v("When you need to check if the evaluation is suspended you can\ncall the "),a("RouterLink",{attrs:{to:"/api/classes/hyperformula.html#isevaluationsuspended"}},[a("code",[t._v("isEvaluationSuspended")])]),t._v(" method.")],1),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" hfInstance "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" HyperFormula"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("buildEmpty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// suspend the evaluation")]),t._v("\nhfInstance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("suspendEvaluation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// check if the evaluation is suspended")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// this method returns a simple boolean value")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" isEvaluationSuspended "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" hfInstance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isEvaluationSuspended")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// resume evaluation if needed")]),t._v("\nhfInstance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resumeEvaluation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"when-to-batch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#when-to-batch"}},[t._v("#")]),t._v(" When to batch")]),t._v(" "),a("p",[t._v("You can batch operations anytime you want to stack several actions into\none. However, if you want to see the most amazing benefits of this\nfeature, use batch operations when there are a lot of heavy methods.\nThis will result in better performance. The best candidates to\nbatch in this situation are the following methods:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("clearSheet")])]),t._v(" "),a("li",[a("code",[t._v("setSheetContent")])]),t._v(" "),a("li",[a("code",[t._v("setCellContents")])]),t._v(" "),a("li",[a("code",[t._v("addNamedExpression")])]),t._v(" "),a("li",[a("code",[t._v("changeNamedExpression")])]),t._v(" "),a("li",[a("code",[t._v("removeNamedExpression")])])]),t._v(" "),a("p",[t._v("These operations have an impact on calculation results and may affect\nthe performance.")]),t._v(" "),a("p",[t._v("Batching can be useful when there is a need for multiple memory-consuming\noperations. In this case, you should consider using it to achieve\nbetter performance in the application you develop; it will result\nin faster calculation across the whole HyperFormula instance.")]),t._v(" "),a("p",[t._v("Batching can also be useful when you decide to use HyperFormula\non the "),a("a",{attrs:{href:"server-side-installation"}},[t._v("server-side")]),t._v(". Several operations\ncan be sent as a single one.")]),t._v(" "),a("h2",{attrs:{id:"what-you-can-t-batch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-you-can-t-batch"}},[t._v("#")]),t._v(" What you can't batch")]),t._v(" "),a("p",[t._v("You can't batch read operations.")]),t._v(" "),a("p",[t._v("Methods such as "),a("RouterLink",{attrs:{to:"/api/classes/hyperformula.html#getcellvalue"}},[a("code",[t._v("getCellValue")])]),t._v(", "),a("RouterLink",{attrs:{to:"/api/classes/hyperformula.html#getsheetserialized"}},[a("code",[t._v("getSheetSerialized")])]),t._v(", or "),a("RouterLink",{attrs:{to:"/api/classes/hyperformula.html#getfillrangedata"}},[a("code",[t._v("getFillRangeData")])]),t._v(" will result in an error when called inside a "),a("a",{attrs:{href:"#using-the-batch-method"}},[t._v("batch callback")]),t._v(" or when the evaluation is "),a("a",{attrs:{href:"#using-the-suspendevaluation-and-resumeevaluation-methods"}},[t._v("suspended")]),t._v(".")],1),t._v(" "),a("p",[t._v("The "),a("RouterLink",{attrs:{to:"/api/classes/hyperformula.html#paste"}},[t._v("paste")]),t._v(" method also can't be called when batching as it reads the contents of the copied cells.")],1),t._v(" "),a("h2",{attrs:{id:"demo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#demo"}},[t._v("#")]),t._v(" Demo")]),t._v(" "),a("iframe",{staticStyle:{width:"100%",height:"500px",border:"0","border-radius":"4px",overflow:"hidden"},attrs:{src:"https://codesandbox.io/embed/github/handsontable/hyperformula-demos/tree/2.6.x/batch-operations?autoresize=1&fontsize=11&hidenavigation=1&theme=light&view=preview",title:"handsontable/hyperformula-demos: batch-operations",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}})])}),[],!1,null,null,null);a.default=n.exports}}]);