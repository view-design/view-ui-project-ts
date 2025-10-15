import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
        meta: {
            title: '首页'
        }
    },
    {
        path: '/demo',
        name: 'Demo',
        component: () => import('@/components/Demo'),
        meta: {
            title: '演示页面'
        }
    },
    {
        path: '/user',
        name: 'UserManagement',
        component: () => import('@/views/UserManagement.vue'),
        meta: {
            title: '用户管理'
        }
    },
    {
        path: '/settings',
        name: 'AppSettings',
        component: () => import('@/views/AppSettings.vue'),
        meta: {
            title: '应用设置'
        }
    }
]

export default routes