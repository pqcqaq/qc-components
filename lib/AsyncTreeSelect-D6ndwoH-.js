import { inject as rt, provide as ot, defineComponent as we, ref as ve, computed as g, watch as Se, nextTick as st, shallowRef as $, toRaw as ee, createVNode as z, watchEffect as Ce, toRef as ne, toRefs as ut, openBlock as ct, createBlock as it, unref as dt, mergeProps as vt } from "vue";
import { an as ft, ao as ht, ap as pt, K as ie, aq as mt, j as G, d as p, ad as gt, a6 as H, ar as yt, as as bt, at as je, i as Ze, au as St, ah as Ge, av as Ct, aw as wt, ax as Je, Q as xe, ay as xt, az as It, P as de, g as kt, m as et, aA as Vt, aB as Tt, E as Fe, f as Nt, aC as Dt, aD as Et, u as Pt, aE as Lt, O as At, aF as Kt, aG as _t, h as Xe, aH as Ot, aI as Ft, ak as Ht, aJ as Mt, J as He, G as $t, F as jt, H as Rt, L as Me } from "./index-Ccfmsles.js";
function tt(e) {
  return Array.isArray(e) ? e : e !== void 0 ? [e] : [];
}
function Bt(e) {
  const {
    label: u,
    value: l,
    children: a
  } = e || {}, t = l || "value";
  return {
    _title: u ? [u] : ["title", "label"],
    value: t,
    key: t,
    children: a || "children"
  };
}
function Re(e) {
  return e.disabled || e.disableCheckbox || e.checkable === !1;
}
function Wt(e, u) {
  const l = [];
  function a(t) {
    t.forEach((n) => {
      l.push(n[u.value]);
      const r = n[u.children];
      r && a(r);
    });
  }
  return a(e), l;
}
function Be(e) {
  return e == null;
}
const at = Symbol("TreeSelectContextPropsKey");
function Ut(e) {
  return ot(at, e);
}
function zt() {
  return rt(at, {});
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
}, Jt = we({
  compatConfig: {
    MODE: 3
  },
  name: "OptionList",
  inheritAttrs: !1,
  setup(e, u) {
    let {
      slots: l,
      expose: a
    } = u;
    const t = ft(), n = ht(), r = zt(), s = ve(), c = pt(() => r.treeData, [() => t.open, () => r.treeData], (v) => v[0]), o = g(() => {
      const {
        checkable: v,
        halfCheckedKeys: b,
        checkedKeys: D
      } = n;
      return v ? {
        checked: D,
        halfChecked: b
      } : null;
    });
    Se(() => t.open, () => {
      st(() => {
        var v;
        t.open && !t.multiple && n.checkedKeys.length && ((v = s.value) === null || v === void 0 || v.scrollTo({
          key: n.checkedKeys[0]
        }));
      });
    }, {
      immediate: !0,
      flush: "post"
    });
    const d = g(() => String(t.searchValue).toLowerCase()), y = (v) => d.value ? String(v[n.treeNodeFilterProp]).toLowerCase().includes(d.value) : !1, k = $(n.treeDefaultExpandedKeys), C = $(null);
    Se(() => t.searchValue, () => {
      t.searchValue && (C.value = Wt(ee(r.treeData), ee(r.fieldNames)));
    }, {
      immediate: !0
    });
    const I = g(() => n.treeExpandedKeys ? n.treeExpandedKeys.slice() : t.searchValue ? C.value : k.value), w = (v) => {
      var b;
      k.value = v, C.value = v, (b = n.onTreeExpand) === null || b === void 0 || b.call(n, v);
    }, V = (v) => {
      v.preventDefault();
    }, O = (v, b) => {
      let {
        node: D
      } = b;
      var L, N;
      const {
        checkable: W,
        checkedKeys: J
      } = n;
      W && Re(D) || ((L = r.onSelect) === null || L === void 0 || L.call(r, D.key, {
        selected: !J.includes(D.key)
      }), t.multiple || (N = t.toggleOpen) === null || N === void 0 || N.call(t, !1));
    }, A = ve(null), K = g(() => n.keyEntities[A.value]), F = (v) => {
      A.value = v;
    };
    return a({
      scrollTo: function() {
        for (var v, b, D = arguments.length, L = new Array(D), N = 0; N < D; N++)
          L[N] = arguments[N];
        return (b = (v = s.value) === null || v === void 0 ? void 0 : v.scrollTo) === null || b === void 0 ? void 0 : b.call(v, ...L);
      },
      onKeydown: (v) => {
        var b;
        const {
          which: D
        } = v;
        switch (D) {
          case ie.UP:
          case ie.DOWN:
          case ie.LEFT:
          case ie.RIGHT:
            (b = s.value) === null || b === void 0 || b.onKeydown(v);
            break;
          case ie.ENTER: {
            if (K.value) {
              const {
                selectable: L,
                value: N
              } = K.value.node || {};
              L !== !1 && O(null, {
                node: {
                  key: A.value
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
      var v;
      const {
        prefixCls: b,
        multiple: D,
        searchValue: L,
        open: N,
        notFoundContent: W = (v = l.notFoundContent) === null || v === void 0 ? void 0 : v.call(l)
      } = t, {
        listHeight: J,
        listItemHeight: j,
        virtual: te,
        dropdownMatchSelectWidth: X,
        treeExpandAction: re
      } = r, {
        checkable: oe,
        treeDefaultExpandAll: se,
        treeIcon: ae,
        showTreeIcon: Y,
        switcherIcon: he,
        treeLine: pe,
        loadData: me,
        treeLoadedKeys: ue,
        treeMotion: m,
        onTreeLoad: E,
        checkedKeys: M
      } = n;
      if (c.value.length === 0)
        return z("div", {
          role: "listbox",
          class: `${b}-empty`,
          onMousedown: V
        }, [W]);
      const le = {
        fieldNames: r.fieldNames
      };
      return ue && (le.loadedKeys = ue), I.value && (le.expandedKeys = I.value), z("div", {
        onMousedown: V
      }, [K.value && N && z("span", {
        style: Gt,
        "aria-live": "assertive"
      }, [K.value.node.value]), z(mt, G(G({
        ref: s,
        focusable: !1,
        prefixCls: `${b}-tree`,
        treeData: c.value,
        height: J,
        itemHeight: j,
        virtual: te !== !1 && X !== !1,
        multiple: D,
        icon: ae,
        showIcon: Y,
        switcherIcon: he,
        showLine: pe,
        loadData: L ? null : me,
        motion: m,
        activeKey: A.value,
        checkable: oe,
        checkStrictly: !0,
        checkedKeys: o.value,
        selectedKeys: oe ? [] : M,
        defaultExpandAll: se
      }, le), {}, {
        onActiveChange: F,
        onSelect: O,
        onCheck: O,
        onExpand: w,
        onLoad: E,
        filterTreeNode: y,
        expandAction: re
      }), p(p({}, l), {
        checkable: n.customSlots.treeCheckable
      }))]);
    };
  }
}), Xt = "SHOW_ALL", lt = "SHOW_PARENT", Ue = "SHOW_CHILD";
function Ye(e, u, l, a) {
  const t = new Set(e);
  return u === Ue ? e.filter((n) => {
    const r = l[n];
    return !(r && r.children && r.children.some((s) => {
      let {
        node: c
      } = s;
      return t.has(c[a.value]);
    }) && r.children.every((s) => {
      let {
        node: c
      } = s;
      return Re(c) || t.has(c[a.value]);
    }));
  }) : u === lt ? e.filter((n) => {
    const r = l[n], s = r ? r.parent : null;
    return !(s && !Re(s.node) && t.has(s.key));
  }) : e;
}
const fe = () => null;
fe.inheritAttrs = !1;
fe.displayName = "ATreeSelectNode";
fe.isTreeSelectNode = !0;
var Yt = function(e, u) {
  var l = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && u.indexOf(a) < 0 && (l[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var t = 0, a = Object.getOwnPropertySymbols(e); t < a.length; t++)
      u.indexOf(a[t]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[t]) && (l[a[t]] = e[a[t]]);
  return l;
};
function qt(e) {
  return e && e.type && e.type.isTreeSelectNode;
}
function Qt(e) {
  function u() {
    let l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return gt(l).map((a) => {
      var t, n, r;
      if (!qt(a))
        return H(!a, "TreeSelect/TreeSelectNode can only accept TreeSelectNode as children."), null;
      const s = a.children || {}, c = a.key, o = {};
      for (const [D, L] of Object.entries(a.props))
        o[yt(D)] = L;
      const {
        isLeaf: d,
        checkable: y,
        selectable: k,
        disabled: C,
        disableCheckbox: I
      } = o, w = {
        isLeaf: d || d === "" || void 0,
        checkable: y || y === "" || void 0,
        selectable: k || k === "" || void 0,
        disabled: C || C === "" || void 0,
        disableCheckbox: I || I === "" || void 0
      }, V = p(p({}, o), w), {
        title: O = (t = s.title) === null || t === void 0 ? void 0 : t.call(s, V),
        switcherIcon: A = (n = s.switcherIcon) === null || n === void 0 ? void 0 : n.call(s, V)
      } = o, K = Yt(o, ["title", "switcherIcon"]), F = (r = s.default) === null || r === void 0 ? void 0 : r.call(s), v = p(p(p({}, K), {
        title: O,
        switcherIcon: A,
        key: c,
        isLeaf: d
      }), w), b = u(F);
      return b.length && (v.children = b), v;
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
function Zt(e, u, l, a, t, n) {
  let r = null, s = null;
  function c() {
    function o(d) {
      let y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "0", k = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
      return d.map((C, I) => {
        const w = `${y}-${I}`, V = C[n.value], O = l.includes(V), A = o(C[n.children] || [], w, O), K = z(fe, C, {
          default: () => [A.map((F) => F.node)]
        });
        if (u === V && (r = K), O) {
          const F = {
            pos: w,
            node: K,
            children: A
          };
          return k || s.push(F), F;
        }
        return null;
      }).filter((C) => C);
    }
    s || (s = [], o(a), s.sort((d, y) => {
      let {
        node: {
          props: {
            value: k
          }
        }
      } = d, {
        node: {
          props: {
            value: C
          }
        }
      } = y;
      const I = l.indexOf(k), w = l.indexOf(C);
      return I - w;
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
function ea(e, u) {
  let {
    id: l,
    pId: a,
    rootPId: t
  } = u;
  const n = {}, r = [];
  return e.map((c) => {
    const o = p({}, c), d = o[l];
    return n[d] = o, o.key = o.key || d, o;
  }).forEach((c) => {
    const o = c[a], d = n[o];
    d && (d.children = d.children || [], d.children.push(c)), (o === t || !d && t === null) && r.push(c);
  }), r;
}
function ta(e, u, l) {
  const a = $();
  return Se([l, e, u], () => {
    const t = l.value;
    e.value ? a.value = l.value ? ea(ee(e.value), p({
      id: "id",
      pId: "pId",
      rootPId: null
    }, t !== !0 ? t : {})) : ee(e.value).slice() : a.value = Qt(ee(u.value));
  }, {
    immediate: !0,
    deep: !0
  }), a;
}
const aa = (e) => {
  const u = $({
    valueLabels: /* @__PURE__ */ new Map()
  }), l = $();
  return Se(e, () => {
    l.value = ee(e.value);
  }, {
    immediate: !0
  }), [g(() => {
    const {
      valueLabels: t
    } = u.value, n = /* @__PURE__ */ new Map(), r = l.value.map((s) => {
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
}, la = (e, u) => {
  const l = $(/* @__PURE__ */ new Map()), a = $({});
  return Ce(() => {
    const t = u.value, n = bt(e.value, {
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
    l.value = n.valueEntities, a.value = n.keyEntities;
  }), {
    valueEntities: l,
    keyEntities: a
  };
}, na = (e, u, l, a, t, n) => {
  const r = $([]), s = $([]);
  return Ce(() => {
    let c = e.value.map((y) => {
      let {
        value: k
      } = y;
      return k;
    }), o = u.value.map((y) => {
      let {
        value: k
      } = y;
      return k;
    });
    const d = c.filter((y) => !a.value[y]);
    l.value && ({
      checkedKeys: c,
      halfCheckedKeys: o
    } = je(c, !0, a.value, t.value, n.value)), r.value = Array.from(/* @__PURE__ */ new Set([...d, ...c])), s.value = o;
  }), [r, s];
}, ra = (e, u, l) => {
  let {
    treeNodeFilterProp: a,
    filterTreeNode: t,
    fieldNames: n
  } = l;
  return g(() => {
    const {
      children: r
    } = n.value, s = u.value, c = a == null ? void 0 : a.value;
    if (!s || t.value === !1)
      return e.value;
    let o;
    if (typeof t.value == "function")
      o = t.value;
    else {
      const y = s.toUpperCase();
      o = (k, C) => {
        const I = C[c];
        return String(I).toUpperCase().includes(y);
      };
    }
    function d(y) {
      let k = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      const C = [];
      for (let I = 0, w = y.length; I < w; I++) {
        const V = y[I], O = V[r], A = k || o(s, We(V)), K = d(O || [], A);
        (A || K.length) && C.push(p(p({}, V), {
          [r]: K
        }));
      }
      return C;
    }
    return d(e.value);
  });
};
function oa(e) {
  const {
    searchPlaceholder: u,
    treeCheckStrictly: l,
    treeCheckable: a,
    labelInValue: t,
    value: n,
    multiple: r
  } = e;
  H(!u, "`searchPlaceholder` has been removed, please use `placeholder` instead"), l && t === !1 && H(!1, "`treeCheckStrictly` will force set `labelInValue` to `true`."), (t || l) && H(tt(n).every((s) => s && typeof s == "object" && "value" in s), "Invalid prop `value` supplied to `TreeSelect`. You should use { label: string, value: string | number } or [{ label: string, value: string | number }] instead."), l || r || a ? H(!n || Array.isArray(n), "`value` should be an array when `TreeSelect` is checkable or multiple.") : H(!Array.isArray(n), "`value` should not be array when `TreeSelect` is single mode.");
}
function nt() {
  return p(p({}, xe(It(), ["mode"])), {
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
function sa(e) {
  return !e || typeof e != "object";
}
const ua = we({
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
      attrs: l,
      expose: a,
      slots: t
    } = u;
    const n = St(ne(e, "id")), r = g(() => e.treeCheckable && !e.treeCheckStrictly), s = g(() => e.treeCheckable || e.treeCheckStrictly), c = g(() => e.treeCheckStrictly || e.labelInValue), o = g(() => s.value || e.multiple);
    process.env.NODE_ENV !== "production" && Ce(() => {
      oa(e);
    });
    const d = g(() => Bt(e.fieldNames)), [y, k] = Ge("", {
      value: g(() => e.searchValue !== void 0 ? e.searchValue : e.inputValue),
      postState: (i) => i || ""
    }), C = (i) => {
      var f;
      k(i), (f = e.onSearch) === null || f === void 0 || f.call(e, i);
    }, I = ta(ne(e, "treeData"), ne(e, "children"), ne(e, "treeDataSimpleMode")), {
      keyEntities: w,
      valueEntities: V
    } = la(I, d), O = (i) => {
      const f = [], h = [];
      return i.forEach((x) => {
        V.value.has(x) ? h.push(x) : f.push(x);
      }), {
        missingRawValues: f,
        existRawValues: h
      };
    }, A = ra(I, y, {
      fieldNames: d,
      treeNodeFilterProp: ne(e, "treeNodeFilterProp"),
      filterTreeNode: ne(e, "filterTreeNode")
    }), K = (i) => {
      if (i) {
        if (e.treeNodeLabelProp)
          return i[e.treeNodeLabelProp];
        const {
          _title: f
        } = d.value;
        for (let h = 0; h < f.length; h += 1) {
          const x = i[f[h]];
          if (x !== void 0)
            return x;
        }
      }
    }, F = (i) => tt(i).map((h) => sa(h) ? {
      value: h
    } : h), v = (i) => F(i).map((h) => {
      let {
        label: x
      } = h;
      const {
        value: _,
        halfChecked: T
      } = h;
      let S;
      const P = V.value.get(_);
      return P && (x = x ?? K(P.node), S = P.node.disabled), {
        label: x,
        value: _,
        halfChecked: T,
        disabled: S
      };
    }), [b, D] = Ge(e.defaultValue, {
      value: ne(e, "value")
    }), L = g(() => F(b.value)), N = $([]), W = $([]);
    Ce(() => {
      const i = [], f = [];
      L.value.forEach((h) => {
        h.halfChecked ? f.push(h) : i.push(h);
      }), N.value = i, W.value = f;
    });
    const J = g(() => N.value.map((i) => i.value)), {
      maxLevel: j,
      levelEntities: te
    } = Ct(w), [X, re] = na(N, W, r, w, j, te), oe = g(() => {
      const h = Ye(X.value, e.showCheckedStrategy, w.value, d.value).map((T) => {
        var S, P, U;
        return (U = (P = (S = w.value[T]) === null || S === void 0 ? void 0 : S.node) === null || P === void 0 ? void 0 : P[d.value.value]) !== null && U !== void 0 ? U : T;
      }).map((T) => {
        const S = N.value.find((P) => P.value === T);
        return {
          value: T,
          label: S == null ? void 0 : S.label
        };
      }), x = v(h), _ = x[0];
      return !o.value && _ && Be(_.value) && Be(_.label) ? [] : x.map((T) => {
        var S;
        return p(p({}, T), {
          label: (S = T.label) !== null && S !== void 0 ? S : T.value
        });
      });
    }), [se] = aa(oe), ae = (i, f, h) => {
      const x = v(i);
      if (D(x), e.autoClearSearchValue && k(""), e.onChange) {
        let _ = i;
        r.value && (_ = Ye(i, e.showCheckedStrategy, w.value, d.value).map((Z) => {
          const be = V.value.get(Z);
          return be ? be.node[d.value.value] : Z;
        }));
        const {
          triggerValue: T,
          selected: S
        } = f || {
          triggerValue: void 0,
          selected: void 0
        };
        let P = _;
        if (e.treeCheckStrictly) {
          const B = W.value.filter((Z) => !_.includes(Z.value));
          P = [...P, ...B];
        }
        const U = v(P), q = {
          // [Legacy] Always return as array contains label & value
          preValue: N.value,
          triggerValue: T
        };
        let Q = !0;
        (e.treeCheckStrictly || h === "selection" && !S) && (Q = !1), Zt(q, T, i, I.value, Q, d.value), s.value ? q.checked = S : q.selected = S;
        const R = c.value ? U : U.map((B) => B.value);
        e.onChange(o.value ? R : R[0], c.value ? null : U.map((B) => B.label), q);
      }
    }, Y = (i, f) => {
      let {
        selected: h,
        source: x
      } = f;
      var _, T, S;
      const P = ee(w.value), U = ee(V.value), q = P[i], Q = q == null ? void 0 : q.node, R = (_ = Q == null ? void 0 : Q[d.value.value]) !== null && _ !== void 0 ? _ : i;
      if (!o.value)
        ae([R], {
          selected: !0,
          triggerValue: R
        }, "option");
      else {
        let B = h ? [...J.value, R] : X.value.filter((Z) => Z !== R);
        if (r.value) {
          const {
            missingRawValues: Z,
            existRawValues: be
          } = O(B), ze = be.map((Oe) => U.get(Oe).key);
          let _e;
          h ? {
            checkedKeys: _e
          } = je(ze, !0, P, j.value, te.value) : {
            checkedKeys: _e
          } = je(ze, {
            checked: !1,
            halfCheckedKeys: re.value
          }, P, j.value, te.value), B = [...Z, ..._e.map((Oe) => P[Oe].node[d.value.value])];
        }
        ae(B, {
          selected: h,
          triggerValue: R
        }, x || "option");
      }
      h || !o.value ? (T = e.onSelect) === null || T === void 0 || T.call(e, R, We(Q)) : (S = e.onDeselect) === null || S === void 0 || S.call(e, R, We(Q));
    }, he = (i) => {
      if (e.onDropdownVisibleChange) {
        const f = {};
        Object.defineProperty(f, "documentClickClose", {
          get() {
            return H(!1, "Second param of `onDropdownVisibleChange` has been removed."), !1;
          }
        }), e.onDropdownVisibleChange(i, f);
      }
    }, pe = (i, f) => {
      const h = i.map((x) => x.value);
      if (f.type === "clear") {
        ae(h, {}, "selection");
        return;
      }
      f.values.length && Y(f.values[0].value, {
        selected: !1,
        source: "selection"
      });
    }, {
      treeNodeFilterProp: me,
      // Data
      loadData: ue,
      treeLoadedKeys: m,
      onTreeLoad: E,
      // Expanded
      treeDefaultExpandAll: M,
      treeExpandedKeys: le,
      treeDefaultExpandedKeys: Ie,
      onTreeExpand: ke,
      // Options
      virtual: Ve,
      listHeight: Te,
      listItemHeight: Ne,
      // Tree
      treeLine: ye,
      treeIcon: De,
      showTreeIcon: Ee,
      switcherIcon: Pe,
      treeMotion: Le,
      customSlots: Ae,
      dropdownMatchSelectWidth: ge,
      treeExpandAction: Ke
    } = ut(e);
    wt(Je({
      checkable: s,
      loadData: ue,
      treeLoadedKeys: m,
      onTreeLoad: E,
      checkedKeys: X,
      halfCheckedKeys: re,
      treeDefaultExpandAll: M,
      treeExpandedKeys: le,
      treeDefaultExpandedKeys: Ie,
      onTreeExpand: ke,
      treeIcon: De,
      treeMotion: Le,
      showTreeIcon: Ee,
      switcherIcon: Pe,
      treeLine: ye,
      treeNodeFilterProp: me,
      keyEntities: w,
      customSlots: Ae
    })), Ut(Je({
      virtual: Ve,
      listHeight: Te,
      listItemHeight: Ne,
      treeData: A,
      fieldNames: d,
      onSelect: Y,
      dropdownMatchSelectWidth: ge,
      treeExpandAction: Ke
    }));
    const ce = ve();
    return a({
      focus() {
        var i;
        (i = ce.value) === null || i === void 0 || i.focus();
      },
      blur() {
        var i;
        (i = ce.value) === null || i === void 0 || i.blur();
      },
      scrollTo(i) {
        var f;
        (f = ce.value) === null || f === void 0 || f.scrollTo(i);
      }
    }), () => {
      var i;
      const f = xe(e, [
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
      return z(xt, G(G(G({
        ref: ce
      }, l), f), {}, {
        id: n,
        prefixCls: e.prefixCls,
        mode: o.value ? "multiple" : void 0,
        displayValues: se.value,
        onDisplayValuesChange: pe,
        searchValue: y.value,
        onSearch: C,
        OptionList: Jt,
        emptyOptions: !I.value.length,
        onDropdownVisibleChange: he,
        tagRender: e.tagRender || t.tagRender,
        dropdownMatchSelectWidth: (i = e.dropdownMatchSelectWidth) !== null && i !== void 0 ? i : !0
      }), t);
    };
  }
}), ca = (e) => {
  const {
    componentCls: u,
    treePrefixCls: l,
    colorBgElevated: a
  } = e, t = `.${l}`;
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
        Vt(l, et(e, {
          colorBgContainer: a
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
        Tt(`${l}-checkbox`, e),
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
function ia(e, u) {
  return kt("TreeSelect", (l) => {
    const a = et(l, {
      treePrefixCls: u.value
    });
    return [ca(a)];
  })(e);
}
const qe = (e, u, l) => l !== void 0 ? l : `${e}-${u}`;
function da() {
  return p(p({}, xe(nt(), ["showTreeIcon", "treeMotion", "inputIcon", "getInputElement", "treeLine", "customSlots"])), {
    suffixIcon: de.any,
    size: He(),
    bordered: $t(),
    treeLine: jt([Boolean, Object]),
    replaceFields: Rt(),
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
const $e = we({
  compatConfig: {
    MODE: 3
  },
  name: "ATreeSelect",
  inheritAttrs: !1,
  props: Ze(da(), {
    choiceTransitionName: "",
    listHeight: 256,
    treeIcon: !1,
    listItemHeight: 26,
    bordered: !0
  }),
  slots: Object,
  setup(e, u) {
    let {
      attrs: l,
      slots: a,
      expose: t,
      emit: n
    } = u;
    H(!(e.treeData === void 0 && a.default), "`children` of TreeSelect is deprecated. Please use `treeData` instead."), Fe(e.multiple !== !1 || !e.treeCheckable, "TreeSelect", "`multiple` will always be `true` when `treeCheckable` is true"), Fe(e.replaceFields === void 0, "TreeSelect", "`replaceFields` is deprecated, please use fieldNames instead"), Fe(!e.dropdownClassName, "TreeSelect", "`dropdownClassName` is deprecated. Please use `popupClassName` instead.");
    const r = Nt(), s = Dt.useInject(), c = g(() => Et(s.status, e.status)), {
      prefixCls: o,
      renderEmpty: d,
      direction: y,
      virtual: k,
      dropdownMatchSelectWidth: C,
      size: I,
      getPopupContainer: w,
      getPrefixCls: V,
      disabled: O
    } = Pt("select", e), {
      compactSize: A,
      compactItemClassnames: K
    } = Lt(o, y), F = g(() => A.value || I.value), v = At(), b = g(() => {
      var m;
      return (m = O.value) !== null && m !== void 0 ? m : v.value;
    }), D = g(() => V()), L = g(() => e.placement !== void 0 ? e.placement : y.value === "rtl" ? "bottomRight" : "bottomLeft"), N = g(() => qe(D.value, Kt(L.value), e.transitionName)), W = g(() => qe(D.value, "", e.choiceTransitionName)), J = g(() => V("select-tree", e.prefixCls)), j = g(() => V("tree-select", e.prefixCls)), [te, X] = _t(o), [re] = ia(j, J), oe = g(() => Xe(e.popupClassName || e.dropdownClassName, `${j.value}-dropdown`, {
      [`${j.value}-dropdown-rtl`]: y.value === "rtl"
    }, X.value)), se = g(() => !!(e.treeCheckable || e.multiple)), ae = g(() => e.showArrow !== void 0 ? e.showArrow : e.loading || !se.value), Y = ve();
    t({
      focus() {
        var m, E;
        (E = (m = Y.value).focus) === null || E === void 0 || E.call(m);
      },
      blur() {
        var m, E;
        (E = (m = Y.value).blur) === null || E === void 0 || E.call(m);
      }
    });
    const he = function() {
      for (var m = arguments.length, E = new Array(m), M = 0; M < m; M++)
        E[M] = arguments[M];
      n("update:value", E[0]), n("change", ...E), r.onFieldChange();
    }, pe = (m) => {
      n("update:treeExpandedKeys", m), n("treeExpand", m);
    }, me = (m) => {
      n("update:searchValue", m), n("search", m);
    }, ue = (m) => {
      n("blur", m), r.onFieldBlur();
    };
    return () => {
      var m, E;
      const {
        notFoundContent: M = (m = a.notFoundContent) === null || m === void 0 ? void 0 : m.call(a),
        prefixCls: le,
        bordered: Ie,
        listHeight: ke,
        listItemHeight: Ve,
        multiple: Te,
        treeIcon: Ne,
        treeLine: ye,
        showArrow: De,
        switcherIcon: Ee = (E = a.switcherIcon) === null || E === void 0 ? void 0 : E.call(a),
        fieldNames: Pe = e.replaceFields,
        id: Le = r.id.value
      } = e, {
        isFormItemInput: Ae,
        hasFeedback: ge,
        feedbackIcon: Ke
      } = s, {
        suffixIcon: ce,
        removeIcon: i,
        clearIcon: f
      } = Ot(p(p({}, e), {
        multiple: se.value,
        showArrow: ae.value,
        hasFeedback: ge,
        feedbackIcon: Ke,
        prefixCls: o.value
      }), a);
      let h;
      M !== void 0 ? h = M : h = d("Select");
      const x = xe(e, ["suffixIcon", "itemIcon", "removeIcon", "clearIcon", "switcherIcon", "bordered", "status", "onUpdate:value", "onUpdate:treeExpandedKeys", "onUpdate:searchValue"]), _ = Xe(!le && j.value, {
        [`${o.value}-lg`]: F.value === "large",
        [`${o.value}-sm`]: F.value === "small",
        [`${o.value}-rtl`]: y.value === "rtl",
        [`${o.value}-borderless`]: !Ie,
        [`${o.value}-in-form-item`]: Ae
      }, Ft(o.value, c.value, ge), K.value, l.class, X.value), T = {};
      return e.treeData === void 0 && a.default && (T.children = Ht(a.default())), te(re(z(ua, G(G(G(G({}, l), x), {}, {
        disabled: b.value,
        virtual: k.value,
        dropdownMatchSelectWidth: C.value,
        id: Le,
        fieldNames: Pe,
        ref: Y,
        prefixCls: o.value,
        class: _,
        listHeight: ke,
        listItemHeight: Ve,
        treeLine: !!ye,
        inputIcon: ce,
        multiple: Te,
        removeIcon: i,
        clearIcon: f,
        switcherIcon: (S) => Mt(J.value, Ee, S, a.leafIcon, ye),
        showTreeIcon: Ne,
        notFoundContent: h,
        getPopupContainer: w == null ? void 0 : w.value,
        treeMotion: null,
        dropdownClassName: oe.value,
        choiceTransitionName: W.value,
        onChange: he,
        onBlur: ue,
        onSearch: me,
        onTreeExpand: pe
      }, T), {}, {
        transitionName: N.value,
        customSlots: p(p({}, a), {
          treeCheckable: () => z("span", {
            class: `${o.value}-tree-checkbox-inner`
          }, null)
        }),
        maxTagPlaceholder: e.maxTagPlaceholder || a.maxTagPlaceholder,
        placement: L.value,
        showArrow: ge || De
      }), p(p({}, a), {
        treeCheckable: () => z("span", {
          class: `${o.value}-tree-checkbox-inner`
        }, null)
      }))));
    };
  }
}), Qe = fe, va = p($e, {
  TreeNode: fe,
  SHOW_ALL: Xt,
  SHOW_PARENT: lt,
  SHOW_CHILD: Ue,
  install: (e) => (e.component($e.name, $e), e.component(Qe.displayName, Qe), e)
}), pa = /* @__PURE__ */ we({
  __name: "AsyncTreeSelect",
  props: {
    value: {},
    treeData: { type: [Array, Function] }
  },
  setup(e, { emit: u }) {
    const l = e, a = u, t = ve([]), n = g({
      get() {
        return l.value;
      },
      set(c) {
        a("update:value", c);
      }
    }), r = ve(!1);
    return (async () => {
      r.value = !0;
      try {
        if (!l.treeData) {
          console.error("options must not be empty");
          return;
        }
        if (l.treeData instanceof Function) {
          const c = await l.treeData();
          t.value = c || [];
        } else {
          if (l.treeData && !Array.isArray(l.treeData)) {
            console.error(
              "options must be an array or a function that returns an array"
            );
            return;
          }
          t.value = l.treeData || [];
        }
      } catch (c) {
        console.error(c);
      }
      r.value = !1, n.value = l.value;
    })(), (c, o) => (ct(), it(dt(va), vt({
      value: n.value,
      onChange: o[0] || (o[0] = (d) => n.value = d),
      loading: r.value,
      treeData: t.value
    }, c.$attrs), null, 16, ["value", "loading", "treeData"]));
  }
});
export {
  pa as default
};
