"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("vue"),c=require("./index-DDhYRVYJ.cjs"),f=e.defineComponent({__name:"AsyncCheckBox",props:{value:{},options:{type:[Array,Function]}},emits:["update:value"],setup(i,{emit:p}){const t=i,v=p,l=e.computed({get(){return t.value},set(a){v("update:value",a)}}),o=e.ref("加载中...."),n=e.ref([]),u=async()=>{o.value="加载中....";try{if(t.options instanceof Function){const a=await t.options();n.value=a}else{if(t.options&&!Array.isArray(t.options)){console.error("options must be an array or a function that returns an array");return}n.value=t.options}n.value.length===0?o.value="暂无数据":o.value=""}catch{o.value="数据加载失败"}l.value=t.value};u();const d=async()=>{await u()};return(a,s)=>(e.openBlock(),e.createElementBlock("div",null,[e.createElementVNode("span",{onClick:d,style:{cursor:"pointer",color:"hsla(237deg 74% 33% / 61%)"}},e.toDisplayString(n.value.length>0?"":o.value),1),e.createVNode(e.unref(c.ACheckboxGroup),e.mergeProps({value:l.value,"onUpdate:value":s[0]||(s[0]=r=>l.value=r)},a.$attrs),{default:e.withCtx(()=>[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(n.value,r=>(e.openBlock(),e.createBlock(e.unref(c.Checkbox),{key:r.value,value:r.value},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(r.label),1)]),_:2},1032,["value"]))),128))]),_:1},16,["value"])]))}});exports.default=f;
