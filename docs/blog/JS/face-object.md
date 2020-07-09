# 面对对象
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript)：面向对象编程是用抽象方式创建基于现实世界模型的一种编程模式。<br/>

我个人的理解是：编程的目的是服务于现实社会，拿万达商城来讲，万达商城都有分类，比如一楼都是一些珠宝首饰，电子产品等，二楼是服饰，三楼休闲娱乐等。如果我现在想去买衣服，我肯定会直接去逛二楼，然后去逛阿迪，李宁等店铺，最终我在李宁买了一件卫衣。

如果此时让你实现一个网上商城，参考万达，你肯定也会实现商品的分类，我去买卫衣，肯定先去服饰分类，然后一件件浏览，最终选择了李宁的卫衣。类比到编程，服饰就是对象，具体到李宁那件卫衣就是实例。服饰是一系列衣服的抽象表示，卫衣就是某一件具体的衣服。在编程语言中，我们吧抽象的叫做对象（服饰），具体的叫做对象（李宁卫衣）。


## 概念图示
知乎中找到一张描述面对对象中一些概念很经典的图。
![face-object](../images/js/face_object.jpg)

## 工厂模式
工厂模式听这取名就知道是类比自显示中的工厂。拿富士康iphone生产线来讲，给一系列原材料，比如摄像头，cpu，玻璃屏幕等等，就可以生产出一台台的iphone。用程序来表示如下：
```js
function iphone(camera, cpu, screen) {
  // 中间省略一系列组装操作
  // 返回一个iphone
  return {
    camera: camera,
    cpu: cpu,
    screen: screen
  }
}
// 生产10000个iphone
for (let i = 0; i < 10000; i++) {
  iphone('索尼', '高通', '康宁大猩猩玻璃')
}
// 以上操作就能生产10000个搭载索尼摄像头，高通cpu，康宁大猩猩屏幕的ihpone手机
```
可以看出工程模式作用就是方便我们快速生产同一类型的实例（iphone）

## 函数
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions): 一般来说，一个函数是可以通过外部代码调用的一个“子程序”（或在递归的情况下由内部函数调用）。像程序本身一样，一个函数由称为函数体的一系列语句组成。值可以传递给一个函数，函数将返回一个值。

在 JavaScript中，函数是头等(first-class)对象，因为它们可以像任何其他对象一样具有属性和方法。它们与其他对象的区别在于函数可以被调用。简而言之，它们是Function对象。

### 函数的arguments
来看上面生产手机的例子
```js
function iphone(camera, cpu, screen) {
  return {
    camera: camera,
    cpu: cpu,
    screen: screen
  }
}
// 等价于
function iphone() {
  return {
    camera: arguments[0],
    cpu: arguments[1],
    screen: arguments[2]
  }
}
```
arguments: 一个包含了传递给当前执行函数参数的类似于数组的`对象`。注意arguments是一个类似数组的对象，但不是数组。

- 1、特点：是一个对象、类数组（可通过数组下标访问）、有length属性。
- 2、优点：适合动态参数场景。
- 3、注意：不要滥用，非常影响代码可读性，你写个arguments[0]其他人一眼看去根本不是道表示的啥。

#### 动态参数
实现一个求和函数，输入参数不定，要求输出所有参数累加的和。
```js
function accumulate() {
  // 获取参数长度
  const len = arguments.length;
  let result = 0;// 返回的求和结果
  if(len) {
    for (let i = 0; i < len; i++) {
      console.log(arguments[i])
      result += arguments[i]
    }
  }
  return result;
}
```

### 函数的this
绝大多数情况下，函数的调用方式决定了this的值。this不能在执行期间被赋值，并且在每次函数被调用时this的值也可能会不同。可以通过bind，apply，call来认为改变this指向。

