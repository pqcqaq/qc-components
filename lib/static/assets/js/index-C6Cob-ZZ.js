import { _ as h, a2 as Kt, P as b, T as jt, b as ee, c as ne, h as ut, i as Ut, O as Yt, z as Xt, U as te, a5 as le, au as Gt, S as Qt, L as qt, r as Ae, a0 as ze, m as ie, a4 as ct, g as Zt, d as Jt } from "./styleChecker-DxpCOgAe.js";
import { defineComponent as re, computed as z, ref as pe, createVNode as y, isVNode as kt, cloneVNode as dt, inject as We, provide as _e, shallowRef as A, watchEffect as Ke, onMounted as ae, watch as X, createTextVNode as Ve, Fragment as $e, onBeforeUnmount as ye, isRef as en, reactive as be, toRefs as tn, onUnmounted as nn, toRaw as on, nextTick as He, onUpdated as ln } from "vue";
import { K as R } from "./KeyCode-n3eOOGSl.js";
import { B as an, R as rn } from "./BaseInput-mXBF3n6E.js";
import { p as ft, C as sn } from "./CheckOutlined-BYqjK3An.js";
import { O as un } from "./Overflow-CeyrO1xz.js";
import { i as cn, D as dn } from "./DownOutlined-DdgJVMY8.js";
import { C as fn } from "./CloseOutlined-CScod4_4.js";
import { S as pn } from "./SearchOutlined-DGxW22SU.js";
import { i as nt } from "./move-CqgfczsM.js";
import { s as mn, a as gn, b as hn, c as vn, i as ot } from "./slide-CJY2mPfA.js";
function lt(e, t) {
  const {
    key: n
  } = e;
  let o;
  return "value" in e && ({
    value: o
  } = e), n ?? (o !== void 0 ? o : `rc-index-key-${t}`);
}
function Sn(e, t) {
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
function Mo(e) {
  let {
    fieldNames: t,
    childrenAsData: n
  } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const o = [], {
    label: l,
    value: i,
    options: c
  } = Sn(t, !1);
  function r(p, a) {
    p.forEach((s) => {
      const m = s[l];
      if (a || !(c in s)) {
        const d = s[i];
        o.push({
          key: lt(s, o.length),
          groupOption: a,
          data: s,
          label: m,
          value: d
        });
      } else {
        let d = m;
        d === void 0 && n && (d = s.label), o.push({
          key: lt(s, o.length),
          group: !0,
          data: s,
          label: d
        }), r(s[c], !0);
      }
    });
  }
  return r(e, !1), o;
}
function Eo(e) {
  const t = h({}, e);
  return "props" in t || Object.defineProperty(t, "props", {
    get() {
      return Kt(!1, "Return type is option instead of Option instance. Please read value directly instead of reading from `props`."), t;
    }
  }), t;
}
function bn(e, t) {
  if (!t || !t.length)
    return null;
  let n = !1;
  function o(i, c) {
    let [r, ...p] = c;
    if (!r)
      return [i];
    const a = i.split(r);
    return n = n || a.length > 1, a.reduce((s, m) => [...s, ...o(m, p)], []).filter((s) => s);
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
}, In = re({
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
    dropdownStyle: b.object,
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
    dropdownMatchSelectWidth: b.oneOfType([Number, Boolean]).def(!0),
    popupElement: b.any,
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
    }), c = pe();
    return l({
      getPopupElement: () => c.value
    }), () => {
      const r = h(h({}, e), o), {
        empty: p = !1
      } = r, a = yn(r, ["empty"]), {
        visible: s,
        dropdownAlign: m,
        prefixCls: d,
        popupElement: M,
        dropdownClassName: v,
        dropdownStyle: x,
        direction: C = "ltr",
        placement: S,
        dropdownMatchSelectWidth: w,
        containerWidth: E,
        dropdownRender: I,
        animation: D,
        transitionName: F,
        getPopupContainer: $,
        getTriggerDOMNode: V,
        onPopupVisibleChange: O,
        onPopupMouseEnter: L,
        onPopupFocusin: P,
        onPopupFocusout: B
      } = a, W = `${d}-dropdown`;
      let j = M;
      I && (j = I({
        menuNode: M,
        props: e
      }));
      const H = D ? `${W}-${D}` : F, _ = h({
        minWidth: `${E}px`
      }, x);
      return typeof w == "number" ? _.width = `${w}px` : w && (_.width = `${E}px`), y(jt, ee(ee({}, e), {}, {
        showAction: O ? ["click"] : [],
        hideAction: O ? ["click"] : [],
        popupPlacement: S || (C === "rtl" ? "bottomRight" : "bottomLeft"),
        builtinPlacements: i.value,
        prefixCls: W,
        popupTransitionName: H,
        popupAlign: m,
        popupVisible: s,
        getPopupContainer: $,
        popupClassName: ne(v, {
          [`${W}-empty`]: p
        }),
        popupStyle: _,
        getTriggerDOMNode: V,
        onPopupVisibleChange: O
      }), {
        default: n.default,
        popup: () => y("div", {
          ref: c,
          onMouseenter: L,
          onFocusin: P,
          onFocusout: B
        }, [j])
      });
    };
  }
}), ge = (e, t) => {
  let {
    slots: n
  } = t;
  var o;
  const {
    class: l,
    customizeIcon: i,
    customizeIconProps: c,
    onMousedown: r,
    onClick: p
  } = e;
  let a;
  return typeof i == "function" ? a = i(c) : a = kt(i) ? dt(i) : i, y("span", {
    class: l,
    onMousedown: (s) => {
      s.preventDefault(), r && r(s);
    },
    style: {
      userSelect: "none",
      WebkitUserSelect: "none"
    },
    unselectable: "on",
    onClick: p,
    "aria-hidden": !0
  }, [a !== void 0 ? a : y("span", {
    class: l.split(/\s+/).map((s) => `${s}-icon`)
  }, [(o = n.default) === null || o === void 0 ? void 0 : o.call(n)])]);
};
ge.inheritAttrs = !1;
ge.displayName = "TransBtn";
ge.props = {
  class: String,
  customizeIcon: b.any,
  customizeIconProps: b.any,
  onMousedown: Function,
  onClick: Function
};
const xn = {
  inputRef: b.any,
  prefixCls: String,
  id: String,
  inputElement: b.VueNode,
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
  tabindex: b.oneOfType([b.number, b.string]),
  /** Pass accessibility props to input */
  attrs: b.object,
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
  props: xn,
  setup(e) {
    let t = null;
    const n = We("VCSelectContainerEvent");
    return () => {
      var o;
      const {
        prefixCls: l,
        id: i,
        inputElement: c,
        disabled: r,
        tabindex: p,
        autofocus: a,
        autocomplete: s,
        editable: m,
        activeDescendantId: d,
        value: M,
        onKeydown: v,
        onMousedown: x,
        onChange: C,
        onPaste: S,
        onCompositionstart: w,
        onCompositionend: E,
        onFocus: I,
        onBlur: D,
        open: F,
        inputRef: $,
        attrs: V
      } = e;
      let O = c || y(an, null, null);
      const L = O.props || {}, {
        onKeydown: P,
        onInput: B,
        onFocus: W,
        onBlur: j,
        onMousedown: H,
        onCompositionstart: _,
        onCompositionend: oe,
        style: se
      } = L;
      return O = ut(O, h(h(h(h(h({
        type: "search"
      }, L), {
        id: i,
        ref: $,
        disabled: r,
        tabindex: p,
        lazy: !1,
        autocomplete: s || "off",
        autofocus: a,
        class: ne(`${l}-selection-search-input`, (o = O == null ? void 0 : O.props) === null || o === void 0 ? void 0 : o.class),
        role: "combobox",
        "aria-expanded": F,
        "aria-haspopup": "listbox",
        "aria-owns": `${i}_list`,
        "aria-autocomplete": "list",
        "aria-controls": `${i}_list`,
        "aria-activedescendant": d
      }), V), {
        value: m ? M : "",
        readonly: !m,
        unselectable: m ? null : "on",
        style: h(h({}, se), {
          opacity: m ? null : 0
        }),
        onKeydown: (u) => {
          v(u), P && P(u);
        },
        onMousedown: (u) => {
          x(u), H && H(u);
        },
        onInput: (u) => {
          C(u), B && B(u);
        },
        onCompositionstart(u) {
          w(u), _ && _(u);
        },
        onCompositionend(u) {
          E(u), oe && oe(u);
        },
        onPaste: S,
        onFocus: function() {
          clearTimeout(t), W && W(arguments.length <= 0 ? void 0 : arguments[0]), I && I(arguments.length <= 0 ? void 0 : arguments[0]), n == null || n.focus(arguments.length <= 0 ? void 0 : arguments[0]);
        },
        onBlur: function() {
          for (var u = arguments.length, T = new Array(u), N = 0; N < u; N++)
            T[N] = arguments[N];
          t = setTimeout(() => {
            j && j(T[0]), D && D(T[0]), n == null || n.blur(T[0]);
          }, 100);
        }
      }), O.type === "textarea" ? {} : {
        type: "search"
      }), !0, !0), O;
    };
  }
}), mt = Symbol("TreeSelectLegacyContextPropsKey");
function Ro(e) {
  return _e(mt, e);
}
function je() {
  return We(mt, {});
}
const Cn = {
  id: String,
  prefixCls: String,
  values: b.array,
  open: {
    type: Boolean,
    default: void 0
  },
  searchValue: String,
  inputRef: b.any,
  placeholder: b.any,
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
  tabindex: b.oneOfType([b.number, b.string]),
  compositionStatus: Boolean,
  removeIcon: b.any,
  choiceTransitionName: String,
  maxTagCount: b.oneOfType([b.number, b.string]),
  maxTagTextLength: Number,
  maxTagPlaceholder: b.any.def(() => (e) => `+ ${e.length} ...`),
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
}, it = (e) => {
  e.preventDefault(), e.stopPropagation();
}, $n = re({
  name: "MultipleSelectSelector",
  inheritAttrs: !1,
  props: Cn,
  setup(e) {
    const t = A(), n = A(0), o = A(!1), l = je(), i = z(() => `${e.prefixCls}-selection`), c = z(() => e.open || e.mode === "tags" ? e.searchValue : ""), r = z(() => e.mode === "tags" || e.showSearch && (e.open || o.value)), p = pe("");
    Ke(() => {
      p.value = c.value;
    }), ae(() => {
      X(p, () => {
        n.value = t.value.scrollWidth;
      }, {
        flush: "post",
        immediate: !0
      });
    });
    function a(v, x, C, S, w) {
      return y("span", {
        class: ne(`${i.value}-item`, {
          [`${i.value}-item-disabled`]: C
        }),
        title: typeof v == "string" || typeof v == "number" ? v.toString() : void 0
      }, [y("span", {
        class: `${i.value}-item-content`
      }, [x]), S && y(ge, {
        class: `${i.value}-item-remove`,
        onMousedown: it,
        onClick: w,
        customizeIcon: e.removeIcon
      }, {
        default: () => [Ve("×")]
      })]);
    }
    function s(v, x, C, S, w, E) {
      var I;
      const D = ($) => {
        it($), e.onToggleOpen(!open);
      };
      let F = E;
      return l.keyEntities && (F = ((I = l.keyEntities[v]) === null || I === void 0 ? void 0 : I.node) || {}), y("span", {
        key: v,
        onMousedown: D
      }, [e.tagRender({
        label: x,
        value: v,
        disabled: C,
        closable: S,
        onClose: w,
        option: F
      })]);
    }
    function m(v) {
      const {
        disabled: x,
        label: C,
        value: S,
        option: w
      } = v, E = !e.disabled && !x;
      let I = C;
      if (typeof e.maxTagTextLength == "number" && (typeof C == "string" || typeof C == "number")) {
        const F = String(I);
        F.length > e.maxTagTextLength && (I = `${F.slice(0, e.maxTagTextLength)}...`);
      }
      const D = (F) => {
        var $;
        F && F.stopPropagation(), ($ = e.onRemove) === null || $ === void 0 || $.call(e, v);
      };
      return typeof e.tagRender == "function" ? s(S, I, x, E, D, w) : a(C, I, x, E, D);
    }
    function d(v) {
      const {
        maxTagPlaceholder: x = (S) => `+ ${S.length} ...`
      } = e, C = typeof x == "function" ? x(v) : x;
      return a(C, C, !1);
    }
    const M = (v) => {
      const x = v.target.composing;
      p.value = v.target.value, x || e.onInputChange(v);
    };
    return () => {
      const {
        id: v,
        prefixCls: x,
        values: C,
        open: S,
        inputRef: w,
        placeholder: E,
        disabled: I,
        autofocus: D,
        autocomplete: F,
        activeDescendantId: $,
        tabindex: V,
        compositionStatus: O,
        onInputPaste: L,
        onInputKeyDown: P,
        onInputMouseDown: B,
        onInputCompositionStart: W,
        onInputCompositionEnd: j
      } = e, H = y("div", {
        class: `${i.value}-search`,
        style: {
          width: n.value + "px"
        },
        key: "input"
      }, [y(pt, {
        inputRef: w,
        open: S,
        prefixCls: x,
        id: v,
        inputElement: null,
        disabled: I,
        autofocus: D,
        autocomplete: F,
        editable: r.value,
        activeDescendantId: $,
        value: p.value,
        onKeydown: P,
        onMousedown: B,
        onChange: M,
        onPaste: L,
        onCompositionstart: W,
        onCompositionend: j,
        tabindex: V,
        attrs: ft(e, !0),
        onFocus: () => o.value = !0,
        onBlur: () => o.value = !1
      }, null), y("span", {
        ref: t,
        class: `${i.value}-search-mirror`,
        "aria-hidden": !0
      }, [p.value, Ve(" ")])]), _ = y(un, {
        prefixCls: `${i.value}-overflow`,
        data: C,
        renderItem: m,
        renderRest: d,
        suffix: H,
        itemKey: "key",
        maxCount: e.maxTagCount,
        key: "overflow"
      }, null);
      return y($e, null, [_, !C.length && !c.value && !O && y("span", {
        class: `${i.value}-placeholder`
      }, [E])]);
    };
  }
}), Tn = {
  inputElement: b.any,
  id: String,
  prefixCls: String,
  values: b.array,
  open: {
    type: Boolean,
    default: void 0
  },
  searchValue: String,
  inputRef: b.any,
  placeholder: b.any,
  compositionStatus: {
    type: Boolean,
    default: void 0
  },
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
  tabindex: b.oneOfType([b.number, b.string]),
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
}, Ue = re({
  name: "SingleSelector",
  setup(e) {
    const t = A(!1), n = z(() => e.mode === "combobox"), o = z(() => n.value || e.showSearch), l = z(() => {
      let s = e.searchValue || "";
      return n.value && e.activeValue && !t.value && (s = e.activeValue), s;
    }), i = je();
    X([n, () => e.activeValue], () => {
      n.value && (t.value = !1);
    }, {
      immediate: !0
    });
    const c = z(() => e.mode !== "combobox" && !e.open && !e.showSearch ? !1 : !!l.value || e.compositionStatus), r = z(() => {
      const s = e.values[0];
      return s && (typeof s.label == "string" || typeof s.label == "number") ? s.label.toString() : void 0;
    }), p = () => {
      if (e.values[0])
        return null;
      const s = c.value ? {
        visibility: "hidden"
      } : void 0;
      return y("span", {
        class: `${e.prefixCls}-selection-placeholder`,
        style: s
      }, [e.placeholder]);
    }, a = (s) => {
      s.target.composing || (t.value = !0, e.onInputChange(s));
    };
    return () => {
      var s, m, d, M;
      const {
        inputElement: v,
        prefixCls: x,
        id: C,
        values: S,
        inputRef: w,
        disabled: E,
        autofocus: I,
        autocomplete: D,
        activeDescendantId: F,
        open: $,
        tabindex: V,
        optionLabelRender: O,
        onInputKeyDown: L,
        onInputMouseDown: P,
        onInputPaste: B,
        onInputCompositionStart: W,
        onInputCompositionEnd: j
      } = e, H = S[0];
      let _ = null;
      if (H && i.customSlots) {
        const oe = (s = H.key) !== null && s !== void 0 ? s : H.value, se = ((m = i.keyEntities[oe]) === null || m === void 0 ? void 0 : m.node) || {};
        _ = i.customSlots[(d = se.slots) === null || d === void 0 ? void 0 : d.title] || i.customSlots.title || H.label, typeof _ == "function" && (_ = _(se));
      } else
        _ = O && H ? O(H.option) : H == null ? void 0 : H.label;
      return y($e, null, [y("span", {
        class: `${x}-selection-search`
      }, [y(pt, {
        inputRef: w,
        prefixCls: x,
        id: C,
        open: $,
        inputElement: v,
        disabled: E,
        autofocus: I,
        autocomplete: D,
        editable: o.value,
        activeDescendantId: F,
        value: l.value,
        onKeydown: L,
        onMousedown: P,
        onChange: a,
        onPaste: B,
        onCompositionstart: W,
        onCompositionend: j,
        tabindex: V,
        attrs: ft(e, !0)
      }, null)]), !n.value && H && !c.value && y("span", {
        class: `${x}-selection-item`,
        title: r.value
      }, [y($e, {
        key: (M = H.key) !== null && M !== void 0 ? M : H.value
      }, [_])]), p()]);
    };
  }
});
Ue.props = Tn;
Ue.inheritAttrs = !1;
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
function gt() {
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
    values: b.array,
    multiple: {
      type: Boolean,
      default: void 0
    },
    mode: String,
    searchValue: String,
    activeValue: String,
    inputElement: b.any,
    autofocus: {
      type: Boolean,
      default: void 0
    },
    activeDescendantId: String,
    tabindex: b.oneOfType([b.number, b.string]),
    disabled: {
      type: Boolean,
      default: void 0
    },
    placeholder: b.any,
    removeIcon: b.any,
    // Tags
    maxTagCount: b.oneOfType([b.number, b.string]),
    maxTagTextLength: Number,
    maxTagPlaceholder: b.any,
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
    const o = Te(), l = pe(!1), [i, c] = gt(0), r = (S) => {
      const {
        which: w
      } = S;
      (w === R.UP || w === R.DOWN) && S.preventDefault(), e.onInputKeyDown && e.onInputKeyDown(S), w === R.ENTER && e.mode === "tags" && !l.value && !e.open && e.onSearchSubmit(S.target.value), Mn(w) && e.onToggleOpen(!0);
    }, p = () => {
      c(!0);
    };
    let a = null;
    const s = (S) => {
      e.onSearch(S, !0, l.value) !== !1 && e.onToggleOpen(!0);
    }, m = () => {
      l.value = !0;
    }, d = (S) => {
      l.value = !1, e.mode !== "combobox" && s(S.target.value);
    }, M = (S) => {
      let {
        target: {
          value: w
        }
      } = S;
      if (e.tokenWithEnter && a && /[\r\n]/.test(a)) {
        const E = a.replace(/[\r\n]+$/, "").replace(/\r\n/g, " ").replace(/[\r\n]/g, " ");
        w = w.replace(E, a);
      }
      a = null, s(w);
    }, v = (S) => {
      const {
        clipboardData: w
      } = S;
      a = w.getData("text");
    }, x = (S) => {
      let {
        target: w
      } = S;
      w !== o.current && (document.body.style.msTouchAction !== void 0 ? setTimeout(() => {
        o.current.focus();
      }) : o.current.focus());
    }, C = (S) => {
      const w = i();
      S.target !== o.current && !w && S.preventDefault(), (e.mode !== "combobox" && (!e.showSearch || !w) || !e.open) && (e.open && e.onSearch("", !0, !1), e.onToggleOpen());
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
        prefixCls: S,
        domRef: w,
        mode: E
      } = e, I = {
        inputRef: o,
        onInputKeyDown: r,
        onInputMouseDown: p,
        onInputChange: M,
        onInputPaste: v,
        compositionStatus: l.value,
        onInputCompositionStart: m,
        onInputCompositionEnd: d
      }, D = E === "multiple" || E === "tags" ? y($n, ee(ee({}, e), I), null) : y(Ue, ee(ee({}, e), I), null);
      return y("div", {
        ref: w,
        class: `${S}-selector`,
        onClick: x,
        onMousedown: C
      }, [D]);
    };
  }
});
function Rn(e, t, n) {
  function o(l) {
    var i, c, r;
    let p = l.target;
    p.shadowRoot && l.composed && (p = l.composedPath()[0] || p);
    const a = [(i = e[0]) === null || i === void 0 ? void 0 : i.value, (r = (c = e[1]) === null || c === void 0 ? void 0 : c.value) === null || r === void 0 ? void 0 : r.getPopupElement()];
    t.value && a.every((s) => s && !s.contains(p) && s !== p) && n(!1);
  }
  ae(() => {
    window.addEventListener("mousedown", o);
  }), ye(() => {
    window.removeEventListener("mousedown", o);
  });
}
function Fn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 10;
  const t = A(!1);
  let n;
  const o = () => {
    clearTimeout(n);
  };
  return ae(() => {
    o();
  }), [t, (i, c) => {
    o(), n = setTimeout(() => {
      t.value = i, c && c();
    }, e);
  }, o];
}
const ht = Symbol("BaseSelectContextKey");
function Pn(e) {
  return _e(ht, e);
}
function Fo() {
  return We(ht, {});
}
function Dn(e) {
  if (!en(e))
    return be(e);
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
  return be(t);
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
  OptionList: b.any,
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
  notFoundContent: b.any,
  placeholder: b.any,
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
  maxTagPlaceholder: b.any,
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
  inputIcon: b.any,
  /** Clear all icon */
  clearIcon: b.any,
  /** Selector remove icon */
  removeIcon: b.any,
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
const Po = re({
  compatConfig: {
    MODE: 3
  },
  name: "BaseSelect",
  inheritAttrs: !1,
  props: Ut(Nn(), {
    showAction: [],
    notFoundContent: "Not Found"
  }),
  setup(e, t) {
    let {
      attrs: n,
      expose: o,
      slots: l
    } = t;
    const i = z(() => zn(e.mode)), c = z(() => e.showSearch !== void 0 ? e.showSearch : i.value || e.mode === "combobox"), r = A(!1);
    ae(() => {
      r.value = cn();
    });
    const p = je(), a = A(null), s = Te(), m = A(null), d = A(null), M = A(null), v = pe(!1), [x, C, S] = Fn();
    o({
      focus: () => {
        var f;
        (f = d.value) === null || f === void 0 || f.focus();
      },
      blur: () => {
        var f;
        (f = d.value) === null || f === void 0 || f.blur();
      },
      scrollTo: (f) => {
        var g;
        return (g = M.value) === null || g === void 0 ? void 0 : g.scrollTo(f);
      }
    });
    const I = z(() => {
      var f;
      if (e.mode !== "combobox")
        return e.searchValue;
      const g = (f = e.displayValues[0]) === null || f === void 0 ? void 0 : f.value;
      return typeof g == "string" || typeof g == "number" ? String(g) : "";
    }), D = e.open !== void 0 ? e.open : e.defaultOpen, F = A(D), $ = A(D), V = (f) => {
      F.value = e.open !== void 0 ? e.open : f, $.value = F.value;
    };
    X(() => e.open, () => {
      V(e.open);
    });
    const O = z(() => !e.notFoundContent && e.emptyOptions);
    Ke(() => {
      $.value = F.value, (e.disabled || O.value && $.value && e.mode === "combobox") && ($.value = !1);
    });
    const L = z(() => O.value ? !1 : $.value), P = (f) => {
      const g = f !== void 0 ? f : !$.value;
      $.value !== g && !e.disabled && (V(g), e.onDropdownVisibleChange && e.onDropdownVisibleChange(g));
    }, B = z(() => (e.tokenSeparators || []).some((f) => [`
`, `\r
`].includes(f))), W = (f, g, K) => {
      var U, Z;
      let Y = !0, J = f;
      (U = e.onActiveValueChange) === null || U === void 0 || U.call(e, null);
      const G = K ? null : bn(f, e.tokenSeparators);
      return e.mode !== "combobox" && G && (J = "", (Z = e.onSearchSplit) === null || Z === void 0 || Z.call(e, G), P(!1), Y = !1), e.onSearch && I.value !== J && e.onSearch(J, {
        source: g ? "typing" : "effect"
      }), Y;
    }, j = (f) => {
      var g;
      !f || !f.trim() || (g = e.onSearch) === null || g === void 0 || g.call(e, f, {
        source: "submit"
      });
    };
    X($, () => {
      !$.value && !i.value && e.mode !== "combobox" && W("", !1, !1);
    }, {
      immediate: !0,
      flush: "post"
    }), X(() => e.disabled, () => {
      F.value && e.disabled && V(!1), e.disabled && !v.value && C(!1);
    }, {
      immediate: !0
    });
    const [H, _] = gt(), oe = function(f) {
      var g;
      const K = H(), {
        which: U
      } = f;
      if (U === R.ENTER && (e.mode !== "combobox" && f.preventDefault(), $.value || P(!0)), _(!!I.value), U === R.BACKSPACE && !K && i.value && !I.value && e.displayValues.length) {
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
      for (var Z = arguments.length, Y = new Array(Z > 1 ? Z - 1 : 0), J = 1; J < Z; J++)
        Y[J - 1] = arguments[J];
      $.value && M.value && M.value.onKeydown(f, ...Y), (g = e.onKeydown) === null || g === void 0 || g.call(e, f, ...Y);
    }, se = function(f) {
      for (var g = arguments.length, K = new Array(g > 1 ? g - 1 : 0), U = 1; U < g; U++)
        K[U - 1] = arguments[U];
      $.value && M.value && M.value.onKeyup(f, ...K), e.onKeyup && e.onKeyup(f, ...K);
    }, u = (f) => {
      const g = e.displayValues.filter((K) => K !== f);
      e.onDisplayValuesChange(g, {
        type: "remove",
        values: [f]
      });
    }, T = A(!1), N = function() {
      C(!0), e.disabled || (e.onFocus && !T.value && e.onFocus(...arguments), e.showAction && e.showAction.includes("focus") && P(!0)), T.value = !0;
    }, Q = pe(!1), he = function() {
      if (Q.value || (v.value = !0, C(!1, () => {
        T.value = !1, v.value = !1, P(!1);
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
    const Ie = function(f) {
      var g, K;
      const {
        target: U
      } = f, Z = (g = m.value) === null || g === void 0 ? void 0 : g.getPopupElement();
      if (Z && Z.contains(U)) {
        const ce = setTimeout(() => {
          var k;
          const de = q.indexOf(ce);
          de !== -1 && q.splice(de, 1), S(), !r.value && !Z.contains(document.activeElement) && ((k = d.value) === null || k === void 0 || k.focus());
        });
        q.push(ce);
      }
      for (var Y = arguments.length, J = new Array(Y > 1 ? Y - 1 : 0), G = 1; G < Y; G++)
        J[G - 1] = arguments[G];
      (K = e.onMousedown) === null || K === void 0 || K.call(e, f, ...J);
    }, ve = A(null), ue = () => {
    };
    return ae(() => {
      X(L, () => {
        var f;
        if (L.value) {
          const g = Math.ceil((f = a.value) === null || f === void 0 ? void 0 : f.offsetWidth);
          ve.value !== g && !Number.isNaN(g) && (ve.value = g);
        }
      }, {
        immediate: !0,
        flush: "post"
      });
    }), Rn([a, m], L, P), Pn(Dn(h(h({}, tn(e)), {
      open: $,
      triggerOpen: L,
      showSearch: c,
      multiple: i,
      toggleOpen: P
    }))), () => {
      const f = h(h({}, e), n), {
        prefixCls: g,
        id: K,
        open: U,
        defaultOpen: Z,
        mode: Y,
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
        loading: xe,
        getInputElement: Xe,
        getPopupContainer: wt,
        placement: It,
        // Dropdown
        animation: xt,
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
        onMousedown: go,
        onClear: Fe,
        omitDomProps: Pe,
        getRawInputElement: Ge,
        displayValues: Ce,
        onDisplayValuesChange: Ot,
        emptyOptions: Ht,
        activeDescendantId: Bt,
        activeValue: Lt,
        OptionList: Nt
      } = f, zt = On(f, ["prefixCls", "id", "open", "defaultOpen", "mode", "showSearch", "searchValue", "onSearch", "allowClear", "clearIcon", "showArrow", "inputIcon", "disabled", "loading", "getInputElement", "getPopupContainer", "placement", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "showAction", "direction", "tokenSeparators", "tagRender", "optionLabelRender", "onPopupScroll", "onDropdownVisibleChange", "onFocus", "onBlur", "onKeyup", "onKeydown", "onMousedown", "onClear", "omitDomProps", "getRawInputElement", "displayValues", "onDisplayValuesChange", "emptyOptions", "activeDescendantId", "activeValue", "OptionList"]), Qe = Y === "combobox" && Xe && Xe() || null, Se = typeof Ge == "function" && Ge(), De = h({}, zt);
      let qe;
      Se && (qe = (fe) => {
        P(fe);
      }), Hn.forEach((fe) => {
        delete De[fe];
      }), Pe == null || Pe.forEach((fe) => {
        delete De[fe];
      });
      const Ze = Ye !== void 0 ? Ye : xe || !i.value && Y !== "combobox";
      let Je;
      Ze && (Je = y(ge, {
        class: ne(`${g}-arrow`, {
          [`${g}-arrow-loading`]: xe
        }),
        customizeIcon: yt,
        customizeIconProps: {
          loading: xe,
          searchValue: I.value,
          open: $.value,
          focused: x.value,
          showSearch: c.value
        }
      }, null));
      let ke;
      const Vt = () => {
        Fe == null || Fe(), Ot([], {
          type: "clear",
          values: Ce
        }), W("", !1, !1);
      };
      !Re && k && (Ce.length || I.value) && (ke = y(ge, {
        class: `${g}-clear`,
        onMousedown: Vt,
        customizeIcon: de
      }, {
        default: () => [Ve("×")]
      }));
      const At = y(Nt, {
        ref: M
      }, h(h({}, p.customSlots), {
        option: l.option
      })), Wt = ne(g, n.class, {
        [`${g}-focused`]: x.value,
        [`${g}-multiple`]: i.value,
        [`${g}-single`]: !i.value,
        [`${g}-allow-clear`]: k,
        [`${g}-show-arrow`]: Ze,
        [`${g}-disabled`]: Re,
        [`${g}-loading`]: xe,
        [`${g}-open`]: $.value,
        [`${g}-customize-input`]: Qe,
        [`${g}-show-search`]: c.value
      }), et = y(In, {
        ref: m,
        disabled: Re,
        prefixCls: g,
        visible: L.value,
        popupElement: At,
        containerWidth: ve.value,
        animation: xt,
        transitionName: Ct,
        dropdownStyle: $t,
        dropdownClassName: Tt,
        direction: Ft,
        dropdownMatchSelectWidth: Mt,
        dropdownRender: Et,
        dropdownAlign: Rt,
        placement: It,
        getPopupContainer: wt,
        empty: Ht,
        getTriggerDOMNode: () => s.current,
        onPopupVisibleChange: qe,
        onPopupMouseEnter: ue,
        onPopupFocusin: Ee,
        onPopupFocusout: we
      }, {
        default: () => Se ? Yt(Se) && ut(Se, {
          ref: s
        }, !1, !0) : y(En, ee(ee({}, e), {}, {
          domRef: s,
          prefixCls: g,
          inputElement: Qe,
          ref: d,
          id: K,
          showSearch: c.value,
          mode: Y,
          activeDescendantId: Bt,
          tagRender: Pt,
          optionLabelRender: Dt,
          values: Ce,
          open: $.value,
          onToggleOpen: P,
          activeValue: Lt,
          searchValue: I.value,
          onSearch: W,
          onSearchSubmit: j,
          onRemove: u,
          tokenWithEnter: B.value
        }), null)
      });
      let Oe;
      return Se ? Oe = et : Oe = y("div", ee(ee({}, De), {}, {
        class: Wt,
        ref: a,
        onMousedown: Ie,
        onKeydown: oe,
        onKeyup: se
      }), [x.value && !$.value && y("span", {
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
          label: tt,
          value: _t
        } = fe;
        return ["number", "string"].includes(typeof tt) ? tt : _t;
      }).join(", ")}`]), et, Je, ke]), Oe;
    };
  }
}), Me = (e, t) => {
  let {
    height: n,
    offset: o,
    prefixCls: l,
    onInnerResize: i
  } = e, {
    slots: c
  } = t;
  var r;
  let p = {}, a = {
    display: "flex",
    flexDirection: "column"
  };
  return o !== void 0 && (p = {
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
    style: p
  }, [y(rn, {
    onResize: (s) => {
      let {
        offsetHeight: m
      } = s;
      m && i && i();
    }
  }, {
    default: () => [y("div", {
      style: a,
      class: ne({
        [`${l}-holder-inner`]: l
      })
    }, [(r = c.default) === null || r === void 0 ? void 0 : r.call(c)])]
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
  return i && i.length ? dt(i[0], {
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
function at(e) {
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
      state: be({
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
      } : !1), this.thumbRef.current.removeEventListener("touchend", this.onMouseUp)), te.cancel(this.moveRaf);
    },
    // ======================= Thumb =======================
    onMouseDown(e) {
      const {
        onStartMove: t
      } = this.$props;
      h(this.state, {
        dragging: !0,
        pageY: at(e),
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
      if (te.cancel(this.moveRaf), t) {
        const i = at(e) - n, c = o + i, r = this.getEnableScrollRange(), p = this.getEnableHeightRange(), a = p ? c / p : 0, s = Math.ceil(a * r);
        this.moveRaf = te(() => {
          l(s);
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
    } = this.$props, o = this.getSpinHeight() + "px", l = this.getTop() + "px", i = this.showScroll(), c = i && t;
    return y("div", {
      ref: this.scrollbarRef,
      class: ne(`${n}-scrollbar`, {
        [`${n}-scrollbar-show`]: i
      }),
      style: {
        width: "8px",
        top: 0,
        bottom: 0,
        right: 0,
        position: "absolute",
        display: c ? void 0 : "none"
      },
      onMousedown: this.onContainerMouseDown,
      onMousemove: this.delayHidden
    }, [y("div", {
      ref: this.thumbRef,
      class: ne(`${n}-scrollbar-thumb`, {
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
  const l = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), c = pe(Symbol("update"));
  X(e, () => {
    c.value = Symbol("update");
  });
  let r;
  function p() {
    te.cancel(r);
  }
  function a() {
    p(), r = te(() => {
      l.forEach((m, d) => {
        if (m && m.offsetParent) {
          const {
            offsetHeight: M
          } = m;
          i.get(d) !== M && (c.value = Symbol("update"), i.set(d, m.offsetHeight));
        }
      });
    });
  }
  function s(m, d) {
    const M = t(m);
    l.get(M), d ? (l.set(M, d.$el || d), a()) : l.delete(M);
  }
  return nn(() => {
    p();
  }), [s, a, i, c];
}
function _n(e, t, n, o, l, i, c, r) {
  let p;
  return (a) => {
    if (a == null) {
      r();
      return;
    }
    te.cancel(p);
    const s = t.value, m = o.itemHeight;
    if (typeof a == "number")
      c(a);
    else if (a && typeof a == "object") {
      let d;
      const {
        align: M
      } = a;
      "index" in a ? {
        index: d
      } = a : d = s.findIndex((C) => l(C) === a.key);
      const {
        offset: v = 0
      } = a, x = (C, S) => {
        if (C < 0 || !e.value)
          return;
        const w = e.value.clientHeight;
        let E = !1, I = S;
        if (w) {
          const D = S || M;
          let F = 0, $ = 0, V = 0;
          const O = Math.min(s.length, d);
          for (let B = 0; B <= O; B += 1) {
            const W = l(s[B]);
            $ = F;
            const j = n.get(W);
            V = $ + (j === void 0 ? m : j), F = V, B === d && j === void 0 && (E = !0);
          }
          const L = e.value.scrollTop;
          let P = null;
          switch (D) {
            case "top":
              P = $ - v;
              break;
            case "bottom":
              P = V - w + v;
              break;
            default: {
              const B = L + w;
              $ < L ? I = "top" : V > B && (I = "bottom");
            }
          }
          P !== null && P !== L && c(P);
        }
        p = te(() => {
          E && i(), x(C - 1, I);
        }, 2);
      };
      x(5);
    }
  };
}
const Kn = typeof navigator == "object" && /Firefox/i.test(navigator.userAgent), St = (e, t) => {
  let n = !1, o = null;
  function l() {
    clearTimeout(o), n = !0, o = setTimeout(() => {
      n = !1;
    }, 50);
  }
  return function(i) {
    let c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    const r = (
      // Pass origin wheel when on the top
      i < 0 && e.value || // Pass origin wheel when on the bottom
      i > 0 && t.value
    );
    return c && r ? (clearTimeout(o), n = !1) : (!r || n) && l(), !n && r;
  };
};
function jn(e, t, n, o) {
  let l = 0, i = null, c = null, r = !1;
  const p = St(t, n);
  function a(m) {
    if (!e.value)
      return;
    te.cancel(i);
    const {
      deltaY: d
    } = m;
    l += d, c = d, !p(d) && (Kn || m.preventDefault(), i = te(() => {
      o(l * (r ? 10 : 1)), l = 0;
    }));
  }
  function s(m) {
    e.value && (r = m.detail === c);
  }
  return [a, s];
}
const Un = 14 / 15;
function Yn(e, t, n) {
  let o = !1, l = 0, i = null, c = null;
  const r = () => {
    i && (i.removeEventListener("touchmove", p), i.removeEventListener("touchend", a));
  }, p = (d) => {
    if (o) {
      const M = Math.ceil(d.touches[0].pageY);
      let v = l - M;
      l = M, n(v) && d.preventDefault(), clearInterval(c), c = setInterval(() => {
        v *= Un, (!n(v, !0) || Math.abs(v) <= 0.1) && clearInterval(c);
      }, 16);
    }
  }, a = () => {
    o = !1, r();
  }, s = (d) => {
    r(), d.touches.length === 1 && !o && (o = !0, l = Math.ceil(d.touches[0].pageY), i = d.target, i.addEventListener("touchmove", p, {
      passive: !1
    }), i.addEventListener("touchend", a));
  }, m = () => {
  };
  ae(() => {
    document.addEventListener("touchmove", m, {
      passive: !1
    }), X(e, (d) => {
      t.value.removeEventListener("touchstart", s), r(), clearInterval(c), d && t.value.addEventListener("touchstart", s, {
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
    getKey: c
  } = i;
  return e.slice(t, n + 1).map((r, p) => {
    const a = t + p, s = l(r, a, {
      // style: status === 'MEASURE_START' ? { visibility: 'hidden' } : {},
    }), m = c(r);
    return y(vt, {
      key: m,
      setRef: (d) => o(r, d)
    }, {
      default: () => [s]
    });
  });
}
const Do = re({
  compatConfig: {
    MODE: 3
  },
  name: "List",
  inheritAttrs: !1,
  props: {
    prefixCls: String,
    data: b.array,
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
        height: u,
        itemHeight: T,
        virtual: N
      } = e;
      return !!(N !== !1 && u && T);
    }), l = z(() => {
      const {
        height: u,
        itemHeight: T,
        data: N
      } = e;
      return o.value && N && T * N.length > u;
    }), i = be({
      scrollTop: 0,
      scrollMoving: !1
    }), c = z(() => e.data || Gn), r = A([]);
    X(c, () => {
      r.value = on(c.value).slice();
    }, {
      immediate: !0
    });
    const p = A((u) => {
    });
    X(() => e.itemKey, (u) => {
      typeof u == "function" ? p.value = u : p.value = (T) => T == null ? void 0 : T[u];
    }, {
      immediate: !0
    });
    const a = A(), s = A(), m = A(), d = (u) => p.value(u), M = {
      getKey: d
    };
    function v(u) {
      let T;
      typeof u == "function" ? T = u(i.scrollTop) : T = u;
      const N = F(T);
      a.value && (a.value.scrollTop = N), i.scrollTop = N;
    }
    const [x, C, S, w] = Wn(r, d), E = be({
      scrollHeight: void 0,
      start: 0,
      end: 0,
      offset: void 0
    }), I = A(0);
    ae(() => {
      He(() => {
        var u;
        I.value = ((u = s.value) === null || u === void 0 ? void 0 : u.offsetHeight) || 0;
      });
    }), ln(() => {
      He(() => {
        var u;
        I.value = ((u = s.value) === null || u === void 0 ? void 0 : u.offsetHeight) || 0;
      });
    }), X([o, r], () => {
      o.value || h(E, {
        scrollHeight: void 0,
        start: 0,
        end: r.value.length - 1,
        offset: void 0
      });
    }, {
      immediate: !0
    }), X([o, r, I, l], () => {
      o.value && !l.value && h(E, {
        scrollHeight: I.value,
        start: 0,
        end: r.value.length - 1,
        offset: void 0
      }), a.value && (i.scrollTop = a.value.scrollTop);
    }, {
      immediate: !0
    }), X([l, o, () => i.scrollTop, r, w, () => e.height, I], () => {
      if (!o.value || !l.value)
        return;
      let u = 0, T, N, Q;
      const he = r.value.length, Ee = r.value, we = i.scrollTop, {
        itemHeight: q,
        height: Ie
      } = e, ve = we + Ie;
      for (let ue = 0; ue < he; ue += 1) {
        const f = Ee[ue], g = d(f);
        let K = S.get(g);
        K === void 0 && (K = q);
        const U = u + K;
        T === void 0 && U >= we && (T = ue, N = u), Q === void 0 && U > ve && (Q = ue), u = U;
      }
      T === void 0 && (T = 0, N = 0, Q = Math.ceil(Ie / q)), Q === void 0 && (Q = he - 1), Q = Math.min(Q + 1, he), h(E, {
        scrollHeight: u,
        start: T,
        end: Q,
        offset: N
      });
    }, {
      immediate: !0
    });
    const D = z(() => E.scrollHeight - e.height);
    function F(u) {
      let T = u;
      return Number.isNaN(D.value) || (T = Math.min(T, D.value)), T = Math.max(T, 0), T;
    }
    const $ = z(() => i.scrollTop <= 0), V = z(() => i.scrollTop >= D.value), O = St($, V);
    function L(u) {
      v(u);
    }
    function P(u) {
      var T;
      const {
        scrollTop: N
      } = u.currentTarget;
      N !== i.scrollTop && v(N), (T = e.onScroll) === null || T === void 0 || T.call(e, u);
    }
    const [B, W] = jn(o, $, V, (u) => {
      v((T) => T + u);
    });
    Yn(o, a, (u, T) => O(u, T) ? !1 : (B({
      preventDefault() {
      },
      deltaY: u
    }), !0));
    function j(u) {
      o.value && u.preventDefault();
    }
    const H = () => {
      a.value && (a.value.removeEventListener("wheel", B, le ? {
        passive: !1
      } : !1), a.value.removeEventListener("DOMMouseScroll", W), a.value.removeEventListener("MozMousePixelScroll", j));
    };
    Ke(() => {
      He(() => {
        a.value && (H(), a.value.addEventListener("wheel", B, le ? {
          passive: !1
        } : !1), a.value.addEventListener("DOMMouseScroll", W), a.value.addEventListener("MozMousePixelScroll", j));
      });
    }), ye(() => {
      H();
    });
    const _ = _n(a, r, S, e, d, C, v, () => {
      var u;
      (u = m.value) === null || u === void 0 || u.delayHidden();
    });
    n({
      scrollTo: _
    });
    const oe = z(() => {
      let u = null;
      return e.height && (u = h({
        [e.fullHeight ? "height" : "maxHeight"]: e.height + "px"
      }, Qn), o.value && (u.overflowY = "hidden", i.scrollMoving && (u.pointerEvents = "none"))), u;
    });
    return X([() => E.start, () => E.end, r], () => {
      if (e.onVisibleChange) {
        const u = r.value.slice(E.start, E.end + 1);
        e.onVisibleChange(u, r.value);
      }
    }, {
      flush: "post"
    }), {
      state: i,
      mergedData: r,
      componentStyle: oe,
      onFallbackScroll: P,
      onScrollBar: L,
      componentRef: a,
      useVirtual: o,
      calRes: E,
      collectHeight: C,
      setInstance: x,
      sharedConfig: M,
      scrollBarRef: m,
      fillerInnerRef: s,
      delayHideScrollBar: () => {
        var u;
        (u = m.value) === null || u === void 0 || u.delayHidden();
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
      itemKey: c,
      virtual: r,
      component: p = "div",
      onScroll: a,
      children: s = this.$slots.default,
      style: m,
      class: d
    } = e, M = Xn(e, ["prefixCls", "height", "itemHeight", "fullHeight", "data", "itemKey", "virtual", "component", "onScroll", "children", "style", "class"]), v = ne(t, d), {
      scrollTop: x
    } = this.state, {
      scrollHeight: C,
      offset: S,
      start: w,
      end: E
    } = this.calRes, {
      componentStyle: I,
      onFallbackScroll: D,
      onScrollBar: F,
      useVirtual: $,
      collectHeight: V,
      sharedConfig: O,
      setInstance: L,
      mergedData: P,
      delayHideScrollBar: B
    } = this;
    return y("div", ee({
      style: h(h({}, m), {
        position: "relative"
      }),
      class: v
    }, M), [y(p, {
      class: `${t}-holder`,
      style: I,
      ref: "componentRef",
      onScroll: D,
      onMouseenter: B
    }, {
      default: () => [y(Me, {
        prefixCls: t,
        height: C,
        offset: S,
        onInnerResize: V,
        ref: "fillerInnerRef"
      }, {
        default: () => qn(P, w, E, L, s, O)
      })]
    }), $ && y(An, {
      ref: "scrollBarRef",
      prefixCls: t,
      scrollTop: x,
      height: n,
      scrollHeight: C,
      count: P.length,
      onScroll: F,
      onStartMove: () => {
        this.state.scrollMoving = !0;
      },
      onStopMove: () => {
        this.state.scrollMoving = !1;
      }
    }, null)]);
  }
});
let rt = 0;
const Zn = process.env.NODE_ENV !== "test" && Gt();
function Jn() {
  let e;
  return Zn ? (e = rt, rt += 1) : e = "TEST_OR_SSR", e;
}
function Oo() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : pe("");
  const t = `rc_select_${Jn()}`;
  return e.value || t;
}
function Ho(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    loading: n,
    multiple: o,
    prefixCls: l,
    hasFeedback: i,
    feedbackIcon: c,
    showArrow: r
  } = e, p = e.suffixIcon || t.suffixIcon && t.suffixIcon(), a = e.clearIcon || t.clearIcon && t.clearIcon(), s = e.menuItemSelectedIcon || t.menuItemSelectedIcon && t.menuItemSelectedIcon(), m = e.removeIcon || t.removeIcon && t.removeIcon(), d = a ?? y(Qt, null, null), M = (S) => y($e, null, [r !== !1 && S, i && c]);
  let v = null;
  if (p !== void 0)
    v = M(p);
  else if (n)
    v = M(y(qt, {
      spin: !0
    }, null));
  else {
    const S = `${l}-suffix`;
    v = (w) => {
      let {
        open: E,
        showSearch: I
      } = w;
      return M(E && I ? y(pn, {
        class: S
      }, null) : y(dn, {
        class: S
      }, null));
    };
  }
  let x = null;
  s !== void 0 ? x = s : o ? x = y(sn, null, null) : x = null;
  let C = null;
  return m !== void 0 ? C = m : C = y(fn, null, null), {
    clearIcon: d,
    suffixIcon: v,
    itemIcon: x,
    removeIcon: C
  };
}
const st = (e) => {
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
          animationName: gn
        },
        [`&${t}-slide-up-leave${t}-slide-up-leave-active${n}-dropdown-placement-bottomLeft`]: {
          animationName: hn
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
        [`${o}-empty`]: h(h({}, st(e)), {
          color: e.colorTextDisabled
        }),
        [`${o}`]: h(h({}, st(e)), {
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
    ot(e, "slide-up"),
    ot(e, "slide-down"),
    nt(e, "move-up"),
    nt(e, "move-down")
  ];
}, me = 2;
function bt(e) {
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
  } = e, l = `${n}-selection-overflow`, i = e.controlHeightSM, [c] = bt(e), r = t ? `${n}-${t}` : "";
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
        padding: `${c - me}px ${me * 2}px`,
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
          margin: `${me}px 0`,
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
        marginTop: me,
        marginBottom: me,
        lineHeight: `${i - e.lineWidth * 2}px`,
        background: e.colorFillSecondary,
        border: `${e.lineWidth}px solid ${e.colorSplit}`,
        borderRadius: e.borderRadiusSM,
        cursor: "default",
        transition: `font-size ${e.motionDurationSlow}, line-height ${e.motionDurationSlow}, height ${e.motionDurationSlow}`,
        userSelect: "none",
        marginInlineEnd: me * 2,
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
        "&-remove": h(h({}, ct()), {
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
        marginInlineStart: e.inputPaddingHorizontalBase - c,
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
  }), [, o] = bt(e);
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
  } = e, i = e.controlHeight - e.lineWidth * 2, c = Math.ceil(e.fontSize * 1.25), r = t ? `${n}-${t}` : "";
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
        paddingInlineEnd: c
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
    antCls: c
  } = t, r = n ? {
    [`${o}-selector`]: {
      borderColor: l
    }
  } : {};
  return {
    [e]: {
      [`&:not(${o}-disabled):not(${o}-customize-input):not(${c}-pagination-size-changer)`]: h(h({}, r), {
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
      [`${t}-arrow`]: h(h({}, ct()), {
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
    Jt(e, {
      borderElCls: `${t}-selector`,
      focusElCls: `${t}-focused`
    })
  ];
}, Bo = Zt("Select", (e, t) => {
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
  Po as B,
  Do as L,
  ge as T,
  Eo as a,
  Oo as b,
  Te as c,
  Mo as d,
  Ln as e,
  Sn as f,
  Bo as g,
  Ho as h,
  zn as i,
  je as j,
  Ro as k,
  Dn as t,
  Fo as u
};
