webpackJsonp([47],{"7Vu4":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("oSxK"),n=r("WG6p"),o={data:function(){return{demoList:[{text:"Built-in Drawer",type:0},{text:"Popup Drawer",type:1}]}},components:{topBar:a.a,atomBtn:n.a},methods:{jumpDemo:function(e){switch(e){case 0:this.$router.replace({name:"buildInDrawerDemo"});break;case 1:this.$router.replace({name:"popupDrawerDemo"})}}}},s={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"drawer-demo-wrapper"},[r("top-bar",{attrs:{title:"Drawer"}}),e._v(" "),e._l(e.demoList,function(t,a){return r("atom-btn",{key:a,staticStyle:{"box-shadow":"0 0 20px 1px #ccc",width:"90%",margin:"20px auto"},attrs:{size:"large"},domProps:{textContent:e._s(t.text)},nativeOn:{click:function(r){return e.jumpDemo(t.type)}}})})],2)},staticRenderFns:[]},i=r("C7Lr")(o,s,!1,null,null,null);t.default=i.exports}});