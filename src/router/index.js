import Vue from 'vue'
import VueRouter from 'vue-router'
import Users from '../views/Users.vue'
import Roles from '../views/Roles.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Users',
    component: Users
  },
  {
    path: '/roles',
    name: 'Roles',
    component: Roles
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
