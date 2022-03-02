import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/view/main/index.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/view/login/index.vue')
  }
]

const router = createRouter({
  routes: routes,
  history: createWebHashHistory()
})

export default router
