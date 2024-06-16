import { P as Ke, a2 as xe, _ as O, b as ae, c as ge, J as on, ai as an, aj as ln, ak as rn, i as sn, I as He, L as dn, O as cn, m as un, r as fn, a as ct, K as vn, g as yn, al as hn } from "./styleChecker-DdDg1L8e.js";
import { shallowRef as H, watchEffect as me, defineComponent as Pe, provide as $t, computed as P, inject as Pt, createVNode as N, getCurrentInstance as gn, reactive as Dt, onMounted as Tt, onUpdated as pn, ref as je, watch as ke, nextTick as It, onBeforeUnmount as bn, Transition as mn, withDirectives as Kn, vShow as kn, Fragment as xn, toRaw as ut, onUnmounted as Sn, cloneVNode as wn } from "vue";
import { o as Lt } from "./omit-CH0b8HlL.js";
import { L as Cn } from "./index-CelQK0t5.js";
import { p as Mt } from "./CheckOutlined-glN3v3hv.js";
import { K as Oe } from "./KeyCode-n3eOOGSl.js";
import { g as On } from "./index-BKZP0TvE.js";
function de(e) {
  const t = H();
  return me(() => {
    t.value = e();
  }, {
    flush: "sync"
    // needed so updates are immediate.
  }), t;
}
const At = Symbol("TreeContextKey"), En = Pe({
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
    return $t(At, P(() => e.value)), () => {
      var o;
      return (o = n.default) === null || o === void 0 ? void 0 : o.call(n);
    };
  }
}), ot = () => Pt(At, P(() => ({}))), _t = Symbol("KeysStateKey"), Nn = (e) => {
  $t(_t, e);
}, jt = () => Pt(_t, {
  expandedKeys: H([]),
  selectedKeys: H([]),
  loadedKeys: H([]),
  loadingKeys: H([]),
  checkedKeys: H([]),
  halfCheckedKeys: H([]),
  expandedKeysSet: P(() => /* @__PURE__ */ new Set()),
  selectedKeysSet: P(() => /* @__PURE__ */ new Set()),
  loadedKeysSet: P(() => /* @__PURE__ */ new Set()),
  loadingKeysSet: P(() => /* @__PURE__ */ new Set()),
  checkedKeysSet: P(() => /* @__PURE__ */ new Set()),
  halfCheckedKeysSet: P(() => /* @__PURE__ */ new Set()),
  flattenNodes: H([])
}), $n = (e) => {
  let {
    prefixCls: t,
    level: n,
    isStart: o,
    isEnd: a
  } = e;
  const s = `${t}-indent-unit`, l = [];
  for (let y = 0; y < n; y += 1)
    l.push(N("span", {
      key: y,
      class: {
        [s]: !0,
        [`${s}-start`]: o[y],
        [`${s}-end`]: a[y]
      }
    }, null));
  return N("span", {
    "aria-hidden": "true",
    class: `${t}-indent`
  }, [l]);
}, Ft = {
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
  title: Ke.any,
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
  icon: Ke.any,
  switcherIcon: Ke.any,
  domRef: {
    type: Function
  }
}, Pn = {
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
}, Dn = () => ({
  prefixCls: String,
  focusable: {
    type: Boolean,
    default: void 0
  },
  activeKey: [Number, String],
  tabindex: Number,
  children: Ke.any,
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
  icon: Ke.any,
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
  motion: Ke.any,
  switcherIcon: Ke.any,
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
var Tn = function(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, o = Object.getOwnPropertySymbols(e); a < o.length; a++)
      t.indexOf(o[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[a]) && (n[o[a]] = e[o[a]]);
  return n;
};
const ft = "open", vt = "close", In = "---", yt = Pe({
  compatConfig: {
    MODE: 3
  },
  name: "ATreeNode",
  inheritAttrs: !1,
  props: Ft,
  isTreeNode: 1,
  setup(e, t) {
    let {
      attrs: n,
      slots: o,
      expose: a
    } = t;
    xe(!("slots" in e.data), `treeData slots is deprecated, please use ${Object.keys(e.data.slots || {}).map((r) => "`v-slot:" + r + "` ")}instead`);
    const s = H(!1), l = ot(), {
      expandedKeysSet: y,
      selectedKeysSet: p,
      loadedKeysSet: v,
      loadingKeysSet: f,
      checkedKeysSet: h,
      halfCheckedKeysSet: b
    } = jt(), {
      dragOverNodeKey: m,
      dropPosition: C,
      keyEntities: g
    } = l.value, S = P(() => Fe(e.eventKey, {
      expandedKeysSet: y.value,
      selectedKeysSet: p.value,
      loadedKeysSet: v.value,
      loadingKeysSet: f.value,
      checkedKeysSet: h.value,
      halfCheckedKeysSet: b.value,
      dragOverNodeKey: m,
      dropPosition: C,
      keyEntities: g
    })), K = de(() => S.value.expanded), A = de(() => S.value.selected), L = de(() => S.value.checked), D = de(() => S.value.loaded), T = de(() => S.value.loading), U = de(() => S.value.halfChecked), W = de(() => S.value.dragOver), F = de(() => S.value.dragOverGapTop), R = de(() => S.value.dragOverGapBottom), X = de(() => S.value.pos), V = H(), ne = P(() => {
      const {
        eventKey: r
      } = e, {
        keyEntities: c
      } = l.value, {
        children: _
      } = c[r] || {};
      return !!(_ || []).length;
    }), Q = P(() => {
      const {
        isLeaf: r
      } = e, {
        loadData: c
      } = l.value, _ = ne.value;
      return r === !1 ? !1 : r || !c && !_ || c && D.value && !_;
    }), ve = P(() => Q.value ? null : K.value ? ft : vt), le = P(() => {
      const {
        disabled: r
      } = e, {
        disabled: c
      } = l.value;
      return !!(c || r);
    }), we = P(() => {
      const {
        checkable: r
      } = e, {
        checkable: c
      } = l.value;
      return !c || r === !1 ? !1 : c;
    }), re = P(() => {
      const {
        selectable: r
      } = e, {
        selectable: c
      } = l.value;
      return typeof r == "boolean" ? r : c;
    }), z = P(() => {
      const {
        data: r,
        active: c,
        checkable: _,
        disableCheckbox: G,
        disabled: Y,
        selectable: J
      } = e;
      return O(O({
        active: c,
        checkable: _,
        disableCheckbox: G,
        disabled: Y,
        selectable: J
      }, r), {
        dataRef: r,
        data: r,
        isLeaf: Q.value,
        checked: L.value,
        expanded: K.value,
        loading: T.value,
        selected: A.value,
        halfChecked: U.value
      });
    }), ce = gn(), q = P(() => {
      const {
        eventKey: r
      } = e, {
        keyEntities: c
      } = l.value, {
        parent: _
      } = c[r] || {};
      return O(O({}, Be(O({}, e, S.value))), {
        parent: _
      });
    }), Z = Dt({
      eventData: q,
      eventKey: P(() => e.eventKey),
      selectHandle: V,
      pos: X,
      key: ce.vnode.key
    });
    a(Z);
    const oe = (r) => {
      const {
        onNodeDoubleClick: c
      } = l.value;
      c(r, q.value);
    }, ue = (r) => {
      if (le.value)
        return;
      const {
        onNodeSelect: c
      } = l.value;
      r.preventDefault(), c(r, q.value);
    }, pe = (r) => {
      if (le.value)
        return;
      const {
        disableCheckbox: c
      } = e, {
        onNodeCheck: _
      } = l.value;
      if (!we.value || c)
        return;
      r.preventDefault();
      const G = !L.value;
      _(r, q.value, G);
    }, Ce = (r) => {
      const {
        onNodeClick: c
      } = l.value;
      c(r, q.value), re.value ? ue(r) : pe(r);
    }, Ee = (r) => {
      const {
        onNodeMouseEnter: c
      } = l.value;
      c(r, q.value);
    }, Re = (r) => {
      const {
        onNodeMouseLeave: c
      } = l.value;
      c(r, q.value);
    }, ze = (r) => {
      const {
        onNodeContextMenu: c
      } = l.value;
      c(r, q.value);
    }, Ve = (r) => {
      const {
        onNodeDragStart: c
      } = l.value;
      r.stopPropagation(), s.value = !0, c(r, Z);
      try {
        r.dataTransfer.setData("text/plain", "");
      } catch {
      }
    }, qe = (r) => {
      const {
        onNodeDragEnter: c
      } = l.value;
      r.preventDefault(), r.stopPropagation(), c(r, Z);
    }, Ge = (r) => {
      const {
        onNodeDragOver: c
      } = l.value;
      r.preventDefault(), r.stopPropagation(), c(r, Z);
    }, Te = (r) => {
      const {
        onNodeDragLeave: c
      } = l.value;
      r.stopPropagation(), c(r, Z);
    }, We = (r) => {
      const {
        onNodeDragEnd: c
      } = l.value;
      r.stopPropagation(), s.value = !1, c(r, Z);
    }, Xe = (r) => {
      const {
        onNodeDrop: c
      } = l.value;
      r.preventDefault(), r.stopPropagation(), s.value = !1, c(r, Z);
    }, Ie = (r) => {
      const {
        onNodeExpand: c
      } = l.value;
      T.value || c(r, q.value);
    }, Le = () => {
      const {
        data: r
      } = e, {
        draggable: c
      } = l.value;
      return !!(c && (!c.nodeDraggable || c.nodeDraggable(r)));
    }, Me = () => {
      const {
        draggable: r,
        prefixCls: c
      } = l.value;
      return r && (r != null && r.icon) ? N("span", {
        class: `${c}-draggable-icon`
      }, [r.icon]) : null;
    }, Ue = () => {
      var r, c, _;
      const {
        switcherIcon: G = o.switcherIcon || ((r = l.value.slots) === null || r === void 0 ? void 0 : r[(_ = (c = e.data) === null || c === void 0 ? void 0 : c.slots) === null || _ === void 0 ? void 0 : _.switcherIcon])
      } = e, {
        switcherIcon: Y
      } = l.value, J = G || Y;
      return typeof J == "function" ? J(z.value) : J;
    }, Ae = () => {
      const {
        loadData: r,
        onNodeLoad: c
      } = l.value;
      T.value || r && K.value && !Q.value && !ne.value && !D.value && c(q.value);
    };
    Tt(() => {
      Ae();
    }), pn(() => {
      Ae();
    });
    const Ye = () => {
      const {
        prefixCls: r
      } = l.value, c = Ue();
      if (Q.value)
        return c !== !1 ? N("span", {
          class: ge(`${r}-switcher`, `${r}-switcher-noop`)
        }, [c]) : null;
      const _ = ge(`${r}-switcher`, `${r}-switcher_${K.value ? ft : vt}`);
      return c !== !1 ? N("span", {
        onClick: Ie,
        class: _
      }, [c]) : null;
    }, Je = () => {
      var r, c;
      const {
        disableCheckbox: _
      } = e, {
        prefixCls: G
      } = l.value, Y = le.value;
      return we.value ? N("span", {
        class: ge(`${G}-checkbox`, L.value && `${G}-checkbox-checked`, !L.value && U.value && `${G}-checkbox-indeterminate`, (Y || _) && `${G}-checkbox-disabled`),
        onClick: pe
      }, [(c = (r = l.value).customCheckable) === null || c === void 0 ? void 0 : c.call(r)]) : null;
    }, _e = () => {
      const {
        prefixCls: r
      } = l.value;
      return N("span", {
        class: ge(`${r}-iconEle`, `${r}-icon__${ve.value || "docu"}`, T.value && `${r}-icon_loading`)
      }, null);
    }, be = () => {
      const {
        disabled: r,
        eventKey: c
      } = e, {
        draggable: _,
        dropLevelOffset: G,
        dropPosition: Y,
        prefixCls: J,
        indent: i,
        dropIndicatorRender: d,
        dragOverNodeKey: u,
        direction: x
      } = l.value;
      return !r && _ !== !1 && u === c ? d({
        dropPosition: Y,
        dropLevelOffset: G,
        indent: i,
        prefixCls: J,
        direction: x
      }) : null;
    }, Qe = () => {
      var r, c, _, G, Y, J;
      const {
        // title = slots.title ||
        //   context.value.slots?.[props.data?.slots?.title] ||
        //   context.value.slots?.title,
        // selected,
        icon: i = o.icon,
        // loading,
        data: d
      } = e, u = o.title || ((r = l.value.slots) === null || r === void 0 ? void 0 : r[(_ = (c = e.data) === null || c === void 0 ? void 0 : c.slots) === null || _ === void 0 ? void 0 : _.title]) || ((G = l.value.slots) === null || G === void 0 ? void 0 : G.title) || e.title, {
        prefixCls: x,
        showIcon: E,
        icon: w,
        loadData: k
        // slots: contextSlots,
      } = l.value, M = le.value, B = `${x}-node-content-wrapper`;
      let $;
      if (E) {
        const ee = i || ((Y = l.value.slots) === null || Y === void 0 ? void 0 : Y[(J = d == null ? void 0 : d.slots) === null || J === void 0 ? void 0 : J.icon]) || w;
        $ = ee ? N("span", {
          class: ge(`${x}-iconEle`, `${x}-icon__customize`)
        }, [typeof ee == "function" ? ee(z.value) : ee]) : _e();
      } else
        k && T.value && ($ = _e());
      let I;
      typeof u == "function" ? I = u(z.value) : I = u, I = I === void 0 ? In : I;
      const j = N("span", {
        class: `${x}-title`
      }, [I]);
      return N("span", {
        ref: V,
        title: typeof u == "string" ? u : "",
        class: ge(`${B}`, `${B}-${ve.value || "normal"}`, !M && (A.value || s.value) && `${x}-node-selected`),
        onMouseenter: Ee,
        onMouseleave: Re,
        onContextmenu: ze,
        onClick: Ce,
        onDblclick: oe
      }, [$, j, be()]);
    };
    return () => {
      const r = O(O({}, e), n), {
        eventKey: c,
        isLeaf: _,
        isStart: G,
        isEnd: Y,
        domRef: J,
        active: i,
        data: d,
        onMousemove: u,
        selectable: x
      } = r, E = Tn(r, ["eventKey", "isLeaf", "isStart", "isEnd", "domRef", "active", "data", "onMousemove", "selectable"]), {
        prefixCls: w,
        filterTreeNode: k,
        keyEntities: M,
        dropContainerKey: B,
        dropTargetKey: $,
        draggingNodeKey: I
      } = l.value, j = le.value, ee = Mt(E, {
        aria: !0,
        data: !0
      }), {
        level: ie
      } = M[c] || {}, se = Y[Y.length - 1], te = Le(), ye = !j && te, Ne = I === c, Ze = x !== void 0 ? {
        "aria-selected": !!x
      } : void 0;
      return N("div", ae(ae({
        ref: J,
        class: ge(n.class, `${w}-treenode`, {
          [`${w}-treenode-disabled`]: j,
          [`${w}-treenode-switcher-${K.value ? "open" : "close"}`]: !_,
          [`${w}-treenode-checkbox-checked`]: L.value,
          [`${w}-treenode-checkbox-indeterminate`]: U.value,
          [`${w}-treenode-selected`]: A.value,
          [`${w}-treenode-loading`]: T.value,
          [`${w}-treenode-active`]: i,
          [`${w}-treenode-leaf-last`]: se,
          [`${w}-treenode-draggable`]: ye,
          dragging: Ne,
          "drop-target": $ === c,
          "drop-container": B === c,
          "drag-over": !j && W.value,
          "drag-over-gap-top": !j && F.value,
          "drag-over-gap-bottom": !j && R.value,
          "filter-node": k && k(q.value)
        }),
        style: n.style,
        draggable: ye,
        "aria-grabbed": Ne,
        onDragstart: ye ? Ve : void 0,
        onDragenter: te ? qe : void 0,
        onDragover: te ? Ge : void 0,
        onDragleave: te ? Te : void 0,
        onDrop: te ? Xe : void 0,
        onDragend: te ? We : void 0,
        onMousemove: u
      }, Ze), ee), [N($n, {
        prefixCls: w,
        level: ie,
        isStart: G,
        isEnd: Y
      }, null), Me(), Ye(), Je(), Qe()]);
    };
  }
});
function fe(e, t) {
  if (!e)
    return [];
  const n = e.slice(), o = n.indexOf(t);
  return o >= 0 && n.splice(o, 1), n;
}
function he(e, t) {
  const n = (e || []).slice();
  return n.indexOf(t) === -1 && n.push(t), n;
}
function at(e) {
  return e.split("-");
}
function Bt(e, t) {
  return `${e}-${t}`;
}
function Ln(e) {
  return e && e.type && e.type.isTreeNode;
}
function Mn(e, t) {
  const n = [], o = t[e];
  function a() {
    (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []).forEach((l) => {
      let {
        key: y,
        children: p
      } = l;
      n.push(y), a(p);
    });
  }
  return a(o.children), n;
}
function An(e) {
  if (e.parent) {
    const t = at(e.pos);
    return Number(t[t.length - 1]) === e.parent.children.length - 1;
  }
  return !1;
}
function _n(e) {
  const t = at(e.pos);
  return Number(t[t.length - 1]) === 0;
}
function ht(e, t, n, o, a, s, l, y, p, v) {
  var f;
  const {
    clientX: h,
    clientY: b
  } = e, {
    top: m,
    height: C
  } = e.target.getBoundingClientRect(), S = ((v === "rtl" ? -1 : 1) * (((a == null ? void 0 : a.x) || 0) - h) - 12) / o;
  let K = y[n.eventKey];
  if (b < m + C / 2) {
    const X = l.findIndex((Q) => Q.key === K.key), V = X <= 0 ? 0 : X - 1, ne = l[V].key;
    K = y[ne];
  }
  const A = K.key, L = K, D = K.key;
  let T = 0, U = 0;
  if (!p.has(A))
    for (let X = 0; X < S && An(K); X += 1)
      K = K.parent, U += 1;
  const W = t.eventData, F = K.node;
  let R = !0;
  return _n(K) && K.level === 0 && b < m + C / 2 && s({
    dragNode: W,
    dropNode: F,
    dropPosition: -1
  }) && K.key === n.eventKey ? T = -1 : (L.children || []).length && p.has(D) ? s({
    dragNode: W,
    dropNode: F,
    dropPosition: 0
  }) ? T = 0 : R = !1 : U === 0 ? S > -1.5 ? s({
    dragNode: W,
    dropNode: F,
    dropPosition: 1
  }) ? T = 1 : R = !1 : s({
    dragNode: W,
    dropNode: F,
    dropPosition: 0
  }) ? T = 0 : s({
    dragNode: W,
    dropNode: F,
    dropPosition: 1
  }) ? T = 1 : R = !1 : s({
    dragNode: W,
    dropNode: F,
    dropPosition: 1
  }) ? T = 1 : R = !1, {
    dropPosition: T,
    dropLevelOffset: U,
    dropTargetKey: K.key,
    dropTargetPos: K.pos,
    dragOverNodeKey: D,
    dropContainerKey: T === 0 ? null : ((f = K.parent) === null || f === void 0 ? void 0 : f.key) || null,
    dropAllowed: R
  };
}
function gt(e, t) {
  if (!e)
    return;
  const {
    multiple: n
  } = t;
  return n ? e.slice() : e.length ? [e[0]] : e;
}
function et(e) {
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
    return xe(!1, "`checkedKeys` is not an array or an object"), null;
  return t;
}
function pt(e, t) {
  const n = /* @__PURE__ */ new Set();
  function o(a) {
    if (n.has(a))
      return;
    const s = t[a];
    if (!s)
      return;
    n.add(a);
    const {
      parent: l,
      node: y
    } = s;
    y.disabled || l && o(l.key);
  }
  return (e || []).forEach((a) => {
    o(a);
  }), [...n];
}
var jn = function(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, o = Object.getOwnPropertySymbols(e); a < o.length; a++)
      t.indexOf(o[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[a]) && (n[o[a]] = e[o[a]]);
  return n;
};
function De(e, t) {
  return e ?? t;
}
function lt(e) {
  const {
    title: t,
    _title: n,
    key: o,
    children: a
  } = e || {}, s = t || "title";
  return {
    title: s,
    _title: n || [s],
    key: o || "key",
    children: a || "children"
  };
}
function Fn(e) {
  function t() {
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return on(n).map((a) => {
      var s, l, y, p;
      if (!Ln(a))
        return xe(!a, "Tree/TreeNode can only accept TreeNode as children."), null;
      const v = a.children || {}, f = a.key, h = {};
      for (const [X, V] of Object.entries(a.props))
        h[an(X)] = V;
      const {
        isLeaf: b,
        checkable: m,
        selectable: C,
        disabled: g,
        disableCheckbox: S
      } = h, K = {
        isLeaf: b || b === "" || void 0,
        checkable: m || m === "" || void 0,
        selectable: C || C === "" || void 0,
        disabled: g || g === "" || void 0,
        disableCheckbox: S || S === "" || void 0
      }, A = O(O({}, h), K), {
        title: L = (s = v.title) === null || s === void 0 ? void 0 : s.call(v, A),
        icon: D = (l = v.icon) === null || l === void 0 ? void 0 : l.call(v, A),
        switcherIcon: T = (y = v.switcherIcon) === null || y === void 0 ? void 0 : y.call(v, A)
      } = h, U = jn(h, ["title", "icon", "switcherIcon"]), W = (p = v.default) === null || p === void 0 ? void 0 : p.call(v), F = O(O(O({}, U), {
        title: L,
        icon: D,
        switcherIcon: T,
        key: f,
        isLeaf: b
      }), K), R = t(W);
      return R.length && (F.children = R), F;
    });
  }
  return t(e);
}
function Bn(e, t, n) {
  const {
    _title: o,
    key: a,
    children: s
  } = lt(n), l = new Set(t === !0 ? [] : t), y = [];
  function p(v) {
    let f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    return v.map((h, b) => {
      const m = Bt(f ? f.pos : "0", b), C = De(h[a], m);
      let g;
      for (let K = 0; K < o.length; K += 1) {
        const A = o[K];
        if (h[A] !== void 0) {
          g = h[A];
          break;
        }
      }
      const S = O(O({}, Lt(h, [...o, a, s])), {
        title: g,
        key: C,
        parent: f,
        pos: m,
        children: null,
        data: h,
        isStart: [...f ? f.isStart : [], b === 0],
        isEnd: [...f ? f.isEnd : [], b === v.length - 1]
      });
      return y.push(S), t === !0 || l.has(C) ? S.children = p(h[s] || [], S) : S.children = [], S;
    });
  }
  return p(e), y;
}
function Hn(e, t, n) {
  let o = {};
  typeof n == "object" ? o = n : o = {
    externalGetKey: n
  }, o = o || {};
  const {
    childrenPropName: a,
    externalGetKey: s,
    fieldNames: l
  } = o, {
    key: y,
    children: p
  } = lt(l), v = a || p;
  let f;
  s ? typeof s == "string" ? f = (b) => b[s] : typeof s == "function" && (f = (b) => s(b)) : f = (b, m) => De(b[y], m);
  function h(b, m, C, g) {
    const S = b ? b[v] : e, K = b ? Bt(C.pos, m) : "0", A = b ? [...g, b] : [];
    if (b) {
      const L = f(b, K), D = {
        node: b,
        index: m,
        pos: K,
        key: L,
        parentPos: C.node ? C.pos : null,
        level: C.level + 1,
        nodes: A
      };
      t(D);
    }
    S && S.forEach((L, D) => {
      h(L, D, {
        node: b,
        pos: K,
        level: C ? C.level + 1 : -1
      }, A);
    });
  }
  h(null);
}
function Rn(e) {
  let {
    initWrapper: t,
    processEntity: n,
    onProcessFinished: o,
    externalGetKey: a,
    childrenPropName: s,
    fieldNames: l
  } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, y = arguments.length > 2 ? arguments[2] : void 0;
  const p = a || y, v = {}, f = {};
  let h = {
    posEntities: v,
    keyEntities: f
  };
  return t && (h = t(h) || h), Hn(e, (b) => {
    const {
      node: m,
      index: C,
      pos: g,
      key: S,
      parentPos: K,
      level: A,
      nodes: L
    } = b, D = {
      node: m,
      nodes: L,
      index: C,
      key: S,
      pos: g,
      level: A
    }, T = De(S, g);
    v[g] = D, f[T] = D, D.parent = v[K], D.parent && (D.parent.children = D.parent.children || [], D.parent.children.push(D)), n && n(D, h);
  }, {
    externalGetKey: p,
    childrenPropName: s,
    fieldNames: l
  }), o && o(h), h;
}
function Fe(e, t) {
  let {
    expandedKeysSet: n,
    selectedKeysSet: o,
    loadedKeysSet: a,
    loadingKeysSet: s,
    checkedKeysSet: l,
    halfCheckedKeysSet: y,
    dragOverNodeKey: p,
    dropPosition: v,
    keyEntities: f
  } = t;
  const h = f[e];
  return {
    eventKey: e,
    expanded: n.has(e),
    selected: o.has(e),
    loaded: a.has(e),
    loading: s.has(e),
    checked: l.has(e),
    halfChecked: y.has(e),
    pos: String(h ? h.pos : ""),
    parent: h.parent,
    // [Legacy] Drag props
    // Since the interaction of drag is changed, the semantic of the props are
    // not accuracy, I think it should be finally removed
    dragOver: p === e && v === 0,
    dragOverGapTop: p === e && v === -1,
    dragOverGapBottom: p === e && v === 1
  };
}
function Be(e) {
  const {
    data: t,
    expanded: n,
    selected: o,
    checked: a,
    loaded: s,
    loading: l,
    halfChecked: y,
    dragOver: p,
    dragOverGapTop: v,
    dragOverGapBottom: f,
    pos: h,
    active: b,
    eventKey: m
  } = e, C = O(O({
    dataRef: t
  }, t), {
    expanded: n,
    selected: o,
    checked: a,
    loaded: s,
    loading: l,
    halfChecked: y,
    dragOver: p,
    dragOverGapTop: v,
    dragOverGapBottom: f,
    pos: h,
    active: b,
    eventKey: m,
    key: m
  });
  return "props" in C || Object.defineProperty(C, "props", {
    get() {
      return xe(!1, "Second param return from event is node data instead of TreeNode instance. Please read value directly instead of reading from `props`."), e;
    }
  }), C;
}
function Ht(e, t) {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((o) => {
    t.has(o) || n.add(o);
  }), n;
}
function zn(e) {
  const {
    disabled: t,
    disableCheckbox: n,
    checkable: o
  } = e || {};
  return !!(t || n) || o === !1;
}
function Vn(e, t, n, o) {
  const a = new Set(e), s = /* @__PURE__ */ new Set();
  for (let y = 0; y <= n; y += 1)
    (t.get(y) || /* @__PURE__ */ new Set()).forEach((v) => {
      const {
        key: f,
        node: h,
        children: b = []
      } = v;
      a.has(f) && !o(h) && b.filter((m) => !o(m.node)).forEach((m) => {
        a.add(m.key);
      });
    });
  const l = /* @__PURE__ */ new Set();
  for (let y = n; y >= 0; y -= 1)
    (t.get(y) || /* @__PURE__ */ new Set()).forEach((v) => {
      const {
        parent: f,
        node: h
      } = v;
      if (o(h) || !v.parent || l.has(v.parent.key))
        return;
      if (o(v.parent.node)) {
        l.add(f.key);
        return;
      }
      let b = !0, m = !1;
      (f.children || []).filter((C) => !o(C.node)).forEach((C) => {
        let {
          key: g
        } = C;
        const S = a.has(g);
        b && !S && (b = !1), !m && (S || s.has(g)) && (m = !0);
      }), b && a.add(f.key), m && s.add(f.key), l.add(f.key);
    });
  return {
    checkedKeys: Array.from(a),
    halfCheckedKeys: Array.from(Ht(s, a))
  };
}
function qn(e, t, n, o, a) {
  const s = new Set(e);
  let l = new Set(t);
  for (let p = 0; p <= o; p += 1)
    (n.get(p) || /* @__PURE__ */ new Set()).forEach((f) => {
      const {
        key: h,
        node: b,
        children: m = []
      } = f;
      !s.has(h) && !l.has(h) && !a(b) && m.filter((C) => !a(C.node)).forEach((C) => {
        s.delete(C.key);
      });
    });
  l = /* @__PURE__ */ new Set();
  const y = /* @__PURE__ */ new Set();
  for (let p = o; p >= 0; p -= 1)
    (n.get(p) || /* @__PURE__ */ new Set()).forEach((f) => {
      const {
        parent: h,
        node: b
      } = f;
      if (a(b) || !f.parent || y.has(f.parent.key))
        return;
      if (a(f.parent.node)) {
        y.add(h.key);
        return;
      }
      let m = !0, C = !1;
      (h.children || []).filter((g) => !a(g.node)).forEach((g) => {
        let {
          key: S
        } = g;
        const K = s.has(S);
        m && !K && (m = !1), !C && (K || l.has(S)) && (C = !0);
      }), m || s.delete(h.key), C && l.add(h.key), y.add(h.key);
    });
  return {
    checkedKeys: Array.from(s),
    halfCheckedKeys: Array.from(Ht(l, s))
  };
}
function tt(e, t, n, o, a, s) {
  const l = [];
  let y;
  s ? y = s : y = zn;
  const p = new Set(e.filter((f) => {
    const h = !!n[f];
    return h || l.push(f), h;
  }));
  ln(!l.length, `Tree missing follow keys: ${l.slice(0, 100).map((f) => `'${f}'`).join(", ")}`);
  let v;
  return t === !0 ? v = Vn(p, a, o, y) : v = qn(p, t.halfCheckedKeys, a, o, y), v;
}
function Gn(e) {
  const t = je(0), n = H();
  return me(() => {
    const o = /* @__PURE__ */ new Map();
    let a = 0;
    const s = e.value || {};
    for (const l in s)
      if (Object.prototype.hasOwnProperty.call(s, l)) {
        const y = s[l], {
          level: p
        } = y;
        let v = o.get(p);
        v || (v = /* @__PURE__ */ new Set(), o.set(p, v)), v.add(y), a = Math.max(a, p);
      }
    t.value = a, n.value = o;
  }), {
    maxLevel: t,
    levelEntities: n
  };
}
var bt = function(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, o = Object.getOwnPropertySymbols(e); a < o.length; a++)
      t.indexOf(o[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[a]) && (n[o[a]] = e[o[a]]);
  return n;
};
const Wn = Pe({
  compatConfig: {
    MODE: 3
  },
  name: "MotionTreeNode",
  inheritAttrs: !1,
  props: O(O({}, Ft), {
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
      slots: o
    } = t;
    const a = H(!0), s = ot(), l = H(!1), y = P(() => e.motion ? e.motion : rn()), p = (v, f) => {
      var h, b, m, C;
      f === "appear" ? (b = (h = y.value) === null || h === void 0 ? void 0 : h.onAfterEnter) === null || b === void 0 || b.call(h, v) : f === "leave" && ((C = (m = y.value) === null || m === void 0 ? void 0 : m.onAfterLeave) === null || C === void 0 || C.call(m, v)), l.value || e.onMotionEnd(), l.value = !0;
    };
    return ke(() => e.motionNodes, () => {
      e.motionNodes && e.motionType === "hide" && a.value && It(() => {
        a.value = !1;
      });
    }, {
      immediate: !0,
      flush: "post"
    }), Tt(() => {
      e.motionNodes && e.onMotionStart();
    }), bn(() => {
      e.motionNodes && p();
    }), () => {
      const {
        motion: v,
        motionNodes: f,
        motionType: h,
        active: b,
        eventKey: m
      } = e, C = bt(e, ["motion", "motionNodes", "motionType", "active", "eventKey"]);
      return f ? N(mn, ae(ae({}, y.value), {}, {
        appear: h === "show",
        onAfterAppear: (g) => p(g, "appear"),
        onAfterLeave: (g) => p(g, "leave")
      }), {
        default: () => [Kn(N("div", {
          class: `${s.value.prefixCls}-treenode-motion`
        }, [f.map((g) => {
          const S = bt(g.data, []), {
            title: K,
            key: A,
            isStart: L,
            isEnd: D
          } = g;
          return delete S.children, N(yt, ae(ae({}, S), {}, {
            title: K,
            active: b,
            data: g.data,
            key: A,
            eventKey: A,
            isStart: L,
            isEnd: D
          }), o);
        })]), [[kn, a.value]])]
      }) : N(yt, ae(ae({
        class: n.class,
        style: n.style
      }, C), {}, {
        active: b,
        eventKey: m
      }), o);
    };
  }
});
function Xn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  const n = e.length, o = t.length;
  if (Math.abs(n - o) !== 1)
    return {
      add: !1,
      key: null
    };
  function a(s, l) {
    const y = /* @__PURE__ */ new Map();
    s.forEach((v) => {
      y.set(v, !0);
    });
    const p = l.filter((v) => !y.has(v));
    return p.length === 1 ? p[0] : null;
  }
  return n < o ? {
    add: !0,
    key: a(e, t)
  } : {
    add: !1,
    key: a(t, e)
  };
}
function mt(e, t, n) {
  const o = e.findIndex((l) => l.key === n), a = e[o + 1], s = t.findIndex((l) => l.key === n);
  if (a) {
    const l = t.findIndex((y) => y.key === a.key);
    return t.slice(s + 1, l);
  }
  return t.slice(s + 1);
}
var Kt = function(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, o = Object.getOwnPropertySymbols(e); a < o.length; a++)
      t.indexOf(o[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[a]) && (n[o[a]] = e[o[a]]);
  return n;
};
const kt = {
  width: 0,
  height: 0,
  display: "flex",
  overflow: "hidden",
  opacity: 0,
  border: 0,
  padding: 0,
  margin: 0
}, Un = () => {
}, Se = `RC_TREE_MOTION_${Math.random()}`, nt = {
  key: Se
}, Rt = {
  key: Se,
  level: 0,
  index: 0,
  pos: "0",
  node: nt,
  nodes: [nt]
}, xt = {
  parent: null,
  children: [],
  pos: Rt.pos,
  data: nt,
  title: null,
  key: Se,
  /** Hold empty list here since we do not use it */
  isStart: [],
  isEnd: []
};
function St(e, t, n, o) {
  return t === !1 || !n ? e : e.slice(0, Math.ceil(n / o) + 1);
}
function wt(e) {
  const {
    key: t,
    pos: n
  } = e;
  return De(t, n);
}
function Yn(e) {
  let t = String(e.key), n = e;
  for (; n.parent; )
    n = n.parent, t = `${n.key} > ${t}`;
  return t;
}
const Jn = Pe({
  compatConfig: {
    MODE: 3
  },
  name: "NodeList",
  inheritAttrs: !1,
  props: Pn,
  setup(e, t) {
    let {
      expose: n,
      attrs: o
    } = t;
    const a = je(), s = je(), {
      expandedKeys: l,
      flattenNodes: y
    } = jt();
    n({
      scrollTo: (g) => {
        a.value.scrollTo(g);
      },
      getIndentWidth: () => s.value.offsetWidth
    });
    const p = H(y.value), v = H([]), f = je(null);
    function h() {
      p.value = y.value, v.value = [], f.value = null, e.onListChangeEnd();
    }
    const b = ot();
    ke([() => l.value.slice(), y], (g, S) => {
      let [K, A] = g, [L, D] = S;
      const T = Xn(L, K);
      if (T.key !== null) {
        const {
          virtual: U,
          height: W,
          itemHeight: F
        } = e;
        if (T.add) {
          const R = D.findIndex((ne) => {
            let {
              key: Q
            } = ne;
            return Q === T.key;
          }), X = St(mt(D, A, T.key), U, W, F), V = D.slice();
          V.splice(R + 1, 0, xt), p.value = V, v.value = X, f.value = "show";
        } else {
          const R = A.findIndex((ne) => {
            let {
              key: Q
            } = ne;
            return Q === T.key;
          }), X = St(mt(A, D, T.key), U, W, F), V = A.slice();
          V.splice(R + 1, 0, xt), p.value = V, v.value = X, f.value = "hide";
        }
      } else
        D !== A && (p.value = A);
    }), ke(() => b.value.dragging, (g) => {
      g || h();
    });
    const m = P(() => e.motion === void 0 ? p.value : y.value), C = () => {
      e.onActiveChange(null);
    };
    return () => {
      const g = O(O({}, e), o), {
        prefixCls: S,
        selectable: K,
        checkable: A,
        disabled: L,
        motion: D,
        height: T,
        itemHeight: U,
        virtual: W,
        focusable: F,
        activeItem: R,
        focused: X,
        tabindex: V,
        onKeydown: ne,
        onFocus: Q,
        onBlur: ve,
        onListChangeStart: le,
        onListChangeEnd: we
      } = g, re = Kt(g, ["prefixCls", "selectable", "checkable", "disabled", "motion", "height", "itemHeight", "virtual", "focusable", "activeItem", "focused", "tabindex", "onKeydown", "onFocus", "onBlur", "onListChangeStart", "onListChangeEnd"]);
      return N(xn, null, [X && R && N("span", {
        style: kt,
        "aria-live": "assertive"
      }, [Yn(R)]), N("div", null, [N("input", {
        style: kt,
        disabled: F === !1 || L,
        tabindex: F !== !1 ? V : null,
        onKeydown: ne,
        onFocus: Q,
        onBlur: ve,
        value: "",
        onChange: Un,
        "aria-label": "for screen reader"
      }, null)]), N("div", {
        class: `${S}-treenode`,
        "aria-hidden": !0,
        style: {
          position: "absolute",
          pointerEvents: "none",
          visibility: "hidden",
          height: 0,
          overflow: "hidden"
        }
      }, [N("div", {
        class: `${S}-indent`
      }, [N("div", {
        ref: s,
        class: `${S}-indent-unit`
      }, null)])]), N(Cn, ae(ae({}, Lt(re, ["onActiveChange"])), {}, {
        data: m.value,
        itemKey: wt,
        height: T,
        fullHeight: !1,
        virtual: W,
        itemHeight: U,
        prefixCls: `${S}-list`,
        ref: a,
        onVisibleChange: (z, ce) => {
          const q = new Set(z);
          ce.filter((oe) => !q.has(oe)).some((oe) => wt(oe) === Se) && h();
        }
      }), {
        default: (z) => {
          const {
            pos: ce
          } = z, q = Kt(z.data, []), {
            title: Z,
            key: oe,
            isStart: ue,
            isEnd: pe
          } = z, Ce = De(oe, ce);
          return delete q.key, delete q.children, N(Wn, ae(ae({}, q), {}, {
            eventKey: Ce,
            title: Z,
            active: !!R && oe === R.key,
            data: z.data,
            isStart: ue,
            isEnd: pe,
            motion: D,
            motionNodes: oe === Se ? v.value : null,
            motionType: f.value,
            onMotionStart: le,
            onMotionEnd: h,
            onMousemove: C
          }), null);
        }
      })]);
    };
  }
});
function Qn(e) {
  let {
    dropPosition: t,
    dropLevelOffset: n,
    indent: o
  } = e;
  const a = {
    pointerEvents: "none",
    position: "absolute",
    right: 0,
    backgroundColor: "red",
    height: "2px"
  };
  switch (t) {
    case -1:
      a.top = 0, a.left = `${-n * o}px`;
      break;
    case 1:
      a.bottom = 0, a.left = `${-n * o}px`;
      break;
    case 0:
      a.bottom = 0, a.left = `${o}`;
      break;
  }
  return N("div", {
    style: a
  }, null);
}
const Zn = 10, xo = Pe({
  compatConfig: {
    MODE: 3
  },
  name: "Tree",
  inheritAttrs: !1,
  props: sn(Dn(), {
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
    dropIndicatorRender: Qn,
    allowDrop: () => !0
  }),
  setup(e, t) {
    let {
      attrs: n,
      slots: o,
      expose: a
    } = t;
    const s = H(!1);
    let l = {};
    const y = H(), p = H([]), v = H([]), f = H([]), h = H([]), b = H([]), m = H([]), C = {}, g = Dt({
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
    }), S = H([]);
    ke([() => e.treeData, () => e.children], () => {
      S.value = e.treeData !== void 0 ? e.treeData.slice() : Fn(ut(e.children));
    }, {
      immediate: !0,
      deep: !0
    });
    const K = H({}), A = H(!1), L = H(null), D = H(!1), T = P(() => lt(e.fieldNames)), U = H();
    let W = null, F = null, R = null;
    const X = P(() => ({
      expandedKeysSet: V.value,
      selectedKeysSet: ne.value,
      loadedKeysSet: Q.value,
      loadingKeysSet: ve.value,
      checkedKeysSet: le.value,
      halfCheckedKeysSet: we.value,
      dragOverNodeKey: g.dragOverNodeKey,
      dropPosition: g.dropPosition,
      keyEntities: K.value
    })), V = P(() => new Set(m.value)), ne = P(() => new Set(p.value)), Q = P(() => new Set(h.value)), ve = P(() => new Set(b.value)), le = P(() => new Set(v.value)), we = P(() => new Set(f.value));
    me(() => {
      if (S.value) {
        const i = Rn(S.value, {
          fieldNames: T.value
        });
        K.value = O({
          [Se]: Rt
        }, i.keyEntities);
      }
    });
    let re = !1;
    ke(
      [() => e.expandedKeys, () => e.autoExpandParent, K],
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      (i, d) => {
        let [u, x] = i, [E, w] = d, k = m.value;
        if (e.expandedKeys !== void 0 || re && x !== w)
          k = e.autoExpandParent || !re && e.defaultExpandParent ? pt(e.expandedKeys, K.value) : e.expandedKeys;
        else if (!re && e.defaultExpandAll) {
          const M = O({}, K.value);
          delete M[Se], k = Object.keys(M).map((B) => M[B].key);
        } else
          !re && e.defaultExpandedKeys && (k = e.autoExpandParent || e.defaultExpandParent ? pt(e.defaultExpandedKeys, K.value) : e.defaultExpandedKeys);
        k && (m.value = k), re = !0;
      },
      {
        immediate: !0
      }
    );
    const z = H([]);
    me(() => {
      z.value = Bn(S.value, m.value, T.value);
    }), me(() => {
      e.selectable && (e.selectedKeys !== void 0 ? p.value = gt(e.selectedKeys, e) : !re && e.defaultSelectedKeys && (p.value = gt(e.defaultSelectedKeys, e)));
    });
    const {
      maxLevel: ce,
      levelEntities: q
    } = Gn(K);
    me(() => {
      if (e.checkable) {
        let i;
        if (e.checkedKeys !== void 0 ? i = et(e.checkedKeys) || {} : !re && e.defaultCheckedKeys ? i = et(e.defaultCheckedKeys) || {} : S.value && (i = et(e.checkedKeys) || {
          checkedKeys: v.value,
          halfCheckedKeys: f.value
        }), i) {
          let {
            checkedKeys: d = [],
            halfCheckedKeys: u = []
          } = i;
          e.checkStrictly || ({
            checkedKeys: d,
            halfCheckedKeys: u
          } = tt(d, !0, K.value, ce.value, q.value)), v.value = d, f.value = u;
        }
      }
    }), me(() => {
      e.loadedKeys && (h.value = e.loadedKeys);
    });
    const Z = () => {
      O(g, {
        dragOverNodeKey: null,
        dropPosition: null,
        dropLevelOffset: null,
        dropTargetKey: null,
        dropContainerKey: null,
        dropTargetPos: null,
        dropAllowed: !1
      });
    }, oe = (i) => {
      U.value.scrollTo(i);
    };
    ke(() => e.activeKey, () => {
      e.activeKey !== void 0 && (L.value = e.activeKey);
    }, {
      immediate: !0
    }), ke(L, (i) => {
      It(() => {
        i !== null && oe({
          key: i
        });
      });
    }, {
      immediate: !0,
      flush: "post"
    });
    const ue = (i) => {
      e.expandedKeys === void 0 && (m.value = i);
    }, pe = () => {
      g.draggingNodeKey !== null && O(g, {
        draggingNodeKey: null,
        dropPosition: null,
        dropContainerKey: null,
        dropTargetKey: null,
        dropLevelOffset: null,
        dropAllowed: !0,
        dragOverNodeKey: null
      }), W = null, R = null;
    }, Ce = (i, d) => {
      const {
        onDragend: u
      } = e;
      g.dragOverNodeKey = null, pe(), u == null || u({
        event: i,
        node: d.eventData
      }), F = null;
    }, Ee = (i) => {
      Ce(i, null), window.removeEventListener("dragend", Ee);
    }, Re = (i, d) => {
      const {
        onDragstart: u
      } = e, {
        eventKey: x,
        eventData: E
      } = d;
      F = d, W = {
        x: i.clientX,
        y: i.clientY
      };
      const w = fe(m.value, x);
      g.draggingNodeKey = x, g.dragChildrenKeys = Mn(x, K.value), y.value = U.value.getIndentWidth(), ue(w), window.addEventListener("dragend", Ee), u && u({
        event: i,
        node: E
      });
    }, ze = (i, d) => {
      const {
        onDragenter: u,
        onExpand: x,
        allowDrop: E,
        direction: w
      } = e, {
        pos: k,
        eventKey: M
      } = d;
      if (R !== M && (R = M), !F) {
        Z();
        return;
      }
      const {
        dropPosition: B,
        dropLevelOffset: $,
        dropTargetKey: I,
        dropContainerKey: j,
        dropTargetPos: ee,
        dropAllowed: ie,
        dragOverNodeKey: se
      } = ht(i, F, d, y.value, W, E, z.value, K.value, V.value, w);
      if (
        // don't allow drop inside its children
        g.dragChildrenKeys.indexOf(I) !== -1 || // don't allow drop when drop is not allowed caculated by calcDropPosition
        !ie
      ) {
        Z();
        return;
      }
      if (l || (l = {}), Object.keys(l).forEach((te) => {
        clearTimeout(l[te]);
      }), F.eventKey !== d.eventKey && (l[k] = window.setTimeout(() => {
        if (g.draggingNodeKey === null)
          return;
        let te = m.value.slice();
        const ye = K.value[d.eventKey];
        ye && (ye.children || []).length && (te = he(m.value, d.eventKey)), ue(te), x && x(te, {
          node: d.eventData,
          expanded: !0,
          nativeEvent: i
        });
      }, 800)), F.eventKey === I && $ === 0) {
        Z();
        return;
      }
      O(g, {
        dragOverNodeKey: se,
        dropPosition: B,
        dropLevelOffset: $,
        dropTargetKey: I,
        dropContainerKey: j,
        dropTargetPos: ee,
        dropAllowed: ie
      }), u && u({
        event: i,
        node: d.eventData,
        expandedKeys: m.value
      });
    }, Ve = (i, d) => {
      const {
        onDragover: u,
        allowDrop: x,
        direction: E
      } = e;
      if (!F)
        return;
      const {
        dropPosition: w,
        dropLevelOffset: k,
        dropTargetKey: M,
        dropContainerKey: B,
        dropAllowed: $,
        dropTargetPos: I,
        dragOverNodeKey: j
      } = ht(i, F, d, y.value, W, x, z.value, K.value, V.value, E);
      g.dragChildrenKeys.indexOf(M) !== -1 || !$ || (F.eventKey === M && k === 0 ? g.dropPosition === null && g.dropLevelOffset === null && g.dropTargetKey === null && g.dropContainerKey === null && g.dropTargetPos === null && g.dropAllowed === !1 && g.dragOverNodeKey === null || Z() : w === g.dropPosition && k === g.dropLevelOffset && M === g.dropTargetKey && B === g.dropContainerKey && I === g.dropTargetPos && $ === g.dropAllowed && j === g.dragOverNodeKey || O(g, {
        dropPosition: w,
        dropLevelOffset: k,
        dropTargetKey: M,
        dropContainerKey: B,
        dropTargetPos: I,
        dropAllowed: $,
        dragOverNodeKey: j
      }), u && u({
        event: i,
        node: d.eventData
      }));
    }, qe = (i, d) => {
      R === d.eventKey && !i.currentTarget.contains(i.relatedTarget) && (Z(), R = null);
      const {
        onDragleave: u
      } = e;
      u && u({
        event: i,
        node: d.eventData
      });
    }, Ge = function(i, d) {
      let u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
      var x;
      const {
        dragChildrenKeys: E,
        dropPosition: w,
        dropTargetKey: k,
        dropTargetPos: M,
        dropAllowed: B
      } = g;
      if (!B)
        return;
      const {
        onDrop: $
      } = e;
      if (g.dragOverNodeKey = null, pe(), k === null)
        return;
      const I = O(O({}, Fe(k, ut(X.value))), {
        active: ((x = _.value) === null || x === void 0 ? void 0 : x.key) === k,
        data: K.value[k].node
      }), j = E.indexOf(k) !== -1;
      xe(!j, "Can not drop to dragNode's children node. Maybe this is a bug of ant-design-vue. Please report an issue.");
      const ee = at(M), ie = {
        event: i,
        node: Be(I),
        dragNode: F ? F.eventData : null,
        dragNodesKeys: [F.eventKey].concat(E),
        dropToGap: w !== 0,
        dropPosition: w + Number(ee[ee.length - 1])
      };
      u || $ == null || $(ie), F = null;
    }, Te = (i, d) => {
      const {
        expanded: u,
        key: x
      } = d, E = z.value.filter((k) => k.key === x)[0], w = Be(O(O({}, Fe(x, X.value)), {
        data: E.data
      }));
      ue(u ? fe(m.value, x) : he(m.value, x)), be(i, w);
    }, We = (i, d) => {
      const {
        onClick: u,
        expandAction: x
      } = e;
      x === "click" && Te(i, d), u && u(i, d);
    }, Xe = (i, d) => {
      const {
        onDblclick: u,
        expandAction: x
      } = e;
      (x === "doubleclick" || x === "dblclick") && Te(i, d), u && u(i, d);
    }, Ie = (i, d) => {
      let u = p.value;
      const {
        onSelect: x,
        multiple: E
      } = e, {
        selected: w
      } = d, k = d[T.value.key], M = !w;
      M ? E ? u = he(u, k) : u = [k] : u = fe(u, k);
      const B = K.value, $ = u.map((I) => {
        const j = B[I];
        return j ? j.node : null;
      }).filter((I) => I);
      e.selectedKeys === void 0 && (p.value = u), x && x(u, {
        event: "select",
        selected: M,
        node: d,
        selectedNodes: $,
        nativeEvent: i
      });
    }, Le = (i, d, u) => {
      const {
        checkStrictly: x,
        onCheck: E
      } = e, w = d[T.value.key];
      let k;
      const M = {
        event: "check",
        node: d,
        checked: u,
        nativeEvent: i
      }, B = K.value;
      if (x) {
        const $ = u ? he(v.value, w) : fe(v.value, w), I = fe(f.value, w);
        k = {
          checked: $,
          halfChecked: I
        }, M.checkedNodes = $.map((j) => B[j]).filter((j) => j).map((j) => j.node), e.checkedKeys === void 0 && (v.value = $);
      } else {
        let {
          checkedKeys: $,
          halfCheckedKeys: I
        } = tt([...v.value, w], !0, B, ce.value, q.value);
        if (!u) {
          const j = new Set($);
          j.delete(w), {
            checkedKeys: $,
            halfCheckedKeys: I
          } = tt(Array.from(j), {
            checked: !1,
            halfCheckedKeys: I
          }, B, ce.value, q.value);
        }
        k = $, M.checkedNodes = [], M.checkedNodesPositions = [], M.halfCheckedKeys = I, $.forEach((j) => {
          const ee = B[j];
          if (!ee)
            return;
          const {
            node: ie,
            pos: se
          } = ee;
          M.checkedNodes.push(ie), M.checkedNodesPositions.push({
            node: ie,
            pos: se
          });
        }), e.checkedKeys === void 0 && (v.value = $, f.value = I);
      }
      E && E(k, M);
    }, Me = (i) => {
      const d = i[T.value.key], u = new Promise((x, E) => {
        const {
          loadData: w,
          onLoad: k
        } = e;
        if (!w || Q.value.has(d) || ve.value.has(d))
          return null;
        w(i).then(() => {
          const B = he(h.value, d), $ = fe(b.value, d);
          k && k(B, {
            event: "load",
            node: i
          }), e.loadedKeys === void 0 && (h.value = B), b.value = $, x();
        }).catch((B) => {
          const $ = fe(b.value, d);
          if (b.value = $, C[d] = (C[d] || 0) + 1, C[d] >= Zn) {
            xe(!1, "Retry for `loadData` many times but still failed. No more retry.");
            const I = he(h.value, d);
            e.loadedKeys === void 0 && (h.value = I), x();
          }
          E(B);
        }), b.value = he(b.value, d);
      });
      return u.catch(() => {
      }), u;
    }, Ue = (i, d) => {
      const {
        onMouseenter: u
      } = e;
      u && u({
        event: i,
        node: d
      });
    }, Ae = (i, d) => {
      const {
        onMouseleave: u
      } = e;
      u && u({
        event: i,
        node: d
      });
    }, Ye = (i, d) => {
      const {
        onRightClick: u
      } = e;
      u && (i.preventDefault(), u({
        event: i,
        node: d
      }));
    }, Je = (i) => {
      const {
        onFocus: d
      } = e;
      A.value = !0, d && d(i);
    }, _e = (i) => {
      const {
        onBlur: d
      } = e;
      A.value = !1, c(null), d && d(i);
    }, be = (i, d) => {
      let u = m.value;
      const {
        onExpand: x,
        loadData: E
      } = e, {
        expanded: w
      } = d, k = d[T.value.key];
      if (D.value)
        return;
      const M = u.indexOf(k), B = !w;
      if (xe(w && M !== -1 || !w && M === -1, "Expand state not sync with index check"), B ? u = he(u, k) : u = fe(u, k), ue(u), x && x(u, {
        node: d,
        expanded: B,
        nativeEvent: i
      }), B && E) {
        const $ = Me(d);
        $ && $.then(() => {
        }).catch((I) => {
          const j = fe(m.value, k);
          ue(j), Promise.reject(I);
        });
      }
    }, Qe = () => {
      D.value = !0;
    }, r = () => {
      setTimeout(() => {
        D.value = !1;
      });
    }, c = (i) => {
      const {
        onActiveChange: d
      } = e;
      L.value !== i && (e.activeKey !== void 0 && (L.value = i), i !== null && oe({
        key: i
      }), d && d(i));
    }, _ = P(() => L.value === null ? null : z.value.find((i) => {
      let {
        key: d
      } = i;
      return d === L.value;
    }) || null), G = (i) => {
      let d = z.value.findIndex((x) => {
        let {
          key: E
        } = x;
        return E === L.value;
      });
      d === -1 && i < 0 && (d = z.value.length), d = (d + i + z.value.length) % z.value.length;
      const u = z.value[d];
      if (u) {
        const {
          key: x
        } = u;
        c(x);
      } else
        c(null);
    }, Y = P(() => Be(O(O({}, Fe(L.value, X.value)), {
      data: _.value.data,
      active: !0
    }))), J = (i) => {
      const {
        onKeydown: d,
        checkable: u,
        selectable: x
      } = e;
      switch (i.which) {
        case Oe.UP: {
          G(-1), i.preventDefault();
          break;
        }
        case Oe.DOWN: {
          G(1), i.preventDefault();
          break;
        }
      }
      const E = _.value;
      if (E && E.data) {
        const w = E.data.isLeaf === !1 || !!(E.data.children || []).length, k = Y.value;
        switch (i.which) {
          case Oe.LEFT: {
            w && V.value.has(L.value) ? be({}, k) : E.parent && c(E.parent.key), i.preventDefault();
            break;
          }
          case Oe.RIGHT: {
            w && !V.value.has(L.value) ? be({}, k) : E.children && E.children.length && c(E.children[0].key), i.preventDefault();
            break;
          }
          case Oe.ENTER:
          case Oe.SPACE: {
            u && !k.disabled && k.checkable !== !1 && !k.disableCheckbox ? Le({}, k, !le.value.has(L.value)) : !u && x && !k.disabled && k.selectable !== !1 && Ie({}, k);
            break;
          }
        }
      }
      d && d(i);
    };
    return a({
      onNodeExpand: be,
      scrollTo: oe,
      onKeydown: J,
      selectedKeys: P(() => p.value),
      checkedKeys: P(() => v.value),
      halfCheckedKeys: P(() => f.value),
      loadedKeys: P(() => h.value),
      loadingKeys: P(() => b.value),
      expandedKeys: P(() => m.value)
    }), Sn(() => {
      window.removeEventListener("dragend", Ee), s.value = !0;
    }), Nn({
      expandedKeys: m,
      selectedKeys: p,
      loadedKeys: h,
      loadingKeys: b,
      checkedKeys: v,
      halfCheckedKeys: f,
      expandedKeysSet: V,
      selectedKeysSet: ne,
      loadedKeysSet: Q,
      loadingKeysSet: ve,
      checkedKeysSet: le,
      halfCheckedKeysSet: we,
      flattenNodes: z
    }), () => {
      const {
        // focused,
        // flattenNodes,
        // keyEntities,
        draggingNodeKey: i,
        // activeKey,
        dropLevelOffset: d,
        dropContainerKey: u,
        dropTargetKey: x,
        dropPosition: E,
        dragOverNodeKey: w
        // indent,
      } = g, {
        prefixCls: k,
        showLine: M,
        focusable: B,
        tabindex: $ = 0,
        selectable: I,
        showIcon: j,
        icon: ee = o.icon,
        switcherIcon: ie,
        draggable: se,
        checkable: te,
        checkStrictly: ye,
        disabled: Ne,
        motion: Ze,
        loadData: zt,
        filterTreeNode: Vt,
        height: qt,
        itemHeight: Gt,
        virtual: Wt,
        dropIndicatorRender: Xt,
        onContextmenu: Ut,
        onScroll: Yt,
        direction: Jt,
        rootClassName: Qt,
        rootStyle: Zt
      } = e, {
        class: en,
        style: tn
      } = n, nn = Mt(O(O({}, e), n), {
        aria: !0,
        data: !0
      });
      let $e;
      return se ? typeof se == "object" ? $e = se : typeof se == "function" ? $e = {
        nodeDraggable: se
      } : $e = {} : $e = !1, N(En, {
        value: {
          prefixCls: k,
          selectable: I,
          showIcon: j,
          icon: ee,
          switcherIcon: ie,
          draggable: $e,
          draggingNodeKey: i,
          checkable: te,
          customCheckable: o.checkable,
          checkStrictly: ye,
          disabled: Ne,
          keyEntities: K.value,
          dropLevelOffset: d,
          dropContainerKey: u,
          dropTargetKey: x,
          dropPosition: E,
          dragOverNodeKey: w,
          dragging: i !== null,
          indent: y.value,
          direction: Jt,
          dropIndicatorRender: Xt,
          loadData: zt,
          filterTreeNode: Vt,
          onNodeClick: We,
          onNodeDoubleClick: Xe,
          onNodeExpand: be,
          onNodeSelect: Ie,
          onNodeCheck: Le,
          onNodeLoad: Me,
          onNodeMouseEnter: Ue,
          onNodeMouseLeave: Ae,
          onNodeContextMenu: Ye,
          onNodeDragStart: Re,
          onNodeDragEnter: ze,
          onNodeDragOver: Ve,
          onNodeDragLeave: qe,
          onNodeDragEnd: Ce,
          onNodeDrop: Ge,
          slots: o
        }
      }, {
        default: () => [N("div", {
          role: "tree",
          class: ge(k, en, Qt, {
            [`${k}-show-line`]: M,
            [`${k}-focused`]: A.value,
            [`${k}-active-focused`]: L.value !== null
          }),
          style: Zt
        }, [N(Jn, ae({
          ref: U,
          prefixCls: k,
          style: tn,
          disabled: Ne,
          selectable: I,
          checkable: !!te,
          motion: Ze,
          height: qt,
          itemHeight: Gt,
          virtual: Wt,
          focusable: B,
          focused: A.value,
          tabindex: $,
          activeItem: _.value,
          onFocus: Je,
          onBlur: _e,
          onKeydown: J,
          onActiveChange: c,
          onListChangeStart: Qe,
          onListChangeEnd: r,
          onContextmenu: Ut,
          onScroll: Yt
        }, nn), null)])]
      });
    };
  }
});
var eo = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494z" } }] }, name: "file", theme: "outlined" };
function Ct(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), o.forEach(function(a) {
      to(e, a, n[a]);
    });
  }
  return e;
}
function to(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var rt = function(t, n) {
  var o = Ct({}, t, n.attrs);
  return N(He, Ct({}, o, {
    icon: eo
  }), null);
};
rt.displayName = "FileOutlined";
rt.inheritAttrs = !1;
var no = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M328 544h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z" } }, { tag: "path", attrs: { d: "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z" } }] }, name: "minus-square", theme: "outlined" };
function Ot(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), o.forEach(function(a) {
      oo(e, a, n[a]);
    });
  }
  return e;
}
function oo(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var it = function(t, n) {
  var o = Ot({}, t, n.attrs);
  return N(He, Ot({}, o, {
    icon: no
  }), null);
};
it.displayName = "MinusSquareOutlined";
it.inheritAttrs = !1;
var ao = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M328 544h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z" } }, { tag: "path", attrs: { d: "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z" } }] }, name: "plus-square", theme: "outlined" };
function Et(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), o.forEach(function(a) {
      lo(e, a, n[a]);
    });
  }
  return e;
}
function lo(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var st = function(t, n) {
  var o = Et({}, t, n.attrs);
  return N(He, Et({}, o, {
    icon: ao
  }), null);
};
st.displayName = "PlusSquareOutlined";
st.inheritAttrs = !1;
var ro = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" } }] }, name: "caret-down", theme: "filled" };
function Nt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), o.forEach(function(a) {
      io(e, a, n[a]);
    });
  }
  return e;
}
function io(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var dt = function(t, n) {
  var o = Nt({}, t, n.attrs);
  return N(He, Nt({}, o, {
    icon: ro
  }), null);
};
dt.displayName = "CaretDownFilled";
dt.inheritAttrs = !1;
function So(e, t, n, o, a) {
  const {
    isLeaf: s,
    expanded: l,
    loading: y
  } = n;
  let p = t;
  if (y)
    return N(dn, {
      class: `${e}-switcher-loading-icon`
    }, null);
  let v;
  a && typeof a == "object" && (v = a.showLeafIcon);
  let f = null;
  const h = `${e}-switcher-icon`;
  return s ? a ? v && o ? o(n) : (typeof a == "object" && !v ? f = N("span", {
    class: `${e}-switcher-leaf-line`
  }, null) : f = N(rt, {
    class: `${e}-switcher-line-icon`
  }, null), f) : null : (f = N(dt, {
    class: h
  }, null), a && (f = l ? N(it, {
    class: `${e}-switcher-line-icon`
  }, null) : N(st, {
    class: `${e}-switcher-line-icon`
  }, null)), typeof t == "function" ? p = t(O(O({}, n), {
    defaultIcon: f,
    switcherCls: h
  })) : cn(p) && (p = wn(p, {
    class: h
  })), p || f);
}
const so = new vn("ant-tree-node-fx-do-not-use", {
  "0%": {
    opacity: 0
  },
  "100%": {
    opacity: 1
  }
}), co = (e, t) => ({
  [`.${e}-switcher-icon`]: {
    display: "inline-block",
    fontSize: 10,
    verticalAlign: "baseline",
    svg: {
      transition: `transform ${t.motionDurationSlow}`
    }
  }
}), uo = (e, t) => ({
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
}), fo = (e, t) => {
  const {
    treeCls: n,
    treeNodeCls: o,
    treeNodePadding: a,
    treeTitleHeight: s
  } = t, l = (s - t.fontSizeLG) / 2, y = t.paddingXS;
  return {
    [n]: O(O({}, fn(t)), {
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
      [`&-focused:not(:hover):not(${n}-active-focused)`]: O({}, ct(t)),
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
          [`${o}.dragging`]: {
            position: "relative",
            "&:after": {
              position: "absolute",
              top: 0,
              insetInlineEnd: 0,
              bottom: a,
              insetInlineStart: 0,
              border: `1px solid ${t.colorPrimary}`,
              opacity: 0,
              animationName: so,
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
      [`${o}`]: {
        display: "flex",
        alignItems: "flex-start",
        padding: `0 0 ${a}px 0`,
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
        [`&-active ${n}-node-content-wrapper`]: O({}, ct(t)),
        [`&:not(${o}-disabled).filter-node ${n}-title`]: {
          color: "inherit",
          fontWeight: 500
        },
        "&-draggable": {
          [`${n}-draggable-icon`]: {
            width: s,
            lineHeight: `${s}px`,
            textAlign: "center",
            visibility: "visible",
            opacity: 0.2,
            transition: `opacity ${t.motionDurationSlow}`,
            [`${o}:hover &`]: {
              opacity: 0.45
            }
          },
          [`&${o}-disabled`]: {
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
          width: s
        }
      },
      // >>> Drag Handler
      [`${n}-draggable-icon`]: {
        visibility: "hidden"
      },
      // >>> Switcher
      [`${n}-switcher`]: O(O({}, co(e, t)), {
        position: "relative",
        flex: "none",
        alignSelf: "stretch",
        width: s,
        margin: 0,
        lineHeight: `${s}px`,
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
            insetInlineEnd: s / 2,
            bottom: -a,
            marginInlineStart: -1,
            borderInlineEnd: `1px solid ${t.colorBorder}`,
            content: '""'
          },
          "&:after": {
            position: "absolute",
            width: s / 2 * 0.8,
            height: s / 2,
            borderBottom: `1px solid ${t.colorBorder}`,
            content: '""'
          }
        }
      }),
      // >>> Checkbox
      [`${n}-checkbox`]: {
        top: "initial",
        marginInlineEnd: y,
        marginBlockStart: l
      },
      // >>> Title
      // add `${treeCls}-checkbox + span` to cover checkbox `${checkboxCls} + span`
      [`${n}-node-content-wrapper, ${n}-checkbox + span`]: {
        position: "relative",
        zIndex: "auto",
        minHeight: s,
        margin: 0,
        padding: `0 ${t.paddingXS / 2}px`,
        color: "inherit",
        lineHeight: `${s}px`,
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
          width: s,
          height: s,
          lineHeight: `${s}px`,
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
      [`${n}-node-content-wrapper`]: O({
        lineHeight: `${s}px`,
        userSelect: "none"
      }, uo(e, t)),
      [`${o}.drop-container`]: {
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
              insetInlineEnd: s / 2,
              bottom: -a,
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
      [`${o}-leaf-last`]: {
        [`${n}-switcher`]: {
          "&-leaf-line": {
            "&:before": {
              top: "auto !important",
              bottom: "auto !important",
              height: `${s / 2}px !important`
            }
          }
        }
      }
    })
  };
}, vo = (e) => {
  const {
    treeCls: t,
    treeNodeCls: n,
    treeNodePadding: o
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
          bottom: o,
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
}, yo = (e, t) => {
  const n = `.${e}`, o = `${n}-treenode`, a = t.paddingXS / 2, s = t.controlHeightSM, l = un(t, {
    treeCls: n,
    treeNodeCls: o,
    treeNodePadding: a,
    treeTitleHeight: s
  });
  return [
    // Basic
    fo(e, l),
    // Directory
    vo(l)
  ];
}, wo = yn("Tree", (e, t) => {
  let {
    prefixCls: n
  } = t;
  return [{
    [e.componentCls]: On(`${n}-checkbox`, e)
  }, yo(n, e), hn(e)];
});
export {
  rt as F,
  xo as T,
  yt as V,
  tt as a,
  fe as b,
  Rn as c,
  he as d,
  de as e,
  wo as f,
  yo as g,
  Fn as h,
  lt as i,
  pt as j,
  So as r,
  Dn as t,
  Gn as u
};
