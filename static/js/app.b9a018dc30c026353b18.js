webpackJsonp([0],{0:function(t,a){},"2Wry":function(t,a){},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("7+uW"),r={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"container_form"},[1==t.numForm||2==t.numForm?e("div",[e("h2",[t._v("Расчет укладки ламината")]),t._v(" "),1==t.numForm?e("div",{attrs:{id:"first-form"}},[e("div",{staticClass:"d-flex flex-column align-items-start input"},[e("label",{attrs:{for:"metr"}},[t._v("МЕТРАЖ КОМНАТЫ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.metr,expression:"data.metr"}],class:{invalid:t.errors.metr},attrs:{type:"number",name:"metr",placeholder:"Введите метраж помещения в кв.м"},domProps:{value:t.data.metr},on:{input:function(a){a.target.composing||t.$set(t.data,"metr",a.target.value)}}})]),t._v(" "),e("div",{staticClass:"d-flex flex-column align-items-start input"},[e("label",{attrs:{for:"count"}},[t._v("СКОЛЬКО КВ.М В УПАКОВКЕ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.count_kv,expression:"data.count_kv"}],class:{invalid:t.errors.count_kv},attrs:{type:"number",name:"count_kv",placeholder:"1.1"},domProps:{value:t.data.count_kv},on:{input:function(a){a.target.composing||t.$set(t.data,"count_kv",a.target.value)}}})]),t._v(" "),e("div",{staticClass:"check"},[e("h3",[t._v("СПОСОБ УКЛАДКИ ЛАМИНАТА")]),t._v(" "),e("div",{staticClass:"checkbox row"},[e("div",{staticClass:"col-6"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.sposob,expression:"data.sposob"}],attrs:{id:"check1",type:"checkbox",value:"1"},domProps:{checked:Array.isArray(t.data.sposob)?t._i(t.data.sposob,"1")>-1:t.data.sposob},on:{change:function(a){var e=t.data.sposob,s=a.target,r=!!s.checked;if(Array.isArray(e)){var n=t._i(e,"1");s.checked?n<0&&t.$set(t.data,"sposob",e.concat(["1"])):n>-1&&t.$set(t.data,"sposob",e.slice(0,n).concat(e.slice(n+1)))}else t.$set(t.data,"sposob",r)}}}),t._v(" "),e("label",{attrs:{for:"check1"}},[t._v("Прямой")])]),t._v(" "),e("div",{staticClass:"col-6"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.sposob,expression:"data.sposob"}],attrs:{id:"check2",type:"checkbox",value:"2"},domProps:{checked:Array.isArray(t.data.sposob)?t._i(t.data.sposob,"2")>-1:t.data.sposob},on:{change:function(a){var e=t.data.sposob,s=a.target,r=!!s.checked;if(Array.isArray(e)){var n=t._i(e,"2");s.checked?n<0&&t.$set(t.data,"sposob",e.concat(["2"])):n>-1&&t.$set(t.data,"sposob",e.slice(0,n).concat(e.slice(n+1)))}else t.$set(t.data,"sposob",r)}}}),t._v(" "),e("label",{attrs:{for:"check2"}},[t._v("От угла")])])])]),t._v(" "),e("hr"),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"button-block"},[e("button",{on:{click:function(a){return t.CheckForm()}}},[t._v("ДАЛЕЕ")])])]):t._e(),t._v(" "),2==t.numForm?e("div",{attrs:{id:"second-form"}},[e("div",{staticClass:"d-flex flex-column align-items-start input"},[e("label",{attrs:{for:"metr"}},[t._v("ВАШЕ ИМЯ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.name,expression:"data.name"}],class:{invalid:t.errors.name},attrs:{type:"text",name:"name"},domProps:{value:t.data.name},on:{input:function(a){a.target.composing||t.$set(t.data,"name",a.target.value)}}})]),t._v(" "),e("div",{staticClass:"d-flex flex-column align-items-start input"},[e("label",{attrs:{for:"count"}},[t._v("EMAIL")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.email,expression:"data.email"}],class:{invalid:t.errors.email},attrs:{type:"text",name:"email"},domProps:{value:t.data.email},on:{input:function(a){a.target.composing||t.$set(t.data,"email",a.target.value)}}})]),t._v(" "),e("div",{staticClass:"button-block"},[e("button",{on:{click:function(a){return t.SendForm()}}},[t._v("ОТПРАВИТЬ")])])]):t._e()]):t._e(),t._v(" "),3==t.numForm?e("div",{staticClass:"result"},[e("h2",[t._v(t._s(t.result))])]):t._e()])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"num"},[a("p",[this._v("Колличество упаковок")]),this._v(" "),a("span",[this._v("12")])])}]};var n={name:"App",components:{formSend:e("VU/8")({data:function(){return{numForm:1,result:null,errors:{metr:!1,count_kv:!1,name:!1,email:!1},data:{metr:null,count_kv:null,sposob:[],name:null,email:null}}},methods:{CheckForm:function(){if(1==this.numForm)this.data.metr&&this.data.count_kv?this.numForm=2:(this.data.metr||(this.errors.metr=!0),this.data.count_kv||(this.errors.count_kv=!0));else if(2==this.numForm){if(this.data.name&&this.data.email)return!0;this.data.name||(this.errors.name=!0),this.data.email||(this.errors.email=!0)}return!1},SendForm:function(){var t=this;if(this.CheckForm()){var a=this.data;this.$http.get("backend.php",{params:{data:a}}).then(function(a){t.result=a.data,t.numForm=3},function(t){})}}}},r,!1,function(t){e("j1Nd")},"data-v-2908bce8",null).exports}},o={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("formSend")],1)},staticRenderFns:[]};var i=e("VU/8")(n,o,!1,function(t){e("2Wry")},null,null).exports,c=e("8+8L");e("qb6w");s.a.config.productionTip=!1,s.a.use(c.a),new s.a({el:"#app",components:{App:i},template:"<App/>"})},j1Nd:function(t,a){},qb6w:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.b9a018dc30c026353b18.js.map