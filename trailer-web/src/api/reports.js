import { BaseApi } from "@/api"
export default {
  listMonths: () => BaseApi.get(`/reports/`),
  retrieve: (month) => BaseApi.get(`/reports/${month}/`),
  presence: () => BaseApi.get(`/presence/month/`),
}
