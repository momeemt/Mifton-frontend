<template>
  <div>
    <HyperLinkContainer :listDatas="getListData()" page-type="General" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import HyperLinkContainer from '~/components/layouts/HyperLinkContainer'
export default {
  components: {
    HyperLinkContainer
  },
  computed: {
    ...mapGetters('sessions', ['currentUser', 'isLoggedIn'])
  },
  methods: {
    getUserID() {
      if (!this.isLoggedIn) return
      return this.currentUser.user_id
    },
    getListData() {
      return [
        { text: 'Home', icon: 'fas fa-home', link: '/home' },
        { text: '通知', icon: 'fas fa-bell', link: '/notification' },
        { text: '便利リンク集', icon: 'fas fa-code-branch', link: '/links' },
        { text: 'お知らせ', icon: 'fas fa-bullhorn', link: '/announce' },
        {
          text: 'プロフィール',
          icon: 'far fa-id-card',
          link: `/users/${this.getUserID()}`
        },
        {
          text: 'プロフィールを編集',
          icon: 'fas fa-user-edit',
          link: '/settings/profile'
        }
        // { text: '設定', icon: 'fas fa-cog', link: '/settings/home' }
      ]
    }
  }
}
</script>

<style scoped></style>
