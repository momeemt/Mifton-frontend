<template>
  <v-card-actions>
    <v-spacer></v-spacer>
    <ShowEmojiPickerDialogButton />
    <NewDropButton />
  </v-card-actions>
</template>

<script>
import NewDropButton from '~/components/Atoms/NewDropButton'
import ShowEmojiPickerDialogButton from '~/components/Atoms/ShowEmojiPickerDialogButton'
export default {
  components: {
    NewDropButton,
    ShowEmojiPickerDialogButton
  }
}
</script>

<style scoped></style>
