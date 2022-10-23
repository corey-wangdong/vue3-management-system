import { serveType } from "@/types/services/project";
import type { IProxy, IResponseData } from "@/types/services/responseData";
import { apiService } from "../BaseService";

const WAY = serveType.admin_interface;

// 代理接口
export const getDataFormProxy = (path: string, body: { [key: string]: any }) => {
  const sendData = {
    path: path,
    params: JSON.stringify(body)
  };

  return apiService.post<IResponseData<IProxy>>(
    WAY,
    "v1/tool/proxy",
    sendData,
    true // 表示是代理接口
  );
};
