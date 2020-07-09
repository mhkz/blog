# 工具函数
记录一些常用的工具函数的实现

## 深拷贝
由于js的对象类型一般都是按引用传递的，最终都是指向一个内存地址，如果不注意的话，有时候改一个就可能导致很多地方改变。所以有时候我们需要对`Object`类型的数据进行深拷贝。

<!-- ### 方法一
JSON.parse(JSON.stringify(obj))。<br />
原理：先将对象转为字符串，在通过JSON.parse重新建立一个对象。<br />
上面这种方式一般开发中用够了，但是数据中如果存在下面几种情况，就不能用这种方法了：
```js
// 问题一：不能复制function，正则，Symbol， undefined
let obj = { 
  reg: /^abc$/,
  fn: function() {
    console.log('hello world')
  },
  name: '隔壁老王'
}
console.log(JSON.parse(JSON.stringify(obj)))    // { reg: {}, name: '隔壁老王' }
``` -->

先来实现一个简单的深拷贝
```js
function deepClone(source) {
  let targetObj = {};
  Object.keys(source).forEach(keys => {
    targetObj[keys] = source[keys]
  })
  return targetObj
}
```
上面的函数就实现了对一个简单对象的拷贝。但是还不够，因为我们要拷贝的数据有可能是`数组`，`数组对象`，`对象嵌套对象`等，比如下面的这三种。

```js
let arr1 = [1, 2, 3, 4, 5]
let arr2 = [{ name: '小张' }, { name: '小王' }]
let arr3 = [
  { 
    role: '大区经理',
    children: [               // 二级嵌套
      {
        role: '地区经理1',
        children: [           // 三级嵌套
          {
            role: '区域代表1'
          }
        ]
      }
    ]
  }
]
// 同理，也会有对象的多层嵌套
```
当我们刚才那个函数遇到上面这三种情况的时候，就无法起作用了。所以我们要对其进行改造


```js
// 改造一: 让其支持数组/数组对象的深拷贝
function deepClone(source) {
  // let targetObj = {};
  let targetObj = source.constructor === Array ? [] : {}
  Object.keys(source).forEach(keys => {
    targetObj[keys] = source[keys]
  })
  return targetObj
}
```
上面的改造可是支持数组的clone， 但是还不支持嵌套的clone，下面实现多层嵌套的`Object`类型数据的clone
```js
// 改造二: 支持多级嵌套（最终版）
function deepClone(source) {
  // 递归终止条件
  if(source && typeof source !== 'object') {
    return
  }
  // let targetObj = {};
  let targetObj = source.constructor === Array ? [] : {}
  Object.keys(source).forEach(keys => {
    // 判断是source[keys]是否为对象
    if(source[keys] && typeof source[keys] === 'object') {
      // 递归clone
      source[keys] = deepClone(source[keys])
    } else {
      targetObj[keys] = source[keys]
    }
  })
  return targetObj
}
```
上面方法大部分情况下都够用，但是
