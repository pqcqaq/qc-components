import { defineComponent as U, inject as se, computed as O, watchEffect as ce, onBeforeUnmount as ie, onMounted as W, ref as y, createVNode as _, watch as H, provide as de, openBlock as T, createElementBlock as L, createElementVNode as ve, toDisplayString as X, unref as q, mergeProps as fe, withCtx as z, Fragment as me, renderList as pe, createBlock as he, createTextVNode as be } from "vue";
import { _ as C, a as N, f as P, b as x, P as ge, s as xe, u as Y, F as Ce, c as Z, d as ke, w as ye, e as Ie, g as J, h as j } from "./index-Dn-f9Oyw.js";
import { V as Se } from "./Checkbox-D1pqvMZA.js";
import { u as ee } from "./index-DXHIYLcU.js";
const we = () => ({
  name: String,
  prefixCls: String,
  options: N([]),
  disabled: Boolean,
  id: String
}), Oe = () => C(C({}, we()), {
  defaultValue: N(),
  value: N(),
  onChange: P(),
  "onUpdate:value": P()
}), _e = () => ({
  prefixCls: String,
  defaultChecked: x(),
  checked: x(),
  disabled: x(),
  isGroup: x(),
  value: ge.any,
  name: String,
  id: String,
  indeterminate: x(),
  type: xe("checkbox"),
  autofocus: x(),
  onChange: P(),
  "onUpdate:checked": P(),
  onClick: P(),
  skipGroup: x(!1)
}), Ve = () => C(C({}, _e()), {
  indeterminate: x(!1)
}), ae = Symbol("CheckboxGroupContext");
var Q = function(e, h) {
  var t = {};
  for (var l in e)
    Object.prototype.hasOwnProperty.call(e, l) && h.indexOf(l) < 0 && (t[l] = e[l]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, l = Object.getOwnPropertySymbols(e); r < l.length; r++)
      h.indexOf(l[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, l[r]) && (t[l[r]] = e[l[r]]);
  return t;
};
const V = U({
  compatConfig: {
    MODE: 3
  },
  name: "ACheckbox",
  inheritAttrs: !1,
  __ANT_CHECKBOX: !0,
  props: Ve(),
  // emits: ['change', 'update:checked'],
  setup(e, h) {
    let {
      emit: t,
      attrs: l,
      slots: r,
      expose: b
    } = h;
    const d = Y(), k = Ce.useInject(), {
      prefixCls: i,
      direction: s,
      disabled: I
    } = Z("checkbox", e), v = ke(), [f, g] = ee(i), o = se(ae, void 0), S = Symbol("checkboxUniId"), A = O(() => (o == null ? void 0 : o.disabled.value) || I.value);
    ce(() => {
      !e.skipGroup && o && o.registerValue(S, e.value);
    }), ie(() => {
      o && o.cancelValue(S);
    }), W(() => {
      ye(!!(e.checked !== void 0 || o || e.value === void 0), "Checkbox", "`value` is not validate prop, do you mean `checked`?");
    });
    const F = (a) => {
      const c = a.target.checked;
      t("update:checked", c), t("change", a), d.onFieldChange();
    }, w = y();
    return b({
      focus: () => {
        var a;
        (a = w.value) === null || a === void 0 || a.focus();
      },
      blur: () => {
        var a;
        (a = w.value) === null || a === void 0 || a.blur();
      }
    }), () => {
      var a;
      const c = Ie((a = r.default) === null || a === void 0 ? void 0 : a.call(r)), {
        indeterminate: u,
        skipGroup: m,
        id: B = d.id.value
      } = e, D = Q(e, ["indeterminate", "skipGroup", "id"]), {
        onMouseenter: E,
        onMouseleave: M,
        onInput: Me,
        class: ne,
        style: le
      } = l, oe = Q(l, ["onMouseenter", "onMouseleave", "onInput", "class", "style"]), p = C(C(C(C({}, D), {
        id: B,
        prefixCls: i.value
      }), oe), {
        disabled: A.value
      });
      o && !m ? (p.onChange = function() {
        for (var R = arguments.length, K = new Array(R), G = 0; G < R; G++)
          K[G] = arguments[G];
        t("change", ...K), o.toggleOption({
          label: c,
          value: e.value
        });
      }, p.name = o.name.value, p.checked = o.mergedValue.value.includes(e.value), p.disabled = A.value || v.value, p.indeterminate = u) : p.onChange = F;
      const ue = J({
        [`${i.value}-wrapper`]: !0,
        [`${i.value}-rtl`]: s.value === "rtl",
        [`${i.value}-wrapper-checked`]: p.checked,
        [`${i.value}-wrapper-disabled`]: p.disabled,
        [`${i.value}-wrapper-in-form-item`]: k.isFormItemInput
      }, ne, g.value), re = J({
        [`${i.value}-indeterminate`]: u
      }, g.value);
      return f(_("label", {
        class: ue,
        style: le,
        onMouseenter: E,
        onMouseleave: M
      }, [_(Se, j(j({
        "aria-checked": u ? "mixed" : void 0
      }, p), {}, {
        class: re,
        ref: w
      }), null), c.length ? _("span", null, [c]) : null]));
    };
  }
}), $ = U({
  compatConfig: {
    MODE: 3
  },
  name: "ACheckboxGroup",
  inheritAttrs: !1,
  props: Oe(),
  // emits: ['change', 'update:value'],
  setup(e, h) {
    let {
      slots: t,
      attrs: l,
      emit: r,
      expose: b
    } = h;
    const d = Y(), {
      prefixCls: k,
      direction: i
    } = Z("checkbox", e), s = O(() => `${k.value}-group`), [I, v] = ee(s), f = y((e.value === void 0 ? e.defaultValue : e.value) || []);
    H(() => e.value, () => {
      f.value = e.value || [];
    });
    const g = O(() => e.options.map((n) => typeof n == "string" || typeof n == "number" ? {
      label: n,
      value: n
    } : n)), o = y(Symbol()), S = y(/* @__PURE__ */ new Map()), A = (n) => {
      S.value.delete(n), o.value = Symbol();
    }, F = (n, a) => {
      S.value.set(n, a), o.value = Symbol();
    }, w = y(/* @__PURE__ */ new Map());
    return H(o, () => {
      const n = /* @__PURE__ */ new Map();
      for (const a of S.value.values())
        n.set(a, !0);
      w.value = n;
    }), de(ae, {
      cancelValue: A,
      registerValue: F,
      toggleOption: (n) => {
        const a = f.value.indexOf(n.value), c = [...f.value];
        a === -1 ? c.push(n.value) : c.splice(a, 1), e.value === void 0 && (f.value = c);
        const u = c.filter((m) => w.value.has(m)).sort((m, B) => {
          const D = g.value.findIndex((M) => M.value === m), E = g.value.findIndex((M) => M.value === B);
          return D - E;
        });
        r("update:value", u), r("change", u), d.onFieldChange();
      },
      mergedValue: f,
      name: O(() => e.name),
      disabled: O(() => e.disabled)
    }), b({
      mergedValue: f
    }), () => {
      var n;
      const {
        id: a = d.id.value
      } = e;
      let c = null;
      return g.value && g.value.length > 0 && (c = g.value.map((u) => {
        var m;
        return _(V, {
          prefixCls: k.value,
          key: u.value.toString(),
          disabled: "disabled" in u ? u.disabled : e.disabled,
          indeterminate: u.indeterminate,
          value: u.value,
          checked: f.value.indexOf(u.value) !== -1,
          onChange: u.onChange,
          class: `${s.value}-item`
        }, {
          default: () => [t.label !== void 0 ? (m = t.label) === null || m === void 0 ? void 0 : m.call(t, u) : u.label]
        });
      })), I(_("div", j(j({}, l), {}, {
        class: [s.value, {
          [`${s.value}-rtl`]: i.value === "rtl"
        }, l.class, v.value],
        id: a
      }), [c || ((n = t.default) === null || n === void 0 ? void 0 : n.call(t))]));
    };
  }
});
V.Group = $;
V.install = function(e) {
  return e.component(V.name, V), e.component($.name, $), e;
};
const Fe = /* @__PURE__ */ U({
  __name: "AsyncCheckBox",
  props: {
    value: {},
    options: { type: [Array, Function] }
  },
  emits: ["update:value"],
  setup(e, { emit: h }) {
    const t = e, l = h, r = O({
      get() {
        return t.value;
      },
      set(s) {
        l("update:value", s);
      }
    }), b = y("加载中...."), d = y([]), k = async () => {
      b.value = "加载中....";
      try {
        if (t.options instanceof Function) {
          const s = await t.options();
          d.value = s;
        } else {
          if (t.options && !Array.isArray(t.options)) {
            console.error(
              "options must be an array or a function that returns an array"
            );
            return;
          }
          d.value = t.options;
        }
      } catch {
        b.value = "数据加载失败";
      }
    };
    W(async () => {
      if (!t.options) {
        b.value = "暂无数据";
        return;
      }
      await k();
    });
    const i = async () => {
      await k();
    };
    return (s, I) => (T(), L("div", null, [
      ve("span", {
        onClick: i,
        style: { cursor: "pointer", color: "hsla(237deg 74% 33% / 61%)" }
      }, X(d.value.length > 0 ? "" : b.value), 1),
      _(q($), fe({
        value: r.value,
        "onUpdate:value": I[0] || (I[0] = (v) => r.value = v)
      }, s.$attrs), {
        default: z(() => [
          (T(!0), L(me, null, pe(d.value, (v) => (T(), he(q(V), {
            key: v.value,
            value: v.value
          }, {
            default: z(() => [
              be(X(v.label), 1)
            ]),
            _: 2
          }, 1032, ["value"]))), 128))
        ]),
        _: 1
      }, 16, ["value"])
    ]));
  }
});
export {
  Fe as default
};
