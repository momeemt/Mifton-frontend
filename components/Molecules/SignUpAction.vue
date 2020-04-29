<template>
  <v-card-actions>
    <nuxt-link to="/login">
      ログイン
    </nuxt-link>
    <v-spacer></v-spacer>
    <TwitterActionButton :label="twitterBtnLabel" />
    <GenericActionButton :label="registerBtnLabel" @clickEvent="clickEvent" />
  </v-card-actions>
</template>

<script>
import TwitterActionButton from '~/components/Atoms/TwitterActionButton'
import GenericActionButton from '~/components/Atoms/GenericActionButton'
export default {
  name: 'SignUpAction',
  components: {
    TwitterActionButton,
    GenericActionButton
  },
  data() {
    return {
      twitterBtnLabel: 'Twitterで登録',
      registerBtnLabel: '登録する'
    }
  },
  methods: {
    clickEvent() {
      this.$emit('userRegister')
    }
  }
}
</script>
