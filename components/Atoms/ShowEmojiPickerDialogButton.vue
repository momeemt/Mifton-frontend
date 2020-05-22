<template>
  <v-btn
    @click="switchEmojiPickerDialog"
    class="mx-2"
    color="pink"
    icon
    dark
    small
  >
    <v-icon dark>mdi-face</v-icon>
  </v-btn>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations('dialog', ['switchEmojiPickerDialog'])
  }
}
</script>

<style scoped></style>
