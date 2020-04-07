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
    <div class="group">
      <i class="fas fa-user-cog"></i>
      <nuxt-link to="/manages/dash">管理パネル</nuxt-link>
    </div>
    <div class="group" v-if="$store.getters.is_logged_in">
      <i class="fas fa-sign-out-alt"></i>
      <p @click="logout">ログアウト</p>
    </div>
    <div class="group" v-else>
      <i class="fas fa-sign-out-alt"></i>
      <nuxt-link to="/login">ログイン</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonHeader',
  props: ['pageType'],
  methods: {
    logout() {
      this.$store.commit('logout')
      this.$router.push('/')
    }
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
</style>
