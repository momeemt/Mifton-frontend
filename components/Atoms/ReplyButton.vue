<template>
  <v-btn
    @click.stop="reply"
    class="mx-2"
    icon
    dark
    small
    color="grey lighten-1"
  >
    <v-icon>
      mdi-reply
    </v-icon>
  </v-btn>
</template>

<script>
export default {
  methods: {
    reply() {}
  }
}
</script>

<style scoped></style>
