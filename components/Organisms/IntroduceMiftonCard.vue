<template>
  <v-card id="introduceMiftonCard" outlined>
    <v-card-title>Miftonへようこそ！</v-card-title>
    <v-card-text>
      <p>Miftonでの活動を始めましょう！</p>
      <p>まずはBectorで世界中のクラフターと繋がりましょう。</p>
      <p>
        ユーザーをフォローすると、活動や投稿をすぐに見られるようになります。
      </p>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn
        outlined
        to="/bector/home"
        color="indigo darken-3"
        class="outlineBectorBtn"
        rounded
        small
      >
        Bectorで近況を投稿してみる
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {}
</script>

<style scoped>
#introduceMiftonCard {
  border: none !important;
}
</style>
