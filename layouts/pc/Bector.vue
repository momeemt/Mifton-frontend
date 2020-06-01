<template>
  <div id="app">
    <v-app>
      <TheHeader page-type="Bector" />
      <v-dialog
        :value="newDropFormDialog"
        @click:outside="switchNewDropFormDialog"
        width="700px"
      >
        <NewDropForm />
      </v-dialog>
      <v-dialog
        :value="newTopicFormDialog"
        @click:outside="switchNewTopicFormDialog"
        width="1000px"
      >
        <NewTopicForm />
      </v-dialog>
      <div id="container">
        <div id="leftContent">
          <div id="buttonsContainer">
            <div class="buttonWrapper">
              <v-btn
                id="drop-button"
                @click="switchNewDropFormDialog"
                class="ma-2 blue white--text darken-3 py-0"
                rounded
                depressed
              >
                ドロップする
              </v-btn>
            </div>
            <div class="buttonWrapper">
              <v-btn
                id="topic-button"
                @click="switchNewTopicFormDialog"
                class="ma-2 indigo white--text darken-3 py-0"
                rounded
                depressed
              >
                トピックを書く
              </v-btn>
            </div>
          </div>
          <BectorHyperLinkContainer />
        </div>
        <div id="middleContent">
          <nuxt />
        </div>
        <div id="rightContent">
          <NotificationContainer />
        </div>
      </div>
    </v-app>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import TheHeader from '~/components/Organisms/TheHeader'
import BectorHyperLinkContainer from '~/components/Organisms/BectorHyperLinkContainer'
import NotificationContainer from '~/components/Bector/NotificationContainer'
import NewDropForm from '~/components/Organisms/NewDropForm'
import NewTopicForm from '~/components/Bector/NewTopicForm'

export default {
  components: {
    TheHeader,
    BectorHyperLinkContainer,
    NotificationContainer,
    NewDropForm,
    NewTopicForm
  },
  computed: {
    ...mapGetters('dialog', ['newDropFormDialog', 'newTopicFormDialog'])
  },
  mounted() {
    setTimeout(() => {
      if (!this.$store.state.sessions.isLoggedIn) {
        this.$router.push('/bector')
      }
    }, 0)
  },
  methods: {
    ...mapMutations('dialog', [
      'switchNewDropFormDialog',
      'switchNewTopicFormDialog'
    ])
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100vw;
}
#container {
  display: flex;
}
#leftContent {
  width: 25%;
  position: sticky;
  top: 50px;
  height: calc(100vh - 50px);
  border-right: rgba(0, 0, 0, 0.12) solid 1px;
}
#middleContent {
  width: 50%;
}
#rightContent {
  width: 25%;
  position: sticky;
  top: 50px;
  height: calc(100vh - 50px);
  border-left: rgba(0, 0, 0, 0.12) solid 1px;
}
#buttonsContainer {
  margin-top: 40px;
}
.buttonWrapper {
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 10px;
}
#topic-button,
#drop-button {
  display: block;
  width: 75%;
  height: 40px;
}
</style>
