<template>
  <v-app>
    <div v-if="error.statusCode === 404">
      <TheHeader page-type="General" />
      <h1>存在しないページです</h1>
    </div>
    <div v-else>
      <p>申し訳ございません。</p>
      <h1>エラーが発生しました。</h1>
      <nuxt-link to="/">Homeへ</nuxt-link>
      <v-btn @click="logout2">ログアウト</v-btn>
    </div>
  </v-app>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import TheHeader from '~/components/Organisms/TheHeader'
export default {
  components: {
    TheHeader
  },
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  computed: {
    ...mapGetters('sessions', ['currentUser'])
  },
  methods: {
    logout2() {
      this.deleteUser()
    },
    ...mapActions('sessions', ['logout']),
    ...mapMutations('sessions', ['deleteUser'])
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped lang="scss">
h1 {
  font-size: 20px;
}
#img404NotFound {
  width: 100vw;
  height: calc(100vh - 50px);
}
</style>
