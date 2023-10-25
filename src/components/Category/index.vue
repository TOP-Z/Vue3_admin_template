<!--
 * @Description: 
 * @Author: 振顺
 * @Date: 2023-10-23 17:35:58
 * @LastEditTime: 2023-10-24 16:08:35
 * @LastEditors: 振顺
-->
<template>
  <div>
    <el-card shadow="always">
      <el-form :inline="true">
        <el-form-item label="一级分类">
          <el-select
            v-model="categoryStore.c1Id"
            value-key=""
            placeholder=""
            clearable
            filterable
            @change="handler"
          >
            <el-option
              v-for="item in categoryStore.c1Arr"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="二级分类">
          <el-select
            v-model="categoryStore.c2Id"
            value-key=""
            placeholder=""
            clearable
            filterable
            @change=""
          >
            <el-option
              v-for="item in categoryStore.c2Arr"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="三级分类">
          <el-select
            v-model="categoryStore.c3Id"
            value-key=""
            placeholder=""
            clearable
            filterable
            @change=""
          >
            <el-option
              v-for="item in categoryStore.c3Arr"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { reqC1, reqC2, reqC3 } from '@/api/product/attr'
// 引入分类相关的仓库
import useCategoryStore from '@/store/modules/category'
let categoryStore = useCategoryStore()

onMounted(() => {
  getC1()
})

// 通知仓库获取一级分类的数据方法
const getC1 = async () => {
  categoryStore.getC1()
}

// 一级下拉菜单的change事件
const handler = () => {
  // 通知仓库获取二级分类的数据方法
  categoryStore.getC2()
}
</script>
<style scoped lang="scss"></style>
