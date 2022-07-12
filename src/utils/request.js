import axios from 'axios'
import { Message } from 'element-ui'
// import router from "@/router";
// import store from '@/store'
import exceptionMessage from './exception-message'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})
service.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    // 把token加入请求头中, 不需要可以删除下面4句代码
    const token = localStorage.getItem('token')
    // console.log(token)
    config.headers.token = token
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)
service.interceptors.response.use(
  function (response) {
    if (response.data.code === 200) {
      return response.data.data
    }
    _showErrorMessage(response.data.code, response.data.msg)
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)
const _showErrorMessage = (code, msg) => {
  const message = exceptionMessage[code] || msg || '未知错误'
  Message({
    showClose: true,
    message,
    type: 'error'
  })
}
/**
 * 统一传参处理
 * @param {*} options
 * @returns
 */
const request = (options) => {
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data || {}
  }
  return service(options)
}
export default request
