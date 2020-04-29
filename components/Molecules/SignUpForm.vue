<template>
  <v-card-text>
    <GenericDatumInput
      :label="userIdLabel"
      :hint="userIdHint"
      :datum="user.user_id"
      :rule="requireRule"
      @setDatum="setUserId"
    />
    <EmailInput
      :hint="emailHint"
      :email="user.email"
      :rule="emailRule"
      @setEmail="setEmail"
    />
    <GenericDatumInput
      :label="nicknameLabel"
      :hint="nicknameHint"
      :datum="user.name"
      @setDatum="setNickname"
    />
    <PasswordInput
      :label="passwordLabel"
      :hint="passwordHint"
      :password="user.password"
      @setPassword="setPassword"
    />
    <PasswordInput
      :label="passwordConfirmationLabel"
      :password="user.password_confirmation"
      @setPassword="setPasswordConfirmation"
    />
  </v-card-text>
</template>

<script>
import GenericDatumInput from '~/components/Atoms/GenericDatumInput'
import EmailInput from '~/components/Atoms/EmailInput'
import PasswordInput from '~/components/Atoms/PasswordInput'
export default {
  name: 'SignUpForm',
  components: {
    GenericDatumInput,
    EmailInput,
    PasswordInput
  },
  data() {
    return {
      userId: '',
      userIdLabel: 'ユーザーID',
      userIdHint:
        'これがあなたのユーザーIDになります。3文字以上、15文字以下で、英数字・ハイフンを使って構成してください。ただし、一文字目はアルファベットでなければなりません。',
      email: '',
      emailHint:
        'メールが受信できるメールアドレスを入力してください(受信設定で @mifton.app からのメールを許可してください)。プライバシーポリシーの通り、Miftonの運営チームがユーザーの許可なくメールアドレス情報を公開することはありません。',
      name: '',
      nicknameLabel: 'ニックネーム',
      nicknameHint:
        'これは他のユーザーがあなたを見たときに表示されるニックネームです。1文字以上、15文字以下で入力してください。',
      password: '',
      passwordLabel: 'パスワード',
      passwordHint:
        '少なくとも5文字以上、20文字以内で、アルファベット・数字を含むパスワードを入力してください。',
      passwordConfirmationLabel: 'パスワード(確認)',
      passwordConfirmation: '',
      requireRule: [(v) => v !== '' || '入力してください'],
      emailRule: [
        (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || '正しいメールアドレスを入力してください'
        }
      ],
      user: {
        user_id: '',
        email: '',
        name: '',
        password: '',
        password_confirmation: ''
      }
    }
  },
  methods: {
    setUserId(userID) {
      this.user.user_id = userID
      this.setUserData()
    },
    setEmail(email) {
      this.user.email = email
      this.setUserData()
    },
    setNickname(nickname) {
      this.user.name = nickname
      this.setUserData()
    },
    setPassword(password) {
      this.user.password = password
      this.setUserData()
    },
    setPasswordConfirmation(password) {
      this.user.password_confirmation = password
      this.setUserData()
    },
    setUserData() {
      this.$emit('setUserData', this.user)
    }
  }
}
</script>
