export const state = () => ({
  currentUser: null
})

export const mutations = {
  login(state, user) {
    state.currentUser = user
    console.log('logged!')
  },
  logout(state) {
    state.currentUser = null
  }
}

export const getters = {
  is_logged_in(state) {
    return state.currentUser !== null
  }
}
