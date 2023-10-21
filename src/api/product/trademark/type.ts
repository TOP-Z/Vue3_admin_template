/*
 * @Description: 
 * @Author: 振顺
 * @Date: 2023-10-20 16:35:01
 * @LastEditTime: 2023-10-21 09:08:16
 * @LastEditors: 振顺
 */
export interface ResponseData {
    code: number
    message: string
    ok: boolean
}

// 已有的品牌的ts数据类型
export interface TradeMark {
    id?: number
    tmName: string
    logoUrl: string
}

// 包含全部品牌数据的ts类型
export type Records = TradeMark[]

// 获取的已有全部品牌的数据ts类型
export interface TradeMarkResponseData extends ResponseData {
    data: {
        records: Records,
        total: number,
        size: number,
        current: number,
        searchCount: boolean,
        pages: number
    }
}