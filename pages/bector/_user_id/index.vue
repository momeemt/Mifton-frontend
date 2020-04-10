<template>
  <div>
    <h1>{{ user.name }}</h1>
    <p>@{{ user.user_id }}</p>
  </div>
</template>

<script>
export default {
  name: 'IndexVue',
  layout: 'pc/Bector',
  data() {
    return {
      user: {}
    }
  },
  async asyncData({ route, app }) {
    // eslint-disable-next-line camelcase
    const { user_id } = route.params
    const userObject = await app.$api.Users.getByUserId(user_id)
    console.log(userObject)
    const user = userObject.user
    return { user }
  }
}
</script>

<style scoped></style>
