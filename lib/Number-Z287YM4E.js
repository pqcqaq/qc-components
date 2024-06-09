import { defineComponent as n, openBlock as t, createBlock as o, unref as a, normalizeProps as s, guardReactiveProps as l, withCtx as u, createElementBlock as m, Fragment as p, renderList as _, renderSlot as c } from "vue";
import { _ as i } from "./index-DWO7wmRY.js";
const h = /* @__PURE__ */ n({
  __name: "Number",
  setup(f) {
    return (e, d) => (t(), o(a(i), s(l(e.$attrs)), {
      default: u(() => [
        (t(!0), m(p, null, _(e.$slots, (g, r) => c(e.$slots, r, { key: r })), 128))
      ]),
      _: 3
    }, 16));
  }
});
export {
  h as default
};
