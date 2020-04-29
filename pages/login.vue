<template>
  <div id="loginPage">
    <Header page-type="General" />
    <div id="loginCardContainer">
      <LoginCard />
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '~/components/layouts/Header'
import Footer from '~/components/layouts/Footer'
import LoginCard from '~/components/Organisms/LoginCard'

export default {
  components: {
    LoginCard,
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
        await this.$router.push('/')
      } else if (resCode === 401) {
        // 認証なし
        this.unAuthorizedError = true
      } else {
        // 間違ってるよ
        this.unprocessableEntityError = true
      }
    },
    twitterLogin() {
      // twitter login する
      console.log('a')
    },
    logout() {
      this.$store.commit('logout')
    }
  }
}
</script>

<style lang="scss" scoped>
#loginCardContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 100px);

  #loginCard {
    height: 60%;
    width: 60%;
  }
}
</style>
