import { defineComponent as m, computed as d, createVNode as u, openBlock as w, createBlock as z, unref as y, normalizeProps as C, guardReactiveProps as M, withCtx as B, createTextVNode as I, toDisplayString as T } from "vue";
import { g as _, m as D, d as s, r as G, w as H, u as W, ak as E, j as f } from "./index-BK36I_Sb.js";
const P = (t) => {
  const {
    componentCls: e,
    sizePaddingEdgeHorizontal: a,
    colorSplit: r,
    lineWidth: i
  } = t;
  return {
    [e]: s(s({}, G(t)), {
      borderBlockStart: `${i}px solid ${r}`,
      // vertical
      "&-vertical": {
        position: "relative",
        top: "-0.06em",
        display: "inline-block",
        height: "0.9em",
        margin: `0 ${t.dividerVerticalGutterMargin}px`,
        verticalAlign: "middle",
        borderTop: 0,
        borderInlineStart: `${i}px solid ${r}`
      },
      "&-horizontal": {
        display: "flex",
        clear: "both",
        width: "100%",
        minWidth: "100%",
        margin: `${t.dividerHorizontalGutterMargin}px 0`
      },
      [`&-horizontal${e}-with-text`]: {
        display: "flex",
        alignItems: "center",
        margin: `${t.dividerHorizontalWithTextGutterMargin}px 0`,
        color: t.colorTextHeading,
        fontWeight: 500,
        fontSize: t.fontSizeLG,
        whiteSpace: "nowrap",
        textAlign: "center",
        borderBlockStart: `0 ${r}`,
        "&::before, &::after": {
          position: "relative",
          width: "50%",
          borderBlockStart: `${i}px solid transparent`,
          // Chrome not accept `inherit` in `border-top`
          borderBlockStartColor: "inherit",
          borderBlockEnd: 0,
          transform: "translateY(50%)",
          content: "''"
        }
      },
      [`&-horizontal${e}-with-text-left`]: {
        "&::before": {
          width: "5%"
        },
        "&::after": {
          width: "95%"
        }
      },
      [`&-horizontal${e}-with-text-right`]: {
        "&::before": {
          width: "95%"
        },
        "&::after": {
          width: "5%"
        }
      },
      [`${e}-inner-text`]: {
        display: "inline-block",
        padding: "0 1em"
      },
      "&-dashed": {
        background: "none",
        borderColor: r,
        borderStyle: "dashed",
        borderWidth: `${i}px 0 0`
      },
      [`&-horizontal${e}-with-text${e}-dashed`]: {
        "&::before, &::after": {
          borderStyle: "dashed none none"
        }
      },
      [`&-vertical${e}-dashed`]: {
        borderInlineStartWidth: i,
        borderInlineEnd: 0,
        borderBlockStart: 0,
        borderBlockEnd: 0
      },
      [`&-plain${e}-with-text`]: {
        color: t.colorText,
        fontWeight: "normal",
        fontSize: t.fontSize
      },
      [`&-horizontal${e}-with-text-left${e}-no-default-orientation-margin-left`]: {
        "&::before": {
          width: 0
        },
        "&::after": {
          width: "100%"
        },
        [`${e}-inner-text`]: {
          paddingInlineStart: a
        }
      },
      [`&-horizontal${e}-with-text-right${e}-no-default-orientation-margin-right`]: {
        "&::before": {
          width: "100%"
        },
        "&::after": {
          width: 0
        },
        [`${e}-inner-text`]: {
          paddingInlineEnd: a
        }
      }
    })
  };
}, A = _("Divider", (t) => {
  const e = D(t, {
    dividerVerticalGutterMargin: t.marginXS,
    dividerHorizontalWithTextGutterMargin: t.margin,
    dividerHorizontalGutterMargin: t.marginLG
  });
  return [P(e)];
}, {
  sizePaddingEdgeHorizontal: 0
}), R = () => ({
  prefixCls: String,
  type: {
    type: String,
    default: "horizontal"
  },
  dashed: {
    type: Boolean,
    default: !1
  },
  orientation: {
    type: String,
    default: "center"
  },
  plain: {
    type: Boolean,
    default: !1
  },
  orientationMargin: [String, Number]
}), V = m({
  name: "ADivider",
  inheritAttrs: !1,
  compatConfig: {
    MODE: 3
  },
  props: R(),
  setup(t, e) {
    let {
      slots: a,
      attrs: r
    } = e;
    const {
      prefixCls: i,
      direction: p
    } = W("divider", t), [v, h] = A(i), c = d(() => t.orientation === "left" && t.orientationMargin != null), g = d(() => t.orientation === "right" && t.orientationMargin != null), x = d(() => {
      const {
        type: n,
        dashed: l,
        plain: b
      } = t, o = i.value;
      return {
        [o]: !0,
        [h.value]: !!h.value,
        [`${o}-${n}`]: !0,
        [`${o}-dashed`]: !!l,
        [`${o}-plain`]: !!b,
        [`${o}-rtl`]: p.value === "rtl",
        [`${o}-no-default-orientation-margin-left`]: c.value,
        [`${o}-no-default-orientation-margin-right`]: g.value
      };
    }), $ = d(() => {
      const n = typeof t.orientationMargin == "number" ? `${t.orientationMargin}px` : t.orientationMargin;
      return s(s({}, c.value && {
        marginLeft: n
      }), g.value && {
        marginRight: n
      });
    }), S = d(() => t.orientation.length > 0 ? "-" + t.orientation : t.orientation);
    return () => {
      var n;
      const l = E((n = a.default) === null || n === void 0 ? void 0 : n.call(a));
      return v(u("div", f(f({}, r), {}, {
        class: [x.value, l.length ? `${i.value}-with-text ${i.value}-with-text${S.value}` : "", r.class],
        role: "separator"
      }), [l.length ? u("span", {
        class: `${i.value}-inner-text`,
        style: $.value
      }, [l]) : null]));
    };
  }
}), k = H(V), N = /* @__PURE__ */ m({
  __name: "CustomDivider",
  props: {
    dividerText: {}
  },
  setup(t) {
    const e = t;
    return (a, r) => (w(), z(y(k), C(M(a.$attrs)), {
      default: B(() => [
        I(T(e.dividerText), 1)
      ]),
      _: 1
    }, 16));
  }
});
export {
  N as default
};
