<template>
  <div>
    <el-breadcrumb class="crumbs" separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">系统管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>菜单管理</el-breadcrumb-item>
    </el-breadcrumb>
    <search></search>
    <el-table :data="tableData" border>
      <el-table-column prop="id" label="序号"> </el-table-column>
      <el-table-column prop="label" label="展示名称"> </el-table-column>
      <el-table-column prop="name" label="文件名称"> </el-table-column>
      <el-table-column prop="path" label="路径"> </el-table-column>
      <el-table-column prop="component" label="前端component">
      </el-table-column>
      <el-table-column prop="perms" label="唯一标识"> </el-table-column>
      <el-table-column prop="icon" label="图标"> </el-table-column>
      <el-table-column prop="type" label="类型"> </el-table-column>
      <el-table-column prop="updateTime" label="注册时间"> </el-table-column>
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
          <el-button
            type="danger"
            plain
            size="small"
            @click="del(scope.$index)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import Search from '@/components/Search.vue'
import menuListApi from '../../api/user'
export default {
  data() {
    return {
      tableData: ''
    }
  },
  methods: {
    async menuList() {
      const response = await menuListApi.getMenuList()
      // console.log(response)
      this.tableData = response
    },
    del(index) {
      this.tableData.splice(index, 1)
    }
  },
  created() {
    this.menuList()
  },
  mounted() {},
  components: { Search },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped></style>
