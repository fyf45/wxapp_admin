import router from '@/router';
import axios from 'axios';
import QS from 'qs';
import {
  Loading,
  Message
} from 'element-ui';

// 超时时间
// axios.defaults.timeout = 5000;
// http请求拦截器
var loadinginstace;
axios.interceptors.request.use(config => {
  // element ui Loading方法
  loadinginstace = Loading.service({
    // target: '.banner-middle,.main-box',
    fullscreen: true,
    text: '拼命加载中...'
  });
  return config;
}, error => {
  loadinginstace.close();
  Message.error({
    message: '加载超时'
  });
  return Promise.reject(error);
});
// http响应拦截器
axios.interceptors.response.use(response => { // 响应成功关闭loading
  loadinginstace.close();
  if (response.status == 200) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(response);
  }
}, error => {
  loadinginstace.close();
  // Message.error({
  //   message: '网络不给力呀！请稍候再试'
  // });
  // return Promise.reject(error);
  if (error.response.status) {
    switch (error.response.status) {
      // 401: 未登录
      // 未登录则跳转登录页面，并携带当前页面的路径
      // 在登录成功后返回当前页面，这一步需要在登录页操作。
      case 401:
        router.replace({
          path: '/login',
          query: {
            redirect: router.currentRoute.fullPath
          }
        });
        break;
        // 403 token过期
        // 登录过期对用户进行提示
        // 清除本地token和清空vuex中token对象
        // 跳转登录页面
      case 403:
        Message.error({
          message: '登录过期，请重新登录',
          duration: 1000,
          showClose: true
        });
        // 清除token
        // localStorage.removeItem('token');
        // store.commit('loginSuccess', null);
        // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
        setTimeout(() => {
          router.replace({
            path: '/login',
            query: {
              redirect: router.currentRoute.fullPath
            }
          });
        }, 1000);
        break;
        // 404请求不存在
      case 404:
        Message.error({
          message: '网络请求不存在',
          duration: 1500,
          showClose: true
        });
        break;
        // 其他错误，直接抛出错误提示
      default:
        Message.error({
          message: error.response.data.message,
          duration: 1500,
          showClose: true
        });
    }
    return Promise.reject(error.response);
  }
});

//  * get方法，对应get请求
//  * @param {String} url [请求的url地址]
//  * @param {Object} params [请求时携带的参数]
export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
        params: params
      })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data)
      })
  });
}
//  * post方法，对应post请求
//  * @param {String} url [请求的url地址]
//  * @param {Object} params [请求时携带的参数]

export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, QS.stringify(params))
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data)
      })
  });
}
