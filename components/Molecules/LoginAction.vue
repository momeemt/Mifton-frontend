<template>
  <v-card-actions>
    <nuxt-link to="/signup">
      アカウントを作成
    </nuxt-link>
    <v-spacer></v-spacer>
    <TwitterActionButton :label="twitterBtnLabel" />
    <GenericActionButton
      :label="loginBtnLabel"
      :unableUsingBtn="unableUsingBtn"
      @clickEvent="clickEvent"
    />
  </v-card-actions>
</template>

<script>
import TwitterActionButton from '../Atoms/TwitterActionButton'
import GenericActionButton from '../Atoms/GenericActionButton'
export default {
  name: 'LoginAction',
  components: {
    GenericActionButton,
    TwitterActionButton
  },
  props: {
    unableUsingBtn: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      twitterBtnLabel: 'Twitterでログイン',
      loginBtnLabel: 'ログインする'
    }
  },
  methods: {
    clickEvent() {
      this.$emit('userLogin')
    }
  }
}
</script>

<style scoped></style>
