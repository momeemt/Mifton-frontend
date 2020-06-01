<template>
  <v-card>
    <v-card-title>トピックを投稿する</v-card-title>
    <v-card-actions>
      <v-alert v-show="false" dense outlined type="error">
        投稿に失敗しました。不正な操作が行われたか、サーバーがダウンしている可能性があります。Mifton運営にご連絡ください。
      </v-alert>
    </v-card-actions>
    <NewTopicFormTextField />
    <NewTopicFormTextArea />
    <v-card-actions>
      <v-spacer />
      <NewTopicButton />
    </v-card-actions>
  </v-card>
</template>

<script>
import NewTopicFormTextArea from '~/components/Atoms/NewTopicFormTextArea'
import NewTopicFormTextField from '~/components/Atoms/NewTopicFormTextField'
import NewTopicButton from '~/components/Atoms/NewTopicButton'
export default {
  components: {
    NewTopicButton,
    NewTopicFormTextField,
    NewTopicFormTextArea
  }
}
</script>

<style scoped></style>
