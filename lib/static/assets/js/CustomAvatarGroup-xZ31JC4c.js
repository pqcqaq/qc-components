import { defineComponent as s, openBlock as a, createElementBlock as t, createVNode as c, unref as o, normalizeProps as l, guardReactiveProps as n, withCtx as p, Fragment as m, renderList as f, createBlock as d, mergeProps as i, createTextVNode as v, toDisplayString as _ } from "vue";
import { AvatarGroup as P, Avatar as g } from "ant-design-vue";
const y = /* @__PURE__ */ s({
  __name: "CustomAvatarGroup",
  props: {
    avatarGroupValue: {},
    groupProps: {},
    avatarProps: {}
  },
  setup(u) {
    const r = u;
    return (k, x) => (a(), t("div", null, [
      c(o(P), l(n(r.groupProps)), {
        default: p(() => [
          (a(!0), t(m, null, f(r.avatarGroupValue, (e) => (a(), d(o(g), i({
            key: e.key,
            ref_for: !0
          }, r.avatarProps, {
            src: e.src
          }), {
            default: p(() => [
              v(_(e.label), 1)
            ]),
            _: 2
          }, 1040, ["src"]))), 128))
        ]),
        _: 1
      }, 16)
    ]));
  }
});
export {
  y as default
};
