<template>
  <div>
    <ReturnPageButtonContainer />
    <v-card id="bectorUserPageCard" outlined>
      <v-card-title>
        <DisplayUserName :userName="user.name" :userJob="userJob" />
      </v-card-title>
      <v-card-text>
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
      </v-card-text>
    </v-card>
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
  async asyncData({ route, app }) {
    // eslint-disable-next-line camelcase
    const { user_id } = route.params
    const res = await app.$api.indexByUserId('users', user_id)
    const user = res.res
    const resCode = res.resCode
    // eslint-disable-next-line camelcase
    const userJob = user?.user_job
    // eslint-disable-next-line camelcase
    const optionalUserData = user?.optional_user_data
    return { user, resCode, userJob, optionalUserData }
  }
}
</script>

<style lang="scss" scoped>
#bectorUserPageCard {
  border: none !important;
}
</style>
