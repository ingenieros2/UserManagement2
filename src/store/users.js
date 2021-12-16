
export default {
  namespaced: true,

  state: {
    usersFiltered: [],
    users: [
      {
        id: 1,
        name: 'Nacho',
        lastName: 'Heinzmann',
        phone: '3516456',
        email: 'na',
        roleId: 1
      },
      {
        id: 2,
        name: 'Marcos',
        lastName: 'Heinzmann',
        phone: '3516456',
        email: 'ma',
        roleId: 1
      },
      {
        id: 3,
        name: 'Mark',
        lastName: 'Heinzmann',
        phone: '3516456',
        email: 'me',
        roleId: 1
      }
    ]
  },
  getters: {
    getUsers: (state) => state.users,
    getFiltered: (state) => state.usersFiltered

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
      const user = payload
      state.users = user
    },

    SET_USERS_FILTERED: (state, payload) => {
      const user = payload
      state.usersFiltered = user
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
    },
    async get ({ commit }, search) {
      const aux = this.state.users
      if (search.searchName !== '') {
        const filtered = Object.values(aux)[1].filter((elem) => elem.name.includes(search.searchName))
        commit('SET_USERS_FILTERED', filtered)
      } else if (search.mailSearch !== '') {
        console.log(search.emailSearch)
        const filtered = Object.values(aux)[1].filter((elem) => elem.email.includes(search.emailSearch))
        commit('SET_USERS_FILTERED', filtered)
      } else {
        commit('SET_USERS', aux.users)
      }
    }
  }
}
