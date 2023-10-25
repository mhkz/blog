(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{593:function(t,a,s){"use strict";s.r(a);var n=s(5),r=function(t){t.options.__data__block__={mermaid_382ee166:"graph TB;\nroot  --\x3e c & n\nc --\x3e a\na --\x3e r & t & b\nr --\x3e true1\nt --\x3e true2\nb --\x3e true3\nn --\x3e o\no --\x3e w\nw --\x3e true4 & g\ng --\x3ed\nd --\x3e true5\n"}},e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"📕概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#📕概述"}},[t._v("#")]),t._v(" 📕概述")]),t._v(" "),s("p",[t._v("字典树是一种通用于检索某个字符串是否在字符串集合出现过的一种高效数据结构"),s("br"),t._v("\n多用于目前网页的搜索引擎"),s("br"),t._v("\n是学AC自动机必储蓄的知识点")]),t._v(" "),s("p",[t._v("字典树的灵活使用可以不仅限于字符串检索，灵活高效，可以融入较多算法的优化")]),t._v(" "),s("h1",{attrs:{id:"📕使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#📕使用"}},[t._v("#")]),t._v(" 📕使用")]),t._v(" "),s("h2",{attrs:{id:"😀专用变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#😀专用变量"}},[t._v("#")]),t._v(" 😀专用变量")]),t._v(" "),s("div",{staticClass:"language-cpp line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" maxn"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//内含字符数   ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Trie")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//字典树结构体")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" to"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n\n    这里可以加入需要的成员变量\n\n    */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("trie"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("maxn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*这里存放字符串内容*/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" tot_trie"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//代表现存的指向型节点")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" end_s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("maxn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//判断该字符串是否走完了")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br")])]),s("h3",{attrs:{id:"😀构造"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#😀构造"}},[t._v("#")]),t._v(" 😀构造")]),t._v(" "),s("p",[t._v("我们想插入如下单词集合[car,cat,cab,now,nowgd]，可以构造出如下一棵树")]),t._v(" "),s("Mermaid",{attrs:{id:"mermaid_382ee166",graph:t.$dataBlock.mermaid_382ee166}}),s("p",[t._v("其中从 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("r")]),s("mi",[t._v("o")]),s("mi",[t._v("o")]),s("mi",[t._v("t")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("root")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.61508em","vertical-align":"0em"}}),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.02778em"}},[t._v("r")]),s("span",{staticClass:"mord mathnormal"},[t._v("o")]),s("span",{staticClass:"mord mathnormal"},[t._v("o")]),s("span",{staticClass:"mord mathnormal"},[t._v("t")])])])]),t._v(" 往下沿着每一条路径走下去都可以成为一个集合内部的单词")]),t._v(" "),s("h2",{attrs:{id:"流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#流程"}},[t._v("#")]),t._v(" 流程：")]),t._v(" "),s("p",[t._v("在一个单词中每一个字符进行插入的时候，如果这个字符的指针("),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("t")]),s("mi",[t._v("o")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("to")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.61508em","vertical-align":"0em"}}),s("span",{staticClass:"mord mathnormal"},[t._v("t")]),s("span",{staticClass:"mord mathnormal"},[t._v("o")])])])]),t._v(")指向一个存在的节点，那么指针("),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("t")]),s("mi",[t._v("o")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("to")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.61508em","vertical-align":"0em"}}),s("span",{staticClass:"mord mathnormal"},[t._v("t")]),s("span",{staticClass:"mord mathnormal"},[t._v("o")])])])]),t._v(")替换为这个节点并进行下一个字符的插入。"),s("br"),t._v("\n若走到某个字符时指向空节点，就设置这个节点为一个新的指向型节点，然后("),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("t")]),s("mi",[t._v("o")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("to")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.61508em","vertical-align":"0em"}}),s("span",{staticClass:"mord mathnormal"},[t._v("t")]),s("span",{staticClass:"mord mathnormal"},[t._v("o")])])])]),t._v(")替换为这个新设置的节点")]),t._v(" "),s("p",[s("strong",[t._v("函数：")])]),t._v(" "),s("div",{staticClass:"language-cpp line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("insert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("string s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" to"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" cur_c"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token char"}},[t._v("'a'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这个字符分离为一个数放在结构体第二维")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("trie"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("to"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("cur_c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" trie"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("to"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("cur_c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("tot_trie"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//若为空节点")]),t._v("\n        to"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("trie"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("to"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("cur_c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//替换")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    endd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("to"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("h2",{attrs:{id:"检索"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#检索"}},[t._v("#")]),t._v(" 检索")]),t._v(" "),s("p",[t._v("假设我们要检索某个字符串是否存在于这个字典树中"),s("br"),t._v("\n与构造很像，我们需要一步一步向下走，一旦走到空节点，就返回了。"),s("br"),t._v("\n但还要加一步，如果走到结尾了但是下一个节点的 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("e")]),s("mi",[t._v("n")]),s("mi",[t._v("d")]),s("mi",[t._v("d")]),s("mo",{attrs:{mathvariant:"normal"}},[t._v("≠")]),s("mi",[t._v("t")]),s("mi",[t._v("r")]),s("mi",[t._v("u")]),s("mi",[t._v("e")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("endd\\neq true")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.8888799999999999em","vertical-align":"-0.19444em"}}),s("span",{staticClass:"mord mathnormal"},[t._v("e")]),s("span",{staticClass:"mord mathnormal"},[t._v("n")]),s("span",{staticClass:"mord mathnormal"},[t._v("d")]),s("span",{staticClass:"mord mathnormal"},[t._v("d")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),s("span",{staticClass:"mrel"},[s("span",{staticClass:"mrel"},[s("span",{staticClass:"mord vbox"},[s("span",{staticClass:"thinbox"},[s("span",{staticClass:"rlap"},[s("span",{staticClass:"strut",staticStyle:{height:"0.8888799999999999em","vertical-align":"-0.19444em"}}),s("span",{staticClass:"inner"},[s("span",{staticClass:"mrel"},[t._v("")])]),s("span",{staticClass:"fix"})])])])]),s("span",{staticClass:"mrel"},[t._v("=")])]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.61508em","vertical-align":"0em"}}),s("span",{staticClass:"mord mathnormal"},[t._v("t")]),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.02778em"}},[t._v("r")]),s("span",{staticClass:"mord mathnormal"},[t._v("u")]),s("span",{staticClass:"mord mathnormal"},[t._v("e")])])])]),t._v("，说明我们检索的字符串只是当前走的字符串的一个前缀，并不等于这个字符串，所以我们依旧返回 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("f")]),s("mi",[t._v("a")]),s("mi",[t._v("l")]),s("mi",[t._v("s")]),s("mi",[t._v("e")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("false")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.8888799999999999em","vertical-align":"-0.19444em"}}),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")]),s("span",{staticClass:"mord mathnormal"},[t._v("a")]),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.01968em"}},[t._v("l")]),s("span",{staticClass:"mord mathnormal"},[t._v("s")]),s("span",{staticClass:"mord mathnormal"},[t._v("e")])])])])]),t._v(" "),s("p",[s("strong",[t._v("函数：")])]),t._v(" "),s("div",{staticClass:"language-cpp line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("search")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("string s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" to"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//检索指针")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        to"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("trie"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("to"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token char"}},[t._v("'a'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//替换为下一个指针")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("to"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//指向空节点")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" endd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("to"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//判断是否刚好走完")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])])],1)}),[],!1,null,null,null);"function"==typeof r&&r(e);a.default=e.exports}}]);