"use strict";const u=require("vue");function s(l,t){const{defaultValue:a,value:n=u.ref()}=t||{};let f=typeof l=="function"?l():l;n.value!==void 0&&(f=u.unref(n)),a!==void 0&&(f=typeof a=="function"?a():a);const c=u.ref(f),r=u.ref(f);u.watchEffect(()=>{let e=n.value!==void 0?n.value:c.value;t.postState&&(e=t.postState(e)),r.value=e});function i(e){const v=r.value;c.value=e,u.toRaw(r.value)!==e&&t.onChange&&t.onChange(e,v)}return u.watch(n,()=>{c.value=n.value}),[r,i]}exports.useMergedState=s;
