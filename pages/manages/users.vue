<template>
  <div>
    <v-data-table :headers="headers" :items="users" show-select>
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>ユーザー管理</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <create-modal :modelObject="usersObjectForModal"></create-modal>
        </v-toolbar>
        <v-toolbar flat color="white">
          <p>現在のユーザー数は {{ usersCount }} 人です。</p>
        </v-toolbar>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import createModal from '~/components/manages/createModal'
import usersJsonData from '~/assets/json/modelObject/users.json'
export default {
  name: 'Users',
  layout: 'pc/manage',
  components: {
    createModal
  },
  data() {
    return {
      users: [],
      headers: [
        { text: 'ユーザー名', value: 'name' },
        { text: 'ユーザーID', value: 'user_id' },
        { text: '権限', value: 'is_public' },
        { text: '操作', value: 'actions', sortable: false }
      ],
      usersObjectForModal: usersJsonData
    }
  },
  computed: {
    usersCount() {
      return this.users.length
    }
  },
  async asyncData(context) {
    const usersObject = await context.app.$api.Users.index()
    const users = usersObject.users
    return { users }
  }
}
</script>

<style scoped></style>
