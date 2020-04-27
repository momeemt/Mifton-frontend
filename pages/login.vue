<template>
  <div id="loginPage">
    <Header page-type="General" />
    <div>
      <p>ログインする</p>
      <v-text-field v-model="user_id" placeholder="ユーザーID"></v-text-field>
      <v-text-field
        v-model="password"
        type="password"
        placeholder="パスワード"
      ></v-text-field>
      <v-btn @click="login">送信</v-btn>
      <v-alert v-show="unAuthorizedError" dense outlined type="error">
        メールアドレス認証が完了していません。メールボックスを確認してください。
      </v-alert>
      <v-alert v-show="unprocessableEntityError" dense outlined type="error">
        メールアドレスかパスワードが間違っています。もう一度確認してください。
      </v-alert>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '~/components/layouts/Header'
import Footer from '~/components/layouts/Footer'

export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      user_id: '',
      password: '',
      unAuthorizedError: false,
      unprocessableEntityError: false
    }
  },
  methods: {
    async login() {
      this.unAuthorizedError = false
      this.unprocessableEntityError = false
      const res = await this.$api.create('sessions', {
        user_id: this.user_id,
        password: this.password
      })
      const resData = res.res
      const resCode = res.resCode
      if (resCode === 200) {
        this.$store.commit('login', resData)
        this.$router.push('/')
      } else if (resCode === 401) {
        // 認証なし
        this.unAuthorizedError = true
      } else {
        // 間違ってるよ
        this.unprocessableEntityError = true
      }
    },
    logout() {
      this.$store.commit('logout')
    }
  }
}
</script>

<style scoped></style>
