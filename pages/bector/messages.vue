<template>
  <div class="bectorMessages">
    <BectorHeader />
    <div id="container">
      <div id="leftContent">
        <FunctionBar></FunctionBar>
      </div>
      <div id="middleContent">
        directMessage
      </div>
      <div id="rightContent">
        <p>ここ通知がいいな</p>
        <RecommendBar />
      </div>
    </div>
  </div>
</template>

<script>
import FunctionBar from '~/components/functionBar.vue'
import BectorHeader from '~/components/bector/header.vue'
import RecommendBar from '~/components/RecommendBar'

export default {
  components: {
    RecommendBar,
    BectorHeader,
    FunctionBar
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100vw;
}
#container {
  display: flex;
  //overflow: visible;
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
  border-left: rgba(0, 0, 0, 0.12) solid 1px;
}

.flex {
  margin-bottom: 2rem;
}
#switchTimeline {
  /*display: flex;*/
  /*justify-content: center;*/
  box-shadow: none !important;
  position: sticky;
  top: 50px;
  z-index: 2;
  border-bottom: rgba(0, 0, 0, 0.12) solid 1px;
}
</style>
