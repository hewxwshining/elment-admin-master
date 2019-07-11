<template>
  <div>
    <div class="wrapper">
      <div class="shape-left"></div>
      <div class="shape-right"></div>
      <div class="article">
        后端路由与服务端渲染
        前面说了，「刀耕火种」的年代里，网页通常是通过后端路由直出给客户端浏览器的。也就是网页的html一般是在后端服务器里通过模板引擎渲染好再交给前端的。至于一些其他的效果，是通过预先写在页面里的jQuery、Bootstrap等常见的前端框架去负责的。
        如果你说有些网站已经是通过ajax去实现的页面，比如gmail，比如qq邮箱。那么你要注意到哪怕是这些页面，它们页面的「龙骨」也并非是全部通过ajax去实现的，依然还是后端直出——这也就是我们现在又老生常谈的服务端渲染。
        服务端渲染的好处有很多，比如对于SEO友好，一些对安全性要求高的页面采用服务端渲染是更保险的。而在当时还没有node.js的年代，为了良好地构建前端页面，都是通过服务端语言对应的模板引擎来实现动态网页、页面结构的组织、组件的复用。比如Laravel的blade，用在Django上的jinja2，用在Struts的jsp等等。实际上到如今，一门后端语言想要能实现自己的web功能，都需要有自己对应的模板引擎。
        node.js诞生之后，前端拥有自己的后端渲染的模板引擎也成为了现实。常见的比如pug、ejs、nunjucks等。这些模板引擎搭配Express、Koa等后端框架也在一开始风靡一时
        不过在这个过程中，随着web应用的开发越来越复杂，单纯服务端渲染的问题开始慢慢的暴露出来了——耦合性太强了，jQuery时代的页面不好维护，页面切换白屏严重等等。耦合性问题虽然能通过良好的代码结构、规范来解决，不过jQuery时代的页面不好维护这是有目共睹的，全局变量满天飞，代码入侵性太高。后续的维护通常是在给前面的代码打补丁。而页面切换的白屏问题虽然可以通过ajax、或者iframe等来解决，但是在实现上就麻烦了——进一步增加了可维护的难度
        于是，我们开始进入了前端路由的时代。
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.wrapper {
  width: 800px;
  margin: auto;
}

.shape-left {
  height: 400px;
  float: left;
  width: 350px;
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
  transform: skewX(-41deg);
  left: 168px;
  right: 152px;
  top: 0;
  bottom: 0;
  border: 1px solid #ddd;
  z-index: -1;
}

.shape-right {
  float: right;
  width: 350px;
  height: 400px;
  shape-outside: polygon(100% 0, 100% 100%, 0% 100%)
}

</style>
