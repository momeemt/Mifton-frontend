<template>
  <HyperLinkContainer :listData="getListData()" page-type="Bector" />
</template>

<script>
import HyperLinkContainer from '~/components/Molecules/HyperLinkContainer'
export default {
  components: {
    HyperLinkContainer
  },
  methods: {
    getListData() {
      return [
        { text: 'Home', icon: 'fas fa-home', link: '/bector/home' },
        { text: '通知', icon: 'far fa-bell', link: '/bector/notifications' },
        // { text: 'トレンド', icon: 'fas fa-fire', link: '/bector/trend' },
        // {
        //   text: 'メッセージ',
        //   icon: 'far fa-envelope',
        //   link: '/bector/messages'
        // },
        // { text: 'リスト', icon: 'fas fa-list', link: '/bector/lists' },
        // {
        //   text: 'ブックマーク',
        //   icon: 'far fa-bookmark',
        //   link: `/bector/bookmarks`
        // },
        // {
        //   text: 'もっと見る',
        //   icon: 'fas fa-ellipsis-h',
        //   link: '/bector/more'
        // },
        { text: 'Miftonに戻る', icon: 'fas fa-chevron-left', link: '/home' }
      ]
    }
  }
}
</script>

<style scoped></style>
