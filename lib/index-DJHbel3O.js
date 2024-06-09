import { i as L, m as O, ao as R, ap as j, _ as P, r as X, c as z, g as F, h as b, w as U, aq as V, ar as q, W as G, P as B, as as J, C as K } from "./index-DGUz0BTe.js";
import { defineComponent as w, computed as m, createVNode as d, shallowRef as Q, watchEffect as Y, Fragment as Z } from "vue";
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
    lightBorderColor: a,
    lightColor: o,
    darkColor: c
  } = l;
  return {
    [`${e.componentCls}-${t}`]: {
      color: r,
      background: o,
      borderColor: a,
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
    componentCls: a
  } = e, o = r - l, c = t - l;
  return {
    // Result
    [a]: P(P({}, X(e)), {
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
      [`&${a}-rtl`]: {
        direction: "rtl"
      },
      "&, a, a:hover": {
        color: e.tagDefaultColor
      },
      [`${a}-close-icon`]: {
        marginInlineStart: c,
        color: e.colorTextDescription,
        fontSize: e.tagIconSize,
        cursor: "pointer",
        transition: `all ${e.motionDurationMid}`,
        "&:hover": {
          color: e.colorTextHeading
        }
      },
      [`&${a}-has-color`]: {
        borderColor: "transparent",
        [`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]: {
          color: e.colorTextLightSolid
        }
      },
      "&-checkable": {
        backgroundColor: "transparent",
        borderColor: "transparent",
        cursor: "pointer",
        [`&:not(${a}-checkable-checked):hover`]: {
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
    [`${a}-borderless`]: {
      borderColor: "transparent",
      background: e.tagBorderlessBg
    }
  };
}, D = L("Tag", (e) => {
  const {
    fontSize: t,
    lineHeight: l,
    lineWidth: r,
    fontSizeIcon: a
  } = e, o = Math.round(t * l), c = e.fontSizeSM, g = o - r * 2, C = e.colorFillAlter, s = e.colorText, n = O(e, {
    tagFontSize: c,
    tagLineHeight: g,
    tagDefaultBg: C,
    tagDefaultColor: s,
    tagIconSize: a - 2 * r,
    tagPaddingHorizontal: 8,
    tagBorderlessBg: e.colorFillTertiary
  });
  return [oe(n), ee(n), h(n, "success", "Success"), h(n, "processing", "Info"), h(n, "error", "Error"), h(n, "warning", "Warning")];
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
}), S = w({
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
      attrs: a
    } = t;
    const {
      prefixCls: o
    } = z("tag", e), [c, g] = D(o), C = (n) => {
      const {
        checked: u
      } = e;
      r("update:checked", !u), r("change", !u), r("click", n);
    }, s = m(() => F(o.value, g.value, {
      [`${o.value}-checkable`]: !0,
      [`${o.value}-checkable-checked`]: e.checked
    }));
    return () => {
      var n;
      return c(d("span", b(b({}, a), {}, {
        class: [s.value, a.class],
        onClick: C
      }), [(n = l.default) === null || n === void 0 ? void 0 : n.call(l)]));
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
}), v = w({
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
      attrs: a
    } = t;
    const {
      prefixCls: o,
      direction: c
    } = z("tag", e), [g, C] = D(o), s = Q(!0);
    process.env.NODE_ENV !== "production" && U(e.visible === void 0, "Tag", '`visible` is deprecated, please use `<Tag v-show="visible" />` instead.'), Y(() => {
      e.visible !== void 0 && (s.value = e.visible);
    });
    const n = (i) => {
      i.stopPropagation(), r("update:visible", !1), r("close", i), !i.defaultPrevented && e.visible === void 0 && (s.value = !1);
    }, u = m(() => V(e.color) || q(e.color)), H = m(() => F(o.value, C.value, {
      [`${o.value}-${e.color}`]: u.value,
      [`${o.value}-has-color`]: e.color && !u.value,
      [`${o.value}-hidden`]: !s.value,
      [`${o.value}-rtl`]: c.value === "rtl",
      [`${o.value}-borderless`]: !e.bordered
    })), M = (i) => {
      r("click", i);
    };
    return () => {
      var i, p, f;
      const {
        icon: N = (i = l.icon) === null || i === void 0 ? void 0 : i.call(l),
        color: $,
        closeIcon: y = (p = l.closeIcon) === null || p === void 0 ? void 0 : p.call(l),
        closable: _ = !1
      } = e, A = () => _ ? y ? d("span", {
        class: `${o.value}-close-icon`,
        onClick: n
      }, [y]) : d(K, {
        class: `${o.value}-close-icon`,
        onClick: n
      }, null) : null, E = {
        backgroundColor: $ && !u.value ? $ : void 0
      }, T = N || null, I = (f = l.default) === null || f === void 0 ? void 0 : f.call(l), W = T ? d(Z, null, [T, d("span", null, [I])]) : I, k = e.onClick !== void 0, x = d("span", b(b({}, a), {}, {
        onClick: M,
        class: [H.value, a.class],
        style: [E, a.style]
      }), [W, A()]);
      return g(k ? d(G, null, {
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
