<template>
  <div class="login-panel">
    <h1>后台管理系统</h1>

    <div class="tabs">
      <el-tabs v-model="activeName" :stretch="stretch">
        <el-tab-pane label="帐户密码登录" name="account">
          <div class="pane-account">
            <el-form :model="account" :rules="accountRules" size="large" status-icon ref="formRef">
              <el-form-item label="帐号" prop="name">
                <el-input v-model="account.name" />
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input show-password v-model="account.password" />
              </el-form-item>
            </el-form>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>

    <el-button class="login-btn" type="primary" size="large" @click="handleLoginBtnClick">
      立即登录
    </el-button>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import useLoginStore from "@/store/login/login";
import type { FormRules, ElForm } from "element-plus";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
import type { IAccount } from "@/types";
const router = useRouter();
const activeName = ref("account");
const formRef = ref<InstanceType<typeof ElForm>>();
// 1.定义account数据
let account = reactive<IAccount>({
  name: "",
  password: ""
});

const stretch = ref(true);
// 2.定义校验规则
const accountRules: FormRules = {
  name: [
    { required: true, message: "必须输入帐号信息~", trigger: "blur" },
    {
      pattern: /^[a-z0-9]{6,20}$/,
      message: "必须是6~20数字或字母组成~",
      trigger: "blur"
    }
  ],
  password: [
    { required: true, message: "必须输入密码信息~", trigger: "blur" },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: "必须是3位以上数字或字母组成",
      trigger: "blur"
    }
  ]
};

// 3.执行帐号的登录逻辑
const loginStore = useLoginStore();
function handleLoginBtnClick() {
  if (activeName.value === "account") {
    formRef.value?.validate(async (valid: boolean) => {
      console.log("valid----", valid);
      if (valid) {
        // 1.获取用户输入的帐号和密码
        const name = account.name;
        const password = account.password;

        // 2.向服务器发送网络请求(携带账号和密码)
        const result = await loginStore.loginAccountAction({ name, password });
        if (result) {
          router.push("/main");
        }
      } else {
        ElMessage.error("请您输入正确的格式后再操作~~.");
      }
    });
  }
}
</script>

<style lang="scss">
.login-panel {
  .login-btn {
    margin-top: 10px;
    width: 100%;
  }
}
</style>
