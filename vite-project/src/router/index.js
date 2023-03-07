import { createRouter, createWebHashHistory } from 'vue-router'
import { defineAsyncComponent } from 'vue'
// import Home from '@/views/Home.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/login',
    name: 'Login',
    component: defineAsyncComponent(() => import('@/views/Login.vue'))
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
