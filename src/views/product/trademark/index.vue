<!--
 * @Description: 品牌管理
 * @Author: 振顺
 * @Date: 2023-10-17 11:28:09
 * @LastEditTime: 2023-10-23 16:46:40
 * @LastEditors: 振顺
-->
<template>
  <div>
    <el-card class="box-card">
      <!-- 卡片顶部添加品牌按钮 -->
      <el-button
        type="primary"
        size="default"
        icon="Plus"
        @click="addTrademark"
      >
        添加品牌
      </el-button>
      <!-- 表格组件:用于展示已有的平台数据 -->
      <el-table border stripe style="margin: 10px 0" :data="trademarkArr">
        <el-table-column
          label="序号"
          width="80px"
          align="center"
          type="index"
        ></el-table-column>
        <el-table-column label="品牌名称" porp="tmName">
          <template #="{ row, $index }">
            <pre style="color: brown">{{ row.tmName }}</pre>
          </template>
        </el-table-column>
        <el-table-column label="品牌LOGO">
          <template #="{ row, $index }">
            <img
              :src="row.logoUrl"
              alt=""
              style="width: 100px; height: 100px"
            />
          </template>
        </el-table-column>
        <el-table-column label="品牌操作">
          <template #="{ row, $index }">
            <el-button
              type="primary"
              size="small"
              @click="updateTrademark(row)"
              icon="Edit"
            ></el-button>
            <el-popconfirm
              width="250px"
              icon="Delete"
              icon-color="red"
              :title="`您确定要删除${row.tmName}吗`"
              @confirm="removeTradeMark(row.id)"
            >
              <template #reference>
                <el-button
                  type="primary"
                  size="small"
                  icon="Delete"
                ></el-button>
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页器组件 -->
      <el-pagination
        v-model:current-page="pageNo"
        v-model:page-size="limit"
        :page-sizes="[3, 5, 7, 9, 11]"
        :background="true"
        layout=" prev, pager, next, jumper, ->,sizes,total"
        :total="total"
        @size-change="getHasTrademark"
        @current-change="getHasTrademark"
      />
    </el-card>
    <!-- 对话框组件 -->
    <el-dialog
      v-model="dialogFormVisible"
      :title="trademarkPramas.id ? '修改品牌' : '添加品牌'"
      @close="close"
    >
      <el-form
        :model="trademarkPramas"
        :rules="rules"
        ref="formRef"
        style="width: 80%"
      >
        <el-form-item label="品牌名称" label-width="100px" prop="tmName">
          <el-input
            v-model="trademarkPramas.tmName"
            autocomplete="off"
            placeholder="请输入品牌名称"
          />
        </el-form-item>
        <el-form-item label="品牌LOGO" label-width="100px" prop="logoUrl">
          <el-upload
            class="avatar-uploader"
            action="/api/admin/product/fileUpload"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img
              v-if="trademarkPramas.logoUrl"
              :src="trademarkPramas.logoUrl"
              class="avatar"
            />
            <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
          </el-upload>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="cancel">取消</el-button>
          <el-button type="primary" @click="confirm">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, nextTick } from 'vue'
import {
  reqHasTrademark,
  reqAddOrUpdateTrademark,
  reqDeleteTrademark,
} from '@/api/product/trademark/index'
import type {
  Records,
  TradeMarkResponseData,
  TradeMark,
} from '@/api/product/trademark/type'
import type { UploadProps } from 'element-plus'
import { ElMessage } from 'element-plus'
// 当前页码
let pageNo = ref<number>(1)
// 每页展示多少条数据
let limit = ref<number>(3)
// 存储已有品牌数据总数
let total = ref<number>(0)
// 存储已有品牌的数据
let trademarkArr = ref<Records>([])
// 控制对话框的显示与隐藏
let dialogFormVisible = ref<boolean>(false)
// 定义的收集新增品牌数据
let trademarkPramas = reactive<TradeMark>({
  tmName: '',
  logoUrl: '',
})
// 获取el-form组件实例
let formRef = ref()
//获取已有品牌的接口封装为一个函数:在任何情况下向获取数据,调用此函数即可
const getHasTrademark = async (pager = 1) => {
  pageNo.value = pager
  let result: TradeMarkResponseData = await reqHasTrademark(
    pageNo.value,
    limit.value,
  )
  if (result.code == 200) {
    total.value = result.data.total
    trademarkArr.value = result.data.records
  }
}
//组件挂载完毕钩子---发一次请求,获取第一页、一页三个已有品牌数据
onMounted(() => {
  getHasTrademark()
})

