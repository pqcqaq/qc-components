"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const n=require("vue"),t=require("./index-B3dyQLhr.cjs");function Le(e){return Array.isArray(e)?e:e!==void 0?[e]:[]}function Oe(e){const{label:i,value:o,children:a}=e||{},l=o||"value";return{_title:i?[i]:["title","label"],value:l,key:l,children:a||"children"}}function Ve(e){return e.disabled||e.disableCheckbox||e.checkable===!1}function $e(e,i){const o=[];function a(l){l.forEach(r=>{o.push(r[i.value]);const s=r[i.children];s&&a(s)})}return a(e),o}function ke(e){return e==null}const Ke=Symbol("TreeSelectContextPropsKey");function Fe(e){return n.provide(Ke,e)}function je(){return n.inject(Ke,{})}const He={width:0,height:0,display:"flex",overflow:"hidden",opacity:0,border:0,padding:0,margin:0},Me=n.defineComponent({compatConfig:{MODE:3},name:"OptionList",inheritAttrs:!1,setup(e,i){let{slots:o,expose:a}=i;const l=t.useBaseProps(),r=t.useInjectLegacySelectContext(),s=je(),u=n.ref(),d=t.useMemo(()=>s.treeData,[()=>l.open,()=>s.treeData],h=>h[0]),c=n.computed(()=>{const{checkable:h,halfCheckedKeys:b,checkedKeys:_}=r;return h?{checked:_,halfChecked:b}:null});n.watch(()=>l.open,()=>{n.nextTick(()=>{var h;l.open&&!l.multiple&&r.checkedKeys.length&&((h=u.value)===null||h===void 0||h.scrollTo({key:r.checkedKeys[0]}))})},{immediate:!0,flush:"post"});const v=n.computed(()=>String(l.searchValue).toLowerCase()),y=h=>v.value?String(h[r.treeNodeFilterProp]).toLowerCase().includes(v.value):!1,V=n.shallowRef(r.treeDefaultExpandedKeys),S=n.shallowRef(null);n.watch(()=>l.searchValue,()=>{l.searchValue&&(S.value=$e(n.toRaw(s.treeData),n.toRaw(s.fieldNames)))},{immediate:!0});const T=n.computed(()=>r.treeExpandedKeys?r.treeExpandedKeys.slice():l.searchValue?S.value:V.value),C=h=>{var b;V.value=h,S.value=h,(b=r.onTreeExpand)===null||b===void 0||b.call(r,h)},k=h=>{h.preventDefault()},R=(h,b)=>{let{node:_}=b;var E,N;const{checkable:M,checkedKeys:W}=r;M&&Ve(_)||((E=s.onSelect)===null||E===void 0||E.call(s,_.key,{selected:!W.includes(_.key)}),l.multiple||(N=l.toggleOpen)===null||N===void 0||N.call(l,!1))},L=n.ref(null),K=n.computed(()=>r.keyEntities[L.value]),O=h=>{L.value=h};return a({scrollTo:function(){for(var h,b,_=arguments.length,E=new Array(_),N=0;N<_;N++)E[N]=arguments[N];return(b=(h=u.value)===null||h===void 0?void 0:h.scrollTo)===null||b===void 0?void 0:b.call(h,...E)},onKeydown:h=>{var b;const{which:_}=h;switch(_){case t.KeyCode.UP:case t.KeyCode.DOWN:case t.KeyCode.LEFT:case t.KeyCode.RIGHT:(b=u.value)===null||b===void 0||b.onKeydown(h);break;case t.KeyCode.ENTER:{if(K.value){const{selectable:E,value:N}=K.value.node||{};E!==!1&&R(null,{node:{key:L.value},selected:!r.checkedKeys.includes(N)})}break}case t.KeyCode.ESC:l.toggleOpen(!1)}},onKeyup:()=>{}}),()=>{var h;const{prefixCls:b,multiple:_,searchValue:E,open:N,notFoundContent:M=(h=o.notFoundContent)===null||h===void 0?void 0:h.call(o)}=l,{listHeight:W,listItemHeight:F,virtual:G,dropdownMatchSelectWidth:U,treeExpandAction:Z}=s,{checkable:ee,treeDefaultExpandAll:te,treeIcon:J,showTreeIcon:z,switcherIcon:oe,treeLine:re,loadData:se,treeLoadedKeys:ne,treeMotion:g,onTreeLoad:D,checkedKeys:$}=r;if(d.value.length===0)return n.createVNode("div",{role:"listbox",class:`${b}-empty`,onMousedown:k},[M]);const Q={fieldNames:s.fieldNames};return ne&&(Q.loadedKeys=ne),T.value&&(Q.expandedKeys=T.value),n.createVNode("div",{onMousedown:k},[K.value&&N&&n.createVNode("span",{style:He,"aria-live":"assertive"},[K.value.node.value]),n.createVNode(t.Tree,t._objectSpread2(t._objectSpread2({ref:u,focusable:!1,prefixCls:`${b}-tree`,treeData:d.value,height:W,itemHeight:F,virtual:G!==!1&&U!==!1,multiple:_,icon:J,showIcon:z,switcherIcon:oe,showLine:re,loadData:E?null:se,motion:g,activeKey:L.value,checkable:ee,checkStrictly:!0,checkedKeys:c.value,selectedKeys:ee?[]:$,defaultExpandAll:te},Q),{},{onActiveChange:O,onSelect:R,onCheck:R,onExpand:C,onLoad:D,filterTreeNode:y,expandAction:Z}),t._extends(t._extends({},o),{checkable:r.customSlots.treeCheckable}))])}}}),Be="SHOW_ALL",Ae="SHOW_PARENT",Ne="SHOW_CHILD";function De(e,i,o,a){const l=new Set(e);return i===Ne?e.filter(r=>{const s=o[r];return!(s&&s.children&&s.children.some(u=>{let{node:d}=u;return l.has(d[a.value])})&&s.children.every(u=>{let{node:d}=u;return Ve(d)||l.has(d[a.value])}))}):i===Ae?e.filter(r=>{const s=o[r],u=s?s.parent:null;return!(u&&!Ve(u.node)&&l.has(u.key))}):e}const ae=()=>null;ae.inheritAttrs=!1;ae.displayName="ATreeSelectNode";ae.isTreeSelectNode=!0;var We=function(e,i){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(o[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(o[a[l]]=e[a[l]]);return o};function Ue(e){return e&&e.type&&e.type.isTreeSelectNode}function ze(e){function i(){let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return t.filterEmpty(o).map(a=>{var l,r,s;if(!Ue(a))return t.warning$1(!a,"TreeSelect/TreeSelectNode can only accept TreeSelectNode as children."),null;const u=a.children||{},d=a.key,c={};for(const[_,E]of Object.entries(a.props))c[t.camelize(_)]=E;const{isLeaf:v,checkable:y,selectable:V,disabled:S,disableCheckbox:T}=c,C={isLeaf:v||v===""||void 0,checkable:y||y===""||void 0,selectable:V||V===""||void 0,disabled:S||S===""||void 0,disableCheckbox:T||T===""||void 0},k=t._extends(t._extends({},c),C),{title:R=(l=u.title)===null||l===void 0?void 0:l.call(u,k),switcherIcon:L=(r=u.switcherIcon)===null||r===void 0?void 0:r.call(u,k)}=c,K=We(c,["title","switcherIcon"]),O=(s=u.default)===null||s===void 0?void 0:s.call(u),h=t._extends(t._extends(t._extends({},K),{title:R,switcherIcon:L,key:d,isLeaf:v}),C),b=i(O);return b.length&&(h.children=b),h})}return i(e)}function Ie(e){if(!e)return e;const i=t._extends({},e);return"props"in i||Object.defineProperty(i,"props",{get(){return t.warning$1(!1,"New `vc-tree-select` not support return node instance as argument anymore. Please consider to remove `props` access."),i}}),i}function qe(e,i,o,a,l,r){let s=null,u=null;function d(){function c(v){let y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"0",V=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return v.map((S,T)=>{const C=`${y}-${T}`,k=S[r.value],R=o.includes(k),L=c(S[r.children]||[],C,R),K=n.createVNode(ae,S,{default:()=>[L.map(O=>O.node)]});if(i===k&&(s=K),R){const O={pos:C,node:K,children:L};return V||u.push(O),O}return null}).filter(S=>S)}u||(u=[],c(a),u.sort((v,y)=>{let{node:{props:{value:V}}}=v,{node:{props:{value:S}}}=y;const T=o.indexOf(V),C=o.indexOf(S);return T-C}))}Object.defineProperty(e,"triggerNode",{get(){return t.warning$1(!1,"`triggerNode` is deprecated. Please consider decoupling data with node."),d(),s}}),Object.defineProperty(e,"allCheckedNodes",{get(){return t.warning$1(!1,"`allCheckedNodes` is deprecated. Please consider decoupling data with node."),d(),l?u:u.map(c=>{let{node:v}=c;return v})}})}function Xe(e,i){let{id:o,pId:a,rootPId:l}=i;const r={},s=[];return e.map(d=>{const c=t._extends({},d),v=c[o];return r[v]=c,c.key=c.key||v,c}).forEach(d=>{const c=d[a],v=r[c];v&&(v.children=v.children||[],v.children.push(d)),(c===l||!v&&l===null)&&s.push(d)}),s}function Ye(e,i,o){const a=n.shallowRef();return n.watch([o,e,i],()=>{const l=o.value;e.value?a.value=o.value?Xe(n.toRaw(e.value),t._extends({id:"id",pId:"pId",rootPId:null},l!==!0?l:{})):n.toRaw(e.value).slice():a.value=ze(n.toRaw(i.value))},{immediate:!0,deep:!0}),a}const Ge=e=>{const i=n.shallowRef({valueLabels:new Map}),o=n.shallowRef();return n.watch(e,()=>{o.value=n.toRaw(e.value)},{immediate:!0}),[n.computed(()=>{const{valueLabels:l}=i.value,r=new Map,s=o.value.map(u=>{var d;const{value:c}=u,v=(d=u.label)!==null&&d!==void 0?d:l.get(c);return r.set(c,v),t._extends(t._extends({},u),{label:v})});return i.value.valueLabels=r,s})]},Je=(e,i)=>{const o=n.shallowRef(new Map),a=n.shallowRef({});return n.watchEffect(()=>{const l=i.value,r=t.convertDataToEntities(e.value,{fieldNames:l,initWrapper:s=>t._extends(t._extends({},s),{valueEntities:new Map}),processEntity:(s,u)=>{const d=s.node[l.value];if(process.env.NODE_ENV!=="production"){const c=s.node.key;t.warning$1(!ke(d),"TreeNode `value` is invalidate: undefined"),t.warning$1(!u.valueEntities.has(d),`Same \`value\` exist in the tree: ${d}`),t.warning$1(!c||String(c)===String(d),`\`key\` or \`value\` with TreeNode must be the same or you can remove one of them. key: ${c}, value: ${d}.`)}u.valueEntities.set(d,s)}});o.value=r.valueEntities,a.value=r.keyEntities}),{valueEntities:o,keyEntities:a}},Qe=(e,i,o,a,l,r)=>{const s=n.shallowRef([]),u=n.shallowRef([]);return n.watchEffect(()=>{let d=e.value.map(y=>{let{value:V}=y;return V}),c=i.value.map(y=>{let{value:V}=y;return V});const v=d.filter(y=>!a.value[y]);o.value&&({checkedKeys:d,halfCheckedKeys:c}=t.conductCheck(d,!0,a.value,l.value,r.value)),s.value=Array.from(new Set([...v,...d])),u.value=c}),[s,u]},Ze=(e,i,o)=>{let{treeNodeFilterProp:a,filterTreeNode:l,fieldNames:r}=o;return n.computed(()=>{const{children:s}=r.value,u=i.value,d=a==null?void 0:a.value;if(!u||l.value===!1)return e.value;let c;if(typeof l.value=="function")c=l.value;else{const y=u.toUpperCase();c=(V,S)=>{const T=S[d];return String(T).toUpperCase().includes(y)}}function v(y){let V=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const S=[];for(let T=0,C=y.length;T<C;T++){const k=y[T],R=k[s],L=V||c(u,Ie(k)),K=v(R||[],L);(L||K.length)&&S.push(t._extends(t._extends({},k),{[s]:K}))}return S}return v(e.value)})};function et(e){const{searchPlaceholder:i,treeCheckStrictly:o,treeCheckable:a,labelInValue:l,value:r,multiple:s}=e;t.warning$1(!i,"`searchPlaceholder` has been removed, please use `placeholder` instead"),o&&l===!1&&t.warning$1(!1,"`treeCheckStrictly` will force set `labelInValue` to `true`."),(l||o)&&t.warning$1(Le(r).every(u=>u&&typeof u=="object"&&"value"in u),"Invalid prop `value` supplied to `TreeSelect`. You should use { label: string, value: string | number } or [{ label: string, value: string | number }] instead."),o||s||a?t.warning$1(!r||Array.isArray(r),"`value` should be an array when `TreeSelect` is checkable or multiple."):t.warning$1(!Array.isArray(r),"`value` should not be array when `TreeSelect` is single mode.")}function Re(){return t._extends(t._extends({},t.omit(t.baseSelectPropsWithoutPrivate(),["mode"])),{prefixCls:String,id:String,value:{type:[String,Number,Object,Array]},defaultValue:{type:[String,Number,Object,Array]},onChange:{type:Function},searchValue:String,inputValue:String,onSearch:{type:Function},autoClearSearchValue:{type:Boolean,default:void 0},filterTreeNode:{type:[Boolean,Function],default:void 0},treeNodeFilterProp:String,onSelect:Function,onDeselect:Function,showCheckedStrategy:{type:String},treeNodeLabelProp:String,fieldNames:{type:Object},multiple:{type:Boolean,default:void 0},treeCheckable:{type:Boolean,default:void 0},treeCheckStrictly:{type:Boolean,default:void 0},labelInValue:{type:Boolean,default:void 0},treeData:{type:Array},treeDataSimpleMode:{type:[Boolean,Object],default:void 0},loadData:{type:Function},treeLoadedKeys:{type:Array},onTreeLoad:{type:Function},treeDefaultExpandAll:{type:Boolean,default:void 0},treeExpandedKeys:{type:Array},treeDefaultExpandedKeys:{type:Array},onTreeExpand:{type:Function},virtual:{type:Boolean,default:void 0},listHeight:Number,listItemHeight:Number,onDropdownVisibleChange:{type:Function},treeLine:{type:[Boolean,Object],default:void 0},treeIcon:t.PropTypes.any,showTreeIcon:{type:Boolean,default:void 0},switcherIcon:t.PropTypes.any,treeMotion:t.PropTypes.any,children:Array,treeExpandAction:String,showArrow:{type:Boolean,default:void 0},showSearch:{type:Boolean,default:void 0},open:{type:Boolean,default:void 0},defaultOpen:{type:Boolean,default:void 0},disabled:{type:Boolean,default:void 0},placeholder:t.PropTypes.any,maxTagPlaceholder:{type:Function},dropdownPopupAlign:t.PropTypes.any,customSlots:Object})}function tt(e){return!e||typeof e!="object"}const nt=n.defineComponent({compatConfig:{MODE:3},name:"TreeSelect",inheritAttrs:!1,props:t.initDefaultProps(Re(),{treeNodeFilterProp:"value",autoClearSearchValue:!0,showCheckedStrategy:Ne,listHeight:200,listItemHeight:20,prefixCls:"vc-tree-select"}),setup(e,i){let{attrs:o,expose:a,slots:l}=i;const r=t.useId(n.toRef(e,"id")),s=n.computed(()=>e.treeCheckable&&!e.treeCheckStrictly),u=n.computed(()=>e.treeCheckable||e.treeCheckStrictly),d=n.computed(()=>e.treeCheckStrictly||e.labelInValue),c=n.computed(()=>u.value||e.multiple);process.env.NODE_ENV!=="production"&&n.watchEffect(()=>{et(e)});const v=n.computed(()=>Oe(e.fieldNames)),[y,V]=t.useMergedState("",{value:n.computed(()=>e.searchValue!==void 0?e.searchValue:e.inputValue),postState:f=>f||""}),S=f=>{var p;V(f),(p=e.onSearch)===null||p===void 0||p.call(e,f)},T=Ye(n.toRef(e,"treeData"),n.toRef(e,"children"),n.toRef(e,"treeDataSimpleMode")),{keyEntities:C,valueEntities:k}=Je(T,v),R=f=>{const p=[],m=[];return f.forEach(x=>{k.value.has(x)?m.push(x):p.push(x)}),{missingRawValues:p,existRawValues:m}},L=Ze(T,y,{fieldNames:v,treeNodeFilterProp:n.toRef(e,"treeNodeFilterProp"),filterTreeNode:n.toRef(e,"filterTreeNode")}),K=f=>{if(f){if(e.treeNodeLabelProp)return f[e.treeNodeLabelProp];const{_title:p}=v.value;for(let m=0;m<p.length;m+=1){const x=f[p[m]];if(x!==void 0)return x}}},O=f=>Le(f).map(m=>tt(m)?{value:m}:m),h=f=>O(f).map(m=>{let{label:x}=m;const{value:A,halfChecked:I}=m;let w;const P=k.value.get(A);return P&&(x=x??K(P.node),w=P.node.disabled),{label:x,value:A,halfChecked:I,disabled:w}}),[b,_]=t.useMergedState(e.defaultValue,{value:n.toRef(e,"value")}),E=n.computed(()=>O(b.value)),N=n.shallowRef([]),M=n.shallowRef([]);n.watchEffect(()=>{const f=[],p=[];E.value.forEach(m=>{m.halfChecked?p.push(m):f.push(m)}),N.value=f,M.value=p});const W=n.computed(()=>N.value.map(f=>f.value)),{maxLevel:F,levelEntities:G}=t.useMaxLevel(C),[U,Z]=Qe(N,M,s,C,F,G),ee=n.computed(()=>{const m=De(U.value,e.showCheckedStrategy,C.value,v.value).map(I=>{var w,P,B;return(B=(P=(w=C.value[I])===null||w===void 0?void 0:w.node)===null||P===void 0?void 0:P[v.value.value])!==null&&B!==void 0?B:I}).map(I=>{const w=N.value.find(P=>P.value===I);return{value:I,label:w==null?void 0:w.label}}),x=h(m),A=x[0];return!c.value&&A&&ke(A.value)&&ke(A.label)?[]:x.map(I=>{var w;return t._extends(t._extends({},I),{label:(w=I.label)!==null&&w!==void 0?w:I.value})})}),[te]=Ge(ee),J=(f,p,m)=>{const x=h(f);if(_(x),e.autoClearSearchValue&&V(""),e.onChange){let A=f;s.value&&(A=De(f,e.showCheckedStrategy,C.value,v.value).map(Y=>{const ie=k.value.get(Y);return ie?ie.node[v.value.value]:Y}));const{triggerValue:I,selected:w}=p||{triggerValue:void 0,selected:void 0};let P=A;if(e.treeCheckStrictly){const H=M.value.filter(Y=>!A.includes(Y.value));P=[...P,...H]}const B=h(P),q={preValue:N.value,triggerValue:I};let X=!0;(e.treeCheckStrictly||m==="selection"&&!w)&&(X=!1),qe(q,I,f,T.value,X,v.value),u.value?q.checked=w:q.selected=w;const j=d.value?B:B.map(H=>H.value);e.onChange(c.value?j:j[0],d.value?null:B.map(H=>H.label),q)}},z=(f,p)=>{let{selected:m,source:x}=p;var A,I,w;const P=n.toRaw(C.value),B=n.toRaw(k.value),q=P[f],X=q==null?void 0:q.node,j=(A=X==null?void 0:X[v.value.value])!==null&&A!==void 0?A:f;if(!c.value)J([j],{selected:!0,triggerValue:j},"option");else{let H=m?[...W.value,j]:U.value.filter(Y=>Y!==j);if(s.value){const{missingRawValues:Y,existRawValues:ie}=R(H),_e=ie.map(xe=>B.get(xe).key);let Ce;m?{checkedKeys:Ce}=t.conductCheck(_e,!0,P,F.value,G.value):{checkedKeys:Ce}=t.conductCheck(_e,{checked:!1,halfCheckedKeys:Z.value},P,F.value,G.value),H=[...Y,...Ce.map(xe=>P[xe].node[v.value.value])]}J(H,{selected:m,triggerValue:j},x||"option")}m||!c.value?(I=e.onSelect)===null||I===void 0||I.call(e,j,Ie(X)):(w=e.onDeselect)===null||w===void 0||w.call(e,j,Ie(X))},oe=f=>{if(e.onDropdownVisibleChange){const p={};Object.defineProperty(p,"documentClickClose",{get(){return t.warning$1(!1,"Second param of `onDropdownVisibleChange` has been removed."),!1}}),e.onDropdownVisibleChange(f,p)}},re=(f,p)=>{const m=f.map(x=>x.value);if(p.type==="clear"){J(m,{},"selection");return}p.values.length&&z(p.values[0].value,{selected:!1,source:"selection"})},{treeNodeFilterProp:se,loadData:ne,treeLoadedKeys:g,onTreeLoad:D,treeDefaultExpandAll:$,treeExpandedKeys:Q,treeDefaultExpandedKeys:de,onTreeExpand:fe,virtual:ve,listHeight:he,listItemHeight:pe,treeLine:ue,treeIcon:me,showTreeIcon:ge,switcherIcon:ye,treeMotion:be,customSlots:we,dropdownMatchSelectWidth:ce,treeExpandAction:Se}=n.toRefs(e);t.useProvideLegacySelectContext(t.toReactive({checkable:u,loadData:ne,treeLoadedKeys:g,onTreeLoad:D,checkedKeys:U,halfCheckedKeys:Z,treeDefaultExpandAll:$,treeExpandedKeys:Q,treeDefaultExpandedKeys:de,onTreeExpand:fe,treeIcon:me,treeMotion:be,showTreeIcon:ge,switcherIcon:ye,treeLine:ue,treeNodeFilterProp:se,keyEntities:C,customSlots:we})),Fe(t.toReactive({virtual:ve,listHeight:he,listItemHeight:pe,treeData:L,fieldNames:v,onSelect:z,dropdownMatchSelectWidth:ce,treeExpandAction:Se}));const le=n.ref();return a({focus(){var f;(f=le.value)===null||f===void 0||f.focus()},blur(){var f;(f=le.value)===null||f===void 0||f.blur()},scrollTo(f){var p;(p=le.value)===null||p===void 0||p.scrollTo(f)}}),()=>{var f;const p=t.omit(e,["id","prefixCls","customSlots","value","defaultValue","onChange","onSelect","onDeselect","searchValue","inputValue","onSearch","autoClearSearchValue","filterTreeNode","treeNodeFilterProp","showCheckedStrategy","treeNodeLabelProp","multiple","treeCheckable","treeCheckStrictly","labelInValue","fieldNames","treeDataSimpleMode","treeData","children","loadData","treeLoadedKeys","onTreeLoad","treeDefaultExpandAll","treeExpandedKeys","treeDefaultExpandedKeys","onTreeExpand","virtual","listHeight","listItemHeight","onDropdownVisibleChange","treeLine","treeIcon","showTreeIcon","switcherIcon","treeMotion"]);return n.createVNode(t.BaseSelect,t._objectSpread2(t._objectSpread2(t._objectSpread2({ref:le},o),p),{},{id:r,prefixCls:e.prefixCls,mode:c.value?"multiple":void 0,displayValues:te.value,onDisplayValuesChange:re,searchValue:y.value,onSearch:S,OptionList:Me,emptyOptions:!T.value.length,onDropdownVisibleChange:oe,tagRender:e.tagRender||l.tagRender,dropdownMatchSelectWidth:(f=e.dropdownMatchSelectWidth)!==null&&f!==void 0?f:!0}),l)}}}),lt=e=>{const{componentCls:i,treePrefixCls:o,colorBgElevated:a}=e,l=`.${o}`;return[{[`${i}-dropdown`]:[{padding:`${e.paddingXS}px ${e.paddingXS/2}px`},t.genTreeStyle(o,t.merge(e,{colorBgContainer:a})),{[l]:{borderRadius:0,"&-list-holder-inner":{alignItems:"stretch",[`${l}-treenode`]:{[`${l}-node-content-wrapper`]:{flex:"auto"}}}}},t.getStyle(`${o}-checkbox`,e),{"&-rtl":{direction:"rtl",[`${l}-switcher${l}-switcher_close`]:{[`${l}-switcher-icon svg`]:{transform:"rotate(90deg)"}}}}]}]};function at(e,i){return t.genComponentStyleHook("TreeSelect",o=>{const a=t.merge(o,{treePrefixCls:i.value});return[lt(a)]})(e)}const Pe=(e,i,o)=>o!==void 0?o:`${e}-${i}`;function ot(){return t._extends(t._extends({},t.omit(Re(),["showTreeIcon","treeMotion","inputIcon","getInputElement","treeLine","customSlots"])),{suffixIcon:t.PropTypes.any,size:t.stringType(),bordered:t.booleanType(),treeLine:t.someType([Boolean,Object]),replaceFields:t.objectType(),placement:t.stringType(),status:t.stringType(),popupClassName:String,dropdownClassName:String,"onUpdate:value":t.functionType(),"onUpdate:treeExpandedKeys":t.functionType(),"onUpdate:searchValue":t.functionType()})}const Te=n.defineComponent({compatConfig:{MODE:3},name:"ATreeSelect",inheritAttrs:!1,props:t.initDefaultProps(ot(),{choiceTransitionName:"",listHeight:256,treeIcon:!1,listItemHeight:26,bordered:!0}),slots:Object,setup(e,i){let{attrs:o,slots:a,expose:l,emit:r}=i;t.warning$1(!(e.treeData===void 0&&a.default),"`children` of TreeSelect is deprecated. Please use `treeData` instead."),t.devWarning(e.multiple!==!1||!e.treeCheckable,"TreeSelect","`multiple` will always be `true` when `treeCheckable` is true"),t.devWarning(e.replaceFields===void 0,"TreeSelect","`replaceFields` is deprecated, please use fieldNames instead"),t.devWarning(!e.dropdownClassName,"TreeSelect","`dropdownClassName` is deprecated. Please use `popupClassName` instead.");const s=t.useInjectFormItemContext(),u=t.FormItemInputContext.useInject(),d=n.computed(()=>t.getMergedStatus(u.status,e.status)),{prefixCls:c,renderEmpty:v,direction:y,virtual:V,dropdownMatchSelectWidth:S,size:T,getPopupContainer:C,getPrefixCls:k,disabled:R}=t.useConfigInject("select",e),{compactSize:L,compactItemClassnames:K}=t.useCompactItemContext(c,y),O=n.computed(()=>L.value||T.value),h=t.useInjectDisabled(),b=n.computed(()=>{var g;return(g=R.value)!==null&&g!==void 0?g:h.value}),_=n.computed(()=>k()),E=n.computed(()=>e.placement!==void 0?e.placement:y.value==="rtl"?"bottomRight":"bottomLeft"),N=n.computed(()=>Pe(_.value,t.getTransitionDirection(E.value),e.transitionName)),M=n.computed(()=>Pe(_.value,"",e.choiceTransitionName)),W=n.computed(()=>k("select-tree",e.prefixCls)),F=n.computed(()=>k("tree-select",e.prefixCls)),[G,U]=t.useSelectStyle(c),[Z]=at(F,W),ee=n.computed(()=>t.classNames(e.popupClassName||e.dropdownClassName,`${F.value}-dropdown`,{[`${F.value}-dropdown-rtl`]:y.value==="rtl"},U.value)),te=n.computed(()=>!!(e.treeCheckable||e.multiple)),J=n.computed(()=>e.showArrow!==void 0?e.showArrow:e.loading||!te.value),z=n.ref();l({focus(){var g,D;(D=(g=z.value).focus)===null||D===void 0||D.call(g)},blur(){var g,D;(D=(g=z.value).blur)===null||D===void 0||D.call(g)}});const oe=function(){for(var g=arguments.length,D=new Array(g),$=0;$<g;$++)D[$]=arguments[$];r("update:value",D[0]),r("change",...D),s.onFieldChange()},re=g=>{r("update:treeExpandedKeys",g),r("treeExpand",g)},se=g=>{r("update:searchValue",g),r("search",g)},ne=g=>{r("blur",g),s.onFieldBlur()};return()=>{var g,D;const{notFoundContent:$=(g=a.notFoundContent)===null||g===void 0?void 0:g.call(a),prefixCls:Q,bordered:de,listHeight:fe,listItemHeight:ve,multiple:he,treeIcon:pe,treeLine:ue,showArrow:me,switcherIcon:ge=(D=a.switcherIcon)===null||D===void 0?void 0:D.call(a),fieldNames:ye=e.replaceFields,id:be=s.id.value}=e,{isFormItemInput:we,hasFeedback:ce,feedbackIcon:Se}=u,{suffixIcon:le,removeIcon:f,clearIcon:p}=t.getIcons(t._extends(t._extends({},e),{multiple:te.value,showArrow:J.value,hasFeedback:ce,feedbackIcon:Se,prefixCls:c.value}),a);let m;$!==void 0?m=$:m=v("Select");const x=t.omit(e,["suffixIcon","itemIcon","removeIcon","clearIcon","switcherIcon","bordered","status","onUpdate:value","onUpdate:treeExpandedKeys","onUpdate:searchValue"]),A=t.classNames(!Q&&F.value,{[`${c.value}-lg`]:O.value==="large",[`${c.value}-sm`]:O.value==="small",[`${c.value}-rtl`]:y.value==="rtl",[`${c.value}-borderless`]:!de,[`${c.value}-in-form-item`]:we},t.getStatusClassNames(c.value,d.value,ce),K.value,o.class,U.value),I={};return e.treeData===void 0&&a.default&&(I.children=t.flattenChildren(a.default())),G(Z(n.createVNode(nt,t._objectSpread2(t._objectSpread2(t._objectSpread2(t._objectSpread2({},o),x),{},{disabled:b.value,virtual:V.value,dropdownMatchSelectWidth:S.value,id:be,fieldNames:ye,ref:z,prefixCls:c.value,class:A,listHeight:fe,listItemHeight:ve,treeLine:!!ue,inputIcon:le,multiple:he,removeIcon:f,clearIcon:p,switcherIcon:w=>t.renderSwitcherIcon(W.value,ge,w,a.leafIcon,ue),showTreeIcon:pe,notFoundContent:m,getPopupContainer:C==null?void 0:C.value,treeMotion:null,dropdownClassName:ee.value,choiceTransitionName:M.value,onChange:oe,onBlur:ne,onSearch:se,onTreeExpand:re},I),{},{transitionName:N.value,customSlots:t._extends(t._extends({},a),{treeCheckable:()=>n.createVNode("span",{class:`${c.value}-tree-checkbox-inner`},null)}),maxTagPlaceholder:e.maxTagPlaceholder||a.maxTagPlaceholder,placement:E.value,showArrow:ce||me}),t._extends(t._extends({},a),{treeCheckable:()=>n.createVNode("span",{class:`${c.value}-tree-checkbox-inner`},null)}))))}}}),Ee=ae,rt=t._extends(Te,{TreeNode:ae,SHOW_ALL:Be,SHOW_PARENT:Ae,SHOW_CHILD:Ne,install:e=>(e.component(Te.name,Te),e.component(Ee.displayName,Ee),e)}),st=n.defineComponent({__name:"AsyncTreeSelect",props:{value:{},treeData:{type:[Array,Function]}},setup(e,{emit:i}){const o=e,a=i,l=n.ref([]),r=n.computed({get(){return o.value},set(d){a("update:value",d)}}),s=n.ref(!1);return(async()=>{s.value=!0;try{if(!o.treeData){console.error("options must not be empty");return}if(o.treeData instanceof Function){const d=await o.treeData();l.value=d||[]}else{if(o.treeData&&!Array.isArray(o.treeData)){console.error("options must be an array or a function that returns an array");return}l.value=o.treeData||[]}}catch(d){console.error(d)}s.value=!1,r.value=o.value})(),(d,c)=>(n.openBlock(),n.createBlock(n.unref(rt),n.mergeProps({value:r.value,onChange:c[0]||(c[0]=v=>r.value=v),loading:s.value,treeData:l.value},d.$attrs),null,16,["value","loading","treeData"]))}});exports.default=st;
