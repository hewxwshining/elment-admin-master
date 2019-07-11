<template>
  <el-submenu :index="`${parentName}`">
    <template slot="title">
      <i :class="parentItem.icon"></i>
      <span slot="title">{{showTitle(parentItem)}}</span>
    </template>
    <template v-for="item in children">
      <template v-if="item.children && item.children.length ===1">
        <side-menu-item v-if="showChildren(item)" :key="`menu-${item.name}`" :parent-item="item"></side-menu-item>
        <el-menu-item v-else :index="getNameOrHref(item, true)"  :key="`${item.name}`">
          <i :class="item.children[0].icon || ''" ></i>
          <span slot="title"> {{ showTitle(item.children[0]) }}</span>
        </el-menu-item>
      </template>
      <template v-else>
        <side-menu-item v-if="showChildren(item)" :key="`menu-${item.name}`" :parent-item="item"></side-menu-item>
        <el-menu-item v-else :index="getNameOrHref(item)" :key="`${item.name}`">{{ showTitle(item) }}</el-menu-item>
      </template>
    </template>
  </el-submenu>
</template>
<script>
import mixin from './mixin'
import itemMixin from './itemMixiu'
export default {
  name: 'SideMenuItem',
  mixins: [mixin, itemMixin],
}

</script>
