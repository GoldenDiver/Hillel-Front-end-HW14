import axios from "axios";
import { API_URL } from "../constants";

export function getUsers(id) {
  if (id === undefined) {
    return axios.get(API_URL).then((resp) => resp.data);
  } else {
    return axios.get(API_URL + "/" + id).then((resp) => resp.data);
  }
}

export function createUser(item) {
  return axios.post(API_URL, item)
}

export function updateUser(item) {
  return axios.put(API_URL + '/' + item.id, item)
  
//   fetch(API_URL + "/" + item.id, {
//     method: "PUT",
//     body: JSON.stringify(item),
//     headers: { "Content-Type": "application/json" },
//   }).then((res) => res.json());
}

export function deleteUser(id) {
  return axios.delete(API_URL + '/' + id)
}
