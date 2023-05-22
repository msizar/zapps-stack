import axios from "axios"

const API_ENDPOINT = "https://api.stackexchange.com/2.2/users?order=desc&sort=reputation&site=stackoverflow"

const getUsers = (currentPage: number = 0) => {
  return axios.get(`${API_ENDPOINT}&page=${currentPage}&pagesize=20`).then(res => {
    return res
  })
}

export {
  getUsers
}