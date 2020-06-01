<template>
  <div @click.stop="toUserProfilePage(user.user_id)">
    <img
      v-if="user.icon_link != null"
      :src="user.icon_link"
      :alt="`custom ${user.id}'s icon`"
      class="userIcon"
    />
    <img v-else class="userIcon" src="/default_icon.png" alt="default icon" />
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
  methods: {
    async toUserProfilePage(userID) {
      await this.$router.push(`/bector/${userID}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.userIcon {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin: 10px;
}
</style>
