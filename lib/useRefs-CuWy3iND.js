import { ref as r, onBeforeUpdate as n } from "vue";
const f = () => {
  const e = r(/* @__PURE__ */ new Map()), s = (t) => (o) => {
    e.value.set(t, o);
  };
  return n(() => {
    e.value = /* @__PURE__ */ new Map();
  }), [s, e];
};
export {
  f as u
};
