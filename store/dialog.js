export const state = () => ({
  emojiPickerDialog: false
})

export const getters = {
  emojiPickerDialog: (state) => state.emojiPickerDialog
}

export const mutations = {
  switchEmojiPickerDialog(state) {
    state.emojiPickerDialog = !state.emojiPickerDialog
  }
}
