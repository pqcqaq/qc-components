import { inject as ie, provide as se, defineComponent as _, shallowRef as T, computed as G, watch as H, nextTick as N, onMounted as ce, createVNode as f, ref as ue, Fragment as X, watchEffect as pe, openBlock as E, createElementBlock as I, unref as W, normalizeProps as de, guardReactiveProps as ge, withCtx as L, renderList as ve, createBlock as me, mergeProps as fe, createTextVNode as he, toDisplayString as Se } from "vue";
import { g as V, m as q, d as m, r as K, u as O, bh as xe, bi as ye, bj as be, V as Q, bk as $e, j as C, P as Ce, bl as Pe, bm as ze, bn as ke, w as we, i as Be, bo as Te, l as Ae, h as _e, T as Re, bp as Me, Q as Ne, bq as Ee, a0 as D, ad as F, ak as Ge, aM as Oe } from "./index-BK36I_Sb.js";
const je = (e) => {
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
    lineType: b
  } = e, h = ($, s, x) => ({
    width: $,
    height: $,
    lineHeight: `${$ - v * 2}px`,
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
      border: `${v}px ${b} transparent`,
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
}, He = (e) => {
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
}, Z = V("Avatar", (e) => {
  const {
    colorTextLightSolid: t,
    colorTextPlaceholder: r
  } = e, o = q(e, {
    avatarBg: r,
    avatarColor: t
  });
  return [je(o), He(o)];
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
}), J = Symbol("AvatarContextKey"), Ie = () => ie(J, {}), We = (e) => se(J, e), Le = () => ({
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
  icon: Ce.any,
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
}), k = _({
  compatConfig: {
    MODE: 3
  },
  name: "AAvatar",
  inheritAttrs: !1,
  props: Le(),
  slots: Object,
  setup(e, t) {
    let {
      slots: r,
      attrs: o
    } = t;
    const n = T(!0), d = T(!1), l = T(1), u = T(null), g = T(null), {
      prefixCls: p
    } = O("avatar", e), [c, y] = Z(p), i = Ie(), a = G(() => e.size === "default" ? i.size : e.size), S = xe(), v = ye(() => {
      if (typeof e.size != "object")
        return;
      const s = be.find((z) => S.value[z]);
      return e.size[s];
    }), b = (s) => v.value ? {
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
    }, $ = () => {
      const {
        loadError: s
      } = e;
      (s == null ? void 0 : s()) !== !1 && (n.value = !1);
    };
    return H(() => e.src, () => {
      N(() => {
        n.value = !0, l.value = 1;
      });
    }), H(() => e.gap, () => {
      N(() => {
        h();
      });
    }), ce(() => {
      N(() => {
        h(), d.value = !0;
      });
    }), () => {
      var s, x;
      const {
        shape: z,
        src: R,
        alt: U,
        srcset: Y,
        draggable: ee,
        crossOrigin: te
      } = e, oe = (s = i.shape) !== null && s !== void 0 ? s : z, w = Q(r, e, "icon"), P = p.value, re = {
        [`${o.class}`]: !!o.class,
        [P]: !0,
        [`${P}-lg`]: a.value === "large",
        [`${P}-sm`]: a.value === "small",
        [`${P}-${oe}`]: !0,
        [`${P}-image`]: R && n.value,
        [`${P}-icon`]: w,
        [y.value]: !0
      }, ne = typeof a.value == "number" ? {
        width: `${a.value}px`,
        height: `${a.value}px`,
        lineHeight: `${a.value}px`,
        fontSize: w ? `${a.value / 2}px` : "18px"
      } : {}, j = (x = r.default) === null || x === void 0 ? void 0 : x.call(r);
      let B;
      if (R && n.value)
        B = f("img", {
          draggable: ee,
          src: R,
          srcset: Y,
          onError: $,
          alt: U,
          crossorigin: te
        }, null);
      else if (w)
        B = w;
      else if (d.value || l.value !== 1) {
        const M = `scale(${l.value}) translateX(-50%)`, ae = {
          msTransform: M,
          WebkitTransform: M,
          transform: M
        }, le = typeof a.value == "number" ? {
          lineHeight: `${a.value}px`
        } : {};
        B = f($e, {
          onResize: h
        }, {
          default: () => [f("span", {
            class: `${P}-string`,
            ref: u,
            style: m(m({}, le), ae)
          }, [j])]
        });
      } else
        B = f("span", {
          class: `${P}-string`,
          ref: u,
          style: {
            opacity: 0
          }
        }, [j]);
      return c(f("span", C(C({}, o), {}, {
        ref: g,
        class: re,
        style: [ne, b(!!w), o.style]
      }), [B]));
    };
  }
}), De = (e) => {
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
    ze(e, {
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
}, Fe = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: ke.map((r) => {
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
}, Xe = (e) => {
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
}, Ve = V("Popover", (e) => {
  const {
    colorBgElevated: t,
    colorText: r,
    wireframe: o
  } = e, n = q(e, {
    popoverBg: t,
    popoverColor: r,
    popoverPadding: 12
    // Fixed Value
  });
  return [De(n), Fe(n), o && Xe(n), Pe(n, "zoom-big")];
}, (e) => {
  let {
    zIndexPopupBase: t
  } = e;
  return {
    zIndexPopup: t + 30,
    width: 177
  };
}), qe = () => m(m({}, Ee()), {
  content: D(),
  title: D()
}), Ke = _({
  compatConfig: {
    MODE: 3
  },
  name: "APopover",
  inheritAttrs: !1,
  props: Be(qe(), m(m({}, Te()), {
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
    const d = ue();
    Ae(e.visible === void 0, "popover", "`visible` will be removed in next major version, please use `open` instead."), r({
      getPopupDomNode: () => {
        var i, a;
        return (a = (i = d.value) === null || i === void 0 ? void 0 : i.getPopupDomNode) === null || a === void 0 ? void 0 : a.call(i);
      }
    });
    const {
      prefixCls: l,
      configProvider: u
    } = O("popover", e), [g, p] = Ve(l), c = G(() => u.getPrefixCls()), y = () => {
      var i, a;
      const {
        title: S = F((i = o.title) === null || i === void 0 ? void 0 : i.call(o)),
        content: v = F((a = o.content) === null || a === void 0 ? void 0 : a.call(o))
      } = e, b = !!(Array.isArray(S) ? S.length : S), h = !!(Array.isArray(v) ? v.length : S);
      return !b && !h ? null : f(X, null, [b && f("div", {
        class: `${l.value}-title`
      }, [S]), f("div", {
        class: `${l.value}-inner-content`
      }, [v])]);
    };
    return () => {
      const i = _e(e.overlayClassName, p.value);
      return g(f(Re, C(C(C({}, Ne(e, ["title", "content"])), n), {}, {
        prefixCls: l.value,
        ref: d,
        overlayClassName: i,
        transitionName: Me(c.value, "zoom-big", e.transitionName),
        "data-popover-inject": !0
      }), {
        title: y,
        default: o.default
      }));
    };
  }
}), Qe = we(Ke), Ze = () => ({
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
}), A = _({
  compatConfig: {
    MODE: 3
  },
  name: "AAvatarGroup",
  inheritAttrs: !1,
  props: Ze(),
  setup(e, t) {
    let {
      slots: r,
      attrs: o
    } = t;
    const {
      prefixCls: n,
      direction: d
    } = O("avatar", e), l = G(() => `${n.value}-group`), [u, g] = Z(n);
    return pe(() => {
      const p = {
        size: e.size,
        shape: e.shape
      };
      We(p);
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
      }, v = Q(r, e), b = Ge(v).map(($, s) => Oe($, {
        key: `avatar-key-${s}`
      })), h = b.length;
      if (c && c < h) {
        const $ = b.slice(0, c), s = b.slice(c, h);
        return $.push(f(Qe, {
          key: "avatar-popover-key",
          content: s,
          trigger: i,
          placement: p,
          overlayClassName: `${l.value}-popover`
        }, {
          default: () => [f(k, {
            style: y,
            shape: a
          }, {
            default: () => [`+${h - c}`]
          })]
        })), u(f("div", C(C({}, o), {}, {
          class: S,
          style: o.style
        }), [$]));
      }
      return u(f("div", C(C({}, o), {}, {
        class: S,
        style: o.style
      }), [b]));
    };
  }
});
k.Group = A;
k.install = function(e) {
  return e.component(k.name, k), e.component(A.name, A), e;
};
const Ye = /* @__PURE__ */ _({
  __name: "CustomAvatarGroup",
  props: {
    avatarGroupValue: {},
    groupProps: {},
    avatarProps: {}
  },
  setup(e) {
    const t = e;
    return (r, o) => (E(), I("div", null, [
      f(W(A), de(ge(t.groupProps)), {
        default: L(() => [
          (E(!0), I(X, null, ve(t.avatarGroupValue, (n) => (E(), me(W(k), fe({
            key: n.key,
            ref_for: !0
          }, t.avatarProps, {
            src: n.src
          }), {
            default: L(() => [
              he(Se(n.label), 1)
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
  Ye as default
};
