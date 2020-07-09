# input输入框

## 分析
el-input支持text，textarea以及其他原生的input type值。所以简化一下结构如下：
```vue
<template>
  <div
  :class="[
      type === 'textarea' ? 'el-textarea' : 'el-input'
    ]"
  >
    <template v-if="type !== 'textarea'">
      <input :type="type">
    </template>
    <template v-else>
      <input :type="type">
    </template>
  </div>
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        default: 'text'
      }
    }
  }
</script>
```

## v-model双向绑定
先看以下代码：
```vue
<template>
  <el-input :value="msg" @input="inputEvent"></el-input>
</template>
<script>
import ElInput from './views/input'
  export default {
    components: {
      ElInput
    },
    data() {
      return {
        msg: ''
      }
    },
    methods: {
      inputEvent(val) {
        this.msg = val;
      } 
    }
  }
</script>
```
```vue
<template>
  <input type="text" :value="value" @input="handleInput">
</template>

<script>
  export default {
    props: {
      value: [String, Number]
    },
    methods: {
      handleInput(event) {
        this.$emit('input', event.target.value)
      }
    }
  }
</script>
```
上面的内容是一个金典的父子通信方式，用v-model就可以将第一个组件简化为如下：
```vue
<template>
  <el-input v-model="msg"></el-input>
</template>
<script>
import ElInput from './views/input'
  export default {
    components: {
      ElInput
    },
    data() {
      return {
        msg: ''
      }
    }
  }
</script>
```
`v-model`就是一个语法糖，帮你少些一些代码而已。<br />
类比一下
