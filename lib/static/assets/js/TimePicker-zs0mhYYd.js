import { defineComponent as O, ref as R, createVNode as S, openBlock as I, createBlock as $, unref as H, normalizeProps as D, guardReactiveProps as z, withCtx as L, createElementBlock as M, Fragment as V, renderList as W, renderSlot as q } from "vue";
import { _ as r, x as E, H as G, b as u, t as d, v as J } from "./styleChecker-DxpCOgAe.js";
import { g as K, c as j, d as Q, r as X, a as Y } from "./index-DrbRk2AW.js";
import { o as y } from "./omit-BQe9TABq.js";
const x = () => ({
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
  const l = K(i, r(r({}, x()), {
    order: {
      type: Boolean,
      default: !0
    }
  })), {
    TimePicker: N,
    RangePicker: w
  } = l, m = O({
    name: "ATimePicker",
    inheritAttrs: !1,
    props: r(r(r(r({}, j()), Q()), x()), {
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
      const t = f, a = E();
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
        return S(N, u(u(u({}, k), y(t, ["onUpdate:value", "onUpdate:open"])), {}, {
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
  }), A = O({
    name: "ATimeRangePicker",
    inheritAttrs: !1,
    props: r(r(r(r({}, j()), X()), x()), {
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
      const t = f, a = R(), s = E();
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
        return S(w, u(u(u({}, k), y(t, ["onUpdate:open", "onUpdate:value"])), {}, {
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
}), ae = /* @__PURE__ */ O({
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
  ae as default
};
