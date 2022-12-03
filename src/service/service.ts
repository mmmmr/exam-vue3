import axios from "axios";
import type {AxiosRequestConfig, AxiosInstance, AxiosResponse} from 'axios'

const BaseUrl = import.meta.env.VITE_APP_BASE_URL

interface VVRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (response: T) => T
  responseInterceptorCatch?: (error: any) => any
}

interface VVRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: VVRequestInterceptors<T>
  showLoading?: boolean
}


class VvRequest {
  instance: AxiosInstance
  interceptors: VVRequestInterceptors
  constructor(config: VVRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors!
    this.instance.interceptors.request.use(this.interceptors?.requestInterceptor,this.interceptors?.requestInterceptorCatch)
    this.instance.interceptors.response.use(this.interceptors?.responseInterceptor,this.interceptors?.responseInterceptorCatch)
  }
  request<T>(config:VVRequestConfig<T>): Promise<T> {
    return new Promise((reslove,reject)=>{
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      this.instance.request<any, T>(config).then(res =>{
        if (config.interceptors?.responseInterceptor) {
          res = config.interceptors.responseInterceptor(res)
        }
        reslove(res)
      }).catch(e =>{
        reject(e)
      })
    })
  }

  get<T>(config: VVRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T>(config: VVRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T>(config: VVRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  put<T>(config: VVRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PUT' })
  }
}

const vvRequst = new VvRequest({
  baseURL: BaseUrl,
  interceptors: {
    requestInterceptor(config) {
      const token = '2345'
      console.log('请求拦截成功1', config);
      config.headers!.Authorization = `token ${token}`
      return config
    },
    requestInterceptorCatch(error) {
      console.log('请求拦截失败1');
      return error
    },
    responseInterceptor(response) {
      console.log('响应拦截成功1', response);
      return response
    },
    responseInterceptorCatch(error) {
      console.log('响应拦截失败1');
      return error
    }
  }
})



export default vvRequst
