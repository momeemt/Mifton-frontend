<template>
  <div>
    <v-dialog
      :value="manageTableDeleteDialog"
      @click:outside="switchManageTableDeleteDialog"
    >
      <v-card>
        <v-card-title>ユーザーを削除してよろしいですか？</v-card-title>
        <v-card-actions>
          <v-btn @click="switchManageTableDeleteDialog">キャンセルする</v-btn>
          <v-btn @click="deleteUser({ payload: saveUser })">削除する</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <manage-data-table
      @delete="openDeleteUserDialog"
      :modelJsonData="usersObjectForModal"
      :headers="headers"
      :modelObject="users"
      model-name="ユーザー"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import manageDataTable from '~/components/Manages/ManageDataTable'
import usersJsonData from '~/assets/json/modelObject/users.json'
export default {
  layout: 'pc/manage',
  components: {
    manageDataTable
  },
  data() {
    return {
      headers: [
        { text: 'ユーザー名', value: 'name' },
        { text: 'ユーザーID', value: 'user_id' },
        { text: '権限', value: 'is_public' },
        { text: '操作', value: 'actions', sortable: false }
      ],
      usersObjectForModal: usersJsonData,
      saveUser: {}
    }
  },
  computed: {
    ...mapGetters('users', ['users']),
    ...mapGetters('dialog', ['manageTableDeleteDialog'])
  },
  async asyncData({ store }) {
    await store.dispatch('users/fetchUsers')
  },
  methods: {
    openDeleteUserDialog(item) {
      this.switchManageTableDeleteDialog()
      this.saveUser = item
    },
    ...mapActions('users', ['deleteUser']),
    ...mapMutations('dialog', ['switchManageTableDeleteDialog'])
  }
}
</script>
