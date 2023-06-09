import { rest } from 'msw'
import config from 'src/constants/config'
import HttpStatusCode from 'src/constants/httpStatusCode.enum'
import { access_token_1s } from './auth.msw'

const meRes = {
  message: 'Lấy người dùng thành công',
  data: {
    _id: '64761f8a1afc2e1a1f9681fe',
    roles: ['User'],
    email: 'z1@gmail.com',
    createdAt: '2023-05-30T16:08:42.872Z',
    updatedAt: '2023-05-30T16:08:42.872Z',
    __v: 0
  }
}

const meRequest = rest.get(`${config.baseUrl}me`, (req, res, ctx) => {
  const access_token = req.headers.get('authorization')
  console.log(1)
  if (access_token === access_token_1s) {
    return res(
      ctx.status(HttpStatusCode.Unauthorized),
      ctx.json({
        message: 'Lỗi',
        data: {
          message: 'Token hết hạn',
          name: 'EXPIRED_TOKEN'
        }
      })
    )
  }
  return res(ctx.status(HttpStatusCode.Ok), ctx.json(meRes))
})

const userRequests = [meRequest]

export default userRequests
