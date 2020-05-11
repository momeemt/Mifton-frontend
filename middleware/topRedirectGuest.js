export default function({ store }) {
  console.error(store.getters.is_logged_in)
  if (store.getters.is_logged_in) {
    return Promise.resolve()
  } else if (process.browser) {
    window.location.href = '/'
    return new Promise((resolve) => {
      // レンダリング完了まで待つ
    })
  }
}
