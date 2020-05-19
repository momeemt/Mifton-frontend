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
      <UserTextField
        model-key="user"
        model-property="name"
        label="ニックネーム"
        placeholder="miftonちゃん"
      />
      <UserTextArea
        model-key="optionalUserDatum"
        model-property="profile"
        label="プロフィール"
      />
      <UserTextField
        model-key="optionalUserDatum"
        model-property="website"
        label="ウェブサイト"
        placeholder="mifton.app"
      />
      <UserTextField
        model-key="optionalUserDatum"
        model-property="location"
        label="場所"
        placeholder="Stockholm"
      />
      <UserSelect
        :items="['相互フォローのみ', '全体公開', '非公開']"
        model-key="optionalUserDatum"
        model-property="publish_old"
        label="年齢の公開範囲"
      />
      <UserSelect
        :items="['相互フォローのみ', '全体公開', '非公開']"
        model-key="optionalUserDatum"
        model-property="publish_birthday"
        label="誕生日の公開範囲"
      />
      <UserTextField
        model-key="optionalUserDatum"
        model-property="twitter_id"
        label="TwitterID"
        placeholder="mifton_xyz"
      />
      <UserTextField
        model-key="optionalUserDatum"
        model-property="lobi_id"
        label="LobiID"
        placeholder="URLの末尾のIDを入力しましょう"
      />
      <UserTextField
        model-key="optionalUserDatum"
        model-property="github_id"
        label="GithubID"
        placeholder="momeemt"
      />
      <UserTextField
        model-key="optionalUserDatum"
        model-property="discord_id"
        label="DiscordID"
        placeholder="367903485074735105"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import UserTextField from '@/components/Atoms/UserTextField'
import UserTextArea from '@/components/Atoms/UserTextArea'
import UserSelect from '@/components/Atoms/UserSelect'
export default {
  name: 'ProfileVue',
  layout: 'pc/general',
  components: {
    UserTextField,
    UserTextArea,
    UserSelect
  },
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
    store.dispatch('users/fetchUser', { id: currentUser.id })
  },
  methods: {
    // TODO: エラーハンドリングを追加する
    saveProfile() {
      const userPayload = { user: this.user }
      this.updateProfile({ payload: userPayload })
      const optionalUserDatumPayload = {
        optionalUserDatum: this.optionalData
      }
      this.updateOptionalUserDatum({ payload: optionalUserDatumPayload })
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
