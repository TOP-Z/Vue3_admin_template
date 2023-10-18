<!--
 * @Description: 
 * @Author: 振顺
 * @Date: 2023-10-17 16:58:42
 * @LastEditTime: 2023-10-18 17:52:09
 * @LastEditors: 振顺
-->
<template>
  <el-button
    size="small"
    icon="Refresh"
    circle
    @click="updateRefsh"
  ></el-button>
  <el-button
    size="small"
    icon="FullScreen"
    circle
    @click="fullScreen"
  ></el-button>
  <el-button size="small" icon="Setting" circle @click=""></el-button>
  <img
    :src="userStore.avatar"
    alt=""
    style="width: 24px; height: 24px; margin: 0 10px; border-radius: 50%"
  />
  <!-- !下拉菜单 -->
  <el-dropdown>
    <span class="el-dropdown-link">
      {{ userStore.username }}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
// import { Refresh, FullScreen, Setting } from '@element-plus/icons-vue'
import useLayOutSettingStore from '@/store/modules/setting'
// 引入用户相关仓库
import useUserStore from '@/store/modules/user'
import { useRouter, useRoute } from 'vue-router'
// 获取路由器对象
let $router = useRouter()
// 获取路由对象
let $route = useRoute()
let userStore = useUserStore()
let LayOutSettingStore = useLayOutSettingStore()
// 刷新按钮顶级回调
const updateRefsh = () => {
  LayOutSettingStore.refsh = !LayOutSettingStore.refsh
}
// 全屏按钮点击回调
const fullScreen = () => {
  //DOM对象的一个属性:可以用来判断当前是不是全屏模式[全屏:true,不是全屏:false]
  let full = document.fullscreenElement
  // 切换为全屏模式
  if (!full) {
    // 文档根节点的方法requestFullscreen,实现全屏模式
    document.documentElement.requestFullscreen()
  } else {
    // 退出全屏模式
    document.exitFullscreen()
  }
}
// 退出登录点击回调
const logout = () => {
  // 第一步：向服务器发请求[退出登录接口]
  // 第二件事情:仓库当中关于用于相关的数据清空[token|username|avatar]
  userStore.userLogout()
  // 第三件事情:跳转到登录页面
  $router.push({
    path: '/login',
    query: { redirect: $route.path },
  })
}
</script>

<script lang="ts">
export default {
  name: 'Setting',
}
</script>
<style scoped lang="scss"></style>
