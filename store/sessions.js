export const state = () => ({
  currentUser: {},
  isLoggedIn: false
})

export const getters = {
  currentUser: (state) => state.currentUser,
  isLoggedIn: (state) => state.isLoggedIn
}

export const mutations = {
  setUser(state, user) {
    state.currentUser = user
    state.isLoggedIn = true
  },
  deleteUser(state) {
    state.currentUser = {}
    state.isLoggedIn = false
  }
}

export const actions = {
  async login({ commit }, { user }) {
    const response = await this.$api.create('sessions', user)
    const resUser = response.res
    const status = response.resCode
    if (status === 200) {
      commit('setUser', resUser)
    }
    return { status }
  },
  async logout({ commit }, user) {
    await this.$api.delete('sessions', user)
    commit('deleteUser')
  }
}
