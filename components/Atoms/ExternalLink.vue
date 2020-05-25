<template>
  <div class="externalLink">
    <i :class="iconClass"></i>
    <a :href="href" target="_blank" rel="noopener">{{ showContents }}</a>
  </div>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true
    },
    showContents: {
      type: String,
      required: true
    },
    iconClass: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.externalLink {
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
