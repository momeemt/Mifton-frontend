<template>
  <div id="common-header" :class="pageType">
    <div class="group">
      <i class="fas fa-home"></i>
      <nuxt-link to="/">Mifton</nuxt-link>
    </div>
    <div class="group">
      <i class="fas fa-user-friends"></i>
      <nuxt-link to="/bector/home">Bector</nuxt-link>
    </div>
    <div class="group">
      <i class="fab fa-twitter"></i>
      <a href="https://www.twitter.com/momeemt" target="_blank" rel="noopener"
        >開発者</a
      >
    </div>
    <div v-if="isOperator()" class="group">
      <i class="fas fa-user-cog"></i>
      <nuxt-link to="/manages/dash">管理パネル</nuxt-link>
    </div>
    <div v-if="isLoggedIn" class="group">
      <i class="fas fa-sign-out-alt"></i>
      <p @click="logoutSubmit">ログアウト</p>
    </div>
    <div v-if="!isLoggedIn" class="group">
      <i class="fas fa-sign-in-alt"></i>
      <nuxt-link to="/login">ログイン</nuxt-link>
    </div>
    <div v-if="!isLoggedIn" class="group">
      <i class="fas fa-user-plus"></i>
      <nuxt-link to="/signup">登録する</nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Header',
  props: {
    pageType: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapGetters('sessions', ['currentUser', 'isLoggedIn'])
  },
  methods: {
    logoutSubmit() {
      this.logout(this.currentUser)
      this.$router.push('/')
    },
    isOperator() {
      if (!this.isLoggedIn) return
      const currentUser = this.currentUser
      const userJob = currentUser.user_job
      const admin = userJob.admin
      const operator = userJob.operator
      return admin || operator
    },
    ...mapActions('sessions', ['logout'])
  }
}
</script>

<style scoped lang="scss">
#common-header {
  height: 50px;
  color: white;
  display: flex;
  justify-content: space-around;
  position: sticky;
  top: 0;
  z-index: 2;

  p {
    margin: 0;
  }

  .group {
    display: flex;
    align-items: center;
    cursor: pointer;

    i {
      padding-right: 0.5em;
    }
  }

  a {
    text-decoration: none;
    color: white;
  }
}
.General {
  background: #ec6d51;
}
.Bector {
  background: linear-gradient(to left, #182848, #4b6cb7);
}
.Crafes {
  background: #2c4f54;
}
.Qrafters {
  background: #d7003a;
}
</style>
