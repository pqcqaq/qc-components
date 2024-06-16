import { _ as h, F as T, G as S, C as m, P as ne, D as te, x as X, H as le, u as q, y as oe, w as ue, E as re, c as R, b as P } from "./styleChecker-DdDg1L8e.js";
import { defineComponent as z, inject as se, computed as y, watchEffect as ce, onBeforeUnmount as ie, onMounted as de, ref as I, createVNode as w, watch as H, provide as ve } from "vue";
import { V as fe } from "./Checkbox-C2UGvajO.js";
import { u as J } from "./index-BKZP0TvE.js";
const me = () => ({
  name: String,
  prefixCls: String,
  options: T([]),
  disabled: Boolean,
  id: String
}), he = () => h(h({}, me()), {
  defaultValue: T(),
  value: T(),
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
var K = function(e, b) {
  var u = {};
  for (var t in e)
    Object.prototype.hasOwnProperty.call(e, t) && b.indexOf(t) < 0 && (u[t] = e[t]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, t = Object.getOwnPropertySymbols(e); s < t.length; s++)
      b.indexOf(t[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[s]) && (u[t[s]] = e[t[s]]);
  return u;
};
const O = z({
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
    const C = X(), G = le.useInject(), {
      prefixCls: c,
      direction: p,
      disabled: j
    } = q("checkbox", e), A = oe(), [i, f] = J(c), l = se(L, void 0), g = Symbol("checkboxUniId"), M = y(() => (l == null ? void 0 : l.disabled.value) || j.value);
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
        id: D = C.id.value
      } = e, E = K(e, ["indeterminate", "skipGroup", "id"]), {
        onMouseenter: F,
        onMouseleave: k,
        onInput: ge,
        class: W,
        style: Y
      } = t, Z = K(t, ["onMouseenter", "onMouseleave", "onInput", "class", "style"]), v = h(h(h(h({}, E), {
        id: D,
        prefixCls: c.value
      }), Z), {
        disabled: M.value
      });
      l && !d ? (v.onChange = function() {
        for (var B = arguments.length, N = new Array(B), V = 0; V < B; V++)
          N[V] = arguments[V];
        u("change", ...N), l.toggleOption({
          label: r,
          value: e.value
        });
      }, v.name = l.name.value, v.checked = l.mergedValue.value.includes(e.value), v.disabled = M.value || A.value, v.indeterminate = o) : v.onChange = $;
      const ee = R({
        [`${c.value}-wrapper`]: !0,
        [`${c.value}-rtl`]: p.value === "rtl",
        [`${c.value}-wrapper-checked`]: v.checked,
        [`${c.value}-wrapper-disabled`]: v.disabled,
        [`${c.value}-wrapper-in-form-item`]: G.isFormItemInput
      }, W, f.value), ae = R({
        [`${c.value}-indeterminate`]: o
      }, f.value);
      return i(w("label", {
        class: ee,
        style: Y,
        onMouseenter: F,
        onMouseleave: k
      }, [w(fe, P(P({
        "aria-checked": o ? "mixed" : void 0
      }, v), {}, {
        class: ae,
        ref: x
      }), null), r.length ? w("span", null, [r]) : null]));
    };
  }
}), U = z({
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
    const C = X(), {
      prefixCls: G,
      direction: c
    } = q("checkbox", e), p = y(() => `${G.value}-group`), [j, A] = J(p), i = I((e.value === void 0 ? e.defaultValue : e.value) || []);
    H(() => e.value, () => {
      i.value = e.value || [];
    });
    const f = y(() => e.options.map((n) => typeof n == "string" || typeof n == "number" ? {
      label: n,
      value: n
    } : n)), l = I(Symbol()), g = I(/* @__PURE__ */ new Map()), M = (n) => {
      g.value.delete(n), l.value = Symbol();
    }, $ = (n, a) => {
      g.value.set(n, a), l.value = Symbol();
    }, x = I(/* @__PURE__ */ new Map());
    return H(l, () => {
      const n = /* @__PURE__ */ new Map();
      for (const a of g.value.values())
        n.set(a, !0);
      x.value = n;
    }), ve(L, {
      cancelValue: M,
      registerValue: $,
      toggleOption: (n) => {
        const a = i.value.indexOf(n.value), r = [...i.value];
        a === -1 ? r.push(n.value) : r.splice(a, 1), e.value === void 0 && (i.value = r);
        const o = r.filter((d) => x.value.has(d)).sort((d, D) => {
          const E = f.value.findIndex((k) => k.value === d), F = f.value.findIndex((k) => k.value === D);
          return E - F;
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
          prefixCls: G.value,
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
