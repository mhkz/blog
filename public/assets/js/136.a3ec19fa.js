(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{715:function(n,s,e){"use strict";e.r(s);var a=e(5),t=Object(a.a)({},(function(){var n=this,s=n.$createElement,e=n._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h2",{attrs:{id:"macos"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#macos"}},[n._v("#")]),n._v(" MacOS")]),n._v(" "),e("p",[n._v("作者的 "),e("code",[n._v("homebrew")]),n._v(" 在下载这个的时候不断出问题，于是这里使用非 "),e("code",[n._v("homebrew")]),n._v(" 的安装方案")]),n._v(" "),e("h3",{attrs:{id:"安装-xcode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-xcode"}},[n._v("#")]),n._v(" 安装 Xcode")]),n._v(" "),e("p",[n._v("首先在 "),e("code",[n._v("AppStore")]),n._v(" 上搜索 "),e("code",[n._v("Xcode")]),n._v(" 然后手动点击下载即可"),e("br"),n._v("\n终端输入命令 "),e("code",[n._v("sudo xcodebuild -licens")]),n._v(" ，然后按它的协议不断按下 "),e("code",[n._v("enter")]),n._v(" 直到给出询问是否同意，写入 "),e("code",[n._v("agree")]),n._v(" 即可"),e("br"),n._v("\n再输入 "),e("code",[n._v("sudo xcode-select --install")])]),n._v(" "),e("h3",{attrs:{id:"安装-conda"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-conda"}},[n._v("#")]),n._v(" 安装 conda")]),n._v(" "),e("p",[n._v("前往 "),e("a",{attrs:{href:"https://github.com/conda-forge/miniforge",target:"_blank",rel:"noopener noreferrer"}},[n._v("Github下载链接"),e("OutboundLink")],1),e("br"),n._v("\n在这里选择对应电脑系统的版本复制其路径"),e("br"),n._v(" "),e("img",{attrs:{src:"https://raw.githubusercontent.com/Tequila-Avage/PicGoBeds/master/20221203110238.png",alt:"20221203110238"}}),e("br"),n._v("\n在终端输入命令 "),e("code",[n._v("curl -L -O <复制下来的路径>")]),e("br"),n._v("\n或者直接用链接下载后 "),e("code",[n._v("cd")]),n._v(" 到下载目录内")]),n._v(" "),e("p",[n._v("对下载的 "),e("code",[n._v(".sh")]),n._v(" 文件加入可执行权限"),e("br"),n._v("\n如作者下载的是 "),e("code",[n._v("OS X - x86_64")]),n._v(" 版本，就 "),e("code",[n._v("chmod +x Miniforge3-MacOSX-x86_64.sh")]),e("br"),n._v("\n然后执行 "),e("code",[n._v("./Miniforge3-MacOSX-x86_64.sh -u")])]),n._v(" "),e("p",[e("code",[n._v("source ~/.zshrc")]),n._v(" 用作保存")]),n._v(" "),e("h3",{attrs:{id:"安装-numpy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-numpy"}},[n._v("#")]),n._v(" 安装 numpy")]),n._v(" "),e("p",[n._v("终端输入 "),e("code",[n._v("conda search numpy")]),n._v(" 发现里面有 "),e("code",[n._v("numpy")]),e("br"),n._v("\n于是直接 "),e("code",[n._v("conda install numpy")])]),n._v(" "),e("p",[n._v("完成后测试一下：")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("python -v\n>>> import numpy\n>>>\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br")])]),e("p",[n._v("发现无报错，说明安装好了")]),n._v(" "),e("h3",{attrs:{id:"编译-openccv"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编译-openccv"}},[n._v("#")]),n._v(" 编译 OpencCV")]),n._v(" "),e("p",[n._v("终端依次输入以下命令")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("wget -O opencv.zip https://github.com/opencv/opencv/archive/4.5.0.zip\nwget -O opencv_contrib.zip https://github.com/opencv/opencv_contrib/archive/4.5.0.zip\nunzip opencv.zip\nunzip opencv_contrib.zip\ncd opencv-4.5.0\nmkdir build && cd build\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br")])]),e("p",[n._v("打入编译配置命令，以 "),e("code",[n._v("x86_64")]),n._v(" 为例")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("cmake \\\n  -DCMAKE_SYSTEM_PROCESSOR=x86_64 \\\n  -DCMAKE_OSX_ARCHITECTURES=x86_64 \\\n  -DWITH_OPENJPEG=OFF \\\n  -DWITH_IPP=OFF \\\n  -D CMAKE_BUILD_TYPE=RELEASE \\\n  -D CMAKE_INSTALL_PREFIX=/usr/local \\\n  -D OPENCV_EXTRA_MODULES_PATH=/Users/snopzyz/opencv_contrib-4.5.0/modules \\\n  -D PYTHON3_EXECUTABLE=/Users/snopzyz/miniforge3/bin/python3 \\\n  -D BUILD_opencv_python2=OFF \\\n  -D BUILD_opencv_python3=ON \\\n  -D INSTALL_PYTHON_EXAMPLES=ON \\\n  -D INSTALL_C_EXAMPLES=OFF \\\n  -D OPENCV_ENABLE_NONFREE=ON \\\n  -D BUILD_EXAMPLES=ON ..\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br")])]),e("p",[n._v("然后执行 "),e("code",[n._v("make -j8")]),n._v(" 和 "),e("code",[n._v("sudo make install")])])])}),[],!1,null,null,null);s.default=t.exports}}]);