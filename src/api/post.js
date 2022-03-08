import request from '@/utils/request'

// 列表
export function getList(pageNo, size, tab) {
  return request(({
    url: `/post/${pageNo}/${size}/${tab}`,
    method: 'get',
  }))
}

// 发布
export function post(post) {
  return request({
    url: '/post',
    method: 'post',
    data: post
  })
}

// 浏览
export function getPosts(id) {
  return request({
    url: `/post/${id}`,
    method: 'get',
  })
}
// 获取详情页推荐
export function getRecommendPosts(id) {
  return request({
    url: '/post/recommend',
    method: 'get',
    params: {
      postId: id
    }
  })
}

export function update(post) {
  return request({
    url: '/post/update',
    method: 'post',
    data: post
  })
}

export function deletePost(id) {
  return request({
    url: `/post/delete/${id}`,
    method: 'delete'
  })
}

