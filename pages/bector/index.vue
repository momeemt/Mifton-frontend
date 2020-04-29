<template>
  <div>
    <Header page-type="Bector" />
    <v-img
      class="white--text align-end"
      height="500px"
      src="https://mifton.xyz/bector-top.jpg"
    >
      <v-row align="end">
        <v-col>
          <h1>Bector</h1>
          <h1>世界中のMinecrafterと繋がろう</h1>
        </v-col>
        <v-col>
          <LoginCard />
        </v-col>
      </v-row>
    </v-img>
    <div>
      <h2>最適化されたSNS</h2>
      <p>
        Miftonが提供するSNS「Bector」では、今までにないソーシャル体験を味わえます。
      </p>
      <p>投稿はもちろん、トピックを書いて技術を広めたり、日記を書いたり。</p>
      <p>
        様々なMinecraftメディアの情報をキャッチして、もっとMinecraftに詳しくなりましょう。
      </p>
    </div>
    <div>
      <h2>つぶやきから情報共有まで広くサポート</h2>
      <p>
        あなたが今使っているSNSはTwitterですか？それともDiscord？
      </p>
      <p>
        そんなあなたには、「ドロップ」がおすすめ。200字以内の中で自由に自分の気持ちやスクリーンショットをドロップしましょう。
      </p>
      <p>それとも、Google+やLobiを使っていますか？</p>
      <p>
        Miftonでは、「トピック」という、1500字まで書ける投稿形式をサポート。
      </p>
      <p>
        普段の日記やアップデート情報、コマンドやアドオンなどの解説記事などを投稿できます。
      </p>
      <p>
        Tiprintで記事を読むように、Miftonで記事を書いたり読んだりできます。
      </p>
    </div>
    <div>
      <h2>便利な機能も</h2>
      <p>
        Miftonでは、誰かの投稿をリドロップすることや、リアクションをつけることができます。
      </p>
      <p>
        そして、タイムラインをグローバルに切り替えたり、相互フォローユーザーに絞り込んだり、自由自在。
      </p>
      <p>
        誰かが投稿するとリアルタイムで自分のタイムラインも更新されるので、もう情報を見逃すことはありません。
      </p>
    </div>
  </div>
</template>

<script>
import Header from '../../components/Layouts/Header'
import LoginCard from '../../components/Organisms/LoginCard'
export default {
  name: 'BectorIndex',
  components: { LoginCard, Header }
}
</script>

<style scoped></style>
