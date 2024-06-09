import { defineComponent as g, computed as h, ref as i, onMounted as k, openBlock as r, createElementBlock as c, createElementVNode as w, toDisplayString as p, createVNode as A, unref as v, mergeProps as R, withCtx as m, Fragment as x, renderList as B, createBlock as C, createTextVNode as F } from "vue";
import { _ as N, R as V } from "./index-9j3ej2lM.js";
const E = /* @__PURE__ */ g({
  __name: "AsyncRadio",
  props: {
    value: {},
    options: { type: [Array, Function] }
  },
  emits: ["update:value"],
  setup(d, { emit: f }) {
    const e = d, y = f, s = h({
      get() {
        return e.value;
      },
      set(t) {
        y("update:value", t);
      }
    }), o = i("加载中...."), n = i([]), u = async () => {
      o.value = "加载中....";
      try {
        if (e.options instanceof Function) {
          const t = await e.options();
          n.value = t;
        } else {
          if (e.options && !Array.isArray(e.options)) {
            console.error(
              "options must be an array or a function that returns an array"
            );
            return;
          }
          n.value = e.options;
        }
      } catch {
        o.value = "数据加载失败";
      }
    };
    k(async () => {
      if (!e.options) {
        o.value = "暂无数据";
        return;
      }
      await u();
    });
    const _ = async () => {
      await u();
    };
    return (t, l) => (r(), c("div", null, [
      w("span", {
        onClick: _,
        style: { cursor: "pointer", color: "hsla(237deg 74% 33% / 61%)" }
      }, p(n.value.length > 0 ? "" : o.value), 1),
      A(v(N), R({
        value: s.value,
        "onUpdate:value": l[0] || (l[0] = (a) => s.value = a)
      }, t.$attrs), {
        default: m(() => [
          (r(!0), c(x, null, B(n.value, (a) => (r(), C(v(V), {
            key: a.value,
            value: a.value
          }, {
            default: m(() => [
              F(p(a.label), 1)
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
