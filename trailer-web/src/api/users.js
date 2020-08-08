import { BaseApi } from "@/api"
export default {
  retrieve: (id) => BaseApi.get(`/users/${id}/`),
  retrieveSelf: () => BaseApi.get(`/users/me/`),
  editSelf: (params) => {
    return BaseApi.patch(`/users/me/`, params)
  },
}
