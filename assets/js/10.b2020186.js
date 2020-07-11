(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{435:function(t,s,a){},436:function(t,s,a){},488:function(t,s,a){"use strict";var n=a(435);a.n(n).a},489:function(t,s,a){"use strict";var n=a(436);a.n(n).a},534:function(t,s,a){"use strict";a.r(s);a(488),a(489);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"正则表达式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式"}},[t._v("#")]),t._v(" 正则表达式")]),t._v(" "),a("h2",{attrs:{id:"常见用例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见用例"}},[t._v("#")]),t._v(" 常见用例")]),t._v(" "),a("p",[t._v("示例一：统计下面html字符串中span标签出现的次数")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" html "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<div>\n              <span>姓名</span>\n              晓枫\n              <span>年龄</span>\n              22\n              <span>爱好</span>\n              coding\n            </div>")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" reg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/<span>.*?<\\/span>/g")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("match")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3")]),t._v("\n")])])]),a("p",[t._v("示例二：统计jpg格式的文件名")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" str "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'avatar.jpg lock.png loading.gif add.jpg'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" reg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\b(\\w+)(?=\\.jpg)\\b/g")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("match")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [ 'avatar', 'add' ]")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",[a("strong",[t._v("mdn")]),t._v(": 正则表达式是用于匹配字符串中字符组合的模式。在 JavaScript中，正则表达式也是对象。这些模式被用于 RegExp 的 exec 和 test 方法, 以及 String 的 match、matchAll、replace、search 和 split 方法。"),a("br")]),t._v(" "),a("p",[a("strong",[t._v("维基百科")]),t._v("：正规表达式使用单个字符串来描述、匹配一系列符合某个句法规则的字符串。在很多文本编辑器里，正规表达式通常被用来检索、替换那些符合某个模式的文本。")])]),t._v(" "),a("p",[t._v("我更喜欢维基百科的描述。")]),t._v(" "),a("h2",{attrs:{id:"创建一个正则表达式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建一个正则表达式"}},[t._v("#")]),t._v(" 创建一个正则表达式")]),t._v(" "),a("p",[t._v("可以使用以下两种方式创建：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 字面量形式（比较常用）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" rep "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/ab+c/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对象形式")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" rep "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RegExp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ab+c"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"基本语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本语法"}},[t._v("#")]),t._v(" 基本语法")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("[xyz]")]),t._v(" "),a("td",[t._v("一个字符集，匹配任意一个包含的字符")]),t._v(" "),a("td",[t._v("[^xyz]")]),t._v(" "),a("td",[t._v("一个否定字符集，匹配任何未包含的字符")])]),t._v(" "),a("tr",[a("td",[t._v("\\w")]),t._v(" "),a("td",[t._v("匹配字母或数字或者下划线的字符")]),t._v(" "),a("td",[t._v("[\\W]")]),t._v(" "),a("td",[t._v("匹配不是字母，数字，下划线的字符")])]),t._v(" "),a("tr",[a("td",[t._v("\\s")]),t._v(" "),a("td",[t._v("匹配任意空白符")]),t._v(" "),a("td",[t._v("[\\S]")]),t._v(" "),a("td",[t._v("匹配不是空白符的字符")])]),t._v(" "),a("tr",[a("td",[t._v("\\d")]),t._v(" "),a("td",[t._v("匹配数字")]),t._v(" "),a("td",[t._v("[\\D]")]),t._v(" "),a("td",[t._v("匹配非数字的字符")])]),t._v(" "),a("tr",[a("td",[t._v("\\b")]),t._v(" "),a("td",[t._v("匹配单词的开始或结束的位置")]),t._v(" "),a("td",[t._v("[\\B]")]),t._v(" "),a("td",[t._v("匹配不是单词开头或结束的位置")])]),t._v(" "),a("tr",[a("td",[t._v("^")]),t._v(" "),a("td",[t._v("匹配字符串的开始")]),t._v(" "),a("td",[t._v("[$]")]),t._v(" "),a("td",[t._v("匹配字符串的结束")])])])]),t._v(" "),a("h3",{attrs:{id:"练习"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#练习"}},[t._v("#")]),t._v(" 练习")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [xyz]和[^xyz]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ab"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abc'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),t._v("ab"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ab'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ab"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bcd'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ab"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cde'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \\w和\\W")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\\w"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abc123_'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\\"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("W")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abc123_'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\\w"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abc@#'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\\"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("W")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abc@#'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\\w"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@#$'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\\"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("W")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@#$'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ^和$")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),t._v("ab"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abcde'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),t._v("ab"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bcdef'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("abc$"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'123abc'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("abc$"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abc123'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])])]),a("h2",{attrs:{id:"重复相关的正则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重复相关的正则"}},[t._v("#")]),t._v(" 重复相关的正则")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("*")]),t._v(" "),a("td",[t._v("重复0次或者更多次")])]),t._v(" "),a("tr",[a("td",[t._v("+")]),t._v(" "),a("td",[t._v("重复1次或者更多次")])]),t._v(" "),a("tr",[a("td",[t._v("?")]),t._v(" "),a("td",[t._v("重复0次或者1次")])]),t._v(" "),a("tr",[a("td",[t._v("{ n }")]),t._v(" "),a("td",[t._v("重复n次")])]),t._v(" "),a("tr",[a("td",[t._v("{ n, }")]),t._v(" "),a("td",[t._v("重复n次或者更多次")])]),t._v(" "),a("tr",[a("td",[t._v("{ n, m}")]),t._v(" "),a("td",[t._v("重复n-m次")])])])]),t._v(" "),a("h3",{attrs:{id:"练习-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#练习-2"}},[t._v("#")]),t._v(" 练习")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// *和+")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("@gmail$"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@gmail'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("@gmail$"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@gmail'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ?")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^[a]?@gmail$/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@gmail'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("@gmail$"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a@gmail'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("@gmail$"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'aaa@gmail'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// { n }")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^[a]{2}@gmail$/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a@gmail'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("@gmail$"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'aa@gmail'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("@gmail$"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'aaa@gmail'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n")])])]),a("h2",{attrs:{id:"正则表达式的方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式的方法"}},[t._v("#")]),t._v(" 正则表达式的方法")]),t._v(" "),a("p",[t._v("上面一直是用正则的test方法判断字符串是否匹配，js中正则还有一些其它方法，如下：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("方法")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("exec")]),t._v(" "),a("td",[t._v("一个在字符串中执行查找匹配的RegExp方法，它返回一个数组（未匹配到则返回 null）。")])]),t._v(" "),a("tr",[a("td",[t._v("test")]),t._v(" "),a("td",[t._v("一个在字符串中测试是否匹配的RegExp方法，它返回 true 或 false。")])]),t._v(" "),a("tr",[a("td",[t._v("match")]),t._v(" "),a("td",[t._v("一个在字符串中执行查找匹配的String方法，它返回一个数组，在未匹配到时会返回 null。")])]),t._v(" "),a("tr",[a("td",[t._v("matchAll")]),t._v(" "),a("td",[t._v("一个在字符串中执行查找所有匹配的String方法，它返回一个迭代器（iterator）。")])]),t._v(" "),a("tr",[a("td",[t._v("replace")]),t._v(" "),a("td",[t._v("一个在字符串中执行查找匹配的String方法，并且使用替换字符串替换掉匹配到的子字符串。")])]),t._v(" "),a("tr",[a("td",[t._v("search")]),t._v(" "),a("td",[t._v("一个在字符串中测试匹配的String方法，它返回匹配到的位置索引，或者在失败时返回-1。")])]),t._v(" "),a("tr",[a("td",[t._v("split")]),t._v(" "),a("td",[t._v("一个使用正则表达式或者一个固定字符串分隔一个字符串，并将分隔后的子字符串存储到数组中的 String 方法。")])])])]),t._v(" "),a("p",[t._v("当你想要知道在一个字符串中的一个匹配是否被找到，你可以使用 test 或 search 方法；想得到更多的信息（但是比较慢）则可以使用 exec 或 match 方法。")]),t._v(" "),a("p",[t._v("正则中除了test方法外，exec方法经常用到。")]),t._v(" "),a("h3",{attrs:{id:"exec"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exec"}},[t._v("#")]),t._v(" exec")]),t._v(" "),a("p",[t._v("exec() 方法在一个指定字符串中执行一个搜索匹配。返回一个结果数组或 null。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 示例一：")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" res1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/@/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abc@gmail.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [ '@', index: 3, input: 'abc@gmail.com', groups: undefined ]")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// '@'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 示例二：")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/@(gmail)/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abc@gmail.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   '@gmail',")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   'gmail',")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   index: 3,")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   input: 'abc@gmail.com',")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   groups: undefined")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ]")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// @gmail")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// gmail")]),t._v("\n")])])]),a("p",[t._v("通过上面两个例子可以看到，exec会将符合正则的字符串以及符合括号内的字符串都选出来放到一个数组中。这就是捕获的概念。")]),t._v(" "),a("h2",{attrs:{id:"分组与捕获"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分组与捕获"}},[t._v("#")]),t._v(" 分组与捕获")]),t._v(" "),a("p",[t._v("通过上面exec方法示例二中可以看到，exec会捕获到匹配的字符以及括号内匹配到的字符。")]),t._v(" "),a("p",[t._v("我们一般将括号内的正则叫做"),a("code",[t._v("分组")]),t._v("，将匹配到括号内的字符放到结果数组中叫做"),a("code",[t._v("捕获")]),t._v("，在来看一个邮箱匹配的例子：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 捕获@和gmail或者163 既@ && gmail || 163")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" reg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/(@)(gmail|163)/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" str1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abc@gmail.com'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" str2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abc@163.com'")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// str1 = [")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   '@gmail',")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   '@',")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   'gmail',")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   index: 3,")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   input: 'abc@gmail.com',")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   groups: undefined")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ]")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// str2 = [")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   '@163',")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   '@',")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   '163',")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   index: 3,")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   input: 'abc@163.com',")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   groups: undefined")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ]")]),t._v("\n")])])]),a("p",[t._v("看完上面例子，你应该对"),a("code",[t._v("捕获")]),t._v("和"),a("code",[t._v("分组")]),t._v("熟悉了吧。")]),t._v(" "),a("p",[t._v("还有一个非捕获性分组，假如上面例子中我只想捕获到@符号，不想捕获到后面的gmail或者163，那此时就可以用非捕获性分组，使用方式如下")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用方式(?:)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" reg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/(@)(?:gmail|163)/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这样使用exec的时候就只会捕获@符号")]),t._v("\n")])])]),a("h2",{attrs:{id:"贪婪匹配和惰性匹配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#贪婪匹配和惰性匹配"}},[t._v("#")]),t._v(" 贪婪匹配和惰性匹配")]),t._v(" "),a("p",[t._v("如果有如下这样一段html字符串，让你将<span>hello</span>通过正则匹配出来，你会怎么写")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" html "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<span>hello</span><span>world</span>'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" reg1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/<span>.+<\\/span>/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" result1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" reg1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 按照上面写法，result1结果如下：")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ['<span>hello</span><span>world</span>']")]),t._v("\n\n")])])]),a("p",[t._v("如果你写出的正则和下面一样的话，你打印会发现结果并不是你想要的")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" reg1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/<span>.+<\\/span>/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" result1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" reg1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// result1 = ['<span>hello</span><span>world</span>']")]),t._v("\n")])])]),a("p",[t._v("出现上面的原因是，js正则会默认尽可能多的给你去匹配，第一个<span>和结尾的</span>也满足这个正则，所以就会都匹配出来，这就是所谓的"),a("strong",[t._v("贪婪匹配")])]),t._v(" "),a("p",[t._v("如果你只想匹配到第一个结果就停止的话，就需要用到"),a("strong",[t._v("惰性匹配")]),t._v("，将上面正则改一下如下：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" reg1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/<span>.+?<\\/span>/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" result1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" reg1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// result1 = ['<span>hello</span>']")]),t._v("\n")])])]),a("p",[t._v("上面多加了个?就是"),a("strong",[t._v("惰性匹配")]),t._v("了，匹配到第一个符合条件的就不继续往下了。参考示例一")]),t._v(" "),a("h2",{attrs:{id:"正向前瞻-负向前瞻"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正向前瞻-负向前瞻"}},[t._v("#")]),t._v(" 正向前瞻&负向前瞻")])])}),[],!1,null,null,null);s.default=e.exports}}]);