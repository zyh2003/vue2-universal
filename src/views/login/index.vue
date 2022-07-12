<template>
  <div class="video-box">
    <video
      class="video-background"
      preload="auto"
      loop
      playsinline
      autoplay
      src="../../assets/宇宙.mp4"
      tabindex="-1"
      muted="muted"
    ></video>
    <div class="login-content">
      <h1>智慧服务平台</h1>
      <h3>欢迎登录</h3>
      <el-form :model="loginForm" :rules="rules" ref="form" class="form">
        <el-form-item prop="username">
          <el-input
            v-model.trim="loginForm.username"
            placeholder="请输入账号"
            suffix-icon="el-icon-user-solid"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            v-model.trim="loginForm.password"
            placeholder="请输入密码"
            show-password
            suffix-icon="el-icon-s-goods"
          ></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <div class="verify">
            <el-input
              v-model.trim="loginForm.code"
              placeholder="请输入验证码"
            ></el-input>
            <el-image
              @click.stop="cut"
              :src="codeImageUrl"
              class="login-image"
            ></el-image>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button
            class="login-btn"
            @click="handleVerifyForm"
            type="danger"
            :loading="loadingStatus"
            >{{ loadingStatus ? '登录中...' : '立即登录' }}</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import UserApi from '../../api/user'
import rules from './rule'
export default {
  name: 'login',
  data() {
    return {
      // loading的加载状态
      loadingStatus: false,
      codeImageUrl: '',
      loginForm: {
        username: '',
        password: '',
        code: '',
        token: ''
      },
      rules: rules
    }
  },
  methods: {
    /**
     * 获取验证码
     */
    async handleGetCaptcha() {
      const { captchaImg, token } = await UserApi.getCaptcha()
      // console.log(response)
      this.codeImageUrl = captchaImg
      this.loginForm.token = token
    },
    /**
     * 登录表单校验
     */
    handleVerifyForm() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          // console.log(this.loginForm)
          this.loginOnSubmit()
        }
      })
    },
    /**
     * 登录提交
     */
    async loginOnSubmit() {
      try {
        const token = await this.login(this.loginForm)
        if (!token) return
        this.$message({
          showClose: true,
          message: '登录成功',
          type: 'success'
        })
        this.loadingStatus = true
        await this.$router.push('/')
      } catch (error) {}
      this.loadingStatus = false
    },
    /**
     * vuex登录
     */
    ...mapActions({
      login: 'users/login'
    }),
    /**
     * 点击切换验证码
     */
    cut() {
      this.loginForm.code = ''
      this.handleGetCaptcha()
    }
  },
  created() {
    this.handleGetCaptcha()
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.video-box {
  position: relative;
  height: 100vh;
  /*进行视频裁剪*/
  overflow: hidden;
}

.video-box .video-background {
  position: absolute;
  left: 50%;
  top: 50%;
  /*保证视频内容始终居中*/
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  /*保证视频充满屏幕*/
  object-fit: cover;
  min-height: 800px;
}
.login-content {
  position: absolute;
  transform: translate(-50%, -50%);
  top: 300px;
  left: 50%;
  padding: 100px;
  background-color: rgba(0, 0, 0, 0);
  color: white;
  h1 {
    font-weight: normal;
    font-size: 42px;
    letter-spacing: 5px;
    margin-bottom: 200px;
  }
  h3 {
    margin-bottom: 30px;
    font-weight: normal;
    font-size: 30px;
  }
  .el-input__inner {
    border-radius: 5px;
  }
  .verify {
    display: flex;
    align-items: center;
  }
  .login-btn {
    width: 100%;
  }
  .login-image {
    width: 200px;
    height: 40px;
    border-radius: 5px;
    margin-left: 10px;
    cursor: pointer;
  }
}
</style>
