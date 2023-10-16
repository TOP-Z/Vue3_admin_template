/*
 * @Description: 
 * @Author: 振顺
 * @Date: 2023-10-13 09:47:23
 * @LastEditTime: 2023-10-13 10:11:14
 * @LastEditors: 振顺
 */
// 通过vue-router插件实现模板路由配置
import { createRouter, createWebHashHistory } from 'vue-router';
import { constantRoutes } from '@/router/routes'

// 创建路由器
let router = createRouter({
    history: createWebHashHistory(),
    routes: constantRoutes,
    // 滚动行为
    scrollBehavior() {
        return {
            left: 0,
            top: 0
        }
    }
});
export default router;