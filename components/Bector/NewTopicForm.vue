<template>
  <v-card>
    <v-card-title>トピックを投稿する</v-card-title>
    <no-ssr>
      <mavon-editor
        id="topicEditor"
        :toolbars="markdownOption"
        v-model="topic.content"
        language="ja"
        placeholder="新しい技術やニュースを記事に書いて発信しよう！"
      />
    </no-ssr>
    <v-card-actions>
      <v-btn
        id="topic-button"
        class="ma-2 indigo white--text darken-3"
        rounded
        width="200"
        right
      >
        投稿する
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'NewTopicForm',
  data() {
    return {
      topic: {
        title: '',
        content: ''
      },
      markdownOption: {
        bold: true,
        italic: true,
        header: true,
        underline: true,
        strikethrough: true,
        mark: true,
        superscript: true,
        subscript: true,
        quote: true,
        ol: true,
        ul: true,
        link: true,
        imagelink: true,
        code: true,
        table: true,
        fullscreen: true,
        readmodel: true,
        htmlcode: false,
        help: true,
        placeholder: '新しい技術やニュースを記事に書いて発信しよう！'
      }
    }
  }
}
</script>

<style scoped></style>
