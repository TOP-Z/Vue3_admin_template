<!--
 * @Description: 属性管理
 * @Author: 振顺
 * @Date: 2023-10-17 11:29:43
 * @LastEditTime: 2023-10-27 16:04:26
 * @LastEditors: 振顺
-->
<template>
  <div>
    <!-- ?三级分类全局组件 -->
    <Category />
    <el-card shadow="always" style="margin: 10px 0">
      <div v-show="scene == 0">
        <el-button
          type="primary"
          size="default"
          icon="Plus"
          :disabled="categoryStore.c3Id ? false : true"
          @click="addAttr"
        >
          添加属性
        </el-button>
        <el-table border stripe :data="attrArr" style="margin: 10px 0">
          <el-table-column
            label="序号"
            type="index"
            width="80px"
          ></el-table-column>
          <el-table-column
            label="属性名称"
            align="center"
            width="120px"
            prop="attrName"
          ></el-table-column>
          <el-table-column label="属性值名称">
            <template #="{ row, $index }">
              <el-tag
                v-for="item in row.attrValueList"
                :key="item.id"
                style="margin: 5px"
              >
                <div>{{ item.valueName }}</div>
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="120px">
            <el-button
              type="primary"
              size="small"
              icon="Edit"
              @click="updateAttr"
            ></el-button>
            <el-button
              type="primary"
              size="small"
              icon="Delete"
              @click=""
            ></el-button>
          </el-table-column>
        </el-table>
      </div>
      <div v-show="scene == 1">
        <el-form label-width="80px" :inline="true" size="normal">
          <el-form-item label="属性名称">
            <el-input placeholder="请你输入属性名称"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue'
// 引入获取已有属性与属性值接口
import { reqAttr } from '@/api/product/attr'
import type { AttrResponseData, Attr } from '@/api/product/attr/type'
// 引入分类相关的仓库
import useCategoryStore from '@/store/modules/category'
let categoryStore = useCategoryStore()
// 存储已有的属性与属性值
let attrArr = ref<Attr[]>([])
// 定义card组件内容切换变量
let scene = ref<number>(1) //scene,显示table,scene=1,展示添加与修改属性结构
watch(
  () => categoryStore.c3Id,
  (n, o) => {
    attrArr.value = []
    if (!n) return
    getAttr()
  },
)

// 获取已有的属性与属性值方法
const getAttr = async () => {
  const { c1Id, c2Id, c3Id } = { ...categoryStore }
  let result: AttrResponseData = await reqAttr(c1Id, c2Id, c3Id)
  console.log(result)
  if (result.code == 200) {
    attrArr.value = result.data
  }
}

// 添加属性按钮的回调
const addAttr = () => {
  // 切换为添加与修改属性的结构
  scene.value = 1
}
// table表格修改已有属性按钮的回调
const updateAttr = () => {
  // 切换为添加与修改属性的结构
  scene.value = 1
}
</script>
<style scoped lang="scss"></style>
