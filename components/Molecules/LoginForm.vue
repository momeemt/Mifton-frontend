<template>
  <v-card-text>
    <v-alert v-show="unAuthorizedError" dense outlined type="error">
      メールアドレス認証が完了していません。メールボックスを確認してください。
    </v-alert>
    <v-alert v-show="unprocessableEntityError" dense outlined type="error">
      メールアドレスかパスワードが間違っています。もう一度確認してください。
    </v-alert>
    <GenericDatumInput
      :label="userIdLabel"
      :datum="user.user_id"
      @setDatum="setUserId"
    />
    <PasswordInput
      :label="passwordLabel"
      :password="user.password"
      @setPassword="setPassword"
    />
    <v-checkbox :label="rememberCheckLabel"></v-checkbox>
  </v-card-text>
</template>

<script>
import GenericDatumInput from '../Atoms/GenericDatumInput'
import PasswordInput from '../Atoms/PasswordInput'
export default {
  name: 'LoginForm',
  components: {
    PasswordInput,
    GenericDatumInput
  },
  data() {
    return {
      userIdLabel: 'ユーザーID',
      passwordLabel: 'パスワード',
      rememberCheckLabel: 'ログイン情報を保存する',
      user: {
        user_id: '',
        password: ''
      }
    }
  },
  methods: {
    setUserId(userID) {
      this.user.user_id = userID
      this.setUserData()
    },
    setPassword(password) {
      this.user.password = password
      this.setUserData()
    },
    setUserData() {
      this.$emit('setUserData', this.user)
    }
  }
}
</script>
