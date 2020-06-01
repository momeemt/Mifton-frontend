<template>
  <div>
    <TheHeader page-type="General" />
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
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '~/components/Organisms/TheHeader'
import TheFooter from '~/components/Organisms/TheFooter'
import Policy from '~/assets/json/policy.json'
export default {
  components: {
    TheFooter,
    TheHeader
  },
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
