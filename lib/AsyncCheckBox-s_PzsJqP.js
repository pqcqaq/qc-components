import { defineComponent as U, inject as re, computed as O, watchEffect as se, onBeforeUnmount as ce, onMounted as ie, ref as y, createVNode as _, watch as H, provide as de, openBlock as T, createElementBlock as L, createElementVNode as ve, toDisplayString as X, unref as q, mergeProps as fe, withCtx as z, Fragment as me, renderList as he, createBlock as pe, createTextVNode as be } from "vue";
import { _ as C, a as N, f as P, b as x, P as ge, s as xe, u as W, F as Ce, c as Y, d as ke, w as ye, e as Ie, g as J, h as j } from "./index-DELjRDde.js";
import { V as Se } from "./Checkbox-DExO1x-H.js";
import { u as Z } from "./index-CXy5_kaY.js";
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
}), ee = Symbol("CheckboxGroupContext");
var Q = function(e, b) {
  var t = {};
  for (var l in e)
    Object.prototype.hasOwnProperty.call(e, l) && b.indexOf(l) < 0 && (t[l] = e[l]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, l = Object.getOwnPropertySymbols(e); o < l.length; o++)
      b.indexOf(l[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, l[o]) && (t[l[o]] = e[l[o]]);
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
  setup(e, b) {
    let {
      emit: t,
      attrs: l,
      slots: o,
      expose: v
    } = b;
    const d = W(), k = Ce.useInject(), {
      prefixCls: i,
      direction: s,
      disabled: I
    } = Y("checkbox", e), f = ke(), [m, g] = Z(i), u = re(ee, void 0), S = Symbol("checkboxUniId"), A = O(() => (u == null ? void 0 : u.disabled.value) || I.value);
    se(() => {
      !e.skipGroup && u && u.registerValue(S, e.value);
    }), ce(() => {
      u && u.cancelValue(S);
    }), ie(() => {
      ye(!!(e.checked !== void 0 || u || e.value === void 0), "Checkbox", "`value` is not validate prop, do you mean `checked`?");
    });
    const F = (a) => {
      const c = a.target.checked;
      t("update:checked", c), t("change", a), d.onFieldChange();
    }, w = y();
    return v({
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
      const c = Ie((a = o.default) === null || a === void 0 ? void 0 : a.call(o)), {
        indeterminate: r,
        skipGroup: h,
        id: B = d.id.value
      } = e, D = Q(e, ["indeterminate", "skipGroup", "id"]), {
        onMouseenter: E,
        onMouseleave: M,
        onInput: Me,
        class: te,
        style: ne
      } = l, le = Q(l, ["onMouseenter", "onMouseleave", "onInput", "class", "style"]), p = C(C(C(C({}, D), {
        id: B,
        prefixCls: i.value
      }), le), {
        disabled: A.value
      });
      u && !h ? (p.onChange = function() {
        for (var R = arguments.length, K = new Array(R), G = 0; G < R; G++)
          K[G] = arguments[G];
        t("change", ...K), u.toggleOption({
          label: c,
          value: e.value
        });
      }, p.name = u.name.value, p.checked = u.mergedValue.value.includes(e.value), p.disabled = A.value || f.value, p.indeterminate = r) : p.onChange = F;
      const oe = J({
        [`${i.value}-wrapper`]: !0,
        [`${i.value}-rtl`]: s.value === "rtl",
        [`${i.value}-wrapper-checked`]: p.checked,
        [`${i.value}-wrapper-disabled`]: p.disabled,
        [`${i.value}-wrapper-in-form-item`]: k.isFormItemInput
      }, te, g.value), ue = J({
        [`${i.value}-indeterminate`]: r
      }, g.value);
      return m(_("label", {
        class: oe,
        style: ne,
        onMouseenter: E,
        onMouseleave: M
      }, [_(Se, j(j({
        "aria-checked": r ? "mixed" : void 0
      }, p), {}, {
        class: ue,
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
  setup(e, b) {
    let {
      slots: t,
      attrs: l,
      emit: o,
      expose: v
    } = b;
    const d = W(), {
      prefixCls: k,
      direction: i
    } = Y("checkbox", e), s = O(() => `${k.value}-group`), [I, f] = Z(s), m = y((e.value === void 0 ? e.defaultValue : e.value) || []);
    H(() => e.value, () => {
      m.value = e.value || [];
    });
    const g = O(() => e.options.map((n) => typeof n == "string" || typeof n == "number" ? {
      label: n,
      value: n
    } : n)), u = y(Symbol()), S = y(/* @__PURE__ */ new Map()), A = (n) => {
      S.value.delete(n), u.value = Symbol();
    }, F = (n, a) => {
      S.value.set(n, a), u.value = Symbol();
    }, w = y(/* @__PURE__ */ new Map());
    return H(u, () => {
      const n = /* @__PURE__ */ new Map();
      for (const a of S.value.values())
        n.set(a, !0);
      w.value = n;
    }), de(ee, {
      cancelValue: A,
      registerValue: F,
      toggleOption: (n) => {
        const a = m.value.indexOf(n.value), c = [...m.value];
        a === -1 ? c.push(n.value) : c.splice(a, 1), e.value === void 0 && (m.value = c);
        const r = c.filter((h) => w.value.has(h)).sort((h, B) => {
          const D = g.value.findIndex((M) => M.value === h), E = g.value.findIndex((M) => M.value === B);
          return D - E;
        });
        o("update:value", r), o("change", r), d.onFieldChange();
      },
      mergedValue: m,
      name: O(() => e.name),
      disabled: O(() => e.disabled)
    }), v({
      mergedValue: m
    }), () => {
      var n;
      const {
        id: a = d.id.value
      } = e;
      let c = null;
      return g.value && g.value.length > 0 && (c = g.value.map((r) => {
        var h;
        return _(V, {
          prefixCls: k.value,
          key: r.value.toString(),
          disabled: "disabled" in r ? r.disabled : e.disabled,
          indeterminate: r.indeterminate,
          value: r.value,
          checked: m.value.indexOf(r.value) !== -1,
          onChange: r.onChange,
          class: `${s.value}-item`
        }, {
          default: () => [t.label !== void 0 ? (h = t.label) === null || h === void 0 ? void 0 : h.call(t, r) : r.label]
        });
      })), I(_("div", j(j({}, l), {}, {
        class: [s.value, {
          [`${s.value}-rtl`]: i.value === "rtl"
        }, l.class, f.value],
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
  setup(e, { emit: b }) {
    const t = e, l = b, o = O({
      get() {
        return t.value;
      },
      set(s) {
        l("update:value", s);
      }
    }), v = y("加载中...."), d = y([]), k = async () => {
      v.value = "加载中....";
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
        d.value.length === 0 ? v.value = "暂无数据" : v.value = "";
      } catch {
        v.value = "数据加载失败";
      }
      o.value = t.value;
    };
    k();
    const i = async () => {
      await k();
    };
    return (s, I) => (T(), L("div", null, [
      ve("span", {
        onClick: i,
        style: { cursor: "pointer", color: "hsla(237deg 74% 33% / 61%)" }
      }, X(d.value.length > 0 ? "" : v.value), 1),
      _(q($), fe({
        value: o.value,
        "onUpdate:value": I[0] || (I[0] = (f) => o.value = f)
      }, s.$attrs), {
        default: z(() => [
          (T(!0), L(me, null, he(d.value, (f) => (T(), pe(q(V), {
            key: f.value,
            value: f.value
          }, {
            default: z(() => [
              be(X(f.label), 1)
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
