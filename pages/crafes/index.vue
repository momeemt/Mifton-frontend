<template>
  <div>
    <Header page-type="Crafes" />
    <v-img
      class="white--text align-end"
      height="500px"
      src="https://mifton.xyz/crafes-top.jpg"
    >
      <v-row align="end">
        <v-col>
          <h1>Crafes!</h1>
          <h1>技術で新しい世界を組み立てよう</h1>
        </v-col>
        <v-col>
          <LoginCard />
        </v-col>
      </v-row>
    </v-img>
  </div>
</template>

<script>
import Header from '../../components/Layouts/Header'
import LoginCard from '~/components/Organisms/LoginCard'
export default {
  name: 'CrafesIndex',
  components: {
    Header,
    LoginCard
  }
}
</script>

<style scoped></style>
