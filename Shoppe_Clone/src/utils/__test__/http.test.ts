import HttpStatusCode from 'src/constants/httpStatusCode.enum'
import { describe, expect, it, beforeEach } from 'vitest'
import { getAccessTokenFromLS, getRefreshTokenFromLS, setAccessTokenToLS, setRefreshTokenToLS } from '../auth'
import { Http } from '../http'

describe('http axios', () => {
  let http = new Http().instance
  beforeEach(() => {
    localStorage.clear()
    http = new Http().instance
  })
  const access_token_1s =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NzYxZjhhMWFmYzJlMWExZjk2ODFmZSIsImVtYWlsIjoiejFAZ21haWwuY29tIiwicm9sZXMiOlsiVXNlciJdLCJjcmVhdGVkX2F0IjoiMjAyMy0wNi0wOVQwODo0ODoxMC45NzFaIiwiaWF0IjoxNjg2MzAwNDkwLCJleHAiOjE2ODYzMDA0OTF9.yuy81SAQ6kfbBnFLYCqeIcgfS0o8B2NEukQe2LUiatk'
  const refresh_token_100days =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NzYxZjhhMWFmYzJlMWExZjk2ODFmZSIsImVtYWlsIjoiejFAZ21haWwuY29tIiwicm9sZXMiOlsiVXNlciJdLCJjcmVhdGVkX2F0IjoiMjAyMy0wNi0wOVQwODo0ODoxMC45NzFaIiwiaWF0IjoxNjg2MzAwNDkwLCJleHAiOjE2OTQ5NDA0OTB9.CCb8hpRWv47hrkjysJp1vsEMWaHwmdY0osVLDQ3q3EY'

  it('Gọi API', async () => {
    // Không nên đụng đến thư mục apis
    // Vì chúng ta test riêng file http thì chỉ "nên" dùng http thôi
    // vì lỡ như thư mục apis có thay đổi gì đó
    // thì cũng không ảnh hưởng gì đến file test này
    const res = await http.get('products')
    expect(res.status).toBe(HttpStatusCode.Ok)
  })

  it('Auth Request', async () => {
    // Nên có 1 cái account test
    // và 1 server test
    await http.post('login', {
      email: 'z@gmail.com',
      password: '111111'
    })
    const res = await http.get('me')
    expect(res.status).toBe(HttpStatusCode.Ok)
  })

  it('Refresh Token', async () => {
    setAccessTokenToLS(access_token_1s)
    setRefreshTokenToLS(refresh_token_100days)
    const httpNew = new Http().instance
    const res = await httpNew.get('me')
    expect(res.status).toBe(HttpStatusCode.Ok)
  })
})
