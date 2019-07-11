<template>
  <el-container>
    <div class="d-flex align-items-center">
      <el-button type="text" class="bold" @click="collapsed"><i :class="[nowCollapse?'icon-zhankaicaidan':'icon-shouqicaidan']"></i></el-button>
      <custom-bread-crumb class="bread-crumb" :list="breadCrumbList">
      </custom-bread-crumb>
    </div>
    <div class="custom-content-con">
      <slot></slot>
    </div>
  </el-container>
</template>
<script>
import customBreadCrumb from '../customBreadCrumb/customBreadCrumb'
export default {
  name: "header-bar",
  data() {
    return {
      nowCollapse: this.isCollapse
    }
  },
  components: {
    customBreadCrumb
  },
  computed: {
    breadCrumbList() {
      return this.$store.state.app.breadCrumbList
    }
  },
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    collapsed() {
      this.nowCollapse = !this.nowCollapse;
      this.$emit('listenHandleCollapse', this.nowCollapse);
    }
  }
}

</script>
<style lang="scss" scoped>
.el-container {
  justify-content: space-between;
  height: 100%;
}

.el-button,
.el-button--text:focus,
.el-button--text:hover {
  color: #333;
  font-weight: bold;
}

.bread-crumb {
  margin-left: 1.666667rem
}

</style>
