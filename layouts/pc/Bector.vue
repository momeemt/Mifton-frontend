<template>
  <div id="app">
    <v-app>
      <Header page-type="Bector" />
      <div id="container">
        <div id="leftContent">
          <v-btn
            id="drop-button"
            class="ma-2 blue white--text darken-3 py-0"
            rounded
            depressed
            width="60%"
          >
            ドロップする
          </v-btn>
          <v-btn
            id="topic-button"
            class="ma-2 indigo white--text darken-3 py-0"
            rounded
            depressed
            width="60%"
          >
            トピックを書く
          </v-btn>
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
import NotificationContainer from '~/components/bector/NotificationContainer'

export default {
  name: 'PCBectorLayout',
  components: {
    Header,
    HyperLinkContainer,
    NotificationContainer
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
      ]
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
#drop-button {
  margin: auto;
}
</style>
