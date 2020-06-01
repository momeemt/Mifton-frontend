<template>
  <div id="app">
    <v-app>
      <TheHeader page-type="General" />
      <div id="flex">
        <div id="leftContent">
          <ManageHyperLinkContainer />
        </div>
        <div id="middleContent">
          <nuxt />
        </div>
        <div id="rightContent"></div>
      </div>
    </v-app>
  </div>
</template>

<script>
import ManageHyperLinkContainer from '~/components/Organisms/ManageHyperLinkContainer'
import TheHeader from '~/components/Organisms/TheHeader'
export default {
  components: {
    ManageHyperLinkContainer,
    TheHeader
  }
}
</script>

<style scoped>
#flex {
  display: flex;
}
#leftContent {
  width: 25%;
  position: sticky;
  top: 50px;
  height: calc(100vh - 50px);
  border-right: rgba(0, 0, 0, 0.12) solid 1px;
}
#middleContent {
  width: 50%;
}
#rightContent {
  width: 25%;
  position: sticky;
  top: 50px;
  height: calc(100vh - 50px);
  border-left: rgba(0, 0, 0, 0.12) solid 1px;
}
#flex {
  display: flex;
}
</style>
