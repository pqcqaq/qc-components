import { defineComponent as re, ref as B, watch as be, computed as F, createVNode as a, Fragment as se, shallowRef as ae, onBeforeUnmount as Ye, watchEffect as Oe, onMounted as Le, provide as Dt, inject as Pt, toRefs as It, openBlock as oe, createElementBlock as ie, withCtx as i, createTextVNode as f, toDisplayString as v, createElementVNode as te, unref as _e, renderList as pe } from "vue";
import { aC as nt, aD as mt, aE as Mt, aF as At, aG as Nt, aH as Rt, aI as Bt, aJ as Ot, P as X, ai as Lt, h as de, g as ge, aK as Wt, ah as Ve, y as Pe, _ as L, ak as q, f as ce, aL as De, G as Ie, i as Ht, m as Ut, r as bt, a4 as zt, H as yt, k as gt, e as Gt, s as Re, E as Kt, b as Xt, n as Ft, aa as jt, a as Vt, A as je, c as Yt, C as Qt, j as Zt, aM as qt, I as Jt, a2 as ea } from "./index-DGUz0BTe.js";
import { R as ta, _ as aa } from "./index-CTV0gZB-.js";
import { _ as na } from "./index-Rrm54oDq.js";
import { a as la, S as oa } from "./index-CF9vPRBW.js";
import { K as me } from "./KeyCode-n3eOOGSl.js";
import { u as ia, E as ra, M as ua, a as sa } from "./index-BvDYji6c.js";
import { R as lt } from "./index-BPMFHqJ9.js";
import { u as ca } from "./useRefs-CuWy3iND.js";
import { i as da } from "./DownOutlined-CTjAdqQv.js";
import { u as ot } from "./useMergedState-6HyZ0xMy.js";
import { P as va } from "./PlusOutlined-CCcOsRMD.js";
import { o as fa } from "./omit-COyW2GJT.js";
import { i as it } from "./slide-BoMXXN49.js";
import { I as pa } from "./index-Bj2G-0Bz.js";
import { M as ma } from "./index-BVZgAI_p.js";
function ba(e, t, o, s) {
  if (!nt(e))
    return e;
  t = mt(t, e);
  for (var c = -1, p = t.length, r = p - 1, y = e; y != null && ++c < p; ) {
    var g = Mt(t[c]), d = o;
    if (g === "__proto__" || g === "constructor" || g === "prototype")
      return e;
    if (c != r) {
      var b = y[g];
      d = void 0, d === void 0 && (d = nt(b) ? b : At(t[c + 1]) ? [] : {});
    }
    Nt(y, g, d), y = y[g];
  }
  return e;
}
function ya(e, t, o) {
  for (var s = -1, c = t.length, p = {}; ++s < c; ) {
    var r = t[s], y = Rt(e, r);
    o(y, r) && ba(p, mt(r, e), y);
  }
  return p;
}
function ga(e, t) {
  return ya(e, t, function(o, s) {
    return Bt(e, s);
  });
}
var ht = Ot(function(e, t) {
  return e == null ? {} : ga(e, t);
});
const Ce = {
  adjustX: 1,
  adjustY: 1
}, we = [0, 0], ha = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: Ce,
    offset: [0, -4],
    targetOffset: we
  },
  topCenter: {
    points: ["bc", "tc"],
    overflow: Ce,
    offset: [0, -4],
    targetOffset: we
  },
  topRight: {
    points: ["br", "tr"],
    overflow: Ce,
    offset: [0, -4],
    targetOffset: we
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: Ce,
    offset: [0, 4],
    targetOffset: we
  },
  bottomCenter: {
    points: ["tc", "bc"],
    overflow: Ce,
    offset: [0, 4],
    targetOffset: we
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: Ce,
    offset: [0, 4],
    targetOffset: we
  }
};
var $a = function(e, t) {
  var o = {};
  for (var s in e)
    Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (o[s] = e[s]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var c = 0, s = Object.getOwnPropertySymbols(e); c < s.length; c++)
      t.indexOf(s[c]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[c]) && (o[s[c]] = e[s[c]]);
  return o;
};
const Sa = re({
  compatConfig: {
    MODE: 3
  },
  props: {
    minOverlayWidthMatchTrigger: {
      type: Boolean,
      default: void 0
    },
    arrow: {
      type: Boolean,
      default: !1
    },
    prefixCls: X.string.def("rc-dropdown"),
    transitionName: String,
    overlayClassName: X.string.def(""),
    openClassName: String,
    animation: X.any,
    align: X.object,
    overlayStyle: {
      type: Object,
      default: void 0
    },
    placement: X.string.def("bottomLeft"),
    overlay: X.any,
    trigger: X.oneOfType([X.string, X.arrayOf(X.string)]).def("hover"),
    alignPoint: {
      type: Boolean,
      default: void 0
    },
    showAction: X.array,
    hideAction: X.array,
    getPopupContainer: Function,
    visible: {
      type: Boolean,
      default: void 0
    },
    defaultVisible: {
      type: Boolean,
      default: !1
    },
    mouseEnterDelay: X.number.def(0.15),
    mouseLeaveDelay: X.number.def(0.1)
  },
  emits: ["visibleChange", "overlayClick"],
  setup(e, t) {
    let {
      slots: o,
      emit: s,
      expose: c
    } = t;
    const p = B(!!e.visible);
    be(() => e.visible, (m) => {
      m !== void 0 && (p.value = m);
    });
    const r = B();
    c({
      triggerRef: r
    });
    const y = (m) => {
      e.visible === void 0 && (p.value = !1), s("overlayClick", m);
    }, g = (m) => {
      e.visible === void 0 && (p.value = m), s("visibleChange", m);
    }, d = () => {
      var m;
      const u = (m = o.overlay) === null || m === void 0 ? void 0 : m.call(o), P = {
        prefixCls: `${e.prefixCls}-menu`,
        onClick: y
      };
      return a(se, {
        key: Wt
      }, [e.arrow && a("div", {
        class: `${e.prefixCls}-arrow`
      }, null), Ve(u, P, !1)]);
    }, b = F(() => {
      const {
        minOverlayWidthMatchTrigger: m = !e.alignPoint
      } = e;
      return m;
    }), w = () => {
      var m;
      const u = (m = o.default) === null || m === void 0 ? void 0 : m.call(o);
      return p.value && u ? Ve(u[0], {
        class: e.openClassName || `${e.prefixCls}-open`
      }, !1) : u;
    }, $ = F(() => !e.hideAction && e.trigger.indexOf("contextmenu") !== -1 ? ["click"] : e.hideAction);
    return () => {
      const {
        prefixCls: m,
        arrow: u,
        showAction: P,
        overlayStyle: A,
        trigger: M,
        placement: K,
        align: j,
        getPopupContainer: z,
        transitionName: x,
        animation: k,
        overlayClassName: _
      } = e, I = $a(e, ["prefixCls", "arrow", "showAction", "overlayStyle", "trigger", "placement", "align", "getPopupContainer", "transitionName", "animation", "overlayClassName"]);
      return a(Lt, de(de({}, I), {}, {
        prefixCls: m,
        ref: r,
        popupClassName: ge(_, {
          [`${m}-show-arrow`]: u
        }),
        popupStyle: A,
        builtinPlacements: ha,
        action: M,
        showAction: P,
        hideAction: $.value || [],
        popupPlacement: K,
        popupAlign: j,
        popupTransitionName: x,
        popupAnimation: k,
        popupVisible: p.value,
        stretch: b.value ? "minWidth" : "",
        onPopupVisibleChange: g,
        getPopupContainer: z
      }), {
        popup: d,
        default: w
      });
    };
  }
});
function xa(e) {
  const t = ae(), o = ae(!1);
  function s() {
    for (var c = arguments.length, p = new Array(c), r = 0; r < c; r++)
      p[r] = arguments[r];
    o.value || (Pe.cancel(t.value), t.value = Pe(() => {
      e(...p);
    }));
  }
  return Ye(() => {
    o.value = !0, Pe.cancel(t.value);
  }), s;
}
function _a(e) {
  const t = ae([]), o = ae(typeof e == "function" ? e() : e), s = xa(() => {
    let p = o.value;
    t.value.forEach((r) => {
      p = r(p);
    }), t.value = [], o.value = p;
  });
  function c(p) {
    t.value.push(p), s();
  }
  return [o, c];
}
const Ca = re({
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
      expose: o,
      attrs: s
    } = t;
    const c = B();
    function p(g) {
      var d;
      !((d = e.tab) === null || d === void 0) && d.disabled || e.onClick(g);
    }
    o({
      domRef: c
    });
    function r(g) {
      var d;
      g.preventDefault(), g.stopPropagation(), e.editable.onEdit("remove", {
        key: (d = e.tab) === null || d === void 0 ? void 0 : d.key,
        event: g
      });
    }
    const y = F(() => {
      var g;
      return e.editable && e.closable !== !1 && !(!((g = e.tab) === null || g === void 0) && g.disabled);
    });
    return () => {
      var g;
      const {
        prefixCls: d,
        id: b,
        active: w,
        tab: {
          key: $,
          tab: m,
          disabled: u,
          closeIcon: P
        },
        renderWrapper: A,
        removeAriaLabel: M,
        editable: K,
        onFocus: j
      } = e, z = `${d}-tab`, x = a("div", {
        key: $,
        ref: c,
        class: ge(z, {
          [`${z}-with-remove`]: y.value,
          [`${z}-active`]: w,
          [`${z}-disabled`]: u
        }),
        style: s.style,
        onClick: p
      }, [a("div", {
        role: "tab",
        "aria-selected": w,
        id: b && `${b}-tab-${$}`,
        class: `${z}-btn`,
        "aria-controls": b && `${b}-panel-${$}`,
        "aria-disabled": u,
        tabindex: u ? null : 0,
        onClick: (k) => {
          k.stopPropagation(), p(k);
        },
        onKeydown: (k) => {
          [me.SPACE, me.ENTER].includes(k.which) && (k.preventDefault(), p(k));
        },
        onFocus: j
      }, [typeof m == "function" ? m() : m]), y.value && a("button", {
        type: "button",
        "aria-label": M || "remove",
        tabindex: 0,
        class: `${z}-remove`,
        onClick: (k) => {
          k.stopPropagation(), r(k);
        }
      }, [(P == null ? void 0 : P()) || ((g = K.removeIcon) === null || g === void 0 ? void 0 : g.call(K)) || "×"])]);
      return A ? A(x) : x;
    };
  }
}), rt = {
  width: 0,
  height: 0,
  left: 0,
  top: 0
};
function wa(e, t) {
  const o = B(/* @__PURE__ */ new Map());
  return Oe(() => {
    var s, c;
    const p = /* @__PURE__ */ new Map(), r = e.value, y = t.value.get((s = r[0]) === null || s === void 0 ? void 0 : s.key) || rt, g = y.left + y.width;
    for (let d = 0; d < r.length; d += 1) {
      const {
        key: b
      } = r[d];
      let w = t.value.get(b);
      w || (w = t.value.get((c = r[d - 1]) === null || c === void 0 ? void 0 : c.key) || rt);
      const $ = p.get(b) || L({}, w);
      $.right = g - $.left - $.width, p.set(b, $);
    }
    o.value = new Map(p);
  }), o;
}
const $t = re({
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
      expose: o,
      attrs: s
    } = t;
    const c = B();
    return o({
      domRef: c
    }), () => {
      const {
        prefixCls: p,
        editable: r,
        locale: y
      } = e;
      return !r || r.showAdd === !1 ? null : a("button", {
        ref: c,
        type: "button",
        class: `${p}-nav-add`,
        style: s.style,
        "aria-label": (y == null ? void 0 : y.addAriaLabel) || "Add tab",
        onClick: (g) => {
          r.onEdit("add", {
            event: g
          });
        }
      }, [r.addIcon ? r.addIcon() : "+"]);
    };
  }
}), Ea = {
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
  moreIcon: X.any,
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
  getPopupContainer: ce()
}, Ta = re({
  compatConfig: {
    MODE: 3
  },
  name: "OperationNode",
  inheritAttrs: !1,
  props: Ea,
  emits: ["tabClick"],
  slots: Object,
  setup(e, t) {
    let {
      attrs: o,
      slots: s
    } = t;
    const [c, p] = q(!1), [r, y] = q(null), g = (m) => {
      const u = e.tabs.filter((M) => !M.disabled);
      let P = u.findIndex((M) => M.key === r.value) || 0;
      const A = u.length;
      for (let M = 0; M < A; M += 1) {
        P = (P + m + A) % A;
        const K = u[P];
        if (!K.disabled) {
          y(K.key);
          return;
        }
      }
    }, d = (m) => {
      const {
        which: u
      } = m;
      if (!c.value) {
        [me.DOWN, me.SPACE, me.ENTER].includes(u) && (p(!0), m.preventDefault());
        return;
      }
      switch (u) {
        case me.UP:
          g(-1), m.preventDefault();
          break;
        case me.DOWN:
          g(1), m.preventDefault();
          break;
        case me.ESC:
          p(!1);
          break;
        case me.SPACE:
        case me.ENTER:
          r.value !== null && e.onTabClick(r.value, m);
          break;
      }
    }, b = F(() => `${e.id}-more-popup`), w = F(() => r.value !== null ? `${b.value}-${r.value}` : null), $ = (m, u) => {
      m.preventDefault(), m.stopPropagation(), e.editable.onEdit("remove", {
        key: u,
        event: m
      });
    };
    return Le(() => {
      be(r, () => {
        const m = document.getElementById(w.value);
        m && m.scrollIntoView && m.scrollIntoView(!1);
      }, {
        flush: "post",
        immediate: !0
      });
    }), be(c, () => {
      c.value || y(null);
    }), ia({}), () => {
      var m;
      const {
        prefixCls: u,
        id: P,
        tabs: A,
        locale: M,
        mobile: K,
        moreIcon: j = ((m = s.moreIcon) === null || m === void 0 ? void 0 : m.call(s)) || a(ra, null, null),
        moreTransitionName: z,
        editable: x,
        tabBarGutter: k,
        rtl: _,
        onTabClick: I,
        popupClassName: W
      } = e;
      if (!A.length)
        return null;
      const O = `${u}-dropdown`, h = M == null ? void 0 : M.dropdownAriaLabel, l = {
        [_ ? "marginRight" : "marginLeft"]: k
      };
      A.length || (l.visibility = "hidden", l.order = 1);
      const Q = ge({
        [`${O}-rtl`]: _,
        [`${W}`]: !0
      }), C = K ? null : a(Sa, {
        prefixCls: O,
        trigger: ["hover"],
        visible: c.value,
        transitionName: z,
        onVisibleChange: p,
        overlayClassName: Q,
        mouseEnterDelay: 0.1,
        mouseLeaveDelay: 0.1,
        getPopupContainer: e.getPopupContainer
      }, {
        overlay: () => a(ua, {
          onClick: (S) => {
            let {
              key: D,
              domEvent: R
            } = S;
            I(D, R), p(!1);
          },
          id: b.value,
          tabindex: -1,
          role: "listbox",
          "aria-activedescendant": w.value,
          selectedKeys: [r.value],
          "aria-label": h !== void 0 ? h : "expanded dropdown"
        }, {
          default: () => [A.map((S) => {
            var D, R;
            const U = x && S.closable !== !1 && !S.disabled;
            return a(sa, {
              key: S.key,
              id: `${b.value}-${S.key}`,
              role: "option",
              "aria-controls": P && `${P}-panel-${S.key}`,
              disabled: S.disabled
            }, {
              default: () => [a("span", null, [typeof S.tab == "function" ? S.tab() : S.tab]), U && a("button", {
                type: "button",
                "aria-label": e.removeAriaLabel || "remove",
                tabindex: 0,
                class: `${O}-menu-item-remove`,
                onClick: (V) => {
                  V.stopPropagation(), $(V, S.key);
                }
              }, [((D = S.closeIcon) === null || D === void 0 ? void 0 : D.call(S)) || ((R = x.removeIcon) === null || R === void 0 ? void 0 : R.call(x)) || "×"])]
            });
          })]
        }),
        default: () => a("button", {
          type: "button",
          class: `${u}-nav-more`,
          style: l,
          tabindex: -1,
          "aria-hidden": "true",
          "aria-haspopup": "listbox",
          "aria-controls": b.value,
          id: `${P}-more`,
          "aria-expanded": c.value,
          onKeydown: d
        }, [j])
      });
      return a("div", {
        class: ge(`${u}-nav-operations`, o.class),
        style: o.style
      }, [C, a($t, {
        prefixCls: u,
        locale: M,
        editable: x
      }, null)]);
    };
  }
}), St = Symbol("tabsContextKey"), xt = (e) => {
  Dt(St, e);
}, _t = () => Pt(St, {
  tabs: B([]),
  prefixCls: B()
});
re({
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
      slots: o
    } = t;
    return xt(It(e)), () => {
      var s;
      return (s = o.default) === null || s === void 0 ? void 0 : s.call(o);
    };
  }
});
const ka = 0.1, ut = 0.01, Be = 20, st = Math.pow(0.995, Be);
function Da(e, t) {
  const [o, s] = q(), [c, p] = q(0), [r, y] = q(0), [g, d] = q(), b = B();
  function w(x) {
    const {
      screenX: k,
      screenY: _
    } = x.touches[0];
    s({
      x: k,
      y: _
    }), clearInterval(b.value);
  }
  function $(x) {
    if (!o.value)
      return;
    x.preventDefault();
    const {
      screenX: k,
      screenY: _
    } = x.touches[0], I = k - o.value.x, W = _ - o.value.y;
    t(I, W), s({
      x: k,
      y: _
    });
    const O = Date.now();
    y(O - c.value), p(O), d({
      x: I,
      y: W
    });
  }
  function m() {
    if (!o.value)
      return;
    const x = g.value;
    if (s(null), d(null), x) {
      const k = x.x / r.value, _ = x.y / r.value, I = Math.abs(k), W = Math.abs(_);
      if (Math.max(I, W) < ka)
        return;
      let O = k, h = _;
      b.value = setInterval(() => {
        if (Math.abs(O) < ut && Math.abs(h) < ut) {
          clearInterval(b.value);
          return;
        }
        O *= st, h *= st, t(O * Be, h * Be);
      }, Be);
    }
  }
  const u = B();
  function P(x) {
    const {
      deltaX: k,
      deltaY: _
    } = x;
    let I = 0;
    const W = Math.abs(k), O = Math.abs(_);
    W === O ? I = u.value === "x" ? k : _ : W > O ? (I = k, u.value = "x") : (I = _, u.value = "y"), t(-I, -I) && x.preventDefault();
  }
  const A = B({
    onTouchStart: w,
    onTouchMove: $,
    onTouchEnd: m,
    onWheel: P
  });
  function M(x) {
    A.value.onTouchStart(x);
  }
  function K(x) {
    A.value.onTouchMove(x);
  }
  function j(x) {
    A.value.onTouchEnd(x);
  }
  function z(x) {
    A.value.onWheel(x);
  }
  Le(() => {
    var x, k;
    document.addEventListener("touchmove", K, {
      passive: !1
    }), document.addEventListener("touchend", j, {
      passive: !1
    }), (x = e.value) === null || x === void 0 || x.addEventListener("touchstart", M, {
      passive: !1
    }), (k = e.value) === null || k === void 0 || k.addEventListener("wheel", z, {
      passive: !1
    });
  }), Ye(() => {
    document.removeEventListener("touchmove", K), document.removeEventListener("touchend", j);
  });
}
function ct(e, t) {
  const o = B(e);
  function s(c) {
    const p = typeof c == "function" ? c(o.value) : c;
    p !== o.value && t(p, o.value), o.value = p;
  }
  return [o, s];
}
const dt = {
  width: 0,
  height: 0,
  left: 0,
  top: 0,
  right: 0
}, Pa = () => ({
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
  animated: Ie(),
  editable: Ie(),
  moreIcon: X.any,
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
  locale: Ie(),
  popupClassName: String,
  getPopupContainer: ce(),
  onTabClick: {
    type: Function
  },
  onTabScroll: {
    type: Function
  }
}), Ia = (e, t) => {
  const {
    offsetWidth: o,
    offsetHeight: s,
    offsetTop: c,
    offsetLeft: p
  } = e, {
    width: r,
    height: y,
    x: g,
    y: d
  } = e.getBoundingClientRect();
  return Math.abs(r - o) < 1 ? [r, y, g - t.x, d - t.y] : [o, s, p, c];
}, vt = re({
  compatConfig: {
    MODE: 3
  },
  name: "TabNavList",
  inheritAttrs: !1,
  props: Pa(),
  slots: Object,
  emits: ["tabClick", "tabScroll"],
  setup(e, t) {
    let {
      attrs: o,
      slots: s
    } = t;
    const {
      tabs: c,
      prefixCls: p
    } = _t(), r = ae(), y = ae(), g = ae(), d = ae(), [b, w] = ca(), $ = F(() => e.tabPosition === "top" || e.tabPosition === "bottom"), [m, u] = ct(0, (T, E) => {
      $.value && e.onTabScroll && e.onTabScroll({
        direction: T > E ? "left" : "right"
      });
    }), [P, A] = ct(0, (T, E) => {
      !$.value && e.onTabScroll && e.onTabScroll({
        direction: T > E ? "top" : "bottom"
      });
    }), [M, K] = q(0), [j, z] = q(0), [x, k] = q(null), [_, I] = q(null), [W, O] = q(0), [h, l] = q(0), [Q, C] = _a(/* @__PURE__ */ new Map()), S = wa(c, Q), D = F(() => `${p.value}-nav-operations-hidden`), R = ae(0), U = ae(0);
    Oe(() => {
      $.value ? e.rtl ? (R.value = 0, U.value = Math.max(0, M.value - x.value)) : (R.value = Math.min(0, x.value - M.value), U.value = 0) : (R.value = Math.min(0, _.value - j.value), U.value = 0);
    });
    const V = (T) => T < R.value ? R.value : T > U.value ? U.value : T, ne = ae(), [J, n] = q(), Ee = () => {
      n(Date.now());
    }, Te = () => {
      clearTimeout(ne.value);
    }, Ae = (T, E) => {
      T((N) => V(N + E));
    };
    Da(r, (T, E) => {
      if ($.value) {
        if (x.value >= M.value)
          return !1;
        Ae(u, T);
      } else {
        if (_.value >= j.value)
          return !1;
        Ae(A, E);
      }
      return Te(), Ee(), !0;
    }), be(J, () => {
      Te(), J.value && (ne.value = setTimeout(() => {
        n(0);
      }, 100));
    });
    const xe = function() {
      let T = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.activeKey;
      const E = S.value.get(T) || {
        width: 0,
        height: 0,
        left: 0,
        right: 0,
        top: 0
      };
      if ($.value) {
        let N = m.value;
        e.rtl ? E.right < m.value ? N = E.right : E.right + E.width > m.value + x.value && (N = E.right + E.width - x.value) : E.left < -m.value ? N = -E.left : E.left + E.width > -m.value + x.value && (N = -(E.left + E.width - x.value)), A(0), u(V(N));
      } else {
        let N = P.value;
        E.top < -P.value ? N = -E.top : E.top + E.height > -P.value + _.value && (N = -(E.top + E.height - _.value)), u(0), A(V(N));
      }
    }, He = ae(0), Ue = ae(0);
    Oe(() => {
      let T, E, N, H, Y, G;
      const ve = S.value;
      ["top", "bottom"].includes(e.tabPosition) ? (T = "width", H = x.value, Y = M.value, G = W.value, E = e.rtl ? "right" : "left", N = Math.abs(m.value)) : (T = "height", H = _.value, Y = M.value, G = h.value, E = "top", N = -P.value);
      let ee = H;
      Y + G > H && Y < H && (ee = H - G);
      const ue = c.value;
      if (!ue.length)
        return [He.value, Ue.value] = [0, 0];
      const fe = ue.length;
      let $e = fe;
      for (let le = 0; le < fe; le += 1) {
        const ye = ve.get(ue[le].key) || dt;
        if (ye[E] + ye[T] > N + ee) {
          $e = le - 1;
          break;
        }
      }
      let Z = 0;
      for (let le = fe - 1; le >= 0; le -= 1)
        if ((ve.get(ue[le].key) || dt)[E] < N) {
          Z = le + 1;
          break;
        }
      return [He.value, Ue.value] = [Z, $e];
    });
    const Qe = () => {
      C(() => {
        var T;
        const E = /* @__PURE__ */ new Map(), N = (T = y.value) === null || T === void 0 ? void 0 : T.getBoundingClientRect();
        return c.value.forEach((H) => {
          let {
            key: Y
          } = H;
          const G = w.value.get(Y), ve = (G == null ? void 0 : G.$el) || G;
          if (ve) {
            const [ee, ue, fe, $e] = Ia(ve, N);
            E.set(Y, {
              width: ee,
              height: ue,
              left: fe,
              top: $e
            });
          }
        }), E;
      });
    };
    be(() => c.value.map((T) => T.key).join("%%"), () => {
      Qe();
    }, {
      flush: "post"
    });
    const ze = () => {
      var T, E, N, H, Y;
      const G = ((T = r.value) === null || T === void 0 ? void 0 : T.offsetWidth) || 0, ve = ((E = r.value) === null || E === void 0 ? void 0 : E.offsetHeight) || 0, ee = ((N = d.value) === null || N === void 0 ? void 0 : N.$el) || {}, ue = ee.offsetWidth || 0, fe = ee.offsetHeight || 0;
      k(G), I(ve), O(ue), l(fe);
      const $e = (((H = y.value) === null || H === void 0 ? void 0 : H.offsetWidth) || 0) - ue, Z = (((Y = y.value) === null || Y === void 0 ? void 0 : Y.offsetHeight) || 0) - fe;
      K($e), z(Z), Qe();
    }, Ze = F(() => [...c.value.slice(0, He.value), ...c.value.slice(Ue.value + 1)]), [wt, Et] = q(), he = F(() => S.value.get(e.activeKey)), qe = ae(), Je = () => {
      Pe.cancel(qe.value);
    };
    be([he, $, () => e.rtl], () => {
      const T = {};
      he.value && ($.value ? (e.rtl ? T.right = De(he.value.right) : T.left = De(he.value.left), T.width = De(he.value.width)) : (T.top = De(he.value.top), T.height = De(he.value.height))), Je(), qe.value = Pe(() => {
        Et(T);
      });
    }), be([() => e.activeKey, he, S, $], () => {
      xe();
    }, {
      flush: "post"
    }), be([() => e.rtl, () => e.tabBarGutter, () => e.activeKey, () => c.value], () => {
      ze();
    }, {
      flush: "post"
    });
    const Ge = (T) => {
      let {
        position: E,
        prefixCls: N,
        extra: H
      } = T;
      if (!H)
        return null;
      const Y = H == null ? void 0 : H({
        position: E
      });
      return Y ? a("div", {
        class: `${N}-extra-content`
      }, [Y]) : null;
    };
    return Ye(() => {
      Te(), Je();
    }), () => {
      const {
        id: T,
        animated: E,
        activeKey: N,
        rtl: H,
        editable: Y,
        locale: G,
        tabPosition: ve,
        tabBarGutter: ee,
        onTabClick: ue
      } = e, {
        class: fe,
        style: $e
      } = o, Z = p.value, le = !!Ze.value.length, ye = `${Z}-nav-wrap`;
      let Ke, Xe, et, tt;
      $.value ? H ? (Xe = m.value > 0, Ke = m.value + x.value < M.value) : (Ke = m.value < 0, Xe = -m.value + x.value < M.value) : (et = P.value < 0, tt = -P.value + _.value < j.value);
      const Ne = {};
      ve === "top" || ve === "bottom" ? Ne[H ? "marginRight" : "marginLeft"] = typeof ee == "number" ? `${ee}px` : ee : Ne.marginTop = typeof ee == "number" ? `${ee}px` : ee;
      const at = c.value.map((Fe, Tt) => {
        const {
          key: ke
        } = Fe;
        return a(Ca, {
          id: T,
          prefixCls: Z,
          key: ke,
          tab: Fe,
          style: Tt === 0 ? void 0 : Ne,
          closable: Fe.closable,
          editable: Y,
          active: ke === N,
          removeAriaLabel: G == null ? void 0 : G.removeAriaLabel,
          ref: b(ke),
          onClick: (kt) => {
            ue(ke, kt);
          },
          onFocus: () => {
            xe(ke), Ee(), r.value && (H || (r.value.scrollLeft = 0), r.value.scrollTop = 0);
          }
        }, s);
      });
      return a("div", {
        role: "tablist",
        class: ge(`${Z}-nav`, fe),
        style: $e,
        onKeydown: () => {
          Ee();
        }
      }, [a(Ge, {
        position: "left",
        prefixCls: Z,
        extra: s.leftExtra
      }, null), a(lt, {
        onResize: ze
      }, {
        default: () => [a("div", {
          class: ge(ye, {
            [`${ye}-ping-left`]: Ke,
            [`${ye}-ping-right`]: Xe,
            [`${ye}-ping-top`]: et,
            [`${ye}-ping-bottom`]: tt
          }),
          ref: r
        }, [a(lt, {
          onResize: ze
        }, {
          default: () => [a("div", {
            ref: y,
            class: `${Z}-nav-list`,
            style: {
              transform: `translate(${m.value}px, ${P.value}px)`,
              transition: J.value ? "none" : void 0
            }
          }, [at, a($t, {
            ref: d,
            prefixCls: Z,
            locale: G,
            editable: Y,
            style: L(L({}, at.length === 0 ? void 0 : Ne), {
              visibility: le ? "hidden" : null
            })
          }, null), a("div", {
            class: ge(`${Z}-ink-bar`, {
              [`${Z}-ink-bar-animated`]: E.inkBar
            }),
            style: wt.value
          }, null)])]
        })])]
      }), a(Ta, de(de({}, e), {}, {
        removeAriaLabel: G == null ? void 0 : G.removeAriaLabel,
        ref: g,
        prefixCls: Z,
        tabs: Ze.value,
        class: !le && D.value
      }), ht(s, ["moreIcon"])), a(Ge, {
        position: "right",
        prefixCls: Z,
        extra: s.rightExtra
      }, null), a(Ge, {
        position: "right",
        prefixCls: Z,
        extra: s.tabBarExtraContent
      }, null)]);
    };
  }
}), Ma = re({
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
      prefixCls: o
    } = _t();
    return () => {
      const {
        id: s,
        activeKey: c,
        animated: p,
        tabPosition: r,
        rtl: y,
        destroyInactiveTabPane: g
      } = e, d = p.tabPane, b = o.value, w = t.value.findIndex(($) => $.key === c);
      return a("div", {
        class: `${b}-content-holder`
      }, [a("div", {
        class: [`${b}-content`, `${b}-content-${r}`, {
          [`${b}-content-animated`]: d
        }],
        style: w && d ? {
          [y ? "marginRight" : "marginLeft"]: `-${w}00%`
        } : null
      }, [t.value.map(($) => Ve($.node, {
        key: $.key,
        prefixCls: b,
        tabKey: $.key,
        id: s,
        animated: d,
        active: $.key === c,
        destroyInactiveTabPane: g
      }))])]);
    };
  }
}), Aa = (e) => {
  const {
    componentCls: t,
    motionDurationSlow: o
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
              transition: `opacity ${o}`
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
              transition: `opacity ${o}`
            }
          }
        }
      }
    },
    // Follow code may reuse in other components
    [it(e, "slide-up"), it(e, "slide-down")]
  ];
}, Na = (e) => {
  const {
    componentCls: t,
    tabsCardHorizontalPadding: o,
    tabsCardHeadBackground: s,
    tabsCardGutter: c,
    colorSplit: p
  } = e;
  return {
    [`${t}-card`]: {
      [`> ${t}-nav, > div > ${t}-nav`]: {
        [`${t}-tab`]: {
          margin: 0,
          padding: o,
          background: s,
          border: `${e.lineWidth}px ${e.lineType} ${p}`,
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
              value: `${c}px`
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
            marginTop: `${c}px`
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
}, Ra = (e) => {
  const {
    componentCls: t,
    tabsHoverColor: o,
    dropdownEdgeChildVerticalPadding: s
  } = e;
  return {
    [`${t}-dropdown`]: L(L({}, bt(e)), {
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
        padding: `${s}px 0`,
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
        "&-item": L(L({}, zt), {
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
              color: o
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
}, Ba = (e) => {
  const {
    componentCls: t,
    margin: o,
    colorSplit: s
  } = e;
  return {
    // ========================== Top & Bottom ==========================
    [`${t}-top, ${t}-bottom`]: {
      flexDirection: "column",
      [`> ${t}-nav, > div > ${t}-nav`]: {
        margin: `0 0 ${o}px 0`,
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
          borderBottom: `${e.lineWidth}px ${e.lineType} ${s}`,
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
        marginTop: `${o}px`,
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
}, Oa = (e) => {
  const {
    componentCls: t,
    padding: o
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
            padding: `${o}px 0`,
            fontSize: e.fontSizeLG
          }
        }
      }
    },
    [`${t}-card`]: {
      [`&${t}-small`]: {
        [`> ${t}-nav`]: {
          [`${t}-tab`]: {
            padding: `${e.paddingXXS * 1.5}px ${o}px`
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
            padding: `${e.paddingXS}px ${o}px ${e.paddingXXS * 1.5}px`
          }
        }
      }
    }
  };
}, La = (e) => {
  const {
    componentCls: t,
    tabsActiveColor: o,
    tabsHoverColor: s,
    iconCls: c,
    tabsHorizontalGutter: p
  } = e, r = `${t}-tab`;
  return {
    [r]: {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      padding: `${e.paddingSM}px 0`,
      fontSize: `${e.fontSize}px`,
      background: "transparent",
      border: 0,
      outline: "none",
      cursor: "pointer",
      "&-btn, &-remove": L({
        "&:focus:not(:focus-visible), &:active": {
          color: o
        }
      }, yt(e)),
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
        color: s
      },
      [`&${r}-active ${r}-btn`]: {
        color: e.colorPrimary,
        textShadow: e.tabsActiveTextShadow
      },
      [`&${r}-disabled`]: {
        color: e.colorTextDisabled,
        cursor: "not-allowed"
      },
      [`&${r}-disabled ${r}-btn, &${r}-disabled ${t}-remove`]: {
        "&:focus, &:active": {
          color: e.colorTextDisabled
        }
      },
      [`& ${r}-remove ${c}`]: {
        margin: 0
      },
      [c]: {
        marginRight: {
          _skip_check_: !0,
          value: e.marginSM
        }
      }
    },
    [`${r} + ${r}`]: {
      margin: {
        _skip_check_: !0,
        value: `0 0 0 ${p}px`
      }
    }
  };
}, Wa = (e) => {
  const {
    componentCls: t,
    tabsHorizontalGutter: o,
    iconCls: s,
    tabsCardGutter: c
  } = e;
  return {
    [`${t}-rtl`]: {
      direction: "rtl",
      [`${t}-nav`]: {
        [`${t}-tab`]: {
          margin: {
            _skip_check_: !0,
            value: `0 0 0 ${o}px`
          },
          [`${t}-tab:last-of-type`]: {
            marginLeft: {
              _skip_check_: !0,
              value: 0
            }
          },
          [s]: {
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
            [s]: {
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
              value: `${c}px`
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
}, Ha = (e) => {
  const {
    componentCls: t,
    tabsCardHorizontalPadding: o,
    tabsCardHeight: s,
    tabsCardGutter: c,
    tabsHoverColor: p,
    tabsActiveColor: r,
    colorSplit: y
  } = e;
  return {
    [t]: L(L(L(L({}, bt(e)), {
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
          padding: o,
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
        [`${t}-nav-add`]: L({
          minWidth: `${s}px`,
          marginLeft: {
            _skip_check_: !0,
            value: `${c}px`
          },
          padding: `0 ${e.paddingXS}px`,
          background: "transparent",
          border: `${e.lineWidth}px ${e.lineType} ${y}`,
          borderRadius: `${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`,
          outline: "none",
          cursor: "pointer",
          color: e.colorText,
          transition: `all ${e.motionDurationSlow} ${e.motionEaseInOut}`,
          "&:hover": {
            color: p
          },
          "&:active, &:focus:not(:focus-visible)": {
            color: r
          }
        }, yt(e))
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
    }), La(e)), {
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
}, Ua = Ht("Tabs", (e) => {
  const t = e.controlHeightLG, o = Ut(e, {
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
  return [Oa(o), Wa(o), Ba(o), Ra(o), Na(o), Ha(o), Aa(o)];
}, (e) => ({
  zIndexPopup: e.zIndexPopupBase + 50
}));
let ft = 0;
const Ct = () => ({
  prefixCls: {
    type: String
  },
  id: {
    type: String
  },
  popupClassName: String,
  getPopupContainer: ce(),
  activeKey: {
    type: [String, Number]
  },
  defaultActiveKey: {
    type: [String, Number]
  },
  direction: Re(),
  animated: Kt([Boolean, Object]),
  renderTabBar: ce(),
  tabBarGutter: {
    type: Number
  },
  tabBarStyle: Ie(),
  tabPosition: Re(),
  destroyInactiveTabPane: Xt(),
  hideAdd: Boolean,
  type: Re(),
  size: Re(),
  centered: Boolean,
  onEdit: ce(),
  onChange: ce(),
  onTabClick: ce(),
  onTabScroll: ce(),
  "onUpdate:activeKey": ce(),
  // Accessibility
  locale: Ie(),
  onPrevClick: ce(),
  onNextClick: ce(),
  tabBarExtraContent: X.any
});
function za(e) {
  return e.map((t) => {
    if (Ft(t)) {
      const o = L({}, t.props || {});
      for (const [$, m] of Object.entries(o))
        delete o[$], o[jt($)] = m;
      const s = t.children || {}, c = t.key !== void 0 ? t.key : void 0, {
        tab: p = s.tab,
        disabled: r,
        forceRender: y,
        closable: g,
        animated: d,
        active: b,
        destroyInactiveTabPane: w
      } = o;
      return L(L({
        key: c
      }, o), {
        node: t,
        closeIcon: s.closeIcon,
        tab: p,
        disabled: r === "" || r,
        forceRender: y === "" || y,
        closable: g === "" || g,
        animated: d === "" || d,
        active: b === "" || b,
        destroyInactiveTabPane: w === "" || w
      });
    }
    return null;
  }).filter((t) => t);
}
const Ga = re({
  compatConfig: {
    MODE: 3
  },
  name: "InternalTabs",
  inheritAttrs: !1,
  props: L(L({}, gt(Ct(), {
    tabPosition: "top",
    animated: {
      inkBar: !0,
      tabPane: !1
    }
  })), {
    tabs: Vt()
  }),
  slots: Object,
  // emits: ['tabClick', 'tabScroll', 'change', 'update:activeKey'],
  setup(e, t) {
    let {
      attrs: o,
      slots: s
    } = t;
    je(e.onPrevClick === void 0 && e.onNextClick === void 0, "Tabs", "`onPrevClick / @prevClick` and `onNextClick / @nextClick` has been removed. Please use `onTabScroll / @tabScroll` instead."), je(e.tabBarExtraContent === void 0, "Tabs", "`tabBarExtraContent` prop has been removed. Please use `rightExtra` slot instead."), je(s.tabBarExtraContent === void 0, "Tabs", "`tabBarExtraContent` slot is deprecated. Please use `rightExtra` slot instead.");
    const {
      prefixCls: c,
      direction: p,
      size: r,
      rootPrefixCls: y,
      getPopupContainer: g
    } = Yt("tabs", e), [d, b] = Ua(c), w = F(() => p.value === "rtl"), $ = F(() => {
      const {
        animated: _,
        tabPosition: I
      } = e;
      return _ === !1 || ["left", "right"].includes(I) ? {
        inkBar: !1,
        tabPane: !1
      } : _ === !0 ? {
        inkBar: !0,
        tabPane: !0
      } : L({
        inkBar: !0,
        tabPane: !1
      }, typeof _ == "object" ? _ : {});
    }), [m, u] = q(!1);
    Le(() => {
      u(da());
    });
    const [P, A] = ot(() => {
      var _;
      return (_ = e.tabs[0]) === null || _ === void 0 ? void 0 : _.key;
    }, {
      value: F(() => e.activeKey),
      defaultValue: e.defaultActiveKey
    }), [M, K] = q(() => e.tabs.findIndex((_) => _.key === P.value));
    Oe(() => {
      var _;
      let I = e.tabs.findIndex((W) => W.key === P.value);
      I === -1 && (I = Math.max(0, Math.min(M.value, e.tabs.length - 1)), A((_ = e.tabs[I]) === null || _ === void 0 ? void 0 : _.key)), K(I);
    });
    const [j, z] = ot(null, {
      value: F(() => e.id)
    }), x = F(() => m.value && !["left", "right"].includes(e.tabPosition) ? "top" : e.tabPosition);
    Le(() => {
      e.id || (z(`rc-tabs-${process.env.NODE_ENV === "test" ? "test" : ft}`), ft += 1);
    });
    const k = (_, I) => {
      var W, O;
      (W = e.onTabClick) === null || W === void 0 || W.call(e, _, I);
      const h = _ !== P.value;
      A(_), h && ((O = e.onChange) === null || O === void 0 || O.call(e, _));
    };
    return xt({
      tabs: F(() => e.tabs),
      prefixCls: c
    }), () => {
      const {
        id: _,
        type: I,
        tabBarGutter: W,
        tabBarStyle: O,
        locale: h,
        destroyInactiveTabPane: l,
        renderTabBar: Q = s.renderTabBar,
        onTabScroll: C,
        hideAdd: S,
        centered: D
      } = e, R = {
        id: j.value,
        activeKey: P.value,
        animated: $.value,
        tabPosition: x.value,
        rtl: w.value,
        mobile: m.value
      };
      let U;
      I === "editable-card" && (U = {
        onEdit: (n, Ee) => {
          let {
            key: Te,
            event: Ae
          } = Ee;
          var xe;
          (xe = e.onEdit) === null || xe === void 0 || xe.call(e, n === "add" ? Ae : Te, n);
        },
        removeIcon: () => a(Qt, null, null),
        addIcon: s.addIcon ? s.addIcon : () => a(va, null, null),
        showAdd: S !== !0
      });
      let V;
      const ne = L(L({}, R), {
        moreTransitionName: `${y.value}-slide-up`,
        editable: U,
        locale: h,
        tabBarGutter: W,
        onTabClick: k,
        onTabScroll: C,
        style: O,
        getPopupContainer: g.value,
        popupClassName: ge(e.popupClassName, b.value)
      });
      Q ? V = Q(L(L({}, ne), {
        DefaultTabBar: vt
      })) : V = a(vt, ne, ht(s, ["moreIcon", "leftExtra", "rightExtra", "tabBarExtraContent"]));
      const J = c.value;
      return d(a("div", de(de({}, o), {}, {
        id: _,
        class: ge(J, `${J}-${x.value}`, {
          [b.value]: !0,
          [`${J}-${r.value}`]: r.value,
          [`${J}-card`]: ["card", "editable-card"].includes(I),
          [`${J}-editable-card`]: I === "editable-card",
          [`${J}-centered`]: D,
          [`${J}-mobile`]: m.value,
          [`${J}-editable`]: I === "editable-card",
          [`${J}-rtl`]: w.value
        }, o.class)
      }), [V, a(Ma, de(de({
        destroyInactiveTabPane: l
      }, R), {}, {
        animated: $.value
      }), null)]));
    };
  }
}), Me = re({
  compatConfig: {
    MODE: 3
  },
  name: "ATabs",
  inheritAttrs: !1,
  props: gt(Ct(), {
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
      attrs: o,
      slots: s,
      emit: c
    } = t;
    const p = (r) => {
      c("update:activeKey", r), c("change", r);
    };
    return () => {
      var r;
      const y = za(Gt((r = s.default) === null || r === void 0 ? void 0 : r.call(s)));
      return a(Ga, de(de(de({}, fa(e, ["onUpdate:activeKey"])), o), {}, {
        onChange: p,
        tabs: y
      }), s);
    };
  }
}), Ka = () => ({
  tab: X.any,
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
}), We = re({
  compatConfig: {
    MODE: 3
  },
  name: "ATabPane",
  inheritAttrs: !1,
  __ANT_TAB_PANE: !0,
  props: Ka(),
  slots: Object,
  setup(e, t) {
    let {
      attrs: o,
      slots: s
    } = t;
    const c = B(e.forceRender);
    be([() => e.active, () => e.destroyInactiveTabPane], () => {
      e.active ? c.value = !0 : e.destroyInactiveTabPane && (c.value = !1);
    }, {
      immediate: !0
    });
    const p = F(() => e.active ? {} : e.animated ? {
      visibility: "hidden",
      height: 0,
      overflowY: "hidden"
    } : {
      display: "none"
    });
    return () => {
      var r;
      const {
        prefixCls: y,
        forceRender: g,
        id: d,
        active: b,
        tabKey: w
      } = e;
      return a("div", {
        id: d && `${d}-panel-${w}`,
        role: "tabpanel",
        tabindex: b ? 0 : -1,
        "aria-labelledby": d && `${d}-tab-${w}`,
        "aria-hidden": !b,
        style: [p.value, o.style],
        class: [`${y}-tabpane`, b && `${y}-tabpane-active`, o.class]
      }, [(b || c.value || g) && ((r = s.default) === null || r === void 0 ? void 0 : r.call(s))]);
    };
  }
});
Me.TabPane = We;
Me.install = function(e) {
  return e.component(Me.name, Me), e.component(We.name, We), e;
};
const Xa = Zt(qt);
var Fa = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M928 224H768v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H548v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H328v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H96c-17.7 0-32 14.3-32 32v576c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V256c0-17.7-14.3-32-32-32zm-40 568H136V296h120v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h148v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h148v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h120v496zM416 496H232c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm0 136H232c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm308.2-177.4L620.6 598.3l-52.8-73.1c-3-4.2-7.8-6.6-12.9-6.6H500c-6.5 0-10.3 7.4-6.5 12.7l114.1 158.2a15.9 15.9 0 0025.8 0l165-228.7c3.8-5.3 0-12.7-6.5-12.7H737c-5-.1-9.8 2.4-12.8 6.5z" } }] }, name: "schedule", theme: "outlined" };
function pt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var o = arguments[t] != null ? Object(arguments[t]) : {}, s = Object.keys(o);
    typeof Object.getOwnPropertySymbols == "function" && (s = s.concat(Object.getOwnPropertySymbols(o).filter(function(c) {
      return Object.getOwnPropertyDescriptor(o, c).enumerable;
    }))), s.forEach(function(c) {
      ja(e, c, o[c]);
    });
  }
  return e;
}
function ja(e, t, o) {
  return t in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = o, e;
}
var Se = function(t, o) {
  var s = pt({}, t, o.attrs);
  return a(Jt, pt({}, s, {
    icon: Fa
  }), null);
};
Se.displayName = "ScheduleOutlined";
Se.inheritAttrs = !1;
const Va = {
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
}, Ya = {
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
}, Qa = {
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
}, Za = {
  en: Va,
  cn: Ya,
  pt: Qa
}, qa = { id: "changeContab" }, Ja = { class: "" }, en = { class: "tabBody" }, tn = { class: "tabBody" }, an = { class: "tabBody" }, nn = { class: "tabBody" }, ln = { class: "tabBody" }, on = { class: "tabBody" }, rn = { class: "value-warp" }, un = { class: "value" }, sn = { class: "btn-wrap" }, cn = /* @__PURE__ */ re({
  __name: "CronSelector",
  props: {
    i18n: {},
    expression: {}
  },
  emits: ["change", "close"],
  setup(e, { emit: t }) {
    const o = e, s = B(o.i18n || "cn"), c = B({
      second: "",
      minute: "",
      hour: "",
      day: "",
      month: "",
      week: "",
      year: ""
    }), p = B([
      { type: "second", expression: "" },
      { type: "minute", expression: "" },
      { type: "hour", expression: "" },
      { type: "day", expression: "" },
      { type: "month", expression: "" },
      { type: "week", expression: "" },
      { type: "year", expression: "" }
    ]), r = B({
      cronEvery: "3",
      incrementStart: 3,
      incrementIncrement: 5,
      rangeStart: 1,
      rangeEnd: 0,
      specificSpecific: [0]
    }), y = B({
      cronEvery: "3",
      incrementStart: 3,
      incrementIncrement: 5,
      rangeStart: 1,
      rangeEnd: 0,
      specificSpecific: [0]
    }), g = B({
      cronEvery: "1",
      incrementStart: 3,
      incrementIncrement: 5,
      rangeStart: "1",
      rangeEnd: 0,
      specificSpecific: []
    }), d = B({
      cronEvery: "1",
      incrementStart: 0,
      incrementIncrement: 0,
      rangeStart: 0,
      rangeEnd: 0,
      specificSpecific: [],
      cronLastSpecificDomDay: 0,
      cronDaysBeforeEomMinus: 0,
      cronDaysNearestweekday: 0
    }), b = B({
      cronEvery: "1",
      incrementStart: 1,
      incrementIncrement: 1,
      specificSpecific: [],
      cronNthDayDay: 1,
      cronNthDayNth: 1,
      cronLastSpecificDomweek: 1
    }), w = B({
      cronEvery: "1",
      incrementStart: 3,
      incrementIncrement: 5,
      rangeStart: 1,
      rangeEnd: 12,
      specificSpecific: []
    }), $ = B({
      cronEvery: "1",
      incrementStart: 2018,
      incrementIncrement: 1,
      rangeStart: 2018,
      rangeEnd: 2018,
      specificSpecific: []
    }), m = {
      second: r,
      minute: y,
      hour: g,
      day: d,
      month: w,
      week: b,
      year: $
    }, u = B(Za[o.i18n || "cn"]), P = () => {
      if (!o.expression || !o.expression.length)
        return;
      let h = o.expression.split(" ");
      if (h.length < 7)
        throw new Error("表达式格式不正确");
      for (let l = 0; l < h.length; l++)
        p.value[l].expression = h[l];
      p.value.forEach((l) => {
        switch (c.value[l.type] = l.expression, l.type) {
          case "year":
          case "month":
          case "hour":
          case "minute":
          case "second":
            A(m[l.type], l.expression);
            return;
          case "week":
            M(l.expression);
            return;
          case "day":
            K(l.expression);
            return;
        }
      });
    }, A = (h, l) => {
      l == "*" ? j(h) : l.indexOf("-") >= 0 ? x(h, l) : l.indexOf("/") >= 0 ? z(h, l) : k(h, l);
    }, M = (h) => {
      if (h.indexOf("/") >= 0)
        d.value.cronEvery = "2", z(b, h);
      else if (h.indexOf(",") >= 0)
        d.value.cronEvery = "4", k(b, h);
      else if (/\dL/.test(h))
        d.value.cronEvery = "8", b.value.cronLastSpecificDomweek = Number(
          (h.match(/(\d)L/) || [0, 0])[1]
        );
      else if (h.indexOf("#") >= 0) {
        d.value.cronEvery = "11";
        let l = h.split("#");
        b.value.cronNthDayDay = +l[0], b.value.cronNthDayNth = +l[1];
      }
    }, K = (h) => {
      h == "*" ? j(d) : h.indexOf("/") >= 0 ? z(d, h, "3") : h == "L" ? d.value.cronEvery = "6" : h == "LW" ? d.value.cronEvery = "7" : /L-\d+/.test(h) ? (d.value.cronEvery = "9", d.value.cronDaysBeforeEomMinus = Number(
        (h.match(/L-(\d+)/) || [0, 0])[1]
      )) : /\d+W/.test(h) ? (d.value.cronEvery = "10", d.value.cronDaysNearestweekday = Number(
        (h.match(/(\d+)W/) || [0, 0])[1]
      )) : k(d, h, "5");
    }, j = (h, l = "1") => {
      h.value.cronEvery = l;
    }, z = (h, l, Q = "2") => {
      h.value.cronEvery = Q;
      let C = l.split("/");
      h.value.incrementStart = Number(C[0]), h.value.incrementIncrement = Number(C[1]);
    }, x = (h, l, Q = "4") => {
      h.value.cronEvery = Q;
      let C = l.split("-");
      h.value.rangeStart = Number(C[0]), h.value.rangeEnd = Number(C[1]);
    }, k = (h, l, Q = "3") => {
      h.value.cronEvery = Q, h.value.specificSpecific = l.split(",").map((C) => Number(C));
    };
    be(
      () => o.expression,
      () => {
        P();
      },
      { immediate: !0, deep: !0 }
    );
    const _ = t, I = () => {
      _("change", c.value), W();
    }, W = () => {
      _("close");
    }, O = F(() => `${r.value.cronEvery} ${r.value.incrementStart}-${r.value.incrementIncrement} ${r.value.rangeStart}-${r.value.rangeEnd} ${r.value.specificSpecific.join(",")} * * *`);
    return (h, l) => {
      const Q = ea, C = ta, S = Xa, D = na, R = la, U = oa, V = aa, ne = We, J = Me;
      return oe(), ie("div", qa, [
        a(Q, {
          class: "language",
          type: "text",
          onClick: l[0] || (l[0] = (n) => s.value = s.value === "en" ? "cn" : "en")
        }, {
          default: i(() => [
            f(v(s.value == "cn" ? "中文" : "English"), 1)
          ]),
          _: 1
        }),
        a(J, { "default-active-key": "second" }, {
          default: i(() => [
            a(ne, { key: "second" }, {
              tab: i(() => [
                te("span", Ja, [
                  a(_e(Se)),
                  f(" " + v(u.value.Seconds.name), 1)
                ])
              ]),
              default: i(() => [
                a(V, {
                  name: "second",
                  value: r.value.cronEvery,
                  "onUpdate:value": l[6] || (l[6] = (n) => r.value.cronEvery = n)
                }, {
                  default: i(() => [
                    te("div", en, [
                      a(S, null, {
                        default: i(() => [
                          a(C, { value: "1" }, {
                            default: i(() => [
                              f(v(u.value.Seconds.every), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      a(S, null, {
                        default: i(() => [
                          a(C, { value: "2" }, {
                            default: i(() => [
                              f(v(u.value.Seconds.interval[0]) + " ", 1),
                              a(D, {
                                value: r.value.incrementIncrement,
                                "onUpdate:value": l[1] || (l[1] = (n) => r.value.incrementIncrement = n),
                                min: 1,
                                max: 60
                              }, null, 8, ["value"]),
                              f(" " + v(u.value.Seconds.interval[1] || "") + " ", 1),
                              a(D, {
                                value: r.value.incrementStart,
                                "onUpdate:value": l[2] || (l[2] = (n) => r.value.incrementStart = n),
                                min: 0,
                                max: 59
                              }, null, 8, ["value"]),
                              f(" " + v(u.value.Seconds.interval[2] || ""), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      a(S, null, {
                        default: i(() => [
                          a(C, {
                            class: "long",
                            value: "3"
                          }, {
                            default: i(() => [
                              f(v(u.value.Seconds.specific) + " ", 1),
                              a(U, {
                                mode: "multiple",
                                value: r.value.specificSpecific,
                                "onUpdate:value": l[3] || (l[3] = (n) => r.value.specificSpecific = n)
                              }, {
                                default: i(() => [
                                  (oe(), ie(se, null, pe(60, (n) => a(R, {
                                    key: n,
                                    value: n - 1
                                  }, {
                                    default: i(() => [
                                      f(v(n - 1), 1)
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
                      a(S, null, {
                        default: i(() => [
                          a(C, { value: "4" }, {
                            default: i(() => [
                              f(v(u.value.Seconds.cycle[0]) + " ", 1),
                              a(D, {
                                value: r.value.rangeStart,
                                "onUpdate:value": l[4] || (l[4] = (n) => r.value.rangeStart = n),
                                min: 1,
                                max: 60
                              }, null, 8, ["value"]),
                              f(" " + v(u.value.Seconds.cycle[1] || "") + " ", 1),
                              a(D, {
                                value: r.value.rangeEnd,
                                "onUpdate:value": l[5] || (l[5] = (n) => r.value.rangeEnd = n),
                                min: 0,
                                max: 59
                              }, null, 8, ["value"]),
                              f(" " + v(u.value.Seconds.cycle[2] || ""), 1)
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
            a(ne, { key: "minute" }, {
              tab: i(() => [
                te("span", null, [
                  a(_e(Se)),
                  f(" " + v(u.value.Minutes.name), 1)
                ])
              ]),
              default: i(() => [
                a(V, {
                  name: "minute",
                  value: y.value.cronEvery,
                  "onUpdate:value": l[12] || (l[12] = (n) => y.value.cronEvery = n)
                }, {
                  default: i(() => [
                    te("div", tn, [
                      a(S, null, {
                        default: i(() => [
                          a(C, { value: "1" }, {
                            default: i(() => [
                              f(v(u.value.Minutes.every), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      a(S, null, {
                        default: i(() => [
                          a(C, { value: "2" }, {
                            default: i(() => [
                              f(v(u.value.Minutes.interval[0]) + " ", 1),
                              a(D, {
                                value: y.value.incrementIncrement,
                                "onUpdate:value": l[7] || (l[7] = (n) => y.value.incrementIncrement = n),
                                min: 1,
                                max: 60
                              }, null, 8, ["value"]),
                              f(" " + v(u.value.Minutes.interval[1]) + " ", 1),
                              a(D, {
                                value: y.value.incrementStart,
                                "onUpdate:value": l[8] || (l[8] = (n) => y.value.incrementStart = n),
                                min: 0,
                                max: 59
                              }, null, 8, ["value"]),
                              f(" " + v(u.value.Minutes.interval[2] || ""), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      a(S, null, {
                        default: i(() => [
                          a(C, {
                            class: "long",
                            value: "3"
                          }, {
                            default: i(() => [
                              f(v(u.value.Minutes.specific) + " ", 1),
                              a(U, {
                                mode: "multiple",
                                value: y.value.specificSpecific,
                                "onUpdate:value": l[9] || (l[9] = (n) => y.value.specificSpecific = n)
                              }, {
                                default: i(() => [
                                  (oe(), ie(se, null, pe(60, (n) => a(R, {
                                    key: n,
                                    value: n - 1
                                  }, {
                                    default: i(() => [
                                      f(v(n - 1), 1)
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
                      a(S, null, {
                        default: i(() => [
                          a(C, { value: "4" }, {
                            default: i(() => [
                              f(v(u.value.Minutes.cycle[0]) + " ", 1),
                              a(D, {
                                value: y.value.rangeStart,
                                "onUpdate:value": l[10] || (l[10] = (n) => y.value.rangeStart = n),
                                min: 1,
                                max: 60
                              }, null, 8, ["value"]),
                              f(" " + v(u.value.Minutes.cycle[1]) + " ", 1),
                              a(D, {
                                value: y.value.rangeEnd,
                                "onUpdate:value": l[11] || (l[11] = (n) => y.value.rangeEnd = n),
                                min: 0,
                                max: 59
                              }, null, 8, ["value"]),
                              f(" " + v(u.value.Minutes.cycle[2]), 1)
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
            a(ne, { key: "hour" }, {
              tab: i(() => [
                te("span", null, [
                  a(_e(Se)),
                  f(" " + v(u.value.Hours.name), 1)
                ])
              ]),
              default: i(() => [
                a(V, {
                  name: "hour",
                  value: g.value.cronEvery,
                  "onUpdate:value": l[18] || (l[18] = (n) => g.value.cronEvery = n)
                }, {
                  default: i(() => [
                    te("div", an, [
                      a(S, null, {
                        default: i(() => [
                          a(C, { value: "1" }, {
                            default: i(() => [
                              f(v(u.value.Hours.every), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      a(S, null, {
                        default: i(() => [
                          a(C, { value: "2" }, {
                            default: i(() => [
                              f(v(u.value.Hours.interval[0]) + " ", 1),
                              a(D, {
                                value: g.value.incrementIncrement,
                                "onUpdate:value": l[13] || (l[13] = (n) => g.value.incrementIncrement = n),
                                min: 0,
                                max: 23
                              }, null, 8, ["value"]),
                              f(" " + v(u.value.Hours.interval[1]) + " ", 1),
                              a(D, {
                                value: g.value.incrementStart,
                                "onUpdate:value": l[14] || (l[14] = (n) => g.value.incrementStart = n),
                                min: 0,
                                max: 23
                              }, null, 8, ["value"]),
                              f(" " + v(u.value.Hours.interval[2]), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      a(S, null, {
                        default: i(() => [
                          a(C, {
                            class: "long",
                            value: "3"
                          }, {
                            default: i(() => [
                              f(v(u.value.Hours.specific) + " ", 1),
                              a(U, {
                                mode: "multiple",
                                value: g.value.specificSpecific,
                                "onUpdate:value": l[15] || (l[15] = (n) => g.value.specificSpecific = n)
                              }, {
                                default: i(() => [
                                  (oe(), ie(se, null, pe(24, (n) => a(R, {
                                    key: n,
                                    value: n - 1
                                  }, {
                                    default: i(() => [
                                      f(v(n - 1), 1)
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
                      a(S, null, {
                        default: i(() => [
                          a(C, { value: "4" }, {
                            default: i(() => [
                              f(v(u.value.Hours.cycle[0]) + " ", 1),
                              a(D, {
                                value: g.value.rangeStart,
                                "onUpdate:value": l[16] || (l[16] = (n) => g.value.rangeStart = n),
                                min: 0,
                                max: 23
                              }, null, 8, ["value"]),
                              f(" " + v(u.value.Hours.cycle[1]) + " ", 1),
                              a(D, {
                                value: g.value.rangeEnd,
                                "onUpdate:value": l[17] || (l[17] = (n) => g.value.rangeEnd = n),
                                min: 0,
                                max: 23
                              }, null, 8, ["value"]),
                              f(" " + v(u.value.Hours.cycle[2]), 1)
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
            a(ne, { key: "day" }, {
              tab: i(() => [
                te("span", null, [
                  a(_e(Se)),
                  f(" " + v(u.value.Day.name), 1)
                ])
              ]),
              default: i(() => [
                a(V, {
                  name: "day",
                  value: d.value.cronEvery,
                  "onUpdate:value": l[30] || (l[30] = (n) => d.value.cronEvery = n)
                }, {
                  default: i(() => [
                    te("div", nn, [
                      a(S, null, {
                        default: i(() => [
                          a(C, { value: "1" }, {
                            default: i(() => [
                              f(v(u.value.Day.every), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      a(S, null, {
                        default: i(() => [
                          a(C, { value: "2" }, {
                            default: i(() => [
                              f(v(u.value.Day.intervalWeek[0]) + " ", 1),
                              a(D, {
                                value: b.value.incrementIncrement,
                                "onUpdate:value": l[19] || (l[19] = (n) => b.value.incrementIncrement = n),
                                min: 1,
                                max: 7
                              }, null, 8, ["value"]),
                              f(" " + v(u.value.Day.intervalWeek[1]) + " ", 1),
                              a(U, {
                                value: b.value.incrementStart,
                                "onUpdate:value": l[20] || (l[20] = (n) => b.value.incrementStart = n)
                              }, {
                                default: i(() => [
                                  (oe(), ie(se, null, pe(7, (n) => a(R, {
                                    key: n,
                                    value: n
                                  }, {
                                    default: i(() => [
                                      f(v(u.value.Week[n - 1]), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"])), 64))
                                ]),
                                _: 1
                              }, 8, ["value"]),
                              f(" " + v(u.value.Day.intervalWeek[2]), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      a(S, null, {
                        default: i(() => [
                          a(C, { value: "3" }, {
                            default: i(() => [
                              f(v(u.value.Day.intervalDay[0]) + " ", 1),
                              a(D, {
                                value: d.value.incrementIncrement,
                                "onUpdate:value": l[21] || (l[21] = (n) => d.value.incrementIncrement = n),
                                min: 1,
                                max: 31
                              }, null, 8, ["value"]),
                              f(" " + v(u.value.Day.intervalDay[1]) + " ", 1),
                              a(D, {
                                value: d.value.incrementStart,
                                "onUpdate:value": l[22] || (l[22] = (n) => d.value.incrementStart = n),
                                min: 1,
                                max: 31
                              }, null, 8, ["value"]),
                              f(" " + v(u.value.Day.intervalDay[2]), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      a(S, null, {
                        default: i(() => [
                          a(C, {
                            class: "long",
                            value: "4"
                          }, {
                            default: i(() => [
                              f(v(u.value.Day.specificWeek) + " ", 1),
                              a(U, {
                                mode: "multiple",
                                value: b.value.specificSpecific,
                                "onUpdate:value": l[23] || (l[23] = (n) => b.value.specificSpecific = n)
                              }, {
                                default: i(() => [
                                  (oe(), ie(se, null, pe(7, (n) => a(R, {
                                    key: n,
                                    value: [
                                      "SUN",
                                      "MON",
                                      "TUE",
                                      "WED",
                                      "THU",
                                      "FRI",
                                      "SAT"
                                    ][n - 1]
                                  }, {
                                    default: i(() => [
                                      f(v(u.value.Week[n - 1]), 1)
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
                      a(S, null, {
                        default: i(() => [
                          a(C, {
                            class: "long",
                            value: "5"
                          }, {
                            default: i(() => [
                              f(v(u.value.Day.specificDay) + " ", 1),
                              a(U, {
                                mode: "multiple",
                                value: d.value.specificSpecific,
                                "onUpdate:value": l[24] || (l[24] = (n) => d.value.specificSpecific = n)
                              }, {
                                default: i(() => [
                                  (oe(), ie(se, null, pe(31, (n) => a(R, {
                                    key: n,
                                    value: n
                                  }, {
                                    default: i(() => [
                                      f(v(n), 1)
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
                      a(S, null, {
                        default: i(() => [
                          a(C, { value: "6" }, {
                            default: i(() => [
                              f(v(u.value.Day.lastDay), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      a(S, null, {
                        default: i(() => [
                          a(C, { value: "7" }, {
                            default: i(() => [
                              f(v(u.value.Day.lastWeekday), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      a(S, null, {
                        default: i(() => [
                          a(C, { value: "8" }, {
                            default: i(() => [
                              f(v(u.value.Day.lastWeek[0]) + " ", 1),
                              a(U, {
                                value: b.value.cronLastSpecificDomweek,
                                "onUpdate:value": l[25] || (l[25] = (n) => b.value.cronLastSpecificDomweek = n)
                              }, {
                                default: i(() => [
                                  (oe(), ie(se, null, pe(7, (n) => a(R, {
                                    key: n,
                                    value: n
                                  }, {
                                    default: i(() => [
                                      f(v(u.value.Week[n - 1]), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"])), 64))
                                ]),
                                _: 1
                              }, 8, ["value"]),
                              f(" " + v(u.value.Day.lastWeek[1] || ""), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      a(S, null, {
                        default: i(() => [
                          a(C, { value: "9" }, {
                            default: i(() => [
                              a(D, {
                                value: d.value.cronDaysBeforeEomMinus,
                                "onUpdate:value": l[26] || (l[26] = (n) => d.value.cronDaysBeforeEomMinus = n),
                                min: 1,
                                max: 31
                              }, null, 8, ["value"]),
                              f(" " + v(u.value.Day.beforeEndMonth[0]), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      a(S, null, {
                        default: i(() => [
                          a(C, { value: "10" }, {
                            default: i(() => [
                              f(v(u.value.Day.nearestWeekday[0]) + " ", 1),
                              a(D, {
                                value: d.value.cronDaysNearestweekday,
                                "onUpdate:value": l[27] || (l[27] = (n) => d.value.cronDaysNearestweekday = n),
                                min: 1,
                                max: 31
                              }, null, 8, ["value"]),
                              f(" " + v(u.value.Day.nearestWeekday[1]), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      a(S, null, {
                        default: i(() => [
                          a(C, { value: "11" }, {
                            default: i(() => [
                              f(v(u.value.Day.someWeekday[0]) + " ", 1),
                              a(D, {
                                value: b.value.cronNthDayNth,
                                "onUpdate:value": l[28] || (l[28] = (n) => b.value.cronNthDayNth = n),
                                min: 1,
                                max: 5
                              }, null, 8, ["value"]),
                              a(U, {
                                value: b.value.cronNthDayDay,
                                "onUpdate:value": l[29] || (l[29] = (n) => b.value.cronNthDayDay = n)
                              }, {
                                default: i(() => [
                                  (oe(), ie(se, null, pe(7, (n) => a(R, {
                                    key: n,
                                    value: n
                                  }, {
                                    default: i(() => [
                                      f(v(u.value.Week[n - 1]), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"])), 64))
                                ]),
                                _: 1
                              }, 8, ["value"]),
                              f(" " + v(u.value.Day.someWeekday[1]), 1)
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
            a(ne, { key: "month" }, {
              tab: i(() => [
                a(_e(Se)),
                f(" " + v(u.value.Month.name), 1)
              ]),
              default: i(() => [
                a(V, {
                  name: "month",
                  value: w.value.cronEvery,
                  "onUpdate:value": l[36] || (l[36] = (n) => w.value.cronEvery = n)
                }, {
                  default: i(() => [
                    te("div", ln, [
                      a(S, null, {
                        default: i(() => [
                          a(C, { value: "1" }, {
                            default: i(() => [
                              f(v(u.value.Month.every), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      a(S, null, {
                        default: i(() => [
                          a(C, { value: "2" }, {
                            default: i(() => [
                              f(v(u.value.Month.interval[0]) + " ", 1),
                              a(D, {
                                value: w.value.incrementIncrement,
                                "onUpdate:value": l[31] || (l[31] = (n) => w.value.incrementIncrement = n),
                                min: 0,
                                max: 12
                              }, null, 8, ["value"]),
                              f(" " + v(u.value.Month.interval[1]) + " ", 1),
                              a(D, {
                                value: w.value.incrementStart,
                                "onUpdate:value": l[32] || (l[32] = (n) => w.value.incrementStart = n),
                                min: 0,
                                max: 12
                              }, null, 8, ["value"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      a(S, null, {
                        default: i(() => [
                          a(C, {
                            class: "long",
                            value: "3"
                          }, {
                            default: i(() => [
                              f(v(u.value.Month.specific) + " ", 1),
                              a(U, {
                                mode: "multiple",
                                value: w.value.specificSpecific,
                                "onUpdate:value": l[33] || (l[33] = (n) => w.value.specificSpecific = n)
                              }, {
                                default: i(() => [
                                  (oe(), ie(se, null, pe(12, (n) => a(R, {
                                    key: n,
                                    value: n
                                  }, {
                                    default: i(() => [
                                      f(v(n), 1)
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
                      a(S, null, {
                        default: i(() => [
                          a(C, { value: "4" }, {
                            default: i(() => [
                              f(v(u.value.Month.cycle[0]) + " ", 1),
                              a(D, {
                                value: w.value.rangeStart,
                                "onUpdate:value": l[34] || (l[34] = (n) => w.value.rangeStart = n),
                                min: 1,
                                max: 12
                              }, null, 8, ["value"]),
                              f(" " + v(u.value.Month.cycle[1]) + " ", 1),
                              a(D, {
                                value: w.value.rangeEnd,
                                "onUpdate:value": l[35] || (l[35] = (n) => w.value.rangeEnd = n),
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
            a(ne, { key: "year" }, {
              tab: i(() => [
                a(_e(Se)),
                f(" " + v(u.value.Year.name), 1)
              ]),
              default: i(() => [
                a(V, {
                  name: "year",
                  value: $.value.cronEvery,
                  "onUpdate:value": l[42] || (l[42] = (n) => $.value.cronEvery = n)
                }, {
                  default: i(() => [
                    te("div", on, [
                      a(S, null, {
                        default: i(() => [
                          a(C, { value: "1" }, {
                            default: i(() => [
                              f(v(u.value.Year.every), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      a(S, null, {
                        default: i(() => [
                          a(C, { value: "2" }, {
                            default: i(() => [
                              f(v(u.value.Year.interval[0]) + " ", 1),
                              a(D, {
                                value: $.value.incrementIncrement,
                                "onUpdate:value": l[37] || (l[37] = (n) => $.value.incrementIncrement = n),
                                min: 1,
                                max: 99
                              }, null, 8, ["value"]),
                              f(" " + v(u.value.Year.interval[1]) + " ", 1),
                              a(D, {
                                value: $.value.incrementStart,
                                "onUpdate:value": l[38] || (l[38] = (n) => $.value.incrementStart = n),
                                min: 2018,
                                max: 2218
                              }, null, 8, ["value"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      a(S, null, {
                        default: i(() => [
                          a(C, {
                            class: "long",
                            value: "3"
                          }, {
                            default: i(() => [
                              f(v(u.value.Year.specific) + " ", 1),
                              a(U, {
                                mode: "multiple",
                                value: $.value.specificSpecific,
                                "onUpdate:value": l[39] || (l[39] = (n) => $.value.specificSpecific = n)
                              }, {
                                default: i(() => [
                                  (oe(), ie(se, null, pe(200, (n) => a(R, {
                                    key: n,
                                    value: 2017 + n
                                  }, {
                                    default: i(() => [
                                      f(v(2017 + n), 1)
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
                      a(S, null, {
                        default: i(() => [
                          a(C, { value: "4" }, {
                            default: i(() => [
                              f(v(u.value.Year.cycle[0]) + " ", 1),
                              a(D, {
                                value: $.value.rangeStart,
                                "onUpdate:value": l[40] || (l[40] = (n) => $.value.rangeStart = n),
                                min: 2018,
                                max: 2218
                              }, null, 8, ["value"]),
                              f(" " + v(u.value.Year.cycle[1]) + " ", 1),
                              a(D, {
                                value: $.value.rangeEnd,
                                "onUpdate:value": l[41] || (l[41] = (n) => $.value.rangeEnd = n),
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
        te("div", rn, [
          te("span", un, v(O.value), 1)
        ]),
        te("div", sn, [
          a(Q, { onClick: W }, {
            default: i(() => [
              f(v(u.value.Close), 1)
            ]),
            _: 1
          }),
          a(Q, {
            type: "primary",
            onClick: I
          }, {
            default: i(() => [
              f(v(u.value.Save), 1)
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), Tn = /* @__PURE__ */ re({
  __name: "CronInput",
  props: {
    value: {}
  },
  emits: ["update:value"],
  setup(e, { emit: t }) {
    const o = e, s = t, c = F({
      get: () => o.value || "",
      set: (d) => {
        s("update:value", d);
      }
    }), p = B(!1), r = () => {
      p.value = !0;
    }, y = (d) => {
      console.log("change", d), c.value = `${d.second} ${d.minute} ${d.hour} ${d.day} ${d.month} ${d.Week}`;
    }, g = () => {
      console.log("close"), p.value = !1;
    };
    return (d, b) => {
      const w = pa, $ = ma;
      return oe(), ie("div", null, [
        a(w, {
          value: c.value,
          "onUpdate:value": b[0] || (b[0] = (m) => c.value = m),
          style: { width: "350px" }
        }, {
          addonAfter: i(() => [
            te("span", {
              type: "primary",
              onClick: r,
              style: { cursor: "pointer" }
            }, "显示cron")
          ]),
          _: 1
        }, 8, ["value"]),
        a($, {
          title: "corn 表达式",
          open: p.value,
          "onUpdate:open": b[1] || (b[1] = (m) => p.value = m),
          footer: null,
          width: "800px",
          destroyOnClose: ""
        }, {
          default: i(() => [
            a(cn, {
              i18n: "cn",
              expression: c.value,
              onChange: y,
              onClose: g
            }, null, 8, ["expression"])
          ]),
          _: 1
        }, 8, ["open"])
      ]);
    };
  }
});
export {
  Tn as default
};
