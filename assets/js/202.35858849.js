(window.webpackJsonp=window.webpackJsonp||[]).push([[202],{486:function(t,e,a){"use strict";a.r(e);var s=a(14),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"named-expressions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#named-expressions"}},[t._v("#")]),t._v(" Named expressions")]),t._v(" "),e("p",[t._v("An expression can be assigned a human-friendly name. Thanks to this you can\nrefer to that name anywhere across the workbook. Names are especially useful\nwhen you use some references repeatedly. In this case, names simplify the\nformulas and reduce the risk of making a mistake. Such a worksheet is also\neasier to maintain.")]),t._v(" "),e("p",[t._v("You can name a formula, string, number, or any other type of data.")]),t._v(" "),e("p",[t._v("By default, references in named expressions are absolute. Most people use\nabsolute references in spreadsheet software like Excel without even knowing\nabout it. Very few know that references can be relative too. Unfortunately,\nHyperFormula doesn't support relative references inside named expressions at the\nmoment.")]),t._v(" "),e("p",[t._v("Dynamic ranges are supported through functions such as INDEX and OFFSET.")]),t._v(" "),e("p",[t._v("Named ranges can overlap each other, e.g. it is possible to define the names as\nfollows:")]),t._v(" "),e("ul",[e("li",[t._v("rangeOne: Sheet1!$A$1:$D$10")]),t._v(" "),e("li",[t._v("rangeTwo: Sheet1!$A$1:$E$1")])]),t._v(" "),e("h2",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Custom name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Example expression")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Named cell")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("myCell")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("=Sheet1!$A$1")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Named range of cells")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("myRange")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("=Sheet1!$A$1:Sheet1!$D$10")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Named constant (number)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("myNumber")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("=10")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Named constant (string)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("myText")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v('="One Small Step for Man"')])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Named formula")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("myFormula")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("=SUM(Sheet1!$A$1:$D$10)")])])])]),t._v(" "),e("h2",{attrs:{id:"naming-rules"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#naming-rules"}},[t._v("#")]),t._v(" Naming rules")]),t._v(" "),e("p",[t._v("Expression names are case-insensitive, and they:")]),t._v(" "),e("ul",[e("li",[t._v("Must start with a Unicode letter or with an underscore ("),e("code",[t._v("_")]),t._v(").")]),t._v(" "),e("li",[t._v("Can contain only Unicode letters, numbers, underscores, and periods ("),e("code",[t._v(".")]),t._v(").")]),t._v(" "),e("li",[t._v("Can't be the same as any possible reference in the A1 notation (for example,\n"),e("code",[t._v("Q4")]),t._v(" or "),e("code",[t._v("YEAR2023")]),t._v(").")]),t._v(" "),e("li",[t._v("Can't be the same as any possible reference in the R1C1 notation (for example,\n"),e("code",[t._v("R4C5")]),t._v(", "),e("code",[t._v("RC")]),t._v(" or "),e("code",[t._v("R0C")]),t._v(").")]),t._v(" "),e("li",[t._v("Must be unique within a given scope.")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("Expression names must be unique within a given scope, but you can override a\nglobal named-expression with a local one. For example:")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// `MyRevenue` has to be unique within the global scope")]),t._v("\nhfInstance"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("addNamedExpression")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'MyRevenue'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'=SUM(100+10)'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// but you can still use `MyRevenue` within the local scope of Sheet2 (sheetId = 1)")]),t._v("\nhfInstance"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("addNamedExpression")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'MyRevenue'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'=Sheet2!$A$1+100'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),e("p",[t._v("For examples of valid and invalid expression names, see the following table:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Validity")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("my Revenue")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Invalid")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("myRevenue")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Valid")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("quarter1")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Invalid")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("quarter_1")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Valid")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("1stQuarter")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Invalid")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("_1stQuarter")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Valid")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v(".NET")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Invalid")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("ASP.NET")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Valid")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("A1")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Invalid")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("$A$1")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Invalid")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("RC")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Invalid")])])])]),t._v(" "),e("h2",{attrs:{id:"available-methods"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#available-methods"}},[t._v("#")]),t._v(" Available methods")]),t._v(" "),e("p",[t._v("These are the basic methods that can be used to add and manipulate named\nexpressions, including the creation and handling of named ranges. The full list\nof methods is available in the "),e("a",{attrs:{href:"../api"}},[t._v("API reference")]),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"adding-a-named-expression"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#adding-a-named-expression"}},[t._v("#")]),t._v(" Adding a named expression")]),t._v(" "),e("p",[t._v("You can add a named expression by using the "),e("code",[t._v("addNamedExpression")]),t._v(" method. It\naccepts name for the expression, the expression as a raw cell content, and\noptionally the scope. If you do not define the scope it will be set to global,\nmeaning the expression name will be valid for the whole workbook. If you want to\nadd many of them, it is advised to do so in a "),e("RouterLink",{attrs:{to:"/guide/batch-operations.html"}},[t._v("batch")]),t._v('. This\nmethod returns a list of cells whose values were affected by this operation,\ntheir absolute addresses, and new values. See the "changes" section in\n'),e("a",{attrs:{href:"basic-operations"}},[t._v("basic operations")]),t._v(" for more info.")],1),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// add 'prettyName' expression to the local scope of 'Sheet1' (sheetId = 0)")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" changes "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" hfInstance"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("addNamedExpression")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'prettyName'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'=Sheet1!$A$1+100'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h3",{attrs:{id:"changing-a-named-expression"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#changing-a-named-expression"}},[t._v("#")]),t._v(" Changing a named expression")]),t._v(" "),e("p",[t._v("You can change a named expression by using the "),e("code",[t._v("changeNamedExpression")]),t._v(" method.\nSelect the name of an expression to change and pass it as the first parameter,\nthen define the new expression as raw cell content and optionally add the scope.\nIf you do not define the scope it will be set to global, meaning the expression\nwill be valid for the whole workbook. If you want to change many of them, it is\nadvised to do so in a "),e("RouterLink",{attrs:{to:"/guide/batch-operations.html"}},[t._v("batch")]),t._v('. This method returns a list\nof cells whose values were affected by this operation, their absolute addresses,\nand new values. See the "changes" section in\n'),e("a",{attrs:{href:"basic-operations"}},[t._v("basic operations")]),t._v(" for more info.")],1),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// change the named expression")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" changes "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" hfInstance"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("changeNamedExpression")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'prettyName'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'=Sheet1!$A$1+200'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h3",{attrs:{id:"removing-a-named-expression"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#removing-a-named-expression"}},[t._v("#")]),t._v(" Removing a named expression")]),t._v(" "),e("p",[t._v("You can remove a named expression by using the "),e("code",[t._v("removeNamedExpression")]),t._v(" method.\nSelect the name of an expression to remove and pass it as the first parameter\nand optionally define the scope. If you do not define the scope it will be\nunderstood as global, meaning, the whole workbook. This method returns a list of\n"),e("RouterLink",{attrs:{to:"/guide/basic-operations.html#what-are-the-changes"}},[t._v("cells whose values were affected by this operation")]),t._v(",\ntheir absolute addresses, and new values.")],1),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// remove 'prettyName' expression from 'Sheet1' (sheetId=0)")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" changes "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" hfInstance"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeNamedExpression")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'prettyName'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h3",{attrs:{id:"listing-all-named-expressions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#listing-all-named-expressions"}},[t._v("#")]),t._v(" Listing all named expressions")]),t._v(" "),e("p",[t._v("You can retrieve a whole list of named expressions by using the\n"),e("code",[t._v("listNamedExpressions")]),t._v(" method. It requires no parameters and returns all named\nexpressions as an array of strings.")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// get all named-expression names")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" listOfExpressions "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" hfInstance"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("listNamedExpressions")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"handling-errors"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#handling-errors"}},[t._v("#")]),t._v(" Handling errors")]),t._v(" "),e("p",[t._v("Operations on named expressions throw errors when something goes wrong. These\nerrors can be "),e("RouterLink",{attrs:{to:"/guide/basic-operations.html#handling-an-error"}},[t._v("handled")]),t._v(" to provide a good\nuser experience in the application. It is also possible to check the\navailability of operations using "),e("code",[t._v("isItPossibleTo*")]),t._v(" methods, which are also\ndescribed in "),e("a",{attrs:{href:"basic-operations#isitpossibleto-methods"}},[t._v("that section")]),t._v(".")],1),t._v(" "),e("h2",{attrs:{id:"demo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#demo"}},[t._v("#")]),t._v(" Demo")]),t._v(" "),e("iframe",{staticStyle:{width:"100%",height:"500px",border:"0","border-radius":"4px",overflow:"hidden"},attrs:{src:"https://codesandbox.io/embed/github/handsontable/hyperformula-demos/tree/2.4.x/named-expressions?autoresize=1&fontsize=11&hidenavigation=1&theme=light&view=preview",title:"handsontable/hyperformula-demos: named-expressions",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-autoplay allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}})])}),[],!1,null,null,null);e.default=n.exports}}]);