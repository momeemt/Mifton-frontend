<template>
  <v-card id="loginCard">
    <v-card-title>ログイン</v-card-title>
    <LoginForm @setUserData="setUserData" />
    <LoginAction :unableUsingBtn="hasNullData" @userLogin="userLogin" />
  </v-card>
</template>

<script>
import LoginForm from '~/components/Molecules/LoginForm'
import LoginAction from '~/components/Molecules/LoginAction'
export default {
  name: 'LoginCard',
  components: {
    LoginAction,
    LoginForm
  },
  data() {
    return {
      user: {},
      hasNullData: true
    }
  },
  methods: {
    async userLogin() {
      if (!this.hasNullData) {
        const res = await this.$api.create('sessions', this.user)
        const resData = res.res
        const resCode = res.resCode
        if (resCode === 200) {
          this.$store.commit('login', resData)
          await this.$router.push('/home')
        } else if (resCode === 401) {
          this.unAuthorizedError = true
        } else {
          this.unprocessableEntityError = true
        }
      }
    },
    setUserData(user) {
      this.user = user
      this.hasNullData = !this.user.user_id || !this.user.password
    }
  }
}
</script>

<style scoped>
#loginCard {
  padding: 2vh 2vw;
  border-radius: 20px;
}
</style>
