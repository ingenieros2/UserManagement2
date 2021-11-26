export default {
  namespaced: true,
  state: {
    roles: []
  },
  getter: {
    getRoles: (state) => state.Roles
  },
  mutations: {

    ADD_ROLE: (state, payload) => {
      const roles = [...state.roles]
      const id = roles.reduce((acc, el) => el.id > acc ? el.id : acc, 0) + 1
      roles.push({ id, ...payload })
      state.roles = roles
    },

    SET_ROLES: (state, payload) => {
      state.roles = payload
    },

    MODIFY_ROLE: (state, payload) => {
      const roles = [...state.roles]
      const result = roles.findIndex(el => el.id === payload.id)
      if (result !== -1) {
        roles[result] = payload
        state.roles = roles
      }
    },

    DELETE_ROLE: (state, payload) => {
      const roles = [...state.roles]
      const result = roles.findIndex(el => el.id === payload.id)
      if (result !== -1) {
        roles.splice(result, 1)
        state.roles = roles
      }
    }
  },
  actions: {

    async addRole (context, payload) {
      context.commit('ADD_ROLE', payload)
    },
    async modifyRole (context, payload) {
      context.commit('MODIFY_ROLE', payload)
    },
    async deleteRole (context, payload) {
      context.commit('DELETE_ROLE', payload)
    }
  }

}
