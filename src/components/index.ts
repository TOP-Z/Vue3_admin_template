/*
 * @Description: 
 * @Author: 振顺
 * @Date: 2023-10-12 10:57:22
 * @LastEditTime: 2023-10-17 10:34:11
 * @LastEditors: 振顺
 */
import SvgIcon from './SvgIcon/index.vue'
import Pagination from './Pagination/index.vue'
// 引入element-plus提供全部图标组件
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 全局对象
const allGloablComponent:any = { SvgIcon, Pagination }
export default {
    install(app:any) {
        // 注册项目全部的全局组件
        Object.keys(allGloablComponent).forEach((key:string) => {
            app.component(key, allGloablComponent[key])
        })
        // 将element-plus提供图标注册为全局组件
        for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
            app.component(key, component)
          }
    }
}