"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("vue"),o=require("./index-BWWm-k8Z.cjs"),L=require("./index-D0cF3jDT.cjs"),F=require("./eagerComputed-97uPznIf.cjs"),D=require("./omit-Z5Er5v04.cjs");function q(){const e=t.shallowRef({});let r=null;const a=o.useResponsiveObserver();return t.onMounted(()=>{r=a.value.subscribe(n=>{e.value=n})}),t.onUnmounted(()=>{a.value.unsubscribe(r)}),e}const X=e=>{const{antCls:r,componentCls:a,iconCls:n,avatarBg:l,avatarColor:v,containerSize:s,containerSizeLG:p,containerSizeSM:m,textFontSize:g,textFontSizeLG:d,textFontSizeSM:y,borderRadius:c,borderRadiusLG:i,borderRadiusSM:S,lineWidth:f,lineType:b}=e,h=($,u,x)=>({width:$,height:$,lineHeight:`${$-f*2}px`,borderRadius:"50%",[`&${a}-square`]:{borderRadius:x},[`${a}-string`]:{position:"absolute",left:{_skip_check_:!0,value:"50%"},transformOrigin:"0 center"},[`&${a}-icon`]:{fontSize:u,[`> ${n}`]:{margin:0}}});return{[a]:o._extends(o._extends(o._extends(o._extends({},o.resetComponent(e)),{position:"relative",display:"inline-block",overflow:"hidden",color:v,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:l,border:`${f}px ${b} transparent`,"&-image":{background:"transparent"},[`${r}-image-img`]:{display:"block"}}),h(s,g,c)),{"&-lg":o._extends({},h(p,d,i)),"&-sm":o._extends({},h(m,y,S)),"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}})}},K=e=>{const{componentCls:r,groupBorderColor:a,groupOverlapping:n,groupSpace:l}=e;return{[`${r}-group`]:{display:"inline-flex",[`${r}`]:{borderColor:a},"> *:not(:first-child)":{marginInlineStart:n}},[`${r}-group-popover`]:{[`${r} + ${r}`]:{marginInlineStart:l}}}},A=o.genComponentStyleHook("Avatar",e=>{const{colorTextLightSolid:r,colorTextPlaceholder:a}=e,n=o.merge(e,{avatarBg:a,avatarColor:r});return[X(n),K(n)]},e=>{const{controlHeight:r,controlHeightLG:a,controlHeightSM:n,fontSize:l,fontSizeLG:v,fontSizeXL:s,fontSizeHeading3:p,marginXS:m,marginXXS:g,colorBorderBg:d}=e;return{containerSize:r,containerSizeLG:a,containerSizeSM:n,textFontSize:Math.round((v+s)/2),textFontSizeLG:p,textFontSizeSM:l,groupSpace:g,groupOverlapping:-m,groupBorderColor:d}}),R=Symbol("AvatarContextKey"),U=()=>t.inject(R,{}),Z=e=>t.provide(R,e),J=()=>({prefixCls:String,shape:{type:String,default:"circle"},size:{type:[Number,String,Object],default:()=>"default"},src:String,srcset:String,icon:o.PropTypes.any,alt:String,gap:Number,draggable:{type:Boolean,default:void 0},crossOrigin:String,loadError:{type:Function}}),z=t.defineComponent({compatConfig:{MODE:3},name:"AAvatar",inheritAttrs:!1,props:J(),slots:Object,setup(e,r){let{slots:a,attrs:n}=r;const l=t.shallowRef(!0),v=t.shallowRef(!1),s=t.shallowRef(1),p=t.shallowRef(null),m=t.shallowRef(null),{prefixCls:g}=o.useConfigInject("avatar",e),[d,y]=A(g),c=U(),i=t.computed(()=>e.size==="default"?c.size:e.size),S=q(),f=F.eagerComputed(()=>{if(typeof e.size!="object")return;const u=o.responsiveArray.find(P=>S.value[P]);return e.size[u]}),b=u=>f.value?{width:`${f.value}px`,height:`${f.value}px`,lineHeight:`${f.value}px`,fontSize:`${u?f.value/2:18}px`}:{},h=()=>{if(!p.value||!m.value)return;const u=p.value.offsetWidth,x=m.value.offsetWidth;if(u!==0&&x!==0){const{gap:P=4}=e;P*2<x&&(s.value=x-P*2<u?(x-P*2)/u:1)}},$=()=>{const{loadError:u}=e;(u==null?void 0:u())!==!1&&(l.value=!1)};return t.watch(()=>e.src,()=>{t.nextTick(()=>{l.value=!0,s.value=1})}),t.watch(()=>e.gap,()=>{t.nextTick(()=>{h()})}),t.onMounted(()=>{t.nextTick(()=>{h(),v.value=!0})}),()=>{var u,x;const{shape:P,src:B,alt:j,srcset:O,draggable:E,crossOrigin:M}=e,V=(u=c.shape)!==null&&u!==void 0?u:P,_=o.getPropsSlot(a,e,"icon"),C=g.value,I={[`${n.class}`]:!!n.class,[C]:!0,[`${C}-lg`]:i.value==="large",[`${C}-sm`]:i.value==="small",[`${C}-${V}`]:!0,[`${C}-image`]:B&&l.value,[`${C}-icon`]:_,[y.value]:!0},G=typeof i.value=="number"?{width:`${i.value}px`,height:`${i.value}px`,lineHeight:`${i.value}px`,fontSize:_?`${i.value/2}px`:"18px"}:{},T=(x=a.default)===null||x===void 0?void 0:x.call(a);let k;if(B&&l.value)k=t.createVNode("img",{draggable:E,src:B,srcset:O,onError:$,alt:j,crossorigin:M},null);else if(_)k=_;else if(v.value||s.value!==1){const N=`scale(${s.value}) translateX(-50%)`,H={msTransform:N,WebkitTransform:N,transform:N},W=typeof i.value=="number"?{lineHeight:`${i.value}px`}:{};k=t.createVNode(L.ResizeObserver,{onResize:h},{default:()=>[t.createVNode("span",{class:`${C}-string`,ref:p,style:o._extends(o._extends({},W),H)},[T])]})}else k=t.createVNode("span",{class:`${C}-string`,ref:p,style:{opacity:0}},[T]);return d(t.createVNode("span",o._objectSpread2(o._objectSpread2({},n),{},{ref:m,class:I,style:[G,b(!!_),n.style]}),[k]))}}}),Q=e=>{const{componentCls:r,popoverBg:a,popoverColor:n,width:l,fontWeightStrong:v,popoverPadding:s,boxShadowSecondary:p,colorTextHeading:m,borderRadiusLG:g,zIndexPopup:d,marginXS:y,colorBgElevated:c}=e;return[{[r]:o._extends(o._extends({},o.resetComponent(e)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:d,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text","--antd-arrow-background-color":c,"&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${r}-content`]:{position:"relative"},[`${r}-inner`]:{backgroundColor:a,backgroundClip:"padding-box",borderRadius:g,boxShadow:p,padding:s},[`${r}-title`]:{minWidth:l,marginBottom:y,color:m,fontWeight:v},[`${r}-inner-content`]:{color:n}})},o.getArrowStyle(e,{colorBg:"var(--antd-arrow-background-color)"}),{[`${r}-pure`]:{position:"relative",maxWidth:"none",[`${r}-content`]:{display:"inline-block"}}}]},Y=e=>{const{componentCls:r}=e;return{[r]:o.PresetColors.map(a=>{const n=e[`${a}-6`];return{[`&${r}-${a}`]:{"--antd-arrow-background-color":n,[`${r}-inner`]:{backgroundColor:n},[`${r}-arrow`]:{background:"transparent"}}}})}},ee=e=>{const{componentCls:r,lineWidth:a,lineType:n,colorSplit:l,paddingSM:v,controlHeight:s,fontSize:p,lineHeight:m,padding:g}=e,d=s-Math.round(p*m),y=d/2,c=d/2-a,i=g;return{[r]:{[`${r}-inner`]:{padding:0},[`${r}-title`]:{margin:0,padding:`${y}px ${i}px ${c}px`,borderBottom:`${a}px ${n} ${l}`},[`${r}-inner-content`]:{padding:`${v}px ${i}px`}}}},te=o.genComponentStyleHook("Popover",e=>{const{colorBgElevated:r,colorText:a,wireframe:n}=e,l=o.merge(e,{popoverBg:r,popoverColor:a,popoverPadding:12});return[Q(l),Y(l),n&&ee(l),o.initZoomMotion(l,"zoom-big")]},e=>{let{zIndexPopupBase:r}=e;return{zIndexPopup:r+30,width:177}}),oe=()=>o._extends(o._extends({},o.abstractTooltipProps()),{content:o.anyType(),title:o.anyType()}),re=t.defineComponent({compatConfig:{MODE:3},name:"APopover",inheritAttrs:!1,props:o.initDefaultProps(oe(),o._extends(o._extends({},o.tooltipDefaultProps()),{trigger:"hover",placement:"top",mouseEnterDelay:.1,mouseLeaveDelay:.1})),setup(e,r){let{expose:a,slots:n,attrs:l}=r;const v=t.ref();o.warning(e.visible===void 0,"popover","`visible` will be removed in next major version, please use `open` instead."),a({getPopupDomNode:()=>{var c,i;return(i=(c=v.value)===null||c===void 0?void 0:c.getPopupDomNode)===null||i===void 0?void 0:i.call(c)}});const{prefixCls:s,configProvider:p}=o.useConfigInject("popover",e),[m,g]=te(s),d=t.computed(()=>p.getPrefixCls()),y=()=>{var c,i;const{title:S=o.filterEmpty((c=n.title)===null||c===void 0?void 0:c.call(n)),content:f=o.filterEmpty((i=n.content)===null||i===void 0?void 0:i.call(n))}=e,b=!!(Array.isArray(S)?S.length:S),h=!!(Array.isArray(f)?f.length:S);return!b&&!h?null:t.createVNode(t.Fragment,null,[b&&t.createVNode("div",{class:`${s.value}-title`},[S]),t.createVNode("div",{class:`${s.value}-inner-content`},[f])])};return()=>{const c=o.classNames(e.overlayClassName,g.value);return m(t.createVNode(o.Tooltip,o._objectSpread2(o._objectSpread2(o._objectSpread2({},D.omit(e,["title","content"])),l),{},{prefixCls:s.value,ref:v,overlayClassName:c,transitionName:o.getTransitionName(d.value,"zoom-big",e.transitionName),"data-popover-inject":!0}),{title:y,default:n.default}))}}}),ne=o.withInstall(re),ae=()=>({prefixCls:String,maxCount:Number,maxStyle:{type:Object,default:void 0},maxPopoverPlacement:{type:String,default:"top"},maxPopoverTrigger:String,size:{type:[Number,String,Object],default:"default"},shape:{type:String,default:"circle"}}),w=t.defineComponent({compatConfig:{MODE:3},name:"AAvatarGroup",inheritAttrs:!1,props:ae(),setup(e,r){let{slots:a,attrs:n}=r;const{prefixCls:l,direction:v}=o.useConfigInject("avatar",e),s=t.computed(()=>`${l.value}-group`),[p,m]=A(l);return t.watchEffect(()=>{const g={size:e.size,shape:e.shape};Z(g)}),()=>{const{maxPopoverPlacement:g="top",maxCount:d,maxStyle:y,maxPopoverTrigger:c="hover",shape:i}=e,S={[s.value]:!0,[`${s.value}-rtl`]:v.value==="rtl",[`${n.class}`]:!!n.class,[m.value]:!0},f=o.getPropsSlot(a,e),b=o.flattenChildren(f).map(($,u)=>o.cloneElement($,{key:`avatar-key-${u}`})),h=b.length;if(d&&d<h){const $=b.slice(0,d),u=b.slice(d,h);return $.push(t.createVNode(ne,{key:"avatar-popover-key",content:u,trigger:c,placement:g,overlayClassName:`${s.value}-popover`},{default:()=>[t.createVNode(z,{style:y,shape:i},{default:()=>[`+${h-d}`]})]})),p(t.createVNode("div",o._objectSpread2(o._objectSpread2({},n),{},{class:S,style:n.style}),[$]))}return p(t.createVNode("div",o._objectSpread2(o._objectSpread2({},n),{},{class:S,style:n.style}),[b]))}}});z.Group=w;z.install=function(e){return e.component(z.name,z),e.component(w.name,w),e};const le=t.defineComponent({__name:"CustomAvatarGroup",props:{avatarGroupValue:{},groupProps:{},avatarProps:{}},setup(e){const r=e;return(a,n)=>(t.openBlock(),t.createElementBlock("div",null,[t.createVNode(t.unref(w),t.normalizeProps(t.guardReactiveProps(r.groupProps)),{default:t.withCtx(()=>[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(r.avatarGroupValue,l=>(t.openBlock(),t.createBlock(t.unref(z),t.mergeProps({key:l.key,ref_for:!0},r.avatarProps,{src:l.src}),{default:t.withCtx(()=>[t.createTextVNode(t.toDisplayString(l.label),1)]),_:2},1040,["src"]))),128))]),_:1},16)]))}});exports.default=le;