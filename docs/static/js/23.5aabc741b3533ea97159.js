webpackJsonp([23],{tvJy:function(t,o){},vMHz:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var a=e("oSxK"),s=e("Jdm4"),n={data:function(){return{isLoading:!1,prompt:"下拉刷新",list:Array(15)}},components:{topBar:a.a,demoTitle:s.a},methods:{handleRefresh:function(){this.isLoading=!0,this.$forceUpdate()}}},i={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"pulldown-demo-wrapper"},[e("top-bar",{attrs:{title:"Pulldown and Pullup"}}),t._v(" "),e("div",{staticClass:"pulldown-wrapper"},[e("atom-pull",{attrs:{height:"500px",maxTopMove:50,maxBotMove:50,delay:1e3},on:{promptDisplay:function(o){t.prompt="松开立即刷新"},touchEnd:t.handleRefresh,pullEnd:function(o){t.prompt="下拉刷新",t.isLoading=!1}}},[e("div",{staticClass:"topRefresh",attrs:{slot:"promptTop"},slot:"promptTop"},[t.isLoading?t.isLoading?e("atom-loading",{staticStyle:{margin:"0 auto"}}):t._e():e("div",{domProps:{textContent:t._s(t.prompt)}})],1),t._v(" "),e("ul",{attrs:{slot:"box"},slot:"box"},t._l(t.list,function(o,a){return e("li",{key:a,domProps:{textContent:t._s(a)}})}),0),t._v(" "),e("div",{staticClass:"botRefresh",attrs:{slot:"promptBottom"},slot:"promptBottom"},[t.isLoading?t.isLoading?e("atom-loading",{staticStyle:{margin:"0 auto"}}):t._e():e("div",{domProps:{textContent:t._s(t.prompt)}})],1)])],1)],1)},staticRenderFns:[]};var r=e("C7Lr")(n,i,!1,function(t){e("tvJy")},"data-v-05be9bb2",null);o.default=r.exports}});