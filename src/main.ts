/*
 * @Description:
 * @Author: 振顺
 * @Date: 2023-10-10 11:30:01
 * @LastEditTime: 2023-10-11 16:59:52
 * @LastEditors: 振顺
 */
import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const app = createApp(App)
app.use(ElementPlus, {
    locale: zhCn,
})

app.use(ElementPlus)
app.mount("#app");

