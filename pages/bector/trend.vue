<template>
  <div id="bectorTrend">
    <BectorHeader />
    <div id="container">
      <div id="leftContent">
        <FunctionBar></FunctionBar>
      </div>
      <div id="middleContent">
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
      <div id="rightContent">
        <p>ここ通知がいいな</p>
        <RecommendBar />
      </div>
    </div>
  </div>
</template>

<script>
import FunctionBar from '~/components/functionBar.vue'
import BectorHeader from '~/components/bector/header.vue'
import RecommendBar from '~/components/RecommendBar'

export default {
  components: {
    RecommendBar,
    BectorHeader,
    FunctionBar
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100vw;
}
#container {
  display: flex;
  //overflow: visible;
}
#leftContent {
  width: 25%;
  position: sticky;
  top: 50px;
  height: calc(100vh - 50px);
  border-right: rgba(0, 0, 0, 0.12) solid 1px;
}
#middleContent {
  width: 50%;
}
#rightContent {
  width: 25%;
  border-left: rgba(0, 0, 0, 0.12) solid 1px;
}

.flex {
  margin-bottom: 2rem;
}
#switchTimeline {
  /*display: flex;*/
  /*justify-content: center;*/
  box-shadow: none !important;
  position: sticky;
  top: 50px;
  z-index: 2;
  border-bottom: rgba(0, 0, 0, 0.12) solid 1px;
}
</style>
