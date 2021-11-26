import Vue from 'vue'
import Vuex from 'vuex'
import roles from './roles'
import users from './users'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    loggedUser: null
  },
  getter: {
    getIsLogged: (state) => state.isLogged
  },
  mutations: {
    SET_LOGGED_USER: (state, payload) => {
      state.loggedUser = payload
    }
  },
  actions: {
    async setLogIn (context, payload) {
      context.commit('SET_LOGGED_USER', payload)
      //validacion de cuando se loguea bien o mal
      //devolver un objeto {message:'', error/success:boolean}
    },
    async setLogOut (context) {
      context.commit('SET_LOGGED_USER', null)
      context.commit('users/SET_USERS', [])
      context.commit('roles/SET_ROLES', [])
    }

  },
  modules: {
    users,
    roles

  }
})
//
