<template>
  <v-flex>
    <v-card>
      <v-card-text>
        <v-form>
          <v-textarea v-model="content" label="content" />
        </v-form>
        <v-card-actions>
          <v-btn
            @click="editDrop"
            class="mx-2"
            dark
            color="teal"
            rounded
            width="100"
          >
            更新する
          </v-btn>
        </v-card-actions>
      </v-card-text>
    </v-card>
  </v-flex>
</template>

<style lang="scss" scoped>
textarea {
  font-family: fot-tsukuardgothic-std;
}
</style>

<script>
export default {
  props: {
    drop: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      id: this.drop.id,
      content: this.drop.content
    }
  },
  methods: {
    editDrop() {
      this.$axios
        .$put(`/api/v1/drops/${this.id}`, {
          content: this.content
        })
        .then((res) => {
          const drops = this.$parent.drops.map((l) => {
            return l.id === this.id ? res : l
          })
          this.$parent.drops = drops
          this.$emit('set')
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>
