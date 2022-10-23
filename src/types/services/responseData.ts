export interface IResponseData<T> {
  code: number;
  message: string;
  now?: number;
  data: T;
}

export interface IProxy {
  content: string;
  debug: string;
}

export type RSBoolean = IResponseData<boolean>;

export type RSString = IResponseData<string>;
