import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/app-main/index.vue'
import NProgress from '@/utils/progress'
import { useUserStoreHook } from '@/store/modules/user'

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    meta: {
      title: 'home',
      hidden: false,
    },
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
      },
    ],
  },
  {
    path: '/table',
    component: Layout,
    meta: {
      title: 'table',
      hidden: false,
    },
    children: [
      {
        path: '/table',
        component: () => import('@/views/table/index.vue'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: 'login',
      hidden: true,
    },
  },
  {
    path: '/404',
    component: () => import('@/views/not-found/index.vue'),
    meta: {
      title: '404',
      hidden: true,
    },
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/404',
    meta: {
      title: '404',
      hidden: true,
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const whiteList = ['/login', '/404']

router.beforeEach((to, _form, next) => {
  NProgress.start()
  // 当不在白名单内, 需要检测用户信息和权限
  if (!whiteList.includes(to.path)) {
    const UserModule = useUserStoreHook()

    // 没有角色可能是刷新页面导致, 则请求获取用户信息
    if (UserModule.roles.length === 0)
      UserModule.getUserinfo()

    // 不在路由设置权限内则跳转到登录页
    // if (to.meta.roles && !to.meta?.roles.some((role: string) => UserModule.roles.includes(role)))
    //   next({ path: '/login' })
  }

  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
