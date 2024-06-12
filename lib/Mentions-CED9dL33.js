import { defineComponent as A, inject as be, shallowRef as K, onBeforeUnmount as Se, createVNode as h, computed as j, ref as X, reactive as Ce, watchEffect as ye, provide as we, toRef as ee, onUpdated as Pe, nextTick as Ie, watch as Oe, openBlock as te, createBlock as Me, unref as Te, normalizeProps as Fe, guardReactiveProps as Ee, withCtx as Ne, createElementBlock as $e, Fragment as Be, renderList as _e, renderSlot as je } from "vue";
import { b8 as Ae, b9 as Y, ba as ue, aN as Le, N as Re, P as _, a8 as De, d as c, i as ce, Q as de, h as q, bb as ze, j as U, K as O, a0 as He, H as Ve, g as We, aR as Ke, r as ne, aV as ke, bc as Ue, bd as Xe, aT as Ye, be as Ge, af as Qe, E as qe, ak as oe, u as Je, f as Ze, aC as et, aD as tt, bf as nt, l as ot, aI as ae, bg as at } from "./index-DH1cAMFH.js";
function it(e) {
  const {
    selectionStart: o
  } = e;
  return e.value.slice(0, o);
}
function rt(e) {
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
  const a = `${u}${t}${i}${s}`;
  return {
    text: `${a}${p}`,
    selectionLocation: a.length
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
const ft = A({
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
    const a = (b) => {
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
      return h(Ae, {
        prefixCls: `${M}-menu`,
        activeKey: v.value,
        onSelect: (x) => {
          let {
            key: C
          } = x;
          const y = S.find((w) => {
            let {
              value: T
            } = w;
            return T === C;
          });
          d(y);
        },
        onMousedown: a
      }, {
        default: () => [!u.value && S.map((x, C) => {
          var y, w;
          const {
            value: T,
            disabled: B,
            label: F = x.value,
            class: L,
            style: H
          } = x;
          return h(Y, {
            key: T,
            disabled: B,
            onMouseenter: () => {
              i(C);
            },
            class: L,
            style: H
          }, {
            default: () => [(w = (y = n.option) === null || y === void 0 ? void 0 : y.call(n, x)) !== null && w !== void 0 ? w : typeof F == "function" ? F(x) : F]
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
          default: () => [h(ue, {
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
}, mt = A({
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
    }, d = j(() => {
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
  options: De(),
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
ce(ge, me);
var re = function(e, o) {
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
const ht = A({
  compatConfig: {
    MODE: 3
  },
  name: "Mentions",
  inheritAttrs: !1,
  props: ce(ge, me),
  emits: ["change", "select", "search", "focus", "blur", "pressenter"],
  setup(e, o) {
    let {
      emit: n,
      attrs: t,
      expose: i,
      slots: d
    } = o;
    const s = X(null), u = X(null), p = X(), a = Ce({
      value: e.value || "",
      measuring: !1,
      measureLocation: 0,
      measureText: null,
      measurePrefix: "",
      activeIndex: 0,
      isFocus: !1
    });
    ye(() => {
      a.value = e.value;
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
    }, S = (l, f, r) => {
      c(a, {
        measuring: !0,
        measureText: l,
        measurePrefix: f,
        measureLocation: r,
        activeIndex: 0
      });
    }, v = (l) => {
      c(a, {
        measuring: !1,
        measureLocation: 0,
        measureText: null
      }), l == null || l();
    }, x = (l) => {
      const {
        which: f
      } = l;
      if (a.measuring) {
        if (f === O.UP || f === O.DOWN) {
          const r = R.value.length, m = f === O.UP ? -1 : 1, g = (a.activeIndex + m + r) % r;
          a.activeIndex = g, l.preventDefault();
        } else if (f === O.ESC)
          v();
        else if (f === O.ENTER) {
          if (l.preventDefault(), !R.value.length) {
            v();
            return;
          }
          const r = R.value[a.activeIndex];
          L(r);
        }
      }
    }, C = (l) => {
      const {
        key: f,
        which: r
      } = l, {
        measureText: m,
        measuring: g
      } = a, {
        prefix: P,
        validateSearch: V
      } = e, E = l.target;
      if (E.composing)
        return;
      const D = it(E), {
        location: N,
        prefix: $
      } = rt(D, P);
      if ([O.ESC, O.UP, O.DOWN, O.ENTER].indexOf(r) === -1)
        if (N !== -1) {
          const I = D.slice(N + $.length), z = V(I, e), W = !!k(I).length;
          z ? (f === $ || f === "Shift" || g || I !== m && W) && S(I, $, N) : g && v(), z && n("search", I, $);
        } else
          g && v();
    }, y = (l) => {
      a.measuring || n("pressenter", l);
    }, w = (l) => {
      B(l);
    }, T = (l) => {
      F(l);
    }, B = (l) => {
      clearTimeout(p.value);
      const {
        isFocus: f
      } = a;
      !f && l && n("focus", l), a.isFocus = !0;
    }, F = (l) => {
      p.value = setTimeout(() => {
        a.isFocus = !1, v(), n("blur", l);
      }, 100);
    }, L = (l) => {
      const {
        split: f
      } = e, {
        value: r = ""
      } = l, {
        text: m,
        selectionLocation: g
      } = lt(a.value, {
        measureLocation: a.measureLocation,
        targetText: r,
        prefix: a.measurePrefix,
        selectionStart: u.value.getSelectionStart(),
        split: f
      });
      b(m), v(() => {
        ut(u.value.input, g);
      }), n("select", l, a.measurePrefix);
    }, H = (l) => {
      a.activeIndex = l;
    }, k = (l) => {
      const f = l || a.measureText || "", {
        filterOption: r
      } = e;
      return e.options.filter((g) => r ? r(f, g) : !0);
    }, R = j(() => k());
    return i({
      blur: () => {
        u.value.blur();
      },
      focus: () => {
        u.value.focus();
      }
    }), we(pe, {
      activeIndex: ee(a, "activeIndex"),
      setActiveIndex: H,
      selectOption: L,
      onFocus: B,
      onBlur: F,
      loading: ee(e, "loading")
    }), Pe(() => {
      Ie(() => {
        a.measuring && (s.value.scrollTop = u.value.getScrollTop());
      });
    }), () => {
      const {
        measureLocation: l,
        measurePrefix: f,
        measuring: r
      } = a, {
        prefixCls: m,
        placement: g,
        transitionName: P,
        getPopupContainer: V,
        direction: E
      } = e, D = re(e, ["prefixCls", "placement", "transitionName", "getPopupContainer", "direction"]), {
        class: N,
        style: $
      } = t, I = re(t, ["class", "style"]), z = de(D, ["value", "prefix", "split", "validateSearch", "filterOption", "options", "loading"]), W = c(c(c({}, z), I), {
        onChange: se,
        onSelect: se,
        value: a.value,
        onInput: M,
        onBlur: T,
        onKeydown: x,
        onKeyup: C,
        onFocus: w,
        onPressenter: y
      });
      return h("div", {
        class: q(m, N),
        style: $
      }, [h(ze, U(U({}, W), {}, {
        ref: u,
        tag: "textarea"
      }), null), r && h("div", {
        ref: s,
        class: `${m}-measure`
      }, [a.value.slice(0, l), h(mt, {
        prefixCls: m,
        transitionName: P,
        dropdownClassName: e.dropdownClassName,
        placement: g,
        options: r ? R.value : [],
        visible: !0,
        direction: E,
        getPopupContainer: V
      }, {
        default: () => [h("span", null, [f])],
        notFoundContent: d.notFoundContent,
        option: d.option
      }), a.value.slice(l + f.length)])]);
    };
  }
}), xt = {
  value: String,
  disabled: Boolean,
  payload: Ve()
}, ve = c(c({}, xt), {
  label: He([])
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
A(c({
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
    inputPaddingHorizontal: a,
    inputPaddingVertical: b,
    fontSize: M,
    colorBgElevated: S,
    borderRadiusLG: v,
    boxShadowSecondary: x
  } = e, C = Math.round((e.controlHeight - e.fontSize * e.lineHeight) / 2);
  return {
    [o]: c(c(c(c(c({}, ne(e)), ke(e)), {
      position: "relative",
      display: "inline-block",
      height: "auto",
      padding: 0,
      overflow: "hidden",
      lineHeight: u,
      whiteSpace: "pre-wrap",
      verticalAlign: "bottom"
    }), Ue(e, o)), {
      "&-disabled": {
        "> textarea": c({}, Xe(e))
      },
      "&-focused": c({}, Ye(e)),
      [`&-affix-wrapper ${o}-suffix`]: {
        position: "absolute",
        top: 0,
        insetInlineEnd: a,
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
        padding: `${b}px ${a}px`,
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
      }, Ge(e.colorTextPlaceholder)),
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
          "&-item": c(c({}, Qe), {
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
}, St = We("Mentions", (e) => {
  const o = Ke(e);
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
}), G = A({
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
    process.env.NODE_ENV !== "production" && qe(!oe(((s = n.default) === null || s === void 0 ? void 0 : s.call(n)) || []).length, "Mentions", "`Mentions.Option` is deprecated. Please use `options` instead.");
    const {
      prefixCls: a,
      renderEmpty: b,
      direction: M
    } = Je("mentions", e), [S, v] = St(a), x = K(!1), C = K(null), y = K((p = (u = e.value) !== null && u !== void 0 ? u : e.defaultValue) !== null && p !== void 0 ? p : ""), w = Ze(), T = et.useInject(), B = j(() => tt(T.status, e.status));
    nt({
      prefixCls: j(() => `${a.value}-menu`),
      mode: j(() => "vertical"),
      selectable: j(() => !1),
      onClick: () => {
      },
      validator: (r) => {
        let {
          mode: m
        } = r;
        ot(!m || m === "vertical", "Mentions", `mode="${m}" is not supported for Mentions's Menu.`);
      }
    }), Oe(() => e.value, (r) => {
      y.value = r;
    });
    const F = (r) => {
      x.value = !0, t("focus", r);
    }, L = (r) => {
      x.value = !1, t("blur", r), w.onFieldBlur();
    }, H = function() {
      for (var r = arguments.length, m = new Array(r), g = 0; g < r; g++)
        m[g] = arguments[g];
      t("select", ...m), x.value = !0;
    }, k = (r) => {
      e.value === void 0 && (y.value = r), t("update:value", r), t("change", r), w.onFieldChange();
    }, R = () => {
      const r = e.notFoundContent;
      return r !== void 0 ? r : n.notFoundContent ? n.notFoundContent() : b("Select");
    }, J = () => {
      var r;
      return oe(((r = n.default) === null || r === void 0 ? void 0 : r.call(n)) || []).map((m) => {
        var g, P;
        return c(c({}, at(m)), {
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
    const f = j(() => e.loading ? Ct : e.filterOption);
    return () => {
      const {
        disabled: r,
        getPopupContainer: m,
        rows: g = 1,
        id: P = w.id.value
      } = e, V = le(e, ["disabled", "getPopupContainer", "rows", "id"]), {
        hasFeedback: E,
        feedbackIcon: D
      } = T, {
        class: N
      } = i, $ = le(i, ["class"]), I = de(V, ["defaultValue", "onUpdate:value", "prefixCls"]), z = q({
        [`${a.value}-disabled`]: r,
        [`${a.value}-focused`]: x.value,
        [`${a.value}-rtl`]: M.value === "rtl"
      }, ae(a.value, B.value), !E && N, v.value), W = c(c(c(c({
        prefixCls: a.value
      }, I), {
        disabled: r,
        direction: M.value,
        filterOption: f.value,
        getPopupContainer: m,
        options: e.loading ? [{
          value: "ANTDV_SEARCHING",
          disabled: !0,
          label: h(ue, {
            size: "small"
          }, null)
        }] : e.options || J(),
        class: z
      }), $), {
        rows: g,
        onChange: k,
        onSelect: H,
        onFocus: F,
        onBlur: L,
        ref: C,
        value: y.value,
        id: P
      }), Z = h(ht, U(U({}, W), {}, {
        dropdownClassName: v.value
      }), {
        notFoundContent: R,
        option: n.option
      });
      return S(E ? h("div", {
        class: q(`${a.value}-affix-wrapper`, ae(`${a.value}-affix-wrapper`, B.value, E), N, v.value)
      }, [Z, h("span", {
        class: `${a.value}-suffix`
      }, [D])]) : Z);
    };
  }
}), Q = A(c(c({
  compatConfig: {
    MODE: 3
  }
}, he), {
  name: "AMentionsOption",
  props: ve
})), Pt = c(G, {
  Option: Q,
  getMentions: yt,
  install: (e) => (e.component(G.name, G), e.component(Q.name, Q), e)
}), Mt = /* @__PURE__ */ A({
  __name: "Mentions",
  setup(e) {
    return (o, n) => (te(), Me(Te(Pt), Fe(Ee(o.$attrs)), {
      default: Ne(() => [
        (te(!0), $e(Be, null, _e(o.$slots, (t, i) => je(o.$slots, i, { key: i })), 128))
      ]),
      _: 3
    }, 16));
  }
});
export {
  Mt as default
};
