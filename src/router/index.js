import Vue from 'vue'
import VueRouter from 'vue-router'
import Users from '../views/Users.vue'
import Roles from '../views/Roles.vue'
import Profiles from '../views/Profiles.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/roles',
    name: 'roles',
    component: Roles
  },
  {
    path: '/users',
    name: 'Home',
    component: Users
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profiles
  }
]

const router = new VueRouter({
  routes
})

export default router
