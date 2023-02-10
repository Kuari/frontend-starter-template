import { defineStore } from 'pinia'
import { store } from '@/store'

const versionString
  = import.meta.env.MODE === 'development'
    ? `${import.meta.env.VITE_APP_VERSION}-dev`
    : import.meta.env.VITE_APP_VERSION

export const useVersion = defineStore('version', {
  state: () => ({
    debug: import.meta.env.MODE === 'development',
    version: versionString,
    isInitialized: false,
    count: 0,
  }),

  actions: {
    initApp() {
      this.isInitialized = true
    },

    increment(value = 1) {
      this.count += value
    },
  },

  getters: {
    isReady: (state) => {
      return !state.isInitialized
    },
  },
})

export function useVersionHook() {
  return useVersion(store)
}
