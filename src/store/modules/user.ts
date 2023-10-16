/*
 * @Description: 
 * @Author: 振顺
 * @Date: 2023-10-13 11:23:17
 * @LastEditTime: 2023-10-16 11:41:57
 * @LastEditors: 振顺
 */
// 创建用户相关的小仓库
import { defineStore } from 'pinia'
// 引入接口
import { reqLogin } from '@/api/user'
// 引入参数类型
import type { LoginFrom, LoginRes } from '@/api/user/type'
import type { UserState } from './types/type'
// 引入操作本地存储的工具方法
import { SET_TOKEN, GET_TOKEN } from '@/utils/token'
let useUserStore = defineStore('User', {
    state: (): UserState => {
        return {
            // token: localStorage.getItem('TOKEN'),// 用户唯一标识
            token: GET_TOKEN(),// 用户唯一标识
        }
    },
    actions: {
        async userLogin(data: LoginFrom) {
            let result: LoginRes = await reqLogin(data)
            if (result.code === 200) {
                // pinia存储token
                this.token = (result.data.token as string)
                // 本地持久化储存一份
                // localStorage.setItem('TOKEN', (result.data.token as string))
                SET_TOKEN((result.data.token as string))
                // 保证当前async函数返回一个成功的promise
                return 'ok'
            } else {
                return Promise.reject(new Error(result.data.message))
            }
        }
    },
    getters: {
    }
})

export default useUserStore;