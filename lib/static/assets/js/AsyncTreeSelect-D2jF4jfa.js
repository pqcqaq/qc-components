import { inject as rt, provide as ot, defineComponent as Ce, ref as fe, computed as g, watch as be, nextTick as st, shallowRef as j, toRaw as le, createVNode as z, watchEffect as Se, toRef as re, toRefs as ut, openBlock as ct, createBlock as it, unref as dt, mergeProps as ft } from "vue";
import { b as G, _ as p, J as vt, a2 as H, ai as ht, i as Ze, P as de, g as pt, m as et, A as Fe, x as mt, H as gt, u as yt, V as bt, y as St, ag as Ct, c as Ge, E as wt, D as He, C as xt, a3 as kt, $ as It, G as Me } from "./styleChecker-DdDg1L8e.js";
import { u as Vt } from "./move-B6--odHQ.js";
import { K as ie } from "./KeyCode-n3eOOGSl.js";
import { T as Tt, c as Nt, a as je, u as Dt, g as Et, r as Pt } from "./index-Vu7vcyEr.js";
import { u as Lt, j as At, b as Kt, k as _t, t as Xe, B as Ot, e as Ft, g as Ht, h as Mt } from "./index-CelQK0t5.js";
import { o as we } from "./omit-CH0b8HlL.js";
import { u as Ye } from "./useMergedState-6HyZ0xMy.js";
import { a as $t, g as jt } from "./statusUtils-BkxkBBZV.js";
import { g as Rt } from "./index-BKZP0TvE.js";
function tt(e) {
  return Array.isArray(e) ? e : e !== void 0 ? [e] : [];
}
function Bt(e) {
  const {
    label: u,
    value: a,
    children: l
  } = e || {}, t = a || "value";
  return {
    _title: u ? [u] : ["title", "label"],
    value: t,
    key: t,
    children: l || "children"
  };
}
function Re(e) {
  return e.disabled || e.disableCheckbox || e.checkable === !1;
}
function Wt(e, u) {
  const a = [];
  function l(t) {
    t.forEach((n) => {
      a.push(n[u.value]);
      const r = n[u.children];
      r && l(r);
    });
  }
  return l(e), a;
}
function Be(e) {
  return e == null;
}
const lt = Symbol("TreeSelectContextPropsKey");
function Ut(e) {
  return ot(lt, e);
}
function zt() {
  return rt(lt, {});
}
const Gt = {
  width: 0,
  height: 0,
  display: "flex",
  overflow: "hidden",
  opacity: 0,
  border: 0,
  padding: 0,
  margin: 0
}, Xt = Ce({
  compatConfig: {
    MODE: 3
  },
  name: "OptionList",
  inheritAttrs: !1,
  setup(e, u) {
    let {
      slots: a,
      expose: l
    } = u;
    const t = Lt(), n = At(), r = zt(), s = fe(), c = Vt(() => r.treeData, [() => t.open, () => r.treeData], (f) => f[0]), o = g(() => {
      const {
        checkable: f,
        halfCheckedKeys: b,
        checkedKeys: E
      } = n;
      return f ? {
        checked: E,
        halfChecked: b
      } : null;
    });
    be(() => t.open, () => {
      st(() => {
        var f;
        t.open && !t.multiple && n.checkedKeys.length && ((f = s.value) === null || f === void 0 || f.scrollTo({
          key: n.checkedKeys[0]
        }));
      });
    }, {
      immediate: !0,
      flush: "post"
    });
    const d = g(() => String(t.searchValue).toLowerCase()), y = (f) => d.value ? String(f[n.treeNodeFilterProp]).toLowerCase().includes(d.value) : !1, I = j(n.treeDefaultExpandedKeys), C = j(null);
    be(() => t.searchValue, () => {
      t.searchValue && (C.value = Wt(le(r.treeData), le(r.fieldNames)));
    }, {
      immediate: !0
    });
    const k = g(() => n.treeExpandedKeys ? n.treeExpandedKeys.slice() : t.searchValue ? C.value : I.value), w = (f) => {
      var b;
      I.value = f, C.value = f, (b = n.onTreeExpand) === null || b === void 0 || b.call(n, f);
    }, V = (f) => {
      f.preventDefault();
    }, O = (f, b) => {
      let {
        node: E
      } = b;
      var A, N;
      const {
        checkable: U,
        checkedKeys: X
      } = n;
      U && Re(E) || ((A = r.onSelect) === null || A === void 0 || A.call(r, E.key, {
        selected: !X.includes(E.key)
      }), t.multiple || (N = t.toggleOpen) === null || N === void 0 || N.call(t, !1));
    }, K = fe(null), _ = g(() => n.keyEntities[K.value]), F = (f) => {
      K.value = f;
    };
    return l({
      scrollTo: function() {
        for (var f, b, E = arguments.length, A = new Array(E), N = 0; N < E; N++)
          A[N] = arguments[N];
        return (b = (f = s.value) === null || f === void 0 ? void 0 : f.scrollTo) === null || b === void 0 ? void 0 : b.call(f, ...A);
      },
      onKeydown: (f) => {
        var b;
        const {
          which: E
        } = f;
        switch (E) {
          case ie.UP:
          case ie.DOWN:
          case ie.LEFT:
          case ie.RIGHT:
            (b = s.value) === null || b === void 0 || b.onKeydown(f);
            break;
          case ie.ENTER: {
            if (_.value) {
              const {
                selectable: A,
                value: N
              } = _.value.node || {};
              A !== !1 && O(null, {
                node: {
                  key: K.value
                },
                selected: !n.checkedKeys.includes(N)
              });
            }
            break;
          }
          case ie.ESC:
            t.toggleOpen(!1);
        }
      },
      onKeyup: () => {
      }
    }), () => {
      var f;
      const {
        prefixCls: b,
        multiple: E,
        searchValue: A,
        open: N,
        notFoundContent: U = (f = a.notFoundContent) === null || f === void 0 ? void 0 : f.call(a)
      } = t, {
        listHeight: X,
        listItemHeight: R,
        virtual: ae,
        dropdownMatchSelectWidth: Y,
        treeExpandAction: oe
      } = r, {
        checkable: se,
        treeDefaultExpandAll: ue,
        treeIcon: ne,
        showTreeIcon: J,
        switcherIcon: he,
        treeLine: pe,
        loadData: me,
        treeLoadedKeys: ce,
        treeMotion: m,
        onTreeLoad: P,
        checkedKeys: M
      } = n;
      if (c.value.length === 0)
        return z("div", {
          role: "listbox",
          class: `${b}-empty`,
          onMousedown: V
        }, [U]);
      const q = {
        fieldNames: r.fieldNames
      };
      return ce && (q.loadedKeys = ce), k.value && (q.expandedKeys = k.value), z("div", {
        onMousedown: V
      }, [_.value && N && z("span", {
        style: Gt,
        "aria-live": "assertive"
      }, [_.value.node.value]), z(Tt, G(G({
        ref: s,
        focusable: !1,
        prefixCls: `${b}-tree`,
        treeData: c.value,
        height: X,
        itemHeight: R,
        virtual: ae !== !1 && Y !== !1,
        multiple: E,
        icon: ne,
        showIcon: J,
        switcherIcon: he,
        showLine: pe,
        loadData: A ? null : me,
        motion: m,
        activeKey: K.value,
        checkable: se,
        checkStrictly: !0,
        checkedKeys: o.value,
        selectedKeys: se ? [] : M,
        defaultExpandAll: ue
      }, q), {}, {
        onActiveChange: F,
        onSelect: O,
        onCheck: O,
        onExpand: w,
        onLoad: P,
        filterTreeNode: y,
        expandAction: oe
      }), p(p({}, a), {
        checkable: n.customSlots.treeCheckable
      }))]);
    };
  }
}), Yt = "SHOW_ALL", at = "SHOW_PARENT", Ue = "SHOW_CHILD";
function Je(e, u, a, l) {
  const t = new Set(e);
  return u === Ue ? e.filter((n) => {
    const r = a[n];
    return !(r && r.children && r.children.some((s) => {
      let {
        node: c
      } = s;
      return t.has(c[l.value]);
    }) && r.children.every((s) => {
      let {
        node: c
      } = s;
      return Re(c) || t.has(c[l.value]);
    }));
  }) : u === at ? e.filter((n) => {
    const r = a[n], s = r ? r.parent : null;
    return !(s && !Re(s.node) && t.has(s.key));
  }) : e;
}
const ve = () => null;
ve.inheritAttrs = !1;
ve.displayName = "ATreeSelectNode";
ve.isTreeSelectNode = !0;
var Jt = function(e, u) {
  var a = {};
  for (var l in e)
    Object.prototype.hasOwnProperty.call(e, l) && u.indexOf(l) < 0 && (a[l] = e[l]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var t = 0, l = Object.getOwnPropertySymbols(e); t < l.length; t++)
      u.indexOf(l[t]) < 0 && Object.prototype.propertyIsEnumerable.call(e, l[t]) && (a[l[t]] = e[l[t]]);
  return a;
};
function qt(e) {
  return e && e.type && e.type.isTreeSelectNode;
}
function Qt(e) {
  function u() {
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return vt(a).map((l) => {
      var t, n, r;
      if (!qt(l))
        return H(!l, "TreeSelect/TreeSelectNode can only accept TreeSelectNode as children."), null;
      const s = l.children || {}, c = l.key, o = {};
      for (const [E, A] of Object.entries(l.props))
        o[ht(E)] = A;
      const {
        isLeaf: d,
        checkable: y,
        selectable: I,
        disabled: C,
        disableCheckbox: k
      } = o, w = {
        isLeaf: d || d === "" || void 0,
        checkable: y || y === "" || void 0,
        selectable: I || I === "" || void 0,
        disabled: C || C === "" || void 0,
        disableCheckbox: k || k === "" || void 0
      }, V = p(p({}, o), w), {
        title: O = (t = s.title) === null || t === void 0 ? void 0 : t.call(s, V),
        switcherIcon: K = (n = s.switcherIcon) === null || n === void 0 ? void 0 : n.call(s, V)
      } = o, _ = Jt(o, ["title", "switcherIcon"]), F = (r = s.default) === null || r === void 0 ? void 0 : r.call(s), f = p(p(p({}, _), {
        title: O,
        switcherIcon: K,
        key: c,
        isLeaf: d
      }), w), b = u(F);
      return b.length && (f.children = b), f;
    });
  }
  return u(e);
}
function We(e) {
  if (!e)
    return e;
  const u = p({}, e);
  return "props" in u || Object.defineProperty(u, "props", {
    get() {
      return H(!1, "New `vc-tree-select` not support return node instance as argument anymore. Please consider to remove `props` access."), u;
    }
  }), u;
}
function Zt(e, u, a, l, t, n) {
  let r = null, s = null;
  function c() {
    function o(d) {
      let y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "0", I = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
      return d.map((C, k) => {
        const w = `${y}-${k}`, V = C[n.value], O = a.includes(V), K = o(C[n.children] || [], w, O), _ = z(ve, C, {
          default: () => [K.map((F) => F.node)]
        });
        if (u === V && (r = _), O) {
          const F = {
            pos: w,
            node: _,
            children: K
          };
          return I || s.push(F), F;
        }
        return null;
      }).filter((C) => C);
    }
    s || (s = [], o(l), s.sort((d, y) => {
      let {
        node: {
          props: {
            value: I
          }
        }
      } = d, {
        node: {
          props: {
            value: C
          }
        }
      } = y;
      const k = a.indexOf(I), w = a.indexOf(C);
      return k - w;
    }));
  }
  Object.defineProperty(e, "triggerNode", {
    get() {
      return H(!1, "`triggerNode` is deprecated. Please consider decoupling data with node."), c(), r;
    }
  }), Object.defineProperty(e, "allCheckedNodes", {
    get() {
      return H(!1, "`allCheckedNodes` is deprecated. Please consider decoupling data with node."), c(), t ? s : s.map((o) => {
        let {
          node: d
        } = o;
        return d;
      });
    }
  });
}
function el(e, u) {
  let {
    id: a,
    pId: l,
    rootPId: t
  } = u;
  const n = {}, r = [];
  return e.map((c) => {
    const o = p({}, c), d = o[a];
    return n[d] = o, o.key = o.key || d, o;
  }).forEach((c) => {
    const o = c[l], d = n[o];
    d && (d.children = d.children || [], d.children.push(c)), (o === t || !d && t === null) && r.push(c);
  }), r;
}
function tl(e, u, a) {
  const l = j();
  return be([a, e, u], () => {
    const t = a.value;
    e.value ? l.value = a.value ? el(le(e.value), p({
      id: "id",
      pId: "pId",
      rootPId: null
    }, t !== !0 ? t : {})) : le(e.value).slice() : l.value = Qt(le(u.value));
  }, {
    immediate: !0,
    deep: !0
  }), l;
}
const ll = (e) => {
  const u = j({
    valueLabels: /* @__PURE__ */ new Map()
  }), a = j();
  return be(e, () => {
    a.value = le(e.value);
  }, {
    immediate: !0
  }), [g(() => {
    const {
      valueLabels: t
    } = u.value, n = /* @__PURE__ */ new Map(), r = a.value.map((s) => {
      var c;
      const {
        value: o
      } = s, d = (c = s.label) !== null && c !== void 0 ? c : t.get(o);
      return n.set(o, d), p(p({}, s), {
        label: d
      });
    });
    return u.value.valueLabels = n, r;
  })];
}, al = (e, u) => {
  const a = j(/* @__PURE__ */ new Map()), l = j({});
  return Se(() => {
    const t = u.value, n = Nt(e.value, {
      fieldNames: t,
      initWrapper: (r) => p(p({}, r), {
        valueEntities: /* @__PURE__ */ new Map()
      }),
      processEntity: (r, s) => {
        const c = r.node[t.value];
        if (process.env.NODE_ENV !== "production") {
          const o = r.node.key;
          H(!Be(c), "TreeNode `value` is invalidate: undefined"), H(!s.valueEntities.has(c), `Same \`value\` exist in the tree: ${c}`), H(!o || String(o) === String(c), `\`key\` or \`value\` with TreeNode must be the same or you can remove one of them. key: ${o}, value: ${c}.`);
        }
        s.valueEntities.set(c, r);
      }
    });
    a.value = n.valueEntities, l.value = n.keyEntities;
  }), {
    valueEntities: a,
    keyEntities: l
  };
}, nl = (e, u, a, l, t, n) => {
  const r = j([]), s = j([]);
  return Se(() => {
    let c = e.value.map((y) => {
      let {
        value: I
      } = y;
      return I;
    }), o = u.value.map((y) => {
      let {
        value: I
      } = y;
      return I;
    });
    const d = c.filter((y) => !l.value[y]);
    a.value && ({
      checkedKeys: c,
      halfCheckedKeys: o
    } = je(c, !0, l.value, t.value, n.value)), r.value = Array.from(/* @__PURE__ */ new Set([...d, ...c])), s.value = o;
  }), [r, s];
}, rl = (e, u, a) => {
  let {
    treeNodeFilterProp: l,
    filterTreeNode: t,
    fieldNames: n
  } = a;
  return g(() => {
    const {
      children: r
    } = n.value, s = u.value, c = l == null ? void 0 : l.value;
    if (!s || t.value === !1)
      return e.value;
    let o;
    if (typeof t.value == "function")
      o = t.value;
    else {
      const y = s.toUpperCase();
      o = (I, C) => {
        const k = C[c];
        return String(k).toUpperCase().includes(y);
      };
    }
    function d(y) {
      let I = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      const C = [];
      for (let k = 0, w = y.length; k < w; k++) {
        const V = y[k], O = V[r], K = I || o(s, We(V)), _ = d(O || [], K);
        (K || _.length) && C.push(p(p({}, V), {
          [r]: _
        }));
      }
      return C;
    }
    return d(e.value);
  });
};
function ol(e) {
  const {
    searchPlaceholder: u,
    treeCheckStrictly: a,
    treeCheckable: l,
    labelInValue: t,
    value: n,
    multiple: r
  } = e;
  H(!u, "`searchPlaceholder` has been removed, please use `placeholder` instead"), a && t === !1 && H(!1, "`treeCheckStrictly` will force set `labelInValue` to `true`."), (t || a) && H(tt(n).every((s) => s && typeof s == "object" && "value" in s), "Invalid prop `value` supplied to `TreeSelect`. You should use { label: string, value: string | number } or [{ label: string, value: string | number }] instead."), a || r || l ? H(!n || Array.isArray(n), "`value` should be an array when `TreeSelect` is checkable or multiple.") : H(!Array.isArray(n), "`value` should not be array when `TreeSelect` is single mode.");
}
function nt() {
  return p(p({}, we(Ft(), ["mode"])), {
    prefixCls: String,
    id: String,
    value: {
      type: [String, Number, Object, Array]
    },
    defaultValue: {
      type: [String, Number, Object, Array]
    },
    onChange: {
      type: Function
    },
    searchValue: String,
    /** @deprecated Use `searchValue` instead */
    inputValue: String,
    onSearch: {
      type: Function
    },
    autoClearSearchValue: {
      type: Boolean,
      default: void 0
    },
    filterTreeNode: {
      type: [Boolean, Function],
      default: void 0
    },
    treeNodeFilterProp: String,
    // >>> Select
    onSelect: Function,
    onDeselect: Function,
    showCheckedStrategy: {
      type: String
    },
    treeNodeLabelProp: String,
    fieldNames: {
      type: Object
    },
    // >>> Mode
    multiple: {
      type: Boolean,
      default: void 0
    },
    treeCheckable: {
      type: Boolean,
      default: void 0
    },
    treeCheckStrictly: {
      type: Boolean,
      default: void 0
    },
    labelInValue: {
      type: Boolean,
      default: void 0
    },
    // >>> Data
    treeData: {
      type: Array
    },
    treeDataSimpleMode: {
      type: [Boolean, Object],
      default: void 0
    },
    loadData: {
      type: Function
    },
    treeLoadedKeys: {
      type: Array
    },
    onTreeLoad: {
      type: Function
    },
    // >>> Expanded
    treeDefaultExpandAll: {
      type: Boolean,
      default: void 0
    },
    treeExpandedKeys: {
      type: Array
    },
    treeDefaultExpandedKeys: {
      type: Array
    },
    onTreeExpand: {
      type: Function
    },
    // >>> Options
    virtual: {
      type: Boolean,
      default: void 0
    },
    listHeight: Number,
    listItemHeight: Number,
    onDropdownVisibleChange: {
      type: Function
    },
    // >>> Tree
    treeLine: {
      type: [Boolean, Object],
      default: void 0
    },
    treeIcon: de.any,
    showTreeIcon: {
      type: Boolean,
      default: void 0
    },
    switcherIcon: de.any,
    treeMotion: de.any,
    children: Array,
    treeExpandAction: String,
    showArrow: {
      type: Boolean,
      default: void 0
    },
    showSearch: {
      type: Boolean,
      default: void 0
    },
    open: {
      type: Boolean,
      default: void 0
    },
    defaultOpen: {
      type: Boolean,
      default: void 0
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    placeholder: de.any,
    maxTagPlaceholder: {
      type: Function
    },
    dropdownPopupAlign: de.any,
    customSlots: Object
  });
}
function sl(e) {
  return !e || typeof e != "object";
}
const ul = Ce({
  compatConfig: {
    MODE: 3
  },
  name: "TreeSelect",
  inheritAttrs: !1,
  props: Ze(nt(), {
    treeNodeFilterProp: "value",
    autoClearSearchValue: !0,
    showCheckedStrategy: Ue,
    listHeight: 200,
    listItemHeight: 20,
    prefixCls: "vc-tree-select"
  }),
  setup(e, u) {
    let {
      attrs: a,
      expose: l,
      slots: t
    } = u;
    const n = Kt(re(e, "id")), r = g(() => e.treeCheckable && !e.treeCheckStrictly), s = g(() => e.treeCheckable || e.treeCheckStrictly), c = g(() => e.treeCheckStrictly || e.labelInValue), o = g(() => s.value || e.multiple);
    process.env.NODE_ENV !== "production" && Se(() => {
      ol(e);
    });
    const d = g(() => Bt(e.fieldNames)), [y, I] = Ye("", {
      value: g(() => e.searchValue !== void 0 ? e.searchValue : e.inputValue),
      postState: (i) => i || ""
    }), C = (i) => {
      var v;
      I(i), (v = e.onSearch) === null || v === void 0 || v.call(e, i);
    }, k = tl(re(e, "treeData"), re(e, "children"), re(e, "treeDataSimpleMode")), {
      keyEntities: w,
      valueEntities: V
    } = al(k, d), O = (i) => {
      const v = [], h = [];
      return i.forEach((x) => {
        V.value.has(x) ? h.push(x) : v.push(x);
      }), {
        missingRawValues: v,
        existRawValues: h
      };
    }, K = rl(k, y, {
      fieldNames: d,
      treeNodeFilterProp: re(e, "treeNodeFilterProp"),
      filterTreeNode: re(e, "filterTreeNode")
    }), _ = (i) => {
      if (i) {
        if (e.treeNodeLabelProp)
          return i[e.treeNodeLabelProp];
        const {
          _title: v
        } = d.value;
        for (let h = 0; h < v.length; h += 1) {
          const x = i[v[h]];
          if (x !== void 0)
            return x;
        }
      }
    }, F = (i) => tt(i).map((h) => sl(h) ? {
      value: h
    } : h), f = (i) => F(i).map((h) => {
      let {
        label: x
      } = h;
      const {
        value: L,
        halfChecked: D
      } = h;
      let S;
      const T = V.value.get(L);
      return T && (x = x ?? _(T.node), S = T.node.disabled), {
        label: x,
        value: L,
        halfChecked: D,
        disabled: S
      };
    }), [b, E] = Ye(e.defaultValue, {
      value: re(e, "value")
    }), A = g(() => F(b.value)), N = j([]), U = j([]);
    Se(() => {
      const i = [], v = [];
      A.value.forEach((h) => {
        h.halfChecked ? v.push(h) : i.push(h);
      }), N.value = i, U.value = v;
    });
    const X = g(() => N.value.map((i) => i.value)), {
      maxLevel: R,
      levelEntities: ae
    } = Dt(w), [Y, oe] = nl(N, U, r, w, R, ae), se = g(() => {
      const h = Je(Y.value, e.showCheckedStrategy, w.value, d.value).map((D) => {
        var S, T, $;
        return ($ = (T = (S = w.value[D]) === null || S === void 0 ? void 0 : S.node) === null || T === void 0 ? void 0 : T[d.value.value]) !== null && $ !== void 0 ? $ : D;
      }).map((D) => {
        const S = N.value.find((T) => T.value === D);
        return {
          value: D,
          label: S == null ? void 0 : S.label
        };
      }), x = f(h), L = x[0];
      return !o.value && L && Be(L.value) && Be(L.label) ? [] : x.map((D) => {
        var S;
        return p(p({}, D), {
          label: (S = D.label) !== null && S !== void 0 ? S : D.value
        });
      });
    }), [ue] = ll(se), ne = (i, v, h) => {
      const x = f(i);
      if (E(x), e.autoClearSearchValue && I(""), e.onChange) {
        let L = i;
        r.value && (L = Je(i, e.showCheckedStrategy, w.value, d.value).map((te) => {
          const ye = V.value.get(te);
          return ye ? ye.node[d.value.value] : te;
        }));
        const {
          triggerValue: D,
          selected: S
        } = v || {
          triggerValue: void 0,
          selected: void 0
        };
        let T = L;
        if (e.treeCheckStrictly) {
          const W = U.value.filter((te) => !L.includes(te.value));
          T = [...T, ...W];
        }
        const $ = f(T), Z = {
          // [Legacy] Always return as array contains label & value
          preValue: N.value,
          triggerValue: D
        };
        let ee = !0;
        (e.treeCheckStrictly || h === "selection" && !S) && (ee = !1), Zt(Z, D, i, k.value, ee, d.value), s.value ? Z.checked = S : Z.selected = S;
        const B = c.value ? $ : $.map((W) => W.value);
        e.onChange(o.value ? B : B[0], c.value ? null : $.map((W) => W.label), Z);
      }
    }, J = (i, v) => {
      let {
        selected: h,
        source: x
      } = v;
      var L, D, S;
      const T = le(w.value), $ = le(V.value), Z = T[i], ee = Z == null ? void 0 : Z.node, B = (L = ee == null ? void 0 : ee[d.value.value]) !== null && L !== void 0 ? L : i;
      if (!o.value)
        ne([B], {
          selected: !0,
          triggerValue: B
        }, "option");
      else {
        let W = h ? [...X.value, B] : Y.value.filter((te) => te !== B);
        if (r.value) {
          const {
            missingRawValues: te,
            existRawValues: ye
          } = O(W), ze = ye.map((Oe) => $.get(Oe).key);
          let _e;
          h ? {
            checkedKeys: _e
          } = je(ze, !0, T, R.value, ae.value) : {
            checkedKeys: _e
          } = je(ze, {
            checked: !1,
            halfCheckedKeys: oe.value
          }, T, R.value, ae.value), W = [...te, ..._e.map((Oe) => T[Oe].node[d.value.value])];
        }
        ne(W, {
          selected: h,
          triggerValue: B
        }, x || "option");
      }
      h || !o.value ? (D = e.onSelect) === null || D === void 0 || D.call(e, B, We(ee)) : (S = e.onDeselect) === null || S === void 0 || S.call(e, B, We(ee));
    }, he = (i) => {
      if (e.onDropdownVisibleChange) {
        const v = {};
        Object.defineProperty(v, "documentClickClose", {
          get() {
            return H(!1, "Second param of `onDropdownVisibleChange` has been removed."), !1;
          }
        }), e.onDropdownVisibleChange(i, v);
      }
    }, pe = (i, v) => {
      const h = i.map((x) => x.value);
      if (v.type === "clear") {
        ne(h, {}, "selection");
        return;
      }
      v.values.length && J(v.values[0].value, {
        selected: !1,
        source: "selection"
      });
    }, {
      treeNodeFilterProp: me,
      // Data
      loadData: ce,
      treeLoadedKeys: m,
      onTreeLoad: P,
      // Expanded
      treeDefaultExpandAll: M,
      treeExpandedKeys: q,
      treeDefaultExpandedKeys: xe,
      onTreeExpand: ke,
      // Options
      virtual: Ie,
      listHeight: Ve,
      listItemHeight: Te,
      // Tree
      treeLine: Ne,
      treeIcon: ge,
      showTreeIcon: De,
      switcherIcon: Ee,
      treeMotion: Pe,
      customSlots: Le,
      dropdownMatchSelectWidth: Ae,
      treeExpandAction: Ke
    } = ut(e);
    _t(Xe({
      checkable: s,
      loadData: ce,
      treeLoadedKeys: m,
      onTreeLoad: P,
      checkedKeys: Y,
      halfCheckedKeys: oe,
      treeDefaultExpandAll: M,
      treeExpandedKeys: q,
      treeDefaultExpandedKeys: xe,
      onTreeExpand: ke,
      treeIcon: ge,
      treeMotion: Pe,
      showTreeIcon: De,
      switcherIcon: Ee,
      treeLine: Ne,
      treeNodeFilterProp: me,
      keyEntities: w,
      customSlots: Le
    })), Ut(Xe({
      virtual: Ie,
      listHeight: Ve,
      listItemHeight: Te,
      treeData: K,
      fieldNames: d,
      onSelect: J,
      dropdownMatchSelectWidth: Ae,
      treeExpandAction: Ke
    }));
    const Q = fe();
    return l({
      focus() {
        var i;
        (i = Q.value) === null || i === void 0 || i.focus();
      },
      blur() {
        var i;
        (i = Q.value) === null || i === void 0 || i.blur();
      },
      scrollTo(i) {
        var v;
        (v = Q.value) === null || v === void 0 || v.scrollTo(i);
      }
    }), () => {
      var i;
      const v = we(e, [
        "id",
        "prefixCls",
        "customSlots",
        // Value
        "value",
        "defaultValue",
        "onChange",
        "onSelect",
        "onDeselect",
        // Search
        "searchValue",
        "inputValue",
        "onSearch",
        "autoClearSearchValue",
        "filterTreeNode",
        "treeNodeFilterProp",
        // Selector
        "showCheckedStrategy",
        "treeNodeLabelProp",
        //  Mode
        "multiple",
        "treeCheckable",
        "treeCheckStrictly",
        "labelInValue",
        // FieldNames
        "fieldNames",
        // Data
        "treeDataSimpleMode",
        "treeData",
        "children",
        "loadData",
        "treeLoadedKeys",
        "onTreeLoad",
        // Expanded
        "treeDefaultExpandAll",
        "treeExpandedKeys",
        "treeDefaultExpandedKeys",
        "onTreeExpand",
        // Options
        "virtual",
        "listHeight",
        "listItemHeight",
        "onDropdownVisibleChange",
        // Tree
        "treeLine",
        "treeIcon",
        "showTreeIcon",
        "switcherIcon",
        "treeMotion"
      ]);
      return z(Ot, G(G(G({
        ref: Q
      }, a), v), {}, {
        id: n,
        prefixCls: e.prefixCls,
        mode: o.value ? "multiple" : void 0,
        displayValues: ue.value,
        onDisplayValuesChange: pe,
        searchValue: y.value,
        onSearch: C,
        OptionList: Xt,
        emptyOptions: !k.value.length,
        onDropdownVisibleChange: he,
        tagRender: e.tagRender || t.tagRender,
        dropdownMatchSelectWidth: (i = e.dropdownMatchSelectWidth) !== null && i !== void 0 ? i : !0
      }), t);
    };
  }
}), cl = (e) => {
  const {
    componentCls: u,
    treePrefixCls: a,
    colorBgElevated: l
  } = e, t = `.${a}`;
  return [
    // ======================================================
    // ==                     Dropdown                     ==
    // ======================================================
    {
      [`${u}-dropdown`]: [
        {
          padding: `${e.paddingXS}px ${e.paddingXS / 2}px`
        },
        // ====================== Tree ======================
        Et(a, et(e, {
          colorBgContainer: l
        })),
        {
          [t]: {
            borderRadius: 0,
            "&-list-holder-inner": {
              alignItems: "stretch",
              [`${t}-treenode`]: {
                [`${t}-node-content-wrapper`]: {
                  flex: "auto"
                }
              }
            }
          }
        },
        // ==================== Checkbox ====================
        Rt(`${a}-checkbox`, e),
        // ====================== RTL =======================
        {
          "&-rtl": {
            direction: "rtl",
            [`${t}-switcher${t}-switcher_close`]: {
              [`${t}-switcher-icon svg`]: {
                transform: "rotate(90deg)"
              }
            }
          }
        }
      ]
    }
  ];
};
function il(e, u) {
  return pt("TreeSelect", (a) => {
    const l = et(a, {
      treePrefixCls: u.value
    });
    return [cl(l)];
  })(e);
}
const qe = (e, u, a) => a !== void 0 ? a : `${e}-${u}`;
function dl() {
  return p(p({}, we(nt(), ["showTreeIcon", "treeMotion", "inputIcon", "getInputElement", "treeLine", "customSlots"])), {
    suffixIcon: de.any,
    size: He(),
    bordered: xt(),
    treeLine: kt([Boolean, Object]),
    replaceFields: It(),
    placement: He(),
    status: He(),
    popupClassName: String,
    /** @deprecated Please use `popupClassName` instead */
    dropdownClassName: String,
    "onUpdate:value": Me(),
    "onUpdate:treeExpandedKeys": Me(),
    "onUpdate:searchValue": Me()
  });
}
const $e = Ce({
  compatConfig: {
    MODE: 3
  },
  name: "ATreeSelect",
  inheritAttrs: !1,
  props: Ze(dl(), {
    choiceTransitionName: "",
    listHeight: 256,
    treeIcon: !1,
    listItemHeight: 26,
    bordered: !0
  }),
  slots: Object,
  setup(e, u) {
    let {
      attrs: a,
      slots: l,
      expose: t,
      emit: n
    } = u;
    H(!(e.treeData === void 0 && l.default), "`children` of TreeSelect is deprecated. Please use `treeData` instead."), Fe(e.multiple !== !1 || !e.treeCheckable, "TreeSelect", "`multiple` will always be `true` when `treeCheckable` is true"), Fe(e.replaceFields === void 0, "TreeSelect", "`replaceFields` is deprecated, please use fieldNames instead"), Fe(!e.dropdownClassName, "TreeSelect", "`dropdownClassName` is deprecated. Please use `popupClassName` instead.");
    const r = mt(), s = gt.useInject(), c = g(() => $t(s.status, e.status)), {
      prefixCls: o,
      renderEmpty: d,
      direction: y,
      virtual: I,
      dropdownMatchSelectWidth: C,
      size: k,
      getPopupContainer: w,
      getPrefixCls: V,
      disabled: O
    } = yt("select", e), {
      compactSize: K,
      compactItemClassnames: _
    } = bt(o, y), F = g(() => K.value || k.value), f = St(), b = g(() => {
      var m;
      return (m = O.value) !== null && m !== void 0 ? m : f.value;
    }), E = g(() => V()), A = g(() => e.placement !== void 0 ? e.placement : y.value === "rtl" ? "bottomRight" : "bottomLeft"), N = g(() => qe(E.value, Ct(A.value), e.transitionName)), U = g(() => qe(E.value, "", e.choiceTransitionName)), X = g(() => V("select-tree", e.prefixCls)), R = g(() => V("tree-select", e.prefixCls)), [ae, Y] = Ht(o), [oe] = il(R, X), se = g(() => Ge(e.popupClassName || e.dropdownClassName, `${R.value}-dropdown`, {
      [`${R.value}-dropdown-rtl`]: y.value === "rtl"
    }, Y.value)), ue = g(() => !!(e.treeCheckable || e.multiple)), ne = g(() => e.showArrow !== void 0 ? e.showArrow : e.loading || !ue.value), J = fe();
    t({
      focus() {
        var m, P;
        (P = (m = J.value).focus) === null || P === void 0 || P.call(m);
      },
      blur() {
        var m, P;
        (P = (m = J.value).blur) === null || P === void 0 || P.call(m);
      }
    });
    const he = function() {
      for (var m = arguments.length, P = new Array(m), M = 0; M < m; M++)
        P[M] = arguments[M];
      n("update:value", P[0]), n("change", ...P), r.onFieldChange();
    }, pe = (m) => {
      n("update:treeExpandedKeys", m), n("treeExpand", m);
    }, me = (m) => {
      n("update:searchValue", m), n("search", m);
    }, ce = (m) => {
      n("blur", m), r.onFieldBlur();
    };
    return () => {
      var m, P, M;
      const {
        notFoundContent: q = (m = l.notFoundContent) === null || m === void 0 ? void 0 : m.call(l),
        prefixCls: xe,
        bordered: ke,
        listHeight: Ie,
        listItemHeight: Ve,
        multiple: Te,
        treeIcon: Ne,
        treeLine: ge,
        showArrow: De,
        switcherIcon: Ee = (P = l.switcherIcon) === null || P === void 0 ? void 0 : P.call(l),
        fieldNames: Pe = e.replaceFields,
        id: Le = r.id.value,
        placeholder: Ae = (M = l.placeholder) === null || M === void 0 ? void 0 : M.call(l)
      } = e, {
        isFormItemInput: Ke,
        hasFeedback: Q,
        feedbackIcon: i
      } = s, {
        suffixIcon: v,
        removeIcon: h,
        clearIcon: x
      } = Mt(p(p({}, e), {
        multiple: ue.value,
        showArrow: ne.value,
        hasFeedback: Q,
        feedbackIcon: i,
        prefixCls: o.value
      }), l);
      let L;
      q !== void 0 ? L = q : L = d("Select");
      const D = we(e, ["suffixIcon", "itemIcon", "removeIcon", "clearIcon", "switcherIcon", "bordered", "status", "onUpdate:value", "onUpdate:treeExpandedKeys", "onUpdate:searchValue"]), S = Ge(!xe && R.value, {
        [`${o.value}-lg`]: F.value === "large",
        [`${o.value}-sm`]: F.value === "small",
        [`${o.value}-rtl`]: y.value === "rtl",
        [`${o.value}-borderless`]: !ke,
        [`${o.value}-in-form-item`]: Ke
      }, jt(o.value, c.value, Q), _.value, a.class, Y.value), T = {};
      return e.treeData === void 0 && l.default && (T.children = wt(l.default())), ae(oe(z(ul, G(G(G(G({}, a), D), {}, {
        disabled: b.value,
        virtual: I.value,
        dropdownMatchSelectWidth: C.value,
        id: Le,
        fieldNames: Pe,
        ref: J,
        prefixCls: o.value,
        class: S,
        listHeight: Ie,
        listItemHeight: Ve,
        treeLine: !!ge,
        inputIcon: v,
        multiple: Te,
        removeIcon: h,
        clearIcon: x,
        switcherIcon: ($) => Pt(X.value, Ee, $, l.leafIcon, ge),
        showTreeIcon: Ne,
        notFoundContent: L,
        getPopupContainer: w == null ? void 0 : w.value,
        treeMotion: null,
        dropdownClassName: se.value,
        choiceTransitionName: U.value,
        onChange: he,
        onBlur: ce,
        onSearch: me,
        onTreeExpand: pe
      }, T), {}, {
        transitionName: N.value,
        customSlots: p(p({}, l), {
          treeCheckable: () => z("span", {
            class: `${o.value}-tree-checkbox-inner`
          }, null)
        }),
        maxTagPlaceholder: e.maxTagPlaceholder || l.maxTagPlaceholder,
        placement: A.value,
        showArrow: Q || De,
        placeholder: Ae
      }), p(p({}, l), {
        treeCheckable: () => z("span", {
          class: `${o.value}-tree-checkbox-inner`
        }, null)
      }))));
    };
  }
}), Qe = ve, fl = p($e, {
  TreeNode: ve,
  SHOW_ALL: Yt,
  SHOW_PARENT: at,
  SHOW_CHILD: Ue,
  install: (e) => (e.component($e.name, $e), e.component(Qe.displayName, Qe), e)
}), xl = /* @__PURE__ */ Ce({
  __name: "AsyncTreeSelect",
  props: {
    value: {},
    treeData: { type: [Array, Function] }
  },
  setup(e, { emit: u }) {
    const a = e, l = u, t = fe([]), n = g({
      get() {
        return a.value;
      },
      set(c) {
        l("update:value", c);
      }
    }), r = fe(!1);
    return (async () => {
      r.value = !0;
      try {
        if (!a.treeData) {
          console.error("options must not be empty");
          return;
        }
        if (a.treeData instanceof Function) {
          const c = await a.treeData();
          t.value = c || [];
        } else {
          if (a.treeData && !Array.isArray(a.treeData)) {
            console.error(
              "options must be an array or a function that returns an array"
            );
            return;
          }
          t.value = a.treeData || [];
        }
      } catch (c) {
        console.error(c);
      }
      r.value = !1, n.value = a.value;
    })(), (c, o) => (ct(), it(dt(fl), ft({
      value: n.value,
      onChange: o[0] || (o[0] = (d) => n.value = d),
      loading: r.value,
      treeData: t.value
    }, c.$attrs), null, 16, ["value", "loading", "treeData"]));
  }
});
export {
  xl as default
};
