import { getData } from "../context.service";
const url = "http://localhost:3000/user/";

export function getUsers() {
  return getData(url);
}
