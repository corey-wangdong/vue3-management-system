import useLoginStore from "@/stores/login/login";
import type { HttpRequestConfig } from "@/types/services/project";
import type { IResponseData } from "@/types/services/responseData";
import type { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import axios from "axios";
import { ElMessage } from "element-plus";
import httpServer from "./httpMiddleware";

export type HttpResponseConfig = IResponseData<any> & AxiosResponse;

// 错误处理
const errorState = (err: AxiosError): void => {
  let errText = "";
  switch (err?.response?.status) {
    case 401:
      errText = "无效的token";
      break;
    case 404:
      errText = "报告，找不到资源";
      break;
    default:
      errText = "哎呦，服务器出故障了≧﹏≦";
      break;
  }
  ElMessage.error(errText);
};
const axiosInstance: AxiosInstance = axios.create();
/**
 * request 拦截器
 */
axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

/**
 * response 拦截器
 */
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    const { data } = response;
    if (data && (data.success === false || data.status === false)) {
      ElMessage.error(data.msg || data.message);
    }
    return response;
  },
  (error: AxiosError) => {
    console.log("err in http", error.message);
    if (error.message !== "notReport") {
      errorState(error);
    }
    return Promise.reject(error.response);
  }
);
function configMiddleware(config?: HttpRequestConfig): AxiosRequestConfig {
  const token = useLoginStore().token;
  if (config?.loadingConfig && Object.keys(config?.loadingConfig).length > 0) {
    ElMessage(config.loadingConfig);
  } else if (config?.needLoading) {
    ElMessage({
      message: "加载中…",
      type: "warning"
    });
  }
  if (config) {
    delete config.loadingConfig;
    delete config.needLoading;
  }
  return {
    ...httpServer(token),
    ...config
  };
}
export function get<T>(url: string, config?: HttpRequestConfig): Promise<T> {
  return axiosInstance.get<T>(url, configMiddleware(config)).then((res: AxiosResponse) => res.data);
}
export function post<T>(url: string, data: any, isProxy?: boolean, config?: HttpRequestConfig): Promise<T> {
  return axiosInstance.post<T>(url, data, configMiddleware(config)).then((res: AxiosResponse) => {
    const data = res.data;
    if (isProxy) {
      if (data && data.code === 0 && data.data?.content) {
        console.log("response.data.content----", JSON.parse(data.data.content));
      } else {
        ElMessage.error(data?.data?.message || "Error");
      }
    }
    return data;
  });
}

// 避免占用关键字 delete 改用 delete_req
export function delete_request<T>(url: string, config?: HttpRequestConfig): Promise<T> {
  return axiosInstance.delete<T>(url, configMiddleware(config)).then((res: AxiosResponse) => res.data);
}

export function put<T>(url: string, data: any, config?: HttpRequestConfig): Promise<T> {
  return axiosInstance.put<T>(url, data, configMiddleware(config)).then((res: AxiosResponse) => res.data);
}

export default axiosInstance;
