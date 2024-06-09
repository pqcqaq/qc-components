import { a3 as ce, _ as x, P as $, s as ze, H as Y, au as le, G as Ae, R as F, F as fe, aj as re, g as W, V as Ie, y as K, w as Re, h as N, u as Te, c as Fe, d as Be } from "./index-DQQY7Ife.js";
import { defineComponent as ne, createVNode as I, ref as B, onBeforeUnmount as ie, watchEffect as ve, computed as k, watch as te, getCurrentInstance as ge, shallowRef as j, nextTick as ue } from "vue";
import { a as me, g as pe } from "./statusUtils-B6e7x_W2.js";
import { R as $e } from "./index-BwxmUOye.js";
import { B as Ee } from "./BaseInput-CCF_bCIG.js";
import { u as Pe } from "./index-CpomllGs.js";
const H = (e) => e != null && (Array.isArray(e) ? ce(e).length : !0);
function et(e) {
  return H(e.prefix) || H(e.suffix) || H(e.allowClear);
}
function tt(e) {
  return H(e.addonBefore) || H(e.addonAfter);
}
function _e(e) {
  return typeof e > "u" || e === null ? "" : String(e);
}
function X(e, d, n, i) {
  if (!n)
    return;
  const o = d;
  if (d.type === "click") {
    Object.defineProperty(o, "target", {
      writable: !0
    }), Object.defineProperty(o, "currentTarget", {
      writable: !0
    });
    const g = e.cloneNode(!0);
    o.target = g, o.currentTarget = g, g.value = "", n(o);
    return;
  }
  if (i !== void 0) {
    Object.defineProperty(o, "target", {
      writable: !0
    }), Object.defineProperty(o, "currentTarget", {
      writable: !0
    }), o.target = e, o.currentTarget = e, e.value = i, n(o);
    return;
  }
  n(o);
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
const Ne = () => ({
  addonBefore: $.any,
  addonAfter: $.any,
  prefix: $.any,
  suffix: $.any,
  clearIcon: $.any,
  affixWrapperClassName: String,
  groupClassName: String,
  wrapperClassName: String,
  inputClassName: String,
  allowClear: {
    type: Boolean,
    default: void 0
  }
}), Ve = () => x(x({}, Ne()), {
  value: {
    type: [String, Number, Symbol],
    default: void 0
  },
  defaultValue: {
    type: [String, Number, Symbol],
    default: void 0
  },
  inputElement: $.any,
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
}), Oe = () => x(x({}, Ve()), {
  id: String,
  placeholder: {
    type: [String, Number]
  },
  autocomplete: String,
  type: ze("text"),
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
}), Me = () => Y(Oe(), ["wrapperClassName", "groupClassName", "inputClassName", "affixWrapperClassName"]), he = () => x(x({}, Y(Me(), ["prefix", "addonBefore", "addonAfter", "suffix"])), {
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
function ke(e) {
  return se(e.addonBefore) || se(e.addonAfter);
}
const He = ["text", "input"], De = ne({
  compatConfig: {
    MODE: 3
  },
  name: "ClearableLabeledInput",
  inheritAttrs: !1,
  props: {
    prefixCls: String,
    inputType: $.oneOf(Ae("text", "input")),
    value: F(),
    defaultValue: F(),
    allowClear: {
      type: Boolean,
      default: void 0
    },
    element: F(),
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
    suffix: F(),
    prefix: F(),
    addonBefore: F(),
    addonAfter: F(),
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
    const o = fe.useInject(), g = (u) => {
      const {
        value: s,
        disabled: a,
        readonly: c,
        handleReset: r,
        suffix: p = n.suffix
      } = e, h = !a && !c && s, S = `${u}-clear-icon`;
      return I(Ie, {
        onClick: r,
        onMousedown: (w) => w.preventDefault(),
        class: W({
          [`${S}-hidden`]: !h,
          [`${S}-has-suffix`]: !!p
        }, S),
        role: "button"
      }, null);
    }, m = (u, s) => {
      const {
        value: a,
        allowClear: c,
        direction: r,
        bordered: p,
        hidden: h,
        status: S,
        addonAfter: w = n.addonAfter,
        addonBefore: E = n.addonBefore,
        hashId: C
      } = e, {
        status: A,
        hasFeedback: R
      } = o;
      if (!c)
        return re(s, {
          value: a,
          disabled: e.disabled
        });
      const P = W(`${u}-affix-wrapper`, `${u}-affix-wrapper-textarea-with-clear-btn`, me(`${u}-affix-wrapper`, pe(A, S), R), {
        [`${u}-affix-wrapper-rtl`]: r === "rtl",
        [`${u}-affix-wrapper-borderless`]: !p,
        // className will go to addon wrapper
        [`${i.class}`]: !ke({
          addonAfter: w,
          addonBefore: E
        }) && i.class
      }, C);
      return I("span", {
        class: P,
        style: i.style,
        hidden: h
      }, [re(s, {
        style: null,
        value: a,
        disabled: e.disabled
      }), g(u)]);
    };
    return () => {
      var u;
      const {
        prefixCls: s,
        inputType: a,
        element: c = (u = n.element) === null || u === void 0 ? void 0 : u.call(n)
      } = e;
      return a === He[0] ? m(s, c) : null;
    };
  }
}), Le = `
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
`, Ke = ["letter-spacing", "line-height", "padding-top", "padding-bottom", "font-family", "font-weight", "font-size", "font-variant", "text-rendering", "text-transform", "width", "text-indent", "padding-left", "padding-right", "border-width", "box-sizing", "word-break", "white-space"], q = {};
let y;
function We(e) {
  let d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  const n = e.getAttribute("id") || e.getAttribute("data-reactid") || e.getAttribute("name");
  if (d && q[n])
    return q[n];
  const i = window.getComputedStyle(e), o = i.getPropertyValue("box-sizing") || i.getPropertyValue("-moz-box-sizing") || i.getPropertyValue("-webkit-box-sizing"), g = parseFloat(i.getPropertyValue("padding-bottom")) + parseFloat(i.getPropertyValue("padding-top")), m = parseFloat(i.getPropertyValue("border-bottom-width")) + parseFloat(i.getPropertyValue("border-top-width")), s = {
    sizingStyle: Ke.map((a) => `${a}:${i.getPropertyValue(a)}`).join(";"),
    paddingSize: g,
    borderSize: m,
    boxSizing: o
  };
  return d && n && (q[n] = s), s;
}
function Ye(e) {
  let d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
  y || (y = document.createElement("textarea"), y.setAttribute("tab-index", "-1"), y.setAttribute("aria-hidden", "true"), document.body.appendChild(y)), e.getAttribute("wrap") ? y.setAttribute("wrap", e.getAttribute("wrap")) : y.removeAttribute("wrap");
  const {
    paddingSize: o,
    borderSize: g,
    boxSizing: m,
    sizingStyle: u
  } = We(e, d);
  y.setAttribute("style", `${u};${Le}`), y.value = e.value || e.placeholder || "";
  let s, a, c, r = y.scrollHeight;
  if (m === "border-box" ? r += g : m === "content-box" && (r -= o), n !== null || i !== null) {
    y.value = " ";
    const h = y.scrollHeight - o;
    n !== null && (s = h * n, m === "border-box" && (s = s + o + g), r = Math.max(s, r)), i !== null && (a = h * i, m === "border-box" && (a = a + o + g), c = r > a ? "" : "hidden", r = Math.min(a, r));
  }
  const p = {
    height: `${r}px`,
    overflowY: c,
    resize: "none"
  };
  return s && (p.minHeight = `${s}px`), a && (p.maxHeight = `${a}px`), p;
}
const J = 0, Q = 1, ee = 2, Ze = ne({
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
      expose: o
    } = d, g, m;
    const u = B(), s = B({}), a = B(ee);
    ie(() => {
      K.cancel(g), K.cancel(m);
    });
    const c = () => {
      try {
        if (u.value && document.activeElement === u.value.input) {
          const f = u.value.getSelectionStart(), O = u.value.getSelectionEnd(), M = u.value.getScrollTop();
          u.value.setSelectionRange(f, O), u.value.setScrollTop(M);
        }
      } catch {
      }
    }, r = B(), p = B();
    ve(() => {
      const f = e.autoSize || e.autosize;
      f ? (r.value = f.minRows, p.value = f.maxRows) : (r.value = void 0, p.value = void 0);
    });
    const h = k(() => !!(e.autoSize || e.autosize)), S = () => {
      a.value = J;
    };
    te([() => e.value, r, p, h], () => {
      h.value && S();
    }, {
      immediate: !0
    });
    const w = B();
    te([a, u], () => {
      if (u.value)
        if (a.value === J)
          a.value = Q;
        else if (a.value === Q) {
          const f = Ye(u.value.input, !1, r.value, p.value);
          a.value = ee, w.value = f;
        } else
          c();
    }, {
      immediate: !0,
      flush: "post"
    });
    const E = ge(), C = B(), A = () => {
      K.cancel(C.value);
    }, R = (f) => {
      a.value === ee && (i("resize", f), h.value && (A(), C.value = K(() => {
        S();
      })));
    };
    ie(() => {
      A();
    }), o({
      resizeTextarea: () => {
        S();
      },
      textArea: k(() => {
        var f;
        return (f = u.value) === null || f === void 0 ? void 0 : f.input;
      }),
      instance: E
    }), Re(e.autosize === void 0, "Input.TextArea", "autosize is deprecated, please use autoSize instead.");
    const V = () => {
      const {
        prefixCls: f,
        disabled: O
      } = e, M = Y(e, ["prefixCls", "onPressEnter", "autoSize", "autosize", "defaultValue", "allowClear", "type", "maxlength", "valueModifiers"]), D = W(f, n.class, {
        [`${f}-disabled`]: O
      }), Z = h.value ? w.value : null, _ = [n.style, s.value, Z], T = x(x(x({}, M), n), {
        style: _,
        class: D
      });
      return (a.value === J || a.value === Q) && _.push({
        overflowX: "hidden",
        overflowY: "hidden"
      }), T.autofocus || delete T.autofocus, T.rows === 0 && delete T.rows, I($e, {
        onResize: R,
        disabled: !h.value
      }, {
        default: () => [I(Ee, N(N({}, T), {}, {
          ref: u,
          tag: "textarea"
        }), null)]
      });
    };
    return () => V();
  }
});
function xe(e, d) {
  return [...e || ""].slice(0, d).join("");
}
function de(e, d, n, i) {
  let o = n;
  return e ? o = xe(n, i) : [...d || ""].length < n.length && [...n || ""].length > i && (o = d), o;
}
const nt = ne({
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
      emit: o
    } = d;
    const g = Te(), m = fe.useInject(), u = k(() => pe(m.status, e.status)), s = j(e.value === void 0 ? e.defaultValue : e.value), a = j(), c = j(""), {
      prefixCls: r,
      size: p,
      direction: h
    } = Fe("input", e), [S, w] = Pe(r), E = Be(), C = k(() => e.showCount === "" || e.showCount || !1), A = k(() => Number(e.maxlength) > 0), R = j(!1), P = j(), V = j(0), f = (t) => {
      R.value = !0, P.value = c.value, V.value = t.currentTarget.selectionStart, o("compositionstart", t);
    }, O = (t) => {
      var l;
      R.value = !1;
      let v = t.currentTarget.value;
      if (A.value) {
        const z = V.value >= e.maxlength + 1 || V.value === ((l = P.value) === null || l === void 0 ? void 0 : l.length);
        v = de(z, P.value, v, e.maxlength);
      }
      v !== c.value && (_(v), X(t.currentTarget, t, G, v)), o("compositionend", t);
    }, M = ge();
    te(() => e.value, () => {
      var t;
      "value" in M.vnode.props, s.value = (t = e.value) !== null && t !== void 0 ? t : "";
    });
    const D = (t) => {
      var l;
      je((l = a.value) === null || l === void 0 ? void 0 : l.textArea, t);
    }, Z = () => {
      var t, l;
      (l = (t = a.value) === null || t === void 0 ? void 0 : t.textArea) === null || l === void 0 || l.blur();
    }, _ = (t, l) => {
      s.value !== t && (e.value === void 0 ? s.value = t : ue(() => {
        var v, z, b;
        a.value.textArea.value !== c.value && ((b = (v = a.value) === null || v === void 0 ? void 0 : (z = v.instance).update) === null || b === void 0 || b.call(z));
      }), ue(() => {
        l && l();
      }));
    }, T = (t) => {
      t.keyCode === 13 && o("pressEnter", t), o("keydown", t);
    }, be = (t) => {
      const {
        onBlur: l
      } = e;
      l == null || l(t), g.onFieldBlur();
    }, G = (t) => {
      o("update:value", t.target.value), o("change", t), o("input", t), g.onFieldChange();
    }, ye = (t) => {
      X(a.value.textArea, t, G), _("", () => {
        D();
      });
    }, ae = (t) => {
      let l = t.target.value;
      if (s.value !== l) {
        if (A.value) {
          const v = t.target, z = v.selectionStart >= e.maxlength + 1 || v.selectionStart === l.length || !v.selectionStart;
          l = de(z, c.value, l, e.maxlength);
        }
        X(t.currentTarget, t, G, l), _(l);
      }
    }, Se = () => {
      var t, l;
      const {
        class: v
      } = n, {
        bordered: z = !0
      } = e, b = x(x(x({}, Y(e, ["allowClear"])), n), {
        class: [{
          [`${r.value}-borderless`]: !z,
          [`${v}`]: v && !C.value,
          [`${r.value}-sm`]: p.value === "small",
          [`${r.value}-lg`]: p.value === "large"
        }, me(r.value, u.value), w.value],
        disabled: E.value,
        showCount: null,
        prefixCls: r.value,
        onInput: ae,
        onChange: ae,
        onBlur: be,
        onKeydown: T,
        onCompositionstart: f,
        onCompositionend: O
      });
      return !((t = e.valueModifiers) === null || t === void 0) && t.lazy && delete b.onInput, I(Ze, N(N({}, b), {}, {
        id: (l = b == null ? void 0 : b.id) !== null && l !== void 0 ? l : g.id.value,
        ref: a,
        maxlength: e.maxlength,
        lazy: e.lazy
      }), null);
    };
    return i({
      focus: D,
      blur: Z,
      resizableTextArea: a
    }), ve(() => {
      let t = _e(s.value);
      !R.value && A.value && (e.value === null || e.value === void 0) && (t = xe(t, e.maxlength)), c.value = t;
    }), () => {
      var t;
      const {
        maxlength: l,
        bordered: v = !0,
        hidden: z
      } = e, {
        style: b,
        class: Ce
      } = n, we = x(x(x({}, e), n), {
        prefixCls: r.value,
        inputType: "text",
        handleReset: ye,
        direction: h.value,
        bordered: v,
        style: C.value ? void 0 : b,
        hashId: w.value,
        disabled: (t = e.disabled) !== null && t !== void 0 ? t : E.value
      });
      let U = I(De, N(N({}, we), {}, {
        value: c.value,
        status: e.status
      }), {
        element: Se
      });
      if (C.value || m.hasFeedback) {
        const oe = [...c.value].length;
        let L = "";
        typeof C.value == "object" ? L = C.value.formatter({
          value: c.value,
          count: oe,
          maxlength: l
        }) : L = `${oe}${A.value ? ` / ${l}` : ""}`, U = I("div", {
          hidden: z,
          class: W(`${r.value}-textarea`, {
            [`${r.value}-textarea-rtl`]: h.value === "rtl",
            [`${r.value}-textarea-show-count`]: C.value,
            [`${r.value}-textarea-in-form-item`]: m.isFormItemInput
          }, `${r.value}-textarea-show-count`, Ce, w.value),
          style: b,
          "data-count": typeof L != "object" ? L : void 0
        }, [U, m.hasFeedback && I("span", {
          class: `${r.value}-textarea-suffix`
        }, [m.feedbackIcon])]);
      }
      return S(U);
    };
  }
});
export {
  nt as A,
  tt as a,
  Ve as b,
  Me as c,
  _e as f,
  et as h,
  Oe as i,
  X as r,
  je as t
};
