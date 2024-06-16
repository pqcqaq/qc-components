import { toRaw as l } from "vue";
function i(t, e, p, y) {
  let r;
  if (r !== void 0)
    return !!r;
  if (t === e)
    return !0;
  if (typeof t != "object" || !t || typeof e != "object" || !e)
    return !1;
  const n = Object.keys(t), a = Object.keys(e);
  if (n.length !== a.length)
    return !1;
  const f = Object.prototype.hasOwnProperty.bind(e);
  for (let o = 0; o < n.length; o++) {
    const s = n[o];
    if (!f(s))
      return !1;
    const u = t[s], c = e[s];
    if (r = void 0, r === !1 || r === void 0 && u !== c)
      return !1;
  }
  return !0;
}
function h(t, e) {
  return i(l(t), l(e));
}
export {
  h as s
};
