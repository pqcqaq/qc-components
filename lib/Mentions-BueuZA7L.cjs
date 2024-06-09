"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const o=require("vue"),t=require("./index-nNpR0eDD.cjs"),H=require("./index-DjEStbfj.cjs"),se=require("./BaseInput-CoTGQFIs.cjs"),W=require("./statusUtils-BQoMqS9o.cjs"),L=require("./index-DRmTsBCk.cjs");function le(e,a,r){var n=r||{},i=n.noTrailing,p=i===void 0?!1:i,l=n.noLeading,u=l===void 0?!1:l,f=n.debounceMode,s=f===void 0?void 0:f,m,N=!1,b=0;function g(){m&&clearTimeout(m)}function C(S){var $=S||{},I=$.upcomingOnly,_=I===void 0?!1:I;g(),N=!_}function w(){for(var S=arguments.length,$=new Array(S),I=0;I<S;I++)$[I]=arguments[I];var _=this,y=Date.now()-b;if(N)return;function O(){b=Date.now(),a.apply(_,$)}function P(){m=void 0}!u&&s&&!m&&O(),g(),s===void 0&&y>e?u?(b=Date.now(),p||(m=setTimeout(s?P:O,e))):O():p!==!0&&(m=setTimeout(s?P:O,s===void 0?e-y:e))}return w.cancel=C,w}function ue(e,a,r){var n={},i=n.atBegin,p=i===void 0?!1:i;return le(e,a,{debounceMode:p!==!1})}const ce=new t.Keyframe("antSpinMove",{to:{opacity:1}}),de=new t.Keyframe("antRotate",{to:{transform:"rotate(405deg)"}}),pe=e=>({[`${e.componentCls}`]:t._extends(t._extends({},t.resetComponent(e)),{position:"absolute",display:"none",color:e.colorPrimary,textAlign:"center",verticalAlign:"middle",opacity:0,transition:`transform ${e.motionDurationSlow} ${e.motionEaseInOutCirc}`,"&-spinning":{position:"static",display:"inline-block",opacity:1},"&-nested-loading":{position:"relative",[`> div > ${e.componentCls}`]:{position:"absolute",top:0,insetInlineStart:0,zIndex:4,display:"block",width:"100%",height:"100%",maxHeight:e.contentHeight,[`${e.componentCls}-dot`]:{position:"absolute",top:"50%",insetInlineStart:"50%",margin:-e.spinDotSize/2},[`${e.componentCls}-text`]:{position:"absolute",top:"50%",width:"100%",paddingTop:(e.spinDotSize-e.fontSize)/2+2,textShadow:`0 1px 2px ${e.colorBgContainer}`},[`&${e.componentCls}-show-text ${e.componentCls}-dot`]:{marginTop:-(e.spinDotSize/2)-10},"&-sm":{[`${e.componentCls}-dot`]:{margin:-e.spinDotSizeSM/2},[`${e.componentCls}-text`]:{paddingTop:(e.spinDotSizeSM-e.fontSize)/2+2},[`&${e.componentCls}-show-text ${e.componentCls}-dot`]:{marginTop:-(e.spinDotSizeSM/2)-10}},"&-lg":{[`${e.componentCls}-dot`]:{margin:-(e.spinDotSizeLG/2)},[`${e.componentCls}-text`]:{paddingTop:(e.spinDotSizeLG-e.fontSize)/2+2},[`&${e.componentCls}-show-text ${e.componentCls}-dot`]:{marginTop:-(e.spinDotSizeLG/2)-10}}},[`${e.componentCls}-container`]:{position:"relative",transition:`opacity ${e.motionDurationSlow}`,"&::after":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,zIndex:10,width:"100%",height:"100%",background:e.colorBgContainer,opacity:0,transition:`all ${e.motionDurationSlow}`,content:'""',pointerEvents:"none"}},[`${e.componentCls}-blur`]:{clear:"both",opacity:.5,userSelect:"none",pointerEvents:"none","&::after":{opacity:.4,pointerEvents:"auto"}}},"&-tip":{color:e.spinDotDefault},[`${e.componentCls}-dot`]:{position:"relative",display:"inline-block",fontSize:e.spinDotSize,width:"1em",height:"1em","&-item":{position:"absolute",display:"block",width:(e.spinDotSize-e.marginXXS/2)/2,height:(e.spinDotSize-e.marginXXS/2)/2,backgroundColor:e.colorPrimary,borderRadius:"100%",transform:"scale(0.75)",transformOrigin:"50% 50%",opacity:.3,animationName:ce,animationDuration:"1s",animationIterationCount:"infinite",animationTimingFunction:"linear",animationDirection:"alternate","&:nth-child(1)":{top:0,insetInlineStart:0},"&:nth-child(2)":{top:0,insetInlineEnd:0,animationDelay:"0.4s"},"&:nth-child(3)":{insetInlineEnd:0,bottom:0,animationDelay:"0.8s"},"&:nth-child(4)":{bottom:0,insetInlineStart:0,animationDelay:"1.2s"}},"&-spin":{transform:"rotate(45deg)",animationName:de,animationDuration:"1.2s",animationIterationCount:"infinite",animationTimingFunction:"linear"}},[`&-sm ${e.componentCls}-dot`]:{fontSize:e.spinDotSizeSM,i:{width:(e.spinDotSizeSM-e.marginXXS/2)/2,height:(e.spinDotSizeSM-e.marginXXS/2)/2}},[`&-lg ${e.componentCls}-dot`]:{fontSize:e.spinDotSizeLG,i:{width:(e.spinDotSizeLG-e.marginXXS)/2,height:(e.spinDotSizeLG-e.marginXXS)/2}},[`&${e.componentCls}-show-text ${e.componentCls}-text`]:{display:"block"}})}),fe=t.genComponentStyleHook("Spin",e=>{const a=t.merge(e,{spinDotDefault:e.colorTextDescription,spinDotSize:e.controlHeightLG/2,spinDotSizeSM:e.controlHeightLG*.35,spinDotSizeLG:e.controlHeight});return[pe(a)]},{contentHeight:400});var me=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)a.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const ge=()=>({prefixCls:String,spinning:{type:Boolean,default:void 0},size:String,wrapperClassName:String,tip:t.PropTypes.any,delay:Number,indicator:t.PropTypes.any});let X=null;function ve(e,a){return!!e&&!!a&&!isNaN(Number(a))}function he(e){const a=e.indicator;X=typeof a=="function"?a:()=>o.createVNode(a,null,null)}const j=o.defineComponent({compatConfig:{MODE:3},name:"ASpin",inheritAttrs:!1,props:t.initDefaultProps(ge(),{size:"default",spinning:!0,wrapperClassName:""}),setup(e,a){let{attrs:r,slots:n}=a;const{prefixCls:i,size:p,direction:l}=t.useConfigInject("spin",e),[u,f]=fe(i),s=o.shallowRef(e.spinning&&!ve(e.spinning,e.delay));let m;return o.watch([()=>e.spinning,()=>e.delay],()=>{m==null||m.cancel(),m=ue(e.delay,()=>{s.value=e.spinning}),m==null||m()},{immediate:!0,flush:"post"}),o.onBeforeUnmount(()=>{m==null||m.cancel()}),()=>{var N,b;const{class:g}=r,C=me(r,["class"]),{tip:w=(N=n.tip)===null||N===void 0?void 0:N.call(n)}=e,S=(b=n.default)===null||b===void 0?void 0:b.call(n),$={[f.value]:!0,[i.value]:!0,[`${i.value}-sm`]:p.value==="small",[`${i.value}-lg`]:p.value==="large",[`${i.value}-spinning`]:s.value,[`${i.value}-show-text`]:!!w,[`${i.value}-rtl`]:l.value==="rtl",[g]:!!g};function I(y){const O=`${y}-dot`;let P=t.getPropsSlot(n,e,"indicator");return P===null?null:(Array.isArray(P)&&(P=P.length===1?P[0]:P),o.isVNode(P)?o.cloneVNode(P,{class:O}):X&&o.isVNode(X())?o.cloneVNode(X(),{class:O}):o.createVNode("span",{class:`${O} ${y}-dot-spin`},[o.createVNode("i",{class:`${y}-dot-item`},null),o.createVNode("i",{class:`${y}-dot-item`},null),o.createVNode("i",{class:`${y}-dot-item`},null),o.createVNode("i",{class:`${y}-dot-item`},null)]))}const _=o.createVNode("div",t._objectSpread2(t._objectSpread2({},C),{},{class:$,"aria-live":"polite","aria-busy":s.value}),[I(i.value),w?o.createVNode("div",{class:`${i.value}-text`},[w]):null]);if(S&&t.filterEmpty(S).length){const y={[`${i.value}-container`]:!0,[`${i.value}-blur`]:s.value};return u(o.createVNode("div",{class:[`${i.value}-nested-loading`,e.wrapperClassName,f.value]},[s.value&&o.createVNode("div",{key:"loading"},[_]),o.createVNode("div",{class:y,key:"container"},[S])]))}return u(_)}}});j.setDefaultIndicator=he;j.install=function(e){return e.component(j.name,j),e};function xe(e){const{selectionStart:a}=e;return e.value.slice(0,a)}function Se(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return(Array.isArray(a)?a:[a]).reduce((n,i)=>{const p=e.lastIndexOf(i);return p>n.location?{location:p,prefix:i}:n},{location:-1,prefix:""})}function J(e){return(e||"").toLowerCase()}function ye(e,a,r){const n=e[0];if(!n||n===r)return e;let i=e;const p=a.length;for(let l=0;l<p;l+=1)if(J(i[l])!==J(a[l])){i=i.slice(l);break}else l===p-1&&(i=i.slice(p));return i}function be(e,a){const{measureLocation:r,prefix:n,targetText:i,selectionStart:p,split:l}=a;let u=e.slice(0,r);u[u.length-l.length]===l&&(u=u.slice(0,u.length-l.length)),u&&(u=`${u}${l}`);let f=ye(e.slice(p),i.slice(p-r-n.length),l);f.slice(0,l.length)===l&&(f=f.slice(l.length));const s=`${u}${n}${i}${l}`;return{text:`${s}${f}`,selectionLocation:s.length}}function Ce(e,a){e.setSelectionRange(a,a),e.blur(),e.focus()}function we(e,a){const{split:r}=a;return!r||e.indexOf(r)===-1}function $e(e,a){let{value:r=""}=a;const n=e.toLowerCase();return r.toLowerCase().indexOf(n)!==-1}const ee=Symbol("MentionsContextKey");function Ie(){}const Pe=o.defineComponent({compatConfig:{MODE:3},name:"DropdownMenu",props:{prefixCls:String,options:{type:Array,default:()=>[]}},setup(e,a){let{slots:r}=a;const{activeIndex:n,setActiveIndex:i,selectOption:p,onFocus:l=Ie,loading:u}=o.inject(ee,{activeIndex:o.shallowRef(),loading:o.shallowRef(!1)});let f;const s=m=>{clearTimeout(f),f=setTimeout(()=>{l(m)})};return o.onBeforeUnmount(()=>{clearTimeout(f)}),()=>{var m;const{prefixCls:N,options:b}=e,g=b[n.value]||{};return o.createVNode(H.Menu,{prefixCls:`${N}-menu`,activeKey:g.value,onSelect:C=>{let{key:w}=C;const S=b.find($=>{let{value:I}=$;return I===w});p(S)},onMousedown:s},{default:()=>[!u.value&&b.map((C,w)=>{var S,$;const{value:I,disabled:_,label:y=C.value,class:O,style:P}=C;return o.createVNode(H.MenuItem,{key:I,disabled:_,onMouseenter:()=>{i(w)},class:O,style:P},{default:()=>[($=(S=r.option)===null||S===void 0?void 0:S.call(r,C))!==null&&$!==void 0?$:typeof y=="function"?y(C):y]})}),!u.value&&b.length===0?o.createVNode(H.MenuItem,{key:"notFoundContent",disabled:!0},{default:()=>[(m=r.notFoundContent)===null||m===void 0?void 0:m.call(r)]}):null,u.value&&o.createVNode(H.MenuItem,{key:"loading",disabled:!0},{default:()=>[o.createVNode(j,{size:"small"},null)]})]})}}}),Ne={bottomRight:{points:["tl","br"],offset:[0,4],overflow:{adjustX:0,adjustY:1}},bottomLeft:{points:["tr","bl"],offset:[0,4],overflow:{adjustX:0,adjustY:1}},topRight:{points:["bl","tr"],offset:[0,-4],overflow:{adjustX:0,adjustY:1}},topLeft:{points:["br","tl"],offset:[0,-4],overflow:{adjustX:0,adjustY:1}}},Oe=o.defineComponent({compatConfig:{MODE:3},name:"KeywordTrigger",props:{loading:{type:Boolean,default:void 0},options:{type:Array,default:()=>[]},prefixCls:String,placement:String,visible:{type:Boolean,default:void 0},transitionName:String,getPopupContainer:Function,direction:String,dropdownClassName:String},setup(e,a){let{slots:r}=a;const n=()=>`${e.prefixCls}-dropdown`,i=()=>{const{options:l}=e;return o.createVNode(Pe,{prefixCls:n(),options:l},{notFoundContent:r.notFoundContent,option:r.option})},p=o.computed(()=>{const{placement:l,direction:u}=e;let f="topRight";return u==="rtl"?f=l==="top"?"topLeft":"bottomLeft":f=l==="top"?"topRight":"bottomRight",f});return()=>{const{visible:l,transitionName:u,getPopupContainer:f}=e;return o.createVNode(t.Trigger,{prefixCls:n(),popupVisible:l,popup:i(),popupClassName:e.dropdownClassName,popupPlacement:p.value,popupTransitionName:u,builtinPlacements:Ne,getPopupContainer:f},{default:r.default})}}}),_e=t.tuple("top","bottom"),te={autofocus:{type:Boolean,default:void 0},prefix:t.PropTypes.oneOfType([t.PropTypes.string,t.PropTypes.arrayOf(t.PropTypes.string)]),prefixCls:String,value:String,disabled:{type:Boolean,default:void 0},split:String,transitionName:String,placement:t.PropTypes.oneOf(_e),character:t.PropTypes.any,characterRender:Function,filterOption:{type:[Boolean,Function]},validateSearch:Function,getPopupContainer:{type:Function},options:t.arrayType(),loading:{type:Boolean,default:void 0},rows:[Number,String],direction:{type:String}},ne=t._extends(t._extends({},te),{dropdownClassName:String}),oe={prefix:"@",split:" ",rows:1,validateSearch:we,filterOption:()=>$e};t.initDefaultProps(ne,oe);var Q=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)a.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};function Z(){}const Te=o.defineComponent({compatConfig:{MODE:3},name:"Mentions",inheritAttrs:!1,props:t.initDefaultProps(ne,oe),emits:["change","select","search","focus","blur","pressenter"],setup(e,a){let{emit:r,attrs:n,expose:i,slots:p}=a;const l=o.ref(null),u=o.ref(null),f=o.ref(),s=o.reactive({value:e.value||"",measuring:!1,measureLocation:0,measureText:null,measurePrefix:"",activeIndex:0,isFocus:!1});o.watchEffect(()=>{s.value=e.value});const m=d=>{r("change",d)},N=d=>{let{target:{value:v}}=d;m(v)},b=(d,v,c)=>{t._extends(s,{measuring:!0,measureText:d,measurePrefix:v,measureLocation:c,activeIndex:0})},g=d=>{t._extends(s,{measuring:!1,measureLocation:0,measureText:null}),d==null||d()},C=d=>{const{which:v}=d;if(s.measuring){if(v===t.KeyCode.UP||v===t.KeyCode.DOWN){const c=F.value.length,x=v===t.KeyCode.UP?-1:1,h=(s.activeIndex+x+c)%c;s.activeIndex=h,d.preventDefault()}else if(v===t.KeyCode.ESC)g();else if(v===t.KeyCode.ENTER){if(d.preventDefault(),!F.value.length){g();return}const c=F.value[s.activeIndex];O(c)}}},w=d=>{const{key:v,which:c}=d,{measureText:x,measuring:h}=s,{prefix:T,validateSearch:R}=e,M=d.target;if(M.composing)return;const V=xe(M),{location:z,prefix:E}=Se(V,T);if([t.KeyCode.ESC,t.KeyCode.UP,t.KeyCode.DOWN,t.KeyCode.ENTER].indexOf(c)===-1)if(z!==-1){const D=V.slice(z+E.length),B=R(D,e),A=!!K(D).length;B?(v===E||v==="Shift"||h||D!==x&&A)&&b(D,E,z):h&&g(),B&&r("search",D,E)}else h&&g()},S=d=>{s.measuring||r("pressenter",d)},$=d=>{_(d)},I=d=>{y(d)},_=d=>{clearTimeout(f.value);const{isFocus:v}=s;!v&&d&&r("focus",d),s.isFocus=!0},y=d=>{f.value=setTimeout(()=>{s.isFocus=!1,g(),r("blur",d)},100)},O=d=>{const{split:v}=e,{value:c=""}=d,{text:x,selectionLocation:h}=be(s.value,{measureLocation:s.measureLocation,targetText:c,prefix:s.measurePrefix,selectionStart:u.value.getSelectionStart(),split:v});m(x),g(()=>{Ce(u.value.input,h)}),r("select",d,s.measurePrefix)},P=d=>{s.activeIndex=d},K=d=>{const v=d||s.measureText||"",{filterOption:c}=e;return e.options.filter(h=>c?c(v,h):!0)},F=o.computed(()=>K());return i({blur:()=>{u.value.blur()},focus:()=>{u.value.focus()}}),o.provide(ee,{activeIndex:o.toRef(s,"activeIndex"),setActiveIndex:P,selectOption:O,onFocus:_,onBlur:y,loading:o.toRef(e,"loading")}),o.onUpdated(()=>{o.nextTick(()=>{s.measuring&&(l.value.scrollTop=u.value.getScrollTop())})}),()=>{const{measureLocation:d,measurePrefix:v,measuring:c}=s,{prefixCls:x,placement:h,transitionName:T,getPopupContainer:R,direction:M}=e,V=Q(e,["prefixCls","placement","transitionName","getPopupContainer","direction"]),{class:z,style:E}=n,D=Q(n,["class","style"]),B=t.omit(V,["value","prefix","split","validateSearch","filterOption","options","loading"]),A=t._extends(t._extends(t._extends({},B),D),{onChange:Z,onSelect:Z,value:s.value,onInput:N,onBlur:I,onKeydown:C,onKeyup:w,onFocus:$,onPressenter:S});return o.createVNode("div",{class:t.classNames(x,z),style:E},[o.createVNode(se.BaseInput,t._objectSpread2(t._objectSpread2({},A),{},{ref:u,tag:"textarea"}),null),c&&o.createVNode("div",{ref:l,class:`${x}-measure`},[s.value.slice(0,d),o.createVNode(Oe,{prefixCls:x,transitionName:T,dropdownClassName:e.dropdownClassName,placement:h,options:c?F.value:[],visible:!0,direction:M,getPopupContainer:R},{default:()=>[o.createVNode("span",null,[v])],notFoundContent:p.notFoundContent,option:p.option}),s.value.slice(d+v.length)])])}}}),De={value:String,disabled:Boolean,payload:t.objectType()},ie=t._extends(t._extends({},De),{label:t.anyType([])}),ae={name:"Option",props:ie,render(e,a){let{slots:r}=a;var n;return(n=r.default)===null||n===void 0?void 0:n.call(r)}};o.defineComponent(t._extends({compatConfig:{MODE:3}},ae));const Me=e=>{const{componentCls:a,colorTextDisabled:r,controlItemBgHover:n,controlPaddingHorizontal:i,colorText:p,motionDurationSlow:l,lineHeight:u,controlHeight:f,inputPaddingHorizontal:s,inputPaddingVertical:m,fontSize:N,colorBgElevated:b,borderRadiusLG:g,boxShadowSecondary:C}=e,w=Math.round((e.controlHeight-e.fontSize*e.lineHeight)/2);return{[a]:t._extends(t._extends(t._extends(t._extends(t._extends({},t.resetComponent(e)),L.genBasicInputStyle(e)),{position:"relative",display:"inline-block",height:"auto",padding:0,overflow:"hidden",lineHeight:u,whiteSpace:"pre-wrap",verticalAlign:"bottom"}),L.genStatusStyle(e,a)),{"&-disabled":{"> textarea":t._extends({},L.genDisabledStyle(e))},"&-focused":t._extends({},L.genActiveStyle(e)),[`&-affix-wrapper ${a}-suffix`]:{position:"absolute",top:0,insetInlineEnd:s,bottom:0,zIndex:1,display:"inline-flex",alignItems:"center",margin:"auto"},[`> textarea, ${a}-measure`]:{color:p,boxSizing:"border-box",minHeight:f-2,margin:0,padding:`${m}px ${s}px`,overflow:"inherit",overflowX:"hidden",overflowY:"auto",fontWeight:"inherit",fontSize:"inherit",fontFamily:"inherit",fontStyle:"inherit",fontVariant:"inherit",fontSizeAdjust:"inherit",fontStretch:"inherit",lineHeight:"inherit",direction:"inherit",letterSpacing:"inherit",whiteSpace:"inherit",textAlign:"inherit",verticalAlign:"top",wordWrap:"break-word",wordBreak:"inherit",tabSize:"inherit"},"> textarea":t._extends({width:"100%",border:"none",outline:"none",resize:"none",backgroundColor:"inherit"},L.genPlaceholderStyle(e.colorTextPlaceholder)),[`${a}-measure`]:{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,zIndex:-1,color:"transparent",pointerEvents:"none","> span":{display:"inline-block",minHeight:"1em"}},"&-dropdown":t._extends(t._extends({},t.resetComponent(e)),{position:"absolute",top:-9999,insetInlineStart:-9999,zIndex:e.zIndexPopup,boxSizing:"border-box",fontSize:N,fontVariant:"initial",backgroundColor:b,borderRadius:g,outline:"none",boxShadow:C,"&-hidden":{display:"none"},[`${a}-dropdown-menu`]:{maxHeight:e.dropdownHeight,marginBottom:0,paddingInlineStart:0,overflow:"auto",listStyle:"none",outline:"none","&-item":t._extends(t._extends({},t.textEllipsis),{position:"relative",display:"block",minWidth:e.controlItemWidth,padding:`${w}px ${i}px`,color:p,fontWeight:"normal",lineHeight:u,cursor:"pointer",transition:`background ${l} ease`,"&:hover":{backgroundColor:n},"&:first-child":{borderStartStartRadius:g,borderStartEndRadius:g,borderEndStartRadius:0,borderEndEndRadius:0},"&:last-child":{borderStartStartRadius:0,borderStartEndRadius:0,borderEndStartRadius:g,borderEndEndRadius:g},"&-disabled":{color:r,cursor:"not-allowed","&:hover":{color:r,backgroundColor:n,cursor:"not-allowed"}},"&-selected":{color:p,fontWeight:e.fontWeightStrong,backgroundColor:n},"&-active":{backgroundColor:n}})}})})}},ze=t.genComponentStyleHook("Mentions",e=>{const a=L.initInputToken(e);return[Me(a)]},e=>({dropdownHeight:250,controlItemWidth:100,zIndexPopup:e.zIndexPopupBase+50}));var k=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)a.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};function Ee(){return!0}const Fe=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{prefix:r="@",split:n=" "}=a,i=Array.isArray(r)?r:[r];return e.split(n).map(function(){let p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",l=null;return i.some(u=>p.slice(0,u.length)===u?(l=u,!0):!1),l!==null?{prefix:l,value:p.slice(l.length)}:null}).filter(p=>!!p&&!!p.value)},Ve=()=>t._extends(t._extends({},te),{loading:{type:Boolean,default:void 0},onFocus:{type:Function},onBlur:{type:Function},onSelect:{type:Function},onChange:{type:Function},onPressenter:{type:Function},"onUpdate:value":{type:Function},notFoundContent:t.PropTypes.any,defaultValue:String,id:String,status:String}),G=o.defineComponent({compatConfig:{MODE:3},name:"AMentions",inheritAttrs:!1,props:Ve(),slots:Object,setup(e,a){let{slots:r,emit:n,attrs:i,expose:p}=a;var l,u,f;process.env.NODE_ENV!=="production"&&t.devWarning(!t.flattenChildren(((l=r.default)===null||l===void 0?void 0:l.call(r))||[]).length,"Mentions","`Mentions.Option` is deprecated. Please use `options` instead.");const{prefixCls:s,renderEmpty:m,direction:N}=t.useConfigInject("mentions",e),[b,g]=ze(s),C=o.shallowRef(!1),w=o.shallowRef(null),S=o.shallowRef((f=(u=e.value)!==null&&u!==void 0?u:e.defaultValue)!==null&&f!==void 0?f:""),$=t.useInjectFormItemContext(),I=t.FormItemInputContext.useInject(),_=o.computed(()=>W.getMergedStatus(I.status,e.status));H.useProvideOverride({prefixCls:o.computed(()=>`${s.value}-menu`),mode:o.computed(()=>"vertical"),selectable:o.computed(()=>!1),onClick:()=>{},validator:c=>{let{mode:x}=c;t.warning(!x||x==="vertical","Mentions",`mode="${x}" is not supported for Mentions's Menu.`)}}),o.watch(()=>e.value,c=>{S.value=c});const y=c=>{C.value=!0,n("focus",c)},O=c=>{C.value=!1,n("blur",c),$.onFieldBlur()},P=function(){for(var c=arguments.length,x=new Array(c),h=0;h<c;h++)x[h]=arguments[h];n("select",...x),C.value=!0},K=c=>{e.value===void 0&&(S.value=c),n("update:value",c),n("change",c),$.onFieldChange()},F=()=>{const c=e.notFoundContent;return c!==void 0?c:r.notFoundContent?r.notFoundContent():m("Select")},q=()=>{var c;return t.flattenChildren(((c=r.default)===null||c===void 0?void 0:c.call(r))||[]).map(x=>{var h,T;return t._extends(t._extends({},t.getOptionProps(x)),{label:(T=(h=x.children)===null||h===void 0?void 0:h.default)===null||T===void 0?void 0:T.call(h)})})};p({focus:()=>{w.value.focus()},blur:()=>{w.value.blur()}});const v=o.computed(()=>e.loading?Ee:e.filterOption);return()=>{const{disabled:c,getPopupContainer:x,rows:h=1,id:T=$.id.value}=e,R=k(e,["disabled","getPopupContainer","rows","id"]),{hasFeedback:M,feedbackIcon:V}=I,{class:z}=i,E=k(i,["class"]),D=t.omit(R,["defaultValue","onUpdate:value","prefixCls"]),B=t.classNames({[`${s.value}-disabled`]:c,[`${s.value}-focused`]:C.value,[`${s.value}-rtl`]:N.value==="rtl"},W.getStatusClassNames(s.value,_.value),!M&&z,g.value),A=t._extends(t._extends(t._extends(t._extends({prefixCls:s.value},D),{disabled:c,direction:N.value,filterOption:v.value,getPopupContainer:x,options:e.loading?[{value:"ANTDV_SEARCHING",disabled:!0,label:o.createVNode(j,{size:"small"},null)}]:e.options||q(),class:B}),E),{rows:h,onChange:K,onSelect:P,onFocus:y,onBlur:O,ref:w,value:S.value,id:T}),Y=o.createVNode(Te,t._objectSpread2(t._objectSpread2({},A),{},{dropdownClassName:g.value}),{notFoundContent:F,option:r.option});return b(M?o.createVNode("div",{class:t.classNames(`${s.value}-affix-wrapper`,W.getStatusClassNames(`${s.value}-affix-wrapper`,_.value,M),z,g.value)},[Y,o.createVNode("span",{class:`${s.value}-suffix`},[V])]):Y)}}}),U=o.defineComponent(t._extends(t._extends({compatConfig:{MODE:3}},ae),{name:"AMentionsOption",props:ie})),Be=t._extends(G,{Option:U,getMentions:Fe,install:e=>(e.component(G.name,G),e.component(U.name,U),e)}),Le=o.defineComponent({__name:"Mentions",setup(e){return(a,r)=>(o.openBlock(),o.createBlock(o.unref(Be),o.normalizeProps(o.guardReactiveProps(a.$attrs)),{default:o.withCtx(()=>[(o.openBlock(!0),o.createElementBlock(o.Fragment,null,o.renderList(a.$slots,(n,i)=>o.renderSlot(a.$slots,i,{key:i})),128))]),_:3},16))}});exports.default=Le;
