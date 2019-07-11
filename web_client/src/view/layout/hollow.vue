<template>
  <div class="no-bg">
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="panel">
          <div class="panel-heading">
            图像裁剪
          </div>
          <div class="panel-body">
            <div class="hollow hollow1">
            	<div class="clip-shape"></div>
              <img :src="src" alt="">
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script type="text/javascript">
import huge from '@/assets/images/胡歌.jpg'
export default {
  data() {
    return {
      src: huge
    }
  }
}

</script>
<style lang="scss" scoped>
.hollow {
  height: 200px;
  background: #fff;
  overflow: hidden;
}

.hollow1 {
	position: relative;
  img {
  	width: 100%;
    // height: 100%;
  }
  .clip-shape {
  	width: 100px;
  	height: 100px;
  	outline: 999px solid  rgba( 0,0,0,0.5);
  	position: absolute;
  	left: 0;
  	right: 0;
  	top: 0;
  	bottom: 0;
  	cursor: pointer;
  	margin: auto;
  }
}

</style>