总结：this就是一个`执行环境对象`。大部分情况下，由调用时候的执行环境决定，人为可以通过bind等方法来改变this执行。ES6箭头函数this是在函数定义的时候确定this指向。
```js
window.name = '化腾';

var obj = {
  name: '建林'
}
function getName() {
  console.log(this.name);
}
// 箭头函数this在声明时确定，此时this指向全局window，之后不管在任何执行环境下调用，sayName的this都是指向window。
var sayName = () => {
  console.log(this.name);
}

// getName执行环境为window对象
getName();  // 化腾
obj.getName = getName;
// 此时getName执行环境对象就变成了obj对象
obj.getName()  // 建林


sayName();  // 化腾
obj.sayName = sayName;
obj.sayName() // 化腾
```

### bind、call、apply区别
:::tip
1、bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。<br/>
2、call() 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数。<br />
3、apply() 方法调用一个具有给定this值的函数，以及作为一个数组（或类似数组对象）提供的参数。
:::

相同点：三者都具备改变函数this指向的能力。<br />
不同点: <br/> 
1、bind是创建一个新函数。call和apply是调用一个函数。<br/>
2、call和apply区别：call()方法接受的是参数列表，apply()方法接受的是一个参数数组。

例子：
```js
window.name = '化腾';

var obj = {
  name: '建林'
}
function getName() {
  console.log(this.name);
  console.log(arguments)
}

var sayName = () => {
  console.log(this.name);
}

// 这里人为的将this指向了obj
getName.call(obj, 'a', 'b');    // 建林。Arguments['a', 'b'];
getName.apply(obj, ['a', 'b']); // 建林。Arguments['a', 'b'];


let getNameFunction = getName.bind(obj, 'a', 'b');    // ƒ getName()
getNameFunction();              // // 建林。Arguments['a', 'b'];

// 经测试，call，bind，apply都无法改变箭头函数内的this指向
getName.call(obj, 'a', 'b');
```

### first-class
前面说介绍函数说，函数是头等(first-class)对象（有的也将这个概念说成是一等公民）。

那啥叫first-class呢，既然有first-class是不也有second-class呢。
- first-class：可以作为函数的参数和返回值，也可以赋给变量。
- second-class: 可以作为函数的参数，但不能从函数返回，并且也不能赋值给变量。
- third-class：不能作为函数的参数。

日常使用的string，number，object，function等都是头等对象，至于second-class，third-class有哪些，暂时还没想到，想到补充。

### 闭包
闭包是指有权访问另一个函数作用域中变量的函数 —— javascript高级程序设计。<br />

简单总结一下：1、闭包是一个函数。2、能访问到另外一个函数作用域中的变量。
```js
function fn() {
  var name = '建林';
  
  // getName是一个函数，getName可以访问到fn函数作用域内的name值。
  // 结论：getName是一个闭包。
  var getName = function() {
    console.log(name)
  }
}
```
上面代码描述了一个很简单的闭包。一开始我会好奇，这有毛用啊。<br/>

但是结合我们上面说的函数是first-class的特性来改造一下上面这段代码：
```js
function fn() {
  var name = '建林';
  var getName = function() {
    console.log(name)
  }
  return getName;
}
let name = fn();

// 这里我们能拿到函数fn内的数据name值了
name(); // 建林
```
这样我们就可以在函数外边拿到函数内部的值了。看到这里你可能还是会觉得这有毛用啊，没错一开始我也是这样觉得，不就能访问到函数内部变量吗，咋这玩意吹的这么厉害。

#### 闭包实际用途
防抖函数在日常开发比较常用，实现一个简单的防抖函数。
```html
<button onclick="debounce(fn, 500)">点一下</button>
```
```js
var timmer = '';
function debounce(fn, wait) {
  // 进来清除定时器
  if(timmer) {
    clearTimeout(timmer);
    timmer = '';
  }
  timmer = setTimeout(function() {
    fn()
  }, wait)
}
function fn() {
  console.log('点击了')
}
```
上面代码实现了一个简单的防抖函数，但是存在一个问题，我们暴露了一个全局变量timmer。

用闭包改写防抖函数：
```html
<button onclick="handleClick()">点一下</button>
```
```js
function debounce(fn, wait) {
  var timer = '';
  return function () {
    if (timer) {
      clearTimeout(timer);
      timer = '';
    }
    timer = setTimeout(function () {
      fn();
    }, wait);
  };
}
function fn() {
  console.log("点击了");
}
var handleClick = debounce(fn, 500)
```
