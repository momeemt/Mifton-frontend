<template>
  <div>
    <ReturnPageButtonContainer />
    <DisplayUserName :userName="user.name" :userJob="userJob" />
    <p>@{{ user.user_id }}</p>
    <p>{{ user.created_at }}にMiftonへ飛び込みました！</p>
    <v-divider />
    <v-list>
      <v-list-item v-for="drop in user.drops">
        <v-list-item-content>
          <p>{{ drop.content }}</p>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import ReturnPageButtonContainer from '~/components/general/ReturnPageButtonContainer'
import DisplayUserName from '~/components/general/DisplayUserName'
export default {
  name: 'IndexVue',
  layout: 'pc/Bector',
  components: {
    ReturnPageButtonContainer,
    DisplayUserName
  },
  data() {
    return {
      user: {},
      userJob: {},
      optionalUserData: {}
    }
  },
  async asyncData({ route, app }) {
    // eslint-disable-next-line camelcase
    const { user_id } = route.params
    const userObject = await app.$api.Users.getByUserId(user_id)
    const user = userObject.user
    const userJob = user.user_job
    const optionalUserData = user.optional_user_data
    console.log(user)
    return { user, userJob, optionalUserData }
  }
}
</script>

<style lang="scss" scoped></style>
