# 编写基础请求代码
axios库底层也是通过`XMLHttpRequest`这个对象来实现的。这一节实现一个对`XMLHttpRequest`对象的封装，来实现一个基础的请求。
```ts
axios({
  method: 'get',
  url: '/base/get',
  params: {
    a: '11',
    b: '22'
  }
})
```

## 创建Axios
```ts
function Axios(config) {
  xhr(config)
}
```

