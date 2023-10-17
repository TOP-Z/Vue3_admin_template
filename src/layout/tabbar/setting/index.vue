<!--
 * @Description: 
 * @Author: 振顺
 * @Date: 2023-10-17 16:58:42
 * @LastEditTime: 2023-10-17 17:31:17
 * @LastEditors: 振顺
-->
<template>
  <el-button size="small" icon="Refresh" circle @click=""></el-button>
  <el-button size="small" icon="FullScreen" circle @click=""></el-button>
  <el-button size="small" icon="Setting" circle @click=""></el-button>
  <img
    src="../../../../public/logo.jpg"
    alt=""
    style="width: 24px; height: 24px; margin: 0 10px"
  />
  <!-- !下拉菜单 -->
  <el-dropdown>
    <span class="el-dropdown-link">
      admin
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
// import { Refresh, FullScreen, Setting } from '@element-plus/icons-vue'
</script>

<script lang="ts">
export default {
  name: 'Setting',
}
</script>
<style scoped lang="scss"></style>
