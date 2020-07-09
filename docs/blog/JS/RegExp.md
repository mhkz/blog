# 正则表达式

## 常见用例
示例一：统计下面html字符串中span标签出现的次数
```js
const html = `<div>
              <span>姓名</span>
              晓枫
              <span>年龄</span>
              22
              <span>爱好</span>
              coding
            </div>`
const reg = /<span>.*?<\/span>/g
let result = html.match(reg)
console.log(result.length)  // 3
```

示例二：统计jpg格式的文件名
```js
const str = 'avatar.jpg lock.png loading.gif add.jpg'
const reg = /\b(\w+)(?=\.jpg)\b/g
let result = str.match(reg)
console.log(result)   // [ 'avatar', 'add' ]
```


:::tip
**mdn**: 正则表达式是用于匹配字符串中字符组合的模式。在 JavaScript中，正则表达式也是对象。这些模式被用于 RegExp 的 exec 和 test 方法, 以及 String 的 match、matchAll、replace、search 和 split 方法。<br/>

**维基百科**：正规表达式使用单个字符串来描述、匹配一系列符合某个句法规则的字符串。在很多文本编辑器里，正规表达式通常被用来检索、替换那些符合某个模式的文本。
:::
我更喜欢维基百科的描述。

## 创建一个正则表达式
可以使用以下两种方式创建：
```js
// 字面量形式（比较常用）
var rep = /ab+c/;
// 对象形式
var rep = new RegExp("ab+c");
```

## 基本语法
<style>
table tbody tr td:first-of-type,
table tbody tr td:nth-of-type(3) {
  color: #c90b33;
  background-color: rgba(27,31,35,0.05);
}
table tbody tr td:nth-child(2n) {
  width: 50%;
}
table tbody tr:nth-child(2n) {
  background-color: transparent;
}
</style>

| 参数 |  说明 | 参数 | 说明 |
| ---- | -----| ---- | ---- |
| [xyz]	 | 	一个字符集，匹配任意一个包含的字符 | [^xyz] | 一个否定字符集，匹配任何未包含的字符 |
| \w | 	匹配字母或数字或者下划线的字符 | [\W] | 匹配不是字母，数字，下划线的字符 |
| \s | 	匹配任意空白符 | [\S] | 匹配不是空白符的字符 |
| \d | 	匹配数字  | [\D] | 匹配非数字的字符 |
| \b | 	匹配单词的开始或结束的位置 | [\B] | 匹配不是单词开头或结束的位置 |
| ^	| 	匹配字符串的开始 | [$] | 匹配字符串的结束 |
### 练习
```js
// [xyz]和[^xyz]
/[ab]/.test('abc')     // true
/[^ab]/.test('ab')     // false

/[ab]/.test('bcd')     // true
/[ab]/.test('cde')     // false

// \w和\W
/\w/.test('abc123_')   // true
/\W/.test('abc123_')   // false

/\w/.test('abc@#')     // true
/\W/.test('abc@#')     // true

/\w/.test('@#$')       // false
/\W/.test('@#$')       // true
// ^和$
/^ab/.test('abcde')    // true
/^ab/.test('bcdef')    // false
/abc$/.test('123abc')  // true
/abc$/.test('abc123')  // false
...
```


## 重复相关的正则
<style>
table tbody tr td:first-of-type {
  width: 50px;
}
</style>
| 参数 | 说明 |
| ---- | ---- |
| * | 重复0次或者更多次 |
| + | 重复1次或者更多次 |
| ? | 重复0次或者1次 |
| { n } | 重复n次 |
| { n, } | 重复n次或者更多次 |
| { n, m} | 重复n-m次 |

### 练习
```js
// *和+
/^[a]*@gmail$/.test('@gmail')         // true
/^[a]+@gmail$/.test('@gmail')         // false

// ?
/^[a]?@gmail$/.test('@gmail')         // true
/^[a]?@gmail$/.test('a@gmail')        // true
/^[a]?@gmail$/.test('aaa@gmail')      // false

// { n }
/^[a]{2}@gmail$/.test('a@gmail')      // false
/^[a]{2}@gmail$/.test('aa@gmail')     // true
/^[a]{2}@gmail$/.test('aaa@gmail')    // false
```

