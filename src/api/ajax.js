/**
 * ajax请求模块
 * 返回值：promise对象(异步返回的数据是：response.data)
 */
import axios from 'axios'
export default function ajax (url, data = {}, type = "GET") {
  return new Promise(function (resolve, reject) {
    //执行异步请求
    let promise
    if (type === 'GET') {
      //准备url、query参数
      let dataStr = ''//数据拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      //发送get请求
      promise = axios.get(url)
    } else {
      //发送post请求
      promise = axios.post(url, data)
    }
    //二次封装
    promise.then(response => {
      //成功了调用
      resolve(response.data)
    }, reason => {
      reject(reason)
    })
  })
}