<template>
  <div class="no-bg">
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="panel">
          <div class="panel-heading">图像裁剪</div>
          <div class="panel-body">
            <div class="hollow hollow1">
              <div class="clip-shape"></div>
              <img :src="src" alt />
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="panel">
          <div class="panel-heading">图像裁剪</div>
          <div class="panel-body">
            <div class="hollow hollow1">
              <div class="clip-shape2"></div>
              <img :src="src" alt />
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="panel">
          <div class="panel-heading">不规则图像镂空</div>
          <div class="panel-body">
            <div class="hollow hollow1">
              <div class="clip-shape3"></div>
              <img :src="src" alt />
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="panel">
          <div class="panel-heading">外圆角选项卡</div>
          <div class="panel-body">
            <div class="hollow">
              <ul class="tab outdide-border">
                <li class="active">选项卡1</li>
                <li>选项卡2</li>
                <li>选项卡2</li>
              </ul>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script type="text/javascript">
import huge from "@/assets/images/胡歌.jpg";
import hujiao from "@/assets/images/五角星.svg";
export default {
  data() {
    return {
      src: huge
    };
  }
};

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
    outline: 999px solid rgba(0, 0, 0, 0.5);
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    cursor: pointer;
    margin: auto;
    cursor: move;
  }

  .clip-shape2 {
    width: 100px;
    height: 60px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    cursor: pointer;
    border-radius: 50%;
    box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.75);
    margin: auto;
    cursor: move;
  }

  .clip-shape3 {
    // width: 100px;
    // height: 60px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin:auto;
    background-color: rgba(0, 0, 0, 0.75);
    mask: no-repeat center;
    mask-image: linear-gradient(black, black), url(../../assets/images/五角星.svg);
    mask-size: cover,100px 100px;
    mask-composite: exclude;
    mask-composite: source-out;
    cursor: move;
  }
}

.outdide-border {
  list-style: none;

  li {
    float: left;
    padding: 5px 10px;
    background-color: #ddd;
    height: 30px;
    border-radius: 10px 10px 0 0;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      width: 30px;
      height: 30px;
      bottom: 0px;
      right: -30px;
      border-radius: 0 0 0 50%;
      -webkit-clip-path: polygon(0% 0%, 2% 0%, 0% 100%, 100% 100%);
      clip-path: polygon(0% 0%, 2% 0%, 0% 100%, 100% 100%);
      -webkit-box-shadow: 0 0 0 100px teal;
      box-shadow: 0 0 0 100px teal;
      z-index: 1
    }
  }

  .active::before {
    content: "";
    position: absolute;
    width: 30px;
    height: 30px;
    bottom: 0px;
    left: -30px;
    border-radius: 0 0 50% 0;
    -webkit-clip-path: polygon(0% 100%, 99% 0%, 100% 100%, 0 100%);
    clip-path: polygon(0% 100%, 99% 0%, 100% 100%, 0 100%);
    -webkit-box-shadow: 0 0 0 100px teal;
    box-shadow: 0 0 0 100px teal;

  }

  // .quar-radius {
  //   display: inline-block;
  //   width:30px;
  //   height: 30px;
  //   border-radius: 0 0 50% 0;
  //   clip-path: polygon(0% 100%, 100% 0%, 100% 100%, 0 100%);
  //   box-shadow: 0 0 0 100px teal;
  // }
}

</style>
