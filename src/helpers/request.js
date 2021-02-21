import axios from 'axios';
import baseURLConfig from './config-baseURL'

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
      res.status === 200 ? resolve(res.data) : reject(res.data);
    }).catch(err => {
      reject({msg: '网络异常'})
    })
  })
}