<template>
  <v-card id="newDropContainer">
    <EmojiPickerDialog />
    <NewDropFormContent />
    <NewDropFormAction />
    <v-alert v-show="showingErrorAlert" dense outlined type="error">
      ドロップに失敗しました。不正な操作が行われたか、サーバーがダウンしている可能性があります。Mifton運営にご連絡ください。
    </v-alert>
  </v-card>
</template>

<style lang="scss">
.v-messages__message {
  margin-left: 20px !important;
}
#newDropContainer {
  box-shadow: none !important;
}
</style>

<script>
import EmojiPickerDialog from '~/components/Molecules/EmojiPickerDialog'
import NewDropFormAction from '~/components/Molecules/NewDropFormAction'
import NewDropFormContent from '~/components/Molecules/NewDropFormContent'
export default {
  components: {
    NewDropFormContent,
    EmojiPickerDialog,
    NewDropFormAction
  },
  data() {
    return {
      showingErrorAlert: false
    }
  }
}
</script>
