<template>
  <div>
    <el-menu-item :index="i.path">
      <i :class="'el-icon-' + i.icon"></i>
      {{ i.label }}
    </el-menu-item>
  </div>
</template>

<script>
export default {
  props: ['i'],
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

<style lang="scss" scoped></style>
