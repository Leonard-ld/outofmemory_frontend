import request from '@/utils/request'

export function getTodayTip() {
  return request({
    url: '/tip/show',
    method: 'get'
  })
}