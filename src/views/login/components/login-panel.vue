<template>
  <div class="login-panel">
    <img class="login-logo" src="http://up.boohee.cn/house/u/site/pc/logo_bar@2x.png" alt="" />
    <div class="login-title">后台管理系统</div>

    <div class="tabs">
      <div class="pane-account">
        <el-form :model="loginInfo" :rules="accountRules" size="large" status-icon ref="formRef">
          <el-form-item label="帐号" prop="account">
            <el-input v-model="loginInfo.account" />
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input show-password v-model="loginInfo.password" />
          </el-form-item>
        </el-form>
      </div>
    </div>
    <el-button class="login-btn" type="primary" size="large" @click="handleLoginBtnClick"> 立即登录 </el-button>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import useLoginStore from "@/stores/login/login";
import type { FormRules, ElForm } from "element-plus";
import { ElMessage } from "element-plus";
import type { IAccount } from "@/types";
const formRef = ref<InstanceType<typeof ElForm>>();
// 1.定义account数据
let loginInfo = reactive<IAccount>({
  account: "",
  password: ""
});

// 2.定义校验规则
const accountRules: FormRules = {
  account: [{ required: true, message: "必须输入帐号信息~", trigger: "blur" }],
  password: [{ required: true, message: "必须输入密码信息~", trigger: "blur" }]
};

// 3.执行帐号的登录逻辑
const loginStore = useLoginStore();
function handleLoginBtnClick() {
  formRef.value?.validate(async (valid: boolean) => {
    if (valid) {
      // 1.获取用户输入的帐号和密码
      const account = loginInfo.account;
      const password = loginInfo.password;

      // 2.向服务器发送网络请求(携带账号和密码)
      loginStore.loginAccountAction({ account, password });
    } else {
      ElMessage.error("请您输入正确的格式后再操作~~.");
    }
  });
}
</script>

<style lang="scss">
.login-panel {
  padding: 40px;
  border: 1px solid #eee;
  box-shadow: 0 0 9px 0px #999;

  .login-logo {
    margin: 0px auto 20px;
    width: 50%;
  }
  .login-title {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 23px;
  }

  .login-btn {
    margin-top: 10px;
    width: 100%;
  }

  .pane-account {
    width: 300px;

    .el-form-item label {
      font-weight: bold;
    }
  }
}
</style>
