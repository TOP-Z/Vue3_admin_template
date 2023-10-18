/*
 * @Description: 
 * @Author: 振顺
 * @Date: 2023-10-16 11:25:24
 * @LastEditTime: 2023-10-16 11:26:52
 * @LastEditors: 振顺
 */
import type { RouteRecordRaw } from "vue-router"
// 定义小仓库数据state类型
export interface UserState {
    token: string | null
    menuRoutes: RouteRecordRaw[]
    username: string
    avatar: string
}