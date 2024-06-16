import { defineComponent as g, computed as k, ref as c, openBlock as l, createElementBlock as i, createElementVNode as C, toDisplayString as p, createVNode as x, unref as v, mergeProps as A, withCtx as m, Fragment as _, renderList as b, createBlock as B, createTextVNode as w } from "vue";
import { A as F, C as N } from "./index-Dy7z43xk.js";
const E = /* @__PURE__ */ g({
  __name: "AsyncCheckBox",
  props: {
    value: {},
    options: { type: [Array, Function] }
  },
  emits: ["update:value"],
  setup(d, { emit: f }) {
    const e = d, y = f, n = k({
      get() {
        return e.value;
      },
      set(t) {
        y("update:value", t);
      }
    }), a = c("加载中...."), o = c([]), s = async () => {
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
      n.value = e.value;
    };
    s();
    const h = async () => {
      await s();
    };
    return (t, u) => (l(), i("div", null, [
      C("span", {
        onClick: h,
        style: { cursor: "pointer", color: "hsla(237deg 74% 33% / 61%)" }
      }, p(o.value.length > 0 ? "" : a.value), 1),
      x(v(F), A({
        value: n.value,
        "onUpdate:value": u[0] || (u[0] = (r) => n.value = r)
      }, t.$attrs), {
        default: m(() => [
          (l(!0), i(_, null, b(o.value, (r) => (l(), B(v(N), {
            key: r.value,
            value: r.value
          }, {
            default: m(() => [
              w(p(r.label), 1)
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
  E as default
};
