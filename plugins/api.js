export default ({ app }, inject) => {
  const api = {
    Drops: {
      async index() {
        const drops = await app.$axios.$get('/api/v1/drops').catch((err) => {
          console.log(err)
        })
        return { drops }
      },
      async create(data) {
        await app.$axios.$post('/api/v1/drops', data).catch((err) => {
          console.log(err)
        })
      },
      async delete(data) {
        await app.$axios.$delete(`/api/v1/drops/${data.id}`, data)
      }
    },
    Users: {
      async index() {
        const users = await app.$axios.$get('/api/v1/users').catch((err) => {
          console.log(err)
        })
        return { users }
      },
      async create(data) {
        await app.$axios.$post('/api/v1/users', data).catch((err) => {
          console.log(err)
        })
      }
    },
    ConvenienceLinks: {
      async index() {
        const convenienceLink = await app.$axios
          .$get('/api/v1/convenience_links')
          .catch((err) => {
            console.log(err)
          })
        return { convenienceLink }
      },
      async create(data) {
        await app.$axios
          .$post('/api/v1/convenience_links', data)
          .catch((err) => {
            console.log(err)
          })
      },
      async update(data) {
        await app.$axios
          .$put(`/api/v1/convenience_links/${data.id}/edit`, data)
          .catch((err) => {
            console.log(err)
          })
      },
      async delete(data) {
        await app.$axios.$delete(`/api/v1/convenience_links/${data.id}`, data)
      }
    },
    News: {
      async index() {
        const drops = await app.$axios.$get('/api/v1/news').catch((err) => {
          console.log(err)
        })
        return { drops }
      }
    }
  }
  inject('api', api)
}
