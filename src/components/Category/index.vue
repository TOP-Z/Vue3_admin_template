<!--
 * @Description: 
 * @Author: 振顺
 * @Date: 2023-10-23 17:35:58
 * @LastEditTime: 2023-10-23 17:43:17
 * @LastEditors: 振顺
-->
<template>
  <div>
    <el-card shadow="always">
      <el-form :inline="true">
        <el-form-item label="一级分类">
          <!-- <el-select
                 value-key=""
                 placeholder=""
                 clearable
                 filterable
                 @change=""
               >
                 <el-option
                   v-for="item in options"
                   :key="item.value"
                   :label="item.label"
                   :value="item.value"
                 ></el-option>
               </el-select> -->
        </el-form-item>
        <el-form-item label="二级分类">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="三级分类">
          <el-input></el-input>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
</script>
<style scoped lang="scss"></style>
