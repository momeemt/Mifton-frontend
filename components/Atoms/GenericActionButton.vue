<template>
  <v-btn @click="clickEvent" rounded class="white--text" color="#ec6d51">{{
    label
  }}</v-btn>
</template>

<script>
export default {
  name: 'GenericActionButton',
  props: {
    label: {
      type: String,
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
