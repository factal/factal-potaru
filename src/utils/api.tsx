import aspida from "@aspida/fetch"
import api from "../api/$api"

const fetchConfig: Required<Parameters<typeof aspida>>[1] = {
  baseURL: process.env.HOST_URL  ,
  headers: {
    "X-API-KEY": process.env.X_API_KEY ?? "",
  },
}

export const client = api(aspida(fetch, fetchConfig));