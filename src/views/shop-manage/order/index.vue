<template>
  <div class="order">
    <h2>order页面</h2>
    <el-select
      v-model="value1"
      multiple
      placeholder="Select"
      style="width: 240px"
      @change="handleChange"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value1 = ref([])

const handleChange = () => {
  console.log('value1----',value1.value);

}

const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]



</script>

<style lang="scss">
.order {
}
</style>
