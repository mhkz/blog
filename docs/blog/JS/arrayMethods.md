---
title: 'js数组常用方法总结'
date: 2020-06-11
---
总结日常开发中经常用到的操作数组的方法。

## push(value) <span style="color: red">改变原数组</span>
push() 方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度。
```js
let list = ['11', '22'];
const len = list.push('33');
console.log(len)  // 3
console.log(list) // [ '11', '22', '33' ]
```

## unshift(value)<span style="color: red">改变原数组</span>
unshift() 方法将一个或多个元素添加到数组的开头，并返回该数组的新长度(该方法修改原有数组)。
```js
let list = ['11', '22'];
const len = list.unshift('33');
console.log(len)  // 3
console.log(list) // [ '33', '11', '22' ]
```

## pop()<span style="color: red">改变原数组</span>
pop()方法从数组中删除最后一个元素，并返回该元素的值。此方法更改数组的长度。
```js
let list = ['11', '22'];
const val = list.pop();
console.log(val)  // '22'
console.log(list) // [ '11' ]
```
## shift()<span style="color: red">改变原数组</span>
shift() 方法从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。
```js
let list = ['11', '22'];
const val = list.shift();
console.log(val)  // '11'
console.log(list) // [ '22' ]
```

## splice(index, num, value)<span style="color: red">改变原数组</span>
splice() 方法通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。
```js
let list = ['11', '22', '33', '44'];
let val = list.splice(0, 2);
console.log(val)  // [ '11', '22' ]
console.log(list) // [ '33', '44' ]
```

## reverse()<span style="color: red">改变原数组</span>
reverse() 方法将数组中元素的位置颠倒，并返回该数组。数组的第一个元素会变成最后一个，数组的最后一个元素变成第一个。该方法会改变原数组。
```js
let list = ['11', '22'];
const val = list.reverse();
console.log(val)  // [ '22', '11' ]
console.log(list) // [ '22', '11' ]
```

## sort()<span style="color: red">改变原数组</span>
sort() 方法用[原地算法](https://zh.wikipedia.org/wiki/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95)对数组的元素进行排序，并返回数组。默认排序顺序是在将元素转换为字符串，然后比较它们的UTF-16代码单元值序列时构建的

由于它取决于具体实现，因此无法保证排序的时间和空间复杂性。
```js
let list = ['44', '33', '22', '11'];
const val = list.sort();
console.log(val)  // [ '11', '22', '33', '44' ]
console.log(list) // [ '11', '22', '33', '44' ]
```



## join()<span style="color: #67C23A">不改变原数组</span>
join()方法将数组中所有元素连接为一个字符串。
```js
let list = ['11', '22'];
const val = list.join('');
console.log(val)  // '1122'
console.log(list) // [ '11', '22' ]
```


## slice(beginIndex, endIndex)<span style="color: #67C23A">不改变原数组</span>
slice() 方法提取某个字符串的一部分，并返回一个新的字符串，且不会改动原字符串。
```js
let list = ['11', '22', '33', '44'];
const val = list.slice(0, 2);
console.log(val)  // [ '11', '22' ]
console.log(list) // [ '11', '22', '33', '44' ]
```

## toString()<span style="color: #67C23A">不改变原数组</span>
toString()将数组中的元素用逗号拼接成字符串。
```js
let list = ['11', '22', '33', '44'];
const val = list.toString();
console.log(val)  // 11,22,33,44
console.log(list) // [ '11', '22', '33', '44' ]
```

## indexOf(value)<span style="color: #67C23A">不改变原数组</span>
