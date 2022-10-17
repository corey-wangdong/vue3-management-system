import { defineStore } from "pinia";
import { localCache } from "@/utils/cache";
import { LOGIN_TOKEN } from "@/utils/constans";
import type { IAccount } from "@/types";
import { accountLogin } from "@/service/login/login";

const userMenus = [
  {
    id: "1",
    name: "商店管理模块",
    icon: "HotWater",
    children: [
      { id: "1-1", name: "商品订单", url: "/main/shop/order" },
      { id: "1-2", name: "退款管理", url: "/main/shop/refund" },
      { id: "1-3", name: "退货管理", url: "/main/shop/refund-goods" }
    ]
  },
  {
    id: "2",
    name: "抽奖管理",
    icon: "Bowl"
  }
];
const useLoginStore = defineStore("login", {
  state: () => ({
    token: localCache.getCache(LOGIN_TOKEN) ?? "",
    userMenus
  }),
  actions: {
    async loginAccountAction(account: IAccount) {
      console.log("account----", account);
      // 1.获取登录信息
      const loginRes = await accountLogin(account);
      console.log("loginRes----", loginRes);
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
