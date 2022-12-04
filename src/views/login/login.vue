<template>
  <div class="login">
    <div class="container">
      <el-tabs
        v-model="activeName"
        stretch
        type="card"
        class="demo-tabs"
        @tab-click="handleClick">
        <el-tab-pane label="User" name="user_password">
          <template #label>
            <span class="custom-tabs-label">
              <span>账号密码登录</span>
            </span>
          </template>
          <passwordForm ref="passwordFormRef"/>
        </el-tab-pane>
        <el-tab-pane label="Phone" name="phone">
          <template #label>
            <span class="custom-tabs-label">
              <span>手机验证码登录</span>
            </span>
          </template>
          <phoneForm ref="phoneFormRef"/>
        </el-tab-pane>
      </el-tabs>
      <el-button type="primary" size="large" @click="handleSubmit">登录</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup name="login">
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import passwordForm from './components/password-form.vue';
import phoneForm from './components/phone-form.vue'
const activeName = ref('user_password')

function handleClick(tab:TabsPaneContext,event: Event){
}

const passwordFormRef = ref()
const phoneFormRef = ref()
function handleSubmit() {
  if (activeName.value === 'user_password') {
    console.log(passwordFormRef.value);
    passwordFormRef.value?.submit()
    return
  }
  phoneFormRef.value?.submit()
}
</script>

<style scoped lang="less">
.login{
  height: 100%;
  width: 100%;
  background-image: url(https://images.unsplash.com/photo-1668770235702-44e39f4dfdb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60);
}
.container{
  width: 350px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/deep/ .el-button{
  width: 100%;
}

</style>
