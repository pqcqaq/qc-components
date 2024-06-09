"use strict";const o=require("./index-nNpR0eDD.cjs"),n=require("vue"),w=n.defineComponent({compatConfig:{MODE:3},name:"ResizeObserver",props:{disabled:Boolean,onResize:Function},emits:["resize"],setup(d,m){let{slots:a}=m;const i=n.reactive({width:0,height:0,offsetHeight:0,offsetWidth:0});let u=null,s=null;const c=()=>{s&&(s.disconnect(),s=null)},z=e=>{const{onResize:t}=d,r=e[0].target,{width:x,height:R}=r.getBoundingClientRect(),{offsetWidth:f,offsetHeight:h}=r,g=Math.floor(x),v=Math.floor(R);if(i.width!==g||i.height!==v||i.offsetWidth!==f||i.offsetHeight!==h){const b={width:g,height:v,offsetWidth:f,offsetHeight:h};o._extends(i,b),t&&Promise.resolve().then(()=>{t(o._extends(o._extends({},b),{offsetWidth:f,offsetHeight:h}),r)})}},O=n.getCurrentInstance(),l=()=>{const{disabled:e}=d;if(e){c();return}const t=o.findDOMNode(O);t!==u&&(c(),u=t),!s&&t&&(s=new o.index(z),s.observe(t))};return n.onMounted(()=>{l()}),n.onUpdated(()=>{l()}),n.onUnmounted(()=>{c()}),n.watch(()=>d.disabled,()=>{l()},{flush:"post"}),()=>{var e;return(e=a.default)===null||e===void 0?void 0:e.call(a)[0]}}});exports.ResizeObserver=w;
