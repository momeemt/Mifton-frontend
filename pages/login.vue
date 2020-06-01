<template>
  <div id="loginPage">
    <TheHeader page-type="General" />
    <div id="loginCardContainer">
      <LoginCard />
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '~/components/Organisms/TheHeader'
import TheFooter from '~/components/Organisms/TheFooter'
import LoginCard from '~/components/Organisms/LoginCard'

export default {
  components: {
    LoginCard,
    TheHeader,
    TheFooter
  },
  mounted() {
    setTimeout(() => {
      if (this.$store.state.sessions.isLoggedIn) {
        this.$router.push('/home')
      }
    }, 0)
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
