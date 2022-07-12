<template>
  <div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      v-for="(item, index) in list.menus"
      :key="index"
      router
    >
      <!-- {{item.name}} -->
      <template v-if="item && item.children.length == 0">
        <el-menu-item :index="item.path">
          <i :class="'el-icon-' + item.icon"></i>
          <span slot="title">{{ item.label }}</span>
        </el-menu-item>
      </template>
      <template v-if="item && item.children.length > 0">
        <el-submenu :index="item.path">
          <template slot="title">
            <i :class="'el-icon-' + item.icon"></i>
            <span>{{ item.label }}</span>
          </template>
          <item v-for="(i, ind) in item.children" :key="ind" :i="i"></item>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
import Item from './Item.vue'
export default {
  props: ['list'],
  data() {
    return {}
  },
  methods: {},
  created() {},
  mounted() {},
  components: { Item },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.el-menu {
  border-right: none;
}
</style>
