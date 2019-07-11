<template>
  <div class="card" style="    border-color: rgba(1,1,1,0);">
    <div class="card-body">
      <div>
        <h2>filter:{{value}}</h2>
        <div class="imgbox">
          <img :src="huge" ref="img" width="400" alt="">
          <br>
          <br>
          <el-radio-group v-model="radio" @change="choice">
            <el-radio :label="''">原图</el-radio>
            <el-radio :label="'blur'">模糊（blur）</el-radio>
            <el-radio :label="'brightness'">亮度（brightness）</el-radio>
            <el-radio :label="'contrast'">对比度（contrast）</el-radio>
            <el-radio :label="'drop-shadow'">投影（drop-shadow）</el-radio>
            <el-radio :label="'grayscale'">灰度（grayscale）</el-radio>
            <el-radio :label="'hue-rotate'">色调变化（hue-rotate）</el-radio>
            <el-radio :label="'invert'">反相（invert）</el-radio>
            <el-radio :label="'opacity'">透明度（opacity）</el-radio>
            <el-radio :label="'saturate'">饱和度（saturate）</el-radio>
            <el-radio :label="'sepia'">褐色（sepia）</el-radio>
          </el-radio-group>
        </div>
      </div>
      <br>
      <div>
        <h2>局部模糊，径向模糊</h2>
        <div class="d-flex">
          <div class="box-blur">
            <img :src="huge" class="radial-blur">
            <img :src="huge">
          </div>
          <div class="box-blur" style="margin-left: 20px">
            <img :src="huge" class="local-blur">
            <img :src="huge">
          </div>
        </div>
      </div>
      <br>
      <div>
        <h2>色彩流动</h2>
        <div class="flow-colorful"></div>
      </div>
      <br>
      <div>
        <h2>融合粘滞效果</h2>
        <div class="fusion-wrapper">
          <div class="fusion-box">
            <div class="box-0 box-1"></div>
            <div class="box-0 box-2"></div>
          </div>
        </div>
      </div>
      <br>
      <div>
        <h2>单标签实现水滴效果</h2>
        <div class="water-wrapper">
          <div class="water-box">
            <div class="water">MAGICCSS</div>
          </div>
        </div>
      </div>
      <br>
      <div>
        <h2>分享菜单</h2>
        <div class="share-wranpper">
          <svg width="0" height="0">
            <defs>
              <filter id="goo">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                <feComposite in="SourceGraphic" in2="goo" operator="atop" />
              </filter>
            </defs>
          </svg>
          <input type="checkbox" id="share">
          <div class="target">
            <label class="share" for="share">分享</label>
            <span class="icon-share-weibo"><i class="icon-xinlang"></i></span>
            <span class="icon-share-wechat"><i class="icon-weixin"></i></span>
            <span class="icon-share-qq"><i class="icon-qq"></i></span>
          </div>
        </div>
      </div>
      <br>
      <div>
        <h2>水波纹滤镜</h2>
        <div>
          <el-button id='button-ripple' type="primary" @click="ripple('button-ripple')">点击我</el-button>
          <img src="./胡歌.jpg" id="img-ripple" alt="" height="200"  @click="ripple('img-ripple')">
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import huge from '@/assets/images/胡歌.jpg'
import rippleEffect from '@/common/js/ripple-min'
export default {
  data() {
    return {
      radio: '',
      value: "",
      huge: huge
    }
  },
  mounted() {
  
  },
  methods: {
    choice(val) {
      if (val == "") {
        this.$refs.img.style.filter = "";
        this.value = '';
      } else if (val == 'blur') {
        this.$refs.img.style.filter = "blur(4px)";
        this.value = "blur(4px)"
      } else if (val == "brightness") {
        this.$refs.img.style.filter = "brightness(1.4)";
        this.value = "brightness(1.4)"
      } else if (val == "contrast") {
        this.$refs.img.style.filter = "contrast(2)";
        this.value = "contrast(2)"
      } else if (val == "drop-shadow") {
        this.$refs.img.style.filter = "drop-shadow(4px 4px 8px blue)";
        this.value = "drop-shadow(4px 4px 8px blue)"
      } else if (val == "grayscale") {
        this.$refs.img.style.filter = "grayscale(50%)";
        this.value = "grayscale(50%)"
      } else if (val == "hue-rotate") {
        this.$refs.img.style.filter = "hue-rotate(90deg)";
        this.value = "hue-rotate(90deg)"
      } else if (val == "invert") {
        this.$refs.img.style.filter = "invert(75%)";
        this.value = "invert(75%)"
      } else if (val == "opacity") {
        this.$refs.img.style.filter = "opacity(25%)";
        this.value = "opacity(25%)"
      } else if (val == "saturate") {
        this.$refs.img.style.filter = "saturate(230%)";
        this.value = "saturate(230%)"
      } else if (val == "sepia") {
        this.$refs.img.style.filter = "sepia(60%)";
        this.value = "sepia(60%)"
      }
    },
    ripple(type) {
      rippleEffect(document.getElementById(type));
    }
  }
}

