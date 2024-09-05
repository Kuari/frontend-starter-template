import axios from 'axios'
import { ElMessage, ElMessageBox } from 'element-plus'
import { useUserStoreHook } from '@/store/modules/user'

const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000,
})

// Request interceptors
service.interceptors.request.use(
  (config) => {
    const token = useUserStoreHook().token
    config.url = config.url?.includes('?') ? `${config.baseURL as string + config.url}&token=${token}` : `${config.baseURL as string + config.url}?token=${token}`
    return config
  },
  (error) => {
    Promise.reject(error)
  },
)

// Response interceptors
service.interceptors.response.use(
  (response) => {
    // Some example codes here:
    // code == 20000: success
    // code == 50001: invalid access token
    // code == 50002: already login in other place
    // code == 50003: access token expired
    // code == 50004: invalid user (user not exist)
    // code == 50005: username or password is incorrect
    // You can change this part for your own usage.
    const res = response.data
    if (res.code !== 20000) {
      ElMessage({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000,
      })
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        ElMessageBox.confirm(
          'You have been logged out. You can cancel and stay on this page, or log in again.',
          'Confirm logout',
          {
            confirmButtonText: 'Re-login',
            cancelButtonText: 'Cancel',
            type: 'warning',
          },
        ).then(() => {
          useUserStoreHook().resetToken()
          location.reload() // To prevent bugs from vue-index
        })
      }
      return Promise.reject(new Error(res.message || 'Error'))
    }
    else {
      return response.data.data
    }
  },
  (error) => {
    ElMessage({
      message: error.message,
      type: 'error',
      duration: 5 * 1000,
    })
    return Promise.reject(error)
  },
)

export default service
