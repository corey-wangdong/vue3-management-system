# 后台管理系统

## 使用到的相关技术栈介绍

1. 开发工具 :Visual Studio Code

- 编程语言 :TypeScript 4.x + JavaScript
- 构建工具 :Vite 3.x / Webpack5.x
- 前端框架 :Vue 3.x + setup
- 路由工具 :Vue Router 4.x
- 状态管理 :Vuex 4.x / Pinia
- UI 框架 :Element Plus
- 可视化 :Echart5.x
- 工具库 :@vueuse/core + dayjs + countup.js 等等
- CSS 预编译 :Sass / Less
- HTTP 工具 : Axios
- Git Hook 工具 :husky
- 代码规范 :EditorConfig + Prettier + ESLint
- 提交规范 :Commitizen + Commitlint
- 自动部署 :Centos + Jenkins + Nginx

## 创建 vue 项目

1. 方式一、 Vue CLI

- 基于 webpack 工具
- 命令：vue create

2. 方式二、create-vue

- 基于 vite 工具
- 命令：npm init vue@latest
  注意：采用方式二创建：需要安装 16.0 已上版本的 node

## 项目配置:

- 配置项目的 icon
- 配置项目的标题
- 配置项目别名等（vite 默认配置）
- 配置 tsconfig.json

## 配置项目环境

1. 安装 volar 和 volar+TS 插件：

- Vue Language Features (Volar)
- TypeScript Vue Plugin (Volar)

2. 配置 vue 文件模块：

```js
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent
  export default component
}
```

## 配置项目代码规范

- 见 项目搭建规范.md

## 项目目录结构划分

## CSS 样式的重置

1. 对默认 css 样式进行重置

- normalize.css
- reset.css

```js
yarn add normalize.css
```

## 路由配置

```js
yarn add vue-router
```

## 状态管理

- vuex: 目前依然使用较多的状态管理库;
- pinia: 强烈推荐, 未来趋势的状态管理库

```js
yarn add pinia
```

## 封装 axios

## 区分 development 和 production 环境

1. Vite 的环境变量：
2. Vite 在一个特殊的 import.meta.env 对象上暴露环境变量。这里有一些在所有情况下都可以使用的内建变量：

- import.meta.env.MODE: {string} 应用运行的模式。
- import.meta.env.PROD: {boolean} 应用是否运行在生产环境。
- import.meta.env.DEV: {boolean} 应用是否运行在开发环境 (永远与 import.meta.env.PROD 相反)。
- import.meta.env.SSR: {boolean} 应用是否运行在 server 上

3. Vite 使用 dotenv 从你的 环境目录 中的下列文件加载额外的环境变量：

```js
.env                   // 所有情况下都会加载
.env.local            // 所有情况下都会加载, 但会被 git 忽略
.env.[mode]          // 只在指定模式下加载
.env.[mode].local   // 只在指定模式下加载,但会被 git 忽略
```

- 只有以 VITE\_ 为前缀的变量才会暴露给经过 vite 处理的代码。
- VITE_URL=prod
