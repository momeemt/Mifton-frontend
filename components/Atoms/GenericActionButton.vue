<template>
  <v-btn
    @click="clickEvent"
    :disabled="unableUsingBtn"
    rounded
    class="genericActionButton white--text"
    color="#ec6d51"
    >{{ label }}</v-btn
  >
</template>

<style lang="scss" scope>
.genericActionButton {
  width: 200px;
}
</style>

<script>
export default {
  name: 'GenericActionButton',
  props: {
    label: {
      type: String,
      required: true
    },
    unableUsingBtn: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    clickEvent() {
      this.$emit('clickEvent')
    }
  }
}
</script>
