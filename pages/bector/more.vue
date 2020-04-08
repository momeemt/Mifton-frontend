<template>
  <div>
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
</template>

<script>
export default {
  name: 'BectorMorePage',
  layout: 'pc/Bector'
}
</script>
