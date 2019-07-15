import request from '@/utils/request'

export function test() {
  return request({
    url: '/home/getMessage',
    method: 'get'
    // params: { page, rows, name }
  })
}