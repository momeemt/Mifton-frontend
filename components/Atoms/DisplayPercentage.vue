<template>
  <strong class="progressBarText">
    {{ displayPercentage(value) }}
  </strong>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    }
  },
  methods: {
    displayPercentage(value) {
      if (value === 0) {
        return '開発予定'
      } else if (value === 100) {
        return 'リリース完了！'
      } else if (value === 90) {
        return 'テスト中'
      } else {
        return value + '%'
      }
    }
  }
}
</script>

<style scoped>
.progressBarText {
  color: white;
}
</style>
