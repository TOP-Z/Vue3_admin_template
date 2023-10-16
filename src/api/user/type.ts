/*
 * @Description: 
 * @Author: 振顺
 * @Date: 2023-10-12 16:46:36
 * @LastEditTime: 2023-10-16 11:23:46
 * @LastEditors: 振顺
 */
// 登录接口需要携带参数ts类型
export interface LoginFrom {
    username: string
    password: string
}

interface dataType {
    toke?: string
    message?: string
    userInfo?: {
        id: number
        username: string
        nickname: string
        email: string
        phone: string
        sex: number
        role: number
        createTime: string
        updateTime: string
    }
}

// 登录接口返回数据类型
export interface LoginRes {
    code: number
    data: dataType
}

// 定义服务器返回用户信息相关的数据类型
interface userInfo {
    userId: number
    avatar:string
    username: string
    password: string
    desc:string
    roles:string[]
    buttons:string[]
    routes:string[]
    token:string
}
interface user {
    checkUser:userInfo
}
export interface UserResponseData {
    code: number
    data: user
}