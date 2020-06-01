<template>
  <div>
    <ReturnPageContainer />
    <v-card id="bectorUserPageCard" outlined>
      <v-card-text>
        <v-col>
          <v-row align="center" justify="space-between">
            <v-col>
              <UserIcon :user="user" />
            </v-col>
            <v-col>
              <v-btn
                to="/settings/profile"
                rounded
                outlined
                color="indigo dakren-3"
                nuxt
                absolute
                right
              >
                プロフィールを編集する
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
        <h2>{{ user.name }}</h2>
        <p>@{{ user.user_id }}</p>
        <v-row>
          <v-col cols="3">
            <p>フォロー 100</p>
          </v-col>
          <v-col cols="3">
            <p>フォロワー 250</p>
          </v-col>
          <v-spacer />
        </v-row>
        <JobBadgeContainer />
        <v-divider />
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
      <v-tabs
        v-model="tab"
        @change="tabChange"
        color="indigo darken-3"
        centered
      >
        <v-tab>投稿</v-tab>
        <v-tab>ドロップ</v-tab>
        <v-tab>トピック</v-tab>
        <v-tab>返信</v-tab>
        <v-tab>メディア</v-tab>
        <v-tab>リアクションをつけた投稿</v-tab>
      </v-tabs>
      <v-divider />
      <DropsContainer />
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ReturnPageContainer from '~/components/Organisms/ReturnPageContainer'
import DropsContainer from '~/components/Bector/DropsContainer'
import UserIcon from '~/components/Atoms/UserIcon'
import JobBadgeContainer from '~/components/Molecules/JobBadgeContainer'
export default {
  layout: 'pc/Bector',
  components: {
    UserIcon,
    ReturnPageContainer,
    DropsContainer,
    JobBadgeContainer
  },
  computed: {
    ...mapGetters('users', ['user', 'staus', 'optionalUserDatum', 'job'])
  },
  data() {
    return {
      tab: null
    }
  },
  async asyncData({ route, store, error }) {
    const param = route.params
    const { status } = await store.dispatch('users/fetchUserByUserID', {
      userID: param.user_id
    })
    await store.dispatch('bector/fetchPostsByUserID', {
      payload: param.user_id
    })
    if (status !== 200) {
      error({ statusCode: status })
    }
  },
  methods: {
    tabChange() {
      const tab = this.tab
      switch (tab) {
        case 0:
          // 全ての投稿
          break
        case 1:
          // ドロップのみ
          break
        case 2:
          // トピックのみ
          break
        case 3:
          // 返信のみ
          break
        case 4:
          // メディアのみ
          break
        case 5:
          // リアクションをつけた投稿のみ
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#bectorUserPageCard {
  border: none !important;
}
hr {
  margin: 2em 0;
}
</style>
