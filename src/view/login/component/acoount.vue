<template>
  <div class="account-container">
    <el-form label-width="60px" :model="account" :rules="rules" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref, defineExpose } from 'vue'
import { rules } from '../config/index'
import Form from 'element-plus/es/components/form'
import { cache } from '@/utils'
const formRef = ref<InstanceType<typeof Form>>()

const account = ref({
  name: cache.getCache('name') || '',
  password: cache.getCache('password') || ''
})

const login = (isKeepPassword: boolean) => {
  console.log(isKeepPassword.value)
  formRef.value?.validate((res) => {
    if (isKeepPassword) {
      cache.setCache('name', account.value.name)
      cache.setCache('password', account.value.password)
    }
    console.log(res)
  })
}

defineExpose({
  login
})
</script>

<style lang="less" scoped></style>
