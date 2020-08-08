import { BaseApi } from "@/api"
export default {
  retrieve: (token) => BaseApi.get(`/invite/${token}`),
  acceptInvite: (token, params) => BaseApi.post(`/invite/${token}`, params),
}
