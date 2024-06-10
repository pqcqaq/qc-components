import { g as L, m as O, b2 as R, b3 as j, c as P, r as X, u as z, f as F, h as b, k as U, b4 as V, b5 as q, W as G, P as B, b6 as J, C as K } from "./index-BAb0--tS.js";
import { defineComponent as D, computed as m, createVNode as d, shallowRef as Q, watchEffect as Y, Fragment as Z } from "vue";
const h = (e, t, l) => {
  const r = R(l);
  return {
    [`${e.componentCls}-${t}`]: {
      color: e[`color${l}`],
      background: e[`color${r}Bg`],
      borderColor: e[`color${r}Border`],
      [`&${e.componentCls}-borderless`]: {
        borderColor: "transparent"
      }
    }
  };
}, ee = (e) => j(e, (t, l) => {
  let {
    textColor: r,
    lightBorderColor: n,
    lightColor: o,
    darkColor: c
  } = l;
  return {
    [`${e.componentCls}-${t}`]: {
      color: r,
      background: o,
      borderColor: n,
      // Inverse color
      "&-inverse": {
        color: e.colorTextLightSolid,
        background: c,
        borderColor: c
      },
      [`&${e.componentCls}-borderless`]: {
        borderColor: "transparent"
      }
    }
  };
}), oe = (e) => {
  const {
    paddingXXS: t,
    lineWidth: l,
    tagPaddingHorizontal: r,
    componentCls: n
  } = e, o = r - l, c = t - l;
  return {
    // Result
    [n]: P(P({}, X(e)), {
      display: "inline-block",
      height: "auto",
      marginInlineEnd: e.marginXS,
      paddingInline: o,
      fontSize: e.tagFontSize,
      lineHeight: `${e.tagLineHeight}px`,
      whiteSpace: "nowrap",
      background: e.tagDefaultBg,
      border: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,
      borderRadius: e.borderRadiusSM,
      opacity: 1,
      transition: `all ${e.motionDurationMid}`,
      textAlign: "start",
      // RTL
      [`&${n}-rtl`]: {
        direction: "rtl"
      },
      "&, a, a:hover": {
        color: e.tagDefaultColor
      },
      [`${n}-close-icon`]: {
        marginInlineStart: c,
        color: e.colorTextDescription,
        fontSize: e.tagIconSize,
        cursor: "pointer",
        transition: `all ${e.motionDurationMid}`,
        "&:hover": {
          color: e.colorTextHeading
        }
      },
      [`&${n}-has-color`]: {
        borderColor: "transparent",
        [`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]: {
          color: e.colorTextLightSolid
        }
      },
      "&-checkable": {
        backgroundColor: "transparent",
        borderColor: "transparent",
        cursor: "pointer",
        [`&:not(${n}-checkable-checked):hover`]: {
          color: e.colorPrimary,
          backgroundColor: e.colorFillSecondary
        },
        "&:active, &-checked": {
          color: e.colorTextLightSolid
        },
        "&-checked": {
          backgroundColor: e.colorPrimary,
          "&:hover": {
            backgroundColor: e.colorPrimaryHover
          }
        },
        "&:active": {
          backgroundColor: e.colorPrimaryActive
        }
      },
      "&-hidden": {
        display: "none"
      },
      // To ensure that a space will be placed between character and `Icon`.
      [`> ${e.iconCls} + span, > span + ${e.iconCls}`]: {
        marginInlineStart: o
      }
    }),
    [`${n}-borderless`]: {
      borderColor: "transparent",
      background: e.tagBorderlessBg
    }
  };
}, H = L("Tag", (e) => {
  const {
    fontSize: t,
    lineHeight: l,
    lineWidth: r,
    fontSizeIcon: n
  } = e, o = Math.round(t * l), c = e.fontSizeSM, g = o - r * 2, C = e.colorFillAlter, s = e.colorText, a = O(e, {
    tagFontSize: c,
    tagLineHeight: g,
    tagDefaultBg: C,
    tagDefaultColor: s,
    tagIconSize: n - 2 * r,
    tagPaddingHorizontal: 8,
    tagBorderlessBg: e.colorFillTertiary
  });
  return [oe(a), ee(a), h(a, "success", "Success"), h(a, "processing", "Info"), h(a, "error", "Error"), h(a, "warning", "Warning")];
}), le = () => ({
  prefixCls: String,
  checked: {
    type: Boolean,
    default: void 0
  },
  onChange: {
    type: Function
  },
  onClick: {
    type: Function
  },
  "onUpdate:checked": Function
}), S = D({
  compatConfig: {
    MODE: 3
  },
  name: "ACheckableTag",
  inheritAttrs: !1,
  props: le(),
  // emits: ['update:checked', 'change', 'click'],
  setup(e, t) {
    let {
      slots: l,
      emit: r,
      attrs: n
    } = t;
    const {
      prefixCls: o
    } = z("tag", e), [c, g] = H(o), C = (a) => {
      const {
        checked: u
      } = e;
      r("update:checked", !u), r("change", !u), r("click", a);
    }, s = m(() => F(o.value, g.value, {
      [`${o.value}-checkable`]: !0,
      [`${o.value}-checkable-checked`]: e.checked
    }));
    return () => {
      var a;
      return c(d("span", b(b({}, n), {}, {
        class: [s.value, n.class],
        onClick: C
      }), [(a = l.default) === null || a === void 0 ? void 0 : a.call(l)]));
    };
  }
}), re = () => ({
  prefixCls: String,
  color: {
    type: String
  },
  closable: {
    type: Boolean,
    default: !1
  },
  closeIcon: B.any,
  /** @deprecated `visible` will be removed in next major version. */
  visible: {
    type: Boolean,
    default: void 0
  },
  onClose: {
    type: Function
  },
  onClick: J(),
  "onUpdate:visible": Function,
  icon: B.any,
  bordered: {
    type: Boolean,
    default: !0
  }
}), v = D({
  compatConfig: {
    MODE: 3
  },
  name: "ATag",
  inheritAttrs: !1,
  props: re(),
  // emits: ['update:visible', 'close'],
  slots: Object,
  setup(e, t) {
    let {
      slots: l,
      emit: r,
      attrs: n
    } = t;
    const {
      prefixCls: o,
      direction: c
    } = z("tag", e), [g, C] = H(o), s = Q(!0);
    process.env.NODE_ENV !== "production" && U(e.visible === void 0, "Tag", '`visible` is deprecated, please use `<Tag v-show="visible" />` instead.'), Y(() => {
      e.visible !== void 0 && (s.value = e.visible);
    });
    const a = (i) => {
      i.stopPropagation(), r("update:visible", !1), r("close", i), !i.defaultPrevented && e.visible === void 0 && (s.value = !1);
    }, u = m(() => V(e.color) || q(e.color)), w = m(() => F(o.value, C.value, {
      [`${o.value}-${e.color}`]: u.value,
      [`${o.value}-has-color`]: e.color && !u.value,
      [`${o.value}-hidden`]: !s.value,
      [`${o.value}-rtl`]: c.value === "rtl",
      [`${o.value}-borderless`]: !e.bordered
    })), M = (i) => {
      r("click", i);
    };
    return () => {
      var i, f, p;
      const {
        icon: N = (i = l.icon) === null || i === void 0 ? void 0 : i.call(l),
        color: $,
        closeIcon: y = (f = l.closeIcon) === null || f === void 0 ? void 0 : f.call(l),
        closable: k = !1
      } = e, A = () => k ? y ? d("span", {
        class: `${o.value}-close-icon`,
        onClick: a
      }, [y]) : d(K, {
        class: `${o.value}-close-icon`,
        onClick: a
      }, null) : null, E = {
        backgroundColor: $ && !u.value ? $ : void 0
      }, T = N || null, I = (p = l.default) === null || p === void 0 ? void 0 : p.call(l), W = T ? d(Z, null, [T, d("span", null, [I])]) : I, _ = e.onClick !== void 0, x = d("span", b(b({}, n), {}, {
        onClick: M,
        class: [w.value, n.class],
        style: [E, n.style]
      }), [W, A()]);
      return g(_ ? d(G, null, {
        default: () => [x]
      }) : x);
    };
  }
});
v.CheckableTag = S;
v.install = function(e) {
  return e.component(v.name, v), e.component(S.name, S), e;
};
export {
  v as T
};
