<template>
  <div>
    <TheHeader page-type="General" />
    <div id="termCardContainer">
      <v-card id="termCard" outlined width="75%">
        <v-card-title>利用規約</v-card-title>
        <v-card-content>
          <div v-for="line in termData.description">
            <p>{{ line }}</p>
          </div>
          <div v-for="article in termData.articles">
            <h2>{{ article.title }}</h2>
            <div v-for="line in article.description">
              <p>{{ line }}</p>
            </div>
          </div>
        </v-card-content>
      </v-card>
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheFooter from '~/components/Organisms/TheFooter'
import TheHeader from '~/components/Organisms/TheHeader'
import Term from '~/assets/json/term.json'
export default {
  components: {
    TheFooter,
    TheHeader
  },
  data() {
    return {
      termData: Term
    }
  }
}
</script>

<style lang="scss" scoped>
#termCardContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  #termCard {
    padding: 20px 50px;
    margin: 50px 0;
    border-radius: 20px;

    h2 {
      margin: 50px 0 20px 0;
    }
  }
}
</style>
