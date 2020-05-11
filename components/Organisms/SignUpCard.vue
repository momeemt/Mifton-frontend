<template>
  <v-card id="signUpCard">
    <v-card-title>Miftonの世界に飛び込もう</v-card-title>
    <SignUpForm @setUserData="setUserData" />
    <SignUpAction @userRegister="userRegister" />
  </v-card>
</template>

<script>
import SignUpForm from '~/components/Molecules/SignUpForm'
import SignUpAction from '~/components/Molecules/SignUpAction'
export default {
  name: 'SignUpCard',
  components: {
    SignUpForm,
    SignUpAction
  },
  data() {
    return {
      user: {}
    }
  },
  methods: {
    setUserData(user) {
      this.user = user
    },
    async userRegister() {
      const res = await this.$api.create('users', this.user)
      const resCode = res.resCode
      if (resCode === 200) {
        await this.$router.push('/home')
      } else {
        // eslint-disable-next-line no-self-assign
        this.user = this.user
      }
    }
  }
}
</script>

<style scoped>
#signUpCard {
  padding: 2vh 2vw;
  border-radius: 20px;
}
</style>
