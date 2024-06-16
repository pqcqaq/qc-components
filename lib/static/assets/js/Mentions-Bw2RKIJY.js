import { defineComponent as L, inject as be, shallowRef as K, onBeforeUnmount as Se, createVNode as h, computed as A, ref as X, reactive as Ce, watchEffect as ye, provide as we, toRef as ee, onUpdated as Pe, nextTick as Oe, watch as Ie, openBlock as te, createBlock as Me, unref as Fe, normalizeProps as Te, guardReactiveProps as Ee, withCtx as $e, createElementBlock as Ne, Fragment as Be, renderList as _e, renderSlot as Ae } from "vue";
import { T as Le, v as Re, P as _, F as je, _ as c, i as ue, c as J, b as k, R as De, $ as ze, g as He, r as ne, a0 as Ve, A as We, E as oe, u as Ke, x as Ue, H as ke, w as Xe, a1 as Ye } from "./styleChecker-DdDg1L8e.js";
import { K as I } from "./KeyCode-n3eOOGSl.js";
import { M as Ge, a as Y, u as qe } from "./index-CJZ5vOhG.js";
import { S as ce } from "./index-CSrMGP_4.js";
import { o as de } from "./omit-CH0b8HlL.js";
import { B as Je } from "./BaseInput-8fgUqcxC.js";
import { a as Qe, g as re } from "./statusUtils-BkxkBBZV.js";
import { i as Ze, g as et, a as tt, b as nt, c as ot, d as rt } from "./index-BefsX9p6.js";
function it(e) {
  const {
    selectionStart: o
  } = e;
  return e.value.slice(0, o);
}
function at(e) {
  let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return (Array.isArray(o) ? o : [o]).reduce((t, i) => {
    const d = e.lastIndexOf(i);
    return d > t.location ? {
      location: d,
      prefix: i
    } : t;
  }, {
    location: -1,
    prefix: ""
  });
}
function ie(e) {
  return (e || "").toLowerCase();
}
function st(e, o, n) {
  const t = e[0];
  if (!t || t === n)
    return e;
  let i = e;
  const d = o.length;
  for (let s = 0; s < d; s += 1)
    if (ie(i[s]) !== ie(o[s])) {
      i = i.slice(s);
      break;
    } else
      s === d - 1 && (i = i.slice(d));
  return i;
}
function lt(e, o) {
  const {
    measureLocation: n,
    prefix: t,
    targetText: i,
    selectionStart: d,
    split: s
  } = o;
  let u = e.slice(0, n);
  u[u.length - s.length] === s && (u = u.slice(0, u.length - s.length)), u && (u = `${u}${s}`);
  let p = st(e.slice(d), i.slice(d - n - t.length), s);
  p.slice(0, s.length) === s && (p = p.slice(s.length));
  const r = `${u}${t}${i}${s}`;
  return {
    text: `${r}${p}`,
    selectionLocation: r.length
  };
}
function ut(e, o) {
  e.setSelectionRange(o, o), e.blur(), e.focus();
}
function ct(e, o) {
  const {
    split: n
  } = o;
  return !n || e.indexOf(n) === -1;
}
function dt(e, o) {
  let {
    value: n = ""
  } = o;
  const t = e.toLowerCase();
  return n.toLowerCase().indexOf(t) !== -1;
}
const pe = Symbol("MentionsContextKey");
function pt() {
}
const ft = L({
  compatConfig: {
    MODE: 3
  },
  name: "DropdownMenu",
  props: {
    prefixCls: String,
    options: {
      type: Array,
      default: () => []
    }
  },
  setup(e, o) {
    let {
      slots: n
    } = o;
    const {
      activeIndex: t,
      setActiveIndex: i,
      selectOption: d,
      onFocus: s = pt,
      loading: u
    } = be(pe, {
      activeIndex: K(),
      loading: K(!1)
    });
    let p;
    const r = (b) => {
      clearTimeout(p), p = setTimeout(() => {
        s(b);
      });
    };
    return Se(() => {
      clearTimeout(p);
    }), () => {
      var b;
      const {
        prefixCls: M,
        options: S
      } = e, v = S[t.value] || {};
      return h(Ge, {
        prefixCls: `${M}-menu`,
        activeKey: v.value,
        onSelect: (x) => {
          let {
            key: C
          } = x;
          const y = S.find((w) => {
            let {
              value: F
            } = w;
            return F === C;
          });
          d(y);
        },
        onMousedown: r
      }, {
        default: () => [!u.value && S.map((x, C) => {
          var y, w;
          const {
            value: F,
            disabled: B,
            label: T = x.value,
            class: R,
            style: H
          } = x;
          return h(Y, {
            key: F,
            disabled: B,
            onMouseenter: () => {
              i(C);
            },
            class: R,
            style: H
          }, {
            default: () => [(w = (y = n.option) === null || y === void 0 ? void 0 : y.call(n, x)) !== null && w !== void 0 ? w : typeof T == "function" ? T(x) : T]
          });
        }), !u.value && S.length === 0 ? h(Y, {
          key: "notFoundContent",
          disabled: !0
        }, {
          default: () => [(b = n.notFoundContent) === null || b === void 0 ? void 0 : b.call(n)]
        }) : null, u.value && h(Y, {
          key: "loading",
          disabled: !0
        }, {
          default: () => [h(ce, {
            size: "small"
          }, null)]
        })]
      });
    };
  }
}), gt = {
  bottomRight: {
    points: ["tl", "br"],
    offset: [0, 4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    }
  },
  bottomLeft: {
    points: ["tr", "bl"],
    offset: [0, 4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    }
  },
  topRight: {
    points: ["bl", "tr"],
    offset: [0, -4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    }
  },
  topLeft: {
    points: ["br", "tl"],
    offset: [0, -4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    }
  }
}, mt = L({
  compatConfig: {
    MODE: 3
  },
  name: "KeywordTrigger",
  props: {
    loading: {
      type: Boolean,
      default: void 0
    },
    options: {
      type: Array,
      default: () => []
    },
    prefixCls: String,
    placement: String,
    visible: {
      type: Boolean,
      default: void 0
    },
    transitionName: String,
    getPopupContainer: Function,
    direction: String,
    dropdownClassName: String
  },
  setup(e, o) {
    let {
      slots: n
    } = o;
    const t = () => `${e.prefixCls}-dropdown`, i = () => {
      const {
        options: s
      } = e;
      return h(ft, {
        prefixCls: t(),
        options: s
      }, {
        notFoundContent: n.notFoundContent,
        option: n.option
      });
    }, d = A(() => {
      const {
        placement: s,
        direction: u
      } = e;
      let p = "topRight";
      return u === "rtl" ? p = s === "top" ? "topLeft" : "bottomLeft" : p = s === "top" ? "topRight" : "bottomRight", p;
    });
    return () => {
      const {
        visible: s,
        transitionName: u,
        getPopupContainer: p
      } = e;
      return h(Le, {
        prefixCls: t(),
        popupVisible: s,
        popup: i(),
        popupClassName: e.dropdownClassName,
        popupPlacement: d.value,
        popupTransitionName: u,
        builtinPlacements: gt,
        getPopupContainer: p
      }, {
        default: n.default
      });
    };
  }
}), vt = Re("top", "bottom"), fe = {
  autofocus: {
    type: Boolean,
    default: void 0
  },
  prefix: _.oneOfType([_.string, _.arrayOf(_.string)]),
  prefixCls: String,
  value: String,
  disabled: {
    type: Boolean,
    default: void 0
  },
  split: String,
  transitionName: String,
  placement: _.oneOf(vt),
  character: _.any,
  characterRender: Function,
  filterOption: {
    type: [Boolean, Function]
  },
  validateSearch: Function,
  getPopupContainer: {
    type: Function
  },
  options: je(),
  loading: {
    type: Boolean,
    default: void 0
  },
  rows: [Number, String],
  direction: {
    type: String
  }
}, ge = c(c({}, fe), {
  dropdownClassName: String
}), me = {
  prefix: "@",
  split: " ",
  rows: 1,
  validateSearch: ct,
  filterOption: () => dt
};
ue(ge, me);
var ae = function(e, o) {
  var n = {};
  for (var t in e)
    Object.prototype.hasOwnProperty.call(e, t) && o.indexOf(t) < 0 && (n[t] = e[t]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, t = Object.getOwnPropertySymbols(e); i < t.length; i++)
      o.indexOf(t[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[i]) && (n[t[i]] = e[t[i]]);
  return n;
};
function se() {
}
const ht = L({
  compatConfig: {
    MODE: 3
  },
  name: "Mentions",
  inheritAttrs: !1,
  props: ue(ge, me),
  emits: ["change", "select", "search", "focus", "blur", "pressenter"],
  setup(e, o) {
    let {
      emit: n,
      attrs: t,
      expose: i,
      slots: d
    } = o;
    const s = X(null), u = X(null), p = X(), r = Ce({
      value: e.value || "",
      measuring: !1,
      measureLocation: 0,
      measureText: null,
      measurePrefix: "",
      activeIndex: 0,
      isFocus: !1
    });
    ye(() => {
      r.value = e.value;
    });
    const b = (l) => {
      n("change", l);
    }, M = (l) => {
      let {
        target: {
          value: f
        }
      } = l;
      b(f);
    }, S = (l, f, a) => {
      c(r, {
        measuring: !0,
        measureText: l,
        measurePrefix: f,
        measureLocation: a,
        activeIndex: 0
      });
    }, v = (l) => {
      c(r, {
        measuring: !1,
        measureLocation: 0,
        measureText: null
      }), l == null || l();
    }, x = (l) => {
      const {
        which: f
      } = l;
      if (r.measuring) {
        if (f === I.UP || f === I.DOWN) {
          const a = j.value.length, m = f === I.UP ? -1 : 1, g = (r.activeIndex + m + a) % a;
          r.activeIndex = g, l.preventDefault();
        } else if (f === I.ESC)
          v();
        else if (f === I.ENTER) {
          if (l.preventDefault(), !j.value.length) {
            v();
            return;
          }
          const a = j.value[r.activeIndex];
          R(a);
        }
      }
    }, C = (l) => {
      const {
        key: f,
        which: a
      } = l, {
        measureText: m,
        measuring: g
      } = r, {
        prefix: P,
        validateSearch: V
      } = e, E = l.target;
      if (E.composing)
        return;
      const D = it(E), {
        location: $,
        prefix: N
      } = at(D, P);
      if ([I.ESC, I.UP, I.DOWN, I.ENTER].indexOf(a) === -1)
        if ($ !== -1) {
          const O = D.slice($ + N.length), z = V(O, e), W = !!U(O).length;
          z ? (f === N || f === "Shift" || g || O !== m && W) && S(O, N, $) : g && v(), z && n("search", O, N);
        } else
          g && v();
    }, y = (l) => {
      r.measuring || n("pressenter", l);
    }, w = (l) => {
      B(l);
    }, F = (l) => {
      T(l);
    }, B = (l) => {
      clearTimeout(p.value);
      const {
        isFocus: f
      } = r;
      !f && l && n("focus", l), r.isFocus = !0;
    }, T = (l) => {
      p.value = setTimeout(() => {
        r.isFocus = !1, v(), n("blur", l);
      }, 100);
    }, R = (l) => {
      const {
        split: f
      } = e, {
        value: a = ""
      } = l, {
        text: m,
        selectionLocation: g
      } = lt(r.value, {
        measureLocation: r.measureLocation,
        targetText: a,
        prefix: r.measurePrefix,
        selectionStart: u.value.getSelectionStart(),
        split: f
      });
      b(m), v(() => {
        ut(u.value.input, g);
      }), n("select", l, r.measurePrefix);
    }, H = (l) => {
      r.activeIndex = l;
    }, U = (l) => {
      const f = l || r.measureText || "", {
        filterOption: a
      } = e;
      return e.options.filter((g) => a ? a(f, g) : !0);
    }, j = A(() => U());
    return i({
      blur: () => {
        u.value.blur();
      },
      focus: () => {
        u.value.focus();
      }
    }), we(pe, {
      activeIndex: ee(r, "activeIndex"),
      setActiveIndex: H,
      selectOption: R,
      onFocus: B,
      onBlur: T,
      loading: ee(e, "loading")
    }), Pe(() => {
      Oe(() => {
        r.measuring && (s.value.scrollTop = u.value.getScrollTop());
      });
    }), () => {
      const {
        measureLocation: l,
        measurePrefix: f,
        measuring: a
      } = r, {
        prefixCls: m,
        placement: g,
        transitionName: P,
        getPopupContainer: V,
        direction: E
      } = e, D = ae(e, ["prefixCls", "placement", "transitionName", "getPopupContainer", "direction"]), {
        class: $,
        style: N
      } = t, O = ae(t, ["class", "style"]), z = de(D, ["value", "prefix", "split", "validateSearch", "filterOption", "options", "loading"]), W = c(c(c({}, z), O), {
        onChange: se,
        onSelect: se,
        value: r.value,
        onInput: M,
        onBlur: F,
        onKeydown: x,
        onKeyup: C,
        onFocus: w,
        onPressenter: y
      });
      return h("div", {
        class: J(m, $),
        style: N
      }, [h(Je, k(k({}, W), {}, {
        ref: u,
        tag: "textarea"
      }), null), a && h("div", {
        ref: s,
        class: `${m}-measure`
      }, [r.value.slice(0, l), h(mt, {
        prefixCls: m,
        transitionName: P,
        dropdownClassName: e.dropdownClassName,
        placement: g,
        options: a ? j.value : [],
        visible: !0,
        direction: E,
        getPopupContainer: V
      }, {
        default: () => [h("span", null, [f])],
        notFoundContent: d.notFoundContent,
        option: d.option
      }), r.value.slice(l + f.length)])]);
    };
  }
}), xt = {
  value: String,
  disabled: Boolean,
  payload: ze()
}, ve = c(c({}, xt), {
  label: De([])
}), he = {
  name: "Option",
  props: ve,
  render(e, o) {
    let {
      slots: n
    } = o;
    var t;
    return (t = n.default) === null || t === void 0 ? void 0 : t.call(n);
  }
};
L(c({
  compatConfig: {
    MODE: 3
  }
}, he));
const bt = (e) => {
  const {
    componentCls: o,
    colorTextDisabled: n,
    controlItemBgHover: t,
    controlPaddingHorizontal: i,
    colorText: d,
    motionDurationSlow: s,
    lineHeight: u,
    controlHeight: p,
    inputPaddingHorizontal: r,
    inputPaddingVertical: b,
    fontSize: M,
    colorBgElevated: S,
    borderRadiusLG: v,
    boxShadowSecondary: x
  } = e, C = Math.round((e.controlHeight - e.fontSize * e.lineHeight) / 2);
  return {
    [o]: c(c(c(c(c({}, ne(e)), et(e)), {
      position: "relative",
      display: "inline-block",
      height: "auto",
      padding: 0,
      overflow: "hidden",
      lineHeight: u,
      whiteSpace: "pre-wrap",
      verticalAlign: "bottom"
    }), tt(e, o)), {
      "&-disabled": {
        "> textarea": c({}, nt(e))
      },
      "&-focused": c({}, ot(e)),
      [`&-affix-wrapper ${o}-suffix`]: {
        position: "absolute",
        top: 0,
        insetInlineEnd: r,
        bottom: 0,
        zIndex: 1,
        display: "inline-flex",
        alignItems: "center",
        margin: "auto"
      },
      // ================= Input Area =================
      [`> textarea, ${o}-measure`]: {
        color: d,
        boxSizing: "border-box",
        minHeight: p - 2,
        margin: 0,
        padding: `${b}px ${r}px`,
        overflow: "inherit",
        overflowX: "hidden",
        overflowY: "auto",
        fontWeight: "inherit",
        fontSize: "inherit",
        fontFamily: "inherit",
        fontStyle: "inherit",
        fontVariant: "inherit",
        fontSizeAdjust: "inherit",
        fontStretch: "inherit",
        lineHeight: "inherit",
        direction: "inherit",
        letterSpacing: "inherit",
        whiteSpace: "inherit",
        textAlign: "inherit",
        verticalAlign: "top",
        wordWrap: "break-word",
        wordBreak: "inherit",
        tabSize: "inherit"
      },
      "> textarea": c({
        width: "100%",
        border: "none",
        outline: "none",
        resize: "none",
        backgroundColor: "inherit"
      }, rt(e.colorTextPlaceholder)),
      [`${o}-measure`]: {
        position: "absolute",
        top: 0,
        insetInlineEnd: 0,
        bottom: 0,
        insetInlineStart: 0,
        zIndex: -1,
        color: "transparent",
        pointerEvents: "none",
        "> span": {
          display: "inline-block",
          minHeight: "1em"
        }
      },
      // ================== Dropdown ==================
      "&-dropdown": c(c({}, ne(e)), {
        position: "absolute",
        top: -9999,
        insetInlineStart: -9999,
        zIndex: e.zIndexPopup,
        boxSizing: "border-box",
        fontSize: M,
        fontVariant: "initial",
        backgroundColor: S,
        borderRadius: v,
        outline: "none",
        boxShadow: x,
        "&-hidden": {
          display: "none"
        },
        [`${o}-dropdown-menu`]: {
          maxHeight: e.dropdownHeight,
          marginBottom: 0,
          paddingInlineStart: 0,
          overflow: "auto",
          listStyle: "none",
          outline: "none",
          "&-item": c(c({}, Ve), {
            position: "relative",
            display: "block",
            minWidth: e.controlItemWidth,
            padding: `${C}px ${i}px`,
            color: d,
            fontWeight: "normal",
            lineHeight: u,
            cursor: "pointer",
            transition: `background ${s} ease`,
            "&:hover": {
              backgroundColor: t
            },
            "&:first-child": {
              borderStartStartRadius: v,
              borderStartEndRadius: v,
              borderEndStartRadius: 0,
              borderEndEndRadius: 0
            },
            "&:last-child": {
              borderStartStartRadius: 0,
              borderStartEndRadius: 0,
              borderEndStartRadius: v,
              borderEndEndRadius: v
            },
            "&-disabled": {
              color: n,
              cursor: "not-allowed",
              "&:hover": {
                color: n,
                backgroundColor: t,
                cursor: "not-allowed"
              }
            },
            "&-selected": {
              color: d,
              fontWeight: e.fontWeightStrong,
              backgroundColor: t
            },
            "&-active": {
              backgroundColor: t
            }
          })
        }
      })
    })
  };
}, St = He("Mentions", (e) => {
  const o = Ze(e);
  return [bt(o)];
}, (e) => ({
  dropdownHeight: 250,
  controlItemWidth: 100,
  zIndexPopup: e.zIndexPopupBase + 50
}));
var le = function(e, o) {
  var n = {};
  for (var t in e)
    Object.prototype.hasOwnProperty.call(e, t) && o.indexOf(t) < 0 && (n[t] = e[t]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, t = Object.getOwnPropertySymbols(e); i < t.length; i++)
      o.indexOf(t[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[i]) && (n[t[i]] = e[t[i]]);
  return n;
};
function Ct() {
  return !0;
}
const yt = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    prefix: n = "@",
    split: t = " "
  } = o, i = Array.isArray(n) ? n : [n];
  return e.split(t).map(function() {
    let d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", s = null;
    return i.some((u) => d.slice(0, u.length) === u ? (s = u, !0) : !1), s !== null ? {
      prefix: s,
      value: d.slice(s.length)
    } : null;
  }).filter((d) => !!d && !!d.value);
}, wt = () => c(c({}, fe), {
  loading: {
    type: Boolean,
    default: void 0
  },
  onFocus: {
    type: Function
  },
  onBlur: {
    type: Function
  },
  onSelect: {
    type: Function
  },
  onChange: {
    type: Function
  },
  onPressenter: {
    type: Function
  },
  "onUpdate:value": {
    type: Function
  },
  notFoundContent: _.any,
  defaultValue: String,
  id: String,
  status: String
}), G = L({
  compatConfig: {
    MODE: 3
  },
  name: "AMentions",
  inheritAttrs: !1,
  props: wt(),
  slots: Object,
  setup(e, o) {
    let {
      slots: n,
      emit: t,
      attrs: i,
      expose: d
    } = o;
    var s, u, p;
    process.env.NODE_ENV !== "production" && We(!oe(((s = n.default) === null || s === void 0 ? void 0 : s.call(n)) || []).length, "Mentions", "`Mentions.Option` is deprecated. Please use `options` instead.");
    const {
      prefixCls: r,
      renderEmpty: b,
      direction: M
    } = Ke("mentions", e), [S, v] = St(r), x = K(!1), C = K(null), y = K((p = (u = e.value) !== null && u !== void 0 ? u : e.defaultValue) !== null && p !== void 0 ? p : ""), w = Ue(), F = ke.useInject(), B = A(() => Qe(F.status, e.status));
    qe({
      prefixCls: A(() => `${r.value}-menu`),
      mode: A(() => "vertical"),
      selectable: A(() => !1),
      onClick: () => {
      },
      validator: (a) => {
        let {
          mode: m
        } = a;
        Xe(!m || m === "vertical", "Mentions", `mode="${m}" is not supported for Mentions's Menu.`);
      }
    }), Ie(() => e.value, (a) => {
      y.value = a;
    });
    const T = (a) => {
      x.value = !0, t("focus", a);
    }, R = (a) => {
      x.value = !1, t("blur", a), w.onFieldBlur();
    }, H = function() {
      for (var a = arguments.length, m = new Array(a), g = 0; g < a; g++)
        m[g] = arguments[g];
      t("select", ...m), x.value = !0;
    }, U = (a) => {
      e.value === void 0 && (y.value = a), t("update:value", a), t("change", a), w.onFieldChange();
    }, j = () => {
      const a = e.notFoundContent;
      return a !== void 0 ? a : n.notFoundContent ? n.notFoundContent() : b("Select");
    }, Q = () => {
      var a;
      return oe(((a = n.default) === null || a === void 0 ? void 0 : a.call(n)) || []).map((m) => {
        var g, P;
        return c(c({}, Ye(m)), {
          label: (P = (g = m.children) === null || g === void 0 ? void 0 : g.default) === null || P === void 0 ? void 0 : P.call(g)
        });
      });
    };
    d({
      focus: () => {
        C.value.focus();
      },
      blur: () => {
        C.value.blur();
      }
    });
    const f = A(() => e.loading ? Ct : e.filterOption);
    return () => {
      const {
        disabled: a,
        getPopupContainer: m,
        rows: g = 1,
        id: P = w.id.value
      } = e, V = le(e, ["disabled", "getPopupContainer", "rows", "id"]), {
        hasFeedback: E,
        feedbackIcon: D
      } = F, {
        class: $
      } = i, N = le(i, ["class"]), O = de(V, ["defaultValue", "onUpdate:value", "prefixCls"]), z = J({
        [`${r.value}-disabled`]: a,
        [`${r.value}-focused`]: x.value,
        [`${r.value}-rtl`]: M.value === "rtl"
      }, re(r.value, B.value), !E && $, v.value), W = c(c(c(c({
        prefixCls: r.value
      }, O), {
        disabled: a,
        direction: M.value,
        filterOption: f.value,
        getPopupContainer: m,
        options: e.loading ? [{
          value: "ANTDV_SEARCHING",
          disabled: !0,
          label: h(ce, {
            size: "small"
          }, null)
        }] : e.options || Q(),
        class: z
      }), N), {
        rows: g,
        onChange: U,
        onSelect: H,
        onFocus: T,
        onBlur: R,
        ref: C,
        value: y.value,
        id: P
      }), Z = h(ht, k(k({}, W), {}, {
        dropdownClassName: v.value
      }), {
        notFoundContent: j,
        option: n.option
      });
      return S(E ? h("div", {
        class: J(`${r.value}-affix-wrapper`, re(`${r.value}-affix-wrapper`, B.value, E), $, v.value)
      }, [Z, h("span", {
        class: `${r.value}-suffix`
      }, [D])]) : Z);
    };
  }
}), q = L(c(c({
  compatConfig: {
    MODE: 3
  }
}, he), {
  name: "AMentionsOption",
  props: ve
})), Pt = c(G, {
  Option: q,
  getMentions: yt,
  install: (e) => (e.component(G.name, G), e.component(q.name, q), e)
}), _t = /* @__PURE__ */ L({
  __name: "Mentions",
  setup(e) {
    return (o, n) => (te(), Me(Fe(Pt), Te(Ee(o.$attrs)), {
      default: $e(() => [
        (te(!0), Ne(Be, null, _e(o.$slots, (t, i) => Ae(o.$slots, i, { key: i })), 128))
      ]),
      _: 3
    }, 16));
  }
});
export {
  _t as default
};
