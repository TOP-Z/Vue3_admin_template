<!--
 * @Description: 顶部导航
 * @Author: 振顺
 * @Date: 2023-10-17 16:05:05
 * @LastEditTime: 2023-10-17 17:18:17
 * @LastEditors: 振顺
-->
<template>
  <div class="tabbar">
    <!-- !顶部左侧静态 -->
    <div class="tabbar_left">
      <Breadcrumb />
    </div>
    <div class="tabbat_right">
      <Setting />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import Breadcrumb from './breadcrumb/index.vue'
import Setting from './setting/index.vue'
</script>

<script lang="ts">
export default {
  name: 'Tabbar',
}
</script>
<style scoped lang="scss">
.tabbar {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  // background-image: linear-gradient(to right,white,black,white);
  .tabbar_left {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }
  .tabbat_right {
    display: flex;
    align-items: center;
  }
}
</style>
