<template>
  <div class="header-content">
    <div class="header-left"></div>
    <div class="header-right">
      <el-tooltip class="item" effect="dark" content="全屏" placement="bottom">
        <i class="el-icon-rank" />
      </el-tooltip>

      <el-tooltip
        class="item"
        effect="dark"
        content="关闭全部标签"
        placement="bottom"
      >
        <i class="el-icon-circle-close" />
      </el-tooltip>

      <div class="block">
        <el-avatar :size="50" :src="circleUrl"></el-avatar>
      </div>
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          {{ username }}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人设置</el-dropdown-item>
          <el-dropdown-item command="quit">安全退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import UserInfoApi from '../../api/user'
export default {
  data() {
    return {
      circleUrl: '',
      username: ''
    }
  },
  methods: {
    /**
     * 获取用户信息
     */
    async userInfo() {
      const { avatar, username } = await UserInfoApi.getUserInfo()
      // console.log(response)
      this.circleUrl = avatar
      this.username = username
    },
    /**
     * 退出登录
     */
    handleCommand(command) {
      this.quit()
    },
    quit() {
      console.log(1111)
      localStorage.removeItem('token')
      this.$notify({
        title: '提示',
        message: '退出成功',
        type: 'success'
      })
      this.$router.push('/login')
    }
  },
  created() {
    this.userInfo()
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.header-content {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  height: 60px;
  .header-left {
    width: 400px;
    height: 100%;
    background-color: #fff;
  }
  .header-right {
    color: white;
    .block {
      margin-right: 10px;
    }
    i {
      font-size: 24px;
      margin: 0 10px;
    }
    .el-dropdown-link {
      color: white;
      font-size: 18px;
      font-weight: bold;
    }
    height: 100%;
    display: flex;
    align-items: center;
  }
}
</style>
