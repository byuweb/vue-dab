import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ErrorPage from '../views/Error.vue'
import Users from '../views/Users.vue'
import LsDateTime from '../views/LsDateTime'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/error',
    name: 'Error',
    component: ErrorPage
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
  },
  {
    path: '/lsdatetime',
    name: 'LSDateTime',
    component: LsDateTime
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
