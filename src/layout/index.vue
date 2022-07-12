<template>
  <div>
    <el-container>
      <el-aside width="200px" class="index-aside">
        <AppAside :list="list"></AppAside>
      </el-aside>
      <el-container>
        <el-header class="index-header">
          <AppHeader></AppHeader>
        </el-header>
        <el-main class="index-main">
          <AppMain></AppMain>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import AppAside from './Aside'
import AppHeader from './header'
import AppMain from './main'
import navApi from '../api/user'
export default {
  components: {
    AppAside,
    AppHeader,
    AppMain
  },
  data() {
    return {
      list: ''
    }
  },
  methods: {
    async getNav() {
      const response = await navApi.getNav()
      console.log(response)
      this.list = response
    }
  },
  created() {
    this.getNav()
  },
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.index-aside {
  background-color: #545c64;
  height: 100vh;
}
.index-header {
  background-color: #18bc9c;
}
.index-main {
  background-color: #e8edf0;
  padding: 20px;
}
</style>
