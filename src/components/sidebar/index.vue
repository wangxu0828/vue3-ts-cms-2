<template>
  <div class="sidebar-container">
    <template>
      <el-menu>
        <template v-for="item in userMenu" :key="item.id">
          <template v-if="item.type === 1">
            <el-sub-menu :index="item.url">
              <template #title>
                <span>{{ item.name }}</span>
              </template>
              <template v-for="subitem in item.children" :key="subitem.id">
                <el-menu-item :index="subitem.url">{{
                  subitem.name
                }}</el-menu-item>
              </template>
            </el-sub-menu>
          </template>
          <template>
            <el-menu-item :index="item.url">{{ item.name }}</el-menu-item>
          </template>
        </template>
      </el-menu>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from '@/store'
const store = useStore()

const userMenu = computed(() => {
  return store.state.login.userMenu
})
console.log(userMenu.value)
</script>

<style lang="less" scoped>
.sidebar-container {
  height: 100%;
}
</style>
