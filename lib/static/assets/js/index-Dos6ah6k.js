import { c as pe, b as U, O as he, z as ze, _ as E, ac as q, ad as _e, i as Me, ae as Pe, P as se, x as Ge, F as Ke, H as We, u as Ue, V as Xe, y as qe, af as Ye, ag as Je, ah as Qe, a3 as Ne, v as fe, t as Ze, q as et } from "./styleChecker-DxpCOgAe.js";
import { provide as tt, inject as nt, defineComponent as Oe, computed as S, reactive as lt, watch as ye, toRaw as ke, nextTick as Ae, createVNode as H, Fragment as ot, shallowRef as ie, watchEffect as me, toRef as Q, ref as Te } from "vue";
import { u as at, L as it, T as st, c as ut, i as Le, a as Se, b as rt, f as ct, d as dt, t as ft, B as vt, e as mt, g as pt, h as ht } from "./index-C6Cob-ZZ.js";
import { K as W } from "./KeyCode-n3eOOGSl.js";
import { p as bt } from "./CheckOutlined-BYqjK3An.js";
import { u as gt } from "./move-CqgfczsM.js";
import { o as be } from "./omit-BQe9TABq.js";
import { u as Ee } from "./useMergedState-6HyZ0xMy.js";
import { a as yt, g as St } from "./statusUtils-CU924PZO.js";
function Ot() {
  return /(mac\sos|macintosh)/i.test(navigator.appVersion);
}
const Re = Symbol("SelectContextKey");
function wt(e) {
  return tt(Re, e);
}
function Ct() {
  return nt(Re, {});
}
var It = function(e, c) {
  var g = {};
  for (var l in e)
    Object.prototype.hasOwnProperty.call(e, l) && c.indexOf(l) < 0 && (g[l] = e[l]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, l = Object.getOwnPropertySymbols(e); n < l.length; n++)
      c.indexOf(l[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, l[n]) && (g[l[n]] = e[l[n]]);
  return g;
};
function Fe(e) {
  return typeof e == "string" || typeof e == "number";
}
const Vt = Oe({
  compatConfig: {
    MODE: 3
  },
  name: "OptionList",
  inheritAttrs: !1,
  setup(e, c) {
    let {
      expose: g,
      slots: l
    } = c;
    const n = at(), u = Ct(), v = S(() => `${n.prefixCls}-item`), d = gt(() => u.flattenOptions, [() => n.open, () => u.flattenOptions], (o) => o[0]), m = ut(), y = (o) => {
      o.preventDefault();
    }, p = (o) => {
      m.current && m.current.scrollTo(typeof o == "number" ? {
        index: o
      } : o);
    }, O = function(o) {
      let b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
      const _ = d.value.length;
      for (let f = 0; f < _; f += 1) {
        const P = (o + f * b + _) % _, {
          group: B,
          data: z
        } = d.value[P];
        if (!B && !z.disabled)
          return P;
      }
      return -1;
    }, F = lt({
      activeIndex: O(0)
    }), I = function(o) {
      let b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      F.activeIndex = o;
      const _ = {
        source: b ? "keyboard" : "mouse"
      }, f = d.value[o];
      if (!f) {
        u.onActiveValue(null, -1, _);
        return;
      }
      u.onActiveValue(f.value, o, _);
    };
    ye([() => d.value.length, () => n.searchValue], () => {
      I(u.defaultActiveFirstOption !== !1 ? O(0) : -1);
    }, {
      immediate: !0
    });
    const w = (o) => u.rawValues.has(o) && n.mode !== "combobox";
    ye([() => n.open, () => n.searchValue], () => {
      if (!n.multiple && n.open && u.rawValues.size === 1) {
        const o = Array.from(u.rawValues)[0], b = ke(d.value).findIndex((_) => {
          let {
            data: f
          } = _;
          return f[u.fieldNames.value] === o;
        });
        b !== -1 && (I(b), Ae(() => {
          p(b);
        }));
      }
      n.open && Ae(() => {
        var o;
        (o = m.current) === null || o === void 0 || o.scrollTo(void 0);
      });
    }, {
      immediate: !0,
      flush: "post"
    });
    const C = (o) => {
      o !== void 0 && u.onSelect(o, {
        selected: !u.rawValues.has(o)
      }), n.multiple || n.toggleOpen(!1);
    }, x = (o) => typeof o.label == "function" ? o.label() : o.label;
    function D(o) {
      const b = d.value[o];
      if (!b)
        return null;
      const _ = b.data || {}, {
        value: f
      } = _, {
        group: P
      } = b, B = bt(_, !0), z = x(b);
      return b ? H("div", U(U({
        "aria-label": typeof z == "string" && !P ? z : null
      }, B), {}, {
        key: o,
        role: P ? "presentation" : "option",
        id: `${n.id}_list_${o}`,
        "aria-selected": w(f)
      }), [f]) : null;
    }
    return g({
      onKeydown: (o) => {
        const {
          which: b,
          ctrlKey: _
        } = o;
        switch (b) {
          case W.N:
          case W.P:
          case W.UP:
          case W.DOWN: {
            let f = 0;
            if (b === W.UP ? f = -1 : b === W.DOWN ? f = 1 : Ot() && _ && (b === W.N ? f = 1 : b === W.P && (f = -1)), f !== 0) {
              const P = O(F.activeIndex + f, f);
              p(P), I(P, !0);
            }
            break;
          }
          case W.ENTER: {
            const f = d.value[F.activeIndex];
            f && !f.data.disabled ? C(f.value) : C(void 0), n.open && o.preventDefault();
            break;
          }
          case W.ESC:
            n.toggleOpen(!1), n.open && o.stopPropagation();
        }
      },
      onKeyup: () => {
      },
      scrollTo: (o) => {
        p(o);
      }
    }), () => {
      const {
        id: o,
        notFoundContent: b,
        onPopupScroll: _
      } = n, {
        menuItemSelectedIcon: f,
        fieldNames: P,
        virtual: B,
        listHeight: z,
        listItemHeight: ue
      } = u, G = l.option, {
        activeIndex: R
      } = F, re = Object.keys(P).map((L) => P[L]);
      return d.value.length === 0 ? H("div", {
        role: "listbox",
        id: `${o}_list`,
        class: `${v.value}-empty`,
        onMousedown: y
      }, [b]) : H(ot, null, [H("div", {
        role: "listbox",
        id: `${o}_list`,
        style: {
          height: 0,
          width: 0,
          overflow: "hidden"
        }
      }, [D(R - 1), D(R), D(R + 1)]), H(it, {
        itemKey: "key",
        ref: m,
        data: d.value,
        height: z,
        itemHeight: ue,
        fullHeight: !1,
        onMousedown: y,
        onScroll: _,
        virtual: B
      }, {
        default: (L, Z) => {
          var ee;
          const {
            group: ce,
            groupOption: oe,
            data: $,
            value: h
          } = L, {
            key: k
          } = $, T = typeof L.label == "function" ? L.label() : L.label;
          if (ce) {
            const le = (ee = $.title) !== null && ee !== void 0 ? ee : Fe(T) && T;
            return H("div", {
              class: pe(v.value, `${v.value}-group`),
              title: le
            }, [G ? G($) : T !== void 0 ? T : k]);
          }
          const {
            disabled: K,
            title: te,
            children: ne,
            style: de,
            class: t,
            className: a
          } = $, i = It($, ["disabled", "title", "children", "style", "class", "className"]), r = be(i, re), s = w(h), A = `${v.value}-option`, J = pe(v.value, A, t, a, {
            [`${A}-grouped`]: oe,
            [`${A}-active`]: R === Z && !K,
            [`${A}-disabled`]: K,
            [`${A}-selected`]: s
          }), j = x(L), ae = !f || typeof f == "function" || s, N = typeof j == "number" ? j : j || h;
          let ve = Fe(N) ? N.toString() : void 0;
          return te !== void 0 && (ve = te), H("div", U(U({}, r), {}, {
            "aria-selected": s,
            class: J,
            title: ve,
            onMousemove: (le) => {
              i.onMousemove && i.onMousemove(le), !(R === Z || K) && I(Z);
            },
            onClick: (le) => {
              K || C(h), i.onClick && i.onClick(le);
            },
            style: de
          }), [H("div", {
            class: `${A}-content`
          }, [G ? G($) : N]), he(f) || s, ae && H(st, {
            class: `${v.value}-option-state`,
            customizeIcon: f,
            customizeIconProps: {
              isSelected: s
            }
          }, {
            default: () => [s ? "✓" : null]
          })]);
        }
      })]);
    };
  }
});
var xt = function(e, c) {
  var g = {};
  for (var l in e)
    Object.prototype.hasOwnProperty.call(e, l) && c.indexOf(l) < 0 && (g[l] = e[l]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, l = Object.getOwnPropertySymbols(e); n < l.length; n++)
      c.indexOf(l[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, l[n]) && (g[l[n]] = e[l[n]]);
  return g;
};
function _t(e) {
  const c = e, {
    key: g,
    children: l
  } = c, n = c.props, {
    value: u,
    disabled: v
  } = n, d = xt(n, ["value", "disabled"]), m = l == null ? void 0 : l.default;
  return E({
    key: g,
    value: u !== void 0 ? u : g,
    children: m,
    disabled: v || v === ""
  }, d);
}
function we(e) {
  let c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  return ze(e).map((l, n) => {
    var u;
    if (!he(l) || !l.type)
      return null;
    const {
      type: {
        isSelectOptGroup: v
      },
      key: d,
      children: m,
      props: y
    } = l;
    if (c || !v)
      return _t(l);
    const p = m && m.default ? m.default() : void 0, O = (y == null ? void 0 : y.label) || ((u = m.label) === null || u === void 0 ? void 0 : u.call(m)) || d;
    return E(E({
      key: `__RC_SELECT_GRP__${d === null ? n : String(d)}__`
    }, y), {
      label: O,
      options: we(p || [])
    });
  }).filter((l) => l);
}
function Pt(e, c, g) {
  const l = ie(), n = ie(), u = ie(), v = ie([]);
  return ye([e, c], () => {
    e.value ? v.value = ke(e.value).slice() : v.value = we(c.value);
  }, {
    immediate: !0,
    deep: !0
  }), me(() => {
    const d = v.value, m = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), p = g.value;
    function O(F) {
      let I = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      for (let w = 0; w < F.length; w += 1) {
        const C = F[w];
        !C[p.options] || I ? (m.set(C[p.value], C), y.set(C[p.label], C)) : O(C[p.options], !0);
      }
    }
    O(d), l.value = d, n.value = m, u.value = y;
  }), {
    options: l,
    valueOptions: n,
    labelOptions: u
  };
}
function Ce(e) {
  return Array.isArray(e) ? e : e !== void 0 ? [e] : [];
}
const Nt = typeof window < "u" && window.document && window.document.documentElement;
process.env.NODE_ENV;
function At(e) {
  const {
    mode: c,
    options: g,
    children: l,
    backfill: n,
    allowClear: u,
    placeholder: v,
    getInputElement: d,
    showSearch: m,
    onSearch: y,
    defaultOpen: p,
    autofocus: O,
    labelInValue: F,
    value: I,
    inputValue: w,
    optionLabelProp: C
  } = e, x = Le(c), D = m !== void 0 ? m : x || c === "combobox", X = g || we(l);
  if (q(c !== "tags" || X.every((M) => !M.disabled), "Please avoid setting option to disabled in tags mode since user can always type text as tag."), q(c !== "combobox" || !C, "`combobox` mode not support `optionLabelProp`. Please set `value` on Option directly."), q(c === "combobox" || !n, "`backfill` only works with `combobox` mode."), q(c === "combobox" || !d, "`getInputElement` only work with `combobox` mode."), _e(c !== "combobox" || !d || !u || !v, "Customize `getInputElement` should customize clear and placeholder logic instead of configuring `allowClear` and `placeholder`."), y && !D && c !== "combobox" && c !== "tags" && q(!1, "`onSearch` should work with `showSearch` instead of use alone."), _e(!p || O, "`defaultOpen` makes Select open without focus which means it will not close by click outside. You can set `autofocus` if needed."), I != null) {
    const M = Ce(I);
    q(!F || M.every((V) => typeof V == "object" && ("key" in V || "value" in V)), "`value` should in shape of `{ value: string | number, label?: any }` when you set `labelInValue` to `true`"), q(!x || Array.isArray(I), "`value` should be array when `mode` is `multiple` or `tags`");
  }
  if (l) {
    let M = null;
    l.some((V) => {
      var o;
      if (!he(V) || !V.type)
        return !1;
      const {
        type: b
      } = V;
      return b.isSelectOption ? !1 : b.isSelectOptGroup ? !(((o = V.children) === null || o === void 0 ? void 0 : o.default()) || []).every((P) => !he(P) || !V.type || P.type.isSelectOption ? !0 : (M = P.type, !1)) : (M = b, !0);
    }), M && q(!1, `\`children\` should be \`Select.Option\` or \`Select.OptGroup\` instead of \`${M.displayName || M.name || M}\`.`), q(w === void 0, "`inputValue` is deprecated, please use `searchValue` instead.");
  }
}
function ge(e, c) {
  return Ce(e).join("").toUpperCase().includes(c);
}
const Et = (e, c, g, l, n) => S(() => {
  const u = g.value, v = n == null ? void 0 : n.value, d = l == null ? void 0 : l.value;
  if (!u || d === !1)
    return e.value;
  const {
    options: m,
    label: y,
    value: p
  } = c.value, O = [], F = typeof d == "function", I = u.toUpperCase(), w = F ? d : (x, D) => v ? ge(D[v], I) : D[m] ? ge(D[y !== "children" ? y : "label"], I) : ge(D[p], I), C = F ? (x) => Se(x) : (x) => x;
  return e.value.forEach((x) => {
    if (x[m]) {
      if (w(u, C(x)))
        O.push(x);
      else {
        const X = x[m].filter((M) => w(u, C(M)));
        X.length && O.push(E(E({}, x), {
          [m]: X
        }));
      }
      return;
    }
    w(u, C(x)) && O.push(x);
  }), O;
}), Ft = (e, c) => {
  const g = ie({
    values: /* @__PURE__ */ new Map(),
    options: /* @__PURE__ */ new Map()
  });
  return [S(() => {
    const {
      values: u,
      options: v
    } = g.value, d = e.value.map((p) => {
      var O;
      return p.label === void 0 ? E(E({}, p), {
        label: (O = u.get(p.value)) === null || O === void 0 ? void 0 : O.label
      }) : p;
    }), m = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map();
    return d.forEach((p) => {
      m.set(p.value, p), y.set(p.value, c.value.get(p.value) || v.get(p.value));
    }), g.value.values = m, g.value.options = y, d;
  }), (u) => c.value.get(u) || g.value.options.get(u)];
}, Dt = ["inputValue"];
function $e() {
  return E(E({}, mt()), {
    prefixCls: String,
    id: String,
    backfill: {
      type: Boolean,
      default: void 0
    },
    // >>> Field Names
    fieldNames: Object,
    // >>> Search
    /** @deprecated Use `searchValue` instead */
    inputValue: String,
    searchValue: String,
    onSearch: Function,
    autoClearSearchValue: {
      type: Boolean,
      default: void 0
    },
    // >>> Select
    onSelect: Function,
    onDeselect: Function,
    // >>> Options
    /**
     * In Select, `false` means do nothing.
     * In TreeSelect, `false` will highlight match item.
     * It's by design.
     */
    filterOption: {
      type: [Boolean, Function],
      default: void 0
    },
    filterSort: Function,
    optionFilterProp: String,
    optionLabelProp: String,
    options: Array,
    defaultActiveFirstOption: {
      type: Boolean,
      default: void 0
    },
    virtual: {
      type: Boolean,
      default: void 0
    },
    listHeight: Number,
    listItemHeight: Number,
    // >>> Icon
    menuItemSelectedIcon: se.any,
    mode: String,
    labelInValue: {
      type: Boolean,
      default: void 0
    },
    value: se.any,
    defaultValue: se.any,
    onChange: Function,
    children: Array
  });
}
function Mt(e) {
  return !e || typeof e != "object";
}
const kt = Oe({
  compatConfig: {
    MODE: 3
  },
  name: "VcSelect",
  inheritAttrs: !1,
  props: Me($e(), {
    prefixCls: "vc-select",
    autoClearSearchValue: !0,
    listHeight: 200,
    listItemHeight: 20,
    dropdownMatchSelectWidth: !0
  }),
  setup(e, c) {
    let {
      expose: g,
      attrs: l,
      slots: n
    } = c;
    const u = rt(Q(e, "id")), v = S(() => Le(e.mode)), d = S(() => !!(!e.options && e.children)), m = S(() => e.filterOption === void 0 && e.mode === "combobox" ? !1 : e.filterOption), y = S(() => ct(e.fieldNames, d.value)), [p, O] = Ee("", {
      value: S(() => e.searchValue !== void 0 ? e.searchValue : e.inputValue),
      postState: (t) => t || ""
    }), F = Pt(Q(e, "options"), Q(e, "children"), y), {
      valueOptions: I,
      labelOptions: w,
      options: C
    } = F, x = (t) => Ce(t).map((i) => {
      var r, s;
      let A, J, j, ae;
      Mt(i) ? A = i : (j = i.key, J = i.label, A = (r = i.value) !== null && r !== void 0 ? r : j);
      const N = I.value.get(A);
      return N && (J === void 0 && (J = N == null ? void 0 : N[e.optionLabelProp || y.value.label]), j === void 0 && (j = (s = N == null ? void 0 : N.key) !== null && s !== void 0 ? s : A), ae = N == null ? void 0 : N.disabled), {
        label: J,
        value: A,
        key: j,
        disabled: ae,
        option: N
      };
    }), [D, X] = Ee(e.defaultValue, {
      value: Q(e, "value")
    }), M = S(() => {
      var t;
      const a = x(D.value);
      return e.mode === "combobox" && !(!((t = a[0]) === null || t === void 0) && t.value) ? [] : a;
    }), [V, o] = Ft(M, I), b = S(() => {
      if (!e.mode && V.value.length === 1) {
        const t = V.value[0];
        if (t.value === null && (t.label === null || t.label === void 0))
          return [];
      }
      return V.value.map((t) => {
        var a;
        return E(E({}, t), {
          label: (a = typeof t.label == "function" ? t.label() : t.label) !== null && a !== void 0 ? a : t.value
        });
      });
    }), _ = S(() => new Set(V.value.map((t) => t.value)));
    me(() => {
      var t;
      if (e.mode === "combobox") {
        const a = (t = V.value[0]) === null || t === void 0 ? void 0 : t.value;
        a != null && O(String(a));
      }
    }, {
      flush: "post"
    });
    const f = (t, a) => {
      const i = a ?? t;
      return {
        [y.value.value]: t,
        [y.value.label]: i
      };
    }, P = ie();
    me(() => {
      if (e.mode !== "tags") {
        P.value = C.value;
        return;
      }
      const t = C.value.slice(), a = (i) => I.value.has(i);
      [...V.value].sort((i, r) => i.value < r.value ? -1 : 1).forEach((i) => {
        const r = i.value;
        a(r) || t.push(f(r, i.label));
      }), P.value = t;
    });
    const B = Et(P, y, p, m, Q(e, "optionFilterProp")), z = S(() => e.mode !== "tags" || !p.value || B.value.some((t) => t[e.optionFilterProp || "value"] === p.value) ? B.value : [f(p.value), ...B.value]), ue = S(() => e.filterSort ? [...z.value].sort((t, a) => e.filterSort(t, a)) : z.value), G = S(() => dt(ue.value, {
      fieldNames: y.value,
      childrenAsData: d.value
    })), R = (t) => {
      const a = x(t);
      if (X(a), e.onChange && // Trigger event only when value changed
      (a.length !== V.value.length || a.some((i, r) => {
        var s;
        return ((s = V.value[r]) === null || s === void 0 ? void 0 : s.value) !== (i == null ? void 0 : i.value);
      }))) {
        const i = e.labelInValue ? a.map((s) => E(E({}, s), {
          originLabel: s.label,
          label: typeof s.label == "function" ? s.label() : s.label
        })) : a.map((s) => s.value), r = a.map((s) => Se(o(s.value)));
        e.onChange(
          // Value
          v.value ? i : i[0],
          // Option
          v.value ? r : r[0]
        );
      }
    }, [re, L] = Pe(null), [Z, ee] = Pe(0), ce = S(() => e.defaultActiveFirstOption !== void 0 ? e.defaultActiveFirstOption : e.mode !== "combobox"), oe = function(t, a) {
      let {
        source: i = "keyboard"
      } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      ee(a), e.backfill && e.mode === "combobox" && t !== null && i === "keyboard" && L(String(t));
    }, $ = (t, a) => {
      const i = () => {
        var r;
        const s = o(t), A = s == null ? void 0 : s[y.value.label];
        return [e.labelInValue ? {
          label: typeof A == "function" ? A() : A,
          originLabel: A,
          value: t,
          key: (r = s == null ? void 0 : s.key) !== null && r !== void 0 ? r : t
        } : t, Se(s)];
      };
      if (a && e.onSelect) {
        const [r, s] = i();
        e.onSelect(r, s);
      } else if (!a && e.onDeselect) {
        const [r, s] = i();
        e.onDeselect(r, s);
      }
    }, h = (t, a) => {
      let i;
      const r = v.value ? a.selected : !0;
      r ? i = v.value ? [...V.value, t] : [t] : i = V.value.filter((s) => s.value !== t), R(i), $(t, r), e.mode === "combobox" ? L("") : (!v.value || e.autoClearSearchValue) && (O(""), L(""));
    }, k = (t, a) => {
      R(t), (a.type === "remove" || a.type === "clear") && a.values.forEach((i) => {
        $(i.value, !1);
      });
    }, T = (t, a) => {
      var i;
      if (O(t), L(null), a.source === "submit") {
        const r = (t || "").trim();
        if (r) {
          const s = Array.from(/* @__PURE__ */ new Set([..._.value, r]));
          R(s), $(r, !0), O("");
        }
        return;
      }
      a.source !== "blur" && (e.mode === "combobox" && R(t), (i = e.onSearch) === null || i === void 0 || i.call(e, t));
    }, K = (t) => {
      let a = t;
      e.mode !== "tags" && (a = t.map((r) => {
        const s = w.value.get(r);
        return s == null ? void 0 : s.value;
      }).filter((r) => r !== void 0));
      const i = Array.from(/* @__PURE__ */ new Set([..._.value, ...a]));
      R(i), i.forEach((r) => {
        $(r, !0);
      });
    }, te = S(() => e.virtual !== !1 && e.dropdownMatchSelectWidth !== !1);
    wt(ft(E(E({}, F), {
      flattenOptions: G,
      onActiveValue: oe,
      defaultActiveFirstOption: ce,
      onSelect: h,
      menuItemSelectedIcon: Q(e, "menuItemSelectedIcon"),
      rawValues: _,
      fieldNames: y,
      virtual: te,
      listHeight: Q(e, "listHeight"),
      listItemHeight: Q(e, "listItemHeight"),
      childrenAsData: d
    }))), process.env.NODE_ENV !== "production" && me(() => {
      At(e);
    }, {
      flush: "post"
    });
    const ne = Te();
    g({
      focus() {
        var t;
        (t = ne.value) === null || t === void 0 || t.focus();
      },
      blur() {
        var t;
        (t = ne.value) === null || t === void 0 || t.blur();
      },
      scrollTo(t) {
        var a;
        (a = ne.value) === null || a === void 0 || a.scrollTo(t);
      }
    });
    const de = S(() => be(e, [
      "id",
      "mode",
      "prefixCls",
      "backfill",
      "fieldNames",
      // Search
      "inputValue",
      "searchValue",
      "onSearch",
      "autoClearSearchValue",
      // Select
      "onSelect",
      "onDeselect",
      "dropdownMatchSelectWidth",
      // Options
      "filterOption",
      "filterSort",
      "optionFilterProp",
      "optionLabelProp",
      "options",
      "children",
      "defaultActiveFirstOption",
      "menuItemSelectedIcon",
      "virtual",
      "listHeight",
      "listItemHeight",
      // Value
      "value",
      "defaultValue",
      "labelInValue",
      "onChange"
    ]));
    return () => H(vt, U(U(U({}, de.value), l), {}, {
      id: u,
      prefixCls: e.prefixCls,
      ref: ne,
      omitDomProps: Dt,
      mode: e.mode,
      displayValues: b.value,
      onDisplayValuesChange: k,
      searchValue: p.value,
      onSearch: T,
      onSearchSplit: K,
      dropdownMatchSelectWidth: e.dropdownMatchSelectWidth,
      OptionList: Vt,
      emptyOptions: !G.value.length,
      activeValue: re.value,
      activeDescendantId: `${u}_list_${Z.value}`
    }), n);
  }
}), Ie = () => null;
Ie.isSelectOption = !0;
Ie.displayName = "ASelectOption";
const Ve = () => null;
Ve.isSelectOptGroup = !0;
Ve.displayName = "ASelectOptGroup";
const Tt = () => E(E({}, be($e(), ["inputIcon", "mode", "getInputElement", "getRawInputElement", "backfill"])), {
  value: Ne([Array, Object, String, Number]),
  defaultValue: Ne([Array, Object, String, Number]),
  notFoundContent: se.any,
  suffixIcon: se.any,
  itemIcon: se.any,
  size: fe(),
  mode: fe(),
  bordered: Ze(!0),
  transitionName: String,
  choiceTransitionName: fe(""),
  popupClassName: String,
  /** @deprecated Please use `popupClassName` instead */
  dropdownClassName: String,
  placement: fe(),
  status: fe(),
  "onUpdate:value": et()
}), De = "SECRET_COMBOBOX_MODE_DO_NOT_USE", Y = Oe({
  compatConfig: {
    MODE: 3
  },
  name: "ASelect",
  Option: Ie,
  OptGroup: Ve,
  inheritAttrs: !1,
  props: Me(Tt(), {
    listHeight: 256,
    listItemHeight: 24
  }),
  SECRET_COMBOBOX_MODE_DO_NOT_USE: De,
  slots: Object,
  setup(e, c) {
    let {
      attrs: g,
      emit: l,
      slots: n,
      expose: u
    } = c;
    const v = Te(), d = Ge(), m = Ke.useInject(), y = S(() => yt(m.status, e.status)), p = () => {
      var h;
      (h = v.value) === null || h === void 0 || h.focus();
    }, O = () => {
      var h;
      (h = v.value) === null || h === void 0 || h.blur();
    }, F = (h) => {
      var k;
      (k = v.value) === null || k === void 0 || k.scrollTo(h);
    }, I = S(() => {
      const {
        mode: h
      } = e;
      if (h !== "combobox")
        return h === De ? "combobox" : h;
    });
    process.env.NODE_ENV !== "production" && We(!e.dropdownClassName, "Select", "`dropdownClassName` is deprecated. Please use `popupClassName` instead.");
    const {
      prefixCls: w,
      direction: C,
      configProvider: x,
      renderEmpty: D,
      size: X,
      getPrefixCls: M,
      getPopupContainer: V,
      disabled: o,
      select: b
    } = Ue("select", e), {
      compactSize: _,
      compactItemClassnames: f
    } = Xe(w, C), P = S(() => _.value || X.value), B = qe(), z = S(() => {
      var h;
      return (h = o.value) !== null && h !== void 0 ? h : B.value;
    }), [ue, G] = pt(w), R = S(() => M()), re = S(() => e.placement !== void 0 ? e.placement : C.value === "rtl" ? "bottomRight" : "bottomLeft"), L = S(() => Ye(R.value, Je(re.value), e.transitionName)), Z = S(() => pe({
      [`${w.value}-lg`]: P.value === "large",
      [`${w.value}-sm`]: P.value === "small",
      [`${w.value}-rtl`]: C.value === "rtl",
      [`${w.value}-borderless`]: !e.bordered,
      [`${w.value}-in-form-item`]: m.isFormItemInput
    }, St(w.value, y.value, m.hasFeedback), f.value, G.value)), ee = function() {
      for (var h = arguments.length, k = new Array(h), T = 0; T < h; T++)
        k[T] = arguments[T];
      l("update:value", k[0]), l("change", ...k), d.onFieldChange();
    }, ce = (h) => {
      l("blur", h), d.onFieldBlur();
    };
    u({
      blur: O,
      focus: p,
      scrollTo: F
    });
    const oe = S(() => I.value === "multiple" || I.value === "tags"), $ = S(() => e.showArrow !== void 0 ? e.showArrow : e.loading || !(oe.value || I.value === "combobox"));
    return () => {
      var h, k, T, K;
      const {
        notFoundContent: te,
        listHeight: ne = 256,
        listItemHeight: de = 24,
        popupClassName: t,
        dropdownClassName: a,
        virtual: i,
        dropdownMatchSelectWidth: r,
        id: s = d.id.value,
        placeholder: A = (h = n.placeholder) === null || h === void 0 ? void 0 : h.call(n),
        showArrow: J
      } = e, {
        hasFeedback: j,
        feedbackIcon: ae
      } = m;
      let N;
      te !== void 0 ? N = te : n.notFoundContent ? N = n.notFoundContent() : I.value === "combobox" ? N = null : N = (D == null ? void 0 : D("Select")) || H(Qe, {
        componentName: "Select"
      }, null);
      const {
        suffixIcon: ve,
        itemIcon: le,
        removeIcon: je,
        clearIcon: He
      } = ht(E(E({}, e), {
        multiple: oe.value,
        prefixCls: w.value,
        hasFeedback: j,
        feedbackIcon: ae,
        showArrow: $.value
      }), n), xe = be(e, ["prefixCls", "suffixIcon", "itemIcon", "removeIcon", "clearIcon", "size", "bordered", "status"]), Be = pe(t || a, {
        [`${w.value}-dropdown-${C.value}`]: C.value === "rtl"
      }, G.value);
      return ue(H(kt, U(U(U({
        ref: v,
        virtual: i,
        dropdownMatchSelectWidth: r
      }, xe), g), {}, {
        showSearch: (k = e.showSearch) !== null && k !== void 0 ? k : (T = b == null ? void 0 : b.value) === null || T === void 0 ? void 0 : T.showSearch,
        placeholder: A,
        listHeight: ne,
        listItemHeight: de,
        mode: I.value,
        prefixCls: w.value,
        direction: C.value,
        inputIcon: ve,
        menuItemSelectedIcon: le,
        removeIcon: je,
        clearIcon: He,
        notFoundContent: N,
        class: [Z.value, g.class],
        getPopupContainer: V == null ? void 0 : V.value,
        dropdownClassName: Be,
        onChange: ee,
        onBlur: ce,
        id: s,
        dropdownRender: xe.dropdownRender || n.dropdownRender,
        transitionName: L.value,
        children: (K = n.default) === null || K === void 0 ? void 0 : K.call(n),
        tagRender: e.tagRender || n.tagRender,
        optionLabelRender: n.optionLabel,
        maxTagPlaceholder: e.maxTagPlaceholder || n.maxTagPlaceholder,
        showArrow: j || J,
        disabled: z.value
      }), {
        option: n.option
      }));
    };
  }
});
Y.install = function(e) {
  return e.component(Y.name, Y), e.component(Y.Option.displayName, Y.Option), e.component(Y.OptGroup.displayName, Y.OptGroup), e;
};
const Wt = Y.Option;
Y.OptGroup;
export {
  Y as S,
  Wt as a,
  Tt as s
};
