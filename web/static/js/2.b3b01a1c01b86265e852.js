webpackJsonp([2],{Vv7T:function(t,e){},"Xcy/":function(t,e){},eaJH:function(t,e){},"ir+h":function(t,e){},sJm1:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("Dd8w"),a=n.n(s),i=n("TVG1"),o={methods:{showTitle:function(t){return Object(i.k)(t,this)},showChildren:function(t){return t.children&&(t.children.length>1||t.meta&&t.meta.showAlways)},getNameOrHref:function(t,e){return t.href?"isTurnByHref_"+t.href:e?t.children[0].name:t.name}}},r={name:"SideMenuItem",mixins:[o,{props:{parentItem:{type:Object,default:function(){}},theme:String,iconSize:Number},computed:{parentName:function(){return this.parentItem.name},children:function(){return this.parentItem.children},textColor:function(){return"dark"===this.theme?"#fff":"#495060"}}}]},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-submenu",{attrs:{index:""+t.parentName}},[n("template",{slot:"title"},[n("i",{class:t.parentItem.icon}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.showTitle(t.parentItem)))])]),t._v(" "),t._l(t.children,function(e){return[e.children&&1===e.children.length?[t.showChildren(e)?n("side-menu-item",{key:"menu-"+e.name,attrs:{"parent-item":e}}):n("el-menu-item",{key:""+e.name,attrs:{index:t.getNameOrHref(e,!0)}},[n("i",{class:e.children[0].icon||""}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(" "+t._s(t.showTitle(e.children[0])))])])]:[t.showChildren(e)?n("side-menu-item",{key:"menu-"+e.name,attrs:{"parent-item":e}}):n("el-menu-item",{key:""+e.name,attrs:{index:t.getNameOrHref(e)}},[t._v(t._s(t.showTitle(e)))])]]})],2)},staticRenderFns:[]},c=n("VU/8")(r,l,!1,null,null,null).exports,u=n("2uFj"),d={name:"side-menu",mixins:[o],data:function(){return{defaultActive:u.a.homeName}},components:{SideMenuItem:c},props:{isCollapse:{type:Boolean,default:!1},menuList:{type:Array,default:function(){return[]}},activeName:{type:String,default:""}},methods:{handleSelect:function(t){this.$emit("on-select",t)}}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"side-menu"},[t._m(0),t._v(" "),n("el-menu",{attrs:{"default-active":t.activeName,collapse:t.isCollapse,"unique-opened":!0},on:{select:t.handleSelect}},[t._l(t.menuList,function(e,s){return[e.children&&1===e.children.length?[t.showChildren(e)?n("side-menu-item",{key:"menu-"+e.name,attrs:{"parent-item":e}}):n("el-menu-item",{key:s,attrs:{index:t.getNameOrHref(e,!0)}},[n("i",{class:e.children[0].icon||""}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(" "+t._s(t.showTitle(e.children[0])))])])]:[t.showChildren(e)?n("side-menu-item",{key:"menu-"+e.name,attrs:{"parent-item":e}}):n("el-menu-item",{key:s,attrs:{index:t.getNameOrHref(e)}},[n("i",{class:e.icon||""}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.showTitle(e)))])])]]})],2)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("h2",[this._v("Ele-admin")])])}]};var m=n("VU/8")(d,h,!1,function(t){n("Vv7T")},null,null).exports,f={name:"customBreadCrumb",props:{list:{type:Array,default:function(){return[]}}},methods:{showTitle:function(t){return Object(i.k)(t,this)}}},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-breadcrumb",{attrs:{separator:"/"}},t._l(t.list,function(e){return n("el-breadcrumb-item",{key:"bread-crumb-"+e.name,attrs:{to:e.to}},[n("i",{class:e.icon}),t._v("\n    "+t._s(t.showTitle(e))+"\n  ")])}),1)},staticRenderFns:[]};var v={name:"header-bar",data:function(){return{nowCollapse:this.isCollapse}},components:{customBreadCrumb:n("VU/8")(f,p,!1,function(t){n("Xcy/")},null,null).exports},computed:{breadCrumbList:function(){return this.$store.state.app.breadCrumbList}},props:{isCollapse:{type:Boolean,default:!1}},methods:{collapsed:function(){this.nowCollapse=!this.nowCollapse,this.$emit("listenHandleCollapse",this.nowCollapse)}}},g={render:function(){var t=this.$createElement,e=this._self._c||t;return e("el-container",[e("div",{staticClass:"d-flex align-items-center"},[e("el-button",{staticClass:"bold",attrs:{type:"text"},on:{click:this.collapsed}},[e("i",{class:[this.nowCollapse?"icon-zhankaicaidan":"icon-shouqicaidan"]})]),this._v(" "),e("custom-bread-crumb",{staticClass:"bread-crumb",attrs:{list:this.breadCrumbList}})],1),this._v(" "),e("div",{staticClass:"custom-content-con"},[this._t("default")],2)])},staticRenderFns:[]};var y=n("VU/8")(v,g,!1,function(t){n("uPHt")},"data-v-9d53d3e2",null).exports,b=n("//Fk"),C=n.n(b),_=new(n("7+uW").default),T={before_close_normal:function(t){_.$confirm("确定要关闭这一页吗","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t(!0)}).catch(function(){t(!1)})}},w={name:"Tagnav",data:function(){return{tagBodyLeft:0,rightOffset:40,outerPadding:4,contextMenuLeft:0,contextMenuTop:0,visible:!1,menuList:{others:"关闭其他",all:"关闭所有"}}},props:{value:Object,list:{type:Array,default:function(){return[]}}},computed:{currentRouteObj:function(){var t=this.value;return{name:t.name,params:t.params,query:t.query}}},watch:{$route:function(t){this.getTagElementByRoute(t)},visible:function(t){t?document.body.addEventListener("click",this.closeMenu):document.body.removeEventListener("click",this.closeMenu)}},mounted:function(){var t=this;setTimeout(function(){t.getTagElementByRoute(t.$route)},200)},methods:{handlescroll:function(t){var e=t.type,n=0;"DOMMouseScroll"!==e&&"mousewheel"!==e||(n=t.wheelDelta?t.wheelDelta:40*-(t.detail||0)),this.handleScroll(n)},handleScroll:function(t){var e=this.$refs.scrollOuter.offsetWidth,n=this.$refs.scrollBody.offsetWidth;t>0?this.tagBodyLeft=e<n?Math.min(0,this.tagBodyLeft+t):0:e<n?this.tagBodyLeft<-(n-e)?this.tagBodyLeft=this.tagBodyLeft:this.tagBodyLeft=Math.max(this.tagBodyLeft+t,e-n):this.tagBodyLeft=0},handleTagCommand:function(t){var e=this;if(t.includes("all")){var n=this.list.filter(function(t){return t.name===e.$config.homeName});this.$emit("on-close",n,"all")}else if(t.includes("others")){var s=this.list.filter(function(t){return Object(i.h)(e.currentRouteObj,t)||t.name===e.$config.homeName});this.$emit("on-close",s,"others",this.currentRouteObj),setTimeout(function(){e.getTagElementByRoute(e.currentRouteObj)},100)}},showTitleInside:function(t){return Object(i.k)(t,this)},isCurrentTag:function(t){return Object(i.h)(this.currentRouteObj,t)},moveToView:function(t){var e=this.$refs.scrollOuter.offsetWidth;this.$refs.scrollBody.offsetWidth<e?this.tagBodyLeft=0:t.offsetLeft<-this.tagBodyLeft?this.tagBodyLeft=-t.offsetLeft+this.outerPadding:t.offsetLeft>-this.tagBodyLeft&&t.offsetLeft+t.offsetWidth<-this.tagBodyLeft+e?this.tagBodyLeft=Math.min(0,e-t.offsetWidth-t.offsetLeft-this.outerPadding):this.tagBodyLeft=-(t.offsetLeft-(e-this.outerPadding-t.offsetWidth))},getTagElementByRoute:function(t){var e=this;this.$nextTick(function(){e.refsTag=e.$refs.tagsPageOpened,e.refsTag.forEach(function(n,s){if(Object(i.h)(t,n.$attrs["data-route-item"])){var a=e.refsTag[s].$el;e.moveToView(a)}})})},handleClose:function(t){var e=this;t.meta&&t.meta.beforeCloseName&&t.meta.beforeCloseName in T?new C.a(T[t.meta.beforeCloseName]).then(function(n){n&&e.close(t)}):this.close(t)},close:function(t){var e=this.list.filter(function(e){return!Object(i.h)(t,e)});this.$emit("on-close",e,void 0,t)},handleClick:function(t){this.$emit("input",t)},contextMenu:function(t,e){if(t.name!==this.$config.homeName){this.visible=!0;var n=this.$el.getBoundingClientRect().left;this.contextMenuLeft=e.clientX-n+10,this.contextMenuTop=e.clientY-64}},closeMenu:function(){this.visible=!1}}},L={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tag-nav"},[n("div",{staticClass:"close-con"},[n("el-dropdown",{on:{command:t.handleTagCommand}},[n("span",{staticClass:"el-dropdown-link"},[n("i",{staticClass:"icon-close"})]),t._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{command:"close-all"}},[t._v("关闭所有")]),t._v(" "),n("el-dropdown-item",{attrs:{command:"close-others"}},[t._v("关闭其他")])],1)],1)],1),t._v(" "),n("ul",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"contextmenu",style:{left:t.contextMenuLeft+"px",top:t.contextMenuTop+"px"}},t._l(t.menuList,function(e,s){return n("li",{key:s,on:{click:function(e){return t.handleTagCommand(s)}}},[t._v(t._s(e)+" ")])}),0),t._v(" "),n("div",{staticClass:"btn-con left-btn"},[n("el-button",{attrs:{type:"text"},on:{click:function(e){return t.handleScroll(240)}}},[n("i",{staticClass:"icon-pre1"})])],1),t._v(" "),n("div",{staticClass:"btn-con right-btn"},[n("el-button",{attrs:{type:"text"},on:{click:function(e){return t.handleScroll(-240)}}},[n("i",{staticClass:"icon-next"})])],1),t._v(" "),n("div",{ref:"scrollOuter",staticClass:"scroll-outer d-flex align-items-center",on:{DOMMouseScroll:t.handlescroll,mousewheel:t.handlescroll}},[n("div",{ref:"scrollBody",staticClass:"scroll-body",style:{left:t.tagBodyLeft+"px"}},[n("transition-group",{attrs:{name:"el-fade-in-linear"}},t._l(t.list,function(e,s){return n("el-tag",{key:"tag-nav-"+s,ref:"tagsPageOpened",refInFor:!0,class:[t.isCurrentTag(e)?"is-active":"default"],attrs:{closable:e.name!==t.$config.homeName,name:e.name,"data-route-item":e},on:{close:function(n){return t.handleClose(e)}},nativeOn:{click:function(n){return t.handleClick(e)},contextmenu:function(n){return n.preventDefault(),t.contextMenu(e,n)}}},[n("span",{staticClass:"tag-dot-inner"}),t._v("\n          "+t._s(t.showTitleInside(e))+"\n        ")])}),1)],1)])])},staticRenderFns:[]};var x=n("VU/8")(w,L,!1,function(t){n("eaJH")},"data-v-67a1769f",null).exports,$=n("LkXW"),B=n("NYxO"),O={name:"Main",data:function(){return{collapsed:!1}},computed:{menuList:function(){return this.$store.getters.menuList},tagNavList:function(){return this.$store.state.app.tagNavList}},components:{SideMenu:m,HeaderBar:y,TagNav:x},methods:a()({handleCollapsedChange:function(t){this.collapsed=t},turnToPage:function(t){var e={},n=e.name,s=e.params,a=e.query;"string"==typeof t?n=t:(n=t.name,s=t.params,a=t.query),n.indexOf("isTurnByHref_")>-1?window.open(n.split("_")[1]):this.$router.push({name:n,params:s,query:a})},handleCloseTag:function(t,e,n){"others"!==e&&("all"===e?this.turnToPage(this.$config.homeName):Object(i.h)(this.$route,n)&&this.closeTag(n)),this.setTagNavList(t)},handleClick:function(t){this.turnToPage(t)}},Object(B.c)(["setBreadCrumb","setHomeRoute","setTagNavList","addTag","closeTag"])),watch:{$route:function(t){var e=t.name,n=t.query,s=t.params,a=t.meta;this.addTag({route:{name:e,query:n,params:s,meta:a},type:"push"}),this.setBreadCrumb(t),this.setTagNavList(Object(i.d)(this.tagNavList,t))}},mounted:function(){this.setHomeRoute($.a),this.setBreadCrumb(this.$route),this.setTagNavList();var t=this.$route,e=t.name,n=t.params,s=t.query,a=t.meta;this.addTag({route:{name:e,params:n,query:s,meta:a}})}},k={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",{staticClass:"size"},[n("el-aside",{attrs:{width:t.collapsed?"64px":"200px"}},[n("side-menu",{ref:"sideMenu",attrs:{isCollapse:t.collapsed,"active-name":t.$route.name,"menu-list":t.menuList},on:{"on-select":t.turnToPage}})],1),t._v(" "),n("el-container",[n("el-header",{staticClass:"box-shadow-bottom",attrs:{height:"50px"}},[n("header-bar",{attrs:{isCollapse:t.collapsed},on:{listenHandleCollapse:t.handleCollapsedChange}})],1),t._v(" "),n("el-container",{attrs:{direction:"vertical"}},[n("div",{staticClass:"tag-nav-wrapper"},[n("tag-nav",{attrs:{value:t.$route,list:t.tagNavList},on:{input:t.handleClick,"on-close":t.handleCloseTag}})],1),t._v(" "),n("el-main",{ref:"main-content"},[n("router-view")],1)],1)],1)],1)},staticRenderFns:[]};var N=n("VU/8")(O,k,!1,function(t){n("ir+h")},"data-v-17b0f343",null);e.default=N.exports},uPHt:function(t,e){}});
//# sourceMappingURL=2.b3b01a1c01b86265e852.js.map