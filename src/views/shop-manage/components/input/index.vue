<template>
  <div class="input-box">
    <el-form-item
      :label="props.name"
      prop="age"
    >
      <el-input
        type="text"
        placeholder="Please input"
        v-model="value"
        @change="props.handleChange(props.type, props.value)"
      />
    </el-form-item>
  </div>
</template>

<script lang="ts" setup>
  const props = defineProps({
    type: {
      type: String,
      default:''
    },
    name: {
      type: String,
      default:''
    },
    value: {
      type: String,
      default:''
    },
    handleChange:{
      type: Function,
      default:(type,value) => {}
    }
  })
</script>

<style type="scss" scoped>
.input-box {
  width: 100%;
  display: flex;
  align-items: center;
}


.input-name {
    width: 100px;
}
</style>