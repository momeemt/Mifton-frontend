<template>
  <v-text-field
    :type="passwordShow ? 'text' : 'password'"
    :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
    @click:append="passwordShow = !passwordShow"
    v-model="innerPassword"
    :rules="rule"
    :hint="hint"
    :label="label"
    counter="20"
    color="#ec6d51"
    outlined
    rounded
    clearable
  ></v-text-field>
</template>

<script>
export default {
  props: {
    password: {
      type: String,
      required: true
    },
    rule: {
      type: Array,
      required: true
    },
    hint: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      passwordShow: false
    }
  },
  computed: {
    innerPassword: {
      get() {
        return this.$props.password
      },
      set(value) {
        this.$emit('setPassword', value)
      }
    }
  }
}
</script>
