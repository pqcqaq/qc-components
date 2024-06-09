var Zd = Object.defineProperty;
var Jd = (e, t, n) => t in e ? Zd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var dr = (e, t, n) => (Jd(e, typeof t != "symbol" ? t + "" : t, n), n);
import { Fragment as Te, isVNode as rr, Comment as ep, Text as jc, computed as T, inject as ve, provide as me, ref as X, defineComponent as V, unref as pe, shallowRef as L, getCurrentInstance as $n, watch as Q, watchEffect as Be, onBeforeUnmount as We, triggerRef as tp, createVNode as w, h as oi, Transition as Ot, withDirectives as wt, resolveDirective as np, onMounted as we, cloneVNode as ea, render as Vt, nextTick as Le, onUpdated as io, onUnmounted as ta, toRef as rp, withModifiers as tl, vShow as or, onBeforeMount as Dc, Teleport as Bc, reactive as Ye, TransitionGroup as na, toRaw as ii, isRef as op, markRaw as ue, defineAsyncComponent as le, openBlock as fe, createElementBlock as Se, createElementVNode as ip, toDisplayString as ai, mergeProps as Fn, toHandlers as nl, withCtx as ht, renderList as li, createBlock as En, resolveDynamicComponent as ap, normalizeStyle as un, createCommentVNode as ut, createTextVNode as Nn, createApp as lp } from "vue";
function kn(e) {
  "@babel/helpers - typeof";
  return kn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, kn(e);
}
function sp(e, t) {
  if (kn(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (kn(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function cp(e) {
  var t = sp(e, "string");
  return kn(t) == "symbol" ? t : t + "";
}
function up(e, t, n) {
  return t = cp(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function rl(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function j(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? rl(Object(n), !0).forEach(function(r) {
      up(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : rl(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function m() {
  return m = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, m.apply(this, arguments);
}
const fp = (e) => typeof e == "function", dp = Array.isArray, pp = (e) => typeof e == "string", mp = (e) => e !== null && typeof e == "object", gp = /^on[^a-z]/, hp = (e) => gp.test(e), ra = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, vp = /-(\w)/g, Lc = ra((e) => e.replace(vp, (t, n) => n ? n.toUpperCase() : "")), yp = /\B([A-Z])/g, bp = ra((e) => e.replace(yp, "-$1").toLowerCase()), E2 = ra((e) => e.charAt(0).toUpperCase() + e.slice(1)), Cp = Object.prototype.hasOwnProperty, ol = (e, t) => Cp.call(e, t);
function xp(e, t, n, r) {
  const o = e[n];
  if (o != null) {
    const i = ol(o, "default");
    if (i && r === void 0) {
      const a = o.default;
      r = o.type !== Function && fp(a) ? a() : a;
    }
    o.type === Boolean && (!ol(t, n) && !i ? r = !1 : r === "" && (r = !0));
  }
  return r;
}
function _2(e) {
  return typeof e == "number" ? `${e}px` : e;
}
function ln(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
  return typeof e == "function" ? e(t) : e ?? n;
}
function wp(e) {
  let t;
  const n = new Promise((o) => {
    t = e(() => {
      o(!0);
    });
  }), r = () => {
    t == null || t();
  };
  return r.then = (o, i) => n.then(o, i), r.promise = n, r;
}
function Y() {
  const e = [];
  for (let t = 0; t < arguments.length; t++) {
    const n = t < 0 || arguments.length <= t ? void 0 : arguments[t];
    if (n) {
      if (pp(n))
        e.push(n);
      else if (dp(n))
        for (let r = 0; r < n.length; r++) {
          const o = Y(n[r]);
          o && e.push(o);
        }
      else if (mp(n))
        for (const r in n)
          n[r] && e.push(r);
    }
  }
  return e.join(" ");
}
var Hc = function() {
  if (typeof Map < "u")
    return Map;
  function e(t, n) {
    var r = -1;
    return t.some(function(o, i) {
      return o[0] === n ? (r = i, !0) : !1;
    }), r;
  }
  return (
    /** @class */
    function() {
      function t() {
        this.__entries__ = [];
      }
      return Object.defineProperty(t.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.get = function(n) {
        var r = e(this.__entries__, n), o = this.__entries__[r];
        return o && o[1];
      }, t.prototype.set = function(n, r) {
        var o = e(this.__entries__, n);
        ~o ? this.__entries__[o][1] = r : this.__entries__.push([n, r]);
      }, t.prototype.delete = function(n) {
        var r = this.__entries__, o = e(r, n);
        ~o && r.splice(o, 1);
      }, t.prototype.has = function(n) {
        return !!~e(this.__entries__, n);
      }, t.prototype.clear = function() {
        this.__entries__.splice(0);
      }, t.prototype.forEach = function(n, r) {
        r === void 0 && (r = null);
        for (var o = 0, i = this.__entries__; o < i.length; o++) {
          var a = i[o];
          n.call(r, a[1], a[0]);
        }
      }, t;
    }()
  );
}(), si = typeof window < "u" && typeof document < "u" && window.document === document, zr = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), $p = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(zr) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), Sp = 2;
function Op(e, t) {
  var n = !1, r = !1, o = 0;
  function i() {
    n && (n = !1, e()), r && l();
  }
  function a() {
    $p(i);
  }
  function l() {
    var s = Date.now();
    if (n) {
      if (s - o < Sp)
        return;
      r = !0;
    } else
      n = !0, r = !1, setTimeout(a, t);
    o = s;
  }
  return l;
}
var Tp = 20, Pp = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], Ep = typeof MutationObserver < "u", _p = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = Op(this.refresh.bind(this), Tp);
    }
    return e.prototype.addObserver = function(t) {
      ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_();
    }, e.prototype.removeObserver = function(t) {
      var n = this.observers_, r = n.indexOf(t);
      ~r && n.splice(r, 1), !n.length && this.connected_ && this.disconnect_();
    }, e.prototype.refresh = function() {
      var t = this.updateObservers_();
      t && this.refresh();
    }, e.prototype.updateObservers_ = function() {
      var t = this.observers_.filter(function(n) {
        return n.gatherActive(), n.hasActive();
      });
      return t.forEach(function(n) {
        return n.broadcastActive();
      }), t.length > 0;
    }, e.prototype.connect_ = function() {
      !si || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Ep ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !si || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var n = t.propertyName, r = n === void 0 ? "" : n, o = Pp.some(function(i) {
        return !!~r.indexOf(i);
      });
      o && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), zc = function(e, t) {
  for (var n = 0, r = Object.keys(t); n < r.length; n++) {
    var o = r[n];
    Object.defineProperty(e, o, {
      value: t[o],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return e;
}, gn = function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || zr;
}, Vc = ao(0, 0, 0, 0);
function Vr(e) {
  return parseFloat(e) || 0;
}
function il(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  return t.reduce(function(r, o) {
    var i = e["border-" + o + "-width"];
    return r + Vr(i);
  }, 0);
}
function Ap(e) {
  for (var t = ["top", "right", "bottom", "left"], n = {}, r = 0, o = t; r < o.length; r++) {
    var i = o[r], a = e["padding-" + i];
    n[i] = Vr(a);
  }
  return n;
}
function Ip(e) {
  var t = e.getBBox();
  return ao(0, 0, t.width, t.height);
}
function Mp(e) {
  var t = e.clientWidth, n = e.clientHeight;
  if (!t && !n)
    return Vc;
  var r = gn(e).getComputedStyle(e), o = Ap(r), i = o.left + o.right, a = o.top + o.bottom, l = Vr(r.width), s = Vr(r.height);
  if (r.boxSizing === "border-box" && (Math.round(l + i) !== t && (l -= il(r, "left", "right") + i), Math.round(s + a) !== n && (s -= il(r, "top", "bottom") + a)), !Np(e)) {
    var c = Math.round(l + i) - t, f = Math.round(s + a) - n;
    Math.abs(c) !== 1 && (l -= c), Math.abs(f) !== 1 && (s -= f);
  }
  return ao(o.left, o.top, l, s);
}
var Fp = /* @__PURE__ */ function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof gn(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof gn(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function Np(e) {
  return e === gn(e).document.documentElement;
}
function Rp(e) {
  return si ? Fp(e) ? Ip(e) : Mp(e) : Vc;
}
function jp(e) {
  var t = e.x, n = e.y, r = e.width, o = e.height, i = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, a = Object.create(i.prototype);
  return zc(a, {
    x: t,
    y: n,
    width: r,
    height: o,
    top: n,
    right: t + r,
    bottom: o + n,
    left: t
  }), a;
}
function ao(e, t, n, r) {
  return { x: e, y: t, width: n, height: r };
}
var Dp = (
  /** @class */
  function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = ao(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = Rp(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  }()
), Bp = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t, n) {
      var r = jp(n);
      zc(this, { target: t, contentRect: r });
    }
    return e;
  }()
), Lp = (
  /** @class */
  function() {
    function e(t, n, r) {
      if (this.activeObservations_ = [], this.observations_ = new Hc(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = n, this.callbackCtx_ = r;
    }
    return e.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof gn(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) || (n.set(t, new Dp(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof gn(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) && (n.delete(t), n.size || this.controller_.removeObserver(this));
      }
    }, e.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, e.prototype.gatherActive = function() {
      var t = this;
      this.clearActive(), this.observations_.forEach(function(n) {
        n.isActive() && t.activeObservations_.push(n);
      });
    }, e.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var t = this.callbackCtx_, n = this.activeObservations_.map(function(r) {
          return new Bp(r.target, r.broadcastRect());
        });
        this.callback_.call(t, n, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), Wc = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Hc(), kc = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var n = _p.getInstance(), r = new Lp(t, n, this);
      Wc.set(this, r);
    }
    return e;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  kc.prototype[e] = function() {
    var t;
    return (t = Wc.get(this))[e].apply(t, arguments);
  };
});
var Hp = function() {
  return typeof zr.ResizeObserver < "u" ? zr.ResizeObserver : kc;
}();
const zp = (e) => e != null && e !== "", Ut = (e, t) => {
  const n = m({}, e);
  return Object.keys(t).forEach((r) => {
    const o = n[r];
    if (o)
      o.type || o.default ? o.default = t[r] : o.def ? o.def(t[r]) : n[r] = {
        type: o,
        default: t[r]
      };
    else
      throw new Error(`not have ${r} prop`);
  }), n;
}, Vp = (e) => {
  const t = Object.keys(e), n = {}, r = {}, o = {};
  for (let i = 0, a = t.length; i < a; i++) {
    const l = t[i];
    hp(l) ? (n[l[2].toLowerCase() + l.slice(3)] = e[l], r[l] = e[l]) : o[l] = e[l];
  }
  return {
    onEvents: r,
    events: n,
    extraAttrs: o
  };
}, Wp = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  const n = {}, r = /;(?![^(]*\))/g, o = /:(.+)/;
  return typeof e == "object" ? e : (e.split(r).forEach(function(i) {
    if (i) {
      const a = i.split(o);
      if (a.length > 1) {
        const l = t ? Lc(a[0].trim()) : a[0].trim();
        n[l] = a[1].trim();
      }
    }
  }), n);
}, kp = (e, t) => e[t] !== void 0, qp = Symbol("skipFlatten"), Ue = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  const n = Array.isArray(e) ? e : [e], r = [];
  return n.forEach((o) => {
    Array.isArray(o) ? r.push(...Ue(o, t)) : o && o.type === Te ? o.key === qp ? r.push(o) : r.push(...Ue(o.children, t)) : o && rr(o) ? t && !qc(o) ? r.push(o) : t || r.push(o) : zp(o) && r.push(o);
  }), r;
}, Gp = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "default", n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (rr(e))
    return e.type === Te ? t === "default" ? Ue(e.children) : [] : e.children && e.children[t] ? Ue(e.children[t](n)) : [];
  {
    const r = e.$slots[t] && e.$slots[t](n);
    return Ue(r);
  }
}, bt = (e) => {
  var t;
  let n = ((t = e == null ? void 0 : e.vnode) === null || t === void 0 ? void 0 : t.el) || e && (e.$el || e);
  for (; n && !n.tagName; )
    n = n.nextSibling;
  return n;
}, Up = (e) => {
  const t = {};
  if (e.$ && e.$.vnode) {
    const n = e.$.vnode.props || {};
    Object.keys(e.$props).forEach((r) => {
      const o = e.$props[r], i = bp(r);
      (o !== void 0 || i in n) && (t[r] = o);
    });
  } else if (rr(e) && typeof e.type == "object") {
    const n = e.props || {}, r = {};
    Object.keys(n).forEach((i) => {
      r[Lc(i)] = n[i];
    });
    const o = e.type.props || {};
    Object.keys(o).forEach((i) => {
      const a = xp(o, r, i, r[i]);
      (a !== void 0 || i in r) && (t[i] = a);
    });
  }
  return t;
}, Xp = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "default", n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, o;
  if (e.$) {
    const i = e[t];
    if (i !== void 0)
      return typeof i == "function" && r ? i(n) : i;
    o = e.$slots[t], o = r && o ? o(n) : o;
  } else if (rr(e)) {
    const i = e.props && e.props[t];
    if (i !== void 0 && e.props !== null)
      return typeof i == "function" && r ? i(n) : i;
    e.type === Te ? o = e.children : e.children && e.children[t] && (o = e.children[t], o = r && o ? o(n) : o);
  }
  return Array.isArray(o) && (o = Ue(o), o = o.length === 1 ? o[0] : o, o = o.length === 0 ? void 0 : o), o;
};
function al() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, n = {};
  return e.$ ? n = m(m({}, n), e.$attrs) : n = m(m({}, n), e.props), Vp(n)[t ? "onEvents" : "events"];
}
function Kp(e, t) {
  let r = ((rr(e) ? e.props : e.$attrs) || {}).style || {};
  return typeof r == "string" && (r = Wp(r, t)), r;
}
function Yp(e) {
  return e.length === 1 && e[0].type === Te;
}
function qc(e) {
  return e && (e.type === ep || e.type === Te && e.children.length === 0 || e.type === jc && e.children.trim() === "");
}
function Xt() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  const t = [];
  return e.forEach((n) => {
    Array.isArray(n) ? t.push(...n) : (n == null ? void 0 : n.type) === Te ? t.push(...Xt(n.children)) : t.push(n);
  }), t.filter((n) => !qc(n));
}
function Gc(e) {
  return Array.isArray(e) && e.length === 1 && (e = e[0]), e && e.__v_isVNode && typeof e.type != "symbol";
}
function Qp(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "default";
  var r, o;
  return (r = t[n]) !== null && r !== void 0 ? r : (o = e[n]) === null || o === void 0 ? void 0 : o.call(e);
}
let Uc = (e) => setTimeout(e, 16), Xc = (e) => clearTimeout(e);
typeof window < "u" && "requestAnimationFrame" in window && (Uc = (e) => window.requestAnimationFrame(e), Xc = (e) => window.cancelAnimationFrame(e));
let ll = 0;
const oa = /* @__PURE__ */ new Map();
function Kc(e) {
  oa.delete(e);
}
function Me(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  ll += 1;
  const n = ll;
  function r(o) {
    if (o === 0)
      Kc(n), e();
    else {
      const i = Uc(() => {
        r(o - 1);
      });
      oa.set(n, i);
    }
  }
  return r(t), n;
}
Me.cancel = (e) => {
  const t = oa.get(e);
  return Kc(t), Xc(t);
};
const Wt = function() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return t;
}, lo = (e) => {
  const t = e;
  return t.install = function(n) {
    n.component(t.displayName || t.name, e);
  }, e;
};
function sl() {
  return {
    type: [Function, Array]
  };
}
function te(e) {
  return {
    type: Object,
    default: e
  };
}
function Ge(e) {
  return {
    type: Boolean,
    default: e
  };
}
function tn(e) {
  return {
    type: Function,
    default: e
  };
}
function Wr(e, t) {
  const n = {
    validator: () => !0,
    default: e
  };
  return n;
}
function cl(e) {
  return {
    type: Array,
    default: e
  };
}
function kr(e) {
  return {
    type: String,
    default: e
  };
}
function fn(e, t) {
  return e ? {
    type: e,
    default: t
  } : Wr(t);
}
let Rt = !1;
try {
  const e = Object.defineProperty({}, "passive", {
    get() {
      Rt = !0;
    }
  });
  window.addEventListener("testPassive", null, e), window.removeEventListener("testPassive", null, e);
} catch {
}
function sn(e, t, n, r) {
  if (e && e.addEventListener) {
    let o = r;
    o === void 0 && Rt && (t === "touchstart" || t === "touchmove" || t === "wheel") && (o = {
      passive: !1
    }), e.addEventListener(t, n, o);
  }
  return {
    remove: () => {
      e && e.removeEventListener && e.removeEventListener(t, n);
    }
  };
}
const ia = "anticon", Yc = Symbol("GlobalFormContextKey"), Zp = (e) => {
  me(Yc, e);
}, Jp = () => ve(Yc, {
  validateMessages: T(() => {
  })
}), em = () => ({
  iconPrefixCls: String,
  getTargetContainer: {
    type: Function
  },
  getPopupContainer: {
    type: Function
  },
  prefixCls: String,
  getPrefixCls: {
    type: Function
  },
  renderEmpty: {
    type: Function
  },
  transformCellText: {
    type: Function
  },
  csp: te(),
  input: te(),
  autoInsertSpaceInButton: {
    type: Boolean,
    default: void 0
  },
  locale: te(),
  pageHeader: te(),
  componentSize: {
    type: String
  },
  componentDisabled: {
    type: Boolean,
    default: void 0
  },
  direction: {
    type: String,
    default: "ltr"
  },
  space: te(),
  virtual: {
    type: Boolean,
    default: void 0
  },
  dropdownMatchSelectWidth: {
    type: [Number, Boolean],
    default: !0
  },
  form: te(),
  pagination: te(),
  theme: te(),
  select: te(),
  wave: te()
}), aa = Symbol("configProvider"), Qc = {
  getPrefixCls: (e, t) => t || (e ? `ant-${e}` : "ant"),
  iconPrefixCls: T(() => ia),
  getPopupContainer: T(() => () => document.body),
  direction: T(() => "ltr")
}, so = () => ve(aa, Qc), tm = (e) => me(aa, e), Zc = Symbol("DisabledContextKey"), la = () => ve(Zc, X(void 0)), Jc = (e) => {
  const t = la();
  return me(Zc, T(() => {
    var n;
    return (n = e.value) !== null && n !== void 0 ? n : t.value;
  })), e;
}, nm = {
  // Options.jsx
  items_per_page: "/ page",
  jump_to: "Go to",
  jump_to_confirm: "confirm",
  page: "",
  // Pagination.jsx
  prev_page: "Previous Page",
  next_page: "Next Page",
  prev_5: "Previous 5 Pages",
  next_5: "Next 5 Pages",
  prev_3: "Previous 3 Pages",
  next_3: "Next 3 Pages"
}, rm = {
  locale: "en_US",
  today: "Today",
  now: "Now",
  backToToday: "Back to today",
  ok: "Ok",
  clear: "Clear",
  month: "Month",
  year: "Year",
  timeSelect: "select time",
  dateSelect: "select date",
  weekSelect: "Choose a week",
  monthSelect: "Choose a month",
  yearSelect: "Choose a year",
  decadeSelect: "Choose a decade",
  yearFormat: "YYYY",
  dateFormat: "M/D/YYYY",
  dayFormat: "D",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Previous month (PageUp)",
  nextMonth: "Next month (PageDown)",
  previousYear: "Last year (Control + left)",
  nextYear: "Next year (Control + right)",
  previousDecade: "Last decade",
  nextDecade: "Next decade",
  previousCentury: "Last century",
  nextCentury: "Next century"
}, eu = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
}, ul = {
  lang: m({
    placeholder: "Select date",
    yearPlaceholder: "Select year",
    quarterPlaceholder: "Select quarter",
    monthPlaceholder: "Select month",
    weekPlaceholder: "Select week",
    rangePlaceholder: ["Start date", "End date"],
    rangeYearPlaceholder: ["Start year", "End year"],
    rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
    rangeMonthPlaceholder: ["Start month", "End month"],
    rangeWeekPlaceholder: ["Start week", "End week"]
  }, rm),
  timePickerLocale: m({}, eu)
}, Ee = "${label} is not a valid ${type}", $t = {
  locale: "en",
  Pagination: nm,
  DatePicker: ul,
  TimePicker: eu,
  Calendar: ul,
  global: {
    placeholder: "Please select"
  },
  Table: {
    filterTitle: "Filter menu",
    filterConfirm: "OK",
    filterReset: "Reset",
    filterEmptyText: "No filters",
    filterCheckall: "Select all items",
    filterSearchPlaceholder: "Search in filters",
    emptyText: "No data",
    selectAll: "Select current page",
    selectInvert: "Invert current page",
    selectNone: "Clear all data",
    selectionAll: "Select all data",
    sortTitle: "Sort",
    expand: "Expand row",
    collapse: "Collapse row",
    triggerDesc: "Click to sort descending",
    triggerAsc: "Click to sort ascending",
    cancelSort: "Click to cancel sorting"
  },
  Tour: {
    Next: "Next",
    Previous: "Previous",
    Finish: "Finish"
  },
  Modal: {
    okText: "OK",
    cancelText: "Cancel",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Cancel"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Search here",
    itemUnit: "item",
    itemsUnit: "items",
    remove: "Remove",
    selectCurrent: "Select current page",
    removeCurrent: "Remove current page",
    selectAll: "Select all data",
    removeAll: "Remove all data",
    selectInvert: "Invert current page"
  },
  Upload: {
    uploading: "Uploading...",
    removeFile: "Remove file",
    uploadError: "Upload error",
    previewFile: "Preview file",
    downloadFile: "Download file"
  },
  Empty: {
    description: "No data"
  },
  Icon: {
    icon: "icon"
  },
  Text: {
    edit: "Edit",
    copy: "Copy",
    copied: "Copied",
    expand: "Expand"
  },
  PageHeader: {
    back: "Back"
  },
  Form: {
    optional: "(optional)",
    defaultValidateMessages: {
      default: "Field validation error for ${label}",
      required: "Please enter ${label}",
      enum: "${label} must be one of [${enum}]",
      whitespace: "${label} cannot be a blank character",
      date: {
        format: "${label} date format is invalid",
        parse: "${label} cannot be converted to a date",
        invalid: "${label} is an invalid date"
      },
      types: {
        string: Ee,
        method: Ee,
        array: Ee,
        object: Ee,
        number: Ee,
        date: Ee,
        boolean: Ee,
        integer: Ee,
        float: Ee,
        regexp: Ee,
        email: Ee,
        url: Ee,
        hex: Ee
      },
      string: {
        len: "${label} must be ${len} characters",
        min: "${label} must be at least ${min} characters",
        max: "${label} must be up to ${max} characters",
        range: "${label} must be between ${min}-${max} characters"
      },
      number: {
        len: "${label} must be equal to ${len}",
        min: "${label} must be minimum ${min}",
        max: "${label} must be maximum ${max}",
        range: "${label} must be between ${min}-${max}"
      },
      array: {
        len: "Must be ${len} ${label}",
        min: "At least ${min} ${label}",
        max: "At most ${max} ${label}",
        range: "The amount of ${label} must be between ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} does not match the pattern ${pattern}"
      }
    }
  },
  Image: {
    preview: "Preview"
  },
  QRCode: {
    expired: "QR code expired",
    refresh: "Refresh",
    scanned: "Scanned"
  }
}, tu = V({
  compatConfig: {
    MODE: 3
  },
  name: "LocaleReceiver",
  props: {
    componentName: String,
    defaultLocale: {
      type: [Object, Function]
    },
    children: {
      type: Function
    }
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const r = ve("localeData", {}), o = T(() => {
      const {
        componentName: a = "global",
        defaultLocale: l
      } = e, s = l || $t[a || "global"], {
        antLocale: c
      } = r, f = a && c ? c[a] : {};
      return m(m({}, typeof s == "function" ? s() : s), f || {});
    }), i = T(() => {
      const {
        antLocale: a
      } = r, l = a && a.locale;
      return a && a.exist && !l ? $t.locale : l;
    });
    return () => {
      const a = e.children || n.default, {
        antLocale: l
      } = r;
      return a == null ? void 0 : a(o.value, i.value, l);
    };
  }
});
function co(e, t, n) {
  const r = ve("localeData", {});
  return [T(() => {
    const {
      antLocale: i
    } = r, a = pe(t) || $t[e || "global"], l = e && i ? i[e] : {};
    return m(m(m({}, typeof a == "function" ? a() : a), l || {}), pe(n) || {});
  })];
}
function sa(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(r) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
const fl = "%";
class om {
  constructor(t) {
    this.cache = /* @__PURE__ */ new Map(), this.instanceId = t;
  }
  get(t) {
    return this.cache.get(Array.isArray(t) ? t.join(fl) : t) || null;
  }
  update(t, n) {
    const r = Array.isArray(t) ? t.join(fl) : t, o = this.cache.get(r), i = n(o);
    i === null ? this.cache.delete(r) : this.cache.set(r, i);
  }
}
const nu = "data-token-hash", Lt = "data-css-hash", im = "data-cache-path", cn = "__cssinjs_instance__";
function qn() {
  const e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    const t = document.body.querySelectorAll(`style[${Lt}]`) || [], {
      firstChild: n
    } = document.head;
    Array.from(t).forEach((o) => {
      o[cn] = o[cn] || e, o[cn] === e && document.head.insertBefore(o, n);
    });
    const r = {};
    Array.from(document.querySelectorAll(`style[${Lt}]`)).forEach((o) => {
      var i;
      const a = o.getAttribute(Lt);
      r[a] ? o[cn] === e && ((i = o.parentNode) === null || i === void 0 || i.removeChild(o)) : r[a] = !0;
    });
  }
  return new om(e);
}
const ru = Symbol("StyleContextKey"), am = () => {
  var e, t, n;
  const r = $n();
  let o;
  if (r && r.appContext) {
    const i = (n = (t = (e = r.appContext) === null || e === void 0 ? void 0 : e.config) === null || t === void 0 ? void 0 : t.globalProperties) === null || n === void 0 ? void 0 : n.__ANTDV_CSSINJS_CACHE__;
    i ? o = i : (o = qn(), r.appContext.config.globalProperties && (r.appContext.config.globalProperties.__ANTDV_CSSINJS_CACHE__ = o));
  } else
    o = qn();
  return o;
}, ou = {
  cache: qn(),
  defaultCache: !0,
  hashPriority: "low"
}, uo = () => {
  const e = am();
  return ve(ru, L(m(m({}, ou), {
    cache: e
  })));
}, lm = (e) => {
  const t = uo(), n = L(m(m({}, ou), {
    cache: qn()
  }));
  return Q([() => pe(e), t], () => {
    const r = m({}, t.value), o = pe(e);
    Object.keys(o).forEach((a) => {
      const l = o[a];
      o[a] !== void 0 && (r[a] = l);
    });
    const {
      cache: i
    } = o;
    r.cache = r.cache || qn(), r.defaultCache = !i && t.value.defaultCache, n.value = r;
  }, {
    immediate: !0
  }), me(ru, n), n;
}, sm = () => ({
  autoClear: Ge(),
  /** @private Test only. Not work in production. */
  mock: kr(),
  /**
   * Only set when you need ssr to extract style on you own.
   * If not provided, it will auto create <style /> on the end of Provider in server side.
   */
  cache: te(),
  /** Tell children that this context is default generated context */
  defaultCache: Ge(),
  /** Use `:where` selector to reduce hashId css selector priority */
  hashPriority: kr(),
  /** Tell cssinjs where to inject style in */
  container: fn(),
  /** Component wil render inline  `<style />` for fallback in SSR. Not recommend. */
  ssrInline: Ge(),
  /** Transform css before inject in document. Please note that `transformers` do not support dynamic update */
  transformers: cl(),
  /**
   * Linters to lint css before inject in document.
   * Styles will be linted after transforming.
   * Please note that `linters` do not support dynamic update.
   */
  linters: cl()
});
lo(V({
  name: "AStyleProvider",
  inheritAttrs: !1,
  props: sm(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return lm(e), () => {
      var r;
      return (r = n.default) === null || r === void 0 ? void 0 : r.call(n);
    };
  }
}));
function cm() {
  return !1;
}
let ci = !1;
function um() {
  return ci;
}
const fm = process.env.NODE_ENV === "production" ? cm : um;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  const e = window;
  if (typeof e.webpackHotUpdate == "function") {
    const t = e.webpackHotUpdate;
    e.webpackHotUpdate = function() {
      return ci = !0, setTimeout(() => {
        ci = !1;
      }, 0), t(...arguments);
    };
  }
}
function iu(e, t, n, r) {
  const o = uo(), i = L(""), a = L();
  Be(() => {
    i.value = [e, ...t.value].join("%");
  });
  const l = fm(), s = (c) => {
    o.value.cache.update(c, (f) => {
      const [u = 0, d] = f || [];
      return u - 1 === 0 ? (r == null || r(d, !1), null) : [u - 1, d];
    });
  };
  return Q(i, (c, f) => {
    f && s(f), o.value.cache.update(c, (u) => {
      const [d = 0, p] = u || [];
      let h = p;
      process.env.NODE_ENV !== "production" && p && l && (r == null || r(h, l), h = null);
      const g = h || n();
      return [d + 1, g];
    }), a.value = o.value.cache.get(i.value)[1];
  }, {
    immediate: !0
  }), We(() => {
    s(i.value);
  }), a;
}
function Qe() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function vt(e, t) {
  return e && e.contains ? e.contains(t) : !1;
}
const dl = "data-vc-order", dm = "vc-util-key", ui = /* @__PURE__ */ new Map();
function au() {
  let {
    mark: e
  } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return e ? e.startsWith("data-") ? e : `data-${e}` : dm;
}
function fo(e) {
  return e.attachTo ? e.attachTo : document.querySelector("head") || document.body;
}
function pm(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function lu(e) {
  return Array.from((ui.get(e) || e).children).filter((t) => t.tagName === "STYLE");
}
function su(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Qe())
    return null;
  const {
    csp: n,
    prepend: r
  } = t, o = document.createElement("style");
  o.setAttribute(dl, pm(r)), n != null && n.nonce && (o.nonce = n == null ? void 0 : n.nonce), o.innerHTML = e;
  const i = fo(t), {
    firstChild: a
  } = i;
  if (r) {
    if (r === "queue") {
      const l = lu(i).filter((s) => ["prepend", "prependQueue"].includes(s.getAttribute(dl)));
      if (l.length)
        return i.insertBefore(o, l[l.length - 1].nextSibling), o;
    }
    i.insertBefore(o, a);
  } else
    i.appendChild(o);
  return o;
}
function cu(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const n = fo(t);
  return lu(n).find((r) => r.getAttribute(au(t)) === e);
}
function qr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const n = cu(e, t);
  n && fo(t).removeChild(n);
}
function mm(e, t) {
  const n = ui.get(e);
  if (!n || !vt(document, n)) {
    const r = su("", t), {
      parentNode: o
    } = r;
    ui.set(e, o), e.removeChild(r);
  }
}
function Gn(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var r, o, i;
  const a = fo(n);
  mm(a, n);
  const l = cu(t, n);
  if (l)
    return !((r = n.csp) === null || r === void 0) && r.nonce && l.nonce !== ((o = n.csp) === null || o === void 0 ? void 0 : o.nonce) && (l.nonce = (i = n.csp) === null || i === void 0 ? void 0 : i.nonce), l.innerHTML !== e && (l.innerHTML = e), l;
  const s = su(e, n);
  return s.setAttribute(au(n), t), s;
}
function gm(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
class hn {
  constructor() {
    this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  size() {
    return this.keys.length;
  }
  internalGet(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = {
      map: this.cache
    };
    return t.forEach((o) => {
      var i;
      r ? r = (i = r == null ? void 0 : r.map) === null || i === void 0 ? void 0 : i.get(o) : r = void 0;
    }), r != null && r.value && n && (r.value[1] = this.cacheCallTimes++), r == null ? void 0 : r.value;
  }
  get(t) {
    var n;
    return (n = this.internalGet(t, !0)) === null || n === void 0 ? void 0 : n[0];
  }
  has(t) {
    return !!this.internalGet(t);
  }
  set(t, n) {
    if (!this.has(t)) {
      if (this.size() + 1 > hn.MAX_CACHE_SIZE + hn.MAX_CACHE_OFFSET) {
        const [o] = this.keys.reduce((i, a) => {
          const [, l] = i;
          return this.internalGet(a)[1] < l ? [a, this.internalGet(a)[1]] : i;
        }, [this.keys[0], this.cacheCallTimes]);
        this.delete(o);
      }
      this.keys.push(t);
    }
    let r = this.cache;
    t.forEach((o, i) => {
      if (i === t.length - 1)
        r.set(o, {
          value: [n, this.cacheCallTimes++]
        });
      else {
        const a = r.get(o);
        a ? a.map || (a.map = /* @__PURE__ */ new Map()) : r.set(o, {
          map: /* @__PURE__ */ new Map()
        }), r = r.get(o).map;
      }
    });
  }
  deleteByPath(t, n) {
    var r;
    const o = t.get(n[0]);
    if (n.length === 1)
      return o.map ? t.set(n[0], {
        map: o.map
      }) : t.delete(n[0]), (r = o.value) === null || r === void 0 ? void 0 : r[0];
    const i = this.deleteByPath(o.map, n.slice(1));
    return (!o.map || o.map.size === 0) && !o.value && t.delete(n[0]), i;
  }
  delete(t) {
    if (this.has(t))
      return this.keys = this.keys.filter((n) => !gm(n, t)), this.deleteByPath(this.cache, t);
  }
}
hn.MAX_CACHE_SIZE = 20;
hn.MAX_CACHE_OFFSET = 5;
let fi = {};
function Gr(e, t) {
  process.env.NODE_ENV !== "production" && !e && console !== void 0 && console.error(`Warning: ${t}`);
}
function hm(e, t) {
  process.env.NODE_ENV !== "production" && !e && console !== void 0 && console.warn(`Note: ${t}`);
}
function vm() {
  fi = {};
}
function uu(e, t, n) {
  !t && !fi[n] && (e(!1, n), fi[n] = !0);
}
function ca(e, t) {
  uu(Gr, e, t);
}
function A2(e, t) {
  uu(hm, e, t);
}
function ym() {
}
let Xe = ym;
process.env.NODE_ENV !== "production" && (Xe = (e, t, n) => {
  ca(e, `[ant-design-vue: ${t}] ${n}`), process.env.NODE_ENV === "test" && vm();
});
let pl = 0;
class fu {
  constructor(t) {
    this.derivatives = Array.isArray(t) ? t : [t], this.id = pl, t.length === 0 && Xe(t.length > 0, "[Ant Design Vue CSS-in-JS] Theme should have at least one derivative function."), pl += 1;
  }
  getDerivativeToken(t) {
    return this.derivatives.reduce((n, r) => r(t, n), void 0);
  }
}
const Mo = new hn();
function du(e) {
  const t = Array.isArray(e) ? e : [e];
  return Mo.has(t) || Mo.set(t, new fu(t)), Mo.get(t);
}
const ml = /* @__PURE__ */ new WeakMap();
function Ur(e) {
  let t = ml.get(e) || "";
  return t || (Object.keys(e).forEach((n) => {
    const r = e[n];
    t += n, r instanceof fu ? t += r.id : r && typeof r == "object" ? t += Ur(r) : t += r;
  }), ml.set(e, t)), t;
}
function bm(e, t) {
  return sa(`${t}_${Ur(e)}`);
}
const Bn = `random-${Date.now()}-${Math.random()}`.replace(/\./g, ""), pu = "_bAmBoO_";
function Cm(e, t, n) {
  var r, o;
  if (Qe()) {
    Gn(e, Bn);
    const i = document.createElement("div");
    i.style.position = "fixed", i.style.left = "0", i.style.top = "0", t == null || t(i), document.body.appendChild(i), process.env.NODE_ENV !== "production" && (i.innerHTML = "Test", i.style.zIndex = "9999999");
    const a = n ? n(i) : (r = getComputedStyle(i).content) === null || r === void 0 ? void 0 : r.includes(pu);
    return (o = i.parentNode) === null || o === void 0 || o.removeChild(i), qr(Bn), a;
  }
  return !1;
}
let Fo;
function xm() {
  return Fo === void 0 && (Fo = Cm(`@layer ${Bn} { .${Bn} { content: "${pu}"!important; } }`, (e) => {
    e.className = Bn;
  })), Fo;
}
const gl = {}, wm = process.env.NODE_ENV === "production", $m = process.env.NODE_ENV === "prerender", Sm = !wm && !$m ? "css-dev-only-do-not-override" : "css", Ft = /* @__PURE__ */ new Map();
function Om(e) {
  Ft.set(e, (Ft.get(e) || 0) + 1);
}
function Tm(e, t) {
  typeof document < "u" && document.querySelectorAll(`style[${nu}="${e}"]`).forEach((r) => {
    var o;
    r[cn] === t && ((o = r.parentNode) === null || o === void 0 || o.removeChild(r));
  });
}
const Pm = 0;
function Em(e, t) {
  Ft.set(e, (Ft.get(e) || 0) - 1);
  const n = Array.from(Ft.keys()), r = n.filter((o) => (Ft.get(o) || 0) <= 0);
  n.length - r.length > Pm && r.forEach((o) => {
    Tm(o, t), Ft.delete(o);
  });
}
const _m = (e, t, n, r) => {
  const o = n.getDerivativeToken(e);
  let i = m(m({}, o), t);
  return r && (i = r(i)), i;
};
function Am(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : X({});
  const r = uo(), o = T(() => m({}, ...t.value)), i = T(() => Ur(o.value)), a = T(() => Ur(n.value.override || gl));
  return iu("token", T(() => [n.value.salt || "", e.value.id, i.value, a.value]), () => {
    const {
      salt: s = "",
      override: c = gl,
      formatToken: f,
      getComputedToken: u
    } = n.value, d = u ? u(o.value, c, e.value) : _m(o.value, c, e.value, f), p = bm(d, s);
    d._tokenKey = p, Om(p);
    const h = `${Sm}-${sa(p)}`;
    return d._hashId = h, [d, h];
  }, (s) => {
    var c;
    Em(s[0]._tokenKey, (c = r.value) === null || c === void 0 ? void 0 : c.cache.instanceId);
  });
}
var Im = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, mu = "comm", gu = "rule", hu = "decl", Mm = "@import", Fm = "@keyframes", Nm = "@layer", vu = Math.abs, ua = String.fromCharCode;
function yu(e) {
  return e.trim();
}
function Ar(e, t, n) {
  return e.replace(t, n);
}
function Rm(e, t, n) {
  return e.indexOf(t, n);
}
function Un(e, t) {
  return e.charCodeAt(t) | 0;
}
function Xn(e, t, n) {
  return e.slice(t, n);
}
function ft(e) {
  return e.length;
}
function jm(e) {
  return e.length;
}
function pr(e, t) {
  return t.push(e), e;
}
var po = 1, vn = 1, bu = 0, He = 0, de = 0, Sn = "";
function fa(e, t, n, r, o, i, a, l) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: po, column: vn, length: a, return: "", siblings: l };
}
function Dm() {
  return de;
}
function Bm() {
  return de = He > 0 ? Un(Sn, --He) : 0, vn--, de === 10 && (vn = 1, po--), de;
}
function Ke() {
  return de = He < bu ? Un(Sn, He++) : 0, vn++, de === 10 && (vn = 1, po++), de;
}
function Ht() {
  return Un(Sn, He);
}
function Ir() {
  return He;
}
function mo(e, t) {
  return Xn(Sn, e, t);
}
function di(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Lm(e) {
  return po = vn = 1, bu = ft(Sn = e), He = 0, [];
}
function Hm(e) {
  return Sn = "", e;
}
function No(e) {
  return yu(mo(He - 1, pi(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function zm(e) {
  for (; (de = Ht()) && de < 33; )
    Ke();
  return di(e) > 2 || di(de) > 3 ? "" : " ";
}
function Vm(e, t) {
  for (; --t && Ke() && !(de < 48 || de > 102 || de > 57 && de < 65 || de > 70 && de < 97); )
    ;
  return mo(e, Ir() + (t < 6 && Ht() == 32 && Ke() == 32));
}
function pi(e) {
  for (; Ke(); )
    switch (de) {
      case e:
        return He;
      case 34:
      case 39:
        e !== 34 && e !== 39 && pi(de);
        break;
      case 40:
        e === 41 && pi(e);
        break;
      case 92:
        Ke();
        break;
    }
  return He;
}
function Wm(e, t) {
  for (; Ke() && e + de !== 57; )
    if (e + de === 84 && Ht() === 47)
      break;
  return "/*" + mo(t, He - 1) + "*" + ua(e === 47 ? e : Ke());
}
function km(e) {
  for (; !di(Ht()); )
    Ke();
  return mo(e, He);
}
function qm(e) {
  return Hm(Mr("", null, null, null, [""], e = Lm(e), 0, [0], e));
}
function Mr(e, t, n, r, o, i, a, l, s) {
  for (var c = 0, f = 0, u = a, d = 0, p = 0, h = 0, g = 1, x = 1, v = 1, $ = 0, y = "", b = o, S = i, O = r, C = y; x; )
    switch (h = $, $ = Ke()) {
      case 40:
        if (h != 108 && Un(C, u - 1) == 58) {
          Rm(C += Ar(No($), "&", "&\f"), "&\f", vu(c ? l[c - 1] : 0)) != -1 && (v = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        C += No($);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        C += zm(h);
        break;
      case 92:
        C += Vm(Ir() - 1, 7);
        continue;
      case 47:
        switch (Ht()) {
          case 42:
          case 47:
            pr(Gm(Wm(Ke(), Ir()), t, n, s), s);
            break;
          default:
            C += "/";
        }
        break;
      case 123 * g:
        l[c++] = ft(C) * v;
      case 125 * g:
      case 59:
      case 0:
        switch ($) {
          case 0:
          case 125:
            x = 0;
          case 59 + f:
            v == -1 && (C = Ar(C, /\f/g, "")), p > 0 && ft(C) - u && pr(p > 32 ? vl(C + ";", r, n, u - 1, s) : vl(Ar(C, " ", "") + ";", r, n, u - 2, s), s);
            break;
          case 59:
            C += ";";
          default:
            if (pr(O = hl(C, t, n, c, f, o, l, y, b = [], S = [], u, i), i), $ === 123)
              if (f === 0)
                Mr(C, t, O, O, b, i, u, l, S);
              else
                switch (d === 99 && Un(C, 3) === 110 ? 100 : d) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Mr(e, O, O, r && pr(hl(e, O, O, 0, 0, o, l, y, o, b = [], u, S), S), o, S, u, l, r ? b : S);
                    break;
                  default:
                    Mr(C, O, O, O, [""], S, 0, l, S);
                }
        }
        c = f = p = 0, g = v = 1, y = C = "", u = a;
        break;
      case 58:
        u = 1 + ft(C), p = h;
      default:
        if (g < 1) {
          if ($ == 123)
            --g;
          else if ($ == 125 && g++ == 0 && Bm() == 125)
            continue;
        }
        switch (C += ua($), $ * g) {
          case 38:
            v = f > 0 ? 1 : (C += "\f", -1);
            break;
          case 44:
            l[c++] = (ft(C) - 1) * v, v = 1;
            break;
          case 64:
            Ht() === 45 && (C += No(Ke())), d = Ht(), f = u = ft(y = C += km(Ir())), $++;
            break;
          case 45:
            h === 45 && ft(C) == 2 && (g = 0);
        }
    }
  return i;
}
function hl(e, t, n, r, o, i, a, l, s, c, f, u) {
  for (var d = o - 1, p = o === 0 ? i : [""], h = jm(p), g = 0, x = 0, v = 0; g < r; ++g)
    for (var $ = 0, y = Xn(e, d + 1, d = vu(x = a[g])), b = e; $ < h; ++$)
      (b = yu(x > 0 ? p[$] + " " + y : Ar(y, /&\f/g, p[$]))) && (s[v++] = b);
  return fa(e, t, n, o === 0 ? gu : l, s, c, f, u);
}
function Gm(e, t, n, r) {
  return fa(e, t, n, mu, ua(Dm()), Xn(e, 2, -2), 0, r);
}
function vl(e, t, n, r, o) {
  return fa(e, t, n, hu, Xn(e, 0, r), Xn(e, r + 1, -1), r, o);
}
function mi(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function Um(e, t, n, r) {
  switch (e.type) {
    case Nm:
      if (e.children.length)
        break;
    case Mm:
    case hu:
      return e.return = e.return || e.value;
    case mu:
      return "";
    case Fm:
      return e.return = e.value + "{" + mi(e.children, r) + "}";
    case gu:
      if (!ft(e.value = e.props.join(",")))
        return "";
  }
  return ft(n = mi(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Cu(e, t) {
  const {
    path: n,
    parentSelectors: r
  } = t;
  ca(!1, `[Ant Design Vue CSS-in-JS] ${n ? `Error in '${n}': ` : ""}${e}${r.length ? ` Selector info: ${r.join(" -> ")}` : ""}`);
}
const Xm = (e, t, n) => {
  if (e === "content") {
    const r = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
    (typeof t != "string" || ["normal", "none", "initial", "inherit", "unset"].indexOf(t) === -1 && !r.test(t) && (t.charAt(0) !== t.charAt(t.length - 1) || t.charAt(0) !== '"' && t.charAt(0) !== "'")) && Cu(`You seem to be using a value for 'content' without quotes, try replacing it with \`content: '"${t}"'\`.`, n);
  }
}, Km = (e, t, n) => {
  e === "animation" && n.hashId && t !== "none" && Cu(`You seem to be using hashed animation '${t}', in which case 'animationName' with Keyframe as value is recommended.`, n);
}, yl = "data-ant-cssinjs-cache-path", Ym = "_FILE_STYLE__";
let zt, xu = !0;
function Qm() {
  var e;
  if (!zt && (zt = {}, Qe())) {
    const t = document.createElement("div");
    t.className = yl, t.style.position = "fixed", t.style.visibility = "hidden", t.style.top = "-9999px", document.body.appendChild(t);
    let n = getComputedStyle(t).content || "";
    n = n.replace(/^"/, "").replace(/"$/, ""), n.split(";").forEach((o) => {
      const [i, a] = o.split(":");
      zt[i] = a;
    });
    const r = document.querySelector(`style[${yl}]`);
    r && (xu = !1, (e = r.parentNode) === null || e === void 0 || e.removeChild(r)), document.body.removeChild(t);
  }
}
function Zm(e) {
  return Qm(), !!zt[e];
}
function Jm(e) {
  const t = zt[e];
  let n = null;
  if (t && Qe())
    if (xu)
      n = Ym;
    else {
      const r = document.querySelector(`style[${Lt}="${zt[e]}"]`);
      r ? n = r.innerHTML : delete zt[e];
    }
  return [n, t];
}
const bl = Qe(), wu = "_skip_check_", $u = "_multi_value_";
function Cl(e) {
  return mi(qm(e), Um).replace(/\{%%%\:[^;];}/g, ";");
}
function eg(e) {
  return typeof e == "object" && e && (wu in e || $u in e);
}
function tg(e, t, n) {
  if (!t)
    return e;
  const r = `.${t}`, o = n === "low" ? `:where(${r})` : r;
  return e.split(",").map((a) => {
    var l;
    const s = a.trim().split(/\s+/);
    let c = s[0] || "";
    const f = ((l = c.match(/^\w+/)) === null || l === void 0 ? void 0 : l[0]) || "";
    return c = `${f}${o}${c.slice(f.length)}`, [c, ...s.slice(1)].join(" ");
  }).join(",");
}
const gi = /* @__PURE__ */ new Set();
process.env.NODE_ENV;
const hi = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    root: n,
    injectHash: r,
    parentSelectors: o
  } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  };
  const {
    hashId: i,
    layer: a,
    path: l,
    hashPriority: s,
    transformers: c = [],
    linters: f = []
  } = t;
  let u = "", d = {};
  function p(x) {
    const v = x.getName(i);
    if (!d[v]) {
      const [$] = hi(x.style, t, {
        root: !1,
        parentSelectors: o
      });
      d[v] = `@keyframes ${x.getName(i)}${$}`;
    }
  }
  function h(x) {
    let v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return x.forEach(($) => {
      Array.isArray($) ? h($, v) : $ && v.push($);
    }), v;
  }
  if (h(Array.isArray(e) ? e : [e]).forEach((x) => {
    const v = typeof x == "string" && !n ? {} : x;
    if (typeof v == "string")
      u += `${v}
`;
    else if (v._keyframe)
      p(v);
    else {
      const $ = c.reduce((y, b) => {
        var S;
        return ((S = b == null ? void 0 : b.visit) === null || S === void 0 ? void 0 : S.call(b, y)) || y;
      }, v);
      Object.keys($).forEach((y) => {
        var b;
        const S = $[y];
        if (typeof S == "object" && S && (y !== "animationName" || !S._keyframe) && !eg(S)) {
          let O = !1, C = y.trim(), E = !1;
          (n || r) && i ? C.startsWith("@") ? O = !0 : C = tg(y, i, s) : n && !i && (C === "&" || C === "") && (C = "", E = !0);
          const [A, _] = hi(S, t, {
            root: E,
            injectHash: O,
            parentSelectors: [...o, C]
          });
          d = m(m({}, d), _), u += `${C}${A}`;
        } else {
          let O = function(E, A) {
            process.env.NODE_ENV !== "production" && (typeof S != "object" || !(S != null && S[wu])) && [Xm, Km, ...f].forEach((R) => R(E, A, {
              path: l,
              hashId: i,
              parentSelectors: o
            }));
            const _ = E.replace(/[A-Z]/g, (R) => `-${R.toLowerCase()}`);
            let M = A;
            !Im[E] && typeof M == "number" && M !== 0 && (M = `${M}px`), E === "animationName" && (A != null && A._keyframe) && (p(A), M = A.getName(i)), u += `${_}:${M};`;
          };
          const C = (b = S == null ? void 0 : S.value) !== null && b !== void 0 ? b : S;
          typeof S == "object" && (S != null && S[$u]) && Array.isArray(C) ? C.forEach((E) => {
            O(y, E);
          }) : O(y, C);
        }
      });
    }
  }), !n)
    u = `{${u}}`;
  else if (a && xm()) {
    const x = a.split(",");
    u = `@layer ${x[x.length - 1].trim()} {${u}}`, x.length > 1 && (u = `@layer ${a}{%%%:%}${u}`);
  }
  return [u, d];
};
function ng(e, t) {
  return sa(`${e.join("%")}${t}`);
}
function vi(e, t) {
  const n = uo(), r = T(() => e.value.token._tokenKey), o = T(() => [r.value, ...e.value.path]);
  let i = bl;
  return process.env.NODE_ENV !== "production" && n.value.mock !== void 0 && (i = n.value.mock === "client"), iu(
    "style",
    o,
    // Create cache if needed
    () => {
      const {
        path: a,
        hashId: l,
        layer: s,
        nonce: c,
        clientOnly: f,
        order: u = 0
      } = e.value, d = o.value.join("|");
      if (Zm(d)) {
        const [C, E] = Jm(d);
        if (C)
          return [C, r.value, E, {}, f, u];
      }
      const p = t(), {
        hashPriority: h,
        container: g,
        transformers: x,
        linters: v,
        cache: $
      } = n.value, [y, b] = hi(p, {
        hashId: l,
        hashPriority: h,
        layer: s,
        path: a.join("-"),
        transformers: x,
        linters: v
      }), S = Cl(y), O = ng(o.value, S);
      if (i) {
        const C = {
          mark: Lt,
          prepend: "queue",
          attachTo: g,
          priority: u
        }, E = typeof c == "function" ? c() : c;
        E && (C.csp = {
          nonce: E
        });
        const A = Gn(S, O, C);
        A[cn] = $.instanceId, A.setAttribute(nu, r.value), process.env.NODE_ENV !== "production" && A.setAttribute(im, o.value.join("|")), Object.keys(b).forEach((_) => {
          gi.has(_) || (gi.add(_), Gn(Cl(b[_]), `_effect-${_}`, {
            mark: Lt,
            prepend: "queue",
            attachTo: g
          }));
        });
      }
      return [S, r.value, O, b, f, u];
    },
    // Remove cache if no need
    (a, l) => {
      let [, , s] = a;
      (l || n.value.autoClear) && bl && qr(s, {
        mark: Lt
      });
    }
  ), (a) => a;
}
class se {
  constructor(t, n) {
    this._keyframe = !0, this.name = t, this.style = n;
  }
  getName() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    return t ? `${t}-${this.name}` : this.name;
  }
}
const rg = "4.2.1", Xr = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"];
function Ce(e, t) {
  og(e) && (e = "100%");
  var n = ig(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function mr(e) {
  return Math.min(1, Math.max(0, e));
}
function og(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function ig(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function Su(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function gr(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function jt(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function ag(e, t, n) {
  return {
    r: Ce(e, 255) * 255,
    g: Ce(t, 255) * 255,
    b: Ce(n, 255) * 255
  };
}
function xl(e, t, n) {
  e = Ce(e, 255), t = Ce(t, 255), n = Ce(n, 255);
  var r = Math.max(e, t, n), o = Math.min(e, t, n), i = 0, a = 0, l = (r + o) / 2;
  if (r === o)
    a = 0, i = 0;
  else {
    var s = r - o;
    switch (a = l > 0.5 ? s / (2 - r - o) : s / (r + o), r) {
      case e:
        i = (t - n) / s + (t < n ? 6 : 0);
        break;
      case t:
        i = (n - e) / s + 2;
        break;
      case n:
        i = (e - t) / s + 4;
        break;
    }
    i /= 6;
  }
  return { h: i, s: a, l };
}
function Ro(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function lg(e, t, n) {
  var r, o, i;
  if (e = Ce(e, 360), t = Ce(t, 100), n = Ce(n, 100), t === 0)
    o = n, i = n, r = n;
  else {
    var a = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - a;
    r = Ro(l, a, e + 1 / 3), o = Ro(l, a, e), i = Ro(l, a, e - 1 / 3);
  }
  return { r: r * 255, g: o * 255, b: i * 255 };
}
function yi(e, t, n) {
  e = Ce(e, 255), t = Ce(t, 255), n = Ce(n, 255);
  var r = Math.max(e, t, n), o = Math.min(e, t, n), i = 0, a = r, l = r - o, s = r === 0 ? 0 : l / r;
  if (r === o)
    i = 0;
  else {
    switch (r) {
      case e:
        i = (t - n) / l + (t < n ? 6 : 0);
        break;
      case t:
        i = (n - e) / l + 2;
        break;
      case n:
        i = (e - t) / l + 4;
        break;
    }
    i /= 6;
  }
  return { h: i, s, v: a };
}
function sg(e, t, n) {
  e = Ce(e, 360) * 6, t = Ce(t, 100), n = Ce(n, 100);
  var r = Math.floor(e), o = e - r, i = n * (1 - t), a = n * (1 - o * t), l = n * (1 - (1 - o) * t), s = r % 6, c = [n, a, i, i, l, n][s], f = [l, n, n, a, i, i][s], u = [i, i, l, n, n, a][s];
  return { r: c * 255, g: f * 255, b: u * 255 };
}
function bi(e, t, n, r) {
  var o = [
    jt(Math.round(e).toString(16)),
    jt(Math.round(t).toString(16)),
    jt(Math.round(n).toString(16))
  ];
  return r && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) : o.join("");
}
function cg(e, t, n, r, o) {
  var i = [
    jt(Math.round(e).toString(16)),
    jt(Math.round(t).toString(16)),
    jt(Math.round(n).toString(16)),
    jt(ug(r))
  ];
  return o && i[0].startsWith(i[0].charAt(1)) && i[1].startsWith(i[1].charAt(1)) && i[2].startsWith(i[2].charAt(1)) && i[3].startsWith(i[3].charAt(1)) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) + i[3].charAt(0) : i.join("");
}
function ug(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function wl(e) {
  return Ae(e) / 255;
}
function Ae(e) {
  return parseInt(e, 16);
}
function fg(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var Ci = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function on(e) {
  var t = { r: 0, g: 0, b: 0 }, n = 1, r = null, o = null, i = null, a = !1, l = !1;
  return typeof e == "string" && (e = mg(e)), typeof e == "object" && (st(e.r) && st(e.g) && st(e.b) ? (t = ag(e.r, e.g, e.b), a = !0, l = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : st(e.h) && st(e.s) && st(e.v) ? (r = gr(e.s), o = gr(e.v), t = sg(e.h, r, o), a = !0, l = "hsv") : st(e.h) && st(e.s) && st(e.l) && (r = gr(e.s), i = gr(e.l), t = lg(e.h, r, i), a = !0, l = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = Su(n), {
    ok: a,
    format: e.format || l,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var dg = "[-\\+]?\\d+%?", pg = "[-\\+]?\\d*\\.\\d+%?", Ct = "(?:".concat(pg, ")|(?:").concat(dg, ")"), jo = "[\\s|\\(]+(".concat(Ct, ")[,|\\s]+(").concat(Ct, ")[,|\\s]+(").concat(Ct, ")\\s*\\)?"), Do = "[\\s|\\(]+(".concat(Ct, ")[,|\\s]+(").concat(Ct, ")[,|\\s]+(").concat(Ct, ")[,|\\s]+(").concat(Ct, ")\\s*\\)?"), qe = {
  CSS_UNIT: new RegExp(Ct),
  rgb: new RegExp("rgb" + jo),
  rgba: new RegExp("rgba" + Do),
  hsl: new RegExp("hsl" + jo),
  hsla: new RegExp("hsla" + Do),
  hsv: new RegExp("hsv" + jo),
  hsva: new RegExp("hsva" + Do),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function mg(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (Ci[e])
    e = Ci[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = qe.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = qe.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = qe.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = qe.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = qe.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = qe.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = qe.hex8.exec(e), n ? {
    r: Ae(n[1]),
    g: Ae(n[2]),
    b: Ae(n[3]),
    a: wl(n[4]),
    format: t ? "name" : "hex8"
  } : (n = qe.hex6.exec(e), n ? {
    r: Ae(n[1]),
    g: Ae(n[2]),
    b: Ae(n[3]),
    format: t ? "name" : "hex"
  } : (n = qe.hex4.exec(e), n ? {
    r: Ae(n[1] + n[1]),
    g: Ae(n[2] + n[2]),
    b: Ae(n[3] + n[3]),
    a: wl(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = qe.hex3.exec(e), n ? {
    r: Ae(n[1] + n[1]),
    g: Ae(n[2] + n[2]),
    b: Ae(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function st(e) {
  return !!qe.CSS_UNIT.exec(String(e));
}
var be = (
  /** @class */
  function() {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var r;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = fg(t)), this.originalInput = t;
      var o = on(t);
      this.originalInput = t, this.r = o.r, this.g = o.g, this.b = o.b, this.a = o.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (r = n.format) !== null && r !== void 0 ? r : o.format, this.gradientType = n.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = o.ok;
    }
    return e.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, e.prototype.isLight = function() {
      return !this.isDark();
    }, e.prototype.getBrightness = function() {
      var t = this.toRgb();
      return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
    }, e.prototype.getLuminance = function() {
      var t = this.toRgb(), n, r, o, i = t.r / 255, a = t.g / 255, l = t.b / 255;
      return i <= 0.03928 ? n = i / 12.92 : n = Math.pow((i + 0.055) / 1.055, 2.4), a <= 0.03928 ? r = a / 12.92 : r = Math.pow((a + 0.055) / 1.055, 2.4), l <= 0.03928 ? o = l / 12.92 : o = Math.pow((l + 0.055) / 1.055, 2.4), 0.2126 * n + 0.7152 * r + 0.0722 * o;
    }, e.prototype.getAlpha = function() {
      return this.a;
    }, e.prototype.setAlpha = function(t) {
      return this.a = Su(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = yi(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = yi(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), o = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(n, ", ").concat(r, "%, ").concat(o, "%)") : "hsva(".concat(n, ", ").concat(r, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = xl(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = xl(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), o = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(n, ", ").concat(r, "%, ").concat(o, "%)") : "hsla(".concat(n, ", ").concat(r, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), bi(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), cg(this.r, this.g, this.b, this.a, t);
    }, e.prototype.toHex8String = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex8(t);
    }, e.prototype.toHexShortString = function(t) {
      return t === void 0 && (t = !1), this.a === 1 ? this.toHexString(t) : this.toHex8String(t);
    }, e.prototype.toRgb = function() {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a
      };
    }, e.prototype.toRgbString = function() {
      var t = Math.round(this.r), n = Math.round(this.g), r = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(t, ", ").concat(n, ", ").concat(r, ")") : "rgba(".concat(t, ", ").concat(n, ", ").concat(r, ", ").concat(this.roundA, ")");
    }, e.prototype.toPercentageRgb = function() {
      var t = function(n) {
        return "".concat(Math.round(Ce(n, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(n) {
        return Math.round(Ce(n, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + bi(this.r, this.g, this.b, !1), n = 0, r = Object.entries(Ci); n < r.length; n++) {
        var o = r[n], i = o[0], a = o[1];
        if (t === a)
          return i;
      }
      return !1;
    }, e.prototype.toString = function(t) {
      var n = !!t;
      t = t ?? this.format;
      var r = !1, o = this.a < 1 && this.a >= 0, i = !n && o && (t.startsWith("hex") || t === "name");
      return i ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (r = this.toRgbString()), t === "prgb" && (r = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (r = this.toHexString()), t === "hex3" && (r = this.toHexString(!0)), t === "hex4" && (r = this.toHex8String(!0)), t === "hex8" && (r = this.toHex8String()), t === "name" && (r = this.toName()), t === "hsl" && (r = this.toHslString()), t === "hsv" && (r = this.toHsvString()), r || this.toHexString());
    }, e.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, e.prototype.clone = function() {
      return new e(this.toString());
    }, e.prototype.lighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l += t / 100, n.l = mr(n.l), new e(n);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toRgb();
      return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l -= t / 100, n.l = mr(n.l), new e(n);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s -= t / 100, n.s = mr(n.s), new e(n);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s += t / 100, n.s = mr(n.s), new e(n);
    }, e.prototype.greyscale = function() {
      return this.desaturate(100);
    }, e.prototype.spin = function(t) {
      var n = this.toHsl(), r = (n.h + t) % 360;
      return n.h = r < 0 ? 360 + r : r, new e(n);
    }, e.prototype.mix = function(t, n) {
      n === void 0 && (n = 50);
      var r = this.toRgb(), o = new e(t).toRgb(), i = n / 100, a = {
        r: (o.r - r.r) * i + r.r,
        g: (o.g - r.g) * i + r.g,
        b: (o.b - r.b) * i + r.b,
        a: (o.a - r.a) * i + r.a
      };
      return new e(a);
    }, e.prototype.analogous = function(t, n) {
      t === void 0 && (t = 6), n === void 0 && (n = 30);
      var r = this.toHsl(), o = 360 / n, i = [this];
      for (r.h = (r.h - (o * t >> 1) + 720) % 360; --t; )
        r.h = (r.h + o) % 360, i.push(new e(r));
      return i;
    }, e.prototype.complement = function() {
      var t = this.toHsl();
      return t.h = (t.h + 180) % 360, new e(t);
    }, e.prototype.monochromatic = function(t) {
      t === void 0 && (t = 6);
      for (var n = this.toHsv(), r = n.h, o = n.s, i = n.v, a = [], l = 1 / t; t--; )
        a.push(new e({ h: r, s: o, v: i })), i = (i + l) % 1;
      return a;
    }, e.prototype.splitcomplement = function() {
      var t = this.toHsl(), n = t.h;
      return [
        this,
        new e({ h: (n + 72) % 360, s: t.s, l: t.l }),
        new e({ h: (n + 216) % 360, s: t.s, l: t.l })
      ];
    }, e.prototype.onBackground = function(t) {
      var n = this.toRgb(), r = new e(t).toRgb(), o = n.a + r.a * (1 - n.a);
      return new e({
        r: (n.r * n.a + r.r * r.a * (1 - n.a)) / o,
        g: (n.g * n.a + r.g * r.a * (1 - n.a)) / o,
        b: (n.b * n.a + r.b * r.a * (1 - n.a)) / o,
        a: o
      });
    }, e.prototype.triad = function() {
      return this.polyad(3);
    }, e.prototype.tetrad = function() {
      return this.polyad(4);
    }, e.prototype.polyad = function(t) {
      for (var n = this.toHsl(), r = n.h, o = [this], i = 360 / t, a = 1; a < t; a++)
        o.push(new e({ h: (r + a * i) % 360, s: n.s, l: n.l }));
      return o;
    }, e.prototype.equals = function(t) {
      return this.toRgbString() === new e(t).toRgbString();
    }, e;
  }()
), hr = 2, $l = 0.16, gg = 0.05, hg = 0.05, vg = 0.15, Ou = 5, Tu = 4, yg = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}];
function Sl(e) {
  var t = e.r, n = e.g, r = e.b, o = yi(t, n, r);
  return {
    h: o.h * 360,
    s: o.s,
    v: o.v
  };
}
function vr(e) {
  var t = e.r, n = e.g, r = e.b;
  return "#".concat(bi(t, n, r, !1));
}
function bg(e, t, n) {
  var r = n / 100, o = {
    r: (t.r - e.r) * r + e.r,
    g: (t.g - e.g) * r + e.g,
    b: (t.b - e.b) * r + e.b
  };
  return o;
}
function Ol(e, t, n) {
  var r;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? r = n ? Math.round(e.h) - hr * t : Math.round(e.h) + hr * t : r = n ? Math.round(e.h) + hr * t : Math.round(e.h) - hr * t, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function Tl(e, t, n) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var r;
  return n ? r = e.s - $l * t : t === Tu ? r = e.s + $l : r = e.s + gg * t, r > 1 && (r = 1), n && t === Ou && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Number(r.toFixed(2));
}
function Pl(e, t, n) {
  var r;
  return n ? r = e.v + hg * t : r = e.v - vg * t, r > 1 && (r = 1), Number(r.toFixed(2));
}
function kt(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [], r = on(e), o = Ou; o > 0; o -= 1) {
    var i = Sl(r), a = vr(on({
      h: Ol(i, o, !0),
      s: Tl(i, o, !0),
      v: Pl(i, o, !0)
    }));
    n.push(a);
  }
  n.push(vr(r));
  for (var l = 1; l <= Tu; l += 1) {
    var s = Sl(r), c = vr(on({
      h: Ol(s, l),
      s: Tl(s, l),
      v: Pl(s, l)
    }));
    n.push(c);
  }
  return t.theme === "dark" ? yg.map(function(f) {
    var u = f.index, d = f.opacity, p = vr(bg(on(t.backgroundColor || "#141414"), on(n[u]), d * 100));
    return p;
  }) : n;
}
var Bo = {
  red: "#F5222D",
  volcano: "#FA541C",
  orange: "#FA8C16",
  gold: "#FAAD14",
  yellow: "#FADB14",
  lime: "#A0D911",
  green: "#52C41A",
  cyan: "#13C2C2",
  blue: "#1890FF",
  geekblue: "#2F54EB",
  purple: "#722ED1",
  magenta: "#EB2F96",
  grey: "#666666"
}, Fr = {}, Lo = {};
Object.keys(Bo).forEach(function(e) {
  Fr[e] = kt(Bo[e]), Fr[e].primary = Fr[e][5], Lo[e] = kt(Bo[e], {
    theme: "dark",
    backgroundColor: "#141414"
  }), Lo[e].primary = Lo[e][5];
});
var Cg = Fr.blue;
const xg = (e) => {
  const {
    controlHeight: t
  } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
};
function wg(e) {
  const {
    sizeUnit: t,
    sizeStep: n
  } = e;
  return {
    sizeXXL: t * (n + 8),
    sizeXL: t * (n + 4),
    sizeLG: t * (n + 2),
    sizeMD: t * (n + 1),
    sizeMS: t * n,
    size: t * n,
    sizeSM: t * (n - 1),
    sizeXS: t * (n - 2),
    sizeXXS: t * (n - 3)
    // 4
  };
}
const Pu = {
  blue: "#1677ff",
  purple: "#722ED1",
  cyan: "#13C2C2",
  green: "#52C41A",
  magenta: "#EB2F96",
  pink: "#eb2f96",
  red: "#F5222D",
  orange: "#FA8C16",
  yellow: "#FADB14",
  volcano: "#FA541C",
  geekblue: "#2F54EB",
  gold: "#FAAD14",
  lime: "#A0D911"
}, go = m(m({}, Pu), {
  // Color
  colorPrimary: "#1677ff",
  colorSuccess: "#52c41a",
  colorWarning: "#faad14",
  colorError: "#ff4d4f",
  colorInfo: "#1677ff",
  colorTextBase: "",
  colorBgBase: "",
  // Font
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
  fontSize: 14,
  // Line
  lineWidth: 1,
  lineType: "solid",
  // Motion
  motionUnit: 0.1,
  motionBase: 0,
  motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
  motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
  motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
  motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
  motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
  motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
  // Radius
  borderRadius: 6,
  // Size
  sizeUnit: 4,
  sizeStep: 4,
  sizePopupArrow: 16,
  // Control Base
  controlHeight: 32,
  // zIndex
  zIndexBase: 0,
  zIndexPopupBase: 1e3,
  // Image
  opacityImage: 1,
  // Wireframe
  wireframe: !1
});
function $g(e, t) {
  let {
    generateColorPalettes: n,
    generateNeutralColorPalettes: r
  } = t;
  const {
    colorSuccess: o,
    colorWarning: i,
    colorError: a,
    colorInfo: l,
    colorPrimary: s,
    colorBgBase: c,
    colorTextBase: f
  } = e, u = n(s), d = n(o), p = n(i), h = n(a), g = n(l), x = r(c, f);
  return m(m({}, x), {
    colorPrimaryBg: u[1],
    colorPrimaryBgHover: u[2],
    colorPrimaryBorder: u[3],
    colorPrimaryBorderHover: u[4],
    colorPrimaryHover: u[5],
    colorPrimary: u[6],
    colorPrimaryActive: u[7],
    colorPrimaryTextHover: u[8],
    colorPrimaryText: u[9],
    colorPrimaryTextActive: u[10],
    colorSuccessBg: d[1],
    colorSuccessBgHover: d[2],
    colorSuccessBorder: d[3],
    colorSuccessBorderHover: d[4],
    colorSuccessHover: d[4],
    colorSuccess: d[6],
    colorSuccessActive: d[7],
    colorSuccessTextHover: d[8],
    colorSuccessText: d[9],
    colorSuccessTextActive: d[10],
    colorErrorBg: h[1],
    colorErrorBgHover: h[2],
    colorErrorBorder: h[3],
    colorErrorBorderHover: h[4],
    colorErrorHover: h[5],
    colorError: h[6],
    colorErrorActive: h[7],
    colorErrorTextHover: h[8],
    colorErrorText: h[9],
    colorErrorTextActive: h[10],
    colorWarningBg: p[1],
    colorWarningBgHover: p[2],
    colorWarningBorder: p[3],
    colorWarningBorderHover: p[4],
    colorWarningHover: p[4],
    colorWarning: p[6],
    colorWarningActive: p[7],
    colorWarningTextHover: p[8],
    colorWarningText: p[9],
    colorWarningTextActive: p[10],
    colorInfoBg: g[1],
    colorInfoBgHover: g[2],
    colorInfoBorder: g[3],
    colorInfoBorderHover: g[4],
    colorInfoHover: g[4],
    colorInfo: g[6],
    colorInfoActive: g[7],
    colorInfoTextHover: g[8],
    colorInfoText: g[9],
    colorInfoTextActive: g[10],
    colorBgMask: new be("#000").setAlpha(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const Sg = (e) => {
  let t = e, n = e, r = e, o = e;
  return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? n = 4 : e < 8 && e >= 7 ? n = 5 : e < 14 && e >= 8 ? n = 6 : e < 16 && e >= 14 ? n = 7 : e >= 16 && (n = 8), e < 6 && e >= 2 ? r = 1 : e >= 6 && (r = 2), e > 4 && e < 8 ? o = 4 : e >= 8 && (o = 6), {
    borderRadius: e > 16 ? 16 : e,
    borderRadiusXS: r,
    borderRadiusSM: n,
    borderRadiusLG: t,
    borderRadiusOuter: o
  };
};
function Og(e) {
  const {
    motionUnit: t,
    motionBase: n,
    borderRadius: r,
    lineWidth: o
  } = e;
  return m({
    // motion
    motionDurationFast: `${(n + t).toFixed(1)}s`,
    motionDurationMid: `${(n + t * 2).toFixed(1)}s`,
    motionDurationSlow: `${(n + t * 3).toFixed(1)}s`,
    // line
    lineWidthBold: o + 1
  }, Sg(r));
}
const ct = (e, t) => new be(e).setAlpha(t).toRgbString(), _n = (e, t) => new be(e).darken(t).toHexString(), Tg = (e) => {
  const t = kt(e);
  return {
    1: t[0],
    2: t[1],
    3: t[2],
    4: t[3],
    5: t[4],
    6: t[5],
    7: t[6],
    8: t[4],
    9: t[5],
    10: t[6]
    // 8: colors[7],
    // 9: colors[8],
    // 10: colors[9],
  };
}, Pg = (e, t) => {
  const n = e || "#fff", r = t || "#000";
  return {
    colorBgBase: n,
    colorTextBase: r,
    colorText: ct(r, 0.88),
    colorTextSecondary: ct(r, 0.65),
    colorTextTertiary: ct(r, 0.45),
    colorTextQuaternary: ct(r, 0.25),
    colorFill: ct(r, 0.15),
    colorFillSecondary: ct(r, 0.06),
    colorFillTertiary: ct(r, 0.04),
    colorFillQuaternary: ct(r, 0.02),
    colorBgLayout: _n(n, 4),
    colorBgContainer: _n(n, 0),
    colorBgElevated: _n(n, 0),
    colorBgSpotlight: ct(r, 0.85),
    colorBorder: _n(n, 15),
    colorBorderSecondary: _n(n, 6)
  };
};
function Eg(e) {
  const t = new Array(10).fill(null).map((n, r) => {
    const o = r - 1, i = e * Math.pow(2.71828, o / 5), a = r > 1 ? Math.floor(i) : Math.ceil(i);
    return Math.floor(a / 2) * 2;
  });
  return t[1] = e, t.map((n) => {
    const r = n + 8;
    return {
      size: n,
      lineHeight: r / n
    };
  });
}
const _g = (e) => {
  const t = Eg(e), n = t.map((o) => o.size), r = t.map((o) => o.lineHeight);
  return {
    fontSizeSM: n[0],
    fontSize: n[1],
    fontSizeLG: n[2],
    fontSizeXL: n[3],
    fontSizeHeading1: n[6],
    fontSizeHeading2: n[5],
    fontSizeHeading3: n[4],
    fontSizeHeading4: n[3],
    fontSizeHeading5: n[2],
    lineHeight: r[1],
    lineHeightLG: r[2],
    lineHeightSM: r[0],
    lineHeightHeading1: r[6],
    lineHeightHeading2: r[5],
    lineHeightHeading3: r[4],
    lineHeightHeading4: r[3],
    lineHeightHeading5: r[2]
  };
};
function Ag(e) {
  const t = Object.keys(Pu).map((n) => {
    const r = kt(e[n]);
    return new Array(10).fill(1).reduce((o, i, a) => (o[`${n}-${a + 1}`] = r[a], o), {});
  }).reduce((n, r) => (n = m(m({}, n), r), n), {});
  return m(m(m(m(m(m(m({}, e), t), $g(e, {
    generateColorPalettes: Tg,
    generateNeutralColorPalettes: Pg
  })), _g(e.fontSize)), wg(e)), xg(e)), Og(e));
}
function Ho(e) {
  return e >= 0 && e <= 255;
}
function yr(e, t) {
  const {
    r: n,
    g: r,
    b: o,
    a: i
  } = new be(e).toRgb();
  if (i < 1)
    return e;
  const {
    r: a,
    g: l,
    b: s
  } = new be(t).toRgb();
  for (let c = 0.01; c <= 1; c += 0.01) {
    const f = Math.round((n - a * (1 - c)) / c), u = Math.round((r - l * (1 - c)) / c), d = Math.round((o - s * (1 - c)) / c);
    if (Ho(f) && Ho(u) && Ho(d))
      return new be({
        r: f,
        g: u,
        b: d,
        a: Math.round(c * 100) / 100
      }).toRgbString();
  }
  return new be({
    r: n,
    g: r,
    b: o,
    a: 1
  }).toRgbString();
}
var Ig = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
function Mg(e) {
  const {
    override: t
  } = e, n = Ig(e, ["override"]), r = m({}, t);
  Object.keys(go).forEach((p) => {
    delete r[p];
  });
  const o = m(m({}, n), r), i = 480, a = 576, l = 768, s = 992, c = 1200, f = 1600, u = 2e3;
  return m(m(m({}, o), {
    colorLink: o.colorInfoText,
    colorLinkHover: o.colorInfoHover,
    colorLinkActive: o.colorInfoActive,
    // ============== Background ============== //
    colorFillContent: o.colorFillSecondary,
    colorFillContentHover: o.colorFill,
    colorFillAlter: o.colorFillQuaternary,
    colorBgContainerDisabled: o.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: o.colorBgContainer,
    colorSplit: yr(o.colorBorderSecondary, o.colorBgContainer),
    // ============== Text ============== //
    colorTextPlaceholder: o.colorTextQuaternary,
    colorTextDisabled: o.colorTextQuaternary,
    colorTextHeading: o.colorText,
    colorTextLabel: o.colorTextSecondary,
    colorTextDescription: o.colorTextTertiary,
    colorTextLightSolid: o.colorWhite,
    colorHighlight: o.colorError,
    colorBgTextHover: o.colorFillSecondary,
    colorBgTextActive: o.colorFill,
    colorIcon: o.colorTextTertiary,
    colorIconHover: o.colorText,
    colorErrorOutline: yr(o.colorErrorBg, o.colorBgContainer),
    colorWarningOutline: yr(o.colorWarningBg, o.colorBgContainer),
    // Font
    fontSizeIcon: o.fontSizeSM,
    // Control
    lineWidth: o.lineWidth,
    controlOutlineWidth: o.lineWidth * 2,
    // Checkbox size and expand icon size
    controlInteractiveSize: o.controlHeight / 2,
    controlItemBgHover: o.colorFillTertiary,
    controlItemBgActive: o.colorPrimaryBg,
    controlItemBgActiveHover: o.colorPrimaryBgHover,
    controlItemBgActiveDisabled: o.colorFill,
    controlTmpOutline: o.colorFillQuaternary,
    controlOutline: yr(o.colorPrimaryBg, o.colorBgContainer),
    lineType: o.lineType,
    borderRadius: o.borderRadius,
    borderRadiusXS: o.borderRadiusXS,
    borderRadiusSM: o.borderRadiusSM,
    borderRadiusLG: o.borderRadiusLG,
    fontWeightStrong: 600,
    opacityLoading: 0.65,
    linkDecoration: "none",
    linkHoverDecoration: "none",
    linkFocusDecoration: "none",
    controlPaddingHorizontal: 12,
    controlPaddingHorizontalSM: 8,
    paddingXXS: o.sizeXXS,
    paddingXS: o.sizeXS,
    paddingSM: o.sizeSM,
    padding: o.size,
    paddingMD: o.sizeMD,
    paddingLG: o.sizeLG,
    paddingXL: o.sizeXL,
    paddingContentHorizontalLG: o.sizeLG,
    paddingContentVerticalLG: o.sizeMS,
    paddingContentHorizontal: o.sizeMS,
    paddingContentVertical: o.sizeSM,
    paddingContentHorizontalSM: o.size,
    paddingContentVerticalSM: o.sizeXS,
    marginXXS: o.sizeXXS,
    marginXS: o.sizeXS,
    marginSM: o.sizeSM,
    margin: o.size,
    marginMD: o.sizeMD,
    marginLG: o.sizeLG,
    marginXL: o.sizeXL,
    marginXXL: o.sizeXXL,
    boxShadow: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
    boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
    screenXS: i,
    screenXSMin: i,
    screenXSMax: a - 1,
    screenSM: a,
    screenSMMin: a,
    screenSMMax: l - 1,
    screenMD: l,
    screenMDMin: l,
    screenMDMax: s - 1,
    screenLG: s,
    screenLGMin: s,
    screenLGMax: c - 1,
    screenXL: c,
    screenXLMin: c,
    screenXLMax: f - 1,
    screenXXL: f,
    screenXXLMin: f,
    screenXXLMax: u - 1,
    screenXXXL: u,
    screenXXXLMin: u,
    // FIXME: component box-shadow, should be removed
    boxShadowPopoverArrow: "3px 3px 7px rgba(0, 0, 0, 0.1)",
    boxShadowCard: `
      0 1px 2px -2px ${new be("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new be("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new be("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
    boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"
  }), r);
}
const Fg = (e, t, n, r, o) => {
  const i = e / 2, a = 0, l = i, s = n * 1 / Math.sqrt(2), c = i - n * (1 - 1 / Math.sqrt(2)), f = i - t * (1 / Math.sqrt(2)), u = n * (Math.sqrt(2) - 1) + t * (1 / Math.sqrt(2)), d = 2 * i - f, p = u, h = 2 * i - s, g = c, x = 2 * i - a, v = l, $ = i * Math.sqrt(2) + n * (Math.sqrt(2) - 2), y = n * (Math.sqrt(2) - 1);
  return {
    pointerEvents: "none",
    width: e,
    height: e,
    overflow: "hidden",
    "&::after": {
      content: '""',
      position: "absolute",
      width: $,
      height: $,
      bottom: 0,
      insetInline: 0,
      margin: "auto",
      borderRadius: {
        _skip_check_: !0,
        value: `0 0 ${t}px 0`
      },
      transform: "translateY(50%) rotate(-135deg)",
      boxShadow: o,
      zIndex: 0,
      background: "transparent"
    },
    "&::before": {
      position: "absolute",
      bottom: 0,
      insetInlineStart: 0,
      width: e,
      height: e / 2,
      background: r,
      clipPath: {
        _multi_value_: !0,
        value: [`polygon(${y}px 100%, 50% ${y}px, ${2 * i - y}px 100%, ${y}px 100%)`, `path('M ${a} ${l} A ${n} ${n} 0 0 0 ${s} ${c} L ${f} ${u} A ${t} ${t} 0 0 1 ${d} ${p} L ${h} ${g} A ${n} ${n} 0 0 0 ${x} ${v} Z')`]
      },
      content: '""'
    }
  };
};
function Ng(e, t) {
  return Xr.reduce((n, r) => {
    const o = e[`${r}-1`], i = e[`${r}-3`], a = e[`${r}-6`], l = e[`${r}-7`];
    return m(m({}, n), t(r, {
      lightColor: o,
      lightBorderColor: i,
      darkColor: a,
      textColor: l
    }));
  }, {});
}
const I2 = {
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
}, On = (e) => ({
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  color: e.colorText,
  fontSize: e.fontSize,
  // font-variant: @font-variant-base;
  lineHeight: e.lineHeight,
  listStyle: "none",
  // font-feature-settings: @font-feature-settings-base;
  fontFamily: e.fontFamily
}), Rg = () => ({
  display: "inline-flex",
  alignItems: "center",
  color: "inherit",
  fontStyle: "normal",
  lineHeight: 0,
  textAlign: "center",
  textTransform: "none",
  // for SVG icon, see https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
  verticalAlign: "-0.125em",
  textRendering: "optimizeLegibility",
  "-webkit-font-smoothing": "antialiased",
  "-moz-osx-font-smoothing": "grayscale",
  "> *": {
    lineHeight: 1
  },
  svg: {
    display: "inline-block"
  }
}), jg = () => ({
  // https://github.com/ant-design/ant-design/issues/21301#issuecomment-583955229
  "&::before": {
    display: "table",
    content: '""'
  },
  "&::after": {
    // https://github.com/ant-design/ant-design/issues/21864
    display: "table",
    clear: "both",
    content: '""'
  }
}), Dg = (e) => ({
  a: {
    color: e.colorLink,
    textDecoration: e.linkDecoration,
    backgroundColor: "transparent",
    outline: "none",
    cursor: "pointer",
    transition: `color ${e.motionDurationSlow}`,
    "-webkit-text-decoration-skip": "objects",
    "&:hover": {
      color: e.colorLinkHover
    },
    "&:active": {
      color: e.colorLinkActive
    },
    "&:active,\n  &:hover": {
      textDecoration: e.linkHoverDecoration,
      outline: 0
    },
    // https://github.com/ant-design/ant-design/issues/22503
    "&:focus": {
      textDecoration: e.linkFocusDecoration,
      outline: 0
    },
    "&[disabled]": {
      color: e.colorTextDisabled,
      cursor: "not-allowed"
    }
  }
}), Bg = (e, t) => {
  const {
    fontFamily: n,
    fontSize: r
  } = e, o = `[class^="${t}"], [class*=" ${t}"]`;
  return {
    [o]: {
      fontFamily: n,
      fontSize: r,
      boxSizing: "border-box",
      "&::before, &::after": {
        boxSizing: "border-box"
      },
      [o]: {
        boxSizing: "border-box",
        "&::before, &::after": {
          boxSizing: "border-box"
        }
      }
    }
  };
}, Lg = (e) => ({
  outline: `${e.lineWidthBold}px solid ${e.colorPrimaryBorder}`,
  outlineOffset: 1,
  transition: "outline-offset 0s, outline 0s"
}), Eu = (e) => ({
  "&:focus-visible": m({}, Lg(e))
});
function Ze(e, t, n) {
  return (r) => {
    const o = T(() => r == null ? void 0 : r.value), [i, a, l] = Tn(), {
      getPrefixCls: s,
      iconPrefixCls: c
    } = so(), f = T(() => s()), u = T(() => ({
      theme: i.value,
      token: a.value,
      hashId: l.value,
      path: ["Shared", f.value]
    }));
    vi(u, () => [{
      // Link
      "&": Dg(a.value)
    }]);
    const d = T(() => ({
      theme: i.value,
      token: a.value,
      hashId: l.value,
      path: [e, o.value, c.value]
    }));
    return [vi(d, () => {
      const {
        token: p,
        flush: h
      } = zg(a.value), g = typeof n == "function" ? n(p) : n, x = m(m({}, g), a.value[e]), v = `.${o.value}`, $ = ke(p, {
        componentCls: v,
        prefixCls: o.value,
        iconCls: `.${c.value}`,
        antCls: `.${f.value}`
      }, x), y = t($, {
        hashId: l.value,
        prefixCls: o.value,
        rootPrefixCls: f.value,
        iconPrefixCls: c.value,
        overrideComponentToken: a.value[e]
      });
      return h(e, x), [Bg(a.value, o.value), y];
    }), l];
  };
}
const _u = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u";
let xi = !0;
function ke() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  if (!_u)
    return m({}, ...t);
  xi = !1;
  const r = {};
  return t.forEach((o) => {
    Object.keys(o).forEach((a) => {
      Object.defineProperty(r, a, {
        configurable: !0,
        enumerable: !0,
        get: () => o[a]
      });
    });
  }), xi = !0, r;
}
function Hg() {
}
function zg(e) {
  let t, n = e, r = Hg;
  return _u && (t = /* @__PURE__ */ new Set(), n = new Proxy(e, {
    get(o, i) {
      return xi && t.add(i), o[i];
    }
  }), r = (o, i) => {
    Array.from(t);
  }), {
    token: n,
    keys: t,
    flush: r
  };
}
const Vg = du(Ag), Au = {
  token: go,
  hashed: !0
}, Iu = Symbol("DesignTokenContext"), wi = L(), Wg = (e) => {
  me(Iu, e), Q(e, () => {
    wi.value = pe(e), tp(wi);
  }, {
    immediate: !0,
    deep: !0
  });
}, kg = V({
  props: {
    value: te()
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    return Wg(T(() => e.value)), () => {
      var r;
      return (r = n.default) === null || r === void 0 ? void 0 : r.call(n);
    };
  }
});
function Tn() {
  const e = ve(Iu, T(() => wi.value || Au)), t = T(() => `${rg}-${e.value.hashed || ""}`), n = T(() => e.value.theme || Vg), r = Am(n, T(() => [go, e.value.token]), T(() => ({
    salt: t.value,
    override: m({
      override: e.value.token
    }, e.value.components),
    formatToken: Mg
  })));
  return [n, T(() => r.value[0]), T(() => e.value.hashed ? r.value[1] : "")];
}
const Mu = V({
  compatConfig: {
    MODE: 3
  },
  setup() {
    const [, e] = Tn(), t = T(() => new be(e.value.colorBgBase).toHsl().l < 0.5 ? {
      opacity: 0.65
    } : {});
    return () => w("svg", {
      style: t.value,
      width: "184",
      height: "152",
      viewBox: "0 0 184 152",
      xmlns: "http://www.w3.org/2000/svg"
    }, [w("g", {
      fill: "none",
      "fill-rule": "evenodd"
    }, [w("g", {
      transform: "translate(24 31.67)"
    }, [w("ellipse", {
      "fill-opacity": ".8",
      fill: "#F5F5F7",
      cx: "67.797",
      cy: "106.89",
      rx: "67.797",
      ry: "12.668"
    }, null), w("path", {
      d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z",
      fill: "#AEB8C2"
    }, null), w("path", {
      d: "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
      fill: "url(#linearGradient-1)",
      transform: "translate(13.56)"
    }, null), w("path", {
      d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z",
      fill: "#F5F5F7"
    }, null), w("path", {
      d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z",
      fill: "#DCE0E6"
    }, null)]), w("path", {
      d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z",
      fill: "#DCE0E6"
    }, null), w("g", {
      transform: "translate(149.65 15.383)",
      fill: "#FFF"
    }, [w("ellipse", {
      cx: "20.654",
      cy: "3.167",
      rx: "2.849",
      ry: "2.815"
    }, null), w("path", {
      d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
    }, null)])])]);
  }
});
Mu.PRESENTED_IMAGE_DEFAULT = !0;
const Fu = V({
  compatConfig: {
    MODE: 3
  },
  setup() {
    const [, e] = Tn(), t = T(() => {
      const {
        colorFill: n,
        colorFillTertiary: r,
        colorFillQuaternary: o,
        colorBgContainer: i
      } = e.value;
      return {
        borderColor: new be(n).onBackground(i).toHexString(),
        shadowColor: new be(r).onBackground(i).toHexString(),
        contentColor: new be(o).onBackground(i).toHexString()
      };
    });
    return () => w("svg", {
      width: "64",
      height: "41",
      viewBox: "0 0 64 41",
      xmlns: "http://www.w3.org/2000/svg"
    }, [w("g", {
      transform: "translate(0 1)",
      fill: "none",
      "fill-rule": "evenodd"
    }, [w("ellipse", {
      fill: t.value.shadowColor,
      cx: "32",
      cy: "33",
      rx: "32",
      ry: "7"
    }, null), w("g", {
      "fill-rule": "nonzero",
      stroke: t.value.borderColor
    }, [w("path", {
      d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
    }, null), w("path", {
      d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
      fill: t.value.contentColor
    }, null)])])]);
  }
});
Fu.PRESENTED_IMAGE_SIMPLE = !0;
const qg = (e) => {
  const {
    componentCls: t,
    margin: n,
    marginXS: r,
    marginXL: o,
    fontSize: i,
    lineHeight: a
  } = e;
  return {
    [t]: {
      marginInline: r,
      fontSize: i,
      lineHeight: a,
      textAlign: "center",
      // 原来 &-image 没有父子结构，现在为了外层承担我们的hashId，改成父子结果
      [`${t}-image`]: {
        height: e.emptyImgHeight,
        marginBottom: r,
        opacity: e.opacityImage,
        img: {
          height: "100%"
        },
        svg: {
          height: "100%",
          margin: "auto"
        }
      },
      // 原来 &-footer 没有父子结构，现在为了外层承担我们的hashId，改成父子结果
      [`${t}-footer`]: {
        marginTop: n
      },
      "&-normal": {
        marginBlock: o,
        color: e.colorTextDisabled,
        [`${t}-image`]: {
          height: e.emptyImgHeightMD
        }
      },
      "&-small": {
        marginBlock: r,
        color: e.colorTextDisabled,
        [`${t}-image`]: {
          height: e.emptyImgHeightSM
        }
      }
    }
  };
}, Gg = Ze("Empty", (e) => {
  const {
    componentCls: t,
    controlHeightLG: n
  } = e, r = ke(e, {
    emptyImgCls: `${t}-img`,
    emptyImgHeight: n * 2.5,
    emptyImgHeightMD: n,
    emptyImgHeightSM: n * 0.875
  });
  return [qg(r)];
});
var Ug = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const Nu = w(Mu, null, null), Ru = w(Fu, null, null), Xg = () => ({
  prefixCls: String,
  imageStyle: te(),
  image: Wr(),
  description: Wr()
}), da = V({
  name: "AEmpty",
  compatConfig: {
    MODE: 3
  },
  inheritAttrs: !1,
  props: Xg(),
  setup(e, t) {
    let {
      slots: n = {},
      attrs: r
    } = t;
    const {
      direction: o,
      prefixCls: i
    } = Pe("empty", e), [a, l] = Gg(i);
    return () => {
      var s, c;
      const f = i.value, u = m(m({}, e), r), {
        image: d = ((s = n.image) === null || s === void 0 ? void 0 : s.call(n)) || Nu,
        description: p = ((c = n.description) === null || c === void 0 ? void 0 : c.call(n)) || void 0,
        imageStyle: h,
        class: g = ""
      } = u, x = Ug(u, ["image", "description", "imageStyle", "class"]);
      return a(w(tu, {
        componentName: "Empty",
        children: (v) => {
          const $ = typeof p < "u" ? p : v.description, y = typeof $ == "string" ? $ : "empty";
          let b = null;
          return typeof d == "string" ? b = w("img", {
            alt: y,
            src: d
          }, null) : b = d, w("div", j({
            class: Y(f, g, l.value, {
              [`${f}-normal`]: d === Ru,
              [`${f}-rtl`]: o.value === "rtl"
            })
          }, x), [w("div", {
            class: `${f}-image`,
            style: h
          }, [b]), $ && w("p", {
            class: `${f}-description`
          }, [$]), n.default && w("div", {
            class: `${f}-footer`
          }, [Xt(n.default())])]);
        }
      }, null));
    };
  }
});
da.PRESENTED_IMAGE_DEFAULT = Nu;
da.PRESENTED_IMAGE_SIMPLE = Ru;
const An = lo(da), ju = (e) => {
  const {
    prefixCls: t
  } = Pe("empty", e);
  return ((r) => {
    switch (r) {
      case "Table":
      case "List":
        return w(An, {
          image: An.PRESENTED_IMAGE_SIMPLE
        }, null);
      case "Select":
      case "TreeSelect":
      case "Cascader":
      case "Transfer":
      case "Mentions":
        return w(An, {
          image: An.PRESENTED_IMAGE_SIMPLE,
          class: `${t.value}-small`
        }, null);
      default:
        return w(An, null, null);
    }
  })(e.componentName);
};
function Kg(e) {
  return w(ju, {
    componentName: e
  }, null);
}
const Du = Symbol("SizeContextKey"), Bu = () => ve(Du, X(void 0)), Lu = (e) => {
  const t = Bu();
  return me(Du, T(() => e.value || t.value)), e;
}, Pe = (e, t) => {
  const n = Bu(), r = la(), o = ve(aa, m(m({}, Qc), {
    renderEmpty: (C) => oi(ju, {
      componentName: C
    })
  })), i = T(() => o.getPrefixCls(e, t.prefixCls)), a = T(() => {
    var C, E;
    return (C = t.direction) !== null && C !== void 0 ? C : (E = o.direction) === null || E === void 0 ? void 0 : E.value;
  }), l = T(() => {
    var C;
    return (C = t.iconPrefixCls) !== null && C !== void 0 ? C : o.iconPrefixCls.value;
  }), s = T(() => o.getPrefixCls()), c = T(() => {
    var C;
    return (C = o.autoInsertSpaceInButton) === null || C === void 0 ? void 0 : C.value;
  }), f = o.renderEmpty, u = o.space, d = o.pageHeader, p = o.form, h = T(() => {
    var C, E;
    return (C = t.getTargetContainer) !== null && C !== void 0 ? C : (E = o.getTargetContainer) === null || E === void 0 ? void 0 : E.value;
  }), g = T(() => {
    var C, E, A;
    return (E = (C = t.getContainer) !== null && C !== void 0 ? C : t.getPopupContainer) !== null && E !== void 0 ? E : (A = o.getPopupContainer) === null || A === void 0 ? void 0 : A.value;
  }), x = T(() => {
    var C, E;
    return (C = t.dropdownMatchSelectWidth) !== null && C !== void 0 ? C : (E = o.dropdownMatchSelectWidth) === null || E === void 0 ? void 0 : E.value;
  }), v = T(() => {
    var C;
    return (t.virtual === void 0 ? ((C = o.virtual) === null || C === void 0 ? void 0 : C.value) !== !1 : t.virtual !== !1) && x.value !== !1;
  }), $ = T(() => t.size || n.value), y = T(() => {
    var C, E, A;
    return (C = t.autocomplete) !== null && C !== void 0 ? C : (A = (E = o.input) === null || E === void 0 ? void 0 : E.value) === null || A === void 0 ? void 0 : A.autocomplete;
  }), b = T(() => {
    var C;
    return (C = t.disabled) !== null && C !== void 0 ? C : r.value;
  }), S = T(() => {
    var C;
    return (C = t.csp) !== null && C !== void 0 ? C : o.csp;
  }), O = T(() => {
    var C, E;
    return (C = t.wave) !== null && C !== void 0 ? C : (E = o.wave) === null || E === void 0 ? void 0 : E.value;
  });
  return {
    configProvider: o,
    prefixCls: i,
    direction: a,
    size: $,
    getTargetContainer: h,
    getPopupContainer: g,
    space: u,
    pageHeader: d,
    form: p,
    autoInsertSpaceInButton: c,
    renderEmpty: f,
    virtual: v,
    dropdownMatchSelectWidth: x,
    rootPrefixCls: s,
    getPrefixCls: o.getPrefixCls,
    autocomplete: y,
    csp: S,
    iconPrefixCls: l,
    disabled: b,
    select: o.select,
    wave: O
  };
};
function Hu(e, t) {
  const n = m({}, e);
  for (let r = 0; r < t.length; r += 1) {
    const o = t[r];
    delete n[o];
  }
  return n;
}
function El(e) {
  return typeof e == "object" && e != null && e.nodeType === 1;
}
function _l(e, t) {
  return (!t || e !== "hidden") && e !== "visible" && e !== "clip";
}
function zo(e, t) {
  if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
    var n = getComputedStyle(e, null);
    return _l(n.overflowY, t) || _l(n.overflowX, t) || function(r) {
      var o = function(i) {
        if (!i.ownerDocument || !i.ownerDocument.defaultView)
          return null;
        try {
          return i.ownerDocument.defaultView.frameElement;
        } catch {
          return null;
        }
      }(r);
      return !!o && (o.clientHeight < r.scrollHeight || o.clientWidth < r.scrollWidth);
    }(e);
  }
  return !1;
}
function br(e, t, n, r, o, i, a, l) {
  return i < e && a > t || i > e && a < t ? 0 : i <= e && l <= n || a >= t && l >= n ? i - e - r : a > t && l < n || i < e && l > n ? a - t + o : 0;
}
var Al = function(e, t) {
  var n = window, r = t.scrollMode, o = t.block, i = t.inline, a = t.boundary, l = t.skipOverflowHiddenElements, s = typeof a == "function" ? a : function(Qd) {
    return Qd !== a;
  };
  if (!El(e))
    throw new TypeError("Invalid target");
  for (var c, f, u = document.scrollingElement || document.documentElement, d = [], p = e; El(p) && s(p); ) {
    if ((p = (f = (c = p).parentElement) == null ? c.getRootNode().host || null : f) === u) {
      d.push(p);
      break;
    }
    p != null && p === document.body && zo(p) && !zo(document.documentElement) || p != null && zo(p, l) && d.push(p);
  }
  for (var h = n.visualViewport ? n.visualViewport.width : innerWidth, g = n.visualViewport ? n.visualViewport.height : innerHeight, x = window.scrollX || pageXOffset, v = window.scrollY || pageYOffset, $ = e.getBoundingClientRect(), y = $.height, b = $.width, S = $.top, O = $.right, C = $.bottom, E = $.left, A = o === "start" || o === "nearest" ? S : o === "end" ? C : S + y / 2, _ = i === "center" ? E + b / 2 : i === "end" ? O : E, M = [], R = 0; R < d.length; R++) {
    var D = d[R], z = D.getBoundingClientRect(), P = z.height, F = z.width, I = z.top, N = z.right, k = z.bottom, G = z.left;
    if (r === "if-needed" && S >= 0 && E >= 0 && C <= g && O <= h && S >= I && C <= k && E >= G && O <= N)
      return M;
    var Z = getComputedStyle(D), oe = parseInt(Z.borderLeftWidth, 10), ae = parseInt(Z.borderTopWidth, 10), ce = parseInt(Z.borderRightWidth, 10), B = parseInt(Z.borderBottomWidth, 10), U = 0, J = 0, ee = "offsetWidth" in D ? D.offsetWidth - D.clientWidth - oe - ce : 0, ne = "offsetHeight" in D ? D.offsetHeight - D.clientHeight - ae - B : 0, he = "offsetWidth" in D ? D.offsetWidth === 0 ? 0 : F / D.offsetWidth : 0, et = "offsetHeight" in D ? D.offsetHeight === 0 ? 0 : P / D.offsetHeight : 0;
    if (u === D)
      U = o === "start" ? A : o === "end" ? A - g : o === "nearest" ? br(v, v + g, g, ae, B, v + A, v + A + y, y) : A - g / 2, J = i === "start" ? _ : i === "center" ? _ - h / 2 : i === "end" ? _ - h : br(x, x + h, h, oe, ce, x + _, x + _ + b, b), U = Math.max(0, U + v), J = Math.max(0, J + x);
    else {
      U = o === "start" ? A - I - ae : o === "end" ? A - k + B + ne : o === "nearest" ? br(I, k, P, ae, B + ne, A, A + y, y) : A - (I + P / 2) + ne / 2, J = i === "start" ? _ - G - oe : i === "center" ? _ - (G + F / 2) + ee / 2 : i === "end" ? _ - N + ce + ee : br(G, N, F, oe, ce + ee, _, _ + b, b);
      var tt = D.scrollLeft, Pn = D.scrollTop;
      A += Pn - (U = Math.max(0, Math.min(Pn + U / et, D.scrollHeight - P / et + ne))), _ += tt - (J = Math.max(0, Math.min(tt + J / he, D.scrollWidth - F / he + ee)));
    }
    M.push({ el: D, top: U, left: J });
  }
  return M;
};
function zu(e) {
  return e === Object(e) && Object.keys(e).length !== 0;
}
function Yg(e, t) {
  t === void 0 && (t = "auto");
  var n = "scrollBehavior" in document.body.style;
  e.forEach(function(r) {
    var o = r.el, i = r.top, a = r.left;
    o.scroll && n ? o.scroll({
      top: i,
      left: a,
      behavior: t
    }) : (o.scrollTop = i, o.scrollLeft = a);
  });
}
function Qg(e) {
  return e === !1 ? {
    block: "end",
    inline: "nearest"
  } : zu(e) ? e : {
    block: "start",
    inline: "nearest"
  };
}
function Zg(e, t) {
  var n = e.isConnected || e.ownerDocument.documentElement.contains(e);
  if (zu(t) && typeof t.behavior == "function")
    return t.behavior(n ? Al(e, t) : []);
  if (n) {
    var r = Qg(t);
    return Yg(Al(e, r), r.behavior);
  }
}
function Jg(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Vu(e, t, n) {
  return n && Jg(e, n), e;
}
function Nr() {
  return (Nr = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
function Wu(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
}
function ku(e, t) {
  if (e == null)
    return {};
  var n, r, o = {}, i = Object.keys(e);
  for (r = 0; r < i.length; r++)
    t.indexOf(n = i[r]) >= 0 || (o[n] = e[n]);
  return o;
}
function Il(e) {
  return ((t = e) != null && typeof t == "object" && Array.isArray(t) === !1) == 1 && Object.prototype.toString.call(e) === "[object Object]";
  var t;
}
var qu = Object.prototype, Gu = qu.toString, eh = qu.hasOwnProperty, Uu = /^\s*function (\w+)/;
function Ml(e) {
  var t, n = (t = e == null ? void 0 : e.type) !== null && t !== void 0 ? t : e;
  if (n) {
    var r = n.toString().match(Uu);
    return r ? r[1] : "";
  }
  return "";
}
var qt = function(e) {
  var t, n;
  return Il(e) !== !1 && typeof (t = e.constructor) == "function" && Il(n = t.prototype) !== !1 && n.hasOwnProperty("isPrototypeOf") !== !1;
}, Xu = function(e) {
  return e;
}, xe = Xu;
if (process.env.NODE_ENV !== "production") {
  var th = typeof console < "u";
  xe = th ? function(e) {
    console.warn("[VueTypes warn]: " + e);
  } : Xu;
}
var Kn = function(e, t) {
  return eh.call(e, t);
}, nh = Number.isInteger || function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}, yn = Array.isArray || function(e) {
  return Gu.call(e) === "[object Array]";
}, bn = function(e) {
  return Gu.call(e) === "[object Function]";
}, Kr = function(e) {
  return qt(e) && Kn(e, "_vueTypes_name");
}, Ku = function(e) {
  return qt(e) && (Kn(e, "type") || ["_vueTypes_name", "validator", "default", "required"].some(function(t) {
    return Kn(e, t);
  }));
};
function pa(e, t) {
  return Object.defineProperty(e.bind(t), "__original", { value: e });
}
function Kt(e, t, n) {
  var r;
  n === void 0 && (n = !1);
  var o = !0, i = "";
  r = qt(e) ? e : { type: e };
  var a = Kr(r) ? r._vueTypes_name + " - " : "";
  if (Ku(r) && r.type !== null) {
    if (r.type === void 0 || r.type === !0 || !r.required && t === void 0)
      return o;
    yn(r.type) ? (o = r.type.some(function(u) {
      return Kt(u, t, !0) === !0;
    }), i = r.type.map(function(u) {
      return Ml(u);
    }).join(" or ")) : o = (i = Ml(r)) === "Array" ? yn(t) : i === "Object" ? qt(t) : i === "String" || i === "Number" || i === "Boolean" || i === "Function" ? function(u) {
      if (u == null)
        return "";
      var d = u.constructor.toString().match(Uu);
      return d ? d[1] : "";
    }(t) === i : t instanceof r.type;
  }
  if (!o) {
    var l = a + 'value "' + t + '" should be of type "' + i + '"';
    return n === !1 ? (xe(l), !1) : l;
  }
  if (Kn(r, "validator") && bn(r.validator)) {
    var s = xe, c = [];
    if (xe = function(u) {
      c.push(u);
    }, o = r.validator(t), xe = s, !o) {
      var f = (c.length > 1 ? "* " : "") + c.join(`
* `);
      return c.length = 0, n === !1 ? (xe(f), o) : f;
    }
  }
  return o;
}
function Ne(e, t) {
  var n = Object.defineProperties(t, { _vueTypes_name: { value: e, writable: !0 }, isRequired: { get: function() {
    return this.required = !0, this;
  } }, def: { value: function(o) {
    return o !== void 0 || this.default ? bn(o) || Kt(this, o, !0) === !0 ? (this.default = yn(o) ? function() {
      return [].concat(o);
    } : qt(o) ? function() {
      return Object.assign({}, o);
    } : o, this) : (xe(this._vueTypes_name + ' - invalid default value: "' + o + '"'), this) : this;
  } } }), r = n.validator;
  return bn(r) && (n.validator = pa(r, n)), n;
}
function at(e, t) {
  var n = Ne(e, t);
  return Object.defineProperty(n, "validate", { value: function(r) {
    return bn(this.validator) && xe(this._vueTypes_name + ` - calling .validate() will overwrite the current custom validator function. Validator info:
` + JSON.stringify(this)), this.validator = pa(r, this), this;
  } });
}
function Fl(e, t, n) {
  var r, o, i = (r = t, o = {}, Object.getOwnPropertyNames(r).forEach(function(u) {
    o[u] = Object.getOwnPropertyDescriptor(r, u);
  }), Object.defineProperties({}, o));
  if (i._vueTypes_name = e, !qt(n))
    return i;
  var a, l, s = n.validator, c = ku(n, ["validator"]);
  if (bn(s)) {
    var f = i.validator;
    f && (f = (l = (a = f).__original) !== null && l !== void 0 ? l : a), i.validator = pa(f ? function(u) {
      return f.call(this, u) && s.call(this, u);
    } : s, i);
  }
  return Object.assign(i, c);
}
function ho(e) {
  return e.replace(/^(?!\s*$)/gm, "  ");
}
var rh = function() {
  return at("any", {});
}, oh = function() {
  return at("function", { type: Function });
}, ih = function() {
  return at("boolean", { type: Boolean });
}, ah = function() {
  return at("string", { type: String });
}, lh = function() {
  return at("number", { type: Number });
}, sh = function() {
  return at("array", { type: Array });
}, ch = function() {
  return at("object", { type: Object });
}, uh = function() {
  return Ne("integer", { type: Number, validator: function(e) {
    return nh(e);
  } });
}, fh = function() {
  return Ne("symbol", { validator: function(e) {
    return typeof e == "symbol";
  } });
};
function dh(e, t) {
  if (t === void 0 && (t = "custom validation failed"), typeof e != "function")
    throw new TypeError("[VueTypes error]: You must provide a function as argument");
  return Ne(e.name || "<<anonymous function>>", { validator: function(n) {
    var r = e(n);
    return r || xe(this._vueTypes_name + " - " + t), r;
  } });
}
function ph(e) {
  if (!yn(e))
    throw new TypeError("[VueTypes error]: You must provide an array as argument.");
  var t = 'oneOf - value should be one of "' + e.join('", "') + '".', n = e.reduce(function(r, o) {
    if (o != null) {
      var i = o.constructor;
      r.indexOf(i) === -1 && r.push(i);
    }
    return r;
  }, []);
  return Ne("oneOf", { type: n.length > 0 ? n : void 0, validator: function(r) {
    var o = e.indexOf(r) !== -1;
    return o || xe(t), o;
  } });
}
function mh(e) {
  if (!yn(e))
    throw new TypeError("[VueTypes error]: You must provide an array as argument");
  for (var t = !1, n = [], r = 0; r < e.length; r += 1) {
    var o = e[r];
    if (Ku(o)) {
      if (Kr(o) && o._vueTypes_name === "oneOf") {
        n = n.concat(o.type);
        continue;
      }
      if (bn(o.validator) && (t = !0), o.type !== !0 && o.type) {
        n = n.concat(o.type);
        continue;
      }
    }
    n.push(o);
  }
  return n = n.filter(function(i, a) {
    return n.indexOf(i) === a;
  }), Ne("oneOfType", t ? { type: n, validator: function(i) {
    var a = [], l = e.some(function(s) {
      var c = Kt(Kr(s) && s._vueTypes_name === "oneOf" ? s.type || null : s, i, !0);
      return typeof c == "string" && a.push(c), c === !0;
    });
    return l || xe("oneOfType - provided value does not match any of the " + a.length + ` passed-in validators:
` + ho(a.join(`
`))), l;
  } } : { type: n });
}
function gh(e) {
  return Ne("arrayOf", { type: Array, validator: function(t) {
    var n, r = t.every(function(o) {
      return (n = Kt(e, o, !0)) === !0;
    });
    return r || xe(`arrayOf - value validation error:
` + ho(n)), r;
  } });
}
function hh(e) {
  return Ne("instanceOf", { type: e });
}
function vh(e) {
  return Ne("objectOf", { type: Object, validator: function(t) {
    var n, r = Object.keys(t).every(function(o) {
      return (n = Kt(e, t[o], !0)) === !0;
    });
    return r || xe(`objectOf - value validation error:
` + ho(n)), r;
  } });
}
function yh(e) {
  var t = Object.keys(e), n = t.filter(function(o) {
    var i;
    return !!(!((i = e[o]) === null || i === void 0) && i.required);
  }), r = Ne("shape", { type: Object, validator: function(o) {
    var i = this;
    if (!qt(o))
      return !1;
    var a = Object.keys(o);
    if (n.length > 0 && n.some(function(s) {
      return a.indexOf(s) === -1;
    })) {
      var l = n.filter(function(s) {
        return a.indexOf(s) === -1;
      });
      return xe(l.length === 1 ? 'shape - required property "' + l[0] + '" is not defined.' : 'shape - required properties "' + l.join('", "') + '" are not defined.'), !1;
    }
    return a.every(function(s) {
      if (t.indexOf(s) === -1)
        return i._vueTypes_isLoose === !0 || (xe('shape - shape definition does not include a "' + s + '" property. Allowed keys: "' + t.join('", "') + '".'), !1);
      var c = Kt(e[s], o[s], !0);
      return typeof c == "string" && xe('shape - "' + s + `" property validation error:
 ` + ho(c)), c === !0;
    });
  } });
  return Object.defineProperty(r, "_vueTypes_isLoose", { writable: !0, value: !1 }), Object.defineProperty(r, "loose", { get: function() {
    return this._vueTypes_isLoose = !0, this;
  } }), r;
}
var nt = function() {
  function e() {
  }
  return e.extend = function(t) {
    var n = this;
    if (yn(t))
      return t.forEach(function(u) {
        return n.extend(u);
      }), this;
    var r = t.name, o = t.validate, i = o !== void 0 && o, a = t.getter, l = a !== void 0 && a, s = ku(t, ["name", "validate", "getter"]);
    if (Kn(this, r))
      throw new TypeError('[VueTypes error]: Type "' + r + '" already defined');
    var c, f = s.type;
    return Kr(f) ? (delete s.type, Object.defineProperty(this, r, l ? { get: function() {
      return Fl(r, f, s);
    } } : { value: function() {
      var u, d = Fl(r, f, s);
      return d.validator && (d.validator = (u = d.validator).bind.apply(u, [d].concat([].slice.call(arguments)))), d;
    } })) : (c = l ? { get: function() {
      var u = Object.assign({}, s);
      return i ? at(r, u) : Ne(r, u);
    }, enumerable: !0 } : { value: function() {
      var u, d, p = Object.assign({}, s);
      return u = i ? at(r, p) : Ne(r, p), p.validator && (u.validator = (d = p.validator).bind.apply(d, [u].concat([].slice.call(arguments)))), u;
    }, enumerable: !0 }, Object.defineProperty(this, r, c));
  }, Vu(e, null, [{ key: "any", get: function() {
    return rh();
  } }, { key: "func", get: function() {
    return oh().def(this.defaults.func);
  } }, { key: "bool", get: function() {
    return ih().def(this.defaults.bool);
  } }, { key: "string", get: function() {
    return ah().def(this.defaults.string);
  } }, { key: "number", get: function() {
    return lh().def(this.defaults.number);
  } }, { key: "array", get: function() {
    return sh().def(this.defaults.array);
  } }, { key: "object", get: function() {
    return ch().def(this.defaults.object);
  } }, { key: "integer", get: function() {
    return uh().def(this.defaults.integer);
  } }, { key: "symbol", get: function() {
    return fh();
  } }]), e;
}();
function Yu(e) {
  var t;
  return e === void 0 && (e = { func: function() {
  }, bool: !0, string: "", number: 0, array: function() {
    return [];
  }, object: function() {
    return {};
  }, integer: 0 }), (t = function(n) {
    function r() {
      return n.apply(this, arguments) || this;
    }
    return Wu(r, n), Vu(r, null, [{ key: "sensibleDefaults", get: function() {
      return Nr({}, this.defaults);
    }, set: function(o) {
      this.defaults = o !== !1 ? Nr({}, o !== !0 ? o : e) : {};
    } }]), r;
  }(nt)).defaults = Nr({}, e), t;
}
nt.defaults = {}, nt.custom = dh, nt.oneOf = ph, nt.instanceOf = hh, nt.oneOfType = mh, nt.arrayOf = gh, nt.objectOf = vh, nt.shape = yh, nt.utils = { validate: function(e, t) {
  return Kt(t, e, !0) === !0;
}, toType: function(e, t, n) {
  return n === void 0 && (n = !1), n ? at(e, t) : Ne(e, t);
} };
(function(e) {
  function t() {
    return e.apply(this, arguments) || this;
  }
  return Wu(t, e), t;
})(Yu());
const H = Yu({
  func: void 0,
  bool: void 0,
  string: void 0,
  number: void 0,
  array: void 0,
  object: void 0,
  integer: void 0
});
H.extend([{
  name: "looseBool",
  getter: !0,
  type: Boolean,
  default: void 0
}, {
  name: "style",
  getter: !0,
  type: [String, Object],
  default: void 0
}, {
  name: "VueNode",
  getter: !0,
  type: null
}]);
function M2(e) {
  return e.default = void 0, e;
}
const ma = (e, t, n) => {
  ca(e, `[ant-design-vue: ${t}] ${n}`);
};
function bh() {
  return "";
}
function Ch(e) {
  return e ? e.ownerDocument : window.document;
}
function Qu() {
}
const xh = () => ({
  action: H.oneOfType([H.string, H.arrayOf(H.string)]).def([]),
  showAction: H.any.def([]),
  hideAction: H.any.def([]),
  getPopupClassNameFromAlign: H.any.def(bh),
  onPopupVisibleChange: Function,
  afterPopupVisibleChange: H.func.def(Qu),
  popup: H.any,
  arrow: H.bool.def(!0),
  popupStyle: {
    type: Object,
    default: void 0
  },
  prefixCls: H.string.def("rc-trigger-popup"),
  popupClassName: H.string.def(""),
  popupPlacement: String,
  builtinPlacements: H.object,
  popupTransitionName: String,
  popupAnimation: H.any,
  mouseEnterDelay: H.number.def(0),
  mouseLeaveDelay: H.number.def(0.1),
  zIndex: Number,
  focusDelay: H.number.def(0),
  blurDelay: H.number.def(0.15),
  getPopupContainer: Function,
  getDocument: H.func.def(Ch),
  forceRender: {
    type: Boolean,
    default: void 0
  },
  destroyPopupOnHide: {
    type: Boolean,
    default: !1
  },
  mask: {
    type: Boolean,
    default: !1
  },
  maskClosable: {
    type: Boolean,
    default: !0
  },
  // onPopupAlign: PropTypes.func.def(noop),
  popupAlign: H.object.def(() => ({})),
  popupVisible: {
    type: Boolean,
    default: void 0
  },
  defaultPopupVisible: {
    type: Boolean,
    default: !1
  },
  maskTransitionName: String,
  maskAnimation: String,
  stretch: String,
  alignPoint: {
    type: Boolean,
    default: void 0
  },
  autoDestroy: {
    type: Boolean,
    default: !1
  },
  mobile: Object,
  getTriggerDOMNode: Function
}), ga = {
  visible: Boolean,
  prefixCls: String,
  zIndex: Number,
  destroyPopupOnHide: Boolean,
  forceRender: Boolean,
  arrow: {
    type: Boolean,
    default: !0
  },
  // Legacy Motion
  animation: [String, Object],
  transitionName: String,
  // Measure
  stretch: {
    type: String
  },
  // Align
  align: {
    type: Object
  },
  point: {
    type: Object
  },
  getRootDomNode: {
    type: Function
  },
  getClassNameFromAlign: {
    type: Function
  },
  onAlign: {
    type: Function
  },
  onMouseenter: {
    type: Function
  },
  onMouseleave: {
    type: Function
  },
  onMousedown: {
    type: Function
  },
  onTouchstart: {
    type: Function
  }
}, wh = m(m({}, ga), {
  mobile: {
    type: Object
  }
}), $h = m(m({}, ga), {
  mask: Boolean,
  mobile: {
    type: Object
  },
  maskAnimation: String,
  maskTransitionName: String
});
function ha(e) {
  let {
    prefixCls: t,
    animation: n,
    transitionName: r
  } = e;
  return n ? {
    name: `${t}-${n}`
  } : r ? {
    name: r
  } : {};
}
function Zu(e) {
  const {
    prefixCls: t,
    visible: n,
    zIndex: r,
    mask: o,
    maskAnimation: i,
    maskTransitionName: a
  } = e;
  if (!o)
    return null;
  let l = {};
  return (a || i) && (l = ha({
    prefixCls: t,
    transitionName: a,
    animation: i
  })), w(Ot, j({
    appear: !0
  }, l), {
    default: () => [wt(w("div", {
      style: {
        zIndex: r
      },
      class: `${t}-mask`
    }, null), [[np("if"), n]])]
  });
}
Zu.displayName = "Mask";
const Sh = V({
  compatConfig: {
    MODE: 3
  },
  name: "MobilePopupInner",
  inheritAttrs: !1,
  props: wh,
  emits: ["mouseenter", "mouseleave", "mousedown", "touchstart", "align"],
  setup(e, t) {
    let {
      expose: n,
      slots: r
    } = t;
    const o = X();
    return n({
      forceAlign: () => {
      },
      getElement: () => o.value
    }), () => {
      var i;
      const {
        zIndex: a,
        visible: l,
        prefixCls: s,
        mobile: {
          popupClassName: c,
          popupStyle: f,
          popupMotion: u = {},
          popupRender: d
        } = {}
      } = e, p = m({
        zIndex: a
      }, f);
      let h = Ue((i = r.default) === null || i === void 0 ? void 0 : i.call(r));
      h.length > 1 && (h = w("div", {
        class: `${s}-content`
      }, [h])), d && (h = d(h));
      const g = Y(s, c);
      return w(Ot, j({
        ref: o
      }, u), {
        default: () => [l ? w("div", {
          class: g,
          style: p
        }, [h]) : null]
      });
    };
  }
});
var Oh = function(e, t, n, r) {
  function o(i) {
    return i instanceof n ? i : new n(function(a) {
      a(i);
    });
  }
  return new (n || (n = Promise))(function(i, a) {
    function l(f) {
      try {
        c(r.next(f));
      } catch (u) {
        a(u);
      }
    }
    function s(f) {
      try {
        c(r.throw(f));
      } catch (u) {
        a(u);
      }
    }
    function c(f) {
      f.done ? i(f.value) : o(f.value).then(l, s);
    }
    c((r = r.apply(e, t || [])).next());
  });
};
const Nl = ["measure", "align", null, "motion"], Th = (e, t) => {
  const n = L(null), r = L(), o = L(!1);
  function i(s) {
    o.value || (n.value = s);
  }
  function a() {
    Me.cancel(r.value);
  }
  function l(s) {
    a(), r.value = Me(() => {
      let c = n.value;
      switch (n.value) {
        case "align":
          c = "motion";
          break;
        case "motion":
          c = "stable";
          break;
      }
      i(c), s == null || s();
    });
  }
  return Q(e, () => {
    i("measure");
  }, {
    immediate: !0,
    flush: "post"
  }), we(() => {
    Q(n, () => {
      switch (n.value) {
        case "measure":
          t();
          break;
      }
      n.value && (r.value = Me(() => Oh(void 0, void 0, void 0, function* () {
        const s = Nl.indexOf(n.value), c = Nl[s + 1];
        c && s !== -1 && i(c);
      })));
    }, {
      immediate: !0,
      flush: "post"
    });
  }), We(() => {
    o.value = !0, a();
  }), [n, l];
}, Ph = (e) => {
  const t = L({
    width: 0,
    height: 0
  });
  function n(o) {
    t.value = {
      width: o.offsetWidth,
      height: o.offsetHeight
    };
  }
  return [T(() => {
    const o = {};
    if (e.value) {
      const {
        width: i,
        height: a
      } = t.value;
      e.value.indexOf("height") !== -1 && a ? o.height = `${a}px` : e.value.indexOf("minHeight") !== -1 && a && (o.minHeight = `${a}px`), e.value.indexOf("width") !== -1 && i ? o.width = `${i}px` : e.value.indexOf("minWidth") !== -1 && i && (o.minWidth = `${i}px`);
    }
    return o;
  }), n];
};
function Rl(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function jl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Rl(Object(n), !0).forEach(function(r) {
      Eh(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Rl(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function $i(e) {
  "@babel/helpers - typeof";
  return $i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $i(e);
}
function Eh(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
var In, _h = {
  Webkit: "-webkit-",
  Moz: "-moz-",
  // IE did it wrong again ...
  ms: "-ms-",
  O: "-o-"
};
function Yr() {
  if (In !== void 0)
    return In;
  In = "";
  var e = document.createElement("p").style, t = "Transform";
  for (var n in _h)
    n + t in e && (In = n);
  return In;
}
function Ju() {
  return Yr() ? "".concat(Yr(), "TransitionProperty") : "transitionProperty";
}
function vo() {
  return Yr() ? "".concat(Yr(), "Transform") : "transform";
}
function Dl(e, t) {
  var n = Ju();
  n && (e.style[n] = t, n !== "transitionProperty" && (e.style.transitionProperty = t));
}
function Vo(e, t) {
  var n = vo();
  n && (e.style[n] = t, n !== "transform" && (e.style.transform = t));
}
function Ah(e) {
  return e.style.transitionProperty || e.style[Ju()];
}
function Ih(e) {
  var t = window.getComputedStyle(e, null), n = t.getPropertyValue("transform") || t.getPropertyValue(vo());
  if (n && n !== "none") {
    var r = n.replace(/[^0-9\-.,]/g, "").split(",");
    return {
      x: parseFloat(r[12] || r[4], 0),
      y: parseFloat(r[13] || r[5], 0)
    };
  }
  return {
    x: 0,
    y: 0
  };
}
var Mh = /matrix\((.*)\)/, Fh = /matrix3d\((.*)\)/;
function Nh(e, t) {
  var n = window.getComputedStyle(e, null), r = n.getPropertyValue("transform") || n.getPropertyValue(vo());
  if (r && r !== "none") {
    var o, i = r.match(Mh);
    if (i)
      i = i[1], o = i.split(",").map(function(l) {
        return parseFloat(l, 10);
      }), o[4] = t.x, o[5] = t.y, Vo(e, "matrix(".concat(o.join(","), ")"));
    else {
      var a = r.match(Fh)[1];
      o = a.split(",").map(function(l) {
        return parseFloat(l, 10);
      }), o[12] = t.x, o[13] = t.y, Vo(e, "matrix3d(".concat(o.join(","), ")"));
    }
  } else
    Vo(e, "translateX(".concat(t.x, "px) translateY(").concat(t.y, "px) translateZ(0)"));
}
var Rh = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source, ir;
function Bl(e) {
  var t = e.style.display;
  e.style.display = "none", e.offsetHeight, e.style.display = t;
}
function dn(e, t, n) {
  var r = n;
  if ($i(t) === "object") {
    for (var o in t)
      t.hasOwnProperty(o) && dn(e, o, t[o]);
    return;
  }
  if (typeof r < "u") {
    typeof r == "number" && (r = "".concat(r, "px")), e.style[t] = r;
    return;
  }
  return ir(e, t);
}
function jh(e) {
  var t, n, r, o = e.ownerDocument, i = o.body, a = o && o.documentElement;
  return t = e.getBoundingClientRect(), n = Math.floor(t.left), r = Math.floor(t.top), n -= a.clientLeft || i.clientLeft || 0, r -= a.clientTop || i.clientTop || 0, {
    left: n,
    top: r
  };
}
function ef(e, t) {
  var n = e["page".concat(t ? "Y" : "X", "Offset")], r = "scroll".concat(t ? "Top" : "Left");
  if (typeof n != "number") {
    var o = e.document;
    n = o.documentElement[r], typeof n != "number" && (n = o.body[r]);
  }
  return n;
}
function tf(e) {
  return ef(e);
}
function nf(e) {
  return ef(e, !0);
}
function Yn(e) {
  var t = jh(e), n = e.ownerDocument, r = n.defaultView || n.parentWindow;
  return t.left += tf(r), t.top += nf(r), t;
}
function va(e) {
  return e != null && e == e.window;
}
function rf(e) {
  return va(e) ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
}
function Dh(e, t, n) {
  var r = n, o = "", i = rf(e);
  return r = r || i.defaultView.getComputedStyle(e, null), r && (o = r.getPropertyValue(t) || r[t]), o;
}
var Bh = new RegExp("^(".concat(Rh, ")(?!px)[a-z%]+$"), "i"), Lh = /^(top|right|bottom|left)$/, Wo = "currentStyle", ko = "runtimeStyle", At = "left", Hh = "px";
function zh(e, t) {
  var n = e[Wo] && e[Wo][t];
  if (Bh.test(n) && !Lh.test(t)) {
    var r = e.style, o = r[At], i = e[ko][At];
    e[ko][At] = e[Wo][At], r[At] = t === "fontSize" ? "1em" : n || 0, n = r.pixelLeft + Hh, r[At] = o, e[ko][At] = i;
  }
  return n === "" ? "auto" : n;
}
typeof window < "u" && (ir = window.getComputedStyle ? Dh : zh);
function Cr(e, t) {
  return e === "left" ? t.useCssRight ? "right" : e : t.useCssBottom ? "bottom" : e;
}
function Ll(e) {
  if (e === "left")
    return "right";
  if (e === "right")
    return "left";
  if (e === "top")
    return "bottom";
  if (e === "bottom")
    return "top";
}
function Hl(e, t, n) {
  dn(e, "position") === "static" && (e.style.position = "relative");
  var r = -999, o = -999, i = Cr("left", n), a = Cr("top", n), l = Ll(i), s = Ll(a);
  i !== "left" && (r = 999), a !== "top" && (o = 999);
  var c = "", f = Yn(e);
  ("left" in t || "top" in t) && (c = Ah(e) || "", Dl(e, "none")), "left" in t && (e.style[l] = "", e.style[i] = "".concat(r, "px")), "top" in t && (e.style[s] = "", e.style[a] = "".concat(o, "px")), Bl(e);
  var u = Yn(e), d = {};
  for (var p in t)
    if (t.hasOwnProperty(p)) {
      var h = Cr(p, n), g = p === "left" ? r : o, x = f[p] - u[p];
      h === p ? d[h] = g + x : d[h] = g - x;
    }
  dn(e, d), Bl(e), ("left" in t || "top" in t) && Dl(e, c);
  var v = {};
  for (var $ in t)
    if (t.hasOwnProperty($)) {
      var y = Cr($, n), b = t[$] - f[$];
      $ === y ? v[y] = d[y] + b : v[y] = d[y] - b;
    }
  dn(e, v);
}
function Vh(e, t) {
  var n = Yn(e), r = Ih(e), o = {
    x: r.x,
    y: r.y
  };
  "left" in t && (o.x = r.x + t.left - n.left), "top" in t && (o.y = r.y + t.top - n.top), Nh(e, o);
}
function Wh(e, t, n) {
  if (n.ignoreShake) {
    var r = Yn(e), o = r.left.toFixed(0), i = r.top.toFixed(0), a = t.left.toFixed(0), l = t.top.toFixed(0);
    if (o === a && i === l)
      return;
  }
  n.useCssRight || n.useCssBottom ? Hl(e, t, n) : n.useCssTransform && vo() in document.body.style ? Vh(e, t) : Hl(e, t, n);
}
function ya(e, t) {
  for (var n = 0; n < e.length; n++)
    t(e[n]);
}
function of(e) {
  return ir(e, "boxSizing") === "border-box";
}
var kh = ["margin", "border", "padding"], Si = -1, qh = 2, Oi = 1, Gh = 0;
function Uh(e, t, n) {
  var r = {}, o = e.style, i;
  for (i in t)
    t.hasOwnProperty(i) && (r[i] = o[i], o[i] = t[i]);
  n.call(e);
  for (i in t)
    t.hasOwnProperty(i) && (o[i] = r[i]);
}
function Rn(e, t, n) {
  var r = 0, o, i, a;
  for (i = 0; i < t.length; i++)
    if (o = t[i], o)
      for (a = 0; a < n.length; a++) {
        var l = void 0;
        o === "border" ? l = "".concat(o).concat(n[a], "Width") : l = o + n[a], r += parseFloat(ir(e, l)) || 0;
      }
  return r;
}
var rt = {
  getParent: function(t) {
    var n = t;
    do
      n.nodeType === 11 && n.host ? n = n.host : n = n.parentNode;
    while (n && n.nodeType !== 1 && n.nodeType !== 9);
    return n;
  }
};
ya(["Width", "Height"], function(e) {
  rt["doc".concat(e)] = function(t) {
    var n = t.document;
    return Math.max(
      // firefox chrome documentElement.scrollHeight< body.scrollHeight
      // ie standard mode : documentElement.scrollHeight> body.scrollHeight
      n.documentElement["scroll".concat(e)],
      // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
      n.body["scroll".concat(e)],
      rt["viewport".concat(e)](n)
    );
  }, rt["viewport".concat(e)] = function(t) {
    var n = "client".concat(e), r = t.document, o = r.body, i = r.documentElement, a = i[n];
    return r.compatMode === "CSS1Compat" && a || o && o[n] || a;
  };
});
function zl(e, t, n) {
  var r = n;
  if (va(e))
    return t === "width" ? rt.viewportWidth(e) : rt.viewportHeight(e);
  if (e.nodeType === 9)
    return t === "width" ? rt.docWidth(e) : rt.docHeight(e);
  var o = t === "width" ? ["Left", "Right"] : ["Top", "Bottom"], i = Math.floor(t === "width" ? e.getBoundingClientRect().width : e.getBoundingClientRect().height), a = of(e), l = 0;
  (i == null || i <= 0) && (i = void 0, l = ir(e, t), (l == null || Number(l) < 0) && (l = e.style[t] || 0), l = Math.floor(parseFloat(l)) || 0), r === void 0 && (r = a ? Oi : Si);
  var s = i !== void 0 || a, c = i || l;
  return r === Si ? s ? c - Rn(e, ["border", "padding"], o) : l : s ? r === Oi ? c : c + (r === qh ? -Rn(e, ["border"], o) : Rn(e, ["margin"], o)) : l + Rn(e, kh.slice(r), o);
}
var Xh = {
  position: "absolute",
  visibility: "hidden",
  display: "block"
};
function Vl() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r, o = t[0];
  return o.offsetWidth !== 0 ? r = zl.apply(void 0, t) : Uh(o, Xh, function() {
    r = zl.apply(void 0, t);
  }), r;
}
ya(["width", "height"], function(e) {
  var t = e.charAt(0).toUpperCase() + e.slice(1);
  rt["outer".concat(t)] = function(r, o) {
    return r && Vl(r, e, o ? Gh : Oi);
  };
  var n = e === "width" ? ["Left", "Right"] : ["Top", "Bottom"];
  rt[e] = function(r, o) {
    var i = o;
    if (i !== void 0) {
      if (r) {
        var a = of(r);
        return a && (i += Rn(r, ["padding", "border"], n)), dn(r, e, i);
      }
      return;
    }
    return r && Vl(r, e, Si);
  };
});
function af(e, t) {
  for (var n in t)
    t.hasOwnProperty(n) && (e[n] = t[n]);
  return e;
}
var q = {
  getWindow: function(t) {
    if (t && t.document && t.setTimeout)
      return t;
    var n = t.ownerDocument || t;
    return n.defaultView || n.parentWindow;
  },
  getDocument: rf,
  offset: function(t, n, r) {
    if (typeof n < "u")
      Wh(t, n, r || {});
    else
      return Yn(t);
  },
  isWindow: va,
  each: ya,
  css: dn,
  clone: function(t) {
    var n, r = {};
    for (n in t)
      t.hasOwnProperty(n) && (r[n] = t[n]);
    var o = t.overflow;
    if (o)
      for (n in t)
        t.hasOwnProperty(n) && (r.overflow[n] = t.overflow[n]);
    return r;
  },
  mix: af,
  getWindowScrollLeft: function(t) {
    return tf(t);
  },
  getWindowScrollTop: function(t) {
    return nf(t);
  },
  merge: function() {
    for (var t = {}, n = 0; n < arguments.length; n++)
      q.mix(t, n < 0 || arguments.length <= n ? void 0 : arguments[n]);
    return t;
  },
  viewportWidth: 0,
  viewportHeight: 0
};
af(q, rt);
var qo = q.getParent;
function Ti(e) {
  if (q.isWindow(e) || e.nodeType === 9)
    return null;
  var t = q.getDocument(e), n = t.body, r, o = q.css(e, "position"), i = o === "fixed" || o === "absolute";
  if (!i)
    return e.nodeName.toLowerCase() === "html" ? null : qo(e);
  for (r = qo(e); r && r !== n && r.nodeType !== 9; r = qo(r))
    if (o = q.css(r, "position"), o !== "static")
      return r;
  return null;
}
var Wl = q.getParent;
function Kh(e) {
  if (q.isWindow(e) || e.nodeType === 9)
    return !1;
  var t = q.getDocument(e), n = t.body, r = null;
  for (
    r = Wl(e);
    // 修复元素位于 document.documentElement 下导致崩溃问题
    r && r !== n && r !== t;
    r = Wl(r)
  ) {
    var o = q.css(r, "position");
    if (o === "fixed")
      return !0;
  }
  return !1;
}
function ba(e, t) {
  for (var n = {
    left: 0,
    right: 1 / 0,
    top: 0,
    bottom: 1 / 0
  }, r = Ti(e), o = q.getDocument(e), i = o.defaultView || o.parentWindow, a = o.body, l = o.documentElement; r; ) {
    if ((navigator.userAgent.indexOf("MSIE") === -1 || r.clientWidth !== 0) && // body may have overflow set on it, yet we still get the entire
    // viewport. In some browsers, el.offsetParent may be
    // document.documentElement, so check for that too.
    r !== a && r !== l && q.css(r, "overflow") !== "visible") {
      var s = q.offset(r);
      s.left += r.clientLeft, s.top += r.clientTop, n.top = Math.max(n.top, s.top), n.right = Math.min(
        n.right,
        // consider area without scrollBar
        s.left + r.clientWidth
      ), n.bottom = Math.min(n.bottom, s.top + r.clientHeight), n.left = Math.max(n.left, s.left);
    } else if (r === a || r === l)
      break;
    r = Ti(r);
  }
  var c = null;
  if (!q.isWindow(e) && e.nodeType !== 9) {
    c = e.style.position;
    var f = q.css(e, "position");
    f === "absolute" && (e.style.position = "fixed");
  }
  var u = q.getWindowScrollLeft(i), d = q.getWindowScrollTop(i), p = q.viewportWidth(i), h = q.viewportHeight(i), g = l.scrollWidth, x = l.scrollHeight, v = window.getComputedStyle(a);
  if (v.overflowX === "hidden" && (g = i.innerWidth), v.overflowY === "hidden" && (x = i.innerHeight), e.style && (e.style.position = c), t || Kh(e))
    n.left = Math.max(n.left, u), n.top = Math.max(n.top, d), n.right = Math.min(n.right, u + p), n.bottom = Math.min(n.bottom, d + h);
  else {
    var $ = Math.max(g, u + p);
    n.right = Math.min(n.right, $);
    var y = Math.max(x, d + h);
    n.bottom = Math.min(n.bottom, y);
  }
  return n.top >= 0 && n.left >= 0 && n.bottom > n.top && n.right > n.left ? n : null;
}
function Yh(e, t, n, r) {
  var o = q.clone(e), i = {
    width: t.width,
    height: t.height
  };
  return r.adjustX && o.left < n.left && (o.left = n.left), r.resizeWidth && o.left >= n.left && o.left + i.width > n.right && (i.width -= o.left + i.width - n.right), r.adjustX && o.left + i.width > n.right && (o.left = Math.max(n.right - i.width, n.left)), r.adjustY && o.top < n.top && (o.top = n.top), r.resizeHeight && o.top >= n.top && o.top + i.height > n.bottom && (i.height -= o.top + i.height - n.bottom), r.adjustY && o.top + i.height > n.bottom && (o.top = Math.max(n.bottom - i.height, n.top)), q.mix(o, i);
}
function Ca(e) {
  var t, n, r;
  if (!q.isWindow(e) && e.nodeType !== 9)
    t = q.offset(e), n = q.outerWidth(e), r = q.outerHeight(e);
  else {
    var o = q.getWindow(e);
    t = {
      left: q.getWindowScrollLeft(o),
      top: q.getWindowScrollTop(o)
    }, n = q.viewportWidth(o), r = q.viewportHeight(o);
  }
  return t.width = n, t.height = r, t;
}
function kl(e, t) {
  var n = t.charAt(0), r = t.charAt(1), o = e.width, i = e.height, a = e.left, l = e.top;
  return n === "c" ? l += i / 2 : n === "b" && (l += i), r === "c" ? a += o / 2 : r === "r" && (a += o), {
    left: a,
    top: l
  };
}
function xr(e, t, n, r, o) {
  var i = kl(t, n[1]), a = kl(e, n[0]), l = [a.left - i.left, a.top - i.top];
  return {
    left: Math.round(e.left - l[0] + r[0] - o[0]),
    top: Math.round(e.top - l[1] + r[1] - o[1])
  };
}
function ql(e, t, n) {
  return e.left < n.left || e.left + t.width > n.right;
}
function Gl(e, t, n) {
  return e.top < n.top || e.top + t.height > n.bottom;
}
function Qh(e, t, n) {
  return e.left > n.right || e.left + t.width < n.left;
}
function Zh(e, t, n) {
  return e.top > n.bottom || e.top + t.height < n.top;
}
function wr(e, t, n) {
  var r = [];
  return q.each(e, function(o) {
    r.push(o.replace(t, function(i) {
      return n[i];
    }));
  }), r;
}
function $r(e, t) {
  return e[t] = -e[t], e;
}
function Ul(e, t) {
  var n;
  return /%$/.test(e) ? n = parseInt(e.substring(0, e.length - 1), 10) / 100 * t : n = parseInt(e, 10), n || 0;
}
function Xl(e, t) {
  e[0] = Ul(e[0], t.width), e[1] = Ul(e[1], t.height);
}
function lf(e, t, n, r) {
  var o = n.points, i = n.offset || [0, 0], a = n.targetOffset || [0, 0], l = n.overflow, s = n.source || e;
  i = [].concat(i), a = [].concat(a), l = l || {};
  var c = {}, f = 0, u = !!(l && l.alwaysByViewport), d = ba(s, u), p = Ca(s);
  Xl(i, p), Xl(a, t);
  var h = xr(p, t, o, i, a), g = q.merge(p, h);
  if (d && (l.adjustX || l.adjustY) && r) {
    if (l.adjustX && ql(h, p, d)) {
      var x = wr(o, /[lr]/gi, {
        l: "r",
        r: "l"
      }), v = $r(i, 0), $ = $r(a, 0), y = xr(p, t, x, v, $);
      Qh(y, p, d) || (f = 1, o = x, i = v, a = $);
    }
    if (l.adjustY && Gl(h, p, d)) {
      var b = wr(o, /[tb]/gi, {
        t: "b",
        b: "t"
      }), S = $r(i, 1), O = $r(a, 1), C = xr(p, t, b, S, O);
      Zh(C, p, d) || (f = 1, o = b, i = S, a = O);
    }
    f && (h = xr(p, t, o, i, a), q.mix(g, h));
    var E = ql(h, p, d), A = Gl(h, p, d);
    if (E || A) {
      var _ = o;
      E && (_ = wr(o, /[lr]/gi, {
        l: "r",
        r: "l"
      })), A && (_ = wr(o, /[tb]/gi, {
        t: "b",
        b: "t"
      })), o = _, i = n.offset || [0, 0], a = n.targetOffset || [0, 0];
    }
    c.adjustX = l.adjustX && E, c.adjustY = l.adjustY && A, (c.adjustX || c.adjustY) && (g = Yh(h, p, d, c));
  }
  return g.width !== p.width && q.css(s, "width", q.width(s) + g.width - p.width), g.height !== p.height && q.css(s, "height", q.height(s) + g.height - p.height), q.offset(s, {
    left: g.left,
    top: g.top
  }, {
    useCssRight: n.useCssRight,
    useCssBottom: n.useCssBottom,
    useCssTransform: n.useCssTransform,
    ignoreShake: n.ignoreShake
  }), {
    points: o,
    offset: i,
    targetOffset: a,
    overflow: c
  };
}
function Jh(e, t) {
  var n = ba(e, t), r = Ca(e);
  return !n || r.left + r.width <= n.left || r.top + r.height <= n.top || r.left >= n.right || r.top >= n.bottom;
}
function xa(e, t, n) {
  var r = n.target || t, o = Ca(r), i = !Jh(r, n.overflow && n.overflow.alwaysByViewport);
  return lf(e, o, n, i);
}
xa.__getOffsetParent = Ti;
xa.__getVisibleRectForElement = ba;
function ev(e, t, n) {
  var r, o, i = q.getDocument(e), a = i.defaultView || i.parentWindow, l = q.getWindowScrollLeft(a), s = q.getWindowScrollTop(a), c = q.viewportWidth(a), f = q.viewportHeight(a);
  "pageX" in t ? r = t.pageX : r = l + t.clientX, "pageY" in t ? o = t.pageY : o = s + t.clientY;
  var u = {
    left: r,
    top: o,
    width: 0,
    height: 0
  }, d = r >= 0 && r <= l + c && o >= 0 && o <= s + f, p = [n.points[0], "cc"];
  return lf(e, u, jl(jl({}, n), {}, {
    points: p
  }), d);
}
function Qr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, o = e;
  if (Array.isArray(e) && (o = Xt(e)[0]), !o)
    return null;
  const i = ea(o, t, r);
  return i.props = n ? m(m({}, i.props), t) : i.props, Xe(typeof i.props.class != "object", "class must be string"), i;
}
function tv(e, t, n) {
  Vt(ea(e, m({}, t)), n);
}
const sf = (e) => {
  if (!e)
    return !1;
  if (e.offsetParent)
    return !0;
  if (e.getBBox) {
    const t = e.getBBox();
    if (t.width || t.height)
      return !0;
  }
  if (e.getBoundingClientRect) {
    const t = e.getBoundingClientRect();
    if (t.width || t.height)
      return !0;
  }
  return !1;
};
function nv(e, t) {
  return e === t ? !0 : !e || !t ? !1 : "pageX" in t && "pageY" in t ? e.pageX === t.pageX && e.pageY === t.pageY : "clientX" in t && "clientY" in t ? e.clientX === t.clientX && e.clientY === t.clientY : !1;
}
function rv(e, t) {
  e !== document.activeElement && vt(t, e) && typeof e.focus == "function" && e.focus();
}
function Kl(e, t) {
  let n = null, r = null;
  function o(a) {
    let [{
      target: l
    }] = a;
    if (!document.documentElement.contains(l))
      return;
    const {
      width: s,
      height: c
    } = l.getBoundingClientRect(), f = Math.floor(s), u = Math.floor(c);
    (n !== f || r !== u) && Promise.resolve().then(() => {
      t({
        width: f,
        height: u
      });
    }), n = f, r = u;
  }
  const i = new Hp(o);
  return e && i.observe(e), () => {
    i.disconnect();
  };
}
const ov = (e, t) => {
  let n = !1, r = null;
  function o() {
    clearTimeout(r);
  }
  function i(a) {
    if (!n || a === !0) {
      if (e() === !1)
        return;
      n = !0, o(), r = setTimeout(() => {
        n = !1;
      }, t.value);
    } else
      o(), r = setTimeout(() => {
        n = !1, i();
      }, t.value);
  }
  return [i, () => {
    n = !1, o();
  }];
};
function iv() {
  this.__data__ = [], this.size = 0;
}
function wa(e, t) {
  return e === t || e !== e && t !== t;
}
function yo(e, t) {
  for (var n = e.length; n--; )
    if (wa(e[n][0], t))
      return n;
  return -1;
}
var av = Array.prototype, lv = av.splice;
function sv(e) {
  var t = this.__data__, n = yo(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : lv.call(t, n, 1), --this.size, !0;
}
function cv(e) {
  var t = this.__data__, n = yo(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function uv(e) {
  return yo(this.__data__, e) > -1;
}
function fv(e, t) {
  var n = this.__data__, r = yo(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function mt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
mt.prototype.clear = iv;
mt.prototype.delete = sv;
mt.prototype.get = cv;
mt.prototype.has = uv;
mt.prototype.set = fv;
function dv() {
  this.__data__ = new mt(), this.size = 0;
}
function pv(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function mv(e) {
  return this.__data__.get(e);
}
function gv(e) {
  return this.__data__.has(e);
}
var cf = typeof global == "object" && global && global.Object === Object && global, hv = typeof self == "object" && self && self.Object === Object && self, Je = cf || hv || Function("return this")(), ze = Je.Symbol, uf = Object.prototype, vv = uf.hasOwnProperty, yv = uf.toString, Mn = ze ? ze.toStringTag : void 0;
function bv(e) {
  var t = vv.call(e, Mn), n = e[Mn];
  try {
    e[Mn] = void 0;
    var r = !0;
  } catch {
  }
  var o = yv.call(e);
  return r && (t ? e[Mn] = n : delete e[Mn]), o;
}
var Cv = Object.prototype, xv = Cv.toString;
function wv(e) {
  return xv.call(e);
}
var $v = "[object Null]", Sv = "[object Undefined]", Yl = ze ? ze.toStringTag : void 0;
function Yt(e) {
  return e == null ? e === void 0 ? Sv : $v : Yl && Yl in Object(e) ? bv(e) : wv(e);
}
function dt(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Ov = "[object AsyncFunction]", Tv = "[object Function]", Pv = "[object GeneratorFunction]", Ev = "[object Proxy]";
function ff(e) {
  if (!dt(e))
    return !1;
  var t = Yt(e);
  return t == Tv || t == Pv || t == Ov || t == Ev;
}
var Go = Je["__core-js_shared__"], Ql = function() {
  var e = /[^.]+$/.exec(Go && Go.keys && Go.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function _v(e) {
  return !!Ql && Ql in e;
}
var Av = Function.prototype, Iv = Av.toString;
function Qt(e) {
  if (e != null) {
    try {
      return Iv.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Mv = /[\\^$.*+?()[\]{}|]/g, Fv = /^\[object .+?Constructor\]$/, Nv = Function.prototype, Rv = Object.prototype, jv = Nv.toString, Dv = Rv.hasOwnProperty, Bv = RegExp(
  "^" + jv.call(Dv).replace(Mv, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Lv(e) {
  if (!dt(e) || _v(e))
    return !1;
  var t = ff(e) ? Bv : Fv;
  return t.test(Qt(e));
}
function Hv(e, t) {
  return e == null ? void 0 : e[t];
}
function Zt(e, t) {
  var n = Hv(e, t);
  return Lv(n) ? n : void 0;
}
var Qn = Zt(Je, "Map"), Zn = Zt(Object, "create");
function zv() {
  this.__data__ = Zn ? Zn(null) : {}, this.size = 0;
}
function Vv(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Wv = "__lodash_hash_undefined__", kv = Object.prototype, qv = kv.hasOwnProperty;
function Gv(e) {
  var t = this.__data__;
  if (Zn) {
    var n = t[e];
    return n === Wv ? void 0 : n;
  }
  return qv.call(t, e) ? t[e] : void 0;
}
var Uv = Object.prototype, Xv = Uv.hasOwnProperty;
function Kv(e) {
  var t = this.__data__;
  return Zn ? t[e] !== void 0 : Xv.call(t, e);
}
var Yv = "__lodash_hash_undefined__";
function Qv(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Zn && t === void 0 ? Yv : t, this;
}
function Gt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Gt.prototype.clear = zv;
Gt.prototype.delete = Vv;
Gt.prototype.get = Gv;
Gt.prototype.has = Kv;
Gt.prototype.set = Qv;
function Zv() {
  this.size = 0, this.__data__ = {
    hash: new Gt(),
    map: new (Qn || mt)(),
    string: new Gt()
  };
}
function Jv(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function bo(e, t) {
  var n = e.__data__;
  return Jv(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function e0(e) {
  var t = bo(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function t0(e) {
  return bo(this, e).get(e);
}
function n0(e) {
  return bo(this, e).has(e);
}
function r0(e, t) {
  var n = bo(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function gt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
gt.prototype.clear = Zv;
gt.prototype.delete = e0;
gt.prototype.get = t0;
gt.prototype.has = n0;
gt.prototype.set = r0;
var o0 = 200;
function i0(e, t) {
  var n = this.__data__;
  if (n instanceof mt) {
    var r = n.__data__;
    if (!Qn || r.length < o0 - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new gt(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function ot(e) {
  var t = this.__data__ = new mt(e);
  this.size = t.size;
}
ot.prototype.clear = dv;
ot.prototype.delete = pv;
ot.prototype.get = mv;
ot.prototype.has = gv;
ot.prototype.set = i0;
var a0 = "__lodash_hash_undefined__";
function l0(e) {
  return this.__data__.set(e, a0), this;
}
function s0(e) {
  return this.__data__.has(e);
}
function Jn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new gt(); ++t < n; )
    this.add(e[t]);
}
Jn.prototype.add = Jn.prototype.push = l0;
Jn.prototype.has = s0;
function c0(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function Pi(e, t) {
  return e.has(t);
}
var u0 = 1, f0 = 2;
function df(e, t, n, r, o, i) {
  var a = n & u0, l = e.length, s = t.length;
  if (l != s && !(a && s > l))
    return !1;
  var c = i.get(e), f = i.get(t);
  if (c && f)
    return c == t && f == e;
  var u = -1, d = !0, p = n & f0 ? new Jn() : void 0;
  for (i.set(e, t), i.set(t, e); ++u < l; ) {
    var h = e[u], g = t[u];
    if (r)
      var x = a ? r(g, h, u, t, e, i) : r(h, g, u, e, t, i);
    if (x !== void 0) {
      if (x)
        continue;
      d = !1;
      break;
    }
    if (p) {
      if (!c0(t, function(v, $) {
        if (!Pi(p, $) && (h === v || o(h, v, n, r, i)))
          return p.push($);
      })) {
        d = !1;
        break;
      }
    } else if (!(h === g || o(h, g, n, r, i))) {
      d = !1;
      break;
    }
  }
  return i.delete(e), i.delete(t), d;
}
var Zr = Je.Uint8Array;
function d0(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, o) {
    n[++t] = [o, r];
  }), n;
}
function p0(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var m0 = 1, g0 = 2, h0 = "[object Boolean]", v0 = "[object Date]", y0 = "[object Error]", b0 = "[object Map]", C0 = "[object Number]", x0 = "[object RegExp]", w0 = "[object Set]", $0 = "[object String]", S0 = "[object Symbol]", O0 = "[object ArrayBuffer]", T0 = "[object DataView]", Zl = ze ? ze.prototype : void 0, Uo = Zl ? Zl.valueOf : void 0;
function P0(e, t, n, r, o, i, a) {
  switch (n) {
    case T0:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case O0:
      return !(e.byteLength != t.byteLength || !i(new Zr(e), new Zr(t)));
    case h0:
    case v0:
    case C0:
      return wa(+e, +t);
    case y0:
      return e.name == t.name && e.message == t.message;
    case x0:
    case $0:
      return e == t + "";
    case b0:
      var l = d0;
    case w0:
      var s = r & m0;
      if (l || (l = p0), e.size != t.size && !s)
        return !1;
      var c = a.get(e);
      if (c)
        return c == t;
      r |= g0, a.set(e, t);
      var f = df(l(e), l(t), r, o, i, a);
      return a.delete(e), f;
    case S0:
      if (Uo)
        return Uo.call(e) == Uo.call(t);
  }
  return !1;
}
function $a(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var Ve = Array.isArray;
function pf(e, t, n) {
  var r = t(e);
  return Ve(e) ? r : $a(r, n(e));
}
function E0(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, i = []; ++n < r; ) {
    var a = e[n];
    t(a, n, e) && (i[o++] = a);
  }
  return i;
}
function mf() {
  return [];
}
var _0 = Object.prototype, A0 = _0.propertyIsEnumerable, Jl = Object.getOwnPropertySymbols, Sa = Jl ? function(e) {
  return e == null ? [] : (e = Object(e), E0(Jl(e), function(t) {
    return A0.call(e, t);
  }));
} : mf;
function I0(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
function lt(e) {
  return e != null && typeof e == "object";
}
var M0 = "[object Arguments]";
function es(e) {
  return lt(e) && Yt(e) == M0;
}
var gf = Object.prototype, F0 = gf.hasOwnProperty, N0 = gf.propertyIsEnumerable, Co = es(/* @__PURE__ */ function() {
  return arguments;
}()) ? es : function(e) {
  return lt(e) && F0.call(e, "callee") && !N0.call(e, "callee");
};
function R0() {
  return !1;
}
var hf = typeof exports == "object" && exports && !exports.nodeType && exports, ts = hf && typeof module == "object" && module && !module.nodeType && module, j0 = ts && ts.exports === hf, ns = j0 ? Je.Buffer : void 0, D0 = ns ? ns.isBuffer : void 0, er = D0 || R0, B0 = 9007199254740991, L0 = /^(?:0|[1-9]\d*)$/;
function vf(e, t) {
  var n = typeof e;
  return t = t ?? B0, !!t && (n == "number" || n != "symbol" && L0.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var H0 = 9007199254740991;
function Oa(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= H0;
}
var z0 = "[object Arguments]", V0 = "[object Array]", W0 = "[object Boolean]", k0 = "[object Date]", q0 = "[object Error]", G0 = "[object Function]", U0 = "[object Map]", X0 = "[object Number]", K0 = "[object Object]", Y0 = "[object RegExp]", Q0 = "[object Set]", Z0 = "[object String]", J0 = "[object WeakMap]", ey = "[object ArrayBuffer]", ty = "[object DataView]", ny = "[object Float32Array]", ry = "[object Float64Array]", oy = "[object Int8Array]", iy = "[object Int16Array]", ay = "[object Int32Array]", ly = "[object Uint8Array]", sy = "[object Uint8ClampedArray]", cy = "[object Uint16Array]", uy = "[object Uint32Array]", ie = {};
ie[ny] = ie[ry] = ie[oy] = ie[iy] = ie[ay] = ie[ly] = ie[sy] = ie[cy] = ie[uy] = !0;
ie[z0] = ie[V0] = ie[ey] = ie[W0] = ie[ty] = ie[k0] = ie[q0] = ie[G0] = ie[U0] = ie[X0] = ie[K0] = ie[Y0] = ie[Q0] = ie[Z0] = ie[J0] = !1;
function fy(e) {
  return lt(e) && Oa(e.length) && !!ie[Yt(e)];
}
function xo(e) {
  return function(t) {
    return e(t);
  };
}
var yf = typeof exports == "object" && exports && !exports.nodeType && exports, Ln = yf && typeof module == "object" && module && !module.nodeType && module, dy = Ln && Ln.exports === yf, Xo = dy && cf.process, Cn = function() {
  try {
    var e = Ln && Ln.require && Ln.require("util").types;
    return e || Xo && Xo.binding && Xo.binding("util");
  } catch {
  }
}(), rs = Cn && Cn.isTypedArray, Ta = rs ? xo(rs) : fy, py = Object.prototype, my = py.hasOwnProperty;
function bf(e, t) {
  var n = Ve(e), r = !n && Co(e), o = !n && !r && er(e), i = !n && !r && !o && Ta(e), a = n || r || o || i, l = a ? I0(e.length, String) : [], s = l.length;
  for (var c in e)
    (t || my.call(e, c)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    vf(c, s))) && l.push(c);
  return l;
}
var gy = Object.prototype;
function wo(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || gy;
  return e === n;
}
function Cf(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var hy = Cf(Object.keys, Object), vy = Object.prototype, yy = vy.hasOwnProperty;
function xf(e) {
  if (!wo(e))
    return hy(e);
  var t = [];
  for (var n in Object(e))
    yy.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function ar(e) {
  return e != null && Oa(e.length) && !ff(e);
}
function lr(e) {
  return ar(e) ? bf(e) : xf(e);
}
function Ei(e) {
  return pf(e, lr, Sa);
}
var by = 1, Cy = Object.prototype, xy = Cy.hasOwnProperty;
function wy(e, t, n, r, o, i) {
  var a = n & by, l = Ei(e), s = l.length, c = Ei(t), f = c.length;
  if (s != f && !a)
    return !1;
  for (var u = s; u--; ) {
    var d = l[u];
    if (!(a ? d in t : xy.call(t, d)))
      return !1;
  }
  var p = i.get(e), h = i.get(t);
  if (p && h)
    return p == t && h == e;
  var g = !0;
  i.set(e, t), i.set(t, e);
  for (var x = a; ++u < s; ) {
    d = l[u];
    var v = e[d], $ = t[d];
    if (r)
      var y = a ? r($, v, d, t, e, i) : r(v, $, d, e, t, i);
    if (!(y === void 0 ? v === $ || o(v, $, n, r, i) : y)) {
      g = !1;
      break;
    }
    x || (x = d == "constructor");
  }
  if (g && !x) {
    var b = e.constructor, S = t.constructor;
    b != S && "constructor" in e && "constructor" in t && !(typeof b == "function" && b instanceof b && typeof S == "function" && S instanceof S) && (g = !1);
  }
  return i.delete(e), i.delete(t), g;
}
var _i = Zt(Je, "DataView"), Ai = Zt(Je, "Promise"), Ii = Zt(Je, "Set"), Mi = Zt(Je, "WeakMap"), os = "[object Map]", $y = "[object Object]", is = "[object Promise]", as = "[object Set]", ls = "[object WeakMap]", ss = "[object DataView]", Sy = Qt(_i), Oy = Qt(Qn), Ty = Qt(Ai), Py = Qt(Ii), Ey = Qt(Mi), De = Yt;
(_i && De(new _i(new ArrayBuffer(1))) != ss || Qn && De(new Qn()) != os || Ai && De(Ai.resolve()) != is || Ii && De(new Ii()) != as || Mi && De(new Mi()) != ls) && (De = function(e) {
  var t = Yt(e), n = t == $y ? e.constructor : void 0, r = n ? Qt(n) : "";
  if (r)
    switch (r) {
      case Sy:
        return ss;
      case Oy:
        return os;
      case Ty:
        return is;
      case Py:
        return as;
      case Ey:
        return ls;
    }
  return t;
});
var _y = 1, cs = "[object Arguments]", us = "[object Array]", Sr = "[object Object]", Ay = Object.prototype, fs = Ay.hasOwnProperty;
function Iy(e, t, n, r, o, i) {
  var a = Ve(e), l = Ve(t), s = a ? us : De(e), c = l ? us : De(t);
  s = s == cs ? Sr : s, c = c == cs ? Sr : c;
  var f = s == Sr, u = c == Sr, d = s == c;
  if (d && er(e)) {
    if (!er(t))
      return !1;
    a = !0, f = !1;
  }
  if (d && !f)
    return i || (i = new ot()), a || Ta(e) ? df(e, t, n, r, o, i) : P0(e, t, s, n, r, o, i);
  if (!(n & _y)) {
    var p = f && fs.call(e, "__wrapped__"), h = u && fs.call(t, "__wrapped__");
    if (p || h) {
      var g = p ? e.value() : e, x = h ? t.value() : t;
      return i || (i = new ot()), o(g, x, n, r, i);
    }
  }
  return d ? (i || (i = new ot()), wy(e, t, n, r, o, i)) : !1;
}
function $o(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !lt(e) && !lt(t) ? e !== e && t !== t : Iy(e, t, n, r, $o, o);
}
function Pa(e, t) {
  return $o(e, t);
}
const My = {
  align: Object,
  target: [Object, Function],
  onAlign: Function,
  monitorBufferTime: Number,
  monitorWindowResize: Boolean,
  disabled: Boolean
};
function ds(e) {
  return typeof e != "function" ? null : e();
}
function ps(e) {
  return typeof e != "object" || !e ? null : e;
}
const Fy = V({
  compatConfig: {
    MODE: 3
  },
  name: "Align",
  props: My,
  emits: ["align"],
  setup(e, t) {
    let {
      expose: n,
      slots: r
    } = t;
    const o = X({}), i = X(), [a, l] = ov(() => {
      const {
        disabled: d,
        target: p,
        align: h,
        onAlign: g
      } = e;
      if (!d && p && i.value) {
        const x = i.value;
        let v;
        const $ = ds(p), y = ps(p);
        o.value.element = $, o.value.point = y, o.value.align = h;
        const {
          activeElement: b
        } = document;
        return $ && sf($) ? v = xa(x, $, h) : y && (v = ev(x, y, h)), rv(b, x), g && v && g(x, v), !0;
      }
      return !1;
    }, T(() => e.monitorBufferTime)), s = X({
      cancel: () => {
      }
    }), c = X({
      cancel: () => {
      }
    }), f = () => {
      const d = e.target, p = ds(d), h = ps(d);
      i.value !== c.value.element && (c.value.cancel(), c.value.element = i.value, c.value.cancel = Kl(i.value, a)), (o.value.element !== p || !nv(o.value.point, h) || !Pa(o.value.align, e.align)) && (a(), s.value.element !== p && (s.value.cancel(), s.value.element = p, s.value.cancel = Kl(p, a)));
    };
    we(() => {
      Le(() => {
        f();
      });
    }), io(() => {
      Le(() => {
        f();
      });
    }), Q(() => e.disabled, (d) => {
      d ? l() : a();
    }, {
      immediate: !0,
      flush: "post"
    });
    const u = X(null);
    return Q(() => e.monitorWindowResize, (d) => {
      d ? u.value || (u.value = sn(window, "resize", a)) : u.value && (u.value.remove(), u.value = null);
    }, {
      flush: "post"
    }), ta(() => {
      s.value.cancel(), c.value.cancel(), u.value && u.value.remove(), l();
    }), n({
      forceAlign: () => a(!0)
    }), () => {
      const d = r == null ? void 0 : r.default();
      return d ? Qr(d[0], {
        ref: i
      }, !0, !0) : null;
    };
  }
});
Wt("bottomLeft", "bottomRight", "topLeft", "topRight");
const F2 = (e) => e !== void 0 && (e === "topLeft" || e === "topRight") ? "slide-down" : "slide-up", So = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return m(e ? {
    name: e,
    appear: !0,
    // type: 'animation',
    // appearFromClass: `${transitionName}-appear ${transitionName}-appear-prepare`,
    // appearActiveClass: `antdv-base-transtion`,
    // appearToClass: `${transitionName}-appear ${transitionName}-appear-active`,
    enterFromClass: `${e}-enter ${e}-enter-prepare ${e}-enter-start`,
    enterActiveClass: `${e}-enter ${e}-enter-prepare`,
    enterToClass: `${e}-enter ${e}-enter-active`,
    leaveFromClass: ` ${e}-leave`,
    leaveActiveClass: `${e}-leave ${e}-leave-active`,
    leaveToClass: `${e}-leave ${e}-leave-active`
  } : {
    css: !1
  }, t);
}, Ea = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return m(e ? {
    name: e,
    appear: !0,
    // appearFromClass: `${transitionName}-appear ${transitionName}-appear-prepare`,
    appearActiveClass: `${e}`,
    appearToClass: `${e}-appear ${e}-appear-active`,
    enterFromClass: `${e}-appear ${e}-enter ${e}-appear-prepare ${e}-enter-prepare`,
    enterActiveClass: `${e}`,
    enterToClass: `${e}-enter ${e}-appear ${e}-appear-active ${e}-enter-active`,
    leaveActiveClass: `${e} ${e}-leave`,
    leaveToClass: `${e}-leave-active`
  } : {
    css: !1
  }, t);
}, tr = (e, t, n) => n !== void 0 ? n : `${e}-${t}`, Ny = V({
  compatConfig: {
    MODE: 3
  },
  name: "PopupInner",
  inheritAttrs: !1,
  props: ga,
  emits: ["mouseenter", "mouseleave", "mousedown", "touchstart", "align"],
  setup(e, t) {
    let {
      expose: n,
      attrs: r,
      slots: o
    } = t;
    const i = L(), a = L(), l = L(), [s, c] = Ph(rp(e, "stretch")), f = () => {
      e.stretch && c(e.getRootDomNode());
    }, u = L(!1);
    let d;
    Q(() => e.visible, (O) => {
      clearTimeout(d), O ? d = setTimeout(() => {
        u.value = e.visible;
      }) : u.value = !1;
    }, {
      immediate: !0
    });
    const [p, h] = Th(u, f), g = L(), x = () => e.point ? e.point : e.getRootDomNode, v = () => {
      var O;
      (O = i.value) === null || O === void 0 || O.forceAlign();
    }, $ = (O, C) => {
      var E;
      const A = e.getClassNameFromAlign(C), _ = l.value;
      l.value !== A && (l.value = A), p.value === "align" && (_ !== A ? Promise.resolve().then(() => {
        v();
      }) : h(() => {
        var M;
        (M = g.value) === null || M === void 0 || M.call(g);
      }), (E = e.onAlign) === null || E === void 0 || E.call(e, O, C));
    }, y = T(() => {
      const O = typeof e.animation == "object" ? e.animation : ha(e);
      return ["onAfterEnter", "onAfterLeave"].forEach((C) => {
        const E = O[C];
        O[C] = (A) => {
          h(), p.value = "stable", E == null || E(A);
        };
      }), O;
    }), b = () => new Promise((O) => {
      g.value = O;
    });
    Q([y, p], () => {
      !y.value && p.value === "motion" && h();
    }, {
      immediate: !0
    }), n({
      forceAlign: v,
      getElement: () => a.value.$el || a.value
    });
    const S = T(() => {
      var O;
      return !(!((O = e.align) === null || O === void 0) && O.points && (p.value === "align" || p.value === "stable"));
    });
    return () => {
      var O;
      const {
        zIndex: C,
        align: E,
        prefixCls: A,
        destroyPopupOnHide: _,
        onMouseenter: M,
        onMouseleave: R,
        onTouchstart: D = () => {
        },
        onMousedown: z
      } = e, P = p.value, F = [m(m({}, s.value), {
        zIndex: C,
        opacity: P === "motion" || P === "stable" || !u.value ? null : 0,
        // pointerEvents: statusValue === 'stable' ? null : 'none',
        pointerEvents: !u.value && P !== "stable" ? "none" : null
      }), r.style];
      let I = Ue((O = o.default) === null || O === void 0 ? void 0 : O.call(o, {
        visible: e.visible
      }));
      I.length > 1 && (I = w("div", {
        class: `${A}-content`
      }, [I]));
      const N = Y(A, r.class, l.value, !e.arrow && `${A}-arrow-hidden`), G = u.value || !e.visible ? So(y.value.name, y.value) : {};
      return w(Ot, j(j({
        ref: a
      }, G), {}, {
        onBeforeEnter: b
      }), {
        default: () => !_ || e.visible ? wt(w(Fy, {
          target: x(),
          key: "popup",
          ref: i,
          monitorWindowResize: !0,
          disabled: S.value,
          align: E,
          onAlign: $
        }, {
          default: () => w("div", {
            class: N,
            onMouseenter: M,
            onMouseleave: R,
            onMousedown: tl(z, ["capture"]),
            [Rt ? "onTouchstartPassive" : "onTouchstart"]: tl(D, ["capture"]),
            style: F
          }, [I])
        }), [[or, u.value]]) : null
      });
    };
  }
}), Ry = V({
  compatConfig: {
    MODE: 3
  },
  name: "Popup",
  inheritAttrs: !1,
  props: $h,
  setup(e, t) {
    let {
      attrs: n,
      slots: r,
      expose: o
    } = t;
    const i = L(!1), a = L(!1), l = L(), s = L();
    return Q([() => e.visible, () => e.mobile], () => {
      i.value = e.visible, e.visible && e.mobile && (a.value = !0);
    }, {
      immediate: !0,
      flush: "post"
    }), o({
      forceAlign: () => {
        var c;
        (c = l.value) === null || c === void 0 || c.forceAlign();
      },
      getElement: () => {
        var c;
        return (c = l.value) === null || c === void 0 ? void 0 : c.getElement();
      }
    }), () => {
      const c = m(m(m({}, e), n), {
        visible: i.value
      }), f = a.value ? w(Sh, j(j({}, c), {}, {
        mobile: e.mobile,
        ref: l
      }), {
        default: r.default
      }) : w(Ny, j(j({}, c), {}, {
        ref: l
      }), {
        default: r.default
      });
      return w("div", {
        ref: s
      }, [w(Zu, c, null), f]);
    };
  }
});
function jy(e, t, n) {
  return n ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
}
function ms(e, t, n) {
  const r = e[t] || {};
  return m(m({}, r), n);
}
function Dy(e, t, n, r) {
  const {
    points: o
  } = n, i = Object.keys(e);
  for (let a = 0; a < i.length; a += 1) {
    const l = i[a];
    if (jy(e[l].points, o, r))
      return `${t}-placement-${l}`;
  }
  return "";
}
const By = {
  methods: {
    setState() {
      let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = typeof e == "function" ? e(this.$data, this.$props) : e;
      if (this.getDerivedStateFromProps) {
        const r = this.getDerivedStateFromProps(Up(this), m(m({}, this.$data), n));
        if (r === null)
          return;
        n = m(m({}, n), r || {});
      }
      m(this.$data, n), this._.isMounted && this.$forceUpdate(), Le(() => {
        t && t();
      });
    },
    __emit() {
      const e = [].slice.call(arguments, 0);
      let t = e[0];
      t = `on${t[0].toUpperCase()}${t.substring(1)}`;
      const n = this.$props[t] || this.$attrs[t];
      if (e.length && n)
        if (Array.isArray(n))
          for (let r = 0, o = n.length; r < o; r++)
            n[r](...e.slice(1));
        else
          n(...e.slice(1));
    }
  }
}, wf = Symbol("PortalContextKey"), _a = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    inTriggerContext: !0
  };
  me(wf, {
    inTriggerContext: t.inTriggerContext,
    shouldRender: T(() => {
      const {
        sPopupVisible: n,
        popupRef: r,
        forceRender: o,
        autoDestroy: i
      } = e || {};
      let a = !1;
      return (n || r || o) && (a = !0), !n && i && (a = !1), a;
    })
  });
}, Ly = () => {
  _a({}, {
    inTriggerContext: !1
  });
  const e = ve(wf, {
    shouldRender: T(() => !1),
    inTriggerContext: !1
  });
  return {
    shouldRender: T(() => e.shouldRender.value || e.inTriggerContext === !1)
  };
}, $f = V({
  compatConfig: {
    MODE: 3
  },
  name: "Portal",
  inheritAttrs: !1,
  props: {
    getContainer: H.func.isRequired,
    didUpdate: Function
  },
  setup(e, t) {
    let {
      slots: n
    } = t, r = !0, o;
    const {
      shouldRender: i
    } = Ly();
    function a() {
      i.value && (o = e.getContainer());
    }
    Dc(() => {
      r = !1, a();
    }), we(() => {
      o || a();
    });
    const l = Q(i, () => {
      i.value && !o && (o = e.getContainer()), o && l();
    });
    return io(() => {
      Le(() => {
        var s;
        i.value && ((s = e.didUpdate) === null || s === void 0 || s.call(e, e));
      });
    }), () => {
      var s;
      return i.value ? r ? (s = n.default) === null || s === void 0 ? void 0 : s.call(n) : o ? w(Bc, {
        to: o
      }, n) : null : null;
    };
  }
});
let Ko;
function Hy(e) {
  if (typeof document > "u")
    return 0;
  if (Ko === void 0) {
    const t = document.createElement("div");
    t.style.width = "100%", t.style.height = "200px";
    const n = document.createElement("div"), r = n.style;
    r.position = "absolute", r.top = "0", r.left = "0", r.pointerEvents = "none", r.visibility = "hidden", r.width = "200px", r.height = "150px", r.overflow = "hidden", n.appendChild(t), document.body.appendChild(n);
    const o = t.offsetWidth;
    n.style.overflow = "scroll";
    let i = t.offsetWidth;
    o === i && (i = n.clientWidth), document.body.removeChild(n), Ko = o - i;
  }
  return Ko;
}
const zy = `vc-util-locker-${Date.now()}`;
let gs = 0;
function Vy() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
function Wy(e) {
  const t = T(() => !!e && !!e.value);
  gs += 1;
  const n = `${zy}_${gs}`;
  Be((r) => {
    if (Qe()) {
      if (t.value) {
        const o = Hy(), i = Vy();
        Gn(`
html body {
  overflow-y: hidden;
  ${i ? `width: calc(100% - ${o}px);` : ""}
}`, n);
      } else
        qr(n);
      r(() => {
        qr(n);
      });
    }
  }, {
    flush: "post"
  });
}
let It = 0;
const Rr = Qe(), hs = (e) => {
  if (!Rr)
    return null;
  if (e) {
    if (typeof e == "string")
      return document.querySelectorAll(e)[0];
    if (typeof e == "function")
      return e();
    if (typeof e == "object" && e instanceof window.HTMLElement)
      return e;
  }
  return document.body;
}, Sf = V({
  compatConfig: {
    MODE: 3
  },
  name: "PortalWrapper",
  inheritAttrs: !1,
  props: {
    wrapperClassName: String,
    forceRender: {
      type: Boolean,
      default: void 0
    },
    getContainer: H.any,
    visible: {
      type: Boolean,
      default: void 0
    },
    autoLock: Ge(),
    didUpdate: Function
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const r = L(), o = L(), i = L(), a = L(1), l = Qe() && document.createElement("div"), s = () => {
      var p, h;
      r.value === l && ((h = (p = r.value) === null || p === void 0 ? void 0 : p.parentNode) === null || h === void 0 || h.removeChild(r.value)), r.value = null;
    };
    let c = null;
    const f = function() {
      return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1) || r.value && !r.value.parentNode ? (c = hs(e.getContainer), c ? (c.appendChild(r.value), !0) : !1) : !0;
    }, u = () => Rr ? (r.value || (r.value = l, f(!0)), d(), r.value) : null, d = () => {
      const {
        wrapperClassName: p
      } = e;
      r.value && p && p !== r.value.className && (r.value.className = p);
    };
    return io(() => {
      d(), f();
    }), Wy(T(() => e.autoLock && e.visible && Qe() && (r.value === document.body || r.value === l))), we(() => {
      let p = !1;
      Q([() => e.visible, () => e.getContainer], (h, g) => {
        let [x, v] = h, [$, y] = g;
        Rr && (c = hs(e.getContainer), c === document.body && (x && !$ ? It += 1 : p && (It -= 1))), p && (typeof v == "function" && typeof y == "function" ? v.toString() !== y.toString() : v !== y) && s(), p = !0;
      }, {
        immediate: !0,
        flush: "post"
      }), Le(() => {
        f() || (i.value = Me(() => {
          a.value += 1;
        }));
      });
    }), We(() => {
      const {
        visible: p
      } = e;
      Rr && c === document.body && (It = p && It ? It - 1 : It), s(), Me.cancel(i.value);
    }), () => {
      const {
        forceRender: p,
        visible: h
      } = e;
      let g = null;
      const x = {
        getOpenCount: () => It,
        getContainer: u
      };
      return a.value && (p || h || o.value) && (g = w($f, {
        getContainer: u,
        ref: o,
        didUpdate: e.didUpdate
      }, {
        default: () => {
          var v;
          return (v = n.default) === null || v === void 0 ? void 0 : v.call(n, x);
        }
      })), g;
    };
  }
}), ky = ["onClick", "onMousedown", "onTouchstart", "onMouseenter", "onMouseleave", "onFocus", "onBlur", "onContextmenu"], qy = V({
  compatConfig: {
    MODE: 3
  },
  name: "Trigger",
  mixins: [By],
  inheritAttrs: !1,
  props: xh(),
  setup(e) {
    const t = T(() => {
      const {
        popupPlacement: o,
        popupAlign: i,
        builtinPlacements: a
      } = e;
      return o && a ? ms(a, o, i) : i;
    }), n = L(null), r = (o) => {
      n.value = o;
    };
    return {
      vcTriggerContext: ve("vcTriggerContext", {}),
      popupRef: n,
      setPopupRef: r,
      triggerRef: L(null),
      align: t,
      focusTime: null,
      clickOutsideHandler: null,
      contextmenuOutsideHandler1: null,
      contextmenuOutsideHandler2: null,
      touchOutsideHandler: null,
      attachId: null,
      delayTimer: null,
      hasPopupMouseDown: !1,
      preClickTime: null,
      preTouchTime: null,
      mouseDownTimeout: null,
      childOriginEvents: {}
    };
  },
  data() {
    const e = this.$props;
    let t;
    return this.popupVisible !== void 0 ? t = !!e.popupVisible : t = !!e.defaultPopupVisible, ky.forEach((n) => {
      this[`fire${n}`] = (r) => {
        this.fireEvents(n, r);
      };
    }), {
      prevPopupVisible: t,
      sPopupVisible: t,
      point: null
    };
  },
  watch: {
    popupVisible(e) {
      e !== void 0 && (this.prevPopupVisible = this.sPopupVisible, this.sPopupVisible = e);
    }
  },
  created() {
    me("vcTriggerContext", {
      onPopupMouseDown: this.onPopupMouseDown,
      onPopupMouseenter: this.onPopupMouseenter,
      onPopupMouseleave: this.onPopupMouseleave
    }), _a(this);
  },
  deactivated() {
    this.setPopupVisible(!1);
  },
  mounted() {
    this.$nextTick(() => {
      this.updatedCal();
    });
  },
  updated() {
    this.$nextTick(() => {
      this.updatedCal();
    });
  },
  beforeUnmount() {
    this.clearDelayTimer(), this.clearOutsideHandler(), clearTimeout(this.mouseDownTimeout), Me.cancel(this.attachId);
  },
  methods: {
    updatedCal() {
      const e = this.$props;
      if (this.$data.sPopupVisible) {
        let n;
        !this.clickOutsideHandler && (this.isClickToHide() || this.isContextmenuToShow()) && (n = e.getDocument(this.getRootDomNode()), this.clickOutsideHandler = sn(n, "mousedown", this.onDocumentClick)), this.touchOutsideHandler || (n = n || e.getDocument(this.getRootDomNode()), this.touchOutsideHandler = sn(n, "touchstart", this.onDocumentClick, Rt ? {
          passive: !1
        } : !1)), !this.contextmenuOutsideHandler1 && this.isContextmenuToShow() && (n = n || e.getDocument(this.getRootDomNode()), this.contextmenuOutsideHandler1 = sn(n, "scroll", this.onContextmenuClose)), !this.contextmenuOutsideHandler2 && this.isContextmenuToShow() && (this.contextmenuOutsideHandler2 = sn(window, "blur", this.onContextmenuClose));
      } else
        this.clearOutsideHandler();
    },
    onMouseenter(e) {
      const {
        mouseEnterDelay: t
      } = this.$props;
      this.fireEvents("onMouseenter", e), this.delaySetPopupVisible(!0, t, t ? null : e);
    },
    onMouseMove(e) {
      this.fireEvents("onMousemove", e), this.setPoint(e);
    },
    onMouseleave(e) {
      this.fireEvents("onMouseleave", e), this.delaySetPopupVisible(!1, this.$props.mouseLeaveDelay);
    },
    onPopupMouseenter() {
      const {
        vcTriggerContext: e = {}
      } = this;
      e.onPopupMouseenter && e.onPopupMouseenter(), this.clearDelayTimer();
    },
    onPopupMouseleave(e) {
      var t;
      if (e && e.relatedTarget && !e.relatedTarget.setTimeout && vt((t = this.popupRef) === null || t === void 0 ? void 0 : t.getElement(), e.relatedTarget))
        return;
      this.isMouseLeaveToHide() && this.delaySetPopupVisible(!1, this.$props.mouseLeaveDelay);
      const {
        vcTriggerContext: n = {}
      } = this;
      n.onPopupMouseleave && n.onPopupMouseleave(e);
    },
    onFocus(e) {
      this.fireEvents("onFocus", e), this.clearDelayTimer(), this.isFocusToShow() && (this.focusTime = Date.now(), this.delaySetPopupVisible(!0, this.$props.focusDelay));
    },
    onMousedown(e) {
      this.fireEvents("onMousedown", e), this.preClickTime = Date.now();
    },
    onTouchstart(e) {
      this.fireEvents("onTouchstart", e), this.preTouchTime = Date.now();
    },
    onBlur(e) {
      vt(e.target, e.relatedTarget || document.activeElement) || (this.fireEvents("onBlur", e), this.clearDelayTimer(), this.isBlurToHide() && this.delaySetPopupVisible(!1, this.$props.blurDelay));
    },
    onContextmenu(e) {
      e.preventDefault(), this.fireEvents("onContextmenu", e), this.setPopupVisible(!0, e);
    },
    onContextmenuClose() {
      this.isContextmenuToShow() && this.close();
    },
    onClick(e) {
      if (this.fireEvents("onClick", e), this.focusTime) {
        let n;
        if (this.preClickTime && this.preTouchTime ? n = Math.min(this.preClickTime, this.preTouchTime) : this.preClickTime ? n = this.preClickTime : this.preTouchTime && (n = this.preTouchTime), Math.abs(n - this.focusTime) < 20)
          return;
        this.focusTime = 0;
      }
      this.preClickTime = 0, this.preTouchTime = 0, this.isClickToShow() && (this.isClickToHide() || this.isBlurToHide()) && e && e.preventDefault && e.preventDefault(), e && e.domEvent && e.domEvent.preventDefault();
      const t = !this.$data.sPopupVisible;
      (this.isClickToHide() && !t || t && this.isClickToShow()) && this.setPopupVisible(!this.$data.sPopupVisible, e);
    },
    onPopupMouseDown() {
      const {
        vcTriggerContext: e = {}
      } = this;
      this.hasPopupMouseDown = !0, clearTimeout(this.mouseDownTimeout), this.mouseDownTimeout = setTimeout(() => {
        this.hasPopupMouseDown = !1;
      }, 0), e.onPopupMouseDown && e.onPopupMouseDown(...arguments);
    },
    onDocumentClick(e) {
      if (this.$props.mask && !this.$props.maskClosable)
        return;
      const t = e.target, n = this.getRootDomNode(), r = this.getPopupDomNode();
      // mousedown on the target should also close popup when action is contextMenu.
      // https://github.com/ant-design/ant-design/issues/29853
      (!vt(n, t) || this.isContextMenuOnly()) && !vt(r, t) && !this.hasPopupMouseDown && this.delaySetPopupVisible(!1, 0.1);
    },
    getPopupDomNode() {
      var e;
      return ((e = this.popupRef) === null || e === void 0 ? void 0 : e.getElement()) || null;
    },
    getRootDomNode() {
      var e, t, n, r;
      const {
        getTriggerDOMNode: o
      } = this.$props;
      if (o) {
        const i = ((t = (e = this.triggerRef) === null || e === void 0 ? void 0 : e.$el) === null || t === void 0 ? void 0 : t.nodeName) === "#comment" ? null : bt(this.triggerRef);
        return bt(o(i));
      }
      try {
        const i = ((r = (n = this.triggerRef) === null || n === void 0 ? void 0 : n.$el) === null || r === void 0 ? void 0 : r.nodeName) === "#comment" ? null : bt(this.triggerRef);
        if (i)
          return i;
      } catch {
      }
      return bt(this);
    },
    handleGetPopupClassFromAlign(e) {
      const t = [], n = this.$props, {
        popupPlacement: r,
        builtinPlacements: o,
        prefixCls: i,
        alignPoint: a,
        getPopupClassNameFromAlign: l
      } = n;
      return r && o && t.push(Dy(o, i, e, a)), l && t.push(l(e)), t.join(" ");
    },
    getPopupAlign() {
      const e = this.$props, {
        popupPlacement: t,
        popupAlign: n,
        builtinPlacements: r
      } = e;
      return t && r ? ms(r, t, n) : n;
    },
    getComponent() {
      const e = {};
      this.isMouseEnterToShow() && (e.onMouseenter = this.onPopupMouseenter), this.isMouseLeaveToHide() && (e.onMouseleave = this.onPopupMouseleave), e.onMousedown = this.onPopupMouseDown, e[Rt ? "onTouchstartPassive" : "onTouchstart"] = this.onPopupMouseDown;
      const {
        handleGetPopupClassFromAlign: t,
        getRootDomNode: n,
        $attrs: r
      } = this, {
        prefixCls: o,
        destroyPopupOnHide: i,
        popupClassName: a,
        popupAnimation: l,
        popupTransitionName: s,
        popupStyle: c,
        mask: f,
        maskAnimation: u,
        maskTransitionName: d,
        zIndex: p,
        stretch: h,
        alignPoint: g,
        mobile: x,
        arrow: v,
        forceRender: $
      } = this.$props, {
        sPopupVisible: y,
        point: b
      } = this.$data, S = m(m({
        prefixCls: o,
        arrow: v,
        destroyPopupOnHide: i,
        visible: y,
        point: g ? b : null,
        align: this.align,
        animation: l,
        getClassNameFromAlign: t,
        stretch: h,
        getRootDomNode: n,
        mask: f,
        zIndex: p,
        transitionName: s,
        maskAnimation: u,
        maskTransitionName: d,
        class: a,
        style: c,
        onAlign: r.onPopupAlign || Qu
      }, e), {
        ref: this.setPopupRef,
        mobile: x,
        forceRender: $
      });
      return w(Ry, S, {
        default: this.$slots.popup || (() => Xp(this, "popup"))
      });
    },
    attachParent(e) {
      Me.cancel(this.attachId);
      const {
        getPopupContainer: t,
        getDocument: n
      } = this.$props, r = this.getRootDomNode();
      let o;
      t ? (r || t.length === 0) && (o = t(r)) : o = n(this.getRootDomNode()).body, o ? o.appendChild(e) : this.attachId = Me(() => {
        this.attachParent(e);
      });
    },
    getContainer() {
      const {
        $props: e
      } = this, {
        getDocument: t
      } = e, n = t(this.getRootDomNode()).createElement("div");
      return n.style.position = "absolute", n.style.top = "0", n.style.left = "0", n.style.width = "100%", this.attachParent(n), n;
    },
    setPopupVisible(e, t) {
      const {
        alignPoint: n,
        sPopupVisible: r,
        onPopupVisibleChange: o
      } = this;
      this.clearDelayTimer(), r !== e && (kp(this, "popupVisible") || this.setState({
        sPopupVisible: e,
        prevPopupVisible: r
      }), o && o(e)), n && t && e && this.setPoint(t);
    },
    setPoint(e) {
      const {
        alignPoint: t
      } = this.$props;
      !t || !e || this.setState({
        point: {
          pageX: e.pageX,
          pageY: e.pageY
        }
      });
    },
    handlePortalUpdate() {
      this.prevPopupVisible !== this.sPopupVisible && this.afterPopupVisibleChange(this.sPopupVisible);
    },
    delaySetPopupVisible(e, t, n) {
      const r = t * 1e3;
      if (this.clearDelayTimer(), r) {
        const o = n ? {
          pageX: n.pageX,
          pageY: n.pageY
        } : null;
        this.delayTimer = setTimeout(() => {
          this.setPopupVisible(e, o), this.clearDelayTimer();
        }, r);
      } else
        this.setPopupVisible(e, n);
    },
    clearDelayTimer() {
      this.delayTimer && (clearTimeout(this.delayTimer), this.delayTimer = null);
    },
    clearOutsideHandler() {
      this.clickOutsideHandler && (this.clickOutsideHandler.remove(), this.clickOutsideHandler = null), this.contextmenuOutsideHandler1 && (this.contextmenuOutsideHandler1.remove(), this.contextmenuOutsideHandler1 = null), this.contextmenuOutsideHandler2 && (this.contextmenuOutsideHandler2.remove(), this.contextmenuOutsideHandler2 = null), this.touchOutsideHandler && (this.touchOutsideHandler.remove(), this.touchOutsideHandler = null);
    },
    createTwoChains(e) {
      let t = () => {
      };
      const n = al(this);
      return this.childOriginEvents[e] && n[e] ? this[`fire${e}`] : (t = this.childOriginEvents[e] || n[e] || t, t);
    },
    isClickToShow() {
      const {
        action: e,
        showAction: t
      } = this.$props;
      return e.indexOf("click") !== -1 || t.indexOf("click") !== -1;
    },
    isContextMenuOnly() {
      const {
        action: e
      } = this.$props;
      return e === "contextmenu" || e.length === 1 && e[0] === "contextmenu";
    },
    isContextmenuToShow() {
      const {
        action: e,
        showAction: t
      } = this.$props;
      return e.indexOf("contextmenu") !== -1 || t.indexOf("contextmenu") !== -1;
    },
    isClickToHide() {
      const {
        action: e,
        hideAction: t
      } = this.$props;
      return e.indexOf("click") !== -1 || t.indexOf("click") !== -1;
    },
    isMouseEnterToShow() {
      const {
        action: e,
        showAction: t
      } = this.$props;
      return e.indexOf("hover") !== -1 || t.indexOf("mouseenter") !== -1;
    },
    isMouseLeaveToHide() {
      const {
        action: e,
        hideAction: t
      } = this.$props;
      return e.indexOf("hover") !== -1 || t.indexOf("mouseleave") !== -1;
    },
    isFocusToShow() {
      const {
        action: e,
        showAction: t
      } = this.$props;
      return e.indexOf("focus") !== -1 || t.indexOf("focus") !== -1;
    },
    isBlurToHide() {
      const {
        action: e,
        hideAction: t
      } = this.$props;
      return e.indexOf("focus") !== -1 || t.indexOf("blur") !== -1;
    },
    forcePopupAlign() {
      var e;
      this.$data.sPopupVisible && ((e = this.popupRef) === null || e === void 0 || e.forceAlign());
    },
    fireEvents(e, t) {
      this.childOriginEvents[e] && this.childOriginEvents[e](t);
      const n = this.$props[e] || this.$attrs[e];
      n && n(t);
    },
    close() {
      this.setPopupVisible(!1);
    }
  },
  render() {
    const {
      $attrs: e
    } = this, t = Xt(Gp(this)), {
      alignPoint: n,
      getPopupContainer: r
    } = this.$props, o = t[0];
    this.childOriginEvents = al(o);
    const i = {
      key: "trigger"
    };
    this.isContextmenuToShow() ? i.onContextmenu = this.onContextmenu : i.onContextmenu = this.createTwoChains("onContextmenu"), this.isClickToHide() || this.isClickToShow() ? (i.onClick = this.onClick, i.onMousedown = this.onMousedown, i[Rt ? "onTouchstartPassive" : "onTouchstart"] = this.onTouchstart) : (i.onClick = this.createTwoChains("onClick"), i.onMousedown = this.createTwoChains("onMousedown"), i[Rt ? "onTouchstartPassive" : "onTouchstart"] = this.createTwoChains("onTouchstart")), this.isMouseEnterToShow() ? (i.onMouseenter = this.onMouseenter, n && (i.onMousemove = this.onMouseMove)) : i.onMouseenter = this.createTwoChains("onMouseenter"), this.isMouseLeaveToHide() ? i.onMouseleave = this.onMouseleave : i.onMouseleave = this.createTwoChains("onMouseleave"), this.isFocusToShow() || this.isBlurToHide() ? (i.onFocus = this.onFocus, i.onBlur = this.onBlur) : (i.onFocus = this.createTwoChains("onFocus"), i.onBlur = (c) => {
      c && (!c.relatedTarget || !vt(c.target, c.relatedTarget)) && this.createTwoChains("onBlur")(c);
    });
    const a = Y(o && o.props && o.props.class, e.class);
    a && (i.class = a);
    const l = Qr(o, m(m({}, i), {
      ref: "triggerRef"
    }), !0, !0), s = w(Sf, {
      key: "portal",
      getContainer: r && (() => r(this.getRootDomNode())),
      didUpdate: this.handlePortalUpdate,
      visible: this.$data.sPopupVisible
    }, {
      default: this.getComponent
    });
    return w(Te, null, [l, s]);
  }
}), W = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,
  /**
   * BACKSPACE
   */
  BACKSPACE: 8,
  /**
   * TAB
   */
  TAB: 9,
  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12,
  /**
   * ENTER
   */
  ENTER: 13,
  /**
   * SHIFT
   */
  SHIFT: 16,
  /**
   * CTRL
   */
  CTRL: 17,
  /**
   * ALT
   */
  ALT: 18,
  /**
   * PAUSE
   */
  PAUSE: 19,
  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,
  /**
   * ESC
   */
  ESC: 27,
  /**
   * SPACE
   */
  SPACE: 32,
  /**
   * PAGE_UP
   */
  PAGE_UP: 33,
  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34,
  /**
   * END
   */
  END: 35,
  /**
   * HOME
   */
  HOME: 36,
  /**
   * LEFT
   */
  LEFT: 37,
  /**
   * UP
   */
  UP: 38,
  /**
   * RIGHT
   */
  RIGHT: 39,
  /**
   * DOWN
   */
  DOWN: 40,
  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,
  /**
   * INSERT
   */
  INSERT: 45,
  /**
   * DELETE
   */
  DELETE: 46,
  /**
   * ZERO
   */
  ZERO: 48,
  /**
   * ONE
   */
  ONE: 49,
  /**
   * TWO
   */
  TWO: 50,
  /**
   * THREE
   */
  THREE: 51,
  /**
   * FOUR
   */
  FOUR: 52,
  /**
   * FIVE
   */
  FIVE: 53,
  /**
   * SIX
   */
  SIX: 54,
  /**
   * SEVEN
   */
  SEVEN: 55,
  /**
   * EIGHT
   */
  EIGHT: 56,
  /**
   * NINE
   */
  NINE: 57,
  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63,
  /**
   * A
   */
  A: 65,
  /**
   * B
   */
  B: 66,
  /**
   * C
   */
  C: 67,
  /**
   * D
   */
  D: 68,
  /**
   * E
   */
  E: 69,
  /**
   * F
   */
  F: 70,
  /**
   * G
   */
  G: 71,
  /**
   * H
   */
  H: 72,
  /**
   * I
   */
  I: 73,
  /**
   * J
   */
  J: 74,
  /**
   * K
   */
  K: 75,
  /**
   * L
   */
  L: 76,
  /**
   * M
   */
  M: 77,
  /**
   * N
   */
  N: 78,
  /**
   * O
   */
  O: 79,
  /**
   * P
   */
  P: 80,
  /**
   * Q
   */
  Q: 81,
  /**
   * R
   */
  R: 82,
  /**
   * S
   */
  S: 83,
  /**
   * T
   */
  T: 84,
  /**
   * U
   */
  U: 85,
  /**
   * V
   */
  V: 86,
  /**
   * W
   */
  W: 87,
  /**
   * X
   */
  X: 88,
  /**
   * Y
   */
  Y: 89,
  /**
   * Z
   */
  Z: 90,
  /**
   * META
   */
  META: 91,
  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,
  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,
  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,
  /**
   * NUM_ONE
   */
  NUM_ONE: 97,
  /**
   * NUM_TWO
   */
  NUM_TWO: 98,
  /**
   * NUM_THREE
   */
  NUM_THREE: 99,
  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,
  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,
  /**
   * NUM_SIX
   */
  NUM_SIX: 102,
  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,
  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,
  /**
   * NUM_NINE
   */
  NUM_NINE: 105,
  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,
  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,
  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,
  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,
  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,
  /**
   * F1
   */
  F1: 112,
  /**
   * F2
   */
  F2: 113,
  /**
   * F3
   */
  F3: 114,
  /**
   * F4
   */
  F4: 115,
  /**
   * F5
   */
  F5: 116,
  /**
   * F6
   */
  F6: 117,
  /**
   * F7
   */
  F7: 118,
  /**
   * F8
   */
  F8: 119,
  /**
   * F9
   */
  F9: 120,
  /**
   * F10
   */
  F10: 121,
  /**
   * F11
   */
  F11: 122,
  /**
   * F12
   */
  F12: 123,
  /**
   * NUMLOCK
   */
  NUMLOCK: 144,
  /**
   * SEMICOLON
   */
  SEMICOLON: 186,
  /**
   * DASH
   */
  DASH: 189,
  /**
   * EQUALS
   */
  EQUALS: 187,
  /**
   * COMMA
   */
  COMMA: 188,
  /**
   * PERIOD
   */
  PERIOD: 190,
  /**
   * SLASH
   */
  SLASH: 191,
  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192,
  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222,
  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219,
  /**
   * BACKSLASH
   */
  BACKSLASH: 220,
  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221,
  /**
   * WIN_KEY
   */
  WIN_KEY: 224,
  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224,
  /**
   * WIN_IME
   */
  WIN_IME: 229,
  // ======================== Function ========================
  /**
   * whether text and modified key is entered at the same time.
   */
  isTextModifyingKeyEvent: function(t) {
    const {
      keyCode: n
    } = t;
    if (t.altKey && !t.ctrlKey || t.metaKey || // Function keys don't generate text
    n >= W.F1 && n <= W.F12)
      return !1;
    switch (n) {
      case W.ALT:
      case W.CAPS_LOCK:
      case W.CONTEXT_MENU:
      case W.CTRL:
      case W.DOWN:
      case W.END:
      case W.ESC:
      case W.HOME:
      case W.INSERT:
      case W.LEFT:
      case W.MAC_FF_META:
      case W.META:
      case W.NUMLOCK:
      case W.NUM_CENTER:
      case W.PAGE_DOWN:
      case W.PAGE_UP:
      case W.PAUSE:
      case W.PRINT_SCREEN:
      case W.RIGHT:
      case W.SHIFT:
      case W.UP:
      case W.WIN_KEY:
      case W.WIN_KEY_RIGHT:
        return !1;
      default:
        return !0;
    }
  },
  /**
   * whether character is entered.
   */
  isCharacterKey: function(t) {
    if (t >= W.ZERO && t <= W.NINE || t >= W.NUM_ZERO && t <= W.NUM_MULTIPLY || t >= W.A && t <= W.Z || window.navigator.userAgent.indexOf("WebKit") !== -1 && t === 0)
      return !0;
    switch (t) {
      case W.SPACE:
      case W.QUESTION_MARK:
      case W.NUM_PLUS:
      case W.NUM_MINUS:
      case W.NUM_PERIOD:
      case W.NUM_DIVISION:
      case W.SEMICOLON:
      case W.DASH:
      case W.EQUALS:
      case W.COMMA:
      case W.PERIOD:
      case W.SLASH:
      case W.APOSTROPHE:
      case W.SINGLE_QUOTE:
      case W.OPEN_SQUARE_BRACKET:
      case W.BACKSLASH:
      case W.CLOSE_SQUARE_BRACKET:
        return !0;
      default:
        return !1;
    }
  }
}, Gy = `accept acceptcharset accesskey action allowfullscreen allowtransparency
alt async autocomplete autofocus autoplay capture cellpadding cellspacing challenge
charset checked classid classname colspan cols content contenteditable contextmenu
controls coords crossorigin data datetime default defer dir disabled download draggable
enctype form formaction formenctype formmethod formnovalidate formtarget frameborder
headers height hidden high href hreflang htmlfor for httpequiv icon id inputmode integrity
is keyparams keytype kind label lang list loop low manifest marginheight marginwidth max maxlength media
mediagroup method min minlength multiple muted name novalidate nonce open
optimum pattern placeholder poster preload radiogroup readonly rel required
reversed role rowspan rows sandbox scope scoped scrolling seamless selected
shape size sizes span spellcheck src srcdoc srclang srcset start step style
summary tabindex target title type usemap value width wmode wrap`, Uy = `onCopy onCut onPaste onCompositionend onCompositionstart onCompositionupdate onKeydown
    onKeypress onKeyup onFocus onBlur onChange onInput onSubmit onClick onContextmenu onDoubleclick onDblclick
    onDrag onDragend onDragenter onDragexit onDragleave onDragover onDragstart onDrop onMousedown
    onMouseenter onMouseleave onMousemove onMouseout onMouseover onMouseup onSelect onTouchcancel
    onTouchend onTouchmove onTouchstart onTouchstartPassive onTouchmovePassive onScroll onWheel onAbort onCanplay onCanplaythrough
    onDurationchange onEmptied onEncrypted onEnded onError onLoadeddata onLoadedmetadata
    onLoadstart onPause onPlay onPlaying onProgress onRatechange onSeeked onSeeking onStalled onSuspend onTimeupdate onVolumechange onWaiting onLoad onError`, vs = `${Gy} ${Uy}`.split(/[\s\n]+/), Xy = "aria-", Ky = "data-";
function ys(e, t) {
  return e.indexOf(t) === 0;
}
function Yy(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n;
  t === !1 ? n = {
    aria: !0,
    data: !0,
    attr: !0
  } : t === !0 ? n = {
    aria: !0
  } : n = m({}, t);
  const r = {};
  return Object.keys(e).forEach((o) => {
    // Aria
    (n.aria && (o === "role" || ys(o, Xy)) || // Data
    n.data && ys(o, Ky) || // Attr
    n.attr && (vs.includes(o) || vs.includes(o.toLowerCase()))) && (r[o] = e[o]);
  }), r;
}
function Mt(e) {
  const t = typeof e == "function" ? e() : e, n = X(t);
  function r(o) {
    n.value = o;
  }
  return [n, r];
}
var Qy = Symbol("iconContext"), Of = function() {
  return ve(Qy, {
    prefixCls: X("anticon"),
    rootClassName: X(""),
    csp: X()
  });
};
function Aa() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Zy(e, t) {
  return e && e.contains ? e.contains(t) : !1;
}
var bs = "data-vc-order", Jy = "vc-icon-key", Fi = /* @__PURE__ */ new Map();
function Tf() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : Jy;
}
function Ia(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function eb(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function Pf(e) {
  return Array.from((Fi.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function Ef(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Aa())
    return null;
  var n = t.csp, r = t.prepend, o = document.createElement("style");
  o.setAttribute(bs, eb(r)), n && n.nonce && (o.nonce = n.nonce), o.innerHTML = e;
  var i = Ia(t), a = i.firstChild;
  if (r) {
    if (r === "queue") {
      var l = Pf(i).filter(function(s) {
        return ["prepend", "prependQueue"].includes(s.getAttribute(bs));
      });
      if (l.length)
        return i.insertBefore(o, l[l.length - 1].nextSibling), o;
    }
    i.insertBefore(o, a);
  } else
    i.appendChild(o);
  return o;
}
function tb(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = Ia(t);
  return Pf(n).find(function(r) {
    return r.getAttribute(Tf(t)) === e;
  });
}
function nb(e, t) {
  var n = Fi.get(e);
  if (!n || !Zy(document, n)) {
    var r = Ef("", t), o = r.parentNode;
    Fi.set(e, o), e.removeChild(r);
  }
}
function rb(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = Ia(n);
  nb(r, n);
  var o = tb(t, n);
  if (o)
    return n.csp && n.csp.nonce && o.nonce !== n.csp.nonce && (o.nonce = n.csp.nonce), o.innerHTML !== e && (o.innerHTML = e), o;
  var i = Ef(e, n);
  return i.setAttribute(Tf(n), t), i;
}
function Cs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      ob(e, o, n[o]);
    });
  }
  return e;
}
function ob(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function ib(e, t) {
  process.env.NODE_ENV !== "production" && !e && console !== void 0 && console.error("Warning: ".concat(t));
}
function ab(e, t) {
  ib(e, "[@ant-design/icons-vue] ".concat(t));
}
function xs(e) {
  return typeof e == "object" && typeof e.name == "string" && typeof e.theme == "string" && (typeof e.icon == "object" || typeof e.icon == "function");
}
function Ni(e, t, n) {
  return n ? oi(e.tag, Cs({
    key: t
  }, n, e.attrs), (e.children || []).map(function(r, o) {
    return Ni(r, "".concat(t, "-").concat(e.tag, "-").concat(o));
  })) : oi(e.tag, Cs({
    key: t
  }, e.attrs), (e.children || []).map(function(r, o) {
    return Ni(r, "".concat(t, "-").concat(e.tag, "-").concat(o));
  }));
}
function _f(e) {
  return kt(e)[0];
}
function Af(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var lb = `
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`;
function If(e) {
  return e && e.getRootNode && e.getRootNode();
}
function sb(e) {
  return Aa() ? If(e) instanceof ShadowRoot : !1;
}
function cb(e) {
  return sb(e) ? If(e) : null;
}
var ub = function() {
  var t = Of(), n = t.prefixCls, r = t.csp, o = $n(), i = lb;
  n && (i = i.replace(/anticon/g, n.value)), Le(function() {
    if (Aa()) {
      var a = o.vnode.el, l = cb(a);
      rb(i, "@ant-design-vue-icons", {
        prepend: !0,
        csp: r.value,
        attachTo: l
      });
    }
  });
}, fb = ["icon", "primaryColor", "secondaryColor"];
function db(e, t) {
  if (e == null)
    return {};
  var n = pb(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function pb(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function jr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      mb(e, o, n[o]);
    });
  }
  return e;
}
function mb(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Hn = Ye({
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
});
function gb(e) {
  var t = e.primaryColor, n = e.secondaryColor;
  Hn.primaryColor = t, Hn.secondaryColor = n || _f(t), Hn.calculated = !!n;
}
function hb() {
  return jr({}, Hn);
}
var Tt = function(t, n) {
  var r = jr({}, t, n.attrs), o = r.icon, i = r.primaryColor, a = r.secondaryColor, l = db(r, fb), s = Hn;
  if (i && (s = {
    primaryColor: i,
    secondaryColor: a || _f(i)
  }), ab(xs(o), "icon should be icon definiton, but got ".concat(o)), !xs(o))
    return null;
  var c = o;
  return c && typeof c.icon == "function" && (c = jr({}, c, {
    icon: c.icon(s.primaryColor, s.secondaryColor)
  })), Ni(c.icon, "svg-".concat(c.name), jr({}, l, {
    "data-icon": c.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }));
};
Tt.props = {
  icon: Object,
  primaryColor: String,
  secondaryColor: String,
  focusable: String
};
Tt.inheritAttrs = !1;
Tt.displayName = "IconBase";
Tt.getTwoToneColors = hb;
Tt.setTwoToneColors = gb;
function vb(e, t) {
  return xb(e) || Cb(e, t) || bb(e, t) || yb();
}
function yb() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function bb(e, t) {
  if (e) {
    if (typeof e == "string")
      return ws(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return ws(e, t);
  }
}
function ws(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Cb(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r = [], o = !0, i = !1, a, l;
    try {
      for (n = n.call(e); !(o = (a = n.next()).done) && (r.push(a.value), !(t && r.length === t)); o = !0)
        ;
    } catch (s) {
      i = !0, l = s;
    } finally {
      try {
        !o && n.return != null && n.return();
      } finally {
        if (i)
          throw l;
      }
    }
    return r;
  }
}
function xb(e) {
  if (Array.isArray(e))
    return e;
}
function Mf(e) {
  var t = Af(e), n = vb(t, 2), r = n[0], o = n[1];
  return Tt.setTwoToneColors({
    primaryColor: r,
    secondaryColor: o
  });
}
function wb() {
  var e = Tt.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var $b = V({
  name: "InsertStyles",
  setup: function() {
    return ub(), function() {
      return null;
    };
  }
}), Sb = ["class", "icon", "spin", "rotate", "tabindex", "twoToneColor", "onClick"];
function Ob(e, t) {
  return _b(e) || Eb(e, t) || Pb(e, t) || Tb();
}
function Tb() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Pb(e, t) {
  if (e) {
    if (typeof e == "string")
      return $s(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return $s(e, t);
  }
}
function $s(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Eb(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r = [], o = !0, i = !1, a, l;
    try {
      for (n = n.call(e); !(o = (a = n.next()).done) && (r.push(a.value), !(t && r.length === t)); o = !0)
        ;
    } catch (s) {
      i = !0, l = s;
    } finally {
      try {
        !o && n.return != null && n.return();
      } finally {
        if (i)
          throw l;
      }
    }
    return r;
  }
}
function _b(e) {
  if (Array.isArray(e))
    return e;
}
function Ss(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      jn(e, o, n[o]);
    });
  }
  return e;
}
function jn(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Ab(e, t) {
  if (e == null)
    return {};
  var n = Ib(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Ib(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
Mf(Cg.primary);
var $e = function(t, n) {
  var r, o = Ss({}, t, n.attrs), i = o.class, a = o.icon, l = o.spin, s = o.rotate, c = o.tabindex, f = o.twoToneColor, u = o.onClick, d = Ab(o, Sb), p = Of(), h = p.prefixCls, g = p.rootClassName, x = (r = {}, jn(r, g.value, !!g.value), jn(r, h.value, !0), jn(r, "".concat(h.value, "-").concat(a.name), !!a.name), jn(r, "".concat(h.value, "-spin"), !!l || a.name === "loading"), r), v = c;
  v === void 0 && u && (v = -1);
  var $ = s ? {
    msTransform: "rotate(".concat(s, "deg)"),
    transform: "rotate(".concat(s, "deg)")
  } : void 0, y = Af(f), b = Ob(y, 2), S = b[0], O = b[1];
  return w("span", Ss({
    role: "img",
    "aria-label": a.name
  }, d, {
    onClick: u,
    class: [x, i],
    tabindex: v
  }), [w(Tt, {
    icon: a,
    primaryColor: S,
    secondaryColor: O,
    style: $
  }, null), w($b, null, null)]);
};
$e.props = {
  spin: Boolean,
  rotate: Number,
  icon: Object,
  twoToneColor: [String, Array]
};
$e.displayName = "AntdIcon";
$e.inheritAttrs = !1;
$e.getTwoToneColor = wb;
$e.setTwoToneColor = Mf;
var Mb = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" };
function Os(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      Fb(e, o, n[o]);
    });
  }
  return e;
}
function Fb(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var St = function(t, n) {
  var r = Os({}, t, n.attrs);
  return w($e, Os({}, r, {
    icon: Mb
  }), null);
};
St.displayName = "LoadingOutlined";
St.inheritAttrs = !1;
var Nb = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" };
function Ts(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      Rb(e, o, n[o]);
    });
  }
  return e;
}
function Rb(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Jt = function(t, n) {
  var r = Ts({}, t, n.attrs);
  return w($e, Ts({}, r, {
    icon: Nb
  }), null);
};
Jt.displayName = "CloseOutlined";
Jt.inheritAttrs = !1;
var jb = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" };
function Ps(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      Db(e, o, n[o]);
    });
  }
  return e;
}
function Db(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Pt = function(t, n) {
  var r = Ps({}, t, n.attrs);
  return w($e, Ps({}, r, {
    icon: jb
  }), null);
};
Pt.displayName = "CloseCircleFilled";
Pt.inheritAttrs = !1;
function Ma(e) {
  const t = Symbol("contextKey");
  return {
    useProvide: (o, i) => {
      const a = Ye({});
      return me(t, a), Be(() => {
        m(a, o, i || {});
      }), a;
    },
    useInject: () => ve(t, e) || {}
  };
}
const Jr = Symbol("ContextProps"), eo = Symbol("InternalContextProps"), Bb = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : T(() => !0);
  const n = X(/* @__PURE__ */ new Map()), r = (a, l) => {
    n.value.set(a, l), n.value = new Map(n.value);
  }, o = (a) => {
    n.value.delete(a), n.value = new Map(n.value);
  }, i = $n();
  Q([t, n], () => {
    if (process.env.NODE_ENV !== "production" && t.value && n.value.size > 1) {
      ma(!1, "Form.Item", `FormItem can only collect one field item, you haved set ${[...n.value.values()].map((l) => `\`${l.name}\``).join(", ")} ${n.value.size} field items.
        You can set not need to be collected fields into \`a-form-item-rest\``);
      let a = i;
      for (; a.parent; )
        console.warn("at", a.type), a = a.parent;
    }
  }), me(Jr, e), me(eo, {
    addFormItemField: r,
    removeFormItemField: o
  });
}, Ri = {
  id: T(() => {
  }),
  onFieldBlur: () => {
  },
  onFieldChange: () => {
  },
  clearValidate: () => {
  }
}, ji = {
  addFormItemField: () => {
  },
  removeFormItemField: () => {
  }
}, Lb = () => {
  const e = ve(eo, ji), t = Symbol("FormItemFieldKey"), n = $n();
  return e.addFormItemField(t, n.type), We(() => {
    e.removeFormItemField(t);
  }), me(eo, ji), me(Jr, Ri), ve(Jr, Ri);
}, Di = V({
  compatConfig: {
    MODE: 3
  },
  name: "AFormItemRest",
  setup(e, t) {
    let {
      slots: n
    } = t;
    return me(eo, ji), me(Jr, Ri), () => {
      var r;
      return (r = n.default) === null || r === void 0 ? void 0 : r.call(n);
    };
  }
}), Ff = Ma({}), N2 = V({
  name: "NoFormStatus",
  setup(e, t) {
    let {
      slots: n
    } = t;
    return Ff.useProvide({}), () => {
      var r;
      return (r = n.default) === null || r === void 0 ? void 0 : r.call(n);
    };
  }
}), Hb = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: {
      display: "inline-flex",
      "&-block": {
        display: "flex",
        width: "100%"
      },
      "&-vertical": {
        flexDirection: "column"
      }
    }
  };
}, zb = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: {
      display: "inline-flex",
      "&-rtl": {
        direction: "rtl"
      },
      "&-vertical": {
        flexDirection: "column"
      },
      "&-align": {
        flexDirection: "column",
        "&-center": {
          alignItems: "center"
        },
        "&-start": {
          alignItems: "flex-start"
        },
        "&-end": {
          alignItems: "flex-end"
        },
        "&-baseline": {
          alignItems: "baseline"
        }
      },
      [`${t}-space-item`]: {
        "&:empty": {
          display: "none"
        }
      }
    }
  };
}, Vb = Ze("Space", (e) => [zb(e), Hb(e)]);
var Wb = "[object Symbol]";
function Oo(e) {
  return typeof e == "symbol" || lt(e) && Yt(e) == Wb;
}
function To(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var kb = 1 / 0, Es = ze ? ze.prototype : void 0, _s = Es ? Es.toString : void 0;
function Nf(e) {
  if (typeof e == "string")
    return e;
  if (Ve(e))
    return To(e, Nf) + "";
  if (Oo(e))
    return _s ? _s.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -kb ? "-0" : t;
}
var qb = /\s/;
function Gb(e) {
  for (var t = e.length; t-- && qb.test(e.charAt(t)); )
    ;
  return t;
}
var Ub = /^\s+/;
function Xb(e) {
  return e && e.slice(0, Gb(e) + 1).replace(Ub, "");
}
var As = NaN, Kb = /^[-+]0x[0-9a-f]+$/i, Yb = /^0b[01]+$/i, Qb = /^0o[0-7]+$/i, Zb = parseInt;
function Bi(e) {
  if (typeof e == "number")
    return e;
  if (Oo(e))
    return As;
  if (dt(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = dt(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Xb(e);
  var n = Yb.test(e);
  return n || Qb.test(e) ? Zb(e.slice(2), n ? 2 : 8) : Kb.test(e) ? As : +e;
}
var Is = 1 / 0, Jb = 17976931348623157e292;
function e1(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = Bi(e), e === Is || e === -Is) {
    var t = e < 0 ? -1 : 1;
    return t * Jb;
  }
  return e === e ? e : 0;
}
function t1(e) {
  var t = e1(e), n = t % 1;
  return t === t ? n ? t - n : t : 0;
}
function Fa(e) {
  return e;
}
var Ms = Object.create, n1 = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!dt(t))
      return {};
    if (Ms)
      return Ms(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}();
function r1(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
function o1(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
var i1 = 800, a1 = 16, l1 = Date.now;
function s1(e) {
  var t = 0, n = 0;
  return function() {
    var r = l1(), o = a1 - (r - n);
    if (n = r, o > 0) {
      if (++t >= i1)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function c1(e) {
  return function() {
    return e;
  };
}
var to = function() {
  try {
    var e = Zt(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), u1 = to ? function(e, t) {
  return to(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: c1(t),
    writable: !0
  });
} : Fa, Rf = s1(u1);
function f1(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; )
    ;
  return e;
}
function jf(e, t, n, r) {
  for (var o = e.length, i = n + -1; ++i < o; )
    if (t(e[i], i, e))
      return i;
  return -1;
}
function d1(e) {
  return e !== e;
}
function p1(e, t, n) {
  for (var r = n - 1, o = e.length; ++r < o; )
    if (e[r] === t)
      return r;
  return -1;
}
function m1(e, t, n) {
  return t === t ? p1(e, t, n) : jf(e, d1, n);
}
function g1(e, t) {
  var n = e == null ? 0 : e.length;
  return !!n && m1(e, t, 0) > -1;
}
function Df(e, t, n) {
  t == "__proto__" && to ? to(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
var h1 = Object.prototype, v1 = h1.hasOwnProperty;
function Bf(e, t, n) {
  var r = e[t];
  (!(v1.call(e, t) && wa(r, n)) || n === void 0 && !(t in e)) && Df(e, t, n);
}
function sr(e, t, n, r) {
  var o = !n;
  n || (n = {});
  for (var i = -1, a = t.length; ++i < a; ) {
    var l = t[i], s = void 0;
    s === void 0 && (s = e[l]), o ? Df(n, l, s) : Bf(n, l, s);
  }
  return n;
}
var Fs = Math.max;
function Lf(e, t, n) {
  return t = Fs(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, i = Fs(r.length - t, 0), a = Array(i); ++o < i; )
      a[o] = r[t + o];
    o = -1;
    for (var l = Array(t + 1); ++o < t; )
      l[o] = r[o];
    return l[t] = n(a), r1(e, this, l);
  };
}
function y1(e, t) {
  return Rf(Lf(e, t, Fa), e + "");
}
function b1(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var C1 = Object.prototype, x1 = C1.hasOwnProperty;
function w1(e) {
  if (!dt(e))
    return b1(e);
  var t = wo(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !x1.call(e, r)) || n.push(r);
  return n;
}
function Na(e) {
  return ar(e) ? bf(e, !0) : w1(e);
}
var $1 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, S1 = /^\w*$/;
function Ra(e, t) {
  if (Ve(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Oo(e) ? !0 : S1.test(e) || !$1.test(e) || t != null && e in Object(t);
}
var O1 = "Expected a function";
function ja(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(O1);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], i = n.cache;
    if (i.has(o))
      return i.get(o);
    var a = e.apply(this, r);
    return n.cache = i.set(o, a) || i, a;
  };
  return n.cache = new (ja.Cache || gt)(), n;
}
ja.Cache = gt;
var T1 = 500;
function P1(e) {
  var t = ja(e, function(r) {
    return n.size === T1 && n.clear(), r;
  }), n = t.cache;
  return t;
}
var E1 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, _1 = /\\(\\)?/g, A1 = P1(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(E1, function(n, r, o, i) {
    t.push(o ? i.replace(_1, "$1") : r || n);
  }), t;
});
function I1(e) {
  return e == null ? "" : Nf(e);
}
function Po(e, t) {
  return Ve(e) ? e : Ra(e, t) ? [e] : A1(I1(e));
}
var M1 = 1 / 0;
function cr(e) {
  if (typeof e == "string" || Oo(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -M1 ? "-0" : t;
}
function Da(e, t) {
  t = Po(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[cr(t[n++])];
  return n && n == r ? e : void 0;
}
function F1(e, t, n) {
  var r = e == null ? void 0 : Da(e, t);
  return r === void 0 ? n : r;
}
var Ns = ze ? ze.isConcatSpreadable : void 0;
function N1(e) {
  return Ve(e) || Co(e) || !!(Ns && e && e[Ns]);
}
function R1(e, t, n, r, o) {
  var i = -1, a = e.length;
  for (n || (n = N1), o || (o = []); ++i < a; ) {
    var l = e[i];
    n(l) ? $a(o, l) : o[o.length] = l;
  }
  return o;
}
function j1(e) {
  var t = e == null ? 0 : e.length;
  return t ? R1(e) : [];
}
function D1(e) {
  return Rf(Lf(e, void 0, j1), e + "");
}
var Ba = Cf(Object.getPrototypeOf, Object), B1 = "[object Object]", L1 = Function.prototype, H1 = Object.prototype, Hf = L1.toString, z1 = H1.hasOwnProperty, V1 = Hf.call(Object);
function W1(e) {
  if (!lt(e) || Yt(e) != B1)
    return !1;
  var t = Ba(e);
  if (t === null)
    return !0;
  var n = z1.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && Hf.call(n) == V1;
}
function k1(e, t, n) {
  var r = -1, o = e.length;
  t < 0 && (t = -t > o ? 0 : o + t), n = n > o ? o : n, n < 0 && (n += o), o = t > n ? 0 : n - t >>> 0, t >>>= 0;
  for (var i = Array(o); ++r < o; )
    i[r] = e[r + t];
  return i;
}
function q1(e, t) {
  return e && sr(t, lr(t), e);
}
function G1(e, t) {
  return e && sr(t, Na(t), e);
}
var zf = typeof exports == "object" && exports && !exports.nodeType && exports, Rs = zf && typeof module == "object" && module && !module.nodeType && module, U1 = Rs && Rs.exports === zf, js = U1 ? Je.Buffer : void 0, Ds = js ? js.allocUnsafe : void 0;
function X1(e, t) {
  if (t)
    return e.slice();
  var n = e.length, r = Ds ? Ds(n) : new e.constructor(n);
  return e.copy(r), r;
}
function K1(e, t) {
  return sr(e, Sa(e), t);
}
var Y1 = Object.getOwnPropertySymbols, Vf = Y1 ? function(e) {
  for (var t = []; e; )
    $a(t, Sa(e)), e = Ba(e);
  return t;
} : mf;
function Q1(e, t) {
  return sr(e, Vf(e), t);
}
function Wf(e) {
  return pf(e, Na, Vf);
}
var Z1 = Object.prototype, J1 = Z1.hasOwnProperty;
function eC(e) {
  var t = e.length, n = new e.constructor(t);
  return t && typeof e[0] == "string" && J1.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
function La(e) {
  var t = new e.constructor(e.byteLength);
  return new Zr(t).set(new Zr(e)), t;
}
function tC(e, t) {
  var n = t ? La(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var nC = /\w*$/;
function rC(e) {
  var t = new e.constructor(e.source, nC.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var Bs = ze ? ze.prototype : void 0, Ls = Bs ? Bs.valueOf : void 0;
function oC(e) {
  return Ls ? Object(Ls.call(e)) : {};
}
function iC(e, t) {
  var n = t ? La(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var aC = "[object Boolean]", lC = "[object Date]", sC = "[object Map]", cC = "[object Number]", uC = "[object RegExp]", fC = "[object Set]", dC = "[object String]", pC = "[object Symbol]", mC = "[object ArrayBuffer]", gC = "[object DataView]", hC = "[object Float32Array]", vC = "[object Float64Array]", yC = "[object Int8Array]", bC = "[object Int16Array]", CC = "[object Int32Array]", xC = "[object Uint8Array]", wC = "[object Uint8ClampedArray]", $C = "[object Uint16Array]", SC = "[object Uint32Array]";
function OC(e, t, n) {
  var r = e.constructor;
  switch (t) {
    case mC:
      return La(e);
    case aC:
    case lC:
      return new r(+e);
    case gC:
      return tC(e, n);
    case hC:
    case vC:
    case yC:
    case bC:
    case CC:
    case xC:
    case wC:
    case $C:
    case SC:
      return iC(e, n);
    case sC:
      return new r();
    case cC:
    case dC:
      return new r(e);
    case uC:
      return rC(e);
    case fC:
      return new r();
    case pC:
      return oC(e);
  }
}
function TC(e) {
  return typeof e.constructor == "function" && !wo(e) ? n1(Ba(e)) : {};
}
var PC = "[object Map]";
function EC(e) {
  return lt(e) && De(e) == PC;
}
var Hs = Cn && Cn.isMap, _C = Hs ? xo(Hs) : EC, AC = "[object Set]";
function IC(e) {
  return lt(e) && De(e) == AC;
}
var zs = Cn && Cn.isSet, MC = zs ? xo(zs) : IC, FC = 1, NC = 2, RC = 4, kf = "[object Arguments]", jC = "[object Array]", DC = "[object Boolean]", BC = "[object Date]", LC = "[object Error]", qf = "[object Function]", HC = "[object GeneratorFunction]", zC = "[object Map]", VC = "[object Number]", Gf = "[object Object]", WC = "[object RegExp]", kC = "[object Set]", qC = "[object String]", GC = "[object Symbol]", UC = "[object WeakMap]", XC = "[object ArrayBuffer]", KC = "[object DataView]", YC = "[object Float32Array]", QC = "[object Float64Array]", ZC = "[object Int8Array]", JC = "[object Int16Array]", ex = "[object Int32Array]", tx = "[object Uint8Array]", nx = "[object Uint8ClampedArray]", rx = "[object Uint16Array]", ox = "[object Uint32Array]", re = {};
re[kf] = re[jC] = re[XC] = re[KC] = re[DC] = re[BC] = re[YC] = re[QC] = re[ZC] = re[JC] = re[ex] = re[zC] = re[VC] = re[Gf] = re[WC] = re[kC] = re[qC] = re[GC] = re[tx] = re[nx] = re[rx] = re[ox] = !0;
re[LC] = re[qf] = re[UC] = !1;
function zn(e, t, n, r, o, i) {
  var a, l = t & FC, s = t & NC, c = t & RC;
  if (n && (a = o ? n(e, r, o, i) : n(e)), a !== void 0)
    return a;
  if (!dt(e))
    return e;
  var f = Ve(e);
  if (f) {
    if (a = eC(e), !l)
      return o1(e, a);
  } else {
    var u = De(e), d = u == qf || u == HC;
    if (er(e))
      return X1(e, l);
    if (u == Gf || u == kf || d && !o) {
      if (a = s || d ? {} : TC(e), !l)
        return s ? Q1(e, G1(a, e)) : K1(e, q1(a, e));
    } else {
      if (!re[u])
        return o ? e : {};
      a = OC(e, u, l);
    }
  }
  i || (i = new ot());
  var p = i.get(e);
  if (p)
    return p;
  i.set(e, a), MC(e) ? e.forEach(function(x) {
    a.add(zn(x, t, n, x, e, i));
  }) : _C(e) && e.forEach(function(x, v) {
    a.set(v, zn(x, t, n, v, e, i));
  });
  var h = c ? s ? Wf : Ei : s ? Na : lr, g = f ? void 0 : h(e);
  return f1(g || e, function(x, v) {
    g && (v = x, x = e[v]), Bf(a, v, zn(x, t, n, v, e, i));
  }), a;
}
var ix = 1, ax = 4;
function Dr(e) {
  return zn(e, ix | ax);
}
var lx = 1, sx = 2;
function cx(e, t, n, r) {
  var o = n.length, i = o;
  if (e == null)
    return !i;
  for (e = Object(e); o--; ) {
    var a = n[o];
    if (a[2] ? a[1] !== e[a[0]] : !(a[0] in e))
      return !1;
  }
  for (; ++o < i; ) {
    a = n[o];
    var l = a[0], s = e[l], c = a[1];
    if (a[2]) {
      if (s === void 0 && !(l in e))
        return !1;
    } else {
      var f = new ot(), u;
      if (!(u === void 0 ? $o(c, s, lx | sx, r, f) : u))
        return !1;
    }
  }
  return !0;
}
function Uf(e) {
  return e === e && !dt(e);
}
function ux(e) {
  for (var t = lr(e), n = t.length; n--; ) {
    var r = t[n], o = e[r];
    t[n] = [r, o, Uf(o)];
  }
  return t;
}
function Xf(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function fx(e) {
  var t = ux(e);
  return t.length == 1 && t[0][2] ? Xf(t[0][0], t[0][1]) : function(n) {
    return n === e || cx(n, e, t);
  };
}
function dx(e, t) {
  return e != null && t in Object(e);
}
function px(e, t, n) {
  t = Po(t, e);
  for (var r = -1, o = t.length, i = !1; ++r < o; ) {
    var a = cr(t[r]);
    if (!(i = e != null && n(e, a)))
      break;
    e = e[a];
  }
  return i || ++r != o ? i : (o = e == null ? 0 : e.length, !!o && Oa(o) && vf(a, o) && (Ve(e) || Co(e)));
}
function mx(e, t) {
  return e != null && px(e, t, dx);
}
var gx = 1, hx = 2;
function vx(e, t) {
  return Ra(e) && Uf(t) ? Xf(cr(e), t) : function(n) {
    var r = F1(n, e);
    return r === void 0 && r === t ? mx(n, e) : $o(t, r, gx | hx);
  };
}
function yx(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function bx(e) {
  return function(t) {
    return Da(t, e);
  };
}
function Cx(e) {
  return Ra(e) ? yx(cr(e)) : bx(e);
}
function Kf(e) {
  return typeof e == "function" ? e : e == null ? Fa : typeof e == "object" ? Ve(e) ? vx(e[0], e[1]) : fx(e) : Cx(e);
}
var Yo = function() {
  return Je.Date.now();
}, xx = "Expected a function", wx = Math.max, $x = Math.min;
function Sx(e, t, n) {
  var r, o, i, a, l, s, c = 0, f = !1, u = !1, d = !0;
  if (typeof e != "function")
    throw new TypeError(xx);
  t = Bi(t) || 0, dt(n) && (f = !!n.leading, u = "maxWait" in n, i = u ? wx(Bi(n.maxWait) || 0, t) : i, d = "trailing" in n ? !!n.trailing : d);
  function p(O) {
    var C = r, E = o;
    return r = o = void 0, c = O, a = e.apply(E, C), a;
  }
  function h(O) {
    return c = O, l = setTimeout(v, t), f ? p(O) : a;
  }
  function g(O) {
    var C = O - s, E = O - c, A = t - C;
    return u ? $x(A, i - E) : A;
  }
  function x(O) {
    var C = O - s, E = O - c;
    return s === void 0 || C >= t || C < 0 || u && E >= i;
  }
  function v() {
    var O = Yo();
    if (x(O))
      return $(O);
    l = setTimeout(v, g(O));
  }
  function $(O) {
    return l = void 0, d && r ? p(O) : (r = o = void 0, a);
  }
  function y() {
    l !== void 0 && clearTimeout(l), c = 0, r = s = o = l = void 0;
  }
  function b() {
    return l === void 0 ? a : $(Yo());
  }
  function S() {
    var O = Yo(), C = x(O);
    if (r = arguments, o = this, s = O, C) {
      if (l === void 0)
        return h(s);
      if (u)
        return clearTimeout(l), l = setTimeout(v, t), p(s);
    }
    return l === void 0 && (l = setTimeout(v, t)), a;
  }
  return S.cancel = y, S.flush = b, S;
}
function Ox(e) {
  return lt(e) && ar(e);
}
function Tx(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function Px(e) {
  return function(t, n, r) {
    var o = Object(t);
    if (!ar(t)) {
      var i = Kf(n);
      t = lr(t), n = function(l) {
        return i(o[l], l, o);
      };
    }
    var a = e(t, n, r);
    return a > -1 ? o[i ? t[a] : a] : void 0;
  };
}
var Ex = Math.max;
function _x(e, t, n) {
  var r = e == null ? 0 : e.length;
  if (!r)
    return -1;
  var o = n == null ? 0 : t1(n);
  return o < 0 && (o = Ex(r + o, 0)), jf(e, Kf(t), o);
}
var Ax = Px(_x), Ix = Math.min;
function Mx(e, t, n) {
  for (var r = g1, o = e[0].length, i = e.length, a = i, l = Array(i), s = 1 / 0, c = []; a--; ) {
    var f = e[a];
    a && t && (f = To(f, xo(t))), s = Ix(f.length, s), l[a] = o >= 120 && f.length >= 120 ? new Jn(a && f) : void 0;
  }
  f = e[0];
  var u = -1, d = l[0];
  e:
    for (; ++u < o && c.length < s; ) {
      var p = f[u], h = p;
      if (p = p !== 0 ? p : 0, !(d ? Pi(d, h) : r(c, h))) {
        for (a = i; --a; ) {
          var g = l[a];
          if (!(g ? Pi(g, h) : r(e[a], h)))
            continue e;
        }
        d && d.push(h), c.push(p);
      }
    }
  return c;
}
function Fx(e) {
  return Ox(e) ? e : [];
}
var Nx = y1(function(e) {
  var t = To(e, Fx);
  return t.length && t[0] === e[0] ? Mx(t) : [];
});
function Rx(e, t) {
  return t.length < 2 ? e : Da(e, k1(t, 0, -1));
}
var jx = "[object Map]", Dx = "[object Set]", Bx = Object.prototype, Lx = Bx.hasOwnProperty;
function Yf(e) {
  if (e == null)
    return !0;
  if (ar(e) && (Ve(e) || typeof e == "string" || typeof e.splice == "function" || er(e) || Ta(e) || Co(e)))
    return !e.length;
  var t = De(e);
  if (t == jx || t == Dx)
    return !e.size;
  if (wo(e))
    return !xf(e).length;
  for (var n in e)
    if (Lx.call(e, n))
      return !1;
  return !0;
}
function Hx(e, t) {
  return t = Po(t, e), e = Rx(e, t), e == null || delete e[cr(Tx(t))];
}
function zx(e) {
  return W1(e) ? void 0 : e;
}
var Vx = 1, Wx = 2, kx = 4, qx = D1(function(e, t) {
  var n = {};
  if (e == null)
    return n;
  var r = !1;
  t = To(t, function(i) {
    return i = Po(i, e), r || (r = i.length > 1), i;
  }), sr(e, Wf(e), n), r && (n = zn(n, Vx | Wx | kx, zx));
  for (var o = t.length; o--; )
    Hx(n, t[o]);
  return n;
});
const Gx = () => ({
  compactSize: String,
  compactDirection: H.oneOf(Wt("horizontal", "vertical")).def("horizontal"),
  isFirstItem: Ge(),
  isLastItem: Ge()
}), Eo = Ma(null), Ux = (e, t) => {
  const n = Eo.useInject(), r = T(() => {
    if (!n || Yf(n))
      return "";
    const {
      compactDirection: o,
      isFirstItem: i,
      isLastItem: a
    } = n, l = o === "vertical" ? "-vertical-" : "-";
    return Y({
      [`${e.value}-compact${l}item`]: !0,
      [`${e.value}-compact${l}first-item`]: i,
      [`${e.value}-compact${l}last-item`]: a,
      [`${e.value}-compact${l}item-rtl`]: t.value === "rtl"
    });
  });
  return {
    compactSize: T(() => n == null ? void 0 : n.compactSize),
    compactDirection: T(() => n == null ? void 0 : n.compactDirection),
    compactItemClassnames: r
  };
}, R2 = V({
  name: "NoCompactStyle",
  setup(e, t) {
    let {
      slots: n
    } = t;
    return Eo.useProvide(null), () => {
      var r;
      return (r = n.default) === null || r === void 0 ? void 0 : r.call(n);
    };
  }
}), Xx = () => ({
  prefixCls: String,
  size: {
    type: String
  },
  direction: H.oneOf(Wt("horizontal", "vertical")).def("horizontal"),
  align: H.oneOf(Wt("start", "end", "center", "baseline")),
  block: {
    type: Boolean,
    default: void 0
  }
}), Kx = V({
  name: "CompactItem",
  props: Gx(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return Eo.useProvide(e), () => {
      var r;
      return (r = n.default) === null || r === void 0 ? void 0 : r.call(n);
    };
  }
});
V({
  name: "ASpaceCompact",
  inheritAttrs: !1,
  props: Xx(),
  setup(e, t) {
    let {
      attrs: n,
      slots: r
    } = t;
    const {
      prefixCls: o,
      direction: i
    } = Pe("space-compact", e), a = Eo.useInject(), [l, s] = Vb(o), c = T(() => Y(o.value, s.value, {
      [`${o.value}-rtl`]: i.value === "rtl",
      [`${o.value}-block`]: e.block,
      [`${o.value}-vertical`]: e.direction === "vertical"
    }));
    return () => {
      var f;
      const u = Ue(((f = r.default) === null || f === void 0 ? void 0 : f.call(r)) || []);
      return u.length === 0 ? null : l(w("div", j(j({}, n), {}, {
        class: [c.value, n.class]
      }), [u.map((d, p) => {
        var h;
        const g = d && d.key || `${o.value}-item-${p}`, x = !a || Yf(a);
        return w(Kx, {
          key: g,
          compactSize: (h = e.size) !== null && h !== void 0 ? h : "middle",
          compactDirection: e.direction,
          isFirstItem: p === 0 && (x || (a == null ? void 0 : a.isFirstItem)),
          isLastItem: p === u.length - 1 && (x || (a == null ? void 0 : a.isLastItem))
        }, {
          default: () => [d]
        });
      })]));
    };
  }
});
const Yx = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), Qx = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), Qf = function(e, t, n, r) {
  const i = (arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1) ? "&" : "";
  return {
    [`
      ${i}${e}-enter,
      ${i}${e}-appear
    `]: m(m({}, Yx(r)), {
      animationPlayState: "paused"
    }),
    [`${i}${e}-leave`]: m(m({}, Qx(r)), {
      animationPlayState: "paused"
    }),
    [`
      ${i}${e}-enter${e}-enter-active,
      ${i}${e}-appear${e}-appear-active
    `]: {
      animationName: t,
      animationPlayState: "running"
    },
    [`${i}${e}-leave${e}-leave-active`]: {
      animationName: n,
      animationPlayState: "running",
      pointerEvents: "none"
    }
  };
}, Zx = new se("antFadeIn", {
  "0%": {
    opacity: 0
  },
  "100%": {
    opacity: 1
  }
}), Jx = new se("antFadeOut", {
  "0%": {
    opacity: 1
  },
  "100%": {
    opacity: 0
  }
}), ew = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  const {
    antCls: n
  } = e, r = `${n}-fade`, o = t ? "&" : "";
  return [Qf(r, Zx, Jx, e.motionDurationMid, t), {
    [`
        ${o}${r}-enter,
        ${o}${r}-appear
      `]: {
      opacity: 0,
      animationTimingFunction: "linear"
    },
    [`${o}${r}-leave`]: {
      animationTimingFunction: "linear"
    }
  }];
}, Ha = new se("antZoomIn", {
  "0%": {
    transform: "scale(0.2)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), tw = new se("antZoomOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.2)",
    opacity: 0
  }
}), Vs = new se("antZoomBigIn", {
  "0%": {
    transform: "scale(0.8)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), Ws = new se("antZoomBigOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.8)",
    opacity: 0
  }
}), nw = new se("antZoomUpIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  }
}), rw = new se("antZoomUpOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  }
}), ow = new se("antZoomLeftIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  }
}), iw = new se("antZoomLeftOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  }
}), aw = new se("antZoomRightIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  }
}), lw = new se("antZoomRightOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  }
}), sw = new se("antZoomDownIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  }
}), cw = new se("antZoomDownOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  }
}), uw = {
  zoom: {
    inKeyframes: Ha,
    outKeyframes: tw
  },
  "zoom-big": {
    inKeyframes: Vs,
    outKeyframes: Ws
  },
  "zoom-big-fast": {
    inKeyframes: Vs,
    outKeyframes: Ws
  },
  "zoom-left": {
    inKeyframes: ow,
    outKeyframes: iw
  },
  "zoom-right": {
    inKeyframes: aw,
    outKeyframes: lw
  },
  "zoom-up": {
    inKeyframes: nw,
    outKeyframes: rw
  },
  "zoom-down": {
    inKeyframes: sw,
    outKeyframes: cw
  }
}, Zf = (e, t) => {
  const {
    antCls: n
  } = e, r = `${n}-${t}`, {
    inKeyframes: o,
    outKeyframes: i
  } = uw[t];
  return [Qf(r, o, i, t === "zoom-big-fast" ? e.motionDurationFast : e.motionDurationMid), {
    [`
        ${r}-enter,
        ${r}-appear
      `]: {
      transform: "scale(0)",
      opacity: 0,
      animationTimingFunction: e.motionEaseOutCirc,
      "&-prepare": {
        transform: "none"
      }
    },
    [`${r}-leave`]: {
      animationTimingFunction: e.motionEaseInOutCirc
    }
  }];
}, fw = (e) => ({
  [e.componentCls]: {
    // For common/openAnimation
    [`${e.antCls}-motion-collapse-legacy`]: {
      overflow: "hidden",
      "&-active": {
        transition: `height ${e.motionDurationMid} ${e.motionEaseInOut},
        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`
      }
    },
    [`${e.antCls}-motion-collapse`]: {
      overflow: "hidden",
      transition: `height ${e.motionDurationMid} ${e.motionEaseInOut},
        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`
    }
  }
});
function dw(e, t, n) {
  const {
    focusElCls: r,
    focus: o,
    borderElCls: i
  } = n, a = i ? "> *" : "", l = ["hover", o ? "focus" : null, "active"].filter(Boolean).map((s) => `&:${s} ${a}`).join(",");
  return {
    [`&-item:not(${t}-last-item)`]: {
      marginInlineEnd: -e.lineWidth
    },
    "&-item": m(m({
      [l]: {
        zIndex: 2
      }
    }, r ? {
      [`&${r}`]: {
        zIndex: 2
      }
    } : {}), {
      [`&[disabled] ${a}`]: {
        zIndex: 0
      }
    })
  };
}
function pw(e, t, n) {
  const {
    borderElCls: r
  } = n, o = r ? `> ${r}` : "";
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item) ${o}`]: {
      borderRadius: 0
    },
    [`&-item:not(${t}-last-item)${t}-first-item`]: {
      [`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`&-item:not(${t}-first-item)${t}-last-item`]: {
      [`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    }
  };
}
function mw(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    focus: !0
  };
  const {
    componentCls: n
  } = e, r = `${n}-compact`;
  return {
    [r]: m(m({}, dw(e, r, t)), pw(n, r, t))
  };
}
var gw = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z" } }, { tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }] }, name: "check-circle", theme: "outlined" };
function ks(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      hw(e, o, n[o]);
    });
  }
  return e;
}
function hw(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var za = function(t, n) {
  var r = ks({}, t, n.attrs);
  return w($e, ks({}, r, {
    icon: gw
  }), null);
};
za.displayName = "CheckCircleOutlined";
za.inheritAttrs = !1;
var vw = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { tag: "path", attrs: { d: "M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z" } }] }, name: "exclamation-circle", theme: "outlined" };
function qs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      yw(e, o, n[o]);
    });
  }
  return e;
}
function yw(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Va = function(t, n) {
  var r = qs({}, t, n.attrs);
  return w($e, qs({}, r, {
    icon: vw
  }), null);
};
Va.displayName = "ExclamationCircleOutlined";
Va.inheritAttrs = !1;
var bw = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { tag: "path", attrs: { d: "M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z" } }] }, name: "info-circle", theme: "outlined" };
function Gs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      Cw(e, o, n[o]);
    });
  }
  return e;
}
function Cw(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Wa = function(t, n) {
  var r = Gs({}, t, n.attrs);
  return w($e, Gs({}, r, {
    icon: bw
  }), null);
};
Wa.displayName = "InfoCircleOutlined";
Wa.inheritAttrs = !1;
var xw = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm0 76c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm128.01 198.83c.03 0 .05.01.09.06l45.02 45.01a.2.2 0 01.05.09.12.12 0 010 .07c0 .02-.01.04-.05.08L557.25 512l127.87 127.86a.27.27 0 01.05.06v.02a.12.12 0 010 .07c0 .03-.01.05-.05.09l-45.02 45.02a.2.2 0 01-.09.05.12.12 0 01-.07 0c-.02 0-.04-.01-.08-.05L512 557.25 384.14 685.12c-.04.04-.06.05-.08.05a.12.12 0 01-.07 0c-.03 0-.05-.01-.09-.05l-45.02-45.02a.2.2 0 01-.05-.09.12.12 0 010-.07c0-.02.01-.04.06-.08L466.75 512 338.88 384.14a.27.27 0 01-.05-.06l-.01-.02a.12.12 0 010-.07c0-.03.01-.05.05-.09l45.02-45.02a.2.2 0 01.09-.05.12.12 0 01.07 0c.02 0 .04.01.08.06L512 466.75l127.86-127.86c.04-.05.06-.06.08-.06a.12.12 0 01.07 0z" } }] }, name: "close-circle", theme: "outlined" };
function Us(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      ww(e, o, n[o]);
    });
  }
  return e;
}
function ww(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var ka = function(t, n) {
  var r = Us({}, t, n.attrs);
  return w($e, Us({}, r, {
    icon: xw
  }), null);
};
ka.displayName = "CloseCircleOutlined";
ka.inheritAttrs = !1;
var $w = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" };
function Xs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      Sw(e, o, n[o]);
    });
  }
  return e;
}
function Sw(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Et = function(t, n) {
  var r = Xs({}, t, n.attrs);
  return w($e, Xs({}, r, {
    icon: $w
  }), null);
};
Et.displayName = "CheckCircleFilled";
Et.inheritAttrs = !1;
var Ow = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" };
function Ks(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      Tw(e, o, n[o]);
    });
  }
  return e;
}
function Tw(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var _t = function(t, n) {
  var r = Ks({}, t, n.attrs);
  return w($e, Ks({}, r, {
    icon: Ow
  }), null);
};
_t.displayName = "ExclamationCircleFilled";
_t.inheritAttrs = !1;
var Pw = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" };
function Ys(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      Ew(e, o, n[o]);
    });
  }
  return e;
}
function Ew(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var en = function(t, n) {
  var r = Ys({}, t, n.attrs);
  return w($e, Ys({}, r, {
    icon: Pw
  }), null);
};
en.displayName = "InfoCircleFilled";
en.inheritAttrs = !1;
const Or = ["xxxl", "xxl", "xl", "lg", "md", "sm", "xs"], _w = (e) => ({
  xs: `(max-width: ${e.screenXSMax}px)`,
  sm: `(min-width: ${e.screenSM}px)`,
  md: `(min-width: ${e.screenMD}px)`,
  lg: `(min-width: ${e.screenLG}px)`,
  xl: `(min-width: ${e.screenXL}px)`,
  xxl: `(min-width: ${e.screenXXL}px)`,
  xxxl: `{min-width: ${e.screenXXXL}px}`
});
function Aw() {
  const [, e] = Tn();
  return T(() => {
    const t = _w(e.value), n = /* @__PURE__ */ new Map();
    let r = -1, o = {};
    return {
      matchHandlers: {},
      dispatch(i) {
        return o = i, n.forEach((a) => a(o)), n.size >= 1;
      },
      subscribe(i) {
        return n.size || this.register(), r += 1, n.set(r, i), i(o), r;
      },
      unsubscribe(i) {
        n.delete(i), n.size || this.unregister();
      },
      unregister() {
        Object.keys(t).forEach((i) => {
          const a = t[i], l = this.matchHandlers[a];
          l == null || l.mql.removeListener(l == null ? void 0 : l.listener);
        }), n.clear();
      },
      register() {
        Object.keys(t).forEach((i) => {
          const a = t[i], l = (c) => {
            let {
              matches: f
            } = c;
            this.dispatch(m(m({}, o), {
              [i]: f
            }));
          }, s = window.matchMedia(a);
          s.addListener(l), this.matchHandlers[a] = {
            mql: s,
            listener: l
          }, l(s);
        });
      },
      responsiveMap: t
    };
  });
}
const Re = {
  adjustX: 1,
  adjustY: 1
}, je = [0, 0], Jf = {
  left: {
    points: ["cr", "cl"],
    overflow: Re,
    offset: [-4, 0],
    targetOffset: je
  },
  right: {
    points: ["cl", "cr"],
    overflow: Re,
    offset: [4, 0],
    targetOffset: je
  },
  top: {
    points: ["bc", "tc"],
    overflow: Re,
    offset: [0, -4],
    targetOffset: je
  },
  bottom: {
    points: ["tc", "bc"],
    overflow: Re,
    offset: [0, 4],
    targetOffset: je
  },
  topLeft: {
    points: ["bl", "tl"],
    overflow: Re,
    offset: [0, -4],
    targetOffset: je
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: Re,
    offset: [-4, 0],
    targetOffset: je
  },
  topRight: {
    points: ["br", "tr"],
    overflow: Re,
    offset: [0, -4],
    targetOffset: je
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: Re,
    offset: [4, 0],
    targetOffset: je
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: Re,
    offset: [0, 4],
    targetOffset: je
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: Re,
    offset: [4, 0],
    targetOffset: je
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: Re,
    offset: [0, 4],
    targetOffset: je
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: Re,
    offset: [-4, 0],
    targetOffset: je
  }
}, Iw = {
  prefixCls: String,
  id: String,
  overlayInnerStyle: H.any
}, Mw = V({
  compatConfig: {
    MODE: 3
  },
  name: "TooltipContent",
  props: Iw,
  setup(e, t) {
    let {
      slots: n
    } = t;
    return () => {
      var r;
      return w("div", {
        class: `${e.prefixCls}-inner`,
        id: e.id,
        role: "tooltip",
        style: e.overlayInnerStyle
      }, [(r = n.overlay) === null || r === void 0 ? void 0 : r.call(n)]);
    };
  }
});
var Fw = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
function Qs() {
}
const Nw = V({
  compatConfig: {
    MODE: 3
  },
  name: "Tooltip",
  inheritAttrs: !1,
  props: {
    trigger: H.any.def(["hover"]),
    defaultVisible: {
      type: Boolean,
      default: void 0
    },
    visible: {
      type: Boolean,
      default: void 0
    },
    placement: H.string.def("right"),
    transitionName: String,
    animation: H.any,
    afterVisibleChange: H.func.def(() => {
    }),
    overlayStyle: {
      type: Object,
      default: void 0
    },
    overlayClassName: String,
    prefixCls: H.string.def("rc-tooltip"),
    mouseEnterDelay: H.number.def(0.1),
    mouseLeaveDelay: H.number.def(0.1),
    getPopupContainer: Function,
    destroyTooltipOnHide: {
      type: Boolean,
      default: !1
    },
    align: H.object.def(() => ({})),
    arrowContent: H.any.def(null),
    tipId: String,
    builtinPlacements: H.object,
    overlayInnerStyle: {
      type: Object,
      default: void 0
    },
    popupVisible: {
      type: Boolean,
      default: void 0
    },
    onVisibleChange: Function,
    onPopupAlign: Function,
    arrow: {
      type: Boolean,
      default: !0
    }
  },
  setup(e, t) {
    let {
      slots: n,
      attrs: r,
      expose: o
    } = t;
    const i = L(), a = () => {
      const {
        prefixCls: f,
        tipId: u,
        overlayInnerStyle: d
      } = e;
      return [e.arrow ? w("div", {
        class: `${f}-arrow`,
        key: "arrow"
      }, [Qp(n, e, "arrowContent")]) : null, w(Mw, {
        key: "content",
        prefixCls: f,
        id: u,
        overlayInnerStyle: d
      }, {
        overlay: n.overlay
      })];
    };
    o({
      getPopupDomNode: () => i.value.getPopupDomNode(),
      triggerDOM: i,
      forcePopupAlign: () => {
        var f;
        return (f = i.value) === null || f === void 0 ? void 0 : f.forcePopupAlign();
      }
    });
    const s = L(!1), c = L(!1);
    return Be(() => {
      const {
        destroyTooltipOnHide: f
      } = e;
      if (typeof f == "boolean")
        s.value = f;
      else if (f && typeof f == "object") {
        const {
          keepParent: u
        } = f;
        s.value = u === !0, c.value = u === !1;
      }
    }), () => {
      const {
        overlayClassName: f,
        trigger: u,
        mouseEnterDelay: d,
        mouseLeaveDelay: p,
        overlayStyle: h,
        prefixCls: g,
        afterVisibleChange: x,
        transitionName: v,
        animation: $,
        placement: y,
        align: b,
        destroyTooltipOnHide: S,
        defaultVisible: O
      } = e, C = Fw(e, ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "afterVisibleChange", "transitionName", "animation", "placement", "align", "destroyTooltipOnHide", "defaultVisible"]), E = m({}, C);
      e.visible !== void 0 && (E.popupVisible = e.visible);
      const A = m(m(m({
        popupClassName: f,
        prefixCls: g,
        action: u,
        builtinPlacements: Jf,
        popupPlacement: y,
        popupAlign: b,
        afterPopupVisibleChange: x,
        popupTransitionName: v,
        popupAnimation: $,
        defaultPopupVisible: O,
        destroyPopupOnHide: s.value,
        autoDestroy: c.value,
        mouseLeaveDelay: p,
        popupStyle: h,
        mouseEnterDelay: d
      }, E), r), {
        onPopupVisibleChange: e.onVisibleChange || Qs,
        onPopupAlign: e.onPopupAlign || Qs,
        ref: i,
        arrow: !!e.arrow,
        popup: a()
      });
      return w(qy, A, {
        default: n.default
      });
    };
  }
}), Rw = () => ({
  trigger: [String, Array],
  open: {
    type: Boolean,
    default: void 0
  },
  /** @deprecated Please use `open` instead. */
  visible: {
    type: Boolean,
    default: void 0
  },
  placement: String,
  color: String,
  transitionName: String,
  overlayStyle: te(),
  overlayInnerStyle: te(),
  overlayClassName: String,
  openClassName: String,
  prefixCls: String,
  mouseEnterDelay: Number,
  mouseLeaveDelay: Number,
  getPopupContainer: Function,
  /**@deprecated Please use `arrow={{ pointAtCenter: true }}` instead. */
  arrowPointAtCenter: {
    type: Boolean,
    default: void 0
  },
  arrow: {
    type: [Boolean, Object],
    default: !0
  },
  autoAdjustOverflow: {
    type: [Boolean, Object],
    default: void 0
  },
  destroyTooltipOnHide: {
    type: Boolean,
    default: void 0
  },
  align: te(),
  builtinPlacements: te(),
  children: Array,
  /** @deprecated Please use `onOpenChange` instead. */
  onVisibleChange: Function,
  /** @deprecated Please use `onUpdate:open` instead. */
  "onUpdate:visible": Function,
  onOpenChange: Function,
  "onUpdate:open": Function
}), jw = {
  adjustX: 1,
  adjustY: 1
}, Zs = {
  adjustX: 0,
  adjustY: 0
}, Dw = [0, 0];
function Js(e) {
  return typeof e == "boolean" ? e ? jw : Zs : m(m({}, Zs), e);
}
function Bw(e) {
  const {
    arrowWidth: t = 4,
    horizontalArrowShift: n = 16,
    verticalArrowShift: r = 8,
    autoAdjustOverflow: o,
    arrowPointAtCenter: i
  } = e, a = {
    left: {
      points: ["cr", "cl"],
      offset: [-4, 0]
    },
    right: {
      points: ["cl", "cr"],
      offset: [4, 0]
    },
    top: {
      points: ["bc", "tc"],
      offset: [0, -4]
    },
    bottom: {
      points: ["tc", "bc"],
      offset: [0, 4]
    },
    topLeft: {
      points: ["bl", "tc"],
      offset: [-(n + t), -4]
    },
    leftTop: {
      points: ["tr", "cl"],
      offset: [-4, -(r + t)]
    },
    topRight: {
      points: ["br", "tc"],
      offset: [n + t, -4]
    },
    rightTop: {
      points: ["tl", "cr"],
      offset: [4, -(r + t)]
    },
    bottomRight: {
      points: ["tr", "bc"],
      offset: [n + t, 4]
    },
    rightBottom: {
      points: ["bl", "cr"],
      offset: [4, r + t]
    },
    bottomLeft: {
      points: ["tl", "bc"],
      offset: [-(n + t), 4]
    },
    leftBottom: {
      points: ["br", "cl"],
      offset: [-4, r + t]
    }
  };
  return Object.keys(a).forEach((l) => {
    a[l] = i ? m(m({}, a[l]), {
      overflow: Js(o),
      targetOffset: Dw
    }) : m(m({}, Jf[l]), {
      overflow: Js(o)
    }), a[l].ignoreShake = !0;
  }), a;
}
function Lw() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  for (let t = 0, n = e.length; t < n; t++)
    if (e[t] !== void 0)
      return e[t];
}
const Hw = Xr.map((e) => `${e}-inverse`), zw = ["success", "processing", "error", "default", "warning"];
function Vw(e) {
  return (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0) ? [...Hw, ...Xr].includes(e) : Xr.includes(e);
}
function j2(e) {
  return zw.includes(e);
}
function Ww(e, t) {
  const n = Vw(t), r = Y({
    [`${e}-${t}`]: t && n
  }), o = {}, i = {};
  return t && !n && (o.background = t, i["--antd-arrow-background-color"] = t), {
    className: r,
    overlayStyle: o,
    arrowStyle: i
  };
}
function Tr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return e.map((n) => `${t}${n}`).join(",");
}
const ed = 8;
function kw(e) {
  const t = ed, {
    sizePopupArrow: n,
    contentRadius: r,
    borderRadiusOuter: o,
    limitVerticalRadius: i
  } = e, a = n / 2 - Math.ceil(o * (Math.sqrt(2) - 1)), l = (r > 12 ? r + 2 : 12) - a, s = i ? t - a : l;
  return {
    dropdownArrowOffset: l,
    dropdownArrowOffsetVertical: s
  };
}
function qw(e, t) {
  const {
    componentCls: n,
    sizePopupArrow: r,
    marginXXS: o,
    borderRadiusXS: i,
    borderRadiusOuter: a,
    boxShadowPopoverArrow: l
  } = e, {
    colorBg: s,
    showArrowCls: c,
    contentRadius: f = e.borderRadiusLG,
    limitVerticalRadius: u
  } = t, {
    dropdownArrowOffsetVertical: d,
    dropdownArrowOffset: p
  } = kw({
    sizePopupArrow: r,
    contentRadius: f,
    borderRadiusOuter: a,
    limitVerticalRadius: u
  }), h = r / 2 + o;
  return {
    [n]: {
      // ============================ Basic ============================
      [`${n}-arrow`]: [m(m({
        position: "absolute",
        zIndex: 1,
        display: "block"
      }, Fg(r, i, a, s, l)), {
        "&:before": {
          background: s
        }
      })],
      // ========================== Placement ==========================
      // Here handle the arrow position and rotate stuff
      // >>>>> Top
      [[`&-placement-top ${n}-arrow`, `&-placement-topLeft ${n}-arrow`, `&-placement-topRight ${n}-arrow`].join(",")]: {
        bottom: 0,
        transform: "translateY(100%) rotate(180deg)"
      },
      [`&-placement-top ${n}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateX(-50%) translateY(100%) rotate(180deg)"
      },
      [`&-placement-topLeft ${n}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: p
        }
      },
      [`&-placement-topRight ${n}-arrow`]: {
        right: {
          _skip_check_: !0,
          value: p
        }
      },
      // >>>>> Bottom
      [[`&-placement-bottom ${n}-arrow`, `&-placement-bottomLeft ${n}-arrow`, `&-placement-bottomRight ${n}-arrow`].join(",")]: {
        top: 0,
        transform: "translateY(-100%)"
      },
      [`&-placement-bottom ${n}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateX(-50%) translateY(-100%)"
      },
      [`&-placement-bottomLeft ${n}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: p
        }
      },
      [`&-placement-bottomRight ${n}-arrow`]: {
        right: {
          _skip_check_: !0,
          value: p
        }
      },
      // >>>>> Left
      [[`&-placement-left ${n}-arrow`, `&-placement-leftTop ${n}-arrow`, `&-placement-leftBottom ${n}-arrow`].join(",")]: {
        right: {
          _skip_check_: !0,
          value: 0
        },
        transform: "translateX(100%) rotate(90deg)"
      },
      [`&-placement-left ${n}-arrow`]: {
        top: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateY(-50%) translateX(100%) rotate(90deg)"
      },
      [`&-placement-leftTop ${n}-arrow`]: {
        top: d
      },
      [`&-placement-leftBottom ${n}-arrow`]: {
        bottom: d
      },
      // >>>>> Right
      [[`&-placement-right ${n}-arrow`, `&-placement-rightTop ${n}-arrow`, `&-placement-rightBottom ${n}-arrow`].join(",")]: {
        left: {
          _skip_check_: !0,
          value: 0
        },
        transform: "translateX(-100%) rotate(-90deg)"
      },
      [`&-placement-right ${n}-arrow`]: {
        top: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateY(-50%) translateX(-100%) rotate(-90deg)"
      },
      [`&-placement-rightTop ${n}-arrow`]: {
        top: d
      },
      [`&-placement-rightBottom ${n}-arrow`]: {
        bottom: d
      },
      // =========================== Offset ============================
      // Offset the popover to account for the dropdown arrow
      // >>>>> Top
      [Tr(["&-placement-topLeft", "&-placement-top", "&-placement-topRight"].map((g) => g += ":not(&-arrow-hidden)"), c)]: {
        paddingBottom: h
      },
      // >>>>> Bottom
      [Tr(["&-placement-bottomLeft", "&-placement-bottom", "&-placement-bottomRight"].map((g) => g += ":not(&-arrow-hidden)"), c)]: {
        paddingTop: h
      },
      // >>>>> Left
      [Tr(["&-placement-leftTop", "&-placement-left", "&-placement-leftBottom"].map((g) => g += ":not(&-arrow-hidden)"), c)]: {
        paddingRight: {
          _skip_check_: !0,
          value: h
        }
      },
      // >>>>> Right
      [Tr(["&-placement-rightTop", "&-placement-right", "&-placement-rightBottom"].map((g) => g += ":not(&-arrow-hidden)"), c)]: {
        paddingLeft: {
          _skip_check_: !0,
          value: h
        }
      }
    }
  };
}
const Gw = (e) => {
  const {
    componentCls: t,
    // ant-tooltip
    tooltipMaxWidth: n,
    tooltipColor: r,
    tooltipBg: o,
    tooltipBorderRadius: i,
    zIndexPopup: a,
    controlHeight: l,
    boxShadowSecondary: s,
    paddingSM: c,
    paddingXS: f,
    tooltipRadiusOuter: u
  } = e;
  return [
    {
      [t]: m(m(m(m({}, On(e)), {
        position: "absolute",
        zIndex: a,
        display: "block",
        "&": [{
          width: "max-content"
        }, {
          width: "intrinsic"
        }],
        maxWidth: n,
        visibility: "visible",
        "&-hidden": {
          display: "none"
        },
        "--antd-arrow-background-color": o,
        // Wrapper for the tooltip content
        [`${t}-inner`]: {
          minWidth: l,
          minHeight: l,
          padding: `${c / 2}px ${f}px`,
          color: r,
          textAlign: "start",
          textDecoration: "none",
          wordWrap: "break-word",
          backgroundColor: o,
          borderRadius: i,
          boxShadow: s
        },
        // Limit left and right placement radius
        [["&-placement-left", "&-placement-leftTop", "&-placement-leftBottom", "&-placement-right", "&-placement-rightTop", "&-placement-rightBottom"].join(",")]: {
          [`${t}-inner`]: {
            borderRadius: Math.min(i, ed)
          }
        },
        [`${t}-content`]: {
          position: "relative"
        }
      }), Ng(e, (d, p) => {
        let {
          darkColor: h
        } = p;
        return {
          [`&${t}-${d}`]: {
            [`${t}-inner`]: {
              backgroundColor: h
            },
            [`${t}-arrow`]: {
              "--antd-arrow-background-color": h
            }
          }
        };
      })), {
        // RTL
        "&-rtl": {
          direction: "rtl"
        }
      })
    },
    // Arrow Style
    qw(ke(e, {
      borderRadiusOuter: u
    }), {
      colorBg: "var(--antd-arrow-background-color)",
      showArrowCls: "",
      contentRadius: i,
      limitVerticalRadius: !0
    }),
    // Pure Render
    {
      [`${t}-pure`]: {
        position: "relative",
        maxWidth: "none"
      }
    }
  ];
}, Uw = (e, t) => Ze("Tooltip", (r) => {
  if ((t == null ? void 0 : t.value) === !1)
    return [];
  const {
    borderRadius: o,
    colorTextLightSolid: i,
    colorBgDefault: a,
    borderRadiusOuter: l
  } = r, s = ke(r, {
    // default variables
    tooltipMaxWidth: 250,
    tooltipColor: i,
    tooltipBorderRadius: o,
    tooltipBg: a,
    tooltipRadiusOuter: l > 4 ? 4 : l
  });
  return [Gw(s), Zf(r, "zoom-big-fast")];
}, (r) => {
  let {
    zIndexPopupBase: o,
    colorBgSpotlight: i
  } = r;
  return {
    zIndexPopup: o + 70,
    colorBgDefault: i
  };
})(e), Xw = (e, t) => {
  const n = {}, r = m({}, e);
  return t.forEach((o) => {
    e && o in e && (n[o] = e[o], delete r[o]);
  }), {
    picked: n,
    omitted: r
  };
}, Kw = () => m(m({}, Rw()), {
  title: H.any
}), D2 = () => ({
  trigger: "hover",
  align: {},
  placement: "top",
  mouseEnterDelay: 0.1,
  mouseLeaveDelay: 0.1,
  arrowPointAtCenter: !1,
  autoAdjustOverflow: !0
}), Yw = V({
  compatConfig: {
    MODE: 3
  },
  name: "ATooltip",
  inheritAttrs: !1,
  props: Ut(Kw(), {
    trigger: "hover",
    align: {},
    placement: "top",
    mouseEnterDelay: 0.1,
    mouseLeaveDelay: 0.1,
    arrowPointAtCenter: !1,
    autoAdjustOverflow: !0
  }),
  slots: Object,
  // emits: ['update:visible', 'visibleChange'],
  setup(e, t) {
    let {
      slots: n,
      emit: r,
      attrs: o,
      expose: i
    } = t;
    process.env.NODE_ENV !== "production" && [["visible", "open"], ["onVisibleChange", "onOpenChange"]].forEach((_) => {
      let [M, R] = _;
      Xe(e[M] === void 0, "Tooltip", `\`${M}\` is deprecated, please use \`${R}\` instead.`);
    });
    const {
      prefixCls: a,
      getPopupContainer: l,
      direction: s,
      rootPrefixCls: c
    } = Pe("tooltip", e), f = T(() => {
      var _;
      return (_ = e.open) !== null && _ !== void 0 ? _ : e.visible;
    }), u = X(Lw([e.open, e.visible])), d = X();
    let p;
    Q(f, (_) => {
      Me.cancel(p), p = Me(() => {
        u.value = !!_;
      });
    });
    const h = () => {
      var _;
      const M = (_ = e.title) !== null && _ !== void 0 ? _ : n.title;
      return !M && M !== 0;
    }, g = (_) => {
      const M = h();
      f.value === void 0 && (u.value = M ? !1 : _), M || (r("update:visible", _), r("visibleChange", _), r("update:open", _), r("openChange", _));
    };
    i({
      getPopupDomNode: () => d.value.getPopupDomNode(),
      open: u,
      forcePopupAlign: () => {
        var _;
        return (_ = d.value) === null || _ === void 0 ? void 0 : _.forcePopupAlign();
      }
    });
    const v = T(() => {
      var _;
      const {
        builtinPlacements: M,
        autoAdjustOverflow: R,
        arrow: D,
        arrowPointAtCenter: z
      } = e;
      let P = z;
      return typeof D == "object" && (P = (_ = D.pointAtCenter) !== null && _ !== void 0 ? _ : z), M || Bw({
        arrowPointAtCenter: P,
        autoAdjustOverflow: R
      });
    }), $ = (_) => _ || _ === "", y = (_) => {
      const M = _.type;
      if (typeof M == "object" && _.props && ((M.__ANT_BUTTON === !0 || M === "button") && $(_.props.disabled) || M.__ANT_SWITCH === !0 && ($(_.props.disabled) || $(_.props.loading)) || M.__ANT_RADIO === !0 && $(_.props.disabled))) {
        const {
          picked: R,
          omitted: D
        } = Xw(Kp(_), ["position", "left", "right", "top", "bottom", "float", "display", "zIndex"]), z = m(m({
          display: "inline-block"
        }, R), {
          cursor: "not-allowed",
          lineHeight: 1,
          width: _.props && _.props.block ? "100%" : void 0
        }), P = m(m({}, D), {
          pointerEvents: "none"
        }), F = Qr(_, {
          style: P
        }, !0);
        return w("span", {
          style: z,
          class: `${a.value}-disabled-compatible-wrapper`
        }, [F]);
      }
      return _;
    }, b = () => {
      var _, M;
      return (_ = e.title) !== null && _ !== void 0 ? _ : (M = n.title) === null || M === void 0 ? void 0 : M.call(n);
    }, S = (_, M) => {
      const R = v.value, D = Object.keys(R).find((z) => {
        var P, F;
        return R[z].points[0] === ((P = M.points) === null || P === void 0 ? void 0 : P[0]) && R[z].points[1] === ((F = M.points) === null || F === void 0 ? void 0 : F[1]);
      });
      if (D) {
        const z = _.getBoundingClientRect(), P = {
          top: "50%",
          left: "50%"
        };
        D.indexOf("top") >= 0 || D.indexOf("Bottom") >= 0 ? P.top = `${z.height - M.offset[1]}px` : (D.indexOf("Top") >= 0 || D.indexOf("bottom") >= 0) && (P.top = `${-M.offset[1]}px`), D.indexOf("left") >= 0 || D.indexOf("Right") >= 0 ? P.left = `${z.width - M.offset[0]}px` : (D.indexOf("right") >= 0 || D.indexOf("Left") >= 0) && (P.left = `${-M.offset[0]}px`), _.style.transformOrigin = `${P.left} ${P.top}`;
      }
    }, O = T(() => Ww(a.value, e.color)), C = T(() => o["data-popover-inject"]), [E, A] = Uw(a, T(() => !C.value));
    return () => {
      var _, M;
      const {
        openClassName: R,
        overlayClassName: D,
        overlayStyle: z,
        overlayInnerStyle: P
      } = e;
      let F = (M = Xt((_ = n.default) === null || _ === void 0 ? void 0 : _.call(n))) !== null && M !== void 0 ? M : null;
      F = F.length === 1 ? F[0] : F;
      let I = u.value;
      if (f.value === void 0 && h() && (I = !1), !F)
        return null;
      const N = y(Gc(F) && !Yp(F) ? F : w("span", null, [F])), k = Y({
        [R || `${a.value}-open`]: !0,
        [N.props && N.props.class]: N.props && N.props.class
      }), G = Y(D, {
        [`${a.value}-rtl`]: s.value === "rtl"
      }, O.value.className, A.value), Z = m(m({}, O.value.overlayStyle), P), oe = O.value.arrowStyle, ae = m(m(m({}, o), e), {
        prefixCls: a.value,
        arrow: !!e.arrow,
        getPopupContainer: l == null ? void 0 : l.value,
        builtinPlacements: v.value,
        visible: I,
        ref: d,
        overlayClassName: G,
        overlayStyle: m(m({}, oe), z),
        overlayInnerStyle: Z,
        onVisibleChange: g,
        onPopupAlign: S,
        transitionName: tr(c.value, "zoom-big-fast", e.transitionName)
      });
      return E(w(Nw, ae, {
        default: () => [u.value ? Qr(N, {
          class: k
        }) : N],
        arrowContent: () => w("span", {
          class: `${a.value}-arrow-content`
        }, null),
        overlay: b
      }));
    };
  }
}), Qw = lo(Yw), Zw = (e) => {
  const {
    componentCls: t,
    colorPrimary: n
  } = e;
  return {
    [t]: {
      position: "absolute",
      background: "transparent",
      pointerEvents: "none",
      boxSizing: "border-box",
      color: `var(--wave-color, ${n})`,
      boxShadow: "0 0 0 0 currentcolor",
      opacity: 0.2,
      // =================== Motion ===================
      "&.wave-motion-appear": {
        transition: [`box-shadow 0.4s ${e.motionEaseOutCirc}`, `opacity 2s ${e.motionEaseOutCirc}`].join(","),
        "&-active": {
          boxShadow: "0 0 0 6px currentcolor",
          opacity: 0
        }
      }
    }
  };
}, Jw = Ze("Wave", (e) => [Zw(e)]);
function e$(e) {
  const t = (e || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
  return t && t[1] && t[2] && t[3] ? !(t[1] === t[2] && t[2] === t[3]) : !0;
}
function Qo(e) {
  return e && e !== "#fff" && e !== "#ffffff" && e !== "rgb(255, 255, 255)" && e !== "rgba(255, 255, 255, 1)" && e$(e) && !/rgba\((?:\d*, ){3}0\)/.test(e) && // any transparent rgba color
  e !== "transparent";
}
function t$(e) {
  const {
    borderTopColor: t,
    borderColor: n,
    backgroundColor: r
  } = getComputedStyle(e);
  return Qo(t) ? t : Qo(n) ? n : Qo(r) ? r : null;
}
function Zo(e) {
  return Number.isNaN(e) ? 0 : e;
}
const n$ = V({
  props: {
    target: te(),
    className: String
  },
  setup(e) {
    const t = L(null), [n, r] = Mt(null), [o, i] = Mt([]), [a, l] = Mt(0), [s, c] = Mt(0), [f, u] = Mt(0), [d, p] = Mt(0), [h, g] = Mt(!1);
    function x() {
      const {
        target: C
      } = e, E = getComputedStyle(C);
      r(t$(C));
      const A = E.position === "static", {
        borderLeftWidth: _,
        borderTopWidth: M
      } = E;
      l(A ? C.offsetLeft : Zo(-parseFloat(_))), c(A ? C.offsetTop : Zo(-parseFloat(M))), u(C.offsetWidth), p(C.offsetHeight);
      const {
        borderTopLeftRadius: R,
        borderTopRightRadius: D,
        borderBottomLeftRadius: z,
        borderBottomRightRadius: P
      } = E;
      i([R, D, P, z].map((F) => Zo(parseFloat(F))));
    }
    let v, $, y;
    const b = () => {
      clearTimeout(y), Me.cancel($), v == null || v.disconnect();
    }, S = () => {
      var C;
      const E = (C = t.value) === null || C === void 0 ? void 0 : C.parentElement;
      E && (Vt(null, E), E.parentElement && E.parentElement.removeChild(E));
    };
    we(() => {
      b(), y = setTimeout(() => {
        S();
      }, 5e3);
      const {
        target: C
      } = e;
      C && ($ = Me(() => {
        x(), g(!0);
      }), typeof ResizeObserver < "u" && (v = new ResizeObserver(x), v.observe(C)));
    }), We(() => {
      b();
    });
    const O = (C) => {
      C.propertyName === "opacity" && S();
    };
    return () => {
      if (!h.value)
        return null;
      const C = {
        left: `${a.value}px`,
        top: `${s.value}px`,
        width: `${f.value}px`,
        height: `${d.value}px`,
        borderRadius: o.value.map((E) => `${E}px`).join(" ")
      };
      return n && (C["--wave-color"] = n.value), w(Ot, {
        appear: !0,
        name: "wave-motion",
        appearFromClass: "wave-motion-appear",
        appearActiveClass: "wave-motion-appear",
        appearToClass: "wave-motion-appear wave-motion-appear-active"
      }, {
        default: () => [w("div", {
          ref: t,
          class: e.className,
          style: C,
          onTransitionend: O
        }, null)]
      });
    };
  }
});
function r$(e, t) {
  const n = document.createElement("div");
  n.style.position = "absolute", n.style.left = "0px", n.style.top = "0px", e == null || e.insertBefore(n, e == null ? void 0 : e.firstChild), Vt(w(n$, {
    target: e,
    className: t
  }, null), n);
}
function o$(e, t, n) {
  function r() {
    var o;
    const i = bt(e);
    !((o = n == null ? void 0 : n.value) === null || o === void 0) && o.disabled || !i || r$(i, t.value);
  }
  return r;
}
const i$ = V({
  compatConfig: {
    MODE: 3
  },
  name: "Wave",
  props: {
    disabled: Boolean
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const r = $n(), {
      prefixCls: o,
      wave: i
    } = Pe("wave", e), [, a] = Jw(o), l = o$(r, T(() => Y(o.value, a.value)), i);
    let s;
    const c = () => {
      bt(r).removeEventListener("click", s, !0);
    };
    return we(() => {
      Q(() => e.disabled, () => {
        c(), Le(() => {
          const f = bt(r);
          f == null || f.removeEventListener("click", s, !0), !(!f || f.nodeType !== 1 || e.disabled) && (s = (u) => {
            u.target.tagName === "INPUT" || !sf(u.target) || // No need wave
            !f.getAttribute || f.getAttribute("disabled") || f.disabled || f.className.includes("disabled") || f.className.includes("-leave") || l();
          }, f.addEventListener("click", s, !0));
        });
      }, {
        immediate: !0,
        flush: "post"
      });
    }), We(() => {
      c();
    }), () => {
      var f;
      return (f = n.default) === null || f === void 0 ? void 0 : f.call(n)[0];
    };
  }
});
function td(e) {
  return e === "danger" ? {
    danger: !0
  } : {
    type: e
  };
}
const a$ = () => ({
  prefixCls: String,
  type: String,
  htmlType: {
    type: String,
    default: "button"
  },
  shape: {
    type: String
  },
  size: {
    type: String
  },
  loading: {
    type: [Boolean, Object],
    default: () => !1
  },
  disabled: {
    type: Boolean,
    default: void 0
  },
  ghost: {
    type: Boolean,
    default: void 0
  },
  block: {
    type: Boolean,
    default: void 0
  },
  danger: {
    type: Boolean,
    default: void 0
  },
  icon: H.any,
  href: String,
  target: String,
  title: String,
  onClick: sl(),
  onMousedown: sl()
}), ec = (e) => {
  e && (e.style.width = "0px", e.style.opacity = "0", e.style.transform = "scale(0)");
}, tc = (e) => {
  Le(() => {
    e && (e.style.width = `${e.scrollWidth}px`, e.style.opacity = "1", e.style.transform = "scale(1)");
  });
}, nc = (e) => {
  e && e.style && (e.style.width = null, e.style.opacity = null, e.style.transform = null);
}, l$ = V({
  compatConfig: {
    MODE: 3
  },
  name: "LoadingIcon",
  props: {
    prefixCls: String,
    loading: [Boolean, Object],
    existIcon: Boolean
  },
  setup(e) {
    return () => {
      const {
        existIcon: t,
        prefixCls: n,
        loading: r
      } = e;
      if (t)
        return w("span", {
          class: `${n}-loading-icon`
        }, [w(St, null, null)]);
      const o = !!r;
      return w(Ot, {
        name: `${n}-loading-icon-motion`,
        onBeforeEnter: ec,
        onEnter: tc,
        onAfterEnter: nc,
        onBeforeLeave: tc,
        onLeave: (i) => {
          setTimeout(() => {
            ec(i);
          });
        },
        onAfterLeave: nc
      }, {
        default: () => [o ? w("span", {
          class: `${n}-loading-icon`
        }, [w(St, null, null)]) : null]
      });
    };
  }
}), rc = (e, t) => ({
  // Border
  [`> span, > ${e}`]: {
    "&:not(:last-child)": {
      [`&, & > ${e}`]: {
        "&:not(:disabled)": {
          borderInlineEndColor: t
        }
      }
    },
    "&:not(:first-child)": {
      [`&, & > ${e}`]: {
        "&:not(:disabled)": {
          borderInlineStartColor: t
        }
      }
    }
  }
}), s$ = (e) => {
  const {
    componentCls: t,
    fontSize: n,
    lineWidth: r,
    colorPrimaryHover: o,
    colorErrorHover: i
  } = e;
  return {
    [`${t}-group`]: [
      {
        position: "relative",
        display: "inline-flex",
        // Border
        [`> span, > ${t}`]: {
          "&:not(:last-child)": {
            [`&, & > ${t}`]: {
              borderStartEndRadius: 0,
              borderEndEndRadius: 0
            }
          },
          "&:not(:first-child)": {
            marginInlineStart: -r,
            [`&, & > ${t}`]: {
              borderStartStartRadius: 0,
              borderEndStartRadius: 0
            }
          }
        },
        [t]: {
          position: "relative",
          zIndex: 1,
          "&:hover,\n          &:focus,\n          &:active": {
            zIndex: 2
          },
          "&[disabled]": {
            zIndex: 0
          }
        },
        [`${t}-icon-only`]: {
          fontSize: n
        }
      },
      // Border Color
      rc(`${t}-primary`, o),
      rc(`${t}-danger`, i)
    ]
  };
};
function c$(e, t) {
  return {
    // border collapse
    [`&-item:not(${t}-last-item)`]: {
      marginBottom: -e.lineWidth
    },
    "&-item": {
      "&:hover,&:focus,&:active": {
        zIndex: 2
      },
      "&[disabled]": {
        zIndex: 0
      }
    }
  };
}
function u$(e, t) {
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item)`]: {
      borderRadius: 0
    },
    [`&-item${t}-first-item:not(${t}-last-item)`]: {
      [`&, &${e}-sm, &${e}-lg`]: {
        borderEndEndRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&-item${t}-last-item:not(${t}-first-item)`]: {
      [`&, &${e}-sm, &${e}-lg`]: {
        borderStartStartRadius: 0,
        borderStartEndRadius: 0
      }
    }
  };
}
function f$(e) {
  const t = `${e.componentCls}-compact-vertical`;
  return {
    [t]: m(m({}, c$(e, t)), u$(e.componentCls, t))
  };
}
const d$ = (e) => {
  const {
    componentCls: t,
    iconCls: n
  } = e;
  return {
    [t]: {
      outline: "none",
      position: "relative",
      display: "inline-block",
      fontWeight: 400,
      whiteSpace: "nowrap",
      textAlign: "center",
      backgroundImage: "none",
      backgroundColor: "transparent",
      border: `${e.lineWidth}px ${e.lineType} transparent`,
      cursor: "pointer",
      transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
      userSelect: "none",
      touchAction: "manipulation",
      lineHeight: e.lineHeight,
      color: e.colorText,
      "> span": {
        display: "inline-block"
      },
      // Leave a space between icon and text.
      [`> ${n} + span, > span + ${n}`]: {
        marginInlineStart: e.marginXS
      },
      "> a": {
        color: "currentColor"
      },
      "&:not(:disabled)": m({}, Eu(e)),
      // make `btn-icon-only` not too narrow
      [`&-icon-only${t}-compact-item`]: {
        flex: "none"
      },
      // Special styles for Primary Button
      [`&-compact-item${t}-primary`]: {
        [`&:not([disabled]) + ${t}-compact-item${t}-primary:not([disabled])`]: {
          position: "relative",
          "&:before": {
            position: "absolute",
            top: -e.lineWidth,
            insetInlineStart: -e.lineWidth,
            display: "inline-block",
            width: e.lineWidth,
            height: `calc(100% + ${e.lineWidth * 2}px)`,
            backgroundColor: e.colorPrimaryHover,
            content: '""'
          }
        }
      },
      // Special styles for Primary Button
      "&-compact-vertical-item": {
        [`&${t}-primary`]: {
          [`&:not([disabled]) + ${t}-compact-vertical-item${t}-primary:not([disabled])`]: {
            position: "relative",
            "&:before": {
              position: "absolute",
              top: -e.lineWidth,
              insetInlineStart: -e.lineWidth,
              display: "inline-block",
              width: `calc(100% + ${e.lineWidth * 2}px)`,
              height: e.lineWidth,
              backgroundColor: e.colorPrimaryHover,
              content: '""'
            }
          }
        }
      }
    }
  };
}, pt = (e, t) => ({
  "&:not(:disabled)": {
    "&:hover": e,
    "&:active": t
  }
}), p$ = (e) => ({
  minWidth: e.controlHeight,
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  borderRadius: "50%"
}), m$ = (e) => ({
  borderRadius: e.controlHeight,
  paddingInlineStart: e.controlHeight / 2,
  paddingInlineEnd: e.controlHeight / 2
}), Li = (e) => ({
  cursor: "not-allowed",
  borderColor: e.colorBorder,
  color: e.colorTextDisabled,
  backgroundColor: e.colorBgContainerDisabled,
  boxShadow: "none"
}), no = (e, t, n, r, o, i, a) => ({
  [`&${e}-background-ghost`]: m(m({
    color: t || void 0,
    backgroundColor: "transparent",
    borderColor: n || void 0,
    boxShadow: "none"
  }, pt(m({
    backgroundColor: "transparent"
  }, i), m({
    backgroundColor: "transparent"
  }, a))), {
    "&:disabled": {
      cursor: "not-allowed",
      color: r || void 0,
      borderColor: o || void 0
    }
  })
}), qa = (e) => ({
  "&:disabled": m({}, Li(e))
}), nd = (e) => m({}, qa(e)), ro = (e) => ({
  "&:disabled": {
    cursor: "not-allowed",
    color: e.colorTextDisabled
  }
}), rd = (e) => m(m(m(m(m({}, nd(e)), {
  backgroundColor: e.colorBgContainer,
  borderColor: e.colorBorder,
  boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlTmpOutline}`
}), pt({
  color: e.colorPrimaryHover,
  borderColor: e.colorPrimaryHover
}, {
  color: e.colorPrimaryActive,
  borderColor: e.colorPrimaryActive
})), no(e.componentCls, e.colorBgContainer, e.colorBgContainer, e.colorTextDisabled, e.colorBorder)), {
  [`&${e.componentCls}-dangerous`]: m(m(m({
    color: e.colorError,
    borderColor: e.colorError
  }, pt({
    color: e.colorErrorHover,
    borderColor: e.colorErrorBorderHover
  }, {
    color: e.colorErrorActive,
    borderColor: e.colorErrorActive
  })), no(e.componentCls, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder)), qa(e))
}), g$ = (e) => m(m(m(m(m({}, nd(e)), {
  color: e.colorTextLightSolid,
  backgroundColor: e.colorPrimary,
  boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlOutline}`
}), pt({
  color: e.colorTextLightSolid,
  backgroundColor: e.colorPrimaryHover
}, {
  color: e.colorTextLightSolid,
  backgroundColor: e.colorPrimaryActive
})), no(e.componentCls, e.colorPrimary, e.colorPrimary, e.colorTextDisabled, e.colorBorder, {
  color: e.colorPrimaryHover,
  borderColor: e.colorPrimaryHover
}, {
  color: e.colorPrimaryActive,
  borderColor: e.colorPrimaryActive
})), {
  [`&${e.componentCls}-dangerous`]: m(m(m({
    backgroundColor: e.colorError,
    boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.colorErrorOutline}`
  }, pt({
    backgroundColor: e.colorErrorHover
  }, {
    backgroundColor: e.colorErrorActive
  })), no(e.componentCls, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder, {
    color: e.colorErrorHover,
    borderColor: e.colorErrorHover
  }, {
    color: e.colorErrorActive,
    borderColor: e.colorErrorActive
  })), qa(e))
}), h$ = (e) => m(m({}, rd(e)), {
  borderStyle: "dashed"
}), v$ = (e) => m(m(m({
  color: e.colorLink
}, pt({
  color: e.colorLinkHover
}, {
  color: e.colorLinkActive
})), ro(e)), {
  [`&${e.componentCls}-dangerous`]: m(m({
    color: e.colorError
  }, pt({
    color: e.colorErrorHover
  }, {
    color: e.colorErrorActive
  })), ro(e))
}), y$ = (e) => m(m(m({}, pt({
  color: e.colorText,
  backgroundColor: e.colorBgTextHover
}, {
  color: e.colorText,
  backgroundColor: e.colorBgTextActive
})), ro(e)), {
  [`&${e.componentCls}-dangerous`]: m(m({
    color: e.colorError
  }, ro(e)), pt({
    color: e.colorErrorHover,
    backgroundColor: e.colorErrorBg
  }, {
    color: e.colorErrorHover,
    backgroundColor: e.colorErrorBg
  }))
}), b$ = (e) => m(m({}, Li(e)), {
  [`&${e.componentCls}:hover`]: m({}, Li(e))
}), C$ = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-default`]: rd(e),
    [`${t}-primary`]: g$(e),
    [`${t}-dashed`]: h$(e),
    [`${t}-link`]: v$(e),
    [`${t}-text`]: y$(e),
    [`${t}-disabled`]: b$(e)
  };
}, Ga = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  const {
    componentCls: n,
    iconCls: r,
    controlHeight: o,
    fontSize: i,
    lineHeight: a,
    lineWidth: l,
    borderRadius: s,
    buttonPaddingHorizontal: c
  } = e, f = Math.max(0, (o - i * a) / 2 - l), u = c - l, d = `${n}-icon-only`;
  return [
    // Size
    {
      [`${n}${t}`]: {
        fontSize: i,
        height: o,
        padding: `${f}px ${u}px`,
        borderRadius: s,
        [`&${d}`]: {
          width: o,
          paddingInlineStart: 0,
          paddingInlineEnd: 0,
          [`&${n}-round`]: {
            width: "auto"
          },
          "> span": {
            transform: "scale(1.143)"
            // 14px -> 16px
          }
        },
        // Loading
        [`&${n}-loading`]: {
          opacity: e.opacityLoading,
          cursor: "default"
        },
        [`${n}-loading-icon`]: {
          transition: `width ${e.motionDurationSlow} ${e.motionEaseInOut}, opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`
        },
        [`&:not(${d}) ${n}-loading-icon > ${r}`]: {
          marginInlineEnd: e.marginXS
        }
      }
    },
    // Shape - patch prefixCls again to override solid border radius style
    {
      [`${n}${n}-circle${t}`]: p$(e)
    },
    {
      [`${n}${n}-round${t}`]: m$(e)
    }
  ];
}, x$ = (e) => Ga(e), w$ = (e) => {
  const t = ke(e, {
    controlHeight: e.controlHeightSM,
    padding: e.paddingXS,
    buttonPaddingHorizontal: 8,
    borderRadius: e.borderRadiusSM
  });
  return Ga(t, `${e.componentCls}-sm`);
}, $$ = (e) => {
  const t = ke(e, {
    controlHeight: e.controlHeightLG,
    fontSize: e.fontSizeLG,
    borderRadius: e.borderRadiusLG
  });
  return Ga(t, `${e.componentCls}-lg`);
}, S$ = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: {
      [`&${t}-block`]: {
        width: "100%"
      }
    }
  };
}, O$ = Ze("Button", (e) => {
  const {
    controlTmpOutline: t,
    paddingContentHorizontal: n
  } = e, r = ke(e, {
    colorOutlineDefault: t,
    buttonPaddingHorizontal: n
  });
  return [
    // Shared
    d$(r),
    // Size
    w$(r),
    x$(r),
    $$(r),
    // Block
    S$(r),
    // Group (type, ghost, danger, disabled, loading)
    C$(r),
    // Button Group
    s$(r),
    // Space Compact
    mw(e, {
      focus: !1
    }),
    f$(e)
  ];
}), T$ = () => ({
  prefixCls: String,
  size: {
    type: String
  }
}), od = Ma(), Hi = V({
  compatConfig: {
    MODE: 3
  },
  name: "AButtonGroup",
  props: T$(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      prefixCls: r,
      direction: o
    } = Pe("btn-group", e), [, , i] = Tn();
    od.useProvide(Ye({
      size: T(() => e.size)
    }));
    const a = T(() => {
      const {
        size: l
      } = e;
      let s = "";
      switch (l) {
        case "large":
          s = "lg";
          break;
        case "small":
          s = "sm";
          break;
        case "middle":
        case void 0:
          break;
        default:
          ma(!l, "Button.Group", "Invalid prop `size`.");
      }
      return {
        [`${r.value}`]: !0,
        [`${r.value}-${s}`]: s,
        [`${r.value}-rtl`]: o.value === "rtl",
        [i.value]: !0
      };
    });
    return () => {
      var l;
      return w("div", {
        class: a.value
      }, [Ue((l = n.default) === null || l === void 0 ? void 0 : l.call(n))]);
    };
  }
}), oc = /^[\u4e00-\u9fa5]{2}$/, ic = oc.test.bind(oc);
function Pr(e) {
  return e === "text" || e === "link";
}
const it = V({
  compatConfig: {
    MODE: 3
  },
  name: "AButton",
  inheritAttrs: !1,
  __ANT_BUTTON: !0,
  props: Ut(a$(), {
    type: "default"
  }),
  slots: Object,
  // emits: ['click', 'mousedown'],
  setup(e, t) {
    let {
      slots: n,
      attrs: r,
      emit: o,
      expose: i
    } = t;
    const {
      prefixCls: a,
      autoInsertSpaceInButton: l,
      direction: s,
      size: c
    } = Pe("btn", e), [f, u] = O$(a), d = od.useInject(), p = la(), h = T(() => {
      var P;
      return (P = e.disabled) !== null && P !== void 0 ? P : p.value;
    }), g = L(null), x = L(void 0);
    let v = !1;
    const $ = L(!1), y = L(!1), b = T(() => l.value !== !1), {
      compactSize: S,
      compactItemClassnames: O
    } = Ux(a, s), C = T(() => typeof e.loading == "object" && e.loading.delay ? e.loading.delay || !0 : !!e.loading);
    Q(C, (P) => {
      clearTimeout(x.value), typeof C.value == "number" ? x.value = setTimeout(() => {
        $.value = P;
      }, C.value) : $.value = P;
    }, {
      immediate: !0
    });
    const E = T(() => {
      const {
        type: P,
        shape: F = "default",
        ghost: I,
        block: N,
        danger: k
      } = e, G = a.value, Z = {
        large: "lg",
        small: "sm",
        middle: void 0
      }, oe = S.value || (d == null ? void 0 : d.size) || c.value, ae = oe && Z[oe] || "";
      return [O.value, {
        [u.value]: !0,
        [`${G}`]: !0,
        [`${G}-${F}`]: F !== "default" && F,
        [`${G}-${P}`]: P,
        [`${G}-${ae}`]: ae,
        [`${G}-loading`]: $.value,
        [`${G}-background-ghost`]: I && !Pr(P),
        [`${G}-two-chinese-chars`]: y.value && b.value,
        [`${G}-block`]: N,
        [`${G}-dangerous`]: !!k,
        [`${G}-rtl`]: s.value === "rtl"
      }];
    }), A = () => {
      const P = g.value;
      if (!P || l.value === !1)
        return;
      const F = P.textContent;
      v && ic(F) ? y.value || (y.value = !0) : y.value && (y.value = !1);
    }, _ = (P) => {
      if ($.value || h.value) {
        P.preventDefault();
        return;
      }
      o("click", P);
    }, M = (P) => {
      o("mousedown", P);
    }, R = (P, F) => {
      const I = F ? " " : "";
      if (P.type === jc) {
        let N = P.children.trim();
        return ic(N) && (N = N.split("").join(I)), w("span", null, [N]);
      }
      return P;
    };
    return Be(() => {
      ma(!(e.ghost && Pr(e.type)), "Button", "`link` or `text` button can't be a `ghost` button.");
    }), we(A), io(A), We(() => {
      x.value && clearTimeout(x.value);
    }), i({
      focus: () => {
        var P;
        (P = g.value) === null || P === void 0 || P.focus();
      },
      blur: () => {
        var P;
        (P = g.value) === null || P === void 0 || P.blur();
      }
    }), () => {
      var P, F;
      const {
        icon: I = (P = n.icon) === null || P === void 0 ? void 0 : P.call(n)
      } = e, N = Ue((F = n.default) === null || F === void 0 ? void 0 : F.call(n));
      v = N.length === 1 && !I && !Pr(e.type);
      const {
        type: k,
        htmlType: G,
        href: Z,
        title: oe,
        target: ae
      } = e, ce = $.value ? "loading" : I, B = m(m({}, r), {
        title: oe,
        disabled: h.value,
        class: [E.value, r.class, {
          [`${a.value}-icon-only`]: N.length === 0 && !!ce
        }],
        onClick: _,
        onMousedown: M
      });
      h.value || delete B.disabled;
      const U = I && !$.value ? I : w(l$, {
        existIcon: !!I,
        prefixCls: a.value,
        loading: !!$.value
      }, null), J = N.map((ne) => R(ne, v && b.value));
      if (Z !== void 0)
        return f(w("a", j(j({}, B), {}, {
          href: Z,
          target: ae,
          ref: g
        }), [U, J]));
      let ee = w("button", j(j({}, B), {}, {
        ref: g,
        type: G
      }), [U, J]);
      if (!Pr(k)) {
        const ne = /* @__PURE__ */ function() {
          return ee;
        }();
        ee = w(i$, {
          ref: "wave",
          disabled: !!$.value
        }, {
          default: () => [ne]
        });
      }
      return f(ee);
    };
  }
});
it.Group = Hi;
it.install = function(e) {
  return e.component(it.name, it), e.component(Hi.name, Hi), e;
};
function id(e, t) {
  return e.classList ? e.classList.contains(t) : ` ${e.className} `.indexOf(` ${t} `) > -1;
}
function ac(e, t) {
  e.classList ? e.classList.add(t) : id(e, t) || (e.className = `${e.className} ${t}`);
}
function lc(e, t) {
  if (e.classList)
    e.classList.remove(t);
  else if (id(e, t)) {
    const n = e.className;
    e.className = ` ${n} `.replace(` ${t} `, " ");
  }
}
const P$ = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "ant-motion-collapse", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return {
    name: e,
    appear: t,
    css: !0,
    onBeforeEnter: (n) => {
      n.style.height = "0px", n.style.opacity = "0", ac(n, e);
    },
    onEnter: (n) => {
      Le(() => {
        n.style.height = `${n.scrollHeight}px`, n.style.opacity = "1";
      });
    },
    onAfterEnter: (n) => {
      n && (lc(n, e), n.style.height = null, n.style.opacity = null);
    },
    onBeforeLeave: (n) => {
      ac(n, e), n.style.height = `${n.offsetHeight}px`, n.style.opacity = null;
    },
    onLeave: (n) => {
      setTimeout(() => {
        n.style.height = "0px", n.style.opacity = "0";
      });
    },
    onAfterLeave: (n) => {
      n && (lc(n, e), n.style && (n.style.height = null, n.style.opacity = null));
    }
  };
}, ad = () => Qe() && window.document.documentElement;
let Er;
const E$ = () => {
  if (!ad())
    return !1;
  if (Er !== void 0)
    return Er;
  const e = document.createElement("div");
  return e.style.display = "flex", e.style.flexDirection = "column", e.style.rowGap = "1px", e.appendChild(document.createElement("div")), e.appendChild(document.createElement("div")), document.body.appendChild(e), Er = e.scrollHeight === 1, document.body.removeChild(e), Er;
}, _$ = () => {
  const e = L(!1);
  return we(() => {
    e.value = E$();
  }), e;
}, ld = Symbol("rowContextKey"), A$ = (e) => {
  me(ld, e);
}, I$ = () => ve(ld, {
  gutter: T(() => {
  }),
  wrap: T(() => {
  }),
  supportFlexGap: T(() => {
  })
}), M$ = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    // Grid system
    [t]: {
      display: "flex",
      flexFlow: "row wrap",
      minWidth: 0,
      "&::before, &::after": {
        display: "flex"
      },
      "&-no-wrap": {
        flexWrap: "nowrap"
      },
      // The origin of the X-axis
      "&-start": {
        justifyContent: "flex-start"
      },
      // The center of the X-axis
      "&-center": {
        justifyContent: "center"
      },
      // The opposite of the X-axis
      "&-end": {
        justifyContent: "flex-end"
      },
      "&-space-between": {
        justifyContent: "space-between"
      },
      "&-space-around ": {
        justifyContent: "space-around"
      },
      // Align at the top
      "&-top": {
        alignItems: "flex-start"
      },
      // Align at the center
      "&-middle": {
        alignItems: "center"
      },
      "&-bottom": {
        alignItems: "flex-end"
      }
    }
  };
}, F$ = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    // Grid system
    [t]: {
      position: "relative",
      maxWidth: "100%",
      // Prevent columns from collapsing when empty
      minHeight: 1
    }
  };
}, N$ = (e, t) => {
  const {
    componentCls: n,
    gridColumns: r
  } = e, o = {};
  for (let i = r; i >= 0; i--)
    i === 0 ? (o[`${n}${t}-${i}`] = {
      display: "none"
    }, o[`${n}-push-${i}`] = {
      insetInlineStart: "auto"
    }, o[`${n}-pull-${i}`] = {
      insetInlineEnd: "auto"
    }, o[`${n}${t}-push-${i}`] = {
      insetInlineStart: "auto"
    }, o[`${n}${t}-pull-${i}`] = {
      insetInlineEnd: "auto"
    }, o[`${n}${t}-offset-${i}`] = {
      marginInlineEnd: 0
    }, o[`${n}${t}-order-${i}`] = {
      order: 0
    }) : (o[`${n}${t}-${i}`] = {
      display: "block",
      flex: `0 0 ${i / r * 100}%`,
      maxWidth: `${i / r * 100}%`
    }, o[`${n}${t}-push-${i}`] = {
      insetInlineStart: `${i / r * 100}%`
    }, o[`${n}${t}-pull-${i}`] = {
      insetInlineEnd: `${i / r * 100}%`
    }, o[`${n}${t}-offset-${i}`] = {
      marginInlineStart: `${i / r * 100}%`
    }, o[`${n}${t}-order-${i}`] = {
      order: i
    });
  return o;
}, zi = (e, t) => N$(e, t), R$ = (e, t, n) => ({
  [`@media (min-width: ${t}px)`]: m({}, zi(e, n))
}), j$ = Ze("Grid", (e) => [M$(e)]), D$ = Ze("Grid", (e) => {
  const t = ke(e, {
    gridColumns: 24
    // Row is divided into 24 parts in Grid
  }), n = {
    "-sm": t.screenSMMin,
    "-md": t.screenMDMin,
    "-lg": t.screenLGMin,
    "-xl": t.screenXLMin,
    "-xxl": t.screenXXLMin
  };
  return [F$(t), zi(t, ""), zi(t, "-xs"), Object.keys(n).map((r) => R$(t, n[r], r)).reduce((r, o) => m(m({}, r), o), {})];
}), B$ = () => ({
  align: fn([String, Object]),
  justify: fn([String, Object]),
  prefixCls: String,
  gutter: fn([Number, Array, Object], 0),
  wrap: {
    type: Boolean,
    default: void 0
  }
}), L$ = V({
  compatConfig: {
    MODE: 3
  },
  name: "ARow",
  inheritAttrs: !1,
  props: B$(),
  setup(e, t) {
    let {
      slots: n,
      attrs: r
    } = t;
    const {
      prefixCls: o,
      direction: i
    } = Pe("row", e), [a, l] = j$(o);
    let s;
    const c = Aw(), f = X({
      xs: !0,
      sm: !0,
      md: !0,
      lg: !0,
      xl: !0,
      xxl: !0
    }), u = X({
      xs: !1,
      sm: !1,
      md: !1,
      lg: !1,
      xl: !1,
      xxl: !1
    }), d = (y) => T(() => {
      if (typeof e[y] == "string")
        return e[y];
      if (typeof e[y] != "object")
        return "";
      for (let b = 0; b < Or.length; b++) {
        const S = Or[b];
        if (!u.value[S])
          continue;
        const O = e[y][S];
        if (O !== void 0)
          return O;
      }
      return "";
    }), p = d("align"), h = d("justify"), g = _$();
    we(() => {
      s = c.value.subscribe((y) => {
        u.value = y;
        const b = e.gutter || 0;
        (!Array.isArray(b) && typeof b == "object" || Array.isArray(b) && (typeof b[0] == "object" || typeof b[1] == "object")) && (f.value = y);
      });
    }), We(() => {
      c.value.unsubscribe(s);
    });
    const x = T(() => {
      const y = [void 0, void 0], {
        gutter: b = 0
      } = e;
      return (Array.isArray(b) ? b : [b, void 0]).forEach((O, C) => {
        if (typeof O == "object")
          for (let E = 0; E < Or.length; E++) {
            const A = Or[E];
            if (f.value[A] && O[A] !== void 0) {
              y[C] = O[A];
              break;
            }
          }
        else
          y[C] = O;
      }), y;
    });
    A$({
      gutter: x,
      supportFlexGap: g,
      wrap: T(() => e.wrap)
    });
    const v = T(() => Y(o.value, {
      [`${o.value}-no-wrap`]: e.wrap === !1,
      [`${o.value}-${h.value}`]: h.value,
      [`${o.value}-${p.value}`]: p.value,
      [`${o.value}-rtl`]: i.value === "rtl"
    }, r.class, l.value)), $ = T(() => {
      const y = x.value, b = {}, S = y[0] != null && y[0] > 0 ? `${y[0] / -2}px` : void 0, O = y[1] != null && y[1] > 0 ? `${y[1] / -2}px` : void 0;
      return S && (b.marginLeft = S, b.marginRight = S), g.value ? b.rowGap = `${y[1]}px` : O && (b.marginTop = O, b.marginBottom = O), b;
    });
    return () => {
      var y;
      return a(w("div", j(j({}, r), {}, {
        class: v.value,
        style: m(m({}, $.value), r.style)
      }), [(y = n.default) === null || y === void 0 ? void 0 : y.call(n)]));
    };
  }
});
function Dt() {
  return Dt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Dt.apply(this, arguments);
}
function H$(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, nr(e, t);
}
function Vi(e) {
  return Vi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Vi(e);
}
function nr(e, t) {
  return nr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, nr(e, t);
}
function z$() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Br(e, t, n) {
  return z$() ? Br = Reflect.construct.bind() : Br = function(o, i, a) {
    var l = [null];
    l.push.apply(l, i);
    var s = Function.bind.apply(o, l), c = new s();
    return a && nr(c, a.prototype), c;
  }, Br.apply(null, arguments);
}
function V$(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function Wi(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Wi = function(r) {
    if (r === null || !V$(r))
      return r;
    if (typeof r != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(r))
        return t.get(r);
      t.set(r, o);
    }
    function o() {
      return Br(r, arguments, Vi(this).constructor);
    }
    return o.prototype = Object.create(r.prototype, {
      constructor: {
        value: o,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), nr(o, r);
  }, Wi(e);
}
var W$ = /%[sdj%]/g, sd = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (sd = function(t, n) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && n.every(function(r) {
    return typeof r == "string";
  }) && console.warn(t, n);
});
function ki(e) {
  if (!e || !e.length)
    return null;
  var t = {};
  return e.forEach(function(n) {
    var r = n.field;
    t[r] = t[r] || [], t[r].push(n);
  }), t;
}
function Ie(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  var o = 0, i = n.length;
  if (typeof e == "function")
    return e.apply(null, n);
  if (typeof e == "string") {
    var a = e.replace(W$, function(l) {
      if (l === "%%")
        return "%";
      if (o >= i)
        return l;
      switch (l) {
        case "%s":
          return String(n[o++]);
        case "%d":
          return Number(n[o++]);
        case "%j":
          try {
            return JSON.stringify(n[o++]);
          } catch {
            return "[Circular]";
          }
          break;
        default:
          return l;
      }
    });
    return a;
  }
  return e;
}
function k$(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern";
}
function ge(e, t) {
  return !!(e == null || t === "array" && Array.isArray(e) && !e.length || k$(t) && typeof e == "string" && !e);
}
function q$(e, t, n) {
  var r = [], o = 0, i = e.length;
  function a(l) {
    r.push.apply(r, l || []), o++, o === i && n(r);
  }
  e.forEach(function(l) {
    t(l, a);
  });
}
function sc(e, t, n) {
  var r = 0, o = e.length;
  function i(a) {
    if (a && a.length) {
      n(a);
      return;
    }
    var l = r;
    r = r + 1, l < o ? t(e[l], i) : n([]);
  }
  i([]);
}
function G$(e) {
  var t = [];
  return Object.keys(e).forEach(function(n) {
    t.push.apply(t, e[n] || []);
  }), t;
}
var cc = /* @__PURE__ */ function(e) {
  H$(t, e);
  function t(n, r) {
    var o;
    return o = e.call(this, "Async Validation Error") || this, o.errors = n, o.fields = r, o;
  }
  return t;
}(/* @__PURE__ */ Wi(Error));
function U$(e, t, n, r, o) {
  if (t.first) {
    var i = new Promise(function(d, p) {
      var h = function(v) {
        return r(v), v.length ? p(new cc(v, ki(v))) : d(o);
      }, g = G$(e);
      sc(g, n, h);
    });
    return i.catch(function(d) {
      return d;
    }), i;
  }
  var a = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [], l = Object.keys(e), s = l.length, c = 0, f = [], u = new Promise(function(d, p) {
    var h = function(x) {
      if (f.push.apply(f, x), c++, c === s)
        return r(f), f.length ? p(new cc(f, ki(f))) : d(o);
    };
    l.length || (r(f), d(o)), l.forEach(function(g) {
      var x = e[g];
      a.indexOf(g) !== -1 ? sc(x, n, h) : q$(x, n, h);
    });
  });
  return u.catch(function(d) {
    return d;
  }), u;
}
function X$(e) {
  return !!(e && e.message !== void 0);
}
function K$(e, t) {
  for (var n = e, r = 0; r < t.length; r++) {
    if (n == null)
      return n;
    n = n[t[r]];
  }
  return n;
}
function uc(e, t) {
  return function(n) {
    var r;
    return e.fullFields ? r = K$(t, e.fullFields) : r = t[n.field || e.fullField], X$(n) ? (n.field = n.field || e.fullField, n.fieldValue = r, n) : {
      message: typeof n == "function" ? n() : n,
      fieldValue: r,
      field: n.field || e.fullField
    };
  };
}
function fc(e, t) {
  if (t) {
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = t[n];
        typeof r == "object" && typeof e[n] == "object" ? e[n] = Dt({}, e[n], r) : e[n] = r;
      }
  }
  return e;
}
var cd = function(t, n, r, o, i, a) {
  t.required && (!r.hasOwnProperty(t.field) || ge(n, a || t.type)) && o.push(Ie(i.messages.required, t.fullField));
}, Y$ = function(t, n, r, o, i) {
  (/^\s+$/.test(n) || n === "") && o.push(Ie(i.messages.whitespace, t.fullField));
}, _r, Q$ = function() {
  if (_r)
    return _r;
  var e = "[a-fA-F\\d:]", t = function(b) {
    return b && b.includeBoundaries ? "(?:(?<=\\s|^)(?=" + e + ")|(?<=" + e + ")(?=\\s|$))" : "";
  }, n = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", r = "[a-fA-F\\d]{1,4}", o = (`
(?:
(?:` + r + ":){7}(?:" + r + `|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:` + r + ":){6}(?:" + n + "|:" + r + `|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:` + r + ":){5}(?::" + n + "|(?::" + r + `){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:` + r + ":){4}(?:(?::" + r + "){0,1}:" + n + "|(?::" + r + `){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:` + r + ":){3}(?:(?::" + r + "){0,2}:" + n + "|(?::" + r + `){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:` + r + ":){2}(?:(?::" + r + "){0,3}:" + n + "|(?::" + r + `){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:` + r + ":){1}(?:(?::" + r + "){0,4}:" + n + "|(?::" + r + `){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::` + r + "){0,5}:" + n + "|(?::" + r + `){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), i = new RegExp("(?:^" + n + "$)|(?:^" + o + "$)"), a = new RegExp("^" + n + "$"), l = new RegExp("^" + o + "$"), s = function(b) {
    return b && b.exact ? i : new RegExp("(?:" + t(b) + n + t(b) + ")|(?:" + t(b) + o + t(b) + ")", "g");
  };
  s.v4 = function(y) {
    return y && y.exact ? a : new RegExp("" + t(y) + n + t(y), "g");
  }, s.v6 = function(y) {
    return y && y.exact ? l : new RegExp("" + t(y) + o + t(y), "g");
  };
  var c = "(?:(?:[a-z]+:)?//)", f = "(?:\\S+(?::\\S*)?@)?", u = s.v4().source, d = s.v6().source, p = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", h = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", g = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", x = "(?::\\d{2,5})?", v = '(?:[/?#][^\\s"]*)?', $ = "(?:" + c + "|www\\.)" + f + "(?:localhost|" + u + "|" + d + "|" + p + h + g + ")" + x + v;
  return _r = new RegExp("(?:^" + $ + "$)", "i"), _r;
}, dc = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, Dn = {
  integer: function(t) {
    return Dn.number(t) && parseInt(t, 10) === t;
  },
  float: function(t) {
    return Dn.number(t) && !Dn.integer(t);
  },
  array: function(t) {
    return Array.isArray(t);
  },
  regexp: function(t) {
    if (t instanceof RegExp)
      return !0;
    try {
      return !!new RegExp(t);
    } catch {
      return !1;
    }
  },
  date: function(t) {
    return typeof t.getTime == "function" && typeof t.getMonth == "function" && typeof t.getYear == "function" && !isNaN(t.getTime());
  },
  number: function(t) {
    return isNaN(t) ? !1 : typeof t == "number";
  },
  object: function(t) {
    return typeof t == "object" && !Dn.array(t);
  },
  method: function(t) {
    return typeof t == "function";
  },
  email: function(t) {
    return typeof t == "string" && t.length <= 320 && !!t.match(dc.email);
  },
  url: function(t) {
    return typeof t == "string" && t.length <= 2048 && !!t.match(Q$());
  },
  hex: function(t) {
    return typeof t == "string" && !!t.match(dc.hex);
  }
}, Z$ = function(t, n, r, o, i) {
  if (t.required && n === void 0) {
    cd(t, n, r, o, i);
    return;
  }
  var a = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], l = t.type;
  a.indexOf(l) > -1 ? Dn[l](n) || o.push(Ie(i.messages.types[l], t.fullField, t.type)) : l && typeof n !== t.type && o.push(Ie(i.messages.types[l], t.fullField, t.type));
}, J$ = function(t, n, r, o, i) {
  var a = typeof t.len == "number", l = typeof t.min == "number", s = typeof t.max == "number", c = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, f = n, u = null, d = typeof n == "number", p = typeof n == "string", h = Array.isArray(n);
  if (d ? u = "number" : p ? u = "string" : h && (u = "array"), !u)
    return !1;
  h && (f = n.length), p && (f = n.replace(c, "_").length), a ? f !== t.len && o.push(Ie(i.messages[u].len, t.fullField, t.len)) : l && !s && f < t.min ? o.push(Ie(i.messages[u].min, t.fullField, t.min)) : s && !l && f > t.max ? o.push(Ie(i.messages[u].max, t.fullField, t.max)) : l && s && (f < t.min || f > t.max) && o.push(Ie(i.messages[u].range, t.fullField, t.min, t.max));
}, nn = "enum", eS = function(t, n, r, o, i) {
  t[nn] = Array.isArray(t[nn]) ? t[nn] : [], t[nn].indexOf(n) === -1 && o.push(Ie(i.messages[nn], t.fullField, t[nn].join(", ")));
}, tS = function(t, n, r, o, i) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp)
      t.pattern.lastIndex = 0, t.pattern.test(n) || o.push(Ie(i.messages.pattern.mismatch, t.fullField, n, t.pattern));
    else if (typeof t.pattern == "string") {
      var a = new RegExp(t.pattern);
      a.test(n) || o.push(Ie(i.messages.pattern.mismatch, t.fullField, n, t.pattern));
    }
  }
}, K = {
  required: cd,
  whitespace: Y$,
  type: Z$,
  range: J$,
  enum: eS,
  pattern: tS
}, nS = function(t, n, r, o, i) {
  var a = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (ge(n, "string") && !t.required)
      return r();
    K.required(t, n, o, a, i, "string"), ge(n, "string") || (K.type(t, n, o, a, i), K.range(t, n, o, a, i), K.pattern(t, n, o, a, i), t.whitespace === !0 && K.whitespace(t, n, o, a, i));
  }
  r(a);
}, rS = function(t, n, r, o, i) {
  var a = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (ge(n) && !t.required)
      return r();
    K.required(t, n, o, a, i), n !== void 0 && K.type(t, n, o, a, i);
  }
  r(a);
}, oS = function(t, n, r, o, i) {
  var a = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (n === "" && (n = void 0), ge(n) && !t.required)
      return r();
    K.required(t, n, o, a, i), n !== void 0 && (K.type(t, n, o, a, i), K.range(t, n, o, a, i));
  }
  r(a);
}, iS = function(t, n, r, o, i) {
  var a = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (ge(n) && !t.required)
      return r();
    K.required(t, n, o, a, i), n !== void 0 && K.type(t, n, o, a, i);
  }
  r(a);
}, aS = function(t, n, r, o, i) {
  var a = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (ge(n) && !t.required)
      return r();
    K.required(t, n, o, a, i), ge(n) || K.type(t, n, o, a, i);
  }
  r(a);
}, lS = function(t, n, r, o, i) {
  var a = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (ge(n) && !t.required)
      return r();
    K.required(t, n, o, a, i), n !== void 0 && (K.type(t, n, o, a, i), K.range(t, n, o, a, i));
  }
  r(a);
}, sS = function(t, n, r, o, i) {
  var a = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (ge(n) && !t.required)
      return r();
    K.required(t, n, o, a, i), n !== void 0 && (K.type(t, n, o, a, i), K.range(t, n, o, a, i));
  }
  r(a);
}, cS = function(t, n, r, o, i) {
  var a = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (n == null && !t.required)
      return r();
    K.required(t, n, o, a, i, "array"), n != null && (K.type(t, n, o, a, i), K.range(t, n, o, a, i));
  }
  r(a);
}, uS = function(t, n, r, o, i) {
  var a = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (ge(n) && !t.required)
      return r();
    K.required(t, n, o, a, i), n !== void 0 && K.type(t, n, o, a, i);
  }
  r(a);
}, fS = "enum", dS = function(t, n, r, o, i) {
  var a = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (ge(n) && !t.required)
      return r();
    K.required(t, n, o, a, i), n !== void 0 && K[fS](t, n, o, a, i);
  }
  r(a);
}, pS = function(t, n, r, o, i) {
  var a = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (ge(n, "string") && !t.required)
      return r();
    K.required(t, n, o, a, i), ge(n, "string") || K.pattern(t, n, o, a, i);
  }
  r(a);
}, mS = function(t, n, r, o, i) {
  var a = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (ge(n, "date") && !t.required)
      return r();
    if (K.required(t, n, o, a, i), !ge(n, "date")) {
      var s;
      n instanceof Date ? s = n : s = new Date(n), K.type(t, s, o, a, i), s && K.range(t, s.getTime(), o, a, i);
    }
  }
  r(a);
}, gS = function(t, n, r, o, i) {
  var a = [], l = Array.isArray(n) ? "array" : typeof n;
  K.required(t, n, o, a, i, l), r(a);
}, Jo = function(t, n, r, o, i) {
  var a = t.type, l = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (ge(n, a) && !t.required)
      return r();
    K.required(t, n, o, l, i, a), ge(n, a) || K.type(t, n, o, l, i);
  }
  r(l);
}, hS = function(t, n, r, o, i) {
  var a = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (ge(n) && !t.required)
      return r();
    K.required(t, n, o, a, i);
  }
  r(a);
}, Vn = {
  string: nS,
  method: rS,
  number: oS,
  boolean: iS,
  regexp: aS,
  integer: lS,
  float: sS,
  array: cS,
  object: uS,
  enum: dS,
  pattern: pS,
  date: mS,
  url: Jo,
  hex: Jo,
  email: Jo,
  required: gS,
  any: hS
};
function qi() {
  return {
    default: "Validation error on field %s",
    required: "%s is required",
    enum: "%s must be one of %s",
    whitespace: "%s cannot be empty",
    date: {
      format: "%s date %s is invalid for format %s",
      parse: "%s date could not be parsed, %s is invalid ",
      invalid: "%s date %s is invalid"
    },
    types: {
      string: "%s is not a %s",
      method: "%s is not a %s (function)",
      array: "%s is not an %s",
      object: "%s is not an %s",
      number: "%s is not a %s",
      date: "%s is not a %s",
      boolean: "%s is not a %s",
      integer: "%s is not an %s",
      float: "%s is not a %s",
      regexp: "%s is not a valid %s",
      email: "%s is not a valid %s",
      url: "%s is not a valid %s",
      hex: "%s is not a valid %s"
    },
    string: {
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters"
    },
    number: {
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s"
    },
    array: {
      len: "%s must be exactly %s in length",
      min: "%s cannot be less than %s in length",
      max: "%s cannot be greater than %s in length",
      range: "%s must be between %s and %s in length"
    },
    pattern: {
      mismatch: "%s value %s does not match pattern %s"
    },
    clone: function() {
      var t = JSON.parse(JSON.stringify(this));
      return t.clone = this.clone, t;
    }
  };
}
var Gi = qi(), ur = /* @__PURE__ */ function() {
  function e(n) {
    this.rules = null, this._messages = Gi, this.define(n);
  }
  var t = e.prototype;
  return t.define = function(r) {
    var o = this;
    if (!r)
      throw new Error("Cannot configure a schema with no rules");
    if (typeof r != "object" || Array.isArray(r))
      throw new Error("Rules must be an object");
    this.rules = {}, Object.keys(r).forEach(function(i) {
      var a = r[i];
      o.rules[i] = Array.isArray(a) ? a : [a];
    });
  }, t.messages = function(r) {
    return r && (this._messages = fc(qi(), r)), this._messages;
  }, t.validate = function(r, o, i) {
    var a = this;
    o === void 0 && (o = {}), i === void 0 && (i = function() {
    });
    var l = r, s = o, c = i;
    if (typeof s == "function" && (c = s, s = {}), !this.rules || Object.keys(this.rules).length === 0)
      return c && c(null, l), Promise.resolve(l);
    function f(g) {
      var x = [], v = {};
      function $(b) {
        if (Array.isArray(b)) {
          var S;
          x = (S = x).concat.apply(S, b);
        } else
          x.push(b);
      }
      for (var y = 0; y < g.length; y++)
        $(g[y]);
      x.length ? (v = ki(x), c(x, v)) : c(null, l);
    }
    if (s.messages) {
      var u = this.messages();
      u === Gi && (u = qi()), fc(u, s.messages), s.messages = u;
    } else
      s.messages = this.messages();
    var d = {}, p = s.keys || Object.keys(this.rules);
    p.forEach(function(g) {
      var x = a.rules[g], v = l[g];
      x.forEach(function($) {
        var y = $;
        typeof y.transform == "function" && (l === r && (l = Dt({}, l)), v = l[g] = y.transform(v)), typeof y == "function" ? y = {
          validator: y
        } : y = Dt({}, y), y.validator = a.getValidationMethod(y), y.validator && (y.field = g, y.fullField = y.fullField || g, y.type = a.getType(y), d[g] = d[g] || [], d[g].push({
          rule: y,
          value: v,
          source: l,
          field: g
        }));
      });
    });
    var h = {};
    return U$(d, s, function(g, x) {
      var v = g.rule, $ = (v.type === "object" || v.type === "array") && (typeof v.fields == "object" || typeof v.defaultField == "object");
      $ = $ && (v.required || !v.required && g.value), v.field = g.field;
      function y(O, C) {
        return Dt({}, C, {
          fullField: v.fullField + "." + O,
          fullFields: v.fullFields ? [].concat(v.fullFields, [O]) : [O]
        });
      }
      function b(O) {
        O === void 0 && (O = []);
        var C = Array.isArray(O) ? O : [O];
        !s.suppressWarning && C.length && e.warning("async-validator:", C), C.length && v.message !== void 0 && (C = [].concat(v.message));
        var E = C.map(uc(v, l));
        if (s.first && E.length)
          return h[v.field] = 1, x(E);
        if (!$)
          x(E);
        else {
          if (v.required && !g.value)
            return v.message !== void 0 ? E = [].concat(v.message).map(uc(v, l)) : s.error && (E = [s.error(v, Ie(s.messages.required, v.field))]), x(E);
          var A = {};
          v.defaultField && Object.keys(g.value).map(function(R) {
            A[R] = v.defaultField;
          }), A = Dt({}, A, g.rule.fields);
          var _ = {};
          Object.keys(A).forEach(function(R) {
            var D = A[R], z = Array.isArray(D) ? D : [D];
            _[R] = z.map(y.bind(null, R));
          });
          var M = new e(_);
          M.messages(s.messages), g.rule.options && (g.rule.options.messages = s.messages, g.rule.options.error = s.error), M.validate(g.value, g.rule.options || s, function(R) {
            var D = [];
            E && E.length && D.push.apply(D, E), R && R.length && D.push.apply(D, R), x(D.length ? D : null);
          });
        }
      }
      var S;
      if (v.asyncValidator)
        S = v.asyncValidator(v, g.value, b, g.source, s);
      else if (v.validator) {
        try {
          S = v.validator(v, g.value, b, g.source, s);
        } catch (O) {
          console.error == null || console.error(O), s.suppressValidatorError || setTimeout(function() {
            throw O;
          }, 0), b(O.message);
        }
        S === !0 ? b() : S === !1 ? b(typeof v.message == "function" ? v.message(v.fullField || v.field) : v.message || (v.fullField || v.field) + " fails") : S instanceof Array ? b(S) : S instanceof Error && b(S.message);
      }
      S && S.then && S.then(function() {
        return b();
      }, function(O) {
        return b(O);
      });
    }, function(g) {
      f(g);
    }, l);
  }, t.getType = function(r) {
    if (r.type === void 0 && r.pattern instanceof RegExp && (r.type = "pattern"), typeof r.validator != "function" && r.type && !Vn.hasOwnProperty(r.type))
      throw new Error(Ie("Unknown rule type %s", r.type));
    return r.type || "string";
  }, t.getValidationMethod = function(r) {
    if (typeof r.validator == "function")
      return r.validator;
    var o = Object.keys(r), i = o.indexOf("message");
    return i !== -1 && o.splice(i, 1), o.length === 1 && o[0] === "required" ? Vn.required : Vn[this.getType(r)] || void 0;
  }, e;
}();
ur.register = function(t, n) {
  if (typeof n != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  Vn[t] = n;
};
ur.warning = sd;
ur.messages = Gi;
ur.validators = Vn;
function xt(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function ud(e, t) {
  let n = e;
  for (let r = 0; r < t.length; r += 1) {
    if (n == null)
      return;
    n = n[t[r]];
  }
  return n;
}
function fd(e, t, n, r) {
  if (!t.length)
    return n;
  const [o, ...i] = t;
  let a;
  return !e && typeof o == "number" ? a = [] : Array.isArray(e) ? a = [...e] : a = m({}, e), r && n === void 0 && i.length === 1 ? delete a[o][i[0]] : a[o] = fd(a[o], i, n, r), a;
}
function vS(e, t, n) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && r && n === void 0 && !ud(e, t.slice(0, -1)) ? e : fd(e, t, n, r);
}
function Ui(e) {
  return xt(e);
}
function yS(e, t) {
  return ud(e, t);
}
function bS(e, t, n) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return vS(e, t, n, r);
}
function CS(e, t) {
  return e && e.some((n) => wS(n, t));
}
function pc(e) {
  return typeof e == "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function dd(e, t) {
  const n = Array.isArray(e) ? [...e] : m({}, e);
  return t && Object.keys(t).forEach((r) => {
    const o = n[r], i = t[r], a = pc(o) && pc(i);
    n[r] = a ? dd(o, i || {}) : i;
  }), n;
}
function xS(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  return n.reduce((o, i) => dd(o, i), e);
}
function mc(e, t) {
  let n = {};
  return t.forEach((r) => {
    const o = yS(e, r);
    n = bS(n, r, o);
  }), n;
}
function wS(e, t) {
  return !e || !t || e.length !== t.length ? !1 : e.every((n, r) => t[r] === n);
}
const _e = "'${name}' is not a valid ${type}", _o = {
  default: "Validation error on field '${name}'",
  required: "'${name}' is required",
  enum: "'${name}' must be one of [${enum}]",
  whitespace: "'${name}' cannot be empty",
  date: {
    format: "'${name}' is invalid for format date",
    parse: "'${name}' could not be parsed as date",
    invalid: "'${name}' is invalid date"
  },
  types: {
    string: _e,
    method: _e,
    array: _e,
    object: _e,
    number: _e,
    date: _e,
    boolean: _e,
    integer: _e,
    float: _e,
    regexp: _e,
    email: _e,
    url: _e,
    hex: _e
  },
  string: {
    len: "'${name}' must be exactly ${len} characters",
    min: "'${name}' must be at least ${min} characters",
    max: "'${name}' cannot be longer than ${max} characters",
    range: "'${name}' must be between ${min} and ${max} characters"
  },
  number: {
    len: "'${name}' must equal ${len}",
    min: "'${name}' cannot be less than ${min}",
    max: "'${name}' cannot be greater than ${max}",
    range: "'${name}' must be between ${min} and ${max}"
  },
  array: {
    len: "'${name}' must be exactly ${len} in length",
    min: "'${name}' cannot be less than ${min} in length",
    max: "'${name}' cannot be greater than ${max} in length",
    range: "'${name}' must be between ${min} and ${max} in length"
  },
  pattern: {
    mismatch: "'${name}' does not match pattern ${pattern}"
  }
};
var Ao = function(e, t, n, r) {
  function o(i) {
    return i instanceof n ? i : new n(function(a) {
      a(i);
    });
  }
  return new (n || (n = Promise))(function(i, a) {
    function l(f) {
      try {
        c(r.next(f));
      } catch (u) {
        a(u);
      }
    }
    function s(f) {
      try {
        c(r.throw(f));
      } catch (u) {
        a(u);
      }
    }
    function c(f) {
      f.done ? i(f.value) : o(f.value).then(l, s);
    }
    c((r = r.apply(e, t || [])).next());
  });
};
const $S = ur;
function SS(e, t) {
  return e.replace(/\$\{\w+\}/g, (n) => {
    const r = n.slice(2, -1);
    return t[r];
  });
}
function Xi(e, t, n, r, o) {
  return Ao(this, void 0, void 0, function* () {
    const i = m({}, n);
    delete i.ruleIndex, delete i.trigger;
    let a = null;
    i && i.type === "array" && i.defaultField && (a = i.defaultField, delete i.defaultField);
    const l = new $S({
      [e]: [i]
    }), s = xS({}, _o, r.validateMessages);
    l.messages(s);
    let c = [];
    try {
      yield Promise.resolve(l.validate({
        [e]: t
      }, m({}, r)));
    } catch (d) {
      d.errors ? c = d.errors.map((p, h) => {
        let {
          message: g
        } = p;
        return (
          // Wrap VueNode with `key`
          Gc(g) ? ea(g, {
            key: `error_${h}`
          }) : g
        );
      }) : (console.error(d), c = [s.default()]);
    }
    if (!c.length && a)
      return (yield Promise.all(t.map((p, h) => Xi(`${e}.${h}`, p, a, r, o)))).reduce((p, h) => [...p, ...h], []);
    const f = m(m(m({}, n), {
      name: e,
      enum: (n.enum || []).join(", ")
    }), o);
    return c.map((d) => typeof d == "string" ? SS(d, f) : d);
  });
}
function pd(e, t, n, r, o, i) {
  const a = e.join("."), l = n.map((c, f) => {
    const u = c.validator, d = m(m({}, c), {
      ruleIndex: f
    });
    return u && (d.validator = (p, h, g) => {
      let x = !1;
      const $ = u(p, h, function() {
        for (var y = arguments.length, b = new Array(y), S = 0; S < y; S++)
          b[S] = arguments[S];
        Promise.resolve().then(() => {
          Gr(!x, "Your validator function has already return a promise. `callback` will be ignored."), x || g(...b);
        });
      });
      x = $ && typeof $.then == "function" && typeof $.catch == "function", Gr(x, "`callback` is deprecated. Please return a promise instead."), x && $.then(() => {
        g();
      }).catch((y) => {
        g(y || " ");
      });
    }), d;
  }).sort((c, f) => {
    let {
      warningOnly: u,
      ruleIndex: d
    } = c, {
      warningOnly: p,
      ruleIndex: h
    } = f;
    return !!u == !!p ? d - h : u ? 1 : -1;
  });
  let s;
  if (o === !0)
    s = new Promise((c, f) => Ao(this, void 0, void 0, function* () {
      for (let u = 0; u < l.length; u += 1) {
        const d = l[u], p = yield Xi(a, t, d, r, i);
        if (p.length) {
          f([{
            errors: p,
            rule: d
          }]);
          return;
        }
      }
      c([]);
    }));
  else {
    const c = l.map((f) => Xi(a, t, f, r, i).then((u) => ({
      errors: u,
      rule: f
    })));
    s = (o ? TS(c) : OS(c)).then((f) => Promise.reject(f));
  }
  return s.catch((c) => c), s;
}
function OS(e) {
  return Ao(this, void 0, void 0, function* () {
    return Promise.all(e).then((t) => [].concat(...t));
  });
}
function TS(e) {
  return Ao(this, void 0, void 0, function* () {
    let t = 0;
    return new Promise((n) => {
      e.forEach((r) => {
        r.then((o) => {
          o.errors.length && n([o]), t += 1, t === e.length && n([]);
        });
      });
    });
  });
}
const md = Symbol("formContextKey"), gd = (e) => {
  me(md, e);
}, Ua = () => ve(md, {
  name: T(() => {
  }),
  labelAlign: T(() => "right"),
  vertical: T(() => !1),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addField: (e, t) => {
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  removeField: (e) => {
  },
  model: T(() => {
  }),
  rules: T(() => {
  }),
  colon: T(() => {
  }),
  labelWrap: T(() => {
  }),
  labelCol: T(() => {
  }),
  requiredMark: T(() => !1),
  validateTrigger: T(() => {
  }),
  onValidate: () => {
  },
  validateMessages: T(() => _o)
}), hd = Symbol("formItemPrefixContextKey"), PS = (e) => {
  me(hd, e);
}, ES = () => ve(hd, {
  prefixCls: T(() => "")
});
function _S(e) {
  return typeof e == "number" ? `${e} ${e} auto` : /^\d+(\.\d+)?(px|em|rem|%)$/.test(e) ? `0 0 ${e}` : e;
}
const AS = () => ({
  span: [String, Number],
  order: [String, Number],
  offset: [String, Number],
  push: [String, Number],
  pull: [String, Number],
  xs: {
    type: [String, Number, Object],
    default: void 0
  },
  sm: {
    type: [String, Number, Object],
    default: void 0
  },
  md: {
    type: [String, Number, Object],
    default: void 0
  },
  lg: {
    type: [String, Number, Object],
    default: void 0
  },
  xl: {
    type: [String, Number, Object],
    default: void 0
  },
  xxl: {
    type: [String, Number, Object],
    default: void 0
  },
  prefixCls: String,
  flex: [String, Number]
}), IS = ["xs", "sm", "md", "lg", "xl", "xxl"], vd = V({
  compatConfig: {
    MODE: 3
  },
  name: "ACol",
  inheritAttrs: !1,
  props: AS(),
  setup(e, t) {
    let {
      slots: n,
      attrs: r
    } = t;
    const {
      gutter: o,
      supportFlexGap: i,
      wrap: a
    } = I$(), {
      prefixCls: l,
      direction: s
    } = Pe("col", e), [c, f] = D$(l), u = T(() => {
      const {
        span: p,
        order: h,
        offset: g,
        push: x,
        pull: v
      } = e, $ = l.value;
      let y = {};
      return IS.forEach((b) => {
        let S = {};
        const O = e[b];
        typeof O == "number" ? S.span = O : typeof O == "object" && (S = O || {}), y = m(m({}, y), {
          [`${$}-${b}-${S.span}`]: S.span !== void 0,
          [`${$}-${b}-order-${S.order}`]: S.order || S.order === 0,
          [`${$}-${b}-offset-${S.offset}`]: S.offset || S.offset === 0,
          [`${$}-${b}-push-${S.push}`]: S.push || S.push === 0,
          [`${$}-${b}-pull-${S.pull}`]: S.pull || S.pull === 0,
          [`${$}-rtl`]: s.value === "rtl"
        });
      }), Y($, {
        [`${$}-${p}`]: p !== void 0,
        [`${$}-order-${h}`]: h,
        [`${$}-offset-${g}`]: g,
        [`${$}-push-${x}`]: x,
        [`${$}-pull-${v}`]: v
      }, y, r.class, f.value);
    }), d = T(() => {
      const {
        flex: p
      } = e, h = o.value, g = {};
      if (h && h[0] > 0) {
        const x = `${h[0] / 2}px`;
        g.paddingLeft = x, g.paddingRight = x;
      }
      if (h && h[1] > 0 && !i.value) {
        const x = `${h[1] / 2}px`;
        g.paddingTop = x, g.paddingBottom = x;
      }
      return p && (g.flex = _S(p), a.value === !1 && !g.minWidth && (g.minWidth = 0)), g;
    });
    return () => {
      var p;
      return c(w("div", j(j({}, r), {}, {
        class: u.value,
        style: [d.value, r.style]
      }), [(p = n.default) === null || p === void 0 ? void 0 : p.call(n)]));
    };
  }
});
var MS = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { tag: "path", attrs: { d: "M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z" } }] }, name: "question-circle", theme: "outlined" };
function gc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      FS(e, o, n[o]);
    });
  }
  return e;
}
function FS(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Xa = function(t, n) {
  var r = gc({}, t, n.attrs);
  return w($e, gc({}, r, {
    icon: MS
  }), null);
};
Xa.displayName = "QuestionCircleOutlined";
Xa.inheritAttrs = !1;
const Ka = (e, t) => {
  let {
    slots: n,
    emit: r,
    attrs: o
  } = t;
  var i, a, l, s, c;
  const {
    prefixCls: f,
    htmlFor: u,
    labelCol: d,
    labelAlign: p,
    colon: h,
    required: g,
    requiredMark: x
  } = m(m({}, e), o), [v] = co("Form"), $ = (i = e.label) !== null && i !== void 0 ? i : (a = n.label) === null || a === void 0 ? void 0 : a.call(n);
  if (!$)
    return null;
  const {
    vertical: y,
    labelAlign: b,
    labelCol: S,
    labelWrap: O,
    colon: C
  } = Ua(), E = d || (S == null ? void 0 : S.value) || {}, A = p || (b == null ? void 0 : b.value), _ = `${f}-item-label`, M = Y(_, A === "left" && `${_}-left`, E.class, {
    [`${_}-wrap`]: !!O.value
  });
  let R = $;
  const D = h === !0 || (C == null ? void 0 : C.value) !== !1 && h !== !1;
  if (D && !y.value && typeof $ == "string" && $.trim() !== "" && (R = $.replace(/[:|：]\s*$/, "")), e.tooltip || n.tooltip) {
    const F = w("span", {
      class: `${f}-item-tooltip`
    }, [w(Qw, {
      title: e.tooltip
    }, {
      default: () => [w(Xa, null, null)]
    })]);
    R = w(Te, null, [R, n.tooltip ? (l = n.tooltip) === null || l === void 0 ? void 0 : l.call(n, {
      class: `${f}-item-tooltip`
    }) : F]);
  }
  x === "optional" && !g && (R = w(Te, null, [R, w("span", {
    class: `${f}-item-optional`
  }, [((s = v.value) === null || s === void 0 ? void 0 : s.optional) || ((c = $t.Form) === null || c === void 0 ? void 0 : c.optional)])]));
  const P = Y({
    [`${f}-item-required`]: g,
    [`${f}-item-required-mark-optional`]: x === "optional",
    [`${f}-item-no-colon`]: !D
  });
  return w(vd, j(j({}, E), {}, {
    class: M
  }), {
    default: () => [w("label", {
      for: u,
      class: P,
      title: typeof $ == "string" ? $ : "",
      onClick: (F) => r("click", F)
    }, [R])]
  });
};
Ka.displayName = "FormItemLabel";
Ka.inheritAttrs = !1;
const NS = (e) => {
  const {
    componentCls: t
  } = e, n = `${t}-show-help`, r = `${t}-show-help-item`;
  return {
    [n]: {
      // Explain holder
      transition: `opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`,
      "&-appear, &-enter": {
        opacity: 0,
        "&-active": {
          opacity: 1
        }
      },
      "&-leave": {
        opacity: 1,
        "&-active": {
          opacity: 0
        }
      },
      // Explain
      [r]: {
        overflow: "hidden",
        transition: `height ${e.motionDurationSlow} ${e.motionEaseInOut},
                     opacity ${e.motionDurationSlow} ${e.motionEaseInOut},
                     transform ${e.motionDurationSlow} ${e.motionEaseInOut} !important`,
        [`&${r}-appear, &${r}-enter`]: {
          transform: "translateY(-5px)",
          opacity: 0,
          "&-active": {
            transform: "translateY(0)",
            opacity: 1
          }
        },
        [`&${r}-leave-active`]: {
          transform: "translateY(-5px)"
        }
      }
    }
  };
}, RS = (e) => ({
  legend: {
    display: "block",
    width: "100%",
    marginBottom: e.marginLG,
    padding: 0,
    color: e.colorTextDescription,
    fontSize: e.fontSizeLG,
    lineHeight: "inherit",
    border: 0,
    borderBottom: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`
  },
  label: {
    fontSize: e.fontSize
  },
  'input[type="search"]': {
    boxSizing: "border-box"
  },
  // Position radios and checkboxes better
  'input[type="radio"], input[type="checkbox"]': {
    lineHeight: "normal"
  },
  'input[type="file"]': {
    display: "block"
  },
  // Make range inputs behave like textual form controls
  'input[type="range"]': {
    display: "block",
    width: "100%"
  },
  // Make multiple select elements height not fixed
  "select[multiple], select[size]": {
    height: "auto"
  },
  // Focus for file, radio, and checkbox
  "input[type='file']:focus,\n  input[type='radio']:focus,\n  input[type='checkbox']:focus": {
    outline: 0,
    boxShadow: `0 0 0 ${e.controlOutlineWidth}px ${e.controlOutline}`
  },
  // Adjust output element
  output: {
    display: "block",
    paddingTop: 15,
    color: e.colorText,
    fontSize: e.fontSize,
    lineHeight: e.lineHeight
  }
}), hc = (e, t) => {
  const {
    formItemCls: n
  } = e;
  return {
    [n]: {
      [`${n}-label > label`]: {
        height: t
      },
      [`${n}-control-input`]: {
        minHeight: t
      }
    }
  };
}, jS = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [e.componentCls]: m(m(m({}, On(e)), RS(e)), {
      [`${t}-text`]: {
        display: "inline-block",
        paddingInlineEnd: e.paddingSM
      },
      // ================================================================
      // =                             Size                             =
      // ================================================================
      "&-small": m({}, hc(e, e.controlHeightSM)),
      "&-large": m({}, hc(e, e.controlHeightLG))
    })
  };
}, DS = (e) => {
  const {
    formItemCls: t,
    iconCls: n,
    componentCls: r,
    rootPrefixCls: o
  } = e;
  return {
    [t]: m(m({}, On(e)), {
      marginBottom: e.marginLG,
      verticalAlign: "top",
      "&-with-help": {
        transition: "none"
      },
      [`&-hidden,
        &-hidden.${o}-row`]: {
        // https://github.com/ant-design/ant-design/issues/26141
        display: "none"
      },
      "&-has-warning": {
        [`${t}-split`]: {
          color: e.colorError
        }
      },
      "&-has-error": {
        [`${t}-split`]: {
          color: e.colorWarning
        }
      },
      // ==============================================================
      // =                            Label                           =
      // ==============================================================
      [`${t}-label`]: {
        display: "inline-block",
        flexGrow: 0,
        overflow: "hidden",
        whiteSpace: "nowrap",
        textAlign: "end",
        verticalAlign: "middle",
        "&-left": {
          textAlign: "start"
        },
        "&-wrap": {
          overflow: "unset",
          lineHeight: `${e.lineHeight} - 0.25em`,
          whiteSpace: "unset"
        },
        "> label": {
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
          maxWidth: "100%",
          height: e.controlHeight,
          color: e.colorTextHeading,
          fontSize: e.fontSize,
          [`> ${n}`]: {
            fontSize: e.fontSize,
            verticalAlign: "top"
          },
          // Required mark
          [`&${t}-required:not(${t}-required-mark-optional)::before`]: {
            display: "inline-block",
            marginInlineEnd: e.marginXXS,
            color: e.colorError,
            fontSize: e.fontSize,
            fontFamily: "SimSun, sans-serif",
            lineHeight: 1,
            content: '"*"',
            [`${r}-hide-required-mark &`]: {
              display: "none"
            }
          },
          // Optional mark
          [`${t}-optional`]: {
            display: "inline-block",
            marginInlineStart: e.marginXXS,
            color: e.colorTextDescription,
            [`${r}-hide-required-mark &`]: {
              display: "none"
            }
          },
          // Optional mark
          [`${t}-tooltip`]: {
            color: e.colorTextDescription,
            cursor: "help",
            writingMode: "horizontal-tb",
            marginInlineStart: e.marginXXS
          },
          "&::after": {
            content: '":"',
            position: "relative",
            marginBlock: 0,
            marginInlineStart: e.marginXXS / 2,
            marginInlineEnd: e.marginXS
          },
          [`&${t}-no-colon::after`]: {
            content: '" "'
          }
        }
      },
      // ==============================================================
      // =                            Input                           =
      // ==============================================================
      [`${t}-control`]: {
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        [`&:first-child:not([class^="'${o}-col-'"]):not([class*="' ${o}-col-'"])`]: {
          width: "100%"
        },
        "&-input": {
          position: "relative",
          display: "flex",
          alignItems: "center",
          minHeight: e.controlHeight,
          "&-content": {
            flex: "auto",
            maxWidth: "100%"
          }
        }
      },
      // ==============================================================
      // =                           Explain                          =
      // ==============================================================
      [t]: {
        "&-explain, &-extra": {
          clear: "both",
          color: e.colorTextDescription,
          fontSize: e.fontSize,
          lineHeight: e.lineHeight
        },
        "&-explain-connected": {
          width: "100%"
        },
        "&-extra": {
          minHeight: e.controlHeightSM,
          transition: `color ${e.motionDurationMid} ${e.motionEaseOut}`
          // sync input color transition
        },
        "&-explain": {
          "&-error": {
            color: e.colorError
          },
          "&-warning": {
            color: e.colorWarning
          }
        }
      },
      [`&-with-help ${t}-explain`]: {
        height: "auto",
        opacity: 1
      },
      // ==============================================================
      // =                        Feedback Icon                       =
      // ==============================================================
      [`${t}-feedback-icon`]: {
        fontSize: e.fontSize,
        textAlign: "center",
        visibility: "visible",
        animationName: Ha,
        animationDuration: e.motionDurationMid,
        animationTimingFunction: e.motionEaseOutBack,
        pointerEvents: "none",
        "&-success": {
          color: e.colorSuccess
        },
        "&-error": {
          color: e.colorError
        },
        "&-warning": {
          color: e.colorWarning
        },
        "&-validating": {
          color: e.colorPrimary
        }
      }
    })
  };
}, BS = (e) => {
  const {
    componentCls: t,
    formItemCls: n,
    rootPrefixCls: r
  } = e;
  return {
    [`${t}-horizontal`]: {
      [`${n}-label`]: {
        flexGrow: 0
      },
      [`${n}-control`]: {
        flex: "1 1 0",
        // https://github.com/ant-design/ant-design/issues/32777
        // https://github.com/ant-design/ant-design/issues/33773
        minWidth: 0
      },
      // https://github.com/ant-design/ant-design/issues/32980
      [`${n}-label.${r}-col-24 + ${n}-control`]: {
        minWidth: "unset"
      }
    }
  };
}, LS = (e) => {
  const {
    componentCls: t,
    formItemCls: n
  } = e;
  return {
    [`${t}-inline`]: {
      display: "flex",
      flexWrap: "wrap",
      [n]: {
        flex: "none",
        flexWrap: "nowrap",
        marginInlineEnd: e.margin,
        marginBottom: 0,
        "&-with-help": {
          marginBottom: e.marginLG
        },
        [`> ${n}-label,
        > ${n}-control`]: {
          display: "inline-block",
          verticalAlign: "top"
        },
        [`> ${n}-label`]: {
          flex: "none"
        },
        [`${t}-text`]: {
          display: "inline-block"
        },
        [`${n}-has-feedback`]: {
          display: "inline-block"
        }
      }
    }
  };
}, an = (e) => ({
  margin: 0,
  padding: `0 0 ${e.paddingXS}px`,
  whiteSpace: "initial",
  textAlign: "start",
  "> label": {
    margin: 0,
    "&::after": {
      display: "none"
    }
  }
}), HS = (e) => {
  const {
    componentCls: t,
    formItemCls: n
  } = e;
  return {
    [`${n} ${n}-label`]: an(e),
    [t]: {
      [n]: {
        flexWrap: "wrap",
        [`${n}-label,
          ${n}-control`]: {
          flex: "0 0 100%",
          maxWidth: "100%"
        }
      }
    }
  };
}, zS = (e) => {
  const {
    componentCls: t,
    formItemCls: n,
    rootPrefixCls: r
  } = e;
  return {
    [`${t}-vertical`]: {
      [n]: {
        "&-row": {
          flexDirection: "column"
        },
        "&-label > label": {
          height: "auto"
        },
        [`${t}-item-control`]: {
          width: "100%"
        }
      }
    },
    [`${t}-vertical ${n}-label,
      .${r}-col-24${n}-label,
      .${r}-col-xl-24${n}-label`]: an(e),
    [`@media (max-width: ${e.screenXSMax}px)`]: [HS(e), {
      [t]: {
        [`.${r}-col-xs-24${n}-label`]: an(e)
      }
    }],
    [`@media (max-width: ${e.screenSMMax}px)`]: {
      [t]: {
        [`.${r}-col-sm-24${n}-label`]: an(e)
      }
    },
    [`@media (max-width: ${e.screenMDMax}px)`]: {
      [t]: {
        [`.${r}-col-md-24${n}-label`]: an(e)
      }
    },
    [`@media (max-width: ${e.screenLGMax}px)`]: {
      [t]: {
        [`.${r}-col-lg-24${n}-label`]: an(e)
      }
    }
  };
}, Ya = Ze("Form", (e, t) => {
  let {
    rootPrefixCls: n
  } = t;
  const r = ke(e, {
    formItemCls: `${e.componentCls}-item`,
    rootPrefixCls: n
  });
  return [jS(r), DS(r), NS(r), BS(r), LS(r), zS(r), fw(r), Ha];
}), VS = V({
  compatConfig: {
    MODE: 3
  },
  name: "ErrorList",
  inheritAttrs: !1,
  props: ["errors", "help", "onErrorVisibleChanged", "helpStatus", "warnings"],
  setup(e, t) {
    let {
      attrs: n
    } = t;
    const {
      prefixCls: r,
      status: o
    } = ES(), i = T(() => `${r.value}-item-explain`), a = T(() => !!(e.errors && e.errors.length)), l = X(o.value), [, s] = Ya(r);
    return Q([a, o], () => {
      a.value && (l.value = o.value);
    }), () => {
      var c, f;
      const u = P$(`${r.value}-show-help-item`), d = Ea(`${r.value}-show-help-item`, u);
      return d.role = "alert", d.class = [s.value, i.value, n.class, `${r.value}-show-help`], w(Ot, j(j({}, So(`${r.value}-show-help`)), {}, {
        onAfterEnter: () => e.onErrorVisibleChanged(!0),
        onAfterLeave: () => e.onErrorVisibleChanged(!1)
      }), {
        default: () => [wt(w(na, j(j({}, d), {}, {
          tag: "div"
        }), {
          default: () => [(f = e.errors) === null || f === void 0 ? void 0 : f.map((p, h) => w("div", {
            key: h,
            class: l.value ? `${i.value}-${l.value}` : ""
          }, [p]))]
        }), [[or, !!(!((c = e.errors) === null || c === void 0) && c.length)]])]
      });
    };
  }
}), WS = V({
  compatConfig: {
    MODE: 3
  },
  slots: Object,
  inheritAttrs: !1,
  props: ["prefixCls", "errors", "hasFeedback", "onDomErrorVisibleChange", "wrapperCol", "help", "extra", "status", "marginBottom", "onErrorVisibleChanged"],
  setup(e, t) {
    let {
      slots: n
    } = t;
    const r = Ua(), {
      wrapperCol: o
    } = r, i = m({}, r);
    return delete i.labelCol, delete i.wrapperCol, gd(i), PS({
      prefixCls: T(() => e.prefixCls),
      status: T(() => e.status)
    }), () => {
      var a, l, s;
      const {
        prefixCls: c,
        wrapperCol: f,
        marginBottom: u,
        onErrorVisibleChanged: d,
        help: p = (a = n.help) === null || a === void 0 ? void 0 : a.call(n),
        errors: h = Xt((l = n.errors) === null || l === void 0 ? void 0 : l.call(n)),
        // hasFeedback,
        // status,
        extra: g = (s = n.extra) === null || s === void 0 ? void 0 : s.call(n)
      } = e, x = `${c}-item`, v = f || (o == null ? void 0 : o.value) || {}, $ = Y(`${x}-control`, v.class);
      return w(vd, j(j({}, v), {}, {
        class: $
      }), {
        default: () => {
          var y;
          return w(Te, null, [w("div", {
            class: `${x}-control-input`
          }, [w("div", {
            class: `${x}-control-input-content`
          }, [(y = n.default) === null || y === void 0 ? void 0 : y.call(n)])]), u !== null || h.length ? w("div", {
            style: {
              display: "flex",
              flexWrap: "nowrap"
            }
          }, [w(VS, {
            errors: h,
            help: p,
            class: `${x}-explain-connected`,
            onErrorVisibleChanged: d
          }, null), !!u && w("div", {
            style: {
              width: 0,
              height: `${u}px`
            }
          }, null)]) : null, g ? w("div", {
            class: `${x}-extra`
          }, [g]) : null]);
        }
      });
    };
  }
});
function kS(e) {
  const t = L(e.value.slice());
  let n = null;
  return Be(() => {
    clearTimeout(n), n = setTimeout(() => {
      t.value = e.value;
    }, e.value.length ? 0 : 10);
  }), t;
}
Wt("success", "warning", "error", "validating", "");
const qS = {
  success: Et,
  warning: _t,
  error: Pt,
  validating: St
};
function ei(e, t, n) {
  let r = e;
  const o = t;
  let i = 0;
  try {
    for (let a = o.length; i < a - 1 && !(!r && !n); ++i) {
      const l = o[i];
      if (l in r)
        r = r[l];
      else {
        if (n)
          throw Error("please transfer a valid name path to form item!");
        break;
      }
    }
    if (n && !r)
      throw Error("please transfer a valid name path to form item!");
  } catch {
    console.error("please transfer a valid name path to form item!");
  }
  return {
    o: r,
    k: o[i],
    v: r ? r[o[i]] : void 0
  };
}
const GS = () => ({
  htmlFor: String,
  prefixCls: String,
  label: H.any,
  help: H.any,
  extra: H.any,
  labelCol: {
    type: Object
  },
  wrapperCol: {
    type: Object
  },
  hasFeedback: {
    type: Boolean,
    default: !1
  },
  colon: {
    type: Boolean,
    default: void 0
  },
  labelAlign: String,
  prop: {
    type: [String, Number, Array]
  },
  name: {
    type: [String, Number, Array]
  },
  rules: [Array, Object],
  autoLink: {
    type: Boolean,
    default: !0
  },
  required: {
    type: Boolean,
    default: void 0
  },
  validateFirst: {
    type: Boolean,
    default: void 0
  },
  validateStatus: H.oneOf(Wt("", "success", "warning", "error", "validating")),
  validateTrigger: {
    type: [String, Array]
  },
  messageVariables: {
    type: Object
  },
  hidden: Boolean,
  noStyle: Boolean,
  tooltip: String
});
let US = 0;
const XS = "form_item", yd = V({
  compatConfig: {
    MODE: 3
  },
  name: "AFormItem",
  inheritAttrs: !1,
  __ANT_NEW_FORM_ITEM: !0,
  props: GS(),
  slots: Object,
  setup(e, t) {
    let {
      slots: n,
      attrs: r,
      expose: o
    } = t;
    Gr(e.prop === void 0, "`prop` is deprecated. Please use `name` instead.");
    const i = `form-item-${++US}`, {
      prefixCls: a
    } = Pe("form", e), [l, s] = Ya(a), c = L(), f = Ua(), u = T(() => e.name || e.prop), d = L([]), p = L(!1), h = L(), g = T(() => {
      const B = u.value;
      return Ui(B);
    }), x = T(() => {
      if (g.value.length) {
        const B = f.name.value, U = g.value.join("_");
        return B ? `${B}_${U}` : `${XS}_${U}`;
      } else
        return;
    }), v = () => {
      const B = f.model.value;
      if (!(!B || !u.value))
        return ei(B, g.value, !0).v;
    }, $ = T(() => v()), y = L(Dr($.value)), b = T(() => {
      let B = e.validateTrigger !== void 0 ? e.validateTrigger : f.validateTrigger.value;
      return B = B === void 0 ? "change" : B, xt(B);
    }), S = T(() => {
      let B = f.rules.value;
      const U = e.rules, J = e.required !== void 0 ? {
        required: !!e.required,
        trigger: b.value
      } : [], ee = ei(B, g.value);
      B = B ? ee.o[ee.k] || ee.v : [];
      const ne = [].concat(U || B || []);
      return Ax(ne, (he) => he.required) ? ne : ne.concat(J);
    }), O = T(() => {
      const B = S.value;
      let U = !1;
      return B && B.length && B.every((J) => J.required ? (U = !0, !1) : !0), U || e.required;
    }), C = L();
    Be(() => {
      C.value = e.validateStatus;
    });
    const E = T(() => {
      let B = {};
      return typeof e.label == "string" ? B.label = e.label : e.name && (B.label = String(e.name)), e.messageVariables && (B = m(m({}, B), e.messageVariables)), B;
    }), A = (B) => {
      if (g.value.length === 0)
        return;
      const {
        validateFirst: U = !1
      } = e, {
        triggerName: J
      } = B || {};
      let ee = S.value;
      if (J && (ee = ee.filter((he) => {
        const {
          trigger: et
        } = he;
        return !et && !b.value.length ? !0 : xt(et || b.value).includes(J);
      })), !ee.length)
        return Promise.resolve();
      const ne = pd(g.value, $.value, ee, m({
        validateMessages: f.validateMessages.value
      }, B), U, E.value);
      return C.value = "validating", d.value = [], ne.catch((he) => he).then(function() {
        let he = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        if (C.value === "validating") {
          const et = he.filter((tt) => tt && tt.errors.length);
          C.value = et.length ? "error" : "success", d.value = et.map((tt) => tt.errors), f.onValidate(u.value, !d.value.length, d.value.length ? ii(d.value[0]) : null);
        }
      }), ne;
    }, _ = () => {
      A({
        triggerName: "blur"
      });
    }, M = () => {
      if (p.value) {
        p.value = !1;
        return;
      }
      A({
        triggerName: "change"
      });
    }, R = () => {
      C.value = e.validateStatus, p.value = !1, d.value = [];
    }, D = () => {
      var B;
      C.value = e.validateStatus, p.value = !0, d.value = [];
      const U = f.model.value || {}, J = $.value, ee = ei(U, g.value, !0);
      Array.isArray(J) ? ee.o[ee.k] = [].concat((B = y.value) !== null && B !== void 0 ? B : []) : ee.o[ee.k] = y.value, Le(() => {
        p.value = !1;
      });
    }, z = T(() => e.htmlFor === void 0 ? x.value : e.htmlFor), P = () => {
      const B = z.value;
      if (!B || !h.value)
        return;
      const U = h.value.$el.querySelector(`[id="${B}"]`);
      U && U.focus && U.focus();
    };
    o({
      onFieldBlur: _,
      onFieldChange: M,
      clearValidate: R,
      resetField: D
    }), Bb({
      id: x,
      onFieldBlur: () => {
        e.autoLink && _();
      },
      onFieldChange: () => {
        e.autoLink && M();
      },
      clearValidate: R
    }, T(() => !!(e.autoLink && f.model.value && u.value)));
    let F = !1;
    Q(u, (B) => {
      B ? F || (F = !0, f.addField(i, {
        fieldValue: $,
        fieldId: x,
        fieldName: u,
        resetField: D,
        clearValidate: R,
        namePath: g,
        validateRules: A,
        rules: S
      })) : (F = !1, f.removeField(i));
    }, {
      immediate: !0
    }), We(() => {
      f.removeField(i);
    });
    const I = kS(d), N = T(() => e.validateStatus !== void 0 ? e.validateStatus : I.value.length ? "error" : C.value), k = T(() => ({
      [`${a.value}-item`]: !0,
      [s.value]: !0,
      // Status
      [`${a.value}-item-has-feedback`]: N.value && e.hasFeedback,
      [`${a.value}-item-has-success`]: N.value === "success",
      [`${a.value}-item-has-warning`]: N.value === "warning",
      [`${a.value}-item-has-error`]: N.value === "error",
      [`${a.value}-item-is-validating`]: N.value === "validating",
      [`${a.value}-item-hidden`]: e.hidden
    })), G = Ye({});
    Ff.useProvide(G), Be(() => {
      let B;
      if (e.hasFeedback) {
        const U = N.value && qS[N.value];
        B = U ? w("span", {
          class: Y(`${a.value}-item-feedback-icon`, `${a.value}-item-feedback-icon-${N.value}`)
        }, [w(U, null, null)]) : null;
      }
      m(G, {
        status: N.value,
        hasFeedback: e.hasFeedback,
        feedbackIcon: B,
        isFormItemInput: !0
      });
    });
    const Z = L(null), oe = L(!1), ae = () => {
      if (c.value) {
        const B = getComputedStyle(c.value);
        Z.value = parseInt(B.marginBottom, 10);
      }
    };
    we(() => {
      Q(oe, () => {
        oe.value && ae();
      }, {
        flush: "post",
        immediate: !0
      });
    });
    const ce = (B) => {
      B || (Z.value = null);
    };
    return () => {
      var B, U;
      if (e.noStyle)
        return (B = n.default) === null || B === void 0 ? void 0 : B.call(n);
      const J = (U = e.help) !== null && U !== void 0 ? U : n.help ? Xt(n.help()) : null, ee = !!(J != null && Array.isArray(J) && J.length || I.value.length);
      return oe.value = ee, l(w("div", {
        class: [k.value, ee ? `${a.value}-item-with-help` : "", r.class],
        ref: c
      }, [w(L$, j(j({}, r), {}, {
        class: `${a.value}-row`,
        key: "row"
      }), {
        default: () => {
          var ne, he;
          return w(Te, null, [w(Ka, j(j({}, e), {}, {
            htmlFor: z.value,
            required: O.value,
            requiredMark: f.requiredMark.value,
            prefixCls: a.value,
            onClick: P,
            label: e.label
          }), {
            label: n.label,
            tooltip: n.tooltip
          }), w(WS, j(j({}, e), {}, {
            errors: J != null ? xt(J) : I.value,
            marginBottom: Z.value,
            prefixCls: a.value,
            status: N.value,
            ref: h,
            help: J,
            extra: (ne = e.extra) !== null && ne !== void 0 ? ne : (he = n.extra) === null || he === void 0 ? void 0 : he.call(n),
            onErrorVisibleChanged: ce
          }), {
            default: n.default
          })]);
        }
      }), !!Z.value && w("div", {
        class: `${a.value}-margin-offset`,
        style: {
          marginBottom: `-${Z.value}px`
        }
      }, null)]));
    };
  }
});
function bd(e) {
  let t = !1, n = e.length;
  const r = [];
  return e.length ? new Promise((o, i) => {
    e.forEach((a, l) => {
      a.catch((s) => (t = !0, s)).then((s) => {
        n -= 1, r[l] = s, !(n > 0) && (t && i(r), o(r));
      });
    });
  }) : Promise.resolve([]);
}
function vc(e) {
  let t = !1;
  return e && e.length && e.every((n) => n.required ? (t = !0, !1) : !0), t;
}
function yc(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function ti(e, t, n) {
  let r = e;
  t = t.replace(/\[(\w+)\]/g, ".$1"), t = t.replace(/^\./, "");
  const o = t.split(".");
  let i = 0;
  for (let a = o.length; i < a - 1 && !(!r && !n); ++i) {
    const l = o[i];
    if (l in r)
      r = r[l];
    else {
      if (n)
        throw new Error("please transfer a valid name path to validate!");
      break;
    }
  }
  return {
    o: r,
    k: o[i],
    v: r ? r[o[i]] : null,
    isValid: r && o[i] in r
  };
}
function KS(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : X({}), n = arguments.length > 2 ? arguments[2] : void 0;
  const r = Dr(pe(e)), o = Ye({}), i = L([]), a = (y) => {
    m(pe(e), m(m({}, Dr(r)), y)), Le(() => {
      Object.keys(o).forEach((b) => {
        o[b] = {
          autoLink: !1,
          required: vc(pe(t)[b])
        };
      });
    });
  }, l = function() {
    let y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], b = arguments.length > 1 ? arguments[1] : void 0;
    return b.length ? y.filter((S) => {
      const O = yc(S.trigger || "change");
      return Nx(O, b).length;
    }) : y;
  };
  let s = null;
  const c = function(y) {
    let b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, S = arguments.length > 2 ? arguments[2] : void 0;
    const O = [], C = {};
    for (let _ = 0; _ < y.length; _++) {
      const M = y[_], R = ti(pe(e), M, S);
      if (!R.isValid)
        continue;
      C[M] = R.v;
      const D = l(pe(t)[M], yc(b && b.trigger));
      D.length && O.push(f(M, R.v, D, b || {}).then(() => ({
        name: M,
        errors: [],
        warnings: []
      })).catch((z) => {
        const P = [], F = [];
        return z.forEach((I) => {
          let {
            rule: {
              warningOnly: N
            },
            errors: k
          } = I;
          N ? F.push(...k) : P.push(...k);
        }), P.length ? Promise.reject({
          name: M,
          errors: P,
          warnings: F
        }) : {
          name: M,
          errors: P,
          warnings: F
        };
      }));
    }
    const E = bd(O);
    s = E;
    const A = E.then(() => s === E ? Promise.resolve(C) : Promise.reject([])).catch((_) => {
      const M = _.filter((R) => R && R.errors.length);
      return M.length ? Promise.reject({
        values: C,
        errorFields: M,
        outOfDate: s !== E
      }) : Promise.resolve(C);
    });
    return A.catch((_) => _), A;
  }, f = function(y, b, S) {
    let O = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const C = pd([y], b, S, m({
      validateMessages: _o
    }, O), !!O.validateFirst);
    return o[y] ? (o[y].validateStatus = "validating", C.catch((E) => E).then(function() {
      let E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      var A;
      if (o[y].validateStatus === "validating") {
        const _ = E.filter((M) => M && M.errors.length);
        o[y].validateStatus = _.length ? "error" : "success", o[y].help = _.length ? _.map((M) => M.errors) : null, (A = n == null ? void 0 : n.onValidate) === null || A === void 0 || A.call(n, y, !_.length, _.length ? ii(o[y].help[0]) : null);
      }
    }), C) : C.catch((E) => E);
  }, u = (y, b) => {
    let S = [], O = !0;
    y ? Array.isArray(y) ? S = y : S = [y] : (O = !1, S = i.value);
    const C = c(S, b || {}, O);
    return C.catch((E) => E), C;
  }, d = (y) => {
    let b = [];
    y ? Array.isArray(y) ? b = y : b = [y] : b = i.value, b.forEach((S) => {
      o[S] && m(o[S], {
        validateStatus: "",
        help: null
      });
    });
  }, p = (y) => {
    const b = {
      autoLink: !1
    }, S = [], O = Array.isArray(y) ? y : [y];
    for (let C = 0; C < O.length; C++) {
      const E = O[C];
      (E == null ? void 0 : E.validateStatus) === "error" && (b.validateStatus = "error", E.help && S.push(E.help)), b.required = b.required || (E == null ? void 0 : E.required);
    }
    return b.help = S, b;
  };
  let h = r, g = !0;
  const x = (y) => {
    const b = [];
    i.value.forEach((S) => {
      const O = ti(y, S, !1), C = ti(h, S, !1);
      (g && (n == null ? void 0 : n.immediate) && O.isValid || !Pa(O.v, C.v)) && b.push(S);
    }), u(b, {
      trigger: "change"
    }), g = !1, h = Dr(ii(y));
  }, v = n == null ? void 0 : n.debounce;
  let $ = !0;
  return Q(t, () => {
    i.value = t ? Object.keys(pe(t)) : [], !$ && n && n.validateOnRuleChange && u(), $ = !1;
  }, {
    deep: !0,
    immediate: !0
  }), Q(i, () => {
    const y = {};
    i.value.forEach((b) => {
      y[b] = m({}, o[b], {
        autoLink: !1,
        required: vc(pe(t)[b])
      }), delete o[b];
    });
    for (const b in o)
      Object.prototype.hasOwnProperty.call(o, b) && delete o[b];
    m(o, y);
  }, {
    immediate: !0
  }), Q(e, v && v.wait ? Sx(x, v.wait, qx(v, ["wait"])) : x, {
    immediate: n && !!n.immediate,
    deep: !0
  }), {
    modelRef: e,
    rulesRef: t,
    initialModel: r,
    validateInfos: o,
    resetFields: a,
    validate: u,
    validateField: f,
    mergeValidateInfo: p,
    clearValidate: d
  };
}
const YS = () => ({
  layout: H.oneOf(Wt("horizontal", "inline", "vertical")),
  labelCol: te(),
  wrapperCol: te(),
  colon: Ge(),
  labelAlign: kr(),
  labelWrap: Ge(),
  prefixCls: String,
  requiredMark: fn([String, Boolean]),
  /** @deprecated Will warning in future branch. Pls use `requiredMark` instead. */
  hideRequiredMark: Ge(),
  model: H.object,
  rules: te(),
  validateMessages: te(),
  validateOnRuleChange: Ge(),
  // 提交失败自动滚动到第一个错误字段
  scrollToFirstError: Wr(),
  onSubmit: tn(),
  name: String,
  validateTrigger: fn([String, Array]),
  size: kr(),
  disabled: Ge(),
  onValuesChange: tn(),
  onFieldsChange: tn(),
  onFinish: tn(),
  onFinishFailed: tn(),
  onValidate: tn()
});
function QS(e, t) {
  return Pa(xt(e), xt(t));
}
const yt = V({
  compatConfig: {
    MODE: 3
  },
  name: "AForm",
  inheritAttrs: !1,
  props: Ut(YS(), {
    layout: "horizontal",
    hideRequiredMark: !1,
    colon: !0
  }),
  Item: yd,
  useForm: KS,
  // emits: ['finishFailed', 'submit', 'finish', 'validate'],
  setup(e, t) {
    let {
      emit: n,
      slots: r,
      expose: o,
      attrs: i
    } = t;
    const {
      prefixCls: a,
      direction: l,
      form: s,
      size: c,
      disabled: f
    } = Pe("form", e), u = T(() => e.requiredMark === "" || e.requiredMark), d = T(() => {
      var I;
      return u.value !== void 0 ? u.value : s && ((I = s.value) === null || I === void 0 ? void 0 : I.requiredMark) !== void 0 ? s.value.requiredMark : !e.hideRequiredMark;
    });
    Lu(c), Jc(f);
    const p = T(() => {
      var I, N;
      return (I = e.colon) !== null && I !== void 0 ? I : (N = s.value) === null || N === void 0 ? void 0 : N.colon;
    }), {
      validateMessages: h
    } = Jp(), g = T(() => m(m(m({}, _o), h.value), e.validateMessages)), [x, v] = Ya(a), $ = T(() => Y(a.value, {
      [`${a.value}-${e.layout}`]: !0,
      [`${a.value}-hide-required-mark`]: d.value === !1,
      [`${a.value}-rtl`]: l.value === "rtl",
      [`${a.value}-${c.value}`]: c.value
    }, v.value)), y = X(), b = {}, S = (I, N) => {
      b[I] = N;
    }, O = (I) => {
      delete b[I];
    }, C = (I) => {
      const N = !!I, k = N ? xt(I).map(Ui) : [];
      return N ? Object.values(b).filter((G) => k.findIndex((Z) => QS(Z, G.fieldName.value)) > -1) : Object.values(b);
    }, E = (I) => {
      if (!e.model) {
        Xe(!1, "Form", "model is required for resetFields to work.");
        return;
      }
      C(I).forEach((N) => {
        N.resetField();
      });
    }, A = (I) => {
      C(I).forEach((N) => {
        N.clearValidate();
      });
    }, _ = (I) => {
      const {
        scrollToFirstError: N
      } = e;
      if (n("finishFailed", I), N && I.errorFields.length) {
        let k = {};
        typeof N == "object" && (k = N), R(I.errorFields[0].name, k);
      }
    }, M = function() {
      return P(...arguments);
    }, R = function(I) {
      let N = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      const k = C(I ? [I] : void 0);
      if (k.length) {
        const G = k[0].fieldId.value, Z = G ? document.getElementById(G) : null;
        Z && Zg(Z, m({
          scrollMode: "if-needed",
          block: "nearest"
        }, N));
      }
    }, D = function() {
      let I = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
      if (I === !0) {
        const N = [];
        return Object.values(b).forEach((k) => {
          let {
            namePath: G
          } = k;
          N.push(G.value);
        }), mc(e.model, N);
      } else
        return mc(e.model, I);
    }, z = (I, N) => {
      if (Xe(!(I instanceof Function), "Form", "validateFields/validateField/validate not support callback, please use promise instead"), !e.model)
        return Xe(!1, "Form", "model is required for validateFields to work."), Promise.reject("Form `model` is required for validateFields to work.");
      const k = !!I, G = k ? xt(I).map(Ui) : [], Z = [];
      Object.values(b).forEach((ce) => {
        var B;
        if (k || G.push(ce.namePath.value), !(!((B = ce.rules) === null || B === void 0) && B.value.length))
          return;
        const U = ce.namePath.value;
        if (!k || CS(G, U)) {
          const J = ce.validateRules(m({
            validateMessages: g.value
          }, N));
          Z.push(J.then(() => ({
            name: U,
            errors: [],
            warnings: []
          })).catch((ee) => {
            const ne = [], he = [];
            return ee.forEach((et) => {
              let {
                rule: {
                  warningOnly: tt
                },
                errors: Pn
              } = et;
              tt ? he.push(...Pn) : ne.push(...Pn);
            }), ne.length ? Promise.reject({
              name: U,
              errors: ne,
              warnings: he
            }) : {
              name: U,
              errors: ne,
              warnings: he
            };
          }));
        }
      });
      const oe = bd(Z);
      y.value = oe;
      const ae = oe.then(() => y.value === oe ? Promise.resolve(D(G)) : Promise.reject([])).catch((ce) => {
        const B = ce.filter((U) => U && U.errors.length);
        return Promise.reject({
          values: D(G),
          errorFields: B,
          outOfDate: y.value !== oe
        });
      });
      return ae.catch((ce) => ce), ae;
    }, P = function() {
      return z(...arguments);
    }, F = (I) => {
      I.preventDefault(), I.stopPropagation(), n("submit", I), e.model && z().then((k) => {
        n("finish", k);
      }).catch((k) => {
        _(k);
      });
    };
    return o({
      resetFields: E,
      clearValidate: A,
      validateFields: z,
      getFieldsValue: D,
      validate: M,
      scrollToField: R
    }), gd({
      model: T(() => e.model),
      name: T(() => e.name),
      labelAlign: T(() => e.labelAlign),
      labelCol: T(() => e.labelCol),
      labelWrap: T(() => e.labelWrap),
      wrapperCol: T(() => e.wrapperCol),
      vertical: T(() => e.layout === "vertical"),
      colon: p,
      requiredMark: d,
      validateTrigger: T(() => e.validateTrigger),
      rules: T(() => e.rules),
      addField: S,
      removeField: O,
      onValidate: (I, N, k) => {
        n("validate", I, N, k);
      },
      validateMessages: g
    }), Q(() => e.rules, () => {
      e.validateOnRuleChange && z();
    }), () => {
      var I;
      return x(w("form", j(j({}, i), {}, {
        onSubmit: F,
        class: [$.value, i.class]
      }), [(I = r.default) === null || I === void 0 ? void 0 : I.call(r)]));
    };
  }
});
yt.useInjectFormItemContext = Lb;
yt.ItemRest = Di;
yt.install = function(e) {
  return e.component(yt.name, yt), e.component(yt.Item.name, yt.Item), e.component(Di.name, Di), e;
};
let Lr = m({}, $t.Modal);
function ZS(e) {
  e ? Lr = m(m({}, Lr), e) : Lr = m({}, $t.Modal);
}
function JS() {
  return Lr;
}
const Ki = "internalMark", Hr = V({
  compatConfig: {
    MODE: 3
  },
  name: "ALocaleProvider",
  props: {
    locale: {
      type: Object
    },
    ANT_MARK__: String
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    Xe(e.ANT_MARK__ === Ki, "LocaleProvider", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead");
    const r = Ye({
      antLocale: m(m({}, e.locale), {
        exist: !0
      }),
      ANT_MARK__: Ki
    });
    return me("localeData", r), Q(() => e.locale, (o) => {
      ZS(o && o.Modal), r.antLocale = m(m({}, o), {
        exist: !0
      });
    }, {
      immediate: !0
    }), () => {
      var o;
      return (o = n.default) === null || o === void 0 ? void 0 : o.call(n);
    };
  }
});
Hr.install = function(e) {
  return e.component(Hr.name, Hr), e;
};
const eO = lo(Hr), Io = V({
  name: "Notice",
  inheritAttrs: !1,
  props: ["prefixCls", "duration", "updateMark", "noticeKey", "closeIcon", "closable", "props", "onClick", "onClose", "holder", "visible"],
  setup(e, t) {
    let {
      attrs: n,
      slots: r
    } = t, o, i = !1;
    const a = T(() => e.duration === void 0 ? 4.5 : e.duration), l = () => {
      a.value && !i && (o = setTimeout(() => {
        c();
      }, a.value * 1e3));
    }, s = () => {
      o && (clearTimeout(o), o = null);
    }, c = (u) => {
      u && u.stopPropagation(), s();
      const {
        onClose: d,
        noticeKey: p
      } = e;
      d && d(p);
    }, f = () => {
      s(), l();
    };
    return we(() => {
      l();
    }), ta(() => {
      i = !0, s();
    }), Q([a, () => e.updateMark, () => e.visible], (u, d) => {
      let [p, h, g] = u, [x, v, $] = d;
      (p !== x || h !== v || g !== $ && $) && f();
    }, {
      flush: "post"
    }), () => {
      var u, d;
      const {
        prefixCls: p,
        closable: h,
        closeIcon: g = (u = r.closeIcon) === null || u === void 0 ? void 0 : u.call(r),
        onClick: x,
        holder: v
      } = e, {
        class: $,
        style: y
      } = n, b = `${p}-notice`, S = Object.keys(n).reduce((C, E) => ((E.startsWith("data-") || E.startsWith("aria-") || E === "role") && (C[E] = n[E]), C), {}), O = w("div", j({
        class: Y(b, $, {
          [`${b}-closable`]: h
        }),
        style: y,
        onMouseenter: s,
        onMouseleave: l,
        onClick: x
      }, S), [w("div", {
        class: `${b}-content`
      }, [(d = r.default) === null || d === void 0 ? void 0 : d.call(r)]), h ? w("a", {
        tabindex: 0,
        onClick: c,
        class: `${b}-close`
      }, [g || w("span", {
        class: `${b}-close-x`
      }, null)]) : null]);
      return v ? w(Bc, {
        to: v
      }, {
        default: () => O
      }) : O;
    };
  }
});
var tO = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
let bc = 0;
const nO = Date.now();
function Cc() {
  const e = bc;
  return bc += 1, `rcNotification_${nO}_${e}`;
}
const oo = V({
  name: "Notification",
  inheritAttrs: !1,
  props: ["prefixCls", "transitionName", "animation", "maxCount", "closeIcon", "hashId"],
  setup(e, t) {
    let {
      attrs: n,
      expose: r,
      slots: o
    } = t;
    const i = /* @__PURE__ */ new Map(), a = X([]), l = T(() => {
      const {
        prefixCls: f,
        animation: u = "fade"
      } = e;
      let d = e.transitionName;
      return !d && u && (d = `${f}-${u}`), Ea(d);
    }), s = (f, u) => {
      const d = f.key || Cc(), p = m(m({}, f), {
        key: d
      }), {
        maxCount: h
      } = e, g = a.value.map((v) => v.notice.key).indexOf(d), x = a.value.concat();
      g !== -1 ? x.splice(g, 1, {
        notice: p,
        holderCallback: u
      }) : (h && a.value.length >= h && (p.key = x[0].notice.key, p.updateMark = Cc(), p.userPassKey = d, x.shift()), x.push({
        notice: p,
        holderCallback: u
      })), a.value = x;
    }, c = (f) => {
      a.value = a.value.filter((u) => {
        let {
          notice: {
            key: d,
            userPassKey: p
          }
        } = u;
        return (p || d) !== f;
      });
    };
    return r({
      add: s,
      remove: c,
      notices: a
    }), () => {
      var f;
      const {
        prefixCls: u,
        closeIcon: d = (f = o.closeIcon) === null || f === void 0 ? void 0 : f.call(o, {
          prefixCls: u
        })
      } = e, p = a.value.map((g, x) => {
        let {
          notice: v,
          holderCallback: $
        } = g;
        const y = x === a.value.length - 1 ? v.updateMark : void 0, {
          key: b,
          userPassKey: S
        } = v, {
          content: O
        } = v, C = m(m(m({
          prefixCls: u,
          closeIcon: typeof d == "function" ? d({
            prefixCls: u
          }) : d
        }, v), v.props), {
          key: b,
          noticeKey: S || b,
          updateMark: y,
          onClose: (E) => {
            var A;
            c(E), (A = v.onClose) === null || A === void 0 || A.call(v);
          },
          onClick: v.onClick
        });
        return $ ? w("div", {
          key: b,
          class: `${u}-hook-holder`,
          ref: (E) => {
            typeof b > "u" || (E ? (i.set(b, E), $(E, C)) : i.delete(b));
          }
        }, null) : w(Io, j(j({}, C), {}, {
          class: Y(C.class, e.hashId)
        }), {
          default: () => [typeof O == "function" ? O({
            prefixCls: u
          }) : O]
        });
      }), h = {
        [u]: 1,
        [n.class]: !!n.class,
        [e.hashId]: !0
      };
      return w("div", {
        class: h,
        style: n.style || {
          top: "65px",
          left: "50%"
        }
      }, [w(na, j({
        tag: "div"
      }, l.value), {
        default: () => [p]
      })]);
    };
  }
});
oo.newInstance = function(t, n) {
  const r = t || {}, {
    name: o = "notification",
    getContainer: i,
    appContext: a,
    prefixCls: l,
    rootPrefixCls: s,
    transitionName: c,
    hasTransitionName: f,
    useStyle: u
  } = r, d = tO(r, ["name", "getContainer", "appContext", "prefixCls", "rootPrefixCls", "transitionName", "hasTransitionName", "useStyle"]), p = document.createElement("div");
  i ? i().appendChild(p) : document.body.appendChild(p);
  const h = V({
    compatConfig: {
      MODE: 3
    },
    name: "NotificationWrapper",
    setup(x, v) {
      let {
        attrs: $
      } = v;
      const y = L(), b = T(() => ye.getPrefixCls(o, l)), [, S] = u(b);
      return we(() => {
        n({
          notice(O) {
            var C;
            (C = y.value) === null || C === void 0 || C.add(O);
          },
          removeNotice(O) {
            var C;
            (C = y.value) === null || C === void 0 || C.remove(O);
          },
          destroy() {
            Vt(null, p), p.parentNode && p.parentNode.removeChild(p);
          },
          component: y
        });
      }), () => {
        const O = ye, C = O.getRootPrefixCls(s, b.value), E = f ? c : `${b.value}-${c}`;
        return w(mn, j(j({}, O), {}, {
          prefixCls: C
        }), {
          default: () => [w(oo, j(j({
            ref: y
          }, $), {}, {
            prefixCls: b.value,
            transitionName: E,
            hashId: S.value
          }), null)]
        });
      };
    }
  }), g = w(h, d);
  g.appContext = a || g.appContext, Vt(g, p);
};
let xc = 0;
const rO = Date.now();
function wc() {
  const e = xc;
  return xc += 1, `rcNotification_${rO}_${e}`;
}
const oO = V({
  name: "HookNotification",
  inheritAttrs: !1,
  props: ["prefixCls", "transitionName", "animation", "maxCount", "closeIcon", "hashId", "remove", "notices", "getStyles", "getClassName", "onAllRemoved", "getContainer"],
  setup(e, t) {
    let {
      attrs: n,
      slots: r
    } = t;
    const o = /* @__PURE__ */ new Map(), i = T(() => e.notices), a = T(() => {
      let f = e.transitionName;
      if (!f && e.animation)
        switch (typeof e.animation) {
          case "string":
            f = e.animation;
            break;
          case "function":
            f = e.animation().name;
            break;
          case "object":
            f = e.animation.name;
            break;
          default:
            f = `${e.prefixCls}-fade`;
            break;
        }
      return Ea(f);
    }), l = (f) => e.remove(f), s = X({});
    Q(i, () => {
      const f = {};
      Object.keys(s.value).forEach((u) => {
        f[u] = [];
      }), e.notices.forEach((u) => {
        const {
          placement: d = "topRight"
        } = u.notice;
        d && (f[d] = f[d] || [], f[d].push(u));
      }), s.value = f;
    });
    const c = T(() => Object.keys(s.value));
    return () => {
      var f;
      const {
        prefixCls: u,
        closeIcon: d = (f = r.closeIcon) === null || f === void 0 ? void 0 : f.call(r, {
          prefixCls: u
        })
      } = e, p = c.value.map((h) => {
        var g, x;
        const v = s.value[h], $ = (g = e.getClassName) === null || g === void 0 ? void 0 : g.call(e, h), y = (x = e.getStyles) === null || x === void 0 ? void 0 : x.call(e, h), b = v.map((C, E) => {
          let {
            notice: A,
            holderCallback: _
          } = C;
          const M = E === i.value.length - 1 ? A.updateMark : void 0, {
            key: R,
            userPassKey: D
          } = A, {
            content: z
          } = A, P = m(m(m({
            prefixCls: u,
            closeIcon: typeof d == "function" ? d({
              prefixCls: u
            }) : d
          }, A), A.props), {
            key: R,
            noticeKey: D || R,
            updateMark: M,
            onClose: (F) => {
              var I;
              l(F), (I = A.onClose) === null || I === void 0 || I.call(A);
            },
            onClick: A.onClick
          });
          return _ ? w("div", {
            key: R,
            class: `${u}-hook-holder`,
            ref: (F) => {
              typeof R > "u" || (F ? (o.set(R, F), _(F, P)) : o.delete(R));
            }
          }, null) : w(Io, j(j({}, P), {}, {
            class: Y(P.class, e.hashId)
          }), {
            default: () => [typeof z == "function" ? z({
              prefixCls: u
            }) : z]
          });
        }), S = {
          [u]: 1,
          [`${u}-${h}`]: 1,
          [n.class]: !!n.class,
          [e.hashId]: !0,
          [$]: !!$
        };
        function O() {
          var C;
          v.length > 0 || (Reflect.deleteProperty(s.value, h), (C = e.onAllRemoved) === null || C === void 0 || C.call(e));
        }
        return w("div", {
          key: h,
          class: S,
          style: n.style || y || {
            top: "65px",
            left: "50%"
          }
        }, [w(na, j(j({
          tag: "div"
        }, a.value), {}, {
          onAfterLeave: O
        }), {
          default: () => [b]
        })]);
      });
      return w($f, {
        getContainer: e.getContainer
      }, {
        default: () => [p]
      });
    };
  }
}), iO = oO;
var aO = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const lO = () => document.body;
let $c = 0;
function sO() {
  const e = {};
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  return n.forEach((o) => {
    o && Object.keys(o).forEach((i) => {
      const a = o[i];
      a !== void 0 && (e[i] = a);
    });
  }), e;
}
function Cd() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    getContainer: t = lO,
    motion: n,
    prefixCls: r,
    maxCount: o,
    getClassName: i,
    getStyles: a,
    onAllRemoved: l
  } = e, s = aO(e, ["getContainer", "motion", "prefixCls", "maxCount", "getClassName", "getStyles", "onAllRemoved"]), c = L([]), f = L(), u = (v, $) => {
    const y = v.key || wc(), b = m(m({}, v), {
      key: y
    }), S = c.value.map((C) => C.notice.key).indexOf(y), O = c.value.concat();
    S !== -1 ? O.splice(S, 1, {
      notice: b,
      holderCallback: $
    }) : (o && c.value.length >= o && (b.key = O[0].notice.key, b.updateMark = wc(), b.userPassKey = y, O.shift()), O.push({
      notice: b,
      holderCallback: $
    })), c.value = O;
  }, d = (v) => {
    c.value = c.value.filter(($) => {
      let {
        notice: {
          key: y,
          userPassKey: b
        }
      } = $;
      return (b || y) !== v;
    });
  }, p = () => {
    c.value = [];
  }, h = () => w(iO, {
    ref: f,
    prefixCls: r,
    maxCount: o,
    notices: c.value,
    remove: d,
    getClassName: i,
    getStyles: a,
    animation: n,
    hashId: e.hashId,
    onAllRemoved: l,
    getContainer: t
  }, null), g = L([]), x = {
    open: (v) => {
      const $ = sO(s, v);
      ($.key === null || $.key === void 0) && ($.key = `vc-notification-${$c}`, $c += 1), g.value = [...g.value, {
        type: "open",
        config: $
      }];
    },
    close: (v) => {
      g.value = [...g.value, {
        type: "close",
        key: v
      }];
    },
    destroy: () => {
      g.value = [...g.value, {
        type: "destroy"
      }];
    }
  };
  return Q(g, () => {
    g.value.length && (g.value.forEach((v) => {
      switch (v.type) {
        case "open":
          u(v.config);
          break;
        case "close":
          d(v.key);
          break;
        case "destroy":
          p();
          break;
      }
    }), g.value = []);
  }), [x, h];
}
const cO = (e) => {
  const {
    componentCls: t,
    iconCls: n,
    boxShadowSecondary: r,
    colorBgElevated: o,
    colorSuccess: i,
    colorError: a,
    colorWarning: l,
    colorInfo: s,
    fontSizeLG: c,
    motionEaseInOutCirc: f,
    motionDurationSlow: u,
    marginXS: d,
    paddingXS: p,
    borderRadiusLG: h,
    zIndexPopup: g,
    // Custom token
    messageNoticeContentPadding: x
  } = e, v = new se("MessageMoveIn", {
    "0%": {
      padding: 0,
      transform: "translateY(-100%)",
      opacity: 0
    },
    "100%": {
      padding: p,
      transform: "translateY(0)",
      opacity: 1
    }
  }), $ = new se("MessageMoveOut", {
    "0%": {
      maxHeight: e.height,
      padding: p,
      opacity: 1
    },
    "100%": {
      maxHeight: 0,
      padding: 0,
      opacity: 0
    }
  });
  return [
    // ============================ Holder ============================
    {
      [t]: m(m({}, On(e)), {
        position: "fixed",
        top: d,
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
        pointerEvents: "none",
        zIndex: g,
        [`${t}-move-up`]: {
          animationFillMode: "forwards"
        },
        [`
        ${t}-move-up-appear,
        ${t}-move-up-enter
      `]: {
          animationName: v,
          animationDuration: u,
          animationPlayState: "paused",
          animationTimingFunction: f
        },
        [`
        ${t}-move-up-appear${t}-move-up-appear-active,
        ${t}-move-up-enter${t}-move-up-enter-active
      `]: {
          animationPlayState: "running"
        },
        [`${t}-move-up-leave`]: {
          animationName: $,
          animationDuration: u,
          animationPlayState: "paused",
          animationTimingFunction: f
        },
        [`${t}-move-up-leave${t}-move-up-leave-active`]: {
          animationPlayState: "running"
        },
        "&-rtl": {
          direction: "rtl",
          span: {
            direction: "rtl"
          }
        }
      })
    },
    // ============================ Notice ============================
    {
      [`${t}-notice`]: {
        padding: p,
        textAlign: "center",
        [n]: {
          verticalAlign: "text-bottom",
          marginInlineEnd: d,
          fontSize: c
        },
        [`${t}-notice-content`]: {
          display: "inline-block",
          padding: x,
          background: o,
          borderRadius: h,
          boxShadow: r,
          pointerEvents: "all"
        },
        [`${t}-success ${n}`]: {
          color: i
        },
        [`${t}-error ${n}`]: {
          color: a
        },
        [`${t}-warning ${n}`]: {
          color: l
        },
        [`
        ${t}-info ${n},
        ${t}-loading ${n}`]: {
          color: s
        }
      }
    },
    // ============================= Pure =============================
    {
      [`${t}-notice-pure-panel`]: {
        padding: 0,
        textAlign: "start"
      }
    }
  ];
}, Qa = Ze("Message", (e) => {
  const t = ke(e, {
    messageNoticeContentPadding: `${(e.controlHeightLG - e.fontSize * e.lineHeight) / 2}px ${e.paddingSM}px`
  });
  return [cO(t)];
}, (e) => ({
  height: 150,
  zIndexPopup: e.zIndexPopupBase + 10
})), uO = {
  info: w(en, null, null),
  success: w(Et, null, null),
  error: w(Pt, null, null),
  warning: w(_t, null, null),
  loading: w(St, null, null)
}, xd = V({
  name: "PureContent",
  inheritAttrs: !1,
  props: ["prefixCls", "type", "icon"],
  setup(e, t) {
    let {
      slots: n
    } = t;
    return () => {
      var r;
      return w("div", {
        class: Y(`${e.prefixCls}-custom-content`, `${e.prefixCls}-${e.type}`)
      }, [e.icon || uO[e.type], w("span", null, [(r = n.default) === null || r === void 0 ? void 0 : r.call(n)])]);
    };
  }
});
V({
  name: "PurePanel",
  inheritAttrs: !1,
  props: ["prefixCls", "class", "type", "icon", "content"],
  setup(e, t) {
    let {
      slots: n,
      attrs: r
    } = t;
    var o;
    const {
      getPrefixCls: i
    } = so(), a = T(() => e.prefixCls || i("message")), [, l] = Qa(a);
    return w(Io, j(j({}, r), {}, {
      prefixCls: a.value,
      class: Y(l.value, `${a.value}-notice-pure-panel`),
      noticeKey: "pure",
      duration: null
    }), {
      default: () => [w(xd, {
        prefixCls: a.value,
        type: e.type,
        icon: e.icon
      }, {
        default: () => [(o = n.default) === null || o === void 0 ? void 0 : o.call(n)]
      })]
    });
  }
});
var fO = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const dO = 8, pO = 3, mO = V({
  name: "Holder",
  inheritAttrs: !1,
  props: ["top", "prefixCls", "getContainer", "maxCount", "duration", "rtl", "transitionName", "onAllRemoved"],
  setup(e, t) {
    let {
      expose: n
    } = t;
    var r, o;
    const {
      getPrefixCls: i,
      getPopupContainer: a
    } = Pe("message", e), l = T(() => i("message", e.prefixCls)), [, s] = Qa(l), c = () => {
      var g;
      const x = (g = e.top) !== null && g !== void 0 ? g : dO;
      return {
        left: "50%",
        transform: "translateX(-50%)",
        top: typeof x == "number" ? `${x}px` : x
      };
    }, f = () => Y(s.value, e.rtl ? `${l.value}-rtl` : ""), u = () => {
      var g;
      return ha({
        prefixCls: l.value,
        animation: (g = e.animation) !== null && g !== void 0 ? g : "move-up",
        transitionName: e.transitionName
      });
    }, d = w("span", {
      class: `${l.value}-close-x`
    }, [w(Jt, {
      class: `${l.value}-close-icon`
    }, null)]), [p, h] = Cd({
      //@ts-ignore
      getStyles: c,
      prefixCls: l.value,
      getClassName: f,
      motion: u,
      closable: !1,
      closeIcon: d,
      duration: (r = e.duration) !== null && r !== void 0 ? r : pO,
      getContainer: (o = e.staticGetContainer) !== null && o !== void 0 ? o : a.value,
      maxCount: e.maxCount,
      onAllRemoved: e.onAllRemoved
    });
    return n(m(m({}, p), {
      prefixCls: l,
      hashId: s
    })), h;
  }
});
let Sc = 0;
function gO(e) {
  const t = L(null), n = Symbol("messageHolderKey"), r = (s) => {
    var c;
    (c = t.value) === null || c === void 0 || c.close(s);
  }, o = (s) => {
    if (!t.value) {
      const S = () => {
      };
      return S.then = () => {
      }, S;
    }
    const {
      open: c,
      prefixCls: f,
      hashId: u
    } = t.value, d = `${f}-notice`, {
      content: p,
      icon: h,
      type: g,
      key: x,
      class: v,
      onClose: $
    } = s, y = fO(s, ["content", "icon", "type", "key", "class", "onClose"]);
    let b = x;
    return b == null && (Sc += 1, b = `antd-message-${Sc}`), wp((S) => (c(m(m({}, y), {
      key: b,
      content: () => w(xd, {
        prefixCls: f,
        type: g,
        icon: typeof h == "function" ? h() : h
      }, {
        default: () => [typeof p == "function" ? p() : p]
      }),
      placement: "top",
      // @ts-ignore
      class: Y(g && `${d}-${g}`, u, v),
      onClose: () => {
        $ == null || $(), S();
      }
    })), () => {
      r(b);
    }));
  }, a = {
    open: o,
    destroy: (s) => {
      var c;
      s !== void 0 ? r(s) : (c = t.value) === null || c === void 0 || c.destroy();
    }
  };
  return ["info", "success", "warning", "error", "loading"].forEach((s) => {
    const c = (f, u, d) => {
      let p;
      f && typeof f == "object" && "content" in f ? p = f : p = {
        content: f
      };
      let h, g;
      typeof u == "function" ? g = u : (h = u, g = d);
      const x = m(m({
        onClose: g,
        duration: h
      }, p), {
        type: s
      });
      return o(x);
    };
    a[s] = c;
  }), [a, () => w(mO, j(j({
    key: n
  }, e), {}, {
    ref: t
  }), null)];
}
function hO(e) {
  return gO(e);
}
let wd = 3, $d, Oe, vO = 1, Sd = "", Od = "move-up", Td = !1, Pd = () => document.body, Ed, _d = !1;
function yO() {
  return vO++;
}
function bO(e) {
  e.top !== void 0 && ($d = e.top, Oe = null), e.duration !== void 0 && (wd = e.duration), e.prefixCls !== void 0 && (Sd = e.prefixCls), e.getContainer !== void 0 && (Pd = e.getContainer, Oe = null), e.transitionName !== void 0 && (Od = e.transitionName, Oe = null, Td = !0), e.maxCount !== void 0 && (Ed = e.maxCount, Oe = null), e.rtl !== void 0 && (_d = e.rtl);
}
function CO(e, t) {
  if (Oe) {
    t(Oe);
    return;
  }
  oo.newInstance({
    appContext: e.appContext,
    prefixCls: e.prefixCls || Sd,
    rootPrefixCls: e.rootPrefixCls,
    transitionName: Od,
    hasTransitionName: Td,
    style: {
      top: $d
    },
    getContainer: Pd || e.getPopupContainer,
    maxCount: Ed,
    name: "message",
    useStyle: Qa
  }, (n) => {
    if (Oe) {
      t(Oe);
      return;
    }
    Oe = n, t(n);
  });
}
const Ad = {
  info: en,
  success: Et,
  error: Pt,
  warning: _t,
  loading: St
}, xO = Object.keys(Ad);
function wO(e) {
  const t = e.duration !== void 0 ? e.duration : wd, n = e.key || yO(), r = new Promise((i) => {
    const a = () => (typeof e.onClose == "function" && e.onClose(), i(!0));
    CO(e, (l) => {
      l.notice({
        key: n,
        duration: t,
        style: e.style || {},
        class: e.class,
        content: (s) => {
          let {
            prefixCls: c
          } = s;
          const f = Ad[e.type], u = f ? w(f, null, null) : "", d = Y(`${c}-custom-content`, {
            [`${c}-${e.type}`]: e.type,
            [`${c}-rtl`]: _d === !0
          });
          return w("div", {
            class: d
          }, [typeof e.icon == "function" ? e.icon() : e.icon || u, w("span", null, [typeof e.content == "function" ? e.content() : e.content])]);
        },
        onClose: a,
        onClick: e.onClick
      });
    });
  }), o = () => {
    Oe && Oe.removeNotice(n);
  };
  return o.then = (i, a) => r.then(i, a), o.promise = r, o;
}
function $O(e) {
  return Object.prototype.toString.call(e) === "[object Object]" && !!e.content;
}
const xn = {
  open: wO,
  config: bO,
  destroy(e) {
    if (Oe)
      if (e) {
        const {
          removeNotice: t
        } = Oe;
        t(e);
      } else {
        const {
          destroy: t
        } = Oe;
        t(), Oe = null;
      }
  }
};
function SO(e, t) {
  e[t] = (n, r, o) => $O(n) ? e.open(m(m({}, n), {
    type: t
  })) : (typeof r == "function" && (o = r, r = void 0), e.open({
    content: n,
    duration: r,
    type: t,
    onClose: o
  }));
}
xO.forEach((e) => SO(xn, e));
xn.warn = xn.warning;
xn.useMessage = hO;
const OO = (e) => {
  const {
    componentCls: t,
    width: n,
    notificationMarginEdge: r
  } = e, o = new se("antNotificationTopFadeIn", {
    "0%": {
      marginTop: "-100%",
      opacity: 0
    },
    "100%": {
      marginTop: 0,
      opacity: 1
    }
  }), i = new se("antNotificationBottomFadeIn", {
    "0%": {
      marginBottom: "-100%",
      opacity: 0
    },
    "100%": {
      marginBottom: 0,
      opacity: 1
    }
  }), a = new se("antNotificationLeftFadeIn", {
    "0%": {
      right: {
        _skip_check_: !0,
        value: n
      },
      opacity: 0
    },
    "100%": {
      right: {
        _skip_check_: !0,
        value: 0
      },
      opacity: 1
    }
  });
  return {
    [`&${t}-top, &${t}-bottom`]: {
      marginInline: 0
    },
    [`&${t}-top`]: {
      [`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]: {
        animationName: o
      }
    },
    [`&${t}-bottom`]: {
      [`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]: {
        animationName: i
      }
    },
    [`&${t}-topLeft, &${t}-bottomLeft`]: {
      marginInlineEnd: 0,
      marginInlineStart: r,
      [`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]: {
        animationName: a
      }
    }
  };
}, TO = (e) => {
  const {
    iconCls: t,
    componentCls: n,
    // .ant-notification
    boxShadowSecondary: r,
    fontSizeLG: o,
    notificationMarginBottom: i,
    borderRadiusLG: a,
    colorSuccess: l,
    colorInfo: s,
    colorWarning: c,
    colorError: f,
    colorTextHeading: u,
    notificationBg: d,
    notificationPadding: p,
    notificationMarginEdge: h,
    motionDurationMid: g,
    motionEaseInOut: x,
    fontSize: v,
    lineHeight: $,
    width: y,
    notificationIconSize: b
  } = e, S = `${n}-notice`, O = new se("antNotificationFadeIn", {
    "0%": {
      left: {
        _skip_check_: !0,
        value: y
      },
      opacity: 0
    },
    "100%": {
      left: {
        _skip_check_: !0,
        value: 0
      },
      opacity: 1
    }
  }), C = new se("antNotificationFadeOut", {
    "0%": {
      maxHeight: e.animationMaxHeight,
      marginBottom: i,
      opacity: 1
    },
    "100%": {
      maxHeight: 0,
      marginBottom: 0,
      paddingTop: 0,
      paddingBottom: 0,
      opacity: 0
    }
  });
  return [
    // ============================ Holder ============================
    {
      [n]: m(m(m(m({}, On(e)), {
        position: "fixed",
        zIndex: e.zIndexPopup,
        marginInlineEnd: h,
        [`${n}-hook-holder`]: {
          position: "relative"
        },
        [`&${n}-top, &${n}-bottom`]: {
          [`${n}-notice`]: {
            marginInline: "auto auto"
          }
        },
        [`&${n}-topLeft, &${n}-bottomLeft`]: {
          [`${n}-notice`]: {
            marginInlineEnd: "auto",
            marginInlineStart: 0
          }
        },
        //  animation
        [`${n}-fade-enter, ${n}-fade-appear`]: {
          animationDuration: e.motionDurationMid,
          animationTimingFunction: x,
          animationFillMode: "both",
          opacity: 0,
          animationPlayState: "paused"
        },
        [`${n}-fade-leave`]: {
          animationTimingFunction: x,
          animationFillMode: "both",
          animationDuration: g,
          animationPlayState: "paused"
        },
        [`${n}-fade-enter${n}-fade-enter-active, ${n}-fade-appear${n}-fade-appear-active`]: {
          animationName: O,
          animationPlayState: "running"
        },
        [`${n}-fade-leave${n}-fade-leave-active`]: {
          animationName: C,
          animationPlayState: "running"
        }
      }), OO(e)), {
        // RTL
        "&-rtl": {
          direction: "rtl",
          [`${n}-notice-btn`]: {
            float: "left"
          }
        }
      })
    },
    // ============================ Notice ============================
    {
      [S]: {
        position: "relative",
        width: y,
        maxWidth: `calc(100vw - ${h * 2}px)`,
        marginBottom: i,
        marginInlineStart: "auto",
        padding: p,
        overflow: "hidden",
        lineHeight: $,
        wordWrap: "break-word",
        background: d,
        borderRadius: a,
        boxShadow: r,
        [`${n}-close-icon`]: {
          fontSize: v,
          cursor: "pointer"
        },
        [`${S}-message`]: {
          marginBottom: e.marginXS,
          color: u,
          fontSize: o,
          lineHeight: e.lineHeightLG
        },
        [`${S}-description`]: {
          fontSize: v
        },
        [`&${S}-closable ${S}-message`]: {
          paddingInlineEnd: e.paddingLG
        },
        [`${S}-with-icon ${S}-message`]: {
          marginBottom: e.marginXS,
          marginInlineStart: e.marginSM + b,
          fontSize: o
        },
        [`${S}-with-icon ${S}-description`]: {
          marginInlineStart: e.marginSM + b,
          fontSize: v
        },
        // Icon & color style in different selector level
        // https://github.com/ant-design/ant-design/issues/16503
        // https://github.com/ant-design/ant-design/issues/15512
        [`${S}-icon`]: {
          position: "absolute",
          fontSize: b,
          lineHeight: 0,
          // icon-font
          [`&-success${t}`]: {
            color: l
          },
          [`&-info${t}`]: {
            color: s
          },
          [`&-warning${t}`]: {
            color: c
          },
          [`&-error${t}`]: {
            color: f
          }
        },
        [`${S}-close`]: {
          position: "absolute",
          top: e.notificationPaddingVertical,
          insetInlineEnd: e.notificationPaddingHorizontal,
          color: e.colorIcon,
          outline: "none",
          width: e.notificationCloseButtonSize,
          height: e.notificationCloseButtonSize,
          borderRadius: e.borderRadiusSM,
          transition: `background-color ${e.motionDurationMid}, color ${e.motionDurationMid}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "&:hover": {
            color: e.colorIconHover,
            backgroundColor: e.wireframe ? "transparent" : e.colorFillContent
          }
        },
        [`${S}-btn`]: {
          float: "right",
          marginTop: e.marginSM
        }
      }
    },
    // ============================= Pure =============================
    {
      [`${S}-pure-panel`]: {
        margin: 0
      }
    }
  ];
}, Za = Ze("Notification", (e) => {
  const t = e.paddingMD, n = e.paddingLG, r = ke(e, {
    // default.less variables
    notificationBg: e.colorBgElevated,
    notificationPaddingVertical: t,
    notificationPaddingHorizontal: n,
    // index.less variables
    notificationPadding: `${e.paddingMD}px ${e.paddingContentHorizontalLG}px`,
    notificationMarginBottom: e.margin,
    notificationMarginEdge: e.marginLG,
    animationMaxHeight: 150,
    notificationIconSize: e.fontSizeLG * e.lineHeightLG,
    notificationCloseButtonSize: e.controlHeightLG * 0.55
  });
  return [TO(r)];
}, (e) => ({
  zIndexPopup: e.zIndexPopupBase + 50,
  width: 384
}));
function Id(e, t) {
  return t || w("span", {
    class: `${e}-close-x`
  }, [w(Jt, {
    class: `${e}-close-icon`
  }, null)]);
}
w(en, null, null), w(Et, null, null), w(Pt, null, null), w(_t, null, null), w(St, null, null);
const PO = {
  success: Et,
  info: en,
  error: Pt,
  warning: _t
};
function Md(e) {
  let {
    prefixCls: t,
    icon: n,
    type: r,
    message: o,
    description: i,
    btn: a
  } = e, l = null;
  if (n)
    l = w("span", {
      class: `${t}-icon`
    }, [ln(n)]);
  else if (r) {
    const s = PO[r];
    l = w(s, {
      class: `${t}-icon ${t}-icon-${r}`
    }, null);
  }
  return w("div", {
    class: Y({
      [`${t}-with-icon`]: l
    }),
    role: "alert"
  }, [l, w("div", {
    class: `${t}-message`
  }, [o]), w("div", {
    class: `${t}-description`
  }, [i]), a && w("div", {
    class: `${t}-btn`
  }, [a])]);
}
V({
  name: "PurePanel",
  inheritAttrs: !1,
  props: ["prefixCls", "icon", "type", "message", "description", "btn", "closeIcon"],
  setup(e) {
    const {
      getPrefixCls: t
    } = Pe("notification", e), n = T(() => e.prefixCls || t("notification")), r = T(() => `${n.value}-notice`), [, o] = Za(n);
    return () => w(Io, j(j({}, e), {}, {
      prefixCls: n.value,
      class: Y(o.value, `${r.value}-pure-panel`),
      noticeKey: "pure",
      duration: null,
      closable: e.closable,
      closeIcon: Id(n.value, e.closeIcon)
    }), {
      default: () => [w(Md, {
        prefixCls: r.value,
        icon: e.icon,
        type: e.type,
        message: e.message,
        description: e.description,
        btn: e.btn
      }, null)]
    });
  }
});
function Fd(e, t, n) {
  let r;
  switch (t = typeof t == "number" ? `${t}px` : t, n = typeof n == "number" ? `${n}px` : n, e) {
    case "top":
      r = {
        left: "50%",
        transform: "translateX(-50%)",
        right: "auto",
        top: t,
        bottom: "auto"
      };
      break;
    case "topLeft":
      r = {
        left: 0,
        top: t,
        bottom: "auto"
      };
      break;
    case "topRight":
      r = {
        right: 0,
        top: t,
        bottom: "auto"
      };
      break;
    case "bottom":
      r = {
        left: "50%",
        transform: "translateX(-50%)",
        right: "auto",
        top: "auto",
        bottom: n
      };
      break;
    case "bottomLeft":
      r = {
        left: 0,
        top: "auto",
        bottom: n
      };
      break;
    default:
      r = {
        right: 0,
        top: "auto",
        bottom: n
      };
      break;
  }
  return r;
}
function EO(e) {
  return {
    name: `${e}-fade`
  };
}
var _O = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const Oc = 24, AO = 4.5, IO = V({
  name: "Holder",
  inheritAttrs: !1,
  props: ["prefixCls", "class", "type", "icon", "content", "onAllRemoved"],
  setup(e, t) {
    let {
      expose: n
    } = t;
    const {
      getPrefixCls: r,
      getPopupContainer: o
    } = Pe("notification", e), i = T(() => e.prefixCls || r("notification")), a = (d) => {
      var p, h;
      return Fd(d, (p = e.top) !== null && p !== void 0 ? p : Oc, (h = e.bottom) !== null && h !== void 0 ? h : Oc);
    }, [, l] = Za(i), s = () => Y(l.value, {
      [`${i.value}-rtl`]: e.rtl
    }), c = () => EO(i.value), [f, u] = Cd({
      prefixCls: i.value,
      getStyles: a,
      getClassName: s,
      motion: c,
      closable: !0,
      closeIcon: Id(i.value),
      duration: AO,
      getContainer: () => {
        var d, p;
        return ((d = e.getPopupContainer) === null || d === void 0 ? void 0 : d.call(e)) || ((p = o.value) === null || p === void 0 ? void 0 : p.call(o)) || document.body;
      },
      maxCount: e.maxCount,
      hashId: l.value,
      onAllRemoved: e.onAllRemoved
    });
    return n(m(m({}, f), {
      prefixCls: i.value,
      hashId: l
    })), u;
  }
});
function MO(e) {
  const t = L(null), n = Symbol("notificationHolderKey"), r = (l) => {
    if (!t.value)
      return;
    const {
      open: s,
      prefixCls: c,
      hashId: f
    } = t.value, u = `${c}-notice`, {
      message: d,
      description: p,
      icon: h,
      type: g,
      btn: x,
      class: v
    } = l, $ = _O(l, ["message", "description", "icon", "type", "btn", "class"]);
    return s(m(m({
      placement: "topRight"
    }, $), {
      content: () => w(Md, {
        prefixCls: u,
        icon: typeof h == "function" ? h() : h,
        type: g,
        message: typeof d == "function" ? d() : d,
        description: typeof p == "function" ? p() : p,
        btn: typeof x == "function" ? x() : x
      }, null),
      // @ts-ignore
      class: Y(g && `${u}-${g}`, f, v)
    }));
  }, i = {
    open: r,
    destroy: (l) => {
      var s, c;
      l !== void 0 ? (s = t.value) === null || s === void 0 || s.close(l) : (c = t.value) === null || c === void 0 || c.destroy();
    }
  };
  return ["success", "info", "warning", "error"].forEach((l) => {
    i[l] = (s) => r(m(m({}, s), {
      type: l
    }));
  }), [i, () => w(IO, j(j({
    key: n
  }, e), {}, {
    ref: t
  }), null)];
}
function FO(e) {
  return MO(e);
}
const Nt = {};
let Nd = 4.5, Rd = "24px", jd = "24px", Yi = "", Dd = "topRight", Bd = () => document.body, Ld = null, Qi = !1, Hd;
function NO(e) {
  const {
    duration: t,
    placement: n,
    bottom: r,
    top: o,
    getContainer: i,
    closeIcon: a,
    prefixCls: l
  } = e;
  l !== void 0 && (Yi = l), t !== void 0 && (Nd = t), n !== void 0 && (Dd = n), r !== void 0 && (jd = typeof r == "number" ? `${r}px` : r), o !== void 0 && (Rd = typeof o == "number" ? `${o}px` : o), i !== void 0 && (Bd = i), a !== void 0 && (Ld = a), e.rtl !== void 0 && (Qi = e.rtl), e.maxCount !== void 0 && (Hd = e.maxCount);
}
function RO(e, t) {
  let {
    prefixCls: n,
    placement: r = Dd,
    getContainer: o = Bd,
    top: i,
    bottom: a,
    closeIcon: l = Ld,
    appContext: s
  } = e;
  const {
    getPrefixCls: c
  } = UO(), f = c("notification", n || Yi), u = `${f}-${r}-${Qi}`, d = Nt[u];
  if (d) {
    Promise.resolve(d).then((h) => {
      t(h);
    });
    return;
  }
  const p = Y(`${f}-${r}`, {
    [`${f}-rtl`]: Qi === !0
  });
  oo.newInstance({
    name: "notification",
    prefixCls: n || Yi,
    useStyle: Za,
    class: p,
    style: Fd(r, i ?? Rd, a ?? jd),
    appContext: s,
    getContainer: o,
    closeIcon: (h) => {
      let {
        prefixCls: g
      } = h;
      return w("span", {
        class: `${g}-close-x`
      }, [ln(l, {}, w(Jt, {
        class: `${g}-close-icon`
      }, null))]);
    },
    maxCount: Hd,
    hasTransitionName: !0
  }, (h) => {
    Nt[u] = h, t(h);
  });
}
const jO = {
  success: za,
  info: Wa,
  error: ka,
  warning: Va
};
function DO(e) {
  const {
    icon: t,
    type: n,
    description: r,
    message: o,
    btn: i
  } = e, a = e.duration === void 0 ? Nd : e.duration;
  RO(e, (l) => {
    l.notice({
      content: (s) => {
        let {
          prefixCls: c
        } = s;
        const f = `${c}-notice`;
        let u = null;
        if (t)
          u = () => w("span", {
            class: `${f}-icon`
          }, [ln(t)]);
        else if (n) {
          const d = jO[n];
          u = () => w(d, {
            class: `${f}-icon ${f}-icon-${n}`
          }, null);
        }
        return w("div", {
          class: u ? `${f}-with-icon` : ""
        }, [u && u(), w("div", {
          class: `${f}-message`
        }, [!r && u ? w("span", {
          class: `${f}-message-single-line-auto-margin`
        }, null) : null, ln(o)]), w("div", {
          class: `${f}-description`
        }, [ln(r)]), i ? w("span", {
          class: `${f}-btn`
        }, [ln(i)]) : null]);
      },
      duration: a,
      closable: !0,
      onClose: e.onClose,
      onClick: e.onClick,
      key: e.key,
      style: e.style || {},
      class: e.class
    });
  });
}
const wn = {
  open: DO,
  close(e) {
    Object.keys(Nt).forEach((t) => Promise.resolve(Nt[t]).then((n) => {
      n.removeNotice(e);
    }));
  },
  config: NO,
  destroy() {
    Object.keys(Nt).forEach((e) => {
      Promise.resolve(Nt[e]).then((t) => {
        t.destroy();
      }), delete Nt[e];
    });
  }
}, BO = ["success", "info", "warning", "error"];
BO.forEach((e) => {
  wn[e] = (t) => wn.open(m(m({}, t), {
    type: e
  }));
});
wn.warn = wn.warning;
wn.useNotification = FO;
const LO = `-ant-${Date.now()}-${Math.random()}`;
function HO(e, t) {
  const n = {}, r = (a, l) => {
    let s = a.clone();
    return s = (l == null ? void 0 : l(s)) || s, s.toRgbString();
  }, o = (a, l) => {
    const s = new be(a), c = kt(s.toRgbString());
    n[`${l}-color`] = r(s), n[`${l}-color-disabled`] = c[1], n[`${l}-color-hover`] = c[4], n[`${l}-color-active`] = c[6], n[`${l}-color-outline`] = s.clone().setAlpha(0.2).toRgbString(), n[`${l}-color-deprecated-bg`] = c[0], n[`${l}-color-deprecated-border`] = c[2];
  };
  if (t.primaryColor) {
    o(t.primaryColor, "primary");
    const a = new be(t.primaryColor), l = kt(a.toRgbString());
    l.forEach((c, f) => {
      n[`primary-${f + 1}`] = c;
    }), n["primary-color-deprecated-l-35"] = r(a, (c) => c.lighten(35)), n["primary-color-deprecated-l-20"] = r(a, (c) => c.lighten(20)), n["primary-color-deprecated-t-20"] = r(a, (c) => c.tint(20)), n["primary-color-deprecated-t-50"] = r(a, (c) => c.tint(50)), n["primary-color-deprecated-f-12"] = r(a, (c) => c.setAlpha(c.getAlpha() * 0.12));
    const s = new be(l[0]);
    n["primary-color-active-deprecated-f-30"] = r(s, (c) => c.setAlpha(c.getAlpha() * 0.3)), n["primary-color-active-deprecated-d-02"] = r(s, (c) => c.darken(2));
  }
  return t.successColor && o(t.successColor, "success"), t.warningColor && o(t.warningColor, "warning"), t.errorColor && o(t.errorColor, "error"), t.infoColor && o(t.infoColor, "info"), `
  :root {
    ${Object.keys(n).map((a) => `--${e}-${a}: ${n[a]};`).join(`
`)}
  }
  `.trim();
}
function zO(e, t) {
  const n = HO(e, t);
  Qe() ? Gn(n, `${LO}-dynamic-theme`) : Xe(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const VO = (e) => {
  const [t, n] = Tn();
  return vi(T(() => ({
    theme: t.value,
    token: n.value,
    hashId: "",
    path: ["ant-design-icons", e.value]
  })), () => [{
    [`.${e.value}`]: m(m({}, Rg()), {
      [`.${e.value} .${e.value}-icon`]: {
        display: "block"
      }
    })
  }]);
};
function WO(e, t) {
  const n = T(() => (e == null ? void 0 : e.value) || {}), r = T(() => n.value.inherit === !1 || !(t != null && t.value) ? Au : t.value);
  return T(() => {
    if (!(e != null && e.value))
      return t == null ? void 0 : t.value;
    const i = m({}, r.value.components);
    return Object.keys(e.value.components || {}).forEach((a) => {
      i[a] = m(m({}, i[a]), e.value.components[a]);
    }), m(m(m({}, r.value), n.value), {
      token: m(m({}, r.value.token), n.value.token),
      components: i
    });
  });
}
var kO = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const qO = "ant";
function pn() {
  return ye.prefixCls || qO;
}
function zd() {
  return ye.iconPrefixCls || ia;
}
const Ja = Ye({}), ye = Ye({});
Be(() => {
  m(ye, Ja), ye.prefixCls = pn(), ye.iconPrefixCls = zd(), ye.getPrefixCls = (e, t) => t || (e ? `${ye.prefixCls}-${e}` : ye.prefixCls), ye.getRootPrefixCls = () => ye.prefixCls ? ye.prefixCls : pn();
});
let ni;
const GO = (e) => {
  ni && ni(), ni = Be(() => {
    m(Ja, Ye(e)), m(ye, Ye(e));
  }), e.theme && zO(pn(), e.theme);
}, UO = () => ({
  getPrefixCls: (e, t) => t || (e ? `${pn()}-${e}` : pn()),
  getIconPrefixCls: zd,
  getRootPrefixCls: () => ye.prefixCls ? ye.prefixCls : pn()
}), mn = V({
  compatConfig: {
    MODE: 3
  },
  name: "AConfigProvider",
  inheritAttrs: !1,
  props: em(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const r = so(), o = (P, F) => {
      const {
        prefixCls: I = "ant"
      } = e;
      if (F)
        return F;
      const N = I || r.getPrefixCls("");
      return P ? `${N}-${P}` : N;
    }, i = T(() => e.iconPrefixCls || r.iconPrefixCls.value || ia), a = T(() => i.value !== r.iconPrefixCls.value), l = T(() => {
      var P;
      return e.csp || ((P = r.csp) === null || P === void 0 ? void 0 : P.value);
    }), s = VO(i), c = WO(T(() => e.theme), T(() => {
      var P;
      return (P = r.theme) === null || P === void 0 ? void 0 : P.value;
    })), f = (P) => (e.renderEmpty || n.renderEmpty || r.renderEmpty || Kg)(P), u = T(() => {
      var P, F;
      return (P = e.autoInsertSpaceInButton) !== null && P !== void 0 ? P : (F = r.autoInsertSpaceInButton) === null || F === void 0 ? void 0 : F.value;
    }), d = T(() => {
      var P;
      return e.locale || ((P = r.locale) === null || P === void 0 ? void 0 : P.value);
    });
    Q(d, () => {
      Ja.locale = d.value;
    }, {
      immediate: !0
    });
    const p = T(() => {
      var P;
      return e.direction || ((P = r.direction) === null || P === void 0 ? void 0 : P.value);
    }), h = T(() => {
      var P, F;
      return (P = e.space) !== null && P !== void 0 ? P : (F = r.space) === null || F === void 0 ? void 0 : F.value;
    }), g = T(() => {
      var P, F;
      return (P = e.virtual) !== null && P !== void 0 ? P : (F = r.virtual) === null || F === void 0 ? void 0 : F.value;
    }), x = T(() => {
      var P, F;
      return (P = e.dropdownMatchSelectWidth) !== null && P !== void 0 ? P : (F = r.dropdownMatchSelectWidth) === null || F === void 0 ? void 0 : F.value;
    }), v = T(() => {
      var P;
      return e.getTargetContainer !== void 0 ? e.getTargetContainer : (P = r.getTargetContainer) === null || P === void 0 ? void 0 : P.value;
    }), $ = T(() => {
      var P;
      return e.getPopupContainer !== void 0 ? e.getPopupContainer : (P = r.getPopupContainer) === null || P === void 0 ? void 0 : P.value;
    }), y = T(() => {
      var P;
      return e.pageHeader !== void 0 ? e.pageHeader : (P = r.pageHeader) === null || P === void 0 ? void 0 : P.value;
    }), b = T(() => {
      var P;
      return e.input !== void 0 ? e.input : (P = r.input) === null || P === void 0 ? void 0 : P.value;
    }), S = T(() => {
      var P;
      return e.pagination !== void 0 ? e.pagination : (P = r.pagination) === null || P === void 0 ? void 0 : P.value;
    }), O = T(() => {
      var P;
      return e.form !== void 0 ? e.form : (P = r.form) === null || P === void 0 ? void 0 : P.value;
    }), C = T(() => {
      var P;
      return e.select !== void 0 ? e.select : (P = r.select) === null || P === void 0 ? void 0 : P.value;
    }), E = T(() => e.componentSize), A = T(() => e.componentDisabled), _ = T(() => {
      var P, F;
      return (P = e.wave) !== null && P !== void 0 ? P : (F = r.wave) === null || F === void 0 ? void 0 : F.value;
    }), M = {
      csp: l,
      autoInsertSpaceInButton: u,
      locale: d,
      direction: p,
      space: h,
      virtual: g,
      dropdownMatchSelectWidth: x,
      getPrefixCls: o,
      iconPrefixCls: i,
      theme: T(() => {
        var P, F;
        return (P = c.value) !== null && P !== void 0 ? P : (F = r.theme) === null || F === void 0 ? void 0 : F.value;
      }),
      renderEmpty: f,
      getTargetContainer: v,
      getPopupContainer: $,
      pageHeader: y,
      input: b,
      pagination: S,
      form: O,
      select: C,
      componentSize: E,
      componentDisabled: A,
      transformCellText: T(() => e.transformCellText),
      wave: _
    }, R = T(() => {
      const P = c.value || {}, {
        algorithm: F,
        token: I
      } = P, N = kO(P, ["algorithm", "token"]), k = F && (!Array.isArray(F) || F.length > 0) ? du(F) : void 0;
      return m(m({}, N), {
        theme: k,
        token: m(m({}, go), I)
      });
    }), D = T(() => {
      var P, F;
      let I = {};
      return d.value && (I = ((P = d.value.Form) === null || P === void 0 ? void 0 : P.defaultValidateMessages) || ((F = $t.Form) === null || F === void 0 ? void 0 : F.defaultValidateMessages) || {}), e.form && e.form.validateMessages && (I = m(m({}, I), e.form.validateMessages)), I;
    });
    tm(M), Zp({
      validateMessages: D
    }), Lu(E), Jc(A);
    const z = (P) => {
      var F, I;
      let N = a.value ? s((F = n.default) === null || F === void 0 ? void 0 : F.call(n)) : (I = n.default) === null || I === void 0 ? void 0 : I.call(n);
      if (e.theme) {
        const k = /* @__PURE__ */ function() {
          return N;
        }();
        N = w(kg, {
          value: R.value
        }, {
          default: () => [k]
        });
      }
      return w(eO, {
        locale: d.value || P,
        ANT_MARK__: Ki
      }, {
        default: () => [N]
      });
    };
    return Be(() => {
      p.value && (xn.config({
        rtl: p.value === "rtl"
      }), wn.config({
        rtl: p.value === "rtl"
      }));
    }), () => w(tu, {
      children: (P, F, I) => z(I)
    }, null);
  }
});
mn.config = GO;
mn.install = function(e) {
  e.component(mn.name, mn);
};
function el() {
  return {
    keyboard: {
      type: Boolean,
      default: void 0
    },
    mask: {
      type: Boolean,
      default: void 0
    },
    afterClose: Function,
    closable: {
      type: Boolean,
      default: void 0
    },
    maskClosable: {
      type: Boolean,
      default: void 0
    },
    visible: {
      type: Boolean,
      default: void 0
    },
    destroyOnClose: {
      type: Boolean,
      default: void 0
    },
    mousePosition: H.shape({
      x: Number,
      y: Number
    }).loose,
    title: H.any,
    footer: H.any,
    transitionName: String,
    maskTransitionName: String,
    animation: H.any,
    maskAnimation: H.any,
    wrapStyle: {
      type: Object,
      default: void 0
    },
    bodyStyle: {
      type: Object,
      default: void 0
    },
    maskStyle: {
      type: Object,
      default: void 0
    },
    prefixCls: String,
    wrapClassName: String,
    rootClassName: String,
    width: [String, Number],
    height: [String, Number],
    zIndex: Number,
    bodyProps: H.any,
    maskProps: H.any,
    wrapProps: H.any,
    getContainer: H.any,
    dialogStyle: {
      type: Object,
      default: void 0
    },
    dialogClass: String,
    closeIcon: H.any,
    forceRender: {
      type: Boolean,
      default: void 0
    },
    getOpenCount: Function,
    // https://github.com/ant-design/ant-design/issues/19771
    // https://github.com/react-component/dialog/issues/95
    focusTriggerAfterClose: {
      type: Boolean,
      default: void 0
    },
    onClose: Function,
    modalRender: Function
  };
}
function Tc(e, t, n) {
  let r = t;
  return !r && n && (r = `${e}-${n}`), r;
}
let Pc = -1;
function XO() {
  return Pc += 1, Pc;
}
function Ec(e, t) {
  let n = e[`page${t ? "Y" : "X"}Offset`];
  const r = `scroll${t ? "Top" : "Left"}`;
  if (typeof n != "number") {
    const o = e.document;
    n = o.documentElement[r], typeof n != "number" && (n = o.body[r]);
  }
  return n;
}
function KO(e) {
  const t = e.getBoundingClientRect(), n = {
    left: t.left,
    top: t.top
  }, r = e.ownerDocument, o = r.defaultView || r.parentWindow;
  return n.left += Ec(o), n.top += Ec(o, !0), n;
}
const _c = {
  width: 0,
  height: 0,
  overflow: "hidden",
  outline: "none"
}, YO = V({
  compatConfig: {
    MODE: 3
  },
  name: "DialogContent",
  inheritAttrs: !1,
  props: m(m({}, el()), {
    motionName: String,
    ariaId: String,
    onVisibleChanged: Function,
    onMousedown: Function,
    onMouseup: Function
  }),
  setup(e, t) {
    let {
      expose: n,
      slots: r,
      attrs: o
    } = t;
    const i = X(), a = X(), l = X();
    n({
      focus: () => {
        var d;
        (d = i.value) === null || d === void 0 || d.focus();
      },
      changeActive: (d) => {
        const {
          activeElement: p
        } = document;
        d && p === a.value ? i.value.focus() : !d && p === i.value && a.value.focus();
      }
    });
    const s = X(), c = T(() => {
      const {
        width: d,
        height: p
      } = e, h = {};
      return d !== void 0 && (h.width = typeof d == "number" ? `${d}px` : d), p !== void 0 && (h.height = typeof p == "number" ? `${p}px` : p), s.value && (h.transformOrigin = s.value), h;
    }), f = () => {
      Le(() => {
        if (l.value) {
          const d = KO(l.value);
          s.value = e.mousePosition ? `${e.mousePosition.x - d.left}px ${e.mousePosition.y - d.top}px` : "";
        }
      });
    }, u = (d) => {
      e.onVisibleChanged(d);
    };
    return () => {
      var d, p, h, g;
      const {
        prefixCls: x,
        footer: v = (d = r.footer) === null || d === void 0 ? void 0 : d.call(r),
        title: $ = (p = r.title) === null || p === void 0 ? void 0 : p.call(r),
        ariaId: y,
        closable: b,
        closeIcon: S = (h = r.closeIcon) === null || h === void 0 ? void 0 : h.call(r),
        onClose: O,
        bodyStyle: C,
        bodyProps: E,
        onMousedown: A,
        onMouseup: _,
        visible: M,
        modalRender: R = r.modalRender,
        destroyOnClose: D,
        motionName: z
      } = e;
      let P;
      v && (P = w("div", {
        class: `${x}-footer`
      }, [v]));
      let F;
      $ && (F = w("div", {
        class: `${x}-header`
      }, [w("div", {
        class: `${x}-title`,
        id: y
      }, [$])]));
      let I;
      b && (I = w("button", {
        type: "button",
        onClick: O,
        "aria-label": "Close",
        class: `${x}-close`
      }, [S || w("span", {
        class: `${x}-close-x`
      }, null)]));
      const N = w("div", {
        class: `${x}-content`
      }, [I, F, w("div", j({
        class: `${x}-body`,
        style: C
      }, E), [(g = r.default) === null || g === void 0 ? void 0 : g.call(r)]), P]), k = So(z);
      return w(Ot, j(j({}, k), {}, {
        onBeforeEnter: f,
        onAfterEnter: () => u(!0),
        onAfterLeave: () => u(!1)
      }), {
        default: () => [M || !D ? wt(w("div", j(j({}, o), {}, {
          ref: l,
          key: "dialog-element",
          role: "document",
          style: [c.value, o.style],
          class: [x, o.class],
          onMousedown: A,
          onMouseup: _
        }), [w("div", {
          tabindex: 0,
          ref: i,
          style: _c,
          "aria-hidden": "true"
        }, null), R ? R({
          originVNode: N
        }) : N, w("div", {
          tabindex: 0,
          ref: a,
          style: _c,
          "aria-hidden": "true"
        }, null)]), [[or, M]]) : null]
      });
    };
  }
}), QO = V({
  compatConfig: {
    MODE: 3
  },
  name: "DialogMask",
  props: {
    prefixCls: String,
    visible: Boolean,
    motionName: String,
    maskProps: Object
  },
  setup(e, t) {
    return () => {
      const {
        prefixCls: n,
        visible: r,
        maskProps: o,
        motionName: i
      } = e, a = So(i);
      return w(Ot, a, {
        default: () => [wt(w("div", j({
          class: `${n}-mask`
        }, o), null), [[or, r]])]
      });
    };
  }
}), Ac = V({
  compatConfig: {
    MODE: 3
  },
  name: "VcDialog",
  inheritAttrs: !1,
  props: Ut(m(m({}, el()), {
    getOpenCount: Function,
    scrollLocker: Object
  }), {
    mask: !0,
    visible: !1,
    keyboard: !0,
    closable: !0,
    maskClosable: !0,
    destroyOnClose: !1,
    prefixCls: "rc-dialog",
    getOpenCount: () => null,
    focusTriggerAfterClose: !0
  }),
  setup(e, t) {
    let {
      attrs: n,
      slots: r
    } = t;
    const o = L(), i = L(), a = L(), l = L(e.visible), s = L(`vcDialogTitle${XO()}`), c = (v) => {
      var $, y;
      if (v)
        vt(i.value, document.activeElement) || (o.value = document.activeElement, ($ = a.value) === null || $ === void 0 || $.focus());
      else {
        const b = l.value;
        if (l.value = !1, e.mask && o.value && e.focusTriggerAfterClose) {
          try {
            o.value.focus({
              preventScroll: !0
            });
          } catch {
          }
          o.value = null;
        }
        b && ((y = e.afterClose) === null || y === void 0 || y.call(e));
      }
    }, f = (v) => {
      var $;
      ($ = e.onClose) === null || $ === void 0 || $.call(e, v);
    }, u = L(!1), d = L(), p = () => {
      clearTimeout(d.value), u.value = !0;
    }, h = () => {
      d.value = setTimeout(() => {
        u.value = !1;
      });
    }, g = (v) => {
      if (!e.maskClosable)
        return null;
      u.value ? u.value = !1 : i.value === v.target && f(v);
    }, x = (v) => {
      if (e.keyboard && v.keyCode === W.ESC) {
        v.stopPropagation(), f(v);
        return;
      }
      e.visible && v.keyCode === W.TAB && a.value.changeActive(!v.shiftKey);
    };
    return Q(() => e.visible, () => {
      e.visible && (l.value = !0);
    }, {
      flush: "post"
    }), We(() => {
      var v;
      clearTimeout(d.value), (v = e.scrollLocker) === null || v === void 0 || v.unLock();
    }), Be(() => {
      var v, $;
      (v = e.scrollLocker) === null || v === void 0 || v.unLock(), l.value && (($ = e.scrollLocker) === null || $ === void 0 || $.lock());
    }), () => {
      const {
        prefixCls: v,
        mask: $,
        visible: y,
        maskTransitionName: b,
        maskAnimation: S,
        zIndex: O,
        wrapClassName: C,
        rootClassName: E,
        wrapStyle: A,
        closable: _,
        maskProps: M,
        maskStyle: R,
        transitionName: D,
        animation: z,
        wrapProps: P,
        title: F = r.title
      } = e, {
        style: I,
        class: N
      } = n;
      return w("div", j({
        class: [`${v}-root`, E]
      }, Yy(e, {
        data: !0
      })), [w(QO, {
        prefixCls: v,
        visible: $ && y,
        motionName: Tc(v, b, S),
        style: m({
          zIndex: O
        }, R),
        maskProps: M
      }, null), w("div", j({
        tabIndex: -1,
        onKeydown: x,
        class: Y(`${v}-wrap`, C),
        ref: i,
        onClick: g,
        role: "dialog",
        "aria-labelledby": F ? s.value : null,
        style: m(m({
          zIndex: O
        }, A), {
          display: l.value ? null : "none"
        })
      }, P), [w(YO, j(j({}, Hu(e, ["scrollLocker"])), {}, {
        style: I,
        class: N,
        onMousedown: p,
        onMouseup: h,
        ref: a,
        closable: _,
        ariaId: s.value,
        prefixCls: v,
        visible: y,
        onClose: f,
        onVisibleChanged: c,
        motionName: Tc(v, D, z)
      }), r)])]);
    };
  }
}), ZO = el(), JO = V({
  compatConfig: {
    MODE: 3
  },
  name: "DialogWrap",
  inheritAttrs: !1,
  props: Ut(ZO, {
    visible: !1
  }),
  setup(e, t) {
    let {
      attrs: n,
      slots: r
    } = t;
    const o = X(e.visible);
    return _a({}, {
      inTriggerContext: !1
    }), Q(() => e.visible, () => {
      e.visible && (o.value = !0);
    }, {
      flush: "post"
    }), () => {
      const {
        visible: i,
        getContainer: a,
        forceRender: l,
        destroyOnClose: s = !1,
        afterClose: c
      } = e;
      let f = m(m(m({}, e), n), {
        ref: "_component",
        key: "dialog"
      });
      return a === !1 ? w(Ac, j(j({}, f), {}, {
        getOpenCount: () => 2
      }), r) : !l && s && !o.value ? null : w(Sf, {
        autoLock: !0,
        visible: i,
        forceRender: l,
        getContainer: a
      }, {
        default: (u) => (f = m(m(m({}, f), u), {
          afterClose: () => {
            c == null || c(), o.value = !1;
          }
        }), w(Ac, f, r))
      });
    };
  }
});
function Ic(e) {
  return {
    position: e,
    top: 0,
    insetInlineEnd: 0,
    bottom: 0,
    insetInlineStart: 0
  };
}
const e2 = (e) => {
  const {
    componentCls: t
  } = e;
  return [{
    [`${t}-root`]: {
      [`${t}${e.antCls}-zoom-enter, ${t}${e.antCls}-zoom-appear`]: {
        // reset scale avoid mousePosition bug
        transform: "none",
        opacity: 0,
        animationDuration: e.motionDurationSlow,
        // https://github.com/ant-design/ant-design/issues/11777
        userSelect: "none"
      },
      [`${t}${e.antCls}-zoom-leave ${t}-content`]: {
        pointerEvents: "none"
      },
      [`${t}-mask`]: m(m({}, Ic("fixed")), {
        zIndex: e.zIndexPopupBase,
        height: "100%",
        backgroundColor: e.colorBgMask,
        [`${t}-hidden`]: {
          display: "none"
        }
      }),
      [`${t}-wrap`]: m(m({}, Ic("fixed")), {
        overflow: "auto",
        outline: 0,
        WebkitOverflowScrolling: "touch"
      })
    }
  }, {
    [`${t}-root`]: ew(e)
  }];
}, t2 = (e) => {
  const {
    componentCls: t
  } = e;
  return [
    // ======================== Root =========================
    {
      [`${t}-root`]: {
        [`${t}-wrap`]: {
          zIndex: e.zIndexPopupBase,
          position: "fixed",
          inset: 0,
          overflow: "auto",
          outline: 0,
          WebkitOverflowScrolling: "touch"
        },
        [`${t}-wrap-rtl`]: {
          direction: "rtl"
        },
        [`${t}-centered`]: {
          textAlign: "center",
          "&::before": {
            display: "inline-block",
            width: 0,
            height: "100%",
            verticalAlign: "middle",
            content: '""'
          },
          [t]: {
            top: 0,
            display: "inline-block",
            paddingBottom: 0,
            textAlign: "start",
            verticalAlign: "middle"
          }
        },
        [`@media (max-width: ${e.screenSMMax})`]: {
          [t]: {
            maxWidth: "calc(100vw - 16px)",
            margin: `${e.marginXS} auto`
          },
          [`${t}-centered`]: {
            [t]: {
              flex: 1
            }
          }
        }
      }
    },
    // ======================== Modal ========================
    {
      [t]: m(m({}, On(e)), {
        pointerEvents: "none",
        position: "relative",
        top: 100,
        width: "auto",
        maxWidth: `calc(100vw - ${e.margin * 2}px)`,
        margin: "0 auto",
        paddingBottom: e.paddingLG,
        [`${t}-title`]: {
          margin: 0,
          color: e.modalHeadingColor,
          fontWeight: e.fontWeightStrong,
          fontSize: e.modalHeaderTitleFontSize,
          lineHeight: e.modalHeaderTitleLineHeight,
          wordWrap: "break-word"
        },
        [`${t}-content`]: {
          position: "relative",
          backgroundColor: e.modalContentBg,
          backgroundClip: "padding-box",
          border: 0,
          borderRadius: e.borderRadiusLG,
          boxShadow: e.boxShadowSecondary,
          pointerEvents: "auto",
          padding: `${e.paddingMD}px ${e.paddingContentHorizontalLG}px`
        },
        [`${t}-close`]: m({
          position: "absolute",
          top: (e.modalHeaderCloseSize - e.modalCloseBtnSize) / 2,
          insetInlineEnd: (e.modalHeaderCloseSize - e.modalCloseBtnSize) / 2,
          zIndex: e.zIndexPopupBase + 10,
          padding: 0,
          color: e.modalCloseColor,
          fontWeight: e.fontWeightStrong,
          lineHeight: 1,
          textDecoration: "none",
          background: "transparent",
          borderRadius: e.borderRadiusSM,
          width: e.modalConfirmIconSize,
          height: e.modalConfirmIconSize,
          border: 0,
          outline: 0,
          cursor: "pointer",
          transition: `color ${e.motionDurationMid}, background-color ${e.motionDurationMid}`,
          "&-x": {
            display: "block",
            fontSize: e.fontSizeLG,
            fontStyle: "normal",
            lineHeight: `${e.modalCloseBtnSize}px`,
            textAlign: "center",
            textTransform: "none",
            textRendering: "auto"
          },
          "&:hover": {
            color: e.modalIconHoverColor,
            backgroundColor: e.wireframe ? "transparent" : e.colorFillContent,
            textDecoration: "none"
          },
          "&:active": {
            backgroundColor: e.wireframe ? "transparent" : e.colorFillContentHover
          }
        }, Eu(e)),
        [`${t}-header`]: {
          color: e.colorText,
          background: e.modalHeaderBg,
          borderRadius: `${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`,
          marginBottom: e.marginXS
        },
        [`${t}-body`]: {
          fontSize: e.fontSize,
          lineHeight: e.lineHeight,
          wordWrap: "break-word"
        },
        [`${t}-footer`]: {
          textAlign: "end",
          background: e.modalFooterBg,
          marginTop: e.marginSM,
          [`${e.antCls}-btn + ${e.antCls}-btn:not(${e.antCls}-dropdown-trigger)`]: {
            marginBottom: 0,
            marginInlineStart: e.marginXS
          }
        },
        [`${t}-open`]: {
          overflow: "hidden"
        }
      })
    },
    // ======================== Pure =========================
    {
      [`${t}-pure-panel`]: {
        top: "auto",
        padding: 0,
        display: "flex",
        flexDirection: "column",
        [`${t}-content,
          ${t}-body,
          ${t}-confirm-body-wrapper`]: {
          display: "flex",
          flexDirection: "column",
          flex: "auto"
        },
        [`${t}-confirm-body`]: {
          marginBottom: "auto"
        }
      }
    }
  ];
}, n2 = (e) => {
  const {
    componentCls: t
  } = e, n = `${t}-confirm`;
  return {
    [n]: {
      "&-rtl": {
        direction: "rtl"
      },
      [`${e.antCls}-modal-header`]: {
        display: "none"
      },
      [`${n}-body-wrapper`]: m({}, jg()),
      [`${n}-body`]: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        [`${n}-title`]: {
          flex: "0 0 100%",
          display: "block",
          // create BFC to avoid
          // https://user-images.githubusercontent.com/507615/37702510-ba844e06-2d2d-11e8-9b67-8e19be57f445.png
          overflow: "hidden",
          color: e.colorTextHeading,
          fontWeight: e.fontWeightStrong,
          fontSize: e.modalHeaderTitleFontSize,
          lineHeight: e.modalHeaderTitleLineHeight,
          [`+ ${n}-content`]: {
            marginBlockStart: e.marginXS,
            flexBasis: "100%",
            maxWidth: `calc(100% - ${e.modalConfirmIconSize + e.marginSM}px)`
          }
        },
        [`${n}-content`]: {
          color: e.colorText,
          fontSize: e.fontSize
        },
        [`> ${e.iconCls}`]: {
          flex: "none",
          marginInlineEnd: e.marginSM,
          fontSize: e.modalConfirmIconSize,
          [`+ ${n}-title`]: {
            flex: 1
          },
          // `content` after `icon` should set marginLeft
          [`+ ${n}-title + ${n}-content`]: {
            marginInlineStart: e.modalConfirmIconSize + e.marginSM
          }
        }
      },
      [`${n}-btns`]: {
        textAlign: "end",
        marginTop: e.marginSM,
        [`${e.antCls}-btn + ${e.antCls}-btn`]: {
          marginBottom: 0,
          marginInlineStart: e.marginXS
        }
      }
    },
    [`${n}-error ${n}-body > ${e.iconCls}`]: {
      color: e.colorError
    },
    [`${n}-warning ${n}-body > ${e.iconCls},
        ${n}-confirm ${n}-body > ${e.iconCls}`]: {
      color: e.colorWarning
    },
    [`${n}-info ${n}-body > ${e.iconCls}`]: {
      color: e.colorInfo
    },
    [`${n}-success ${n}-body > ${e.iconCls}`]: {
      color: e.colorSuccess
    },
    // https://github.com/ant-design/ant-design/issues/37329
    [`${t}-zoom-leave ${t}-btns`]: {
      pointerEvents: "none"
    }
  };
}, r2 = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-root`]: {
      [`${t}-wrap-rtl`]: {
        direction: "rtl",
        [`${t}-confirm-body`]: {
          direction: "rtl"
        }
      }
    }
  };
}, o2 = (e) => {
  const {
    componentCls: t,
    antCls: n
  } = e, r = `${t}-confirm`;
  return {
    [t]: {
      [`${t}-content`]: {
        padding: 0
      },
      [`${t}-header`]: {
        padding: e.modalHeaderPadding,
        borderBottom: `${e.modalHeaderBorderWidth}px ${e.modalHeaderBorderStyle} ${e.modalHeaderBorderColorSplit}`,
        marginBottom: 0
      },
      [`${t}-body`]: {
        padding: e.modalBodyPadding
      },
      [`${t}-footer`]: {
        padding: `${e.modalFooterPaddingVertical}px ${e.modalFooterPaddingHorizontal}px`,
        borderTop: `${e.modalFooterBorderWidth}px ${e.modalFooterBorderStyle} ${e.modalFooterBorderColorSplit}`,
        borderRadius: `0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px`,
        marginTop: 0
      }
    },
    [r]: {
      [`${n}-modal-body`]: {
        padding: `${e.padding * 2}px ${e.padding * 2}px ${e.paddingLG}px`
      },
      [`${r}-body`]: {
        [`> ${e.iconCls}`]: {
          marginInlineEnd: e.margin,
          // `content` after `icon` should set marginLeft
          [`+ ${r}-title + ${r}-content`]: {
            marginInlineStart: e.modalConfirmIconSize + e.margin
          }
        }
      },
      [`${r}-btns`]: {
        marginTop: e.marginLG
      }
    }
  };
}, i2 = Ze("Modal", (e) => {
  const t = e.padding, n = e.fontSizeHeading5, r = e.lineHeightHeading5, o = ke(e, {
    modalBodyPadding: e.paddingLG,
    modalHeaderBg: e.colorBgElevated,
    modalHeaderPadding: `${t}px ${e.paddingLG}px`,
    modalHeaderBorderWidth: e.lineWidth,
    modalHeaderBorderStyle: e.lineType,
    modalHeaderTitleLineHeight: r,
    modalHeaderTitleFontSize: n,
    modalHeaderBorderColorSplit: e.colorSplit,
    modalHeaderCloseSize: r * n + t * 2,
    modalContentBg: e.colorBgElevated,
    modalHeadingColor: e.colorTextHeading,
    modalCloseColor: e.colorTextDescription,
    modalFooterBg: "transparent",
    modalFooterBorderColorSplit: e.colorSplit,
    modalFooterBorderStyle: e.lineType,
    modalFooterPaddingVertical: e.paddingXS,
    modalFooterPaddingHorizontal: e.padding,
    modalFooterBorderWidth: e.lineWidth,
    modalConfirmTitleFontSize: e.fontSizeLG,
    modalIconHoverColor: e.colorIconHover,
    modalConfirmIconSize: e.fontSize * e.lineHeight,
    modalCloseBtnSize: e.controlHeightLG * 0.55
  });
  return [t2(o), n2(o), r2(o), e2(o), e.wireframe && o2(o), Zf(o, "zoom")];
});
var a2 = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
let Zi;
const l2 = (e) => {
  Zi = {
    x: e.pageX,
    y: e.pageY
  }, setTimeout(() => Zi = null, 100);
};
ad() && sn(document.documentElement, "click", l2, !0);
const s2 = () => ({
  prefixCls: String,
  /** @deprecated Please use `open` instead. */
  visible: {
    type: Boolean,
    default: void 0
  },
  open: {
    type: Boolean,
    default: void 0
  },
  confirmLoading: {
    type: Boolean,
    default: void 0
  },
  title: H.any,
  closable: {
    type: Boolean,
    default: void 0
  },
  closeIcon: H.any,
  onOk: Function,
  onCancel: Function,
  "onUpdate:visible": Function,
  "onUpdate:open": Function,
  onChange: Function,
  afterClose: Function,
  centered: {
    type: Boolean,
    default: void 0
  },
  width: [String, Number],
  footer: H.any,
  okText: H.any,
  okType: String,
  cancelText: H.any,
  icon: H.any,
  maskClosable: {
    type: Boolean,
    default: void 0
  },
  forceRender: {
    type: Boolean,
    default: void 0
  },
  okButtonProps: te(),
  cancelButtonProps: te(),
  destroyOnClose: {
    type: Boolean,
    default: void 0
  },
  wrapClassName: String,
  maskTransitionName: String,
  transitionName: String,
  getContainer: {
    type: [String, Function, Boolean, Object],
    default: void 0
  },
  zIndex: Number,
  bodyStyle: te(),
  maskStyle: te(),
  mask: {
    type: Boolean,
    default: void 0
  },
  keyboard: {
    type: Boolean,
    default: void 0
  },
  wrapProps: Object,
  focusTriggerAfterClose: {
    type: Boolean,
    default: void 0
  },
  modalRender: Function,
  mousePosition: te()
}), Fe = V({
  compatConfig: {
    MODE: 3
  },
  name: "AModal",
  inheritAttrs: !1,
  props: Ut(s2(), {
    width: 520,
    confirmLoading: !1,
    okType: "primary"
  }),
  setup(e, t) {
    let {
      emit: n,
      slots: r,
      attrs: o
    } = t;
    const [i] = co("Modal"), {
      prefixCls: a,
      rootPrefixCls: l,
      direction: s,
      getPopupContainer: c
    } = Pe("modal", e), [f, u] = i2(a);
    Xe(e.visible === void 0, "Modal", "`visible` will be removed in next major version, please use `open` instead.");
    const d = (g) => {
      n("update:visible", !1), n("update:open", !1), n("cancel", g), n("change", !1);
    }, p = (g) => {
      n("ok", g);
    }, h = () => {
      var g, x;
      const {
        okText: v = (g = r.okText) === null || g === void 0 ? void 0 : g.call(r),
        okType: $,
        cancelText: y = (x = r.cancelText) === null || x === void 0 ? void 0 : x.call(r),
        confirmLoading: b
      } = e;
      return w(Te, null, [w(it, j({
        onClick: d
      }, e.cancelButtonProps), {
        default: () => [y || i.value.cancelText]
      }), w(it, j(j({}, td($)), {}, {
        loading: b,
        onClick: p
      }, e.okButtonProps), {
        default: () => [v || i.value.okText]
      })]);
    };
    return () => {
      var g, x;
      const {
        prefixCls: v,
        visible: $,
        open: y,
        wrapClassName: b,
        centered: S,
        getContainer: O,
        closeIcon: C = (g = r.closeIcon) === null || g === void 0 ? void 0 : g.call(r),
        focusTriggerAfterClose: E = !0
      } = e, A = a2(e, ["prefixCls", "visible", "open", "wrapClassName", "centered", "getContainer", "closeIcon", "focusTriggerAfterClose"]), _ = Y(b, {
        [`${a.value}-centered`]: !!S,
        [`${a.value}-wrap-rtl`]: s.value === "rtl"
      });
      return f(w(JO, j(j(j({}, A), o), {}, {
        rootClassName: u.value,
        class: Y(u.value, o.class),
        getContainer: O || (c == null ? void 0 : c.value),
        prefixCls: a.value,
        wrapClassName: _,
        visible: y ?? $,
        onClose: d,
        focusTriggerAfterClose: E,
        transitionName: tr(l.value, "zoom", e.transitionName),
        maskTransitionName: tr(l.value, "fade", e.maskTransitionName),
        mousePosition: (x = A.mousePosition) !== null && x !== void 0 ? x : Zi
      }), m(m({}, r), {
        footer: r.footer || h,
        closeIcon: () => w("span", {
          class: `${a.value}-close-x`
        }, [C || w(Jt, {
          class: `${a.value}-close-icon`
        }, null)])
      })));
    };
  }
}), c2 = () => {
  const e = L(!1);
  return We(() => {
    e.value = !0;
  }), e;
}, u2 = {
  type: {
    type: String
  },
  actionFn: Function,
  close: Function,
  autofocus: Boolean,
  prefixCls: String,
  buttonProps: te(),
  emitEvent: Boolean,
  quitOnNullishReturnValue: Boolean
};
function Mc(e) {
  return !!(e && e.then);
}
const Fc = V({
  compatConfig: {
    MODE: 3
  },
  name: "ActionButton",
  props: u2,
  setup(e, t) {
    let {
      slots: n
    } = t;
    const r = L(!1), o = L(), i = L(!1);
    let a;
    const l = c2();
    we(() => {
      e.autofocus && (a = setTimeout(() => {
        var u, d;
        return (d = (u = bt(o.value)) === null || u === void 0 ? void 0 : u.focus) === null || d === void 0 ? void 0 : d.call(u);
      }));
    }), We(() => {
      clearTimeout(a);
    });
    const s = function() {
      for (var u, d = arguments.length, p = new Array(d), h = 0; h < d; h++)
        p[h] = arguments[h];
      (u = e.close) === null || u === void 0 || u.call(e, ...p);
    }, c = (u) => {
      Mc(u) && (i.value = !0, u.then(function() {
        l.value || (i.value = !1), s(...arguments), r.value = !1;
      }, (d) => (l.value || (i.value = !1), r.value = !1, Promise.reject(d))));
    }, f = (u) => {
      const {
        actionFn: d
      } = e;
      if (r.value)
        return;
      if (r.value = !0, !d) {
        s();
        return;
      }
      let p;
      if (e.emitEvent) {
        if (p = d(u), e.quitOnNullishReturnValue && !Mc(p)) {
          r.value = !1, s(u);
          return;
        }
      } else if (d.length)
        p = d(e.close), r.value = !1;
      else if (p = d(), !p) {
        s();
        return;
      }
      c(p);
    };
    return () => {
      const {
        type: u,
        prefixCls: d,
        buttonProps: p
      } = e;
      return w(it, j(j(j({}, td(u)), {}, {
        onClick: f,
        loading: i.value,
        prefixCls: d
      }, p), {}, {
        ref: o
      }), n);
    };
  }
});
function rn(e) {
  return typeof e == "function" ? e() : e;
}
const Vd = V({
  name: "ConfirmDialog",
  inheritAttrs: !1,
  props: ["icon", "onCancel", "onOk", "close", "closable", "zIndex", "afterClose", "visible", "open", "keyboard", "centered", "getContainer", "maskStyle", "okButtonProps", "cancelButtonProps", "okType", "prefixCls", "okCancel", "width", "mask", "maskClosable", "okText", "cancelText", "autoFocusButton", "transitionName", "maskTransitionName", "type", "title", "content", "direction", "rootPrefixCls", "bodyStyle", "closeIcon", "modalRender", "focusTriggerAfterClose", "wrapClassName", "confirmPrefixCls", "footer"],
  setup(e, t) {
    let {
      attrs: n
    } = t;
    const [r] = co("Modal");
    return process.env.NODE_ENV !== "production" && Xe(e.visible === void 0, "Modal", "`visible` is deprecated, please use `open` instead."), () => {
      const {
        icon: o,
        onCancel: i,
        onOk: a,
        close: l,
        okText: s,
        closable: c = !1,
        zIndex: f,
        afterClose: u,
        keyboard: d,
        centered: p,
        getContainer: h,
        maskStyle: g,
        okButtonProps: x,
        cancelButtonProps: v,
        okCancel: $,
        width: y = 416,
        mask: b = !0,
        maskClosable: S = !1,
        type: O,
        open: C,
        title: E,
        content: A,
        direction: _,
        closeIcon: M,
        modalRender: R,
        focusTriggerAfterClose: D,
        rootPrefixCls: z,
        bodyStyle: P,
        wrapClassName: F,
        footer: I
      } = e;
      let N = o;
      if (!o && o !== null)
        switch (O) {
          case "info":
            N = w(en, null, null);
            break;
          case "success":
            N = w(Et, null, null);
            break;
          case "error":
            N = w(Pt, null, null);
            break;
          default:
            N = w(_t, null, null);
        }
      const k = e.okType || "primary", G = e.prefixCls || "ant-modal", Z = `${G}-confirm`, oe = n.style || {}, ae = $ ?? O === "confirm", ce = e.autoFocusButton === null ? !1 : e.autoFocusButton || "ok", B = `${G}-confirm`, U = Y(B, `${B}-${e.type}`, {
        [`${B}-rtl`]: _ === "rtl"
      }, n.class), J = r.value, ee = ae && w(Fc, {
        actionFn: i,
        close: l,
        autofocus: ce === "cancel",
        buttonProps: v,
        prefixCls: `${z}-btn`
      }, {
        default: () => [rn(e.cancelText) || J.cancelText]
      });
      return w(Fe, {
        prefixCls: G,
        class: U,
        wrapClassName: Y({
          [`${B}-centered`]: !!p
        }, F),
        onCancel: (ne) => l == null ? void 0 : l({
          triggerCancel: !0
        }, ne),
        open: C,
        title: "",
        footer: "",
        transitionName: tr(z, "zoom", e.transitionName),
        maskTransitionName: tr(z, "fade", e.maskTransitionName),
        mask: b,
        maskClosable: S,
        maskStyle: g,
        style: oe,
        bodyStyle: P,
        width: y,
        zIndex: f,
        afterClose: u,
        keyboard: d,
        centered: p,
        getContainer: h,
        closable: c,
        closeIcon: M,
        modalRender: R,
        focusTriggerAfterClose: D
      }, {
        default: () => [w("div", {
          class: `${Z}-body-wrapper`
        }, [w("div", {
          class: `${Z}-body`
        }, [rn(N), E === void 0 ? null : w("span", {
          class: `${Z}-title`
        }, [rn(E)]), w("div", {
          class: `${Z}-content`
        }, [rn(A)])]), I !== void 0 ? rn(I) : w("div", {
          class: `${Z}-btns`
        }, [ee, w(Fc, {
          type: k,
          actionFn: a,
          close: l,
          autofocus: ce === "ok",
          buttonProps: x,
          prefixCls: `${z}-btn`
        }, {
          default: () => [rn(s) || (ae ? J.okText : J.justOkText)]
        })])])]
      });
    };
  }
}), Bt = [], fr = (e) => {
  const t = document.createDocumentFragment();
  let n = m(m({}, Hu(e, ["parentContext", "appContext"])), {
    close: i,
    open: !0
  }), r = null;
  function o() {
    r && (Vt(null, t), r = null);
    for (var c = arguments.length, f = new Array(c), u = 0; u < c; u++)
      f[u] = arguments[u];
    const d = f.some((p) => p && p.triggerCancel);
    e.onCancel && d && e.onCancel(() => {
    }, ...f.slice(1));
    for (let p = 0; p < Bt.length; p++)
      if (Bt[p] === i) {
        Bt.splice(p, 1);
        break;
      }
  }
  function i() {
    for (var c = arguments.length, f = new Array(c), u = 0; u < c; u++)
      f[u] = arguments[u];
    n = m(m({}, n), {
      open: !1,
      afterClose: () => {
        typeof e.afterClose == "function" && e.afterClose(), o.apply(this, f);
      }
    }), n.visible && delete n.visible, a(n);
  }
  function a(c) {
    typeof c == "function" ? n = c(n) : n = m(m({}, n), c), r && tv(r, n, t);
  }
  const l = (c) => {
    const f = ye, u = f.prefixCls, d = c.prefixCls || `${u}-modal`, p = f.iconPrefixCls, h = JS();
    return w(mn, j(j({}, f), {}, {
      prefixCls: u
    }), {
      default: () => [w(Vd, j(j({}, c), {}, {
        rootPrefixCls: u,
        prefixCls: d,
        iconPrefixCls: p,
        locale: h,
        cancelText: c.cancelText || h.cancelText
      }), null)]
    });
  };
  function s(c) {
    const f = w(l, m({}, c));
    return f.appContext = e.parentContext || e.appContext || f.appContext, Vt(f, t), f;
  }
  return r = s(n), Bt.push(i), {
    destroy: i,
    update: a
  };
};
function Wd(e) {
  return m(m({}, e), {
    type: "warning"
  });
}
function kd(e) {
  return m(m({}, e), {
    type: "info"
  });
}
function qd(e) {
  return m(m({}, e), {
    type: "success"
  });
}
function Gd(e) {
  return m(m({}, e), {
    type: "error"
  });
}
function Ud(e) {
  return m(m({}, e), {
    type: "confirm"
  });
}
const f2 = () => ({
  config: Object,
  afterClose: Function,
  destroyAction: Function,
  open: Boolean
}), d2 = V({
  name: "HookModal",
  inheritAttrs: !1,
  props: Ut(f2(), {
    config: {
      width: 520,
      okType: "primary"
    }
  }),
  setup(e, t) {
    let {
      expose: n
    } = t;
    var r;
    const o = T(() => e.open), i = T(() => e.config), {
      direction: a,
      getPrefixCls: l
    } = so(), s = l("modal"), c = l(), f = () => {
      var h, g;
      e == null || e.afterClose(), (g = (h = i.value).afterClose) === null || g === void 0 || g.call(h);
    }, u = function() {
      e.destroyAction(...arguments);
    };
    n({
      destroy: u
    });
    const d = (r = i.value.okCancel) !== null && r !== void 0 ? r : i.value.type === "confirm", [p] = co("Modal", $t.Modal);
    return () => w(Vd, j(j({
      prefixCls: s,
      rootPrefixCls: c
    }, i.value), {}, {
      close: u,
      open: o.value,
      afterClose: f,
      okText: i.value.okText || (d ? p == null ? void 0 : p.value.okText : p == null ? void 0 : p.value.justOkText),
      direction: i.value.direction || a.value,
      cancelText: i.value.cancelText || (p == null ? void 0 : p.value.cancelText)
    }), null);
  }
});
let Nc = 0;
const p2 = V({
  name: "ElementsHolder",
  inheritAttrs: !1,
  setup(e, t) {
    let {
      expose: n
    } = t;
    const r = L([]);
    return n({
      addModal: (i) => (r.value.push(i), r.value = r.value.slice(), () => {
        r.value = r.value.filter((a) => a !== i);
      })
    }), () => r.value.map((i) => i());
  }
});
function m2() {
  const e = L(null), t = L([]);
  Q(t, () => {
    t.value.length && ([...t.value].forEach((a) => {
      a();
    }), t.value = []);
  }, {
    immediate: !0
  });
  const n = (i) => function(l) {
    var s;
    Nc += 1;
    const c = L(!0), f = L(null), u = L(pe(l)), d = L({});
    Q(() => l, (y) => {
      x(m(m({}, op(y) ? y.value : y), d.value));
    });
    const p = function() {
      c.value = !1;
      for (var y = arguments.length, b = new Array(y), S = 0; S < y; S++)
        b[S] = arguments[S];
      const O = b.some((C) => C && C.triggerCancel);
      u.value.onCancel && O && u.value.onCancel(() => {
      }, ...b.slice(1));
    };
    let h;
    const g = () => w(d2, {
      key: `modal-${Nc}`,
      config: i(u.value),
      ref: f,
      open: c.value,
      destroyAction: p,
      afterClose: () => {
        h == null || h();
      }
    }, null);
    h = (s = e.value) === null || s === void 0 ? void 0 : s.addModal(g), h && Bt.push(h);
    const x = (y) => {
      u.value = m(m({}, u.value), y);
    };
    return {
      destroy: () => {
        f.value ? p() : t.value = [...t.value, p];
      },
      update: (y) => {
        d.value = y, f.value ? x(y) : t.value = [...t.value, () => x(y)];
      }
    };
  }, r = T(() => ({
    info: n(kd),
    success: n(qd),
    error: n(Gd),
    warning: n(Wd),
    confirm: n(Ud)
  })), o = Symbol("modalHolderKey");
  return [r.value, () => w(p2, {
    key: o,
    ref: e
  }, null)];
}
function Xd(e) {
  return fr(Wd(e));
}
Fe.useModal = m2;
Fe.info = function(t) {
  return fr(kd(t));
};
Fe.success = function(t) {
  return fr(qd(t));
};
Fe.error = function(t) {
  return fr(Gd(t));
};
Fe.warning = Xd;
Fe.warn = Xd;
Fe.confirm = function(t) {
  return fr(Ud(t));
};
Fe.destroyAll = function() {
  for (; Bt.length; ) {
    const t = Bt.pop();
    t && t();
  }
};
Fe.install = function(e) {
  return e.component(Fe.name, Fe), e;
};
const Rc = Ye({
  Text: {
    component: ue(
      le(() => import("./Text-BqaXX8rF.js"))
    )
  },
  Password: {
    component: ue(
      le(() => import("./Text-BqaXX8rF.js"))
    ),
    defaultProps: {
      type: "password"
    }
  },
  Textarea: {
    component: ue(
      le(() => import("./Textarea-BaaCO1KI.js"))
    )
  },
  Number: {
    component: ue(
      le(() => import("./Number-BTVwTkFJ.js"))
    )
  },
  Select: {
    component: ue(
      le(() => import("./AsyncSelect-D7VtcEJJ.js"))
    )
  },
  Radio: {
    component: ue(
      le(() => import("./AsyncRadio-CJVmMQon.js"))
    )
  },
  Checkbox: {
    component: ue(
      le(() => import("./AsyncCheckBox-ByJQjXuC.js"))
    )
  },
  DatePicker: {
    component: ue(
      le(() => import("./DatePicker-UwSH3dp1.js"))
    )
  },
  Rate: {
    component: ue(
      le(() => import("./Rate-B4kLZ_bj.js"))
    )
  },
  Slider: {
    component: ue(
      le(() => import("./Slider-BnW6QfdD.js"))
    )
  },
  Switch: {
    component: ue(
      le(() => import("./CustomSwitch-qZB3ss21.js"))
    )
  },
  Upload: {
    component: ue(
      le(() => import("./CustomUpload-D8H1J8H_.js"))
    )
  },
  TreeSelect: {
    component: ue(
      le(
        () => import("./AsyncTreeSelect-C6UkURrq.js")
      )
    )
  },
  TimePicker: {
    component: ue(
      le(() => import("./TimePicker-DJ23wwVq.js"))
    )
  },
  AutoComplete: {
    component: ue(
      le(
        () => import("./AutoCompleteInput-B5CMM-l_.js")
      )
    )
  },
  Tag: {
    component: ue(
      le(() => import("./TagShow-oG5_GPNy.js"))
    )
  },
  Mentions: {
    component: ue(
      le(() => import("./Mentions-BVJWiNhr.js"))
    )
  },
  Divider: {
    component: ue(
      le(() => import("./CustomDivider-3rxWHLVG.js"))
    )
  },
  AvatarGroup: {
    component: ue(
      le(
        () => import("./CustomAvatarGroup-DnyQezgr.js")
      )
    )
  },
  Corn: {
    component: ue(
      le(() => import("./CronInput-DhNdJaxm.js"))
    )
  }
}), g2 = {
  class: "title",
  style: { display: "flex", "justify-content": "center", "margin-bottom": "15px", "align-items": "center" }
}, h2 = {
  key: 0,
  style: { display: "flex", "justify-content": "center", gap: "50px" }
}, v2 = {
  name: "dynamic-form"
}, y2 = /* @__PURE__ */ V({
  ...v2,
  props: {
    schema: {},
    modelValue: {},
    showBtns: { type: [Boolean, Object] },
    registeToParent: { type: Function },
    unRegisteFromParent: { type: Function },
    disabled: { type: Boolean },
    onBeforeSubmit: { type: Function },
    onSubmit: { type: Function },
    onAfterSubmit: { type: Function }
  },
  emits: ["update:modelValue"],
  setup(e, { expose: t, emit: n }) {
    const r = e, o = T(() => typeof r.showBtns == "boolean" ? r.showBtns ? {
      clearAll: 0,
      reset: 1,
      submit: 1
    } : null : r.showBtns ? r.showBtns : {
      clearAll: 0,
      reset: 1,
      submit: 1
    }), i = X(null), a = $n(), l = X({}), s = X([]);
    we(() => {
      r.registeToParent && a && r.registeToParent(a);
    }), ta(() => {
      r.unRegisteFromParent && a && r.unRegisteFromParent(a);
    });
    const c = (A) => {
      s.value.push(A);
    }, f = (A) => {
      const _ = s.value.findIndex((M) => M.uid == A.uid);
      _ > -1 && s.value.splice(_, 1);
    }, u = n, d = T({
      get: () => r.modelValue,
      set: (A) => {
        u("update:modelValue", A);
      }
    }), p = () => {
      const A = r.schema.items.reduce(
        (_, M) => _[M.field] ? {} : (_[M.field] = M.value, _),
        {}
      );
      d.value = { ...d.value, ...A };
    };
    Dc(() => {
    }), we(() => {
      p(), v.value = r.schema.items.some((A) => A.next);
    });
    const h = () => new Promise((A, _) => {
      var M;
      (M = i.value) == null || M.validateFields().then((R) => {
        A(R);
      }).catch((R) => _(R));
    }), g = (A = !0) => {
      const _ = r.schema.items.reduce(
        (M, R) => M[R.field] ? {} : (M[R.field] = A ? void 0 : R.value, M),
        {}
      );
      d.value = { ...d.value, ..._ };
    }, x = le(() => Promise.resolve().then(() => b2)), v = X(!1), $ = T(
      () => (A, _) => y.value(A, _).items.length > 0
    ), y = T(
      () => (A, _) => {
        var M;
        return ((M = _.next) == null ? void 0 : M.call(_, A)) || { title: "", items: [] };
      }
    ), b = X(!1), S = async () => {
      var A, _, M, R, D;
      b.value = !0, (A = r.onBeforeSubmit) == null || A.call(r, d.value);
      try {
        const z = await E();
        await ((M = (_ = r.schema).onSubmit) == null ? void 0 : M.call(_, z)), await ((R = r.onSubmit) == null ? void 0 : R.call(r, d.value));
      } catch (z) {
        console.error("在数据提交时发生错误：", z), xn.error("操作失败");
      } finally {
        b.value = !1, (D = r.onAfterSubmit) == null || D.call(r, d.value);
      }
    }, O = () => {
      g(!1);
    }, C = () => {
      g();
    }, E = async () => {
      var _;
      const A = await h();
      for (let M of s.value)
        await ((_ = M.exposed) == null ? void 0 : _.validateThenGetModel());
      return A.next = l.value, A;
    };
    return Q(
      () => l.value,
      (A) => {
        d.value.next = A;
      },
      {
        deep: !0,
        immediate: !0
      }
    ), Q(
      () => d.value.next,
      (A) => {
        A && (l.value = A);
      }
    ), t({
      validateFields: h,
      resetFields: g,
      validateThenGetModel: E
    }), (A, _) => {
      const M = yd, R = it, D = yt;
      return fe(), Se("div", null, [
        ip("div", g2, ai(r.schema.title), 1),
        w(D, Fn({
          ref_key: "formRef",
          ref: i,
          model: d.value
        }, { ...A.$attrs, ...r.schema.formProps }, {
          disabled: b.value || r.disabled,
          class: r.schema.className || "dynamic-form"
        }, nl({ ...r.schema.formEvent, onNull: () => {
        } })), {
          default: ht(() => {
            var z, P, F;
            return [
              (fe(!0), Se(Te, null, li(r.schema.items, (I) => {
                var N;
                return wt((fe(), Se("div", {
                  class: "items",
                  key: I.field
                }, [
                  w(M, Fn({
                    name: I.field,
                    label: I.label,
                    ref_for: !0
                  }, I.formItemProps, {
                    class: ((N = I.formItemProps) == null ? void 0 : N.className) || "dynamic-form-item"
                  }), {
                    default: ht(() => {
                      var k, G, Z, oe;
                      return [
                        (fe(), En(ap(
                          typeof I.component == "string" ? (k = pe(Rc)[I.component]) == null ? void 0 : k.component : I.component
                        ), Fn({ ref_for: !0 }, {
                          ...I.componentProps,
                          ...typeof I.component == "string" ? (G = pe(Rc)[I.component]) == null ? void 0 : G.defaultProps : (Z = I.componentProps) == null ? void 0 : Z.customProps
                        }, {
                          value: d.value[I.field],
                          "onUpdate:value": (ae) => d.value[I.field] = ae,
                          class: ((oe = I.componentProps) == null ? void 0 : oe.className) || "dynamic-form-component"
                        }, nl({ ...I.componentEvent, onNull: () => {
                        } }), {
                          disabled: r.disabled || b.value
                        }), null, 16, ["value", "onUpdate:value", "class", "disabled"]))
                      ];
                    }),
                    _: 2
                  }, 1040, ["name", "label", "class"]),
                  v.value ? (fe(), Se("div", {
                    key: 0,
                    class: "subForms",
                    style: un(I.nextFormStyle || {})
                  }, [
                    $.value(d.value[I.field], I) ? (fe(), En(pe(x), {
                      key: 0,
                      schema: y.value(d.value[I.field], I),
                      modelValue: l.value,
                      "onUpdate:modelValue": _[0] || (_[0] = (k) => l.value = k),
                      "registe-to-parent": c,
                      "un-registe-from-parent": f,
                      disabled: r.disabled || b.value,
                      "show-btns": {
                        clearAll: 0,
                        reset: 0,
                        submit: 0
                      }
                    }, null, 8, ["schema", "modelValue", "disabled"])) : ut("", !0)
                  ], 4)) : ut("", !0)
                ])), [
                  [or, I.onShow ? I.onShow(d.value) : !0]
                ]);
              }), 128)),
              o.value ? (fe(), Se("div", h2, [
                (z = o.value) != null && z.clearAll ? (fe(), En(R, {
                  key: 0,
                  onClick: C
                }, {
                  default: ht(() => [
                    Nn("清空")
                  ]),
                  _: 1
                })) : ut("", !0),
                (P = o.value) != null && P.reset ? (fe(), En(R, {
                  key: 1,
                  onClick: O
                }, {
                  default: ht(() => [
                    Nn("重置")
                  ]),
                  _: 1
                })) : ut("", !0),
                (F = o.value) != null && F.submit ? (fe(), En(R, {
                  key: 2,
                  type: "primary",
                  onClick: S,
                  loading: r.disabled || b.value
                }, {
                  default: ht(() => [
                    Nn("提交")
                  ]),
                  _: 1
                }, 8, ["loading"])) : ut("", !0)
              ])) : ut("", !0),
              r.schema.customBtns && r.schema.customBtns.length > 0 ? (fe(), Se("div", {
                key: 1,
                class: "custombtns",
                style: un({
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                  gap: "20px",
                  ...r.schema.customBtnsStyle
                })
              }, [
                (fe(!0), Se(Te, null, li(r.schema.customBtns, (I) => (fe(), Se("div", {
                  key: I.text,
                  style: un({
                    display: "inline",
                    justifyContent: "center",
                    ...I.outterStyle
                  })
                }, [
                  w(R, Fn({
                    onClick: () => {
                      var N;
                      (N = I.onClick) == null || N.call(I, d.value);
                    },
                    ref_for: !0
                  }, I.props, {
                    style: {
                      ...I.style
                    }
                  }), {
                    default: ht(() => [
                      Nn(ai(I.text), 1)
                    ]),
                    _: 2
                  }, 1040, ["onClick", "style"])
                ], 4))), 128))
              ], 4)) : ut("", !0)
            ];
          }),
          _: 1
        }, 16, ["model", "disabled", "class"])
      ]);
    };
  }
}), Kd = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, Wn = /* @__PURE__ */ Kd(y2, [["__scopeId", "data-v-f1cd5e4b"]]), b2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Wn
}, Symbol.toStringTag, { value: "Module" })), C2 = { class: "fullscreen" }, x2 = {
  key: 0,
  class: "btns"
}, w2 = /* @__PURE__ */ V({
  __name: "FullScreenDyForm",
  props: {
    schema: {},
    showBtns: { type: [Object, Boolean] },
    init: {},
    onCancel: { type: Function },
    allowDirectClose: { type: Boolean },
    onSubmit: { type: Function },
    style: {},
    draggable: { type: Boolean },
    title: {},
    fadeInOut: { type: Boolean },
    fadeTime: {},
    mousePosition: {},
    goClose: {},
    customBtns: {},
    showCloseBtn: { type: Boolean }
  },
  setup(e) {
    const t = e, n = X({}), r = X(!1), o = X(t.schema);
    we(() => {
      Object.keys(t.init).length > 0 && (n.value = { ...t.init }), t.title && (o.value.title = t.title);
    });
    const i = () => {
      t.allowDirectClose ? t.onCancel() : Fe.confirm({
        title: "确认关闭",
        content: "关闭后将不会保存当前数据，是否继续？",
        onOk: () => {
          t.onCancel();
        },
        okText: "确认关闭",
        okType: "primary",
        okButtonProps: { danger: !0 },
        cancelText: "返回",
        zIndex: 1e4,
        centered: !0
      });
    }, a = () => {
      r.value = !0;
    }, l = () => {
      r.value = !1;
    }, s = {
      mounted(p) {
        if (!t.draggable)
          return;
        let h = p;
        const g = (x) => {
          const v = {
            x: h.getBoundingClientRect().x,
            y: h.getBoundingClientRect().y
          }, $ = {
            x: x.clientX,
            y: x.clientY
          }, y = {
            width: h.getBoundingClientRect().width,
            height: h.getBoundingClientRect().height
          }, b = (S) => {
            h.style.cursor = "move";
            const O = {
              x: S.clientX - $.x,
              y: S.clientY - $.y
            }, C = {
              x: v.x + O.x,
              y: v.y + O.y
            };
            C.x < 15 || C.y < 15 || C.x + y.width > window.innerWidth - 30 || C.y + y.height > window.innerHeight - 15 || (h.style.left = C.x + "px", h.style.top = C.y + "px");
          };
          document.addEventListener("mousemove", b), document.addEventListener("mouseup", () => {
            h.style.cursor = "default", document.removeEventListener("mousemove", b);
          });
        };
        h.style.position = "absolute", h.addEventListener("mousedown", g);
      },
      // 取消挂载时注销事件
      unmounted(p) {
        if (!t.draggable)
          return;
        p.removeEventListener("mousedown", () => {
        });
      }
    };
    let c = null;
    const f = {
      mounted(p, h) {
        c = p;
        const g = h.value;
        g.enable && (p.style.opacity = "0", setTimeout(() => {
          p.style.transition = "opacity " + g.fadeTime + "ms ease", p.style.opacity = "1";
        }, 10));
      }
    };
    let u = null;
    const d = {
      mounted(p, h) {
        u = p;
        const g = h.value;
        if (!g.enable)
          return;
        if (p.style.scale = "0.2", !t.mousePosition) {
          p.style.transformOrigin = "center";
          return;
        }
        const x = p.getBoundingClientRect(), v = t.mousePosition.x - x.left, $ = t.mousePosition.y - x.top;
        p.style.transformOrigin = `${v}px ${$}px`, setTimeout(() => {
          p.style.transition = "scale " + g.fadeTime + "ms ease", p.style.scale = "1";
        }, 10);
      }
    };
    return Q(
      () => t.goClose.value,
      (p) => {
        p && (c && (c.style.opacity = "0"), u && (u.style.scale = "0.2"));
      }
    ), (p, h) => wt((fe(), Se("div", C2, [
      wt((fe(), Se("div", {
        class: "full-form",
        style: un({
          ...t.style
        })
      }, [
        w(Wn, {
          schema: o.value,
          modelValue: n.value,
          "onUpdate:modelValue": h[0] || (h[0] = (g) => n.value = g),
          "show-btns": t.showBtns,
          class: "form",
          "on-before-submit": a,
          "on-submit": t.onSubmit,
          "on-after-submit": l
        }, null, 8, ["schema", "modelValue", "show-btns", "on-submit"]),
        t.showCloseBtn ? (fe(), Se("div", x2, [
          w(pe(it), {
            shape: "circle",
            type: "primary",
            danger: "",
            onClick: i,
            disabled: r.value
          }, {
            default: ht(() => [
              w(pe(Jt))
            ]),
            _: 1
          }, 8, ["disabled"])
        ])) : ut("", !0),
        t.customBtns && t.customBtns.length > 0 ? (fe(), Se("div", {
          key: 1,
          class: "custombtns",
          style: un({
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
            gap: "20px",
            ...o.value.customBtnsStyle
          })
        }, [
          (fe(!0), Se(Te, null, li(t.customBtns, (g) => (fe(), Se("div", {
            key: g.text,
            style: un({
              display: "inline",
              justifyContent: "center",
              ...g.outterStyle
            })
          }, [
            w(pe(it), Fn({
              onClick: () => {
                var x;
                (x = g.onClick) == null || x.call(g, n.value, t.onCancel);
              },
              ref_for: !0
            }, g.props, {
              style: {
                ...g.style
              }
            }), {
              default: ht(() => [
                Nn(ai(g.text), 1)
              ]),
              _: 2
            }, 1040, ["onClick", "style"])
          ], 4))), 128))
        ], 4)) : ut("", !0)
      ], 4)), [
        [s],
        [d, {
          fadeTime: t.fadeTime || 150,
          enable: t.fadeInOut || !0
        }]
      ])
    ])), [
      [f, {
        fadeTime: t.fadeTime || 150,
        enable: t.fadeInOut || !0
      }]
    ]);
  }
});
let Ji = null;
const $2 = (e) => {
  Ji = {
    x: e.pageX,
    y: e.pageY
  }, setTimeout(() => Ji = null, 100);
};
typeof window < "u" && window.document && window.document.documentElement && document.documentElement.addEventListener("click", $2, !0);
function B2(e) {
  let t = X(!1);
  const n = () => {
    t.value = !0, setTimeout(() => {
      i.unmount(), document.body.removeChild(r);
    }, e.fadeTime || 300);
  }, r = document.createElement("div");
  document.body.appendChild(r);
  const o = {
    ...e.schema,
    items: e.schema.items.map((a) => {
      var l;
      return {
        ...a,
        value: ((l = e.defaultValues) == null ? void 0 : l[a.field]) || a.value
      };
    })
  }, i = lp(w2, {
    schema: o,
    showBtns: e.showBtns,
    init: e.init || {},
    onCancel: n,
    allowDirectClose: e.allowDirectClose || !1,
    onSubmit: async (a) => {
      var l;
      try {
        await ((l = e.submit) == null ? void 0 : l.call(e, a, n));
      } catch (s) {
        console.error(s);
      }
    },
    style: e.style || {},
    draggable: e.draggable || !1,
    title: e.title,
    fadeInOut: e.fadeInOut,
    fadeTime: e.fadeTime,
    mousePosition: Ji,
    goClose: t,
    customBtns: e.customBtns,
    showCloseBtn: e.showCloseBtn === void 0 ? !0 : e.showCloseBtn
  });
  i.mount(r);
}
Wn.install = function(e) {
  e.component(Wn.name || "", Wn);
};
const S2 = {
  name: "EasyTable"
};
function O2(e, t, n, r, o, i) {
  return fe(), Se("div");
}
const ri = /* @__PURE__ */ Kd(S2, [["render", O2]]);
ri.install = function(e) {
  e.component(ri.name || "", ri);
};
class Yd {
  /**
   *  构造函数
   * @param defaultConfig 默认请求配置
   */
  constructor(t) {
    /**
     * 默认请求配置
     */
    dr(this, "defaultConfig");
    /**
     * 请求拦截器
     */
    dr(this, "requestInterceptor", []);
    /**
     * 响应拦截器
     */
    dr(this, "responseInterceptor", []);
    this.defaultConfig = t;
  }
  /**
   *  创建一个请求工具
   * @param defaultConfig  默认请求配置
   * @returns  返回请求工具
   */
  static createService(t) {
    return new Yd(t);
  }
  async request(t) {
    var l;
    t = { ...this.defaultConfig, ...t };
    for (const s of this.requestInterceptor)
      t = await s(t);
    const n = (l = t.baseURL) != null && l.endsWith("/") ? t.baseURL : t.baseURL + "/";
    let r = n ? n + t.url : t.url, o = "";
    if (t.params) {
      const s = t.params;
      t.paramsSerializer ? o = t.paramsSerializer(s) : o = Object.keys(s).map((c) => `${c}=${s[c]}`).join("&"), r += "?" + o;
    }
    if (t.transformRequest) {
      const { data: s, headers: c } = t.transformRequest(
        t.data,
        t.headers
      );
      t.headers = c, t.data = s;
    }
    const i = new Request(r, {
      method: t.method,
      headers: t.headers,
      body: t.data,
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      redirect: "follow",
      referrerPolicy: "no-referrer-when-downgrade"
    }), a = await fetch(i);
    if (t.transformResponse)
      return t.transformResponse(a);
    switch (t.responseType) {
      case "json":
        return this.responseInterceptor.reduce(
          async (s, c) => c(await s),
          a.json()
        );
      case "text":
        return a.text();
      case "blob":
        return a.blob();
      case "arraybuffer":
        return a.arrayBuffer();
      case "stream":
        return a.body;
      case "document":
        return a.text();
      default:
        return a;
    }
  }
  addRequestInterceptor(t, n) {
    n ? this.requestInterceptor.splice(n, 0, t) : this.requestInterceptor.push(t);
  }
  addResponseInterceptor(t, n) {
    n ? this.responseInterceptor.splice(n, 0, t) : this.responseInterceptor.push(t);
  }
  get(t, n) {
    return this.request({
      ...n,
      url: t,
      method: "get"
    });
  }
  post(t, n, r) {
    return this.request({
      ...r,
      url: t,
      method: "post",
      data: n
    });
  }
  put(t, n, r) {
    return this.request({
      ...r,
      url: t,
      method: "put",
      data: n
    });
  }
  delete(t, n) {
    return this.request({
      ...n,
      url: t,
      method: "delete"
    });
  }
  patch(t, n, r) {
    return this.request({
      ...r,
      url: t,
      method: "patch",
      data: n
    });
  }
  head(t, n) {
    return this.request({
      ...n,
      url: t,
      method: "head"
    });
  }
  options(t, n) {
    return this.request({
      ...n,
      url: t,
      method: "options"
    });
  }
  connect(t, n) {
    return this.request({
      ...n,
      url: t,
      method: "connect"
    });
  }
  trace(t, n) {
    return this.request({
      ...n,
      url: t,
      method: "trace"
    });
  }
  req(t) {
    return this.request(t);
  }
}
export {
  Yy as $,
  ma as A,
  By as B,
  fn as C,
  te as D,
  Eu as E,
  Ff as F,
  Wt as G,
  Hu as H,
  $e as I,
  Qp as J,
  W as K,
  St as L,
  lr as M,
  ar as N,
  Kf as O,
  H as P,
  Ve as Q,
  Wr as R,
  Bo as S,
  Qw as T,
  se as U,
  Pt as V,
  i$ as W,
  Jt as X,
  Et as Y,
  Gr as Z,
  m as _,
  cl as a,
  Pi as a$,
  So as a0,
  P$ as a1,
  Ea as a2,
  Xt as a3,
  it as a4,
  I2 as a5,
  jg as a6,
  fw as a7,
  co as a8,
  $t as a9,
  Xr as aA,
  D2 as aB,
  tr as aC,
  Rw as aD,
  dt as aE,
  Po as aF,
  cr as aG,
  vf as aH,
  Bf as aI,
  Da as aJ,
  mx as aK,
  D1 as aL,
  qp as aM,
  _2 as aN,
  L$ as aO,
  Fe as aP,
  R2 as aQ,
  N2 as aR,
  W1 as aS,
  Rg as aT,
  ju as aU,
  Qe as aV,
  Qf as aW,
  Ii as aX,
  p0 as aY,
  Jn as aZ,
  g1 as a_,
  xn as aa,
  Kd as ab,
  Lc as ac,
  hm as ad,
  Lg as ae,
  Ux as af,
  F2 as ag,
  A2 as ah,
  sf as ai,
  Qr as aj,
  qy as ak,
  ca as al,
  Mt as am,
  mw as an,
  Fg as ao,
  ul as ap,
  E2 as aq,
  Ng as ar,
  Vw as as,
  j2 as at,
  sl as au,
  Up as av,
  Aw as aw,
  Or as ax,
  Zf as ay,
  qw as az,
  Ge as b,
  zp as b0,
  Hp as b1,
  Wn as b2,
  ri as b3,
  B2 as b4,
  Yd as b5,
  Pe as c,
  la as d,
  Ue as e,
  tn as f,
  Y as g,
  j as h,
  Ze as i,
  lo as j,
  Ut as k,
  bt as l,
  ke as m,
  Gc as n,
  Rt as o,
  sn as p,
  Gp as q,
  On as r,
  kr as s,
  kp as t,
  Lb as u,
  M2 as v,
  Xe as w,
  Kw as x,
  Me as y,
  be as z
};
