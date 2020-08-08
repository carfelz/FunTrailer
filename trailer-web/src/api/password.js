import { BaseApi } from "@/api"
export default {
  update: (params) => BaseApi.post(`/password/set/`, params),
  reset: (params) => BaseApi.post("/password/reset/complete/", params),
  triggerReset: (email) => BaseApi.post("/password/reset/", { email }),
}
