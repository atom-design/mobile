webpackJsonp([21],{H3dE:function(t,e){},HmV4:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var c=n("H3dE"),i=(n.n(c),n("xtiz")),o=n("zVdy");e.default={name:"atom-actionSheet",mixins:[i.a],render:function(t){var e=this;return t("div",{staticClass:"atom-actionsheet",on:{click:function(){e.isShow=!1}}},[t(o.c,{},[t("ul",{staticClass:"action-sheet-content",directives:[{name:"show",value:this.isShow}],on:{click:function(){event.stopPropagation()}}},[this._actionList&&this._actionList.map(function(n,c){return t("li",{staticClass:"action-sheet-item",style:n.style,on:{click:function(){e._callback(n,c)}}},n.text)})].concat([this._cancelBtn&&t("div",{staticClass:"actionsheet-cancel",style:this._cancelBtn.style,on:{click:function(){e.isShow=!1}}},this._cancelBtn.text)]))])])}}},"SU+d":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var c=n("oSxK"),i=n("WG6p"),o=n("IYkF"),a=n.n(o),s=n("83B7"),l=n("OYE3"),r=s.a.extend(n("HmV4").default);r.prototype.config=function(t,e){this._cancelBtn=t.cancelBtn,this._actionList=t.list,this._callback=e},r.prototype.close=function(t){this.isShow=!1},r.prototype.show=function(t){this.isShow=!0};var u=function(t,e){Object(l.a)(t,"Object")||(t=a()(null));var n=new r({el:document.createElement("div")});n.config(t,e),n.show()},h=n("Bs1d"),d={data:function(){return{demoList:[{text:"show action sheet",type:0},{text:"show action sheet with cancel button",type:1},{text:"custom actionSheet",type:2}]}},components:{topBar:c.a,atomBtn:i.a,actionSheet:u},methods:{actionSheetShow:function(t){switch(t){case 0:u({list:[{text:"选择图片"},{text:"选择联系人"}]},function(t,e){Object(h.a)(t+", "+e)});break;case 1:u({cancelBtn:{text:"Cancel"},list:[{text:"选择图片"},{text:"选择联系人"}]},function(t,e){Object(h.a)(t+", "+e)});break;case 2:u({cancelBtn:{text:"Cancel",style:"color: #dd2622;"},list:[{text:"选择图片",style:"color: #108ee9;"},{text:"选择联系人"}]},function(t,e){Object(h.a)(t+", "+e)})}}}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"actionsheet-demo-wrapper"},[n("top-bar",{attrs:{title:"Action Sheet"}}),t._v(" "),t._l(t.demoList,function(e,c){return n("atom-btn",{key:c,staticStyle:{"box-shadow":"0 0 20px 1px #ccc",width:"90%",margin:"20px auto"},attrs:{size:"large"},domProps:{textContent:t._s(e.text)},nativeOn:{click:function(n){return t.actionSheetShow(e.type)}}})})],2)},staticRenderFns:[]},p=n("C7Lr")(d,f,!1,null,null,null);e.default=p.exports}});