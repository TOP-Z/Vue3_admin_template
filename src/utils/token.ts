/*
 * @Description: 
 * @Author: 振顺
 * @Date: 2023-10-16 11:34:16
 * @LastEditTime: 2023-10-18 17:43:54
 * @LastEditors: 振顺
 */
// 封装本地存储数据与读取数据方法
export const SET_TOKEN = (token: string) => {
    localStorage.setItem('TOKEN', token)
}
// 本地存储获取数据
export const GET_TOKEN = () => {
    return localStorage.getItem('TOKEN')
}
// 本地存储删除数据方法
export const REMOVE_TOKEN = () => {
    localStorage.removeItem('TOKEN');
}
