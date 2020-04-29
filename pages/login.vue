<template>
  <div id="loginPage">
    <Header page-type="General" />
    <div id="loginCardContainer">
      <v-card id="loginCard" width="60%" height="60%">
        <v-card-title>ログイン</v-card-title>
        <v-card-content>
          <v-alert v-show="unAuthorizedError" dense outlined type="error">
            メールアドレス認証が完了していません。メールボックスを確認してください。
          </v-alert>
          <v-alert
            v-show="unprocessableEntityError"
            dense
            outlined
            type="error"
          >
            メールアドレスかパスワードが間違っています。もう一度確認してください。
          </v-alert>
          <v-text-field
            v-model="user_id"
            label="ユーザーID"
            outlined
            rounded
            clearable
            color="#ec6d51"
            class="userIDTextField"
          ></v-text-field>
          <v-text-field
            v-model="password"
            type="password"
            label="パスワード"
            rounded
            outlined
            clearable
            color="#ec6d51"
            class="passwordTextField"
          ></v-text-field>
          <v-checkbox label="ログイン情報を保存する"></v-checkbox>
        </v-card-content>
        <v-card-actions>
          <nuxt-link to="/signup">
            アカウントを作成
          </nuxt-link>
          <v-spacer></v-spacer>
          <v-btn
            @click="twitterLogin"
            rounded
            color="#00acee"
            class="twitterLoginBtn white--text"
          >
            <v-icon left>fab fa-twitter</v-icon>
            Twitterでログイン
          </v-btn>
          <v-btn
            @click="login"
            color="#ec6d51"
            class="loginBtn white--text"
            rounded
          >
            ログインする
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '~/components/layouts/Header'
import Footer from '~/components/layouts/Footer'

export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      user_id: '',
      password: '',
      unAuthorizedError: false,
      unprocessableEntityError: false
    }
  },
  methods: {
    async login() {
      this.unAuthorizedError = false
      this.unprocessableEntityError = false
      const res = await this.$api.create('sessions', {
        user_id: this.user_id,
        password: this.password
      })
      const resData = res.res
      const resCode = res.resCode
      if (resCode === 200) {
        this.$store.commit('login', resData)
        this.$router.push('/')
      } else if (resCode === 401) {
        // 認証なし
        this.unAuthorizedError = true
      } else {
        // 間違ってるよ
        this.unprocessableEntityError = true
      }
    },
    twitterLogin() {
      // twitter login する
      console.log('a')
    },
    logout() {
      this.$store.commit('logout')
    }
  }
}
</script>

<style lang="scss" scoped>
#loginCardContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 100px);

  #loginCard {
    padding: 2vh 2vw;
    border-radius: 20px;
  }
}
</style>
