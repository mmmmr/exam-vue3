import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import vvLocal from '../utils/localStorge'

const routes:RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    component: () => import('../views/login/login.vue')
  },
  {
    path: '/main',
    component: () => import('../views/main/main.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

router.beforeEach((to) =>{
  if(to.path !== '/login' && !vvLocal.getLocal('TOKEN')) {
    router.push('/login')
  }
})

export default router
