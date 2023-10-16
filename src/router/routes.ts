/*
 * @Description: 
 * @Author: 振顺
 * @Date: 2023-10-13 10:05:09
 * @LastEditTime: 2023-10-13 10:06:41
 * @LastEditors: 振顺
 */
// 对外暴露配置路由(常量路由)
export const constantRoutes = [
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/login/index.vue'),
    },
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/home/index.vue'),
    },
    {
        path: '/404',
        name: '404',
        component: () => import('@/views/404/index.vue'),
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'Any',
        redirect: '/404',
    }
]