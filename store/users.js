export const state = () => ({
  user: {},
  optionalUserDatum: {},
  job: {},
  users: []
})

export const getters = {
  user: (state) => state.user,
  optionalUserDatum: (state) => state.optionalUserDatum,
  job: (state) => state.job,
  users: (state) => state.users
}

export const mutations = {
  setUsers(state, { users }) {
    state.users = users
  },
  setUser(state, { user }) {
    state.user = user
    state.optionalUserDatum = user.optional_user_datum
    state.job = user.user_job
  },
  deleteUser(state, { user }) {
    state.users = state.users.filter((v) => v.id !== user.id)
  },
  updateUser(state, { payload }) {
    const key = payload.key
    state.user[key] = payload.value
  },
  updateOptionalUserDatum(state, { payload }) {
    const key = payload.key
    state.optionalUserDatum[key] = payload.value
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
  async updateProfile({ commit }, { payload }) {
    const user = payload.user
    await this.$api.update('users', user)
  },
  async updateOptionalDatum({ commit }, { payload }) {
    const optionalUserDatum = payload.optionalUserDatum
    await this.$api.update('optional_user_data', optionalUserDatum)
  },
  async deleteUser({ commit }, { payload }) {
    await this.$api.delete('users', payload)
    commit('deleteUser', { user: payload })
  }
}
