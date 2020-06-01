<template>
  <div>
    <TheHeader page-type="Qrafters" />
    <v-img class="white--text align-end" height="500px" src="iceland.png">
      <v-row align="end">
        <v-col>
          <h1>Qrafters</h1>
          <h1>疑問を一気に解決しよう</h1>
        </v-col>
        <v-col>
          <LoginCard />
        </v-col>
      </v-row>
    </v-img>
    <div>
      <h2>現在開発中！</h2>
    </div>
    <div>
      <h2>疑問を解決するサービス、Qrafters</h2>
      <p>
        Minecraftを遊んでいて、疑問を抱えることは多々あると思います。
      </p>
      <p>
        例えば、コマンドならexecuteコマンドや、アドオンならアニメーションコントローラーなど、難しい仕組みは多くあります。
      </p>
      <p>
        誰かに聞きたいけれど誰に聞けばわからない...。それを解決します。
      </p>
      <p>
        Qraftersでは、まず同様の質問がされているか検索して、なければ質問することができます。
      </p>
    </div>
  </div>
</template>

<script>
import TheHeader from '~/components/Organisms/TheHeader'
import LoginCard from '~/components/Organisms/LoginCard'
export default {
  components: {
    TheHeader,
    LoginCard
  }
}
</script>

<style scoped></style>
