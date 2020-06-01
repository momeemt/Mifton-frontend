<template>
  <v-card id="dropsContainer">
    <RemoveDropConfirmDialog
      @rmDrop="removeDrop"
      @cancelRemovingDrop="cancelRemovingDrop"
      :showing_dialog="false"
    />
    <v-list
      v-for="index in numOfDisplayPosts"
      :key="index"
      three-line
      class="dropsContainerList"
    >
      <div v-if="isExistPost(index)">
        <div v-if="displayPosts[index - 1].type === 'drop'">
          <DropItem :drop="displayPosts[index - 1]" />
        </div>
        <div v-else>
          <TopicItem :topic="displayPosts[index - 1]" />
        </div>
      </div>
    </v-list>
    <infinite-loading
      ref="infiniteLoading"
      @infinite="infiniteHandler"
      spinner="spiral"
    >
      <span slot="no-more">
        もう投稿が見つからないようです😭
      </span>
    </infinite-loading>
  </v-card>
</template>

<script>
import momentTimezone from 'moment-timezone'
import { mapGetters, mapMutations } from 'vuex'
import RemoveDropConfirmDialog from '~/components/Bector/RemoveDropConfirmDialog'
import DropItem from '~/components/Bector/DropItem'
import TopicItem from '~/components/Bector/TopicItem'

export default {
  components: {
    RemoveDropConfirmDialog,
    DropItem,
    TopicItem
  },
  filters: {
    moment(date) {
      date = momentTimezone(date).locale('ja')
      date = date.tz('Asia/Tokyo')
      date = date.fromNow()
      return date
    }
  },
  computed: {
    ...mapGetters('bector', [
      'displayPosts',
      'drops',
      'topics',
      'numOfDisplayPosts'
    ])
  },
  methods: {
    isExistPost(index) {
      return this.displayPosts[index - 1] != null
    },
    openConfirmDialog(drop) {
      this.showing_dialog = true
      this.expectedRemovingDrop = drop
    },
    removeDrop() {
      this.showing_dialog = false
      this.$api.delete('drops', this.expectedRemovingDrop)
    },
    cancelRemovingDrop() {
      this.showing_dialog = false
    },
    infiniteHandler($state) {
      setTimeout(() => {
        if (this.displayPosts.length > this.numOfDisplayPosts) {
          this.addNumOfDisplayPosts(
            Math.min(10, this.displayPosts.length - this.numOfDisplayPosts)
          )
          $state.loaded()
        } else {
          $state.complete()
        }
      }, 1000)
    },
    ...mapMutations('bector', ['addNumOfDisplayPosts'])
  }
}
</script>

<style lang="scss">
#dropContent {
  white-space: pre-line;
}
#dropsContainer {
  box-shadow: none !important;
}
.dropsListItem {
  border-bottom: rgba(0, 0, 0, 0.12) solid 1px;
  padding: 0.5em 0.5em 0 0.5em;
  align-items: flex-start;
}
.dropsContainerList {
  padding: 0 !important;
}
</style>
