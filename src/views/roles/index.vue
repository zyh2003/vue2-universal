<template>
  <div>
    <el-breadcrumb class="crumbs" separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">系统管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>角色管理</el-breadcrumb-item>
    </el-breadcrumb>
    <search></search>
    <el-table :data="tableData" border>
      <el-table-column prop="id" label="序号"> </el-table-column>
      <el-table-column prop="name" label="角色"> </el-table-column>
      <el-table-column prop="code" label="编码"> </el-table-column>
      <el-table-column prop="remark" label="描述"> </el-table-column>
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
      <el-table-column prop="updateTime" label="创建时间"> </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            @click="handleClick(scope.row)"
            type="success"
            plain
            size="small"
            >编辑</el-button
          >
          <el-button type="warning" plain size="small">分配权限</el-button>
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
import roleListApi from '../../api/user'
export default {
  data() {
    return {
      tableData: ''
    }
  },
  methods: {
    async roleList() {
      const response = await roleListApi.getRoleList()
      console.log(response)
      this.tableData = response.records
    },
    del(index) {
      this.tableData.splice(index, 1)
    }
  },
  created() {
    this.roleList()
  },
  mounted() {},
  components: { Search },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped></style>
