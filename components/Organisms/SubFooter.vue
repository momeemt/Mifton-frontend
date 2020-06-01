<template>
  <div id="SubFooter">
    <p>Mifton</p>
    <div>
      <p>サービス</p>
      <ul>
        <li><nuxt-link to="/bector">Bector</nuxt-link></li>
        <li><nuxt-link to="/crafes">Crafes!</nuxt-link></li>
        <li><nuxt-link to="/qrafters">Qrafters</nuxt-link></li>
      </ul>
    </div>
    <div>
      <p>サポート</p>
      <ul>
        <li>ヘルプ</li>
        <li>よくある質問</li>
      </ul>
    </div>
    <div>
      <p>運営チーム</p>
      <ul>
        <li>運営者について</li>
        <li>管理者</li>
        <li>スタッフ</li>
        <li><nuxt-link to="/join">採用情報</nuxt-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubFooterVue'
}
</script>

<style lang="scss" scoped>
#SubFooter {
  display: flex;
  justify-content: space-around;
  padding: 5em 2em;

  a {
    text-decoration: none;
    color: black;
  }
}
</style>
<template>
  <div id="subFooter">
    <p>Mifton</p>
    <div>
      <p>サービス</p>
      <ul>
        <li><nuxt-link to="/bector">Bector</nuxt-link></li>
        <li><nuxt-link to="/crafes">Crafes!</nuxt-link></li>
        <li><nuxt-link to="/qrafters">Qrafters</nuxt-link></li>
      </ul>
    </div>
    <div>
      <p>サポート</p>
      <ul>
        <li>ヘルプ</li>
        <li>よくある質問</li>
      </ul>
    </div>
    <div>
      <p>運営チーム</p>
      <ul>
        <li>運営者について</li>
        <li>管理者</li>
        <li>スタッフ</li>
        <li><nuxt-link to="/join">採用情報</nuxt-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
#subFooter {
  display: flex;
  justify-content: space-around;
  padding: 5em 2em;

  a {
    text-decoration: none;
    color: black;
  }
}
</style>
