<template>
  <v-card id="dropsContainer">
    <RemoveDropConfirmDialog
      @rmDrop="removeDrop"
      @cancelRemovingDrop="cancelRemovingDrop"
      :showing_dialog="showing_dialog"
    />
    <v-list v-for="drop in drops" :key="drop.id" three-line>
      <DropItem :drop="drop" />
    </v-list>
  </v-card>
</template>

<script>
import momentTimezone from 'moment-timezone'
import RemoveDropConfirmDialog from '~/components/bector/RemoveDropConfirmDialog'
import DropItem from '~/components/bector/DropItem'

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
      showing_dialog: false
    }
  },
  methods: {
    openConfirmDialog(drop) {
      this.showing_dialog = true
      this.expectedRemovingDrop = drop
    },
    removeDrop() {
      this.showing_dialog = false
      this.$api.Drops.delete(this.expectedRemovingDrop)
    },
    cancelRemovingDrop() {
      this.showing_dialog = false
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
</style>
