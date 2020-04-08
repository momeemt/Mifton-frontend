<template>
  <div class="bectorIndex">
    <Header page-type="Bector" />
    <div id="container">
      <div id="leftContent">
        <FunctionBar></FunctionBar>
      </div>
      <div id="middleContent">
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
      <div id="rightContent">
        <v-card id="notificaitonContainer">
          <v-card-title>
            <v-badge color="indigo" content="4" class="font-weight-bold"
              >通知</v-badge
            >
          </v-card-title>
          <v-list>
            <v-divider></v-divider>
            <v-list-item>通知が来ました</v-list-item>
            <v-divider></v-divider>
            <v-list-item>通知が来ました</v-list-item>
            <v-divider></v-divider>
            <v-list-item>通知が来ました</v-list-item>
            <v-divider></v-divider>
            <v-list-item>通知が来ました</v-list-item>
            <v-divider></v-divider>
          </v-list>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
// import ActionCable from 'actioncable'
import FunctionBar from '~/components/functionBar.vue'
import DropsContainer from '~/components/bector/DropsContainer.vue'
import NewDropForm from '~/components/NewDropForm.vue'
import Header from '~/components/layouts/commonHeader.vue'

// eslint-disable-next-line no-unused-vars
// const cable = ActionCable.createConsumer('ws:localhost:8080/cable')
// Vue.prototype.$cable = cable

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    DropsContainer,
    NewDropForm,
    Header,
    FunctionBar
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
#notificaitonContainer {
  box-shadow: none;
  padding: 2em 0;
}
.home {
  width: 100vw;
}
#container {
  display: flex;
  //overflow: visible;
}
#leftContent {
  width: 25%;
  position: sticky;
  top: 50px;
  height: calc(100vh - 50px);
  border-right: rgba(0, 0, 0, 0.12) solid 1px;
}
#middleContent {
  width: 50%;
}
#rightContent {
  width: 25%;
  position: sticky;
  top: 50px;
  height: calc(100vh - 50px);
  border-left: rgba(0, 0, 0, 0.12) solid 1px;
}

.flex {
  margin-bottom: 2rem;
}
#switchTimeline {
  /*display: flex;*/
  /*justify-content: center;*/
  box-shadow: none !important;
  position: sticky;
  top: 50px;
  z-index: 2;
  border-bottom: rgba(0, 0, 0, 0.12) solid 1px;
}
</style>
