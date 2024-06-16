import { createVNode as o } from "vue";
import { I as i } from "./styleChecker-DdDg1L8e.js";
var u = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" };
function a(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? Object(arguments[e]) : {}, n = Object.keys(t);
    typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(l) {
      return Object.getOwnPropertyDescriptor(t, l).enumerable;
    }))), n.forEach(function(l) {
      f(r, l, t[l]);
    });
  }
  return r;
}
function f(r, e, t) {
  return e in r ? Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = t, r;
}
var c = function(e, t) {
  var n = a({}, e, t.attrs);
  return o(i, a({}, n, {
    icon: u
  }), null);
};
c.displayName = "CloseOutlined";
c.inheritAttrs = !1;
export {
  c as C
};
