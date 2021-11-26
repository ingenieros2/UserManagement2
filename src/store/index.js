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
    async setIsLogged (context, payload) {
      context.commit('SET_LOGGED_USER', payload)
    }
  },
  modules: {
    users,
    roles

  }
})
//
