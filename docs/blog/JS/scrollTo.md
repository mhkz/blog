# scroll平滑滚动到指定位置
学习[vue-element-admin](https://github.com/PanJiaChen/vue-element-admin)这个项目的table组件的时候，点击分页会主动滚动到最上面，方便查看。觉得这个功能挺不错，就去研究了一下它的实现方式。

源码位置位于`src/utils/scroll-to.js`，对外暴露了一个scrollTo方法。
```js
/**
 * @param {number} to 滚动到位置
 * @param {number} duration 滚动动画持续时间
 * @param {Function} callback 滚动结束回调函数
 */
export function scrollTo(to, duration, callback) {
  // todo
}
```

## requestAnimationFrame
[requestAnimationFrame](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame)告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行。并且改回调函数执行此时通常与浏览器屏幕刷新次数相匹配。通常为每秒60次。

优点：

在来看标题`scroll平滑滚动到指定位置`，自然而然就能想到，在requestAnimationFrame的回调的回调函数中一次次的修改一下滚动的位置，就可以实现一个平滑的scroll滚动了。查看了一下`element-ui`的`Backtop`组件中也是使用这个api来实现的。

## 实现思路
Element.scrollTop 属性可以获取或设置一个元素的内容垂直滚动的像素数。
- 1.通过scrollTop获取元素垂直滚动的像素值（start）。
- 2.requestAnimationFrame回调函数的执行次数通常是每秒60次，也就是每17秒左右一次。通过duration（持续时间）和17秒算出整个动画执行次数。
- 3.通过前两步的数据算出每次向上滚动的距离，通过scrollTop设置元素滚动的像素。
- 4.在duration结束后，停止requestAnimationFrame回调的执行。


## 实现
```ts
const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
  t /= d / 2;
  if (t < 1) {
    return (c / 2) * t * t + b;
  }
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
};

// 最后面哪个setTimeout是为了兼容不支持requestAnimationFrame的浏览器。
const requestAnimFrame = (function() {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    (window as any).mozRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, 1000 / 60);
    }
  );
})();

// 这里不太好检测滚动是哪个元素，所以干脆都移动了
function move(amount: number) {
  document.documentElement.scrollTop = amount;
  (document.body.parentNode as HTMLElement).scrollTop = amount;
  document.body.scrollTop = amount;
}
function position() {
  return (
    document.documentElement.scrollTop ||
    (document.body.parentNode as HTMLElement).scrollTop ||
    document.body.scrollTop
  );
}
export function scrollTo(to: number, duration: number, callback?: Function) {
  // 开始滚动的位置
  const start = position();
  // 需要滚动的距离
  const change = to - start;
  // 当前时间
  let currentTime = 0;
  // 每次增长时间
  // 注：vue-element-admin中这个值是20，如果不考虑兼容性，我个人觉得应该设置为17毫秒，因为按照requestAnimationFrame回调函数每秒执行60此来算，每次花费16.666666毫秒，猜测设置为20毫秒是为了防止setTimeout出现延时造成问题吧。
  const increment = 20;
  // 持续时间，默认500毫秒
  duration = typeof duration === "undefined" ? 500 : duration;

  const animateScroll = function() {
    currentTime += increment;
    // 计算移动的距离
    const val = easeInOutQuad(currentTime, start, change, duration);
    // 移动
    move(val);

    if (currentTime < duration) {
      // 递归调用
      requestAnimFrame(animateScroll);
    }
  };
  animateScroll();
}

```

