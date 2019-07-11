<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App'
}

</script>
<style lang="scss">
.size {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

#app {
  @extend .size
}

</style>
