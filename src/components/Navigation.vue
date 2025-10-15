<template>
  <div class="navigation">
    <Menu 
      :theme="appStore.theme" 
      mode="horizontal" 
      :active-name="currentRoute"
      @on-select="handleMenuSelect"
    >
      <MenuItem name="Home">
        <Icon type="ios-home" />
        首页
      </MenuItem>
      <MenuItem name="Demo">
        <Icon type="ios-cube" />
        演示页面
      </MenuItem>
      <MenuItem name="UserManagement">
        <Icon type="ios-people" />
        用户管理
      </MenuItem>
      <MenuItem name="AppSettings">
        <Icon type="ios-settings" />
        应用设置
      </MenuItem>
    </Menu>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAppStore } from '@/stores/app'

const router = useRouter()
const route = useRoute()
const appStore = useAppStore()

const currentRoute = computed(() => route.name as string)

const handleMenuSelect = (name: string) => {
  router.push({ name: name })
}
</script>

<style scoped>
.navigation {
  margin-bottom: 20px;
}
</style>
