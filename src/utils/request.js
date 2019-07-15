import axios from 'axios'
import { Message, Loading } from 'element-ui'
import store from '@/store'
import baseURL from '@/config/index'
import { getToken } from '@/utils/auth'

let loading
let hasActived = false

function startLoading() {
  loading = Loading.service({
    lock: true,
    fullscreen: false,
    text: '加载中……',
    spinner: 'el-icon-loading'
  })
  hasActived = true
}

function endLoading() {
  loading.close()
}

// create an axios instance
const service = axios.create({
  baseURL: baseURL, // api 的 base_url
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'X-Requested-With': 'XMLHttpRequest'
  },
  timeout: 30000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // Do something before request is sent
    if (store.state.user.token) {
      // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
      config.headers['Token'] = getToken()
    }
    if (!hasActived) {
      startLoading()
    }
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  // response => response,
  /**
   * 下面的注释为通过在response里，自定义code来标示请求状态
   * 当code返回如下情况则说明权限有问题，登出并返回到登录页
   * 如想通过 xmlhttprequest 来状态码标识 逻辑可写在下面error中
   * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除
   */
  response => {
    endLoading()
    const res = response.data
    if (res.code !== 200 || !res.success) {
      Message({
        message: res.data,
        type: 'error',
        duration: 5 * 1000
      })
      // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
      if (res.code === 401) {
        Message({
          message: '你已被登出，即将回到登录页',
          type: 'error',
          duration: 1 * 1000,
          onClose: () => {
            store.dispatch('FedLogOut').then(() => {
              location.href = './login.html' // 为了重新实例化vue-router对象 避免bug
            })
          }
        })
      }
      return Promise.reject(new Error('error'))
    } else {
      return response.data
    }
  },
  error => {
    endLoading()
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
