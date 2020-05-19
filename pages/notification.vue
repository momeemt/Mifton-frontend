<template>
  <v-card id="notificationsCard" outlined>
    <v-card-title>通知</v-card-title>
    <v-card-text>
      <v-list v-if="notificationsData != null">
        <v-list-item v-for="(value, key) in notificationsData" :key="key">
          <v-list-item-content>{{ value.content }}</v-list-item-content>
        </v-list-item>
      </v-list>
      <p v-else>通知はありません</p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'NotificationVue',
  layout: 'pc/general',
  async asyncData({ app }) {
    const res = await app.$api.index('notifications')
    const notificationsData = res.res
    const resCode = res.resCode
    return { notificationsData, resCode }
  }
}
</script>

<style scoped>
#notificationsCard {
  border: none !important;
}
</style>
