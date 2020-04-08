<template>
  <div id="home">
    <Header pageType="General" />
    <div id="signup">
      <h1>Miftonの世界に飛び込もう</h1>
      <p>
        全く新しいコミュニティ、ツール、有用な情報、それらを探し、自ら産み出そう
      </p>
      <h2>あなたのアカウントを作成しましょう</h2>
      <v-text-field
        outlined
        v-model="new_user.user_id"
        label="ユーザーID"
        hint="これがあなたのユーザーIDになります。3文字以上、15文字以下で、英数字・ハイフンを使って構成してください。ただし、一文字目はアルファベットでなければなりません。"
        clearable
        counter="15"
        color="gray"
        :rules="rule_require"
      ></v-text-field>
      <v-text-field
        outlined
        type="email"
        label="メールアドレス"
        hint="メールが受信できるメールアドレスを入力してください(受信設定で @mifton.xyz からのメールを許可してください)。プライバシーポリシーの通り、Miftonの運営チームがユーザーの許可なくメールアドレス情報を公開することはありません。"
        clearable
        color="gray"
        v-model="new_user.email"
        :rules="rule_email"
      ></v-text-field>
      <v-text-field
        outlined
        label="ニックネーム"
        hint="これは他のユーザーがあなたを見たときに表示されるニックネームです。1文字以上、15文字以下で入力してください。"
        clearable
        color="gray"
        counter="15"
        v-model="new_user.name"
        :rules="rule_require"
      ></v-text-field>
      <v-text-field
        :type="password_show ? 'text' : 'password'"
        :append-icon="password_show ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="password_show = !password_show"
        v-model="new_user.password"
        outlined
        label="パスワード"
        hint="少なくとも5文字以上、20文字以内で、アルファベット・数字を含むパスワードを入力してください。"
        clearable
        color="gray"
        counter="20"
        :rules="rule_require"
      ></v-text-field>
      <v-text-field
        :type="password_confirm_show ? 'text' : 'password'"
        :append-icon="password_confirm_show ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="password_confirm_show = !password_confirm_show"
        v-model="new_user.password_confirmation"
        outlined
        label="パスワード(確認)"
        clearable
        color="gray"
        counter="20"
        :rules="rule_require"
      ></v-text-field>
      <v-btn
        rounded
        class="white--text"
        color="rgb(236,109,81)"
        x-large
        @click="policy_show = true"
        >登録する</v-btn
      >
    </div>
    <v-dialog v-model="policy_show" persistent width="500">
      <v-card>
        <v-card-title class="dialog_title">利用規約</v-card-title>
        <v-card-text>
          利用規約
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="policy_show = false" color="gray darken-1" text>
            キャンセルする
          </v-btn>
          <v-btn
            @click="
              policy_show = false
              addUser()
            "
            color="green darken-1"
            text
          >
            承認する
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<style lang="scss" scoped>
#signup {
  width: 50%;
  margin: 0 auto;
}
</style>
<script>
import Header from '~/components/layouts/Header'

export default {
  components: {
    Header
  },
  data() {
    return {
      new_user: {
        user_id: '',
        name: '',
        password: '',
        password_confirmation: '',
        email: ''
      },
      password_show: false,
      password_confirm_show: false,
      policy_show: false,
      rule_require: [(v) => v !== '' || '入力してください'],
      rule_email: [
        (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || '正しいメールアドレスを入力してください'
        }
      ]
    }
  },
  methods: {
    addUser() {
      this.$axios
        .$post('/api/v1/users', {
          user_id: this.new_user.user_id,
          name: this.new_user.name,
          password: this.new_user.password,
          password_confirmation: this.new_user.password_confirmation,
          email: this.new_user.email
        })
        .then((res) => {
          this.$router.push('/')
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>
