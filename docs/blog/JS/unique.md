# 数组去重
记录常见的数组去重方法。

## 1、利用ES6 Set方法
```js
[...new Set(arr)]
```
最简单方便，缺点：1、兼容。2、无法去掉{}空对象。

## 2、两层for循环splice去重
```js
function unique(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
      if(arr[i] === arr[j]) {
        arr.splice(j, 1);
        j--;
      }
    }
  }
  return arr;
}
```
## 3、利用indexOf去重
```js
function unique(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
```

## 4、利用filter去重
```js
function unique(arr) {
  return arr.filter((item, index, arr) => {
    return arr.indexOf(item) === index;
  })
}
```

## 5、相邻元素去重
```js
function unique(arr) {
  let list = [];
  // sort排序
  arr.sort();
  for (let i = 0; i < arr.length; i++) {
    // 排序后的数据前后对比，如果不同则push进新数组
    if(arr[i] !== arr[i+1]) {
      list.push(arr[i])
    }
  }
  return list;
}
```
大部分情况下以上这几种够用了，如果想了解更多的，可以看下面这篇文章。<br />
[JavaScript数组去重（12种方法，史上最全）](https://segmentfault.com/a/1190000016418021)