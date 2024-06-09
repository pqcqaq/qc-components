import { defineComponent as B, shallowRef as X, watch as me, onBeforeUnmount as ge, createVNode as m, isVNode as ie, cloneVNode as ae, inject as Pe, computed as A, ref as J, reactive as De, watchEffect as Te, provide as Me, toRef as re, onUpdated as ze, nextTick as Ee, openBlock as le, createBlock as Ne, unref as Fe, normalizeProps as Le, guardReactiveProps as _e, withCtx as Be, createElementBlock as Ae, Fragment as Re, renderList as je, renderSlot as He } from "vue";
import { i as ve, m as Xe, _ as d, r as k, U as he, k as te, c as Se, h as K, a1 as Ve, P as N, K as Ke, ai as Ge, J as We, a as Ue, g as ee, R as Ye, G as Je, a4 as qe, A as Qe, e as se, u as Ze, F as ke, w as et, at as tt } from "./index-DGUz0BTe.js";
import { K as E } from "./KeyCode-n3eOOGSl.js";
import { M as nt, a as q, u as ot } from "./index-BvDYji6c.js";
import { o as be } from "./omit-COyW2GJT.js";
import { B as it } from "./BaseInput-CNspKwab.js";
import { g as at, a as ue } from "./statusUtils-FU9aJEap.js";
import { i as rt, b as lt, c as st, d as ut, g as ct, e as dt } from "./index-CrosLSpq.js";
function pt(e, o, i) {
  var t = i || {}, n = t.noTrailing, c = n === void 0 ? !1 : n, r = t.noLeading, l = r === void 0 ? !1 : r, p = t.debounceMode, a = p === void 0 ? void 0 : p, f, P = !1, y = 0;
  function g() {
    f && clearTimeout(f);
  }
  function C(b) {
    var $ = b || {}, I = $.upcomingOnly, T = I === void 0 ? !1 : I;
    g(), P = !T;
  }
  function w() {
    for (var b = arguments.length, $ = new Array(b), I = 0; I < b; I++)
      $[I] = arguments[I];
    var T = this, x = Date.now() - y;
    if (P)
      return;
    function D() {
      y = Date.now(), o.apply(T, $);
    }
    function O() {
      f = void 0;
    }
    !l && a && !f && D(), g(), a === void 0 && x > e ? l ? (y = Date.now(), c || (f = setTimeout(a ? O : D, e))) : D() : c !== !0 && (f = setTimeout(a ? O : D, a === void 0 ? e - x : e));
  }
  return w.cancel = C, w;
}
function ft(e, o, i) {
  var t = {}, n = t.atBegin, c = n === void 0 ? !1 : n;
  return pt(e, o, {
    debounceMode: c !== !1
  });
}
const mt = new he("antSpinMove", {
  to: {
    opacity: 1
  }
}), gt = new he("antRotate", {
  to: {
    transform: "rotate(405deg)"
  }
}), vt = (e) => ({
  [`${e.componentCls}`]: d(d({}, k(e)), {
    position: "absolute",
    display: "none",
    color: e.colorPrimary,
    textAlign: "center",
    verticalAlign: "middle",
    opacity: 0,
    transition: `transform ${e.motionDurationSlow} ${e.motionEaseInOutCirc}`,
    "&-spinning": {
      position: "static",
      display: "inline-block",
      opacity: 1
    },
    "&-nested-loading": {
      position: "relative",
      [`> div > ${e.componentCls}`]: {
        position: "absolute",
        top: 0,
        insetInlineStart: 0,
        zIndex: 4,
        display: "block",
        width: "100%",
        height: "100%",
        maxHeight: e.contentHeight,
        [`${e.componentCls}-dot`]: {
          position: "absolute",
          top: "50%",
          insetInlineStart: "50%",
          margin: -e.spinDotSize / 2
        },
        [`${e.componentCls}-text`]: {
          position: "absolute",
          top: "50%",
          width: "100%",
          paddingTop: (e.spinDotSize - e.fontSize) / 2 + 2,
          textShadow: `0 1px 2px ${e.colorBgContainer}`
          // FIXME: shadow
        },
        [`&${e.componentCls}-show-text ${e.componentCls}-dot`]: {
          marginTop: -(e.spinDotSize / 2) - 10
        },
        "&-sm": {
          [`${e.componentCls}-dot`]: {
            margin: -e.spinDotSizeSM / 2
          },
          [`${e.componentCls}-text`]: {
            paddingTop: (e.spinDotSizeSM - e.fontSize) / 2 + 2
          },
          [`&${e.componentCls}-show-text ${e.componentCls}-dot`]: {
            marginTop: -(e.spinDotSizeSM / 2) - 10
          }
        },
        "&-lg": {
          [`${e.componentCls}-dot`]: {
            margin: -(e.spinDotSizeLG / 2)
          },
          [`${e.componentCls}-text`]: {
            paddingTop: (e.spinDotSizeLG - e.fontSize) / 2 + 2
          },
          [`&${e.componentCls}-show-text ${e.componentCls}-dot`]: {
            marginTop: -(e.spinDotSizeLG / 2) - 10
          }
        }
      },
      [`${e.componentCls}-container`]: {
        position: "relative",
        transition: `opacity ${e.motionDurationSlow}`,
        "&::after": {
          position: "absolute",
          top: 0,
          insetInlineEnd: 0,
          bottom: 0,
          insetInlineStart: 0,
          zIndex: 10,
          width: "100%",
          height: "100%",
          background: e.colorBgContainer,
          opacity: 0,
          transition: `all ${e.motionDurationSlow}`,
          content: '""',
          pointerEvents: "none"
        }
      },
      [`${e.componentCls}-blur`]: {
        clear: "both",
        opacity: 0.5,
        userSelect: "none",
        pointerEvents: "none",
        "&::after": {
          opacity: 0.4,
          pointerEvents: "auto"
        }
      }
    },
    // tip
    // ------------------------------
    "&-tip": {
      color: e.spinDotDefault
    },
    // dots
    // ------------------------------
    [`${e.componentCls}-dot`]: {
      position: "relative",
      display: "inline-block",
      fontSize: e.spinDotSize,
      width: "1em",
      height: "1em",
      "&-item": {
        position: "absolute",
        display: "block",
        width: (e.spinDotSize - e.marginXXS / 2) / 2,
        height: (e.spinDotSize - e.marginXXS / 2) / 2,
        backgroundColor: e.colorPrimary,
        borderRadius: "100%",
        transform: "scale(0.75)",
        transformOrigin: "50% 50%",
        opacity: 0.3,
        animationName: mt,
        animationDuration: "1s",
        animationIterationCount: "infinite",
        animationTimingFunction: "linear",
        animationDirection: "alternate",
        "&:nth-child(1)": {
          top: 0,
          insetInlineStart: 0
        },
        "&:nth-child(2)": {
          top: 0,
          insetInlineEnd: 0,
          animationDelay: "0.4s"
        },
        "&:nth-child(3)": {
          insetInlineEnd: 0,
          bottom: 0,
          animationDelay: "0.8s"
        },
        "&:nth-child(4)": {
          bottom: 0,
          insetInlineStart: 0,
          animationDelay: "1.2s"
        }
      },
      "&-spin": {
        transform: "rotate(45deg)",
        animationName: gt,
        animationDuration: "1.2s",
        animationIterationCount: "infinite",
        animationTimingFunction: "linear"
      }
    },
    // Sizes
    // ------------------------------
    // small
    [`&-sm ${e.componentCls}-dot`]: {
      fontSize: e.spinDotSizeSM,
      i: {
        width: (e.spinDotSizeSM - e.marginXXS / 2) / 2,
        height: (e.spinDotSizeSM - e.marginXXS / 2) / 2
      }
    },
    // large
    [`&-lg ${e.componentCls}-dot`]: {
      fontSize: e.spinDotSizeLG,
      i: {
        width: (e.spinDotSizeLG - e.marginXXS) / 2,
        height: (e.spinDotSizeLG - e.marginXXS) / 2
      }
    },
    [`&${e.componentCls}-show-text ${e.componentCls}-text`]: {
      display: "block"
    }
  })
}), ht = ve("Spin", (e) => {
  const o = Xe(e, {
    spinDotDefault: e.colorTextDescription,
    spinDotSize: e.controlHeightLG / 2,
    spinDotSizeSM: e.controlHeightLG * 0.35,
    spinDotSizeLG: e.controlHeight
  });
  return [vt(o)];
}, {
  contentHeight: 400
});
var St = function(e, o) {
  var i = {};
  for (var t in e)
    Object.prototype.hasOwnProperty.call(e, t) && o.indexOf(t) < 0 && (i[t] = e[t]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, t = Object.getOwnPropertySymbols(e); n < t.length; n++)
      o.indexOf(t[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[n]) && (i[t[n]] = e[t[n]]);
  return i;
};
const bt = () => ({
  prefixCls: String,
  spinning: {
    type: Boolean,
    default: void 0
  },
  size: String,
  wrapperClassName: String,
  tip: N.any,
  delay: Number,
  indicator: N.any
});
let Y = null;
function xt(e, o) {
  return !!e && !!o && !isNaN(Number(o));
}
function yt(e) {
  const o = e.indicator;
  Y = typeof o == "function" ? o : () => m(o, null, null);
}
const V = B({
  compatConfig: {
    MODE: 3
  },
  name: "ASpin",
  inheritAttrs: !1,
  props: te(bt(), {
    size: "default",
    spinning: !0,
    wrapperClassName: ""
  }),
  setup(e, o) {
    let {
      attrs: i,
      slots: t
    } = o;
    const {
      prefixCls: n,
      size: c,
      direction: r
    } = Se("spin", e), [l, p] = ht(n), a = X(e.spinning && !xt(e.spinning, e.delay));
    let f;
    return me([() => e.spinning, () => e.delay], () => {
      f == null || f.cancel(), f = ft(e.delay, () => {
        a.value = e.spinning;
      }), f == null || f();
    }, {
      immediate: !0,
      flush: "post"
    }), ge(() => {
      f == null || f.cancel();
    }), () => {
      var P, y;
      const {
        class: g
      } = i, C = St(i, ["class"]), {
        tip: w = (P = t.tip) === null || P === void 0 ? void 0 : P.call(t)
      } = e, b = (y = t.default) === null || y === void 0 ? void 0 : y.call(t), $ = {
        [p.value]: !0,
        [n.value]: !0,
        [`${n.value}-sm`]: c.value === "small",
        [`${n.value}-lg`]: c.value === "large",
        [`${n.value}-spinning`]: a.value,
        [`${n.value}-show-text`]: !!w,
        [`${n.value}-rtl`]: r.value === "rtl",
        [g]: !!g
      };
      function I(x) {
        const D = `${x}-dot`;
        let O = Ke(t, e, "indicator");
        return O === null ? null : (Array.isArray(O) && (O = O.length === 1 ? O[0] : O), ie(O) ? ae(O, {
          class: D
        }) : Y && ie(Y()) ? ae(Y(), {
          class: D
        }) : m("span", {
          class: `${D} ${x}-dot-spin`
        }, [m("i", {
          class: `${x}-dot-item`
        }, null), m("i", {
          class: `${x}-dot-item`
        }, null), m("i", {
          class: `${x}-dot-item`
        }, null), m("i", {
          class: `${x}-dot-item`
        }, null)]));
      }
      const T = m("div", K(K({}, C), {}, {
        class: $,
        "aria-live": "polite",
        "aria-busy": a.value
      }), [I(n.value), w ? m("div", {
        class: `${n.value}-text`
      }, [w]) : null]);
      if (b && Ve(b).length) {
        const x = {
          [`${n.value}-container`]: !0,
          [`${n.value}-blur`]: a.value
        };
        return l(m("div", {
          class: [`${n.value}-nested-loading`, e.wrapperClassName, p.value]
        }, [a.value && m("div", {
          key: "loading"
        }, [T]), m("div", {
          class: x,
          key: "container"
        }, [b])]));
      }
      return l(T);
    };
  }
});
V.setDefaultIndicator = yt;
V.install = function(e) {
  return e.component(V.name, V), e;
};
function Ct(e) {
  const {
    selectionStart: o
  } = e;
  return e.value.slice(0, o);
}
function wt(e) {
  let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return (Array.isArray(o) ? o : [o]).reduce((t, n) => {
    const c = e.lastIndexOf(n);
    return c > t.location ? {
      location: c,
      prefix: n
    } : t;
  }, {
    location: -1,
    prefix: ""
  });
}
function ce(e) {
  return (e || "").toLowerCase();
}
function $t(e, o, i) {
  const t = e[0];
  if (!t || t === i)
    return e;
  let n = e;
  const c = o.length;
  for (let r = 0; r < c; r += 1)
    if (ce(n[r]) !== ce(o[r])) {
      n = n.slice(r);
      break;
    } else
      r === c - 1 && (n = n.slice(c));
  return n;
}
function It(e, o) {
  const {
    measureLocation: i,
    prefix: t,
    targetText: n,
    selectionStart: c,
    split: r
  } = o;
  let l = e.slice(0, i);
  l[l.length - r.length] === r && (l = l.slice(0, l.length - r.length)), l && (l = `${l}${r}`);
  let p = $t(e.slice(c), n.slice(c - i - t.length), r);
  p.slice(0, r.length) === r && (p = p.slice(r.length));
  const a = `${l}${t}${n}${r}`;
  return {
    text: `${a}${p}`,
    selectionLocation: a.length
  };
}
function Ot(e, o) {
  e.setSelectionRange(o, o), e.blur(), e.focus();
}
function Pt(e, o) {
  const {
    split: i
  } = o;
  return !i || e.indexOf(i) === -1;
}
function Dt(e, o) {
  let {
    value: i = ""
  } = o;
  const t = e.toLowerCase();
  return i.toLowerCase().indexOf(t) !== -1;
}
const xe = Symbol("MentionsContextKey");
function Tt() {
}
const Mt = B({
  compatConfig: {
    MODE: 3
  },
  name: "DropdownMenu",
  props: {
    prefixCls: String,
    options: {
      type: Array,
      default: () => []
    }
  },
  setup(e, o) {
    let {
      slots: i
    } = o;
    const {
      activeIndex: t,
      setActiveIndex: n,
      selectOption: c,
      onFocus: r = Tt,
      loading: l
    } = Pe(xe, {
      activeIndex: X(),
      loading: X(!1)
    });
    let p;
    const a = (f) => {
      clearTimeout(p), p = setTimeout(() => {
        r(f);
      });
    };
    return ge(() => {
      clearTimeout(p);
    }), () => {
      var f;
      const {
        prefixCls: P,
        options: y
      } = e, g = y[t.value] || {};
      return m(nt, {
        prefixCls: `${P}-menu`,
        activeKey: g.value,
        onSelect: (C) => {
          let {
            key: w
          } = C;
          const b = y.find(($) => {
            let {
              value: I
            } = $;
            return I === w;
          });
          c(b);
        },
        onMousedown: a
      }, {
        default: () => [!l.value && y.map((C, w) => {
          var b, $;
          const {
            value: I,
            disabled: T,
            label: x = C.value,
            class: D,
            style: O
          } = C;
          return m(q, {
            key: I,
            disabled: T,
            onMouseenter: () => {
              n(w);
            },
            class: D,
            style: O
          }, {
            default: () => [($ = (b = i.option) === null || b === void 0 ? void 0 : b.call(i, C)) !== null && $ !== void 0 ? $ : typeof x == "function" ? x(C) : x]
          });
        }), !l.value && y.length === 0 ? m(q, {
          key: "notFoundContent",
          disabled: !0
        }, {
          default: () => [(f = i.notFoundContent) === null || f === void 0 ? void 0 : f.call(i)]
        }) : null, l.value && m(q, {
          key: "loading",
          disabled: !0
        }, {
          default: () => [m(V, {
            size: "small"
          }, null)]
        })]
      });
    };
  }
}), zt = {
  bottomRight: {
    points: ["tl", "br"],
    offset: [0, 4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    }
  },
  bottomLeft: {
    points: ["tr", "bl"],
    offset: [0, 4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    }
  },
  topRight: {
    points: ["bl", "tr"],
    offset: [0, -4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    }
  },
  topLeft: {
    points: ["br", "tl"],
    offset: [0, -4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    }
  }
}, Et = B({
  compatConfig: {
    MODE: 3
  },
  name: "KeywordTrigger",
  props: {
    loading: {
      type: Boolean,
      default: void 0
    },
    options: {
      type: Array,
      default: () => []
    },
    prefixCls: String,
    placement: String,
    visible: {
      type: Boolean,
      default: void 0
    },
    transitionName: String,
    getPopupContainer: Function,
    direction: String,
    dropdownClassName: String
  },
  setup(e, o) {
    let {
      slots: i
    } = o;
    const t = () => `${e.prefixCls}-dropdown`, n = () => {
      const {
        options: r
      } = e;
      return m(Mt, {
        prefixCls: t(),
        options: r
      }, {
        notFoundContent: i.notFoundContent,
        option: i.option
      });
    }, c = A(() => {
      const {
        placement: r,
        direction: l
      } = e;
      let p = "topRight";
      return l === "rtl" ? p = r === "top" ? "topLeft" : "bottomLeft" : p = r === "top" ? "topRight" : "bottomRight", p;
    });
    return () => {
      const {
        visible: r,
        transitionName: l,
        getPopupContainer: p
      } = e;
      return m(Ge, {
        prefixCls: t(),
        popupVisible: r,
        popup: n(),
        popupClassName: e.dropdownClassName,
        popupPlacement: c.value,
        popupTransitionName: l,
        builtinPlacements: zt,
        getPopupContainer: p
      }, {
        default: i.default
      });
    };
  }
}), Nt = We("top", "bottom"), ye = {
  autofocus: {
    type: Boolean,
    default: void 0
  },
  prefix: N.oneOfType([N.string, N.arrayOf(N.string)]),
  prefixCls: String,
  value: String,
  disabled: {
    type: Boolean,
    default: void 0
  },
  split: String,
  transitionName: String,
  placement: N.oneOf(Nt),
  character: N.any,
  characterRender: Function,
  filterOption: {
    type: [Boolean, Function]
  },
  validateSearch: Function,
  getPopupContainer: {
    type: Function
  },
  options: Ue(),
  loading: {
    type: Boolean,
    default: void 0
  },
  rows: [Number, String],
  direction: {
    type: String
  }
}, Ce = d(d({}, ye), {
  dropdownClassName: String
}), we = {
  prefix: "@",
  split: " ",
  rows: 1,
  validateSearch: Pt,
  filterOption: () => Dt
};
te(Ce, we);
var de = function(e, o) {
  var i = {};
  for (var t in e)
    Object.prototype.hasOwnProperty.call(e, t) && o.indexOf(t) < 0 && (i[t] = e[t]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, t = Object.getOwnPropertySymbols(e); n < t.length; n++)
      o.indexOf(t[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[n]) && (i[t[n]] = e[t[n]]);
  return i;
};
function pe() {
}
const Ft = B({
  compatConfig: {
    MODE: 3
  },
  name: "Mentions",
  inheritAttrs: !1,
  props: te(Ce, we),
  emits: ["change", "select", "search", "focus", "blur", "pressenter"],
  setup(e, o) {
    let {
      emit: i,
      attrs: t,
      expose: n,
      slots: c
    } = o;
    const r = J(null), l = J(null), p = J(), a = De({
      value: e.value || "",
      measuring: !1,
      measureLocation: 0,
      measureText: null,
      measurePrefix: "",
      activeIndex: 0,
      isFocus: !1
    });
    Te(() => {
      a.value = e.value;
    });
    const f = (u) => {
      i("change", u);
    }, P = (u) => {
      let {
        target: {
          value: v
        }
      } = u;
      f(v);
    }, y = (u, v, s) => {
      d(a, {
        measuring: !0,
        measureText: u,
        measurePrefix: v,
        measureLocation: s,
        activeIndex: 0
      });
    }, g = (u) => {
      d(a, {
        measuring: !1,
        measureLocation: 0,
        measureText: null
      }), u == null || u();
    }, C = (u) => {
      const {
        which: v
      } = u;
      if (a.measuring) {
        if (v === E.UP || v === E.DOWN) {
          const s = R.value.length, S = v === E.UP ? -1 : 1, h = (a.activeIndex + S + s) % s;
          a.activeIndex = h, u.preventDefault();
        } else if (v === E.ESC)
          g();
        else if (v === E.ENTER) {
          if (u.preventDefault(), !R.value.length) {
            g();
            return;
          }
          const s = R.value[a.activeIndex];
          D(s);
        }
      }
    }, w = (u) => {
      const {
        key: v,
        which: s
      } = u, {
        measureText: S,
        measuring: h
      } = a, {
        prefix: M,
        validateSearch: G
      } = e, F = u.target;
      if (F.composing)
        return;
      const j = Ct(F), {
        location: L,
        prefix: _
      } = wt(j, M);
      if ([E.ESC, E.UP, E.DOWN, E.ENTER].indexOf(s) === -1)
        if (L !== -1) {
          const z = j.slice(L + _.length), H = G(z, e), W = !!U(z).length;
          H ? (v === _ || v === "Shift" || h || z !== S && W) && y(z, _, L) : h && g(), H && i("search", z, _);
        } else
          h && g();
    }, b = (u) => {
      a.measuring || i("pressenter", u);
    }, $ = (u) => {
      T(u);
    }, I = (u) => {
      x(u);
    }, T = (u) => {
      clearTimeout(p.value);
      const {
        isFocus: v
      } = a;
      !v && u && i("focus", u), a.isFocus = !0;
    }, x = (u) => {
      p.value = setTimeout(() => {
        a.isFocus = !1, g(), i("blur", u);
      }, 100);
    }, D = (u) => {
      const {
        split: v
      } = e, {
        value: s = ""
      } = u, {
        text: S,
        selectionLocation: h
      } = It(a.value, {
        measureLocation: a.measureLocation,
        targetText: s,
        prefix: a.measurePrefix,
        selectionStart: l.value.getSelectionStart(),
        split: v
      });
      f(S), g(() => {
        Ot(l.value.input, h);
      }), i("select", u, a.measurePrefix);
    }, O = (u) => {
      a.activeIndex = u;
    }, U = (u) => {
      const v = u || a.measureText || "", {
        filterOption: s
      } = e;
      return e.options.filter((h) => s ? s(v, h) : !0);
    }, R = A(() => U());
    return n({
      blur: () => {
        l.value.blur();
      },
      focus: () => {
        l.value.focus();
      }
    }), Me(xe, {
      activeIndex: re(a, "activeIndex"),
      setActiveIndex: O,
      selectOption: D,
      onFocus: T,
      onBlur: x,
      loading: re(e, "loading")
    }), ze(() => {
      Ee(() => {
        a.measuring && (r.value.scrollTop = l.value.getScrollTop());
      });
    }), () => {
      const {
        measureLocation: u,
        measurePrefix: v,
        measuring: s
      } = a, {
        prefixCls: S,
        placement: h,
        transitionName: M,
        getPopupContainer: G,
        direction: F
      } = e, j = de(e, ["prefixCls", "placement", "transitionName", "getPopupContainer", "direction"]), {
        class: L,
        style: _
      } = t, z = de(t, ["class", "style"]), H = be(j, ["value", "prefix", "split", "validateSearch", "filterOption", "options", "loading"]), W = d(d(d({}, H), z), {
        onChange: pe,
        onSelect: pe,
        value: a.value,
        onInput: P,
        onBlur: I,
        onKeydown: C,
        onKeyup: w,
        onFocus: $,
        onPressenter: b
      });
      return m("div", {
        class: ee(S, L),
        style: _
      }, [m(it, K(K({}, W), {}, {
        ref: l,
        tag: "textarea"
      }), null), s && m("div", {
        ref: r,
        class: `${S}-measure`
      }, [a.value.slice(0, u), m(Et, {
        prefixCls: S,
        transitionName: M,
        dropdownClassName: e.dropdownClassName,
        placement: h,
        options: s ? R.value : [],
        visible: !0,
        direction: F,
        getPopupContainer: G
      }, {
        default: () => [m("span", null, [v])],
        notFoundContent: c.notFoundContent,
        option: c.option
      }), a.value.slice(u + v.length)])]);
    };
  }
}), Lt = {
  value: String,
  disabled: Boolean,
  payload: Je()
}, $e = d(d({}, Lt), {
  label: Ye([])
}), Ie = {
  name: "Option",
  props: $e,
  render(e, o) {
    let {
      slots: i
    } = o;
    var t;
    return (t = i.default) === null || t === void 0 ? void 0 : t.call(i);
  }
};
B(d({
  compatConfig: {
    MODE: 3
  }
}, Ie));
const _t = (e) => {
  const {
    componentCls: o,
    colorTextDisabled: i,
    controlItemBgHover: t,
    controlPaddingHorizontal: n,
    colorText: c,
    motionDurationSlow: r,
    lineHeight: l,
    controlHeight: p,
    inputPaddingHorizontal: a,
    inputPaddingVertical: f,
    fontSize: P,
    colorBgElevated: y,
    borderRadiusLG: g,
    boxShadowSecondary: C
  } = e, w = Math.round((e.controlHeight - e.fontSize * e.lineHeight) / 2);
  return {
    [o]: d(d(d(d(d({}, k(e)), lt(e)), {
      position: "relative",
      display: "inline-block",
      height: "auto",
      padding: 0,
      overflow: "hidden",
      lineHeight: l,
      whiteSpace: "pre-wrap",
      verticalAlign: "bottom"
    }), st(e, o)), {
      "&-disabled": {
        "> textarea": d({}, ut(e))
      },
      "&-focused": d({}, ct(e)),
      [`&-affix-wrapper ${o}-suffix`]: {
        position: "absolute",
        top: 0,
        insetInlineEnd: a,
        bottom: 0,
        zIndex: 1,
        display: "inline-flex",
        alignItems: "center",
        margin: "auto"
      },
      // ================= Input Area =================
      [`> textarea, ${o}-measure`]: {
        color: c,
        boxSizing: "border-box",
        minHeight: p - 2,
        margin: 0,
        padding: `${f}px ${a}px`,
        overflow: "inherit",
        overflowX: "hidden",
        overflowY: "auto",
        fontWeight: "inherit",
        fontSize: "inherit",
        fontFamily: "inherit",
        fontStyle: "inherit",
        fontVariant: "inherit",
        fontSizeAdjust: "inherit",
        fontStretch: "inherit",
        lineHeight: "inherit",
        direction: "inherit",
        letterSpacing: "inherit",
        whiteSpace: "inherit",
        textAlign: "inherit",
        verticalAlign: "top",
        wordWrap: "break-word",
        wordBreak: "inherit",
        tabSize: "inherit"
      },
      "> textarea": d({
        width: "100%",
        border: "none",
        outline: "none",
        resize: "none",
        backgroundColor: "inherit"
      }, dt(e.colorTextPlaceholder)),
      [`${o}-measure`]: {
        position: "absolute",
        top: 0,
        insetInlineEnd: 0,
        bottom: 0,
        insetInlineStart: 0,
        zIndex: -1,
        color: "transparent",
        pointerEvents: "none",
        "> span": {
          display: "inline-block",
          minHeight: "1em"
        }
      },
      // ================== Dropdown ==================
      "&-dropdown": d(d({}, k(e)), {
        position: "absolute",
        top: -9999,
        insetInlineStart: -9999,
        zIndex: e.zIndexPopup,
        boxSizing: "border-box",
        fontSize: P,
        fontVariant: "initial",
        backgroundColor: y,
        borderRadius: g,
        outline: "none",
        boxShadow: C,
        "&-hidden": {
          display: "none"
        },
        [`${o}-dropdown-menu`]: {
          maxHeight: e.dropdownHeight,
          marginBottom: 0,
          paddingInlineStart: 0,
          overflow: "auto",
          listStyle: "none",
          outline: "none",
          "&-item": d(d({}, qe), {
            position: "relative",
            display: "block",
            minWidth: e.controlItemWidth,
            padding: `${w}px ${n}px`,
            color: c,
            fontWeight: "normal",
            lineHeight: l,
            cursor: "pointer",
            transition: `background ${r} ease`,
            "&:hover": {
              backgroundColor: t
            },
            "&:first-child": {
              borderStartStartRadius: g,
              borderStartEndRadius: g,
              borderEndStartRadius: 0,
              borderEndEndRadius: 0
            },
            "&:last-child": {
              borderStartStartRadius: 0,
              borderStartEndRadius: 0,
              borderEndStartRadius: g,
              borderEndEndRadius: g
            },
            "&-disabled": {
              color: i,
              cursor: "not-allowed",
              "&:hover": {
                color: i,
                backgroundColor: t,
                cursor: "not-allowed"
              }
            },
            "&-selected": {
              color: c,
              fontWeight: e.fontWeightStrong,
              backgroundColor: t
            },
            "&-active": {
              backgroundColor: t
            }
          })
        }
      })
    })
  };
}, Bt = ve("Mentions", (e) => {
  const o = rt(e);
  return [_t(o)];
}, (e) => ({
  dropdownHeight: 250,
  controlItemWidth: 100,
  zIndexPopup: e.zIndexPopupBase + 50
}));
var fe = function(e, o) {
  var i = {};
  for (var t in e)
    Object.prototype.hasOwnProperty.call(e, t) && o.indexOf(t) < 0 && (i[t] = e[t]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, t = Object.getOwnPropertySymbols(e); n < t.length; n++)
      o.indexOf(t[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[n]) && (i[t[n]] = e[t[n]]);
  return i;
};
function At() {
  return !0;
}
const Rt = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    prefix: i = "@",
    split: t = " "
  } = o, n = Array.isArray(i) ? i : [i];
  return e.split(t).map(function() {
    let c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", r = null;
    return n.some((l) => c.slice(0, l.length) === l ? (r = l, !0) : !1), r !== null ? {
      prefix: r,
      value: c.slice(r.length)
    } : null;
  }).filter((c) => !!c && !!c.value);
}, jt = () => d(d({}, ye), {
  loading: {
    type: Boolean,
    default: void 0
  },
  onFocus: {
    type: Function
  },
  onBlur: {
    type: Function
  },
  onSelect: {
    type: Function
  },
  onChange: {
    type: Function
  },
  onPressenter: {
    type: Function
  },
  "onUpdate:value": {
    type: Function
  },
  notFoundContent: N.any,
  defaultValue: String,
  id: String,
  status: String
}), Q = B({
  compatConfig: {
    MODE: 3
  },
  name: "AMentions",
  inheritAttrs: !1,
  props: jt(),
  slots: Object,
  setup(e, o) {
    let {
      slots: i,
      emit: t,
      attrs: n,
      expose: c
    } = o;
    var r, l, p;
    process.env.NODE_ENV !== "production" && Qe(!se(((r = i.default) === null || r === void 0 ? void 0 : r.call(i)) || []).length, "Mentions", "`Mentions.Option` is deprecated. Please use `options` instead.");
    const {
      prefixCls: a,
      renderEmpty: f,
      direction: P
    } = Se("mentions", e), [y, g] = Bt(a), C = X(!1), w = X(null), b = X((p = (l = e.value) !== null && l !== void 0 ? l : e.defaultValue) !== null && p !== void 0 ? p : ""), $ = Ze(), I = ke.useInject(), T = A(() => at(I.status, e.status));
    ot({
      prefixCls: A(() => `${a.value}-menu`),
      mode: A(() => "vertical"),
      selectable: A(() => !1),
      onClick: () => {
      },
      validator: (s) => {
        let {
          mode: S
        } = s;
        et(!S || S === "vertical", "Mentions", `mode="${S}" is not supported for Mentions's Menu.`);
      }
    }), me(() => e.value, (s) => {
      b.value = s;
    });
    const x = (s) => {
      C.value = !0, t("focus", s);
    }, D = (s) => {
      C.value = !1, t("blur", s), $.onFieldBlur();
    }, O = function() {
      for (var s = arguments.length, S = new Array(s), h = 0; h < s; h++)
        S[h] = arguments[h];
      t("select", ...S), C.value = !0;
    }, U = (s) => {
      e.value === void 0 && (b.value = s), t("update:value", s), t("change", s), $.onFieldChange();
    }, R = () => {
      const s = e.notFoundContent;
      return s !== void 0 ? s : i.notFoundContent ? i.notFoundContent() : f("Select");
    }, ne = () => {
      var s;
      return se(((s = i.default) === null || s === void 0 ? void 0 : s.call(i)) || []).map((S) => {
        var h, M;
        return d(d({}, tt(S)), {
          label: (M = (h = S.children) === null || h === void 0 ? void 0 : h.default) === null || M === void 0 ? void 0 : M.call(h)
        });
      });
    };
    c({
      focus: () => {
        w.value.focus();
      },
      blur: () => {
        w.value.blur();
      }
    });
    const v = A(() => e.loading ? At : e.filterOption);
    return () => {
      const {
        disabled: s,
        getPopupContainer: S,
        rows: h = 1,
        id: M = $.id.value
      } = e, G = fe(e, ["disabled", "getPopupContainer", "rows", "id"]), {
        hasFeedback: F,
        feedbackIcon: j
      } = I, {
        class: L
      } = n, _ = fe(n, ["class"]), z = be(G, ["defaultValue", "onUpdate:value", "prefixCls"]), H = ee({
        [`${a.value}-disabled`]: s,
        [`${a.value}-focused`]: C.value,
        [`${a.value}-rtl`]: P.value === "rtl"
      }, ue(a.value, T.value), !F && L, g.value), W = d(d(d(d({
        prefixCls: a.value
      }, z), {
        disabled: s,
        direction: P.value,
        filterOption: v.value,
        getPopupContainer: S,
        options: e.loading ? [{
          value: "ANTDV_SEARCHING",
          disabled: !0,
          label: m(V, {
            size: "small"
          }, null)
        }] : e.options || ne(),
        class: H
      }), _), {
        rows: h,
        onChange: U,
        onSelect: O,
        onFocus: x,
        onBlur: D,
        ref: w,
        value: b.value,
        id: M
      }), oe = m(Ft, K(K({}, W), {}, {
        dropdownClassName: g.value
      }), {
        notFoundContent: R,
        option: i.option
      });
      return y(F ? m("div", {
        class: ee(`${a.value}-affix-wrapper`, ue(`${a.value}-affix-wrapper`, T.value, F), L, g.value)
      }, [oe, m("span", {
        class: `${a.value}-suffix`
      }, [j])]) : oe);
    };
  }
}), Z = B(d(d({
  compatConfig: {
    MODE: 3
  }
}, Ie), {
  name: "AMentionsOption",
  props: $e
})), Ht = d(Q, {
  Option: Z,
  getMentions: Rt,
  install: (e) => (e.component(Q.name, Q), e.component(Z.name, Z), e)
}), qt = /* @__PURE__ */ B({
  __name: "Mentions",
  setup(e) {
    return (o, i) => (le(), Ne(Fe(Ht), Le(_e(o.$attrs)), {
      default: Be(() => [
        (le(!0), Ae(Re, null, je(o.$slots, (t, n) => He(o.$slots, n, { key: n })), 128))
      ]),
      _: 3
    }, 16));
  }
});
export {
  qt as default
};
