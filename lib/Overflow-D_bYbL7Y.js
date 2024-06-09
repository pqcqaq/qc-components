import { P, h as s, g as H, _ as D } from "./index-DELjRDde.js";
import { defineComponent as k, provide as ge, computed as c, inject as pe, ref as be, onUnmounted as he, createVNode as v, shallowRef as C, watch as Oe } from "vue";
import { R as ee } from "./index-BUV0Oo8p.js";
const te = Symbol("OverflowContextProviderKey"), X = k({
  compatConfig: {
    MODE: 3
  },
  name: "OverflowContextProvider",
  inheritAttrs: !1,
  props: {
    value: {
      type: Object
    }
  },
  setup(e, a) {
    let {
      slots: r
    } = a;
    return ge(te, c(() => e.value)), () => {
      var t;
      return (t = r.default) === null || t === void 0 ? void 0 : t.call(r);
    };
  }
}), Se = () => pe(te, c(() => null));
var xe = function(e, a) {
  var r = {};
  for (var t in e)
    Object.prototype.hasOwnProperty.call(e, t) && a.indexOf(t) < 0 && (r[t] = e[t]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, t = Object.getOwnPropertySymbols(e); n < t.length; n++)
      a.indexOf(t[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[n]) && (r[t[n]] = e[t[n]]);
  return r;
};
const _ = void 0, $ = k({
  compatConfig: {
    MODE: 3
  },
  name: "Item",
  props: {
    prefixCls: String,
    item: P.any,
    renderItem: Function,
    responsive: Boolean,
    itemKey: {
      type: [String, Number]
    },
    registerSize: Function,
    display: Boolean,
    order: Number,
    component: P.any,
    invalidate: Boolean
  },
  setup(e, a) {
    let {
      slots: r,
      expose: t
    } = a;
    const n = c(() => e.responsive && !e.display), p = be();
    t({
      itemNodeRef: p
    });
    function b(i) {
      e.registerSize(e.itemKey, i);
    }
    return he(() => {
      b(null);
    }), () => {
      var i;
      const {
        prefixCls: O,
        invalidate: w,
        item: m,
        renderItem: y,
        responsive: f,
        registerSize: z,
        itemKey: R,
        display: V,
        order: I,
        component: M = "div"
      } = e, S = xe(e, ["prefixCls", "invalidate", "item", "renderItem", "responsive", "registerSize", "itemKey", "display", "order", "component"]), W = (i = r.default) === null || i === void 0 ? void 0 : i.call(r), T = y && m !== _ ? y(m) : W;
      let h;
      w || (h = {
        opacity: n.value ? 0 : 1,
        height: n.value ? 0 : _,
        overflowY: n.value ? "hidden" : _,
        order: f ? I : _,
        pointerEvents: n.value ? "none" : _,
        position: n.value ? "absolute" : _
      });
      const N = {};
      return n.value && (N["aria-hidden"] = !0), v(ee, {
        disabled: !f,
        onResize: (E) => {
          let {
            offsetWidth: B
          } = E;
          b(B);
        }
      }, {
        default: () => v(M, s(s(s({
          class: H(!w && O),
          style: h
        }, N), S), {}, {
          ref: p
        }), {
          default: () => [T]
        })
      });
    };
  }
});
var U = function(e, a) {
  var r = {};
  for (var t in e)
    Object.prototype.hasOwnProperty.call(e, t) && a.indexOf(t) < 0 && (r[t] = e[t]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, t = Object.getOwnPropertySymbols(e); n < t.length; n++)
      a.indexOf(t[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[n]) && (r[t[n]] = e[t[n]]);
  return r;
};
const Ce = k({
  compatConfig: {
    MODE: 3
  },
  name: "RawItem",
  inheritAttrs: !1,
  props: {
    component: P.any,
    title: P.any,
    id: String,
    onMouseenter: {
      type: Function
    },
    onMouseleave: {
      type: Function
    },
    onClick: {
      type: Function
    },
    onKeydown: {
      type: Function
    },
    onFocus: {
      type: Function
    },
    role: String,
    tabindex: Number
  },
  setup(e, a) {
    let {
      slots: r,
      attrs: t
    } = a;
    const n = Se();
    return () => {
      var p;
      if (!n.value) {
        const {
          component: y = "div"
        } = e, f = U(e, ["component"]);
        return v(y, s(s({}, f), t), {
          default: () => [(p = r.default) === null || p === void 0 ? void 0 : p.call(r)]
        });
      }
      const b = n.value, {
        className: i
      } = b, O = U(b, ["className"]), {
        class: w
      } = t, m = U(t, ["class"]);
      return v(X, {
        value: null
      }, {
        default: () => [v($, s(s(s({
          class: H(i, w)
        }, O), m), e), r)]
      });
    };
  }
});
var we = function(e, a) {
  var r = {};
  for (var t in e)
    Object.prototype.hasOwnProperty.call(e, t) && a.indexOf(t) < 0 && (r[t] = e[t]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, t = Object.getOwnPropertySymbols(e); n < t.length; n++)
      a.indexOf(t[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[n]) && (r[t[n]] = e[t[n]]);
  return r;
};
const ne = "responsive", le = "invalidate";
function Re(e) {
  return `+ ${e.length} ...`;
}
const Ie = () => ({
  id: String,
  prefixCls: String,
  data: Array,
  itemKey: [String, Number, Function],
  /** Used for `responsive`. It will limit render node to avoid perf issue */
  itemWidth: {
    type: Number,
    default: 10
  },
  renderItem: Function,
  /** @private Do not use in your production. Render raw node that need wrap Item by developer self */
  renderRawItem: Function,
  maxCount: [Number, String],
  renderRest: Function,
  /** @private Do not use in your production. Render raw node that need wrap Item by developer self */
  renderRawRest: Function,
  suffix: P.any,
  component: String,
  itemComponent: P.any,
  /** @private This API may be refactor since not well design */
  onVisibleChange: Function,
  /** When set to `full`, ssr will render full items by default and remove at client side */
  ssr: String,
  onMousedown: Function
}), Y = k({
  name: "Overflow",
  inheritAttrs: !1,
  props: Ie(),
  emits: ["visibleChange"],
  setup(e, a) {
    let {
      attrs: r,
      emit: t,
      slots: n
    } = a;
    const p = c(() => e.ssr === "full"), b = C(null), i = c(() => b.value || 0), O = C(/* @__PURE__ */ new Map()), w = C(0), m = C(0), y = C(0), f = C(null), z = C(null), R = c(() => z.value === null && p.value ? Number.MAX_SAFE_INTEGER : z.value || 0), V = C(!1), I = c(() => `${e.prefixCls}-item`), M = c(() => Math.max(w.value, m.value)), S = c(() => !!(e.data.length && e.maxCount === ne)), W = c(() => e.maxCount === le), T = c(() => S.value || typeof e.maxCount == "number" && e.data.length > e.maxCount), h = c(() => {
      let l = e.data;
      return S.value ? b.value === null && p.value ? l = e.data : l = e.data.slice(0, Math.min(e.data.length, i.value / e.itemWidth)) : typeof e.maxCount == "number" && (l = e.data.slice(0, e.maxCount)), l;
    }), N = c(() => S.value ? e.data.slice(R.value + 1) : e.data.slice(h.value.length)), E = (l, o) => {
      var u;
      return typeof e.itemKey == "function" ? e.itemKey(l) : (u = e.itemKey && (l == null ? void 0 : l[e.itemKey])) !== null && u !== void 0 ? u : o;
    }, B = c(() => e.renderItem || ((l) => l)), A = (l, o) => {
      z.value = l, o || (V.value = l < e.data.length - 1, t("visibleChange", l));
    }, re = (l, o) => {
      b.value = o.clientWidth;
    }, q = (l, o) => {
      const u = new Map(O.value);
      o === null ? u.delete(l) : u.set(l, o), O.value = u;
    }, oe = (l, o) => {
      w.value = m.value, m.value = o;
    }, ae = (l, o) => {
      y.value = o;
    }, G = (l) => O.value.get(E(h.value[l], l));
    return Oe([i, O, m, y, () => e.itemKey, h], () => {
      if (i.value && M.value && h.value) {
        let l = y.value;
        const o = h.value.length, u = o - 1;
        if (!o) {
          A(0), f.value = null;
          return;
        }
        for (let g = 0; g < o; g += 1) {
          const F = G(g);
          if (F === void 0) {
            A(g - 1, !0);
            break;
          }
          if (l += F, // Only one means `totalWidth` is the final width
          u === 0 && l <= i.value || // Last two width will be the final width
          g === u - 1 && l + G(u) <= i.value) {
            A(u), f.value = null;
            break;
          } else if (l + M.value > i.value) {
            A(g - 1), f.value = l - F - y.value + m.value;
            break;
          }
        }
        e.suffix && G(0) + y.value > i.value && (f.value = null);
      }
    }), () => {
      const l = V.value && !!N.value.length, {
        itemComponent: o,
        renderRawItem: u,
        renderRawRest: g,
        renderRest: F,
        prefixCls: ie = "rc-overflow",
        suffix: J,
        component: ue = "div",
        id: se,
        onMousedown: de
      } = e, {
        class: ce,
        style: ve
      } = r, fe = we(r, ["class", "style"]);
      let Q = {};
      f.value !== null && S.value && (Q = {
        position: "absolute",
        left: `${f.value}px`,
        top: 0
      });
      const j = {
        prefixCls: I.value,
        responsive: S.value,
        component: o,
        invalidate: W.value
      }, me = u ? (d, x) => {
        const K = E(d, x);
        return v(X, {
          key: K,
          value: D(D({}, j), {
            order: x,
            item: d,
            itemKey: K,
            registerSize: q,
            display: x <= R.value
          })
        }, {
          default: () => [u(d, x)]
        });
      } : (d, x) => {
        const K = E(d, x);
        return v($, s(s({}, j), {}, {
          order: x,
          key: K,
          item: d,
          renderItem: B.value,
          itemKey: K,
          registerSize: q,
          display: x <= R.value
        }), null);
      };
      let L = () => null;
      const Z = {
        order: l ? R.value : Number.MAX_SAFE_INTEGER,
        className: `${I.value} ${I.value}-rest`,
        registerSize: oe,
        display: l
      };
      if (g)
        g && (L = () => v(X, {
          value: D(D({}, j), Z)
        }, {
          default: () => [g(N.value)]
        }));
      else {
        const d = F || Re;
        L = () => v($, s(s({}, j), Z), {
          default: () => typeof d == "function" ? d(N.value) : d
        });
      }
      const ye = () => {
        var d;
        return v(ue, s({
          id: se,
          class: H(!W.value && ie, ce),
          style: ve,
          onMousedown: de
        }, fe), {
          default: () => [h.value.map(me), T.value ? L() : null, J && v($, s(s({}, j), {}, {
            order: R.value,
            class: `${I.value}-suffix`,
            registerSize: ae,
            display: !0,
            style: Q
          }), {
            default: () => J
          }), (d = n.default) === null || d === void 0 ? void 0 : d.call(n)]
        });
      };
      return v(ee, {
        disabled: !S.value,
        onResize: re
      }, {
        default: ye
      });
    };
  }
});
Y.Item = Ce;
Y.RESPONSIVE = ne;
Y.INVALIDATE = le;
export {
  Y as O
};
