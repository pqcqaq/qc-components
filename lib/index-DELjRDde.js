var yd = Object.defineProperty;
var bd = (e, t, n) => t in e ? yd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Jn = (e, t, n) => (bd(e, typeof t != "symbol" ? t + "" : t, n), n);
import { Fragment as Ae, isVNode as Wn, Comment as xd, Text as mc, computed as O, inject as pe, provide as ce, ref as Z, defineComponent as V, unref as xe, shallowRef as H, getCurrentInstance as un, watch as K, watchEffect as Ve, onBeforeUnmount as ct, triggerRef as wd, createVNode as $, h as Uo, Transition as fn, withDirectives as Kr, resolveDirective as Cd, onMounted as $e, cloneVNode as Hi, render as In, nextTick as ke, onUpdated as Zr, onUnmounted as zi, toRef as $d, withModifiers as Va, vShow as Vi, onBeforeMount as gc, Teleport as hc, reactive as We, TransitionGroup as ki, toRaw as Yo, markRaw as ae, defineAsyncComponent as oe, openBlock as Ce, createElementBlock as ot, createElementVNode as Sd, toDisplayString as ka, mergeProps as er, toHandlers as Wa, withCtx as Wt, renderList as qa, createBlock as hn, resolveDynamicComponent as Od, normalizeStyle as wo, createCommentVNode as vt, createTextVNode as tr, createApp as Pd } from "vue";
function Mn(e) {
  "@babel/helpers - typeof";
  return Mn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Mn(e);
}
function Td(e, t) {
  if (Mn(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Mn(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function _d(e) {
  var t = Td(e, "string");
  return Mn(t) == "symbol" ? t : t + "";
}
function Ed(e, t, n) {
  return t = _d(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Ga(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function L(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ga(Object(n), !0).forEach(function(r) {
      Ed(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ga(Object(n)).forEach(function(r) {
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
const Ad = (e) => typeof e == "function", Id = Array.isArray, Md = (e) => typeof e == "string", Fd = (e) => e !== null && typeof e == "object", jd = /^on[^a-z]/, Rd = (e) => jd.test(e), Wi = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Nd = /-(\w)/g, vc = Wi((e) => e.replace(Nd, (t, n) => n ? n.toUpperCase() : "")), Dd = /\B([A-Z])/g, Ld = Wi((e) => e.replace(Dd, "-$1").toLowerCase()), x2 = Wi((e) => e.charAt(0).toUpperCase() + e.slice(1)), Bd = Object.prototype.hasOwnProperty, Xa = (e, t) => Bd.call(e, t);
function Hd(e, t, n, r) {
  const o = e[n];
  if (o != null) {
    const i = Xa(o, "default");
    if (i && r === void 0) {
      const a = o.default;
      r = o.type !== Function && Ad(a) ? a() : a;
    }
    o.type === Boolean && (!Xa(t, n) && !i ? r = !1 : r === "" && (r = !0));
  }
  return r;
}
function w2(e) {
  return typeof e == "number" ? `${e}px` : e;
}
function Yt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
  return typeof e == "function" ? e(t) : e ?? n;
}
function zd(e) {
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
function U() {
  const e = [];
  for (let t = 0; t < arguments.length; t++) {
    const n = t < 0 || arguments.length <= t ? void 0 : arguments[t];
    if (n) {
      if (Md(n))
        e.push(n);
      else if (Id(n))
        for (let r = 0; r < n.length; r++) {
          const o = U(n[r]);
          o && e.push(o);
        }
      else if (Fd(n))
        for (const r in n)
          n[r] && e.push(r);
    }
  }
  return e.join(" ");
}
var yc = function() {
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
}(), Ko = typeof window < "u" && typeof document < "u" && window.document === document, Ir = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), Vd = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Ir) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), kd = 2;
function Wd(e, t) {
  var n = !1, r = !1, o = 0;
  function i() {
    n && (n = !1, e()), r && l();
  }
  function a() {
    Vd(i);
  }
  function l() {
    var s = Date.now();
    if (n) {
      if (s - o < kd)
        return;
      r = !0;
    } else
      n = !0, r = !1, setTimeout(a, t);
    o = s;
  }
  return l;
}
var qd = 20, Gd = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], Xd = typeof MutationObserver < "u", Ud = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = Wd(this.refresh.bind(this), qd);
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
      !Ko || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Xd ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !Ko || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var n = t.propertyName, r = n === void 0 ? "" : n, o = Gd.some(function(i) {
        return !!~r.indexOf(i);
      });
      o && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), bc = function(e, t) {
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
}, tn = function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || Ir;
}, xc = Qr(0, 0, 0, 0);
function Mr(e) {
  return parseFloat(e) || 0;
}
function Ua(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  return t.reduce(function(r, o) {
    var i = e["border-" + o + "-width"];
    return r + Mr(i);
  }, 0);
}
function Yd(e) {
  for (var t = ["top", "right", "bottom", "left"], n = {}, r = 0, o = t; r < o.length; r++) {
    var i = o[r], a = e["padding-" + i];
    n[i] = Mr(a);
  }
  return n;
}
function Kd(e) {
  var t = e.getBBox();
  return Qr(0, 0, t.width, t.height);
}
function Zd(e) {
  var t = e.clientWidth, n = e.clientHeight;
  if (!t && !n)
    return xc;
  var r = tn(e).getComputedStyle(e), o = Yd(r), i = o.left + o.right, a = o.top + o.bottom, l = Mr(r.width), s = Mr(r.height);
  if (r.boxSizing === "border-box" && (Math.round(l + i) !== t && (l -= Ua(r, "left", "right") + i), Math.round(s + a) !== n && (s -= Ua(r, "top", "bottom") + a)), !Jd(e)) {
    var c = Math.round(l + i) - t, u = Math.round(s + a) - n;
    Math.abs(c) !== 1 && (l -= c), Math.abs(u) !== 1 && (s -= u);
  }
  return Qr(o.left, o.top, l, s);
}
var Qd = /* @__PURE__ */ function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof tn(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof tn(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function Jd(e) {
  return e === tn(e).document.documentElement;
}
function ep(e) {
  return Ko ? Qd(e) ? Kd(e) : Zd(e) : xc;
}
function tp(e) {
  var t = e.x, n = e.y, r = e.width, o = e.height, i = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, a = Object.create(i.prototype);
  return bc(a, {
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
function Qr(e, t, n, r) {
  return { x: e, y: t, width: n, height: r };
}
var np = (
  /** @class */
  function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Qr(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = ep(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  }()
), rp = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t, n) {
      var r = tp(n);
      bc(this, { target: t, contentRect: r });
    }
    return e;
  }()
), op = (
  /** @class */
  function() {
    function e(t, n, r) {
      if (this.activeObservations_ = [], this.observations_ = new yc(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = n, this.callbackCtx_ = r;
    }
    return e.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof tn(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) || (n.set(t, new np(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof tn(t).Element))
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
          return new rp(r.target, r.broadcastRect());
        });
        this.callback_.call(t, n, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), wc = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new yc(), Cc = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var n = Ud.getInstance(), r = new op(t, n, this);
      wc.set(this, r);
    }
    return e;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  Cc.prototype[e] = function() {
    var t;
    return (t = wc.get(this))[e].apply(t, arguments);
  };
});
var ip = function() {
  return typeof Ir.ResizeObserver < "u" ? Ir.ResizeObserver : Cc;
}();
const ap = (e) => e != null && e !== "", qi = (e, t) => {
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
}, lp = (e) => {
  const t = Object.keys(e), n = {}, r = {}, o = {};
  for (let i = 0, a = t.length; i < a; i++) {
    const l = t[i];
    Rd(l) ? (n[l[2].toLowerCase() + l.slice(3)] = e[l], r[l] = e[l]) : o[l] = e[l];
  }
  return {
    onEvents: r,
    events: n,
    extraAttrs: o
  };
}, sp = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  const n = {}, r = /;(?![^(]*\))/g, o = /:(.+)/;
  return typeof e == "object" ? e : (e.split(r).forEach(function(i) {
    if (i) {
      const a = i.split(o);
      if (a.length > 1) {
        const l = t ? vc(a[0].trim()) : a[0].trim();
        n[l] = a[1].trim();
      }
    }
  }), n);
}, cp = (e, t) => e[t] !== void 0, up = Symbol("skipFlatten"), He = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  const n = Array.isArray(e) ? e : [e], r = [];
  return n.forEach((o) => {
    Array.isArray(o) ? r.push(...He(o, t)) : o && o.type === Ae ? o.key === up ? r.push(o) : r.push(...He(o.children, t)) : o && Wn(o) ? t && !$c(o) ? r.push(o) : t || r.push(o) : ap(o) && r.push(o);
  }), r;
}, fp = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "default", n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (Wn(e))
    return e.type === Ae ? t === "default" ? He(e.children) : [] : e.children && e.children[t] ? He(e.children[t](n)) : [];
  {
    const r = e.$slots[t] && e.$slots[t](n);
    return He(r);
  }
}, St = (e) => {
  var t;
  let n = ((t = e == null ? void 0 : e.vnode) === null || t === void 0 ? void 0 : t.el) || e && (e.$el || e);
  for (; n && !n.tagName; )
    n = n.nextSibling;
  return n;
}, dp = (e) => {
  const t = {};
  if (e.$ && e.$.vnode) {
    const n = e.$.vnode.props || {};
    Object.keys(e.$props).forEach((r) => {
      const o = e.$props[r], i = Ld(r);
      (o !== void 0 || i in n) && (t[r] = o);
    });
  } else if (Wn(e) && typeof e.type == "object") {
    const n = e.props || {}, r = {};
    Object.keys(n).forEach((i) => {
      r[vc(i)] = n[i];
    });
    const o = e.type.props || {};
    Object.keys(o).forEach((i) => {
      const a = Hd(o, r, i, r[i]);
      (a !== void 0 || i in r) && (t[i] = a);
    });
  }
  return t;
}, pp = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "default", n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, o;
  if (e.$) {
    const i = e[t];
    if (i !== void 0)
      return typeof i == "function" && r ? i(n) : i;
    o = e.$slots[t], o = r && o ? o(n) : o;
  } else if (Wn(e)) {
    const i = e.props && e.props[t];
    if (i !== void 0 && e.props !== null)
      return typeof i == "function" && r ? i(n) : i;
    e.type === Ae ? o = e.children : e.children && e.children[t] && (o = e.children[t], o = r && o ? o(n) : o);
  }
  return Array.isArray(o) && (o = He(o), o = o.length === 1 ? o[0] : o, o = o.length === 0 ? void 0 : o), o;
};
function Ya() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, n = {};
  return e.$ ? n = m(m({}, n), e.$attrs) : n = m(m({}, n), e.props), lp(n)[t ? "onEvents" : "events"];
}
function mp(e, t) {
  let r = ((Wn(e) ? e.props : e.$attrs) || {}).style || {};
  return typeof r == "string" && (r = sp(r, t)), r;
}
function gp(e) {
  return e.length === 1 && e[0].type === Ae;
}
function $c(e) {
  return e && (e.type === xd || e.type === Ae && e.children.length === 0 || e.type === mc && e.children.trim() === "");
}
function Nt() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  const t = [];
  return e.forEach((n) => {
    Array.isArray(n) ? t.push(...n) : (n == null ? void 0 : n.type) === Ae ? t.push(...Nt(n.children)) : t.push(n);
  }), t.filter((n) => !$c(n));
}
function Sc(e) {
  return Array.isArray(e) && e.length === 1 && (e = e[0]), e && e.__v_isVNode && typeof e.type != "symbol";
}
function hp(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "default";
  var r, o;
  return (r = t[n]) !== null && r !== void 0 ? r : (o = e[n]) === null || o === void 0 ? void 0 : o.call(e);
}
let Oc = (e) => setTimeout(e, 16), Pc = (e) => clearTimeout(e);
typeof window < "u" && "requestAnimationFrame" in window && (Oc = (e) => window.requestAnimationFrame(e), Pc = (e) => window.cancelAnimationFrame(e));
let Ka = 0;
const Gi = /* @__PURE__ */ new Map();
function Tc(e) {
  Gi.delete(e);
}
function Ee(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  Ka += 1;
  const n = Ka;
  function r(o) {
    if (o === 0)
      Tc(n), e();
    else {
      const i = Oc(() => {
        r(o - 1);
      });
      Gi.set(n, i);
    }
  }
  return r(t), n;
}
Ee.cancel = (e) => {
  const t = Gi.get(e);
  return Tc(t), Pc(t);
};
const It = function() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return t;
}, Jr = (e) => {
  const t = e;
  return t.install = function(n) {
    n.component(t.displayName || t.name, e);
  }, e;
};
function Za() {
  return {
    type: [Function, Array]
  };
}
function ie(e) {
  return {
    type: Object,
    default: e
  };
}
function Be(e) {
  return {
    type: Boolean,
    default: e
  };
}
function qt(e) {
  return {
    type: Function,
    default: e
  };
}
function Fr(e, t) {
  const n = {
    validator: () => !0,
    default: e
  };
  return n;
}
function Qa(e) {
  return {
    type: Array,
    default: e
  };
}
function jr(e) {
  return {
    type: String,
    default: e
  };
}
function Zt(e, t) {
  return e ? {
    type: e,
    default: t
  } : Fr(t);
}
let Ot = !1;
try {
  const e = Object.defineProperty({}, "passive", {
    get() {
      Ot = !0;
    }
  });
  window.addEventListener("testPassive", null, e), window.removeEventListener("testPassive", null, e);
} catch {
}
function wn(e, t, n, r) {
  if (e && e.addEventListener) {
    let o = r;
    o === void 0 && Ot && (t === "touchstart" || t === "touchmove" || t === "wheel") && (o = {
      passive: !1
    }), e.addEventListener(t, n, o);
  }
  return {
    remove: () => {
      e && e.removeEventListener && e.removeEventListener(t, n);
    }
  };
}
const Xi = "anticon", _c = Symbol("GlobalFormContextKey"), vp = (e) => {
  ce(_c, e);
}, yp = () => pe(_c, {
  validateMessages: O(() => {
  })
}), bp = () => ({
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
  csp: ie(),
  input: ie(),
  autoInsertSpaceInButton: {
    type: Boolean,
    default: void 0
  },
  locale: ie(),
  pageHeader: ie(),
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
  space: ie(),
  virtual: {
    type: Boolean,
    default: void 0
  },
  dropdownMatchSelectWidth: {
    type: [Number, Boolean],
    default: !0
  },
  form: ie(),
  pagination: ie(),
  theme: ie(),
  select: ie(),
  wave: ie()
}), Ui = Symbol("configProvider"), Ec = {
  getPrefixCls: (e, t) => t || (e ? `ant-${e}` : "ant"),
  iconPrefixCls: O(() => Xi),
  getPopupContainer: O(() => () => document.body),
  direction: O(() => "ltr")
}, Yi = () => pe(Ui, Ec), xp = (e) => ce(Ui, e), Ac = Symbol("DisabledContextKey"), Ki = () => pe(Ac, Z(void 0)), Ic = (e) => {
  const t = Ki();
  return ce(Ac, O(() => {
    var n;
    return (n = e.value) !== null && n !== void 0 ? n : t.value;
  })), e;
}, wp = {
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
}, Cp = {
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
}, Mc = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
}, Ja = {
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
  }, Cp),
  timePickerLocale: m({}, Mc)
}, Oe = "${label} is not a valid ${type}", Mt = {
  locale: "en",
  Pagination: wp,
  DatePicker: Ja,
  TimePicker: Mc,
  Calendar: Ja,
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
        string: Oe,
        method: Oe,
        array: Oe,
        object: Oe,
        number: Oe,
        date: Oe,
        boolean: Oe,
        integer: Oe,
        float: Oe,
        regexp: Oe,
        email: Oe,
        url: Oe,
        hex: Oe
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
}, Fc = V({
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
    const r = pe("localeData", {}), o = O(() => {
      const {
        componentName: a = "global",
        defaultLocale: l
      } = e, s = l || Mt[a || "global"], {
        antLocale: c
      } = r, u = a && c ? c[a] : {};
      return m(m({}, typeof s == "function" ? s() : s), u || {});
    }), i = O(() => {
      const {
        antLocale: a
      } = r, l = a && a.locale;
      return a && a.exist && !l ? Mt.locale : l;
    });
    return () => {
      const a = e.children || n.default, {
        antLocale: l
      } = r;
      return a == null ? void 0 : a(o.value, i.value, l);
    };
  }
});
function $p(e, t, n) {
  const r = pe("localeData", {});
  return [O(() => {
    const {
      antLocale: i
    } = r, a = xe(t) || Mt[e || "global"], l = e && i ? i[e] : {};
    return m(m(m({}, typeof a == "function" ? a() : a), l || {}), xe(n) || {});
  })];
}
function Zi(e) {
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
const el = "%";
class Sp {
  constructor(t) {
    this.cache = /* @__PURE__ */ new Map(), this.instanceId = t;
  }
  get(t) {
    return this.cache.get(Array.isArray(t) ? t.join(el) : t) || null;
  }
  update(t, n) {
    const r = Array.isArray(t) ? t.join(el) : t, o = this.cache.get(r), i = n(o);
    i === null ? this.cache.delete(r) : this.cache.set(r, i);
  }
}
const jc = "data-token-hash", _t = "data-css-hash", Op = "data-cache-path", Kt = "__cssinjs_instance__";
function Fn() {
  const e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    const t = document.body.querySelectorAll(`style[${_t}]`) || [], {
      firstChild: n
    } = document.head;
    Array.from(t).forEach((o) => {
      o[Kt] = o[Kt] || e, o[Kt] === e && document.head.insertBefore(o, n);
    });
    const r = {};
    Array.from(document.querySelectorAll(`style[${_t}]`)).forEach((o) => {
      var i;
      const a = o.getAttribute(_t);
      r[a] ? o[Kt] === e && ((i = o.parentNode) === null || i === void 0 || i.removeChild(o)) : r[a] = !0;
    });
  }
  return new Sp(e);
}
const Rc = Symbol("StyleContextKey"), Pp = () => {
  var e, t, n;
  const r = un();
  let o;
  if (r && r.appContext) {
    const i = (n = (t = (e = r.appContext) === null || e === void 0 ? void 0 : e.config) === null || t === void 0 ? void 0 : t.globalProperties) === null || n === void 0 ? void 0 : n.__ANTDV_CSSINJS_CACHE__;
    i ? o = i : (o = Fn(), r.appContext.config.globalProperties && (r.appContext.config.globalProperties.__ANTDV_CSSINJS_CACHE__ = o));
  } else
    o = Fn();
  return o;
}, Nc = {
  cache: Fn(),
  defaultCache: !0,
  hashPriority: "low"
}, eo = () => {
  const e = Pp();
  return pe(Rc, H(m(m({}, Nc), {
    cache: e
  })));
}, Tp = (e) => {
  const t = eo(), n = H(m(m({}, Nc), {
    cache: Fn()
  }));
  return K([() => xe(e), t], () => {
    const r = m({}, t.value), o = xe(e);
    Object.keys(o).forEach((a) => {
      const l = o[a];
      o[a] !== void 0 && (r[a] = l);
    });
    const {
      cache: i
    } = o;
    r.cache = r.cache || Fn(), r.defaultCache = !i && t.value.defaultCache, n.value = r;
  }, {
    immediate: !0
  }), ce(Rc, n), n;
}, _p = () => ({
  autoClear: Be(),
  /** @private Test only. Not work in production. */
  mock: jr(),
  /**
   * Only set when you need ssr to extract style on you own.
   * If not provided, it will auto create <style /> on the end of Provider in server side.
   */
  cache: ie(),
  /** Tell children that this context is default generated context */
  defaultCache: Be(),
  /** Use `:where` selector to reduce hashId css selector priority */
  hashPriority: jr(),
  /** Tell cssinjs where to inject style in */
  container: Zt(),
  /** Component wil render inline  `<style />` for fallback in SSR. Not recommend. */
  ssrInline: Be(),
  /** Transform css before inject in document. Please note that `transformers` do not support dynamic update */
  transformers: Qa(),
  /**
   * Linters to lint css before inject in document.
   * Styles will be linted after transforming.
   * Please note that `linters` do not support dynamic update.
   */
  linters: Qa()
});
Jr(V({
  name: "AStyleProvider",
  inheritAttrs: !1,
  props: _p(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return Tp(e), () => {
      var r;
      return (r = n.default) === null || r === void 0 ? void 0 : r.call(n);
    };
  }
}));
function Ep() {
  return !1;
}
let Zo = !1;
function Ap() {
  return Zo;
}
const Ip = process.env.NODE_ENV === "production" ? Ep : Ap;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  const e = window;
  if (typeof e.webpackHotUpdate == "function") {
    const t = e.webpackHotUpdate;
    e.webpackHotUpdate = function() {
      return Zo = !0, setTimeout(() => {
        Zo = !1;
      }, 0), t(...arguments);
    };
  }
}
function Dc(e, t, n, r) {
  const o = eo(), i = H(""), a = H();
  Ve(() => {
    i.value = [e, ...t.value].join("%");
  });
  const l = Ip(), s = (c) => {
    o.value.cache.update(c, (u) => {
      const [f = 0, d] = u || [];
      return f - 1 === 0 ? (r == null || r(d, !1), null) : [f - 1, d];
    });
  };
  return K(i, (c, u) => {
    u && s(u), o.value.cache.update(c, (f) => {
      const [d = 0, p] = f || [];
      let h = p;
      process.env.NODE_ENV !== "production" && p && l && (r == null || r(h, l), h = null);
      const g = h || n();
      return [d + 1, g];
    }), a.value = o.value.cache.get(i.value)[1];
  }, {
    immediate: !0
  }), ct(() => {
    s(i.value);
  }), a;
}
function qe() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function wt(e, t) {
  return e && e.contains ? e.contains(t) : !1;
}
const tl = "data-vc-order", Mp = "vc-util-key", Qo = /* @__PURE__ */ new Map();
function Lc() {
  let {
    mark: e
  } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return e ? e.startsWith("data-") ? e : `data-${e}` : Mp;
}
function to(e) {
  return e.attachTo ? e.attachTo : document.querySelector("head") || document.body;
}
function Fp(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function Bc(e) {
  return Array.from((Qo.get(e) || e).children).filter((t) => t.tagName === "STYLE");
}
function Hc(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!qe())
    return null;
  const {
    csp: n,
    prepend: r
  } = t, o = document.createElement("style");
  o.setAttribute(tl, Fp(r)), n != null && n.nonce && (o.nonce = n == null ? void 0 : n.nonce), o.innerHTML = e;
  const i = to(t), {
    firstChild: a
  } = i;
  if (r) {
    if (r === "queue") {
      const l = Bc(i).filter((s) => ["prepend", "prependQueue"].includes(s.getAttribute(tl)));
      if (l.length)
        return i.insertBefore(o, l[l.length - 1].nextSibling), o;
    }
    i.insertBefore(o, a);
  } else
    i.appendChild(o);
  return o;
}
function zc(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const n = to(t);
  return Bc(n).find((r) => r.getAttribute(Lc(t)) === e);
}
function Rr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const n = zc(e, t);
  n && to(t).removeChild(n);
}
function jp(e, t) {
  const n = Qo.get(e);
  if (!n || !wt(document, n)) {
    const r = Hc("", t), {
      parentNode: o
    } = r;
    Qo.set(e, o), e.removeChild(r);
  }
}
function jn(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var r, o, i;
  const a = to(n);
  jp(a, n);
  const l = zc(t, n);
  if (l)
    return !((r = n.csp) === null || r === void 0) && r.nonce && l.nonce !== ((o = n.csp) === null || o === void 0 ? void 0 : o.nonce) && (l.nonce = (i = n.csp) === null || i === void 0 ? void 0 : i.nonce), l.innerHTML !== e && (l.innerHTML = e), l;
  const s = Hc(e, n);
  return s.setAttribute(Lc(n), t), s;
}
function Rp(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
class nn {
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
      if (this.size() + 1 > nn.MAX_CACHE_SIZE + nn.MAX_CACHE_OFFSET) {
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
      return this.keys = this.keys.filter((n) => !Rp(n, t)), this.deleteByPath(this.cache, t);
  }
}
nn.MAX_CACHE_SIZE = 20;
nn.MAX_CACHE_OFFSET = 5;
let Jo = {};
function Nr(e, t) {
  process.env.NODE_ENV !== "production" && !e && console !== void 0 && console.error(`Warning: ${t}`);
}
function Np(e, t) {
  process.env.NODE_ENV !== "production" && !e && console !== void 0 && console.warn(`Note: ${t}`);
}
function Dp() {
  Jo = {};
}
function Vc(e, t, n) {
  !t && !Jo[n] && (e(!1, n), Jo[n] = !0);
}
function Qi(e, t) {
  Vc(Nr, e, t);
}
function C2(e, t) {
  Vc(Np, e, t);
}
function Lp() {
}
let at = Lp;
process.env.NODE_ENV !== "production" && (at = (e, t, n) => {
  Qi(e, `[ant-design-vue: ${t}] ${n}`), process.env.NODE_ENV === "test" && Dp();
});
let nl = 0;
class kc {
  constructor(t) {
    this.derivatives = Array.isArray(t) ? t : [t], this.id = nl, t.length === 0 && at(t.length > 0, "[Ant Design Vue CSS-in-JS] Theme should have at least one derivative function."), nl += 1;
  }
  getDerivativeToken(t) {
    return this.derivatives.reduce((n, r) => r(t, n), void 0);
  }
}
const Co = new nn();
function Wc(e) {
  const t = Array.isArray(e) ? e : [e];
  return Co.has(t) || Co.set(t, new kc(t)), Co.get(t);
}
const rl = /* @__PURE__ */ new WeakMap();
function Dr(e) {
  let t = rl.get(e) || "";
  return t || (Object.keys(e).forEach((n) => {
    const r = e[n];
    t += n, r instanceof kc ? t += r.id : r && typeof r == "object" ? t += Dr(r) : t += r;
  }), rl.set(e, t)), t;
}
function Bp(e, t) {
  return Zi(`${t}_${Dr(e)}`);
}
const On = `random-${Date.now()}-${Math.random()}`.replace(/\./g, ""), qc = "_bAmBoO_";
function Hp(e, t, n) {
  var r, o;
  if (qe()) {
    jn(e, On);
    const i = document.createElement("div");
    i.style.position = "fixed", i.style.left = "0", i.style.top = "0", t == null || t(i), document.body.appendChild(i), process.env.NODE_ENV !== "production" && (i.innerHTML = "Test", i.style.zIndex = "9999999");
    const a = n ? n(i) : (r = getComputedStyle(i).content) === null || r === void 0 ? void 0 : r.includes(qc);
    return (o = i.parentNode) === null || o === void 0 || o.removeChild(i), Rr(On), a;
  }
  return !1;
}
let $o;
function zp() {
  return $o === void 0 && ($o = Hp(`@layer ${On} { .${On} { content: "${qc}"!important; } }`, (e) => {
    e.className = On;
  })), $o;
}
const ol = {}, Vp = process.env.NODE_ENV === "production", kp = process.env.NODE_ENV === "prerender", Wp = !Vp && !kp ? "css-dev-only-do-not-override" : "css", Ct = /* @__PURE__ */ new Map();
function qp(e) {
  Ct.set(e, (Ct.get(e) || 0) + 1);
}
function Gp(e, t) {
  typeof document < "u" && document.querySelectorAll(`style[${jc}="${e}"]`).forEach((r) => {
    var o;
    r[Kt] === t && ((o = r.parentNode) === null || o === void 0 || o.removeChild(r));
  });
}
const Xp = 0;
function Up(e, t) {
  Ct.set(e, (Ct.get(e) || 0) - 1);
  const n = Array.from(Ct.keys()), r = n.filter((o) => (Ct.get(o) || 0) <= 0);
  n.length - r.length > Xp && r.forEach((o) => {
    Gp(o, t), Ct.delete(o);
  });
}
const Yp = (e, t, n, r) => {
  const o = n.getDerivativeToken(e);
  let i = m(m({}, o), t);
  return r && (i = r(i)), i;
};
function Kp(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Z({});
  const r = eo(), o = O(() => m({}, ...t.value)), i = O(() => Dr(o.value)), a = O(() => Dr(n.value.override || ol));
  return Dc("token", O(() => [n.value.salt || "", e.value.id, i.value, a.value]), () => {
    const {
      salt: s = "",
      override: c = ol,
      formatToken: u,
      getComputedToken: f
    } = n.value, d = f ? f(o.value, c, e.value) : Yp(o.value, c, e.value, u), p = Bp(d, s);
    d._tokenKey = p, qp(p);
    const h = `${Wp}-${Zi(p)}`;
    return d._hashId = h, [d, h];
  }, (s) => {
    var c;
    Up(s[0]._tokenKey, (c = r.value) === null || c === void 0 ? void 0 : c.cache.instanceId);
  });
}
var Zp = {
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
}, Gc = "comm", Xc = "rule", Uc = "decl", Qp = "@import", Jp = "@keyframes", em = "@layer", Yc = Math.abs, Ji = String.fromCharCode;
function Kc(e) {
  return e.trim();
}
function br(e, t, n) {
  return e.replace(t, n);
}
function tm(e, t, n) {
  return e.indexOf(t, n);
}
function Rn(e, t) {
  return e.charCodeAt(t) | 0;
}
function Nn(e, t, n) {
  return e.slice(t, n);
}
function it(e) {
  return e.length;
}
function nm(e) {
  return e.length;
}
function nr(e, t) {
  return t.push(e), e;
}
var no = 1, rn = 1, Zc = 0, Re = 0, le = 0, dn = "";
function ea(e, t, n, r, o, i, a, l) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: no, column: rn, length: a, return: "", siblings: l };
}
function rm() {
  return le;
}
function om() {
  return le = Re > 0 ? Rn(dn, --Re) : 0, rn--, le === 10 && (rn = 1, no--), le;
}
function ze() {
  return le = Re < Zc ? Rn(dn, Re++) : 0, rn++, le === 10 && (rn = 1, no++), le;
}
function Et() {
  return Rn(dn, Re);
}
function xr() {
  return Re;
}
function ro(e, t) {
  return Nn(dn, e, t);
}
function ei(e) {
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
function im(e) {
  return no = rn = 1, Zc = it(dn = e), Re = 0, [];
}
function am(e) {
  return dn = "", e;
}
function So(e) {
  return Kc(ro(Re - 1, ti(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function lm(e) {
  for (; (le = Et()) && le < 33; )
    ze();
  return ei(e) > 2 || ei(le) > 3 ? "" : " ";
}
function sm(e, t) {
  for (; --t && ze() && !(le < 48 || le > 102 || le > 57 && le < 65 || le > 70 && le < 97); )
    ;
  return ro(e, xr() + (t < 6 && Et() == 32 && ze() == 32));
}
function ti(e) {
  for (; ze(); )
    switch (le) {
      case e:
        return Re;
      case 34:
      case 39:
        e !== 34 && e !== 39 && ti(le);
        break;
      case 40:
        e === 41 && ti(e);
        break;
      case 92:
        ze();
        break;
    }
  return Re;
}
function cm(e, t) {
  for (; ze() && e + le !== 57; )
    if (e + le === 84 && Et() === 47)
      break;
  return "/*" + ro(t, Re - 1) + "*" + Ji(e === 47 ? e : ze());
}
function um(e) {
  for (; !ei(Et()); )
    ze();
  return ro(e, Re);
}
function fm(e) {
  return am(wr("", null, null, null, [""], e = im(e), 0, [0], e));
}
function wr(e, t, n, r, o, i, a, l, s) {
  for (var c = 0, u = 0, f = a, d = 0, p = 0, h = 0, g = 1, w = 1, y = 1, C = 0, v = "", b = o, S = i, P = r, x = v; w; )
    switch (h = C, C = ze()) {
      case 40:
        if (h != 108 && Rn(x, f - 1) == 58) {
          tm(x += br(So(C), "&", "&\f"), "&\f", Yc(c ? l[c - 1] : 0)) != -1 && (y = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        x += So(C);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        x += lm(h);
        break;
      case 92:
        x += sm(xr() - 1, 7);
        continue;
      case 47:
        switch (Et()) {
          case 42:
          case 47:
            nr(dm(cm(ze(), xr()), t, n, s), s);
            break;
          default:
            x += "/";
        }
        break;
      case 123 * g:
        l[c++] = it(x) * y;
      case 125 * g:
      case 59:
      case 0:
        switch (C) {
          case 0:
          case 125:
            w = 0;
          case 59 + u:
            y == -1 && (x = br(x, /\f/g, "")), p > 0 && it(x) - f && nr(p > 32 ? al(x + ";", r, n, f - 1, s) : al(br(x, " ", "") + ";", r, n, f - 2, s), s);
            break;
          case 59:
            x += ";";
          default:
            if (nr(P = il(x, t, n, c, u, o, l, v, b = [], S = [], f, i), i), C === 123)
              if (u === 0)
                wr(x, t, P, P, b, i, f, l, S);
              else
                switch (d === 99 && Rn(x, 3) === 110 ? 100 : d) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    wr(e, P, P, r && nr(il(e, P, P, 0, 0, o, l, v, o, b = [], f, S), S), o, S, f, l, r ? b : S);
                    break;
                  default:
                    wr(x, P, P, P, [""], S, 0, l, S);
                }
        }
        c = u = p = 0, g = y = 1, v = x = "", f = a;
        break;
      case 58:
        f = 1 + it(x), p = h;
      default:
        if (g < 1) {
          if (C == 123)
            --g;
          else if (C == 125 && g++ == 0 && om() == 125)
            continue;
        }
        switch (x += Ji(C), C * g) {
          case 38:
            y = u > 0 ? 1 : (x += "\f", -1);
            break;
          case 44:
            l[c++] = (it(x) - 1) * y, y = 1;
            break;
          case 64:
            Et() === 45 && (x += So(ze())), d = Et(), u = f = it(v = x += um(xr())), C++;
            break;
          case 45:
            h === 45 && it(x) == 2 && (g = 0);
        }
    }
  return i;
}
function il(e, t, n, r, o, i, a, l, s, c, u, f) {
  for (var d = o - 1, p = o === 0 ? i : [""], h = nm(p), g = 0, w = 0, y = 0; g < r; ++g)
    for (var C = 0, v = Nn(e, d + 1, d = Yc(w = a[g])), b = e; C < h; ++C)
      (b = Kc(w > 0 ? p[C] + " " + v : br(v, /&\f/g, p[C]))) && (s[y++] = b);
  return ea(e, t, n, o === 0 ? Xc : l, s, c, u, f);
}
function dm(e, t, n, r) {
  return ea(e, t, n, Gc, Ji(rm()), Nn(e, 2, -2), 0, r);
}
function al(e, t, n, r, o) {
  return ea(e, t, n, Uc, Nn(e, 0, r), Nn(e, r + 1, -1), r, o);
}
function ni(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function pm(e, t, n, r) {
  switch (e.type) {
    case em:
      if (e.children.length)
        break;
    case Qp:
    case Uc:
      return e.return = e.return || e.value;
    case Gc:
      return "";
    case Jp:
      return e.return = e.value + "{" + ni(e.children, r) + "}";
    case Xc:
      if (!it(e.value = e.props.join(",")))
        return "";
  }
  return it(n = ni(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Qc(e, t) {
  const {
    path: n,
    parentSelectors: r
  } = t;
  Qi(!1, `[Ant Design Vue CSS-in-JS] ${n ? `Error in '${n}': ` : ""}${e}${r.length ? ` Selector info: ${r.join(" -> ")}` : ""}`);
}
const mm = (e, t, n) => {
  if (e === "content") {
    const r = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
    (typeof t != "string" || ["normal", "none", "initial", "inherit", "unset"].indexOf(t) === -1 && !r.test(t) && (t.charAt(0) !== t.charAt(t.length - 1) || t.charAt(0) !== '"' && t.charAt(0) !== "'")) && Qc(`You seem to be using a value for 'content' without quotes, try replacing it with \`content: '"${t}"'\`.`, n);
  }
}, gm = (e, t, n) => {
  e === "animation" && n.hashId && t !== "none" && Qc(`You seem to be using hashed animation '${t}', in which case 'animationName' with Keyframe as value is recommended.`, n);
}, ll = "data-ant-cssinjs-cache-path", hm = "_FILE_STYLE__";
let At, Jc = !0;
function vm() {
  var e;
  if (!At && (At = {}, qe())) {
    const t = document.createElement("div");
    t.className = ll, t.style.position = "fixed", t.style.visibility = "hidden", t.style.top = "-9999px", document.body.appendChild(t);
    let n = getComputedStyle(t).content || "";
    n = n.replace(/^"/, "").replace(/"$/, ""), n.split(";").forEach((o) => {
      const [i, a] = o.split(":");
      At[i] = a;
    });
    const r = document.querySelector(`style[${ll}]`);
    r && (Jc = !1, (e = r.parentNode) === null || e === void 0 || e.removeChild(r)), document.body.removeChild(t);
  }
}
function ym(e) {
  return vm(), !!At[e];
}
function bm(e) {
  const t = At[e];
  let n = null;
  if (t && qe())
    if (Jc)
      n = hm;
    else {
      const r = document.querySelector(`style[${_t}="${At[e]}"]`);
      r ? n = r.innerHTML : delete At[e];
    }
  return [n, t];
}
const sl = qe(), eu = "_skip_check_", tu = "_multi_value_";
function cl(e) {
  return ni(fm(e), pm).replace(/\{%%%\:[^;];}/g, ";");
}
function xm(e) {
  return typeof e == "object" && e && (eu in e || tu in e);
}
function wm(e, t, n) {
  if (!t)
    return e;
  const r = `.${t}`, o = n === "low" ? `:where(${r})` : r;
  return e.split(",").map((a) => {
    var l;
    const s = a.trim().split(/\s+/);
    let c = s[0] || "";
    const u = ((l = c.match(/^\w+/)) === null || l === void 0 ? void 0 : l[0]) || "";
    return c = `${u}${o}${c.slice(u.length)}`, [c, ...s.slice(1)].join(" ");
  }).join(",");
}
const ri = /* @__PURE__ */ new Set();
process.env.NODE_ENV;
const oi = function(e) {
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
    linters: u = []
  } = t;
  let f = "", d = {};
  function p(w) {
    const y = w.getName(i);
    if (!d[y]) {
      const [C] = oi(w.style, t, {
        root: !1,
        parentSelectors: o
      });
      d[y] = `@keyframes ${w.getName(i)}${C}`;
    }
  }
  function h(w) {
    let y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return w.forEach((C) => {
      Array.isArray(C) ? h(C, y) : C && y.push(C);
    }), y;
  }
  if (h(Array.isArray(e) ? e : [e]).forEach((w) => {
    const y = typeof w == "string" && !n ? {} : w;
    if (typeof y == "string")
      f += `${y}
`;
    else if (y._keyframe)
      p(y);
    else {
      const C = c.reduce((v, b) => {
        var S;
        return ((S = b == null ? void 0 : b.visit) === null || S === void 0 ? void 0 : S.call(b, v)) || v;
      }, y);
      Object.keys(C).forEach((v) => {
        var b;
        const S = C[v];
        if (typeof S == "object" && S && (v !== "animationName" || !S._keyframe) && !xm(S)) {
          let P = !1, x = v.trim(), _ = !1;
          (n || r) && i ? x.startsWith("@") ? P = !0 : x = wm(v, i, s) : n && !i && (x === "&" || x === "") && (x = "", _ = !0);
          const [A, E] = oi(S, t, {
            root: _,
            injectHash: P,
            parentSelectors: [...o, x]
          });
          d = m(m({}, d), E), f += `${x}${A}`;
        } else {
          let P = function(_, A) {
            process.env.NODE_ENV !== "production" && (typeof S != "object" || !(S != null && S[eu])) && [mm, gm, ...u].forEach((j) => j(_, A, {
              path: l,
              hashId: i,
              parentSelectors: o
            }));
            const E = _.replace(/[A-Z]/g, (j) => `-${j.toLowerCase()}`);
            let M = A;
            !Zp[_] && typeof M == "number" && M !== 0 && (M = `${M}px`), _ === "animationName" && (A != null && A._keyframe) && (p(A), M = A.getName(i)), f += `${E}:${M};`;
          };
          const x = (b = S == null ? void 0 : S.value) !== null && b !== void 0 ? b : S;
          typeof S == "object" && (S != null && S[tu]) && Array.isArray(x) ? x.forEach((_) => {
            P(v, _);
          }) : P(v, x);
        }
      });
    }
  }), !n)
    f = `{${f}}`;
  else if (a && zp()) {
    const w = a.split(",");
    f = `@layer ${w[w.length - 1].trim()} {${f}}`, w.length > 1 && (f = `@layer ${a}{%%%:%}${f}`);
  }
  return [f, d];
};
function Cm(e, t) {
  return Zi(`${e.join("%")}${t}`);
}
function ii(e, t) {
  const n = eo(), r = O(() => e.value.token._tokenKey), o = O(() => [r.value, ...e.value.path]);
  let i = sl;
  return process.env.NODE_ENV !== "production" && n.value.mock !== void 0 && (i = n.value.mock === "client"), Dc(
    "style",
    o,
    // Create cache if needed
    () => {
      const {
        path: a,
        hashId: l,
        layer: s,
        nonce: c,
        clientOnly: u,
        order: f = 0
      } = e.value, d = o.value.join("|");
      if (ym(d)) {
        const [x, _] = bm(d);
        if (x)
          return [x, r.value, _, {}, u, f];
      }
      const p = t(), {
        hashPriority: h,
        container: g,
        transformers: w,
        linters: y,
        cache: C
      } = n.value, [v, b] = oi(p, {
        hashId: l,
        hashPriority: h,
        layer: s,
        path: a.join("-"),
        transformers: w,
        linters: y
      }), S = cl(v), P = Cm(o.value, S);
      if (i) {
        const x = {
          mark: _t,
          prepend: "queue",
          attachTo: g,
          priority: f
        }, _ = typeof c == "function" ? c() : c;
        _ && (x.csp = {
          nonce: _
        });
        const A = jn(S, P, x);
        A[Kt] = C.instanceId, A.setAttribute(jc, r.value), process.env.NODE_ENV !== "production" && A.setAttribute(Op, o.value.join("|")), Object.keys(b).forEach((E) => {
          ri.has(E) || (ri.add(E), jn(cl(b[E]), `_effect-${E}`, {
            mark: _t,
            prepend: "queue",
            attachTo: g
          }));
        });
      }
      return [S, r.value, P, b, u, f];
    },
    // Remove cache if no need
    (a, l) => {
      let [, , s] = a;
      (l || n.value.autoClear) && sl && Rr(s, {
        mark: _t
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
const $m = "4.2.1", Lr = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"];
function he(e, t) {
  Sm(e) && (e = "100%");
  var n = Om(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function rr(e) {
  return Math.min(1, Math.max(0, e));
}
function Sm(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function Om(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function nu(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function or(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function Pt(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function Pm(e, t, n) {
  return {
    r: he(e, 255) * 255,
    g: he(t, 255) * 255,
    b: he(n, 255) * 255
  };
}
function ul(e, t, n) {
  e = he(e, 255), t = he(t, 255), n = he(n, 255);
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
function Oo(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Tm(e, t, n) {
  var r, o, i;
  if (e = he(e, 360), t = he(t, 100), n = he(n, 100), t === 0)
    o = n, i = n, r = n;
  else {
    var a = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - a;
    r = Oo(l, a, e + 1 / 3), o = Oo(l, a, e), i = Oo(l, a, e - 1 / 3);
  }
  return { r: r * 255, g: o * 255, b: i * 255 };
}
function ai(e, t, n) {
  e = he(e, 255), t = he(t, 255), n = he(n, 255);
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
function _m(e, t, n) {
  e = he(e, 360) * 6, t = he(t, 100), n = he(n, 100);
  var r = Math.floor(e), o = e - r, i = n * (1 - t), a = n * (1 - o * t), l = n * (1 - (1 - o) * t), s = r % 6, c = [n, a, i, i, l, n][s], u = [l, n, n, a, i, i][s], f = [i, i, l, n, n, a][s];
  return { r: c * 255, g: u * 255, b: f * 255 };
}
function li(e, t, n, r) {
  var o = [
    Pt(Math.round(e).toString(16)),
    Pt(Math.round(t).toString(16)),
    Pt(Math.round(n).toString(16))
  ];
  return r && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) : o.join("");
}
function Em(e, t, n, r, o) {
  var i = [
    Pt(Math.round(e).toString(16)),
    Pt(Math.round(t).toString(16)),
    Pt(Math.round(n).toString(16)),
    Pt(Am(r))
  ];
  return o && i[0].startsWith(i[0].charAt(1)) && i[1].startsWith(i[1].charAt(1)) && i[2].startsWith(i[2].charAt(1)) && i[3].startsWith(i[3].charAt(1)) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) + i[3].charAt(0) : i.join("");
}
function Am(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function fl(e) {
  return Te(e) / 255;
}
function Te(e) {
  return parseInt(e, 16);
}
function Im(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var si = {
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
function Xt(e) {
  var t = { r: 0, g: 0, b: 0 }, n = 1, r = null, o = null, i = null, a = !1, l = !1;
  return typeof e == "string" && (e = jm(e)), typeof e == "object" && (nt(e.r) && nt(e.g) && nt(e.b) ? (t = Pm(e.r, e.g, e.b), a = !0, l = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : nt(e.h) && nt(e.s) && nt(e.v) ? (r = or(e.s), o = or(e.v), t = _m(e.h, r, o), a = !0, l = "hsv") : nt(e.h) && nt(e.s) && nt(e.l) && (r = or(e.s), i = or(e.l), t = Tm(e.h, r, i), a = !0, l = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = nu(n), {
    ok: a,
    format: e.format || l,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var Mm = "[-\\+]?\\d+%?", Fm = "[-\\+]?\\d*\\.\\d+%?", pt = "(?:".concat(Fm, ")|(?:").concat(Mm, ")"), Po = "[\\s|\\(]+(".concat(pt, ")[,|\\s]+(").concat(pt, ")[,|\\s]+(").concat(pt, ")\\s*\\)?"), To = "[\\s|\\(]+(".concat(pt, ")[,|\\s]+(").concat(pt, ")[,|\\s]+(").concat(pt, ")[,|\\s]+(").concat(pt, ")\\s*\\)?"), Le = {
  CSS_UNIT: new RegExp(pt),
  rgb: new RegExp("rgb" + Po),
  rgba: new RegExp("rgba" + To),
  hsl: new RegExp("hsl" + Po),
  hsla: new RegExp("hsla" + To),
  hsv: new RegExp("hsv" + Po),
  hsva: new RegExp("hsva" + To),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function jm(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (si[e])
    e = si[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = Le.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = Le.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = Le.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = Le.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = Le.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = Le.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = Le.hex8.exec(e), n ? {
    r: Te(n[1]),
    g: Te(n[2]),
    b: Te(n[3]),
    a: fl(n[4]),
    format: t ? "name" : "hex8"
  } : (n = Le.hex6.exec(e), n ? {
    r: Te(n[1]),
    g: Te(n[2]),
    b: Te(n[3]),
    format: t ? "name" : "hex"
  } : (n = Le.hex4.exec(e), n ? {
    r: Te(n[1] + n[1]),
    g: Te(n[2] + n[2]),
    b: Te(n[3] + n[3]),
    a: fl(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = Le.hex3.exec(e), n ? {
    r: Te(n[1] + n[1]),
    g: Te(n[2] + n[2]),
    b: Te(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function nt(e) {
  return !!Le.CSS_UNIT.exec(String(e));
}
var ge = (
  /** @class */
  function() {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var r;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = Im(t)), this.originalInput = t;
      var o = Xt(t);
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
      return this.a = nu(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = ai(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = ai(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), o = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(n, ", ").concat(r, "%, ").concat(o, "%)") : "hsva(".concat(n, ", ").concat(r, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = ul(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = ul(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), o = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(n, ", ").concat(r, "%, ").concat(o, "%)") : "hsla(".concat(n, ", ").concat(r, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), li(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), Em(this.r, this.g, this.b, this.a, t);
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
        return "".concat(Math.round(he(n, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(n) {
        return Math.round(he(n, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + li(this.r, this.g, this.b, !1), n = 0, r = Object.entries(si); n < r.length; n++) {
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
      return n.l += t / 100, n.l = rr(n.l), new e(n);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toRgb();
      return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l -= t / 100, n.l = rr(n.l), new e(n);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s -= t / 100, n.s = rr(n.s), new e(n);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s += t / 100, n.s = rr(n.s), new e(n);
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
), ir = 2, dl = 0.16, Rm = 0.05, Nm = 0.05, Dm = 0.15, ru = 5, ou = 4, Lm = [{
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
function pl(e) {
  var t = e.r, n = e.g, r = e.b, o = ai(t, n, r);
  return {
    h: o.h * 360,
    s: o.s,
    v: o.v
  };
}
function ar(e) {
  var t = e.r, n = e.g, r = e.b;
  return "#".concat(li(t, n, r, !1));
}
function Bm(e, t, n) {
  var r = n / 100, o = {
    r: (t.r - e.r) * r + e.r,
    g: (t.g - e.g) * r + e.g,
    b: (t.b - e.b) * r + e.b
  };
  return o;
}
function ml(e, t, n) {
  var r;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? r = n ? Math.round(e.h) - ir * t : Math.round(e.h) + ir * t : r = n ? Math.round(e.h) + ir * t : Math.round(e.h) - ir * t, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function gl(e, t, n) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var r;
  return n ? r = e.s - dl * t : t === ou ? r = e.s + dl : r = e.s + Rm * t, r > 1 && (r = 1), n && t === ru && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Number(r.toFixed(2));
}
function hl(e, t, n) {
  var r;
  return n ? r = e.v + Nm * t : r = e.v - Dm * t, r > 1 && (r = 1), Number(r.toFixed(2));
}
function Ft(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [], r = Xt(e), o = ru; o > 0; o -= 1) {
    var i = pl(r), a = ar(Xt({
      h: ml(i, o, !0),
      s: gl(i, o, !0),
      v: hl(i, o, !0)
    }));
    n.push(a);
  }
  n.push(ar(r));
  for (var l = 1; l <= ou; l += 1) {
    var s = pl(r), c = ar(Xt({
      h: ml(s, l),
      s: gl(s, l),
      v: hl(s, l)
    }));
    n.push(c);
  }
  return t.theme === "dark" ? Lm.map(function(u) {
    var f = u.index, d = u.opacity, p = ar(Bm(Xt(t.backgroundColor || "#141414"), Xt(n[f]), d * 100));
    return p;
  }) : n;
}
var _o = {
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
}, Cr = {}, Eo = {};
Object.keys(_o).forEach(function(e) {
  Cr[e] = Ft(_o[e]), Cr[e].primary = Cr[e][5], Eo[e] = Ft(_o[e], {
    theme: "dark",
    backgroundColor: "#141414"
  }), Eo[e].primary = Eo[e][5];
});
var Hm = Cr.blue;
const zm = (e) => {
  const {
    controlHeight: t
  } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
};
function Vm(e) {
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
const iu = {
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
}, oo = m(m({}, iu), {
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
function km(e, t) {
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
    colorTextBase: u
  } = e, f = n(s), d = n(o), p = n(i), h = n(a), g = n(l), w = r(c, u);
  return m(m({}, w), {
    colorPrimaryBg: f[1],
    colorPrimaryBgHover: f[2],
    colorPrimaryBorder: f[3],
    colorPrimaryBorderHover: f[4],
    colorPrimaryHover: f[5],
    colorPrimary: f[6],
    colorPrimaryActive: f[7],
    colorPrimaryTextHover: f[8],
    colorPrimaryText: f[9],
    colorPrimaryTextActive: f[10],
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
    colorBgMask: new ge("#000").setAlpha(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const Wm = (e) => {
  let t = e, n = e, r = e, o = e;
  return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? n = 4 : e < 8 && e >= 7 ? n = 5 : e < 14 && e >= 8 ? n = 6 : e < 16 && e >= 14 ? n = 7 : e >= 16 && (n = 8), e < 6 && e >= 2 ? r = 1 : e >= 6 && (r = 2), e > 4 && e < 8 ? o = 4 : e >= 8 && (o = 6), {
    borderRadius: e > 16 ? 16 : e,
    borderRadiusXS: r,
    borderRadiusSM: n,
    borderRadiusLG: t,
    borderRadiusOuter: o
  };
};
function qm(e) {
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
  }, Wm(r));
}
const rt = (e, t) => new ge(e).setAlpha(t).toRgbString(), vn = (e, t) => new ge(e).darken(t).toHexString(), Gm = (e) => {
  const t = Ft(e);
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
}, Xm = (e, t) => {
  const n = e || "#fff", r = t || "#000";
  return {
    colorBgBase: n,
    colorTextBase: r,
    colorText: rt(r, 0.88),
    colorTextSecondary: rt(r, 0.65),
    colorTextTertiary: rt(r, 0.45),
    colorTextQuaternary: rt(r, 0.25),
    colorFill: rt(r, 0.15),
    colorFillSecondary: rt(r, 0.06),
    colorFillTertiary: rt(r, 0.04),
    colorFillQuaternary: rt(r, 0.02),
    colorBgLayout: vn(n, 4),
    colorBgContainer: vn(n, 0),
    colorBgElevated: vn(n, 0),
    colorBgSpotlight: rt(r, 0.85),
    colorBorder: vn(n, 15),
    colorBorderSecondary: vn(n, 6)
  };
};
function Um(e) {
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
const Ym = (e) => {
  const t = Um(e), n = t.map((o) => o.size), r = t.map((o) => o.lineHeight);
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
function Km(e) {
  const t = Object.keys(iu).map((n) => {
    const r = Ft(e[n]);
    return new Array(10).fill(1).reduce((o, i, a) => (o[`${n}-${a + 1}`] = r[a], o), {});
  }).reduce((n, r) => (n = m(m({}, n), r), n), {});
  return m(m(m(m(m(m(m({}, e), t), km(e, {
    generateColorPalettes: Gm,
    generateNeutralColorPalettes: Xm
  })), Ym(e.fontSize)), Vm(e)), zm(e)), qm(e));
}
function Ao(e) {
  return e >= 0 && e <= 255;
}
function lr(e, t) {
  const {
    r: n,
    g: r,
    b: o,
    a: i
  } = new ge(e).toRgb();
  if (i < 1)
    return e;
  const {
    r: a,
    g: l,
    b: s
  } = new ge(t).toRgb();
  for (let c = 0.01; c <= 1; c += 0.01) {
    const u = Math.round((n - a * (1 - c)) / c), f = Math.round((r - l * (1 - c)) / c), d = Math.round((o - s * (1 - c)) / c);
    if (Ao(u) && Ao(f) && Ao(d))
      return new ge({
        r: u,
        g: f,
        b: d,
        a: Math.round(c * 100) / 100
      }).toRgbString();
  }
  return new ge({
    r: n,
    g: r,
    b: o,
    a: 1
  }).toRgbString();
}
var Zm = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
function Qm(e) {
  const {
    override: t
  } = e, n = Zm(e, ["override"]), r = m({}, t);
  Object.keys(oo).forEach((p) => {
    delete r[p];
  });
  const o = m(m({}, n), r), i = 480, a = 576, l = 768, s = 992, c = 1200, u = 1600, f = 2e3;
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
    colorSplit: lr(o.colorBorderSecondary, o.colorBgContainer),
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
    colorErrorOutline: lr(o.colorErrorBg, o.colorBgContainer),
    colorWarningOutline: lr(o.colorWarningBg, o.colorBgContainer),
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
    controlOutline: lr(o.colorPrimaryBg, o.colorBgContainer),
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
    screenXLMax: u - 1,
    screenXXL: u,
    screenXXLMin: u,
    screenXXLMax: f - 1,
    screenXXXL: f,
    screenXXXLMin: f,
    // FIXME: component box-shadow, should be removed
    boxShadowPopoverArrow: "3px 3px 7px rgba(0, 0, 0, 0.1)",
    boxShadowCard: `
      0 1px 2px -2px ${new ge("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new ge("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new ge("rgba(0, 0, 0, 0.09)").toRgbString()}
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
const Jm = (e, t, n, r, o) => {
  const i = e / 2, a = 0, l = i, s = n * 1 / Math.sqrt(2), c = i - n * (1 - 1 / Math.sqrt(2)), u = i - t * (1 / Math.sqrt(2)), f = n * (Math.sqrt(2) - 1) + t * (1 / Math.sqrt(2)), d = 2 * i - u, p = f, h = 2 * i - s, g = c, w = 2 * i - a, y = l, C = i * Math.sqrt(2) + n * (Math.sqrt(2) - 2), v = n * (Math.sqrt(2) - 1);
  return {
    pointerEvents: "none",
    width: e,
    height: e,
    overflow: "hidden",
    "&::after": {
      content: '""',
      position: "absolute",
      width: C,
      height: C,
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
        value: [`polygon(${v}px 100%, 50% ${v}px, ${2 * i - v}px 100%, ${v}px 100%)`, `path('M ${a} ${l} A ${n} ${n} 0 0 0 ${s} ${c} L ${u} ${f} A ${t} ${t} 0 0 1 ${d} ${p} L ${h} ${g} A ${n} ${n} 0 0 0 ${w} ${y} Z')`]
      },
      content: '""'
    }
  };
};
function eg(e, t) {
  return Lr.reduce((n, r) => {
    const o = e[`${r}-1`], i = e[`${r}-3`], a = e[`${r}-6`], l = e[`${r}-7`];
    return m(m({}, n), t(r, {
      lightColor: o,
      lightBorderColor: i,
      darkColor: a,
      textColor: l
    }));
  }, {});
}
const $2 = {
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
}, qn = (e) => ({
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
}), tg = () => ({
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
}), S2 = () => ({
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
}), ng = (e) => ({
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
}), rg = (e, t) => {
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
}, og = (e) => ({
  outline: `${e.lineWidthBold}px solid ${e.colorPrimaryBorder}`,
  outlineOffset: 1,
  transition: "outline-offset 0s, outline 0s"
}), ig = (e) => ({
  "&:focus-visible": m({}, og(e))
});
function tt(e, t, n) {
  return (r) => {
    const o = O(() => r == null ? void 0 : r.value), [i, a, l] = pn(), {
      getPrefixCls: s,
      iconPrefixCls: c
    } = Yi(), u = O(() => s()), f = O(() => ({
      theme: i.value,
      token: a.value,
      hashId: l.value,
      path: ["Shared", u.value]
    }));
    ii(f, () => [{
      // Link
      "&": ng(a.value)
    }]);
    const d = O(() => ({
      theme: i.value,
      token: a.value,
      hashId: l.value,
      path: [e, o.value, c.value]
    }));
    return [ii(d, () => {
      const {
        token: p,
        flush: h
      } = lg(a.value), g = typeof n == "function" ? n(p) : n, w = m(m({}, g), a.value[e]), y = `.${o.value}`, C = Ge(p, {
        componentCls: y,
        prefixCls: o.value,
        iconCls: `.${c.value}`,
        antCls: `.${u.value}`
      }, w), v = t(C, {
        hashId: l.value,
        prefixCls: o.value,
        rootPrefixCls: u.value,
        iconPrefixCls: c.value,
        overrideComponentToken: a.value[e]
      });
      return h(e, w), [rg(a.value, o.value), v];
    }), l];
  };
}
const au = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u";
let ci = !0;
function Ge() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  if (!au)
    return m({}, ...t);
  ci = !1;
  const r = {};
  return t.forEach((o) => {
    Object.keys(o).forEach((a) => {
      Object.defineProperty(r, a, {
        configurable: !0,
        enumerable: !0,
        get: () => o[a]
      });
    });
  }), ci = !0, r;
}
function ag() {
}
function lg(e) {
  let t, n = e, r = ag;
  return au && (t = /* @__PURE__ */ new Set(), n = new Proxy(e, {
    get(o, i) {
      return ci && t.add(i), o[i];
    }
  }), r = (o, i) => {
    Array.from(t);
  }), {
    token: n,
    keys: t,
    flush: r
  };
}
const sg = Wc(Km), lu = {
  token: oo,
  hashed: !0
}, su = Symbol("DesignTokenContext"), ui = H(), cg = (e) => {
  ce(su, e), K(e, () => {
    ui.value = xe(e), wd(ui);
  }, {
    immediate: !0,
    deep: !0
  });
}, ug = V({
  props: {
    value: ie()
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    return cg(O(() => e.value)), () => {
      var r;
      return (r = n.default) === null || r === void 0 ? void 0 : r.call(n);
    };
  }
});
function pn() {
  const e = pe(su, O(() => ui.value || lu)), t = O(() => `${$m}-${e.value.hashed || ""}`), n = O(() => e.value.theme || sg), r = Kp(n, O(() => [oo, e.value.token]), O(() => ({
    salt: t.value,
    override: m({
      override: e.value.token
    }, e.value.components),
    formatToken: Qm
  })));
  return [n, O(() => r.value[0]), O(() => e.value.hashed ? r.value[1] : "")];
}
const cu = V({
  compatConfig: {
    MODE: 3
  },
  setup() {
    const [, e] = pn(), t = O(() => new ge(e.value.colorBgBase).toHsl().l < 0.5 ? {
      opacity: 0.65
    } : {});
    return () => $("svg", {
      style: t.value,
      width: "184",
      height: "152",
      viewBox: "0 0 184 152",
      xmlns: "http://www.w3.org/2000/svg"
    }, [$("g", {
      fill: "none",
      "fill-rule": "evenodd"
    }, [$("g", {
      transform: "translate(24 31.67)"
    }, [$("ellipse", {
      "fill-opacity": ".8",
      fill: "#F5F5F7",
      cx: "67.797",
      cy: "106.89",
      rx: "67.797",
      ry: "12.668"
    }, null), $("path", {
      d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z",
      fill: "#AEB8C2"
    }, null), $("path", {
      d: "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
      fill: "url(#linearGradient-1)",
      transform: "translate(13.56)"
    }, null), $("path", {
      d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z",
      fill: "#F5F5F7"
    }, null), $("path", {
      d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z",
      fill: "#DCE0E6"
    }, null)]), $("path", {
      d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z",
      fill: "#DCE0E6"
    }, null), $("g", {
      transform: "translate(149.65 15.383)",
      fill: "#FFF"
    }, [$("ellipse", {
      cx: "20.654",
      cy: "3.167",
      rx: "2.849",
      ry: "2.815"
    }, null), $("path", {
      d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
    }, null)])])]);
  }
});
cu.PRESENTED_IMAGE_DEFAULT = !0;
const uu = V({
  compatConfig: {
    MODE: 3
  },
  setup() {
    const [, e] = pn(), t = O(() => {
      const {
        colorFill: n,
        colorFillTertiary: r,
        colorFillQuaternary: o,
        colorBgContainer: i
      } = e.value;
      return {
        borderColor: new ge(n).onBackground(i).toHexString(),
        shadowColor: new ge(r).onBackground(i).toHexString(),
        contentColor: new ge(o).onBackground(i).toHexString()
      };
    });
    return () => $("svg", {
      width: "64",
      height: "41",
      viewBox: "0 0 64 41",
      xmlns: "http://www.w3.org/2000/svg"
    }, [$("g", {
      transform: "translate(0 1)",
      fill: "none",
      "fill-rule": "evenodd"
    }, [$("ellipse", {
      fill: t.value.shadowColor,
      cx: "32",
      cy: "33",
      rx: "32",
      ry: "7"
    }, null), $("g", {
      "fill-rule": "nonzero",
      stroke: t.value.borderColor
    }, [$("path", {
      d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
    }, null), $("path", {
      d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
      fill: t.value.contentColor
    }, null)])])]);
  }
});
uu.PRESENTED_IMAGE_SIMPLE = !0;
const fg = (e) => {
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
}, dg = tt("Empty", (e) => {
  const {
    componentCls: t,
    controlHeightLG: n
  } = e, r = Ge(e, {
    emptyImgCls: `${t}-img`,
    emptyImgHeight: n * 2.5,
    emptyImgHeightMD: n,
    emptyImgHeightSM: n * 0.875
  });
  return [fg(r)];
});
var pg = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const fu = $(cu, null, null), du = $(uu, null, null), mg = () => ({
  prefixCls: String,
  imageStyle: ie(),
  image: Fr(),
  description: Fr()
}), ta = V({
  name: "AEmpty",
  compatConfig: {
    MODE: 3
  },
  inheritAttrs: !1,
  props: mg(),
  setup(e, t) {
    let {
      slots: n = {},
      attrs: r
    } = t;
    const {
      direction: o,
      prefixCls: i
    } = Se("empty", e), [a, l] = dg(i);
    return () => {
      var s, c;
      const u = i.value, f = m(m({}, e), r), {
        image: d = ((s = n.image) === null || s === void 0 ? void 0 : s.call(n)) || fu,
        description: p = ((c = n.description) === null || c === void 0 ? void 0 : c.call(n)) || void 0,
        imageStyle: h,
        class: g = ""
      } = f, w = pg(f, ["image", "description", "imageStyle", "class"]);
      return a($(Fc, {
        componentName: "Empty",
        children: (y) => {
          const C = typeof p < "u" ? p : y.description, v = typeof C == "string" ? C : "empty";
          let b = null;
          return typeof d == "string" ? b = $("img", {
            alt: v,
            src: d
          }, null) : b = d, $("div", L({
            class: U(u, g, l.value, {
              [`${u}-normal`]: d === du,
              [`${u}-rtl`]: o.value === "rtl"
            })
          }, w), [$("div", {
            class: `${u}-image`,
            style: h
          }, [b]), C && $("p", {
            class: `${u}-description`
          }, [C]), n.default && $("div", {
            class: `${u}-footer`
          }, [Nt(n.default())])]);
        }
      }, null));
    };
  }
});
ta.PRESENTED_IMAGE_DEFAULT = fu;
ta.PRESENTED_IMAGE_SIMPLE = du;
const yn = Jr(ta), pu = (e) => {
  const {
    prefixCls: t
  } = Se("empty", e);
  return ((r) => {
    switch (r) {
      case "Table":
      case "List":
        return $(yn, {
          image: yn.PRESENTED_IMAGE_SIMPLE
        }, null);
      case "Select":
      case "TreeSelect":
      case "Cascader":
      case "Transfer":
      case "Mentions":
        return $(yn, {
          image: yn.PRESENTED_IMAGE_SIMPLE,
          class: `${t.value}-small`
        }, null);
      default:
        return $(yn, null, null);
    }
  })(e.componentName);
};
function gg(e) {
  return $(pu, {
    componentName: e
  }, null);
}
const mu = Symbol("SizeContextKey"), gu = () => pe(mu, Z(void 0)), hu = (e) => {
  const t = gu();
  return ce(mu, O(() => e.value || t.value)), e;
}, Se = (e, t) => {
  const n = gu(), r = Ki(), o = pe(Ui, m(m({}, Ec), {
    renderEmpty: (x) => Uo(pu, {
      componentName: x
    })
  })), i = O(() => o.getPrefixCls(e, t.prefixCls)), a = O(() => {
    var x, _;
    return (x = t.direction) !== null && x !== void 0 ? x : (_ = o.direction) === null || _ === void 0 ? void 0 : _.value;
  }), l = O(() => {
    var x;
    return (x = t.iconPrefixCls) !== null && x !== void 0 ? x : o.iconPrefixCls.value;
  }), s = O(() => o.getPrefixCls()), c = O(() => {
    var x;
    return (x = o.autoInsertSpaceInButton) === null || x === void 0 ? void 0 : x.value;
  }), u = o.renderEmpty, f = o.space, d = o.pageHeader, p = o.form, h = O(() => {
    var x, _;
    return (x = t.getTargetContainer) !== null && x !== void 0 ? x : (_ = o.getTargetContainer) === null || _ === void 0 ? void 0 : _.value;
  }), g = O(() => {
    var x, _, A;
    return (_ = (x = t.getContainer) !== null && x !== void 0 ? x : t.getPopupContainer) !== null && _ !== void 0 ? _ : (A = o.getPopupContainer) === null || A === void 0 ? void 0 : A.value;
  }), w = O(() => {
    var x, _;
    return (x = t.dropdownMatchSelectWidth) !== null && x !== void 0 ? x : (_ = o.dropdownMatchSelectWidth) === null || _ === void 0 ? void 0 : _.value;
  }), y = O(() => {
    var x;
    return (t.virtual === void 0 ? ((x = o.virtual) === null || x === void 0 ? void 0 : x.value) !== !1 : t.virtual !== !1) && w.value !== !1;
  }), C = O(() => t.size || n.value), v = O(() => {
    var x, _, A;
    return (x = t.autocomplete) !== null && x !== void 0 ? x : (A = (_ = o.input) === null || _ === void 0 ? void 0 : _.value) === null || A === void 0 ? void 0 : A.autocomplete;
  }), b = O(() => {
    var x;
    return (x = t.disabled) !== null && x !== void 0 ? x : r.value;
  }), S = O(() => {
    var x;
    return (x = t.csp) !== null && x !== void 0 ? x : o.csp;
  }), P = O(() => {
    var x, _;
    return (x = t.wave) !== null && x !== void 0 ? x : (_ = o.wave) === null || _ === void 0 ? void 0 : _.value;
  });
  return {
    configProvider: o,
    prefixCls: i,
    direction: a,
    size: C,
    getTargetContainer: h,
    getPopupContainer: g,
    space: f,
    pageHeader: d,
    form: p,
    autoInsertSpaceInButton: c,
    renderEmpty: u,
    virtual: y,
    dropdownMatchSelectWidth: w,
    rootPrefixCls: s,
    getPrefixCls: o.getPrefixCls,
    autocomplete: v,
    csp: S,
    iconPrefixCls: l,
    disabled: b,
    select: o.select,
    wave: P
  };
};
function vl(e) {
  return typeof e == "object" && e != null && e.nodeType === 1;
}
function yl(e, t) {
  return (!t || e !== "hidden") && e !== "visible" && e !== "clip";
}
function Io(e, t) {
  if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
    var n = getComputedStyle(e, null);
    return yl(n.overflowY, t) || yl(n.overflowX, t) || function(r) {
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
function sr(e, t, n, r, o, i, a, l) {
  return i < e && a > t || i > e && a < t ? 0 : i <= e && l <= n || a >= t && l >= n ? i - e - r : a > t && l < n || i < e && l > n ? a - t + o : 0;
}
var bl = function(e, t) {
  var n = window, r = t.scrollMode, o = t.block, i = t.inline, a = t.boundary, l = t.skipOverflowHiddenElements, s = typeof a == "function" ? a : function(vd) {
    return vd !== a;
  };
  if (!vl(e))
    throw new TypeError("Invalid target");
  for (var c, u, f = document.scrollingElement || document.documentElement, d = [], p = e; vl(p) && s(p); ) {
    if ((p = (u = (c = p).parentElement) == null ? c.getRootNode().host || null : u) === f) {
      d.push(p);
      break;
    }
    p != null && p === document.body && Io(p) && !Io(document.documentElement) || p != null && Io(p, l) && d.push(p);
  }
  for (var h = n.visualViewport ? n.visualViewport.width : innerWidth, g = n.visualViewport ? n.visualViewport.height : innerHeight, w = window.scrollX || pageXOffset, y = window.scrollY || pageYOffset, C = e.getBoundingClientRect(), v = C.height, b = C.width, S = C.top, P = C.right, x = C.bottom, _ = C.left, A = o === "start" || o === "nearest" ? S : o === "end" ? x : S + v / 2, E = i === "center" ? _ + b / 2 : i === "end" ? P : _, M = [], j = 0; j < d.length; j++) {
    var N = d[j], B = N.getBoundingClientRect(), T = B.height, F = B.width, I = B.top, R = B.right, k = B.bottom, G = B.left;
    if (r === "if-needed" && S >= 0 && _ >= 0 && x <= g && P <= h && S >= I && x <= k && _ >= G && P <= R)
      return M;
    var Q = getComputedStyle(N), re = parseInt(Q.borderLeftWidth, 10), fe = parseInt(Q.borderTopWidth, 10), me = parseInt(Q.borderRightWidth, 10), D = parseInt(Q.borderBottomWidth, 10), q = 0, Y = 0, J = "offsetWidth" in N ? N.offsetWidth - N.clientWidth - re - me : 0, ne = "offsetHeight" in N ? N.offsetHeight - N.clientHeight - fe - D : 0, de = "offsetWidth" in N ? N.offsetWidth === 0 ? 0 : F / N.offsetWidth : 0, Ue = "offsetHeight" in N ? N.offsetHeight === 0 ? 0 : T / N.offsetHeight : 0;
    if (f === N)
      q = o === "start" ? A : o === "end" ? A - g : o === "nearest" ? sr(y, y + g, g, fe, D, y + A, y + A + v, v) : A - g / 2, Y = i === "start" ? E : i === "center" ? E - h / 2 : i === "end" ? E - h : sr(w, w + h, h, re, me, w + E, w + E + b, b), q = Math.max(0, q + y), Y = Math.max(0, Y + w);
    else {
      q = o === "start" ? A - I - fe : o === "end" ? A - k + D + ne : o === "nearest" ? sr(I, k, T, fe, D + ne, A, A + v, v) : A - (I + T / 2) + ne / 2, Y = i === "start" ? E - G - re : i === "center" ? E - (G + F / 2) + J / 2 : i === "end" ? E - R + me + J : sr(G, R, F, re, me + J, E, E + b, b);
      var Ye = N.scrollLeft, gn = N.scrollTop;
      A += gn - (q = Math.max(0, Math.min(gn + q / Ue, N.scrollHeight - T / Ue + ne))), E += Ye - (Y = Math.max(0, Math.min(Ye + Y / de, N.scrollWidth - F / de + J)));
    }
    M.push({ el: N, top: q, left: Y });
  }
  return M;
};
function vu(e) {
  return e === Object(e) && Object.keys(e).length !== 0;
}
function hg(e, t) {
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
function vg(e) {
  return e === !1 ? {
    block: "end",
    inline: "nearest"
  } : vu(e) ? e : {
    block: "start",
    inline: "nearest"
  };
}
function yg(e, t) {
  var n = e.isConnected || e.ownerDocument.documentElement.contains(e);
  if (vu(t) && typeof t.behavior == "function")
    return t.behavior(n ? bl(e, t) : []);
  if (n) {
    var r = vg(t);
    return hg(bl(e, r), r.behavior);
  }
}
function bg(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function yu(e, t, n) {
  return n && bg(e, n), e;
}
function $r() {
  return ($r = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
function bu(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
}
function xu(e, t) {
  if (e == null)
    return {};
  var n, r, o = {}, i = Object.keys(e);
  for (r = 0; r < i.length; r++)
    t.indexOf(n = i[r]) >= 0 || (o[n] = e[n]);
  return o;
}
function xl(e) {
  return ((t = e) != null && typeof t == "object" && Array.isArray(t) === !1) == 1 && Object.prototype.toString.call(e) === "[object Object]";
  var t;
}
var wu = Object.prototype, Cu = wu.toString, xg = wu.hasOwnProperty, $u = /^\s*function (\w+)/;
function wl(e) {
  var t, n = (t = e == null ? void 0 : e.type) !== null && t !== void 0 ? t : e;
  if (n) {
    var r = n.toString().match($u);
    return r ? r[1] : "";
  }
  return "";
}
var jt = function(e) {
  var t, n;
  return xl(e) !== !1 && typeof (t = e.constructor) == "function" && xl(n = t.prototype) !== !1 && n.hasOwnProperty("isPrototypeOf") !== !1;
}, Su = function(e) {
  return e;
}, ye = Su;
if (process.env.NODE_ENV !== "production") {
  var wg = typeof console < "u";
  ye = wg ? function(e) {
    console.warn("[VueTypes warn]: " + e);
  } : Su;
}
var Dn = function(e, t) {
  return xg.call(e, t);
}, Cg = Number.isInteger || function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}, on = Array.isArray || function(e) {
  return Cu.call(e) === "[object Array]";
}, an = function(e) {
  return Cu.call(e) === "[object Function]";
}, Br = function(e) {
  return jt(e) && Dn(e, "_vueTypes_name");
}, Ou = function(e) {
  return jt(e) && (Dn(e, "type") || ["_vueTypes_name", "validator", "default", "required"].some(function(t) {
    return Dn(e, t);
  }));
};
function na(e, t) {
  return Object.defineProperty(e.bind(t), "__original", { value: e });
}
function Dt(e, t, n) {
  var r;
  n === void 0 && (n = !1);
  var o = !0, i = "";
  r = jt(e) ? e : { type: e };
  var a = Br(r) ? r._vueTypes_name + " - " : "";
  if (Ou(r) && r.type !== null) {
    if (r.type === void 0 || r.type === !0 || !r.required && t === void 0)
      return o;
    on(r.type) ? (o = r.type.some(function(f) {
      return Dt(f, t, !0) === !0;
    }), i = r.type.map(function(f) {
      return wl(f);
    }).join(" or ")) : o = (i = wl(r)) === "Array" ? on(t) : i === "Object" ? jt(t) : i === "String" || i === "Number" || i === "Boolean" || i === "Function" ? function(f) {
      if (f == null)
        return "";
      var d = f.constructor.toString().match($u);
      return d ? d[1] : "";
    }(t) === i : t instanceof r.type;
  }
  if (!o) {
    var l = a + 'value "' + t + '" should be of type "' + i + '"';
    return n === !1 ? (ye(l), !1) : l;
  }
  if (Dn(r, "validator") && an(r.validator)) {
    var s = ye, c = [];
    if (ye = function(f) {
      c.push(f);
    }, o = r.validator(t), ye = s, !o) {
      var u = (c.length > 1 ? "* " : "") + c.join(`
* `);
      return c.length = 0, n === !1 ? (ye(u), o) : u;
    }
  }
  return o;
}
function Ie(e, t) {
  var n = Object.defineProperties(t, { _vueTypes_name: { value: e, writable: !0 }, isRequired: { get: function() {
    return this.required = !0, this;
  } }, def: { value: function(o) {
    return o !== void 0 || this.default ? an(o) || Dt(this, o, !0) === !0 ? (this.default = on(o) ? function() {
      return [].concat(o);
    } : jt(o) ? function() {
      return Object.assign({}, o);
    } : o, this) : (ye(this._vueTypes_name + ' - invalid default value: "' + o + '"'), this) : this;
  } } }), r = n.validator;
  return an(r) && (n.validator = na(r, n)), n;
}
function Je(e, t) {
  var n = Ie(e, t);
  return Object.defineProperty(n, "validate", { value: function(r) {
    return an(this.validator) && ye(this._vueTypes_name + ` - calling .validate() will overwrite the current custom validator function. Validator info:
` + JSON.stringify(this)), this.validator = na(r, this), this;
  } });
}
function Cl(e, t, n) {
  var r, o, i = (r = t, o = {}, Object.getOwnPropertyNames(r).forEach(function(f) {
    o[f] = Object.getOwnPropertyDescriptor(r, f);
  }), Object.defineProperties({}, o));
  if (i._vueTypes_name = e, !jt(n))
    return i;
  var a, l, s = n.validator, c = xu(n, ["validator"]);
  if (an(s)) {
    var u = i.validator;
    u && (u = (l = (a = u).__original) !== null && l !== void 0 ? l : a), i.validator = na(u ? function(f) {
      return u.call(this, f) && s.call(this, f);
    } : s, i);
  }
  return Object.assign(i, c);
}
function io(e) {
  return e.replace(/^(?!\s*$)/gm, "  ");
}
var $g = function() {
  return Je("any", {});
}, Sg = function() {
  return Je("function", { type: Function });
}, Og = function() {
  return Je("boolean", { type: Boolean });
}, Pg = function() {
  return Je("string", { type: String });
}, Tg = function() {
  return Je("number", { type: Number });
}, _g = function() {
  return Je("array", { type: Array });
}, Eg = function() {
  return Je("object", { type: Object });
}, Ag = function() {
  return Ie("integer", { type: Number, validator: function(e) {
    return Cg(e);
  } });
}, Ig = function() {
  return Ie("symbol", { validator: function(e) {
    return typeof e == "symbol";
  } });
};
function Mg(e, t) {
  if (t === void 0 && (t = "custom validation failed"), typeof e != "function")
    throw new TypeError("[VueTypes error]: You must provide a function as argument");
  return Ie(e.name || "<<anonymous function>>", { validator: function(n) {
    var r = e(n);
    return r || ye(this._vueTypes_name + " - " + t), r;
  } });
}
function Fg(e) {
  if (!on(e))
    throw new TypeError("[VueTypes error]: You must provide an array as argument.");
  var t = 'oneOf - value should be one of "' + e.join('", "') + '".', n = e.reduce(function(r, o) {
    if (o != null) {
      var i = o.constructor;
      r.indexOf(i) === -1 && r.push(i);
    }
    return r;
  }, []);
  return Ie("oneOf", { type: n.length > 0 ? n : void 0, validator: function(r) {
    var o = e.indexOf(r) !== -1;
    return o || ye(t), o;
  } });
}
function jg(e) {
  if (!on(e))
    throw new TypeError("[VueTypes error]: You must provide an array as argument");
  for (var t = !1, n = [], r = 0; r < e.length; r += 1) {
    var o = e[r];
    if (Ou(o)) {
      if (Br(o) && o._vueTypes_name === "oneOf") {
        n = n.concat(o.type);
        continue;
      }
      if (an(o.validator) && (t = !0), o.type !== !0 && o.type) {
        n = n.concat(o.type);
        continue;
      }
    }
    n.push(o);
  }
  return n = n.filter(function(i, a) {
    return n.indexOf(i) === a;
  }), Ie("oneOfType", t ? { type: n, validator: function(i) {
    var a = [], l = e.some(function(s) {
      var c = Dt(Br(s) && s._vueTypes_name === "oneOf" ? s.type || null : s, i, !0);
      return typeof c == "string" && a.push(c), c === !0;
    });
    return l || ye("oneOfType - provided value does not match any of the " + a.length + ` passed-in validators:
` + io(a.join(`
`))), l;
  } } : { type: n });
}
function Rg(e) {
  return Ie("arrayOf", { type: Array, validator: function(t) {
    var n, r = t.every(function(o) {
      return (n = Dt(e, o, !0)) === !0;
    });
    return r || ye(`arrayOf - value validation error:
` + io(n)), r;
  } });
}
function Ng(e) {
  return Ie("instanceOf", { type: e });
}
function Dg(e) {
  return Ie("objectOf", { type: Object, validator: function(t) {
    var n, r = Object.keys(t).every(function(o) {
      return (n = Dt(e, t[o], !0)) === !0;
    });
    return r || ye(`objectOf - value validation error:
` + io(n)), r;
  } });
}
function Lg(e) {
  var t = Object.keys(e), n = t.filter(function(o) {
    var i;
    return !!(!((i = e[o]) === null || i === void 0) && i.required);
  }), r = Ie("shape", { type: Object, validator: function(o) {
    var i = this;
    if (!jt(o))
      return !1;
    var a = Object.keys(o);
    if (n.length > 0 && n.some(function(s) {
      return a.indexOf(s) === -1;
    })) {
      var l = n.filter(function(s) {
        return a.indexOf(s) === -1;
      });
      return ye(l.length === 1 ? 'shape - required property "' + l[0] + '" is not defined.' : 'shape - required properties "' + l.join('", "') + '" are not defined.'), !1;
    }
    return a.every(function(s) {
      if (t.indexOf(s) === -1)
        return i._vueTypes_isLoose === !0 || (ye('shape - shape definition does not include a "' + s + '" property. Allowed keys: "' + t.join('", "') + '".'), !1);
      var c = Dt(e[s], o[s], !0);
      return typeof c == "string" && ye('shape - "' + s + `" property validation error:
 ` + io(c)), c === !0;
    });
  } });
  return Object.defineProperty(r, "_vueTypes_isLoose", { writable: !0, value: !1 }), Object.defineProperty(r, "loose", { get: function() {
    return this._vueTypes_isLoose = !0, this;
  } }), r;
}
var Ke = function() {
  function e() {
  }
  return e.extend = function(t) {
    var n = this;
    if (on(t))
      return t.forEach(function(f) {
        return n.extend(f);
      }), this;
    var r = t.name, o = t.validate, i = o !== void 0 && o, a = t.getter, l = a !== void 0 && a, s = xu(t, ["name", "validate", "getter"]);
    if (Dn(this, r))
      throw new TypeError('[VueTypes error]: Type "' + r + '" already defined');
    var c, u = s.type;
    return Br(u) ? (delete s.type, Object.defineProperty(this, r, l ? { get: function() {
      return Cl(r, u, s);
    } } : { value: function() {
      var f, d = Cl(r, u, s);
      return d.validator && (d.validator = (f = d.validator).bind.apply(f, [d].concat([].slice.call(arguments)))), d;
    } })) : (c = l ? { get: function() {
      var f = Object.assign({}, s);
      return i ? Je(r, f) : Ie(r, f);
    }, enumerable: !0 } : { value: function() {
      var f, d, p = Object.assign({}, s);
      return f = i ? Je(r, p) : Ie(r, p), p.validator && (f.validator = (d = p.validator).bind.apply(d, [f].concat([].slice.call(arguments)))), f;
    }, enumerable: !0 }, Object.defineProperty(this, r, c));
  }, yu(e, null, [{ key: "any", get: function() {
    return $g();
  } }, { key: "func", get: function() {
    return Sg().def(this.defaults.func);
  } }, { key: "bool", get: function() {
    return Og().def(this.defaults.bool);
  } }, { key: "string", get: function() {
    return Pg().def(this.defaults.string);
  } }, { key: "number", get: function() {
    return Tg().def(this.defaults.number);
  } }, { key: "array", get: function() {
    return _g().def(this.defaults.array);
  } }, { key: "object", get: function() {
    return Eg().def(this.defaults.object);
  } }, { key: "integer", get: function() {
    return Ag().def(this.defaults.integer);
  } }, { key: "symbol", get: function() {
    return Ig();
  } }]), e;
}();
function Pu(e) {
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
    return bu(r, n), yu(r, null, [{ key: "sensibleDefaults", get: function() {
      return $r({}, this.defaults);
    }, set: function(o) {
      this.defaults = o !== !1 ? $r({}, o !== !0 ? o : e) : {};
    } }]), r;
  }(Ke)).defaults = $r({}, e), t;
}
Ke.defaults = {}, Ke.custom = Mg, Ke.oneOf = Fg, Ke.instanceOf = Ng, Ke.oneOfType = jg, Ke.arrayOf = Rg, Ke.objectOf = Dg, Ke.shape = Lg, Ke.utils = { validate: function(e, t) {
  return Dt(t, e, !0) === !0;
}, toType: function(e, t, n) {
  return n === void 0 && (n = !1), n ? Je(e, t) : Ie(e, t);
} };
(function(e) {
  function t() {
    return e.apply(this, arguments) || this;
  }
  return bu(t, e), t;
})(Pu());
const z = Pu({
  func: void 0,
  bool: void 0,
  string: void 0,
  number: void 0,
  array: void 0,
  object: void 0,
  integer: void 0
});
z.extend([{
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
function O2(e) {
  return e.default = void 0, e;
}
const ra = (e, t, n) => {
  Qi(e, `[ant-design-vue: ${t}] ${n}`);
};
function Bg() {
  return "";
}
function Hg(e) {
  return e ? e.ownerDocument : window.document;
}
function Tu() {
}
const zg = () => ({
  action: z.oneOfType([z.string, z.arrayOf(z.string)]).def([]),
  showAction: z.any.def([]),
  hideAction: z.any.def([]),
  getPopupClassNameFromAlign: z.any.def(Bg),
  onPopupVisibleChange: Function,
  afterPopupVisibleChange: z.func.def(Tu),
  popup: z.any,
  arrow: z.bool.def(!0),
  popupStyle: {
    type: Object,
    default: void 0
  },
  prefixCls: z.string.def("rc-trigger-popup"),
  popupClassName: z.string.def(""),
  popupPlacement: String,
  builtinPlacements: z.object,
  popupTransitionName: String,
  popupAnimation: z.any,
  mouseEnterDelay: z.number.def(0),
  mouseLeaveDelay: z.number.def(0.1),
  zIndex: Number,
  focusDelay: z.number.def(0),
  blurDelay: z.number.def(0.15),
  getPopupContainer: Function,
  getDocument: z.func.def(Hg),
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
  popupAlign: z.object.def(() => ({})),
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
}), oa = {
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
}, Vg = m(m({}, oa), {
  mobile: {
    type: Object
  }
}), kg = m(m({}, oa), {
  mask: Boolean,
  mobile: {
    type: Object
  },
  maskAnimation: String,
  maskTransitionName: String
});
function ia(e) {
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
function _u(e) {
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
  return (a || i) && (l = ia({
    prefixCls: t,
    transitionName: a,
    animation: i
  })), $(fn, L({
    appear: !0
  }, l), {
    default: () => [Kr($("div", {
      style: {
        zIndex: r
      },
      class: `${t}-mask`
    }, null), [[Cd("if"), n]])]
  });
}
_u.displayName = "Mask";
const Wg = V({
  compatConfig: {
    MODE: 3
  },
  name: "MobilePopupInner",
  inheritAttrs: !1,
  props: Vg,
  emits: ["mouseenter", "mouseleave", "mousedown", "touchstart", "align"],
  setup(e, t) {
    let {
      expose: n,
      slots: r
    } = t;
    const o = Z();
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
          popupStyle: u,
          popupMotion: f = {},
          popupRender: d
        } = {}
      } = e, p = m({
        zIndex: a
      }, u);
      let h = He((i = r.default) === null || i === void 0 ? void 0 : i.call(r));
      h.length > 1 && (h = $("div", {
        class: `${s}-content`
      }, [h])), d && (h = d(h));
      const g = U(s, c);
      return $(fn, L({
        ref: o
      }, f), {
        default: () => [l ? $("div", {
          class: g,
          style: p
        }, [h]) : null]
      });
    };
  }
});
var qg = function(e, t, n, r) {
  function o(i) {
    return i instanceof n ? i : new n(function(a) {
      a(i);
    });
  }
  return new (n || (n = Promise))(function(i, a) {
    function l(u) {
      try {
        c(r.next(u));
      } catch (f) {
        a(f);
      }
    }
    function s(u) {
      try {
        c(r.throw(u));
      } catch (f) {
        a(f);
      }
    }
    function c(u) {
      u.done ? i(u.value) : o(u.value).then(l, s);
    }
    c((r = r.apply(e, t || [])).next());
  });
};
const $l = ["measure", "align", null, "motion"], Gg = (e, t) => {
  const n = H(null), r = H(), o = H(!1);
  function i(s) {
    o.value || (n.value = s);
  }
  function a() {
    Ee.cancel(r.value);
  }
  function l(s) {
    a(), r.value = Ee(() => {
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
  return K(e, () => {
    i("measure");
  }, {
    immediate: !0,
    flush: "post"
  }), $e(() => {
    K(n, () => {
      switch (n.value) {
        case "measure":
          t();
          break;
      }
      n.value && (r.value = Ee(() => qg(void 0, void 0, void 0, function* () {
        const s = $l.indexOf(n.value), c = $l[s + 1];
        c && s !== -1 && i(c);
      })));
    }, {
      immediate: !0,
      flush: "post"
    });
  }), ct(() => {
    o.value = !0, a();
  }), [n, l];
}, Xg = (e) => {
  const t = H({
    width: 0,
    height: 0
  });
  function n(o) {
    t.value = {
      width: o.offsetWidth,
      height: o.offsetHeight
    };
  }
  return [O(() => {
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
function Sl(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ol(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Sl(Object(n), !0).forEach(function(r) {
      Ug(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Sl(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function fi(e) {
  "@babel/helpers - typeof";
  return fi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, fi(e);
}
function Ug(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
var bn, Yg = {
  Webkit: "-webkit-",
  Moz: "-moz-",
  // IE did it wrong again ...
  ms: "-ms-",
  O: "-o-"
};
function Hr() {
  if (bn !== void 0)
    return bn;
  bn = "";
  var e = document.createElement("p").style, t = "Transform";
  for (var n in Yg)
    n + t in e && (bn = n);
  return bn;
}
function Eu() {
  return Hr() ? "".concat(Hr(), "TransitionProperty") : "transitionProperty";
}
function ao() {
  return Hr() ? "".concat(Hr(), "Transform") : "transform";
}
function Pl(e, t) {
  var n = Eu();
  n && (e.style[n] = t, n !== "transitionProperty" && (e.style.transitionProperty = t));
}
function Mo(e, t) {
  var n = ao();
  n && (e.style[n] = t, n !== "transform" && (e.style.transform = t));
}
function Kg(e) {
  return e.style.transitionProperty || e.style[Eu()];
}
function Zg(e) {
  var t = window.getComputedStyle(e, null), n = t.getPropertyValue("transform") || t.getPropertyValue(ao());
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
var Qg = /matrix\((.*)\)/, Jg = /matrix3d\((.*)\)/;
function eh(e, t) {
  var n = window.getComputedStyle(e, null), r = n.getPropertyValue("transform") || n.getPropertyValue(ao());
  if (r && r !== "none") {
    var o, i = r.match(Qg);
    if (i)
      i = i[1], o = i.split(",").map(function(l) {
        return parseFloat(l, 10);
      }), o[4] = t.x, o[5] = t.y, Mo(e, "matrix(".concat(o.join(","), ")"));
    else {
      var a = r.match(Jg)[1];
      o = a.split(",").map(function(l) {
        return parseFloat(l, 10);
      }), o[12] = t.x, o[13] = t.y, Mo(e, "matrix3d(".concat(o.join(","), ")"));
    }
  } else
    Mo(e, "translateX(".concat(t.x, "px) translateY(").concat(t.y, "px) translateZ(0)"));
}
var th = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source, Gn;
function Tl(e) {
  var t = e.style.display;
  e.style.display = "none", e.offsetHeight, e.style.display = t;
}
function Qt(e, t, n) {
  var r = n;
  if (fi(t) === "object") {
    for (var o in t)
      t.hasOwnProperty(o) && Qt(e, o, t[o]);
    return;
  }
  if (typeof r < "u") {
    typeof r == "number" && (r = "".concat(r, "px")), e.style[t] = r;
    return;
  }
  return Gn(e, t);
}
function nh(e) {
  var t, n, r, o = e.ownerDocument, i = o.body, a = o && o.documentElement;
  return t = e.getBoundingClientRect(), n = Math.floor(t.left), r = Math.floor(t.top), n -= a.clientLeft || i.clientLeft || 0, r -= a.clientTop || i.clientTop || 0, {
    left: n,
    top: r
  };
}
function Au(e, t) {
  var n = e["page".concat(t ? "Y" : "X", "Offset")], r = "scroll".concat(t ? "Top" : "Left");
  if (typeof n != "number") {
    var o = e.document;
    n = o.documentElement[r], typeof n != "number" && (n = o.body[r]);
  }
  return n;
}
function Iu(e) {
  return Au(e);
}
function Mu(e) {
  return Au(e, !0);
}
function Ln(e) {
  var t = nh(e), n = e.ownerDocument, r = n.defaultView || n.parentWindow;
  return t.left += Iu(r), t.top += Mu(r), t;
}
function aa(e) {
  return e != null && e == e.window;
}
function Fu(e) {
  return aa(e) ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
}
function rh(e, t, n) {
  var r = n, o = "", i = Fu(e);
  return r = r || i.defaultView.getComputedStyle(e, null), r && (o = r.getPropertyValue(t) || r[t]), o;
}
var oh = new RegExp("^(".concat(th, ")(?!px)[a-z%]+$"), "i"), ih = /^(top|right|bottom|left)$/, Fo = "currentStyle", jo = "runtimeStyle", yt = "left", ah = "px";
function lh(e, t) {
  var n = e[Fo] && e[Fo][t];
  if (oh.test(n) && !ih.test(t)) {
    var r = e.style, o = r[yt], i = e[jo][yt];
    e[jo][yt] = e[Fo][yt], r[yt] = t === "fontSize" ? "1em" : n || 0, n = r.pixelLeft + ah, r[yt] = o, e[jo][yt] = i;
  }
  return n === "" ? "auto" : n;
}
typeof window < "u" && (Gn = window.getComputedStyle ? rh : lh);
function cr(e, t) {
  return e === "left" ? t.useCssRight ? "right" : e : t.useCssBottom ? "bottom" : e;
}
function _l(e) {
  if (e === "left")
    return "right";
  if (e === "right")
    return "left";
  if (e === "top")
    return "bottom";
  if (e === "bottom")
    return "top";
}
function El(e, t, n) {
  Qt(e, "position") === "static" && (e.style.position = "relative");
  var r = -999, o = -999, i = cr("left", n), a = cr("top", n), l = _l(i), s = _l(a);
  i !== "left" && (r = 999), a !== "top" && (o = 999);
  var c = "", u = Ln(e);
  ("left" in t || "top" in t) && (c = Kg(e) || "", Pl(e, "none")), "left" in t && (e.style[l] = "", e.style[i] = "".concat(r, "px")), "top" in t && (e.style[s] = "", e.style[a] = "".concat(o, "px")), Tl(e);
  var f = Ln(e), d = {};
  for (var p in t)
    if (t.hasOwnProperty(p)) {
      var h = cr(p, n), g = p === "left" ? r : o, w = u[p] - f[p];
      h === p ? d[h] = g + w : d[h] = g - w;
    }
  Qt(e, d), Tl(e), ("left" in t || "top" in t) && Pl(e, c);
  var y = {};
  for (var C in t)
    if (t.hasOwnProperty(C)) {
      var v = cr(C, n), b = t[C] - u[C];
      C === v ? y[v] = d[v] + b : y[v] = d[v] - b;
    }
  Qt(e, y);
}
function sh(e, t) {
  var n = Ln(e), r = Zg(e), o = {
    x: r.x,
    y: r.y
  };
  "left" in t && (o.x = r.x + t.left - n.left), "top" in t && (o.y = r.y + t.top - n.top), eh(e, o);
}
function ch(e, t, n) {
  if (n.ignoreShake) {
    var r = Ln(e), o = r.left.toFixed(0), i = r.top.toFixed(0), a = t.left.toFixed(0), l = t.top.toFixed(0);
    if (o === a && i === l)
      return;
  }
  n.useCssRight || n.useCssBottom ? El(e, t, n) : n.useCssTransform && ao() in document.body.style ? sh(e, t) : El(e, t, n);
}
function la(e, t) {
  for (var n = 0; n < e.length; n++)
    t(e[n]);
}
function ju(e) {
  return Gn(e, "boxSizing") === "border-box";
}
var uh = ["margin", "border", "padding"], di = -1, fh = 2, pi = 1, dh = 0;
function ph(e, t, n) {
  var r = {}, o = e.style, i;
  for (i in t)
    t.hasOwnProperty(i) && (r[i] = o[i], o[i] = t[i]);
  n.call(e);
  for (i in t)
    t.hasOwnProperty(i) && (o[i] = r[i]);
}
function Cn(e, t, n) {
  var r = 0, o, i, a;
  for (i = 0; i < t.length; i++)
    if (o = t[i], o)
      for (a = 0; a < n.length; a++) {
        var l = void 0;
        o === "border" ? l = "".concat(o).concat(n[a], "Width") : l = o + n[a], r += parseFloat(Gn(e, l)) || 0;
      }
  return r;
}
var Ze = {
  getParent: function(t) {
    var n = t;
    do
      n.nodeType === 11 && n.host ? n = n.host : n = n.parentNode;
    while (n && n.nodeType !== 1 && n.nodeType !== 9);
    return n;
  }
};
la(["Width", "Height"], function(e) {
  Ze["doc".concat(e)] = function(t) {
    var n = t.document;
    return Math.max(
      // firefox chrome documentElement.scrollHeight< body.scrollHeight
      // ie standard mode : documentElement.scrollHeight> body.scrollHeight
      n.documentElement["scroll".concat(e)],
      // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
      n.body["scroll".concat(e)],
      Ze["viewport".concat(e)](n)
    );
  }, Ze["viewport".concat(e)] = function(t) {
    var n = "client".concat(e), r = t.document, o = r.body, i = r.documentElement, a = i[n];
    return r.compatMode === "CSS1Compat" && a || o && o[n] || a;
  };
});
function Al(e, t, n) {
  var r = n;
  if (aa(e))
    return t === "width" ? Ze.viewportWidth(e) : Ze.viewportHeight(e);
  if (e.nodeType === 9)
    return t === "width" ? Ze.docWidth(e) : Ze.docHeight(e);
  var o = t === "width" ? ["Left", "Right"] : ["Top", "Bottom"], i = Math.floor(t === "width" ? e.getBoundingClientRect().width : e.getBoundingClientRect().height), a = ju(e), l = 0;
  (i == null || i <= 0) && (i = void 0, l = Gn(e, t), (l == null || Number(l) < 0) && (l = e.style[t] || 0), l = Math.floor(parseFloat(l)) || 0), r === void 0 && (r = a ? pi : di);
  var s = i !== void 0 || a, c = i || l;
  return r === di ? s ? c - Cn(e, ["border", "padding"], o) : l : s ? r === pi ? c : c + (r === fh ? -Cn(e, ["border"], o) : Cn(e, ["margin"], o)) : l + Cn(e, uh.slice(r), o);
}
var mh = {
  position: "absolute",
  visibility: "hidden",
  display: "block"
};
function Il() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r, o = t[0];
  return o.offsetWidth !== 0 ? r = Al.apply(void 0, t) : ph(o, mh, function() {
    r = Al.apply(void 0, t);
  }), r;
}
la(["width", "height"], function(e) {
  var t = e.charAt(0).toUpperCase() + e.slice(1);
  Ze["outer".concat(t)] = function(r, o) {
    return r && Il(r, e, o ? dh : pi);
  };
  var n = e === "width" ? ["Left", "Right"] : ["Top", "Bottom"];
  Ze[e] = function(r, o) {
    var i = o;
    if (i !== void 0) {
      if (r) {
        var a = ju(r);
        return a && (i += Cn(r, ["padding", "border"], n)), Qt(r, e, i);
      }
      return;
    }
    return r && Il(r, e, di);
  };
});
function Ru(e, t) {
  for (var n in t)
    t.hasOwnProperty(n) && (e[n] = t[n]);
  return e;
}
var W = {
  getWindow: function(t) {
    if (t && t.document && t.setTimeout)
      return t;
    var n = t.ownerDocument || t;
    return n.defaultView || n.parentWindow;
  },
  getDocument: Fu,
  offset: function(t, n, r) {
    if (typeof n < "u")
      ch(t, n, r || {});
    else
      return Ln(t);
  },
  isWindow: aa,
  each: la,
  css: Qt,
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
  mix: Ru,
  getWindowScrollLeft: function(t) {
    return Iu(t);
  },
  getWindowScrollTop: function(t) {
    return Mu(t);
  },
  merge: function() {
    for (var t = {}, n = 0; n < arguments.length; n++)
      W.mix(t, n < 0 || arguments.length <= n ? void 0 : arguments[n]);
    return t;
  },
  viewportWidth: 0,
  viewportHeight: 0
};
Ru(W, Ze);
var Ro = W.getParent;
function mi(e) {
  if (W.isWindow(e) || e.nodeType === 9)
    return null;
  var t = W.getDocument(e), n = t.body, r, o = W.css(e, "position"), i = o === "fixed" || o === "absolute";
  if (!i)
    return e.nodeName.toLowerCase() === "html" ? null : Ro(e);
  for (r = Ro(e); r && r !== n && r.nodeType !== 9; r = Ro(r))
    if (o = W.css(r, "position"), o !== "static")
      return r;
  return null;
}
var Ml = W.getParent;
function gh(e) {
  if (W.isWindow(e) || e.nodeType === 9)
    return !1;
  var t = W.getDocument(e), n = t.body, r = null;
  for (
    r = Ml(e);
    // 修复元素位于 document.documentElement 下导致崩溃问题
    r && r !== n && r !== t;
    r = Ml(r)
  ) {
    var o = W.css(r, "position");
    if (o === "fixed")
      return !0;
  }
  return !1;
}
function sa(e, t) {
  for (var n = {
    left: 0,
    right: 1 / 0,
    top: 0,
    bottom: 1 / 0
  }, r = mi(e), o = W.getDocument(e), i = o.defaultView || o.parentWindow, a = o.body, l = o.documentElement; r; ) {
    if ((navigator.userAgent.indexOf("MSIE") === -1 || r.clientWidth !== 0) && // body may have overflow set on it, yet we still get the entire
    // viewport. In some browsers, el.offsetParent may be
    // document.documentElement, so check for that too.
    r !== a && r !== l && W.css(r, "overflow") !== "visible") {
      var s = W.offset(r);
      s.left += r.clientLeft, s.top += r.clientTop, n.top = Math.max(n.top, s.top), n.right = Math.min(
        n.right,
        // consider area without scrollBar
        s.left + r.clientWidth
      ), n.bottom = Math.min(n.bottom, s.top + r.clientHeight), n.left = Math.max(n.left, s.left);
    } else if (r === a || r === l)
      break;
    r = mi(r);
  }
  var c = null;
  if (!W.isWindow(e) && e.nodeType !== 9) {
    c = e.style.position;
    var u = W.css(e, "position");
    u === "absolute" && (e.style.position = "fixed");
  }
  var f = W.getWindowScrollLeft(i), d = W.getWindowScrollTop(i), p = W.viewportWidth(i), h = W.viewportHeight(i), g = l.scrollWidth, w = l.scrollHeight, y = window.getComputedStyle(a);
  if (y.overflowX === "hidden" && (g = i.innerWidth), y.overflowY === "hidden" && (w = i.innerHeight), e.style && (e.style.position = c), t || gh(e))
    n.left = Math.max(n.left, f), n.top = Math.max(n.top, d), n.right = Math.min(n.right, f + p), n.bottom = Math.min(n.bottom, d + h);
  else {
    var C = Math.max(g, f + p);
    n.right = Math.min(n.right, C);
    var v = Math.max(w, d + h);
    n.bottom = Math.min(n.bottom, v);
  }
  return n.top >= 0 && n.left >= 0 && n.bottom > n.top && n.right > n.left ? n : null;
}
function hh(e, t, n, r) {
  var o = W.clone(e), i = {
    width: t.width,
    height: t.height
  };
  return r.adjustX && o.left < n.left && (o.left = n.left), r.resizeWidth && o.left >= n.left && o.left + i.width > n.right && (i.width -= o.left + i.width - n.right), r.adjustX && o.left + i.width > n.right && (o.left = Math.max(n.right - i.width, n.left)), r.adjustY && o.top < n.top && (o.top = n.top), r.resizeHeight && o.top >= n.top && o.top + i.height > n.bottom && (i.height -= o.top + i.height - n.bottom), r.adjustY && o.top + i.height > n.bottom && (o.top = Math.max(n.bottom - i.height, n.top)), W.mix(o, i);
}
function ca(e) {
  var t, n, r;
  if (!W.isWindow(e) && e.nodeType !== 9)
    t = W.offset(e), n = W.outerWidth(e), r = W.outerHeight(e);
  else {
    var o = W.getWindow(e);
    t = {
      left: W.getWindowScrollLeft(o),
      top: W.getWindowScrollTop(o)
    }, n = W.viewportWidth(o), r = W.viewportHeight(o);
  }
  return t.width = n, t.height = r, t;
}
function Fl(e, t) {
  var n = t.charAt(0), r = t.charAt(1), o = e.width, i = e.height, a = e.left, l = e.top;
  return n === "c" ? l += i / 2 : n === "b" && (l += i), r === "c" ? a += o / 2 : r === "r" && (a += o), {
    left: a,
    top: l
  };
}
function ur(e, t, n, r, o) {
  var i = Fl(t, n[1]), a = Fl(e, n[0]), l = [a.left - i.left, a.top - i.top];
  return {
    left: Math.round(e.left - l[0] + r[0] - o[0]),
    top: Math.round(e.top - l[1] + r[1] - o[1])
  };
}
function jl(e, t, n) {
  return e.left < n.left || e.left + t.width > n.right;
}
function Rl(e, t, n) {
  return e.top < n.top || e.top + t.height > n.bottom;
}
function vh(e, t, n) {
  return e.left > n.right || e.left + t.width < n.left;
}
function yh(e, t, n) {
  return e.top > n.bottom || e.top + t.height < n.top;
}
function fr(e, t, n) {
  var r = [];
  return W.each(e, function(o) {
    r.push(o.replace(t, function(i) {
      return n[i];
    }));
  }), r;
}
function dr(e, t) {
  return e[t] = -e[t], e;
}
function Nl(e, t) {
  var n;
  return /%$/.test(e) ? n = parseInt(e.substring(0, e.length - 1), 10) / 100 * t : n = parseInt(e, 10), n || 0;
}
function Dl(e, t) {
  e[0] = Nl(e[0], t.width), e[1] = Nl(e[1], t.height);
}
function Nu(e, t, n, r) {
  var o = n.points, i = n.offset || [0, 0], a = n.targetOffset || [0, 0], l = n.overflow, s = n.source || e;
  i = [].concat(i), a = [].concat(a), l = l || {};
  var c = {}, u = 0, f = !!(l && l.alwaysByViewport), d = sa(s, f), p = ca(s);
  Dl(i, p), Dl(a, t);
  var h = ur(p, t, o, i, a), g = W.merge(p, h);
  if (d && (l.adjustX || l.adjustY) && r) {
    if (l.adjustX && jl(h, p, d)) {
      var w = fr(o, /[lr]/gi, {
        l: "r",
        r: "l"
      }), y = dr(i, 0), C = dr(a, 0), v = ur(p, t, w, y, C);
      vh(v, p, d) || (u = 1, o = w, i = y, a = C);
    }
    if (l.adjustY && Rl(h, p, d)) {
      var b = fr(o, /[tb]/gi, {
        t: "b",
        b: "t"
      }), S = dr(i, 1), P = dr(a, 1), x = ur(p, t, b, S, P);
      yh(x, p, d) || (u = 1, o = b, i = S, a = P);
    }
    u && (h = ur(p, t, o, i, a), W.mix(g, h));
    var _ = jl(h, p, d), A = Rl(h, p, d);
    if (_ || A) {
      var E = o;
      _ && (E = fr(o, /[lr]/gi, {
        l: "r",
        r: "l"
      })), A && (E = fr(o, /[tb]/gi, {
        t: "b",
        b: "t"
      })), o = E, i = n.offset || [0, 0], a = n.targetOffset || [0, 0];
    }
    c.adjustX = l.adjustX && _, c.adjustY = l.adjustY && A, (c.adjustX || c.adjustY) && (g = hh(h, p, d, c));
  }
  return g.width !== p.width && W.css(s, "width", W.width(s) + g.width - p.width), g.height !== p.height && W.css(s, "height", W.height(s) + g.height - p.height), W.offset(s, {
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
function bh(e, t) {
  var n = sa(e, t), r = ca(e);
  return !n || r.left + r.width <= n.left || r.top + r.height <= n.top || r.left >= n.right || r.top >= n.bottom;
}
function ua(e, t, n) {
  var r = n.target || t, o = ca(r), i = !bh(r, n.overflow && n.overflow.alwaysByViewport);
  return Nu(e, o, n, i);
}
ua.__getOffsetParent = mi;
ua.__getVisibleRectForElement = sa;
function xh(e, t, n) {
  var r, o, i = W.getDocument(e), a = i.defaultView || i.parentWindow, l = W.getWindowScrollLeft(a), s = W.getWindowScrollTop(a), c = W.viewportWidth(a), u = W.viewportHeight(a);
  "pageX" in t ? r = t.pageX : r = l + t.clientX, "pageY" in t ? o = t.pageY : o = s + t.clientY;
  var f = {
    left: r,
    top: o,
    width: 0,
    height: 0
  }, d = r >= 0 && r <= l + c && o >= 0 && o <= s + u, p = [n.points[0], "cc"];
  return Nu(e, f, Ol(Ol({}, n), {}, {
    points: p
  }), d);
}
function zr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, o = e;
  if (Array.isArray(e) && (o = Nt(e)[0]), !o)
    return null;
  const i = Hi(o, t, r);
  return i.props = n ? m(m({}, i.props), t) : i.props, at(typeof i.props.class != "object", "class must be string"), i;
}
function P2(e, t, n) {
  In(Hi(e, m({}, t)), n);
}
const Du = (e) => {
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
function wh(e, t) {
  return e === t ? !0 : !e || !t ? !1 : "pageX" in t && "pageY" in t ? e.pageX === t.pageX && e.pageY === t.pageY : "clientX" in t && "clientY" in t ? e.clientX === t.clientX && e.clientY === t.clientY : !1;
}
function Ch(e, t) {
  e !== document.activeElement && wt(t, e) && typeof e.focus == "function" && e.focus();
}
function Ll(e, t) {
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
    } = l.getBoundingClientRect(), u = Math.floor(s), f = Math.floor(c);
    (n !== u || r !== f) && Promise.resolve().then(() => {
      t({
        width: u,
        height: f
      });
    }), n = u, r = f;
  }
  const i = new ip(o);
  return e && i.observe(e), () => {
    i.disconnect();
  };
}
const $h = (e, t) => {
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
function Sh() {
  this.__data__ = [], this.size = 0;
}
function fa(e, t) {
  return e === t || e !== e && t !== t;
}
function lo(e, t) {
  for (var n = e.length; n--; )
    if (fa(e[n][0], t))
      return n;
  return -1;
}
var Oh = Array.prototype, Ph = Oh.splice;
function Th(e) {
  var t = this.__data__, n = lo(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : Ph.call(t, n, 1), --this.size, !0;
}
function _h(e) {
  var t = this.__data__, n = lo(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Eh(e) {
  return lo(this.__data__, e) > -1;
}
function Ah(e, t) {
  var n = this.__data__, r = lo(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function ut(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ut.prototype.clear = Sh;
ut.prototype.delete = Th;
ut.prototype.get = _h;
ut.prototype.has = Eh;
ut.prototype.set = Ah;
function Ih() {
  this.__data__ = new ut(), this.size = 0;
}
function Mh(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function Fh(e) {
  return this.__data__.get(e);
}
function jh(e) {
  return this.__data__.has(e);
}
var Lu = typeof global == "object" && global && global.Object === Object && global, Rh = typeof self == "object" && self && self.Object === Object && self, Xe = Lu || Rh || Function("return this")(), Ne = Xe.Symbol, Bu = Object.prototype, Nh = Bu.hasOwnProperty, Dh = Bu.toString, xn = Ne ? Ne.toStringTag : void 0;
function Lh(e) {
  var t = Nh.call(e, xn), n = e[xn];
  try {
    e[xn] = void 0;
    var r = !0;
  } catch {
  }
  var o = Dh.call(e);
  return r && (t ? e[xn] = n : delete e[xn]), o;
}
var Bh = Object.prototype, Hh = Bh.toString;
function zh(e) {
  return Hh.call(e);
}
var Vh = "[object Null]", kh = "[object Undefined]", Bl = Ne ? Ne.toStringTag : void 0;
function Lt(e) {
  return e == null ? e === void 0 ? kh : Vh : Bl && Bl in Object(e) ? Lh(e) : zh(e);
}
function lt(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Wh = "[object AsyncFunction]", qh = "[object Function]", Gh = "[object GeneratorFunction]", Xh = "[object Proxy]";
function Hu(e) {
  if (!lt(e))
    return !1;
  var t = Lt(e);
  return t == qh || t == Gh || t == Wh || t == Xh;
}
var No = Xe["__core-js_shared__"], Hl = function() {
  var e = /[^.]+$/.exec(No && No.keys && No.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Uh(e) {
  return !!Hl && Hl in e;
}
var Yh = Function.prototype, Kh = Yh.toString;
function Bt(e) {
  if (e != null) {
    try {
      return Kh.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Zh = /[\\^$.*+?()[\]{}|]/g, Qh = /^\[object .+?Constructor\]$/, Jh = Function.prototype, ev = Object.prototype, tv = Jh.toString, nv = ev.hasOwnProperty, rv = RegExp(
  "^" + tv.call(nv).replace(Zh, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function ov(e) {
  if (!lt(e) || Uh(e))
    return !1;
  var t = Hu(e) ? rv : Qh;
  return t.test(Bt(e));
}
function iv(e, t) {
  return e == null ? void 0 : e[t];
}
function Ht(e, t) {
  var n = iv(e, t);
  return ov(n) ? n : void 0;
}
var Bn = Ht(Xe, "Map"), Hn = Ht(Object, "create");
function av() {
  this.__data__ = Hn ? Hn(null) : {}, this.size = 0;
}
function lv(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var sv = "__lodash_hash_undefined__", cv = Object.prototype, uv = cv.hasOwnProperty;
function fv(e) {
  var t = this.__data__;
  if (Hn) {
    var n = t[e];
    return n === sv ? void 0 : n;
  }
  return uv.call(t, e) ? t[e] : void 0;
}
var dv = Object.prototype, pv = dv.hasOwnProperty;
function mv(e) {
  var t = this.__data__;
  return Hn ? t[e] !== void 0 : pv.call(t, e);
}
var gv = "__lodash_hash_undefined__";
function hv(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Hn && t === void 0 ? gv : t, this;
}
function Rt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Rt.prototype.clear = av;
Rt.prototype.delete = lv;
Rt.prototype.get = fv;
Rt.prototype.has = mv;
Rt.prototype.set = hv;
function vv() {
  this.size = 0, this.__data__ = {
    hash: new Rt(),
    map: new (Bn || ut)(),
    string: new Rt()
  };
}
function yv(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function so(e, t) {
  var n = e.__data__;
  return yv(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function bv(e) {
  var t = so(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function xv(e) {
  return so(this, e).get(e);
}
function wv(e) {
  return so(this, e).has(e);
}
function Cv(e, t) {
  var n = so(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function ft(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ft.prototype.clear = vv;
ft.prototype.delete = bv;
ft.prototype.get = xv;
ft.prototype.has = wv;
ft.prototype.set = Cv;
var $v = 200;
function Sv(e, t) {
  var n = this.__data__;
  if (n instanceof ut) {
    var r = n.__data__;
    if (!Bn || r.length < $v - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new ft(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Qe(e) {
  var t = this.__data__ = new ut(e);
  this.size = t.size;
}
Qe.prototype.clear = Ih;
Qe.prototype.delete = Mh;
Qe.prototype.get = Fh;
Qe.prototype.has = jh;
Qe.prototype.set = Sv;
var Ov = "__lodash_hash_undefined__";
function Pv(e) {
  return this.__data__.set(e, Ov), this;
}
function Tv(e) {
  return this.__data__.has(e);
}
function zn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new ft(); ++t < n; )
    this.add(e[t]);
}
zn.prototype.add = zn.prototype.push = Pv;
zn.prototype.has = Tv;
function _v(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function gi(e, t) {
  return e.has(t);
}
var Ev = 1, Av = 2;
function zu(e, t, n, r, o, i) {
  var a = n & Ev, l = e.length, s = t.length;
  if (l != s && !(a && s > l))
    return !1;
  var c = i.get(e), u = i.get(t);
  if (c && u)
    return c == t && u == e;
  var f = -1, d = !0, p = n & Av ? new zn() : void 0;
  for (i.set(e, t), i.set(t, e); ++f < l; ) {
    var h = e[f], g = t[f];
    if (r)
      var w = a ? r(g, h, f, t, e, i) : r(h, g, f, e, t, i);
    if (w !== void 0) {
      if (w)
        continue;
      d = !1;
      break;
    }
    if (p) {
      if (!_v(t, function(y, C) {
        if (!gi(p, C) && (h === y || o(h, y, n, r, i)))
          return p.push(C);
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
var Vr = Xe.Uint8Array;
function Iv(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, o) {
    n[++t] = [o, r];
  }), n;
}
function Mv(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var Fv = 1, jv = 2, Rv = "[object Boolean]", Nv = "[object Date]", Dv = "[object Error]", Lv = "[object Map]", Bv = "[object Number]", Hv = "[object RegExp]", zv = "[object Set]", Vv = "[object String]", kv = "[object Symbol]", Wv = "[object ArrayBuffer]", qv = "[object DataView]", zl = Ne ? Ne.prototype : void 0, Do = zl ? zl.valueOf : void 0;
function Gv(e, t, n, r, o, i, a) {
  switch (n) {
    case qv:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Wv:
      return !(e.byteLength != t.byteLength || !i(new Vr(e), new Vr(t)));
    case Rv:
    case Nv:
    case Bv:
      return fa(+e, +t);
    case Dv:
      return e.name == t.name && e.message == t.message;
    case Hv:
    case Vv:
      return e == t + "";
    case Lv:
      var l = Iv;
    case zv:
      var s = r & Fv;
      if (l || (l = Mv), e.size != t.size && !s)
        return !1;
      var c = a.get(e);
      if (c)
        return c == t;
      r |= jv, a.set(e, t);
      var u = zu(l(e), l(t), r, o, i, a);
      return a.delete(e), u;
    case kv:
      if (Do)
        return Do.call(e) == Do.call(t);
  }
  return !1;
}
function da(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var De = Array.isArray;
function Vu(e, t, n) {
  var r = t(e);
  return De(e) ? r : da(r, n(e));
}
function Xv(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, i = []; ++n < r; ) {
    var a = e[n];
    t(a, n, e) && (i[o++] = a);
  }
  return i;
}
function ku() {
  return [];
}
var Uv = Object.prototype, Yv = Uv.propertyIsEnumerable, Vl = Object.getOwnPropertySymbols, pa = Vl ? function(e) {
  return e == null ? [] : (e = Object(e), Xv(Vl(e), function(t) {
    return Yv.call(e, t);
  }));
} : ku;
function Kv(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
function et(e) {
  return e != null && typeof e == "object";
}
var Zv = "[object Arguments]";
function kl(e) {
  return et(e) && Lt(e) == Zv;
}
var Wu = Object.prototype, Qv = Wu.hasOwnProperty, Jv = Wu.propertyIsEnumerable, co = kl(/* @__PURE__ */ function() {
  return arguments;
}()) ? kl : function(e) {
  return et(e) && Qv.call(e, "callee") && !Jv.call(e, "callee");
};
function e0() {
  return !1;
}
var qu = typeof exports == "object" && exports && !exports.nodeType && exports, Wl = qu && typeof module == "object" && module && !module.nodeType && module, t0 = Wl && Wl.exports === qu, ql = t0 ? Xe.Buffer : void 0, n0 = ql ? ql.isBuffer : void 0, Vn = n0 || e0, r0 = 9007199254740991, o0 = /^(?:0|[1-9]\d*)$/;
function Gu(e, t) {
  var n = typeof e;
  return t = t ?? r0, !!t && (n == "number" || n != "symbol" && o0.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var i0 = 9007199254740991;
function ma(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= i0;
}
var a0 = "[object Arguments]", l0 = "[object Array]", s0 = "[object Boolean]", c0 = "[object Date]", u0 = "[object Error]", f0 = "[object Function]", d0 = "[object Map]", p0 = "[object Number]", m0 = "[object Object]", g0 = "[object RegExp]", h0 = "[object Set]", v0 = "[object String]", y0 = "[object WeakMap]", b0 = "[object ArrayBuffer]", x0 = "[object DataView]", w0 = "[object Float32Array]", C0 = "[object Float64Array]", $0 = "[object Int8Array]", S0 = "[object Int16Array]", O0 = "[object Int32Array]", P0 = "[object Uint8Array]", T0 = "[object Uint8ClampedArray]", _0 = "[object Uint16Array]", E0 = "[object Uint32Array]", te = {};
te[w0] = te[C0] = te[$0] = te[S0] = te[O0] = te[P0] = te[T0] = te[_0] = te[E0] = !0;
te[a0] = te[l0] = te[b0] = te[s0] = te[x0] = te[c0] = te[u0] = te[f0] = te[d0] = te[p0] = te[m0] = te[g0] = te[h0] = te[v0] = te[y0] = !1;
function A0(e) {
  return et(e) && ma(e.length) && !!te[Lt(e)];
}
function uo(e) {
  return function(t) {
    return e(t);
  };
}
var Xu = typeof exports == "object" && exports && !exports.nodeType && exports, Pn = Xu && typeof module == "object" && module && !module.nodeType && module, I0 = Pn && Pn.exports === Xu, Lo = I0 && Lu.process, ln = function() {
  try {
    var e = Pn && Pn.require && Pn.require("util").types;
    return e || Lo && Lo.binding && Lo.binding("util");
  } catch {
  }
}(), Gl = ln && ln.isTypedArray, ga = Gl ? uo(Gl) : A0, M0 = Object.prototype, F0 = M0.hasOwnProperty;
function Uu(e, t) {
  var n = De(e), r = !n && co(e), o = !n && !r && Vn(e), i = !n && !r && !o && ga(e), a = n || r || o || i, l = a ? Kv(e.length, String) : [], s = l.length;
  for (var c in e)
    (t || F0.call(e, c)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    Gu(c, s))) && l.push(c);
  return l;
}
var j0 = Object.prototype;
function fo(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || j0;
  return e === n;
}
function Yu(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var R0 = Yu(Object.keys, Object), N0 = Object.prototype, D0 = N0.hasOwnProperty;
function Ku(e) {
  if (!fo(e))
    return R0(e);
  var t = [];
  for (var n in Object(e))
    D0.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Xn(e) {
  return e != null && ma(e.length) && !Hu(e);
}
function Un(e) {
  return Xn(e) ? Uu(e) : Ku(e);
}
function hi(e) {
  return Vu(e, Un, pa);
}
var L0 = 1, B0 = Object.prototype, H0 = B0.hasOwnProperty;
function z0(e, t, n, r, o, i) {
  var a = n & L0, l = hi(e), s = l.length, c = hi(t), u = c.length;
  if (s != u && !a)
    return !1;
  for (var f = s; f--; ) {
    var d = l[f];
    if (!(a ? d in t : H0.call(t, d)))
      return !1;
  }
  var p = i.get(e), h = i.get(t);
  if (p && h)
    return p == t && h == e;
  var g = !0;
  i.set(e, t), i.set(t, e);
  for (var w = a; ++f < s; ) {
    d = l[f];
    var y = e[d], C = t[d];
    if (r)
      var v = a ? r(C, y, d, t, e, i) : r(y, C, d, e, t, i);
    if (!(v === void 0 ? y === C || o(y, C, n, r, i) : v)) {
      g = !1;
      break;
    }
    w || (w = d == "constructor");
  }
  if (g && !w) {
    var b = e.constructor, S = t.constructor;
    b != S && "constructor" in e && "constructor" in t && !(typeof b == "function" && b instanceof b && typeof S == "function" && S instanceof S) && (g = !1);
  }
  return i.delete(e), i.delete(t), g;
}
var vi = Ht(Xe, "DataView"), yi = Ht(Xe, "Promise"), bi = Ht(Xe, "Set"), xi = Ht(Xe, "WeakMap"), Xl = "[object Map]", V0 = "[object Object]", Ul = "[object Promise]", Yl = "[object Set]", Kl = "[object WeakMap]", Zl = "[object DataView]", k0 = Bt(vi), W0 = Bt(Bn), q0 = Bt(yi), G0 = Bt(bi), X0 = Bt(xi), je = Lt;
(vi && je(new vi(new ArrayBuffer(1))) != Zl || Bn && je(new Bn()) != Xl || yi && je(yi.resolve()) != Ul || bi && je(new bi()) != Yl || xi && je(new xi()) != Kl) && (je = function(e) {
  var t = Lt(e), n = t == V0 ? e.constructor : void 0, r = n ? Bt(n) : "";
  if (r)
    switch (r) {
      case k0:
        return Zl;
      case W0:
        return Xl;
      case q0:
        return Ul;
      case G0:
        return Yl;
      case X0:
        return Kl;
    }
  return t;
});
var U0 = 1, Ql = "[object Arguments]", Jl = "[object Array]", pr = "[object Object]", Y0 = Object.prototype, es = Y0.hasOwnProperty;
function K0(e, t, n, r, o, i) {
  var a = De(e), l = De(t), s = a ? Jl : je(e), c = l ? Jl : je(t);
  s = s == Ql ? pr : s, c = c == Ql ? pr : c;
  var u = s == pr, f = c == pr, d = s == c;
  if (d && Vn(e)) {
    if (!Vn(t))
      return !1;
    a = !0, u = !1;
  }
  if (d && !u)
    return i || (i = new Qe()), a || ga(e) ? zu(e, t, n, r, o, i) : Gv(e, t, s, n, r, o, i);
  if (!(n & U0)) {
    var p = u && es.call(e, "__wrapped__"), h = f && es.call(t, "__wrapped__");
    if (p || h) {
      var g = p ? e.value() : e, w = h ? t.value() : t;
      return i || (i = new Qe()), o(g, w, n, r, i);
    }
  }
  return d ? (i || (i = new Qe()), z0(e, t, n, r, o, i)) : !1;
}
function po(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !et(e) && !et(t) ? e !== e && t !== t : K0(e, t, n, r, po, o);
}
function ha(e, t) {
  return po(e, t);
}
const Z0 = {
  align: Object,
  target: [Object, Function],
  onAlign: Function,
  monitorBufferTime: Number,
  monitorWindowResize: Boolean,
  disabled: Boolean
};
function ts(e) {
  return typeof e != "function" ? null : e();
}
function ns(e) {
  return typeof e != "object" || !e ? null : e;
}
const Q0 = V({
  compatConfig: {
    MODE: 3
  },
  name: "Align",
  props: Z0,
  emits: ["align"],
  setup(e, t) {
    let {
      expose: n,
      slots: r
    } = t;
    const o = Z({}), i = Z(), [a, l] = $h(() => {
      const {
        disabled: d,
        target: p,
        align: h,
        onAlign: g
      } = e;
      if (!d && p && i.value) {
        const w = i.value;
        let y;
        const C = ts(p), v = ns(p);
        o.value.element = C, o.value.point = v, o.value.align = h;
        const {
          activeElement: b
        } = document;
        return C && Du(C) ? y = ua(w, C, h) : v && (y = xh(w, v, h)), Ch(b, w), g && y && g(w, y), !0;
      }
      return !1;
    }, O(() => e.monitorBufferTime)), s = Z({
      cancel: () => {
      }
    }), c = Z({
      cancel: () => {
      }
    }), u = () => {
      const d = e.target, p = ts(d), h = ns(d);
      i.value !== c.value.element && (c.value.cancel(), c.value.element = i.value, c.value.cancel = Ll(i.value, a)), (o.value.element !== p || !wh(o.value.point, h) || !ha(o.value.align, e.align)) && (a(), s.value.element !== p && (s.value.cancel(), s.value.element = p, s.value.cancel = Ll(p, a)));
    };
    $e(() => {
      ke(() => {
        u();
      });
    }), Zr(() => {
      ke(() => {
        u();
      });
    }), K(() => e.disabled, (d) => {
      d ? l() : a();
    }, {
      immediate: !0,
      flush: "post"
    });
    const f = Z(null);
    return K(() => e.monitorWindowResize, (d) => {
      d ? f.value || (f.value = wn(window, "resize", a)) : f.value && (f.value.remove(), f.value = null);
    }, {
      flush: "post"
    }), zi(() => {
      s.value.cancel(), c.value.cancel(), f.value && f.value.remove(), l();
    }), n({
      forceAlign: () => a(!0)
    }), () => {
      const d = r == null ? void 0 : r.default();
      return d ? zr(d[0], {
        ref: i
      }, !0, !0) : null;
    };
  }
});
It("bottomLeft", "bottomRight", "topLeft", "topRight");
const T2 = (e) => e !== void 0 && (e === "topLeft" || e === "topRight") ? "slide-down" : "slide-up", Zu = function(e) {
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
}, va = function(e) {
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
}, J0 = (e, t, n) => n !== void 0 ? n : `${e}-${t}`, ey = V({
  compatConfig: {
    MODE: 3
  },
  name: "PopupInner",
  inheritAttrs: !1,
  props: oa,
  emits: ["mouseenter", "mouseleave", "mousedown", "touchstart", "align"],
  setup(e, t) {
    let {
      expose: n,
      attrs: r,
      slots: o
    } = t;
    const i = H(), a = H(), l = H(), [s, c] = Xg($d(e, "stretch")), u = () => {
      e.stretch && c(e.getRootDomNode());
    }, f = H(!1);
    let d;
    K(() => e.visible, (P) => {
      clearTimeout(d), P ? d = setTimeout(() => {
        f.value = e.visible;
      }) : f.value = !1;
    }, {
      immediate: !0
    });
    const [p, h] = Gg(f, u), g = H(), w = () => e.point ? e.point : e.getRootDomNode, y = () => {
      var P;
      (P = i.value) === null || P === void 0 || P.forceAlign();
    }, C = (P, x) => {
      var _;
      const A = e.getClassNameFromAlign(x), E = l.value;
      l.value !== A && (l.value = A), p.value === "align" && (E !== A ? Promise.resolve().then(() => {
        y();
      }) : h(() => {
        var M;
        (M = g.value) === null || M === void 0 || M.call(g);
      }), (_ = e.onAlign) === null || _ === void 0 || _.call(e, P, x));
    }, v = O(() => {
      const P = typeof e.animation == "object" ? e.animation : ia(e);
      return ["onAfterEnter", "onAfterLeave"].forEach((x) => {
        const _ = P[x];
        P[x] = (A) => {
          h(), p.value = "stable", _ == null || _(A);
        };
      }), P;
    }), b = () => new Promise((P) => {
      g.value = P;
    });
    K([v, p], () => {
      !v.value && p.value === "motion" && h();
    }, {
      immediate: !0
    }), n({
      forceAlign: y,
      getElement: () => a.value.$el || a.value
    });
    const S = O(() => {
      var P;
      return !(!((P = e.align) === null || P === void 0) && P.points && (p.value === "align" || p.value === "stable"));
    });
    return () => {
      var P;
      const {
        zIndex: x,
        align: _,
        prefixCls: A,
        destroyPopupOnHide: E,
        onMouseenter: M,
        onMouseleave: j,
        onTouchstart: N = () => {
        },
        onMousedown: B
      } = e, T = p.value, F = [m(m({}, s.value), {
        zIndex: x,
        opacity: T === "motion" || T === "stable" || !f.value ? null : 0,
        // pointerEvents: statusValue === 'stable' ? null : 'none',
        pointerEvents: !f.value && T !== "stable" ? "none" : null
      }), r.style];
      let I = He((P = o.default) === null || P === void 0 ? void 0 : P.call(o, {
        visible: e.visible
      }));
      I.length > 1 && (I = $("div", {
        class: `${A}-content`
      }, [I]));
      const R = U(A, r.class, l.value, !e.arrow && `${A}-arrow-hidden`), G = f.value || !e.visible ? Zu(v.value.name, v.value) : {};
      return $(fn, L(L({
        ref: a
      }, G), {}, {
        onBeforeEnter: b
      }), {
        default: () => !E || e.visible ? Kr($(Q0, {
          target: w(),
          key: "popup",
          ref: i,
          monitorWindowResize: !0,
          disabled: S.value,
          align: _,
          onAlign: C
        }, {
          default: () => $("div", {
            class: R,
            onMouseenter: M,
            onMouseleave: j,
            onMousedown: Va(B, ["capture"]),
            [Ot ? "onTouchstartPassive" : "onTouchstart"]: Va(N, ["capture"]),
            style: F
          }, [I])
        }), [[Vi, f.value]]) : null
      });
    };
  }
}), ty = V({
  compatConfig: {
    MODE: 3
  },
  name: "Popup",
  inheritAttrs: !1,
  props: kg,
  setup(e, t) {
    let {
      attrs: n,
      slots: r,
      expose: o
    } = t;
    const i = H(!1), a = H(!1), l = H(), s = H();
    return K([() => e.visible, () => e.mobile], () => {
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
      }), u = a.value ? $(Wg, L(L({}, c), {}, {
        mobile: e.mobile,
        ref: l
      }), {
        default: r.default
      }) : $(ey, L(L({}, c), {}, {
        ref: l
      }), {
        default: r.default
      });
      return $("div", {
        ref: s
      }, [$(_u, c, null), u]);
    };
  }
});
function ny(e, t, n) {
  return n ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
}
function rs(e, t, n) {
  const r = e[t] || {};
  return m(m({}, r), n);
}
function ry(e, t, n, r) {
  const {
    points: o
  } = n, i = Object.keys(e);
  for (let a = 0; a < i.length; a += 1) {
    const l = i[a];
    if (ny(e[l].points, o, r))
      return `${t}-placement-${l}`;
  }
  return "";
}
const oy = {
  methods: {
    setState() {
      let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = typeof e == "function" ? e(this.$data, this.$props) : e;
      if (this.getDerivedStateFromProps) {
        const r = this.getDerivedStateFromProps(dp(this), m(m({}, this.$data), n));
        if (r === null)
          return;
        n = m(m({}, n), r || {});
      }
      m(this.$data, n), this._.isMounted && this.$forceUpdate(), ke(() => {
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
}, Qu = Symbol("PortalContextKey"), Ju = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    inTriggerContext: !0
  };
  ce(Qu, {
    inTriggerContext: t.inTriggerContext,
    shouldRender: O(() => {
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
}, iy = () => {
  Ju({}, {
    inTriggerContext: !1
  });
  const e = pe(Qu, {
    shouldRender: O(() => !1),
    inTriggerContext: !1
  });
  return {
    shouldRender: O(() => e.shouldRender.value || e.inTriggerContext === !1)
  };
}, ef = V({
  compatConfig: {
    MODE: 3
  },
  name: "Portal",
  inheritAttrs: !1,
  props: {
    getContainer: z.func.isRequired,
    didUpdate: Function
  },
  setup(e, t) {
    let {
      slots: n
    } = t, r = !0, o;
    const {
      shouldRender: i
    } = iy();
    function a() {
      i.value && (o = e.getContainer());
    }
    gc(() => {
      r = !1, a();
    }), $e(() => {
      o || a();
    });
    const l = K(i, () => {
      i.value && !o && (o = e.getContainer()), o && l();
    });
    return Zr(() => {
      ke(() => {
        var s;
        i.value && ((s = e.didUpdate) === null || s === void 0 || s.call(e, e));
      });
    }), () => {
      var s;
      return i.value ? r ? (s = n.default) === null || s === void 0 ? void 0 : s.call(n) : o ? $(hc, {
        to: o
      }, n) : null : null;
    };
  }
});
let Bo;
function ay(e) {
  if (typeof document > "u")
    return 0;
  if (Bo === void 0) {
    const t = document.createElement("div");
    t.style.width = "100%", t.style.height = "200px";
    const n = document.createElement("div"), r = n.style;
    r.position = "absolute", r.top = "0", r.left = "0", r.pointerEvents = "none", r.visibility = "hidden", r.width = "200px", r.height = "150px", r.overflow = "hidden", n.appendChild(t), document.body.appendChild(n);
    const o = t.offsetWidth;
    n.style.overflow = "scroll";
    let i = t.offsetWidth;
    o === i && (i = n.clientWidth), document.body.removeChild(n), Bo = o - i;
  }
  return Bo;
}
const ly = `vc-util-locker-${Date.now()}`;
let os = 0;
function sy() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
function cy(e) {
  const t = O(() => !!e && !!e.value);
  os += 1;
  const n = `${ly}_${os}`;
  Ve((r) => {
    if (qe()) {
      if (t.value) {
        const o = ay(), i = sy();
        jn(`
html body {
  overflow-y: hidden;
  ${i ? `width: calc(100% - ${o}px);` : ""}
}`, n);
      } else
        Rr(n);
      r(() => {
        Rr(n);
      });
    }
  }, {
    flush: "post"
  });
}
let bt = 0;
const Sr = qe(), is = (e) => {
  if (!Sr)
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
}, uy = V({
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
    getContainer: z.any,
    visible: {
      type: Boolean,
      default: void 0
    },
    autoLock: Be(),
    didUpdate: Function
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const r = H(), o = H(), i = H(), a = H(1), l = qe() && document.createElement("div"), s = () => {
      var p, h;
      r.value === l && ((h = (p = r.value) === null || p === void 0 ? void 0 : p.parentNode) === null || h === void 0 || h.removeChild(r.value)), r.value = null;
    };
    let c = null;
    const u = function() {
      return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1) || r.value && !r.value.parentNode ? (c = is(e.getContainer), c ? (c.appendChild(r.value), !0) : !1) : !0;
    }, f = () => Sr ? (r.value || (r.value = l, u(!0)), d(), r.value) : null, d = () => {
      const {
        wrapperClassName: p
      } = e;
      r.value && p && p !== r.value.className && (r.value.className = p);
    };
    return Zr(() => {
      d(), u();
    }), cy(O(() => e.autoLock && e.visible && qe() && (r.value === document.body || r.value === l))), $e(() => {
      let p = !1;
      K([() => e.visible, () => e.getContainer], (h, g) => {
        let [w, y] = h, [C, v] = g;
        Sr && (c = is(e.getContainer), c === document.body && (w && !C ? bt += 1 : p && (bt -= 1))), p && (typeof y == "function" && typeof v == "function" ? y.toString() !== v.toString() : y !== v) && s(), p = !0;
      }, {
        immediate: !0,
        flush: "post"
      }), ke(() => {
        u() || (i.value = Ee(() => {
          a.value += 1;
        }));
      });
    }), ct(() => {
      const {
        visible: p
      } = e;
      Sr && c === document.body && (bt = p && bt ? bt - 1 : bt), s(), Ee.cancel(i.value);
    }), () => {
      const {
        forceRender: p,
        visible: h
      } = e;
      let g = null;
      const w = {
        getOpenCount: () => bt,
        getContainer: f
      };
      return a.value && (p || h || o.value) && (g = $(ef, {
        getContainer: f,
        ref: o,
        didUpdate: e.didUpdate
      }, {
        default: () => {
          var y;
          return (y = n.default) === null || y === void 0 ? void 0 : y.call(n, w);
        }
      })), g;
    };
  }
}), fy = ["onClick", "onMousedown", "onTouchstart", "onMouseenter", "onMouseleave", "onFocus", "onBlur", "onContextmenu"], dy = V({
  compatConfig: {
    MODE: 3
  },
  name: "Trigger",
  mixins: [oy],
  inheritAttrs: !1,
  props: zg(),
  setup(e) {
    const t = O(() => {
      const {
        popupPlacement: o,
        popupAlign: i,
        builtinPlacements: a
      } = e;
      return o && a ? rs(a, o, i) : i;
    }), n = H(null), r = (o) => {
      n.value = o;
    };
    return {
      vcTriggerContext: pe("vcTriggerContext", {}),
      popupRef: n,
      setPopupRef: r,
      triggerRef: H(null),
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
    return this.popupVisible !== void 0 ? t = !!e.popupVisible : t = !!e.defaultPopupVisible, fy.forEach((n) => {
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
    ce("vcTriggerContext", {
      onPopupMouseDown: this.onPopupMouseDown,
      onPopupMouseenter: this.onPopupMouseenter,
      onPopupMouseleave: this.onPopupMouseleave
    }), Ju(this);
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
    this.clearDelayTimer(), this.clearOutsideHandler(), clearTimeout(this.mouseDownTimeout), Ee.cancel(this.attachId);
  },
  methods: {
    updatedCal() {
      const e = this.$props;
      if (this.$data.sPopupVisible) {
        let n;
        !this.clickOutsideHandler && (this.isClickToHide() || this.isContextmenuToShow()) && (n = e.getDocument(this.getRootDomNode()), this.clickOutsideHandler = wn(n, "mousedown", this.onDocumentClick)), this.touchOutsideHandler || (n = n || e.getDocument(this.getRootDomNode()), this.touchOutsideHandler = wn(n, "touchstart", this.onDocumentClick, Ot ? {
          passive: !1
        } : !1)), !this.contextmenuOutsideHandler1 && this.isContextmenuToShow() && (n = n || e.getDocument(this.getRootDomNode()), this.contextmenuOutsideHandler1 = wn(n, "scroll", this.onContextmenuClose)), !this.contextmenuOutsideHandler2 && this.isContextmenuToShow() && (this.contextmenuOutsideHandler2 = wn(window, "blur", this.onContextmenuClose));
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
      if (e && e.relatedTarget && !e.relatedTarget.setTimeout && wt((t = this.popupRef) === null || t === void 0 ? void 0 : t.getElement(), e.relatedTarget))
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
      wt(e.target, e.relatedTarget || document.activeElement) || (this.fireEvents("onBlur", e), this.clearDelayTimer(), this.isBlurToHide() && this.delaySetPopupVisible(!1, this.$props.blurDelay));
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
      (!wt(n, t) || this.isContextMenuOnly()) && !wt(r, t) && !this.hasPopupMouseDown && this.delaySetPopupVisible(!1, 0.1);
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
        const i = ((t = (e = this.triggerRef) === null || e === void 0 ? void 0 : e.$el) === null || t === void 0 ? void 0 : t.nodeName) === "#comment" ? null : St(this.triggerRef);
        return St(o(i));
      }
      try {
        const i = ((r = (n = this.triggerRef) === null || n === void 0 ? void 0 : n.$el) === null || r === void 0 ? void 0 : r.nodeName) === "#comment" ? null : St(this.triggerRef);
        if (i)
          return i;
      } catch {
      }
      return St(this);
    },
    handleGetPopupClassFromAlign(e) {
      const t = [], n = this.$props, {
        popupPlacement: r,
        builtinPlacements: o,
        prefixCls: i,
        alignPoint: a,
        getPopupClassNameFromAlign: l
      } = n;
      return r && o && t.push(ry(o, i, e, a)), l && t.push(l(e)), t.join(" ");
    },
    getPopupAlign() {
      const e = this.$props, {
        popupPlacement: t,
        popupAlign: n,
        builtinPlacements: r
      } = e;
      return t && r ? rs(r, t, n) : n;
    },
    getComponent() {
      const e = {};
      this.isMouseEnterToShow() && (e.onMouseenter = this.onPopupMouseenter), this.isMouseLeaveToHide() && (e.onMouseleave = this.onPopupMouseleave), e.onMousedown = this.onPopupMouseDown, e[Ot ? "onTouchstartPassive" : "onTouchstart"] = this.onPopupMouseDown;
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
        mask: u,
        maskAnimation: f,
        maskTransitionName: d,
        zIndex: p,
        stretch: h,
        alignPoint: g,
        mobile: w,
        arrow: y,
        forceRender: C
      } = this.$props, {
        sPopupVisible: v,
        point: b
      } = this.$data, S = m(m({
        prefixCls: o,
        arrow: y,
        destroyPopupOnHide: i,
        visible: v,
        point: g ? b : null,
        align: this.align,
        animation: l,
        getClassNameFromAlign: t,
        stretch: h,
        getRootDomNode: n,
        mask: u,
        zIndex: p,
        transitionName: s,
        maskAnimation: f,
        maskTransitionName: d,
        class: a,
        style: c,
        onAlign: r.onPopupAlign || Tu
      }, e), {
        ref: this.setPopupRef,
        mobile: w,
        forceRender: C
      });
      return $(ty, S, {
        default: this.$slots.popup || (() => pp(this, "popup"))
      });
    },
    attachParent(e) {
      Ee.cancel(this.attachId);
      const {
        getPopupContainer: t,
        getDocument: n
      } = this.$props, r = this.getRootDomNode();
      let o;
      t ? (r || t.length === 0) && (o = t(r)) : o = n(this.getRootDomNode()).body, o ? o.appendChild(e) : this.attachId = Ee(() => {
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
      this.clearDelayTimer(), r !== e && (cp(this, "popupVisible") || this.setState({
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
      const n = Ya(this);
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
    } = this, t = Nt(fp(this)), {
      alignPoint: n,
      getPopupContainer: r
    } = this.$props, o = t[0];
    this.childOriginEvents = Ya(o);
    const i = {
      key: "trigger"
    };
    this.isContextmenuToShow() ? i.onContextmenu = this.onContextmenu : i.onContextmenu = this.createTwoChains("onContextmenu"), this.isClickToHide() || this.isClickToShow() ? (i.onClick = this.onClick, i.onMousedown = this.onMousedown, i[Ot ? "onTouchstartPassive" : "onTouchstart"] = this.onTouchstart) : (i.onClick = this.createTwoChains("onClick"), i.onMousedown = this.createTwoChains("onMousedown"), i[Ot ? "onTouchstartPassive" : "onTouchstart"] = this.createTwoChains("onTouchstart")), this.isMouseEnterToShow() ? (i.onMouseenter = this.onMouseenter, n && (i.onMousemove = this.onMouseMove)) : i.onMouseenter = this.createTwoChains("onMouseenter"), this.isMouseLeaveToHide() ? i.onMouseleave = this.onMouseleave : i.onMouseleave = this.createTwoChains("onMouseleave"), this.isFocusToShow() || this.isBlurToHide() ? (i.onFocus = this.onFocus, i.onBlur = this.onBlur) : (i.onFocus = this.createTwoChains("onFocus"), i.onBlur = (c) => {
      c && (!c.relatedTarget || !wt(c.target, c.relatedTarget)) && this.createTwoChains("onBlur")(c);
    });
    const a = U(o && o.props && o.props.class, e.class);
    a && (i.class = a);
    const l = zr(o, m(m({}, i), {
      ref: "triggerRef"
    }), !0, !0), s = $(uy, {
      key: "portal",
      getContainer: r && (() => r(this.getRootDomNode())),
      didUpdate: this.handlePortalUpdate,
      visible: this.$data.sPopupVisible
    }, {
      default: this.getComponent
    });
    return $(Ae, null, [l, s]);
  }
});
function xt(e) {
  const t = typeof e == "function" ? e() : e, n = Z(t);
  function r(o) {
    n.value = o;
  }
  return [n, r];
}
var py = Symbol("iconContext"), tf = function() {
  return pe(py, {
    prefixCls: Z("anticon"),
    rootClassName: Z(""),
    csp: Z()
  });
};
function ya() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function my(e, t) {
  return e && e.contains ? e.contains(t) : !1;
}
var as = "data-vc-order", gy = "vc-icon-key", wi = /* @__PURE__ */ new Map();
function nf() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : gy;
}
function ba(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function hy(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function rf(e) {
  return Array.from((wi.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function of(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!ya())
    return null;
  var n = t.csp, r = t.prepend, o = document.createElement("style");
  o.setAttribute(as, hy(r)), n && n.nonce && (o.nonce = n.nonce), o.innerHTML = e;
  var i = ba(t), a = i.firstChild;
  if (r) {
    if (r === "queue") {
      var l = rf(i).filter(function(s) {
        return ["prepend", "prependQueue"].includes(s.getAttribute(as));
      });
      if (l.length)
        return i.insertBefore(o, l[l.length - 1].nextSibling), o;
    }
    i.insertBefore(o, a);
  } else
    i.appendChild(o);
  return o;
}
function vy(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = ba(t);
  return rf(n).find(function(r) {
    return r.getAttribute(nf(t)) === e;
  });
}
function yy(e, t) {
  var n = wi.get(e);
  if (!n || !my(document, n)) {
    var r = of("", t), o = r.parentNode;
    wi.set(e, o), e.removeChild(r);
  }
}
function by(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = ba(n);
  yy(r, n);
  var o = vy(t, n);
  if (o)
    return n.csp && n.csp.nonce && o.nonce !== n.csp.nonce && (o.nonce = n.csp.nonce), o.innerHTML !== e && (o.innerHTML = e), o;
  var i = of(e, n);
  return i.setAttribute(nf(n), t), i;
}
function ls(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      xy(e, o, n[o]);
    });
  }
  return e;
}
function xy(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function wy(e, t) {
  process.env.NODE_ENV !== "production" && !e && console !== void 0 && console.error("Warning: ".concat(t));
}
function Cy(e, t) {
  wy(e, "[@ant-design/icons-vue] ".concat(t));
}
function ss(e) {
  return typeof e == "object" && typeof e.name == "string" && typeof e.theme == "string" && (typeof e.icon == "object" || typeof e.icon == "function");
}
function Ci(e, t, n) {
  return n ? Uo(e.tag, ls({
    key: t
  }, n, e.attrs), (e.children || []).map(function(r, o) {
    return Ci(r, "".concat(t, "-").concat(e.tag, "-").concat(o));
  })) : Uo(e.tag, ls({
    key: t
  }, e.attrs), (e.children || []).map(function(r, o) {
    return Ci(r, "".concat(t, "-").concat(e.tag, "-").concat(o));
  }));
}
function af(e) {
  return Ft(e)[0];
}
function lf(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var $y = `
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
function sf(e) {
  return e && e.getRootNode && e.getRootNode();
}
function Sy(e) {
  return ya() ? sf(e) instanceof ShadowRoot : !1;
}
function Oy(e) {
  return Sy(e) ? sf(e) : null;
}
var Py = function() {
  var t = tf(), n = t.prefixCls, r = t.csp, o = un(), i = $y;
  n && (i = i.replace(/anticon/g, n.value)), ke(function() {
    if (ya()) {
      var a = o.vnode.el, l = Oy(a);
      by(i, "@ant-design-vue-icons", {
        prepend: !0,
        csp: r.value,
        attachTo: l
      });
    }
  });
}, Ty = ["icon", "primaryColor", "secondaryColor"];
function _y(e, t) {
  if (e == null)
    return {};
  var n = Ey(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Ey(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Or(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      Ay(e, o, n[o]);
    });
  }
  return e;
}
function Ay(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Tn = We({
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
});
function Iy(e) {
  var t = e.primaryColor, n = e.secondaryColor;
  Tn.primaryColor = t, Tn.secondaryColor = n || af(t), Tn.calculated = !!n;
}
function My() {
  return Or({}, Tn);
}
var ht = function(t, n) {
  var r = Or({}, t, n.attrs), o = r.icon, i = r.primaryColor, a = r.secondaryColor, l = _y(r, Ty), s = Tn;
  if (i && (s = {
    primaryColor: i,
    secondaryColor: a || af(i)
  }), Cy(ss(o), "icon should be icon definiton, but got ".concat(o)), !ss(o))
    return null;
  var c = o;
  return c && typeof c.icon == "function" && (c = Or({}, c, {
    icon: c.icon(s.primaryColor, s.secondaryColor)
  })), Ci(c.icon, "svg-".concat(c.name), Or({}, l, {
    "data-icon": c.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }));
};
ht.props = {
  icon: Object,
  primaryColor: String,
  secondaryColor: String,
  focusable: String
};
ht.inheritAttrs = !1;
ht.displayName = "IconBase";
ht.getTwoToneColors = My;
ht.setTwoToneColors = Iy;
function Fy(e, t) {
  return Dy(e) || Ny(e, t) || Ry(e, t) || jy();
}
function jy() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ry(e, t) {
  if (e) {
    if (typeof e == "string")
      return cs(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return cs(e, t);
  }
}
function cs(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Ny(e, t) {
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
function Dy(e) {
  if (Array.isArray(e))
    return e;
}
function cf(e) {
  var t = lf(e), n = Fy(t, 2), r = n[0], o = n[1];
  return ht.setTwoToneColors({
    primaryColor: r,
    secondaryColor: o
  });
}
function Ly() {
  var e = ht.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var By = V({
  name: "InsertStyles",
  setup: function() {
    return Py(), function() {
      return null;
    };
  }
}), Hy = ["class", "icon", "spin", "rotate", "tabindex", "twoToneColor", "onClick"];
function zy(e, t) {
  return qy(e) || Wy(e, t) || ky(e, t) || Vy();
}
function Vy() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ky(e, t) {
  if (e) {
    if (typeof e == "string")
      return us(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return us(e, t);
  }
}
function us(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Wy(e, t) {
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
function qy(e) {
  if (Array.isArray(e))
    return e;
}
function fs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      $n(e, o, n[o]);
    });
  }
  return e;
}
function $n(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Gy(e, t) {
  if (e == null)
    return {};
  var n = Xy(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Xy(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
cf(Hm.primary);
var be = function(t, n) {
  var r, o = fs({}, t, n.attrs), i = o.class, a = o.icon, l = o.spin, s = o.rotate, c = o.tabindex, u = o.twoToneColor, f = o.onClick, d = Gy(o, Hy), p = tf(), h = p.prefixCls, g = p.rootClassName, w = (r = {}, $n(r, g.value, !!g.value), $n(r, h.value, !0), $n(r, "".concat(h.value, "-").concat(a.name), !!a.name), $n(r, "".concat(h.value, "-spin"), !!l || a.name === "loading"), r), y = c;
  y === void 0 && f && (y = -1);
  var C = s ? {
    msTransform: "rotate(".concat(s, "deg)"),
    transform: "rotate(".concat(s, "deg)")
  } : void 0, v = lf(u), b = zy(v, 2), S = b[0], P = b[1];
  return $("span", fs({
    role: "img",
    "aria-label": a.name
  }, d, {
    onClick: f,
    class: [w, i],
    tabindex: y
  }), [$(ht, {
    icon: a,
    primaryColor: S,
    secondaryColor: P,
    style: C
  }, null), $(By, null, null)]);
};
be.props = {
  spin: Boolean,
  rotate: Number,
  icon: Object,
  twoToneColor: [String, Array]
};
be.displayName = "AntdIcon";
be.inheritAttrs = !1;
be.getTwoToneColor = Ly;
be.setTwoToneColor = cf;
var Uy = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" };
function ds(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      Yy(e, o, n[o]);
    });
  }
  return e;
}
function Yy(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var gt = function(t, n) {
  var r = ds({}, t, n.attrs);
  return $(be, ds({}, r, {
    icon: Uy
  }), null);
};
gt.displayName = "LoadingOutlined";
gt.inheritAttrs = !1;
var Ky = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" };
function ps(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      Zy(e, o, n[o]);
    });
  }
  return e;
}
function Zy(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Yn = function(t, n) {
  var r = ps({}, t, n.attrs);
  return $(be, ps({}, r, {
    icon: Ky
  }), null);
};
Yn.displayName = "CloseOutlined";
Yn.inheritAttrs = !1;
var Qy = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" };
function ms(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      Jy(e, o, n[o]);
    });
  }
  return e;
}
function Jy(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var zt = function(t, n) {
  var r = ms({}, t, n.attrs);
  return $(be, ms({}, r, {
    icon: Qy
  }), null);
};
zt.displayName = "CloseCircleFilled";
zt.inheritAttrs = !1;
function xa(e) {
  const t = Symbol("contextKey");
  return {
    useProvide: (o, i) => {
      const a = We({});
      return ce(t, a), Ve(() => {
        m(a, o, i || {});
      }), a;
    },
    useInject: () => pe(t, e) || {}
  };
}
const kr = Symbol("ContextProps"), Wr = Symbol("InternalContextProps"), eb = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : O(() => !0);
  const n = Z(/* @__PURE__ */ new Map()), r = (a, l) => {
    n.value.set(a, l), n.value = new Map(n.value);
  }, o = (a) => {
    n.value.delete(a), n.value = new Map(n.value);
  }, i = un();
  K([t, n], () => {
    if (process.env.NODE_ENV !== "production" && t.value && n.value.size > 1) {
      ra(!1, "Form.Item", `FormItem can only collect one field item, you haved set ${[...n.value.values()].map((l) => `\`${l.name}\``).join(", ")} ${n.value.size} field items.
        You can set not need to be collected fields into \`a-form-item-rest\``);
      let a = i;
      for (; a.parent; )
        console.warn("at", a.type), a = a.parent;
    }
  }), ce(kr, e), ce(Wr, {
    addFormItemField: r,
    removeFormItemField: o
  });
}, $i = {
  id: O(() => {
  }),
  onFieldBlur: () => {
  },
  onFieldChange: () => {
  },
  clearValidate: () => {
  }
}, Si = {
  addFormItemField: () => {
  },
  removeFormItemField: () => {
  }
}, tb = () => {
  const e = pe(Wr, Si), t = Symbol("FormItemFieldKey"), n = un();
  return e.addFormItemField(t, n.type), ct(() => {
    e.removeFormItemField(t);
  }), ce(Wr, Si), ce(kr, $i), pe(kr, $i);
}, Oi = V({
  compatConfig: {
    MODE: 3
  },
  name: "AFormItemRest",
  setup(e, t) {
    let {
      slots: n
    } = t;
    return ce(Wr, Si), ce(kr, $i), () => {
      var r;
      return (r = n.default) === null || r === void 0 ? void 0 : r.call(n);
    };
  }
}), uf = xa({}), _2 = V({
  name: "NoFormStatus",
  setup(e, t) {
    let {
      slots: n
    } = t;
    return uf.useProvide({}), () => {
      var r;
      return (r = n.default) === null || r === void 0 ? void 0 : r.call(n);
    };
  }
}), nb = (e) => {
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
}, rb = (e) => {
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
}, ob = tt("Space", (e) => [rb(e), nb(e)]);
var ib = "[object Symbol]";
function mo(e) {
  return typeof e == "symbol" || et(e) && Lt(e) == ib;
}
function go(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var ab = 1 / 0, gs = Ne ? Ne.prototype : void 0, hs = gs ? gs.toString : void 0;
function ff(e) {
  if (typeof e == "string")
    return e;
  if (De(e))
    return go(e, ff) + "";
  if (mo(e))
    return hs ? hs.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -ab ? "-0" : t;
}
var lb = /\s/;
function sb(e) {
  for (var t = e.length; t-- && lb.test(e.charAt(t)); )
    ;
  return t;
}
var cb = /^\s+/;
function ub(e) {
  return e && e.slice(0, sb(e) + 1).replace(cb, "");
}
var vs = NaN, fb = /^[-+]0x[0-9a-f]+$/i, db = /^0b[01]+$/i, pb = /^0o[0-7]+$/i, mb = parseInt;
function Pi(e) {
  if (typeof e == "number")
    return e;
  if (mo(e))
    return vs;
  if (lt(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = lt(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = ub(e);
  var n = db.test(e);
  return n || pb.test(e) ? mb(e.slice(2), n ? 2 : 8) : fb.test(e) ? vs : +e;
}
var ys = 1 / 0, gb = 17976931348623157e292;
function hb(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = Pi(e), e === ys || e === -ys) {
    var t = e < 0 ? -1 : 1;
    return t * gb;
  }
  return e === e ? e : 0;
}
function vb(e) {
  var t = hb(e), n = t % 1;
  return t === t ? n ? t - n : t : 0;
}
function wa(e) {
  return e;
}
var bs = Object.create, yb = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!lt(t))
      return {};
    if (bs)
      return bs(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}();
function bb(e, t, n) {
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
function xb(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
var wb = 800, Cb = 16, $b = Date.now;
function Sb(e) {
  var t = 0, n = 0;
  return function() {
    var r = $b(), o = Cb - (r - n);
    if (n = r, o > 0) {
      if (++t >= wb)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Ob(e) {
  return function() {
    return e;
  };
}
var qr = function() {
  try {
    var e = Ht(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Pb = qr ? function(e, t) {
  return qr(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Ob(t),
    writable: !0
  });
} : wa, df = Sb(Pb);
function Tb(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; )
    ;
  return e;
}
function pf(e, t, n, r) {
  for (var o = e.length, i = n + -1; ++i < o; )
    if (t(e[i], i, e))
      return i;
  return -1;
}
function _b(e) {
  return e !== e;
}
function Eb(e, t, n) {
  for (var r = n - 1, o = e.length; ++r < o; )
    if (e[r] === t)
      return r;
  return -1;
}
function Ab(e, t, n) {
  return t === t ? Eb(e, t, n) : pf(e, _b, n);
}
function Ib(e, t) {
  var n = e == null ? 0 : e.length;
  return !!n && Ab(e, t, 0) > -1;
}
function mf(e, t, n) {
  t == "__proto__" && qr ? qr(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
var Mb = Object.prototype, Fb = Mb.hasOwnProperty;
function gf(e, t, n) {
  var r = e[t];
  (!(Fb.call(e, t) && fa(r, n)) || n === void 0 && !(t in e)) && mf(e, t, n);
}
function Kn(e, t, n, r) {
  var o = !n;
  n || (n = {});
  for (var i = -1, a = t.length; ++i < a; ) {
    var l = t[i], s = void 0;
    s === void 0 && (s = e[l]), o ? mf(n, l, s) : gf(n, l, s);
  }
  return n;
}
var xs = Math.max;
function hf(e, t, n) {
  return t = xs(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, i = xs(r.length - t, 0), a = Array(i); ++o < i; )
      a[o] = r[t + o];
    o = -1;
    for (var l = Array(t + 1); ++o < t; )
      l[o] = r[o];
    return l[t] = n(a), bb(e, this, l);
  };
}
function jb(e, t) {
  return df(hf(e, t, wa), e + "");
}
function Rb(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var Nb = Object.prototype, Db = Nb.hasOwnProperty;
function Lb(e) {
  if (!lt(e))
    return Rb(e);
  var t = fo(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !Db.call(e, r)) || n.push(r);
  return n;
}
function Ca(e) {
  return Xn(e) ? Uu(e, !0) : Lb(e);
}
var Bb = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Hb = /^\w*$/;
function $a(e, t) {
  if (De(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || mo(e) ? !0 : Hb.test(e) || !Bb.test(e) || t != null && e in Object(t);
}
var zb = "Expected a function";
function Sa(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(zb);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], i = n.cache;
    if (i.has(o))
      return i.get(o);
    var a = e.apply(this, r);
    return n.cache = i.set(o, a) || i, a;
  };
  return n.cache = new (Sa.Cache || ft)(), n;
}
Sa.Cache = ft;
var Vb = 500;
function kb(e) {
  var t = Sa(e, function(r) {
    return n.size === Vb && n.clear(), r;
  }), n = t.cache;
  return t;
}
var Wb = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, qb = /\\(\\)?/g, Gb = kb(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Wb, function(n, r, o, i) {
    t.push(o ? i.replace(qb, "$1") : r || n);
  }), t;
});
function Xb(e) {
  return e == null ? "" : ff(e);
}
function ho(e, t) {
  return De(e) ? e : $a(e, t) ? [e] : Gb(Xb(e));
}
var Ub = 1 / 0;
function Zn(e) {
  if (typeof e == "string" || mo(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Ub ? "-0" : t;
}
function Oa(e, t) {
  t = ho(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[Zn(t[n++])];
  return n && n == r ? e : void 0;
}
function Yb(e, t, n) {
  var r = e == null ? void 0 : Oa(e, t);
  return r === void 0 ? n : r;
}
var ws = Ne ? Ne.isConcatSpreadable : void 0;
function Kb(e) {
  return De(e) || co(e) || !!(ws && e && e[ws]);
}
function Zb(e, t, n, r, o) {
  var i = -1, a = e.length;
  for (n || (n = Kb), o || (o = []); ++i < a; ) {
    var l = e[i];
    n(l) ? da(o, l) : o[o.length] = l;
  }
  return o;
}
function Qb(e) {
  var t = e == null ? 0 : e.length;
  return t ? Zb(e) : [];
}
function Jb(e) {
  return df(hf(e, void 0, Qb), e + "");
}
var Pa = Yu(Object.getPrototypeOf, Object), e1 = "[object Object]", t1 = Function.prototype, n1 = Object.prototype, vf = t1.toString, r1 = n1.hasOwnProperty, o1 = vf.call(Object);
function i1(e) {
  if (!et(e) || Lt(e) != e1)
    return !1;
  var t = Pa(e);
  if (t === null)
    return !0;
  var n = r1.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && vf.call(n) == o1;
}
function a1(e, t, n) {
  var r = -1, o = e.length;
  t < 0 && (t = -t > o ? 0 : o + t), n = n > o ? o : n, n < 0 && (n += o), o = t > n ? 0 : n - t >>> 0, t >>>= 0;
  for (var i = Array(o); ++r < o; )
    i[r] = e[r + t];
  return i;
}
function l1(e, t) {
  return e && Kn(t, Un(t), e);
}
function s1(e, t) {
  return e && Kn(t, Ca(t), e);
}
var yf = typeof exports == "object" && exports && !exports.nodeType && exports, Cs = yf && typeof module == "object" && module && !module.nodeType && module, c1 = Cs && Cs.exports === yf, $s = c1 ? Xe.Buffer : void 0, Ss = $s ? $s.allocUnsafe : void 0;
function u1(e, t) {
  if (t)
    return e.slice();
  var n = e.length, r = Ss ? Ss(n) : new e.constructor(n);
  return e.copy(r), r;
}
function f1(e, t) {
  return Kn(e, pa(e), t);
}
var d1 = Object.getOwnPropertySymbols, bf = d1 ? function(e) {
  for (var t = []; e; )
    da(t, pa(e)), e = Pa(e);
  return t;
} : ku;
function p1(e, t) {
  return Kn(e, bf(e), t);
}
function xf(e) {
  return Vu(e, Ca, bf);
}
var m1 = Object.prototype, g1 = m1.hasOwnProperty;
function h1(e) {
  var t = e.length, n = new e.constructor(t);
  return t && typeof e[0] == "string" && g1.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
function Ta(e) {
  var t = new e.constructor(e.byteLength);
  return new Vr(t).set(new Vr(e)), t;
}
function v1(e, t) {
  var n = t ? Ta(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var y1 = /\w*$/;
function b1(e) {
  var t = new e.constructor(e.source, y1.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var Os = Ne ? Ne.prototype : void 0, Ps = Os ? Os.valueOf : void 0;
function x1(e) {
  return Ps ? Object(Ps.call(e)) : {};
}
function w1(e, t) {
  var n = t ? Ta(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var C1 = "[object Boolean]", $1 = "[object Date]", S1 = "[object Map]", O1 = "[object Number]", P1 = "[object RegExp]", T1 = "[object Set]", _1 = "[object String]", E1 = "[object Symbol]", A1 = "[object ArrayBuffer]", I1 = "[object DataView]", M1 = "[object Float32Array]", F1 = "[object Float64Array]", j1 = "[object Int8Array]", R1 = "[object Int16Array]", N1 = "[object Int32Array]", D1 = "[object Uint8Array]", L1 = "[object Uint8ClampedArray]", B1 = "[object Uint16Array]", H1 = "[object Uint32Array]";
function z1(e, t, n) {
  var r = e.constructor;
  switch (t) {
    case A1:
      return Ta(e);
    case C1:
    case $1:
      return new r(+e);
    case I1:
      return v1(e, n);
    case M1:
    case F1:
    case j1:
    case R1:
    case N1:
    case D1:
    case L1:
    case B1:
    case H1:
      return w1(e, n);
    case S1:
      return new r();
    case O1:
    case _1:
      return new r(e);
    case P1:
      return b1(e);
    case T1:
      return new r();
    case E1:
      return x1(e);
  }
}
function V1(e) {
  return typeof e.constructor == "function" && !fo(e) ? yb(Pa(e)) : {};
}
var k1 = "[object Map]";
function W1(e) {
  return et(e) && je(e) == k1;
}
var Ts = ln && ln.isMap, q1 = Ts ? uo(Ts) : W1, G1 = "[object Set]";
function X1(e) {
  return et(e) && je(e) == G1;
}
var _s = ln && ln.isSet, U1 = _s ? uo(_s) : X1, Y1 = 1, K1 = 2, Z1 = 4, wf = "[object Arguments]", Q1 = "[object Array]", J1 = "[object Boolean]", ex = "[object Date]", tx = "[object Error]", Cf = "[object Function]", nx = "[object GeneratorFunction]", rx = "[object Map]", ox = "[object Number]", $f = "[object Object]", ix = "[object RegExp]", ax = "[object Set]", lx = "[object String]", sx = "[object Symbol]", cx = "[object WeakMap]", ux = "[object ArrayBuffer]", fx = "[object DataView]", dx = "[object Float32Array]", px = "[object Float64Array]", mx = "[object Int8Array]", gx = "[object Int16Array]", hx = "[object Int32Array]", vx = "[object Uint8Array]", yx = "[object Uint8ClampedArray]", bx = "[object Uint16Array]", xx = "[object Uint32Array]", ee = {};
ee[wf] = ee[Q1] = ee[ux] = ee[fx] = ee[J1] = ee[ex] = ee[dx] = ee[px] = ee[mx] = ee[gx] = ee[hx] = ee[rx] = ee[ox] = ee[$f] = ee[ix] = ee[ax] = ee[lx] = ee[sx] = ee[vx] = ee[yx] = ee[bx] = ee[xx] = !0;
ee[tx] = ee[Cf] = ee[cx] = !1;
function _n(e, t, n, r, o, i) {
  var a, l = t & Y1, s = t & K1, c = t & Z1;
  if (n && (a = o ? n(e, r, o, i) : n(e)), a !== void 0)
    return a;
  if (!lt(e))
    return e;
  var u = De(e);
  if (u) {
    if (a = h1(e), !l)
      return xb(e, a);
  } else {
    var f = je(e), d = f == Cf || f == nx;
    if (Vn(e))
      return u1(e, l);
    if (f == $f || f == wf || d && !o) {
      if (a = s || d ? {} : V1(e), !l)
        return s ? p1(e, s1(a, e)) : f1(e, l1(a, e));
    } else {
      if (!ee[f])
        return o ? e : {};
      a = z1(e, f, l);
    }
  }
  i || (i = new Qe());
  var p = i.get(e);
  if (p)
    return p;
  i.set(e, a), U1(e) ? e.forEach(function(w) {
    a.add(_n(w, t, n, w, e, i));
  }) : q1(e) && e.forEach(function(w, y) {
    a.set(y, _n(w, t, n, y, e, i));
  });
  var h = c ? s ? xf : hi : s ? Ca : Un, g = u ? void 0 : h(e);
  return Tb(g || e, function(w, y) {
    g && (y = w, w = e[y]), gf(a, y, _n(w, t, n, y, e, i));
  }), a;
}
var wx = 1, Cx = 4;
function Pr(e) {
  return _n(e, wx | Cx);
}
var $x = 1, Sx = 2;
function Ox(e, t, n, r) {
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
      var u = new Qe(), f;
      if (!(f === void 0 ? po(c, s, $x | Sx, r, u) : f))
        return !1;
    }
  }
  return !0;
}
function Sf(e) {
  return e === e && !lt(e);
}
function Px(e) {
  for (var t = Un(e), n = t.length; n--; ) {
    var r = t[n], o = e[r];
    t[n] = [r, o, Sf(o)];
  }
  return t;
}
function Of(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function Tx(e) {
  var t = Px(e);
  return t.length == 1 && t[0][2] ? Of(t[0][0], t[0][1]) : function(n) {
    return n === e || Ox(n, e, t);
  };
}
function _x(e, t) {
  return e != null && t in Object(e);
}
function Ex(e, t, n) {
  t = ho(t, e);
  for (var r = -1, o = t.length, i = !1; ++r < o; ) {
    var a = Zn(t[r]);
    if (!(i = e != null && n(e, a)))
      break;
    e = e[a];
  }
  return i || ++r != o ? i : (o = e == null ? 0 : e.length, !!o && ma(o) && Gu(a, o) && (De(e) || co(e)));
}
function Ax(e, t) {
  return e != null && Ex(e, t, _x);
}
var Ix = 1, Mx = 2;
function Fx(e, t) {
  return $a(e) && Sf(t) ? Of(Zn(e), t) : function(n) {
    var r = Yb(n, e);
    return r === void 0 && r === t ? Ax(n, e) : po(t, r, Ix | Mx);
  };
}
function jx(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function Rx(e) {
  return function(t) {
    return Oa(t, e);
  };
}
function Nx(e) {
  return $a(e) ? jx(Zn(e)) : Rx(e);
}
function Pf(e) {
  return typeof e == "function" ? e : e == null ? wa : typeof e == "object" ? De(e) ? Fx(e[0], e[1]) : Tx(e) : Nx(e);
}
var Ho = function() {
  return Xe.Date.now();
}, Dx = "Expected a function", Lx = Math.max, Bx = Math.min;
function Hx(e, t, n) {
  var r, o, i, a, l, s, c = 0, u = !1, f = !1, d = !0;
  if (typeof e != "function")
    throw new TypeError(Dx);
  t = Pi(t) || 0, lt(n) && (u = !!n.leading, f = "maxWait" in n, i = f ? Lx(Pi(n.maxWait) || 0, t) : i, d = "trailing" in n ? !!n.trailing : d);
  function p(P) {
    var x = r, _ = o;
    return r = o = void 0, c = P, a = e.apply(_, x), a;
  }
  function h(P) {
    return c = P, l = setTimeout(y, t), u ? p(P) : a;
  }
  function g(P) {
    var x = P - s, _ = P - c, A = t - x;
    return f ? Bx(A, i - _) : A;
  }
  function w(P) {
    var x = P - s, _ = P - c;
    return s === void 0 || x >= t || x < 0 || f && _ >= i;
  }
  function y() {
    var P = Ho();
    if (w(P))
      return C(P);
    l = setTimeout(y, g(P));
  }
  function C(P) {
    return l = void 0, d && r ? p(P) : (r = o = void 0, a);
  }
  function v() {
    l !== void 0 && clearTimeout(l), c = 0, r = s = o = l = void 0;
  }
  function b() {
    return l === void 0 ? a : C(Ho());
  }
  function S() {
    var P = Ho(), x = w(P);
    if (r = arguments, o = this, s = P, x) {
      if (l === void 0)
        return h(s);
      if (f)
        return clearTimeout(l), l = setTimeout(y, t), p(s);
    }
    return l === void 0 && (l = setTimeout(y, t)), a;
  }
  return S.cancel = v, S.flush = b, S;
}
function zx(e) {
  return et(e) && Xn(e);
}
function Vx(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function kx(e) {
  return function(t, n, r) {
    var o = Object(t);
    if (!Xn(t)) {
      var i = Pf(n);
      t = Un(t), n = function(l) {
        return i(o[l], l, o);
      };
    }
    var a = e(t, n, r);
    return a > -1 ? o[i ? t[a] : a] : void 0;
  };
}
var Wx = Math.max;
function qx(e, t, n) {
  var r = e == null ? 0 : e.length;
  if (!r)
    return -1;
  var o = n == null ? 0 : vb(n);
  return o < 0 && (o = Wx(r + o, 0)), pf(e, Pf(t), o);
}
var Gx = kx(qx), Xx = Math.min;
function Ux(e, t, n) {
  for (var r = Ib, o = e[0].length, i = e.length, a = i, l = Array(i), s = 1 / 0, c = []; a--; ) {
    var u = e[a];
    a && t && (u = go(u, uo(t))), s = Xx(u.length, s), l[a] = o >= 120 && u.length >= 120 ? new zn(a && u) : void 0;
  }
  u = e[0];
  var f = -1, d = l[0];
  e:
    for (; ++f < o && c.length < s; ) {
      var p = u[f], h = p;
      if (p = p !== 0 ? p : 0, !(d ? gi(d, h) : r(c, h))) {
        for (a = i; --a; ) {
          var g = l[a];
          if (!(g ? gi(g, h) : r(e[a], h)))
            continue e;
        }
        d && d.push(h), c.push(p);
      }
    }
  return c;
}
function Yx(e) {
  return zx(e) ? e : [];
}
var Kx = jb(function(e) {
  var t = go(e, Yx);
  return t.length && t[0] === e[0] ? Ux(t) : [];
});
function Zx(e, t) {
  return t.length < 2 ? e : Oa(e, a1(t, 0, -1));
}
var Qx = "[object Map]", Jx = "[object Set]", ew = Object.prototype, tw = ew.hasOwnProperty;
function Tf(e) {
  if (e == null)
    return !0;
  if (Xn(e) && (De(e) || typeof e == "string" || typeof e.splice == "function" || Vn(e) || ga(e) || co(e)))
    return !e.length;
  var t = je(e);
  if (t == Qx || t == Jx)
    return !e.size;
  if (fo(e))
    return !Ku(e).length;
  for (var n in e)
    if (tw.call(e, n))
      return !1;
  return !0;
}
function nw(e, t) {
  return t = ho(t, e), e = Zx(e, t), e == null || delete e[Zn(Vx(t))];
}
function rw(e) {
  return i1(e) ? void 0 : e;
}
var ow = 1, iw = 2, aw = 4, lw = Jb(function(e, t) {
  var n = {};
  if (e == null)
    return n;
  var r = !1;
  t = go(t, function(i) {
    return i = ho(i, e), r || (r = i.length > 1), i;
  }), Kn(e, xf(e), n), r && (n = _n(n, ow | iw | aw, rw));
  for (var o = t.length; o--; )
    nw(n, t[o]);
  return n;
});
const sw = () => ({
  compactSize: String,
  compactDirection: z.oneOf(It("horizontal", "vertical")).def("horizontal"),
  isFirstItem: Be(),
  isLastItem: Be()
}), vo = xa(null), cw = (e, t) => {
  const n = vo.useInject(), r = O(() => {
    if (!n || Tf(n))
      return "";
    const {
      compactDirection: o,
      isFirstItem: i,
      isLastItem: a
    } = n, l = o === "vertical" ? "-vertical-" : "-";
    return U({
      [`${e.value}-compact${l}item`]: !0,
      [`${e.value}-compact${l}first-item`]: i,
      [`${e.value}-compact${l}last-item`]: a,
      [`${e.value}-compact${l}item-rtl`]: t.value === "rtl"
    });
  });
  return {
    compactSize: O(() => n == null ? void 0 : n.compactSize),
    compactDirection: O(() => n == null ? void 0 : n.compactDirection),
    compactItemClassnames: r
  };
}, E2 = V({
  name: "NoCompactStyle",
  setup(e, t) {
    let {
      slots: n
    } = t;
    return vo.useProvide(null), () => {
      var r;
      return (r = n.default) === null || r === void 0 ? void 0 : r.call(n);
    };
  }
}), uw = () => ({
  prefixCls: String,
  size: {
    type: String
  },
  direction: z.oneOf(It("horizontal", "vertical")).def("horizontal"),
  align: z.oneOf(It("start", "end", "center", "baseline")),
  block: {
    type: Boolean,
    default: void 0
  }
}), fw = V({
  name: "CompactItem",
  props: sw(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return vo.useProvide(e), () => {
      var r;
      return (r = n.default) === null || r === void 0 ? void 0 : r.call(n);
    };
  }
});
V({
  name: "ASpaceCompact",
  inheritAttrs: !1,
  props: uw(),
  setup(e, t) {
    let {
      attrs: n,
      slots: r
    } = t;
    const {
      prefixCls: o,
      direction: i
    } = Se("space-compact", e), a = vo.useInject(), [l, s] = ob(o), c = O(() => U(o.value, s.value, {
      [`${o.value}-rtl`]: i.value === "rtl",
      [`${o.value}-block`]: e.block,
      [`${o.value}-vertical`]: e.direction === "vertical"
    }));
    return () => {
      var u;
      const f = He(((u = r.default) === null || u === void 0 ? void 0 : u.call(r)) || []);
      return f.length === 0 ? null : l($("div", L(L({}, n), {}, {
        class: [c.value, n.class]
      }), [f.map((d, p) => {
        var h;
        const g = d && d.key || `${o.value}-item-${p}`, w = !a || Tf(a);
        return $(fw, {
          key: g,
          compactSize: (h = e.size) !== null && h !== void 0 ? h : "middle",
          compactDirection: e.direction,
          isFirstItem: p === 0 && (w || (a == null ? void 0 : a.isFirstItem)),
          isLastItem: p === f.length - 1 && (w || (a == null ? void 0 : a.isLastItem))
        }, {
          default: () => [d]
        });
      })]));
    };
  }
});
const dw = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), pw = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), mw = function(e, t, n, r) {
  const i = (arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1) ? "&" : "";
  return {
    [`
      ${i}${e}-enter,
      ${i}${e}-appear
    `]: m(m({}, dw(r)), {
      animationPlayState: "paused"
    }),
    [`${i}${e}-leave`]: m(m({}, pw(r)), {
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
}, _a = new se("antZoomIn", {
  "0%": {
    transform: "scale(0.2)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), gw = new se("antZoomOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.2)",
    opacity: 0
  }
}), Es = new se("antZoomBigIn", {
  "0%": {
    transform: "scale(0.8)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), As = new se("antZoomBigOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.8)",
    opacity: 0
  }
}), hw = new se("antZoomUpIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  }
}), vw = new se("antZoomUpOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  }
}), yw = new se("antZoomLeftIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  }
}), bw = new se("antZoomLeftOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  }
}), xw = new se("antZoomRightIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  }
}), ww = new se("antZoomRightOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  }
}), Cw = new se("antZoomDownIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  }
}), $w = new se("antZoomDownOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  }
}), Sw = {
  zoom: {
    inKeyframes: _a,
    outKeyframes: gw
  },
  "zoom-big": {
    inKeyframes: Es,
    outKeyframes: As
  },
  "zoom-big-fast": {
    inKeyframes: Es,
    outKeyframes: As
  },
  "zoom-left": {
    inKeyframes: yw,
    outKeyframes: bw
  },
  "zoom-right": {
    inKeyframes: xw,
    outKeyframes: ww
  },
  "zoom-up": {
    inKeyframes: hw,
    outKeyframes: vw
  },
  "zoom-down": {
    inKeyframes: Cw,
    outKeyframes: $w
  }
}, Ow = (e, t) => {
  const {
    antCls: n
  } = e, r = `${n}-${t}`, {
    inKeyframes: o,
    outKeyframes: i
  } = Sw[t];
  return [mw(r, o, i, t === "zoom-big-fast" ? e.motionDurationFast : e.motionDurationMid), {
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
}, Pw = (e) => ({
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
function Tw(e, t, n) {
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
function _w(e, t, n) {
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
function Ew(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    focus: !0
  };
  const {
    componentCls: n
  } = e, r = `${n}-compact`;
  return {
    [r]: m(m({}, Tw(e, r, t)), _w(n, r, t))
  };
}
var Aw = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z" } }, { tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }] }, name: "check-circle", theme: "outlined" };
function Is(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      Iw(e, o, n[o]);
    });
  }
  return e;
}
function Iw(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ea = function(t, n) {
  var r = Is({}, t, n.attrs);
  return $(be, Is({}, r, {
    icon: Aw
  }), null);
};
Ea.displayName = "CheckCircleOutlined";
Ea.inheritAttrs = !1;
var Mw = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { tag: "path", attrs: { d: "M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z" } }] }, name: "exclamation-circle", theme: "outlined" };
function Ms(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      Fw(e, o, n[o]);
    });
  }
  return e;
}
function Fw(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Aa = function(t, n) {
  var r = Ms({}, t, n.attrs);
  return $(be, Ms({}, r, {
    icon: Mw
  }), null);
};
Aa.displayName = "ExclamationCircleOutlined";
Aa.inheritAttrs = !1;
var jw = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { tag: "path", attrs: { d: "M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z" } }] }, name: "info-circle", theme: "outlined" };
function Fs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      Rw(e, o, n[o]);
    });
  }
  return e;
}
function Rw(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ia = function(t, n) {
  var r = Fs({}, t, n.attrs);
  return $(be, Fs({}, r, {
    icon: jw
  }), null);
};
Ia.displayName = "InfoCircleOutlined";
Ia.inheritAttrs = !1;
var Nw = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm0 76c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm128.01 198.83c.03 0 .05.01.09.06l45.02 45.01a.2.2 0 01.05.09.12.12 0 010 .07c0 .02-.01.04-.05.08L557.25 512l127.87 127.86a.27.27 0 01.05.06v.02a.12.12 0 010 .07c0 .03-.01.05-.05.09l-45.02 45.02a.2.2 0 01-.09.05.12.12 0 01-.07 0c-.02 0-.04-.01-.08-.05L512 557.25 384.14 685.12c-.04.04-.06.05-.08.05a.12.12 0 01-.07 0c-.03 0-.05-.01-.09-.05l-45.02-45.02a.2.2 0 01-.05-.09.12.12 0 010-.07c0-.02.01-.04.06-.08L466.75 512 338.88 384.14a.27.27 0 01-.05-.06l-.01-.02a.12.12 0 010-.07c0-.03.01-.05.05-.09l45.02-45.02a.2.2 0 01.09-.05.12.12 0 01.07 0c.02 0 .04.01.08.06L512 466.75l127.86-127.86c.04-.05.06-.06.08-.06a.12.12 0 01.07 0z" } }] }, name: "close-circle", theme: "outlined" };
function js(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      Dw(e, o, n[o]);
    });
  }
  return e;
}
function Dw(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ma = function(t, n) {
  var r = js({}, t, n.attrs);
  return $(be, js({}, r, {
    icon: Nw
  }), null);
};
Ma.displayName = "CloseCircleOutlined";
Ma.inheritAttrs = !1;
var Lw = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" };
function Rs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      Bw(e, o, n[o]);
    });
  }
  return e;
}
function Bw(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Vt = function(t, n) {
  var r = Rs({}, t, n.attrs);
  return $(be, Rs({}, r, {
    icon: Lw
  }), null);
};
Vt.displayName = "CheckCircleFilled";
Vt.inheritAttrs = !1;
var Hw = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" };
function Ns(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      zw(e, o, n[o]);
    });
  }
  return e;
}
function zw(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var kt = function(t, n) {
  var r = Ns({}, t, n.attrs);
  return $(be, Ns({}, r, {
    icon: Hw
  }), null);
};
kt.displayName = "ExclamationCircleFilled";
kt.inheritAttrs = !1;
var Vw = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" };
function Ds(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      kw(e, o, n[o]);
    });
  }
  return e;
}
function kw(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var mn = function(t, n) {
  var r = Ds({}, t, n.attrs);
  return $(be, Ds({}, r, {
    icon: Vw
  }), null);
};
mn.displayName = "InfoCircleFilled";
mn.inheritAttrs = !1;
const mr = ["xxxl", "xxl", "xl", "lg", "md", "sm", "xs"], Ww = (e) => ({
  xs: `(max-width: ${e.screenXSMax}px)`,
  sm: `(min-width: ${e.screenSM}px)`,
  md: `(min-width: ${e.screenMD}px)`,
  lg: `(min-width: ${e.screenLG}px)`,
  xl: `(min-width: ${e.screenXL}px)`,
  xxl: `(min-width: ${e.screenXXL}px)`,
  xxxl: `{min-width: ${e.screenXXXL}px}`
});
function qw() {
  const [, e] = pn();
  return O(() => {
    const t = Ww(e.value), n = /* @__PURE__ */ new Map();
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
              matches: u
            } = c;
            this.dispatch(m(m({}, o), {
              [i]: u
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
const Me = {
  adjustX: 1,
  adjustY: 1
}, Fe = [0, 0], _f = {
  left: {
    points: ["cr", "cl"],
    overflow: Me,
    offset: [-4, 0],
    targetOffset: Fe
  },
  right: {
    points: ["cl", "cr"],
    overflow: Me,
    offset: [4, 0],
    targetOffset: Fe
  },
  top: {
    points: ["bc", "tc"],
    overflow: Me,
    offset: [0, -4],
    targetOffset: Fe
  },
  bottom: {
    points: ["tc", "bc"],
    overflow: Me,
    offset: [0, 4],
    targetOffset: Fe
  },
  topLeft: {
    points: ["bl", "tl"],
    overflow: Me,
    offset: [0, -4],
    targetOffset: Fe
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: Me,
    offset: [-4, 0],
    targetOffset: Fe
  },
  topRight: {
    points: ["br", "tr"],
    overflow: Me,
    offset: [0, -4],
    targetOffset: Fe
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: Me,
    offset: [4, 0],
    targetOffset: Fe
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: Me,
    offset: [0, 4],
    targetOffset: Fe
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: Me,
    offset: [4, 0],
    targetOffset: Fe
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: Me,
    offset: [0, 4],
    targetOffset: Fe
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: Me,
    offset: [-4, 0],
    targetOffset: Fe
  }
}, Gw = {
  prefixCls: String,
  id: String,
  overlayInnerStyle: z.any
}, Xw = V({
  compatConfig: {
    MODE: 3
  },
  name: "TooltipContent",
  props: Gw,
  setup(e, t) {
    let {
      slots: n
    } = t;
    return () => {
      var r;
      return $("div", {
        class: `${e.prefixCls}-inner`,
        id: e.id,
        role: "tooltip",
        style: e.overlayInnerStyle
      }, [(r = n.overlay) === null || r === void 0 ? void 0 : r.call(n)]);
    };
  }
});
var Uw = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
function Ls() {
}
const Yw = V({
  compatConfig: {
    MODE: 3
  },
  name: "Tooltip",
  inheritAttrs: !1,
  props: {
    trigger: z.any.def(["hover"]),
    defaultVisible: {
      type: Boolean,
      default: void 0
    },
    visible: {
      type: Boolean,
      default: void 0
    },
    placement: z.string.def("right"),
    transitionName: String,
    animation: z.any,
    afterVisibleChange: z.func.def(() => {
    }),
    overlayStyle: {
      type: Object,
      default: void 0
    },
    overlayClassName: String,
    prefixCls: z.string.def("rc-tooltip"),
    mouseEnterDelay: z.number.def(0.1),
    mouseLeaveDelay: z.number.def(0.1),
    getPopupContainer: Function,
    destroyTooltipOnHide: {
      type: Boolean,
      default: !1
    },
    align: z.object.def(() => ({})),
    arrowContent: z.any.def(null),
    tipId: String,
    builtinPlacements: z.object,
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
    const i = H(), a = () => {
      const {
        prefixCls: u,
        tipId: f,
        overlayInnerStyle: d
      } = e;
      return [e.arrow ? $("div", {
        class: `${u}-arrow`,
        key: "arrow"
      }, [hp(n, e, "arrowContent")]) : null, $(Xw, {
        key: "content",
        prefixCls: u,
        id: f,
        overlayInnerStyle: d
      }, {
        overlay: n.overlay
      })];
    };
    o({
      getPopupDomNode: () => i.value.getPopupDomNode(),
      triggerDOM: i,
      forcePopupAlign: () => {
        var u;
        return (u = i.value) === null || u === void 0 ? void 0 : u.forcePopupAlign();
      }
    });
    const s = H(!1), c = H(!1);
    return Ve(() => {
      const {
        destroyTooltipOnHide: u
      } = e;
      if (typeof u == "boolean")
        s.value = u;
      else if (u && typeof u == "object") {
        const {
          keepParent: f
        } = u;
        s.value = f === !0, c.value = f === !1;
      }
    }), () => {
      const {
        overlayClassName: u,
        trigger: f,
        mouseEnterDelay: d,
        mouseLeaveDelay: p,
        overlayStyle: h,
        prefixCls: g,
        afterVisibleChange: w,
        transitionName: y,
        animation: C,
        placement: v,
        align: b,
        destroyTooltipOnHide: S,
        defaultVisible: P
      } = e, x = Uw(e, ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "afterVisibleChange", "transitionName", "animation", "placement", "align", "destroyTooltipOnHide", "defaultVisible"]), _ = m({}, x);
      e.visible !== void 0 && (_.popupVisible = e.visible);
      const A = m(m(m({
        popupClassName: u,
        prefixCls: g,
        action: f,
        builtinPlacements: _f,
        popupPlacement: v,
        popupAlign: b,
        afterPopupVisibleChange: w,
        popupTransitionName: y,
        popupAnimation: C,
        defaultPopupVisible: P,
        destroyPopupOnHide: s.value,
        autoDestroy: c.value,
        mouseLeaveDelay: p,
        popupStyle: h,
        mouseEnterDelay: d
      }, _), r), {
        onPopupVisibleChange: e.onVisibleChange || Ls,
        onPopupAlign: e.onPopupAlign || Ls,
        ref: i,
        arrow: !!e.arrow,
        popup: a()
      });
      return $(dy, A, {
        default: n.default
      });
    };
  }
}), Kw = () => ({
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
  overlayStyle: ie(),
  overlayInnerStyle: ie(),
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
  align: ie(),
  builtinPlacements: ie(),
  children: Array,
  /** @deprecated Please use `onOpenChange` instead. */
  onVisibleChange: Function,
  /** @deprecated Please use `onUpdate:open` instead. */
  "onUpdate:visible": Function,
  onOpenChange: Function,
  "onUpdate:open": Function
}), Zw = {
  adjustX: 1,
  adjustY: 1
}, Bs = {
  adjustX: 0,
  adjustY: 0
}, Qw = [0, 0];
function Hs(e) {
  return typeof e == "boolean" ? e ? Zw : Bs : m(m({}, Bs), e);
}
function Jw(e) {
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
      overflow: Hs(o),
      targetOffset: Qw
    }) : m(m({}, _f[l]), {
      overflow: Hs(o)
    }), a[l].ignoreShake = !0;
  }), a;
}
function eC() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  for (let t = 0, n = e.length; t < n; t++)
    if (e[t] !== void 0)
      return e[t];
}
const tC = Lr.map((e) => `${e}-inverse`), nC = ["success", "processing", "error", "default", "warning"];
function rC(e) {
  return (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0) ? [...tC, ...Lr].includes(e) : Lr.includes(e);
}
function A2(e) {
  return nC.includes(e);
}
function oC(e, t) {
  const n = rC(t), r = U({
    [`${e}-${t}`]: t && n
  }), o = {}, i = {};
  return t && !n && (o.background = t, i["--antd-arrow-background-color"] = t), {
    className: r,
    overlayStyle: o,
    arrowStyle: i
  };
}
function gr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return e.map((n) => `${t}${n}`).join(",");
}
const Ef = 8;
function iC(e) {
  const t = Ef, {
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
function aC(e, t) {
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
    contentRadius: u = e.borderRadiusLG,
    limitVerticalRadius: f
  } = t, {
    dropdownArrowOffsetVertical: d,
    dropdownArrowOffset: p
  } = iC({
    sizePopupArrow: r,
    contentRadius: u,
    borderRadiusOuter: a,
    limitVerticalRadius: f
  }), h = r / 2 + o;
  return {
    [n]: {
      // ============================ Basic ============================
      [`${n}-arrow`]: [m(m({
        position: "absolute",
        zIndex: 1,
        display: "block"
      }, Jm(r, i, a, s, l)), {
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
      [gr(["&-placement-topLeft", "&-placement-top", "&-placement-topRight"].map((g) => g += ":not(&-arrow-hidden)"), c)]: {
        paddingBottom: h
      },
      // >>>>> Bottom
      [gr(["&-placement-bottomLeft", "&-placement-bottom", "&-placement-bottomRight"].map((g) => g += ":not(&-arrow-hidden)"), c)]: {
        paddingTop: h
      },
      // >>>>> Left
      [gr(["&-placement-leftTop", "&-placement-left", "&-placement-leftBottom"].map((g) => g += ":not(&-arrow-hidden)"), c)]: {
        paddingRight: {
          _skip_check_: !0,
          value: h
        }
      },
      // >>>>> Right
      [gr(["&-placement-rightTop", "&-placement-right", "&-placement-rightBottom"].map((g) => g += ":not(&-arrow-hidden)"), c)]: {
        paddingLeft: {
          _skip_check_: !0,
          value: h
        }
      }
    }
  };
}
const lC = (e) => {
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
    paddingXS: u,
    tooltipRadiusOuter: f
  } = e;
  return [
    {
      [t]: m(m(m(m({}, qn(e)), {
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
          padding: `${c / 2}px ${u}px`,
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
            borderRadius: Math.min(i, Ef)
          }
        },
        [`${t}-content`]: {
          position: "relative"
        }
      }), eg(e, (d, p) => {
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
    aC(Ge(e, {
      borderRadiusOuter: f
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
}, sC = (e, t) => tt("Tooltip", (r) => {
  if ((t == null ? void 0 : t.value) === !1)
    return [];
  const {
    borderRadius: o,
    colorTextLightSolid: i,
    colorBgDefault: a,
    borderRadiusOuter: l
  } = r, s = Ge(r, {
    // default variables
    tooltipMaxWidth: 250,
    tooltipColor: i,
    tooltipBorderRadius: o,
    tooltipBg: a,
    tooltipRadiusOuter: l > 4 ? 4 : l
  });
  return [lC(s), Ow(r, "zoom-big-fast")];
}, (r) => {
  let {
    zIndexPopupBase: o,
    colorBgSpotlight: i
  } = r;
  return {
    zIndexPopup: o + 70,
    colorBgDefault: i
  };
})(e), cC = (e, t) => {
  const n = {}, r = m({}, e);
  return t.forEach((o) => {
    e && o in e && (n[o] = e[o], delete r[o]);
  }), {
    picked: n,
    omitted: r
  };
}, uC = () => m(m({}, Kw()), {
  title: z.any
}), I2 = () => ({
  trigger: "hover",
  align: {},
  placement: "top",
  mouseEnterDelay: 0.1,
  mouseLeaveDelay: 0.1,
  arrowPointAtCenter: !1,
  autoAdjustOverflow: !0
}), fC = V({
  compatConfig: {
    MODE: 3
  },
  name: "ATooltip",
  inheritAttrs: !1,
  props: qi(uC(), {
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
    process.env.NODE_ENV !== "production" && [["visible", "open"], ["onVisibleChange", "onOpenChange"]].forEach((E) => {
      let [M, j] = E;
      at(e[M] === void 0, "Tooltip", `\`${M}\` is deprecated, please use \`${j}\` instead.`);
    });
    const {
      prefixCls: a,
      getPopupContainer: l,
      direction: s,
      rootPrefixCls: c
    } = Se("tooltip", e), u = O(() => {
      var E;
      return (E = e.open) !== null && E !== void 0 ? E : e.visible;
    }), f = Z(eC([e.open, e.visible])), d = Z();
    let p;
    K(u, (E) => {
      Ee.cancel(p), p = Ee(() => {
        f.value = !!E;
      });
    });
    const h = () => {
      var E;
      const M = (E = e.title) !== null && E !== void 0 ? E : n.title;
      return !M && M !== 0;
    }, g = (E) => {
      const M = h();
      u.value === void 0 && (f.value = M ? !1 : E), M || (r("update:visible", E), r("visibleChange", E), r("update:open", E), r("openChange", E));
    };
    i({
      getPopupDomNode: () => d.value.getPopupDomNode(),
      open: f,
      forcePopupAlign: () => {
        var E;
        return (E = d.value) === null || E === void 0 ? void 0 : E.forcePopupAlign();
      }
    });
    const y = O(() => {
      var E;
      const {
        builtinPlacements: M,
        autoAdjustOverflow: j,
        arrow: N,
        arrowPointAtCenter: B
      } = e;
      let T = B;
      return typeof N == "object" && (T = (E = N.pointAtCenter) !== null && E !== void 0 ? E : B), M || Jw({
        arrowPointAtCenter: T,
        autoAdjustOverflow: j
      });
    }), C = (E) => E || E === "", v = (E) => {
      const M = E.type;
      if (typeof M == "object" && E.props && ((M.__ANT_BUTTON === !0 || M === "button") && C(E.props.disabled) || M.__ANT_SWITCH === !0 && (C(E.props.disabled) || C(E.props.loading)) || M.__ANT_RADIO === !0 && C(E.props.disabled))) {
        const {
          picked: j,
          omitted: N
        } = cC(mp(E), ["position", "left", "right", "top", "bottom", "float", "display", "zIndex"]), B = m(m({
          display: "inline-block"
        }, j), {
          cursor: "not-allowed",
          lineHeight: 1,
          width: E.props && E.props.block ? "100%" : void 0
        }), T = m(m({}, N), {
          pointerEvents: "none"
        }), F = zr(E, {
          style: T
        }, !0);
        return $("span", {
          style: B,
          class: `${a.value}-disabled-compatible-wrapper`
        }, [F]);
      }
      return E;
    }, b = () => {
      var E, M;
      return (E = e.title) !== null && E !== void 0 ? E : (M = n.title) === null || M === void 0 ? void 0 : M.call(n);
    }, S = (E, M) => {
      const j = y.value, N = Object.keys(j).find((B) => {
        var T, F;
        return j[B].points[0] === ((T = M.points) === null || T === void 0 ? void 0 : T[0]) && j[B].points[1] === ((F = M.points) === null || F === void 0 ? void 0 : F[1]);
      });
      if (N) {
        const B = E.getBoundingClientRect(), T = {
          top: "50%",
          left: "50%"
        };
        N.indexOf("top") >= 0 || N.indexOf("Bottom") >= 0 ? T.top = `${B.height - M.offset[1]}px` : (N.indexOf("Top") >= 0 || N.indexOf("bottom") >= 0) && (T.top = `${-M.offset[1]}px`), N.indexOf("left") >= 0 || N.indexOf("Right") >= 0 ? T.left = `${B.width - M.offset[0]}px` : (N.indexOf("right") >= 0 || N.indexOf("Left") >= 0) && (T.left = `${-M.offset[0]}px`), E.style.transformOrigin = `${T.left} ${T.top}`;
      }
    }, P = O(() => oC(a.value, e.color)), x = O(() => o["data-popover-inject"]), [_, A] = sC(a, O(() => !x.value));
    return () => {
      var E, M;
      const {
        openClassName: j,
        overlayClassName: N,
        overlayStyle: B,
        overlayInnerStyle: T
      } = e;
      let F = (M = Nt((E = n.default) === null || E === void 0 ? void 0 : E.call(n))) !== null && M !== void 0 ? M : null;
      F = F.length === 1 ? F[0] : F;
      let I = f.value;
      if (u.value === void 0 && h() && (I = !1), !F)
        return null;
      const R = v(Sc(F) && !gp(F) ? F : $("span", null, [F])), k = U({
        [j || `${a.value}-open`]: !0,
        [R.props && R.props.class]: R.props && R.props.class
      }), G = U(N, {
        [`${a.value}-rtl`]: s.value === "rtl"
      }, P.value.className, A.value), Q = m(m({}, P.value.overlayStyle), T), re = P.value.arrowStyle, fe = m(m(m({}, o), e), {
        prefixCls: a.value,
        arrow: !!e.arrow,
        getPopupContainer: l == null ? void 0 : l.value,
        builtinPlacements: y.value,
        visible: I,
        ref: d,
        overlayClassName: G,
        overlayStyle: m(m({}, re), B),
        overlayInnerStyle: Q,
        onVisibleChange: g,
        onPopupAlign: S,
        transitionName: J0(c.value, "zoom-big-fast", e.transitionName)
      });
      return _($(Yw, fe, {
        default: () => [f.value ? zr(R, {
          class: k
        }) : R],
        arrowContent: () => $("span", {
          class: `${a.value}-arrow-content`
        }, null),
        overlay: b
      }));
    };
  }
}), dC = Jr(fC), pC = (e) => {
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
}, mC = tt("Wave", (e) => [pC(e)]);
function gC(e) {
  const t = (e || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
  return t && t[1] && t[2] && t[3] ? !(t[1] === t[2] && t[2] === t[3]) : !0;
}
function zo(e) {
  return e && e !== "#fff" && e !== "#ffffff" && e !== "rgb(255, 255, 255)" && e !== "rgba(255, 255, 255, 1)" && gC(e) && !/rgba\((?:\d*, ){3}0\)/.test(e) && // any transparent rgba color
  e !== "transparent";
}
function hC(e) {
  const {
    borderTopColor: t,
    borderColor: n,
    backgroundColor: r
  } = getComputedStyle(e);
  return zo(t) ? t : zo(n) ? n : zo(r) ? r : null;
}
function Vo(e) {
  return Number.isNaN(e) ? 0 : e;
}
const vC = V({
  props: {
    target: ie(),
    className: String
  },
  setup(e) {
    const t = H(null), [n, r] = xt(null), [o, i] = xt([]), [a, l] = xt(0), [s, c] = xt(0), [u, f] = xt(0), [d, p] = xt(0), [h, g] = xt(!1);
    function w() {
      const {
        target: x
      } = e, _ = getComputedStyle(x);
      r(hC(x));
      const A = _.position === "static", {
        borderLeftWidth: E,
        borderTopWidth: M
      } = _;
      l(A ? x.offsetLeft : Vo(-parseFloat(E))), c(A ? x.offsetTop : Vo(-parseFloat(M))), f(x.offsetWidth), p(x.offsetHeight);
      const {
        borderTopLeftRadius: j,
        borderTopRightRadius: N,
        borderBottomLeftRadius: B,
        borderBottomRightRadius: T
      } = _;
      i([j, N, T, B].map((F) => Vo(parseFloat(F))));
    }
    let y, C, v;
    const b = () => {
      clearTimeout(v), Ee.cancel(C), y == null || y.disconnect();
    }, S = () => {
      var x;
      const _ = (x = t.value) === null || x === void 0 ? void 0 : x.parentElement;
      _ && (In(null, _), _.parentElement && _.parentElement.removeChild(_));
    };
    $e(() => {
      b(), v = setTimeout(() => {
        S();
      }, 5e3);
      const {
        target: x
      } = e;
      x && (C = Ee(() => {
        w(), g(!0);
      }), typeof ResizeObserver < "u" && (y = new ResizeObserver(w), y.observe(x)));
    }), ct(() => {
      b();
    });
    const P = (x) => {
      x.propertyName === "opacity" && S();
    };
    return () => {
      if (!h.value)
        return null;
      const x = {
        left: `${a.value}px`,
        top: `${s.value}px`,
        width: `${u.value}px`,
        height: `${d.value}px`,
        borderRadius: o.value.map((_) => `${_}px`).join(" ")
      };
      return n && (x["--wave-color"] = n.value), $(fn, {
        appear: !0,
        name: "wave-motion",
        appearFromClass: "wave-motion-appear",
        appearActiveClass: "wave-motion-appear",
        appearToClass: "wave-motion-appear wave-motion-appear-active"
      }, {
        default: () => [$("div", {
          ref: t,
          class: e.className,
          style: x,
          onTransitionend: P
        }, null)]
      });
    };
  }
});
function yC(e, t) {
  const n = document.createElement("div");
  n.style.position = "absolute", n.style.left = "0px", n.style.top = "0px", e == null || e.insertBefore(n, e == null ? void 0 : e.firstChild), In($(vC, {
    target: e,
    className: t
  }, null), n);
}
function bC(e, t, n) {
  function r() {
    var o;
    const i = St(e);
    !((o = n == null ? void 0 : n.value) === null || o === void 0) && o.disabled || !i || yC(i, t.value);
  }
  return r;
}
const xC = V({
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
    const r = un(), {
      prefixCls: o,
      wave: i
    } = Se("wave", e), [, a] = mC(o), l = bC(r, O(() => U(o.value, a.value)), i);
    let s;
    const c = () => {
      St(r).removeEventListener("click", s, !0);
    };
    return $e(() => {
      K(() => e.disabled, () => {
        c(), ke(() => {
          const u = St(r);
          u == null || u.removeEventListener("click", s, !0), !(!u || u.nodeType !== 1 || e.disabled) && (s = (f) => {
            f.target.tagName === "INPUT" || !Du(f.target) || // No need wave
            !u.getAttribute || u.getAttribute("disabled") || u.disabled || u.className.includes("disabled") || u.className.includes("-leave") || l();
          }, u.addEventListener("click", s, !0));
        });
      }, {
        immediate: !0,
        flush: "post"
      });
    }), ct(() => {
      c();
    }), () => {
      var u;
      return (u = n.default) === null || u === void 0 ? void 0 : u.call(n)[0];
    };
  }
});
function M2(e) {
  return e === "danger" ? {
    danger: !0
  } : {
    type: e
  };
}
const wC = () => ({
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
  icon: z.any,
  href: String,
  target: String,
  title: String,
  onClick: Za(),
  onMousedown: Za()
}), zs = (e) => {
  e && (e.style.width = "0px", e.style.opacity = "0", e.style.transform = "scale(0)");
}, Vs = (e) => {
  ke(() => {
    e && (e.style.width = `${e.scrollWidth}px`, e.style.opacity = "1", e.style.transform = "scale(1)");
  });
}, ks = (e) => {
  e && e.style && (e.style.width = null, e.style.opacity = null, e.style.transform = null);
}, CC = V({
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
        return $("span", {
          class: `${n}-loading-icon`
        }, [$(gt, null, null)]);
      const o = !!r;
      return $(fn, {
        name: `${n}-loading-icon-motion`,
        onBeforeEnter: zs,
        onEnter: Vs,
        onAfterEnter: ks,
        onBeforeLeave: Vs,
        onLeave: (i) => {
          setTimeout(() => {
            zs(i);
          });
        },
        onAfterLeave: ks
      }, {
        default: () => [o ? $("span", {
          class: `${n}-loading-icon`
        }, [$(gt, null, null)]) : null]
      });
    };
  }
}), Ws = (e, t) => ({
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
}), $C = (e) => {
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
      Ws(`${t}-primary`, o),
      Ws(`${t}-danger`, i)
    ]
  };
};
function SC(e, t) {
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
function OC(e, t) {
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
function PC(e) {
  const t = `${e.componentCls}-compact-vertical`;
  return {
    [t]: m(m({}, SC(e, t)), OC(e.componentCls, t))
  };
}
const TC = (e) => {
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
      "&:not(:disabled)": m({}, ig(e)),
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
}, st = (e, t) => ({
  "&:not(:disabled)": {
    "&:hover": e,
    "&:active": t
  }
}), _C = (e) => ({
  minWidth: e.controlHeight,
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  borderRadius: "50%"
}), EC = (e) => ({
  borderRadius: e.controlHeight,
  paddingInlineStart: e.controlHeight / 2,
  paddingInlineEnd: e.controlHeight / 2
}), Ti = (e) => ({
  cursor: "not-allowed",
  borderColor: e.colorBorder,
  color: e.colorTextDisabled,
  backgroundColor: e.colorBgContainerDisabled,
  boxShadow: "none"
}), Gr = (e, t, n, r, o, i, a) => ({
  [`&${e}-background-ghost`]: m(m({
    color: t || void 0,
    backgroundColor: "transparent",
    borderColor: n || void 0,
    boxShadow: "none"
  }, st(m({
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
}), Fa = (e) => ({
  "&:disabled": m({}, Ti(e))
}), Af = (e) => m({}, Fa(e)), Xr = (e) => ({
  "&:disabled": {
    cursor: "not-allowed",
    color: e.colorTextDisabled
  }
}), If = (e) => m(m(m(m(m({}, Af(e)), {
  backgroundColor: e.colorBgContainer,
  borderColor: e.colorBorder,
  boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlTmpOutline}`
}), st({
  color: e.colorPrimaryHover,
  borderColor: e.colorPrimaryHover
}, {
  color: e.colorPrimaryActive,
  borderColor: e.colorPrimaryActive
})), Gr(e.componentCls, e.colorBgContainer, e.colorBgContainer, e.colorTextDisabled, e.colorBorder)), {
  [`&${e.componentCls}-dangerous`]: m(m(m({
    color: e.colorError,
    borderColor: e.colorError
  }, st({
    color: e.colorErrorHover,
    borderColor: e.colorErrorBorderHover
  }, {
    color: e.colorErrorActive,
    borderColor: e.colorErrorActive
  })), Gr(e.componentCls, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder)), Fa(e))
}), AC = (e) => m(m(m(m(m({}, Af(e)), {
  color: e.colorTextLightSolid,
  backgroundColor: e.colorPrimary,
  boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlOutline}`
}), st({
  color: e.colorTextLightSolid,
  backgroundColor: e.colorPrimaryHover
}, {
  color: e.colorTextLightSolid,
  backgroundColor: e.colorPrimaryActive
})), Gr(e.componentCls, e.colorPrimary, e.colorPrimary, e.colorTextDisabled, e.colorBorder, {
  color: e.colorPrimaryHover,
  borderColor: e.colorPrimaryHover
}, {
  color: e.colorPrimaryActive,
  borderColor: e.colorPrimaryActive
})), {
  [`&${e.componentCls}-dangerous`]: m(m(m({
    backgroundColor: e.colorError,
    boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.colorErrorOutline}`
  }, st({
    backgroundColor: e.colorErrorHover
  }, {
    backgroundColor: e.colorErrorActive
  })), Gr(e.componentCls, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder, {
    color: e.colorErrorHover,
    borderColor: e.colorErrorHover
  }, {
    color: e.colorErrorActive,
    borderColor: e.colorErrorActive
  })), Fa(e))
}), IC = (e) => m(m({}, If(e)), {
  borderStyle: "dashed"
}), MC = (e) => m(m(m({
  color: e.colorLink
}, st({
  color: e.colorLinkHover
}, {
  color: e.colorLinkActive
})), Xr(e)), {
  [`&${e.componentCls}-dangerous`]: m(m({
    color: e.colorError
  }, st({
    color: e.colorErrorHover
  }, {
    color: e.colorErrorActive
  })), Xr(e))
}), FC = (e) => m(m(m({}, st({
  color: e.colorText,
  backgroundColor: e.colorBgTextHover
}, {
  color: e.colorText,
  backgroundColor: e.colorBgTextActive
})), Xr(e)), {
  [`&${e.componentCls}-dangerous`]: m(m({
    color: e.colorError
  }, Xr(e)), st({
    color: e.colorErrorHover,
    backgroundColor: e.colorErrorBg
  }, {
    color: e.colorErrorHover,
    backgroundColor: e.colorErrorBg
  }))
}), jC = (e) => m(m({}, Ti(e)), {
  [`&${e.componentCls}:hover`]: m({}, Ti(e))
}), RC = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-default`]: If(e),
    [`${t}-primary`]: AC(e),
    [`${t}-dashed`]: IC(e),
    [`${t}-link`]: MC(e),
    [`${t}-text`]: FC(e),
    [`${t}-disabled`]: jC(e)
  };
}, ja = function(e) {
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
  } = e, u = Math.max(0, (o - i * a) / 2 - l), f = c - l, d = `${n}-icon-only`;
  return [
    // Size
    {
      [`${n}${t}`]: {
        fontSize: i,
        height: o,
        padding: `${u}px ${f}px`,
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
      [`${n}${n}-circle${t}`]: _C(e)
    },
    {
      [`${n}${n}-round${t}`]: EC(e)
    }
  ];
}, NC = (e) => ja(e), DC = (e) => {
  const t = Ge(e, {
    controlHeight: e.controlHeightSM,
    padding: e.paddingXS,
    buttonPaddingHorizontal: 8,
    borderRadius: e.borderRadiusSM
  });
  return ja(t, `${e.componentCls}-sm`);
}, LC = (e) => {
  const t = Ge(e, {
    controlHeight: e.controlHeightLG,
    fontSize: e.fontSizeLG,
    borderRadius: e.borderRadiusLG
  });
  return ja(t, `${e.componentCls}-lg`);
}, BC = (e) => {
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
}, HC = tt("Button", (e) => {
  const {
    controlTmpOutline: t,
    paddingContentHorizontal: n
  } = e, r = Ge(e, {
    colorOutlineDefault: t,
    buttonPaddingHorizontal: n
  });
  return [
    // Shared
    TC(r),
    // Size
    DC(r),
    NC(r),
    LC(r),
    // Block
    BC(r),
    // Group (type, ghost, danger, disabled, loading)
    RC(r),
    // Button Group
    $C(r),
    // Space Compact
    Ew(e, {
      focus: !1
    }),
    PC(e)
  ];
}), zC = () => ({
  prefixCls: String,
  size: {
    type: String
  }
}), Mf = xa(), Ur = V({
  compatConfig: {
    MODE: 3
  },
  name: "AButtonGroup",
  props: zC(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      prefixCls: r,
      direction: o
    } = Se("btn-group", e), [, , i] = pn();
    Mf.useProvide(We({
      size: O(() => e.size)
    }));
    const a = O(() => {
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
          ra(!l, "Button.Group", "Invalid prop `size`.");
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
      return $("div", {
        class: a.value
      }, [He((l = n.default) === null || l === void 0 ? void 0 : l.call(n))]);
    };
  }
}), qs = /^[\u4e00-\u9fa5]{2}$/, Gs = qs.test.bind(qs);
function hr(e) {
  return e === "text" || e === "link";
}
const Jt = V({
  compatConfig: {
    MODE: 3
  },
  name: "AButton",
  inheritAttrs: !1,
  __ANT_BUTTON: !0,
  props: qi(wC(), {
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
    } = Se("btn", e), [u, f] = HC(a), d = Mf.useInject(), p = Ki(), h = O(() => {
      var T;
      return (T = e.disabled) !== null && T !== void 0 ? T : p.value;
    }), g = H(null), w = H(void 0);
    let y = !1;
    const C = H(!1), v = H(!1), b = O(() => l.value !== !1), {
      compactSize: S,
      compactItemClassnames: P
    } = cw(a, s), x = O(() => typeof e.loading == "object" && e.loading.delay ? e.loading.delay || !0 : !!e.loading);
    K(x, (T) => {
      clearTimeout(w.value), typeof x.value == "number" ? w.value = setTimeout(() => {
        C.value = T;
      }, x.value) : C.value = T;
    }, {
      immediate: !0
    });
    const _ = O(() => {
      const {
        type: T,
        shape: F = "default",
        ghost: I,
        block: R,
        danger: k
      } = e, G = a.value, Q = {
        large: "lg",
        small: "sm",
        middle: void 0
      }, re = S.value || (d == null ? void 0 : d.size) || c.value, fe = re && Q[re] || "";
      return [P.value, {
        [f.value]: !0,
        [`${G}`]: !0,
        [`${G}-${F}`]: F !== "default" && F,
        [`${G}-${T}`]: T,
        [`${G}-${fe}`]: fe,
        [`${G}-loading`]: C.value,
        [`${G}-background-ghost`]: I && !hr(T),
        [`${G}-two-chinese-chars`]: v.value && b.value,
        [`${G}-block`]: R,
        [`${G}-dangerous`]: !!k,
        [`${G}-rtl`]: s.value === "rtl"
      }];
    }), A = () => {
      const T = g.value;
      if (!T || l.value === !1)
        return;
      const F = T.textContent;
      y && Gs(F) ? v.value || (v.value = !0) : v.value && (v.value = !1);
    }, E = (T) => {
      if (C.value || h.value) {
        T.preventDefault();
        return;
      }
      o("click", T);
    }, M = (T) => {
      o("mousedown", T);
    }, j = (T, F) => {
      const I = F ? " " : "";
      if (T.type === mc) {
        let R = T.children.trim();
        return Gs(R) && (R = R.split("").join(I)), $("span", null, [R]);
      }
      return T;
    };
    return Ve(() => {
      ra(!(e.ghost && hr(e.type)), "Button", "`link` or `text` button can't be a `ghost` button.");
    }), $e(A), Zr(A), ct(() => {
      w.value && clearTimeout(w.value);
    }), i({
      focus: () => {
        var T;
        (T = g.value) === null || T === void 0 || T.focus();
      },
      blur: () => {
        var T;
        (T = g.value) === null || T === void 0 || T.blur();
      }
    }), () => {
      var T, F;
      const {
        icon: I = (T = n.icon) === null || T === void 0 ? void 0 : T.call(n)
      } = e, R = He((F = n.default) === null || F === void 0 ? void 0 : F.call(n));
      y = R.length === 1 && !I && !hr(e.type);
      const {
        type: k,
        htmlType: G,
        href: Q,
        title: re,
        target: fe
      } = e, me = C.value ? "loading" : I, D = m(m({}, r), {
        title: re,
        disabled: h.value,
        class: [_.value, r.class, {
          [`${a.value}-icon-only`]: R.length === 0 && !!me
        }],
        onClick: E,
        onMousedown: M
      });
      h.value || delete D.disabled;
      const q = I && !C.value ? I : $(CC, {
        existIcon: !!I,
        prefixCls: a.value,
        loading: !!C.value
      }, null), Y = R.map((ne) => j(ne, y && b.value));
      if (Q !== void 0)
        return u($("a", L(L({}, D), {}, {
          href: Q,
          target: fe,
          ref: g
        }), [q, Y]));
      let J = $("button", L(L({}, D), {}, {
        ref: g,
        type: G
      }), [q, Y]);
      if (!hr(k)) {
        const ne = /* @__PURE__ */ function() {
          return J;
        }();
        J = $(xC, {
          ref: "wave",
          disabled: !!C.value
        }, {
          default: () => [ne]
        });
      }
      return u(J);
    };
  }
});
Jt.Group = Ur;
Jt.install = function(e) {
  return e.component(Jt.name, Jt), e.component(Ur.name, Ur), e;
};
const F2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ButtonGroup: Ur,
  default: Jt
}, Symbol.toStringTag, { value: "Module" }));
function Ff(e, t) {
  return e.classList ? e.classList.contains(t) : ` ${e.className} `.indexOf(` ${t} `) > -1;
}
function Xs(e, t) {
  e.classList ? e.classList.add(t) : Ff(e, t) || (e.className = `${e.className} ${t}`);
}
function Us(e, t) {
  if (e.classList)
    e.classList.remove(t);
  else if (Ff(e, t)) {
    const n = e.className;
    e.className = ` ${n} `.replace(` ${t} `, " ");
  }
}
const VC = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "ant-motion-collapse", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return {
    name: e,
    appear: t,
    css: !0,
    onBeforeEnter: (n) => {
      n.style.height = "0px", n.style.opacity = "0", Xs(n, e);
    },
    onEnter: (n) => {
      ke(() => {
        n.style.height = `${n.scrollHeight}px`, n.style.opacity = "1";
      });
    },
    onAfterEnter: (n) => {
      n && (Us(n, e), n.style.height = null, n.style.opacity = null);
    },
    onBeforeLeave: (n) => {
      Xs(n, e), n.style.height = `${n.offsetHeight}px`, n.style.opacity = null;
    },
    onLeave: (n) => {
      setTimeout(() => {
        n.style.height = "0px", n.style.opacity = "0";
      });
    },
    onAfterLeave: (n) => {
      n && (Us(n, e), n.style && (n.style.height = null, n.style.opacity = null));
    }
  };
}, kC = () => qe() && window.document.documentElement;
let vr;
const WC = () => {
  if (!kC())
    return !1;
  if (vr !== void 0)
    return vr;
  const e = document.createElement("div");
  return e.style.display = "flex", e.style.flexDirection = "column", e.style.rowGap = "1px", e.appendChild(document.createElement("div")), e.appendChild(document.createElement("div")), document.body.appendChild(e), vr = e.scrollHeight === 1, document.body.removeChild(e), vr;
}, qC = () => {
  const e = H(!1);
  return $e(() => {
    e.value = WC();
  }), e;
}, jf = Symbol("rowContextKey"), GC = (e) => {
  ce(jf, e);
}, XC = () => pe(jf, {
  gutter: O(() => {
  }),
  wrap: O(() => {
  }),
  supportFlexGap: O(() => {
  })
}), UC = (e) => {
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
}, YC = (e) => {
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
}, KC = (e, t) => {
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
}, _i = (e, t) => KC(e, t), ZC = (e, t, n) => ({
  [`@media (min-width: ${t}px)`]: m({}, _i(e, n))
}), QC = tt("Grid", (e) => [UC(e)]), JC = tt("Grid", (e) => {
  const t = Ge(e, {
    gridColumns: 24
    // Row is divided into 24 parts in Grid
  }), n = {
    "-sm": t.screenSMMin,
    "-md": t.screenMDMin,
    "-lg": t.screenLGMin,
    "-xl": t.screenXLMin,
    "-xxl": t.screenXXLMin
  };
  return [YC(t), _i(t, ""), _i(t, "-xs"), Object.keys(n).map((r) => ZC(t, n[r], r)).reduce((r, o) => m(m({}, r), o), {})];
}), e$ = () => ({
  align: Zt([String, Object]),
  justify: Zt([String, Object]),
  prefixCls: String,
  gutter: Zt([Number, Array, Object], 0),
  wrap: {
    type: Boolean,
    default: void 0
  }
}), t$ = V({
  compatConfig: {
    MODE: 3
  },
  name: "ARow",
  inheritAttrs: !1,
  props: e$(),
  setup(e, t) {
    let {
      slots: n,
      attrs: r
    } = t;
    const {
      prefixCls: o,
      direction: i
    } = Se("row", e), [a, l] = QC(o);
    let s;
    const c = qw(), u = Z({
      xs: !0,
      sm: !0,
      md: !0,
      lg: !0,
      xl: !0,
      xxl: !0
    }), f = Z({
      xs: !1,
      sm: !1,
      md: !1,
      lg: !1,
      xl: !1,
      xxl: !1
    }), d = (v) => O(() => {
      if (typeof e[v] == "string")
        return e[v];
      if (typeof e[v] != "object")
        return "";
      for (let b = 0; b < mr.length; b++) {
        const S = mr[b];
        if (!f.value[S])
          continue;
        const P = e[v][S];
        if (P !== void 0)
          return P;
      }
      return "";
    }), p = d("align"), h = d("justify"), g = qC();
    $e(() => {
      s = c.value.subscribe((v) => {
        f.value = v;
        const b = e.gutter || 0;
        (!Array.isArray(b) && typeof b == "object" || Array.isArray(b) && (typeof b[0] == "object" || typeof b[1] == "object")) && (u.value = v);
      });
    }), ct(() => {
      c.value.unsubscribe(s);
    });
    const w = O(() => {
      const v = [void 0, void 0], {
        gutter: b = 0
      } = e;
      return (Array.isArray(b) ? b : [b, void 0]).forEach((P, x) => {
        if (typeof P == "object")
          for (let _ = 0; _ < mr.length; _++) {
            const A = mr[_];
            if (u.value[A] && P[A] !== void 0) {
              v[x] = P[A];
              break;
            }
          }
        else
          v[x] = P;
      }), v;
    });
    GC({
      gutter: w,
      supportFlexGap: g,
      wrap: O(() => e.wrap)
    });
    const y = O(() => U(o.value, {
      [`${o.value}-no-wrap`]: e.wrap === !1,
      [`${o.value}-${h.value}`]: h.value,
      [`${o.value}-${p.value}`]: p.value,
      [`${o.value}-rtl`]: i.value === "rtl"
    }, r.class, l.value)), C = O(() => {
      const v = w.value, b = {}, S = v[0] != null && v[0] > 0 ? `${v[0] / -2}px` : void 0, P = v[1] != null && v[1] > 0 ? `${v[1] / -2}px` : void 0;
      return S && (b.marginLeft = S, b.marginRight = S), g.value ? b.rowGap = `${v[1]}px` : P && (b.marginTop = P, b.marginBottom = P), b;
    });
    return () => {
      var v;
      return a($("div", L(L({}, r), {}, {
        class: y.value,
        style: m(m({}, C.value), r.style)
      }), [(v = n.default) === null || v === void 0 ? void 0 : v.call(n)]));
    };
  }
});
function Tt() {
  return Tt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Tt.apply(this, arguments);
}
function n$(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, kn(e, t);
}
function Ei(e) {
  return Ei = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ei(e);
}
function kn(e, t) {
  return kn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, kn(e, t);
}
function r$() {
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
function Tr(e, t, n) {
  return r$() ? Tr = Reflect.construct.bind() : Tr = function(o, i, a) {
    var l = [null];
    l.push.apply(l, i);
    var s = Function.bind.apply(o, l), c = new s();
    return a && kn(c, a.prototype), c;
  }, Tr.apply(null, arguments);
}
function o$(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function Ai(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Ai = function(r) {
    if (r === null || !o$(r))
      return r;
    if (typeof r != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(r))
        return t.get(r);
      t.set(r, o);
    }
    function o() {
      return Tr(r, arguments, Ei(this).constructor);
    }
    return o.prototype = Object.create(r.prototype, {
      constructor: {
        value: o,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), kn(o, r);
  }, Ai(e);
}
var i$ = /%[sdj%]/g, Rf = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (Rf = function(t, n) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && n.every(function(r) {
    return typeof r == "string";
  }) && console.warn(t, n);
});
function Ii(e) {
  if (!e || !e.length)
    return null;
  var t = {};
  return e.forEach(function(n) {
    var r = n.field;
    t[r] = t[r] || [], t[r].push(n);
  }), t;
}
function _e(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  var o = 0, i = n.length;
  if (typeof e == "function")
    return e.apply(null, n);
  if (typeof e == "string") {
    var a = e.replace(i$, function(l) {
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
function a$(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern";
}
function ue(e, t) {
  return !!(e == null || t === "array" && Array.isArray(e) && !e.length || a$(t) && typeof e == "string" && !e);
}
function l$(e, t, n) {
  var r = [], o = 0, i = e.length;
  function a(l) {
    r.push.apply(r, l || []), o++, o === i && n(r);
  }
  e.forEach(function(l) {
    t(l, a);
  });
}
function Ys(e, t, n) {
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
function s$(e) {
  var t = [];
  return Object.keys(e).forEach(function(n) {
    t.push.apply(t, e[n] || []);
  }), t;
}
var Ks = /* @__PURE__ */ function(e) {
  n$(t, e);
  function t(n, r) {
    var o;
    return o = e.call(this, "Async Validation Error") || this, o.errors = n, o.fields = r, o;
  }
  return t;
}(/* @__PURE__ */ Ai(Error));
function c$(e, t, n, r, o) {
  if (t.first) {
    var i = new Promise(function(d, p) {
      var h = function(y) {
        return r(y), y.length ? p(new Ks(y, Ii(y))) : d(o);
      }, g = s$(e);
      Ys(g, n, h);
    });
    return i.catch(function(d) {
      return d;
    }), i;
  }
  var a = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [], l = Object.keys(e), s = l.length, c = 0, u = [], f = new Promise(function(d, p) {
    var h = function(w) {
      if (u.push.apply(u, w), c++, c === s)
        return r(u), u.length ? p(new Ks(u, Ii(u))) : d(o);
    };
    l.length || (r(u), d(o)), l.forEach(function(g) {
      var w = e[g];
      a.indexOf(g) !== -1 ? Ys(w, n, h) : l$(w, n, h);
    });
  });
  return f.catch(function(d) {
    return d;
  }), f;
}
function u$(e) {
  return !!(e && e.message !== void 0);
}
function f$(e, t) {
  for (var n = e, r = 0; r < t.length; r++) {
    if (n == null)
      return n;
    n = n[t[r]];
  }
  return n;
}
function Zs(e, t) {
  return function(n) {
    var r;
    return e.fullFields ? r = f$(t, e.fullFields) : r = t[n.field || e.fullField], u$(n) ? (n.field = n.field || e.fullField, n.fieldValue = r, n) : {
      message: typeof n == "function" ? n() : n,
      fieldValue: r,
      field: n.field || e.fullField
    };
  };
}
function Qs(e, t) {
  if (t) {
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = t[n];
        typeof r == "object" && typeof e[n] == "object" ? e[n] = Tt({}, e[n], r) : e[n] = r;
      }
  }
  return e;
}
var Nf = function(t, n, r, o, i, a) {
  t.required && (!r.hasOwnProperty(t.field) || ue(n, a || t.type)) && o.push(_e(i.messages.required, t.fullField));
}, d$ = function(t, n, r, o, i) {
  (/^\s+$/.test(n) || n === "") && o.push(_e(i.messages.whitespace, t.fullField));
}, yr, p$ = function() {
  if (yr)
    return yr;
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
  s.v4 = function(v) {
    return v && v.exact ? a : new RegExp("" + t(v) + n + t(v), "g");
  }, s.v6 = function(v) {
    return v && v.exact ? l : new RegExp("" + t(v) + o + t(v), "g");
  };
  var c = "(?:(?:[a-z]+:)?//)", u = "(?:\\S+(?::\\S*)?@)?", f = s.v4().source, d = s.v6().source, p = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", h = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", g = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", w = "(?::\\d{2,5})?", y = '(?:[/?#][^\\s"]*)?', C = "(?:" + c + "|www\\.)" + u + "(?:localhost|" + f + "|" + d + "|" + p + h + g + ")" + w + y;
  return yr = new RegExp("(?:^" + C + "$)", "i"), yr;
}, Js = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, Sn = {
  integer: function(t) {
    return Sn.number(t) && parseInt(t, 10) === t;
  },
  float: function(t) {
    return Sn.number(t) && !Sn.integer(t);
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
    return typeof t == "object" && !Sn.array(t);
  },
  method: function(t) {
    return typeof t == "function";
  },
  email: function(t) {
    return typeof t == "string" && t.length <= 320 && !!t.match(Js.email);
  },
  url: function(t) {
    return typeof t == "string" && t.length <= 2048 && !!t.match(p$());
  },
  hex: function(t) {
    return typeof t == "string" && !!t.match(Js.hex);
  }
}, m$ = function(t, n, r, o, i) {
  if (t.required && n === void 0) {
    Nf(t, n, r, o, i);
    return;
  }
  var a = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], l = t.type;
  a.indexOf(l) > -1 ? Sn[l](n) || o.push(_e(i.messages.types[l], t.fullField, t.type)) : l && typeof n !== t.type && o.push(_e(i.messages.types[l], t.fullField, t.type));
}, g$ = function(t, n, r, o, i) {
  var a = typeof t.len == "number", l = typeof t.min == "number", s = typeof t.max == "number", c = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, u = n, f = null, d = typeof n == "number", p = typeof n == "string", h = Array.isArray(n);
  if (d ? f = "number" : p ? f = "string" : h && (f = "array"), !f)
    return !1;
  h && (u = n.length), p && (u = n.replace(c, "_").length), a ? u !== t.len && o.push(_e(i.messages[f].len, t.fullField, t.len)) : l && !s && u < t.min ? o.push(_e(i.messages[f].min, t.fullField, t.min)) : s && !l && u > t.max ? o.push(_e(i.messages[f].max, t.fullField, t.max)) : l && s && (u < t.min || u > t.max) && o.push(_e(i.messages[f].range, t.fullField, t.min, t.max));
}, Gt = "enum", h$ = function(t, n, r, o, i) {
  t[Gt] = Array.isArray(t[Gt]) ? t[Gt] : [], t[Gt].indexOf(n) === -1 && o.push(_e(i.messages[Gt], t.fullField, t[Gt].join(", ")));
}, v$ = function(t, n, r, o, i) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp)
      t.pattern.lastIndex = 0, t.pattern.test(n) || o.push(_e(i.messages.pattern.mismatch, t.fullField, n, t.pattern));
    else if (typeof t.pattern == "string") {
      var a = new RegExp(t.pattern);
      a.test(n) || o.push(_e(i.messages.pattern.mismatch, t.fullField, n, t.pattern));
    }
  }
}, X = {
  required: Nf,
  whitespace: d$,
  type: m$,
  range: g$,
  enum: h$,
  pattern: v$
}, y$ = function(t, n, r, o, i) {
  var a = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (ue(n, "string") && !t.required)
      return r();
    X.required(t, n, o, a, i, "string"), ue(n, "string") || (X.type(t, n, o, a, i), X.range(t, n, o, a, i), X.pattern(t, n, o, a, i), t.whitespace === !0 && X.whitespace(t, n, o, a, i));
  }
  r(a);
}, b$ = function(t, n, r, o, i) {
  var a = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (ue(n) && !t.required)
      return r();
    X.required(t, n, o, a, i), n !== void 0 && X.type(t, n, o, a, i);
  }
  r(a);
}, x$ = function(t, n, r, o, i) {
  var a = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (n === "" && (n = void 0), ue(n) && !t.required)
      return r();
    X.required(t, n, o, a, i), n !== void 0 && (X.type(t, n, o, a, i), X.range(t, n, o, a, i));
  }
  r(a);
}, w$ = function(t, n, r, o, i) {
  var a = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (ue(n) && !t.required)
      return r();
    X.required(t, n, o, a, i), n !== void 0 && X.type(t, n, o, a, i);
  }
  r(a);
}, C$ = function(t, n, r, o, i) {
  var a = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (ue(n) && !t.required)
      return r();
    X.required(t, n, o, a, i), ue(n) || X.type(t, n, o, a, i);
  }
  r(a);
}, $$ = function(t, n, r, o, i) {
  var a = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (ue(n) && !t.required)
      return r();
    X.required(t, n, o, a, i), n !== void 0 && (X.type(t, n, o, a, i), X.range(t, n, o, a, i));
  }
  r(a);
}, S$ = function(t, n, r, o, i) {
  var a = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (ue(n) && !t.required)
      return r();
    X.required(t, n, o, a, i), n !== void 0 && (X.type(t, n, o, a, i), X.range(t, n, o, a, i));
  }
  r(a);
}, O$ = function(t, n, r, o, i) {
  var a = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (n == null && !t.required)
      return r();
    X.required(t, n, o, a, i, "array"), n != null && (X.type(t, n, o, a, i), X.range(t, n, o, a, i));
  }
  r(a);
}, P$ = function(t, n, r, o, i) {
  var a = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (ue(n) && !t.required)
      return r();
    X.required(t, n, o, a, i), n !== void 0 && X.type(t, n, o, a, i);
  }
  r(a);
}, T$ = "enum", _$ = function(t, n, r, o, i) {
  var a = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (ue(n) && !t.required)
      return r();
    X.required(t, n, o, a, i), n !== void 0 && X[T$](t, n, o, a, i);
  }
  r(a);
}, E$ = function(t, n, r, o, i) {
  var a = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (ue(n, "string") && !t.required)
      return r();
    X.required(t, n, o, a, i), ue(n, "string") || X.pattern(t, n, o, a, i);
  }
  r(a);
}, A$ = function(t, n, r, o, i) {
  var a = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (ue(n, "date") && !t.required)
      return r();
    if (X.required(t, n, o, a, i), !ue(n, "date")) {
      var s;
      n instanceof Date ? s = n : s = new Date(n), X.type(t, s, o, a, i), s && X.range(t, s.getTime(), o, a, i);
    }
  }
  r(a);
}, I$ = function(t, n, r, o, i) {
  var a = [], l = Array.isArray(n) ? "array" : typeof n;
  X.required(t, n, o, a, i, l), r(a);
}, ko = function(t, n, r, o, i) {
  var a = t.type, l = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (ue(n, a) && !t.required)
      return r();
    X.required(t, n, o, l, i, a), ue(n, a) || X.type(t, n, o, l, i);
  }
  r(l);
}, M$ = function(t, n, r, o, i) {
  var a = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (ue(n) && !t.required)
      return r();
    X.required(t, n, o, a, i);
  }
  r(a);
}, En = {
  string: y$,
  method: b$,
  number: x$,
  boolean: w$,
  regexp: C$,
  integer: $$,
  float: S$,
  array: O$,
  object: P$,
  enum: _$,
  pattern: E$,
  date: A$,
  url: ko,
  hex: ko,
  email: ko,
  required: I$,
  any: M$
};
function Mi() {
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
var Fi = Mi(), Qn = /* @__PURE__ */ function() {
  function e(n) {
    this.rules = null, this._messages = Fi, this.define(n);
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
    return r && (this._messages = Qs(Mi(), r)), this._messages;
  }, t.validate = function(r, o, i) {
    var a = this;
    o === void 0 && (o = {}), i === void 0 && (i = function() {
    });
    var l = r, s = o, c = i;
    if (typeof s == "function" && (c = s, s = {}), !this.rules || Object.keys(this.rules).length === 0)
      return c && c(null, l), Promise.resolve(l);
    function u(g) {
      var w = [], y = {};
      function C(b) {
        if (Array.isArray(b)) {
          var S;
          w = (S = w).concat.apply(S, b);
        } else
          w.push(b);
      }
      for (var v = 0; v < g.length; v++)
        C(g[v]);
      w.length ? (y = Ii(w), c(w, y)) : c(null, l);
    }
    if (s.messages) {
      var f = this.messages();
      f === Fi && (f = Mi()), Qs(f, s.messages), s.messages = f;
    } else
      s.messages = this.messages();
    var d = {}, p = s.keys || Object.keys(this.rules);
    p.forEach(function(g) {
      var w = a.rules[g], y = l[g];
      w.forEach(function(C) {
        var v = C;
        typeof v.transform == "function" && (l === r && (l = Tt({}, l)), y = l[g] = v.transform(y)), typeof v == "function" ? v = {
          validator: v
        } : v = Tt({}, v), v.validator = a.getValidationMethod(v), v.validator && (v.field = g, v.fullField = v.fullField || g, v.type = a.getType(v), d[g] = d[g] || [], d[g].push({
          rule: v,
          value: y,
          source: l,
          field: g
        }));
      });
    });
    var h = {};
    return c$(d, s, function(g, w) {
      var y = g.rule, C = (y.type === "object" || y.type === "array") && (typeof y.fields == "object" || typeof y.defaultField == "object");
      C = C && (y.required || !y.required && g.value), y.field = g.field;
      function v(P, x) {
        return Tt({}, x, {
          fullField: y.fullField + "." + P,
          fullFields: y.fullFields ? [].concat(y.fullFields, [P]) : [P]
        });
      }
      function b(P) {
        P === void 0 && (P = []);
        var x = Array.isArray(P) ? P : [P];
        !s.suppressWarning && x.length && e.warning("async-validator:", x), x.length && y.message !== void 0 && (x = [].concat(y.message));
        var _ = x.map(Zs(y, l));
        if (s.first && _.length)
          return h[y.field] = 1, w(_);
        if (!C)
          w(_);
        else {
          if (y.required && !g.value)
            return y.message !== void 0 ? _ = [].concat(y.message).map(Zs(y, l)) : s.error && (_ = [s.error(y, _e(s.messages.required, y.field))]), w(_);
          var A = {};
          y.defaultField && Object.keys(g.value).map(function(j) {
            A[j] = y.defaultField;
          }), A = Tt({}, A, g.rule.fields);
          var E = {};
          Object.keys(A).forEach(function(j) {
            var N = A[j], B = Array.isArray(N) ? N : [N];
            E[j] = B.map(v.bind(null, j));
          });
          var M = new e(E);
          M.messages(s.messages), g.rule.options && (g.rule.options.messages = s.messages, g.rule.options.error = s.error), M.validate(g.value, g.rule.options || s, function(j) {
            var N = [];
            _ && _.length && N.push.apply(N, _), j && j.length && N.push.apply(N, j), w(N.length ? N : null);
          });
        }
      }
      var S;
      if (y.asyncValidator)
        S = y.asyncValidator(y, g.value, b, g.source, s);
      else if (y.validator) {
        try {
          S = y.validator(y, g.value, b, g.source, s);
        } catch (P) {
          console.error == null || console.error(P), s.suppressValidatorError || setTimeout(function() {
            throw P;
          }, 0), b(P.message);
        }
        S === !0 ? b() : S === !1 ? b(typeof y.message == "function" ? y.message(y.fullField || y.field) : y.message || (y.fullField || y.field) + " fails") : S instanceof Array ? b(S) : S instanceof Error && b(S.message);
      }
      S && S.then && S.then(function() {
        return b();
      }, function(P) {
        return b(P);
      });
    }, function(g) {
      u(g);
    }, l);
  }, t.getType = function(r) {
    if (r.type === void 0 && r.pattern instanceof RegExp && (r.type = "pattern"), typeof r.validator != "function" && r.type && !En.hasOwnProperty(r.type))
      throw new Error(_e("Unknown rule type %s", r.type));
    return r.type || "string";
  }, t.getValidationMethod = function(r) {
    if (typeof r.validator == "function")
      return r.validator;
    var o = Object.keys(r), i = o.indexOf("message");
    return i !== -1 && o.splice(i, 1), o.length === 1 && o[0] === "required" ? En.required : En[this.getType(r)] || void 0;
  }, e;
}();
Qn.register = function(t, n) {
  if (typeof n != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  En[t] = n;
};
Qn.warning = Rf;
Qn.messages = Fi;
Qn.validators = En;
function mt(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function Df(e, t) {
  let n = e;
  for (let r = 0; r < t.length; r += 1) {
    if (n == null)
      return;
    n = n[t[r]];
  }
  return n;
}
function Lf(e, t, n, r) {
  if (!t.length)
    return n;
  const [o, ...i] = t;
  let a;
  return !e && typeof o == "number" ? a = [] : Array.isArray(e) ? a = [...e] : a = m({}, e), r && n === void 0 && i.length === 1 ? delete a[o][i[0]] : a[o] = Lf(a[o], i, n, r), a;
}
function F$(e, t, n) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && r && n === void 0 && !Df(e, t.slice(0, -1)) ? e : Lf(e, t, n, r);
}
function ji(e) {
  return mt(e);
}
function j$(e, t) {
  return Df(e, t);
}
function R$(e, t, n) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return F$(e, t, n, r);
}
function N$(e, t) {
  return e && e.some((n) => L$(n, t));
}
function ec(e) {
  return typeof e == "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function Bf(e, t) {
  const n = Array.isArray(e) ? [...e] : m({}, e);
  return t && Object.keys(t).forEach((r) => {
    const o = n[r], i = t[r], a = ec(o) && ec(i);
    n[r] = a ? Bf(o, i || {}) : i;
  }), n;
}
function D$(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  return n.reduce((o, i) => Bf(o, i), e);
}
function tc(e, t) {
  let n = {};
  return t.forEach((r) => {
    const o = j$(e, r);
    n = R$(n, r, o);
  }), n;
}
function L$(e, t) {
  return !e || !t || e.length !== t.length ? !1 : e.every((n, r) => t[r] === n);
}
const Pe = "'${name}' is not a valid ${type}", yo = {
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
    string: Pe,
    method: Pe,
    array: Pe,
    object: Pe,
    number: Pe,
    date: Pe,
    boolean: Pe,
    integer: Pe,
    float: Pe,
    regexp: Pe,
    email: Pe,
    url: Pe,
    hex: Pe
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
var bo = function(e, t, n, r) {
  function o(i) {
    return i instanceof n ? i : new n(function(a) {
      a(i);
    });
  }
  return new (n || (n = Promise))(function(i, a) {
    function l(u) {
      try {
        c(r.next(u));
      } catch (f) {
        a(f);
      }
    }
    function s(u) {
      try {
        c(r.throw(u));
      } catch (f) {
        a(f);
      }
    }
    function c(u) {
      u.done ? i(u.value) : o(u.value).then(l, s);
    }
    c((r = r.apply(e, t || [])).next());
  });
};
const B$ = Qn;
function H$(e, t) {
  return e.replace(/\$\{\w+\}/g, (n) => {
    const r = n.slice(2, -1);
    return t[r];
  });
}
function Ri(e, t, n, r, o) {
  return bo(this, void 0, void 0, function* () {
    const i = m({}, n);
    delete i.ruleIndex, delete i.trigger;
    let a = null;
    i && i.type === "array" && i.defaultField && (a = i.defaultField, delete i.defaultField);
    const l = new B$({
      [e]: [i]
    }), s = D$({}, yo, r.validateMessages);
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
          Sc(g) ? Hi(g, {
            key: `error_${h}`
          }) : g
        );
      }) : (console.error(d), c = [s.default()]);
    }
    if (!c.length && a)
      return (yield Promise.all(t.map((p, h) => Ri(`${e}.${h}`, p, a, r, o)))).reduce((p, h) => [...p, ...h], []);
    const u = m(m(m({}, n), {
      name: e,
      enum: (n.enum || []).join(", ")
    }), o);
    return c.map((d) => typeof d == "string" ? H$(d, u) : d);
  });
}
function Hf(e, t, n, r, o, i) {
  const a = e.join("."), l = n.map((c, u) => {
    const f = c.validator, d = m(m({}, c), {
      ruleIndex: u
    });
    return f && (d.validator = (p, h, g) => {
      let w = !1;
      const C = f(p, h, function() {
        for (var v = arguments.length, b = new Array(v), S = 0; S < v; S++)
          b[S] = arguments[S];
        Promise.resolve().then(() => {
          Nr(!w, "Your validator function has already return a promise. `callback` will be ignored."), w || g(...b);
        });
      });
      w = C && typeof C.then == "function" && typeof C.catch == "function", Nr(w, "`callback` is deprecated. Please return a promise instead."), w && C.then(() => {
        g();
      }).catch((v) => {
        g(v || " ");
      });
    }), d;
  }).sort((c, u) => {
    let {
      warningOnly: f,
      ruleIndex: d
    } = c, {
      warningOnly: p,
      ruleIndex: h
    } = u;
    return !!f == !!p ? d - h : f ? 1 : -1;
  });
  let s;
  if (o === !0)
    s = new Promise((c, u) => bo(this, void 0, void 0, function* () {
      for (let f = 0; f < l.length; f += 1) {
        const d = l[f], p = yield Ri(a, t, d, r, i);
        if (p.length) {
          u([{
            errors: p,
            rule: d
          }]);
          return;
        }
      }
      c([]);
    }));
  else {
    const c = l.map((u) => Ri(a, t, u, r, i).then((f) => ({
      errors: f,
      rule: u
    })));
    s = (o ? V$(c) : z$(c)).then((u) => Promise.reject(u));
  }
  return s.catch((c) => c), s;
}
function z$(e) {
  return bo(this, void 0, void 0, function* () {
    return Promise.all(e).then((t) => [].concat(...t));
  });
}
function V$(e) {
  return bo(this, void 0, void 0, function* () {
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
const zf = Symbol("formContextKey"), Vf = (e) => {
  ce(zf, e);
}, Ra = () => pe(zf, {
  name: O(() => {
  }),
  labelAlign: O(() => "right"),
  vertical: O(() => !1),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addField: (e, t) => {
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  removeField: (e) => {
  },
  model: O(() => {
  }),
  rules: O(() => {
  }),
  colon: O(() => {
  }),
  labelWrap: O(() => {
  }),
  labelCol: O(() => {
  }),
  requiredMark: O(() => !1),
  validateTrigger: O(() => {
  }),
  onValidate: () => {
  },
  validateMessages: O(() => yo)
}), kf = Symbol("formItemPrefixContextKey"), k$ = (e) => {
  ce(kf, e);
}, W$ = () => pe(kf, {
  prefixCls: O(() => "")
});
function q$(e) {
  return typeof e == "number" ? `${e} ${e} auto` : /^\d+(\.\d+)?(px|em|rem|%)$/.test(e) ? `0 0 ${e}` : e;
}
const G$ = () => ({
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
}), X$ = ["xs", "sm", "md", "lg", "xl", "xxl"], Wf = V({
  compatConfig: {
    MODE: 3
  },
  name: "ACol",
  inheritAttrs: !1,
  props: G$(),
  setup(e, t) {
    let {
      slots: n,
      attrs: r
    } = t;
    const {
      gutter: o,
      supportFlexGap: i,
      wrap: a
    } = XC(), {
      prefixCls: l,
      direction: s
    } = Se("col", e), [c, u] = JC(l), f = O(() => {
      const {
        span: p,
        order: h,
        offset: g,
        push: w,
        pull: y
      } = e, C = l.value;
      let v = {};
      return X$.forEach((b) => {
        let S = {};
        const P = e[b];
        typeof P == "number" ? S.span = P : typeof P == "object" && (S = P || {}), v = m(m({}, v), {
          [`${C}-${b}-${S.span}`]: S.span !== void 0,
          [`${C}-${b}-order-${S.order}`]: S.order || S.order === 0,
          [`${C}-${b}-offset-${S.offset}`]: S.offset || S.offset === 0,
          [`${C}-${b}-push-${S.push}`]: S.push || S.push === 0,
          [`${C}-${b}-pull-${S.pull}`]: S.pull || S.pull === 0,
          [`${C}-rtl`]: s.value === "rtl"
        });
      }), U(C, {
        [`${C}-${p}`]: p !== void 0,
        [`${C}-order-${h}`]: h,
        [`${C}-offset-${g}`]: g,
        [`${C}-push-${w}`]: w,
        [`${C}-pull-${y}`]: y
      }, v, r.class, u.value);
    }), d = O(() => {
      const {
        flex: p
      } = e, h = o.value, g = {};
      if (h && h[0] > 0) {
        const w = `${h[0] / 2}px`;
        g.paddingLeft = w, g.paddingRight = w;
      }
      if (h && h[1] > 0 && !i.value) {
        const w = `${h[1] / 2}px`;
        g.paddingTop = w, g.paddingBottom = w;
      }
      return p && (g.flex = q$(p), a.value === !1 && !g.minWidth && (g.minWidth = 0)), g;
    });
    return () => {
      var p;
      return c($("div", L(L({}, r), {}, {
        class: f.value,
        style: [d.value, r.style]
      }), [(p = n.default) === null || p === void 0 ? void 0 : p.call(n)]));
    };
  }
});
var U$ = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { tag: "path", attrs: { d: "M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z" } }] }, name: "question-circle", theme: "outlined" };
function nc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      Y$(e, o, n[o]);
    });
  }
  return e;
}
function Y$(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Na = function(t, n) {
  var r = nc({}, t, n.attrs);
  return $(be, nc({}, r, {
    icon: U$
  }), null);
};
Na.displayName = "QuestionCircleOutlined";
Na.inheritAttrs = !1;
const Da = (e, t) => {
  let {
    slots: n,
    emit: r,
    attrs: o
  } = t;
  var i, a, l, s, c;
  const {
    prefixCls: u,
    htmlFor: f,
    labelCol: d,
    labelAlign: p,
    colon: h,
    required: g,
    requiredMark: w
  } = m(m({}, e), o), [y] = $p("Form"), C = (i = e.label) !== null && i !== void 0 ? i : (a = n.label) === null || a === void 0 ? void 0 : a.call(n);
  if (!C)
    return null;
  const {
    vertical: v,
    labelAlign: b,
    labelCol: S,
    labelWrap: P,
    colon: x
  } = Ra(), _ = d || (S == null ? void 0 : S.value) || {}, A = p || (b == null ? void 0 : b.value), E = `${u}-item-label`, M = U(E, A === "left" && `${E}-left`, _.class, {
    [`${E}-wrap`]: !!P.value
  });
  let j = C;
  const N = h === !0 || (x == null ? void 0 : x.value) !== !1 && h !== !1;
  if (N && !v.value && typeof C == "string" && C.trim() !== "" && (j = C.replace(/[:|：]\s*$/, "")), e.tooltip || n.tooltip) {
    const F = $("span", {
      class: `${u}-item-tooltip`
    }, [$(dC, {
      title: e.tooltip
    }, {
      default: () => [$(Na, null, null)]
    })]);
    j = $(Ae, null, [j, n.tooltip ? (l = n.tooltip) === null || l === void 0 ? void 0 : l.call(n, {
      class: `${u}-item-tooltip`
    }) : F]);
  }
  w === "optional" && !g && (j = $(Ae, null, [j, $("span", {
    class: `${u}-item-optional`
  }, [((s = y.value) === null || s === void 0 ? void 0 : s.optional) || ((c = Mt.Form) === null || c === void 0 ? void 0 : c.optional)])]));
  const T = U({
    [`${u}-item-required`]: g,
    [`${u}-item-required-mark-optional`]: w === "optional",
    [`${u}-item-no-colon`]: !N
  });
  return $(Wf, L(L({}, _), {}, {
    class: M
  }), {
    default: () => [$("label", {
      for: f,
      class: T,
      title: typeof C == "string" ? C : "",
      onClick: (F) => r("click", F)
    }, [j])]
  });
};
Da.displayName = "FormItemLabel";
Da.inheritAttrs = !1;
const K$ = (e) => {
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
}, Z$ = (e) => ({
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
}), rc = (e, t) => {
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
}, Q$ = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [e.componentCls]: m(m(m({}, qn(e)), Z$(e)), {
      [`${t}-text`]: {
        display: "inline-block",
        paddingInlineEnd: e.paddingSM
      },
      // ================================================================
      // =                             Size                             =
      // ================================================================
      "&-small": m({}, rc(e, e.controlHeightSM)),
      "&-large": m({}, rc(e, e.controlHeightLG))
    })
  };
}, J$ = (e) => {
  const {
    formItemCls: t,
    iconCls: n,
    componentCls: r,
    rootPrefixCls: o
  } = e;
  return {
    [t]: m(m({}, qn(e)), {
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
        animationName: _a,
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
}, eS = (e) => {
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
}, tS = (e) => {
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
}, Ut = (e) => ({
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
}), nS = (e) => {
  const {
    componentCls: t,
    formItemCls: n
  } = e;
  return {
    [`${n} ${n}-label`]: Ut(e),
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
}, rS = (e) => {
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
      .${r}-col-xl-24${n}-label`]: Ut(e),
    [`@media (max-width: ${e.screenXSMax}px)`]: [nS(e), {
      [t]: {
        [`.${r}-col-xs-24${n}-label`]: Ut(e)
      }
    }],
    [`@media (max-width: ${e.screenSMMax}px)`]: {
      [t]: {
        [`.${r}-col-sm-24${n}-label`]: Ut(e)
      }
    },
    [`@media (max-width: ${e.screenMDMax}px)`]: {
      [t]: {
        [`.${r}-col-md-24${n}-label`]: Ut(e)
      }
    },
    [`@media (max-width: ${e.screenLGMax}px)`]: {
      [t]: {
        [`.${r}-col-lg-24${n}-label`]: Ut(e)
      }
    }
  };
}, La = tt("Form", (e, t) => {
  let {
    rootPrefixCls: n
  } = t;
  const r = Ge(e, {
    formItemCls: `${e.componentCls}-item`,
    rootPrefixCls: n
  });
  return [Q$(r), J$(r), K$(r), eS(r), tS(r), rS(r), Pw(r), _a];
}), oS = V({
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
    } = W$(), i = O(() => `${r.value}-item-explain`), a = O(() => !!(e.errors && e.errors.length)), l = Z(o.value), [, s] = La(r);
    return K([a, o], () => {
      a.value && (l.value = o.value);
    }), () => {
      var c, u;
      const f = VC(`${r.value}-show-help-item`), d = va(`${r.value}-show-help-item`, f);
      return d.role = "alert", d.class = [s.value, i.value, n.class, `${r.value}-show-help`], $(fn, L(L({}, Zu(`${r.value}-show-help`)), {}, {
        onAfterEnter: () => e.onErrorVisibleChanged(!0),
        onAfterLeave: () => e.onErrorVisibleChanged(!1)
      }), {
        default: () => [Kr($(ki, L(L({}, d), {}, {
          tag: "div"
        }), {
          default: () => [(u = e.errors) === null || u === void 0 ? void 0 : u.map((p, h) => $("div", {
            key: h,
            class: l.value ? `${i.value}-${l.value}` : ""
          }, [p]))]
        }), [[Vi, !!(!((c = e.errors) === null || c === void 0) && c.length)]])]
      });
    };
  }
}), iS = V({
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
    const r = Ra(), {
      wrapperCol: o
    } = r, i = m({}, r);
    return delete i.labelCol, delete i.wrapperCol, Vf(i), k$({
      prefixCls: O(() => e.prefixCls),
      status: O(() => e.status)
    }), () => {
      var a, l, s;
      const {
        prefixCls: c,
        wrapperCol: u,
        marginBottom: f,
        onErrorVisibleChanged: d,
        help: p = (a = n.help) === null || a === void 0 ? void 0 : a.call(n),
        errors: h = Nt((l = n.errors) === null || l === void 0 ? void 0 : l.call(n)),
        // hasFeedback,
        // status,
        extra: g = (s = n.extra) === null || s === void 0 ? void 0 : s.call(n)
      } = e, w = `${c}-item`, y = u || (o == null ? void 0 : o.value) || {}, C = U(`${w}-control`, y.class);
      return $(Wf, L(L({}, y), {}, {
        class: C
      }), {
        default: () => {
          var v;
          return $(Ae, null, [$("div", {
            class: `${w}-control-input`
          }, [$("div", {
            class: `${w}-control-input-content`
          }, [(v = n.default) === null || v === void 0 ? void 0 : v.call(n)])]), f !== null || h.length ? $("div", {
            style: {
              display: "flex",
              flexWrap: "nowrap"
            }
          }, [$(oS, {
            errors: h,
            help: p,
            class: `${w}-explain-connected`,
            onErrorVisibleChanged: d
          }, null), !!f && $("div", {
            style: {
              width: 0,
              height: `${f}px`
            }
          }, null)]) : null, g ? $("div", {
            class: `${w}-extra`
          }, [g]) : null]);
        }
      });
    };
  }
});
function aS(e) {
  const t = H(e.value.slice());
  let n = null;
  return Ve(() => {
    clearTimeout(n), n = setTimeout(() => {
      t.value = e.value;
    }, e.value.length ? 0 : 10);
  }), t;
}
It("success", "warning", "error", "validating", "");
const lS = {
  success: Vt,
  warning: kt,
  error: zt,
  validating: gt
};
function Wo(e, t, n) {
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
const sS = () => ({
  htmlFor: String,
  prefixCls: String,
  label: z.any,
  help: z.any,
  extra: z.any,
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
  validateStatus: z.oneOf(It("", "success", "warning", "error", "validating")),
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
let cS = 0;
const uS = "form_item", qf = V({
  compatConfig: {
    MODE: 3
  },
  name: "AFormItem",
  inheritAttrs: !1,
  __ANT_NEW_FORM_ITEM: !0,
  props: sS(),
  slots: Object,
  setup(e, t) {
    let {
      slots: n,
      attrs: r,
      expose: o
    } = t;
    Nr(e.prop === void 0, "`prop` is deprecated. Please use `name` instead.");
    const i = `form-item-${++cS}`, {
      prefixCls: a
    } = Se("form", e), [l, s] = La(a), c = H(), u = Ra(), f = O(() => e.name || e.prop), d = H([]), p = H(!1), h = H(), g = O(() => {
      const D = f.value;
      return ji(D);
    }), w = O(() => {
      if (g.value.length) {
        const D = u.name.value, q = g.value.join("_");
        return D ? `${D}_${q}` : `${uS}_${q}`;
      } else
        return;
    }), y = () => {
      const D = u.model.value;
      if (!(!D || !f.value))
        return Wo(D, g.value, !0).v;
    }, C = O(() => y()), v = H(Pr(C.value)), b = O(() => {
      let D = e.validateTrigger !== void 0 ? e.validateTrigger : u.validateTrigger.value;
      return D = D === void 0 ? "change" : D, mt(D);
    }), S = O(() => {
      let D = u.rules.value;
      const q = e.rules, Y = e.required !== void 0 ? {
        required: !!e.required,
        trigger: b.value
      } : [], J = Wo(D, g.value);
      D = D ? J.o[J.k] || J.v : [];
      const ne = [].concat(q || D || []);
      return Gx(ne, (de) => de.required) ? ne : ne.concat(Y);
    }), P = O(() => {
      const D = S.value;
      let q = !1;
      return D && D.length && D.every((Y) => Y.required ? (q = !0, !1) : !0), q || e.required;
    }), x = H();
    Ve(() => {
      x.value = e.validateStatus;
    });
    const _ = O(() => {
      let D = {};
      return typeof e.label == "string" ? D.label = e.label : e.name && (D.label = String(e.name)), e.messageVariables && (D = m(m({}, D), e.messageVariables)), D;
    }), A = (D) => {
      if (g.value.length === 0)
        return;
      const {
        validateFirst: q = !1
      } = e, {
        triggerName: Y
      } = D || {};
      let J = S.value;
      if (Y && (J = J.filter((de) => {
        const {
          trigger: Ue
        } = de;
        return !Ue && !b.value.length ? !0 : mt(Ue || b.value).includes(Y);
      })), !J.length)
        return Promise.resolve();
      const ne = Hf(g.value, C.value, J, m({
        validateMessages: u.validateMessages.value
      }, D), q, _.value);
      return x.value = "validating", d.value = [], ne.catch((de) => de).then(function() {
        let de = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        if (x.value === "validating") {
          const Ue = de.filter((Ye) => Ye && Ye.errors.length);
          x.value = Ue.length ? "error" : "success", d.value = Ue.map((Ye) => Ye.errors), u.onValidate(f.value, !d.value.length, d.value.length ? Yo(d.value[0]) : null);
        }
      }), ne;
    }, E = () => {
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
    }, j = () => {
      x.value = e.validateStatus, p.value = !1, d.value = [];
    }, N = () => {
      var D;
      x.value = e.validateStatus, p.value = !0, d.value = [];
      const q = u.model.value || {}, Y = C.value, J = Wo(q, g.value, !0);
      Array.isArray(Y) ? J.o[J.k] = [].concat((D = v.value) !== null && D !== void 0 ? D : []) : J.o[J.k] = v.value, ke(() => {
        p.value = !1;
      });
    }, B = O(() => e.htmlFor === void 0 ? w.value : e.htmlFor), T = () => {
      const D = B.value;
      if (!D || !h.value)
        return;
      const q = h.value.$el.querySelector(`[id="${D}"]`);
      q && q.focus && q.focus();
    };
    o({
      onFieldBlur: E,
      onFieldChange: M,
      clearValidate: j,
      resetField: N
    }), eb({
      id: w,
      onFieldBlur: () => {
        e.autoLink && E();
      },
      onFieldChange: () => {
        e.autoLink && M();
      },
      clearValidate: j
    }, O(() => !!(e.autoLink && u.model.value && f.value)));
    let F = !1;
    K(f, (D) => {
      D ? F || (F = !0, u.addField(i, {
        fieldValue: C,
        fieldId: w,
        fieldName: f,
        resetField: N,
        clearValidate: j,
        namePath: g,
        validateRules: A,
        rules: S
      })) : (F = !1, u.removeField(i));
    }, {
      immediate: !0
    }), ct(() => {
      u.removeField(i);
    });
    const I = aS(d), R = O(() => e.validateStatus !== void 0 ? e.validateStatus : I.value.length ? "error" : x.value), k = O(() => ({
      [`${a.value}-item`]: !0,
      [s.value]: !0,
      // Status
      [`${a.value}-item-has-feedback`]: R.value && e.hasFeedback,
      [`${a.value}-item-has-success`]: R.value === "success",
      [`${a.value}-item-has-warning`]: R.value === "warning",
      [`${a.value}-item-has-error`]: R.value === "error",
      [`${a.value}-item-is-validating`]: R.value === "validating",
      [`${a.value}-item-hidden`]: e.hidden
    })), G = We({});
    uf.useProvide(G), Ve(() => {
      let D;
      if (e.hasFeedback) {
        const q = R.value && lS[R.value];
        D = q ? $("span", {
          class: U(`${a.value}-item-feedback-icon`, `${a.value}-item-feedback-icon-${R.value}`)
        }, [$(q, null, null)]) : null;
      }
      m(G, {
        status: R.value,
        hasFeedback: e.hasFeedback,
        feedbackIcon: D,
        isFormItemInput: !0
      });
    });
    const Q = H(null), re = H(!1), fe = () => {
      if (c.value) {
        const D = getComputedStyle(c.value);
        Q.value = parseInt(D.marginBottom, 10);
      }
    };
    $e(() => {
      K(re, () => {
        re.value && fe();
      }, {
        flush: "post",
        immediate: !0
      });
    });
    const me = (D) => {
      D || (Q.value = null);
    };
    return () => {
      var D, q;
      if (e.noStyle)
        return (D = n.default) === null || D === void 0 ? void 0 : D.call(n);
      const Y = (q = e.help) !== null && q !== void 0 ? q : n.help ? Nt(n.help()) : null, J = !!(Y != null && Array.isArray(Y) && Y.length || I.value.length);
      return re.value = J, l($("div", {
        class: [k.value, J ? `${a.value}-item-with-help` : "", r.class],
        ref: c
      }, [$(t$, L(L({}, r), {}, {
        class: `${a.value}-row`,
        key: "row"
      }), {
        default: () => {
          var ne, de;
          return $(Ae, null, [$(Da, L(L({}, e), {}, {
            htmlFor: B.value,
            required: P.value,
            requiredMark: u.requiredMark.value,
            prefixCls: a.value,
            onClick: T,
            label: e.label
          }), {
            label: n.label,
            tooltip: n.tooltip
          }), $(iS, L(L({}, e), {}, {
            errors: Y != null ? mt(Y) : I.value,
            marginBottom: Q.value,
            prefixCls: a.value,
            status: R.value,
            ref: h,
            help: Y,
            extra: (ne = e.extra) !== null && ne !== void 0 ? ne : (de = n.extra) === null || de === void 0 ? void 0 : de.call(n),
            onErrorVisibleChanged: me
          }), {
            default: n.default
          })]);
        }
      }), !!Q.value && $("div", {
        class: `${a.value}-margin-offset`,
        style: {
          marginBottom: `-${Q.value}px`
        }
      }, null)]));
    };
  }
});
function Gf(e) {
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
function oc(e) {
  let t = !1;
  return e && e.length && e.every((n) => n.required ? (t = !0, !1) : !0), t;
}
function ic(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function qo(e, t, n) {
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
function fS(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Z({}), n = arguments.length > 2 ? arguments[2] : void 0;
  const r = Pr(xe(e)), o = We({}), i = H([]), a = (v) => {
    m(xe(e), m(m({}, Pr(r)), v)), ke(() => {
      Object.keys(o).forEach((b) => {
        o[b] = {
          autoLink: !1,
          required: oc(xe(t)[b])
        };
      });
    });
  }, l = function() {
    let v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], b = arguments.length > 1 ? arguments[1] : void 0;
    return b.length ? v.filter((S) => {
      const P = ic(S.trigger || "change");
      return Kx(P, b).length;
    }) : v;
  };
  let s = null;
  const c = function(v) {
    let b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, S = arguments.length > 2 ? arguments[2] : void 0;
    const P = [], x = {};
    for (let E = 0; E < v.length; E++) {
      const M = v[E], j = qo(xe(e), M, S);
      if (!j.isValid)
        continue;
      x[M] = j.v;
      const N = l(xe(t)[M], ic(b && b.trigger));
      N.length && P.push(u(M, j.v, N, b || {}).then(() => ({
        name: M,
        errors: [],
        warnings: []
      })).catch((B) => {
        const T = [], F = [];
        return B.forEach((I) => {
          let {
            rule: {
              warningOnly: R
            },
            errors: k
          } = I;
          R ? F.push(...k) : T.push(...k);
        }), T.length ? Promise.reject({
          name: M,
          errors: T,
          warnings: F
        }) : {
          name: M,
          errors: T,
          warnings: F
        };
      }));
    }
    const _ = Gf(P);
    s = _;
    const A = _.then(() => s === _ ? Promise.resolve(x) : Promise.reject([])).catch((E) => {
      const M = E.filter((j) => j && j.errors.length);
      return M.length ? Promise.reject({
        values: x,
        errorFields: M,
        outOfDate: s !== _
      }) : Promise.resolve(x);
    });
    return A.catch((E) => E), A;
  }, u = function(v, b, S) {
    let P = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const x = Hf([v], b, S, m({
      validateMessages: yo
    }, P), !!P.validateFirst);
    return o[v] ? (o[v].validateStatus = "validating", x.catch((_) => _).then(function() {
      let _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      var A;
      if (o[v].validateStatus === "validating") {
        const E = _.filter((M) => M && M.errors.length);
        o[v].validateStatus = E.length ? "error" : "success", o[v].help = E.length ? E.map((M) => M.errors) : null, (A = n == null ? void 0 : n.onValidate) === null || A === void 0 || A.call(n, v, !E.length, E.length ? Yo(o[v].help[0]) : null);
      }
    }), x) : x.catch((_) => _);
  }, f = (v, b) => {
    let S = [], P = !0;
    v ? Array.isArray(v) ? S = v : S = [v] : (P = !1, S = i.value);
    const x = c(S, b || {}, P);
    return x.catch((_) => _), x;
  }, d = (v) => {
    let b = [];
    v ? Array.isArray(v) ? b = v : b = [v] : b = i.value, b.forEach((S) => {
      o[S] && m(o[S], {
        validateStatus: "",
        help: null
      });
    });
  }, p = (v) => {
    const b = {
      autoLink: !1
    }, S = [], P = Array.isArray(v) ? v : [v];
    for (let x = 0; x < P.length; x++) {
      const _ = P[x];
      (_ == null ? void 0 : _.validateStatus) === "error" && (b.validateStatus = "error", _.help && S.push(_.help)), b.required = b.required || (_ == null ? void 0 : _.required);
    }
    return b.help = S, b;
  };
  let h = r, g = !0;
  const w = (v) => {
    const b = [];
    i.value.forEach((S) => {
      const P = qo(v, S, !1), x = qo(h, S, !1);
      (g && (n == null ? void 0 : n.immediate) && P.isValid || !ha(P.v, x.v)) && b.push(S);
    }), f(b, {
      trigger: "change"
    }), g = !1, h = Pr(Yo(v));
  }, y = n == null ? void 0 : n.debounce;
  let C = !0;
  return K(t, () => {
    i.value = t ? Object.keys(xe(t)) : [], !C && n && n.validateOnRuleChange && f(), C = !1;
  }, {
    deep: !0,
    immediate: !0
  }), K(i, () => {
    const v = {};
    i.value.forEach((b) => {
      v[b] = m({}, o[b], {
        autoLink: !1,
        required: oc(xe(t)[b])
      }), delete o[b];
    });
    for (const b in o)
      Object.prototype.hasOwnProperty.call(o, b) && delete o[b];
    m(o, v);
  }, {
    immediate: !0
  }), K(e, y && y.wait ? Hx(w, y.wait, lw(y, ["wait"])) : w, {
    immediate: n && !!n.immediate,
    deep: !0
  }), {
    modelRef: e,
    rulesRef: t,
    initialModel: r,
    validateInfos: o,
    resetFields: a,
    validate: f,
    validateField: u,
    mergeValidateInfo: p,
    clearValidate: d
  };
}
const dS = () => ({
  layout: z.oneOf(It("horizontal", "inline", "vertical")),
  labelCol: ie(),
  wrapperCol: ie(),
  colon: Be(),
  labelAlign: jr(),
  labelWrap: Be(),
  prefixCls: String,
  requiredMark: Zt([String, Boolean]),
  /** @deprecated Will warning in future branch. Pls use `requiredMark` instead. */
  hideRequiredMark: Be(),
  model: z.object,
  rules: ie(),
  validateMessages: ie(),
  validateOnRuleChange: Be(),
  // 提交失败自动滚动到第一个错误字段
  scrollToFirstError: Fr(),
  onSubmit: qt(),
  name: String,
  validateTrigger: Zt([String, Array]),
  size: jr(),
  disabled: Be(),
  onValuesChange: qt(),
  onFieldsChange: qt(),
  onFinish: qt(),
  onFinishFailed: qt(),
  onValidate: qt()
});
function pS(e, t) {
  return ha(mt(e), mt(t));
}
const dt = V({
  compatConfig: {
    MODE: 3
  },
  name: "AForm",
  inheritAttrs: !1,
  props: qi(dS(), {
    layout: "horizontal",
    hideRequiredMark: !1,
    colon: !0
  }),
  Item: qf,
  useForm: fS,
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
      disabled: u
    } = Se("form", e), f = O(() => e.requiredMark === "" || e.requiredMark), d = O(() => {
      var I;
      return f.value !== void 0 ? f.value : s && ((I = s.value) === null || I === void 0 ? void 0 : I.requiredMark) !== void 0 ? s.value.requiredMark : !e.hideRequiredMark;
    });
    hu(c), Ic(u);
    const p = O(() => {
      var I, R;
      return (I = e.colon) !== null && I !== void 0 ? I : (R = s.value) === null || R === void 0 ? void 0 : R.colon;
    }), {
      validateMessages: h
    } = yp(), g = O(() => m(m(m({}, yo), h.value), e.validateMessages)), [w, y] = La(a), C = O(() => U(a.value, {
      [`${a.value}-${e.layout}`]: !0,
      [`${a.value}-hide-required-mark`]: d.value === !1,
      [`${a.value}-rtl`]: l.value === "rtl",
      [`${a.value}-${c.value}`]: c.value
    }, y.value)), v = Z(), b = {}, S = (I, R) => {
      b[I] = R;
    }, P = (I) => {
      delete b[I];
    }, x = (I) => {
      const R = !!I, k = R ? mt(I).map(ji) : [];
      return R ? Object.values(b).filter((G) => k.findIndex((Q) => pS(Q, G.fieldName.value)) > -1) : Object.values(b);
    }, _ = (I) => {
      if (!e.model) {
        at(!1, "Form", "model is required for resetFields to work.");
        return;
      }
      x(I).forEach((R) => {
        R.resetField();
      });
    }, A = (I) => {
      x(I).forEach((R) => {
        R.clearValidate();
      });
    }, E = (I) => {
      const {
        scrollToFirstError: R
      } = e;
      if (n("finishFailed", I), R && I.errorFields.length) {
        let k = {};
        typeof R == "object" && (k = R), j(I.errorFields[0].name, k);
      }
    }, M = function() {
      return T(...arguments);
    }, j = function(I) {
      let R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      const k = x(I ? [I] : void 0);
      if (k.length) {
        const G = k[0].fieldId.value, Q = G ? document.getElementById(G) : null;
        Q && yg(Q, m({
          scrollMode: "if-needed",
          block: "nearest"
        }, R));
      }
    }, N = function() {
      let I = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
      if (I === !0) {
        const R = [];
        return Object.values(b).forEach((k) => {
          let {
            namePath: G
          } = k;
          R.push(G.value);
        }), tc(e.model, R);
      } else
        return tc(e.model, I);
    }, B = (I, R) => {
      if (at(!(I instanceof Function), "Form", "validateFields/validateField/validate not support callback, please use promise instead"), !e.model)
        return at(!1, "Form", "model is required for validateFields to work."), Promise.reject("Form `model` is required for validateFields to work.");
      const k = !!I, G = k ? mt(I).map(ji) : [], Q = [];
      Object.values(b).forEach((me) => {
        var D;
        if (k || G.push(me.namePath.value), !(!((D = me.rules) === null || D === void 0) && D.value.length))
          return;
        const q = me.namePath.value;
        if (!k || N$(G, q)) {
          const Y = me.validateRules(m({
            validateMessages: g.value
          }, R));
          Q.push(Y.then(() => ({
            name: q,
            errors: [],
            warnings: []
          })).catch((J) => {
            const ne = [], de = [];
            return J.forEach((Ue) => {
              let {
                rule: {
                  warningOnly: Ye
                },
                errors: gn
              } = Ue;
              Ye ? de.push(...gn) : ne.push(...gn);
            }), ne.length ? Promise.reject({
              name: q,
              errors: ne,
              warnings: de
            }) : {
              name: q,
              errors: ne,
              warnings: de
            };
          }));
        }
      });
      const re = Gf(Q);
      v.value = re;
      const fe = re.then(() => v.value === re ? Promise.resolve(N(G)) : Promise.reject([])).catch((me) => {
        const D = me.filter((q) => q && q.errors.length);
        return Promise.reject({
          values: N(G),
          errorFields: D,
          outOfDate: v.value !== re
        });
      });
      return fe.catch((me) => me), fe;
    }, T = function() {
      return B(...arguments);
    }, F = (I) => {
      I.preventDefault(), I.stopPropagation(), n("submit", I), e.model && B().then((k) => {
        n("finish", k);
      }).catch((k) => {
        E(k);
      });
    };
    return o({
      resetFields: _,
      clearValidate: A,
      validateFields: B,
      getFieldsValue: N,
      validate: M,
      scrollToField: j
    }), Vf({
      model: O(() => e.model),
      name: O(() => e.name),
      labelAlign: O(() => e.labelAlign),
      labelCol: O(() => e.labelCol),
      labelWrap: O(() => e.labelWrap),
      wrapperCol: O(() => e.wrapperCol),
      vertical: O(() => e.layout === "vertical"),
      colon: p,
      requiredMark: d,
      validateTrigger: O(() => e.validateTrigger),
      rules: O(() => e.rules),
      addField: S,
      removeField: P,
      onValidate: (I, R, k) => {
        n("validate", I, R, k);
      },
      validateMessages: g
    }), K(() => e.rules, () => {
      e.validateOnRuleChange && B();
    }), () => {
      var I;
      return w($("form", L(L({}, i), {}, {
        onSubmit: F,
        class: [C.value, i.class]
      }), [(I = r.default) === null || I === void 0 ? void 0 : I.call(r)]));
    };
  }
});
dt.useInjectFormItemContext = tb;
dt.ItemRest = Oi;
dt.install = function(e) {
  return e.component(dt.name, dt), e.component(dt.Item.name, dt.Item), e.component(Oi.name, Oi), e;
};
let _r = m({}, Mt.Modal);
function mS(e) {
  e ? _r = m(m({}, _r), e) : _r = m({}, Mt.Modal);
}
function j2() {
  return _r;
}
const Ni = "internalMark", Er = V({
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
    at(e.ANT_MARK__ === Ni, "LocaleProvider", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead");
    const r = We({
      antLocale: m(m({}, e.locale), {
        exist: !0
      }),
      ANT_MARK__: Ni
    });
    return ce("localeData", r), K(() => e.locale, (o) => {
      mS(o && o.Modal), r.antLocale = m(m({}, o), {
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
Er.install = function(e) {
  return e.component(Er.name, Er), e;
};
const gS = Jr(Er), xo = V({
  name: "Notice",
  inheritAttrs: !1,
  props: ["prefixCls", "duration", "updateMark", "noticeKey", "closeIcon", "closable", "props", "onClick", "onClose", "holder", "visible"],
  setup(e, t) {
    let {
      attrs: n,
      slots: r
    } = t, o, i = !1;
    const a = O(() => e.duration === void 0 ? 4.5 : e.duration), l = () => {
      a.value && !i && (o = setTimeout(() => {
        c();
      }, a.value * 1e3));
    }, s = () => {
      o && (clearTimeout(o), o = null);
    }, c = (f) => {
      f && f.stopPropagation(), s();
      const {
        onClose: d,
        noticeKey: p
      } = e;
      d && d(p);
    }, u = () => {
      s(), l();
    };
    return $e(() => {
      l();
    }), zi(() => {
      i = !0, s();
    }), K([a, () => e.updateMark, () => e.visible], (f, d) => {
      let [p, h, g] = f, [w, y, C] = d;
      (p !== w || h !== y || g !== C && C) && u();
    }, {
      flush: "post"
    }), () => {
      var f, d;
      const {
        prefixCls: p,
        closable: h,
        closeIcon: g = (f = r.closeIcon) === null || f === void 0 ? void 0 : f.call(r),
        onClick: w,
        holder: y
      } = e, {
        class: C,
        style: v
      } = n, b = `${p}-notice`, S = Object.keys(n).reduce((x, _) => ((_.startsWith("data-") || _.startsWith("aria-") || _ === "role") && (x[_] = n[_]), x), {}), P = $("div", L({
        class: U(b, C, {
          [`${b}-closable`]: h
        }),
        style: v,
        onMouseenter: s,
        onMouseleave: l,
        onClick: w
      }, S), [$("div", {
        class: `${b}-content`
      }, [(d = r.default) === null || d === void 0 ? void 0 : d.call(r)]), h ? $("a", {
        tabindex: 0,
        onClick: c,
        class: `${b}-close`
      }, [g || $("span", {
        class: `${b}-close-x`
      }, null)]) : null]);
      return y ? $(hc, {
        to: y
      }, {
        default: () => P
      }) : P;
    };
  }
});
var hS = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
let ac = 0;
const vS = Date.now();
function lc() {
  const e = ac;
  return ac += 1, `rcNotification_${vS}_${e}`;
}
const Yr = V({
  name: "Notification",
  inheritAttrs: !1,
  props: ["prefixCls", "transitionName", "animation", "maxCount", "closeIcon", "hashId"],
  setup(e, t) {
    let {
      attrs: n,
      expose: r,
      slots: o
    } = t;
    const i = /* @__PURE__ */ new Map(), a = Z([]), l = O(() => {
      const {
        prefixCls: u,
        animation: f = "fade"
      } = e;
      let d = e.transitionName;
      return !d && f && (d = `${u}-${f}`), va(d);
    }), s = (u, f) => {
      const d = u.key || lc(), p = m(m({}, u), {
        key: d
      }), {
        maxCount: h
      } = e, g = a.value.map((y) => y.notice.key).indexOf(d), w = a.value.concat();
      g !== -1 ? w.splice(g, 1, {
        notice: p,
        holderCallback: f
      }) : (h && a.value.length >= h && (p.key = w[0].notice.key, p.updateMark = lc(), p.userPassKey = d, w.shift()), w.push({
        notice: p,
        holderCallback: f
      })), a.value = w;
    }, c = (u) => {
      a.value = a.value.filter((f) => {
        let {
          notice: {
            key: d,
            userPassKey: p
          }
        } = f;
        return (p || d) !== u;
      });
    };
    return r({
      add: s,
      remove: c,
      notices: a
    }), () => {
      var u;
      const {
        prefixCls: f,
        closeIcon: d = (u = o.closeIcon) === null || u === void 0 ? void 0 : u.call(o, {
          prefixCls: f
        })
      } = e, p = a.value.map((g, w) => {
        let {
          notice: y,
          holderCallback: C
        } = g;
        const v = w === a.value.length - 1 ? y.updateMark : void 0, {
          key: b,
          userPassKey: S
        } = y, {
          content: P
        } = y, x = m(m(m({
          prefixCls: f,
          closeIcon: typeof d == "function" ? d({
            prefixCls: f
          }) : d
        }, y), y.props), {
          key: b,
          noticeKey: S || b,
          updateMark: v,
          onClose: (_) => {
            var A;
            c(_), (A = y.onClose) === null || A === void 0 || A.call(y);
          },
          onClick: y.onClick
        });
        return C ? $("div", {
          key: b,
          class: `${f}-hook-holder`,
          ref: (_) => {
            typeof b > "u" || (_ ? (i.set(b, _), C(_, x)) : i.delete(b));
          }
        }, null) : $(xo, L(L({}, x), {}, {
          class: U(x.class, e.hashId)
        }), {
          default: () => [typeof P == "function" ? P({
            prefixCls: f
          }) : P]
        });
      }), h = {
        [f]: 1,
        [n.class]: !!n.class,
        [e.hashId]: !0
      };
      return $("div", {
        class: h,
        style: n.style || {
          top: "65px",
          left: "50%"
        }
      }, [$(ki, L({
        tag: "div"
      }, l.value), {
        default: () => [p]
      })]);
    };
  }
});
Yr.newInstance = function(t, n) {
  const r = t || {}, {
    name: o = "notification",
    getContainer: i,
    appContext: a,
    prefixCls: l,
    rootPrefixCls: s,
    transitionName: c,
    hasTransitionName: u,
    useStyle: f
  } = r, d = hS(r, ["name", "getContainer", "appContext", "prefixCls", "rootPrefixCls", "transitionName", "hasTransitionName", "useStyle"]), p = document.createElement("div");
  i ? i().appendChild(p) : document.body.appendChild(p);
  const h = V({
    compatConfig: {
      MODE: 3
    },
    name: "NotificationWrapper",
    setup(w, y) {
      let {
        attrs: C
      } = y;
      const v = H(), b = O(() => ve.getPrefixCls(o, l)), [, S] = f(b);
      return $e(() => {
        n({
          notice(P) {
            var x;
            (x = v.value) === null || x === void 0 || x.add(P);
          },
          removeNotice(P) {
            var x;
            (x = v.value) === null || x === void 0 || x.remove(P);
          },
          destroy() {
            In(null, p), p.parentNode && p.parentNode.removeChild(p);
          },
          component: v
        });
      }), () => {
        const P = ve, x = P.getRootPrefixCls(s, b.value), _ = u ? c : `${b.value}-${c}`;
        return $(An, L(L({}, P), {}, {
          prefixCls: x
        }), {
          default: () => [$(Yr, L(L({
            ref: v
          }, C), {}, {
            prefixCls: b.value,
            transitionName: _,
            hashId: S.value
          }), null)]
        });
      };
    }
  }), g = $(h, d);
  g.appContext = a || g.appContext, In(g, p);
};
let sc = 0;
const yS = Date.now();
function cc() {
  const e = sc;
  return sc += 1, `rcNotification_${yS}_${e}`;
}
const bS = V({
  name: "HookNotification",
  inheritAttrs: !1,
  props: ["prefixCls", "transitionName", "animation", "maxCount", "closeIcon", "hashId", "remove", "notices", "getStyles", "getClassName", "onAllRemoved", "getContainer"],
  setup(e, t) {
    let {
      attrs: n,
      slots: r
    } = t;
    const o = /* @__PURE__ */ new Map(), i = O(() => e.notices), a = O(() => {
      let u = e.transitionName;
      if (!u && e.animation)
        switch (typeof e.animation) {
          case "string":
            u = e.animation;
            break;
          case "function":
            u = e.animation().name;
            break;
          case "object":
            u = e.animation.name;
            break;
          default:
            u = `${e.prefixCls}-fade`;
            break;
        }
      return va(u);
    }), l = (u) => e.remove(u), s = Z({});
    K(i, () => {
      const u = {};
      Object.keys(s.value).forEach((f) => {
        u[f] = [];
      }), e.notices.forEach((f) => {
        const {
          placement: d = "topRight"
        } = f.notice;
        d && (u[d] = u[d] || [], u[d].push(f));
      }), s.value = u;
    });
    const c = O(() => Object.keys(s.value));
    return () => {
      var u;
      const {
        prefixCls: f,
        closeIcon: d = (u = r.closeIcon) === null || u === void 0 ? void 0 : u.call(r, {
          prefixCls: f
        })
      } = e, p = c.value.map((h) => {
        var g, w;
        const y = s.value[h], C = (g = e.getClassName) === null || g === void 0 ? void 0 : g.call(e, h), v = (w = e.getStyles) === null || w === void 0 ? void 0 : w.call(e, h), b = y.map((x, _) => {
          let {
            notice: A,
            holderCallback: E
          } = x;
          const M = _ === i.value.length - 1 ? A.updateMark : void 0, {
            key: j,
            userPassKey: N
          } = A, {
            content: B
          } = A, T = m(m(m({
            prefixCls: f,
            closeIcon: typeof d == "function" ? d({
              prefixCls: f
            }) : d
          }, A), A.props), {
            key: j,
            noticeKey: N || j,
            updateMark: M,
            onClose: (F) => {
              var I;
              l(F), (I = A.onClose) === null || I === void 0 || I.call(A);
            },
            onClick: A.onClick
          });
          return E ? $("div", {
            key: j,
            class: `${f}-hook-holder`,
            ref: (F) => {
              typeof j > "u" || (F ? (o.set(j, F), E(F, T)) : o.delete(j));
            }
          }, null) : $(xo, L(L({}, T), {}, {
            class: U(T.class, e.hashId)
          }), {
            default: () => [typeof B == "function" ? B({
              prefixCls: f
            }) : B]
          });
        }), S = {
          [f]: 1,
          [`${f}-${h}`]: 1,
          [n.class]: !!n.class,
          [e.hashId]: !0,
          [C]: !!C
        };
        function P() {
          var x;
          y.length > 0 || (Reflect.deleteProperty(s.value, h), (x = e.onAllRemoved) === null || x === void 0 || x.call(e));
        }
        return $("div", {
          key: h,
          class: S,
          style: n.style || v || {
            top: "65px",
            left: "50%"
          }
        }, [$(ki, L(L({
          tag: "div"
        }, a.value), {}, {
          onAfterLeave: P
        }), {
          default: () => [b]
        })]);
      });
      return $(ef, {
        getContainer: e.getContainer
      }, {
        default: () => [p]
      });
    };
  }
}), xS = bS;
var wS = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const CS = () => document.body;
let uc = 0;
function $S() {
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
function Xf() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    getContainer: t = CS,
    motion: n,
    prefixCls: r,
    maxCount: o,
    getClassName: i,
    getStyles: a,
    onAllRemoved: l
  } = e, s = wS(e, ["getContainer", "motion", "prefixCls", "maxCount", "getClassName", "getStyles", "onAllRemoved"]), c = H([]), u = H(), f = (y, C) => {
    const v = y.key || cc(), b = m(m({}, y), {
      key: v
    }), S = c.value.map((x) => x.notice.key).indexOf(v), P = c.value.concat();
    S !== -1 ? P.splice(S, 1, {
      notice: b,
      holderCallback: C
    }) : (o && c.value.length >= o && (b.key = P[0].notice.key, b.updateMark = cc(), b.userPassKey = v, P.shift()), P.push({
      notice: b,
      holderCallback: C
    })), c.value = P;
  }, d = (y) => {
    c.value = c.value.filter((C) => {
      let {
        notice: {
          key: v,
          userPassKey: b
        }
      } = C;
      return (b || v) !== y;
    });
  }, p = () => {
    c.value = [];
  }, h = () => $(xS, {
    ref: u,
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
  }, null), g = H([]), w = {
    open: (y) => {
      const C = $S(s, y);
      (C.key === null || C.key === void 0) && (C.key = `vc-notification-${uc}`, uc += 1), g.value = [...g.value, {
        type: "open",
        config: C
      }];
    },
    close: (y) => {
      g.value = [...g.value, {
        type: "close",
        key: y
      }];
    },
    destroy: () => {
      g.value = [...g.value, {
        type: "destroy"
      }];
    }
  };
  return K(g, () => {
    g.value.length && (g.value.forEach((y) => {
      switch (y.type) {
        case "open":
          f(y.config);
          break;
        case "close":
          d(y.key);
          break;
        case "destroy":
          p();
          break;
      }
    }), g.value = []);
  }), [w, h];
}
const SS = (e) => {
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
    motionEaseInOutCirc: u,
    motionDurationSlow: f,
    marginXS: d,
    paddingXS: p,
    borderRadiusLG: h,
    zIndexPopup: g,
    // Custom token
    messageNoticeContentPadding: w
  } = e, y = new se("MessageMoveIn", {
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
  }), C = new se("MessageMoveOut", {
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
      [t]: m(m({}, qn(e)), {
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
          animationName: y,
          animationDuration: f,
          animationPlayState: "paused",
          animationTimingFunction: u
        },
        [`
        ${t}-move-up-appear${t}-move-up-appear-active,
        ${t}-move-up-enter${t}-move-up-enter-active
      `]: {
          animationPlayState: "running"
        },
        [`${t}-move-up-leave`]: {
          animationName: C,
          animationDuration: f,
          animationPlayState: "paused",
          animationTimingFunction: u
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
          padding: w,
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
}, Ba = tt("Message", (e) => {
  const t = Ge(e, {
    messageNoticeContentPadding: `${(e.controlHeightLG - e.fontSize * e.lineHeight) / 2}px ${e.paddingSM}px`
  });
  return [SS(t)];
}, (e) => ({
  height: 150,
  zIndexPopup: e.zIndexPopupBase + 10
})), OS = {
  info: $(mn, null, null),
  success: $(Vt, null, null),
  error: $(zt, null, null),
  warning: $(kt, null, null),
  loading: $(gt, null, null)
}, Uf = V({
  name: "PureContent",
  inheritAttrs: !1,
  props: ["prefixCls", "type", "icon"],
  setup(e, t) {
    let {
      slots: n
    } = t;
    return () => {
      var r;
      return $("div", {
        class: U(`${e.prefixCls}-custom-content`, `${e.prefixCls}-${e.type}`)
      }, [e.icon || OS[e.type], $("span", null, [(r = n.default) === null || r === void 0 ? void 0 : r.call(n)])]);
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
    } = Yi(), a = O(() => e.prefixCls || i("message")), [, l] = Ba(a);
    return $(xo, L(L({}, r), {}, {
      prefixCls: a.value,
      class: U(l.value, `${a.value}-notice-pure-panel`),
      noticeKey: "pure",
      duration: null
    }), {
      default: () => [$(Uf, {
        prefixCls: a.value,
        type: e.type,
        icon: e.icon
      }, {
        default: () => [(o = n.default) === null || o === void 0 ? void 0 : o.call(n)]
      })]
    });
  }
});
var PS = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const TS = 8, _S = 3, ES = V({
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
    } = Se("message", e), l = O(() => i("message", e.prefixCls)), [, s] = Ba(l), c = () => {
      var g;
      const w = (g = e.top) !== null && g !== void 0 ? g : TS;
      return {
        left: "50%",
        transform: "translateX(-50%)",
        top: typeof w == "number" ? `${w}px` : w
      };
    }, u = () => U(s.value, e.rtl ? `${l.value}-rtl` : ""), f = () => {
      var g;
      return ia({
        prefixCls: l.value,
        animation: (g = e.animation) !== null && g !== void 0 ? g : "move-up",
        transitionName: e.transitionName
      });
    }, d = $("span", {
      class: `${l.value}-close-x`
    }, [$(Yn, {
      class: `${l.value}-close-icon`
    }, null)]), [p, h] = Xf({
      //@ts-ignore
      getStyles: c,
      prefixCls: l.value,
      getClassName: u,
      motion: f,
      closable: !1,
      closeIcon: d,
      duration: (r = e.duration) !== null && r !== void 0 ? r : _S,
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
let fc = 0;
function AS(e) {
  const t = H(null), n = Symbol("messageHolderKey"), r = (s) => {
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
      prefixCls: u,
      hashId: f
    } = t.value, d = `${u}-notice`, {
      content: p,
      icon: h,
      type: g,
      key: w,
      class: y,
      onClose: C
    } = s, v = PS(s, ["content", "icon", "type", "key", "class", "onClose"]);
    let b = w;
    return b == null && (fc += 1, b = `antd-message-${fc}`), zd((S) => (c(m(m({}, v), {
      key: b,
      content: () => $(Uf, {
        prefixCls: u,
        type: g,
        icon: typeof h == "function" ? h() : h
      }, {
        default: () => [typeof p == "function" ? p() : p]
      }),
      placement: "top",
      // @ts-ignore
      class: U(g && `${d}-${g}`, f, y),
      onClose: () => {
        C == null || C(), S();
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
    const c = (u, f, d) => {
      let p;
      u && typeof u == "object" && "content" in u ? p = u : p = {
        content: u
      };
      let h, g;
      typeof f == "function" ? g = f : (h = f, g = d);
      const w = m(m({
        onClose: g,
        duration: h
      }, p), {
        type: s
      });
      return o(w);
    };
    a[s] = c;
  }), [a, () => $(ES, L(L({
    key: n
  }, e), {}, {
    ref: t
  }), null)];
}
function IS(e) {
  return AS(e);
}
let Yf = 3, Kf, we, MS = 1, Zf = "", Qf = "move-up", Jf = !1, ed = () => document.body, td, nd = !1;
function FS() {
  return MS++;
}
function jS(e) {
  e.top !== void 0 && (Kf = e.top, we = null), e.duration !== void 0 && (Yf = e.duration), e.prefixCls !== void 0 && (Zf = e.prefixCls), e.getContainer !== void 0 && (ed = e.getContainer, we = null), e.transitionName !== void 0 && (Qf = e.transitionName, we = null, Jf = !0), e.maxCount !== void 0 && (td = e.maxCount, we = null), e.rtl !== void 0 && (nd = e.rtl);
}
function RS(e, t) {
  if (we) {
    t(we);
    return;
  }
  Yr.newInstance({
    appContext: e.appContext,
    prefixCls: e.prefixCls || Zf,
    rootPrefixCls: e.rootPrefixCls,
    transitionName: Qf,
    hasTransitionName: Jf,
    style: {
      top: Kf
    },
    getContainer: ed || e.getPopupContainer,
    maxCount: td,
    name: "message",
    useStyle: Ba
  }, (n) => {
    if (we) {
      t(we);
      return;
    }
    we = n, t(n);
  });
}
const rd = {
  info: mn,
  success: Vt,
  error: zt,
  warning: kt,
  loading: gt
}, NS = Object.keys(rd);
function DS(e) {
  const t = e.duration !== void 0 ? e.duration : Yf, n = e.key || FS(), r = new Promise((i) => {
    const a = () => (typeof e.onClose == "function" && e.onClose(), i(!0));
    RS(e, (l) => {
      l.notice({
        key: n,
        duration: t,
        style: e.style || {},
        class: e.class,
        content: (s) => {
          let {
            prefixCls: c
          } = s;
          const u = rd[e.type], f = u ? $(u, null, null) : "", d = U(`${c}-custom-content`, {
            [`${c}-${e.type}`]: e.type,
            [`${c}-rtl`]: nd === !0
          });
          return $("div", {
            class: d
          }, [typeof e.icon == "function" ? e.icon() : e.icon || f, $("span", null, [typeof e.content == "function" ? e.content() : e.content])]);
        },
        onClose: a,
        onClick: e.onClick
      });
    });
  }), o = () => {
    we && we.removeNotice(n);
  };
  return o.then = (i, a) => r.then(i, a), o.promise = r, o;
}
function LS(e) {
  return Object.prototype.toString.call(e) === "[object Object]" && !!e.content;
}
const sn = {
  open: DS,
  config: jS,
  destroy(e) {
    if (we)
      if (e) {
        const {
          removeNotice: t
        } = we;
        t(e);
      } else {
        const {
          destroy: t
        } = we;
        t(), we = null;
      }
  }
};
function BS(e, t) {
  e[t] = (n, r, o) => LS(n) ? e.open(m(m({}, n), {
    type: t
  })) : (typeof r == "function" && (o = r, r = void 0), e.open({
    content: n,
    duration: r,
    type: t,
    onClose: o
  }));
}
NS.forEach((e) => BS(sn, e));
sn.warn = sn.warning;
sn.useMessage = IS;
const HS = (e) => {
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
}, zS = (e) => {
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
    colorError: u,
    colorTextHeading: f,
    notificationBg: d,
    notificationPadding: p,
    notificationMarginEdge: h,
    motionDurationMid: g,
    motionEaseInOut: w,
    fontSize: y,
    lineHeight: C,
    width: v,
    notificationIconSize: b
  } = e, S = `${n}-notice`, P = new se("antNotificationFadeIn", {
    "0%": {
      left: {
        _skip_check_: !0,
        value: v
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
  }), x = new se("antNotificationFadeOut", {
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
      [n]: m(m(m(m({}, qn(e)), {
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
          animationTimingFunction: w,
          animationFillMode: "both",
          opacity: 0,
          animationPlayState: "paused"
        },
        [`${n}-fade-leave`]: {
          animationTimingFunction: w,
          animationFillMode: "both",
          animationDuration: g,
          animationPlayState: "paused"
        },
        [`${n}-fade-enter${n}-fade-enter-active, ${n}-fade-appear${n}-fade-appear-active`]: {
          animationName: P,
          animationPlayState: "running"
        },
        [`${n}-fade-leave${n}-fade-leave-active`]: {
          animationName: x,
          animationPlayState: "running"
        }
      }), HS(e)), {
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
        width: v,
        maxWidth: `calc(100vw - ${h * 2}px)`,
        marginBottom: i,
        marginInlineStart: "auto",
        padding: p,
        overflow: "hidden",
        lineHeight: C,
        wordWrap: "break-word",
        background: d,
        borderRadius: a,
        boxShadow: r,
        [`${n}-close-icon`]: {
          fontSize: y,
          cursor: "pointer"
        },
        [`${S}-message`]: {
          marginBottom: e.marginXS,
          color: f,
          fontSize: o,
          lineHeight: e.lineHeightLG
        },
        [`${S}-description`]: {
          fontSize: y
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
          fontSize: y
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
            color: u
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
}, Ha = tt("Notification", (e) => {
  const t = e.paddingMD, n = e.paddingLG, r = Ge(e, {
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
  return [zS(r)];
}, (e) => ({
  zIndexPopup: e.zIndexPopupBase + 50,
  width: 384
}));
function od(e, t) {
  return t || $("span", {
    class: `${e}-close-x`
  }, [$(Yn, {
    class: `${e}-close-icon`
  }, null)]);
}
$(mn, null, null), $(Vt, null, null), $(zt, null, null), $(kt, null, null), $(gt, null, null);
const VS = {
  success: Vt,
  info: mn,
  error: zt,
  warning: kt
};
function id(e) {
  let {
    prefixCls: t,
    icon: n,
    type: r,
    message: o,
    description: i,
    btn: a
  } = e, l = null;
  if (n)
    l = $("span", {
      class: `${t}-icon`
    }, [Yt(n)]);
  else if (r) {
    const s = VS[r];
    l = $(s, {
      class: `${t}-icon ${t}-icon-${r}`
    }, null);
  }
  return $("div", {
    class: U({
      [`${t}-with-icon`]: l
    }),
    role: "alert"
  }, [l, $("div", {
    class: `${t}-message`
  }, [o]), $("div", {
    class: `${t}-description`
  }, [i]), a && $("div", {
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
    } = Se("notification", e), n = O(() => e.prefixCls || t("notification")), r = O(() => `${n.value}-notice`), [, o] = Ha(n);
    return () => $(xo, L(L({}, e), {}, {
      prefixCls: n.value,
      class: U(o.value, `${r.value}-pure-panel`),
      noticeKey: "pure",
      duration: null,
      closable: e.closable,
      closeIcon: od(n.value, e.closeIcon)
    }), {
      default: () => [$(id, {
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
function ad(e, t, n) {
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
function kS(e) {
  return {
    name: `${e}-fade`
  };
}
var WS = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const dc = 24, qS = 4.5, GS = V({
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
    } = Se("notification", e), i = O(() => e.prefixCls || r("notification")), a = (d) => {
      var p, h;
      return ad(d, (p = e.top) !== null && p !== void 0 ? p : dc, (h = e.bottom) !== null && h !== void 0 ? h : dc);
    }, [, l] = Ha(i), s = () => U(l.value, {
      [`${i.value}-rtl`]: e.rtl
    }), c = () => kS(i.value), [u, f] = Xf({
      prefixCls: i.value,
      getStyles: a,
      getClassName: s,
      motion: c,
      closable: !0,
      closeIcon: od(i.value),
      duration: qS,
      getContainer: () => {
        var d, p;
        return ((d = e.getPopupContainer) === null || d === void 0 ? void 0 : d.call(e)) || ((p = o.value) === null || p === void 0 ? void 0 : p.call(o)) || document.body;
      },
      maxCount: e.maxCount,
      hashId: l.value,
      onAllRemoved: e.onAllRemoved
    });
    return n(m(m({}, u), {
      prefixCls: i.value,
      hashId: l
    })), f;
  }
});
function XS(e) {
  const t = H(null), n = Symbol("notificationHolderKey"), r = (l) => {
    if (!t.value)
      return;
    const {
      open: s,
      prefixCls: c,
      hashId: u
    } = t.value, f = `${c}-notice`, {
      message: d,
      description: p,
      icon: h,
      type: g,
      btn: w,
      class: y
    } = l, C = WS(l, ["message", "description", "icon", "type", "btn", "class"]);
    return s(m(m({
      placement: "topRight"
    }, C), {
      content: () => $(id, {
        prefixCls: f,
        icon: typeof h == "function" ? h() : h,
        type: g,
        message: typeof d == "function" ? d() : d,
        description: typeof p == "function" ? p() : p,
        btn: typeof w == "function" ? w() : w
      }, null),
      // @ts-ignore
      class: U(g && `${f}-${g}`, u, y)
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
  }), [i, () => $(GS, L(L({
    key: n
  }, e), {}, {
    ref: t
  }), null)];
}
function US(e) {
  return XS(e);
}
const $t = {};
let ld = 4.5, sd = "24px", cd = "24px", Di = "", ud = "topRight", fd = () => document.body, dd = null, Li = !1, pd;
function YS(e) {
  const {
    duration: t,
    placement: n,
    bottom: r,
    top: o,
    getContainer: i,
    closeIcon: a,
    prefixCls: l
  } = e;
  l !== void 0 && (Di = l), t !== void 0 && (ld = t), n !== void 0 && (ud = n), r !== void 0 && (cd = typeof r == "number" ? `${r}px` : r), o !== void 0 && (sd = typeof o == "number" ? `${o}px` : o), i !== void 0 && (fd = i), a !== void 0 && (dd = a), e.rtl !== void 0 && (Li = e.rtl), e.maxCount !== void 0 && (pd = e.maxCount);
}
function KS(e, t) {
  let {
    prefixCls: n,
    placement: r = ud,
    getContainer: o = fd,
    top: i,
    bottom: a,
    closeIcon: l = dd,
    appContext: s
  } = e;
  const {
    getPrefixCls: c
  } = s2(), u = c("notification", n || Di), f = `${u}-${r}-${Li}`, d = $t[f];
  if (d) {
    Promise.resolve(d).then((h) => {
      t(h);
    });
    return;
  }
  const p = U(`${u}-${r}`, {
    [`${u}-rtl`]: Li === !0
  });
  Yr.newInstance({
    name: "notification",
    prefixCls: n || Di,
    useStyle: Ha,
    class: p,
    style: ad(r, i ?? sd, a ?? cd),
    appContext: s,
    getContainer: o,
    closeIcon: (h) => {
      let {
        prefixCls: g
      } = h;
      return $("span", {
        class: `${g}-close-x`
      }, [Yt(l, {}, $(Yn, {
        class: `${g}-close-icon`
      }, null))]);
    },
    maxCount: pd,
    hasTransitionName: !0
  }, (h) => {
    $t[f] = h, t(h);
  });
}
const ZS = {
  success: Ea,
  info: Ia,
  error: Ma,
  warning: Aa
};
function QS(e) {
  const {
    icon: t,
    type: n,
    description: r,
    message: o,
    btn: i
  } = e, a = e.duration === void 0 ? ld : e.duration;
  KS(e, (l) => {
    l.notice({
      content: (s) => {
        let {
          prefixCls: c
        } = s;
        const u = `${c}-notice`;
        let f = null;
        if (t)
          f = () => $("span", {
            class: `${u}-icon`
          }, [Yt(t)]);
        else if (n) {
          const d = ZS[n];
          f = () => $(d, {
            class: `${u}-icon ${u}-icon-${n}`
          }, null);
        }
        return $("div", {
          class: f ? `${u}-with-icon` : ""
        }, [f && f(), $("div", {
          class: `${u}-message`
        }, [!r && f ? $("span", {
          class: `${u}-message-single-line-auto-margin`
        }, null) : null, Yt(o)]), $("div", {
          class: `${u}-description`
        }, [Yt(r)]), i ? $("span", {
          class: `${u}-btn`
        }, [Yt(i)]) : null]);
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
const cn = {
  open: QS,
  close(e) {
    Object.keys($t).forEach((t) => Promise.resolve($t[t]).then((n) => {
      n.removeNotice(e);
    }));
  },
  config: YS,
  destroy() {
    Object.keys($t).forEach((e) => {
      Promise.resolve($t[e]).then((t) => {
        t.destroy();
      }), delete $t[e];
    });
  }
}, JS = ["success", "info", "warning", "error"];
JS.forEach((e) => {
  cn[e] = (t) => cn.open(m(m({}, t), {
    type: e
  }));
});
cn.warn = cn.warning;
cn.useNotification = US;
const e2 = `-ant-${Date.now()}-${Math.random()}`;
function t2(e, t) {
  const n = {}, r = (a, l) => {
    let s = a.clone();
    return s = (l == null ? void 0 : l(s)) || s, s.toRgbString();
  }, o = (a, l) => {
    const s = new ge(a), c = Ft(s.toRgbString());
    n[`${l}-color`] = r(s), n[`${l}-color-disabled`] = c[1], n[`${l}-color-hover`] = c[4], n[`${l}-color-active`] = c[6], n[`${l}-color-outline`] = s.clone().setAlpha(0.2).toRgbString(), n[`${l}-color-deprecated-bg`] = c[0], n[`${l}-color-deprecated-border`] = c[2];
  };
  if (t.primaryColor) {
    o(t.primaryColor, "primary");
    const a = new ge(t.primaryColor), l = Ft(a.toRgbString());
    l.forEach((c, u) => {
      n[`primary-${u + 1}`] = c;
    }), n["primary-color-deprecated-l-35"] = r(a, (c) => c.lighten(35)), n["primary-color-deprecated-l-20"] = r(a, (c) => c.lighten(20)), n["primary-color-deprecated-t-20"] = r(a, (c) => c.tint(20)), n["primary-color-deprecated-t-50"] = r(a, (c) => c.tint(50)), n["primary-color-deprecated-f-12"] = r(a, (c) => c.setAlpha(c.getAlpha() * 0.12));
    const s = new ge(l[0]);
    n["primary-color-active-deprecated-f-30"] = r(s, (c) => c.setAlpha(c.getAlpha() * 0.3)), n["primary-color-active-deprecated-d-02"] = r(s, (c) => c.darken(2));
  }
  return t.successColor && o(t.successColor, "success"), t.warningColor && o(t.warningColor, "warning"), t.errorColor && o(t.errorColor, "error"), t.infoColor && o(t.infoColor, "info"), `
  :root {
    ${Object.keys(n).map((a) => `--${e}-${a}: ${n[a]};`).join(`
`)}
  }
  `.trim();
}
function n2(e, t) {
  const n = t2(e, t);
  qe() ? jn(n, `${e2}-dynamic-theme`) : at(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const r2 = (e) => {
  const [t, n] = pn();
  return ii(O(() => ({
    theme: t.value,
    token: n.value,
    hashId: "",
    path: ["ant-design-icons", e.value]
  })), () => [{
    [`.${e.value}`]: m(m({}, tg()), {
      [`.${e.value} .${e.value}-icon`]: {
        display: "block"
      }
    })
  }]);
};
function o2(e, t) {
  const n = O(() => (e == null ? void 0 : e.value) || {}), r = O(() => n.value.inherit === !1 || !(t != null && t.value) ? lu : t.value);
  return O(() => {
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
var i2 = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const a2 = "ant";
function en() {
  return ve.prefixCls || a2;
}
function md() {
  return ve.iconPrefixCls || Xi;
}
const za = We({}), ve = We({});
Ve(() => {
  m(ve, za), ve.prefixCls = en(), ve.iconPrefixCls = md(), ve.getPrefixCls = (e, t) => t || (e ? `${ve.prefixCls}-${e}` : ve.prefixCls), ve.getRootPrefixCls = () => ve.prefixCls ? ve.prefixCls : en();
});
let Go;
const l2 = (e) => {
  Go && Go(), Go = Ve(() => {
    m(za, We(e)), m(ve, We(e));
  }), e.theme && n2(en(), e.theme);
}, s2 = () => ({
  getPrefixCls: (e, t) => t || (e ? `${en()}-${e}` : en()),
  getIconPrefixCls: md,
  getRootPrefixCls: () => ve.prefixCls ? ve.prefixCls : en()
}), An = V({
  compatConfig: {
    MODE: 3
  },
  name: "AConfigProvider",
  inheritAttrs: !1,
  props: bp(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const r = Yi(), o = (T, F) => {
      const {
        prefixCls: I = "ant"
      } = e;
      if (F)
        return F;
      const R = I || r.getPrefixCls("");
      return T ? `${R}-${T}` : R;
    }, i = O(() => e.iconPrefixCls || r.iconPrefixCls.value || Xi), a = O(() => i.value !== r.iconPrefixCls.value), l = O(() => {
      var T;
      return e.csp || ((T = r.csp) === null || T === void 0 ? void 0 : T.value);
    }), s = r2(i), c = o2(O(() => e.theme), O(() => {
      var T;
      return (T = r.theme) === null || T === void 0 ? void 0 : T.value;
    })), u = (T) => (e.renderEmpty || n.renderEmpty || r.renderEmpty || gg)(T), f = O(() => {
      var T, F;
      return (T = e.autoInsertSpaceInButton) !== null && T !== void 0 ? T : (F = r.autoInsertSpaceInButton) === null || F === void 0 ? void 0 : F.value;
    }), d = O(() => {
      var T;
      return e.locale || ((T = r.locale) === null || T === void 0 ? void 0 : T.value);
    });
    K(d, () => {
      za.locale = d.value;
    }, {
      immediate: !0
    });
    const p = O(() => {
      var T;
      return e.direction || ((T = r.direction) === null || T === void 0 ? void 0 : T.value);
    }), h = O(() => {
      var T, F;
      return (T = e.space) !== null && T !== void 0 ? T : (F = r.space) === null || F === void 0 ? void 0 : F.value;
    }), g = O(() => {
      var T, F;
      return (T = e.virtual) !== null && T !== void 0 ? T : (F = r.virtual) === null || F === void 0 ? void 0 : F.value;
    }), w = O(() => {
      var T, F;
      return (T = e.dropdownMatchSelectWidth) !== null && T !== void 0 ? T : (F = r.dropdownMatchSelectWidth) === null || F === void 0 ? void 0 : F.value;
    }), y = O(() => {
      var T;
      return e.getTargetContainer !== void 0 ? e.getTargetContainer : (T = r.getTargetContainer) === null || T === void 0 ? void 0 : T.value;
    }), C = O(() => {
      var T;
      return e.getPopupContainer !== void 0 ? e.getPopupContainer : (T = r.getPopupContainer) === null || T === void 0 ? void 0 : T.value;
    }), v = O(() => {
      var T;
      return e.pageHeader !== void 0 ? e.pageHeader : (T = r.pageHeader) === null || T === void 0 ? void 0 : T.value;
    }), b = O(() => {
      var T;
      return e.input !== void 0 ? e.input : (T = r.input) === null || T === void 0 ? void 0 : T.value;
    }), S = O(() => {
      var T;
      return e.pagination !== void 0 ? e.pagination : (T = r.pagination) === null || T === void 0 ? void 0 : T.value;
    }), P = O(() => {
      var T;
      return e.form !== void 0 ? e.form : (T = r.form) === null || T === void 0 ? void 0 : T.value;
    }), x = O(() => {
      var T;
      return e.select !== void 0 ? e.select : (T = r.select) === null || T === void 0 ? void 0 : T.value;
    }), _ = O(() => e.componentSize), A = O(() => e.componentDisabled), E = O(() => {
      var T, F;
      return (T = e.wave) !== null && T !== void 0 ? T : (F = r.wave) === null || F === void 0 ? void 0 : F.value;
    }), M = {
      csp: l,
      autoInsertSpaceInButton: f,
      locale: d,
      direction: p,
      space: h,
      virtual: g,
      dropdownMatchSelectWidth: w,
      getPrefixCls: o,
      iconPrefixCls: i,
      theme: O(() => {
        var T, F;
        return (T = c.value) !== null && T !== void 0 ? T : (F = r.theme) === null || F === void 0 ? void 0 : F.value;
      }),
      renderEmpty: u,
      getTargetContainer: y,
      getPopupContainer: C,
      pageHeader: v,
      input: b,
      pagination: S,
      form: P,
      select: x,
      componentSize: _,
      componentDisabled: A,
      transformCellText: O(() => e.transformCellText),
      wave: E
    }, j = O(() => {
      const T = c.value || {}, {
        algorithm: F,
        token: I
      } = T, R = i2(T, ["algorithm", "token"]), k = F && (!Array.isArray(F) || F.length > 0) ? Wc(F) : void 0;
      return m(m({}, R), {
        theme: k,
        token: m(m({}, oo), I)
      });
    }), N = O(() => {
      var T, F;
      let I = {};
      return d.value && (I = ((T = d.value.Form) === null || T === void 0 ? void 0 : T.defaultValidateMessages) || ((F = Mt.Form) === null || F === void 0 ? void 0 : F.defaultValidateMessages) || {}), e.form && e.form.validateMessages && (I = m(m({}, I), e.form.validateMessages)), I;
    });
    xp(M), vp({
      validateMessages: N
    }), hu(_), Ic(A);
    const B = (T) => {
      var F, I;
      let R = a.value ? s((F = n.default) === null || F === void 0 ? void 0 : F.call(n)) : (I = n.default) === null || I === void 0 ? void 0 : I.call(n);
      if (e.theme) {
        const k = /* @__PURE__ */ function() {
          return R;
        }();
        R = $(ug, {
          value: j.value
        }, {
          default: () => [k]
        });
      }
      return $(gS, {
        locale: d.value || T,
        ANT_MARK__: Ni
      }, {
        default: () => [R]
      });
    };
    return Ve(() => {
      p.value && (sn.config({
        rtl: p.value === "rtl"
      }), cn.config({
        rtl: p.value === "rtl"
      }));
    }), () => $(Fc, {
      children: (T, F, I) => B(I)
    }, null);
  }
});
An.config = l2;
An.install = function(e) {
  e.component(An.name, An);
};
const pc = We({
  Text: {
    component: ae(
      oe(() => import("./Text-wlYt0BcU.js"))
    )
  },
  Password: {
    component: ae(
      oe(() => import("./Text-wlYt0BcU.js"))
    ),
    defaultProps: {
      type: "password"
    }
  },
  Textarea: {
    component: ae(
      oe(() => import("./Textarea-BMcbjKip.js"))
    )
  },
  Number: {
    component: ae(
      oe(() => import("./Number-Z287YM4E.js"))
    )
  },
  Select: {
    component: ae(
      oe(() => import("./AsyncSelect-lFdRqnmN.js"))
    )
  },
  Radio: {
    component: ae(
      oe(() => import("./AsyncRadio-nzXPhW4E.js"))
    )
  },
  Checkbox: {
    component: ae(
      oe(() => import("./AsyncCheckBox-s_PzsJqP.js"))
    )
  },
  DatePicker: {
    component: ae(
      oe(() => import("./DatePicker-jfKsoYcX.js"))
    )
  },
  Rate: {
    component: ae(
      oe(() => import("./Rate-DkGFDYU6.js"))
    )
  },
  Slider: {
    component: ae(
      oe(() => import("./Slider-4h0LUfVC.js"))
    )
  },
  Switch: {
    component: ae(
      oe(() => import("./CustomSwitch-BB6bFj9x.js"))
    )
  },
  Upload: {
    component: ae(
      oe(() => import("./CustomUpload-xiX-d9PD.js"))
    )
  },
  TreeSelect: {
    component: ae(
      oe(
        () => import("./AsyncTreeSelect-B4y231Jz.js")
      )
    )
  },
  TimePicker: {
    component: ae(
      oe(() => import("./TimePicker-xlzpxlSS.js"))
    )
  },
  AutoComplete: {
    component: ae(
      oe(
        () => import("./AutoCompleteInput-ZY3-ay8t.js")
      )
    )
  },
  Tag: {
    component: ae(
      oe(() => import("./TagShow-DjtlFc3K.js"))
    )
  },
  Mentions: {
    component: ae(
      oe(() => import("./Mentions-CybZ7kNU.js"))
    )
  },
  Divider: {
    component: ae(
      oe(() => import("./CustomDivider-D2pwR-RA.js"))
    )
  },
  AvatarGroup: {
    component: ae(
      oe(
        () => import("./CustomAvatarGroup-DcS2gnvd.js")
      )
    )
  },
  Corn: {
    component: ae(
      oe(() => import("./CronInput-Bm8mPyJF.js"))
    )
  }
}), c2 = {
  class: "title",
  style: { display: "flex", "justify-content": "center", "margin-bottom": "15px", "align-items": "center" }
}, u2 = {
  key: 0,
  style: { display: "flex", "justify-content": "center", gap: "50px" }
}, f2 = {
  name: "dynamic-form"
}, d2 = /* @__PURE__ */ V({
  ...f2,
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
    const r = e, o = O(() => typeof r.showBtns == "boolean" ? r.showBtns ? {
      clearAll: 0,
      reset: 1,
      submit: 1
    } : null : r.showBtns ? r.showBtns : {
      clearAll: 0,
      reset: 1,
      submit: 1
    }), i = Z(null), a = un(), l = Z({}), s = Z([]);
    $e(() => {
      r.registeToParent && a && r.registeToParent(a);
    }), zi(() => {
      r.unRegisteFromParent && a && r.unRegisteFromParent(a);
    });
    const c = (A) => {
      s.value.push(A);
    }, u = (A) => {
      const E = s.value.findIndex((M) => M.uid == A.uid);
      E > -1 && s.value.splice(E, 1);
    }, f = n, d = O({
      get: () => r.modelValue,
      set: (A) => {
        f("update:modelValue", A);
      }
    }), p = () => {
      const A = r.schema.items.reduce(
        (E, M) => E[M.field] ? {} : (E[M.field] = M.value, E),
        {}
      );
      d.value = { ...d.value, ...A };
    };
    gc(() => {
    }), $e(() => {
      p(), y.value = r.schema.items.some((A) => A.next);
    });
    const h = () => new Promise((A, E) => {
      var M;
      (M = i.value) == null || M.validateFields().then((j) => {
        A(j);
      }).catch((j) => E(j));
    }), g = (A = !0) => {
      const E = r.schema.items.reduce(
        (M, j) => M[j.field] ? {} : (M[j.field] = A ? void 0 : j.value, M),
        {}
      );
      d.value = { ...d.value, ...E };
    }, w = oe(() => Promise.resolve().then(() => p2)), y = Z(!1), C = O(
      () => (A, E) => v.value(A, E).items.length > 0
    ), v = O(
      () => (A, E) => {
        var M;
        return ((M = E.next) == null ? void 0 : M.call(E, A)) || { title: "", items: [] };
      }
    ), b = Z(!1), S = async () => {
      var A, E, M, j, N;
      b.value = !0, (A = r.onBeforeSubmit) == null || A.call(r, d.value);
      try {
        const B = await _();
        await ((M = (E = r.schema).onSubmit) == null ? void 0 : M.call(E, B)), await ((j = r.onSubmit) == null ? void 0 : j.call(r, d.value));
      } catch (B) {
        console.error("在数据提交时发生错误：", B), sn.error("操作失败");
      } finally {
        b.value = !1, (N = r.onAfterSubmit) == null || N.call(r, d.value);
      }
    }, P = () => {
      g(!1);
    }, x = () => {
      g();
    }, _ = async () => {
      var E;
      const A = await h();
      for (let M of s.value)
        await ((E = M.exposed) == null ? void 0 : E.validateThenGetModel());
      return A.next = l.value, A;
    };
    return K(
      () => l.value,
      (A) => {
        d.value.next = A;
      },
      {
        deep: !0,
        immediate: !0
      }
    ), K(
      () => d.value.next,
      (A) => {
        A && (l.value = A);
      }
    ), t({
      validateFields: h,
      resetFields: g,
      validateThenGetModel: _
    }), (A, E) => {
      const M = qf, j = Jt, N = dt;
      return Ce(), ot("div", null, [
        Sd("div", c2, ka(r.schema.title), 1),
        $(N, er({
          ref_key: "formRef",
          ref: i,
          model: d.value
        }, { ...A.$attrs, ...r.schema.formProps }, {
          disabled: b.value || r.disabled,
          class: r.schema.className || "dynamic-form"
        }, Wa({ ...r.schema.formEvent, onNull: () => {
        } })), {
          default: Wt(() => {
            var B, T, F;
            return [
              (Ce(!0), ot(Ae, null, qa(r.schema.items, (I) => {
                var R;
                return Kr((Ce(), ot("div", {
                  class: "items",
                  key: I.field
                }, [
                  $(M, er({
                    name: I.field,
                    label: I.label,
                    ref_for: !0
                  }, I.formItemProps, {
                    class: ((R = I.formItemProps) == null ? void 0 : R.className) || "dynamic-form-item"
                  }), {
                    default: Wt(() => {
                      var k, G, Q, re;
                      return [
                        (Ce(), hn(Od(
                          typeof I.component == "string" ? (k = xe(pc)[I.component]) == null ? void 0 : k.component : I.component
                        ), er({ ref_for: !0 }, {
                          ...I.componentProps,
                          ...typeof I.component == "string" ? (G = xe(pc)[I.component]) == null ? void 0 : G.defaultProps : (Q = I.componentProps) == null ? void 0 : Q.customProps
                        }, {
                          value: d.value[I.field],
                          "onUpdate:value": (fe) => d.value[I.field] = fe,
                          class: ((re = I.componentProps) == null ? void 0 : re.className) || "dynamic-form-component"
                        }, Wa({ ...I.componentEvent, onNull: () => {
                        } }), {
                          disabled: r.disabled || b.value
                        }), null, 16, ["value", "onUpdate:value", "class", "disabled"]))
                      ];
                    }),
                    _: 2
                  }, 1040, ["name", "label", "class"]),
                  y.value ? (Ce(), ot("div", {
                    key: 0,
                    class: "subForms",
                    style: wo(I.nextFormStyle || {})
                  }, [
                    C.value(d.value[I.field], I) ? (Ce(), hn(xe(w), {
                      key: 0,
                      schema: v.value(d.value[I.field], I),
                      modelValue: l.value,
                      "onUpdate:modelValue": E[0] || (E[0] = (k) => l.value = k),
                      "registe-to-parent": c,
                      "un-registe-from-parent": u,
                      disabled: r.disabled || b.value,
                      "show-btns": {
                        clearAll: 0,
                        reset: 0,
                        submit: 0
                      }
                    }, null, 8, ["schema", "modelValue", "disabled"])) : vt("", !0)
                  ], 4)) : vt("", !0)
                ])), [
                  [Vi, I.onShow ? I.onShow(d.value) : !0]
                ]);
              }), 128)),
              o.value ? (Ce(), ot("div", u2, [
                (B = o.value) != null && B.clearAll ? (Ce(), hn(j, {
                  key: 0,
                  onClick: x
                }, {
                  default: Wt(() => [
                    tr("清空")
                  ]),
                  _: 1
                })) : vt("", !0),
                (T = o.value) != null && T.reset ? (Ce(), hn(j, {
                  key: 1,
                  onClick: P
                }, {
                  default: Wt(() => [
                    tr("重置")
                  ]),
                  _: 1
                })) : vt("", !0),
                (F = o.value) != null && F.submit ? (Ce(), hn(j, {
                  key: 2,
                  type: "primary",
                  onClick: S,
                  loading: r.disabled || b.value
                }, {
                  default: Wt(() => [
                    tr("提交")
                  ]),
                  _: 1
                }, 8, ["loading"])) : vt("", !0)
              ])) : vt("", !0),
              r.schema.customBtns && r.schema.customBtns.length > 0 ? (Ce(), ot("div", {
                key: 1,
                class: "custombtns",
                style: wo({
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                  gap: "20px",
                  ...r.schema.customBtnsStyle
                })
              }, [
                (Ce(!0), ot(Ae, null, qa(r.schema.customBtns, (I) => (Ce(), ot("div", {
                  key: I.text,
                  style: wo({
                    display: "inline",
                    justifyContent: "center",
                    ...I.outterStyle
                  })
                }, [
                  $(j, er({
                    onClick: () => {
                      var R;
                      (R = I.onClick) == null || R.call(I, d.value);
                    },
                    ref_for: !0
                  }, I.props, {
                    style: {
                      ...I.style
                    }
                  }), {
                    default: Wt(() => [
                      tr(ka(I.text), 1)
                    ]),
                    _: 2
                  }, 1040, ["onClick", "style"])
                ], 4))), 128))
              ], 4)) : vt("", !0)
            ];
          }),
          _: 1
        }, 16, ["model", "disabled", "class"])
      ]);
    };
  }
}), gd = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, Ar = /* @__PURE__ */ gd(d2, [["__scopeId", "data-v-f1cd5e4b"]]), p2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ar
}, Symbol.toStringTag, { value: "Module" })), m2 = oe(() => import("./FullScreenDyForm-CIOtFW-r.js"));
let Bi = null;
const g2 = (e) => {
  Bi = {
    x: e.pageX,
    y: e.pageY
  }, setTimeout(() => Bi = null, 100);
};
typeof window < "u" && window.document && window.document.documentElement && document.documentElement.addEventListener("click", g2, !0);
function R2(e) {
  let t = Z(!1);
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
  }, i = Pd(m2, {
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
    mousePosition: Bi,
    goClose: t,
    customBtns: e.customBtns,
    showCloseBtn: e.showCloseBtn === void 0 ? !0 : e.showCloseBtn
  });
  i.mount(r);
}
Ar.install = function(e) {
  e.component(Ar.name || "", Ar);
};
const h2 = {
  name: "EasyTable"
};
function v2(e, t, n, r, o, i) {
  return Ce(), ot("div");
}
const Xo = /* @__PURE__ */ gd(h2, [["render", v2]]);
Xo.install = function(e) {
  e.component(Xo.name || "", Xo);
};
class hd {
  /**
   *  构造函数
   * @param defaultConfig 默认请求配置
   */
  constructor(t) {
    /**
     * 默认请求配置
     */
    Jn(this, "defaultConfig");
    /**
     * 请求拦截器
     */
    Jn(this, "requestInterceptor", []);
    /**
     * 响应拦截器
     */
    Jn(this, "responseInterceptor", []);
    this.defaultConfig = t;
  }
  /**
   *  创建一个请求工具
   * @param defaultConfig  默认请求配置
   * @returns  返回请求工具
   */
  static createService(t) {
    return new hd(t);
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
  va as $,
  ra as A,
  oy as B,
  Yn as C,
  Zt as D,
  ie as E,
  uf as F,
  ig as G,
  It as H,
  be as I,
  hp as J,
  Un as K,
  gt as L,
  Xn as M,
  Pf as N,
  De as O,
  z as P,
  Fr as Q,
  _o as R,
  se as S,
  dC as T,
  zt as U,
  Vt as V,
  xC as W,
  Nr as X,
  Zu as Y,
  VC as Z,
  m as _,
  Qa as a,
  i1 as a$,
  Nt as a0,
  Jt as a1,
  $2 as a2,
  S2 as a3,
  Pw as a4,
  $p as a5,
  Mt as a6,
  sn as a7,
  gd as a8,
  vc as a9,
  Kw as aA,
  lt as aB,
  ho as aC,
  Zn as aD,
  Gu as aE,
  gf as aF,
  Oa as aG,
  Ax as aH,
  Jb as aI,
  up as aJ,
  w2 as aK,
  t$ as aL,
  mw as aM,
  wt as aN,
  Ju as aO,
  uy as aP,
  kC as aQ,
  M2 as aR,
  kt as aS,
  mn as aT,
  P2 as aU,
  An as aV,
  ve as aW,
  j2 as aX,
  Yi as aY,
  E2 as aZ,
  _2 as a_,
  Np as aa,
  og as ab,
  cw as ac,
  T2 as ad,
  C2 as ae,
  Du as af,
  zr as ag,
  dy as ah,
  Qi as ai,
  xt as aj,
  Ew as ak,
  Jm as al,
  Ja as am,
  x2 as an,
  eg as ao,
  rC as ap,
  A2 as aq,
  Za as ar,
  dp as as,
  qw as at,
  mr as au,
  Ow as av,
  aC as aw,
  Lr as ax,
  I2 as ay,
  J0 as az,
  Be as b,
  tg as b0,
  pu as b1,
  qe as b2,
  bi as b3,
  Mv as b4,
  zn as b5,
  Ib as b6,
  gi as b7,
  ap as b8,
  ip as b9,
  Ar as ba,
  Xo as bb,
  R2 as bc,
  hd as bd,
  F2 as be,
  p2 as bf,
  Se as c,
  Ki as d,
  He as e,
  qt as f,
  U as g,
  L as h,
  tt as i,
  Jr as j,
  qi as k,
  St as l,
  Ge as m,
  Sc as n,
  Ot as o,
  wn as p,
  fp as q,
  qn as r,
  jr as s,
  cp as t,
  tb as u,
  O2 as v,
  at as w,
  uC as x,
  Ee as y,
  ge as z
};
