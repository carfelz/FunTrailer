import { BaseApi } from "@/api"
const relativeUrl = "/users"

const Employees = {
  acceptInvite: (uuid, params) =>
    BaseApi.post(`${relativeUrl}/invited/${uuid}/`, params),
}
export default Employees
