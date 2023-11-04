<!--
 * @Description: 
 * @Author: 振顺
 * @Date: 2023-10-23 17:35:58
 * @LastEditTime: 2023-11-01 17:34:48
 * @LastEditors: 振顺
-->
<template>
  <div>
    <el-card shadow="always">
      <el-form :inline="true">
        <el-form-item label="一级分类">
          <el-select
            v-model="categoryStore.c1Id"
            :disabled="scene == 0 ? false : true"
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
            :disabled="scene == 0 ? false : true"
            value-key=""
            placeholder=""
            clearable
            filterable
            @change="handler_"
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
            :disabled="scene == 0 ? false : true"
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
// 引入分类相关的仓库
import useCategoryStore from '@/store/modules/category'
let categoryStore = useCategoryStore()
// 接受父组件传过来的scene
defineProps(['scene'])
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
  categoryStore.c2Id = ''
  categoryStore.c3Id = ''
  categoryStore.c2Arr = []
  categoryStore.c3Arr = []
}
// 二级下拉菜单的change事件
const handler_ = () => {
  // 通知仓库获取三级分类的数据方法
  categoryStore.getC3()
  categoryStore.c3Id = ''
  categoryStore.c3Arr = []
}
</script>
<style scoped lang="scss">
.el-form {
  display: flex;
  justify-content: space-around;
  .el-form-item {
    margin-bottom: 0px;
  }
}
</style>
