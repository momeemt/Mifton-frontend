export const state = () => ({
  currentUser: null
})

export const mutations = {
  login(state, user) {
    state.currentUser = user
  },
  logout(state) {
    state.currentUser = null
  },
  updateUserName(state, newVal) {
    state.currentUser.name = newVal
  }
}

export const getters = {
  is_logged_in(state) {
    return state.currentUser !== null
  },
  currentUser: (state) => state.currentUser
}
