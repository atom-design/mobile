webpackJsonp([23],{LKag:function(t,o){},bJxb:function(t,o,a){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e=a("oSxK"),n=a("Jdm4"),r=a("dLOU"),s=a("k7r/"),i={data:function(){return{isLoading:!1,prompt:"下拉刷新",list:Array(15)}},components:{topBar:e.a,demoTitle:n.a,atomLoading:s.a,atomPull:r.a},methods:{handleRefresh:function(){this.isLoading=!0,this.$forceUpdate()}}},l={render:function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",{staticClass:"pullup-demo-wrapper"},[a("top-bar",{attrs:{title:"Pullup"}}),t._v(" "),a("div",{staticClass:"pullup-wrapper"},[a("atom-pull",{attrs:{height:"500px",action:"pullup",maxBotMove:50,delay:1e3},on:{promptDisplay:function(o){t.prompt="松开立即刷新"},touchEnd:t.handleRefresh,pullEnd:function(o){t.prompt="下拉刷新",t.isLoading=!1}}},[a("div",{staticClass:"refresh",attrs:{slot:"promptBottom"},slot:"promptBottom"},[t.isLoading?t.isLoading?a("atom-loading",{staticStyle:{margin:"0 auto"}}):t._e():a("div",{domProps:{textContent:t._s(t.prompt)}})],1),t._v(" "),a("ul",{attrs:{slot:"box"},slot:"box"},t._l(t.list,function(o,e){return a("li",{key:e,domProps:{textContent:t._s(e)}})}),0)])],1)],1)},staticRenderFns:[]};var p=a("C7Lr")(i,l,!1,function(t){a("LKag")},"data-v-591dec9a",null);o.default=p.exports}});