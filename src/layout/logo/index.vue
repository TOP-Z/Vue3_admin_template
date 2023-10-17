<!--
 * @Description: 
 * @Author: 振顺
 * @Date: 2023-10-16 15:26:28
 * @LastEditTime: 2023-10-17 17:48:43
 * @LastEditors: 振顺
-->
<template>
  <div class="logo" v-if="setting.logoHidden">
    <img :src="setting.logo" alt="" />
    <p>{{ setting.title }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import setting from '@/setting'
</script>

<script lang="ts">
export default {
  name: 'Logo',
}
</script>
<style scoped lang="scss">
.logo {
  width: 100%;
  height: $base-menu-logo-height;
  display: flex;
  align-items: center;
  padding: 10px;
  img {
    width: 40px;
    height: 40px;
    padding-left: 10px;
  }
  p {
    font-size: $base-logo-title-fontSize;
  }
}
</style>
