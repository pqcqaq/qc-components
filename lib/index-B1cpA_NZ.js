import { aX as Pe, aY as it, aZ as Ct, a_ as xt, a$ as Mt, I as wt, _ as p, A as ye, e as at, T as Kt, h as B, aj as _e, P as he, D as Ae, K as Ot, n as rt, y as Te, a0 as Pt, ak as Tt, g as Ie, b0 as Ne, J as ut, ae as kt, a5 as Bt, i as Et, m as Ve, z as We, a7 as Dt, ay as _t, a6 as Ge, r as At, aT as zt, c as Rt, a1 as Ht } from "./index-DQQY7Ife.js";
import { createVNode as f, inject as ae, provide as me, computed as m, defineComponent as J, toRef as Xe, getCurrentInstance as st, shallowRef as R, onBeforeUnmount as Se, watch as X, ref as F, Transition as Ft, withDirectives as jt, vShow as Lt, Fragment as Ee, onMounted as Nt, watchEffect as ke, unref as be, Teleport as Vt } from "vue";
import { s as fe } from "./shallowequal-BFA2Cg8a.js";
import { O as pe } from "./Overflow-B7Fc-AVk.js";
import { i as Ye } from "./slide-Cqf2q30J.js";
function Wt() {
}
var Gt = 1 / 0, Xt = Pe && 1 / it(new Pe([, -0]))[1] == Gt ? function(t) {
  return new Pe(t);
} : Wt, Yt = 200;
function Ut(t, n, e) {
  var o = -1, l = xt, u = t.length, d = !0, a = [], s = a;
  if (u >= Yt) {
    var v = Xt(t);
    if (v)
      return it(v);
    d = !1, l = Mt, s = new Ct();
  } else
    s = a;
  e:
    for (; ++o < u; ) {
      var c = t[o], i = c;
      if (c = c !== 0 ? c : 0, d && i === i) {
        for (var $ = s.length; $--; )
          if (s[$] === i)
            continue e;
        a.push(c);
      } else
        l(s, i, e) || (s !== a && s.push(i), a.push(c));
    }
  return a;
}
function Be(t) {
  return t && t.length ? Ut(t) : [];
}
var qt = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, name: "ellipsis", theme: "outlined" };
function Ue(t) {
  for (var n = 1; n < arguments.length; n++) {
    var e = arguments[n] != null ? Object(arguments[n]) : {}, o = Object.keys(e);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(e).filter(function(l) {
      return Object.getOwnPropertyDescriptor(e, l).enumerable;
    }))), o.forEach(function(l) {
      Zt(t, l, e[l]);
    });
  }
  return t;
}
function Zt(t, n, e) {
  return n in t ? Object.defineProperty(t, n, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : t[n] = e, t;
}
var ze = function(n, e) {
  var o = Ue({}, n, e.attrs);
  return f(wt, Ue({}, o, {
    icon: qt
  }), null);
};
ze.displayName = "EllipsisOutlined";
ze.inheritAttrs = !1;
const ct = Symbol("OverrideContextKey"), dt = () => ae(ct, void 0), Kn = (t) => {
  var n, e, o;
  const {
    prefixCls: l,
    mode: u,
    selectable: d,
    validator: a,
    onClick: s,
    expandIcon: v
  } = dt() || {};
  me(ct, {
    prefixCls: m(() => {
      var c, i;
      return (i = (c = t.prefixCls) === null || c === void 0 ? void 0 : c.value) !== null && i !== void 0 ? i : l == null ? void 0 : l.value;
    }),
    mode: m(() => {
      var c, i;
      return (i = (c = t.mode) === null || c === void 0 ? void 0 : c.value) !== null && i !== void 0 ? i : u == null ? void 0 : u.value;
    }),
    selectable: m(() => {
      var c, i;
      return (i = (c = t.selectable) === null || c === void 0 ? void 0 : c.value) !== null && i !== void 0 ? i : d == null ? void 0 : d.value;
    }),
    validator: (n = t.validator) !== null && n !== void 0 ? n : a,
    onClick: (e = t.onClick) !== null && e !== void 0 ? e : s,
    expandIcon: (o = t.expandIcon) !== null && o !== void 0 ? o : v == null ? void 0 : v.value
  });
}, mt = Symbol("menuContextKey"), vt = (t) => {
  me(mt, t);
}, Q = () => ae(mt), ft = Symbol("ForceRenderKey"), Jt = (t) => {
  me(ft, t);
}, pt = () => ae(ft, !1), gt = Symbol("menuFirstLevelContextKey"), bt = (t) => {
  me(gt, t);
}, Qt = () => ae(gt, !0), Ce = J({
  compatConfig: {
    MODE: 3
  },
  name: "MenuContextProvider",
  inheritAttrs: !1,
  props: {
    mode: {
      type: String,
      default: void 0
    },
    overflowDisabled: {
      type: Boolean,
      default: void 0
    }
  },
  setup(t, n) {
    let {
      slots: e
    } = n;
    const o = Q(), l = p({}, o);
    return t.mode !== void 0 && (l.mode = Xe(t, "mode")), t.overflowDisabled !== void 0 && (l.overflowDisabled = Xe(t, "overflowDisabled")), vt(l), () => {
      var u;
      return (u = e.default) === null || u === void 0 ? void 0 : u.call(e);
    };
  }
}), en = vt, tn = Symbol("siderCollapsed"), $e = "$$__vc-menu-more__key", $t = Symbol("KeyPathContext"), Re = () => ae($t, {
  parentEventKeys: m(() => []),
  parentKeys: m(() => []),
  parentInfo: {}
}), nn = (t, n, e) => {
  const {
    parentEventKeys: o,
    parentKeys: l
  } = Re(), u = m(() => [...o.value, t]), d = m(() => [...l.value, n]);
  return me($t, {
    parentEventKeys: u,
    parentKeys: d,
    parentInfo: e
  }), d;
}, yt = Symbol("measure"), qe = J({
  compatConfig: {
    MODE: 3
  },
  setup(t, n) {
    let {
      slots: e
    } = n;
    return me(yt, !0), () => {
      var o;
      return (o = e.default) === null || o === void 0 ? void 0 : o.call(e);
    };
  }
}), He = () => ae(yt, !1), on = nn;
function ht(t) {
  const {
    mode: n,
    rtl: e,
    inlineIndent: o
  } = Q();
  return m(() => n.value !== "inline" ? null : e.value ? {
    paddingRight: `${t.value * o.value}px`
  } : {
    paddingLeft: `${t.value * o.value}px`
  });
}
let ln = 0;
const an = () => ({
  id: String,
  role: String,
  disabled: Boolean,
  danger: Boolean,
  title: {
    type: [String, Boolean],
    default: void 0
  },
  icon: he.any,
  onMouseenter: Function,
  onMouseleave: Function,
  onClick: Function,
  onKeydown: Function,
  onFocus: Function,
  // Internal user prop
  originItemValue: Ae()
}), ge = J({
  compatConfig: {
    MODE: 3
  },
  name: "AMenuItem",
  inheritAttrs: !1,
  props: an(),
  slots: Object,
  setup(t, n) {
    let {
      slots: e,
      emit: o,
      attrs: l
    } = n;
    const u = st(), d = He(), a = typeof u.vnode.key == "symbol" ? String(u.vnode.key) : u.vnode.key;
    ye(typeof u.vnode.key != "symbol", "MenuItem", `MenuItem \`:key="${String(a)}"\` not support Symbol type`);
    const s = `menu_item_${++ln}_$$_${a}`, {
      parentEventKeys: v,
      parentKeys: c
    } = Re(), {
      prefixCls: i,
      activeKeys: $,
      disabled: y,
      changeActiveKeys: g,
      rtl: C,
      inlineCollapsed: x,
      siderCollapsed: T,
      onItemClick: K,
      selectedKeys: j,
      registerMenuInfo: q,
      unRegisterMenuInfo: I
    } = Q(), O = Qt(), z = R(!1), A = m(() => [...c.value, a]);
    q(s, {
      eventKey: s,
      key: a,
      parentEventKeys: v,
      parentKeys: c,
      isLeaf: !0
    }), Se(() => {
      I(s);
    }), X($, () => {
      z.value = !!$.value.find((h) => h === a);
    }, {
      immediate: !0
    });
    const P = m(() => y.value || t.disabled), V = m(() => j.value.includes(a)), W = m(() => {
      const h = `${i.value}-item`;
      return {
        [`${h}`]: !0,
        [`${h}-danger`]: t.danger,
        [`${h}-active`]: z.value,
        [`${h}-selected`]: V.value,
        [`${h}-disabled`]: P.value
      };
    }), Y = (h) => ({
      key: a,
      eventKey: s,
      keyPath: A.value,
      eventKeyPath: [...v.value, s],
      domEvent: h,
      item: p(p({}, t), l)
    }), re = (h) => {
      if (P.value)
        return;
      const E = Y(h);
      o("click", h), K(E);
    }, ue = (h) => {
      P.value || (g(A.value), o("mouseenter", h));
    }, ee = (h) => {
      P.value || (g([]), o("mouseleave", h));
    }, te = (h) => {
      if (o("keydown", h), h.which === Ot.ENTER) {
        const E = Y(h);
        o("click", h), K(E);
      }
    }, se = (h) => {
      g(A.value), o("focus", h);
    }, L = (h, E) => {
      const H = f("span", {
        class: `${i.value}-title-content`
      }, [E]);
      return (!h || rt(E) && E.type === "span") && E && x.value && O && typeof E == "string" ? f("div", {
        class: `${i.value}-inline-collapsed-noicon`
      }, [E.charAt(0)]) : H;
    }, ve = ht(m(() => A.value.length));
    return () => {
      var h, E, H, Z, ne;
      if (d)
        return null;
      const U = (h = t.title) !== null && h !== void 0 ? h : (E = e.title) === null || E === void 0 ? void 0 : E.call(e), r = at((H = e.default) === null || H === void 0 ? void 0 : H.call(e)), b = r.length;
      let M = U;
      typeof U > "u" ? M = O && b ? r : "" : U === !1 && (M = "");
      const k = {
        title: M
      };
      !T.value && !x.value && (k.title = null, k.open = !1);
      const D = {};
      t.role === "option" && (D["aria-selected"] = V.value);
      const w = (Z = t.icon) !== null && Z !== void 0 ? Z : (ne = e.icon) === null || ne === void 0 ? void 0 : ne.call(e, t);
      return f(Kt, B(B({}, k), {}, {
        placement: C.value ? "left" : "right",
        overlayClassName: `${i.value}-inline-collapsed-tooltip`
      }), {
        default: () => [f(pe.Item, B(B(B({
          component: "li"
        }, l), {}, {
          id: t.id,
          style: p(p({}, l.style || {}), ve.value),
          class: [W.value, {
            [`${l.class}`]: !!l.class,
            [`${i.value}-item-only-child`]: (w ? b + 1 : b) === 1
          }],
          role: t.role || "menuitem",
          tabindex: t.disabled ? null : -1,
          "data-menu-id": a,
          "aria-disabled": t.disabled
        }, D), {}, {
          onMouseenter: ue,
          onMouseleave: ee,
          onClick: re,
          onKeydown: te,
          onFocus: se,
          title: typeof U == "string" ? U : void 0
        }), {
          default: () => [_e(typeof w == "function" ? w(t.originItemValue) : w, {
            class: `${i.value}-item-icon`
          }, !1), L(w, r)]
        })]
      });
    };
  }
}), le = {
  adjustX: 1,
  adjustY: 1
}, rn = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: le,
    offset: [0, -7]
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: le,
    offset: [0, 7]
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: le,
    offset: [-4, 0]
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: le,
    offset: [4, 0]
  }
}, un = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: le,
    offset: [0, -7]
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: le,
    offset: [0, 7]
  },
  rightTop: {
    points: ["tr", "tl"],
    overflow: le,
    offset: [-4, 0]
  },
  leftTop: {
    points: ["tl", "tr"],
    overflow: le,
    offset: [4, 0]
  }
}, sn = {
  horizontal: "bottomLeft",
  vertical: "rightTop",
  "vertical-left": "rightTop",
  "vertical-right": "leftTop"
}, Ze = J({
  compatConfig: {
    MODE: 3
  },
  name: "PopupTrigger",
  inheritAttrs: !1,
  props: {
    prefixCls: String,
    mode: String,
    visible: Boolean,
    // popup: React.ReactNode;
    popupClassName: String,
    popupOffset: Array,
    disabled: Boolean,
    onVisibleChange: Function
  },
  slots: Object,
  emits: ["visibleChange"],
  setup(t, n) {
    let {
      slots: e,
      emit: o
    } = n;
    const l = R(!1), {
      getPopupContainer: u,
      rtl: d,
      subMenuOpenDelay: a,
      subMenuCloseDelay: s,
      builtinPlacements: v,
      triggerSubMenuAction: c,
      forceSubMenuRender: i,
      motion: $,
      defaultMotions: y,
      rootClassName: g
    } = Q(), C = pt(), x = m(() => d.value ? p(p({}, un), v.value) : p(p({}, rn), v.value)), T = m(() => sn[t.mode]), K = R();
    X(() => t.visible, (I) => {
      Te.cancel(K.value), K.value = Te(() => {
        l.value = I;
      });
    }, {
      immediate: !0
    }), Se(() => {
      Te.cancel(K.value);
    });
    const j = (I) => {
      o("visibleChange", I);
    }, q = m(() => {
      var I, O;
      const z = $.value || ((I = y.value) === null || I === void 0 ? void 0 : I[t.mode]) || ((O = y.value) === null || O === void 0 ? void 0 : O.other), A = typeof z == "function" ? z() : z;
      return A ? Pt(A.name, {
        css: !0
      }) : void 0;
    });
    return () => {
      const {
        prefixCls: I,
        popupClassName: O,
        mode: z,
        popupOffset: A,
        disabled: N
      } = t;
      return f(Tt, {
        prefixCls: I,
        popupClassName: Ie(`${I}-popup`, {
          [`${I}-rtl`]: d.value
        }, O, g.value),
        stretch: z === "horizontal" ? "minWidth" : null,
        getPopupContainer: u.value,
        builtinPlacements: x.value,
        popupPlacement: T.value,
        popupVisible: l.value,
        popupAlign: A && {
          offset: A
        },
        action: N ? [] : [c.value],
        mouseEnterDelay: a.value,
        mouseLeaveDelay: s.value,
        onPopupVisibleChange: j,
        forceRender: C || i.value,
        popupAnimation: q.value
      }, {
        popup: e.popup,
        default: e.default
      });
    };
  }
}), Fe = (t, n) => {
  let {
    slots: e,
    attrs: o
  } = n;
  var l;
  const {
    prefixCls: u,
    mode: d
  } = Q();
  return f("ul", B(B({}, o), {}, {
    class: Ie(u.value, `${u.value}-sub`, `${u.value}-${d.value === "inline" ? "inline" : "vertical"}`),
    "data-menu-list": !0
  }), [(l = e.default) === null || l === void 0 ? void 0 : l.call(e)]);
};
Fe.displayName = "SubMenuList";
const cn = J({
  compatConfig: {
    MODE: 3
  },
  name: "InlineSubMenuList",
  inheritAttrs: !1,
  props: {
    id: String,
    open: Boolean,
    keyPath: Array
  },
  setup(t, n) {
    let {
      slots: e
    } = n;
    const o = m(() => "inline"), {
      motion: l,
      mode: u,
      defaultMotions: d
    } = Q(), a = m(() => u.value === o.value), s = F(!a.value), v = m(() => a.value ? t.open : !1);
    X(u, () => {
      a.value && (s.value = !1);
    }, {
      flush: "post"
    });
    const c = m(() => {
      var i, $;
      const y = l.value || ((i = d.value) === null || i === void 0 ? void 0 : i[o.value]) || (($ = d.value) === null || $ === void 0 ? void 0 : $.other), g = typeof y == "function" ? y() : y;
      return p(p({}, g), {
        appear: t.keyPath.length <= 1
      });
    });
    return () => {
      var i;
      return s.value ? null : f(Ce, {
        mode: o.value
      }, {
        default: () => [f(Ft, c.value, {
          default: () => [jt(f(Fe, {
            id: t.id
          }, {
            default: () => [(i = e.default) === null || i === void 0 ? void 0 : i.call(e)]
          }), [[Lt, v.value]])]
        })]
      });
    };
  }
});
let Je = 0;
const dn = () => ({
  icon: he.any,
  title: he.any,
  disabled: Boolean,
  level: Number,
  popupClassName: String,
  popupOffset: Array,
  internalPopupClose: Boolean,
  eventKey: String,
  expandIcon: Function,
  theme: String,
  onMouseenter: Function,
  onMouseleave: Function,
  onTitleClick: Function,
  // Internal user prop
  originItemValue: Ae()
}), de = J({
  compatConfig: {
    MODE: 3
  },
  name: "ASubMenu",
  inheritAttrs: !1,
  props: dn(),
  slots: Object,
  setup(t, n) {
    let {
      slots: e,
      attrs: o,
      emit: l
    } = n;
    var u, d;
    bt(!1);
    const a = He(), s = st(), v = typeof s.vnode.key == "symbol" ? String(s.vnode.key) : s.vnode.key;
    ye(typeof s.vnode.key != "symbol", "SubMenu", `SubMenu \`:key="${String(v)}"\` not support Symbol type`);
    const c = Ne(v) ? v : `sub_menu_${++Je}_$$_not_set_key`, i = (u = t.eventKey) !== null && u !== void 0 ? u : Ne(v) ? `sub_menu_${++Je}_$$_${v}` : c, {
      parentEventKeys: $,
      parentInfo: y,
      parentKeys: g
    } = Re(), C = m(() => [...g.value, c]), x = R([]), T = {
      eventKey: i,
      key: c,
      parentEventKeys: $,
      childrenEventKeys: x,
      parentKeys: g
    };
    (d = y.childrenEventKeys) === null || d === void 0 || d.value.push(i), Se(() => {
      var S;
      y.childrenEventKeys && (y.childrenEventKeys.value = (S = y.childrenEventKeys) === null || S === void 0 ? void 0 : S.value.filter((_) => _ != i));
    }), on(i, c, T);
    const {
      prefixCls: K,
      activeKeys: j,
      disabled: q,
      changeActiveKeys: I,
      mode: O,
      inlineCollapsed: z,
      openKeys: A,
      overflowDisabled: N,
      onOpenChange: P,
      registerMenuInfo: V,
      unRegisterMenuInfo: W,
      selectedSubMenuKeys: Y,
      expandIcon: re,
      theme: ue
    } = Q(), ee = v != null, te = !a && (pt() || !ee);
    Jt(te), (a && ee || !a && !ee || te) && (V(i, T), Se(() => {
      W(i);
    }));
    const se = m(() => `${K.value}-submenu`), L = m(() => q.value || t.disabled), ve = R(), h = R(), E = m(() => A.value.includes(c)), H = m(() => !N.value && E.value), Z = m(() => Y.value.includes(c)), ne = R(!1);
    X(j, () => {
      ne.value = !!j.value.find((S) => S === c);
    }, {
      immediate: !0
    });
    const U = (S) => {
      L.value || (l("titleClick", S, c), O.value === "inline" && P(c, !E.value));
    }, r = (S) => {
      L.value || (I(C.value), l("mouseenter", S));
    }, b = (S) => {
      L.value || (I([]), l("mouseleave", S));
    }, M = ht(m(() => C.value.length)), k = (S) => {
      O.value !== "inline" && P(c, S);
    }, D = () => {
      I(C.value);
    }, w = i && `${i}-popup`, G = m(() => Ie(K.value, `${K.value}-${t.theme || ue.value}`, t.popupClassName)), ce = (S, _) => {
      if (!_)
        return z.value && !g.value.length && S && typeof S == "string" ? f("div", {
          class: `${K.value}-inline-collapsed-noicon`
        }, [S.charAt(0)]) : f("span", {
          class: `${K.value}-title-content`
        }, [S]);
      const oe = rt(S) && S.type === "span";
      return f(Ee, null, [_e(typeof _ == "function" ? _(t.originItemValue) : _, {
        class: `${K.value}-item-icon`
      }, !1), oe ? S : f("span", {
        class: `${K.value}-title-content`
      }, [S])]);
    }, we = m(() => O.value !== "inline" && C.value.length > 1 ? "vertical" : O.value), It = m(() => O.value === "horizontal" ? "vertical" : O.value), St = m(() => we.value === "horizontal" ? "vertical" : we.value), je = () => {
      var S, _;
      const oe = se.value, Ke = (S = t.icon) !== null && S !== void 0 ? S : (_ = e.icon) === null || _ === void 0 ? void 0 : _.call(e, t), Le = t.expandIcon || e.expandIcon || re.value, Oe = ce(ut(e, t, "title"), Ke);
      return f("div", {
        style: M.value,
        class: `${oe}-title`,
        tabindex: L.value ? null : -1,
        ref: ve,
        title: typeof Oe == "string" ? Oe : null,
        "data-menu-id": c,
        "aria-expanded": H.value,
        "aria-haspopup": !0,
        "aria-controls": w,
        "aria-disabled": L.value,
        onClick: U,
        onFocus: D
      }, [Oe, O.value !== "horizontal" && Le ? Le(p(p({}, t), {
        isOpen: H.value
      })) : f("i", {
        class: `${oe}-arrow`
      }, null)]);
    };
    return () => {
      var S;
      if (a)
        return ee ? (S = e.default) === null || S === void 0 ? void 0 : S.call(e) : null;
      const _ = se.value;
      let oe = () => null;
      if (!N.value && O.value !== "inline") {
        const Ke = O.value === "horizontal" ? [0, 8] : [10, 0];
        oe = () => f(Ze, {
          mode: we.value,
          prefixCls: _,
          visible: !t.internalPopupClose && H.value,
          popupClassName: G.value,
          popupOffset: t.popupOffset || Ke,
          disabled: L.value,
          onVisibleChange: k
        }, {
          default: () => [je()],
          popup: () => f(Ce, {
            mode: St.value
          }, {
            default: () => [f(Fe, {
              id: w,
              ref: h
            }, {
              default: e.default
            })]
          })
        });
      } else
        oe = () => f(Ze, null, {
          default: je
        });
      return f(Ce, {
        mode: It.value
      }, {
        default: () => [f(pe.Item, B(B({
          component: "li"
        }, o), {}, {
          role: "none",
          class: Ie(_, `${_}-${O.value}`, o.class, {
            [`${_}-open`]: H.value,
            [`${_}-active`]: ne.value,
            [`${_}-selected`]: Z.value,
            [`${_}-disabled`]: L.value
          }),
          onMouseenter: r,
          onMouseleave: b,
          "data-submenu-id": c
        }), {
          default: () => f(Ee, null, [oe(), !N.value && f(cn, {
            id: w,
            open: H.value,
            keyPath: C.value
          }, {
            default: e.default
          })])
        })]
      });
    };
  }
}), mn = () => ({
  title: he.any,
  // Internal user prop
  originItemValue: Ae()
}), xe = J({
  compatConfig: {
    MODE: 3
  },
  name: "AMenuItemGroup",
  inheritAttrs: !1,
  props: mn(),
  slots: Object,
  setup(t, n) {
    let {
      slots: e,
      attrs: o
    } = n;
    const {
      prefixCls: l
    } = Q(), u = m(() => `${l.value}-item-group`), d = He();
    return () => {
      var a, s;
      return d ? (a = e.default) === null || a === void 0 ? void 0 : a.call(e) : f("li", B(B({}, o), {}, {
        onClick: (v) => v.stopPropagation(),
        class: u.value
      }), [f("div", {
        title: typeof t.title == "string" ? t.title : void 0,
        class: `${u.value}-title`
      }, [ut(e, t, "title")]), f("ul", {
        class: `${u.value}-list`
      }, [(s = e.default) === null || s === void 0 ? void 0 : s.call(e)])]);
    };
  }
}), vn = () => ({
  prefixCls: String,
  dashed: Boolean
}), Me = J({
  compatConfig: {
    MODE: 3
  },
  name: "AMenuDivider",
  props: vn(),
  setup(t) {
    const {
      prefixCls: n
    } = Q(), e = m(() => ({
      [`${n.value}-item-divider`]: !0,
      [`${n.value}-item-divider-dashed`]: !!t.dashed
    }));
    return () => f("li", {
      class: e.value
    }, null);
  }
});
var fn = function(t, n) {
  var e = {};
  for (var o in t)
    Object.prototype.hasOwnProperty.call(t, o) && n.indexOf(o) < 0 && (e[o] = t[o]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var l = 0, o = Object.getOwnPropertySymbols(t); l < o.length; l++)
      n.indexOf(o[l]) < 0 && Object.prototype.propertyIsEnumerable.call(t, o[l]) && (e[o[l]] = t[o[l]]);
  return e;
};
function De(t, n, e) {
  return (t || []).map((o, l) => {
    if (o && typeof o == "object") {
      const u = o, {
        label: d,
        children: a,
        key: s,
        type: v
      } = u, c = fn(u, ["label", "children", "key", "type"]), i = s ?? `tmp-${l}`, $ = e ? e.parentKeys.slice() : [], y = [], g = {
        eventKey: i,
        key: i,
        parentEventKeys: F($),
        parentKeys: F($),
        childrenEventKeys: F(y),
        isLeaf: !1
      };
      if (a || v === "group") {
        if (v === "group") {
          const x = De(a, n, e);
          return f(xe, B(B({
            key: i
          }, c), {}, {
            title: d,
            originItemValue: o
          }), {
            default: () => [x]
          });
        }
        n.set(i, g), e && e.childrenEventKeys.push(i);
        const C = De(a, n, {
          childrenEventKeys: y,
          parentKeys: [].concat($, i)
        });
        return f(de, B(B({
          key: i
        }, c), {}, {
          title: d,
          originItemValue: o
        }), {
          default: () => [C]
        });
      }
      return v === "divider" ? f(Me, B({
        key: i
      }, c), null) : (g.isLeaf = !0, n.set(i, g), f(ge, B(B({
        key: i
      }, c), {}, {
        originItemValue: o
      }), {
        default: () => [d]
      }));
    }
    return null;
  }).filter((o) => o);
}
function pn(t) {
  const n = R([]), e = R(!1), o = R(/* @__PURE__ */ new Map());
  return X(() => t.items, () => {
    const l = /* @__PURE__ */ new Map();
    e.value = !1, t.items ? (e.value = !0, n.value = De(t.items, l)) : n.value = void 0, o.value = l;
  }, {
    immediate: !0,
    deep: !0
  }), {
    itemsNodes: n,
    store: o,
    hasItmes: e
  };
}
const gn = (t) => {
  const {
    componentCls: n,
    motionDurationSlow: e,
    menuHorizontalHeight: o,
    colorSplit: l,
    lineWidth: u,
    lineType: d,
    menuItemPaddingInline: a
  } = t;
  return {
    [`${n}-horizontal`]: {
      lineHeight: `${o}px`,
      border: 0,
      borderBottom: `${u}px ${d} ${l}`,
      boxShadow: "none",
      "&::after": {
        display: "block",
        clear: "both",
        height: 0,
        content: '"\\20"'
      },
      // ======================= Item =======================
      [`${n}-item, ${n}-submenu`]: {
        position: "relative",
        display: "inline-block",
        verticalAlign: "bottom",
        paddingInline: a
      },
      [`> ${n}-item:hover,
        > ${n}-item-active,
        > ${n}-submenu ${n}-submenu-title:hover`]: {
        backgroundColor: "transparent"
      },
      [`${n}-item, ${n}-submenu-title`]: {
        transition: [`border-color ${e}`, `background ${e}`].join(",")
      },
      // ===================== Sub Menu =====================
      [`${n}-submenu-arrow`]: {
        display: "none"
      }
    }
  };
}, bn = (t) => {
  let {
    componentCls: n,
    menuArrowOffset: e
  } = t;
  return {
    [`${n}-rtl`]: {
      direction: "rtl"
    },
    [`${n}-submenu-rtl`]: {
      transformOrigin: "100% 0"
    },
    // Vertical Arrow
    [`${n}-rtl${n}-vertical,
    ${n}-submenu-rtl ${n}-vertical`]: {
      [`${n}-submenu-arrow`]: {
        "&::before": {
          transform: `rotate(-45deg) translateY(-${e})`
        },
        "&::after": {
          transform: `rotate(45deg) translateY(${e})`
        }
      }
    }
  };
}, Qe = (t) => p({}, kt(t)), et = (t, n) => {
  const {
    componentCls: e,
    colorItemText: o,
    colorItemTextSelected: l,
    colorGroupTitle: u,
    colorItemBg: d,
    colorSubItemBg: a,
    colorItemBgSelected: s,
    colorActiveBarHeight: v,
    colorActiveBarWidth: c,
    colorActiveBarBorderSize: i,
    motionDurationSlow: $,
    motionEaseInOut: y,
    motionEaseOut: g,
    menuItemPaddingInline: C,
    motionDurationMid: x,
    colorItemTextHover: T,
    lineType: K,
    colorSplit: j,
    // Disabled
    colorItemTextDisabled: q,
    // Danger
    colorDangerItemText: I,
    colorDangerItemTextHover: O,
    colorDangerItemTextSelected: z,
    colorDangerItemBgActive: A,
    colorDangerItemBgSelected: N,
    colorItemBgHover: P,
    menuSubMenuBg: V,
    // Horizontal
    colorItemTextSelectedHorizontal: W,
    colorItemBgSelectedHorizontal: Y
  } = t;
  return {
    [`${e}-${n}`]: {
      color: o,
      background: d,
      [`&${e}-root:focus-visible`]: p({}, Qe(t)),
      // ======================== Item ========================
      [`${e}-item-group-title`]: {
        color: u
      },
      [`${e}-submenu-selected`]: {
        [`> ${e}-submenu-title`]: {
          color: l
        }
      },
      // Disabled
      [`${e}-item-disabled, ${e}-submenu-disabled`]: {
        color: `${q} !important`
      },
      // Hover
      [`${e}-item:hover, ${e}-submenu-title:hover`]: {
        [`&:not(${e}-item-selected):not(${e}-submenu-selected)`]: {
          color: T
        }
      },
      [`&:not(${e}-horizontal)`]: {
        [`${e}-item:not(${e}-item-selected)`]: {
          "&:hover": {
            backgroundColor: P
          },
          "&:active": {
            backgroundColor: s
          }
        },
        [`${e}-submenu-title`]: {
          "&:hover": {
            backgroundColor: P
          },
          "&:active": {
            backgroundColor: s
          }
        }
      },
      // Danger - only Item has
      [`${e}-item-danger`]: {
        color: I,
        [`&${e}-item:hover`]: {
          [`&:not(${e}-item-selected):not(${e}-submenu-selected)`]: {
            color: O
          }
        },
        [`&${e}-item:active`]: {
          background: A
        }
      },
      [`${e}-item a`]: {
        "&, &:hover": {
          color: "inherit"
        }
      },
      [`${e}-item-selected`]: {
        color: l,
        // Danger
        [`&${e}-item-danger`]: {
          color: z
        },
        "a, a:hover": {
          color: "inherit"
        }
      },
      [`& ${e}-item-selected`]: {
        backgroundColor: s,
        // Danger
        [`&${e}-item-danger`]: {
          backgroundColor: N
        }
      },
      [`${e}-item, ${e}-submenu-title`]: {
        [`&:not(${e}-item-disabled):focus-visible`]: p({}, Qe(t))
      },
      [`&${e}-submenu > ${e}`]: {
        backgroundColor: V
      },
      [`&${e}-popup > ${e}`]: {
        backgroundColor: d
      },
      // ====================== Horizontal ======================
      [`&${e}-horizontal`]: p(p({}, n === "dark" ? {
        borderBottom: 0
      } : {}), {
        [`> ${e}-item, > ${e}-submenu`]: {
          top: i,
          marginTop: -i,
          marginBottom: 0,
          borderRadius: 0,
          "&::after": {
            position: "absolute",
            insetInline: C,
            bottom: 0,
            borderBottom: `${v}px solid transparent`,
            transition: `border-color ${$} ${y}`,
            content: '""'
          },
          "&:hover, &-active, &-open": {
            "&::after": {
              borderBottomWidth: v,
              borderBottomColor: W
            }
          },
          "&-selected": {
            color: W,
            backgroundColor: Y,
            "&::after": {
              borderBottomWidth: v,
              borderBottomColor: W
            }
          }
        }
      }),
      // ================== Inline & Vertical ===================
      //
      [`&${e}-root`]: {
        [`&${e}-inline, &${e}-vertical`]: {
          borderInlineEnd: `${i}px ${K} ${j}`
        }
      },
      // ======================== Inline ========================
      [`&${e}-inline`]: {
        // Sub
        [`${e}-sub${e}-inline`]: {
          background: a
        },
        // Item
        [`${e}-item, ${e}-submenu-title`]: i && c ? {
          width: `calc(100% + ${i}px)`
        } : {},
        [`${e}-item`]: {
          position: "relative",
          "&::after": {
            position: "absolute",
            insetBlock: 0,
            insetInlineEnd: 0,
            borderInlineEnd: `${c}px solid ${l}`,
            transform: "scaleY(0.0001)",
            opacity: 0,
            transition: [`transform ${x} ${g}`, `opacity ${x} ${g}`].join(","),
            content: '""'
          },
          // Danger
          [`&${e}-item-danger`]: {
            "&::after": {
              borderInlineEndColor: z
            }
          }
        },
        [`${e}-selected, ${e}-item-selected`]: {
          "&::after": {
            transform: "scaleY(1)",
            opacity: 1,
            transition: [`transform ${x} ${y}`, `opacity ${x} ${y}`].join(",")
          }
        }
      }
    }
  };
}, tt = (t) => {
  const {
    componentCls: n,
    menuItemHeight: e,
    itemMarginInline: o,
    padding: l,
    menuArrowSize: u,
    marginXS: d,
    marginXXS: a
  } = t, s = l + u + d;
  return {
    [`${n}-item`]: {
      position: "relative"
    },
    [`${n}-item, ${n}-submenu-title`]: {
      height: e,
      lineHeight: `${e}px`,
      paddingInline: l,
      overflow: "hidden",
      textOverflow: "ellipsis",
      marginInline: o,
      marginBlock: a,
      width: `calc(100% - ${o * 2}px)`
    },
    // disable margin collapsed
    [`${n}-submenu`]: {
      paddingBottom: 0.02
    },
    [`> ${n}-item,
            > ${n}-submenu > ${n}-submenu-title`]: {
      height: e,
      lineHeight: `${e}px`
    },
    [`${n}-item-group-list ${n}-submenu-title,
            ${n}-submenu-title`]: {
      paddingInlineEnd: s
    }
  };
}, $n = (t) => {
  const {
    componentCls: n,
    iconCls: e,
    menuItemHeight: o,
    colorTextLightSolid: l,
    dropdownWidth: u,
    controlHeightLG: d,
    motionDurationMid: a,
    motionEaseOut: s,
    paddingXL: v,
    fontSizeSM: c,
    fontSizeLG: i,
    motionDurationSlow: $,
    paddingXS: y,
    boxShadowSecondary: g
  } = t, C = {
    height: o,
    lineHeight: `${o}px`,
    listStylePosition: "inside",
    listStyleType: "disc"
  };
  return [
    {
      [n]: {
        "&-inline, &-vertical": p({
          [`&${n}-root`]: {
            boxShadow: "none"
          }
        }, tt(t))
      },
      [`${n}-submenu-popup`]: {
        [`${n}-vertical`]: p(p({}, tt(t)), {
          boxShadow: g
        })
      }
    },
    // Vertical only
    {
      [`${n}-submenu-popup ${n}-vertical${n}-sub`]: {
        minWidth: u,
        maxHeight: `calc(100vh - ${d * 2.5}px)`,
        padding: "0",
        overflow: "hidden",
        borderInlineEnd: 0,
        // https://github.com/ant-design/ant-design/issues/22244
        // https://github.com/ant-design/ant-design/issues/26812
        "&:not([class*='-active'])": {
          overflowX: "hidden",
          overflowY: "auto"
        }
      }
    },
    // Inline Only
    {
      [`${n}-inline`]: {
        width: "100%",
        // Motion enhance for first level
        [`&${n}-root`]: {
          [`${n}-item, ${n}-submenu-title`]: {
            display: "flex",
            alignItems: "center",
            transition: [`border-color ${$}`, `background ${$}`, `padding ${a} ${s}`].join(","),
            [`> ${n}-title-content`]: {
              flex: "auto",
              minWidth: 0,
              overflow: "hidden",
              textOverflow: "ellipsis"
            },
            "> *": {
              flex: "none"
            }
          }
        },
        // >>>>> Sub
        [`${n}-sub${n}-inline`]: {
          padding: 0,
          border: 0,
          borderRadius: 0,
          boxShadow: "none",
          [`& > ${n}-submenu > ${n}-submenu-title`]: C,
          [`& ${n}-item-group-title`]: {
            paddingInlineStart: v
          }
        },
        // >>>>> Item
        [`${n}-item`]: C
      }
    },
    // Inline Collapse Only
    {
      [`${n}-inline-collapsed`]: {
        width: o * 2,
        [`&${n}-root`]: {
          [`${n}-item, ${n}-submenu ${n}-submenu-title`]: {
            [`> ${n}-inline-collapsed-noicon`]: {
              fontSize: i,
              textAlign: "center"
            }
          }
        },
        [`> ${n}-item,
          > ${n}-item-group > ${n}-item-group-list > ${n}-item,
          > ${n}-item-group > ${n}-item-group-list > ${n}-submenu > ${n}-submenu-title,
          > ${n}-submenu > ${n}-submenu-title`]: {
          insetInlineStart: 0,
          paddingInline: `calc(50% - ${c}px)`,
          textOverflow: "clip",
          [`
            ${n}-submenu-arrow,
            ${n}-submenu-expand-icon
          `]: {
            opacity: 0
          },
          [`${n}-item-icon, ${e}`]: {
            margin: 0,
            fontSize: i,
            lineHeight: `${o}px`,
            "+ span": {
              display: "inline-block",
              opacity: 0
            }
          }
        },
        [`${n}-item-icon, ${e}`]: {
          display: "inline-block"
        },
        "&-tooltip": {
          pointerEvents: "none",
          [`${n}-item-icon, ${e}`]: {
            display: "none"
          },
          "a, a:hover": {
            color: l
          }
        },
        [`${n}-item-group-title`]: p(p({}, Bt), {
          paddingInline: y
        })
      }
    }
  ];
}, nt = (t) => {
  const {
    componentCls: n,
    fontSize: e,
    motionDurationSlow: o,
    motionDurationMid: l,
    motionEaseInOut: u,
    motionEaseOut: d,
    iconCls: a,
    controlHeightSM: s
  } = t;
  return {
    // >>>>> Item
    [`${n}-item, ${n}-submenu-title`]: {
      position: "relative",
      display: "block",
      margin: 0,
      whiteSpace: "nowrap",
      cursor: "pointer",
      transition: [`border-color ${o}`, `background ${o}`, `padding ${o} ${u}`].join(","),
      [`${n}-item-icon, ${a}`]: {
        minWidth: e,
        fontSize: e,
        transition: [`font-size ${l} ${d}`, `margin ${o} ${u}`, `color ${o}`].join(","),
        "+ span": {
          marginInlineStart: s - e,
          opacity: 1,
          transition: [`opacity ${o} ${u}`, `margin ${o}`, `color ${o}`].join(",")
        }
      },
      [`${n}-item-icon`]: p({}, zt()),
      [`&${n}-item-only-child`]: {
        [`> ${a}, > ${n}-item-icon`]: {
          marginInlineEnd: 0
        }
      }
    },
    // Disabled state sets text to gray and nukes hover/tab effects
    [`${n}-item-disabled, ${n}-submenu-disabled`]: {
      background: "none !important",
      cursor: "not-allowed",
      "&::after": {
        borderColor: "transparent !important"
      },
      a: {
        color: "inherit !important"
      },
      [`> ${n}-submenu-title`]: {
        color: "inherit !important",
        cursor: "not-allowed"
      }
    }
  };
}, ot = (t) => {
  const {
    componentCls: n,
    motionDurationSlow: e,
    motionEaseInOut: o,
    borderRadius: l,
    menuArrowSize: u,
    menuArrowOffset: d
  } = t;
  return {
    [`${n}-submenu`]: {
      "&-expand-icon, &-arrow": {
        position: "absolute",
        top: "50%",
        insetInlineEnd: t.margin,
        width: u,
        color: "currentcolor",
        transform: "translateY(-50%)",
        transition: `transform ${e} ${o}, opacity ${e}`
      },
      "&-arrow": {
        // →
        "&::before, &::after": {
          position: "absolute",
          width: u * 0.6,
          height: u * 0.15,
          backgroundColor: "currentcolor",
          borderRadius: l,
          transition: [`background ${e} ${o}`, `transform ${e} ${o}`, `top ${e} ${o}`, `color ${e} ${o}`].join(","),
          content: '""'
        },
        "&::before": {
          transform: `rotate(45deg) translateY(-${d})`
        },
        "&::after": {
          transform: `rotate(-45deg) translateY(${d})`
        }
      }
    }
  };
}, yn = (t) => {
  const {
    antCls: n,
    componentCls: e,
    fontSize: o,
    motionDurationSlow: l,
    motionDurationMid: u,
    motionEaseInOut: d,
    lineHeight: a,
    paddingXS: s,
    padding: v,
    colorSplit: c,
    lineWidth: i,
    zIndexPopup: $,
    borderRadiusLG: y,
    radiusSubMenuItem: g,
    menuArrowSize: C,
    menuArrowOffset: x,
    lineType: T,
    menuPanelMaskInset: K
  } = t;
  return [
    // Misc
    {
      "": {
        [`${e}`]: p(p({}, Ge()), {
          // Hidden
          "&-hidden": {
            display: "none"
          }
        })
      },
      [`${e}-submenu-hidden`]: {
        display: "none"
      }
    },
    {
      [e]: p(p(p(p(p(p(p({}, At(t)), Ge()), {
        marginBottom: 0,
        paddingInlineStart: 0,
        // Override default ul/ol
        fontSize: o,
        lineHeight: 0,
        listStyle: "none",
        outline: "none",
        transition: `width ${l} cubic-bezier(0.2, 0, 0, 1) 0s`,
        "ul, ol": {
          margin: 0,
          padding: 0,
          listStyle: "none"
        },
        // Overflow ellipsis
        "&-overflow": {
          display: "flex",
          [`${e}-item`]: {
            flex: "none"
          }
        },
        [`${e}-item, ${e}-submenu, ${e}-submenu-title`]: {
          borderRadius: t.radiusItem
        },
        [`${e}-item-group-title`]: {
          padding: `${s}px ${v}px`,
          fontSize: o,
          lineHeight: a,
          transition: `all ${l}`
        },
        [`&-horizontal ${e}-submenu`]: {
          transition: [`border-color ${l} ${d}`, `background ${l} ${d}`].join(",")
        },
        [`${e}-submenu, ${e}-submenu-inline`]: {
          transition: [`border-color ${l} ${d}`, `background ${l} ${d}`, `padding ${u} ${d}`].join(",")
        },
        [`${e}-submenu ${e}-sub`]: {
          cursor: "initial",
          transition: [`background ${l} ${d}`, `padding ${l} ${d}`].join(",")
        },
        [`${e}-title-content`]: {
          transition: `color ${l}`
        },
        [`${e}-item a`]: {
          "&::before": {
            position: "absolute",
            inset: 0,
            backgroundColor: "transparent",
            content: '""'
          }
        },
        // Removed a Badge related style seems it's safe
        // https://github.com/ant-design/ant-design/issues/19809
        // >>>>> Divider
        [`${e}-item-divider`]: {
          overflow: "hidden",
          lineHeight: 0,
          borderColor: c,
          borderStyle: T,
          borderWidth: 0,
          borderTopWidth: i,
          marginBlock: i,
          padding: 0,
          "&-dashed": {
            borderStyle: "dashed"
          }
        }
      }), nt(t)), {
        [`${e}-item-group`]: {
          [`${e}-item-group-list`]: {
            margin: 0,
            padding: 0,
            [`${e}-item, ${e}-submenu-title`]: {
              paddingInline: `${o * 2}px ${v}px`
            }
          }
        },
        // ======================= Sub Menu =======================
        "&-submenu": {
          "&-popup": {
            position: "absolute",
            zIndex: $,
            background: "transparent",
            borderRadius: y,
            boxShadow: "none",
            transformOrigin: "0 0",
            // https://github.com/ant-design/ant-design/issues/13955
            "&::before": {
              position: "absolute",
              inset: `${K}px 0 0`,
              zIndex: -1,
              width: "100%",
              height: "100%",
              opacity: 0,
              content: '""'
            }
          },
          // https://github.com/ant-design/ant-design/issues/13955
          "&-placement-rightTop::before": {
            top: 0,
            insetInlineStart: K
          },
          [`> ${e}`]: p(p(p({
            borderRadius: y
          }, nt(t)), ot(t)), {
            [`${e}-item, ${e}-submenu > ${e}-submenu-title`]: {
              borderRadius: g
            },
            [`${e}-submenu-title::after`]: {
              transition: `transform ${l} ${d}`
            }
          })
        }
      }), ot(t)), {
        [`&-inline-collapsed ${e}-submenu-arrow,
        &-inline ${e}-submenu-arrow`]: {
          // ↓
          "&::before": {
            transform: `rotate(-45deg) translateX(${x})`
          },
          "&::after": {
            transform: `rotate(45deg) translateX(-${x})`
          }
        },
        [`${e}-submenu-open${e}-submenu-inline > ${e}-submenu-title > ${e}-submenu-arrow`]: {
          // ↑
          transform: `translateY(-${C * 0.2}px)`,
          "&::after": {
            transform: `rotate(-45deg) translateX(-${x})`
          },
          "&::before": {
            transform: `rotate(45deg) translateX(${x})`
          }
        }
      })
    },
    // Integration with header element so menu items have the same height
    {
      [`${n}-layout-header`]: {
        [e]: {
          lineHeight: "inherit"
        }
      }
    }
  ];
}, hn = (t, n) => Et("Menu", (o, l) => {
  let {
    overrideComponentToken: u
  } = l;
  if ((n == null ? void 0 : n.value) === !1)
    return [];
  const {
    colorBgElevated: d,
    colorPrimary: a,
    colorError: s,
    colorErrorHover: v,
    colorTextLightSolid: c
  } = o, {
    controlHeightLG: i,
    fontSize: $
  } = o, y = $ / 7 * 5, g = Ve(o, {
    menuItemHeight: i,
    menuItemPaddingInline: o.margin,
    menuArrowSize: y,
    menuHorizontalHeight: i * 1.15,
    menuArrowOffset: `${y * 0.25}px`,
    menuPanelMaskInset: -7,
    menuSubMenuBg: d
  }), C = new We(c).setAlpha(0.65).toRgbString(), x = Ve(g, {
    colorItemText: C,
    colorItemTextHover: c,
    colorGroupTitle: C,
    colorItemTextSelected: c,
    colorItemBg: "#001529",
    colorSubItemBg: "#000c17",
    colorItemBgActive: "transparent",
    colorItemBgSelected: a,
    colorActiveBarWidth: 0,
    colorActiveBarHeight: 0,
    colorActiveBarBorderSize: 0,
    // Disabled
    colorItemTextDisabled: new We(c).setAlpha(0.25).toRgbString(),
    // Danger
    colorDangerItemText: s,
    colorDangerItemTextHover: v,
    colorDangerItemTextSelected: c,
    colorDangerItemBgActive: s,
    colorDangerItemBgSelected: s,
    menuSubMenuBg: "#001529",
    // Horizontal
    colorItemTextSelectedHorizontal: c,
    colorItemBgSelectedHorizontal: a
  }, p({}, u));
  return [
    // Basic
    yn(g),
    // Horizontal
    gn(g),
    // Vertical
    $n(g),
    // Theme
    et(g, "light"),
    et(x, "dark"),
    // RTL
    bn(g),
    // Motion
    Dt(g),
    Ye(g, "slide-up"),
    Ye(g, "slide-down"),
    _t(g, "zoom-big")
  ];
}, (o) => {
  const {
    colorPrimary: l,
    colorError: u,
    colorTextDisabled: d,
    colorErrorBg: a,
    colorText: s,
    colorTextDescription: v,
    colorBgContainer: c,
    colorFillAlter: i,
    colorFillContent: $,
    lineWidth: y,
    lineWidthBold: g,
    controlItemBgActive: C,
    colorBgTextHover: x
  } = o;
  return {
    dropdownWidth: 160,
    zIndexPopup: o.zIndexPopupBase + 50,
    radiusItem: o.borderRadiusLG,
    radiusSubMenuItem: o.borderRadiusSM,
    colorItemText: s,
    colorItemTextHover: s,
    colorItemTextHoverHorizontal: l,
    colorGroupTitle: v,
    colorItemTextSelected: l,
    colorItemTextSelectedHorizontal: l,
    colorItemBg: c,
    colorItemBgHover: x,
    colorItemBgActive: $,
    colorSubItemBg: i,
    colorItemBgSelected: C,
    colorItemBgSelectedHorizontal: "transparent",
    colorActiveBarWidth: 0,
    colorActiveBarHeight: g,
    colorActiveBarBorderSize: y,
    // Disabled
    colorItemTextDisabled: d,
    // Danger
    colorDangerItemText: u,
    colorDangerItemTextHover: u,
    colorDangerItemTextSelected: u,
    colorDangerItemBgActive: a,
    colorDangerItemBgSelected: a,
    itemMarginInline: o.marginXXS
  };
})(t), In = () => ({
  id: String,
  prefixCls: String,
  // donot use items, now only support inner use
  items: Array,
  disabled: Boolean,
  inlineCollapsed: Boolean,
  disabledOverflow: Boolean,
  forceSubMenuRender: Boolean,
  openKeys: Array,
  selectedKeys: Array,
  activeKey: String,
  selectable: {
    type: Boolean,
    default: !0
  },
  multiple: {
    type: Boolean,
    default: !1
  },
  tabindex: {
    type: [Number, String]
  },
  motion: Object,
  role: String,
  theme: {
    type: String,
    default: "light"
  },
  mode: {
    type: String,
    default: "vertical"
  },
  inlineIndent: {
    type: Number,
    default: 24
  },
  subMenuOpenDelay: {
    type: Number,
    default: 0
  },
  subMenuCloseDelay: {
    type: Number,
    default: 0.1
  },
  builtinPlacements: {
    type: Object
  },
  triggerSubMenuAction: {
    type: String,
    default: "hover"
  },
  getPopupContainer: Function,
  expandIcon: Function,
  onOpenChange: Function,
  onSelect: Function,
  onDeselect: Function,
  onClick: [Function, Array],
  onFocus: Function,
  onBlur: Function,
  onMousedown: Function,
  "onUpdate:openKeys": Function,
  "onUpdate:selectedKeys": Function,
  "onUpdate:activeKey": Function
}), lt = [], ie = J({
  compatConfig: {
    MODE: 3
  },
  name: "AMenu",
  inheritAttrs: !1,
  props: In(),
  slots: Object,
  setup(t, n) {
    let {
      slots: e,
      emit: o,
      attrs: l
    } = n;
    const {
      direction: u,
      getPrefixCls: d
    } = Rt("menu", t), a = dt(), s = m(() => {
      var r;
      return d("menu", t.prefixCls || ((r = a == null ? void 0 : a.prefixCls) === null || r === void 0 ? void 0 : r.value));
    }), [v, c] = hn(s, m(() => !a)), i = R(/* @__PURE__ */ new Map()), $ = ae(tn, F(void 0)), y = m(() => $.value !== void 0 ? $.value : t.inlineCollapsed), {
      itemsNodes: g
    } = pn(t), C = R(!1);
    Nt(() => {
      C.value = !0;
    }), ke(() => {
      ye(!(t.inlineCollapsed === !0 && t.mode !== "inline"), "Menu", "`inlineCollapsed` should only be used when `mode` is inline."), ye(!($.value !== void 0 && t.inlineCollapsed === !0), "Menu", "`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead.");
    });
    const x = F([]), T = F([]), K = F({});
    X(i, () => {
      const r = {};
      for (const b of i.value.values())
        r[b.key] = b;
      K.value = r;
    }, {
      flush: "post"
    }), ke(() => {
      if (t.activeKey !== void 0) {
        let r = [];
        const b = t.activeKey ? K.value[t.activeKey] : void 0;
        b && t.activeKey !== void 0 ? r = Be([].concat(be(b.parentKeys), t.activeKey)) : r = [], fe(x.value, r) || (x.value = r);
      }
    }), X(() => t.selectedKeys, (r) => {
      r && (T.value = r.slice());
    }, {
      immediate: !0,
      deep: !0
    });
    const j = F([]);
    X([K, T], () => {
      let r = [];
      T.value.forEach((b) => {
        const M = K.value[b];
        M && (r = r.concat(be(M.parentKeys)));
      }), r = Be(r), fe(j.value, r) || (j.value = r);
    }, {
      immediate: !0
    });
    const q = (r) => {
      if (t.selectable) {
        const {
          key: b
        } = r, M = T.value.includes(b);
        let k;
        t.multiple ? M ? k = T.value.filter((w) => w !== b) : k = [...T.value, b] : k = [b];
        const D = p(p({}, r), {
          selectedKeys: k
        });
        fe(k, T.value) || (t.selectedKeys === void 0 && (T.value = k), o("update:selectedKeys", k), M && t.multiple ? o("deselect", D) : o("select", D));
      }
      P.value !== "inline" && !t.multiple && I.value.length && Y(lt);
    }, I = F([]);
    X(() => t.openKeys, function() {
      let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : I.value;
      fe(I.value, r) || (I.value = r.slice());
    }, {
      immediate: !0,
      deep: !0
    });
    let O;
    const z = (r) => {
      clearTimeout(O), O = setTimeout(() => {
        t.activeKey === void 0 && (x.value = r), o("update:activeKey", r[r.length - 1]);
      });
    }, A = m(() => !!t.disabled), N = m(() => u.value === "rtl"), P = F("vertical"), V = R(!1);
    ke(() => {
      var r;
      (t.mode === "inline" || t.mode === "vertical") && y.value ? (P.value = "vertical", V.value = y.value) : (P.value = t.mode, V.value = !1), !((r = a == null ? void 0 : a.mode) === null || r === void 0) && r.value && (P.value = a.mode.value);
    });
    const W = m(() => P.value === "inline"), Y = (r) => {
      I.value = r, o("update:openKeys", r), o("openChange", r);
    }, re = F(I.value), ue = R(!1);
    X(I, () => {
      W.value && (re.value = I.value);
    }, {
      immediate: !0
    }), X(W, () => {
      if (!ue.value) {
        ue.value = !0;
        return;
      }
      W.value ? I.value = re.value : Y(lt);
    }, {
      immediate: !0
    });
    const ee = m(() => ({
      [`${s.value}`]: !0,
      [`${s.value}-root`]: !0,
      [`${s.value}-${P.value}`]: !0,
      [`${s.value}-inline-collapsed`]: V.value,
      [`${s.value}-rtl`]: N.value,
      [`${s.value}-${t.theme}`]: !0
    })), te = m(() => d()), se = m(() => ({
      horizontal: {
        name: `${te.value}-slide-up`
      },
      inline: Ht(`${te.value}-motion-collapse`),
      other: {
        name: `${te.value}-zoom-big`
      }
    }));
    bt(!0);
    const L = function() {
      let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      const b = [], M = i.value;
      return r.forEach((k) => {
        const {
          key: D,
          childrenEventKeys: w
        } = M.get(k);
        b.push(D, ...L(be(w)));
      }), b;
    }, ve = (r) => {
      var b;
      o("click", r), q(r), (b = a == null ? void 0 : a.onClick) === null || b === void 0 || b.call(a);
    }, h = (r, b) => {
      var M;
      const k = ((M = K.value[r]) === null || M === void 0 ? void 0 : M.childrenEventKeys) || [];
      let D = I.value.filter((w) => w !== r);
      if (b)
        D.push(r);
      else if (P.value !== "inline") {
        const w = L(be(k));
        D = Be(D.filter((G) => !w.includes(G)));
      }
      fe(I, D) || Y(D);
    }, E = (r, b) => {
      i.value.set(r, b), i.value = new Map(i.value);
    }, H = (r) => {
      i.value.delete(r), i.value = new Map(i.value);
    }, Z = F(0), ne = m(() => {
      var r;
      return t.expandIcon || e.expandIcon || !((r = a == null ? void 0 : a.expandIcon) === null || r === void 0) && r.value ? (b) => {
        let M = t.expandIcon || e.expandIcon;
        return M = typeof M == "function" ? M(b) : M, _e(M, {
          class: `${s.value}-submenu-expand-icon`
        }, !1);
      } : null;
    });
    en({
      prefixCls: s,
      activeKeys: x,
      openKeys: I,
      selectedKeys: T,
      changeActiveKeys: z,
      disabled: A,
      rtl: N,
      mode: P,
      inlineIndent: m(() => t.inlineIndent),
      subMenuCloseDelay: m(() => t.subMenuCloseDelay),
      subMenuOpenDelay: m(() => t.subMenuOpenDelay),
      builtinPlacements: m(() => t.builtinPlacements),
      triggerSubMenuAction: m(() => t.triggerSubMenuAction),
      getPopupContainer: m(() => t.getPopupContainer),
      inlineCollapsed: V,
      theme: m(() => t.theme),
      siderCollapsed: $,
      defaultMotions: m(() => C.value ? se.value : null),
      motion: m(() => C.value ? t.motion : null),
      overflowDisabled: R(void 0),
      onOpenChange: h,
      onItemClick: ve,
      registerMenuInfo: E,
      unRegisterMenuInfo: H,
      selectedSubMenuKeys: j,
      expandIcon: ne,
      forceSubMenuRender: m(() => t.forceSubMenuRender),
      rootClassName: c
    });
    const U = () => {
      var r;
      return g.value || at((r = e.default) === null || r === void 0 ? void 0 : r.call(e));
    };
    return () => {
      var r;
      const b = U(), M = Z.value >= b.length - 1 || P.value !== "horizontal" || t.disabledOverflow, k = (w) => P.value !== "horizontal" || t.disabledOverflow ? w : (
        // Need wrap for overflow dropdown that do not response for open
        w.map((G, ce) => (
          // Always wrap provider to avoid sub node re-mount
          f(Ce, {
            key: G.key,
            overflowDisabled: ce > Z.value
          }, {
            default: () => G
          })
        ))
      ), D = ((r = e.overflowedIndicator) === null || r === void 0 ? void 0 : r.call(e)) || f(ze, null, null);
      return v(f(pe, B(B({}, l), {}, {
        onMousedown: t.onMousedown,
        prefixCls: `${s.value}-overflow`,
        component: "ul",
        itemComponent: ge,
        class: [ee.value, l.class, c.value],
        role: "menu",
        id: t.id,
        data: k(b),
        renderRawItem: (w) => w,
        renderRawRest: (w) => {
          const G = w.length, ce = G ? b.slice(-G) : null;
          return f(Ee, null, [f(de, {
            eventKey: $e,
            key: $e,
            title: D,
            disabled: M,
            internalPopupClose: G === 0
          }, {
            default: () => ce
          }), f(qe, null, {
            default: () => [f(de, {
              eventKey: $e,
              key: $e,
              title: D,
              disabled: M,
              internalPopupClose: G === 0
            }, {
              default: () => ce
            })]
          })]);
        },
        maxCount: P.value !== "horizontal" || t.disabledOverflow ? pe.INVALIDATE : pe.RESPONSIVE,
        ssr: "full",
        "data-menu-list": !0,
        onVisibleChange: (w) => {
          Z.value = w;
        }
      }), {
        default: () => [f(Vt, {
          to: "body"
        }, {
          default: () => [f("div", {
            style: {
              display: "none"
            },
            "aria-hidden": !0
          }, [f(qe, null, {
            default: () => [k(U())]
          })])]
        })]
      }));
    };
  }
});
ie.install = function(t) {
  return t.component(ie.name, ie), t.component(ge.name, ge), t.component(de.name, de), t.component(Me.name, Me), t.component(xe.name, xe), t;
};
ie.Item = ge;
ie.Divider = Me;
ie.SubMenu = de;
ie.ItemGroup = xe;
export {
  ze as E,
  ie as M,
  ge as a,
  Kn as u
};
