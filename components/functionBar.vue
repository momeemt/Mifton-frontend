<template>
  <div id="HyperLinkContainer">
    <div class="wrapper">
      <v-dialog v-model="isOpenDropModal" max-width="600px">
        <NewDropForm></NewDropForm>
      </v-dialog>
      <v-btn
        id="drop-button"
        @click="openDropModal"
        class="ma-2 blue white--text darken-3 py-0"
        rounded
        depressed
        width="100%"
      >
        ドロップする
      </v-btn>
      <v-btn
        id="topic-button"
        class="ma-2 indigo white--text darken-3 py-0"
        rounded
        depressed
        width="100%"
      >
        トピックを書く
      </v-btn>
      <v-list rounded>
        <v-list-item-group color="primary" mandatory>
          <v-list-item
            v-for="(data, index) in listDatas"
            :key="index"
            :to="data.link"
            nuxt
          >
            <v-list-item-icon>
              <v-icon v-text="data.icon" color="indigo darken-3"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="data.text"> </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </div>
  </div>
</template>

<style lang="scss" scope>
#HyperLinkContainer {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
.wrapper {
  width: 70%;
  margin: auto;
}
v-list {
  margin: 0 auto;
}
.wrapper a {
  /*text-decoration: none;*/
  /*color: black !important;*/
  /*width: 150%;*/
}
.linkItem {
  display: flex;
}
</style>

<script>
import NewDropForm from '~/components/NewDropForm.vue'
export default {
  components: {
    NewDropForm
  },
  data() {
    return {
      listDatas: [
        { text: 'ホーム', icon: 'fas fa-home', id: '', link: '/bector/home' },
        {
          text: '通知',
          icon: 'fas fa-bell',
          id: 'notification',
          link: '/bector/notification'
        },
        {
          text: 'トレンド',
          icon: 'fas fa-fire',
          id: 'trend',
          link: '/bector/trend'
        },
        {
          text: 'メッセージ',
          icon: 'far fa-envelope',
          id: 'messages',
          link: '/bector/messages'
        },
        {
          text: 'リスト',
          icon: 'fas fa-list',
          id: 'lists',
          link: '/bector/lists'
        },
        {
          text: 'ブックマーク',
          icon: 'far fa-bookmark',
          id: 'bookmarks',
          link: '/bector/bookmarks'
        },
        {
          text: 'もっと見る',
          icon: 'fas fa-ellipsis-h',
          id: 'more',
          link: '/bector/more'
        },
        {
          text: 'Miftonに戻る',
          icon: 'fas fa-chevron-left',
          id: 'back',
          link: '/'
        }
      ],
      isOpenDropModal: false
    }
  },
  methods: {
    transitionPage(pageType) {
      this.$emit('transitionPage', pageType)
    },
    openDropModal() {
      this.isOpenDropModal = true
    }
  }
}
</script>
