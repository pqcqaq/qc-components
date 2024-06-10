"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const i=require("vue"),r=require("./index-B3dyQLhr.cjs"),$=e=>{const{componentCls:t,sizePaddingEdgeHorizontal:l,colorSplit:o,lineWidth:n}=e;return{[t]:r._extends(r._extends({},r.resetComponent(e)),{borderBlockStart:`${n}px solid ${o}`,"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",margin:`0 ${e.dividerVerticalGutterMargin}px`,verticalAlign:"middle",borderTop:0,borderInlineStart:`${n}px solid ${o}`},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:`${e.dividerHorizontalGutterMargin}px 0`},[`&-horizontal${t}-with-text`]:{display:"flex",alignItems:"center",margin:`${e.dividerHorizontalWithTextGutterMargin}px 0`,color:e.colorTextHeading,fontWeight:500,fontSize:e.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:`0 ${o}`,"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:`${n}px solid transparent`,borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},[`&-horizontal${t}-with-text-left`]:{"&::before":{width:"5%"},"&::after":{width:"95%"}},[`&-horizontal${t}-with-text-right`]:{"&::before":{width:"95%"},"&::after":{width:"5%"}},[`${t}-inner-text`]:{display:"inline-block",padding:"0 1em"},"&-dashed":{background:"none",borderColor:o,borderStyle:"dashed",borderWidth:`${n}px 0 0`},[`&-horizontal${t}-with-text${t}-dashed`]:{"&::before, &::after":{borderStyle:"dashed none none"}},[`&-vertical${t}-dashed`]:{borderInlineStartWidth:n,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},[`&-plain${t}-with-text`]:{color:e.colorText,fontWeight:"normal",fontSize:e.fontSize},[`&-horizontal${t}-with-text-left${t}-no-default-orientation-margin-left`]:{"&::before":{width:0},"&::after":{width:"100%"},[`${t}-inner-text`]:{paddingInlineStart:l}},[`&-horizontal${t}-with-text-right${t}-no-default-orientation-margin-right`]:{"&::before":{width:"100%"},"&::after":{width:0},[`${t}-inner-text`]:{paddingInlineEnd:l}}})}},S=r.genComponentStyleHook("Divider",e=>{const t=r.merge(e,{dividerVerticalGutterMargin:e.marginXS,dividerHorizontalWithTextGutterMargin:e.margin,dividerHorizontalGutterMargin:e.marginLG});return[$(t)]},{sizePaddingEdgeHorizontal:0}),b=()=>({prefixCls:String,type:{type:String,default:"horizontal"},dashed:{type:Boolean,default:!1},orientation:{type:String,default:"center"},plain:{type:Boolean,default:!1},orientationMargin:[String,Number]}),w=i.defineComponent({name:"ADivider",inheritAttrs:!1,compatConfig:{MODE:3},props:b(),setup(e,t){let{slots:l,attrs:o}=t;const{prefixCls:n,direction:g}=r.useConfigInject("divider",e),[f,c]=S(n),h=i.computed(()=>e.orientation==="left"&&e.orientationMargin!=null),u=i.computed(()=>e.orientation==="right"&&e.orientationMargin!=null),p=i.computed(()=>{const{type:a,dashed:s,plain:x}=e,d=n.value;return{[d]:!0,[c.value]:!!c.value,[`${d}-${a}`]:!0,[`${d}-dashed`]:!!s,[`${d}-plain`]:!!x,[`${d}-rtl`]:g.value==="rtl",[`${d}-no-default-orientation-margin-left`]:h.value,[`${d}-no-default-orientation-margin-right`]:u.value}}),m=i.computed(()=>{const a=typeof e.orientationMargin=="number"?`${e.orientationMargin}px`:e.orientationMargin;return r._extends(r._extends({},h.value&&{marginLeft:a}),u.value&&{marginRight:a})}),v=i.computed(()=>e.orientation.length>0?"-"+e.orientation:e.orientation);return()=>{var a;const s=r.flattenChildren((a=l.default)===null||a===void 0?void 0:a.call(l));return f(i.createVNode("div",r._objectSpread2(r._objectSpread2({},o),{},{class:[p.value,s.length?`${n.value}-with-text ${n.value}-with-text${v.value}`:"",o.class],role:"separator"}),[s.length?i.createVNode("span",{class:`${n.value}-inner-text`,style:m.value},[s]):null]))}}}),y=r.withInstall(w),z=i.defineComponent({__name:"CustomDivider",props:{dividerText:{}},setup(e){const t=e;return(l,o)=>(i.openBlock(),i.createBlock(i.unref(y),i.normalizeProps(i.guardReactiveProps(l.$attrs)),{default:i.withCtx(()=>[i.createTextVNode(i.toDisplayString(t.dividerText),1)]),_:1},16))}});exports.default=z;
