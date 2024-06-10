import { defineComponent as y, computed as S, onBeforeMount as L, ref as f, watch as O, onMounted as A, nextTick as V, createVNode as h, openBlock as W, createBlock as X, unref as R, mergeProps as j } from "vue";
import { g as K, m as N, x as U, c as w, r as Q, J as G, w as J, L as q, e as Y, M as Z, k as C, u as k, W as ii, h as I, N as ni, O as ei, Q as b, P as a, K as x } from "./index-DUumM_Dw.js";
const ci = (i) => {
  const {
    componentCls: n
  } = i, e = `${n}-inner`;
  return {
    [n]: {
      [`&${n}-small`]: {
        minWidth: i.switchMinWidthSM,
        height: i.switchHeightSM,
        lineHeight: `${i.switchHeightSM}px`,
        [`${n}-inner`]: {
          paddingInlineStart: i.switchInnerMarginMaxSM,
          paddingInlineEnd: i.switchInnerMarginMinSM,
          [`${e}-checked`]: {
            marginInlineStart: `calc(-100% + ${i.switchPinSizeSM + i.switchPadding * 2}px - ${i.switchInnerMarginMaxSM * 2}px)`,
            marginInlineEnd: `calc(100% - ${i.switchPinSizeSM + i.switchPadding * 2}px + ${i.switchInnerMarginMaxSM * 2}px)`
          },
          [`${e}-unchecked`]: {
            marginTop: -i.switchHeightSM,
            marginInlineStart: 0,
            marginInlineEnd: 0
          }
        },
        [`${n}-handle`]: {
          width: i.switchPinSizeSM,
          height: i.switchPinSizeSM
        },
        [`${n}-loading-icon`]: {
          top: (i.switchPinSizeSM - i.switchLoadingIconSize) / 2,
          fontSize: i.switchLoadingIconSize
        },
        [`&${n}-checked`]: {
          [`${n}-inner`]: {
            paddingInlineStart: i.switchInnerMarginMinSM,
            paddingInlineEnd: i.switchInnerMarginMaxSM,
            [`${e}-checked`]: {
              marginInlineStart: 0,
              marginInlineEnd: 0
            },
            [`${e}-unchecked`]: {
              marginInlineStart: `calc(100% - ${i.switchPinSizeSM + i.switchPadding * 2}px + ${i.switchInnerMarginMaxSM * 2}px)`,
              marginInlineEnd: `calc(-100% + ${i.switchPinSizeSM + i.switchPadding * 2}px - ${i.switchInnerMarginMaxSM * 2}px)`
            }
          },
          [`${n}-handle`]: {
            insetInlineStart: `calc(100% - ${i.switchPinSizeSM + i.switchPadding}px)`
          }
        },
        [`&:not(${n}-disabled):active`]: {
          [`&:not(${n}-checked) ${e}`]: {
            [`${e}-unchecked`]: {
              marginInlineStart: i.marginXXS / 2,
              marginInlineEnd: -i.marginXXS / 2
            }
          },
          [`&${n}-checked ${e}`]: {
            [`${e}-checked`]: {
              marginInlineStart: -i.marginXXS / 2,
              marginInlineEnd: i.marginXXS / 2
            }
          }
        }
      }
    }
  };
}, ai = (i) => {
  const {
    componentCls: n
  } = i;
  return {
    [n]: {
      [`${n}-loading-icon${i.iconCls}`]: {
        position: "relative",
        top: (i.switchPinSize - i.fontSize) / 2,
        color: i.switchLoadingIconColor,
        verticalAlign: "top"
      },
      [`&${n}-checked ${n}-loading-icon`]: {
        color: i.switchColor
      }
    }
  };
}, ti = (i) => {
  const {
    componentCls: n
  } = i, e = `${n}-handle`;
  return {
    [n]: {
      [e]: {
        position: "absolute",
        top: i.switchPadding,
        insetInlineStart: i.switchPadding,
        width: i.switchPinSize,
        height: i.switchPinSize,
        transition: `all ${i.switchDuration} ease-in-out`,
        "&::before": {
          position: "absolute",
          top: 0,
          insetInlineEnd: 0,
          bottom: 0,
          insetInlineStart: 0,
          backgroundColor: i.colorWhite,
          borderRadius: i.switchPinSize / 2,
          boxShadow: i.switchHandleShadow,
          transition: `all ${i.switchDuration} ease-in-out`,
          content: '""'
        }
      },
      [`&${n}-checked ${e}`]: {
        insetInlineStart: `calc(100% - ${i.switchPinSize + i.switchPadding}px)`
      },
      [`&:not(${n}-disabled):active`]: {
        [`${e}::before`]: {
          insetInlineEnd: i.switchHandleActiveInset,
          insetInlineStart: 0
        },
        [`&${n}-checked ${e}::before`]: {
          insetInlineEnd: 0,
          insetInlineStart: i.switchHandleActiveInset
        }
      }
    }
  };
}, li = (i) => {
  const {
    componentCls: n
  } = i, e = `${n}-inner`;
  return {
    [n]: {
      [e]: {
        display: "block",
        overflow: "hidden",
        borderRadius: 100,
        height: "100%",
        paddingInlineStart: i.switchInnerMarginMax,
        paddingInlineEnd: i.switchInnerMarginMin,
        transition: `padding-inline-start ${i.switchDuration} ease-in-out, padding-inline-end ${i.switchDuration} ease-in-out`,
        [`${e}-checked, ${e}-unchecked`]: {
          display: "block",
          color: i.colorTextLightSolid,
          fontSize: i.fontSizeSM,
          transition: `margin-inline-start ${i.switchDuration} ease-in-out, margin-inline-end ${i.switchDuration} ease-in-out`,
          pointerEvents: "none"
        },
        [`${e}-checked`]: {
          marginInlineStart: `calc(-100% + ${i.switchPinSize + i.switchPadding * 2}px - ${i.switchInnerMarginMax * 2}px)`,
          marginInlineEnd: `calc(100% - ${i.switchPinSize + i.switchPadding * 2}px + ${i.switchInnerMarginMax * 2}px)`
        },
        [`${e}-unchecked`]: {
          marginTop: -i.switchHeight,
          marginInlineStart: 0,
          marginInlineEnd: 0
        }
      },
      [`&${n}-checked ${e}`]: {
        paddingInlineStart: i.switchInnerMarginMin,
        paddingInlineEnd: i.switchInnerMarginMax,
        [`${e}-checked`]: {
          marginInlineStart: 0,
          marginInlineEnd: 0
        },
        [`${e}-unchecked`]: {
          marginInlineStart: `calc(100% - ${i.switchPinSize + i.switchPadding * 2}px + ${i.switchInnerMarginMax * 2}px)`,
          marginInlineEnd: `calc(-100% + ${i.switchPinSize + i.switchPadding * 2}px - ${i.switchInnerMarginMax * 2}px)`
        }
      },
      [`&:not(${n}-disabled):active`]: {
        [`&:not(${n}-checked) ${e}`]: {
          [`${e}-unchecked`]: {
            marginInlineStart: i.switchPadding * 2,
            marginInlineEnd: -i.switchPadding * 2
          }
        },
        [`&${n}-checked ${e}`]: {
          [`${e}-checked`]: {
            marginInlineStart: -i.switchPadding * 2,
            marginInlineEnd: i.switchPadding * 2
          }
        }
      }
    }
  };
}, di = (i) => {
  const {
    componentCls: n
  } = i;
  return {
    [n]: w(w(w(w({}, Q(i)), {
      position: "relative",
      display: "inline-block",
      boxSizing: "border-box",
      minWidth: i.switchMinWidth,
      height: i.switchHeight,
      lineHeight: `${i.switchHeight}px`,
      verticalAlign: "middle",
      background: i.colorTextQuaternary,
      border: "0",
      borderRadius: 100,
      cursor: "pointer",
      transition: `all ${i.motionDurationMid}`,
      userSelect: "none",
      [`&:hover:not(${n}-disabled)`]: {
        background: i.colorTextTertiary
      }
    }), G(i)), {
      [`&${n}-checked`]: {
        background: i.switchColor,
        [`&:hover:not(${n}-disabled)`]: {
          background: i.colorPrimaryHover
        }
      },
      [`&${n}-loading, &${n}-disabled`]: {
        cursor: "not-allowed",
        opacity: i.switchDisabledOpacity,
        "*": {
          boxShadow: "none",
          cursor: "not-allowed"
        }
      },
      // rtl style
      [`&${n}-rtl`]: {
        direction: "rtl"
      }
    })
  };
}, si = K("Switch", (i) => {
  const n = i.fontSize * i.lineHeight, e = i.controlHeight / 2, l = 2, r = n - l * 2, t = e - l * 2, s = N(i, {
    switchMinWidth: r * 2 + l * 4,
    switchHeight: n,
    switchDuration: i.motionDurationMid,
    switchColor: i.colorPrimary,
    switchDisabledOpacity: i.opacityLoading,
    switchInnerMarginMin: r / 2,
    switchInnerMarginMax: r + l + l * 2,
    switchPadding: l,
    switchPinSize: r,
    switchBg: i.colorBgContainer,
    switchMinWidthSM: t * 2 + l * 2,
    switchHeightSM: e,
    switchInnerMarginMinSM: t / 2,
    switchInnerMarginMaxSM: t + l + l * 2,
    switchPinSizeSM: t,
    switchHandleShadow: `0 2px 4px 0 ${new U("#00230b").setAlpha(0.2).toRgbString()}`,
    switchLoadingIconSize: i.fontSizeIcon * 0.75,
    switchLoadingIconColor: `rgba(0, 0, 0, ${i.opacityLoading})`,
    switchHandleActiveInset: "-30%"
  });
  return [
    di(s),
    // inner style
    li(s),
    // handle style
    ti(s),
    // loading style
    ai(s),
    // small style
    ci(s)
  ];
}), ri = q("small", "default"), oi = () => ({
  id: String,
  prefixCls: String,
  size: a.oneOf(ri),
  disabled: {
    type: Boolean,
    default: void 0
  },
  checkedChildren: a.any,
  unCheckedChildren: a.any,
  tabindex: a.oneOfType([a.string, a.number]),
  autofocus: {
    type: Boolean,
    default: void 0
  },
  loading: {
    type: Boolean,
    default: void 0
  },
  checked: a.oneOfType([a.string, a.number, a.looseBool]),
  checkedValue: a.oneOfType([a.string, a.number, a.looseBool]).def(!0),
  unCheckedValue: a.oneOfType([a.string, a.number, a.looseBool]).def(!1),
  onChange: {
    type: Function
  },
  onClick: {
    type: Function
  },
  onKeydown: {
    type: Function
  },
  onMouseup: {
    type: Function
  },
  "onUpdate:checked": {
    type: Function
  },
  onBlur: Function,
  onFocus: Function
}), hi = y({
  compatConfig: {
    MODE: 3
  },
  name: "ASwitch",
  __ANT_SWITCH: !0,
  inheritAttrs: !1,
  props: oi(),
  slots: Object,
  // emits: ['update:checked', 'mouseup', 'change', 'click', 'keydown', 'blur'],
  setup(i, n) {
    let {
      attrs: e,
      slots: l,
      expose: r,
      emit: t
    } = n;
    const s = Y(), $ = Z(), g = S(() => {
      var c;
      return (c = i.disabled) !== null && c !== void 0 ? c : $.value;
    });
    L(() => {
      C(!("defaultChecked" in e), "Switch", "'defaultChecked' is deprecated, please use 'v-model:checked'"), C(!("value" in e), "Switch", "`value` is not validate prop, do you mean `checked`?");
    });
    const m = f(i.checked !== void 0 ? i.checked : e.defaultChecked), M = S(() => m.value === i.checkedValue);
    O(() => i.checked, () => {
      m.value = i.checked;
    });
    const {
      prefixCls: d,
      direction: P,
      size: z
    } = k("switch", i), [H, E] = si(d), u = f(), v = () => {
      var c;
      (c = u.value) === null || c === void 0 || c.focus();
    };
    r({
      focus: v,
      blur: () => {
        var c;
        (c = u.value) === null || c === void 0 || c.blur();
      }
    }), A(() => {
      V(() => {
        i.autofocus && !g.value && u.value.focus();
      });
    });
    const p = (c, o) => {
      g.value || (t("update:checked", c), t("change", c, o), s.onFieldChange());
    }, T = (c) => {
      t("blur", c);
    }, B = (c) => {
      v();
      const o = M.value ? i.unCheckedValue : i.checkedValue;
      p(o, c), t("click", o, c);
    }, D = (c) => {
      c.keyCode === x.LEFT ? p(i.unCheckedValue, c) : c.keyCode === x.RIGHT && p(i.checkedValue, c), t("keydown", c);
    }, _ = (c) => {
      var o;
      (o = u.value) === null || o === void 0 || o.blur(), t("mouseup", c);
    }, F = S(() => ({
      [`${d.value}-small`]: z.value === "small",
      [`${d.value}-loading`]: i.loading,
      [`${d.value}-checked`]: M.value,
      [`${d.value}-disabled`]: g.value,
      [d.value]: !0,
      [`${d.value}-rtl`]: P.value === "rtl",
      [E.value]: !0
    }));
    return () => {
      var c;
      return H(h(ii, null, {
        default: () => [h("button", I(I(I({}, ni(i, ["prefixCls", "checkedChildren", "unCheckedChildren", "checked", "autofocus", "checkedValue", "unCheckedValue", "id", "onChange", "onUpdate:checked"])), e), {}, {
          id: (c = i.id) !== null && c !== void 0 ? c : s.id.value,
          onKeydown: D,
          onClick: B,
          onBlur: T,
          onMouseup: _,
          type: "button",
          role: "switch",
          "aria-checked": m.value,
          disabled: g.value || i.loading,
          class: [e.class, F.value],
          ref: u
        }), [h("div", {
          class: `${d.value}-handle`
        }, [i.loading ? h(ei, {
          class: `${d.value}-loading-icon`
        }, null) : null]), h("span", {
          class: `${d.value}-inner`
        }, [h("span", {
          class: `${d.value}-inner-checked`
        }, [b(l, i, "checkedChildren")]), h("span", {
          class: `${d.value}-inner-unchecked`
        }, [b(l, i, "unCheckedChildren")])])])]
      }));
    };
  }
}), ui = J(hi), $i = /* @__PURE__ */ y({
  __name: "CustomSwitch",
  props: {
    value: { type: Boolean }
  },
  emits: ["update:value"],
  setup(i, { emit: n }) {
    const e = i, l = n, r = S({
      get() {
        return e.value;
      },
      set(t) {
        l("update:value", t);
      }
    });
    return (t, s) => (W(), X(R(ui), j({
      checked: r.value,
      "onUpdate:checked": s[0] || (s[0] = ($) => r.value = $)
    }, t.$attrs), null, 16, ["checked"]));
  }
});
export {
  $i as default
};
