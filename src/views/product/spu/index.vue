<!--
 * @Description: 
 * @Author: 振顺
 * @Date: 2023-10-17 11:29:07
 * @LastEditTime: 2023-11-27 17:54:32
 * @LastEditors: 振顺
-->
<template>
  <div>
    <Category :scene="scene"></Category>
    <el-card style="margin: 10px 0">
      <el-button
        type="primary"
        size="default"
        icon="Plus"
        @click=""
        :disabled="!categoryStore.c3Id"
      >
        添加SPU
      </el-button>
      <el-table border stripe :data="records" style="margin: 10px 0">
        <el-table-column type="index" width="80" align="center" label="序号" />
        <el-table-column label="SPU名称" prop="spuName" />
        <el-table-column
          label="SPU描述"
          prop="description"
          show-overflow-tooltip
        />
        <el-table-column label="SPU操作">
          <template #="{ row, $index }">
            <el-button
              type="primary"
              size="small"
              icon="Plus"
              title="添加SKU"
              @click=""
            ></el-button>
            <el-button
              type="primary"
              size="small"
              @click=""
              title="修改SPU"
              icon="Edit"
            ></el-button>
            <el-button
              type="primary"
              size="small"
              @click=""
              title="查看SPU列表"
              icon="View"
            ></el-button>
            <el-popconfirm
              width="250px"
              icon="Delete"
              icon-color="red"
              :title="`您确定要删除${row.tmName}吗`"
              @confirm=""
            >
              <template #reference>
                <el-button
                  type="primary"
                  size="small"
                  icon="Delete"
                ></el-button>
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        v-model:current-page="pageNo"
        v-model:page-size="pageSize"
        :page-sizes="[3, 5, 7, 9]"
        :background="true"
        layout="prev, pager, next, jumper, ->,sizes,total"
        :total="total"
        :disabled="!categoryStore.c3Id"
        @size-change="getHasSpu"
        @current-change="getHasSpu"
      />
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue'
import SpuForm from './spuForm.vue'
// 引入获取已有SPU接口
import { reqHasSpu } from '@/api/product/spu'
import type { HasSpuResponseData, Records } from '@/api/product/spu/type'
// 引入分类相关的仓库
import useCategoryStore from '@/store/modules/category'
let categoryStore = useCategoryStore()
// 场景数据
let scene = ref<number>(0)
// 分页器默认页码
let pageNo = ref<number>(1)
// 每一页展示几条数据
let pageSize = ref<number>(3)
// 存储已有SPU数据总数
let total = ref<number>(0)
// 存储已有SPU数组数据
let records = ref<Records>([])

// 监听三级分类ID变化
watch(
  () => categoryStore.c3Id,
  (n, o) => {
    if (!n) return
    getHasSpu()
  },
)

// 获取某个三级分类下全部已有的SPU列表
const getHasSpu = async () => {
  let result: HasSpuResponseData = await reqHasSpu(
    pageNo.value,
    pageSize.value,
    categoryStore.c3Id,
  )
  if (result.code == 200) {
    records.value = result.data.records
    total.value = result.data.total
  }
}
</script>
<style scoped lang="scss"></style>
