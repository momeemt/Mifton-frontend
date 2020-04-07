<template>
  <div>
    <h1>{{ $store.state.currentUser.name }}</h1>
    <p>@{{ $store.state.currentUser.user_id }}</p>
  </div>
</template>

<script>
export default {
  name: 'UsersId',
  layout: 'pc/general'
}
</script>

<style scoped></style>
