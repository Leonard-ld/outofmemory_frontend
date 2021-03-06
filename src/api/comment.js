import request from '@/utils/request'

export function fetchCommentsByPostId(postId) {
  return request({
    url: `/comment/${postId}`,
    method: 'get',
  })
}

export function pushComment(data) {
  return request({
    url: '/comment',
    method: 'post',
    data: data
  })
}

