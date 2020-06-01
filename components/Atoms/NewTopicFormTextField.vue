<template>
  <v-text-field v-model="title" placeholder="タイトル" flat rounded />
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  computed: {
    title: {
      get() {
        return this.newTopic.title
      },
      set(val) {
        const payload = {
          title: val,
          content: this.newTopic.content
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
