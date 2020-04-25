<template>
  <div>
    <ReturnPageButtonContainer />
    <v-list id="dropItemBox" flat disabled>
      <DropItem :drop="dropData" />
    </v-list>
    <div>こっちにコメントを取得して貼り付けるコンポーネントを書く</div>
  </div>
</template>

<script>
import DropItem from '~/components/Bector/DropItem'
import ReturnPageButtonContainer from '~/components/general/ReturnPageButtonContainer'
export default {
  name: 'IdVue',
  layout: 'pc/Bector',
  components: {
    DropItem,
    ReturnPageButtonContainer
  },
  data() {
    return {
      id: this.$route.params.id,
      user_id: this.$route.params.user_id,
      drop: {}
    }
  },
  async asyncData({ route, app }) {
    const { id } = route.params
    const userId = route.params.user_id
    const res = await app.$api.show('drops', id)
    const dropData = res.res
    const resCode = res.resCode
    if (dropData.user.user_id !== userId) {
      console.warn('不一致')
    }
    return { dropData, resCode }
  }
}
</script>
