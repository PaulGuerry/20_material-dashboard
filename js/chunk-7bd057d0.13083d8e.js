(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7bd057d0"],{4005:function(t,s,a){"use strict";a("9ec5");var e=a("ec9d"),i=a("df1f"),o=a("a9e3"),n=a("2e59"),r=a("d656"),l=a("484c"),c=a("7dc2"),h=a("bfd5"),d=a("339f");s["a"]=Object(d["a"])(i["a"],o["a"],n["a"],r["a"],l["a"]).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:()=>({calculatedMinWidth:0,closeDependents:!1}),computed:{calculatedLeft(){const{activator:t,content:s}=this.dimensions,a=!this.bottom&&!this.left&&!this.top&&!this.right,e=!1!==this.attach?t.offsetLeft:t.left;let i=0;return this.top||this.bottom||a?i=e+t.width/2-s.width/2:(this.left||this.right)&&(i=e+(this.right?t.width:-s.width)+(this.right?10:-10)),this.nudgeLeft&&(i-=parseInt(this.nudgeLeft)),this.nudgeRight&&(i+=parseInt(this.nudgeRight)),this.calcXOverflow(i,this.dimensions.content.width)+"px"},calculatedTop(){const{activator:t,content:s}=this.dimensions,a=!1!==this.attach?t.offsetTop:t.top;let e=0;return this.top||this.bottom?e=a+(this.bottom?t.height:-s.height)+(this.bottom?10:-10):(this.left||this.right)&&(e=a+t.height/2-s.height/2),this.nudgeTop&&(e-=parseInt(this.nudgeTop)),this.nudgeBottom&&(e+=parseInt(this.nudgeBottom)),!1===this.attach&&(e+=this.pageYOffset),this.calcYOverflow(e)+"px"},classes(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY(){return this.top||this.bottom},offsetX(){return this.left||this.right},styles(){return{left:this.calculatedLeft,maxWidth:Object(c["h"])(this.maxWidth),minWidth:Object(c["h"])(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount(){this.$nextTick(()=>{this.value&&this.callActivate()})},mounted(){"v-slot"===Object(c["u"])(this,"activator",!0)&&Object(h["b"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate(){this.runDelay("close")},genActivatorListeners(){const t=e["a"].options.methods.genActivatorListeners.call(this);return t.focus=t=>{this.getActivator(t),this.runDelay("open")},t.blur=t=>{this.getActivator(t),this.runDelay("close")},t.keydown=t=>{t.keyCode===c["y"].esc&&(this.getActivator(t),this.runDelay("close"))},t},genActivatorAttributes(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition(){const t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:{[this.contentClass]:!0,menuable__content__active:this.isActive,"v-tooltip__content--fixed":this.activatorFixed},style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render(t){return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent(()=>[this.genTransition()]),this.genActivator()])}})},"678e":function(t,s,a){t.exports=a.p+"img/product-3-min.114951d3.jpeg"},"8d74":function(t,s,a){t.exports=a.p+"img/product-1-min.a31de5a2.jpeg"},"9ec5":function(t,s,a){},b8fb:function(t,s,a){t.exports=a.p+"img/product-2-min.a662b4ef.jpeg"},e124:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("v-container",{staticClass:"px-6 py-6",attrs:{fluid:""}},[a("v-row",{staticClass:"mb-12"},[a("v-col",{attrs:{md:"12"}},[a("sales-country")],1)],1),a("v-row",{staticClass:"mb-6 mt-15"},[a("v-col",{staticClass:"pt-0 mb-lg-0 mb-10",attrs:{lg:"4"}},[a("card-website-views")],1),a("v-col",{staticClass:"pt-0 mb-lg-0 mb-10",attrs:{lg:"4"}},[a("card-daily-sales")],1),a("v-col",{staticClass:"pt-0 mb-lg-0",attrs:{lg:"4"}},[a("card-completed-tasks")],1)],1),a("v-row",[a("v-col",{attrs:{md:"12"}},[a("v-row",[a("v-col",{attrs:{sm:"3",cols:"12"}},[a("v-card",{staticClass:"mb-6 card-shadow border-radius-xl py-4"},[a("v-row",{staticClass:"px-4",attrs:{"no-gutters":""}},[a("v-col",{attrs:{sm:"4"}},[a("v-avatar",{staticClass:"shadow-dark",attrs:{color:"bg-gradient-default border-radius-xl mt-n8",height:"64",width:"64"}},[a("v-icon",{staticClass:"material-icons-round text-white",attrs:{size:"24"}},[t._v("weekend")])],1)],1),a("v-col",{staticClass:"text-end",attrs:{sm:"8"}},[a("p",{staticClass:"\n                      text-sm\n                      mb-0\n                      text-capitalize text-body\n                      font-weight-light\n                    "},[t._v(" Bookings ")]),a("h4",{staticClass:"text-h4 text-typo font-weight-bolder mb-0"},[t._v(" 281 ")])])],1),a("hr",{staticClass:"dark horizontal mt-3 mb-4"}),a("v-row",{staticClass:"px-4"},[a("v-col",{attrs:{cols:"12"}},[a("p",{staticClass:"mb-0 text-body"},[a("span",{staticClass:"text-success text-sm font-weight-bolder"},[t._v("+55%")]),a("span",{staticClass:"font-weight-light ms-1"},[t._v("than last week")])])])],1)],1)],1),a("v-col",{attrs:{sm:"3",cols:"12"}},[a("v-card",{staticClass:"mb-6 card-shadow border-radius-xl py-4"},[a("v-row",{staticClass:"px-4",attrs:{"no-gutters":""}},[a("v-col",{attrs:{sm:"4"}},[a("v-avatar",{staticClass:"shadow-primary",attrs:{color:"bg-gradient-primary border-radius-xl mt-n8",height:"64",width:"64"}},[a("v-icon",{staticClass:"material-icons-round text-white",attrs:{size:"24"}},[t._v("leaderboard")])],1)],1),a("v-col",{staticClass:"text-end",attrs:{sm:"8"}},[a("p",{staticClass:"\n                      text-sm\n                      mb-0\n                      text-capitalize text-body\n                      font-weight-light\n                    "},[t._v(" Today's Users ")]),a("h4",{staticClass:"text-h4 text-typo font-weight-bolder mb-0"},[t._v(" 2,300 ")])])],1),a("hr",{staticClass:"dark horizontal mt-3 mb-4"}),a("v-row",{staticClass:"px-4"},[a("v-col",{attrs:{cols:"12"}},[a("p",{staticClass:"mb-0 text-body"},[a("span",{staticClass:"text-success text-sm font-weight-bolder"},[t._v("+3%")]),a("span",{staticClass:"font-weight-light ms-1"},[t._v("than last month")])])])],1)],1)],1),a("v-col",{attrs:{sm:"3",cols:"12"}},[a("v-card",{staticClass:"mb-6 card-shadow border-radius-xl py-4"},[a("v-row",{staticClass:"px-4",attrs:{"no-gutters":""}},[a("v-col",{attrs:{sm:"4"}},[a("v-avatar",{staticClass:"shadow-success",attrs:{color:"bg-gradient-success border-radius-xl mt-n8",height:"64",width:"64"}},[a("v-icon",{staticClass:"material-icons-round text-white",attrs:{size:"24"}},[t._v("store")])],1)],1),a("v-col",{staticClass:"text-end",attrs:{sm:"8"}},[a("p",{staticClass:"\n                      text-sm\n                      mb-0\n                      text-capitalize text-body\n                      font-weight-light\n                    "},[t._v(" Revenue ")]),a("h4",{staticClass:"text-h4 text-typo font-weight-bolder mb-0"},[t._v(" 34k ")])])],1),a("hr",{staticClass:"dark horizontal mt-3 mb-4"}),a("v-row",{staticClass:"px-4"},[a("v-col",{attrs:{cols:"12"}},[a("p",{staticClass:"mb-0 text-body"},[a("span",{staticClass:"text-success text-sm font-weight-bolder"},[t._v("+1%")]),a("span",{staticClass:"font-weight-light ms-1"},[t._v("than yesterday")])])])],1)],1)],1),a("v-col",{attrs:{sm:"3",cols:"12"}},[a("v-card",{staticClass:"mb-6 card-shadow border-radius-xl py-4"},[a("v-row",{staticClass:"px-4",attrs:{"no-gutters":""}},[a("v-col",{attrs:{sm:"4"}},[a("v-avatar",{staticClass:"shadow-info",attrs:{color:"bg-gradient-info border-radius-xl mt-n8",height:"64",width:"64"}},[a("v-icon",{staticClass:"material-icons-round text-white",attrs:{size:"24"}},[t._v("person_add")])],1)],1),a("v-col",{staticClass:"text-end",attrs:{sm:"8"}},[a("p",{staticClass:"\n                      text-sm\n                      mb-0\n                      text-capitalize text-body\n                      font-weight-light\n                    "},[t._v(" Followers ")]),a("h4",{staticClass:"text-h4 text-typo font-weight-bolder mb-0"},[t._v(" +91 ")])])],1),a("hr",{staticClass:"dark horizontal mt-3 mb-4"}),a("v-row",{staticClass:"px-4"},[a("v-col",{attrs:{cols:"12"}},[a("p",{staticClass:"mb-0 text-body"},[a("span",{staticClass:"font-weight-light ms-1"},[t._v("Just updated")])])])],1)],1)],1)],1)],1)],1),a("v-row",{staticClass:"mb-6 mt-10"},t._l(t.imageCards,(function(s,e){return a("v-col",{key:s.title+e,staticClass:"pt-0 mb-lg-0 mb-10",attrs:{lg:"4"}},[a("v-card",{staticClass:"card card-shadow border-radius-xl py-5 text-center",attrs:{"data-animation":"true"}},[a("div",{staticClass:"mt-n11 mx-4 card-header position-relative z-index-2"},[a("div",{staticClass:"d-block blur-shadow-image"},[a("img",{staticClass:"img-fluid shadow border-radius-lg",attrs:{src:s.image,alt:s.image}})]),a("div",{staticClass:"colored-shadow",style:{backgroundImage:"url("+s.image+")"}})]),a("div",{staticClass:"d-flex mx-auto mt-n8"},[a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(s){var e=s.on,i=s.attrs;return[a("v-icon",t._g(t._b({staticClass:"material-icons-round text-primary ms-auto px-5",attrs:{size:"18"}},"v-icon",i,!1),e),[t._v(" refresh ")])]}}],null,!0)},[a("span",[t._v("Refresh")])]),a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(s){var e=s.on,i=s.attrs;return[a("v-icon",t._g(t._b({staticClass:"material-icons-round text-info me-auto px-5",attrs:{size:"18"}},"v-icon",i,!1),e),[t._v(" edit ")])]}}],null,!0)},[a("span",[t._v("Edit")])])],1),a("h5",{staticClass:"font-weight-normal text-typo text-h5 mt-7 mb-2 px-4"},[a("a",{staticClass:"text-decoration-none text-default",attrs:{href:"javascript:;"}},[t._v(t._s(s.title))])]),a("p",{staticClass:"mb-0 text-body font-weight-light px-5"},[t._v(" "+t._s(s.text)+" ")]),a("hr",{staticClass:"horizontal dark my-6"}),a("div",{staticClass:"d-flex text-body mx-2 px-4"},[a("p",{staticClass:"mb-0 font-weight-normal text-body"},[t._v(" $"+t._s(s.price)+"/night ")]),a("i",{staticClass:"\n                material-icons-round\n                position-relative\n                ms-auto\n                text-lg\n                me-1\n                my-auto\n              "},[t._v("place")]),a("p",{staticClass:"text-sm my-auto font-weight-light"},[t._v(" "+t._s(s.location)+" ")])])])],1)})),1)],1)],1)},i=[],o=a("bbd7"),n=a("c776"),r=a("4671"),l=a("d43a"),c={name:"Dashboard",components:{SalesCountry:o["a"],CardWebsiteViews:n["a"],CardDailySales:r["a"],CardCompletedTasks:l["a"]},data(){return{imageCards:[{image:a("8d74"),title:"Cozy 5 Stars Apartment",text:"The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to 'Naviglio' where you can enjoy the main night life in Barcelona.",price:"899",location:"Barcelona, Spain"},{image:a("b8fb"),title:"Office Studio",text:"The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to 'Naviglio' where you can enjoy the main night life in Barcelona.",price:"1.119",location:"London, UK"},{image:a("678e"),title:"Beautiful Castle",text:"The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to 'Naviglio' where you can enjoy the main night life in Barcelona.",price:"459",location:"Milan, Italy"}]}}},h=c,d=a("959d"),m=a("6403"),p=a.n(m),v=a("8dd6"),u=a("fee1"),g=a("32c7"),b=a("bdf6"),x=a("b45a"),f=a("68ab"),C=a("4005"),w=Object(d["a"])(h,e,i,!1,null,null,null);s["default"]=w.exports;p()(w,{VAvatar:v["a"],VCard:u["a"],VCol:g["a"],VContainer:b["a"],VIcon:x["a"],VRow:f["a"],VTooltip:C["a"]})}}]);
//# sourceMappingURL=chunk-7bd057d0.13083d8e.js.map