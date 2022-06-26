import axios from 'axios'
console.log(import.meta.env.VITE_BASE_API)

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  // headers:{ icode:'EB00B48BC45159FC' }
  timeout: 5000
})
// 使用拦截器，定义全局请求头
service.interceptors.request.use((config) => {
  // 在请求头中添加token
  config.headers.icode = 'EB00B48BC45159FC'
  return config
})
export default service
