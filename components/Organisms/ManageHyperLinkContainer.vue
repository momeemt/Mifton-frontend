<template>
  <HyperLinkContainer :listData="getListData()" page-type="General" />
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
        }
        // {
        //   text: 'Crafes! 管理',
        //   icon: 'fas fa-crown',
        //   link: `/manages/crafes`
        // },
        // {
        //   text: 'Qrafters 管理',
        //   icon: 'fas fa-question',
        //   link: `/manages/qrafters`
        // }
      ]
    }
  }
}
</script>

<style scoped></style>
