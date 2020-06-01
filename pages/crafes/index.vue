<template>
  <div>
    <TheHeader page-type="Crafes" />
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
import TheHeader from '~/components/Organisms/TheHeader'
import LoginCard from '~/components/Organisms/LoginCard'
export default {
  components: {
    TheHeader,
    LoginCard
  }
}
</script>

<style scoped></style>
