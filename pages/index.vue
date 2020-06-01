<template>
  <div id="topPage">
    <TheHeader page-type="General" />
    <div id="topSection">
      <div id="topDescript">
        <p id="dsc_line1">Minecraftを</p>
        <p id="dsc_line2">もっと面白くもっと便利に</p>
        <p id="dsc_line3">Miftonは、従来のSNS・サービスよりも</p>
        <p id="dsc_line4">素敵な体験・交流を目指すために開発されました</p>
      </div>
      <LoginCard />
    </div>
    <div class="serviceCard">
      <v-card class="mx-auto" max-width="700">
        <v-img
          class="white--text align-end"
          height="200px"
          src="https://mifton.xyz/bector-top.jpg"
        >
          <v-card-title>Bector</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0">最適化されたSNS</v-card-subtitle>

        <v-card-text class="text--primary">
          <div>
            Miftonが提供するSNS「Bector」では、今までにないソーシャル体験を味わえます。
          </div>
          <div>
            投稿はもちろん、トピックを書いて技術を広めたり、日記を書いたり。
          </div>
          <div>
            様々なMinecraftメディアの情報をキャッチして、もっとMinecraftに詳しくなりましょう。
          </div>
        </v-card-text>

        <v-card-actions>
          <v-btn color="blue" text to="/bector" nuxt>
            Bectorをのぞいてみる
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
    <div class="serviceCard">
      <v-card class="mx-auto" max-width="700">
        <v-img class="white--text align-end" height="200px" src="iceland.png">
          <v-card-title>Qrafters</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0">疑問解決サービス</v-card-subtitle>

        <v-card-text class="text--primary">
          <div>
            疑問解決サービス「Qrafters」で、疑問を一気に解決しましょう。
          </div>
          <div>
            他のユーザーに質問したり、過去の質問からヒントを得たりすることができます。
          </div>
          <div>
            友達の疑問を解決して、ポイントで自分の作品を広告することも。
          </div>
        </v-card-text>

        <v-card-actions>
          <v-btn color="red" text>
            Qrafetrsをのぞいてみる
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
    <div class="serviceCard">
      <v-card class="mx-auto" max-width="700">
        <v-img
          class="white--text align-end"
          height="200px"
          src="https://mifton.xyz/crafes-top.jpg"
        >
          <v-card-title>Crafes!</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0">大会開催サービス</v-card-subtitle>

        <v-card-text class="text--primary">
          <div>
            技術を磨きたいときは、Minecraftの大会「Crafes!」に参加してみましょう。
          </div>
          <div>
            Crafes!は日本初の競技Minecraftのサービスです。
          </div>
          <div>
            結果に応じて付くレートが技術力の指標になります。
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn color="green" text to="/crafes">
            Crafesをのぞいてみる
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
    <div id="recommendSignup">
      <div id="recSignupContainer">
        <h2 class="text-center">
          Miftonは無料でご利用いただけます。今まで知らなかった新たな世界に飛び込みましょう。
        </h2>
        <v-form autocomplete="on">
          <v-row>
            <v-col>
              <p>ユーザーID</p>
              <v-text-field
                v-model="user.user_id"
                solo
                placeholder="希望するユーザーID"
              ></v-text-field>
            </v-col>
            <v-col>
              <p>ニックネーム</p>
              <v-text-field
                v-model="user.name"
                solo
                placeholder="ニックネームを決めましょう"
              >
              </v-text-field>
            </v-col>
            <v-col>
              <p>メールアドレス</p>
              <v-text-field
                v-model="user.email"
                solo
                placeholder="example@mifton.app"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <p>パスワード</p>
              <v-text-field
                v-model="user.password"
                solo
                type="password"
                placeholder="パスワードを決めましょう"
              ></v-text-field>
            </v-col>
            <v-col>
              <p>パスワード(確認)</p>
              <v-text-field
                v-model="user.password_confirmation"
                solo
                type="password"
                placeholder="もう一度チェック"
              ></v-text-field>
            </v-col>
          </v-row>
          <div class="text-center">
            <v-btn @click="registerUser" rounded width="70%">登録する</v-btn>
          </div>
          <small>
            登録する前に利用規約とプライバシーポリシーを読んでください。登録すると、これらに同意したとみなされます。
          </small>
        </v-form>
      </div>
    </div>
    <SubFooter />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '~/components/Organisms/TheHeader'
