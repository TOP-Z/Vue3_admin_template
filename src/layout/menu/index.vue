<!--
 * @Description: 
 * @Author: 振顺
 * @Date: 2023-10-16 17:25:05
 * @LastEditTime: 2023-10-16 17:51:35
 * @LastEditors: 振顺
-->
<template>
  <div>{{ menuList }}</div>
  <template v-for="(item, index) in menuList" :key="item.path">
    <el-menu-item index="" key="" v-if="!item.children">
      <template #title>
        <span>
          {{ item.meta.title }}
        </span>
      </template>
    </el-menu-item>
  </template>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
// 获取父组件传递过来的全部路由数组
defineProps(['menuList'])
</script>
<style scoped lang="scss"></style>
