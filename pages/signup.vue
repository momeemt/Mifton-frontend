<template>
  <div id="signUpPage">
    <Header page-type="General" />
    <div id="signUpCardContainer">
      <SignUpCard />
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
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
#signUpCardContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 100px);
  #signUpCard {
    height: 85%;
    width: 60%;
  }
}
</style>
<script>
import Header from '~/components/Layouts/Header'
import Footer from '~/components/Layouts/Footer'
import SignUpCard from '~/components/Organisms/SignUpCard'
import homeRedirectLoggedUser from '~/middleware/homeRedirectLoggedUser'

export default {
  components: {
    Footer,
    Header,
    SignUpCard
  },
  middleware: homeRedirectLoggedUser,
  data() {
    return {
      new_user: {
        user_id: '',
        name: '',
        password: '',
        password_confirmation: '',
        email: ''
      }
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
        .catch((_) => {})
    }
  }
}
</script>
