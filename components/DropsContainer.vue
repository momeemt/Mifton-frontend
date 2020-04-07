<template>
  <v-card id="dropContainer">
    <v-dialog v-model="is_dialog_show" width="500">
      <v-card>
        <v-card-title class="dialog_title"
          >ドロップを削除しますか？</v-card-title
        >
        <v-card-text>
          削除したドロップを元に戻すことはできません。あなたのアカウントや検索結果からこの投稿は除外されます。
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="is_dialog_show = false" color="gray darken-1" text>
            キャンセルする
          </v-btn>
          <v-btn
            @click="
              removeDrop(target_id)
              is_dialog_show = false
            "
            color="red darken-1"
            text
          >
            削除する
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-list-item
      v-for="drop in this.drops"
      :key="drop.id"
      class="dropsListItem"
      three-line
    >
      <div v-if="drop.icon !== null">
        <img src="/default_icon.png" />
      </div>
      <div v-else>
        {{ drop.icon }}
      </div>
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
          <v-list-item
            @click.stop="
              is_dialog_show = true
              target_id = drop.id
            "
          >
            <v-icon class="red--text">mdi-delete</v-icon>
            <v-list-item-title class="red--text">削除する</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-list-item>
  </v-card>
</template>

<style lang="scss" scoped>
img {
  border-radius: 50%;
  width: 45px;
  margin: 10px 20px 2px 2px;
  border: rgba(0, 0, 0, 0.12) solid 1px;
}
.dialog_title {
  font-weight: bold;
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
#dropContent {
  white-space: pre-line;
}
#dropContainer {
  box-shadow: none !important;
}
.dropsListItem {
  border-bottom: rgba(0, 0, 0, 0.12) solid 1px;
  padding: 0.5em 0.5em 0 0.5em;
  align-items: flex-start;
}
</style>

<script>
import momentTimezone from 'moment-timezone'
export default {
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
      is_dialog_show: false,
      target_id: -1
    }
  },
  methods: {
    removeDrop(id) {
      this.$axios
        .$delete(`/api/v1/drops/${id}`)
        .then((res) => {
          const drops = this.$parent.drops.filter((l) => l.id !== id)
          this.$parent.drops = drops
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>
