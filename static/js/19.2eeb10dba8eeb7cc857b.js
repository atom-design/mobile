webpackJsonp([19],{AWJZ:function(t,e){},"Ei/q":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("oSxK"),o=n("IYkF"),c=n.n(o),i=n("83B7"),a=n("OYE3"),l=i.a.extend(n("zHvs").default);l.prototype.config=function(t,e){this._selectBoxList=t.list,this._callback=e},l.prototype.show=function(t){this.isShow=!0};var r=function(t,e){Object(a.a)(t,"Object")||(t=c()(null));var n=new l({el:document.createElement("div")});n.config(t,e),n.show()},u=n("WG6p"),d=n("Bs1d"),f={data:function(){return{demoList:[{text:"default select",type:0},{text:"custom select",type:1}]}},components:{topBar:s.a,atomBtn:u.a},methods:{dialogShow:function(t){switch(t){case 0:r({list:[{text:"标为未读"},{text:"消息置顶"}]},function(t,e){Object(d.a)(t+", "+e)});break;case 1:r({list:[{text:"标为未读",style:"color: #108ee9;"},{text:"消息置顶",style:"color: #dd2622;"}]},function(t,e){Object(d.a)(t+", "+e)})}}}},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dialog-demo-wrapper"},[n("top-bar",{attrs:{title:"Select Box"}}),t._v(" "),t._l(t.demoList,function(e,s){return n("atom-btn",{key:s,staticStyle:{"box-shadow":"0 0 20px 1px #ccc",width:"90%",margin:"20px auto"},attrs:{size:"large"},domProps:{textContent:t._s(e.text)},nativeOn:{click:function(n){return n.preventDefault(),t.dialogShow(e.type)}}})})],2)},staticRenderFns:[]},x=n("C7Lr")(f,p,!1,null,null,null);e.default=x.exports},zHvs:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("AWJZ"),o=(n.n(s),n("WG6p")),c=n("xtiz"),i=n("zVdy");e.default={name:"atom-selectBox",mixins:[c.a],data:function(){return{clickMaskClose:!0}},components:{atomBtn:o.a},render:function(t){var e=this;return t(i.b,{},[t("div",{staticClass:"atom-selectBox",directives:[{name:"show",value:this.isShow}],on:{click:function(){e.clickMaskClose&&(e.isShow=!1)}}},[t("div",{staticClass:"select-content"},[this._selectBoxList&&this._selectBoxList.map(function(n,s){return t("div",{staticClass:"select-item",style:n.style,on:{click:function(){e._callback(n.text,s)}}},n.text)})])])])}}}});
//# sourceMappingURL=19.2eeb10dba8eeb7cc857b.js.map