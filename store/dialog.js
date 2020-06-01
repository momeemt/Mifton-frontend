export const state = () => ({
  emojiPickerDialog: false,
  newDropFormDialog: false,
  newTopicFormDialog: false,
  manageTableDeleteDialog: false
})

export const getters = {
  emojiPickerDialog: (state) => state.emojiPickerDialog,
  newDropFormDialog: (state) => state.newDropFormDialog,
  newTopicFormDialog: (state) => state.newTopicFormDialog,
  manageTableDeleteDialog: (state) => state.manageTableDeleteDialog
}

export const mutations = {
  switchEmojiPickerDialog(state) {
    state.emojiPickerDialog = !state.emojiPickerDialog
  },
  switchNewDropFormDialog(state) {
    state.newDropFormDialog = !state.newDropFormDialog
  },
  switchNewTopicFormDialog(state) {
    state.newTopicFormDialog = !state.newTopicFormDialog
  },
  switchManageTableDeleteDialog(state) {
    state.manageTableDeleteDialog = !state.manageTableDeleteDialog
  }
}
