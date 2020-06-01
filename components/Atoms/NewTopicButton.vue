<template>
  <v-btn
    @click="addTopic"
    :disabled="emptyContent"
    class="ma-2 indigo white--text darken-3"
    rounded
    width="200"
  >
    投稿する
  </v-btn>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  computed: {
    emptyContent() {
      return !this.newTopic.content || !this.newTopic.title
    },
    ...mapGetters('bector', ['newTopic']),
    ...mapGetters('sessions', ['currentUser'])
  },
  methods: {
    addTopic() {
      const payload = {
        ...this.newTopic,
        user_id: this.currentUser.id
      }
      this.publishTopic({ payload })
      this.clearNewTopic()
      this.addNumOfDisplayPosts(1)
    },
    ...mapMutations('bector', ['addNumOfDisplayPosts', 'clearNewTopic']),
    ...mapActions('bector', ['publishTopic'])
  }
}
</script>

<style scoped></style>
