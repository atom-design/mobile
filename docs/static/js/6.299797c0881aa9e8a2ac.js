webpackJsonp([6],{YHXO:function(t,e){},kCt8:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={data:function(){return{dataList:[],length:0}},components:{topBar:a("oSxK").a},mounted:function(){this.initData()},methods:{loadMore:function(){for(var t=this.length+20,e=this.length;e<t;e++)this.dataList.push(e);this.length=this.dataList.length},initData:function(){for(var t=0;t<20;t++)this.dataList.push(t);this.length=this.dataList.length}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"radio-demo-wrapper"},[a("top-bar",{attrs:{title:"Load More"}}),t._v(" "),a("ul",{directives:[{name:"loadmore",rawName:"v-loadmore",value:t.loadMore,expression:"loadMore"}],staticClass:"list-wrapper",attrs:{distance:"300"}},t._l(t.dataList,function(e,s){return a("li",{key:s,staticClass:"list-item",domProps:{textContent:t._s(e)}})}),0)],1)},staticRenderFns:[]};var n=a("C7Lr")(s,i,!1,function(t){a("YHXO")},"data-v-e944f548",null);e.default=n.exports}});