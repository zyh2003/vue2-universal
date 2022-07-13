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
/**
 * 左侧菜单
 * @returns
 */
const getNav = () => {
  return request({ url: '/menu/nav', method: 'GET' })
}
/**
 * 菜单列表
 * @returns
 */
const getMenuList = () => {
  return request({ url: 'menu/list', method: 'GET' })
}
/**
 * 角色列表
 *  @returns
 */
const getRoleList = () => {
  return request({ url: 'role/list', method: 'GET' })
}
/**
 * 用户列表
 * @returns
 */
const getUserList = () => {
  return request({ url: 'user/list', method: 'GET' })
}

/**
 * 导出封装的接口
 */
export default {
  getCaptcha,
  getLogin,
  getUserInfo,
  getNav,
  getMenuList,
  getRoleList,
  getUserList
}
