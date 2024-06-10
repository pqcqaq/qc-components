import { bE as We, a0 as $e, P as w, c, h as y, a7 as he, i as Z, a5 as je, f as U, N as Se, bF as Ve, K as de, bG as _e, bH as Ge, g as Ke, m as Xe, bk as Ue, r as ke, J as Qe, ad as qe, ah as ae, u as Je, k as we, bo as q, C as Ye, bI as Ze, n as eo, F as _, ac as te, bJ as Te, j as oo, bK as no, a1 as to, a2 as lo, bL as ao, bM as io, bN as ro, bO as so, bP as co, bQ as uo, ai as fo } from "./index-BA4jLAZj.js";
import { defineComponent as N, ref as X, computed as J, createVNode as s, Transition as Be, withDirectives as Pe, vShow as Fe, nextTick as mo, shallowRef as S, watch as Y, onBeforeUnmount as ie, watchEffect as go, Fragment as po, onMounted as vo, render as ue, unref as Co, isRef as yo } from "vue";
const bo = new $e("antFadeIn", {
  "0%": {
    opacity: 0
  },
  "100%": {
    opacity: 1
  }
}), xo = new $e("antFadeOut", {
  "0%": {
    opacity: 1
  },
  "100%": {
    opacity: 0
  }
}), $o = function(e) {
  let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  const {
    antCls: t
  } = e, n = `${t}-fade`, l = o ? "&" : "";
  return [We(n, bo, xo, e.motionDurationMid, o), {
    [`
        ${l}${n}-enter,
        ${l}${n}-appear
      `]: {
      opacity: 0,
      animationTimingFunction: "linear"
    },
    [`${l}${n}-leave`]: {
      animationTimingFunction: "linear"
    }
  }];
};
function re() {
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
    mousePosition: w.shape({
      x: Number,
      y: Number
    }).loose,
    title: w.any,
    footer: w.any,
    transitionName: String,
    maskTransitionName: String,
    animation: w.any,
    maskAnimation: w.any,
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
    bodyProps: w.any,
    maskProps: w.any,
    wrapProps: w.any,
    getContainer: w.any,
    dialogStyle: {
      type: Object,
      default: void 0
    },
    dialogClass: String,
    closeIcon: w.any,
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
function fe(e, o, t) {
  let n = o;
  return !n && t && (n = `${e}-${t}`), n;
}
let me = -1;
function ho() {
  return me += 1, me;
}
function ge(e, o) {
  let t = e[`page${o ? "Y" : "X"}Offset`];
  const n = `scroll${o ? "Top" : "Left"}`;
  if (typeof t != "number") {
    const l = e.document;
    t = l.documentElement[n], typeof t != "number" && (t = l.body[n]);
  }
  return t;
}
function So(e) {
  const o = e.getBoundingClientRect(), t = {
    left: o.left,
    top: o.top
  }, n = e.ownerDocument, l = n.defaultView || n.parentWindow;
  return t.left += ge(l), t.top += ge(l, !0), t;
}
const pe = {
  width: 0,
  height: 0,
  overflow: "hidden",
  outline: "none"
}, wo = N({
  compatConfig: {
    MODE: 3
  },
  name: "DialogContent",
  inheritAttrs: !1,
  props: c(c({}, re()), {
    motionName: String,
    ariaId: String,
    onVisibleChanged: Function,
    onMousedown: Function,
    onMouseup: Function
  }),
  setup(e, o) {
    let {
      expose: t,
      slots: n,
      attrs: l
    } = o;
    const d = X(), g = X(), v = X();
    t({
      focus: () => {
        var a;
        (a = d.value) === null || a === void 0 || a.focus();
      },
      changeActive: (a) => {
        const {
          activeElement: r
        } = document;
        a && r === g.value ? d.value.focus() : !a && r === d.value && g.value.focus();
      }
    });
    const b = X(), f = J(() => {
      const {
        width: a,
        height: r
      } = e, p = {};
      return a !== void 0 && (p.width = typeof a == "number" ? `${a}px` : a), r !== void 0 && (p.height = typeof r == "number" ? `${r}px` : r), b.value && (p.transformOrigin = b.value), p;
    }), u = () => {
      mo(() => {
        if (v.value) {
          const a = So(v.value);
          b.value = e.mousePosition ? `${e.mousePosition.x - a.left}px ${e.mousePosition.y - a.top}px` : "";
        }
      });
    }, i = (a) => {
      e.onVisibleChanged(a);
    };
    return () => {
      var a, r, p, x;
      const {
        prefixCls: h,
        footer: m = (a = n.footer) === null || a === void 0 ? void 0 : a.call(n),
        title: $ = (r = n.title) === null || r === void 0 ? void 0 : r.call(n),
        ariaId: C,
        closable: T,
        closeIcon: B = (p = n.closeIcon) === null || p === void 0 ? void 0 : p.call(n),
        onClose: F,
        bodyStyle: I,
        bodyProps: O,
        onMousedown: z,
        onMouseup: A,
        visible: L,
        modalRender: D = n.modalRender,
        destroyOnClose: G,
        motionName: H
      } = e;
      let W;
      m && (W = s("div", {
        class: `${h}-footer`
      }, [m]));
      let j;
      $ && (j = s("div", {
        class: `${h}-header`
      }, [s("div", {
        class: `${h}-title`,
        id: C
      }, [$])]));
      let R;
      T && (R = s("button", {
        type: "button",
        onClick: F,
        "aria-label": "Close",
        class: `${h}-close`
      }, [B || s("span", {
        class: `${h}-close-x`
      }, null)]));
      const M = s("div", {
        class: `${h}-content`
      }, [R, j, s("div", y({
        class: `${h}-body`,
        style: I
      }, O), [(x = n.default) === null || x === void 0 ? void 0 : x.call(n)]), W]), ee = he(H);
      return s(Be, y(y({}, ee), {}, {
        onBeforeEnter: u,
        onAfterEnter: () => i(!0),
        onAfterLeave: () => i(!1)
      }), {
        default: () => [L || !G ? Pe(s("div", y(y({}, l), {}, {
          ref: v,
          key: "dialog-element",
          role: "document",
          style: [f.value, l.style],
          class: [h, l.class],
          onMousedown: z,
          onMouseup: A
        }), [s("div", {
          tabindex: 0,
          ref: d,
          style: pe,
          "aria-hidden": "true"
        }, null), D ? D({
          originVNode: M
        }) : M, s("div", {
          tabindex: 0,
          ref: g,
          style: pe,
          "aria-hidden": "true"
        }, null)]), [[Fe, L]]) : null]
      });
    };
  }
}), To = N({
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
  setup(e, o) {
    return () => {
      const {
        prefixCls: t,
        visible: n,
        maskProps: l,
        motionName: d
      } = e, g = he(d);
      return s(Be, g, {
        default: () => [Pe(s("div", y({
          class: `${t}-mask`
        }, l), null), [[Fe, n]])]
      });
    };
  }
}), ve = N({
  compatConfig: {
    MODE: 3
  },
  name: "VcDialog",
  inheritAttrs: !1,
  props: Z(c(c({}, re()), {
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
  setup(e, o) {
    let {
      attrs: t,
      slots: n
    } = o;
    const l = S(), d = S(), g = S(), v = S(e.visible), b = S(`vcDialogTitle${ho()}`), f = (m) => {
      var $, C;
      if (m)
        Ve(d.value, document.activeElement) || (l.value = document.activeElement, ($ = g.value) === null || $ === void 0 || $.focus());
      else {
        const T = v.value;
        if (v.value = !1, e.mask && l.value && e.focusTriggerAfterClose) {
          try {
            l.value.focus({
              preventScroll: !0
            });
          } catch {
          }
          l.value = null;
        }
        T && ((C = e.afterClose) === null || C === void 0 || C.call(e));
      }
    }, u = (m) => {
      var $;
      ($ = e.onClose) === null || $ === void 0 || $.call(e, m);
    }, i = S(!1), a = S(), r = () => {
      clearTimeout(a.value), i.value = !0;
    }, p = () => {
      a.value = setTimeout(() => {
        i.value = !1;
      });
    }, x = (m) => {
      if (!e.maskClosable)
        return null;
      i.value ? i.value = !1 : d.value === m.target && u(m);
    }, h = (m) => {
      if (e.keyboard && m.keyCode === de.ESC) {
        m.stopPropagation(), u(m);
        return;
      }
      e.visible && m.keyCode === de.TAB && g.value.changeActive(!m.shiftKey);
    };
    return Y(() => e.visible, () => {
      e.visible && (v.value = !0);
    }, {
      flush: "post"
    }), ie(() => {
      var m;
      clearTimeout(a.value), (m = e.scrollLocker) === null || m === void 0 || m.unLock();
    }), go(() => {
      var m, $;
      (m = e.scrollLocker) === null || m === void 0 || m.unLock(), v.value && (($ = e.scrollLocker) === null || $ === void 0 || $.lock());
    }), () => {
      const {
        prefixCls: m,
        mask: $,
        visible: C,
        maskTransitionName: T,
        maskAnimation: B,
        zIndex: F,
        wrapClassName: I,
        rootClassName: O,
        wrapStyle: z,
        closable: A,
        maskProps: L,
        maskStyle: D,
        transitionName: G,
        animation: H,
        wrapProps: W,
        title: j = n.title
      } = e, {
        style: R,
        class: M
      } = t;
      return s("div", y({
        class: [`${m}-root`, O]
      }, je(e, {
        data: !0
      })), [s(To, {
        prefixCls: m,
        visible: $ && C,
        motionName: fe(m, T, B),
        style: c({
          zIndex: F
        }, D),
        maskProps: L
      }, null), s("div", y({
        tabIndex: -1,
        onKeydown: h,
        class: U(`${m}-wrap`, I),
        ref: d,
        onClick: x,
        role: "dialog",
        "aria-labelledby": j ? b.value : null,
        style: c(c({
          zIndex: F
        }, z), {
          display: v.value ? null : "none"
        })
      }, W), [s(wo, y(y({}, Se(e, ["scrollLocker"])), {}, {
        style: R,
        class: M,
        onMousedown: r,
        onMouseup: p,
        ref: g,
        closable: A,
        ariaId: b.value,
        prefixCls: m,
        visible: C,
        onClose: u,
        onVisibleChanged: f,
        motionName: fe(m, G, H)
      }), n)])]);
    };
  }
}), Bo = re(), Po = N({
  compatConfig: {
    MODE: 3
  },
  name: "DialogWrap",
  inheritAttrs: !1,
  props: Z(Bo, {
    visible: !1
  }),
  setup(e, o) {
    let {
      attrs: t,
      slots: n
    } = o;
    const l = X(e.visible);
    return _e({}, {
      inTriggerContext: !1
    }), Y(() => e.visible, () => {
      e.visible && (l.value = !0);
    }, {
      flush: "post"
    }), () => {
      const {
        visible: d,
        getContainer: g,
        forceRender: v,
        destroyOnClose: b = !1,
        afterClose: f
      } = e;
      let u = c(c(c({}, e), t), {
        ref: "_component",
        key: "dialog"
      });
      return g === !1 ? s(ve, y(y({}, u), {}, {
        getOpenCount: () => 2
      }), n) : !v && b && !l.value ? null : s(Ge, {
        autoLock: !0,
        visible: d,
        forceRender: v,
        getContainer: g
      }, {
        default: (i) => (u = c(c(c({}, u), i), {
          afterClose: () => {
            f == null || f(), l.value = !1;
          }
        }), s(ve, u, n))
      });
    };
  }
});
function Ce(e) {
  return {
    position: e,
    top: 0,
    insetInlineEnd: 0,
    bottom: 0,
    insetInlineStart: 0
  };
}
const Fo = (e) => {
  const {
    componentCls: o
  } = e;
  return [{
    [`${o}-root`]: {
      [`${o}${e.antCls}-zoom-enter, ${o}${e.antCls}-zoom-appear`]: {
        // reset scale avoid mousePosition bug
        transform: "none",
        opacity: 0,
        animationDuration: e.motionDurationSlow,
        // https://github.com/ant-design/ant-design/issues/11777
        userSelect: "none"
      },
      [`${o}${e.antCls}-zoom-leave ${o}-content`]: {
        pointerEvents: "none"
      },
      [`${o}-mask`]: c(c({}, Ce("fixed")), {
        zIndex: e.zIndexPopupBase,
        height: "100%",
        backgroundColor: e.colorBgMask,
        [`${o}-hidden`]: {
          display: "none"
        }
      }),
      [`${o}-wrap`]: c(c({}, Ce("fixed")), {
        overflow: "auto",
        outline: 0,
        WebkitOverflowScrolling: "touch"
      })
    }
  }, {
    [`${o}-root`]: $o(e)
  }];
}, Io = (e) => {
  const {
    componentCls: o
  } = e;
  return [
    // ======================== Root =========================
    {
      [`${o}-root`]: {
        [`${o}-wrap`]: {
          zIndex: e.zIndexPopupBase,
          position: "fixed",
          inset: 0,
          overflow: "auto",
          outline: 0,
          WebkitOverflowScrolling: "touch"
        },
        [`${o}-wrap-rtl`]: {
          direction: "rtl"
        },
        [`${o}-centered`]: {
          textAlign: "center",
          "&::before": {
            display: "inline-block",
            width: 0,
            height: "100%",
            verticalAlign: "middle",
            content: '""'
          },
          [o]: {
            top: 0,
            display: "inline-block",
            paddingBottom: 0,
            textAlign: "start",
            verticalAlign: "middle"
          }
        },
        [`@media (max-width: ${e.screenSMMax})`]: {
          [o]: {
            maxWidth: "calc(100vw - 16px)",
            margin: `${e.marginXS} auto`
          },
          [`${o}-centered`]: {
            [o]: {
              flex: 1
            }
          }
        }
      }
    },
    // ======================== Modal ========================
    {
      [o]: c(c({}, ke(e)), {
        pointerEvents: "none",
        position: "relative",
        top: 100,
        width: "auto",
        maxWidth: `calc(100vw - ${e.margin * 2}px)`,
        margin: "0 auto",
        paddingBottom: e.paddingLG,
        [`${o}-title`]: {
          margin: 0,
          color: e.modalHeadingColor,
          fontWeight: e.fontWeightStrong,
          fontSize: e.modalHeaderTitleFontSize,
          lineHeight: e.modalHeaderTitleLineHeight,
          wordWrap: "break-word"
        },
        [`${o}-content`]: {
          position: "relative",
          backgroundColor: e.modalContentBg,
          backgroundClip: "padding-box",
          border: 0,
          borderRadius: e.borderRadiusLG,
          boxShadow: e.boxShadowSecondary,
          pointerEvents: "auto",
          padding: `${e.paddingMD}px ${e.paddingContentHorizontalLG}px`
        },
        [`${o}-close`]: c({
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
        }, Qe(e)),
        [`${o}-header`]: {
          color: e.colorText,
          background: e.modalHeaderBg,
          borderRadius: `${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`,
          marginBottom: e.marginXS
        },
        [`${o}-body`]: {
          fontSize: e.fontSize,
          lineHeight: e.lineHeight,
          wordWrap: "break-word"
        },
        [`${o}-footer`]: {
          textAlign: "end",
          background: e.modalFooterBg,
          marginTop: e.marginSM,
          [`${e.antCls}-btn + ${e.antCls}-btn:not(${e.antCls}-dropdown-trigger)`]: {
            marginBottom: 0,
            marginInlineStart: e.marginXS
          }
        },
        [`${o}-open`]: {
          overflow: "hidden"
        }
      })
    },
    // ======================== Pure =========================
    {
      [`${o}-pure-panel`]: {
        top: "auto",
        padding: 0,
        display: "flex",
        flexDirection: "column",
        [`${o}-content,
          ${o}-body,
          ${o}-confirm-body-wrapper`]: {
          display: "flex",
          flexDirection: "column",
          flex: "auto"
        },
        [`${o}-confirm-body`]: {
          marginBottom: "auto"
        }
      }
    }
  ];
}, Mo = (e) => {
  const {
    componentCls: o
  } = e, t = `${o}-confirm`;
  return {
    [t]: {
      "&-rtl": {
        direction: "rtl"
      },
      [`${e.antCls}-modal-header`]: {
        display: "none"
      },
      [`${t}-body-wrapper`]: c({}, qe()),
      [`${t}-body`]: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        [`${t}-title`]: {
          flex: "0 0 100%",
          display: "block",
          // create BFC to avoid
          // https://user-images.githubusercontent.com/507615/37702510-ba844e06-2d2d-11e8-9b67-8e19be57f445.png
          overflow: "hidden",
          color: e.colorTextHeading,
          fontWeight: e.fontWeightStrong,
          fontSize: e.modalHeaderTitleFontSize,
          lineHeight: e.modalHeaderTitleLineHeight,
          [`+ ${t}-content`]: {
            marginBlockStart: e.marginXS,
            flexBasis: "100%",
            maxWidth: `calc(100% - ${e.modalConfirmIconSize + e.marginSM}px)`
          }
        },
        [`${t}-content`]: {
          color: e.colorText,
          fontSize: e.fontSize
        },
        [`> ${e.iconCls}`]: {
          flex: "none",
          marginInlineEnd: e.marginSM,
          fontSize: e.modalConfirmIconSize,
          [`+ ${t}-title`]: {
            flex: 1
          },
          // `content` after `icon` should set marginLeft
          [`+ ${t}-title + ${t}-content`]: {
            marginInlineStart: e.modalConfirmIconSize + e.marginSM
          }
        }
      },
      [`${t}-btns`]: {
        textAlign: "end",
        marginTop: e.marginSM,
        [`${e.antCls}-btn + ${e.antCls}-btn`]: {
          marginBottom: 0,
          marginInlineStart: e.marginXS
        }
      }
    },
    [`${t}-error ${t}-body > ${e.iconCls}`]: {
      color: e.colorError
    },
    [`${t}-warning ${t}-body > ${e.iconCls},
        ${t}-confirm ${t}-body > ${e.iconCls}`]: {
      color: e.colorWarning
    },
    [`${t}-info ${t}-body > ${e.iconCls}`]: {
      color: e.colorInfo
    },
    [`${t}-success ${t}-body > ${e.iconCls}`]: {
      color: e.colorSuccess
    },
    // https://github.com/ant-design/ant-design/issues/37329
    [`${o}-zoom-leave ${o}-btns`]: {
      pointerEvents: "none"
    }
  };
}, No = (e) => {
  const {
    componentCls: o
  } = e;
  return {
    [`${o}-root`]: {
      [`${o}-wrap-rtl`]: {
        direction: "rtl",
        [`${o}-confirm-body`]: {
          direction: "rtl"
        }
      }
    }
  };
}, Oo = (e) => {
  const {
    componentCls: o,
    antCls: t
  } = e, n = `${o}-confirm`;
  return {
    [o]: {
      [`${o}-content`]: {
        padding: 0
      },
      [`${o}-header`]: {
        padding: e.modalHeaderPadding,
        borderBottom: `${e.modalHeaderBorderWidth}px ${e.modalHeaderBorderStyle} ${e.modalHeaderBorderColorSplit}`,
        marginBottom: 0
      },
      [`${o}-body`]: {
        padding: e.modalBodyPadding
      },
      [`${o}-footer`]: {
        padding: `${e.modalFooterPaddingVertical}px ${e.modalFooterPaddingHorizontal}px`,
        borderTop: `${e.modalFooterBorderWidth}px ${e.modalFooterBorderStyle} ${e.modalFooterBorderColorSplit}`,
        borderRadius: `0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px`,
        marginTop: 0
      }
    },
    [n]: {
      [`${t}-modal-body`]: {
        padding: `${e.padding * 2}px ${e.padding * 2}px ${e.paddingLG}px`
      },
      [`${n}-body`]: {
        [`> ${e.iconCls}`]: {
          marginInlineEnd: e.margin,
          // `content` after `icon` should set marginLeft
          [`+ ${n}-title + ${n}-content`]: {
            marginInlineStart: e.modalConfirmIconSize + e.margin
          }
        }
      },
      [`${n}-btns`]: {
        marginTop: e.marginLG
      }
    }
  };
}, zo = Ke("Modal", (e) => {
  const o = e.padding, t = e.fontSizeHeading5, n = e.lineHeightHeading5, l = Xe(e, {
    modalBodyPadding: e.paddingLG,
    modalHeaderBg: e.colorBgElevated,
    modalHeaderPadding: `${o}px ${e.paddingLG}px`,
    modalHeaderBorderWidth: e.lineWidth,
    modalHeaderBorderStyle: e.lineType,
    modalHeaderTitleLineHeight: n,
    modalHeaderTitleFontSize: t,
    modalHeaderBorderColorSplit: e.colorSplit,
    modalHeaderCloseSize: n * t + o * 2,
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
  return [Io(l), Mo(l), No(l), Fo(l), e.wireframe && Oo(l), Ue(l, "zoom")];
});
var Ho = function(e, o) {
  var t = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && o.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
      o.indexOf(n[l]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[l]) && (t[n[l]] = e[n[l]]);
  return t;
};
let le;
const Ao = (e) => {
  le = {
    x: e.pageX,
    y: e.pageY
  }, setTimeout(() => le = null, 100);
};
Ze() && eo(document.documentElement, "click", Ao, !0);
const Ro = () => ({
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
  title: w.any,
  closable: {
    type: Boolean,
    default: void 0
  },
  closeIcon: w.any,
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
  footer: w.any,
  okText: w.any,
  okType: String,
  cancelText: w.any,
  icon: w.any,
  maskClosable: {
    type: Boolean,
    default: void 0
  },
  forceRender: {
    type: Boolean,
    default: void 0
  },
  okButtonProps: _(),
  cancelButtonProps: _(),
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
  bodyStyle: _(),
  maskStyle: _(),
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
  mousePosition: _()
}), P = N({
  compatConfig: {
    MODE: 3
  },
  name: "AModal",
  inheritAttrs: !1,
  props: Z(Ro(), {
    width: 520,
    confirmLoading: !1,
    okType: "primary"
  }),
  setup(e, o) {
    let {
      emit: t,
      slots: n,
      attrs: l
    } = o;
    const [d] = ae("Modal"), {
      prefixCls: g,
      rootPrefixCls: v,
      direction: b,
      getPopupContainer: f
    } = Je("modal", e), [u, i] = zo(g);
    we(e.visible === void 0, "Modal", "`visible` will be removed in next major version, please use `open` instead.");
    const a = (x) => {
      t("update:visible", !1), t("update:open", !1), t("cancel", x), t("change", !1);
    }, r = (x) => {
      t("ok", x);
    }, p = () => {
      var x, h;
      const {
        okText: m = (x = n.okText) === null || x === void 0 ? void 0 : x.call(n),
        okType: $,
        cancelText: C = (h = n.cancelText) === null || h === void 0 ? void 0 : h.call(n),
        confirmLoading: T
      } = e;
      return s(po, null, [s(te, y({
        onClick: a
      }, e.cancelButtonProps), {
        default: () => [C || d.value.cancelText]
      }), s(te, y(y({}, Te($)), {}, {
        loading: T,
        onClick: r
      }, e.okButtonProps), {
        default: () => [m || d.value.okText]
      })]);
    };
    return () => {
      var x, h;
      const {
        prefixCls: m,
        visible: $,
        open: C,
        wrapClassName: T,
        centered: B,
        getContainer: F,
        closeIcon: I = (x = n.closeIcon) === null || x === void 0 ? void 0 : x.call(n),
        focusTriggerAfterClose: O = !0
      } = e, z = Ho(e, ["prefixCls", "visible", "open", "wrapClassName", "centered", "getContainer", "closeIcon", "focusTriggerAfterClose"]), A = U(T, {
        [`${g.value}-centered`]: !!B,
        [`${g.value}-wrap-rtl`]: b.value === "rtl"
      });
      return u(s(Po, y(y(y({}, z), l), {}, {
        rootClassName: i.value,
        class: U(i.value, l.class),
        getContainer: F || (f == null ? void 0 : f.value),
        prefixCls: g.value,
        wrapClassName: A,
        visible: C ?? $,
        onClose: a,
        focusTriggerAfterClose: O,
        transitionName: q(v.value, "zoom", e.transitionName),
        maskTransitionName: q(v.value, "fade", e.maskTransitionName),
        mousePosition: (h = z.mousePosition) !== null && h !== void 0 ? h : le
      }), c(c({}, n), {
        footer: n.footer || p,
        closeIcon: () => s("span", {
          class: `${g.value}-close-x`
        }, [I || s(Ye, {
          class: `${g.value}-close-icon`
        }, null)])
      })));
    };
  }
}), Eo = () => {
  const e = S(!1);
  return ie(() => {
    e.value = !0;
  }), e;
}, Lo = {
  type: {
    type: String
  },
  actionFn: Function,
  close: Function,
  autofocus: Boolean,
  prefixCls: String,
  buttonProps: _(),
  emitEvent: Boolean,
  quitOnNullishReturnValue: Boolean
};
function ye(e) {
  return !!(e && e.then);
}
const be = N({
  compatConfig: {
    MODE: 3
  },
  name: "ActionButton",
  props: Lo,
  setup(e, o) {
    let {
      slots: t
    } = o;
    const n = S(!1), l = S(), d = S(!1);
    let g;
    const v = Eo();
    vo(() => {
      e.autofocus && (g = setTimeout(() => {
        var i, a;
        return (a = (i = oo(l.value)) === null || i === void 0 ? void 0 : i.focus) === null || a === void 0 ? void 0 : a.call(i);
      }));
    }), ie(() => {
      clearTimeout(g);
    });
    const b = function() {
      for (var i, a = arguments.length, r = new Array(a), p = 0; p < a; p++)
        r[p] = arguments[p];
      (i = e.close) === null || i === void 0 || i.call(e, ...r);
    }, f = (i) => {
      ye(i) && (d.value = !0, i.then(function() {
        v.value || (d.value = !1), b(...arguments), n.value = !1;
      }, (a) => (v.value || (d.value = !1), n.value = !1, Promise.reject(a))));
    }, u = (i) => {
      const {
        actionFn: a
      } = e;
      if (n.value)
        return;
      if (n.value = !0, !a) {
        b();
        return;
      }
      let r;
      if (e.emitEvent) {
        if (r = a(i), e.quitOnNullishReturnValue && !ye(r)) {
          n.value = !1, b(i);
          return;
        }
      } else if (a.length)
        r = a(e.close), n.value = !1;
      else if (r = a(), !r) {
        b();
        return;
      }
      f(r);
    };
    return () => {
      const {
        type: i,
        prefixCls: a,
        buttonProps: r
      } = e;
      return s(te, y(y(y({}, Te(i)), {}, {
        onClick: u,
        loading: d.value,
        prefixCls: a
      }, r), {}, {
        ref: l
      }), t);
    };
  }
});
function V(e) {
  return typeof e == "function" ? e() : e;
}
const Ie = N({
  name: "ConfirmDialog",
  inheritAttrs: !1,
  props: ["icon", "onCancel", "onOk", "close", "closable", "zIndex", "afterClose", "visible", "open", "keyboard", "centered", "getContainer", "maskStyle", "okButtonProps", "cancelButtonProps", "okType", "prefixCls", "okCancel", "width", "mask", "maskClosable", "okText", "cancelText", "autoFocusButton", "transitionName", "maskTransitionName", "type", "title", "content", "direction", "rootPrefixCls", "bodyStyle", "closeIcon", "modalRender", "focusTriggerAfterClose", "wrapClassName", "confirmPrefixCls", "footer"],
  setup(e, o) {
    let {
      attrs: t
    } = o;
    const [n] = ae("Modal");
    return process.env.NODE_ENV !== "production" && we(e.visible === void 0, "Modal", "`visible` is deprecated, please use `open` instead."), () => {
      const {
        icon: l,
        onCancel: d,
        onOk: g,
        close: v,
        okText: b,
        closable: f = !1,
        zIndex: u,
        afterClose: i,
        keyboard: a,
        centered: r,
        getContainer: p,
        maskStyle: x,
        okButtonProps: h,
        cancelButtonProps: m,
        okCancel: $,
        width: C = 416,
        mask: T = !0,
        maskClosable: B = !1,
        type: F,
        open: I,
        title: O,
        content: z,
        direction: A,
        closeIcon: L,
        modalRender: D,
        focusTriggerAfterClose: G,
        rootPrefixCls: H,
        bodyStyle: W,
        wrapClassName: j,
        footer: R
      } = e;
      let M = l;
      if (!l && l !== null)
        switch (F) {
          case "info":
            M = s(ao, null, null);
            break;
          case "success":
            M = s(lo, null, null);
            break;
          case "error":
            M = s(to, null, null);
            break;
          default:
            M = s(no, null, null);
        }
      const ee = e.okType || "primary", oe = e.prefixCls || "ant-modal", K = `${oe}-confirm`, Re = t.style || {}, se = $ ?? F === "confirm", ce = e.autoFocusButton === null ? !1 : e.autoFocusButton || "ok", Q = `${oe}-confirm`, Ee = U(Q, `${Q}-${e.type}`, {
        [`${Q}-rtl`]: A === "rtl"
      }, t.class), ne = n.value, Le = se && s(be, {
        actionFn: d,
        close: v,
        autofocus: ce === "cancel",
        buttonProps: m,
        prefixCls: `${H}-btn`
      }, {
        default: () => [V(e.cancelText) || ne.cancelText]
      });
      return s(P, {
        prefixCls: oe,
        class: Ee,
        wrapClassName: U({
          [`${Q}-centered`]: !!r
        }, j),
        onCancel: (De) => v == null ? void 0 : v({
          triggerCancel: !0
        }, De),
        open: I,
        title: "",
        footer: "",
        transitionName: q(H, "zoom", e.transitionName),
        maskTransitionName: q(H, "fade", e.maskTransitionName),
        mask: T,
        maskClosable: B,
        maskStyle: x,
        style: Re,
        bodyStyle: W,
        width: C,
        zIndex: u,
        afterClose: i,
        keyboard: a,
        centered: r,
        getContainer: p,
        closable: f,
        closeIcon: L,
        modalRender: D,
        focusTriggerAfterClose: G
      }, {
        default: () => [s("div", {
          class: `${K}-body-wrapper`
        }, [s("div", {
          class: `${K}-body`
        }, [V(M), O === void 0 ? null : s("span", {
          class: `${K}-title`
        }, [V(O)]), s("div", {
          class: `${K}-content`
        }, [V(z)])]), R !== void 0 ? V(R) : s("div", {
          class: `${K}-btns`
        }, [Le, s(be, {
          type: ee,
          actionFn: g,
          close: v,
          autofocus: ce === "ok",
          buttonProps: h,
          prefixCls: `${H}-btn`
        }, {
          default: () => [V(b) || (se ? ne.okText : ne.justOkText)]
        })])])]
      });
    };
  }
}), E = [], k = (e) => {
  const o = document.createDocumentFragment();
  let t = c(c({}, Se(e, ["parentContext", "appContext"])), {
    close: d,
    open: !0
  }), n = null;
  function l() {
    n && (ue(null, o), n = null);
    for (var f = arguments.length, u = new Array(f), i = 0; i < f; i++)
      u[i] = arguments[i];
    const a = u.some((r) => r && r.triggerCancel);
    e.onCancel && a && e.onCancel(() => {
    }, ...u.slice(1));
    for (let r = 0; r < E.length; r++)
      if (E[r] === d) {
        E.splice(r, 1);
        break;
      }
  }
  function d() {
    for (var f = arguments.length, u = new Array(f), i = 0; i < f; i++)
      u[i] = arguments[i];
    t = c(c({}, t), {
      open: !1,
      afterClose: () => {
        typeof e.afterClose == "function" && e.afterClose(), l.apply(this, u);
      }
    }), t.visible && delete t.visible, g(t);
  }
  function g(f) {
    typeof f == "function" ? t = f(t) : t = c(c({}, t), f), n && io(n, t, o);
  }
  const v = (f) => {
    const u = so, i = u.prefixCls, a = f.prefixCls || `${i}-modal`, r = u.iconPrefixCls, p = co();
    return s(ro, y(y({}, u), {}, {
      prefixCls: i
    }), {
      default: () => [s(Ie, y(y({}, f), {}, {
        rootPrefixCls: i,
        prefixCls: a,
        iconPrefixCls: r,
        locale: p,
        cancelText: f.cancelText || p.cancelText
      }), null)]
    });
  };
  function b(f) {
    const u = s(v, c({}, f));
    return u.appContext = e.parentContext || e.appContext || u.appContext, ue(u, o), u;
  }
  return n = b(t), E.push(d), {
    destroy: d,
    update: g
  };
};
function Me(e) {
  return c(c({}, e), {
    type: "warning"
  });
}
function Ne(e) {
  return c(c({}, e), {
    type: "info"
  });
}
function Oe(e) {
  return c(c({}, e), {
    type: "success"
  });
}
function ze(e) {
  return c(c({}, e), {
    type: "error"
  });
}
function He(e) {
  return c(c({}, e), {
    type: "confirm"
  });
}
const Do = () => ({
  config: Object,
  afterClose: Function,
  destroyAction: Function,
  open: Boolean
}), Wo = N({
  name: "HookModal",
  inheritAttrs: !1,
  props: Z(Do(), {
    config: {
      width: 520,
      okType: "primary"
    }
  }),
  setup(e, o) {
    let {
      expose: t
    } = o;
    var n;
    const l = J(() => e.open), d = J(() => e.config), {
      direction: g,
      getPrefixCls: v
    } = uo(), b = v("modal"), f = v(), u = () => {
      var p, x;
      e == null || e.afterClose(), (x = (p = d.value).afterClose) === null || x === void 0 || x.call(p);
    }, i = function() {
      e.destroyAction(...arguments);
    };
    t({
      destroy: i
    });
    const a = (n = d.value.okCancel) !== null && n !== void 0 ? n : d.value.type === "confirm", [r] = ae("Modal", fo.Modal);
    return () => s(Ie, y(y({
      prefixCls: b,
      rootPrefixCls: f
    }, d.value), {}, {
      close: i,
      open: l.value,
      afterClose: u,
      okText: d.value.okText || (a ? r == null ? void 0 : r.value.okText : r == null ? void 0 : r.value.justOkText),
      direction: d.value.direction || g.value,
      cancelText: d.value.cancelText || (r == null ? void 0 : r.value.cancelText)
    }), null);
  }
});
let xe = 0;
const jo = N({
  name: "ElementsHolder",
  inheritAttrs: !1,
  setup(e, o) {
    let {
      expose: t
    } = o;
    const n = S([]);
    return t({
      addModal: (d) => (n.value.push(d), n.value = n.value.slice(), () => {
        n.value = n.value.filter((g) => g !== d);
      })
    }), () => n.value.map((d) => d());
  }
});
function Vo() {
  const e = S(null), o = S([]);
  Y(o, () => {
    o.value.length && ([...o.value].forEach((g) => {
      g();
    }), o.value = []);
  }, {
    immediate: !0
  });
  const t = (d) => function(v) {
    var b;
    xe += 1;
    const f = S(!0), u = S(null), i = S(Co(v)), a = S({});
    Y(() => v, (C) => {
      h(c(c({}, yo(C) ? C.value : C), a.value));
    });
    const r = function() {
      f.value = !1;
      for (var C = arguments.length, T = new Array(C), B = 0; B < C; B++)
        T[B] = arguments[B];
      const F = T.some((I) => I && I.triggerCancel);
      i.value.onCancel && F && i.value.onCancel(() => {
      }, ...T.slice(1));
    };
    let p;
    const x = () => s(Wo, {
      key: `modal-${xe}`,
      config: d(i.value),
      ref: u,
      open: f.value,
      destroyAction: r,
      afterClose: () => {
        p == null || p();
      }
    }, null);
    p = (b = e.value) === null || b === void 0 ? void 0 : b.addModal(x), p && E.push(p);
    const h = (C) => {
      i.value = c(c({}, i.value), C);
    };
    return {
      destroy: () => {
        u.value ? r() : o.value = [...o.value, r];
      },
      update: (C) => {
        a.value = C, u.value ? h(C) : o.value = [...o.value, () => h(C)];
      }
    };
  }, n = J(() => ({
    info: t(Ne),
    success: t(Oe),
    error: t(ze),
    warning: t(Me),
    confirm: t(He)
  })), l = Symbol("modalHolderKey");
  return [n.value, () => s(jo, {
    key: l,
    ref: e
  }, null)];
}
function Ae(e) {
  return k(Me(e));
}
P.useModal = Vo;
P.info = function(o) {
  return k(Ne(o));
};
P.success = function(o) {
  return k(Oe(o));
};
P.error = function(o) {
  return k(ze(o));
};
P.warning = Ae;
P.warn = Ae;
P.confirm = function(o) {
  return k(He(o));
};
P.destroyAll = function() {
  for (; E.length; ) {
    const o = E.pop();
    o && o();
  }
};
P.install = function(e) {
  return e.component(P.name, P), e;
};
export {
  P as M
};
