export default {
  namespaced: true,

  state: {
    users: [{
      name: 'Nacho',
      email: 'nacho@gmail.com',
      password: '123'
    },
    {
      name: 'Marcos',
      email: 'marcos@gmail.com',
      password: 'teta'
    }]
  },
  getters: {
    getUsers: (state) => state.users

  },
  mutations: {
    ADD_USER: (state, payload) => {
      const users = [...state.users]
      const id = users.reduce((acc, el) => el.id > acc ? el.id : acc, 0) + 1
      users.push({ id, ...payload })
      state.users = users
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
    },

    SET_USERS: (state, payload) => {
      state.users = payload
    }

  },
  actions: {
    async addUser ({ commit, rootState }, payload) {
      commit('ADD_USER', payload)
    },
    async modifyUser ({ commit, rootState }, payload) {
      commit('MODIFY_USER', payload)
    },
    async deleteUser ({ commit, rootState }, payload) {
      commit('DELETE_USER', payload)
    }
  }

}
