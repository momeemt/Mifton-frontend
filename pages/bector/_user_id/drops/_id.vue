<template>
  <div>
    <ReturnPageContainer />
    <v-list id="dropItemBox" flat disabled>
      <DropItem :drop="drop" />
    </v-list>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import DropItem from '~/components/Bector/DropItem'
import ReturnPageContainer from '~/components/Organisms/ReturnPageContainer'
export default {
  layout: 'pc/Bector',
  components: {
    DropItem,
    ReturnPageContainer
  },
  head() {
    return {
      title: this.drop.user.name + 'さんのドロップ'
    }
  },
  computed: {
    ...mapGetters('bector', ['drop'])
  },
  async asyncData({ route, store }) {
    const { id } = route.params
    await store.dispatch('bector/fetchDrop', { payload: id })
  }
}
</script>
