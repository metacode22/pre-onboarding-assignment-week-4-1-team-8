import { ACCOUNTS } from "../../consts/api"
import http from "./base"

export const getAccounts = () => {
  return http.get({
    url: ACCOUNTS
  })
}