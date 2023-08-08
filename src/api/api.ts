import axios, { AxiosInstance } from 'axios'

export const api: AxiosInstance = axios.create({
  baseURL: `localhost:8080`,
  timeout: 1000,
  headers: {
    accept: 'application/json',
  },
})
