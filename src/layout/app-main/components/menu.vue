<script lang="ts" setup>
import settings from '@/settings'
import { useUserStoreHook } from '@/store/modules/user'

const route = useRoute()
const router = useRouter()

const userStore = useUserStoreHook()

const handleRouterJump = (path: string) => {
  router.push(path)
}

const state: { routerList: { title: string; path: string }[] } = reactive({
  routerList: [],
})

const filterRoutes = () => {
  router.options.routes.forEach((item) => {
    if (item.meta && !item.meta.hidden && item.meta.title) {
      state.routerList.push({
        title: item.meta.title?.toString(),
        path: item.redirect ? item.redirect.toString() : item.path.toString(),
      })
    }
  })
}

onMounted(() => {
  filterRoutes()
})
</script>

<template>
  <div class="menu-container flex flex-row justify-center border-b-gray border">
    <div class="max-w-6xl w-full flex flex-row items-center justify-between">
      <div class="flex flex-row items-center mr-20">
        <img src="@/assets/img/example/logo.png" alt="logo" class="w-8 h-8 rounded-full mr-3">
        <h1>{{ settings.title }}</h1>
      </div>

      <div
        v-for="(item, index) in state.routerList"
        :key="index"
        class="menu-item"
        :class="{ 'menu-item__active': route.path.toString() === item.path }"
        @click="handleRouterJump(item.path)"
      >
        {{ item.title }}
      </div>

      <!-- mock user -->
      <div class="flex flex-row items-center ml-auto">
        <img src="@/assets/img/example/avatar.png" alt="user" class="w-8 h-8 rounded-full mr-3 cursor-pointer hover:shadow-xl">
        {{ userStore.$state.name }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.menu-container {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.menu-item {
  margin-left: .5rem;
  margin-right: .5rem;
  padding: .5rem 1rem;
  cursor: pointer;
  color: rgba(92, 92, 92, 0.5);
  user-select: none;
  border-radius: 4px;

  &:hover {
    background-color: rgba(147, 144, 144, 0.1);
  }
}

.menu-item__active {
  background-color: rgba(147, 144, 144, 0.1);
  color: rgba(92, 92, 92, 1);
}
</style>
