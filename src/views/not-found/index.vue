<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const goBack = () => {
  router.back()
}
</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <img src="@/assets/img/default/404.png" alt="404" width="300" height="300">
    <p class="mb-4">
      页面不见了...
    </p>
    <div class="not-found-button" @click="goBack">
      点击返回
    </div>
  </div>
</template>

<style scoped lang="scss">
.not-found-button {
  border-radius: 0.25rem;
  color: white;
  padding: 0.5rem 2rem 0.5rem 2rem;
  cursor: pointer;
  background-color: rgba(156, 163, 175, .7);

  &:hover {
    opacity: 70%;
  }
}
</style>
