import { h as H, c as R, b as M, _ as z, x as Oe, F as te, u as Z, V as _e, y as Ie, S as Pe, X as ue, Y as ie, P as $e, Z as Se, B as Ae, I as Be, O as Ne } from "./styleChecker-DxpCOgAe.js";
import { defineComponent as q, ref as ne, createVNode as p, shallowRef as L, watch as ce, computed as G, onMounted as me, Fragment as ge, nextTick as de, onBeforeUpdate as Ee, onBeforeUnmount as je, watchEffect as ze } from "vue";
import { a as Re, g as ee } from "./statusUtils-CU924PZO.js";
import { b as Me, h as ae, a as Y, i as Fe, f as fe, t as Te, r as ve, c as le, A as Ve } from "./TextArea-CChD3zVI.js";
import { o as X } from "./omit-BQe9TABq.js";
import { B as ke } from "./BaseInput-mXBF3n6E.js";
import { u as be } from "./index-C2weR3oL.js";
import { S as De } from "./SearchOutlined-DGxW22SU.js";
import { E as Le } from "./EyeOutlined-DiIdp01y.js";
const Ue = q({
  name: "BaseInput",
  inheritAttrs: !1,
  props: Me(),
  setup(e, i) {
    let {
      slots: t,
      attrs: n
    } = i;
    const l = ne(), b = (g) => {
      var d;
      if (!((d = l.value) === null || d === void 0) && d.contains(g.target)) {
        const {
          triggerFocus: O
        } = e;
        O == null || O();
      }
    }, u = () => {
      var g;
      const {
        allowClear: d,
        value: O,
        disabled: x,
        readonly: P,
        handleReset: m,
        suffix: F = t.suffix,
        prefixCls: N
      } = e;
      if (!d)
        return null;
      const _ = !x && !P && O, o = `${N}-clear-icon`, $ = ((g = t.clearIcon) === null || g === void 0 ? void 0 : g.call(t)) || "*";
      return p("span", {
        onClick: m,
        onMousedown: (C) => C.preventDefault(),
        class: R({
          [`${o}-hidden`]: !_,
          [`${o}-has-suffix`]: !!F
        }, o),
        role: "button",
        tabindex: -1
      }, [$]);
    };
    return () => {
      var g, d;
      const {
        focused: O,
        value: x,
        disabled: P,
        allowClear: m,
        readonly: F,
        hidden: N,
        prefixCls: _,
        prefix: o = (g = t.prefix) === null || g === void 0 ? void 0 : g.call(t),
        suffix: $ = (d = t.suffix) === null || d === void 0 ? void 0 : d.call(t),
        addonAfter: C = t.addonAfter,
        addonBefore: y = t.addonBefore,
        inputElement: E,
        affixWrapperClassName: s,
        wrapperClassName: h,
        groupClassName: a
      } = e;
      let v = H(E, {
        value: x,
        hidden: N
      });
      if (ae({
        prefix: o,
        suffix: $,
        allowClear: m
      })) {
        const c = `${_}-affix-wrapper`, w = R(c, {
          [`${c}-disabled`]: P,
          [`${c}-focused`]: O,
          [`${c}-readonly`]: F,
          [`${c}-input-with-clear-btn`]: $ && m && x
        }, !Y({
          addonAfter: C,
          addonBefore: y
        }) && n.class, s), j = ($ || m) && p("span", {
          class: `${_}-suffix`
        }, [u(), $]);
        v = p("span", {
          class: w,
          style: n.style,
          hidden: !Y({
            addonAfter: C,
            addonBefore: y
          }) && N,
          onMousedown: b,
          ref: l
        }, [o && p("span", {
          class: `${_}-prefix`
        }, [o]), H(E, {
          style: null,
          value: x,
          hidden: null
        }), j]);
      }
      if (Y({
        addonAfter: C,
        addonBefore: y
      })) {
        const c = `${_}-group`, w = `${c}-addon`, j = R(`${_}-wrapper`, c, h), D = R(`${_}-group-wrapper`, n.class, a);
        return p("span", {
          class: D,
          style: n.style,
          hidden: N
        }, [p("span", {
          class: j
        }, [y && p("span", {
          class: w
        }, [y]), H(v, {
          style: null,
          hidden: null
        }), C && p("span", {
          class: w
        }, [C])])]);
      }
      return v;
    };
  }
});
var Ge = function(e, i) {
  var t = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && i.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
      i.indexOf(n[l]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[l]) && (t[n[l]] = e[n[l]]);
  return t;
};
const We = q({
  name: "VCInput",
  inheritAttrs: !1,
  props: Fe(),
  setup(e, i) {
    let {
      slots: t,
      attrs: n,
      expose: l,
      emit: b
    } = i;
    const u = L(e.value === void 0 ? e.defaultValue : e.value), g = L(!1), d = L(), O = L();
    ce(() => e.value, () => {
      u.value = e.value;
    }), ce(() => e.disabled, () => {
      e.disabled && (g.value = !1);
    });
    const x = (a) => {
      d.value && Te(d.value.input, a);
    }, P = () => {
      var a;
      (a = d.value.input) === null || a === void 0 || a.blur();
    }, m = (a, v, c) => {
      var w;
      (w = d.value.input) === null || w === void 0 || w.setSelectionRange(a, v, c);
    }, F = () => {
      var a;
      (a = d.value.input) === null || a === void 0 || a.select();
    };
    l({
      focus: x,
      blur: P,
      input: G(() => {
        var a;
        return (a = d.value.input) === null || a === void 0 ? void 0 : a.input;
      }),
      stateValue: u,
      setSelectionRange: m,
      select: F
    });
    const N = (a) => {
      b("change", a);
    }, _ = (a, v) => {
      u.value !== a && (e.value === void 0 ? u.value = a : de(() => {
        var c;
        d.value.input.value !== u.value && ((c = O.value) === null || c === void 0 || c.$forceUpdate());
      }), de(() => {
        v && v();
      }));
    }, o = (a) => {
      const {
        value: v
      } = a.target;
      if (u.value === v)
        return;
      const c = a.target.value;
      ve(d.value.input, a, N), _(c);
    }, $ = (a) => {
      a.keyCode === 13 && b("pressEnter", a), b("keydown", a);
    }, C = (a) => {
      g.value = !0, b("focus", a);
    }, y = (a) => {
      g.value = !1, b("blur", a);
    }, E = (a) => {
      ve(d.value.input, a, N), _("", () => {
        x();
      });
    }, s = () => {
      var a, v;
      const {
        addonBefore: c = t.addonBefore,
        addonAfter: w = t.addonAfter,
        disabled: j,
        valueModifiers: D = {},
        htmlSize: r,
        autocomplete: f,
        prefixCls: S,
        inputClassName: A,
        prefix: T = (a = t.prefix) === null || a === void 0 ? void 0 : a.call(t),
        suffix: V = (v = t.suffix) === null || v === void 0 ? void 0 : v.call(t),
        allowClear: k,
        type: Q = "text"
      } = e, W = X(e, [
        "prefixCls",
        "onPressEnter",
        "addonBefore",
        "addonAfter",
        "prefix",
        "suffix",
        "allowClear",
        // Input elements must be either controlled or uncontrolled,
        // specify either the value prop, or the defaultValue prop, but not both.
        "defaultValue",
        "size",
        "bordered",
        "htmlSize",
        "lazy",
        "showCount",
        "valueModifiers",
        "showCount",
        "affixWrapperClassName",
        "groupClassName",
        "inputClassName",
        "wrapperClassName"
      ]), U = z(z(z({}, W), n), {
        autocomplete: f,
        onChange: o,
        onInput: o,
        onFocus: C,
        onBlur: y,
        onKeydown: $,
        class: R(S, {
          [`${S}-disabled`]: j
        }, A, !Y({
          addonAfter: w,
          addonBefore: c
        }) && !ae({
          prefix: T,
          suffix: V,
          allowClear: k
        }) && n.class),
        ref: d,
        key: "ant-input",
        size: r,
        type: Q,
        lazy: e.lazy
      });
      return D.lazy && delete U.onInput, U.autofocus || delete U.autofocus, p(ke, X(U, ["size"]), null);
    }, h = () => {
      var a;
      const {
        maxlength: v,
        suffix: c = (a = t.suffix) === null || a === void 0 ? void 0 : a.call(t),
        showCount: w,
        prefixCls: j
      } = e, D = Number(v) > 0;
      if (c || w) {
        const r = [...fe(u.value)].length, f = typeof w == "object" ? w.formatter({
          count: r,
          maxlength: v
        }) : `${r}${D ? ` / ${v}` : ""}`;
        return p(ge, null, [!!w && p("span", {
          class: R(`${j}-show-count-suffix`, {
            [`${j}-show-count-has-suffix`]: !!c
          })
        }, [f]), c]);
      }
      return null;
    };
    return me(() => {
      process.env.NODE_ENV === "test" && e.autofocus && x();
    }), () => {
      const {
        prefixCls: a,
        disabled: v
      } = e, c = Ge(e, ["prefixCls", "disabled"]);
      return p(Ue, M(M(M({}, c), n), {}, {
        ref: O,
        prefixCls: a,
        inputElement: s(),
        handleReset: E,
        value: fe(u.value),
        focused: g.value,
        triggerFocus: x,
        suffix: h(),
        disabled: v
      }), t);
    };
  }
});
var qe = function(e, i) {
  var t = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && i.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
      i.indexOf(n[l]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[l]) && (t[n[l]] = e[n[l]]);
  return t;
};
const I = q({
  compatConfig: {
    MODE: 3
  },
  name: "AInput",
  inheritAttrs: !1,
  props: le(),
  setup(e, i) {
    let {
      slots: t,
      attrs: n,
      expose: l,
      emit: b
    } = i;
    const u = ne(), g = Oe(), d = te.useInject(), O = G(() => Re(d.status, e.status)), {
      direction: x,
      prefixCls: P,
      size: m,
      autocomplete: F
    } = Z("input", e), {
      compactSize: N,
      compactItemClassnames: _
    } = _e(P, x), o = G(() => N.value || m.value), [$, C] = be(P), y = Ie();
    l({
      focus: (r) => {
        var f;
        (f = u.value) === null || f === void 0 || f.focus(r);
      },
      blur: () => {
        var r;
        (r = u.value) === null || r === void 0 || r.blur();
      },
      input: u,
      setSelectionRange: (r, f, S) => {
        var A;
        (A = u.value) === null || A === void 0 || A.setSelectionRange(r, f, S);
      },
      select: () => {
        var r;
        (r = u.value) === null || r === void 0 || r.select();
      }
    });
    const v = ne([]), c = () => {
      v.value.push(setTimeout(() => {
        var r, f, S, A;
        !((r = u.value) === null || r === void 0) && r.input && ((f = u.value) === null || f === void 0 ? void 0 : f.input.getAttribute("type")) === "password" && (!((S = u.value) === null || S === void 0) && S.input.hasAttribute("value")) && ((A = u.value) === null || A === void 0 || A.input.removeAttribute("value"));
      }));
    };
    me(() => {
      c();
    }), Ee(() => {
      v.value.forEach((r) => clearTimeout(r));
    }), je(() => {
      v.value.forEach((r) => clearTimeout(r));
    });
    const w = (r) => {
      c(), b("blur", r), g.onFieldBlur();
    }, j = (r) => {
      c(), b("focus", r);
    }, D = (r) => {
      b("update:value", r.target.value), b("change", r), b("input", r), g.onFieldChange();
    };
    return () => {
      var r, f, S, A, T, V;
      const {
        hasFeedback: k,
        feedbackIcon: Q
      } = d, {
        allowClear: W,
        bordered: U = !0,
        prefix: J = (r = t.prefix) === null || r === void 0 ? void 0 : r.call(t),
        suffix: K = (f = t.suffix) === null || f === void 0 ? void 0 : f.call(t),
        addonAfter: se = (S = t.addonAfter) === null || S === void 0 ? void 0 : S.call(t),
        addonBefore: re = (A = t.addonBefore) === null || A === void 0 ? void 0 : A.call(t),
        id: xe = (T = g.id) === null || T === void 0 ? void 0 : T.value
      } = e, Ce = qe(e, ["allowClear", "bordered", "prefix", "suffix", "addonAfter", "addonBefore", "id"]), he = (k || K) && p(ge, null, [K, k && Q]), B = P.value, ye = ae({
        prefix: J,
        suffix: K
      }) || !!k, we = t.clearIcon || (() => p(Pe, null, null));
      return $(p(We, M(M(M({}, n), X(Ce, ["onUpdate:value", "onChange", "onInput"])), {}, {
        onChange: D,
        id: xe,
        disabled: (V = e.disabled) !== null && V !== void 0 ? V : y.value,
        ref: u,
        prefixCls: B,
        autocomplete: F.value,
        onBlur: w,
        onFocus: j,
        prefix: J,
        suffix: he,
        allowClear: W,
        addonAfter: se && p(ue, null, {
          default: () => [p(ie, null, {
            default: () => [se]
          })]
        }),
        addonBefore: re && p(ue, null, {
          default: () => [p(ie, null, {
            default: () => [re]
          })]
        }),
        class: [n.class, _.value],
        inputClassName: R({
          [`${B}-sm`]: o.value === "small",
          [`${B}-lg`]: o.value === "large",
          [`${B}-rtl`]: x.value === "rtl",
          [`${B}-borderless`]: !U
        }, !ye && ee(B, O.value), C.value),
        affixWrapperClassName: R({
          [`${B}-affix-wrapper-sm`]: o.value === "small",
          [`${B}-affix-wrapper-lg`]: o.value === "large",
          [`${B}-affix-wrapper-rtl`]: x.value === "rtl",
          [`${B}-affix-wrapper-borderless`]: !U
        }, ee(`${B}-affix-wrapper`, O.value, k), C.value),
        wrapperClassName: R({
          [`${B}-group-rtl`]: x.value === "rtl"
        }, C.value),
        groupClassName: R({
          [`${B}-group-wrapper-sm`]: o.value === "small",
          [`${B}-group-wrapper-lg`]: o.value === "large",
          [`${B}-group-wrapper-rtl`]: x.value === "rtl"
        }, ee(`${B}-group-wrapper`, O.value, k), C.value)
      }), z(z({}, t), {
        clearIcon: we
      })));
    };
  }
}), Qe = q({
  compatConfig: {
    MODE: 3
  },
  name: "AInputGroup",
  inheritAttrs: !1,
  props: {
    prefixCls: String,
    size: {
      type: String
    },
    compact: {
      type: Boolean,
      default: void 0
    }
  },
  setup(e, i) {
    let {
      slots: t,
      attrs: n
    } = i;
    const {
      prefixCls: l,
      direction: b,
      getPrefixCls: u
    } = Z("input-group", e), g = te.useInject();
    te.useProvide(g, {
      isFormItemInput: !1
    });
    const d = G(() => u("input")), [O, x] = be(d), P = G(() => {
      const m = l.value;
      return {
        [`${m}`]: !0,
        [x.value]: !0,
        [`${m}-lg`]: e.size === "large",
        [`${m}-sm`]: e.size === "small",
        [`${m}-compact`]: e.compact,
        [`${m}-rtl`]: b.value === "rtl"
      };
    });
    return () => {
      var m;
      return O(p("span", M(M({}, n), {}, {
        class: R(P.value, n.class)
      }), [(m = t.default) === null || m === void 0 ? void 0 : m.call(t)]));
    };
  }
});
var He = function(e, i) {
  var t = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && i.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
      i.indexOf(n[l]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[l]) && (t[n[l]] = e[n[l]]);
  return t;
};
const Xe = q({
  compatConfig: {
    MODE: 3
  },
  name: "AInputSearch",
  inheritAttrs: !1,
  props: z(z({}, le()), {
    inputPrefixCls: String,
    // 不能设置默认值 https://github.com/vueComponent/ant-design-vue/issues/1916
    enterButton: $e.any,
    onSearch: {
      type: Function
    }
  }),
  setup(e, i) {
    let {
      slots: t,
      attrs: n,
      expose: l,
      emit: b
    } = i;
    const u = L(), g = L(!1);
    l({
      focus: () => {
        var s;
        (s = u.value) === null || s === void 0 || s.focus();
      },
      blur: () => {
        var s;
        (s = u.value) === null || s === void 0 || s.blur();
      }
    });
    const x = (s) => {
      b("update:value", s.target.value), s && s.target && s.type === "click" && b("search", s.target.value, s), b("change", s);
    }, P = (s) => {
      var h;
      document.activeElement === ((h = u.value) === null || h === void 0 ? void 0 : h.input) && s.preventDefault();
    }, m = (s) => {
      var h, a;
      b("search", (a = (h = u.value) === null || h === void 0 ? void 0 : h.input) === null || a === void 0 ? void 0 : a.stateValue, s);
    }, F = (s) => {
      g.value || e.loading || m(s);
    }, N = (s) => {
      g.value = !0, b("compositionstart", s);
    }, _ = (s) => {
      g.value = !1, b("compositionend", s);
    }, {
      prefixCls: o,
      getPrefixCls: $,
      direction: C,
      size: y
    } = Z("input-search", e), E = G(() => $("input", e.inputPrefixCls));
    return () => {
      var s, h, a, v;
      const {
        disabled: c,
        loading: w,
        addonAfter: j = (s = t.addonAfter) === null || s === void 0 ? void 0 : s.call(t),
        suffix: D = (h = t.suffix) === null || h === void 0 ? void 0 : h.call(t)
      } = e, r = He(e, ["disabled", "loading", "addonAfter", "suffix"]);
      let {
        enterButton: f = (v = (a = t.enterButton) === null || a === void 0 ? void 0 : a.call(t)) !== null && v !== void 0 ? v : !1
      } = e;
      f = f || f === "";
      const S = typeof f == "boolean" ? p(De, null, null) : null, A = `${o.value}-button`, T = Array.isArray(f) ? f[0] : f;
      let V;
      const k = T.type && Se(T.type) && T.type.__ANT_BUTTON;
      if (k || T.tagName === "button")
        V = H(T, z({
          onMousedown: P,
          onClick: m,
          key: "enterButton"
        }, k ? {
          class: A,
          size: y.value
        } : {}), !1);
      else {
        const W = S && !f;
        V = p(Ae, {
          class: A,
          type: f ? "primary" : void 0,
          size: y.value,
          disabled: c,
          key: "enterButton",
          onMousedown: P,
          onClick: m,
          loading: w,
          icon: W ? S : null
        }, {
          default: () => [W ? null : S || f]
        });
      }
      j && (V = [V, j]);
      const Q = R(o.value, {
        [`${o.value}-rtl`]: C.value === "rtl",
        [`${o.value}-${y.value}`]: !!y.value,
        [`${o.value}-with-button`]: !!f
      }, n.class);
      return p(I, M(M(M({
        ref: u
      }, X(r, ["onUpdate:value", "onSearch", "enterButton"])), n), {}, {
        onPressEnter: F,
        onCompositionstart: N,
        onCompositionend: _,
        size: y.value,
        prefixCls: E.value,
        addonAfter: V,
        suffix: D,
        onChange: x,
        class: Q,
        disabled: c
      }), t);
    };
  }
});
var Ye = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z" } }, { tag: "path", attrs: { d: "M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z" } }] }, name: "eye-invisible", theme: "outlined" };
function pe(e) {
  for (var i = 1; i < arguments.length; i++) {
    var t = arguments[i] != null ? Object(arguments[i]) : {}, n = Object.keys(t);
    typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(l) {
      return Object.getOwnPropertyDescriptor(t, l).enumerable;
    }))), n.forEach(function(l) {
      Ze(e, l, t[l]);
    });
  }
  return e;
}
function Ze(e, i, t) {
  return i in e ? Object.defineProperty(e, i, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[i] = t, e;
}
var oe = function(i, t) {
  var n = pe({}, i, t.attrs);
  return p(Be, pe({}, n, {
    icon: Ye
  }), null);
};
oe.displayName = "EyeInvisibleOutlined";
oe.inheritAttrs = !1;
var Je = function(e, i) {
  var t = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && i.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
      i.indexOf(n[l]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[l]) && (t[n[l]] = e[n[l]]);
  return t;
};
const Ke = {
  click: "onClick",
  hover: "onMouseover"
}, et = (e) => e ? p(Le, null, null) : p(oe, null, null), tt = q({
  compatConfig: {
    MODE: 3
  },
  name: "AInputPassword",
  inheritAttrs: !1,
  props: z(z({}, le()), {
    prefixCls: String,
    inputPrefixCls: String,
    action: {
      type: String,
      default: "click"
    },
    visibilityToggle: {
      type: Boolean,
      default: !0
    },
    visible: {
      type: Boolean,
      default: void 0
    },
    "onUpdate:visible": Function,
    iconRender: Function
  }),
  setup(e, i) {
    let {
      slots: t,
      attrs: n,
      expose: l,
      emit: b
    } = i;
    const u = L(!1), g = () => {
      const {
        disabled: o
      } = e;
      o || (u.value = !u.value, b("update:visible", u.value));
    };
    ze(() => {
      e.visible !== void 0 && (u.value = !!e.visible);
    });
    const d = L();
    l({
      focus: () => {
        var o;
        (o = d.value) === null || o === void 0 || o.focus();
      },
      blur: () => {
        var o;
        (o = d.value) === null || o === void 0 || o.blur();
      }
    });
    const P = (o) => {
      const {
        action: $,
        iconRender: C = t.iconRender || et
      } = e, y = Ke[$] || "", E = C(u.value), s = {
        [y]: g,
        class: `${o}-icon`,
        key: "passwordIcon",
        onMousedown: (h) => {
          h.preventDefault();
        },
        onMouseup: (h) => {
          h.preventDefault();
        }
      };
      return H(Ne(E) ? E : p("span", null, [E]), s);
    }, {
      prefixCls: m,
      getPrefixCls: F
    } = Z("input-password", e), N = G(() => F("input", e.inputPrefixCls)), _ = () => {
      const {
        size: o,
        visibilityToggle: $
      } = e, C = Je(e, ["size", "visibilityToggle"]), y = $ && P(m.value), E = R(m.value, n.class, {
        [`${m.value}-${o}`]: !!o
      }), s = z(z(z({}, X(C, ["suffix", "iconRender", "action"])), n), {
        type: u.value ? "text" : "password",
        class: E,
        prefixCls: N.value,
        suffix: y
      });
      return o && (s.size = o), p(I, M({
        ref: d
      }, s), t);
    };
    return () => _();
  }
});
I.Group = Qe;
I.Search = Xe;
I.TextArea = Ve;
I.Password = tt;
I.install = function(e) {
  return e.component(I.name, I), e.component(I.Group.name, I.Group), e.component(I.Search.name, I.Search), e.component(I.TextArea.name, I.TextArea), e.component(I.Password.name, I.Password), e;
};
export {
  I
};
