/*
 * @Description: 
 * @Author: 振顺
 * @Date: 2023-10-24 11:06:48
 * @LastEditTime: 2023-11-04 11:19:33
 * @LastEditors: 振顺
 */console.log()
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

// 属性对象ts类型
export interface Attr {
    id?: number | string
    attrName: string
    categoryId: number | string
    categoryLevel: number
    attrValueList: AttrValueList

}
// 存储每一个属性对象的数组类型
export type AttrList = Attr[]

// 属性值对象的ts类型
export interface AttrValue {
    id?: number | string
    valueName: string
    attrId?: number
}

// 存储每一个属性值的数组类型
export type AttrValueList = AttrValue[]

// 属性接口返回数据类型
export interface AttrResponseData extends ResponseData {
    data: Attr[]
}