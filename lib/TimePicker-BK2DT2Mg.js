import { defineComponent as x, ref as R, createVNode as S, openBlock as I, createBlock as $, unref as H, normalizeProps as D, guardReactiveProps as z, withCtx as L, createElementBlock as M, Fragment as V, renderList as W, renderSlot as q } from "vue";
import { _ as r, u as A, A as G, h as u, H as E, b as d, s as J } from "./index-Dn-f9Oyw.js";
import { g as K, c as j, d as Q, r as X, a as Y } from "./index-DGOWEAAB.js";
const B = () => ({
  format: String,
  showNow: d(),
  showHour: d(),
  showMinute: d(),
  showSecond: d(),
  use12Hours: d(),
  hourStep: Number,
  minuteStep: Number,
  secondStep: Number,
  hideDisabledOptions: d(),
  popupClassName: String,
  status: J()
});
function Z(i) {
  const l = K(i, r(r({}, B()), {
    order: {
      type: Boolean,
      default: !0
    }
  })), {
    TimePicker: N,
    RangePicker: w
  } = l, m = x({
    name: "ATimePicker",
    inheritAttrs: !1,
    props: r(r(r(r({}, j()), Q()), B()), {
      addon: {
        type: Function
      }
    }),
    slots: Object,
    setup(h, C) {
      let {
        slots: c,
        expose: f,
        emit: o,
        attrs: k
      } = C;
      const t = h, a = A();
      G(!(c.addon || t.addon), "TimePicker", "`addon` is deprecated. Please use `v-slot:renderExtraFooter` instead.");
      const s = R();
      f({
        focus: () => {
          var n;
          (n = s.value) === null || n === void 0 || n.focus();
        },
        blur: () => {
          var n;
          (n = s.value) === null || n === void 0 || n.blur();
        }
      });
      const P = (n, _) => {
        o("update:value", n), o("change", n, _), a.onFieldChange();
      }, v = (n) => {
        o("update:open", n), o("openChange", n);
      }, b = (n) => {
        o("focus", n);
      }, F = (n) => {
        o("blur", n), a.onFieldBlur();
      }, T = (n) => {
        o("ok", n);
      };
      return () => {
        const {
          id: n = a.id.value
        } = t;
        return S(N, u(u(u({}, k), E(t, ["onUpdate:value", "onUpdate:open"])), {}, {
          id: n,
          dropdownClassName: t.popupClassName,
          mode: void 0,
          ref: s,
          renderExtraFooter: t.addon || c.addon || t.renderExtraFooter || c.renderExtraFooter,
          onChange: P,
          onOpenChange: v,
          onFocus: b,
          onBlur: F,
          onOk: T
        }), c);
      };
    }
  }), y = x({
    name: "ATimeRangePicker",
    inheritAttrs: !1,
    props: r(r(r(r({}, j()), X()), B()), {
      order: {
        type: Boolean,
        default: !0
      }
    }),
    slots: Object,
    setup(h, C) {
      let {
        slots: c,
        expose: f,
        emit: o,
        attrs: k
      } = C;
      const t = h, a = R(), s = A();
      f({
        focus: () => {
          var e;
          (e = a.value) === null || e === void 0 || e.focus();
        },
        blur: () => {
          var e;
          (e = a.value) === null || e === void 0 || e.blur();
        }
      });
      const P = (e, p) => {
        o("update:value", e), o("change", e, p), s.onFieldChange();
      }, v = (e) => {
        o("update:open", e), o("openChange", e);
      }, b = (e) => {
        o("focus", e);
      }, F = (e) => {
        o("blur", e), s.onFieldBlur();
      }, T = (e, p) => {
        o("panelChange", e, p);
      }, n = (e) => {
        o("ok", e);
      }, _ = (e, p, U) => {
        o("calendarChange", e, p, U);
      };
      return () => {
        const {
          id: e = s.id.value
        } = t;
        return S(w, u(u(u({}, k), E(t, ["onUpdate:open", "onUpdate:value"])), {}, {
          id: e,
          dropdownClassName: t.popupClassName,
          picker: "time",
          mode: void 0,
          ref: a,
          onChange: P,
          onOpenChange: v,
          onFocus: b,
          onBlur: F,
          onPanelChange: T,
          onOk: n,
          onCalendarChange: _
        }), c);
      };
    }
  });
  return {
    TimePicker: m,
    TimeRangePicker: y
  };
}
const {
  TimePicker: g,
  TimeRangePicker: O
} = Z(Y), ee = r(g, {
  TimePicker: g,
  TimeRangePicker: O,
  install: (i) => (i.component(g.name, g), i.component(O.name, O), i)
}), te = /* @__PURE__ */ x({
  __name: "TimePicker",
  setup(i) {
    return (l, N) => (I(), $(H(ee), D(z(l.$attrs)), {
      default: L(() => [
        (I(!0), M(V, null, W(l.$slots, (w, m) => q(l.$slots, m, { key: m })), 128))
      ]),
      _: 3
    }, 16));
  }
});
export {
  te as default
};
