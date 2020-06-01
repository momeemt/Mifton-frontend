<template>
  <div id="footer">
    <p>2020 Mifton, Team.</p>
    <p><nuxt-link to="/term">利用規約</nuxt-link></p>
    <p><nuxt-link to="/policy">プライバシーポリシー</nuxt-link></p>
    <a href="https://www.twitter.com/mifton_xyz" target="_blank">
      <v-icon>fab fa-twitter</v-icon>
    </a>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
#footer {
  background: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 50px;
  p {
    margin-bottom: 0;
    font-size: 12px;
  }
  a {
    color: black;
    text-decoration: none;
  }
}
</style>
