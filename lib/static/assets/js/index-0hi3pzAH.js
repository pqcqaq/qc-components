import { _ as h, p as E, q as S, t as m, P as ne, v as te, x as z, F as le, u as H, y as oe, w as ue, z as re, c as R, b as P } from "./styleChecker-DxpCOgAe.js";
import { defineComponent as X, inject as se, computed as y, watchEffect as ce, onBeforeUnmount as ie, onMounted as de, ref as I, createVNode as w, watch as K, provide as ve } from "vue";
import { V as fe } from "./Checkbox-QwslWBCq.js";
import { u as J } from "./index-n_6ZLlMU.js";
const me = () => ({
  name: String,
  prefixCls: String,
  options: E([]),
  disabled: Boolean,
  id: String
}), he = () => h(h({}, me()), {
  defaultValue: E(),
  value: E(),
  onChange: S(),
  "onUpdate:value": S()
}), be = () => ({
  prefixCls: String,
  defaultChecked: m(),
  checked: m(),
  disabled: m(),
  isGroup: m(),
  value: ne.any,
  name: String,
  id: String,
  indeterminate: m(),
  type: te("checkbox"),
  autofocus: m(),
  onChange: S(),
  "onUpdate:checked": S(),
  onClick: S(),
  skipGroup: m(!1)
}), pe = () => h(h({}, be()), {
  indeterminate: m(!1)
}), L = Symbol("CheckboxGroupContext");
var q = function(e, b) {
  var u = {};
  for (var t in e)
    Object.prototype.hasOwnProperty.call(e, t) && b.indexOf(t) < 0 && (u[t] = e[t]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, t = Object.getOwnPropertySymbols(e); s < t.length; s++)
      b.indexOf(t[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[s]) && (u[t[s]] = e[t[s]]);
  return u;
};
const O = X({
  compatConfig: {
    MODE: 3
  },
  name: "ACheckbox",
  inheritAttrs: !1,
  __ANT_CHECKBOX: !0,
  props: pe(),
  // emits: ['change', 'update:checked'],
  setup(e, b) {
    let {
      emit: u,
      attrs: t,
      slots: s,
      expose: _
    } = b;
    const C = z(), M = le.useInject(), {
      prefixCls: c,
      direction: p,
      disabled: j
    } = H("checkbox", e), A = oe(), [i, f] = J(c), l = se(L, void 0), g = Symbol("checkboxUniId"), G = y(() => (l == null ? void 0 : l.disabled.value) || j.value);
    ce(() => {
      !e.skipGroup && l && l.registerValue(g, e.value);
    }), ie(() => {
      l && l.cancelValue(g);
    }), de(() => {
      ue(!!(e.checked !== void 0 || l || e.value === void 0), "Checkbox", "`value` is not validate prop, do you mean `checked`?");
    });
    const $ = (a) => {
      const r = a.target.checked;
      u("update:checked", r), u("change", a), C.onFieldChange();
    }, x = I();
    return _({
      focus: () => {
        var a;
        (a = x.value) === null || a === void 0 || a.focus();
      },
      blur: () => {
        var a;
        (a = x.value) === null || a === void 0 || a.blur();
      }
    }), () => {
      var a;
      const r = re((a = s.default) === null || a === void 0 ? void 0 : a.call(s)), {
        indeterminate: o,
        skipGroup: d,
        id: F = C.id.value
      } = e, T = q(e, ["indeterminate", "skipGroup", "id"]), {
        onMouseenter: D,
        onMouseleave: k,
        onInput: ge,
        class: W,
        style: Y
      } = t, Z = q(t, ["onMouseenter", "onMouseleave", "onInput", "class", "style"]), v = h(h(h(h({}, T), {
        id: F,
        prefixCls: c.value
      }), Z), {
        disabled: G.value
      });
      l && !d ? (v.onChange = function() {
        for (var B = arguments.length, N = new Array(B), V = 0; V < B; V++)
          N[V] = arguments[V];
        u("change", ...N), l.toggleOption({
          label: r,
          value: e.value
        });
      }, v.name = l.name.value, v.checked = l.mergedValue.value.includes(e.value), v.disabled = G.value || A.value, v.indeterminate = o) : v.onChange = $;
      const ee = R({
        [`${c.value}-wrapper`]: !0,
        [`${c.value}-rtl`]: p.value === "rtl",
        [`${c.value}-wrapper-checked`]: v.checked,
        [`${c.value}-wrapper-disabled`]: v.disabled,
        [`${c.value}-wrapper-in-form-item`]: M.isFormItemInput
      }, W, f.value), ae = R({
        [`${c.value}-indeterminate`]: o
      }, f.value);
      return i(w("label", {
        class: ee,
        style: Y,
        onMouseenter: D,
        onMouseleave: k
      }, [w(fe, P(P({
        "aria-checked": o ? "mixed" : void 0
      }, v), {}, {
        class: ae,
        ref: x
      }), null), r.length ? w("span", null, [r]) : null]));
    };
  }
}), U = X({
  compatConfig: {
    MODE: 3
  },
  name: "ACheckboxGroup",
  inheritAttrs: !1,
  props: he(),
  // emits: ['change', 'update:value'],
  setup(e, b) {
    let {
      slots: u,
      attrs: t,
      emit: s,
      expose: _
    } = b;
    const C = z(), {
      prefixCls: M,
      direction: c
    } = H("checkbox", e), p = y(() => `${M.value}-group`), [j, A] = J(p), i = I((e.value === void 0 ? e.defaultValue : e.value) || []);
    K(() => e.value, () => {
      i.value = e.value || [];
    });
    const f = y(() => e.options.map((n) => typeof n == "string" || typeof n == "number" ? {
      label: n,
      value: n
    } : n)), l = I(Symbol()), g = I(/* @__PURE__ */ new Map()), G = (n) => {
      g.value.delete(n), l.value = Symbol();
    }, $ = (n, a) => {
      g.value.set(n, a), l.value = Symbol();
    }, x = I(/* @__PURE__ */ new Map());
    return K(l, () => {
      const n = /* @__PURE__ */ new Map();
      for (const a of g.value.values())
        n.set(a, !0);
      x.value = n;
    }), ve(L, {
      cancelValue: G,
      registerValue: $,
      toggleOption: (n) => {
        const a = i.value.indexOf(n.value), r = [...i.value];
        a === -1 ? r.push(n.value) : r.splice(a, 1), e.value === void 0 && (i.value = r);
        const o = r.filter((d) => x.value.has(d)).sort((d, F) => {
          const T = f.value.findIndex((k) => k.value === d), D = f.value.findIndex((k) => k.value === F);
          return T - D;
        });
        s("update:value", o), s("change", o), C.onFieldChange();
      },
      mergedValue: i,
      name: y(() => e.name),
      disabled: y(() => e.disabled)
    }), _({
      mergedValue: i
    }), () => {
      var n;
      const {
        id: a = C.id.value
      } = e;
      let r = null;
      return f.value && f.value.length > 0 && (r = f.value.map((o) => {
        var d;
        return w(O, {
          prefixCls: M.value,
          key: o.value.toString(),
          disabled: "disabled" in o ? o.disabled : e.disabled,
          indeterminate: o.indeterminate,
          value: o.value,
          checked: i.value.indexOf(o.value) !== -1,
          onChange: o.onChange,
          class: `${p.value}-item`
        }, {
          default: () => [u.label !== void 0 ? (d = u.label) === null || d === void 0 ? void 0 : d.call(u, o) : o.label]
        });
      })), j(w("div", P(P({}, t), {}, {
        class: [p.value, {
          [`${p.value}-rtl`]: c.value === "rtl"
        }, t.class, A.value],
        id: a
      }), [r || ((n = u.default) === null || n === void 0 ? void 0 : n.call(u))]));
    };
  }
});
O.Group = U;
O.install = function(e) {
  return e.component(O.name, O), e.component(U.name, U), e;
};
export {
  U as A,
  O as C
};
