import axios from 'axios';
import baseURLConfig from './config-baseURL'
import { Message } from 'element-ui'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.baseURL = baseURLConfig.baseURL;
axios.defaults.withCredentials = true; // 配置跨域请求

export default function request(url, type='GET', data={}) {
  return new Promise((resolve, reject) => {
    let option = {
      url,
      method: type,
      validateStatus(status) {
        return (status >= 200 && status < 300) || status === 400
      }
    }
    type.toLowerCase === 'get' ? option.params = data : option.data = data;
    axios(option).then(res => {
      // res.status === 200 ? resolve(res.data) : reject(res.data);
      if(res.status === 200) {
        resolve(res.data)
      } else {
        Message.error(res.data.msg)
        reject(res.data)
      }
    }).catch(err => {
      Message.error('啊哦，出错了，请重试');
      reject({msg: '网络异常'})
    })
  })
}