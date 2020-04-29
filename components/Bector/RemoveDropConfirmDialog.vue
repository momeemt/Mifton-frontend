<template>
  <v-dialog v-model="showingDialog" width="500">
    <v-card>
      <v-card-title>ドロップを削除しますか？</v-card-title>
      <v-card-text>
        削除したドロップを元に戻すことはできません。
        あなたのアカウントや検索結果からこの投稿は除外されます。
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="cancelRemovingDrop" color="gray darken-1">
          キャンセルする
        </v-btn>
        <v-btn @click="removeDrop" color="red darken-1">
          削除する
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'RemoveDropConfirmDialogVue',
  props: {
    showingDialog: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    removeDrop() {
      this.$emit('rmDrop')
    },
    cancelRemovingDrop() {
      this.$emit('cancelRemovingDrop')
    }
  }
}
</script>
