import axios from "axios";

export const api = axios.create({
  baseURL: "https://linkr1.herokuapp.com",
});
