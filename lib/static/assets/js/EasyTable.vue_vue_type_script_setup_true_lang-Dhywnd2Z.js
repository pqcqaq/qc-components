import { shallowRef as pe, onMounted as tt, onUnmounted as $o, defineComponent as oe, computed as S, createVNode as f, ref as se, createTextVNode as vt, toRef as ye, provide as Ge, inject as Je, watch as De, isVNode as wt, Text as vl, watchEffect as _e, getCurrentInstance as hl, Fragment as Be, onBeforeUnmount as ut, reactive as at, onActivated as gl, nextTick as st, toRefs as Vt, onUpdated as Po, markRaw as bl, openBlock as Ae, createElementBlock as Xe, normalizeStyle as An, toDisplayString as xt, createCommentVNode as Xt, mergeProps as Ut, withCtx as Ct, renderList as Fn, createBlock as Mn, resolveDynamicComponent as jn, toHandlers as Ln } from "vue";
import { U as Ze, b7 as yl, a3 as Re, $ as Me, P as ae, C as re, b8 as xl, _ as g, o as Cl, g as Cn, b9 as Sl, m as Sn, r as zt, b5 as wl, q as ln, at as $l, i as dt, u as ot, B as ht, b as V, c as ee, I as Ve, w as Hn, A as Ie, h as Ot, ba as Pl, O as gt, a7 as Ol, bb as Wn, a9 as pt, bc as Il, bd as El, a as Vn, aA as Oo, be as Tl, F as Ne, G as ue, D as We, t as Rl, bf as _l, M as Nl, bg as Dl, bh as kl, a2 as ze, bi as wn, E as Io, J as It, a5 as Bl, a6 as Qe, bj as Xn, au as zl, ae as et, aE as Un, bk as Kl, b4 as Al, ai as Fl, Q as Ml, bl as jl, ac as Ll, bm as Gn, a0 as Hl, p as mt, e as Wl, aB as Vl } from "./styleChecker-DdDg1L8e.js";
import { e as Xl, c as Eo, u as Ul, a as Gt, b as Gl, d as Jl, f as Yl, T as ql, r as Ql, t as Zl, h as Jn, i as er, F as tr, j as nr, V as or } from "./index-Vu7vcyEr.js";
import { B as To, R as Ro, g as Yn } from "./BaseInput-8fgUqcxC.js";
import { p as lr } from "./CheckOutlined-glN3v3hv.js";
import { S as rr } from "./index-CSrMGP_4.js";
import { s as _o, S as Et } from "./index-CdE5tA34.js";
import { i as ar, h as ir, g as sr } from "./index-BefsX9p6.js";
import { D as cr } from "./DownOutlined-BHyFVLFp.js";
import { u as ur } from "./useMergedState-6HyZ0xMy.js";
import { C as Tt } from "./index-Dy7z43xk.js";
import { D as dr } from "./Dropdown-USApd7PK.js";
import { E as fr, u as pr, M as Rt } from "./index-CJZ5vOhG.js";
import { i as qn } from "./move-B6--odHQ.js";
import { s as mr, a as vr, b as hr, c as gr, i as Qn } from "./slide-BAO1Q6HG.js";
import { o as $n } from "./omit-CH0b8HlL.js";
import { R as No } from "./index-RNU-JzPI.js";
import { K as Do } from "./KeyCode-n3eOOGSl.js";
import { S as br } from "./SearchOutlined-Dek-cjYy.js";
import { I as yr } from "./index-CapMw6UA.js";
const xr = (e) => ({
  // FIXME: This use link but is a operation unit. Seems should be a colorPrimary.
  // And Typography use this to generate link style which should not do this.
  color: e.colorLink,
  textDecoration: "none",
  outline: "none",
  cursor: "pointer",
  transition: `color ${e.motionDurationSlow}`,
  "&:focus, &:hover": {
    color: e.colorLinkHover
  },
  "&:active": {
    color: e.colorLinkActive
  }
});
function Cr(e, t, n, o) {
  const l = n - t;
  return e /= o / 2, e < 1 ? l / 2 * e * e * e + t : l / 2 * ((e -= 2) * e * e + 2) + t;
}
function rn(e) {
  return e != null && e === e.window;
}
function Sr(e, t) {
  var n, o;
  if (typeof window > "u")
    return 0;
  const l = "scrollTop";
  let r = 0;
  return rn(e) ? r = e.scrollY : e instanceof Document ? r = e.documentElement[l] : (e instanceof HTMLElement || e) && (r = e[l]), e && !rn(e) && typeof r != "number" && (r = (o = ((n = e.ownerDocument) !== null && n !== void 0 ? n : e).documentElement) === null || o === void 0 ? void 0 : o[l]), r;
}
function wr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    getContainer: n = () => window,
    callback: o,
    duration: l = 450
  } = t, r = n(), i = Sr(r), a = Date.now(), u = () => {
    const s = Date.now() - a, d = Cr(s > l ? l : s, i, e, l);
    rn(r) ? r.scrollTo(window.scrollX, d) : r instanceof Document ? r.documentElement.scrollTop = d : r.scrollTop = d, s < l ? Ze(u) : typeof o == "function" && o();
  };
  Ze(u);
}
function $r(e) {
  for (var t = -1, n = e == null ? 0 : e.length, o = {}; ++t < n; ) {
    var l = e[t];
    o[l[0]] = l[1];
  }
  return o;
}
function ko() {
  const e = pe({});
  let t = null;
  const n = yl();
  return tt(() => {
    t = n.value.subscribe((o) => {
      e.value = o;
    });
  }), $o(() => {
    n.value.unsubscribe(t);
  }), e;
}
const Bo = () => ({
  arrow: Re([Boolean, Object]),
  trigger: {
    type: [Array, String]
  },
  menu: Me(),
  overlay: ae.any,
  /** @deprecated Please use `open` instead */
  visible: re(),
  open: re(),
  disabled: re(),
  danger: re(),
  autofocus: re(),
  align: Me(),
  getPopupContainer: Function,
  prefixCls: String,
  transitionName: String,
  placement: String,
  overlayClassName: String,
  overlayStyle: Me(),
  forceRender: re(),
  mouseEnterDelay: Number,
  mouseLeaveDelay: Number,
  openClassName: String,
  minOverlayWidthMatchTrigger: re(),
  destroyPopupOnHide: re(),
  /** @deprecated Please use `onOpenChange` instead */
  onVisibleChange: {
    type: Function
  },
  /** @deprecated Please use `onUpdate:open` instead */
  "onUpdate:visible": {
    type: Function
  },
  onOpenChange: {
    type: Function
  },
  "onUpdate:open": {
    type: Function
  }
}), Jt = xl(), Pr = () => g(g({}, Bo()), {
  type: Jt.type,
  size: String,
  htmlType: Jt.htmlType,
  href: String,
  disabled: re(),
  prefixCls: String,
  icon: ae.any,
  title: String,
  loading: Jt.loading,
  onClick: Cl()
}), Or = (e) => {
  const {
    componentCls: t,
    antCls: n,
    paddingXS: o,
    opacityLoading: l
  } = e;
  return {
    [`${t}-button`]: {
      whiteSpace: "nowrap",
      [`&${n}-btn-group > ${n}-btn`]: {
        [`&-loading, &-loading + ${n}-btn`]: {
          cursor: "default",
          pointerEvents: "none",
          opacity: l
        },
        [`&:last-child:not(:first-child):not(${n}-btn-icon-only)`]: {
          paddingInline: o
        }
      }
    }
  };
}, Ir = (e) => {
  const {
    componentCls: t,
    menuCls: n,
    colorError: o,
    colorTextLightSolid: l
  } = e, r = `${n}-item`;
  return {
    [`${t}, ${t}-menu-submenu`]: {
      [`${n} ${r}`]: {
        [`&${r}-danger:not(${r}-disabled)`]: {
          color: o,
          "&:hover": {
            color: l,
            backgroundColor: o
          }
        }
      }
    }
  };
}, Er = (e) => {
  const {
    componentCls: t,
    menuCls: n,
    zIndexPopup: o,
    dropdownArrowDistance: l,
    dropdownArrowOffset: r,
    sizePopupArrow: i,
    antCls: a,
    iconCls: u,
    motionDurationMid: m,
    dropdownPaddingVertical: s,
    fontSize: d,
    dropdownEdgeChildPadding: b,
    colorTextDisabled: C,
    fontSizeIcon: x,
    controlPaddingHorizontal: v,
    colorBgElevated: c,
    boxShadowPopoverArrow: p
  } = e;
  return [
    {
      [t]: g(g({}, zt(e)), {
        position: "absolute",
        top: -9999,
        left: {
          _skip_check_: !0,
          value: -9999
        },
        zIndex: o,
        display: "block",
        // A placeholder out of dropdown visible range to avoid close when user moving
        "&::before": {
          position: "absolute",
          insetBlock: -l + i / 2,
          // insetInlineStart: -7, // FIXME: Seems not work for hidden element
          zIndex: -9999,
          opacity: 1e-4,
          content: '""'
        },
        [`${t}-wrap`]: {
          position: "relative",
          [`${a}-btn > ${u}-down`]: {
            fontSize: x
          },
          [`${u}-down::before`]: {
            transition: `transform ${m}`
          }
        },
        [`${t}-wrap-open`]: {
          [`${u}-down::before`]: {
            transform: "rotate(180deg)"
          }
        },
        "\n        &-hidden,\n        &-menu-hidden,\n        &-menu-submenu-hidden\n      ": {
          display: "none"
        },
        // =============================================================
        // ==                          Arrow                          ==
        // =============================================================
        // Offset the popover to account for the dropdown arrow
        [`
        &-show-arrow${t}-placement-topLeft,
        &-show-arrow${t}-placement-top,
        &-show-arrow${t}-placement-topRight
      `]: {
          paddingBottom: l
        },
        [`
        &-show-arrow${t}-placement-bottomLeft,
        &-show-arrow${t}-placement-bottom,
        &-show-arrow${t}-placement-bottomRight
      `]: {
          paddingTop: l
        },
        // Note: .popover-arrow is outer, .popover-arrow:after is inner
        [`${t}-arrow`]: g({
          position: "absolute",
          zIndex: 1,
          display: "block"
        }, wl(i, e.borderRadiusXS, e.borderRadiusOuter, c, p)),
        [`
        &-placement-top > ${t}-arrow,
        &-placement-topLeft > ${t}-arrow,
        &-placement-topRight > ${t}-arrow
      `]: {
          bottom: l,
          transform: "translateY(100%) rotate(180deg)"
        },
        [`&-placement-top > ${t}-arrow`]: {
          left: {
            _skip_check_: !0,
            value: "50%"
          },
          transform: "translateX(-50%) translateY(100%) rotate(180deg)"
        },
        [`&-placement-topLeft > ${t}-arrow`]: {
          left: {
            _skip_check_: !0,
            value: r
          }
        },
        [`&-placement-topRight > ${t}-arrow`]: {
          right: {
            _skip_check_: !0,
            value: r
          }
        },
        [`
          &-placement-bottom > ${t}-arrow,
          &-placement-bottomLeft > ${t}-arrow,
          &-placement-bottomRight > ${t}-arrow
        `]: {
          top: l,
          transform: "translateY(-100%)"
        },
        [`&-placement-bottom > ${t}-arrow`]: {
          left: {
            _skip_check_: !0,
            value: "50%"
          },
          transform: "translateY(-100%) translateX(-50%)"
        },
        [`&-placement-bottomLeft > ${t}-arrow`]: {
          left: {
            _skip_check_: !0,
            value: r
          }
        },
        [`&-placement-bottomRight > ${t}-arrow`]: {
          right: {
            _skip_check_: !0,
            value: r
          }
        },
        // =============================================================
        // ==                         Motion                          ==
        // =============================================================
        // When position is not enough for dropdown, the placement will revert.
        // We will handle this with revert motion name.
        [`&${a}-slide-down-enter${a}-slide-down-enter-active${t}-placement-bottomLeft,
          &${a}-slide-down-appear${a}-slide-down-appear-active${t}-placement-bottomLeft,
          &${a}-slide-down-enter${a}-slide-down-enter-active${t}-placement-bottom,
          &${a}-slide-down-appear${a}-slide-down-appear-active${t}-placement-bottom,
          &${a}-slide-down-enter${a}-slide-down-enter-active${t}-placement-bottomRight,
          &${a}-slide-down-appear${a}-slide-down-appear-active${t}-placement-bottomRight`]: {
          animationName: mr
        },
        [`&${a}-slide-up-enter${a}-slide-up-enter-active${t}-placement-topLeft,
          &${a}-slide-up-appear${a}-slide-up-appear-active${t}-placement-topLeft,
          &${a}-slide-up-enter${a}-slide-up-enter-active${t}-placement-top,
          &${a}-slide-up-appear${a}-slide-up-appear-active${t}-placement-top,
          &${a}-slide-up-enter${a}-slide-up-enter-active${t}-placement-topRight,
          &${a}-slide-up-appear${a}-slide-up-appear-active${t}-placement-topRight`]: {
          animationName: vr
        },
        [`&${a}-slide-down-leave${a}-slide-down-leave-active${t}-placement-bottomLeft,
          &${a}-slide-down-leave${a}-slide-down-leave-active${t}-placement-bottom,
          &${a}-slide-down-leave${a}-slide-down-leave-active${t}-placement-bottomRight`]: {
          animationName: hr
        },
        [`&${a}-slide-up-leave${a}-slide-up-leave-active${t}-placement-topLeft,
          &${a}-slide-up-leave${a}-slide-up-leave-active${t}-placement-top,
          &${a}-slide-up-leave${a}-slide-up-leave-active${t}-placement-topRight`]: {
          animationName: gr
        }
      })
    },
    {
      // =============================================================
      // ==                          Menu                           ==
      // =============================================================
      [`${t} ${n}`]: {
        position: "relative",
        margin: 0
      },
      [`${n}-submenu-popup`]: {
        position: "absolute",
        zIndex: o,
        background: "transparent",
        boxShadow: "none",
        transformOrigin: "0 0",
        "ul,li": {
          listStyle: "none"
        },
        ul: {
          marginInline: "0.3em"
        }
      },
      [`${t}, ${t}-menu-submenu`]: {
        [n]: g(g({
          padding: b,
          listStyleType: "none",
          backgroundColor: c,
          backgroundClip: "padding-box",
          borderRadius: e.borderRadiusLG,
          outline: "none",
          boxShadow: e.boxShadowSecondary
        }, ln(e)), {
          [`${n}-item-group-title`]: {
            padding: `${s}px ${v}px`,
            color: e.colorTextDescription,
            transition: `all ${m}`
          },
          // ======================= Item Content =======================
          [`${n}-item`]: {
            position: "relative",
            display: "flex",
            alignItems: "center",
            borderRadius: e.borderRadiusSM
          },
          [`${n}-item-icon`]: {
            minWidth: d,
            marginInlineEnd: e.marginXS,
            fontSize: e.fontSizeSM
          },
          [`${n}-title-content`]: {
            flex: "auto",
            "> a": {
              color: "inherit",
              transition: `all ${m}`,
              "&:hover": {
                color: "inherit"
              },
              "&::after": {
                position: "absolute",
                inset: 0,
                content: '""'
              }
            }
          },
          // =========================== Item ===========================
          [`${n}-item, ${n}-submenu-title`]: g(g({
            clear: "both",
            margin: 0,
            padding: `${s}px ${v}px`,
            color: e.colorText,
            fontWeight: "normal",
            fontSize: d,
            lineHeight: e.lineHeight,
            cursor: "pointer",
            transition: `all ${m}`,
            "&:hover, &-active": {
              backgroundColor: e.controlItemBgHover
            }
          }, ln(e)), {
            "&-selected": {
              color: e.colorPrimary,
              backgroundColor: e.controlItemBgActive,
              "&:hover, &-active": {
                backgroundColor: e.controlItemBgActiveHover
              }
            },
            "&-disabled": {
              color: C,
              cursor: "not-allowed",
              "&:hover": {
                color: C,
                backgroundColor: c,
                cursor: "not-allowed"
              },
              a: {
                pointerEvents: "none"
              }
            },
            "&-divider": {
              height: 1,
              margin: `${e.marginXXS}px 0`,
              overflow: "hidden",
              lineHeight: 0,
              backgroundColor: e.colorSplit
            },
            [`${t}-menu-submenu-expand-icon`]: {
              position: "absolute",
              insetInlineEnd: e.paddingXS,
              [`${t}-menu-submenu-arrow-icon`]: {
                marginInlineEnd: "0 !important",
                color: e.colorTextDescription,
                fontSize: x,
                fontStyle: "normal"
              }
            }
          }),
          [`${n}-item-group-list`]: {
            margin: `0 ${e.marginXS}px`,
            padding: 0,
            listStyle: "none"
          },
          [`${n}-submenu-title`]: {
            paddingInlineEnd: v + e.fontSizeSM
          },
          [`${n}-submenu-vertical`]: {
            position: "relative"
          },
          [`${n}-submenu${n}-submenu-disabled ${t}-menu-submenu-title`]: {
            [`&, ${t}-menu-submenu-arrow-icon`]: {
              color: C,
              backgroundColor: c,
              cursor: "not-allowed"
            }
          },
          // https://github.com/ant-design/ant-design/issues/19264
          [`${n}-submenu-selected ${t}-menu-submenu-title`]: {
            color: e.colorPrimary
          }
        })
      }
    },
    // Follow code may reuse in other components
    [Qn(e, "slide-up"), Qn(e, "slide-down"), qn(e, "move-up"), qn(e, "move-down"), $l(e, "zoom-big")]
  ];
}, zo = Cn("Dropdown", (e, t) => {
  let {
    rootPrefixCls: n
  } = t;
  const {
    marginXXS: o,
    sizePopupArrow: l,
    controlHeight: r,
    fontSize: i,
    lineHeight: a,
    paddingXXS: u,
    componentCls: m,
    borderRadiusOuter: s,
    borderRadiusLG: d
  } = e, b = (r - i * a) / 2, {
    dropdownArrowOffset: C
  } = Sl({
    sizePopupArrow: l,
    contentRadius: d,
    borderRadiusOuter: s
  }), x = Sn(e, {
    menuCls: `${m}-menu`,
    rootPrefixCls: n,
    dropdownArrowDistance: l / 2 + o,
    dropdownArrowOffset: C,
    dropdownPaddingVertical: b,
    dropdownEdgeChildPadding: u
  });
  return [Er(x), Or(x), Ir(x)];
}, (e) => ({
  zIndexPopup: e.zIndexPopupBase + 50
}));
var Tr = function(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var l = 0, o = Object.getOwnPropertySymbols(e); l < o.length; l++)
      t.indexOf(o[l]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[l]) && (n[o[l]] = e[o[l]]);
  return n;
};
const Rr = ht.Group, _t = oe({
  compatConfig: {
    MODE: 3
  },
  name: "ADropdownButton",
  inheritAttrs: !1,
  __ANT_BUTTON: !0,
  props: dt(Pr(), {
    trigger: "hover",
    placement: "bottomRight",
    type: "default"
  }),
  // emits: ['click', 'visibleChange', 'update:visible'],s
  slots: Object,
  setup(e, t) {
    let {
      slots: n,
      attrs: o,
      emit: l
    } = t;
    const r = (b) => {
      l("update:visible", b), l("visibleChange", b), l("update:open", b), l("openChange", b);
    }, {
      prefixCls: i,
      direction: a,
      getPopupContainer: u
    } = ot("dropdown", e), m = S(() => `${i.value}-button`), [s, d] = zo(i);
    return () => {
      var b, C;
      const x = g(g({}, e), o), {
        type: v = "default",
        disabled: c,
        danger: p,
        loading: w,
        htmlType: h,
        class: O = "",
        overlay: T = (b = n.overlay) === null || b === void 0 ? void 0 : b.call(n),
        trigger: N,
        align: P,
        open: z,
        visible: y,
        onVisibleChange: $,
        placement: _ = a.value === "rtl" ? "bottomLeft" : "bottomRight",
        href: D,
        title: B,
        icon: H = ((C = n.icon) === null || C === void 0 ? void 0 : C.call(n)) || f(fr, null, null),
        mouseEnterDelay: G,
        mouseLeaveDelay: te,
        overlayClassName: fe,
        overlayStyle: X,
        destroyPopupOnHide: W,
        onClick: L,
        "onUpdate:open": J
      } = x, I = Tr(x, ["type", "disabled", "danger", "loading", "htmlType", "class", "overlay", "trigger", "align", "open", "visible", "onVisibleChange", "placement", "href", "title", "icon", "mouseEnterDelay", "mouseLeaveDelay", "overlayClassName", "overlayStyle", "destroyPopupOnHide", "onClick", "onUpdate:open"]), K = {
        align: P,
        disabled: c,
        trigger: c ? [] : N,
        placement: _,
        getPopupContainer: u == null ? void 0 : u.value,
        onOpenChange: r,
        mouseEnterDelay: G,
        mouseLeaveDelay: te,
        open: z ?? y,
        overlayClassName: fe,
        overlayStyle: X,
        destroyPopupOnHide: W
      }, k = f(ht, {
        danger: p,
        type: v,
        disabled: c,
        loading: w,
        onClick: L,
        htmlType: h,
        href: D,
        title: B
      }, {
        default: n.default
      }), F = f(ht, {
        danger: p,
        type: v,
        icon: H
      }, null);
      return s(f(Rr, V(V({}, I), {}, {
        class: ee(m.value, O, d.value)
      }), {
        default: () => [n.leftButton ? n.leftButton({
          button: k
        }) : k, f(Ue, K, {
          default: () => [n.rightButton ? n.rightButton({
            button: F
          }) : F],
          overlay: () => T
        })]
      }));
    };
  }
});
var _r = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z" } }] }, name: "right", theme: "outlined" };
function Zn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(l) {
      return Object.getOwnPropertyDescriptor(n, l).enumerable;
    }))), o.forEach(function(l) {
      Nr(e, l, n[l]);
    });
  }
  return e;
}
function Nr(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var ct = function(t, n) {
  var o = Zn({}, t, n.attrs);
  return f(Ve, Zn({}, o, {
    icon: _r
  }), null);
};
ct.displayName = "RightOutlined";
ct.inheritAttrs = !1;
const Ue = oe({
  compatConfig: {
    MODE: 3
  },
  name: "ADropdown",
  inheritAttrs: !1,
  props: dt(Bo(), {
    mouseEnterDelay: 0.15,
    mouseLeaveDelay: 0.1,
    placement: "bottomLeft",
    trigger: "hover"
  }),
  // emits: ['visibleChange', 'update:visible'],
  slots: Object,
  setup(e, t) {
    let {
      slots: n,
      attrs: o,
      emit: l
    } = t;
    const {
      prefixCls: r,
      rootPrefixCls: i,
      direction: a,
      getPopupContainer: u
    } = ot("dropdown", e), [m, s] = zo(r);
    process.env.NODE_ENV !== "production" && [["visible", "open"], ["onVisibleChange", "onOpenChange"], ["onUpdate:visible", "onUpdate:open"]].forEach((c) => {
      let [p, w] = c;
      Hn(e[p] === void 0, "Dropdown", `\`${p}\` is deprecated which will be removed in next major version, please use \`${w}\` instead.`);
    });
    const d = S(() => {
      const {
        placement: c = "",
        transitionName: p
      } = e;
      return p !== void 0 ? p : c.includes("top") ? `${i.value}-slide-down` : `${i.value}-slide-up`;
    });
    pr({
      prefixCls: S(() => `${r.value}-menu`),
      expandIcon: S(() => f("span", {
        class: `${r.value}-menu-submenu-arrow`
      }, [f(ct, {
        class: `${r.value}-menu-submenu-arrow-icon`
      }, null)])),
      mode: S(() => "vertical"),
      selectable: S(() => !1),
      onClick: () => {
      },
      validator: (c) => {
        let {
          mode: p
        } = c;
        Hn(!p || p === "vertical", "Dropdown", `mode="${p}" is not supported for Dropdown's Menu.`);
      }
    });
    const b = () => {
      var c, p, w;
      const h = e.overlay || ((c = n.overlay) === null || c === void 0 ? void 0 : c.call(n)), O = Array.isArray(h) ? h[0] : h;
      if (!O)
        return null;
      const T = O.props || {};
      Ie(!T.mode || T.mode === "vertical", "Dropdown", `mode="${T.mode}" is not supported for Dropdown's Menu.`);
      const {
        selectable: N = !1,
        expandIcon: P = (w = (p = O.children) === null || p === void 0 ? void 0 : p.expandIcon) === null || w === void 0 ? void 0 : w.call(p)
      } = T, z = typeof P < "u" && gt(P) ? P : f("span", {
        class: `${r.value}-menu-submenu-arrow`
      }, [f(ct, {
        class: `${r.value}-menu-submenu-arrow-icon`
      }, null)]);
      return gt(O) ? Ot(O, {
        mode: "vertical",
        selectable: N,
        expandIcon: () => z
      }) : O;
    }, C = S(() => {
      const c = e.placement;
      if (!c)
        return a.value === "rtl" ? "bottomRight" : "bottomLeft";
      if (c.includes("Center")) {
        const p = c.slice(0, c.indexOf("Center"));
        return Ie(!c.includes("Center"), "Dropdown", `You are using '${c}' placement in Dropdown, which is deprecated. Try to use '${p}' instead.`), p;
      }
      return c;
    }), x = S(() => typeof e.visible == "boolean" ? e.visible : e.open), v = (c) => {
      l("update:visible", c), l("visibleChange", c), l("update:open", c), l("openChange", c);
    };
    return () => {
      var c, p;
      const {
        arrow: w,
        trigger: h,
        disabled: O,
        overlayClassName: T
      } = e, N = (c = n.default) === null || c === void 0 ? void 0 : c.call(n)[0], P = Ot(N, g({
        class: ee((p = N == null ? void 0 : N.props) === null || p === void 0 ? void 0 : p.class, {
          [`${r.value}-rtl`]: a.value === "rtl"
        }, `${r.value}-trigger`)
      }, O ? {
        disabled: O
      } : {})), z = ee(T, s.value, {
        [`${r.value}-rtl`]: a.value === "rtl"
      }), y = O ? [] : h;
      let $;
      y && y.includes("contextmenu") && ($ = !0);
      const _ = Pl({
        arrowPointAtCenter: typeof w == "object" && w.pointAtCenter,
        autoAdjustOverflow: !0
      }), D = $n(g(g(g({}, e), o), {
        visible: x.value,
        builtinPlacements: _,
        overlayClassName: z,
        arrow: !!w,
        alignPoint: $,
        prefixCls: r.value,
        getPopupContainer: u == null ? void 0 : u.value,
        transitionName: d.value,
        trigger: y,
        onVisibleChange: v,
        placement: C.value
      }), ["overlay", "onUpdate:visible"]);
      return m(f(dr, D, {
        default: () => [P],
        overlay: b
      }));
    };
  }
});
Ue.Button = _t;
var Dr = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" } }] }, name: "left", theme: "outlined" };
function eo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(l) {
      return Object.getOwnPropertyDescriptor(n, l).enumerable;
    }))), o.forEach(function(l) {
      kr(e, l, n[l]);
    });
  }
  return e;
}
function kr(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Nt = function(t, n) {
  var o = eo({}, t, n.attrs);
  return f(Ve, eo({}, o, {
    icon: Dr
  }), null);
};
Nt.displayName = "LeftOutlined";
Nt.inheritAttrs = !1;
Ue.Button = _t;
Ue.install = function(e) {
  return e.component(Ue.name, Ue), e.component(_t.name, _t), e;
};
var Br = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z" } }] }, name: "double-left", theme: "outlined" };
function to(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(l) {
      return Object.getOwnPropertyDescriptor(n, l).enumerable;
    }))), o.forEach(function(l) {
      zr(e, l, n[l]);
    });
  }
  return e;
}
function zr(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Dt = function(t, n) {
  var o = to({}, t, n.attrs);
  return f(Ve, to({}, o, {
    icon: Br
  }), null);
};
Dt.displayName = "DoubleLeftOutlined";
Dt.inheritAttrs = !1;
var Kr = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1A7.98 7.98 0 00188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1A7.98 7.98 0 00492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z" } }] }, name: "double-right", theme: "outlined" };
function no(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(l) {
      return Object.getOwnPropertyDescriptor(n, l).enumerable;
    }))), o.forEach(function(l) {
      Ar(e, l, n[l]);
    });
  }
  return e;
}
function Ar(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var kt = function(t, n) {
  var o = no({}, t, n.attrs);
  return f(Ve, no({}, o, {
    icon: Kr
  }), null);
};
kt.displayName = "DoubleRightOutlined";
kt.inheritAttrs = !1;
const Fr = oe({
  name: "MiniSelect",
  compatConfig: {
    MODE: 3
  },
  inheritAttrs: !1,
  props: _o(),
  Option: Et.Option,
  setup(e, t) {
    let {
      attrs: n,
      slots: o
    } = t;
    return () => {
      const l = g(g(g({}, e), {
        size: "small"
      }), n);
      return f(Et, l, o);
    };
  }
}), Mr = oe({
  name: "MiddleSelect",
  inheritAttrs: !1,
  props: _o(),
  Option: Et.Option,
  setup(e, t) {
    let {
      attrs: n,
      slots: o
    } = t;
    return () => {
      const l = g(g(g({}, e), {
        size: "middle"
      }), n);
      return f(Et, l, o);
    };
  }
}), Ye = oe({
  compatConfig: {
    MODE: 3
  },
  name: "Pager",
  inheritAttrs: !1,
  props: {
    rootPrefixCls: String,
    page: Number,
    active: {
      type: Boolean,
      default: void 0
    },
    last: {
      type: Boolean,
      default: void 0
    },
    locale: ae.object,
    showTitle: {
      type: Boolean,
      default: void 0
    },
    itemRender: {
      type: Function,
      default: () => {
      }
    },
    onClick: {
      type: Function
    },
    onKeypress: {
      type: Function
    }
  },
  eimt: ["click", "keypress"],
  setup(e, t) {
    let {
      emit: n,
      attrs: o
    } = t;
    const l = () => {
      n("click", e.page);
    }, r = (i) => {
      n("keypress", i, l, e.page);
    };
    return () => {
      const {
        showTitle: i,
        page: a,
        itemRender: u
      } = e, {
        class: m,
        style: s
      } = o, d = `${e.rootPrefixCls}-item`, b = ee(d, `${d}-${e.page}`, {
        [`${d}-active`]: e.active,
        [`${d}-disabled`]: !e.page
      }, m);
      return f("li", {
        onClick: l,
        onKeypress: r,
        title: i ? String(a) : null,
        tabindex: "0",
        class: b,
        style: s
      }, [u({
        page: a,
        type: "page",
        originalElement: f("a", {
          rel: "nofollow"
        }, [a])
      })]);
    };
  }
}), qe = {
  ZERO: 48,
  NINE: 57,
  NUMPAD_ZERO: 96,
  NUMPAD_NINE: 105,
  BACKSPACE: 8,
  DELETE: 46,
  ENTER: 13,
  ARROW_UP: 38,
  ARROW_DOWN: 40
}, jr = oe({
  compatConfig: {
    MODE: 3
  },
  props: {
    disabled: {
      type: Boolean,
      default: void 0
    },
    changeSize: Function,
    quickGo: Function,
    selectComponentClass: ae.any,
    current: Number,
    pageSizeOptions: ae.array.def(["10", "20", "50", "100"]),
    pageSize: Number,
    buildOptionText: Function,
    locale: ae.object,
    rootPrefixCls: String,
    selectPrefixCls: String,
    goButton: ae.any
  },
  setup(e) {
    const t = se(""), n = S(() => !t.value || isNaN(t.value) ? void 0 : Number(t.value)), o = (u) => `${u.value} ${e.locale.items_per_page}`, l = (u) => {
      const {
        value: m
      } = u.target;
      t.value !== m && (t.value = m);
    }, r = (u) => {
      const {
        goButton: m,
        quickGo: s,
        rootPrefixCls: d
      } = e;
      if (!(m || t.value === ""))
        if (u.relatedTarget && (u.relatedTarget.className.indexOf(`${d}-item-link`) >= 0 || u.relatedTarget.className.indexOf(`${d}-item`) >= 0)) {
          t.value = "";
          return;
        } else
          s(n.value), t.value = "";
    }, i = (u) => {
      t.value !== "" && (u.keyCode === qe.ENTER || u.type === "click") && (e.quickGo(n.value), t.value = "");
    }, a = S(() => {
      const {
        pageSize: u,
        pageSizeOptions: m
      } = e;
      return m.some((s) => s.toString() === u.toString()) ? m : m.concat([u.toString()]).sort((s, d) => {
        const b = isNaN(Number(s)) ? 0 : Number(s), C = isNaN(Number(d)) ? 0 : Number(d);
        return b - C;
      });
    });
    return () => {
      const {
        rootPrefixCls: u,
        locale: m,
        changeSize: s,
        quickGo: d,
        goButton: b,
        selectComponentClass: C,
        selectPrefixCls: x,
        pageSize: v,
        disabled: c
      } = e, p = `${u}-options`;
      let w = null, h = null, O = null;
      if (!s && !d)
        return null;
      if (s && C) {
        const T = e.buildOptionText || o, N = a.value.map((P, z) => f(C.Option, {
          key: z,
          value: P
        }, {
          default: () => [T({
            value: P
          })]
        }));
        w = f(C, {
          disabled: c,
          prefixCls: x,
          showSearch: !1,
          class: `${p}-size-changer`,
          optionLabelProp: "children",
          value: (v || a.value[0]).toString(),
          onChange: (P) => s(Number(P)),
          getPopupContainer: (P) => P.parentNode
        }, {
          default: () => [N]
        });
      }
      return d && (b && (O = typeof b == "boolean" ? f("button", {
        type: "button",
        onClick: i,
        onKeyup: i,
        disabled: c,
        class: `${p}-quick-jumper-button`
      }, [m.jump_to_confirm]) : f("span", {
        onClick: i,
        onKeyup: i
      }, [b])), h = f("div", {
        class: `${p}-quick-jumper`
      }, [m.jump_to, f(To, {
        disabled: c,
        type: "text",
        value: t.value,
        onInput: l,
        onChange: l,
        onKeyup: i,
        onBlur: r
      }, null), m.page, O])), f("li", {
        class: `${p}`
      }, [w, h]);
    };
  }
}), Lr = {
  // Options.jsx
  items_per_page: "条/页",
  jump_to: "跳至",
  jump_to_confirm: "确定",
  page: "页",
  // Pagination.jsx
  prev_page: "上一页",
  next_page: "下一页",
  prev_5: "向前 5 页",
  next_5: "向后 5 页",
  prev_3: "向前 3 页",
  next_3: "向后 3 页"
};
var Hr = function(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var l = 0, o = Object.getOwnPropertySymbols(e); l < o.length; l++)
      t.indexOf(o[l]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[l]) && (n[o[l]] = e[o[l]]);
  return n;
};
function Wr(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}
function Vr(e) {
  let {
    originalElement: t
  } = e;
  return t;
}
function Le(e, t, n) {
  const o = typeof e > "u" ? t.statePageSize : e;
  return Math.floor((n.total - 1) / o) + 1;
}
const Xr = oe({
  compatConfig: {
    MODE: 3
  },
  name: "Pagination",
  mixins: [Ol],
  inheritAttrs: !1,
  props: {
    disabled: {
      type: Boolean,
      default: void 0
    },
    prefixCls: ae.string.def("rc-pagination"),
    selectPrefixCls: ae.string.def("rc-select"),
    current: Number,
    defaultCurrent: ae.number.def(1),
    total: ae.number.def(0),
    pageSize: Number,
    defaultPageSize: ae.number.def(10),
    hideOnSinglePage: {
      type: Boolean,
      default: !1
    },
    showSizeChanger: {
      type: Boolean,
      default: void 0
    },
    showLessItems: {
      type: Boolean,
      default: !1
    },
    // showSizeChange: PropTypes.func.def(noop),
    selectComponentClass: ae.any,
    showPrevNextJumpers: {
      type: Boolean,
      default: !0
    },
    showQuickJumper: ae.oneOfType([ae.looseBool, ae.object]).def(!1),
    showTitle: {
      type: Boolean,
      default: !0
    },
    pageSizeOptions: ae.arrayOf(ae.oneOfType([ae.number, ae.string])),
    buildOptionText: Function,
    showTotal: Function,
    simple: {
      type: Boolean,
      default: void 0
    },
    locale: ae.object.def(Lr),
    itemRender: ae.func.def(Vr),
    prevIcon: ae.any,
    nextIcon: ae.any,
    jumpPrevIcon: ae.any,
    jumpNextIcon: ae.any,
    totalBoundaryShowSizeChanger: ae.number.def(50)
  },
  data() {
    const e = this.$props;
    let t = Wn([this.current, this.defaultCurrent]);
    const n = Wn([this.pageSize, this.defaultPageSize]);
    return t = Math.min(t, Le(n, void 0, e)), {
      stateCurrent: t,
      stateCurrentInputValue: t,
      statePageSize: n
    };
  },
  watch: {
    current(e) {
      this.setState({
        stateCurrent: e,
        stateCurrentInputValue: e
      });
    },
    pageSize(e) {
      const t = {};
      let n = this.stateCurrent;
      const o = Le(e, this.$data, this.$props);
      n = n > o ? o : n, pt(this, "current") || (t.stateCurrent = n, t.stateCurrentInputValue = n), t.statePageSize = e, this.setState(t);
    },
    stateCurrent(e, t) {
      this.$nextTick(() => {
        if (this.$refs.paginationNode) {
          const n = this.$refs.paginationNode.querySelector(`.${this.prefixCls}-item-${t}`);
          n && document.activeElement === n && n.blur();
        }
      });
    },
    total() {
      const e = {}, t = Le(this.pageSize, this.$data, this.$props);
      if (pt(this, "current")) {
        const n = Math.min(this.current, t);
        e.stateCurrent = n, e.stateCurrentInputValue = n;
      } else {
        let n = this.stateCurrent;
        n === 0 && t > 0 ? n = 1 : n = Math.min(this.stateCurrent, t), e.stateCurrent = n;
      }
      this.setState(e);
    }
  },
  methods: {
    getJumpPrevPage() {
      return Math.max(1, this.stateCurrent - (this.showLessItems ? 3 : 5));
    },
    getJumpNextPage() {
      return Math.min(Le(void 0, this.$data, this.$props), this.stateCurrent + (this.showLessItems ? 3 : 5));
    },
    getItemIcon(e, t) {
      const {
        prefixCls: n
      } = this.$props;
      return Il(this, e, this.$props) || f("button", {
        type: "button",
        "aria-label": t,
        class: `${n}-item-link`
      }, null);
    },
    getValidValue(e) {
      const t = e.target.value, n = Le(void 0, this.$data, this.$props), {
        stateCurrentInputValue: o
      } = this.$data;
      let l;
      return t === "" ? l = t : isNaN(Number(t)) ? l = o : t >= n ? l = n : l = Number(t), l;
    },
    isValid(e) {
      return Wr(e) && e !== this.stateCurrent;
    },
    shouldDisplayQuickJumper() {
      const {
        showQuickJumper: e,
        pageSize: t,
        total: n
      } = this.$props;
      return n <= t ? !1 : e;
    },
    // calculatePage (p) {
    //   let pageSize = p
    //   if (typeof pageSize === 'undefined') {
    //     pageSize = this.statePageSize
    //   }
    //   return Math.floor((this.total - 1) / pageSize) + 1
    // },
    handleKeyDown(e) {
      (e.keyCode === qe.ARROW_UP || e.keyCode === qe.ARROW_DOWN) && e.preventDefault();
    },
    handleKeyUp(e) {
      const t = this.getValidValue(e), n = this.stateCurrentInputValue;
      t !== n && this.setState({
        stateCurrentInputValue: t
      }), e.keyCode === qe.ENTER ? this.handleChange(t) : e.keyCode === qe.ARROW_UP ? this.handleChange(t - 1) : e.keyCode === qe.ARROW_DOWN && this.handleChange(t + 1);
    },
    changePageSize(e) {
      let t = this.stateCurrent;
      const n = t, o = Le(e, this.$data, this.$props);
      t = t > o ? o : t, o === 0 && (t = this.stateCurrent), typeof e == "number" && (pt(this, "pageSize") || this.setState({
        statePageSize: e
      }), pt(this, "current") || this.setState({
        stateCurrent: t,
        stateCurrentInputValue: t
      })), this.__emit("update:pageSize", e), t !== n && this.__emit("update:current", t), this.__emit("showSizeChange", t, e), this.__emit("change", t, e);
    },
    handleChange(e) {
      const {
        disabled: t
      } = this.$props;
      let n = e;
      if (this.isValid(n) && !t) {
        const o = Le(void 0, this.$data, this.$props);
        return n > o ? n = o : n < 1 && (n = 1), pt(this, "current") || this.setState({
          stateCurrent: n,
          stateCurrentInputValue: n
        }), this.__emit("update:current", n), this.__emit("change", n, this.statePageSize), n;
      }
      return this.stateCurrent;
    },
    prev() {
      this.hasPrev() && this.handleChange(this.stateCurrent - 1);
    },
    next() {
      this.hasNext() && this.handleChange(this.stateCurrent + 1);
    },
    jumpPrev() {
      this.handleChange(this.getJumpPrevPage());
    },
    jumpNext() {
      this.handleChange(this.getJumpNextPage());
    },
    hasPrev() {
      return this.stateCurrent > 1;
    },
    hasNext() {
      return this.stateCurrent < Le(void 0, this.$data, this.$props);
    },
    getShowSizeChanger() {
      const {
        showSizeChanger: e,
        total: t,
        totalBoundaryShowSizeChanger: n
      } = this.$props;
      return typeof e < "u" ? e : t > n;
    },
    runIfEnter(e, t) {
      if (e.key === "Enter" || e.charCode === 13) {
        e.preventDefault();
        for (var n = arguments.length, o = new Array(n > 2 ? n - 2 : 0), l = 2; l < n; l++)
          o[l - 2] = arguments[l];
        t(...o);
      }
    },
    runIfEnterPrev(e) {
      this.runIfEnter(e, this.prev);
    },
    runIfEnterNext(e) {
      this.runIfEnter(e, this.next);
    },
    runIfEnterJumpPrev(e) {
      this.runIfEnter(e, this.jumpPrev);
    },
    runIfEnterJumpNext(e) {
      this.runIfEnter(e, this.jumpNext);
    },
    handleGoTO(e) {
      (e.keyCode === qe.ENTER || e.type === "click") && this.handleChange(this.stateCurrentInputValue);
    },
    renderPrev(e) {
      const {
        itemRender: t
      } = this.$props, n = t({
        page: e,
        type: "prev",
        originalElement: this.getItemIcon("prevIcon", "prev page")
      }), o = !this.hasPrev();
      return gt(n) ? Ot(n, o ? {
        disabled: o
      } : {}) : n;
    },
    renderNext(e) {
      const {
        itemRender: t
      } = this.$props, n = t({
        page: e,
        type: "next",
        originalElement: this.getItemIcon("nextIcon", "next page")
      }), o = !this.hasNext();
      return gt(n) ? Ot(n, o ? {
        disabled: o
      } : {}) : n;
    }
  },
  render() {
    const {
      prefixCls: e,
      disabled: t,
      hideOnSinglePage: n,
      total: o,
      locale: l,
      showQuickJumper: r,
      showLessItems: i,
      showTitle: a,
      showTotal: u,
      simple: m,
      itemRender: s,
      showPrevNextJumpers: d,
      jumpPrevIcon: b,
      jumpNextIcon: C,
      selectComponentClass: x,
      selectPrefixCls: v,
      pageSizeOptions: c
    } = this.$props, {
      stateCurrent: p,
      statePageSize: w
    } = this, h = El(this.$attrs).extraAttrs, {
      class: O
    } = h, T = Hr(h, ["class"]);
    if (n === !0 && this.total <= w)
      return null;
    const N = Le(void 0, this.$data, this.$props), P = [];
    let z = null, y = null, $ = null, _ = null, D = null;
    const B = r && r.goButton, H = i ? 1 : 2, G = p - 1 > 0 ? p - 1 : 0, te = p + 1 < N ? p + 1 : N, fe = this.hasPrev(), X = this.hasNext();
    if (m)
      return B && (typeof B == "boolean" ? D = f("button", {
        type: "button",
        onClick: this.handleGoTO,
        onKeyup: this.handleGoTO
      }, [l.jump_to_confirm]) : D = f("span", {
        onClick: this.handleGoTO,
        onKeyup: this.handleGoTO
      }, [B]), D = f("li", {
        title: a ? `${l.jump_to}${p}/${N}` : null,
        class: `${e}-simple-pager`
      }, [D])), f("ul", V({
        class: ee(`${e} ${e}-simple`, {
          [`${e}-disabled`]: t
        }, O)
      }, T), [f("li", {
        title: a ? l.prev_page : null,
        onClick: this.prev,
        tabindex: fe ? 0 : null,
        onKeypress: this.runIfEnterPrev,
        class: ee(`${e}-prev`, {
          [`${e}-disabled`]: !fe
        }),
        "aria-disabled": !fe
      }, [this.renderPrev(G)]), f("li", {
        title: a ? `${p}/${N}` : null,
        class: `${e}-simple-pager`
      }, [f(To, {
        type: "text",
        value: this.stateCurrentInputValue,
        disabled: t,
        onKeydown: this.handleKeyDown,
        onKeyup: this.handleKeyUp,
        onInput: this.handleKeyUp,
        onChange: this.handleKeyUp,
        size: "3"
      }, null), f("span", {
        class: `${e}-slash`
      }, [vt("／")]), N]), f("li", {
        title: a ? l.next_page : null,
        onClick: this.next,
        tabindex: X ? 0 : null,
        onKeypress: this.runIfEnterNext,
        class: ee(`${e}-next`, {
          [`${e}-disabled`]: !X
        }),
        "aria-disabled": !X
      }, [this.renderNext(te)]), D]);
    if (N <= 3 + H * 2) {
      const K = {
        locale: l,
        rootPrefixCls: e,
        showTitle: a,
        itemRender: s,
        onClick: this.handleChange,
        onKeypress: this.runIfEnter
      };
      N || P.push(f(Ye, V(V({}, K), {}, {
        key: "noPager",
        page: 1,
        class: `${e}-item-disabled`
      }), null));
      for (let k = 1; k <= N; k += 1) {
        const F = p === k;
        P.push(f(Ye, V(V({}, K), {}, {
          key: k,
          page: k,
          active: F
        }), null));
      }
    } else {
      const K = i ? l.prev_3 : l.prev_5, k = i ? l.next_3 : l.next_5;
      d && (z = f("li", {
        title: this.showTitle ? K : null,
        key: "prev",
        onClick: this.jumpPrev,
        tabindex: "0",
        onKeypress: this.runIfEnterJumpPrev,
        class: ee(`${e}-jump-prev`, {
          [`${e}-jump-prev-custom-icon`]: !!b
        })
      }, [s({
        page: this.getJumpPrevPage(),
        type: "jump-prev",
        originalElement: this.getItemIcon("jumpPrevIcon", "prev page")
      })]), y = f("li", {
        title: this.showTitle ? k : null,
        key: "next",
        tabindex: "0",
        onClick: this.jumpNext,
        onKeypress: this.runIfEnterJumpNext,
        class: ee(`${e}-jump-next`, {
          [`${e}-jump-next-custom-icon`]: !!C
        })
      }, [s({
        page: this.getJumpNextPage(),
        type: "jump-next",
        originalElement: this.getItemIcon("jumpNextIcon", "next page")
      })])), _ = f(Ye, {
        locale: l,
        last: !0,
        rootPrefixCls: e,
        onClick: this.handleChange,
        onKeypress: this.runIfEnter,
        key: N,
        page: N,
        active: !1,
        showTitle: a,
        itemRender: s
      }, null), $ = f(Ye, {
        locale: l,
        rootPrefixCls: e,
        onClick: this.handleChange,
        onKeypress: this.runIfEnter,
        key: 1,
        page: 1,
        active: !1,
        showTitle: a,
        itemRender: s
      }, null);
      let F = Math.max(1, p - H), j = Math.min(p + H, N);
      p - 1 <= H && (j = 1 + H * 2), N - p <= H && (F = N - H * 2);
      for (let ie = F; ie <= j; ie += 1) {
        const Y = p === ie;
        P.push(f(Ye, {
          locale: l,
          rootPrefixCls: e,
          onClick: this.handleChange,
          onKeypress: this.runIfEnter,
          key: ie,
          page: ie,
          active: Y,
          showTitle: a,
          itemRender: s
        }, null));
      }
      p - 1 >= H * 2 && p !== 3 && (P[0] = f(Ye, {
        locale: l,
        rootPrefixCls: e,
        onClick: this.handleChange,
        onKeypress: this.runIfEnter,
        key: F,
        page: F,
        class: `${e}-item-after-jump-prev`,
        active: !1,
        showTitle: this.showTitle,
        itemRender: s
      }, null), P.unshift(z)), N - p >= H * 2 && p !== N - 2 && (P[P.length - 1] = f(Ye, {
        locale: l,
        rootPrefixCls: e,
        onClick: this.handleChange,
        onKeypress: this.runIfEnter,
        key: j,
        page: j,
        class: `${e}-item-before-jump-next`,
        active: !1,
        showTitle: this.showTitle,
        itemRender: s
      }, null), P.push(y)), F !== 1 && P.unshift($), j !== N && P.push(_);
    }
    let W = null;
    u && (W = f("li", {
      class: `${e}-total-text`
    }, [u(o, [o === 0 ? 0 : (p - 1) * w + 1, p * w > o ? o : p * w])]));
    const L = !fe || !N, J = !X || !N, I = this.buildOptionText || this.$slots.buildOptionText;
    return f("ul", V(V({
      unselectable: "on",
      ref: "paginationNode"
    }, T), {}, {
      class: ee({
        [`${e}`]: !0,
        [`${e}-disabled`]: t
      }, O)
    }), [W, f("li", {
      title: a ? l.prev_page : null,
      onClick: this.prev,
      tabindex: L ? null : 0,
      onKeypress: this.runIfEnterPrev,
      class: ee(`${e}-prev`, {
        [`${e}-disabled`]: L
      }),
      "aria-disabled": L
    }, [this.renderPrev(G)]), P, f("li", {
      title: a ? l.next_page : null,
      onClick: this.next,
      tabindex: J ? null : 0,
      onKeypress: this.runIfEnterNext,
      class: ee(`${e}-next`, {
        [`${e}-disabled`]: J
      }),
      "aria-disabled": J
    }, [this.renderNext(te)]), f(jr, {
      disabled: t,
      locale: l,
      rootPrefixCls: e,
      selectComponentClass: x,
      selectPrefixCls: v,
      changeSize: this.getShowSizeChanger() ? this.changePageSize : null,
      current: p,
      pageSize: w,
      pageSizeOptions: c,
      buildOptionText: I || null,
      quickGo: this.shouldDisplayQuickJumper() ? this.handleChange : null,
      goButton: B
    }, null)]);
  }
}), Ur = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-disabled`]: {
      "&, &:hover": {
        cursor: "not-allowed",
        [`${t}-item-link`]: {
          color: e.colorTextDisabled,
          cursor: "not-allowed"
        }
      },
      "&:focus-visible": {
        cursor: "not-allowed",
        [`${t}-item-link`]: {
          color: e.colorTextDisabled,
          cursor: "not-allowed"
        }
      }
    },
    [`&${t}-disabled`]: {
      cursor: "not-allowed",
      [`&${t}-mini`]: {
        [`
          &:hover ${t}-item:not(${t}-item-active),
          &:active ${t}-item:not(${t}-item-active),
          &:hover ${t}-item-link,
          &:active ${t}-item-link
        `]: {
          backgroundColor: "transparent"
        }
      },
      [`${t}-item`]: {
        cursor: "not-allowed",
        "&:hover, &:active": {
          backgroundColor: "transparent"
        },
        a: {
          color: e.colorTextDisabled,
          backgroundColor: "transparent",
          border: "none",
          cursor: "not-allowed"
        },
        "&-active": {
          borderColor: e.colorBorder,
          backgroundColor: e.paginationItemDisabledBgActive,
          "&:hover, &:active": {
            backgroundColor: e.paginationItemDisabledBgActive
          },
          a: {
            color: e.paginationItemDisabledColorActive
          }
        }
      },
      [`${t}-item-link`]: {
        color: e.colorTextDisabled,
        cursor: "not-allowed",
        "&:hover, &:active": {
          backgroundColor: "transparent"
        },
        [`${t}-simple&`]: {
          backgroundColor: "transparent",
          "&:hover, &:active": {
            backgroundColor: "transparent"
          }
        }
      },
      [`${t}-simple-pager`]: {
        color: e.colorTextDisabled
      },
      [`${t}-jump-prev, ${t}-jump-next`]: {
        [`${t}-item-link-icon`]: {
          opacity: 0
        },
        [`${t}-item-ellipsis`]: {
          opacity: 1
        }
      }
    },
    [`&${t}-simple`]: {
      [`${t}-prev, ${t}-next`]: {
        [`&${t}-disabled ${t}-item-link`]: {
          "&:hover, &:active": {
            backgroundColor: "transparent"
          }
        }
      }
    }
  };
}, Gr = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`&${t}-mini ${t}-total-text, &${t}-mini ${t}-simple-pager`]: {
      height: e.paginationItemSizeSM,
      lineHeight: `${e.paginationItemSizeSM}px`
    },
    [`&${t}-mini ${t}-item`]: {
      minWidth: e.paginationItemSizeSM,
      height: e.paginationItemSizeSM,
      margin: 0,
      lineHeight: `${e.paginationItemSizeSM - 2}px`
    },
    [`&${t}-mini ${t}-item:not(${t}-item-active)`]: {
      backgroundColor: "transparent",
      borderColor: "transparent",
      "&:hover": {
        backgroundColor: e.colorBgTextHover
      },
      "&:active": {
        backgroundColor: e.colorBgTextActive
      }
    },
    [`&${t}-mini ${t}-prev, &${t}-mini ${t}-next`]: {
      minWidth: e.paginationItemSizeSM,
      height: e.paginationItemSizeSM,
      margin: 0,
      lineHeight: `${e.paginationItemSizeSM}px`,
      [`&:hover ${t}-item-link`]: {
        backgroundColor: e.colorBgTextHover
      },
      [`&:active ${t}-item-link`]: {
        backgroundColor: e.colorBgTextActive
      },
      [`&${t}-disabled:hover ${t}-item-link`]: {
        backgroundColor: "transparent"
      }
    },
    [`
    &${t}-mini ${t}-prev ${t}-item-link,
    &${t}-mini ${t}-next ${t}-item-link
    `]: {
      backgroundColor: "transparent",
      borderColor: "transparent",
      "&::after": {
        height: e.paginationItemSizeSM,
        lineHeight: `${e.paginationItemSizeSM}px`
      }
    },
    [`&${t}-mini ${t}-jump-prev, &${t}-mini ${t}-jump-next`]: {
      height: e.paginationItemSizeSM,
      marginInlineEnd: 0,
      lineHeight: `${e.paginationItemSizeSM}px`
    },
    [`&${t}-mini ${t}-options`]: {
      marginInlineStart: e.paginationMiniOptionsMarginInlineStart,
      "&-size-changer": {
        top: e.paginationMiniOptionsSizeChangerTop
      },
      "&-quick-jumper": {
        height: e.paginationItemSizeSM,
        lineHeight: `${e.paginationItemSizeSM}px`,
        input: g(g({}, ir(e)), {
          width: e.paginationMiniQuickJumperInputWidth,
          height: e.controlHeightSM
        })
      }
    }
  };
}, Jr = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`
    &${t}-simple ${t}-prev,
    &${t}-simple ${t}-next
    `]: {
      height: e.paginationItemSizeSM,
      lineHeight: `${e.paginationItemSizeSM}px`,
      verticalAlign: "top",
      [`${t}-item-link`]: {
        height: e.paginationItemSizeSM,
        backgroundColor: "transparent",
        border: 0,
        "&:hover": {
          backgroundColor: e.colorBgTextHover
        },
        "&:active": {
          backgroundColor: e.colorBgTextActive
        },
        "&::after": {
          height: e.paginationItemSizeSM,
          lineHeight: `${e.paginationItemSizeSM}px`
        }
      }
    },
    [`&${t}-simple ${t}-simple-pager`]: {
      display: "inline-block",
      height: e.paginationItemSizeSM,
      marginInlineEnd: e.marginXS,
      input: {
        boxSizing: "border-box",
        height: "100%",
        marginInlineEnd: e.marginXS,
        padding: `0 ${e.paginationItemPaddingInline}px`,
        textAlign: "center",
        backgroundColor: e.paginationItemInputBg,
        border: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,
        borderRadius: e.borderRadius,
        outline: "none",
        transition: `border-color ${e.motionDurationMid}`,
        color: "inherit",
        "&:hover": {
          borderColor: e.colorPrimary
        },
        "&:focus": {
          borderColor: e.colorPrimaryHover,
          boxShadow: `${e.inputOutlineOffset}px 0 ${e.controlOutlineWidth}px ${e.controlOutline}`
        },
        "&[disabled]": {
          color: e.colorTextDisabled,
          backgroundColor: e.colorBgContainerDisabled,
          borderColor: e.colorBorder,
          cursor: "not-allowed"
        }
      }
    }
  };
}, Yr = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-jump-prev, ${t}-jump-next`]: {
      outline: 0,
      [`${t}-item-container`]: {
        position: "relative",
        [`${t}-item-link-icon`]: {
          color: e.colorPrimary,
          fontSize: e.fontSizeSM,
          opacity: 0,
          transition: `all ${e.motionDurationMid}`,
          "&-svg": {
            top: 0,
            insetInlineEnd: 0,
            bottom: 0,
            insetInlineStart: 0,
            margin: "auto"
          }
        },
        [`${t}-item-ellipsis`]: {
          position: "absolute",
          top: 0,
          insetInlineEnd: 0,
          bottom: 0,
          insetInlineStart: 0,
          display: "block",
          margin: "auto",
          color: e.colorTextDisabled,
          fontFamily: "Arial, Helvetica, sans-serif",
          letterSpacing: e.paginationEllipsisLetterSpacing,
          textAlign: "center",
          textIndent: e.paginationEllipsisTextIndent,
          opacity: 1,
          transition: `all ${e.motionDurationMid}`
        }
      },
      "&:hover": {
        [`${t}-item-link-icon`]: {
          opacity: 1
        },
        [`${t}-item-ellipsis`]: {
          opacity: 0
        }
      },
      "&:focus-visible": g({
        [`${t}-item-link-icon`]: {
          opacity: 1
        },
        [`${t}-item-ellipsis`]: {
          opacity: 0
        }
      }, Vn(e))
    },
    [`
    ${t}-prev,
    ${t}-jump-prev,
    ${t}-jump-next
    `]: {
      marginInlineEnd: e.marginXS
    },
    [`
    ${t}-prev,
    ${t}-next,
    ${t}-jump-prev,
    ${t}-jump-next
    `]: {
      display: "inline-block",
      minWidth: e.paginationItemSize,
      height: e.paginationItemSize,
      color: e.colorText,
      fontFamily: e.paginationFontFamily,
      lineHeight: `${e.paginationItemSize}px`,
      textAlign: "center",
      verticalAlign: "middle",
      listStyle: "none",
      borderRadius: e.borderRadius,
      cursor: "pointer",
      transition: `all ${e.motionDurationMid}`
    },
    [`${t}-prev, ${t}-next`]: {
      fontFamily: "Arial, Helvetica, sans-serif",
      outline: 0,
      button: {
        color: e.colorText,
        cursor: "pointer",
        userSelect: "none"
      },
      [`${t}-item-link`]: {
        display: "block",
        width: "100%",
        height: "100%",
        padding: 0,
        fontSize: e.fontSizeSM,
        textAlign: "center",
        backgroundColor: "transparent",
        border: `${e.lineWidth}px ${e.lineType} transparent`,
        borderRadius: e.borderRadius,
        outline: "none",
        transition: `all ${e.motionDurationMid}`
      },
      [`&:focus-visible ${t}-item-link`]: g({}, Vn(e)),
      [`&:hover ${t}-item-link`]: {
        backgroundColor: e.colorBgTextHover
      },
      [`&:active ${t}-item-link`]: {
        backgroundColor: e.colorBgTextActive
      },
      [`&${t}-disabled:hover`]: {
        [`${t}-item-link`]: {
          backgroundColor: "transparent"
        }
      }
    },
    [`${t}-slash`]: {
      marginInlineEnd: e.paginationSlashMarginInlineEnd,
      marginInlineStart: e.paginationSlashMarginInlineStart
    },
    [`${t}-options`]: {
      display: "inline-block",
      marginInlineStart: e.margin,
      verticalAlign: "middle",
      "&-size-changer.-select": {
        display: "inline-block",
        width: "auto"
      },
      "&-quick-jumper": {
        display: "inline-block",
        height: e.controlHeight,
        marginInlineStart: e.marginXS,
        lineHeight: `${e.controlHeight}px`,
        verticalAlign: "top",
        input: g(g({}, sr(e)), {
          width: e.controlHeightLG * 1.25,
          height: e.controlHeight,
          boxSizing: "border-box",
          margin: 0,
          marginInlineStart: e.marginXS,
          marginInlineEnd: e.marginXS
        })
      }
    }
  };
}, qr = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-item`]: g(g({
      display: "inline-block",
      minWidth: e.paginationItemSize,
      height: e.paginationItemSize,
      marginInlineEnd: e.marginXS,
      fontFamily: e.paginationFontFamily,
      lineHeight: `${e.paginationItemSize - 2}px`,
      textAlign: "center",
      verticalAlign: "middle",
      listStyle: "none",
      backgroundColor: "transparent",
      border: `${e.lineWidth}px ${e.lineType} transparent`,
      borderRadius: e.borderRadius,
      outline: 0,
      cursor: "pointer",
      userSelect: "none",
      a: {
        display: "block",
        padding: `0 ${e.paginationItemPaddingInline}px`,
        color: e.colorText,
        transition: "none",
        "&:hover": {
          textDecoration: "none"
        }
      },
      [`&:not(${t}-item-active)`]: {
        "&:hover": {
          transition: `all ${e.motionDurationMid}`,
          backgroundColor: e.colorBgTextHover
        },
        "&:active": {
          backgroundColor: e.colorBgTextActive
        }
      }
    }, ln(e)), {
      "&-active": {
        fontWeight: e.paginationFontWeightActive,
        backgroundColor: e.paginationItemBgActive,
        borderColor: e.colorPrimary,
        a: {
          color: e.colorPrimary
        },
        "&:hover": {
          borderColor: e.colorPrimaryHover
        },
        "&:hover a": {
          color: e.colorPrimaryHover
        }
      }
    })
  };
}, Qr = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: g(g(g(g(g(g(g(g({}, zt(e)), {
      "ul, ol": {
        margin: 0,
        padding: 0,
        listStyle: "none"
      },
      "&::after": {
        display: "block",
        clear: "both",
        height: 0,
        overflow: "hidden",
        visibility: "hidden",
        content: '""'
      },
      [`${t}-total-text`]: {
        display: "inline-block",
        height: e.paginationItemSize,
        marginInlineEnd: e.marginXS,
        lineHeight: `${e.paginationItemSize - 2}px`,
        verticalAlign: "middle"
      }
    }), qr(e)), Yr(e)), Jr(e)), Gr(e)), Ur(e)), {
      // media query style
      [`@media only screen and (max-width: ${e.screenLG}px)`]: {
        [`${t}-item`]: {
          "&-after-jump-prev, &-before-jump-next": {
            display: "none"
          }
        }
      },
      [`@media only screen and (max-width: ${e.screenSM}px)`]: {
        [`${t}-options`]: {
          display: "none"
        }
      }
    }),
    // rtl style
    [`&${e.componentCls}-rtl`]: {
      direction: "rtl"
    }
  };
}, Zr = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}${t}-disabled`]: {
      "&, &:hover": {
        [`${t}-item-link`]: {
          borderColor: e.colorBorder
        }
      },
      "&:focus-visible": {
        [`${t}-item-link`]: {
          borderColor: e.colorBorder
        }
      },
      [`${t}-item, ${t}-item-link`]: {
        backgroundColor: e.colorBgContainerDisabled,
        borderColor: e.colorBorder,
        [`&:hover:not(${t}-item-active)`]: {
          backgroundColor: e.colorBgContainerDisabled,
          borderColor: e.colorBorder,
          a: {
            color: e.colorTextDisabled
          }
        },
        [`&${t}-item-active`]: {
          backgroundColor: e.paginationItemDisabledBgActive
        }
      },
      [`${t}-prev, ${t}-next`]: {
        "&:hover button": {
          backgroundColor: e.colorBgContainerDisabled,
          borderColor: e.colorBorder,
          color: e.colorTextDisabled
        },
        [`${t}-item-link`]: {
          backgroundColor: e.colorBgContainerDisabled,
          borderColor: e.colorBorder
        }
      }
    },
    [t]: {
      [`${t}-prev, ${t}-next`]: {
        "&:hover button": {
          borderColor: e.colorPrimaryHover,
          backgroundColor: e.paginationItemBg
        },
        [`${t}-item-link`]: {
          backgroundColor: e.paginationItemLinkBg,
          borderColor: e.colorBorder
        },
        [`&:hover ${t}-item-link`]: {
          borderColor: e.colorPrimary,
          backgroundColor: e.paginationItemBg,
          color: e.colorPrimary
        },
        [`&${t}-disabled`]: {
          [`${t}-item-link`]: {
            borderColor: e.colorBorder,
            color: e.colorTextDisabled
          }
        }
      },
      [`${t}-item`]: {
        backgroundColor: e.paginationItemBg,
        border: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,
        [`&:hover:not(${t}-item-active)`]: {
          borderColor: e.colorPrimary,
          backgroundColor: e.paginationItemBg,
          a: {
            color: e.colorPrimary
          }
        },
        "&-active": {
          borderColor: e.colorPrimary
        }
      }
    }
  };
}, ea = Cn("Pagination", (e) => {
  const t = Sn(e, {
    paginationItemSize: e.controlHeight,
    paginationFontFamily: e.fontFamily,
    paginationItemBg: e.colorBgContainer,
    paginationItemBgActive: e.colorBgContainer,
    paginationFontWeightActive: e.fontWeightStrong,
    paginationItemSizeSM: e.controlHeightSM,
    paginationItemInputBg: e.colorBgContainer,
    paginationMiniOptionsSizeChangerTop: 0,
    paginationItemDisabledBgActive: e.controlItemBgActiveDisabled,
    paginationItemDisabledColorActive: e.colorTextDisabled,
    paginationItemLinkBg: e.colorBgContainer,
    inputOutlineOffset: "0 0",
    paginationMiniOptionsMarginInlineStart: e.marginXXS / 2,
    paginationMiniQuickJumperInputWidth: e.controlHeightLG * 1.1,
    paginationItemPaddingInline: e.marginXXS * 1.5,
    paginationEllipsisLetterSpacing: e.marginXXS / 2,
    paginationSlashMarginInlineStart: e.marginXXS,
    paginationSlashMarginInlineEnd: e.marginSM,
    paginationEllipsisTextIndent: "0.13em"
    // magic for ui experience
  }, ar(e));
  return [Qr(t), e.wireframe && Zr(t)];
});
var ta = function(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var l = 0, o = Object.getOwnPropertySymbols(e); l < o.length; l++)
      t.indexOf(o[l]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[l]) && (n[o[l]] = e[o[l]]);
  return n;
};
const na = () => ({
  total: Number,
  defaultCurrent: Number,
  disabled: re(),
  current: Number,
  defaultPageSize: Number,
  pageSize: Number,
  hideOnSinglePage: re(),
  showSizeChanger: re(),
  pageSizeOptions: Ne(),
  buildOptionText: ue(),
  showQuickJumper: Re([Boolean, Object]),
  showTotal: ue(),
  size: We(),
  simple: re(),
  locale: Object,
  prefixCls: String,
  selectPrefixCls: String,
  totalBoundaryShowSizeChanger: Number,
  selectComponentClass: String,
  itemRender: ue(),
  role: String,
  responsive: Boolean,
  showLessItems: re(),
  onChange: ue(),
  onShowSizeChange: ue(),
  "onUpdate:current": ue(),
  "onUpdate:pageSize": ue()
}), oa = oe({
  compatConfig: {
    MODE: 3
  },
  name: "APagination",
  inheritAttrs: !1,
  props: na(),
  // emits: ['change', 'showSizeChange', 'update:current', 'update:pageSize'],
  setup(e, t) {
    let {
      slots: n,
      attrs: o
    } = t;
    const {
      prefixCls: l,
      configProvider: r,
      direction: i,
      size: a
    } = ot("pagination", e), [u, m] = ea(l), s = S(() => r.getPrefixCls("select", e.selectPrefixCls)), d = ko(), [b] = Oo("Pagination", Tl, ye(e, "locale")), C = (x) => {
      const v = f("span", {
        class: `${x}-item-ellipsis`
      }, [vt("•••")]), c = f("button", {
        class: `${x}-item-link`,
        type: "button",
        tabindex: -1
      }, [i.value === "rtl" ? f(ct, null, null) : f(Nt, null, null)]), p = f("button", {
        class: `${x}-item-link`,
        type: "button",
        tabindex: -1
      }, [i.value === "rtl" ? f(Nt, null, null) : f(ct, null, null)]), w = f("a", {
        rel: "nofollow",
        class: `${x}-item-link`
      }, [f("div", {
        class: `${x}-item-container`
      }, [i.value === "rtl" ? f(kt, {
        class: `${x}-item-link-icon`
      }, null) : f(Dt, {
        class: `${x}-item-link-icon`
      }, null), v])]), h = f("a", {
        rel: "nofollow",
        class: `${x}-item-link`
      }, [f("div", {
        class: `${x}-item-container`
      }, [i.value === "rtl" ? f(Dt, {
        class: `${x}-item-link-icon`
      }, null) : f(kt, {
        class: `${x}-item-link-icon`
      }, null), v])]);
      return {
        prevIcon: c,
        nextIcon: p,
        jumpPrevIcon: w,
        jumpNextIcon: h
      };
    };
    return () => {
      var x;
      const {
        itemRender: v = n.itemRender,
        buildOptionText: c = n.buildOptionText,
        selectComponentClass: p,
        responsive: w
      } = e, h = ta(e, ["itemRender", "buildOptionText", "selectComponentClass", "responsive"]), O = a.value === "small" || !!(!((x = d.value) === null || x === void 0) && x.xs && !a.value && w), T = g(g(g(g(g({}, h), C(l.value)), {
        prefixCls: l.value,
        selectPrefixCls: s.value,
        selectComponentClass: p || (O ? Fr : Mr),
        locale: b.value,
        buildOptionText: c
      }), o), {
        class: ee({
          [`${l.value}-mini`]: O,
          [`${l.value}-rtl`]: i.value === "rtl"
        }, o.class, m.value),
        itemRender: v
      });
      return u(f(Xr, T, null));
    };
  }
}), la = Rl(oa), Ko = Symbol("TableContextProps"), ra = (e) => {
  Ge(Ko, e);
}, je = () => Je(Ko, {}), aa = "RC_TABLE_KEY";
function Ao(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function Fo(e, t) {
  if (!t && typeof t != "number")
    return e;
  const n = Ao(t);
  let o = e;
  for (let l = 0; l < n.length; l += 1) {
    if (!o)
      return null;
    const r = n[l];
    o = o[r];
  }
  return o;
}
function Kt(e) {
  const t = [], n = {};
  return e.forEach((o) => {
    const {
      key: l,
      dataIndex: r
    } = o || {};
    let i = l || Ao(r).join("-") || aa;
    for (; n[i]; )
      i = `${i}_next`;
    n[i] = !0, t.push(i);
  }), t;
}
function ia() {
  const e = {};
  function t(r, i) {
    i && Object.keys(i).forEach((a) => {
      const u = i[a];
      u && typeof u == "object" ? (r[a] = r[a] || {}, t(r[a], u)) : r[a] = u;
    });
  }
  for (var n = arguments.length, o = new Array(n), l = 0; l < n; l++)
    o[l] = arguments[l];
  return o.forEach((r) => {
    t(e, r);
  }), e;
}
function an(e) {
  return e != null;
}
const Mo = Symbol("SlotsContextProps"), sa = (e) => {
  Ge(Mo, e);
}, Pn = () => Je(Mo, S(() => ({}))), jo = Symbol("ContextProps"), ca = (e) => {
  Ge(jo, e);
}, ua = () => Je(jo, {
  onResizeColumn: () => {
  }
}), it = "RC_TABLE_INTERNAL_COL_DEFINE", Lo = Symbol("HoverContextProps"), da = (e) => {
  Ge(Lo, e);
}, fa = () => Je(Lo, {
  startRow: pe(-1),
  endRow: pe(-1),
  onHover() {
  }
}), sn = pe(!1), pa = () => {
  tt(() => {
    sn.value = sn.value || _l("position", "sticky");
  });
}, ma = () => sn;
var va = function(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var l = 0, o = Object.getOwnPropertySymbols(e); l < o.length; l++)
      t.indexOf(o[l]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[l]) && (n[o[l]] = e[o[l]]);
  return n;
};
function ha(e, t, n, o) {
  const l = e + t - 1;
  return e <= o && l >= n;
}
function ga(e) {
  return e && typeof e == "object" && !Array.isArray(e) && !wt(e);
}
const At = oe({
  name: "Cell",
  props: ["prefixCls", "record", "index", "renderIndex", "dataIndex", "customRender", "component", "colSpan", "rowSpan", "fixLeft", "fixRight", "firstFixLeft", "lastFixLeft", "firstFixRight", "lastFixRight", "appendNode", "additionalProps", "ellipsis", "align", "rowType", "isSticky", "column", "cellType", "transformCellText"],
  setup(e, t) {
    let {
      slots: n
    } = t;
    const o = Pn(), {
      onHover: l,
      startRow: r,
      endRow: i
    } = fa(), a = S(() => {
      var v, c, p, w;
      return (p = (v = e.colSpan) !== null && v !== void 0 ? v : (c = e.additionalProps) === null || c === void 0 ? void 0 : c.colSpan) !== null && p !== void 0 ? p : (w = e.additionalProps) === null || w === void 0 ? void 0 : w.colspan;
    }), u = S(() => {
      var v, c, p, w;
      return (p = (v = e.rowSpan) !== null && v !== void 0 ? v : (c = e.additionalProps) === null || c === void 0 ? void 0 : c.rowSpan) !== null && p !== void 0 ? p : (w = e.additionalProps) === null || w === void 0 ? void 0 : w.rowspan;
    }), m = Xl(() => {
      const {
        index: v
      } = e;
      return ha(v, u.value || 1, r.value, i.value);
    }), s = ma(), d = (v, c) => {
      var p;
      const {
        record: w,
        index: h,
        additionalProps: O
      } = e;
      w && l(h, h + c - 1), (p = O == null ? void 0 : O.onMouseenter) === null || p === void 0 || p.call(O, v);
    }, b = (v) => {
      var c;
      const {
        record: p,
        additionalProps: w
      } = e;
      p && l(-1, -1), (c = w == null ? void 0 : w.onMouseleave) === null || c === void 0 || c.call(w, v);
    }, C = (v) => {
      const c = It(v)[0];
      return wt(c) ? c.type === vl ? c.children : Array.isArray(c.children) ? C(c.children) : void 0 : c;
    }, x = pe(null);
    return De([m, () => e.prefixCls, x], () => {
      const v = Nl(x.value);
      v && (m.value ? Dl(v, `${e.prefixCls}-cell-row-hover`) : kl(v, `${e.prefixCls}-cell-row-hover`));
    }), () => {
      var v, c, p, w, h, O;
      const {
        prefixCls: T,
        record: N,
        index: P,
        renderIndex: z,
        dataIndex: y,
        customRender: $,
        component: _ = "td",
        fixLeft: D,
        fixRight: B,
        firstFixLeft: H,
        lastFixLeft: G,
        firstFixRight: te,
        lastFixRight: fe,
        appendNode: X = (v = n.appendNode) === null || v === void 0 ? void 0 : v.call(n),
        additionalProps: W = {},
        ellipsis: L,
        align: J,
        rowType: I,
        isSticky: K,
        column: k = {},
        cellType: F
      } = e, j = `${T}-cell`;
      let ie, Y;
      const be = (c = n.default) === null || c === void 0 ? void 0 : c.call(n);
      if (an(be) || F === "header")
        Y = be;
      else {
        const de = Fo(N, y);
        if (Y = de, $) {
          const E = $({
            text: de,
            value: de,
            record: N,
            index: P,
            renderIndex: z,
            column: k.__originColumn__
          });
          ga(E) ? (process.env.NODE_ENV !== "production" && ze(!1, "`columns.customRender` return cell props is deprecated with perf issue, please use `customCell` instead."), Y = E.children, ie = E.props) : Y = E;
        }
        if (!(it in k) && F === "body" && o.value.bodyCell && !(!((p = k.slots) === null || p === void 0) && p.customRender)) {
          const E = wn(o.value, "bodyCell", {
            text: de,
            value: de,
            record: N,
            index: P,
            column: k.__originColumn__
          }, () => {
            const R = Y === void 0 ? de : Y;
            return [typeof R == "object" && gt(R) || typeof R != "object" ? R : null];
          });
          Y = Io(E);
        }
        e.transformCellText && (Y = e.transformCellText({
          text: Y,
          record: N,
          index: P,
          column: k.__originColumn__
        }));
      }
      typeof Y == "object" && !Array.isArray(Y) && !wt(Y) && (Y = null), L && (G || te) && (Y = f("span", {
        class: `${j}-content`
      }, [Y])), Array.isArray(Y) && Y.length === 1 && (Y = Y[0]);
      const xe = ie || {}, {
        colSpan: we,
        rowSpan: Te,
        style: Ke,
        class: Ce
      } = xe, $e = va(xe, ["colSpan", "rowSpan", "style", "class"]), A = (w = we !== void 0 ? we : a.value) !== null && w !== void 0 ? w : 1, Z = (h = Te !== void 0 ? Te : u.value) !== null && h !== void 0 ? h : 1;
      if (A === 0 || Z === 0)
        return null;
      const M = {}, U = typeof D == "number" && s.value, q = typeof B == "number" && s.value;
      U && (M.position = "sticky", M.left = `${D}px`), q && (M.position = "sticky", M.right = `${B}px`);
      const ce = {};
      J && (ce.textAlign = J);
      let Q;
      const le = L === !0 ? {
        showTitle: !0
      } : L;
      le && (le.showTitle || I === "header") && (typeof Y == "string" || typeof Y == "number" ? Q = Y.toString() : wt(Y) && (Q = C([Y])));
      const ge = g(g(g({
        title: Q
      }, $e), W), {
        colSpan: A !== 1 ? A : null,
        rowSpan: Z !== 1 ? Z : null,
        class: ee(j, {
          [`${j}-fix-left`]: U && s.value,
          [`${j}-fix-left-first`]: H && s.value,
          [`${j}-fix-left-last`]: G && s.value,
          [`${j}-fix-right`]: q && s.value,
          [`${j}-fix-right-first`]: te && s.value,
          [`${j}-fix-right-last`]: fe && s.value,
          [`${j}-ellipsis`]: L,
          [`${j}-with-append`]: X,
          [`${j}-fix-sticky`]: (U || q) && K && s.value
        }, W.class, Ce),
        onMouseenter: (de) => {
          d(de, Z);
        },
        onMouseleave: b,
        style: [W.style, ce, M, Ke]
      });
      return f(_, V(V({}, ge), {}, {
        ref: x
      }), {
        default: () => [X, Y, (O = n.dragHandle) === null || O === void 0 ? void 0 : O.call(n)]
      });
    };
  }
});
function On(e, t, n, o, l) {
  const r = n[e] || {}, i = n[t] || {};
  let a, u;
  r.fixed === "left" ? a = o.left[e] : i.fixed === "right" && (u = o.right[t]);
  let m = !1, s = !1, d = !1, b = !1;
  const C = n[t + 1], x = n[e - 1];
  return l === "rtl" ? a !== void 0 ? b = !(x && x.fixed === "left") : u !== void 0 && (d = !(C && C.fixed === "right")) : a !== void 0 ? m = !(C && C.fixed === "left") : u !== void 0 && (s = !(x && x.fixed === "right")), {
    fixLeft: a,
    fixRight: u,
    lastFixLeft: m,
    firstFixRight: s,
    lastFixRight: d,
    firstFixLeft: b,
    isSticky: o.isSticky
  };
}
const oo = {
  mouse: {
    start: "mousedown",
    move: "mousemove",
    stop: "mouseup"
  },
  touch: {
    start: "touchstart",
    move: "touchmove",
    stop: "touchend"
  }
}, lo = 50, ba = oe({
  compatConfig: {
    MODE: 3
  },
  name: "DragHandle",
  props: {
    prefixCls: String,
    width: {
      type: Number,
      required: !0
    },
    minWidth: {
      type: Number,
      default: lo
    },
    maxWidth: {
      type: Number,
      default: 1 / 0
    },
    column: {
      type: Object,
      default: void 0
    }
  },
  setup(e) {
    let t = 0, n = {
      remove: () => {
      }
    }, o = {
      remove: () => {
      }
    };
    const l = () => {
      n.remove(), o.remove();
    };
    $o(() => {
      l();
    }), _e(() => {
      Ie(!isNaN(e.width), "Table", "width must be a number when use resizable");
    });
    const {
      onResizeColumn: r
    } = ua(), i = S(() => typeof e.minWidth == "number" && !isNaN(e.minWidth) ? e.minWidth : lo), a = S(() => typeof e.maxWidth == "number" && !isNaN(e.maxWidth) ? e.maxWidth : 1 / 0), u = hl();
    let m = 0;
    const s = pe(!1);
    let d;
    const b = (h) => {
      let O = 0;
      h.touches ? h.touches.length ? O = h.touches[0].pageX : O = h.changedTouches[0].pageX : O = h.pageX;
      const T = t - O;
      let N = Math.max(m - T, i.value);
      N = Math.min(N, a.value), Ze.cancel(d), d = Ze(() => {
        r(N, e.column.__originColumn__);
      });
    }, C = (h) => {
      b(h);
    }, x = (h) => {
      s.value = !1, b(h), l();
    }, v = (h, O) => {
      s.value = !0, l(), m = u.vnode.el.parentNode.getBoundingClientRect().width, !(h instanceof MouseEvent && h.which !== 1) && (h.stopPropagation && h.stopPropagation(), t = h.touches ? h.touches[0].pageX : h.pageX, n = Qe(document.documentElement, O.move, C), o = Qe(document.documentElement, O.stop, x));
    }, c = (h) => {
      h.stopPropagation(), h.preventDefault(), v(h, oo.mouse);
    }, p = (h) => {
      h.stopPropagation(), h.preventDefault(), v(h, oo.touch);
    }, w = (h) => {
      h.stopPropagation(), h.preventDefault();
    };
    return () => {
      const {
        prefixCls: h
      } = e, O = {
        [Bl ? "onTouchstartPassive" : "onTouchstart"]: (T) => p(T)
      };
      return f("div", V(V({
        class: `${h}-resize-handle ${s.value ? "dragging" : ""}`,
        onMousedown: c
      }, O), {}, {
        onClick: w
      }), [f("div", {
        class: `${h}-resize-handle-line`
      }, null)]);
    };
  }
}), ya = oe({
  name: "HeaderRow",
  props: ["cells", "stickyOffsets", "flattenColumns", "rowComponent", "cellComponent", "index", "customHeaderRow"],
  setup(e) {
    const t = je();
    return () => {
      const {
        prefixCls: n,
        direction: o
      } = t, {
        cells: l,
        stickyOffsets: r,
        flattenColumns: i,
        rowComponent: a,
        cellComponent: u,
        customHeaderRow: m,
        index: s
      } = e;
      let d;
      m && (d = m(l.map((C) => C.column), s));
      const b = Kt(l.map((C) => C.column));
      return f(a, d, {
        default: () => [l.map((C, x) => {
          const {
            column: v
          } = C, c = On(C.colStart, C.colEnd, i, r, o);
          let p;
          v && v.customHeaderCell && (p = C.column.customHeaderCell(v));
          const w = v;
          return f(At, V(V(V({}, C), {}, {
            cellType: "header",
            ellipsis: v.ellipsis,
            align: v.align,
            component: u,
            prefixCls: n,
            key: b[x]
          }, c), {}, {
            additionalProps: p,
            rowType: "header",
            column: v
          }), {
            default: () => v.title,
            dragHandle: () => w.resizable ? f(ba, {
              prefixCls: n,
              width: w.width,
              minWidth: w.minWidth,
              maxWidth: w.maxWidth,
              column: w
            }, null) : null
          });
        })]
      });
    };
  }
});
function xa(e) {
  const t = [];
  function n(l, r) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
    t[i] = t[i] || [];
    let a = r;
    return l.filter(Boolean).map((m) => {
      const s = {
        key: m.key,
        class: ee(m.className, m.class),
        // children: column.title,
        column: m,
        colStart: a
      };
      let d = 1;
      const b = m.children;
      return b && b.length > 0 && (d = n(b, a, i + 1).reduce((C, x) => C + x, 0), s.hasSubColumns = !0), "colSpan" in m && ({
        colSpan: d
      } = m), "rowSpan" in m && (s.rowSpan = m.rowSpan), s.colSpan = d, s.colEnd = s.colStart + d - 1, t[i].push(s), a += d, d;
    });
  }
  n(e, 0);
  const o = t.length;
  for (let l = 0; l < o; l += 1)
    t[l].forEach((r) => {
      !("rowSpan" in r) && !r.hasSubColumns && (r.rowSpan = o - l);
    });
  return t;
}
const ro = oe({
  name: "TableHeader",
  inheritAttrs: !1,
  props: ["columns", "flattenColumns", "stickyOffsets", "customHeaderRow"],
  setup(e) {
    const t = je(), n = S(() => xa(e.columns));
    return () => {
      const {
        prefixCls: o,
        getComponent: l
      } = t, {
        stickyOffsets: r,
        flattenColumns: i,
        customHeaderRow: a
      } = e, u = l(["header", "wrapper"], "thead"), m = l(["header", "row"], "tr"), s = l(["header", "cell"], "th");
      return f(u, {
        class: `${o}-thead`
      }, {
        default: () => [n.value.map((d, b) => f(ya, {
          key: b,
          flattenColumns: i,
          cells: d,
          stickyOffsets: r,
          rowComponent: m,
          cellComponent: s,
          customHeaderRow: a,
          index: b
        }, null))]
      });
    };
  }
}), Ho = Symbol("ExpandedRowProps"), Ca = (e) => {
  Ge(Ho, e);
}, Sa = () => Je(Ho, {}), Wo = oe({
  name: "ExpandedRow",
  inheritAttrs: !1,
  props: ["prefixCls", "component", "cellComponent", "expanded", "colSpan", "isEmpty"],
  setup(e, t) {
    let {
      slots: n,
      attrs: o
    } = t;
    const l = je(), r = Sa(), {
      fixHeader: i,
      fixColumn: a,
      componentWidth: u,
      horizonScroll: m
    } = r;
    return () => {
      const {
        prefixCls: s,
        component: d,
        cellComponent: b,
        expanded: C,
        colSpan: x,
        isEmpty: v
      } = e;
      return f(d, {
        class: o.class,
        style: {
          display: C ? null : "none"
        }
      }, {
        default: () => [f(At, {
          component: b,
          prefixCls: s,
          colSpan: x
        }, {
          default: () => {
            var c;
            let p = (c = n.default) === null || c === void 0 ? void 0 : c.call(n);
            return (v ? m.value : a.value) && (p = f("div", {
              style: {
                width: `${u.value - (i.value ? l.scrollbarSize : 0)}px`,
                position: "sticky",
                left: 0,
                overflow: "hidden"
              },
              class: `${s}-expanded-row-fixed`
            }, [p])), p;
          }
        })]
      });
    };
  }
}), wa = oe({
  name: "MeasureCell",
  props: ["columnKey"],
  setup(e, t) {
    let {
      emit: n
    } = t;
    const o = se();
    return tt(() => {
      o.value && n("columnResize", e.columnKey, o.value.offsetWidth);
    }), () => f(Ro, {
      onResize: (l) => {
        let {
          offsetWidth: r
        } = l;
        n("columnResize", e.columnKey, r);
      }
    }, {
      default: () => [f("td", {
        ref: o,
        style: {
          padding: 0,
          border: 0,
          height: 0
        }
      }, [f("div", {
        style: {
          height: 0,
          overflow: "hidden"
        }
      }, [vt(" ")])])]
    });
  }
}), Vo = Symbol("BodyContextProps"), $a = (e) => {
  Ge(Vo, e);
}, Xo = () => Je(Vo, {}), Pa = oe({
  name: "BodyRow",
  inheritAttrs: !1,
  props: ["record", "index", "renderIndex", "recordKey", "expandedKeys", "rowComponent", "cellComponent", "customRow", "rowExpandable", "indent", "rowKey", "getRowKey", "childrenColumnName"],
  setup(e, t) {
    let {
      attrs: n
    } = t;
    const o = je(), l = Xo(), r = pe(!1), i = S(() => e.expandedKeys && e.expandedKeys.has(e.recordKey));
    _e(() => {
      i.value && (r.value = !0);
    });
    const a = S(() => l.expandableType === "row" && (!e.rowExpandable || e.rowExpandable(e.record))), u = S(() => l.expandableType === "nest"), m = S(() => e.childrenColumnName && e.record && e.record[e.childrenColumnName]), s = S(() => a.value || u.value), d = (c, p) => {
      l.onTriggerExpand(c, p);
    }, b = S(() => {
      var c;
      return ((c = e.customRow) === null || c === void 0 ? void 0 : c.call(e, e.record, e.index)) || {};
    }), C = function(c) {
      var p, w;
      l.expandRowByClick && s.value && d(e.record, c);
      for (var h = arguments.length, O = new Array(h > 1 ? h - 1 : 0), T = 1; T < h; T++)
        O[T - 1] = arguments[T];
      (w = (p = b.value) === null || p === void 0 ? void 0 : p.onClick) === null || w === void 0 || w.call(p, c, ...O);
    }, x = S(() => {
      const {
        record: c,
        index: p,
        indent: w
      } = e, {
        rowClassName: h
      } = l;
      return typeof h == "string" ? h : typeof h == "function" ? h(c, p, w) : "";
    }), v = S(() => Kt(l.flattenColumns));
    return () => {
      const {
        class: c,
        style: p
      } = n, {
        record: w,
        index: h,
        rowKey: O,
        indent: T = 0,
        rowComponent: N,
        cellComponent: P
      } = e, {
        prefixCls: z,
        fixedInfoList: y,
        transformCellText: $
      } = o, {
        flattenColumns: _,
        expandedRowClassName: D,
        indentSize: B,
        expandIcon: H,
        expandedRowRender: G,
        expandIconColumnIndex: te
      } = l, fe = f(N, V(V({}, b.value), {}, {
        "data-row-key": O,
        class: ee(c, `${z}-row`, `${z}-row-level-${T}`, x.value, b.value.class),
        style: [p, b.value.style],
        onClick: C
      }), {
        default: () => [_.map((W, L) => {
          const {
            customRender: J,
            dataIndex: I,
            className: K
          } = W, k = v[L], F = y[L];
          let j;
          W.customCell && (j = W.customCell(w, h, W));
          const ie = L === (te || 0) && u.value ? f(Be, null, [f("span", {
            style: {
              paddingLeft: `${B * T}px`
            },
            class: `${z}-row-indent indent-level-${T}`
          }, null), H({
            prefixCls: z,
            expanded: i.value,
            expandable: m.value,
            record: w,
            onExpand: d
          })]) : null;
          return f(At, V(V({
            cellType: "body",
            class: K,
            ellipsis: W.ellipsis,
            align: W.align,
            component: P,
            prefixCls: z,
            key: k,
            record: w,
            index: h,
            renderIndex: e.renderIndex,
            dataIndex: I,
            customRender: J
          }, F), {}, {
            additionalProps: j,
            column: W,
            transformCellText: $,
            appendNode: ie
          }), null);
        })]
      });
      let X;
      if (a.value && (r.value || i.value)) {
        const W = G({
          record: w,
          index: h,
          indent: T + 1,
          expanded: i.value
        }), L = D && D(w, h, T);
        X = f(Wo, {
          expanded: i.value,
          class: ee(`${z}-expanded-row`, `${z}-expanded-row-level-${T + 1}`, L),
          prefixCls: z,
          component: N,
          cellComponent: P,
          colSpan: _.length,
          isEmpty: !1
        }, {
          default: () => [W]
        });
      }
      return f(Be, null, [fe, X]);
    };
  }
});
function Uo(e, t, n, o, l, r) {
  const i = [];
  i.push({
    record: e,
    indent: t,
    index: r
  });
  const a = l(e), u = o == null ? void 0 : o.has(a);
  if (e && Array.isArray(e[n]) && u)
    for (let m = 0; m < e[n].length; m += 1) {
      const s = Uo(e[n][m], t + 1, n, o, l, m);
      i.push(...s);
    }
  return i;
}
function Oa(e, t, n, o) {
  return S(() => {
    const r = t.value, i = n.value, a = e.value;
    if (i != null && i.size) {
      const u = [];
      for (let m = 0; m < (a == null ? void 0 : a.length); m += 1) {
        const s = a[m];
        u.push(...Uo(s, 0, r, i, o.value, m));
      }
      return u;
    }
    return a == null ? void 0 : a.map((u, m) => ({
      record: u,
      indent: 0,
      index: m
    }));
  });
}
const Go = Symbol("ResizeContextProps"), Ia = (e) => {
  Ge(Go, e);
}, Ea = () => Je(Go, {
  onColumnResize: () => {
  }
}), Ta = oe({
  name: "TableBody",
  props: ["data", "getRowKey", "measureColumnWidth", "expandedKeys", "customRow", "rowExpandable", "childrenColumnName"],
  setup(e, t) {
    let {
      slots: n
    } = t;
    const o = Ea(), l = je(), r = Xo(), i = Oa(ye(e, "data"), ye(e, "childrenColumnName"), ye(e, "expandedKeys"), ye(e, "getRowKey")), a = pe(-1), u = pe(-1);
    let m;
    return da({
      startRow: a,
      endRow: u,
      onHover: (s, d) => {
        clearTimeout(m), m = setTimeout(() => {
          a.value = s, u.value = d;
        }, 100);
      }
    }), () => {
      var s;
      const {
        data: d,
        getRowKey: b,
        measureColumnWidth: C,
        expandedKeys: x,
        customRow: v,
        rowExpandable: c,
        childrenColumnName: p
      } = e, {
        onColumnResize: w
      } = o, {
        prefixCls: h,
        getComponent: O
      } = l, {
        flattenColumns: T
      } = r, N = O(["body", "wrapper"], "tbody"), P = O(["body", "row"], "tr"), z = O(["body", "cell"], "td");
      let y;
      d.length ? y = i.value.map((_, D) => {
        const {
          record: B,
          indent: H,
          index: G
        } = _, te = b(B, D);
        return f(Pa, {
          key: te,
          rowKey: te,
          record: B,
          recordKey: te,
          index: D,
          renderIndex: G,
          rowComponent: P,
          cellComponent: z,
          expandedKeys: x,
          customRow: v,
          getRowKey: b,
          rowExpandable: c,
          childrenColumnName: p,
          indent: H
        }, null);
      }) : y = f(Wo, {
        expanded: !0,
        class: `${h}-placeholder`,
        prefixCls: h,
        component: P,
        cellComponent: z,
        colSpan: T.length,
        isEmpty: !0
      }, {
        default: () => [(s = n.emptyNode) === null || s === void 0 ? void 0 : s.call(n)]
      });
      const $ = Kt(T);
      return f(N, {
        class: `${h}-tbody`
      }, {
        default: () => [C && f("tr", {
          "aria-hidden": "true",
          class: `${h}-measure-row`,
          style: {
            height: 0,
            fontSize: 0
          }
        }, [$.map((_) => f(wa, {
          key: _,
          columnKey: _,
          onColumnResize: w
        }, null))]), y]
      });
    };
  }
}), Fe = {};
var Ra = function(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var l = 0, o = Object.getOwnPropertySymbols(e); l < o.length; l++)
      t.indexOf(o[l]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[l]) && (n[o[l]] = e[o[l]]);
  return n;
};
function cn(e) {
  return e.reduce((t, n) => {
    const {
      fixed: o
    } = n, l = o === !0 ? "left" : o, r = n.children;
    return r && r.length > 0 ? [...t, ...cn(r).map((i) => g({
      fixed: l
    }, i))] : [...t, g(g({}, n), {
      fixed: l
    })];
  }, []);
}
function _a(e) {
  let t = !0;
  for (let o = 0; o < e.length; o += 1) {
    const l = e[o];
    if (t && l.fixed !== "left")
      t = !1;
    else if (!t && l.fixed === "left") {
      ze(!1, `Index ${o - 1} of \`columns\` missing \`fixed='left'\` prop.`);
      break;
    }
  }
  let n = !0;
  for (let o = e.length - 1; o >= 0; o -= 1) {
    const l = e[o];
    if (n && l.fixed !== "right")
      n = !1;
    else if (!n && l.fixed === "right") {
      ze(!1, `Index ${o + 1} of \`columns\` missing \`fixed='right'\` prop.`);
      break;
    }
  }
}
function Na(e) {
  return e.map((t) => {
    const {
      fixed: n
    } = t, o = Ra(t, ["fixed"]);
    let l = n;
    return n === "left" ? l = "right" : n === "right" && (l = "left"), g({
      fixed: l
    }, o);
  });
}
function Da(e, t) {
  let {
    prefixCls: n,
    columns: o,
    // children,
    expandable: l,
    expandedKeys: r,
    getRowKey: i,
    onTriggerExpand: a,
    expandIcon: u,
    rowExpandable: m,
    expandIconColumnIndex: s,
    direction: d,
    expandRowByClick: b,
    expandColumnWidth: C,
    expandFixed: x
  } = e;
  const v = Pn(), c = S(() => {
    if (l.value) {
      let h = o.value.slice();
      if (process.env.NODE_ENV !== "production" && s.value >= 0 && ze(!1, "`expandIconColumnIndex` is deprecated. Please use `Table.EXPAND_COLUMN` in `columns` instead."), !h.includes(Fe)) {
        const B = s.value || 0;
        B >= 0 && h.splice(B, 0, Fe);
      }
      process.env.NODE_ENV !== "production" && h.filter((B) => B === Fe).length > 1 && ze(!1, "There exist more than one `EXPAND_COLUMN` in `columns`.");
      const O = h.indexOf(Fe);
      h = h.filter((B, H) => B !== Fe || H === O);
      const T = o.value[O];
      let N;
      (x.value === "left" || x.value) && !s.value ? N = "left" : (x.value === "right" || x.value) && s.value === o.value.length ? N = "right" : N = T ? T.fixed : null;
      const P = r.value, z = m.value, y = u.value, $ = n.value, _ = b.value, D = {
        [it]: {
          class: `${n.value}-expand-icon-col`,
          columnType: "EXPAND_COLUMN"
        },
        title: wn(v.value, "expandColumnTitle", {}, () => [""]),
        fixed: N,
        class: `${n.value}-row-expand-icon-cell`,
        width: C.value,
        customRender: (B) => {
          let {
            record: H,
            index: G
          } = B;
          const te = i.value(H, G), fe = P.has(te), X = z ? z(H) : !0, W = y({
            prefixCls: $,
            expanded: fe,
            expandable: X,
            record: H,
            onExpand: a
          });
          return _ ? f("span", {
            onClick: (L) => L.stopPropagation()
          }, [W]) : W;
        }
      };
      return h.map((B) => B === Fe ? D : B);
    }
    return process.env.NODE_ENV !== "production" && o.value.includes(Fe) && ze(!1, "`expandable` is not config but there exist `EXPAND_COLUMN` in `columns`."), o.value.filter((h) => h !== Fe);
  }), p = S(() => {
    let h = c.value;
    return t.value && (h = t.value(h)), h.length || (h = [{
      customRender: () => null
    }]), h;
  }), w = S(() => d.value === "rtl" ? Na(cn(p.value)) : cn(p.value));
  return process.env.NODE_ENV !== "production" && _e(() => {
    setTimeout(() => {
      _a(w.value);
    });
  }), [p, w];
}
function Jo(e) {
  const t = pe(e);
  let n;
  const o = pe([]);
  function l(r) {
    o.value.push(r), Ze.cancel(n), n = Ze(() => {
      const i = o.value;
      o.value = [], i.forEach((a) => {
        t.value = a(t.value);
      });
    });
  }
  return ut(() => {
    Ze.cancel(n);
  }), [t, l];
}
function ka(e) {
  const t = se(null), n = se();
  function o() {
    clearTimeout(n.value);
  }
  function l(i) {
    t.value = i, o(), n.value = setTimeout(() => {
      t.value = null, n.value = void 0;
    }, 100);
  }
  function r() {
    return t.value;
  }
  return ut(() => {
    o();
  }), [l, r];
}
function Ba(e, t, n) {
  return S(() => {
    const l = [], r = [];
    let i = 0, a = 0;
    const u = e.value, m = t.value, s = n.value;
    for (let d = 0; d < m; d += 1)
      if (s === "rtl") {
        r[d] = a, a += u[d] || 0;
        const b = m - d - 1;
        l[b] = i, i += u[b] || 0;
      } else {
        l[d] = i, i += u[d] || 0;
        const b = m - d - 1;
        r[b] = a, a += u[b] || 0;
      }
    return {
      left: l,
      right: r
    };
  });
}
var za = function(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var l = 0, o = Object.getOwnPropertySymbols(e); l < o.length; l++)
      t.indexOf(o[l]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[l]) && (n[o[l]] = e[o[l]]);
  return n;
};
function Yo(e) {
  let {
    colWidths: t,
    columns: n,
    columCount: o
  } = e;
  const l = [], r = o || n.length;
  let i = !1;
  for (let a = r - 1; a >= 0; a -= 1) {
    const u = t[a], m = n && n[a], s = m && m[it];
    if (u || s || i) {
      const d = s || {}, b = za(d, ["columnType"]);
      l.unshift(f("col", V({
        key: a,
        style: {
          width: typeof u == "number" ? `${u}px` : u
        }
      }, b), null)), i = !0;
    }
  }
  return f("colgroup", null, [l]);
}
function un(e, t) {
  let {
    slots: n
  } = t;
  var o;
  return f("div", null, [(o = n.default) === null || o === void 0 ? void 0 : o.call(n)]);
}
un.displayName = "Panel";
let Ka = 0;
const Aa = oe({
  name: "TableSummary",
  props: ["fixed"],
  setup(e, t) {
    let {
      slots: n
    } = t;
    const o = je(), l = `table-summary-uni-key-${++Ka}`, r = S(() => e.fixed === "" || e.fixed);
    return _e(() => {
      o.summaryCollect(l, r.value);
    }), ut(() => {
      o.summaryCollect(l, !1);
    }), () => {
      var i;
      return (i = n.default) === null || i === void 0 ? void 0 : i.call(n);
    };
  }
}), Fa = oe({
  compatConfig: {
    MODE: 3
  },
  name: "ATableSummaryRow",
  setup(e, t) {
    let {
      slots: n
    } = t;
    return () => {
      var o;
      return f("tr", null, [(o = n.default) === null || o === void 0 ? void 0 : o.call(n)]);
    };
  }
}), qo = Symbol("SummaryContextProps"), Ma = (e) => {
  Ge(qo, e);
}, ja = () => Je(qo, {}), La = oe({
  name: "ATableSummaryCell",
  props: ["index", "colSpan", "rowSpan", "align"],
  setup(e, t) {
    let {
      attrs: n,
      slots: o
    } = t;
    const l = je(), r = ja();
    return () => {
      const {
        index: i,
        colSpan: a = 1,
        rowSpan: u,
        align: m
      } = e, {
        prefixCls: s,
        direction: d
      } = l, {
        scrollColumnIndex: b,
        stickyOffsets: C,
        flattenColumns: x
      } = r, c = i + a - 1 + 1 === b ? a + 1 : a, p = On(i, i + c - 1, x, C, d);
      return f(At, V({
        class: n.class,
        index: i,
        component: "td",
        prefixCls: s,
        record: null,
        dataIndex: null,
        align: m,
        colSpan: c,
        rowSpan: u,
        customRender: () => {
          var w;
          return (w = o.default) === null || w === void 0 ? void 0 : w.call(o);
        }
      }, p), null);
    };
  }
}), St = oe({
  name: "TableFooter",
  inheritAttrs: !1,
  props: ["stickyOffsets", "flattenColumns"],
  setup(e, t) {
    let {
      slots: n
    } = t;
    const o = je();
    return Ma(at({
      stickyOffsets: ye(e, "stickyOffsets"),
      flattenColumns: ye(e, "flattenColumns"),
      scrollColumnIndex: S(() => {
        const l = e.flattenColumns.length - 1, r = e.flattenColumns[l];
        return r != null && r.scrollbar ? l : null;
      })
    })), () => {
      var l;
      const {
        prefixCls: r
      } = o;
      return f("tfoot", {
        class: `${r}-summary`
      }, [(l = n.default) === null || l === void 0 ? void 0 : l.call(n)]);
    };
  }
}), Ha = Aa;
function Wa(e) {
  let {
    prefixCls: t,
    record: n,
    onExpand: o,
    expanded: l,
    expandable: r
  } = e;
  const i = `${t}-row-expand-icon`;
  if (!r)
    return f("span", {
      class: [i, `${t}-row-spaced`]
    }, null);
  const a = (u) => {
    o(n, u), u.stopPropagation();
  };
  return f("span", {
    class: {
      [i]: !0,
      [`${t}-row-expanded`]: l,
      [`${t}-row-collapsed`]: !l
    },
    onClick: a
  }, null);
}
function Va(e, t, n) {
  const o = [];
  function l(r) {
    (r || []).forEach((i, a) => {
      o.push(t(i, a)), l(i[n]);
    });
  }
  return l(e), o;
}
const Xa = oe({
  name: "StickyScrollBar",
  inheritAttrs: !1,
  props: ["offsetScroll", "container", "scrollBodyRef", "scrollBodySizeInfo"],
  emits: ["scroll"],
  setup(e, t) {
    let {
      emit: n,
      expose: o
    } = t;
    const l = je(), r = pe(0), i = pe(0), a = pe(0);
    _e(() => {
      r.value = e.scrollBodySizeInfo.scrollWidth || 0, i.value = e.scrollBodySizeInfo.clientWidth || 0, a.value = r.value && i.value * (i.value / r.value);
    }, {
      flush: "post"
    });
    const u = pe(), [m, s] = Jo({
      scrollLeft: 0,
      isHiddenScrollBar: !0
    }), d = se({
      delta: 0,
      x: 0
    }), b = pe(!1), C = () => {
      b.value = !1;
    }, x = (P) => {
      d.value = {
        delta: P.pageX - m.value.scrollLeft,
        x: 0
      }, b.value = !0, P.preventDefault();
    }, v = (P) => {
      const {
        buttons: z
      } = P || (window == null ? void 0 : window.event);
      if (!b.value || z === 0) {
        b.value && (b.value = !1);
        return;
      }
      let y = d.value.x + P.pageX - d.value.x - d.value.delta;
      y <= 0 && (y = 0), y + a.value >= i.value && (y = i.value - a.value), n("scroll", {
        scrollLeft: y / i.value * (r.value + 2)
      }), d.value.x = P.pageX;
    }, c = () => {
      if (!e.scrollBodyRef.value)
        return;
      const P = Yn(e.scrollBodyRef.value).top, z = P + e.scrollBodyRef.value.offsetHeight, y = e.container === window ? document.documentElement.scrollTop + window.innerHeight : Yn(e.container).top + e.container.clientHeight;
      z - Xn() <= y || P >= y - e.offsetScroll ? s(($) => g(g({}, $), {
        isHiddenScrollBar: !0
      })) : s(($) => g(g({}, $), {
        isHiddenScrollBar: !1
      }));
    };
    o({
      setScrollLeft: (P) => {
        s((z) => g(g({}, z), {
          scrollLeft: P / r.value * i.value || 0
        }));
      }
    });
    let w = null, h = null, O = null, T = null;
    tt(() => {
      w = Qe(document.body, "mouseup", C, !1), h = Qe(document.body, "mousemove", v, !1), O = Qe(window, "resize", c, !1);
    }), gl(() => {
      st(() => {
        c();
      });
    }), tt(() => {
      setTimeout(() => {
        De([a, b], () => {
          c();
        }, {
          immediate: !0,
          flush: "post"
        });
      });
    }), De(() => e.container, () => {
      T == null || T.remove(), T = Qe(e.container, "scroll", c, !1);
    }, {
      immediate: !0,
      flush: "post"
    }), ut(() => {
      w == null || w.remove(), h == null || h.remove(), T == null || T.remove(), O == null || O.remove();
    }), De(() => g({}, m.value), (P, z) => {
      P.isHiddenScrollBar !== (z == null ? void 0 : z.isHiddenScrollBar) && !P.isHiddenScrollBar && s((y) => {
        const $ = e.scrollBodyRef.value;
        return $ ? g(g({}, y), {
          scrollLeft: $.scrollLeft / $.scrollWidth * $.clientWidth
        }) : y;
      });
    }, {
      immediate: !0
    });
    const N = Xn();
    return () => {
      if (r.value <= i.value || !a.value || m.value.isHiddenScrollBar)
        return null;
      const {
        prefixCls: P
      } = l;
      return f("div", {
        style: {
          height: `${N}px`,
          width: `${i.value}px`,
          bottom: `${e.offsetScroll}px`
        },
        class: `${P}-sticky-scroll`
      }, [f("div", {
        onMousedown: x,
        ref: u,
        class: ee(`${P}-sticky-scroll-bar`, {
          [`${P}-sticky-scroll-bar-active`]: b.value
        }),
        style: {
          width: `${a.value}px`,
          transform: `translate3d(${m.value.scrollLeft}px, 0, 0)`
        }
      }, null)]);
    };
  }
}), ao = zl() ? window : null;
function Ua(e, t) {
  return S(() => {
    const {
      offsetHeader: n = 0,
      offsetSummary: o = 0,
      offsetScroll: l = 0,
      getContainer: r = () => ao
    } = typeof e.value == "object" ? e.value : {}, i = r() || ao, a = !!e.value;
    return {
      isSticky: a,
      stickyClassName: a ? `${t.value}-sticky-holder` : "",
      offsetHeader: n,
      offsetSummary: o,
      offsetScroll: l,
      container: i
    };
  });
}
function Ga(e, t) {
  return S(() => {
    const n = [], o = e.value, l = t.value;
    for (let r = 0; r < l; r += 1) {
      const i = o[r];
      if (i !== void 0)
        n[r] = i;
      else
        return null;
    }
    return n;
  });
}
const io = oe({
  name: "FixedHolder",
  inheritAttrs: !1,
  props: ["columns", "flattenColumns", "stickyOffsets", "customHeaderRow", "noData", "maxContentScroll", "colWidths", "columCount", "direction", "fixHeader", "stickyTopOffset", "stickyBottomOffset", "stickyClassName"],
  emits: ["scroll"],
  setup(e, t) {
    let {
      attrs: n,
      slots: o,
      emit: l
    } = t;
    const r = je(), i = S(() => r.isSticky && !e.fixHeader ? 0 : r.scrollbarSize), a = se(), u = (v) => {
      const {
        currentTarget: c,
        deltaX: p
      } = v;
      p && (l("scroll", {
        currentTarget: c,
        scrollLeft: c.scrollLeft + p
      }), v.preventDefault());
    }, m = se();
    tt(() => {
      st(() => {
        m.value = Qe(a.value, "wheel", u);
      });
    }), ut(() => {
      var v;
      (v = m.value) === null || v === void 0 || v.remove();
    });
    const s = S(() => e.flattenColumns.every((v) => v.width && v.width !== 0 && v.width !== "0px")), d = se([]), b = se([]);
    _e(() => {
      const v = e.flattenColumns[e.flattenColumns.length - 1], c = {
        fixed: v ? v.fixed : null,
        scrollbar: !0,
        customHeaderCell: () => ({
          class: `${r.prefixCls}-cell-scrollbar`
        })
      };
      d.value = i.value ? [...e.columns, c] : e.columns, b.value = i.value ? [...e.flattenColumns, c] : e.flattenColumns;
    });
    const C = S(() => {
      const {
        stickyOffsets: v,
        direction: c
      } = e, {
        right: p,
        left: w
      } = v;
      return g(g({}, v), {
        left: c === "rtl" ? [...w.map((h) => h + i.value), 0] : w,
        right: c === "rtl" ? p : [...p.map((h) => h + i.value), 0],
        isSticky: r.isSticky
      });
    }), x = Ga(ye(e, "colWidths"), ye(e, "columCount"));
    return () => {
      var v;
      const {
        noData: c,
        columCount: p,
        stickyTopOffset: w,
        stickyBottomOffset: h,
        stickyClassName: O,
        maxContentScroll: T
      } = e, {
        isSticky: N
      } = r;
      return f("div", {
        style: g({
          overflow: "hidden"
        }, N ? {
          top: `${w}px`,
          bottom: `${h}px`
        } : {}),
        ref: a,
        class: ee(n.class, {
          [O]: !!O
        })
      }, [f("table", {
        style: {
          tableLayout: "fixed",
          visibility: c || x.value ? null : "hidden"
        }
      }, [(!c || !T || s.value) && f(Yo, {
        colWidths: x.value ? [...x.value, i.value] : [],
        columCount: p + 1,
        columns: b.value
      }, null), (v = o.default) === null || v === void 0 ? void 0 : v.call(o, g(g({}, e), {
        stickyOffsets: C.value,
        columns: d.value,
        flattenColumns: b.value
      }))])]);
    };
  }
});
function so(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
    n[o - 1] = arguments[o];
  return at($r(n.map((l) => [l, ye(e, l)])));
}
const Ja = [], Ya = {}, dn = "rc-table-internal-hook", qa = oe({
  name: "VcTable",
  inheritAttrs: !1,
  props: ["prefixCls", "data", "columns", "rowKey", "tableLayout", "scroll", "rowClassName", "title", "footer", "id", "showHeader", "components", "customRow", "customHeaderRow", "direction", "expandFixed", "expandColumnWidth", "expandedRowKeys", "defaultExpandedRowKeys", "expandedRowRender", "expandRowByClick", "expandIcon", "onExpand", "onExpandedRowsChange", "onUpdate:expandedRowKeys", "defaultExpandAllRows", "indentSize", "expandIconColumnIndex", "expandedRowClassName", "childrenColumnName", "rowExpandable", "sticky", "transformColumns", "internalHooks", "internalRefs", "canExpandable", "onUpdateInternalRefs", "transformCellText"],
  emits: ["expand", "expandedRowsChange", "updateInternalRefs", "update:expandedRowKeys"],
  setup(e, t) {
    let {
      attrs: n,
      slots: o,
      emit: l
    } = t;
    const r = S(() => e.data || Ja), i = S(() => !!r.value.length), a = S(() => ia(e.components, {})), u = (E, R) => Fo(a.value, E) || R, m = S(() => {
      const E = e.rowKey;
      return typeof E == "function" ? E : (R) => {
        const ne = R && R[E];
        return process.env.NODE_ENV !== "production" && ze(ne !== void 0, "Each record in table should have a unique `key` prop, or set `rowKey` to an unique primary key."), ne;
      };
    }), s = S(() => e.expandIcon || Wa), d = S(() => e.childrenColumnName || "children"), b = S(() => e.expandedRowRender ? "row" : e.canExpandable || r.value.some((E) => E && typeof E == "object" && E[d.value]) ? "nest" : !1), C = pe([]);
    _e(() => {
      e.defaultExpandedRowKeys && (C.value = e.defaultExpandedRowKeys), e.defaultExpandAllRows && (C.value = Va(r.value, m.value, d.value));
    })();
    const v = S(() => new Set(e.expandedRowKeys || C.value || [])), c = (E) => {
      const R = m.value(E, r.value.indexOf(E));
      let ne;
      const me = v.value.has(R);
      me ? (v.value.delete(R), ne = [...v.value]) : ne = [...v.value, R], C.value = ne, l("expand", !me, E), l("update:expandedRowKeys", ne), l("expandedRowsChange", ne);
    };
    process.env.NODE_ENV !== "production" && e.expandedRowRender && r.value.some((E) => Array.isArray(E == null ? void 0 : E[d.value])) && ze(!1, "`expandedRowRender` should not use with nested Table");
    const p = se(0), [w, h] = Da(g(g({}, Vt(e)), {
      // children,
      expandable: S(() => !!e.expandedRowRender),
      expandedKeys: v,
      getRowKey: m,
      onTriggerExpand: c,
      expandIcon: s
    }), S(() => e.internalHooks === dn ? e.transformColumns : null)), O = S(() => ({
      columns: w.value,
      flattenColumns: h.value
    })), T = se(), N = se(), P = se(), z = se({
      scrollWidth: 0,
      clientWidth: 0
    }), y = se(), [$, _] = et(!1), [D, B] = et(!1), [H, G] = Jo(/* @__PURE__ */ new Map()), te = S(() => Kt(h.value)), fe = S(() => te.value.map((E) => H.value.get(E))), X = S(() => h.value.length), W = Ba(fe, X, ye(e, "direction")), L = S(() => e.scroll && an(e.scroll.y)), J = S(() => e.scroll && an(e.scroll.x) || !!e.expandFixed), I = S(() => J.value && h.value.some((E) => {
      let {
        fixed: R
      } = E;
      return R;
    })), K = se(), k = Ua(ye(e, "sticky"), ye(e, "prefixCls")), F = at({}), j = S(() => {
      const E = Object.values(F)[0];
      return (L.value || k.value.isSticky) && E;
    }), ie = (E, R) => {
      R ? F[E] = R : delete F[E];
    }, Y = se({}), be = se({}), xe = se({});
    _e(() => {
      L.value && (be.value = {
        overflowY: "scroll",
        maxHeight: Un(e.scroll.y)
      }), J.value && (Y.value = {
        overflowX: "auto"
      }, L.value || (be.value = {
        overflowY: "hidden"
      }), xe.value = {
        width: e.scroll.x === !0 ? "auto" : Un(e.scroll.x),
        minWidth: "100%"
      });
    });
    const we = (E, R) => {
      Al(T.value) && G((ne) => {
        if (ne.get(E) !== R) {
          const me = new Map(ne);
          return me.set(E, R), me;
        }
        return ne;
      });
    }, [Te, Ke] = ka();
    function Ce(E, R) {
      if (!R)
        return;
      if (typeof R == "function") {
        R(E);
        return;
      }
      const ne = R.$el || R;
      ne.scrollLeft !== E && (ne.scrollLeft = E);
    }
    const $e = (E) => {
      let {
        currentTarget: R,
        scrollLeft: ne
      } = E;
      var me;
      const Pe = e.direction === "rtl", ve = typeof ne == "number" ? ne : R.scrollLeft, Se = R || Ya;
      if ((!Ke() || Ke() === Se) && (Te(Se), Ce(ve, N.value), Ce(ve, P.value), Ce(ve, y.value), Ce(ve, (me = K.value) === null || me === void 0 ? void 0 : me.setScrollLeft)), R) {
        const {
          scrollWidth: he,
          clientWidth: Ee
        } = R;
        Pe ? (_(-ve < he - Ee), B(-ve > 0)) : (_(ve > 0), B(ve < he - Ee));
      }
    }, A = () => {
      J.value && P.value ? $e({
        currentTarget: P.value
      }) : (_(!1), B(!1));
    };
    let Z;
    const M = (E) => {
      E !== p.value && (A(), p.value = T.value ? T.value.offsetWidth : E);
    }, U = (E) => {
      let {
        width: R
      } = E;
      if (clearTimeout(Z), p.value === 0) {
        M(R);
        return;
      }
      Z = setTimeout(() => {
        M(R);
      }, 100);
    };
    De([J, () => e.data, () => e.columns], () => {
      J.value && A();
    }, {
      flush: "post"
    });
    const [q, ce] = et(0);
    pa(), tt(() => {
      st(() => {
        var E, R;
        A(), ce(Kl(P.value).width), z.value = {
          scrollWidth: ((E = P.value) === null || E === void 0 ? void 0 : E.scrollWidth) || 0,
          clientWidth: ((R = P.value) === null || R === void 0 ? void 0 : R.clientWidth) || 0
        };
      });
    }), Po(() => {
      st(() => {
        var E, R;
        const ne = ((E = P.value) === null || E === void 0 ? void 0 : E.scrollWidth) || 0, me = ((R = P.value) === null || R === void 0 ? void 0 : R.clientWidth) || 0;
        (z.value.scrollWidth !== ne || z.value.clientWidth !== me) && (z.value = {
          scrollWidth: ne,
          clientWidth: me
        });
      });
    }), _e(() => {
      e.internalHooks === dn && e.internalRefs && e.onUpdateInternalRefs({
        body: P.value ? P.value.$el || P.value : null
      });
    }, {
      flush: "post"
    });
    const Q = S(() => e.tableLayout ? e.tableLayout : I.value ? e.scroll.x === "max-content" ? "auto" : "fixed" : L.value || k.value.isSticky || h.value.some((E) => {
      let {
        ellipsis: R
      } = E;
      return R;
    }) ? "fixed" : "auto"), le = () => {
      var E;
      return i.value ? null : ((E = o.emptyText) === null || E === void 0 ? void 0 : E.call(o)) || "No Data";
    };
    ra(at(g(g({}, Vt(so(e, "prefixCls", "direction", "transformCellText"))), {
      getComponent: u,
      scrollbarSize: q,
      fixedInfoList: S(() => h.value.map((E, R) => On(R, R, h.value, W.value, e.direction))),
      isSticky: S(() => k.value.isSticky),
      summaryCollect: ie
    }))), $a(at(g(g({}, Vt(so(e, "rowClassName", "expandedRowClassName", "expandRowByClick", "expandedRowRender", "expandIconColumnIndex", "indentSize"))), {
      columns: w,
      flattenColumns: h,
      tableLayout: Q,
      expandIcon: s,
      expandableType: b,
      onTriggerExpand: c
    }))), Ia({
      onColumnResize: we
    }), Ca({
      componentWidth: p,
      fixHeader: L,
      fixColumn: I,
      horizonScroll: J
    });
    const ge = () => f(Ta, {
      data: r.value,
      measureColumnWidth: L.value || J.value || k.value.isSticky,
      expandedKeys: v.value,
      rowExpandable: e.rowExpandable,
      getRowKey: m.value,
      customRow: e.customRow,
      childrenColumnName: d.value
    }, {
      emptyNode: le
    }), de = () => f(Yo, {
      colWidths: h.value.map((E) => {
        let {
          width: R
        } = E;
        return R;
      }),
      columns: h.value
    }, null);
    return () => {
      var E;
      const {
        prefixCls: R,
        scroll: ne,
        tableLayout: me,
        direction: Pe,
        // Additional Part
        title: ve = o.title,
        footer: Se = o.footer,
        // Customize
        id: he,
        showHeader: Ee,
        customHeaderRow: Oe
      } = e, {
        isSticky: ft,
        offsetHeader: yt,
        offsetSummary: cl,
        offsetScroll: ul,
        stickyClassName: dl,
        container: fl
      } = k.value, kn = u(["table"], "table"), Mt = u(["body"]), lt = (E = o.summary) === null || E === void 0 ? void 0 : E.call(o, {
        pageData: r.value
      });
      let jt = () => null;
      const Lt = {
        colWidths: fe.value,
        columCount: h.value.length,
        stickyOffsets: W.value,
        customHeaderRow: Oe,
        fixHeader: L.value,
        scroll: ne
      };
      if (process.env.NODE_ENV !== "production" && typeof Mt == "function" && i.value && !L.value && ze(!1, "`components.body` with render props is only work on `scroll.y`."), L.value || ft) {
        let Ht = () => null;
        typeof Mt == "function" ? (Ht = () => Mt(r.value, {
          scrollbarSize: q.value,
          ref: P,
          onScroll: $e
        }), Lt.colWidths = h.value.map((rt, ml) => {
          let {
            width: Kn
          } = rt;
          const Wt = ml === w.value.length - 1 ? Kn - q.value : Kn;
          return typeof Wt == "number" && !Number.isNaN(Wt) ? Wt : (ze(!1, "When use `components.body` with render props. Each column should have a fixed `width` value."), 0);
        })) : Ht = () => f("div", {
          style: g(g({}, Y.value), be.value),
          onScroll: $e,
          ref: P,
          class: ee(`${R}-body`)
        }, [f(kn, {
          style: g(g({}, xe.value), {
            tableLayout: Q.value
          })
        }, {
          default: () => [de(), ge(), !j.value && lt && f(St, {
            stickyOffsets: W.value,
            flattenColumns: h.value
          }, {
            default: () => [lt]
          })]
        })]);
        const zn = g(g(g({
          noData: !r.value.length,
          maxContentScroll: J.value && ne.x === "max-content"
        }, Lt), O.value), {
          direction: Pe,
          stickyClassName: dl,
          onScroll: $e
        });
        jt = () => f(Be, null, [Ee !== !1 && f(io, V(V({}, zn), {}, {
          stickyTopOffset: yt,
          class: `${R}-header`,
          ref: N
        }), {
          default: (rt) => f(Be, null, [f(ro, rt, null), j.value === "top" && f(St, rt, {
            default: () => [lt]
          })])
        }), Ht(), j.value && j.value !== "top" && f(io, V(V({}, zn), {}, {
          stickyBottomOffset: cl,
          class: `${R}-summary`,
          ref: y
        }), {
          default: (rt) => f(St, rt, {
            default: () => [lt]
          })
        }), ft && P.value && f(Xa, {
          ref: K,
          offsetScroll: ul,
          scrollBodyRef: P,
          onScroll: $e,
          container: fl,
          scrollBodySizeInfo: z.value
        }, null)]);
      } else
        jt = () => f("div", {
          style: g(g({}, Y.value), be.value),
          class: ee(`${R}-content`),
          onScroll: $e,
          ref: P
        }, [f(kn, {
          style: g(g({}, xe.value), {
            tableLayout: Q.value
          })
        }, {
          default: () => [de(), Ee !== !1 && f(ro, V(V({}, Lt), O.value), null), ge(), lt && f(St, {
            stickyOffsets: W.value,
            flattenColumns: h.value
          }, {
            default: () => [lt]
          })]
        })]);
      const pl = lr(n, {
        aria: !0,
        data: !0
      }), Bn = () => f("div", V(V({}, pl), {}, {
        class: ee(R, {
          [`${R}-rtl`]: Pe === "rtl",
          [`${R}-ping-left`]: $.value,
          [`${R}-ping-right`]: D.value,
          [`${R}-layout-fixed`]: me === "fixed",
          [`${R}-fixed-header`]: L.value,
          /** No used but for compatible */
          [`${R}-fixed-column`]: I.value,
          [`${R}-scroll-horizontal`]: J.value,
          [`${R}-has-fix-left`]: h.value[0] && h.value[0].fixed,
          [`${R}-has-fix-right`]: h.value[X.value - 1] && h.value[X.value - 1].fixed === "right",
          [n.class]: n.class
        }),
        style: n.style,
        id: he,
        ref: T
      }), [ve && f(un, {
        class: `${R}-title`
      }, {
        default: () => [ve(r.value)]
      }), f("div", {
        class: `${R}-container`
      }, [jt()]), Se && f(un, {
        class: `${R}-footer`
      }, {
        default: () => [Se(r.value)]
      })]);
      return J.value ? f(Ro, {
        onResize: U
      }, {
        default: Bn
      }) : Bn();
    };
  }
});
function Qa() {
  const e = g({}, arguments.length <= 0 ? void 0 : arguments[0]);
  for (let t = 1; t < arguments.length; t++) {
    const n = t < 0 || arguments.length <= t ? void 0 : arguments[t];
    n && Object.keys(n).forEach((o) => {
      const l = n[o];
      l !== void 0 && (e[o] = l);
    });
  }
  return e;
}
const fn = 10;
function Za(e, t) {
  const n = {
    current: e.current,
    pageSize: e.pageSize
  };
  return Object.keys(t && typeof t == "object" ? t : {}).forEach((l) => {
    const r = e[l];
    typeof r != "function" && (n[l] = r);
  }), n;
}
function ei(e, t, n) {
  const o = S(() => t.value && typeof t.value == "object" ? t.value : {}), l = S(() => o.value.total || 0), [r, i] = et(() => ({
    current: "defaultCurrent" in o.value ? o.value.defaultCurrent : 1,
    pageSize: "defaultPageSize" in o.value ? o.value.defaultPageSize : fn
  })), a = S(() => {
    const s = Qa(r.value, o.value, {
      total: l.value > 0 ? l.value : e.value
    }), d = Math.ceil((l.value || e.value) / s.pageSize);
    return s.current > d && (s.current = d || 1), s;
  }), u = (s, d) => {
    t.value !== !1 && i({
      current: s ?? 1,
      pageSize: d || a.value.pageSize
    });
  }, m = (s, d) => {
    var b, C;
    t.value && ((C = (b = o.value).onChange) === null || C === void 0 || C.call(b, s, d)), u(s, d), n(s, d || a.value.pageSize);
  };
  return [S(() => t.value === !1 ? {} : g(g({}, a.value), {
    onChange: m
  })), u];
}
function ti(e, t, n) {
  const o = pe({});
  De([e, t, n], () => {
    const r = /* @__PURE__ */ new Map(), i = n.value, a = t.value;
    function u(m) {
      m.forEach((s, d) => {
        const b = i(s, d);
        r.set(b, s), s && typeof s == "object" && a in s && u(s[a] || []);
      });
    }
    u(e.value), o.value = {
      kvMap: r
    };
  }, {
    deep: !0,
    immediate: !0
  });
  function l(r) {
    return o.value.kvMap.get(r);
  }
  return [l];
}
const ke = {}, pn = "SELECT_ALL", mn = "SELECT_INVERT", vn = "SELECT_NONE", ni = [];
function Qo(e, t) {
  let n = [];
  return (t || []).forEach((o) => {
    n.push(o), o && typeof o == "object" && e in o && (n = [...n, ...Qo(e, o[e])]);
  }), n;
}
function oi(e, t) {
  const n = S(() => {
    const y = e.value || {}, {
      checkStrictly: $ = !0
    } = y;
    return g(g({}, y), {
      checkStrictly: $
    });
  }), [o, l] = ur(n.value.selectedRowKeys || n.value.defaultSelectedRowKeys || ni, {
    value: S(() => n.value.selectedRowKeys)
  }), r = pe(/* @__PURE__ */ new Map()), i = (y) => {
    if (n.value.preserveSelectedRowKeys) {
      const $ = /* @__PURE__ */ new Map();
      y.forEach((_) => {
        let D = t.getRecordByKey(_);
        !D && r.value.has(_) && (D = r.value.get(_)), $.set(_, D);
      }), r.value = $;
    }
  };
  _e(() => {
    i(o.value);
  });
  const a = S(() => n.value.checkStrictly ? null : Eo(t.data.value, {
    externalGetKey: t.getRowKey.value,
    childrenPropName: t.childrenColumnName.value
  }).keyEntities), u = S(() => Qo(t.childrenColumnName.value, t.pageData.value)), m = S(() => {
    const y = /* @__PURE__ */ new Map(), $ = t.getRowKey.value, _ = n.value.getCheckboxProps;
    return u.value.forEach((D, B) => {
      const H = $(D, B), G = (_ ? _(D) : null) || {};
      y.set(H, G), process.env.NODE_ENV !== "production" && ("checked" in G || "defaultChecked" in G) && Ie(!1, "Table", "Do not set `checked` or `defaultChecked` in `getCheckboxProps`. Please use `selectedRowKeys` instead.");
    }), y;
  }), {
    maxLevel: s,
    levelEntities: d
  } = Ul(a), b = (y) => {
    var $;
    return !!(!(($ = m.value.get(t.getRowKey.value(y))) === null || $ === void 0) && $.disabled);
  }, C = S(() => {
    if (n.value.checkStrictly)
      return [o.value || [], []];
    const {
      checkedKeys: y,
      halfCheckedKeys: $
    } = Gt(o.value, !0, a.value, s.value, d.value, b);
    return [y || [], $];
  }), x = S(() => C.value[0]), v = S(() => C.value[1]), c = S(() => {
    const y = n.value.type === "radio" ? x.value.slice(0, 1) : x.value;
    return new Set(y);
  }), p = S(() => n.value.type === "radio" ? /* @__PURE__ */ new Set() : new Set(v.value)), [w, h] = et(null), O = (y) => {
    let $, _;
    i(y);
    const {
      preserveSelectedRowKeys: D,
      onChange: B
    } = n.value, {
      getRecordByKey: H
    } = t;
    D ? ($ = y, _ = y.map((G) => r.value.get(G))) : ($ = [], _ = [], y.forEach((G) => {
      const te = H(G);
      te !== void 0 && ($.push(G), _.push(te));
    })), l($), B == null || B($, _);
  }, T = (y, $, _, D) => {
    const {
      onSelect: B
    } = n.value, {
      getRecordByKey: H
    } = t || {};
    if (B) {
      const G = _.map((te) => H(te));
      B(H(y), $, G, D);
    }
    O(_);
  }, N = S(() => {
    const {
      onSelectInvert: y,
      onSelectNone: $,
      selections: _,
      hideSelectAll: D
    } = n.value, {
      data: B,
      pageData: H,
      getRowKey: G,
      locale: te
    } = t;
    return !_ || D ? null : (_ === !0 ? [pn, mn, vn] : _).map((X) => X === pn ? {
      key: "all",
      text: te.value.selectionAll,
      onSelect() {
        O(B.value.map((W, L) => G.value(W, L)).filter((W) => {
          const L = m.value.get(W);
          return !(L != null && L.disabled) || c.value.has(W);
        }));
      }
    } : X === mn ? {
      key: "invert",
      text: te.value.selectInvert,
      onSelect() {
        const W = new Set(c.value);
        H.value.forEach((J, I) => {
          const K = G.value(J, I), k = m.value.get(K);
          k != null && k.disabled || (W.has(K) ? W.delete(K) : W.add(K));
        });
        const L = Array.from(W);
        y && (Ie(!1, "Table", "`onSelectInvert` will be removed in future. Please use `onChange` instead."), y(L)), O(L);
      }
    } : X === vn ? {
      key: "none",
      text: te.value.selectNone,
      onSelect() {
        $ == null || $(), O(Array.from(c.value).filter((W) => {
          const L = m.value.get(W);
          return L == null ? void 0 : L.disabled;
        }));
      }
    } : X);
  }), P = S(() => u.value.length);
  return [(y) => {
    var $;
    const {
      onSelectAll: _,
      onSelectMultiple: D,
      columnWidth: B,
      type: H,
      fixed: G,
      renderCell: te,
      hideSelectAll: fe,
      checkStrictly: X
    } = n.value, {
      prefixCls: W,
      getRecordByKey: L,
      getRowKey: J,
      expandType: I,
      getPopupContainer: K
    } = t;
    if (!e.value)
      return process.env.NODE_ENV !== "production" && Ie(!y.includes(ke), "Table", "`rowSelection` is not config but `SELECTION_COLUMN` exists in the `columns`."), y.filter((M) => M !== ke);
    let k = y.slice();
    const F = new Set(c.value), j = u.value.map(J.value).filter((M) => !m.value.get(M).disabled), ie = j.every((M) => F.has(M)), Y = j.some((M) => F.has(M)), be = () => {
      const M = [];
      ie ? j.forEach((q) => {
        F.delete(q), M.push(q);
      }) : j.forEach((q) => {
        F.has(q) || (F.add(q), M.push(q));
      });
      const U = Array.from(F);
      _ == null || _(!ie, U.map((q) => L(q)), M.map((q) => L(q))), O(U);
    };
    let xe;
    if (H !== "radio") {
      let M;
      if (N.value) {
        const le = f(Rt, {
          getPopupContainer: K.value
        }, {
          default: () => [N.value.map((ge, de) => {
            const {
              key: E,
              text: R,
              onSelect: ne
            } = ge;
            return f(Rt.Item, {
              key: E || de,
              onClick: () => {
                ne == null || ne(j);
              }
            }, {
              default: () => [R]
            });
          })]
        });
        M = f("div", {
          class: `${W.value}-selection-extra`
        }, [f(Ue, {
          overlay: le,
          getPopupContainer: K.value
        }, {
          default: () => [f("span", null, [f(cr, null, null)])]
        })]);
      }
      const U = u.value.map((le, ge) => {
        const de = J.value(le, ge), E = m.value.get(de) || {};
        return g({
          checked: F.has(de)
        }, E);
      }).filter((le) => {
        let {
          disabled: ge
        } = le;
        return ge;
      }), q = !!U.length && U.length === P.value, ce = q && U.every((le) => {
        let {
          checked: ge
        } = le;
        return ge;
      }), Q = q && U.some((le) => {
        let {
          checked: ge
        } = le;
        return ge;
      });
      xe = !fe && f("div", {
        class: `${W.value}-selection`
      }, [f(Tt, {
        checked: q ? ce : !!P.value && ie,
        indeterminate: q ? !ce && Q : !ie && Y,
        onChange: be,
        disabled: P.value === 0 || q,
        "aria-label": M ? "Custom selection" : "Select all",
        skipGroup: !0
      }, null), M]);
    }
    let we;
    H === "radio" ? we = (M) => {
      let {
        record: U,
        index: q
      } = M;
      const ce = J.value(U, q), Q = F.has(ce);
      return {
        node: f(No, V(V({}, m.value.get(ce)), {}, {
          checked: Q,
          onClick: (le) => le.stopPropagation(),
          onChange: (le) => {
            F.has(ce) || T(ce, !0, [ce], le.nativeEvent);
          }
        }), null),
        checked: Q
      };
    } : we = (M) => {
      let {
        record: U,
        index: q
      } = M;
      var ce;
      const Q = J.value(U, q), le = F.has(Q), ge = p.value.has(Q), de = m.value.get(Q);
      let E;
      return I.value === "nest" ? (E = ge, Ie(typeof (de == null ? void 0 : de.indeterminate) != "boolean", "Table", "set `indeterminate` using `rowSelection.getCheckboxProps` is not allowed with tree structured dataSource.")) : E = (ce = de == null ? void 0 : de.indeterminate) !== null && ce !== void 0 ? ce : ge, {
        node: f(Tt, V(V({}, de), {}, {
          indeterminate: E,
          checked: le,
          skipGroup: !0,
          onClick: (R) => R.stopPropagation(),
          onChange: (R) => {
            let {
              nativeEvent: ne
            } = R;
            const {
              shiftKey: me
            } = ne;
            let Pe = -1, ve = -1;
            if (me && X) {
              const Se = /* @__PURE__ */ new Set([w.value, Q]);
              j.some((he, Ee) => {
                if (Se.has(he))
                  if (Pe === -1)
                    Pe = Ee;
                  else
                    return ve = Ee, !0;
                return !1;
              });
            }
            if (ve !== -1 && Pe !== ve && X) {
              const Se = j.slice(Pe, ve + 1), he = [];
              le ? Se.forEach((Oe) => {
                F.has(Oe) && (he.push(Oe), F.delete(Oe));
              }) : Se.forEach((Oe) => {
                F.has(Oe) || (he.push(Oe), F.add(Oe));
              });
              const Ee = Array.from(F);
              D == null || D(!le, Ee.map((Oe) => L(Oe)), he.map((Oe) => L(Oe))), O(Ee);
            } else {
              const Se = x.value;
              if (X) {
                const he = le ? Gl(Se, Q) : Jl(Se, Q);
                T(Q, !le, he, ne);
              } else {
                const he = Gt([...Se, Q], !0, a.value, s.value, d.value, b), {
                  checkedKeys: Ee,
                  halfCheckedKeys: Oe
                } = he;
                let ft = Ee;
                if (le) {
                  const yt = new Set(Ee);
                  yt.delete(Q), ft = Gt(Array.from(yt), {
                    checked: !1,
                    halfCheckedKeys: Oe
                  }, a.value, s.value, d.value, b).checkedKeys;
                }
                T(Q, !le, ft, ne);
              }
            }
            h(Q);
          }
        }), null),
        checked: le
      };
    };
    const Te = (M) => {
      let {
        record: U,
        index: q
      } = M;
      const {
        node: ce,
        checked: Q
      } = we({
        record: U,
        index: q
      });
      return te ? te(Q, U, q, ce) : ce;
    };
    if (!k.includes(ke))
      if (k.findIndex((M) => {
        var U;
        return ((U = M[it]) === null || U === void 0 ? void 0 : U.columnType) === "EXPAND_COLUMN";
      }) === 0) {
        const [M, ...U] = k;
        k = [M, ke, ...U];
      } else
        k = [ke, ...k];
    const Ke = k.indexOf(ke);
    process.env.NODE_ENV !== "production" && k.filter((M) => M === ke).length > 1 && Ie(!1, "Table", "Multiple `SELECTION_COLUMN` exist in `columns`."), k = k.filter((M, U) => M !== ke || U === Ke);
    const Ce = k[Ke - 1], $e = k[Ke + 1];
    let A = G;
    A === void 0 && (($e == null ? void 0 : $e.fixed) !== void 0 ? A = $e.fixed : (Ce == null ? void 0 : Ce.fixed) !== void 0 && (A = Ce.fixed)), A && Ce && (($ = Ce[it]) === null || $ === void 0 ? void 0 : $.columnType) === "EXPAND_COLUMN" && Ce.fixed === void 0 && (Ce.fixed = A);
    const Z = {
      fixed: A,
      width: B,
      className: `${W.value}-selection-column`,
      title: n.value.columnTitle || xe,
      customRender: Te,
      [it]: {
        class: `${W.value}-selection-col`
      }
    };
    return k.map((M) => M === ke ? Z : M);
  }, c];
}
var li = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" } }] }, name: "caret-down", theme: "outlined" };
function co(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(l) {
      return Object.getOwnPropertyDescriptor(n, l).enumerable;
    }))), o.forEach(function(l) {
      ri(e, l, n[l]);
    });
  }
  return e;
}
function ri(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var In = function(t, n) {
  var o = co({}, t, n.attrs);
  return f(Ve, co({}, o, {
    icon: li
  }), null);
};
In.displayName = "CaretDownOutlined";
In.inheritAttrs = !1;
var ai = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z" } }] }, name: "caret-up", theme: "outlined" };
function uo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(l) {
      return Object.getOwnPropertyDescriptor(n, l).enumerable;
    }))), o.forEach(function(l) {
      ii(e, l, n[l]);
    });
  }
  return e;
}
function ii(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var En = function(t, n) {
  var o = uo({}, t, n.attrs);
  return f(Ve, uo({}, o, {
    icon: ai
  }), null);
};
En.displayName = "CaretUpOutlined";
En.inheritAttrs = !1;
var si = function(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var l = 0, o = Object.getOwnPropertySymbols(e); l < o.length; l++)
      t.indexOf(o[l]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[l]) && (n[o[l]] = e[o[l]]);
  return n;
};
function nt(e, t) {
  return "key" in e && e.key !== void 0 && e.key !== null ? e.key : e.dataIndex ? Array.isArray(e.dataIndex) ? e.dataIndex.join(".") : e.dataIndex : t;
}
function bt(e, t) {
  return t ? `${t}-${e}` : `${e}`;
}
function Tn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Zo() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  const t = Io(e), n = [];
  return t.forEach((o) => {
    var l, r, i, a;
    if (!o)
      return;
    const u = o.key, m = ((l = o.props) === null || l === void 0 ? void 0 : l.style) || {}, s = ((r = o.props) === null || r === void 0 ? void 0 : r.class) || "", d = o.props || {};
    for (const [c, p] of Object.entries(d))
      d[Fl(c)] = p;
    const b = o.children || {}, {
      default: C
    } = b, x = si(b, ["default"]), v = g(g(g({}, x), d), {
      style: m,
      class: s
    });
    if (u && (v.key = u), !((i = o.type) === null || i === void 0) && i.__ANT_TABLE_COLUMN_GROUP)
      v.children = Zo(typeof C == "function" ? C() : C);
    else {
      const c = (a = o.children) === null || a === void 0 ? void 0 : a.default;
      v.customRender = v.customRender || c;
    }
    n.push(v);
  }), n;
}
const $t = "ascend", Yt = "descend";
function Bt(e) {
  return typeof e.sorter == "object" && typeof e.sorter.multiple == "number" ? e.sorter.multiple : !1;
}
function fo(e) {
  return typeof e == "function" ? e : e && typeof e == "object" && e.compare ? e.compare : !1;
}
function ci(e, t) {
  return t ? e[e.indexOf(t) + 1] : e[0];
}
function hn(e, t, n) {
  let o = [];
  function l(r, i) {
    o.push({
      column: r,
      key: nt(r, i),
      multiplePriority: Bt(r),
      sortOrder: r.sortOrder
    });
  }
  return (e || []).forEach((r, i) => {
    const a = bt(i, n);
    r.children ? ("sortOrder" in r && l(r, a), o = [...o, ...hn(r.children, t, a)]) : r.sorter && ("sortOrder" in r ? l(r, a) : t && r.defaultSortOrder && o.push({
      column: r,
      key: nt(r, a),
      multiplePriority: Bt(r),
      sortOrder: r.defaultSortOrder
    }));
  }), o;
}
function el(e, t, n, o, l, r, i, a) {
  return (t || []).map((u, m) => {
    const s = bt(m, a);
    let d = u;
    if (d.sorter) {
      const b = d.sortDirections || l, C = d.showSorterTooltip === void 0 ? i : d.showSorterTooltip, x = nt(d, s), v = n.find((y) => {
        let {
          key: $
        } = y;
        return $ === x;
      }), c = v ? v.sortOrder : null, p = ci(b, c), w = b.includes($t) && f(En, {
        class: ee(`${e}-column-sorter-up`, {
          active: c === $t
        }),
        role: "presentation"
      }, null), h = b.includes(Yt) && f(In, {
        role: "presentation",
        class: ee(`${e}-column-sorter-down`, {
          active: c === Yt
        })
      }, null), {
        cancelSort: O,
        triggerAsc: T,
        triggerDesc: N
      } = r || {};
      let P = O;
      p === Yt ? P = N : p === $t && (P = T);
      const z = typeof C == "object" ? C : {
        title: P
      };
      d = g(g({}, d), {
        className: ee(d.className, {
          [`${e}-column-sort`]: c
        }),
        title: (y) => {
          const $ = f("div", {
            class: `${e}-column-sorters`
          }, [f("span", {
            class: `${e}-column-title`
          }, [Tn(u.title, y)]), f("span", {
            class: ee(`${e}-column-sorter`, {
              [`${e}-column-sorter-full`]: !!(w && h)
            })
          }, [f("span", {
            class: `${e}-column-sorter-inner`
          }, [w, h])])]);
          return C ? f(Ml, z, {
            default: () => [$]
          }) : $;
        },
        customHeaderCell: (y) => {
          const $ = u.customHeaderCell && u.customHeaderCell(y) || {}, _ = $.onClick, D = $.onKeydown;
          return $.onClick = (B) => {
            o({
              column: u,
              key: x,
              sortOrder: p,
              multiplePriority: Bt(u)
            }), _ && _(B);
          }, $.onKeydown = (B) => {
            B.keyCode === Do.ENTER && (o({
              column: u,
              key: x,
              sortOrder: p,
              multiplePriority: Bt(u)
            }), D == null || D(B));
          }, c && ($["aria-sort"] = c === "ascend" ? "ascending" : "descending"), $.class = ee($.class, `${e}-column-has-sorters`), $.tabindex = 0, $;
        }
      });
    }
    return "children" in d && (d = g(g({}, d), {
      children: el(e, d.children, n, o, l, r, i, s)
    })), d;
  });
}
function po(e) {
  const {
    column: t,
    sortOrder: n
  } = e;
  return {
    column: t,
    order: n,
    field: t.dataIndex,
    columnKey: t.key
  };
}
function mo(e) {
  const t = e.filter((n) => {
    let {
      sortOrder: o
    } = n;
    return o;
  }).map(po);
  return t.length === 0 && e.length ? g(g({}, po(e[e.length - 1])), {
    column: void 0
  }) : t.length <= 1 ? t[0] || {} : t;
}
function gn(e, t, n) {
  const o = t.slice().sort((i, a) => a.multiplePriority - i.multiplePriority), l = e.slice(), r = o.filter((i) => {
    let {
      column: {
        sorter: a
      },
      sortOrder: u
    } = i;
    return fo(a) && u;
  });
  return r.length ? l.sort((i, a) => {
    for (let u = 0; u < r.length; u += 1) {
      const m = r[u], {
        column: {
          sorter: s
        },
        sortOrder: d
      } = m, b = fo(s);
      if (b && d) {
        const C = b(i, a, d);
        if (C !== 0)
          return d === $t ? C : -C;
      }
    }
    return 0;
  }).map((i) => {
    const a = i[n];
    return a ? g(g({}, i), {
      [n]: gn(a, t, n)
    }) : i;
  }) : l;
}
function ui(e) {
  let {
    prefixCls: t,
    mergedColumns: n,
    onSorterChange: o,
    sortDirections: l,
    tableLocale: r,
    showSorterTooltip: i
  } = e;
  const [a, u] = et(hn(n.value, !0)), m = S(() => {
    let x = !0;
    const v = hn(n.value, !1);
    if (!v.length)
      return a.value;
    const c = [];
    function p(h) {
      x ? c.push(h) : c.push(g(g({}, h), {
        sortOrder: null
      }));
    }
    let w = null;
    return v.forEach((h) => {
      w === null ? (p(h), h.sortOrder && (h.multiplePriority === !1 ? x = !1 : w = !0)) : (w && h.multiplePriority !== !1 || (x = !1), p(h));
    }), c;
  }), s = S(() => {
    const x = m.value.map((v) => {
      let {
        column: c,
        sortOrder: p
      } = v;
      return {
        column: c,
        order: p
      };
    });
    return {
      sortColumns: x,
      // Legacy
      sortColumn: x[0] && x[0].column,
      sortOrder: x[0] && x[0].order
    };
  });
  function d(x) {
    let v;
    x.multiplePriority === !1 || !m.value.length || m.value[0].multiplePriority === !1 ? v = [x] : v = [...m.value.filter((c) => {
      let {
        key: p
      } = c;
      return p !== x.key;
    }), x], u(v), o(mo(v), v);
  }
  const b = (x) => el(t.value, x, m.value, d, l.value, r.value, i.value), C = S(() => mo(m.value));
  return [b, m, s, C];
}
var di = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M349 838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V642H349v196zm531.1-684H143.9c-24.5 0-39.8 26.7-27.5 48l221.3 376h348.8l221.3-376c12.1-21.3-3.2-48-27.7-48z" } }] }, name: "filter", theme: "filled" };
function vo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(l) {
      return Object.getOwnPropertyDescriptor(n, l).enumerable;
    }))), o.forEach(function(l) {
      fi(e, l, n[l]);
    });
  }
  return e;
}
function fi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Rn = function(t, n) {
  var o = vo({}, t, n.attrs);
  return f(Ve, vo({}, o, {
    icon: di
  }), null);
};
Rn.displayName = "FilterFilled";
Rn.inheritAttrs = !1;
const pi = (e) => {
  const {
    keyCode: t
  } = e;
  t === Do.ENTER && e.stopPropagation();
}, mi = (e, t) => {
  let {
    slots: n
  } = t;
  var o;
  return f("div", {
    onClick: (l) => l.stopPropagation(),
    onKeydown: pi
  }, [(o = n.default) === null || o === void 0 ? void 0 : o.call(n)]);
}, ho = oe({
  compatConfig: {
    MODE: 3
  },
  name: "FilterSearch",
  inheritAttrs: !1,
  props: {
    value: We(),
    onChange: ue(),
    filterSearch: Re([Boolean, Function]),
    tablePrefixCls: We(),
    locale: Me()
  },
  setup(e) {
    return () => {
      const {
        value: t,
        onChange: n,
        filterSearch: o,
        tablePrefixCls: l,
        locale: r
      } = e;
      return o ? f("div", {
        class: `${l}-filter-dropdown-search`
      }, [f(yr, {
        placeholder: r.filterSearchPlaceholder,
        onChange: n,
        value: t,
        htmlSize: 1,
        class: `${l}-filter-dropdown-search-input`
      }, {
        prefix: () => f(br, null, null)
      })]) : null;
    };
  }
}), go = 4;
function vi(e) {
  const {
    dropPosition: t,
    dropLevelOffset: n,
    prefixCls: o,
    indent: l,
    direction: r = "ltr"
  } = e, i = r === "ltr" ? "left" : "right", a = r === "ltr" ? "right" : "left", u = {
    [i]: `${-n * l + go}px`,
    [a]: 0
  };
  switch (t) {
    case -1:
      u.top = "-3px";
      break;
    case 1:
      u.bottom = "-3px";
      break;
    default:
      u.bottom = "-3px", u[i] = `${l + go}px`;
      break;
  }
  return f("div", {
    style: u,
    class: `${o}-drop-indicator`
  }, null);
}
const tl = () => {
  const e = Zl();
  return g(g({}, e), {
    showLine: Re([Boolean, Object]),
    /** 是否支持多选 */
    multiple: re(),
    /** 是否自动展开父节点 */
    autoExpandParent: re(),
    /** checkable状态下节点选择完全受控（父子节点选中状态不再关联）*/
    checkStrictly: re(),
    /** 是否支持选中 */
    checkable: re(),
    /** 是否禁用树 */
    disabled: re(),
    /** 默认展开所有树节点 */
    defaultExpandAll: re(),
    /** 默认展开对应树节点 */
    defaultExpandParent: re(),
    /** 默认展开指定的树节点 */
    defaultExpandedKeys: Ne(),
    /** （受控）展开指定的树节点 */
    expandedKeys: Ne(),
    /** （受控）选中复选框的树节点 */
    checkedKeys: Re([Array, Object]),
    /** 默认选中复选框的树节点 */
    defaultCheckedKeys: Ne(),
    /** （受控）设置选中的树节点 */
    selectedKeys: Ne(),
    /** 默认选中的树节点 */
    defaultSelectedKeys: Ne(),
    selectable: re(),
    loadedKeys: Ne(),
    draggable: re(),
    showIcon: re(),
    icon: ue(),
    switcherIcon: ae.any,
    prefixCls: String,
    /**
     * @default{title,key,children}
     * deprecated, please use `fieldNames` instead
     * 替换treeNode中 title,key,children字段为treeData中对应的字段
     */
    replaceFields: Me(),
    blockNode: re(),
    openAnimation: ae.any,
    onDoubleclick: e.onDblclick,
    "onUpdate:selectedKeys": ue(),
    "onUpdate:checkedKeys": ue(),
    "onUpdate:expandedKeys": ue()
  });
}, Pt = oe({
  compatConfig: {
    MODE: 3
  },
  name: "ATree",
  inheritAttrs: !1,
  props: dt(tl(), {
    checkable: !1,
    selectable: !0,
    showIcon: !1,
    blockNode: !1
  }),
  slots: Object,
  setup(e, t) {
    let {
      attrs: n,
      expose: o,
      emit: l,
      slots: r
    } = t;
    ze(!(e.treeData === void 0 && r.default), "`children` of Tree is deprecated. Please use `treeData` instead.");
    const {
      prefixCls: i,
      direction: a,
      virtual: u
    } = ot("tree", e), [m, s] = Yl(i), d = se();
    o({
      treeRef: d,
      onNodeExpand: function() {
        var c;
        (c = d.value) === null || c === void 0 || c.onNodeExpand(...arguments);
      },
      scrollTo: (c) => {
        var p;
        (p = d.value) === null || p === void 0 || p.scrollTo(c);
      },
      selectedKeys: S(() => {
        var c;
        return (c = d.value) === null || c === void 0 ? void 0 : c.selectedKeys;
      }),
      checkedKeys: S(() => {
        var c;
        return (c = d.value) === null || c === void 0 ? void 0 : c.checkedKeys;
      }),
      halfCheckedKeys: S(() => {
        var c;
        return (c = d.value) === null || c === void 0 ? void 0 : c.halfCheckedKeys;
      }),
      loadedKeys: S(() => {
        var c;
        return (c = d.value) === null || c === void 0 ? void 0 : c.loadedKeys;
      }),
      loadingKeys: S(() => {
        var c;
        return (c = d.value) === null || c === void 0 ? void 0 : c.loadingKeys;
      }),
      expandedKeys: S(() => {
        var c;
        return (c = d.value) === null || c === void 0 ? void 0 : c.expandedKeys;
      })
    }), _e(() => {
      Ie(e.replaceFields === void 0, "Tree", "`replaceFields` is deprecated, please use fieldNames instead");
    });
    const C = (c, p) => {
      l("update:checkedKeys", c), l("check", c, p);
    }, x = (c, p) => {
      l("update:expandedKeys", c), l("expand", c, p);
    }, v = (c, p) => {
      l("update:selectedKeys", c), l("select", c, p);
    };
    return () => {
      const {
        showIcon: c,
        showLine: p,
        switcherIcon: w = r.switcherIcon,
        icon: h = r.icon,
        blockNode: O,
        checkable: T,
        selectable: N,
        fieldNames: P = e.replaceFields,
        motion: z = e.openAnimation,
        itemHeight: y = 28,
        onDoubleclick: $,
        onDblclick: _
      } = e, D = g(g(g({}, n), $n(e, ["onUpdate:checkedKeys", "onUpdate:expandedKeys", "onUpdate:selectedKeys", "onDoubleclick"])), {
        showLine: !!p,
        dropIndicatorRender: vi,
        fieldNames: P,
        icon: h,
        itemHeight: y
      }), B = r.default ? It(r.default()) : void 0;
      return m(f(ql, V(V({}, D), {}, {
        virtual: u.value,
        motion: z,
        ref: d,
        prefixCls: i.value,
        class: ee({
          [`${i.value}-icon-hide`]: !c,
          [`${i.value}-block-node`]: O,
          [`${i.value}-unselectable`]: !N,
          [`${i.value}-rtl`]: a.value === "rtl"
        }, n.class, s.value),
        direction: a.value,
        checkable: T,
        selectable: N,
        switcherIcon: (H) => Ql(i.value, w, H, r.leafIcon, p),
        onCheck: C,
        onExpand: x,
        onSelect: v,
        onDblclick: _ || $,
        children: B
      }), g(g({}, r), {
        checkable: () => f("span", {
          class: `${i.value}-checkbox-inner`
        }, null)
      })));
    };
  }
});
var hi = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 00-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12 0-17.7-14.3-32-32-32zM136 256h188.5l119.6 114.4H748V444H238c-13 0-24.8 7.9-29.7 20L136 643.2V256zm635.3 512H159l103.3-256h612.4L771.3 768z" } }] }, name: "folder-open", theme: "outlined" };
function bo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(l) {
      return Object.getOwnPropertyDescriptor(n, l).enumerable;
    }))), o.forEach(function(l) {
      gi(e, l, n[l]);
    });
  }
  return e;
}
function gi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var _n = function(t, n) {
  var o = bo({}, t, n.attrs);
  return f(Ve, bo({}, o, {
    icon: hi
  }), null);
};
_n.displayName = "FolderOpenOutlined";
_n.inheritAttrs = !1;
var bi = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M880 298.4H521L403.7 186.2a8.15 8.15 0 00-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z" } }] }, name: "folder", theme: "outlined" };
function yo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(l) {
      return Object.getOwnPropertyDescriptor(n, l).enumerable;
    }))), o.forEach(function(l) {
      yi(e, l, n[l]);
    });
  }
  return e;
}
function yi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Nn = function(t, n) {
  var o = yo({}, t, n.attrs);
  return f(Ve, yo({}, o, {
    icon: bi
  }), null);
};
Nn.displayName = "FolderOutlined";
Nn.inheritAttrs = !1;
var He;
(function(e) {
  e[e.None = 0] = "None", e[e.Start = 1] = "Start", e[e.End = 2] = "End";
})(He || (He = {}));
function Dn(e, t, n) {
  function o(l) {
    const r = l[t.key], i = l[t.children];
    n(r, l) !== !1 && Dn(i || [], t, n);
  }
  e.forEach(o);
}
function xi(e) {
  let {
    treeData: t,
    expandedKeys: n,
    startKey: o,
    endKey: l,
    fieldNames: r = {
      title: "title",
      key: "key",
      children: "children"
    }
  } = e;
  const i = [];
  let a = He.None;
  if (o && o === l)
    return [o];
  if (!o || !l)
    return [];
  function u(m) {
    return m === o || m === l;
  }
  return Dn(t, r, (m) => {
    if (a === He.End)
      return !1;
    if (u(m)) {
      if (i.push(m), a === He.None)
        a = He.Start;
      else if (a === He.Start)
        return a = He.End, !1;
    } else
      a === He.Start && i.push(m);
    return n.includes(m);
  }), i;
}
function qt(e, t, n) {
  const o = [...t], l = [];
  return Dn(e, n, (r, i) => {
    const a = o.indexOf(r);
    return a !== -1 && (l.push(i), o.splice(a, 1)), !!o.length;
  }), l;
}
var Ci = function(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var l = 0, o = Object.getOwnPropertySymbols(e); l < o.length; l++)
      t.indexOf(o[l]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[l]) && (n[o[l]] = e[o[l]]);
  return n;
};
const Si = () => g(g({}, tl()), {
  expandAction: Re([Boolean, String])
});
function wi(e) {
  const {
    isLeaf: t,
    expanded: n
  } = e;
  return t ? f(tr, null, null) : n ? f(_n, null, null) : f(Nn, null, null);
}
const Qt = oe({
  compatConfig: {
    MODE: 3
  },
  name: "ADirectoryTree",
  inheritAttrs: !1,
  props: dt(Si(), {
    showIcon: !0,
    expandAction: "click"
  }),
  slots: Object,
  // emits: [
  //   'update:selectedKeys',
  //   'update:checkedKeys',
  //   'update:expandedKeys',
  //   'expand',
  //   'select',
  //   'check',
  //   'doubleclick',
  //   'dblclick',
  //   'click',
  // ],
  setup(e, t) {
    let {
      attrs: n,
      slots: o,
      emit: l,
      expose: r
    } = t;
    var i;
    const a = se(e.treeData || Jn(It((i = o.default) === null || i === void 0 ? void 0 : i.call(o))));
    De(() => e.treeData, () => {
      a.value = e.treeData;
    }), Po(() => {
      st(() => {
        var y;
        e.treeData === void 0 && o.default && (a.value = Jn(It((y = o.default) === null || y === void 0 ? void 0 : y.call(o))));
      });
    });
    const u = se(), m = se(), s = S(() => er(e.fieldNames)), d = se();
    r({
      scrollTo: (y) => {
        var $;
        ($ = d.value) === null || $ === void 0 || $.scrollTo(y);
      },
      selectedKeys: S(() => {
        var y;
        return (y = d.value) === null || y === void 0 ? void 0 : y.selectedKeys;
      }),
      checkedKeys: S(() => {
        var y;
        return (y = d.value) === null || y === void 0 ? void 0 : y.checkedKeys;
      }),
      halfCheckedKeys: S(() => {
        var y;
        return (y = d.value) === null || y === void 0 ? void 0 : y.halfCheckedKeys;
      }),
      loadedKeys: S(() => {
        var y;
        return (y = d.value) === null || y === void 0 ? void 0 : y.loadedKeys;
      }),
      loadingKeys: S(() => {
        var y;
        return (y = d.value) === null || y === void 0 ? void 0 : y.loadingKeys;
      }),
      expandedKeys: S(() => {
        var y;
        return (y = d.value) === null || y === void 0 ? void 0 : y.expandedKeys;
      })
    });
    const C = () => {
      const {
        keyEntities: y
      } = Eo(a.value, {
        fieldNames: s.value
      });
      let $;
      return e.defaultExpandAll ? $ = Object.keys(y) : e.defaultExpandParent ? $ = nr(e.expandedKeys || e.defaultExpandedKeys || [], y) : $ = e.expandedKeys || e.defaultExpandedKeys, $;
    }, x = se(e.selectedKeys || e.defaultSelectedKeys || []), v = se(C());
    De(() => e.selectedKeys, () => {
      e.selectedKeys !== void 0 && (x.value = e.selectedKeys);
    }, {
      immediate: !0
    }), De(() => e.expandedKeys, () => {
      e.expandedKeys !== void 0 && (v.value = e.expandedKeys);
    }, {
      immediate: !0
    });
    const p = jl((y, $) => {
      const {
        isLeaf: _
      } = $;
      _ || y.shiftKey || y.metaKey || y.ctrlKey || d.value.onNodeExpand(y, $);
    }, 200, {
      leading: !0
    }), w = (y, $) => {
      e.expandedKeys === void 0 && (v.value = y), l("update:expandedKeys", y), l("expand", y, $);
    }, h = (y, $) => {
      const {
        expandAction: _
      } = e;
      _ === "click" && p(y, $), l("click", y, $);
    }, O = (y, $) => {
      const {
        expandAction: _
      } = e;
      (_ === "dblclick" || _ === "doubleclick") && p(y, $), l("doubleclick", y, $), l("dblclick", y, $);
    }, T = (y, $) => {
      const {
        multiple: _
      } = e, {
        node: D,
        nativeEvent: B
      } = $, H = D[s.value.key], G = g(g({}, $), {
        selected: !0
      }), te = (B == null ? void 0 : B.ctrlKey) || (B == null ? void 0 : B.metaKey), fe = B == null ? void 0 : B.shiftKey;
      let X;
      _ && te ? (X = y, u.value = H, m.value = X, G.selectedNodes = qt(a.value, X, s.value)) : _ && fe ? (X = Array.from(/* @__PURE__ */ new Set([...m.value || [], ...xi({
        treeData: a.value,
        expandedKeys: v.value,
        startKey: H,
        endKey: u.value,
        fieldNames: s.value
      })])), G.selectedNodes = qt(a.value, X, s.value)) : (X = [H], u.value = H, m.value = X, G.selectedNodes = qt(a.value, X, s.value)), l("update:selectedKeys", X), l("select", X, G), e.selectedKeys === void 0 && (x.value = X);
    }, N = (y, $) => {
      l("update:checkedKeys", y), l("check", y, $);
    }, {
      prefixCls: P,
      direction: z
    } = ot("tree", e);
    return () => {
      const y = ee(`${P.value}-directory`, {
        [`${P.value}-directory-rtl`]: z.value === "rtl"
      }, n.class), {
        icon: $ = o.icon,
        blockNode: _ = !0
      } = e, D = Ci(e, ["icon", "blockNode"]);
      return f(Pt, V(V(V({}, n), {}, {
        icon: $ || wi,
        ref: d,
        blockNode: _
      }, D), {}, {
        prefixCls: P.value,
        class: y,
        expandedKeys: v.value,
        selectedKeys: x.value,
        onSelect: T,
        onClick: h,
        onDblclick: O,
        onExpand: w,
        onCheck: N
      }), o);
    };
  }
}), Zt = or, $i = g(Pt, {
  DirectoryTree: Qt,
  TreeNode: Zt,
  install: (e) => (e.component(Pt.name, Pt), e.component(Zt.name, Zt), e.component(Qt.name, Qt), e)
});
function xo(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  const o = /* @__PURE__ */ new Set();
  function l(r, i) {
    let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
    const u = o.has(r);
    if (Ll(!u, "Warning: There may be circular references"), u)
      return !1;
    if (r === i)
      return !0;
    if (n && a > 1)
      return !1;
    o.add(r);
    const m = a + 1;
    if (Array.isArray(r)) {
      if (!Array.isArray(i) || r.length !== i.length)
        return !1;
      for (let s = 0; s < r.length; s++)
        if (!l(r[s], i[s], m))
          return !1;
      return !0;
    }
    if (r && i && typeof r == "object" && typeof i == "object") {
      const s = Object.keys(r);
      return s.length !== Object.keys(i).length ? !1 : s.every((d) => l(r[d], i[d], m));
    }
    return !1;
  }
  return l(e, t);
}
const {
  SubMenu: Pi,
  Item: Oi
} = Rt;
function Ii(e) {
  return e.some((t) => {
    let {
      children: n
    } = t;
    return n && n.length > 0;
  });
}
function nl(e, t) {
  return typeof t == "string" || typeof t == "number" ? t == null ? void 0 : t.toString().toLowerCase().includes(e.trim().toLowerCase()) : !1;
}
function ol(e) {
  let {
    filters: t,
    prefixCls: n,
    filteredKeys: o,
    filterMultiple: l,
    searchValue: r,
    filterSearch: i
  } = e;
  return t.map((a, u) => {
    const m = String(a.value);
    if (a.children)
      return f(Pi, {
        key: m || u,
        title: a.text,
        popupClassName: `${n}-dropdown-submenu`
      }, {
        default: () => [ol({
          filters: a.children,
          prefixCls: n,
          filteredKeys: o,
          filterMultiple: l,
          searchValue: r,
          filterSearch: i
        })]
      });
    const s = l ? Tt : No, d = f(Oi, {
      key: a.value !== void 0 ? m : u
    }, {
      default: () => [f(s, {
        checked: o.includes(m)
      }, null), f("span", null, [a.text])]
    });
    return r.trim() ? typeof i == "function" ? i(r, a) ? d : void 0 : nl(r, a.text) ? d : void 0 : d;
  });
}
const Ei = oe({
  name: "FilterDropdown",
  props: ["tablePrefixCls", "prefixCls", "dropdownPrefixCls", "column", "filterState", "filterMultiple", "filterMode", "filterSearch", "columnKey", "triggerFilter", "locale", "getPopupContainer"],
  setup(e, t) {
    let {
      slots: n
    } = t;
    const o = Pn(), l = S(() => {
      var I;
      return (I = e.filterMode) !== null && I !== void 0 ? I : "menu";
    }), r = S(() => {
      var I;
      return (I = e.filterSearch) !== null && I !== void 0 ? I : !1;
    }), i = S(() => e.column.filterDropdownOpen || e.column.filterDropdownVisible), a = S(() => e.column.onFilterDropdownOpenChange || e.column.onFilterDropdownVisibleChange);
    process.env.NODE_ENV !== "production" && [["filterDropdownVisible", "filterDropdownOpen", e.column.filterDropdownVisible], ["onFilterDropdownVisibleChange", "onFilterDropdownOpenChange", e.column.onFilterDropdownVisibleChange]].forEach((I) => {
      let [K, k, F] = I;
      Ie(F == null, "Table", `\`${K}\` is deprecated. Please use \`${k}\` instead.`);
    });
    const u = pe(!1), m = S(() => {
      var I;
      return !!(e.filterState && (!((I = e.filterState.filteredKeys) === null || I === void 0) && I.length || e.filterState.forceFiltered));
    }), s = S(() => {
      var I;
      return Ft((I = e.column) === null || I === void 0 ? void 0 : I.filters);
    }), d = S(() => {
      const {
        filterDropdown: I,
        slots: K = {},
        customFilterDropdown: k
      } = e.column;
      return I || K.filterDropdown && o.value[K.filterDropdown] || k && o.value.customFilterDropdown;
    }), b = S(() => {
      const {
        filterIcon: I,
        slots: K = {}
      } = e.column;
      return I || K.filterIcon && o.value[K.filterIcon] || o.value.customFilterIcon;
    }), C = (I) => {
      var K;
      u.value = I, (K = a.value) === null || K === void 0 || K.call(a, I);
    }, x = S(() => typeof i.value == "boolean" ? i.value : u.value), v = S(() => {
      var I;
      return (I = e.filterState) === null || I === void 0 ? void 0 : I.filteredKeys;
    }), c = pe([]), p = (I) => {
      let {
        selectedKeys: K
      } = I;
      c.value = K;
    }, w = (I, K) => {
      let {
        node: k,
        checked: F
      } = K;
      e.filterMultiple ? p({
        selectedKeys: I
      }) : p({
        selectedKeys: F && k.key ? [k.key] : []
      });
    };
    De(v, () => {
      u.value && p({
        selectedKeys: v.value || []
      });
    }, {
      immediate: !0
    });
    const h = pe([]), O = pe(), T = (I) => {
      O.value = setTimeout(() => {
        h.value = I;
      });
    }, N = () => {
      clearTimeout(O.value);
    };
    ut(() => {
      clearTimeout(O.value);
    });
    const P = pe(""), z = (I) => {
      const {
        value: K
      } = I.target;
      P.value = K;
    };
    De(u, () => {
      u.value || (P.value = "");
    });
    const y = (I) => {
      const {
        column: K,
        columnKey: k,
        filterState: F
      } = e, j = I && I.length ? I : null;
      if (j === null && (!F || !F.filteredKeys) || xo(j, F == null ? void 0 : F.filteredKeys, !0))
        return null;
      e.triggerFilter({
        column: K,
        key: k,
        filteredKeys: j
      });
    }, $ = () => {
      C(!1), y(c.value);
    }, _ = function() {
      let {
        confirm: I,
        closeDropdown: K
      } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
        confirm: !1,
        closeDropdown: !1
      };
      I && y([]), K && C(!1), P.value = "", e.column.filterResetToDefaultFilteredValue ? c.value = (e.column.defaultFilteredValue || []).map((k) => String(k)) : c.value = [];
    }, D = function() {
      let {
        closeDropdown: I
      } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
        closeDropdown: !0
      };
      I && C(!1), y(c.value);
    }, B = (I) => {
      I && v.value !== void 0 && (c.value = v.value || []), C(I), !I && !d.value && $();
    }, {
      direction: H
    } = ot("", e), G = (I) => {
      if (I.target.checked) {
        const K = s.value;
        c.value = K;
      } else
        c.value = [];
    }, te = (I) => {
      let {
        filters: K
      } = I;
      return (K || []).map((k, F) => {
        const j = String(k.value), ie = {
          title: k.text,
          key: k.value !== void 0 ? j : F
        };
        return k.children && (ie.children = te({
          filters: k.children
        })), ie;
      });
    }, fe = (I) => {
      var K;
      return g(g({}, I), {
        text: I.title,
        value: I.key,
        children: ((K = I.children) === null || K === void 0 ? void 0 : K.map((k) => fe(k))) || []
      });
    }, X = S(() => te({
      filters: e.column.filters
    })), W = S(() => ee({
      [`${e.dropdownPrefixCls}-menu-without-submenu`]: !Ii(e.column.filters || [])
    })), L = () => {
      const I = c.value, {
        column: K,
        locale: k,
        tablePrefixCls: F,
        filterMultiple: j,
        dropdownPrefixCls: ie,
        getPopupContainer: Y,
        prefixCls: be
      } = e;
      return (K.filters || []).length === 0 ? f(Gn, {
        image: Gn.PRESENTED_IMAGE_SIMPLE,
        description: k.filterEmptyText,
        imageStyle: {
          height: 24
        },
        style: {
          margin: 0,
          padding: "16px 0"
        }
      }, null) : l.value === "tree" ? f(Be, null, [f(ho, {
        filterSearch: r.value,
        value: P.value,
        onChange: z,
        tablePrefixCls: F,
        locale: k
      }, null), f("div", {
        class: `${F}-filter-dropdown-tree`
      }, [j ? f(Tt, {
        class: `${F}-filter-dropdown-checkall`,
        onChange: G,
        checked: I.length === s.value.length,
        indeterminate: I.length > 0 && I.length < s.value.length
      }, {
        default: () => [k.filterCheckall]
      }) : null, f($i, {
        checkable: !0,
        selectable: !1,
        blockNode: !0,
        multiple: j,
        checkStrictly: !j,
        class: `${ie}-menu`,
        onCheck: w,
        checkedKeys: I,
        selectedKeys: I,
        showIcon: !1,
        treeData: X.value,
        autoExpandParent: !0,
        defaultExpandAll: !0,
        filterTreeNode: P.value.trim() ? (xe) => typeof r.value == "function" ? r.value(P.value, fe(xe)) : nl(P.value, xe.title) : void 0
      }, null)])]) : f(Be, null, [f(ho, {
        filterSearch: r.value,
        value: P.value,
        onChange: z,
        tablePrefixCls: F,
        locale: k
      }, null), f(Rt, {
        multiple: j,
        prefixCls: `${ie}-menu`,
        class: W.value,
        onClick: N,
        onSelect: p,
        onDeselect: p,
        selectedKeys: I,
        getPopupContainer: Y,
        openKeys: h.value,
        onOpenChange: T
      }, {
        default: () => ol({
          filters: K.filters || [],
          filterSearch: r.value,
          prefixCls: be,
          filteredKeys: c.value,
          filterMultiple: j,
          searchValue: P.value
        })
      })]);
    }, J = S(() => {
      const I = c.value;
      return e.column.filterResetToDefaultFilteredValue ? xo((e.column.defaultFilteredValue || []).map((K) => String(K)), I, !0) : I.length === 0;
    });
    return () => {
      var I;
      const {
        tablePrefixCls: K,
        prefixCls: k,
        column: F,
        dropdownPrefixCls: j,
        locale: ie,
        getPopupContainer: Y
      } = e;
      let be;
      typeof d.value == "function" ? be = d.value({
        prefixCls: `${j}-custom`,
        setSelectedKeys: (Te) => p({
          selectedKeys: Te
        }),
        selectedKeys: c.value,
        confirm: D,
        clearFilters: _,
        filters: F.filters,
        visible: x.value,
        column: F.__originColumn__,
        close: () => {
          C(!1);
        }
      }) : d.value ? be = d.value : be = f(Be, null, [L(), f("div", {
        class: `${k}-dropdown-btns`
      }, [f(ht, {
        type: "link",
        size: "small",
        disabled: J.value,
        onClick: () => _()
      }, {
        default: () => [ie.filterReset]
      }), f(ht, {
        type: "primary",
        size: "small",
        onClick: $
      }, {
        default: () => [ie.filterConfirm]
      })])]);
      const xe = f(mi, {
        class: `${k}-dropdown`
      }, {
        default: () => [be]
      });
      let we;
      return typeof b.value == "function" ? we = b.value({
        filtered: m.value,
        column: F.__originColumn__
      }) : b.value ? we = b.value : we = f(Rn, null, null), f("div", {
        class: `${k}-column`
      }, [f("span", {
        class: `${K}-column-title`
      }, [(I = n.default) === null || I === void 0 ? void 0 : I.call(n)]), f(Ue, {
        overlay: xe,
        trigger: ["click"],
        open: x.value,
        onOpenChange: B,
        getPopupContainer: Y,
        placement: H.value === "rtl" ? "bottomLeft" : "bottomRight"
      }, {
        default: () => [f("span", {
          role: "button",
          tabindex: -1,
          class: ee(`${k}-trigger`, {
            active: m.value
          }),
          onClick: (Te) => {
            Te.stopPropagation();
          }
        }, [we])]
      })]);
    };
  }
});
function bn(e, t, n) {
  let o = [];
  return (e || []).forEach((l, r) => {
    var i, a;
    const u = bt(r, n), m = l.filterDropdown || ((i = l == null ? void 0 : l.slots) === null || i === void 0 ? void 0 : i.filterDropdown) || l.customFilterDropdown;
    if (l.filters || m || "onFilter" in l)
      if ("filteredValue" in l) {
        let s = l.filteredValue;
        m || (s = (a = s == null ? void 0 : s.map(String)) !== null && a !== void 0 ? a : s), o.push({
          column: l,
          key: nt(l, u),
          filteredKeys: s,
          forceFiltered: l.filtered
        });
      } else
        o.push({
          column: l,
          key: nt(l, u),
          filteredKeys: t && l.defaultFilteredValue ? l.defaultFilteredValue : void 0,
          forceFiltered: l.filtered
        });
    "children" in l && (o = [...o, ...bn(l.children, t, u)]);
  }), o;
}
function ll(e, t, n, o, l, r, i, a) {
  return n.map((u, m) => {
    var s;
    const d = bt(m, a), {
      filterMultiple: b = !0,
      filterMode: C,
      filterSearch: x
    } = u;
    let v = u;
    const c = u.filterDropdown || ((s = u == null ? void 0 : u.slots) === null || s === void 0 ? void 0 : s.filterDropdown) || u.customFilterDropdown;
    if (v.filters || c) {
      const p = nt(v, d), w = o.find((h) => {
        let {
          key: O
        } = h;
        return p === O;
      });
      v = g(g({}, v), {
        title: (h) => f(Ei, {
          tablePrefixCls: e,
          prefixCls: `${e}-filter`,
          dropdownPrefixCls: t,
          column: v,
          columnKey: p,
          filterState: w,
          filterMultiple: b,
          filterMode: C,
          filterSearch: x,
          triggerFilter: r,
          locale: l,
          getPopupContainer: i
        }, {
          default: () => [Tn(u.title, h)]
        })
      });
    }
    return "children" in v && (v = g(g({}, v), {
      children: ll(e, t, v.children, o, l, r, i, d)
    })), v;
  });
}
function Ft(e) {
  let t = [];
  return (e || []).forEach((n) => {
    let {
      value: o,
      children: l
    } = n;
    t.push(o), l && (t = [...t, ...Ft(l)]);
  }), t;
}
function Co(e) {
  const t = {};
  return e.forEach((n) => {
    let {
      key: o,
      filteredKeys: l,
      column: r
    } = n;
    var i;
    const a = r.filterDropdown || ((i = r == null ? void 0 : r.slots) === null || i === void 0 ? void 0 : i.filterDropdown) || r.customFilterDropdown, {
      filters: u
    } = r;
    if (a)
      t[o] = l || null;
    else if (Array.isArray(l)) {
      const m = Ft(u);
      t[o] = m.filter((s) => l.includes(String(s)));
    } else
      t[o] = null;
  }), t;
}
function So(e, t) {
  return t.reduce((n, o) => {
    const {
      column: {
        onFilter: l,
        filters: r
      },
      filteredKeys: i
    } = o;
    return l && i && i.length ? n.filter((a) => i.some((u) => {
      const m = Ft(r), s = m.findIndex((b) => String(b) === String(u)), d = s !== -1 ? m[s] : u;
      return l(d, a);
    })) : n;
  }, e);
}
function rl(e) {
  return e.flatMap((t) => "children" in t ? [t, ...rl(t.children || [])] : [t]);
}
function Ti(e) {
  let {
    prefixCls: t,
    dropdownPrefixCls: n,
    mergedColumns: o,
    locale: l,
    onFilterChange: r,
    getPopupContainer: i
  } = e;
  const a = S(() => rl(o.value)), [u, m] = et(bn(a.value, !0)), s = S(() => {
    const x = bn(a.value, !1);
    if (x.length === 0)
      return x;
    let v = !0, c = !0;
    if (x.forEach((p) => {
      let {
        filteredKeys: w
      } = p;
      w !== void 0 ? v = !1 : c = !1;
    }), v) {
      const p = (a.value || []).map((w, h) => nt(w, bt(h)));
      return u.value.filter((w) => {
        let {
          key: h
        } = w;
        return p.includes(h);
      }).map((w) => {
        const h = a.value[p.findIndex((O) => O === w.key)];
        return g(g({}, w), {
          column: g(g({}, w.column), h),
          forceFiltered: h.filtered
        });
      });
    }
    return Ie(c, "Table", "Columns should all contain `filteredValue` or not contain `filteredValue`."), x;
  }), d = S(() => Co(s.value)), b = (x) => {
    const v = s.value.filter((c) => {
      let {
        key: p
      } = c;
      return p !== x.key;
    });
    v.push(x), m(v), r(Co(v), v);
  };
  return [(x) => ll(t.value, n.value, x, s.value, l.value, b, i.value), s, d];
}
function al(e, t) {
  return e.map((n) => {
    const o = g({}, n);
    return o.title = Tn(o.title, t), "children" in o && (o.children = al(o.children, t)), o;
  });
}
function Ri(e) {
  return [(n) => al(n, e.value)];
}
function _i(e) {
  return function(n) {
    let {
      prefixCls: o,
      onExpand: l,
      record: r,
      expanded: i,
      expandable: a
    } = n;
    const u = `${o}-row-expand-icon`;
    return f("button", {
      type: "button",
      onClick: (m) => {
        l(r, m), m.stopPropagation();
      },
      class: ee(u, {
        [`${u}-spaced`]: !a,
        [`${u}-expanded`]: a && i,
        [`${u}-collapsed`]: a && !i
      }),
      "aria-label": i ? e.collapse : e.expand,
      "aria-expanded": i
    }, null);
  };
}
function il(e, t) {
  const n = t.value;
  return e.map((o) => {
    var l;
    if (o === ke || o === Fe)
      return o;
    const r = g({}, o), {
      slots: i = {}
    } = r;
    return r.__originColumn__ = o, Ie(!("slots" in r), "Table", "`column.slots` is deprecated. Please use `v-slot:headerCell` `v-slot:bodyCell` instead."), Object.keys(i).forEach((a) => {
      const u = i[a];
      r[a] === void 0 && n[u] && (r[a] = n[u]);
    }), t.value.headerCell && !(!((l = o.slots) === null || l === void 0) && l.title) && (r.title = wn(t.value, "headerCell", {
      title: o.title,
      column: o
    }, () => [o.title])), "children" in r && Array.isArray(r.children) && (r.children = il(r.children, t)), r;
  });
}
function Ni(e) {
  return [(n) => il(n, e)];
}
const Di = (e) => {
  const {
    componentCls: t
  } = e, n = `${e.lineWidth}px ${e.lineType} ${e.tableBorderColor}`, o = (l, r, i) => ({
    [`&${t}-${l}`]: {
      [`> ${t}-container`]: {
        [`> ${t}-content, > ${t}-body`]: {
          "> table > tbody > tr > td": {
            [`> ${t}-expanded-row-fixed`]: {
              margin: `-${r}px -${i + e.lineWidth}px`
            }
          }
        }
      }
    }
  });
  return {
    [`${t}-wrapper`]: {
      [`${t}${t}-bordered`]: g(g(g({
        // ============================ Title =============================
        [`> ${t}-title`]: {
          border: n,
          borderBottom: 0
        },
        // ============================ Content ============================
        [`> ${t}-container`]: {
          borderInlineStart: n,
          [`
            > ${t}-content,
            > ${t}-header,
            > ${t}-body,
            > ${t}-summary
          `]: {
            "> table": {
              // ============================= Cell =============================
              "\n                > thead > tr > th,\n                > tbody > tr > td,\n                > tfoot > tr > th,\n                > tfoot > tr > td\n              ": {
                borderInlineEnd: n
              },
              // ============================ Header ============================
              "> thead": {
                "> tr:not(:last-child) > th": {
                  borderBottom: n
                },
                "> tr > th::before": {
                  backgroundColor: "transparent !important"
                }
              },
              // Fixed right should provides additional border
              "\n                > thead > tr,\n                > tbody > tr,\n                > tfoot > tr\n              ": {
                [`> ${t}-cell-fix-right-first::after`]: {
                  borderInlineEnd: n
                }
              },
              // ========================== Expandable ==========================
              "> tbody > tr > td": {
                [`> ${t}-expanded-row-fixed`]: {
                  margin: `-${e.tablePaddingVertical}px -${e.tablePaddingHorizontal + e.lineWidth}px`,
                  "&::after": {
                    position: "absolute",
                    top: 0,
                    insetInlineEnd: e.lineWidth,
                    bottom: 0,
                    borderInlineEnd: n,
                    content: '""'
                  }
                }
              }
            }
          },
          [`
            > ${t}-content,
            > ${t}-header
          `]: {
            "> table": {
              borderTop: n
            }
          }
        },
        // ============================ Scroll ============================
        [`&${t}-scroll-horizontal`]: {
          [`> ${t}-container > ${t}-body`]: {
            "> table > tbody": {
              [`
                > tr${t}-expanded-row,
                > tr${t}-placeholder
              `]: {
                "> td": {
                  borderInlineEnd: 0
                }
              }
            }
          }
        }
      }, o("middle", e.tablePaddingVerticalMiddle, e.tablePaddingHorizontalMiddle)), o("small", e.tablePaddingVerticalSmall, e.tablePaddingHorizontalSmall)), {
        // ============================ Footer ============================
        [`> ${t}-footer`]: {
          border: n,
          borderTop: 0
        }
      }),
      // ============================ Nested ============================
      [`${t}-cell`]: {
        [`${t}-container:first-child`]: {
          // :first-child to avoid the case when bordered and title is set
          borderTop: 0
        },
        // https://github.com/ant-design/ant-design/issues/35577
        "&-scrollbar:not([rowspan])": {
          boxShadow: `0 ${e.lineWidth}px 0 ${e.lineWidth}px ${e.tableHeaderBg}`
        }
      }
    }
  };
}, ki = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-wrapper`]: {
      [`${t}-cell-ellipsis`]: g(g({}, Hl), {
        wordBreak: "keep-all",
        // Fixed first or last should special process
        [`
          &${t}-cell-fix-left-last,
          &${t}-cell-fix-right-first
        `]: {
          overflow: "visible",
          [`${t}-cell-content`]: {
            display: "block",
            overflow: "hidden",
            textOverflow: "ellipsis"
          }
        },
        [`${t}-column-title`]: {
          overflow: "hidden",
          textOverflow: "ellipsis",
          wordBreak: "keep-all"
        }
      })
    }
  };
}, Bi = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-wrapper`]: {
      [`${t}-tbody > tr${t}-placeholder`]: {
        textAlign: "center",
        color: e.colorTextDisabled,
        "&:hover > td": {
          background: e.colorBgContainer
        }
      }
    }
  };
}, zi = (e) => {
  const {
    componentCls: t,
    antCls: n,
    controlInteractiveSize: o,
    motionDurationSlow: l,
    lineWidth: r,
    paddingXS: i,
    lineType: a,
    tableBorderColor: u,
    tableExpandIconBg: m,
    tableExpandColumnWidth: s,
    borderRadius: d,
    fontSize: b,
    fontSizeSM: C,
    lineHeight: x,
    tablePaddingVertical: v,
    tablePaddingHorizontal: c,
    tableExpandedRowBg: p,
    paddingXXS: w
  } = e, h = o / 2 - r, O = h * 2 + r * 3, T = `${r}px ${a} ${u}`, N = w - r;
  return {
    [`${t}-wrapper`]: {
      [`${t}-expand-icon-col`]: {
        width: s
      },
      [`${t}-row-expand-icon-cell`]: {
        textAlign: "center",
        [`${t}-row-expand-icon`]: {
          display: "inline-flex",
          float: "none",
          verticalAlign: "sub"
        }
      },
      [`${t}-row-indent`]: {
        height: 1,
        float: "left"
      },
      [`${t}-row-expand-icon`]: g(g({}, xr(e)), {
        position: "relative",
        float: "left",
        boxSizing: "border-box",
        width: O,
        height: O,
        padding: 0,
        color: "inherit",
        lineHeight: `${O}px`,
        background: m,
        border: T,
        borderRadius: d,
        transform: `scale(${o / O})`,
        transition: `all ${l}`,
        userSelect: "none",
        "&:focus, &:hover, &:active": {
          borderColor: "currentcolor"
        },
        "&::before, &::after": {
          position: "absolute",
          background: "currentcolor",
          transition: `transform ${l} ease-out`,
          content: '""'
        },
        "&::before": {
          top: h,
          insetInlineEnd: N,
          insetInlineStart: N,
          height: r
        },
        "&::after": {
          top: N,
          bottom: N,
          insetInlineStart: h,
          width: r,
          transform: "rotate(90deg)"
        },
        // Motion effect
        "&-collapsed::before": {
          transform: "rotate(-180deg)"
        },
        "&-collapsed::after": {
          transform: "rotate(0deg)"
        },
        "&-spaced": {
          "&::before, &::after": {
            display: "none",
            content: "none"
          },
          background: "transparent",
          border: 0,
          visibility: "hidden"
        }
      }),
      [`${t}-row-indent + ${t}-row-expand-icon`]: {
        marginTop: (b * x - r * 3) / 2 - Math.ceil((C * 1.4 - r * 3) / 2),
        marginInlineEnd: i
      },
      [`tr${t}-expanded-row`]: {
        "&, &:hover": {
          "> td": {
            background: p
          }
        },
        // https://github.com/ant-design/ant-design/issues/25573
        [`${n}-descriptions-view`]: {
          display: "flex",
          table: {
            flex: "auto",
            width: "auto"
          }
        }
      },
      // With fixed
      [`${t}-expanded-row-fixed`]: {
        position: "relative",
        margin: `-${v}px -${c}px`,
        padding: `${v}px ${c}px`
      }
    }
  };
}, Ki = (e) => {
  const {
    componentCls: t,
    antCls: n,
    iconCls: o,
    tableFilterDropdownWidth: l,
    tableFilterDropdownSearchWidth: r,
    paddingXXS: i,
    paddingXS: a,
    colorText: u,
    lineWidth: m,
    lineType: s,
    tableBorderColor: d,
    tableHeaderIconColor: b,
    fontSizeSM: C,
    tablePaddingHorizontal: x,
    borderRadius: v,
    motionDurationSlow: c,
    colorTextDescription: p,
    colorPrimary: w,
    tableHeaderFilterActiveBg: h,
    colorTextDisabled: O,
    tableFilterDropdownBg: T,
    tableFilterDropdownHeight: N,
    controlItemBgHover: P,
    controlItemBgActive: z,
    boxShadowSecondary: y
  } = e, $ = `${n}-dropdown`, _ = `${t}-filter-dropdown`, D = `${n}-tree`, B = `${m}px ${s} ${d}`;
  return [
    {
      [`${t}-wrapper`]: {
        [`${t}-filter-column`]: {
          display: "flex",
          justifyContent: "space-between"
        },
        [`${t}-filter-trigger`]: {
          position: "relative",
          display: "flex",
          alignItems: "center",
          marginBlock: -i,
          marginInline: `${i}px ${-x / 2}px`,
          padding: `0 ${i}px`,
          color: b,
          fontSize: C,
          borderRadius: v,
          cursor: "pointer",
          transition: `all ${c}`,
          "&:hover": {
            color: p,
            background: h
          },
          "&.active": {
            color: w
          }
        }
      }
    },
    {
      // Dropdown
      [`${n}-dropdown`]: {
        [_]: g(g({}, zt(e)), {
          minWidth: l,
          backgroundColor: T,
          borderRadius: v,
          boxShadow: y,
          // Reset menu
          [`${$}-menu`]: {
            // https://github.com/ant-design/ant-design/issues/4916
            // https://github.com/ant-design/ant-design/issues/19542
            maxHeight: N,
            overflowX: "hidden",
            border: 0,
            boxShadow: "none",
            "&:empty::after": {
              display: "block",
              padding: `${a}px 0`,
              color: O,
              fontSize: C,
              textAlign: "center",
              content: '"Not Found"'
            }
          },
          [`${_}-tree`]: {
            paddingBlock: `${a}px 0`,
            paddingInline: a,
            [D]: {
              padding: 0
            },
            [`${D}-treenode ${D}-node-content-wrapper:hover`]: {
              backgroundColor: P
            },
            [`${D}-treenode-checkbox-checked ${D}-node-content-wrapper`]: {
              "&, &:hover": {
                backgroundColor: z
              }
            }
          },
          [`${_}-search`]: {
            padding: a,
            borderBottom: B,
            "&-input": {
              input: {
                minWidth: r
              },
              [o]: {
                color: O
              }
            }
          },
          [`${_}-checkall`]: {
            width: "100%",
            marginBottom: i,
            marginInlineStart: i
          },
          // Operation
          [`${_}-btns`]: {
            display: "flex",
            justifyContent: "space-between",
            padding: `${a - m}px ${a}px`,
            overflow: "hidden",
            backgroundColor: "inherit",
            borderTop: B
          }
        })
      }
    },
    // Dropdown Menu & SubMenu
    {
      // submenu of table filter dropdown
      [`${n}-dropdown ${_}, ${_}-submenu`]: {
        // Checkbox
        [`${n}-checkbox-wrapper + span`]: {
          paddingInlineStart: a,
          color: u
        },
        "> ul": {
          maxHeight: "calc(100vh - 130px)",
          overflowX: "hidden",
          overflowY: "auto"
        }
      }
    }
  ];
}, Ai = (e) => {
  const {
    componentCls: t,
    lineWidth: n,
    colorSplit: o,
    motionDurationSlow: l,
    zIndexTableFixed: r,
    tableBg: i,
    zIndexTableSticky: a
  } = e, u = o;
  return {
    [`${t}-wrapper`]: {
      [`
        ${t}-cell-fix-left,
        ${t}-cell-fix-right
      `]: {
        position: "sticky !important",
        zIndex: r,
        background: i
      },
      [`
        ${t}-cell-fix-left-first::after,
        ${t}-cell-fix-left-last::after
      `]: {
        position: "absolute",
        top: 0,
        right: {
          _skip_check_: !0,
          value: 0
        },
        bottom: -n,
        width: 30,
        transform: "translateX(100%)",
        transition: `box-shadow ${l}`,
        content: '""',
        pointerEvents: "none"
      },
      [`${t}-cell-fix-left-all::after`]: {
        display: "none"
      },
      [`
        ${t}-cell-fix-right-first::after,
        ${t}-cell-fix-right-last::after
      `]: {
        position: "absolute",
        top: 0,
        bottom: -n,
        left: {
          _skip_check_: !0,
          value: 0
        },
        width: 30,
        transform: "translateX(-100%)",
        transition: `box-shadow ${l}`,
        content: '""',
        pointerEvents: "none"
      },
      [`${t}-container`]: {
        "&::before, &::after": {
          position: "absolute",
          top: 0,
          bottom: 0,
          zIndex: a + 1,
          width: 30,
          transition: `box-shadow ${l}`,
          content: '""',
          pointerEvents: "none"
        },
        "&::before": {
          insetInlineStart: 0
        },
        "&::after": {
          insetInlineEnd: 0
        }
      },
      [`${t}-ping-left`]: {
        [`&:not(${t}-has-fix-left) ${t}-container`]: {
          position: "relative",
          "&::before": {
            boxShadow: `inset 10px 0 8px -8px ${u}`
          }
        },
        [`
          ${t}-cell-fix-left-first::after,
          ${t}-cell-fix-left-last::after
        `]: {
          boxShadow: `inset 10px 0 8px -8px ${u}`
        },
        [`${t}-cell-fix-left-last::before`]: {
          backgroundColor: "transparent !important"
        }
      },
      [`${t}-ping-right`]: {
        [`&:not(${t}-has-fix-right) ${t}-container`]: {
          position: "relative",
          "&::after": {
            boxShadow: `inset -10px 0 8px -8px ${u}`
          }
        },
        [`
          ${t}-cell-fix-right-first::after,
          ${t}-cell-fix-right-last::after
        `]: {
          boxShadow: `inset -10px 0 8px -8px ${u}`
        }
      }
    }
  };
}, Fi = (e) => {
  const {
    componentCls: t,
    antCls: n
  } = e;
  return {
    [`${t}-wrapper`]: {
      // ========================== Pagination ==========================
      [`${t}-pagination${n}-pagination`]: {
        margin: `${e.margin}px 0`
      },
      [`${t}-pagination`]: {
        display: "flex",
        flexWrap: "wrap",
        rowGap: e.paddingXS,
        "> *": {
          flex: "none"
        },
        "&-left": {
          justifyContent: "flex-start"
        },
        "&-center": {
          justifyContent: "center"
        },
        "&-right": {
          justifyContent: "flex-end"
        }
      }
    }
  };
}, Mi = (e) => {
  const {
    componentCls: t,
    tableRadius: n
  } = e;
  return {
    [`${t}-wrapper`]: {
      [t]: {
        // https://github.com/ant-design/ant-design/issues/39115#issuecomment-1362314574
        [`${t}-title, ${t}-header`]: {
          borderRadius: `${n}px ${n}px 0 0`
        },
        [`${t}-title + ${t}-container`]: {
          borderStartStartRadius: 0,
          borderStartEndRadius: 0,
          table: {
            borderRadius: 0,
            "> thead > tr:first-child": {
              "th:first-child": {
                borderRadius: 0
              },
              "th:last-child": {
                borderRadius: 0
              }
            }
          }
        },
        "&-container": {
          borderStartStartRadius: n,
          borderStartEndRadius: n,
          "table > thead > tr:first-child": {
            "> *:first-child": {
              borderStartStartRadius: n
            },
            "> *:last-child": {
              borderStartEndRadius: n
            }
          }
        },
        "&-footer": {
          borderRadius: `0 0 ${n}px ${n}px`
        }
      }
    }
  };
}, ji = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-wrapper-rtl`]: {
      direction: "rtl",
      table: {
        direction: "rtl"
      },
      [`${t}-pagination-left`]: {
        justifyContent: "flex-end"
      },
      [`${t}-pagination-right`]: {
        justifyContent: "flex-start"
      },
      [`${t}-row-expand-icon`]: {
        "&::after": {
          transform: "rotate(-90deg)"
        },
        "&-collapsed::before": {
          transform: "rotate(180deg)"
        },
        "&-collapsed::after": {
          transform: "rotate(0deg)"
        }
      }
    }
  };
}, Li = (e) => {
  const {
    componentCls: t,
    antCls: n,
    iconCls: o,
    fontSizeIcon: l,
    paddingXS: r,
    tableHeaderIconColor: i,
    tableHeaderIconColorHover: a
  } = e;
  return {
    [`${t}-wrapper`]: {
      // ========================== Selections ==========================
      [`${t}-selection-col`]: {
        width: e.tableSelectionColumnWidth
      },
      [`${t}-bordered ${t}-selection-col`]: {
        width: e.tableSelectionColumnWidth + r * 2
      },
      [`
        table tr th${t}-selection-column,
        table tr td${t}-selection-column
      `]: {
        paddingInlineEnd: e.paddingXS,
        paddingInlineStart: e.paddingXS,
        textAlign: "center",
        [`${n}-radio-wrapper`]: {
          marginInlineEnd: 0
        }
      },
      [`table tr th${t}-selection-column${t}-cell-fix-left`]: {
        zIndex: e.zIndexTableFixed + 1
      },
      [`table tr th${t}-selection-column::after`]: {
        backgroundColor: "transparent !important"
      },
      [`${t}-selection`]: {
        position: "relative",
        display: "inline-flex",
        flexDirection: "column"
      },
      [`${t}-selection-extra`]: {
        position: "absolute",
        top: 0,
        zIndex: 1,
        cursor: "pointer",
        transition: `all ${e.motionDurationSlow}`,
        marginInlineStart: "100%",
        paddingInlineStart: `${e.tablePaddingHorizontal / 4}px`,
        [o]: {
          color: i,
          fontSize: l,
          verticalAlign: "baseline",
          "&:hover": {
            color: a
          }
        }
      }
    }
  };
}, Hi = (e) => {
  const {
    componentCls: t
  } = e, n = (o, l, r, i) => ({
    [`${t}${t}-${o}`]: {
      fontSize: i,
      [`
        ${t}-title,
        ${t}-footer,
        ${t}-thead > tr > th,
        ${t}-tbody > tr > td,
        tfoot > tr > th,
        tfoot > tr > td
      `]: {
        padding: `${l}px ${r}px`
      },
      [`${t}-filter-trigger`]: {
        marginInlineEnd: `-${r / 2}px`
      },
      [`${t}-expanded-row-fixed`]: {
        margin: `-${l}px -${r}px`
      },
      [`${t}-tbody`]: {
        // ========================= Nest Table ===========================
        [`${t}-wrapper:only-child ${t}`]: {
          marginBlock: `-${l}px`,
          marginInline: `${e.tableExpandColumnWidth - r}px -${r}px`
        }
      },
      // https://github.com/ant-design/ant-design/issues/35167
      [`${t}-selection-column`]: {
        paddingInlineStart: `${r / 4}px`
      }
    }
  });
  return {
    [`${t}-wrapper`]: g(g({}, n("middle", e.tablePaddingVerticalMiddle, e.tablePaddingHorizontalMiddle, e.tableFontSizeMiddle)), n("small", e.tablePaddingVerticalSmall, e.tablePaddingHorizontalSmall, e.tableFontSizeSmall))
  };
}, Wi = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-wrapper ${t}-resize-handle`]: {
      position: "absolute",
      top: 0,
      height: "100% !important",
      bottom: 0,
      left: " auto !important",
      right: " -8px",
      cursor: "col-resize",
      touchAction: "none",
      userSelect: "auto",
      width: "16px",
      zIndex: 1,
      "&-line": {
        display: "block",
        width: "1px",
        marginLeft: "7px",
        height: "100% !important",
        backgroundColor: e.colorPrimary,
        opacity: 0
      },
      "&:hover &-line": {
        opacity: 1
      }
    },
    [`${t}-wrapper  ${t}-resize-handle.dragging`]: {
      overflow: "hidden",
      [`${t}-resize-handle-line`]: {
        opacity: 1
      },
      "&:before": {
        position: "absolute",
        top: 0,
        bottom: 0,
        content: '" "',
        width: "200vw",
        transform: "translateX(-50%)",
        opacity: 0
      }
    }
  };
}, Vi = (e) => {
  const {
    componentCls: t,
    marginXXS: n,
    fontSizeIcon: o,
    tableHeaderIconColor: l,
    tableHeaderIconColorHover: r
  } = e;
  return {
    [`${t}-wrapper`]: {
      [`${t}-thead th${t}-column-has-sorters`]: {
        outline: "none",
        cursor: "pointer",
        transition: `all ${e.motionDurationSlow}`,
        "&:hover": {
          background: e.tableHeaderSortHoverBg,
          "&::before": {
            backgroundColor: "transparent !important"
          }
        },
        "&:focus-visible": {
          color: e.colorPrimary
        },
        // https://github.com/ant-design/ant-design/issues/30969
        [`
          &${t}-cell-fix-left:hover,
          &${t}-cell-fix-right:hover
        `]: {
          background: e.tableFixedHeaderSortActiveBg
        }
      },
      [`${t}-thead th${t}-column-sort`]: {
        background: e.tableHeaderSortBg,
        "&::before": {
          backgroundColor: "transparent !important"
        }
      },
      [`td${t}-column-sort`]: {
        background: e.tableBodySortBg
      },
      [`${t}-column-title`]: {
        position: "relative",
        zIndex: 1,
        flex: 1
      },
      [`${t}-column-sorters`]: {
        display: "flex",
        flex: "auto",
        alignItems: "center",
        justifyContent: "space-between",
        "&::after": {
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          content: '""'
        }
      },
      [`${t}-column-sorter`]: {
        marginInlineStart: n,
        color: l,
        fontSize: 0,
        transition: `color ${e.motionDurationSlow}`,
        "&-inner": {
          display: "inline-flex",
          flexDirection: "column",
          alignItems: "center"
        },
        "&-up, &-down": {
          fontSize: o,
          "&.active": {
            color: e.colorPrimary
          }
        },
        [`${t}-column-sorter-up + ${t}-column-sorter-down`]: {
          marginTop: "-0.3em"
        }
      },
      [`${t}-column-sorters:hover ${t}-column-sorter`]: {
        color: r
      }
    }
  };
}, Xi = (e) => {
  const {
    componentCls: t,
    opacityLoading: n,
    tableScrollThumbBg: o,
    tableScrollThumbBgHover: l,
    tableScrollThumbSize: r,
    tableScrollBg: i,
    zIndexTableSticky: a
  } = e, u = `${e.lineWidth}px ${e.lineType} ${e.tableBorderColor}`;
  return {
    [`${t}-wrapper`]: {
      [`${t}-sticky`]: {
        "&-holder": {
          position: "sticky",
          zIndex: a,
          background: e.colorBgContainer
        },
        "&-scroll": {
          position: "sticky",
          bottom: 0,
          height: `${r}px !important`,
          zIndex: a,
          display: "flex",
          alignItems: "center",
          background: i,
          borderTop: u,
          opacity: n,
          "&:hover": {
            transformOrigin: "center bottom"
          },
          // fake scrollbar style of sticky
          "&-bar": {
            height: r,
            backgroundColor: o,
            borderRadius: 100,
            transition: `all ${e.motionDurationSlow}, transform none`,
            position: "absolute",
            bottom: 0,
            "&:hover, &-active": {
              backgroundColor: l
            }
          }
        }
      }
    }
  };
}, wo = (e) => {
  const {
    componentCls: t,
    lineWidth: n,
    tableBorderColor: o
  } = e, l = `${n}px ${e.lineType} ${o}`;
  return {
    [`${t}-wrapper`]: {
      [`${t}-summary`]: {
        position: "relative",
        zIndex: e.zIndexTableFixed,
        background: e.tableBg,
        "> tr": {
          "> th, > td": {
            borderBottom: l
          }
        }
      },
      [`div${t}-summary`]: {
        boxShadow: `0 -${n}px 0 ${o}`
      }
    }
  };
}, Ui = (e) => {
  const {
    componentCls: t,
    fontWeightStrong: n,
    tablePaddingVertical: o,
    tablePaddingHorizontal: l,
    lineWidth: r,
    lineType: i,
    tableBorderColor: a,
    tableFontSize: u,
    tableBg: m,
    tableRadius: s,
    tableHeaderTextColor: d,
    motionDurationMid: b,
    tableHeaderBg: C,
    tableHeaderCellSplitColor: x,
    tableRowHoverBg: v,
    tableSelectedRowBg: c,
    tableSelectedRowHoverBg: p,
    tableFooterTextColor: w,
    tableFooterBg: h,
    paddingContentVerticalLG: O
  } = e, T = `${r}px ${i} ${a}`;
  return {
    [`${t}-wrapper`]: g(g({
      clear: "both",
      maxWidth: "100%"
    }, Wl()), {
      [t]: g(g({}, zt(e)), {
        fontSize: u,
        background: m,
        borderRadius: `${s}px ${s}px 0 0`
      }),
      // https://github.com/ant-design/ant-design/issues/17611
      table: {
        width: "100%",
        textAlign: "start",
        borderRadius: `${s}px ${s}px 0 0`,
        borderCollapse: "separate",
        borderSpacing: 0
      },
      // ============================= Cell =============================
      [`
          ${t}-thead > tr > th,
          ${t}-tbody > tr > td,
          tfoot > tr > th,
          tfoot > tr > td
        `]: {
        position: "relative",
        padding: `${O}px ${l}px`,
        overflowWrap: "break-word"
      },
      // ============================ Title =============================
      [`${t}-title`]: {
        padding: `${o}px ${l}px`
      },
      // ============================ Header ============================
      [`${t}-thead`]: {
        "\n          > tr > th,\n          > tr > td\n        ": {
          position: "relative",
          color: d,
          fontWeight: n,
          textAlign: "start",
          background: C,
          borderBottom: T,
          transition: `background ${b} ease`,
          "&[colspan]:not([colspan='1'])": {
            textAlign: "center"
          },
          [`&:not(:last-child):not(${t}-selection-column):not(${t}-row-expand-icon-cell):not([colspan])::before`]: {
            position: "absolute",
            top: "50%",
            insetInlineEnd: 0,
            width: 1,
            height: "1.6em",
            backgroundColor: x,
            transform: "translateY(-50%)",
            transition: `background-color ${b}`,
            content: '""'
          }
        },
        "> tr:not(:last-child) > th[colspan]": {
          borderBottom: 0
        }
      },
      // ============================ Body ============================
      // Borderless Table has unique hover style, which would be implemented with `borderTop`.
      [`${t}:not(${t}-bordered)`]: {
        [`${t}-tbody`]: {
          "> tr": {
            "> td": {
              borderTop: T,
              borderBottom: "transparent"
            },
            "&:last-child > td": {
              borderBottom: T
            },
            [`&:first-child > td,
              &${t}-measure-row + tr > td`]: {
              borderTop: "none",
              borderTopColor: "transparent"
            }
          }
        }
      },
      // Bordered Table remains simple `borderBottom`.
      // Ref issue: https://github.com/ant-design/ant-design/issues/38724
      [`${t}${t}-bordered`]: {
        [`${t}-tbody`]: {
          "> tr": {
            "> td": {
              borderBottom: T
            }
          }
        }
      },
      [`${t}-tbody`]: {
        "> tr": {
          "> td": {
            transition: `background ${b}, border-color ${b}`,
            // ========================= Nest Table ===========================
            [`
              > ${t}-wrapper:only-child,
              > ${t}-expanded-row-fixed > ${t}-wrapper:only-child
            `]: {
              [t]: {
                marginBlock: `-${o}px`,
                marginInline: `${e.tableExpandColumnWidth - l}px -${l}px`,
                [`${t}-tbody > tr:last-child > td`]: {
                  borderBottom: 0,
                  "&:first-child, &:last-child": {
                    borderRadius: 0
                  }
                }
              }
            }
          },
          [`
            &${t}-row:hover > td,
            > td${t}-cell-row-hover
          `]: {
            background: v
          },
          [`&${t}-row-selected`]: {
            "> td": {
              background: c
            },
            "&:hover > td": {
              background: p
            }
          }
        }
      },
      // ============================ Footer ============================
      [`${t}-footer`]: {
        padding: `${o}px ${l}px`,
        color: w,
        background: h
      }
    })
  };
}, Gi = Cn("Table", (e) => {
  const {
    controlItemBgActive: t,
    controlItemBgActiveHover: n,
    colorTextPlaceholder: o,
    colorTextHeading: l,
    colorSplit: r,
    colorBorderSecondary: i,
    fontSize: a,
    padding: u,
    paddingXS: m,
    paddingSM: s,
    controlHeight: d,
    colorFillAlter: b,
    colorIcon: C,
    colorIconHover: x,
    opacityLoading: v,
    colorBgContainer: c,
    borderRadiusLG: p,
    colorFillContent: w,
    colorFillSecondary: h,
    controlInteractiveSize: O
  } = e, T = new mt(C), N = new mt(x), P = t, z = 2, y = new mt(h).onBackground(c).toHexString(), $ = new mt(w).onBackground(c).toHexString(), _ = new mt(b).onBackground(c).toHexString(), D = Sn(e, {
    tableFontSize: a,
    tableBg: c,
    tableRadius: p,
    tablePaddingVertical: u,
    tablePaddingHorizontal: u,
    tablePaddingVerticalMiddle: s,
    tablePaddingHorizontalMiddle: m,
    tablePaddingVerticalSmall: m,
    tablePaddingHorizontalSmall: m,
    tableBorderColor: i,
    tableHeaderTextColor: l,
    tableHeaderBg: _,
    tableFooterTextColor: l,
    tableFooterBg: _,
    tableHeaderCellSplitColor: i,
    tableHeaderSortBg: y,
    tableHeaderSortHoverBg: $,
    tableHeaderIconColor: T.clone().setAlpha(T.getAlpha() * v).toRgbString(),
    tableHeaderIconColorHover: N.clone().setAlpha(N.getAlpha() * v).toRgbString(),
    tableBodySortBg: _,
    tableFixedHeaderSortActiveBg: y,
    tableHeaderFilterActiveBg: w,
    tableFilterDropdownBg: c,
    tableRowHoverBg: _,
    tableSelectedRowBg: P,
    tableSelectedRowHoverBg: n,
    zIndexTableFixed: z,
    zIndexTableSticky: z + 1,
    tableFontSizeMiddle: a,
    tableFontSizeSmall: a,
    tableSelectionColumnWidth: d,
    tableExpandIconBg: c,
    tableExpandColumnWidth: O + 2 * e.padding,
    tableExpandedRowBg: b,
    // Dropdown
    tableFilterDropdownWidth: 120,
    tableFilterDropdownHeight: 264,
    tableFilterDropdownSearchWidth: 140,
    // Virtual Scroll Bar
    tableScrollThumbSize: 8,
    tableScrollThumbBg: o,
    tableScrollThumbBgHover: l,
    tableScrollBg: r
  });
  return [Ui(D), Fi(D), wo(D), Vi(D), Ki(D), Di(D), Mi(D), zi(D), wo(D), Bi(D), Li(D), Ai(D), Xi(D), ki(D), Hi(D), Wi(D), ji(D)];
}), Ji = [], sl = () => ({
  prefixCls: We(),
  columns: Ne(),
  rowKey: Re([String, Function]),
  tableLayout: We(),
  rowClassName: Re([String, Function]),
  title: ue(),
  footer: ue(),
  id: We(),
  showHeader: re(),
  components: Me(),
  customRow: ue(),
  customHeaderRow: ue(),
  direction: We(),
  expandFixed: Re([Boolean, String]),
  expandColumnWidth: Number,
  expandedRowKeys: Ne(),
  defaultExpandedRowKeys: Ne(),
  expandedRowRender: ue(),
  expandRowByClick: re(),
  expandIcon: ue(),
  onExpand: ue(),
  onExpandedRowsChange: ue(),
  "onUpdate:expandedRowKeys": ue(),
  defaultExpandAllRows: re(),
  indentSize: Number,
  /** @deprecated Please use `EXPAND_COLUMN` in `columns` directly */
  expandIconColumnIndex: Number,
  showExpandColumn: re(),
  expandedRowClassName: ue(),
  childrenColumnName: We(),
  rowExpandable: ue(),
  sticky: Re([Boolean, Object]),
  dropdownPrefixCls: String,
  dataSource: Ne(),
  pagination: Re([Boolean, Object]),
  loading: Re([Boolean, Object]),
  size: We(),
  bordered: re(),
  locale: Me(),
  onChange: ue(),
  onResizeColumn: ue(),
  rowSelection: Me(),
  getPopupContainer: ue(),
  scroll: Me(),
  sortDirections: Ne(),
  showSorterTooltip: Re([Boolean, Object], !0),
  transformCellText: ue()
}), Yi = oe({
  name: "InternalTable",
  inheritAttrs: !1,
  props: dt(g(g({}, sl()), {
    contextSlots: Me()
  }), {
    rowKey: "key"
  }),
  setup(e, t) {
    let {
      attrs: n,
      slots: o,
      expose: l,
      emit: r
    } = t;
    Ie(!(typeof e.rowKey == "function" && e.rowKey.length > 1), "Table", "`index` parameter of `rowKey` function is deprecated. There is no guarantee that it will work as expected."), sa(S(() => e.contextSlots)), ca({
      onResizeColumn: (A, Z) => {
        r("resizeColumn", A, Z);
      }
    });
    const i = ko(), a = S(() => {
      const A = new Set(Object.keys(i.value).filter((Z) => i.value[Z]));
      return e.columns.filter((Z) => !Z.responsive || Z.responsive.some((M) => A.has(M)));
    }), {
      size: u,
      renderEmpty: m,
      direction: s,
      prefixCls: d,
      configProvider: b
    } = ot("table", e), [C, x] = Gi(d), v = S(() => {
      var A;
      return e.transformCellText || ((A = b.transformCellText) === null || A === void 0 ? void 0 : A.value);
    }), [c] = Oo("Table", Vl.Table, ye(e, "locale")), p = S(() => e.dataSource || Ji), w = S(() => b.getPrefixCls("dropdown", e.dropdownPrefixCls)), h = S(() => e.childrenColumnName || "children"), O = S(() => p.value.some((A) => A == null ? void 0 : A[h.value]) ? "nest" : e.expandedRowRender ? "row" : null), T = at({
      body: null
    }), N = (A) => {
      g(T, A);
    }, P = S(() => typeof e.rowKey == "function" ? e.rowKey : (A) => A == null ? void 0 : A[e.rowKey]), [z] = ti(p, h, P), y = {}, $ = function(A, Z) {
      let M = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
      const {
        pagination: U,
        scroll: q,
        onChange: ce
      } = e, Q = g(g({}, y), A);
      M && (y.resetPagination(), Q.pagination.current && (Q.pagination.current = 1), U && U.onChange && U.onChange(1, Q.pagination.pageSize)), q && q.scrollToFirstRowOnChange !== !1 && T.body && wr(0, {
        getContainer: () => T.body
      }), ce == null || ce(Q.pagination, Q.filters, Q.sorter, {
        currentDataSource: So(gn(p.value, Q.sorterStates, h.value), Q.filterStates),
        action: Z
      });
    }, _ = (A, Z) => {
      $({
        sorter: A,
        sorterStates: Z
      }, "sort", !1);
    }, [D, B, H, G] = ui({
      prefixCls: d,
      mergedColumns: a,
      onSorterChange: _,
      sortDirections: S(() => e.sortDirections || ["ascend", "descend"]),
      tableLocale: c,
      showSorterTooltip: ye(e, "showSorterTooltip")
    }), te = S(() => gn(p.value, B.value, h.value)), fe = (A, Z) => {
      $({
        filters: A,
        filterStates: Z
      }, "filter", !0);
    }, [X, W, L] = Ti({
      prefixCls: d,
      locale: c,
      dropdownPrefixCls: w,
      mergedColumns: a,
      onFilterChange: fe,
      getPopupContainer: ye(e, "getPopupContainer")
    }), J = S(() => So(te.value, W.value)), [I] = Ni(ye(e, "contextSlots")), K = S(() => {
      const A = {}, Z = L.value;
      return Object.keys(Z).forEach((M) => {
        Z[M] !== null && (A[M] = Z[M]);
      }), g(g({}, H.value), {
        filters: A
      });
    }), [k] = Ri(K), F = (A, Z) => {
      $({
        pagination: g(g({}, y.pagination), {
          current: A,
          pageSize: Z
        })
      }, "paginate");
    }, [j, ie] = ei(S(() => J.value.length), ye(e, "pagination"), F);
    _e(() => {
      y.sorter = G.value, y.sorterStates = B.value, y.filters = L.value, y.filterStates = W.value, y.pagination = e.pagination === !1 ? {} : Za(j.value, e.pagination), y.resetPagination = ie;
    });
    const Y = S(() => {
      if (e.pagination === !1 || !j.value.pageSize)
        return J.value;
      const {
        current: A = 1,
        total: Z,
        pageSize: M = fn
      } = j.value;
      return Ie(A > 0, "Table", "`current` should be positive number."), J.value.length < Z ? J.value.length > M ? J.value.slice((A - 1) * M, A * M) : J.value : J.value.slice((A - 1) * M, A * M);
    });
    _e(() => {
      st(() => {
        const {
          total: A,
          pageSize: Z = fn
        } = j.value;
        J.value.length < A && J.value.length > Z && Ie(!1, "Table", "`dataSource` length is less than `pagination.total` but large than `pagination.pageSize`. Please make sure your config correct data with async mode.");
      });
    }, {
      flush: "post"
    });
    const be = S(() => e.showExpandColumn === !1 ? -1 : O.value === "nest" && e.expandIconColumnIndex === void 0 ? e.rowSelection ? 1 : 0 : e.expandIconColumnIndex > 0 && e.rowSelection ? e.expandIconColumnIndex - 1 : e.expandIconColumnIndex), xe = se();
    De(() => e.rowSelection, () => {
      xe.value = e.rowSelection ? g({}, e.rowSelection) : e.rowSelection;
    }, {
      deep: !0,
      immediate: !0
    });
    const [we, Te] = oi(xe, {
      prefixCls: d,
      data: J,
      pageData: Y,
      getRowKey: P,
      getRecordByKey: z,
      expandType: O,
      childrenColumnName: h,
      locale: c,
      getPopupContainer: S(() => e.getPopupContainer)
    }), Ke = (A, Z, M) => {
      let U;
      const {
        rowClassName: q
      } = e;
      return typeof q == "function" ? U = ee(q(A, Z, M)) : U = ee(q), ee({
        [`${d.value}-row-selected`]: Te.value.has(P.value(A, Z))
      }, U);
    };
    l({
      selectedKeySet: Te
    });
    const Ce = S(() => typeof e.indentSize == "number" ? e.indentSize : 15), $e = (A) => k(we(X(D(I(A)))));
    return () => {
      var A;
      const {
        expandIcon: Z = o.expandIcon || _i(c.value),
        pagination: M,
        loading: U,
        bordered: q
      } = e;
      let ce, Q;
      if (M !== !1 && (!((A = j.value) === null || A === void 0) && A.total)) {
        let E;
        j.value.size ? E = j.value.size : E = u.value === "small" || u.value === "middle" ? "small" : void 0;
        const R = (Pe) => f(la, V(V({}, j.value), {}, {
          class: [`${d.value}-pagination ${d.value}-pagination-${Pe}`, j.value.class],
          size: E
        }), null), ne = s.value === "rtl" ? "left" : "right", {
          position: me
        } = j.value;
        if (me !== null && Array.isArray(me)) {
          const Pe = me.find((he) => he.includes("top")), ve = me.find((he) => he.includes("bottom")), Se = me.every((he) => `${he}` == "none");
          !Pe && !ve && !Se && (Q = R(ne)), Pe && (ce = R(Pe.toLowerCase().replace("top", ""))), ve && (Q = R(ve.toLowerCase().replace("bottom", "")));
        } else
          Q = R(ne);
      }
      let le;
      typeof U == "boolean" ? le = {
        spinning: U
      } : typeof U == "object" && (le = g({
        spinning: !0
      }, U));
      const ge = ee(`${d.value}-wrapper`, {
        [`${d.value}-wrapper-rtl`]: s.value === "rtl"
      }, n.class, x.value), de = $n(e, ["columns"]);
      return C(f("div", {
        class: ge,
        style: n.style
      }, [f(rr, V({
        spinning: !1
      }, le), {
        default: () => [ce, f(qa, V(V(V({}, n), de), {}, {
          expandedRowKeys: e.expandedRowKeys,
          defaultExpandedRowKeys: e.defaultExpandedRowKeys,
          expandIconColumnIndex: be.value,
          indentSize: Ce.value,
          expandIcon: Z,
          columns: a.value,
          direction: s.value,
          prefixCls: d.value,
          class: ee({
            [`${d.value}-middle`]: u.value === "middle",
            [`${d.value}-small`]: u.value === "small",
            [`${d.value}-bordered`]: q,
            [`${d.value}-empty`]: p.value.length === 0
          }),
          data: Y.value,
          rowKey: P.value,
          rowClassName: Ke,
          internalHooks: dn,
          internalRefs: T,
          onUpdateInternalRefs: N,
          transformColumns: $e,
          transformCellText: v.value
        }), g(g({}, o), {
          emptyText: () => {
            var E, R;
            return ((E = o.emptyText) === null || E === void 0 ? void 0 : E.call(o)) || ((R = e.locale) === null || R === void 0 ? void 0 : R.emptyText) || m("Table");
          }
        })), Q]
      })]));
    };
  }
}), en = oe({
  name: "ATable",
  inheritAttrs: !1,
  props: dt(sl(), {
    rowKey: "key"
  }),
  slots: Object,
  setup(e, t) {
    let {
      attrs: n,
      slots: o,
      expose: l
    } = t;
    const r = se();
    return l({
      table: r
    }), () => {
      var i;
      const a = e.columns || Zo((i = o.default) === null || i === void 0 ? void 0 : i.call(o));
      return f(Yi, V(V(V({
        ref: r
      }, n), e), {}, {
        columns: a || [],
        expandedRowRender: o.expandedRowRender || e.expandedRowRender,
        contextSlots: g({}, o)
      }), o);
    };
  }
}), tn = oe({
  name: "ATableColumn",
  slots: Object,
  render() {
    return null;
  }
}), nn = oe({
  name: "ATableColumnGroup",
  slots: Object,
  __ANT_TABLE_COLUMN_GROUP: !0,
  render() {
    return null;
  }
}), yn = Fa, xn = La, on = g(Ha, {
  Cell: xn,
  Row: yn,
  name: "ATableSummary"
}), qi = g(en, {
  SELECTION_ALL: pn,
  SELECTION_INVERT: mn,
  SELECTION_NONE: vn,
  SELECTION_COLUMN: ke,
  EXPAND_COLUMN: Fe,
  Column: tn,
  ColumnGroup: nn,
  Summary: on,
  install: (e) => (e.component(on.name, on), e.component(xn.name, xn), e.component(yn.name, yn), e.component(en.name, en), e.component(tn.name, tn), e.component(nn.name, nn), e)
}), Ss = (e) => {
  const t = Object.entries(e.config).map(([n, o]) => ({
    header: o,
    body: n
  }));
  return {
    title: e.title || "",
    columns: t,
    props: e.props
  };
};
function Qi(e) {
  if (!Array.isArray(e))
    throw new TypeError("Input must be an array");
  function t(n) {
    if (n === null || typeof n != "object")
      return n;
    if (Array.isArray(n)) {
      const o = [];
      for (let l = 0; l < n.length; l++)
        o[l] = t(n[l]);
      return o;
    } else {
      if (n instanceof Date)
        return new Date(n.getTime());
      if (n instanceof RegExp)
        return new RegExp(n.source, n.flags);
      {
        const o = {};
        for (const l in n)
          n.hasOwnProperty(l) && (o[l] = t(n[l]));
        return o;
      }
    }
  }
  return t(e);
}
const Zi = {
  key: 0,
  class: "title"
}, es = {
  key: 0,
  style: { "margin-bottom": "10px" }
}, ts = {
  name: "easy-table"
}, ws = /* @__PURE__ */ oe({
  ...ts,
  props: {
    schema: {},
    data: {},
    enableDeepClone: { type: Boolean }
  },
  setup(e) {
    const t = (s) => r.enableDeepClone ? (console.warn("已启用数组深度克隆，可能会影响性能！"), Qi(s)) : s, n = (s, d) => {
      if (!s.render)
        return {
          component: "span",
          props: {},
          event: {}
        };
      const b = s.render(d);
      return {
        component: i.value(b.component),
        props: b.props,
        event: b.event
      };
    }, o = /* @__PURE__ */ new Map(), l = (s, d) => {
      if (o.has(s.key))
        return o.get(s.key);
      if (!s.render)
        return {
          component: "span",
          props: {},
          event: {}
        };
      const b = s.render(d), C = {
        component: i.value(b.component),
        props: b.props,
        event: b.event
      };
      return o.set(s.key, C), C;
    }, r = e, i = S(() => (s) => typeof s == "string" ? s : bl(s)), a = S(() => {
      const s = [], d = [];
      return r.schema.columns.map((b, C) => (s[C] = b.width, d[C] = b.props, b.body)).map((b, C) => typeof b == "string" ? {
        dataIndex: b,
        key: b,
        width: s[C]
      } : {
        dataIndex: b.index,
        key: b.index,
        ...d[C],
        width: s[C]
      });
    }), u = S(() => r.schema.columns.map((s) => typeof s.body == "string" ? {
      render: void 0,
      key: s.body
    } : {
      ...s.body,
      key: s.body.index
    })), m = S(() => r.schema.columns.map((s) => typeof s.header == "string" ? {
      title: s.header,
      key: typeof s.body == "string" ? s.body : s.body.index
    } : {
      ...s.header,
      key: typeof s.body == "string" ? s.body : s.body.index
    }));
    return (s, d) => {
      const b = qi;
      return Ae(), Xe("div", {
        class: "easy-table",
        style: An({
          ...s.schema.outterStyle
        })
      }, [
        s.schema.title ? (Ae(), Xe("div", Zi, [
          typeof s.schema.title == "string" ? (Ae(), Xe("h2", es, xt(s.schema.title), 1)) : (Ae(), Xe("div", {
            key: 1,
            style: An(s.schema.title.style)
          }, xt(s.schema.title.text), 5))
        ])) : Xt("", !0),
        f(b, Ut({
          columns: a.value,
          "data-source": t(s.data)
        }, s.schema.props), {
          headerCell: Ct(({ title: C, column: x }) => [
            (Ae(!0), Xe(Be, null, Fn(m.value, (v) => (Ae(), Xe(Be, null, [
              x.key === v.key ? (Ae(), Mn(jn(
                l(v, {
                  title: C,
                  column: x
                }).component
              ), Ut(
                {
                  key: 0,
                  ref_for: !0
                },
                l(v, {
                  title: C,
                  column: x
                }).props,
                Ln({
                  ...l(v, {
                    title: C,
                    column: x
                  }).event,
                  onNull: () => {
                  }
                })
              ), {
                default: Ct(() => [
                  vt(xt(v == null ? void 0 : v.title), 1)
                ]),
                _: 2
              }, 1040)) : Xt("", !0)
            ], 64))), 256))
          ]),
          bodyCell: Ct(({ text: C, record: x, index: v, column: c }) => [
            (Ae(!0), Xe(Be, null, Fn(u.value, (p) => (Ae(), Xe(Be, null, [
              c.key === p.key ? (Ae(), Mn(jn(
                n(p, {
                  text: C,
                  record: x,
                  index: v
                }).component
              ), Ut(
                {
                  key: 0,
                  ref_for: !0
                },
                n(p, {
                  text: C,
                  record: x,
                  index: v
                }).props,
                Ln({
                  ...n(p, {
                    text: C,
                    record: x,
                    index: v
                  }).event,
                  onNull: () => {
                  }
                })
              ), {
                default: Ct(() => [
                  vt(xt(C), 1)
                ]),
                _: 2
              }, 1040)) : Xt("", !0)
            ], 64))), 256))
          ]),
          _: 1
        }, 16, ["columns", "data-source"])
      ], 4);
    };
  }
});
export {
  ws as _,
  Ss as c
};
