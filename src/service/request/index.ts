import axios, { AxiosError, type AxiosRequestConfig, type AxiosResponse } from "axios";
import type { AxiosInstance } from "axios";
import type { requestConfig } from "./type";

class Request {
  instance: AxiosInstance;

  // request实例 => axios的实例
  constructor(config: requestConfig) {
    this.instance = axios.create(config);

    // 每个instance实例都添加拦截器
    this.instance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        // loading/token
        return config;
      },
      (err: AxiosError) => {
        return err;
      }
    );
    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        return res.data;
      },
      (err: AxiosError) => {
        return err;
      }
    );

    // 针对特定的hyRequest实例添加拦截器
    this.instance.interceptors.request.use(
      config.interceptors?.requestSuccessFn,
      config.interceptors?.requestFailureFn
    );
    this.instance.interceptors.response.use(
      config.interceptors?.responseSuccessFn,
      config.interceptors?.responseFailureFn
    );
  }

  // 封装网络请求的方法
  // T => IHomeData
  request<T = any>(config: requestConfig<T>) {
    // 单次请求的成功拦截处理
    if (config.interceptors?.requestSuccessFn) {
      config = config.interceptors.requestSuccessFn(config);
    }

    // 返回Promise
    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res: any) => {
          // 单词响应的成功拦截处理
          if (config.interceptors?.responseSuccessFn) {
            res = config.interceptors.responseSuccessFn(res);
          }
          resolve(res);
        })
        .catch((err: any) => {
          reject(err);
        });
    });
  }

  get<T = any>(config: requestConfig<T>) {
    return this.request({ ...config, method: "GET" });
  }
  post<T = any>(config: requestConfig<T>) {
    return this.request({ ...config, method: "POST" });
  }
  delete<T = any>(config: requestConfig<T>) {
    return this.request({ ...config, method: "DELETE" });
  }
  patch<T = any>(config: requestConfig<T>) {
    return this.request({ ...config, method: "PATCH" });
  }
}

export default Request;
