import { defineStore } from "pinia";
import { localCache } from "@/utils/cache";
import { LOGIN_TOKEN } from "@/utils/constans";
import type { IAccount } from "@/types";

const useLoginStore = defineStore("login", {
  state: () => ({
    id: "",
    token: localCache.getCache(LOGIN_TOKEN) ?? "",
    name: ""
  }),
  actions: {
    async loginAccountAction(account: IAccount) {
      console.log("account----", account);

      // 1.账号登录, 获取token等信息
      // const loginResult = await accountLoginRequest(account)
      // this.id = loginResult.data.id
      // this.name = loginResult.data.name
      // this.token = loginResult.data.token

      // 2.进行本地缓存
      localCache.setCache(LOGIN_TOKEN, account);
      return true;
    }
  }
});

export default useLoginStore;
