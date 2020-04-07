<template>
  <div class="bectorMore">
    <Header pageType="Bector" />
    <div id="container">
      <div id="leftContent">
        <FunctionBar></FunctionBar>
      </div>
      <div id="middleContent">
        <v-container>
          <v-col>
            <v-row>
              <v-col>
                <v-card>
                  <v-card-title>プロフィールを編集</v-card-title>
                  <v-card-text>
                    <div>
                      素敵なプロフィールを作成しましょう。
                    </div>
                    <div>
                      あなたのMiftonでの活動も合わせて表示できます。
                    </div>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn text color="blue">
                      編集する
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
              <v-col>
                <v-card>
                  <v-card-title>アナリティクスを閲覧する</v-card-title>
                  <v-card-text>
                    <div>
                      あなたの投稿をどれだけの人がみたのかを確認できます。
                    </div>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn text color="blue">
                      閲覧する
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-card>
                  <v-card-title>チュートリアル</v-card-title>
                  <v-card-text>
                    <div>
                      Bectorの使い方を学びましょう。
                    </div>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn text color="blue">
                      開始する
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
              <v-col>
                <v-card>
                  <v-card-title>Bectorで広告する</v-card-title>
                  <v-card-text>
                    <div>
                      自分の創作物・サーバー・実況動画などを宣伝することができます。
                    </div>
                    <div>
                      現在は、ポイントのみ対応しています。
                    </div>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn text color="blue">
                      もっと詳しく
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-container>
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
import Header from '~/components/layouts/commonHeader.vue'
import RecommendBar from '~/components/RecommendBar'

export default {
  components: {
    RecommendBar,
    Header,
    FunctionBar
  }
}
</script>

<style lang="scss" scoped>
#container {
  display: flex;
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
</style>
