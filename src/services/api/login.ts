import useLoginStore from "@/stores/login/login";
import type { IAccount } from "@/types";
import { getDataFormProxy } from "./proxy";
import { apiService } from "../BaseService";
import { serveType } from "@/types/services/project";
import type { IResponseData } from "@/types/services/responseData";

const WAY = serveType.admin_interface;

//  登录接口
export const accountLogin = (account: IAccount) =>
  apiService.post<IResponseData<{ token: string }>>(WAY, "v1/tool/login", account);

// 获取登录用户信息
export const fetchUserInfo = async () => {
  const token = useLoginStore().token;
  return await getDataFormProxy("/auth.service.api.Admin/AdminTokenCheck", {
    token: token
  });
};
