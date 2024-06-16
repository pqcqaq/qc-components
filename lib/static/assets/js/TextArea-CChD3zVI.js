import { J as ce, _ as h, P as E, v as Ae, o as le, E as Ie, R as B, F as fe, h as re, c as U, S as Re, U as K, w as Te, b as N, x as Fe, u as Be, y as $e } from "./styleChecker-DxpCOgAe.js";
import { defineComponent as ne, createVNode as R, ref as $, onBeforeUnmount as ie, watchEffect as ve, computed as M, watch as te, getCurrentInstance as ge, shallowRef as _, nextTick as ue } from "vue";
import { g as me, a as pe } from "./statusUtils-CU924PZO.js";
import { R as Ee, B as Pe } from "./BaseInput-mXBF3n6E.js";
import { o as W } from "./omit-BQe9TABq.js";
import { u as _e } from "./index-C2weR3oL.js";
const k = (e) => e != null && (Array.isArray(e) ? ce(e).length : !0);
function tt(e) {
  return k(e.prefix) || k(e.suffix) || k(e.allowClear);
}
function nt(e) {
  return k(e.addonBefore) || k(e.addonAfter);
}
function Ne(e) {
  return typeof e > "u" || e === null ? "" : String(e);
}
function X(e, d, n, i) {
  if (!n)
    return;
  const a = d;
  if (d.type === "click") {
    Object.defineProperty(a, "target", {
      writable: !0
    }), Object.defineProperty(a, "currentTarget", {
      writable: !0
    });
    const m = e.cloneNode(!0);
    a.target = m, a.currentTarget = m, m.value = "", n(a);
    return;
  }
  if (i !== void 0) {
    Object.defineProperty(a, "target", {
      writable: !0
    }), Object.defineProperty(a, "currentTarget", {
      writable: !0
    }), a.target = e, a.currentTarget = e, e.value = i, n(a);
    return;
  }
  n(a);
}
function je(e, d) {
  if (!e)
    return;
  e.focus(d);
  const {
    cursor: n
  } = d || {};
  if (n) {
    const i = e.value.length;
    switch (n) {
      case "start":
        e.setSelectionRange(0, 0);
        break;
      case "end":
        e.setSelectionRange(i, i);
        break;
      default:
        e.setSelectionRange(0, i);
    }
  }
}
const Ve = () => ({
  addonBefore: E.any,
  addonAfter: E.any,
  prefix: E.any,
  suffix: E.any,
  clearIcon: E.any,
  affixWrapperClassName: String,
  groupClassName: String,
  wrapperClassName: String,
  inputClassName: String,
  allowClear: {
    type: Boolean,
    default: void 0
  }
}), Oe = () => h(h({}, Ve()), {
  value: {
    type: [String, Number, Symbol],
    default: void 0
  },
  defaultValue: {
    type: [String, Number, Symbol],
    default: void 0
  },
  inputElement: E.any,
  prefixCls: String,
  disabled: {
    type: Boolean,
    default: void 0
  },
  focused: {
    type: Boolean,
    default: void 0
  },
  triggerFocus: Function,
  readonly: {
    type: Boolean,
    default: void 0
  },
  handleReset: Function,
  hidden: {
    type: Boolean,
    default: void 0
  }
}), Me = () => h(h({}, Oe()), {
  id: String,
  placeholder: {
    type: [String, Number]
  },
  autocomplete: String,
  type: Ae("text"),
  name: String,
  size: {
    type: String
  },
  autofocus: {
    type: Boolean,
    default: void 0
  },
  lazy: {
    type: Boolean,
    default: !0
  },
  maxlength: Number,
  loading: {
    type: Boolean,
    default: void 0
  },
  bordered: {
    type: Boolean,
    default: void 0
  },
  showCount: {
    type: [Boolean, Object]
  },
  htmlSize: Number,
  onPressEnter: Function,
  onKeydown: Function,
  onKeyup: Function,
  onFocus: Function,
  onBlur: Function,
  onChange: Function,
  onInput: Function,
  "onUpdate:value": Function,
  onCompositionstart: Function,
  onCompositionend: Function,
  valueModifiers: Object,
  hidden: {
    type: Boolean,
    default: void 0
  },
  status: String
}), ke = () => W(Me(), ["wrapperClassName", "groupClassName", "inputClassName", "affixWrapperClassName"]), he = () => h(h({}, W(ke(), ["prefix", "addonBefore", "addonAfter", "suffix"])), {
  rows: Number,
  autosize: {
    type: [Boolean, Object],
    default: void 0
  },
  autoSize: {
    type: [Boolean, Object],
    default: void 0
  },
  onResize: {
    type: Function
  },
  onCompositionstart: le(),
  onCompositionend: le(),
  valueModifiers: Object
}), se = (e) => e != null && (Array.isArray(e) ? ce(e).length : !0);
function De(e) {
  return se(e.addonBefore) || se(e.addonAfter);
}
const He = ["text", "input"], Le = ne({
  compatConfig: {
    MODE: 3
  },
  name: "ClearableLabeledInput",
  inheritAttrs: !1,
  props: {
    prefixCls: String,
    inputType: E.oneOf(Ie("text", "input")),
    value: B(),
    defaultValue: B(),
    allowClear: {
      type: Boolean,
      default: void 0
    },
    element: B(),
    handleReset: Function,
    disabled: {
      type: Boolean,
      default: void 0
    },
    direction: {
      type: String
    },
    size: {
      type: String
    },
    suffix: B(),
    prefix: B(),
    addonBefore: B(),
    addonAfter: B(),
    readonly: {
      type: Boolean,
      default: void 0
    },
    focused: {
      type: Boolean,
      default: void 0
    },
    bordered: {
      type: Boolean,
      default: !0
    },
    triggerFocus: {
      type: Function
    },
    hidden: Boolean,
    status: String,
    hashId: String
  },
  setup(e, d) {
    let {
      slots: n,
      attrs: i
    } = d;
    const a = fe.useInject(), m = (o) => {
      const {
        value: f,
        disabled: l,
        readonly: v,
        handleReset: u,
        suffix: s = n.suffix
      } = e, p = !l && !v && f, b = `${o}-clear-icon`;
      return R(Re, {
        onClick: u,
        onMousedown: (A) => A.preventDefault(),
        class: U({
          [`${b}-hidden`]: !p,
          [`${b}-has-suffix`]: !!s
        }, b),
        role: "button"
      }, null);
    }, x = (o, f) => {
      const {
        value: l,
        allowClear: v,
        direction: u,
        bordered: s,
        hidden: p,
        status: b,
        addonAfter: A = n.addonAfter,
        addonBefore: T = n.addonBefore,
        hashId: F
      } = e, {
        status: C,
        hasFeedback: I
      } = a;
      if (!v)
        return re(f, {
          value: l,
          disabled: e.disabled
        });
      const P = U(`${o}-affix-wrapper`, `${o}-affix-wrapper-textarea-with-clear-btn`, me(`${o}-affix-wrapper`, pe(C, b), I), {
        [`${o}-affix-wrapper-rtl`]: u === "rtl",
        [`${o}-affix-wrapper-borderless`]: !s,
        // className will go to addon wrapper
        [`${i.class}`]: !De({
          addonAfter: A,
          addonBefore: T
        }) && i.class
      }, F);
      return R("span", {
        class: P,
        style: i.style,
        hidden: p
      }, [re(f, {
        style: null,
        value: l,
        disabled: e.disabled
      }), m(o)]);
    };
    return () => {
      var o;
      const {
        prefixCls: f,
        inputType: l,
        element: v = (o = n.element) === null || o === void 0 ? void 0 : o.call(n)
      } = e;
      return l === He[0] ? x(f, v) : null;
    };
  }
}), Ke = `
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
  pointer-events: none !important;
`, Ue = ["letter-spacing", "line-height", "padding-top", "padding-bottom", "font-family", "font-weight", "font-size", "font-variant", "text-rendering", "text-transform", "width", "text-indent", "padding-left", "padding-right", "border-width", "box-sizing", "word-break", "white-space"], J = {};
let S;
function We(e) {
  let d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  const n = e.getAttribute("id") || e.getAttribute("data-reactid") || e.getAttribute("name");
  if (d && J[n])
    return J[n];
  const i = window.getComputedStyle(e), a = i.getPropertyValue("box-sizing") || i.getPropertyValue("-moz-box-sizing") || i.getPropertyValue("-webkit-box-sizing"), m = parseFloat(i.getPropertyValue("padding-bottom")) + parseFloat(i.getPropertyValue("padding-top")), x = parseFloat(i.getPropertyValue("border-bottom-width")) + parseFloat(i.getPropertyValue("border-top-width")), f = {
    sizingStyle: Ue.map((l) => `${l}:${i.getPropertyValue(l)}`).join(";"),
    paddingSize: m,
    borderSize: x,
    boxSizing: a
  };
  return d && n && (J[n] = f), f;
}
function Ye(e) {
  let d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
  S || (S = document.createElement("textarea"), S.setAttribute("tab-index", "-1"), S.setAttribute("aria-hidden", "true"), document.body.appendChild(S)), e.getAttribute("wrap") ? S.setAttribute("wrap", e.getAttribute("wrap")) : S.removeAttribute("wrap");
  const {
    paddingSize: a,
    borderSize: m,
    boxSizing: x,
    sizingStyle: o
  } = We(e, d);
  S.setAttribute("style", `${o};${Ke}`), S.value = e.value || e.placeholder || "";
  let f, l, v, u = S.scrollHeight;
  if (x === "border-box" ? u += m : x === "content-box" && (u -= a), n !== null || i !== null) {
    S.value = " ";
    const p = S.scrollHeight - a;
    n !== null && (f = p * n, x === "border-box" && (f = f + a + m), u = Math.max(f, u)), i !== null && (l = p * i, x === "border-box" && (l = l + a + m), v = u > l ? "" : "hidden", u = Math.min(l, u));
  }
  const s = {
    height: `${u}px`,
    overflowY: v,
    resize: "none"
  };
  return f && (s.minHeight = `${f}px`), l && (s.maxHeight = `${l}px`), s;
}
const q = 0, Q = 1, ee = 2, Ze = ne({
  compatConfig: {
    MODE: 3
  },
  name: "ResizableTextArea",
  inheritAttrs: !1,
  props: he(),
  setup(e, d) {
    let {
      attrs: n,
      emit: i,
      expose: a
    } = d, m, x;
    const o = $(), f = $({}), l = $(ee);
    ie(() => {
      K.cancel(m), K.cancel(x);
    });
    const v = () => {
      try {
        if (o.value && document.activeElement === o.value.input) {
          const c = o.value.getSelectionStart(), V = o.value.getSelectionEnd(), O = o.value.getScrollTop();
          o.value.setSelectionRange(c, V), o.value.setScrollTop(O);
        }
      } catch {
      }
    }, u = $(), s = $();
    ve(() => {
      const c = e.autoSize || e.autosize;
      c ? (u.value = c.minRows, s.value = c.maxRows) : (u.value = void 0, s.value = void 0);
    });
    const p = M(() => !!(e.autoSize || e.autosize)), b = () => {
      l.value = q;
    };
    te([() => e.value, u, s, p], () => {
      p.value && b();
    }, {
      immediate: !0
    });
    const A = $();
    te([l, o], () => {
      if (o.value)
        if (l.value === q)
          l.value = Q;
        else if (l.value === Q) {
          const c = Ye(o.value.input, !1, u.value, s.value);
          l.value = ee, A.value = c;
        } else
          v();
    }, {
      immediate: !0,
      flush: "post"
    });
    const T = ge(), F = $(), C = () => {
      K.cancel(F.value);
    }, I = (c) => {
      l.value === ee && (i("resize", c), p.value && (C(), F.value = K(() => {
        b();
      })));
    };
    ie(() => {
      C();
    }), a({
      resizeTextarea: () => {
        b();
      },
      textArea: M(() => {
        var c;
        return (c = o.value) === null || c === void 0 ? void 0 : c.input;
      }),
      instance: T
    }), Te(e.autosize === void 0, "Input.TextArea", "autosize is deprecated, please use autoSize instead.");
    const j = () => {
      const {
        prefixCls: c,
        disabled: V
      } = e, O = W(e, ["prefixCls", "onPressEnter", "autoSize", "autosize", "defaultValue", "allowClear", "type", "maxlength", "valueModifiers"]), Y = U(c, n.class, {
        [`${c}-disabled`]: V
      }), D = p.value ? A.value : null, H = [n.style, f.value, D], z = h(h(h({}, O), n), {
        style: H,
        class: Y
      });
      return (l.value === q || l.value === Q) && H.push({
        overflowX: "hidden",
        overflowY: "hidden"
      }), z.autofocus || delete z.autofocus, z.rows === 0 && delete z.rows, R(Ee, {
        onResize: I,
        disabled: !p.value
      }, {
        default: () => [R(Pe, N(N({}, z), {}, {
          ref: o,
          tag: "textarea"
        }), null)]
      });
    };
    return () => j();
  }
});
function xe(e, d) {
  return [...e || ""].slice(0, d).join("");
}
function de(e, d, n, i) {
  let a = n;
  return e ? a = xe(n, i) : [...d || ""].length < n.length && [...n || ""].length > i && (a = d), a;
}
const at = ne({
  compatConfig: {
    MODE: 3
  },
  name: "ATextarea",
  inheritAttrs: !1,
  props: he(),
  setup(e, d) {
    let {
      attrs: n,
      expose: i,
      emit: a
    } = d;
    var m;
    const x = Fe(), o = fe.useInject(), f = M(() => pe(o.status, e.status)), l = _((m = e.value) !== null && m !== void 0 ? m : e.defaultValue), v = _(), u = _(""), {
      prefixCls: s,
      size: p,
      direction: b
    } = Be("input", e), [A, T] = _e(s), F = $e(), C = M(() => e.showCount === "" || e.showCount || !1), I = M(() => Number(e.maxlength) > 0), P = _(!1), j = _(), c = _(0), V = (t) => {
      P.value = !0, j.value = u.value, c.value = t.currentTarget.selectionStart, a("compositionstart", t);
    }, O = (t) => {
      var r;
      P.value = !1;
      let g = t.currentTarget.value;
      if (I.value) {
        const w = c.value >= e.maxlength + 1 || c.value === ((r = j.value) === null || r === void 0 ? void 0 : r.length);
        g = de(w, j.value, g, e.maxlength);
      }
      g !== u.value && (z(g), X(t.currentTarget, t, Z, g)), a("compositionend", t);
    }, Y = ge();
    te(() => e.value, () => {
      var t;
      "value" in Y.vnode.props, l.value = (t = e.value) !== null && t !== void 0 ? t : "";
    });
    const D = (t) => {
      var r;
      je((r = v.value) === null || r === void 0 ? void 0 : r.textArea, t);
    }, H = () => {
      var t, r;
      (r = (t = v.value) === null || t === void 0 ? void 0 : t.textArea) === null || r === void 0 || r.blur();
    }, z = (t, r) => {
      l.value !== t && (e.value === void 0 ? l.value = t : ue(() => {
        var g, w, y;
        v.value.textArea.value !== u.value && ((y = (g = v.value) === null || g === void 0 ? void 0 : (w = g.instance).update) === null || y === void 0 || y.call(w));
      }), ue(() => {
        r && r();
      }));
    }, be = (t) => {
      t.keyCode === 13 && a("pressEnter", t), a("keydown", t);
    }, ye = (t) => {
      const {
        onBlur: r
      } = e;
      r == null || r(t), x.onFieldBlur();
    }, Z = (t) => {
      a("update:value", t.target.value), a("change", t), a("input", t), x.onFieldChange();
    }, Se = (t) => {
      X(v.value.textArea, t, Z), z("", () => {
        D();
      });
    }, ae = (t) => {
      let r = t.target.value;
      if (l.value !== r) {
        if (I.value) {
          const g = t.target, w = g.selectionStart >= e.maxlength + 1 || g.selectionStart === r.length || !g.selectionStart;
          r = de(w, u.value, r, e.maxlength);
        }
        X(t.currentTarget, t, Z, r), z(r);
      }
    }, Ce = () => {
      var t, r;
      const {
        class: g
      } = n, {
        bordered: w = !0
      } = e, y = h(h(h({}, W(e, ["allowClear"])), n), {
        class: [{
          [`${s.value}-borderless`]: !w,
          [`${g}`]: g && !C.value,
          [`${s.value}-sm`]: p.value === "small",
          [`${s.value}-lg`]: p.value === "large"
        }, me(s.value, f.value), T.value],
        disabled: F.value,
        showCount: null,
        prefixCls: s.value,
        onInput: ae,
        onChange: ae,
        onBlur: ye,
        onKeydown: be,
        onCompositionstart: V,
        onCompositionend: O
      });
      return !((t = e.valueModifiers) === null || t === void 0) && t.lazy && delete y.onInput, R(Ze, N(N({}, y), {}, {
        id: (r = y == null ? void 0 : y.id) !== null && r !== void 0 ? r : x.id.value,
        ref: v,
        maxlength: e.maxlength,
        lazy: e.lazy
      }), null);
    };
    return i({
      focus: D,
      blur: H,
      resizableTextArea: v
    }), ve(() => {
      let t = Ne(l.value);
      !P.value && I.value && (e.value === null || e.value === void 0) && (t = xe(t, e.maxlength)), u.value = t;
    }), () => {
      var t;
      const {
        maxlength: r,
        bordered: g = !0,
        hidden: w
      } = e, {
        style: y,
        class: we
      } = n, ze = h(h(h({}, e), n), {
        prefixCls: s.value,
        inputType: "text",
        handleReset: Se,
        direction: b.value,
        bordered: g,
        style: C.value ? void 0 : y,
        hashId: T.value,
        disabled: (t = e.disabled) !== null && t !== void 0 ? t : F.value
      });
      let G = R(Le, N(N({}, ze), {}, {
        value: u.value,
        status: e.status
      }), {
        element: Ce
      });
      if (C.value || o.hasFeedback) {
        const oe = [...u.value].length;
        let L = "";
        typeof C.value == "object" ? L = C.value.formatter({
          value: u.value,
          count: oe,
          maxlength: r
        }) : L = `${oe}${I.value ? ` / ${r}` : ""}`, G = R("div", {
          hidden: w,
          class: U(`${s.value}-textarea`, {
            [`${s.value}-textarea-rtl`]: b.value === "rtl",
            [`${s.value}-textarea-show-count`]: C.value,
            [`${s.value}-textarea-in-form-item`]: o.isFormItemInput
          }, `${s.value}-textarea-show-count`, we, T.value),
          style: y,
          "data-count": typeof L != "object" ? L : void 0
        }, [G, o.hasFeedback && R("span", {
          class: `${s.value}-textarea-suffix`
        }, [o.feedbackIcon])]);
      }
      return A(G);
    };
  }
});
export {
  at as A,
  nt as a,
  Oe as b,
  ke as c,
  Ne as f,
  tt as h,
  Me as i,
  X as r,
  je as t
};
