import { d as tt, H as _, bB as nt, f as j, h as R, a4 as rt, v as Re, c as v, E as F, z as Q, G as ye, K as ie, g as at, aQ as lt, aR as it, r as Ae, aU as He, bb as We, aT as Ge, aS as ot, bc as st, bR as ut, bd as dt, bS as ct, e as ft, aB as pt, aC as mt, u as gt, aD as vt, M as bt, aH as he, N as ht, bT as St, bU as Ve, bV as Te, aL as $t, P as Se } from "./index-DyhArEBu.js";
import { createVNode as h, defineComponent as Ie, ref as Le, onBeforeUnmount as Ue, shallowRef as O, computed as H, watch as Y } from "vue";
var Nt = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z" } }] }, name: "up", theme: "outlined" };
function Be(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, a = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(l) {
      return Object.getOwnPropertyDescriptor(n, l).enumerable;
    }))), a.forEach(function(l) {
      yt(e, l, n[l]);
    });
  }
  return e;
}
function yt(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ee = function(t, n) {
  var a = Be({}, t, n.attrs);
  return h(tt, Be({}, a, {
    icon: Nt
  }), null);
};
Ee.displayName = "UpOutlined";
Ee.inheritAttrs = !1;
function we() {
  return typeof BigInt == "function";
}
function J(e) {
  let t = e.trim(), n = t.startsWith("-");
  n && (t = t.slice(1)), t = t.replace(/(\.\d*[^0])0*$/, "$1").replace(/\.0*$/, "").replace(/^0+/, ""), t.startsWith(".") && (t = `0${t}`);
  const a = t || "0", l = a.split("."), i = l[0] || "0", d = l[1] || "0";
  i === "0" && d === "0" && (n = !1);
  const p = n ? "-" : "";
  return {
    negative: n,
    negativeStr: p,
    trimStr: a,
    integerStr: i,
    decimalStr: d,
    fullStr: `${p}${a}`
  };
}
function Ce(e) {
  const t = String(e);
  return !Number.isNaN(Number(t)) && t.includes("e");
}
function Z(e) {
  const t = String(e);
  if (Ce(e)) {
    let n = Number(t.slice(t.indexOf("e-") + 2));
    const a = t.match(/\.(\d+)/);
    return a != null && a[1] && (n += a[1].length), n;
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
    t = e.toFixed(Z(t));
  }
  return J(t).fullStr;
}
function Oe(e) {
  return typeof e == "number" ? !Number.isNaN(e) : e ? (
    // Normal type: 11.28
    /^\s*-?\d+(\.\d+)?\s*$/.test(e) || // Pre-number: 1.
    /^\s*-?\d+\.\s*$/.test(e) || // Post-number: .1
    /^\s*-?\.\d+\s*$/.test(e)
  ) : !1;
}
function qe(e) {
  return !e && e !== 0 && !Number.isNaN(e) || !String(e).trim();
}
class z {
  constructor(t) {
    if (this.origin = "", qe(t)) {
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
    const a = this.number + n;
    if (a > Number.MAX_SAFE_INTEGER)
      return new z(Number.MAX_SAFE_INTEGER);
    if (a < Number.MIN_SAFE_INTEGER)
      return new z(Number.MIN_SAFE_INTEGER);
    const l = Math.max(Z(this.number), Z(n));
    return new z(a.toFixed(l));
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
class U {
  constructor(t) {
    if (this.origin = "", qe(t)) {
      this.empty = !0;
      return;
    }
    if (this.origin = String(t), t === "-" || Number.isNaN(t)) {
      this.nan = !0;
      return;
    }
    let n = t;
    if (Ce(n) && (n = Number(n)), n = typeof n == "string" ? n : Pe(n), Oe(n)) {
      const a = J(n);
      this.negative = a.negative;
      const l = a.trimStr.split(".");
      this.integer = BigInt(l[0]);
      const i = l[1] || "0";
      this.decimal = BigInt(i), this.decimalLen = i.length;
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
    const t = new U(this.toString());
    return t.negative = !t.negative, t;
  }
  add(t) {
    if (this.isInvalidate())
      return new U(t);
    const n = new U(t);
    if (n.isInvalidate())
      return this;
    const a = Math.max(this.getDecimalStr().length, n.getDecimalStr().length), l = this.alignDecimal(a), i = n.alignDecimal(a), d = (l + i).toString(), {
      negativeStr: p,
      trimStr: f
    } = J(d), c = `${p}${f.padStart(a + 1, "0")}`;
    return new U(`${c.slice(0, -a)}.${c.slice(-a)}`);
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
    return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0) ? this.isInvalidate() ? "" : J(`${this.getMark()}${this.getIntegerStr()}.${this.getDecimalStr()}`).fullStr : this.origin;
  }
}
function P(e) {
  return we() ? new U(e) : new z(e);
}
function xe(e, t, n) {
  let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if (e === "")
    return "";
  const {
    negativeStr: l,
    integerStr: i,
    decimalStr: d
  } = J(e), p = `${t}${d}`, f = `${l}${i}`;
  if (n >= 0) {
    const c = Number(d[n]);
    if (c >= 5 && !a) {
      const s = P(e).add(`${l}0.${"0".repeat(n)}${10 - c}`);
      return xe(s.toString(), t, n, a);
    }
    return n === 0 ? f : `${f}${t}${d.padEnd(n, "0").slice(0, n)}`;
  }
  return p === ".0" ? f : `${f}${p}`;
}
const wt = 200, xt = 600, It = Ie({
  compatConfig: {
    MODE: 3
  },
  name: "StepHandler",
  inheritAttrs: !1,
  props: {
    prefixCls: String,
    upDisabled: Boolean,
    downDisabled: Boolean,
    onStep: _()
  },
  slots: Object,
  setup(e, t) {
    let {
      slots: n,
      emit: a
    } = t;
    const l = Le(), i = (p, f) => {
      p.preventDefault(), a("step", f);
      function c() {
        a("step", f), l.value = setTimeout(c, wt);
      }
      l.value = setTimeout(c, xt);
    }, d = () => {
      clearTimeout(l.value);
    };
    return Ue(() => {
      d();
    }), () => {
      if (nt())
        return null;
      const {
        prefixCls: p,
        upDisabled: f,
        downDisabled: c
      } = e, s = `${p}-handler`, $ = j(s, `${s}-up`, {
        [`${s}-up-disabled`]: f
      }), w = j(s, `${s}-down`, {
        [`${s}-down-disabled`]: c
      }), I = {
        unselectable: "on",
        role: "button",
        onMouseup: d,
        onMouseleave: d
      }, {
        upNode: S,
        downNode: E
      } = n;
      return h("div", {
        class: `${s}-wrap`
      }, [h("span", R(R({}, I), {}, {
        onMousedown: (C) => {
          i(C, !0);
        },
        "aria-label": "Increase Value",
        "aria-disabled": f,
        class: $
      }), [(S == null ? void 0 : S()) || h("span", {
        unselectable: "on",
        class: `${p}-handler-up-inner`
      }, null)]), h("span", R(R({}, I), {}, {
        onMousedown: (C) => {
          i(C, !1);
        },
        "aria-label": "Decrease Value",
        "aria-disabled": c,
        class: w
      }), [(E == null ? void 0 : E()) || h("span", {
        unselectable: "on",
        class: `${p}-handler-down-inner`
      }, null)])]);
    };
  }
});
function Et(e, t) {
  const n = Le(null);
  function a() {
    try {
      const {
        selectionStart: i,
        selectionEnd: d,
        value: p
      } = e.value, f = p.substring(0, i), c = p.substring(d);
      n.value = {
        start: i,
        end: d,
        value: p,
        beforeTxt: f,
        afterTxt: c
      };
    } catch {
    }
  }
  function l() {
    if (e.value && n.value && t.value)
      try {
        const {
          value: i
        } = e.value, {
          beforeTxt: d,
          afterTxt: p,
          start: f
        } = n.value;
        let c = i.length;
        if (i.endsWith(p))
          c = i.length - n.value.afterTxt.length;
        else if (i.startsWith(d))
          c = d.length;
        else {
          const s = d[f - 1], $ = i.indexOf(s, f - 1);
          $ !== -1 && (c = $ + 1);
        }
        e.value.setSelectionRange(c, c);
      } catch (i) {
        rt(!1, `Something warning of cursor restore. Please fire issue about this: ${i.message}`);
      }
  }
  return [a, l];
}
const Ct = () => {
  const e = O(0), t = () => {
    Re.cancel(e.value);
  };
  return Ue(() => {
    t();
  }), (n) => {
    t(), e.value = Re(() => {
      n();
    });
  };
};
var Pt = function(e, t) {
  var n = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var l = 0, a = Object.getOwnPropertySymbols(e); l < a.length; l++)
      t.indexOf(a[l]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[l]) && (n[a[l]] = e[a[l]]);
  return n;
};
const Fe = (e, t) => e || t.isEmpty() ? t.toString() : t.toNumber(), ze = (e) => {
  const t = P(e);
  return t.isInvalidate() ? null : t;
}, ke = () => ({
  /** value will show as string */
  stringMode: F(),
  defaultValue: Q([String, Number]),
  value: Q([String, Number]),
  prefixCls: ye(),
  min: Q([String, Number]),
  max: Q([String, Number]),
  step: Q([String, Number], 1),
  tabindex: Number,
  controls: F(!0),
  readonly: F(),
  disabled: F(),
  autofocus: F(),
  keyboard: F(!0),
  /** Parse display value to validate number */
  parser: _(),
  /** Transform `value` to display value show in input */
  formatter: _(),
  /** Syntactic sugar of `formatter`. Config precision of display. */
  precision: Number,
  /** Syntactic sugar of `formatter`. Config decimal separator of display. */
  decimalSeparator: String,
  onInput: _(),
  onChange: _(),
  onPressEnter: _(),
  onStep: _(),
  onBlur: _(),
  onFocus: _()
}), Ot = Ie({
  compatConfig: {
    MODE: 3
  },
  name: "InnerInputNumber",
  inheritAttrs: !1,
  props: v(v({}, ke()), {
    lazy: Boolean
  }),
  slots: Object,
  setup(e, t) {
    let {
      attrs: n,
      slots: a,
      emit: l,
      expose: i
    } = t;
    const d = O(), p = O(!1), f = O(!1), c = O(!1), s = O(P(e.value));
    function $(r) {
      e.value === void 0 && (s.value = r);
    }
    const w = (r, o) => {
      if (!o)
        return e.precision >= 0 ? e.precision : Math.max(Z(r), Z(e.step));
    }, I = (r) => {
      const o = String(r);
      if (e.parser)
        return e.parser(o);
      let u = o;
      return e.decimalSeparator && (u = u.replace(e.decimalSeparator, ".")), u.replace(/[^\w.-]+/g, "");
    }, S = O(""), E = (r, o) => {
      if (e.formatter)
        return e.formatter(r, {
          userTyping: o,
          input: String(S.value)
        });
      let u = typeof r == "number" ? Pe(r) : r;
      if (!o) {
        const m = w(u, o);
        if (Oe(u) && (e.decimalSeparator || m >= 0)) {
          const x = e.decimalSeparator || ".";
          u = xe(u, x, m);
        }
      }
      return u;
    }, C = (() => {
      const r = e.value;
      return s.value.isInvalidate() && ["string", "number"].includes(typeof r) ? Number.isNaN(r) ? "" : r : E(s.value.toString(), !1);
    })();
    S.value = C;
    function D(r, o) {
      S.value = E(
        // Invalidate number is sometime passed by external control, we should let it go
        // Otherwise is controlled by internal interactive logic which check by userTyping
        // You can ref 'show limited value when input is not focused' test for more info.
        r.isInvalidate() ? r.toString(!1) : r.toString(!o),
        o
      );
    }
    const y = H(() => ze(e.max)), N = H(() => ze(e.min)), A = H(() => !y.value || !s.value || s.value.isInvalidate() ? !1 : y.value.lessEquals(s.value)), V = H(() => !N.value || !s.value || s.value.isInvalidate() ? !1 : s.value.lessEquals(N.value)), [q, ee] = Et(d, p), oe = (r) => y.value && !r.lessEquals(y.value) ? y.value : N.value && !N.value.lessEquals(r) ? N.value : null, te = (r) => !oe(r), k = (r, o) => {
      var u;
      let m = r, x = te(m) || m.isEmpty();
      if (!m.isEmpty() && !o && (m = oe(m) || m, x = !0), !e.readonly && !e.disabled && x) {
        const M = m.toString(), G = w(M, o);
        return G >= 0 && (m = P(xe(M, ".", G))), m.equals(s.value) || ($(m), (u = e.onChange) === null || u === void 0 || u.call(e, m.isEmpty() ? null : Fe(e.stringMode, m)), e.value === void 0 && D(m, o)), m;
      }
      return s.value;
    }, se = Ct(), b = (r) => {
      var o;
      if (q(), S.value = r, !c.value) {
        const u = I(r), m = P(u);
        m.isNaN() || k(m, !0);
      }
      (o = e.onInput) === null || o === void 0 || o.call(e, r), se(() => {
        let u = r;
        e.parser || (u = r.replace(/。/g, ".")), u !== r && b(u);
      });
    }, K = () => {
      c.value = !0;
    }, X = () => {
      c.value = !1, b(d.value.value);
    }, W = (r) => {
      b(r.target.value);
    }, T = (r) => {
      var o, u;
      if (r && A.value || !r && V.value)
        return;
      f.value = !1;
      let m = P(e.step);
      r || (m = m.negate());
      const x = (s.value || P(0)).add(m.toString()), M = k(x, !1);
      (o = e.onStep) === null || o === void 0 || o.call(e, Fe(e.stringMode, M), {
        offset: e.step,
        type: r ? "up" : "down"
      }), (u = d.value) === null || u === void 0 || u.focus();
    }, ne = (r) => {
      const o = P(I(S.value));
      let u = o;
      o.isNaN() ? u = s.value : u = k(o, r), e.value !== void 0 ? D(s.value, !1) : u.isNaN() || D(u, !1);
    }, ue = (r) => {
      var o;
      const {
        which: u
      } = r;
      f.value = !0, u === ie.ENTER && (c.value || (f.value = !1), ne(!1), (o = e.onPressEnter) === null || o === void 0 || o.call(e, r)), e.keyboard !== !1 && !c.value && [ie.UP, ie.DOWN].includes(u) && (T(ie.UP === u), r.preventDefault());
    }, de = () => {
      f.value = !1;
    }, re = (r) => {
      ne(!1), p.value = !1, f.value = !1, l("blur", r);
    };
    return Y(() => e.precision, () => {
      s.value.isInvalidate() || D(s.value, !1);
    }, {
      flush: "post"
    }), Y(() => e.value, () => {
      const r = P(e.value);
      s.value = r;
      const o = P(I(S.value));
      (!r.equals(o) || !f.value || e.formatter) && D(r, f.value);
    }, {
      flush: "post"
    }), Y(S, () => {
      e.formatter && ee();
    }, {
      flush: "post"
    }), Y(() => e.disabled, (r) => {
      r && (p.value = !1);
    }), i({
      focus: () => {
        var r;
        (r = d.value) === null || r === void 0 || r.focus();
      },
      blur: () => {
        var r;
        (r = d.value) === null || r === void 0 || r.blur();
      }
    }), () => {
      const r = v(v({}, n), e), {
        prefixCls: o = "rc-input-number",
        min: u,
        max: m,
        step: x = 1,
        defaultValue: M,
        value: G,
        disabled: ae,
        readonly: le,
        keyboard: g,
        controls: ce = !0,
        autofocus: B,
        stringMode: fe,
        parser: pe,
        formatter: L,
        precision: me,
        decimalSeparator: ge,
        onChange: ve,
        onInput: De,
        onPressEnter: Me,
        onStep: Vt,
        lazy: Ke,
        class: Xe,
        style: Qe
      } = r, Ye = Pt(r, ["prefixCls", "min", "max", "step", "defaultValue", "value", "disabled", "readonly", "keyboard", "controls", "autofocus", "stringMode", "parser", "formatter", "precision", "decimalSeparator", "onChange", "onInput", "onPressEnter", "onStep", "lazy", "class", "style"]), {
        upHandler: Je,
        downHandler: Ze
      } = a, _e = `${o}-input`, be = {};
      return Ke ? be.onChange = W : be.onInput = W, h("div", {
        class: j(o, Xe, {
          [`${o}-focused`]: p.value,
          [`${o}-disabled`]: ae,
          [`${o}-readonly`]: le,
          [`${o}-not-a-number`]: s.value.isNaN(),
          [`${o}-out-of-range`]: !s.value.isInvalidate() && !te(s.value)
        }),
        style: Qe,
        onKeydown: ue,
        onKeyup: de
      }, [ce && h(It, {
        prefixCls: o,
        upDisabled: A.value,
        downDisabled: V.value,
        onStep: T
      }, {
        upNode: Je,
        downNode: Ze
      }), h("div", {
        class: `${_e}-wrap`
      }, [h("input", R(R(R({
        autofocus: B,
        autocomplete: "off",
        role: "spinbutton",
        "aria-valuemin": u,
        "aria-valuemax": m,
        "aria-valuenow": s.value.isInvalidate() ? null : s.value.toString(),
        step: x
      }, Ye), {}, {
        ref: d,
        class: _e,
        value: S.value,
        disabled: ae,
        readonly: le,
        onFocus: (et) => {
          p.value = !0, l("focus", et);
        }
      }, be), {}, {
        onBlur: re,
        onCompositionstart: K,
        onCompositionend: X
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
    lineType: a,
    colorBorder: l,
    borderRadius: i,
    fontSizeLG: d,
    controlHeightLG: p,
    controlHeightSM: f,
    colorError: c,
    inputPaddingHorizontalSM: s,
    colorTextDescription: $,
    motionDurationMid: w,
    colorPrimary: I,
    controlHeight: S,
    inputPaddingHorizontal: E,
    colorBgContainer: C,
    colorTextDisabled: D,
    borderRadiusSM: y,
    borderRadiusLG: N,
    controlWidth: A,
    handleVisible: V
  } = e;
  return [
    {
      [t]: v(v(v(v({}, Ae(e)), He(e)), We(e, t)), {
        display: "inline-block",
        width: A,
        margin: 0,
        padding: 0,
        border: `${n}px ${a} ${l}`,
        borderRadius: i,
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
            height: p - 2 * n
          }
        },
        "&-sm": {
          padding: 0,
          borderRadius: y,
          [`input${t}-input`]: {
            height: f - 2 * n,
            padding: `0 ${s}px`
          }
        },
        "&:hover": v({}, Ge(e)),
        "&-focused": v({}, ot(e)),
        "&-disabled": v(v({}, st(e)), {
          [`${t}-input`]: {
            cursor: "not-allowed"
          }
        }),
        // ===================== Out Of Range =====================
        "&-out-of-range": {
          input: {
            color: c
          }
        },
        // Style for input-group: input with label, with button or dropdown...
        "&-group": v(v(v({}, Ae(e)), ut(e)), {
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
                borderRadius: y
              }
            }
          }
        }),
        [t]: {
          "&-input": v(v({
            width: "100%",
            height: S - 2 * n,
            padding: `0 ${E}px`,
            textAlign: "start",
            backgroundColor: "transparent",
            border: 0,
            borderRadius: i,
            outline: 0,
            transition: `all ${w} linear`,
            appearance: "textfield",
            color: e.colorText,
            fontSize: "inherit",
            verticalAlign: "top"
          }, dt(e.colorTextPlaceholder)), {
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
          background: C,
          borderStartStartRadius: 0,
          borderStartEndRadius: i,
          borderEndEndRadius: i,
          borderEndStartRadius: 0,
          opacity: V === !0 ? 1 : 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          transition: `opacity ${w} linear ${w}`,
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
          color: $,
          fontWeight: "bold",
          lineHeight: 0,
          textAlign: "center",
          cursor: "pointer",
          borderInlineStart: `${n}px ${a} ${l}`,
          transition: `all ${w} linear`,
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
          "&-up-inner, &-down-inner": v(v({}, ct()), {
            color: $,
            transition: `all ${w} linear`,
            userSelect: "none"
          })
        },
        [`${t}-handler-up`]: {
          borderStartEndRadius: i
        },
        [`${t}-handler-down`]: {
          borderBlockStart: `${n}px ${a} ${l}`,
          borderEndEndRadius: i
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
          color: D
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
    inputAffixPadding: a,
    controlWidth: l,
    borderRadiusLG: i,
    borderRadiusSM: d
  } = e;
  return {
    [`${t}-affix-wrapper`]: v(v(v({}, He(e)), We(e, `${t}-affix-wrapper`)), {
      // or number handler will cover form status
      position: "relative",
      display: "inline-flex",
      width: l,
      padding: 0,
      paddingInlineStart: n,
      "&-lg": {
        borderRadius: i
      },
      "&-sm": {
        borderRadius: d
      },
      [`&:not(${t}-affix-wrapper-disabled):hover`]: v(v({}, Ge(e)), {
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
          marginInlineEnd: a
        },
        "&-suffix": {
          position: "absolute",
          insetBlockStart: 0,
          insetInlineEnd: 0,
          zIndex: 1,
          height: "100%",
          marginInlineEnd: n,
          marginInlineStart: a
        }
      }
    })
  };
}, _t = at("InputNumber", (e) => {
  const t = lt(e);
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
var Rt = function(e, t) {
  var n = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var l = 0, a = Object.getOwnPropertySymbols(e); l < a.length; l++)
      t.indexOf(a[l]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[l]) && (n[a[l]] = e[a[l]]);
  return n;
};
const je = ke(), At = () => v(v({}, je), {
  size: ye(),
  bordered: F(!0),
  placeholder: String,
  name: String,
  id: String,
  type: String,
  addonBefore: Se.any,
  addonAfter: Se.any,
  prefix: Se.any,
  "onUpdate:value": je.onChange,
  valueModifiers: Object,
  status: ye()
}), Ne = Ie({
  compatConfig: {
    MODE: 3
  },
  name: "AInputNumber",
  inheritAttrs: !1,
  props: At(),
  // emits: ['focus', 'blur', 'change', 'input', 'update:value'],
  slots: Object,
  setup(e, t) {
    let {
      emit: n,
      expose: a,
      attrs: l,
      slots: i
    } = t;
    const d = ft(), p = pt.useInject(), f = H(() => mt(p.status, e.status)), {
      prefixCls: c,
      size: s,
      direction: $,
      disabled: w
    } = gt("input-number", e), {
      compactSize: I,
      compactItemClassnames: S
    } = vt(c, $), E = bt(), C = H(() => {
      var b;
      return (b = w.value) !== null && b !== void 0 ? b : E.value;
    }), [D, y] = _t(c), N = H(() => I.value || s.value), A = O(e.value === void 0 ? e.defaultValue : e.value), V = O(!1);
    Y(() => e.value, () => {
      A.value = e.value;
    });
    const q = O(null), ee = () => {
      var b;
      (b = q.value) === null || b === void 0 || b.focus();
    };
    a({
      focus: ee,
      blur: () => {
        var b;
        (b = q.value) === null || b === void 0 || b.blur();
      }
    });
    const te = (b) => {
      e.value === void 0 && (A.value = b), n("update:value", b), n("change", b), d.onFieldChange();
    }, k = (b) => {
      V.value = !1, n("blur", b), d.onFieldBlur();
    }, se = (b) => {
      V.value = !0, n("focus", b);
    };
    return () => {
      var b, K, X, W;
      const {
        hasFeedback: T,
        isFormItemInput: ne,
        feedbackIcon: ue
      } = p, de = (b = e.id) !== null && b !== void 0 ? b : d.id.value, re = v(v(v({}, l), e), {
        id: de,
        disabled: C.value
      }), {
        class: r,
        bordered: o,
        readonly: u,
        style: m,
        addonBefore: x = (K = i.addonBefore) === null || K === void 0 ? void 0 : K.call(i),
        addonAfter: M = (X = i.addonAfter) === null || X === void 0 ? void 0 : X.call(i),
        prefix: G = (W = i.prefix) === null || W === void 0 ? void 0 : W.call(i),
        valueModifiers: ae = {}
      } = re, le = Rt(re, ["class", "bordered", "readonly", "style", "addonBefore", "addonAfter", "prefix", "valueModifiers"]), g = c.value, ce = j({
        [`${g}-lg`]: N.value === "large",
        [`${g}-sm`]: N.value === "small",
        [`${g}-rtl`]: $.value === "rtl",
        [`${g}-readonly`]: u,
        [`${g}-borderless`]: !o,
        [`${g}-in-form-item`]: ne
      }, he(g, f.value), r, S.value, y.value);
      let B = h(Ot, R(R({}, ht(le, ["size", "defaultValue"])), {}, {
        ref: q,
        lazy: !!ae.lazy,
        value: A.value,
        class: ce,
        prefixCls: g,
        readonly: u,
        onChange: te,
        onBlur: k,
        onFocus: se
      }), {
        upHandler: i.upIcon ? () => h("span", {
          class: `${g}-handler-up-inner`
        }, [i.upIcon()]) : () => h(Ee, {
          class: `${g}-handler-up-inner`
        }, null),
        downHandler: i.downIcon ? () => h("span", {
          class: `${g}-handler-down-inner`
        }, [i.downIcon()]) : () => h(St, {
          class: `${g}-handler-down-inner`
        }, null)
      });
      const fe = $e(x) || $e(M), pe = $e(G);
      if (pe || T) {
        const L = j(`${g}-affix-wrapper`, he(`${g}-affix-wrapper`, f.value, T), {
          [`${g}-affix-wrapper-focused`]: V.value,
          [`${g}-affix-wrapper-disabled`]: C.value,
          [`${g}-affix-wrapper-sm`]: N.value === "small",
          [`${g}-affix-wrapper-lg`]: N.value === "large",
          [`${g}-affix-wrapper-rtl`]: $.value === "rtl",
          [`${g}-affix-wrapper-readonly`]: u,
          [`${g}-affix-wrapper-borderless`]: !o,
          // className will go to addon wrapper
          [`${r}`]: !fe && r
        }, y.value);
        B = h("div", {
          class: L,
          style: m,
          onClick: ee
        }, [pe && h("span", {
          class: `${g}-prefix`
        }, [G]), B, T && h("span", {
          class: `${g}-suffix`
        }, [ue])]);
      }
      if (fe) {
        const L = `${g}-group`, me = `${L}-addon`, ge = x ? h("div", {
          class: me
        }, [x]) : null, ve = M ? h("div", {
          class: me
        }, [M]) : null, De = j(`${g}-wrapper`, L, {
          [`${L}-rtl`]: $.value === "rtl"
        }, y.value), Me = j(`${g}-group-wrapper`, {
          [`${g}-group-wrapper-sm`]: N.value === "small",
          [`${g}-group-wrapper-lg`]: N.value === "large",
          [`${g}-group-wrapper-rtl`]: $.value === "rtl"
        }, he(`${c}-group-wrapper`, f.value, T), r, y.value);
        B = h("div", {
          class: Me,
          style: m
        }, [h("div", {
          class: De
        }, [ge && h(Ve, null, {
          default: () => [h(Te, null, {
            default: () => [ge]
          })]
        }), B, ve && h(Ve, null, {
          default: () => [h(Te, null, {
            default: () => [ve]
          })]
        })])]);
      }
      return D($t(B, {
        style: m
      }));
    };
  }
}), Ft = v(Ne, {
  install: (e) => (e.component(Ne.name, Ne), e)
});
export {
  Ft as _
};
