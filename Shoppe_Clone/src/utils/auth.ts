import { User } from 'src/types/user.type'

export const saveAccessToken = (access_token: string) => {
  localStorage.setItem('access_token', access_token)
}

export const clearFromLocalStorage = () => {
  localStorage.removeItem('access_token')
  localStorage.removeItem('profile')
}

export const getAccessToken = () => localStorage.getItem('access_token') || ''

export const getProfile = () => {
  const result = localStorage.getItem('profile')
  return result ? JSON.parse(result) : null
}
export const saveProfile = (profile: User) => {
  localStorage.setItem('profile', JSON.stringify(profile))
}
