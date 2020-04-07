export default {
  async index({ $axios }) {
    const drops = await $axios.$get('/api/v1/drops').catch((err) => {
      console.log(err)
    })
    return { drops }
  }
}
