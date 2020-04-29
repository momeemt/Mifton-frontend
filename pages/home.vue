<template>
  <div id="flex">
    <v-overlay v-show="showOverlay">
      <v-stepper>
        <v-stepper-header>
          <v-stepper-step :complete="e1 > 1" color="orange darken-3" step="1">
            ようこそ！
          </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step :complete="e1 > 2" step="2">
            Name of step 2
          </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="3">Name of step 3</v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
            <p>Miftonへようこそ！</p>
            <p>これからMiftonの使い方を簡単にご紹介します。</p>
            <v-card class="mb-12" color="grey lighten-1" height="200px">
            </v-card>
            <v-btn @click="e1 = 2" color="orange darken-3">
              Continue
            </v-btn>

            <v-btn @click="showOverlay = false" text>閉じる（開発用）</v-btn>
          </v-stepper-content>

          <v-stepper-content step="2">
            <v-card
              class="mb-12"
              color="grey lighten-1"
              height="200px"
            ></v-card>

            <v-btn @click="e1 = 3" color="primary">
              Continue
            </v-btn>

            <v-btn text>Cancel</v-btn>
          </v-stepper-content>

          <v-stepper-content step="3">
            <v-card
              class="mb-12"
              color="grey lighten-1"
              height="200px"
            ></v-card>

            <v-btn @click="e1 = 1" color="primary">
              Continue
            </v-btn>

            <v-btn text>Cancel</v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-overlay>
    <div>
      yay
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  layout: 'pc/general',
  middleware({ store, redirect }) {
    if (!store.getters.is_logged_in) {
      return redirect('/')
    }
  },
  data() {
    return {
      showOverlay: true
    }
  }
}
</script>

<style lang="scss" scoped>
#flex {
  display: flex;
}
</style>
