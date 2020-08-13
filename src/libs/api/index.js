import Taro from '@tarojs/taro'
import { HTTP_STATUS } from '../status'
// import { logError } from '../utils'

const token = ''
const base = process.env.NODE_ENV === 'development' ? 'http://test.api.infostation.xthktech.cn' : 'prod'
export default {
  baseOptions(params, method = 'GET') {
    let { url, data } = params
    // let token = getApp().globalData.token
    // if (!token) login()
    console.log('params', params)
    let contentType = 'application/x-www-form-urlencoded'
    contentType = params.contentType || contentType
    const option = {
      isShowLoading: false,
      loadingText: '正在加载',
      url: base + url,
      data: data,
      method: method,
      header: { 'content-type': contentType, 'token': token },
      // success(res) {
      //   // if (res.statusCode === HTTP_STATUS.NOT_FOUND) {
      //   //   return logError('api', '请求资源不存在')
      //   // } else if (res.statusCode === HTTP_STATUS.BAD_GATEWAY) {
      //   //   return logError('api', '服务端出现了问题')
      //   // } else if (res.statusCode === HTTP_STATUS.FORBIDDEN) {
      //   //   return logError('api', '没有权限访问')
      //   // } else if (res.statusCode === HTTP_STATUS.SUCCESS) {
      //   //   return res.data
      //   // }
      //   console.log(res,'in')
      //   switch (res.statusCode) {
      //     case HTTP_STATUS.SUCCESS:
      //       return res
      //     case HTTP_STATUS.AUTHENTICATE:
      //       console.log('登录失效')
      //       return 
      //     default:
      //       return res.data
      //   }
      // },
      // error(e) {
      //   return e
      // }
    }
    return new Promise((resolve, reject) => {
      Taro.request(option).then(res => {
        switch (res.statusCode) {
          case HTTP_STATUS.SUCCESS:
            return resolve(res.data)
          case HTTP_STATUS.AUTHENTICATE:
            console.log('登录失效')
            return reject(res.data)
          default:
            return reject(res.data)
        }
      })
      .catch(rej=>{
        reject(rej.data)
      })
    })

  },
  get(url, data = '') {
    let option = { url, data }
    return this.baseOptions(option)
  },
  post: function (url, data, contentType) {
    let params = { url, data, contentType }
    return this.baseOptions(params, 'POST')
  }
}
