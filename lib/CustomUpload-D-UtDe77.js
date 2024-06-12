import { defineComponent as H, computed as R, createVNode as c, Fragment as ut, ref as Q, onUpdated as Ft, onMounted as ye, onBeforeUnmount as dt, shallowRef as ce, watch as pt, Transition as Rt, withDirectives as ft, vShow as gt, watchEffect as Tt, triggerRef as jt, TransitionGroup as Lt, toRef as Et, openBlock as re, createBlock as ue, mergeProps as We, toHandlers as Xe, withCtx as Se, createElementVNode as oe, createElementBlock as Ve, unref as de, createTextVNode as At, toDisplayString as Oe, createCommentVNode as Ge, pushScopeId as Ut, popScopeId as Mt } from "vue";
import { X as kt, Y as Nt, Z as Bt, $ as zt, J as z, L as _, G as B, a0 as je, H as G, F as K, E as Z, a1 as Fe, d as D, j as F, i as ie, T as mt, g as vt, m as ht, r as yt, a2 as Le, u as be, a3 as Ht, C as Wt, a4 as Xt, a5 as Vt, w as Gt, e as te, a6 as qt, a7 as Jt, a8 as ve, a9 as Yt, aa as Zt, ab as Qt, ac as Kt, ad as en, U as Re, n as tn, B as Te, ae as bt, af as wt, z as nn, ag as rn, f as on, O as ln, ah as an, ai as sn, aj as cn, h as ae, ak as un, al as Pe, am as dn } from "./index-DH1cAMFH.js";
import { P as pn } from "./PlusOutlined-C2Oi6E1H.js";
import { u as fn } from "./useRefs-CuWy3iND.js";
function gn(e, t, n, r) {
  for (var o = -1, a = e == null ? 0 : e.length; ++o < a; ) {
    var i = e[o];
    t(r, i, n(i), e);
  }
  return r;
}
function mn(e) {
  return function(t, n, r) {
    for (var o = -1, a = Object(t), i = r(t), s = i.length; s--; ) {
      var u = i[++o];
      if (n(a[u], u, a) === !1)
        break;
    }
    return t;
  };
}
var vn = mn();
function hn(e, t) {
  return e && vn(e, t, kt);
}
function yn(e, t) {
  return function(n, r) {
    if (n == null)
      return n;
    if (!Nt(n))
      return e(n, r);
    for (var o = n.length, a = -1, i = Object(n); ++a < o && r(i[a], a, i) !== !1; )
      ;
    return n;
  };
}
var bn = yn(hn);
function wn(e, t, n, r) {
  return bn(e, function(o, a, i) {
    t(r, o, n(o), i);
  }), r;
}
function $n(e, t) {
  return function(n, r) {
    var o = zt(n) ? gn : wn, a = t ? t() : {};
    return o(n, e, Bt(r), a);
  };
}
var Cn = $n(function(e, t, n) {
  e[n ? 0 : 1].push(t);
}, function() {
  return [[], []];
});
const Sn = ["normal", "exception", "active", "success"], we = () => ({
  prefixCls: String,
  type: z(),
  percent: Number,
  format: _(),
  status: z(),
  showInfo: B(),
  strokeWidth: Number,
  strokeLinecap: z(),
  strokeColor: je(),
  trailColor: String,
  /** @deprecated Use `size` instead */
  width: Number,
  success: G(),
  gapDegree: Number,
  gapPosition: z(),
  size: K([String, Number, Array]),
  steps: Number,
  /** @deprecated Use `success` instead */
  successPercent: Number,
  title: String,
  progressStatus: z()
});
function ee(e) {
  return !e || e < 0 ? 0 : e > 100 ? 100 : e;
}
function he(e) {
  let {
    success: t,
    successPercent: n
  } = e, r = n;
  return t && "progress" in t && (Z(!1, "Progress", "`success.progress` is deprecated. Please use `success.percent` instead."), r = t.progress), t && "percent" in t && (r = t.percent), r;
}
function On(e) {
  let {
    percent: t,
    success: n,
    successPercent: r
  } = e;
  const o = ee(he({
    success: n,
    successPercent: r
  }));
  return [o, ee(ee(t) - o)];
}
function Pn(e) {
  let {
    success: t = {},
    strokeColor: n
  } = e;
  const {
    strokeColor: r
  } = t;
  return [r || Fe.green, n || null];
}
const $e = (e, t, n) => {
  var r, o, a, i;
  let s = -1, u = -1;
  if (t === "step") {
    const b = n.steps, p = n.strokeWidth;
    typeof e == "string" || typeof e > "u" ? (s = e === "small" ? 2 : 14, u = p ?? 8) : typeof e == "number" ? [s, u] = [e, e] : [s = 14, u = 8] = e, s *= b;
  } else if (t === "line") {
    const b = n == null ? void 0 : n.strokeWidth;
    typeof e == "string" || typeof e > "u" ? u = b || (e === "small" ? 6 : 8) : typeof e == "number" ? [s, u] = [e, e] : [s = -1, u = 8] = e;
  } else
    (t === "circle" || t === "dashboard") && (typeof e == "string" || typeof e > "u" ? [s, u] = e === "small" ? [60, 60] : [120, 120] : typeof e == "number" ? [s, u] = [e, e] : (process.env.NODE_ENV !== "production" && Z(!1, "Progress", 'Type "circle" and "dashboard" do not accept array as `size`, please use number or preset size instead.'), s = (o = (r = e[0]) !== null && r !== void 0 ? r : e[1]) !== null && o !== void 0 ? o : 120, u = (i = (a = e[0]) !== null && a !== void 0 ? a : e[1]) !== null && i !== void 0 ? i : 120));
  return {
    width: s,
    height: u
  };
};
var xn = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const In = () => D(D({}, we()), {
  strokeColor: je(),
  direction: z()
}), _n = (e) => {
  let t = [];
  return Object.keys(e).forEach((n) => {
    const r = parseFloat(n.replace(/%/g, ""));
    isNaN(r) || t.push({
      key: r,
      value: e[n]
    });
  }), t = t.sort((n, r) => n.key - r.key), t.map((n) => {
    let {
      key: r,
      value: o
    } = n;
    return `${o} ${r}%`;
  }).join(", ");
}, Dn = (e, t) => {
  const {
    from: n = Fe.blue,
    to: r = Fe.blue,
    direction: o = t === "rtl" ? "to left" : "to right"
  } = e, a = xn(e, ["from", "to", "direction"]);
  if (Object.keys(a).length !== 0) {
    const i = _n(a);
    return {
      backgroundImage: `linear-gradient(${o}, ${i})`
    };
  }
  return {
    backgroundImage: `linear-gradient(${o}, ${n}, ${r})`
  };
}, Fn = H({
  compatConfig: {
    MODE: 3
  },
  name: "ProgressLine",
  inheritAttrs: !1,
  props: In(),
  setup(e, t) {
    let {
      slots: n,
      attrs: r
    } = t;
    const o = R(() => {
      const {
        strokeColor: d,
        direction: w
      } = e;
      return d && typeof d != "string" ? Dn(d, w) : {
        backgroundColor: d
      };
    }), a = R(() => e.strokeLinecap === "square" || e.strokeLinecap === "butt" ? 0 : void 0), i = R(() => e.trailColor ? {
      backgroundColor: e.trailColor
    } : void 0), s = R(() => {
      var d;
      return (d = e.size) !== null && d !== void 0 ? d : [-1, e.strokeWidth || (e.size === "small" ? 6 : 8)];
    }), u = R(() => $e(s.value, "line", {
      strokeWidth: e.strokeWidth
    }));
    process.env.NODE_ENV !== "production" && Z("strokeWidth" in e, "Progress", "`strokeWidth` is deprecated. Please use `size` instead.");
    const b = R(() => {
      const {
        percent: d
      } = e;
      return D({
        width: `${ee(d)}%`,
        height: `${u.value.height}px`,
        borderRadius: a.value
      }, o.value);
    }), p = R(() => he(e)), O = R(() => {
      const {
        success: d
      } = e;
      return {
        width: `${ee(p.value)}%`,
        height: `${u.value.height}px`,
        borderRadius: a.value,
        backgroundColor: d == null ? void 0 : d.strokeColor
      };
    }), h = {
      width: u.value.width < 0 ? "100%" : u.value.width,
      height: `${u.value.height}px`
    };
    return () => {
      var d;
      return c(ut, null, [c("div", F(F({}, r), {}, {
        class: [`${e.prefixCls}-outer`, r.class],
        style: [r.style, h]
      }), [c("div", {
        class: `${e.prefixCls}-inner`,
        style: i.value
      }, [c("div", {
        class: `${e.prefixCls}-bg`,
        style: b.value
      }, null), p.value !== void 0 ? c("div", {
        class: `${e.prefixCls}-success-bg`,
        style: O.value
      }, null) : null])]), (d = n.default) === null || d === void 0 ? void 0 : d.call(n)]);
    };
  }
}), Rn = {
  percent: 0,
  prefixCls: "vc-progress",
  strokeColor: "#2db7f5",
  strokeLinecap: "round",
  strokeWidth: 1,
  trailColor: "#D9D9D9",
  trailWidth: 1
}, Tn = (e) => {
  const t = Q(null);
  return Ft(() => {
    const n = Date.now();
    let r = !1;
    e.value.forEach((o) => {
      const a = (o == null ? void 0 : o.$el) || o;
      if (!a)
        return;
      r = !0;
      const i = a.style;
      i.transitionDuration = ".3s, .3s, .3s, .06s", t.value && n - t.value < 100 && (i.transitionDuration = "0s, 0s");
    }), r && (t.value = Date.now());
  }), e;
}, jn = {
  gapDegree: Number,
  gapPosition: {
    type: String
  },
  percent: {
    type: [Array, Number]
  },
  prefixCls: String,
  strokeColor: {
    type: [Object, String, Array]
  },
  strokeLinecap: {
    type: String
  },
  strokeWidth: Number,
  trailColor: String,
  trailWidth: Number,
  transition: String
};
var Ln = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
let qe = 0;
function Je(e) {
  return +e.replace("%", "");
}
function Ye(e) {
  return Array.isArray(e) ? e : [e];
}
function Ze(e, t, n, r) {
  let o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0, a = arguments.length > 5 ? arguments[5] : void 0;
  const i = 50 - r / 2;
  let s = 0, u = -i, b = 0, p = -2 * i;
  switch (a) {
    case "left":
      s = -i, u = 0, b = 2 * i, p = 0;
      break;
    case "right":
      s = i, u = 0, b = -2 * i, p = 0;
      break;
    case "bottom":
      u = i, p = 2 * i;
      break;
  }
  const O = `M 50,50 m ${s},${u}
   a ${i},${i} 0 1 1 ${b},${-p}
   a ${i},${i} 0 1 1 ${-b},${p}`, h = Math.PI * 2 * i, d = {
    stroke: n,
    strokeDasharray: `${t / 100 * (h - o)}px ${h}px`,
    strokeDashoffset: `-${o / 2 + e / 100 * (h - o)}px`,
    transition: "stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s"
    // eslint-disable-line
  };
  return {
    pathString: O,
    pathStyle: d
  };
}
const En = H({
  compatConfig: {
    MODE: 3
  },
  name: "VCCircle",
  props: ie(jn, Rn),
  setup(e) {
    qe += 1;
    const t = Q(qe), n = R(() => Ye(e.percent)), r = R(() => Ye(e.strokeColor)), [o, a] = fn();
    Tn(a);
    const i = () => {
      const {
        prefixCls: s,
        strokeWidth: u,
        strokeLinecap: b,
        gapDegree: p,
        gapPosition: O
      } = e;
      let h = 0;
      return n.value.map((d, w) => {
        const l = r.value[w] || r.value[r.value.length - 1], g = Object.prototype.toString.call(l) === "[object Object]" ? `url(#${s}-gradient-${t.value})` : "", {
          pathString: x,
          pathStyle: f
        } = Ze(h, d, l, u, p, O);
        h += d;
        const y = {
          key: w,
          d: x,
          stroke: g,
          "stroke-linecap": b,
          "stroke-width": u,
          opacity: d === 0 ? 0 : 1,
          "fill-opacity": "0",
          class: `${s}-circle-path`,
          style: f
        };
        return c("path", F({
          ref: o(w)
        }, y), null);
      });
    };
    return () => {
      const {
        prefixCls: s,
        strokeWidth: u,
        trailWidth: b,
        gapDegree: p,
        gapPosition: O,
        trailColor: h,
        strokeLinecap: d,
        strokeColor: w
      } = e, l = Ln(e, ["prefixCls", "strokeWidth", "trailWidth", "gapDegree", "gapPosition", "trailColor", "strokeLinecap", "strokeColor"]), {
        pathString: g,
        pathStyle: x
      } = Ze(0, 100, h, u, p, O);
      delete l.percent;
      const f = r.value.find((v) => Object.prototype.toString.call(v) === "[object Object]"), y = {
        d: g,
        stroke: h,
        "stroke-linecap": d,
        "stroke-width": b || u,
        "fill-opacity": "0",
        class: `${s}-circle-trail`,
        style: x
      };
      return c("svg", F({
        class: `${s}-circle`,
        viewBox: "0 0 100 100"
      }, l), [f && c("defs", null, [c("linearGradient", {
        id: `${s}-gradient-${t.value}`,
        x1: "100%",
        y1: "0%",
        x2: "0%",
        y2: "0%"
      }, [Object.keys(f).sort((v, P) => Je(v) - Je(P)).map((v, P) => c("stop", {
        key: P,
        offset: v,
        "stop-color": f[v]
      }, null))])]), c("path", y, null), i().reverse()]);
    };
  }
}), An = () => D(D({}, we()), {
  strokeColor: je()
}), Un = 3, Mn = (e) => Un / e * 100, kn = H({
  compatConfig: {
    MODE: 3
  },
  name: "ProgressCircle",
  inheritAttrs: !1,
  props: ie(An(), {
    trailColor: null
  }),
  setup(e, t) {
    let {
      slots: n,
      attrs: r
    } = t;
    const o = R(() => {
      var l;
      return (l = e.width) !== null && l !== void 0 ? l : 120;
    }), a = R(() => {
      var l;
      return (l = e.size) !== null && l !== void 0 ? l : [o.value, o.value];
    }), i = R(() => $e(a.value, "circle")), s = R(() => {
      if (e.gapDegree || e.gapDegree === 0)
        return e.gapDegree;
      if (e.type === "dashboard")
        return 75;
    }), u = R(() => ({
      width: `${i.value.width}px`,
      height: `${i.value.height}px`,
      fontSize: `${i.value.width * 0.15 + 6}px`
    })), b = R(() => {
      var l;
      return (l = e.strokeWidth) !== null && l !== void 0 ? l : Math.max(Mn(i.value.width), 6);
    }), p = R(() => e.gapPosition || e.type === "dashboard" && "bottom" || void 0), O = R(() => On(e)), h = R(() => Object.prototype.toString.call(e.strokeColor) === "[object Object]"), d = R(() => Pn({
      success: e.success,
      strokeColor: e.strokeColor
    })), w = R(() => ({
      [`${e.prefixCls}-inner`]: !0,
      [`${e.prefixCls}-circle-gradient`]: h.value
    }));
    return () => {
      var l;
      const g = c(En, {
        percent: O.value,
        strokeWidth: b.value,
        trailWidth: b.value,
        strokeColor: d.value,
        strokeLinecap: e.strokeLinecap,
        trailColor: e.trailColor,
        prefixCls: e.prefixCls,
        gapDegree: s.value,
        gapPosition: p.value
      }, null);
      return c("div", F(F({}, r), {}, {
        class: [w.value, r.class],
        style: [r.style, u.value]
      }), [i.value.width <= 20 ? c(mt, null, {
        default: () => [c("span", null, [g])],
        title: n.default
      }) : c(ut, null, [g, (l = n.default) === null || l === void 0 ? void 0 : l.call(n)])]);
    };
  }
}), Nn = () => D(D({}, we()), {
  steps: Number,
  strokeColor: K(),
  trailColor: String
}), Bn = H({
  compatConfig: {
    MODE: 3
  },
  name: "Steps",
  props: Nn(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const r = R(() => Math.round(e.steps * ((e.percent || 0) / 100))), o = R(() => {
      var s;
      return (s = e.size) !== null && s !== void 0 ? s : [e.size === "small" ? 2 : 14, e.strokeWidth || 8];
    }), a = R(() => $e(o.value, "step", {
      steps: e.steps,
      strokeWidth: e.strokeWidth || 8
    })), i = R(() => {
      const {
        steps: s,
        strokeColor: u,
        trailColor: b,
        prefixCls: p
      } = e, O = [];
      for (let h = 0; h < s; h += 1) {
        const d = Array.isArray(u) ? u[h] : u, w = {
          [`${p}-steps-item`]: !0,
          [`${p}-steps-item-active`]: h <= r.value - 1
        };
        O.push(c("div", {
          key: h,
          class: w,
          style: {
            backgroundColor: h <= r.value - 1 ? d : b,
            width: `${a.value.width / s}px`,
            height: `${a.value.height}px`
          }
        }, null));
      }
      return O;
    });
    return () => {
      var s;
      return c("div", {
        class: `${e.prefixCls}-steps-outer`
      }, [i.value, (s = n.default) === null || s === void 0 ? void 0 : s.call(n)]);
    };
  }
}), zn = new Le("antProgressActive", {
  "0%": {
    transform: "translateX(-100%) scaleX(0)",
    opacity: 0.1
  },
  "20%": {
    transform: "translateX(-100%) scaleX(0)",
    opacity: 0.5
  },
  to: {
    transform: "translateX(0) scaleX(1)",
    opacity: 0
  }
}), Hn = (e) => {
  const {
    componentCls: t,
    iconCls: n
  } = e;
  return {
    [t]: D(D({}, yt(e)), {
      display: "inline-block",
      "&-rtl": {
        direction: "rtl"
      },
      "&-line": {
        position: "relative",
        width: "100%",
        fontSize: e.fontSize,
        marginInlineEnd: e.marginXS,
        marginBottom: e.marginXS
      },
      [`${t}-outer`]: {
        display: "inline-block",
        width: "100%"
      },
      [`&${t}-show-info`]: {
        [`${t}-outer`]: {
          marginInlineEnd: `calc(-2em - ${e.marginXS}px)`,
          paddingInlineEnd: `calc(2em + ${e.paddingXS}px)`
        }
      },
      [`${t}-inner`]: {
        position: "relative",
        display: "inline-block",
        width: "100%",
        overflow: "hidden",
        verticalAlign: "middle",
        backgroundColor: e.progressRemainingColor,
        borderRadius: e.progressLineRadius
      },
      [`${t}-inner:not(${t}-circle-gradient)`]: {
        [`${t}-circle-path`]: {
          stroke: e.colorInfo
        }
      },
      [`${t}-success-bg, ${t}-bg`]: {
        position: "relative",
        backgroundColor: e.colorInfo,
        borderRadius: e.progressLineRadius,
        transition: `all ${e.motionDurationSlow} ${e.motionEaseInOutCirc}`
      },
      [`${t}-success-bg`]: {
        position: "absolute",
        insetBlockStart: 0,
        insetInlineStart: 0,
        backgroundColor: e.colorSuccess
      },
      [`${t}-text`]: {
        display: "inline-block",
        width: "2em",
        marginInlineStart: e.marginXS,
        color: e.progressInfoTextColor,
        lineHeight: 1,
        whiteSpace: "nowrap",
        textAlign: "start",
        verticalAlign: "middle",
        wordBreak: "normal",
        [n]: {
          fontSize: e.fontSize
        }
      },
      [`&${t}-status-active`]: {
        [`${t}-bg::before`]: {
          position: "absolute",
          inset: 0,
          backgroundColor: e.colorBgContainer,
          borderRadius: e.progressLineRadius,
          opacity: 0,
          animationName: zn,
          animationDuration: e.progressActiveMotionDuration,
          animationTimingFunction: e.motionEaseOutQuint,
          animationIterationCount: "infinite",
          content: '""'
        }
      },
      [`&${t}-status-exception`]: {
        [`${t}-bg`]: {
          backgroundColor: e.colorError
        },
        [`${t}-text`]: {
          color: e.colorError
        }
      },
      [`&${t}-status-exception ${t}-inner:not(${t}-circle-gradient)`]: {
        [`${t}-circle-path`]: {
          stroke: e.colorError
        }
      },
      [`&${t}-status-success`]: {
        [`${t}-bg`]: {
          backgroundColor: e.colorSuccess
        },
        [`${t}-text`]: {
          color: e.colorSuccess
        }
      },
      [`&${t}-status-success ${t}-inner:not(${t}-circle-gradient)`]: {
        [`${t}-circle-path`]: {
          stroke: e.colorSuccess
        }
      }
    })
  };
}, Wn = (e) => {
  const {
    componentCls: t,
    iconCls: n
  } = e;
  return {
    [t]: {
      [`${t}-circle-trail`]: {
        stroke: e.progressRemainingColor
      },
      [`&${t}-circle ${t}-inner`]: {
        position: "relative",
        lineHeight: 1,
        backgroundColor: "transparent"
      },
      [`&${t}-circle ${t}-text`]: {
        position: "absolute",
        insetBlockStart: "50%",
        insetInlineStart: 0,
        width: "100%",
        margin: 0,
        padding: 0,
        color: e.colorText,
        lineHeight: 1,
        whiteSpace: "normal",
        textAlign: "center",
        transform: "translateY(-50%)",
        [n]: {
          fontSize: `${e.fontSize / e.fontSizeSM}em`
        }
      },
      [`${t}-circle&-status-exception`]: {
        [`${t}-text`]: {
          color: e.colorError
        }
      },
      [`${t}-circle&-status-success`]: {
        [`${t}-text`]: {
          color: e.colorSuccess
        }
      }
    },
    [`${t}-inline-circle`]: {
      lineHeight: 1,
      [`${t}-inner`]: {
        verticalAlign: "bottom"
      }
    }
  };
}, Xn = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: {
      [`${t}-steps`]: {
        display: "inline-block",
        "&-outer": {
          display: "flex",
          flexDirection: "row",
          alignItems: "center"
        },
        "&-item": {
          flexShrink: 0,
          minWidth: e.progressStepMinWidth,
          marginInlineEnd: e.progressStepMarginInlineEnd,
          backgroundColor: e.progressRemainingColor,
          transition: `all ${e.motionDurationSlow}`,
          "&-active": {
            backgroundColor: e.colorInfo
          }
        }
      }
    }
  };
}, Vn = (e) => {
  const {
    componentCls: t,
    iconCls: n
  } = e;
  return {
    [t]: {
      [`${t}-small&-line, ${t}-small&-line ${t}-text ${n}`]: {
        fontSize: e.fontSizeSM
      }
    }
  };
}, Gn = vt("Progress", (e) => {
  const t = e.marginXXS / 2, n = ht(e, {
    progressLineRadius: 100,
    progressInfoTextColor: e.colorText,
    progressDefaultColor: e.colorInfo,
    progressRemainingColor: e.colorFillSecondary,
    progressStepMarginInlineEnd: t,
    progressStepMinWidth: t,
    progressActiveMotionDuration: "2.4s"
  });
  return [Hn(n), Wn(n), Xn(n), Vn(n)];
});
var qn = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const Jn = H({
  compatConfig: {
    MODE: 3
  },
  name: "AProgress",
  inheritAttrs: !1,
  props: ie(we(), {
    type: "line",
    percent: 0,
    showInfo: !0,
    // null for different theme definition
    trailColor: null,
    size: "default",
    strokeLinecap: "round"
  }),
  slots: Object,
  setup(e, t) {
    let {
      slots: n,
      attrs: r
    } = t;
    const {
      prefixCls: o,
      direction: a
    } = be("progress", e), [i, s] = Gn(o);
    process.env.NODE_ENV !== "production" && (Z("successPercent" in e, "Progress", "`successPercent` is deprecated. Please use `success.percent` instead."), Z("width" in e, "Progress", "`width` is deprecated. Please use `size` instead."));
    const u = R(() => Array.isArray(e.strokeColor) ? e.strokeColor[0] : e.strokeColor), b = R(() => {
      const {
        percent: w = 0
      } = e, l = he(e);
      return parseInt(l !== void 0 ? l.toString() : w.toString(), 10);
    }), p = R(() => {
      const {
        status: w
      } = e;
      return !Sn.includes(w) && b.value >= 100 ? "success" : w || "normal";
    }), O = R(() => {
      const {
        type: w,
        showInfo: l,
        size: g
      } = e, x = o.value;
      return {
        [x]: !0,
        [`${x}-inline-circle`]: w === "circle" && $e(g, "circle").width <= 20,
        [`${x}-${w === "dashboard" && "circle" || w}`]: !0,
        [`${x}-status-${p.value}`]: !0,
        [`${x}-show-info`]: l,
        [`${x}-${g}`]: g,
        [`${x}-rtl`]: a.value === "rtl",
        [s.value]: !0
      };
    }), h = R(() => typeof e.strokeColor == "string" || Array.isArray(e.strokeColor) ? e.strokeColor : void 0), d = () => {
      const {
        showInfo: w,
        format: l,
        type: g,
        percent: x,
        title: f
      } = e, y = he(e);
      if (!w)
        return null;
      let v;
      const P = l || (n == null ? void 0 : n.format) || ((E) => `${E}%`), L = g === "line";
      return l || n != null && n.format || p.value !== "exception" && p.value !== "success" ? v = P(ee(x), ee(y)) : p.value === "exception" ? v = L ? c(Ht, null, null) : c(Wt, null, null) : p.value === "success" && (v = L ? c(Xt, null, null) : c(Vt, null, null)), c("span", {
        class: `${o.value}-text`,
        title: f === void 0 && typeof v == "string" ? v : void 0
      }, [v]);
    };
    return () => {
      const {
        type: w,
        steps: l,
        title: g
      } = e, {
        class: x
      } = r, f = qn(r, ["class"]), y = d();
      let v;
      return w === "line" ? v = l ? c(Bn, F(F({}, e), {}, {
        strokeColor: h.value,
        prefixCls: o.value,
        steps: l
      }), {
        default: () => [y]
      }) : c(Fn, F(F({}, e), {}, {
        strokeColor: u.value,
        prefixCls: o.value,
        direction: a.value
      }), {
        default: () => [y]
      }) : (w === "circle" || w === "dashboard") && (v = c(kn, F(F({}, e), {}, {
        prefixCls: o.value,
        strokeColor: u.value,
        progressStatus: p.value
      }), {
        default: () => [y]
      })), i(c("div", F(F({
        role: "progressbar"
      }, f), {}, {
        class: [O.value, x],
        title: g
      }), [v]));
    };
  }
}), Yn = Gt(Jn);
var Zn = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z" } }] }, name: "delete", theme: "outlined" };
function Qe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      Qn(e, o, n[o]);
    });
  }
  return e;
}
function Qn(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ee = function(t, n) {
  var r = Qe({}, t, n.attrs);
  return c(te, Qe({}, r, {
    icon: Zn
  }), null);
};
Ee.displayName = "DeleteOutlined";
Ee.inheritAttrs = !1;
function Kn(e, t) {
  const n = `cannot ${e.method} ${e.action} ${t.status}'`, r = new Error(n);
  return r.status = t.status, r.method = e.method, r.url = e.action, r;
}
function Ke(e) {
  const t = e.responseText || e.response;
  if (!t)
    return t;
  try {
    return JSON.parse(t);
  } catch {
    return t;
  }
}
function er(e) {
  const t = new XMLHttpRequest();
  e.onProgress && t.upload && (t.upload.onprogress = function(a) {
    a.total > 0 && (a.percent = a.loaded / a.total * 100), e.onProgress(a);
  });
  const n = new FormData();
  e.data && Object.keys(e.data).forEach((o) => {
    const a = e.data[o];
    if (Array.isArray(a)) {
      a.forEach((i) => {
        n.append(`${o}[]`, i);
      });
      return;
    }
    n.append(o, a);
  }), e.file instanceof Blob ? n.append(e.filename, e.file, e.file.name) : n.append(e.filename, e.file), t.onerror = function(a) {
    e.onError(a);
  }, t.onload = function() {
    return t.status < 200 || t.status >= 300 ? e.onError(Kn(e, t), Ke(t)) : e.onSuccess(Ke(t), t);
  }, t.open(e.method, e.action, !0), e.withCredentials && "withCredentials" in t && (t.withCredentials = !0);
  const r = e.headers || {};
  return r["X-Requested-With"] !== null && t.setRequestHeader("X-Requested-With", "XMLHttpRequest"), Object.keys(r).forEach((o) => {
    r[o] !== null && t.setRequestHeader(o, r[o]);
  }), t.send(n), {
    abort() {
      t.abort();
    }
  };
}
const tr = +/* @__PURE__ */ new Date();
let nr = 0;
function xe() {
  return `vc-upload-${tr}-${++nr}`;
}
const Ie = (e, t) => {
  if (e && t) {
    const n = Array.isArray(t) ? t : t.split(","), r = e.name || "", o = e.type || "", a = o.replace(/\/.*$/, "");
    return n.some((i) => {
      const s = i.trim();
      if (/^\*(\/\*)?$/.test(i))
        return !0;
      if (s.charAt(0) === ".") {
        const u = r.toLowerCase(), b = s.toLowerCase();
        let p = [b];
        return (b === ".jpg" || b === ".jpeg") && (p = [".jpg", ".jpeg"]), p.some((O) => u.endsWith(O));
      }
      return /\/\*$/.test(s) ? a === s.replace(/\/.*$/, "") : o === s ? !0 : /^\w+$/.test(s) ? (qt(!1, `Upload takes an invalidate 'accept' type '${s}'.Skip for check.`), !0) : !1;
    });
  }
  return !0;
};
function rr(e, t) {
  const n = e.createReader();
  let r = [];
  function o() {
    n.readEntries((a) => {
      const i = Array.prototype.slice.apply(a);
      r = r.concat(i), !i.length ? t(r) : o();
    });
  }
  o();
}
const or = (e, t, n) => {
  const r = (o, a) => {
    o.path = a || "", o.isFile ? o.file((i) => {
      n(i) && (o.fullPath && !i.webkitRelativePath && (Object.defineProperties(i, {
        webkitRelativePath: {
          writable: !0
        }
      }), i.webkitRelativePath = o.fullPath.replace(/^\//, ""), Object.defineProperties(i, {
        webkitRelativePath: {
          writable: !1
        }
      })), t([i]));
    }) : o.isDirectory && rr(o, (i) => {
      i.forEach((s) => {
        r(s, `${a}${o.name}/`);
      });
    });
  };
  e.forEach((o) => {
    r(o.webkitGetAsEntry());
  });
}, $t = () => ({
  capture: [Boolean, String],
  multipart: {
    type: Boolean,
    default: void 0
  },
  name: String,
  disabled: {
    type: Boolean,
    default: void 0
  },
  componentTag: String,
  action: [String, Function],
  method: String,
  directory: {
    type: Boolean,
    default: void 0
  },
  data: [Object, Function],
  headers: Object,
  accept: String,
  multiple: {
    type: Boolean,
    default: void 0
  },
  onBatchStart: Function,
  onReject: Function,
  onStart: Function,
  onError: Function,
  onSuccess: Function,
  onProgress: Function,
  beforeUpload: Function,
  customRequest: Function,
  withCredentials: {
    type: Boolean,
    default: void 0
  },
  openFileDialogOnClick: {
    type: Boolean,
    default: void 0
  },
  prefixCls: String,
  id: String,
  onMouseenter: Function,
  onMouseleave: Function,
  onClick: Function
});
var ir = function(e, t, n, r) {
  function o(a) {
    return a instanceof n ? a : new n(function(i) {
      i(a);
    });
  }
  return new (n || (n = Promise))(function(a, i) {
    function s(p) {
      try {
        b(r.next(p));
      } catch (O) {
        i(O);
      }
    }
    function u(p) {
      try {
        b(r.throw(p));
      } catch (O) {
        i(O);
      }
    }
    function b(p) {
      p.done ? a(p.value) : o(p.value).then(s, u);
    }
    b((r = r.apply(e, t || [])).next());
  });
}, lr = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const ar = H({
  compatConfig: {
    MODE: 3
  },
  name: "AjaxUploader",
  inheritAttrs: !1,
  props: $t(),
  setup(e, t) {
    let {
      slots: n,
      attrs: r,
      expose: o
    } = t;
    const a = Q(xe()), i = {}, s = Q();
    let u = !1;
    const b = (f, y) => ir(this, void 0, void 0, function* () {
      const {
        beforeUpload: v
      } = e;
      let P = f;
      if (v) {
        try {
          P = yield v(f, y);
        } catch {
          P = !1;
        }
        if (P === !1)
          return {
            origin: f,
            parsedFile: null,
            action: null,
            data: null
          };
      }
      const {
        action: L
      } = e;
      let E;
      typeof L == "function" ? E = yield L(f) : E = L;
      const {
        data: k
      } = e;
      let U;
      typeof k == "function" ? U = yield k(f) : U = k;
      const N = (
        // string type is from legacy `transformFile`.
        // Not sure if this will work since no related test case works with it
        (typeof P == "object" || typeof P == "string") && P ? P : f
      );
      let m;
      N instanceof File ? m = N : m = new File([N], f.name, {
        type: f.type
      });
      const $ = m;
      return $.uid = f.uid, {
        origin: f,
        data: U,
        parsedFile: $,
        action: E
      };
    }), p = (f) => {
      let {
        data: y,
        origin: v,
        action: P,
        parsedFile: L
      } = f;
      if (!u)
        return;
      const {
        onStart: E,
        customRequest: k,
        name: U,
        headers: N,
        withCredentials: m,
        method: $
      } = e, {
        uid: C
      } = v, S = k || er, I = {
        action: P,
        filename: U,
        data: y,
        file: L,
        headers: N,
        withCredentials: m,
        method: $ || "post",
        onProgress: (T) => {
          const {
            onProgress: A
          } = e;
          A == null || A(T, L);
        },
        onSuccess: (T, A) => {
          const {
            onSuccess: j
          } = e;
          j == null || j(T, L, A), delete i[C];
        },
        onError: (T, A) => {
          const {
            onError: j
          } = e;
          j == null || j(T, A, L), delete i[C];
        }
      };
      E(v), i[C] = S(I);
    }, O = () => {
      a.value = xe();
    }, h = (f) => {
      if (f) {
        const y = f.uid ? f.uid : f;
        i[y] && i[y].abort && i[y].abort(), delete i[y];
      } else
        Object.keys(i).forEach((y) => {
          i[y] && i[y].abort && i[y].abort(), delete i[y];
        });
    };
    ye(() => {
      u = !0;
    }), dt(() => {
      u = !1, h();
    });
    const d = (f) => {
      const y = [...f], v = y.map((P) => (P.uid = xe(), b(P, y)));
      Promise.all(v).then((P) => {
        const {
          onBatchStart: L
        } = e;
        L == null || L(P.map((E) => {
          let {
            origin: k,
            parsedFile: U
          } = E;
          return {
            file: k,
            parsedFile: U
          };
        })), P.filter((E) => E.parsedFile !== null).forEach((E) => {
          p(E);
        });
      });
    }, w = (f) => {
      const {
        accept: y,
        directory: v
      } = e, {
        files: P
      } = f.target, L = [...P].filter((E) => !v || Ie(E, y));
      d(L), O();
    }, l = (f) => {
      const y = s.value;
      if (!y)
        return;
      const {
        onClick: v
      } = e;
      y.click(), v && v(f);
    }, g = (f) => {
      f.key === "Enter" && l(f);
    }, x = (f) => {
      const {
        multiple: y
      } = e;
      if (f.preventDefault(), f.type !== "dragover")
        if (e.directory)
          or(Array.prototype.slice.call(f.dataTransfer.items), d, (v) => Ie(v, e.accept));
        else {
          const v = Cn(Array.prototype.slice.call(f.dataTransfer.files), (E) => Ie(E, e.accept));
          let P = v[0];
          const L = v[1];
          y === !1 && (P = P.slice(0, 1)), d(P), L.length && e.onReject && e.onReject(L);
        }
    };
    return o({
      abort: h
    }), () => {
      var f;
      const {
        componentTag: y,
        prefixCls: v,
        disabled: P,
        id: L,
        multiple: E,
        accept: k,
        capture: U,
        directory: N,
        openFileDialogOnClick: m,
        onMouseenter: $,
        onMouseleave: C
      } = e, S = lr(e, ["componentTag", "prefixCls", "disabled", "id", "multiple", "accept", "capture", "directory", "openFileDialogOnClick", "onMouseenter", "onMouseleave"]), I = {
        [v]: !0,
        [`${v}-disabled`]: P,
        [r.class]: !!r.class
      }, T = N ? {
        directory: "directory",
        webkitdirectory: "webkitdirectory"
      } : {};
      return c(y, F(F({}, P ? {} : {
        onClick: m ? l : () => {
        },
        onKeydown: m ? g : () => {
        },
        onMouseenter: $,
        onMouseleave: C,
        onDrop: x,
        onDragover: x,
        tabindex: "0"
      }), {}, {
        class: I,
        role: "button",
        style: r.style
      }), {
        default: () => [c("input", F(F(F({}, Jt(S, {
          aria: !0,
          data: !0
        })), {}, {
          id: L,
          type: "file",
          ref: s,
          onClick: (j) => j.stopPropagation(),
          onCancel: (j) => j.stopPropagation(),
          key: a.value,
          style: {
            display: "none"
          },
          accept: k
        }, T), {}, {
          multiple: E,
          onChange: w
        }, U != null ? {
          capture: U
        } : {}), null), (f = n.default) === null || f === void 0 ? void 0 : f.call(n)]
      });
    };
  }
});
function _e() {
}
const et = H({
  compatConfig: {
    MODE: 3
  },
  name: "Upload",
  inheritAttrs: !1,
  props: ie($t(), {
    componentTag: "span",
    prefixCls: "rc-upload",
    data: {},
    headers: {},
    name: "file",
    multipart: !1,
    onStart: _e,
    onError: _e,
    onSuccess: _e,
    multiple: !1,
    beforeUpload: null,
    customRequest: null,
    withCredentials: !1,
    openFileDialogOnClick: !0
  }),
  setup(e, t) {
    let {
      slots: n,
      attrs: r,
      expose: o
    } = t;
    const a = Q();
    return o({
      abort: (s) => {
        var u;
        (u = a.value) === null || u === void 0 || u.abort(s);
      }
    }), () => c(ar, F(F(F({}, e), r), {}, {
      ref: a
    }), n);
  }
});
var sr = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M779.3 196.6c-94.2-94.2-247.6-94.2-341.7 0l-261 260.8c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l261-260.8c32.4-32.4 75.5-50.2 121.3-50.2s88.9 17.8 121.2 50.2c32.4 32.4 50.2 75.5 50.2 121.2 0 45.8-17.8 88.8-50.2 121.2l-266 265.9-43.1 43.1c-40.3 40.3-105.8 40.3-146.1 0-19.5-19.5-30.2-45.4-30.2-73s10.7-53.5 30.2-73l263.9-263.8c6.7-6.6 15.5-10.3 24.9-10.3h.1c9.4 0 18.1 3.7 24.7 10.3 6.7 6.7 10.3 15.5 10.3 24.9 0 9.3-3.7 18.1-10.3 24.7L372.4 653c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l215.6-215.6c19.9-19.9 30.8-46.3 30.8-74.4s-11-54.6-30.8-74.4c-41.1-41.1-107.9-41-149 0L463 364 224.8 602.1A172.22 172.22 0 00174 724.8c0 46.3 18.1 89.8 50.8 122.5 33.9 33.8 78.3 50.7 122.7 50.7 44.4 0 88.8-16.9 122.6-50.7l309.2-309C824.8 492.7 850 432 850 367.5c.1-64.6-25.1-125.3-70.7-170.9z" } }] }, name: "paper-clip", theme: "outlined" };
function tt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      cr(e, o, n[o]);
    });
  }
  return e;
}
function cr(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ae = function(t, n) {
  var r = tt({}, t, n.attrs);
  return c(te, tt({}, r, {
    icon: sr
  }), null);
};
Ae.displayName = "PaperClipOutlined";
Ae.inheritAttrs = !1;
var ur = { icon: function(t, n) {
  return { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136v-39.9l138.5-164.3 150.1 178L658.1 489 888 761.6V792zm0-129.8L664.2 396.8c-3.2-3.8-9-3.8-12.2 0L424.6 666.4l-144-170.7c-3.2-3.8-9-3.8-12.2 0L136 652.7V232h752v430.2z", fill: t } }, { tag: "path", attrs: { d: "M424.6 765.8l-150.1-178L136 752.1V792h752v-30.4L658.1 489z", fill: n } }, { tag: "path", attrs: { d: "M136 652.7l132.4-157c3.2-3.8 9-3.8 12.2 0l144 170.7L652 396.8c3.2-3.8 9-3.8 12.2 0L888 662.2V232H136v420.7zM304 280a88 88 0 110 176 88 88 0 010-176z", fill: n } }, { tag: "path", attrs: { d: "M276 368a28 28 0 1056 0 28 28 0 10-56 0z", fill: n } }, { tag: "path", attrs: { d: "M304 456a88 88 0 100-176 88 88 0 000 176zm0-116c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28z", fill: t } }] };
}, name: "picture", theme: "twotone" };
function nt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      dr(e, o, n[o]);
    });
  }
  return e;
}
function dr(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ue = function(t, n) {
  var r = nt({}, t, n.attrs);
  return c(te, nt({}, r, {
    icon: ur
  }), null);
};
Ue.displayName = "PictureTwoTone";
Ue.inheritAttrs = !1;
var pr = { icon: function(t, n) {
  return { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M534 352V136H232v752h560V394H576a42 42 0 01-42-42z", fill: n } }, { tag: "path", attrs: { d: "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM602 137.8L790.2 326H602V137.8zM792 888H232V136h302v216a42 42 0 0042 42h216v494z", fill: t } }] };
}, name: "file", theme: "twotone" };
function rt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      fr(e, o, n[o]);
    });
  }
  return e;
}
function fr(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Me = function(t, n) {
  var r = rt({}, t, n.attrs);
  return c(te, rt({}, r, {
    icon: pr
  }), null);
};
Me.displayName = "FileTwoTone";
Me.inheritAttrs = !1;
function Ct() {
  return {
    capture: K([Boolean, String]),
    type: z(),
    name: String,
    defaultFileList: ve(),
    fileList: ve(),
    action: K([String, Function]),
    directory: B(),
    data: K([Object, Function]),
    method: z(),
    headers: G(),
    showUploadList: K([Boolean, Object]),
    multiple: B(),
    accept: String,
    beforeUpload: _(),
    onChange: _(),
    "onUpdate:fileList": _(),
    onDrop: _(),
    listType: z(),
    onPreview: _(),
    onDownload: _(),
    onReject: _(),
    onRemove: _(),
    /** @deprecated Please use `onRemove` directly */
    remove: _(),
    supportServerRender: B(),
    disabled: B(),
    prefixCls: String,
    customRequest: _(),
    withCredentials: B(),
    openFileDialogOnClick: B(),
    locale: G(),
    id: String,
    previewFile: _(),
    /** @deprecated Please use `beforeUpload` directly */
    transformFile: _(),
    iconRender: _(),
    isImageUrl: _(),
    progress: G(),
    itemRender: _(),
    /** Config max count of `fileList`. Will replace current one when `maxCount` is 1 */
    maxCount: Number,
    height: K([Number, String]),
    removeIcon: _(),
    downloadIcon: _(),
    previewIcon: _()
  };
}
function gr() {
  return {
    listType: z(),
    onPreview: _(),
    onDownload: _(),
    onRemove: _(),
    items: ve(),
    progress: G(),
    prefixCls: z(),
    showRemoveIcon: B(),
    showDownloadIcon: B(),
    showPreviewIcon: B(),
    removeIcon: _(),
    downloadIcon: _(),
    previewIcon: _(),
    locale: G(void 0),
    previewFile: _(),
    iconRender: _(),
    isImageUrl: _(),
    appendAction: _(),
    appendActionVisible: B(),
    itemRender: _()
  };
}
function pe(e) {
  return D(D({}, e), {
    lastModified: e.lastModified,
    lastModifiedDate: e.lastModifiedDate,
    name: e.name,
    size: e.size,
    type: e.type,
    uid: e.uid,
    percent: 0,
    originFileObj: e
  });
}
function fe(e, t) {
  const n = [...t], r = n.findIndex((o) => {
    let {
      uid: a
    } = o;
    return a === e.uid;
  });
  return r === -1 ? n.push(e) : n[r] = e, n;
}
function De(e, t) {
  const n = e.uid !== void 0 ? "uid" : "name";
  return t.filter((r) => r[n] === e[n])[0];
}
function mr(e, t) {
  const n = e.uid !== void 0 ? "uid" : "name", r = t.filter((o) => o[n] !== e[n]);
  return r.length === t.length ? null : r;
}
const vr = function() {
  const t = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "").split("/"), r = t[t.length - 1].split(/#|\?/)[0];
  return (/\.[^./\\]*$/.exec(r) || [""])[0];
}, St = (e) => e.indexOf("image/") === 0, hr = (e) => {
  if (e.type && !e.thumbUrl)
    return St(e.type);
  const t = e.thumbUrl || e.url || "", n = vr(t);
  return /^data:image\//.test(t) || /(webp|svg|png|gif|jpg|jpeg|jfif|bmp|dpg|ico)$/i.test(n) ? !0 : !(/^data:/.test(t) || n);
}, Y = 200;
function yr(e) {
  return new Promise((t) => {
    if (!e.type || !St(e.type)) {
      t("");
      return;
    }
    const n = document.createElement("canvas");
    n.width = Y, n.height = Y, n.style.cssText = `position: fixed; left: 0; top: 0; width: ${Y}px; height: ${Y}px; z-index: 9999; display: none;`, document.body.appendChild(n);
    const r = n.getContext("2d"), o = new Image();
    if (o.onload = () => {
      const {
        width: a,
        height: i
      } = o;
      let s = Y, u = Y, b = 0, p = 0;
      a > i ? (u = i * (Y / a), p = -(u - s) / 2) : (s = a * (Y / i), b = -(s - u) / 2), r.drawImage(o, b, p, s, u);
      const O = n.toDataURL();
      document.body.removeChild(n), t(O);
    }, o.crossOrigin = "anonymous", e.type.startsWith("image/svg+xml")) {
      const a = new FileReader();
      a.addEventListener("load", () => {
        a.result && (o.src = a.result);
      }), a.readAsDataURL(e);
    } else
      o.src = window.URL.createObjectURL(e);
  });
}
var br = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z" } }] }, name: "download", theme: "outlined" };
function ot(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      wr(e, o, n[o]);
    });
  }
  return e;
}
function wr(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var ke = function(t, n) {
  var r = ot({}, t, n.attrs);
  return c(te, ot({}, r, {
    icon: br
  }), null);
};
ke.displayName = "DownloadOutlined";
ke.inheritAttrs = !1;
const $r = () => ({
  prefixCls: String,
  locale: G(void 0),
  file: G(),
  items: ve(),
  listType: z(),
  isImgUrl: _(),
  showRemoveIcon: B(),
  showDownloadIcon: B(),
  showPreviewIcon: B(),
  removeIcon: _(),
  downloadIcon: _(),
  previewIcon: _(),
  iconRender: _(),
  actionIconRender: _(),
  itemRender: _(),
  onPreview: _(),
  onClose: _(),
  onDownload: _(),
  progress: G()
}), Cr = H({
  compatConfig: {
    MODE: 3
  },
  name: "ListItem",
  inheritAttrs: !1,
  props: $r(),
  setup(e, t) {
    let {
      slots: n,
      attrs: r
    } = t;
    var o;
    const a = ce(!1), i = ce();
    ye(() => {
      i.value = setTimeout(() => {
        a.value = !0;
      }, 300);
    }), dt(() => {
      clearTimeout(i.value);
    });
    const s = ce((o = e.file) === null || o === void 0 ? void 0 : o.status);
    pt(() => {
      var p;
      return (p = e.file) === null || p === void 0 ? void 0 : p.status;
    }, (p) => {
      p !== "removed" && (s.value = p);
    });
    const {
      rootPrefixCls: u
    } = be("upload", e), b = R(() => Yt(`${u.value}-fade`));
    return () => {
      var p, O;
      const {
        prefixCls: h,
        locale: d,
        listType: w,
        file: l,
        items: g,
        progress: x,
        iconRender: f = n.iconRender,
        actionIconRender: y = n.actionIconRender,
        itemRender: v = n.itemRender,
        isImgUrl: P,
        showPreviewIcon: L,
        showRemoveIcon: E,
        showDownloadIcon: k,
        previewIcon: U = n.previewIcon,
        removeIcon: N = n.removeIcon,
        downloadIcon: m = n.downloadIcon,
        onPreview: $,
        onDownload: C,
        onClose: S
      } = e, {
        class: I,
        style: T
      } = r, A = f({
        file: l
      });
      let j = c("div", {
        class: `${h}-text-icon`
      }, [A]);
      if (w === "picture" || w === "picture-card")
        if (s.value === "uploading" || !l.thumbUrl && !l.url) {
          const W = {
            [`${h}-list-item-thumbnail`]: !0,
            [`${h}-list-item-file`]: s.value !== "uploading"
          };
          j = c("div", {
            class: W
          }, [A]);
        } else {
          const W = P != null && P(l) ? c("img", {
            src: l.thumbUrl || l.url,
            alt: l.name,
            class: `${h}-list-item-image`,
            crossorigin: l.crossOrigin
          }, null) : A, _t = {
            [`${h}-list-item-thumbnail`]: !0,
            [`${h}-list-item-file`]: P && !P(l)
          };
          j = c("a", {
            class: _t,
            onClick: (Dt) => $(l, Dt),
            href: l.url || l.thumbUrl,
            target: "_blank",
            rel: "noopener noreferrer"
          }, [W]);
        }
      const M = {
        [`${h}-list-item`]: !0,
        [`${h}-list-item-${s.value}`]: !0
      }, q = typeof l.linkProps == "string" ? JSON.parse(l.linkProps) : l.linkProps, ne = E ? y({
        customIcon: N ? N({
          file: l
        }) : c(Ee, null, null),
        callback: () => S(l),
        prefixCls: h,
        title: d.removeFile
      }) : null, X = k && s.value === "done" ? y({
        customIcon: m ? m({
          file: l
        }) : c(ke, null, null),
        callback: () => C(l),
        prefixCls: h,
        title: d.downloadFile
      }) : null, V = w !== "picture-card" && c("span", {
        key: "download-delete",
        class: [`${h}-list-item-actions`, {
          picture: w === "picture"
        }]
      }, [X, ne]), J = `${h}-list-item-name`, le = l.url ? [c("a", F(F({
        key: "view",
        target: "_blank",
        rel: "noopener noreferrer",
        class: J,
        title: l.name
      }, q), {}, {
        href: l.url,
        onClick: (W) => $(l, W)
      }), [l.name]), V] : [c("span", {
        key: "view",
        class: J,
        onClick: (W) => $(l, W),
        title: l.name
      }, [l.name]), V], Ce = {
        pointerEvents: "none",
        opacity: 0.5
      }, Ot = L ? c("a", {
        href: l.url || l.thumbUrl,
        target: "_blank",
        rel: "noopener noreferrer",
        style: l.url || l.thumbUrl ? void 0 : Ce,
        onClick: (W) => $(l, W),
        title: d.previewFile
      }, [U ? U({
        file: l
      }) : c(Zt, null, null)]) : null, Pt = w === "picture-card" && s.value !== "uploading" && c("span", {
        class: `${h}-list-item-actions`
      }, [Ot, s.value === "done" && X, ne]), ze = c("div", {
        class: M
      }, [j, le, Pt, a.value && c(Rt, b.value, {
        default: () => [ft(c("div", {
          class: `${h}-list-item-progress`
        }, ["percent" in l ? c(Yn, F(F({}, x), {}, {
          type: "line",
          percent: l.percent
        }), null) : null]), [[gt, s.value === "uploading"]])]
      })]), xt = {
        [`${h}-list-item-container`]: !0,
        [`${I}`]: !!I
      }, It = l.response && typeof l.response == "string" ? l.response : ((p = l.error) === null || p === void 0 ? void 0 : p.statusText) || ((O = l.error) === null || O === void 0 ? void 0 : O.message) || d.uploadError, He = s.value === "error" ? c(mt, {
        title: It,
        getPopupContainer: (W) => W.parentNode
      }, {
        default: () => [ze]
      }) : ze;
      return c("div", {
        class: xt,
        style: T
      }, [v ? v({
        originNode: He,
        file: l,
        fileList: g,
        actions: {
          download: C.bind(null, l),
          preview: $.bind(null, l),
          remove: S.bind(null, l)
        }
      }) : He]);
    };
  }
}), Sr = (e, t) => {
  let {
    slots: n
  } = t;
  var r;
  return en((r = n.default) === null || r === void 0 ? void 0 : r.call(n))[0];
}, Or = H({
  compatConfig: {
    MODE: 3
  },
  name: "AUploadList",
  props: ie(gr(), {
    listType: "text",
    progress: {
      strokeWidth: 2,
      showInfo: !1
    },
    showRemoveIcon: !0,
    showDownloadIcon: !1,
    showPreviewIcon: !0,
    previewFile: yr,
    isImageUrl: hr,
    items: [],
    appendActionVisible: !0
  }),
  setup(e, t) {
    let {
      slots: n,
      expose: r
    } = t;
    const o = ce(!1);
    ye(() => {
      o.value == !0;
    });
    const a = ce([]);
    pt(() => e.items, function() {
      let l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      a.value = l.slice();
    }, {
      immediate: !0,
      deep: !0
    }), Tt(() => {
      if (e.listType !== "picture" && e.listType !== "picture-card")
        return;
      let l = !1;
      (e.items || []).forEach((g, x) => {
        typeof document > "u" || typeof window > "u" || !window.FileReader || !window.File || !(g.originFileObj instanceof File || g.originFileObj instanceof Blob) || g.thumbUrl !== void 0 || (g.thumbUrl = "", e.previewFile && e.previewFile(g.originFileObj).then((f) => {
          const y = f || "";
          y !== g.thumbUrl && (a.value[x].thumbUrl = y, l = !0);
        }));
      }), l && jt(a);
    });
    const i = (l, g) => {
      if (e.onPreview)
        return g == null || g.preventDefault(), e.onPreview(l);
    }, s = (l) => {
      typeof e.onDownload == "function" ? e.onDownload(l) : l.url && window.open(l.url);
    }, u = (l) => {
      var g;
      (g = e.onRemove) === null || g === void 0 || g.call(e, l);
    }, b = (l) => {
      let {
        file: g
      } = l;
      const x = e.iconRender || n.iconRender;
      if (x)
        return x({
          file: g,
          listType: e.listType
        });
      const f = g.status === "uploading", y = e.isImageUrl && e.isImageUrl(g) ? c(Ue, null, null) : c(Me, null, null);
      let v = f ? c(Re, null, null) : c(Ae, null, null);
      return e.listType === "picture" ? v = f ? c(Re, null, null) : y : e.listType === "picture-card" && (v = f ? e.locale.uploading : y), v;
    }, p = (l) => {
      const {
        customIcon: g,
        callback: x,
        prefixCls: f,
        title: y
      } = l, v = {
        type: "text",
        size: "small",
        title: y,
        onClick: () => {
          x();
        },
        class: `${f}-list-item-action`
      };
      return tn(g) ? c(Te, v, {
        icon: () => g
      }) : c(Te, v, {
        default: () => [c("span", null, [g])]
      });
    };
    r({
      handlePreview: i,
      handleDownload: s
    });
    const {
      prefixCls: O,
      rootPrefixCls: h
    } = be("upload", e), d = R(() => ({
      [`${O.value}-list`]: !0,
      [`${O.value}-list-${e.listType}`]: !0
    })), w = R(() => {
      const l = D({}, Qt(`${h.value}-motion-collapse`));
      delete l.onAfterAppear, delete l.onAfterEnter, delete l.onAfterLeave;
      const g = D(D({}, Kt(`${O.value}-${e.listType === "picture-card" ? "animate-inline" : "animate"}`)), {
        class: d.value,
        appear: o.value
      });
      return e.listType !== "picture-card" ? D(D({}, l), g) : g;
    });
    return () => {
      const {
        listType: l,
        locale: g,
        isImageUrl: x,
        showPreviewIcon: f,
        showRemoveIcon: y,
        showDownloadIcon: v,
        removeIcon: P,
        previewIcon: L,
        downloadIcon: E,
        progress: k,
        appendAction: U,
        itemRender: N,
        appendActionVisible: m
      } = e, $ = U == null ? void 0 : U(), C = a.value;
      return c(Lt, F(F({}, w.value), {}, {
        tag: "div"
      }), {
        default: () => [C.map((S) => {
          const {
            uid: I
          } = S;
          return c(Cr, {
            key: I,
            locale: g,
            prefixCls: O.value,
            file: S,
            items: C,
            progress: k,
            listType: l,
            isImgUrl: x,
            showPreviewIcon: f,
            showRemoveIcon: y,
            showDownloadIcon: v,
            onPreview: i,
            onDownload: s,
            onClose: u,
            removeIcon: P,
            previewIcon: L,
            downloadIcon: E,
            itemRender: N
          }, D(D({}, n), {
            iconRender: b,
            actionIconRender: p
          }));
        }), U ? ft(c(Sr, {
          key: "__ant_upload_appendAction"
        }, {
          default: () => $
        }), [[gt, !!m]]) : null]
      });
    };
  }
}), Pr = (e) => {
  const {
    componentCls: t,
    iconCls: n
  } = e;
  return {
    [`${t}-wrapper`]: {
      [`${t}-drag`]: {
        position: "relative",
        width: "100%",
        height: "100%",
        textAlign: "center",
        background: e.colorFillAlter,
        border: `${e.lineWidth}px dashed ${e.colorBorder}`,
        borderRadius: e.borderRadiusLG,
        cursor: "pointer",
        transition: `border-color ${e.motionDurationSlow}`,
        [t]: {
          padding: `${e.padding}px 0`
        },
        [`${t}-btn`]: {
          display: "table",
          width: "100%",
          height: "100%",
          outline: "none"
        },
        [`${t}-drag-container`]: {
          display: "table-cell",
          verticalAlign: "middle"
        },
        [`&:not(${t}-disabled):hover`]: {
          borderColor: e.colorPrimaryHover
        },
        [`p${t}-drag-icon`]: {
          marginBottom: e.margin,
          [n]: {
            color: e.colorPrimary,
            fontSize: e.uploadThumbnailSize
          }
        },
        [`p${t}-text`]: {
          margin: `0 0 ${e.marginXXS}px`,
          color: e.colorTextHeading,
          fontSize: e.fontSizeLG
        },
        [`p${t}-hint`]: {
          color: e.colorTextDescription,
          fontSize: e.fontSize
        },
        // ===================== Disabled =====================
        [`&${t}-disabled`]: {
          cursor: "not-allowed",
          [`p${t}-drag-icon ${n},
            p${t}-text,
            p${t}-hint
          `]: {
            color: e.colorTextDisabled
          }
        }
      }
    }
  };
}, xr = (e) => {
  const {
    componentCls: t,
    antCls: n,
    iconCls: r,
    fontSize: o,
    lineHeight: a
  } = e, i = `${t}-list-item`, s = `${i}-actions`, u = `${i}-action`, b = Math.round(o * a);
  return {
    [`${t}-wrapper`]: {
      [`${t}-list`]: D(D({}, bt()), {
        lineHeight: e.lineHeight,
        [i]: {
          position: "relative",
          height: e.lineHeight * o,
          marginTop: e.marginXS,
          fontSize: o,
          display: "flex",
          alignItems: "center",
          transition: `background-color ${e.motionDurationSlow}`,
          "&:hover": {
            backgroundColor: e.controlItemBgHover
          },
          [`${i}-name`]: D(D({}, wt), {
            padding: `0 ${e.paddingXS}px`,
            lineHeight: a,
            flex: "auto",
            transition: `all ${e.motionDurationSlow}`
          }),
          [s]: {
            [u]: {
              opacity: 0
            },
            [`${u}${n}-btn-sm`]: {
              height: b,
              border: 0,
              lineHeight: 1,
              // FIXME: should not override small button
              "> span": {
                transform: "scale(1)"
              }
            },
            [`
              ${u}:focus,
              &.picture ${u}
            `]: {
              opacity: 1
            },
            [r]: {
              color: e.colorTextDescription,
              transition: `all ${e.motionDurationSlow}`
            },
            [`&:hover ${r}`]: {
              color: e.colorText
            }
          },
          [`${t}-icon ${r}`]: {
            color: e.colorTextDescription,
            fontSize: o
          },
          [`${i}-progress`]: {
            position: "absolute",
            bottom: -e.uploadProgressOffset,
            width: "100%",
            paddingInlineStart: o + e.paddingXS,
            fontSize: o,
            lineHeight: 0,
            pointerEvents: "none",
            "> div": {
              margin: 0
            }
          }
        },
        [`${i}:hover ${u}`]: {
          opacity: 1,
          color: e.colorText
        },
        [`${i}-error`]: {
          color: e.colorError,
          [`${i}-name, ${t}-icon ${r}`]: {
            color: e.colorError
          },
          [s]: {
            [`${r}, ${r}:hover`]: {
              color: e.colorError
            },
            [u]: {
              opacity: 1
            }
          }
        },
        [`${t}-list-item-container`]: {
          transition: `opacity ${e.motionDurationSlow}, height ${e.motionDurationSlow}`,
          // For smooth removing animation
          "&::before": {
            display: "table",
            width: 0,
            height: 0,
            content: '""'
          }
        }
      })
    }
  };
}, it = new Le("uploadAnimateInlineIn", {
  from: {
    width: 0,
    height: 0,
    margin: 0,
    padding: 0,
    opacity: 0
  }
}), lt = new Le("uploadAnimateInlineOut", {
  to: {
    width: 0,
    height: 0,
    margin: 0,
    padding: 0,
    opacity: 0
  }
}), Ir = (e) => {
  const {
    componentCls: t
  } = e, n = `${t}-animate-inline`;
  return [{
    [`${t}-wrapper`]: {
      [`${n}-appear, ${n}-enter, ${n}-leave`]: {
        animationDuration: e.motionDurationSlow,
        animationTimingFunction: e.motionEaseInOutCirc,
        animationFillMode: "forwards"
      },
      [`${n}-appear, ${n}-enter`]: {
        animationName: it
      },
      [`${n}-leave`]: {
        animationName: lt
      }
    }
  }, it, lt];
}, _r = (e) => {
  const {
    componentCls: t,
    iconCls: n,
    uploadThumbnailSize: r,
    uploadProgressOffset: o
  } = e, a = `${t}-list`, i = `${a}-item`;
  return {
    [`${t}-wrapper`]: {
      // ${listCls} 增加优先级
      [`${a}${a}-picture, ${a}${a}-picture-card`]: {
        [i]: {
          position: "relative",
          height: r + e.lineWidth * 2 + e.paddingXS * 2,
          padding: e.paddingXS,
          border: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,
          borderRadius: e.borderRadiusLG,
          "&:hover": {
            background: "transparent"
          },
          [`${i}-thumbnail`]: D(D({}, wt), {
            width: r,
            height: r,
            lineHeight: `${r + e.paddingSM}px`,
            textAlign: "center",
            flex: "none",
            [n]: {
              fontSize: e.fontSizeHeading2,
              color: e.colorPrimary
            },
            img: {
              display: "block",
              width: "100%",
              height: "100%",
              overflow: "hidden"
            }
          }),
          [`${i}-progress`]: {
            bottom: o,
            width: `calc(100% - ${e.paddingSM * 2}px)`,
            marginTop: 0,
            paddingInlineStart: r + e.paddingXS
          }
        },
        [`${i}-error`]: {
          borderColor: e.colorError,
          // Adjust the color of the error icon : https://github.com/ant-design/ant-design/pull/24160
          [`${i}-thumbnail ${n}`]: {
            "svg path[fill='#e6f7ff']": {
              fill: e.colorErrorBg
            },
            "svg path[fill='#1890ff']": {
              fill: e.colorError
            }
          }
        },
        [`${i}-uploading`]: {
          borderStyle: "dashed",
          [`${i}-name`]: {
            marginBottom: o
          }
        }
      }
    }
  };
}, Dr = (e) => {
  const {
    componentCls: t,
    iconCls: n,
    fontSizeLG: r,
    colorTextLightSolid: o
  } = e, a = `${t}-list`, i = `${a}-item`, s = e.uploadPicCardSize;
  return {
    [`${t}-wrapper${t}-picture-card-wrapper`]: D(D({}, bt()), {
      display: "inline-block",
      width: "100%",
      [`${t}${t}-select`]: {
        width: s,
        height: s,
        marginInlineEnd: e.marginXS,
        marginBottom: e.marginXS,
        textAlign: "center",
        verticalAlign: "top",
        backgroundColor: e.colorFillAlter,
        border: `${e.lineWidth}px dashed ${e.colorBorder}`,
        borderRadius: e.borderRadiusLG,
        cursor: "pointer",
        transition: `border-color ${e.motionDurationSlow}`,
        [`> ${t}`]: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          textAlign: "center"
        },
        [`&:not(${t}-disabled):hover`]: {
          borderColor: e.colorPrimary
        }
      },
      // list
      [`${a}${a}-picture-card`]: {
        [`${a}-item-container`]: {
          display: "inline-block",
          width: s,
          height: s,
          marginBlock: `0 ${e.marginXS}px`,
          marginInline: `0 ${e.marginXS}px`,
          verticalAlign: "top"
        },
        "&::after": {
          display: "none"
        },
        [i]: {
          height: "100%",
          margin: 0,
          "&::before": {
            position: "absolute",
            zIndex: 1,
            width: `calc(100% - ${e.paddingXS * 2}px)`,
            height: `calc(100% - ${e.paddingXS * 2}px)`,
            backgroundColor: e.colorBgMask,
            opacity: 0,
            transition: `all ${e.motionDurationSlow}`,
            content: '" "'
          }
        },
        [`${i}:hover`]: {
          [`&::before, ${i}-actions`]: {
            opacity: 1
          }
        },
        [`${i}-actions`]: {
          position: "absolute",
          insetInlineStart: 0,
          zIndex: 10,
          width: "100%",
          whiteSpace: "nowrap",
          textAlign: "center",
          opacity: 0,
          transition: `all ${e.motionDurationSlow}`,
          [`${n}-eye, ${n}-download, ${n}-delete`]: {
            zIndex: 10,
            width: r,
            margin: `0 ${e.marginXXS}px`,
            fontSize: r,
            cursor: "pointer",
            transition: `all ${e.motionDurationSlow}`
          }
        },
        [`${i}-actions, ${i}-actions:hover`]: {
          [`${n}-eye, ${n}-download, ${n}-delete`]: {
            color: new nn(o).setAlpha(0.65).toRgbString(),
            "&:hover": {
              color: o
            }
          }
        },
        [`${i}-thumbnail, ${i}-thumbnail img`]: {
          position: "static",
          display: "block",
          width: "100%",
          height: "100%",
          objectFit: "contain"
        },
        [`${i}-name`]: {
          display: "none",
          textAlign: "center"
        },
        [`${i}-file + ${i}-name`]: {
          position: "absolute",
          bottom: e.margin,
          display: "block",
          width: `calc(100% - ${e.paddingXS * 2}px)`
        },
        [`${i}-uploading`]: {
          [`&${i}`]: {
            backgroundColor: e.colorFillAlter
          },
          [`&::before, ${n}-eye, ${n}-download, ${n}-delete`]: {
            display: "none"
          }
        },
        [`${i}-progress`]: {
          bottom: e.marginXL,
          width: `calc(100% - ${e.paddingXS * 2}px)`,
          paddingInlineStart: 0
        }
      }
    })
  };
}, Fr = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-rtl`]: {
      direction: "rtl"
    }
  };
}, Rr = (e) => {
  const {
    componentCls: t,
    colorTextDisabled: n
  } = e;
  return {
    [`${t}-wrapper`]: D(D({}, yt(e)), {
      [t]: {
        outline: 0,
        "input[type='file']": {
          cursor: "pointer"
        }
      },
      [`${t}-select`]: {
        display: "inline-block"
      },
      [`${t}-disabled`]: {
        color: n,
        cursor: "not-allowed"
      }
    })
  };
}, Tr = vt("Upload", (e) => {
  const {
    fontSizeHeading3: t,
    fontSize: n,
    lineHeight: r,
    lineWidth: o,
    controlHeightLG: a
  } = e, i = Math.round(n * r), s = ht(e, {
    uploadThumbnailSize: t * 2,
    uploadProgressOffset: i / 2 + o,
    uploadPicCardSize: a * 2.55
  });
  return [Rr(s), Pr(s), _r(s), Dr(s), xr(s), Ir(s), Fr(s), rn(s)];
});
var jr = function(e, t, n, r) {
  function o(a) {
    return a instanceof n ? a : new n(function(i) {
      i(a);
    });
  }
  return new (n || (n = Promise))(function(a, i) {
    function s(p) {
      try {
        b(r.next(p));
      } catch (O) {
        i(O);
      }
    }
    function u(p) {
      try {
        b(r.throw(p));
      } catch (O) {
        i(O);
      }
    }
    function b(p) {
      p.done ? a(p.value) : o(p.value).then(s, u);
    }
    b((r = r.apply(e, t || [])).next());
  });
}, Lr = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const se = `__LIST_IGNORE_${Date.now()}__`, ge = H({
  compatConfig: {
    MODE: 3
  },
  name: "AUpload",
  inheritAttrs: !1,
  props: ie(Ct(), {
    type: "select",
    multiple: !1,
    action: "",
    data: {},
    accept: "",
    showUploadList: !0,
    listType: "text",
    supportServerRender: !0
  }),
  setup(e, t) {
    let {
      slots: n,
      attrs: r,
      expose: o
    } = t;
    const a = on(), {
      prefixCls: i,
      direction: s,
      disabled: u
    } = be("upload", e), [b, p] = Tr(i), O = ln(), h = R(() => {
      var m;
      return (m = u.value) !== null && m !== void 0 ? m : O.value;
    }), [d, w] = an(e.defaultFileList || [], {
      value: Et(e, "fileList"),
      postState: (m) => {
        const $ = Date.now();
        return (m ?? []).map((C, S) => (!C.uid && !Object.isFrozen(C) && (C.uid = `__AUTO__${$}_${S}__`), C));
      }
    }), l = Q("drop"), g = Q(null);
    ye(() => {
      Z(e.fileList !== void 0 || r.value === void 0, "Upload", "`value` is not a valid prop, do you mean `fileList`?"), Z(e.transformFile === void 0, "Upload", "`transformFile` is deprecated. Please use `beforeUpload` directly."), Z(e.remove === void 0, "Upload", "`remove` props is deprecated. Please use `remove` event.");
    });
    const x = (m, $, C) => {
      var S, I;
      let T = [...$];
      e.maxCount === 1 ? T = T.slice(-1) : e.maxCount && (T = T.slice(0, e.maxCount)), w(T);
      const A = {
        file: m,
        fileList: T
      };
      C && (A.event = C), (S = e["onUpdate:fileList"]) === null || S === void 0 || S.call(e, A.fileList), (I = e.onChange) === null || I === void 0 || I.call(e, A), a.onFieldChange();
    }, f = (m, $) => jr(this, void 0, void 0, function* () {
      const {
        beforeUpload: C,
        transformFile: S
      } = e;
      let I = m;
      if (C) {
        const T = yield C(m, $);
        if (T === !1)
          return !1;
        if (delete m[se], T === se)
          return Object.defineProperty(m, se, {
            value: !0,
            configurable: !0
          }), !1;
        typeof T == "object" && T && (I = T);
      }
      return S && (I = yield S(I)), I;
    }), y = (m) => {
      const $ = m.filter((I) => !I.file[se]);
      if (!$.length)
        return;
      const C = $.map((I) => pe(I.file));
      let S = [...d.value];
      C.forEach((I) => {
        S = fe(I, S);
      }), C.forEach((I, T) => {
        let A = I;
        if ($[T].parsedFile)
          I.status = "uploading";
        else {
          const {
            originFileObj: j
          } = I;
          let M;
          try {
            M = new File([j], j.name, {
              type: j.type
            });
          } catch {
            M = new Blob([j], {
              type: j.type
            }), M.name = j.name, M.lastModifiedDate = /* @__PURE__ */ new Date(), M.lastModified = (/* @__PURE__ */ new Date()).getTime();
          }
          M.uid = I.uid, A = M;
        }
        x(A, S);
      });
    }, v = (m, $, C) => {
      try {
        typeof m == "string" && (m = JSON.parse(m));
      } catch {
      }
      if (!De($, d.value))
        return;
      const S = pe($);
      S.status = "done", S.percent = 100, S.response = m, S.xhr = C;
      const I = fe(S, d.value);
      x(S, I);
    }, P = (m, $) => {
      if (!De($, d.value))
        return;
      const C = pe($);
      C.status = "uploading", C.percent = m.percent;
      const S = fe(C, d.value);
      x(C, S, m);
    }, L = (m, $, C) => {
      if (!De(C, d.value))
        return;
      const S = pe(C);
      S.error = m, S.response = $, S.status = "error";
      const I = fe(S, d.value);
      x(S, I);
    }, E = (m) => {
      let $;
      const C = e.onRemove || e.remove;
      Promise.resolve(typeof C == "function" ? C(m) : C).then((S) => {
        var I, T;
        if (S === !1)
          return;
        const A = mr(m, d.value);
        A && ($ = D(D({}, m), {
          status: "removed"
        }), (I = d.value) === null || I === void 0 || I.forEach((j) => {
          const M = $.uid !== void 0 ? "uid" : "name";
          j[M] === $[M] && !Object.isFrozen(j) && (j.status = "removed");
        }), (T = g.value) === null || T === void 0 || T.abort($), x($, A));
      });
    }, k = (m) => {
      var $;
      l.value = m.type, m.type === "drop" && (($ = e.onDrop) === null || $ === void 0 || $.call(e, m));
    };
    o({
      onBatchStart: y,
      onSuccess: v,
      onProgress: P,
      onError: L,
      fileList: d,
      upload: g
    });
    const [U] = sn("Upload", cn.Upload, R(() => e.locale)), N = (m, $) => {
      const {
        removeIcon: C,
        previewIcon: S,
        downloadIcon: I,
        previewFile: T,
        onPreview: A,
        onDownload: j,
        isImageUrl: M,
        progress: q,
        itemRender: ne,
        iconRender: X,
        showUploadList: V
      } = e, {
        showDownloadIcon: J,
        showPreviewIcon: le,
        showRemoveIcon: Ce
      } = typeof V == "boolean" ? {} : V;
      return V ? c(Or, {
        prefixCls: i.value,
        listType: e.listType,
        items: d.value,
        previewFile: T,
        onPreview: A,
        onDownload: j,
        onRemove: E,
        showRemoveIcon: !h.value && Ce,
        showPreviewIcon: le,
        showDownloadIcon: J,
        removeIcon: C,
        previewIcon: S,
        downloadIcon: I,
        iconRender: X,
        locale: U.value,
        isImageUrl: M,
        progress: q,
        itemRender: ne,
        appendActionVisible: $,
        appendAction: m
      }, D({}, n)) : m == null ? void 0 : m();
    };
    return () => {
      var m, $, C;
      const {
        listType: S,
        type: I
      } = e, {
        class: T,
        style: A
      } = r, j = Lr(r, ["class", "style"]), M = D(D(D({
        onBatchStart: y,
        onError: L,
        onProgress: P,
        onSuccess: v
      }, j), e), {
        id: (m = e.id) !== null && m !== void 0 ? m : a.id.value,
        prefixCls: i.value,
        beforeUpload: f,
        onChange: void 0,
        disabled: h.value
      });
      delete M.remove, (!n.default || h.value) && delete M.id;
      const q = {
        [`${i.value}-rtl`]: s.value === "rtl"
      };
      if (I === "drag") {
        const J = ae(i.value, {
          [`${i.value}-drag`]: !0,
          [`${i.value}-drag-uploading`]: d.value.some((le) => le.status === "uploading"),
          [`${i.value}-drag-hover`]: l.value === "dragover",
          [`${i.value}-disabled`]: h.value,
          [`${i.value}-rtl`]: s.value === "rtl"
        }, r.class, p.value);
        return b(c("span", F(F({}, r), {}, {
          class: ae(`${i.value}-wrapper`, q, T, p.value)
        }), [c("div", {
          class: J,
          onDrop: k,
          onDragover: k,
          onDragleave: k,
          style: r.style
        }, [c(et, F(F({}, M), {}, {
          ref: g,
          class: `${i.value}-btn`
        }), F({
          default: () => [c("div", {
            class: `${i.value}-drag-container`
          }, [($ = n.default) === null || $ === void 0 ? void 0 : $.call(n)])]
        }, n))]), N()]));
      }
      const ne = ae(i.value, {
        [`${i.value}-select`]: !0,
        [`${i.value}-select-${S}`]: !0,
        [`${i.value}-disabled`]: h.value,
        [`${i.value}-rtl`]: s.value === "rtl"
      }), X = un((C = n.default) === null || C === void 0 ? void 0 : C.call(n)), V = (J) => c("div", {
        class: ne,
        style: J
      }, [c(et, F(F({}, M), {}, {
        ref: g
      }), n)]);
      return b(S === "picture-card" ? c("span", F(F({}, r), {}, {
        class: ae(`${i.value}-wrapper`, `${i.value}-picture-card-wrapper`, q, r.class, p.value)
      }), [N(V, !!(X && X.length))]) : c("span", F(F({}, r), {}, {
        class: ae(`${i.value}-wrapper`, q, r.class, p.value)
      }), [V(X && X.length ? void 0 : {
        display: "none"
      }), N()]));
    };
  }
});
var at = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const me = H({
  compatConfig: {
    MODE: 3
  },
  name: "AUploadDragger",
  inheritAttrs: !1,
  props: Ct(),
  setup(e, t) {
    let {
      slots: n,
      attrs: r
    } = t;
    return () => {
      const {
        height: o
      } = e, a = at(e, ["height"]), {
        style: i
      } = r, s = at(r, ["style"]), u = D(D(D({}, a), s), {
        type: "drag",
        style: D(D({}, i), {
          height: typeof o == "number" ? `${o}px` : o
        })
      });
      return c(ge, u, n);
    };
  }
}), Er = me, Ar = D(ge, {
  Dragger: me,
  LIST_IGNORE: se,
  install(e) {
    return e.component(ge.name, ge), e.component(me.name, me), e;
  }
});
var Ur = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M885.2 446.3l-.2-.8-112.2-285.1c-5-16.1-19.9-27.2-36.8-27.2H281.2c-17 0-32.1 11.3-36.9 27.6L139.4 443l-.3.7-.2.8c-1.3 4.9-1.7 9.9-1 14.8-.1 1.6-.2 3.2-.2 4.8V830a60.9 60.9 0 0060.8 60.8h627.2c33.5 0 60.8-27.3 60.9-60.8V464.1c0-1.3 0-2.6-.1-3.7.4-4.9 0-9.6-1.3-14.1zm-295.8-43l-.3 15.7c-.8 44.9-31.8 75.1-77.1 75.1-22.1 0-41.1-7.1-54.8-20.6S436 441.2 435.6 419l-.3-15.7H229.5L309 210h399.2l81.7 193.3H589.4zm-375 76.8h157.3c24.3 57.1 76 90.8 140.4 90.8 33.7 0 65-9.4 90.3-27.2 22.2-15.6 39.5-37.4 50.7-63.6h156.5V814H214.4V480.1z" } }] }, name: "inbox", theme: "outlined" };
function st(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      Mr(e, o, n[o]);
    });
  }
  return e;
}
function Mr(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ne = function(t, n) {
  var r = st({}, t, n.attrs);
  return c(te, st({}, r, {
    icon: Ur
  }), null);
};
Ne.displayName = "InboxOutlined";
Ne.inheritAttrs = !1;
var kr = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z" } }] }, name: "upload", theme: "outlined" };
function ct(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      Nr(e, o, n[o]);
    });
  }
  return e;
}
function Nr(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Be = function(t, n) {
  var r = ct({}, t, n.attrs);
  return c(te, ct({}, r, {
    icon: kr
  }), null);
};
Be.displayName = "UploadOutlined";
Be.inheritAttrs = !1;
const Br = (e) => (Ut("data-v-71f59830"), e = e(), Mt(), e), zr = { class: "inner" }, Hr = {
  key: 0,
  class: "btn"
}, Wr = {
  key: 1,
  class: "image"
}, Xr = { class: "ant-upload-text" }, Vr = { class: "ant-upload-drag-icon" }, Gr = { class: "ant-upload-text" }, qr = /* @__PURE__ */ Br(() => /* @__PURE__ */ oe("p", { class: "ant-upload-hint" }, "点击这里/将文件拖拽到这里即可自动上传", -1)), Jr = /* @__PURE__ */ H({
  __name: "CustomUpload",
  props: {
    value: {},
    msg: {},
    uploadProps: {},
    uploadEvent: {},
    uploadType: { default: "Button" }
  },
  emits: ["update:value"],
  setup(e, { emit: t }) {
    const n = e, r = R(() => n.msg || "上传"), o = t, a = R({
      get() {
        return n.value;
      },
      set(d) {
        o("update:value", d);
      }
    }), i = Q(!1), u = {
      Image: (d) => {
        if (d.file.status === "uploading") {
          i.value = !0;
          return;
        }
        d.file.status === "done" && (i.value = !1), d.file.status === "error" && (i.value = !1, Pe.error("upload error"));
      },
      Button: () => {
      },
      Dragger: () => {
      }
    }, b = (d) => {
      var w, l, g;
      (w = u[n.uploadType]) == null || w.call(u, d), (g = (l = n.uploadEvent) == null ? void 0 : l.change) == null || g.call(l, d);
    }, O = {
      Image: (d) => {
        const w = d.type === "image/jpeg" || d.type === "image/png";
        w || Pe.error("请选择一个图片文件");
        const l = d.size / 1024 / 1024 < 5;
        return l || Pe.error("图片需要小于5MB"), w && l;
      },
      Button: () => !0,
      Dragger: () => !0
    }, h = (d, w) => {
      var l, g, x;
      return ((l = O[n.uploadType]) == null ? void 0 : l.call(O, d)) && ((x = (g = n.uploadProps) == null ? void 0 : g.beforeUpload) == null ? void 0 : x.call(g, d, w));
    };
    return (d, w) => {
      const l = Te, g = Ar, x = Er;
      return n.uploadType !== "Dragger" ? (re(), ue(g, We({ key: 0 }, {
        ...d.$attrs,
        ...n.uploadProps,
        beforeUpload: h
      }, Xe({ ...n.uploadEvent, change: b }), {
        fileList: a.value,
        "onUpdate:fileList": w[0] || (w[0] = (f) => a.value = f)
      }), {
        default: Se(() => [
          oe("div", zr, [
            n.uploadType == "Button" ? (re(), Ve("div", Hr, [
              c(l, null, {
                default: Se(() => [
                  c(de(Be)),
                  At(" " + Oe(r.value), 1)
                ]),
                _: 1
              })
            ])) : Ge("", !0),
            n.uploadType == "Image" ? (re(), Ve("div", Wr, [
              oe("div", null, [
                i.value ? (re(), ue(de(Re), { key: 0 })) : (re(), ue(de(pn), { key: 1 })),
                oe("div", Xr, Oe(r.value), 1)
              ])
            ])) : Ge("", !0)
          ])
        ]),
        _: 1
      }, 16, ["fileList"])) : (re(), ue(x, We({
        key: 1,
        fileList: a.value,
        "onUpdate:fileList": w[1] || (w[1] = (f) => a.value = f)
      }, {
        ...d.$attrs,
        ...n.uploadProps
      }, Xe({ ...n.uploadEvent })), {
        default: Se(() => [
          oe("p", Vr, [
            c(de(Ne))
          ]),
          oe("p", Gr, Oe(r.value), 1),
          qr
        ]),
        _: 1
      }, 16, ["fileList"]));
    };
  }
}), eo = /* @__PURE__ */ dn(Jr, [["__scopeId", "data-v-71f59830"]]);
export {
  eo as default
};
