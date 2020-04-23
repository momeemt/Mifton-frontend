<template>
  <v-card id="dropsContainer">
    <RemoveDropConfirmDialog
      @rmDrop="removeDrop"
      @cancelRemovingDrop="cancelRemovingDrop"
      :showing_dialog="showing_dialog"
    />
    <v-list
      v-for="index in dropCount"
      :key="index"
      three-line
      class="dropsContainerList"
    >
      <div v-if="posts[index - 1].type === 'drop'">
        <DropItem :drop="posts[index - 1]" />
      </div>
      <div v-else>
        <TopicItem :topic="posts[index - 1]" />
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
import RemoveDropConfirmDialog from '~/components/Bector/RemoveDropConfirmDialog'
import DropItem from '~/components/Bector/DropItem'
import TopicItem from '~/components/Bector/TopicItem'

export default {
  name: 'DropsContainerVue',
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
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      expectedRemovingDrop: {},
      showing_dialog: false,
      dropCount: Math.min(20, this.posts.length)
    }
  },
  methods: {
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
        if (this.posts.length > this.dropCount) {
          this.dropCount += Math.min(10, this.posts.length - this.dropCount)
          $state.loaded()
        } else {
          $state.complete()
        }
      }, 1000)
    }
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
