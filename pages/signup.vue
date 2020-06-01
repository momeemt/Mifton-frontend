<template>
  <div id="signUpPage">
    <TheHeader page-type="General" />
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
    <TheFooter />
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
import TheHeader from '~/components/Organisms/TheHeader'
import TheFooter from '~/components/Organisms/TheFooter'
import SignUpCard from '~/components/Organisms/SignUpCard'

export default {
  components: {
    TheFooter,
    TheHeader,
    SignUpCard
  },
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
  mounted() {
    setTimeout(() => {
      if (this.$store.state.sessions.isLoggedIn) {
        this.$router.push('/home')
      }
    }, 0)
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
