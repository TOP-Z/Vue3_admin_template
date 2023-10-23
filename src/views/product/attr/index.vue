<!--
 * @Description: 属性管理
 * @Author: 振顺
 * @Date: 2023-10-17 11:29:43
 * @LastEditTime: 2023-10-23 17:46:28
 * @LastEditors: 振顺
-->
<template>
  <div>
    <!-- ?三级分类全局组件 -->
    <Category />
    <el-card shadow="always" style="margin: 10px 0">
      <el-button type="primary" size="default" icon="Plus" @click="">
        添加属性
      </el-button>
      <el-table border stripe style="margin: 10px 0">
        <el-table-column
          label="序号"
          type="index"
          width="80px"
        ></el-table-column>
        <el-table-column
          label="属性名称"
          align="center"
          width="120px"
        ></el-table-column>
        <el-table-column label="属性值名称"></el-table-column>
        <el-table-column
          label="操作"
          width="120px"
        ></el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
</script>
<style scoped lang="scss"></style>
