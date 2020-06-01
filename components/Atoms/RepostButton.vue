<template>
  <v-btn
    @click.stop="rePost"
    class="mx-2"
    icon
    dark
    small
    color="grey lighten-1"
  >
    <v-icon>
      fas fa-retweet
    </v-icon>
  </v-btn>
</template>

<script>
export default {
  methods: {
    rePost() {}
  }
}
</script>

<style scoped></style>
