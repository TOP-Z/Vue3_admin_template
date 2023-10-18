<!--
 * @Description: 
 * @Author: 振顺
 * @Date: 2023-10-17 16:58:48
 * @LastEditTime: 2023-10-18 14:42:22
 * @LastEditors: 振顺
-->
<template>
  <el-icon style="margin-right: 10px" @click="changgeIcon">
    <component :is="LayOutSettingStore.fold ? 'Expand' : 'Fold'" />
  </el-icon>
  <el-breadcrumb separator-icon="ArrowRight">
    <el-breadcrumb-item
      :to="{ path: item.path }"
      v-for="(item, index) in $route.matched"
      :key="item.meta.path"
      v-show="item.meta.title"
    >
      <el-icon>
        <component :is="item.meta.icon"></component>
      </el-icon>
      <span style="margin: 0 2px">{{ item.meta.title }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRoute } from 'vue-router'
// import { Expand, Flod, ArrowRight } from '@element-plus/icons-vue'
// 引入仓库
import useLayOutSettingStore from '@/store/modules/setting'
// 菜单折叠图标变量切换
let LayOutSettingStore = useLayOutSettingStore()
// 获取路由对象
let $route = useRoute()

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
