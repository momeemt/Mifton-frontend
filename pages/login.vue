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
import Header from '~/components/Layouts/Header'
import Footer from '~/components/Layouts/Footer'
import LoginCard from '~/components/Organisms/LoginCard'
import homeRedirectLoggedUser from '~/middleware/homeRedirectLoggedUser'

export default {
  components: {
    LoginCard,
    Header,
    Footer
  },
  middleware: homeRedirectLoggedUser
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
