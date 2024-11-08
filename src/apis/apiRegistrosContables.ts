import axios from "axios";
import { environment } from "../environments/environment";


export const apiRegistrosContables = axios.create({
  baseURL: environment.apiRegistrosContables,
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
  // timeout: 1000,
});