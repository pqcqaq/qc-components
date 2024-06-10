import { defineComponent as O, ref as R, createVNode as S, openBlock as E, createBlock as $, unref as D, normalizeProps as H, guardReactiveProps as z, withCtx as G, createElementBlock as L, Fragment as M, renderList as V, renderSlot as W } from "vue";
import { c as r, e as I, y as q, h as u, N as y, E as d, G as J } from "./index-DyhArEBu.js";
import { g as K, c as j, d as Q, r as X, a as Y } from "./index-HRBZqIrr.js";
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
    TimePicker: x,
    RangePicker: w
  } = l, m = O({
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
      const t = h, a = I();
      q(!(c.addon || t.addon), "TimePicker", "`addon` is deprecated. Please use `v-slot:renderExtraFooter` instead.");
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
        return S(x, u(u(u({}, k), y(t, ["onUpdate:value", "onUpdate:open"])), {}, {
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
  }), A = O({
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
      const t = h, a = R(), s = I();
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
        return S(w, u(u(u({}, k), y(t, ["onUpdate:open", "onUpdate:value"])), {}, {
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
  TimeRangePicker: N
} = Z(Y), ee = r(g, {
  TimePicker: g,
  TimeRangePicker: N,
  install: (i) => (i.component(g.name, g), i.component(N.name, N), i)
}), te = /* @__PURE__ */ O({
  __name: "TimePicker",
  setup(i) {
    return (l, x) => (E(), $(D(ee), H(z(l.$attrs)), {
      default: G(() => [
        (E(!0), L(M, null, V(l.$slots, (w, m) => W(l.$slots, m, { key: m })), 128))
      ]),
      _: 3
    }, 16));
  }
});
export {
  te as default
};
