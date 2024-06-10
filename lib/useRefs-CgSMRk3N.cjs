"use strict";const s=require("vue"),u=()=>{const e=s.ref(new Map),t=n=>r=>{e.value.set(n,r)};return s.onBeforeUpdate(()=>{e.value=new Map}),[t,e]};exports.useRefs=u;
