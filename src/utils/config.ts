/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-21 10:18:44
 * @LastEditTime: 2019-08-23 10:23:02
 * @LastEditors: Please set LastEditors
 */
'use strict'
module.exports = {
  Edition:'tsjs',
  variableName:process.env.NODE_ENV === 'production'? '/app': '',
  domainName:'SJS',
  linkUrl:'https://www.sjs.com',
  'sjs':{
    axiosUrl: "https://sjs-api.alicms.com",
    codeUrl: "https://sjs-api.alicms.com/user",
    socketUrl:"wss://sjs-api.alicms.com/socket/websocket",
    AppOrH5Url:"https://sjs.alicms.com/app/#/",
  },
};

