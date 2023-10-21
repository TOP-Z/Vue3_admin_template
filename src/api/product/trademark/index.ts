/*
 * @Description: 
 * @Author: 振顺
 * @Date: 2023-10-20 16:32:22
 * @LastEditTime: 2023-10-21 16:40:17
 * @LastEditors: 振顺
 */
// 书写品牌管理模块接口
import request from "@/utils/request";
import type { TradeMarkResponseData, TradeMark } from './type'
//品牌管理模块接口地址
enum API {
    //获取已有品牌接口
    TRADEMARK_URL = "/admin/product/baseTrademark/",
    // 添加品牌
    ADDTRADEMARK_URL = '/admin/product/baseTrademark/save',
    // 修改已有品牌
    UPDATETRADEMARK_URL = '/admin/product/baseTrademark/update'
}
//获取已有品牌的接口方法
//page:获取第几页---默认第一页limit:获取几个已有品牌的数据
export const reqHasTrademark = (page: number, limit: number) => request.get<any, TradeMarkResponseData>(API.TRADEMARK_URL + `${page}/${limit}`)
export const reqAddOrUpdateTrademark = (data: TradeMark) => {
    if (data.id) {
        request.put<any, any>(API.UPDATETRADEMARK_URL)
    } else {
        request.get<any, any>(API.ADDTRADEMARK_URL)
    }
}