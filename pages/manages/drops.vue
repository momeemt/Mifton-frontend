<template>
  <div>
    <v-data-table :headers="headers" :items="drops" show-select>
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>ドロップ管理</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <create-modal :modelObject="dropsObjectForModal"></create-modal>
        </v-toolbar>
        <v-toolbar flat color="white">
          <p>現在のドロップ数は {{ dropsCount }} です。</p>
        </v-toolbar>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import createModal from '~/components/manages/createModal'
import dropsJsonData from '~/assets/json/modelObject/drops.json'
export default {
  name: 'Users',
  layout: 'pc/manage',
  components: {
    createModal
  },
  data() {
    return {
      drops: [],
      headers: [
        { text: 'ユーザー名', value: 'user.name' },
        { text: '内容', value: 'content' },
        { text: '時刻', value: 'created_at' },
        { text: '操作', value: 'actions', sortable: false }
      ],
      dropsObjectForModal: dropsJsonData
    }
  },
  computed: {
    dropsCount() {
      return this.drops.length
    }
  },
  async asyncData(context) {
    const dropsObject = await context.app.$api.Drops.index()
    const drops = dropsObject.drops
    return { drops }
  }
}
</script>

<style scoped></style>
