export default {
  namespaced: true,

  state: {
    users: []
  },
  getter: {
    getUser: (state) => state.users

  },
  mutations: {
    SET_USER: (state, payload) => {
      const id = state.users.reduce((acc, el) => el.id > acc ? el.id : acc, 0) + 1
      state.users.push({ id, ...payload })
    },

    SET_LOGGED_USER: (state, payload) => {
      state.loggedUser = payload
    },
    MODIFY_USER: (state, payload) => {
      const users = [...state.users]
      const result = users.findIndex(el => el.id === payload.id)
      if (result !== -1) {
        users[result] = payload
        state.users = users
      }
    },

    DELETE_USER: (state, payload) => {
      const users = [...state.users]
      const result = users.findIndex(el => el.id === payload.id)
      if (result !== -1) {
        users.splice(result, 1)
        state.users = users
      }
    }

  },
  actions: {
    async setUser (context, payload) {
      context.commit('SET_USER', payload)
    },
    async modifyUser (context, payload) {
      context.commit('MODIFY_USER', payload)
    },
    async deleteUser (context, payload) {
      context.commit('DELETE_USER', payload)
    }
  }

}
