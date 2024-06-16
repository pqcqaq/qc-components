import { createVNode as B, defineComponent as z, shallowRef as Z, onMounted as Ve, onBeforeUnmount as le, computed as ue, ref as U, watch as we, onActivated as Be, openBlock as ee, createBlock as Me, unref as Pe, normalizeProps as Te, guardReactiveProps as He, withCtx as Oe, createElementBlock as ke, Fragment as Fe, renderList as Le, renderSlot as Ne } from "vue";
import { _ as f, c as j, w as de, O as Ee, b as T, a5 as ce, P as g, a6 as G, a7 as J, i as he, a8 as De, a9 as Y, aa as Re, ab as je, Q as ze, U as te, g as Ae, m as Ie, r as _e, p as We, t as Ge, A as Ue, u as Ke, x as Xe, a3 as D, C as N, $ as Ye, D as Je, G as A } from "./styleChecker-DdDg1L8e.js";
import { K as E } from "./KeyCode-n3eOOGSl.js";
const Q = (e, o) => {
  let {
    attrs: t
  } = o;
  const {
    included: n,
    vertical: s,
    style: a,
    class: r
  } = t;
  let {
    length: i,
    offset: l,
    reverse: u
  } = t;
  i < 0 && (u = !u, i = Math.abs(i), l = 100 - l);
  const d = s ? {
    [u ? "top" : "bottom"]: `${l}%`,
    [u ? "bottom" : "top"]: "auto",
    height: `${i}%`
  } : {
    [u ? "right" : "left"]: `${l}%`,
    [u ? "left" : "right"]: "auto",
    width: `${i}%`
  }, m = f(f({}, a), d);
  return n ? B("div", {
    class: r,
    style: m
  }, null) : null;
};
Q.inheritAttrs = !1;
const Qe = (e, o, t, n, s, a) => {
  de(t ? n > 0 : !0, "Slider", "`Slider[step]` should be a positive number in order to make Slider[dots] work.");
  const r = Object.keys(o).map(parseFloat).sort((i, l) => i - l);
  if (t && n)
    for (let i = s; i <= a; i += n)
      r.indexOf(i) === -1 && r.push(i);
  return r;
}, fe = (e, o) => {
  let {
    attrs: t
  } = o;
  const {
    prefixCls: n,
    vertical: s,
    reverse: a,
    marks: r,
    dots: i,
    step: l,
    included: u,
    lowerBound: d,
    upperBound: m,
    max: b,
    min: C,
    dotStyle: y,
    activeDotStyle: M
  } = t, h = b - C, S = Qe(s, r, i, l, C, b).map((c) => {
    const $ = `${Math.abs(c - C) / h * 100}%`, w = !u && c === m || u && c <= m && c >= d;
    let x = s ? f(f({}, y), {
      [a ? "top" : "bottom"]: $
    }) : f(f({}, y), {
      [a ? "right" : "left"]: $
    });
    w && (x = f(f({}, x), M));
    const v = j({
      [`${n}-dot`]: !0,
      [`${n}-dot-active`]: w,
      [`${n}-dot-reverse`]: a
    });
    return B("span", {
      class: v,
      style: x,
      key: c
    }, null);
  });
  return B("div", {
    class: `${n}-step`
  }, [S]);
};
fe.inheritAttrs = !1;
const pe = (e, o) => {
  let {
    attrs: t,
    slots: n
  } = o;
  const {
    class: s,
    vertical: a,
    reverse: r,
    marks: i,
    included: l,
    upperBound: u,
    lowerBound: d,
    max: m,
    min: b,
    onClickLabel: C
  } = t, y = Object.keys(i), M = n.mark, h = m - b, S = y.map(parseFloat).sort((c, $) => c - $).map((c) => {
    const $ = typeof i[c] == "function" ? i[c]() : i[c], w = typeof $ == "object" && !Ee($);
    let x = w ? $.label : $;
    if (!x && x !== 0)
      return null;
    M && (x = M({
      point: c,
      label: x
    }));
    const v = !l && c === u || l && c <= u && c >= d, p = j({
      [`${s}-text`]: !0,
      [`${s}-text-active`]: v
    }), V = {
      marginBottom: "-50%",
      [r ? "top" : "bottom"]: `${(c - b) / h * 100}%`
    }, H = {
      transform: `translateX(${r ? "50%" : "-50%"})`,
      msTransform: `translateX(${r ? "50%" : "-50%"})`,
      [r ? "right" : "left"]: `${(c - b) / h * 100}%`
    }, P = a ? V : H, L = w ? f(f({}, P), $.style) : P, O = {
      [ce ? "onTouchstartPassive" : "onTouchstart"]: (k) => C(k, c)
    };
    return B("span", T({
      class: p,
      style: L,
      key: c,
      onMousedown: (k) => C(k, c)
    }, O), [x]);
  });
  return B("div", {
    class: s
  }, [S]);
};
pe.inheritAttrs = !1;
const me = z({
  compatConfig: {
    MODE: 3
  },
  name: "Handle",
  inheritAttrs: !1,
  props: {
    prefixCls: String,
    vertical: {
      type: Boolean,
      default: void 0
    },
    offset: Number,
    disabled: {
      type: Boolean,
      default: void 0
    },
    min: Number,
    max: Number,
    value: Number,
    tabindex: g.oneOfType([g.number, g.string]),
    reverse: {
      type: Boolean,
      default: void 0
    },
    ariaLabel: String,
    ariaLabelledBy: String,
    ariaValueTextFormatter: Function,
    onMouseenter: {
      type: Function
    },
    onMouseleave: {
      type: Function
    },
    onMousedown: {
      type: Function
    }
  },
  setup(e, o) {
    let {
      attrs: t,
      emit: n,
      expose: s
    } = o;
    const a = Z(!1), r = Z(), i = () => {
      document.activeElement === r.value && (a.value = !0);
    }, l = (h) => {
      a.value = !1, n("blur", h);
    }, u = () => {
      a.value = !1;
    }, d = () => {
      var h;
      (h = r.value) === null || h === void 0 || h.focus();
    }, m = () => {
      var h;
      (h = r.value) === null || h === void 0 || h.blur();
    }, b = () => {
      a.value = !0, d();
    }, C = (h) => {
      h.preventDefault(), d(), n("mousedown", h);
    };
    s({
      focus: d,
      blur: m,
      clickFocus: b,
      ref: r
    });
    let y = null;
    Ve(() => {
      y = G(document, "mouseup", i);
    }), le(() => {
      y == null || y.remove();
    });
    const M = ue(() => {
      const {
        vertical: h,
        offset: S,
        reverse: c
      } = e;
      return h ? {
        [c ? "top" : "bottom"]: `${S}%`,
        [c ? "bottom" : "top"]: "auto",
        transform: c ? null : "translateY(+50%)"
      } : {
        [c ? "right" : "left"]: `${S}%`,
        [c ? "left" : "right"]: "auto",
        transform: `translateX(${c ? "+" : "-"}50%)`
      };
    });
    return () => {
      const {
        prefixCls: h,
        disabled: S,
        min: c,
        max: $,
        value: w,
        tabindex: x,
        ariaLabel: v,
        ariaLabelledBy: p,
        ariaValueTextFormatter: V,
        onMouseenter: H,
        onMouseleave: P
      } = e, L = j(t.class, {
        [`${h}-handle-click-focused`]: a.value
      }), O = {
        "aria-valuemin": c,
        "aria-valuemax": $,
        "aria-valuenow": w,
        "aria-disabled": !!S
      }, k = [t.style, M.value];
      let F = x || 0;
      (S || x === null) && (F = null);
      let _;
      V && (_ = V(w));
      const K = f(f(f(f({}, t), {
        role: "slider",
        tabindex: F
      }), O), {
        class: L,
        onBlur: l,
        onKeydown: u,
        onMousedown: C,
        onMouseenter: H,
        onMouseleave: P,
        ref: r,
        style: k
      });
      return B("div", T(T({}, K), {}, {
        "aria-label": v,
        "aria-labelledby": p,
        "aria-valuetext": _
      }), null);
    };
  }
});
function X(e, o) {
  try {
    return Object.keys(o).some((t) => e.target === o[t].ref);
  } catch {
    return !1;
  }
}
function ge(e, o) {
  let {
    min: t,
    max: n
  } = o;
  return e < t || e > n;
}
function ne(e) {
  return e.touches.length > 1 || e.type.toLowerCase() === "touchend" && e.touches.length > 0;
}
function oe(e, o) {
  let {
    marks: t,
    step: n,
    min: s,
    max: a
  } = o;
  const r = Object.keys(t).map(parseFloat);
  if (n !== null) {
    const l = Math.pow(10, ve(n)), u = Math.floor((a * l - s * l) / (n * l)), d = Math.min((e - s) / n, u), m = Math.round(d) * n + s;
    r.push(m);
  }
  const i = r.map((l) => Math.abs(e - l));
  return r[i.indexOf(Math.min(...i))];
}
function ve(e) {
  const o = e.toString();
  let t = 0;
  return o.indexOf(".") >= 0 && (t = o.length - o.indexOf(".") - 1), t;
}
function se(e, o) {
  let t = 1;
  return window.visualViewport && (t = +(window.visualViewport.width / document.body.getBoundingClientRect().width).toFixed(2)), (e ? o.clientY : o.pageX) / t;
}
function ae(e, o) {
  let t = 1;
  return window.visualViewport && (t = +(window.visualViewport.width / document.body.getBoundingClientRect().width).toFixed(2)), (e ? o.touches[0].clientY : o.touches[0].pageX) / t;
}
function re(e, o) {
  const t = o.getBoundingClientRect();
  return e ? t.top + t.height * 0.5 : window.scrollX + t.left + t.width * 0.5;
}
function q(e, o) {
  let {
    max: t,
    min: n
  } = o;
  return e <= n ? n : e >= t ? t : e;
}
function be(e, o) {
  const {
    step: t
  } = o, n = isFinite(oe(e, o)) ? oe(e, o) : 0;
  return t === null ? n : parseFloat(n.toFixed(ve(t)));
}
function I(e) {
  e.stopPropagation(), e.preventDefault();
}
function qe(e, o, t) {
  const n = {
    increase: (r, i) => r + i,
    decrease: (r, i) => r - i
  }, s = n[e](Object.keys(t.marks).indexOf(JSON.stringify(o)), 1), a = Object.keys(t.marks)[s];
  return t.step ? n[e](o, t.step) : Object.keys(t.marks).length && t.marks[a] ? t.marks[a] : o;
}
function ye(e, o, t) {
  const n = "increase", s = "decrease";
  let a = n;
  switch (e.keyCode) {
    case E.UP:
      a = o && t ? s : n;
      break;
    case E.RIGHT:
      a = !o && t ? s : n;
      break;
    case E.DOWN:
      a = o && t ? n : s;
      break;
    case E.LEFT:
      a = !o && t ? n : s;
      break;
    case E.END:
      return (r, i) => i.max;
    case E.HOME:
      return (r, i) => i.min;
    case E.PAGE_UP:
      return (r, i) => r + i.step * 2;
    case E.PAGE_DOWN:
      return (r, i) => r - i.step * 2;
    default:
      return;
  }
  return (r, i) => qe(a, r, i);
}
var Ze = function(e, o) {
  var t = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && o.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, n = Object.getOwnPropertySymbols(e); s < n.length; s++)
      o.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[s]) && (t[n[s]] = e[n[s]]);
  return t;
};
function R() {
}
function Se(e) {
  const o = {
    id: String,
    min: Number,
    max: Number,
    step: Number,
    marks: g.object,
    included: {
      type: Boolean,
      default: void 0
    },
    prefixCls: String,
    disabled: {
      type: Boolean,
      default: void 0
    },
    handle: Function,
    dots: {
      type: Boolean,
      default: void 0
    },
    vertical: {
      type: Boolean,
      default: void 0
    },
    reverse: {
      type: Boolean,
      default: void 0
    },
    minimumTrackStyle: g.object,
    maximumTrackStyle: g.object,
    handleStyle: g.oneOfType([g.object, g.arrayOf(g.object)]),
    trackStyle: g.oneOfType([g.object, g.arrayOf(g.object)]),
    railStyle: g.object,
    dotStyle: g.object,
    activeDotStyle: g.object,
    autofocus: {
      type: Boolean,
      default: void 0
    },
    draggableTrack: {
      type: Boolean,
      default: void 0
    }
  };
  return z({
    compatConfig: {
      MODE: 3
    },
    name: "CreateSlider",
    mixins: [J, e],
    inheritAttrs: !1,
    props: he(o, {
      prefixCls: "rc-slider",
      min: 0,
      max: 100,
      step: 1,
      marks: {},
      included: !0,
      disabled: !1,
      dots: !1,
      vertical: !1,
      reverse: !1,
      trackStyle: [{}],
      handleStyle: [{}],
      railStyle: {},
      dotStyle: {},
      activeDotStyle: {}
    }),
    emits: ["change", "blur", "focus"],
    data() {
      const {
        step: t,
        max: n,
        min: s
      } = this, a = isFinite(n - s) ? (n - s) % t === 0 : !0;
      return de(t && Math.floor(t) === t ? a : !0, `Slider[max] - Slider[min] (${n - s}) should be a multiple of Slider[step] (${t})`), this.handlesRefs = {}, {};
    },
    mounted() {
      this.$nextTick(() => {
        this.document = this.sliderRef && this.sliderRef.ownerDocument;
        const {
          autofocus: t,
          disabled: n
        } = this;
        t && !n && this.focus();
      });
    },
    beforeUnmount() {
      this.$nextTick(() => {
        this.removeDocumentEvents();
      });
    },
    methods: {
      defaultHandle(t) {
        var {
          index: n,
          directives: s,
          className: a,
          style: r
        } = t, i = Ze(t, ["index", "directives", "className", "style"]);
        if (delete i.dragging, i.value === null)
          return null;
        const l = f(f({}, i), {
          class: a,
          style: r,
          key: n
        });
        return B(me, l, null);
      },
      onDown(t, n) {
        let s = n;
        const {
          draggableTrack: a,
          vertical: r
        } = this.$props, {
          bounds: i
        } = this.$data, l = a && this.positionGetValue ? this.positionGetValue(s) || [] : [], u = X(t, this.handlesRefs);
        if (this.dragTrack = a && i.length >= 2 && !u && !l.map((d, m) => {
          const b = m ? !0 : d >= i[m];
          return m === l.length - 1 ? d <= i[m] : b;
        }).some((d) => !d), this.dragTrack)
          this.dragOffset = s, this.startBounds = [...i];
        else {
          if (!u)
            this.dragOffset = 0;
          else {
            const d = re(r, t.target);
            this.dragOffset = s - d, s = d;
          }
          this.onStart(s);
        }
      },
      onMouseDown(t) {
        if (t.button !== 0)
          return;
        this.removeDocumentEvents();
        const n = this.$props.vertical, s = se(n, t);
        this.onDown(t, s), this.addDocumentMouseEvents();
      },
      onTouchStart(t) {
        if (ne(t))
          return;
        const n = this.vertical, s = ae(n, t);
        this.onDown(t, s), this.addDocumentTouchEvents(), I(t);
      },
      onFocus(t) {
        const {
          vertical: n
        } = this;
        if (X(t, this.handlesRefs) && !this.dragTrack) {
          const s = re(n, t.target);
          this.dragOffset = 0, this.onStart(s), I(t), this.$emit("focus", t);
        }
      },
      onBlur(t) {
        this.dragTrack || this.onEnd(), this.$emit("blur", t);
      },
      onMouseUp() {
        this.handlesRefs[this.prevMovedHandleIndex] && this.handlesRefs[this.prevMovedHandleIndex].clickFocus();
      },
      onMouseMove(t) {
        if (!this.sliderRef) {
          this.onEnd();
          return;
        }
        const n = se(this.vertical, t);
        this.onMove(t, n - this.dragOffset, this.dragTrack, this.startBounds);
      },
      onTouchMove(t) {
        if (ne(t) || !this.sliderRef) {
          this.onEnd();
          return;
        }
        const n = ae(this.vertical, t);
        this.onMove(t, n - this.dragOffset, this.dragTrack, this.startBounds);
      },
      onKeyDown(t) {
        this.sliderRef && X(t, this.handlesRefs) && this.onKeyboard(t);
      },
      onClickMarkLabel(t, n) {
        t.stopPropagation(), this.onChange({
          sValue: n
        }), this.setState({
          sValue: n
        }, () => this.onEnd(!0));
      },
      getSliderStart() {
        const t = this.sliderRef, {
          vertical: n,
          reverse: s
        } = this, a = t.getBoundingClientRect();
        return n ? s ? a.bottom : a.top : window.scrollX + (s ? a.right : a.left);
      },
      getSliderLength() {
        const t = this.sliderRef;
        if (!t)
          return 0;
        const n = t.getBoundingClientRect();
        return this.vertical ? n.height : n.width;
      },
      addDocumentTouchEvents() {
        this.onTouchMoveListener = G(this.document, "touchmove", this.onTouchMove), this.onTouchUpListener = G(this.document, "touchend", this.onEnd);
      },
      addDocumentMouseEvents() {
        this.onMouseMoveListener = G(this.document, "mousemove", this.onMouseMove), this.onMouseUpListener = G(this.document, "mouseup", this.onEnd);
      },
      removeDocumentEvents() {
        this.onTouchMoveListener && this.onTouchMoveListener.remove(), this.onTouchUpListener && this.onTouchUpListener.remove(), this.onMouseMoveListener && this.onMouseMoveListener.remove(), this.onMouseUpListener && this.onMouseUpListener.remove();
      },
      focus() {
        var t;
        this.$props.disabled || (t = this.handlesRefs[0]) === null || t === void 0 || t.focus();
      },
      blur() {
        this.$props.disabled || Object.keys(this.handlesRefs).forEach((t) => {
          var n, s;
          (s = (n = this.handlesRefs[t]) === null || n === void 0 ? void 0 : n.blur) === null || s === void 0 || s.call(n);
        });
      },
      calcValue(t) {
        const {
          vertical: n,
          min: s,
          max: a
        } = this, r = Math.abs(Math.max(t, 0) / this.getSliderLength());
        return n ? (1 - r) * (a - s) + s : r * (a - s) + s;
      },
      calcValueByPos(t) {
        const s = (this.reverse ? -1 : 1) * (t - this.getSliderStart());
        return this.trimAlignValue(this.calcValue(s));
      },
      calcOffset(t) {
        const {
          min: n,
          max: s
        } = this, a = (t - n) / (s - n);
        return Math.max(0, a * 100);
      },
      saveSlider(t) {
        this.sliderRef = t;
      },
      saveHandle(t, n) {
        this.handlesRefs[t] = n;
      }
    },
    render() {
      const {
        prefixCls: t,
        marks: n,
        dots: s,
        step: a,
        included: r,
        disabled: i,
        vertical: l,
        reverse: u,
        min: d,
        max: m,
        maximumTrackStyle: b,
        railStyle: C,
        dotStyle: y,
        activeDotStyle: M,
        id: h
      } = this, {
        class: S,
        style: c
      } = this.$attrs, {
        tracks: $,
        handles: w
      } = this.renderSlider(), x = j(t, S, {
        [`${t}-with-marks`]: Object.keys(n).length,
        [`${t}-disabled`]: i,
        [`${t}-vertical`]: l,
        [`${t}-horizontal`]: !l
      }), v = {
        vertical: l,
        marks: n,
        included: r,
        lowerBound: this.getLowerBound(),
        upperBound: this.getUpperBound(),
        max: m,
        min: d,
        reverse: u,
        class: `${t}-mark`,
        onClickLabel: i ? R : this.onClickMarkLabel
      }, p = {
        [ce ? "onTouchstartPassive" : "onTouchstart"]: i ? R : this.onTouchStart
      };
      return B("div", T(T({
        id: h,
        ref: this.saveSlider,
        tabindex: "-1",
        class: x
      }, p), {}, {
        onMousedown: i ? R : this.onMouseDown,
        onMouseup: i ? R : this.onMouseUp,
        onKeydown: i ? R : this.onKeyDown,
        onFocus: i ? R : this.onFocus,
        onBlur: i ? R : this.onBlur,
        style: c
      }), [B("div", {
        class: `${t}-rail`,
        style: f(f({}, b), C)
      }, null), $, B(fe, {
        prefixCls: t,
        vertical: l,
        reverse: u,
        marks: n,
        dots: s,
        step: a,
        included: r,
        lowerBound: this.getLowerBound(),
        upperBound: this.getUpperBound(),
        max: m,
        min: d,
        dotStyle: y,
        activeDotStyle: M
      }, null), w, B(pe, v, {
        mark: this.$slots.mark
      }), De(this)]);
    }
  });
}
const et = z({
  compatConfig: {
    MODE: 3
  },
  name: "Slider",
  mixins: [J],
  inheritAttrs: !1,
  props: {
    defaultValue: Number,
    value: Number,
    disabled: {
      type: Boolean,
      default: void 0
    },
    autofocus: {
      type: Boolean,
      default: void 0
    },
    tabindex: g.oneOfType([g.number, g.string]),
    reverse: {
      type: Boolean,
      default: void 0
    },
    min: Number,
    max: Number,
    ariaLabelForHandle: String,
    ariaLabelledByForHandle: String,
    ariaValueTextFormatterForHandle: String,
    startPoint: Number
  },
  emits: ["beforeChange", "afterChange", "change"],
  data() {
    const e = this.defaultValue !== void 0 ? this.defaultValue : this.min, o = this.value !== void 0 ? this.value : e;
    return {
      sValue: this.trimAlignValue(o),
      dragging: !1
    };
  },
  watch: {
    value: {
      handler(e) {
        this.setChangeValue(e);
      },
      deep: !0
    },
    min() {
      const {
        sValue: e
      } = this;
      this.setChangeValue(e);
    },
    max() {
      const {
        sValue: e
      } = this;
      this.setChangeValue(e);
    }
  },
  methods: {
    setChangeValue(e) {
      const o = e !== void 0 ? e : this.sValue, t = this.trimAlignValue(o, this.$props);
      t !== this.sValue && (this.setState({
        sValue: t
      }), ge(o, this.$props) && this.$emit("change", t));
    },
    onChange(e) {
      const o = !Y(this, "value"), t = e.sValue > this.max ? f(f({}, e), {
        sValue: this.max
      }) : e;
      o && this.setState(t);
      const n = t.sValue;
      this.$emit("change", n);
    },
    onStart(e) {
      this.setState({
        dragging: !0
      });
      const {
        sValue: o
      } = this;
      this.$emit("beforeChange", o);
      const t = this.calcValueByPos(e);
      this.startValue = t, this.startPosition = e, t !== o && (this.prevMovedHandleIndex = 0, this.onChange({
        sValue: t
      }));
    },
    onEnd(e) {
      const {
        dragging: o
      } = this;
      this.removeDocumentEvents(), (o || e) && this.$emit("afterChange", this.sValue), this.setState({
        dragging: !1
      });
    },
    onMove(e, o) {
      I(e);
      const {
        sValue: t
      } = this, n = this.calcValueByPos(o);
      n !== t && this.onChange({
        sValue: n
      });
    },
    onKeyboard(e) {
      const {
        reverse: o,
        vertical: t
      } = this.$props, n = ye(e, t, o);
      if (n) {
        I(e);
        const {
          sValue: s
        } = this, a = n(s, this.$props), r = this.trimAlignValue(a);
        if (r === s)
          return;
        this.onChange({
          sValue: r
        }), this.$emit("afterChange", r), this.onEnd();
      }
    },
    getLowerBound() {
      const e = this.$props.startPoint || this.$props.min;
      return this.$data.sValue > e ? e : this.$data.sValue;
    },
    getUpperBound() {
      return this.$data.sValue < this.$props.startPoint ? this.$props.startPoint : this.$data.sValue;
    },
    trimAlignValue(e) {
      let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (e === null)
        return null;
      const t = f(f({}, this.$props), o), n = q(e, t);
      return be(n, t);
    },
    getTrack(e) {
      let {
        prefixCls: o,
        reverse: t,
        vertical: n,
        included: s,
        minimumTrackStyle: a,
        mergedTrackStyle: r,
        length: i,
        offset: l
      } = e;
      return B(Q, {
        class: `${o}-track`,
        vertical: n,
        included: s,
        offset: l,
        reverse: t,
        length: i,
        style: f(f({}, a), r)
      }, null);
    },
    renderSlider() {
      const {
        prefixCls: e,
        vertical: o,
        included: t,
        disabled: n,
        minimumTrackStyle: s,
        trackStyle: a,
        handleStyle: r,
        tabindex: i,
        ariaLabelForHandle: l,
        ariaLabelledByForHandle: u,
        ariaValueTextFormatterForHandle: d,
        min: m,
        max: b,
        startPoint: C,
        reverse: y,
        handle: M,
        defaultHandle: h
      } = this, S = M || h, {
        sValue: c,
        dragging: $
      } = this, w = this.calcOffset(c), x = S({
        class: `${e}-handle`,
        prefixCls: e,
        vertical: o,
        offset: w,
        value: c,
        dragging: $,
        disabled: n,
        min: m,
        max: b,
        reverse: y,
        index: 0,
        tabindex: i,
        ariaLabel: l,
        ariaLabelledBy: u,
        ariaValueTextFormatter: d,
        style: r[0] || r,
        ref: (V) => this.saveHandle(0, V),
        onFocus: this.onFocus,
        onBlur: this.onBlur
      }), v = C !== void 0 ? this.calcOffset(C) : 0, p = a[0] || a;
      return {
        tracks: this.getTrack({
          prefixCls: e,
          reverse: y,
          vertical: o,
          included: t,
          offset: v,
          minimumTrackStyle: s,
          mergedTrackStyle: p,
          length: w - v
        }),
        handles: x
      };
    }
  }
}), tt = Se(et), W = (e) => {
  let {
    value: o,
    handle: t,
    bounds: n,
    props: s
  } = e;
  const {
    allowCross: a,
    pushable: r
  } = s, i = Number(r), l = q(o, s);
  let u = l;
  return !a && t != null && n !== void 0 && (t > 0 && l <= n[t - 1] + i && (u = n[t - 1] + i), t < n.length - 1 && l >= n[t + 1] - i && (u = n[t + 1] - i)), be(u, s);
}, nt = {
  defaultValue: g.arrayOf(g.number),
  value: g.arrayOf(g.number),
  count: Number,
  pushable: Re(g.oneOfType([g.looseBool, g.number])),
  allowCross: {
    type: Boolean,
    default: void 0
  },
  disabled: {
    type: Boolean,
    default: void 0
  },
  reverse: {
    type: Boolean,
    default: void 0
  },
  tabindex: g.arrayOf(g.number),
  prefixCls: String,
  min: Number,
  max: Number,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  ariaLabelGroupForHandles: Array,
  ariaLabelledByGroupForHandles: Array,
  ariaValueTextFormatterGroupForHandles: Array,
  draggableTrack: {
    type: Boolean,
    default: void 0
  }
}, ot = z({
  compatConfig: {
    MODE: 3
  },
  name: "Range",
  mixins: [J],
  inheritAttrs: !1,
  props: he(nt, {
    count: 1,
    allowCross: !0,
    pushable: !1,
    tabindex: [],
    draggableTrack: !1,
    ariaLabelGroupForHandles: [],
    ariaLabelledByGroupForHandles: [],
    ariaValueTextFormatterGroupForHandles: []
  }),
  emits: ["beforeChange", "afterChange", "change"],
  displayName: "Range",
  data() {
    const {
      count: e,
      min: o,
      max: t
    } = this, n = Array(...Array(e + 1)).map(() => o), s = Y(this, "defaultValue") ? this.defaultValue : n;
    let {
      value: a
    } = this;
    a === void 0 && (a = s);
    const r = a.map((l, u) => W({
      value: l,
      handle: u,
      props: this.$props
    }));
    return {
      sHandle: null,
      recent: r[0] === t ? 0 : r.length - 1,
      bounds: r
    };
  },
  watch: {
    value: {
      handler(e) {
        const {
          bounds: o
        } = this;
        this.setChangeValue(e || o);
      },
      deep: !0
    },
    min() {
      const {
        value: e
      } = this;
      this.setChangeValue(e || this.bounds);
    },
    max() {
      const {
        value: e
      } = this;
      this.setChangeValue(e || this.bounds);
    }
  },
  methods: {
    setChangeValue(e) {
      const {
        bounds: o
      } = this;
      let t = e.map((n, s) => W({
        value: n,
        handle: s,
        bounds: o,
        props: this.$props
      }));
      if (o.length === t.length) {
        if (t.every((n, s) => n === o[s]))
          return null;
      } else
        t = e.map((n, s) => W({
          value: n,
          handle: s,
          props: this.$props
        }));
      if (this.setState({
        bounds: t
      }), e.some((n) => ge(n, this.$props))) {
        const n = e.map((s) => q(s, this.$props));
        this.$emit("change", n);
      }
    },
    onChange(e) {
      if (!Y(this, "value"))
        this.setState(e);
      else {
        const s = {};
        ["sHandle", "recent"].forEach((a) => {
          e[a] !== void 0 && (s[a] = e[a]);
        }), Object.keys(s).length && this.setState(s);
      }
      const n = f(f({}, this.$data), e).bounds;
      this.$emit("change", n);
    },
    positionGetValue(e) {
      const o = this.getValue(), t = this.calcValueByPos(e), n = this.getClosestBound(t), s = this.getBoundNeedMoving(t, n), a = o[s];
      if (t === a)
        return null;
      const r = [...o];
      return r[s] = t, r;
    },
    onStart(e) {
      const {
        bounds: o
      } = this;
      this.$emit("beforeChange", o);
      const t = this.calcValueByPos(e);
      this.startValue = t, this.startPosition = e;
      const n = this.getClosestBound(t);
      this.prevMovedHandleIndex = this.getBoundNeedMoving(t, n), this.setState({
        sHandle: this.prevMovedHandleIndex,
        recent: this.prevMovedHandleIndex
      });
      const s = o[this.prevMovedHandleIndex];
      if (t === s)
        return;
      const a = [...o];
      a[this.prevMovedHandleIndex] = t, this.onChange({
        bounds: a
      });
    },
    onEnd(e) {
      const {
        sHandle: o
      } = this;
      this.removeDocumentEvents(), o || (this.dragTrack = !1), (o !== null || e) && this.$emit("afterChange", this.bounds), this.setState({
        sHandle: null
      });
    },
    onMove(e, o, t, n) {
      I(e);
      const {
        $data: s,
        $props: a
      } = this, r = a.max || 100, i = a.min || 0;
      if (t) {
        let b = a.vertical ? -o : o;
        b = a.reverse ? -b : b;
        const C = r - Math.max(...n), y = i - Math.min(...n), M = Math.min(Math.max(b / (this.getSliderLength() / 100), y), C), h = n.map((S) => Math.floor(Math.max(Math.min(S + M, r), i)));
        s.bounds.map((S, c) => S === h[c]).some((S) => !S) && this.onChange({
          bounds: h
        });
        return;
      }
      const {
        bounds: l,
        sHandle: u
      } = this, d = this.calcValueByPos(o), m = l[u];
      d !== m && this.moveTo(d);
    },
    onKeyboard(e) {
      const {
        reverse: o,
        vertical: t
      } = this.$props, n = ye(e, t, o);
      if (n) {
        I(e);
        const {
          bounds: s,
          sHandle: a
        } = this, r = s[a === null ? this.recent : a], i = n(r, this.$props), l = W({
          value: i,
          handle: a,
          bounds: s,
          props: this.$props
        });
        if (l === r)
          return;
        this.moveTo(l, !0);
      }
    },
    getClosestBound(e) {
      const {
        bounds: o
      } = this;
      let t = 0;
      for (let n = 1; n < o.length - 1; n += 1)
        e >= o[n] && (t = n);
      return Math.abs(o[t + 1] - e) < Math.abs(o[t] - e) && (t += 1), t;
    },
    getBoundNeedMoving(e, o) {
      const {
        bounds: t,
        recent: n
      } = this;
      let s = o;
      const a = t[o + 1] === t[o];
      return a && t[n] === t[o] && (s = n), a && e !== t[o + 1] && (s = e < t[o + 1] ? o : o + 1), s;
    },
    getLowerBound() {
      return this.bounds[0];
    },
    getUpperBound() {
      const {
        bounds: e
      } = this;
      return e[e.length - 1];
    },
    /**
     * Returns an array of possible slider points, taking into account both
     * `marks` and `step`. The result is cached.
     */
    getPoints() {
      const {
        marks: e,
        step: o,
        min: t,
        max: n
      } = this, s = this.internalPointsCache;
      if (!s || s.marks !== e || s.step !== o) {
        const a = f({}, e);
        if (o !== null)
          for (let i = t; i <= n; i += o)
            a[i] = i;
        const r = Object.keys(a).map(parseFloat);
        r.sort((i, l) => i - l), this.internalPointsCache = {
          marks: e,
          step: o,
          points: r
        };
      }
      return this.internalPointsCache.points;
    },
    moveTo(e, o) {
      const t = [...this.bounds], {
        sHandle: n,
        recent: s
      } = this, a = n === null ? s : n;
      t[a] = e;
      let r = a;
      this.$props.pushable !== !1 ? this.pushSurroundingHandles(t, r) : this.$props.allowCross && (t.sort((i, l) => i - l), r = t.indexOf(e)), this.onChange({
        recent: r,
        sHandle: r,
        bounds: t
      }), o && (this.$emit("afterChange", t), this.setState({}, () => {
        this.handlesRefs[r].focus();
      }), this.onEnd());
    },
    pushSurroundingHandles(e, o) {
      const t = e[o], {
        pushable: n
      } = this, s = Number(n);
      let a = 0;
      if (e[o + 1] - t < s && (a = 1), t - e[o - 1] < s && (a = -1), a === 0)
        return;
      const r = o + a, i = a * (e[r] - t);
      this.pushHandle(e, r, a, s - i) || (e[o] = e[r] - a * s);
    },
    pushHandle(e, o, t, n) {
      const s = e[o];
      let a = e[o];
      for (; t * (a - s) < n; ) {
        if (!this.pushHandleOnePoint(e, o, t))
          return e[o] = s, !1;
        a = e[o];
      }
      return !0;
    },
    pushHandleOnePoint(e, o, t) {
      const n = this.getPoints(), a = n.indexOf(e[o]) + t;
      if (a >= n.length || a < 0)
        return !1;
      const r = o + t, i = n[a], {
        pushable: l
      } = this, u = Number(l), d = t * (e[r] - i);
      return this.pushHandle(e, r, t, u - d) ? (e[o] = i, !0) : !1;
    },
    trimAlignValue(e) {
      const {
        sHandle: o,
        bounds: t
      } = this;
      return W({
        value: e,
        handle: o,
        bounds: t,
        props: this.$props
      });
    },
    ensureValueNotConflict(e, o, t) {
      let {
        allowCross: n,
        pushable: s
      } = t;
      const a = this.$data || {}, {
        bounds: r
      } = a;
      if (e = e === void 0 ? a.sHandle : e, s = Number(s), !n && e != null && r !== void 0) {
        if (e > 0 && o <= r[e - 1] + s)
          return r[e - 1] + s;
        if (e < r.length - 1 && o >= r[e + 1] - s)
          return r[e + 1] - s;
      }
      return o;
    },
    getTrack(e) {
      let {
        bounds: o,
        prefixCls: t,
        reverse: n,
        vertical: s,
        included: a,
        offsets: r,
        trackStyle: i
      } = e;
      return o.slice(0, -1).map((l, u) => {
        const d = u + 1, m = j({
          [`${t}-track`]: !0,
          [`${t}-track-${d}`]: !0
        });
        return B(Q, {
          class: m,
          vertical: s,
          reverse: n,
          included: a,
          offset: r[d - 1],
          length: r[d] - r[d - 1],
          style: i[u],
          key: d
        }, null);
      });
    },
    renderSlider() {
      const {
        sHandle: e,
        bounds: o,
        prefixCls: t,
        vertical: n,
        included: s,
        disabled: a,
        min: r,
        max: i,
        reverse: l,
        handle: u,
        defaultHandle: d,
        trackStyle: m,
        handleStyle: b,
        tabindex: C,
        ariaLabelGroupForHandles: y,
        ariaLabelledByGroupForHandles: M,
        ariaValueTextFormatterGroupForHandles: h
      } = this, S = u || d, c = o.map((x) => this.calcOffset(x)), $ = `${t}-handle`, w = o.map((x, v) => {
        let p = C[v] || 0;
        (a || C[v] === null) && (p = null);
        const V = e === v;
        return S({
          class: j({
            [$]: !0,
            [`${$}-${v + 1}`]: !0,
            [`${$}-dragging`]: V
          }),
          prefixCls: t,
          vertical: n,
          dragging: V,
          offset: c[v],
          value: x,
          index: v,
          tabindex: p,
          min: r,
          max: i,
          reverse: l,
          disabled: a,
          style: b[v],
          ref: (H) => this.saveHandle(v, H),
          onFocus: this.onFocus,
          onBlur: this.onBlur,
          ariaLabel: y[v],
          ariaLabelledBy: M[v],
          ariaValueTextFormatter: h[v]
        });
      });
      return {
        tracks: this.getTrack({
          bounds: o,
          prefixCls: t,
          reverse: l,
          vertical: n,
          included: s,
          offsets: c,
          trackStyle: m
        }),
        handles: w
      };
    }
  }
}), st = Se(ot), at = z({
  compatConfig: {
    MODE: 3
  },
  name: "SliderTooltip",
  inheritAttrs: !1,
  props: je(),
  setup(e, o) {
    let {
      attrs: t,
      slots: n
    } = o;
    const s = U(null), a = U(null);
    function r() {
      te.cancel(a.value), a.value = null;
    }
    function i() {
      a.value = te(() => {
        var u;
        (u = s.value) === null || u === void 0 || u.forcePopupAlign(), a.value = null;
      });
    }
    const l = () => {
      r(), e.open && i();
    };
    return we([() => e.open, () => e.title], () => {
      l();
    }, {
      flush: "post",
      immediate: !0
    }), Be(() => {
      l();
    }), le(() => {
      r();
    }), () => B(ze, T(T({
      ref: s
    }, e), t), n);
  }
}), rt = (e) => {
  const {
    componentCls: o,
    controlSize: t,
    dotSize: n,
    marginFull: s,
    marginPart: a,
    colorFillContentHover: r
  } = e;
  return {
    [o]: f(f({}, _e(e)), {
      position: "relative",
      height: t,
      margin: `${a}px ${s}px`,
      padding: 0,
      cursor: "pointer",
      touchAction: "none",
      "&-vertical": {
        margin: `${s}px ${a}px`
      },
      [`${o}-rail`]: {
        position: "absolute",
        backgroundColor: e.colorFillTertiary,
        borderRadius: e.borderRadiusXS,
        transition: `background-color ${e.motionDurationMid}`
      },
      [`${o}-track`]: {
        position: "absolute",
        backgroundColor: e.colorPrimaryBorder,
        borderRadius: e.borderRadiusXS,
        transition: `background-color ${e.motionDurationMid}`
      },
      "&:hover": {
        [`${o}-rail`]: {
          backgroundColor: e.colorFillSecondary
        },
        [`${o}-track`]: {
          backgroundColor: e.colorPrimaryBorderHover
        },
        [`${o}-dot`]: {
          borderColor: r
        },
        [`${o}-handle::after`]: {
          boxShadow: `0 0 0 ${e.handleLineWidth}px ${e.colorPrimaryBorderHover}`
        },
        [`${o}-dot-active`]: {
          borderColor: e.colorPrimary
        }
      },
      [`${o}-handle`]: {
        position: "absolute",
        width: e.handleSize,
        height: e.handleSize,
        outline: "none",
        [`${o}-dragging`]: {
          zIndex: 1
        },
        // 扩大选区
        "&::before": {
          content: '""',
          position: "absolute",
          insetInlineStart: -e.handleLineWidth,
          insetBlockStart: -e.handleLineWidth,
          width: e.handleSize + e.handleLineWidth * 2,
          height: e.handleSize + e.handleLineWidth * 2,
          backgroundColor: "transparent"
        },
        "&::after": {
          content: '""',
          position: "absolute",
          insetBlockStart: 0,
          insetInlineStart: 0,
          width: e.handleSize,
          height: e.handleSize,
          backgroundColor: e.colorBgElevated,
          boxShadow: `0 0 0 ${e.handleLineWidth}px ${e.colorPrimaryBorder}`,
          borderRadius: "50%",
          cursor: "pointer",
          transition: `
            inset-inline-start ${e.motionDurationMid},
            inset-block-start ${e.motionDurationMid},
            width ${e.motionDurationMid},
            height ${e.motionDurationMid},
            box-shadow ${e.motionDurationMid}
          `
        },
        "&:hover, &:active, &:focus": {
          "&::before": {
            insetInlineStart: -((e.handleSizeHover - e.handleSize) / 2 + e.handleLineWidthHover),
            insetBlockStart: -((e.handleSizeHover - e.handleSize) / 2 + e.handleLineWidthHover),
            width: e.handleSizeHover + e.handleLineWidthHover * 2,
            height: e.handleSizeHover + e.handleLineWidthHover * 2
          },
          "&::after": {
            boxShadow: `0 0 0 ${e.handleLineWidthHover}px ${e.colorPrimary}`,
            width: e.handleSizeHover,
            height: e.handleSizeHover,
            insetInlineStart: (e.handleSize - e.handleSizeHover) / 2,
            insetBlockStart: (e.handleSize - e.handleSizeHover) / 2
          }
        }
      },
      [`${o}-mark`]: {
        position: "absolute",
        fontSize: e.fontSize
      },
      [`${o}-mark-text`]: {
        position: "absolute",
        display: "inline-block",
        color: e.colorTextDescription,
        textAlign: "center",
        wordBreak: "keep-all",
        cursor: "pointer",
        userSelect: "none",
        "&-active": {
          color: e.colorText
        }
      },
      [`${o}-step`]: {
        position: "absolute",
        background: "transparent",
        pointerEvents: "none"
      },
      [`${o}-dot`]: {
        position: "absolute",
        width: n,
        height: n,
        backgroundColor: e.colorBgElevated,
        border: `${e.handleLineWidth}px solid ${e.colorBorderSecondary}`,
        borderRadius: "50%",
        cursor: "pointer",
        transition: `border-color ${e.motionDurationSlow}`,
        "&-active": {
          borderColor: e.colorPrimaryBorder
        }
      },
      [`&${o}-disabled`]: {
        cursor: "not-allowed",
        [`${o}-rail`]: {
          backgroundColor: `${e.colorFillSecondary} !important`
        },
        [`${o}-track`]: {
          backgroundColor: `${e.colorTextDisabled} !important`
        },
        [`
          ${o}-dot
        `]: {
          backgroundColor: e.colorBgElevated,
          borderColor: e.colorTextDisabled,
          boxShadow: "none",
          cursor: "not-allowed"
        },
        [`${o}-handle::after`]: {
          backgroundColor: e.colorBgElevated,
          cursor: "not-allowed",
          width: e.handleSize,
          height: e.handleSize,
          boxShadow: `0 0 0 ${e.handleLineWidth}px ${new We(e.colorTextDisabled).onBackground(e.colorBgContainer).toHexString()}`,
          insetInlineStart: 0,
          insetBlockStart: 0
        },
        [`
          ${o}-mark-text,
          ${o}-dot
        `]: {
          cursor: "not-allowed !important"
        }
      }
    })
  };
}, xe = (e, o) => {
  const {
    componentCls: t,
    railSize: n,
    handleSize: s,
    dotSize: a
  } = e, r = o ? "paddingBlock" : "paddingInline", i = o ? "width" : "height", l = o ? "height" : "width", u = o ? "insetBlockStart" : "insetInlineStart", d = o ? "top" : "insetInlineStart";
  return {
    [r]: n,
    [l]: n * 3,
    [`${t}-rail`]: {
      [i]: "100%",
      [l]: n
    },
    [`${t}-track`]: {
      [l]: n
    },
    [`${t}-handle`]: {
      [u]: (n * 3 - s) / 2
    },
    [`${t}-mark`]: {
      // Reset all
      insetInlineStart: 0,
      top: 0,
      [d]: s,
      [i]: "100%"
    },
    [`${t}-step`]: {
      // Reset all
      insetInlineStart: 0,
      top: 0,
      [d]: n,
      [i]: "100%",
      [l]: n
    },
    [`${t}-dot`]: {
      position: "absolute",
      [u]: (n - a) / 2
    }
  };
}, it = (e) => {
  const {
    componentCls: o,
    marginPartWithMark: t
  } = e;
  return {
    [`${o}-horizontal`]: f(f({}, xe(e, !0)), {
      [`&${o}-with-marks`]: {
        marginBottom: t
      }
    })
  };
}, lt = (e) => {
  const {
    componentCls: o
  } = e;
  return {
    [`${o}-vertical`]: f(f({}, xe(e, !1)), {
      height: "100%"
    })
  };
}, ut = Ae("Slider", (e) => {
  const o = Ie(e, {
    marginPart: (e.controlHeight - e.controlSize) / 2,
    marginFull: e.controlSize / 2,
    marginPartWithMark: e.controlHeightLG - e.controlSize
  });
  return [rt(o), it(o), lt(o)];
}, (e) => {
  const t = e.controlHeightLG / 4, n = e.controlHeightSM / 2, s = e.lineWidth + 1, a = e.lineWidth + 1 * 3;
  return {
    controlSize: t,
    railSize: 4,
    handleSize: t,
    handleSizeHover: n,
    dotSize: 8,
    handleLineWidth: s,
    handleLineWidthHover: a
  };
});
var ie = function(e, o) {
  var t = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && o.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, n = Object.getOwnPropertySymbols(e); s < n.length; s++)
      o.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[s]) && (t[n[s]] = e[n[s]]);
  return t;
};
const dt = (e) => typeof e == "number" ? e.toString() : "", ct = () => ({
  id: String,
  prefixCls: String,
  tooltipPrefixCls: String,
  range: D([Boolean, Object]),
  reverse: N(),
  min: Number,
  max: Number,
  step: D([Object, Number]),
  marks: Ye(),
  dots: N(),
  value: D([Array, Number]),
  defaultValue: D([Array, Number]),
  included: N(),
  disabled: N(),
  vertical: N(),
  tipFormatter: D([Function, Object], () => dt),
  tooltipOpen: N(),
  /** @deprecated `tooltipVisible` is deprecated. Please use `tooltipOpen` instead. */
  tooltipVisible: N(),
  tooltipPlacement: Je(),
  getTooltipPopupContainer: A(),
  autofocus: N(),
  handleStyle: D([Array, Object]),
  trackStyle: D([Array, Object]),
  onChange: A(),
  onAfterChange: A(),
  onFocus: A(),
  onBlur: A(),
  "onUpdate:value": A()
}), ht = z({
  compatConfig: {
    MODE: 3
  },
  name: "ASlider",
  inheritAttrs: !1,
  props: ct(),
  // emits: ['update:value', 'change', 'afterChange', 'blur'],
  slots: Object,
  setup(e, o) {
    let {
      attrs: t,
      slots: n,
      emit: s,
      expose: a
    } = o;
    process.env.NODE_ENV !== "production" && [["tooltipVisible", "tooltipOpen"]].forEach((p) => {
      let [V, H] = p;
      Ue(e.tooltipVisible === void 0, "Slider", `\`${V}\` is deprecated, please use \`${H}\` instead.`);
    });
    const {
      prefixCls: r,
      rootPrefixCls: i,
      direction: l,
      getPopupContainer: u,
      configProvider: d
    } = Ke("slider", e), [m, b] = ut(r), C = Xe(), y = U(), M = U({}), h = (p, V) => {
      M.value[p] = V;
    }, S = ue(() => e.tooltipPlacement ? e.tooltipPlacement : e.vertical ? l.value === "rtl" ? "left" : "right" : "top"), c = () => {
      var p;
      (p = y.value) === null || p === void 0 || p.focus();
    }, $ = () => {
      var p;
      (p = y.value) === null || p === void 0 || p.blur();
    }, w = (p) => {
      s("update:value", p), s("change", p), C.onFieldChange();
    }, x = (p) => {
      s("blur", p);
    };
    a({
      focus: c,
      blur: $
    });
    const v = (p) => {
      var {
        tooltipPrefixCls: V
      } = p, H = p.info, {
        value: P,
        dragging: L,
        index: O
      } = H, k = ie(H, ["value", "dragging", "index"]);
      const {
        tipFormatter: F,
        tooltipOpen: _ = e.tooltipVisible,
        getTooltipPopupContainer: K
      } = e, $e = F ? M.value[O] || L : !1, Ce = _ || _ === void 0 && $e;
      return B(at, {
        prefixCls: V,
        title: F ? F(P) : "",
        open: Ce,
        placement: S.value,
        transitionName: `${i.value}-zoom-down`,
        key: O,
        overlayClassName: `${r.value}-tooltip`,
        getPopupContainer: K || (u == null ? void 0 : u.value)
      }, {
        default: () => [B(me, T(T({}, k), {}, {
          value: P,
          onMouseenter: () => h(O, !0),
          onMouseleave: () => h(O, !1)
        }), null)]
      });
    };
    return () => {
      const {
        tooltipPrefixCls: p,
        range: V,
        id: H = C.id.value
      } = e, P = ie(e, ["tooltipPrefixCls", "range", "id"]), L = d.getPrefixCls("tooltip", p), O = j(t.class, {
        [`${r.value}-rtl`]: l.value === "rtl"
      }, b.value);
      l.value === "rtl" && !P.vertical && (P.reverse = !P.reverse);
      let k;
      return typeof V == "object" && (k = V.draggableTrack), m(V ? B(st, T(T(T({}, t), P), {}, {
        step: P.step,
        draggableTrack: k,
        class: O,
        ref: y,
        handle: (F) => v({
          tooltipPrefixCls: L,
          prefixCls: r.value,
          info: F
        }),
        prefixCls: r.value,
        onChange: w,
        onBlur: x
      }), {
        mark: n.mark
      }) : B(tt, T(T(T({}, t), P), {}, {
        id: H,
        step: P.step,
        class: O,
        ref: y,
        handle: (F) => v({
          tooltipPrefixCls: L,
          prefixCls: r.value,
          info: F
        }),
        prefixCls: r.value,
        onChange: w,
        onBlur: x
      }), {
        mark: n.mark
      }));
    };
  }
}), ft = Ge(ht), vt = /* @__PURE__ */ z({
  __name: "Slider",
  setup(e) {
    return (o, t) => (ee(), Me(Pe(ft), Te(He(o.$attrs)), {
      default: Oe(() => [
        (ee(!0), ke(Fe, null, Le(o.$slots, (n, s) => Ne(o.$slots, s, { key: s })), 128))
      ]),
      _: 3
    }, 16));
  }
});
export {
  vt as default
};
