webpackJsonp([3],{"7jtB":function(t,e){},jAYZ:function(t,e,n){t.exports=n.p+"static/img/error-404.94756dc.svg"},u0n2:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("jAYZ"),s=n.n(r),c=(n("7jtB"),{name:"backBtnGroup",data:function(){return{second:5,timer:null}},methods:{backHome:function(){this.$router.replace({name:this.$config.homeName})},backPrev:function(){this.$router.go(-1)}},mounted:function(){var t=this;this.timer=setInterval(function(){0===t.second?t.backPrev():t.second--},1e3)},beforeDestroy:function(){clearInterval(this.timer)}}),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Button",{attrs:{size:"large",type:"text"},on:{click:this.backHome}},[this._v("返回首页")]),this._v(" "),e("Button",{attrs:{size:"large",type:"text"},on:{click:this.backPrev}},[this._v("返回上一页("+this._s(this.second)+"s)")])],1)},staticRenderFns:[]},i={name:"error_content",components:{backBtnGroup:n("VU/8")(c,o,!1,null,null,null).exports},props:{code:String,desc:String,src:String}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"error-page"},[n("div",{staticClass:"content-con"},[n("img",{attrs:{src:t.src,alt:t.code}}),t._v(" "),n("div",{staticClass:"text-con"},[n("h4",[t._v(t._s(t.code))]),t._v(" "),n("h5",[t._v(t._s(t.desc))])]),t._v(" "),n("back-btn-group",{staticClass:"back-btn-group"})],1)])},staticRenderFns:[]},l={name:"error_404",components:{errorContent:n("VU/8")(i,a,!1,null,null,null).exports},data:function(){return{src:s.a}}},u={render:function(){var t=this.$createElement;return(this._self._c||t)("error-content",{attrs:{code:"404",desc:"Oh~~您的页面好像飞走了~",src:this.src}})},staticRenderFns:[]},d=n("VU/8")(l,u,!1,null,null,null);e.default=d.exports}});
//# sourceMappingURL=3.dc63fe80b63da8f5a380.js.map