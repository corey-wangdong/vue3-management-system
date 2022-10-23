<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :width="isFold ? '60px' : '210px'">
        <nav-menu :is-fold="isFold" />
      </el-aside>
      <el-container>
        <el-header height="48px">
          <nav-header @fold-change="handleFoldChange" :user-info="userInfo" />
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import NavMenu from "@/components/nav-menu/nav-menu.vue";
import NavHeader from "@/components/nav-header/nav-header.vue";
import useLoginStore from "@/stores/login/login";

const loginStore = useLoginStore();

// 是否收缩左侧栏：false 不收缩， true 收缩
const isFold = ref(false);

// 登陆之后拿到的用户信息
let userInfo = ref({});

function handleFoldChange(isFoldValue: boolean) {
  isFold.value = isFoldValue;
}

// 获取用户信息
loginStore.getUserInfo().then(res => {
  if (res) {
    userInfo.value = res;
  }
});
</script>

<style lang="scss">
.main {
  width: 100%;
  height: 100%;
}

.main-content {
  height: 100%;

  .el-aside {
    overflow-x: hidden;
    overflow-y: auto;
    line-height: 200px;
    text-align: left;
    cursor: pointer;
    background-color: #001529;
    transition: width 0.3s linear;
    scrollbar-width: none; /* firefox */
    -ms-overflow-style: none; /* IE 10+ */

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .el-main {
    background-color: #f0f2f5;
  }
}
</style>
