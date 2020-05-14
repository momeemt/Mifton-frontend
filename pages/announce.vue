<template>
  <v-card id="announceCard" outlined>
    <v-card-title>運営からのお知らせ</v-card-title>
    <v-card-text>
      <v-list two-line v-if="resData != null">
        <v-list-item v-for="news in resData">
          <v-list-item-content>
            <v-list-item-title>{{ news.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ news.content }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <p v-else>お知らせはありません</p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  layout: 'pc/general',
  async asyncData({ app }) {
    const res = await app.$api.index('news')
    const resData = res.res
    const resCode = res.resCode
    return { resData, resCode }
  }
}
</script>

<style scoped>
#announceCard {
  border: none !important;
}
</style>
