<template>
  <div>
    <Header page-type="General" />
    <h1>ヘルプページ</h1>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Layouts/Header'
import Footer from '../components/Layouts/Footer'
export default {
  name: 'HelpVue',
  components: { Footer, Header }
}
</script>

<style scoped></style>
