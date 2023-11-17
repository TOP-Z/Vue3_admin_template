<!--
 * @Description: 
 * @Author: 振顺
 * @Date: 2023-10-17 11:29:07
 * @LastEditTime: 2023-11-13 13:46:44
 * @LastEditors: 振顺
-->
<template>
  <div>
    <Category :scene="scene"></Category>
    <el-card style="margin: 10px 0">
      <el-button type="primary" size="default" icon="Plus" @click="">
        添加SPU
      </el-button>
      <el-table border stripe>
        <el-table-column type="index" width="80" align="center" label="序号" />
        <el-table-column label="SPU名称" />
        <el-table-column label="SPU描述" />
        <el-table-column label="SPU操作" />
      </el-table>
      <el-pagination
        v-model:current-page="pageNo"
        v-model:page-size="pageSize"
        :page-sizes="[100, 200, 300, 400]"
        :background="true"
        layout="prev, pager, next, jumper, ->,sizes,total"
        :total="400"
      />
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
// 场景数据
let scene = ref<number>(0)
// 当前页码
let pageNo = ref<number>(1)
// 分页器默认页码
let pageSize = ref<number>(3)
</script>
<style scoped lang="scss"></style>
