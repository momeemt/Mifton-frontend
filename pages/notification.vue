<template>
  <div>
    <h1>通知</h1>
    <v-list>
      <v-list-item v-for="notice in notificationsData">
        <v-list-item-content>{{ notice.content }}</v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
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

<style scoped></style>
