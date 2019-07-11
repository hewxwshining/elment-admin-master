<template>
  <div class="tag-nav">
    <div class="close-con">
      <el-dropdown @command="handleTagCommand">
        <span class="el-dropdown-link">
          <i class="icon-close"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="close-all">关闭所有</el-dropdown-item>
          <el-dropdown-item command="close-others">关闭其他</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <!-- 右键弹出功能 -->
    <ul v-show="visible" :style="{left: contextMenuLeft + 'px', top: contextMenuTop + 'px'}" class="contextmenu">
      <li v-for="(item, key) of menuList" @click="handleTagCommand(key)" :key="key">{{item}} </li>
    </ul>
    <div class="btn-con left-btn">
      <el-button type="text" @click="handleScroll(240)">
        <i class="icon-pre1"></i>
      </el-button>
    </div>
    <div class="btn-con right-btn">
      <el-button type="text" @click="handleScroll(-240)">
        <i class="icon-next"></i>
      </el-button>
    </div>
    <div class="scroll-outer d-flex align-items-center" ref="scrollOuter" @DOMMouseScroll="handlescroll" @mousewheel="handlescroll">
      <div ref="scrollBody" class="scroll-body" :style="{left: tagBodyLeft + 'px'}">
        <transition-group name="el-fade-in-linear">
          <el-tag v-for='(item,key) in list' ref="tagsPageOpened" :key="`tag-nav-${key}`" :closable="item.name !== $config.homeName" :name="item.name" :class="[isCurrentTag(item) ? 'is-active' : 'default']" :data-route-item="item" @close="handleClose(item)" @click.native="handleClick(item)" @contextmenu.prevent.native="contextMenu(item, $event)">
            <span class="tag-dot-inner"></span>
            {{showTitleInside(item)}}
          </el-tag>
        </transition-group>
      </div>
    </div>
  </div>
</template>
<script>
import { showTitle, routeEqual } from '@/libs/util'
import beforeClose from '@/router/before-close'
export default {
  name: 'Tagnav',
  data() {
    return {
      tagBodyLeft: 0,
      rightOffset: 40,
      outerPadding: 4,
      contextMenuLeft: 0,
      contextMenuTop: 0,
      visible: false,
      menuList: {
        others: '关闭其他',
        all: '关闭所有'
      }
    }
  },
  props: {
    value: Object,
    list: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    currentRouteObj() {
      const { name, params, query } = this.value
      return { name, params, query }
    }
  },
  watch: {
    '$route'(to) {
      this.getTagElementByRoute(to);
    },
    visible(value) {
      if (value) {
        document.body.addEventListener('click', this.closeMenu)
      } else {
        document.body.removeEventListener('click', this.closeMenu)
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.getTagElementByRoute(this.$route)
    }, 200)
  },
  methods: {
    handlescroll(e) {
      var type = e.type
      let delta = 0
      if (type === 'DOMMouseScroll' || type === 'mousewheel') {
        delta = (e.wheelDelta) ? e.wheelDelta : -(e.detail || 0) * 40
      }
      this.handleScroll(delta)
    },
    handleScroll(offset) {
      const outerWidth = this.$refs.scrollOuter.offsetWidth
      const bodyWidth = this.$refs.scrollBody.offsetWidth
      if (offset > 0) {
        if (outerWidth < bodyWidth) {
          this.tagBodyLeft = Math.min(0, this.tagBodyLeft + offset)
        } else {
          this.tagBodyLeft = 0
        }
      } else {
        if (outerWidth < bodyWidth) {
          if (this.tagBodyLeft < -(bodyWidth - outerWidth)) {
            this.tagBodyLeft = this.tagBodyLeft
          } else {
            this.tagBodyLeft = Math.max(this.tagBodyLeft + offset, outerWidth - bodyWidth)
          }
        } else {
          this.tagBodyLeft = 0
        }
      }
    },
    handleTagCommand(type) {
      if (type.includes('all')) {
        // 关闭所有，除了home
        let res = this.list.filter(item => item.name === this.$config.homeName)
        this.$emit('on-close', res, 'all')
      } else if (type.includes('others')) {
        // 关闭除当前页和home页的其他页
        let res = this.list.filter(item => routeEqual(this.currentRouteObj, item) || item.name === this.$config.homeName)
        this.$emit('on-close', res, 'others', this.currentRouteObj)
        setTimeout(() => {
          this.getTagElementByRoute(this.currentRouteObj)
        }, 100)
      }
    },
    showTitleInside(item) {
      return showTitle(item, this)
    },
    isCurrentTag(item) {
      return routeEqual(this.currentRouteObj, item)
    },
    moveToView(tag) {
      const outerWidth = this.$refs.scrollOuter.offsetWidth
      const bodyWidth = this.$refs.scrollBody.offsetWidth
      if (bodyWidth < outerWidth) {
        this.tagBodyLeft = 0
      } else if (tag.offsetLeft < -this.tagBodyLeft) {
        // 标签在可视区域左侧
        this.tagBodyLeft = -tag.offsetLeft + this.outerPadding
      } else if (tag.offsetLeft > -this.tagBodyLeft && tag.offsetLeft + tag.offsetWidth < -this.tagBodyLeft + outerWidth) {
        // 标签在可视区域
        this.tagBodyLeft = Math.min(0, outerWidth - tag.offsetWidth - tag.offsetLeft - this.outerPadding)
      } else {
        // 标签在可视区域右侧
        this.tagBodyLeft = -(tag.offsetLeft - (outerWidth - this.outerPadding - tag.offsetWidth))
      }
    },
    getTagElementByRoute(route) {
      this.$nextTick(() => {
        this.refsTag = this.$refs.tagsPageOpened
        this.refsTag.forEach((item, index) => {
          if (routeEqual(route, item.$attrs['data-route-item'])) {
            let tag = this.refsTag[index].$el
            this.moveToView(tag)
          }
        })
      })
    },
    handleClose(current) {
      if (current.meta && current.meta.beforeCloseName && current.meta.beforeCloseName in beforeClose) {
        new Promise(beforeClose[current.meta.beforeCloseName]).then(close => {
          if (close) {
            this.close(current)
          }
        })
      } else {
        this.close(current)
      }
    },
    close(route) {
      let res = this.list.filter(item => !routeEqual(route, item))
      this.$emit('on-close', res, undefined, route)
    },
    handleClick(item) {
      this.$emit('input', item)
    },
    contextMenu(item, e) {
      if (item.name === this.$config.homeName) {
        return
      }
      this.visible = true
      const offsetLeft = this.$el.getBoundingClientRect().left
      this.contextMenuLeft = e.clientX - offsetLeft + 10
      this.contextMenuTop = e.clientY - 64
    },
    closeMenu() {
      this.visible = false
    }
  }
}

</script>
<style lang="scss" scoped>
@import "./tag-nav.scss";

</style>
