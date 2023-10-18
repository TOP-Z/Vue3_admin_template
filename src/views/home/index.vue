<!--
 * @Description: 
 * @Author: 振顺
 * @Date: 2023-10-13 09:30:45
 * @LastEditTime: 2023-10-18 17:19:42
 * @LastEditors: 振顺
-->
<template>
  <div>
    <h1>我是一级路由展示登录成功以后的数据{{ userStore.username }}</h1>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import useUserStore from '@/store/modules/user'

let userStore = useUserStore()
onMounted(() => {
  console.log(userStore.userInfo())
})
</script>
<style scoped lang="scss"></style>
