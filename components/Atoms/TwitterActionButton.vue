<template>
  <v-btn rounded color="#00acee" class="twitterLoginBtn white--text">
    <v-icon left>fab fa-twitter</v-icon>
    {{ label }}
  </v-btn>
</template>

<style lang="scss" scoped>
.twitterLoginBtn {
  width: 250px;
}
</style>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    }
  }
}
</script>
