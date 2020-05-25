<template>
  <v-card id="loginCard">
    <v-card-title>ログイン</v-card-title>
    <LoginForm @setUserData="setUserData" />
    <LoginAction :unableUsingBtn="hasNullData" @userLogin="userLogin" />
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'
import LoginForm from '~/components/Molecules/LoginForm'
import LoginAction from '~/components/Molecules/LoginAction'
export default {
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
        const { status } = await this.login({ user: this.user })
        if (status === 200) {
          await this.$router.push('/home')
        } else if (status === 401) {
          this.unAuthorizedError = true
        } else {
          this.unprocessableEntityError = true
        }
      }
    },
    setUserData(user) {
      this.user = user
      this.hasNullData = !this.user.user_id || !this.user.password
    },
    ...mapActions('sessions', ['login'])
  }
}
</script>

<style scoped>
#loginCard {
  padding: 2vh 2vw;
  border-radius: 20px;
}
</style>
