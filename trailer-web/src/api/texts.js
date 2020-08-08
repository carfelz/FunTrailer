import { BaseApi } from "@/api"
export default {
  send: (params) => BaseApi.post(`/texts/submit/`, params),
}
