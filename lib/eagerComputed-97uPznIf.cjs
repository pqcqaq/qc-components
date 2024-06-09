"use strict";const t=require("vue");function r(u){const e=t.shallowRef();return t.watchEffect(()=>{e.value=u()},{flush:"sync"}),e}exports.eagerComputed=r;
