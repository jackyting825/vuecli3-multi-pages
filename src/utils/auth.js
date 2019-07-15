import Cookies from 'vue-js-cookie'

const TokenKey = 'Token'
const userInfoKey = 'userInfo'
const rolesKey = 'roles'
const perKey = 'permissions'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getUserInfo() {
  return Cookies.get(userInfoKey)
}

export function setUserInfo(userInfo) {
  return Cookies.set(userInfoKey, userInfo)
}

export function removeUserInfo() {
  return Cookies.remove(userInfoKey)
}

export function getRoles() {
  return Cookies.get(rolesKey)
}

export function setRoles(roles) {
  return Cookies.set(rolesKey, roles)
}

export function removeRoles() {
  return Cookies.remove(rolesKey)
}

export function getPermiss() {
  return Cookies.get(perKey)
}

export function setPermiss(permissions) {
  return Cookies.set(perKey, permissions)
}

export function removePermiss() {
  return Cookies.remove(perKey)
}