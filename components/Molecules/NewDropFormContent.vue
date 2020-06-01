<template>
  <div class="newDropFormContent">
    <UserIcon :user="currentUser" />
    <NewDropFormTextArea />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserIcon from '~/components/Atoms/UserIcon'
import NewDropFormTextArea from '~/components/Atoms/NewDropFormTextArea'
export default {
  components: {
    UserIcon,
    NewDropFormTextArea
  },
  computed: {
    ...mapGetters('sessions', ['currentUser'])
  }
}
</script>

<style scoped>
.newDropFormContent {
  display: flex;
}
</style>
