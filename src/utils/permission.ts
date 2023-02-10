import { useUserStoreHook } from '@/store/modules/user'

export const checkPermission = (allowedRoles: string[]): boolean => {
  if (allowedRoles && Array.isArray(allowedRoles) && allowedRoles.length > 0) {
    const roles = useUserStoreHook().roles
    return roles.some(role => allowedRoles.includes(role))
  }
  else {
    console.error('need roles! Like v-permission="[\'admin\',\'editor\']"')
    return false
  }
}
