import { createVNode as b, defineComponent as V, computed as q, ref as J, reactive as Q, watch as Y, onMounted as Z, openBlock as k, createBlock as ee, unref as te, normalizeProps as L, guardReactiveProps as M, createSlots as ne, renderList as le, withCtx as ae, renderSlot as oe } from "vue";
import { d as re, P as R, g as se, m as ie, c as x, r as ce, w as ue, i as de, u as fe, e as ve, f as me, h as T, K as D, T as he, j as pe } from "./index-DyhArEBu.js";
import { u as ge } from "./useRefs-CuWy3iND.js";
function Se(e) {
  let t = e.scrollX;
  const a = "scrollLeft";
  if (typeof t != "number") {
    const s = e.document;
    t = s.documentElement[a], typeof t != "number" && (t = s.body[a]);
  }
  return t;
}
function be(e) {
  let t, a;
  const s = e.ownerDocument, {
    body: i
  } = s, y = s && s.documentElement, h = e.getBoundingClientRect();
  return t = h.left, a = h.top, t -= y.clientLeft || i.clientLeft || 0, a -= y.clientTop || i.clientTop || 0, {
    left: t,
    top: a
  };
}
function ye(e) {
  const t = be(e), a = e.ownerDocument, s = a.defaultView || a.parentWindow;
  return t.left += Se(s), t.left;
}
var Ce = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" } }] }, name: "star", theme: "filled" };
function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = arguments[t] != null ? Object(arguments[t]) : {}, s = Object.keys(a);
    typeof Object.getOwnPropertySymbols == "function" && (s = s.concat(Object.getOwnPropertySymbols(a).filter(function(i) {
      return Object.getOwnPropertyDescriptor(a, i).enumerable;
    }))), s.forEach(function(i) {
      we(e, i, a[i]);
    });
  }
  return e;
}
function we(e, t, a) {
  return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = a, e;
}
var B = function(t, a) {
  var s = E({}, t, a.attrs);
  return b(re, E({}, s, {
    icon: Ce
  }), null);
};
B.displayName = "StarFilled";
B.inheritAttrs = !1;
const $e = {
  value: Number,
  index: Number,
  prefixCls: String,
  allowHalf: {
    type: Boolean,
    default: void 0
  },
  disabled: {
    type: Boolean,
    default: void 0
  },
  character: R.any,
  characterRender: Function,
  focused: {
    type: Boolean,
    default: void 0
  },
  count: Number,
  onClick: Function,
  onHover: Function
}, xe = V({
  compatConfig: {
    MODE: 3
  },
  name: "Star",
  inheritAttrs: !1,
  props: $e,
  emits: ["hover", "click"],
  setup(e, t) {
    let {
      emit: a
    } = t;
    const s = (o) => {
      const {
        index: d
      } = e;
      a("hover", o, d);
    }, i = (o) => {
      const {
        index: d
      } = e;
      a("click", o, d);
    }, y = (o) => {
      const {
        index: d
      } = e;
      o.keyCode === 13 && a("click", o, d);
    }, h = q(() => {
      const {
        prefixCls: o,
        index: d,
        value: p,
        allowHalf: g,
        focused: v
      } = e, S = d + 1;
      let m = o;
      return p === 0 && d === 0 && v ? m += ` ${o}-focused` : g && p + 0.5 >= S && p < S ? (m += ` ${o}-half ${o}-active`, v && (m += ` ${o}-focused`)) : (m += S <= p ? ` ${o}-full` : ` ${o}-zero`, S === p && v && (m += ` ${o}-focused`)), m;
    });
    return () => {
      const {
        disabled: o,
        prefixCls: d,
        characterRender: p,
        character: g,
        index: v,
        count: S,
        value: m
      } = e, n = typeof g == "function" ? g({
        disabled: o,
        prefixCls: d,
        index: v,
        count: S,
        value: m
      }) : g;
      let C = b("li", {
        class: h.value
      }, [b("div", {
        onClick: o ? null : i,
        onKeydown: o ? null : y,
        onMousemove: o ? null : s,
        role: "radio",
        "aria-checked": m > v ? "true" : "false",
        "aria-posinset": v + 1,
        "aria-setsize": S,
        tabindex: o ? -1 : 0
      }, [b("div", {
        class: `${d}-first`
      }, [n]), b("div", {
        class: `${d}-second`
      }, [n])])]);
      return p && (C = p(C, e)), C;
    };
  }
}), Re = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-star`]: {
      position: "relative",
      display: "inline-block",
      color: "inherit",
      cursor: "pointer",
      "&:not(:last-child)": {
        marginInlineEnd: e.marginXS
      },
      "> div": {
        transition: `all ${e.motionDurationMid}, outline 0s`,
        "&:hover": {
          transform: e.rateStarHoverScale
        },
        "&:focus": {
          outline: 0
        },
        "&:focus-visible": {
          outline: `${e.lineWidth}px dashed ${e.rateStarColor}`,
          transform: e.rateStarHoverScale
        }
      },
      "&-first, &-second": {
        color: e.defaultColor,
        transition: `all ${e.motionDurationMid}`,
        userSelect: "none",
        [e.iconCls]: {
          verticalAlign: "middle"
        }
      },
      "&-first": {
        position: "absolute",
        top: 0,
        insetInlineStart: 0,
        width: "50%",
        height: "100%",
        overflow: "hidden",
        opacity: 0
      },
      [`&-half ${t}-star-first, &-half ${t}-star-second`]: {
        opacity: 1
      },
      [`&-half ${t}-star-first, &-full ${t}-star-second`]: {
        color: "inherit"
      }
    }
  };
}, Fe = (e) => ({
  [`&-rtl${e.componentCls}`]: {
    direction: "rtl"
  }
}), He = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: x(x(x(x(x({}, ce(e)), {
      display: "inline-block",
      margin: 0,
      padding: 0,
      color: e.rateStarColor,
      fontSize: e.rateStarSize,
      lineHeight: "unset",
      listStyle: "none",
      outline: "none",
      // disable styles
      [`&-disabled${t} ${t}-star`]: {
        cursor: "default",
        "&:hover": {
          transform: "scale(1)"
        }
      }
    }), Re(e)), {
      // text styles
      [`+ ${t}-text`]: {
        display: "inline-block",
        marginInlineStart: e.marginXS,
        fontSize: e.fontSize
      }
    }), Fe(e))
  };
}, De = se("Rate", (e) => {
  const {
    colorFillContent: t
  } = e, a = ie(e, {
    rateStarColor: e["yellow-6"],
    rateStarSize: e.controlHeightLG * 0.5,
    rateStarHoverScale: "scale(1.1)",
    defaultColor: t
  });
  return [He(a)];
}), Ve = () => ({
  prefixCls: String,
  count: Number,
  value: Number,
  allowHalf: {
    type: Boolean,
    default: void 0
  },
  allowClear: {
    type: Boolean,
    default: void 0
  },
  tooltips: Array,
  disabled: {
    type: Boolean,
    default: void 0
  },
  character: R.any,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  tabindex: R.oneOfType([R.number, R.string]),
  direction: String,
  id: String,
  onChange: Function,
  onHoverChange: Function,
  "onUpdate:value": Function,
  onFocus: Function,
  onBlur: Function,
  onKeydown: Function
}), Be = V({
  compatConfig: {
    MODE: 3
  },
  name: "ARate",
  inheritAttrs: !1,
  props: de(Ve(), {
    value: 0,
    count: 5,
    allowHalf: !1,
    allowClear: !0,
    tabindex: 0,
    direction: "ltr"
  }),
  // emits: ['hoverChange', 'update:value', 'change', 'focus', 'blur', 'keydown'],
  setup(e, t) {
    let {
      slots: a,
      attrs: s,
      emit: i,
      expose: y
    } = t;
    const {
      prefixCls: h,
      direction: o
    } = fe("rate", e), [d, p] = De(h), g = ve(), v = J(), [S, m] = ge(), n = Q({
      value: e.value,
      focused: !1,
      cleanedValue: null,
      hoverValue: void 0
    });
    Y(() => e.value, () => {
      n.value = e.value;
    });
    const C = (l) => pe(m.value.get(l)), O = (l, c) => {
      const r = o.value === "rtl";
      let u = l + 1;
      if (e.allowHalf) {
        const f = C(l), F = ye(f), H = f.clientWidth;
        (r && c - F > H / 2 || !r && c - F < H / 2) && (u -= 0.5);
      }
      return u;
    }, w = (l) => {
      e.value === void 0 && (n.value = l), i("update:value", l), i("change", l), g.onFieldChange();
    }, _ = (l, c) => {
      const r = O(c, l.pageX);
      r !== n.cleanedValue && (n.hoverValue = r, n.cleanedValue = null), i("hoverChange", r);
    }, N = () => {
      n.hoverValue = void 0, n.cleanedValue = null, i("hoverChange", void 0);
    }, z = (l, c) => {
      const {
        allowClear: r
      } = e, u = O(c, l.pageX);
      let f = !1;
      r && (f = u === n.value), N(), w(f ? 0 : u), n.cleanedValue = f ? u : null;
    }, j = (l) => {
      n.focused = !0, i("focus", l);
    }, A = (l) => {
      n.focused = !1, i("blur", l), g.onFieldBlur();
    }, K = (l) => {
      const {
        keyCode: c
      } = l, {
        count: r,
        allowHalf: u
      } = e, f = o.value === "rtl";
      c === D.RIGHT && n.value < r && !f ? (u ? n.value += 0.5 : n.value += 1, w(n.value), l.preventDefault()) : c === D.LEFT && n.value > 0 && !f || c === D.RIGHT && n.value > 0 && f ? (u ? n.value -= 0.5 : n.value -= 1, w(n.value), l.preventDefault()) : c === D.LEFT && n.value < r && f && (u ? n.value += 0.5 : n.value += 1, w(n.value), l.preventDefault()), i("keydown", l);
    }, P = () => {
      e.disabled || v.value.focus();
    };
    y({
      focus: P,
      blur: () => {
        e.disabled || v.value.blur();
      }
    }), Z(() => {
      const {
        autofocus: l,
        disabled: c
      } = e;
      l && !c && P();
    });
    const X = (l, c) => {
      let {
        index: r
      } = c;
      const {
        tooltips: u
      } = e;
      return u ? b(he, {
        title: u[r]
      }, {
        default: () => [l]
      }) : l;
    };
    return () => {
      const {
        count: l,
        allowHalf: c,
        disabled: r,
        tabindex: u,
        id: f = g.id.value
      } = e, {
        class: F,
        style: H
      } = s, I = [], G = r ? `${h.value}-disabled` : "", W = e.character || a.character || (() => b(B, null, null));
      for (let $ = 0; $ < l; $++)
        I.push(b(xe, {
          ref: S($),
          key: $,
          index: $,
          count: l,
          disabled: r,
          prefixCls: `${h.value}-star`,
          allowHalf: c,
          value: n.hoverValue === void 0 ? n.value : n.hoverValue,
          onClick: z,
          onHover: _,
          character: W,
          characterRender: X,
          focused: n.focused
        }, null));
      const U = me(h.value, G, F, {
        [p.value]: !0,
        [`${h.value}-rtl`]: o.value === "rtl"
      });
      return d(b("ul", T(T({}, s), {}, {
        id: f,
        class: U,
        style: H,
        onMouseleave: r ? null : N,
        tabindex: r ? -1 : u,
        onFocus: r ? null : j,
        onBlur: r ? null : A,
        onKeydown: r ? null : K,
        ref: v,
        role: "radiogroup"
      }), [I]));
    };
  }
}), Oe = ue(Be), Me = /* @__PURE__ */ V({
  __name: "Rate",
  setup(e) {
    return (t, a) => (k(), ee(te(Oe), L(M(t.$attrs)), ne({ _: 2 }, [
      le(t.$slots, (s, i) => ({
        name: i,
        fn: ae((y) => [
          oe(t.$slots, i, L(M(y || {})))
        ])
      }))
    ]), 1040));
  }
});
export {
  Me as default
};
