<template>
  <v-text-field
    v-model="innerDatum"
    :hint="hint"
    :rules="rule"
    :label="label"
    counter="15"
    color="#ec6d51"
    outlined
    rounded
    clearable
  ></v-text-field>
</template>

<script>
export default {
  props: {
    hint: {
      type: String,
      required: true
    },
    rule: {
      type: Array,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    datum: {
      type: String,
      required: true
    }
  },
  computed: {
    innerDatum: {
      get() {
        return this.$props.datum
      },
      set(value) {
        this.$emit('setDatum', value)
      }
    }
  }
}
</script>