// const handleSizeChange = () => {
//   getHasTrademark()
// }
// const handleCurrentChange = () => {
//   //  当前页码发生变化的时候再次发请求获取对应已有品牌数据展示
//   getHasTrademark()
// }

// 关闭Dialog回调
const close = () => {
  formRef.value?.clearValidate(['tmName', 'logoUrl'])
}
// 添加品牌按钮回调
const addTrademark = () => {
  dialogFormVisible.value = true
  // 清空收集数据
  trademarkPramas.logoUrl = ''
  trademarkPramas.tmName = ''
  trademarkPramas.id = 0

  // formRef.value?.clearValidate(['tmName', 'logoUrl'])
  nextTick(() => {
    formRef.value.clearValidate(['tmName', 'logoUrl'])
  })
}
// 修改已有品牌的按钮回调
const updateTrademark = (row: TradeMark) => {
  // trademarkPramas.logoUrl = row.logoUrl
  // trademarkPramas.tmName = row.tmName
  // trademarkPramas.id = row.id
  formRef.value?.clearValidate(['tmName', 'logoUrl'])
  Object.assign(trademarkPramas, row)
  dialogFormVisible.value = true
}
// 对话框取消按钮
const cancel = () => {
  dialogFormVisible.value = false
}
// 对话框确认按钮
const confirm = async () => {
  await formRef.value.validate()
  let result: any = await reqAddOrUpdateTrademark(trademarkPramas)
  if (result.code == 200) {
    dialogFormVisible.value = false
    getHasTrademark(trademarkPramas.id ? pageNo.value : 1)
    ElMessage({
      type: 'success',
      message: trademarkPramas.id ? '修改品牌成功' : '添加品牌成功',
    })
  } else {
    dialogFormVisible.value = false
    ElMessage({
      type: 'error',
      message: trademarkPramas.id ? '修改品牌失败' : '添加品牌失败',
    })
  }
  dialogFormVisible.value = false
}

// 上传图片组件->上传图片前触发的钩子函数
const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
  // 钩子是在图片上传成功之前触发,上传文件之前可以约束文件类型与大小
  // 要求:上传文件格式png|jpg|gif 4M
  if (
    rawFile.type == 'image/png' ||
    rawFile.type == 'image/jpeg' ||
    rawFile.type == 'image/gif'
  ) {
    if (rawFile.size / 1024 / 1024 < 4) {
      return true
    } else {
      ElMessage({
        type: 'error',
        message: '上传文件大小小于4M',
      })
      return false
    }
  } else {
    ElMessage({
      type: 'error',
      message: '上传文件格式务必为PNG|JPG|GIF!',
    })
    return false
  }
}

// 图片上传成功钩子
const handleAvatarSuccess: UploadProps['onSuccess'] = (
  response,
  uploadFile,
) => {
  // response即为当前这次上传图片post请求服务器返回的数据
  trademarkPramas.logoUrl = response.data
  // 图片上传成功，清除掉对应图片校验结果
  formRef.value.clearValidate('logoUrl')
}

const validateLogoUrl = (rule: any, value: any, callback: any) => {
  if (!value) {
    callback(new Error('请上传LOGO图片'))
  } else {
    callback()
  }
}

// 表单校验规则
const rules = {
  tmName: [
    { required: true, message: '请输入品牌名称', trigger: 'blur' },
    { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' },
  ],
  logoUrl: [{ required: true, validator: validateLogoUrl }],
}

// 气泡确认框删除确认按钮回调
const removeTradeMark = async (id: number) => {
  let result: any = await reqDeleteTrademark(id)
  if (result.code == 200) {
    getHasTrademark(
      trademarkArr.value.length > 1 ? pageNo.value : pageNo.value - 1,
    )
    ElMessage({
      type: 'success',
      message: '删除品牌成功',
    })
  } else {
    ElMessage({
      type: 'error',
      message: '删除品牌失败',
    })
  }
}
</script>
<style scoped>
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>
<style scoped lang="scss"></style>
