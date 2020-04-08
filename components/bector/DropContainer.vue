<template>
  <v-card id="dropContainer">
    <RemoveDropConfirmDialog @rmDrop="removeDrop" />
    <v-list-item v-for="drop in drops" :key="drop.id" three-line>
      <DisplayUserIcon :user="drops.user" />
      <v-list-item-content>
        <div class="dropDetailInfo">
          <p>{{ drop.user.name }}</p>
          <p>
            <span class="dropUserID">@{{ drop.user.user_id }}</span>
          </p>
          <p>
            <span class="dropCreatedAt">{{ drop.created_at | moment }}</span>
          </p>
        </div>
        <p class="dropContent">{{ drop.content }}</p>
        <div class="dropAction">
          <v-btn class="mx-2" icon dark small color="grey lighten-1"
            ><v-icon>mdi-reply</v-icon></v-btn
          >
          <v-btn class="mx-2" icon dark small color="grey lighten-1"
            ><v-icon>mdi-face</v-icon></v-btn
          >
          <v-btn class="mx-2" icon dark small color="grey lighten-1"
            ><v-icon>fas fa-retweet</v-icon></v-btn
          >
        </div>
      </v-list-item-content>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" color="gray" icon>
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list width="150">
          <v-list-item @click.stop="openConfirmDialog(drop.id)">
            <v-icon class="red--text">mdi-delete</v-icon>
            <v-list-item-title class="red--text">削除する</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-list-item>
  </v-card>
</template>

<script>
import momentTimezone from 'moment-timezone'
import RemoveDropConfirmDialog from '~/components/bector/RemoveDropConfirmDialog'
import DisplayUserIcon from '~/components/general/DisplayUserIcon'

export default {
  name: 'DropContainerVue',
  components: {
    RemoveDropConfirmDialog,
    DisplayUserIcon
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
      expectedRemovingDropID: -1
    }
  },
  methods: {
    openConfirmDialog(dropID) {
      this.$refs.showing_dialog = true
      this.expectedRemovingDropID = dropID
    },
    removeDrop() {
      // Todo: ドロップを削除できるようにする
      // this.$api.Drops.delete(this.expectedRemovingDropID)
    }
  }
}
</script>
