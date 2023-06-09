import { afterAll, afterEach, beforeAll } from 'vitest'
import { setupServer } from 'msw/node'
import { rest } from 'msw'
import config from './src/constants/config'
import HttpStatusCode from './src/constants/httpStatusCode.enum'
const loginRes = {
  message: 'Đăng nhập thành công',
  data: {
    access_token:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NzYxZjhhMWFmYzJlMWExZjk2ODFmZSIsImVtYWlsIjoiejFAZ21haWwuY29tIiwicm9sZXMiOlsiVXNlciJdLCJjcmVhdGVkX2F0IjoiMjAyMy0wNi0wOVQxNTowMzowOS4xNDFaIiwiaWF0IjoxNjg2MzIyOTg5LCJleHAiOjE2ODczMjI5ODh9.FPCMMYue9WfFddGS8G9rEZhDRsx5TDD3jpwykq-s6jI',
    expires: 999999,
    refresh_token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NzYxZjhhMWFmYzJlMWExZjk2ODFmZSIsImVtYWlsIjoiejFAZ21haWwuY29tIiwicm9sZXMiOlsiVXNlciJdLCJjcmVhdGVkX2F0IjoiMjAyMy0wNi0wOVQxNTowMzowOS4xNDFaIiwiaWF0IjoxNjg2MzIyOTg5LCJleHAiOjE2OTQ5NjI5ODl9.zBH-jeqvI2P3ddVFVBs4irUZCU2IY_gU6aQPS24o12k',
    expires_refresh_token: 8640000,
    user: {
      _id: '64761f8a1afc2e1a1f9681fe',
      roles: ['User'],
      email: 'z1@gmail.com',
      createdAt: '2023-05-30T16:08:42.872Z',
      updatedAt: '2023-05-30T16:08:42.872Z',
      __v: 0
    }
  }
}

export const restHandlers = [
  rest.post(`${config.baseUrl}login`, (req, res, ctx) => {
    return res(ctx.status(HttpStatusCode.Ok), ctx.json(loginRes))
  })
]

const server = setupServer(...restHandlers)

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

//  Close server after all tests
afterAll(() => server.close())

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers())
