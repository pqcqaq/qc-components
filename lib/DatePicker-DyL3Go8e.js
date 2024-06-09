import { defineComponent as s, openBlock as i, createBlock as l, unref as k, normalizeProps as u, guardReactiveProps as P, withCtx as f, createElementBlock as _, Fragment as d, renderList as g, renderSlot as p } from "vue";
import { _ as $ } from "./index-D4pR5m6G.js";
import { g as h, a as B } from "./index-BH1dXhrZ.js";
const {
  DatePicker: n,
  WeekPicker: t,
  MonthPicker: o,
  YearPicker: C,
  TimePicker: D,
  QuarterPicker: a,
  RangePicker: c
} = h(B), v = $(n, {
  WeekPicker: t,
  MonthPicker: o,
  YearPicker: C,
  RangePicker: c,
  TimePicker: D,
  QuarterPicker: a,
  install: (e) => (e.component(n.name, n), e.component(c.name, c), e.component(o.name, o), e.component(t.name, t), e.component(a.name, a), e)
}), F = /* @__PURE__ */ s({
  __name: "DatePicker",
  setup(e) {
    return (r, R) => (i(), l(k(v), u(P(r.$attrs)), {
      default: f(() => [
        (i(!0), _(d, null, g(r.$slots, (w, m) => p(r.$slots, m, { key: m })), 128))
      ]),
      _: 3
    }, 16));
  }
});
export {
  F as default
};
