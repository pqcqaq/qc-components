import { i as E, _ as o, c as V, b as W, P as F } from "./styleChecker-DdDg1L8e.js";
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
    const d = f(t.checked === void 0 ? t.defaultChecked : t.checked), i = f();
    M(() => t.checked, () => {
      d.value = t.checked;
    }), a({
      focus() {
        var e;
        (e = i.value) === null || e === void 0 || e.focus();
      },
      blur() {
        var e;
        (e = i.value) === null || e === void 0 || e.blur();
      }
    });
    const s = f(), y = (e) => {
      if (t.disabled)
        return;
      t.checked === void 0 && (d.value = e.target.checked), e.shiftKey = s.value;
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
      t.checked !== void 0 && (i.value.checked = !!t.checked), n("change", u), s.value = !1;
    }, k = (e) => {
      n("click", e), s.value = e.shiftKey;
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
        onChange: y,
        onClick: k,
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
        ref: i
      }, A), null), h("span", {
        class: `${e}-inner`
      }, null)]);
    };
  }
});
export {
  H as V
};
