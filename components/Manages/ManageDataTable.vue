<template>
  <v-data-table :headers="headers" :items="modelObject" show-select>
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>{{ modelName }}管理</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <create-modal :modelObject="modelJsonData"></create-modal>
      </v-toolbar>
      <v-toolbar flat color="white">
        <p>現在の{{ modelName }}数は {{ modelObjectCount }} です。</p>
      </v-toolbar>
    </template>
  </v-data-table>
</template>

<script>
import createModal from '~/components/manages/createModal'
export default {
  name: 'ManageDataTable',
  components: {
    createModal
  },
  props: {
    modelName: {
      type: String,
      required: true
    },
    modelJsonData: {
      type: Object,
      required: true
    },
    headers: {
      type: Array,
      required: true
    },
    modelObject: {
      type: Array,
      required: true
    }
  },
  computed: {
    modelObjectCount() {
      return this.modelObject.length
    }
  }
}
</script>
