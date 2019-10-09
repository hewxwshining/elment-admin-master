<template>
  <el-container class="size">
    <el-aside :width="collapsed? '64px':'200px'">
      <side-menu :isCollapse="collapsed" ref="sideMenu" :active-name="$route.name" :menu-list="menuList" @on-select="turnToPage"></side-menu>
    </el-aside>
    <el-container>
      <el-header height="50px" class="box-shadow-bottom">
        <header-bar :isCollapse="collapsed" @listenHandleCollapse="handleCollapsedChange">
          <div>
            {{username||'用户名'}}
            <el-button type="text" @click="logout()">退出</el-button>
          </div>
        </header-bar>
      </el-header>
      <el-container direction="vertical">
        <div class="tag-nav-wrapper">
          <tag-nav :value="$route" :list="tagNavList" @input="handleClick" @on-close="handleCloseTag"></tag-nav>
        </div>
        <el-main ref="main-content">
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>
<script>
import SideMenu from './components/side-menu/side-menu'
import HeaderBar from './components/header-bar/header-bar'
import TagNav from './components/tag-nav/tag-nav'
import routers from '@/router/routers'
import { mapMutations, mapActions, mapGetters } from 'vuex'
import { getNewTagList, routeEqual } from '@/libs/util'
import {
  setToken
} from '@/libs/cookies'

export default {
  name: "Main",
  data() {
    return {
      collapsed: false,
    }
  },
  computed: {
    menuList() {
      return this.$store.getters.menuList;
    },
    tagNavList() {
      return this.$store.state.app.tagNavList;
    },
    username() {
      return this.$store.state.user.username;
    }
  },
  components: {
    SideMenu,
    HeaderBar,
    TagNav
  },
  methods: {
    handleCollapsedChange(data) {
      this.collapsed = data;
    },
    turnToPage(route) {
      let { name, params, query } = {}
      if (typeof route === 'string') name = route
      else {
        name = route.name
        params = route.params
        query = route.query
      }
      if (name.indexOf('isTurnByHref_') > -1) {
        window.open(name.split('_')[1])
        return
      }
      this.$router.push({
        name,
        params,
        query
      })
    },
    handleCloseTag(res, type, route) {
      if (type !== 'others') {
        if (type === 'all') {
          this.turnToPage(this.$config.homeName)
        } else {
          if (routeEqual(this.$route, route)) {
            this.closeTag(route)
          }
        }
      }
      this.setTagNavList(res)
    },
    handleClick(item) {
      this.turnToPage(item)
    },
    logout() {
      setToken("");
      this.$router.push({ name: 'login' })
    },
    ...mapMutations([
      'setBreadCrumb',
      'setHomeRoute',
      'setTagNavList',
      'addTag',
      'closeTag'
    ])
  },
  watch: {
    '$route'(newRoute) {
      const { name, query, params, meta } = newRoute
      this.addTag({
        route: { name, query, params, meta },
        type: 'push'
      })
      // 更新标签导航BreadCrumbList
      this.setBreadCrumb(newRoute);
      this.setTagNavList(getNewTagList(this.tagNavList, newRoute))
    }
  },
  mounted() {
    /**
     * @description 初始化设置面包屑导航和标签导航
     */
    this.setHomeRoute(routers);
    this.setBreadCrumb(this.$route);
    this.setTagNavList();
    const { name, params, query, meta } = this.$route
    this.addTag({
      route: { name, params, query, meta }
    })
  }
}

</script>
<style lang="scss" scoped>
@import "~common/css/variable.scss";

.el-aside {
  background-color: $side-bg;
  color: #333;
  text-align: center;
  transition: width 0.5s;
  z-index: 2;

}

.el-main {
  position: relative;
  background: $bg;

  &>div {
    background: #fff;
  }
}

.tag-nav-wrapper {
  padding: 0;
  height: 3.333333rem;
  background: $tag-nav-bg;
  flex: none;
}

// 指定方向时需要添加这条语句，要不然 el-main 滚动条在 firefox 不显示
.el-container.is-vertical {
  overflow: hidden;
}

</style>
