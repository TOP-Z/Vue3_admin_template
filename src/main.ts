/*
 * @Description:
 * @Author: 振顺
 * @Date: 2023-10-10 11:30:01
 * @LastEditTime: 2023-10-13 11:58:15
 * @LastEditors: 振顺
 */
import { createApp } from "vue";
import App from "@/App.vue";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入全局样式
import "@/styles/index.scss";
// 引入组件
import allGloablComponent from "@/components";
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// SVG插件需要配置代码
import 'virtual:svg-icons-register'
// 引入路由
import router from "@/router";
// 引入仓库
import pinia from "@/store";

const app = createApp(App)
app.use(ElementPlus, {
    locale: zhCn,
})
// console.log(import.meta.env.VITE_APP_BASE_API);

//全局引入封装SVG组件
// import SvgIcon from '@/components/svgIcon/index.vue'
// app.component('SvgIcon', SvgIcon)

// 安装自定义插件
app.use(allGloablComponent)
// 注册模板路由
app.use(router)
// 注册仓库
app.use(pinia)
app.mount("#app");

