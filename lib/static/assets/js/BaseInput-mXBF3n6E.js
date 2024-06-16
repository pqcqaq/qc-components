import { M as k, N as K, _ as E, P as c, b as m } from "./styleChecker-DxpCOgAe.js";
import { defineComponent as R, reactive as D, getCurrentInstance as H, onMounted as L, onUpdated as W, onUnmounted as N, watch as z, shallowRef as j, createVNode as x, ref as F, computed as P } from "vue";
const q = R({
  compatConfig: {
    MODE: 3
  },
  name: "ResizeObserver",
  props: {
    disabled: Boolean,
    onResize: Function
  },
  emits: ["resize"],
  setup(n, r) {
    let {
      slots: o
    } = r;
    const t = D({
      width: 0,
      height: 0,
      offsetHeight: 0,
      offsetWidth: 0
    });
    let s = null, i = null;
    const f = () => {
      i && (i.disconnect(), i = null);
    }, v = (u) => {
      const {
        onResize: a
      } = n, p = u[0].target, {
        width: S,
        height: _
      } = p.getBoundingClientRect(), {
        offsetWidth: g,
        offsetHeight: y
      } = p, h = Math.floor(S), b = Math.floor(_);
      if (t.width !== h || t.height !== b || t.offsetWidth !== g || t.offsetHeight !== y) {
        const O = {
          width: h,
          height: b,
          offsetWidth: g,
          offsetHeight: y
        };
        E(t, O), a && Promise.resolve().then(() => {
          a(E(E({}, O), {
            offsetWidth: g,
            offsetHeight: y
          }), p);
        });
      }
    }, l = H(), d = () => {
      const {
        disabled: u
      } = n;
      if (u) {
        f();
        return;
      }
      const a = k(l);
      a !== s && (f(), s = a), !i && a && (i = new K(v), i.observe(a));
    };
    return L(() => {
      d();
    }), W(() => {
      d();
    }), N(() => {
      f();
    }), z(() => n.disabled, () => {
      d();
    }, {
      flush: "post"
    }), () => {
      var u;
      return (u = o.default) === null || u === void 0 ? void 0 : u.call(o)[0];
    };
  }
});
var U = function(n, r) {
  var o = {};
  for (var t in n)
    Object.prototype.hasOwnProperty.call(n, t) && r.indexOf(t) < 0 && (o[t] = n[t]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, t = Object.getOwnPropertySymbols(n); s < t.length; s++)
      r.indexOf(t[s]) < 0 && Object.prototype.propertyIsEnumerable.call(n, t[s]) && (o[t[s]] = n[t[s]]);
  return o;
};
const V = R({
  compatConfig: {
    MODE: 3
  },
  // inheritAttrs: false,
  props: {
    disabled: c.looseBool,
    type: c.string,
    value: c.any,
    tag: {
      type: String,
      default: "input"
    },
    size: c.string,
    onChange: Function,
    onInput: Function,
    onBlur: Function,
    onFocus: Function,
    onKeydown: Function,
    onCompositionstart: Function,
    onCompositionend: Function,
    onKeyup: Function,
    onPaste: Function,
    onMousedown: Function
  },
  emits: ["change", "input", "blur", "keydown", "focus", "compositionstart", "compositionend", "keyup", "paste", "mousedown"],
  setup(n, r) {
    let {
      expose: o
    } = r;
    const t = j(null);
    return o({
      focus: () => {
        t.value && t.value.focus();
      },
      blur: () => {
        t.value && t.value.blur();
      },
      input: t,
      setSelectionRange: (l, d, u) => {
        var a;
        (a = t.value) === null || a === void 0 || a.setSelectionRange(l, d, u);
      },
      select: () => {
        var l;
        (l = t.value) === null || l === void 0 || l.select();
      },
      getSelectionStart: () => {
        var l;
        return (l = t.value) === null || l === void 0 ? void 0 : l.selectionStart;
      },
      getSelectionEnd: () => {
        var l;
        return (l = t.value) === null || l === void 0 ? void 0 : l.selectionEnd;
      },
      getScrollTop: () => {
        var l;
        return (l = t.value) === null || l === void 0 ? void 0 : l.scrollTop;
      }
    }), () => {
      const {
        tag: l,
        value: d
      } = n, u = U(n, ["tag", "value"]);
      return x(l, m(m({}, u), {}, {
        ref: t,
        value: d
      }), null);
    };
  }
});
function G(n) {
  const r = n.getBoundingClientRect(), o = document.documentElement;
  return {
    left: r.left + (window.scrollX || o.scrollLeft) - (o.clientLeft || document.body.clientLeft || 0),
    top: r.top + (window.scrollY || o.scrollTop) - (o.clientTop || document.body.clientTop || 0)
  };
}
function $(n) {
  return Object.keys(n).reduce((r, o) => {
    const t = n[o];
    return typeof t > "u" || t === null || (r += `${o}: ${n[o]};`), r;
  }, "");
}
var A = function(n, r) {
  var o = {};
  for (var t in n)
    Object.prototype.hasOwnProperty.call(n, t) && r.indexOf(t) < 0 && (o[t] = n[t]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, t = Object.getOwnPropertySymbols(n); s < t.length; s++)
      r.indexOf(t[s]) < 0 && Object.prototype.propertyIsEnumerable.call(n, t[s]) && (o[t[s]] = n[t[s]]);
  return o;
};
const J = R({
  compatConfig: {
    MODE: 3
  },
  inheritAttrs: !1,
  props: {
    disabled: c.looseBool,
    type: c.string,
    value: c.any,
    lazy: c.bool.def(!0),
    tag: {
      type: String,
      default: "input"
    },
    size: c.string,
    style: c.oneOfType([String, Object]),
    class: c.string
  },
  emits: ["change", "input", "blur", "keydown", "focus", "compositionstart", "compositionend", "keyup", "paste", "mousedown"],
  setup(n, r) {
    let {
      emit: o,
      attrs: t,
      expose: s
    } = r;
    const i = j(null), f = F(), v = F(!1);
    z([() => n.value, v], () => {
      v.value || (f.value = n.value);
    }, {
      immediate: !0
    });
    const l = (e) => {
      o("change", e);
    }, d = (e) => {
      v.value = !0, e.target.composing = !0, o("compositionstart", e);
    }, u = (e) => {
      v.value = !1, e.target.composing = !1, o("compositionend", e);
      const w = document.createEvent("HTMLEvents");
      w.initEvent("input", !0, !0), e.target.dispatchEvent(w), l(e);
    }, a = (e) => {
      if (v.value && n.lazy) {
        f.value = e.target.value;
        return;
      }
      o("input", e);
    }, p = (e) => {
      o("blur", e);
    }, S = (e) => {
      o("focus", e);
    }, _ = () => {
      i.value && i.value.focus();
    }, g = () => {
      i.value && i.value.blur();
    }, y = (e) => {
      o("keydown", e);
    }, h = (e) => {
      o("keyup", e);
    }, b = (e, w, I) => {
      var C;
      (C = i.value) === null || C === void 0 || C.setSelectionRange(e, w, I);
    }, O = () => {
      var e;
      (e = i.value) === null || e === void 0 || e.select();
    };
    s({
      focus: _,
      blur: g,
      input: P(() => {
        var e;
        return (e = i.value) === null || e === void 0 ? void 0 : e.input;
      }),
      setSelectionRange: b,
      select: O,
      getSelectionStart: () => {
        var e;
        return (e = i.value) === null || e === void 0 ? void 0 : e.getSelectionStart();
      },
      getSelectionEnd: () => {
        var e;
        return (e = i.value) === null || e === void 0 ? void 0 : e.getSelectionEnd();
      },
      getScrollTop: () => {
        var e;
        return (e = i.value) === null || e === void 0 ? void 0 : e.getScrollTop();
      }
    });
    const M = (e) => {
      o("mousedown", e);
    }, T = (e) => {
      o("paste", e);
    }, B = P(() => n.style && typeof n.style != "string" ? $(n.style) : n.style);
    return () => {
      const e = A(n, ["style", "lazy"]);
      return x(V, m(m(m({}, e), t), {}, {
        style: B.value,
        onInput: a,
        onChange: l,
        onBlur: p,
        onFocus: S,
        ref: i,
        value: f.value,
        onCompositionstart: d,
        onCompositionend: u,
        onKeyup: h,
        onKeydown: y,
        onPaste: T,
        onMousedown: M
      }), null);
    };
  }
});
export {
  J as B,
  q as R,
  G as g
};
