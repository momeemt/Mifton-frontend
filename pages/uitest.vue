<template>
  <div id="flexBox">
    <v-data-table
      id="testcaseDataTable"
      :headers="headers"
      :items="testcases"
      show-select
      single-select="true"
    ></v-data-table>
    <v-select :items="[1, 2, 3, 4, 5]"></v-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: 'テストケース',
          align: 'start',
          value: 'name'
        },
        { text: 'set1', value: 'set1' },
        { text: 'set2', value: 'set2' }
      ],
      testcases: [
        { name: 'handcase1', set1: true, set2: false },
        { name: 'handcase2', set1: false, set2: true }
      ]
    }
  }
}
</script>

<style scoped>
#flexBox {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
#testcaseDataTable {
  width: 50%;
  box-shadow: none;
}
</style>
