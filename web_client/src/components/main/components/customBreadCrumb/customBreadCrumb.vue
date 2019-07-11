<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="item in list" :to="item.to" :key="`bread-crumb-${item.name}`">
      <i :class="item.icon"></i>
      {{showTitle(item)}}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script>
import { showTitle } from '@/libs/util'
export default {
  name: "customBreadCrumb",
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    showTitle(item) {
      return showTitle(item, this)
    },
  }
}

</script>
<style></style>
