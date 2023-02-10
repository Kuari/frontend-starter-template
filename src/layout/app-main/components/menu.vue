<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
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
  <div class="menu-container flex flex-row items-center">
    <div
      v-for="(item, index) in state.routerList"
      :key="index"
      class="menu-item"
      :class="{ 'menu-item__active': route.path.toString() === item.path }"
      @click="handleRouterJump(item.path)"
    >
      {{ item.title }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.menu-container {
  padding: 1rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
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
