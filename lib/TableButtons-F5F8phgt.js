import { defineComponent as c, openBlock as n, createElementBlock as r, normalizeStyle as s, Fragment as i, renderList as a, createVNode as u, unref as p, mergeProps as m, withCtx as y, createTextVNode as f, toDisplayString as d, createCommentVNode as x } from "vue";
import { B as C } from "./index-e4JwbMkw.js";
const S = /* @__PURE__ */ c({
  __name: "TableButtons",
  props: {
    btns: {},
    customBtnsStyle: {}
  },
  setup(o) {
    const t = o;
    return (_, k) => t.btns && t.btns.length > 0 ? (n(), r("div", {
      key: 0,
      class: "custombtns",
      style: s({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        ...t.customBtnsStyle
      })
    }, [
      (n(!0), r(i, null, a(t.btns, (e) => (n(), r("div", {
        key: e.text,
        style: s({
          display: "inline",
          justifyContent: "center",
          ...e.outterStyle
        })
      }, [
        u(p(C), m({
          onClick: (l) => e.onClick({ event: l }),
          ref_for: !0
        }, e.props, {
          style: {
            ...e.style
          }
        }), {
          default: y(() => [
            f(d(e.text), 1)
          ]),
          _: 2
        }, 1040, ["onClick", "style"])
      ], 4))), 128))
    ], 4)) : x("", !0);
  }
});
export {
  S as default
};
