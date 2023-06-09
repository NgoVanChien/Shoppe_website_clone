import { beforeAll, beforeEach, describe, expect, it } from 'vitest'
import {
  clearLocalStorage,
  getAccessTokenFromLS,
  getRefreshTokenFromLS,
  setAccessTokenToLS,
  setRefreshTokenToLS
} from '../auth'

const access_token =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NzYxZDkwMWFmYzJlMWExZjk2ODFmYiIsImVtYWlsIjoiekBnbWFpbC5jb20iLCJyb2xlcyI6WyJVc2VyIl0sImNyZWF0ZWRfYXQiOiIyMDIzLTA2LTA5VDA1OjUzOjQ2LjM5MloiLCJpYXQiOjE2ODYyOTAwMjYsImV4cCI6MTY4NjM3NjQyNn0.4r-VFGVpSkilS21QNxZDlXFInvG7kHr725PwK-CbTJ0'

const refresh_token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NzYxZDkwMWFmYzJlMWExZjk2ODFmYiIsImVtYWlsIjoiekBnbWFpbC5jb20iLCJyb2xlcyI6WyJVc2VyIl0sImNyZWF0ZWRfYXQiOiIyMDIzLTA2LTA5VDA1OjUzOjQ2LjM5MloiLCJpYXQiOjE2ODYyOTAwMjYsImV4cCI6MTcwMDExNDAyNn0.hcD6vdLQ8A-WObkOK0Kmg9d_5C_S3_TzzGKCx7Wp27A'

const profile =
  '{"_id":"64761d901afc2e1a1f9681fb","roles":["User"],"email":"z@gmail.com","createdAt":"2023-05-30T16:00:16.461Z","updatedAt":"2023-06-08T19:13:27.498Z","__v":0,"date_of_birth":"2000-10-09T17:00:00.000Z","name":"galvin","address":"Dong Nai","phone":"0909090909","avatar":"9fdcc9b6-a0ff-48c5-8e3a-6c5309a80b0c.jpg"}'

beforeEach(() => {
  localStorage.clear()
})

describe('access_token', () => {
  it('access_token được set vào localStorage', () => {
    setAccessTokenToLS(access_token)
    expect(getAccessTokenFromLS()).toBe(access_token)
  })
})

describe('refresh_token', () => {
  it('refresh_token được set vào localStorage', () => {
    setRefreshTokenToLS(refresh_token)
    expect(getRefreshTokenFromLS()).toEqual(refresh_token)
  })
})

describe('clearLS', () => {
  it('Xóa hết access_token, refresh_token, profile', () => {
    setRefreshTokenToLS(refresh_token)
    setAccessTokenToLS(access_token)
    // setProfile tại đây
    // ...
    clearLocalStorage()
    expect(getAccessTokenFromLS()).toBe('')
    expect(getRefreshTokenFromLS()).toBe('')
  })
})
