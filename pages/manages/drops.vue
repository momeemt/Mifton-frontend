<template>
  <div>
    <manage-data-table
      :modelJsonData="dropsObjectForModal"
      :headers="headers"
      :modelObject="resData"
      model-name="ドロップ"
    />
  </div>
</template>

<script>
import ManageDataTable from '../../components/Manages/ManageDataTable'
import dropsJsonData from '~/assets/json/modelObject/drops.json'
export default {
  layout: 'pc/manage',
  components: {
    ManageDataTable
  },
  data() {
    return {
      headers: [
        { text: 'ユーザー名', value: 'user.name' },
        { text: '内容', value: 'content' },
        { text: '時刻', value: 'created_at' },
        { text: '操作', value: 'actions', sortable: false }
      ],
      dropsObjectForModal: dropsJsonData
    }
  },
  async asyncData({ app }) {
    const res = await app.$api.index('drops')
    const resData = res.res
    const resCode = res.resCode
    return { resData, resCode }
  }
}
</script>

<style scoped></style>
