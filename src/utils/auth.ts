/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-21 09:45:58
 * @LastEditTime: 2019-08-22 10:13:58
 * @LastEditors: Please set LastEditors
 */
import Cookies from 'js-cookie'

const TokenKey = 'token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token:any) {
  var url = window.location.host
  var Domain = url.slice(url.indexOf('.'))
  if(process.env.NODE_ENV=='development'){
    return Cookies.set(TokenKey, token,{expires: 7})
  }
  if(url.indexOf('alicms')!=-1){
    return Cookies.set(TokenKey, token, { Domain: '.alicms.com',expires: 7})
  }
  if(url.indexOf('sjs')!=-1){
    return Cookies.set(TokenKey, token, { Domain: '.sjs.com',expires: 7})
  }

  if(url.split('.').length>2){
    return Cookies.set(TokenKey, token, { Domain: Domain,expires: 7})
  }else{
    return Cookies.set(TokenKey, token, { Domain: `.${url}`,expires: 7})
  }
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}