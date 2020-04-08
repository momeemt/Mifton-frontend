<template>
  <div>
    <div v-if="existUserIcon">
      {{ user.icon }}
    </div>
    <div v-else>
      <img src="/default_icon.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DisplayUserIconVue',
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      existUserIcon: this.user.icon !== null
    }
  }
}
</script>
