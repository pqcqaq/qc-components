import { defineComponent as L, ref as B, createVNode as A, onMounted as W, computed as _, openBlock as M, createBlock as G, mergeProps as P } from "vue";
import { _ as y, w as N, u as k, O as D, b as I, z as V } from "./styleChecker-DxpCOgAe.js";
import { S as F, s as x } from "./index-Dos6ah6k.js";
import { o as E } from "./omit-BQe9TABq.js";
const v = () => null;
v.isSelectOption = !0;
v.displayName = "AAutoCompleteOption";
const h = () => null;
h.isSelectOptGroup = !0;
h.displayName = "AAutoCompleteOptGroup";
function z(t) {
  var c, e;
  return ((c = t == null ? void 0 : t.type) === null || c === void 0 ? void 0 : c.isSelectOption) || ((e = t == null ? void 0 : t.type) === null || e === void 0 ? void 0 : e.isSelectOptGroup);
}
const T = () => y(y({}, E(x(), ["loading", "mode", "optionLabelProp", "labelInValue"])), {
  dataSource: Array,
  dropdownMenuStyle: {
    type: Object,
    default: void 0
  },
  // optionLabelProp: String,
  dropdownMatchSelectWidth: {
    type: [Number, Boolean],
    default: !0
  },
  prefixCls: String,
  showSearch: {
    type: Boolean,
    default: void 0
  },
  transitionName: String,
  choiceTransitionName: {
    type: String,
    default: "zoom"
  },
  autofocus: {
    type: Boolean,
    default: void 0
  },
  backfill: {
    type: Boolean,
    default: void 0
  },
  // optionLabelProp: PropTypes.string.def('children'),
  filterOption: {
    type: [Boolean, Function],
    default: !1
  },
  defaultActiveFirstOption: {
    type: Boolean,
    default: !0
  },
  status: String
}), w = L({
  compatConfig: {
    MODE: 3
  },
  name: "AAutoComplete",
  inheritAttrs: !1,
  props: T(),
  // emits: ['change', 'select', 'focus', 'blur'],
  slots: Object,
  setup(t, c) {
    let {
      slots: e,
      attrs: O,
      expose: f
    } = c;
    N(!("dataSource" in e), "AutoComplete", "`dataSource` slot is deprecated, please use props `options` instead."), N(!("options" in e), "AutoComplete", "`options` slot is deprecated, please use props `options` instead."), N(!t.dropdownClassName, "AutoComplete", "`dropdownClassName` is deprecated, please use `popupClassName` instead.");
    const d = B(), a = () => {
      var l;
      const i = V((l = e.default) === null || l === void 0 ? void 0 : l.call(e));
      return i.length ? i[0] : void 0;
    };
    f({
      focus: () => {
        var l;
        (l = d.value) === null || l === void 0 || l.focus();
      },
      blur: () => {
        var l;
        (l = d.value) === null || l === void 0 || l.blur();
      }
    });
    const {
      prefixCls: u
    } = k("select", t);
    return () => {
      var l, i, S;
      const {
        size: o,
        dataSource: n,
        notFoundContent: r = (l = e.notFoundContent) === null || l === void 0 ? void 0 : l.call(e)
      } = t;
      let p;
      const {
        class: C
      } = O, $ = {
        [C]: !!C,
        [`${u.value}-lg`]: o === "large",
        [`${u.value}-sm`]: o === "small",
        [`${u.value}-show-search`]: !0,
        [`${u.value}-auto-complete`]: !0
      };
      if (t.options === void 0) {
        const b = ((i = e.dataSource) === null || i === void 0 ? void 0 : i.call(e)) || ((S = e.options) === null || S === void 0 ? void 0 : S.call(e)) || [];
        b.length && z(b[0]) ? p = b : p = n ? n.map((s) => {
          if (D(s))
            return s;
          switch (typeof s) {
            case "string":
              return A(v, {
                key: s,
                value: s
              }, {
                default: () => [s]
              });
            case "object":
              return A(v, {
                key: s.value,
                value: s.value
              }, {
                default: () => [s.text]
              });
            default:
              throw new Error("AutoComplete[dataSource] only supports type `string[] | Object[]`.");
          }
        }) : [];
      }
      const j = E(y(y(y({}, t), O), {
        mode: F.SECRET_COMBOBOX_MODE_DO_NOT_USE,
        // optionLabelProp,
        getInputElement: a,
        notFoundContent: r,
        // placeholder: '',
        class: $,
        popupClassName: t.popupClassName || t.dropdownClassName,
        ref: d
      }), ["dataSource", "loading"]);
      return A(F, j, I({
        default: () => [p]
      }, E(e, ["default", "dataSource", "options"])));
    };
  }
}), K = y(w, {
  Option: v,
  OptGroup: h,
  install(t) {
    return t.component(w.name, w), t.component(v.displayName, v), t.component(h.displayName, h), t;
  }
}), H = /* @__PURE__ */ L({
  __name: "AutoCompleteInput",
  props: {
    title: {},
    value: {},
    fetchList: { type: [Function, Array] },
    style: {},
    enableSplit: { type: Boolean },
    splitWord: {},
    placeholder: {}
  },
  emits: ["update:value"],
  setup(t, { emit: c }) {
    const e = t, O = c, f = B([]), d = B([]);
    W(async () => {
      if (e.fetchList) {
        if (e.fetchList instanceof Function) {
          const o = await e.fetchList();
          f.value.push(...o);
        } else
          f.value.push(...e.fetchList);
        d.value = f.value;
      }
    });
    const a = _({
      get() {
        return e.value;
      },
      set(o) {
        O("update:value", o);
      }
    }), m = _(() => e.splitWord || ","), g = _(() => e.title || ""), u = _(() => !!e.enableSplit), l = (o, n) => {
      var p;
      const r = u.value ? (p = n.split(m.value).pop()) == null ? void 0 : p.trim() : n;
      return o.filter(
        (C) => C.value.includes(r || "") && C.value !== r
      );
    }, i = (o) => {
      if (u.value) {
        const n = a.value ? a.value.endsWith(m.value) ? a.value.split(m.value).slice(0, -1) : a.value.split(m.value) : [], r = a.value ? [...n, o].join(m.value) : o;
        a.value = r;
      } else
        a.value = o;
    }, S = (o) => {
      d.value = l(f.value, o);
    };
    return (o, n) => {
      const r = K;
      return M(), G(r, P({
        value: a.value,
        "onUpdate:value": n[0] || (n[0] = (p) => a.value = p),
        placeholder: o.placeholder ? o.placeholder : `输入${g.value}内容${u.value ? "（以" + o.splitWord + "分割）" : ""} 或选择已有${g.value}`,
        onSelect: i,
        options: d.value,
        onSearch: S
      }, {
        ...o.$attrs,
        style: e.style
      }), null, 16, ["value", "placeholder", "options"]);
    };
  }
});
export {
  H as default
};
