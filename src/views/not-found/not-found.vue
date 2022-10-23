<template>
  <div class="not-found">
    <el-result title="页面走丢了" sub-title="你请求的当前页面不存在哦">
      <template #icon> </template>
      <template #extra>
        <el-button type="primary" @click="handelGoBack">Back</el-button>
      </template>
    </el-result>
  </div>
</template>

<script setup lang="ts">
import router from "@/router";

const handelGoBack = () => {
  router.back();
};
</script>

<style lang="scss">
.not-found {
}
</style>
