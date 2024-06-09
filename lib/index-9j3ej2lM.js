import { i as oo, m as eo, _ as I, r as j, ae as U, U as to, u as V, F as ro, d as A, c as F, H as no, g as K, h as D, b as z, P as L, f as E, s as _, a as io } from "./index-Dn-f9Oyw.js";
import { provide as N, inject as X, defineComponent as W, computed as O, ref as H, createVNode as T, watch as ao, nextTick as lo } from "vue";
import { V as so } from "./Checkbox-D1pqvMZA.js";
const q = Symbol("radioGroupContextKey"), co = (o) => {
  N(q, o);
}, uo = () => X(q, void 0), J = Symbol("radioOptionTypeContextKey"), po = (o) => {
  N(J, o);
}, bo = () => X(J, void 0), go = new to("antRadioEffect", {
  "0%": {
    transform: "scale(1)",
    opacity: 0.5
  },
  "100%": {
    transform: "scale(1.6)",
    opacity: 0
  }
}), ho = (o) => {
  const {
    componentCls: r,
    antCls: n
  } = o, t = `${r}-group`;
  return {
    [t]: I(I({}, j(o)), {
      display: "inline-block",
      fontSize: 0,
      // RTL
      [`&${t}-rtl`]: {
        direction: "rtl"
      },
      [`${n}-badge ${n}-badge-count`]: {
        zIndex: 1
      },
      [`> ${n}-badge:not(:first-child) > ${n}-button-wrapper`]: {
        borderInlineStart: "none"
      }
    })
  };
}, Co = (o) => {
  const {
    componentCls: r,
    radioWrapperMarginRight: n,
    radioCheckedColor: t,
    radioSize: e,
    motionDurationSlow: d,
    motionDurationMid: s,
    motionEaseInOut: w,
    motionEaseInOutCirc: C,
    radioButtonBg: b,
    colorBorder: B,
    lineWidth: g,
    radioDotSize: f,
    colorBgContainerDisabled: x,
    colorTextDisabled: c,
    paddingXS: h,
    radioDotDisabledColor: i,
    lineType: m,
    radioDotDisabledSize: u,
    wireframe: p,
    colorWhite: y
  } = o, a = `${r}-inner`;
  return {
    [`${r}-wrapper`]: I(I({}, j(o)), {
      position: "relative",
      display: "inline-flex",
      alignItems: "baseline",
      marginInlineStart: 0,
      marginInlineEnd: n,
      cursor: "pointer",
      // RTL
      [`&${r}-wrapper-rtl`]: {
        direction: "rtl"
      },
      "&-disabled": {
        cursor: "not-allowed",
        color: o.colorTextDisabled
      },
      "&::after": {
        display: "inline-block",
        width: 0,
        overflow: "hidden",
        content: '"\\a0"'
      },
      // hashId 在 wrapper 上，只能铺平
      [`${r}-checked::after`]: {
        position: "absolute",
        insetBlockStart: 0,
        insetInlineStart: 0,
        width: "100%",
        height: "100%",
        border: `${g}px ${m} ${t}`,
        borderRadius: "50%",
        visibility: "hidden",
        animationName: go,
        animationDuration: d,
        animationTimingFunction: w,
        animationFillMode: "both",
        content: '""'
      },
      [r]: I(I({}, j(o)), {
        position: "relative",
        display: "inline-block",
        outline: "none",
        cursor: "pointer",
        alignSelf: "center"
      }),
      [`${r}-wrapper:hover &,
        &:hover ${a}`]: {
        borderColor: t
      },
      [`${r}-input:focus-visible + ${a}`]: I({}, U(o)),
      [`${r}:hover::after, ${r}-wrapper:hover &::after`]: {
        visibility: "visible"
      },
      [`${r}-inner`]: {
        "&::after": {
          boxSizing: "border-box",
          position: "absolute",
          insetBlockStart: "50%",
          insetInlineStart: "50%",
          display: "block",
          width: e,
          height: e,
          marginBlockStart: e / -2,
          marginInlineStart: e / -2,
          backgroundColor: p ? t : y,
          borderBlockStart: 0,
          borderInlineStart: 0,
          borderRadius: e,
          transform: "scale(0)",
          opacity: 0,
          transition: `all ${d} ${C}`,
          content: '""'
        },
        boxSizing: "border-box",
        position: "relative",
        insetBlockStart: 0,
        insetInlineStart: 0,
        display: "block",
        width: e,
        height: e,
        backgroundColor: b,
        borderColor: B,
        borderStyle: "solid",
        borderWidth: g,
        borderRadius: "50%",
        transition: `all ${s}`
      },
      [`${r}-input`]: {
        position: "absolute",
        insetBlockStart: 0,
        insetInlineEnd: 0,
        insetBlockEnd: 0,
        insetInlineStart: 0,
        zIndex: 1,
        cursor: "pointer",
        opacity: 0
      },
      // 选中状态
      [`${r}-checked`]: {
        [a]: {
          borderColor: t,
          backgroundColor: p ? b : t,
          "&::after": {
            transform: `scale(${f / e})`,
            opacity: 1,
            transition: `all ${d} ${C}`
          }
        }
      },
      [`${r}-disabled`]: {
        cursor: "not-allowed",
        [a]: {
          backgroundColor: x,
          borderColor: B,
          cursor: "not-allowed",
          "&::after": {
            backgroundColor: i
          }
        },
        [`${r}-input`]: {
          cursor: "not-allowed"
        },
        [`${r}-disabled + span`]: {
          color: c,
          cursor: "not-allowed"
        },
        [`&${r}-checked`]: {
          [a]: {
            "&::after": {
              transform: `scale(${u / e})`
            }
          }
        }
      },
      [`span${r} + *`]: {
        paddingInlineStart: h,
        paddingInlineEnd: h
      }
    })
  };
}, fo = (o) => {
  const {
    radioButtonColor: r,
    controlHeight: n,
    componentCls: t,
    lineWidth: e,
    lineType: d,
    colorBorder: s,
    motionDurationSlow: w,
    motionDurationMid: C,
    radioButtonPaddingHorizontal: b,
    fontSize: B,
    radioButtonBg: g,
    fontSizeLG: f,
    controlHeightLG: x,
    controlHeightSM: c,
    paddingXS: h,
    borderRadius: i,
    borderRadiusSM: m,
    borderRadiusLG: u,
    radioCheckedColor: p,
    radioButtonCheckedBg: y,
    radioButtonHoverColor: a,
    radioButtonActiveColor: v,
    radioSolidCheckedColor: R,
    colorTextDisabled: l,
    colorBgContainerDisabled: S,
    radioDisabledButtonCheckedColor: P,
    radioDisabledButtonCheckedBg: G
  } = o;
  return {
    [`${t}-button-wrapper`]: {
      position: "relative",
      display: "inline-block",
      height: n,
      margin: 0,
      paddingInline: b,
      paddingBlock: 0,
      color: r,
      fontSize: B,
      lineHeight: `${n - e * 2}px`,
      background: g,
      border: `${e}px ${d} ${s}`,
      // strange align fix for chrome but works
      // https://gw.alipayobjects.com/zos/rmsportal/VFTfKXJuogBAXcvfAUWJ.gif
      borderBlockStartWidth: e + 0.02,
      borderInlineStartWidth: 0,
      borderInlineEndWidth: e,
      cursor: "pointer",
      transition: [`color ${C}`, `background ${C}`, `border-color ${C}`, `box-shadow ${C}`].join(","),
      a: {
        color: r
      },
      [`> ${t}-button`]: {
        position: "absolute",
        insetBlockStart: 0,
        insetInlineStart: 0,
        zIndex: -1,
        width: "100%",
        height: "100%"
      },
      "&:not(:first-child)": {
        "&::before": {
          position: "absolute",
          insetBlockStart: -e,
          insetInlineStart: -e,
          display: "block",
          boxSizing: "content-box",
          width: 1,
          height: "100%",
          paddingBlock: e,
          paddingInline: 0,
          backgroundColor: s,
          transition: `background-color ${w}`,
          content: '""'
        }
      },
      "&:first-child": {
        borderInlineStart: `${e}px ${d} ${s}`,
        borderStartStartRadius: i,
        borderEndStartRadius: i
      },
      "&:last-child": {
        borderStartEndRadius: i,
        borderEndEndRadius: i
      },
      "&:first-child:last-child": {
        borderRadius: i
      },
      [`${t}-group-large &`]: {
        height: x,
        fontSize: f,
        lineHeight: `${x - e * 2}px`,
        "&:first-child": {
          borderStartStartRadius: u,
          borderEndStartRadius: u
        },
        "&:last-child": {
          borderStartEndRadius: u,
          borderEndEndRadius: u
        }
      },
      [`${t}-group-small &`]: {
        height: c,
        paddingInline: h - e,
        paddingBlock: 0,
        lineHeight: `${c - e * 2}px`,
        "&:first-child": {
          borderStartStartRadius: m,
          borderEndStartRadius: m
        },
        "&:last-child": {
          borderStartEndRadius: m,
          borderEndEndRadius: m
        }
      },
      "&:hover": {
        position: "relative",
        color: p
      },
      "&:has(:focus-visible)": I({}, U(o)),
      [`${t}-inner, input[type='checkbox'], input[type='radio']`]: {
        width: 0,
        height: 0,
        opacity: 0,
        pointerEvents: "none"
      },
      [`&-checked:not(${t}-button-wrapper-disabled)`]: {
        zIndex: 1,
        color: p,
        background: y,
        borderColor: p,
        "&::before": {
          backgroundColor: p
        },
        "&:first-child": {
          borderColor: p
        },
        "&:hover": {
          color: a,
          borderColor: a,
          "&::before": {
            backgroundColor: a
          }
        },
        "&:active": {
          color: v,
          borderColor: v,
          "&::before": {
            backgroundColor: v
          }
        }
      },
      [`${t}-group-solid &-checked:not(${t}-button-wrapper-disabled)`]: {
        color: R,
        background: p,
        borderColor: p,
        "&:hover": {
          color: R,
          background: a,
          borderColor: a
        },
        "&:active": {
          color: R,
          background: v,
          borderColor: v
        }
      },
      "&-disabled": {
        color: l,
        backgroundColor: S,
        borderColor: s,
        cursor: "not-allowed",
        "&:first-child, &:hover": {
          color: l,
          backgroundColor: S,
          borderColor: s
        }
      },
      [`&-disabled${t}-button-wrapper-checked`]: {
        color: P,
        backgroundColor: G,
        borderColor: s,
        boxShadow: "none"
      }
    }
  };
}, Q = oo("Radio", (o) => {
  const {
    padding: r,
    lineWidth: n,
    controlItemBgActiveDisabled: t,
    colorTextDisabled: e,
    colorBgContainer: d,
    fontSizeLG: s,
    controlOutline: w,
    colorPrimaryHover: C,
    colorPrimaryActive: b,
    colorText: B,
    colorPrimary: g,
    marginXS: f,
    controlOutlineWidth: x,
    colorTextLightSolid: c,
    wireframe: h
  } = o, i = `0 0 0 ${x}px ${w}`, m = i, u = s, p = 4, y = u - p * 2, a = h ? y : u - (p + n) * 2, v = g, R = B, l = C, S = b, P = r - n, $ = eo(o, {
    radioFocusShadow: i,
    radioButtonFocusShadow: m,
    radioSize: u,
    radioDotSize: a,
    radioDotDisabledSize: y,
    radioCheckedColor: v,
    radioDotDisabledColor: e,
    radioSolidCheckedColor: c,
    radioButtonBg: d,
    radioButtonCheckedBg: d,
    radioButtonColor: R,
    radioButtonHoverColor: l,
    radioButtonActiveColor: S,
    radioButtonPaddingHorizontal: P,
    radioDisabledButtonCheckedBg: t,
    radioDisabledButtonCheckedColor: e,
    radioWrapperMarginRight: f
  });
  return [ho($), Co($), fo($)];
});
var vo = function(o, r) {
  var n = {};
  for (var t in o)
    Object.prototype.hasOwnProperty.call(o, t) && r.indexOf(t) < 0 && (n[t] = o[t]);
  if (o != null && typeof Object.getOwnPropertySymbols == "function")
    for (var e = 0, t = Object.getOwnPropertySymbols(o); e < t.length; e++)
      r.indexOf(t[e]) < 0 && Object.prototype.propertyIsEnumerable.call(o, t[e]) && (n[t[e]] = o[t[e]]);
  return n;
};
const Y = () => ({
  prefixCls: String,
  checked: z(),
  disabled: z(),
  isGroup: z(),
  value: L.any,
  name: String,
  id: String,
  autofocus: z(),
  onChange: E(),
  onFocus: E(),
  onBlur: E(),
  onClick: E(),
  "onUpdate:checked": E(),
  "onUpdate:value": E()
}), k = W({
  compatConfig: {
    MODE: 3
  },
  name: "ARadio",
  inheritAttrs: !1,
  props: Y(),
  setup(o, r) {
    let {
      emit: n,
      expose: t,
      slots: e,
      attrs: d
    } = r;
    const s = V(), w = ro.useInject(), C = bo(), b = uo(), B = A(), g = O(() => {
      var l;
      return (l = h.value) !== null && l !== void 0 ? l : B.value;
    }), f = H(), {
      prefixCls: x,
      direction: c,
      disabled: h
    } = F("radio", o), i = O(() => (b == null ? void 0 : b.optionType.value) === "button" || C === "button" ? `${x.value}-button` : x.value), m = A(), [u, p] = Q(x);
    t({
      focus: () => {
        f.value.focus();
      },
      blur: () => {
        f.value.blur();
      }
    });
    const v = (l) => {
      const S = l.target.checked;
      n("update:checked", S), n("update:value", S), n("change", l), s.onFieldChange();
    }, R = (l) => {
      n("change", l), b && b.onChange && b.onChange(l);
    };
    return () => {
      var l;
      const S = b, {
        prefixCls: P,
        id: G = s.id.value
      } = o, M = vo(o, ["prefixCls", "id"]), $ = I(I({
        prefixCls: i.value,
        id: G
      }, no(M, ["onUpdate:checked", "onUpdate:value"])), {
        disabled: (l = h.value) !== null && l !== void 0 ? l : m.value
      });
      S ? ($.name = S.name.value, $.onChange = R, $.checked = o.value === S.value.value, $.disabled = g.value || S.disabled.value) : $.onChange = v;
      const Z = K({
        [`${i.value}-wrapper`]: !0,
        [`${i.value}-wrapper-checked`]: $.checked,
        [`${i.value}-wrapper-disabled`]: $.disabled,
        [`${i.value}-wrapper-rtl`]: c.value === "rtl",
        [`${i.value}-wrapper-in-form-item`]: w.isFormItemInput
      }, d.class, p.value);
      return u(T("label", D(D({}, d), {}, {
        class: Z
      }), [T(so, D(D({}, $), {}, {
        type: "radio",
        ref: f
      }), null), e.default && T("span", null, [e.default()])]));
    };
  }
}), mo = () => ({
  prefixCls: String,
  value: L.any,
  size: _(),
  options: io(),
  disabled: z(),
  name: String,
  buttonStyle: _("outline"),
  id: String,
  optionType: _("default"),
  onChange: E(),
  "onUpdate:value": E()
}), So = W({
  compatConfig: {
    MODE: 3
  },
  name: "ARadioGroup",
  inheritAttrs: !1,
  props: mo(),
  // emits: ['update:value', 'change'],
  setup(o, r) {
    let {
      slots: n,
      emit: t,
      attrs: e
    } = r;
    const d = V(), {
      prefixCls: s,
      direction: w,
      size: C
    } = F("radio", o), [b, B] = Q(s), g = H(o.value), f = H(!1);
    return ao(() => o.value, (c) => {
      g.value = c, f.value = !1;
    }), co({
      onChange: (c) => {
        const h = g.value, {
          value: i
        } = c.target;
        "value" in o || (g.value = i), !f.value && i !== h && (f.value = !0, t("update:value", i), t("change", c), d.onFieldChange()), lo(() => {
          f.value = !1;
        });
      },
      value: g,
      disabled: O(() => o.disabled),
      name: O(() => o.name),
      optionType: O(() => o.optionType)
    }), () => {
      var c;
      const {
        options: h,
        buttonStyle: i,
        id: m = d.id.value
      } = o, u = `${s.value}-group`, p = K(u, `${u}-${i}`, {
        [`${u}-${C.value}`]: C.value,
        [`${u}-rtl`]: w.value === "rtl"
      }, e.class, B.value);
      let y = null;
      return h && h.length > 0 ? y = h.map((a) => {
        if (typeof a == "string" || typeof a == "number")
          return T(k, {
            key: a,
            prefixCls: s.value,
            disabled: o.disabled,
            value: a,
            checked: g.value === a
          }, {
            default: () => [a]
          });
        const {
          value: v,
          disabled: R,
          label: l
        } = a;
        return T(k, {
          key: `radio-group-value-options-${v}`,
          prefixCls: s.value,
          disabled: R || o.disabled,
          value: v,
          checked: g.value === v
        }, {
          default: () => [l]
        });
      }) : y = (c = n.default) === null || c === void 0 ? void 0 : c.call(n), b(T("div", D(D({}, e), {}, {
        class: p,
        id: m
      }), [y]));
    };
  }
}), $o = W({
  compatConfig: {
    MODE: 3
  },
  name: "ARadioButton",
  inheritAttrs: !1,
  props: Y(),
  setup(o, r) {
    let {
      slots: n,
      attrs: t
    } = r;
    const {
      prefixCls: e
    } = F("radio", o);
    return po("button"), () => {
      var d;
      return T(k, D(D(D({}, t), o), {}, {
        prefixCls: e.value
      }), {
        default: () => [(d = n.default) === null || d === void 0 ? void 0 : d.call(n)]
      });
    };
  }
});
k.Group = So;
k.Button = $o;
k.install = function(o) {
  return o.component(k.name, k), o.component(k.Group.name, k.Group), o.component(k.Button.name, k.Button), o;
};
export {
  k as R,
  So as _
};
