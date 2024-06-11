import { defineComponent as _, computed as h, ref as i, openBlock as l, createElementBlock as c, createElementVNode as k, toDisplayString as p, createVNode as A, unref as v, mergeProps as R, withCtx as m, Fragment as w, renderList as x, createBlock as B, createTextVNode as C } from "vue";
import { a as F, R as N } from "./index-CE-I3_st.js";
const D = /* @__PURE__ */ _({
  __name: "AsyncRadio",
  props: {
    value: {},
    options: { type: [Array, Function] }
  },
  emits: ["update:value"],
  setup(d, { emit: f }) {
    const e = d, y = f, r = h({
      get() {
        return e.value;
      },
      set(t) {
        y("update:value", t);
      }
    }), a = i("加载中...."), o = i([]), s = async () => {
      a.value = "加载中....";
      try {
        if (e.options instanceof Function) {
          const t = await e.options();
          o.value = t;
        } else {
          if (e.options && !Array.isArray(e.options)) {
            console.error(
              "options must be an array or a function that returns an array"
            );
            return;
          }
          o.value = e.options;
        }
        o.value.length === 0 ? a.value = "暂无数据" : a.value = "";
      } catch {
        a.value = "数据加载失败";
      }
      r.value = e.value;
    };
    s();
    const g = async () => {
      await s();
    };
    return (t, u) => (l(), c("div", null, [
      k("span", {
        onClick: g,
        style: { cursor: "pointer", color: "hsla(237deg 74% 33% / 61%)" }
      }, p(o.value.length > 0 ? "" : a.value), 1),
      A(v(F), R({
        value: r.value,
        "onUpdate:value": u[0] || (u[0] = (n) => r.value = n)
      }, t.$attrs), {
        default: m(() => [
          (l(!0), c(w, null, x(o.value, (n) => (l(), B(v(N), {
            key: n.value,
            value: n.value
          }, {
            default: m(() => [
              C(p(n.label), 1)
            ]),
            _: 2
          }, 1032, ["value"]))), 128))
        ]),
        _: 1
      }, 16, ["value"])
    ]));
  }
});
export {
  D as default
};
