import axios from 'axios';
axios.defaults.baseURL = ''; //配置baseurl
const ajax = axios.create();
ajax.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);


ajax.interceptors.response.use(
  response => {
    if (response && response.status === 200) {
      return  response;
    }
  },
  error => {
    if (error && error.response && error.response.status === 401) {
     //
    }
    // tslint:disable-next-line:no-console
    return Promise.reject(error);
  }
);

export default ajax;
