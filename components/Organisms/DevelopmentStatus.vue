<template>
  <v-card id="developmentStatusCard" outlined>
    <v-card-title>開発状況</v-card-title>
    <v-card-text>
      <p>
        Miftonは、より使いやすく便利なサービスに進化させるために、開発を続けています。
      </p>
      <p>進捗バーが100%になると、その機能がMiftonで使えるようになります。</p>
      <v-divider />
      <p>Mifton</p>
      <DevelopmentProgressBar
        :modelData="postConvenienceLink"
        color="orange"
        label="便利リンクの投稿"
      />
      <DevelopmentProgressBar
        :modelData="mulchplay"
        color="orange"
        label="マルチプレイ募集機能"
      />
      <v-divider />
      <p>Bector</p>
      <DevelopmentProgressBar
        :modelData="reservationDrop"
        color="indigo"
        label="予約投稿"
      />
      <DevelopmentProgressBar
        :modelData="directMail"
        color="indigo"
        label="ダイレクトメッセージ"
      />
      <DevelopmentProgressBar :modelData="list" color="indigo" label="リスト" />
      <v-divider />
      <p>Crafes!</p>
      <DevelopmentProgressBar
        :modelData="crafesPublish"
        color="green"
        label="ベータ公開"
      />
      <v-divider />
      <p>Qrafters</p>
      <DevelopmentProgressBar
        :modelData="qraftersPublish"
        color="red"
        label="ベータ公開"
      />
    </v-card-text>
  </v-card>
</template>
<script>
import DevelopmentProgressBar from '../Molecules/DevelopmentProgressBar'
export default {
  components: { DevelopmentProgressBar },
  data() {
    return {
      postConvenienceLink: '10',
      mulchplay: '1',
      directMail: '0',
      list: '0',
      reservationDrop: '0',
      crafesPublish: '1',
      qraftersPublish: '0'
    }
  }
}
</script>

<style scoped>
#developmentStatusCard {
  border: none !important;
}
hr {
  margin: 20px 0;
}
</style>
