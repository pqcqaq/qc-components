import { defineComponent as Ie, provide as ht, computed as N, inject as yt, shallowRef as H, createVNode as _, getCurrentInstance as Dn, reactive as Yt, onMounted as Zt, onUpdated as Pn, ref as Pe, watchEffect as De, watch as we, nextTick as pt, onBeforeUnmount as Tn, Transition as In, withDirectives as $n, vShow as Ln, Fragment as An, toRaw as xe, onUnmounted as _n, cloneVNode as Fn, toRef as Ge, toRefs as Vn, openBlock as Mn, createBlock as jn, unref as Bn, mergeProps as Hn } from "vue";
import { P as me, Z as ie, _ as w, $ as Jt, h as re, g as Oe, a3 as Qt, ac as en, H as Ye, ad as Rn, a1 as Wn, k as gt, K as be, I as at, L as zn, n as Un, m as mt, ae as Et, r as Gn, U as qn, i as Xn, A as lt, u as Yn, F as Zn, c as Jn, af as Qn, d as ea, ag as ta, e as na, s as rt, b as aa, C as oa, D as la, f as it } from "./index-DQQY7Ife.js";
import { u as ra } from "./move-DAHHGcHZ.js";
import { L as ia, u as sa, a as ca, b as da, c as ua, t as Ot, B as fa, d as va, e as ha, g as ya } from "./index-ReaMVeJG.js";
import { e as Ee } from "./eagerComputed-B06AqR4q.js";
import { u as Dt } from "./useMergedState-6HyZ0xMy.js";
import { g as pa, a as ga } from "./statusUtils-B6e7x_W2.js";
import { g as ma } from "./index-PvlVdbjt.js";
const tn = Symbol("TreeContextKey"), ba = Ie({
  compatConfig: {
    MODE: 3
  },
  name: "TreeContext",
  props: {
    value: {
      type: Object
    }
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    return ht(tn, N(() => e.value)), () => {
      var a;
      return (a = n.default) === null || a === void 0 ? void 0 : a.call(n);
    };
  }
}), bt = () => yt(tn, N(() => ({}))), nn = Symbol("KeysStateKey"), Sa = (e) => {
  ht(nn, e);
}, an = () => yt(nn, {
  expandedKeys: H([]),
  selectedKeys: H([]),
  loadedKeys: H([]),
  loadingKeys: H([]),
  checkedKeys: H([]),
  halfCheckedKeys: H([]),
  expandedKeysSet: N(() => /* @__PURE__ */ new Set()),
  selectedKeysSet: N(() => /* @__PURE__ */ new Set()),
  loadedKeysSet: N(() => /* @__PURE__ */ new Set()),
  loadingKeysSet: N(() => /* @__PURE__ */ new Set()),
  checkedKeysSet: N(() => /* @__PURE__ */ new Set()),
  halfCheckedKeysSet: N(() => /* @__PURE__ */ new Set()),
  flattenNodes: H([])
}), Ca = (e) => {
  let {
    prefixCls: t,
    level: n,
    isStart: a,
    isEnd: o
  } = e;
  const r = `${t}-indent-unit`, l = [];
  for (let s = 0; s < n; s += 1)
    l.push(_("span", {
      key: s,
      class: {
        [r]: !0,
        [`${r}-start`]: a[s],
        [`${r}-end`]: o[s]
      }
    }, null));
  return _("span", {
    "aria-hidden": "true",
    class: `${t}-indent`
  }, [l]);
}, on = {
  eventKey: [String, Number],
  prefixCls: String,
  // By parent
  // expanded: { type: Boolean, default: undefined },
  // selected: { type: Boolean, default: undefined },
  // checked: { type: Boolean, default: undefined },
  // loaded: { type: Boolean, default: undefined },
  // loading: { type: Boolean, default: undefined },
  // halfChecked: { type: Boolean, default: undefined },
  // dragOver: { type: Boolean, default: undefined },
  // dragOverGapTop: { type: Boolean, default: undefined },
  // dragOverGapBottom: { type: Boolean, default: undefined },
  // pos: String,
  title: me.any,
  /** New added in Tree for easy data access */
  data: {
    type: Object,
    default: void 0
  },
  parent: {
    type: Object,
    default: void 0
  },
  isStart: {
    type: Array
  },
  isEnd: {
    type: Array
  },
  active: {
    type: Boolean,
    default: void 0
  },
  onMousemove: {
    type: Function
  },
  // By user
  isLeaf: {
    type: Boolean,
    default: void 0
  },
  checkable: {
    type: Boolean,
    default: void 0
  },
  selectable: {
    type: Boolean,
    default: void 0
  },
  disabled: {
    type: Boolean,
    default: void 0
  },
  disableCheckbox: {
    type: Boolean,
    default: void 0
  },
  icon: me.any,
  switcherIcon: me.any,
  domRef: {
    type: Function
  }
}, ka = {
  prefixCls: {
    type: String
  },
  // data: { type: Array as PropType<FlattenNode[]> },
  motion: {
    type: Object
  },
  focusable: {
    type: Boolean
  },
  activeItem: {
    type: Object
  },
  focused: {
    type: Boolean
  },
  tabindex: {
    type: Number
  },
  checkable: {
    type: Boolean
  },
  selectable: {
    type: Boolean
  },
  disabled: {
    type: Boolean
  },
  // expandedKeys: { type: Array as PropType<Key[]> },
  // selectedKeys: { type: Array as PropType<Key[]> },
  // checkedKeys: { type: Array as PropType<Key[]> },
  // loadedKeys: { type: Array as PropType<Key[]> },
  // loadingKeys: { type: Array as PropType<Key[]> },
  // halfCheckedKeys: { type: Array as PropType<Key[]> },
  // keyEntities: { type: Object as PropType<Record<Key, DataEntity<DataNode>>> },
  // dragging: { type: Boolean as PropType<boolean> },
  // dragOverNodeKey: { type: [String, Number] as PropType<Key> },
  // dropPosition: { type: Number as PropType<number> },
  // Virtual list
  height: {
    type: Number
  },
  itemHeight: {
    type: Number
  },
  virtual: {
    type: Boolean
  },
  onScroll: {
    type: Function
  },
  onKeydown: {
    type: Function
  },
  onFocus: {
    type: Function
  },
  onBlur: {
    type: Function
  },
  onActiveChange: {
    type: Function
  },
  onContextmenu: {
    type: Function
  },
  onListChangeStart: {
    type: Function
  },
  onListChangeEnd: {
    type: Function
  }
}, wa = () => ({
  prefixCls: String,
  focusable: {
    type: Boolean,
    default: void 0
  },
  activeKey: [Number, String],
  tabindex: Number,
  children: me.any,
  treeData: {
    type: Array
  },
  fieldNames: {
    type: Object
  },
  showLine: {
    type: [Boolean, Object],
    default: void 0
  },
  showIcon: {
    type: Boolean,
    default: void 0
  },
  icon: me.any,
  selectable: {
    type: Boolean,
    default: void 0
  },
  expandAction: [String, Boolean],
  disabled: {
    type: Boolean,
    default: void 0
  },
  multiple: {
    type: Boolean,
    default: void 0
  },
  checkable: {
    type: Boolean,
    default: void 0
  },
  checkStrictly: {
    type: Boolean,
    default: void 0
  },
  draggable: {
    type: [Function, Boolean]
  },
  defaultExpandParent: {
    type: Boolean,
    default: void 0
  },
  autoExpandParent: {
    type: Boolean,
    default: void 0
  },
  defaultExpandAll: {
    type: Boolean,
    default: void 0
  },
  defaultExpandedKeys: {
    type: Array
  },
  expandedKeys: {
    type: Array
  },
  defaultCheckedKeys: {
    type: Array
  },
  checkedKeys: {
    type: [Object, Array]
  },
  defaultSelectedKeys: {
    type: Array
  },
  selectedKeys: {
    type: Array
  },
  allowDrop: {
    type: Function
  },
  dropIndicatorRender: {
    type: Function
  },
  onFocus: {
    type: Function
  },
  onBlur: {
    type: Function
  },
  onKeydown: {
    type: Function
  },
  onContextmenu: {
    type: Function
  },
  onClick: {
    type: Function
  },
  onDblclick: {
    type: Function
  },
  onScroll: {
    type: Function
  },
  onExpand: {
    type: Function
  },
  onCheck: {
    type: Function
  },
  onSelect: {
    type: Function
  },
  onLoad: {
    type: Function
  },
  loadData: {
    type: Function
  },
  loadedKeys: {
    type: Array
  },
  onMouseenter: {
    type: Function
  },
  onMouseleave: {
    type: Function
  },
  onRightClick: {
    type: Function
  },
  onDragstart: {
    type: Function
  },
  onDragenter: {
    type: Function
  },
  onDragover: {
    type: Function
  },
  onDragleave: {
    type: Function
  },
  onDragend: {
    type: Function
  },
  onDrop: {
    type: Function
  },
  /**
   * Used for `rc-tree-select` only.
   * Do not use in your production code directly since this will be refactor.
   */
  onActiveChange: {
    type: Function
  },
  filterTreeNode: {
    type: Function
  },
  motion: me.any,
  switcherIcon: me.any,
  // Virtual List
  height: Number,
  itemHeight: Number,
  virtual: {
    type: Boolean,
    default: void 0
  },
  // direction for drag logic
  direction: {
    type: String
  },
  rootClassName: String,
  rootStyle: Object
});
var xa = function(e, t) {
  var n = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, a = Object.getOwnPropertySymbols(e); o < a.length; o++)
      t.indexOf(a[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[o]) && (n[a[o]] = e[a[o]]);
  return n;
};
const Pt = "open", Tt = "close", Ka = "---", It = Ie({
  compatConfig: {
    MODE: 3
  },
  name: "ATreeNode",
  inheritAttrs: !1,
  props: on,
  isTreeNode: 1,
  setup(e, t) {
    let {
      attrs: n,
      slots: a,
      expose: o
    } = t;
    ie(!("slots" in e.data), `treeData slots is deprecated, please use ${Object.keys(e.data.slots || {}).map((c) => "`v-slot:" + c + "` ")}instead`);
    const r = H(!1), l = bt(), {
      expandedKeysSet: s,
      selectedKeysSet: u,
      loadedKeysSet: i,
      loadingKeysSet: d,
      checkedKeysSet: v,
      halfCheckedKeysSet: m
    } = an(), {
      dragOverNodeKey: b,
      dropPosition: x,
      keyEntities: p
    } = l.value, k = N(() => tt(e.eventKey, {
      expandedKeysSet: s.value,
      selectedKeysSet: u.value,
      loadedKeysSet: i.value,
      loadingKeysSet: d.value,
      checkedKeysSet: v.value,
      halfCheckedKeysSet: m.value,
      dragOverNodeKey: b,
      dropPosition: x,
      keyEntities: p
    })), C = Ee(() => k.value.expanded), I = Ee(() => k.value.selected), T = Ee(() => k.value.checked), $ = Ee(() => k.value.loaded), S = Ee(() => k.value.loading), M = Ee(() => k.value.halfChecked), B = Ee(() => k.value.dragOver), L = Ee(() => k.value.dragOverGapTop), F = Ee(() => k.value.dragOverGapBottom), Q = Ee(() => k.value.pos), Z = H(), ae = N(() => {
      const {
        eventKey: c
      } = e, {
        keyEntities: y
      } = l.value, {
        children: O
      } = y[c] || {};
      return !!(O || []).length;
    }), oe = N(() => {
      const {
        isLeaf: c
      } = e, {
        loadData: y
      } = l.value, O = ae.value;
      return c === !1 ? !1 : c || !y && !O || y && $.value && !O;
    }), fe = N(() => oe.value ? null : C.value ? Pt : Tt), ce = N(() => {
      const {
        disabled: c
      } = e, {
        disabled: y
      } = l.value;
      return !!(y || c);
    }), ge = N(() => {
      const {
        checkable: c
      } = e, {
        checkable: y
      } = l.value;
      return !y || c === !1 ? !1 : y;
    }), de = N(() => {
      const {
        selectable: c
      } = e, {
        selectable: y
      } = l.value;
      return typeof c == "boolean" ? c : y;
    }), J = N(() => {
      const {
        data: c,
        active: y,
        checkable: O,
        disableCheckbox: V,
        disabled: G,
        selectable: te
      } = e;
      return w(w({
        active: y,
        checkable: O,
        disableCheckbox: V,
        disabled: G,
        selectable: te
      }, c), {
        dataRef: c,
        data: c,
        isLeaf: oe.value,
        checked: T.value,
        expanded: C.value,
        loading: S.value,
        selected: I.value,
        halfChecked: M.value
      });
    }), ue = Dn(), ee = N(() => {
      const {
        eventKey: c
      } = e, {
        keyEntities: y
      } = l.value, {
        parent: O
      } = y[c] || {};
      return w(w({}, nt(w({}, e, k.value))), {
        parent: O
      });
    }), le = Yt({
      eventData: ee,
      eventKey: N(() => e.eventKey),
      selectHandle: Z,
      pos: Q,
      key: ue.vnode.key
    });
    o(le);
    const se = (c) => {
      const {
        onNodeDoubleClick: y
      } = l.value;
      y(c, ee.value);
    }, he = (c) => {
      if (ce.value)
        return;
      const {
        onNodeSelect: y
      } = l.value;
      c.preventDefault(), y(c, ee.value);
    }, z = (c) => {
      if (ce.value)
        return;
      const {
        disableCheckbox: y
      } = e, {
        onNodeCheck: O
      } = l.value;
      if (!ge.value || y)
        return;
      c.preventDefault();
      const V = !T.value;
      O(c, ee.value, V);
    }, ne = (c) => {
      const {
        onNodeClick: y
      } = l.value;
      y(c, ee.value), de.value ? he(c) : z(c);
    }, ve = (c) => {
      const {
        onNodeMouseEnter: y
      } = l.value;
      y(c, ee.value);
    }, Se = (c) => {
      const {
        onNodeMouseLeave: y
      } = l.value;
      y(c, ee.value);
    }, je = (c) => {
      const {
        onNodeContextMenu: y
      } = l.value;
      y(c, ee.value);
    }, Be = (c) => {
      const {
        onNodeDragStart: y
      } = l.value;
      c.stopPropagation(), r.value = !0, y(c, le);
      try {
        c.dataTransfer.setData("text/plain", "");
      } catch {
      }
    }, He = (c) => {
      const {
        onNodeDragEnter: y
      } = l.value;
      c.preventDefault(), c.stopPropagation(), y(c, le);
    }, Re = (c) => {
      const {
        onNodeDragOver: y
      } = l.value;
      c.preventDefault(), c.stopPropagation(), y(c, le);
    }, $e = (c) => {
      const {
        onNodeDragLeave: y
      } = l.value;
      c.stopPropagation(), y(c, le);
    }, Le = (c) => {
      const {
        onNodeDragEnd: y
      } = l.value;
      c.stopPropagation(), r.value = !1, y(c, le);
    }, We = (c) => {
      const {
        onNodeDrop: y
      } = l.value;
      c.preventDefault(), c.stopPropagation(), r.value = !1, y(c, le);
    }, Ae = (c) => {
      const {
        onNodeExpand: y
      } = l.value;
      S.value || y(c, ee.value);
    }, _e = () => {
      const {
        data: c
      } = e, {
        draggable: y
      } = l.value;
      return !!(y && (!y.nodeDraggable || y.nodeDraggable(c)));
    }, Fe = () => {
      const {
        draggable: c,
        prefixCls: y
      } = l.value;
      return c && (c != null && c.icon) ? _("span", {
        class: `${y}-draggable-icon`
      }, [c.icon]) : null;
    }, ze = () => {
      var c, y, O;
      const {
        switcherIcon: V = a.switcherIcon || ((c = l.value.slots) === null || c === void 0 ? void 0 : c[(O = (y = e.data) === null || y === void 0 ? void 0 : y.slots) === null || O === void 0 ? void 0 : O.switcherIcon])
      } = e, {
        switcherIcon: G
      } = l.value, te = V || G;
      return typeof te == "function" ? te(J.value) : te;
    }, Ke = () => {
      const {
        loadData: c,
        onNodeLoad: y
      } = l.value;
      S.value || c && C.value && !oe.value && !ae.value && !$.value && y(ee.value);
    };
    Zt(() => {
      Ke();
    }), Pn(() => {
      Ke();
    });
    const Ue = () => {
      const {
        prefixCls: c
      } = l.value, y = ze();
      if (oe.value)
        return y !== !1 ? _("span", {
          class: Oe(`${c}-switcher`, `${c}-switcher-noop`)
        }, [y]) : null;
      const O = Oe(`${c}-switcher`, `${c}-switcher_${C.value ? Pt : Tt}`);
      return y !== !1 ? _("span", {
        onClick: Ae,
        class: O
      }, [y]) : null;
    }, Ne = () => {
      var c, y;
      const {
        disableCheckbox: O
      } = e, {
        prefixCls: V
      } = l.value, G = ce.value;
      return ge.value ? _("span", {
        class: Oe(`${V}-checkbox`, T.value && `${V}-checkbox-checked`, !T.value && M.value && `${V}-checkbox-indeterminate`, (G || O) && `${V}-checkbox-disabled`),
        onClick: z
      }, [(y = (c = l.value).customCheckable) === null || y === void 0 ? void 0 : y.call(c)]) : null;
    }, D = () => {
      const {
        prefixCls: c
      } = l.value;
      return _("span", {
        class: Oe(`${c}-iconEle`, `${c}-icon__${fe.value || "docu"}`, S.value && `${c}-icon_loading`)
      }, null);
    }, j = () => {
      const {
        disabled: c,
        eventKey: y
      } = e, {
        draggable: O,
        dropLevelOffset: V,
        dropPosition: G,
        prefixCls: te,
        indent: f,
        dropIndicatorRender: h,
        dragOverNodeKey: g,
        direction: K
      } = l.value;
      return !c && O !== !1 && g === y ? h({
        dropPosition: G,
        dropLevelOffset: V,
        indent: f,
        prefixCls: te,
        direction: K
      }) : null;
    }, U = () => {
      var c, y, O, V, G, te;
      const {
        // title = slots.title ||
        //   context.value.slots?.[props.data?.slots?.title] ||
        //   context.value.slots?.title,
        // selected,
        icon: f = a.icon,
        // loading,
        data: h
      } = e, g = a.title || ((c = l.value.slots) === null || c === void 0 ? void 0 : c[(O = (y = e.data) === null || y === void 0 ? void 0 : y.slots) === null || O === void 0 ? void 0 : O.title]) || ((V = l.value.slots) === null || V === void 0 ? void 0 : V.title) || e.title, {
        prefixCls: K,
        showIcon: A,
        icon: P,
        loadData: E
        // slots: contextSlots,
      } = l.value, R = ce.value, q = `${K}-node-content-wrapper`;
      let W;
      if (A) {
        const ye = f || ((G = l.value.slots) === null || G === void 0 ? void 0 : G[(te = h == null ? void 0 : h.slots) === null || te === void 0 ? void 0 : te.icon]) || P;
        W = ye ? _("span", {
          class: Oe(`${K}-iconEle`, `${K}-icon__customize`)
        }, [typeof ye == "function" ? ye(J.value) : ye]) : D();
      } else
        E && S.value && (W = D());
      let X;
      typeof g == "function" ? X = g(J.value) : X = g, X = X === void 0 ? Ka : X;
      const Y = _("span", {
        class: `${K}-title`
      }, [X]);
      return _("span", {
        ref: Z,
        title: typeof g == "string" ? g : "",
        class: Oe(`${q}`, `${q}-${fe.value || "normal"}`, !R && (I.value || r.value) && `${K}-node-selected`),
        onMouseenter: ve,
        onMouseleave: Se,
        onContextmenu: je,
        onClick: ne,
        onDblclick: se
      }, [W, Y, j()]);
    };
    return () => {
      const c = w(w({}, e), n), {
        eventKey: y,
        isLeaf: O,
        isStart: V,
        isEnd: G,
        domRef: te,
        active: f,
        data: h,
        onMousemove: g,
        selectable: K
      } = c, A = xa(c, ["eventKey", "isLeaf", "isStart", "isEnd", "domRef", "active", "data", "onMousemove", "selectable"]), {
        prefixCls: P,
        filterTreeNode: E,
        keyEntities: R,
        dropContainerKey: q,
        dropTargetKey: W,
        draggingNodeKey: X
      } = l.value, Y = ce.value, ye = Jt(A, {
        aria: !0,
        data: !0
      }), {
        level: Ce
      } = R[y] || {}, ke = G[G.length - 1], pe = _e(), Ve = !Y && pe, Je = X === y, ot = K !== void 0 ? {
        "aria-selected": !!K
      } : void 0;
      return _("div", re(re({
        ref: te,
        class: Oe(n.class, `${P}-treenode`, {
          [`${P}-treenode-disabled`]: Y,
          [`${P}-treenode-switcher-${C.value ? "open" : "close"}`]: !O,
          [`${P}-treenode-checkbox-checked`]: T.value,
          [`${P}-treenode-checkbox-indeterminate`]: M.value,
          [`${P}-treenode-selected`]: I.value,
          [`${P}-treenode-loading`]: S.value,
          [`${P}-treenode-active`]: f,
          [`${P}-treenode-leaf-last`]: ke,
          [`${P}-treenode-draggable`]: Ve,
          dragging: Je,
          "drop-target": W === y,
          "drop-container": q === y,
          "drag-over": !Y && B.value,
          "drag-over-gap-top": !Y && L.value,
          "drag-over-gap-bottom": !Y && F.value,
          "filter-node": E && E(ee.value)
        }),
        style: n.style,
        draggable: Ve,
        "aria-grabbed": Je,
        onDragstart: Ve ? Be : void 0,
        onDragenter: pe ? He : void 0,
        onDragover: pe ? Re : void 0,
        onDragleave: pe ? $e : void 0,
        onDrop: pe ? We : void 0,
        onDragend: pe ? Le : void 0,
        onMousemove: g
      }, ot), ye), [_(Ca, {
        prefixCls: P,
        level: Ce,
        isStart: V,
        isEnd: G
      }, null), Fe(), Ue(), Ne(), U()]);
    };
  }
});
function Te(e, t) {
  if (!e)
    return [];
  const n = e.slice(), a = n.indexOf(t);
  return a >= 0 && n.splice(a, 1), n;
}
function Me(e, t) {
  const n = (e || []).slice();
  return n.indexOf(t) === -1 && n.push(t), n;
}
function St(e) {
  return e.split("-");
}
function ln(e, t) {
  return `${e}-${t}`;
}
function Na(e) {
  return e && e.type && e.type.isTreeNode;
}
function Ea(e, t) {
  const n = [], a = t[e];
  function o() {
    (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []).forEach((l) => {
      let {
        key: s,
        children: u
      } = l;
      n.push(s), o(u);
    });
  }
  return o(a.children), n;
}
function Oa(e) {
  if (e.parent) {
    const t = St(e.pos);
    return Number(t[t.length - 1]) === e.parent.children.length - 1;
  }
  return !1;
}
function Da(e) {
  const t = St(e.pos);
  return Number(t[t.length - 1]) === 0;
}
function $t(e, t, n, a, o, r, l, s, u, i) {
  var d;
  const {
    clientX: v,
    clientY: m
  } = e, {
    top: b,
    height: x
  } = e.target.getBoundingClientRect(), k = ((i === "rtl" ? -1 : 1) * (((o == null ? void 0 : o.x) || 0) - v) - 12) / a;
  let C = s[n.eventKey];
  if (m < b + x / 2) {
    const Q = l.findIndex((oe) => oe.key === C.key), Z = Q <= 0 ? 0 : Q - 1, ae = l[Z].key;
    C = s[ae];
  }
  const I = C.key, T = C, $ = C.key;
  let S = 0, M = 0;
  if (!u.has(I))
    for (let Q = 0; Q < k && Oa(C); Q += 1)
      C = C.parent, M += 1;
  const B = t.eventData, L = C.node;
  let F = !0;
  return Da(C) && C.level === 0 && m < b + x / 2 && r({
    dragNode: B,
    dropNode: L,
    dropPosition: -1
  }) && C.key === n.eventKey ? S = -1 : (T.children || []).length && u.has($) ? r({
    dragNode: B,
    dropNode: L,
    dropPosition: 0
  }) ? S = 0 : F = !1 : M === 0 ? k > -1.5 ? r({
    dragNode: B,
    dropNode: L,
    dropPosition: 1
  }) ? S = 1 : F = !1 : r({
    dragNode: B,
    dropNode: L,
    dropPosition: 0
  }) ? S = 0 : r({
    dragNode: B,
    dropNode: L,
    dropPosition: 1
  }) ? S = 1 : F = !1 : r({
    dragNode: B,
    dropNode: L,
    dropPosition: 1
  }) ? S = 1 : F = !1, {
    dropPosition: S,
    dropLevelOffset: M,
    dropTargetKey: C.key,
    dropTargetPos: C.pos,
    dragOverNodeKey: $,
    dropContainerKey: S === 0 ? null : ((d = C.parent) === null || d === void 0 ? void 0 : d.key) || null,
    dropAllowed: F
  };
}
function Lt(e, t) {
  if (!e)
    return;
  const {
    multiple: n
  } = t;
  return n ? e.slice() : e.length ? [e[0]] : e;
}
function st(e) {
  if (!e)
    return null;
  let t;
  if (Array.isArray(e))
    t = {
      checkedKeys: e,
      halfCheckedKeys: void 0
    };
  else if (typeof e == "object")
    t = {
      checkedKeys: e.checked || void 0,
      halfCheckedKeys: e.halfChecked || void 0
    };
  else
    return ie(!1, "`checkedKeys` is not an array or an object"), null;
  return t;
}
function At(e, t) {
  const n = /* @__PURE__ */ new Set();
  function a(o) {
    if (n.has(o))
      return;
    const r = t[o];
    if (!r)
      return;
    n.add(o);
    const {
      parent: l,
      node: s
    } = r;
    s.disabled || l && a(l.key);
  }
  return (e || []).forEach((o) => {
    a(o);
  }), [...n];
}
var Pa = function(e, t) {
  var n = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, a = Object.getOwnPropertySymbols(e); o < a.length; o++)
      t.indexOf(a[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[o]) && (n[a[o]] = e[a[o]]);
  return n;
};
function et(e, t) {
  return e ?? t;
}
function Ct(e) {
  const {
    title: t,
    _title: n,
    key: a,
    children: o
  } = e || {}, r = t || "title";
  return {
    title: r,
    _title: n || [r],
    key: a || "key",
    children: o || "children"
  };
}
function Ta(e) {
  function t() {
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return Qt(n).map((o) => {
      var r, l, s, u;
      if (!Na(o))
        return ie(!o, "Tree/TreeNode can only accept TreeNode as children."), null;
      const i = o.children || {}, d = o.key, v = {};
      for (const [Q, Z] of Object.entries(o.props))
        v[en(Q)] = Z;
      const {
        isLeaf: m,
        checkable: b,
        selectable: x,
        disabled: p,
        disableCheckbox: k
      } = v, C = {
        isLeaf: m || m === "" || void 0,
        checkable: b || b === "" || void 0,
        selectable: x || x === "" || void 0,
        disabled: p || p === "" || void 0,
        disableCheckbox: k || k === "" || void 0
      }, I = w(w({}, v), C), {
        title: T = (r = i.title) === null || r === void 0 ? void 0 : r.call(i, I),
        icon: $ = (l = i.icon) === null || l === void 0 ? void 0 : l.call(i, I),
        switcherIcon: S = (s = i.switcherIcon) === null || s === void 0 ? void 0 : s.call(i, I)
      } = v, M = Pa(v, ["title", "icon", "switcherIcon"]), B = (u = i.default) === null || u === void 0 ? void 0 : u.call(i), L = w(w(w({}, M), {
        title: T,
        icon: $,
        switcherIcon: S,
        key: d,
        isLeaf: m
      }), C), F = t(B);
      return F.length && (L.children = F), L;
    });
  }
  return t(e);
}
function Ia(e, t, n) {
  const {
    _title: a,
    key: o,
    children: r
  } = Ct(n), l = new Set(t === !0 ? [] : t), s = [];
  function u(i) {
    let d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    return i.map((v, m) => {
      const b = ln(d ? d.pos : "0", m), x = et(v[o], b);
      let p;
      for (let C = 0; C < a.length; C += 1) {
        const I = a[C];
        if (v[I] !== void 0) {
          p = v[I];
          break;
        }
      }
      const k = w(w({}, Ye(v, [...a, o, r])), {
        title: p,
        key: x,
        parent: d,
        pos: b,
        children: null,
        data: v,
        isStart: [...d ? d.isStart : [], m === 0],
        isEnd: [...d ? d.isEnd : [], m === i.length - 1]
      });
      return s.push(k), t === !0 || l.has(x) ? k.children = u(v[r] || [], k) : k.children = [], k;
    });
  }
  return u(e), s;
}
function $a(e, t, n) {
  let a = {};
  typeof n == "object" ? a = n : a = {
    externalGetKey: n
  }, a = a || {};
  const {
    childrenPropName: o,
    externalGetKey: r,
    fieldNames: l
  } = a, {
    key: s,
    children: u
  } = Ct(l), i = o || u;
  let d;
  r ? typeof r == "string" ? d = (m) => m[r] : typeof r == "function" && (d = (m) => r(m)) : d = (m, b) => et(m[s], b);
  function v(m, b, x, p) {
    const k = m ? m[i] : e, C = m ? ln(x.pos, b) : "0", I = m ? [...p, m] : [];
    if (m) {
      const T = d(m, C), $ = {
        node: m,
        index: b,
        pos: C,
        key: T,
        parentPos: x.node ? x.pos : null,
        level: x.level + 1,
        nodes: I
      };
      t($);
    }
    k && k.forEach((T, $) => {
      v(T, $, {
        node: m,
        pos: C,
        level: x ? x.level + 1 : -1
      }, I);
    });
  }
  v(null);
}
function rn(e) {
  let {
    initWrapper: t,
    processEntity: n,
    onProcessFinished: a,
    externalGetKey: o,
    childrenPropName: r,
    fieldNames: l
  } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = arguments.length > 2 ? arguments[2] : void 0;
  const u = o || s, i = {}, d = {};
  let v = {
    posEntities: i,
    keyEntities: d
  };
  return t && (v = t(v) || v), $a(e, (m) => {
    const {
      node: b,
      index: x,
      pos: p,
      key: k,
      parentPos: C,
      level: I,
      nodes: T
    } = m, $ = {
      node: b,
      nodes: T,
      index: x,
      key: k,
      pos: p,
      level: I
    }, S = et(k, p);
    i[p] = $, d[S] = $, $.parent = i[C], $.parent && ($.parent.children = $.parent.children || [], $.parent.children.push($)), n && n($, v);
  }, {
    externalGetKey: u,
    childrenPropName: r,
    fieldNames: l
  }), a && a(v), v;
}
function tt(e, t) {
  let {
    expandedKeysSet: n,
    selectedKeysSet: a,
    loadedKeysSet: o,
    loadingKeysSet: r,
    checkedKeysSet: l,
    halfCheckedKeysSet: s,
    dragOverNodeKey: u,
    dropPosition: i,
    keyEntities: d
  } = t;
  const v = d[e];
  return {
    eventKey: e,
    expanded: n.has(e),
    selected: a.has(e),
    loaded: o.has(e),
    loading: r.has(e),
    checked: l.has(e),
    halfChecked: s.has(e),
    pos: String(v ? v.pos : ""),
    parent: v.parent,
    // [Legacy] Drag props
    // Since the interaction of drag is changed, the semantic of the props are
    // not accuracy, I think it should be finally removed
    dragOver: u === e && i === 0,
    dragOverGapTop: u === e && i === -1,
    dragOverGapBottom: u === e && i === 1
  };
}
function nt(e) {
  const {
    data: t,
    expanded: n,
    selected: a,
    checked: o,
    loaded: r,
    loading: l,
    halfChecked: s,
    dragOver: u,
    dragOverGapTop: i,
    dragOverGapBottom: d,
    pos: v,
    active: m,
    eventKey: b
  } = e, x = w(w({
    dataRef: t
  }, t), {
    expanded: n,
    selected: a,
    checked: o,
    loaded: r,
    loading: l,
    halfChecked: s,
    dragOver: u,
    dragOverGapTop: i,
    dragOverGapBottom: d,
    pos: v,
    active: m,
    eventKey: b,
    key: b
  });
  return "props" in x || Object.defineProperty(x, "props", {
    get() {
      return ie(!1, "Second param return from event is node data instead of TreeNode instance. Please read value directly instead of reading from `props`."), e;
    }
  }), x;
}
function sn(e, t) {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((a) => {
    t.has(a) || n.add(a);
  }), n;
}
function La(e) {
  const {
    disabled: t,
    disableCheckbox: n,
    checkable: a
  } = e || {};
  return !!(t || n) || a === !1;
}
function Aa(e, t, n, a) {
  const o = new Set(e), r = /* @__PURE__ */ new Set();
  for (let s = 0; s <= n; s += 1)
    (t.get(s) || /* @__PURE__ */ new Set()).forEach((i) => {
      const {
        key: d,
        node: v,
        children: m = []
      } = i;
      o.has(d) && !a(v) && m.filter((b) => !a(b.node)).forEach((b) => {
        o.add(b.key);
      });
    });
  const l = /* @__PURE__ */ new Set();
  for (let s = n; s >= 0; s -= 1)
    (t.get(s) || /* @__PURE__ */ new Set()).forEach((i) => {
      const {
        parent: d,
        node: v
      } = i;
      if (a(v) || !i.parent || l.has(i.parent.key))
        return;
      if (a(i.parent.node)) {
        l.add(d.key);
        return;
      }
      let m = !0, b = !1;
      (d.children || []).filter((x) => !a(x.node)).forEach((x) => {
        let {
          key: p
        } = x;
        const k = o.has(p);
        m && !k && (m = !1), !b && (k || r.has(p)) && (b = !0);
      }), m && o.add(d.key), b && r.add(d.key), l.add(d.key);
    });
  return {
    checkedKeys: Array.from(o),
    halfCheckedKeys: Array.from(sn(r, o))
  };
}
function _a(e, t, n, a, o) {
  const r = new Set(e);
  let l = new Set(t);
  for (let u = 0; u <= a; u += 1)
    (n.get(u) || /* @__PURE__ */ new Set()).forEach((d) => {
      const {
        key: v,
        node: m,
        children: b = []
      } = d;
      !r.has(v) && !l.has(v) && !o(m) && b.filter((x) => !o(x.node)).forEach((x) => {
        r.delete(x.key);
      });
    });
  l = /* @__PURE__ */ new Set();
  const s = /* @__PURE__ */ new Set();
  for (let u = a; u >= 0; u -= 1)
    (n.get(u) || /* @__PURE__ */ new Set()).forEach((d) => {
      const {
        parent: v,
        node: m
      } = d;
      if (o(m) || !d.parent || s.has(d.parent.key))
        return;
      if (o(d.parent.node)) {
        s.add(v.key);
        return;
      }
      let b = !0, x = !1;
      (v.children || []).filter((p) => !o(p.node)).forEach((p) => {
        let {
          key: k
        } = p;
        const C = r.has(k);
        b && !C && (b = !1), !x && (C || l.has(k)) && (x = !0);
      }), b || r.delete(v.key), x && l.add(v.key), s.add(v.key);
    });
  return {
    checkedKeys: Array.from(r),
    halfCheckedKeys: Array.from(sn(l, r))
  };
}
function Xe(e, t, n, a, o, r) {
  const l = [];
  let s;
  s = La;
  const u = new Set(e.filter((d) => {
    const v = !!n[d];
    return v || l.push(d), v;
  }));
  Rn(!l.length, `Tree missing follow keys: ${l.slice(0, 100).map((d) => `'${d}'`).join(", ")}`);
  let i;
  return t === !0 ? i = Aa(u, o, a, s) : i = _a(u, t.halfCheckedKeys, o, a, s), i;
}
function cn(e) {
  const t = Pe(0), n = H();
  return De(() => {
    const a = /* @__PURE__ */ new Map();
    let o = 0;
    const r = e.value || {};
    for (const l in r)
      if (Object.prototype.hasOwnProperty.call(r, l)) {
        const s = r[l], {
          level: u
        } = s;
        let i = a.get(u);
        i || (i = /* @__PURE__ */ new Set(), a.set(u, i)), i.add(s), o = Math.max(o, u);
      }
    t.value = o, n.value = a;
  }), {
    maxLevel: t,
    levelEntities: n
  };
}
var _t = function(e, t) {
  var n = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, a = Object.getOwnPropertySymbols(e); o < a.length; o++)
      t.indexOf(a[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[o]) && (n[a[o]] = e[a[o]]);
  return n;
};
const Fa = Ie({
  compatConfig: {
    MODE: 3
  },
  name: "MotionTreeNode",
  inheritAttrs: !1,
  props: w(w({}, on), {
    active: Boolean,
    motion: Object,
    motionNodes: {
      type: Array
    },
    onMotionStart: Function,
    onMotionEnd: Function,
    motionType: String
  }),
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const o = H(!0), r = bt(), l = H(!1), s = N(() => e.motion ? e.motion : Wn()), u = (i, d) => {
      var v, m, b, x;
      d === "appear" ? (m = (v = s.value) === null || v === void 0 ? void 0 : v.onAfterEnter) === null || m === void 0 || m.call(v, i) : d === "leave" && ((x = (b = s.value) === null || b === void 0 ? void 0 : b.onAfterLeave) === null || x === void 0 || x.call(b, i)), l.value || e.onMotionEnd(), l.value = !0;
    };
    return we(() => e.motionNodes, () => {
      e.motionNodes && e.motionType === "hide" && o.value && pt(() => {
        o.value = !1;
      });
    }, {
      immediate: !0,
      flush: "post"
    }), Zt(() => {
      e.motionNodes && e.onMotionStart();
    }), Tn(() => {
      e.motionNodes && u();
    }), () => {
      const {
        motion: i,
        motionNodes: d,
        motionType: v,
        active: m,
        eventKey: b
      } = e, x = _t(e, ["motion", "motionNodes", "motionType", "active", "eventKey"]);
      return d ? _(In, re(re({}, s.value), {}, {
        appear: v === "show",
        onAfterAppear: (p) => u(p, "appear"),
        onAfterLeave: (p) => u(p, "leave")
      }), {
        default: () => [$n(_("div", {
          class: `${r.value.prefixCls}-treenode-motion`
        }, [d.map((p) => {
          const k = _t(p.data, []), {
            title: C,
            key: I,
            isStart: T,
            isEnd: $
          } = p;
          return delete k.children, _(It, re(re({}, k), {}, {
            title: C,
            active: m,
            data: p.data,
            key: I,
            eventKey: I,
            isStart: T,
            isEnd: $
          }), a);
        })]), [[Ln, o.value]])]
      }) : _(It, re(re({
        class: n.class,
        style: n.style
      }, x), {}, {
        active: m,
        eventKey: b
      }), a);
    };
  }
});
function Va() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  const n = e.length, a = t.length;
  if (Math.abs(n - a) !== 1)
    return {
      add: !1,
      key: null
    };
  function o(r, l) {
    const s = /* @__PURE__ */ new Map();
    r.forEach((i) => {
      s.set(i, !0);
    });
    const u = l.filter((i) => !s.has(i));
    return u.length === 1 ? u[0] : null;
  }
  return n < a ? {
    add: !0,
    key: o(e, t)
  } : {
    add: !1,
    key: o(t, e)
  };
}
function Ft(e, t, n) {
  const a = e.findIndex((l) => l.key === n), o = e[a + 1], r = t.findIndex((l) => l.key === n);
  if (o) {
    const l = t.findIndex((s) => s.key === o.key);
    return t.slice(r + 1, l);
  }
  return t.slice(r + 1);
}
var Vt = function(e, t) {
  var n = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, a = Object.getOwnPropertySymbols(e); o < a.length; o++)
      t.indexOf(a[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[o]) && (n[a[o]] = e[a[o]]);
  return n;
};
const Mt = {
  width: 0,
  height: 0,
  display: "flex",
  overflow: "hidden",
  opacity: 0,
  border: 0,
  padding: 0,
  margin: 0
}, Ma = () => {
}, qe = `RC_TREE_MOTION_${Math.random()}`, dt = {
  key: qe
}, dn = {
  key: qe,
  level: 0,
  index: 0,
  pos: "0",
  node: dt,
  nodes: [dt]
}, jt = {
  parent: null,
  children: [],
  pos: dn.pos,
  data: dt,
  title: null,
  key: qe,
  /** Hold empty list here since we do not use it */
  isStart: [],
  isEnd: []
};
function Bt(e, t, n, a) {
  return t === !1 || !n ? e : e.slice(0, Math.ceil(n / a) + 1);
}
function Ht(e) {
  const {
    key: t,
    pos: n
  } = e;
  return et(t, n);
}
function ja(e) {
  let t = String(e.key), n = e;
  for (; n.parent; )
    n = n.parent, t = `${n.key} > ${t}`;
  return t;
}
const Ba = Ie({
  compatConfig: {
    MODE: 3
  },
  name: "NodeList",
  inheritAttrs: !1,
  props: ka,
  setup(e, t) {
    let {
      expose: n,
      attrs: a
    } = t;
    const o = Pe(), r = Pe(), {
      expandedKeys: l,
      flattenNodes: s
    } = an();
    n({
      scrollTo: (p) => {
        o.value.scrollTo(p);
      },
      getIndentWidth: () => r.value.offsetWidth
    });
    const u = H(s.value), i = H([]), d = Pe(null);
    function v() {
      u.value = s.value, i.value = [], d.value = null, e.onListChangeEnd();
    }
    const m = bt();
    we([() => l.value.slice(), s], (p, k) => {
      let [C, I] = p, [T, $] = k;
      const S = Va(T, C);
      if (S.key !== null) {
        const {
          virtual: M,
          height: B,
          itemHeight: L
        } = e;
        if (S.add) {
          const F = $.findIndex((ae) => {
            let {
              key: oe
            } = ae;
            return oe === S.key;
          }), Q = Bt(Ft($, I, S.key), M, B, L), Z = $.slice();
          Z.splice(F + 1, 0, jt), u.value = Z, i.value = Q, d.value = "show";
        } else {
          const F = I.findIndex((ae) => {
            let {
              key: oe
            } = ae;
            return oe === S.key;
          }), Q = Bt(Ft(I, $, S.key), M, B, L), Z = I.slice();
          Z.splice(F + 1, 0, jt), u.value = Z, i.value = Q, d.value = "hide";
        }
      } else
        $ !== I && (u.value = I);
    }), we(() => m.value.dragging, (p) => {
      p || v();
    });
    const b = N(() => e.motion === void 0 ? u.value : s.value), x = () => {
      e.onActiveChange(null);
    };
    return () => {
      const p = w(w({}, e), a), {
        prefixCls: k,
        selectable: C,
        checkable: I,
        disabled: T,
        motion: $,
        height: S,
        itemHeight: M,
        virtual: B,
        focusable: L,
        activeItem: F,
        focused: Q,
        tabindex: Z,
        onKeydown: ae,
        onFocus: oe,
        onBlur: fe,
        onListChangeStart: ce,
        onListChangeEnd: ge
      } = p, de = Vt(p, ["prefixCls", "selectable", "checkable", "disabled", "motion", "height", "itemHeight", "virtual", "focusable", "activeItem", "focused", "tabindex", "onKeydown", "onFocus", "onBlur", "onListChangeStart", "onListChangeEnd"]);
      return _(An, null, [Q && F && _("span", {
        style: Mt,
        "aria-live": "assertive"
      }, [ja(F)]), _("div", null, [_("input", {
        style: Mt,
        disabled: L === !1 || T,
        tabindex: L !== !1 ? Z : null,
        onKeydown: ae,
        onFocus: oe,
        onBlur: fe,
        value: "",
        onChange: Ma,
        "aria-label": "for screen reader"
      }, null)]), _("div", {
        class: `${k}-treenode`,
        "aria-hidden": !0,
        style: {
          position: "absolute",
          pointerEvents: "none",
          visibility: "hidden",
          height: 0,
          overflow: "hidden"
        }
      }, [_("div", {
        class: `${k}-indent`
      }, [_("div", {
        ref: r,
        class: `${k}-indent-unit`
      }, null)])]), _(ia, re(re({}, Ye(de, ["onActiveChange"])), {}, {
        data: b.value,
        itemKey: Ht,
        height: S,
        fullHeight: !1,
        virtual: B,
        itemHeight: M,
        prefixCls: `${k}-list`,
        ref: o,
        onVisibleChange: (J, ue) => {
          const ee = new Set(J);
          ue.filter((se) => !ee.has(se)).some((se) => Ht(se) === qe) && v();
        }
      }), {
        default: (J) => {
          const {
            pos: ue
          } = J, ee = Vt(J.data, []), {
            title: le,
            key: se,
            isStart: he,
            isEnd: z
          } = J, ne = et(se, ue);
          return delete ee.key, delete ee.children, _(Fa, re(re({}, ee), {}, {
            eventKey: ne,
            title: le,
            active: !!F && se === F.key,
            data: J.data,
            isStart: he,
            isEnd: z,
            motion: $,
            motionNodes: se === qe ? i.value : null,
            motionType: d.value,
            onMotionStart: ce,
            onMotionEnd: v,
            onMousemove: x
          }), null);
        }
      })]);
    };
  }
});
function Ha(e) {
  let {
    dropPosition: t,
    dropLevelOffset: n,
    indent: a
  } = e;
  const o = {
    pointerEvents: "none",
    position: "absolute",
    right: 0,
    backgroundColor: "red",
    height: "2px"
  };
  switch (t) {
    case -1:
      o.top = 0, o.left = `${-n * a}px`;
      break;
    case 1:
      o.bottom = 0, o.left = `${-n * a}px`;
      break;
    case 0:
      o.bottom = 0, o.left = `${a}`;
      break;
  }
  return _("div", {
    style: o
  }, null);
}
const Ra = 10, Wa = Ie({
  compatConfig: {
    MODE: 3
  },
  name: "Tree",
  inheritAttrs: !1,
  props: gt(wa(), {
    prefixCls: "vc-tree",
    showLine: !1,
    showIcon: !0,
    selectable: !0,
    multiple: !1,
    checkable: !1,
    disabled: !1,
    checkStrictly: !1,
    draggable: !1,
    expandAction: !1,
    defaultExpandParent: !0,
    autoExpandParent: !1,
    defaultExpandAll: !1,
    defaultExpandedKeys: [],
    defaultCheckedKeys: [],
    defaultSelectedKeys: [],
    dropIndicatorRender: Ha,
    allowDrop: () => !0
  }),
  setup(e, t) {
    let {
      attrs: n,
      slots: a,
      expose: o
    } = t;
    const r = H(!1);
    let l = {};
    const s = H(), u = H([]), i = H([]), d = H([]), v = H([]), m = H([]), b = H([]), x = {}, p = Yt({
      draggingNodeKey: null,
      dragChildrenKeys: [],
      // dropTargetKey is the key of abstract-drop-node
      // the abstract-drop-node is the real drop node when drag and drop
      // not the DOM drag over node
      dropTargetKey: null,
      dropPosition: null,
      dropContainerKey: null,
      dropLevelOffset: null,
      dropTargetPos: null,
      dropAllowed: !0,
      // the abstract-drag-over-node
      // if mouse is on the bottom of top dom node or no the top of the bottom dom node
      // abstract-drag-over-node is the top node
      dragOverNodeKey: null
    }), k = H([]);
    we([() => e.treeData, () => e.children], () => {
      k.value = e.treeData !== void 0 ? xe(e.treeData).slice() : Ta(xe(e.children));
    }, {
      immediate: !0,
      deep: !0
    });
    const C = H({}), I = H(!1), T = H(null), $ = H(!1), S = N(() => Ct(e.fieldNames)), M = H();
    let B = null, L = null, F = null;
    const Q = N(() => ({
      expandedKeysSet: Z.value,
      selectedKeysSet: ae.value,
      loadedKeysSet: oe.value,
      loadingKeysSet: fe.value,
      checkedKeysSet: ce.value,
      halfCheckedKeysSet: ge.value,
      dragOverNodeKey: p.dragOverNodeKey,
      dropPosition: p.dropPosition,
      keyEntities: C.value
    })), Z = N(() => new Set(b.value)), ae = N(() => new Set(u.value)), oe = N(() => new Set(v.value)), fe = N(() => new Set(m.value)), ce = N(() => new Set(i.value)), ge = N(() => new Set(d.value));
    De(() => {
      if (k.value) {
        const f = rn(k.value, {
          fieldNames: S.value
        });
        C.value = w({
          [qe]: dn
        }, f.keyEntities);
      }
    });
    let de = !1;
    we(
      [() => e.expandedKeys, () => e.autoExpandParent, C],
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      (f, h) => {
        let [g, K] = f, [A, P] = h, E = b.value;
        if (e.expandedKeys !== void 0 || de && K !== P)
          E = e.autoExpandParent || !de && e.defaultExpandParent ? At(e.expandedKeys, C.value) : e.expandedKeys;
        else if (!de && e.defaultExpandAll) {
          const R = w({}, C.value);
          delete R[qe], E = Object.keys(R).map((q) => R[q].key);
        } else
          !de && e.defaultExpandedKeys && (E = e.autoExpandParent || e.defaultExpandParent ? At(e.defaultExpandedKeys, C.value) : e.defaultExpandedKeys);
        E && (b.value = E), de = !0;
      },
      {
        immediate: !0
      }
    );
    const J = H([]);
    De(() => {
      J.value = Ia(k.value, b.value, S.value);
    }), De(() => {
      e.selectable && (e.selectedKeys !== void 0 ? u.value = Lt(e.selectedKeys, e) : !de && e.defaultSelectedKeys && (u.value = Lt(e.defaultSelectedKeys, e)));
    });
    const {
      maxLevel: ue,
      levelEntities: ee
    } = cn(C);
    De(() => {
      if (e.checkable) {
        let f;
        if (e.checkedKeys !== void 0 ? f = st(e.checkedKeys) || {} : !de && e.defaultCheckedKeys ? f = st(e.defaultCheckedKeys) || {} : k.value && (f = st(e.checkedKeys) || {
          checkedKeys: i.value,
          halfCheckedKeys: d.value
        }), f) {
          let {
            checkedKeys: h = [],
            halfCheckedKeys: g = []
          } = f;
          e.checkStrictly || ({
            checkedKeys: h,
            halfCheckedKeys: g
          } = Xe(h, !0, C.value, ue.value, ee.value)), i.value = h, d.value = g;
        }
      }
    }), De(() => {
      e.loadedKeys && (v.value = e.loadedKeys);
    });
    const le = () => {
      w(p, {
        dragOverNodeKey: null,
        dropPosition: null,
        dropLevelOffset: null,
        dropTargetKey: null,
        dropContainerKey: null,
        dropTargetPos: null,
        dropAllowed: !1
      });
    }, se = (f) => {
      M.value.scrollTo(f);
    };
    we(() => e.activeKey, () => {
      e.activeKey !== void 0 && (T.value = e.activeKey);
    }, {
      immediate: !0
    }), we(T, (f) => {
      pt(() => {
        f !== null && se({
          key: f
        });
      });
    }, {
      immediate: !0,
      flush: "post"
    });
    const he = (f) => {
      e.expandedKeys === void 0 && (b.value = f);
    }, z = () => {
      p.draggingNodeKey !== null && w(p, {
        draggingNodeKey: null,
        dropPosition: null,
        dropContainerKey: null,
        dropTargetKey: null,
        dropLevelOffset: null,
        dropAllowed: !0,
        dragOverNodeKey: null
      }), B = null, F = null;
    }, ne = (f, h) => {
      const {
        onDragend: g
      } = e;
      p.dragOverNodeKey = null, z(), g == null || g({
        event: f,
        node: h.eventData
      }), L = null;
    }, ve = (f) => {
      ne(f, null), window.removeEventListener("dragend", ve);
    }, Se = (f, h) => {
      const {
        onDragstart: g
      } = e, {
        eventKey: K,
        eventData: A
      } = h;
      L = h, B = {
        x: f.clientX,
        y: f.clientY
      };
      const P = Te(b.value, K);
      p.draggingNodeKey = K, p.dragChildrenKeys = Ea(K, C.value), s.value = M.value.getIndentWidth(), he(P), window.addEventListener("dragend", ve), g && g({
        event: f,
        node: A
      });
    }, je = (f, h) => {
      const {
        onDragenter: g,
        onExpand: K,
        allowDrop: A,
        direction: P
      } = e, {
        pos: E,
        eventKey: R
      } = h;
      if (F !== R && (F = R), !L) {
        le();
        return;
      }
      const {
        dropPosition: q,
        dropLevelOffset: W,
        dropTargetKey: X,
        dropContainerKey: Y,
        dropTargetPos: ye,
        dropAllowed: Ce,
        dragOverNodeKey: ke
      } = $t(f, L, h, s.value, B, A, J.value, C.value, Z.value, P);
      if (
        // don't allow drop inside its children
        p.dragChildrenKeys.indexOf(X) !== -1 || // don't allow drop when drop is not allowed caculated by calcDropPosition
        !Ce
      ) {
        le();
        return;
      }
      if (l || (l = {}), Object.keys(l).forEach((pe) => {
        clearTimeout(l[pe]);
      }), L.eventKey !== h.eventKey && (l[E] = window.setTimeout(() => {
        if (p.draggingNodeKey === null)
          return;
        let pe = b.value.slice();
        const Ve = C.value[h.eventKey];
        Ve && (Ve.children || []).length && (pe = Me(b.value, h.eventKey)), he(pe), K && K(pe, {
          node: h.eventData,
          expanded: !0,
          nativeEvent: f
        });
      }, 800)), L.eventKey === X && W === 0) {
        le();
        return;
      }
      w(p, {
        dragOverNodeKey: ke,
        dropPosition: q,
        dropLevelOffset: W,
        dropTargetKey: X,
        dropContainerKey: Y,
        dropTargetPos: ye,
        dropAllowed: Ce
      }), g && g({
        event: f,
        node: h.eventData,
        expandedKeys: b.value
      });
    }, Be = (f, h) => {
      const {
        onDragover: g,
        allowDrop: K,
        direction: A
      } = e;
      if (!L)
        return;
      const {
        dropPosition: P,
        dropLevelOffset: E,
        dropTargetKey: R,
        dropContainerKey: q,
        dropAllowed: W,
        dropTargetPos: X,
        dragOverNodeKey: Y
      } = $t(f, L, h, s.value, B, K, J.value, C.value, Z.value, A);
      p.dragChildrenKeys.indexOf(R) !== -1 || !W || (L.eventKey === R && E === 0 ? p.dropPosition === null && p.dropLevelOffset === null && p.dropTargetKey === null && p.dropContainerKey === null && p.dropTargetPos === null && p.dropAllowed === !1 && p.dragOverNodeKey === null || le() : P === p.dropPosition && E === p.dropLevelOffset && R === p.dropTargetKey && q === p.dropContainerKey && X === p.dropTargetPos && W === p.dropAllowed && Y === p.dragOverNodeKey || w(p, {
        dropPosition: P,
        dropLevelOffset: E,
        dropTargetKey: R,
        dropContainerKey: q,
        dropTargetPos: X,
        dropAllowed: W,
        dragOverNodeKey: Y
      }), g && g({
        event: f,
        node: h.eventData
      }));
    }, He = (f, h) => {
      F === h.eventKey && !f.currentTarget.contains(f.relatedTarget) && (le(), F = null);
      const {
        onDragleave: g
      } = e;
      g && g({
        event: f,
        node: h.eventData
      });
    }, Re = function(f, h) {
      let g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
      var K;
      const {
        dragChildrenKeys: A,
        dropPosition: P,
        dropTargetKey: E,
        dropTargetPos: R,
        dropAllowed: q
      } = p;
      if (!q)
        return;
      const {
        onDrop: W
      } = e;
      if (p.dragOverNodeKey = null, z(), E === null)
        return;
      const X = w(w({}, tt(E, xe(Q.value))), {
        active: ((K = O.value) === null || K === void 0 ? void 0 : K.key) === E,
        data: C.value[E].node
      }), Y = A.indexOf(E) !== -1;
      ie(!Y, "Can not drop to dragNode's children node. Maybe this is a bug of ant-design-vue. Please report an issue.");
      const ye = St(R), Ce = {
        event: f,
        node: nt(X),
        dragNode: L ? L.eventData : null,
        dragNodesKeys: [L.eventKey].concat(A),
        dropToGap: P !== 0,
        dropPosition: P + Number(ye[ye.length - 1])
      };
      g || W == null || W(Ce), L = null;
    }, $e = (f, h) => {
      const {
        expanded: g,
        key: K
      } = h, A = J.value.filter((E) => E.key === K)[0], P = nt(w(w({}, tt(K, Q.value)), {
        data: A.data
      }));
      he(g ? Te(b.value, K) : Me(b.value, K)), j(f, P);
    }, Le = (f, h) => {
      const {
        onClick: g,
        expandAction: K
      } = e;
      K === "click" && $e(f, h), g && g(f, h);
    }, We = (f, h) => {
      const {
        onDblclick: g,
        expandAction: K
      } = e;
      (K === "doubleclick" || K === "dblclick") && $e(f, h), g && g(f, h);
    }, Ae = (f, h) => {
      let g = u.value;
      const {
        onSelect: K,
        multiple: A
      } = e, {
        selected: P
      } = h, E = h[S.value.key], R = !P;
      R ? A ? g = Me(g, E) : g = [E] : g = Te(g, E);
      const q = C.value, W = g.map((X) => {
        const Y = q[X];
        return Y ? Y.node : null;
      }).filter((X) => X);
      e.selectedKeys === void 0 && (u.value = g), K && K(g, {
        event: "select",
        selected: R,
        node: h,
        selectedNodes: W,
        nativeEvent: f
      });
    }, _e = (f, h, g) => {
      const {
        checkStrictly: K,
        onCheck: A
      } = e, P = h[S.value.key];
      let E;
      const R = {
        event: "check",
        node: h,
        checked: g,
        nativeEvent: f
      }, q = C.value;
      if (K) {
        const W = g ? Me(i.value, P) : Te(i.value, P), X = Te(d.value, P);
        E = {
          checked: W,
          halfChecked: X
        }, R.checkedNodes = W.map((Y) => q[Y]).filter((Y) => Y).map((Y) => Y.node), e.checkedKeys === void 0 && (i.value = W);
      } else {
        let {
          checkedKeys: W,
          halfCheckedKeys: X
        } = Xe([...i.value, P], !0, q, ue.value, ee.value);
        if (!g) {
          const Y = new Set(W);
          Y.delete(P), {
            checkedKeys: W,
            halfCheckedKeys: X
          } = Xe(Array.from(Y), {
            checked: !1,
            halfCheckedKeys: X
          }, q, ue.value, ee.value);
        }
        E = W, R.checkedNodes = [], R.checkedNodesPositions = [], R.halfCheckedKeys = X, W.forEach((Y) => {
          const ye = q[Y];
          if (!ye)
            return;
          const {
            node: Ce,
            pos: ke
          } = ye;
          R.checkedNodes.push(Ce), R.checkedNodesPositions.push({
            node: Ce,
            pos: ke
          });
        }), e.checkedKeys === void 0 && (i.value = W, d.value = X);
      }
      A && A(E, R);
    }, Fe = (f) => {
      const h = f[S.value.key], g = new Promise((K, A) => {
        const {
          loadData: P,
          onLoad: E
        } = e;
        if (!P || oe.value.has(h) || fe.value.has(h))
          return null;
        P(f).then(() => {
          const q = Me(v.value, h), W = Te(m.value, h);
          E && E(q, {
            event: "load",
            node: f
          }), e.loadedKeys === void 0 && (v.value = q), m.value = W, K();
        }).catch((q) => {
          const W = Te(m.value, h);
          if (m.value = W, x[h] = (x[h] || 0) + 1, x[h] >= Ra) {
            ie(!1, "Retry for `loadData` many times but still failed. No more retry.");
            const X = Me(v.value, h);
            e.loadedKeys === void 0 && (v.value = X), K();
          }
          A(q);
        }), m.value = Me(m.value, h);
      });
      return g.catch(() => {
      }), g;
    }, ze = (f, h) => {
      const {
        onMouseenter: g
      } = e;
      g && g({
        event: f,
        node: h
      });
    }, Ke = (f, h) => {
      const {
        onMouseleave: g
      } = e;
      g && g({
        event: f,
        node: h
      });
    }, Ue = (f, h) => {
      const {
        onRightClick: g
      } = e;
      g && (f.preventDefault(), g({
        event: f,
        node: h
      }));
    }, Ne = (f) => {
      const {
        onFocus: h
      } = e;
      I.value = !0, h && h(f);
    }, D = (f) => {
      const {
        onBlur: h
      } = e;
      I.value = !1, y(null), h && h(f);
    }, j = (f, h) => {
      let g = b.value;
      const {
        onExpand: K,
        loadData: A
      } = e, {
        expanded: P
      } = h, E = h[S.value.key];
      if ($.value)
        return;
      const R = g.indexOf(E), q = !P;
      if (ie(P && R !== -1 || !P && R === -1, "Expand state not sync with index check"), q ? g = Me(g, E) : g = Te(g, E), he(g), K && K(g, {
        node: h,
        expanded: q,
        nativeEvent: f
      }), q && A) {
        const W = Fe(h);
        W && W.then(() => {
        }).catch((X) => {
          const Y = Te(b.value, E);
          he(Y), Promise.reject(X);
        });
      }
    }, U = () => {
      $.value = !0;
    }, c = () => {
      setTimeout(() => {
        $.value = !1;
      });
    }, y = (f) => {
      const {
        onActiveChange: h
      } = e;
      T.value !== f && (e.activeKey !== void 0 && (T.value = f), f !== null && se({
        key: f
      }), h && h(f));
    }, O = N(() => T.value === null ? null : J.value.find((f) => {
      let {
        key: h
      } = f;
      return h === T.value;
    }) || null), V = (f) => {
      let h = J.value.findIndex((K) => {
        let {
          key: A
        } = K;
        return A === T.value;
      });
      h === -1 && f < 0 && (h = J.value.length), h = (h + f + J.value.length) % J.value.length;
      const g = J.value[h];
      if (g) {
        const {
          key: K
        } = g;
        y(K);
      } else
        y(null);
    }, G = N(() => nt(w(w({}, tt(T.value, Q.value)), {
      data: O.value.data,
      active: !0
    }))), te = (f) => {
      const {
        onKeydown: h,
        checkable: g,
        selectable: K
      } = e;
      switch (f.which) {
        case be.UP: {
          V(-1), f.preventDefault();
          break;
        }
        case be.DOWN: {
          V(1), f.preventDefault();
          break;
        }
      }
      const A = O.value;
      if (A && A.data) {
        const P = A.data.isLeaf === !1 || !!(A.data.children || []).length, E = G.value;
        switch (f.which) {
          case be.LEFT: {
            P && Z.value.has(T.value) ? j({}, E) : A.parent && y(A.parent.key), f.preventDefault();
            break;
          }
          case be.RIGHT: {
            P && !Z.value.has(T.value) ? j({}, E) : A.children && A.children.length && y(A.children[0].key), f.preventDefault();
            break;
          }
          case be.ENTER:
          case be.SPACE: {
            g && !E.disabled && E.checkable !== !1 && !E.disableCheckbox ? _e({}, E, !ce.value.has(T.value)) : !g && K && !E.disabled && E.selectable !== !1 && Ae({}, E);
            break;
          }
        }
      }
      h && h(f);
    };
    return o({
      onNodeExpand: j,
      scrollTo: se,
      onKeydown: te,
      selectedKeys: N(() => u.value),
      checkedKeys: N(() => i.value),
      halfCheckedKeys: N(() => d.value),
      loadedKeys: N(() => v.value),
      loadingKeys: N(() => m.value),
      expandedKeys: N(() => b.value)
    }), _n(() => {
      window.removeEventListener("dragend", ve), r.value = !0;
    }), Sa({
      expandedKeys: b,
      selectedKeys: u,
      loadedKeys: v,
      loadingKeys: m,
      checkedKeys: i,
      halfCheckedKeys: d,
      expandedKeysSet: Z,
      selectedKeysSet: ae,
      loadedKeysSet: oe,
      loadingKeysSet: fe,
      checkedKeysSet: ce,
      halfCheckedKeysSet: ge,
      flattenNodes: J
    }), () => {
      const {
        // focused,
        // flattenNodes,
        // keyEntities,
        draggingNodeKey: f,
        // activeKey,
        dropLevelOffset: h,
        dropContainerKey: g,
        dropTargetKey: K,
        dropPosition: A,
        dragOverNodeKey: P
        // indent,
      } = p, {
        prefixCls: E,
        showLine: R,
        focusable: q,
        tabindex: W = 0,
        selectable: X,
        showIcon: Y,
        icon: ye = a.icon,
        switcherIcon: Ce,
        draggable: ke,
        checkable: pe,
        checkStrictly: Ve,
        disabled: Je,
        motion: ot,
        loadData: yn,
        filterTreeNode: pn,
        height: gn,
        itemHeight: mn,
        virtual: bn,
        dropIndicatorRender: Sn,
        onContextmenu: Cn,
        onScroll: kn,
        direction: wn,
        rootClassName: xn,
        rootStyle: Kn
      } = e, {
        class: Nn,
        style: En
      } = n, On = Jt(w(w({}, e), n), {
        aria: !0,
        data: !0
      });
      let Qe;
      return ke ? typeof ke == "object" ? Qe = ke : typeof ke == "function" ? Qe = {
        nodeDraggable: ke
      } : Qe = {} : Qe = !1, _(ba, {
        value: {
          prefixCls: E,
          selectable: X,
          showIcon: Y,
          icon: ye,
          switcherIcon: Ce,
          draggable: Qe,
          draggingNodeKey: f,
          checkable: pe,
          customCheckable: a.checkable,
          checkStrictly: Ve,
          disabled: Je,
          keyEntities: C.value,
          dropLevelOffset: h,
          dropContainerKey: g,
          dropTargetKey: K,
          dropPosition: A,
          dragOverNodeKey: P,
          dragging: f !== null,
          indent: s.value,
          direction: wn,
          dropIndicatorRender: Sn,
          loadData: yn,
          filterTreeNode: pn,
          onNodeClick: Le,
          onNodeDoubleClick: We,
          onNodeExpand: j,
          onNodeSelect: Ae,
          onNodeCheck: _e,
          onNodeLoad: Fe,
          onNodeMouseEnter: ze,
          onNodeMouseLeave: Ke,
          onNodeContextMenu: Ue,
          onNodeDragStart: Se,
          onNodeDragEnter: je,
          onNodeDragOver: Be,
          onNodeDragLeave: He,
          onNodeDragEnd: ne,
          onNodeDrop: Re,
          slots: a
        }
      }, {
        default: () => [_("div", {
          role: "tree",
          class: Oe(E, Nn, xn, {
            [`${E}-show-line`]: R,
            [`${E}-focused`]: I.value,
            [`${E}-active-focused`]: T.value !== null
          }),
          style: Kn
        }, [_(Ba, re({
          ref: M,
          prefixCls: E,
          style: En,
          disabled: Je,
          selectable: X,
          checkable: !!pe,
          motion: ot,
          height: gn,
          itemHeight: mn,
          virtual: bn,
          focusable: q,
          focused: I.value,
          tabindex: W,
          activeItem: O.value,
          onFocus: Ne,
          onBlur: D,
          onKeydown: te,
          onActiveChange: y,
          onListChangeStart: U,
          onListChangeEnd: c,
          onContextmenu: Cn,
          onScroll: kn
        }, On), null)])]
      });
    };
  }
});
var za = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494z" } }] }, name: "file", theme: "outlined" };
function Rt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, a = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), a.forEach(function(o) {
      Ua(e, o, n[o]);
    });
  }
  return e;
}
function Ua(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var kt = function(t, n) {
  var a = Rt({}, t, n.attrs);
  return _(at, Rt({}, a, {
    icon: za
  }), null);
};
kt.displayName = "FileOutlined";
kt.inheritAttrs = !1;
var Ga = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M328 544h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z" } }, { tag: "path", attrs: { d: "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z" } }] }, name: "minus-square", theme: "outlined" };
function Wt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, a = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), a.forEach(function(o) {
      qa(e, o, n[o]);
    });
  }
  return e;
}
function qa(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var wt = function(t, n) {
  var a = Wt({}, t, n.attrs);
  return _(at, Wt({}, a, {
    icon: Ga
  }), null);
};
wt.displayName = "MinusSquareOutlined";
wt.inheritAttrs = !1;
var Xa = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M328 544h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z" } }, { tag: "path", attrs: { d: "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z" } }] }, name: "plus-square", theme: "outlined" };
function zt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, a = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), a.forEach(function(o) {
      Ya(e, o, n[o]);
    });
  }
  return e;
}
function Ya(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var xt = function(t, n) {
  var a = zt({}, t, n.attrs);
  return _(at, zt({}, a, {
    icon: Xa
  }), null);
};
xt.displayName = "PlusSquareOutlined";
xt.inheritAttrs = !1;
var Za = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" } }] }, name: "caret-down", theme: "filled" };
function Ut(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, a = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), a.forEach(function(o) {
      Ja(e, o, n[o]);
    });
  }
  return e;
}
function Ja(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Kt = function(t, n) {
  var a = Ut({}, t, n.attrs);
  return _(at, Ut({}, a, {
    icon: Za
  }), null);
};
Kt.displayName = "CaretDownFilled";
Kt.inheritAttrs = !1;
function Qa(e, t, n, a, o) {
  const {
    isLeaf: r,
    expanded: l,
    loading: s
  } = n;
  let u = t;
  if (s)
    return _(zn, {
      class: `${e}-switcher-loading-icon`
    }, null);
  let i;
  o && typeof o == "object" && (i = o.showLeafIcon);
  let d = null;
  const v = `${e}-switcher-icon`;
  return r ? o ? i && a ? a(n) : (typeof o == "object" && !i ? d = _("span", {
    class: `${e}-switcher-leaf-line`
  }, null) : d = _(kt, {
    class: `${e}-switcher-line-icon`
  }, null), d) : null : (d = _(Kt, {
    class: v
  }, null), o && (d = l ? _(wt, {
    class: `${e}-switcher-line-icon`
  }, null) : _(xt, {
    class: `${e}-switcher-line-icon`
  }, null)), typeof t == "function" ? u = t(w(w({}, n), {
    defaultIcon: d,
    switcherCls: v
  })) : Un(u) && (u = Fn(u, {
    class: v
  })), u || d);
}
const eo = new qn("ant-tree-node-fx-do-not-use", {
  "0%": {
    opacity: 0
  },
  "100%": {
    opacity: 1
  }
}), to = (e, t) => ({
  [`.${e}-switcher-icon`]: {
    display: "inline-block",
    fontSize: 10,
    verticalAlign: "baseline",
    svg: {
      transition: `transform ${t.motionDurationSlow}`
    }
  }
}), no = (e, t) => ({
  [`.${e}-drop-indicator`]: {
    position: "absolute",
    // it should displayed over the following node
    zIndex: 1,
    height: 2,
    backgroundColor: t.colorPrimary,
    borderRadius: 1,
    pointerEvents: "none",
    "&:after": {
      position: "absolute",
      top: -3,
      insetInlineStart: -6,
      width: 8,
      height: 8,
      backgroundColor: "transparent",
      border: `${t.lineWidthBold}px solid ${t.colorPrimary}`,
      borderRadius: "50%",
      content: '""'
    }
  }
}), ao = (e, t) => {
  const {
    treeCls: n,
    treeNodeCls: a,
    treeNodePadding: o,
    treeTitleHeight: r
  } = t, l = (r - t.fontSizeLG) / 2, s = t.paddingXS;
  return {
    [n]: w(w({}, Gn(t)), {
      background: t.colorBgContainer,
      borderRadius: t.borderRadius,
      transition: `background-color ${t.motionDurationSlow}`,
      [`&${n}-rtl`]: {
        // >>> Switcher
        [`${n}-switcher`]: {
          "&_close": {
            [`${n}-switcher-icon`]: {
              svg: {
                transform: "rotate(90deg)"
              }
            }
          }
        }
      },
      [`&-focused:not(:hover):not(${n}-active-focused)`]: w({}, Et(t)),
      // =================== Virtual List ===================
      [`${n}-list-holder-inner`]: {
        alignItems: "flex-start"
      },
      [`&${n}-block-node`]: {
        [`${n}-list-holder-inner`]: {
          alignItems: "stretch",
          // >>> Title
          [`${n}-node-content-wrapper`]: {
            flex: "auto"
          },
          // >>> Drag
          [`${a}.dragging`]: {
            position: "relative",
            "&:after": {
              position: "absolute",
              top: 0,
              insetInlineEnd: 0,
              bottom: o,
              insetInlineStart: 0,
              border: `1px solid ${t.colorPrimary}`,
              opacity: 0,
              animationName: eo,
              animationDuration: t.motionDurationSlow,
              animationPlayState: "running",
              animationFillMode: "forwards",
              content: '""',
              pointerEvents: "none"
            }
          }
        }
      },
      // ===================== TreeNode =====================
      [`${a}`]: {
        display: "flex",
        alignItems: "flex-start",
        padding: `0 0 ${o}px 0`,
        outline: "none",
        "&-rtl": {
          direction: "rtl"
        },
        // Disabled
        "&-disabled": {
          // >>> Title
          [`${n}-node-content-wrapper`]: {
            color: t.colorTextDisabled,
            cursor: "not-allowed",
            "&:hover": {
              background: "transparent"
            }
          }
        },
        [`&-active ${n}-node-content-wrapper`]: w({}, Et(t)),
        [`&:not(${a}-disabled).filter-node ${n}-title`]: {
          color: "inherit",
          fontWeight: 500
        },
        "&-draggable": {
          [`${n}-draggable-icon`]: {
            width: r,
            lineHeight: `${r}px`,
            textAlign: "center",
            visibility: "visible",
            opacity: 0.2,
            transition: `opacity ${t.motionDurationSlow}`,
            [`${a}:hover &`]: {
              opacity: 0.45
            }
          },
          [`&${a}-disabled`]: {
            [`${n}-draggable-icon`]: {
              visibility: "hidden"
            }
          }
        }
      },
      // >>> Indent
      [`${n}-indent`]: {
        alignSelf: "stretch",
        whiteSpace: "nowrap",
        userSelect: "none",
        "&-unit": {
          display: "inline-block",
          width: r
        }
      },
      // >>> Drag Handler
      [`${n}-draggable-icon`]: {
        visibility: "hidden"
      },
      // >>> Switcher
      [`${n}-switcher`]: w(w({}, to(e, t)), {
        position: "relative",
        flex: "none",
        alignSelf: "stretch",
        width: r,
        margin: 0,
        lineHeight: `${r}px`,
        textAlign: "center",
        cursor: "pointer",
        userSelect: "none",
        "&-noop": {
          cursor: "default"
        },
        "&_close": {
          [`${n}-switcher-icon`]: {
            svg: {
              transform: "rotate(-90deg)"
            }
          }
        },
        "&-loading-icon": {
          color: t.colorPrimary
        },
        "&-leaf-line": {
          position: "relative",
          zIndex: 1,
          display: "inline-block",
          width: "100%",
          height: "100%",
          // https://github.com/ant-design/ant-design/issues/31884
          "&:before": {
            position: "absolute",
            top: 0,
            insetInlineEnd: r / 2,
            bottom: -o,
            marginInlineStart: -1,
            borderInlineEnd: `1px solid ${t.colorBorder}`,
            content: '""'
          },
          "&:after": {
            position: "absolute",
            width: r / 2 * 0.8,
            height: r / 2,
            borderBottom: `1px solid ${t.colorBorder}`,
            content: '""'
          }
        }
      }),
      // >>> Checkbox
      [`${n}-checkbox`]: {
        top: "initial",
        marginInlineEnd: s,
        marginBlockStart: l
      },
      // >>> Title
      // add `${treeCls}-checkbox + span` to cover checkbox `${checkboxCls} + span`
      [`${n}-node-content-wrapper, ${n}-checkbox + span`]: {
        position: "relative",
        zIndex: "auto",
        minHeight: r,
        margin: 0,
        padding: `0 ${t.paddingXS / 2}px`,
        color: "inherit",
        lineHeight: `${r}px`,
        background: "transparent",
        borderRadius: t.borderRadius,
        cursor: "pointer",
        transition: `all ${t.motionDurationMid}, border 0s, line-height 0s, box-shadow 0s`,
        "&:hover": {
          backgroundColor: t.controlItemBgHover
        },
        [`&${n}-node-selected`]: {
          backgroundColor: t.controlItemBgActive
        },
        // Icon
        [`${n}-iconEle`]: {
          display: "inline-block",
          width: r,
          height: r,
          lineHeight: `${r}px`,
          textAlign: "center",
          verticalAlign: "top",
          "&:empty": {
            display: "none"
          }
        }
      },
      // https://github.com/ant-design/ant-design/issues/28217
      [`${n}-unselectable ${n}-node-content-wrapper:hover`]: {
        backgroundColor: "transparent"
      },
      // ==================== Draggable =====================
      [`${n}-node-content-wrapper`]: w({
        lineHeight: `${r}px`,
        userSelect: "none"
      }, no(e, t)),
      [`${a}.drop-container`]: {
        "> [draggable]": {
          boxShadow: `0 0 0 2px ${t.colorPrimary}`
        }
      },
      // ==================== Show Line =====================
      "&-show-line": {
        // ================ Indent lines ================
        [`${n}-indent`]: {
          "&-unit": {
            position: "relative",
            height: "100%",
            "&:before": {
              position: "absolute",
              top: 0,
              insetInlineEnd: r / 2,
              bottom: -o,
              borderInlineEnd: `1px solid ${t.colorBorder}`,
              content: '""'
            },
            "&-end": {
              "&:before": {
                display: "none"
              }
            }
          }
        },
        // ============== Cover Background ==============
        [`${n}-switcher`]: {
          background: "transparent",
          "&-line-icon": {
            // https://github.com/ant-design/ant-design/issues/32813
            verticalAlign: "-0.15em"
          }
        }
      },
      [`${a}-leaf-last`]: {
        [`${n}-switcher`]: {
          "&-leaf-line": {
            "&:before": {
              top: "auto !important",
              bottom: "auto !important",
              height: `${r / 2}px !important`
            }
          }
        }
      }
    })
  };
}, oo = (e) => {
  const {
    treeCls: t,
    treeNodeCls: n,
    treeNodePadding: a
  } = e;
  return {
    [`${t}${t}-directory`]: {
      // ================== TreeNode ==================
      [n]: {
        position: "relative",
        // Hover color
        "&:before": {
          position: "absolute",
          top: 0,
          insetInlineEnd: 0,
          bottom: a,
          insetInlineStart: 0,
          transition: `background-color ${e.motionDurationMid}`,
          content: '""',
          pointerEvents: "none"
        },
        "&:hover": {
          "&:before": {
            background: e.controlItemBgHover
          }
        },
        // Elements
        "> *": {
          zIndex: 1
        },
        // >>> Switcher
        [`${t}-switcher`]: {
          transition: `color ${e.motionDurationMid}`
        },
        // >>> Title
        [`${t}-node-content-wrapper`]: {
          borderRadius: 0,
          userSelect: "none",
          "&:hover": {
            background: "transparent"
          },
          [`&${t}-node-selected`]: {
            color: e.colorTextLightSolid,
            background: "transparent"
          }
        },
        // ============= Selected =============
        "&-selected": {
          "\n            &:hover::before,\n            &::before\n          ": {
            background: e.colorPrimary
          },
          // >>> Switcher
          [`${t}-switcher`]: {
            color: e.colorTextLightSolid
          },
          // >>> Title
          [`${t}-node-content-wrapper`]: {
            color: e.colorTextLightSolid,
            background: "transparent"
          }
        }
      }
    }
  };
}, lo = (e, t) => {
  const n = `.${e}`, a = `${n}-treenode`, o = t.paddingXS / 2, r = t.controlHeightSM, l = mt(t, {
    treeCls: n,
    treeNodeCls: a,
    treeNodePadding: o,
    treeTitleHeight: r
  });
  return [
    // Basic
    ao(e, l),
    // Directory
    oo(l)
  ];
};
function un(e) {
  return Array.isArray(e) ? e : e !== void 0 ? [e] : [];
}
function ro(e) {
  const {
    label: t,
    value: n,
    children: a
  } = e || {}, o = n || "value";
  return {
    _title: t ? [t] : ["title", "label"],
    value: o,
    key: o,
    children: a || "children"
  };
}
function ut(e) {
  return e.disabled || e.disableCheckbox || e.checkable === !1;
}
function io(e, t) {
  const n = [];
  function a(o) {
    o.forEach((r) => {
      n.push(r[t.value]);
      const l = r[t.children];
      l && a(l);
    });
  }
  return a(e), n;
}
function ft(e) {
  return e == null;
}
const fn = Symbol("TreeSelectContextPropsKey");
function so(e) {
  return ht(fn, e);
}
function co() {
  return yt(fn, {});
}
const uo = {
  width: 0,
  height: 0,
  display: "flex",
  overflow: "hidden",
  opacity: 0,
  border: 0,
  padding: 0,
  margin: 0
}, fo = Ie({
  compatConfig: {
    MODE: 3
  },
  name: "OptionList",
  inheritAttrs: !1,
  setup(e, t) {
    let {
      slots: n,
      expose: a
    } = t;
    const o = sa(), r = ca(), l = co(), s = Pe(), u = ra(() => l.treeData, [() => o.open, () => l.treeData], (S) => S[0]), i = N(() => {
      const {
        checkable: S,
        halfCheckedKeys: M,
        checkedKeys: B
      } = r;
      return S ? {
        checked: B,
        halfChecked: M
      } : null;
    });
    we(() => o.open, () => {
      pt(() => {
        var S;
        o.open && !o.multiple && r.checkedKeys.length && ((S = s.value) === null || S === void 0 || S.scrollTo({
          key: r.checkedKeys[0]
        }));
      });
    }, {
      immediate: !0,
      flush: "post"
    });
    const d = N(() => String(o.searchValue).toLowerCase()), v = (S) => d.value ? String(S[r.treeNodeFilterProp]).toLowerCase().includes(d.value) : !1, m = H(r.treeDefaultExpandedKeys), b = H(null);
    we(() => o.searchValue, () => {
      o.searchValue && (b.value = io(xe(l.treeData), xe(l.fieldNames)));
    }, {
      immediate: !0
    });
    const x = N(() => r.treeExpandedKeys ? r.treeExpandedKeys.slice() : o.searchValue ? b.value : m.value), p = (S) => {
      var M;
      m.value = S, b.value = S, (M = r.onTreeExpand) === null || M === void 0 || M.call(r, S);
    }, k = (S) => {
      S.preventDefault();
    }, C = (S, M) => {
      let {
        node: B
      } = M;
      var L, F;
      const {
        checkable: Q,
        checkedKeys: Z
      } = r;
      Q && ut(B) || ((L = l.onSelect) === null || L === void 0 || L.call(l, B.key, {
        selected: !Z.includes(B.key)
      }), o.multiple || (F = o.toggleOpen) === null || F === void 0 || F.call(o, !1));
    }, I = Pe(null), T = N(() => r.keyEntities[I.value]), $ = (S) => {
      I.value = S;
    };
    return a({
      scrollTo: function() {
        for (var S, M, B = arguments.length, L = new Array(B), F = 0; F < B; F++)
          L[F] = arguments[F];
        return (M = (S = s.value) === null || S === void 0 ? void 0 : S.scrollTo) === null || M === void 0 ? void 0 : M.call(S, ...L);
      },
      onKeydown: (S) => {
        var M;
        const {
          which: B
        } = S;
        switch (B) {
          case be.UP:
          case be.DOWN:
          case be.LEFT:
          case be.RIGHT:
            (M = s.value) === null || M === void 0 || M.onKeydown(S);
            break;
          case be.ENTER: {
            if (T.value) {
              const {
                selectable: L,
                value: F
              } = T.value.node || {};
              L !== !1 && C(null, {
                node: {
                  key: I.value
                },
                selected: !r.checkedKeys.includes(F)
              });
            }
            break;
          }
          case be.ESC:
            o.toggleOpen(!1);
        }
      },
      onKeyup: () => {
      }
    }), () => {
      var S;
      const {
        prefixCls: M,
        multiple: B,
        searchValue: L,
        open: F,
        notFoundContent: Q = (S = n.notFoundContent) === null || S === void 0 ? void 0 : S.call(n)
      } = o, {
        listHeight: Z,
        listItemHeight: ae,
        virtual: oe,
        dropdownMatchSelectWidth: fe,
        treeExpandAction: ce
      } = l, {
        checkable: ge,
        treeDefaultExpandAll: de,
        treeIcon: J,
        showTreeIcon: ue,
        switcherIcon: ee,
        treeLine: le,
        loadData: se,
        treeLoadedKeys: he,
        treeMotion: z,
        onTreeLoad: ne,
        checkedKeys: ve
      } = r;
      if (u.value.length === 0)
        return _("div", {
          role: "listbox",
          class: `${M}-empty`,
          onMousedown: k
        }, [Q]);
      const Se = {
        fieldNames: l.fieldNames
      };
      return he && (Se.loadedKeys = he), x.value && (Se.expandedKeys = x.value), _("div", {
        onMousedown: k
      }, [T.value && F && _("span", {
        style: uo,
        "aria-live": "assertive"
      }, [T.value.node.value]), _(Wa, re(re({
        ref: s,
        focusable: !1,
        prefixCls: `${M}-tree`,
        treeData: u.value,
        height: Z,
        itemHeight: ae,
        virtual: oe !== !1 && fe !== !1,
        multiple: B,
        icon: J,
        showIcon: ue,
        switcherIcon: ee,
        showLine: le,
        loadData: L ? null : se,
        motion: z,
        activeKey: I.value,
        checkable: ge,
        checkStrictly: !0,
        checkedKeys: i.value,
        selectedKeys: ge ? [] : ve,
        defaultExpandAll: de
      }, Se), {}, {
        onActiveChange: $,
        onSelect: C,
        onCheck: C,
        onExpand: p,
        onLoad: ne,
        filterTreeNode: v,
        expandAction: ce
      }), w(w({}, n), {
        checkable: r.customSlots.treeCheckable
      }))]);
    };
  }
}), vo = "SHOW_ALL", vn = "SHOW_PARENT", Nt = "SHOW_CHILD";
function Gt(e, t, n, a) {
  const o = new Set(e);
  return t === Nt ? e.filter((r) => {
    const l = n[r];
    return !(l && l.children && l.children.some((s) => {
      let {
        node: u
      } = s;
      return o.has(u[a.value]);
    }) && l.children.every((s) => {
      let {
        node: u
      } = s;
      return ut(u) || o.has(u[a.value]);
    }));
  }) : t === vn ? e.filter((r) => {
    const l = n[r], s = l ? l.parent : null;
    return !(s && !ut(s.node) && o.has(s.key));
  }) : e;
}
const Ze = () => null;
Ze.inheritAttrs = !1;
Ze.displayName = "ATreeSelectNode";
Ze.isTreeSelectNode = !0;
var ho = function(e, t) {
  var n = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, a = Object.getOwnPropertySymbols(e); o < a.length; o++)
      t.indexOf(a[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[o]) && (n[a[o]] = e[a[o]]);
  return n;
};
function yo(e) {
  return e && e.type && e.type.isTreeSelectNode;
}
function po(e) {
  function t() {
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return Qt(n).map((a) => {
      var o, r, l;
      if (!yo(a))
        return ie(!a, "TreeSelect/TreeSelectNode can only accept TreeSelectNode as children."), null;
      const s = a.children || {}, u = a.key, i = {};
      for (const [B, L] of Object.entries(a.props))
        i[en(B)] = L;
      const {
        isLeaf: d,
        checkable: v,
        selectable: m,
        disabled: b,
        disableCheckbox: x
      } = i, p = {
        isLeaf: d || d === "" || void 0,
        checkable: v || v === "" || void 0,
        selectable: m || m === "" || void 0,
        disabled: b || b === "" || void 0,
        disableCheckbox: x || x === "" || void 0
      }, k = w(w({}, i), p), {
        title: C = (o = s.title) === null || o === void 0 ? void 0 : o.call(s, k),
        switcherIcon: I = (r = s.switcherIcon) === null || r === void 0 ? void 0 : r.call(s, k)
      } = i, T = ho(i, ["title", "switcherIcon"]), $ = (l = s.default) === null || l === void 0 ? void 0 : l.call(s), S = w(w(w({}, T), {
        title: C,
        switcherIcon: I,
        key: u,
        isLeaf: d
      }), p), M = t($);
      return M.length && (S.children = M), S;
    });
  }
  return t(e);
}
function vt(e) {
  if (!e)
    return e;
  const t = w({}, e);
  return "props" in t || Object.defineProperty(t, "props", {
    get() {
      return ie(!1, "New `vc-tree-select` not support return node instance as argument anymore. Please consider to remove `props` access."), t;
    }
  }), t;
}
function go(e, t, n, a, o, r) {
  let l = null, s = null;
  function u() {
    function i(d) {
      let v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "0", m = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
      return d.map((b, x) => {
        const p = `${v}-${x}`, k = b[r.value], C = n.includes(k), I = i(b[r.children] || [], p, C), T = _(Ze, b, {
          default: () => [I.map(($) => $.node)]
        });
        if (t === k && (l = T), C) {
          const $ = {
            pos: p,
            node: T,
            children: I
          };
          return m || s.push($), $;
        }
        return null;
      }).filter((b) => b);
    }
    s || (s = [], i(a), s.sort((d, v) => {
      let {
        node: {
          props: {
            value: m
          }
        }
      } = d, {
        node: {
          props: {
            value: b
          }
        }
      } = v;
      const x = n.indexOf(m), p = n.indexOf(b);
      return x - p;
    }));
  }
  Object.defineProperty(e, "triggerNode", {
    get() {
      return ie(!1, "`triggerNode` is deprecated. Please consider decoupling data with node."), u(), l;
    }
  }), Object.defineProperty(e, "allCheckedNodes", {
    get() {
      return ie(!1, "`allCheckedNodes` is deprecated. Please consider decoupling data with node."), u(), o ? s : s.map((i) => {
        let {
          node: d
        } = i;
        return d;
      });
    }
  });
}
function mo(e, t) {
  let {
    id: n,
    pId: a,
    rootPId: o
  } = t;
  const r = {}, l = [];
  return e.map((u) => {
    const i = w({}, u), d = i[n];
    return r[d] = i, i.key = i.key || d, i;
  }).forEach((u) => {
    const i = u[a], d = r[i];
    d && (d.children = d.children || [], d.children.push(u)), (i === o || !d && o === null) && l.push(u);
  }), l;
}
function bo(e, t, n) {
  const a = H();
  return we([n, e, t], () => {
    const o = n.value;
    e.value ? a.value = n.value ? mo(xe(e.value), w({
      id: "id",
      pId: "pId",
      rootPId: null
    }, o !== !0 ? o : {})) : xe(e.value).slice() : a.value = po(xe(t.value));
  }, {
    immediate: !0,
    deep: !0
  }), a;
}
const So = (e) => {
  const t = H({
    valueLabels: /* @__PURE__ */ new Map()
  }), n = H();
  return we(e, () => {
    n.value = xe(e.value);
  }, {
    immediate: !0
  }), [N(() => {
    const {
      valueLabels: o
    } = t.value, r = /* @__PURE__ */ new Map(), l = n.value.map((s) => {
      var u;
      const {
        value: i
      } = s, d = (u = s.label) !== null && u !== void 0 ? u : o.get(i);
      return r.set(i, d), w(w({}, s), {
        label: d
      });
    });
    return t.value.valueLabels = r, l;
  })];
}, Co = (e, t) => {
  const n = H(/* @__PURE__ */ new Map()), a = H({});
  return De(() => {
    const o = t.value, r = rn(e.value, {
      fieldNames: o,
      initWrapper: (l) => w(w({}, l), {
        valueEntities: /* @__PURE__ */ new Map()
      }),
      processEntity: (l, s) => {
        const u = l.node[o.value];
        if (process.env.NODE_ENV !== "production") {
          const i = l.node.key;
          ie(!ft(u), "TreeNode `value` is invalidate: undefined"), ie(!s.valueEntities.has(u), `Same \`value\` exist in the tree: ${u}`), ie(!i || String(i) === String(u), `\`key\` or \`value\` with TreeNode must be the same or you can remove one of them. key: ${i}, value: ${u}.`);
        }
        s.valueEntities.set(u, l);
      }
    });
    n.value = r.valueEntities, a.value = r.keyEntities;
  }), {
    valueEntities: n,
    keyEntities: a
  };
}, ko = (e, t, n, a, o, r) => {
  const l = H([]), s = H([]);
  return De(() => {
    let u = e.value.map((v) => {
      let {
        value: m
      } = v;
      return m;
    }), i = t.value.map((v) => {
      let {
        value: m
      } = v;
      return m;
    });
    const d = u.filter((v) => !a.value[v]);
    n.value && ({
      checkedKeys: u,
      halfCheckedKeys: i
    } = Xe(u, !0, a.value, o.value, r.value)), l.value = Array.from(/* @__PURE__ */ new Set([...d, ...u])), s.value = i;
  }), [l, s];
}, wo = (e, t, n) => {
  let {
    treeNodeFilterProp: a,
    filterTreeNode: o,
    fieldNames: r
  } = n;
  return N(() => {
    const {
      children: l
    } = r.value, s = t.value, u = a == null ? void 0 : a.value;
    if (!s || o.value === !1)
      return e.value;
    let i;
    if (typeof o.value == "function")
      i = o.value;
    else {
      const v = s.toUpperCase();
      i = (m, b) => {
        const x = b[u];
        return String(x).toUpperCase().includes(v);
      };
    }
    function d(v) {
      let m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      const b = [];
      for (let x = 0, p = v.length; x < p; x++) {
        const k = v[x], C = k[l], I = m || i(s, vt(k)), T = d(C || [], I);
        (I || T.length) && b.push(w(w({}, k), {
          [l]: T
        }));
      }
      return b;
    }
    return d(e.value);
  });
};
function xo(e) {
  const {
    searchPlaceholder: t,
    treeCheckStrictly: n,
    treeCheckable: a,
    labelInValue: o,
    value: r,
    multiple: l
  } = e;
  ie(!t, "`searchPlaceholder` has been removed, please use `placeholder` instead"), n && o === !1 && ie(!1, "`treeCheckStrictly` will force set `labelInValue` to `true`."), (o || n) && ie(un(r).every((s) => s && typeof s == "object" && "value" in s), "Invalid prop `value` supplied to `TreeSelect`. You should use { label: string, value: string | number } or [{ label: string, value: string | number }] instead."), n || l || a ? ie(!r || Array.isArray(r), "`value` should be an array when `TreeSelect` is checkable or multiple.") : ie(!Array.isArray(r), "`value` should not be array when `TreeSelect` is single mode.");
}
function hn() {
  return w(w({}, Ye(va(), ["mode"])), {
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
    treeIcon: me.any,
    showTreeIcon: {
      type: Boolean,
      default: void 0
    },
    switcherIcon: me.any,
    treeMotion: me.any,
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
    placeholder: me.any,
    maxTagPlaceholder: {
      type: Function
    },
    dropdownPopupAlign: me.any,
    customSlots: Object
  });
}
function Ko(e) {
  return !e || typeof e != "object";
}
const No = Ie({
  compatConfig: {
    MODE: 3
  },
  name: "TreeSelect",
  inheritAttrs: !1,
  props: gt(hn(), {
    treeNodeFilterProp: "value",
    autoClearSearchValue: !0,
    showCheckedStrategy: Nt,
    listHeight: 200,
    listItemHeight: 20,
    prefixCls: "vc-tree-select"
  }),
  setup(e, t) {
    let {
      attrs: n,
      expose: a,
      slots: o
    } = t;
    const r = da(Ge(e, "id")), l = N(() => e.treeCheckable && !e.treeCheckStrictly), s = N(() => e.treeCheckable || e.treeCheckStrictly), u = N(() => e.treeCheckStrictly || e.labelInValue), i = N(() => s.value || e.multiple);
    process.env.NODE_ENV !== "production" && De(() => {
      xo(e);
    });
    const d = N(() => ro(e.fieldNames)), [v, m] = Dt("", {
      value: N(() => e.searchValue !== void 0 ? e.searchValue : e.inputValue),
      postState: (D) => D || ""
    }), b = (D) => {
      var j;
      m(D), (j = e.onSearch) === null || j === void 0 || j.call(e, D);
    }, x = bo(Ge(e, "treeData"), Ge(e, "children"), Ge(e, "treeDataSimpleMode")), {
      keyEntities: p,
      valueEntities: k
    } = Co(x, d), C = (D) => {
      const j = [], U = [];
      return D.forEach((c) => {
        k.value.has(c) ? U.push(c) : j.push(c);
      }), {
        missingRawValues: j,
        existRawValues: U
      };
    }, I = wo(x, v, {
      fieldNames: d,
      treeNodeFilterProp: Ge(e, "treeNodeFilterProp"),
      filterTreeNode: Ge(e, "filterTreeNode")
    }), T = (D) => {
      if (D) {
        if (e.treeNodeLabelProp)
          return D[e.treeNodeLabelProp];
        const {
          _title: j
        } = d.value;
        for (let U = 0; U < j.length; U += 1) {
          const c = D[j[U]];
          if (c !== void 0)
            return c;
        }
      }
    }, $ = (D) => un(D).map((U) => Ko(U) ? {
      value: U
    } : U), S = (D) => $(D).map((U) => {
      let {
        label: c
      } = U;
      const {
        value: y,
        halfChecked: O
      } = U;
      let V;
      const G = k.value.get(y);
      return G && (c = c ?? T(G.node), V = G.node.disabled), {
        label: c,
        value: y,
        halfChecked: O,
        disabled: V
      };
    }), [M, B] = Dt(e.defaultValue, {
      value: Ge(e, "value")
    }), L = N(() => $(M.value)), F = H([]), Q = H([]);
    De(() => {
      const D = [], j = [];
      L.value.forEach((U) => {
        U.halfChecked ? j.push(U) : D.push(U);
      }), F.value = D, Q.value = j;
    });
    const Z = N(() => F.value.map((D) => D.value)), {
      maxLevel: ae,
      levelEntities: oe
    } = cn(p), [fe, ce] = ko(F, Q, l, p, ae, oe), ge = N(() => {
      const U = Gt(fe.value, e.showCheckedStrategy, p.value, d.value).map((O) => {
        var V, G, te;
        return (te = (G = (V = p.value[O]) === null || V === void 0 ? void 0 : V.node) === null || G === void 0 ? void 0 : G[d.value.value]) !== null && te !== void 0 ? te : O;
      }).map((O) => {
        const V = F.value.find((G) => G.value === O);
        return {
          value: O,
          label: V == null ? void 0 : V.label
        };
      }), c = S(U), y = c[0];
      return !i.value && y && ft(y.value) && ft(y.label) ? [] : c.map((O) => {
        var V;
        return w(w({}, O), {
          label: (V = O.label) !== null && V !== void 0 ? V : O.value
        });
      });
    }), [de] = So(ge), J = (D, j, U) => {
      const c = S(D);
      if (B(c), e.autoClearSearchValue && m(""), e.onChange) {
        let y = D;
        l.value && (y = Gt(D, e.showCheckedStrategy, p.value, d.value).map((A) => {
          const P = k.value.get(A);
          return P ? P.node[d.value.value] : A;
        }));
        const {
          triggerValue: O,
          selected: V
        } = j || {
          triggerValue: void 0,
          selected: void 0
        };
        let G = y;
        if (e.treeCheckStrictly) {
          const K = Q.value.filter((A) => !y.includes(A.value));
          G = [...G, ...K];
        }
        const te = S(G), f = {
          // [Legacy] Always return as array contains label & value
          preValue: F.value,
          triggerValue: O
        };
        let h = !0;
        (e.treeCheckStrictly || U === "selection" && !V) && (h = !1), go(f, O, D, x.value, h, d.value), s.value ? f.checked = V : f.selected = V;
        const g = u.value ? te : te.map((K) => K.value);
        e.onChange(i.value ? g : g[0], u.value ? null : te.map((K) => K.label), f);
      }
    }, ue = (D, j) => {
      let {
        selected: U,
        source: c
      } = j;
      var y, O, V;
      const G = xe(p.value), te = xe(k.value), f = G[D], h = f == null ? void 0 : f.node, g = (y = h == null ? void 0 : h[d.value.value]) !== null && y !== void 0 ? y : D;
      if (!i.value)
        J([g], {
          selected: !0,
          triggerValue: g
        }, "option");
      else {
        let K = U ? [...Z.value, g] : fe.value.filter((A) => A !== g);
        if (l.value) {
          const {
            missingRawValues: A,
            existRawValues: P
          } = C(K), E = P.map((q) => te.get(q).key);
          let R;
          U ? {
            checkedKeys: R
          } = Xe(E, !0, G, ae.value, oe.value) : {
            checkedKeys: R
          } = Xe(E, {
            checked: !1,
            halfCheckedKeys: ce.value
          }, G, ae.value, oe.value), K = [...A, ...R.map((q) => G[q].node[d.value.value])];
        }
        J(K, {
          selected: U,
          triggerValue: g
        }, c || "option");
      }
      U || !i.value ? (O = e.onSelect) === null || O === void 0 || O.call(e, g, vt(h)) : (V = e.onDeselect) === null || V === void 0 || V.call(e, g, vt(h));
    }, ee = (D) => {
      if (e.onDropdownVisibleChange) {
        const j = {};
        Object.defineProperty(j, "documentClickClose", {
          get() {
            return ie(!1, "Second param of `onDropdownVisibleChange` has been removed."), !1;
          }
        }), e.onDropdownVisibleChange(D, j);
      }
    }, le = (D, j) => {
      const U = D.map((c) => c.value);
      if (j.type === "clear") {
        J(U, {}, "selection");
        return;
      }
      j.values.length && ue(j.values[0].value, {
        selected: !1,
        source: "selection"
      });
    }, {
      treeNodeFilterProp: se,
      // Data
      loadData: he,
      treeLoadedKeys: z,
      onTreeLoad: ne,
      // Expanded
      treeDefaultExpandAll: ve,
      treeExpandedKeys: Se,
      treeDefaultExpandedKeys: je,
      onTreeExpand: Be,
      // Options
      virtual: He,
      listHeight: Re,
      listItemHeight: $e,
      // Tree
      treeLine: Le,
      treeIcon: We,
      showTreeIcon: Ae,
      switcherIcon: _e,
      treeMotion: Fe,
      customSlots: ze,
      dropdownMatchSelectWidth: Ke,
      treeExpandAction: Ue
    } = Vn(e);
    ua(Ot({
      checkable: s,
      loadData: he,
      treeLoadedKeys: z,
      onTreeLoad: ne,
      checkedKeys: fe,
      halfCheckedKeys: ce,
      treeDefaultExpandAll: ve,
      treeExpandedKeys: Se,
      treeDefaultExpandedKeys: je,
      onTreeExpand: Be,
      treeIcon: We,
      treeMotion: Fe,
      showTreeIcon: Ae,
      switcherIcon: _e,
      treeLine: Le,
      treeNodeFilterProp: se,
      keyEntities: p,
      customSlots: ze
    })), so(Ot({
      virtual: He,
      listHeight: Re,
      listItemHeight: $e,
      treeData: I,
      fieldNames: d,
      onSelect: ue,
      dropdownMatchSelectWidth: Ke,
      treeExpandAction: Ue
    }));
    const Ne = Pe();
    return a({
      focus() {
        var D;
        (D = Ne.value) === null || D === void 0 || D.focus();
      },
      blur() {
        var D;
        (D = Ne.value) === null || D === void 0 || D.blur();
      },
      scrollTo(D) {
        var j;
        (j = Ne.value) === null || j === void 0 || j.scrollTo(D);
      }
    }), () => {
      var D;
      const j = Ye(e, [
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
      return _(fa, re(re(re({
        ref: Ne
      }, n), j), {}, {
        id: r,
        prefixCls: e.prefixCls,
        mode: i.value ? "multiple" : void 0,
        displayValues: de.value,
        onDisplayValuesChange: le,
        searchValue: v.value,
        onSearch: b,
        OptionList: fo,
        emptyOptions: !x.value.length,
        onDropdownVisibleChange: ee,
        tagRender: e.tagRender || o.tagRender,
        dropdownMatchSelectWidth: (D = e.dropdownMatchSelectWidth) !== null && D !== void 0 ? D : !0
      }), o);
    };
  }
}), Eo = (e) => {
  const {
    componentCls: t,
    treePrefixCls: n,
    colorBgElevated: a
  } = e, o = `.${n}`;
  return [
    // ======================================================
    // ==                     Dropdown                     ==
    // ======================================================
    {
      [`${t}-dropdown`]: [
        {
          padding: `${e.paddingXS}px ${e.paddingXS / 2}px`
        },
        // ====================== Tree ======================
        lo(n, mt(e, {
          colorBgContainer: a
        })),
        {
          [o]: {
            borderRadius: 0,
            "&-list-holder-inner": {
              alignItems: "stretch",
              [`${o}-treenode`]: {
                [`${o}-node-content-wrapper`]: {
                  flex: "auto"
                }
              }
            }
          }
        },
        // ==================== Checkbox ====================
        ma(`${n}-checkbox`, e),
        // ====================== RTL =======================
        {
          "&-rtl": {
            direction: "rtl",
            [`${o}-switcher${o}-switcher_close`]: {
              [`${o}-switcher-icon svg`]: {
                transform: "rotate(90deg)"
              }
            }
          }
        }
      ]
    }
  ];
};
function Oo(e, t) {
  return Xn("TreeSelect", (n) => {
    const a = mt(n, {
      treePrefixCls: t.value
    });
    return [Eo(a)];
  })(e);
}
const qt = (e, t, n) => n !== void 0 ? n : `${e}-${t}`;
function Do() {
  return w(w({}, Ye(hn(), ["showTreeIcon", "treeMotion", "inputIcon", "getInputElement", "treeLine", "customSlots"])), {
    suffixIcon: me.any,
    size: rt(),
    bordered: aa(),
    treeLine: oa([Boolean, Object]),
    replaceFields: la(),
    placement: rt(),
    status: rt(),
    popupClassName: String,
    /** @deprecated Please use `popupClassName` instead */
    dropdownClassName: String,
    "onUpdate:value": it(),
    "onUpdate:treeExpandedKeys": it(),
    "onUpdate:searchValue": it()
  });
}
const ct = Ie({
  compatConfig: {
    MODE: 3
  },
  name: "ATreeSelect",
  inheritAttrs: !1,
  props: gt(Do(), {
    choiceTransitionName: "",
    listHeight: 256,
    treeIcon: !1,
    listItemHeight: 26,
    bordered: !0
  }),
  slots: Object,
  setup(e, t) {
    let {
      attrs: n,
      slots: a,
      expose: o,
      emit: r
    } = t;
    ie(!(e.treeData === void 0 && a.default), "`children` of TreeSelect is deprecated. Please use `treeData` instead."), lt(e.multiple !== !1 || !e.treeCheckable, "TreeSelect", "`multiple` will always be `true` when `treeCheckable` is true"), lt(e.replaceFields === void 0, "TreeSelect", "`replaceFields` is deprecated, please use fieldNames instead"), lt(!e.dropdownClassName, "TreeSelect", "`dropdownClassName` is deprecated. Please use `popupClassName` instead.");
    const l = Yn(), s = Zn.useInject(), u = N(() => pa(s.status, e.status)), {
      prefixCls: i,
      renderEmpty: d,
      direction: v,
      virtual: m,
      dropdownMatchSelectWidth: b,
      size: x,
      getPopupContainer: p,
      getPrefixCls: k,
      disabled: C
    } = Jn("select", e), {
      compactSize: I,
      compactItemClassnames: T
    } = Qn(i, v), $ = N(() => I.value || x.value), S = ea(), M = N(() => {
      var z;
      return (z = C.value) !== null && z !== void 0 ? z : S.value;
    }), B = N(() => k()), L = N(() => e.placement !== void 0 ? e.placement : v.value === "rtl" ? "bottomRight" : "bottomLeft"), F = N(() => qt(B.value, ta(L.value), e.transitionName)), Q = N(() => qt(B.value, "", e.choiceTransitionName)), Z = N(() => k("select-tree", e.prefixCls)), ae = N(() => k("tree-select", e.prefixCls)), [oe, fe] = ha(i), [ce] = Oo(ae, Z), ge = N(() => Oe(e.popupClassName || e.dropdownClassName, `${ae.value}-dropdown`, {
      [`${ae.value}-dropdown-rtl`]: v.value === "rtl"
    }, fe.value)), de = N(() => !!(e.treeCheckable || e.multiple)), J = N(() => e.showArrow !== void 0 ? e.showArrow : e.loading || !de.value), ue = Pe();
    o({
      focus() {
        var z, ne;
        (ne = (z = ue.value).focus) === null || ne === void 0 || ne.call(z);
      },
      blur() {
        var z, ne;
        (ne = (z = ue.value).blur) === null || ne === void 0 || ne.call(z);
      }
    });
    const ee = function() {
      for (var z = arguments.length, ne = new Array(z), ve = 0; ve < z; ve++)
        ne[ve] = arguments[ve];
      r("update:value", ne[0]), r("change", ...ne), l.onFieldChange();
    }, le = (z) => {
      r("update:treeExpandedKeys", z), r("treeExpand", z);
    }, se = (z) => {
      r("update:searchValue", z), r("search", z);
    }, he = (z) => {
      r("blur", z), l.onFieldBlur();
    };
    return () => {
      var z, ne;
      const {
        notFoundContent: ve = (z = a.notFoundContent) === null || z === void 0 ? void 0 : z.call(a),
        prefixCls: Se,
        bordered: je,
        listHeight: Be,
        listItemHeight: He,
        multiple: Re,
        treeIcon: $e,
        treeLine: Le,
        showArrow: We,
        switcherIcon: Ae = (ne = a.switcherIcon) === null || ne === void 0 ? void 0 : ne.call(a),
        fieldNames: _e = e.replaceFields,
        id: Fe = l.id.value
      } = e, {
        isFormItemInput: ze,
        hasFeedback: Ke,
        feedbackIcon: Ue
      } = s, {
        suffixIcon: Ne,
        removeIcon: D,
        clearIcon: j
      } = ya(w(w({}, e), {
        multiple: de.value,
        showArrow: J.value,
        hasFeedback: Ke,
        feedbackIcon: Ue,
        prefixCls: i.value
      }), a);
      let U;
      ve !== void 0 ? U = ve : U = d("Select");
      const c = Ye(e, ["suffixIcon", "itemIcon", "removeIcon", "clearIcon", "switcherIcon", "bordered", "status", "onUpdate:value", "onUpdate:treeExpandedKeys", "onUpdate:searchValue"]), y = Oe(!Se && ae.value, {
        [`${i.value}-lg`]: $.value === "large",
        [`${i.value}-sm`]: $.value === "small",
        [`${i.value}-rtl`]: v.value === "rtl",
        [`${i.value}-borderless`]: !je,
        [`${i.value}-in-form-item`]: ze
      }, ga(i.value, u.value, Ke), T.value, n.class, fe.value), O = {};
      return e.treeData === void 0 && a.default && (O.children = na(a.default())), oe(ce(_(No, re(re(re(re({}, n), c), {}, {
        disabled: M.value,
        virtual: m.value,
        dropdownMatchSelectWidth: b.value,
        id: Fe,
        fieldNames: _e,
        ref: ue,
        prefixCls: i.value,
        class: y,
        listHeight: Be,
        listItemHeight: He,
        treeLine: !!Le,
        inputIcon: Ne,
        multiple: Re,
        removeIcon: D,
        clearIcon: j,
        switcherIcon: (V) => Qa(Z.value, Ae, V, a.leafIcon, Le),
        showTreeIcon: $e,
        notFoundContent: U,
        getPopupContainer: p == null ? void 0 : p.value,
        treeMotion: null,
        dropdownClassName: ge.value,
        choiceTransitionName: Q.value,
        onChange: ee,
        onBlur: he,
        onSearch: se,
        onTreeExpand: le
      }, O), {}, {
        transitionName: F.value,
        customSlots: w(w({}, a), {
          treeCheckable: () => _("span", {
            class: `${i.value}-tree-checkbox-inner`
          }, null)
        }),
        maxTagPlaceholder: e.maxTagPlaceholder || a.maxTagPlaceholder,
        placement: L.value,
        showArrow: Ke || We
      }), w(w({}, a), {
        treeCheckable: () => _("span", {
          class: `${i.value}-tree-checkbox-inner`
        }, null)
      }))));
    };
  }
}), Xt = Ze, Po = w(ct, {
  TreeNode: Ze,
  SHOW_ALL: vo,
  SHOW_PARENT: vn,
  SHOW_CHILD: Nt,
  install: (e) => (e.component(ct.name, ct), e.component(Xt.displayName, Xt), e)
}), Mo = /* @__PURE__ */ Ie({
  __name: "AsyncTreeSelect",
  props: {
    value: {},
    treeData: { type: [Array, Function] }
  },
  setup(e, { emit: t }) {
    const n = e, a = t, o = Pe([]), r = N({
      get() {
        return n.value;
      },
      set(u) {
        a("update:value", u);
      }
    }), l = Pe(!1);
    return (async () => {
      l.value = !0;
      try {
        if (!n.treeData) {
          console.error("options must not be empty");
          return;
        }
        if (n.treeData instanceof Function) {
          const u = await n.treeData();
          o.value = u || [];
        } else {
          if (n.treeData && !Array.isArray(n.treeData)) {
            console.error(
              "options must be an array or a function that returns an array"
            );
            return;
          }
          o.value = n.treeData || [];
        }
      } catch (u) {
        console.error(u);
      }
      l.value = !1, r.value = n.value;
    })(), (u, i) => (Mn(), jn(Bn(Po), Hn({
      value: r.value,
      onChange: i[0] || (i[0] = (d) => r.value = d),
      loading: l.value,
      treeData: o.value
    }, u.$attrs), null, 16, ["value", "loading", "treeData"]));
  }
});
export {
  Mo as default
};
