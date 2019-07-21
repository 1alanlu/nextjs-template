import request from '@utils/request'

const prod = process.env.NODE_ENV === 'production'
const path = prod ? '/api/user' : '/static/data/user/user.json'

export default class user {
  // 获取所有用户
  static gets() {
    return request({
      url: path,
    })
  }

  // 获取指定用户
  static get(id) {
    return request({
      url: `${path}/${id}`,
    })
  }

  // 新增用户
  static create(data) {
    return request({
      url: path,
      method: 'POST',
      data,
    })
  }

  // 更新用户信息
  static put(id, data) {
    return request({
      url: `${path}/${id}`,
      method: 'PUT',
      data,
    })
  }

  // 删除用户
  static delete(id) {
    return request({
      url: `${path}/${id}`,
      method: 'DELETE',
    })
  }
}
