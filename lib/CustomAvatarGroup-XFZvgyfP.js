import { shallowRef as k, onMounted as X, onUnmounted as se, inject as ce, provide as ue, defineComponent as _, computed as G, watch as j, nextTick as N, createVNode as f, ref as pe, Fragment as V, watchEffect as de, openBlock as E, createElementBlock as I, unref as W, normalizeProps as ge, guardReactiveProps as ve, withCtx as L, renderList as me, createBlock as fe, mergeProps as he, createTextVNode as Se, toDisplayString as xe } from "vue";
import { aw as ye, i as q, m as J, _ as m, r as K, c as H, ax as $e, J as U, h as C, P as be, ay as Ce, az as Pe, aA as ze, j as ke, k as we, aB as Be, w as Ae, g as Te, T as _e, aC as Re, H as Oe, aD as Ne, R as D, a3 as F, e as Ee, aj as Ge } from "./index-D4pR5m6G.js";
import { R as He } from "./index-DVt_RZcO.js";
import { e as Me } from "./eagerComputed-B06AqR4q.js";
function je() {
  const e = k({});
  let t = null;
  const r = ye();
  return X(() => {
    t = r.value.subscribe((o) => {
      e.value = o;
    });
  }), se(() => {
    r.value.unsubscribe(t);
  }), e;
}
const Ie = (e) => {
  const {
    antCls: t,
    componentCls: r,
    iconCls: o,
    avatarBg: n,
    avatarColor: d,
    containerSize: l,
    containerSizeLG: u,
    containerSizeSM: g,
    textFontSize: p,
    textFontSizeLG: c,
    textFontSizeSM: y,
    borderRadius: i,
    borderRadiusLG: a,
    borderRadiusSM: S,
    lineWidth: v,
    lineType: $
  } = e, h = (b, s, x) => ({
    width: b,
    height: b,
    lineHeight: `${b - v * 2}px`,
    borderRadius: "50%",
    [`&${r}-square`]: {
      borderRadius: x
    },
    [`${r}-string`]: {
      position: "absolute",
      left: {
        _skip_check_: !0,
        value: "50%"
      },
      transformOrigin: "0 center"
    },
    [`&${r}-icon`]: {
      fontSize: s,
      [`> ${o}`]: {
        margin: 0
      }
    }
  });
  return {
    [r]: m(m(m(m({}, K(e)), {
      position: "relative",
      display: "inline-block",
      overflow: "hidden",
      color: d,
      whiteSpace: "nowrap",
      textAlign: "center",
      verticalAlign: "middle",
      background: n,
      border: `${v}px ${$} transparent`,
      "&-image": {
        background: "transparent"
      },
      [`${t}-image-img`]: {
        display: "block"
      }
    }), h(l, p, i)), {
      "&-lg": m({}, h(u, c, a)),
      "&-sm": m({}, h(g, y, S)),
      "> img": {
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }
    })
  };
}, We = (e) => {
  const {
    componentCls: t,
    groupBorderColor: r,
    groupOverlapping: o,
    groupSpace: n
  } = e;
  return {
    [`${t}-group`]: {
      display: "inline-flex",
      [`${t}`]: {
        borderColor: r
      },
      "> *:not(:first-child)": {
        marginInlineStart: o
      }
    },
    [`${t}-group-popover`]: {
      [`${t} + ${t}`]: {
        marginInlineStart: n
      }
    }
  };
}, Z = q("Avatar", (e) => {
  const {
    colorTextLightSolid: t,
    colorTextPlaceholder: r
  } = e, o = J(e, {
    avatarBg: r,
    avatarColor: t
  });
  return [Ie(o), We(o)];
}, (e) => {
  const {
    controlHeight: t,
    controlHeightLG: r,
    controlHeightSM: o,
    fontSize: n,
    fontSizeLG: d,
    fontSizeXL: l,
    fontSizeHeading3: u,
    marginXS: g,
    marginXXS: p,
    colorBorderBg: c
  } = e;
  return {
    containerSize: t,
    containerSizeLG: r,
    containerSizeSM: o,
    textFontSize: Math.round((d + l) / 2),
    textFontSizeLG: u,
    textFontSizeSM: n,
    groupSpace: p,
    groupOverlapping: -g,
    groupBorderColor: c
  };
}), Q = Symbol("AvatarContextKey"), Le = () => ce(Q, {}), De = (e) => ue(Q, e), Fe = () => ({
  prefixCls: String,
  shape: {
    type: String,
    default: "circle"
  },
  size: {
    type: [Number, String, Object],
    default: () => "default"
  },
  src: String,
  /** Srcset of image avatar */
  srcset: String,
  icon: be.any,
  alt: String,
  gap: Number,
  draggable: {
    type: Boolean,
    default: void 0
  },
  crossOrigin: String,
  loadError: {
    type: Function
  }
}), w = _({
  compatConfig: {
    MODE: 3
  },
  name: "AAvatar",
  inheritAttrs: !1,
  props: Fe(),
  slots: Object,
  setup(e, t) {
    let {
      slots: r,
      attrs: o
    } = t;
    const n = k(!0), d = k(!1), l = k(1), u = k(null), g = k(null), {
      prefixCls: p
    } = H("avatar", e), [c, y] = Z(p), i = Le(), a = G(() => e.size === "default" ? i.size : e.size), S = je(), v = Me(() => {
      if (typeof e.size != "object")
        return;
      const s = $e.find((z) => S.value[z]);
      return e.size[s];
    }), $ = (s) => v.value ? {
      width: `${v.value}px`,
      height: `${v.value}px`,
      lineHeight: `${v.value}px`,
      fontSize: `${s ? v.value / 2 : 18}px`
    } : {}, h = () => {
      if (!u.value || !g.value)
        return;
      const s = u.value.offsetWidth, x = g.value.offsetWidth;
      if (s !== 0 && x !== 0) {
        const {
          gap: z = 4
        } = e;
        z * 2 < x && (l.value = x - z * 2 < s ? (x - z * 2) / s : 1);
      }
    }, b = () => {
      const {
        loadError: s
      } = e;
      (s == null ? void 0 : s()) !== !1 && (n.value = !1);
    };
    return j(() => e.src, () => {
      N(() => {
        n.value = !0, l.value = 1;
      });
    }), j(() => e.gap, () => {
      N(() => {
        h();
      });
    }), X(() => {
      N(() => {
        h(), d.value = !0;
      });
    }), () => {
      var s, x;
      const {
        shape: z,
        src: R,
        alt: Y,
        srcset: ee,
        draggable: te,
        crossOrigin: oe
      } = e, re = (s = i.shape) !== null && s !== void 0 ? s : z, B = U(r, e, "icon"), P = p.value, ne = {
        [`${o.class}`]: !!o.class,
        [P]: !0,
        [`${P}-lg`]: a.value === "large",
        [`${P}-sm`]: a.value === "small",
        [`${P}-${re}`]: !0,
        [`${P}-image`]: R && n.value,
        [`${P}-icon`]: B,
        [y.value]: !0
      }, ae = typeof a.value == "number" ? {
        width: `${a.value}px`,
        height: `${a.value}px`,
        lineHeight: `${a.value}px`,
        fontSize: B ? `${a.value / 2}px` : "18px"
      } : {}, M = (x = r.default) === null || x === void 0 ? void 0 : x.call(r);
      let A;
      if (R && n.value)
        A = f("img", {
          draggable: te,
          src: R,
          srcset: ee,
          onError: b,
          alt: Y,
          crossorigin: oe
        }, null);
      else if (B)
        A = B;
      else if (d.value || l.value !== 1) {
        const O = `scale(${l.value}) translateX(-50%)`, le = {
          msTransform: O,
          WebkitTransform: O,
          transform: O
        }, ie = typeof a.value == "number" ? {
          lineHeight: `${a.value}px`
        } : {};
        A = f(He, {
          onResize: h
        }, {
          default: () => [f("span", {
            class: `${P}-string`,
            ref: u,
            style: m(m({}, ie), le)
          }, [M])]
        });
      } else
        A = f("span", {
          class: `${P}-string`,
          ref: u,
          style: {
            opacity: 0
          }
        }, [M]);
      return c(f("span", C(C({}, o), {}, {
        ref: g,
        class: ne,
        style: [ae, $(!!B), o.style]
      }), [A]));
    };
  }
}), Xe = (e) => {
  const {
    componentCls: t,
    popoverBg: r,
    popoverColor: o,
    width: n,
    fontWeightStrong: d,
    popoverPadding: l,
    boxShadowSecondary: u,
    colorTextHeading: g,
    borderRadiusLG: p,
    zIndexPopup: c,
    marginXS: y,
    colorBgElevated: i
  } = e;
  return [
    {
      [t]: m(m({}, K(e)), {
        position: "absolute",
        top: 0,
        // use `left` to fix https://github.com/ant-design/ant-design/issues/39195
        left: {
          _skip_check_: !0,
          value: 0
        },
        zIndex: c,
        fontWeight: "normal",
        whiteSpace: "normal",
        textAlign: "start",
        cursor: "auto",
        userSelect: "text",
        "--antd-arrow-background-color": i,
        "&-rtl": {
          direction: "rtl"
        },
        "&-hidden": {
          display: "none"
        },
        [`${t}-content`]: {
          position: "relative"
        },
        [`${t}-inner`]: {
          backgroundColor: r,
          backgroundClip: "padding-box",
          borderRadius: p,
          boxShadow: u,
          padding: l
        },
        [`${t}-title`]: {
          minWidth: n,
          marginBottom: y,
          color: g,
          fontWeight: d
        },
        [`${t}-inner-content`]: {
          color: o
        }
      })
    },
    // Arrow Style
    Pe(e, {
      colorBg: "var(--antd-arrow-background-color)"
    }),
    // Pure Render
    {
      [`${t}-pure`]: {
        position: "relative",
        maxWidth: "none",
        [`${t}-content`]: {
          display: "inline-block"
        }
      }
    }
  ];
}, Ve = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: ze.map((r) => {
      const o = e[`${r}-6`];
      return {
        [`&${t}-${r}`]: {
          "--antd-arrow-background-color": o,
          [`${t}-inner`]: {
            backgroundColor: o
          },
          [`${t}-arrow`]: {
            background: "transparent"
          }
        }
      };
    })
  };
}, qe = (e) => {
  const {
    componentCls: t,
    lineWidth: r,
    lineType: o,
    colorSplit: n,
    paddingSM: d,
    controlHeight: l,
    fontSize: u,
    lineHeight: g,
    padding: p
  } = e, c = l - Math.round(u * g), y = c / 2, i = c / 2 - r, a = p;
  return {
    [t]: {
      [`${t}-inner`]: {
        padding: 0
      },
      [`${t}-title`]: {
        margin: 0,
        padding: `${y}px ${a}px ${i}px`,
        borderBottom: `${r}px ${o} ${n}`
      },
      [`${t}-inner-content`]: {
        padding: `${d}px ${a}px`
      }
    }
  };
}, Je = q("Popover", (e) => {
  const {
    colorBgElevated: t,
    colorText: r,
    wireframe: o
  } = e, n = J(e, {
    popoverBg: t,
    popoverColor: r,
    popoverPadding: 12
    // Fixed Value
  });
  return [Xe(n), Ve(n), o && qe(n), Ce(n, "zoom-big")];
}, (e) => {
  let {
    zIndexPopupBase: t
  } = e;
  return {
    zIndexPopup: t + 30,
    width: 177
  };
}), Ke = () => m(m({}, Ne()), {
  content: D(),
  title: D()
}), Ue = _({
  compatConfig: {
    MODE: 3
  },
  name: "APopover",
  inheritAttrs: !1,
  props: we(Ke(), m(m({}, Be()), {
    trigger: "hover",
    placement: "top",
    mouseEnterDelay: 0.1,
    mouseLeaveDelay: 0.1
  })),
  setup(e, t) {
    let {
      expose: r,
      slots: o,
      attrs: n
    } = t;
    const d = pe();
    Ae(e.visible === void 0, "popover", "`visible` will be removed in next major version, please use `open` instead."), r({
      getPopupDomNode: () => {
        var i, a;
        return (a = (i = d.value) === null || i === void 0 ? void 0 : i.getPopupDomNode) === null || a === void 0 ? void 0 : a.call(i);
      }
    });
    const {
      prefixCls: l,
      configProvider: u
    } = H("popover", e), [g, p] = Je(l), c = G(() => u.getPrefixCls()), y = () => {
      var i, a;
      const {
        title: S = F((i = o.title) === null || i === void 0 ? void 0 : i.call(o)),
        content: v = F((a = o.content) === null || a === void 0 ? void 0 : a.call(o))
      } = e, $ = !!(Array.isArray(S) ? S.length : S), h = !!(Array.isArray(v) ? v.length : S);
      return !$ && !h ? null : f(V, null, [$ && f("div", {
        class: `${l.value}-title`
      }, [S]), f("div", {
        class: `${l.value}-inner-content`
      }, [v])]);
    };
    return () => {
      const i = Te(e.overlayClassName, p.value);
      return g(f(_e, C(C(C({}, Oe(e, ["title", "content"])), n), {}, {
        prefixCls: l.value,
        ref: d,
        overlayClassName: i,
        transitionName: Re(c.value, "zoom-big", e.transitionName),
        "data-popover-inject": !0
      }), {
        title: y,
        default: o.default
      }));
    };
  }
}), Ze = ke(Ue), Qe = () => ({
  prefixCls: String,
  maxCount: Number,
  maxStyle: {
    type: Object,
    default: void 0
  },
  maxPopoverPlacement: {
    type: String,
    default: "top"
  },
  maxPopoverTrigger: String,
  /*
   * Size of avatar, options: `large`, `small`, `default`
   * or a custom number size
   * */
  size: {
    type: [Number, String, Object],
    default: "default"
  },
  shape: {
    type: String,
    default: "circle"
  }
}), T = _({
  compatConfig: {
    MODE: 3
  },
  name: "AAvatarGroup",
  inheritAttrs: !1,
  props: Qe(),
  setup(e, t) {
    let {
      slots: r,
      attrs: o
    } = t;
    const {
      prefixCls: n,
      direction: d
    } = H("avatar", e), l = G(() => `${n.value}-group`), [u, g] = Z(n);
    return de(() => {
      const p = {
        size: e.size,
        shape: e.shape
      };
      De(p);
    }), () => {
      const {
        maxPopoverPlacement: p = "top",
        maxCount: c,
        maxStyle: y,
        maxPopoverTrigger: i = "hover",
        shape: a
      } = e, S = {
        [l.value]: !0,
        [`${l.value}-rtl`]: d.value === "rtl",
        [`${o.class}`]: !!o.class,
        [g.value]: !0
      }, v = U(r, e), $ = Ee(v).map((b, s) => Ge(b, {
        key: `avatar-key-${s}`
      })), h = $.length;
      if (c && c < h) {
        const b = $.slice(0, c), s = $.slice(c, h);
        return b.push(f(Ze, {
          key: "avatar-popover-key",
          content: s,
          trigger: i,
          placement: p,
          overlayClassName: `${l.value}-popover`
        }, {
          default: () => [f(w, {
            style: y,
            shape: a
          }, {
            default: () => [`+${h - c}`]
          })]
        })), u(f("div", C(C({}, o), {}, {
          class: S,
          style: o.style
        }), [b]));
      }
      return u(f("div", C(C({}, o), {}, {
        class: S,
        style: o.style
      }), [$]));
    };
  }
});
w.Group = T;
w.install = function(e) {
  return e.component(w.name, w), e.component(T.name, T), e;
};
const rt = /* @__PURE__ */ _({
  __name: "CustomAvatarGroup",
  props: {
    avatarGroupValue: {},
    groupProps: {},
    avatarProps: {}
  },
  setup(e) {
    const t = e;
    return (r, o) => (E(), I("div", null, [
      f(W(T), ge(ve(t.groupProps)), {
        default: L(() => [
          (E(!0), I(V, null, me(t.avatarGroupValue, (n) => (E(), fe(W(w), he({
            key: n.key,
            ref_for: !0
          }, t.avatarProps, {
            src: n.src
          }), {
            default: L(() => [
              Se(xe(n.label), 1)
            ]),
            _: 2
          }, 1040, ["src"]))), 128))
        ]),
        _: 1
      }, 16)
    ]));
  }
});
export {
  rt as default
};
