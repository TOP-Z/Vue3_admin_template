/*
 * @Description: 
 * @Author: 振顺
 * @Date: 2023-10-12 16:46:36
 * @LastEditTime: 2023-10-20 14:39:23
 * @LastEditors: 振顺
 */
// 登录接口需要携带参数ts类型
export interface loginFromData {
    username: string
    password: string
}

// 定义全部接口返回数据都拥有ts类型
export interface ResponseData {
    code: number
    message: string
    ok: boolean
}

// 定义登录接口返回数据类型
export interface loginResponseData extends ResponseData {
    data: string
}

// 定义用户信息返回数据类型
export interface userInfoResponseData extends ResponseData {
    data: {
        routes: string[]
        buttons: string[]
        roles: string[]
        name: string
        avatar: string
    }
}