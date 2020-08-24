import request from '@/utils/request'

const BASE_URL = ''

export function payLogin (data) {
  return request({
    url: BASE_URL + '/pay/payLogin',
    method: 'post',
    data
  })
}

export function getQrCode () {
  return request({
    url: BASE_URL + '/pay/getQrCode',
    method: 'post'
  })
}

export function addAccIntoInfoDto (data) {
  return request({
    url: BASE_URL + '/pay/addAccIntoInfoDto',
    method: 'post',
    data
  })
}

export function getUUid (data) {
  return request({
    url: BASE_URL + '/pay/getUUid',
    method: 'post',
    data
  })
}
