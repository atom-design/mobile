webpackJsonp([38],{mveI:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("oSxK"),r=n("WG6p"),a={data:function(){return{demoList:[{text:"pull down and pull up",type:0},{text:"pulldown",type:1},{text:"pullup",type:2}]}},components:{topBar:o.a,atomBtn:r.a},methods:{jumpDemo:function(t){switch(t){case 0:this.$router.replace({name:"pullbothDemo"});break;case 1:this.$router.replace({name:"pulldownDemo"});break;case 2:this.$router.replace({name:"pullupDemo"})}}}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"toast-demo-wrapper"},[n("top-bar",{attrs:{title:"Pull Gesture"}}),t._v(" "),t._l(t.demoList,function(e,o){return n("atom-btn",{key:o,staticStyle:{"box-shadow":"0 0 20px 1px #ccc",width:"90%",margin:"20px auto"},attrs:{size:"large"},domProps:{textContent:t._s(e.text)},nativeOn:{click:function(n){return t.jumpDemo(e.type)}}})})],2)},staticRenderFns:[]},u=n("C7Lr")(a,l,!1,null,null,null);e.default=u.exports}});