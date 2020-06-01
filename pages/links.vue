<template>
  <v-card id="convenienceLinkCard" outlined>
    <v-card-title>便利リンク集</v-card-title>
    <v-card-text>
      <v-list v-if="resData != null">
        <v-list-item
          v-for="data in resData"
          :key="data"
          :href="data.link"
          three-line
          target="_blank"
        >
          <v-list-item-content>
            <v-list-item-title v-text="data.name"></v-list-item-title>
            <v-list-item-subtitle
              v-text="data.description"
            ></v-list-item-subtitle>
            <v-list-item-subtitle v-text="data.tags"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <p v-else>便利リンクは投稿されていません</p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  layout: 'pc/general',
  // TODO: エラーハンドリングを追加する
  async asyncData({ app }) {
    const res = await app.$api.index('convenience_links')
    const resCode = res.resCode
    const resData = res.resData
    return { resData, resCode }
  },
  head() {
    return {
      title: '便利リンク集'
    }
  }
}
</script>

<style scoped>
#convenienceLinkCard {
  border: none !important;
}
</style>
