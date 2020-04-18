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
      <DropItem :drop="drops[index - 1]" />
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

export default {
  name: 'DropsContainerVue',
  components: {
    RemoveDropConfirmDialog,
    DropItem
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
    drops: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      expectedRemovingDrop: {},
      showing_dialog: false,
      dropCount: 0
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
      // TODO: no-more のカスタマイズが反映されない理由を調べる

      setTimeout(() => {
        if (this.drops.length > this.dropCount) {
          this.dropCount += Math.min(10, this.drops.length - this.dropCount)
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
