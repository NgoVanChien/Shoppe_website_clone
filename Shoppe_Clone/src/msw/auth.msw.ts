import { rest } from 'msw'
import config from 'src/constants/config'
import HttpStatusCode from 'src/constants/httpStatusCode.enum'

export const access_token_1s =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmY5MzVlNWZkYzVmMDM3ZTZmNjhkMyIsImVtYWlsIjoiZDNAZ21haWwuY29tIiwicm9sZXMiOlsiVXNlciJdLCJjcmVhdGVkX2F0IjoiMjAyMi0xMi0xNVQxNDowMzoyMy41NzdaIiwiaWF0IjoxNjcxMTEzMDAzLCJleHAiOjE2NzExMTMwMDR9.-gQIpbbKFlRqBlpiiAOBD4puP8jcMtZ2lobXPcy1zmU'
export const refresh_token_1000days =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmY5MzVlNWZkYzVmMDM3ZTZmNjhkMyIsImVtYWlsIjoiZDNAZ21haWwuY29tIiwicm9sZXMiOlsiVXNlciJdLCJjcmVhdGVkX2F0IjoiMjAyMi0xMi0xNVQxNDowNTozNS41MTVaIiwiaWF0IjoxNjcxMTEzMTM1LCJleHAiOjE3NTc1MTMxMzV9.OHDBqBjhih1fgNe6-mWo0PQ-IcukNz4ljlXUCxM-8V8'

export const access_token =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODM2MTEwMWFmYzJlMWExZjk2OGZjZCIsImVtYWlsIjoiejJAZ21haWwuY29tIiwicm9sZXMiOlsiVXNlciJdLCJjcmVhdGVkX2F0IjoiMjAyMy0wNi0wOVQxNzozMTo0Ny40NTJaIiwiaWF0IjoxNjg2MzMxOTA3LCJleHAiOjE2ODczMzE5MDZ9.3QjVMco7iCFnmApppMwk_1lv_fyA53SeyhOEo3x-6PU'

const loginRes = {
  message: 'Đăng nhập thành công',
  data: {
    access_token:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmY5MzVlNWZkYzVmMDM3ZTZmNjhkMyIsImVtYWlsIjoiZDNAZ21haWwuY29tIiwicm9sZXMiOlsiVXNlciJdLCJjcmVhdGVkX2F0IjoiMjAyMi0xMi0xOVQwNDoxODowMC4wNjRaIiwiaWF0IjoxNjcxNDIzNDgwLCJleHAiOjE2NzI0MjM0Nzl9.AxOvjaTErYwvOSdMWtZgefX8JJ3KaMCZWNCj72uqzYY',
    expires: 999999,
    refresh_token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmY5MzVlNWZkYzVmMDM3ZTZmNjhkMyIsImVtYWlsIjoiZDNAZ21haWwuY29tIiwicm9sZXMiOlsiVXNlciJdLCJjcmVhdGVkX2F0IjoiMjAyMi0xMi0xOVQwNDoxODowMC4wNjRaIiwiaWF0IjoxNjcxNDIzNDgwLCJleHAiOjE3NTc4MjM0ODB9.AvavrdIeU1xm2KrFeEKSiDJs260YU1uWxRzVw30MgoU',
    expires_refresh_token: 86400000,
    user: {
      _id: '648361101afc2e1a1f968fcd',
      roles: ['User'],
      email: 'z2@gmail.com',
      createdAt: '2023-06-09T17:27:44.279Z',
      updatedAt: '2023-06-09T17:30:53.871Z',
      __v: 0,
      address: 'VN',
      avatar: 'f16d4549-6ed1-45bf-bb23-81a06e9a6697.jpg',
      date_of_birth: '2002-02-19T17:00:00.000Z',
      name: 'Otis',
      phone: '0123456789'
    }
  }
}

const refreshTokenRes = {
  message: 'Refresh Token thành công',
  data: {
    access_token:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmY5MzVlNWZkYzVmMDM3ZTZmNjhkMyIsImVtYWlsIjoiZDNAZ21haWwuY29tIiwicm9sZXMiOlsiVXNlciJdLCJjcmVhdGVkX2F0IjoiMjAyMi0xMi0xOVQwNzozMTowMC4yNTJaIiwiaWF0IjoxNjcxNDM1MDYwLCJleHAiOjE2NzIwMzk4NjB9.vTHglpuxad5h_CPpIaDCUpW0xJPYarJzLFeeul0W61E'
  }
}

const loginRequest = rest.post(`${config.baseUrl}login`, (req, res, ctx) => {
  return res(ctx.status(HttpStatusCode.Ok), ctx.json(loginRes))
})

const refreshToken = rest.post(`${config.baseUrl}refresh-access-token`, (req, res, ctx) => {
  return res(ctx.status(HttpStatusCode.Ok), ctx.json(refreshTokenRes))
})

const authRequests = [loginRequest, refreshToken]

export default authRequests
