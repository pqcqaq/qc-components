import { createVNode as w, defineComponent as z, shallowRef as Z, onMounted as Ve, onBeforeUnmount as le, computed as ue, ref as U, watch as Be, onActivated as we, openBlock as ee, createBlock as Me, unref as Pe, normalizeProps as Te, guardReactiveProps as He, withCtx as Oe, createElementBlock as ke, Fragment as Fe, renderList as Le, renderSlot as Ne } from "vue";
import { _ as f, g as j, w as de, n as Ee, h as T, o as ce, P as g, p as G, B as q, k as he, q as De, t as Y, v as Re, x as je, T as ze, y as te, i as Ae, m as Ie, z as _e, r as We, j as Ge, A as Ue, c as Ke, u as Xe, D, b as N, E as Ye, s as qe, f as A } from "./index-DELjRDde.js";
import { K as E } from "./KeyCode-n3eOOGSl.js";
const J = (e, o) => {
  let {
    attrs: t
  } = o;
  const {
    included: n,
    vertical: s,
    style: r,
    class: a
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
  }, m = f(f({}, r), d);
  return n ? w("div", {
    class: a,
    style: m
  }, null) : null;
};
J.inheritAttrs = !1;
const Je = (e, o, t, n, s, r) => {
  de(t ? n > 0 : !0, "Slider", "`Slider[step]` should be a positive number in order to make Slider[dots] work.");
  const a = Object.keys(o).map(parseFloat).sort((i, l) => i - l);
  if (t && n)
    for (let i = s; i <= r; i += n)
      a.indexOf(i) === -1 && a.push(i);
  return a;
}, fe = (e, o) => {
  let {
    attrs: t
  } = o;
  const {
    prefixCls: n,
    vertical: s,
    reverse: r,
    marks: a,
    dots: i,
    step: l,
    included: u,
    lowerBound: d,
    upperBound: m,
    max: b,
    min: C,
    dotStyle: y,
    activeDotStyle: M
  } = t, h = b - C, S = Je(s, a, i, l, C, b).map((c) => {
    const $ = `${Math.abs(c - C) / h * 100}%`, B = !u && c === m || u && c <= m && c >= d;
    let x = s ? f(f({}, y), {
      [r ? "top" : "bottom"]: $
    }) : f(f({}, y), {
      [r ? "right" : "left"]: $
    });
    B && (x = f(f({}, x), M));
    const v = j({
      [`${n}-dot`]: !0,
      [`${n}-dot-active`]: B,
      [`${n}-dot-reverse`]: r
    });
    return w("span", {
      class: v,
      style: x,
      key: c
    }, null);
  });
  return w("div", {
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
    vertical: r,
    reverse: a,
    marks: i,
    included: l,
    upperBound: u,
    lowerBound: d,
    max: m,
    min: b,
    onClickLabel: C
  } = t, y = Object.keys(i), M = n.mark, h = m - b, S = y.map(parseFloat).sort((c, $) => c - $).map((c) => {
    const $ = typeof i[c] == "function" ? i[c]() : i[c], B = typeof $ == "object" && !Ee($);
    let x = B ? $.label : $;
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
      [a ? "top" : "bottom"]: `${(c - b) / h * 100}%`
    }, H = {
      transform: `translateX(${a ? "50%" : "-50%"})`,
      msTransform: `translateX(${a ? "50%" : "-50%"})`,
      [a ? "right" : "left"]: `${(c - b) / h * 100}%`
    }, P = r ? V : H, L = B ? f(f({}, P), $.style) : P, O = {
      [ce ? "onTouchstartPassive" : "onTouchstart"]: (k) => C(k, c)
    };
    return w("span", T({
      class: p,
      style: L,
      key: c,
      onMousedown: (k) => C(k, c)
    }, O), [x]);
  });
  return w("div", {
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
    const r = Z(!1), a = Z(), i = () => {
      document.activeElement === a.value && (r.value = !0);
    }, l = (h) => {
      r.value = !1, n("blur", h);
    }, u = () => {
      r.value = !1;
    }, d = () => {
      var h;
      (h = a.value) === null || h === void 0 || h.focus();
    }, m = () => {
      var h;
      (h = a.value) === null || h === void 0 || h.blur();
    }, b = () => {
      r.value = !0, d();
    }, C = (h) => {
      h.preventDefault(), d(), n("mousedown", h);
    };
    s({
      focus: d,
      blur: m,
      clickFocus: b,
      ref: a
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
        value: B,
        tabindex: x,
        ariaLabel: v,
        ariaLabelledBy: p,
        ariaValueTextFormatter: V,
        onMouseenter: H,
        onMouseleave: P
      } = e, L = j(t.class, {
        [`${h}-handle-click-focused`]: r.value
      }), O = {
        "aria-valuemin": c,
        "aria-valuemax": $,
        "aria-valuenow": B,
        "aria-disabled": !!S
      }, k = [t.style, M.value];
      let F = x || 0;
      (S || x === null) && (F = null);
      let _;
      V && (_ = V(B));
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
        ref: a,
        style: k
      });
      return w("div", T(T({}, K), {}, {
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
    max: r
  } = o;
  const a = Object.keys(t).map(parseFloat);
  if (n !== null) {
    const l = Math.pow(10, ve(n)), u = Math.floor((r * l - s * l) / (n * l)), d = Math.min((e - s) / n, u), m = Math.round(d) * n + s;
    a.push(m);
  }
  const i = a.map((l) => Math.abs(e - l));
  return a[i.indexOf(Math.min(...i))];
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
function re(e, o) {
  let t = 1;
  return window.visualViewport && (t = +(window.visualViewport.width / document.body.getBoundingClientRect().width).toFixed(2)), (e ? o.touches[0].clientY : o.touches[0].pageX) / t;
}
function ae(e, o) {
  const t = o.getBoundingClientRect();
  return e ? t.top + t.height * 0.5 : window.scrollX + t.left + t.width * 0.5;
}
function Q(e, o) {
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
function Qe(e, o, t) {
  const n = {
    increase: (a, i) => a + i,
    decrease: (a, i) => a - i
  }, s = n[e](Object.keys(t.marks).indexOf(JSON.stringify(o)), 1), r = Object.keys(t.marks)[s];
  return t.step ? n[e](o, t.step) : Object.keys(t.marks).length && t.marks[r] ? t.marks[r] : o;
}
function ye(e, o, t) {
  const n = "increase", s = "decrease";
  let r = n;
  switch (e.keyCode) {
    case E.UP:
      r = o && t ? s : n;
      break;
    case E.RIGHT:
      r = !o && t ? s : n;
      break;
    case E.DOWN:
      r = o && t ? n : s;
      break;
    case E.LEFT:
      r = !o && t ? n : s;
      break;
    case E.END:
      return (a, i) => i.max;
    case E.HOME:
      return (a, i) => i.min;
    case E.PAGE_UP:
      return (a, i) => a + i.step * 2;
    case E.PAGE_DOWN:
      return (a, i) => a - i.step * 2;
    default:
      return;
  }
  return (a, i) => Qe(r, a, i);
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
    mixins: [q, e],
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
      } = this, r = isFinite(n - s) ? (n - s) % t === 0 : !0;
      return de(t && Math.floor(t) === t ? r : !0, `Slider[max] - Slider[min] (${n - s}) should be a multiple of Slider[step] (${t})`), this.handlesRefs = {}, {};
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
          className: r,
          style: a
        } = t, i = Ze(t, ["index", "directives", "className", "style"]);
        if (delete i.dragging, i.value === null)
          return null;
        const l = f(f({}, i), {
          class: r,
          style: a,
          key: n
        });
        return w(me, l, null);
      },
      onDown(t, n) {
        let s = n;
        const {
          draggableTrack: r,
          vertical: a
        } = this.$props, {
          bounds: i
        } = this.$data, l = r && this.positionGetValue ? this.positionGetValue(s) || [] : [], u = X(t, this.handlesRefs);
        if (this.dragTrack = r && i.length >= 2 && !u && !l.map((d, m) => {
          const b = m ? !0 : d >= i[m];
          return m === l.length - 1 ? d <= i[m] : b;
        }).some((d) => !d), this.dragTrack)
          this.dragOffset = s, this.startBounds = [...i];
        else {
          if (!u)
            this.dragOffset = 0;
          else {
            const d = ae(a, t.target);
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
        const n = this.vertical, s = re(n, t);
        this.onDown(t, s), this.addDocumentTouchEvents(), I(t);
      },
      onFocus(t) {
        const {
          vertical: n
        } = this;
        if (X(t, this.handlesRefs) && !this.dragTrack) {
          const s = ae(n, t.target);
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
        const n = re(this.vertical, t);
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
        } = this, r = t.getBoundingClientRect();
        return n ? s ? r.bottom : r.top : window.scrollX + (s ? r.right : r.left);
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
          max: r
        } = this, a = Math.abs(Math.max(t, 0) / this.getSliderLength());
        return n ? (1 - a) * (r - s) + s : a * (r - s) + s;
      },
      calcValueByPos(t) {
        const s = (this.reverse ? -1 : 1) * (t - this.getSliderStart());
        return this.trimAlignValue(this.calcValue(s));
      },
      calcOffset(t) {
        const {
          min: n,
          max: s
        } = this, r = (t - n) / (s - n);
        return Math.max(0, r * 100);
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
        step: r,
        included: a,
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
        handles: B
      } = this.renderSlider(), x = j(t, S, {
        [`${t}-with-marks`]: Object.keys(n).length,
        [`${t}-disabled`]: i,
        [`${t}-vertical`]: l,
        [`${t}-horizontal`]: !l
      }), v = {
        vertical: l,
        marks: n,
        included: a,
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
      return w("div", T(T({
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
      }), [w("div", {
        class: `${t}-rail`,
        style: f(f({}, b), C)
      }, null), $, w(fe, {
        prefixCls: t,
        vertical: l,
        reverse: u,
        marks: n,
        dots: s,
        step: r,
        included: a,
        lowerBound: this.getLowerBound(),
        upperBound: this.getUpperBound(),
        max: m,
        min: d,
        dotStyle: y,
        activeDotStyle: M
      }, null), B, w(pe, v, {
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
  mixins: [q],
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
        } = this, r = n(s, this.$props), a = this.trimAlignValue(r);
        if (a === s)
          return;
        this.onChange({
          sValue: a
        }), this.$emit("afterChange", a), this.onEnd();
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
      const t = f(f({}, this.$props), o), n = Q(e, t);
      return be(n, t);
    },
    getTrack(e) {
      let {
        prefixCls: o,
        reverse: t,
        vertical: n,
        included: s,
        minimumTrackStyle: r,
        mergedTrackStyle: a,
        length: i,
        offset: l
      } = e;
      return w(J, {
        class: `${o}-track`,
        vertical: n,
        included: s,
        offset: l,
        reverse: t,
        length: i,
        style: f(f({}, r), a)
      }, null);
    },
    renderSlider() {
      const {
        prefixCls: e,
        vertical: o,
        included: t,
        disabled: n,
        minimumTrackStyle: s,
        trackStyle: r,
        handleStyle: a,
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
      } = this, B = this.calcOffset(c), x = S({
        class: `${e}-handle`,
        prefixCls: e,
        vertical: o,
        offset: B,
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
        style: a[0] || a,
        ref: (V) => this.saveHandle(0, V),
        onFocus: this.onFocus,
        onBlur: this.onBlur
      }), v = C !== void 0 ? this.calcOffset(C) : 0, p = r[0] || r;
      return {
        tracks: this.getTrack({
          prefixCls: e,
          reverse: y,
          vertical: o,
          included: t,
          offset: v,
          minimumTrackStyle: s,
          mergedTrackStyle: p,
          length: B - v
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
    allowCross: r,
    pushable: a
  } = s, i = Number(a), l = Q(o, s);
  let u = l;
  return !r && t != null && n !== void 0 && (t > 0 && l <= n[t - 1] + i && (u = n[t - 1] + i), t < n.length - 1 && l >= n[t + 1] - i && (u = n[t + 1] - i)), be(u, s);
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
  mixins: [q],
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
      value: r
    } = this;
    r === void 0 && (r = s);
    const a = r.map((l, u) => W({
      value: l,
      handle: u,
      props: this.$props
    }));
    return {
      sHandle: null,
      recent: a[0] === t ? 0 : a.length - 1,
      bounds: a
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
        const n = e.map((s) => Q(s, this.$props));
        this.$emit("change", n);
      }
    },
    onChange(e) {
      if (!Y(this, "value"))
        this.setState(e);
      else {
        const s = {};
        ["sHandle", "recent"].forEach((r) => {
          e[r] !== void 0 && (s[r] = e[r]);
        }), Object.keys(s).length && this.setState(s);
      }
      const n = f(f({}, this.$data), e).bounds;
      this.$emit("change", n);
    },
    positionGetValue(e) {
      const o = this.getValue(), t = this.calcValueByPos(e), n = this.getClosestBound(t), s = this.getBoundNeedMoving(t, n), r = o[s];
      if (t === r)
        return null;
      const a = [...o];
      return a[s] = t, a;
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
      const r = [...o];
      r[this.prevMovedHandleIndex] = t, this.onChange({
        bounds: r
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
        $props: r
      } = this, a = r.max || 100, i = r.min || 0;
      if (t) {
        let b = r.vertical ? -o : o;
        b = r.reverse ? -b : b;
        const C = a - Math.max(...n), y = i - Math.min(...n), M = Math.min(Math.max(b / (this.getSliderLength() / 100), y), C), h = n.map((S) => Math.floor(Math.max(Math.min(S + M, a), i)));
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
          sHandle: r
        } = this, a = s[r === null ? this.recent : r], i = n(a, this.$props), l = W({
          value: i,
          handle: r,
          bounds: s,
          props: this.$props
        });
        if (l === a)
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
      const r = t[o + 1] === t[o];
      return r && t[n] === t[o] && (s = n), r && e !== t[o + 1] && (s = e < t[o + 1] ? o : o + 1), s;
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
        const r = f({}, e);
        if (o !== null)
          for (let i = t; i <= n; i += o)
            r[i] = i;
        const a = Object.keys(r).map(parseFloat);
        a.sort((i, l) => i - l), this.internalPointsCache = {
          marks: e,
          step: o,
          points: a
        };
      }
      return this.internalPointsCache.points;
    },
    moveTo(e, o) {
      const t = [...this.bounds], {
        sHandle: n,
        recent: s
      } = this, r = n === null ? s : n;
      t[r] = e;
      let a = r;
      this.$props.pushable !== !1 ? this.pushSurroundingHandles(t, a) : this.$props.allowCross && (t.sort((i, l) => i - l), a = t.indexOf(e)), this.onChange({
        recent: a,
        sHandle: a,
        bounds: t
      }), o && (this.$emit("afterChange", t), this.setState({}, () => {
        this.handlesRefs[a].focus();
      }), this.onEnd());
    },
    pushSurroundingHandles(e, o) {
      const t = e[o], {
        pushable: n
      } = this, s = Number(n);
      let r = 0;
      if (e[o + 1] - t < s && (r = 1), t - e[o - 1] < s && (r = -1), r === 0)
        return;
      const a = o + r, i = r * (e[a] - t);
      this.pushHandle(e, a, r, s - i) || (e[o] = e[a] - r * s);
    },
    pushHandle(e, o, t, n) {
      const s = e[o];
      let r = e[o];
      for (; t * (r - s) < n; ) {
        if (!this.pushHandleOnePoint(e, o, t))
          return e[o] = s, !1;
        r = e[o];
      }
      return !0;
    },
    pushHandleOnePoint(e, o, t) {
      const n = this.getPoints(), r = n.indexOf(e[o]) + t;
      if (r >= n.length || r < 0)
        return !1;
      const a = o + t, i = n[r], {
        pushable: l
      } = this, u = Number(l), d = t * (e[a] - i);
      return this.pushHandle(e, a, t, u - d) ? (e[o] = i, !0) : !1;
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
      const r = this.$data || {}, {
        bounds: a
      } = r;
      if (e = e === void 0 ? r.sHandle : e, s = Number(s), !n && e != null && a !== void 0) {
        if (e > 0 && o <= a[e - 1] + s)
          return a[e - 1] + s;
        if (e < a.length - 1 && o >= a[e + 1] - s)
          return a[e + 1] - s;
      }
      return o;
    },
    getTrack(e) {
      let {
        bounds: o,
        prefixCls: t,
        reverse: n,
        vertical: s,
        included: r,
        offsets: a,
        trackStyle: i
      } = e;
      return o.slice(0, -1).map((l, u) => {
        const d = u + 1, m = j({
          [`${t}-track`]: !0,
          [`${t}-track-${d}`]: !0
        });
        return w(J, {
          class: m,
          vertical: s,
          reverse: n,
          included: r,
          offset: a[d - 1],
          length: a[d] - a[d - 1],
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
        disabled: r,
        min: a,
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
      } = this, S = u || d, c = o.map((x) => this.calcOffset(x)), $ = `${t}-handle`, B = o.map((x, v) => {
        let p = C[v] || 0;
        (r || C[v] === null) && (p = null);
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
          min: a,
          max: i,
          reverse: l,
          disabled: r,
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
        handles: B
      };
    }
  }
}), st = Se(ot), rt = z({
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
    const s = U(null), r = U(null);
    function a() {
      te.cancel(r.value), r.value = null;
    }
    function i() {
      r.value = te(() => {
        var u;
        (u = s.value) === null || u === void 0 || u.forcePopupAlign(), r.value = null;
      });
    }
    const l = () => {
      a(), e.open && i();
    };
    return Be([() => e.open, () => e.title], () => {
      l();
    }, {
      flush: "post",
      immediate: !0
    }), we(() => {
      l();
    }), le(() => {
      a();
    }), () => w(ze, T(T({
      ref: s
    }, e), t), n);
  }
}), at = (e) => {
  const {
    componentCls: o,
    controlSize: t,
    dotSize: n,
    marginFull: s,
    marginPart: r,
    colorFillContentHover: a
  } = e;
  return {
    [o]: f(f({}, We(e)), {
      position: "relative",
      height: t,
      margin: `${r}px ${s}px`,
      padding: 0,
      cursor: "pointer",
      touchAction: "none",
      "&-vertical": {
        margin: `${s}px ${r}px`
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
          borderColor: a
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
          boxShadow: `0 0 0 ${e.handleLineWidth}px ${new _e(e.colorTextDisabled).onBackground(e.colorBgContainer).toHexString()}`,
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
    dotSize: r
  } = e, a = o ? "paddingBlock" : "paddingInline", i = o ? "width" : "height", l = o ? "height" : "width", u = o ? "insetBlockStart" : "insetInlineStart", d = o ? "top" : "insetInlineStart";
  return {
    [a]: n,
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
      [u]: (n - r) / 2
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
  return [at(o), it(o), lt(o)];
}, (e) => {
  const t = e.controlHeightLG / 4, n = e.controlHeightSM / 2, s = e.lineWidth + 1, r = e.lineWidth + 1 * 3;
  return {
    controlSize: t,
    railSize: 4,
    handleSize: t,
    handleSizeHover: n,
    dotSize: 8,
    handleLineWidth: s,
    handleLineWidthHover: r
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
  tooltipPlacement: qe(),
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
      expose: r
    } = o;
    process.env.NODE_ENV !== "production" && [["tooltipVisible", "tooltipOpen"]].forEach((p) => {
      let [V, H] = p;
      Ue(e.tooltipVisible === void 0, "Slider", `\`${V}\` is deprecated, please use \`${H}\` instead.`);
    });
    const {
      prefixCls: a,
      rootPrefixCls: i,
      direction: l,
      getPopupContainer: u,
      configProvider: d
    } = Ke("slider", e), [m, b] = ut(a), C = Xe(), y = U(), M = U({}), h = (p, V) => {
      M.value[p] = V;
    }, S = ue(() => e.tooltipPlacement ? e.tooltipPlacement : e.vertical ? l.value === "rtl" ? "left" : "right" : "top"), c = () => {
      var p;
      (p = y.value) === null || p === void 0 || p.focus();
    }, $ = () => {
      var p;
      (p = y.value) === null || p === void 0 || p.blur();
    }, B = (p) => {
      s("update:value", p), s("change", p), C.onFieldChange();
    }, x = (p) => {
      s("blur", p);
    };
    r({
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
      return w(rt, {
        prefixCls: V,
        title: F ? F(P) : "",
        open: Ce,
        placement: S.value,
        transitionName: `${i.value}-zoom-down`,
        key: O,
        overlayClassName: `${a.value}-tooltip`,
        getPopupContainer: K || (u == null ? void 0 : u.value)
      }, {
        default: () => [w(me, T(T({}, k), {}, {
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
        [`${a.value}-rtl`]: l.value === "rtl"
      }, b.value);
      l.value === "rtl" && !P.vertical && (P.reverse = !P.reverse);
      let k;
      return typeof V == "object" && (k = V.draggableTrack), m(V ? w(st, T(T(T({}, t), P), {}, {
        step: P.step,
        draggableTrack: k,
        class: O,
        ref: y,
        handle: (F) => v({
          tooltipPrefixCls: L,
          prefixCls: a.value,
          info: F
        }),
        prefixCls: a.value,
        onChange: B,
        onBlur: x
      }), {
        mark: n.mark
      }) : w(tt, T(T(T({}, t), P), {}, {
        id: H,
        step: P.step,
        class: O,
        ref: y,
        handle: (F) => v({
          tooltipPrefixCls: L,
          prefixCls: a.value,
          info: F
        }),
        prefixCls: a.value,
        onChange: B,
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