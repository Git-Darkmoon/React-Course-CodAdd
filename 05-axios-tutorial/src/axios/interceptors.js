import axios from "axios"
import authFetch from "./custom"

// const authFetch = axios.create({
//   baseURL: "https://course-api.com",
// })

authFetch.interceptors.request.use(
  (request) => {
    request.headers.common["Accept"] = "application/json"
    return request
  },
  (error) => {
    return Promise.reject(error)
  }
)
authFetch.interceptors.response.use(
  (response) => {
    console.log("Got Response")
    return response
  },
  (error) => {
    console.log(error.response)
    // do something
    if (error.response.status === 404) {
      console.log("NOT FOUND")
    }
    return Promise.reject(error)
  }
)
export default authFetch
