/*
 * @Description:
 * @Author: 振顺
 * @Date: 2023-10-17 17:32:08
 * @LastEditTime: 2023-10-17 17:37:35
 * @LastEditors: 振顺
 */
// 小仓库:layout组件相关配置仓库
import { defineStore } from "pinia";

let useLayOutSettingStore = defineStore('Setting', {
    state: () => {
        return {
            fold: false, //用户控制菜单折叠还是收起控制
        }
    },
    actions: {

    },
    getters: {

    }
})

export default useLayOutSettingStore;