<template>
  <el-form :model="form" label-width="60px" ref="formRef" :rules="rules">
      <el-form-item label="账号" prop="name">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" type="password" show-password/>
      </el-form-item>
  </el-form>
</template>

<script lang="ts" setup name="password-form">
import { reactive, ref } from 'vue';
import type { FormInstance, FormRules } from 'element-plus'
import { userInfoStore } from '../../../stores/user/user'
import vvLocal from '../../../utils/localStorge'

const form = reactive({
  name: vvLocal.getLocal('name') ?? '',
  password: vvLocal.getLocal('password') ?? ''
})

const rules = reactive<FormRules>({
  name: [
    {
      required: true,
      message: '请输入账号',
      trigger: 'change',
    },
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'change',
    },
  ],
})

const formRef = ref<FormInstance>()
const userInfo = userInfoStore()
const submit = async (aotuLogin:[string]) =>{
  await formRef.value?.validate()
  aotuLogin.map( it =>{
    if(it === '记住密码') {
      vvLocal.setLocal('name', form.name)
      vvLocal.setLocal('password', form.password)
    }
  })
  userInfo.login(form)
}

defineExpose({
  submit
})
</script>
