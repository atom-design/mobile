webpackJsonp([13],{"FT/X":function(t,s){},"HC+3":function(t,s){},MULC:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i("oSxK"),a=(i("FT/X"),{name:"atom-switch",computed:{inner_value:{get:function(){return this.value},set:function(t){this.$emit("input",t),this.$emit("change",t)}},mainColor:function(){if(this.inner_value)return this.color}},props:{value:{type:Boolean,default:!1},color:{type:String,default:"#108ee9"}},render:function(t){var s=this;return t("label",{staticClass:"atom-switch"},[t("input",{staticClass:"switch-input",attrs:{type:"checkbox"},domProps:{checked:this.inner_value},on:{change:function(){s.inner_value=event.target.checked}}}),t("label",{staticClass:"switch-label",style:{background:this.mainColor}})])}}),c={data:function(){return{switch0:!1,switch1:!0,switch3:!0}},components:{topBar:e.a,atomSwitch:a}},n={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"switch-demo-wrapper"},[i("top-bar",{attrs:{title:"Switch"}}),t._v(" "),i("div",{staticClass:"switch-content"},[i("div",{staticClass:"switch-item"},[i("span",{staticClass:"switch-title"},[t._v("默认false")]),t._v(" "),i("div",{staticClass:"switch-demo"},[i("atom-switch",{model:{value:t.switch0,callback:function(s){t.switch0=s},expression:"switch0"}}),t._v(" "),i("span",{domProps:{textContent:t._s(t.switch0)}})],1)]),t._v(" "),i("div",{staticClass:"switch-item"},[i("span",{staticClass:"switch-title"},[t._v("默认true")]),t._v(" "),i("div",{staticClass:"switch-demo"},[i("atom-switch",{model:{value:t.switch1,callback:function(s){t.switch1=s},expression:"switch1"}}),t._v(" "),i("span",{domProps:{textContent:t._s(t.switch1)}})],1)]),t._v(" "),i("div",{staticClass:"switch-item"},[i("span",{staticClass:"switch-title"},[t._v("自定义颜色")]),t._v(" "),i("div",{staticClass:"switch-demo"},[i("atom-switch",{attrs:{color:"#ff9933"},model:{value:t.switch3,callback:function(s){t.switch3=s},expression:"switch3"}}),t._v(" "),i("span",{domProps:{textContent:t._s(t.switch3)}})],1)])])],1)},staticRenderFns:[]};var o=i("C7Lr")(c,n,!1,function(t){i("HC+3")},"data-v-9ad7a542",null);s.default=o.exports}});
//# sourceMappingURL=13.f44d1382f0fcebc85c76.js.map