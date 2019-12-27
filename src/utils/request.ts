/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-04-25 09:50:49
 * @LastEditTime: 2019-08-23 15:17:21
 * @LastEditors: Please set LastEditors
 */
import axios from 'axios'
// import { Message, MessageBox } from 'element-ui'
import { Toast } from 'vant';
import store from '../store/store'
import { getToken,removeToken } from '@/utils/auth'
import qs from 'qs'
import * as configs from '@/../config/config'
import Router from '@/router/index'

// 创建axios实例
const service = axios.create({
  baseURL: configs[configs.Edition].axiosUrl, // api的base_url
  timeout: 50000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    
    if (config.method === 'post' || config.method === 'put') {
      if (config.headers['Content-Type'] === 'application/json; charset=UTF-8') {
        
      }
      else if (config.headers.post['Content-Type'] === 'application/x-www-form-urlencoded') {
        config.data = qs.stringify(config.data)
      }
    }


    if (config.method === 'get' ) {
      if(config.data){
        Object.keys(config.data).forEach(function(key){
          if(config.data[key]==''){
            config.data[key]=undefined
          }
        });
        config.url +='?'+ qs.stringify(config.data)
      }
    }

    
    if (getToken()) {
      config.headers['token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    }

    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// respone拦截器
service.interceptors.response.use(
  response => {
    /**
     * code为非20000是抛错 可结合自己业务进行修改
     */
    
      const res = response.data
      if (response.status===200 ) {
      }
    //   if(response.config.url.indexOf('/login')!=-1){
    //     return response
    //   }
      return response.data
  },
  error => {
    console.log('err' + error) // for debug
    Toast({
      message: error.msg,
      className:'error',
      type:'fail'
    });
    
    return Promise.reject(error)
  }
)
axios.defaults.withCredentials = true
export default service
