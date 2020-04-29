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
  </div>
</template>

<script>
import Header from '../../components/Layouts/Header'
export default {
  name: 'BectorIndex',
  components: { Header }
}
</script>

<style scoped></style>
