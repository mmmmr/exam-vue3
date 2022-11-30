<template>
  <router-link to="/login"> toLogin </router-link>
  <router-link to="/main" > toMain </router-link>
  <router-view/>
  {{user.name}}
  {{user.isAdmin}}
  <a-button @click="handleChange">Name</a-button>
</template>

<script setup lang="ts">
import { userInfo } from './stores/user'
const user = userInfo()
const handleChange = () => {
  user.changeName()
}
</script>

<style scoped>
</style>
