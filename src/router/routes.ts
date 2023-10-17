/*
 * @Description: 
 * @Author: 振顺
 * @Date: 2023-10-13 10:05:09
 * @LastEditTime: 2023-10-17 11:44:31
 * @LastEditors: 振顺
 */
// 对外暴露配置路由(常量路由)
export const constantRoutes = [
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/login/index.vue'),
        meta: {
            title: '登录',
            hidden: true, // 是否隐藏路由
            icon: 'Promotion'
        }
    },
    {
        path: '/',
        name: 'Layout',
        component: () => import('@/layout/index.vue'),
        meta: {
            title: 'layout',
            hidden: false,
            icon: 'Avatar'
        },
        redirect: '/home',
        children: [
            {
                path: '/home',
                component: () => import('@/views/home/index.vue'),
                meta: {
                    title: '首页',
                    hidden: false,
                    icon: 'HomeFilled'
                }
            },
            // {
            //     path: '/ceshi',
            //     component: () => import('@/views/home/index.vue'),
            //     meta: {
            //         title: '测试',
            //         hidden: false,
            //         icon: 'Histogram'
            //     }
            // },
        ],
    },
    {
        path: '/404',
        name: '404',
        component: () => import('@/views/404/index.vue'),
        meta: {
            title: '404',
            hidden: true,
            icon: 'DocumentDelete'
        }
    },
    {
        path: '/screen',
        name: 'Screen',
        component: () => import('@/views/screen/index.vue'),
        meta: {
            title: '数据大屏',
            hidden: false,
            icon: 'Platform'
        }
    },
    {
        path: '/acl',
        name: 'Acl',
        component: () => import('@/layout/index.vue'),
        meta: {
            title: '权限管理',
            hidden: false,
            icon: 'Lock'
        },
        children: [
            {
                path: '/acl/user',
                name: 'User',
                component: () => import('@/views/alc/user/index.vue'),
                meta: {
                    title: '用户管理',
                    hidden: false,
                    icon: 'User'
                }
            },
            {
                path: '/acl/role',
                name: 'Role',
                component: () => import('@/views/alc/role/index.vue'),
                meta: {
                    title: '角色管理',
                    hidden: false,
                    icon: 'UserFilled'
                }
            },
            {
                path: '/acl/permission',
                name: 'Permission',
                component: () => import('@/views/alc/permission/index.vue'),
                meta: {
                    title: '菜单管理',
                    hidden: false,
                    icon: 'Monitor'
                }
            },
        ]
    },
    {
        path: '/product',
        name: 'Product',
        component: () => import('@/layout/index.vue'),
        meta: {
            title: '商品管理',
            hidden: false,
            icon: 'Goods'
        },
        children: [
            {
                path: '/product/trademark',
                name: 'Trademark',
                component: () => import('@/views/product/trademark/index.vue'),
                meta: {
                    title: '品牌管理',
                    hidden: false,
                    icon: 'ShoppingCartFull'
                }
            },
            {
                path: '/product/attr',
                name: 'Attr',
                component: () => import('@/views/product/attr/index.vue'),
                meta: {
                    title: '属性管理',
                    hidden: false,
                    icon: 'ChromeFilled'
                }
            },
            {
                path: '/product/spu',
                name: 'Spu',
                component: () => import('@/views/product/spu/index.vue'),
                meta: {
                    title: 'SPU管理',
                    hidden: false,
                    icon: 'Calendar'
                }
            },
            {
                path: '/product/sku',
                name: 'Sku',
                component: () => import('@/views/product/sku/index.vue'),
                meta: {
                    title: 'SKU管理',
                    hidden: false,
                    icon: 'Orange'
                }
            },
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'Any',
        redirect: '/404',
        meta: {
            title: '任意路由',
            hidden: true,
            icon: 'DataLine'
        }
    }
]