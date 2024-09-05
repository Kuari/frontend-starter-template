# vue-ts-tailwind-vite-starter

English | [简体中文](./README.zh-CN.md)

## Project Introduction

vue-ts-tailwind-vite-starter is a frontend project template built with Vue3, TypeScript, TailwindCSS, and Vite. It can
be used to quickly set up frontend projects.
It's configured with auto-import, so you can use components directly without manual imports.

If you're interested, you can also check out my other templates:

- Backend template: [go-gin-api-starter](https://github.com/hunter-ji/go-gin-api-starter)
- Database template: [postgres-redis-dev-docker-compose](https://github.com/hunter-ji/postgres-redis-dev-docker-compose)

## Tech Stack

This template mainly uses the following tech stack:

- Vue3
- TypeScript
- TailwindCSS
- Pinia
- Vue Router
- Vite
- ESLint
- Element Plus
- axios

## Features

- Built with Vue3, TypeScript, TailwindCSS, Vite
- Configured with auto-import, no need to manually import components
- Uses Element Plus as UI component library, with auto on-demand import
- Integrated axios with configured interceptors, ready to use
- Configured ESLint, using [@antfu/eslint-config](https://github.com/antfu/eslint-config)
- Integrated svg loader, can use svg files directly
- Integrated menu module, auto-discovers routes, no need for manual configuration
- Includes some common utility functions
- Multi-environment configuration

## Quick Start

```bash
npx degit hunter-ji/vue-ts-tailwind-vite-starter my-app
cd my-app
pnpm install
```

## More Usage

### Using SVG Icons

Put svg files in the src/assets/svg directory, then use them directly where needed.

```vue

<script setup lang="ts">
  // Import svg file as a component
  import IconSmile from '@/assets/svg/smile.svg?component'
</script>

<template>
  <IconSmile class="fill-yellow-200 stroke-red-500"/>
</template>
```

### Configuring Routes and Menus

Configure routes in `src/router/index.ts`. The `hidden` field in `meta` controls whether to show in the menu.
When `hidden` is `true`, it won't show in the menu, otherwise it will.


