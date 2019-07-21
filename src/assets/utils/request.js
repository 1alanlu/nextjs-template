export default ({ url, method, headers, data }, options = {}) => {
  return fetch(url, {
    // *GET, POST, PUT, DELETE。
    method: method || 'GET',
    // 发送给后台的数据
    body: data ? JSON.stringify(data) : null,
    // 请求头
    headers: headers || {
      'content-type': 'application/json',
    },
    mode: 'cors', // 跨域处理
    ...options, // 其他配置项
  }).then(res => res.json())
}
