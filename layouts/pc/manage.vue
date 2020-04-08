<template>
  <div id="app">
    <v-app>
      <Header page-type="General" />
      <div id="flex">
        <div id="leftContent">
          <hyper-link-bar :listDatas="listDatas" page-type="General" />
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
import HyperLinkBar from '~/components/hyperLinkBar'
import Header from '~/components/layouts/Header'
export default {
  components: { HyperLinkBar, Header },
  data() {
    return {
      user_id: /* this.$store.state.currentUser.user_id */ 16,
      listDatas: [
        {
          text: 'ダッシュボード',
          icon: 'fas fa-tachometer-alt',
          link: '/manages/dash'
        },
        { text: 'ユーザー管理', icon: 'fas fa-users', link: '/manages/users' },
        {
          text: 'お知らせ管理',
          icon: 'fas fa-bullhorn',
          link: '/manages/announces'
        },
        {
          text: '通報管理',
          icon: 'fas fa-exclamation-triangle',
          link: `/manages/reports`
        },
        {
          text: 'ドロップ管理',
          icon: 'fas fa-eye-dropper',
          link: '/manages/drops'
        },
        {
          text: 'トピック管理',
          icon: 'far fa-newspaper',
          link: '/manages/topics'
        },
        {
          text: '便利リンク管理',
          icon: 'fas fa-code-branch',
          link: '/manages/convenience_links'
        },
        {
          text: 'Crafes! 管理',
          icon: 'fas fa-crown',
          link: `/manages/crafes`
        },
        {
          text: 'Qrafters 管理',
          icon: 'fas fa-question',
          link: `/manages/qrafters`
        }
      ]
    }
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
</style>
