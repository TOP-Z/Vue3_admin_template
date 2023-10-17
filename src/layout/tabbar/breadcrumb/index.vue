<!--
 * @Description: 
 * @Author: 振顺
 * @Date: 2023-10-17 16:58:48
 * @LastEditTime: 2023-10-17 17:42:58
 * @LastEditors: 振顺
-->
<template>
  <el-icon style="margin-right: 10px" @click="changgeIcon">
    <component :is="LayOutSettingStore.fold ? 'Expand' : 'Fold'" />
  </el-icon>
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item :to="{ path: '/' }">权限管理</el-breadcrumb-item>
    <el-breadcrumb-item>
      <a href="/">用户管理</a>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
// import { Expand, Flod, ArrowRight } from '@element-plus/icons-vue'
// 引入仓库
import useLayOutSettingStore from '@/store/modules/setting'
// 菜单折叠图标变量切换
let LayOutSettingStore = useLayOutSettingStore()

const changgeIcon = () => {
  LayOutSettingStore.fold = !LayOutSettingStore.fold
}
</script>

<script lang="ts">
export default {
  name: 'Breadcrumb',
}
</script>
<style scoped lang="scss"></style>
