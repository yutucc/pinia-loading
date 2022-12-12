# pinia-loading

一款自动管理 `loading` 状态的 [pinia](https://github.com/vuejs/pinia) 插件。有了它，以后都不需要重复写 `showLoading`、`hideLoading`了 👏

**简体中文** | [English](./README-en-US.md)

## 📦 Install
```bash
npm install pinia-loading --save

# 或者使用 yarn
yarn add pinia-loading

# 或者使用 pnpm
pnpm add pinia-loading
```

## 🦄 Usage
`pinia-loading` 的使用分两步：
1. 通过 `pinia.use()` 将插件添加到 pinia 实例，这个可以参考 [pinia 中插件的使用方法](https://pinia.vuejs.org/zh/core-concepts/plugins.html#plugins)
2. 通过 `pinia-loading` 中内置的 Store 访问管理 loading 状态的 state

### use 插件
通过 `pinia.use()` 将插件添加到 pinia 实例，比如：

```javascript
import { createPinia } from 'pinia';
import { PiniaPluginLoading } from 'pinia-loading';

const store = createPinia();

store.use(PiniaPluginLoading); // 通过 `pinia.use()` 将插件添加到 pinia 实例

export default store;
```

### 访问管理 loading 状态的 state
这一步跟在 pinia 中[访问 state](https://pinia.vuejs.org/zh/core-concepts/state.html#accessing-the-state) 的方法一致

```vue
<script setup lang="ts">
import use$loadingStore from 'pinia-loading';

const $loadingStore = use$loadingStore();
</script>

<template>
  <ul>
    <!-- 全局 loading 状态，只要 pinia 中有 action 正在进行异步请求，这个值都会变成 true -->
    <li>{{$loadingStore.global}}</li>

    <!-- 每个 action 自己的 loading 状态，只有当该 action 正在进行异步请求，这个值才会变成 true -->
    <!-- user：是该 Store 的 ID -->
    <!-- getUserFriends：是 user 这个 Store 中的一个 action -->
    <li>{{$loadingStore.effects['user/getUserFriends']}}</li>

    <!-- 每个 Store 的 loading 状态，只要该 Store 中有 action 正在进行异步请求，这个值就会变成 true -->
    <!-- user：是该 Store 的 ID-->
    <li>{{$loadingStore.stores.user}}</li>
  </ul>
</template>
```

## 🚗 Demos
- [with-vue3-pinia](./examples/with-vue3-pinia/)
  - `pinia-loading` 在 vue3 + pinia 上的用法