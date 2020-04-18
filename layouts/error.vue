<template>
  <v-app>
    <Header page-type="General" />
    <div v-if="error.statusCode === 404">
      <img id="img404NotFound" src="../assets/404.jpeg" />
    </div>
    <div v-else>
      <p>エラーが起きました</p>
    </div>
  </v-app>
</template>

<script>
import Header from '~/components/layouts/Header'
export default {
  components: { Header },
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
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
