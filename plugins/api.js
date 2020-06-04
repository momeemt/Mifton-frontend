export default ({ app }, inject) => {
  const config = {
    headers: { Authorization: 'Token ' + process.env.BASE_API_TOKEN }
  }
  const api = {
    async index(modelName) {
      let resCode
      const res = await app.$axios
        .$get(`/api/v1/${modelName}`, config)
        .then((res) => {
          resCode = 200
          return res
        })
        .catch((err) => {
          resCode = err.response.status
        })
      return { res, resCode }
    },
    async indexByUserId(modelName, userID) {
      let resCode
      const res = await app.$axios
        .$get(`/api/v1/${modelName}/user_id/${userID}`, config)
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
        .$post(`/api/v1/${modelName}`, data, config)
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
      let resCode
      const res = await app.$axios
        .$delete(`/api/v1/${modelName}/${data.id}`, config)
        .then((res) => {
          resCode = 200
          return res
        })
        .catch((err) => {
          resCode = err.response.status
        })
      return { res, resCode }
    },
    async show(modelName, id) {
      let resCode
      const res = await app.$axios
        .$get(`/api/v1/${modelName}/${id}`, config)
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
      let resCode
      const res = await app.$axios
        .$put(`/api/v1/${modelName}/${data.id}`, data, config)
        .then((res) => {
          resCode = 200
          return res
        })
        .catch((err) => {
          resCode = err.response.status
        })
      return { res, resCode }
    }
  }
  inject('api', api)
}
