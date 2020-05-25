<template>
  <div>
    <manage-data-table
      :modelJsonData="usersObjectForModal"
      :headers="headers"
      :modelObject="resData"
      model-name="お知らせ"
    />
  </div>
</template>

<script>
import ManageDataTable from '~/components/Manages/ManageDataTable'
import newsJsonData from '~/assets/json/modelObject/news.json'
export default {
  layout: 'pc/manage',
  components: {
    ManageDataTable
  },
  data() {
    return {
      headers: [
        { text: 'ID', value: 'id' },
        { text: 'タイトル', value: 'title' },
        { text: '内容', value: 'content' },
        { text: '操作', value: 'actions', sortable: false }
      ],
      usersObjectForModal: newsJsonData
    }
  },
  async asyncData({ app }) {
    const res = await app.$api.index('news')
    const resData = res.res
    const resCode = res.resCode
    return { resData, resCode }
  }
}
</script>

<style scoped></style>
