/*
 * @Description: 
 * @Author: 振顺
 * @Date: 2023-10-13 10:05:09
 * @LastEditTime: 2023-10-16 17:47:18
 * @LastEditors: 振顺
 */
// 对外暴露配置路由(常量路由)
export const constantRoutes = [
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/login/index.vue'),
        meta: {
            title: '登录'
        }
    },
    {
        path: '/',
        name: 'Layout',
        component: () => import('@/layout/index.vue'),
        meta: {
            title: 'layout'
        },
        children: [
            {
                path: '/home',
                component: () => import('@/views/home/index.vue'),
                meta: {
                    title: '首页'
                }
            }
        ],
    },
    {
        path: '/404',
        name: '404',
        component: () => import('@/views/404/index.vue'),
        meta: {
            title: '404'
        }
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'Any',
        redirect: '/404',
        meta: {
            title: '任意路由'
        }
    }
]