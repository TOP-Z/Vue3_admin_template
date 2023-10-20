<!--
 * @Description: 
 * @Author: 振顺
 * @Date: 2023-10-17 11:28:09
 * @LastEditTime: 2023-10-20 17:57:10
 * @LastEditors: 振顺
-->
<template>
  <el-card class="box-card">
    <!-- 卡片顶部添加品牌按钮 -->
    <el-button type="primary" size="default" @click="" icon="Plus">
      添加品牌
    </el-button>
    <!-- 表格组件:用于展示已有的平台数据 -->
    <el-table border stripe style="margin: 10px 0" :data="trademarkArr">
      <el-table-column
        label="序号"
        width="80px"
        align="center"
        type="index"
      ></el-table-column>
      <el-table-column label="品牌名称" porp="tmName">
        <template #="{ row, $index }">
          <pre style="color: brown">{{ row.tmName }}</pre>
        </template>
      </el-table-column>
      <el-table-column label="品牌LOGO">
        <template #="{ row, $index }">
          <img :src="row.logoUrl" alt="" style="width: 100px; height: 100px" />
        </template>
      </el-table-column>
      <el-table-column label="品牌操作">
        <template #="{ row, $index }">
          <el-button type="primary" size="small" @click="" icon="Edit"></el-button>
          <el-button type="primary" size="small" @click="" icon="Delete"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页器组件 -->
    <el-pagination
      v-model:current-page="pageNo"
      v-model:page-size="limit"
      :page-sizes="[3, 5, 7, 9]"
      :background="true"
      layout=" prev, pager, next, jumper, ->,sizes,total"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </el-card>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { reqHasTrademark } from '@/api/product/trademark/index'
// let columns = reactive([
//   {
//     id: 1,
//     tmName: '序号',
//   },
//   {
//     id: 1,
//     tmName: '品牌名称',
//   },
//   {
//     id: 1,
//     tmName: '品牌LOGO',
//   },
//   {
//     id: 1,
//     tmName: '品牌操作',
//   },
// ])
// 当前页码
let pageNo = ref<number>(1)
// 每页展示多少条数据
let limit = ref<number>(3)
// 存储已有品牌数据总数
let total = ref<number>(0)
// 存储已有品牌的数据
let trademarkArr = ref<any>([])
//获取已有品牌的接口封装为一个函数:在任何情况下向获取数据,调用此函数即可
const getHasTrademark = async () => {
  let result = await reqHasTrademark(pageNo.value, limit.value)
  if (result.code == '200') {
    console.log(result)
    total.value = result.data.total
    trademarkArr.value = result.data.records
  }
}
//组件挂载完毕钩子---发一次请求,获取第一页、一页三个已有品牌数据
onMounted(() => {
  getHasTrademark()
})

const handleSizeChange = () => {}
const handleCurrentChange = () => {}
</script>
<style scoped lang="scss"></style>
