import request from '@/utils/request'

// 获取推广
export function getPromotion() {
  return request(({
    url: '/promotion/show',
    method: 'get'
  }))
}
