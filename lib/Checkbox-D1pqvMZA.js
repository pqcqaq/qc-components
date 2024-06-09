import { k as E, _ as o, g as V, h as W, P as F } from "./index-Dn-f9Oyw.js";
import { defineComponent as I, ref as f, watch as M, createVNode as h } from "vue";
var R = function(t, l) {
  var c = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && l.indexOf(n) < 0 && (c[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(t); a < n.length; a++)
      l.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[a]) && (c[n[a]] = t[n[a]]);
  return c;
};
const T = {
  prefixCls: String,
  name: String,
  id: String,
  type: String,
  defaultChecked: {
    type: [Boolean, Number],
    default: void 0
  },
  checked: {
    type: [Boolean, Number],
    default: void 0
  },
  disabled: Boolean,
  tabindex: {
    type: [Number, String]
  },
  readonly: Boolean,
  autofocus: Boolean,
  value: F.any,
  required: Boolean
}, H = I({
  compatConfig: {
    MODE: 3
  },
  name: "Checkbox",
  inheritAttrs: !1,
  props: E(T, {
    prefixCls: "rc-checkbox",
    type: "checkbox",
    defaultChecked: !1
  }),
  emits: ["click", "change"],
  setup(t, l) {
    let {
      attrs: c,
      emit: n,
      expose: a
    } = l;
    const d = f(t.checked === void 0 ? t.defaultChecked : t.checked), s = f();
    M(() => t.checked, () => {
      d.value = t.checked;
    }), a({
      focus() {
        var e;
        (e = s.value) === null || e === void 0 || e.focus();
      },
      blur() {
        var e;
        (e = s.value) === null || e === void 0 || e.blur();
      }
    });
    const i = f(), k = (e) => {
      if (t.disabled)
        return;
      t.checked === void 0 && (d.value = e.target.checked), e.shiftKey = i.value;
      const u = {
        target: o(o({}, t), {
          checked: e.target.checked
        }),
        stopPropagation() {
          e.stopPropagation();
        },
        preventDefault() {
          e.preventDefault();
        },
        nativeEvent: e
      };
      t.checked !== void 0 && (s.value.checked = !!t.checked), n("change", u), i.value = !1;
    }, y = (e) => {
      n("click", e), i.value = e.shiftKey;
    };
    return () => {
      const {
        prefixCls: e,
        name: u,
        id: g,
        type: m,
        disabled: b,
        readonly: x,
        tabindex: C,
        autofocus: O,
        value: P,
        required: S
      } = t, _ = R(t, ["prefixCls", "name", "id", "type", "disabled", "readonly", "tabindex", "autofocus", "value", "required"]), {
        class: j,
        onFocus: B,
        onBlur: K,
        onKeydown: N,
        onKeypress: w,
        onKeyup: D
      } = c, v = o(o({}, _), c), $ = Object.keys(v).reduce((p, r) => ((r.startsWith("data-") || r.startsWith("aria-") || r === "role") && (p[r] = v[r]), p), {}), q = V(e, j, {
        [`${e}-checked`]: d.value,
        [`${e}-disabled`]: b
      }), A = o(o({
        name: u,
        id: g,
        type: m,
        readonly: x,
        disabled: b,
        tabindex: C,
        class: `${e}-input`,
        checked: !!d.value,
        autofocus: O,
        value: P
      }, $), {
        onChange: k,
        onClick: y,
        onFocus: B,
        onBlur: K,
        onKeydown: N,
        onKeypress: w,
        onKeyup: D,
        required: S
      });
      return h("span", {
        class: q
      }, [h("input", W({
        ref: s
      }, A), null), h("span", {
        class: `${e}-inner`
      }, null)]);
    };
  }
});
export {
  H as V
};
