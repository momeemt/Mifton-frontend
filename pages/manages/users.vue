<template>
  <div>
    <manage-data-table
      :modelJsonData="usersObjectForModal"
      :headers="headers"
      :modelObject="users"
      model-name="ユーザー"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import manageDataTable from '~/components/Manages/ManageDataTable'
import usersJsonData from '~/assets/json/modelObject/users.json'
export default {
  name: 'Users',
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
      usersObjectForModal: usersJsonData
    }
  },
  computed: {
    ...mapGetters('users', ['users'])
  },
  async asyncData({ store }) {
    await store.dispatch('users/fetchUsers')
  }
}
</script>
