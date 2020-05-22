<template>
  <v-dialog
    :value="emojiPickerDialog"
    @click:outside="switchEmojiPickerDialog"
    width="500"
  >
    <v-card>
      <Picker @select="addEmoji" style="width:500px;" />
    </v-card>
  </v-dialog>
</template>

<script>
import { Picker } from 'emoji-mart-vue'
import { mapGetters, mapMutations } from 'vuex'
export default {
  components: {
    Picker
  },
  data() {
    return {
      isDialogShow: false
    }
  },
  computed: {
    ...mapGetters('dialog', ['emojiPickerDialog'])
  },
  methods: {
    addEmoji(emoji) {
      this.addEmojiToDrop({ payload: { emoji: emoji.native } })
      this.switchEmojiPickerDialog()
    },
    ...mapMutations('bector', ['addEmojiToDrop']),
    ...mapMutations('dialog', ['switchEmojiPickerDialog'])
  }
}
</script>

<style scoped></style>
