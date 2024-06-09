"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("vue"),e=require("./index-C0gasYeq.cjs"),u=require("./index-BJVBBQ0i.cjs"),F=()=>({format:String,showNow:e.booleanType(),showHour:e.booleanType(),showMinute:e.booleanType(),showSecond:e.booleanType(),use12Hours:e.booleanType(),hourStep:Number,minuteStep:Number,secondStep:Number,hideDisabledOptions:e.booleanType(),popupClassName:String,status:e.stringType()});function N(c){const l=u.generatePicker(c,e._extends(e._extends({},F()),{order:{type:Boolean,default:!0}})),{TimePicker:B,RangePicker:O}=l,m=t.defineComponent({name:"ATimePicker",inheritAttrs:!1,props:e._extends(e._extends(e._extends(e._extends({},u.commonProps()),u.datePickerProps()),F()),{addon:{type:Function}}),slots:Object,setup(C,f){let{slots:i,expose:k,emit:r,attrs:h}=f;const a=C,s=e.useInjectFormItemContext();e.devWarning(!(i.addon||a.addon),"TimePicker","`addon` is deprecated. Please use `v-slot:renderExtraFooter` instead.");const d=t.ref();k({focus:()=>{var o;(o=d.value)===null||o===void 0||o.focus()},blur:()=>{var o;(o=d.value)===null||o===void 0||o.blur()}});const P=(o,T)=>{r("update:value",o),r("change",o,T),s.onFieldChange()},_=o=>{r("update:open",o),r("openChange",o)},b=o=>{r("focus",o)},v=o=>{r("blur",o),s.onFieldBlur()},x=o=>{r("ok",o)};return()=>{const{id:o=s.id.value}=a;return t.createVNode(B,e._objectSpread2(e._objectSpread2(e._objectSpread2({},h),e.omit(a,["onUpdate:value","onUpdate:open"])),{},{id:o,dropdownClassName:a.popupClassName,mode:void 0,ref:d,renderExtraFooter:a.addon||i.addon||a.renderExtraFooter||i.renderExtraFooter,onChange:P,onOpenChange:_,onFocus:b,onBlur:v,onOk:x}),i)}}}),j=t.defineComponent({name:"ATimeRangePicker",inheritAttrs:!1,props:e._extends(e._extends(e._extends(e._extends({},u.commonProps()),u.rangePickerProps()),F()),{order:{type:Boolean,default:!0}}),slots:Object,setup(C,f){let{slots:i,expose:k,emit:r,attrs:h}=f;const a=C,s=t.ref(),d=e.useInjectFormItemContext();k({focus:()=>{var n;(n=s.value)===null||n===void 0||n.focus()},blur:()=>{var n;(n=s.value)===null||n===void 0||n.blur()}});const P=(n,p)=>{r("update:value",n),r("change",n,p),d.onFieldChange()},_=n=>{r("update:open",n),r("openChange",n)},b=n=>{r("focus",n)},v=n=>{r("blur",n),d.onFieldBlur()},x=(n,p)=>{r("panelChange",n,p)},o=n=>{r("ok",n)},T=(n,p,y)=>{r("calendarChange",n,p,y)};return()=>{const{id:n=d.id.value}=a;return t.createVNode(O,e._objectSpread2(e._objectSpread2(e._objectSpread2({},h),e.omit(a,["onUpdate:open","onUpdate:value"])),{},{id:n,dropdownClassName:a.popupClassName,picker:"time",mode:void 0,ref:s,onChange:P,onOpenChange:_,onFocus:b,onBlur:v,onPanelChange:x,onOk:o,onCalendarChange:T}),i)}}});return{TimePicker:m,TimeRangePicker:j}}const{TimePicker:g,TimeRangePicker:S}=N(u.generateConfig),w=e._extends(g,{TimePicker:g,TimeRangePicker:S,install:c=>(c.component(g.name,g),c.component(S.name,S),c)}),I=t.defineComponent({__name:"TimePicker",setup(c){return(l,B)=>(t.openBlock(),t.createBlock(t.unref(w),t.normalizeProps(t.guardReactiveProps(l.$attrs)),{default:t.withCtx(()=>[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(l.$slots,(O,m)=>t.renderSlot(l.$slots,m,{key:m})),128))]),_:3},16))}});exports.default=I;