## 正则表达式的方法
上面一直是用正则的test方法判断字符串是否匹配，js中正则还有一些其它方法，如下：
| 方法 | 说明 |
| ---- | ---- |
| exec |	一个在字符串中执行查找匹配的RegExp方法，它返回一个数组（未匹配到则返回 null）。|
| test |	一个在字符串中测试是否匹配的RegExp方法，它返回 true 或 false。|
| match |	一个在字符串中执行查找匹配的String方法，它返回一个数组，在未匹配到时会返回 null。|
| matchAll |	一个在字符串中执行查找所有匹配的String方法，它返回一个迭代器（iterator）。|
| replace |	一个在字符串中执行查找匹配的String方法，并且使用替换字符串替换掉匹配到的子字符串。|
| search |	一个在字符串中测试匹配的String方法，它返回匹配到的位置索引，或者在失败时返回-1。|
| split |	一个使用正则表达式或者一个固定字符串分隔一个字符串，并将分隔后的子字符串存储到数组中的 String 方法。|

当你想要知道在一个字符串中的一个匹配是否被找到，你可以使用 test 或 search 方法；想得到更多的信息（但是比较慢）则可以使用 exec 或 match 方法。

正则中除了test方法外，exec方法经常用到。

### exec
exec() 方法在一个指定字符串中执行一个搜索匹配。返回一个结果数组或 null。
```js
// 示例一：
let res1 = /@/.exec('abc@gmail.com')   // [ '@', index: 3, input: 'abc@gmail.com', groups: undefined ]
console.log(res1[0])  // '@'
// 示例二：
let res = /@(gmail)/.exec('abc@gmail.com')
// [
//   '@gmail',
//   'gmail',
//   index: 3,
//   input: 'abc@gmail.com',
//   groups: undefined
// ]
console.log(res[0]) // @gmail
console.log(res[1]) // gmail
```
通过上面两个例子可以看到，exec会将符合正则的字符串以及符合括号内的字符串都选出来放到一个数组中。这就是捕获的概念。

## 分组与捕获
通过上面exec方法示例二中可以看到，exec会捕获到匹配的字符以及括号内匹配到的字符。

我们一般将括号内的正则叫做`分组`，将匹配到括号内的字符放到结果数组中叫做`捕获`，在来看一个邮箱匹配的例子：
```js
// 捕获@和gmail或者163 既@ && gmail || 163
const reg = /(@)(gmail|163)/
let str1 = 'abc@gmail.com'
let str2 = 'abc@163.com'
console.log(reg.exec(str1))
// str1 = [
//   '@gmail',
//   '@',
//   'gmail',
//   index: 3,
//   input: 'abc@gmail.com',
//   groups: undefined
// ]
console.log(reg.exec(str2))
// str2 = [
//   '@163',
//   '@',
//   '163',
//   index: 3,
//   input: 'abc@163.com',
//   groups: undefined
// ]
```
看完上面例子，你应该对`捕获`和`分组`熟悉了吧。

还有一个非捕获性分组，假如上面例子中我只想捕获到@符号，不想捕获到后面的gmail或者163，那此时就可以用非捕获性分组，使用方式如下
```js
// 使用方式(?:)
const reg = /(@)(?:gmail|163)/
// 这样使用exec的时候就只会捕获@符号
```

## 贪婪匹配和惰性匹配
如果有如下这样一段html字符串，让你将\<span>hello\</span>通过正则匹配出来，你会怎么写
```js
const html = '<span>hello</span><span>world</span>'

const reg1 = /<span>.+<\/span>/
const result1 = reg1.exec(html)
// 按照上面写法，result1结果如下：
// ['<span>hello</span><span>world</span>']

```
如果你写出的正则和下面一样的话，你打印会发现结果并不是你想要的
```js
const reg1 = /<span>.+<\/span>/
const result1 = reg1.exec(html)
// result1 = ['<span>hello</span><span>world</span>']
```
出现上面的原因是，js正则会默认尽可能多的给你去匹配，第一个\<span>和结尾的\</span>也满足这个正则，所以就会都匹配出来，这就是所谓的**贪婪匹配**

如果你只想匹配到第一个结果就停止的话，就需要用到**惰性匹配**，将上面正则改一下如下：
```js
const reg1 = /<span>.+?<\/span>/
const result1 = reg1.exec(html)
// result1 = ['<span>hello</span>']
```
上面多加了个?就是**惰性匹配**了，匹配到第一个符合条件的就不继续往下了。参考示例一

## 正向前瞻&负向前瞻
