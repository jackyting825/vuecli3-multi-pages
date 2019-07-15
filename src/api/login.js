import request from '@/utils/request'
import qs from 'qs'

export function loginByUsername(username, password) {
  const data = {
    username,
    password
  }
  return request({
    url: '/guest/webSignIn',
    method: 'post',
    data: qs.stringify(data)
  })
}

export function logout() {
  return request({
    url: '/home/logout',
    method: 'get'
  })
}

export function listUserInfo() {
  return request({
    url: '/home/listUserInfo',
    method: 'get'
  })
}
