import Vue from 'vue'
import VueRouter from 'vue-router'
import Users from '../views/Users.vue'
import Roles from '../views/Roles.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Roles
  },
  {
    path: '/users',
    name: 'Home',
    component: Users
  }
]

const router = new VueRouter({
  routes
})

export default router
