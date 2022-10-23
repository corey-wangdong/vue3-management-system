import getBaseUrl from "./getbBaseURL";
import { get, post, delete_request, put } from "./axios";
import type { HttpRequestConfig, serveType } from "@/types/services/project";
export default class BaseService {
  private handelGetUrl = (url: string, params: any): string => {
    let curUrl = url;
    if (params) {
      const paramsArray: string[] = [];
      Object.keys(params).forEach(key => {
        if (params[key] !== undefined) {
          paramsArray.push(`${key}=${params[key]}`);
        }
      });
      if (url.search(/\?/) === -1) {
        curUrl += `?${paramsArray.join("&")}`;
      } else {
        curUrl += `&${paramsArray.join("&")}`;
      }
    }
    return curUrl;
  };

  getFullPath = (micro: serveType, path: string) => `${getBaseUrl(micro)}${path}`;

  getByQuery = <T>(micro: serveType, path: string, data: any = {}, config?: HttpRequestConfig): Promise<T> => {
    const curPath = this.handelGetUrl(path, data);
    return this.get<T>(micro, curPath, config);
  };

  get = <T>(micro: serveType, path: string, config?: HttpRequestConfig): Promise<T> =>
    get<T>(this.getFullPath(micro, path), config);

  post = <T>(micro: serveType, path: string, data: any = {}, isProxy: boolean = false, config?: HttpRequestConfig): Promise<T> =>
    post<T>(this.getFullPath(micro, path), data, isProxy, config);

  delete = <T>(micro: serveType, path: string, config?: HttpRequestConfig): Promise<T> =>
    delete_request<T>(this.getFullPath(micro, path), config);

  put = <T>(micro: serveType, path: string, data: any = {}, config?: HttpRequestConfig): Promise<T> =>
    put<T>(this.getFullPath(micro, path), data, config);
}

export const apiService = new BaseService();
