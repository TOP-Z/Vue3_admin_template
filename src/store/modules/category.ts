// 商品分类全局组件的小仓库
import { defineStore } from "pinia";
import { reqC1, reqC2, reqC3 } from '@/api/product/attr'
import type { CategoryResponseData } from "@/api/product/attr/type"
import type { CategoryState } from "./types/type"
let useCategoryStore = defineStore('Category', {
    state: (): CategoryState => {
        return {
            c1Arr: [],
            c2Arr: [],
            c3Arr: [],
            c1Id: '',
            c2Id: '',
            c3Id: '',
        }
    },
    actions: {
        // 获取一级分类的方法
        async getC1() {
            // 发送请求获取一级分类数据
            let result: CategoryResponseData = await reqC1()
            if (result.code == 200) {
                this.c1Arr = result.data
            }
        },
        // 获取二级分类的方法
        async getC2() {
            // 发送请求获取一级分类数据
            if (this.c1Id) {
                let result: CategoryResponseData = await reqC2(this.c1Id)
                if (result.code == 200) {
                    this.c2Arr = result.data
                }
            }
        },
        // 获取三级分类的方法
        async getC3() {
            // 发送请求获取一级分类数据
            if (this.c2Id) {
                let result: CategoryResponseData = await reqC3(this.c2Id)
                if (result.code == 200) {
                    this.c3Arr = result.data
                }
            }
        }
    },
    getters: {

    }
})

export default useCategoryStore;