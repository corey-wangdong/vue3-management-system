import { defineStore } from "pinia";
import type { IAccount, ILoginInfo } from "@/types";
import { accountLogin, fetchUserInfo } from "@/services/api/login";
import router from "@/router";
import { ElMessage } from "element-plus";
import { userMenus } from "@/utils/map-menu";

const useLoginStore = defineStore("user/login", {
  state: (): ILoginInfo => ({
    token: "",
    userInfo: undefined,
    userMenus
  }),
  actions: {
    async loginAccountAction(account: IAccount) {
      // 获取登录信息
      const loginRes = await accountLogin(account);
      const { token } = loginRes.data;

      // 跳转到首页
      if (token) {
        this.token = token;
        router.push("/main");
      } else {
        ElMessage.error(loginRes.message);
      }
    },
    async getUserInfo() {
      const userRes = await fetchUserInfo();
      if (userRes?.data?.content) {
        this.userInfo = JSON.parse(userRes.data.content);
        return this.userInfo;
      } else {
        this.token = "";
        router.push("/login");
      }
    },
    clearToken() {
      this.token = "";
    }
  },
  persist: {
    enabled: true,
    strategies: [{ storage: localStorage, paths: ["token"] }]
  }
});

export default useLoginStore;
