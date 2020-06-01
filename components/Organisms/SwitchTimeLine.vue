<template>
  <v-bottom-navigation
    id="switchTimeline"
    :input-value="true"
    color="indigo"
    mandatory
    shift
  >
    <v-btn @click="changeHomeTimeLine">
      <v-icon>fas fa-home</v-icon>
      <span>ホーム</span>
    </v-btn>
    <v-btn @click="changeDropTimeLine">
      <v-icon>fas fa-eye-dropper</v-icon>
      <span>ドロップ</span>
    </v-btn>
    <v-btn @click="changeTopicTimeLine">
      <v-icon>fas fa-newspaper</v-icon>
      <span>トピック</span>
    </v-btn>
    <!--    <v-btn>-->
    <!--      <v-icon>fas fa-globe</v-icon>-->
    <!--      <span>グローバル</span>-->
    <!--    </v-btn>-->
  </v-bottom-navigation>
</template>

<script>
export default {
  methods: {
    changeHomeTimeLine() {
      this.$store.commit('bector/setPostsToDisplayPosts')
    },
    changeDropTimeLine() {
      this.$store.commit('bector/setDropsToDisplayPosts')
    },
    changeTopicTimeLine() {
      this.$store.commit('bector/setTopicsToDisplayPosts')
    }
  }
}
</script>

<style lang="scss" scoped>
#switchTimeline {
  box-shadow: none !important;
  position: sticky;
  top: 50px;
  z-index: 2;
  border-bottom: rgba(0, 0, 0, 0.12) solid 1px;
}
</style>
