import { defineComponent as j, inject as be, shallowRef as K, onBeforeUnmount as Se, createVNode as h, computed as L, ref as X, reactive as Ce, watchEffect as ye, provide as we, toRef as ee, onUpdated as Pe, nextTick as Oe, watch as Ie, openBlock as te, createBlock as Me, unref as Fe, normalizeProps as Te, guardReactiveProps as Ee, withCtx as $e, createElementBlock as Ne, Fragment as Be, renderList as _e, renderSlot as Le } from "vue";
import { b7 as je, b8 as Y, b9 as ue, aM as Ae, L as Re, P as _, a6 as De, c, i as ce, N as de, f as Z, ba as ze, h as k, K as I, Z as He, F as Ve, g as We, aQ as Ke, r as ne, aU as Ue, bb as ke, bc as Xe, aS as Ye, bd as Ge, ae as Qe, y as Ze, aj as oe, u as qe, e as Je, aB as et, aC as tt, be as nt, k as ot, aH as ae, bf as at } from "./index-DUumM_Dw.js";
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
const ft = j({
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
      return h(je, {
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
        onMousedown: a
      }, {
        default: () => [!u.value && S.map((x, C) => {
          var y, w;
          const {
            value: F,
            disabled: B,
            label: T = x.value,
            class: A,
            style: H
          } = x;
          return h(Y, {
            key: F,
            disabled: B,
            onMouseenter: () => {
              i(C);
            },
            class: A,
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
}, mt = j({
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
    }, d = L(() => {
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
      return h(Ae, {
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
const ht = j({
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
        if (f === I.UP || f === I.DOWN) {
          const r = R.value.length, m = f === I.UP ? -1 : 1, g = (a.activeIndex + m + r) % r;
          a.activeIndex = g, l.preventDefault();
        } else if (f === I.ESC)
          v();
        else if (f === I.ENTER) {
          if (l.preventDefault(), !R.value.length) {
            v();
            return;
          }
          const r = R.value[a.activeIndex];
          A(r);
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
        location: $,
        prefix: N
      } = rt(D, P);
      if ([I.ESC, I.UP, I.DOWN, I.ENTER].indexOf(r) === -1)
        if ($ !== -1) {
          const O = D.slice($ + N.length), z = V(O, e), W = !!U(O).length;
          z ? (f === N || f === "Shift" || g || O !== m && W) && S(O, N, $) : g && v(), z && n("search", O, N);
        } else
          g && v();
    }, y = (l) => {
      a.measuring || n("pressenter", l);
    }, w = (l) => {
      B(l);
    }, F = (l) => {
      T(l);
    }, B = (l) => {
      clearTimeout(p.value);
      const {
        isFocus: f
      } = a;
      !f && l && n("focus", l), a.isFocus = !0;
    }, T = (l) => {
      p.value = setTimeout(() => {
        a.isFocus = !1, v(), n("blur", l);
      }, 100);
    }, A = (l) => {
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
    }, U = (l) => {
      const f = l || a.measureText || "", {
        filterOption: r
      } = e;
      return e.options.filter((g) => r ? r(f, g) : !0);
    }, R = L(() => U());
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
      selectOption: A,
      onFocus: B,
      onBlur: T,
      loading: ee(e, "loading")
    }), Pe(() => {
      Oe(() => {
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
        class: $,
        style: N
      } = t, O = re(t, ["class", "style"]), z = de(D, ["value", "prefix", "split", "validateSearch", "filterOption", "options", "loading"]), W = c(c(c({}, z), O), {
        onChange: se,
        onSelect: se,
        value: a.value,
        onInput: M,
        onBlur: F,
        onKeydown: x,
        onKeyup: C,
        onFocus: w,
        onPressenter: y
      });
      return h("div", {
        class: Z(m, $),
        style: N
      }, [h(ze, k(k({}, W), {}, {
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
j(c({
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
    [o]: c(c(c(c(c({}, ne(e)), Ue(e)), {
      position: "relative",
      display: "inline-block",
      height: "auto",
      padding: 0,
      overflow: "hidden",
      lineHeight: u,
      whiteSpace: "pre-wrap",
      verticalAlign: "bottom"
    }), ke(e, o)), {
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
}), G = j({
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
    process.env.NODE_ENV !== "production" && Ze(!oe(((s = n.default) === null || s === void 0 ? void 0 : s.call(n)) || []).length, "Mentions", "`Mentions.Option` is deprecated. Please use `options` instead.");
    const {
      prefixCls: a,
      renderEmpty: b,
      direction: M
    } = qe("mentions", e), [S, v] = St(a), x = K(!1), C = K(null), y = K((p = (u = e.value) !== null && u !== void 0 ? u : e.defaultValue) !== null && p !== void 0 ? p : ""), w = Je(), F = et.useInject(), B = L(() => tt(F.status, e.status));
    nt({
      prefixCls: L(() => `${a.value}-menu`),
      mode: L(() => "vertical"),
      selectable: L(() => !1),
      onClick: () => {
      },
      validator: (r) => {
        let {
          mode: m
        } = r;
        ot(!m || m === "vertical", "Mentions", `mode="${m}" is not supported for Mentions's Menu.`);
      }
    }), Ie(() => e.value, (r) => {
      y.value = r;
    });
    const T = (r) => {
      x.value = !0, t("focus", r);
    }, A = (r) => {
      x.value = !1, t("blur", r), w.onFieldBlur();
    }, H = function() {
      for (var r = arguments.length, m = new Array(r), g = 0; g < r; g++)
        m[g] = arguments[g];
      t("select", ...m), x.value = !0;
    }, U = (r) => {
      e.value === void 0 && (y.value = r), t("update:value", r), t("change", r), w.onFieldChange();
    }, R = () => {
      const r = e.notFoundContent;
      return r !== void 0 ? r : n.notFoundContent ? n.notFoundContent() : b("Select");
    }, q = () => {
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
    const f = L(() => e.loading ? Ct : e.filterOption);
    return () => {
      const {
        disabled: r,
        getPopupContainer: m,
        rows: g = 1,
        id: P = w.id.value
      } = e, V = le(e, ["disabled", "getPopupContainer", "rows", "id"]), {
        hasFeedback: E,
        feedbackIcon: D
      } = F, {
        class: $
      } = i, N = le(i, ["class"]), O = de(V, ["defaultValue", "onUpdate:value", "prefixCls"]), z = Z({
        [`${a.value}-disabled`]: r,
        [`${a.value}-focused`]: x.value,
        [`${a.value}-rtl`]: M.value === "rtl"
      }, ae(a.value, B.value), !E && $, v.value), W = c(c(c(c({
        prefixCls: a.value
      }, O), {
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
        }] : e.options || q(),
        class: z
      }), N), {
        rows: g,
        onChange: U,
        onSelect: H,
        onFocus: T,
        onBlur: A,
        ref: C,
        value: y.value,
        id: P
      }), J = h(ht, k(k({}, W), {}, {
        dropdownClassName: v.value
      }), {
        notFoundContent: R,
        option: n.option
      });
      return S(E ? h("div", {
        class: Z(`${a.value}-affix-wrapper`, ae(`${a.value}-affix-wrapper`, B.value, E), $, v.value)
      }, [J, h("span", {
        class: `${a.value}-suffix`
      }, [D])]) : J);
    };
  }
}), Q = j(c(c({
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
}), Mt = /* @__PURE__ */ j({
  __name: "Mentions",
  setup(e) {
    return (o, n) => (te(), Me(Fe(Pt), Te(Ee(o.$attrs)), {
      default: $e(() => [
        (te(!0), Ne(Be, null, _e(o.$slots, (t, i) => Le(o.$slots, i, { key: i })), 128))
      ]),
      _: 3
    }, 16));
  }
});
export {
  Mt as default
};
