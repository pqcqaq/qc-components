import { defineComponent as f, ref as s, computed as m, onMounted as v, openBlock as d, createBlock as y, unref as g, mergeProps as A } from "vue";
import { S } from "./index-B3vIMl_G.js";
const k = /* @__PURE__ */ f({
  __name: "AsyncSelect",
  props: {
    value: {},
    options: { type: [Array, Function] }
  },
  setup(l, { emit: u }) {
    const o = l, i = u, t = s([]), r = m({
      get() {
        return o.value;
      },
      set(e) {
        i("update:value", e);
      }
    }), n = s(!1), p = async () => {
      n.value = !0;
      try {
        if (o.options instanceof Function) {
          const e = await o.options();
          t.value = e;
        } else {
          if (o.options && !Array.isArray(o.options)) {
            console.error(
              "options must be an array or a function that returns an array"
            );
            return;
          }
          t.value = o.options || [];
        }
      } catch (e) {
        console.error(e);
      }
      n.value = !1;
    };
    return v(() => {
      p();
    }), (e, a) => (d(), y(g(S), A({
      value: r.value,
      onChange: a[0] || (a[0] = (c) => r.value = c),
      loading: n.value,
      options: t.value
    }, e.$attrs), null, 16, ["value", "loading", "options"]));
  }
});
export {
  k as default
};
