import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface User {
  id: number
  name: string
  email: string
  avatar?: string
}

export const useUserStore = defineStore('user', () => {
  // 状态
  const user = ref<User | null>(null)
  const isLoggedIn = ref(false)
  const loading = ref(false)

  // 计算属性
  const userName = computed(() => user.value?.name || '未登录')
  const userEmail = computed(() => user.value?.email || '')
  const userAvatar = computed(() => user.value?.avatar || '')

  // 动作
  const login = async (email: string, password: string) => {
    loading.value = true
    try {
      // 模拟API调用
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // 模拟登录成功
      user.value = {
        id: 1,
        name: '张三',
        email: email,
        avatar: 'https://via.placeholder.com/100x100'
      }
      isLoggedIn.value = true
      
      return { success: true, message: '登录成功' }
    } catch (error) {
      return { success: false, message: '登录失败' }
    } finally {
      loading.value = false
    }
  }

  const logout = () => {
    user.value = null
    isLoggedIn.value = false
  }

  const updateProfile = (profileData: Partial<User>) => {
    if (user.value) {
      user.value = { ...user.value, ...profileData }
    }
  }

  return {
    // 状态
    user,
    isLoggedIn,
    loading,
    // 计算属性
    userName,
    userEmail,
    userAvatar,
    // 动作
    login,
    logout,
    updateProfile
  }
})
