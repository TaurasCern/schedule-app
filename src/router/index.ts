import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../components/Home.vue'
import DashBoard from '../components/Dashboard/DashBoard.vue'
import ScheduleNotes from '../components/Dashboard/ScheduleNotes/ScheduleNotes.vue'
import LoginForm from '../components/LoginForm.vue'
import RegisterForm from '../components/Register/RegisterForm.vue'
import RegistrationSuccess from '../components/Register/RegistrationSuccess.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: DashBoard
  },
  {
    path: '/Dashboard/Notes',
    name: 'ScheduleNotes',
    component: ScheduleNotes
  },
  {
    path: '/Login',
    name: 'Login',
    component: LoginForm
  },
  {
    path: '/Register',
    name: 'Register',
    component: RegisterForm
  },
  {
    path: '/Register/Success',
    name: 'RegistrationSuccess',
    component: RegistrationSuccess
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
