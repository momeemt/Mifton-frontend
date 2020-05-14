export const state = () => ({
  user: {},
  optionalData: {},
  job: {},
  users: []
})

export const getters = {
  user: (state) => state.user,
  optionalData: (state) => state.optionalData,
  job: (state) => state.job,
  users: (state) => state.users
}

export const mutations = {
  setUsers(state, { users }) {
    state.users = users
  },
  setUser(state, { user }) {
    state.user = user
    state.optionalData = user.optional_user_datum
    state.job = user.user_job
  },
  updateUser(state, settingKey, settingValue) {
    state.user[settingKey] = settingValue
  },
  updateOptionalUserDatum(state, settingKey, settingValue) {
    state.optionalData[settingKey] = settingValue
  }
}

export const actions = {
  async fetchUser({ commit }, { id }) {
    const response = await this.$api.show('users', id)
    const user = response.res
    const status = response.resCode
    commit('setUser', { user })
    return { status }
  },
  async fetchUserByUserID({ commit }, { userID }) {
    const response = await this.$api.indexByUserId('users', userID)
    const user = response.res
    const status = response.resCode
    commit('setUser', { user })
    return { status }
  },
  async fetchUsers({ commit }) {
    const response = await this.$api.index('users')
    const users = response.res
    const status = response.resCode
    commit('setUsers', { users })
    return { status }
  },
  async updateProfile({ commit }) {
    await this.$api.update('users', this.currentUser)
  }
}
