import type { UserInfo } from 'node:os'
import { defineStore } from 'pinia'
import { store } from '@/store'
import { getToken, removeToken, setToken } from '@/utils/cookies'
import type { authResponse } from '@/apis/user'

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
    async login(name: string, password: string) {
      // Uncomment the following line to use the login API
      // const res = await login(name, password)

      // Replace the following line with the login API response
      const res: authResponse = {
        accessToken: '',
        refreshToken: '',
      }

      // cookie set token
      setToken(res.accessToken)
      // store set token
      this.token = res.accessToken

      // set username
      this.name = username
    },
    resetToken() {
      this.token = ''
      this.roles = []
    },
    async getUserinfo() {
      this.token = <string>getToken()

      // Uncomment the following line to use the getUserInfo API
      // const result = await getUserInfo()

      // Replace the following line with the getUserInfo API response
      const result: UserInfo = {
        id: 1,
        accountName: 'hunter',
      }

      this.name = result.accountName
    },
    changeRoles(role: string) {

    },
    logout() {
      removeToken()
      this.token = ''
      this.roles = []
    },
  },

  getters: {

  },
})

export function useUserStoreHook() {
  return useUserStore(store)
}
