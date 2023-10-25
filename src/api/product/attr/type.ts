/*
 * @Description: 
 * @Author: 振顺
 * @Date: 2023-10-24 11:06:48
 * @LastEditTime: 2023-10-24 15:13:21
 * @LastEditors: 振顺
 */
// 分类相关数据ts类型

export interface ResponseData {
    code: number
    message: string
    ok: boolean
}

// 分类ts类型
export interface CategoryObj {
    id: number | string
    name: string
    category1Id?: number
    category2Id?: number
}

// 相应的分类接口返回数据类型
export interface CategoryResponseData extends ResponseData {
    data: CategoryObj[]
}