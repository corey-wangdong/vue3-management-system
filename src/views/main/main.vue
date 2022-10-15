<template>
  <div class="main">
    <h2>main</h2>
   <div>{{counterStore.counter}}-{{ counterStore.doubleCounter }}</div>
   <button @click="changeCounter">修改counter</button>
  </div>
</template>

<script setup lang="ts">
import useCounterStore from '@/store/counter'
const counterStore = useCounterStore();
function changeCounter() {
  counterStore.changeCounterAction(999)
}
</script>

<style lang="scss">
  .main {

  }
</style>
