import aspida from "@aspida/fetch"
import api from "../api/$api"

const fetchConfig: Required<Parameters<typeof aspida>>[1] = {
  baseURL: 'https://factal-portal.microcms.io/api'  ,
  headers: {
    "X-API-KEY": '71f7685a-be6a-4ffc-9990-283c5e7a8a60' ?? "",
  },
}

export const client = api(aspida(fetch, fetchConfig));