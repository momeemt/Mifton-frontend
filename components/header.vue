<template>
  <div id="home-header">
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
      <p>開発者</p>
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
#home-header {
  height: 50px;
  background: #ec6d51;
  color: white;
  display: flex;
  justify-content: space-around;

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
