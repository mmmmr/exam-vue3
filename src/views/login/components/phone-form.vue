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

<script setup lang="ts" name="phone-form">
import { reactive, ref } from 'vue';
import type { FormInstance, FormRules } from 'element-plus'

const form = reactive({
  name:'',
  password:''
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
const submit = async () =>{
  await formRef.value?.validate()
  console.log(form);
}

defineExpose({
  submit
})

</script>
