<!--
 * @Description: 
 * @Author: 振顺
 * @Date: 2023-10-13 09:29:47
 * @LastEditTime: 2023-10-16 11:57:47
 * @LastEditors: 振顺
-->
<template>
  <div class="login_container">
    <el-row :gutter="0">
      <el-col :span="12" :offset="0" :xs="0"></el-col>
      <el-col :span="12" :offset="0" :xs="24">
        <el-form class="login_form">
          <h1>Hello</h1>
          <h2>欢迎来到硅谷甄选</h2>
          <el-form-item label="">
            <el-input
              v-model="loginForm.username"
              :prefix-icon="User"
              placeholder=""
              clearable
              @change=""
            ></el-input>
          </el-form-item>
          <el-form-item label="">
            <el-input
              v-model="loginForm.password"
              :prefix-icon="Lock"
              type="password"
              show-password
              placeholder=""
              clearable
              @change=""
            ></el-input>
          </el-form-item>
          <el-form-item label="">
            <el-button
              :loading="loading"
              type="primary"
              size="default"
              @click="login"
              class="login_btn"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'
import { getNowTime } from '@/utils/time'
// 引入用户相关的小仓库
import useUserStore from '@/store/modules/user'
let userStore = useUserStore()
// 获取路由器
let $router = useRouter()
// 收集账号与密码的数据
let loginForm = reactive({
  username: 'admin',
  password: '111111',
})
// 登录按钮的loading状态
let loading = ref(false)
const login = async () => {
  loading.value = true
  try {
    // 保证登录成功
    await userStore.userLogin(loginForm)
    // 编程式导航跳转到展示首页
    $router.push('/')
    ElNotification({
      type: 'success',
      message: '欢迎回来',
      title: `HI,${getNowTime()}好`, // 封装一个函数：获取一个结果：当前早上|上午|下午|晚上
    })
  } catch (error) {
    ElNotification({
      type: 'error',
      message: (error as Error).message,
    })
  } finally {
    loading.value = false
  }
}
</script>
<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;
  .login_form {
    position: relative;
    width: 500px;
    top: 40vh;
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;
    padding: 40px;
    h1 {
      color: white;
      font-size: 40px;
    }
    h2 {
      font-size: 20px;
      color: white;
      margin: 20px 0;
    }
    .login_btn {
      width: 100%;
    }
  }
}
</style>
