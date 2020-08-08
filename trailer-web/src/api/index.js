import axios from "axios"
import humps from "humps"

import store from "@/store"

const apiRoot = process.env.VUE_APP_BASE_API

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"
axios.defaults.xsrfCookieName = "csrftoken"
axios.defaults.addTrailingSlash = true

const decamelizeThatDoesntBreakFiles = (object) => {
  if (object && !(object instanceof File)) {
    if (object instanceof Array) {
      return object.map((item) => decamelizeThatDoesntBreakFiles(item))
    }
    if (object instanceof FormData) {
      let formData = new FormData()
      for (const [key, value] of object.entries()) {
        formData.append(humps.decamelize(key), value)
      }
      return formData
    }
    if (object instanceof Date) {
      return object
    }
    if (typeof object === "object") {
      return Object.keys(object).reduce(
        (acc, next) => ({
          ...acc,
          [humps.decamelize(next)]: decamelizeThatDoesntBreakFiles(
            object[next]
          ),
        }),
        {}
      )
    }
  }
  return object
}

axios.defaults.transformResponse = [
  ...axios.defaults.transformResponse,
  (data) =>
    humps.camelizeKeys(data, function (key, convert) {
      return /^[0-9-]+$/.test(key) ? key : convert(key)
    }),
]

axios.defaults.transformRequest = [
  (data) => decamelizeThatDoesntBreakFiles(data),
  ...axios.defaults.transformRequest,
]

const BaseApi = axios.create({
  baseURL: apiRoot,
  withCredentials: true,
})

const TokenApi = axios.create({
  baseURL: `${apiRoot}token/`,
})

const AuthApi = axios.create({
  baseURL: `${apiRoot}/`,
  withCredentials: true,
})

const isBadSessionError = (errorResponse) => {
  return errorResponse.status === 403
}

BaseApi.interceptors.response.use(
  (res) => res,
  (err) => {
    if (!err.response) {
      return Promise.reject(err)
    }
    if (isBadSessionError(err.response)) {
      store.dispatch("auth/logOut")
      return Promise.reject(err)
    }
    return Promise.reject(err)
  }
)

BaseApi.interceptors.request.use(
  (config) => {
    if (config.addTrailingSlash && config.url[config.url.length - 1] !== "/") {
      config.url += "/"
    }
    const screenUUID = localStorage.getItem("screen-uuid")
    if (screenUUID) {
      config.headers.Authorization = `Screen ${screenUUID}`
    }
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

export { BaseApi, TokenApi, AuthApi }
