<template>
  <div class="login-container">
    <h1 class="login-title">使用 ChatGPT 开发的后台管理</h1>
    <el-form :model="formData" ref="form" :rules="rules" class="login-form">
      <el-form-item prop="username">
        <el-input
          v-model="formData.username"
          placeholder="请输入用户名"
          prefix-icon="User"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="formData.password"
          type="password"
          placeholder="请输入密码"
          prefix-icon="Lock"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="login-btn" @click="handleLogin"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const formData = reactive({
  username: '',
  password: ''
})

const rules = {
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
}

const handleLogin = () => {
  validateForm()
    .then(() => {
      // 发送登录请求
    })
    .catch(() => {
      // 验证失败
    })
}

const validateForm = () => {
  return new Promise((resolve, reject) => {
    const form = ref(null)
    form.value.validate(valid => {
      if (valid) {
        resolve()
      } else {
        reject()
      }
    })
  })
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
}

.login-title {
  font-size: 28px;
  margin-bottom: 30px;
}

.login-form {
  width: 400px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.login-btn {
  width: 100%;
}
</style>
