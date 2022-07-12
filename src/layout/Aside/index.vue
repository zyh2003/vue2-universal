<template>
  <div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <el-menu-item index="/">
        <i class="el-icon-s-home"></i>
        <span slot="title">控制台</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-s-grid"></i>
          <span>系统管理</span>
        </template>
        <el-menu-item index="/sys/users">
          <i class="el-icon-user"></i>
          用户管理
        </el-menu-item>
        <el-menu-item index="/sys/roles">
          <i class="el-icon-user-solid"></i>
          角色管理
        </el-menu-item>
        <el-menu-item index="/sys/menus">
          <i class="el-icon-menu"></i>
          菜单管理
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {},
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.el-menu {
    border-right: none;
}

</style>
