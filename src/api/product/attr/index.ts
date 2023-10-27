/*
 * @Description: 
 * @Author: 振顺
 * @Date: 2023-10-24 09:57:31
 * @LastEditTime: 2023-10-27 11:54:11
 * @LastEditors: 振顺
 */
// 属性相关API文件
import request from "@/utils/request";
import type { CategoryResponseData,AttrResponseData } from "./type"
// 属性管理模块接口地址
enum API {
    // 获取一级分类接口地址
    C1_URL = '/admin/product/getCategory1',
    // 获取二级分类接口地址
    C2_URL = '/admin/product/getCategory2/',
    // 获取三级分类接口地址
    C3_URL = '/admin/product/getCategory3/',
    // 获取分类下已有的属性与属性值
    ATTR_URL = '/admin/product/attrInfoList/'
}

// 获取一级分类的接口方法
export const reqC1 = () => {
    return request.get<any, CategoryResponseData>(API.C1_URL)
}
// 获取二级分类的接口方法
export const reqC2 = (category1Id: number | string) => {
    return request.get<any, CategoryResponseData>(API.C2_URL + category1Id)
}
// 获取三级分类的接口方法
export const reqC3 = (category2Id: number | string) => {
    return request.get<any, CategoryResponseData>(API.C3_URL + category2Id)
}
// 获取对应分类下已有的属性与属性值接口
export const reqAttr = (category1Id: number | string, category2Id: number | string, category3Id: number | string) => {
    return request.get<any, AttrResponseData>(API.ATTR_URL + `${category1Id}/${category2Id}/${category3Id}`)
}