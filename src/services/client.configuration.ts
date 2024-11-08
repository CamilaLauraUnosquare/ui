import axios from "axios";

import { BASE_API_URL, HEADERS } from "../constant/client.constants";

const client = axios.create({
  baseURL: BASE_API_URL,
  headers: HEADERS,
});

//Interceptor for request
// client.interceptors.request.use(
//   (config) => {
//     const cfg: any = config;
//     const token = localStorage.getItem("token-string");
//     const JSToken = JSON.parse(token!) as AuthModel;
//     if (JSToken) {
//       cfg.headers = {
//         ...cfg.headers,
//         Authorization: `Bearer ${JSToken.jwtToken}`,
//       };
//     }
//     return cfg;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

client.interceptors.response.use(
  (response) => {
    if (response.status > 300) {
      return Promise.reject(response);
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default client;
