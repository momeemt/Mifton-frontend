<template>
  <div id="bectorHome">
    <div id="branchErrorContainer" v-if="checkExistsError()">
      <div class="displayErrorDetail">
        <p class="errorDetailTitle">
          エラーが発生しました
        </p>
        <p>
          大変申し訳ございません。よろしければ、サービス向上のため、エラーの解消にご協力ください。
        </p>
        <img src="../../assets/errorExplore2.gif" class="errorDetailImage" />
        <img src="../../assets/errorExplore2.gif" class="errorDetailImage" />
        <p>エラー詳細</p>
        <p>{{ displayReasonOfError() }}</p>
      </div>
    </div>
    <div v-else>
      <NewDropForm @add="addNewDrop" />
      <v-divider></v-divider>
      <v-bottom-navigation
        id="switchTimeline"
        :input-value="true"
        color="indigo"
        mandatory
        shift
      >
        <v-btn @click="switchTimeline = 'home'">
          <v-icon>fas fa-home</v-icon>
          <span>ホーム</span>
        </v-btn>
        <v-btn>
          <v-icon>fas fa-user-friends</v-icon>
          <span>相互</span>
        </v-btn>
        <v-btn @click="switchTimeline = 'drops'">
          <v-icon>fas fa-eye-dropper</v-icon>
          <span>ドロップ</span>
        </v-btn>
        <v-btn @click="switchTimeline = 'topics'">
          <v-icon>fas fa-newspaper</v-icon>
          <span>トピック</span>
        </v-btn>
        <v-btn>
          <v-icon>fas fa-globe</v-icon>
          <span>グローバル</span>
        </v-btn>
      </v-bottom-navigation>
      <DropsContainer :posts="getTimelineData()" />
    </div>
  </div>
</template>

<script>
// import ActionCable from 'actioncable'
import DropsContainer from '~/components/Bector/DropsContainer.vue'
import NewDropForm from '~/components/Bector/NewDropForm.vue'

// eslint-disable-next-line no-unused-vars
// const cable = ActionCable.createConsumer('ws:localhost:8080/cable')
// Vue.prototype.$cable = cable

export default {
  name: 'BectorHomePage',
  layout: 'pc/Bector',
  components: {
    DropsContainer,
    NewDropForm
  },
  data() {
    return {
      switchTimeline: 'home'
    }
  },
  async asyncData({ app }) {
    const res = await app.$api.index('posts')
    const postsData = res.res
    const resCode = res.resCode
    const dropsData = postsData.filter(function(post) {
      return post.type === 'drop'
    })
    const topicsData = postsData.filter(function(post) {
      return post.type === 'topic'
    })
    return { postsData, resCode, dropsData, topicsData }
  },
  mounted() {
    this.$nuxt.$on('addDrop', this.addNewDrop)
  },
  beforeDestroy() {
    this.$nuxt.$off('addDrop')
  },
  methods: {
    checkExistsError() {
      return this.resCode !== 200
    },
    displayReasonOfError() {
      const errorCode = this.resCode
      if (errorCode === 404) {
        return 'サーバーがダウンしている可能性があります。開発チームへご連絡ください。'
      } else {
        return 'なんらかの原因でエラーが発生しています。もう一度ページを更新したのち、再度この画面が表示されましたら、開発チームへご連絡ください。'
      }
    },
    addNewDrop(drop) {
      this.resData.unshift(drop)
    },
    getTimelineData() {
      const option = this.switchTimeline
      if (option === 'home') {
        return this.postsData
      } else if (option === 'drops') {
        return this.dropsData
      } else if (option === 'topics') {
        return this.topicsData
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#topicEditor {
  box-shadow: none !important;
}
#bectorHome,
#branchErrorContainer {
  height: 100%;
}
#switchTimeline {
  box-shadow: none !important;
  position: sticky;
  top: 50px;
  z-index: 2;
  border-bottom: rgba(0, 0, 0, 0.12) solid 1px;
}
.displayErrorDetail {
  text-align: center;
  display: block;
  height: 100%;
  padding-top: 5vh;
  .errorDetailTitle {
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-content: center;
    img {
      width: 8%;
      margin-right: 20px;
    }
  }
  .errorDetailImage {
    width: 20%;
  }
}
</style>
