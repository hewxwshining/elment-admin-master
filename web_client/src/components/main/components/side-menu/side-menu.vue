<template>
  <div class="side-menu">
    <div class="title">
      <h2>Ele-admin</h2>
    </div>
    <el-menu :default-active="activeName" :collapse="isCollapse" @select="handleSelect" :unique-opened="true">
      <template v-for="(item,key) in menuList">
        <template v-if="item.children && item.children.length ===1">
          <side-menu-item v-if="showChildren(item)" :key="`menu-${item.name}`" :parent-item="item"></side-menu-item>
          <el-menu-item v-else :index="getNameOrHref(item, true)" :key="key">
            <i :class="item.children[0].icon || ''"></i>
            <span slot="title"> {{ showTitle(item.children[0]) }}</span>
          </el-menu-item>
        </template>
        <template v-else>
          <side-menu-item v-if="showChildren(item)" :key="`menu-${item.name}`" :parent-item="item"></side-menu-item>
          <el-menu-item v-else :index="getNameOrHref(item)" :key="key">
            <i :class="item.icon || ''"></i>
            <span slot="title">{{ showTitle(item) }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>
<script>
import SideMenuItem from './side-menu-item'
import mixin from './mixin'
import config from '@/config'
export default {
  name: "side-menu",
  mixins: [mixin],
  data() {
    return {
      defaultActive: config.homeName
    };
  },
  components: {
    SideMenuItem
  },
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    },
    menuList: {
      type: Array,
      default () {
        return []
      }
    },
    activeName: {
      type: String,
      default: ""
    }
  },
  // mounted() {
  // console.log(this.menuList);
  // },
  methods: {
    handleSelect(name) {
      this.$emit('on-select', name)
    }
  }
}

</script>
<style lang="scss">
@import "~common/css/variable.scss";

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-menu {
  border: 0px;
  text-align: left;
  background: $side-bg;
  transition: all 0.5s;

  .el-submenu {
    position: relative;
  }

  .el-submenu.is-active:not(.is-opened) {
    &:before {
      content: "";
      height: 100%;
      position: absolute;
      left: 0px;
      top: 0px;
      width: 3px;
      background: $side-li-visited;
    }
  }

  .el-menu-item,
  .el-submenu__title {
    color: rgba(255, 255, 255, 0.7);
  }

  .el-menu-item.is-active {
    color: rgba(255, 255, 255, 1);
    background: $side-li-visited;

  }

  .is-opened {
    .el-menu {
      background: $side-li-open;
    }
  }

  .el-menu-item:focus:not(.is-active),
  .el-menu-item:hover:not(.is-active) {
    color: rgba(255, 255, 255, 1);
    background: $side-bg-hover;
  }

  .el-submenu__title:hover {
    background: $side-bg;
  }
}

.side-menu {
  overflow: hidden;
  overflow-y: auto;
  height: 100%;
  background: $side-bg;

  .title {
 
    h2,
    .logo-icon {
      height: 4.166667rem;
      color: #dad9d9;
      line-height: 4.166667rem;
      font-size: 1.333333rem;
      border-bottom: 1px solid #1b1d23; //#16181d
      margin: 0px;
      box-sizing: border-box;
    }

    .logo-icon {
      padding: 10px;
      box-sizing: border-box;
    }

    img {
      height: 100%;
    }
  }

  .el-menu {
    @extend .el-menu;
  }
}

.el-menu--vertical,
.el-menu--vertical .el-menu--popup {
  background: $side-bg;
}

</style>
