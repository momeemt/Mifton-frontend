<template>
  <div id="loginPage">
    <Header pageType="General" />
    <div>
      <p>ログインする</p>
      <v-text-field v-model="user_id" placeholder="ユーザーID"></v-text-field>
      <v-text-field v-model="password" placeholder="パスワード"></v-text-field>
      <v-btn @click="login">送信</v-btn>
      <v-btn @click="logout">ログアウト</v-btn>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '~/components/layouts/Header'
import Footer from '~/components/layouts/commonFooter'

export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      user_id: '',
      password: ''
    }
  },
  methods: {
    login() {
      this.$axios
        .$post('/api/v1/sessions', {
          user_id: this.user_id,
          password: this.password
        })
        .then((res) => {
          console.log(res)
          this.$store.commit('login', res)
          this.$router.push('/')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    logout() {
      this.$store.commit('logout')
    }
  }
}
</script>

<style scoped></style>
