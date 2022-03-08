import request from '@/utils/request'

// 关注
export function follow(id) {
  return request(({
    url: `/relationship`,
    method: 'post',
    data: {"id":id}
  }))
}

//  取消关注
export function unFollow(id) {
  return request(({
    url: `/relationship/${id}`,
    method: 'delete'
  }))
}

// 验证是否关注
export function hasFollow(userId) {
  return request(({
    url: `/relationship/${userId}`,
    method: 'get'
  }))
}