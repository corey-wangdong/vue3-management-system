<template>
  <div class="nav-header">
    <div class="menu-icon" @click="handleFoldClick">
      <el-icon size="28px">
        <component :is="isFold ? 'Expand' : 'Fold'" />
      </el-icon>
    </div>
    <div class="content">
      <header-info />
    </div>
  </div>
</template>

<script setup lang="ts" name="nav-header">
import { ref } from "vue";
import HeaderInfo from "./componetns/header-info.vue";

const emit = defineEmits(["foldChange"]);

const isFold = ref(false);
function handleFoldClick() {
  isFold.value = !isFold.value;
  emit("foldChange", isFold.value);
}
</script>

<style scoped lang="scss">
.nav-header {
  display: flex;
  align-items: center;
  flex: 1;
  height: 100%;

  .menu-icon {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex: 1;
    padding: 0 18px;
  }
}
</style>
