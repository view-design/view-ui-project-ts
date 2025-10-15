<template>
  <div class="app-settings">
    <Card>
      <template #title>
        <Icon type="ios-settings" />
        应用设置
      </template>
      
      <div class="settings-content">
        <Card title="主题设置">
          <div class="setting-item">
            <span>当前主题：{{ appStore.theme === 'light' ? '浅色' : '深色' }}</span>
            <Button @click="appStore.toggleTheme" style="margin-left: 10px">
              <Icon :type="appStore.theme === 'light' ? 'ios-moon' : 'ios-sunny'" />
              切换主题
            </Button>
          </div>
        </Card>

        <Card title="侧边栏设置">
          <div class="setting-item">
            <span>侧边栏状态：{{ appStore.sidebarCollapsed ? '收起' : '展开' }}</span>
            <Button @click="appStore.toggleSidebar" style="margin-left: 10px">
              <Icon :type="appStore.sidebarCollapsed ? 'ios-menu' : 'ios-close'" />
              切换侧边栏
            </Button>
          </div>
        </Card>

        <Card title="页面标题设置">
          <div class="setting-item">
            <Input 
              v-model="newTitle" 
              placeholder="请输入新的页面标题"
              style="width: 300px; margin-right: 10px"
            />
            <Button @click="updatePageTitle" type="primary">
              更新标题
            </Button>
          </div>
          <p style="margin-top: 10px; color: #666;">
            当前标题：{{ appStore.pageTitle }}
          </p>
        </Card>

        <Card title="加载状态演示">
          <div class="setting-item">
            <Button 
              @click="toggleLoading" 
              :loading="appStore.loading"
              type="primary"
            >
              {{ appStore.loading ? '加载中...' : '开始加载' }}
            </Button>
          </div>
        </Card>

        <Card title="状态信息">
          <div class="state-info">
            <h4>当前应用状态：</h4>
            <ul>
              <li>主题：{{ appStore.theme }}</li>
              <li>侧边栏：{{ appStore.sidebarCollapsed ? '收起' : '展开' }}</li>
              <li>页面标题：{{ appStore.pageTitle }}</li>
              <li>加载状态：{{ appStore.loading ? '加载中' : '空闲' }}</li>
            </ul>
          </div>
        </Card>
      </div>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAppStore } from '@/stores/app'
import { Message } from 'view-ui-plus'

const appStore = useAppStore()
const newTitle = ref('')

const updatePageTitle = () => {
  if (newTitle.value.trim()) {
    appStore.setPageTitle(newTitle.value.trim())
    Message.success('页面标题已更新')
    newTitle.value = ''
  } else {
    Message.warning('请输入有效的标题')
  }
}

const toggleLoading = () => {
  if (appStore.loading) {
    appStore.setLoading(false)
    Message.success('加载完成')
  } else {
    appStore.setLoading(true)
    // 模拟加载过程
    setTimeout(() => {
      appStore.setLoading(false)
      Message.success('加载完成')
    }, 2000)
  }
}
</script>

<style scoped>
.app-settings {
  padding: 20px;
}

.settings-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.setting-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.state-info {
  background-color: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
}

.state-info ul {
  list-style: none;
  padding: 0;
  margin: 10px 0 0 0;
}

.state-info li {
  padding: 5px 0;
  border-bottom: 1px solid #e9ecef;
}

.state-info li:last-child {
  border-bottom: none;
}
</style>
