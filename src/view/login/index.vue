<template>
  <div class="login-container">
    <div class="content">
      <h1>后台管理系统</h1>
      <el-tabs
        type="border-card"
        class="demo-tabs"
        v-model="loginActive"
        stretch
      >
        <el-tab-pane name="account">
          <template #label>
            <span>
              <el-icon :size="20" class="icon"><avatar /></el-icon>账号登录
            </span>
          </template>
          <Account ref="accountRef"></Account>
        </el-tab-pane>
        <el-tab-pane label="Config">
          <template #label>
            <span>
              <el-icon :size="20" class="icon"><phone /></el-icon>手机号登录
            </span>
          </template>
          Config
        </el-tab-pane>
      </el-tabs>
      <div class="function">
        <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
        <el-link type="primary">找回密码</el-link>
      </div>
      <el-button class="submit-btn" type="primary" @click="handleClickSubmit"
        >点击登录</el-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Avatar, Phone } from '@element-plus/icons-vue'
import Account from './component/acoount.vue'

const loginActive = ref('account')
const isKeepPassword = ref(false)

const accountRef = ref<InstanceType<typeof Account>>(null)

const handleClickSubmit = () => {
  if (loginActive.value === 'account') {
    accountRef.value.login(isKeepPassword.value)
  }
}
</script>

<style lang="less" scoped>
.login-container {
  width: 100%;
  height: 100%;
  background-image: url('@/assets/img/login-bg.svg');
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .content {
    width: 300px;
  }
  .function {
    display: flex;
    margin-top: 10px;
    justify-content: space-between;
  }
  h1 {
    margin-bottom: 50px;
    text-align: center;
  }
  .demo-tabs {
    width: 300px;
  }
  .submit-btn {
    margin-top: 10px;
    width: 100%;
  }
}

::v-deep .icon {
  transform: translateY(2px);
}
</style>
