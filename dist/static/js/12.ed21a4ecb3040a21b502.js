webpackJsonp([12],{"6aZ3":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("oSxK"),n=a("Jdm4"),l=(a("z7lD"),{data:function(){return{length:0}},props:{value:{type:String},maxLength:{type:Number},placeholder:{type:String}},render:function(t){var e=this;if(void 0!==this.maxLength)var a=t("div",{staticClass:"textarea-limit"},this.length+" / "+this.maxLength);return t("div",{staticClass:"atom-textarea"},[t("textarea",{staticClass:"textarea-entry",attrs:{placeholder:this.placeholder},on:{input:function(){var t=event.target.value.length;t>e.maxLength?event.target.value=event.target.value.slice(0,e.maxLength):e.length=t,e.$emit("input",event.target.value)}}}),a])}}),i={components:{topBar:r.a,demoTitle:n.a,atomTextarea:l}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"textarea-demo-wrapper"},[a("top-bar",{attrs:{title:"Textarea"}}),t._v(" "),a("demo-title",[t._v("默认")]),t._v(" "),a("atom-textarea",{staticStyle:{"margin-left":"20px"},attrs:{placeholder:"Please Input"}}),t._v(" "),a("demo-title",[t._v("限制输入")]),t._v(" "),a("atom-textarea",{staticStyle:{"margin-left":"20px"},attrs:{maxLength:10,placeholder:"Please Input"}}),t._v(" "),a("demo-title",[t._v("自定义样式")]),t._v(" "),a("atom-textarea",{staticStyle:{"margin-left":"20px",color:"#108ee9",width:"90%",height:"100px","box-shadow":"0 3px 10px #ccc","font-size":"20px"},attrs:{maxLength:100,placeholder:"Please Input"}})],1)},staticRenderFns:[]};var o=a("C7Lr")(i,s,!1,function(t){a("YYGZ")},"data-v-691ca4fa",null);e.default=o.exports},YYGZ:function(t,e){},z7lD:function(t,e){}});