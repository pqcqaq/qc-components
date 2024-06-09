import { P as i, h as d } from "./index-D4pR5m6G.js";
import { defineComponent as E, shallowRef as P, ref as p, watch as j, createVNode as B } from "vue";
var R = function(t, s) {
  var n = {};
  for (var o in t)
    Object.prototype.hasOwnProperty.call(t, o) && s.indexOf(o) < 0 && (n[o] = t[o]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var l = 0, o = Object.getOwnPropertySymbols(t); l < o.length; l++)
      s.indexOf(o[l]) < 0 && Object.prototype.propertyIsEnumerable.call(t, o[l]) && (n[o[l]] = t[o[l]]);
  return n;
};
const K = E({
  compatConfig: {
    MODE: 3
  },
  inheritAttrs: !1,
  props: {
    disabled: i.looseBool,
    type: i.string,
    value: i.any,
    lazy: i.bool.def(!0),
    tag: {
      type: String,
      default: "input"
    },
    size: i.string
  },
  emits: ["change", "input", "blur", "keydown", "focus", "compositionstart", "compositionend", "keyup"],
  setup(t, s) {
    let {
      emit: n,
      attrs: o,
      expose: l
    } = s;
    const a = P(null), c = p(), u = p(!1);
    j([() => t.value, u], () => {
      u.value || (c.value = t.value);
    }, {
      immediate: !0
    });
    const f = (e) => {
      n("change", e);
    }, g = (e) => {
      u.value = !0, e.target.composing = !0, n("compositionstart", e);
    }, m = (e) => {
      u.value = !1, e.target.composing = !1, n("compositionend", e);
      const r = document.createEvent("HTMLEvents");
      r.initEvent("input", !0, !0), e.target.dispatchEvent(r);
    }, y = (e) => {
      if (u.value && t.lazy) {
        c.value = e.target.value;
        return;
      }
      n("input", e);
    }, h = (e) => {
      n("blur", e);
    }, b = (e) => {
      n("focus", e);
    }, S = () => {
      a.value && a.value.focus();
    }, O = () => {
      a.value && a.value.blur();
    }, _ = (e) => {
      n("keydown", e);
    }, w = (e) => {
      n("keyup", e);
    };
    return l({
      focus: S,
      blur: O,
      input: a,
      setSelectionRange: (e, r, C) => {
        var v;
        (v = a.value) === null || v === void 0 || v.setSelectionRange(e, r, C);
      },
      select: () => {
        var e;
        (e = a.value) === null || e === void 0 || e.select();
      },
      getSelectionStart: () => {
        var e;
        return (e = a.value) === null || e === void 0 ? void 0 : e.selectionStart;
      },
      getSelectionEnd: () => {
        var e;
        return (e = a.value) === null || e === void 0 ? void 0 : e.selectionEnd;
      },
      getScrollTop: () => {
        var e;
        return (e = a.value) === null || e === void 0 ? void 0 : e.scrollTop;
      }
    }), () => {
      const {
        tag: e
      } = t, r = R(t, ["tag"]);
      return B(e, d(d(d({}, r), o), {}, {
        onInput: y,
        onChange: f,
        onBlur: h,
        onFocus: b,
        ref: a,
        value: c.value,
        onCompositionstart: g,
        onCompositionend: m,
        onKeyup: w,
        onKeydown: _
      }), null);
    };
  }
});
export {
  K as B
};
