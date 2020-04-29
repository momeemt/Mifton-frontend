<template>
  <div>
    <Header page-type="General" />
    <div id="policyCardContainer">
      <v-card id="policyCard" outlined width="75%">
        <v-card-title>プライバシーポリシー</v-card-title>
        <v-card-content>
          <div v-for="line in policyData.description">
            <p>{{ line }}</p>
          </div>
          <div v-for="article in policyData.articles">
            <h2>{{ article.title }}</h2>
            <div v-for="line in article.description">
              <p>{{ line }}</p>
            </div>
          </div>
        </v-card-content>
      </v-card>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Layouts/Header'
import Footer from '../components/Layouts/Footer'
import Policy from '../assets/json/policy.json'
export default {
  name: 'PolicyVue',
  components: { Footer, Header },
  data() {
    return {
      policyData: Policy
    }
  }
}
</script>

<style lang="scss" scoped>
#policyCardContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  #policyCard {
    padding: 20px 50px;
    margin: 50px 0;
    border-radius: 20px;

    h2 {
      margin: 50px 0 20px 0;
    }
  }
}
</style>
