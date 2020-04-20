<template>
  <div id="app">
    <v-app>
      <Header page-type="Bector" />
      <v-dialog v-model="showingDropDialog" width="700px">
        <NewDropForm @close="closeDropDialog" @add="emitAddDrop" />
      </v-dialog>
      <v-dialog v-model="showingTopicDialog" width="1000px">
        <NewTopicForm />
      </v-dialog>
      <div id="container">
        <div id="leftContent">
          <div id="buttonsContainer">
            <div class="buttonWrapper">
              <v-btn
                id="drop-button"
                class="ma-2 blue white--text darken-3 py-0"
                @click="openDropDialog"
                rounded
                depressed
              >
                ドロップする
              </v-btn>
            </div>
            <div class="buttonWrapper">
              <v-btn
                id="topic-button"
                class="ma-2 indigo white--text darken-3 py-0"
                @click="openTopicDialog"
                rounded
                depressed
              >
                トピックを書く
              </v-btn>
            </div>
          </div>
          <HyperLinkContainer :listDatas="listDatas" page-type="Bector" />
        </div>
        <div id="middleContent">
          <nuxt />
        </div>
        <div id="rightContent">
          <NotificationContainer />
        </div>
      </div>
    </v-app>
  </div>
</template>

<script>
import Header from '~/components/layouts/Header'
import HyperLinkContainer from '~/components/layouts/HyperLinkContainer'
import NotificationContainer from '~/components/Bector/NotificationContainer'
import NewDropForm from '~/components/Bector/NewDropForm'
import NewTopicForm from '~/components/Bector/NewTopicForm'

export default {
  name: 'PCBectorLayout',
  components: {
    Header,
    HyperLinkContainer,
    NotificationContainer,
    NewDropForm,
    NewTopicForm
  },
  data() {
    return {
      listDatas: [
        { text: 'Home', icon: 'fas fa-home', link: '/bector/home' },
        { text: '通知', icon: 'far fa-bell', link: '/bector/notifications' },
        { text: 'トレンド', icon: 'fas fa-fire', link: '/bector/trend' },
        {
          text: 'メッセージ',
          icon: 'far fa-envelope',
          link: '/bector/messages'
        },
        { text: 'リスト', icon: 'fas fa-list', link: '/bector/lists' },
        {
          text: 'ブックマーク',
          icon: 'far fa-bookmark',
          link: `/bector/bookmarks`
        },
        {
          text: 'もっと見る',
          icon: 'fas fa-ellipsis-h',
          link: '/bector/more'
        },
        { text: 'Miftonに戻る', icon: 'fas fa-chevron-left', link: '/' }
      ],
      showingDropDialog: false,
      showingTopicDialog: false
    }
  },
  methods: {
    openDropDialog() {
      this.showingDropDialog = true
    },
    closeDropDialog() {
      this.showingDropDialog = false
    },
    emitAddDrop(drop) {
      console.log(drop)
      this.$nuxt.$emit('addDrop', drop)
    },
    openTopicDialog() {
      this.showingTopicDialog = true
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100vw;
}
#container {
  display: flex;
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
#buttonsContainer {
  margin-top: 40px;
}
.buttonWrapper {
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 10px;
}
#topic-button,
#drop-button {
  display: block;
  width: 75%;
  height: 40px;
}
</style>
