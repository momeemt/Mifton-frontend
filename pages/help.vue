<template>
  <div>
    <TheHeader page-type="General" />
    <h1>ヘルプページ</h1>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '~/components/Organisms/TheHeader'
import TheFooter from '~/components/Organisms/TheFooter'
export default {
  components: {
    TheFooter,
    TheHeader
  }
}
</script>

<style scoped></style>
