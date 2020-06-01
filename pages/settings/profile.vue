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
      <UserImgUploader
        model-property="header"
        label="ヘッダー"
        placeholder="ヘッダー画像をアップロードする"
      />
      <UserImgUploader
        model-property="icon"
        label="アイコン"
        placeholder="アイコンをアップロードする(アイコンは自動保存されます)"
      />
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
import UserTextField from '~/components/Atoms/UserTextField'
import UserTextArea from '~/components/Atoms/UserTextArea'
import UserSelect from '~/components/Atoms/UserSelect'
import UserImgUploader from '~/components/Atoms/UserImgUploader'
export default {
  layout: 'pc/general',
  components: {
    UserTextField,
    UserTextArea,
    UserSelect,
    UserImgUploader
  },
  head() {
    return {
      title: 'プロフィールを編集'
    }
  },
  data() {
    return {
      res: {}
    }
  },
  computed: {
    ...mapGetters('users', ['user', 'optionalUserDatum', 'job'])
  },
  mounted() {
    setTimeout(() => {
      const currentUser = this.$store.state.sessions.currentUser
      this.$store.dispatch('users/fetchUser', { id: currentUser.id })
    }, 0)
  },
  methods: {
    saveProfile() {
      const userPayload = { user: this.user }
      this.updateProfile({ payload: userPayload })
      const optionalUserDatumPayload = {
        optionalUserDatum: this.optionalUserDatum
      }
      this.updateOptionalDatum({ payload: optionalUserDatumPayload })
    },
    updateSetting(event, settingKey) {
      this.updateUser(settingKey, event)
    },
    updateOptionalUserDatumSetting(event, settingKey) {
      this.updateOptionalUserDatum(settingKey, event)
    },
    ...mapMutations('users', ['updateUser', 'updateOptionalUserDatum']),
    ...mapActions('users', ['updateProfile', 'updateOptionalDatum'])
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
