<template>
  <div id="HyperLinkContainer">
    <div id="HyperLinkWrapper">
      <v-list rounded>
        <v-list-item-group :color="selectListColor()" mandatory>
          <v-list-item
            v-for="(data, index) in listData"
            :key="index"
            :to="data.link"
            nuxt
          >
            <v-list-item-icon>
              <v-icon v-text="data.icon" :color="selectIconColor()"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="data.text"> </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#HyperLinkContainer {
  width: 100%;
  display: flex;
  justify-content: center;
}
#HyperLinkWrapper {
  margin-top: 4vh;
  width: 80%;

  i {
    width: 30px !important;
  }
}
.linkItem {
  display: flex;
}
</style>

<script>
export default {
  props: {
    pageType: {
      type: String,
      required: true
    },
    listData: {
      type: Array,
      required: true
    }
  },
  methods: {
    selectListColor() {
      if (this.pageType === 'Bector') {
        return 'indigo'
      } else {
        return 'orange'
      }
    },
    selectIconColor() {
      if (this.pageType === 'Bector') {
        return 'indigo darken-3'
      } else {
        return 'orange darken-3'
      }
    }
  }
}
</script>
