import request from '@/utils/request'

/**
 * 获取验证码
 * @returns
 */
const getCaptcha = () => {
  return request({ url: '/captcha', method: 'GET' })
}
/**
 * 登录接口
 * @returns
 */
const getLogin = (data) => {
  return request({
    url: `login?username=${data.username}&password=${data.password}&code=${data.code}&token=${data.token}`,
    method: 'POST'
  })
}
/**
 * 用户信息
 * @returns
 */
const getUserInfo = () => {
  return request({ url: '/user/info', method: 'GET' })
}

const getNav = () => {
  return request({ url: '/menu/nav', method: 'GET' })
}
/**
 * 导出封装的接口
 */
export default {
  getCaptcha,
  getLogin,
  getUserInfo,
  getNav
}
