webpackJsonp([24],{"5tKO":function(a,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={data:function(){return{radio0:"选项1",radio1:"选项2",radio2:"true"}},components:{topBar:o("oSxK").a},watch:{radio0:function(a){this.$toast(a)},radio1:function(a){this.$toast(a)},radio2:function(a){"true"===a?this.$toast("禁用"):"false"===a?this.$toast("取消禁用"):this.$toast(a)}}},r={render:function(){var a=this,t=a.$createElement,o=a._self._c||t;return o("div",{staticClass:"radio-demo-wrapper"},[o("top-bar",{attrs:{title:"Radio"}}),a._v(" "),o("div",{staticClass:"radio-content"},[o("div",{staticClass:"radio-item"},[o("span",{staticClass:"radio-title"},[a._v("默认：")]),a._v(" "),o("div",{staticClass:"radio-demo"},[o("atom-radio",{attrs:{name:"name",val:"选项1"},model:{value:a.radio0,callback:function(t){a.radio0=t},expression:"radio0"}}),a._v(" "),o("atom-radio",{attrs:{name:"name",val:"选项2"},model:{value:a.radio0,callback:function(t){a.radio0=t},expression:"radio0"}})],1)]),a._v(" "),o("div",{staticClass:"radio-item"},[o("span",{staticClass:"radio-title"},[a._v("自定义颜色：")]),a._v(" "),o("div",{staticClass:"radio-demo"},[o("atom-radio",{attrs:{name:"name1",val:"选项1",color:"#ff9933"},model:{value:a.radio1,callback:function(t){a.radio1=t},expression:"radio1"}}),a._v(" "),o("atom-radio",{attrs:{name:"name1",val:"选项2",color:"#ff9933"},model:{value:a.radio1,callback:function(t){a.radio1=t},expression:"radio1"}})],1)]),a._v(" "),o("div",{staticClass:"radio-item"},[o("span",{staticClass:"radio-title"},[a._v("禁用：")]),a._v(" "),o("div",{staticClass:"radio-demo"},[o("atom-radio",{attrs:{name:"name2",disabled:"true"===a.radio2,val:"选项1"},model:{value:a.radio2,callback:function(t){a.radio2=t},expression:"radio2"}}),a._v(" "),o("atom-radio",{attrs:{name:"name2",val:"true"},model:{value:a.radio2,callback:function(t){a.radio2=t},expression:"radio2"}}),a._v(" "),o("atom-radio",{attrs:{name:"name2",val:"false"},model:{value:a.radio2,callback:function(t){a.radio2=t},expression:"radio2"}})],1)])])],1)},staticRenderFns:[]};var e=o("C7Lr")(i,r,!1,function(a){o("G5+k")},"data-v-037b171c",null);t.default=e.exports},"G5+k":function(a,t){}});