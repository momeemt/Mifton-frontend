<template>
  <v-card id="userProfileCard" outlined>
    <v-card-title>
      <DisplayUserName :userName="user.name" :userJob="job" />
    </v-card-title>
    <v-card-text>
      <p>@{{ user.user_id }}</p>
      <p v-if="optionalUserDatum.profile != null">
        {{ optionalUserDatum.profile }}
      </p>
      <p v-if="optionalUserDatum.location != null">
        {{ optionalUserDatum.location }}
      </p>
      <p v-if="optionalUserDatum.website != null">
        <a :href="`https://${optionalUserDatum.website}`" target="_blank">
          {{ optionalUserDatum.website }}
        </a>
      </p>
      <p>{{ user.created_at | formatDatetime }}にMiftonに飛び込みました！</p>
      <v-btn
        v-if="optionalUserDatum.twitterID != null"
        :href="`https://www.twitter.com/${optionalUserDatum.twitterID}`"
        text
      >
        <v-icon>fab fa-twitter</v-icon>
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
import momentTimezone from 'moment-timezone'
import { mapGetters } from 'vuex'
import DisplayUserName from '~/components/General/DisplayUserName'
export default {
  name: 'UsersId',
  layout: 'pc/general',
  components: {
    DisplayUserName
  },
  filters: {
    formatDatetime(datetime) {
      return momentTimezone(datetime)
        .locale('ja')
        .tz('Asia/Tokyo')
        .format('YYYY年MM月DD日')
    }
  },
  computed: {
    ...mapGetters('users', ['user', 'status', 'optionalUserDatum', 'job'])
  },
  async asyncData({ route, store, error }) {
    const { id } = route.params
    const { status } = await store.dispatch('users/fetchUserByUserID', {
      userID: id
    })
    if (status !== 200) {
      error({ statusCode: status })
    }
  }
}
</script>

<style scoped>
#userProfileCard {
  border: none !important;
}
</style>
