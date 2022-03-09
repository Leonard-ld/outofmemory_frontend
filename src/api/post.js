import request from '@/utils/request'

// 列表
export function getList(pageNo, size, tab) {
  return request(({
    url: '/post/list',
    method: 'get',
    params: { pageNo: pageNo, size: size, tab: tab }
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
export function getPost(id) {
  return request({
    url: `/post/${id}`,
    method: 'get',
  })
}
// 获取详情页推荐
export function getRecommendPosts(id) {
  return request({
    url: `/post/recommend/${id}`,
    method: 'get',
  })
}

export function update(post) {
  return request({
    url: '/post',
    method: 'put',
    data: post
  })
}

export function deletePost(id) {
  return request({
    url: `/post/${id}`,
    method: 'delete'
  })
}

