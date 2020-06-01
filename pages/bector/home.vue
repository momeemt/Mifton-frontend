<template>
  <div id="bectorHome">
    <!--    <div id="branchErrorContainer" v-if="checkExistsError()">-->
    <!--      <div class="displayErrorDetail">-->
    <!--        <p class="errorDetailTitle">-->
    <!--          エラーが発生しました-->
    <!--        </p>-->
    <!--        <p>-->
    <!--          大変申し訳ございません。よろしければ、サービス向上のため、エラーの解消にご協力ください。-->
    <!--        </p>-->
    <!--        <img src="../../assets/errorExplore2.gif" class="errorDetailImage" />-->
    <!--        <img src="../../assets/errorExplore2.gif" class="errorDetailImage" />-->
    <!--        <p>エラー詳細</p>-->
    <!--        <p>{{ displayReasonOfError() }}</p>-->
    <!--      </div>-->
    <!--    </div>-->
    <NewDropForm />
    <v-divider></v-divider>
    <SwitchTimeLine />
    <DropsContainer />
  </div>
</template>

<script>
// import ActionCable from 'actioncable'
import DropsContainer from '~/components/Bector/DropsContainer'
import NewDropForm from '~/components/Organisms/NewDropForm'
import SwitchTimeLine from '~/components/Organisms/SwitchTimeLine'

// eslint-disable-next-line no-unused-vars
// const cable = ActionCable.createConsumer('ws:localhost:8080/cable')
// Vue.prototype.$cable = cable

export default {
  layout: 'pc/Bector',
  components: {
    DropsContainer,
    NewDropForm,
    SwitchTimeLine
  },
  head() {
    return {
      title: 'Bector'
    }
  },
  data() {
    return {
      switchTimeline: 'home',
      addPostCount: 0
    }
  },
  async asyncData({ store }) {
    await store.dispatch('bector/fetchPosts')
    await store.dispatch('bector/fetchDrops')
    await store.dispatch('bector/fetchTopics')
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
      this.postsData.unshift(drop)
      this.dropsData.unshift(drop)
      this.addPostCount += 1
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
