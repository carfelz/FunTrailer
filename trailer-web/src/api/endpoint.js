import { BaseApi } from "@/api"
import humps from "humps"

class Endpoint {
  constructor({ relativeUrl }) {
    this.retrieve = (id, params) =>
      BaseApi.get(`${relativeUrl}/${id}/`, {
        headers: { "content-type": "application/x-www-form-urlencoded" },
        params: params,
      })
    this.list = (params) =>
      BaseApi.get(`${relativeUrl}/`, {
        headers: { "content-type": "application/x-www-form-urlencoded" },
        params: humps.decamelizeKeys(params),
      })
    this.create = (params) => BaseApi.post(`${relativeUrl}/`, params)
    this.update = (id, params) => BaseApi.put(`${relativeUrl}/${id}/`, params)
    this.partialUpdate = (id, params) =>
      BaseApi.patch(`${relativeUrl}/${id}/`, params)
    this.delete = (id) => BaseApi.delete(`${relativeUrl}/${id}/`)
  }
}

export default Endpoint
