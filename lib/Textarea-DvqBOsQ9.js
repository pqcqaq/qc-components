import { defineComponent as n, openBlock as s, createBlock as p, unref as l, normalizeProps as t, guardReactiveProps as o, createSlots as m, renderList as i, withCtx as u, renderSlot as c } from "vue";
import { A as f } from "./index-BA4jLAZj.js";
const x = /* @__PURE__ */ n({
  __name: "Textarea",
  setup(_) {
    return (e, d) => (s(), p(l(f), t(o(e.$attrs)), m({ _: 2 }, [
      i(e.$slots, ($, r) => ({
        name: r,
        fn: u((a) => [
          c(e.$slots, r, t(o(a || {})))
        ])
      }))
    ]), 1040));
  }
});
export {
  x as default
};
