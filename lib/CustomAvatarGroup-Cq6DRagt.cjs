"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const o=require("vue"),e=require("./index-BY0FQ7Q9.cjs"),L=t=>{const{antCls:r,componentCls:a,iconCls:n,avatarBg:l,avatarColor:v,containerSize:s,containerSizeLG:p,containerSizeSM:f,textFontSize:g,textFontSizeLG:u,textFontSizeSM:y,borderRadius:c,borderRadiusLG:i,borderRadiusSM:h,lineWidth:m,lineType:b}=t,S=($,d,x)=>({width:$,height:$,lineHeight:`${$-m*2}px`,borderRadius:"50%",[`&${a}-square`]:{borderRadius:x},[`${a}-string`]:{position:"absolute",left:{_skip_check_:!0,value:"50%"},transformOrigin:"0 center"},[`&${a}-icon`]:{fontSize:d,[`> ${n}`]:{margin:0}}});return{[a]:e._extends(e._extends(e._extends(e._extends({},e.resetComponent(t)),{position:"relative",display:"inline-block",overflow:"hidden",color:v,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:l,border:`${m}px ${b} transparent`,"&-image":{background:"transparent"},[`${r}-image-img`]:{display:"block"}}),S(s,g,c)),{"&-lg":e._extends({},S(p,u,i)),"&-sm":e._extends({},S(f,y,h)),"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}})}},F=t=>{const{componentCls:r,groupBorderColor:a,groupOverlapping:n,groupSpace:l}=t;return{[`${r}-group`]:{display:"inline-flex",[`${r}`]:{borderColor:a},"> *:not(:first-child)":{marginInlineStart:n}},[`${r}-group-popover`]:{[`${r} + ${r}`]:{marginInlineStart:l}}}},A=e.genComponentStyleHook("Avatar",t=>{const{colorTextLightSolid:r,colorTextPlaceholder:a}=t,n=e.merge(t,{avatarBg:a,avatarColor:r});return[L(n),F(n)]},t=>{const{controlHeight:r,controlHeightLG:a,controlHeightSM:n,fontSize:l,fontSizeLG:v,fontSizeXL:s,fontSizeHeading3:p,marginXS:f,marginXXS:g,colorBorderBg:u}=t;return{containerSize:r,containerSizeLG:a,containerSizeSM:n,textFontSize:Math.round((v+s)/2),textFontSizeLG:p,textFontSizeSM:l,groupSpace:g,groupOverlapping:-f,groupBorderColor:u}}),j=Symbol("AvatarContextKey"),D=()=>o.inject(j,{}),X=t=>o.provide(j,t),q=()=>({prefixCls:String,shape:{type:String,default:"circle"},size:{type:[Number,String,Object],default:()=>"default"},src:String,srcset:String,icon:e.PropTypes.any,alt:String,gap:Number,draggable:{type:Boolean,default:void 0},crossOrigin:String,loadError:{type:Function}}),z=o.defineComponent({compatConfig:{MODE:3},name:"AAvatar",inheritAttrs:!1,props:q(),slots:Object,setup(t,r){let{slots:a,attrs:n}=r;const l=o.shallowRef(!0),v=o.shallowRef(!1),s=o.shallowRef(1),p=o.shallowRef(null),f=o.shallowRef(null),{prefixCls:g}=e.useConfigInject("avatar",t),[u,y]=A(g),c=D(),i=o.computed(()=>t.size==="default"?c.size:t.size),h=e.useBreakpoint(),m=e.eagerComputed(()=>{if(typeof t.size!="object")return;const d=e.responsiveArray.find(P=>h.value[P]);return t.size[d]}),b=d=>m.value?{width:`${m.value}px`,height:`${m.value}px`,lineHeight:`${m.value}px`,fontSize:`${d?m.value/2:18}px`}:{},S=()=>{if(!p.value||!f.value)return;const d=p.value.offsetWidth,x=f.value.offsetWidth;if(d!==0&&x!==0){const{gap:P=4}=t;P*2<x&&(s.value=x-P*2<d?(x-P*2)/d:1)}},$=()=>{const{loadError:d}=t;(d==null?void 0:d())!==!1&&(l.value=!1)};return o.watch(()=>t.src,()=>{o.nextTick(()=>{l.value=!0,s.value=1})}),o.watch(()=>t.gap,()=>{o.nextTick(()=>{S()})}),o.onMounted(()=>{o.nextTick(()=>{S(),v.value=!0})}),()=>{var d,x;const{shape:P,src:B,alt:R,srcset:E,draggable:V,crossOrigin:I}=t,M=(d=c.shape)!==null&&d!==void 0?d:P,_=e.getPropsSlot(a,t,"icon"),C=g.value,O={[`${n.class}`]:!!n.class,[C]:!0,[`${C}-lg`]:i.value==="large",[`${C}-sm`]:i.value==="small",[`${C}-${M}`]:!0,[`${C}-image`]:B&&l.value,[`${C}-icon`]:_,[y.value]:!0},G=typeof i.value=="number"?{width:`${i.value}px`,height:`${i.value}px`,lineHeight:`${i.value}px`,fontSize:_?`${i.value/2}px`:"18px"}:{},T=(x=a.default)===null||x===void 0?void 0:x.call(a);let k;if(B&&l.value)k=o.createVNode("img",{draggable:V,src:B,srcset:E,onError:$,alt:R,crossorigin:I},null);else if(_)k=_;else if(v.value||s.value!==1){const N=`scale(${s.value}) translateX(-50%)`,H={msTransform:N,WebkitTransform:N,transform:N},W=typeof i.value=="number"?{lineHeight:`${i.value}px`}:{};k=o.createVNode(e.ResizeObserver,{onResize:S},{default:()=>[o.createVNode("span",{class:`${C}-string`,ref:p,style:e._extends(e._extends({},W),H)},[T])]})}else k=o.createVNode("span",{class:`${C}-string`,ref:p,style:{opacity:0}},[T]);return u(o.createVNode("span",e._objectSpread2(e._objectSpread2({},n),{},{ref:f,class:O,style:[G,b(!!_),n.style]}),[k]))}}}),K=t=>{const{componentCls:r,popoverBg:a,popoverColor:n,width:l,fontWeightStrong:v,popoverPadding:s,boxShadowSecondary:p,colorTextHeading:f,borderRadiusLG:g,zIndexPopup:u,marginXS:y,colorBgElevated:c}=t;return[{[r]:e._extends(e._extends({},e.resetComponent(t)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:u,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text","--antd-arrow-background-color":c,"&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${r}-content`]:{position:"relative"},[`${r}-inner`]:{backgroundColor:a,backgroundClip:"padding-box",borderRadius:g,boxShadow:p,padding:s},[`${r}-title`]:{minWidth:l,marginBottom:y,color:f,fontWeight:v},[`${r}-inner-content`]:{color:n}})},e.getArrowStyle(t,{colorBg:"var(--antd-arrow-background-color)"}),{[`${r}-pure`]:{position:"relative",maxWidth:"none",[`${r}-content`]:{display:"inline-block"}}}]},Z=t=>{const{componentCls:r}=t;return{[r]:e.PresetColors.map(a=>{const n=t[`${a}-6`];return{[`&${r}-${a}`]:{"--antd-arrow-background-color":n,[`${r}-inner`]:{backgroundColor:n},[`${r}-arrow`]:{background:"transparent"}}}})}},J=t=>{const{componentCls:r,lineWidth:a,lineType:n,colorSplit:l,paddingSM:v,controlHeight:s,fontSize:p,lineHeight:f,padding:g}=t,u=s-Math.round(p*f),y=u/2,c=u/2-a,i=g;return{[r]:{[`${r}-inner`]:{padding:0},[`${r}-title`]:{margin:0,padding:`${y}px ${i}px ${c}px`,borderBottom:`${a}px ${n} ${l}`},[`${r}-inner-content`]:{padding:`${v}px ${i}px`}}}},Q=e.genComponentStyleHook("Popover",t=>{const{colorBgElevated:r,colorText:a,wireframe:n}=t,l=e.merge(t,{popoverBg:r,popoverColor:a,popoverPadding:12});return[K(l),Z(l),n&&J(l),e.initZoomMotion(l,"zoom-big")]},t=>{let{zIndexPopupBase:r}=t;return{zIndexPopup:r+30,width:177}}),U=()=>e._extends(e._extends({},e.abstractTooltipProps()),{content:e.anyType(),title:e.anyType()}),Y=o.defineComponent({compatConfig:{MODE:3},name:"APopover",inheritAttrs:!1,props:e.initDefaultProps(U(),e._extends(e._extends({},e.tooltipDefaultProps()),{trigger:"hover",placement:"top",mouseEnterDelay:.1,mouseLeaveDelay:.1})),setup(t,r){let{expose:a,slots:n,attrs:l}=r;const v=o.ref();e.warning(t.visible===void 0,"popover","`visible` will be removed in next major version, please use `open` instead."),a({getPopupDomNode:()=>{var c,i;return(i=(c=v.value)===null||c===void 0?void 0:c.getPopupDomNode)===null||i===void 0?void 0:i.call(c)}});const{prefixCls:s,configProvider:p}=e.useConfigInject("popover",t),[f,g]=Q(s),u=o.computed(()=>p.getPrefixCls()),y=()=>{var c,i;const{title:h=e.filterEmpty((c=n.title)===null||c===void 0?void 0:c.call(n)),content:m=e.filterEmpty((i=n.content)===null||i===void 0?void 0:i.call(n))}=t,b=!!(Array.isArray(h)?h.length:h),S=!!(Array.isArray(m)?m.length:h);return!b&&!S?null:o.createVNode(o.Fragment,null,[b&&o.createVNode("div",{class:`${s.value}-title`},[h]),o.createVNode("div",{class:`${s.value}-inner-content`},[m])])};return()=>{const c=e.classNames(t.overlayClassName,g.value);return f(o.createVNode(e.Tooltip,e._objectSpread2(e._objectSpread2(e._objectSpread2({},e.omit(t,["title","content"])),l),{},{prefixCls:s.value,ref:v,overlayClassName:c,transitionName:e.getTransitionName(u.value,"zoom-big",t.transitionName),"data-popover-inject":!0}),{title:y,default:n.default}))}}}),ee=e.withInstall(Y),te=()=>({prefixCls:String,maxCount:Number,maxStyle:{type:Object,default:void 0},maxPopoverPlacement:{type:String,default:"top"},maxPopoverTrigger:String,size:{type:[Number,String,Object],default:"default"},shape:{type:String,default:"circle"}}),w=o.defineComponent({compatConfig:{MODE:3},name:"AAvatarGroup",inheritAttrs:!1,props:te(),setup(t,r){let{slots:a,attrs:n}=r;const{prefixCls:l,direction:v}=e.useConfigInject("avatar",t),s=o.computed(()=>`${l.value}-group`),[p,f]=A(l);return o.watchEffect(()=>{const g={size:t.size,shape:t.shape};X(g)}),()=>{const{maxPopoverPlacement:g="top",maxCount:u,maxStyle:y,maxPopoverTrigger:c="hover",shape:i}=t,h={[s.value]:!0,[`${s.value}-rtl`]:v.value==="rtl",[`${n.class}`]:!!n.class,[f.value]:!0},m=e.getPropsSlot(a,t),b=e.flattenChildren(m).map(($,d)=>e.cloneElement($,{key:`avatar-key-${d}`})),S=b.length;if(u&&u<S){const $=b.slice(0,u),d=b.slice(u,S);return $.push(o.createVNode(ee,{key:"avatar-popover-key",content:d,trigger:c,placement:g,overlayClassName:`${s.value}-popover`},{default:()=>[o.createVNode(z,{style:y,shape:i},{default:()=>[`+${S-u}`]})]})),p(o.createVNode("div",e._objectSpread2(e._objectSpread2({},n),{},{class:h,style:n.style}),[$]))}return p(o.createVNode("div",e._objectSpread2(e._objectSpread2({},n),{},{class:h,style:n.style}),[b]))}}});z.Group=w;z.install=function(t){return t.component(z.name,z),t.component(w.name,w),t};const oe=o.defineComponent({__name:"CustomAvatarGroup",props:{avatarGroupValue:{},groupProps:{},avatarProps:{}},setup(t){const r=t;return(a,n)=>(o.openBlock(),o.createElementBlock("div",null,[o.createVNode(o.unref(w),o.normalizeProps(o.guardReactiveProps(r.groupProps)),{default:o.withCtx(()=>[(o.openBlock(!0),o.createElementBlock(o.Fragment,null,o.renderList(r.avatarGroupValue,l=>(o.openBlock(),o.createBlock(o.unref(z),o.mergeProps({key:l.key,ref_for:!0},r.avatarProps,{src:l.src}),{default:o.withCtx(()=>[o.createTextVNode(o.toDisplayString(l.label),1)]),_:2},1040,["src"]))),128))]),_:1},16)]))}});exports.default=oe;