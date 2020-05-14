<template>
  <div>
    <div id="profileHeaderMenu">
      <h1>プロフィールを編集する</h1>
      <v-btn
        id="profileSaveButton"
        @click="saveProfile"
        rounded
        color="orange darken-3"
        class="white--text"
      >
        保存する
      </v-btn>
    </div>
    <div id="settingProfile">
      <v-file-input
        accept="image/png, image/jpeg, image/bmp"
        placeholder="ヘッダー画像をアップロードする"
        prepend-icon="mdi-camera"
        label="ヘッダー"
        outlined
      ></v-file-input>
      <v-file-input
        accept="image/png, image/jpeg, image/bmp"
        placeholder="アイコン画像をアップロードする"
        prepend-icon="mdi-camera"
        label="アイコン"
        outlined
      ></v-file-input>
      <v-text-field
        :value="user.name"
        @input="updateSetting($event, 'name')"
        outlined
        label="ニックネーム"
        placeholder="miftonちゃん"
      ></v-text-field>
      <v-textarea outlined label="プロフィール"></v-textarea>
      <v-text-field
        :value="optionalData.website"
        @input="updateOptionalDataSetting($event, 'website')"
        outlined
        label="ウェブサイト"
        placeholder="mifton.app"
      ></v-text-field>
      <v-text-field
        :value="optionalData.location"
        @input="updateOptionalDataSetting($event, 'location')"
        outlined
        label="場所"
        placeholder="Stockholm"
      ></v-text-field>
      <v-select
        :items="['相互フォローのみ', '全体公開', '非公開']"
        outlined
        label="年齢の公開範囲"
      ></v-select>
      <v-select
        :items="['相互フォローのみ', '全体公開', '非公開']"
        outlined
        label="誕生日の公開範囲"
      ></v-select>
      <v-text-field
        outlined
        label="TwitterID"
        placeholder="mifton_xyz"
      ></v-text-field>
      <v-text-field
        outlined
        label="LobiID"
        placeholder="982e201c4bd6cba1c4b7f75cc7bc9a97538c9179"
      ></v-text-field>
      <v-text-field
        outlined
        label="GithubID"
        placeholder="momeemt"
      ></v-text-field>
      <v-text-field
        outlined
        label="DiscordID"
        placeholder="367903485074735105"
      ></v-text-field>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: 'ProfileVue',
  layout: 'pc/general',
  data() {
    return {
      res: {}
    }
  },
  computed: {
    ...mapGetters('users', ['user', 'optionalData', 'job'])
  },
  asyncData({ store }) {
    const currentUser = store.state.sessions.currentUser
    store.dispatch('users/fetchUser', currentUser.id)
  },
  methods: {
    // TODO: エラーハンドリングを追加する
    saveProfile() {
      this.updateProfile()
    },
    updateSetting(event, settingKey) {
      this.updateUser(settingKey, event)
    },
    updateOptionalDataSetting(event, settingKey) {
      this.updateOptionalDataSetting(settingKey, event)
    },
    ...mapMutations('users', ['updateUser', 'updateOptionalUserDatum']),
    ...mapActions('users', ['updateProfile'])
  }
}
</script>

<style lang="scss" scoped>
#settingProfile {
  margin: 8vh 5vw;
}
#profileHeaderMenu {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: white;
  height: 10vh;
  position: sticky;
  top: 50px;
  z-index: 2;
  border-bottom: rgba(0, 0, 0, 0.12) solid 1px;
}
</style>
