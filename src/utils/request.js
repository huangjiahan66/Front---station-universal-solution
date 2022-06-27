import axios from 'axios'
// console.log(import.meta.env.VITE_BASE_API)

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 5000
})
// 使用拦截器，定义全局请求头
service.interceptors.request.use((config) => {
  config.headers.icode = 'EB00B48BC45159FC'
  return config
})

service.interceptors.response.use((response) => {
  const { success, message, data } = response.data
  //   要根据success的成功与否决定下面的操作
  if (success) {
    return data
  } else {
    // TODO：业务错误
    return Promise.reject(new Error(message))
  }
})
export default service
