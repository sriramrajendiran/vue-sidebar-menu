!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["vue-sidebar-menu"]=e():t["vue-sidebar-menu"]=e()}(window,function(){return function(t){var e={};function i(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/dist/",i(i.s=6)}([function(t,e,i){"use strict";i.d(e,"b",function(){return s}),i.d(e,"a",function(){return n});var s={data:function(){return{active:!1,childActive:!1}},created:function(){this.active=!(!this.item||!this.item.href)&&this.isLinkActive(this.item),this.childActive=!(!this.item||!this.item.child)&&this.isChildActive(this.item.child),this.item&&this.item.child?this.showChild?this.show=!0:this.show=this.isLinkActive(this.item)||this.isChildActive(this.item.child):this.show=!1},methods:{toggleDropdown:function(){this.show=!this.show},isLinkActive:function(t){return this.$route?t.href==this.$route.path:t.href==window.location.pathname},isChildActive:function(t){var e=!0,i=!1,s=void 0;try{for(var n,a=t[Symbol.iterator]();!(e=(n=a.next()).done);e=!0){var l=n.value;if(this.isLinkActive(l))return!0;if(l.child&&this.isChildActive(l.child))return!0}}catch(t){i=!0,s=t}finally{try{!e&&a.return&&a.return()}finally{if(i)throw s}}return!1},clickEvent:function(t,e,i){if(i.template&&this.$parent.$emit("clickTemplate",i.template),this.item.disabled||e&&!this.item.href)t.preventDefault();else{if(this.isCollapsed&&this.firstItem&&!this.item.child)return t.preventDefault(),void this.$parent.$emit("clickItem");if(!e&&this.item.child){if(this.isCollapsed&&this.firstItem)return void t.preventDefault();this.isRouterLink?this.active?this.toggleDropdown():this.show=!0:this.item.href||(t.preventDefault(),this.toggleDropdown())}}}},computed:{isRouterLink:function(){return this.$router&&this.item&&void 0!==this.item.href}},watch:{$route:function(){this.active=!(!this.item||!this.item.href)&&this.isLinkActive(this.item),this.childActive=!(!this.item||!this.item.child)&&this.isChildActive(this.item.child)}},inject:["showChild"]},n={methods:{expandEnter:function(t){t.style.height=t.scrollHeight+"px"},expandAfterEnter:function(t){t.style.height="auto"},expandBeforeLeave:function(t){this.isCollapsed?t.style.display="none":t.style.height=t.scrollHeight+"px"}}}},function(t,e,i){"use strict";function s(t,e,i,s,n,a,l,o){var r,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=i,c._compiled=!0),s&&(c.functional=!0),a&&(c._scopeId="data-v-"+a),l?(r=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(l)},c._ssrRegister=r):n&&(r=o?function(){n.call(this,this.$root.$options.shadowRoot)}:n),r)if(c.functional){c._injectStyles=r;var m=c.render;c.render=function(t,e){return r.call(e),m(t,e)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,r):[r]}return{exports:t,options:c}}i.d(e,"a",function(){return s})},function(t,e,i){"use strict";var s=i(3),n=i(0),a={data:function(){return{show:!1}},mixins:[n.b,n.a],props:{item:Object},components:{Item:s.default},beforeCreate:function(){this.$options.components.Item=i(3).default}},l=i(1),o=Object(l.a)(a,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vsm-item",class:[{"open-item":t.show},{"active-item":t.active},{"parent-active-item":t.childActive}]},[t.isRouterLink?[i("router-link",{staticClass:"vsm-link",attrs:{to:t.item.href,disabled:t.item.disabled,event:t.item.disabled?"":"click"},nativeOn:{click:function(e){t.clickEvent(e,!1,t.item)}}},[t.item.icon?i("i",{staticClass:"vsm-icon",class:t.item.icon}):t._e(),t._v(" "),t.item.badge?i("span",{staticClass:"vsm-badge",class:[t.item.badge.class?t.item.badge.class:"default-badge"],style:[t.item.child?{"margin-right":"30px"}:""]},[t._v(t._s(t.item.badge.text))]):t._e(),t._v(" "),i("span",{staticClass:"vsm-title"},[t._v(t._s(t.item.title))]),t._v(" "),t.item.child?i("i",{staticClass:"vsm-arrow",class:{"open-arrow":t.show}}):t._e()])]:[i("a",{staticClass:"vsm-link",attrs:{href:t.item.href?t.item.href:"#",disabled:t.item.disabled},on:{click:function(e){t.clickEvent(e,!1,t.item)}}},[t.item.icon?i("i",{staticClass:"vsm-icon",class:t.item.icon}):t._e(),t._v(" "),t.item.badge?i("span",{staticClass:"vsm-badge",class:[t.item.badge.class?t.item.badge.class:"default-badge"],style:[t.item.child?{"margin-right":"30px"}:""]},[t._v(t._s(t.item.badge.text))]):t._e(),t._v(" "),i("span",{staticClass:"vsm-title"},[t._v(t._s(t.item.title))]),t._v(" "),t.item.child?i("i",{staticClass:"vsm-arrow",class:{"open-arrow":t.show}}):t._e()])],t._v(" "),t.item.child?[i("transition",{attrs:{name:"expand"},on:{enter:t.expandEnter,afterEnter:t.expandAfterEnter,beforeLeave:t.expandBeforeLeave}},[t.show?i("div",{staticClass:"vsm-dropdown"},[i("div",{staticClass:"vsm-list"},t._l(t.item.child,function(t,e){return i("item",{key:e,attrs:{item:t}})}),1)]):t._e()])]:t._e()],2)},[],!1,null,null,null);o.options.__file="SubItem.vue";e.a=o.exports},function(t,e,i){"use strict";i.r(e);var s=i(2),n=i(0),a={data:function(){return{show:!1}},props:{item:{type:Object,required:!0},firstItem:{type:Boolean,default:!1},isCollapsed:{type:Boolean}},components:{SubItem:s.a},mixins:[n.b,n.a],methods:{mouseEnter:function(t){this.isCollapsed&&this.firstItem&&this.$parent.$emit("mouseEnterItem",{item:this.item,pos:t.currentTarget.getBoundingClientRect().top-this.$parent.$el.getBoundingClientRect().top,height:this.$el.offsetHeight})}}},l=i(1),o=Object(l.a)(a,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vsm-item",class:[{"first-item":t.firstItem},{"open-item":t.show},{"active-item":t.active},{"parent-active-item":t.childActive}],on:{mouseenter:function(e){t.mouseEnter(e)}}},[t.isRouterLink?[i("router-link",{staticClass:"vsm-link",attrs:{to:t.item.href,disabled:t.item.disabled,event:t.item.disabled?"":"click"},nativeOn:{click:function(e){t.clickEvent(e,!1,t.item)}}},[t.item.icon?i("i",{staticClass:"vsm-icon",class:t.item.icon}):t._e(),t._v(" "),t.isCollapsed?t._e():[t.item.badge?i("span",{staticClass:"vsm-badge",class:[t.item.badge.class?t.item.badge.class:"default-badge"],style:[t.item.child?{"margin-right":"30px"}:""]},[t._v(t._s(t.item.badge.text))]):t._e(),t._v(" "),i("span",{staticClass:"vsm-title"},[t._v(t._s(t.item.title))]),t._v(" "),t.item.child?i("i",{staticClass:"vsm-arrow",class:{"open-arrow":t.show}}):t._e()]],2)]:[i("a",{staticClass:"vsm-link",attrs:{href:t.item.href?t.item.href:"#",disabled:t.item.disabled},on:{click:function(e){t.clickEvent(e,!1,t.item)}}},[t.item.icon?i("i",{staticClass:"vsm-icon",class:t.item.icon}):t._e(),t._v(" "),t.isCollapsed?t._e():[t.item.badge?i("span",{staticClass:"vsm-badge",class:[t.item.badge.class?t.item.badge.class:"default-badge"],style:[t.item.child?{"margin-right":"30px"}:""]},[t._v(t._s(t.item.badge.text))]):t._e(),t._v(" "),i("span",{staticClass:"vsm-title"},[t._v(t._s(t.item.title))]),t._v(" "),t.item.child?i("i",{staticClass:"vsm-arrow",class:{"open-arrow":t.show}}):t._e()]],2)],t._v(" "),t.item.child?[t.isCollapsed?t._e():[i("transition",{attrs:{name:"expand"},on:{enter:t.expandEnter,afterEnter:t.expandAfterEnter,beforeLeave:t.expandBeforeLeave}},[t.show?i("div",{staticClass:"vsm-dropdown"},[i("div",{staticClass:"vsm-list"},t._l(t.item.child,function(t,e){return i("sub-item",{key:e,attrs:{item:t}})}),1)]):t._e()])]]:t._e()],2)},[],!1,null,null,null);o.options.__file="Item.vue";e.default=o.exports},function(t,e,i){},function(t,e,i){"use strict";var s=i(4);i.n(s).a},function(t,e,i){"use strict";i.r(e);var s=i(3),n=i(2),a=i(0),l={props:{item:{type:Object}},components:{SubItem:n.a},mixins:[a.b],watch:{item:function(){this.active=!(!this.item||!this.item.href)&&this.isLinkActive(this.item),this.childActive=!(!this.item||!this.item.child)&&this.isChildActive(this.item.child)}}},o=i(1),r=Object(o.a)(l,function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.item?i("div",{staticClass:"vsm-item mobile-item",class:[{"open-item":t.item.child},{"active-item":t.active},{"parent-active-item":t.childActive}]},[t.isRouterLink?[i("router-link",{staticClass:"vsm-link",attrs:{to:t.item.href,disabled:t.item.disabled,event:t.item.disabled?"":"click"},nativeOn:{click:function(e){t.clickEvent(e,!0)}}},[t.item.icon?i("i",{staticClass:"vsm-icon",class:t.item.icon}):t._e(),t._v(" "),t.item.badge?i("span",{staticClass:"vsm-badge",class:[t.item.badge.class?t.item.badge.class:"default-badge"],style:[t.item.child?{"margin-right":"30px"}:""]},[t._v(t._s(t.item.badge.text))]):t._e(),t._v("\n          "+t._s(t.item.title)+"\n          "),t.item.child?i("i",{staticClass:"vsm-arrow open-arrow"}):t._e()])]:[i("a",{staticClass:"vsm-link",attrs:{href:t.item.href?t.item.href:"#",disabled:t.item.disabled},on:{click:function(e){t.clickEvent(e,!0,t.item)}}},[t.item.icon?i("i",{staticClass:"vsm-icon",class:t.item.icon}):t._e(),t._v(" "),t.item.badge?i("span",{staticClass:"vsm-badge",class:[t.item.badge.class?t.item.badge.class:"default-badge"],style:[t.item.child?{"margin-right":"30px"}:""]},[t._v(t._s(t.item.badge.text))]):t._e(),t._v("\n          "+t._s(t.item.title)+"\n          "),t.item.child?i("i",{staticClass:"vsm-arrow open-arrow"}):t._e()])]],2):t._e()},[],!1,null,null,null);r.options.__file="MobileItem.vue";var c=r.exports,m={name:"SidebarMenu",components:{Item:s.default,SubItem:n.a,MobileItem:c},props:{menu:{type:Array,required:!0},collapsed:{type:Boolean,default:!1},width:{type:String,default:"350px"},widthCollapsed:{type:String,default:"50px"},showChild:{type:Boolean,default:!1},theme:{type:String,default:""}},mixins:[a.a],data:function(){return{isCollapsed:this.collapsed,mobileItem:null,mobileItemPos:0,mobileItemHeight:0,closeTimeout:null}},created:function(){var t=this;this.$on("mouseEnterItem",function(e){t.mobileItem=e.item,t.mobileItemPos=e.pos,t.mobileItemHeight=e.height}),this.$on("clickItem",function(){t.closeTimeout&&clearTimeout(t.closeTimeout),t.closeTimeout=setTimeout(function(){t.mouseLeave()},600)}),this.$on("clickTemplate",function(e){t.$emit("sidebarclick",e)})},methods:{mouseLeave:function(){this.mobileItem=null},toggleCollapse:function(){this.isCollapsed=!this.isCollapsed,this.$emit("collapse",this.isCollapsed)}},computed:{sidebarWidth:function(){return this.isCollapsed?this.widthCollapsed:this.width}},watch:{collapsed:function(t){this.isCollapsed=t}},provide:function(){return{showChild:this.showChild}}},d=(i(5),Object(o.a)(m,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"v-sidebar-menu",class:[t.isCollapsed?"vsm-collapsed":"vsm-default",t.theme],style:{width:t.sidebarWidth},on:{mouseleave:t.mouseLeave}},[i("div",{staticClass:"vsm-list",style:[{height:"100%"},{overflow:"hidden auto"}]},[t._l(t.menu,function(e,s){return[e.header?[!e.visibleOnCollapse&&t.isCollapsed||!e.component?e.visibleOnCollapse||!t.isCollapsed?[i("div",{key:s,staticClass:"vsm-header"},[t._v(t._s(e.title))])]:t._e():[i(e.component,{key:s,tag:"component"})]]:i("item",{key:s,attrs:{item:e,firstItem:!0,isCollapsed:t.isCollapsed}})]})],2),t._v(" "),t.isCollapsed?i("div",{style:[{position:"absolute"},{top:t.mobileItemPos+"px"},{left:"0px"},{"z-index":30},{width:t.width}]},[i("mobile-item",{attrs:{item:t.mobileItem}}),t._v(" "),i("transition",{attrs:{name:"slide-animation"}},[t.mobileItem?i("div",{staticClass:"vsm-mobile-bg",style:[{position:"absolute"},{left:"0px"},{right:"0px"},{top:"0px"},{height:t.mobileItemHeight+"px"}]}):t._e()]),t._v(" "),i("div",{staticClass:"vsm-dropdown",style:[{position:"absolute"},{top:t.mobileItemHeight+"px"},{left:t.sidebarWidth},{right:"0px"},{"max-height":"calc(100vh - "+(t.mobileItemPos+t.mobileItemHeight)+"px)"},{"overflow-y":"auto"}]},[i("transition",{attrs:{name:"expand"},on:{enter:t.expandEnter,afterEnter:t.expandAfterEnter,beforeLeave:t.expandBeforeLeave}},[t.mobileItem&&t.mobileItem.child?i("div",{staticClass:"vsm-list"},t._l(t.mobileItem.child,function(t,e){return i("sub-item",{key:e,attrs:{item:t}})}),1):t._e()])],1)],1):t._e(),t._v(" "),i("button",{staticClass:"collapse-btn",on:{click:t.toggleCollapse}})])},[],!1,null,null,null));d.options.__file="SidebarMenu.vue";var h=d.exports;i.d(e,"SidebarMenu",function(){return h});e.default={install:function(t){t.component("sidebar-menu",h)}}}])});
//# sourceMappingURL=vue-sidebar-menu.js.map