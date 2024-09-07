# vue-ts-tailwind-vite-starter

[English](https://github.com/hunter-ji/vue-ts-tailwind-vite-starter) | 简体中文

## 项目介绍

vue-ts-tailwind-vite-starter是一个前端项目模板，使用Vue3、TypeScript、TailwindCSS、Vite构建，可用于快速搭建前端项目。
并且配置了自动导入，无需手动导入组件，直接使用即可。

如果你有兴趣，也可以看看我的其它模板：

- 后端模板：[go-gin-api-starter](https://github.com/hunter-ji/go-gin-api-starter)
- 数据库模板：[postgres-redis-dev-docker-compose](https://github.com/hunter-ji/postgres-redis-dev-docker-compose)

## 技术栈

该模板主要使用了如下技术栈：

- Vue3
- TypeScript
- TailwindCSS
- Pinia
- Vue Router
- Vite
- ESLint
- Element Plus
- axios

## 特性

- 使用Vue3、TypeScript、TailwindCSS、Vite构建
- 配置了自动导入，无需手动导入组件，直接使用即可
- UI组件库使用Element Plus，且自动按需导入，无需手动导入组件
- 集成axios，并且配置拦截器，可直接使用
- 配置了ESLint，使用[@antfu/eslint-config](https://github.com/antfu/eslint-config)
- 集成svg loader，可直接使用svg文件
- 集成菜单模块，自动发现路由，无需手动配置
- 集成了一些常用的工具函数
- 多环境配置

## 快速使用

```bash
npx degit hunter-ji/vue-ts-tailwind-vite-starter my-app
cd my-app
pnpm install
```

## 更多使用

### 使用svg图标

在`src/assets/svg`目录下放入svg文件，然后在需要使用的地方直接引用即可。

```vue

<script setup lang="ts">
  // 以组件方式导入svg文件
  import IconSmile from '@/assets/svg/smile.svg?component'
</script>

<template>
  <IconSmile class="fill-yellow-200 stroke-red-500"/>
</template>
```

### 配置路由和菜单

在`src/router/index.ts`中配置路由，其中`meta`中的`hidden`字段用来控制是否在菜单中显示。
当`hidden`为`true`时，不会在菜单中显示，否则将在菜单中显示。

