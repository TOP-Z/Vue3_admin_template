/*
 * @Description: 
 * @Author: 振顺
 * @Date: 2023-10-16 11:25:24
 * @LastEditTime: 2023-10-24 15:33:46
 * @LastEditors: 振顺
 */
import type { RouteRecordRaw } from "vue-router"
import type { CategoryObj } from "@/api/product/attr/type"
// 定义小仓库数据state类型
export interface UserState {
    token: string | null
    menuRoutes: RouteRecordRaw[]
    username: string
    avatar: string
}

// 定义分类仓库state对象的ts类型
export interface CategoryState {
    c1Arr: CategoryObj[]
    c2Arr: CategoryObj[]
    c3Arr: CategoryObj[]
    c1Id: string | number
    c2Id: string | number
    c3Id: string | number
}