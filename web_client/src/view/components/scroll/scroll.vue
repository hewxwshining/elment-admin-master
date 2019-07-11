<template>
  <div class="scroll">
    这是撑开的内容；
  </div>
</template>
<script type="text/javascript">
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
    this.scrollBox.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll(evt) {
      let scrollHeight = evt.target.scrollHeight;
      let scrollTop = evt.target.scrollTop;
      let offsetHeight = evt.target.offsetHeight;
      if (offsetHeight + scrollTop == scrollHeight) {
		alert("滚动条滚动到底部了")	
		this.scrollBox.scrollTop = scrollTop - 10;
      }
    }
  },
  destroyed() {
    this.scrollBox.removeEventListener('scroll', this.handleScroll)
  }
}

</script>
<style lang="scss" scoped>
.scroll {
  background: #fafafa;
  height: 2500px;
}

</style>
