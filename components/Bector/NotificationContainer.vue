<template>
  <div>
    <v-card id="notificaitonContainer">
      <v-card-title>
        <v-badge color="indigo" content="4" class="font-weight-bold">
          通知
        </v-badge>
      </v-card-title>
      <v-list>
        <v-divider></v-divider>
        <v-list-item>通知が来ました</v-list-item>
        <v-divider></v-divider>
        <v-list-item>通知が来ました</v-list-item>
        <v-divider></v-divider>
        <v-list-item>通知が来ました</v-list-item>
        <v-divider></v-divider>
        <v-list-item>通知が来ました</v-list-item>
        <v-divider></v-divider>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
#notificaitonContainer {
  box-shadow: none;
  padding: 2em 0;
}
</style>
