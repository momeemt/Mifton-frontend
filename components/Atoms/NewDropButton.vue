<template>
  <v-btn
    @click="drop"
    :disabled="emptyContent"
    class="ma-2 blue white--text darken-3"
    rounded
    width="200"
  >
    ドロップする
  </v-btn>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  computed: {
    emptyContent() {
      return !this.newDrop.content
    },
    ...mapGetters('bector', ['newDrop']),
    ...mapGetters('sessions', ['currentUser'])
  },
  methods: {
    drop() {
      const payload = {
        ...this.newDrop,
        user_id: this.currentUser.id
      }
      this.publishDrop({ payload })
      this.clearNewDrop()
      this.addNumOfDisplayPosts(1)
    },
    ...mapMutations('bector', ['addNumOfDisplayPosts', 'clearNewDrop']),
    ...mapActions('bector', ['publishDrop'])
  }
}
</script>

<style scoped></style>
