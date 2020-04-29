<template>
  <v-btn rounded color="#00acee" class="twitterLoginBtn white--text">
    <v-icon left>fab fa-twitter</v-icon>
    {{ label }}
  </v-btn>
</template>

<script>
export default {
  name: 'TwitterActionButton',
  props: {
    label: {
      type: String,
      required: true
    }
  }
}
</script>
