<template>
  <div>
    <div>
      <v-btn @click="returnPage" icon>
        <v-icon>fas fa-arrow-left</v-icon>
      </v-btn>
      <span>戻る</span>
    </div>
    <v-list id="dropItemBox" flat disabled>
      <DropItem :drop="drop" />
    </v-list>
    <div>こっちにコメントを取得して貼り付けるコンポーネントを書く</div>
  </div>
</template>

<script>
import DropItem from '~/components/bector/DropItem'
export default {
  name: 'IdVue',
  layout: 'pc/Bector',
  components: {
    DropItem
  },
  data() {
    return {
      id: this.$route.params.id,
      user_id: this.$route.params.user_id,
      drop: {}
    }
  },
  methods: {
    returnPage() {
      this.$router.go(-1)
    }
  },
  async asyncData({ route, app }) {
    const { id } = route.params
    // eslint-disable-next-line camelcase
    // const { user_id } = route.params
    const dropObject = await app.$api.Drops.show(id)
    const drop = dropObject.drop
    // eslint-disable-next-line camelcase
    // if (drop.user_id !== user_id) {
    //   return app.$nuxt.error({
    //     statusCode: 400,
    //     message: 'not exist'
    //   })
    // }
    return { drop }
  }
}
</script>

<style scoped>
#dropItemBox {
  border-top: rgba(0, 0, 0, 0.12) solid 1px;
  border-bottom: rgba(0, 0, 0, 0.12) solid 1px;
}
</style>
