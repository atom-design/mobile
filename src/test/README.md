# PublicComponents

基于 `Vue.js` 的公共组件仓库，使用 webpack 搭建一个 library 脚手架可以参考这个仓库的源码。

## npm 安裝 / yarn

```bash
npm i hbf-public-components --save-dev
```

```bash
yarn add hbf-public-components -D
```

## 引入方式

### Script 标签

将打包后的文件放到自己的 CDN 上面，然后引入

```html
<script src="https://你的CDN地址/hbf.min.js"></script>
<script>
  console.log(window.Hbf)  // 打印你导出的对象
</script>
```

### 全量引入

```javascript
// main.js
import Vue from 'vue'
import hbf from 'hbf-public-components'

Vue.use(hbf) // 会执行hbf的install方法，内部全部组件全局注册
```

### 按需引入

首先安装`babel-plugin-import`

```bash
yarn add babel-plugin-import -D
```

配置`.babelrc`

```javascript
"plugins": [
  ["import", {
    "libraryName": "hbf-public-components",
    "libraryDirectory": "lib/components"
  }]
]
```

使用`webpack-bundle-analyzer`可以查看模块按需引入的打包依赖图。

## 引入公共组件示例

```
<template>
  <public-menu :data="xxx">
  </public-menu>
</template>

import { publicMenu } from 'hbf-public-components'

export default {
  components: {
    publicMenu,
  },
}
```

## 公共组件编写

参考 [组件编写约定](https://github.com/huya-base-fed/public-components/blob/master/lib/README.md)
