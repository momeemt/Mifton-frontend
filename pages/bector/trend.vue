<template>
  <div>
    <v-text-field
      placeholder="トレンドを検索する👀"
      append-icon="fas fa-search"
    ></v-text-field>
    <v-tabs>
      <v-tab>おすすめ</v-tab>
      <v-tab>トピック</v-tab>
      <v-tab>サバイバル</v-tab>
      <v-tab>レッドストーン</v-tab>
      <v-tab>コマンド</v-tab>
      <v-tab>アドオン</v-tab>
      <v-tab>実況動画</v-tab>
      <v-tab-item>
        <p>【MinecraftBE】ver.1.15はスキップ、ver.1.16へ。</p>
      </v-tab-item>
      <v-tab-item>
        <p>5分でわかる！RSで組む論理回路</p>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
export default {
  name: 'BectorTrendPage',
  layout: 'pc/Bector'
}
</script>
