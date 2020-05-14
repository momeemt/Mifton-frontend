<template>
  <v-row>
    <v-col :cols="4">
      <p>{{ label }}</p>
    </v-col>
    <v-col :cols="8">
      <v-progress-linear
        :value="modelData"
        :color="`${color} darken-3`"
        height="25"
        reactive
      >
        <template v-slot="{ value }">
          <DisplayPercentage :value="value" />
        </template>
      </v-progress-linear>
    </v-col>
  </v-row>
</template>

<script>
import DisplayPercentage from '~/components/Atoms/DisplayPercentage'
export default {
  components: {
    DisplayPercentage
  },
  props: {
    modelData: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  }
}
</script>
