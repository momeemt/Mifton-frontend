<template>
  <div>
    <manage-data-table
      :modelJsonData="convenienceLinksObjectForModal"
      :headers="headers"
      :modelObject="resData"
      model-name="便利リンク"
    />
  </div>
</template>

<script>
import convenienceLinkJsonData from '~/assets/json/modelobject/convenience_links.json'
import ManageDataTable from '~/components/Manages/ManageDataTable'
export default {
  name: 'ConvenienceLinksVue',
  layout: 'pc/manage',
  components: {
    ManageDataTable
  },
  data() {
    return {
      headers: [
        { text: 'リンク名', value: 'name' },
        { text: '公開中', value: 'is_public' },
        { text: 'ユーザーID', value: 'user_id' },
        { text: '操作', value: 'actions', sortable: false }
      ],
      convenienceLinksObjectForModal: convenienceLinkJsonData
    }
  },
  async asyncData({ app }) {
    const res = await app.$api.index('convenience_links')
    const resData = res.res
    const resCode = res.resCode
    return { resData, resCode }
  }
}
</script>

<style scoped></style>
