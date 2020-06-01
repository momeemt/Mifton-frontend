<template>
  <mavon-editor
    id="topicEditor"
    :toolbars="markdownOption"
    v-model="content"
    language="ja"
    placeholder="新しい技術やニュースを記事に書いて発信しよう！"
  />
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  data() {
    return {
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
  },
  computed: {
    content: {
      get() {
        return this.newTopic.content
      },
      set(val) {
        const payload = {
          title: this.newTopic.title,
          content: val
        }
        this.setNewTopic({ payload })
      }
    },
    ...mapGetters('bector', ['newTopic'])
  },
  methods: {
    ...mapMutations('bector', ['setNewTopic'])
  }
}
</script>

<style scoped></style>
