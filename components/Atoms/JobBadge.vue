<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on }">
      <v-btn
        :ripple="false"
        :color="color"
        v-on="on"
        rounded
        outlined
        small
        class="jobBadge"
      >
        <v-icon x-small style="padding-right: 10px;">{{ iconClass }}</v-icon>
        {{ displayText }}
      </v-btn>
    </template>
    <span>{{ toolTipText }}</span>
  </v-tooltip>
</template>

<script>
export default {
  props: {
    displayText: {
      type: String,
      required: true
    },
    iconClass: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    toolTipText: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.jobBadge {
  margin: 4px 2px !important;
}
</style>
