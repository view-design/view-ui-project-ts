# Pinia 状态管理 + 路由工程实例

这是一个基于 Vue 3 + TypeScript + View UI Plus + Pinia + Vue Router 的完整工程实例。

## 功能特性

- ✅ Vue 3 Composition API
- ✅ TypeScript 支持
- ✅ View UI Plus 组件库
- ✅ Pinia 状态管理
- ✅ Vue Router 路由管理
- ✅ Vite 构建工具

## 项目结构

```
src/
├── components/          # 组件目录
│   ├── Demo.tsx        # 原始演示组件
│   ├── Demo.module.less
│   └── Navigation.vue  # 导航组件
├── stores/             # Pinia 状态管理
│   ├── user.ts         # 用户状态管理
│   └── app.ts          # 应用状态管理
├── views/              # 页面组件
│   ├── Home.vue        # 首页
│   ├── UserManagement.vue  # 用户管理页面
│   └── AppSettings.vue     # 应用设置页面
├── router/             # 路由配置
│   ├── index.ts        # 路由实例
│   └── routes.ts       # 路由定义
├── styles/             # 样式文件
├── App.tsx             # 根组件
└── main.ts             # 应用入口
```

## Pinia 状态管理

### 用户状态 (stores/user.ts)

管理用户登录状态、用户信息等：

```typescript
// 状态
const user = ref<User | null>(null)
const isLoggedIn = ref(false)
const loading = ref(false)

// 计算属性
const userName = computed(() => user.value?.name || '未登录')

// 动作
const login = async (email: string, password: string) => { ... }
const logout = () => { ... }
const updateProfile = (profileData: Partial<User>) => { ... }
```

### 应用状态 (stores/app.ts)

管理应用全局状态：

```typescript
// 状态
const theme = ref<'light' | 'dark'>('light')
const sidebarCollapsed = ref(false)
const pageTitle = ref('View UI Plus Admin')
const loading = ref(false)

// 动作
const toggleTheme = () => { ... }
const toggleSidebar = () => { ... }
const setPageTitle = (title: string) => { ... }
```

## 路由配置

### 路由定义 (router/routes.ts)

```typescript
const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
        meta: { title: '首页' }
    },
    {
        path: '/user',
        name: 'UserManagement',
        component: () => import('@/views/UserManagement.vue'),
        meta: { title: '用户管理' }
    },
    {
        path: '/settings',
        name: 'AppSettings',
        component: () => import('@/views/AppSettings.vue'),
        meta: { title: '应用设置' }
    }
]
```

## 页面功能

### 1. 首页 (Home.vue)
- 展示项目特性
- 显示用户登录状态
- 欢迎信息

### 2. 用户管理 (UserManagement.vue)
- 用户登录/退出功能
- 用户信息展示
- 登录表单验证

### 3. 应用设置 (AppSettings.vue)
- 主题切换（浅色/深色）
- 侧边栏状态控制
- 页面标题设置
- 加载状态演示

## 使用方法

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm run dev
```

### 构建生产版本
```bash
npm run build
```

## 技术栈

- **Vue 3.4.0** - 渐进式 JavaScript 框架
- **TypeScript 5.3.0** - JavaScript 的超集
- **View UI Plus 1.3.1** - 基于 Vue 3 的组件库
- **Pinia** - Vue 的状态管理库
- **Vue Router 4.2.0** - Vue 官方路由管理器
- **Vite 6.0.0** - 下一代前端构建工具

## 开发说明

1. 所有组件都使用 Vue 3 Composition API
2. 状态管理使用 Pinia，支持 TypeScript
3. 路由使用 Vue Router 4，支持懒加载
4. 组件库使用 View UI Plus
5. 样式使用 Less 预处理器

## 扩展建议

1. 添加更多业务状态管理
2. 实现路由守卫
3. 添加权限管理
4. 集成 API 请求库
5. 添加单元测试
