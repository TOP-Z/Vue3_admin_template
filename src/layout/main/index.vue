<!--
 * @Description: 
 * @Author: 振顺
 * @Date: 2023-10-17 14:08:21
 * @LastEditTime: 2023-10-18 15:03:23
 * @LastEditors: 振顺
-->
<template>
  <!-- 路由组件出口位置 -->
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <!-- 渲染layout一级路由组件的子路由 -->
      <component :is="Component" v-if="flag" />
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import { ref, reactive, watch, nextTick } from 'vue'
import useLayOutSettingStore from '@/store/modules/setting'

let LayOutSettingStore = useLayOutSettingStore()
let flag = ref(true)
// 监听仓库内部数据是否发生变化，如果变化，说明用户点击过刷新按钮
watch(
  () => LayOutSettingStore.refsh,
  () => {
    flag.value = false
    // 响应式数据更新完毕后获取更新后的dom
    nextTick(() => {
      flag.value = true
    })
  },
)
</script>

<script lang="ts">
export default {
  name: 'Main',
}
</script>
<style scoped lang="scss">
.fade-enter-from {
  opacity: 0;
  transform: scale(0);
}
.fade-enter-active {
  transition: all 0.3s;
}
.fade-enter-to {
  opacity: 1;
  transform: scale(1);
}
</style>
