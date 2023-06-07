import axios, { AxiosError, type AxiosInstance } from 'axios'
import { toast } from 'react-toastify'
import HttpStatusCode from 'src/constants/httpStatusCode.enum'
import { AuthResponse } from 'src/types/auth.type'

import path from 'src/constants/path'
import { clearLocalStorage, getAccessToken, setAccessToken, saveProfile } from './auth'

class Http {
  instance: AxiosInstance
  private accessToken: string
  constructor() {
    // contructor chỉ chạy 1 lần duy nhất
    this.accessToken = getAccessToken()
    // Trick hay giúp tăng tốc độ truy xuất bộ nhớ khi lưu Access_Token vào Ram
    this.instance = axios.create({
      baseURL: 'https://api-ecom.duthanhduoc.com/',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    // Add a request interceptor
    this.instance.interceptors.request.use(
      (config) => {
        if (this.accessToken && config.headers) {
          config.headers.authorization = this.accessToken
          return config
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )
    // Add a response interceptor
    this.instance.interceptors.response.use(
      (response) => {
        const { url } = response.config
        if (url === path.login || url === path.register) {
          const data = response.data as AuthResponse
          // Lưu vào trong Ram
          this.accessToken = (response.data as AuthResponse).data.access_token
          // Lưu vào trong Ổ cứng
          setAccessToken(this.accessToken)
          saveProfile(data.data.user)
        } else if (url === path.logout) {
          this.accessToken = ''
          clearLocalStorage()
        }
        return response
      },
      function (error: AxiosError) {
        if (error.response?.status !== HttpStatusCode.UnprocessableEntity) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const data: any | undefined = error.response?.data
          const message = data.message || error.message
          toast.error(message)
        }
        if (error.response?.status === HttpStatusCode.Unauthorized) {
          clearLocalStorage()
          // window.location.reload()
        }
        return Promise.reject(error)
      }
    )
  }
}

const http = new Http().instance

export default http
