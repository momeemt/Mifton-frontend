<template>
  <v-list-item
    @click="toTopicDetailPage(topic.user.user_id, topic.id)"
    :ripple="false"
    class="topicItem"
  >
    <DisplayUserIcon :user="topic.user" />
    <v-list-item-content>
      <div class="topicDetailInfo">
        <p>{{ topic.user.name }}</p>
        <p>
          <span class="topicUserID">@{{ topic.user.user_id }}</span>
        </p>
        <p>
          <span class="topicCreatedAt">
            {{ topic.created_at | formatDateTime }}
          </span>
        </p>
        <v-chip color="indigo darken-3" class="ma-2 white--text" small
          >トピック</v-chip
        >
      </div>
      <p>{{ topic.title }}</p>
      <div v-html="$md.render(topic.content)" class="topicContent" />
      <div class="topicAction">
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
        <v-list-item @click.stop="openConfirmDialog(topic)">
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
  name: 'TopicItemVue',
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
    topic: {
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
    openConfirmDialog(topic) {
      this.showing_dialog = true
      // this.expectedRemovingTopic = topic
    },
    async toTopicDetailPage(userId, topicId) {
      await this.$router.push(`/bector/${userId}/topics/${topicId}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.topicItem {
  border-bottom: rgba(0, 0, 0, 0.12) solid 1px;
  &:hover {
    background-color: #f2f2f2;
  }
}
.topicDetailInfo {
  display: flex;
  p {
    font-weight: normal;
    margin-right: 1em;
  }
  .topicUserID,
  .topicCreatedAt {
    color: gray;
    font-size: small;
  }
}
.topicAction {
  margin-top: 10px;
  i {
    font-size: 18px !important;
  }
}
</style>
