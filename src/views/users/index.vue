<template>
  <div>
    <el-breadcrumb class="crumbs" separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">系统管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
    </el-breadcrumb>
    <search></search>
    <el-table :data="tableData" border>
      <el-table-column prop="id" label="序号"> </el-table-column>
      <el-table-column prop="username" label="用户名"> </el-table-column>
      <el-table-column prop="avatar" label="头像"> </el-table-column>
      <el-table-column label="角色">
        <template slot-scope="scope">
          <el-tag v-for="(item, index) in scope.row.roles" :key="index">{{
            item.name
          }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="email" label="邮箱"> </el-table-column>
      <el-table-column prop="createTime" label="注册时间"> </el-table-column>
      <el-table-column prop="status" label="状态">
        <template slot-scope="scope">
          <el-switch
            :value="scope.row.status == 1 ? true : false"
            active-color="#13ce66"
            inactive-color="#ff4949"
          >
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            @click="handleClick(scope.row)"
            type="success"
            plain
            size="small"
            >编辑</el-button
          >
          <el-button type="warning" plain size="small">分配角色</el-button>
          <el-button type="danger" plain size="small" @click="del(scope.$index)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import Search from '@/components/Search.vue'
import userListApi from '../../api/user'
export default {
  data() {
    return {
      tableData: ''
    }
  },
  methods: {
    async userList() {
      const response = await userListApi.getUserList()
      console.log(response)
      this.tableData = response.records
    },
    del(index) {
      this.tableData.splice(index, 1)
    }
  },
  created() {
    this.userList()
  },
  mounted() {},
  components: { Search },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped></style>
