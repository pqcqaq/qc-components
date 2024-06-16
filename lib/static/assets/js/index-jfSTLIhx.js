import { I as nt, q as R, c as j, b as A, a2 as rt, U as Ae, _ as v, t as B, a3 as ee, v as ye, g as at, d as it, r as Ve, a4 as lt, x as ot, F as st, u as ut, V as dt, y as ct, X as Te, Y as Fe, h as ft, P as be } from "./styleChecker-DxpCOgAe.js";
import { createVNode as h, defineComponent as Ie, ref as He, onBeforeUnmount as Ge, shallowRef as _, computed as W, watch as te } from "vue";
import { i as pt, D as mt } from "./DownOutlined-DdgJVMY8.js";
import { K as ie } from "./KeyCode-n3eOOGSl.js";
import { o as gt } from "./omit-BQe9TABq.js";
import { a as vt, g as Se } from "./statusUtils-CU924PZO.js";
import { i as ht, g as Le, a as Ue, e as qe, c as bt, b as St, f as $t, d as Nt } from "./index-C2weR3oL.js";
var yt = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z" } }] }, name: "up", theme: "outlined" };
function Be(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(i) {
      return Object.getOwnPropertyDescriptor(n, i).enumerable;
    }))), r.forEach(function(i) {
      wt(e, i, n[i]);
    });
  }
  return e;
}
function wt(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ee = function(t, n) {
  var r = Be({}, t, n.attrs);
  return h(nt, Be({}, r, {
    icon: yt
  }), null);
};
Ee.displayName = "UpOutlined";
Ee.inheritAttrs = !1;
function we() {
  return typeof BigInt == "function";
}
function ne(e) {
  let t = e.trim(), n = t.startsWith("-");
  n && (t = t.slice(1)), t = t.replace(/(\.\d*[^0])0*$/, "$1").replace(/\.0*$/, "").replace(/^0+/, ""), t.startsWith(".") && (t = `0${t}`);
  const r = t || "0", i = r.split("."), o = i[0] || "0", d = i[1] || "0";
  o === "0" && d === "0" && (n = !1);
  const c = n ? "-" : "";
  return {
    negative: n,
    negativeStr: c,
    trimStr: r,
    integerStr: o,
    decimalStr: d,
    fullStr: `${c}${r}`
  };
}
function Ce(e) {
  const t = String(e);
  return !Number.isNaN(Number(t)) && t.includes("e");
}
function re(e) {
  const t = String(e);
  if (Ce(e)) {
    let n = Number(t.slice(t.indexOf("e-") + 2));
    const r = t.match(/\.(\d+)/);
    return r != null && r[1] && (n += r[1].length), n;
  }
  return t.includes(".") && Oe(t) ? t.length - t.indexOf(".") - 1 : 0;
}
function Pe(e) {
  let t = String(e);
  if (Ce(e)) {
    if (e > Number.MAX_SAFE_INTEGER)
      return String(we() ? BigInt(e).toString() : Number.MAX_SAFE_INTEGER);
    if (e < Number.MIN_SAFE_INTEGER)
      return String(we() ? BigInt(e).toString() : Number.MIN_SAFE_INTEGER);
    t = e.toFixed(re(t));
  }
  return ne(t).fullStr;
}
function Oe(e) {
  return typeof e == "number" ? !Number.isNaN(e) : e ? (
    // Normal type: 11.28
    /^\s*-?\d+(\.\d+)?\s*$/.test(e) || // Pre-number: 1.
    /^\s*-?\d+\.\s*$/.test(e) || // Post-number: .1
    /^\s*-?\.\d+\s*$/.test(e)
  ) : !1;
}
function ke(e) {
  return !e && e !== 0 && !Number.isNaN(e) || !String(e).trim();
}
class z {
  constructor(t) {
    if (this.origin = "", ke(t)) {
      this.empty = !0;
      return;
    }
    this.origin = String(t), this.number = Number(t);
  }
  negate() {
    return new z(-this.toNumber());
  }
  add(t) {
    if (this.isInvalidate())
      return new z(t);
    const n = Number(t);
    if (Number.isNaN(n))
      return this;
    const r = this.number + n;
    if (r > Number.MAX_SAFE_INTEGER)
      return new z(Number.MAX_SAFE_INTEGER);
    if (r < Number.MIN_SAFE_INTEGER)
      return new z(Number.MIN_SAFE_INTEGER);
    const i = Math.max(re(this.number), re(n));
    return new z(r.toFixed(i));
  }
  isEmpty() {
    return this.empty;
  }
  isNaN() {
    return Number.isNaN(this.number);
  }
  isInvalidate() {
    return this.isEmpty() || this.isNaN();
  }
  equals(t) {
    return this.toNumber() === (t == null ? void 0 : t.toNumber());
  }
  lessEquals(t) {
    return this.add(t.negate().toString()).toNumber() <= 0;
  }
  toNumber() {
    return this.number;
  }
  toString() {
    return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0) ? this.isInvalidate() ? "" : Pe(this.number) : this.origin;
  }
}
class q {
  constructor(t) {
    if (this.origin = "", ke(t)) {
      this.empty = !0;
      return;
    }
    if (this.origin = String(t), t === "-" || Number.isNaN(t)) {
      this.nan = !0;
      return;
    }
    let n = t;
    if (Ce(n) && (n = Number(n)), n = typeof n == "string" ? n : Pe(n), Oe(n)) {
      const r = ne(n);
      this.negative = r.negative;
      const i = r.trimStr.split(".");
      this.integer = BigInt(i[0]);
      const o = i[1] || "0";
      this.decimal = BigInt(o), this.decimalLen = o.length;
    } else
      this.nan = !0;
  }
  getMark() {
    return this.negative ? "-" : "";
  }
  getIntegerStr() {
    return this.integer.toString();
  }
  getDecimalStr() {
    return this.decimal.toString().padStart(this.decimalLen, "0");
  }
  /**
   * Align BigIntDecimal with same decimal length. e.g. 12.3 + 5 = 1230000
   * This is used for add function only.
   */
  alignDecimal(t) {
    const n = `${this.getMark()}${this.getIntegerStr()}${this.getDecimalStr().padEnd(t, "0")}`;
    return BigInt(n);
  }
  negate() {
    const t = new q(this.toString());
    return t.negative = !t.negative, t;
  }
  add(t) {
    if (this.isInvalidate())
      return new q(t);
    const n = new q(t);
    if (n.isInvalidate())
      return this;
    const r = Math.max(this.getDecimalStr().length, n.getDecimalStr().length), i = this.alignDecimal(r), o = n.alignDecimal(r), d = (i + o).toString(), {
      negativeStr: c,
      trimStr: m
    } = ne(d), f = `${c}${m.padStart(r + 1, "0")}`;
    return new q(`${f.slice(0, -r)}.${f.slice(-r)}`);
  }
  isEmpty() {
    return this.empty;
  }
  isNaN() {
    return this.nan;
  }
  isInvalidate() {
    return this.isEmpty() || this.isNaN();
  }
  equals(t) {
    return this.toString() === (t == null ? void 0 : t.toString());
  }
  lessEquals(t) {
    return this.add(t.negate().toString()).toNumber() <= 0;
  }
  toNumber() {
    return this.isNaN() ? NaN : Number(this.toString());
  }
  toString() {
    return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0) ? this.isInvalidate() ? "" : ne(`${this.getMark()}${this.getIntegerStr()}.${this.getDecimalStr()}`).fullStr : this.origin;
  }
}
function O(e) {
  return we() ? new q(e) : new z(e);
}
function xe(e, t, n) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if (e === "")
    return "";
  const {
    negativeStr: i,
    integerStr: o,
    decimalStr: d
  } = ne(e), c = `${t}${d}`, m = `${i}${o}`;
  if (n >= 0) {
    const f = Number(d[n]);
    if (f >= 5 && !r) {
      const s = O(e).add(`${i}0.${"0".repeat(n)}${10 - f}`);
      return xe(s.toString(), t, n, r);
    }
    return n === 0 ? m : `${m}${t}${d.padEnd(n, "0").slice(0, n)}`;
  }
  return c === ".0" ? m : `${m}${c}`;
}
const xt = 200, It = 600, Et = Ie({
  compatConfig: {
    MODE: 3
  },
  name: "StepHandler",
  inheritAttrs: !1,
  props: {
    prefixCls: String,
    upDisabled: Boolean,
    downDisabled: Boolean,
    onStep: R()
  },
  slots: Object,
  setup(e, t) {
    let {
      slots: n,
      emit: r
    } = t;
    const i = He(), o = (c, m) => {
      c.preventDefault(), r("step", m);
      function f() {
        r("step", m), i.value = setTimeout(f, xt);
      }
      i.value = setTimeout(f, It);
    }, d = () => {
      clearTimeout(i.value);
    };
    return Ge(() => {
      d();
    }), () => {
      if (pt())
        return null;
      const {
        prefixCls: c,
        upDisabled: m,
        downDisabled: f
      } = e, s = `${c}-handler`, w = j(s, `${s}-up`, {
        [`${s}-up-disabled`]: m
      }), S = j(s, `${s}-down`, {
        [`${s}-down-disabled`]: f
      }), I = {
        unselectable: "on",
        role: "button",
        onMouseup: d,
        onMouseleave: d
      }, {
        upNode: $,
        downNode: E
      } = n;
      return h("div", {
        class: `${s}-wrap`
      }, [h("span", A(A({}, I), {}, {
        onMousedown: (D) => {
          o(D, !0);
        },
        "aria-label": "Increase Value",
        "aria-disabled": m,
        class: w
      }), [($ == null ? void 0 : $()) || h("span", {
        unselectable: "on",
        class: `${c}-handler-up-inner`
      }, null)]), h("span", A(A({}, I), {}, {
        onMousedown: (D) => {
          o(D, !1);
        },
        "aria-label": "Decrease Value",
        "aria-disabled": f,
        class: S
      }), [(E == null ? void 0 : E()) || h("span", {
        unselectable: "on",
        class: `${c}-handler-down-inner`
      }, null)])]);
    };
  }
});
function Ct(e, t) {
  const n = He(null);
  function r() {
    try {
      const {
        selectionStart: o,
        selectionEnd: d,
        value: c
      } = e.value, m = c.substring(0, o), f = c.substring(d);
      n.value = {
        start: o,
        end: d,
        value: c,
        beforeTxt: m,
        afterTxt: f
      };
    } catch {
    }
  }
  function i() {
    if (e.value && n.value && t.value)
      try {
        const {
          value: o
        } = e.value, {
          beforeTxt: d,
          afterTxt: c,
          start: m
        } = n.value;
        let f = o.length;
        if (o.endsWith(c))
          f = o.length - n.value.afterTxt.length;
        else if (o.startsWith(d))
          f = d.length;
        else {
          const s = d[m - 1], w = o.indexOf(s, m - 1);
          w !== -1 && (f = w + 1);
        }
        e.value.setSelectionRange(f, f);
      } catch (o) {
        rt(!1, `Something warning of cursor restore. Please fire issue about this: ${o.message}`);
      }
  }
  return [r, i];
}
const Pt = () => {
  const e = _(0), t = () => {
    Ae.cancel(e.value);
  };
  return Ge(() => {
    t();
  }), (n) => {
    t(), e.value = Ae(() => {
      n();
    });
  };
};
var Ot = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
};
const ze = (e, t) => e || t.isEmpty() ? t.toString() : t.toNumber(), je = (e) => {
  const t = O(e);
  return t.isInvalidate() ? null : t;
}, Xe = () => ({
  /** value will show as string */
  stringMode: B(),
  defaultValue: ee([String, Number]),
  value: ee([String, Number]),
  prefixCls: ye(),
  min: ee([String, Number]),
  max: ee([String, Number]),
  step: ee([String, Number], 1),
  tabindex: Number,
  controls: B(!0),
  readonly: B(),
  disabled: B(),
  autofocus: B(),
  keyboard: B(!0),
  /** Parse display value to validate number */
  parser: R(),
  /** Transform `value` to display value show in input */
  formatter: R(),
  /** Syntactic sugar of `formatter`. Config precision of display. */
  precision: Number,
  /** Syntactic sugar of `formatter`. Config decimal separator of display. */
  decimalSeparator: String,
  onInput: R(),
  onChange: R(),
  onPressEnter: R(),
  onStep: R(),
  onBlur: R(),
  onFocus: R()
}), _t = Ie({
  compatConfig: {
    MODE: 3
  },
  name: "InnerInputNumber",
  inheritAttrs: !1,
  props: v(v({}, Xe()), {
    lazy: Boolean
  }),
  slots: Object,
  setup(e, t) {
    let {
      attrs: n,
      slots: r,
      emit: i,
      expose: o
    } = t;
    const d = _(), c = _(!1), m = _(!1), f = _(!1), s = _(O(e.value));
    function w(a) {
      e.value === void 0 && (s.value = a);
    }
    const S = (a, l) => {
      if (!l)
        return e.precision >= 0 ? e.precision : Math.max(re(a), re(e.step));
    }, I = (a) => {
      const l = String(a);
      if (e.parser)
        return e.parser(l);
      let u = l;
      return e.decimalSeparator && (u = u.replace(e.decimalSeparator, ".")), u.replace(/[^\w.-]+/g, "");
    }, $ = _(""), E = (a, l) => {
      if (e.formatter)
        return e.formatter(a, {
          userTyping: l,
          input: String($.value)
        });
      let u = typeof a == "number" ? Pe(a) : a;
      if (!l) {
        const g = S(u, l);
        if (Oe(u) && (e.decimalSeparator || g >= 0)) {
          const y = e.decimalSeparator || ".";
          u = xe(u, y, g);
        }
      }
      return u;
    }, D = (() => {
      const a = e.value;
      return s.value.isInvalidate() && ["string", "number"].includes(typeof a) ? Number.isNaN(a) ? "" : a : E(s.value.toString(), !1);
    })();
    $.value = D;
    function C(a, l) {
      $.value = E(
        // Invalidate number is sometime passed by external control, we should let it go
        // Otherwise is controlled by internal interactive logic which check by userTyping
        // You can ref 'show limited value when input is not focused' test for more info.
        a.isInvalidate() ? a.toString(!1) : a.toString(!l),
        l
      );
    }
    const P = W(() => je(e.max)), N = W(() => je(e.min)), x = W(() => !P.value || !s.value || s.value.isInvalidate() ? !1 : P.value.lessEquals(s.value)), V = W(() => !N.value || !s.value || s.value.isInvalidate() ? !1 : s.value.lessEquals(N.value)), [k, X] = Ct(d, c), K = (a) => P.value && !a.lessEquals(P.value) ? P.value : N.value && !N.value.lessEquals(a) ? N.value : null, le = (a) => !K(a), Y = (a, l) => {
      var u;
      let g = a, y = le(g) || g.isEmpty();
      if (!g.isEmpty() && !l && (g = K(g) || g, y = !0), !e.readonly && !e.disabled && y) {
        const M = g.toString(), F = S(M, l);
        return F >= 0 && (g = O(xe(M, ".", F))), g.equals(s.value) || (w(g), (u = e.onChange) === null || u === void 0 || u.call(e, g.isEmpty() ? null : ze(e.stringMode, g)), e.value === void 0 && C(g, l)), g;
      }
      return s.value;
    }, oe = Pt(), J = (a) => {
      var l;
      if (k(), $.value = a, !f.value) {
        const u = I(a), g = O(u);
        g.isNaN() || Y(g, !0);
      }
      (l = e.onInput) === null || l === void 0 || l.call(e, a), oe(() => {
        let u = a;
        e.parser || (u = a.replace(/。/g, ".")), u !== a && J(u);
      });
    }, b = () => {
      f.value = !0;
    }, Q = () => {
      f.value = !1, J(d.value.value);
    }, H = (a) => {
      J(a.target.value);
    }, G = (a) => {
      var l, u;
      if (a && x.value || !a && V.value)
        return;
      m.value = !1;
      let g = O(e.step);
      a || (g = g.negate());
      const y = (s.value || O(0)).add(g.toString()), M = Y(y, !1);
      (l = e.onStep) === null || l === void 0 || l.call(e, ze(e.stringMode, M), {
        offset: e.step,
        type: a ? "up" : "down"
      }), (u = d.value) === null || u === void 0 || u.focus();
    }, T = (a) => {
      const l = O(I($.value));
      let u = l;
      l.isNaN() ? u = s.value : u = Y(l, a), e.value !== void 0 ? C(s.value, !1) : u.isNaN() || C(u, !1);
    }, se = (a) => {
      var l;
      const {
        which: u
      } = a;
      m.value = !0, u === ie.ENTER && (f.value || (m.value = !1), T(!1), (l = e.onPressEnter) === null || l === void 0 || l.call(e, a)), e.keyboard !== !1 && !f.value && [ie.UP, ie.DOWN].includes(u) && (G(ie.UP === u), a.preventDefault());
    }, ue = () => {
      m.value = !1;
    }, de = (a) => {
      T(!1), c.value = !1, m.value = !1, i("blur", a);
    };
    return te(() => e.precision, () => {
      s.value.isInvalidate() || C(s.value, !1);
    }, {
      flush: "post"
    }), te(() => e.value, () => {
      const a = O(e.value);
      s.value = a;
      const l = O(I($.value));
      (!a.equals(l) || !m.value || e.formatter) && C(a, m.value);
    }, {
      flush: "post"
    }), te($, () => {
      e.formatter && X();
    }, {
      flush: "post"
    }), te(() => e.disabled, (a) => {
      a && (c.value = !1);
    }), o({
      focus: () => {
        var a;
        (a = d.value) === null || a === void 0 || a.focus();
      },
      blur: () => {
        var a;
        (a = d.value) === null || a === void 0 || a.blur();
      }
    }), () => {
      const a = v(v({}, n), e), {
        prefixCls: l = "rc-input-number",
        min: u,
        max: g,
        step: y = 1,
        defaultValue: M,
        value: F,
        disabled: Z,
        readonly: ae,
        keyboard: _e,
        controls: p = !0,
        autofocus: ce,
        stringMode: L,
        parser: fe,
        formatter: pe,
        precision: U,
        decimalSeparator: me,
        onChange: ge,
        onInput: ve,
        onPressEnter: De,
        onStep: Me,
        lazy: Ke,
        class: Ye,
        style: Je
      } = a, Qe = Ot(a, ["prefixCls", "min", "max", "step", "defaultValue", "value", "disabled", "readonly", "keyboard", "controls", "autofocus", "stringMode", "parser", "formatter", "precision", "decimalSeparator", "onChange", "onInput", "onPressEnter", "onStep", "lazy", "class", "style"]), {
        upHandler: Ze,
        downHandler: et
      } = r, Re = `${l}-input`, he = {};
      return Ke ? he.onChange = H : he.onInput = H, h("div", {
        class: j(l, Ye, {
          [`${l}-focused`]: c.value,
          [`${l}-disabled`]: Z,
          [`${l}-readonly`]: ae,
          [`${l}-not-a-number`]: s.value.isNaN(),
          [`${l}-out-of-range`]: !s.value.isInvalidate() && !le(s.value)
        }),
        style: Je,
        onKeydown: se,
        onKeyup: ue
      }, [p && h(Et, {
        prefixCls: l,
        upDisabled: x.value,
        downDisabled: V.value,
        onStep: G
      }, {
        upNode: Ze,
        downNode: et
      }), h("div", {
        class: `${Re}-wrap`
      }, [h("input", A(A(A({
        autofocus: ce,
        autocomplete: "off",
        role: "spinbutton",
        "aria-valuemin": u,
        "aria-valuemax": g,
        "aria-valuenow": s.value.isInvalidate() ? null : s.value.toString(),
        step: y
      }, Qe), {}, {
        ref: d,
        class: Re,
        value: $.value,
        disabled: Z,
        readonly: ae,
        onFocus: (tt) => {
          c.value = !0, i("focus", tt);
        }
      }, he), {}, {
        onBlur: de,
        onCompositionstart: b,
        onCompositionend: Q
      }), null)])]);
    };
  }
});
function $e(e) {
  return e != null;
}
const Dt = (e) => {
  const {
    componentCls: t,
    lineWidth: n,
    lineType: r,
    colorBorder: i,
    borderRadius: o,
    fontSizeLG: d,
    controlHeightLG: c,
    controlHeightSM: m,
    colorError: f,
    inputPaddingHorizontalSM: s,
    colorTextDescription: w,
    motionDurationMid: S,
    colorPrimary: I,
    controlHeight: $,
    inputPaddingHorizontal: E,
    colorBgContainer: D,
    colorTextDisabled: C,
    borderRadiusSM: P,
    borderRadiusLG: N,
    controlWidth: x,
    handleVisible: V
  } = e;
  return [
    {
      [t]: v(v(v(v({}, Ve(e)), Le(e)), Ue(e, t)), {
        display: "inline-block",
        width: x,
        margin: 0,
        padding: 0,
        border: `${n}px ${r} ${i}`,
        borderRadius: o,
        "&-rtl": {
          direction: "rtl",
          [`${t}-input`]: {
            direction: "rtl"
          }
        },
        "&-lg": {
          padding: 0,
          fontSize: d,
          borderRadius: N,
          [`input${t}-input`]: {
            height: c - 2 * n
          }
        },
        "&-sm": {
          padding: 0,
          borderRadius: P,
          [`input${t}-input`]: {
            height: m - 2 * n,
            padding: `0 ${s}px`
          }
        },
        "&:hover": v({}, qe(e)),
        "&-focused": v({}, bt(e)),
        "&-disabled": v(v({}, St(e)), {
          [`${t}-input`]: {
            cursor: "not-allowed"
          }
        }),
        // ===================== Out Of Range =====================
        "&-out-of-range": {
          input: {
            color: f
          }
        },
        // Style for input-group: input with label, with button or dropdown...
        "&-group": v(v(v({}, Ve(e)), $t(e)), {
          "&-wrapper": {
            display: "inline-block",
            textAlign: "start",
            verticalAlign: "top",
            [`${t}-affix-wrapper`]: {
              width: "100%"
            },
            // Size
            "&-lg": {
              [`${t}-group-addon`]: {
                borderRadius: N
              }
            },
            "&-sm": {
              [`${t}-group-addon`]: {
                borderRadius: P
              }
            }
          }
        }),
        [t]: {
          "&-input": v(v({
            width: "100%",
            height: $ - 2 * n,
            padding: `0 ${E}px`,
            textAlign: "start",
            backgroundColor: "transparent",
            border: 0,
            borderRadius: o,
            outline: 0,
            transition: `all ${S} linear`,
            appearance: "textfield",
            color: e.colorText,
            fontSize: "inherit",
            verticalAlign: "top"
          }, Nt(e.colorTextPlaceholder)), {
            '&[type="number"]::-webkit-inner-spin-button, &[type="number"]::-webkit-outer-spin-button': {
              margin: 0,
              /* stylelint-disable-next-line property-no-vendor-prefix */
              webkitAppearance: "none",
              appearance: "none"
            }
          })
        }
      })
    },
    // Handler
    {
      [t]: {
        [`&:hover ${t}-handler-wrap, &-focused ${t}-handler-wrap`]: {
          opacity: 1
        },
        [`${t}-handler-wrap`]: {
          position: "absolute",
          insetBlockStart: 0,
          insetInlineEnd: 0,
          width: e.handleWidth,
          height: "100%",
          background: D,
          borderStartStartRadius: 0,
          borderStartEndRadius: o,
          borderEndEndRadius: o,
          borderEndStartRadius: 0,
          opacity: V === !0 ? 1 : 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          transition: `opacity ${S} linear ${S}`,
          // Fix input number inside Menu makes icon too large
          // We arise the selector priority by nest selector here
          // https://github.com/ant-design/ant-design/issues/14367
          [`${t}-handler`]: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: "auto",
            height: "40%",
            [`
              ${t}-handler-up-inner,
              ${t}-handler-down-inner
            `]: {
              marginInlineEnd: 0,
              fontSize: e.handleFontSize
            }
          }
        },
        [`${t}-handler`]: {
          height: "50%",
          overflow: "hidden",
          color: w,
          fontWeight: "bold",
          lineHeight: 0,
          textAlign: "center",
          cursor: "pointer",
          borderInlineStart: `${n}px ${r} ${i}`,
          transition: `all ${S} linear`,
          "&:active": {
            background: e.colorFillAlter
          },
          // Hover
          "&:hover": {
            height: "60%",
            [`
              ${t}-handler-up-inner,
              ${t}-handler-down-inner
            `]: {
              color: I
            }
          },
          "&-up-inner, &-down-inner": v(v({}, lt()), {
            color: w,
            transition: `all ${S} linear`,
            userSelect: "none"
          })
        },
        [`${t}-handler-up`]: {
          borderStartEndRadius: o
        },
        [`${t}-handler-down`]: {
          borderBlockStart: `${n}px ${r} ${i}`,
          borderEndEndRadius: o
        },
        // Disabled
        "&-disabled, &-readonly": {
          [`${t}-handler-wrap`]: {
            display: "none"
          }
        },
        [`
          ${t}-handler-up-disabled,
          ${t}-handler-down-disabled
        `]: {
          cursor: "not-allowed"
        },
        [`
          ${t}-handler-up-disabled:hover &-handler-up-inner,
          ${t}-handler-down-disabled:hover &-handler-down-inner
        `]: {
          color: C
        }
      }
    },
    // Border-less
    {
      [`${t}-borderless`]: {
        borderColor: "transparent",
        boxShadow: "none",
        [`${t}-handler-down`]: {
          borderBlockStartWidth: 0
        }
      }
    }
  ];
}, Mt = (e) => {
  const {
    componentCls: t,
    inputPaddingHorizontal: n,
    inputAffixPadding: r,
    controlWidth: i,
    borderRadiusLG: o,
    borderRadiusSM: d
  } = e;
  return {
    [`${t}-affix-wrapper`]: v(v(v({}, Le(e)), Ue(e, `${t}-affix-wrapper`)), {
      // or number handler will cover form status
      position: "relative",
      display: "inline-flex",
      width: i,
      padding: 0,
      paddingInlineStart: n,
      "&-lg": {
        borderRadius: o
      },
      "&-sm": {
        borderRadius: d
      },
      [`&:not(${t}-affix-wrapper-disabled):hover`]: v(v({}, qe(e)), {
        zIndex: 1
      }),
      "&-focused, &:focus": {
        zIndex: 1
      },
      "&-disabled": {
        [`${t}[disabled]`]: {
          background: "transparent"
        }
      },
      [`> div${t}`]: {
        width: "100%",
        border: "none",
        outline: "none",
        [`&${t}-focused`]: {
          boxShadow: "none !important"
        }
      },
      [`input${t}-input`]: {
        padding: 0
      },
      "&::before": {
        width: 0,
        visibility: "hidden",
        content: '"\\a0"'
      },
      [`${t}-handler-wrap`]: {
        zIndex: 2
      },
      [t]: {
        "&-prefix, &-suffix": {
          display: "flex",
          flex: "none",
          alignItems: "center",
          pointerEvents: "none"
        },
        "&-prefix": {
          marginInlineEnd: r
        },
        "&-suffix": {
          position: "absolute",
          insetBlockStart: 0,
          insetInlineEnd: 0,
          zIndex: 1,
          height: "100%",
          marginInlineEnd: n,
          marginInlineStart: r
        }
      }
    })
  };
}, Rt = at("InputNumber", (e) => {
  const t = ht(e);
  return [
    Dt(t),
    Mt(t),
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    it(t)
  ];
}, (e) => ({
  controlWidth: 90,
  handleWidth: e.controlHeightSM - e.lineWidth * 2,
  handleFontSize: e.fontSize / 2,
  handleVisible: "auto"
}));
var At = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
};
const We = Xe(), Vt = () => v(v({}, We), {
  size: ye(),
  bordered: B(!0),
  placeholder: String,
  name: String,
  id: String,
  type: String,
  addonBefore: be.any,
  addonAfter: be.any,
  prefix: be.any,
  "onUpdate:value": We.onChange,
  valueModifiers: Object,
  status: ye()
}), Ne = Ie({
  compatConfig: {
    MODE: 3
  },
  name: "AInputNumber",
  inheritAttrs: !1,
  props: Vt(),
  // emits: ['focus', 'blur', 'change', 'input', 'update:value'],
  slots: Object,
  setup(e, t) {
    let {
      emit: n,
      expose: r,
      attrs: i,
      slots: o
    } = t;
    var d;
    const c = ot(), m = st.useInject(), f = W(() => vt(m.status, e.status)), {
      prefixCls: s,
      size: w,
      direction: S,
      disabled: I
    } = ut("input-number", e), {
      compactSize: $,
      compactItemClassnames: E
    } = dt(s, S), D = ct(), C = W(() => {
      var b;
      return (b = I.value) !== null && b !== void 0 ? b : D.value;
    }), [P, N] = Rt(s), x = W(() => $.value || w.value), V = _((d = e.value) !== null && d !== void 0 ? d : e.defaultValue), k = _(!1);
    te(() => e.value, () => {
      V.value = e.value;
    });
    const X = _(null), K = () => {
      var b;
      (b = X.value) === null || b === void 0 || b.focus();
    };
    r({
      focus: K,
      blur: () => {
        var b;
        (b = X.value) === null || b === void 0 || b.blur();
      }
    });
    const Y = (b) => {
      e.value === void 0 && (V.value = b), n("update:value", b), n("change", b), c.onFieldChange();
    }, oe = (b) => {
      k.value = !1, n("blur", b), c.onFieldBlur();
    }, J = (b) => {
      k.value = !0, n("focus", b);
    };
    return () => {
      var b, Q, H, G;
      const {
        hasFeedback: T,
        isFormItemInput: se,
        feedbackIcon: ue
      } = m, de = (b = e.id) !== null && b !== void 0 ? b : c.id.value, a = v(v(v({}, i), e), {
        id: de,
        disabled: C.value
      }), {
        class: l,
        bordered: u,
        readonly: g,
        style: y,
        addonBefore: M = (Q = o.addonBefore) === null || Q === void 0 ? void 0 : Q.call(o),
        addonAfter: F = (H = o.addonAfter) === null || H === void 0 ? void 0 : H.call(o),
        prefix: Z = (G = o.prefix) === null || G === void 0 ? void 0 : G.call(o),
        valueModifiers: ae = {}
      } = a, _e = At(a, ["class", "bordered", "readonly", "style", "addonBefore", "addonAfter", "prefix", "valueModifiers"]), p = s.value, ce = j({
        [`${p}-lg`]: x.value === "large",
        [`${p}-sm`]: x.value === "small",
        [`${p}-rtl`]: S.value === "rtl",
        [`${p}-readonly`]: g,
        [`${p}-borderless`]: !u,
        [`${p}-in-form-item`]: se
      }, Se(p, f.value), l, E.value, N.value);
      let L = h(_t, A(A({}, gt(_e, ["size", "defaultValue"])), {}, {
        ref: X,
        lazy: !!ae.lazy,
        value: V.value,
        class: ce,
        prefixCls: p,
        readonly: g,
        onChange: Y,
        onBlur: oe,
        onFocus: J
      }), {
        upHandler: o.upIcon ? () => h("span", {
          class: `${p}-handler-up-inner`
        }, [o.upIcon()]) : () => h(Ee, {
          class: `${p}-handler-up-inner`
        }, null),
        downHandler: o.downIcon ? () => h("span", {
          class: `${p}-handler-down-inner`
        }, [o.downIcon()]) : () => h(mt, {
          class: `${p}-handler-down-inner`
        }, null)
      });
      const fe = $e(M) || $e(F), pe = $e(Z);
      if (pe || T) {
        const U = j(`${p}-affix-wrapper`, Se(`${p}-affix-wrapper`, f.value, T), {
          [`${p}-affix-wrapper-focused`]: k.value,
          [`${p}-affix-wrapper-disabled`]: C.value,
          [`${p}-affix-wrapper-sm`]: x.value === "small",
          [`${p}-affix-wrapper-lg`]: x.value === "large",
          [`${p}-affix-wrapper-rtl`]: S.value === "rtl",
          [`${p}-affix-wrapper-readonly`]: g,
          [`${p}-affix-wrapper-borderless`]: !u,
          // className will go to addon wrapper
          [`${l}`]: !fe && l
        }, N.value);
        L = h("div", {
          class: U,
          style: y,
          onClick: K
        }, [pe && h("span", {
          class: `${p}-prefix`
        }, [Z]), L, T && h("span", {
          class: `${p}-suffix`
        }, [ue])]);
      }
      if (fe) {
        const U = `${p}-group`, me = `${U}-addon`, ge = M ? h("div", {
          class: me
        }, [M]) : null, ve = F ? h("div", {
          class: me
        }, [F]) : null, De = j(`${p}-wrapper`, U, {
          [`${U}-rtl`]: S.value === "rtl"
        }, N.value), Me = j(`${p}-group-wrapper`, {
          [`${p}-group-wrapper-sm`]: x.value === "small",
          [`${p}-group-wrapper-lg`]: x.value === "large",
          [`${p}-group-wrapper-rtl`]: S.value === "rtl"
        }, Se(`${s}-group-wrapper`, f.value, T), l, N.value);
        L = h("div", {
          class: Me,
          style: y
        }, [h("div", {
          class: De
        }, [ge && h(Te, null, {
          default: () => [h(Fe, null, {
            default: () => [ge]
          })]
        }), L, ve && h(Te, null, {
          default: () => [h(Fe, null, {
            default: () => [ve]
          })]
        })])]);
      }
      return P(ft(L, {
        style: y
      }));
    };
  }
}), Gt = v(Ne, {
  install: (e) => (e.component(Ne.name, Ne), e)
});
export {
  Gt as _
};
