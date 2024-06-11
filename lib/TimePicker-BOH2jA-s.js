import { defineComponent as x, ref as R, createVNode as S, openBlock as E, createBlock as $, unref as D, normalizeProps as H, guardReactiveProps as z, withCtx as G, createElementBlock as J, Fragment as L, renderList as M, renderSlot as Q } from "vue";
import { d as r, f as I, E as V, j as u, Q as j, G as d, J as W } from "./index-Ccfmsles.js";
import { g as q, c as y, d as K, r as X, a as Y } from "./index-CDpNtnW8.js";
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
  status: W()
});
function Z(i) {
  const l = q(i, r(r({}, B()), {
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
    props: r(r(r(r({}, y()), K()), B()), {
      addon: {
        type: Function
      }
    }),
    slots: Object,
    setup(f, C) {
      let {
        slots: c,
        expose: h,
        emit: o,
        attrs: k
      } = C;
      const t = f, a = I();
      V(!(c.addon || t.addon), "TimePicker", "`addon` is deprecated. Please use `v-slot:renderExtraFooter` instead.");
      const s = R();
      h({
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
      }, F = (n) => {
        o("focus", n);
      }, b = (n) => {
        o("blur", n), a.onFieldBlur();
      }, T = (n) => {
        o("ok", n);
      };
      return () => {
        const {
          id: n = a.id.value
        } = t;
        return S(N, u(u(u({}, k), j(t, ["onUpdate:value", "onUpdate:open"])), {}, {
          id: n,
          dropdownClassName: t.popupClassName,
          mode: void 0,
          ref: s,
          renderExtraFooter: t.addon || c.addon || t.renderExtraFooter || c.renderExtraFooter,
          onChange: P,
          onOpenChange: v,
          onFocus: F,
          onBlur: b,
          onOk: T
        }), c);
      };
    }
  }), A = x({
    name: "ATimeRangePicker",
    inheritAttrs: !1,
    props: r(r(r(r({}, y()), X()), B()), {
      order: {
        type: Boolean,
        default: !0
      }
    }),
    slots: Object,
    setup(f, C) {
      let {
        slots: c,
        expose: h,
        emit: o,
        attrs: k
      } = C;
      const t = f, a = R(), s = I();
      h({
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
      }, F = (e) => {
        o("focus", e);
      }, b = (e) => {
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
        return S(w, u(u(u({}, k), j(t, ["onUpdate:open", "onUpdate:value"])), {}, {
          id: e,
          dropdownClassName: t.popupClassName,
          picker: "time",
          mode: void 0,
          ref: a,
          onChange: P,
          onOpenChange: v,
          onFocus: F,
          onBlur: b,
          onPanelChange: T,
          onOk: n,
          onCalendarChange: _
        }), c);
      };
    }
  });
  return {
    TimePicker: m,
    TimeRangePicker: A
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
    return (l, N) => (E(), $(D(ee), H(z(l.$attrs)), {
      default: G(() => [
        (E(!0), J(L, null, M(l.$slots, (w, m) => Q(l.$slots, m, { key: m })), 128))
      ]),
      _: 3
    }, 16));
  }
});
export {
  te as default
};
