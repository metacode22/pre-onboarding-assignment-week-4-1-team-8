import { USERS } from "../../consts/api";
import http from "./base"

export const getUsers = () => {
  return http.get({
    url: USERS
  });
}