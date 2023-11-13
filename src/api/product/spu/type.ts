/*
 * @Description: 
 * @Author: 振顺
 * @Date: 2023-11-13 11:25:09
 * @LastEditTime: 2023-11-13 11:56:10
 * @LastEditors: 振顺
 */
// 服务器全部接口返回的数据类型
export interface ResoinseData {
    code: number;
    message: string;
    ok: boolean;
}

// SPU数据的ts类型：需要修改
export interface SpuData {
    id?: number
    spuName: string
    description: string
    category3Id: number | number
    tmId: number
    spuSaleAttrList: null
    spuImageList: null
}

// 数组：元素都是已有SPU数据类型
export type Records = SpuData[]
// 定义获取已有的SPU接口返回的数据ts类型
export interface HasSpuResponseData extends ResoinseData {
    data: {
        records: Records
        total: number,
        size: number,
        current: number,
        searchCount: boolean,
        pages: number
    }
}