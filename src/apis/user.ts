import request from '@/utils/request'
import { MD5 } from '@/utils/crypto/md5'

interface AuthResponse {
  accessToken: string
  refreshToken: string
}

export interface Userinfo {
  id: number
  'accountName': string
}

export const login = async (accountName: string, password: string): Promise<AuthResponse> => {
  return await request.post('/api/v1/user/auth', {
    accountName,
    password: MD5(password),
  })
}

export const getUserInfo = async (): Promise<Userinfo> => {
  return await request.get('/api/v1/user')
}
