<!--
 * @Description: 
 * @Author: 振顺
 * @Date: 2023-10-16 17:25:05
 * @LastEditTime: 2023-10-17 11:49:13
 * @LastEditors: 振顺
-->
<template>
  <template v-for="(item, index) in menuList" :key="item.path">
    <template v-if="!item.meta.hidden">
      <!-- 没有子路由 -->
      <el-menu-item
        key=""
        v-if="!item.children"
        :index="item.path"
        @click="goRoute"
      >
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <template #title>
          <span>
            {{ item.meta.title }}
          </span>
        </template>
      </el-menu-item>
      <!-- 有子路由且只有一个 -->
      <el-menu-item
        key=""
        v-if="item.children && item.children.length == 1"
        :index="item.children[0].path"
        @click="goRoute"
      >
        <el-icon>
          <component :is="item.children[0].meta.icon"></component>
        </el-icon>
        <template #title>
          <span>
            {{ item.children[0].meta.title }}
          </span>
        </template>
      </el-menu-item>
      <!-- 有子路由且不止一个 -->
      <el-sub-menu
        :index="item.path"
        v-if="item.children && item.children.length > 1"
      >
        <template #title>
          <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>
          <span>{{ item.meta.title }}</span>
        </template>
        <Menu :menuList="item.children"></Menu>
      </el-sub-menu>
    </template>
  </template>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
// 获取路由器对象
let $router = useRouter()
// 获取父组件传递过来的全部路由数组
defineProps(['menuList'])

const goRoute = (vc: any) => {
  console.log(vc.index)
  $router.push(vc.index)
}
</script>
<script lang="ts">
export default {
  // 递归组件必须有名字
  name: 'Menu',
}
</script>
<style scoped lang="scss"></style>
