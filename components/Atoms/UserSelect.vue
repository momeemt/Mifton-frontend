<template>
  <div>
    <v-select
      v-model="selectValue"
      :items="items"
      :label="label"
      rounded
      outlined
      color="#EC6D51"
    ></v-select>
    {{ selectValue }}
  </div>
</template>

<script>
export default {
  props: {
    modelKey: {
      type: String,
      required: true
    },
    modelProperty: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      selectValue: ''
    }
  },
  computed: {
    model: {
      get() {
        return this.$store.state.users[this.modelKey][this.modelProperty]
      },
      set(value) {
        const modelKey = this.modelKey
        const modelProperty = this.modelProperty
        const payload = { value, key: modelProperty }
        if (modelKey === 'user') {
          this.$store.commit('users/updateUser', { payload })
        } else if (modelKey === 'optionalUserDatum') {
          this.$store.commit('users/updateOptionalUserDatum', { payload })
        } else if (modelKey === 'job') {
          this.$store.commit('users/updateJob', { payload })
        }
      }
    }
  }
}
</script>

<style scoped></style>
