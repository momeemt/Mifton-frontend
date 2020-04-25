export default ({ app }, inject) => {
  const api = {
    async index(modelName) {
      let resCode
      const res = await app.$axios
        .$get(`/api/v1/${modelName}`)
        .then((res) => {
          resCode = 200
          return res
        })
        .catch((err) => {
          resCode = err.response.status
        })
      return { res, resCode }
    },
    async create(modelName, data) {
      let resCode
      const res = await app.$axios
        .$post(`/api/v1/${modelName}`, data)
        .then((res) => {
          resCode = 200
          return res
        })
        .catch((err) => {
          resCode = err.response.status
        })
      return { res, resCode }
    },
    async delete(modelName, data) {
      await app.$axios
        .$delete(`/api/v1/${modelName}/${data.id}`, data)
        .then((res) => {
          return res
        })
        .catch((err) => {
          return err
        })
    },
    async show(modelName, id) {
      let resCode
      const res = await app.$axios
        .$get(`/api/v1/${modelName}/${id}`)
        .then((res) => {
          resCode = 200
          return res
        })
        .catch((err) => {
          resCode = err.response.status
        })
      return { res, resCode }
    },
    async update(modelName, data) {
      await app.$axios
        .$put(`/api/v1/${modelName}/${data.id}/edit`, data)
        .then((res) => {
          return res
        })
        .catch((err) => {
          return err
        })
    }
  }
  inject('api', api)
}
