import Endpoint from "@/api/endpoint"
import { BaseApi } from "@/api"
const relativeUrl = "/services/payments"
class Payment extends Endpoint {
  constructor({ relativeUrl }) {
    super({ relativeUrl })

    this.resend = (id) => BaseApi.post(`${relativeUrl}/${id}/resend/`)
    this.cancel = (id) => BaseApi.post(`${relativeUrl}/${id}/cancel/`)
    this.refund = (id) => BaseApi.post(`${relativeUrl}/${id}/refund/`)
  }
}

const Payments = new Payment({ relativeUrl })

export default Payments
