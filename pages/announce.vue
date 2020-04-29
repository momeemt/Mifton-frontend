<template>
  <div>
    <h1>お知らせ</h1>
    <p>Mifton運営からのお知らせを配信します。</p>
    <v-list two-line>
      <v-list-item v-for="news in resData">
        <v-list-item-content>
          <v-list-item-title>{{ news.title }}</v-list-item-title>
          <v-list-item-subtitle>{{ news.content }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  name: 'AnnounceVue',
  layout: 'pc/general',
  data() {
    return {
      allNews: []
    }
  },
  async asyncData({ app }) {
    const res = await app.$api.index('news')
    const resData = res.res
    const resCode = res.resCode
    return { resData, resCode }
  }
}
</script>

<style scoped></style>
