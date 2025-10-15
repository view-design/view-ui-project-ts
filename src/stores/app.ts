import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  // 状态
  const theme = ref<'light' | 'dark'>('light')
  const sidebarCollapsed = ref(false)
  const pageTitle = ref('View UI Plus Admin')
  const loading = ref(false)

  // 动作
  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
    // 这里可以添加主题切换的逻辑
    document.documentElement.setAttribute('data-theme', theme.value)
  }

  const toggleSidebar = () => {
    sidebarCollapsed.value = !sidebarCollapsed.value
  }

  const setPageTitle = (title: string) => {
    pageTitle.value = title
    document.title = title
  }

  const setLoading = (status: boolean) => {
    loading.value = status
  }

  return {
    // 状态
    theme,
    sidebarCollapsed,
    pageTitle,
    loading,
    // 动作
    toggleTheme,
    toggleSidebar,
    setPageTitle,
    setLoading
  }
})
