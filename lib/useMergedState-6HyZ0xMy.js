import { ref as i, unref as o, watchEffect as s, watch as d, toRaw as g } from "vue";
function m(l, u) {
  const {
    defaultValue: a,
    value: n = i()
  } = u || {};
  let t = typeof l == "function" ? l() : l;
  n.value !== void 0 && (t = o(n)), a !== void 0 && (t = typeof a == "function" ? a() : a);
  const r = i(t), f = i(t);
  s(() => {
    let e = n.value !== void 0 ? n.value : r.value;
    u.postState && (e = u.postState(e)), f.value = e;
  });
  function v(e) {
    const c = f.value;
    r.value = e, g(f.value) !== e && u.onChange && u.onChange(e, c);
  }
  return d(n, () => {
    r.value = n.value;
  }), [f, v];
}
export {
  m as u
};
