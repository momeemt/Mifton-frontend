<template>
  <div class="returnPageButtonContainer">
    <v-btn @click="returnPage" icon class="returnPageButton">
      <v-icon>fas fa-arrow-left</v-icon>
    </v-btn>
    <div>戻る</div>
  </div>
</template>

<script>
export default {
  name: 'ReturnPageButtonContainerVue',
  methods: {
    returnPage() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.returnPageButtonContainer {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-bottom: rgba(0, 0, 0, 0.12) solid 1px;
}
.returnPageButton {
  margin-right: 2em;
  i {
    font-size: 18px !important;
  }
}
</style>
