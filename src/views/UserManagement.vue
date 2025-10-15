<template>
  <div class="user-management">
    <Card>
      <template #title>
        <Icon type="ios-people" />
        用户管理
      </template>
      
      <div class="user-actions">
        <Button 
          type="primary" 
          @click="handleLogin"
          :loading="userStore.loading"
          v-if="!userStore.isLoggedIn"
        >
          登录
        </Button>
        <Button 
          type="error" 
          @click="handleLogout"
          v-if="userStore.isLoggedIn"
        >
          退出登录
        </Button>
      </div>

      <div class="user-profile" v-if="userStore.isLoggedIn">
        <Card title="用户资料">
          <div class="profile-content">
            <div class="avatar-section">
              <Avatar 
                :src="userStore.userAvatar" 
                size="large"
                icon="ios-person"
              />
            </div>
            <div class="profile-info">
              <p><strong>用户名：</strong>{{ userStore.userName }}</p>
              <p><strong>邮箱：</strong>{{ userStore.userEmail }}</p>
            </div>
          </div>
        </Card>
      </div>

      <div class="login-form" v-if="!userStore.isLoggedIn">
        <Card title="登录表单">
          <Form :model="loginForm" :rules="loginRules" ref="loginFormRef">
            <FormItem label="邮箱" prop="email">
              <Input v-model="loginForm.email" placeholder="请输入邮箱" />
            </FormItem>
            <FormItem label="密码" prop="password">
              <Input 
                v-model="loginForm.password" 
                type="password" 
                placeholder="请输入密码" 
              />
            </FormItem>
            <FormItem>
              <Button 
                type="primary" 
                @click="handleLogin"
                :loading="userStore.loading"
                long
              >
                登录
              </Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useUserStore } from '@/stores/user'
import { Message } from 'view-ui-plus'

const userStore = useUserStore()

const loginFormRef = ref()
const loginForm = reactive({
  email: 'admin@example.com',
  password: '123456'
})

const loginRules = {
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, message: '密码长度不能少于6位', trigger: 'blur' }
  ]
}

const handleLogin = async () => {
  if (!userStore.isLoggedIn) {
    const valid = await loginFormRef.value?.validate()
    if (!valid) return

    const result = await userStore.login(loginForm.email, loginForm.password)
    if (result.success) {
      Message.success(result.message)
    } else {
      Message.error(result.message)
    }
  }
}

const handleLogout = () => {
  userStore.logout()
  Message.success('已退出登录')
}
</script>

<style scoped>
.user-management {
  padding: 20px;
}

.user-actions {
  margin-bottom: 20px;
}

.user-profile {
  margin-bottom: 20px;
}

.profile-content {
  display: flex;
  align-items: center;
  gap: 20px;
}

.avatar-section {
  flex-shrink: 0;
}

.profile-info p {
  margin: 10px 0;
  font-size: 16px;
}

.login-form {
  max-width: 400px;
}
</style>
