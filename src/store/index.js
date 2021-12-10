import Vue from 'vue'
import Vuex from 'vuex'
import roles from './roles'
import users from './users'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    loggedUser: null
  },
  getters: {
    getIsLogged: (state) => state.loggedUser
  },
  mutations: {
    SET_LOGGED_USER: (state, payload) => {
      state.loggedUser = payload
    }
  },
  actions: {
    async setLogIn ({ context, commit, rootState }, payload) {
      const usersState = rootState.users.users
      const indexFound = usersState.findIndex((user) => user.password === payload.password && user.email === payload.email)
      if (indexFound !== -1) {
        commit('SET_LOGGED_USER', payload)
        return { message: 'Logged in', succes: true }
      } else {
        return { message: 'Wrong email or password', succes: false }
      }
    },
    async setLogOut (context) {
      context.commit('SET_LOGGED_USER', null)
      // context.commit('users/SET_USERS', [])
      // context.commit('roles/SET_ROLES', [])
    }

  },
  modules: {
    users,
    roles

  }
})
