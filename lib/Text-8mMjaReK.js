import { defineComponent as s, openBlock as a, createBlock as p, unref as l, normalizeProps as t, guardReactiveProps as o, createSlots as m, renderList as u, withCtx as i, renderSlot as c } from "vue";
import { I as f } from "./index-CNOMdpiO.js";
const B = /* @__PURE__ */ s({
  __name: "Text",
  setup(_) {
    return (e, d) => (a(), p(l(f), t(o(e.$attrs)), m({ _: 2 }, [
      u(e.$slots, ($, r) => ({
        name: r,
        fn: i((n) => [
          c(e.$slots, r, t(o(n || {})))
        ])
      }))
    ]), 1040));
  }
});
export {
  B as default
};
