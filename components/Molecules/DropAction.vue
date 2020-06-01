<template>
  <div class="dropAction">
    <ReplyButton />
    <ReactionButton />
    <RepostButton />
  </div>
</template>

<script>
import ReplyButton from '~/components/Atoms/ReplyButton'
import ReactionButton from '~/components/Atoms/ReactionButton'
import RepostButton from '~/components/Atoms/RepostButton'
export default {
  components: {
    ReplyButton,
    ReactionButton,
    RepostButton
  }
}
</script>

<style scoped></style>
