<template>
  <div>
    <IntroduceMiftonCard />
    <DevelopmentStatus />
  </div>
</template>

<script>
import DevelopmentStatus from '~/components/Organisms/DevelopmentStatus'
import IntroduceMiftonCard from '~/components/Organisms/IntroduceMiftonCard'

export default {
  layout: 'pc/general',
  components: {
    DevelopmentStatus,
    IntroduceMiftonCard
  },
  head() {
    return {
      title: 'Home'
    }
  },
  mounted() {
    setTimeout(() => {
      if (!this.$store.state.sessions.isLoggedIn) {
        this.$router.push('/')
      }
    }, 0)
  }
}
</script>
