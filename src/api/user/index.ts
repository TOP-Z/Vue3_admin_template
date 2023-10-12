/*
 * @Description:
 * @Author: 振顺
 * @Date: 2023-10-12 16:46:16
 * @LastEditTime: 2023-10-12 17:51:29
 * @LastEditors: 振顺
 */
// 统一管理项目用户相关的接口
import request from "@/utils/request";
import type { LoginFrom, LoginRes, UserResponseData } from "./type";
// 统一管理接口
enum Api {
    LOGIN_URL = '/user/login',
    USERINFO_URL = '/user/info',
}
// 暴露请求函数
// 登录接口方法
export const reqLogin = (data: LoginFrom) => request.post<any, LoginRes>(Api.LOGIN_URL, data);
// 获取用户信息接口方法
export const reqUserInfo = () => request.get<any, UserResponseData>(Api.USERINFO_URL);