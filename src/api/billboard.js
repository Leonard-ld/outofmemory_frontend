import request from '@/utils/request'

export function getBillboard() {
  return request({
    url: '/billboard',
    method: 'get'
  })
}