</script>
<style lang="scss" scoped>
.box-blur {
  width: 300px;
  height: 200px;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
  }
}

.radial-blur {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  filter: blur(20px);
  mask-image: radial-gradient(transparent, transparent 10%, black 60%);
  transform: scale(1.2);
}

.local-blur {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  filter: blur(12px);
  mask: no-repeat center;
  mask-image: linear-gradient(black, black), linear-gradient(black, black);
  mask-size: cover, 60px 60px;
  mask-composite: exclude;
  mask-composite: source-out;
  transform: scale(1.1);
}

.flow-colorful {
  max-width: 600px;
  height: 150px;
  background: linear-gradient(to right, red, orange, yellow, green, cyan, blue, purple);
  animation: hue 6s linear infinite;
}

@keyframes hue {
  from {
    filter: hue-rotate(0deg);
  }

  to {
    filter: hue-rotate(360deg);
  }
}

.fusion-wrapper {
  overflow: hidden;

  .fusion-box {
    padding: 100px;
    padding-bottom: 200px;
    background: #000;
    filter: blur(10px) contrast(5);

    .box-0 {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      position: absolute;
    }

    .box-1 {
      background-color: #4f66ce;
      animation: fly-r 5s infinite alternate;
    }

    .box-2 {
      width: 60px;
      height: 60px;
      margin-top: 20px;
      background-color: white;
      animation: fly-l 5s infinite alternate;
    }
  }
}

@keyframes fly-r {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(120px);
  }
}

@keyframes fly-l {
  from {
    transform: translateX(120px);
  }

  to {
    transform: translateX(0);
  }
}

.water-wrapper {
  filter: blur(3px) contrast(10);
  overflow: hidden;

  .water-box {
    padding: 10px;
    background: #000;

    .water {
      position: relative;
      width: 476px;
      height: 129px;
      color: #fff;
      font-size: 100px;
      text-align: center;
      margin: 100px;
      border-bottom: 10px solid #fff;
      -webkit-transform: skewY(5deg);
      transform: skewY(5deg);

      &::before {
        position: absolute;
        content: "";
        bottom: -20px;
        width: 10px;
        height: 20px;
        border-radius: 50%;
        background: #fff;
        transform: translate(0, 0);
        animation: water-move 7.5s ease-in-out infinite;
      }

      &::after {
        position: absolute;
        content: "";
        left: 0;
        bottom: -20px;
        width: 10px;
        height: 20px;
        border-radius: 50%;
        background: #fff;
        transform: translate(0, 0);
        animation: water-move 7.5s ease-in-out 1s infinite;
      }
    }
  }
}

@keyframes water-move {
  80% {
    bottom: -30px;
    transform: translate(466px, 0);
  }

  93% {
    transform: translate(466px, 3px);
    opacity: 1;
  }

  100% {
    transform: translate(466px, 150px);
    opacity: 0;
  }
}

.share-wranpper {
  height: 150px;

  .target {
    height: 120px;
    max-width: 200px;
    filter: url(#goo);
    text-align: center;
    position: relative;

  }

  .share {
    display: block;
    width: 64px;
    line-height: 64px;
    background-color: #cd0000;
    color: #fff;
    border-radius: 50%;
    margin: auto;
    position: relative;
    z-index: 1;
  }

  [type="checkbox"] {
    position: absolute;
    clip: rect(0 0 0 0);
  }

  [class*="icon-share-"] {
    position: absolute;
    width: 48px;
    height: 48px;
    background-color: #cd0000;
    border-radius: 50%;
    transition: transform .5s;
    top: 8px;
    left: 0;
    right: 0;
    margin: auto;
    -ms-transform: scale(0.1);
    transform: scale(0.1);

    i {
      color: #ffff;
      font-size: 18px;
      line-height: 48px;
    }
  }

  :checked+.target .icon-share-weibo {
    transform: scale(1) translate(-70px, 60px);
  }

  :checked+.target .icon-share-wechat {
    transform: scale(1) translate(0, 75px);
  }

  :checked+.target .icon-share-qq {
    transform: scale(1) translate(70px, 60px);
  }

  :checked+.target .share {
    animation: all 1s;
  }
}

</style>