import TheFooter from '~/components/Organisms/TheFooter'
import SubFooter from '~/components/Organisms/SubFooter'
import LoginCard from '~/components/Organisms/LoginCard'

export default {
  components: {
    LoginCard,
    TheHeader,
    TheFooter,
    SubFooter
  },
  data() {
    return {
      user: {
        name: '',
        user_id: '',
        email: '',
        password: '',
        password_confirmation: ''
      }
    }
  },
  mounted() {
    setTimeout(() => {
      if (this.$store.state.sessions.isLoggedIn) {
        this.$router.push('/home')
      }
    }, 0)
  },
  methods: {
    registerUser() {
      this.$axios.$post('/api/v1/users', { user: this.user })
    }
  }
}
</script>

<style lang="scss" scoped>
.serviceCard {
  margin: 6em 0;
}
#recommendSignup {
  background: #0f2350;
  color: white;
  h2 {
    padding: 2em 0;
  }
  small {
    display: block;
    text-align: center;
    padding: 2em 0;
    margin-bottom: 0;
  }
  button {
    margin: 2em 0;
  }
  display: flex;
  justify-content: center;
}
#recSignupContainer {
  width: 80%;
}
#topPage {
  width: 100vw;
  height: 100%;
}
#topSection {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60vh;
  width: 100vw;
  background-size: cover;
  background-image: url('https://lh3.googleusercontent.com/7NAtPJO9juiPTmC4XV6ztGEuyOjIPSyoUScskQ6Zgauk4__ePelvfsDoHxSNZTkk7ZRqxWvEXfg2xy6IDiHlMd1UvuO3jAmrZwcDF5RkRpSzAznnuHYl37CXWB38S4EjnYV7FXsp-zuvBPrFpZSL6dPIFT4WnktBBdMGbvewQRNqXwHaadsXF1Iy9nh-kM9AumqOIMR3umT4nXq8_xA42TZrbC90l1Z-0xBSujUY9Eos9iuM6vRI9IIEfSVYyFxed6fw7nxDoP9eoh70ED53CwB7gYcULk2SsvbrAxjYwODfT2mXh4cgNizlf_ic0FpvzYe59AxufsYQbDs2z9IHCw95PDJ3arzJEhGn76JscurgIUcGT56Fg1JicHLo5ZOT8iNXfL6UcKZlMXvqpn32e2qN0kTGWqrQbS7Ma0JQU5_f-FlO8YTPnZbKJxNfhteEHIM_PqB5HXeeDRDpRImddo3EDmDw_QnKPTzmhyZhI4IyIK2BMPEsXKS6IjWCKbiqTtqUJgyU1Hn0gGkW_OXtu47bwyTzvj3ZK_eyqngLllAkWES59eB3UNAzhUaI5HfHQHKCHdGU_aCC1Qfco0D8CZwlD7RUpB7WvIlugSw7ck2f_5KDmibS5dCs0AO-Od2ltW1C99z-2iVBH0q4GL2ny5VddMYRMGWJU7msL9lNSzxctgEjn-i5FTbNss0=w1024-h300-no');

  p {
    color: white;
    line-height: 0.8;
  }

  #dsc_line1 {
    font-size: 5em;
  }

  #dsc_line2 {
    font-size: 36px;
  }

  #topDescript {
    padding-top: 18%;
  }
}
#loginCard {
  height: 85%;
  width: 50%;
}
</style>
