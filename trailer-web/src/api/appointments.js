import Endpoint from "@/api/endpoint"
import { BaseApi } from "@/api"
const relativeUrl = "/services/appointments"
const Appointments = new Endpoint({ relativeUrl })

Appointments.approve = (id) => BaseApi.post(`${relativeUrl}/${id}/approve/`)
Appointments.decline = (id) => BaseApi.post(`${relativeUrl}/${id}/decline/`)
Appointments.cancelProvider = (id) =>
  BaseApi.post(`${relativeUrl}/${id}/cancel-by-provider/`)
Appointments.suggest = (id, params) =>
  BaseApi.post(`${relativeUrl}/${id}/suggest/`, params)

export default Appointments
