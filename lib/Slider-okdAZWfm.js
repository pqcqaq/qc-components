import { createVNode as B, defineComponent as z, shallowRef as Z, onMounted as Ve, onBeforeUnmount as le, computed as ue, ref as U, watch as we, onActivated as Be, openBlock as ee, createBlock as Me, unref as Pe, normalizeProps as Te, guardReactiveProps as He, withCtx as Oe, createElementBlock as ke, Fragment as Fe, renderList as Le, renderSlot as Ne } from "vue";
import { d as f, h as j, l as de, n as Ee, j as T, s as ce, P as g, o as G, K as N, p as J, i as he, q as De, t as Y, v as Re, x as je, T as ze, y as te, g as Ae, m as Ie, r as _e, z as We, w as Ge, E as Ue, u as Ke, f as Xe, F as D, G as E, H as Ye, J as Je, L as A } from "./index-CE-I3_st.js";
const q = (e, s) => {
  let {
    attrs: t
  } = s;
  const {
    included: n,
    vertical: o,
    style: a,
    class: r
  } = t;
  let {
    length: i,
    offset: l,
    reverse: u
  } = t;
  i < 0 && (u = !u, i = Math.abs(i), l = 100 - l);
  const d = o ? {
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
q.inheritAttrs = !1;
const qe = (e, s, t, n, o, a) => {
  de(t ? n > 0 : !0, "Slider", "`Slider[step]` should be a positive number in order to make Slider[dots] work.");
  const r = Object.keys(s).map(parseFloat).sort((i, l) => i - l);
  if (t && n)
    for (let i = o; i <= a; i += n)
      r.indexOf(i) === -1 && r.push(i);
  return r;
}, fe = (e, s) => {
  let {
    attrs: t
  } = s;
  const {
    prefixCls: n,
    vertical: o,
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
  } = t, h = b - C, S = qe(o, r, i, l, C, b).map((c) => {
    const $ = `${Math.abs(c - C) / h * 100}%`, w = !u && c === m || u && c <= m && c >= d;
    let x = o ? f(f({}, y), {
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
const pe = (e, s) => {
  let {
    attrs: t,
    slots: n
  } = s;
  const {
    class: o,
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
      [`${o}-text`]: !0,
      [`${o}-text-active`]: v
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
    class: o
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
  setup(e, s) {
    let {
      attrs: t,
      emit: n,
      expose: o
    } = s;
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
    o({
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
function X(e, s) {
  try {
    return Object.keys(s).some((t) => e.target === s[t].ref);
  } catch {
    return !1;
  }
}
function ge(e, s) {
  let {
    min: t,
    max: n
  } = s;
  return e < t || e > n;
}
function ne(e) {
  return e.touches.length > 1 || e.type.toLowerCase() === "touchend" && e.touches.length > 0;
}
function se(e, s) {
  let {
    marks: t,
    step: n,
    min: o,
    max: a
  } = s;
  const r = Object.keys(t).map(parseFloat);
  if (n !== null) {
    const l = Math.pow(10, ve(n)), u = Math.floor((a * l - o * l) / (n * l)), d = Math.min((e - o) / n, u), m = Math.round(d) * n + o;
    r.push(m);
  }
  const i = r.map((l) => Math.abs(e - l));
  return r[i.indexOf(Math.min(...i))];
}
function ve(e) {
  const s = e.toString();
  let t = 0;
  return s.indexOf(".") >= 0 && (t = s.length - s.indexOf(".") - 1), t;
}
function oe(e, s) {
  let t = 1;
  return window.visualViewport && (t = +(window.visualViewport.width / document.body.getBoundingClientRect().width).toFixed(2)), (e ? s.clientY : s.pageX) / t;
}
function ae(e, s) {
  let t = 1;
  return window.visualViewport && (t = +(window.visualViewport.width / document.body.getBoundingClientRect().width).toFixed(2)), (e ? s.touches[0].clientY : s.touches[0].pageX) / t;
}
function re(e, s) {
  const t = s.getBoundingClientRect();
  return e ? t.top + t.height * 0.5 : window.scrollX + t.left + t.width * 0.5;
}
function Q(e, s) {
  let {
    max: t,
    min: n
  } = s;
  return e <= n ? n : e >= t ? t : e;
}
function be(e, s) {
  const {
    step: t
  } = s, n = isFinite(se(e, s)) ? se(e, s) : 0;
  return t === null ? n : parseFloat(n.toFixed(ve(t)));
}
function I(e) {
  e.stopPropagation(), e.preventDefault();
}
function Qe(e, s, t) {
  const n = {
    increase: (r, i) => r + i,
    decrease: (r, i) => r - i
  }, o = n[e](Object.keys(t.marks).indexOf(JSON.stringify(s)), 1), a = Object.keys(t.marks)[o];
  return t.step ? n[e](s, t.step) : Object.keys(t.marks).length && t.marks[a] ? t.marks[a] : s;
}
function ye(e, s, t) {
  const n = "increase", o = "decrease";
  let a = n;
  switch (e.keyCode) {
    case N.UP:
      a = s && t ? o : n;
      break;
    case N.RIGHT:
      a = !s && t ? o : n;
      break;
    case N.DOWN:
      a = s && t ? n : o;
      break;
    case N.LEFT:
      a = !s && t ? n : o;
      break;
    case N.END:
      return (r, i) => i.max;
    case N.HOME:
      return (r, i) => i.min;
    case N.PAGE_UP:
      return (r, i) => r + i.step * 2;
    case N.PAGE_DOWN:
      return (r, i) => r - i.step * 2;
    default:
      return;
  }
  return (r, i) => Qe(a, r, i);
}
var Ze = function(e, s) {
  var t = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && s.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      s.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (t[n[o]] = e[n[o]]);
  return t;
};
function R() {
}
function Se(e) {
  const s = {
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
    props: he(s, {
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
        min: o
      } = this, a = isFinite(n - o) ? (n - o) % t === 0 : !0;
      return de(t && Math.floor(t) === t ? a : !0, `Slider[max] - Slider[min] (${n - o}) should be a multiple of Slider[step] (${t})`), this.handlesRefs = {}, {};
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
          directives: o,
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
        let o = n;
        const {
          draggableTrack: a,
          vertical: r
        } = this.$props, {
          bounds: i
        } = this.$data, l = a && this.positionGetValue ? this.positionGetValue(o) || [] : [], u = X(t, this.handlesRefs);
        if (this.dragTrack = a && i.length >= 2 && !u && !l.map((d, m) => {
          const b = m ? !0 : d >= i[m];
          return m === l.length - 1 ? d <= i[m] : b;
        }).some((d) => !d), this.dragTrack)
          this.dragOffset = o, this.startBounds = [...i];
        else {
          if (!u)
            this.dragOffset = 0;
          else {
            const d = re(r, t.target);
            this.dragOffset = o - d, o = d;
          }
          this.onStart(o);
        }
      },
      onMouseDown(t) {
        if (t.button !== 0)
          return;
        this.removeDocumentEvents();
        const n = this.$props.vertical, o = oe(n, t);
        this.onDown(t, o), this.addDocumentMouseEvents();
      },
      onTouchStart(t) {
        if (ne(t))
          return;
        const n = this.vertical, o = ae(n, t);
        this.onDown(t, o), this.addDocumentTouchEvents(), I(t);
      },
      onFocus(t) {
        const {
          vertical: n
        } = this;
        if (X(t, this.handlesRefs) && !this.dragTrack) {
          const o = re(n, t.target);
          this.dragOffset = 0, this.onStart(o), I(t), this.$emit("focus", t);
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
        const n = oe(this.vertical, t);
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
          reverse: o
        } = this, a = t.getBoundingClientRect();
        return n ? o ? a.bottom : a.top : window.scrollX + (o ? a.right : a.left);
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
          var n, o;
          (o = (n = this.handlesRefs[t]) === null || n === void 0 ? void 0 : n.blur) === null || o === void 0 || o.call(n);
        });
      },
      calcValue(t) {
        const {
          vertical: n,
          min: o,
          max: a
        } = this, r = Math.abs(Math.max(t, 0) / this.getSliderLength());
        return n ? (1 - r) * (a - o) + o : r * (a - o) + o;
      },
      calcValueByPos(t) {
        const o = (this.reverse ? -1 : 1) * (t - this.getSliderStart());
        return this.trimAlignValue(this.calcValue(o));
      },
      calcOffset(t) {
        const {
          min: n,
          max: o
        } = this, a = (t - n) / (o - n);
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
        dots: o,
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
        dots: o,
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
    const e = this.defaultValue !== void 0 ? this.defaultValue : this.min, s = this.value !== void 0 ? this.value : e;
    return {
      sValue: this.trimAlignValue(s),
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
      const s = e !== void 0 ? e : this.sValue, t = this.trimAlignValue(s, this.$props);
      t !== this.sValue && (this.setState({
        sValue: t
      }), ge(s, this.$props) && this.$emit("change", t));
    },
    onChange(e) {
      const s = !Y(this, "value"), t = e.sValue > this.max ? f(f({}, e), {
        sValue: this.max
      }) : e;
      s && this.setState(t);
      const n = t.sValue;
      this.$emit("change", n);
    },
    onStart(e) {
      this.setState({
        dragging: !0
      });
      const {
        sValue: s
      } = this;
      this.$emit("beforeChange", s);
      const t = this.calcValueByPos(e);
      this.startValue = t, this.startPosition = e, t !== s && (this.prevMovedHandleIndex = 0, this.onChange({
        sValue: t
      }));
    },
    onEnd(e) {
      const {
        dragging: s
      } = this;
      this.removeDocumentEvents(), (s || e) && this.$emit("afterChange", this.sValue), this.setState({
        dragging: !1
      });
    },
    onMove(e, s) {
      I(e);
      const {
        sValue: t
      } = this, n = this.calcValueByPos(s);
      n !== t && this.onChange({
        sValue: n
      });
    },
    onKeyboard(e) {
      const {
        reverse: s,
        vertical: t
      } = this.$props, n = ye(e, t, s);
      if (n) {
        I(e);
        const {
          sValue: o
        } = this, a = n(o, this.$props), r = this.trimAlignValue(a);
        if (r === o)
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
      let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (e === null)
        return null;
      const t = f(f({}, this.$props), s), n = Q(e, t);
      return be(n, t);
    },
    getTrack(e) {
      let {
        prefixCls: s,
        reverse: t,
        vertical: n,
        included: o,
        minimumTrackStyle: a,
        mergedTrackStyle: r,
        length: i,
        offset: l
      } = e;
      return B(q, {
        class: `${s}-track`,
        vertical: n,
        included: o,
        offset: l,
        reverse: t,
        length: i,
        style: f(f({}, a), r)
      }, null);
    },
    renderSlider() {
      const {
        prefixCls: e,
        vertical: s,
        included: t,
        disabled: n,
        minimumTrackStyle: o,
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
        vertical: s,
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
          vertical: s,
          included: t,
          offset: v,
          minimumTrackStyle: o,
          mergedTrackStyle: p,
          length: w - v
        }),
        handles: x
      };
    }
  }
}), tt = Se(et), W = (e) => {
  let {
    value: s,
    handle: t,
    bounds: n,
    props: o
  } = e;
  const {
    allowCross: a,
    pushable: r
  } = o, i = Number(r), l = Q(s, o);
  let u = l;
  return !a && t != null && n !== void 0 && (t > 0 && l <= n[t - 1] + i && (u = n[t - 1] + i), t < n.length - 1 && l >= n[t + 1] - i && (u = n[t + 1] - i)), be(u, o);
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
}, st = z({
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
      min: s,
      max: t
    } = this, n = Array(...Array(e + 1)).map(() => s), o = Y(this, "defaultValue") ? this.defaultValue : n;
    let {
      value: a
    } = this;
    a === void 0 && (a = o);
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
          bounds: s
        } = this;
        this.setChangeValue(e || s);
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
        bounds: s
      } = this;
      let t = e.map((n, o) => W({
        value: n,
        handle: o,
        bounds: s,
        props: this.$props
      }));
      if (s.length === t.length) {
        if (t.every((n, o) => n === s[o]))
          return null;
      } else
        t = e.map((n, o) => W({
          value: n,
          handle: o,
          props: this.$props
        }));
      if (this.setState({
        bounds: t
      }), e.some((n) => ge(n, this.$props))) {
        const n = e.map((o) => Q(o, this.$props));
        this.$emit("change", n);
      }
    },
    onChange(e) {
      if (!Y(this, "value"))
        this.setState(e);
      else {
        const o = {};
        ["sHandle", "recent"].forEach((a) => {
          e[a] !== void 0 && (o[a] = e[a]);
        }), Object.keys(o).length && this.setState(o);
      }
      const n = f(f({}, this.$data), e).bounds;
      this.$emit("change", n);
    },
    positionGetValue(e) {
      const s = this.getValue(), t = this.calcValueByPos(e), n = this.getClosestBound(t), o = this.getBoundNeedMoving(t, n), a = s[o];
      if (t === a)
        return null;
      const r = [...s];
      return r[o] = t, r;
    },
    onStart(e) {
      const {
        bounds: s
      } = this;
      this.$emit("beforeChange", s);
      const t = this.calcValueByPos(e);
      this.startValue = t, this.startPosition = e;
      const n = this.getClosestBound(t);
      this.prevMovedHandleIndex = this.getBoundNeedMoving(t, n), this.setState({
        sHandle: this.prevMovedHandleIndex,
        recent: this.prevMovedHandleIndex
      });
      const o = s[this.prevMovedHandleIndex];
      if (t === o)
        return;
      const a = [...s];
      a[this.prevMovedHandleIndex] = t, this.onChange({
        bounds: a
      });
    },
    onEnd(e) {
      const {
        sHandle: s
      } = this;
      this.removeDocumentEvents(), s || (this.dragTrack = !1), (s !== null || e) && this.$emit("afterChange", this.bounds), this.setState({
        sHandle: null
      });
    },
    onMove(e, s, t, n) {
      I(e);
      const {
        $data: o,
        $props: a
      } = this, r = a.max || 100, i = a.min || 0;
      if (t) {
        let b = a.vertical ? -s : s;
        b = a.reverse ? -b : b;
        const C = r - Math.max(...n), y = i - Math.min(...n), M = Math.min(Math.max(b / (this.getSliderLength() / 100), y), C), h = n.map((S) => Math.floor(Math.max(Math.min(S + M, r), i)));
        o.bounds.map((S, c) => S === h[c]).some((S) => !S) && this.onChange({
          bounds: h
        });
        return;
      }
      const {
        bounds: l,
        sHandle: u
      } = this, d = this.calcValueByPos(s), m = l[u];
      d !== m && this.moveTo(d);
    },
    onKeyboard(e) {
      const {
        reverse: s,
        vertical: t
      } = this.$props, n = ye(e, t, s);
      if (n) {
        I(e);
        const {
          bounds: o,
          sHandle: a
        } = this, r = o[a === null ? this.recent : a], i = n(r, this.$props), l = W({
          value: i,
          handle: a,
          bounds: o,
          props: this.$props
        });
        if (l === r)
          return;
        this.moveTo(l, !0);
      }
    },
    getClosestBound(e) {
      const {
        bounds: s
      } = this;
      let t = 0;
      for (let n = 1; n < s.length - 1; n += 1)
        e >= s[n] && (t = n);
      return Math.abs(s[t + 1] - e) < Math.abs(s[t] - e) && (t += 1), t;
    },
    getBoundNeedMoving(e, s) {
      const {
        bounds: t,
        recent: n
      } = this;
      let o = s;
      const a = t[s + 1] === t[s];
      return a && t[n] === t[s] && (o = n), a && e !== t[s + 1] && (o = e < t[s + 1] ? s : s + 1), o;
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
        step: s,
        min: t,
        max: n
      } = this, o = this.internalPointsCache;
      if (!o || o.marks !== e || o.step !== s) {
        const a = f({}, e);
        if (s !== null)
          for (let i = t; i <= n; i += s)
            a[i] = i;
        const r = Object.keys(a).map(parseFloat);
        r.sort((i, l) => i - l), this.internalPointsCache = {
          marks: e,
          step: s,
          points: r
        };
      }
      return this.internalPointsCache.points;
    },
    moveTo(e, s) {
      const t = [...this.bounds], {
        sHandle: n,
        recent: o
      } = this, a = n === null ? o : n;
      t[a] = e;
      let r = a;
      this.$props.pushable !== !1 ? this.pushSurroundingHandles(t, r) : this.$props.allowCross && (t.sort((i, l) => i - l), r = t.indexOf(e)), this.onChange({
        recent: r,
        sHandle: r,
        bounds: t
      }), s && (this.$emit("afterChange", t), this.setState({}, () => {
        this.handlesRefs[r].focus();
      }), this.onEnd());
    },
    pushSurroundingHandles(e, s) {
      const t = e[s], {
        pushable: n
      } = this, o = Number(n);
      let a = 0;
      if (e[s + 1] - t < o && (a = 1), t - e[s - 1] < o && (a = -1), a === 0)
        return;
      const r = s + a, i = a * (e[r] - t);
      this.pushHandle(e, r, a, o - i) || (e[s] = e[r] - a * o);
    },
    pushHandle(e, s, t, n) {
      const o = e[s];
      let a = e[s];
      for (; t * (a - o) < n; ) {
        if (!this.pushHandleOnePoint(e, s, t))
          return e[s] = o, !1;
        a = e[s];
      }
      return !0;
    },
    pushHandleOnePoint(e, s, t) {
      const n = this.getPoints(), a = n.indexOf(e[s]) + t;
      if (a >= n.length || a < 0)
        return !1;
      const r = s + t, i = n[a], {
        pushable: l
      } = this, u = Number(l), d = t * (e[r] - i);
      return this.pushHandle(e, r, t, u - d) ? (e[s] = i, !0) : !1;
    },
    trimAlignValue(e) {
      const {
        sHandle: s,
        bounds: t
      } = this;
      return W({
        value: e,
        handle: s,
        bounds: t,
        props: this.$props
      });
    },
    ensureValueNotConflict(e, s, t) {
      let {
        allowCross: n,
        pushable: o
      } = t;
      const a = this.$data || {}, {
        bounds: r
      } = a;
      if (e = e === void 0 ? a.sHandle : e, o = Number(o), !n && e != null && r !== void 0) {
        if (e > 0 && s <= r[e - 1] + o)
          return r[e - 1] + o;
        if (e < r.length - 1 && s >= r[e + 1] - o)
          return r[e + 1] - o;
      }
      return s;
    },
    getTrack(e) {
      let {
        bounds: s,
        prefixCls: t,
        reverse: n,
        vertical: o,
        included: a,
        offsets: r,
        trackStyle: i
      } = e;
      return s.slice(0, -1).map((l, u) => {
        const d = u + 1, m = j({
          [`${t}-track`]: !0,
          [`${t}-track-${d}`]: !0
        });
        return B(q, {
          class: m,
          vertical: o,
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
        bounds: s,
        prefixCls: t,
        vertical: n,
        included: o,
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
      } = this, S = u || d, c = s.map((x) => this.calcOffset(x)), $ = `${t}-handle`, w = s.map((x, v) => {
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
          bounds: s,
          prefixCls: t,
          reverse: l,
          vertical: n,
          included: o,
          offsets: c,
          trackStyle: m
        }),
        handles: w
      };
    }
  }
}), ot = Se(st), at = z({
  compatConfig: {
    MODE: 3
  },
  name: "SliderTooltip",
  inheritAttrs: !1,
  props: je(),
  setup(e, s) {
    let {
      attrs: t,
      slots: n
    } = s;
    const o = U(null), a = U(null);
    function r() {
      te.cancel(a.value), a.value = null;
    }
    function i() {
      a.value = te(() => {
        var u;
        (u = o.value) === null || u === void 0 || u.forcePopupAlign(), a.value = null;
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
      ref: o
    }, e), t), n);
  }
}), rt = (e) => {
  const {
    componentCls: s,
    controlSize: t,
    dotSize: n,
    marginFull: o,
    marginPart: a,
    colorFillContentHover: r
  } = e;
  return {
    [s]: f(f({}, _e(e)), {
      position: "relative",
      height: t,
      margin: `${a}px ${o}px`,
      padding: 0,
      cursor: "pointer",
      touchAction: "none",
      "&-vertical": {
        margin: `${o}px ${a}px`
      },
      [`${s}-rail`]: {
        position: "absolute",
        backgroundColor: e.colorFillTertiary,
        borderRadius: e.borderRadiusXS,
        transition: `background-color ${e.motionDurationMid}`
      },
      [`${s}-track`]: {
        position: "absolute",
        backgroundColor: e.colorPrimaryBorder,
        borderRadius: e.borderRadiusXS,
        transition: `background-color ${e.motionDurationMid}`
      },
      "&:hover": {
        [`${s}-rail`]: {
          backgroundColor: e.colorFillSecondary
        },
        [`${s}-track`]: {
          backgroundColor: e.colorPrimaryBorderHover
        },
        [`${s}-dot`]: {
          borderColor: r
        },
        [`${s}-handle::after`]: {
          boxShadow: `0 0 0 ${e.handleLineWidth}px ${e.colorPrimaryBorderHover}`
        },
        [`${s}-dot-active`]: {
          borderColor: e.colorPrimary
        }
      },
      [`${s}-handle`]: {
        position: "absolute",
        width: e.handleSize,
        height: e.handleSize,
        outline: "none",
        [`${s}-dragging`]: {
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
      [`${s}-mark`]: {
        position: "absolute",
        fontSize: e.fontSize
      },
      [`${s}-mark-text`]: {
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
      [`${s}-step`]: {
        position: "absolute",
        background: "transparent",
        pointerEvents: "none"
      },
      [`${s}-dot`]: {
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
      [`&${s}-disabled`]: {
        cursor: "not-allowed",
        [`${s}-rail`]: {
          backgroundColor: `${e.colorFillSecondary} !important`
        },
        [`${s}-track`]: {
          backgroundColor: `${e.colorTextDisabled} !important`
        },
        [`
          ${s}-dot
        `]: {
          backgroundColor: e.colorBgElevated,
          borderColor: e.colorTextDisabled,
          boxShadow: "none",
          cursor: "not-allowed"
        },
        [`${s}-handle::after`]: {
          backgroundColor: e.colorBgElevated,
          cursor: "not-allowed",
          width: e.handleSize,
          height: e.handleSize,
          boxShadow: `0 0 0 ${e.handleLineWidth}px ${new We(e.colorTextDisabled).onBackground(e.colorBgContainer).toHexString()}`,
          insetInlineStart: 0,
          insetBlockStart: 0
        },
        [`
          ${s}-mark-text,
          ${s}-dot
        `]: {
          cursor: "not-allowed !important"
        }
      }
    })
  };
}, xe = (e, s) => {
  const {
    componentCls: t,
    railSize: n,
    handleSize: o,
    dotSize: a
  } = e, r = s ? "paddingBlock" : "paddingInline", i = s ? "width" : "height", l = s ? "height" : "width", u = s ? "insetBlockStart" : "insetInlineStart", d = s ? "top" : "insetInlineStart";
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
      [u]: (n * 3 - o) / 2
    },
    [`${t}-mark`]: {
      // Reset all
      insetInlineStart: 0,
      top: 0,
      [d]: o,
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
    componentCls: s,
    marginPartWithMark: t
  } = e;
  return {
    [`${s}-horizontal`]: f(f({}, xe(e, !0)), {
      [`&${s}-with-marks`]: {
        marginBottom: t
      }
    })
  };
}, lt = (e) => {
  const {
    componentCls: s
  } = e;
  return {
    [`${s}-vertical`]: f(f({}, xe(e, !1)), {
      height: "100%"
    })
  };
}, ut = Ae("Slider", (e) => {
  const s = Ie(e, {
    marginPart: (e.controlHeight - e.controlSize) / 2,
    marginFull: e.controlSize / 2,
    marginPartWithMark: e.controlHeightLG - e.controlSize
  });
  return [rt(s), it(s), lt(s)];
}, (e) => {
  const t = e.controlHeightLG / 4, n = e.controlHeightSM / 2, o = e.lineWidth + 1, a = e.lineWidth + 1 * 3;
  return {
    controlSize: t,
    railSize: 4,
    handleSize: t,
    handleSizeHover: n,
    dotSize: 8,
    handleLineWidth: o,
    handleLineWidthHover: a
  };
});
var ie = function(e, s) {
  var t = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && s.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      s.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (t[n[o]] = e[n[o]]);
  return t;
};
const dt = (e) => typeof e == "number" ? e.toString() : "", ct = () => ({
  id: String,
  prefixCls: String,
  tooltipPrefixCls: String,
  range: D([Boolean, Object]),
  reverse: E(),
  min: Number,
  max: Number,
  step: D([Object, Number]),
  marks: Ye(),
  dots: E(),
  value: D([Array, Number]),
  defaultValue: D([Array, Number]),
  included: E(),
  disabled: E(),
  vertical: E(),
  tipFormatter: D([Function, Object], () => dt),
  tooltipOpen: E(),
  /** @deprecated `tooltipVisible` is deprecated. Please use `tooltipOpen` instead. */
  tooltipVisible: E(),
  tooltipPlacement: Je(),
  getTooltipPopupContainer: A(),
  autofocus: E(),
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
  setup(e, s) {
    let {
      attrs: t,
      slots: n,
      emit: o,
      expose: a
    } = s;
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
      o("update:value", p), o("change", p), C.onFieldChange();
    }, x = (p) => {
      o("blur", p);
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
      return typeof V == "object" && (k = V.draggableTrack), m(V ? B(ot, T(T(T({}, t), P), {}, {
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
}), ft = Ge(ht), gt = /* @__PURE__ */ z({
  __name: "Slider",
  setup(e) {
    return (s, t) => (ee(), Me(Pe(ft), Te(He(s.$attrs)), {
      default: Oe(() => [
        (ee(!0), ke(Fe, null, Le(s.$slots, (n, o) => Ne(s.$slots, o, { key: o })), 128))
      ]),
      _: 3
    }, 16));
  }
});
export {
  gt as default
};
