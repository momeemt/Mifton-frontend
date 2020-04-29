<template>
  <div id="app">
    <v-app>
      <Header page-type="General" />
      <div id="flex">
        <div id="leftContent">
          <HyperLinkContainer :listDatas="listDatas" page-type="General" />
        </div>
        <div id="middleContent">
          <nuxt />
        </div>
        <div id="rightContent"></div>
      </div>
    </v-app>
  </div>
</template>

<script>
import HyperLinkContainer from '~/components/layouts/HyperLinkContainer'
import Header from '~/components/layouts/Header'
export default {
  components: { HyperLinkContainer, Header },
  data() {
    return {
      listDatas: [
        { text: 'Home', icon: 'fas fa-home', link: '/home' },
        { text: '通知', icon: 'fas fa-bell', link: '/notification' },
        { text: 'フィード', icon: 'far fa-comments', link: '/feed' },
        { text: '便利リンク集', icon: 'fas fa-code-branch', link: '/links' },
        { text: 'お知らせ', icon: 'fas fa-bullhorn', link: '/announce' },
        {
          text: 'プロフィール',
          icon: 'far fa-id-card',
          link: `/users/${this.userId}`
        },
        {
          text: 'プロフィールを編集',
          icon: 'fas fa-user-edit',
          link: '/settings/profile'
        },
        { text: '設定', icon: 'fas fa-cog', link: '/settings/home' }
      ]
    }
  },
  async asyncData({ store }) {
    const userId = await store.state.currentUser.id
    return { userId }
  }
}
</script>

<style scoped>
#flex {
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
#flex {
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
</style>
