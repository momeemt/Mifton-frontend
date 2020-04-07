<template>
  <div id="bector-header">
    <div class="group">
      <i class="fas fa-home"></i>
      <p>Mifton</p>
    </div>
    <div class="group">
      <i class="fas fa-user-friends"></i>
      <nuxt-link to="/bector">Bector</nuxt-link>
    </div>
    <div class="group">
      <i class="fab fa-twitter"></i>
      <a href="https://www.twitter.com/momeemt" target="_blank" rel="noopener"
        >開発者</a
      >
    </div>
    <div class="group">
      <i class="fas fa-user-cog"></i>
      <p>管理者</p>
    </div>
    <div class="group">
      <i class="fas fa-sign-out-alt"></i>
      <p>ログオフ</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#bector-header {
  height: 50px;
  background: linear-gradient(to left, #182848, #4b6cb7);
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
</style>
