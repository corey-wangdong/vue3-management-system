<template>
  <div class="login">
    <h2>login</h2>
    <el-row class="mb-4">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </el-row>

    <div>
      <el-checkbox v-model="checked1" label="Option 1" size="large" />
      <el-checkbox v-model="checked2" label="Option 2" size="large" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import hyRequest from '@/service'
  // hyRequest.get({url: '/home/multidata'})
  // .then((res) => {
  //   console.log(res)
  // })

</script>

<style lang="scss">
  .login {

  }
</style>
