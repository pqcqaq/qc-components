import { defineComponent as c, ref as s, computed as v, openBlock as f, createBlock as m, unref as y, mergeProps as d } from "vue";
import { S as g } from "./index-DyhArEBu.js";
const h = /* @__PURE__ */ c({
  __name: "AsyncSelect",
  props: {
    value: {},
    options: { type: [Array, Function] }
  },
  setup(l, { emit: u }) {
    const e = l, i = u, t = s([]), n = v({
      get() {
        return e.value;
      },
      set(o) {
        i("update:value", o);
      }
    }), a = s(!1);
    return (async () => {
      a.value = !0;
      try {
        if (e.options instanceof Function) {
          const o = await e.options();
          t.value = o;
        } else {
          if (e.options && !Array.isArray(e.options)) {
            console.error(
              "options must be an array or a function that returns an array"
            );
            return;
          }
          t.value = e.options || [];
        }
      } catch (o) {
        console.error(o);
      }
      a.value = !1, n.value = e.value;
    })(), (o, r) => (f(), m(y(g), d({
      value: n.value,
      onChange: r[0] || (r[0] = (p) => n.value = p),
      loading: a.value,
      options: t.value
    }, o.$attrs), null, 16, ["value", "loading", "options"]));
  }
});
export {
  h as default
};
