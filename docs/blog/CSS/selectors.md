# css选择器
CSS 选择器规定了 CSS 规则会被应用到哪些元素上。

## 基础选择器
基础选择器包括ID选择器、类选择器、标签选择器、通配符选择器和属性选择器。<br/>
这些个选择器比较简单，就直接说注意点。

### ID选择器
:::tip
1、ID选择器在同一个页面中应该是唯一的，如果同一个页面中出现了多个相同的ID选择器，对css不会有影响，但是js会获取元素只能获取到第一个id对应的元素。<br/>
2、理论上 ID 选择器是效率最高的选择器。但是由于它只能选一个元素，特异性太高，在实际开发中也很少在 CSS 里使用 ID 选择器。<br/>
3、也正是因为 ID 选择器特异性高，所以在 JS 里使用 ID 选择器的比较常见。
:::

### 类选择器
类选择器应该是开发中用的最多的，这个没啥好说的，略过。

### 通配符选择器
:::tip
1、通配符选择器会作用于所有元素，效率较低，一般用于统一设置一些样式，如下：
:::
```css
*,
*:before,
*:after {
  box-sizing: border-box;
}
/* or */
* {
  margin: 0;
  padding: 0;
}
```

### 标签选择器
```css
h1 {
  font-size: 14px;
}
```
:::tip
Tips: 标签选择器用来重置某些标签样式。
:::

### 属性选择器
通过DOM属性来选择节点，用户中括号[]包裹。例如：
```css
/* 选中带有href属性的a标签 */
a[href] {
  color: red;
}
/* 选中所有class为text的input标签 注意：[]里的值必须和HTML属性完全相等，比如<input class="text input" />是选不到的 */
input[class=text] {
  color: red;
}
/* 选中<input class="text input" /> */
input[class~=text] {
  color: red
}
```
-[attr~=xxx]，这个选择器中间用了～=，选择属性值中包含 xxx 的元素，但一定是逗号分隔的多个值中有一个能和 xxx 相等才行。
```md
<!-- HTML： -->
<input class="input text" type="text" value="大花碗里扣个大花活蛤蟆"/>
/* CSS： */
input[class~=input]{
    color: red;
}
```
- [attr|=xxx]，这个选择器是用来选择属性值为 xxx 或 xxx- 开头的元素，比较常用的场景是选择某一类的属性。
```md
<!-- HTML： -->
<div class="article">我是article</div>
<div class="article-title">我是article-title</div>
<div class="article-content">我是article-content</div>
<div class="article_footer">我是article_footer，不是以artical-开头的，(选不到)</div>

// CSS：
div[class|=article]{
    color: red;
}
```
- [attr^=xxx]，这个选择器会匹配以 xxx 开头的元素，实际上就是用正则去匹配属性值，只要是以 xxx 开头都可以。
```md
<!-- HTML： -->
<div class="article">我是article</div>
<div class="article-title">我是article-title</div>
<div class="article-content">我是article-content</div>
<div class="article_footer">我是article_footer</div>

// CSS：
div[class^=article]{
    color: red;
}
```
- [attr$=xxx]，这个选择器和上一个相似，它是用正则匹配的方式来选择属性值以 xxx 结尾的元素。
- [attr*=xxx]，最后一个，这个是用正则匹配的方式来选择属性值中包含 xxx 字符的所有元素。这个选择器的规则算是最宽泛的，只要 xxx 是元素属性值的子字符串，这个选择器就会生效。


:::tip
1. 属性选择器要做文本的匹配，所以效率也不会高。
2. 在使用属性选择器时，尽量要给它设置上生效的范围，如果只用了个 [href] 相当于要在所有元素里找带 href 的元素，效率会很低。如果用 a [href] 会好的多，如果用 .link [href] 就更好了。这种组合方式我们在下一节讲解。
3. 属性选择器很灵活，如果能使用 CSS 代替 JS 解决一些需求，可以不用太纠结性能的问题，用 JS 实现也一样要耗费资源的。
:::

## 组合选择器
基础选择器功能比较单一，一般用来做一些通用的配置。在日常开发中，我们经常用的还是组合选择器。

### 后代选择器
:::tip
Tips：后代选择器通常用来限制选择器生效的范围，防止因为选择器使用不当或者对元素命名出现重复造成的样式冲突。
:::
```css
.login-container .title {
  font-size: 20px
}
```
### 子元素选择器
:::tip
Tips：<br/>
子元素选择器的作用和后代选择器相似，也是用来限制选择器生效的范围。它和后代选择器不同的是：
1. 子元素选择器只匹配子元素，不会匹配后代元素。在有确定的父子关系时，尽量使用子元素选择器，效率会比后代选择器高。
2. 使用子元素选择器还可以避免对非直接后代的样式影响，在只想给子元素设置样式时会比后代选择器安全。
:::
```css
.page > p {
  color: red;
}
```

### 兄弟选择器
:::tip
Tips：<br/>
相邻兄弟选择器通常有两类用处：
1. 用于自动调整占位，比如后面在布局的时候，有 header 和没 header 情况下内容区的高度会不同，就可以使用相邻兄弟选择器来控制内容区的高度。
2. 相邻兄弟选择器的第二种用法是用来控制相同元素中间的间隔，比如在 List 组件开发时，每个 li 元素之间要加上分割线的需求就会通过相邻兄弟选择器来实现。
:::
```css
/* element-ui中el-button每个button之间10px间距实现方式 */
.el-button + .el-button {
  margin-left: 10px;
}
```

### 交集选择器
```html
<div class="menu">
  <a class="menu-item">菜单1</a>
  <a class="menu-item active">菜单2</a>
  <a class="menu-item">菜单3</a>
  <a class="menu-item">菜单4</a>
</div>
```
```css
.menu-item{
    background: #ccc;
    color: #000;
}
/* 中间不加空格 */
.menu-item.active{
    background: #aaa;
    color: #fff;
}
```

### 并集选择器
:::tip
用途：提取公共样式
:::
```css
h1 {
  margin: 0;
  color: red;
}
h2 {
  margin: 0;
  color: blue;
}

/* 使用并集选择器 */
h1,
h2 {
  margin: 0;
}
h1 {
  color: red;
}
h2 {
  color: blue;
}
```

## 伪类&伪元素选择器

### 伪类
伪类选择器是单:号，作用是用于选中一些不能被常规css选择器选到的元素，比如hover，active以及如果要获取到第一个子元素这种情况。所有支持的伪类可以查看[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes)
```css
a:hover {
  color: red;
}
a:active {
  color: blue;
}
a:first-child {
  color: yellow;
}
```

### 伪元素
伪元素是双::号，作用是用于向某些元素设置特殊效果，伪元素选择器选中的并不是真实的 DOM 元素，所以叫伪元素选择器。<br/>
最常见的就是清除浮动：
```css
.box::before,
.box::after{
  display: table;
  content: "";
}
.box::after {
  clear: both;
}
```

:::tip
1. 伪元素选择器构造的元素是虚拟的，所以不能用 JS 去操作它。
2. 在 CSS3 中，规定了伪类用一个冒号（:）表示，伪元素用两个冒号表示（::）。但除了 selection，其余四个伪元素选择器已经在 CSS2 中存在且和伪类用的是一样的单冒号表示的。为了向下兼容，现在的浏览器中伪元素选择器用单冒号和双冒号都可以。在没有兼容问题的情况下，还是建议大家按着新的 CSS3 标准来开发。
:::

