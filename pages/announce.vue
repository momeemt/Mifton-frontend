<template>
  <v-card id="announceCard" outlined>
    <v-card-title>運営からのお知らせ</v-card-title>
    <v-card-text>
      <v-list v-if="resData != null" two-line>
        <v-list-item v-for="(value, key) in resData" :key="key">
          <v-list-item-content>
            <v-list-item-title>{{ value.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ value.content }}</v-list-item-subtitle>
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
  },
  head() {
    return {
      title: 'お知らせ'
    }
  }
}
</script>

<style scoped>
#announceCard {
  border: none !important;
}
</style>
