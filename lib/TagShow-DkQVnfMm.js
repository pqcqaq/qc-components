import { defineComponent as r, openBlock as a, createElementBlock as n, createVNode as p, unref as s, normalizeProps as c, guardReactiveProps as l, withCtx as i, createTextVNode as u, toDisplayString as m } from "vue";
import { T as d } from "./index-DDxD_ta9.js";
const v = /* @__PURE__ */ r({
  __name: "TagShow",
  props: {
    value: {}
  },
  setup(e) {
    const t = e;
    return (o, f) => (a(), n("div", null, [
      p(s(d), c(l(o.$attrs)), {
        default: i(() => [
          u(m(t.value), 1)
        ]),
        _: 1
      }, 16)
    ]));
  }
});
export {
  v as default
};
