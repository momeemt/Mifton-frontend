export default function({ store, redirect }) {
  // ユーザーがログインしていない時
  if (!store.getters.is_logged_in) {
    return redirect('/bector')
  }
}
