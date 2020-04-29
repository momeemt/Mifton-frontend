<template>
  <v-text-field
    v-model="innerEmail"
    :rules="rule"
    :hint="hint"
    type="email"
    label="メールアドレス"
    color="#ec6d51"
    outlined
    rounded
    clearable
  ></v-text-field>
</template>

<script>
export default {
  name: 'EmailInput',
  props: {
    hint: {
      type: String,
      required: true
    },
    rule: {
      type: Array,
      required: true
    },
    email: {
      type: String,
      required: true
    }
  },
  computed: {
    innerEmail: {
      get() {
        return this.$props.email
      },
      set(value) {
        this.$emit('setEmail', value)
      }
    }
  }
}
</script>
