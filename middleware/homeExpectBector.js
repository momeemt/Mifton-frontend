export default function({ store }) {
  if (store.state.sessions.isLoggedIn) {
    return Promise.resolve()
  } else if (process.browser) {
    window.location.href = '/bector'
    return new Promise((resolve) => {
      // レンダリング完了まで待つ
    })
  }
}
