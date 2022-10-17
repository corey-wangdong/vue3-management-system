<template>
  <div class="header-info">
    <div class="info">
      <el-dropdown>
        <span class="user-info">
          <el-avatar
            :size="30"
            class="avatar"
            src="https://p3-passport.byteimg.com/img/user-avatar/9e728415ccc46ecd88164afe2d9dbd15~64x64.awebp"
          />
          <span class="name">Corey</span>
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
import { localCache } from "@/utils/cache";

const router = useRouter();
function handleExitClick() {
  localCache.removeCache("login/token");
  localCache.removeCache("userInfo");
  localCache.removeCache("userMenus");
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
    margin-left: 8px;
  }
}

.info {
  :global(.el-dropdown-menu__item) {
    line-height: 36px !important;
    padding: 6px 22px;
  }
}
</style>
