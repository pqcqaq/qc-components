import { _ as h, Z as jn, P as S, ak as Yn, h as ee, g as oe, aj as un, $ as cn, K as R, k as Un, n as Xn, e as Gn, y as te, o as le, aV as Qn, V as Zn, L as qn, X as Jn, a5 as ze, r as Ae, m as ie, aT as dn, i as kn, an as et } from "./index-D4pR5m6G.js";
import { defineComponent as re, computed as z, ref as be, createVNode as y, isVNode as nt, cloneVNode as fn, inject as We, provide as _e, shallowRef as V, onMounted as ae, watch as X, createTextVNode as Ve, Fragment as $e, onBeforeUnmount as ye, isRef as tt, reactive as Se, watchEffect as pn, toRefs as ot, onUnmounted as lt, toRaw as it, nextTick as He, onUpdated as at } from "vue";
import { B as rt } from "./BaseInput-BrVpcndP.js";
import { O as st } from "./Overflow-JxE-t910.js";
import { i as ut, D as ct } from "./DownOutlined-B0ZCefZE.js";
import { R as dt } from "./index-DVt_RZcO.js";
import { C as ft } from "./CheckOutlined-DOW1B7c-.js";
import { S as pt } from "./SearchOutlined-BZ7Rqpqu.js";
import { i as nn } from "./move-Ba_WbT_U.js";
import { a as mt, s as ht, c as gt, b as vt, i as tn } from "./slide-CvVnzqzG.js";
function on(e, n) {
  const {
    key: t
  } = e;
  let o;
  return "value" in e && ({
    value: o
  } = e), t ?? (o !== void 0 ? o : `rc-index-key-${n}`);
}
function bt(e, n) {
  const {
    label: t,
    value: o,
    options: l
  } = e || {};
  return {
    label: t || (n ? "children" : "label"),
    value: o || "value",
    options: l || "options"
  };
}
function To(e) {
  let {
    fieldNames: n,
    childrenAsData: t
  } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const o = [], {
    label: l,
    value: i,
    options: u
  } = bt(n, !1);
  function r(g, a) {
    g.forEach((d) => {
      const m = d[l];
      if (a || !(u in d)) {
        const c = d[i];
        o.push({
          key: on(d, o.length),
          groupOption: a,
          data: d,
          label: m,
          value: c
        });
      } else {
        let c = m;
        c === void 0 && t && (c = d.label), o.push({
          key: on(d, o.length),
          group: !0,
          data: d,
          label: c
        }), r(d[u], !0);
      }
    });
  }
  return r(e, !1), o;
}
function Mo(e) {
  const n = h({}, e);
  return "props" in n || Object.defineProperty(n, "props", {
    get() {
      return jn(!1, "Return type is option instead of Option instance. Please read value directly instead of reading from `props`."), n;
    }
  }), n;
}
function St(e, n) {
  if (!n || !n.length)
    return null;
  let t = !1;
  function o(i, u) {
    let [r, ...g] = u;
    if (!r)
      return [i];
    const a = i.split(r);
    return t = t || a.length > 1, a.reduce((d, m) => [...d, ...o(m, g)], []).filter((d) => d);
  }
  const l = o(e, n);
  return t ? l : null;
}
var yt = function(e, n) {
  var t = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && n.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var l = 0, o = Object.getOwnPropertySymbols(e); l < o.length; l++)
      n.indexOf(o[l]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[l]) && (t[o[l]] = e[o[l]]);
  return t;
};
const wt = (e) => {
  const n = e === !0 ? 0 : 1;
  return {
    bottomLeft: {
      points: ["tl", "bl"],
      offset: [0, 4],
      overflow: {
        adjustX: n,
        adjustY: 1
      }
    },
    bottomRight: {
      points: ["tr", "br"],
      offset: [0, 4],
      overflow: {
        adjustX: n,
        adjustY: 1
      }
    },
    topLeft: {
      points: ["bl", "tl"],
      offset: [0, -4],
      overflow: {
        adjustX: n,
        adjustY: 1
      }
    },
    topRight: {
      points: ["br", "tr"],
      offset: [0, -4],
      overflow: {
        adjustX: n,
        adjustY: 1
      }
    }
  };
}, xt = re({
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
  setup(e, n) {
    let {
      slots: t,
      attrs: o,
      expose: l
    } = n;
    const i = z(() => {
      const {
        dropdownMatchSelectWidth: r
      } = e;
      return wt(r);
    }), u = be();
    return l({
      getPopupElement: () => u.value
    }), () => {
      const r = h(h({}, e), o), {
        empty: g = !1
      } = r, a = yt(r, ["empty"]), {
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
      return typeof x == "number" ? Y.width = `${x}px` : x && (Y.width = `${$}px`), y(Yn, ee(ee({}, e), {}, {
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
        default: t.default,
        popup: () => y("div", {
          ref: u,
          onMouseenter: B,
          onFocusin: P,
          onFocusout: O
        }, [K])
      });
    };
  }
}), me = (e, n) => {
  let {
    slots: t
  } = n;
  var o;
  const {
    class: l,
    customizeIcon: i,
    customizeIconProps: u,
    onMousedown: r,
    onClick: g
  } = e;
  let a;
  return typeof i == "function" ? a = i(u) : a = nt(i) ? fn(i) : i, y("span", {
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
  }, [(o = t.default) === null || o === void 0 ? void 0 : o.call(t)])]);
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
const It = {
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
}, mn = re({
  compatConfig: {
    MODE: 3
  },
  name: "SelectInput",
  inheritAttrs: !1,
  props: It,
  setup(e) {
    let n = null;
    const t = We("VCSelectContainerEvent");
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
      let D = u || y(rt, null, null);
      const B = D.props || {}, {
        onKeydown: P,
        onInput: O,
        onFocus: W,
        onBlur: K,
        onMousedown: L,
        onCompositionstart: Y,
        onCompositionend: ne,
        style: se
      } = B;
      return D = un(D, h(h(h(h(h({
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
          $(s), ne && ne(s);
        },
        onPaste: w,
        onFocus: function() {
          clearTimeout(n), W && W(arguments.length <= 0 ? void 0 : arguments[0]), I && I(arguments.length <= 0 ? void 0 : arguments[0]), t == null || t.focus(arguments.length <= 0 ? void 0 : arguments[0]);
        },
        onBlur: function() {
          for (var s = arguments.length, C = new Array(s), N = 0; N < s; N++)
            C[N] = arguments[N];
          n = setTimeout(() => {
            K && K(C[0]), F && F(C[0]), t == null || t.blur(C[0]);
          }, 100);
        }
      }), D.type === "textarea" ? {} : {
        type: "search"
      }), !0, !0), D;
    };
  }
}), hn = Symbol("TreeSelectLegacyContextPropsKey");
function Eo(e) {
  return _e(hn, e);
}
function Ke() {
  return We(hn, {});
}
const Ct = {
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
}, ln = (e) => {
  e.preventDefault(), e.stopPropagation();
}, $t = re({
  name: "MultipleSelectSelector",
  inheritAttrs: !1,
  props: Ct,
  setup(e) {
    const n = V(), t = V(0), o = V(!1), l = Ke(), i = z(() => `${e.prefixCls}-selection`), u = z(() => e.open || e.mode === "tags" ? e.searchValue : ""), r = z(() => e.mode === "tags" || e.showSearch && (e.open || o.value));
    ae(() => {
      X(u, () => {
        t.value = n.value.scrollWidth;
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
        onMousedown: ln,
        onClick: M,
        customizeIcon: e.removeIcon
      }, {
        default: () => [Ve("×")]
      })]);
    }
    function a(c, v, b, E, M, w) {
      var x;
      const $ = (F) => {
        ln(F), e.onToggleOpen(!open);
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
          width: t.value + "px"
        },
        key: "input"
      }, [y(mn, {
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
        attrs: cn(e, !0),
        onFocus: () => o.value = !0,
        onBlur: () => o.value = !1
      }, null), y("span", {
        ref: n,
        class: `${i.value}-search-mirror`,
        "aria-hidden": !0
      }, [u.value, Ve(" ")])]), K = y(st, {
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
}), Tt = {
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
    const n = V(!1), t = z(() => e.mode === "combobox"), o = z(() => t.value || e.showSearch), l = z(() => {
      let a = e.searchValue || "";
      return t.value && e.activeValue && !n.value && (a = e.activeValue), a;
    }), i = Ke();
    X([t, () => e.activeValue], () => {
      t.value && (n.value = !1);
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
        const ne = (a = L.key) !== null && a !== void 0 ? a : L.value, se = ((d = i.keyEntities[ne]) === null || d === void 0 ? void 0 : d.node) || {};
        Y = i.customSlots[(m = se.slots) === null || m === void 0 ? void 0 : m.title] || i.customSlots.title || L.label, typeof Y == "function" && (Y = Y(se));
      } else
        Y = H && L ? H(L.option) : L == null ? void 0 : L.label;
      return y($e, null, [y("span", {
        class: `${b}-selection-search`
      }, [y(mn, {
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
        onChange: (ne) => {
          n.value = !0, P(ne);
        },
        onPaste: O,
        onCompositionstart: W,
        onCompositionend: K,
        tabindex: T,
        attrs: cn(e, !0)
      }, null)]), !t.value && L && !u.value && y("span", {
        class: `${b}-selection-item`,
        title: r.value
      }, [y($e, {
        key: (c = L.key) !== null && c !== void 0 ? c : L.value
      }, [Y])]), g()]);
    };
  }
});
je.props = Tt;
je.inheritAttrs = !1;
function Mt(e) {
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
function gn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 250, n = null, t;
  ye(() => {
    clearTimeout(t);
  });
  function o(l) {
    (l || n === null) && (n = l), clearTimeout(t), t = setTimeout(() => {
      n = null;
    }, e);
  }
  return [() => n, o];
}
function Te() {
  const e = (n) => {
    e.current = n;
  };
  return e;
}
const Et = re({
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
  setup(e, n) {
    let {
      expose: t
    } = n;
    const o = Te();
    let l = !1;
    const [i, u] = gn(0), r = (w) => {
      const {
        which: x
      } = w;
      (x === R.UP || x === R.DOWN) && w.preventDefault(), e.onInputKeyDown && e.onInputKeyDown(w), x === R.ENTER && e.mode === "tags" && !l && !e.open && e.onSearchSubmit(w.target.value), Mt(x) && e.onToggleOpen(!0);
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
    return t({
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
      }, F = $ === "multiple" || $ === "tags" ? y($t, ee(ee({}, e), I), null) : y(je, ee(ee({}, e), I), null);
      return y("div", {
        ref: x,
        class: `${w}-selector`,
        onClick: E,
        onMousedown: M
      }, [F]);
    };
  }
});
function Rt(e, n, t) {
  function o(l) {
    var i, u, r;
    let g = l.target;
    g.shadowRoot && l.composed && (g = l.composedPath()[0] || g);
    const a = [(i = e[0]) === null || i === void 0 ? void 0 : i.value, (r = (u = e[1]) === null || u === void 0 ? void 0 : u.value) === null || r === void 0 ? void 0 : r.getPopupElement()];
    n.value && a.every((d) => d && !d.contains(g) && d !== g) && t(!1);
  }
  ae(() => {
    window.addEventListener("mousedown", o);
  }), ye(() => {
    window.removeEventListener("mousedown", o);
  });
}
function Ft() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 10;
  const n = V(!1);
  let t;
  const o = () => {
    clearTimeout(t);
  };
  return ae(() => {
    o();
  }), [n, (i, u) => {
    o(), t = setTimeout(() => {
      n.value = i, u && u();
    }, e);
  }, o];
}
const vn = Symbol("BaseSelectContextKey");
function Pt(e) {
  return _e(vn, e);
}
function Ro() {
  return We(vn, {});
}
function Dt(e) {
  if (!tt(e))
    return Se(e);
  const n = new Proxy({}, {
    get(t, o, l) {
      return Reflect.get(e.value, o, l);
    },
    set(t, o, l) {
      return e.value[o] = l, !0;
    },
    deleteProperty(t, o) {
      return Reflect.deleteProperty(e.value, o);
    },
    has(t, o) {
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
  return Se(n);
}
var Ot = function(e, n) {
  var t = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && n.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var l = 0, o = Object.getOwnPropertySymbols(e); l < o.length; l++)
      n.indexOf(o[l]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[l]) && (t[o[l]] = e[o[l]]);
  return t;
};
const Ht = ["value", "onChange", "removeIcon", "placeholder", "autofocus", "maxTagCount", "maxTagTextLength", "maxTagPlaceholder", "choiceTransitionName", "onInputKeyDown", "onPopupScroll", "tabindex", "OptionList", "notFoundContent"], Bt = () => ({
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
}), Lt = () => ({
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
}), Nt = () => h(h({}, Bt()), Lt());
function zt(e) {
  return e === "tags" || e === "multiple";
}
const Fo = re({
  compatConfig: {
    MODE: 3
  },
  name: "BaseSelect",
  inheritAttrs: !1,
  props: Un(Nt(), {
    showAction: [],
    notFoundContent: "Not Found"
  }),
  setup(e, n) {
    let {
      attrs: t,
      expose: o,
      slots: l
    } = n;
    const i = z(() => zt(e.mode)), u = z(() => e.showSearch !== void 0 ? e.showSearch : i.value || e.mode === "combobox"), r = V(!1);
    ae(() => {
      r.value = ut();
    });
    const g = Ke(), a = V(null), d = Te(), m = V(null), c = V(null), v = V(null), b = be(!1), [E, M, w] = Ft();
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
    pn(() => {
      T.value = A.value, (e.disabled || D.value && T.value && e.mode === "combobox") && (T.value = !1);
    });
    const B = z(() => D.value ? !1 : T.value), P = (f) => {
      const p = f !== void 0 ? f : !T.value;
      T.value !== p && !e.disabled && (H(p), e.onDropdownVisibleChange && e.onDropdownVisibleChange(p));
    }, O = z(() => (e.tokenSeparators || []).some((f) => [`
`, `\r
`].includes(f))), W = (f, p, _) => {
      var j, q;
      let U = !0, J = f;
      (j = e.onActiveValueChange) === null || j === void 0 || j.call(e, null);
      const G = _ ? null : St(f, e.tokenSeparators);
      return e.mode !== "combobox" && G && (J = "", (q = e.onSearchSplit) === null || q === void 0 || q.call(e, G), P(!1), U = !1), e.onSearch && I.value !== J && e.onSearch(J, {
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
    const [L, Y] = gn(), ne = function(f) {
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
      for (var q = arguments.length, U = new Array(q > 1 ? q - 1 : 0), J = 1; J < q; J++)
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
    const Z = [];
    ae(() => {
      Z.forEach((f) => clearTimeout(f)), Z.splice(0, Z.length);
    }), ye(() => {
      Z.forEach((f) => clearTimeout(f)), Z.splice(0, Z.length);
    });
    const xe = function(f) {
      var p, _;
      const {
        target: j
      } = f, q = (p = m.value) === null || p === void 0 ? void 0 : p.getPopupElement();
      if (q && q.contains(j)) {
        const ce = setTimeout(() => {
          var k;
          const de = Z.indexOf(ce);
          de !== -1 && Z.splice(de, 1), w(), !r.value && !q.contains(document.activeElement) && ((k = c.value) === null || k === void 0 || k.focus());
        });
        Z.push(ce);
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
    }), Rt([a, m], B, P), Pt(Dt(h(h({}, ot(e)), {
      open: T,
      triggerOpen: B,
      showSearch: u,
      multiple: i,
      toggleOpen: P
    }))), () => {
      const f = h(h({}, e), t), {
        prefixCls: p,
        id: _,
        open: j,
        defaultOpen: q,
        mode: U,
        // Search related
        showSearch: J,
        searchValue: G,
        onSearch: ce,
        // Icons
        allowClear: k,
        clearIcon: de,
        showArrow: Ye,
        inputIcon: wn,
        // Others
        disabled: Re,
        loading: Ie,
        getInputElement: Ue,
        getPopupContainer: xn,
        placement: In,
        // Dropdown
        animation: Cn,
        transitionName: $n,
        dropdownStyle: Tn,
        dropdownClassName: Mn,
        dropdownMatchSelectWidth: En,
        dropdownRender: Rn,
        dropdownAlign: Fn,
        showAction: ao,
        direction: Pn,
        // Tags
        tokenSeparators: ro,
        tagRender: Dn,
        optionLabelRender: On,
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
        onDisplayValuesChange: Hn,
        emptyOptions: Bn,
        activeDescendantId: Ln,
        activeValue: Nn,
        OptionList: zn
      } = f, Vn = Ot(f, ["prefixCls", "id", "open", "defaultOpen", "mode", "showSearch", "searchValue", "onSearch", "allowClear", "clearIcon", "showArrow", "inputIcon", "disabled", "loading", "getInputElement", "getPopupContainer", "placement", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "showAction", "direction", "tokenSeparators", "tagRender", "optionLabelRender", "onPopupScroll", "onDropdownVisibleChange", "onFocus", "onBlur", "onKeyup", "onKeydown", "onMousedown", "onClear", "omitDomProps", "getRawInputElement", "displayValues", "onDisplayValuesChange", "emptyOptions", "activeDescendantId", "activeValue", "OptionList"]), Ge = U === "combobox" && Ue && Ue() || null, ve = typeof Xe == "function" && Xe(), De = h({}, Vn);
      let Qe;
      ve && (Qe = (fe) => {
        P(fe);
      }), Ht.forEach((fe) => {
        delete De[fe];
      }), Pe == null || Pe.forEach((fe) => {
        delete De[fe];
      });
      const Ze = Ye !== void 0 ? Ye : Ie || !i.value && U !== "combobox";
      let qe;
      Ze && (qe = y(me, {
        class: oe(`${p}-arrow`, {
          [`${p}-arrow-loading`]: Ie
        }),
        customizeIcon: wn,
        customizeIconProps: {
          loading: Ie,
          searchValue: I.value,
          open: T.value,
          focused: E.value,
          showSearch: u.value
        }
      }, null));
      let Je;
      const An = () => {
        Fe == null || Fe(), Hn([], {
          type: "clear",
          values: Ce
        }), W("", !1, !1);
      };
      !Re && k && (Ce.length || I.value) && (Je = y(me, {
        class: `${p}-clear`,
        onMousedown: An,
        customizeIcon: de
      }, {
        default: () => [Ve("×")]
      }));
      const Wn = y(zn, {
        ref: v
      }, h(h({}, g.customSlots), {
        option: l.option
      })), _n = oe(p, t.class, {
        [`${p}-focused`]: E.value,
        [`${p}-multiple`]: i.value,
        [`${p}-single`]: !i.value,
        [`${p}-allow-clear`]: k,
        [`${p}-show-arrow`]: Ze,
        [`${p}-disabled`]: Re,
        [`${p}-loading`]: Ie,
        [`${p}-open`]: T.value,
        [`${p}-customize-input`]: Ge,
        [`${p}-show-search`]: u.value
      }), ke = y(xt, {
        ref: m,
        disabled: Re,
        prefixCls: p,
        visible: B.value,
        popupElement: Wn,
        containerWidth: ge.value,
        animation: Cn,
        transitionName: $n,
        dropdownStyle: Tn,
        dropdownClassName: Mn,
        direction: Pn,
        dropdownMatchSelectWidth: En,
        dropdownRender: Rn,
        dropdownAlign: Fn,
        placement: In,
        getPopupContainer: xn,
        empty: Bn,
        getTriggerDOMNode: () => d.current,
        onPopupVisibleChange: Qe,
        onPopupMouseEnter: ue,
        onPopupFocusin: Ee,
        onPopupFocusout: we
      }, {
        default: () => ve ? Xn(ve) && un(ve, {
          ref: d
        }, !1, !0) : y(Et, ee(ee({}, e), {}, {
          domRef: d,
          prefixCls: p,
          inputElement: Ge,
          ref: c,
          id: _,
          showSearch: u.value,
          mode: U,
          activeDescendantId: Ln,
          tagRender: Dn,
          optionLabelRender: On,
          values: Ce,
          open: T.value,
          onToggleOpen: P,
          activeValue: Nn,
          searchValue: I.value,
          onSearch: W,
          onSearchSubmit: K,
          onRemove: s,
          tokenWithEnter: O.value
        }), null)
      });
      let Oe;
      return ve ? Oe = ke : Oe = y("div", ee(ee({}, De), {}, {
        class: _n,
        ref: a,
        onMousedown: xe,
        onKeydown: ne,
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
          label: en,
          value: Kn
        } = fe;
        return ["number", "string"].includes(typeof en) ? en : Kn;
      }).join(", ")}`]), ke, qe, Je]), Oe;
    };
  }
}), Me = (e, n) => {
  let {
    height: t,
    offset: o,
    prefixCls: l,
    onInnerResize: i
  } = e, {
    slots: u
  } = n;
  var r;
  let g = {}, a = {
    display: "flex",
    flexDirection: "column"
  };
  return o !== void 0 && (g = {
    height: `${t}px`,
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
  }, [y(dt, {
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
const bn = (e, n) => {
  let {
    setRef: t
  } = e, {
    slots: o
  } = n;
  var l;
  const i = Gn((l = o.default) === null || l === void 0 ? void 0 : l.call(o));
  return i && i.length ? fn(i[0], {
    ref: t
  }) : i;
};
bn.props = {
  setRef: {
    type: Function,
    default: () => {
    }
  }
};
const Vt = 20;
function an(e) {
  return "touches" in e ? e.touches[0].pageY : e.pageY;
}
const At = re({
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
    var e, n;
    (e = this.scrollbarRef.current) === null || e === void 0 || e.addEventListener("touchstart", this.onScrollbarTouchStart, le ? {
      passive: !1
    } : !1), (n = this.thumbRef.current) === null || n === void 0 || n.addEventListener("touchstart", this.onMouseDown, le ? {
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
      } : !1), this.thumbRef.current.removeEventListener("touchend", this.onMouseUp)), te.cancel(this.moveRaf);
    },
    // ======================= Thumb =======================
    onMouseDown(e) {
      const {
        onStartMove: n
      } = this.$props;
      h(this.state, {
        dragging: !0,
        pageY: an(e),
        startTop: this.getTop()
      }), n(), this.patchEvents(), e.stopPropagation(), e.preventDefault();
    },
    onMouseMove(e) {
      const {
        dragging: n,
        pageY: t,
        startTop: o
      } = this.state, {
        onScroll: l
      } = this.$props;
      if (te.cancel(this.moveRaf), n) {
        const i = an(e) - t, u = o + i, r = this.getEnableScrollRange(), g = this.getEnableHeightRange(), a = g ? u / g : 0, d = Math.ceil(a * r);
        this.moveRaf = te(() => {
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
        scrollHeight: n
      } = this.$props;
      let t = e / n * 100;
      return t = Math.max(t, Vt), t = Math.min(t, e / 2), Math.floor(t);
    },
    getEnableScrollRange() {
      const {
        scrollHeight: e,
        height: n
      } = this.$props;
      return e - n || 0;
    },
    getEnableHeightRange() {
      const {
        height: e
      } = this.$props, n = this.getSpinHeight();
      return e - n || 0;
    },
    getTop() {
      const {
        scrollTop: e
      } = this.$props, n = this.getEnableScrollRange(), t = this.getEnableHeightRange();
      return e === 0 || n === 0 ? 0 : e / n * t;
    },
    // Not show scrollbar when height is large than scrollHeight
    showScroll() {
      const {
        height: e,
        scrollHeight: n
      } = this.$props;
      return n > e;
    }
  },
  render() {
    const {
      dragging: e,
      visible: n
    } = this.state, {
      prefixCls: t
    } = this.$props, o = this.getSpinHeight() + "px", l = this.getTop() + "px", i = this.showScroll(), u = i && n;
    return y("div", {
      ref: this.scrollbarRef,
      class: oe(`${t}-scrollbar`, {
        [`${t}-scrollbar-show`]: i
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
      class: oe(`${t}-scrollbar-thumb`, {
        [`${t}-scrollbar-thumb-moving`]: e
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
function Wt(e, n, t, o) {
  const l = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), u = be(Symbol("update"));
  X(e, () => {
    u.value = Symbol("update");
  });
  let r;
  function g() {
    te.cancel(r);
  }
  function a() {
    g(), r = te(() => {
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
    const v = n(m);
    l.get(v), c ? (l.set(v, c.$el || c), a()) : l.delete(v);
  }
  return lt(() => {
    g();
  }), [d, a, i, u];
}
function _t(e, n, t, o, l, i, u, r) {
  let g;
  return (a) => {
    if (a == null) {
      r();
      return;
    }
    te.cancel(g);
    const d = n.value, m = o.itemHeight;
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
            const K = t.get(W);
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
        g = te(() => {
          $ && i(), E(M - 1, I);
        }, 2);
      };
      E(5);
    }
  };
}
const Kt = typeof navigator == "object" && /Firefox/i.test(navigator.userAgent), Sn = (e, n) => {
  let t = !1, o = null;
  function l() {
    clearTimeout(o), t = !0, o = setTimeout(() => {
      t = !1;
    }, 50);
  }
  return function(i) {
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    const r = (
      // Pass origin wheel when on the top
      i < 0 && e.value || // Pass origin wheel when on the bottom
      i > 0 && n.value
    );
    return u && r ? (clearTimeout(o), t = !1) : (!r || t) && l(), !t && r;
  };
};
function jt(e, n, t, o) {
  let l = 0, i = null, u = null, r = !1;
  const g = Sn(n, t);
  function a(m) {
    if (!e.value)
      return;
    te.cancel(i);
    const {
      deltaY: c
    } = m;
    l += c, u = c, !g(c) && (Kt || m.preventDefault(), i = te(() => {
      o(l * (r ? 10 : 1)), l = 0;
    }));
  }
  function d(m) {
    e.value && (r = m.detail === u);
  }
  return [a, d];
}
const Yt = 14 / 15;
function Ut(e, n, t) {
  let o = !1, l = 0, i = null, u = null;
  const r = () => {
    i && (i.removeEventListener("touchmove", g), i.removeEventListener("touchend", a));
  }, g = (c) => {
    if (o) {
      const v = Math.ceil(c.touches[0].pageY);
      let b = l - v;
      l = v, t(b) && c.preventDefault(), clearInterval(u), u = setInterval(() => {
        b *= Yt, (!t(b, !0) || Math.abs(b) <= 0.1) && clearInterval(u);
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
      n.value.removeEventListener("touchstart", d), r(), clearInterval(u), c && n.value.addEventListener("touchstart", d, {
        passive: !1
      });
    }, {
      immediate: !0
    });
  }), ye(() => {
    document.removeEventListener("touchmove", m);
  });
}
var Xt = function(e, n) {
  var t = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && n.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var l = 0, o = Object.getOwnPropertySymbols(e); l < o.length; l++)
      n.indexOf(o[l]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[l]) && (t[o[l]] = e[o[l]]);
  return t;
};
const Gt = [], Qt = {
  overflowY: "auto",
  overflowAnchor: "none"
};
function Zt(e, n, t, o, l, i) {
  let {
    getKey: u
  } = i;
  return e.slice(n, t + 1).map((r, g) => {
    const a = n + g, d = l(r, a, {
      // style: status === 'MEASURE_START' ? { visibility: 'hidden' } : {},
    }), m = u(r);
    return y(bn, {
      key: m,
      setRef: (c) => o(r, c)
    }, {
      default: () => [d]
    });
  });
}
const Po = re({
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
  setup(e, n) {
    let {
      expose: t
    } = n;
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
    }), u = z(() => e.data || Gt), r = V([]);
    X(u, () => {
      r.value = it(u.value).slice();
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
    const [E, M, w, x] = Wt(r, c), $ = Se({
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
    }), at(() => {
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
        itemHeight: Z,
        height: xe
      } = e, ge = we + xe;
      for (let ue = 0; ue < he; ue += 1) {
        const f = Ee[ue], p = c(f);
        let _ = w.get(p);
        _ === void 0 && (_ = Z);
        const j = s + _;
        C === void 0 && j >= we && (C = ue, N = s), Q === void 0 && j > ge && (Q = ue), s = j;
      }
      C === void 0 && (C = 0, N = 0, Q = Math.ceil(xe / Z)), Q === void 0 && (Q = he - 1), Q = Math.min(Q + 1, he), h($, {
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
    const T = z(() => i.scrollTop <= 0), H = z(() => i.scrollTop >= F.value), D = Sn(T, H);
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
    const [O, W] = jt(o, T, H, (s) => {
      b((C) => C + s);
    });
    Ut(o, a, (s, C) => D(s, C) ? !1 : (O({
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
    pn(() => {
      He(() => {
        a.value && (L(), a.value.addEventListener("wheel", O, le ? {
          passive: !1
        } : !1), a.value.addEventListener("DOMMouseScroll", W), a.value.addEventListener("MozMousePixelScroll", K));
      });
    }), ye(() => {
      L();
    });
    const Y = _t(a, r, w, e, c, M, b, () => {
      var s;
      (s = m.value) === null || s === void 0 || s.delayHidden();
    });
    t({
      scrollTo: Y
    });
    const ne = z(() => {
      let s = null;
      return e.height && (s = h({
        [e.fullHeight ? "height" : "maxHeight"]: e.height + "px"
      }, Qt), o.value && (s.overflowY = "hidden", i.scrollMoving && (s.pointerEvents = "none"))), s;
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
      componentStyle: ne,
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
      prefixCls: n = "rc-virtual-list",
      height: t,
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
    } = e, v = Xt(e, ["prefixCls", "height", "itemHeight", "fullHeight", "data", "itemKey", "virtual", "component", "onScroll", "children", "style", "class"]), b = oe(n, c), {
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
      class: `${n}-holder`,
      style: I,
      ref: "componentRef",
      onScroll: F,
      onMouseenter: O
    }, {
      default: () => [y(Me, {
        prefixCls: n,
        height: M,
        offset: w,
        onInnerResize: H,
        ref: "fillerInnerRef"
      }, {
        default: () => Zt(P, x, $, B, d, D)
      })]
    }), T && y(At, {
      ref: "scrollBarRef",
      prefixCls: n,
      scrollTop: E,
      height: t,
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
let rn = 0;
const qt = process.env.NODE_ENV !== "test" && Qn();
function Jt() {
  let e;
  return qt ? (e = rn, rn += 1) : e = "TEST_OR_SSR", e;
}
function Do() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : be("");
  const n = `rc_select_${Jt()}`;
  return e.value || n;
}
function Oo(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    loading: t,
    multiple: o,
    prefixCls: l,
    hasFeedback: i,
    feedbackIcon: u,
    showArrow: r
  } = e, g = e.suffixIcon || n.suffixIcon && n.suffixIcon(), a = e.clearIcon || n.clearIcon && n.clearIcon(), d = e.menuItemSelectedIcon || n.menuItemSelectedIcon && n.menuItemSelectedIcon(), m = e.removeIcon || n.removeIcon && n.removeIcon(), c = a ?? y(Zn, null, null), v = (w) => y($e, null, [r !== !1 && w, i && u]);
  let b = null;
  if (g !== void 0)
    b = v(g);
  else if (t)
    b = v(y(qn, {
      spin: !0
    }, null));
  else {
    const w = `${l}-suffix`;
    b = (x) => {
      let {
        open: $,
        showSearch: I
      } = x;
      return v($ && I ? y(pt, {
        class: w
      }, null) : y(ct, {
        class: w
      }, null));
    };
  }
  let E = null;
  d !== void 0 ? E = d : o ? E = y(ft, null, null) : E = null;
  let M = null;
  return m !== void 0 ? M = m : M = y(Jn, null, null), {
    clearIcon: c,
    suffixIcon: b,
    itemIcon: E,
    removeIcon: M
  };
}
const sn = (e) => {
  const {
    controlPaddingHorizontal: n
  } = e;
  return {
    position: "relative",
    display: "block",
    minHeight: e.controlHeight,
    padding: `${(e.controlHeight - e.fontSize * e.lineHeight) / 2}px ${n}px`,
    color: e.colorText,
    fontWeight: "normal",
    fontSize: e.fontSize,
    lineHeight: e.lineHeight,
    boxSizing: "border-box"
  };
}, kt = (e) => {
  const {
    antCls: n,
    componentCls: t
  } = e, o = `${t}-item`;
  return [
    {
      [`${t}-dropdown`]: h(h({}, Ae(e)), {
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
            &${n}-slide-up-enter${n}-slide-up-enter-active${t}-dropdown-placement-bottomLeft,
            &${n}-slide-up-appear${n}-slide-up-appear-active${t}-dropdown-placement-bottomLeft
          `]: {
          animationName: mt
        },
        [`
            &${n}-slide-up-enter${n}-slide-up-enter-active${t}-dropdown-placement-topLeft,
            &${n}-slide-up-appear${n}-slide-up-appear-active${t}-dropdown-placement-topLeft
          `]: {
          animationName: ht
        },
        [`&${n}-slide-up-leave${n}-slide-up-leave-active${t}-dropdown-placement-bottomLeft`]: {
          animationName: gt
        },
        [`&${n}-slide-up-leave${n}-slide-up-leave-active${t}-dropdown-placement-topLeft`]: {
          animationName: vt
        },
        "&-hidden": {
          display: "none"
        },
        "&-empty": {
          color: e.colorTextDisabled
        },
        // ========================= Options =========================
        [`${o}-empty`]: h(h({}, sn(e)), {
          color: e.colorTextDisabled
        }),
        [`${o}`]: h(h({}, sn(e)), {
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
    tn(e, "slide-up"),
    tn(e, "slide-down"),
    nn(e, "move-up"),
    nn(e, "move-down")
  ];
}, pe = 2;
function yn(e) {
  let {
    controlHeightSM: n,
    controlHeight: t,
    lineWidth: o
  } = e;
  const l = (t - n) / 2 - o, i = Math.ceil(l / 2);
  return [l, i];
}
function Be(e, n) {
  const {
    componentCls: t,
    iconCls: o
  } = e, l = `${t}-selection-overflow`, i = e.controlHeightSM, [u] = yn(e), r = n ? `${t}-${n}` : "";
  return {
    [`${t}-multiple${r}`]: {
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
      [`${t}-selector`]: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        // Multiple is little different that horizontal is follow the vertical
        padding: `${u - pe}px ${pe * 2}px`,
        borderRadius: e.borderRadius,
        [`${t}-show-search&`]: {
          cursor: "text"
        },
        [`${t}-disabled&`]: {
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
        &${t}-show-arrow ${t}-selector,
        &${t}-allow-clear ${t}-selector
      `]: {
        paddingInlineEnd: e.fontSizeIcon + e.controlPaddingHorizontal
      },
      // ======================== Selections ========================
      [`${t}-selection-item`]: {
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
        [`${t}-disabled&`]: {
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
        "&-remove": h(h({}, dn()), {
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
        [`${t}-selection-search`]: {
          marginInlineStart: 0
        }
      },
      [`${t}-selection-search`]: {
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
      [`${t}-selection-placeholder `]: {
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
    componentCls: n
  } = e, t = ie(e, {
    controlHeight: e.controlHeightSM,
    controlHeightSM: e.controlHeightXS,
    borderRadius: e.borderRadiusSM,
    borderRadiusSM: e.borderRadiusXS
  }), [, o] = yn(e);
  return [
    Be(e),
    // ======================== Small ========================
    // Shared
    Be(t, "sm"),
    // Padding
    {
      [`${n}-multiple${n}-sm`]: {
        [`${n}-selection-placeholder`]: {
          insetInlineStart: e.controlPaddingHorizontalSM - e.lineWidth,
          insetInlineEnd: "auto"
        },
        // https://github.com/ant-design/ant-design/issues/29559
        [`${n}-selection-search`]: {
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
function Le(e, n) {
  const {
    componentCls: t,
    inputPaddingHorizontalBase: o,
    borderRadius: l
  } = e, i = e.controlHeight - e.lineWidth * 2, u = Math.ceil(e.fontSize * 1.25), r = n ? `${t}-${n}` : "";
  return {
    [`${t}-single${r}`]: {
      fontSize: e.fontSize,
      // ========================= Selector =========================
      [`${t}-selector`]: h(h({}, Ae(e)), {
        display: "flex",
        borderRadius: l,
        [`${t}-selection-search`]: {
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
          ${t}-selection-item,
          ${t}-selection-placeholder
        `]: {
          padding: 0,
          lineHeight: `${i}px`,
          transition: `all ${e.motionDurationSlow}`,
          // Firefox inline-block position calculation is not same as Chrome & Safari. Patch this:
          "@supports (-moz-appearance: meterbar)": {
            lineHeight: `${i}px`
          }
        },
        [`${t}-selection-item`]: {
          position: "relative",
          userSelect: "none"
        },
        [`${t}-selection-placeholder`]: {
          transition: "none",
          pointerEvents: "none"
        },
        // For common baseline align
        [[
          "&:after",
          /* For '' value baseline align */
          `${t}-selection-item:after`,
          /* For undefined value baseline align */
          `${t}-selection-placeholder:after`
        ].join(",")]: {
          display: "inline-block",
          width: 0,
          visibility: "hidden",
          content: '"\\a0"'
        }
      }),
      [`
        &${t}-show-arrow ${t}-selection-item,
        &${t}-show-arrow ${t}-selection-placeholder
      `]: {
        paddingInlineEnd: u
      },
      // Opacity selection if open
      [`&${t}-open ${t}-selection-item`]: {
        color: e.colorTextPlaceholder
      },
      // ========================== Input ==========================
      // We only change the style of non-customize input which is only support by `combobox` mode.
      // Not customize
      [`&:not(${t}-customize-input)`]: {
        [`${t}-selector`]: {
          width: "100%",
          height: e.controlHeight,
          padding: `0 ${o}px`,
          [`${t}-selection-search-input`]: {
            height: i
          },
          "&:after": {
            lineHeight: `${i}px`
          }
        }
      },
      [`&${t}-customize-input`]: {
        [`${t}-selector`]: {
          "&:after": {
            display: "none"
          },
          [`${t}-selection-search`]: {
            position: "static",
            width: "100%"
          },
          [`${t}-selection-placeholder`]: {
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
function no(e) {
  const {
    componentCls: n
  } = e, t = e.controlPaddingHorizontalSM - e.lineWidth;
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
      [`${n}-single${n}-sm`]: {
        [`&:not(${n}-customize-input)`]: {
          [`${n}-selection-search`]: {
            insetInlineStart: t,
            insetInlineEnd: t
          },
          [`${n}-selector`]: {
            padding: `0 ${t}px`
          },
          // With arrow should provides `padding-right` to show the arrow
          [`&${n}-show-arrow ${n}-selection-search`]: {
            insetInlineEnd: t + e.fontSize * 1.5
          },
          [`
            &${n}-show-arrow ${n}-selection-item,
            &${n}-show-arrow ${n}-selection-placeholder
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
const to = (e) => {
  const {
    componentCls: n
  } = e;
  return {
    position: "relative",
    backgroundColor: e.colorBgContainer,
    border: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,
    transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
    input: {
      cursor: "pointer"
    },
    [`${n}-show-search&`]: {
      cursor: "text",
      input: {
        cursor: "auto",
        color: "inherit"
      }
    },
    [`${n}-disabled&`]: {
      color: e.colorTextDisabled,
      background: e.colorBgContainerDisabled,
      cursor: "not-allowed",
      [`${n}-multiple&`]: {
        background: e.colorBgContainerDisabled
      },
      input: {
        cursor: "not-allowed"
      }
    }
  };
}, Ne = function(e, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  const {
    componentCls: o,
    borderHoverColor: l,
    outlineColor: i,
    antCls: u
  } = n, r = t ? {
    [`${o}-selector`]: {
      borderColor: l
    }
  } : {};
  return {
    [e]: {
      [`&:not(${o}-disabled):not(${o}-customize-input):not(${u}-pagination-size-changer)`]: h(h({}, r), {
        [`${o}-focused& ${o}-selector`]: {
          borderColor: l,
          boxShadow: `0 0 0 ${n.controlOutlineWidth}px ${i}`,
          borderInlineEndWidth: `${n.controlLineWidth}px !important`,
          outline: 0
        },
        [`&:hover ${o}-selector`]: {
          borderColor: l,
          borderInlineEndWidth: `${n.controlLineWidth}px !important`
        }
      })
    }
  };
}, oo = (e) => {
  const {
    componentCls: n
  } = e;
  return {
    [`${n}-selection-search-input`]: {
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
    componentCls: n,
    inputPaddingHorizontalBase: t,
    iconCls: o
  } = e;
  return {
    [n]: h(h({}, Ae(e)), {
      position: "relative",
      display: "inline-block",
      cursor: "pointer",
      [`&:not(${n}-customize-input) ${n}-selector`]: h(h({}, to(e)), oo(e)),
      // [`&:not(&-disabled):hover ${selectCls}-selector`]: {
      //   ...genHoverStyle(token),
      // },
      // ======================== Selection ========================
      [`${n}-selection-item`]: h({
        flex: 1,
        fontWeight: "normal"
      }, ze),
      // ======================= Placeholder =======================
      [`${n}-selection-placeholder`]: h(h({}, ze), {
        flex: 1,
        color: e.colorTextPlaceholder,
        pointerEvents: "none"
      }),
      // ========================== Arrow ==========================
      [`${n}-arrow`]: h(h({}, dn()), {
        position: "absolute",
        top: "50%",
        insetInlineStart: "auto",
        insetInlineEnd: t,
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
          [`&:not(${n}-suffix)`]: {
            pointerEvents: "auto"
          }
        },
        [`${n}-disabled &`]: {
          cursor: "not-allowed"
        },
        "> *:not(:last-child)": {
          marginInlineEnd: 8
          // FIXME: magic
        }
      }),
      // ========================== Clear ==========================
      [`${n}-clear`]: {
        position: "absolute",
        top: "50%",
        insetInlineStart: "auto",
        insetInlineEnd: t,
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
        [`${n}-clear`]: {
          opacity: 1
        }
      }
    }),
    // ========================= Feedback ==========================
    [`${n}-has-feedback`]: {
      [`${n}-clear`]: {
        insetInlineEnd: t + e.fontSize + e.paddingXXS
      }
    }
  };
}, io = (e) => {
  const {
    componentCls: n
  } = e;
  return [
    {
      [n]: {
        // ==================== BorderLess ====================
        [`&-borderless ${n}-selector`]: {
          backgroundColor: "transparent !important",
          borderColor: "transparent !important",
          boxShadow: "none !important"
        },
        // ==================== In Form ====================
        [`&${n}-in-form-item`]: {
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
    no(e),
    // Multiple
    eo(e),
    // Dropdown
    kt(e),
    // =====================================================
    // ==                       RTL                       ==
    // =====================================================
    {
      [`${n}-rtl`]: {
        direction: "rtl"
      }
    },
    // =====================================================
    // ==                     Status                      ==
    // =====================================================
    Ne(n, ie(e, {
      borderHoverColor: e.colorPrimaryHover,
      outlineColor: e.controlOutline
    })),
    Ne(`${n}-status-error`, ie(e, {
      borderHoverColor: e.colorErrorHover,
      outlineColor: e.colorErrorOutline
    }), !0),
    Ne(`${n}-status-warning`, ie(e, {
      borderHoverColor: e.colorWarningHover,
      outlineColor: e.colorWarningOutline
    }), !0),
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    et(e, {
      borderElCls: `${n}-selector`,
      focusElCls: `${n}-focused`
    })
  ];
}, Ho = kn("Select", (e, n) => {
  let {
    rootPrefixCls: t
  } = n;
  const o = ie(e, {
    rootPrefixCls: t,
    inputPaddingHorizontalBase: e.paddingSM - 1
  });
  return [io(o)];
}, (e) => ({
  zIndexPopup: e.zIndexPopupBase + 50
}));
export {
  Fo as B,
  Po as L,
  me as T,
  Ke as a,
  Do as b,
  Eo as c,
  Lt as d,
  Ho as e,
  Te as f,
  Oo as g,
  Mo as h,
  zt as i,
  bt as j,
  To as k,
  Dt as t,
  Ro as u
};
