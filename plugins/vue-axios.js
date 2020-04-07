const VueAxiosPlugin = {}
export default VueAxiosPlugin.install = function(Vue, { axios }) {
  if (process.client) {
    const csrfToken = document
      .querySelector('meta[name="csrf-token"]')
      .getAttribute('content')
    axios.defaults.headers.common = {
      'X-Requested-With': 'XMLHttpRequest',
      'X-CSRF-Token': csrfToken
    }

    Vue.axios = axios
    Object.defineProperties(Vue.prototype, {
      axios: {
        get() {
          return axios
        }
      }
    })
  }
}
