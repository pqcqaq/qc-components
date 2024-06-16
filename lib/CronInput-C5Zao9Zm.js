import { createVNode as o, shallowRef as j, onBeforeUnmount as je, defineComponent as G, ref as K, computed as A, watchEffect as Me, onMounted as ke, watch as te, provide as Bn, inject as Oa, toRefs as Ma, reactive as qe, onUnmounted as Na, Teleport as Da, TransitionGroup as An, render as ft, Transition as kn, withDirectives as Rn, vShow as Ln, nextTick as Ba, Fragment as ge, unref as De, isRef as Aa, openBlock as fe, createElementBlock as ve, withCtx as x, createTextVNode as M, toDisplayString as E, createElementVNode as ce, renderList as $e } from "vue";
import { aC as Jt, aD as ka, f as Ra, K as _e, I as Ue, U as Ye, c as Y, _ as h, ae as ie, P as J, G as ye, aE as Xe, b as R, $ as be, h as La, g as yt, m as bt, r as Je, a0 as Ha, q as Bt, i as Ge, E as za, D as st, a3 as Wa, C as Fa, O as ja, ai as Ua, F as Ga, A as It, u as et, aB as ht, t as Hn, w as Ct, az as zn, aF as Ka, S as tt, L as At, aG as kt, aH as Va, aI as Xa, aJ as He, au as Ya, aK as Qa, p as Tt, aL as en, aM as qa, aN as Za, a4 as Ja, aO as eo, aP as to, aQ as Wn, aR as no, aS as ao, aT as oo, aU as lo, aV as io, aW as ro, aX as so, aY as co, aZ as uo, ar as Fn, a_ as fo, a$ as vo, b0 as mo, at as po, e as go, aA as Rt, af as vt, b1 as yo, a6 as bo, B as mt, b2 as jn, M as ho, b3 as Co } from "./styleChecker-DdDg1L8e.js";
import { R as $o, _ as xo } from "./index-RNU-JzPI.js";
import { c as Un, t as So, a as _o, d as wo, h as Po, f as Io, C as nt, E as at, A as To, _ as Eo } from "./useFullScreenDyForm-Bf0u-fRX.js";
import { _ as Oo } from "./index-XafoS1f1.js";
import { a as Mo, S as No } from "./index-CdE5tA34.js";
import { K as me } from "./KeyCode-n3eOOGSl.js";
import { u as Do, E as Bo, M as Ao, a as ko } from "./index-CJZ5vOhG.js";
import { D as Ro } from "./Dropdown-USApd7PK.js";
import { R as tn } from "./BaseInput-8fgUqcxC.js";
import { u as Lo } from "./useRefs-CuWy3iND.js";
import { i as Ho } from "./DownOutlined-BHyFVLFp.js";
import { u as nn } from "./useMergedState-6HyZ0xMy.js";
import { C as ot } from "./CloseOutlined-CVLQwoL6.js";
import { P as zo } from "./PlusOutlined-Ivi8Z_jM.js";
import { o as Lt } from "./omit-CH0b8HlL.js";
import { i as an } from "./slide-BAO1Q6HG.js";
import { I as Wo } from "./index-CapMw6UA.js";
import { p as Fo } from "./CheckOutlined-glN3v3hv.js";
function jo(e, t, n, a) {
  if (!Jt(e))
    return e;
  t = Un(t, e);
  for (var l = -1, d = t.length, i = d - 1, m = e; m != null && ++l < d; ) {
    var p = So(t[l]), r = n;
    if (p === "__proto__" || p === "constructor" || p === "prototype")
      return e;
    if (l != i) {
      var u = m[p];
      r = void 0, r === void 0 && (r = Jt(u) ? u : ka(t[l + 1]) ? [] : {});
    }
    _o(m, p, r), m = m[p];
  }
  return e;
}
function Uo(e, t, n) {
  for (var a = -1, l = t.length, d = {}; ++a < l; ) {
    var i = t[a], m = wo(e, i);
    n(m, i) && jo(d, Un(i, e), m);
  }
  return d;
}
function Go(e, t) {
  return Uo(e, t, function(n, a) {
    return Po(e, a);
  });
}
var Gn = Io(function(e, t) {
  return e == null ? {} : Go(e, t);
});
const Ko = new _e("antFadeIn", {
  "0%": {
    opacity: 0
  },
  "100%": {
    opacity: 1
  }
}), Vo = new _e("antFadeOut", {
  "0%": {
    opacity: 1
  },
  "100%": {
    opacity: 0
  }
}), Xo = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  const {
    antCls: n
  } = e, a = `${n}-fade`, l = t ? "&" : "";
  return [Ra(a, Ko, Vo, e.motionDurationMid, t), {
    [`
        ${l}${a}-enter,
        ${l}${a}-appear
      `]: {
      opacity: 0,
      animationTimingFunction: "linear"
    },
    [`${l}${a}-leave`]: {
      animationTimingFunction: "linear"
    }
  }];
};
var Yo = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z" } }, { tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }] }, name: "check-circle", theme: "outlined" };
function on(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, a = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(l) {
      return Object.getOwnPropertyDescriptor(n, l).enumerable;
    }))), a.forEach(function(l) {
      Qo(e, l, n[l]);
    });
  }
  return e;
}
function Qo(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ht = function(t, n) {
  var a = on({}, t, n.attrs);
  return o(Ue, on({}, a, {
    icon: Yo
  }), null);
};
Ht.displayName = "CheckCircleOutlined";
Ht.inheritAttrs = !1;
var qo = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { tag: "path", attrs: { d: "M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z" } }] }, name: "exclamation-circle", theme: "outlined" };
function ln(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, a = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(l) {
      return Object.getOwnPropertyDescriptor(n, l).enumerable;
    }))), a.forEach(function(l) {
      Zo(e, l, n[l]);
    });
  }
  return e;
}
function Zo(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var zt = function(t, n) {
  var a = ln({}, t, n.attrs);
  return o(Ue, ln({}, a, {
    icon: qo
  }), null);
};
zt.displayName = "ExclamationCircleOutlined";
zt.inheritAttrs = !1;
var Jo = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { tag: "path", attrs: { d: "M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z" } }] }, name: "info-circle", theme: "outlined" };
function rn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, a = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(l) {
      return Object.getOwnPropertyDescriptor(n, l).enumerable;
    }))), a.forEach(function(l) {
      el(e, l, n[l]);
    });
  }
  return e;
}
function el(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Wt = function(t, n) {
  var a = rn({}, t, n.attrs);
  return o(Ue, rn({}, a, {
    icon: Jo
  }), null);
};
Wt.displayName = "InfoCircleOutlined";
Wt.inheritAttrs = !1;
var tl = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm0 76c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm128.01 198.83c.03 0 .05.01.09.06l45.02 45.01a.2.2 0 01.05.09.12.12 0 010 .07c0 .02-.01.04-.05.08L557.25 512l127.87 127.86a.27.27 0 01.05.06v.02a.12.12 0 010 .07c0 .03-.01.05-.05.09l-45.02 45.02a.2.2 0 01-.09.05.12.12 0 01-.07 0c-.02 0-.04-.01-.08-.05L512 557.25 384.14 685.12c-.04.04-.06.05-.08.05a.12.12 0 01-.07 0c-.03 0-.05-.01-.09-.05l-45.02-45.02a.2.2 0 01-.05-.09.12.12 0 010-.07c0-.02.01-.04.06-.08L466.75 512 338.88 384.14a.27.27 0 01-.05-.06l-.01-.02a.12.12 0 010-.07c0-.03.01-.05.05-.09l45.02-45.02a.2.2 0 01.09-.05.12.12 0 01.07 0c.02 0 .04.01.08.06L512 466.75l127.86-127.86c.04-.05.06-.06.08-.06a.12.12 0 01.07 0z" } }] }, name: "close-circle", theme: "outlined" };
function sn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, a = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(l) {
      return Object.getOwnPropertyDescriptor(n, l).enumerable;
    }))), a.forEach(function(l) {
      nl(e, l, n[l]);
    });
  }
  return e;
}
function nl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ft = function(t, n) {
  var a = sn({}, t, n.attrs);
  return o(Ue, sn({}, a, {
    icon: tl
  }), null);
};
Ft.displayName = "CloseCircleOutlined";
Ft.inheritAttrs = !1;
var al = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" };
function cn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, a = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(l) {
      return Object.getOwnPropertyDescriptor(n, l).enumerable;
    }))), a.forEach(function(l) {
      ol(e, l, n[l]);
    });
  }
  return e;
}
function ol(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Re = function(t, n) {
  var a = cn({}, t, n.attrs);
  return o(Ue, cn({}, a, {
    icon: al
  }), null);
};
Re.displayName = "InfoCircleFilled";
Re.inheritAttrs = !1;
function ll(e) {
  const t = j(), n = j(!1);
  function a() {
    for (var l = arguments.length, d = new Array(l), i = 0; i < l; i++)
      d[i] = arguments[i];
    n.value || (Ye.cancel(t.value), t.value = Ye(() => {
      e(...d);
    }));
  }
  return je(() => {
    n.value = !0, Ye.cancel(t.value);
  }), a;
}
function il(e) {
  const t = j([]), n = j(typeof e == "function" ? e() : e), a = ll(() => {
    let d = n.value;
    t.value.forEach((i) => {
      d = i(d);
    }), t.value = [], n.value = d;
  });
  function l(d) {
    t.value.push(d), a();
  }
  return [n, l];
}
const rl = G({
  compatConfig: {
    MODE: 3
  },
  name: "TabNode",
  props: {
    id: {
      type: String
    },
    prefixCls: {
      type: String
    },
    tab: {
      type: Object
    },
    active: {
      type: Boolean
    },
    closable: {
      type: Boolean
    },
    editable: {
      type: Object
    },
    onClick: {
      type: Function
    },
    onResize: {
      type: Function
    },
    renderWrapper: {
      type: Function
    },
    removeAriaLabel: {
      type: String
    },
    // onRemove: { type: Function as PropType<() => void> },
    onFocus: {
      type: Function
    }
  },
  emits: ["click", "resize", "remove", "focus"],
  setup(e, t) {
    let {
      expose: n,
      attrs: a
    } = t;
    const l = K();
    function d(p) {
      var r;
      !((r = e.tab) === null || r === void 0) && r.disabled || e.onClick(p);
    }
    n({
      domRef: l
    });
    function i(p) {
      var r;
      p.preventDefault(), p.stopPropagation(), e.editable.onEdit("remove", {
        key: (r = e.tab) === null || r === void 0 ? void 0 : r.key,
        event: p
      });
    }
    const m = A(() => {
      var p;
      return e.editable && e.closable !== !1 && !(!((p = e.tab) === null || p === void 0) && p.disabled);
    });
    return () => {
      var p;
      const {
        prefixCls: r,
        id: u,
        active: f,
        tab: {
          key: c,
          tab: v,
          disabled: s,
          closeIcon: C
        },
        renderWrapper: w,
        removeAriaLabel: $,
        editable: I,
        onFocus: N
      } = e, T = `${r}-tab`, S = o("div", {
        key: c,
        ref: l,
        class: Y(T, {
          [`${T}-with-remove`]: m.value,
          [`${T}-active`]: f,
          [`${T}-disabled`]: s
        }),
        style: a.style,
        onClick: d
      }, [o("div", {
        role: "tab",
        "aria-selected": f,
        id: u && `${u}-tab-${c}`,
        class: `${T}-btn`,
        "aria-controls": u && `${u}-panel-${c}`,
        "aria-disabled": s,
        tabindex: s ? null : 0,
        onClick: (O) => {
          O.stopPropagation(), d(O);
        },
        onKeydown: (O) => {
          [me.SPACE, me.ENTER].includes(O.which) && (O.preventDefault(), d(O));
        },
        onFocus: N
      }, [typeof v == "function" ? v() : v]), m.value && o("button", {
        type: "button",
        "aria-label": $ || "remove",
        tabindex: 0,
        class: `${T}-remove`,
        onClick: (O) => {
          O.stopPropagation(), i(O);
        }
      }, [(C == null ? void 0 : C()) || ((p = I.removeIcon) === null || p === void 0 ? void 0 : p.call(I)) || "×"])]);
      return w ? w(S) : S;
    };
  }
}), un = {
  width: 0,
  height: 0,
  left: 0,
  top: 0
};
function sl(e, t) {
  const n = K(/* @__PURE__ */ new Map());
  return Me(() => {
    var a, l;
    const d = /* @__PURE__ */ new Map(), i = e.value, m = t.value.get((a = i[0]) === null || a === void 0 ? void 0 : a.key) || un, p = m.left + m.width;
    for (let r = 0; r < i.length; r += 1) {
      const {
        key: u
      } = i[r];
      let f = t.value.get(u);
      f || (f = t.value.get((l = i[r - 1]) === null || l === void 0 ? void 0 : l.key) || un);
      const c = d.get(u) || h({}, f);
      c.right = p - c.left - c.width, d.set(u, c);
    }
    n.value = new Map(d);
  }), n;
}
const Kn = G({
  compatConfig: {
    MODE: 3
  },
  name: "AddButton",
  inheritAttrs: !1,
  props: {
    prefixCls: String,
    editable: {
      type: Object
    },
    locale: {
      type: Object,
      default: void 0
    }
  },
  setup(e, t) {
    let {
      expose: n,
      attrs: a
    } = t;
    const l = K();
    return n({
      domRef: l
    }), () => {
      const {
        prefixCls: d,
        editable: i,
        locale: m
      } = e;
      return !i || i.showAdd === !1 ? null : o("button", {
        ref: l,
        type: "button",
        class: `${d}-nav-add`,
        style: a.style,
        "aria-label": (m == null ? void 0 : m.addAriaLabel) || "Add tab",
        onClick: (p) => {
          i.onEdit("add", {
            event: p
          });
        }
      }, [i.addIcon ? i.addIcon() : "+"]);
    };
  }
}), cl = {
  prefixCls: {
    type: String
  },
  id: {
    type: String
  },
  tabs: {
    type: Object
  },
  rtl: {
    type: Boolean
  },
  tabBarGutter: {
    type: Number
  },
  activeKey: {
    type: [String, Number]
  },
  mobile: {
    type: Boolean
  },
  moreIcon: J.any,
  moreTransitionName: {
    type: String
  },
  editable: {
    type: Object
  },
  locale: {
    type: Object,
    default: void 0
  },
  removeAriaLabel: String,
  onTabClick: {
    type: Function
  },
  popupClassName: String,
  getPopupContainer: ye()
}, ul = G({
  compatConfig: {
    MODE: 3
  },
  name: "OperationNode",
  inheritAttrs: !1,
  props: cl,
  emits: ["tabClick"],
  slots: Object,
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const [l, d] = ie(!1), [i, m] = ie(null), p = (v) => {
      const s = e.tabs.filter(($) => !$.disabled);
      let C = s.findIndex(($) => $.key === i.value) || 0;
      const w = s.length;
      for (let $ = 0; $ < w; $ += 1) {
        C = (C + v + w) % w;
        const I = s[C];
        if (!I.disabled) {
          m(I.key);
          return;
        }
      }
    }, r = (v) => {
      const {
        which: s
      } = v;
      if (!l.value) {
        [me.DOWN, me.SPACE, me.ENTER].includes(s) && (d(!0), v.preventDefault());
        return;
      }
      switch (s) {
        case me.UP:
          p(-1), v.preventDefault();
          break;
        case me.DOWN:
          p(1), v.preventDefault();
          break;
        case me.ESC:
          d(!1);
          break;
        case me.SPACE:
        case me.ENTER:
          i.value !== null && e.onTabClick(i.value, v);
          break;
      }
    }, u = A(() => `${e.id}-more-popup`), f = A(() => i.value !== null ? `${u.value}-${i.value}` : null), c = (v, s) => {
      v.preventDefault(), v.stopPropagation(), e.editable.onEdit("remove", {
        key: s,
        event: v
      });
    };
    return ke(() => {
      te(i, () => {
        const v = document.getElementById(f.value);
        v && v.scrollIntoView && v.scrollIntoView(!1);
      }, {
        flush: "post",
        immediate: !0
      });
    }), te(l, () => {
      l.value || m(null);
    }), Do({}), () => {
      var v;
      const {
        prefixCls: s,
        id: C,
        tabs: w,
        locale: $,
        mobile: I,
        moreIcon: N = ((v = a.moreIcon) === null || v === void 0 ? void 0 : v.call(a)) || o(Bo, null, null),
        moreTransitionName: T,
        editable: S,
        tabBarGutter: O,
        rtl: P,
        onTabClick: k,
        popupClassName: H
      } = e;
      if (!w.length)
        return null;
      const U = `${s}-dropdown`, D = $ == null ? void 0 : $.dropdownAriaLabel, y = {
        [P ? "marginRight" : "marginLeft"]: O
      };
      w.length || (y.visibility = "hidden", y.order = 1);
      const V = Y({
        [`${U}-rtl`]: P,
        [`${H}`]: !0
      }), B = I ? null : o(Ro, {
        prefixCls: U,
        trigger: ["hover"],
        visible: l.value,
        transitionName: T,
        onVisibleChange: d,
        overlayClassName: V,
        mouseEnterDelay: 0.1,
        mouseLeaveDelay: 0.1,
        getPopupContainer: e.getPopupContainer
      }, {
        overlay: () => o(Ao, {
          onClick: (g) => {
            let {
              key: _,
              domEvent: L
            } = g;
            k(_, L), d(!1);
          },
          id: u.value,
          tabindex: -1,
          role: "listbox",
          "aria-activedescendant": f.value,
          selectedKeys: [i.value],
          "aria-label": D !== void 0 ? D : "expanded dropdown"
        }, {
          default: () => [w.map((g) => {
            var _, L;
            const W = S && g.closable !== !1 && !g.disabled;
            return o(ko, {
              key: g.key,
              id: `${u.value}-${g.key}`,
              role: "option",
              "aria-controls": C && `${C}-panel-${g.key}`,
              disabled: g.disabled
            }, {
              default: () => [o("span", null, [typeof g.tab == "function" ? g.tab() : g.tab]), W && o("button", {
                type: "button",
                "aria-label": e.removeAriaLabel || "remove",
                tabindex: 0,
                class: `${U}-menu-item-remove`,
                onClick: (Q) => {
                  Q.stopPropagation(), c(Q, g.key);
                }
              }, [((_ = g.closeIcon) === null || _ === void 0 ? void 0 : _.call(g)) || ((L = S.removeIcon) === null || L === void 0 ? void 0 : L.call(S)) || "×"])]
            });
          })]
        }),
        default: () => o("button", {
          type: "button",
          class: `${s}-nav-more`,
          style: y,
          tabindex: -1,
          "aria-hidden": "true",
          "aria-haspopup": "listbox",
          "aria-controls": u.value,
          id: `${C}-more`,
          "aria-expanded": l.value,
          onKeydown: r
        }, [N])
      });
      return o("div", {
        class: Y(`${s}-nav-operations`, n.class),
        style: n.style
      }, [B, o(Kn, {
        prefixCls: s,
        locale: $,
        editable: S
      }, null)]);
    };
  }
}), Vn = Symbol("tabsContextKey"), Xn = (e) => {
  Bn(Vn, e);
}, Yn = () => Oa(Vn, {
  tabs: K([]),
  prefixCls: K()
});
G({
  compatConfig: {
    MODE: 3
  },
  name: "TabsContextProvider",
  inheritAttrs: !1,
  props: {
    tabs: {
      type: Object,
      default: void 0
    },
    prefixCls: {
      type: String,
      default: void 0
    }
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    return Xn(Ma(e)), () => {
      var a;
      return (a = n.default) === null || a === void 0 ? void 0 : a.call(n);
    };
  }
});
const dl = 0.1, dn = 0.01, ct = 20, fn = Math.pow(0.995, ct);
function fl(e, t) {
  const [n, a] = ie(), [l, d] = ie(0), [i, m] = ie(0), [p, r] = ie(), u = K();
  function f(S) {
    const {
      screenX: O,
      screenY: P
    } = S.touches[0];
    a({
      x: O,
      y: P
    }), clearInterval(u.value);
  }
  function c(S) {
    if (!n.value)
      return;
    S.preventDefault();
    const {
      screenX: O,
      screenY: P
    } = S.touches[0], k = O - n.value.x, H = P - n.value.y;
    t(k, H), a({
      x: O,
      y: P
    });
    const U = Date.now();
    m(U - l.value), d(U), r({
      x: k,
      y: H
    });
  }
  function v() {
    if (!n.value)
      return;
    const S = p.value;
    if (a(null), r(null), S) {
      const O = S.x / i.value, P = S.y / i.value, k = Math.abs(O), H = Math.abs(P);
      if (Math.max(k, H) < dl)
        return;
      let U = O, D = P;
      u.value = setInterval(() => {
        if (Math.abs(U) < dn && Math.abs(D) < dn) {
          clearInterval(u.value);
          return;
        }
        U *= fn, D *= fn, t(U * ct, D * ct);
      }, ct);
    }
  }
  const s = K();
  function C(S) {
    const {
      deltaX: O,
      deltaY: P
    } = S;
    let k = 0;
    const H = Math.abs(O), U = Math.abs(P);
    H === U ? k = s.value === "x" ? O : P : H > U ? (k = O, s.value = "x") : (k = P, s.value = "y"), t(-k, -k) && S.preventDefault();
  }
  const w = K({
    onTouchStart: f,
    onTouchMove: c,
    onTouchEnd: v,
    onWheel: C
  });
  function $(S) {
    w.value.onTouchStart(S);
  }
  function I(S) {
    w.value.onTouchMove(S);
  }
  function N(S) {
    w.value.onTouchEnd(S);
  }
  function T(S) {
    w.value.onWheel(S);
  }
  ke(() => {
    var S, O;
    document.addEventListener("touchmove", I, {
      passive: !1
    }), document.addEventListener("touchend", N, {
      passive: !1
    }), (S = e.value) === null || S === void 0 || S.addEventListener("touchstart", $, {
      passive: !1
    }), (O = e.value) === null || O === void 0 || O.addEventListener("wheel", T, {
      passive: !1
    });
  }), je(() => {
    document.removeEventListener("touchmove", I), document.removeEventListener("touchend", N);
  });
}
function vn(e, t) {
  const n = K(e);
  function a(l) {
    const d = typeof l == "function" ? l(n.value) : l;
    d !== n.value && t(d, n.value), n.value = d;
  }
  return [n, a];
}
const mn = {
  width: 0,
  height: 0,
  left: 0,
  top: 0,
  right: 0
}, vl = () => ({
  id: {
    type: String
  },
  tabPosition: {
    type: String
  },
  activeKey: {
    type: [String, Number]
  },
  rtl: {
    type: Boolean
  },
  animated: be(),
  editable: be(),
  moreIcon: J.any,
  moreTransitionName: {
    type: String
  },
  mobile: {
    type: Boolean
  },
  tabBarGutter: {
    type: Number
  },
  renderTabBar: {
    type: Function
  },
  locale: be(),
  popupClassName: String,
  getPopupContainer: ye(),
  onTabClick: {
    type: Function
  },
  onTabScroll: {
    type: Function
  }
}), ml = (e, t) => {
  const {
    offsetWidth: n,
    offsetHeight: a,
    offsetTop: l,
    offsetLeft: d
  } = e, {
    width: i,
    height: m,
    x: p,
    y: r
  } = e.getBoundingClientRect();
  return Math.abs(i - n) < 1 ? [i, m, p - t.x, r - t.y] : [n, a, d, l];
}, pn = G({
  compatConfig: {
    MODE: 3
  },
  name: "TabNavList",
  inheritAttrs: !1,
  props: vl(),
  slots: Object,
  emits: ["tabClick", "tabScroll"],
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const {
      tabs: l,
      prefixCls: d
    } = Yn(), i = j(), m = j(), p = j(), r = j(), [u, f] = Lo(), c = A(() => e.tabPosition === "top" || e.tabPosition === "bottom"), [v, s] = vn(0, (F, z) => {
      c.value && e.onTabScroll && e.onTabScroll({
        direction: F > z ? "left" : "right"
      });
    }), [C, w] = vn(0, (F, z) => {
      !c.value && e.onTabScroll && e.onTabScroll({
        direction: F > z ? "top" : "bottom"
      });
    }), [$, I] = ie(0), [N, T] = ie(0), [S, O] = ie(null), [P, k] = ie(null), [H, U] = ie(0), [D, y] = ie(0), [V, B] = il(/* @__PURE__ */ new Map()), g = sl(l, V), _ = A(() => `${d.value}-nav-operations-hidden`), L = j(0), W = j(0);
    Me(() => {
      c.value ? e.rtl ? (L.value = 0, W.value = Math.max(0, $.value - S.value)) : (L.value = Math.min(0, S.value - $.value), W.value = 0) : (L.value = Math.min(0, P.value - N.value), W.value = 0);
    });
    const Q = (F) => F < L.value ? L.value : F > W.value ? W.value : F, oe = j(), [Z, b] = ie(), we = () => {
      b(Date.now());
    }, Pe = () => {
      clearTimeout(oe.value);
    }, xe = (F, z) => {
      F((X) => Q(X + z));
    };
    fl(i, (F, z) => {
      if (c.value) {
        if (S.value >= $.value)
          return !1;
        xe(s, F);
      } else {
        if (P.value >= N.value)
          return !1;
        xe(w, z);
      }
      return Pe(), we(), !0;
    }), te(Z, () => {
      Pe(), Z.value && (oe.value = setTimeout(() => {
        b(0);
      }, 100));
    });
    const Ie = function() {
      let F = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.activeKey;
      const z = g.value.get(F) || {
        width: 0,
        height: 0,
        left: 0,
        right: 0,
        top: 0
      };
      if (c.value) {
        let X = v.value;
        e.rtl ? z.right < v.value ? X = z.right : z.right + z.width > v.value + S.value && (X = z.right + z.width - S.value) : z.left < -v.value ? X = -z.left : z.left + z.width > -v.value + S.value && (X = -(z.left + z.width - S.value)), w(0), s(Q(X));
      } else {
        let X = C.value;
        z.top < -C.value ? X = -z.top : z.top + z.height > -C.value + P.value && (X = -(z.top + z.height - P.value)), s(0), w(Q(X));
      }
    }, Ne = j(0), Ke = j(0);
    Me(() => {
      let F, z, X, q, ne, ee;
      const he = g.value;
      ["top", "bottom"].includes(e.tabPosition) ? (F = "width", q = S.value, ne = $.value, ee = H.value, z = e.rtl ? "right" : "left", X = Math.abs(v.value)) : (F = "height", q = P.value, ne = $.value, ee = D.value, z = "top", X = -C.value);
      let se = q;
      ne + ee > q && ne < q && (se = q - ee);
      const pe = l.value;
      if (!pe.length)
        return [Ne.value, Ke.value] = [0, 0];
      const Ce = pe.length;
      let Ee = Ce;
      for (let de = 0; de < Ce; de += 1) {
        const Se = he.get(pe[de].key) || mn;
        if (Se[z] + Se[F] > X + se) {
          Ee = de - 1;
          break;
        }
      }
      let le = 0;
      for (let de = Ce - 1; de >= 0; de -= 1)
        if ((he.get(pe[de].key) || mn)[z] < X) {
          le = de + 1;
          break;
        }
      return [Ne.value, Ke.value] = [le, Ee];
    });
    const it = () => {
      B(() => {
        var F;
        const z = /* @__PURE__ */ new Map(), X = (F = m.value) === null || F === void 0 ? void 0 : F.getBoundingClientRect();
        return l.value.forEach((q) => {
          let {
            key: ne
          } = q;
          const ee = f.value.get(ne), he = (ee == null ? void 0 : ee.$el) || ee;
          if (he) {
            const [se, pe, Ce, Ee] = ml(he, X);
            z.set(ne, {
              width: se,
              height: pe,
              left: Ce,
              top: Ee
            });
          }
        }), z;
      });
    };
    te(() => l.value.map((F) => F.key).join("%%"), () => {
      it();
    }, {
      flush: "post"
    });
    const xt = () => {
      var F, z, X, q, ne;
      const ee = ((F = i.value) === null || F === void 0 ? void 0 : F.offsetWidth) || 0, he = ((z = i.value) === null || z === void 0 ? void 0 : z.offsetHeight) || 0, se = ((X = r.value) === null || X === void 0 ? void 0 : X.$el) || {}, pe = se.offsetWidth || 0, Ce = se.offsetHeight || 0;
      O(ee), k(he), U(pe), y(Ce);
      const Ee = (((q = m.value) === null || q === void 0 ? void 0 : q.offsetWidth) || 0) - pe, le = (((ne = m.value) === null || ne === void 0 ? void 0 : ne.offsetHeight) || 0) - Ce;
      I(Ee), T(le), it();
    }, Vt = A(() => [...l.value.slice(0, Ne.value), ...l.value.slice(Ke.value + 1)]), [Pa, Ia] = ie(), Te = A(() => g.value.get(e.activeKey)), Xt = j(), Yt = () => {
      Ye.cancel(Xt.value);
    };
    te([Te, c, () => e.rtl], () => {
      const F = {};
      Te.value && (c.value ? (e.rtl ? F.right = Xe(Te.value.right) : F.left = Xe(Te.value.left), F.width = Xe(Te.value.width)) : (F.top = Xe(Te.value.top), F.height = Xe(Te.value.height))), Yt(), Xt.value = Ye(() => {
        Ia(F);
      });
    }), te([() => e.activeKey, Te, g, c], () => {
      Ie();
    }, {
      flush: "post"
    }), te([() => e.rtl, () => e.tabBarGutter, () => e.activeKey, () => l.value], () => {
      xt();
    }, {
      flush: "post"
    });
    const St = (F) => {
      let {
        position: z,
        prefixCls: X,
        extra: q
      } = F;
      if (!q)
        return null;
      const ne = q == null ? void 0 : q({
        position: z
      });
      return ne ? o("div", {
        class: `${X}-extra-content`
      }, [ne]) : null;
    };
    return je(() => {
      Pe(), Yt();
    }), () => {
      const {
        id: F,
        animated: z,
        activeKey: X,
        rtl: q,
        editable: ne,
        locale: ee,
        tabPosition: he,
        tabBarGutter: se,
        onTabClick: pe
      } = e, {
        class: Ce,
        style: Ee
      } = n, le = d.value, de = !!Vt.value.length, Se = `${le}-nav-wrap`;
      let _t, wt, Qt, qt;
      c.value ? q ? (wt = v.value > 0, _t = v.value + S.value < $.value) : (_t = v.value < 0, wt = -v.value + S.value < $.value) : (Qt = C.value < 0, qt = -C.value + P.value < N.value);
      const rt = {};
      he === "top" || he === "bottom" ? rt[q ? "marginRight" : "marginLeft"] = typeof se == "number" ? `${se}px` : se : rt.marginTop = typeof se == "number" ? `${se}px` : se;
      const Zt = l.value.map((Pt, Ta) => {
        const {
          key: Ve
        } = Pt;
        return o(rl, {
          id: F,
          prefixCls: le,
          key: Ve,
          tab: Pt,
          style: Ta === 0 ? void 0 : rt,
          closable: Pt.closable,
          editable: ne,
          active: Ve === X,
          removeAriaLabel: ee == null ? void 0 : ee.removeAriaLabel,
          ref: u(Ve),
          onClick: (Ea) => {
            pe(Ve, Ea);
          },
          onFocus: () => {
            Ie(Ve), we(), i.value && (q || (i.value.scrollLeft = 0), i.value.scrollTop = 0);
          }
        }, a);
      });
      return o("div", {
        role: "tablist",
        class: Y(`${le}-nav`, Ce),
        style: Ee,
        onKeydown: () => {
          we();
        }
      }, [o(St, {
        position: "left",
        prefixCls: le,
        extra: a.leftExtra
      }, null), o(tn, {
        onResize: xt
      }, {
        default: () => [o("div", {
          class: Y(Se, {
            [`${Se}-ping-left`]: _t,
            [`${Se}-ping-right`]: wt,
            [`${Se}-ping-top`]: Qt,
            [`${Se}-ping-bottom`]: qt
          }),
          ref: i
        }, [o(tn, {
          onResize: xt
        }, {
          default: () => [o("div", {
            ref: m,
            class: `${le}-nav-list`,
            style: {
              transform: `translate(${v.value}px, ${C.value}px)`,
              transition: Z.value ? "none" : void 0
            }
          }, [Zt, o(Kn, {
            ref: r,
            prefixCls: le,
            locale: ee,
            editable: ne,
            style: h(h({}, Zt.length === 0 ? void 0 : rt), {
              visibility: de ? "hidden" : null
            })
          }, null), o("div", {
            class: Y(`${le}-ink-bar`, {
              [`${le}-ink-bar-animated`]: z.inkBar
            }),
            style: Pa.value
          }, null)])]
        })])]
      }), o(ul, R(R({}, e), {}, {
        removeAriaLabel: ee == null ? void 0 : ee.removeAriaLabel,
        ref: p,
        prefixCls: le,
        tabs: Vt.value,
        class: !de && _.value
      }), Gn(a, ["moreIcon"])), o(St, {
        position: "right",
        prefixCls: le,
        extra: a.rightExtra
      }, null), o(St, {
        position: "right",
        prefixCls: le,
        extra: a.tabBarExtraContent
      }, null)]);
    };
  }
}), pl = G({
  compatConfig: {
    MODE: 3
  },
  name: "TabPanelList",
  inheritAttrs: !1,
  props: {
    activeKey: {
      type: [String, Number]
    },
    id: {
      type: String
    },
    rtl: {
      type: Boolean
    },
    animated: {
      type: Object,
      default: void 0
    },
    tabPosition: {
      type: String
    },
    destroyInactiveTabPane: {
      type: Boolean
    }
  },
  setup(e) {
    const {
      tabs: t,
      prefixCls: n
    } = Yn();
    return () => {
      const {
        id: a,
        activeKey: l,
        animated: d,
        tabPosition: i,
        rtl: m,
        destroyInactiveTabPane: p
      } = e, r = d.tabPane, u = n.value, f = t.value.findIndex((c) => c.key === l);
      return o("div", {
        class: `${u}-content-holder`
      }, [o("div", {
        class: [`${u}-content`, `${u}-content-${i}`, {
          [`${u}-content-animated`]: r
        }],
        style: f && r ? {
          [m ? "marginRight" : "marginLeft"]: `-${f}00%`
        } : null
      }, [t.value.map((c) => La(c.node, {
        key: c.key,
        prefixCls: u,
        tabKey: c.key,
        id: a,
        animated: r,
        active: c.key === l,
        destroyInactiveTabPane: p
      }))])]);
    };
  }
}), gl = (e) => {
  const {
    componentCls: t,
    motionDurationSlow: n
  } = e;
  return [
    {
      [t]: {
        [`${t}-switch`]: {
          "&-appear, &-enter": {
            transition: "none",
            "&-start": {
              opacity: 0
            },
            "&-active": {
              opacity: 1,
              transition: `opacity ${n}`
            }
          },
          "&-leave": {
            position: "absolute",
            transition: "none",
            inset: 0,
            "&-start": {
              opacity: 1
            },
            "&-active": {
              opacity: 0,
              transition: `opacity ${n}`
            }
          }
        }
      }
    },
    // Follow code may reuse in other components
    [an(e, "slide-up"), an(e, "slide-down")]
  ];
}, yl = (e) => {
  const {
    componentCls: t,
    tabsCardHorizontalPadding: n,
    tabsCardHeadBackground: a,
    tabsCardGutter: l,
    colorSplit: d
  } = e;
  return {
    [`${t}-card`]: {
      [`> ${t}-nav, > div > ${t}-nav`]: {
        [`${t}-tab`]: {
          margin: 0,
          padding: n,
          background: a,
          border: `${e.lineWidth}px ${e.lineType} ${d}`,
          transition: `all ${e.motionDurationSlow} ${e.motionEaseInOut}`
        },
        [`${t}-tab-active`]: {
          color: e.colorPrimary,
          background: e.colorBgContainer
        },
        [`${t}-ink-bar`]: {
          visibility: "hidden"
        }
      },
      // ========================== Top & Bottom ==========================
      [`&${t}-top, &${t}-bottom`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-tab + ${t}-tab`]: {
            marginLeft: {
              _skip_check_: !0,
              value: `${l}px`
            }
          }
        }
      },
      [`&${t}-top`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-tab`]: {
            borderRadius: `${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`
          },
          [`${t}-tab-active`]: {
            borderBottomColor: e.colorBgContainer
          }
        }
      },
      [`&${t}-bottom`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-tab`]: {
            borderRadius: `0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px`
          },
          [`${t}-tab-active`]: {
            borderTopColor: e.colorBgContainer
          }
        }
      },
      // ========================== Left & Right ==========================
      [`&${t}-left, &${t}-right`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-tab + ${t}-tab`]: {
            marginTop: `${l}px`
          }
        }
      },
      [`&${t}-left`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-tab`]: {
            borderRadius: {
              _skip_check_: !0,
              value: `${e.borderRadiusLG}px 0 0 ${e.borderRadiusLG}px`
            }
          },
          [`${t}-tab-active`]: {
            borderRightColor: {
              _skip_check_: !0,
              value: e.colorBgContainer
            }
          }
        }
      },
      [`&${t}-right`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-tab`]: {
            borderRadius: {
              _skip_check_: !0,
              value: `0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px 0`
            }
          },
          [`${t}-tab-active`]: {
            borderLeftColor: {
              _skip_check_: !0,
              value: e.colorBgContainer
            }
          }
        }
      }
    }
  };
}, bl = (e) => {
  const {
    componentCls: t,
    tabsHoverColor: n,
    dropdownEdgeChildVerticalPadding: a
  } = e;
  return {
    [`${t}-dropdown`]: h(h({}, Je(e)), {
      position: "absolute",
      top: -9999,
      left: {
        _skip_check_: !0,
        value: -9999
      },
      zIndex: e.zIndexPopup,
      display: "block",
      "&-hidden": {
        display: "none"
      },
      [`${t}-dropdown-menu`]: {
        maxHeight: e.tabsDropdownHeight,
        margin: 0,
        padding: `${a}px 0`,
        overflowX: "hidden",
        overflowY: "auto",
        textAlign: {
          _skip_check_: !0,
          value: "left"
        },
        listStyleType: "none",
        backgroundColor: e.colorBgContainer,
        backgroundClip: "padding-box",
        borderRadius: e.borderRadiusLG,
        outline: "none",
        boxShadow: e.boxShadowSecondary,
        "&-item": h(h({}, Ha), {
          display: "flex",
          alignItems: "center",
          minWidth: e.tabsDropdownWidth,
          margin: 0,
          padding: `${e.paddingXXS}px ${e.paddingSM}px`,
          color: e.colorText,
          fontWeight: "normal",
          fontSize: e.fontSize,
          lineHeight: e.lineHeight,
          cursor: "pointer",
          transition: `all ${e.motionDurationSlow}`,
          "> span": {
            flex: 1,
            whiteSpace: "nowrap"
          },
          "&-remove": {
            flex: "none",
            marginLeft: {
              _skip_check_: !0,
              value: e.marginSM
            },
            color: e.colorTextDescription,
            fontSize: e.fontSizeSM,
            background: "transparent",
            border: 0,
            cursor: "pointer",
            "&:hover": {
              color: n
            }
          },
          "&:hover": {
            background: e.controlItemBgHover
          },
          "&-disabled": {
            "&, &:hover": {
              color: e.colorTextDisabled,
              background: "transparent",
              cursor: "not-allowed"
            }
          }
        })
      }
    })
  };
}, hl = (e) => {
  const {
    componentCls: t,
    margin: n,
    colorSplit: a
  } = e;
  return {
    // ========================== Top & Bottom ==========================
    [`${t}-top, ${t}-bottom`]: {
      flexDirection: "column",
      [`> ${t}-nav, > div > ${t}-nav`]: {
        margin: `0 0 ${n}px 0`,
        "&::before": {
          position: "absolute",
          right: {
            _skip_check_: !0,
            value: 0
          },
          left: {
            _skip_check_: !0,
            value: 0
          },
          borderBottom: `${e.lineWidth}px ${e.lineType} ${a}`,
          content: "''"
        },
        [`${t}-ink-bar`]: {
          height: e.lineWidthBold,
          "&-animated": {
            transition: `width ${e.motionDurationSlow}, left ${e.motionDurationSlow},
            right ${e.motionDurationSlow}`
          }
        },
        [`${t}-nav-wrap`]: {
          "&::before, &::after": {
            top: 0,
            bottom: 0,
            width: e.controlHeight
          },
          "&::before": {
            left: {
              _skip_check_: !0,
              value: 0
            },
            boxShadow: e.boxShadowTabsOverflowLeft
          },
          "&::after": {
            right: {
              _skip_check_: !0,
              value: 0
            },
            boxShadow: e.boxShadowTabsOverflowRight
          },
          [`&${t}-nav-wrap-ping-left::before`]: {
            opacity: 1
          },
          [`&${t}-nav-wrap-ping-right::after`]: {
            opacity: 1
          }
        }
      }
    },
    [`${t}-top`]: {
      [`> ${t}-nav,
        > div > ${t}-nav`]: {
        "&::before": {
          bottom: 0
        },
        [`${t}-ink-bar`]: {
          bottom: 0
        }
      }
    },
    [`${t}-bottom`]: {
      [`> ${t}-nav, > div > ${t}-nav`]: {
        order: 1,
        marginTop: `${n}px`,
        marginBottom: 0,
        "&::before": {
          top: 0
        },
        [`${t}-ink-bar`]: {
          top: 0
        }
      },
      [`> ${t}-content-holder, > div > ${t}-content-holder`]: {
        order: 0
      }
    },
    // ========================== Left & Right ==========================
    [`${t}-left, ${t}-right`]: {
      [`> ${t}-nav, > div > ${t}-nav`]: {
        flexDirection: "column",
        minWidth: e.controlHeight * 1.25,
        // >>>>>>>>>>> Tab
        [`${t}-tab`]: {
          padding: `${e.paddingXS}px ${e.paddingLG}px`,
          textAlign: "center"
        },
        [`${t}-tab + ${t}-tab`]: {
          margin: `${e.margin}px 0 0 0`
        },
        // >>>>>>>>>>> Nav
        [`${t}-nav-wrap`]: {
          flexDirection: "column",
          "&::before, &::after": {
            right: {
              _skip_check_: !0,
              value: 0
            },
            left: {
              _skip_check_: !0,
              value: 0
            },
            height: e.controlHeight
          },
          "&::before": {
            top: 0,
            boxShadow: e.boxShadowTabsOverflowTop
          },
          "&::after": {
            bottom: 0,
            boxShadow: e.boxShadowTabsOverflowBottom
          },
          [`&${t}-nav-wrap-ping-top::before`]: {
            opacity: 1
          },
          [`&${t}-nav-wrap-ping-bottom::after`]: {
            opacity: 1
          }
        },
        // >>>>>>>>>>> Ink Bar
        [`${t}-ink-bar`]: {
          width: e.lineWidthBold,
          "&-animated": {
            transition: `height ${e.motionDurationSlow}, top ${e.motionDurationSlow}`
          }
        },
        [`${t}-nav-list, ${t}-nav-operations`]: {
          flex: "1 0 auto",
          flexDirection: "column"
        }
      }
    },
    [`${t}-left`]: {
      [`> ${t}-nav, > div > ${t}-nav`]: {
        [`${t}-ink-bar`]: {
          right: {
            _skip_check_: !0,
            value: 0
          }
        }
      },
      [`> ${t}-content-holder, > div > ${t}-content-holder`]: {
        marginLeft: {
          _skip_check_: !0,
          value: `-${e.lineWidth}px`
        },
        borderLeft: {
          _skip_check_: !0,
          value: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`
        },
        [`> ${t}-content > ${t}-tabpane`]: {
          paddingLeft: {
            _skip_check_: !0,
            value: e.paddingLG
          }
        }
      }
    },
    [`${t}-right`]: {
      [`> ${t}-nav, > div > ${t}-nav`]: {
        order: 1,
        [`${t}-ink-bar`]: {
          left: {
            _skip_check_: !0,
            value: 0
          }
        }
      },
      [`> ${t}-content-holder, > div > ${t}-content-holder`]: {
        order: 0,
        marginRight: {
          _skip_check_: !0,
          value: -e.lineWidth
        },
        borderRight: {
          _skip_check_: !0,
          value: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`
        },
        [`> ${t}-content > ${t}-tabpane`]: {
          paddingRight: {
            _skip_check_: !0,
            value: e.paddingLG
          }
        }
      }
    }
  };
}, Cl = (e) => {
  const {
    componentCls: t,
    padding: n
  } = e;
  return {
    [t]: {
      "&-small": {
        [`> ${t}-nav`]: {
          [`${t}-tab`]: {
            padding: `${e.paddingXS}px 0`,
            fontSize: e.fontSize
          }
        }
      },
      "&-large": {
        [`> ${t}-nav`]: {
          [`${t}-tab`]: {
            padding: `${n}px 0`,
            fontSize: e.fontSizeLG
          }
        }
      }
    },
    [`${t}-card`]: {
      [`&${t}-small`]: {
        [`> ${t}-nav`]: {
          [`${t}-tab`]: {
            padding: `${e.paddingXXS * 1.5}px ${n}px`
          }
        },
        [`&${t}-bottom`]: {
          [`> ${t}-nav ${t}-tab`]: {
            borderRadius: `0 0 ${e.borderRadius}px ${e.borderRadius}px`
          }
        },
        [`&${t}-top`]: {
          [`> ${t}-nav ${t}-tab`]: {
            borderRadius: `${e.borderRadius}px ${e.borderRadius}px 0 0`
          }
        },
        [`&${t}-right`]: {
          [`> ${t}-nav ${t}-tab`]: {
            borderRadius: {
              _skip_check_: !0,
              value: `0 ${e.borderRadius}px ${e.borderRadius}px 0`
            }
          }
        },
        [`&${t}-left`]: {
          [`> ${t}-nav ${t}-tab`]: {
            borderRadius: {
              _skip_check_: !0,
              value: `${e.borderRadius}px 0 0 ${e.borderRadius}px`
            }
          }
        }
      },
      [`&${t}-large`]: {
        [`> ${t}-nav`]: {
          [`${t}-tab`]: {
            padding: `${e.paddingXS}px ${n}px ${e.paddingXXS * 1.5}px`
          }
        }
      }
    }
  };
}, $l = (e) => {
  const {
    componentCls: t,
    tabsActiveColor: n,
    tabsHoverColor: a,
    iconCls: l,
    tabsHorizontalGutter: d
  } = e, i = `${t}-tab`;
  return {
    [i]: {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      padding: `${e.paddingSM}px 0`,
      fontSize: `${e.fontSize}px`,
      background: "transparent",
      border: 0,
      outline: "none",
      cursor: "pointer",
      "&-btn, &-remove": h({
        "&:focus:not(:focus-visible), &:active": {
          color: n
        }
      }, Bt(e)),
      "&-btn": {
        outline: "none",
        transition: "all 0.3s"
      },
      "&-remove": {
        flex: "none",
        marginRight: {
          _skip_check_: !0,
          value: -e.marginXXS
        },
        marginLeft: {
          _skip_check_: !0,
          value: e.marginXS
        },
        color: e.colorTextDescription,
        fontSize: e.fontSizeSM,
        background: "transparent",
        border: "none",
        outline: "none",
        cursor: "pointer",
        transition: `all ${e.motionDurationSlow}`,
        "&:hover": {
          color: e.colorTextHeading
        }
      },
      "&:hover": {
        color: a
      },
      [`&${i}-active ${i}-btn`]: {
        color: e.colorPrimary,
        textShadow: e.tabsActiveTextShadow
      },
      [`&${i}-disabled`]: {
        color: e.colorTextDisabled,
        cursor: "not-allowed"
      },
      [`&${i}-disabled ${i}-btn, &${i}-disabled ${t}-remove`]: {
        "&:focus, &:active": {
          color: e.colorTextDisabled
        }
      },
      [`& ${i}-remove ${l}`]: {
        margin: 0
      },
      [l]: {
        marginRight: {
          _skip_check_: !0,
          value: e.marginSM
        }
      }
    },
    [`${i} + ${i}`]: {
      margin: {
        _skip_check_: !0,
        value: `0 0 0 ${d}px`
      }
    }
  };
}, xl = (e) => {
  const {
    componentCls: t,
    tabsHorizontalGutter: n,
    iconCls: a,
    tabsCardGutter: l
  } = e;
  return {
    [`${t}-rtl`]: {
      direction: "rtl",
      [`${t}-nav`]: {
        [`${t}-tab`]: {
          margin: {
            _skip_check_: !0,
            value: `0 0 0 ${n}px`
          },
          [`${t}-tab:last-of-type`]: {
            marginLeft: {
              _skip_check_: !0,
              value: 0
            }
          },
          [a]: {
            marginRight: {
              _skip_check_: !0,
              value: 0
            },
            marginLeft: {
              _skip_check_: !0,
              value: `${e.marginSM}px`
            }
          },
          [`${t}-tab-remove`]: {
            marginRight: {
              _skip_check_: !0,
              value: `${e.marginXS}px`
            },
            marginLeft: {
              _skip_check_: !0,
              value: `-${e.marginXXS}px`
            },
            [a]: {
              margin: 0
            }
          }
        }
      },
      [`&${t}-left`]: {
        [`> ${t}-nav`]: {
          order: 1
        },
        [`> ${t}-content-holder`]: {
          order: 0
        }
      },
      [`&${t}-right`]: {
        [`> ${t}-nav`]: {
          order: 0
        },
        [`> ${t}-content-holder`]: {
          order: 1
        }
      },
      // ====================== Card ======================
      [`&${t}-card${t}-top, &${t}-card${t}-bottom`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-tab + ${t}-tab`]: {
            marginRight: {
              _skip_check_: !0,
              value: `${l}px`
            },
            marginLeft: {
              _skip_check_: !0,
              value: 0
            }
          }
        }
      }
    },
    [`${t}-dropdown-rtl`]: {
      direction: "rtl"
    },
    [`${t}-menu-item`]: {
      [`${t}-dropdown-rtl`]: {
        textAlign: {
          _skip_check_: !0,
          value: "right"
        }
      }
    }
  };
}, Sl = (e) => {
  const {
    componentCls: t,
    tabsCardHorizontalPadding: n,
    tabsCardHeight: a,
    tabsCardGutter: l,
    tabsHoverColor: d,
    tabsActiveColor: i,
    colorSplit: m
  } = e;
  return {
    [t]: h(h(h(h({}, Je(e)), {
      display: "flex",
      // ========================== Navigation ==========================
      [`> ${t}-nav, > div > ${t}-nav`]: {
        position: "relative",
        display: "flex",
        flex: "none",
        alignItems: "center",
        [`${t}-nav-wrap`]: {
          position: "relative",
          display: "flex",
          flex: "auto",
          alignSelf: "stretch",
          overflow: "hidden",
          whiteSpace: "nowrap",
          transform: "translate(0)",
          // >>>>> Ping shadow
          "&::before, &::after": {
            position: "absolute",
            zIndex: 1,
            opacity: 0,
            transition: `opacity ${e.motionDurationSlow}`,
            content: "''",
            pointerEvents: "none"
          }
        },
        [`${t}-nav-list`]: {
          position: "relative",
          display: "flex",
          transition: `opacity ${e.motionDurationSlow}`
        },
        // >>>>>>>> Operations
        [`${t}-nav-operations`]: {
          display: "flex",
          alignSelf: "stretch"
        },
        [`${t}-nav-operations-hidden`]: {
          position: "absolute",
          visibility: "hidden",
          pointerEvents: "none"
        },
        [`${t}-nav-more`]: {
          position: "relative",
          padding: n,
          background: "transparent",
          border: 0,
          "&::after": {
            position: "absolute",
            right: {
              _skip_check_: !0,
              value: 0
            },
            bottom: 0,
            left: {
              _skip_check_: !0,
              value: 0
            },
            height: e.controlHeightLG / 8,
            transform: "translateY(100%)",
            content: "''"
          }
        },
        [`${t}-nav-add`]: h({
          minWidth: `${a}px`,
          marginLeft: {
            _skip_check_: !0,
            value: `${l}px`
          },
          padding: `0 ${e.paddingXS}px`,
          background: "transparent",
          border: `${e.lineWidth}px ${e.lineType} ${m}`,
          borderRadius: `${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`,
          outline: "none",
          cursor: "pointer",
          color: e.colorText,
          transition: `all ${e.motionDurationSlow} ${e.motionEaseInOut}`,
          "&:hover": {
            color: d
          },
          "&:active, &:focus:not(:focus-visible)": {
            color: i
          }
        }, Bt(e))
      },
      [`${t}-extra-content`]: {
        flex: "none"
      },
      // ============================ InkBar ============================
      [`${t}-ink-bar`]: {
        position: "absolute",
        background: e.colorPrimary,
        pointerEvents: "none"
      }
    }), $l(e)), {
      // =========================== TabPanes ===========================
      [`${t}-content`]: {
        position: "relative",
        display: "flex",
        width: "100%",
        "&-animated": {
          transition: "margin 0.3s"
        }
      },
      [`${t}-content-holder`]: {
        flex: "auto",
        minWidth: 0,
        minHeight: 0
      },
      [`${t}-tabpane`]: {
        outline: "none",
        flex: "none",
        width: "100%"
      }
    }),
    [`${t}-centered`]: {
      [`> ${t}-nav, > div > ${t}-nav`]: {
        [`${t}-nav-wrap`]: {
          [`&:not([class*='${t}-nav-wrap-ping'])`]: {
            justifyContent: "center"
          }
        }
      }
    }
  };
}, _l = yt("Tabs", (e) => {
  const t = e.controlHeightLG, n = bt(e, {
    tabsHoverColor: e.colorPrimaryHover,
    tabsActiveColor: e.colorPrimaryActive,
    tabsCardHorizontalPadding: `${(t - Math.round(e.fontSize * e.lineHeight)) / 2 - e.lineWidth}px ${e.padding}px`,
    tabsCardHeight: t,
    tabsCardGutter: e.marginXXS / 2,
    tabsHorizontalGutter: 32,
    tabsCardHeadBackground: e.colorFillAlter,
    dropdownEdgeChildVerticalPadding: e.paddingXXS,
    tabsActiveTextShadow: "0 0 0.25px currentcolor",
    tabsDropdownHeight: 200,
    tabsDropdownWidth: 120
  });
  return [Cl(n), xl(n), hl(n), bl(n), yl(n), Sl(n), gl(n)];
}, (e) => ({
  zIndexPopup: e.zIndexPopupBase + 50
}));
let gn = 0;
const Qn = () => ({
  prefixCls: {
    type: String
  },
  id: {
    type: String
  },
  popupClassName: String,
  getPopupContainer: ye(),
  activeKey: {
    type: [String, Number]
  },
  defaultActiveKey: {
    type: [String, Number]
  },
  direction: st(),
  animated: Wa([Boolean, Object]),
  renderTabBar: ye(),
  tabBarGutter: {
    type: Number
  },
  tabBarStyle: be(),
  tabPosition: st(),
  destroyInactiveTabPane: Fa(),
  hideAdd: Boolean,
  type: st(),
  size: st(),
  centered: Boolean,
  onEdit: ye(),
  onChange: ye(),
  onTabClick: ye(),
  onTabScroll: ye(),
  "onUpdate:activeKey": ye(),
  // Accessibility
  locale: be(),
  onPrevClick: ye(),
  onNextClick: ye(),
  tabBarExtraContent: J.any
});
function wl(e) {
  return e.map((t) => {
    if (ja(t)) {
      const n = h({}, t.props || {});
      for (const [c, v] of Object.entries(n))
        delete n[c], n[Ua(c)] = v;
      const a = t.children || {}, l = t.key !== void 0 ? t.key : void 0, {
        tab: d = a.tab,
        disabled: i,
        forceRender: m,
        closable: p,
        animated: r,
        active: u,
        destroyInactiveTabPane: f
      } = n;
      return h(h({
        key: l
      }, n), {
        node: t,
        closeIcon: a.closeIcon,
        tab: d,
        disabled: i === "" || i,
        forceRender: m === "" || m,
        closable: p === "" || p,
        animated: r === "" || r,
        active: u === "" || u,
        destroyInactiveTabPane: f === "" || f
      });
    }
    return null;
  }).filter((t) => t);
}
const Pl = G({
  compatConfig: {
    MODE: 3
  },
  name: "InternalTabs",
  inheritAttrs: !1,
  props: h(h({}, Ge(Qn(), {
    tabPosition: "top",
    animated: {
      inkBar: !0,
      tabPane: !1
    }
  })), {
    tabs: Ga()
  }),
  slots: Object,
  // emits: ['tabClick', 'tabScroll', 'change', 'update:activeKey'],
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    It(e.onPrevClick === void 0 && e.onNextClick === void 0, "Tabs", "`onPrevClick / @prevClick` and `onNextClick / @nextClick` has been removed. Please use `onTabScroll / @tabScroll` instead."), It(e.tabBarExtraContent === void 0, "Tabs", "`tabBarExtraContent` prop has been removed. Please use `rightExtra` slot instead."), It(a.tabBarExtraContent === void 0, "Tabs", "`tabBarExtraContent` slot is deprecated. Please use `rightExtra` slot instead.");
    const {
      prefixCls: l,
      direction: d,
      size: i,
      rootPrefixCls: m,
      getPopupContainer: p
    } = et("tabs", e), [r, u] = _l(l), f = A(() => d.value === "rtl"), c = A(() => {
      const {
        animated: P,
        tabPosition: k
      } = e;
      return P === !1 || ["left", "right"].includes(k) ? {
        inkBar: !1,
        tabPane: !1
      } : P === !0 ? {
        inkBar: !0,
        tabPane: !0
      } : h({
        inkBar: !0,
        tabPane: !1
      }, typeof P == "object" ? P : {});
    }), [v, s] = ie(!1);
    ke(() => {
      s(Ho());
    });
    const [C, w] = nn(() => {
      var P;
      return (P = e.tabs[0]) === null || P === void 0 ? void 0 : P.key;
    }, {
      value: A(() => e.activeKey),
      defaultValue: e.defaultActiveKey
    }), [$, I] = ie(() => e.tabs.findIndex((P) => P.key === C.value));
    Me(() => {
      var P;
      let k = e.tabs.findIndex((H) => H.key === C.value);
      k === -1 && (k = Math.max(0, Math.min($.value, e.tabs.length - 1)), w((P = e.tabs[k]) === null || P === void 0 ? void 0 : P.key)), I(k);
    });
    const [N, T] = nn(null, {
      value: A(() => e.id)
    }), S = A(() => v.value && !["left", "right"].includes(e.tabPosition) ? "top" : e.tabPosition);
    ke(() => {
      e.id || (T(`rc-tabs-${process.env.NODE_ENV === "test" ? "test" : gn}`), gn += 1);
    });
    const O = (P, k) => {
      var H, U;
      (H = e.onTabClick) === null || H === void 0 || H.call(e, P, k);
      const D = P !== C.value;
      w(P), D && ((U = e.onChange) === null || U === void 0 || U.call(e, P));
    };
    return Xn({
      tabs: A(() => e.tabs),
      prefixCls: l
    }), () => {
      const {
        id: P,
        type: k,
        tabBarGutter: H,
        tabBarStyle: U,
        locale: D,
        destroyInactiveTabPane: y,
        renderTabBar: V = a.renderTabBar,
        onTabScroll: B,
        hideAdd: g,
        centered: _
      } = e, L = {
        id: N.value,
        activeKey: C.value,
        animated: c.value,
        tabPosition: S.value,
        rtl: f.value,
        mobile: v.value
      };
      let W;
      k === "editable-card" && (W = {
        onEdit: (b, we) => {
          let {
            key: Pe,
            event: xe
          } = we;
          var Ie;
          (Ie = e.onEdit) === null || Ie === void 0 || Ie.call(e, b === "add" ? xe : Pe, b);
        },
        removeIcon: () => o(ot, null, null),
        addIcon: a.addIcon ? a.addIcon : () => o(zo, null, null),
        showAdd: g !== !0
      });
      let Q;
      const oe = h(h({}, L), {
        moreTransitionName: `${m.value}-slide-up`,
        editable: W,
        locale: D,
        tabBarGutter: H,
        onTabClick: O,
        onTabScroll: B,
        style: U,
        getPopupContainer: p.value,
        popupClassName: Y(e.popupClassName, u.value)
      });
      V ? Q = V(h(h({}, oe), {
        DefaultTabBar: pn
      })) : Q = o(pn, oe, Gn(a, ["moreIcon", "leftExtra", "rightExtra", "tabBarExtraContent"]));
      const Z = l.value;
      return r(o("div", R(R({}, n), {}, {
        id: P,
        class: Y(Z, `${Z}-${S.value}`, {
          [u.value]: !0,
          [`${Z}-${i.value}`]: i.value,
          [`${Z}-card`]: ["card", "editable-card"].includes(k),
          [`${Z}-editable-card`]: k === "editable-card",
          [`${Z}-centered`]: _,
          [`${Z}-mobile`]: v.value,
          [`${Z}-editable`]: k === "editable-card",
          [`${Z}-rtl`]: f.value
        }, n.class)
      }), [Q, o(pl, R(R({
        destroyInactiveTabPane: y
      }, L), {}, {
        animated: c.value
      }), null)]));
    };
  }
}), Qe = G({
  compatConfig: {
    MODE: 3
  },
  name: "ATabs",
  inheritAttrs: !1,
  props: Ge(Qn(), {
    tabPosition: "top",
    animated: {
      inkBar: !0,
      tabPane: !1
    }
  }),
  slots: Object,
  // emits: ['tabClick', 'tabScroll', 'change', 'update:activeKey'],
  setup(e, t) {
    let {
      attrs: n,
      slots: a,
      emit: l
    } = t;
    const d = (i) => {
      l("update:activeKey", i), l("change", i);
    };
    return () => {
      var i;
      const m = wl(za((i = a.default) === null || i === void 0 ? void 0 : i.call(a)));
      return o(Pl, R(R(R({}, Lt(e, ["onUpdate:activeKey"])), n), {}, {
        onChange: d,
        tabs: m
      }), a);
    };
  }
}), Il = () => ({
  tab: J.any,
  disabled: {
    type: Boolean
  },
  forceRender: {
    type: Boolean
  },
  closable: {
    type: Boolean
  },
  animated: {
    type: Boolean
  },
  active: {
    type: Boolean
  },
  destroyInactiveTabPane: {
    type: Boolean
  },
  // Pass by TabPaneList
  prefixCls: {
    type: String
  },
  tabKey: {
    type: [String, Number]
  },
  id: {
    type: String
  }
  // closeIcon: PropTypes.any,
}), pt = G({
  compatConfig: {
    MODE: 3
  },
  name: "ATabPane",
  inheritAttrs: !1,
  __ANT_TAB_PANE: !0,
  props: Il(),
  slots: Object,
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const l = K(e.forceRender);
    te([() => e.active, () => e.destroyInactiveTabPane], () => {
      e.active ? l.value = !0 : e.destroyInactiveTabPane && (l.value = !1);
    }, {
      immediate: !0
    });
    const d = A(() => e.active ? {} : e.animated ? {
      visibility: "hidden",
      height: 0,
      overflowY: "hidden"
    } : {
      display: "none"
    });
    return () => {
      var i;
      const {
        prefixCls: m,
        forceRender: p,
        id: r,
        active: u,
        tabKey: f
      } = e;
      return o("div", {
        id: r && `${r}-panel-${f}`,
        role: "tabpanel",
        tabindex: u ? 0 : -1,
        "aria-labelledby": r && `${r}-tab-${f}`,
        "aria-hidden": !u,
        style: [d.value, n.style],
        class: [`${m}-tabpane`, u && `${m}-tabpane-active`, n.class]
      }, [(u || l.value || p) && ((i = a.default) === null || i === void 0 ? void 0 : i.call(a))]);
    };
  }
});
Qe.TabPane = pt;
Qe.install = function(e) {
  return e.component(Qe.name, Qe), e.component(pt.name, pt), e;
};
let ut = h({}, ht.Modal);
function Tl(e) {
  e ? ut = h(h({}, ut), e) : ut = h({}, ht.Modal);
}
function El() {
  return ut;
}
const Ot = "internalMark", dt = G({
  compatConfig: {
    MODE: 3
  },
  name: "ALocaleProvider",
  props: {
    locale: {
      type: Object
    },
    ANT_MARK__: String
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    Ct(e.ANT_MARK__ === Ot, "LocaleProvider", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead");
    const a = qe({
      antLocale: h(h({}, e.locale), {
        exist: !0
      }),
      ANT_MARK__: Ot
    });
    return Bn("localeData", a), te(() => e.locale, (l) => {
      Tl(l && l.Modal), a.antLocale = h(h({}, l), {
        exist: !0
      });
    }, {
      immediate: !0
    }), () => {
      var l;
      return (l = n.default) === null || l === void 0 ? void 0 : l.call(n);
    };
  }
});
dt.install = function(e) {
  return e.component(dt.name, dt), e;
};
const Ol = Hn(dt), $t = G({
  name: "Notice",
  inheritAttrs: !1,
  props: ["prefixCls", "duration", "updateMark", "noticeKey", "closeIcon", "closable", "props", "onClick", "onClose", "holder", "visible"],
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t, l, d = !1;
    const i = A(() => e.duration === void 0 ? 4.5 : e.duration), m = () => {
      i.value && !d && (l = setTimeout(() => {
        r();
      }, i.value * 1e3));
    }, p = () => {
      l && (clearTimeout(l), l = null);
    }, r = (f) => {
      f && f.stopPropagation(), p();
      const {
        onClose: c,
        noticeKey: v
      } = e;
      c && c(v);
    }, u = () => {
      p(), m();
    };
    return ke(() => {
      m();
    }), Na(() => {
      d = !0, p();
    }), te([i, () => e.updateMark, () => e.visible], (f, c) => {
      let [v, s, C] = f, [w, $, I] = c;
      (v !== w || s !== $ || C !== I && I) && u();
    }, {
      flush: "post"
    }), () => {
      var f, c;
      const {
        prefixCls: v,
        closable: s,
        closeIcon: C = (f = a.closeIcon) === null || f === void 0 ? void 0 : f.call(a),
        onClick: w,
        holder: $
      } = e, {
        class: I,
        style: N
      } = n, T = `${v}-notice`, S = Object.keys(n).reduce((P, k) => ((k.startsWith("data-") || k.startsWith("aria-") || k === "role") && (P[k] = n[k]), P), {}), O = o("div", R({
        class: Y(T, I, {
          [`${T}-closable`]: s
        }),
        style: N,
        onMouseenter: p,
        onMouseleave: m,
        onClick: w
      }, S), [o("div", {
        class: `${T}-content`
      }, [(c = a.default) === null || c === void 0 ? void 0 : c.call(a)]), s ? o("a", {
        tabindex: 0,
        onClick: r,
        class: `${T}-close`
      }, [C || o("span", {
        class: `${T}-close-x`
      }, null)]) : null]);
      return $ ? o(Da, {
        to: $
      }, {
        default: () => O
      }) : O;
    };
  }
});
var Ml = function(e, t) {
  var n = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var l = 0, a = Object.getOwnPropertySymbols(e); l < a.length; l++)
      t.indexOf(a[l]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[l]) && (n[a[l]] = e[a[l]]);
  return n;
};
let yn = 0;
const Nl = Date.now();
function bn() {
  const e = yn;
  return yn += 1, `rcNotification_${Nl}_${e}`;
}
const gt = G({
  name: "Notification",
  inheritAttrs: !1,
  props: ["prefixCls", "transitionName", "animation", "maxCount", "closeIcon", "hashId"],
  setup(e, t) {
    let {
      attrs: n,
      expose: a,
      slots: l
    } = t;
    const d = /* @__PURE__ */ new Map(), i = K([]), m = A(() => {
      const {
        prefixCls: u,
        animation: f = "fade"
      } = e;
      let c = e.transitionName;
      return !c && f && (c = `${u}-${f}`), zn(c);
    }), p = (u, f) => {
      const c = u.key || bn(), v = h(h({}, u), {
        key: c
      }), {
        maxCount: s
      } = e, C = i.value.map(($) => $.notice.key).indexOf(c), w = i.value.concat();
      C !== -1 ? w.splice(C, 1, {
        notice: v,
        holderCallback: f
      }) : (s && i.value.length >= s && (v.key = w[0].notice.key, v.updateMark = bn(), v.userPassKey = c, w.shift()), w.push({
        notice: v,
        holderCallback: f
      })), i.value = w;
    }, r = (u) => {
      i.value = i.value.filter((f) => {
        let {
          notice: {
            key: c,
            userPassKey: v
          }
        } = f;
        return (v || c) !== u;
      });
    };
    return a({
      add: p,
      remove: r,
      notices: i
    }), () => {
      var u;
      const {
        prefixCls: f,
        closeIcon: c = (u = l.closeIcon) === null || u === void 0 ? void 0 : u.call(l, {
          prefixCls: f
        })
      } = e, v = i.value.map((C, w) => {
        let {
          notice: $,
          holderCallback: I
        } = C;
        const N = w === i.value.length - 1 ? $.updateMark : void 0, {
          key: T,
          userPassKey: S
        } = $, {
          content: O
        } = $, P = h(h(h({
          prefixCls: f,
          closeIcon: typeof c == "function" ? c({
            prefixCls: f
          }) : c
        }, $), $.props), {
          key: T,
          noticeKey: S || T,
          updateMark: N,
          onClose: (k) => {
            var H;
            r(k), (H = $.onClose) === null || H === void 0 || H.call($);
          },
          onClick: $.onClick
        });
        return I ? o("div", {
          key: T,
          class: `${f}-hook-holder`,
          ref: (k) => {
            typeof T > "u" || (k ? (d.set(T, k), I(k, P)) : d.delete(T));
          }
        }, null) : o($t, R(R({}, P), {}, {
          class: Y(P.class, e.hashId)
        }), {
          default: () => [typeof O == "function" ? O({
            prefixCls: f
          }) : O]
        });
      }), s = {
        [f]: 1,
        [n.class]: !!n.class,
        [e.hashId]: !0
      };
      return o("div", {
        class: s,
        style: n.style || {
          top: "65px",
          left: "50%"
        }
      }, [o(An, R({
        tag: "div"
      }, m.value), {
        default: () => [v]
      })]);
    };
  }
});
gt.newInstance = function(t, n) {
  const a = t || {}, {
    name: l = "notification",
    getContainer: d,
    appContext: i,
    prefixCls: m,
    rootPrefixCls: p,
    transitionName: r,
    hasTransitionName: u,
    useStyle: f
  } = a, c = Ml(a, ["name", "getContainer", "appContext", "prefixCls", "rootPrefixCls", "transitionName", "hasTransitionName", "useStyle"]), v = document.createElement("div");
  d ? d().appendChild(v) : document.body.appendChild(v);
  const s = G({
    compatConfig: {
      MODE: 3
    },
    name: "NotificationWrapper",
    setup(w, $) {
      let {
        attrs: I
      } = $;
      const N = j(), T = A(() => ae.getPrefixCls(l, m)), [, S] = f(T);
      return ke(() => {
        n({
          notice(O) {
            var P;
            (P = N.value) === null || P === void 0 || P.add(O);
          },
          removeNotice(O) {
            var P;
            (P = N.value) === null || P === void 0 || P.remove(O);
          },
          destroy() {
            ft(null, v), v.parentNode && v.parentNode.removeChild(v);
          },
          component: N
        });
      }), () => {
        const O = ae, P = O.getRootPrefixCls(p, T.value), k = u ? r : `${T.value}-${r}`;
        return o(We, R(R({}, O), {}, {
          prefixCls: P
        }), {
          default: () => [o(gt, R(R({
            ref: N
          }, I), {}, {
            prefixCls: T.value,
            transitionName: k,
            hashId: S.value
          }), null)]
        });
      };
    }
  }), C = o(s, c);
  C.appContext = i || C.appContext, ft(C, v);
};
let hn = 0;
const Dl = Date.now();
function Cn() {
  const e = hn;
  return hn += 1, `rcNotification_${Dl}_${e}`;
}
const Bl = G({
  name: "HookNotification",
  inheritAttrs: !1,
  props: ["prefixCls", "transitionName", "animation", "maxCount", "closeIcon", "hashId", "remove", "notices", "getStyles", "getClassName", "onAllRemoved", "getContainer"],
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const l = /* @__PURE__ */ new Map(), d = A(() => e.notices), i = A(() => {
      let u = e.transitionName;
      if (!u && e.animation)
        switch (typeof e.animation) {
          case "string":
            u = e.animation;
            break;
          case "function":
            u = e.animation().name;
            break;
          case "object":
            u = e.animation.name;
            break;
          default:
            u = `${e.prefixCls}-fade`;
            break;
        }
      return zn(u);
    }), m = (u) => e.remove(u), p = K({});
    te(d, () => {
      const u = {};
      Object.keys(p.value).forEach((f) => {
        u[f] = [];
      }), e.notices.forEach((f) => {
        const {
          placement: c = "topRight"
        } = f.notice;
        c && (u[c] = u[c] || [], u[c].push(f));
      }), p.value = u;
    });
    const r = A(() => Object.keys(p.value));
    return () => {
      var u;
      const {
        prefixCls: f,
        closeIcon: c = (u = a.closeIcon) === null || u === void 0 ? void 0 : u.call(a, {
          prefixCls: f
        })
      } = e, v = r.value.map((s) => {
        var C, w;
        const $ = p.value[s], I = (C = e.getClassName) === null || C === void 0 ? void 0 : C.call(e, s), N = (w = e.getStyles) === null || w === void 0 ? void 0 : w.call(e, s), T = $.map((P, k) => {
          let {
            notice: H,
            holderCallback: U
          } = P;
          const D = k === d.value.length - 1 ? H.updateMark : void 0, {
            key: y,
            userPassKey: V
          } = H, {
            content: B
          } = H, g = h(h(h({
            prefixCls: f,
            closeIcon: typeof c == "function" ? c({
              prefixCls: f
            }) : c
          }, H), H.props), {
            key: y,
            noticeKey: V || y,
            updateMark: D,
            onClose: (_) => {
              var L;
              m(_), (L = H.onClose) === null || L === void 0 || L.call(H);
            },
            onClick: H.onClick
          });
          return U ? o("div", {
            key: y,
            class: `${f}-hook-holder`,
            ref: (_) => {
              typeof y > "u" || (_ ? (l.set(y, _), U(_, g)) : l.delete(y));
            }
          }, null) : o($t, R(R({}, g), {}, {
            class: Y(g.class, e.hashId)
          }), {
            default: () => [typeof B == "function" ? B({
              prefixCls: f
            }) : B]
          });
        }), S = {
          [f]: 1,
          [`${f}-${s}`]: 1,
          [n.class]: !!n.class,
          [e.hashId]: !0,
          [I]: !!I
        };
        function O() {
          var P;
          $.length > 0 || (Reflect.deleteProperty(p.value, s), (P = e.onAllRemoved) === null || P === void 0 || P.call(e));
        }
        return o("div", {
          key: s,
          class: S,
          style: n.style || N || {
            top: "65px",
            left: "50%"
          }
        }, [o(An, R(R({
          tag: "div"
        }, i.value), {}, {
          onAfterLeave: O
        }), {
          default: () => [T]
        })]);
      });
      return o(Ka, {
        getContainer: e.getContainer
      }, {
        default: () => [v]
      });
    };
  }
}), Al = Bl;
var kl = function(e, t) {
  var n = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var l = 0, a = Object.getOwnPropertySymbols(e); l < a.length; l++)
      t.indexOf(a[l]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[l]) && (n[a[l]] = e[a[l]]);
  return n;
};
const Rl = () => document.body;
let $n = 0;
function Ll() {
  const e = {};
  for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
    n[a] = arguments[a];
  return n.forEach((l) => {
    l && Object.keys(l).forEach((d) => {
      const i = l[d];
      i !== void 0 && (e[d] = i);
    });
  }), e;
}
function qn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    getContainer: t = Rl,
    motion: n,
    prefixCls: a,
    maxCount: l,
    getClassName: d,
    getStyles: i,
    onAllRemoved: m
  } = e, p = kl(e, ["getContainer", "motion", "prefixCls", "maxCount", "getClassName", "getStyles", "onAllRemoved"]), r = j([]), u = j(), f = ($, I) => {
    const N = $.key || Cn(), T = h(h({}, $), {
      key: N
    }), S = r.value.map((P) => P.notice.key).indexOf(N), O = r.value.concat();
    S !== -1 ? O.splice(S, 1, {
      notice: T,
      holderCallback: I
    }) : (l && r.value.length >= l && (T.key = O[0].notice.key, T.updateMark = Cn(), T.userPassKey = N, O.shift()), O.push({
      notice: T,
      holderCallback: I
    })), r.value = O;
  }, c = ($) => {
    r.value = r.value.filter((I) => {
      let {
        notice: {
          key: N,
          userPassKey: T
        }
      } = I;
      return (T || N) !== $;
    });
  }, v = () => {
    r.value = [];
  }, s = () => o(Al, {
    ref: u,
    prefixCls: a,
    maxCount: l,
    notices: r.value,
    remove: c,
    getClassName: d,
    getStyles: i,
    animation: n,
    hashId: e.hashId,
    onAllRemoved: m,
    getContainer: t
  }, null), C = j([]), w = {
    open: ($) => {
      const I = Ll(p, $);
      (I.key === null || I.key === void 0) && (I.key = `vc-notification-${$n}`, $n += 1), C.value = [...C.value, {
        type: "open",
        config: I
      }];
    },
    close: ($) => {
      C.value = [...C.value, {
        type: "close",
        key: $
      }];
    },
    destroy: () => {
      C.value = [...C.value, {
        type: "destroy"
      }];
    }
  };
  return te(C, () => {
    C.value.length && (C.value.forEach(($) => {
      switch ($.type) {
        case "open":
          f($.config);
          break;
        case "close":
          c($.key);
          break;
        case "destroy":
          v();
          break;
      }
    }), C.value = []);
  }), [w, s];
}
const Hl = (e) => {
  const {
    componentCls: t,
    iconCls: n,
    boxShadowSecondary: a,
    colorBgElevated: l,
    colorSuccess: d,
    colorError: i,
    colorWarning: m,
    colorInfo: p,
    fontSizeLG: r,
    motionEaseInOutCirc: u,
    motionDurationSlow: f,
    marginXS: c,
    paddingXS: v,
    borderRadiusLG: s,
    zIndexPopup: C,
    // Custom token
    messageNoticeContentPadding: w
  } = e, $ = new _e("MessageMoveIn", {
    "0%": {
      padding: 0,
      transform: "translateY(-100%)",
      opacity: 0
    },
    "100%": {
      padding: v,
      transform: "translateY(0)",
      opacity: 1
    }
  }), I = new _e("MessageMoveOut", {
    "0%": {
      maxHeight: e.height,
      padding: v,
      opacity: 1
    },
    "100%": {
      maxHeight: 0,
      padding: 0,
      opacity: 0
    }
  });
  return [
    // ============================ Holder ============================
    {
      [t]: h(h({}, Je(e)), {
        position: "fixed",
        top: c,
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
        pointerEvents: "none",
        zIndex: C,
        [`${t}-move-up`]: {
          animationFillMode: "forwards"
        },
        [`
        ${t}-move-up-appear,
        ${t}-move-up-enter
      `]: {
          animationName: $,
          animationDuration: f,
          animationPlayState: "paused",
          animationTimingFunction: u
        },
        [`
        ${t}-move-up-appear${t}-move-up-appear-active,
        ${t}-move-up-enter${t}-move-up-enter-active
      `]: {
          animationPlayState: "running"
        },
        [`${t}-move-up-leave`]: {
          animationName: I,
          animationDuration: f,
          animationPlayState: "paused",
          animationTimingFunction: u
        },
        [`${t}-move-up-leave${t}-move-up-leave-active`]: {
          animationPlayState: "running"
        },
        "&-rtl": {
          direction: "rtl",
          span: {
            direction: "rtl"
          }
        }
      })
    },
    // ============================ Notice ============================
    {
      [`${t}-notice`]: {
        padding: v,
        textAlign: "center",
        [n]: {
          verticalAlign: "text-bottom",
          marginInlineEnd: c,
          fontSize: r
        },
        [`${t}-notice-content`]: {
          display: "inline-block",
          padding: w,
          background: l,
          borderRadius: s,
          boxShadow: a,
          pointerEvents: "all"
        },
        [`${t}-success ${n}`]: {
          color: d
        },
        [`${t}-error ${n}`]: {
          color: i
        },
        [`${t}-warning ${n}`]: {
          color: m
        },
        [`
        ${t}-info ${n},
        ${t}-loading ${n}`]: {
          color: p
        }
      }
    },
    // ============================= Pure =============================
    {
      [`${t}-notice-pure-panel`]: {
        padding: 0,
        textAlign: "start"
      }
    }
  ];
}, jt = yt("Message", (e) => {
  const t = bt(e, {
    messageNoticeContentPadding: `${(e.controlHeightLG - e.fontSize * e.lineHeight) / 2}px ${e.paddingSM}px`
  });
  return [Hl(t)];
}, (e) => ({
  height: 150,
  zIndexPopup: e.zIndexPopupBase + 10
})), zl = {
  info: o(Re, null, null),
  success: o(nt, null, null),
  error: o(tt, null, null),
  warning: o(at, null, null),
  loading: o(At, null, null)
}, Zn = G({
  name: "PureContent",
  inheritAttrs: !1,
  props: ["prefixCls", "type", "icon"],
  setup(e, t) {
    let {
      slots: n
    } = t;
    return () => {
      var a;
      return o("div", {
        class: Y(`${e.prefixCls}-custom-content`, `${e.prefixCls}-${e.type}`)
      }, [e.icon || zl[e.type], o("span", null, [(a = n.default) === null || a === void 0 ? void 0 : a.call(n)])]);
    };
  }
});
G({
  name: "PurePanel",
  inheritAttrs: !1,
  props: ["prefixCls", "class", "type", "icon", "content"],
  setup(e, t) {
    let {
      slots: n,
      attrs: a
    } = t;
    var l;
    const {
      getPrefixCls: d
    } = kt(), i = A(() => e.prefixCls || d("message")), [, m] = jt(i);
    return o($t, R(R({}, a), {}, {
      prefixCls: i.value,
      class: Y(m.value, `${i.value}-notice-pure-panel`),
      noticeKey: "pure",
      duration: null
    }), {
      default: () => [o(Zn, {
        prefixCls: i.value,
        type: e.type,
        icon: e.icon
      }, {
        default: () => [(l = n.default) === null || l === void 0 ? void 0 : l.call(n)]
      })]
    });
  }
});
var Wl = function(e, t) {
  var n = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var l = 0, a = Object.getOwnPropertySymbols(e); l < a.length; l++)
      t.indexOf(a[l]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[l]) && (n[a[l]] = e[a[l]]);
  return n;
};
const Fl = 8, jl = 3, Ul = G({
  name: "Holder",
  inheritAttrs: !1,
  props: ["top", "prefixCls", "getContainer", "maxCount", "duration", "rtl", "transitionName", "onAllRemoved"],
  setup(e, t) {
    let {
      expose: n
    } = t;
    var a, l;
    const {
      getPrefixCls: d,
      getPopupContainer: i
    } = et("message", e), m = A(() => d("message", e.prefixCls)), [, p] = jt(m), r = () => {
      var C;
      const w = (C = e.top) !== null && C !== void 0 ? C : Fl;
      return {
        left: "50%",
        transform: "translateX(-50%)",
        top: typeof w == "number" ? `${w}px` : w
      };
    }, u = () => Y(p.value, e.rtl ? `${m.value}-rtl` : ""), f = () => {
      var C;
      return Va({
        prefixCls: m.value,
        animation: (C = e.animation) !== null && C !== void 0 ? C : "move-up",
        transitionName: e.transitionName
      });
    }, c = o("span", {
      class: `${m.value}-close-x`
    }, [o(ot, {
      class: `${m.value}-close-icon`
    }, null)]), [v, s] = qn({
      //@ts-ignore
      getStyles: r,
      prefixCls: m.value,
      getClassName: u,
      motion: f,
      closable: !1,
      closeIcon: c,
      duration: (a = e.duration) !== null && a !== void 0 ? a : jl,
      getContainer: (l = e.staticGetContainer) !== null && l !== void 0 ? l : i.value,
      maxCount: e.maxCount,
      onAllRemoved: e.onAllRemoved
    });
    return n(h(h({}, v), {
      prefixCls: m,
      hashId: p
    })), s;
  }
});
let xn = 0;
function Gl(e) {
  const t = j(null), n = Symbol("messageHolderKey"), a = (p) => {
    var r;
    (r = t.value) === null || r === void 0 || r.close(p);
  }, l = (p) => {
    if (!t.value) {
      const S = () => {
      };
      return S.then = () => {
      }, S;
    }
    const {
      open: r,
      prefixCls: u,
      hashId: f
    } = t.value, c = `${u}-notice`, {
      content: v,
      icon: s,
      type: C,
      key: w,
      class: $,
      onClose: I
    } = p, N = Wl(p, ["content", "icon", "type", "key", "class", "onClose"]);
    let T = w;
    return T == null && (xn += 1, T = `antd-message-${xn}`), Xa((S) => (r(h(h({}, N), {
      key: T,
      content: () => o(Zn, {
        prefixCls: u,
        type: C,
        icon: typeof s == "function" ? s() : s
      }, {
        default: () => [typeof v == "function" ? v() : v]
      }),
      placement: "top",
      // @ts-ignore
      class: Y(C && `${c}-${C}`, f, $),
      onClose: () => {
        I == null || I(), S();
      }
    })), () => {
      a(T);
    }));
  }, i = {
    open: l,
    destroy: (p) => {
      var r;
      p !== void 0 ? a(p) : (r = t.value) === null || r === void 0 || r.destroy();
    }
  };
  return ["info", "success", "warning", "error", "loading"].forEach((p) => {
    const r = (u, f, c) => {
      let v;
      u && typeof u == "object" && "content" in u ? v = u : v = {
        content: u
      };
      let s, C;
      typeof f == "function" ? C = f : (s = f, C = c);
      const w = h(h({
        onClose: C,
        duration: s
      }, v), {
        type: p
      });
      return l(w);
    };
    i[p] = r;
  }), [i, () => o(Ul, R(R({
    key: n
  }, e), {}, {
    ref: t
  }), null)];
}
function Kl(e) {
  return Gl(e);
}
let Jn = 3, ea, re, Vl = 1, ta = "", na = "move-up", aa = !1, oa = () => document.body, la, ia = !1;
function Xl() {
  return Vl++;
}
function Yl(e) {
  e.top !== void 0 && (ea = e.top, re = null), e.duration !== void 0 && (Jn = e.duration), e.prefixCls !== void 0 && (ta = e.prefixCls), e.getContainer !== void 0 && (oa = e.getContainer, re = null), e.transitionName !== void 0 && (na = e.transitionName, re = null, aa = !0), e.maxCount !== void 0 && (la = e.maxCount, re = null), e.rtl !== void 0 && (ia = e.rtl);
}
function Ql(e, t) {
  if (re) {
    t(re);
    return;
  }
  gt.newInstance({
    appContext: e.appContext,
    prefixCls: e.prefixCls || ta,
    rootPrefixCls: e.rootPrefixCls,
    transitionName: na,
    hasTransitionName: aa,
    style: {
      top: ea
    },
    getContainer: oa || e.getPopupContainer,
    maxCount: la,
    name: "message",
    useStyle: jt
  }, (n) => {
    if (re) {
      t(re);
      return;
    }
    re = n, t(n);
  });
}
const ra = {
  info: Re,
  success: nt,
  error: tt,
  warning: at,
  loading: At
}, ql = Object.keys(ra);
function Zl(e) {
  const t = e.duration !== void 0 ? e.duration : Jn, n = e.key || Xl(), a = new Promise((d) => {
    const i = () => (typeof e.onClose == "function" && e.onClose(), d(!0));
    Ql(e, (m) => {
      m.notice({
        key: n,
        duration: t,
        style: e.style || {},
        class: e.class,
        content: (p) => {
          let {
            prefixCls: r
          } = p;
          const u = ra[e.type], f = u ? o(u, null, null) : "", c = Y(`${r}-custom-content`, {
            [`${r}-${e.type}`]: e.type,
            [`${r}-rtl`]: ia === !0
          });
          return o("div", {
            class: c
          }, [typeof e.icon == "function" ? e.icon() : e.icon || f, o("span", null, [typeof e.content == "function" ? e.content() : e.content])]);
        },
        onClose: i,
        onClick: e.onClick
      });
    });
  }), l = () => {
    re && re.removeNotice(n);
  };
  return l.then = (d, i) => a.then(d, i), l.promise = a, l;
}
function Jl(e) {
  return Object.prototype.toString.call(e) === "[object Object]" && !!e.content;
}
const Ze = {
  open: Zl,
  config: Yl,
  destroy(e) {
    if (re)
      if (e) {
        const {
          removeNotice: t
        } = re;
        t(e);
      } else {
        const {
          destroy: t
        } = re;
        t(), re = null;
      }
  }
};
function ei(e, t) {
  e[t] = (n, a, l) => Jl(n) ? e.open(h(h({}, n), {
    type: t
  })) : (typeof a == "function" && (l = a, a = void 0), e.open({
    content: n,
    duration: a,
    type: t,
    onClose: l
  }));
}
ql.forEach((e) => ei(Ze, e));
Ze.warn = Ze.warning;
Ze.useMessage = Kl;
const ti = (e) => {
  const {
    componentCls: t,
    width: n,
    notificationMarginEdge: a
  } = e, l = new _e("antNotificationTopFadeIn", {
    "0%": {
      marginTop: "-100%",
      opacity: 0
    },
    "100%": {
      marginTop: 0,
      opacity: 1
    }
  }), d = new _e("antNotificationBottomFadeIn", {
    "0%": {
      marginBottom: "-100%",
      opacity: 0
    },
    "100%": {
      marginBottom: 0,
      opacity: 1
    }
  }), i = new _e("antNotificationLeftFadeIn", {
    "0%": {
      right: {
        _skip_check_: !0,
        value: n
      },
      opacity: 0
    },
    "100%": {
      right: {
        _skip_check_: !0,
        value: 0
      },
      opacity: 1
    }
  });
  return {
    [`&${t}-top, &${t}-bottom`]: {
      marginInline: 0
    },
    [`&${t}-top`]: {
      [`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]: {
        animationName: l
      }
    },
    [`&${t}-bottom`]: {
      [`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]: {
        animationName: d
      }
    },
    [`&${t}-topLeft, &${t}-bottomLeft`]: {
      marginInlineEnd: 0,
      marginInlineStart: a,
      [`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]: {
        animationName: i
      }
    }
  };
}, ni = (e) => {
  const {
    iconCls: t,
    componentCls: n,
    // .ant-notification
    boxShadowSecondary: a,
    fontSizeLG: l,
    notificationMarginBottom: d,
    borderRadiusLG: i,
    colorSuccess: m,
    colorInfo: p,
    colorWarning: r,
    colorError: u,
    colorTextHeading: f,
    notificationBg: c,
    notificationPadding: v,
    notificationMarginEdge: s,
    motionDurationMid: C,
    motionEaseInOut: w,
    fontSize: $,
    lineHeight: I,
    width: N,
    notificationIconSize: T
  } = e, S = `${n}-notice`, O = new _e("antNotificationFadeIn", {
    "0%": {
      left: {
        _skip_check_: !0,
        value: N
      },
      opacity: 0
    },
    "100%": {
      left: {
        _skip_check_: !0,
        value: 0
      },
      opacity: 1
    }
  }), P = new _e("antNotificationFadeOut", {
    "0%": {
      maxHeight: e.animationMaxHeight,
      marginBottom: d,
      opacity: 1
    },
    "100%": {
      maxHeight: 0,
      marginBottom: 0,
      paddingTop: 0,
      paddingBottom: 0,
      opacity: 0
    }
  });
  return [
    // ============================ Holder ============================
    {
      [n]: h(h(h(h({}, Je(e)), {
        position: "fixed",
        zIndex: e.zIndexPopup,
        marginInlineEnd: s,
        [`${n}-hook-holder`]: {
          position: "relative"
        },
        [`&${n}-top, &${n}-bottom`]: {
          [`${n}-notice`]: {
            marginInline: "auto auto"
          }
        },
        [`&${n}-topLeft, &${n}-bottomLeft`]: {
          [`${n}-notice`]: {
            marginInlineEnd: "auto",
            marginInlineStart: 0
          }
        },
        //  animation
        [`${n}-fade-enter, ${n}-fade-appear`]: {
          animationDuration: e.motionDurationMid,
          animationTimingFunction: w,
          animationFillMode: "both",
          opacity: 0,
          animationPlayState: "paused"
        },
        [`${n}-fade-leave`]: {
          animationTimingFunction: w,
          animationFillMode: "both",
          animationDuration: C,
          animationPlayState: "paused"
        },
        [`${n}-fade-enter${n}-fade-enter-active, ${n}-fade-appear${n}-fade-appear-active`]: {
          animationName: O,
          animationPlayState: "running"
        },
        [`${n}-fade-leave${n}-fade-leave-active`]: {
          animationName: P,
          animationPlayState: "running"
        }
      }), ti(e)), {
        // RTL
        "&-rtl": {
          direction: "rtl",
          [`${n}-notice-btn`]: {
            float: "left"
          }
        }
      })
    },
    // ============================ Notice ============================
    {
      [S]: {
        position: "relative",
        width: N,
        maxWidth: `calc(100vw - ${s * 2}px)`,
        marginBottom: d,
        marginInlineStart: "auto",
        padding: v,
        overflow: "hidden",
        lineHeight: I,
        wordWrap: "break-word",
        background: c,
        borderRadius: i,
        boxShadow: a,
        [`${n}-close-icon`]: {
          fontSize: $,
          cursor: "pointer"
        },
        [`${S}-message`]: {
          marginBottom: e.marginXS,
          color: f,
          fontSize: l,
          lineHeight: e.lineHeightLG
        },
        [`${S}-description`]: {
          fontSize: $
        },
        [`&${S}-closable ${S}-message`]: {
          paddingInlineEnd: e.paddingLG
        },
        [`${S}-with-icon ${S}-message`]: {
          marginBottom: e.marginXS,
          marginInlineStart: e.marginSM + T,
          fontSize: l
        },
        [`${S}-with-icon ${S}-description`]: {
          marginInlineStart: e.marginSM + T,
          fontSize: $
        },
        // Icon & color style in different selector level
        // https://github.com/ant-design/ant-design/issues/16503
        // https://github.com/ant-design/ant-design/issues/15512
        [`${S}-icon`]: {
          position: "absolute",
          fontSize: T,
          lineHeight: 0,
          // icon-font
          [`&-success${t}`]: {
            color: m
          },
          [`&-info${t}`]: {
            color: p
          },
          [`&-warning${t}`]: {
            color: r
          },
          [`&-error${t}`]: {
            color: u
          }
        },
        [`${S}-close`]: {
          position: "absolute",
          top: e.notificationPaddingVertical,
          insetInlineEnd: e.notificationPaddingHorizontal,
          color: e.colorIcon,
          outline: "none",
          width: e.notificationCloseButtonSize,
          height: e.notificationCloseButtonSize,
          borderRadius: e.borderRadiusSM,
          transition: `background-color ${e.motionDurationMid}, color ${e.motionDurationMid}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "&:hover": {
            color: e.colorIconHover,
            backgroundColor: e.wireframe ? "transparent" : e.colorFillContent
          }
        },
        [`${S}-btn`]: {
          float: "right",
          marginTop: e.marginSM
        }
      }
    },
    // ============================= Pure =============================
    {
      [`${S}-pure-panel`]: {
        margin: 0
      }
    }
  ];
}, Ut = yt("Notification", (e) => {
  const t = e.paddingMD, n = e.paddingLG, a = bt(e, {
    // default.less variables
    notificationBg: e.colorBgElevated,
    notificationPaddingVertical: t,
    notificationPaddingHorizontal: n,
    // index.less variables
    notificationPadding: `${e.paddingMD}px ${e.paddingContentHorizontalLG}px`,
    notificationMarginBottom: e.margin,
    notificationMarginEdge: e.marginLG,
    animationMaxHeight: 150,
    notificationIconSize: e.fontSizeLG * e.lineHeightLG,
    notificationCloseButtonSize: e.controlHeightLG * 0.55
  });
  return [ni(a)];
}, (e) => ({
  zIndexPopup: e.zIndexPopupBase + 50,
  width: 384
}));
function sa(e, t) {
  return t || o("span", {
    class: `${e}-close-x`
  }, [o(ot, {
    class: `${e}-close-icon`
  }, null)]);
}
o(Re, null, null), o(nt, null, null), o(tt, null, null), o(at, null, null), o(At, null, null);
const ai = {
  success: nt,
  info: Re,
  error: tt,
  warning: at
};
function ca(e) {
  let {
    prefixCls: t,
    icon: n,
    type: a,
    message: l,
    description: d,
    btn: i
  } = e, m = null;
  if (n)
    m = o("span", {
      class: `${t}-icon`
    }, [He(n)]);
  else if (a) {
    const p = ai[a];
    m = o(p, {
      class: `${t}-icon ${t}-icon-${a}`
    }, null);
  }
  return o("div", {
    class: Y({
      [`${t}-with-icon`]: m
    }),
    role: "alert"
  }, [m, o("div", {
    class: `${t}-message`
  }, [l]), o("div", {
    class: `${t}-description`
  }, [d]), i && o("div", {
    class: `${t}-btn`
  }, [i])]);
}
G({
  name: "PurePanel",
  inheritAttrs: !1,
  props: ["prefixCls", "icon", "type", "message", "description", "btn", "closeIcon"],
  setup(e) {
    const {
      getPrefixCls: t
    } = et("notification", e), n = A(() => e.prefixCls || t("notification")), a = A(() => `${n.value}-notice`), [, l] = Ut(n);
    return () => o($t, R(R({}, e), {}, {
      prefixCls: n.value,
      class: Y(l.value, `${a.value}-pure-panel`),
      noticeKey: "pure",
      duration: null,
      closable: e.closable,
      closeIcon: sa(n.value, e.closeIcon)
    }), {
      default: () => [o(ca, {
        prefixCls: a.value,
        icon: e.icon,
        type: e.type,
        message: e.message,
        description: e.description,
        btn: e.btn
      }, null)]
    });
  }
});
function ua(e, t, n) {
  let a;
  switch (t = typeof t == "number" ? `${t}px` : t, n = typeof n == "number" ? `${n}px` : n, e) {
    case "top":
      a = {
        left: "50%",
        transform: "translateX(-50%)",
        right: "auto",
        top: t,
        bottom: "auto"
      };
      break;
    case "topLeft":
      a = {
        left: 0,
        top: t,
        bottom: "auto"
      };
      break;
    case "topRight":
      a = {
        right: 0,
        top: t,
        bottom: "auto"
      };
      break;
    case "bottom":
      a = {
        left: "50%",
        transform: "translateX(-50%)",
        right: "auto",
        top: "auto",
        bottom: n
      };
      break;
    case "bottomLeft":
      a = {
        left: 0,
        top: "auto",
        bottom: n
      };
      break;
    default:
      a = {
        right: 0,
        top: "auto",
        bottom: n
      };
      break;
  }
  return a;
}
function oi(e) {
  return {
    name: `${e}-fade`
  };
}
var li = function(e, t) {
  var n = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var l = 0, a = Object.getOwnPropertySymbols(e); l < a.length; l++)
      t.indexOf(a[l]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[l]) && (n[a[l]] = e[a[l]]);
  return n;
};
const Sn = 24, ii = 4.5, ri = G({
  name: "Holder",
  inheritAttrs: !1,
  props: ["prefixCls", "class", "type", "icon", "content", "onAllRemoved"],
  setup(e, t) {
    let {
      expose: n
    } = t;
    const {
      getPrefixCls: a,
      getPopupContainer: l
    } = et("notification", e), d = A(() => e.prefixCls || a("notification")), i = (c) => {
      var v, s;
      return ua(c, (v = e.top) !== null && v !== void 0 ? v : Sn, (s = e.bottom) !== null && s !== void 0 ? s : Sn);
    }, [, m] = Ut(d), p = () => Y(m.value, {
      [`${d.value}-rtl`]: e.rtl
    }), r = () => oi(d.value), [u, f] = qn({
      prefixCls: d.value,
      getStyles: i,
      getClassName: p,
      motion: r,
      closable: !0,
      closeIcon: sa(d.value),
      duration: ii,
      getContainer: () => {
        var c, v;
        return ((c = e.getPopupContainer) === null || c === void 0 ? void 0 : c.call(e)) || ((v = l.value) === null || v === void 0 ? void 0 : v.call(l)) || document.body;
      },
      maxCount: e.maxCount,
      hashId: m.value,
      onAllRemoved: e.onAllRemoved
    });
    return n(h(h({}, u), {
      prefixCls: d.value,
      hashId: m
    })), f;
  }
});
function si(e) {
  const t = j(null), n = Symbol("notificationHolderKey"), a = (m) => {
    if (!t.value)
      return;
    const {
      open: p,
      prefixCls: r,
      hashId: u
    } = t.value, f = `${r}-notice`, {
      message: c,
      description: v,
      icon: s,
      type: C,
      btn: w,
      class: $
    } = m, I = li(m, ["message", "description", "icon", "type", "btn", "class"]);
    return p(h(h({
      placement: "topRight"
    }, I), {
      content: () => o(ca, {
        prefixCls: f,
        icon: typeof s == "function" ? s() : s,
        type: C,
        message: typeof c == "function" ? c() : c,
        description: typeof v == "function" ? v() : v,
        btn: typeof w == "function" ? w() : w
      }, null),
      // @ts-ignore
      class: Y(C && `${f}-${C}`, u, $)
    }));
  }, d = {
    open: a,
    destroy: (m) => {
      var p, r;
      m !== void 0 ? (p = t.value) === null || p === void 0 || p.close(m) : (r = t.value) === null || r === void 0 || r.destroy();
    }
  };
  return ["success", "info", "warning", "error"].forEach((m) => {
    d[m] = (p) => a(h(h({}, p), {
      type: m
    }));
  }), [d, () => o(ri, R(R({
    key: n
  }, e), {}, {
    ref: t
  }), null)];
}
function ci(e) {
  return si(e);
}
const Be = {};
let da = 4.5, fa = "24px", va = "24px", Mt = "", ma = "topRight", pa = () => document.body, ga = null, Nt = !1, ya;
function ui(e) {
  const {
    duration: t,
    placement: n,
    bottom: a,
    top: l,
    getContainer: d,
    closeIcon: i,
    prefixCls: m
  } = e;
  m !== void 0 && (Mt = m), t !== void 0 && (da = t), n !== void 0 && (ma = n), a !== void 0 && (va = typeof a == "number" ? `${a}px` : a), l !== void 0 && (fa = typeof l == "number" ? `${l}px` : l), d !== void 0 && (pa = d), i !== void 0 && (ga = i), e.rtl !== void 0 && (Nt = e.rtl), e.maxCount !== void 0 && (ya = e.maxCount);
}
function di(e, t) {
  let {
    prefixCls: n,
    placement: a = ma,
    getContainer: l = pa,
    top: d,
    bottom: i,
    closeIcon: m = ga,
    appContext: p
  } = e;
  const {
    getPrefixCls: r
  } = Si(), u = r("notification", n || Mt), f = `${u}-${a}-${Nt}`, c = Be[f];
  if (c) {
    Promise.resolve(c).then((s) => {
      t(s);
    });
    return;
  }
  const v = Y(`${u}-${a}`, {
    [`${u}-rtl`]: Nt === !0
  });
  gt.newInstance({
    name: "notification",
    prefixCls: n || Mt,
    useStyle: Ut,
    class: v,
    style: ua(a, d ?? fa, i ?? va),
    appContext: p,
    getContainer: l,
    closeIcon: (s) => {
      let {
        prefixCls: C
      } = s;
      return o("span", {
        class: `${C}-close-x`
      }, [He(m, {}, o(ot, {
        class: `${C}-close-icon`
      }, null))]);
    },
    maxCount: ya,
    hasTransitionName: !0
  }, (s) => {
    Be[f] = s, t(s);
  });
}
const fi = {
  success: Ht,
  info: Wt,
  error: Ft,
  warning: zt
};
function vi(e) {
  const {
    icon: t,
    type: n,
    description: a,
    message: l,
    btn: d
  } = e, i = e.duration === void 0 ? da : e.duration;
  di(e, (m) => {
    m.notice({
      content: (p) => {
        let {
          prefixCls: r
        } = p;
        const u = `${r}-notice`;
        let f = null;
        if (t)
          f = () => o("span", {
            class: `${u}-icon`
          }, [He(t)]);
        else if (n) {
          const c = fi[n];
          f = () => o(c, {
            class: `${u}-icon ${u}-icon-${n}`
          }, null);
        }
        return o("div", {
          class: f ? `${u}-with-icon` : ""
        }, [f && f(), o("div", {
          class: `${u}-message`
        }, [!a && f ? o("span", {
          class: `${u}-message-single-line-auto-margin`
        }, null) : null, He(l)]), o("div", {
          class: `${u}-description`
        }, [He(a)]), d ? o("span", {
          class: `${u}-btn`
        }, [He(d)]) : null]);
      },
      duration: i,
      closable: !0,
      onClose: e.onClose,
      onClick: e.onClick,
      key: e.key,
      style: e.style || {},
      class: e.class
    });
  });
}
const Fe = {
  open: vi,
  close(e) {
    Object.keys(Be).forEach((t) => Promise.resolve(Be[t]).then((n) => {
      n.removeNotice(e);
    }));
  },
  config: ui,
  destroy() {
    Object.keys(Be).forEach((e) => {
      Promise.resolve(Be[e]).then((t) => {
        t.destroy();
      }), delete Be[e];
    });
  }
}, mi = ["success", "info", "warning", "error"];
mi.forEach((e) => {
  Fe[e] = (t) => Fe.open(h(h({}, t), {
    type: e
  }));
});
Fe.warn = Fe.warning;
Fe.useNotification = ci;
const pi = `-ant-${Date.now()}-${Math.random()}`;
function gi(e, t) {
  const n = {}, a = (i, m) => {
    let p = i.clone();
    return p = (m == null ? void 0 : m(p)) || p, p.toRgbString();
  }, l = (i, m) => {
    const p = new Tt(i), r = en(p.toRgbString());
    n[`${m}-color`] = a(p), n[`${m}-color-disabled`] = r[1], n[`${m}-color-hover`] = r[4], n[`${m}-color-active`] = r[6], n[`${m}-color-outline`] = p.clone().setAlpha(0.2).toRgbString(), n[`${m}-color-deprecated-bg`] = r[0], n[`${m}-color-deprecated-border`] = r[2];
  };
  if (t.primaryColor) {
    l(t.primaryColor, "primary");
    const i = new Tt(t.primaryColor), m = en(i.toRgbString());
    m.forEach((r, u) => {
      n[`primary-${u + 1}`] = r;
    }), n["primary-color-deprecated-l-35"] = a(i, (r) => r.lighten(35)), n["primary-color-deprecated-l-20"] = a(i, (r) => r.lighten(20)), n["primary-color-deprecated-t-20"] = a(i, (r) => r.tint(20)), n["primary-color-deprecated-t-50"] = a(i, (r) => r.tint(50)), n["primary-color-deprecated-f-12"] = a(i, (r) => r.setAlpha(r.getAlpha() * 0.12));
    const p = new Tt(m[0]);
    n["primary-color-active-deprecated-f-30"] = a(p, (r) => r.setAlpha(r.getAlpha() * 0.3)), n["primary-color-active-deprecated-d-02"] = a(p, (r) => r.darken(2));
  }
  return t.successColor && l(t.successColor, "success"), t.warningColor && l(t.warningColor, "warning"), t.errorColor && l(t.errorColor, "error"), t.infoColor && l(t.infoColor, "info"), `
  :root {
    ${Object.keys(n).map((i) => `--${e}-${i}: ${n[i]};`).join(`
`)}
  }
  `.trim();
}
function yi(e, t) {
  const n = gi(e, t);
  Ya() ? Qa(n, `${pi}-dynamic-theme`) : Ct(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const bi = (e) => {
  const [t, n] = qa();
  return Za(A(() => ({
    theme: t.value,
    token: n.value,
    hashId: "",
    path: ["ant-design-icons", e.value]
  })), () => [{
    [`.${e.value}`]: h(h({}, Ja()), {
      [`.${e.value} .${e.value}-icon`]: {
        display: "block"
      }
    })
  }]);
};
function hi(e, t) {
  const n = A(() => (e == null ? void 0 : e.value) || {}), a = A(() => n.value.inherit === !1 || !(t != null && t.value) ? eo : t.value);
  return A(() => {
    if (!(e != null && e.value))
      return t == null ? void 0 : t.value;
    const d = h({}, a.value.components);
    return Object.keys(e.value.components || {}).forEach((i) => {
      d[i] = h(h({}, d[i]), e.value.components[i]);
    }), h(h(h({}, a.value), n.value), {
      token: h(h({}, a.value.token), n.value.token),
      components: d
    });
  });
}
var Ci = function(e, t) {
  var n = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var l = 0, a = Object.getOwnPropertySymbols(e); l < a.length; l++)
      t.indexOf(a[l]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[l]) && (n[a[l]] = e[a[l]]);
  return n;
};
const $i = "ant";
function ze() {
  return ae.prefixCls || $i;
}
function ba() {
  return ae.iconPrefixCls || Wn;
}
const Gt = qe({}), ae = qe({});
Me(() => {
  h(ae, Gt), ae.prefixCls = ze(), ae.iconPrefixCls = ba(), ae.getPrefixCls = (e, t) => t || (e ? `${ae.prefixCls}-${e}` : ae.prefixCls), ae.getRootPrefixCls = () => ae.prefixCls ? ae.prefixCls : ze();
});
let Et;
const xi = (e) => {
  Et && Et(), Et = Me(() => {
    h(Gt, qe(e)), h(ae, qe(e));
  }), e.theme && yi(ze(), e.theme);
}, Si = () => ({
  getPrefixCls: (e, t) => t || (e ? `${ze()}-${e}` : ze()),
  getIconPrefixCls: ba,
  getRootPrefixCls: () => ae.prefixCls ? ae.prefixCls : ze()
}), We = G({
  compatConfig: {
    MODE: 3
  },
  name: "AConfigProvider",
  inheritAttrs: !1,
  props: to(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = kt(), l = (g, _) => {
      const {
        prefixCls: L = "ant"
      } = e;
      if (_)
        return _;
      const W = L || a.getPrefixCls("");
      return g ? `${W}-${g}` : W;
    }, d = A(() => e.iconPrefixCls || a.iconPrefixCls.value || Wn), i = A(() => d.value !== a.iconPrefixCls.value), m = A(() => {
      var g;
      return e.csp || ((g = a.csp) === null || g === void 0 ? void 0 : g.value);
    }), p = bi(d), r = hi(A(() => e.theme), A(() => {
      var g;
      return (g = a.theme) === null || g === void 0 ? void 0 : g.value;
    })), u = (g) => (e.renderEmpty || n.renderEmpty || a.renderEmpty || co)(g), f = A(() => {
      var g, _;
      return (g = e.autoInsertSpaceInButton) !== null && g !== void 0 ? g : (_ = a.autoInsertSpaceInButton) === null || _ === void 0 ? void 0 : _.value;
    }), c = A(() => {
      var g;
      return e.locale || ((g = a.locale) === null || g === void 0 ? void 0 : g.value);
    });
    te(c, () => {
      Gt.locale = c.value;
    }, {
      immediate: !0
    });
    const v = A(() => {
      var g;
      return e.direction || ((g = a.direction) === null || g === void 0 ? void 0 : g.value);
    }), s = A(() => {
      var g, _;
      return (g = e.space) !== null && g !== void 0 ? g : (_ = a.space) === null || _ === void 0 ? void 0 : _.value;
    }), C = A(() => {
      var g, _;
      return (g = e.virtual) !== null && g !== void 0 ? g : (_ = a.virtual) === null || _ === void 0 ? void 0 : _.value;
    }), w = A(() => {
      var g, _;
      return (g = e.dropdownMatchSelectWidth) !== null && g !== void 0 ? g : (_ = a.dropdownMatchSelectWidth) === null || _ === void 0 ? void 0 : _.value;
    }), $ = A(() => {
      var g;
      return e.getTargetContainer !== void 0 ? e.getTargetContainer : (g = a.getTargetContainer) === null || g === void 0 ? void 0 : g.value;
    }), I = A(() => {
      var g;
      return e.getPopupContainer !== void 0 ? e.getPopupContainer : (g = a.getPopupContainer) === null || g === void 0 ? void 0 : g.value;
    }), N = A(() => {
      var g;
      return e.pageHeader !== void 0 ? e.pageHeader : (g = a.pageHeader) === null || g === void 0 ? void 0 : g.value;
    }), T = A(() => {
      var g;
      return e.input !== void 0 ? e.input : (g = a.input) === null || g === void 0 ? void 0 : g.value;
    }), S = A(() => {
      var g;
      return e.pagination !== void 0 ? e.pagination : (g = a.pagination) === null || g === void 0 ? void 0 : g.value;
    }), O = A(() => {
      var g;
      return e.form !== void 0 ? e.form : (g = a.form) === null || g === void 0 ? void 0 : g.value;
    }), P = A(() => {
      var g;
      return e.select !== void 0 ? e.select : (g = a.select) === null || g === void 0 ? void 0 : g.value;
    }), k = A(() => e.componentSize), H = A(() => e.componentDisabled), U = A(() => {
      var g, _;
      return (g = e.wave) !== null && g !== void 0 ? g : (_ = a.wave) === null || _ === void 0 ? void 0 : _.value;
    }), D = {
      csp: m,
      autoInsertSpaceInButton: f,
      locale: c,
      direction: v,
      space: s,
      virtual: C,
      dropdownMatchSelectWidth: w,
      getPrefixCls: l,
      iconPrefixCls: d,
      theme: A(() => {
        var g, _;
        return (g = r.value) !== null && g !== void 0 ? g : (_ = a.theme) === null || _ === void 0 ? void 0 : _.value;
      }),
      renderEmpty: u,
      getTargetContainer: $,
      getPopupContainer: I,
      pageHeader: N,
      input: T,
      pagination: S,
      form: O,
      select: P,
      componentSize: k,
      componentDisabled: H,
      transformCellText: A(() => e.transformCellText),
      wave: U
    }, y = A(() => {
      const g = r.value || {}, {
        algorithm: _,
        token: L
      } = g, W = Ci(g, ["algorithm", "token"]), Q = _ && (!Array.isArray(_) || _.length > 0) ? no(_) : void 0;
      return h(h({}, W), {
        theme: Q,
        token: h(h({}, ao), L)
      });
    }), V = A(() => {
      var g, _;
      let L = {};
      return c.value && (L = ((g = c.value.Form) === null || g === void 0 ? void 0 : g.defaultValidateMessages) || ((_ = ht.Form) === null || _ === void 0 ? void 0 : _.defaultValidateMessages) || {}), e.form && e.form.validateMessages && (L = h(h({}, L), e.form.validateMessages)), L;
    });
    oo(D), lo({
      validateMessages: V
    }), io(k), ro(H);
    const B = (g) => {
      var _, L;
      let W = i.value ? p((_ = n.default) === null || _ === void 0 ? void 0 : _.call(n)) : (L = n.default) === null || L === void 0 ? void 0 : L.call(n);
      if (e.theme) {
        const Q = /* @__PURE__ */ function() {
          return W;
        }();
        W = o(uo, {
          value: y.value
        }, {
          default: () => [Q]
        });
      }
      return o(Ol, {
        locale: c.value || g,
        ANT_MARK__: Ot
      }, {
        default: () => [W]
      });
    };
    return Me(() => {
      v.value && (Ze.config({
        rtl: v.value === "rtl"
      }), Fe.config({
        rtl: v.value === "rtl"
      }));
    }), () => o(so, {
      children: (g, _, L) => B(L)
    }, null);
  }
});
We.config = xi;
We.install = function(e) {
  e.component(We.name, We);
};
function Kt() {
  return {
    keyboard: {
      type: Boolean,
      default: void 0
    },
    mask: {
      type: Boolean,
      default: void 0
    },
    afterClose: Function,
    closable: {
      type: Boolean,
      default: void 0
    },
    maskClosable: {
      type: Boolean,
      default: void 0
    },
    visible: {
      type: Boolean,
      default: void 0
    },
    destroyOnClose: {
      type: Boolean,
      default: void 0
    },
    mousePosition: J.shape({
      x: Number,
      y: Number
    }).loose,
    title: J.any,
    footer: J.any,
    transitionName: String,
    maskTransitionName: String,
    animation: J.any,
    maskAnimation: J.any,
    wrapStyle: {
      type: Object,
      default: void 0
    },
    bodyStyle: {
      type: Object,
      default: void 0
    },
    maskStyle: {
      type: Object,
      default: void 0
    },
    prefixCls: String,
    wrapClassName: String,
    rootClassName: String,
    width: [String, Number],
    height: [String, Number],
    zIndex: Number,
    bodyProps: J.any,
    maskProps: J.any,
    wrapProps: J.any,
    getContainer: J.any,
    dialogStyle: {
      type: Object,
      default: void 0
    },
    dialogClass: String,
    closeIcon: J.any,
    forceRender: {
      type: Boolean,
      default: void 0
    },
    getOpenCount: Function,
    // https://github.com/ant-design/ant-design/issues/19771
    // https://github.com/react-component/dialog/issues/95
    focusTriggerAfterClose: {
      type: Boolean,
      default: void 0
    },
    onClose: Function,
    modalRender: Function
  };
}
function _n(e, t, n) {
  let a = t;
  return !a && n && (a = `${e}-${n}`), a;
}
let wn = -1;
function _i() {
  return wn += 1, wn;
}
function Pn(e, t) {
  let n = e[`page${t ? "Y" : "X"}Offset`];
  const a = `scroll${t ? "Top" : "Left"}`;
  if (typeof n != "number") {
    const l = e.document;
    n = l.documentElement[a], typeof n != "number" && (n = l.body[a]);
  }
  return n;
}
function wi(e) {
  const t = e.getBoundingClientRect(), n = {
    left: t.left,
    top: t.top
  }, a = e.ownerDocument, l = a.defaultView || a.parentWindow;
  return n.left += Pn(l), n.top += Pn(l, !0), n;
}
const In = {
  width: 0,
  height: 0,
  overflow: "hidden",
  outline: "none"
}, Pi = G({
  compatConfig: {
    MODE: 3
  },
  name: "DialogContent",
  inheritAttrs: !1,
  props: h(h({}, Kt()), {
    motionName: String,
    ariaId: String,
    onVisibleChanged: Function,
    onMousedown: Function,
    onMouseup: Function
  }),
  setup(e, t) {
    let {
      expose: n,
      slots: a,
      attrs: l
    } = t;
    const d = K(), i = K(), m = K();
    n({
      focus: () => {
        var c;
        (c = d.value) === null || c === void 0 || c.focus();
      },
      changeActive: (c) => {
        const {
          activeElement: v
        } = document;
        c && v === i.value ? d.value.focus() : !c && v === d.value && i.value.focus();
      }
    });
    const p = K(), r = A(() => {
      const {
        width: c,
        height: v
      } = e, s = {};
      return c !== void 0 && (s.width = typeof c == "number" ? `${c}px` : c), v !== void 0 && (s.height = typeof v == "number" ? `${v}px` : v), p.value && (s.transformOrigin = p.value), s;
    }), u = () => {
      Ba(() => {
        if (m.value) {
          const c = wi(m.value);
          p.value = e.mousePosition ? `${e.mousePosition.x - c.left}px ${e.mousePosition.y - c.top}px` : "";
        }
      });
    }, f = (c) => {
      e.onVisibleChanged(c);
    };
    return () => {
      var c, v, s, C;
      const {
        prefixCls: w,
        footer: $ = (c = a.footer) === null || c === void 0 ? void 0 : c.call(a),
        title: I = (v = a.title) === null || v === void 0 ? void 0 : v.call(a),
        ariaId: N,
        closable: T,
        closeIcon: S = (s = a.closeIcon) === null || s === void 0 ? void 0 : s.call(a),
        onClose: O,
        bodyStyle: P,
        bodyProps: k,
        onMousedown: H,
        onMouseup: U,
        visible: D,
        modalRender: y = a.modalRender,
        destroyOnClose: V,
        motionName: B
      } = e;
      let g;
      $ && (g = o("div", {
        class: `${w}-footer`
      }, [$]));
      let _;
      I && (_ = o("div", {
        class: `${w}-header`
      }, [o("div", {
        class: `${w}-title`,
        id: N
      }, [I])]));
      let L;
      T && (L = o("button", {
        type: "button",
        onClick: O,
        "aria-label": "Close",
        class: `${w}-close`
      }, [S || o("span", {
        class: `${w}-close-x`
      }, null)]));
      const W = o("div", {
        class: `${w}-content`
      }, [L, _, o("div", R({
        class: `${w}-body`,
        style: P
      }, k), [(C = a.default) === null || C === void 0 ? void 0 : C.call(a)]), g]), Q = Fn(B);
      return o(kn, R(R({}, Q), {}, {
        onBeforeEnter: u,
        onAfterEnter: () => f(!0),
        onAfterLeave: () => f(!1)
      }), {
        default: () => [D || !V ? Rn(o("div", R(R({}, l), {}, {
          ref: m,
          key: "dialog-element",
          role: "document",
          style: [r.value, l.style],
          class: [w, l.class],
          onMousedown: H,
          onMouseup: U
        }), [o("div", {
          tabindex: 0,
          ref: d,
          style: In,
          "aria-hidden": "true"
        }, null), y ? y({
          originVNode: W
        }) : W, o("div", {
          tabindex: 0,
          ref: i,
          style: In,
          "aria-hidden": "true"
        }, null)]), [[Ln, D]]) : null]
      });
    };
  }
}), Ii = G({
  compatConfig: {
    MODE: 3
  },
  name: "DialogMask",
  props: {
    prefixCls: String,
    visible: Boolean,
    motionName: String,
    maskProps: Object
  },
  setup(e, t) {
    return () => {
      const {
        prefixCls: n,
        visible: a,
        maskProps: l,
        motionName: d
      } = e, i = Fn(d);
      return o(kn, i, {
        default: () => [Rn(o("div", R({
          class: `${n}-mask`
        }, l), null), [[Ln, a]])]
      });
    };
  }
}), Tn = G({
  compatConfig: {
    MODE: 3
  },
  name: "VcDialog",
  inheritAttrs: !1,
  props: Ge(h(h({}, Kt()), {
    getOpenCount: Function,
    scrollLocker: Object
  }), {
    mask: !0,
    visible: !1,
    keyboard: !0,
    closable: !0,
    maskClosable: !0,
    destroyOnClose: !1,
    prefixCls: "rc-dialog",
    getOpenCount: () => null,
    focusTriggerAfterClose: !0
  }),
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const l = j(), d = j(), i = j(), m = j(e.visible), p = j(`vcDialogTitle${_i()}`), r = ($) => {
      var I, N;
      if ($)
        fo(d.value, document.activeElement) || (l.value = document.activeElement, (I = i.value) === null || I === void 0 || I.focus());
      else {
        const T = m.value;
        if (m.value = !1, e.mask && l.value && e.focusTriggerAfterClose) {
          try {
            l.value.focus({
              preventScroll: !0
            });
          } catch {
          }
          l.value = null;
        }
        T && ((N = e.afterClose) === null || N === void 0 || N.call(e));
      }
    }, u = ($) => {
      var I;
      (I = e.onClose) === null || I === void 0 || I.call(e, $);
    }, f = j(!1), c = j(), v = () => {
      clearTimeout(c.value), f.value = !0;
    }, s = () => {
      c.value = setTimeout(() => {
        f.value = !1;
      });
    }, C = ($) => {
      if (!e.maskClosable)
        return null;
      f.value ? f.value = !1 : d.value === $.target && u($);
    }, w = ($) => {
      if (e.keyboard && $.keyCode === me.ESC) {
        $.stopPropagation(), u($);
        return;
      }
      e.visible && $.keyCode === me.TAB && i.value.changeActive(!$.shiftKey);
    };
    return te(() => e.visible, () => {
      e.visible && (m.value = !0);
    }, {
      flush: "post"
    }), je(() => {
      var $;
      clearTimeout(c.value), ($ = e.scrollLocker) === null || $ === void 0 || $.unLock();
    }), Me(() => {
      var $, I;
      ($ = e.scrollLocker) === null || $ === void 0 || $.unLock(), m.value && ((I = e.scrollLocker) === null || I === void 0 || I.lock());
    }), () => {
      const {
        prefixCls: $,
        mask: I,
        visible: N,
        maskTransitionName: T,
        maskAnimation: S,
        zIndex: O,
        wrapClassName: P,
        rootClassName: k,
        wrapStyle: H,
        closable: U,
        maskProps: D,
        maskStyle: y,
        transitionName: V,
        animation: B,
        wrapProps: g,
        title: _ = a.title
      } = e, {
        style: L,
        class: W
      } = n;
      return o("div", R({
        class: [`${$}-root`, k]
      }, Fo(e, {
        data: !0
      })), [o(Ii, {
        prefixCls: $,
        visible: I && N,
        motionName: _n($, T, S),
        style: h({
          zIndex: O
        }, y),
        maskProps: D
      }, null), o("div", R({
        tabIndex: -1,
        onKeydown: w,
        class: Y(`${$}-wrap`, P),
        ref: d,
        onClick: C,
        role: "dialog",
        "aria-labelledby": _ ? p.value : null,
        style: h(h({
          zIndex: O
        }, H), {
          display: m.value ? null : "none"
        })
      }, g), [o(Pi, R(R({}, Lt(e, ["scrollLocker"])), {}, {
        style: L,
        class: W,
        onMousedown: v,
        onMouseup: s,
        ref: i,
        closable: U,
        ariaId: p.value,
        prefixCls: $,
        visible: N,
        onClose: u,
        onVisibleChanged: r,
        motionName: _n($, V, B)
      }), a)])]);
    };
  }
}), Ti = Kt(), Ei = G({
  compatConfig: {
    MODE: 3
  },
  name: "DialogWrap",
  inheritAttrs: !1,
  props: Ge(Ti, {
    visible: !1
  }),
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const l = K(e.visible);
    return vo({}, {
      inTriggerContext: !1
    }), te(() => e.visible, () => {
      e.visible && (l.value = !0);
    }, {
      flush: "post"
    }), () => {
      const {
        visible: d,
        getContainer: i,
        forceRender: m,
        destroyOnClose: p = !1,
        afterClose: r
      } = e;
      let u = h(h(h({}, e), n), {
        ref: "_component",
        key: "dialog"
      });
      return i === !1 ? o(Tn, R(R({}, u), {}, {
        getOpenCount: () => 2
      }), a) : !m && p && !l.value ? null : o(mo, {
        autoLock: !0,
        visible: d,
        forceRender: m,
        getContainer: i
      }, {
        default: (f) => (u = h(h(h({}, u), f), {
          afterClose: () => {
            r == null || r(), l.value = !1;
          }
        }), o(Tn, u, a))
      });
    };
  }
});
function En(e) {
  return {
    position: e,
    top: 0,
    insetInlineEnd: 0,
    bottom: 0,
    insetInlineStart: 0
  };
}
const Oi = (e) => {
  const {
    componentCls: t
  } = e;
  return [{
    [`${t}-root`]: {
      [`${t}${e.antCls}-zoom-enter, ${t}${e.antCls}-zoom-appear`]: {
        // reset scale avoid mousePosition bug
        transform: "none",
        opacity: 0,
        animationDuration: e.motionDurationSlow,
        // https://github.com/ant-design/ant-design/issues/11777
        userSelect: "none"
      },
      [`${t}${e.antCls}-zoom-leave ${t}-content`]: {
        pointerEvents: "none"
      },
      [`${t}-mask`]: h(h({}, En("fixed")), {
        zIndex: e.zIndexPopupBase,
        height: "100%",
        backgroundColor: e.colorBgMask,
        [`${t}-hidden`]: {
          display: "none"
        }
      }),
      [`${t}-wrap`]: h(h({}, En("fixed")), {
        overflow: "auto",
        outline: 0,
        WebkitOverflowScrolling: "touch"
      })
    }
  }, {
    [`${t}-root`]: Xo(e)
  }];
}, Mi = (e) => {
  const {
    componentCls: t
  } = e;
  return [
    // ======================== Root =========================
    {
      [`${t}-root`]: {
        [`${t}-wrap`]: {
          zIndex: e.zIndexPopupBase,
          position: "fixed",
          inset: 0,
          overflow: "auto",
          outline: 0,
          WebkitOverflowScrolling: "touch"
        },
        [`${t}-wrap-rtl`]: {
          direction: "rtl"
        },
        [`${t}-centered`]: {
          textAlign: "center",
          "&::before": {
            display: "inline-block",
            width: 0,
            height: "100%",
            verticalAlign: "middle",
            content: '""'
          },
          [t]: {
            top: 0,
            display: "inline-block",
            paddingBottom: 0,
            textAlign: "start",
            verticalAlign: "middle"
          }
        },
        [`@media (max-width: ${e.screenSMMax})`]: {
          [t]: {
            maxWidth: "calc(100vw - 16px)",
            margin: `${e.marginXS} auto`
          },
          [`${t}-centered`]: {
            [t]: {
              flex: 1
            }
          }
        }
      }
    },
    // ======================== Modal ========================
    {
      [t]: h(h({}, Je(e)), {
        pointerEvents: "none",
        position: "relative",
        top: 100,
        width: "auto",
        maxWidth: `calc(100vw - ${e.margin * 2}px)`,
        margin: "0 auto",
        paddingBottom: e.paddingLG,
        [`${t}-title`]: {
          margin: 0,
          color: e.modalHeadingColor,
          fontWeight: e.fontWeightStrong,
          fontSize: e.modalHeaderTitleFontSize,
          lineHeight: e.modalHeaderTitleLineHeight,
          wordWrap: "break-word"
        },
        [`${t}-content`]: {
          position: "relative",
          backgroundColor: e.modalContentBg,
          backgroundClip: "padding-box",
          border: 0,
          borderRadius: e.borderRadiusLG,
          boxShadow: e.boxShadowSecondary,
          pointerEvents: "auto",
          padding: `${e.paddingMD}px ${e.paddingContentHorizontalLG}px`
        },
        [`${t}-close`]: h({
          position: "absolute",
          top: (e.modalHeaderCloseSize - e.modalCloseBtnSize) / 2,
          insetInlineEnd: (e.modalHeaderCloseSize - e.modalCloseBtnSize) / 2,
          zIndex: e.zIndexPopupBase + 10,
          padding: 0,
          color: e.modalCloseColor,
          fontWeight: e.fontWeightStrong,
          lineHeight: 1,
          textDecoration: "none",
          background: "transparent",
          borderRadius: e.borderRadiusSM,
          width: e.modalConfirmIconSize,
          height: e.modalConfirmIconSize,
          border: 0,
          outline: 0,
          cursor: "pointer",
          transition: `color ${e.motionDurationMid}, background-color ${e.motionDurationMid}`,
          "&-x": {
            display: "block",
            fontSize: e.fontSizeLG,
            fontStyle: "normal",
            lineHeight: `${e.modalCloseBtnSize}px`,
            textAlign: "center",
            textTransform: "none",
            textRendering: "auto"
          },
          "&:hover": {
            color: e.modalIconHoverColor,
            backgroundColor: e.wireframe ? "transparent" : e.colorFillContent,
            textDecoration: "none"
          },
          "&:active": {
            backgroundColor: e.wireframe ? "transparent" : e.colorFillContentHover
          }
        }, Bt(e)),
        [`${t}-header`]: {
          color: e.colorText,
          background: e.modalHeaderBg,
          borderRadius: `${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`,
          marginBottom: e.marginXS
        },
        [`${t}-body`]: {
          fontSize: e.fontSize,
          lineHeight: e.lineHeight,
          wordWrap: "break-word"
        },
        [`${t}-footer`]: {
          textAlign: "end",
          background: e.modalFooterBg,
          marginTop: e.marginSM,
          [`${e.antCls}-btn + ${e.antCls}-btn:not(${e.antCls}-dropdown-trigger)`]: {
            marginBottom: 0,
            marginInlineStart: e.marginXS
          }
        },
        [`${t}-open`]: {
          overflow: "hidden"
        }
      })
    },
    // ======================== Pure =========================
    {
      [`${t}-pure-panel`]: {
        top: "auto",
        padding: 0,
        display: "flex",
        flexDirection: "column",
        [`${t}-content,
          ${t}-body,
          ${t}-confirm-body-wrapper`]: {
          display: "flex",
          flexDirection: "column",
          flex: "auto"
        },
        [`${t}-confirm-body`]: {
          marginBottom: "auto"
        }
      }
    }
  ];
}, Ni = (e) => {
  const {
    componentCls: t
  } = e, n = `${t}-confirm`;
  return {
    [n]: {
      "&-rtl": {
        direction: "rtl"
      },
      [`${e.antCls}-modal-header`]: {
        display: "none"
      },
      [`${n}-body-wrapper`]: h({}, go()),
      [`${n}-body`]: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        [`${n}-title`]: {
          flex: "0 0 100%",
          display: "block",
          // create BFC to avoid
          // https://user-images.githubusercontent.com/507615/37702510-ba844e06-2d2d-11e8-9b67-8e19be57f445.png
          overflow: "hidden",
          color: e.colorTextHeading,
          fontWeight: e.fontWeightStrong,
          fontSize: e.modalHeaderTitleFontSize,
          lineHeight: e.modalHeaderTitleLineHeight,
          [`+ ${n}-content`]: {
            marginBlockStart: e.marginXS,
            flexBasis: "100%",
            maxWidth: `calc(100% - ${e.modalConfirmIconSize + e.marginSM}px)`
          }
        },
        [`${n}-content`]: {
          color: e.colorText,
          fontSize: e.fontSize
        },
        [`> ${e.iconCls}`]: {
          flex: "none",
          marginInlineEnd: e.marginSM,
          fontSize: e.modalConfirmIconSize,
          [`+ ${n}-title`]: {
            flex: 1
          },
          // `content` after `icon` should set marginLeft
          [`+ ${n}-title + ${n}-content`]: {
            marginInlineStart: e.modalConfirmIconSize + e.marginSM
          }
        }
      },
      [`${n}-btns`]: {
        textAlign: "end",
        marginTop: e.marginSM,
        [`${e.antCls}-btn + ${e.antCls}-btn`]: {
          marginBottom: 0,
          marginInlineStart: e.marginXS
        }
      }
    },
    [`${n}-error ${n}-body > ${e.iconCls}`]: {
      color: e.colorError
    },
    [`${n}-warning ${n}-body > ${e.iconCls},
        ${n}-confirm ${n}-body > ${e.iconCls}`]: {
      color: e.colorWarning
    },
    [`${n}-info ${n}-body > ${e.iconCls}`]: {
      color: e.colorInfo
    },
    [`${n}-success ${n}-body > ${e.iconCls}`]: {
      color: e.colorSuccess
    },
    // https://github.com/ant-design/ant-design/issues/37329
    [`${t}-zoom-leave ${t}-btns`]: {
      pointerEvents: "none"
    }
  };
}, Di = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-root`]: {
      [`${t}-wrap-rtl`]: {
        direction: "rtl",
        [`${t}-confirm-body`]: {
          direction: "rtl"
        }
      }
    }
  };
}, Bi = (e) => {
  const {
    componentCls: t,
    antCls: n
  } = e, a = `${t}-confirm`;
  return {
    [t]: {
      [`${t}-content`]: {
        padding: 0
      },
      [`${t}-header`]: {
        padding: e.modalHeaderPadding,
        borderBottom: `${e.modalHeaderBorderWidth}px ${e.modalHeaderBorderStyle} ${e.modalHeaderBorderColorSplit}`,
        marginBottom: 0
      },
      [`${t}-body`]: {
        padding: e.modalBodyPadding
      },
      [`${t}-footer`]: {
        padding: `${e.modalFooterPaddingVertical}px ${e.modalFooterPaddingHorizontal}px`,
        borderTop: `${e.modalFooterBorderWidth}px ${e.modalFooterBorderStyle} ${e.modalFooterBorderColorSplit}`,
        borderRadius: `0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px`,
        marginTop: 0
      }
    },
    [a]: {
      [`${n}-modal-body`]: {
        padding: `${e.padding * 2}px ${e.padding * 2}px ${e.paddingLG}px`
      },
      [`${a}-body`]: {
        [`> ${e.iconCls}`]: {
          marginInlineEnd: e.margin,
          // `content` after `icon` should set marginLeft
          [`+ ${a}-title + ${a}-content`]: {
            marginInlineStart: e.modalConfirmIconSize + e.margin
          }
        }
      },
      [`${a}-btns`]: {
        marginTop: e.marginLG
      }
    }
  };
}, Ai = yt("Modal", (e) => {
  const t = e.padding, n = e.fontSizeHeading5, a = e.lineHeightHeading5, l = bt(e, {
    modalBodyPadding: e.paddingLG,
    modalHeaderBg: e.colorBgElevated,
    modalHeaderPadding: `${t}px ${e.paddingLG}px`,
    modalHeaderBorderWidth: e.lineWidth,
    modalHeaderBorderStyle: e.lineType,
    modalHeaderTitleLineHeight: a,
    modalHeaderTitleFontSize: n,
    modalHeaderBorderColorSplit: e.colorSplit,
    modalHeaderCloseSize: a * n + t * 2,
    modalContentBg: e.colorBgElevated,
    modalHeadingColor: e.colorTextHeading,
    modalCloseColor: e.colorTextDescription,
    modalFooterBg: "transparent",
    modalFooterBorderColorSplit: e.colorSplit,
    modalFooterBorderStyle: e.lineType,
    modalFooterPaddingVertical: e.paddingXS,
    modalFooterPaddingHorizontal: e.padding,
    modalFooterBorderWidth: e.lineWidth,
    modalConfirmTitleFontSize: e.fontSizeLG,
    modalIconHoverColor: e.colorIconHover,
    modalConfirmIconSize: e.fontSize * e.lineHeight,
    modalCloseBtnSize: e.controlHeightLG * 0.55
  });
  return [Mi(l), Ni(l), Di(l), Oi(l), e.wireframe && Bi(l), po(l, "zoom")];
});
var ki = function(e, t) {
  var n = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var l = 0, a = Object.getOwnPropertySymbols(e); l < a.length; l++)
      t.indexOf(a[l]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[l]) && (n[a[l]] = e[a[l]]);
  return n;
};
let Dt;
const Ri = (e) => {
  Dt = {
    x: e.pageX,
    y: e.pageY
  }, setTimeout(() => Dt = null, 100);
};
yo() && bo(document.documentElement, "click", Ri, !0);
const Li = () => ({
  prefixCls: String,
  /** @deprecated Please use `open` instead. */
  visible: {
    type: Boolean,
    default: void 0
  },
  open: {
    type: Boolean,
    default: void 0
  },
  confirmLoading: {
    type: Boolean,
    default: void 0
  },
  title: J.any,
  closable: {
    type: Boolean,
    default: void 0
  },
  closeIcon: J.any,
  onOk: Function,
  onCancel: Function,
  "onUpdate:visible": Function,
  "onUpdate:open": Function,
  onChange: Function,
  afterClose: Function,
  centered: {
    type: Boolean,
    default: void 0
  },
  width: [String, Number],
  footer: J.any,
  okText: J.any,
  okType: String,
  cancelText: J.any,
  icon: J.any,
  maskClosable: {
    type: Boolean,
    default: void 0
  },
  forceRender: {
    type: Boolean,
    default: void 0
  },
  okButtonProps: be(),
  cancelButtonProps: be(),
  destroyOnClose: {
    type: Boolean,
    default: void 0
  },
  wrapClassName: String,
  maskTransitionName: String,
  transitionName: String,
  getContainer: {
    type: [String, Function, Boolean, Object],
    default: void 0
  },
  zIndex: Number,
  bodyStyle: be(),
  maskStyle: be(),
  mask: {
    type: Boolean,
    default: void 0
  },
  keyboard: {
    type: Boolean,
    default: void 0
  },
  wrapProps: Object,
  focusTriggerAfterClose: {
    type: Boolean,
    default: void 0
  },
  modalRender: Function,
  mousePosition: be()
}), ue = G({
  compatConfig: {
    MODE: 3
  },
  name: "AModal",
  inheritAttrs: !1,
  props: Ge(Li(), {
    width: 520,
    confirmLoading: !1,
    okType: "primary"
  }),
  setup(e, t) {
    let {
      emit: n,
      slots: a,
      attrs: l
    } = t;
    const [d] = Rt("Modal"), {
      prefixCls: i,
      rootPrefixCls: m,
      direction: p,
      getPopupContainer: r
    } = et("modal", e), [u, f] = Ai(i);
    Ct(e.visible === void 0, "Modal", "`visible` will be removed in next major version, please use `open` instead.");
    const c = (C) => {
      n("update:visible", !1), n("update:open", !1), n("cancel", C), n("change", !1);
    }, v = (C) => {
      n("ok", C);
    }, s = () => {
      var C, w;
      const {
        okText: $ = (C = a.okText) === null || C === void 0 ? void 0 : C.call(a),
        okType: I,
        cancelText: N = (w = a.cancelText) === null || w === void 0 ? void 0 : w.call(a),
        confirmLoading: T
      } = e;
      return o(ge, null, [o(mt, R({
        onClick: c
      }, e.cancelButtonProps), {
        default: () => [N || d.value.cancelText]
      }), o(mt, R(R({}, jn(I)), {}, {
        loading: T,
        onClick: v
      }, e.okButtonProps), {
        default: () => [$ || d.value.okText]
      })]);
    };
    return () => {
      var C, w;
      const {
        prefixCls: $,
        visible: I,
        open: N,
        wrapClassName: T,
        centered: S,
        getContainer: O,
        closeIcon: P = (C = a.closeIcon) === null || C === void 0 ? void 0 : C.call(a),
        focusTriggerAfterClose: k = !0
      } = e, H = ki(e, ["prefixCls", "visible", "open", "wrapClassName", "centered", "getContainer", "closeIcon", "focusTriggerAfterClose"]), U = Y(T, {
        [`${i.value}-centered`]: !!S,
        [`${i.value}-wrap-rtl`]: p.value === "rtl"
      });
      return u(o(Ei, R(R(R({}, H), l), {}, {
        rootClassName: f.value,
        class: Y(f.value, l.class),
        getContainer: O || (r == null ? void 0 : r.value),
        prefixCls: i.value,
        wrapClassName: U,
        visible: N ?? I,
        onClose: c,
        focusTriggerAfterClose: k,
        transitionName: vt(m.value, "zoom", e.transitionName),
        maskTransitionName: vt(m.value, "fade", e.maskTransitionName),
        mousePosition: (w = H.mousePosition) !== null && w !== void 0 ? w : Dt
      }), h(h({}, a), {
        footer: a.footer || s,
        closeIcon: () => o("span", {
          class: `${i.value}-close-x`
        }, [P || o(ot, {
          class: `${i.value}-close-icon`
        }, null)])
      })));
    };
  }
}), Hi = () => {
  const e = j(!1);
  return je(() => {
    e.value = !0;
  }), e;
}, zi = {
  type: {
    type: String
  },
  actionFn: Function,
  close: Function,
  autofocus: Boolean,
  prefixCls: String,
  buttonProps: be(),
  emitEvent: Boolean,
  quitOnNullishReturnValue: Boolean
};
function On(e) {
  return !!(e && e.then);
}
const Mn = G({
  compatConfig: {
    MODE: 3
  },
  name: "ActionButton",
  props: zi,
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = j(!1), l = j(), d = j(!1);
    let i;
    const m = Hi();
    ke(() => {
      e.autofocus && (i = setTimeout(() => {
        var f, c;
        return (c = (f = ho(l.value)) === null || f === void 0 ? void 0 : f.focus) === null || c === void 0 ? void 0 : c.call(f);
      }));
    }), je(() => {
      clearTimeout(i);
    });
    const p = function() {
      for (var f, c = arguments.length, v = new Array(c), s = 0; s < c; s++)
        v[s] = arguments[s];
      (f = e.close) === null || f === void 0 || f.call(e, ...v);
    }, r = (f) => {
      On(f) && (d.value = !0, f.then(function() {
        m.value || (d.value = !1), p(...arguments), a.value = !1;
      }, (c) => (m.value || (d.value = !1), a.value = !1, Promise.reject(c))));
    }, u = (f) => {
      const {
        actionFn: c
      } = e;
      if (a.value)
        return;
      if (a.value = !0, !c) {
        p();
        return;
      }
      let v;
      if (e.emitEvent) {
        if (v = c(f), e.quitOnNullishReturnValue && !On(v)) {
          a.value = !1, p(f);
          return;
        }
      } else if (c.length)
        v = c(e.close), a.value = !1;
      else if (v = c(), !v) {
        p();
        return;
      }
      r(v);
    };
    return () => {
      const {
        type: f,
        prefixCls: c,
        buttonProps: v
      } = e;
      return o(mt, R(R(R({}, jn(f)), {}, {
        onClick: u,
        loading: d.value,
        prefixCls: c
      }, v), {}, {
        ref: l
      }), n);
    };
  }
});
function Le(e) {
  return typeof e == "function" ? e() : e;
}
const ha = G({
  name: "ConfirmDialog",
  inheritAttrs: !1,
  props: ["icon", "onCancel", "onOk", "close", "closable", "zIndex", "afterClose", "visible", "open", "keyboard", "centered", "getContainer", "maskStyle", "okButtonProps", "cancelButtonProps", "okType", "prefixCls", "okCancel", "width", "mask", "maskClosable", "okText", "cancelText", "autoFocusButton", "transitionName", "maskTransitionName", "type", "title", "content", "direction", "rootPrefixCls", "bodyStyle", "closeIcon", "modalRender", "focusTriggerAfterClose", "wrapClassName", "confirmPrefixCls", "footer"],
  setup(e, t) {
    let {
      attrs: n
    } = t;
    const [a] = Rt("Modal");
    return process.env.NODE_ENV !== "production" && Ct(e.visible === void 0, "Modal", "`visible` is deprecated, please use `open` instead."), () => {
      const {
        icon: l,
        onCancel: d,
        onOk: i,
        close: m,
        okText: p,
        closable: r = !1,
        zIndex: u,
        afterClose: f,
        keyboard: c,
        centered: v,
        getContainer: s,
        maskStyle: C,
        okButtonProps: w,
        cancelButtonProps: $,
        okCancel: I,
        width: N = 416,
        mask: T = !0,
        maskClosable: S = !1,
        type: O,
        open: P,
        title: k,
        content: H,
        direction: U,
        closeIcon: D,
        modalRender: y,
        focusTriggerAfterClose: V,
        rootPrefixCls: B,
        bodyStyle: g,
        wrapClassName: _,
        footer: L
      } = e;
      let W = l;
      if (!l && l !== null)
        switch (O) {
          case "info":
            W = o(Re, null, null);
            break;
          case "success":
            W = o(nt, null, null);
            break;
          case "error":
            W = o(tt, null, null);
            break;
          default:
            W = o(at, null, null);
        }
      const Q = e.okType || "primary", oe = e.prefixCls || "ant-modal", Z = `${oe}-confirm`, b = n.style || {}, we = I ?? O === "confirm", Pe = e.autoFocusButton === null ? !1 : e.autoFocusButton || "ok", xe = `${oe}-confirm`, Ie = Y(xe, `${xe}-${e.type}`, {
        [`${xe}-rtl`]: U === "rtl"
      }, n.class), Ne = a.value, Ke = we && o(Mn, {
        actionFn: d,
        close: m,
        autofocus: Pe === "cancel",
        buttonProps: $,
        prefixCls: `${B}-btn`
      }, {
        default: () => [Le(e.cancelText) || Ne.cancelText]
      });
      return o(ue, {
        prefixCls: oe,
        class: Ie,
        wrapClassName: Y({
          [`${xe}-centered`]: !!v
        }, _),
        onCancel: (it) => m == null ? void 0 : m({
          triggerCancel: !0
        }, it),
        open: P,
        title: "",
        footer: "",
        transitionName: vt(B, "zoom", e.transitionName),
        maskTransitionName: vt(B, "fade", e.maskTransitionName),
        mask: T,
        maskClosable: S,
        maskStyle: C,
        style: b,
        bodyStyle: g,
        width: N,
        zIndex: u,
        afterClose: f,
        keyboard: c,
        centered: v,
        getContainer: s,
        closable: r,
        closeIcon: D,
        modalRender: y,
        focusTriggerAfterClose: V
      }, {
        default: () => [o("div", {
          class: `${Z}-body-wrapper`
        }, [o("div", {
          class: `${Z}-body`
        }, [Le(W), k === void 0 ? null : o("span", {
          class: `${Z}-title`
        }, [Le(k)]), o("div", {
          class: `${Z}-content`
        }, [Le(H)])]), L !== void 0 ? Le(L) : o("div", {
          class: `${Z}-btns`
        }, [Ke, o(Mn, {
          type: Q,
          actionFn: i,
          close: m,
          autofocus: Pe === "ok",
          buttonProps: w,
          prefixCls: `${B}-btn`
        }, {
          default: () => [Le(p) || (we ? Ne.okText : Ne.justOkText)]
        })])])]
      });
    };
  }
}), Ae = [], lt = (e) => {
  const t = document.createDocumentFragment();
  let n = h(h({}, Lt(e, ["parentContext", "appContext"])), {
    close: d,
    open: !0
  }), a = null;
  function l() {
    a && (ft(null, t), a = null);
    for (var r = arguments.length, u = new Array(r), f = 0; f < r; f++)
      u[f] = arguments[f];
    const c = u.some((v) => v && v.triggerCancel);
    e.onCancel && c && e.onCancel(() => {
    }, ...u.slice(1));
    for (let v = 0; v < Ae.length; v++)
      if (Ae[v] === d) {
        Ae.splice(v, 1);
        break;
      }
  }
  function d() {
    for (var r = arguments.length, u = new Array(r), f = 0; f < r; f++)
      u[f] = arguments[f];
    n = h(h({}, n), {
      open: !1,
      afterClose: () => {
        typeof e.afterClose == "function" && e.afterClose(), l.apply(this, u);
      }
    }), n.visible && delete n.visible, i(n);
  }
  function i(r) {
    typeof r == "function" ? n = r(n) : n = h(h({}, n), r), a && Co(a, n, t);
  }
  const m = (r) => {
    const u = ae, f = u.prefixCls, c = r.prefixCls || `${f}-modal`, v = u.iconPrefixCls, s = El();
    return o(We, R(R({}, u), {}, {
      prefixCls: f
    }), {
      default: () => [o(ha, R(R({}, r), {}, {
        rootPrefixCls: f,
        prefixCls: c,
        iconPrefixCls: v,
        locale: s,
        cancelText: r.cancelText || s.cancelText
      }), null)]
    });
  };
  function p(r) {
    const u = o(m, h({}, r));
    return u.appContext = e.parentContext || e.appContext || u.appContext, ft(u, t), u;
  }
  return a = p(n), Ae.push(d), {
    destroy: d,
    update: i
  };
};
function Ca(e) {
  return h(h({}, e), {
    type: "warning"
  });
}
function $a(e) {
  return h(h({}, e), {
    type: "info"
  });
}
function xa(e) {
  return h(h({}, e), {
    type: "success"
  });
}
function Sa(e) {
  return h(h({}, e), {
    type: "error"
  });
}
function _a(e) {
  return h(h({}, e), {
    type: "confirm"
  });
}
const Wi = () => ({
  config: Object,
  afterClose: Function,
  destroyAction: Function,
  open: Boolean
}), Fi = G({
  name: "HookModal",
  inheritAttrs: !1,
  props: Ge(Wi(), {
    config: {
      width: 520,
      okType: "primary"
    }
  }),
  setup(e, t) {
    let {
      expose: n
    } = t;
    var a;
    const l = A(() => e.open), d = A(() => e.config), {
      direction: i,
      getPrefixCls: m
    } = kt(), p = m("modal"), r = m(), u = () => {
      var s, C;
      e == null || e.afterClose(), (C = (s = d.value).afterClose) === null || C === void 0 || C.call(s);
    }, f = function() {
      e.destroyAction(...arguments);
    };
    n({
      destroy: f
    });
    const c = (a = d.value.okCancel) !== null && a !== void 0 ? a : d.value.type === "confirm", [v] = Rt("Modal", ht.Modal);
    return () => o(ha, R(R({
      prefixCls: p,
      rootPrefixCls: r
    }, d.value), {}, {
      close: f,
      open: l.value,
      afterClose: u,
      okText: d.value.okText || (c ? v == null ? void 0 : v.value.okText : v == null ? void 0 : v.value.justOkText),
      direction: d.value.direction || i.value,
      cancelText: d.value.cancelText || (v == null ? void 0 : v.value.cancelText)
    }), null);
  }
});
let Nn = 0;
const ji = G({
  name: "ElementsHolder",
  inheritAttrs: !1,
  setup(e, t) {
    let {
      expose: n
    } = t;
    const a = j([]);
    return n({
      addModal: (d) => (a.value.push(d), a.value = a.value.slice(), () => {
        a.value = a.value.filter((i) => i !== d);
      })
    }), () => a.value.map((d) => d());
  }
});
function Ui() {
  const e = j(null), t = j([]);
  te(t, () => {
    t.value.length && ([...t.value].forEach((i) => {
      i();
    }), t.value = []);
  }, {
    immediate: !0
  });
  const n = (d) => function(m) {
    var p;
    Nn += 1;
    const r = j(!0), u = j(null), f = j(De(m)), c = j({});
    te(() => m, (N) => {
      w(h(h({}, Aa(N) ? N.value : N), c.value));
    });
    const v = function() {
      r.value = !1;
      for (var N = arguments.length, T = new Array(N), S = 0; S < N; S++)
        T[S] = arguments[S];
      const O = T.some((P) => P && P.triggerCancel);
      f.value.onCancel && O && f.value.onCancel(() => {
      }, ...T.slice(1));
    };
    let s;
    const C = () => o(Fi, {
      key: `modal-${Nn}`,
      config: d(f.value),
      ref: u,
      open: r.value,
      destroyAction: v,
      afterClose: () => {
        s == null || s();
      }
    }, null);
    s = (p = e.value) === null || p === void 0 ? void 0 : p.addModal(C), s && Ae.push(s);
    const w = (N) => {
      f.value = h(h({}, f.value), N);
    };
    return {
      destroy: () => {
        u.value ? v() : t.value = [...t.value, v];
      },
      update: (N) => {
        c.value = N, u.value ? w(N) : t.value = [...t.value, () => w(N)];
      }
    };
  }, a = A(() => ({
    info: n($a),
    success: n(xa),
    error: n(Sa),
    warning: n(Ca),
    confirm: n(_a)
  })), l = Symbol("modalHolderKey");
  return [a.value, () => o(ji, {
    key: l,
    ref: e
  }, null)];
}
function wa(e) {
  return lt(Ca(e));
}
ue.useModal = Ui;
ue.info = function(t) {
  return lt($a(t));
};
ue.success = function(t) {
  return lt(xa(t));
};
ue.error = function(t) {
  return lt(Sa(t));
};
ue.warning = wa;
ue.warn = wa;
ue.confirm = function(t) {
  return lt(_a(t));
};
ue.destroyAll = function() {
  for (; Ae.length; ) {
    const t = Ae.pop();
    t && t();
  }
};
ue.install = function(e) {
  return e.component(ue.name, ue), e;
};
const Gi = Hn(To);
var Ki = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M928 224H768v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H548v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H328v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H96c-17.7 0-32 14.3-32 32v576c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V256c0-17.7-14.3-32-32-32zm-40 568H136V296h120v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h148v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h148v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h120v496zM416 496H232c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm0 136H232c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm308.2-177.4L620.6 598.3l-52.8-73.1c-3-4.2-7.8-6.6-12.9-6.6H500c-6.5 0-10.3 7.4-6.5 12.7l114.1 158.2a15.9 15.9 0 0025.8 0l165-228.7c3.8-5.3 0-12.7-6.5-12.7H737c-5-.1-9.8 2.4-12.8 6.5z" } }] }, name: "schedule", theme: "outlined" };
function Dn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, a = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(l) {
      return Object.getOwnPropertyDescriptor(n, l).enumerable;
    }))), a.forEach(function(l) {
      Vi(e, l, n[l]);
    });
  }
  return e;
}
function Vi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Oe = function(t, n) {
  var a = Dn({}, t, n.attrs);
  return o(Ue, Dn({}, a, {
    icon: Ki
  }), null);
};
Oe.displayName = "ScheduleOutlined";
Oe.inheritAttrs = !1;
const Xi = {
  Seconds: {
    name: "Seconds",
    every: "Every second",
    interval: ["Every", "second(s) starting at second"],
    specific: "Specific second (choose one or many)",
    cycle: ["Every second between second", "and second"]
  },
  Minutes: {
    name: "Minutes",
    every: "Every minute",
    interval: ["Every", "minute(s) starting at minute"],
    specific: "Specific minute (choose one or many)",
    cycle: ["Every minute between minute", "and minute"]
  },
  Hours: {
    name: "Hours",
    every: "Every hour",
    interval: ["Every", "hour(s) starting at hour"],
    specific: "Specific hour (choose one or many)",
    cycle: ["Every hour between hour", "and hour"]
  },
  Day: {
    name: "Day",
    every: "Every day",
    intervalWeek: ["Every", "day(s) starting on"],
    intervalDay: ["Every", "day(s) starting at the", "of the month"],
    specificWeek: "Specific day of week (choose one or many)",
    specificDay: "Specific day of month (choose one or many)",
    lastDay: "On the last day of the month",
    lastWeekday: "On the last weekday of the month",
    lastWeek: ["On the last", " of the month"],
    beforeEndMonth: ["day(s) before the end of the month"],
    nearestWeekday: ["Nearest weekday (Monday to Friday) to the", "of the month"],
    someWeekday: ["On the", "of the month"]
  },
  Week: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  Month: {
    name: "Month",
    every: "Every month",
    interval: ["Every", "month(s) starting in"],
    specific: "Specific month (choose one or many)",
    cycle: ["Every month between", "and"]
  },
  Year: {
    name: "Year",
    every: "Any year",
    interval: ["Every", "year(s) starting in"],
    specific: "Specific year (choose one or many)",
    cycle: ["Every year between", "and"]
  },
  Save: "Save",
  Close: "Close"
}, Yi = {
  Seconds: {
    name: "秒",
    every: "每一秒钟",
    interval: ["每隔", "秒执行 从", "秒开始"],
    specific: "具体秒数(可多选)",
    cycle: ["周期从", "到", "秒"]
  },
  Minutes: {
    name: "分",
    every: "每一分钟",
    interval: ["每隔", "分执行 从", "分开始"],
    specific: "具体分钟数(可多选)",
    cycle: ["周期从", "到", "分"]
  },
  Hours: {
    name: "时",
    every: "每一小时",
    interval: ["每隔", "小时执行 从", "小时开始"],
    specific: "具体小时数(可多选)",
    cycle: ["周期从", "到", "小时"]
  },
  Day: {
    name: "天",
    every: "每一天",
    intervalWeek: ["每隔", "周执行 从", "开始"],
    intervalDay: ["每隔", "天执行 从", "天开始"],
    specificWeek: "具体星期几(可多选)",
    specificDay: "具体天数(可多选)",
    lastDay: "在这个月的最后一天",
    lastWeekday: "在这个月的最后一个工作日",
    lastWeek: ["在这个月的最后一个"],
    beforeEndMonth: ["在本月底前", "天"],
    nearestWeekday: ["最近的工作日（周一至周五）至本月", "日"],
    someWeekday: ["在这个月的第", "个"]
  },
  Week: ["天", "一", "二", "三", "四", "五", "六"].map((e) => "星期" + e),
  Month: {
    name: "月",
    every: "每一月",
    interval: ["每隔", "月执行 从", "月开始"],
    specific: "具体月数(可多选)",
    cycle: ["从", "到", "月之间的每个月"]
  },
  Year: {
    name: "年",
    every: "每一年",
    interval: ["每隔", "年执行 从", "年开始"],
    specific: "具体年份(可多选)",
    cycle: ["从", "到", "年之间的每一年"]
  },
  Save: "保存",
  Close: "关闭"
}, Qi = {
  Seconds: {
    name: "Segundos",
    every: "A cada segundo",
    interval: ["A cada", "segundo(s) começando no segundo"],
    specific: "Segundo específico (escolha um ou muitos)",
    cycle: ["A Cada segundo entre segundos", "e segundo"]
  },
  Minutes: {
    name: "Minutos",
    every: "A cada minuto",
    interval: ["A cada", "minuto(s) começando no minuto"],
    specific: "Minuto específico (escolha um ou muitos)",
    cycle: ["A cada minuto entre minutos", "e minutos"]
  },
  Hours: {
    name: "Horas",
    every: "A cada hora",
    interval: ["A cada", "hora(s) começando na hora"],
    specific: "Hora específica (escolha uma ou muitas)",
    cycle: ["A cada hora entre horas", "e horas"]
  },
  Day: {
    name: "Dia",
    every: "A cada dia",
    intervalWeek: ["A cada", "dia(s) começando em"],
    intervalDay: ["A cada", "dia(s) começando no", "do mês"],
    specificWeek: "Dia específico da semana (escolha um ou vários)",
    specificDay: "Dia específico do mês (escolha um ou vários)",
    lastDay: "No último dia do mês",
    lastWeekday: "No último dia da semana do mês",
    lastWeek: ["No último", " do mês"],
    beforeEndMonth: ["dia(s) antes do final do mês"],
    nearestWeekday: ["Dia da semana mais próximo (segunda a sexta) ao ", "do mês"],
    someWeekday: ["No", "do mês"]
  },
  Week: [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
  ],
  Month: {
    name: "Mês",
    every: "A cada mês",
    interval: ["A cada", "mês(es) começando em"],
    specific: "Mês específico (escolha um ou muitos)",
    cycle: ["Todo mês entre", "e"]
  },
  Year: {
    name: "Ano",
    every: "Qualquer ano",
    interval: ["A cada", "ano(s) começando em"],
    specific: "Ano específico (escolha um ou muitos)",
    cycle: ["Todo ano entre", "e"]
  },
  Save: "Salvar",
  Close: "Fechar"
}, qi = {
  en: Xi,
  cn: Yi,
  pt: Qi
}, Zi = { id: "changeContab" }, Ji = { class: "" }, er = { class: "tabBody" }, tr = { class: "tabBody" }, nr = { class: "tabBody" }, ar = { class: "tabBody" }, or = { class: "tabBody" }, lr = { class: "tabBody" }, ir = { class: "value-warp" }, rr = { class: "value" }, sr = { class: "btn-wrap" }, cr = /* @__PURE__ */ G({
  __name: "CronSelector",
  props: {
    i18n: {},
    expression: {}
  },
  emits: ["change", "close"],
  setup(e, { emit: t }) {
    const n = e, a = K(n.i18n || "cn"), l = K({
      second: "",
      minute: "",
      hour: "",
      day: "",
      month: "",
      week: "",
      year: ""
    }), d = K([
      { type: "second", expression: "" },
      { type: "minute", expression: "" },
      { type: "hour", expression: "" },
      { type: "day", expression: "" },
      { type: "month", expression: "" },
      { type: "week", expression: "" },
      { type: "year", expression: "" }
    ]), i = K({
      cronEvery: "3",
      incrementStart: 3,
      incrementIncrement: 5,
      rangeStart: 1,
      rangeEnd: 0,
      specificSpecific: [0]
    }), m = K({
      cronEvery: "3",
      incrementStart: 3,
      incrementIncrement: 5,
      rangeStart: 1,
      rangeEnd: 0,
      specificSpecific: [0]
    }), p = K({
      cronEvery: "1",
      incrementStart: 3,
      incrementIncrement: 5,
      rangeStart: "1",
      rangeEnd: 0,
      specificSpecific: []
    }), r = K({
      cronEvery: "1",
      incrementStart: 0,
      incrementIncrement: 0,
      rangeStart: 0,
      rangeEnd: 0,
      specificSpecific: [],
      cronLastSpecificDomDay: 0,
      cronDaysBeforeEomMinus: 0,
      cronDaysNearestweekday: 0
    }), u = K({
      cronEvery: "1",
      incrementStart: 1,
      incrementIncrement: 1,
      specificSpecific: [],
      cronNthDayDay: 1,
      cronNthDayNth: 1,
      cronLastSpecificDomweek: 1
    }), f = K({
      cronEvery: "1",
      incrementStart: 3,
      incrementIncrement: 5,
      rangeStart: 1,
      rangeEnd: 12,
      specificSpecific: []
    }), c = K({
      cronEvery: "1",
      incrementStart: 2018,
      incrementIncrement: 1,
      rangeStart: 2018,
      rangeEnd: 2018,
      specificSpecific: []
    }), v = {
      second: i,
      minute: m,
      hour: p,
      day: r,
      month: f,
      week: u,
      year: c
    }, s = K(qi[n.i18n || "cn"]), C = () => {
      if (!n.expression || !n.expression.length)
        return;
      let D = n.expression.split(" ");
      if (D.length < 7)
        throw new Error("表达式格式不正确");
      for (let y = 0; y < D.length; y++)
        d.value[y].expression = D[y];
      d.value.forEach((y) => {
        switch (l.value[y.type] = y.expression, y.type) {
          case "year":
          case "month":
          case "hour":
          case "minute":
          case "second":
            w(v[y.type], y.expression);
            return;
          case "week":
            $(y.expression);
            return;
          case "day":
            I(y.expression);
            return;
        }
      });
    }, w = (D, y) => {
      y == "*" ? N(D) : y.indexOf("-") >= 0 ? S(D, y) : y.indexOf("/") >= 0 ? T(D, y) : O(D, y);
    }, $ = (D) => {
      if (D.indexOf("/") >= 0)
        r.value.cronEvery = "2", T(u, D);
      else if (D.indexOf(",") >= 0)
        r.value.cronEvery = "4", O(u, D);
      else if (/\dL/.test(D))
        r.value.cronEvery = "8", u.value.cronLastSpecificDomweek = Number(
          (D.match(/(\d)L/) || [0, 0])[1]
        );
      else if (D.indexOf("#") >= 0) {
        r.value.cronEvery = "11";
        let y = D.split("#");
        u.value.cronNthDayDay = +y[0], u.value.cronNthDayNth = +y[1];
      }
    }, I = (D) => {
      D == "*" ? N(r) : D.indexOf("/") >= 0 ? T(r, D, "3") : D == "L" ? r.value.cronEvery = "6" : D == "LW" ? r.value.cronEvery = "7" : /L-\d+/.test(D) ? (r.value.cronEvery = "9", r.value.cronDaysBeforeEomMinus = Number(
        (D.match(/L-(\d+)/) || [0, 0])[1]
      )) : /\d+W/.test(D) ? (r.value.cronEvery = "10", r.value.cronDaysNearestweekday = Number(
        (D.match(/(\d+)W/) || [0, 0])[1]
      )) : O(r, D, "5");
    }, N = (D, y = "1") => {
      D.value.cronEvery = y;
    }, T = (D, y, V = "2") => {
      D.value.cronEvery = V;
      let B = y.split("/");
      D.value.incrementStart = Number(B[0]), D.value.incrementIncrement = Number(B[1]);
    }, S = (D, y, V = "4") => {
      D.value.cronEvery = V;
      let B = y.split("-");
      D.value.rangeStart = Number(B[0]), D.value.rangeEnd = Number(B[1]);
    }, O = (D, y, V = "3") => {
      D.value.cronEvery = V, D.value.specificSpecific = y.split(",").map((B) => Number(B));
    };
    te(
      () => n.expression,
      () => {
        C();
      },
      { immediate: !0, deep: !0 }
    );
    const P = t, k = () => {
      P("change", l.value), H();
    }, H = () => {
      P("close");
    }, U = A(() => `${i.value.cronEvery} ${i.value.incrementStart}-${i.value.incrementIncrement} ${i.value.rangeStart}-${i.value.rangeEnd} ${i.value.specificSpecific.join(",")} * * *`);
    return (D, y) => {
      const V = mt, B = $o, g = Gi, _ = Oo, L = Mo, W = No, Q = xo, oe = pt, Z = Qe;
      return fe(), ve("div", Zi, [
        o(V, {
          class: "language",
          type: "text",
          onClick: y[0] || (y[0] = (b) => a.value = a.value === "en" ? "cn" : "en")
        }, {
          default: x(() => [
            M(E(a.value == "cn" ? "中文" : "English"), 1)
          ]),
          _: 1
        }),
        o(Z, { "default-active-key": "second" }, {
          default: x(() => [
            o(oe, { key: "second" }, {
              tab: x(() => [
                ce("span", Ji, [
                  o(De(Oe)),
                  M(" " + E(s.value.Seconds.name), 1)
                ])
              ]),
              default: x(() => [
                o(Q, {
                  name: "second",
                  value: i.value.cronEvery,
                  "onUpdate:value": y[6] || (y[6] = (b) => i.value.cronEvery = b)
                }, {
                  default: x(() => [
                    ce("div", er, [
                      o(g, null, {
                        default: x(() => [
                          o(B, { value: "1" }, {
                            default: x(() => [
                              M(E(s.value.Seconds.every), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      o(g, null, {
                        default: x(() => [
                          o(B, { value: "2" }, {
                            default: x(() => [
                              M(E(s.value.Seconds.interval[0]) + " ", 1),
                              o(_, {
                                value: i.value.incrementIncrement,
                                "onUpdate:value": y[1] || (y[1] = (b) => i.value.incrementIncrement = b),
                                min: 1,
                                max: 60
                              }, null, 8, ["value"]),
                              M(" " + E(s.value.Seconds.interval[1] || "") + " ", 1),
                              o(_, {
                                value: i.value.incrementStart,
                                "onUpdate:value": y[2] || (y[2] = (b) => i.value.incrementStart = b),
                                min: 0,
                                max: 59
                              }, null, 8, ["value"]),
                              M(" " + E(s.value.Seconds.interval[2] || ""), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      o(g, null, {
                        default: x(() => [
                          o(B, {
                            class: "long",
                            value: "3"
                          }, {
                            default: x(() => [
                              M(E(s.value.Seconds.specific) + " ", 1),
                              o(W, {
                                mode: "multiple",
                                value: i.value.specificSpecific,
                                "onUpdate:value": y[3] || (y[3] = (b) => i.value.specificSpecific = b)
                              }, {
                                default: x(() => [
                                  (fe(), ve(ge, null, $e(60, (b) => o(L, {
                                    key: b,
                                    value: b - 1
                                  }, {
                                    default: x(() => [
                                      M(E(b - 1), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"])), 64))
                                ]),
                                _: 1
                              }, 8, ["value"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      o(g, null, {
                        default: x(() => [
                          o(B, { value: "4" }, {
                            default: x(() => [
                              M(E(s.value.Seconds.cycle[0]) + " ", 1),
                              o(_, {
                                value: i.value.rangeStart,
                                "onUpdate:value": y[4] || (y[4] = (b) => i.value.rangeStart = b),
                                min: 1,
                                max: 60
                              }, null, 8, ["value"]),
                              M(" " + E(s.value.Seconds.cycle[1] || "") + " ", 1),
                              o(_, {
                                value: i.value.rangeEnd,
                                "onUpdate:value": y[5] || (y[5] = (b) => i.value.rangeEnd = b),
                                min: 0,
                                max: 59
                              }, null, 8, ["value"]),
                              M(" " + E(s.value.Seconds.cycle[2] || ""), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                }, 8, ["value"])
              ]),
              _: 1
            }),
            o(oe, { key: "minute" }, {
              tab: x(() => [
                ce("span", null, [
                  o(De(Oe)),
                  M(" " + E(s.value.Minutes.name), 1)
                ])
              ]),
              default: x(() => [
                o(Q, {
                  name: "minute",
                  value: m.value.cronEvery,
                  "onUpdate:value": y[12] || (y[12] = (b) => m.value.cronEvery = b)
                }, {
                  default: x(() => [
                    ce("div", tr, [
                      o(g, null, {
                        default: x(() => [
                          o(B, { value: "1" }, {
                            default: x(() => [
                              M(E(s.value.Minutes.every), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      o(g, null, {
                        default: x(() => [
                          o(B, { value: "2" }, {
                            default: x(() => [
                              M(E(s.value.Minutes.interval[0]) + " ", 1),
                              o(_, {
                                value: m.value.incrementIncrement,
                                "onUpdate:value": y[7] || (y[7] = (b) => m.value.incrementIncrement = b),
                                min: 1,
                                max: 60
                              }, null, 8, ["value"]),
                              M(" " + E(s.value.Minutes.interval[1]) + " ", 1),
                              o(_, {
                                value: m.value.incrementStart,
                                "onUpdate:value": y[8] || (y[8] = (b) => m.value.incrementStart = b),
                                min: 0,
                                max: 59
                              }, null, 8, ["value"]),
                              M(" " + E(s.value.Minutes.interval[2] || ""), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      o(g, null, {
                        default: x(() => [
                          o(B, {
                            class: "long",
                            value: "3"
                          }, {
                            default: x(() => [
                              M(E(s.value.Minutes.specific) + " ", 1),
                              o(W, {
                                mode: "multiple",
                                value: m.value.specificSpecific,
                                "onUpdate:value": y[9] || (y[9] = (b) => m.value.specificSpecific = b)
                              }, {
                                default: x(() => [
                                  (fe(), ve(ge, null, $e(60, (b) => o(L, {
                                    key: b,
                                    value: b - 1
                                  }, {
                                    default: x(() => [
                                      M(E(b - 1), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"])), 64))
                                ]),
                                _: 1
                              }, 8, ["value"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      o(g, null, {
                        default: x(() => [
                          o(B, { value: "4" }, {
                            default: x(() => [
                              M(E(s.value.Minutes.cycle[0]) + " ", 1),
                              o(_, {
                                value: m.value.rangeStart,
                                "onUpdate:value": y[10] || (y[10] = (b) => m.value.rangeStart = b),
                                min: 1,
                                max: 60
                              }, null, 8, ["value"]),
                              M(" " + E(s.value.Minutes.cycle[1]) + " ", 1),
                              o(_, {
                                value: m.value.rangeEnd,
                                "onUpdate:value": y[11] || (y[11] = (b) => m.value.rangeEnd = b),
                                min: 0,
                                max: 59
                              }, null, 8, ["value"]),
                              M(" " + E(s.value.Minutes.cycle[2]), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                }, 8, ["value"])
              ]),
              _: 1
            }),
            o(oe, { key: "hour" }, {
              tab: x(() => [
                ce("span", null, [
                  o(De(Oe)),
                  M(" " + E(s.value.Hours.name), 1)
                ])
              ]),
              default: x(() => [
                o(Q, {
                  name: "hour",
                  value: p.value.cronEvery,
                  "onUpdate:value": y[18] || (y[18] = (b) => p.value.cronEvery = b)
                }, {
                  default: x(() => [
                    ce("div", nr, [
                      o(g, null, {
                        default: x(() => [
                          o(B, { value: "1" }, {
                            default: x(() => [
                              M(E(s.value.Hours.every), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      o(g, null, {
                        default: x(() => [
                          o(B, { value: "2" }, {
                            default: x(() => [
                              M(E(s.value.Hours.interval[0]) + " ", 1),
                              o(_, {
                                value: p.value.incrementIncrement,
                                "onUpdate:value": y[13] || (y[13] = (b) => p.value.incrementIncrement = b),
                                min: 0,
                                max: 23
                              }, null, 8, ["value"]),
                              M(" " + E(s.value.Hours.interval[1]) + " ", 1),
                              o(_, {
                                value: p.value.incrementStart,
                                "onUpdate:value": y[14] || (y[14] = (b) => p.value.incrementStart = b),
                                min: 0,
                                max: 23
                              }, null, 8, ["value"]),
                              M(" " + E(s.value.Hours.interval[2]), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      o(g, null, {
                        default: x(() => [
                          o(B, {
                            class: "long",
                            value: "3"
                          }, {
                            default: x(() => [
                              M(E(s.value.Hours.specific) + " ", 1),
                              o(W, {
                                mode: "multiple",
                                value: p.value.specificSpecific,
                                "onUpdate:value": y[15] || (y[15] = (b) => p.value.specificSpecific = b)
                              }, {
                                default: x(() => [
                                  (fe(), ve(ge, null, $e(24, (b) => o(L, {
                                    key: b,
                                    value: b - 1
                                  }, {
                                    default: x(() => [
                                      M(E(b - 1), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"])), 64))
                                ]),
                                _: 1
                              }, 8, ["value"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      o(g, null, {
                        default: x(() => [
                          o(B, { value: "4" }, {
                            default: x(() => [
                              M(E(s.value.Hours.cycle[0]) + " ", 1),
                              o(_, {
                                value: p.value.rangeStart,
                                "onUpdate:value": y[16] || (y[16] = (b) => p.value.rangeStart = b),
                                min: 0,
                                max: 23
                              }, null, 8, ["value"]),
                              M(" " + E(s.value.Hours.cycle[1]) + " ", 1),
                              o(_, {
                                value: p.value.rangeEnd,
                                "onUpdate:value": y[17] || (y[17] = (b) => p.value.rangeEnd = b),
                                min: 0,
                                max: 23
                              }, null, 8, ["value"]),
                              M(" " + E(s.value.Hours.cycle[2]), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                }, 8, ["value"])
              ]),
              _: 1
            }),
            o(oe, { key: "day" }, {
              tab: x(() => [
                ce("span", null, [
                  o(De(Oe)),
                  M(" " + E(s.value.Day.name), 1)
                ])
              ]),
              default: x(() => [
                o(Q, {
                  name: "day",
                  value: r.value.cronEvery,
                  "onUpdate:value": y[30] || (y[30] = (b) => r.value.cronEvery = b)
                }, {
                  default: x(() => [
                    ce("div", ar, [
                      o(g, null, {
                        default: x(() => [
                          o(B, { value: "1" }, {
                            default: x(() => [
                              M(E(s.value.Day.every), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      o(g, null, {
                        default: x(() => [
                          o(B, { value: "2" }, {
                            default: x(() => [
                              M(E(s.value.Day.intervalWeek[0]) + " ", 1),
                              o(_, {
                                value: u.value.incrementIncrement,
                                "onUpdate:value": y[19] || (y[19] = (b) => u.value.incrementIncrement = b),
                                min: 1,
                                max: 7
                              }, null, 8, ["value"]),
                              M(" " + E(s.value.Day.intervalWeek[1]) + " ", 1),
                              o(W, {
                                value: u.value.incrementStart,
                                "onUpdate:value": y[20] || (y[20] = (b) => u.value.incrementStart = b)
                              }, {
                                default: x(() => [
                                  (fe(), ve(ge, null, $e(7, (b) => o(L, {
                                    key: b,
                                    value: b
                                  }, {
                                    default: x(() => [
                                      M(E(s.value.Week[b - 1]), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"])), 64))
                                ]),
                                _: 1
                              }, 8, ["value"]),
                              M(" " + E(s.value.Day.intervalWeek[2]), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      o(g, null, {
                        default: x(() => [
                          o(B, { value: "3" }, {
                            default: x(() => [
                              M(E(s.value.Day.intervalDay[0]) + " ", 1),
                              o(_, {
                                value: r.value.incrementIncrement,
                                "onUpdate:value": y[21] || (y[21] = (b) => r.value.incrementIncrement = b),
                                min: 1,
                                max: 31
                              }, null, 8, ["value"]),
                              M(" " + E(s.value.Day.intervalDay[1]) + " ", 1),
                              o(_, {
                                value: r.value.incrementStart,
                                "onUpdate:value": y[22] || (y[22] = (b) => r.value.incrementStart = b),
                                min: 1,
                                max: 31
                              }, null, 8, ["value"]),
                              M(" " + E(s.value.Day.intervalDay[2]), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      o(g, null, {
                        default: x(() => [
                          o(B, {
                            class: "long",
                            value: "4"
                          }, {
                            default: x(() => [
                              M(E(s.value.Day.specificWeek) + " ", 1),
                              o(W, {
                                mode: "multiple",
                                value: u.value.specificSpecific,
                                "onUpdate:value": y[23] || (y[23] = (b) => u.value.specificSpecific = b)
                              }, {
                                default: x(() => [
                                  (fe(), ve(ge, null, $e(7, (b) => o(L, {
                                    key: b,
                                    value: [
                                      "SUN",
                                      "MON",
                                      "TUE",
                                      "WED",
                                      "THU",
                                      "FRI",
                                      "SAT"
                                    ][b - 1]
                                  }, {
                                    default: x(() => [
                                      M(E(s.value.Week[b - 1]), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"])), 64))
                                ]),
                                _: 1
                              }, 8, ["value"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      o(g, null, {
                        default: x(() => [
                          o(B, {
                            class: "long",
                            value: "5"
                          }, {
                            default: x(() => [
                              M(E(s.value.Day.specificDay) + " ", 1),
                              o(W, {
                                mode: "multiple",
                                value: r.value.specificSpecific,
                                "onUpdate:value": y[24] || (y[24] = (b) => r.value.specificSpecific = b)
                              }, {
                                default: x(() => [
                                  (fe(), ve(ge, null, $e(31, (b) => o(L, {
                                    key: b,
                                    value: b
                                  }, {
                                    default: x(() => [
                                      M(E(b), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"])), 64))
                                ]),
                                _: 1
                              }, 8, ["value"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      o(g, null, {
                        default: x(() => [
                          o(B, { value: "6" }, {
                            default: x(() => [
                              M(E(s.value.Day.lastDay), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      o(g, null, {
                        default: x(() => [
                          o(B, { value: "7" }, {
                            default: x(() => [
                              M(E(s.value.Day.lastWeekday), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      o(g, null, {
                        default: x(() => [
                          o(B, { value: "8" }, {
                            default: x(() => [
                              M(E(s.value.Day.lastWeek[0]) + " ", 1),
                              o(W, {
                                value: u.value.cronLastSpecificDomweek,
                                "onUpdate:value": y[25] || (y[25] = (b) => u.value.cronLastSpecificDomweek = b)
                              }, {
                                default: x(() => [
                                  (fe(), ve(ge, null, $e(7, (b) => o(L, {
                                    key: b,
                                    value: b
                                  }, {
                                    default: x(() => [
                                      M(E(s.value.Week[b - 1]), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"])), 64))
                                ]),
                                _: 1
                              }, 8, ["value"]),
                              M(" " + E(s.value.Day.lastWeek[1] || ""), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      o(g, null, {
                        default: x(() => [
                          o(B, { value: "9" }, {
                            default: x(() => [
                              o(_, {
                                value: r.value.cronDaysBeforeEomMinus,
                                "onUpdate:value": y[26] || (y[26] = (b) => r.value.cronDaysBeforeEomMinus = b),
                                min: 1,
                                max: 31
                              }, null, 8, ["value"]),
                              M(" " + E(s.value.Day.beforeEndMonth[0]), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      o(g, null, {
                        default: x(() => [
                          o(B, { value: "10" }, {
                            default: x(() => [
                              M(E(s.value.Day.nearestWeekday[0]) + " ", 1),
                              o(_, {
                                value: r.value.cronDaysNearestweekday,
                                "onUpdate:value": y[27] || (y[27] = (b) => r.value.cronDaysNearestweekday = b),
                                min: 1,
                                max: 31
                              }, null, 8, ["value"]),
                              M(" " + E(s.value.Day.nearestWeekday[1]), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      o(g, null, {
                        default: x(() => [
                          o(B, { value: "11" }, {
                            default: x(() => [
                              M(E(s.value.Day.someWeekday[0]) + " ", 1),
                              o(_, {
                                value: u.value.cronNthDayNth,
                                "onUpdate:value": y[28] || (y[28] = (b) => u.value.cronNthDayNth = b),
                                min: 1,
                                max: 5
                              }, null, 8, ["value"]),
                              o(W, {
                                value: u.value.cronNthDayDay,
                                "onUpdate:value": y[29] || (y[29] = (b) => u.value.cronNthDayDay = b)
                              }, {
                                default: x(() => [
                                  (fe(), ve(ge, null, $e(7, (b) => o(L, {
                                    key: b,
                                    value: b
                                  }, {
                                    default: x(() => [
                                      M(E(s.value.Week[b - 1]), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"])), 64))
                                ]),
                                _: 1
                              }, 8, ["value"]),
                              M(" " + E(s.value.Day.someWeekday[1]), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                }, 8, ["value"])
              ]),
              _: 1
            }),
            o(oe, { key: "month" }, {
              tab: x(() => [
                o(De(Oe)),
                M(" " + E(s.value.Month.name), 1)
              ]),
              default: x(() => [
                o(Q, {
                  name: "month",
                  value: f.value.cronEvery,
                  "onUpdate:value": y[36] || (y[36] = (b) => f.value.cronEvery = b)
                }, {
                  default: x(() => [
                    ce("div", or, [
                      o(g, null, {
                        default: x(() => [
                          o(B, { value: "1" }, {
                            default: x(() => [
                              M(E(s.value.Month.every), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      o(g, null, {
                        default: x(() => [
                          o(B, { value: "2" }, {
                            default: x(() => [
                              M(E(s.value.Month.interval[0]) + " ", 1),
                              o(_, {
                                value: f.value.incrementIncrement,
                                "onUpdate:value": y[31] || (y[31] = (b) => f.value.incrementIncrement = b),
                                min: 0,
                                max: 12
                              }, null, 8, ["value"]),
                              M(" " + E(s.value.Month.interval[1]) + " ", 1),
                              o(_, {
                                value: f.value.incrementStart,
                                "onUpdate:value": y[32] || (y[32] = (b) => f.value.incrementStart = b),
                                min: 0,
                                max: 12
                              }, null, 8, ["value"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      o(g, null, {
                        default: x(() => [
                          o(B, {
                            class: "long",
                            value: "3"
                          }, {
                            default: x(() => [
                              M(E(s.value.Month.specific) + " ", 1),
                              o(W, {
                                mode: "multiple",
                                value: f.value.specificSpecific,
                                "onUpdate:value": y[33] || (y[33] = (b) => f.value.specificSpecific = b)
                              }, {
                                default: x(() => [
                                  (fe(), ve(ge, null, $e(12, (b) => o(L, {
                                    key: b,
                                    value: b
                                  }, {
                                    default: x(() => [
                                      M(E(b), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"])), 64))
                                ]),
                                _: 1
                              }, 8, ["value"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      o(g, null, {
                        default: x(() => [
                          o(B, { value: "4" }, {
                            default: x(() => [
                              M(E(s.value.Month.cycle[0]) + " ", 1),
                              o(_, {
                                value: f.value.rangeStart,
                                "onUpdate:value": y[34] || (y[34] = (b) => f.value.rangeStart = b),
                                min: 1,
                                max: 12
                              }, null, 8, ["value"]),
                              M(" " + E(s.value.Month.cycle[1]) + " ", 1),
                              o(_, {
                                value: f.value.rangeEnd,
                                "onUpdate:value": y[35] || (y[35] = (b) => f.value.rangeEnd = b),
                                min: 1,
                                max: 12
                              }, null, 8, ["value"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                }, 8, ["value"])
              ]),
              _: 1
            }),
            o(oe, { key: "year" }, {
              tab: x(() => [
                o(De(Oe)),
                M(" " + E(s.value.Year.name), 1)
              ]),
              default: x(() => [
                o(Q, {
                  name: "year",
                  value: c.value.cronEvery,
                  "onUpdate:value": y[42] || (y[42] = (b) => c.value.cronEvery = b)
                }, {
                  default: x(() => [
                    ce("div", lr, [
                      o(g, null, {
                        default: x(() => [
                          o(B, { value: "1" }, {
                            default: x(() => [
                              M(E(s.value.Year.every), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      o(g, null, {
                        default: x(() => [
                          o(B, { value: "2" }, {
                            default: x(() => [
                              M(E(s.value.Year.interval[0]) + " ", 1),
                              o(_, {
                                value: c.value.incrementIncrement,
                                "onUpdate:value": y[37] || (y[37] = (b) => c.value.incrementIncrement = b),
                                min: 1,
                                max: 99
                              }, null, 8, ["value"]),
                              M(" " + E(s.value.Year.interval[1]) + " ", 1),
                              o(_, {
                                value: c.value.incrementStart,
                                "onUpdate:value": y[38] || (y[38] = (b) => c.value.incrementStart = b),
                                min: 2018,
                                max: 2218
                              }, null, 8, ["value"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      o(g, null, {
                        default: x(() => [
                          o(B, {
                            class: "long",
                            value: "3"
                          }, {
                            default: x(() => [
                              M(E(s.value.Year.specific) + " ", 1),
                              o(W, {
                                mode: "multiple",
                                value: c.value.specificSpecific,
                                "onUpdate:value": y[39] || (y[39] = (b) => c.value.specificSpecific = b)
                              }, {
                                default: x(() => [
                                  (fe(), ve(ge, null, $e(200, (b) => o(L, {
                                    key: b,
                                    value: 2017 + b
                                  }, {
                                    default: x(() => [
                                      M(E(2017 + b), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"])), 64))
                                ]),
                                _: 1
                              }, 8, ["value"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      o(g, null, {
                        default: x(() => [
                          o(B, { value: "4" }, {
                            default: x(() => [
                              M(E(s.value.Year.cycle[0]) + " ", 1),
                              o(_, {
                                value: c.value.rangeStart,
                                "onUpdate:value": y[40] || (y[40] = (b) => c.value.rangeStart = b),
                                min: 2018,
                                max: 2218
                              }, null, 8, ["value"]),
                              M(" " + E(s.value.Year.cycle[1]) + " ", 1),
                              o(_, {
                                value: c.value.rangeEnd,
                                "onUpdate:value": y[41] || (y[41] = (b) => c.value.rangeEnd = b),
                                min: 2018,
                                max: 2218
                              }, null, 8, ["value"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                }, 8, ["value"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        ce("div", ir, [
          ce("span", rr, E(U.value), 1)
        ]),
        ce("div", sr, [
          o(V, { onClick: H }, {
            default: x(() => [
              M(E(s.value.Close), 1)
            ]),
            _: 1
          }),
          o(V, {
            type: "primary",
            onClick: k
          }, {
            default: x(() => [
              M(E(s.value.Save), 1)
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), ur = /* @__PURE__ */ Eo(cr, [["__scopeId", "data-v-32c2973d"]]), Or = /* @__PURE__ */ G({
  __name: "CronInput",
  props: {
    value: {}
  },
  emits: ["update:value"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = A({
      get: () => n.value || "",
      set: (r) => {
        a("update:value", r);
      }
    }), d = K(!1), i = () => {
      d.value = !0;
    }, m = (r) => {
      console.log("change", r), l.value = `${r.second} ${r.minute} ${r.hour} ${r.day} ${r.month} ${r.Week}`;
    }, p = () => {
      console.log("close"), d.value = !1;
    };
    return (r, u) => {
      const f = Wo, c = ue;
      return fe(), ve("div", null, [
        o(f, {
          value: l.value,
          "onUpdate:value": u[0] || (u[0] = (v) => l.value = v),
          style: { width: "350px" }
        }, {
          addonAfter: x(() => [
            ce("span", {
              type: "primary",
              onClick: i,
              style: { cursor: "pointer" }
            }, "显示cron")
          ]),
          _: 1
        }, 8, ["value"]),
        o(c, {
          title: "corn 表达式",
          open: d.value,
          "onUpdate:open": u[1] || (u[1] = (v) => d.value = v),
          footer: null,
          width: "800px",
          destroyOnClose: ""
        }, {
          default: x(() => [
            o(ur, {
              i18n: "cn",
              expression: l.value,
              onChange: m,
              onClose: p
            }, null, 8, ["expression"])
          ]),
          _: 1
        }, 8, ["open"])
      ]);
    };
  }
});
export {
  Or as default
};
