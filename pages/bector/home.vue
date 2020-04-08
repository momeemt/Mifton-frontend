<template>
  <div>
    <NewDropForm />
    <v-divider></v-divider>
    <v-bottom-navigation
      id="switchTimeline"
      :input-value="true"
      color="indigo"
      mandatory
      shift
    >
      <v-btn>
        <v-icon>fas fa-home</v-icon>
        <span>ホーム</span>
      </v-btn>
      <v-btn>
        <v-icon>fas fa-retweet</v-icon>
        <span>リポスト</span>
      </v-btn>
      <v-btn>
        <v-icon>fas fa-user-friends</v-icon>
        <span>フレンド</span>
      </v-btn>
      <v-btn input-value="globalBtn">
        <v-icon>fas fa-globe</v-icon>
        <span>グローバル</span>
      </v-btn>
      <v-btn>
        <v-icon>fas fa-filter</v-icon>
        <span>カスタム</span>
      </v-btn>
    </v-bottom-navigation>
    <DropsContainer :drops="drops" />
  </div>
</template>

<script>
// import ActionCable from 'actioncable'
import DropsContainer from '~/components/bector/DropsContainer.vue'
import NewDropForm from '~/components/NewDropForm.vue'

// eslint-disable-next-line no-unused-vars
// const cable = ActionCable.createConsumer('ws:localhost:8080/cable')
// Vue.prototype.$cable = cable

export default {
  name: 'BectorHomePage',
  layout: 'pc/Bector',
  components: {
    DropsContainer,
    NewDropForm
  },
  data() {
    return {
      drops: []
    }
  },
  async asyncData(context) {
    const dropsObject = await context.app.$api.Drops.index()
    const drops = dropsObject.drops
    console.log(dropsObject)
    return { drops }
  }
}
</script>

<style lang="scss" scoped>
#switchTimeline {
  box-shadow: none !important;
  position: sticky;
  top: 50px;
  z-index: 2;
  border-bottom: rgba(0, 0, 0, 0.12) solid 1px;
}
</style>
