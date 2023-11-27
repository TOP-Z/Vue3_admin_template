<!--
 * @Description: 
 * @Author: 振顺
 * @Date: 2023-10-13 09:29:47
 * @LastEditTime: 2023-11-20 15:13:08
 * @LastEditors: 振顺
-->
<template>
  <div class="login_container">
    <el-row :gutter="0">
      <el-col :span="12" :offset="0" :xs="0"></el-col>
      <el-col :span="12" :offset="0" :xs="24">
        <el-form
          class="login_form"
          :model="loginForm"
          :rules="rules"
          ref="loginForms"
        >
          <h1>Hello</h1>
          <h2>欢迎来到硅谷甄选</h2>
          <el-form-item label="" prop="username">
            <el-input
              v-model="loginForm.username"
              prefix-icon="User"
              placeholder=""
              clearable
              @change=""
            ></el-input>
          </el-form-item>
          <el-form-item label="" prop="password">
            <el-input
              v-model="loginForm.password"
              prefix-icon="Lock"
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
              @click="onSubmit"
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
// import { User, Lock } from '@element-plus/icons-vue'
import { useRouter, useRoute } from 'vue-router'
import { ElNotification } from 'element-plus'
import { getNowTime } from '@/utils/time'
// 引入用户相关的小仓库
import useUserStore from '@/store/modules/user'
let userStore = useUserStore()

// 获取el-form组件
let loginForms = ref()
// 获取路由器对象
let $router = useRouter()
// 获取路由对象
let $route = useRoute()
// 收集账号与密码的数据
let loginForm = reactive({
  username: 'admin',
  password: 'atguigu123',
})
// 登录按钮的loading状态
let loading = ref(false)

const onSubmit = () => {
  loginForms.value.validate((valid: any) => {
    if (valid) {
      // 验证通过
      // 提示用户登录成功
      login()
    }
  })
}
const login = async () => {
  loading.value = true
  try {
    // 保证登录成功
    await userStore.userLogin(loginForm)
    // 编程式导航跳转到展示首页
    //判断登录的时候,路由路径当中是否有query参数，如果有就往query参数跳转，没有跳转到首页
    let redirect: any = $route.query.redirect
    $router.push({ path: redirect || '/' })
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
const validateUsername = (rule: any, value: any, callback: any) => {
  //rule:即为校验规则对象
  //value:即为表单元素文本内容
  //函数:如果符合条件callBack放行通过即为
  //如果不符合条件callBack方法,注入错误提示信息
  if (!value) {
    callback(new Error('请输入用户名'))
  }
  callback()
}
// 定义表单校验需要配置对象
const rules = {
  // 规则对象属性:
  // required,代表这个字段务必要校验的
  // min:文本长度至少多少位
  // max:文本长度最多多少位
  // pattern:文本正则校验
  // message:错误的提示信息
  // trigger:触发校验表单的时机 change->文本发生变化触发校验, blur:失去焦点的时候触发校验规则
  username: [
    // { required: true, message: '请输入用户名', trigger: 'blur' },
    { required: true, validator: validateUsername, trigger: 'blur' },
    { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' },
  ],
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
