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
  },
  updateProfile(state, newVal) {
    state.currentUser.optional_user_datum.profile = newVal
  },
  updateWebsite(state, newVal) {
    state.currentUser.optional_user_datum.website = newVal
  },
  updateLocation(state, newVal) {
    state.currentUser.optional_user_datum.location = newVal
  },
  updateBirthday(state, newVal) {
    state.currentUser.optional_user_datum.birthday = newVal
  },
  updatePublishBirthday(state, newVal) {
    state.currentUser.optional_user_datum.publish_birthday = newVal
  },
  updateTwitterID(state, newVal) {
    state.currentUser.optional_user_datum.twitter_id = newVal
  },
  updateLobiID(state, newVal) {
    state.currentUser.optional_user_datum.lobi_id = newVal
  },
  updateGithubID(state, newVal) {
    state.currentUser.optional_user_datum.github_id = newVal
  },
  updateDiscordID(state, newVal) {
    state.currentUser.optional_user_datum.discord_id = newVal
  }
}

export const getters = {
  is_logged_in(state) {
    return state.currentUser !== null
  },
  currentUser: (state) => state.currentUser
}
