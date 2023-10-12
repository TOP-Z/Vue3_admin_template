/*
 * @Description:
 * @Author: 振顺
 * @Date: 2023-10-12 16:46:16
 * @LastEditTime: 2023-10-12 16:47:04
 * @LastEditors: 振顺
 */
// 统一管理项目用户相关的接口
import request from "@/utils/request";
// 统一管理接口
enum Api {
    LOGIN_URL = '/user/login',
    USERINFO_URL = '/user/info',
}
// 暴露请求函数
// 登录接口方法
