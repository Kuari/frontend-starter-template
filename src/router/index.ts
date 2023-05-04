import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/app-main/index.vue'
import NProgress from '@/utils/progress'
import { useUserStoreHook } from '@/store/modules/user'
import settings from '@/settings'

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
  // When it is not in the whitelist, it is necessary to detect user information and permissions
  if (!whiteList.includes(to.path)) {
    const UserModule = useUserStoreHook()

    // No role may be caused by refreshing the page, and the user information is requested
    if (UserModule.roles.length === 0)
      UserModule.getUserinfo()

    // If you are not in the routing setting permission, you will be redirected to the login page
    // if (to.meta.roles && !to.meta?.roles.some((role: string) => UserModule.roles.includes(role)))
    //   next({ path: '/login' })
  }

  // update title
  document.title = `${to.meta.title} - ${settings.title}` || settings.title;

  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
