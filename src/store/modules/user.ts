import { defineStore } from 'pinia'
import { store } from '@/store'
import { getToken, removeToken, setToken } from '@/utils/cookies'

interface userStateType {
  token: string
  name: string
  avatar: string
  roles: string[]
}

export const useUserStore = defineStore('user', {
  state: (): userStateType => ({
    token: '',
    name: '',
    avatar: '',
    roles: [],
  }),

  actions: {
    login(userinfo: { username: string; password: string }) {
      // const { username, password } = userinfo
      // username = username.trim()
      const data = { accessToken: '' }
      // cookie set token
      setToken(data.accessToken)
      // store set token
      this.token = data.accessToken
    },
    resetToken() {
      this.token = ''
      this.roles = []
    },
    getUserinfo() {
      console.log('get userinfo')
    },
    changeRoles(role: string) {

    },
    logout() {

    },
  },

  getters: {

  },
})

export function useUserStoreHook() {
  return useUserStore(store)
}
