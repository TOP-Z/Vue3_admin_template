/*
 * @Description: 
 * @Author: 振顺
 * @Date: 2023-11-13 11:56:27
 * @LastEditTime: 2023-11-13 12:03:35
 * @LastEditors: 振顺
 */
// SPU相关API文件
import request from "@/utils/request";
import type { HasSpuResponseData, ResoinseData, SpuData } from "./type"

// SPU模块接口地址
enum API {
    // 获取已有的SPU的数据
    HASSPU_URL = '/admin/product/',
}

// 获取一级分类的接口方法
export const reqHasSpu = (pages: number, limit: number, category3Id: number | string) => {
    return request.get<any, HasSpuResponseData>(API.HASSPU_URL + `${pages}/${limit}?category3Id=${category3Id}`)
}