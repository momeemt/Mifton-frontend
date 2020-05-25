<template>
  <div class="expandNuxtLink">
    <i :class="iconClass"></i>
    <nuxt-link v-if="condition" :to="trueLink">{{ showContents }}</nuxt-link>
    <nuxt-link v-else :to="falseLink">{{ showContents }}</nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    iconClass: {
      type: String,
      required: true
    },
    condition: {
      type: Boolean,
      required: true
    },
    trueLink: {
      type: String,
      required: true
    },
    falseLink: {
      type: String,
      required: true
    },
    showContents: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.expandNuxtLink {
  display: flex;
  align-items: center;
  cursor: pointer;
  p {
    margin: 0;
  }
  a {
    text-decoration: none;
    color: white;
  }
  i {
    padding-right: 0.5em;
  }
}
</style>
