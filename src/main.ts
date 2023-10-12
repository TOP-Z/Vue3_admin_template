/*
 * @Description:
 * @Author: 振顺
 * @Date: 2023-10-10 11:30:01
 * @LastEditTime: 2023-10-12 15:49:31
 * @LastEditors: 振顺
 */
import { createApp } from "vue";
import App from "@/App.vue";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// SVG插件需要配置代码
import 'virtual:svg-icons-register'

const app = createApp(App)
app.use(ElementPlus, {
    locale: zhCn,
})
// console.log(import.meta.env.VITE_APP_BASE_API);

//全局引入封装SVG组件
// import SvgIcon from '@/components/svgIcon/index.vue'
// app.component('SvgIcon', SvgIcon)
import allGloablComponent from "@/components";
// 安装自定义插件
app.use(allGloablComponent)

// 引入全局样式
import "@/styles/index.scss";

app.use(ElementPlus)
app.mount("#app");

