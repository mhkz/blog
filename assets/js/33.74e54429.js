(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{535:function(t,n,a){"use strict";a.r(n);var s=a(4),e=Object(s.a)({},(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"移动端屏幕适配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移动端屏幕适配"}},[t._v("#")]),t._v(" 移动端屏幕适配")]),t._v(" "),a("p",[t._v("为啥需要移动端适配，就不多bb了，直接说方案。")]),t._v(" "),a("h2",{attrs:{id:"百分比适配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#百分比适配"}},[t._v("#")]),t._v(" 百分比适配")]),t._v(" "),a("p",[t._v("百分比适配这个肯定都用过，像element-ui的layout布局就是用百分比实现的。这个比较简单，直接看优缺点:")]),t._v(" "),a("p",[t._v("优点:")]),t._v(" "),a("ul",[a("li",[t._v("1、不用考虑兼容性，因为百分比布局出现的较早。")]),t._v(" "),a("li",[t._v("2、简单，方便，自动会根据屏幕宽高调整")])]),t._v(" "),a("p",[t._v("缺点:")]),t._v(" "),a("ul",[a("li",[t._v("1、不容易凑整数，会出现除不尽的，比如三等分这种，用百分比就会是33.33333333%。")]),t._v(" "),a("li",[t._v("2、百分比是相对父元素的，就拿这是100%这个来说，你给一个元素设置100%，必须保证它父元素，祖先元素高度都是100%，这是我用百分比最烦的一个点。")]),t._v(" "),a("li",[t._v("3、遇见那种一边定宽，另一边自适应那种就不好算了。")]),t._v(" "),a("li",[t._v("4、因为子元素的百分比是相对于父元素的，如果父元素脱离文档流了，那子元素的百分比就会失效。")])]),t._v(" "),a("p",[t._v("总结：")]),t._v(" "),a("ul",[a("li",[t._v("百分比布局因为相对父元素宽高的这个性质，父元素一变就很容易出问题，不适合在移动端大量使用，")]),t._v(" "),a("li",[t._v("但是百分比布局写起来很简单，在有些情况下非常方便，比如头部标题，导航栏，侧边栏这种需要铺满全屏的地方，或者等分布局那种。")])]),t._v(" "),a("h2",{attrs:{id:"媒体查询-多套css切换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#媒体查询-多套css切换"}},[t._v("#")]),t._v(" 媒体查询&多套css切换")]),t._v(" "),a("p",[t._v("1、通过媒体查询对不同屏幕大小设置不同的css。这个也没啥好说的。"),a("br"),t._v("\n2、多态css切换。通过js来控制body标签的class类，然后写多套css，比如body加night-theme类，对应的样式如下：")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@charset")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UTF-8"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".night-theme .fade-in-linear-enter-active,\n.night-theme .fade-in-linear-leave-active")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-transition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" opacity 0.2s linear"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("transition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" opacity 0.2s linear"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".night-theme .fade-in-linear-enter,\n.night-theme .fade-in-linear-leave,\n.night-theme .fade-in-linear-leave-active")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("opacity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".night-theme .el-fade-in-linear-enter-active,\n.night-theme .el-fade-in-linear-leave-active")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-transition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" opacity 0.2s linear"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("transition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" opacity 0.2s linear"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".night-theme .el-fade-in-linear-enter,\n.night-theme .el-fade-in-linear-leave,\n.night-theme .el-fade-in-linear-leave-active")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("opacity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".night-theme .el-fade-in-enter-active,\n.night-theme .el-fade-in-leave-active")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-transition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" all 0.3s "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cubic-bezier")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0.55"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0.1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("transition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" all 0.3s "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cubic-bezier")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0.55"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0.1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".night-theme .el-fade-in-enter,\n.night-theme .el-fade-in-leave-active")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("opacity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".night-theme .el-zoom-in-center-enter-active,\n.night-theme .el-zoom-in-center-leave-active")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-transition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" all 0.3s "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cubic-bezier")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0.55"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0.1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("transition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" all 0.3s "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cubic-bezier")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0.55"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0.1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".night-theme .el-zoom-in-center-enter,\n.night-theme .el-zoom-in-center-leave-active")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("opacity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("scaleX")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("scaleX")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n...\n")])])]),a("p",[t._v("上面这张通过scss等预处理器处理很方便。")]),t._v(" "),a("p",[t._v("优点：")]),t._v(" "),a("ul",[a("li",[t._v("灵活一些，可以为PC端写一套，为移动端写一套，甚至给电视写一套也行。\n缺点：")]),t._v(" "),a("li",[t._v("缺点不用说了，麻烦，大部分公司都要求块，哪有时间让你去写多套样式文件。而且后期需求变动，改的话，需要几套都去改。")])]),t._v(" "),a("h2",{attrs:{id:"rem适配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rem适配"}},[t._v("#")]),t._v(" rem适配")]),t._v(" "),a("p",[a("strong",[t._v("rem")]),t._v("是移动端适配用的最多的。")]),t._v(" "),a("p",[t._v("优点：")]),t._v(" "),a("ul",[a("li",[t._v("1、rem的参考值是html根元素的字体大小，所以做适配的时候，就只需要改html字体大小就可以")]),t._v(" "),a("li",[t._v("2、适用范围广，元素的宽度，高度，border，字体，间距，偏移等都可以用rem。\n缺点：")]),t._v(" "),a("li",[t._v("1、兼容性不好，ie678不支持。ie9,10部分支持")]),t._v(" "),a("li",[t._v("2、rem换算完还是px，对于那种按比例分配空间的需求没法满足，需要配合百分比。")])]),t._v(" "),a("h2",{attrs:{id:"flex布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flex布局"}},[t._v("#")]),t._v(" flex布局")])])}),[],!1,null,null,null);n.default=e.exports}}]);