/*
 * @Description: 
 * @Author: 振顺
 * @Date: 2023-10-12 10:57:22
 * @LastEditTime: 2023-10-12 15:49:25
 * @LastEditors: 振顺
 */
import SvgIcon from './SvgIcon/index.vue'
import Pagination from './Pagination/index.vue'
const allGloablComponent:any = { SvgIcon, Pagination }
export default {
    install(app:any) {
        Object.keys(allGloablComponent).forEach((key:string) => {
            app.component(key, allGloablComponent[key])
        })
    }
}