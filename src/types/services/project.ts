import type { AxiosRequestConfig } from "axios";
import type { Component, VNode } from "vue";

export interface UrlInter {
  [propName: string]: string;
}

export type ProjectInter = {
  [key in serveType]: {
    baseURL: string;
  };
};

export enum serveType {
  base_api = "base_api",
  admin_interface = "admin_interface",
  mock = "mock"
}

export interface HttpRequestLoadingConfig {
  needLoading?: boolean;
  loadingConfig?: {
    message?: string | VNode | (() => VNode);
    type?: "success" | "warning" | "info" | "error";
    icon?: string | Component;
    duration?: number;
    ["show-close"]: boolean;
    center: boolean;
  };
}
export type HttpRequestConfig = AxiosRequestConfig & HttpRequestLoadingConfig;
