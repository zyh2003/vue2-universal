import axios from 'axios'
// import router from "@/router";
// import store from "@/store";
// import { ElMessage } from "element-ui/types/message";
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})
service.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    // 把token加入请求头中, 不需要可以删除下面4句代码
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)
service.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    // 解决token错误或是过期
    // 把response的data返回给客户端, 不需要可以删除下面1句代码
    return response
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)
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
