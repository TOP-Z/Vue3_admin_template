/*
 * @Description: 
 * @Author: 振顺
 * @Date: 2023-10-12 15:59:54
 * @LastEditTime: 2023-10-27 15:41:50
 * @LastEditors: 振顺
 */
// 进行axios二次封装：使用请求与响应拦截器
import axios from 'axios';
import { ElMessage } from 'element-plus';
// 引入用户相关仓库
import useUserStore from '@/store/modules/user'
// 第一步：利用axios对象的create方法创建一个axios实例（其他的配置：基础路径、超时的时间）
let request = axios.create({
    // 基础路径
    baseURL: import.meta.env.VITE_APP_BASE_API, // 基础路径上会携带api
    timeout: 10000 // 超时时间的设置
});
// 第二步：request实例添加请求与响应拦截器
request.interceptors.request.use((config) => {
    // 获取用户相关的小仓库：获取仓库内部token，登录成功后携带给服务器
    let userStore = useUserStore()
    if (userStore.token) {
        config.headers.token = userStore.token
    }
    // config配置对象,headers属性请求头,经常给服务器端携带公共参数
    // 返回配置对象
    return config;
})
// 第三步：响应拦截器
request.interceptors.response.use((response) => {
    // 响应成功
    // 返回响应体
    return response.data;
}, (error) => {
    // 响应失败:处理http网络错误
    let message = '';
    let status = error.response.status;
    switch (status) {
        case 400:
            message = '请求错误';
            break;
        case 401:
            message = '未授权，请登录';
            break;
        case 403:
            message = '拒绝访问';
            break;
        case 404:
            message = `请求地址出错`
            break;
        case 500:
            message = '服务器内部错误';
            break;
        default:
            message = `连接服务器失败`;
    }
    ElMessage.error(message);
    return Promise.reject(error);
})

// 对外暴露
export default request;