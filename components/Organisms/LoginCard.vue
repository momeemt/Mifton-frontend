<template>
  <v-card id="loginCard">
    <v-card-title>ログイン</v-card-title>
    <LoginForm />
    <LoginAction />
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
  }
}
</script>

<style scoped>
#loginCard {
  padding: 2vh 2vw;
  border-radius: 20px;
}
</style>
