<template>
  <v-textarea
    v-model="content"
    :rules="maxCharRule"
    :placeholder="placeholder"
    :color="BECTOR_COLOR"
    rows="1"
    auto-grow
    rounded
  />
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  data() {
    return {
      maxCharRule: [
        (v) => v.length <= 140 || '140字以上のドロップはできません！'
      ],
      placeholder: '日常の体験や進捗を発信しよう',
      BECTOR_COLOR: '#017ABB'
    }
  },
  computed: {
    content: {
      get() {
        return this.newDrop.content
      },
      set(val) {
        const payload = {
          content: val
        }
        this.setNewDrop({ payload })
      }
    },
    ...mapGetters('bector', ['newDrop'])
  },
  methods: {
    ...mapMutations('bector', ['setNewDrop'])
  }
}
</script>
