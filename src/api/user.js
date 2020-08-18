import request from '@/utils/request'
import qs from 'querystring'

export function login (data) {
  return request({
    url: '/user/login',
    method: 'post',
    data: qs.stringify(data),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}

export function getInfo (token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token } // Todo 生产环境删除
  })
}

export function logout () {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

export function getUserList () {
  return request({
    url: '/user/list',
    method: 'get'
  })
}

export function getUserListByPage (query) {
  return request({
    url: '/user/listByPage',
    method: 'get',
    params: query
  })
}

export function updateUser (user) {
  return request({
    url: '/user/update',
    method: 'put',
    data: user
  })
}

export function deleteUser (id) {
  return request({
    url: `/user/remove/${id}`,
    method: 'delete'
  })
}

export function deleteUserBatch (data) {
  return request({
    url: `/user/removeBatch`,
    method: 'delete',
    data: data
  })
}

export function addUser (data) {
  return request({
    url: `/user/save`,
    method: 'post',
    data
  })
}

export function resetPassword (data) {
  return request({
    url: '/user/resetPassword',
    method: 'put',
    data: data
  })
}
