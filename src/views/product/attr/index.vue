<!--
 * @Description: 属性管理
 * @Author: 振顺
 * @Date: 2023-10-17 11:29:43
 * @LastEditTime: 2023-11-07 16:03:54
 * @LastEditors: 振顺
-->
<template>
  <div>
    <!-- ?三级分类全局组件 -->
    <Category :scene="scene" />
    <el-card shadow="always" style="margin: 10px 0">
      <div v-show="scene == 0">
        <el-button
          type="primary"
          size="default"
          icon="Plus"
          :disabled="categoryStore.c3Id ? false : true"
          @click="addAttr"
        >
          添加属性
        </el-button>
        <el-table border stripe :data="attrArr" style="margin: 10px 0">
          <el-table-column
            label="序号"
            type="index"
            width="80px"
          ></el-table-column>
          <el-table-column
            label="属性名称"
            align="center"
            width="120px"
            prop="attrName"
          ></el-table-column>
          <el-table-column label="属性值名称">
            <template #="{ row, $index }">
              <el-tag
                v-for="item in row.attrValueList"
                :key="item.id"
                style="margin: 5px"
              >
                <div>{{ item.valueName }}</div>
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="120px">
            <el-button
              type="primary"
              size="small"
              icon="Edit"
              @click="updateAttr"
            ></el-button>
            <el-button
              type="primary"
              size="small"
              icon="Delete"
              @click=""
            ></el-button>
          </el-table-column>
        </el-table>
      </div>
      <div v-show="scene == 1">
        <el-form label-width="80px" :inline="true" size="normal">
          <el-form-item label="属性名称">
            <el-input
              placeholder="请你输入属性名称"
              v-model="attrParams.attrName"
            ></el-input>
          </el-form-item>
        </el-form>
        <el-button
          type="primary"
          size="default"
          icon="Plus"
          @click="addAttrValue"
          :disabled="attrParams.attrName ? false : true"
        >
          添加属性值
        </el-button>
        <el-button type="primary" size="default" @click="cancel">
          取消
        </el-button>
        <el-table
          border
          style="margin: 10px 0px"
          :data="attrParams.attrValueList"
        >
          <el-table-column
            label="序号"
            type="index"
            width="80"
            align="center"
          />
          <el-table-column label="属性值名称">
            <template #="{ row, $index }">
              <el-input
                v-model="row.valueName"
                v-if="row.flag"
                placeholder="请输入属性值的名称"
                size="small"
                @blur="toLook(row, $index)"
                :ref="refs"
                clearable
                @change=""
              ></el-input>
              <div v-else @click="toEdit(row)">{{ row.valueName }}</div>
            </template>
          </el-table-column>
          <el-table-column label="属性值操作"></el-table-column>
        </el-table>
        <el-button
          type="primary"
          size="default"
          @click="save"
          :disabled="attrParams.attrValueList.length > 0 ? false : true"
        >
          保存
        </el-button>
        <el-button type="primary" size="default" @click="cancel">
          取消
        </el-button>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue'
// 引入获取已有属性与属性值接口
import { reqAttr, reqAddOrUpdateAttr } from '@/api/product/attr'
import type { AttrResponseData, Attr, AttrValue } from '@/api/product/attr/type'
// 引入分类相关的仓库
import useCategoryStore from '@/store/modules/category'
import { ElMessage } from 'element-plus'
let categoryStore = useCategoryStore()
// 存储已有的属性与属性值
let attrArr = ref<Attr[]>([])
// 定义card组件内容切换变量
let scene = ref<number>(0) //  todoscene,显示table,scene=1,展示添加与修改属性结构
// 收集新增属性的数据
let attrParams = reactive<Attr>({
  attrName: '', //新增属性名
  attrValueList: [
    //新增属性值数组
    // {
    //   valueName: '',
    // },
  ],
  categoryId: '', // 三级分类的ID
  categoryLevel: 3, // 代表的是三级分类
})
let refs = ref()
watch(
  () => categoryStore.c3Id,
  (n, o) => {
    attrArr.value = []
    if (!n) return
    getAttr()
  },
)

// 获取已有的属性与属性值方法
const getAttr = async () => {
  const { c1Id, c2Id, c3Id } = { ...categoryStore }
  let result: AttrResponseData = await reqAttr(c1Id, c2Id, c3Id)
  console.log(result)
  if (result.code == 200) {
    attrArr.value = result.data
  }
}

// 添加属性按钮的回调
const addAttr = () => {
  // 每一次点击的时候,先清空一下数据再收集数据
  Object.assign(attrParams, {
    attrName: '', //新增属性名
    attrValueList: [
      //新增属性值数组
      // {
      //   valueName: '',
      // },
    ],
    categoryId: categoryStore.c3Id, // 三级分类的ID // 点击按钮时收集新增属性的三级分类的ID
    categoryLevel: 3, // 代表的是三级分类
  })
  // 切换为添加与修改属性的结构
  scene.value = 1
}
// table表格修改已有属性按钮的回调
const updateAttr = () => {
  // 切换为添加与修改属性的结构
  scene.value = 1
}
// 取消按钮的回调
const cancel = () => {
  scene.value = 0
}
// 添加属性值按钮回调
const addAttrValue = () => {
  attrParams.attrValueList.push({
    valueName: '',
    flag: true, // 单独控制每一个属性值编辑模式与查看模式的切换
  })
  refs.value.focus()
}
// 保存按钮的回调
const save = async () => {
  // 发请求
  let result: any = await reqAddOrUpdateAttr(attrParams)
  if (result.code == 200) {
    scene.value = 0
    getAttr()
    ElMessage({
      type: 'success',
      message: attrParams.id ? '修改属性成功' : '添加属性成功',
    })
  } else {
    ElMessage({
      type: 'error',
      message: attrParams.id ? '修改属性失败' : '添加属性失败',
    })
  }
}
// 属性值表单元素失却焦点事件回调
const toLook = (row: AttrValue, $index: number) => {
  // 非法情况判断1
  if (row.valueName.trim() == '') {
    // 删除调用对应属性值为空的元素
    attrParams.attrValueList.splice($index, 1)
    // 提示信息
    ElMessage({
      type: 'error',
      message: '属性值不能为空',
    })
  }
  // 非法情况判断1
  let repeat = attrParams.attrValueList.find((item) => {
    // 把当前失去焦点属性值对象从当前数组扣除判断
    if (item != row) {
      return item.valueName === row.valueName
    }
  })
  if (repeat) {
    // attrParams.attrValueList.splice($index, 1)
    ElMessage({
      type: 'error',
      message: '属性值不能重复',
    })
    return
  }
  row.flag = false
}
const toEdit = (row: AttrValue) => {
  row.flag = true
}
</script>
<style scoped lang="scss"></style>
