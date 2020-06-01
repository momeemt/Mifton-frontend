<template>
  <v-list-item
    @click="toDropDetailPage(drop.user.user_id, drop.id)"
    :ripple="false"
    class="dropItem"
  >
    <UserIcon :user="drop.user" />
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
      <!--      <DropAction />-->
    </v-list-item-content>
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" color="gray" icon>
          <v-icon>mdi-chevron-down</v-icon>
        </v-btn>
      </template>
      <v-list width="150">
        <v-list-item @click.stop="openConfirmDialog(drop)">
          <v-icon>mdi-delete</v-icon>
          <v-list-item-title>編集する</v-list-item-title>
        </v-list-item>
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
import UserIcon from '~/components/Atoms/UserIcon'
// import DropAction from '~/components/Molecules/DropAction'
export default {
  components: {
    UserIcon
    // DropAction
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
