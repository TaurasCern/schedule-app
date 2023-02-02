import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import LoginForm from '../components/LoginForm.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    component: LoginForm
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
