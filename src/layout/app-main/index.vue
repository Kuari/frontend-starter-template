<script lang="ts" setup>
import TopMenu from './components/menu.vue'
</script>

<template>
  <div class="app-main-container">
    <TopMenu />
    <div class="max-w-6xl w-full mx-auto mt-10 py-4">
      <router-view v-slot="{ Component }">
        <transition name="fade-transform" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.28s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all .5s;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.app-main-container {
  overflow-x: hidden;
}
</style>
