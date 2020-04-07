<template>
  <div>
    <v-row>
      <v-dialog v-model="createDialog" max-width="600px">
        <v-card>
          <v-card-title>{{ modelObject.name }} を作成する</v-card-title>
          <v-card-text>
            <div v-for="(item, index) in modelObject.label">
              <v-text-field
                v-if="item.type === 'text'"
                :label="item.name"
                v-model="modelObject.data[index]"
                color="orange darken-3"
              ></v-text-field>
              <v-checkbox
                v-if="item.type === 'checkbox'"
                :label="item.name"
                v-model="modelObject.data[index]"
                color="orange darken-3"
              ></v-checkbox>
            </div>
            <v-btn
              @click="createModelObject"
              color="orange darken-3"
              class="white--text"
              >登録する</v-btn
            >
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-row>
    <v-btn
      @click="createDialog = true"
      color="orange darken-3"
      rounded
      class="white--text"
      outlined
      >作成する</v-btn
    >
  </div>
</template>

<script>
export default {
  name: 'CreateModalVue',
  props: {
    modelObject: Object
  },
  data() {
    return {
      createDialog: false
    }
  },
  methods: {
    createModelObject() {
      const id = this.modelObject.id
      const postTarget = this.$api[id]
      postTarget.create(this.modelObject.data)
      this.createDialog = false
    }
  }
}
</script>

<style scoped></style>
