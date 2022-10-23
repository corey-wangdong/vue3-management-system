import type { AxiosRequestConfig } from "axios";

const httpServer = (token: string) => {
  const httpDefaultOpts: AxiosRequestConfig = {
    timeout: 10000,
    headers: {
      token: token,
      "X-Requested-With": "XMLHttpRequest",
      Accept: "application/json",
      "Content-Type": "application/json; charset=UTF-8"
    }
  };

  return httpDefaultOpts;
};
export default httpServer;
