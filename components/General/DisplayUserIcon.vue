<template>
  <div @click.stop="toUserProfilePage(user.user_id)">
    <div v-if="existUserIcon">
      <img src="/default_icon.png" alt="デフォルトアイコン" />
    </div>
    <div v-else>
      <img src="/default_icon.png" alt="デフォルトアイコン" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      existUserIcon: false // this.user.icon !== null
    }
  },
  methods: {
    async toUserProfilePage(userId) {
      await this.$router.push(`/bector/${userId}`)
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  border-radius: 50%;
  width: 45px;
  margin: 10px 20px 2px 2px;
  border: rgba(0, 0, 0, 0.12) solid 1px;
}
</style>
