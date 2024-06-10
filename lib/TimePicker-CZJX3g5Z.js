import { defineComponent as x, ref as R, createVNode as S, openBlock as I, createBlock as $, unref as H, normalizeProps as z, guardReactiveProps as D, withCtx as L, createElementBlock as M, Fragment as V, renderList as W, renderSlot as q } from "vue";
import { d as r, f as j, z as G, j as u, O as E, F as d, H as J } from "./index--A0P2N-L.js";
import { g as K, c as y, d as Q, r as X, a as Y } from "./index-Bm4RF6vK.js";
const _ = () => ({
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
  const l = K(i, r(r({}, _()), {
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
    props: r(r(r(r({}, y()), Q()), _()), {
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
      const t = f, a = j();
      G(!(c.addon || t.addon), "TimePicker", "`addon` is deprecated. Please use `v-slot:renderExtraFooter` instead.");
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
      const P = (n, O) => {
        o("update:value", n), o("change", n, O), a.onFieldChange();
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
        return S(N, u(u(u({}, k), E(t, ["onUpdate:value", "onUpdate:open"])), {}, {
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
    props: r(r(r(r({}, y()), X()), _()), {
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
      const t = f, a = R(), s = j();
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
      }, O = (e, p, U) => {
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
          onFocus: F,
          onBlur: b,
          onPanelChange: T,
          onOk: n,
          onCalendarChange: O
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
  TimeRangePicker: B
} = Z(Y), ee = r(g, {
  TimePicker: g,
  TimeRangePicker: B,
  install: (i) => (i.component(g.name, g), i.component(B.name, B), i)
}), te = /* @__PURE__ */ x({
  __name: "TimePicker",
  setup(i) {
    return (l, N) => (I(), $(H(ee), z(D(l.$attrs)), {
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
