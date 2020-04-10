<template>
  <v-list-item
    @click="toDropDetailPage(drop.user.user_id, drop.id)"
    :ripple="false"
    class="dropItem"
  >
    <DisplayUserIcon :user="drop.user" />
    <v-list-item-content>
      <div class="dropDetailInfo">
        <p>{{ drop.user.name }}</p>
        <p>
          <span class="dropUserID">@{{ drop.user.user_id }}</span>
        </p>
        <p>
          <span class="dropCreatedAt">
            {{ drop.created_at | formatDateTime }}
          </span>
        </p>
      </div>
      <p class="dropContent">{{ drop.content }}</p>
      <div class="dropAction">
        <v-btn
          @click.stop=""
          class="mx-2"
          icon
          dark
          small
          color="grey lighten-1"
          ><v-icon>mdi-reply</v-icon></v-btn
        >
        <v-btn
          @click.stop=""
          class="mx-2"
          icon
          dark
          small
          color="grey lighten-1"
          ><v-icon>mdi-face</v-icon></v-btn
        >
        <v-btn
          @click.stop=""
          class="mx-2"
          icon
          dark
          small
          color="grey lighten-1"
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
        <v-list-item @click.stop="openConfirmDialog(drop)">
          <v-icon class="red--text">mdi-delete</v-icon>
          <v-list-item-title class="red--text">削除する</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-list-item>
</template>

<script>
import momentTimezone from 'moment-timezone'
import DisplayUserIcon from '~/components/general/DisplayUserIcon'
export default {
  name: 'DropItemVue',
  components: {
    DisplayUserIcon
  },
  filters: {
    formatDateTime(datetime) {
      return momentTimezone(datetime)
        .locale('ja')
        .tz('Asia/Tokyo')
        .fromNow()
    }
  },
  props: {
    drop: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showing_dialog: false
    }
  },
  methods: {
    openConfirmDialog(drop) {
      this.showing_dialog = true
      // this.expectedRemovingDrop = drop
    },
    async toDropDetailPage(userId, dropId) {
      await this.$router.push(`/bector/${userId}/drops/${dropId}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.dropItem {
  border-bottom: rgba(0, 0, 0, 0.12) solid 1px;
  &:hover {
    background-color: #f2f2f2;
  }
}
.dropDetailInfo {
  display: flex;
  p {
    font-weight: normal;
    margin-right: 1em;
  }
  .dropUserID,
  .dropCreatedAt {
    color: gray;
    font-size: small;
  }
}
.dropAction {
  margin-top: 10px;
  i {
    font-size: 18px !important;
  }
}
</style>
