<template>
  <div>
    <ReturnPageContainer />
    <v-list id="topicItemBox" flat disabled>
      <TopicItem :topic="topic" />
    </v-list>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ReturnPageContainer from '~/components/Organisms/ReturnPageContainer'
import TopicItem from '~/components/Bector/TopicItem'
export default {
  layout: 'pc/Bector',
  components: {
    TopicItem,
    ReturnPageContainer
  },
  head() {
    return {
      title: this.topic.user.name + 'さんのトピック'
    }
  },
  computed: {
    ...mapGetters('bector', ['topic'])
  },
  async asyncData({ route, store }) {
    const { id } = route.params
    // const userID = route.params.user_id
    await store.dispatch('bector/fetchTopic', { payload: id })
  }
}
</script>

<style scoped></style>
