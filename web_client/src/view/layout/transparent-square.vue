<template>
  <div class="no-bg">
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="panel">
          <div class="panel-heading">
            透明方格
          </div>
          <div class="panel-body">
            <div class="square square1">
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="panel">
          <div class="panel-heading">
            网格
          </div>
          <div class="panel-body">
            <div class="square square2">
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="panel">
          <div class="panel-heading">
            平行四边形
          </div>
          <div class="panel-body">
            <div class="square square3">
              <div class="shape-left"></div>
              <div class="shape-right"></div>
              <div class="article">
                如果你说有些网站已经是通过ajax去实现的页面，比如gmail，比如qq邮箱。那么你要注意到哪怕是这些页面，它们页面的「龙骨」也并非是全部通过ajax去实现的，依然还是后端直出——这也就是我们现在又老生常谈的服务端渲染。
                服务端渲染的好处有很多，比如对于SEO友好，一些对安全性要求高的页面采用服务端渲染是更保险的。而在当时还没有node.js的年代，为了良好地构建前端页面，都是通过服务端语言对应的模板引擎来实现动态网页、页面结构的组织、组件的复用。比如Laravel的blade，用在Django上的jinja2，用在Struts的jsp等等。实际上到如今，一门后端语言想要能实现自己的web功能，都需要有自己对应的模板引擎。
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<style lang="scss" scoped>
.square {
  height: 200px;
  background: #fff;
  overflow: hidden;
}

.square1 {
  background-image: linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%), linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%);
  background-size: 17px 17px;
  background-position: 0 0, 8px 8px;
}

.square2 {
  background: #efefef;
  background-image:
    linear-gradient(rgba(255, 255, 255, .3) 1px, transparent 0),
    linear-gradient(90deg, rgba(255, 255, 255, .3) 1px, transparent 0),
    linear-gradient(white 1px, transparent 0),
    linear-gradient(90deg, white 1px, transparent 0);
  background-size:
    15px 15px,
    15px 15px,
    75px 75px,
    75px 75px;
}

.square3 {
  .shape-left {
    height: 200px;
    width: 100px;
    float: left;
    shape-outside: polygon(0 0, 100% 0, 0% 100%)
  }

  .article {
    display: block;
    padding: 10px;
    position: relative;
    z-index: 0;
  }

  .article::before {
    content: '';
    position: absolute;
    background-color: #fff;
    transform: skewX(-27deg);
    left: 42px;
    right: 37px;
    top: 0;
    bottom: 0;
    border: 1px solid #ddd;
    z-index: -1;
  }

  .shape-right {
    float: right;
    height: 200px;
    width: 100px;
    shape-outside: polygon(100% 0, 100% 100%, 0% 100%)
  }


}

</style>
