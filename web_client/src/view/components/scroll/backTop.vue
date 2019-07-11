<template>
  <div class="scroll">
    <a href="#" id="backTop" hidden @click="scrollBox.scrollTop=0">返回顶部</a>
    这是撑开的内容；
  </div>
</template>
<script type="text/javascript">
import { throttle } from '@/libs/tools'
export default {
  name: 'componentScroll',
  data() {
    return {

    }
  },
  computed: {
    scrollBox() {
      return this.$parent.$el;
    }
  },
  mounted() {
    this.scrollBox.addEventListener('scroll', this.setVisible, false)
  },
  methods: {
    handleScroll(evt) {
      let scrollHeight = evt.target.scrollHeight;
      let scrollTop = evt.target.scrollTop;
      let offsetHeight = evt.target.offsetHeight;
      if (offsetHeight + scrollTop == scrollHeight) {
        alert("滚动条滚动到底部了")
      }
    },
    setVisible: throttle((evt) => {
      var h = evt.target.clientHeight;
      var scrollTop = evt.target.scrollTop;
      if (scrollTop >= h) {
        backTop.removeAttribute('hidden');
      } else {
        backTop.setAttribute('hidden', true)
      }
    }, 300)
  },

  destroyed() {
    this.scrollBox.removeEventListener('scroll', this.setVisible)
  }
}

</script>
<style lang="scss" scoped>
.scroll {
  background: #fafafa;
  height: 3500px;
}

#backTop {
  position: fixed;
  bottom: 20px;
  right: 36px;
  background: #0ff;
  padding: 5px
}

</style>
