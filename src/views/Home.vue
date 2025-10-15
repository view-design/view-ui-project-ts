<template>
  <div class="home-page">
    <Card>
      <template #title>
        <Icon type="ios-home" />
        首页
      </template>
      <div class="welcome-content">
        <h2>欢迎使用 View UI Plus Admin</h2>
        <p>这是一个基于 Vue 3 + TypeScript + View UI Plus + Pinia 的管理系统模板</p>
        
        <div class="feature-list">
          <h3>功能特性：</h3>
          <ul>
            <li>✅ Vue 3 Composition API</li>
            <li>✅ TypeScript 支持</li>
            <li>✅ View UI Plus 组件库</li>
            <li>✅ Pinia 状态管理</li>
            <li>✅ Vue Router 路由管理</li>
            <li>✅ Vite 构建工具</li>
          </ul>
        </div>

        <div class="user-info" v-if="userStore.isLoggedIn">
          <h3>用户信息：</h3>
          <p>欢迎回来，{{ userStore.userName }}！</p>
          <p>邮箱：{{ userStore.userEmail }}</p>
        </div>
      </div>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
</script>

<style scoped>
.home-page {
  padding: 20px;
}

.welcome-content {
  text-align: center;
}

.feature-list {
  margin: 20px 0;
  text-align: left;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
}

.feature-list ul {
  list-style: none;
  padding: 0;
}

.feature-list li {
  padding: 8px 0;
  border-bottom: 1px solid #f0f0f0;
}

.user-info {
  margin-top: 30px;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  text-align: left;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
}
</style>
