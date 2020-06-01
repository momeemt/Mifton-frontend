export const state = () => ({
  displayPosts: [],
  posts: [],
  drops: [],
  topics: [],
  drop: {},
  topic: {},
  typeOfTimeLine: 'home',
  numOfDisplayPosts: 20,
  newDrop: { content: '' },
  newTopic: { title: '', content: '' }
})

export const getters = {
  displayPosts: (state) => state.displayPosts,
  posts: (state) => state.posts,
  drops: (state) => state.drops,
  topics: (state) => state.topics,
  drop: (state) => state.drop,
  topic: (state) => state.topic,
  numOfDisplayPosts: (state) => state.numOfDisplayPosts,
  newDrop: (state) => state.newDrop,
  newTopic: (state) => state.newTopic
}

export const mutations = {
  setDropsToDisplayPosts(state) {
    state.displayPosts = state.drops
    state.typeOfTimeLine = 'drops'
    state.numOfDisplayPosts = Math.min(state.drops.length, 20)
  },
  setTopicsToDisplayPosts(state) {
    state.displayPosts = state.topics
    state.typeOfTimeLine = 'topics'
    state.numOfDisplayPosts = Math.min(state.topics.length, 20)
  },
  setPostsToDisplayPosts(state) {
    state.displayPosts = state.posts
    state.typeOfTimeLine = 'home'
    state.numOfDisplayPosts = Math.min(state.posts.length, 20)
  },
  setPosts(state, { payload }) {
    state.posts = payload.posts
  },
  setDrops(state, { payload }) {
    state.drops = payload.drops
  },
  setTopics(state, { payload }) {
    state.topics = payload.topics
  },
  setDrop(state, drop) {
    state.drop = drop
  },
  addDrop(state, { payload }) {
    state.drops.unshift(payload)
    const type = state.typeOfTimeLine
    if (type === 'home' || type === 'drops') {
      state.posts.unshift(payload)
    }
  },
  setTopic(state, topic) {
    state.topic = topic
  },
  addTopic(state, { payload }) {
    state.topics.unshift(payload)
    const type = state.typeOfTimeLine
    if (type === 'home' || type === 'topics') {
      state.posts.unshift(payload)
    }
  },
  setNumOfDisplayPosts(state, num) {
    state.numOfDisplayPosts = Math.min(num, 20)
  },
  addNumOfDisplayPosts(state, num) {
    state.numOfDisplayPosts += num
  },
  setNewDrop(state, { payload }) {
    state.newDrop.content = payload.content
  },
  setNewTopic(state, { payload }) {
    state.newTopic.content = payload.content
    state.newTopic.title = payload.title
  },
  addEmojiToDrop(state, { payload }) {
    state.newDrop.content += payload.emoji
  },
  setUserIDInDrop(state, { payload }) {
    state.newDrop.user_id = payload.userID
  },
  clearNewDrop(state) {
    state.newDrop = { content: '' }
  },
  clearNewTopic(state) {
    state.newTopic = { title: '', content: '' }
  }
}

export const actions = {
  async fetchPosts({ commit }) {
    const response = await this.$api.index('posts')
    const payload = {
      posts: response.res
    }
    const status = response.resCode
    commit('setPosts', { payload })
    commit('setNumOfDisplayPosts', response.res.length)
    commit('setPostsToDisplayPosts')
    return { status }
  },
  async fetchPostsByUserID({ commit }, { payload }) {
    const response = await this.$api.index('posts')
    const posts = response.res
    const postsByUserID = {
      posts: posts.filter((p) => p.user.user_id === payload)
    }
    const postsSize = postsByUserID.posts.length
    commit('setPosts', { payload: postsByUserID })
    commit('setNumOfDisplayPosts', postsSize)
    commit('setPostsToDisplayPosts')
  },
  async fetchDrops({ commit }) {
    const response = await this.$api.index('drops')
    const payload = {
      drops: response.res
    }
    const status = response.resCode
    commit('setDrops', { payload })
    return { status }
  },
  async fetchDrop({ commit }, { payload }) {
    const response = await this.$api.show('drops', payload)
    commit('setDrop', response.res)
  },
  async fetchTopics({ commit }) {
    const response = await this.$api.index('topics')
    const payload = {
      topics: response.res
    }
    const status = response.resCode
    commit('setTopics', { payload })
    return { status }
  },
  async fetchTopic({ commit }, { payload }) {
    const response = await this.$api.show('topics', payload)
    commit('setTopic', response.res)
  },
  async publishDrop({ commit }, { payload }) {
    const response = await this.$api.create('drops', payload)
    commit('addDrop', { payload: response.res })
    return { status: response.resCode }
  },
  async publishTopic({ commit }, { payload }) {
    const response = await this.$api.create('topics', payload)
    commit('addTopic', { payload: response.res })
    return { status: response.response }
  }
}
