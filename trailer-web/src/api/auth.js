import { AuthApi } from "@/api"

const logIn = function (payload) {
  // return TokenApi.post("", payload)
  return AuthApi.post("/login/", payload)
}

// const verify = function() {
//   const accessToken = sessionStorage.getItem("accessToken")
//   return TokenApi.post("/verify/", {
//     token: accessToken,
//   })
// }

const logOut = function () {
  // window.location.href = `${window.location.origin}/logout`
  return AuthApi.post("/logout/")
}

// const getAccessToken = function() {
//   const refresh = localStorage.getItem("refreshToken")
//   if (!refresh) {
//     return Promise.reject()
//   }
//   return TokenApi.post("/refresh/", { refresh }, { withCredentials: true })
// }

export default { logIn, logOut }
