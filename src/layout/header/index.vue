<template>
  <div class="header-content">
    <div class="header-left"></div>
    <div class="header-right"></div>
  </div>
</template>

<script>
import UserInfoApi from '../../api/user'
export default {
  data() {
    return {}
  },
  methods: {
    /**
     * 获取用户信息
    */
    async userInfo() {
      const response = await UserInfoApi.getUserInfo()
      console.log(response)
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
    width: 200px;
    height: 100%;
    background-color: #fff;
  }
}
</style>
