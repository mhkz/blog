(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{720:function(a,t,s){"use strict";s.r(t);var n=s(5),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"级联分类器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#级联分类器"}},[a._v("#")]),a._v(" 级联分类器")]),a._v(" "),s("p",[s("code",[a._v("type: CascadeClassifier")]),s("br"),a._v("\n训练出多个分类器，强强联手，最终形成正确率很高的级联分类器")]),a._v(" "),s("h3",{attrs:{id:"检测方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#检测方式"}},[a._v("#")]),a._v(" 检测方式")]),a._v(" "),s("p",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[a._v("H")]),s("mi",[a._v("a")]),s("mi",[a._v("a")]),s("mi",[a._v("r")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[a._v("Haar")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.08125em"}},[a._v("H")]),s("span",{staticClass:"mord mathnormal"},[a._v("a")]),s("span",{staticClass:"mord mathnormal"},[a._v("a")]),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.02778em"}},[a._v("r")])])])]),a._v(" 算法对图片多区域、多尺度检测")]),a._v(" "),s("ul",[s("li",[a._v("多区域：对图片分块，然后全部进行检测")]),a._v(" "),s("li",[a._v("多尺度：不断初始化搜索窗口的 "),s("code",[a._v("size")]),a._v(" 进行检测，从小窗口涌动判定人脸中提取出的特征是否能够满足所有训练好的强分类器的检测，不断扩大，在重复检测相同人脸时进行区域合并")])]),a._v(" "),s("p",[a._v("会输出很多的子窗口，在筛选式级联分类器下不断被每个检点筛选（抛弃/通过）")]),a._v(" "),s("h4",{attrs:{id:"检测函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#检测函数"}},[a._v("#")]),a._v(" 检测函数")]),a._v(" "),s("div",{staticClass:"language-cpp line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[a._v("cv"),s("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[a._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("detectMultiScale")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" Mat "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    vector"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v(" objects"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("double")]),a._v(" scaleFactor "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" minNeighbors"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" flag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    cvSize\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br")])]),s("h4",{attrs:{id:"参数分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数分析"}},[a._v("#")]),a._v(" 参数分析")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("image")]),a._v("：输入的灰度图像")]),a._v(" "),s("li",[s("code",[a._v("objects")]),a._v("：得到的被检测物体的矩形框向量组")]),a._v(" "),s("li",[s("code",[a._v("sdcaleFactor")]),a._v("：尺度参数，决定两个不同大小的窗口扫描之间有多大跳跃。设置过大可以减少计算时间，但可能会错过某个大小的人脸。")]),a._v(" "),s("li",[s("code",[a._v("minNeighbors")]),a._v("：每个级联举行应保留的临近个数，默认为 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mn",[a._v("3")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[a._v("3")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),s("span",{staticClass:"mord"},[a._v("3")])])])]),a._v(" 意味着至少三次重叠检测才可以认为人脸存在。")]),a._v(" "),s("li",[s("code",[a._v("flags")]),a._v("：\n"),s("ul",[s("li",[s("code",[a._v("CV_HAAR_DO_CANNY_PRUNING")]),a._v("：分类器跳过平滑区域")]),a._v(" "),s("li",[s("code",[a._v("CV_HAAR_SCALE_IMAGE")]),a._v("：不缩放分类器，而是缩放图像")]),a._v(" "),s("li",[s("code",[a._v("CV_HAAR_FIND_BIGGEST_OBJECTS")]),a._v("：返回最大目标")]),a._v(" "),s("li",[s("code",[a._v("CV_HAAR_DO_ROUGH_SEARCH")]),a._v("：在任何窗口发现第一个候选者就结束寻找")])])]),a._v(" "),s("li",[s("code",[a._v("cvSize()")]),a._v("：寻找人脸的最小区域。")])]),a._v(" "),s("h3",{attrs:{id:"训练加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#训练加载"}},[a._v("#")]),a._v(" 训练加载")]),a._v(" "),s("p",[a._v("声明级联分类器并用 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[a._v("o")]),s("mi",[a._v("p")]),s("mi",[a._v("e")]),s("mi",[a._v("n")]),s("mi",[a._v("c")]),s("mi",[a._v("v")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[a._v("opencv")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.625em","vertical-align":"-0.19444em"}}),s("span",{staticClass:"mord mathnormal"},[a._v("o")]),s("span",{staticClass:"mord mathnormal"},[a._v("p")]),s("span",{staticClass:"mord mathnormal"},[a._v("e")]),s("span",{staticClass:"mord mathnormal"},[a._v("n")]),s("span",{staticClass:"mord mathnormal"},[a._v("c")]),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[a._v("v")])])])]),a._v(" 内置的训练内容加载")]),a._v(" "),s("div",{staticClass:"language-cpp line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[a._v("cv"),s("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[a._v("::")]),a._v("CascadeClassifier cascade"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\ncascade"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("load")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/.../opencv-4.5.0/data/haarcascades/haarcascade_frontalface_alt.xml"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("也可以直接")]),a._v(" "),s("div",{staticClass:"language-cpp line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[a._v("cv"),s("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[a._v("::")]),a._v("CascadeClassifier cascade "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" cv"),s("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[a._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("CascadeClassifier")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/.../opencv-4.5.0/data/haarcascades/haarcascade_frontalface_alt.xml"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);