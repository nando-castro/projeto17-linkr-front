import axios from "axios";


export const api = axios.create({
  baseURL: "http://localhost:4000",
});

/* export const api = axios.create({
  baseURL: "https://linkr1.herokuapp.com",
}); */
