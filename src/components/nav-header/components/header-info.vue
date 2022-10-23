<template>
  <div class="header-info">
    <div class="info">
      <el-dropdown>
        <span class="user-info">
          <el-avatar :size="25" class="avatar" src="https://joeschmoe.io/api/v1/random" />
          <span class="name">{{ userInfo?.user_name || "" }}</span>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="handleExitClick">
              <el-icon><CircleCloseFilled /></el-icon>
              退出系统
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts" name="header-info">
import { useRouter } from "vue-router";
import useLoginStore from "@/stores/login/login";

defineProps({
  userInfo: {
    type: Object,
    default: () => ({})
  }
});

const router = useRouter();

// 退出登录
function handleExitClick() {
  // 清除 token
  useLoginStore().clearToken();
  router.push("/login");
}
</script>

<style scoped lang="scss">
.header-info {
  display: flex;
  align-items: center;
}

.user-info {
  display: flex;
  align-items: center;
  cursor: pointer;

  .name {
    font-weight: bold;
    margin-left: 8px;
  }
}
</style>
