<!--
 * @Description: 
 * @Author: 振顺
 * @Date: 2023-10-17 14:08:21
 * @LastEditTime: 2023-10-17 15:48:36
 * @LastEditors: 振顺
-->
<template>
  <!-- 路由组件出口位置 -->
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <!-- 渲染layout一级路由组件的子路由 -->
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
</script>
<style scoped lang="scss">
.fade-enter-from {
  opacity: 0;
  transform:scale(0);
}
.fade-enter-active {
  transition: all .3s;
}
.fade-enter-to {
  opacity: 1;
  transform:scale(1);
}
</style>
