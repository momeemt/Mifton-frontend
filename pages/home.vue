<template>
  <div>
    <IntroduceMiftonCard />
    <DevelopmentStatus />
  </div>
</template>

<script>
import topRedirectGuest from '~/middleware/topRedirectGuest'
import DevelopmentStatus from '~/components/Organisms/DevelopmentStatus'
import IntroduceMiftonCard from '~/components/Organisms/IntroduceMiftonCard'

export default {
  name: 'Home',
  components: {
    DevelopmentStatus,
    IntroduceMiftonCard
  },
  layout: 'pc/general',
  middleware: topRedirectGuest
}
</script>
