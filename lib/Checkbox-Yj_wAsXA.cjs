"use strict";const a=require("./index-nNpR0eDD.cjs"),o=require("vue");var $=function(t,l){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&l.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,n=Object.getOwnPropertySymbols(t);c<n.length;c++)l.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(t,n[c])&&(r[n[c]]=t[n[c]]);return r};const A={prefixCls:String,name:String,id:String,type:String,defaultChecked:{type:[Boolean,Number],default:void 0},checked:{type:[Boolean,Number],default:void 0},disabled:Boolean,tabindex:{type:[Number,String]},readonly:Boolean,autofocus:Boolean,value:a.PropTypes.any,required:Boolean},E=o.defineComponent({compatConfig:{MODE:3},name:"Checkbox",inheritAttrs:!1,props:a.initDefaultProps(A,{prefixCls:"rc-checkbox",type:"checkbox",defaultChecked:!1}),emits:["click","change"],setup(t,l){let{attrs:r,emit:n,expose:c}=l;const s=o.ref(t.checked===void 0?t.defaultChecked:t.checked),i=o.ref();o.watch(()=>t.checked,()=>{s.value=t.checked}),c({focus(){var e;(e=i.value)===null||e===void 0||e.focus()},blur(){var e;(e=i.value)===null||e===void 0||e.blur()}});const u=o.ref(),k=e=>{if(t.disabled)return;t.checked===void 0&&(s.value=e.target.checked),e.shiftKey=u.value;const f={target:a._extends(a._extends({},t),{checked:e.target.checked}),stopPropagation(){e.stopPropagation()},preventDefault(){e.preventDefault()},nativeEvent:e};t.checked!==void 0&&(i.value.checked=!!t.checked),n("change",f),u.value=!1},y=e=>{n("click",e),u.value=e.shiftKey};return()=>{const{prefixCls:e,name:f,id:p,type:x,disabled:h,readonly:g,tabindex:m,autofocus:C,value:_,required:O}=t,P=$(t,["prefixCls","name","id","type","disabled","readonly","tabindex","autofocus","value","required"]),{class:S,onFocus:N,onBlur:j,onKeydown:B,onKeypress:K,onKeyup:q}=r,b=a._extends(a._extends({},P),r),w=Object.keys(b).reduce((v,d)=>((d.startsWith("data-")||d.startsWith("aria-")||d==="role")&&(v[d]=b[d]),v),{}),V=a.classNames(e,S,{[`${e}-checked`]:s.value,[`${e}-disabled`]:h}),D=a._extends(a._extends({name:f,id:p,type:x,readonly:g,disabled:h,tabindex:m,class:`${e}-input`,checked:!!s.value,autofocus:C,value:_},w),{onChange:k,onClick:y,onFocus:N,onBlur:j,onKeydown:B,onKeypress:K,onKeyup:q,required:O});return o.createVNode("span",{class:V},[o.createVNode("input",a._objectSpread2({ref:i},D),null),o.createVNode("span",{class:`${e}-inner`},null)])}}});exports.VcCheckbox=E;
