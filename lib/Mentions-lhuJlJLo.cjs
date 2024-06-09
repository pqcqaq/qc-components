"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const o=require("vue"),n=require("./index-D_zVEGCL.cjs"),M=require("./KeyCode-BtL9tph1.cjs"),K=require("./index-BctAJdwR.cjs"),te=require("./omit-BB_NaH_J.cjs"),ue=require("./BaseInput-DKMcVIMP.cjs"),G=require("./statusUtils-CpyvQ1cG.cjs"),j=require("./index-D1kYFPHy.cjs");function ce(e,a,r){var t=r||{},i=t.noTrailing,p=i===void 0?!1:i,l=t.noLeading,u=l===void 0?!1:l,f=t.debounceMode,s=f===void 0?void 0:f,m,N=!1,b=0;function g(){m&&clearTimeout(m)}function C(S){var $=S||{},I=$.upcomingOnly,_=I===void 0?!1:I;g(),N=!_}function w(){for(var S=arguments.length,$=new Array(S),I=0;I<S;I++)$[I]=arguments[I];var _=this,y=Date.now()-b;if(N)return;function O(){b=Date.now(),a.apply(_,$)}function P(){m=void 0}!u&&s&&!m&&O(),g(),s===void 0&&y>e?u?(b=Date.now(),p||(m=setTimeout(s?P:O,e))):O():p!==!0&&(m=setTimeout(s?P:O,s===void 0?e-y:e))}return w.cancel=C,w}function de(e,a,r){var t={},i=t.atBegin,p=i===void 0?!1:i;return ce(e,a,{debounceMode:p!==!1})}const pe=new n.Keyframe("antSpinMove",{to:{opacity:1}}),fe=new n.Keyframe("antRotate",{to:{transform:"rotate(405deg)"}}),me=e=>({[`${e.componentCls}`]:n._extends(n._extends({},n.resetComponent(e)),{position:"absolute",display:"none",color:e.colorPrimary,textAlign:"center",verticalAlign:"middle",opacity:0,transition:`transform ${e.motionDurationSlow} ${e.motionEaseInOutCirc}`,"&-spinning":{position:"static",display:"inline-block",opacity:1},"&-nested-loading":{position:"relative",[`> div > ${e.componentCls}`]:{position:"absolute",top:0,insetInlineStart:0,zIndex:4,display:"block",width:"100%",height:"100%",maxHeight:e.contentHeight,[`${e.componentCls}-dot`]:{position:"absolute",top:"50%",insetInlineStart:"50%",margin:-e.spinDotSize/2},[`${e.componentCls}-text`]:{position:"absolute",top:"50%",width:"100%",paddingTop:(e.spinDotSize-e.fontSize)/2+2,textShadow:`0 1px 2px ${e.colorBgContainer}`},[`&${e.componentCls}-show-text ${e.componentCls}-dot`]:{marginTop:-(e.spinDotSize/2)-10},"&-sm":{[`${e.componentCls}-dot`]:{margin:-e.spinDotSizeSM/2},[`${e.componentCls}-text`]:{paddingTop:(e.spinDotSizeSM-e.fontSize)/2+2},[`&${e.componentCls}-show-text ${e.componentCls}-dot`]:{marginTop:-(e.spinDotSizeSM/2)-10}},"&-lg":{[`${e.componentCls}-dot`]:{margin:-(e.spinDotSizeLG/2)},[`${e.componentCls}-text`]:{paddingTop:(e.spinDotSizeLG-e.fontSize)/2+2},[`&${e.componentCls}-show-text ${e.componentCls}-dot`]:{marginTop:-(e.spinDotSizeLG/2)-10}}},[`${e.componentCls}-container`]:{position:"relative",transition:`opacity ${e.motionDurationSlow}`,"&::after":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,zIndex:10,width:"100%",height:"100%",background:e.colorBgContainer,opacity:0,transition:`all ${e.motionDurationSlow}`,content:'""',pointerEvents:"none"}},[`${e.componentCls}-blur`]:{clear:"both",opacity:.5,userSelect:"none",pointerEvents:"none","&::after":{opacity:.4,pointerEvents:"auto"}}},"&-tip":{color:e.spinDotDefault},[`${e.componentCls}-dot`]:{position:"relative",display:"inline-block",fontSize:e.spinDotSize,width:"1em",height:"1em","&-item":{position:"absolute",display:"block",width:(e.spinDotSize-e.marginXXS/2)/2,height:(e.spinDotSize-e.marginXXS/2)/2,backgroundColor:e.colorPrimary,borderRadius:"100%",transform:"scale(0.75)",transformOrigin:"50% 50%",opacity:.3,animationName:pe,animationDuration:"1s",animationIterationCount:"infinite",animationTimingFunction:"linear",animationDirection:"alternate","&:nth-child(1)":{top:0,insetInlineStart:0},"&:nth-child(2)":{top:0,insetInlineEnd:0,animationDelay:"0.4s"},"&:nth-child(3)":{insetInlineEnd:0,bottom:0,animationDelay:"0.8s"},"&:nth-child(4)":{bottom:0,insetInlineStart:0,animationDelay:"1.2s"}},"&-spin":{transform:"rotate(45deg)",animationName:fe,animationDuration:"1.2s",animationIterationCount:"infinite",animationTimingFunction:"linear"}},[`&-sm ${e.componentCls}-dot`]:{fontSize:e.spinDotSizeSM,i:{width:(e.spinDotSizeSM-e.marginXXS/2)/2,height:(e.spinDotSizeSM-e.marginXXS/2)/2}},[`&-lg ${e.componentCls}-dot`]:{fontSize:e.spinDotSizeLG,i:{width:(e.spinDotSizeLG-e.marginXXS)/2,height:(e.spinDotSizeLG-e.marginXXS)/2}},[`&${e.componentCls}-show-text ${e.componentCls}-text`]:{display:"block"}})}),ge=n.genComponentStyleHook("Spin",e=>{const a=n.merge(e,{spinDotDefault:e.colorTextDescription,spinDotSize:e.controlHeightLG/2,spinDotSizeSM:e.controlHeightLG*.35,spinDotSizeLG:e.controlHeight});return[me(a)]},{contentHeight:400});var ve=function(e,a){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)a.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(r[t[i]]=e[t[i]]);return r};const he=()=>({prefixCls:String,spinning:{type:Boolean,default:void 0},size:String,wrapperClassName:String,tip:n.PropTypes.any,delay:Number,indicator:n.PropTypes.any});let W=null;function xe(e,a){return!!e&&!!a&&!isNaN(Number(a))}function Se(e){const a=e.indicator;W=typeof a=="function"?a:()=>o.createVNode(a,null,null)}const R=o.defineComponent({compatConfig:{MODE:3},name:"ASpin",inheritAttrs:!1,props:n.initDefaultProps(he(),{size:"default",spinning:!0,wrapperClassName:""}),setup(e,a){let{attrs:r,slots:t}=a;const{prefixCls:i,size:p,direction:l}=n.useConfigInject("spin",e),[u,f]=ge(i),s=o.shallowRef(e.spinning&&!xe(e.spinning,e.delay));let m;return o.watch([()=>e.spinning,()=>e.delay],()=>{m==null||m.cancel(),m=de(e.delay,()=>{s.value=e.spinning}),m==null||m()},{immediate:!0,flush:"post"}),o.onBeforeUnmount(()=>{m==null||m.cancel()}),()=>{var N,b;const{class:g}=r,C=ve(r,["class"]),{tip:w=(N=t.tip)===null||N===void 0?void 0:N.call(t)}=e,S=(b=t.default)===null||b===void 0?void 0:b.call(t),$={[f.value]:!0,[i.value]:!0,[`${i.value}-sm`]:p.value==="small",[`${i.value}-lg`]:p.value==="large",[`${i.value}-spinning`]:s.value,[`${i.value}-show-text`]:!!w,[`${i.value}-rtl`]:l.value==="rtl",[g]:!!g};function I(y){const O=`${y}-dot`;let P=n.getPropsSlot(t,e,"indicator");return P===null?null:(Array.isArray(P)&&(P=P.length===1?P[0]:P),o.isVNode(P)?o.cloneVNode(P,{class:O}):W&&o.isVNode(W())?o.cloneVNode(W(),{class:O}):o.createVNode("span",{class:`${O} ${y}-dot-spin`},[o.createVNode("i",{class:`${y}-dot-item`},null),o.createVNode("i",{class:`${y}-dot-item`},null),o.createVNode("i",{class:`${y}-dot-item`},null),o.createVNode("i",{class:`${y}-dot-item`},null)]))}const _=o.createVNode("div",n._objectSpread2(n._objectSpread2({},C),{},{class:$,"aria-live":"polite","aria-busy":s.value}),[I(i.value),w?o.createVNode("div",{class:`${i.value}-text`},[w]):null]);if(S&&n.filterEmpty(S).length){const y={[`${i.value}-container`]:!0,[`${i.value}-blur`]:s.value};return u(o.createVNode("div",{class:[`${i.value}-nested-loading`,e.wrapperClassName,f.value]},[s.value&&o.createVNode("div",{key:"loading"},[_]),o.createVNode("div",{class:y,key:"container"},[S])]))}return u(_)}}});R.setDefaultIndicator=Se;R.install=function(e){return e.component(R.name,R),e};function ye(e){const{selectionStart:a}=e;return e.value.slice(0,a)}function be(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return(Array.isArray(a)?a:[a]).reduce((t,i)=>{const p=e.lastIndexOf(i);return p>t.location?{location:p,prefix:i}:t},{location:-1,prefix:""})}function Q(e){return(e||"").toLowerCase()}function Ce(e,a,r){const t=e[0];if(!t||t===r)return e;let i=e;const p=a.length;for(let l=0;l<p;l+=1)if(Q(i[l])!==Q(a[l])){i=i.slice(l);break}else l===p-1&&(i=i.slice(p));return i}function we(e,a){const{measureLocation:r,prefix:t,targetText:i,selectionStart:p,split:l}=a;let u=e.slice(0,r);u[u.length-l.length]===l&&(u=u.slice(0,u.length-l.length)),u&&(u=`${u}${l}`);let f=Ce(e.slice(p),i.slice(p-r-t.length),l);f.slice(0,l.length)===l&&(f=f.slice(l.length));const s=`${u}${t}${i}${l}`;return{text:`${s}${f}`,selectionLocation:s.length}}function $e(e,a){e.setSelectionRange(a,a),e.blur(),e.focus()}function Ie(e,a){const{split:r}=a;return!r||e.indexOf(r)===-1}function Pe(e,a){let{value:r=""}=a;const t=e.toLowerCase();return r.toLowerCase().indexOf(t)!==-1}const ne=Symbol("MentionsContextKey");function Ne(){}const Oe=o.defineComponent({compatConfig:{MODE:3},name:"DropdownMenu",props:{prefixCls:String,options:{type:Array,default:()=>[]}},setup(e,a){let{slots:r}=a;const{activeIndex:t,setActiveIndex:i,selectOption:p,onFocus:l=Ne,loading:u}=o.inject(ne,{activeIndex:o.shallowRef(),loading:o.shallowRef(!1)});let f;const s=m=>{clearTimeout(f),f=setTimeout(()=>{l(m)})};return o.onBeforeUnmount(()=>{clearTimeout(f)}),()=>{var m;const{prefixCls:N,options:b}=e,g=b[t.value]||{};return o.createVNode(K.Menu,{prefixCls:`${N}-menu`,activeKey:g.value,onSelect:C=>{let{key:w}=C;const S=b.find($=>{let{value:I}=$;return I===w});p(S)},onMousedown:s},{default:()=>[!u.value&&b.map((C,w)=>{var S,$;const{value:I,disabled:_,label:y=C.value,class:O,style:P}=C;return o.createVNode(K.MenuItem,{key:I,disabled:_,onMouseenter:()=>{i(w)},class:O,style:P},{default:()=>[($=(S=r.option)===null||S===void 0?void 0:S.call(r,C))!==null&&$!==void 0?$:typeof y=="function"?y(C):y]})}),!u.value&&b.length===0?o.createVNode(K.MenuItem,{key:"notFoundContent",disabled:!0},{default:()=>[(m=r.notFoundContent)===null||m===void 0?void 0:m.call(r)]}):null,u.value&&o.createVNode(K.MenuItem,{key:"loading",disabled:!0},{default:()=>[o.createVNode(R,{size:"small"},null)]})]})}}}),_e={bottomRight:{points:["tl","br"],offset:[0,4],overflow:{adjustX:0,adjustY:1}},bottomLeft:{points:["tr","bl"],offset:[0,4],overflow:{adjustX:0,adjustY:1}},topRight:{points:["bl","tr"],offset:[0,-4],overflow:{adjustX:0,adjustY:1}},topLeft:{points:["br","tl"],offset:[0,-4],overflow:{adjustX:0,adjustY:1}}},Te=o.defineComponent({compatConfig:{MODE:3},name:"KeywordTrigger",props:{loading:{type:Boolean,default:void 0},options:{type:Array,default:()=>[]},prefixCls:String,placement:String,visible:{type:Boolean,default:void 0},transitionName:String,getPopupContainer:Function,direction:String,dropdownClassName:String},setup(e,a){let{slots:r}=a;const t=()=>`${e.prefixCls}-dropdown`,i=()=>{const{options:l}=e;return o.createVNode(Oe,{prefixCls:t(),options:l},{notFoundContent:r.notFoundContent,option:r.option})},p=o.computed(()=>{const{placement:l,direction:u}=e;let f="topRight";return u==="rtl"?f=l==="top"?"topLeft":"bottomLeft":f=l==="top"?"topRight":"bottomRight",f});return()=>{const{visible:l,transitionName:u,getPopupContainer:f}=e;return o.createVNode(n.Trigger,{prefixCls:t(),popupVisible:l,popup:i(),popupClassName:e.dropdownClassName,popupPlacement:p.value,popupTransitionName:u,builtinPlacements:_e,getPopupContainer:f},{default:r.default})}}}),De=n.tuple("top","bottom"),oe={autofocus:{type:Boolean,default:void 0},prefix:n.PropTypes.oneOfType([n.PropTypes.string,n.PropTypes.arrayOf(n.PropTypes.string)]),prefixCls:String,value:String,disabled:{type:Boolean,default:void 0},split:String,transitionName:String,placement:n.PropTypes.oneOf(De),character:n.PropTypes.any,characterRender:Function,filterOption:{type:[Boolean,Function]},validateSearch:Function,getPopupContainer:{type:Function},options:n.arrayType(),loading:{type:Boolean,default:void 0},rows:[Number,String],direction:{type:String}},ie=n._extends(n._extends({},oe),{dropdownClassName:String}),ae={prefix:"@",split:" ",rows:1,validateSearch:Ie,filterOption:()=>Pe};n.initDefaultProps(ie,ae);var Z=function(e,a){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)a.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(r[t[i]]=e[t[i]]);return r};function k(){}const Me=o.defineComponent({compatConfig:{MODE:3},name:"Mentions",inheritAttrs:!1,props:n.initDefaultProps(ie,ae),emits:["change","select","search","focus","blur","pressenter"],setup(e,a){let{emit:r,attrs:t,expose:i,slots:p}=a;const l=o.ref(null),u=o.ref(null),f=o.ref(),s=o.reactive({value:e.value||"",measuring:!1,measureLocation:0,measureText:null,measurePrefix:"",activeIndex:0,isFocus:!1});o.watchEffect(()=>{s.value=e.value});const m=d=>{r("change",d)},N=d=>{let{target:{value:v}}=d;m(v)},b=(d,v,c)=>{n._extends(s,{measuring:!0,measureText:d,measurePrefix:v,measureLocation:c,activeIndex:0})},g=d=>{n._extends(s,{measuring:!1,measureLocation:0,measureText:null}),d==null||d()},C=d=>{const{which:v}=d;if(s.measuring){if(v===M.KeyCode.UP||v===M.KeyCode.DOWN){const c=V.value.length,x=v===M.KeyCode.UP?-1:1,h=(s.activeIndex+x+c)%c;s.activeIndex=h,d.preventDefault()}else if(v===M.KeyCode.ESC)g();else if(v===M.KeyCode.ENTER){if(d.preventDefault(),!V.value.length){g();return}const c=V.value[s.activeIndex];O(c)}}},w=d=>{const{key:v,which:c}=d,{measureText:x,measuring:h}=s,{prefix:T,validateSearch:A}=e,z=d.target;if(z.composing)return;const B=ye(z),{location:E,prefix:F}=be(B,T);if([M.KeyCode.ESC,M.KeyCode.UP,M.KeyCode.DOWN,M.KeyCode.ENTER].indexOf(c)===-1)if(E!==-1){const D=B.slice(E+F.length),L=A(D,e),H=!!X(D).length;L?(v===F||v==="Shift"||h||D!==x&&H)&&b(D,F,E):h&&g(),L&&r("search",D,F)}else h&&g()},S=d=>{s.measuring||r("pressenter",d)},$=d=>{_(d)},I=d=>{y(d)},_=d=>{clearTimeout(f.value);const{isFocus:v}=s;!v&&d&&r("focus",d),s.isFocus=!0},y=d=>{f.value=setTimeout(()=>{s.isFocus=!1,g(),r("blur",d)},100)},O=d=>{const{split:v}=e,{value:c=""}=d,{text:x,selectionLocation:h}=we(s.value,{measureLocation:s.measureLocation,targetText:c,prefix:s.measurePrefix,selectionStart:u.value.getSelectionStart(),split:v});m(x),g(()=>{$e(u.value.input,h)}),r("select",d,s.measurePrefix)},P=d=>{s.activeIndex=d},X=d=>{const v=d||s.measureText||"",{filterOption:c}=e;return e.options.filter(h=>c?c(v,h):!0)},V=o.computed(()=>X());return i({blur:()=>{u.value.blur()},focus:()=>{u.value.focus()}}),o.provide(ne,{activeIndex:o.toRef(s,"activeIndex"),setActiveIndex:P,selectOption:O,onFocus:_,onBlur:y,loading:o.toRef(e,"loading")}),o.onUpdated(()=>{o.nextTick(()=>{s.measuring&&(l.value.scrollTop=u.value.getScrollTop())})}),()=>{const{measureLocation:d,measurePrefix:v,measuring:c}=s,{prefixCls:x,placement:h,transitionName:T,getPopupContainer:A,direction:z}=e,B=Z(e,["prefixCls","placement","transitionName","getPopupContainer","direction"]),{class:E,style:F}=t,D=Z(t,["class","style"]),L=te.omit(B,["value","prefix","split","validateSearch","filterOption","options","loading"]),H=n._extends(n._extends(n._extends({},L),D),{onChange:k,onSelect:k,value:s.value,onInput:N,onBlur:I,onKeydown:C,onKeyup:w,onFocus:$,onPressenter:S});return o.createVNode("div",{class:n.classNames(x,E),style:F},[o.createVNode(ue.BaseInput,n._objectSpread2(n._objectSpread2({},H),{},{ref:u,tag:"textarea"}),null),c&&o.createVNode("div",{ref:l,class:`${x}-measure`},[s.value.slice(0,d),o.createVNode(Te,{prefixCls:x,transitionName:T,dropdownClassName:e.dropdownClassName,placement:h,options:c?V.value:[],visible:!0,direction:z,getPopupContainer:A},{default:()=>[o.createVNode("span",null,[v])],notFoundContent:p.notFoundContent,option:p.option}),s.value.slice(d+v.length)])])}}}),ze={value:String,disabled:Boolean,payload:n.objectType()},re=n._extends(n._extends({},ze),{label:n.anyType([])}),se={name:"Option",props:re,render(e,a){let{slots:r}=a;var t;return(t=r.default)===null||t===void 0?void 0:t.call(r)}};o.defineComponent(n._extends({compatConfig:{MODE:3}},se));const Ee=e=>{const{componentCls:a,colorTextDisabled:r,controlItemBgHover:t,controlPaddingHorizontal:i,colorText:p,motionDurationSlow:l,lineHeight:u,controlHeight:f,inputPaddingHorizontal:s,inputPaddingVertical:m,fontSize:N,colorBgElevated:b,borderRadiusLG:g,boxShadowSecondary:C}=e,w=Math.round((e.controlHeight-e.fontSize*e.lineHeight)/2);return{[a]:n._extends(n._extends(n._extends(n._extends(n._extends({},n.resetComponent(e)),j.genBasicInputStyle(e)),{position:"relative",display:"inline-block",height:"auto",padding:0,overflow:"hidden",lineHeight:u,whiteSpace:"pre-wrap",verticalAlign:"bottom"}),j.genStatusStyle(e,a)),{"&-disabled":{"> textarea":n._extends({},j.genDisabledStyle(e))},"&-focused":n._extends({},j.genActiveStyle(e)),[`&-affix-wrapper ${a}-suffix`]:{position:"absolute",top:0,insetInlineEnd:s,bottom:0,zIndex:1,display:"inline-flex",alignItems:"center",margin:"auto"},[`> textarea, ${a}-measure`]:{color:p,boxSizing:"border-box",minHeight:f-2,margin:0,padding:`${m}px ${s}px`,overflow:"inherit",overflowX:"hidden",overflowY:"auto",fontWeight:"inherit",fontSize:"inherit",fontFamily:"inherit",fontStyle:"inherit",fontVariant:"inherit",fontSizeAdjust:"inherit",fontStretch:"inherit",lineHeight:"inherit",direction:"inherit",letterSpacing:"inherit",whiteSpace:"inherit",textAlign:"inherit",verticalAlign:"top",wordWrap:"break-word",wordBreak:"inherit",tabSize:"inherit"},"> textarea":n._extends({width:"100%",border:"none",outline:"none",resize:"none",backgroundColor:"inherit"},j.genPlaceholderStyle(e.colorTextPlaceholder)),[`${a}-measure`]:{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,zIndex:-1,color:"transparent",pointerEvents:"none","> span":{display:"inline-block",minHeight:"1em"}},"&-dropdown":n._extends(n._extends({},n.resetComponent(e)),{position:"absolute",top:-9999,insetInlineStart:-9999,zIndex:e.zIndexPopup,boxSizing:"border-box",fontSize:N,fontVariant:"initial",backgroundColor:b,borderRadius:g,outline:"none",boxShadow:C,"&-hidden":{display:"none"},[`${a}-dropdown-menu`]:{maxHeight:e.dropdownHeight,marginBottom:0,paddingInlineStart:0,overflow:"auto",listStyle:"none",outline:"none","&-item":n._extends(n._extends({},n.textEllipsis),{position:"relative",display:"block",minWidth:e.controlItemWidth,padding:`${w}px ${i}px`,color:p,fontWeight:"normal",lineHeight:u,cursor:"pointer",transition:`background ${l} ease`,"&:hover":{backgroundColor:t},"&:first-child":{borderStartStartRadius:g,borderStartEndRadius:g,borderEndStartRadius:0,borderEndEndRadius:0},"&:last-child":{borderStartStartRadius:0,borderStartEndRadius:0,borderEndStartRadius:g,borderEndEndRadius:g},"&-disabled":{color:r,cursor:"not-allowed","&:hover":{color:r,backgroundColor:t,cursor:"not-allowed"}},"&-selected":{color:p,fontWeight:e.fontWeightStrong,backgroundColor:t},"&-active":{backgroundColor:t}})}})})}},Fe=n.genComponentStyleHook("Mentions",e=>{const a=j.initInputToken(e);return[Ee(a)]},e=>({dropdownHeight:250,controlItemWidth:100,zIndexPopup:e.zIndexPopupBase+50}));var ee=function(e,a){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)a.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(r[t[i]]=e[t[i]]);return r};function Ve(){return!0}const Be=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{prefix:r="@",split:t=" "}=a,i=Array.isArray(r)?r:[r];return e.split(t).map(function(){let p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",l=null;return i.some(u=>p.slice(0,u.length)===u?(l=u,!0):!1),l!==null?{prefix:l,value:p.slice(l.length)}:null}).filter(p=>!!p&&!!p.value)},Le=()=>n._extends(n._extends({},oe),{loading:{type:Boolean,default:void 0},onFocus:{type:Function},onBlur:{type:Function},onSelect:{type:Function},onChange:{type:Function},onPressenter:{type:Function},"onUpdate:value":{type:Function},notFoundContent:n.PropTypes.any,defaultValue:String,id:String,status:String}),U=o.defineComponent({compatConfig:{MODE:3},name:"AMentions",inheritAttrs:!1,props:Le(),slots:Object,setup(e,a){let{slots:r,emit:t,attrs:i,expose:p}=a;var l,u,f;process.env.NODE_ENV!=="production"&&n.devWarning(!n.flattenChildren(((l=r.default)===null||l===void 0?void 0:l.call(r))||[]).length,"Mentions","`Mentions.Option` is deprecated. Please use `options` instead.");const{prefixCls:s,renderEmpty:m,direction:N}=n.useConfigInject("mentions",e),[b,g]=Fe(s),C=o.shallowRef(!1),w=o.shallowRef(null),S=o.shallowRef((f=(u=e.value)!==null&&u!==void 0?u:e.defaultValue)!==null&&f!==void 0?f:""),$=n.useInjectFormItemContext(),I=n.FormItemInputContext.useInject(),_=o.computed(()=>G.getMergedStatus(I.status,e.status));K.useProvideOverride({prefixCls:o.computed(()=>`${s.value}-menu`),mode:o.computed(()=>"vertical"),selectable:o.computed(()=>!1),onClick:()=>{},validator:c=>{let{mode:x}=c;n.warning(!x||x==="vertical","Mentions",`mode="${x}" is not supported for Mentions's Menu.`)}}),o.watch(()=>e.value,c=>{S.value=c});const y=c=>{C.value=!0,t("focus",c)},O=c=>{C.value=!1,t("blur",c),$.onFieldBlur()},P=function(){for(var c=arguments.length,x=new Array(c),h=0;h<c;h++)x[h]=arguments[h];t("select",...x),C.value=!0},X=c=>{e.value===void 0&&(S.value=c),t("update:value",c),t("change",c),$.onFieldChange()},V=()=>{const c=e.notFoundContent;return c!==void 0?c:r.notFoundContent?r.notFoundContent():m("Select")},Y=()=>{var c;return n.flattenChildren(((c=r.default)===null||c===void 0?void 0:c.call(r))||[]).map(x=>{var h,T;return n._extends(n._extends({},n.getOptionProps(x)),{label:(T=(h=x.children)===null||h===void 0?void 0:h.default)===null||T===void 0?void 0:T.call(h)})})};p({focus:()=>{w.value.focus()},blur:()=>{w.value.blur()}});const v=o.computed(()=>e.loading?Ve:e.filterOption);return()=>{const{disabled:c,getPopupContainer:x,rows:h=1,id:T=$.id.value}=e,A=ee(e,["disabled","getPopupContainer","rows","id"]),{hasFeedback:z,feedbackIcon:B}=I,{class:E}=i,F=ee(i,["class"]),D=te.omit(A,["defaultValue","onUpdate:value","prefixCls"]),L=n.classNames({[`${s.value}-disabled`]:c,[`${s.value}-focused`]:C.value,[`${s.value}-rtl`]:N.value==="rtl"},G.getStatusClassNames(s.value,_.value),!z&&E,g.value),H=n._extends(n._extends(n._extends(n._extends({prefixCls:s.value},D),{disabled:c,direction:N.value,filterOption:v.value,getPopupContainer:x,options:e.loading?[{value:"ANTDV_SEARCHING",disabled:!0,label:o.createVNode(R,{size:"small"},null)}]:e.options||Y(),class:L}),F),{rows:h,onChange:X,onSelect:P,onFocus:y,onBlur:O,ref:w,value:S.value,id:T}),J=o.createVNode(Me,n._objectSpread2(n._objectSpread2({},H),{},{dropdownClassName:g.value}),{notFoundContent:V,option:r.option});return b(z?o.createVNode("div",{class:n.classNames(`${s.value}-affix-wrapper`,G.getStatusClassNames(`${s.value}-affix-wrapper`,_.value,z),E,g.value)},[J,o.createVNode("span",{class:`${s.value}-suffix`},[B])]):J)}}}),q=o.defineComponent(n._extends(n._extends({compatConfig:{MODE:3}},se),{name:"AMentionsOption",props:re})),je=n._extends(U,{Option:q,getMentions:Be,install:e=>(e.component(U.name,U),e.component(q.name,q),e)}),Re=o.defineComponent({__name:"Mentions",setup(e){return(a,r)=>(o.openBlock(),o.createBlock(o.unref(je),o.normalizeProps(o.guardReactiveProps(a.$attrs)),{default:o.withCtx(()=>[(o.openBlock(!0),o.createElementBlock(o.Fragment,null,o.renderList(a.$slots,(t,i)=>o.renderSlot(a.$slots,i,{key:i})),128))]),_:3},16))}});exports.default=Re;
