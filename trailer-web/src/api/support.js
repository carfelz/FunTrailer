import { BaseApi } from "@/api"
export default {
  create: (params) => BaseApi.post(`/support/`, params),
}
