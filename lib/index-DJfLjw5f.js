import { _ as h, Y as Kt, P as S, ai as jt, h as ee, g as oe, ah as st, k as Yt, n as Ut, e as Xt, y as ne, o as le, b3 as Gt, V as Qt, L as qt, C as Zt, r as Ae, a4 as ze, m as ie, b1 as ut, i as Jt, al as kt } from "./index-DGUz0BTe.js";
import { defineComponent as re, computed as z, ref as be, createVNode as y, isVNode as en, cloneVNode as ct, inject as We, provide as _e, shallowRef as V, onMounted as ae, watch as X, createTextVNode as Ve, Fragment as $e, onBeforeUnmount as ye, isRef as tn, reactive as Se, watchEffect as dt, toRefs as nn, onUnmounted as on, toRaw as ln, nextTick as He, onUpdated as an } from "vue";
import { K as R } from "./KeyCode-n3eOOGSl.js";
import { B as rn } from "./BaseInput-CNspKwab.js";
import { p as ft } from "./pickAttrs-BR2EV0Wa.js";
import { O as sn } from "./Overflow-_WroPLhx.js";
import { i as un, D as cn } from "./DownOutlined-CTjAdqQv.js";
import { R as dn } from "./index-BPMFHqJ9.js";
import { C as fn } from "./CheckOutlined-DzWQgVNv.js";
import { S as pn } from "./SearchOutlined-CD5IBt2B.js";
import { i as tt } from "./move-C7FDUX8Z.js";
import { a as mn, s as hn, c as gn, b as vn, i as nt } from "./slide-BoMXXN49.js";
function ot(e, t) {
  const {
    key: n
  } = e;
  let o;
  return "value" in e && ({
    value: o
  } = e), n ?? (o !== void 0 ? o : `rc-index-key-${t}`);
}
function bn(e, t) {
  const {
    label: n,
    value: o,
    options: l
  } = e || {};
  return {
    label: n || (t ? "children" : "label"),
    value: o || "value",
    options: l || "options"
  };
}
function Eo(e) {
  let {
    fieldNames: t,
    childrenAsData: n
  } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const o = [], {
    label: l,
    value: i,
    options: u
  } = bn(t, !1);
  function r(g, a) {
    g.forEach((d) => {
      const m = d[l];
      if (a || !(u in d)) {
        const c = d[i];
        o.push({
          key: ot(d, o.length),
          groupOption: a,
          data: d,
          label: m,
          value: c
        });
      } else {
        let c = m;
        c === void 0 && n && (c = d.label), o.push({
          key: ot(d, o.length),
          group: !0,
          data: d,
          label: c
        }), r(d[u], !0);
      }
    });
  }
  return r(e, !1), o;
}
function Ro(e) {
  const t = h({}, e);
  return "props" in t || Object.defineProperty(t, "props", {
    get() {
      return Kt(!1, "Return type is option instead of Option instance. Please read value directly instead of reading from `props`."), t;
    }
  }), t;
}
function Sn(e, t) {
  if (!t || !t.length)
    return null;
  let n = !1;
  function o(i, u) {
    let [r, ...g] = u;
    if (!r)
      return [i];
    const a = i.split(r);
    return n = n || a.length > 1, a.reduce((d, m) => [...d, ...o(m, g)], []).filter((d) => d);
  }
  const l = o(e, t);
  return n ? l : null;
}
var yn = function(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var l = 0, o = Object.getOwnPropertySymbols(e); l < o.length; l++)
      t.indexOf(o[l]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[l]) && (n[o[l]] = e[o[l]]);
  return n;
};
const wn = (e) => {
  const t = e === !0 ? 0 : 1;
  return {
    bottomLeft: {
      points: ["tl", "bl"],
      offset: [0, 4],
      overflow: {
        adjustX: t,
        adjustY: 1
      }
    },
    bottomRight: {
      points: ["tr", "br"],
      offset: [0, 4],
      overflow: {
        adjustX: t,
        adjustY: 1
      }
    },
    topLeft: {
      points: ["bl", "tl"],
      offset: [0, -4],
      overflow: {
        adjustX: t,
        adjustY: 1
      }
    },
    topRight: {
      points: ["br", "tr"],
      offset: [0, -4],
      overflow: {
        adjustX: t,
        adjustY: 1
      }
    }
  };
}, xn = re({
  name: "SelectTrigger",
  inheritAttrs: !1,
  props: {
    dropdownAlign: Object,
    visible: {
      type: Boolean,
      default: void 0
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    dropdownClassName: String,
    dropdownStyle: S.object,
    placement: String,
    empty: {
      type: Boolean,
      default: void 0
    },
    prefixCls: String,
    popupClassName: String,
    animation: String,
    transitionName: String,
    getPopupContainer: Function,
    dropdownRender: Function,
    containerWidth: Number,
    dropdownMatchSelectWidth: S.oneOfType([Number, Boolean]).def(!0),
    popupElement: S.any,
    direction: String,
    getTriggerDOMNode: Function,
    onPopupVisibleChange: Function,
    onPopupMouseEnter: Function,
    onPopupFocusin: Function,
    onPopupFocusout: Function
  },
  setup(e, t) {
    let {
      slots: n,
      attrs: o,
      expose: l
    } = t;
    const i = z(() => {
      const {
        dropdownMatchSelectWidth: r
      } = e;
      return wn(r);
    }), u = be();
    return l({
      getPopupElement: () => u.value
    }), () => {
      const r = h(h({}, e), o), {
        empty: g = !1
      } = r, a = yn(r, ["empty"]), {
        visible: d,
        dropdownAlign: m,
        prefixCls: c,
        popupElement: v,
        dropdownClassName: b,
        dropdownStyle: E,
        direction: M = "ltr",
        placement: w,
        dropdownMatchSelectWidth: x,
        containerWidth: $,
        dropdownRender: I,
        animation: F,
        transitionName: A,
        getPopupContainer: T,
        getTriggerDOMNode: H,
        onPopupVisibleChange: D,
        onPopupMouseEnter: B,
        onPopupFocusin: P,
        onPopupFocusout: O
      } = a, W = `${c}-dropdown`;
      let K = v;
      I && (K = I({
        menuNode: v,
        props: e
      }));
      const L = F ? `${W}-${F}` : A, Y = h({
        minWidth: `${$}px`
      }, E);
      return typeof x == "number" ? Y.width = `${x}px` : x && (Y.width = `${$}px`), y(jt, ee(ee({}, e), {}, {
        showAction: D ? ["click"] : [],
        hideAction: D ? ["click"] : [],
        popupPlacement: w || (M === "rtl" ? "bottomRight" : "bottomLeft"),
        builtinPlacements: i.value,
        prefixCls: W,
        popupTransitionName: L,
        popupAlign: m,
        popupVisible: d,
        getPopupContainer: T,
        popupClassName: oe(b, {
          [`${W}-empty`]: g
        }),
        popupStyle: Y,
        getTriggerDOMNode: H,
        onPopupVisibleChange: D
      }), {
        default: n.default,
        popup: () => y("div", {
          ref: u,
          onMouseenter: B,
          onFocusin: P,
          onFocusout: O
        }, [K])
      });
    };
  }
}), me = (e, t) => {
  let {
    slots: n
  } = t;
  var o;
  const {
    class: l,
    customizeIcon: i,
    customizeIconProps: u,
    onMousedown: r,
    onClick: g
  } = e;
  let a;
  return typeof i == "function" ? a = i(u) : a = en(i) ? ct(i) : i, y("span", {
    class: l,
    onMousedown: (d) => {
      d.preventDefault(), r && r(d);
    },
    style: {
      userSelect: "none",
      WebkitUserSelect: "none"
    },
    unselectable: "on",
    onClick: g,
    "aria-hidden": !0
  }, [a !== void 0 ? a : y("span", {
    class: l.split(/\s+/).map((d) => `${d}-icon`)
  }, [(o = n.default) === null || o === void 0 ? void 0 : o.call(n)])]);
};
me.inheritAttrs = !1;
me.displayName = "TransBtn";
me.props = {
  class: String,
  customizeIcon: S.any,
  customizeIconProps: S.any,
  onMousedown: Function,
  onClick: Function
};
const In = {
  inputRef: S.any,
  prefixCls: String,
  id: String,
  inputElement: S.VueNode,
  disabled: {
    type: Boolean,
    default: void 0
  },
  autofocus: {
    type: Boolean,
    default: void 0
  },
  autocomplete: String,
  editable: {
    type: Boolean,
    default: void 0
  },
  activeDescendantId: String,
  value: String,
  open: {
    type: Boolean,
    default: void 0
  },
  tabindex: S.oneOfType([S.number, S.string]),
  /** Pass accessibility props to input */
  attrs: S.object,
  onKeydown: {
    type: Function
  },
  onMousedown: {
    type: Function
  },
  onChange: {
    type: Function
  },
  onPaste: {
    type: Function
  },
  onCompositionstart: {
    type: Function
  },
  onCompositionend: {
    type: Function
  },
  onFocus: {
    type: Function
  },
  onBlur: {
    type: Function
  }
}, pt = re({
  compatConfig: {
    MODE: 3
  },
  name: "SelectInput",
  inheritAttrs: !1,
  props: In,
  setup(e) {
    let t = null;
    const n = We("VCSelectContainerEvent");
    return () => {
      var o;
      const {
        prefixCls: l,
        id: i,
        inputElement: u,
        disabled: r,
        tabindex: g,
        autofocus: a,
        autocomplete: d,
        editable: m,
        activeDescendantId: c,
        value: v,
        onKeydown: b,
        onMousedown: E,
        onChange: M,
        onPaste: w,
        onCompositionstart: x,
        onCompositionend: $,
        onFocus: I,
        onBlur: F,
        open: A,
        inputRef: T,
        attrs: H
      } = e;
      let D = u || y(rn, null, null);
      const B = D.props || {}, {
        onKeydown: P,
        onInput: O,
        onFocus: W,
        onBlur: K,
        onMousedown: L,
        onCompositionstart: Y,
        onCompositionend: te,
        style: se
      } = B;
      return D = st(D, h(h(h(h(h({
        type: "search"
      }, B), {
        id: i,
        ref: T,
        disabled: r,
        tabindex: g,
        autocomplete: d || "off",
        autofocus: a,
        class: oe(`${l}-selection-search-input`, (o = D == null ? void 0 : D.props) === null || o === void 0 ? void 0 : o.class),
        role: "combobox",
        "aria-expanded": A,
        "aria-haspopup": "listbox",
        "aria-owns": `${i}_list`,
        "aria-autocomplete": "list",
        "aria-controls": `${i}_list`,
        "aria-activedescendant": c
      }), H), {
        value: m ? v : "",
        readonly: !m,
        unselectable: m ? null : "on",
        style: h(h({}, se), {
          opacity: m ? null : 0
        }),
        onKeydown: (s) => {
          b(s), P && P(s);
        },
        onMousedown: (s) => {
          E(s), L && L(s);
        },
        onInput: (s) => {
          M(s), O && O(s);
        },
        onCompositionstart(s) {
          x(s), Y && Y(s);
        },
        onCompositionend(s) {
          $(s), te && te(s);
        },
        onPaste: w,
        onFocus: function() {
          clearTimeout(t), W && W(arguments.length <= 0 ? void 0 : arguments[0]), I && I(arguments.length <= 0 ? void 0 : arguments[0]), n == null || n.focus(arguments.length <= 0 ? void 0 : arguments[0]);
        },
        onBlur: function() {
          for (var s = arguments.length, C = new Array(s), N = 0; N < s; N++)
            C[N] = arguments[N];
          t = setTimeout(() => {
            K && K(C[0]), F && F(C[0]), n == null || n.blur(C[0]);
          }, 100);
        }
      }), D.type === "textarea" ? {} : {
        type: "search"
      }), !0, !0), D;
    };
  }
}), mt = Symbol("TreeSelectLegacyContextPropsKey");
function Fo(e) {
  return _e(mt, e);
}
function Ke() {
  return We(mt, {});
}
const Cn = {
  id: String,
  prefixCls: String,
  values: S.array,
  open: {
    type: Boolean,
    default: void 0
  },
  searchValue: String,
  inputRef: S.any,
  placeholder: S.any,
  disabled: {
    type: Boolean,
    default: void 0
  },
  mode: String,
  showSearch: {
    type: Boolean,
    default: void 0
  },
  autofocus: {
    type: Boolean,
    default: void 0
  },
  autocomplete: String,
  activeDescendantId: String,
  tabindex: S.oneOfType([S.number, S.string]),
  removeIcon: S.any,
  choiceTransitionName: String,
  maxTagCount: S.oneOfType([S.number, S.string]),
  maxTagTextLength: Number,
  maxTagPlaceholder: S.any.def(() => (e) => `+ ${e.length} ...`),
  tagRender: Function,
  onToggleOpen: {
    type: Function
  },
  onRemove: Function,
  onInputChange: Function,
  onInputPaste: Function,
  onInputKeyDown: Function,
  onInputMouseDown: Function,
  onInputCompositionStart: Function,
  onInputCompositionEnd: Function
}, lt = (e) => {
  e.preventDefault(), e.stopPropagation();
}, $n = re({
  name: "MultipleSelectSelector",
  inheritAttrs: !1,
  props: Cn,
  setup(e) {
    const t = V(), n = V(0), o = V(!1), l = Ke(), i = z(() => `${e.prefixCls}-selection`), u = z(() => e.open || e.mode === "tags" ? e.searchValue : ""), r = z(() => e.mode === "tags" || e.showSearch && (e.open || o.value));
    ae(() => {
      X(u, () => {
        n.value = t.value.scrollWidth;
      }, {
        flush: "post",
        immediate: !0
      });
    });
    function g(c, v, b, E, M) {
      return y("span", {
        class: oe(`${i.value}-item`, {
          [`${i.value}-item-disabled`]: b
        }),
        title: typeof c == "string" || typeof c == "number" ? c.toString() : void 0
      }, [y("span", {
        class: `${i.value}-item-content`
      }, [v]), E && y(me, {
        class: `${i.value}-item-remove`,
        onMousedown: lt,
        onClick: M,
        customizeIcon: e.removeIcon
      }, {
        default: () => [Ve("×")]
      })]);
    }
    function a(c, v, b, E, M, w) {
      var x;
      const $ = (F) => {
        lt(F), e.onToggleOpen(!open);
      };
      let I = w;
      return l.keyEntities && (I = ((x = l.keyEntities[c]) === null || x === void 0 ? void 0 : x.node) || {}), y("span", {
        key: c,
        onMousedown: $
      }, [e.tagRender({
        label: v,
        value: c,
        disabled: b,
        closable: E,
        onClose: M,
        option: I
      })]);
    }
    function d(c) {
      const {
        disabled: v,
        label: b,
        value: E,
        option: M
      } = c, w = !e.disabled && !v;
      let x = b;
      if (typeof e.maxTagTextLength == "number" && (typeof b == "string" || typeof b == "number")) {
        const I = String(x);
        I.length > e.maxTagTextLength && (x = `${I.slice(0, e.maxTagTextLength)}...`);
      }
      const $ = (I) => {
        var F;
        I && I.stopPropagation(), (F = e.onRemove) === null || F === void 0 || F.call(e, c);
      };
      return typeof e.tagRender == "function" ? a(E, x, v, w, $, M) : g(b, x, v, w, $);
    }
    function m(c) {
      const {
        maxTagPlaceholder: v = (E) => `+ ${E.length} ...`
      } = e, b = typeof v == "function" ? v(c) : v;
      return g(b, b, !1);
    }
    return () => {
      const {
        id: c,
        prefixCls: v,
        values: b,
        open: E,
        inputRef: M,
        placeholder: w,
        disabled: x,
        autofocus: $,
        autocomplete: I,
        activeDescendantId: F,
        tabindex: A,
        onInputChange: T,
        onInputPaste: H,
        onInputKeyDown: D,
        onInputMouseDown: B,
        onInputCompositionStart: P,
        onInputCompositionEnd: O
      } = e, W = y("div", {
        class: `${i.value}-search`,
        style: {
          width: n.value + "px"
        },
        key: "input"
      }, [y(pt, {
        inputRef: M,
        open: E,
        prefixCls: v,
        id: c,
        inputElement: null,
        disabled: x,
        autofocus: $,
        autocomplete: I,
        editable: r.value,
        activeDescendantId: F,
        value: u.value,
        onKeydown: D,
        onMousedown: B,
        onChange: T,
        onPaste: H,
        onCompositionstart: P,
        onCompositionend: O,
        tabindex: A,
        attrs: ft(e, !0),
        onFocus: () => o.value = !0,
        onBlur: () => o.value = !1
      }, null), y("span", {
        ref: t,
        class: `${i.value}-search-mirror`,
        "aria-hidden": !0
      }, [u.value, Ve(" ")])]), K = y(sn, {
        prefixCls: `${i.value}-overflow`,
        data: b,
        renderItem: d,
        renderRest: m,
        suffix: W,
        itemKey: "key",
        maxCount: e.maxTagCount,
        key: "overflow"
      }, null);
      return y($e, null, [K, !b.length && !u.value && y("span", {
        class: `${i.value}-placeholder`
      }, [w])]);
    };
  }
}), Tn = {
  inputElement: S.any,
  id: String,
  prefixCls: String,
  values: S.array,
  open: {
    type: Boolean,
    default: void 0
  },
  searchValue: String,
  inputRef: S.any,
  placeholder: S.any,
  disabled: {
    type: Boolean,
    default: void 0
  },
  mode: String,
  showSearch: {
    type: Boolean,
    default: void 0
  },
  autofocus: {
    type: Boolean,
    default: void 0
  },
  autocomplete: String,
  activeDescendantId: String,
  tabindex: S.oneOfType([S.number, S.string]),
  activeValue: String,
  backfill: {
    type: Boolean,
    default: void 0
  },
  optionLabelRender: Function,
  onInputChange: Function,
  onInputPaste: Function,
  onInputKeyDown: Function,
  onInputMouseDown: Function,
  onInputCompositionStart: Function,
  onInputCompositionEnd: Function
}, je = re({
  name: "SingleSelector",
  setup(e) {
    const t = V(!1), n = z(() => e.mode === "combobox"), o = z(() => n.value || e.showSearch), l = z(() => {
      let a = e.searchValue || "";
      return n.value && e.activeValue && !t.value && (a = e.activeValue), a;
    }), i = Ke();
    X([n, () => e.activeValue], () => {
      n.value && (t.value = !1);
    }, {
      immediate: !0
    });
    const u = z(() => e.mode !== "combobox" && !e.open && !e.showSearch ? !1 : !!l.value), r = z(() => {
      const a = e.values[0];
      return a && (typeof a.label == "string" || typeof a.label == "number") ? a.label.toString() : void 0;
    }), g = () => {
      if (e.values[0])
        return null;
      const a = u.value ? {
        visibility: "hidden"
      } : void 0;
      return y("span", {
        class: `${e.prefixCls}-selection-placeholder`,
        style: a
      }, [e.placeholder]);
    };
    return () => {
      var a, d, m, c;
      const {
        inputElement: v,
        prefixCls: b,
        id: E,
        values: M,
        inputRef: w,
        disabled: x,
        autofocus: $,
        autocomplete: I,
        activeDescendantId: F,
        open: A,
        tabindex: T,
        optionLabelRender: H,
        onInputKeyDown: D,
        onInputMouseDown: B,
        onInputChange: P,
        onInputPaste: O,
        onInputCompositionStart: W,
        onInputCompositionEnd: K
      } = e, L = M[0];
      let Y = null;
      if (L && i.customSlots) {
        const te = (a = L.key) !== null && a !== void 0 ? a : L.value, se = ((d = i.keyEntities[te]) === null || d === void 0 ? void 0 : d.node) || {};
        Y = i.customSlots[(m = se.slots) === null || m === void 0 ? void 0 : m.title] || i.customSlots.title || L.label, typeof Y == "function" && (Y = Y(se));
      } else
        Y = H && L ? H(L.option) : L == null ? void 0 : L.label;
      return y($e, null, [y("span", {
        class: `${b}-selection-search`
      }, [y(pt, {
        inputRef: w,
        prefixCls: b,
        id: E,
        open: A,
        inputElement: v,
        disabled: x,
        autofocus: $,
        autocomplete: I,
        editable: o.value,
        activeDescendantId: F,
        value: l.value,
        onKeydown: D,
        onMousedown: B,
        onChange: (te) => {
          t.value = !0, P(te);
        },
        onPaste: O,
        onCompositionstart: W,
        onCompositionend: K,
        tabindex: T,
        attrs: ft(e, !0)
      }, null)]), !n.value && L && !u.value && y("span", {
        class: `${b}-selection-item`,
        title: r.value
      }, [y($e, {
        key: (c = L.key) !== null && c !== void 0 ? c : L.value
      }, [Y])]), g()]);
    };
  }
});
je.props = Tn;
je.inheritAttrs = !1;
function Mn(e) {
  return ![
    // System function button
    R.ESC,
    R.SHIFT,
    R.BACKSPACE,
    R.TAB,
    R.WIN_KEY,
    R.ALT,
    R.META,
    R.WIN_KEY_RIGHT,
    R.CTRL,
    R.SEMICOLON,
    R.EQUALS,
    R.CAPS_LOCK,
    R.CONTEXT_MENU,
    // F1-F12
    R.F1,
    R.F2,
    R.F3,
    R.F4,
    R.F5,
    R.F6,
    R.F7,
    R.F8,
    R.F9,
    R.F10,
    R.F11,
    R.F12
  ].includes(e);
}
function ht() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 250, t = null, n;
  ye(() => {
    clearTimeout(n);
  });
  function o(l) {
    (l || t === null) && (t = l), clearTimeout(n), n = setTimeout(() => {
      t = null;
    }, e);
  }
  return [() => t, o];
}
function Te() {
  const e = (t) => {
    e.current = t;
  };
  return e;
}
const En = re({
  name: "Selector",
  inheritAttrs: !1,
  props: {
    id: String,
    prefixCls: String,
    showSearch: {
      type: Boolean,
      default: void 0
    },
    open: {
      type: Boolean,
      default: void 0
    },
    /** Display in the Selector value, it's not same as `value` prop */
    values: S.array,
    multiple: {
      type: Boolean,
      default: void 0
    },
    mode: String,
    searchValue: String,
    activeValue: String,
    inputElement: S.any,
    autofocus: {
      type: Boolean,
      default: void 0
    },
    activeDescendantId: String,
    tabindex: S.oneOfType([S.number, S.string]),
    disabled: {
      type: Boolean,
      default: void 0
    },
    placeholder: S.any,
    removeIcon: S.any,
    // Tags
    maxTagCount: S.oneOfType([S.number, S.string]),
    maxTagTextLength: Number,
    maxTagPlaceholder: S.any,
    tagRender: Function,
    optionLabelRender: Function,
    /** Check if `tokenSeparators` contains `\n` or `\r\n` */
    tokenWithEnter: {
      type: Boolean,
      default: void 0
    },
    // Motion
    choiceTransitionName: String,
    onToggleOpen: {
      type: Function
    },
    /** `onSearch` returns go next step boolean to check if need do toggle open */
    onSearch: Function,
    onSearchSubmit: Function,
    onRemove: Function,
    onInputKeyDown: {
      type: Function
    },
    /**
     * @private get real dom for trigger align.
     * This may be removed after React provides replacement of `findDOMNode`
     */
    domRef: Function
  },
  setup(e, t) {
    let {
      expose: n
    } = t;
    const o = Te();
    let l = !1;
    const [i, u] = ht(0), r = (w) => {
      const {
        which: x
      } = w;
      (x === R.UP || x === R.DOWN) && w.preventDefault(), e.onInputKeyDown && e.onInputKeyDown(w), x === R.ENTER && e.mode === "tags" && !l && !e.open && e.onSearchSubmit(w.target.value), Mn(x) && e.onToggleOpen(!0);
    }, g = () => {
      u(!0);
    };
    let a = null;
    const d = (w) => {
      e.onSearch(w, !0, l) !== !1 && e.onToggleOpen(!0);
    }, m = () => {
      l = !0;
    }, c = (w) => {
      l = !1, e.mode !== "combobox" && d(w.target.value);
    }, v = (w) => {
      let {
        target: {
          value: x
        }
      } = w;
      if (e.tokenWithEnter && a && /[\r\n]/.test(a)) {
        const $ = a.replace(/[\r\n]+$/, "").replace(/\r\n/g, " ").replace(/[\r\n]/g, " ");
        x = x.replace($, a);
      }
      a = null, d(x);
    }, b = (w) => {
      const {
        clipboardData: x
      } = w;
      a = x.getData("text");
    }, E = (w) => {
      let {
        target: x
      } = w;
      x !== o.current && (document.body.style.msTouchAction !== void 0 ? setTimeout(() => {
        o.current.focus();
      }) : o.current.focus());
    }, M = (w) => {
      const x = i();
      w.target !== o.current && !x && w.preventDefault(), (e.mode !== "combobox" && (!e.showSearch || !x) || !e.open) && (e.open && e.onSearch("", !0, !1), e.onToggleOpen());
    };
    return n({
      focus: () => {
        o.current.focus();
      },
      blur: () => {
        o.current.blur();
      }
    }), () => {
      const {
        prefixCls: w,
        domRef: x,
        mode: $
      } = e, I = {
        inputRef: o,
        onInputKeyDown: r,
        onInputMouseDown: g,
        onInputChange: v,
        onInputPaste: b,
        onInputCompositionStart: m,
        onInputCompositionEnd: c
      }, F = $ === "multiple" || $ === "tags" ? y($n, ee(ee({}, e), I), null) : y(je, ee(ee({}, e), I), null);
      return y("div", {
        ref: x,
        class: `${w}-selector`,
        onClick: E,
        onMousedown: M
      }, [F]);
    };
  }
});
function Rn(e, t, n) {
  function o(l) {
    var i, u, r;
    let g = l.target;
    g.shadowRoot && l.composed && (g = l.composedPath()[0] || g);
    const a = [(i = e[0]) === null || i === void 0 ? void 0 : i.value, (r = (u = e[1]) === null || u === void 0 ? void 0 : u.value) === null || r === void 0 ? void 0 : r.getPopupElement()];
    t.value && a.every((d) => d && !d.contains(g) && d !== g) && n(!1);
  }
  ae(() => {
    window.addEventListener("mousedown", o);
  }), ye(() => {
    window.removeEventListener("mousedown", o);
  });
}
function Fn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 10;
  const t = V(!1);
  let n;
  const o = () => {
    clearTimeout(n);
  };
  return ae(() => {
    o();
  }), [t, (i, u) => {
    o(), n = setTimeout(() => {
      t.value = i, u && u();
    }, e);
  }, o];
}
const gt = Symbol("BaseSelectContextKey");
function Pn(e) {
  return _e(gt, e);
}
function Po() {
  return We(gt, {});
}
function Dn(e) {
  if (!tn(e))
    return Se(e);
  const t = new Proxy({}, {
    get(n, o, l) {
      return Reflect.get(e.value, o, l);
    },
    set(n, o, l) {
      return e.value[o] = l, !0;
    },
    deleteProperty(n, o) {
      return Reflect.deleteProperty(e.value, o);
    },
    has(n, o) {
      return Reflect.has(e.value, o);
    },
    ownKeys() {
      return Object.keys(e.value);
    },
    getOwnPropertyDescriptor() {
      return {
        enumerable: !0,
        configurable: !0
      };
    }
  });
  return Se(t);
}
var On = function(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var l = 0, o = Object.getOwnPropertySymbols(e); l < o.length; l++)
      t.indexOf(o[l]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[l]) && (n[o[l]] = e[o[l]]);
  return n;
};
const Hn = ["value", "onChange", "removeIcon", "placeholder", "autofocus", "maxTagCount", "maxTagTextLength", "maxTagPlaceholder", "choiceTransitionName", "onInputKeyDown", "onPopupScroll", "tabindex", "OptionList", "notFoundContent"], Bn = () => ({
  prefixCls: String,
  id: String,
  omitDomProps: Array,
  // >>> Value
  displayValues: Array,
  onDisplayValuesChange: Function,
  // >>> Active
  /** Current dropdown list active item string value */
  activeValue: String,
  /** Link search input with target element */
  activeDescendantId: String,
  onActiveValueChange: Function,
  // >>> Search
  searchValue: String,
  /** Trigger onSearch, return false to prevent trigger open event */
  onSearch: Function,
  /** Trigger when search text match the `tokenSeparators`. Will provide split content */
  onSearchSplit: Function,
  maxLength: Number,
  OptionList: S.any,
  /** Tell if provided `options` is empty */
  emptyOptions: Boolean
}), Ln = () => ({
  showSearch: {
    type: Boolean,
    default: void 0
  },
  tagRender: {
    type: Function
  },
  optionLabelRender: {
    type: Function
  },
  direction: {
    type: String
  },
  // MISC
  tabindex: Number,
  autofocus: Boolean,
  notFoundContent: S.any,
  placeholder: S.any,
  onClear: Function,
  choiceTransitionName: String,
  // >>> Mode
  mode: String,
  // >>> Status
  disabled: {
    type: Boolean,
    default: void 0
  },
  loading: {
    type: Boolean,
    default: void 0
  },
  // >>> Open
  open: {
    type: Boolean,
    default: void 0
  },
  defaultOpen: {
    type: Boolean,
    default: void 0
  },
  onDropdownVisibleChange: {
    type: Function
  },
  // >>> Customize Input
  /** @private Internal usage. Do not use in your production. */
  getInputElement: {
    type: Function
  },
  /** @private Internal usage. Do not use in your production. */
  getRawInputElement: {
    type: Function
  },
  // >>> Selector
  maxTagTextLength: Number,
  maxTagCount: {
    type: [String, Number]
  },
  maxTagPlaceholder: S.any,
  // >>> Search
  tokenSeparators: {
    type: Array
  },
  // >>> Icons
  allowClear: {
    type: Boolean,
    default: void 0
  },
  showArrow: {
    type: Boolean,
    default: void 0
  },
  inputIcon: S.any,
  /** Clear all icon */
  clearIcon: S.any,
  /** Selector remove icon */
  removeIcon: S.any,
  // >>> Dropdown
  animation: String,
  transitionName: String,
  dropdownStyle: {
    type: Object
  },
  dropdownClassName: String,
  dropdownMatchSelectWidth: {
    type: [Boolean, Number],
    default: void 0
  },
  dropdownRender: {
    type: Function
  },
  dropdownAlign: Object,
  placement: {
    type: String
  },
  getPopupContainer: {
    type: Function
  },
  // >>> Focus
  showAction: {
    type: Array
  },
  onBlur: {
    type: Function
  },
  onFocus: {
    type: Function
  },
  // >>> Rest Events
  onKeyup: Function,
  onKeydown: Function,
  onMousedown: Function,
  onPopupScroll: Function,
  onInputKeyDown: Function,
  onMouseenter: Function,
  onMouseleave: Function,
  onClick: Function
}), Nn = () => h(h({}, Bn()), Ln());
function zn(e) {
  return e === "tags" || e === "multiple";
}
const Do = re({
  compatConfig: {
    MODE: 3
  },
  name: "BaseSelect",
  inheritAttrs: !1,
  props: Yt(Nn(), {
    showAction: [],
    notFoundContent: "Not Found"
  }),
  setup(e, t) {
    let {
      attrs: n,
      expose: o,
      slots: l
    } = t;
    const i = z(() => zn(e.mode)), u = z(() => e.showSearch !== void 0 ? e.showSearch : i.value || e.mode === "combobox"), r = V(!1);
    ae(() => {
      r.value = un();
    });
    const g = Ke(), a = V(null), d = Te(), m = V(null), c = V(null), v = V(null), b = be(!1), [E, M, w] = Fn();
    o({
      focus: () => {
        var f;
        (f = c.value) === null || f === void 0 || f.focus();
      },
      blur: () => {
        var f;
        (f = c.value) === null || f === void 0 || f.blur();
      },
      scrollTo: (f) => {
        var p;
        return (p = v.value) === null || p === void 0 ? void 0 : p.scrollTo(f);
      }
    });
    const I = z(() => {
      var f;
      if (e.mode !== "combobox")
        return e.searchValue;
      const p = (f = e.displayValues[0]) === null || f === void 0 ? void 0 : f.value;
      return typeof p == "string" || typeof p == "number" ? String(p) : "";
    }), F = e.open !== void 0 ? e.open : e.defaultOpen, A = V(F), T = V(F), H = (f) => {
      A.value = e.open !== void 0 ? e.open : f, T.value = A.value;
    };
    X(() => e.open, () => {
      H(e.open);
    });
    const D = z(() => !e.notFoundContent && e.emptyOptions);
    dt(() => {
      T.value = A.value, (e.disabled || D.value && T.value && e.mode === "combobox") && (T.value = !1);
    });
    const B = z(() => D.value ? !1 : T.value), P = (f) => {
      const p = f !== void 0 ? f : !T.value;
      T.value !== p && !e.disabled && (H(p), e.onDropdownVisibleChange && e.onDropdownVisibleChange(p));
    }, O = z(() => (e.tokenSeparators || []).some((f) => [`
`, `\r
`].includes(f))), W = (f, p, _) => {
      var j, Z;
      let U = !0, J = f;
      (j = e.onActiveValueChange) === null || j === void 0 || j.call(e, null);
      const G = _ ? null : Sn(f, e.tokenSeparators);
      return e.mode !== "combobox" && G && (J = "", (Z = e.onSearchSplit) === null || Z === void 0 || Z.call(e, G), P(!1), U = !1), e.onSearch && I.value !== J && e.onSearch(J, {
        source: p ? "typing" : "effect"
      }), U;
    }, K = (f) => {
      var p;
      !f || !f.trim() || (p = e.onSearch) === null || p === void 0 || p.call(e, f, {
        source: "submit"
      });
    };
    X(T, () => {
      !T.value && !i.value && e.mode !== "combobox" && W("", !1, !1);
    }, {
      immediate: !0,
      flush: "post"
    }), X(() => e.disabled, () => {
      A.value && e.disabled && H(!1), e.disabled && !b.value && M(!1);
    }, {
      immediate: !0
    });
    const [L, Y] = ht(), te = function(f) {
      var p;
      const _ = L(), {
        which: j
      } = f;
      if (j === R.ENTER && (e.mode !== "combobox" && f.preventDefault(), T.value || P(!0)), Y(!!I.value), j === R.BACKSPACE && !_ && i.value && !I.value && e.displayValues.length) {
        const G = [...e.displayValues];
        let ce = null;
        for (let k = G.length - 1; k >= 0; k -= 1) {
          const de = G[k];
          if (!de.disabled) {
            G.splice(k, 1), ce = de;
            break;
          }
        }
        ce && e.onDisplayValuesChange(G, {
          type: "remove",
          values: [ce]
        });
      }
      for (var Z = arguments.length, U = new Array(Z > 1 ? Z - 1 : 0), J = 1; J < Z; J++)
        U[J - 1] = arguments[J];
      T.value && v.value && v.value.onKeydown(f, ...U), (p = e.onKeydown) === null || p === void 0 || p.call(e, f, ...U);
    }, se = function(f) {
      for (var p = arguments.length, _ = new Array(p > 1 ? p - 1 : 0), j = 1; j < p; j++)
        _[j - 1] = arguments[j];
      T.value && v.value && v.value.onKeyup(f, ..._), e.onKeyup && e.onKeyup(f, ..._);
    }, s = (f) => {
      const p = e.displayValues.filter((_) => _ !== f);
      e.onDisplayValuesChange(p, {
        type: "remove",
        values: [f]
      });
    }, C = V(!1), N = function() {
      M(!0), e.disabled || (e.onFocus && !C.value && e.onFocus(...arguments), e.showAction && e.showAction.includes("focus") && P(!0)), C.value = !0;
    }, Q = be(!1), he = function() {
      if (Q.value || (b.value = !0, M(!1, () => {
        C.value = !1, b.value = !1, P(!1);
      }), e.disabled))
        return;
      const f = I.value;
      f && (e.mode === "tags" ? e.onSearch(f, {
        source: "submit"
      }) : e.mode === "multiple" && e.onSearch("", {
        source: "blur"
      })), e.onBlur && e.onBlur(...arguments);
    }, Ee = () => {
      Q.value = !0;
    }, we = () => {
      Q.value = !1;
    };
    _e("VCSelectContainerEvent", {
      focus: N,
      blur: he
    });
    const q = [];
    ae(() => {
      q.forEach((f) => clearTimeout(f)), q.splice(0, q.length);
    }), ye(() => {
      q.forEach((f) => clearTimeout(f)), q.splice(0, q.length);
    });
    const xe = function(f) {
      var p, _;
      const {
        target: j
      } = f, Z = (p = m.value) === null || p === void 0 ? void 0 : p.getPopupElement();
      if (Z && Z.contains(j)) {
        const ce = setTimeout(() => {
          var k;
          const de = q.indexOf(ce);
          de !== -1 && q.splice(de, 1), w(), !r.value && !Z.contains(document.activeElement) && ((k = c.value) === null || k === void 0 || k.focus());
        });
        q.push(ce);
      }
      for (var U = arguments.length, J = new Array(U > 1 ? U - 1 : 0), G = 1; G < U; G++)
        J[G - 1] = arguments[G];
      (_ = e.onMousedown) === null || _ === void 0 || _.call(e, f, ...J);
    }, ge = V(null), ue = () => {
    };
    return ae(() => {
      X(B, () => {
        var f;
        if (B.value) {
          const p = Math.ceil((f = a.value) === null || f === void 0 ? void 0 : f.offsetWidth);
          ge.value !== p && !Number.isNaN(p) && (ge.value = p);
        }
      }, {
        immediate: !0,
        flush: "post"
      });
    }), Rn([a, m], B, P), Pn(Dn(h(h({}, nn(e)), {
      open: T,
      triggerOpen: B,
      showSearch: u,
      multiple: i,
      toggleOpen: P
    }))), () => {
      const f = h(h({}, e), n), {
        prefixCls: p,
        id: _,
        open: j,
        defaultOpen: Z,
        mode: U,
        // Search related
        showSearch: J,
        searchValue: G,
        onSearch: ce,
        // Icons
        allowClear: k,
        clearIcon: de,
        showArrow: Ye,
        inputIcon: yt,
        // Others
        disabled: Re,
        loading: Ie,
        getInputElement: Ue,
        getPopupContainer: wt,
        placement: xt,
        // Dropdown
        animation: It,
        transitionName: Ct,
        dropdownStyle: $t,
        dropdownClassName: Tt,
        dropdownMatchSelectWidth: Mt,
        dropdownRender: Et,
        dropdownAlign: Rt,
        showAction: ao,
        direction: Ft,
        // Tags
        tokenSeparators: ro,
        tagRender: Pt,
        optionLabelRender: Dt,
        // Events
        onPopupScroll: so,
        onDropdownVisibleChange: uo,
        onFocus: co,
        onBlur: fo,
        onKeyup: po,
        onKeydown: mo,
        onMousedown: ho,
        onClear: Fe,
        omitDomProps: Pe,
        getRawInputElement: Xe,
        displayValues: Ce,
        onDisplayValuesChange: Ot,
        emptyOptions: Ht,
        activeDescendantId: Bt,
        activeValue: Lt,
        OptionList: Nt
      } = f, zt = On(f, ["prefixCls", "id", "open", "defaultOpen", "mode", "showSearch", "searchValue", "onSearch", "allowClear", "clearIcon", "showArrow", "inputIcon", "disabled", "loading", "getInputElement", "getPopupContainer", "placement", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "showAction", "direction", "tokenSeparators", "tagRender", "optionLabelRender", "onPopupScroll", "onDropdownVisibleChange", "onFocus", "onBlur", "onKeyup", "onKeydown", "onMousedown", "onClear", "omitDomProps", "getRawInputElement", "displayValues", "onDisplayValuesChange", "emptyOptions", "activeDescendantId", "activeValue", "OptionList"]), Ge = U === "combobox" && Ue && Ue() || null, ve = typeof Xe == "function" && Xe(), De = h({}, zt);
      let Qe;
      ve && (Qe = (fe) => {
        P(fe);
      }), Hn.forEach((fe) => {
        delete De[fe];
      }), Pe == null || Pe.forEach((fe) => {
        delete De[fe];
      });
      const qe = Ye !== void 0 ? Ye : Ie || !i.value && U !== "combobox";
      let Ze;
      qe && (Ze = y(me, {
        class: oe(`${p}-arrow`, {
          [`${p}-arrow-loading`]: Ie
        }),
        customizeIcon: yt,
        customizeIconProps: {
          loading: Ie,
          searchValue: I.value,
          open: T.value,
          focused: E.value,
          showSearch: u.value
        }
      }, null));
      let Je;
      const Vt = () => {
        Fe == null || Fe(), Ot([], {
          type: "clear",
          values: Ce
        }), W("", !1, !1);
      };
      !Re && k && (Ce.length || I.value) && (Je = y(me, {
        class: `${p}-clear`,
        onMousedown: Vt,
        customizeIcon: de
      }, {
        default: () => [Ve("×")]
      }));
      const At = y(Nt, {
        ref: v
      }, h(h({}, g.customSlots), {
        option: l.option
      })), Wt = oe(p, n.class, {
        [`${p}-focused`]: E.value,
        [`${p}-multiple`]: i.value,
        [`${p}-single`]: !i.value,
        [`${p}-allow-clear`]: k,
        [`${p}-show-arrow`]: qe,
        [`${p}-disabled`]: Re,
        [`${p}-loading`]: Ie,
        [`${p}-open`]: T.value,
        [`${p}-customize-input`]: Ge,
        [`${p}-show-search`]: u.value
      }), ke = y(xn, {
        ref: m,
        disabled: Re,
        prefixCls: p,
        visible: B.value,
        popupElement: At,
        containerWidth: ge.value,
        animation: It,
        transitionName: Ct,
        dropdownStyle: $t,
        dropdownClassName: Tt,
        direction: Ft,
        dropdownMatchSelectWidth: Mt,
        dropdownRender: Et,
        dropdownAlign: Rt,
        placement: xt,
        getPopupContainer: wt,
        empty: Ht,
        getTriggerDOMNode: () => d.current,
        onPopupVisibleChange: Qe,
        onPopupMouseEnter: ue,
        onPopupFocusin: Ee,
        onPopupFocusout: we
      }, {
        default: () => ve ? Ut(ve) && st(ve, {
          ref: d
        }, !1, !0) : y(En, ee(ee({}, e), {}, {
          domRef: d,
          prefixCls: p,
          inputElement: Ge,
          ref: c,
          id: _,
          showSearch: u.value,
          mode: U,
          activeDescendantId: Bt,
          tagRender: Pt,
          optionLabelRender: Dt,
          values: Ce,
          open: T.value,
          onToggleOpen: P,
          activeValue: Lt,
          searchValue: I.value,
          onSearch: W,
          onSearchSubmit: K,
          onRemove: s,
          tokenWithEnter: O.value
        }), null)
      });
      let Oe;
      return ve ? Oe = ke : Oe = y("div", ee(ee({}, De), {}, {
        class: Wt,
        ref: a,
        onMousedown: xe,
        onKeydown: te,
        onKeyup: se
      }), [E.value && !T.value && y("span", {
        style: {
          width: 0,
          height: 0,
          position: "absolute",
          overflow: "hidden",
          opacity: 0
        },
        "aria-live": "polite"
      }, [`${Ce.map((fe) => {
        let {
          label: et,
          value: _t
        } = fe;
        return ["number", "string"].includes(typeof et) ? et : _t;
      }).join(", ")}`]), ke, Ze, Je]), Oe;
    };
  }
}), Me = (e, t) => {
  let {
    height: n,
    offset: o,
    prefixCls: l,
    onInnerResize: i
  } = e, {
    slots: u
  } = t;
  var r;
  let g = {}, a = {
    display: "flex",
    flexDirection: "column"
  };
  return o !== void 0 && (g = {
    height: `${n}px`,
    position: "relative",
    overflow: "hidden"
  }, a = h(h({}, a), {
    transform: `translateY(${o}px)`,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0
  })), y("div", {
    style: g
  }, [y(dn, {
    onResize: (d) => {
      let {
        offsetHeight: m
      } = d;
      m && i && i();
    }
  }, {
    default: () => [y("div", {
      style: a,
      class: oe({
        [`${l}-holder-inner`]: l
      })
    }, [(r = u.default) === null || r === void 0 ? void 0 : r.call(u)])]
  })]);
};
Me.displayName = "Filter";
Me.inheritAttrs = !1;
Me.props = {
  prefixCls: String,
  /** Virtual filler height. Should be `count * itemMinHeight` */
  height: Number,
  /** Set offset of visible items. Should be the top of start item position */
  offset: Number,
  onInnerResize: Function
};
const vt = (e, t) => {
  let {
    setRef: n
  } = e, {
    slots: o
  } = t;
  var l;
  const i = Xt((l = o.default) === null || l === void 0 ? void 0 : l.call(o));
  return i && i.length ? ct(i[0], {
    ref: n
  }) : i;
};
vt.props = {
  setRef: {
    type: Function,
    default: () => {
    }
  }
};
const Vn = 20;
function it(e) {
  return "touches" in e ? e.touches[0].pageY : e.pageY;
}
const An = re({
  compatConfig: {
    MODE: 3
  },
  name: "ScrollBar",
  inheritAttrs: !1,
  props: {
    prefixCls: String,
    scrollTop: Number,
    scrollHeight: Number,
    height: Number,
    count: Number,
    onScroll: {
      type: Function
    },
    onStartMove: {
      type: Function
    },
    onStopMove: {
      type: Function
    }
  },
  setup() {
    return {
      moveRaf: null,
      scrollbarRef: Te(),
      thumbRef: Te(),
      visibleTimeout: null,
      state: Se({
        dragging: !1,
        pageY: null,
        startTop: null,
        visible: !1
      })
    };
  },
  watch: {
    scrollTop: {
      handler() {
        this.delayHidden();
      },
      flush: "post"
    }
  },
  mounted() {
    var e, t;
    (e = this.scrollbarRef.current) === null || e === void 0 || e.addEventListener("touchstart", this.onScrollbarTouchStart, le ? {
      passive: !1
    } : !1), (t = this.thumbRef.current) === null || t === void 0 || t.addEventListener("touchstart", this.onMouseDown, le ? {
      passive: !1
    } : !1);
  },
  beforeUnmount() {
    this.removeEvents(), clearTimeout(this.visibleTimeout);
  },
  methods: {
    delayHidden() {
      clearTimeout(this.visibleTimeout), this.state.visible = !0, this.visibleTimeout = setTimeout(() => {
        this.state.visible = !1;
      }, 2e3);
    },
    onScrollbarTouchStart(e) {
      e.preventDefault();
    },
    onContainerMouseDown(e) {
      e.stopPropagation(), e.preventDefault();
    },
    // ======================= Clean =======================
    patchEvents() {
      window.addEventListener("mousemove", this.onMouseMove), window.addEventListener("mouseup", this.onMouseUp), this.thumbRef.current.addEventListener("touchmove", this.onMouseMove, le ? {
        passive: !1
      } : !1), this.thumbRef.current.addEventListener("touchend", this.onMouseUp);
    },
    removeEvents() {
      window.removeEventListener("mousemove", this.onMouseMove), window.removeEventListener("mouseup", this.onMouseUp), this.scrollbarRef.current.removeEventListener("touchstart", this.onScrollbarTouchStart, le ? {
        passive: !1
      } : !1), this.thumbRef.current && (this.thumbRef.current.removeEventListener("touchstart", this.onMouseDown, le ? {
        passive: !1
      } : !1), this.thumbRef.current.removeEventListener("touchmove", this.onMouseMove, le ? {
        passive: !1
      } : !1), this.thumbRef.current.removeEventListener("touchend", this.onMouseUp)), ne.cancel(this.moveRaf);
    },
    // ======================= Thumb =======================
    onMouseDown(e) {
      const {
        onStartMove: t
      } = this.$props;
      h(this.state, {
        dragging: !0,
        pageY: it(e),
        startTop: this.getTop()
      }), t(), this.patchEvents(), e.stopPropagation(), e.preventDefault();
    },
    onMouseMove(e) {
      const {
        dragging: t,
        pageY: n,
        startTop: o
      } = this.state, {
        onScroll: l
      } = this.$props;
      if (ne.cancel(this.moveRaf), t) {
        const i = it(e) - n, u = o + i, r = this.getEnableScrollRange(), g = this.getEnableHeightRange(), a = g ? u / g : 0, d = Math.ceil(a * r);
        this.moveRaf = ne(() => {
          l(d);
        });
      }
    },
    onMouseUp() {
      const {
        onStopMove: e
      } = this.$props;
      this.state.dragging = !1, e(), this.removeEvents();
    },
    // ===================== Calculate =====================
    getSpinHeight() {
      const {
        height: e,
        scrollHeight: t
      } = this.$props;
      let n = e / t * 100;
      return n = Math.max(n, Vn), n = Math.min(n, e / 2), Math.floor(n);
    },
    getEnableScrollRange() {
      const {
        scrollHeight: e,
        height: t
      } = this.$props;
      return e - t || 0;
    },
    getEnableHeightRange() {
      const {
        height: e
      } = this.$props, t = this.getSpinHeight();
      return e - t || 0;
    },
    getTop() {
      const {
        scrollTop: e
      } = this.$props, t = this.getEnableScrollRange(), n = this.getEnableHeightRange();
      return e === 0 || t === 0 ? 0 : e / t * n;
    },
    // Not show scrollbar when height is large than scrollHeight
    showScroll() {
      const {
        height: e,
        scrollHeight: t
      } = this.$props;
      return t > e;
    }
  },
  render() {
    const {
      dragging: e,
      visible: t
    } = this.state, {
      prefixCls: n
    } = this.$props, o = this.getSpinHeight() + "px", l = this.getTop() + "px", i = this.showScroll(), u = i && t;
    return y("div", {
      ref: this.scrollbarRef,
      class: oe(`${n}-scrollbar`, {
        [`${n}-scrollbar-show`]: i
      }),
      style: {
        width: "8px",
        top: 0,
        bottom: 0,
        right: 0,
        position: "absolute",
        display: u ? void 0 : "none"
      },
      onMousedown: this.onContainerMouseDown,
      onMousemove: this.delayHidden
    }, [y("div", {
      ref: this.thumbRef,
      class: oe(`${n}-scrollbar-thumb`, {
        [`${n}-scrollbar-thumb-moving`]: e
      }),
      style: {
        width: "100%",
        height: o,
        top: l,
        left: 0,
        position: "absolute",
        background: "rgba(0, 0, 0, 0.5)",
        borderRadius: "99px",
        cursor: "pointer",
        userSelect: "none"
      },
      onMousedown: this.onMouseDown
    }, null)]);
  }
});
function Wn(e, t, n, o) {
  const l = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), u = be(Symbol("update"));
  X(e, () => {
    u.value = Symbol("update");
  });
  let r;
  function g() {
    ne.cancel(r);
  }
  function a() {
    g(), r = ne(() => {
      l.forEach((m, c) => {
        if (m && m.offsetParent) {
          const {
            offsetHeight: v
          } = m;
          i.get(c) !== v && (u.value = Symbol("update"), i.set(c, m.offsetHeight));
        }
      });
    });
  }
  function d(m, c) {
    const v = t(m);
    l.get(v), c ? (l.set(v, c.$el || c), a()) : l.delete(v);
  }
  return on(() => {
    g();
  }), [d, a, i, u];
}
function _n(e, t, n, o, l, i, u, r) {
  let g;
  return (a) => {
    if (a == null) {
      r();
      return;
    }
    ne.cancel(g);
    const d = t.value, m = o.itemHeight;
    if (typeof a == "number")
      u(a);
    else if (a && typeof a == "object") {
      let c;
      const {
        align: v
      } = a;
      "index" in a ? {
        index: c
      } = a : c = d.findIndex((M) => l(M) === a.key);
      const {
        offset: b = 0
      } = a, E = (M, w) => {
        if (M < 0 || !e.value)
          return;
        const x = e.value.clientHeight;
        let $ = !1, I = w;
        if (x) {
          const F = w || v;
          let A = 0, T = 0, H = 0;
          const D = Math.min(d.length, c);
          for (let O = 0; O <= D; O += 1) {
            const W = l(d[O]);
            T = A;
            const K = n.get(W);
            H = T + (K === void 0 ? m : K), A = H, O === c && K === void 0 && ($ = !0);
          }
          const B = e.value.scrollTop;
          let P = null;
          switch (F) {
            case "top":
              P = T - b;
              break;
            case "bottom":
              P = H - x + b;
              break;
            default: {
              const O = B + x;
              T < B ? I = "top" : H > O && (I = "bottom");
            }
          }
          P !== null && P !== B && u(P);
        }
        g = ne(() => {
          $ && i(), E(M - 1, I);
        }, 2);
      };
      E(5);
    }
  };
}
const Kn = typeof navigator == "object" && /Firefox/i.test(navigator.userAgent), bt = (e, t) => {
  let n = !1, o = null;
  function l() {
    clearTimeout(o), n = !0, o = setTimeout(() => {
      n = !1;
    }, 50);
  }
  return function(i) {
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    const r = (
      // Pass origin wheel when on the top
      i < 0 && e.value || // Pass origin wheel when on the bottom
      i > 0 && t.value
    );
    return u && r ? (clearTimeout(o), n = !1) : (!r || n) && l(), !n && r;
  };
};
function jn(e, t, n, o) {
  let l = 0, i = null, u = null, r = !1;
  const g = bt(t, n);
  function a(m) {
    if (!e.value)
      return;
    ne.cancel(i);
    const {
      deltaY: c
    } = m;
    l += c, u = c, !g(c) && (Kn || m.preventDefault(), i = ne(() => {
      o(l * (r ? 10 : 1)), l = 0;
    }));
  }
  function d(m) {
    e.value && (r = m.detail === u);
  }
  return [a, d];
}
const Yn = 14 / 15;
function Un(e, t, n) {
  let o = !1, l = 0, i = null, u = null;
  const r = () => {
    i && (i.removeEventListener("touchmove", g), i.removeEventListener("touchend", a));
  }, g = (c) => {
    if (o) {
      const v = Math.ceil(c.touches[0].pageY);
      let b = l - v;
      l = v, n(b) && c.preventDefault(), clearInterval(u), u = setInterval(() => {
        b *= Yn, (!n(b, !0) || Math.abs(b) <= 0.1) && clearInterval(u);
      }, 16);
    }
  }, a = () => {
    o = !1, r();
  }, d = (c) => {
    r(), c.touches.length === 1 && !o && (o = !0, l = Math.ceil(c.touches[0].pageY), i = c.target, i.addEventListener("touchmove", g, {
      passive: !1
    }), i.addEventListener("touchend", a));
  }, m = () => {
  };
  ae(() => {
    document.addEventListener("touchmove", m, {
      passive: !1
    }), X(e, (c) => {
      t.value.removeEventListener("touchstart", d), r(), clearInterval(u), c && t.value.addEventListener("touchstart", d, {
        passive: !1
      });
    }, {
      immediate: !0
    });
  }), ye(() => {
    document.removeEventListener("touchmove", m);
  });
}
var Xn = function(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var l = 0, o = Object.getOwnPropertySymbols(e); l < o.length; l++)
      t.indexOf(o[l]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[l]) && (n[o[l]] = e[o[l]]);
  return n;
};
const Gn = [], Qn = {
  overflowY: "auto",
  overflowAnchor: "none"
};
function qn(e, t, n, o, l, i) {
  let {
    getKey: u
  } = i;
  return e.slice(t, n + 1).map((r, g) => {
    const a = t + g, d = l(r, a, {
      // style: status === 'MEASURE_START' ? { visibility: 'hidden' } : {},
    }), m = u(r);
    return y(vt, {
      key: m,
      setRef: (c) => o(r, c)
    }, {
      default: () => [d]
    });
  });
}
const Oo = re({
  compatConfig: {
    MODE: 3
  },
  name: "List",
  inheritAttrs: !1,
  props: {
    prefixCls: String,
    data: S.array,
    height: Number,
    itemHeight: Number,
    /** If not match virtual scroll condition, Set List still use height of container. */
    fullHeight: {
      type: Boolean,
      default: void 0
    },
    itemKey: {
      type: [String, Number, Function],
      required: !0
    },
    component: {
      type: [String, Object]
    },
    /** Set `false` will always use real scroll instead of virtual one */
    virtual: {
      type: Boolean,
      default: void 0
    },
    children: Function,
    onScroll: Function,
    onMousedown: Function,
    onMouseenter: Function,
    onVisibleChange: Function
  },
  setup(e, t) {
    let {
      expose: n
    } = t;
    const o = z(() => {
      const {
        height: s,
        itemHeight: C,
        virtual: N
      } = e;
      return !!(N !== !1 && s && C);
    }), l = z(() => {
      const {
        height: s,
        itemHeight: C,
        data: N
      } = e;
      return o.value && N && C * N.length > s;
    }), i = Se({
      scrollTop: 0,
      scrollMoving: !1
    }), u = z(() => e.data || Gn), r = V([]);
    X(u, () => {
      r.value = ln(u.value).slice();
    }, {
      immediate: !0
    });
    const g = V((s) => {
    });
    X(() => e.itemKey, (s) => {
      typeof s == "function" ? g.value = s : g.value = (C) => C == null ? void 0 : C[s];
    }, {
      immediate: !0
    });
    const a = V(), d = V(), m = V(), c = (s) => g.value(s), v = {
      getKey: c
    };
    function b(s) {
      let C;
      typeof s == "function" ? C = s(i.scrollTop) : C = s;
      const N = A(C);
      a.value && (a.value.scrollTop = N), i.scrollTop = N;
    }
    const [E, M, w, x] = Wn(r, c), $ = Se({
      scrollHeight: void 0,
      start: 0,
      end: 0,
      offset: void 0
    }), I = V(0);
    ae(() => {
      He(() => {
        var s;
        I.value = ((s = d.value) === null || s === void 0 ? void 0 : s.offsetHeight) || 0;
      });
    }), an(() => {
      He(() => {
        var s;
        I.value = ((s = d.value) === null || s === void 0 ? void 0 : s.offsetHeight) || 0;
      });
    }), X([o, r], () => {
      o.value || h($, {
        scrollHeight: void 0,
        start: 0,
        end: r.value.length - 1,
        offset: void 0
      });
    }, {
      immediate: !0
    }), X([o, r, I, l], () => {
      o.value && !l.value && h($, {
        scrollHeight: I.value,
        start: 0,
        end: r.value.length - 1,
        offset: void 0
      }), a.value && (i.scrollTop = a.value.scrollTop);
    }, {
      immediate: !0
    }), X([l, o, () => i.scrollTop, r, x, () => e.height, I], () => {
      if (!o.value || !l.value)
        return;
      let s = 0, C, N, Q;
      const he = r.value.length, Ee = r.value, we = i.scrollTop, {
        itemHeight: q,
        height: xe
      } = e, ge = we + xe;
      for (let ue = 0; ue < he; ue += 1) {
        const f = Ee[ue], p = c(f);
        let _ = w.get(p);
        _ === void 0 && (_ = q);
        const j = s + _;
        C === void 0 && j >= we && (C = ue, N = s), Q === void 0 && j > ge && (Q = ue), s = j;
      }
      C === void 0 && (C = 0, N = 0, Q = Math.ceil(xe / q)), Q === void 0 && (Q = he - 1), Q = Math.min(Q + 1, he), h($, {
        scrollHeight: s,
        start: C,
        end: Q,
        offset: N
      });
    }, {
      immediate: !0
    });
    const F = z(() => $.scrollHeight - e.height);
    function A(s) {
      let C = s;
      return Number.isNaN(F.value) || (C = Math.min(C, F.value)), C = Math.max(C, 0), C;
    }
    const T = z(() => i.scrollTop <= 0), H = z(() => i.scrollTop >= F.value), D = bt(T, H);
    function B(s) {
      b(s);
    }
    function P(s) {
      var C;
      const {
        scrollTop: N
      } = s.currentTarget;
      N !== i.scrollTop && b(N), (C = e.onScroll) === null || C === void 0 || C.call(e, s);
    }
    const [O, W] = jn(o, T, H, (s) => {
      b((C) => C + s);
    });
    Un(o, a, (s, C) => D(s, C) ? !1 : (O({
      preventDefault() {
      },
      deltaY: s
    }), !0));
    function K(s) {
      o.value && s.preventDefault();
    }
    const L = () => {
      a.value && (a.value.removeEventListener("wheel", O, le ? {
        passive: !1
      } : !1), a.value.removeEventListener("DOMMouseScroll", W), a.value.removeEventListener("MozMousePixelScroll", K));
    };
    dt(() => {
      He(() => {
        a.value && (L(), a.value.addEventListener("wheel", O, le ? {
          passive: !1
        } : !1), a.value.addEventListener("DOMMouseScroll", W), a.value.addEventListener("MozMousePixelScroll", K));
      });
    }), ye(() => {
      L();
    });
    const Y = _n(a, r, w, e, c, M, b, () => {
      var s;
      (s = m.value) === null || s === void 0 || s.delayHidden();
    });
    n({
      scrollTo: Y
    });
    const te = z(() => {
      let s = null;
      return e.height && (s = h({
        [e.fullHeight ? "height" : "maxHeight"]: e.height + "px"
      }, Qn), o.value && (s.overflowY = "hidden", i.scrollMoving && (s.pointerEvents = "none"))), s;
    });
    return X([() => $.start, () => $.end, r], () => {
      if (e.onVisibleChange) {
        const s = r.value.slice($.start, $.end + 1);
        e.onVisibleChange(s, r.value);
      }
    }, {
      flush: "post"
    }), {
      state: i,
      mergedData: r,
      componentStyle: te,
      onFallbackScroll: P,
      onScrollBar: B,
      componentRef: a,
      useVirtual: o,
      calRes: $,
      collectHeight: M,
      setInstance: E,
      sharedConfig: v,
      scrollBarRef: m,
      fillerInnerRef: d,
      delayHideScrollBar: () => {
        var s;
        (s = m.value) === null || s === void 0 || s.delayHidden();
      }
    };
  },
  render() {
    const e = h(h({}, this.$props), this.$attrs), {
      prefixCls: t = "rc-virtual-list",
      height: n,
      itemHeight: o,
      // eslint-disable-next-line no-unused-vars
      fullHeight: l,
      data: i,
      itemKey: u,
      virtual: r,
      component: g = "div",
      onScroll: a,
      children: d = this.$slots.default,
      style: m,
      class: c
    } = e, v = Xn(e, ["prefixCls", "height", "itemHeight", "fullHeight", "data", "itemKey", "virtual", "component", "onScroll", "children", "style", "class"]), b = oe(t, c), {
      scrollTop: E
    } = this.state, {
      scrollHeight: M,
      offset: w,
      start: x,
      end: $
    } = this.calRes, {
      componentStyle: I,
      onFallbackScroll: F,
      onScrollBar: A,
      useVirtual: T,
      collectHeight: H,
      sharedConfig: D,
      setInstance: B,
      mergedData: P,
      delayHideScrollBar: O
    } = this;
    return y("div", ee({
      style: h(h({}, m), {
        position: "relative"
      }),
      class: b
    }, v), [y(g, {
      class: `${t}-holder`,
      style: I,
      ref: "componentRef",
      onScroll: F,
      onMouseenter: O
    }, {
      default: () => [y(Me, {
        prefixCls: t,
        height: M,
        offset: w,
        onInnerResize: H,
        ref: "fillerInnerRef"
      }, {
        default: () => qn(P, x, $, B, d, D)
      })]
    }), T && y(An, {
      ref: "scrollBarRef",
      prefixCls: t,
      scrollTop: E,
      height: n,
      scrollHeight: M,
      count: P.length,
      onScroll: A,
      onStartMove: () => {
        this.state.scrollMoving = !0;
      },
      onStopMove: () => {
        this.state.scrollMoving = !1;
      }
    }, null)]);
  }
});
let at = 0;
const Zn = process.env.NODE_ENV !== "test" && Gt();
function Jn() {
  let e;
  return Zn ? (e = at, at += 1) : e = "TEST_OR_SSR", e;
}
function Ho() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : be("");
  const t = `rc_select_${Jn()}`;
  return e.value || t;
}
function Bo(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    loading: n,
    multiple: o,
    prefixCls: l,
    hasFeedback: i,
    feedbackIcon: u,
    showArrow: r
  } = e, g = e.suffixIcon || t.suffixIcon && t.suffixIcon(), a = e.clearIcon || t.clearIcon && t.clearIcon(), d = e.menuItemSelectedIcon || t.menuItemSelectedIcon && t.menuItemSelectedIcon(), m = e.removeIcon || t.removeIcon && t.removeIcon(), c = a ?? y(Qt, null, null), v = (w) => y($e, null, [r !== !1 && w, i && u]);
  let b = null;
  if (g !== void 0)
    b = v(g);
  else if (n)
    b = v(y(qt, {
      spin: !0
    }, null));
  else {
    const w = `${l}-suffix`;
    b = (x) => {
      let {
        open: $,
        showSearch: I
      } = x;
      return v($ && I ? y(pn, {
        class: w
      }, null) : y(cn, {
        class: w
      }, null));
    };
  }
  let E = null;
  d !== void 0 ? E = d : o ? E = y(fn, null, null) : E = null;
  let M = null;
  return m !== void 0 ? M = m : M = y(Zt, null, null), {
    clearIcon: c,
    suffixIcon: b,
    itemIcon: E,
    removeIcon: M
  };
}
const rt = (e) => {
  const {
    controlPaddingHorizontal: t
  } = e;
  return {
    position: "relative",
    display: "block",
    minHeight: e.controlHeight,
    padding: `${(e.controlHeight - e.fontSize * e.lineHeight) / 2}px ${t}px`,
    color: e.colorText,
    fontWeight: "normal",
    fontSize: e.fontSize,
    lineHeight: e.lineHeight,
    boxSizing: "border-box"
  };
}, kn = (e) => {
  const {
    antCls: t,
    componentCls: n
  } = e, o = `${n}-item`;
  return [
    {
      [`${n}-dropdown`]: h(h({}, Ae(e)), {
        position: "absolute",
        top: -9999,
        zIndex: e.zIndexPopup,
        boxSizing: "border-box",
        padding: e.paddingXXS,
        overflow: "hidden",
        fontSize: e.fontSize,
        // Fix select render lag of long text in chrome
        // https://github.com/ant-design/ant-design/issues/11456
        // https://github.com/ant-design/ant-design/issues/11843
        fontVariant: "initial",
        backgroundColor: e.colorBgElevated,
        borderRadius: e.borderRadiusLG,
        outline: "none",
        boxShadow: e.boxShadowSecondary,
        [`
            &${t}-slide-up-enter${t}-slide-up-enter-active${n}-dropdown-placement-bottomLeft,
            &${t}-slide-up-appear${t}-slide-up-appear-active${n}-dropdown-placement-bottomLeft
          `]: {
          animationName: mn
        },
        [`
            &${t}-slide-up-enter${t}-slide-up-enter-active${n}-dropdown-placement-topLeft,
            &${t}-slide-up-appear${t}-slide-up-appear-active${n}-dropdown-placement-topLeft
          `]: {
          animationName: hn
        },
        [`&${t}-slide-up-leave${t}-slide-up-leave-active${n}-dropdown-placement-bottomLeft`]: {
          animationName: gn
        },
        [`&${t}-slide-up-leave${t}-slide-up-leave-active${n}-dropdown-placement-topLeft`]: {
          animationName: vn
        },
        "&-hidden": {
          display: "none"
        },
        "&-empty": {
          color: e.colorTextDisabled
        },
        // ========================= Options =========================
        [`${o}-empty`]: h(h({}, rt(e)), {
          color: e.colorTextDisabled
        }),
        [`${o}`]: h(h({}, rt(e)), {
          cursor: "pointer",
          transition: `background ${e.motionDurationSlow} ease`,
          borderRadius: e.borderRadiusSM,
          // =========== Group ============
          "&-group": {
            color: e.colorTextDescription,
            fontSize: e.fontSizeSM,
            cursor: "default"
          },
          // =========== Option ===========
          "&-option": {
            display: "flex",
            "&-content": h({
              flex: "auto"
            }, ze),
            "&-state": {
              flex: "none"
            },
            [`&-active:not(${o}-option-disabled)`]: {
              backgroundColor: e.controlItemBgHover
            },
            [`&-selected:not(${o}-option-disabled)`]: {
              color: e.colorText,
              fontWeight: e.fontWeightStrong,
              backgroundColor: e.controlItemBgActive,
              [`${o}-option-state`]: {
                color: e.colorPrimary
              }
            },
            "&-disabled": {
              [`&${o}-option-selected`]: {
                backgroundColor: e.colorBgContainerDisabled
              },
              color: e.colorTextDisabled,
              cursor: "not-allowed"
            },
            "&-grouped": {
              paddingInlineStart: e.controlPaddingHorizontal * 2
            }
          }
        }),
        // =========================== RTL ===========================
        "&-rtl": {
          direction: "rtl"
        }
      })
    },
    // Follow code may reuse in other components
    nt(e, "slide-up"),
    nt(e, "slide-down"),
    tt(e, "move-up"),
    tt(e, "move-down")
  ];
}, pe = 2;
function St(e) {
  let {
    controlHeightSM: t,
    controlHeight: n,
    lineWidth: o
  } = e;
  const l = (n - t) / 2 - o, i = Math.ceil(l / 2);
  return [l, i];
}
function Be(e, t) {
  const {
    componentCls: n,
    iconCls: o
  } = e, l = `${n}-selection-overflow`, i = e.controlHeightSM, [u] = St(e), r = t ? `${n}-${t}` : "";
  return {
    [`${n}-multiple${r}`]: {
      fontSize: e.fontSize,
      /**
       * Do not merge `height` & `line-height` under style with `selection` & `search`, since chrome
       * may update to redesign with its align logic.
       */
      // =========================== Overflow ===========================
      [l]: {
        position: "relative",
        display: "flex",
        flex: "auto",
        flexWrap: "wrap",
        maxWidth: "100%",
        "&-item": {
          flex: "none",
          alignSelf: "center",
          maxWidth: "100%",
          display: "inline-flex"
        }
      },
      // ========================= Selector =========================
      [`${n}-selector`]: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        // Multiple is little different that horizontal is follow the vertical
        padding: `${u - pe}px ${pe * 2}px`,
        borderRadius: e.borderRadius,
        [`${n}-show-search&`]: {
          cursor: "text"
        },
        [`${n}-disabled&`]: {
          background: e.colorBgContainerDisabled,
          cursor: "not-allowed"
        },
        "&:after": {
          display: "inline-block",
          width: 0,
          margin: `${pe}px 0`,
          lineHeight: `${i}px`,
          content: '"\\a0"'
        }
      },
      [`
        &${n}-show-arrow ${n}-selector,
        &${n}-allow-clear ${n}-selector
      `]: {
        paddingInlineEnd: e.fontSizeIcon + e.controlPaddingHorizontal
      },
      // ======================== Selections ========================
      [`${n}-selection-item`]: {
        position: "relative",
        display: "flex",
        flex: "none",
        boxSizing: "border-box",
        maxWidth: "100%",
        height: i,
        marginTop: pe,
        marginBottom: pe,
        lineHeight: `${i - e.lineWidth * 2}px`,
        background: e.colorFillSecondary,
        border: `${e.lineWidth}px solid ${e.colorSplit}`,
        borderRadius: e.borderRadiusSM,
        cursor: "default",
        transition: `font-size ${e.motionDurationSlow}, line-height ${e.motionDurationSlow}, height ${e.motionDurationSlow}`,
        userSelect: "none",
        marginInlineEnd: pe * 2,
        paddingInlineStart: e.paddingXS,
        paddingInlineEnd: e.paddingXS / 2,
        [`${n}-disabled&`]: {
          color: e.colorTextDisabled,
          borderColor: e.colorBorder,
          cursor: "not-allowed"
        },
        // It's ok not to do this, but 24px makes bottom narrow in view should adjust
        "&-content": {
          display: "inline-block",
          marginInlineEnd: e.paddingXS / 2,
          overflow: "hidden",
          whiteSpace: "pre",
          textOverflow: "ellipsis"
        },
        "&-remove": h(h({}, ut()), {
          display: "inline-block",
          color: e.colorIcon,
          fontWeight: "bold",
          fontSize: 10,
          lineHeight: "inherit",
          cursor: "pointer",
          [`> ${o}`]: {
            verticalAlign: "-0.2em"
          },
          "&:hover": {
            color: e.colorIconHover
          }
        })
      },
      // ========================== Input ==========================
      [`${l}-item + ${l}-item`]: {
        [`${n}-selection-search`]: {
          marginInlineStart: 0
        }
      },
      [`${n}-selection-search`]: {
        display: "inline-flex",
        position: "relative",
        maxWidth: "100%",
        marginInlineStart: e.inputPaddingHorizontalBase - u,
        "\n          &-input,\n          &-mirror\n        ": {
          height: i,
          fontFamily: e.fontFamily,
          lineHeight: `${i}px`,
          transition: `all ${e.motionDurationSlow}`
        },
        "&-input": {
          width: "100%",
          minWidth: 4.1
          // fix search cursor missing
        },
        "&-mirror": {
          position: "absolute",
          top: 0,
          insetInlineStart: 0,
          insetInlineEnd: "auto",
          zIndex: 999,
          whiteSpace: "pre",
          visibility: "hidden"
        }
      },
      // ======================= Placeholder =======================
      [`${n}-selection-placeholder `]: {
        position: "absolute",
        top: "50%",
        insetInlineStart: e.inputPaddingHorizontalBase,
        insetInlineEnd: e.inputPaddingHorizontalBase,
        transform: "translateY(-50%)",
        transition: `all ${e.motionDurationSlow}`
      }
    }
  };
}
function eo(e) {
  const {
    componentCls: t
  } = e, n = ie(e, {
    controlHeight: e.controlHeightSM,
    controlHeightSM: e.controlHeightXS,
    borderRadius: e.borderRadiusSM,
    borderRadiusSM: e.borderRadiusXS
  }), [, o] = St(e);
  return [
    Be(e),
    // ======================== Small ========================
    // Shared
    Be(n, "sm"),
    // Padding
    {
      [`${t}-multiple${t}-sm`]: {
        [`${t}-selection-placeholder`]: {
          insetInlineStart: e.controlPaddingHorizontalSM - e.lineWidth,
          insetInlineEnd: "auto"
        },
        // https://github.com/ant-design/ant-design/issues/29559
        [`${t}-selection-search`]: {
          marginInlineStart: o
        }
      }
    },
    // ======================== Large ========================
    // Shared
    Be(ie(e, {
      fontSize: e.fontSizeLG,
      controlHeight: e.controlHeightLG,
      controlHeightSM: e.controlHeight,
      borderRadius: e.borderRadiusLG,
      borderRadiusSM: e.borderRadius
    }), "lg")
  ];
}
function Le(e, t) {
  const {
    componentCls: n,
    inputPaddingHorizontalBase: o,
    borderRadius: l
  } = e, i = e.controlHeight - e.lineWidth * 2, u = Math.ceil(e.fontSize * 1.25), r = t ? `${n}-${t}` : "";
  return {
    [`${n}-single${r}`]: {
      fontSize: e.fontSize,
      // ========================= Selector =========================
      [`${n}-selector`]: h(h({}, Ae(e)), {
        display: "flex",
        borderRadius: l,
        [`${n}-selection-search`]: {
          position: "absolute",
          top: 0,
          insetInlineStart: o,
          insetInlineEnd: o,
          bottom: 0,
          "&-input": {
            width: "100%"
          }
        },
        [`
          ${n}-selection-item,
          ${n}-selection-placeholder
        `]: {
          padding: 0,
          lineHeight: `${i}px`,
          transition: `all ${e.motionDurationSlow}`,
          // Firefox inline-block position calculation is not same as Chrome & Safari. Patch this:
          "@supports (-moz-appearance: meterbar)": {
            lineHeight: `${i}px`
          }
        },
        [`${n}-selection-item`]: {
          position: "relative",
          userSelect: "none"
        },
        [`${n}-selection-placeholder`]: {
          transition: "none",
          pointerEvents: "none"
        },
        // For common baseline align
        [[
          "&:after",
          /* For '' value baseline align */
          `${n}-selection-item:after`,
          /* For undefined value baseline align */
          `${n}-selection-placeholder:after`
        ].join(",")]: {
          display: "inline-block",
          width: 0,
          visibility: "hidden",
          content: '"\\a0"'
        }
      }),
      [`
        &${n}-show-arrow ${n}-selection-item,
        &${n}-show-arrow ${n}-selection-placeholder
      `]: {
        paddingInlineEnd: u
      },
      // Opacity selection if open
      [`&${n}-open ${n}-selection-item`]: {
        color: e.colorTextPlaceholder
      },
      // ========================== Input ==========================
      // We only change the style of non-customize input which is only support by `combobox` mode.
      // Not customize
      [`&:not(${n}-customize-input)`]: {
        [`${n}-selector`]: {
          width: "100%",
          height: e.controlHeight,
          padding: `0 ${o}px`,
          [`${n}-selection-search-input`]: {
            height: i
          },
          "&:after": {
            lineHeight: `${i}px`
          }
        }
      },
      [`&${n}-customize-input`]: {
        [`${n}-selector`]: {
          "&:after": {
            display: "none"
          },
          [`${n}-selection-search`]: {
            position: "static",
            width: "100%"
          },
          [`${n}-selection-placeholder`]: {
            position: "absolute",
            insetInlineStart: 0,
            insetInlineEnd: 0,
            padding: `0 ${o}px`,
            "&:after": {
              display: "none"
            }
          }
        }
      }
    }
  };
}
function to(e) {
  const {
    componentCls: t
  } = e, n = e.controlPaddingHorizontalSM - e.lineWidth;
  return [
    Le(e),
    // ======================== Small ========================
    // Shared
    Le(ie(e, {
      controlHeight: e.controlHeightSM,
      borderRadius: e.borderRadiusSM
    }), "sm"),
    // padding
    {
      [`${t}-single${t}-sm`]: {
        [`&:not(${t}-customize-input)`]: {
          [`${t}-selection-search`]: {
            insetInlineStart: n,
            insetInlineEnd: n
          },
          [`${t}-selector`]: {
            padding: `0 ${n}px`
          },
          // With arrow should provides `padding-right` to show the arrow
          [`&${t}-show-arrow ${t}-selection-search`]: {
            insetInlineEnd: n + e.fontSize * 1.5
          },
          [`
            &${t}-show-arrow ${t}-selection-item,
            &${t}-show-arrow ${t}-selection-placeholder
          `]: {
            paddingInlineEnd: e.fontSize * 1.5
          }
        }
      }
    },
    // ======================== Large ========================
    // Shared
    Le(ie(e, {
      controlHeight: e.controlHeightLG,
      fontSize: e.fontSizeLG,
      borderRadius: e.borderRadiusLG
    }), "lg")
  ];
}
const no = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    position: "relative",
    backgroundColor: e.colorBgContainer,
    border: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,
    transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
    input: {
      cursor: "pointer"
    },
    [`${t}-show-search&`]: {
      cursor: "text",
      input: {
        cursor: "auto",
        color: "inherit"
      }
    },
    [`${t}-disabled&`]: {
      color: e.colorTextDisabled,
      background: e.colorBgContainerDisabled,
      cursor: "not-allowed",
      [`${t}-multiple&`]: {
        background: e.colorBgContainerDisabled
      },
      input: {
        cursor: "not-allowed"
      }
    }
  };
}, Ne = function(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  const {
    componentCls: o,
    borderHoverColor: l,
    outlineColor: i,
    antCls: u
  } = t, r = n ? {
    [`${o}-selector`]: {
      borderColor: l
    }
  } : {};
  return {
    [e]: {
      [`&:not(${o}-disabled):not(${o}-customize-input):not(${u}-pagination-size-changer)`]: h(h({}, r), {
        [`${o}-focused& ${o}-selector`]: {
          borderColor: l,
          boxShadow: `0 0 0 ${t.controlOutlineWidth}px ${i}`,
          borderInlineEndWidth: `${t.controlLineWidth}px !important`,
          outline: 0
        },
        [`&:hover ${o}-selector`]: {
          borderColor: l,
          borderInlineEndWidth: `${t.controlLineWidth}px !important`
        }
      })
    }
  };
}, oo = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-selection-search-input`]: {
      margin: 0,
      padding: 0,
      background: "transparent",
      border: "none",
      outline: "none",
      appearance: "none",
      "&::-webkit-search-cancel-button": {
        display: "none",
        "-webkit-appearance": "none"
      }
    }
  };
}, lo = (e) => {
  const {
    componentCls: t,
    inputPaddingHorizontalBase: n,
    iconCls: o
  } = e;
  return {
    [t]: h(h({}, Ae(e)), {
      position: "relative",
      display: "inline-block",
      cursor: "pointer",
      [`&:not(${t}-customize-input) ${t}-selector`]: h(h({}, no(e)), oo(e)),
      // [`&:not(&-disabled):hover ${selectCls}-selector`]: {
      //   ...genHoverStyle(token),
      // },
      // ======================== Selection ========================
      [`${t}-selection-item`]: h({
        flex: 1,
        fontWeight: "normal"
      }, ze),
      // ======================= Placeholder =======================
      [`${t}-selection-placeholder`]: h(h({}, ze), {
        flex: 1,
        color: e.colorTextPlaceholder,
        pointerEvents: "none"
      }),
      // ========================== Arrow ==========================
      [`${t}-arrow`]: h(h({}, ut()), {
        position: "absolute",
        top: "50%",
        insetInlineStart: "auto",
        insetInlineEnd: n,
        height: e.fontSizeIcon,
        marginTop: -e.fontSizeIcon / 2,
        color: e.colorTextQuaternary,
        fontSize: e.fontSizeIcon,
        lineHeight: 1,
        textAlign: "center",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        [o]: {
          verticalAlign: "top",
          transition: `transform ${e.motionDurationSlow}`,
          "> svg": {
            verticalAlign: "top"
          },
          [`&:not(${t}-suffix)`]: {
            pointerEvents: "auto"
          }
        },
        [`${t}-disabled &`]: {
          cursor: "not-allowed"
        },
        "> *:not(:last-child)": {
          marginInlineEnd: 8
          // FIXME: magic
        }
      }),
      // ========================== Clear ==========================
      [`${t}-clear`]: {
        position: "absolute",
        top: "50%",
        insetInlineStart: "auto",
        insetInlineEnd: n,
        zIndex: 1,
        display: "inline-block",
        width: e.fontSizeIcon,
        height: e.fontSizeIcon,
        marginTop: -e.fontSizeIcon / 2,
        color: e.colorTextQuaternary,
        fontSize: e.fontSizeIcon,
        fontStyle: "normal",
        lineHeight: 1,
        textAlign: "center",
        textTransform: "none",
        background: e.colorBgContainer,
        cursor: "pointer",
        opacity: 0,
        transition: `color ${e.motionDurationMid} ease, opacity ${e.motionDurationSlow} ease`,
        textRendering: "auto",
        "&:before": {
          display: "block"
        },
        "&:hover": {
          color: e.colorTextTertiary
        }
      },
      "&:hover": {
        [`${t}-clear`]: {
          opacity: 1
        }
      }
    }),
    // ========================= Feedback ==========================
    [`${t}-has-feedback`]: {
      [`${t}-clear`]: {
        insetInlineEnd: n + e.fontSize + e.paddingXXS
      }
    }
  };
}, io = (e) => {
  const {
    componentCls: t
  } = e;
  return [
    {
      [t]: {
        // ==================== BorderLess ====================
        [`&-borderless ${t}-selector`]: {
          backgroundColor: "transparent !important",
          borderColor: "transparent !important",
          boxShadow: "none !important"
        },
        // ==================== In Form ====================
        [`&${t}-in-form-item`]: {
          width: "100%"
        }
      }
    },
    // =====================================================
    // ==                       LTR                       ==
    // =====================================================
    // Base
    lo(e),
    // Single
    to(e),
    // Multiple
    eo(e),
    // Dropdown
    kn(e),
    // =====================================================
    // ==                       RTL                       ==
    // =====================================================
    {
      [`${t}-rtl`]: {
        direction: "rtl"
      }
    },
    // =====================================================
    // ==                     Status                      ==
    // =====================================================
    Ne(t, ie(e, {
      borderHoverColor: e.colorPrimaryHover,
      outlineColor: e.controlOutline
    })),
    Ne(`${t}-status-error`, ie(e, {
      borderHoverColor: e.colorErrorHover,
      outlineColor: e.colorErrorOutline
    }), !0),
    Ne(`${t}-status-warning`, ie(e, {
      borderHoverColor: e.colorWarningHover,
      outlineColor: e.colorWarningOutline
    }), !0),
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    kt(e, {
      borderElCls: `${t}-selector`,
      focusElCls: `${t}-focused`
    })
  ];
}, Lo = Jt("Select", (e, t) => {
  let {
    rootPrefixCls: n
  } = t;
  const o = ie(e, {
    rootPrefixCls: n,
    inputPaddingHorizontalBase: e.paddingSM - 1
  });
  return [io(o)];
}, (e) => ({
  zIndexPopup: e.zIndexPopupBase + 50
}));
export {
  Do as B,
  Oo as L,
  me as T,
  Ke as a,
  Ho as b,
  Fo as c,
  Ln as d,
  Lo as e,
  Te as f,
  Bo as g,
  Ro as h,
  zn as i,
  bn as j,
  Eo as k,
  Dn as t,
  Po as u
};
