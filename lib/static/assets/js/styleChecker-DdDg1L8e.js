import { Fragment as $e, isVNode as ft, Comment as oa, Text as ia, computed as $, inject as Q, provide as Z, ref as U, defineComponent as H, unref as Ot, shallowRef as j, getCurrentInstance as Bt, watch as q, watchEffect as Nt, onBeforeUnmount as ke, triggerRef as ll, createVNode as C, h as fr, Transition as Lt, withDirectives as aa, resolveDirective as cl, onMounted as We, cloneVNode as sa, render as Fr, nextTick as xe, onUpdated as An, onUnmounted as ul, toRef as fl, withModifiers as vo, vShow as dl, onBeforeMount as pl, Teleport as hl, reactive as kr } from "vue";
function $t(e) {
  "@babel/helpers - typeof";
  return $t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $t(e);
}
function gl(e, t) {
  if ($t(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if ($t(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ml(e) {
  var t = gl(e, "string");
  return $t(t) == "symbol" ? t : t + "";
}
function vl(e, t, n) {
  return (t = ml(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function yo(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function K(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? yo(Object(n), !0).forEach(function(r) {
      vl(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : yo(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function d() {
  return d = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, d.apply(null, arguments);
}
const yl = (e) => typeof e == "function", bl = Array.isArray, wl = (e) => typeof e == "string", xl = (e) => e !== null && typeof e == "object", Sl = /^on[^a-z]/, Cl = (e) => Sl.test(e), Wr = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Tl = /-(\w)/g, la = Wr((e) => e.replace(Tl, (t, n) => n ? n.toUpperCase() : "")), Ol = /\B([A-Z])/g, $l = Wr((e) => e.replace(Ol, "-$1").toLowerCase()), Uv = Wr((e) => e.charAt(0).toUpperCase() + e.slice(1)), Pl = Object.prototype.hasOwnProperty, bo = (e, t) => Pl.call(e, t);
function _l(e, t, n, r) {
  const o = e[n];
  if (o != null) {
    const i = bo(o, "default");
    if (i && r === void 0) {
      const a = o.default;
      r = o.type !== Function && yl(a) ? a() : a;
    }
    o.type === Boolean && (!bo(t, n) && !i ? r = !1 : r === "" && (r = !0));
  }
  return r;
}
function Yv(e) {
  return typeof e == "number" ? `${e}px` : e;
}
function qv(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
  return typeof e == "function" ? e(t) : e ?? n;
}
function Kv(e) {
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
function fe() {
  const e = [];
  for (let t = 0; t < arguments.length; t++) {
    const n = t < 0 || arguments.length <= t ? void 0 : arguments[t];
    if (n) {
      if (wl(n))
        e.push(n);
      else if (bl(n))
        for (let r = 0; r < n.length; r++) {
          const o = fe(n[r]);
          o && e.push(o);
        }
      else if (xl(n))
        for (const r in n)
          n[r] && e.push(r);
    }
  }
  return e.join(" ");
}
var ca = function() {
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
}(), dr = typeof window < "u" && typeof document < "u" && window.document === document, dn = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), El = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(dn) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), Al = 2;
function Ml(e, t) {
  var n = !1, r = !1, o = 0;
  function i() {
    n && (n = !1, e()), r && s();
  }
  function a() {
    El(i);
  }
  function s() {
    var l = Date.now();
    if (n) {
      if (l - o < Al)
        return;
      r = !0;
    } else
      n = !0, r = !1, setTimeout(a, t);
    o = l;
  }
  return s;
}
var Il = 20, Dl = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], jl = typeof MutationObserver < "u", Rl = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = Ml(this.refresh.bind(this), Il);
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
      !dr || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), jl ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !dr || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var n = t.propertyName, r = n === void 0 ? "" : n, o = Dl.some(function(i) {
        return !!~r.indexOf(i);
      });
      o && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), ua = function(e, t) {
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
}, it = function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || dn;
}, fa = Mn(0, 0, 0, 0);
function pn(e) {
  return parseFloat(e) || 0;
}
function wo(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  return t.reduce(function(r, o) {
    var i = e["border-" + o + "-width"];
    return r + pn(i);
  }, 0);
}
function Hl(e) {
  for (var t = ["top", "right", "bottom", "left"], n = {}, r = 0, o = t; r < o.length; r++) {
    var i = o[r], a = e["padding-" + i];
    n[i] = pn(a);
  }
  return n;
}
function Bl(e) {
  var t = e.getBBox();
  return Mn(0, 0, t.width, t.height);
}
function Nl(e) {
  var t = e.clientWidth, n = e.clientHeight;
  if (!t && !n)
    return fa;
  var r = it(e).getComputedStyle(e), o = Hl(r), i = o.left + o.right, a = o.top + o.bottom, s = pn(r.width), l = pn(r.height);
  if (r.boxSizing === "border-box" && (Math.round(s + i) !== t && (s -= wo(r, "left", "right") + i), Math.round(l + a) !== n && (l -= wo(r, "top", "bottom") + a)), !zl(e)) {
    var c = Math.round(s + i) - t, f = Math.round(l + a) - n;
    Math.abs(c) !== 1 && (s -= c), Math.abs(f) !== 1 && (l -= f);
  }
  return Mn(o.left, o.top, s, l);
}
var Ll = /* @__PURE__ */ function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof it(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof it(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function zl(e) {
  return e === it(e).document.documentElement;
}
function Fl(e) {
  return dr ? Ll(e) ? Bl(e) : Nl(e) : fa;
}
function kl(e) {
  var t = e.x, n = e.y, r = e.width, o = e.height, i = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, a = Object.create(i.prototype);
  return ua(a, {
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
function Mn(e, t, n, r) {
  return { x: e, y: t, width: n, height: r };
}
var Wl = (
  /** @class */
  function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Mn(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = Fl(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  }()
), Vl = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t, n) {
      var r = kl(n);
      ua(this, { target: t, contentRect: r });
    }
    return e;
  }()
), Xl = (
  /** @class */
  function() {
    function e(t, n, r) {
      if (this.activeObservations_ = [], this.observations_ = new ca(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = n, this.callbackCtx_ = r;
    }
    return e.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof it(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) || (n.set(t, new Wl(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof it(t).Element))
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
          return new Vl(r.target, r.broadcastRect());
        });
        this.callback_.call(t, n, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), da = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new ca(), pa = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var n = Rl.getInstance(), r = new Xl(t, n, this);
      da.set(this, r);
    }
    return e;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  pa.prototype[e] = function() {
    var t;
    return (t = da.get(this))[e].apply(t, arguments);
  };
});
var Gl = function() {
  return typeof dn.ResizeObserver < "u" ? dn.ResizeObserver : pa;
}();
const Ul = (e) => e != null && e !== "", ha = (e, t) => {
  const n = d({}, e);
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
}, Yl = (e) => {
  const t = Object.keys(e), n = {}, r = {}, o = {};
  for (let i = 0, a = t.length; i < a; i++) {
    const s = t[i];
    Cl(s) ? (n[s[2].toLowerCase() + s.slice(3)] = e[s], r[s] = e[s]) : o[s] = e[s];
  }
  return {
    onEvents: r,
    events: n,
    extraAttrs: o
  };
}, ql = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  const n = {}, r = /;(?![^(]*\))/g, o = /:(.+)/;
  return typeof e == "object" ? e : (e.split(r).forEach(function(i) {
    if (i) {
      const a = i.split(o);
      if (a.length > 1) {
        const s = t ? la(a[0].trim()) : a[0].trim();
        n[s] = a[1].trim();
      }
    }
  }), n);
}, Kl = (e, t) => e[t] !== void 0, Ql = Symbol("skipFlatten"), ce = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  const n = Array.isArray(e) ? e : [e], r = [];
  return n.forEach((o) => {
    Array.isArray(o) ? r.push(...ce(o, t)) : o && o.type === $e ? o.key === Ql ? r.push(o) : r.push(...ce(o.children, t)) : o && ft(o) ? t && !ga(o) ? r.push(o) : t || r.push(o) : Ul(o) && r.push(o);
  }), r;
}, Zl = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "default", n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (ft(e))
    return e.type === $e ? t === "default" ? ce(e.children) : [] : e.children && e.children[t] ? ce(e.children[t](n)) : [];
  {
    const r = e.$slots[t] && e.$slots[t](n);
    return ce(r);
  }
}, De = (e) => {
  var t;
  let n = ((t = e == null ? void 0 : e.vnode) === null || t === void 0 ? void 0 : t.el) || e && (e.$el || e);
  for (; n && !n.tagName; )
    n = n.nextSibling;
  return n;
}, Jl = (e) => {
  const t = {};
  if (e.$ && e.$.vnode) {
    const n = e.$.vnode.props || {};
    Object.keys(e.$props).forEach((r) => {
      const o = e.$props[r], i = $l(r);
      (o !== void 0 || i in n) && (t[r] = o);
    });
  } else if (ft(e) && typeof e.type == "object") {
    const n = e.props || {}, r = {};
    Object.keys(n).forEach((i) => {
      r[la(i)] = n[i];
    });
    const o = e.type.props || {};
    Object.keys(o).forEach((i) => {
      const a = _l(o, r, i, r[i]);
      (a !== void 0 || i in r) && (t[i] = a);
    });
  }
  return t;
}, ec = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "default", n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, o;
  if (e.$) {
    const i = e[t];
    if (i !== void 0)
      return typeof i == "function" && r ? i(n) : i;
    o = e.$slots[t], o = r && o ? o(n) : o;
  } else if (ft(e)) {
    const i = e.props && e.props[t];
    if (i !== void 0 && e.props !== null)
      return typeof i == "function" && r ? i(n) : i;
    e.type === $e ? o = e.children : e.children && e.children[t] && (o = e.children[t], o = r && o ? o(n) : o);
  }
  return Array.isArray(o) && (o = ce(o), o = o.length === 1 ? o[0] : o, o = o.length === 0 ? void 0 : o), o;
};
function xo() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, n = {};
  return e.$ ? n = d(d({}, n), e.$attrs) : n = d(d({}, n), e.props), Yl(n)[t ? "onEvents" : "events"];
}
function tc(e, t) {
  let r = ((ft(e) ? e.props : e.$attrs) || {}).style || {};
  return typeof r == "string" && (r = ql(r, t)), r;
}
function nc(e) {
  return e.length === 1 && e[0].type === $e;
}
function ga(e) {
  return e && (e.type === oa || e.type === $e && e.children.length === 0 || e.type === ia && e.children.trim() === "");
}
function zt() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  const t = [];
  return e.forEach((n) => {
    Array.isArray(n) ? t.push(...n) : (n == null ? void 0 : n.type) === $e ? t.push(...zt(n.children)) : t.push(n);
  }), t.filter((n) => !ga(n));
}
function rc(e) {
  return Array.isArray(e) && e.length === 1 && (e = e[0]), e && e.__v_isVNode && typeof e.type != "symbol";
}
function oc(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "default";
  var r, o;
  return (r = t[n]) !== null && r !== void 0 ? r : (o = e[n]) === null || o === void 0 ? void 0 : o.call(e);
}
let ma = (e) => setTimeout(e, 16), va = (e) => clearTimeout(e);
typeof window < "u" && "requestAnimationFrame" in window && (ma = (e) => window.requestAnimationFrame(e), va = (e) => window.cancelAnimationFrame(e));
let So = 0;
const Vr = /* @__PURE__ */ new Map();
function ya(e) {
  Vr.delete(e);
}
function ne(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  So += 1;
  const n = So;
  function r(o) {
    if (o === 0)
      ya(n), e();
    else {
      const i = ma(() => {
        r(o - 1);
      });
      Vr.set(n, i);
    }
  }
  return r(t), n;
}
ne.cancel = (e) => {
  const t = Vr.get(e);
  return ya(t), va(t);
};
const hn = function() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return t;
}, Xr = (e) => {
  const t = e;
  return t.install = function(n) {
    n.component(t.displayName || t.name, e);
  }, e;
};
function Co() {
  return {
    type: [Function, Array]
  };
}
function k(e) {
  return {
    type: Object,
    default: e
  };
}
function rt(e) {
  return {
    type: Boolean,
    default: e
  };
}
function Qv(e) {
  return {
    type: Function,
    default: e
  };
}
function pr(e, t) {
  const n = {
    validator: () => !0,
    default: e
  };
  return n;
}
function To(e) {
  return {
    type: Array,
    default: e
  };
}
function Oo(e) {
  return {
    type: String,
    default: e
  };
}
function ic(e, t) {
  return e ? {
    type: e,
    default: t
  } : pr(t);
}
let je = !1;
try {
  const e = Object.defineProperty({}, "passive", {
    get() {
      je = !0;
    }
  });
  window.addEventListener("testPassive", null, e), window.removeEventListener("testPassive", null, e);
} catch {
}
function yt(e, t, n, r) {
  if (e && e.addEventListener) {
    let o = r;
    o === void 0 && je && (t === "touchstart" || t === "touchmove" || t === "wheel") && (o = {
      passive: !1
    }), e.addEventListener(t, n, o);
  }
  return {
    remove: () => {
      e && e.removeEventListener && e.removeEventListener(t, n);
    }
  };
}
const ac = "anticon", ba = Symbol("GlobalFormContextKey"), Zv = (e) => {
  Z(ba, e);
}, Jv = () => Q(ba, {
  validateMessages: $(() => {
  })
}), e0 = () => ({
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
  csp: k(),
  input: k(),
  autoInsertSpaceInButton: {
    type: Boolean,
    default: void 0
  },
  locale: k(),
  pageHeader: k(),
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
  space: k(),
  virtual: {
    type: Boolean,
    default: void 0
  },
  dropdownMatchSelectWidth: {
    type: [Number, Boolean],
    default: !0
  },
  form: k(),
  pagination: k(),
  theme: k(),
  select: k(),
  wave: k()
}), Gr = Symbol("configProvider"), wa = {
  getPrefixCls: (e, t) => t || (e ? `ant-${e}` : "ant"),
  iconPrefixCls: $(() => ac),
  getPopupContainer: $(() => () => document.body),
  direction: $(() => "ltr")
}, sc = () => Q(Gr, wa), t0 = (e) => Z(Gr, e), xa = Symbol("DisabledContextKey"), Ur = () => Q(xa, U(void 0)), n0 = (e) => {
  const t = Ur();
  return Z(xa, $(() => {
    var n;
    return (n = e.value) !== null && n !== void 0 ? n : t.value;
  })), e;
}, lc = {
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
}, cc = {
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
}, Sa = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
}, $o = {
  lang: d({
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
  }, cc),
  timePickerLocale: d({}, Sa)
}, ee = "${label} is not a valid ${type}", hr = {
  locale: "en",
  Pagination: lc,
  DatePicker: $o,
  TimePicker: Sa,
  Calendar: $o,
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
        string: ee,
        method: ee,
        array: ee,
        object: ee,
        number: ee,
        date: ee,
        boolean: ee,
        integer: ee,
        float: ee,
        regexp: ee,
        email: ee,
        url: ee,
        hex: ee
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
}, uc = H({
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
    const r = Q("localeData", {}), o = $(() => {
      const {
        componentName: a = "global",
        defaultLocale: s
      } = e, l = s || hr[a || "global"], {
        antLocale: c
      } = r, f = a && c ? c[a] : {};
      return d(d({}, typeof l == "function" ? l() : l), f || {});
    }), i = $(() => {
      const {
        antLocale: a
      } = r, s = a && a.locale;
      return a && a.exist && !s ? hr.locale : s;
    });
    return () => {
      const a = e.children || n.default, {
        antLocale: s
      } = r;
      return a == null ? void 0 : a(o.value, i.value, s);
    };
  }
});
function r0(e, t, n) {
  const r = Q("localeData", {});
  return [$(() => {
    const {
      antLocale: i
    } = r, a = Ot(t) || hr[e || "global"], s = e && i ? i[e] : {};
    return d(d(d({}, typeof a == "function" ? a() : a), s || {}), Ot(n) || {});
  })];
}
function Yr(e) {
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
const Po = "%";
class fc {
  constructor(t) {
    this.cache = /* @__PURE__ */ new Map(), this.instanceId = t;
  }
  get(t) {
    return this.cache.get(Array.isArray(t) ? t.join(Po) : t) || null;
  }
  update(t, n) {
    const r = Array.isArray(t) ? t.join(Po) : t, o = this.cache.get(r), i = n(o);
    i === null ? this.cache.delete(r) : this.cache.set(r, i);
  }
}
const Ca = "data-token-hash", He = "data-css-hash", dc = "data-cache-path", nt = "__cssinjs_instance__";
function Pt() {
  const e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    const t = document.body.querySelectorAll(`style[${He}]`) || [], {
      firstChild: n
    } = document.head;
    Array.from(t).forEach((o) => {
      o[nt] = o[nt] || e, o[nt] === e && document.head.insertBefore(o, n);
    });
    const r = {};
    Array.from(document.querySelectorAll(`style[${He}]`)).forEach((o) => {
      var i;
      const a = o.getAttribute(He);
      r[a] ? o[nt] === e && ((i = o.parentNode) === null || i === void 0 || i.removeChild(o)) : r[a] = !0;
    });
  }
  return new fc(e);
}
const Ta = Symbol("StyleContextKey"), pc = () => {
  var e, t, n;
  const r = Bt();
  let o;
  if (r && r.appContext) {
    const i = (n = (t = (e = r.appContext) === null || e === void 0 ? void 0 : e.config) === null || t === void 0 ? void 0 : t.globalProperties) === null || n === void 0 ? void 0 : n.__ANTDV_CSSINJS_CACHE__;
    i ? o = i : (o = Pt(), r.appContext.config.globalProperties && (r.appContext.config.globalProperties.__ANTDV_CSSINJS_CACHE__ = o));
  } else
    o = Pt();
  return o;
}, Oa = {
  cache: Pt(),
  defaultCache: !0,
  hashPriority: "low"
}, In = () => {
  const e = pc();
  return Q(Ta, j(d(d({}, Oa), {
    cache: e
  })));
}, hc = (e) => {
  const t = In(), n = j(d(d({}, Oa), {
    cache: Pt()
  }));
  return q([() => Ot(e), t], () => {
    const r = d({}, t.value), o = Ot(e);
    Object.keys(o).forEach((a) => {
      const s = o[a];
      o[a] !== void 0 && (r[a] = s);
    });
    const {
      cache: i
    } = o;
    r.cache = r.cache || Pt(), r.defaultCache = !i && t.value.defaultCache, n.value = r;
  }, {
    immediate: !0
  }), Z(Ta, n), n;
}, gc = () => ({
  autoClear: rt(),
  /** @private Test only. Not work in production. */
  mock: Oo(),
  /**
   * Only set when you need ssr to extract style on you own.
   * If not provided, it will auto create <style /> on the end of Provider in server side.
   */
  cache: k(),
  /** Tell children that this context is default generated context */
  defaultCache: rt(),
  /** Use `:where` selector to reduce hashId css selector priority */
  hashPriority: Oo(),
  /** Tell cssinjs where to inject style in */
  container: ic(),
  /** Component wil render inline  `<style />` for fallback in SSR. Not recommend. */
  ssrInline: rt(),
  /** Transform css before inject in document. Please note that `transformers` do not support dynamic update */
  transformers: To(),
  /**
   * Linters to lint css before inject in document.
   * Styles will be linted after transforming.
   * Please note that `linters` do not support dynamic update.
   */
  linters: To()
});
Xr(H({
  name: "AStyleProvider",
  inheritAttrs: !1,
  props: gc(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return hc(e), () => {
      var r;
      return (r = n.default) === null || r === void 0 ? void 0 : r.call(n);
    };
  }
}));
function mc() {
  return !1;
}
let gr = !1;
function vc() {
  return gr;
}
const yc = process.env.NODE_ENV === "production" ? mc : vc;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  const e = window;
  if (typeof e.webpackHotUpdate == "function") {
    const t = e.webpackHotUpdate;
    e.webpackHotUpdate = function() {
      return gr = !0, setTimeout(() => {
        gr = !1;
      }, 0), t(...arguments);
    };
  }
}
function $a(e, t, n, r) {
  const o = In(), i = j(""), a = j();
  Nt(() => {
    i.value = [e, ...t.value].join("%");
  });
  const s = yc(), l = (c) => {
    o.value.cache.update(c, (f) => {
      const [u = 0, p] = f || [];
      return u - 1 === 0 ? (r == null || r(p, !1), null) : [u - 1, p];
    });
  };
  return q(i, (c, f) => {
    f && l(f), o.value.cache.update(c, (u) => {
      const [p = 0, h] = u || [];
      let m = h;
      process.env.NODE_ENV !== "production" && h && s && (r == null || r(m, s), m = null);
      const v = m || n();
      return [p + 1, v];
    }), a.value = o.value.cache.get(i.value)[1];
  }, {
    immediate: !0
  }), ke(() => {
    l(i.value);
  }), a;
}
function de() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Me(e, t) {
  return e && e.contains ? e.contains(t) : !1;
}
const _o = "data-vc-order", bc = "vc-util-key", mr = /* @__PURE__ */ new Map();
function Pa() {
  let {
    mark: e
  } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return e ? e.startsWith("data-") ? e : `data-${e}` : bc;
}
function Dn(e) {
  return e.attachTo ? e.attachTo : document.querySelector("head") || document.body;
}
function wc(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function _a(e) {
  return Array.from((mr.get(e) || e).children).filter((t) => t.tagName === "STYLE");
}
function Ea(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!de())
    return null;
  const {
    csp: n,
    prepend: r
  } = t, o = document.createElement("style");
  o.setAttribute(_o, wc(r)), n != null && n.nonce && (o.nonce = n == null ? void 0 : n.nonce), o.innerHTML = e;
  const i = Dn(t), {
    firstChild: a
  } = i;
  if (r) {
    if (r === "queue") {
      const s = _a(i).filter((l) => ["prepend", "prependQueue"].includes(l.getAttribute(_o)));
      if (s.length)
        return i.insertBefore(o, s[s.length - 1].nextSibling), o;
    }
    i.insertBefore(o, a);
  } else
    i.appendChild(o);
  return o;
}
function Aa(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const n = Dn(t);
  return _a(n).find((r) => r.getAttribute(Pa(t)) === e);
}
function gn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const n = Aa(e, t);
  n && Dn(t).removeChild(n);
}
function xc(e, t) {
  const n = mr.get(e);
  if (!n || !Me(document, n)) {
    const r = Ea("", t), {
      parentNode: o
    } = r;
    mr.set(e, o), e.removeChild(r);
  }
}
function mn(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var r, o, i;
  const a = Dn(n);
  xc(a, n);
  const s = Aa(t, n);
  if (s)
    return !((r = n.csp) === null || r === void 0) && r.nonce && s.nonce !== ((o = n.csp) === null || o === void 0 ? void 0 : o.nonce) && (s.nonce = (i = n.csp) === null || i === void 0 ? void 0 : i.nonce), s.innerHTML !== e && (s.innerHTML = e), s;
  const l = Ea(e, n);
  return l.setAttribute(Pa(n), t), l;
}
function Sc(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
class at {
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
      if (this.size() + 1 > at.MAX_CACHE_SIZE + at.MAX_CACHE_OFFSET) {
        const [o] = this.keys.reduce((i, a) => {
          const [, s] = i;
          return this.internalGet(a)[1] < s ? [a, this.internalGet(a)[1]] : i;
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
      return this.keys = this.keys.filter((n) => !Sc(n, t)), this.deleteByPath(this.cache, t);
  }
}
at.MAX_CACHE_SIZE = 20;
at.MAX_CACHE_OFFSET = 5;
let vr = {};
function Cc(e, t) {
  process.env.NODE_ENV !== "production" && !e && console !== void 0 && console.error(`Warning: ${t}`);
}
function Tc(e, t) {
  process.env.NODE_ENV !== "production" && !e && console !== void 0 && console.warn(`Note: ${t}`);
}
function Oc() {
  vr = {};
}
function Ma(e, t, n) {
  !t && !vr[n] && (e(!1, n), vr[n] = !0);
}
function qr(e, t) {
  Ma(Cc, e, t);
}
function o0(e, t) {
  Ma(Tc, e, t);
}
function $c() {
}
let jn = $c;
process.env.NODE_ENV !== "production" && (jn = (e, t, n) => {
  qr(e, `[ant-design-vue: ${t}] ${n}`), process.env.NODE_ENV === "test" && Oc();
});
let Eo = 0;
class Ia {
  constructor(t) {
    this.derivatives = Array.isArray(t) ? t : [t], this.id = Eo, t.length === 0 && jn(t.length > 0, "[Ant Design Vue CSS-in-JS] Theme should have at least one derivative function."), Eo += 1;
  }
  getDerivativeToken(t) {
    return this.derivatives.reduce((n, r) => r(t, n), void 0);
  }
}
const Xn = new at();
function Pc(e) {
  const t = Array.isArray(e) ? e : [e];
  return Xn.has(t) || Xn.set(t, new Ia(t)), Xn.get(t);
}
const Ao = /* @__PURE__ */ new WeakMap();
function vn(e) {
  let t = Ao.get(e) || "";
  return t || (Object.keys(e).forEach((n) => {
    const r = e[n];
    t += n, r instanceof Ia ? t += r.id : r && typeof r == "object" ? t += vn(r) : t += r;
  }), Ao.set(e, t)), t;
}
function _c(e, t) {
  return Yr(`${t}_${vn(e)}`);
}
const xt = `random-${Date.now()}-${Math.random()}`.replace(/\./g, ""), Da = "_bAmBoO_";
function Ec(e, t, n) {
  var r, o;
  if (de()) {
    mn(e, xt);
    const i = document.createElement("div");
    i.style.position = "fixed", i.style.left = "0", i.style.top = "0", t == null || t(i), document.body.appendChild(i), process.env.NODE_ENV !== "production" && (i.innerHTML = "Test", i.style.zIndex = "9999999");
    const a = n ? n(i) : (r = getComputedStyle(i).content) === null || r === void 0 ? void 0 : r.includes(Da);
    return (o = i.parentNode) === null || o === void 0 || o.removeChild(i), gn(xt), a;
  }
  return !1;
}
let Gn;
function Ac() {
  return Gn === void 0 && (Gn = Ec(`@layer ${xt} { .${xt} { content: "${Da}"!important; } }`, (e) => {
    e.className = xt;
  })), Gn;
}
const Mo = {}, Mc = process.env.NODE_ENV === "production", Ic = process.env.NODE_ENV === "prerender", Dc = !Mc && !Ic ? "css-dev-only-do-not-override" : "css", Ie = /* @__PURE__ */ new Map();
function jc(e) {
  Ie.set(e, (Ie.get(e) || 0) + 1);
}
function Rc(e, t) {
  typeof document < "u" && document.querySelectorAll(`style[${Ca}="${e}"]`).forEach((r) => {
    var o;
    r[nt] === t && ((o = r.parentNode) === null || o === void 0 || o.removeChild(r));
  });
}
const Hc = 0;
function Bc(e, t) {
  Ie.set(e, (Ie.get(e) || 0) - 1);
  const n = Array.from(Ie.keys()), r = n.filter((o) => (Ie.get(o) || 0) <= 0);
  n.length - r.length > Hc && r.forEach((o) => {
    Rc(o, t), Ie.delete(o);
  });
}
const Nc = (e, t, n, r) => {
  const o = n.getDerivativeToken(e);
  let i = d(d({}, o), t);
  return r && (i = r(i)), i;
};
function Lc(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : U({});
  const r = In(), o = $(() => d({}, ...t.value)), i = $(() => vn(o.value)), a = $(() => vn(n.value.override || Mo));
  return $a("token", $(() => [n.value.salt || "", e.value.id, i.value, a.value]), () => {
    const {
      salt: l = "",
      override: c = Mo,
      formatToken: f,
      getComputedToken: u
    } = n.value, p = u ? u(o.value, c, e.value) : Nc(o.value, c, e.value, f), h = _c(p, l);
    p._tokenKey = h, jc(h);
    const m = `${Dc}-${Yr(h)}`;
    return p._hashId = m, [p, m];
  }, (l) => {
    var c;
    Bc(l[0]._tokenKey, (c = r.value) === null || c === void 0 ? void 0 : c.cache.instanceId);
  });
}
var zc = {
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
}, ja = "comm", Ra = "rule", Ha = "decl", Fc = "@import", kc = "@keyframes", Wc = "@layer", Ba = Math.abs, Kr = String.fromCharCode;
function Na(e) {
  return e.trim();
}
function on(e, t, n) {
  return e.replace(t, n);
}
function Vc(e, t, n) {
  return e.indexOf(t, n);
}
function _t(e, t) {
  return e.charCodeAt(t) | 0;
}
function Et(e, t, n) {
  return e.slice(t, n);
}
function be(e) {
  return e.length;
}
function Xc(e) {
  return e.length;
}
function Vt(e, t) {
  return t.push(e), e;
}
var Rn = 1, st = 1, La = 0, ae = 0, z = 0, dt = "";
function Qr(e, t, n, r, o, i, a, s) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: Rn, column: st, length: a, return: "", siblings: s };
}
function Gc() {
  return z;
}
function Uc() {
  return z = ae > 0 ? _t(dt, --ae) : 0, st--, z === 10 && (st = 1, Rn--), z;
}
function ue() {
  return z = ae < La ? _t(dt, ae++) : 0, st++, z === 10 && (st = 1, Rn++), z;
}
function Be() {
  return _t(dt, ae);
}
function an() {
  return ae;
}
function Hn(e, t) {
  return Et(dt, e, t);
}
function yr(e) {
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
function Yc(e) {
  return Rn = st = 1, La = be(dt = e), ae = 0, [];
}
function qc(e) {
  return dt = "", e;
}
function Un(e) {
  return Na(Hn(ae - 1, br(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Kc(e) {
  for (; (z = Be()) && z < 33; )
    ue();
  return yr(e) > 2 || yr(z) > 3 ? "" : " ";
}
function Qc(e, t) {
  for (; --t && ue() && !(z < 48 || z > 102 || z > 57 && z < 65 || z > 70 && z < 97); )
    ;
  return Hn(e, an() + (t < 6 && Be() == 32 && ue() == 32));
}
function br(e) {
  for (; ue(); )
    switch (z) {
      case e:
        return ae;
      case 34:
      case 39:
        e !== 34 && e !== 39 && br(z);
        break;
      case 40:
        e === 41 && br(e);
        break;
      case 92:
        ue();
        break;
    }
  return ae;
}
function Zc(e, t) {
  for (; ue() && e + z !== 57; )
    if (e + z === 84 && Be() === 47)
      break;
  return "/*" + Hn(t, ae - 1) + "*" + Kr(e === 47 ? e : ue());
}
function Jc(e) {
  for (; !yr(Be()); )
    ue();
  return Hn(e, ae);
}
function eu(e) {
  return qc(sn("", null, null, null, [""], e = Yc(e), 0, [0], e));
}
function sn(e, t, n, r, o, i, a, s, l) {
  for (var c = 0, f = 0, u = a, p = 0, h = 0, m = 0, v = 1, w = 1, b = 1, y = 0, T = "", _ = o, P = i, x = r, g = T; w; )
    switch (m = y, y = ue()) {
      case 40:
        if (m != 108 && _t(g, u - 1) == 58) {
          Vc(g += on(Un(y), "&", "&\f"), "&\f", Ba(c ? s[c - 1] : 0)) != -1 && (b = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        g += Un(y);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        g += Kc(m);
        break;
      case 92:
        g += Qc(an() - 1, 7);
        continue;
      case 47:
        switch (Be()) {
          case 42:
          case 47:
            Vt(tu(Zc(ue(), an()), t, n, l), l);
            break;
          default:
            g += "/";
        }
        break;
      case 123 * v:
        s[c++] = be(g) * b;
      case 125 * v:
      case 59:
      case 0:
        switch (y) {
          case 0:
          case 125:
            w = 0;
          case 59 + f:
            b == -1 && (g = on(g, /\f/g, "")), h > 0 && be(g) - u && Vt(h > 32 ? Do(g + ";", r, n, u - 1, l) : Do(on(g, " ", "") + ";", r, n, u - 2, l), l);
            break;
          case 59:
            g += ";";
          default:
            if (Vt(x = Io(g, t, n, c, f, o, s, T, _ = [], P = [], u, i), i), y === 123)
              if (f === 0)
                sn(g, t, x, x, _, i, u, s, P);
              else
                switch (p === 99 && _t(g, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    sn(e, x, x, r && Vt(Io(e, x, x, 0, 0, o, s, T, o, _ = [], u, P), P), o, P, u, s, r ? _ : P);
                    break;
                  default:
                    sn(g, x, x, x, [""], P, 0, s, P);
                }
        }
        c = f = h = 0, v = b = 1, T = g = "", u = a;
        break;
      case 58:
        u = 1 + be(g), h = m;
      default:
        if (v < 1) {
          if (y == 123)
            --v;
          else if (y == 125 && v++ == 0 && Uc() == 125)
            continue;
        }
        switch (g += Kr(y), y * v) {
          case 38:
            b = f > 0 ? 1 : (g += "\f", -1);
            break;
          case 44:
            s[c++] = (be(g) - 1) * b, b = 1;
            break;
          case 64:
            Be() === 45 && (g += Un(ue())), p = Be(), f = u = be(T = g += Jc(an())), y++;
            break;
          case 45:
            m === 45 && be(g) == 2 && (v = 0);
        }
    }
  return i;
}
function Io(e, t, n, r, o, i, a, s, l, c, f, u) {
  for (var p = o - 1, h = o === 0 ? i : [""], m = Xc(h), v = 0, w = 0, b = 0; v < r; ++v)
    for (var y = 0, T = Et(e, p + 1, p = Ba(w = a[v])), _ = e; y < m; ++y)
      (_ = Na(w > 0 ? h[y] + " " + T : on(T, /&\f/g, h[y]))) && (l[b++] = _);
  return Qr(e, t, n, o === 0 ? Ra : s, l, c, f, u);
}
function tu(e, t, n, r) {
  return Qr(e, t, n, ja, Kr(Gc()), Et(e, 2, -2), 0, r);
}
function Do(e, t, n, r, o) {
  return Qr(e, t, n, Ha, Et(e, 0, r), Et(e, r + 1, -1), r, o);
}
function wr(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function nu(e, t, n, r) {
  switch (e.type) {
    case Wc:
      if (e.children.length)
        break;
    case Fc:
    case Ha:
      return e.return = e.return || e.value;
    case ja:
      return "";
    case kc:
      return e.return = e.value + "{" + wr(e.children, r) + "}";
    case Ra:
      if (!be(e.value = e.props.join(",")))
        return "";
  }
  return be(n = wr(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function za(e, t) {
  const {
    path: n,
    parentSelectors: r
  } = t;
  qr(!1, `[Ant Design Vue CSS-in-JS] ${n ? `Error in '${n}': ` : ""}${e}${r.length ? ` Selector info: ${r.join(" -> ")}` : ""}`);
}
const ru = (e, t, n) => {
  if (e === "content") {
    const r = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
    (typeof t != "string" || ["normal", "none", "initial", "inherit", "unset"].indexOf(t) === -1 && !r.test(t) && (t.charAt(0) !== t.charAt(t.length - 1) || t.charAt(0) !== '"' && t.charAt(0) !== "'")) && za(`You seem to be using a value for 'content' without quotes, try replacing it with \`content: '"${t}"'\`.`, n);
  }
}, ou = (e, t, n) => {
  e === "animation" && n.hashId && t !== "none" && za(`You seem to be using hashed animation '${t}', in which case 'animationName' with Keyframe as value is recommended.`, n);
}, jo = "data-ant-cssinjs-cache-path", iu = "_FILE_STYLE__";
let Ne, Fa = !0;
function au() {
  var e;
  if (!Ne && (Ne = {}, de())) {
    const t = document.createElement("div");
    t.className = jo, t.style.position = "fixed", t.style.visibility = "hidden", t.style.top = "-9999px", document.body.appendChild(t);
    let n = getComputedStyle(t).content || "";
    n = n.replace(/^"/, "").replace(/"$/, ""), n.split(";").forEach((o) => {
      const [i, a] = o.split(":");
      Ne[i] = a;
    });
    const r = document.querySelector(`style[${jo}]`);
    r && (Fa = !1, (e = r.parentNode) === null || e === void 0 || e.removeChild(r)), document.body.removeChild(t);
  }
}
function su(e) {
  return au(), !!Ne[e];
}
function lu(e) {
  const t = Ne[e];
  let n = null;
  if (t && de())
    if (Fa)
      n = iu;
    else {
      const r = document.querySelector(`style[${He}="${Ne[e]}"]`);
      r ? n = r.innerHTML : delete Ne[e];
    }
  return [n, t];
}
const Ro = de(), ka = "_skip_check_", Wa = "_multi_value_";
function Ho(e) {
  return wr(eu(e), nu).replace(/\{%%%\:[^;];}/g, ";");
}
function cu(e) {
  return typeof e == "object" && e && (ka in e || Wa in e);
}
function uu(e, t, n) {
  if (!t)
    return e;
  const r = `.${t}`, o = n === "low" ? `:where(${r})` : r;
  return e.split(",").map((a) => {
    var s;
    const l = a.trim().split(/\s+/);
    let c = l[0] || "";
    const f = ((s = c.match(/^\w+/)) === null || s === void 0 ? void 0 : s[0]) || "";
    return c = `${f}${o}${c.slice(f.length)}`, [c, ...l.slice(1)].join(" ");
  }).join(",");
}
const xr = /* @__PURE__ */ new Set();
process.env.NODE_ENV;
const Sr = function(e) {
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
    path: s,
    hashPriority: l,
    transformers: c = [],
    linters: f = []
  } = t;
  let u = "", p = {};
  function h(w) {
    const b = w.getName(i);
    if (!p[b]) {
      const [y] = Sr(w.style, t, {
        root: !1,
        parentSelectors: o
      });
      p[b] = `@keyframes ${w.getName(i)}${y}`;
    }
  }
  function m(w) {
    let b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return w.forEach((y) => {
      Array.isArray(y) ? m(y, b) : y && b.push(y);
    }), b;
  }
  if (m(Array.isArray(e) ? e : [e]).forEach((w) => {
    const b = typeof w == "string" && !n ? {} : w;
    if (typeof b == "string")
      u += `${b}
`;
    else if (b._keyframe)
      h(b);
    else {
      const y = c.reduce((T, _) => {
        var P;
        return ((P = _ == null ? void 0 : _.visit) === null || P === void 0 ? void 0 : P.call(_, T)) || T;
      }, b);
      Object.keys(y).forEach((T) => {
        var _;
        const P = y[T];
        if (typeof P == "object" && P && (T !== "animationName" || !P._keyframe) && !cu(P)) {
          let x = !1, g = T.trim(), S = !1;
          (n || r) && i ? g.startsWith("@") ? x = !0 : g = uu(T, i, l) : n && !i && (g === "&" || g === "") && (g = "", S = !0);
          const [A, O] = Sr(P, t, {
            root: S,
            injectHash: x,
            parentSelectors: [...o, g]
          });
          p = d(d({}, p), O), u += `${g}${A}`;
        } else {
          let x = function(S, A) {
            process.env.NODE_ENV !== "production" && (typeof P != "object" || !(P != null && P[ka])) && [ru, ou, ...f].forEach((N) => N(S, A, {
              path: s,
              hashId: i,
              parentSelectors: o
            }));
            const O = S.replace(/[A-Z]/g, (N) => `-${N.toLowerCase()}`);
            let M = A;
            !zc[S] && typeof M == "number" && M !== 0 && (M = `${M}px`), S === "animationName" && (A != null && A._keyframe) && (h(A), M = A.getName(i)), u += `${O}:${M};`;
          };
          const g = (_ = P == null ? void 0 : P.value) !== null && _ !== void 0 ? _ : P;
          typeof P == "object" && (P != null && P[Wa]) && Array.isArray(g) ? g.forEach((S) => {
            x(T, S);
          }) : x(T, g);
        }
      });
    }
  }), !n)
    u = `{${u}}`;
  else if (a && Ac()) {
    const w = a.split(",");
    u = `@layer ${w[w.length - 1].trim()} {${u}}`, w.length > 1 && (u = `@layer ${a}{%%%:%}${u}`);
  }
  return [u, p];
};
function fu(e, t) {
  return Yr(`${e.join("%")}${t}`);
}
function Bo(e, t) {
  const n = In(), r = $(() => e.value.token._tokenKey), o = $(() => [r.value, ...e.value.path]);
  let i = Ro;
  return process.env.NODE_ENV !== "production" && n.value.mock !== void 0 && (i = n.value.mock === "client"), $a(
    "style",
    o,
    // Create cache if needed
    () => {
      const {
        path: a,
        hashId: s,
        layer: l,
        nonce: c,
        clientOnly: f,
        order: u = 0
      } = e.value, p = o.value.join("|");
      if (su(p)) {
        const [g, S] = lu(p);
        if (g)
          return [g, r.value, S, {}, f, u];
      }
      const h = t(), {
        hashPriority: m,
        container: v,
        transformers: w,
        linters: b,
        cache: y
      } = n.value, [T, _] = Sr(h, {
        hashId: s,
        hashPriority: m,
        layer: l,
        path: a.join("-"),
        transformers: w,
        linters: b
      }), P = Ho(T), x = fu(o.value, P);
      if (i) {
        const g = {
          mark: He,
          prepend: "queue",
          attachTo: v,
          priority: u
        }, S = typeof c == "function" ? c() : c;
        S && (g.csp = {
          nonce: S
        });
        const A = mn(P, x, g);
        A[nt] = y.instanceId, A.setAttribute(Ca, r.value), process.env.NODE_ENV !== "production" && A.setAttribute(dc, o.value.join("|")), Object.keys(_).forEach((O) => {
          xr.has(O) || (xr.add(O), mn(Ho(_[O]), `_effect-${O}`, {
            mark: He,
            prepend: "queue",
            attachTo: v
          }));
        });
      }
      return [P, r.value, x, _, f, u];
    },
    // Remove cache if no need
    (a, s) => {
      let [, , l] = a;
      (s || n.value.autoClear) && Ro && gn(l, {
        mark: He
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
const du = "4.2.3", yn = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"];
function X(e, t) {
  pu(e) && (e = "100%");
  var n = hu(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function Xt(e) {
  return Math.min(1, Math.max(0, e));
}
function pu(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function hu(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function Va(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function Gt(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function Re(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function gu(e, t, n) {
  return {
    r: X(e, 255) * 255,
    g: X(t, 255) * 255,
    b: X(n, 255) * 255
  };
}
function No(e, t, n) {
  e = X(e, 255), t = X(t, 255), n = X(n, 255);
  var r = Math.max(e, t, n), o = Math.min(e, t, n), i = 0, a = 0, s = (r + o) / 2;
  if (r === o)
    a = 0, i = 0;
  else {
    var l = r - o;
    switch (a = s > 0.5 ? l / (2 - r - o) : l / (r + o), r) {
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
  return { h: i, s: a, l: s };
}
function Yn(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function mu(e, t, n) {
  var r, o, i;
  if (e = X(e, 360), t = X(t, 100), n = X(n, 100), t === 0)
    o = n, i = n, r = n;
  else {
    var a = n < 0.5 ? n * (1 + t) : n + t - n * t, s = 2 * n - a;
    r = Yn(s, a, e + 1 / 3), o = Yn(s, a, e), i = Yn(s, a, e - 1 / 3);
  }
  return { r: r * 255, g: o * 255, b: i * 255 };
}
function Cr(e, t, n) {
  e = X(e, 255), t = X(t, 255), n = X(n, 255);
  var r = Math.max(e, t, n), o = Math.min(e, t, n), i = 0, a = r, s = r - o, l = r === 0 ? 0 : s / r;
  if (r === o)
    i = 0;
  else {
    switch (r) {
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
  return { h: i, s: l, v: a };
}
function vu(e, t, n) {
  e = X(e, 360) * 6, t = X(t, 100), n = X(n, 100);
  var r = Math.floor(e), o = e - r, i = n * (1 - t), a = n * (1 - o * t), s = n * (1 - (1 - o) * t), l = r % 6, c = [n, a, i, i, s, n][l], f = [s, n, n, a, i, i][l], u = [i, i, s, n, n, a][l];
  return { r: c * 255, g: f * 255, b: u * 255 };
}
function Tr(e, t, n, r) {
  var o = [
    Re(Math.round(e).toString(16)),
    Re(Math.round(t).toString(16)),
    Re(Math.round(n).toString(16))
  ];
  return r && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) : o.join("");
}
function yu(e, t, n, r, o) {
  var i = [
    Re(Math.round(e).toString(16)),
    Re(Math.round(t).toString(16)),
    Re(Math.round(n).toString(16)),
    Re(bu(r))
  ];
  return o && i[0].startsWith(i[0].charAt(1)) && i[1].startsWith(i[1].charAt(1)) && i[2].startsWith(i[2].charAt(1)) && i[3].startsWith(i[3].charAt(1)) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) + i[3].charAt(0) : i.join("");
}
function bu(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function Lo(e) {
  return te(e) / 255;
}
function te(e) {
  return parseInt(e, 16);
}
function wu(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var Or = {
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
function tt(e) {
  var t = { r: 0, g: 0, b: 0 }, n = 1, r = null, o = null, i = null, a = !1, s = !1;
  return typeof e == "string" && (e = Cu(e)), typeof e == "object" && (ve(e.r) && ve(e.g) && ve(e.b) ? (t = gu(e.r, e.g, e.b), a = !0, s = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : ve(e.h) && ve(e.s) && ve(e.v) ? (r = Gt(e.s), o = Gt(e.v), t = vu(e.h, r, o), a = !0, s = "hsv") : ve(e.h) && ve(e.s) && ve(e.l) && (r = Gt(e.s), i = Gt(e.l), t = mu(e.h, r, i), a = !0, s = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = Va(n), {
    ok: a,
    format: e.format || s,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var xu = "[-\\+]?\\d+%?", Su = "[-\\+]?\\d*\\.\\d+%?", Te = "(?:".concat(Su, ")|(?:").concat(xu, ")"), qn = "[\\s|\\(]+(".concat(Te, ")[,|\\s]+(").concat(Te, ")[,|\\s]+(").concat(Te, ")\\s*\\)?"), Kn = "[\\s|\\(]+(".concat(Te, ")[,|\\s]+(").concat(Te, ")[,|\\s]+(").concat(Te, ")[,|\\s]+(").concat(Te, ")\\s*\\)?"), le = {
  CSS_UNIT: new RegExp(Te),
  rgb: new RegExp("rgb" + qn),
  rgba: new RegExp("rgba" + Kn),
  hsl: new RegExp("hsl" + qn),
  hsla: new RegExp("hsla" + Kn),
  hsv: new RegExp("hsv" + qn),
  hsva: new RegExp("hsva" + Kn),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function Cu(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (Or[e])
    e = Or[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = le.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = le.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = le.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = le.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = le.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = le.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = le.hex8.exec(e), n ? {
    r: te(n[1]),
    g: te(n[2]),
    b: te(n[3]),
    a: Lo(n[4]),
    format: t ? "name" : "hex8"
  } : (n = le.hex6.exec(e), n ? {
    r: te(n[1]),
    g: te(n[2]),
    b: te(n[3]),
    format: t ? "name" : "hex"
  } : (n = le.hex4.exec(e), n ? {
    r: te(n[1] + n[1]),
    g: te(n[2] + n[2]),
    b: te(n[3] + n[3]),
    a: Lo(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = le.hex3.exec(e), n ? {
    r: te(n[1] + n[1]),
    g: te(n[2] + n[2]),
    b: te(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function ve(e) {
  return !!le.CSS_UNIT.exec(String(e));
}
var J = (
  /** @class */
  function() {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var r;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = wu(t)), this.originalInput = t;
      var o = tt(t);
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
      var t = this.toRgb(), n, r, o, i = t.r / 255, a = t.g / 255, s = t.b / 255;
      return i <= 0.03928 ? n = i / 12.92 : n = Math.pow((i + 0.055) / 1.055, 2.4), a <= 0.03928 ? r = a / 12.92 : r = Math.pow((a + 0.055) / 1.055, 2.4), s <= 0.03928 ? o = s / 12.92 : o = Math.pow((s + 0.055) / 1.055, 2.4), 0.2126 * n + 0.7152 * r + 0.0722 * o;
    }, e.prototype.getAlpha = function() {
      return this.a;
    }, e.prototype.setAlpha = function(t) {
      return this.a = Va(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = Cr(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = Cr(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), o = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(n, ", ").concat(r, "%, ").concat(o, "%)") : "hsva(".concat(n, ", ").concat(r, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = No(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = No(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), o = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(n, ", ").concat(r, "%, ").concat(o, "%)") : "hsla(".concat(n, ", ").concat(r, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), Tr(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), yu(this.r, this.g, this.b, this.a, t);
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
        return "".concat(Math.round(X(n, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(n) {
        return Math.round(X(n, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + Tr(this.r, this.g, this.b, !1), n = 0, r = Object.entries(Or); n < r.length; n++) {
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
      return n.l += t / 100, n.l = Xt(n.l), new e(n);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toRgb();
      return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l -= t / 100, n.l = Xt(n.l), new e(n);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s -= t / 100, n.s = Xt(n.s), new e(n);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s += t / 100, n.s = Xt(n.s), new e(n);
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
      for (var n = this.toHsv(), r = n.h, o = n.s, i = n.v, a = [], s = 1 / t; t--; )
        a.push(new e({ h: r, s: o, v: i })), i = (i + s) % 1;
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
), Ut = 2, zo = 0.16, Tu = 0.05, Ou = 0.05, $u = 0.15, Xa = 5, Ga = 4, Pu = [{
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
function Fo(e) {
  var t = e.r, n = e.g, r = e.b, o = Cr(t, n, r);
  return {
    h: o.h * 360,
    s: o.s,
    v: o.v
  };
}
function Yt(e) {
  var t = e.r, n = e.g, r = e.b;
  return "#".concat(Tr(t, n, r, !1));
}
function _u(e, t, n) {
  var r = n / 100, o = {
    r: (t.r - e.r) * r + e.r,
    g: (t.g - e.g) * r + e.g,
    b: (t.b - e.b) * r + e.b
  };
  return o;
}
function ko(e, t, n) {
  var r;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? r = n ? Math.round(e.h) - Ut * t : Math.round(e.h) + Ut * t : r = n ? Math.round(e.h) + Ut * t : Math.round(e.h) - Ut * t, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function Wo(e, t, n) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var r;
  return n ? r = e.s - zo * t : t === Ga ? r = e.s + zo : r = e.s + Tu * t, r > 1 && (r = 1), n && t === Xa && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Number(r.toFixed(2));
}
function Vo(e, t, n) {
  var r;
  return n ? r = e.v + Ou * t : r = e.v - $u * t, r > 1 && (r = 1), Number(r.toFixed(2));
}
function At(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [], r = tt(e), o = Xa; o > 0; o -= 1) {
    var i = Fo(r), a = Yt(tt({
      h: ko(i, o, !0),
      s: Wo(i, o, !0),
      v: Vo(i, o, !0)
    }));
    n.push(a);
  }
  n.push(Yt(r));
  for (var s = 1; s <= Ga; s += 1) {
    var l = Fo(r), c = Yt(tt({
      h: ko(l, s),
      s: Wo(l, s),
      v: Vo(l, s)
    }));
    n.push(c);
  }
  return t.theme === "dark" ? Pu.map(function(f) {
    var u = f.index, p = f.opacity, h = Yt(_u(tt(t.backgroundColor || "#141414"), tt(n[u]), p * 100));
    return h;
  }) : n;
}
var Qn = {
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
}, ln = {}, Zn = {};
Object.keys(Qn).forEach(function(e) {
  ln[e] = At(Qn[e]), ln[e].primary = ln[e][5], Zn[e] = At(Qn[e], {
    theme: "dark",
    backgroundColor: "#141414"
  }), Zn[e].primary = Zn[e][5];
});
var Eu = ln.blue;
const Au = (e) => {
  const {
    controlHeight: t
  } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
};
function Mu(e) {
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
const Ua = {
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
}, Zr = d(d({}, Ua), {
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
function Iu(e, t) {
  let {
    generateColorPalettes: n,
    generateNeutralColorPalettes: r
  } = t;
  const {
    colorSuccess: o,
    colorWarning: i,
    colorError: a,
    colorInfo: s,
    colorPrimary: l,
    colorBgBase: c,
    colorTextBase: f
  } = e, u = n(l), p = n(o), h = n(i), m = n(a), v = n(s), w = r(c, f);
  return d(d({}, w), {
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
    colorSuccessBg: p[1],
    colorSuccessBgHover: p[2],
    colorSuccessBorder: p[3],
    colorSuccessBorderHover: p[4],
    colorSuccessHover: p[4],
    colorSuccess: p[6],
    colorSuccessActive: p[7],
    colorSuccessTextHover: p[8],
    colorSuccessText: p[9],
    colorSuccessTextActive: p[10],
    colorErrorBg: m[1],
    colorErrorBgHover: m[2],
    colorErrorBorder: m[3],
    colorErrorBorderHover: m[4],
    colorErrorHover: m[5],
    colorError: m[6],
    colorErrorActive: m[7],
    colorErrorTextHover: m[8],
    colorErrorText: m[9],
    colorErrorTextActive: m[10],
    colorWarningBg: h[1],
    colorWarningBgHover: h[2],
    colorWarningBorder: h[3],
    colorWarningBorderHover: h[4],
    colorWarningHover: h[4],
    colorWarning: h[6],
    colorWarningActive: h[7],
    colorWarningTextHover: h[8],
    colorWarningText: h[9],
    colorWarningTextActive: h[10],
    colorInfoBg: v[1],
    colorInfoBgHover: v[2],
    colorInfoBorder: v[3],
    colorInfoBorderHover: v[4],
    colorInfoHover: v[4],
    colorInfo: v[6],
    colorInfoActive: v[7],
    colorInfoTextHover: v[8],
    colorInfoText: v[9],
    colorInfoTextActive: v[10],
    colorBgMask: new J("#000").setAlpha(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const Du = (e) => {
  let t = e, n = e, r = e, o = e;
  return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? n = 4 : e < 8 && e >= 7 ? n = 5 : e < 14 && e >= 8 ? n = 6 : e < 16 && e >= 14 ? n = 7 : e >= 16 && (n = 8), e < 6 && e >= 2 ? r = 1 : e >= 6 && (r = 2), e > 4 && e < 8 ? o = 4 : e >= 8 && (o = 6), {
    borderRadius: e > 16 ? 16 : e,
    borderRadiusXS: r,
    borderRadiusSM: n,
    borderRadiusLG: t,
    borderRadiusOuter: o
  };
};
function ju(e) {
  const {
    motionUnit: t,
    motionBase: n,
    borderRadius: r,
    lineWidth: o
  } = e;
  return d({
    // motion
    motionDurationFast: `${(n + t).toFixed(1)}s`,
    motionDurationMid: `${(n + t * 2).toFixed(1)}s`,
    motionDurationSlow: `${(n + t * 3).toFixed(1)}s`,
    // line
    lineWidthBold: o + 1
  }, Du(r));
}
const ye = (e, t) => new J(e).setAlpha(t).toRgbString(), ht = (e, t) => new J(e).darken(t).toHexString(), Ru = (e) => {
  const t = At(e);
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
}, Hu = (e, t) => {
  const n = e || "#fff", r = t || "#000";
  return {
    colorBgBase: n,
    colorTextBase: r,
    colorText: ye(r, 0.88),
    colorTextSecondary: ye(r, 0.65),
    colorTextTertiary: ye(r, 0.45),
    colorTextQuaternary: ye(r, 0.25),
    colorFill: ye(r, 0.15),
    colorFillSecondary: ye(r, 0.06),
    colorFillTertiary: ye(r, 0.04),
    colorFillQuaternary: ye(r, 0.02),
    colorBgLayout: ht(n, 4),
    colorBgContainer: ht(n, 0),
    colorBgElevated: ht(n, 0),
    colorBgSpotlight: ye(r, 0.85),
    colorBorder: ht(n, 15),
    colorBorderSecondary: ht(n, 6)
  };
};
function Bu(e) {
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
const Nu = (e) => {
  const t = Bu(e), n = t.map((o) => o.size), r = t.map((o) => o.lineHeight);
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
function Lu(e) {
  const t = Object.keys(Ua).map((n) => {
    const r = At(e[n]);
    return new Array(10).fill(1).reduce((o, i, a) => (o[`${n}-${a + 1}`] = r[a], o), {});
  }).reduce((n, r) => (n = d(d({}, n), r), n), {});
  return d(d(d(d(d(d(d({}, e), t), Iu(e, {
    generateColorPalettes: Ru,
    generateNeutralColorPalettes: Hu
  })), Nu(e.fontSize)), Mu(e)), Au(e)), ju(e));
}
function Jn(e) {
  return e >= 0 && e <= 255;
}
function qt(e, t) {
  const {
    r: n,
    g: r,
    b: o,
    a: i
  } = new J(e).toRgb();
  if (i < 1)
    return e;
  const {
    r: a,
    g: s,
    b: l
  } = new J(t).toRgb();
  for (let c = 0.01; c <= 1; c += 0.01) {
    const f = Math.round((n - a * (1 - c)) / c), u = Math.round((r - s * (1 - c)) / c), p = Math.round((o - l * (1 - c)) / c);
    if (Jn(f) && Jn(u) && Jn(p))
      return new J({
        r: f,
        g: u,
        b: p,
        a: Math.round(c * 100) / 100
      }).toRgbString();
  }
  return new J({
    r: n,
    g: r,
    b: o,
    a: 1
  }).toRgbString();
}
var zu = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
function Fu(e) {
  const {
    override: t
  } = e, n = zu(e, ["override"]), r = d({}, t);
  Object.keys(Zr).forEach((h) => {
    delete r[h];
  });
  const o = d(d({}, n), r), i = 480, a = 576, s = 768, l = 992, c = 1200, f = 1600, u = 2e3;
  return d(d(d({}, o), {
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
    colorSplit: qt(o.colorBorderSecondary, o.colorBgContainer),
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
    colorErrorOutline: qt(o.colorErrorBg, o.colorBgContainer),
    colorWarningOutline: qt(o.colorWarningBg, o.colorBgContainer),
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
    controlOutline: qt(o.colorPrimaryBg, o.colorBgContainer),
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
    screenSMMax: s - 1,
    screenMD: s,
    screenMDMin: s,
    screenMDMax: l - 1,
    screenLG: l,
    screenLGMin: l,
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
      0 1px 2px -2px ${new J("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new J("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new J("rgba(0, 0, 0, 0.09)").toRgbString()}
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
const ku = (e, t, n, r, o) => {
  const i = e / 2, a = 0, s = i, l = n * 1 / Math.sqrt(2), c = i - n * (1 - 1 / Math.sqrt(2)), f = i - t * (1 / Math.sqrt(2)), u = n * (Math.sqrt(2) - 1) + t * (1 / Math.sqrt(2)), p = 2 * i - f, h = u, m = 2 * i - l, v = c, w = 2 * i - a, b = s, y = i * Math.sqrt(2) + n * (Math.sqrt(2) - 2), T = n * (Math.sqrt(2) - 1);
  return {
    pointerEvents: "none",
    width: e,
    height: e,
    overflow: "hidden",
    "&::after": {
      content: '""',
      position: "absolute",
      width: y,
      height: y,
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
        value: [`polygon(${T}px 100%, 50% ${T}px, ${2 * i - T}px 100%, ${T}px 100%)`, `path('M ${a} ${s} A ${n} ${n} 0 0 0 ${l} ${c} L ${f} ${u} A ${t} ${t} 0 0 1 ${p} ${h} L ${m} ${v} A ${n} ${n} 0 0 0 ${w} ${b} Z')`]
      },
      content: '""'
    }
  };
};
function Wu(e, t) {
  return yn.reduce((n, r) => {
    const o = e[`${r}-1`], i = e[`${r}-3`], a = e[`${r}-6`], s = e[`${r}-7`];
    return d(d({}, n), t(r, {
      lightColor: o,
      lightBorderColor: i,
      darkColor: a,
      textColor: s
    }));
  }, {});
}
const i0 = {
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
}, Vu = (e) => ({
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
}), a0 = () => ({
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
}), s0 = () => ({
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
}), Xu = (e) => ({
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
}), Gu = (e, t) => {
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
}, Uu = (e) => ({
  outline: `${e.lineWidthBold}px solid ${e.colorPrimaryBorder}`,
  outlineOffset: 1,
  transition: "outline-offset 0s, outline 0s"
}), Yu = (e) => ({
  "&:focus-visible": d({}, Uu(e))
});
function Ft(e, t, n) {
  return (r) => {
    const o = $(() => r == null ? void 0 : r.value), [i, a, s] = kt(), {
      getPrefixCls: l,
      iconPrefixCls: c
    } = sc(), f = $(() => l()), u = $(() => ({
      theme: i.value,
      token: a.value,
      hashId: s.value,
      path: ["Shared", f.value]
    }));
    Bo(u, () => [{
      // Link
      "&": Xu(a.value)
    }]);
    const p = $(() => ({
      theme: i.value,
      token: a.value,
      hashId: s.value,
      path: [e, o.value, c.value]
    }));
    return [Bo(p, () => {
      const {
        token: h,
        flush: m
      } = Ku(a.value), v = typeof n == "function" ? n(h) : n, w = d(d({}, v), a.value[e]), b = `.${o.value}`, y = Ve(h, {
        componentCls: b,
        prefixCls: o.value,
        iconCls: `.${c.value}`,
        antCls: `.${f.value}`
      }, w), T = t(y, {
        hashId: s.value,
        prefixCls: o.value,
        rootPrefixCls: f.value,
        iconPrefixCls: c.value,
        overrideComponentToken: a.value[e]
      });
      return m(e, w), [Gu(a.value, o.value), T];
    }), s];
  };
}
const Ya = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u";
let $r = !0;
function Ve() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  if (!Ya)
    return d({}, ...t);
  $r = !1;
  const r = {};
  return t.forEach((o) => {
    Object.keys(o).forEach((a) => {
      Object.defineProperty(r, a, {
        configurable: !0,
        enumerable: !0,
        get: () => o[a]
      });
    });
  }), $r = !0, r;
}
function qu() {
}
function Ku(e) {
  let t, n = e, r = qu;
  return Ya && (t = /* @__PURE__ */ new Set(), n = new Proxy(e, {
    get(o, i) {
      return $r && t.add(i), o[i];
    }
  }), r = (o, i) => {
    Array.from(t);
  }), {
    token: n,
    keys: t,
    flush: r
  };
}
const Qu = Pc(Lu), Zu = {
  token: Zr,
  hashed: !0
}, qa = Symbol("DesignTokenContext"), Pr = j(), Ju = (e) => {
  Z(qa, e), q(e, () => {
    Pr.value = Ot(e), ll(Pr);
  }, {
    immediate: !0,
    deep: !0
  });
}, l0 = H({
  props: {
    value: k()
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    return Ju($(() => e.value)), () => {
      var r;
      return (r = n.default) === null || r === void 0 ? void 0 : r.call(n);
    };
  }
});
function kt() {
  const e = Q(qa, $(() => Pr.value || Zu)), t = $(() => `${du}-${e.value.hashed || ""}`), n = $(() => e.value.theme || Qu), r = Lc(n, $(() => [Zr, e.value.token]), $(() => ({
    salt: t.value,
    override: d({
      override: e.value.token
    }, e.value.components),
    formatToken: Fu
  })));
  return [n, $(() => r.value[0]), $(() => e.value.hashed ? r.value[1] : "")];
}
const Ka = H({
  compatConfig: {
    MODE: 3
  },
  setup() {
    const [, e] = kt(), t = $(() => new J(e.value.colorBgBase).toHsl().l < 0.5 ? {
      opacity: 0.65
    } : {});
    return () => C("svg", {
      style: t.value,
      width: "184",
      height: "152",
      viewBox: "0 0 184 152",
      xmlns: "http://www.w3.org/2000/svg"
    }, [C("g", {
      fill: "none",
      "fill-rule": "evenodd"
    }, [C("g", {
      transform: "translate(24 31.67)"
    }, [C("ellipse", {
      "fill-opacity": ".8",
      fill: "#F5F5F7",
      cx: "67.797",
      cy: "106.89",
      rx: "67.797",
      ry: "12.668"
    }, null), C("path", {
      d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z",
      fill: "#AEB8C2"
    }, null), C("path", {
      d: "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
      fill: "url(#linearGradient-1)",
      transform: "translate(13.56)"
    }, null), C("path", {
      d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z",
      fill: "#F5F5F7"
    }, null), C("path", {
      d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z",
      fill: "#DCE0E6"
    }, null)]), C("path", {
      d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z",
      fill: "#DCE0E6"
    }, null), C("g", {
      transform: "translate(149.65 15.383)",
      fill: "#FFF"
    }, [C("ellipse", {
      cx: "20.654",
      cy: "3.167",
      rx: "2.849",
      ry: "2.815"
    }, null), C("path", {
      d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
    }, null)])])]);
  }
});
Ka.PRESENTED_IMAGE_DEFAULT = !0;
const Qa = H({
  compatConfig: {
    MODE: 3
  },
  setup() {
    const [, e] = kt(), t = $(() => {
      const {
        colorFill: n,
        colorFillTertiary: r,
        colorFillQuaternary: o,
        colorBgContainer: i
      } = e.value;
      return {
        borderColor: new J(n).onBackground(i).toHexString(),
        shadowColor: new J(r).onBackground(i).toHexString(),
        contentColor: new J(o).onBackground(i).toHexString()
      };
    });
    return () => C("svg", {
      width: "64",
      height: "41",
      viewBox: "0 0 64 41",
      xmlns: "http://www.w3.org/2000/svg"
    }, [C("g", {
      transform: "translate(0 1)",
      fill: "none",
      "fill-rule": "evenodd"
    }, [C("ellipse", {
      fill: t.value.shadowColor,
      cx: "32",
      cy: "33",
      rx: "32",
      ry: "7"
    }, null), C("g", {
      "fill-rule": "nonzero",
      stroke: t.value.borderColor
    }, [C("path", {
      d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
    }, null), C("path", {
      d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
      fill: t.value.contentColor
    }, null)])])]);
  }
});
Qa.PRESENTED_IMAGE_SIMPLE = !0;
const ef = (e) => {
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
}, tf = Ft("Empty", (e) => {
  const {
    componentCls: t,
    controlHeightLG: n
  } = e, r = Ve(e, {
    emptyImgCls: `${t}-img`,
    emptyImgHeight: n * 2.5,
    emptyImgHeightMD: n,
    emptyImgHeightSM: n * 0.875
  });
  return [ef(r)];
});
var nf = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const Za = C(Ka, null, null), Ja = C(Qa, null, null), rf = () => ({
  prefixCls: String,
  imageStyle: k(),
  image: pr(),
  description: pr()
}), Jr = H({
  name: "AEmpty",
  compatConfig: {
    MODE: 3
  },
  inheritAttrs: !1,
  props: rf(),
  setup(e, t) {
    let {
      slots: n = {},
      attrs: r
    } = t;
    const {
      direction: o,
      prefixCls: i
    } = Xe("empty", e), [a, s] = tf(i);
    return () => {
      var l, c;
      const f = i.value, u = d(d({}, e), r), {
        image: p = ((l = n.image) === null || l === void 0 ? void 0 : l.call(n)) || Za,
        description: h = ((c = n.description) === null || c === void 0 ? void 0 : c.call(n)) || void 0,
        imageStyle: m,
        class: v = ""
      } = u, w = nf(u, ["image", "description", "imageStyle", "class"]);
      return a(C(uc, {
        componentName: "Empty",
        children: (b) => {
          const y = typeof h < "u" ? h : b.description, T = typeof y == "string" ? y : "empty";
          let _ = null;
          return typeof p == "string" ? _ = C("img", {
            alt: T,
            src: p
          }, null) : _ = p, C("div", K({
            class: fe(f, v, s.value, {
              [`${f}-normal`]: p === Ja,
              [`${f}-rtl`]: o.value === "rtl"
            })
          }, w), [C("div", {
            class: `${f}-image`,
            style: m
          }, [_]), y && C("p", {
            class: `${f}-description`
          }, [y]), n.default && C("div", {
            class: `${f}-footer`
          }, [zt(n.default())])]);
        }
      }, null));
    };
  }
});
Jr.PRESENTED_IMAGE_DEFAULT = Za;
Jr.PRESENTED_IMAGE_SIMPLE = Ja;
const gt = Xr(Jr), es = (e) => {
  const {
    prefixCls: t
  } = Xe("empty", e);
  return ((r) => {
    switch (r) {
      case "Table":
      case "List":
        return C(gt, {
          image: gt.PRESENTED_IMAGE_SIMPLE
        }, null);
      case "Select":
      case "TreeSelect":
      case "Cascader":
      case "Transfer":
      case "Mentions":
        return C(gt, {
          image: gt.PRESENTED_IMAGE_SIMPLE,
          class: `${t.value}-small`
        }, null);
      default:
        return C(gt, null, null);
    }
  })(e.componentName);
};
function c0(e) {
  return C(es, {
    componentName: e
  }, null);
}
const ts = Symbol("SizeContextKey"), ns = () => Q(ts, U(void 0)), u0 = (e) => {
  const t = ns();
  return Z(ts, $(() => e.value || t.value)), e;
}, Xe = (e, t) => {
  const n = ns(), r = Ur(), o = Q(Gr, d(d({}, wa), {
    renderEmpty: (g) => fr(es, {
      componentName: g
    })
  })), i = $(() => o.getPrefixCls(e, t.prefixCls)), a = $(() => {
    var g, S;
    return (g = t.direction) !== null && g !== void 0 ? g : (S = o.direction) === null || S === void 0 ? void 0 : S.value;
  }), s = $(() => {
    var g;
    return (g = t.iconPrefixCls) !== null && g !== void 0 ? g : o.iconPrefixCls.value;
  }), l = $(() => o.getPrefixCls()), c = $(() => {
    var g;
    return (g = o.autoInsertSpaceInButton) === null || g === void 0 ? void 0 : g.value;
  }), f = o.renderEmpty, u = o.space, p = o.pageHeader, h = o.form, m = $(() => {
    var g, S;
    return (g = t.getTargetContainer) !== null && g !== void 0 ? g : (S = o.getTargetContainer) === null || S === void 0 ? void 0 : S.value;
  }), v = $(() => {
    var g, S, A;
    return (S = (g = t.getContainer) !== null && g !== void 0 ? g : t.getPopupContainer) !== null && S !== void 0 ? S : (A = o.getPopupContainer) === null || A === void 0 ? void 0 : A.value;
  }), w = $(() => {
    var g, S;
    return (g = t.dropdownMatchSelectWidth) !== null && g !== void 0 ? g : (S = o.dropdownMatchSelectWidth) === null || S === void 0 ? void 0 : S.value;
  }), b = $(() => {
    var g;
    return (t.virtual === void 0 ? ((g = o.virtual) === null || g === void 0 ? void 0 : g.value) !== !1 : t.virtual !== !1) && w.value !== !1;
  }), y = $(() => t.size || n.value), T = $(() => {
    var g, S, A;
    return (g = t.autocomplete) !== null && g !== void 0 ? g : (A = (S = o.input) === null || S === void 0 ? void 0 : S.value) === null || A === void 0 ? void 0 : A.autocomplete;
  }), _ = $(() => {
    var g;
    return (g = t.disabled) !== null && g !== void 0 ? g : r.value;
  }), P = $(() => {
    var g;
    return (g = t.csp) !== null && g !== void 0 ? g : o.csp;
  }), x = $(() => {
    var g, S;
    return (g = t.wave) !== null && g !== void 0 ? g : (S = o.wave) === null || S === void 0 ? void 0 : S.value;
  });
  return {
    configProvider: o,
    prefixCls: i,
    direction: a,
    size: y,
    getTargetContainer: m,
    getPopupContainer: v,
    space: u,
    pageHeader: p,
    form: h,
    autoInsertSpaceInButton: c,
    renderEmpty: f,
    virtual: b,
    dropdownMatchSelectWidth: w,
    rootPrefixCls: l,
    getPrefixCls: o.getPrefixCls,
    autocomplete: T,
    csp: P,
    iconPrefixCls: s,
    disabled: _,
    select: o.select,
    wave: x
  };
};
function of(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function rs(e, t, n) {
  return n && of(e, n), e;
}
function cn() {
  return (cn = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
function os(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
}
function is(e, t) {
  if (e == null)
    return {};
  var n, r, o = {}, i = Object.keys(e);
  for (r = 0; r < i.length; r++)
    t.indexOf(n = i[r]) >= 0 || (o[n] = e[n]);
  return o;
}
function Xo(e) {
  return ((t = e) != null && typeof t == "object" && Array.isArray(t) === !1) == 1 && Object.prototype.toString.call(e) === "[object Object]";
  var t;
}
var as = Object.prototype, ss = as.toString, af = as.hasOwnProperty, ls = /^\s*function (\w+)/;
function Go(e) {
  var t, n = (t = e == null ? void 0 : e.type) !== null && t !== void 0 ? t : e;
  if (n) {
    var r = n.toString().match(ls);
    return r ? r[1] : "";
  }
  return "";
}
var Le = function(e) {
  var t, n;
  return Xo(e) !== !1 && typeof (t = e.constructor) == "function" && Xo(n = t.prototype) !== !1 && n.hasOwnProperty("isPrototypeOf") !== !1;
}, cs = function(e) {
  return e;
}, Y = cs;
if (process.env.NODE_ENV !== "production") {
  var sf = typeof console < "u";
  Y = sf ? function(e) {
    console.warn("[VueTypes warn]: " + e);
  } : cs;
}
var Mt = function(e, t) {
  return af.call(e, t);
}, lf = Number.isInteger || function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}, lt = Array.isArray || function(e) {
  return ss.call(e) === "[object Array]";
}, ct = function(e) {
  return ss.call(e) === "[object Function]";
}, bn = function(e) {
  return Le(e) && Mt(e, "_vueTypes_name");
}, us = function(e) {
  return Le(e) && (Mt(e, "type") || ["_vueTypes_name", "validator", "default", "required"].some(function(t) {
    return Mt(e, t);
  }));
};
function eo(e, t) {
  return Object.defineProperty(e.bind(t), "__original", { value: e });
}
function Ge(e, t, n) {
  var r;
  n === void 0 && (n = !1);
  var o = !0, i = "";
  r = Le(e) ? e : { type: e };
  var a = bn(r) ? r._vueTypes_name + " - " : "";
  if (us(r) && r.type !== null) {
    if (r.type === void 0 || r.type === !0 || !r.required && t === void 0)
      return o;
    lt(r.type) ? (o = r.type.some(function(u) {
      return Ge(u, t, !0) === !0;
    }), i = r.type.map(function(u) {
      return Go(u);
    }).join(" or ")) : o = (i = Go(r)) === "Array" ? lt(t) : i === "Object" ? Le(t) : i === "String" || i === "Number" || i === "Boolean" || i === "Function" ? function(u) {
      if (u == null)
        return "";
      var p = u.constructor.toString().match(ls);
      return p ? p[1] : "";
    }(t) === i : t instanceof r.type;
  }
  if (!o) {
    var s = a + 'value "' + t + '" should be of type "' + i + '"';
    return n === !1 ? (Y(s), !1) : s;
  }
  if (Mt(r, "validator") && ct(r.validator)) {
    var l = Y, c = [];
    if (Y = function(u) {
      c.push(u);
    }, o = r.validator(t), Y = l, !o) {
      var f = (c.length > 1 ? "* " : "") + c.join(`
* `);
      return c.length = 0, n === !1 ? (Y(f), o) : f;
    }
  }
  return o;
}
function re(e, t) {
  var n = Object.defineProperties(t, { _vueTypes_name: { value: e, writable: !0 }, isRequired: { get: function() {
    return this.required = !0, this;
  } }, def: { value: function(o) {
    return o !== void 0 || this.default ? ct(o) || Ge(this, o, !0) === !0 ? (this.default = lt(o) ? function() {
      return [].concat(o);
    } : Le(o) ? function() {
      return Object.assign({}, o);
    } : o, this) : (Y(this._vueTypes_name + ' - invalid default value: "' + o + '"'), this) : this;
  } } }), r = n.validator;
  return ct(r) && (n.validator = eo(r, n)), n;
}
function ge(e, t) {
  var n = re(e, t);
  return Object.defineProperty(n, "validate", { value: function(r) {
    return ct(this.validator) && Y(this._vueTypes_name + ` - calling .validate() will overwrite the current custom validator function. Validator info:
` + JSON.stringify(this)), this.validator = eo(r, this), this;
  } });
}
function Uo(e, t, n) {
  var r, o, i = (r = t, o = {}, Object.getOwnPropertyNames(r).forEach(function(u) {
    o[u] = Object.getOwnPropertyDescriptor(r, u);
  }), Object.defineProperties({}, o));
  if (i._vueTypes_name = e, !Le(n))
    return i;
  var a, s, l = n.validator, c = is(n, ["validator"]);
  if (ct(l)) {
    var f = i.validator;
    f && (f = (s = (a = f).__original) !== null && s !== void 0 ? s : a), i.validator = eo(f ? function(u) {
      return f.call(this, u) && l.call(this, u);
    } : l, i);
  }
  return Object.assign(i, c);
}
function Bn(e) {
  return e.replace(/^(?!\s*$)/gm, "  ");
}
var cf = function() {
  return ge("any", {});
}, uf = function() {
  return ge("function", { type: Function });
}, ff = function() {
  return ge("boolean", { type: Boolean });
}, df = function() {
  return ge("string", { type: String });
}, pf = function() {
  return ge("number", { type: Number });
}, hf = function() {
  return ge("array", { type: Array });
}, gf = function() {
  return ge("object", { type: Object });
}, mf = function() {
  return re("integer", { type: Number, validator: function(e) {
    return lf(e);
  } });
}, vf = function() {
  return re("symbol", { validator: function(e) {
    return typeof e == "symbol";
  } });
};
function yf(e, t) {
  if (t === void 0 && (t = "custom validation failed"), typeof e != "function")
    throw new TypeError("[VueTypes error]: You must provide a function as argument");
  return re(e.name || "<<anonymous function>>", { validator: function(n) {
    var r = e(n);
    return r || Y(this._vueTypes_name + " - " + t), r;
  } });
}
function bf(e) {
  if (!lt(e))
    throw new TypeError("[VueTypes error]: You must provide an array as argument.");
  var t = 'oneOf - value should be one of "' + e.join('", "') + '".', n = e.reduce(function(r, o) {
    if (o != null) {
      var i = o.constructor;
      r.indexOf(i) === -1 && r.push(i);
    }
    return r;
  }, []);
  return re("oneOf", { type: n.length > 0 ? n : void 0, validator: function(r) {
    var o = e.indexOf(r) !== -1;
    return o || Y(t), o;
  } });
}
function wf(e) {
  if (!lt(e))
    throw new TypeError("[VueTypes error]: You must provide an array as argument");
  for (var t = !1, n = [], r = 0; r < e.length; r += 1) {
    var o = e[r];
    if (us(o)) {
      if (bn(o) && o._vueTypes_name === "oneOf") {
        n = n.concat(o.type);
        continue;
      }
      if (ct(o.validator) && (t = !0), o.type !== !0 && o.type) {
        n = n.concat(o.type);
        continue;
      }
    }
    n.push(o);
  }
  return n = n.filter(function(i, a) {
    return n.indexOf(i) === a;
  }), re("oneOfType", t ? { type: n, validator: function(i) {
    var a = [], s = e.some(function(l) {
      var c = Ge(bn(l) && l._vueTypes_name === "oneOf" ? l.type || null : l, i, !0);
      return typeof c == "string" && a.push(c), c === !0;
    });
    return s || Y("oneOfType - provided value does not match any of the " + a.length + ` passed-in validators:
` + Bn(a.join(`
`))), s;
  } } : { type: n });
}
function xf(e) {
  return re("arrayOf", { type: Array, validator: function(t) {
    var n, r = t.every(function(o) {
      return (n = Ge(e, o, !0)) === !0;
    });
    return r || Y(`arrayOf - value validation error:
` + Bn(n)), r;
  } });
}
function Sf(e) {
  return re("instanceOf", { type: e });
}
function Cf(e) {
  return re("objectOf", { type: Object, validator: function(t) {
    var n, r = Object.keys(t).every(function(o) {
      return (n = Ge(e, t[o], !0)) === !0;
    });
    return r || Y(`objectOf - value validation error:
` + Bn(n)), r;
  } });
}
function Tf(e) {
  var t = Object.keys(e), n = t.filter(function(o) {
    var i;
    return !!(!((i = e[o]) === null || i === void 0) && i.required);
  }), r = re("shape", { type: Object, validator: function(o) {
    var i = this;
    if (!Le(o))
      return !1;
    var a = Object.keys(o);
    if (n.length > 0 && n.some(function(l) {
      return a.indexOf(l) === -1;
    })) {
      var s = n.filter(function(l) {
        return a.indexOf(l) === -1;
      });
      return Y(s.length === 1 ? 'shape - required property "' + s[0] + '" is not defined.' : 'shape - required properties "' + s.join('", "') + '" are not defined.'), !1;
    }
    return a.every(function(l) {
      if (t.indexOf(l) === -1)
        return i._vueTypes_isLoose === !0 || (Y('shape - shape definition does not include a "' + l + '" property. Allowed keys: "' + t.join('", "') + '".'), !1);
      var c = Ge(e[l], o[l], !0);
      return typeof c == "string" && Y('shape - "' + l + `" property validation error:
 ` + Bn(c)), c === !0;
    });
  } });
  return Object.defineProperty(r, "_vueTypes_isLoose", { writable: !0, value: !1 }), Object.defineProperty(r, "loose", { get: function() {
    return this._vueTypes_isLoose = !0, this;
  } }), r;
}
var pe = function() {
  function e() {
  }
  return e.extend = function(t) {
    var n = this;
    if (lt(t))
      return t.forEach(function(u) {
        return n.extend(u);
      }), this;
    var r = t.name, o = t.validate, i = o !== void 0 && o, a = t.getter, s = a !== void 0 && a, l = is(t, ["name", "validate", "getter"]);
    if (Mt(this, r))
      throw new TypeError('[VueTypes error]: Type "' + r + '" already defined');
    var c, f = l.type;
    return bn(f) ? (delete l.type, Object.defineProperty(this, r, s ? { get: function() {
      return Uo(r, f, l);
    } } : { value: function() {
      var u, p = Uo(r, f, l);
      return p.validator && (p.validator = (u = p.validator).bind.apply(u, [p].concat([].slice.call(arguments)))), p;
    } })) : (c = s ? { get: function() {
      var u = Object.assign({}, l);
      return i ? ge(r, u) : re(r, u);
    }, enumerable: !0 } : { value: function() {
      var u, p, h = Object.assign({}, l);
      return u = i ? ge(r, h) : re(r, h), h.validator && (u.validator = (p = h.validator).bind.apply(p, [u].concat([].slice.call(arguments)))), u;
    }, enumerable: !0 }, Object.defineProperty(this, r, c));
  }, rs(e, null, [{ key: "any", get: function() {
    return cf();
  } }, { key: "func", get: function() {
    return uf().def(this.defaults.func);
  } }, { key: "bool", get: function() {
    return ff().def(this.defaults.bool);
  } }, { key: "string", get: function() {
    return df().def(this.defaults.string);
  } }, { key: "number", get: function() {
    return pf().def(this.defaults.number);
  } }, { key: "array", get: function() {
    return hf().def(this.defaults.array);
  } }, { key: "object", get: function() {
    return gf().def(this.defaults.object);
  } }, { key: "integer", get: function() {
    return mf().def(this.defaults.integer);
  } }, { key: "symbol", get: function() {
    return vf();
  } }]), e;
}();
function fs(e) {
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
    return os(r, n), rs(r, null, [{ key: "sensibleDefaults", get: function() {
      return cn({}, this.defaults);
    }, set: function(o) {
      this.defaults = o !== !1 ? cn({}, o !== !0 ? o : e) : {};
    } }]), r;
  }(pe)).defaults = cn({}, e), t;
}
pe.defaults = {}, pe.custom = yf, pe.oneOf = bf, pe.instanceOf = Sf, pe.oneOfType = wf, pe.arrayOf = xf, pe.objectOf = Cf, pe.shape = Tf, pe.utils = { validate: function(e, t) {
  return Ge(t, e, !0) === !0;
}, toType: function(e, t, n) {
  return n === void 0 && (n = !1), n ? ge(e, t) : re(e, t);
} };
(function(e) {
  function t() {
    return e.apply(this, arguments) || this;
  }
  return os(t, e), t;
})(fs());
const D = fs({
  func: void 0,
  bool: void 0,
  string: void 0,
  number: void 0,
  array: void 0,
  object: void 0,
  integer: void 0
});
D.extend([{
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
function f0(e) {
  return e.default = void 0, e;
}
const to = (e, t, n) => {
  qr(e, `[ant-design-vue: ${t}] ${n}`);
};
function Of() {
  return "";
}
function $f(e) {
  return e ? e.ownerDocument : window.document;
}
function ds() {
}
const Pf = () => ({
  action: D.oneOfType([D.string, D.arrayOf(D.string)]).def([]),
  showAction: D.any.def([]),
  hideAction: D.any.def([]),
  getPopupClassNameFromAlign: D.any.def(Of),
  onPopupVisibleChange: Function,
  afterPopupVisibleChange: D.func.def(ds),
  popup: D.any,
  arrow: D.bool.def(!0),
  popupStyle: {
    type: Object,
    default: void 0
  },
  prefixCls: D.string.def("rc-trigger-popup"),
  popupClassName: D.string.def(""),
  popupPlacement: String,
  builtinPlacements: D.object,
  popupTransitionName: String,
  popupAnimation: D.any,
  mouseEnterDelay: D.number.def(0),
  mouseLeaveDelay: D.number.def(0.1),
  zIndex: Number,
  focusDelay: D.number.def(0),
  blurDelay: D.number.def(0.15),
  getPopupContainer: Function,
  getDocument: D.func.def($f),
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
  popupAlign: D.object.def(() => ({})),
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
}), no = {
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
}, _f = d(d({}, no), {
  mobile: {
    type: Object
  }
}), Ef = d(d({}, no), {
  mask: Boolean,
  mobile: {
    type: Object
  },
  maskAnimation: String,
  maskTransitionName: String
});
function ps(e) {
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
function hs(e) {
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
  let s = {};
  return (a || i) && (s = ps({
    prefixCls: t,
    transitionName: a,
    animation: i
  })), C(Lt, K({
    appear: !0
  }, s), {
    default: () => [aa(C("div", {
      style: {
        zIndex: r
      },
      class: `${t}-mask`
    }, null), [[cl("if"), n]])]
  });
}
hs.displayName = "Mask";
const Af = H({
  compatConfig: {
    MODE: 3
  },
  name: "MobilePopupInner",
  inheritAttrs: !1,
  props: _f,
  emits: ["mouseenter", "mouseleave", "mousedown", "touchstart", "align"],
  setup(e, t) {
    let {
      expose: n,
      slots: r
    } = t;
    const o = U();
    return n({
      forceAlign: () => {
      },
      getElement: () => o.value
    }), () => {
      var i;
      const {
        zIndex: a,
        visible: s,
        prefixCls: l,
        mobile: {
          popupClassName: c,
          popupStyle: f,
          popupMotion: u = {},
          popupRender: p
        } = {}
      } = e, h = d({
        zIndex: a
      }, f);
      let m = ce((i = r.default) === null || i === void 0 ? void 0 : i.call(r));
      m.length > 1 && (m = C("div", {
        class: `${l}-content`
      }, [m])), p && (m = p(m));
      const v = fe(l, c);
      return C(Lt, K({
        ref: o
      }, u), {
        default: () => [s ? C("div", {
          class: v,
          style: h
        }, [m]) : null]
      });
    };
  }
});
var Mf = function(e, t, n, r) {
  function o(i) {
    return i instanceof n ? i : new n(function(a) {
      a(i);
    });
  }
  return new (n || (n = Promise))(function(i, a) {
    function s(f) {
      try {
        c(r.next(f));
      } catch (u) {
        a(u);
      }
    }
    function l(f) {
      try {
        c(r.throw(f));
      } catch (u) {
        a(u);
      }
    }
    function c(f) {
      f.done ? i(f.value) : o(f.value).then(s, l);
    }
    c((r = r.apply(e, t || [])).next());
  });
};
const Yo = ["measure", "align", null, "motion"], If = (e, t) => {
  const n = j(null), r = j(), o = j(!1);
  function i(l) {
    o.value || (n.value = l);
  }
  function a() {
    ne.cancel(r.value);
  }
  function s(l) {
    a(), r.value = ne(() => {
      let c = n.value;
      switch (n.value) {
        case "align":
          c = "motion";
          break;
        case "motion":
          c = "stable";
          break;
      }
      i(c), l == null || l();
    });
  }
  return q(e, () => {
    i("measure");
  }, {
    immediate: !0,
    flush: "post"
  }), We(() => {
    q(n, () => {
      switch (n.value) {
        case "measure":
          t();
          break;
      }
      n.value && (r.value = ne(() => Mf(void 0, void 0, void 0, function* () {
        const l = Yo.indexOf(n.value), c = Yo[l + 1];
        c && l !== -1 && i(c);
      })));
    }, {
      immediate: !0,
      flush: "post"
    });
  }), ke(() => {
    o.value = !0, a();
  }), [n, s];
}, Df = (e) => {
  const t = j({
    width: 0,
    height: 0
  });
  function n(o) {
    t.value = {
      width: o.offsetWidth,
      height: o.offsetHeight
    };
  }
  return [$(() => {
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
function qo(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ko(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? qo(Object(n), !0).forEach(function(r) {
      jf(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : qo(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function _r(e) {
  "@babel/helpers - typeof";
  return _r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, _r(e);
}
function jf(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
var mt, Rf = {
  Webkit: "-webkit-",
  Moz: "-moz-",
  // IE did it wrong again ...
  ms: "-ms-",
  O: "-o-"
};
function wn() {
  if (mt !== void 0)
    return mt;
  mt = "";
  var e = document.createElement("p").style, t = "Transform";
  for (var n in Rf)
    n + t in e && (mt = n);
  return mt;
}
function gs() {
  return wn() ? "".concat(wn(), "TransitionProperty") : "transitionProperty";
}
function Nn() {
  return wn() ? "".concat(wn(), "Transform") : "transform";
}
function Qo(e, t) {
  var n = gs();
  n && (e.style[n] = t, n !== "transitionProperty" && (e.style.transitionProperty = t));
}
function er(e, t) {
  var n = Nn();
  n && (e.style[n] = t, n !== "transform" && (e.style.transform = t));
}
function Hf(e) {
  return e.style.transitionProperty || e.style[gs()];
}
function Bf(e) {
  var t = window.getComputedStyle(e, null), n = t.getPropertyValue("transform") || t.getPropertyValue(Nn());
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
var Nf = /matrix\((.*)\)/, Lf = /matrix3d\((.*)\)/;
function zf(e, t) {
  var n = window.getComputedStyle(e, null), r = n.getPropertyValue("transform") || n.getPropertyValue(Nn());
  if (r && r !== "none") {
    var o, i = r.match(Nf);
    if (i)
      i = i[1], o = i.split(",").map(function(s) {
        return parseFloat(s, 10);
      }), o[4] = t.x, o[5] = t.y, er(e, "matrix(".concat(o.join(","), ")"));
    else {
      var a = r.match(Lf)[1];
      o = a.split(",").map(function(s) {
        return parseFloat(s, 10);
      }), o[12] = t.x, o[13] = t.y, er(e, "matrix3d(".concat(o.join(","), ")"));
    }
  } else
    er(e, "translateX(".concat(t.x, "px) translateY(").concat(t.y, "px) translateZ(0)"));
}
var Ff = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source, Wt;
function Zo(e) {
  var t = e.style.display;
  e.style.display = "none", e.offsetHeight, e.style.display = t;
}
function ot(e, t, n) {
  var r = n;
  if (_r(t) === "object") {
    for (var o in t)
      t.hasOwnProperty(o) && ot(e, o, t[o]);
    return;
  }
  if (typeof r < "u") {
    typeof r == "number" && (r = "".concat(r, "px")), e.style[t] = r;
    return;
  }
  return Wt(e, t);
}
function kf(e) {
  var t, n, r, o = e.ownerDocument, i = o.body, a = o && o.documentElement;
  return t = e.getBoundingClientRect(), n = Math.floor(t.left), r = Math.floor(t.top), n -= a.clientLeft || i.clientLeft || 0, r -= a.clientTop || i.clientTop || 0, {
    left: n,
    top: r
  };
}
function ms(e, t) {
  var n = e["page".concat(t ? "Y" : "X", "Offset")], r = "scroll".concat(t ? "Top" : "Left");
  if (typeof n != "number") {
    var o = e.document;
    n = o.documentElement[r], typeof n != "number" && (n = o.body[r]);
  }
  return n;
}
function vs(e) {
  return ms(e);
}
function ys(e) {
  return ms(e, !0);
}
function It(e) {
  var t = kf(e), n = e.ownerDocument, r = n.defaultView || n.parentWindow;
  return t.left += vs(r), t.top += ys(r), t;
}
function ro(e) {
  return e != null && e == e.window;
}
function bs(e) {
  return ro(e) ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
}
function Wf(e, t, n) {
  var r = n, o = "", i = bs(e);
  return r = r || i.defaultView.getComputedStyle(e, null), r && (o = r.getPropertyValue(t) || r[t]), o;
}
var Vf = new RegExp("^(".concat(Ff, ")(?!px)[a-z%]+$"), "i"), Xf = /^(top|right|bottom|left)$/, tr = "currentStyle", nr = "runtimeStyle", _e = "left", Gf = "px";
function Uf(e, t) {
  var n = e[tr] && e[tr][t];
  if (Vf.test(n) && !Xf.test(t)) {
    var r = e.style, o = r[_e], i = e[nr][_e];
    e[nr][_e] = e[tr][_e], r[_e] = t === "fontSize" ? "1em" : n || 0, n = r.pixelLeft + Gf, r[_e] = o, e[nr][_e] = i;
  }
  return n === "" ? "auto" : n;
}
typeof window < "u" && (Wt = window.getComputedStyle ? Wf : Uf);
function Kt(e, t) {
  return e === "left" ? t.useCssRight ? "right" : e : t.useCssBottom ? "bottom" : e;
}
function Jo(e) {
  if (e === "left")
    return "right";
  if (e === "right")
    return "left";
  if (e === "top")
    return "bottom";
  if (e === "bottom")
    return "top";
}
function ei(e, t, n) {
  ot(e, "position") === "static" && (e.style.position = "relative");
  var r = -999, o = -999, i = Kt("left", n), a = Kt("top", n), s = Jo(i), l = Jo(a);
  i !== "left" && (r = 999), a !== "top" && (o = 999);
  var c = "", f = It(e);
  ("left" in t || "top" in t) && (c = Hf(e) || "", Qo(e, "none")), "left" in t && (e.style[s] = "", e.style[i] = "".concat(r, "px")), "top" in t && (e.style[l] = "", e.style[a] = "".concat(o, "px")), Zo(e);
  var u = It(e), p = {};
  for (var h in t)
    if (t.hasOwnProperty(h)) {
      var m = Kt(h, n), v = h === "left" ? r : o, w = f[h] - u[h];
      m === h ? p[m] = v + w : p[m] = v - w;
    }
  ot(e, p), Zo(e), ("left" in t || "top" in t) && Qo(e, c);
  var b = {};
  for (var y in t)
    if (t.hasOwnProperty(y)) {
      var T = Kt(y, n), _ = t[y] - f[y];
      y === T ? b[T] = p[T] + _ : b[T] = p[T] - _;
    }
  ot(e, b);
}
function Yf(e, t) {
  var n = It(e), r = Bf(e), o = {
    x: r.x,
    y: r.y
  };
  "left" in t && (o.x = r.x + t.left - n.left), "top" in t && (o.y = r.y + t.top - n.top), zf(e, o);
}
function qf(e, t, n) {
  if (n.ignoreShake) {
    var r = It(e), o = r.left.toFixed(0), i = r.top.toFixed(0), a = t.left.toFixed(0), s = t.top.toFixed(0);
    if (o === a && i === s)
      return;
  }
  n.useCssRight || n.useCssBottom ? ei(e, t, n) : n.useCssTransform && Nn() in document.body.style ? Yf(e, t) : ei(e, t, n);
}
function oo(e, t) {
  for (var n = 0; n < e.length; n++)
    t(e[n]);
}
function ws(e) {
  return Wt(e, "boxSizing") === "border-box";
}
var Kf = ["margin", "border", "padding"], Er = -1, Qf = 2, Ar = 1, Zf = 0;
function Jf(e, t, n) {
  var r = {}, o = e.style, i;
  for (i in t)
    t.hasOwnProperty(i) && (r[i] = o[i], o[i] = t[i]);
  n.call(e);
  for (i in t)
    t.hasOwnProperty(i) && (o[i] = r[i]);
}
function bt(e, t, n) {
  var r = 0, o, i, a;
  for (i = 0; i < t.length; i++)
    if (o = t[i], o)
      for (a = 0; a < n.length; a++) {
        var s = void 0;
        o === "border" ? s = "".concat(o).concat(n[a], "Width") : s = o + n[a], r += parseFloat(Wt(e, s)) || 0;
      }
  return r;
}
var he = {
  getParent: function(t) {
    var n = t;
    do
      n.nodeType === 11 && n.host ? n = n.host : n = n.parentNode;
    while (n && n.nodeType !== 1 && n.nodeType !== 9);
    return n;
  }
};
oo(["Width", "Height"], function(e) {
  he["doc".concat(e)] = function(t) {
    var n = t.document;
    return Math.max(
      // firefox chrome documentElement.scrollHeight< body.scrollHeight
      // ie standard mode : documentElement.scrollHeight> body.scrollHeight
      n.documentElement["scroll".concat(e)],
      // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
      n.body["scroll".concat(e)],
      he["viewport".concat(e)](n)
    );
  }, he["viewport".concat(e)] = function(t) {
    var n = "client".concat(e), r = t.document, o = r.body, i = r.documentElement, a = i[n];
    return r.compatMode === "CSS1Compat" && a || o && o[n] || a;
  };
});
function ti(e, t, n) {
  var r = n;
  if (ro(e))
    return t === "width" ? he.viewportWidth(e) : he.viewportHeight(e);
  if (e.nodeType === 9)
    return t === "width" ? he.docWidth(e) : he.docHeight(e);
  var o = t === "width" ? ["Left", "Right"] : ["Top", "Bottom"], i = Math.floor(t === "width" ? e.getBoundingClientRect().width : e.getBoundingClientRect().height), a = ws(e), s = 0;
  (i == null || i <= 0) && (i = void 0, s = Wt(e, t), (s == null || Number(s) < 0) && (s = e.style[t] || 0), s = Math.floor(parseFloat(s)) || 0), r === void 0 && (r = a ? Ar : Er);
  var l = i !== void 0 || a, c = i || s;
  return r === Er ? l ? c - bt(e, ["border", "padding"], o) : s : l ? r === Ar ? c : c + (r === Qf ? -bt(e, ["border"], o) : bt(e, ["margin"], o)) : s + bt(e, Kf.slice(r), o);
}
var ed = {
  position: "absolute",
  visibility: "hidden",
  display: "block"
};
function ni() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r, o = t[0];
  return o.offsetWidth !== 0 ? r = ti.apply(void 0, t) : Jf(o, ed, function() {
    r = ti.apply(void 0, t);
  }), r;
}
oo(["width", "height"], function(e) {
  var t = e.charAt(0).toUpperCase() + e.slice(1);
  he["outer".concat(t)] = function(r, o) {
    return r && ni(r, e, o ? Zf : Ar);
  };
  var n = e === "width" ? ["Left", "Right"] : ["Top", "Bottom"];
  he[e] = function(r, o) {
    var i = o;
    if (i !== void 0) {
      if (r) {
        var a = ws(r);
        return a && (i += bt(r, ["padding", "border"], n)), ot(r, e, i);
      }
      return;
    }
    return r && ni(r, e, Er);
  };
});
function xs(e, t) {
  for (var n in t)
    t.hasOwnProperty(n) && (e[n] = t[n]);
  return e;
}
var I = {
  getWindow: function(t) {
    if (t && t.document && t.setTimeout)
      return t;
    var n = t.ownerDocument || t;
    return n.defaultView || n.parentWindow;
  },
  getDocument: bs,
  offset: function(t, n, r) {
    if (typeof n < "u")
      qf(t, n, r || {});
    else
      return It(t);
  },
  isWindow: ro,
  each: oo,
  css: ot,
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
  mix: xs,
  getWindowScrollLeft: function(t) {
    return vs(t);
  },
  getWindowScrollTop: function(t) {
    return ys(t);
  },
  merge: function() {
    for (var t = {}, n = 0; n < arguments.length; n++)
      I.mix(t, n < 0 || arguments.length <= n ? void 0 : arguments[n]);
    return t;
  },
  viewportWidth: 0,
  viewportHeight: 0
};
xs(I, he);
var rr = I.getParent;
function Mr(e) {
  if (I.isWindow(e) || e.nodeType === 9)
    return null;
  var t = I.getDocument(e), n = t.body, r, o = I.css(e, "position"), i = o === "fixed" || o === "absolute";
  if (!i)
    return e.nodeName.toLowerCase() === "html" ? null : rr(e);
  for (r = rr(e); r && r !== n && r.nodeType !== 9; r = rr(r))
    if (o = I.css(r, "position"), o !== "static")
      return r;
  return null;
}
var ri = I.getParent;
function td(e) {
  if (I.isWindow(e) || e.nodeType === 9)
    return !1;
  var t = I.getDocument(e), n = t.body, r = null;
  for (
    r = ri(e);
    // 修复元素位于 document.documentElement 下导致崩溃问题
    r && r !== n && r !== t;
    r = ri(r)
  ) {
    var o = I.css(r, "position");
    if (o === "fixed")
      return !0;
  }
  return !1;
}
function io(e, t) {
  for (var n = {
    left: 0,
    right: 1 / 0,
    top: 0,
    bottom: 1 / 0
  }, r = Mr(e), o = I.getDocument(e), i = o.defaultView || o.parentWindow, a = o.body, s = o.documentElement; r; ) {
    if ((navigator.userAgent.indexOf("MSIE") === -1 || r.clientWidth !== 0) && // body may have overflow set on it, yet we still get the entire
    // viewport. In some browsers, el.offsetParent may be
    // document.documentElement, so check for that too.
    r !== a && r !== s && I.css(r, "overflow") !== "visible") {
      var l = I.offset(r);
      l.left += r.clientLeft, l.top += r.clientTop, n.top = Math.max(n.top, l.top), n.right = Math.min(
        n.right,
        // consider area without scrollBar
        l.left + r.clientWidth
      ), n.bottom = Math.min(n.bottom, l.top + r.clientHeight), n.left = Math.max(n.left, l.left);
    } else if (r === a || r === s)
      break;
    r = Mr(r);
  }
  var c = null;
  if (!I.isWindow(e) && e.nodeType !== 9) {
    c = e.style.position;
    var f = I.css(e, "position");
    f === "absolute" && (e.style.position = "fixed");
  }
  var u = I.getWindowScrollLeft(i), p = I.getWindowScrollTop(i), h = I.viewportWidth(i), m = I.viewportHeight(i), v = s.scrollWidth, w = s.scrollHeight, b = window.getComputedStyle(a);
  if (b.overflowX === "hidden" && (v = i.innerWidth), b.overflowY === "hidden" && (w = i.innerHeight), e.style && (e.style.position = c), t || td(e))
    n.left = Math.max(n.left, u), n.top = Math.max(n.top, p), n.right = Math.min(n.right, u + h), n.bottom = Math.min(n.bottom, p + m);
  else {
    var y = Math.max(v, u + h);
    n.right = Math.min(n.right, y);
    var T = Math.max(w, p + m);
    n.bottom = Math.min(n.bottom, T);
  }
  return n.top >= 0 && n.left >= 0 && n.bottom > n.top && n.right > n.left ? n : null;
}
function nd(e, t, n, r) {
  var o = I.clone(e), i = {
    width: t.width,
    height: t.height
  };
  return r.adjustX && o.left < n.left && (o.left = n.left), r.resizeWidth && o.left >= n.left && o.left + i.width > n.right && (i.width -= o.left + i.width - n.right), r.adjustX && o.left + i.width > n.right && (o.left = Math.max(n.right - i.width, n.left)), r.adjustY && o.top < n.top && (o.top = n.top), r.resizeHeight && o.top >= n.top && o.top + i.height > n.bottom && (i.height -= o.top + i.height - n.bottom), r.adjustY && o.top + i.height > n.bottom && (o.top = Math.max(n.bottom - i.height, n.top)), I.mix(o, i);
}
function ao(e) {
  var t, n, r;
  if (!I.isWindow(e) && e.nodeType !== 9)
    t = I.offset(e), n = I.outerWidth(e), r = I.outerHeight(e);
  else {
    var o = I.getWindow(e);
    t = {
      left: I.getWindowScrollLeft(o),
      top: I.getWindowScrollTop(o)
    }, n = I.viewportWidth(o), r = I.viewportHeight(o);
  }
  return t.width = n, t.height = r, t;
}
function oi(e, t) {
  var n = t.charAt(0), r = t.charAt(1), o = e.width, i = e.height, a = e.left, s = e.top;
  return n === "c" ? s += i / 2 : n === "b" && (s += i), r === "c" ? a += o / 2 : r === "r" && (a += o), {
    left: a,
    top: s
  };
}
function Qt(e, t, n, r, o) {
  var i = oi(t, n[1]), a = oi(e, n[0]), s = [a.left - i.left, a.top - i.top];
  return {
    left: Math.round(e.left - s[0] + r[0] - o[0]),
    top: Math.round(e.top - s[1] + r[1] - o[1])
  };
}
function ii(e, t, n) {
  return e.left < n.left || e.left + t.width > n.right;
}
function ai(e, t, n) {
  return e.top < n.top || e.top + t.height > n.bottom;
}
function rd(e, t, n) {
  return e.left > n.right || e.left + t.width < n.left;
}
function od(e, t, n) {
  return e.top > n.bottom || e.top + t.height < n.top;
}
function Zt(e, t, n) {
  var r = [];
  return I.each(e, function(o) {
    r.push(o.replace(t, function(i) {
      return n[i];
    }));
  }), r;
}
function Jt(e, t) {
  return e[t] = -e[t], e;
}
function si(e, t) {
  var n;
  return /%$/.test(e) ? n = parseInt(e.substring(0, e.length - 1), 10) / 100 * t : n = parseInt(e, 10), n || 0;
}
function li(e, t) {
  e[0] = si(e[0], t.width), e[1] = si(e[1], t.height);
}
function Ss(e, t, n, r) {
  var o = n.points, i = n.offset || [0, 0], a = n.targetOffset || [0, 0], s = n.overflow, l = n.source || e;
  i = [].concat(i), a = [].concat(a), s = s || {};
  var c = {}, f = 0, u = !!(s && s.alwaysByViewport), p = io(l, u), h = ao(l);
  li(i, h), li(a, t);
  var m = Qt(h, t, o, i, a), v = I.merge(h, m);
  if (p && (s.adjustX || s.adjustY) && r) {
    if (s.adjustX && ii(m, h, p)) {
      var w = Zt(o, /[lr]/gi, {
        l: "r",
        r: "l"
      }), b = Jt(i, 0), y = Jt(a, 0), T = Qt(h, t, w, b, y);
      rd(T, h, p) || (f = 1, o = w, i = b, a = y);
    }
    if (s.adjustY && ai(m, h, p)) {
      var _ = Zt(o, /[tb]/gi, {
        t: "b",
        b: "t"
      }), P = Jt(i, 1), x = Jt(a, 1), g = Qt(h, t, _, P, x);
      od(g, h, p) || (f = 1, o = _, i = P, a = x);
    }
    f && (m = Qt(h, t, o, i, a), I.mix(v, m));
    var S = ii(m, h, p), A = ai(m, h, p);
    if (S || A) {
      var O = o;
      S && (O = Zt(o, /[lr]/gi, {
        l: "r",
        r: "l"
      })), A && (O = Zt(o, /[tb]/gi, {
        t: "b",
        b: "t"
      })), o = O, i = n.offset || [0, 0], a = n.targetOffset || [0, 0];
    }
    c.adjustX = s.adjustX && S, c.adjustY = s.adjustY && A, (c.adjustX || c.adjustY) && (v = nd(m, h, p, c));
  }
  return v.width !== h.width && I.css(l, "width", I.width(l) + v.width - h.width), v.height !== h.height && I.css(l, "height", I.height(l) + v.height - h.height), I.offset(l, {
    left: v.left,
    top: v.top
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
function id(e, t) {
  var n = io(e, t), r = ao(e);
  return !n || r.left + r.width <= n.left || r.top + r.height <= n.top || r.left >= n.right || r.top >= n.bottom;
}
function so(e, t, n) {
  var r = n.target || t, o = ao(r), i = !id(r, n.overflow && n.overflow.alwaysByViewport);
  return Ss(e, o, n, i);
}
so.__getOffsetParent = Mr;
so.__getVisibleRectForElement = io;
function ad(e, t, n) {
  var r, o, i = I.getDocument(e), a = i.defaultView || i.parentWindow, s = I.getWindowScrollLeft(a), l = I.getWindowScrollTop(a), c = I.viewportWidth(a), f = I.viewportHeight(a);
  "pageX" in t ? r = t.pageX : r = s + t.clientX, "pageY" in t ? o = t.pageY : o = l + t.clientY;
  var u = {
    left: r,
    top: o,
    width: 0,
    height: 0
  }, p = r >= 0 && r <= s + c && o >= 0 && o <= l + f, h = [n.points[0], "cc"];
  return Ss(e, u, Ko(Ko({}, n), {}, {
    points: h
  }), p);
}
function xn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, o = e;
  if (Array.isArray(e) && (o = zt(e)[0]), !o)
    return null;
  const i = sa(o, t, r);
  return i.props = n ? d(d({}, i.props), t) : i.props, jn(typeof i.props.class != "object", "class must be string"), i;
}
function d0(e, t, n) {
  Fr(sa(e, d({}, t)), n);
}
const Cs = (e) => (e || []).some((t) => ft(t) ? !(t.type === oa || t.type === $e && !Cs(t.children)) : !0) ? e : null;
function p0(e, t, n, r) {
  var o;
  const i = (o = e[t]) === null || o === void 0 ? void 0 : o.call(e, n);
  return Cs(i) ? i : r == null ? void 0 : r();
}
const Ts = (e) => {
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
function sd(e, t) {
  return e === t ? !0 : !e || !t ? !1 : "pageX" in t && "pageY" in t ? e.pageX === t.pageX && e.pageY === t.pageY : "clientX" in t && "clientY" in t ? e.clientX === t.clientX && e.clientY === t.clientY : !1;
}
function ld(e, t) {
  e !== document.activeElement && Me(t, e) && typeof e.focus == "function" && e.focus();
}
function ci(e, t) {
  let n = null, r = null;
  function o(a) {
    let [{
      target: s
    }] = a;
    if (!document.documentElement.contains(s))
      return;
    const {
      width: l,
      height: c
    } = s.getBoundingClientRect(), f = Math.floor(l), u = Math.floor(c);
    (n !== f || r !== u) && Promise.resolve().then(() => {
      t({
        width: f,
        height: u
      });
    }), n = f, r = u;
  }
  const i = new Gl(o);
  return e && i.observe(e), () => {
    i.disconnect();
  };
}
const cd = (e, t) => {
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
function ud() {
  this.__data__ = [], this.size = 0;
}
function Os(e, t) {
  return e === t || e !== e && t !== t;
}
function Ln(e, t) {
  for (var n = e.length; n--; )
    if (Os(e[n][0], t))
      return n;
  return -1;
}
var fd = Array.prototype, dd = fd.splice;
function pd(e) {
  var t = this.__data__, n = Ln(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : dd.call(t, n, 1), --this.size, !0;
}
function hd(e) {
  var t = this.__data__, n = Ln(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function gd(e) {
  return Ln(this.__data__, e) > -1;
}
function md(e, t) {
  var n = this.__data__, r = Ln(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function Ce(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Ce.prototype.clear = ud;
Ce.prototype.delete = pd;
Ce.prototype.get = hd;
Ce.prototype.has = gd;
Ce.prototype.set = md;
function vd() {
  this.__data__ = new Ce(), this.size = 0;
}
function yd(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function bd(e) {
  return this.__data__.get(e);
}
function wd(e) {
  return this.__data__.has(e);
}
var $s = typeof global == "object" && global && global.Object === Object && global, xd = typeof self == "object" && self && self.Object === Object && self, me = $s || xd || Function("return this")(), ut = me.Symbol, Ps = Object.prototype, Sd = Ps.hasOwnProperty, Cd = Ps.toString, vt = ut ? ut.toStringTag : void 0;
function Td(e) {
  var t = Sd.call(e, vt), n = e[vt];
  try {
    e[vt] = void 0;
    var r = !0;
  } catch {
  }
  var o = Cd.call(e);
  return r && (t ? e[vt] = n : delete e[vt]), o;
}
var Od = Object.prototype, $d = Od.toString;
function Pd(e) {
  return $d.call(e);
}
var _d = "[object Null]", Ed = "[object Undefined]", ui = ut ? ut.toStringTag : void 0;
function Ue(e) {
  return e == null ? e === void 0 ? Ed : _d : ui && ui in Object(e) ? Td(e) : Pd(e);
}
function Dt(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Ad = "[object AsyncFunction]", Md = "[object Function]", Id = "[object GeneratorFunction]", Dd = "[object Proxy]";
function _s(e) {
  if (!Dt(e))
    return !1;
  var t = Ue(e);
  return t == Md || t == Id || t == Ad || t == Dd;
}
var or = me["__core-js_shared__"], fi = function() {
  var e = /[^.]+$/.exec(or && or.keys && or.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function jd(e) {
  return !!fi && fi in e;
}
var Rd = Function.prototype, Hd = Rd.toString;
function Ye(e) {
  if (e != null) {
    try {
      return Hd.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Bd = /[\\^$.*+?()[\]{}|]/g, Nd = /^\[object .+?Constructor\]$/, Ld = Function.prototype, zd = Object.prototype, Fd = Ld.toString, kd = zd.hasOwnProperty, Wd = RegExp(
  "^" + Fd.call(kd).replace(Bd, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Vd(e) {
  if (!Dt(e) || jd(e))
    return !1;
  var t = _s(e) ? Wd : Nd;
  return t.test(Ye(e));
}
function Xd(e, t) {
  return e == null ? void 0 : e[t];
}
function pt(e, t) {
  var n = Xd(e, t);
  return Vd(n) ? n : void 0;
}
var jt = pt(me, "Map"), Rt = pt(Object, "create");
function Gd() {
  this.__data__ = Rt ? Rt(null) : {}, this.size = 0;
}
function Ud(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Yd = "__lodash_hash_undefined__", qd = Object.prototype, Kd = qd.hasOwnProperty;
function Qd(e) {
  var t = this.__data__;
  if (Rt) {
    var n = t[e];
    return n === Yd ? void 0 : n;
  }
  return Kd.call(t, e) ? t[e] : void 0;
}
var Zd = Object.prototype, Jd = Zd.hasOwnProperty;
function ep(e) {
  var t = this.__data__;
  return Rt ? t[e] !== void 0 : Jd.call(t, e);
}
var tp = "__lodash_hash_undefined__";
function np(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Rt && t === void 0 ? tp : t, this;
}
function ze(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ze.prototype.clear = Gd;
ze.prototype.delete = Ud;
ze.prototype.get = Qd;
ze.prototype.has = ep;
ze.prototype.set = np;
function rp() {
  this.size = 0, this.__data__ = {
    hash: new ze(),
    map: new (jt || Ce)(),
    string: new ze()
  };
}
function op(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function zn(e, t) {
  var n = e.__data__;
  return op(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function ip(e) {
  var t = zn(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function ap(e) {
  return zn(this, e).get(e);
}
function sp(e) {
  return zn(this, e).has(e);
}
function lp(e, t) {
  var n = zn(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function qe(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
qe.prototype.clear = rp;
qe.prototype.delete = ip;
qe.prototype.get = ap;
qe.prototype.has = sp;
qe.prototype.set = lp;
var cp = 200;
function up(e, t) {
  var n = this.__data__;
  if (n instanceof Ce) {
    var r = n.__data__;
    if (!jt || r.length < cp - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new qe(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Oe(e) {
  var t = this.__data__ = new Ce(e);
  this.size = t.size;
}
Oe.prototype.clear = vd;
Oe.prototype.delete = yd;
Oe.prototype.get = bd;
Oe.prototype.has = wd;
Oe.prototype.set = up;
var fp = "__lodash_hash_undefined__";
function dp(e) {
  return this.__data__.set(e, fp), this;
}
function pp(e) {
  return this.__data__.has(e);
}
function Sn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new qe(); ++t < n; )
    this.add(e[t]);
}
Sn.prototype.add = Sn.prototype.push = dp;
Sn.prototype.has = pp;
function hp(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function gp(e, t) {
  return e.has(t);
}
var mp = 1, vp = 2;
function Es(e, t, n, r, o, i) {
  var a = n & mp, s = e.length, l = t.length;
  if (s != l && !(a && l > s))
    return !1;
  var c = i.get(e), f = i.get(t);
  if (c && f)
    return c == t && f == e;
  var u = -1, p = !0, h = n & vp ? new Sn() : void 0;
  for (i.set(e, t), i.set(t, e); ++u < s; ) {
    var m = e[u], v = t[u];
    if (r)
      var w = a ? r(v, m, u, t, e, i) : r(m, v, u, e, t, i);
    if (w !== void 0) {
      if (w)
        continue;
      p = !1;
      break;
    }
    if (h) {
      if (!hp(t, function(b, y) {
        if (!gp(h, y) && (m === b || o(m, b, n, r, i)))
          return h.push(y);
      })) {
        p = !1;
        break;
      }
    } else if (!(m === v || o(m, v, n, r, i))) {
      p = !1;
      break;
    }
  }
  return i.delete(e), i.delete(t), p;
}
var di = me.Uint8Array;
function yp(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, o) {
    n[++t] = [o, r];
  }), n;
}
function bp(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var wp = 1, xp = 2, Sp = "[object Boolean]", Cp = "[object Date]", Tp = "[object Error]", Op = "[object Map]", $p = "[object Number]", Pp = "[object RegExp]", _p = "[object Set]", Ep = "[object String]", Ap = "[object Symbol]", Mp = "[object ArrayBuffer]", Ip = "[object DataView]", pi = ut ? ut.prototype : void 0, ir = pi ? pi.valueOf : void 0;
function Dp(e, t, n, r, o, i, a) {
  switch (n) {
    case Ip:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Mp:
      return !(e.byteLength != t.byteLength || !i(new di(e), new di(t)));
    case Sp:
    case Cp:
    case $p:
      return Os(+e, +t);
    case Tp:
      return e.name == t.name && e.message == t.message;
    case Pp:
    case Ep:
      return e == t + "";
    case Op:
      var s = yp;
    case _p:
      var l = r & wp;
      if (s || (s = bp), e.size != t.size && !l)
        return !1;
      var c = a.get(e);
      if (c)
        return c == t;
      r |= xp, a.set(e, t);
      var f = Es(s(e), s(t), r, o, i, a);
      return a.delete(e), f;
    case Ap:
      if (ir)
        return ir.call(e) == ir.call(t);
  }
  return !1;
}
function jp(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var Ht = Array.isArray;
function Rp(e, t, n) {
  var r = t(e);
  return Ht(e) ? r : jp(r, n(e));
}
function Hp(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, i = []; ++n < r; ) {
    var a = e[n];
    t(a, n, e) && (i[o++] = a);
  }
  return i;
}
function Bp() {
  return [];
}
var Np = Object.prototype, Lp = Np.propertyIsEnumerable, hi = Object.getOwnPropertySymbols, zp = hi ? function(e) {
  return e == null ? [] : (e = Object(e), Hp(hi(e), function(t) {
    return Lp.call(e, t);
  }));
} : Bp;
function Fp(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
function Fe(e) {
  return e != null && typeof e == "object";
}
var kp = "[object Arguments]";
function gi(e) {
  return Fe(e) && Ue(e) == kp;
}
var As = Object.prototype, Wp = As.hasOwnProperty, Vp = As.propertyIsEnumerable, Ms = gi(/* @__PURE__ */ function() {
  return arguments;
}()) ? gi : function(e) {
  return Fe(e) && Wp.call(e, "callee") && !Vp.call(e, "callee");
};
function Xp() {
  return !1;
}
var Is = typeof exports == "object" && exports && !exports.nodeType && exports, mi = Is && typeof module == "object" && module && !module.nodeType && module, Gp = mi && mi.exports === Is, vi = Gp ? me.Buffer : void 0, Up = vi ? vi.isBuffer : void 0, Cn = Up || Xp, Yp = 9007199254740991, qp = /^(?:0|[1-9]\d*)$/;
function Kp(e, t) {
  var n = typeof e;
  return t = t ?? Yp, !!t && (n == "number" || n != "symbol" && qp.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Qp = 9007199254740991;
function Ds(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Qp;
}
var Zp = "[object Arguments]", Jp = "[object Array]", eh = "[object Boolean]", th = "[object Date]", nh = "[object Error]", rh = "[object Function]", oh = "[object Map]", ih = "[object Number]", ah = "[object Object]", sh = "[object RegExp]", lh = "[object Set]", ch = "[object String]", uh = "[object WeakMap]", fh = "[object ArrayBuffer]", dh = "[object DataView]", ph = "[object Float32Array]", hh = "[object Float64Array]", gh = "[object Int8Array]", mh = "[object Int16Array]", vh = "[object Int32Array]", yh = "[object Uint8Array]", bh = "[object Uint8ClampedArray]", wh = "[object Uint16Array]", xh = "[object Uint32Array]", B = {};
B[ph] = B[hh] = B[gh] = B[mh] = B[vh] = B[yh] = B[bh] = B[wh] = B[xh] = !0;
B[Zp] = B[Jp] = B[fh] = B[eh] = B[dh] = B[th] = B[nh] = B[rh] = B[oh] = B[ih] = B[ah] = B[sh] = B[lh] = B[ch] = B[uh] = !1;
function Sh(e) {
  return Fe(e) && Ds(e.length) && !!B[Ue(e)];
}
function Ch(e) {
  return function(t) {
    return e(t);
  };
}
var js = typeof exports == "object" && exports && !exports.nodeType && exports, St = js && typeof module == "object" && module && !module.nodeType && module, Th = St && St.exports === js, ar = Th && $s.process, yi = function() {
  try {
    var e = St && St.require && St.require("util").types;
    return e || ar && ar.binding && ar.binding("util");
  } catch {
  }
}(), bi = yi && yi.isTypedArray, lo = bi ? Ch(bi) : Sh, Oh = Object.prototype, $h = Oh.hasOwnProperty;
function Ph(e, t) {
  var n = Ht(e), r = !n && Ms(e), o = !n && !r && Cn(e), i = !n && !r && !o && lo(e), a = n || r || o || i, s = a ? Fp(e.length, String) : [], l = s.length;
  for (var c in e)
    (t || $h.call(e, c)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    Kp(c, l))) && s.push(c);
  return s;
}
var _h = Object.prototype;
function Rs(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || _h;
  return e === n;
}
function Hs(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var Eh = Hs(Object.keys, Object), Ah = Object.prototype, Mh = Ah.hasOwnProperty;
function Bs(e) {
  if (!Rs(e))
    return Eh(e);
  var t = [];
  for (var n in Object(e))
    Mh.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Ns(e) {
  return e != null && Ds(e.length) && !_s(e);
}
function Ih(e) {
  return Ns(e) ? Ph(e) : Bs(e);
}
function wi(e) {
  return Rp(e, Ih, zp);
}
var Dh = 1, jh = Object.prototype, Rh = jh.hasOwnProperty;
function Hh(e, t, n, r, o, i) {
  var a = n & Dh, s = wi(e), l = s.length, c = wi(t), f = c.length;
  if (l != f && !a)
    return !1;
  for (var u = l; u--; ) {
    var p = s[u];
    if (!(a ? p in t : Rh.call(t, p)))
      return !1;
  }
  var h = i.get(e), m = i.get(t);
  if (h && m)
    return h == t && m == e;
  var v = !0;
  i.set(e, t), i.set(t, e);
  for (var w = a; ++u < l; ) {
    p = s[u];
    var b = e[p], y = t[p];
    if (r)
      var T = a ? r(y, b, p, t, e, i) : r(b, y, p, e, t, i);
    if (!(T === void 0 ? b === y || o(b, y, n, r, i) : T)) {
      v = !1;
      break;
    }
    w || (w = p == "constructor");
  }
  if (v && !w) {
    var _ = e.constructor, P = t.constructor;
    _ != P && "constructor" in e && "constructor" in t && !(typeof _ == "function" && _ instanceof _ && typeof P == "function" && P instanceof P) && (v = !1);
  }
  return i.delete(e), i.delete(t), v;
}
var Ir = pt(me, "DataView"), Dr = pt(me, "Promise"), jr = pt(me, "Set"), Rr = pt(me, "WeakMap"), xi = "[object Map]", Bh = "[object Object]", Si = "[object Promise]", Ci = "[object Set]", Ti = "[object WeakMap]", Oi = "[object DataView]", Nh = Ye(Ir), Lh = Ye(jt), zh = Ye(Dr), Fh = Ye(jr), kh = Ye(Rr), we = Ue;
(Ir && we(new Ir(new ArrayBuffer(1))) != Oi || jt && we(new jt()) != xi || Dr && we(Dr.resolve()) != Si || jr && we(new jr()) != Ci || Rr && we(new Rr()) != Ti) && (we = function(e) {
  var t = Ue(e), n = t == Bh ? e.constructor : void 0, r = n ? Ye(n) : "";
  if (r)
    switch (r) {
      case Nh:
        return Oi;
      case Lh:
        return xi;
      case zh:
        return Si;
      case Fh:
        return Ci;
      case kh:
        return Ti;
    }
  return t;
});
var Wh = 1, $i = "[object Arguments]", Pi = "[object Array]", en = "[object Object]", Vh = Object.prototype, _i = Vh.hasOwnProperty;
function Xh(e, t, n, r, o, i) {
  var a = Ht(e), s = Ht(t), l = a ? Pi : we(e), c = s ? Pi : we(t);
  l = l == $i ? en : l, c = c == $i ? en : c;
  var f = l == en, u = c == en, p = l == c;
  if (p && Cn(e)) {
    if (!Cn(t))
      return !1;
    a = !0, f = !1;
  }
  if (p && !f)
    return i || (i = new Oe()), a || lo(e) ? Es(e, t, n, r, o, i) : Dp(e, t, l, n, r, o, i);
  if (!(n & Wh)) {
    var h = f && _i.call(e, "__wrapped__"), m = u && _i.call(t, "__wrapped__");
    if (h || m) {
      var v = h ? e.value() : e, w = m ? t.value() : t;
      return i || (i = new Oe()), o(v, w, n, r, i);
    }
  }
  return p ? (i || (i = new Oe()), Hh(e, t, n, r, o, i)) : !1;
}
function Ls(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !Fe(e) && !Fe(t) ? e !== e && t !== t : Xh(e, t, n, r, Ls, o);
}
function Gh(e, t) {
  return Ls(e, t);
}
const Uh = {
  align: Object,
  target: [Object, Function],
  onAlign: Function,
  monitorBufferTime: Number,
  monitorWindowResize: Boolean,
  disabled: Boolean
};
function Ei(e) {
  return typeof e != "function" ? null : e();
}
function Ai(e) {
  return typeof e != "object" || !e ? null : e;
}
const Yh = H({
  compatConfig: {
    MODE: 3
  },
  name: "Align",
  props: Uh,
  emits: ["align"],
  setup(e, t) {
    let {
      expose: n,
      slots: r
    } = t;
    const o = U({}), i = U(), [a, s] = cd(() => {
      const {
        disabled: p,
        target: h,
        align: m,
        onAlign: v
      } = e;
      if (!p && h && i.value) {
        const w = i.value;
        let b;
        const y = Ei(h), T = Ai(h);
        o.value.element = y, o.value.point = T, o.value.align = m;
        const {
          activeElement: _
        } = document;
        return y && Ts(y) ? b = so(w, y, m) : T && (b = ad(w, T, m)), ld(_, w), v && b && v(w, b), !0;
      }
      return !1;
    }, $(() => e.monitorBufferTime)), l = U({
      cancel: () => {
      }
    }), c = U({
      cancel: () => {
      }
    }), f = () => {
      const p = e.target, h = Ei(p), m = Ai(p);
      i.value !== c.value.element && (c.value.cancel(), c.value.element = i.value, c.value.cancel = ci(i.value, a)), (o.value.element !== h || !sd(o.value.point, m) || !Gh(o.value.align, e.align)) && (a(), l.value.element !== h && (l.value.cancel(), l.value.element = h, l.value.cancel = ci(h, a)));
    };
    We(() => {
      xe(() => {
        f();
      });
    }), An(() => {
      xe(() => {
        f();
      });
    }), q(() => e.disabled, (p) => {
      p ? s() : a();
    }, {
      immediate: !0,
      flush: "post"
    });
    const u = U(null);
    return q(() => e.monitorWindowResize, (p) => {
      p ? u.value || (u.value = yt(window, "resize", a)) : u.value && (u.value.remove(), u.value = null);
    }, {
      flush: "post"
    }), ul(() => {
      l.value.cancel(), c.value.cancel(), u.value && u.value.remove(), s();
    }), n({
      forceAlign: () => a(!0)
    }), () => {
      const p = r == null ? void 0 : r.default();
      return p ? xn(p[0], {
        ref: i
      }, !0, !0) : null;
    };
  }
});
hn("bottomLeft", "bottomRight", "topLeft", "topRight");
const h0 = (e) => e !== void 0 && (e === "topLeft" || e === "topRight") ? "slide-down" : "slide-up", qh = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return d(e ? {
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
}, g0 = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return d(e ? {
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
}, Kh = (e, t, n) => n !== void 0 ? n : `${e}-${t}`, Qh = H({
  compatConfig: {
    MODE: 3
  },
  name: "PopupInner",
  inheritAttrs: !1,
  props: no,
  emits: ["mouseenter", "mouseleave", "mousedown", "touchstart", "align"],
  setup(e, t) {
    let {
      expose: n,
      attrs: r,
      slots: o
    } = t;
    const i = j(), a = j(), s = j(), [l, c] = Df(fl(e, "stretch")), f = () => {
      e.stretch && c(e.getRootDomNode());
    }, u = j(!1);
    let p;
    q(() => e.visible, (x) => {
      clearTimeout(p), x ? p = setTimeout(() => {
        u.value = e.visible;
      }) : u.value = !1;
    }, {
      immediate: !0
    });
    const [h, m] = If(u, f), v = j(), w = () => e.point ? e.point : e.getRootDomNode, b = () => {
      var x;
      (x = i.value) === null || x === void 0 || x.forceAlign();
    }, y = (x, g) => {
      var S;
      const A = e.getClassNameFromAlign(g), O = s.value;
      s.value !== A && (s.value = A), h.value === "align" && (O !== A ? Promise.resolve().then(() => {
        b();
      }) : m(() => {
        var M;
        (M = v.value) === null || M === void 0 || M.call(v);
      }), (S = e.onAlign) === null || S === void 0 || S.call(e, x, g));
    }, T = $(() => {
      const x = typeof e.animation == "object" ? e.animation : ps(e);
      return ["onAfterEnter", "onAfterLeave"].forEach((g) => {
        const S = x[g];
        x[g] = (A) => {
          m(), h.value = "stable", S == null || S(A);
        };
      }), x;
    }), _ = () => new Promise((x) => {
      v.value = x;
    });
    q([T, h], () => {
      !T.value && h.value === "motion" && m();
    }, {
      immediate: !0
    }), n({
      forceAlign: b,
      getElement: () => a.value.$el || a.value
    });
    const P = $(() => {
      var x;
      return !(!((x = e.align) === null || x === void 0) && x.points && (h.value === "align" || h.value === "stable"));
    });
    return () => {
      var x;
      const {
        zIndex: g,
        align: S,
        prefixCls: A,
        destroyPopupOnHide: O,
        onMouseenter: M,
        onMouseleave: N,
        onTouchstart: L = () => {
        },
        onMousedown: W
      } = e, E = h.value, R = [d(d({}, l.value), {
        zIndex: g,
        opacity: E === "motion" || E === "stable" || !u.value ? null : 0,
        // pointerEvents: statusValue === 'stable' ? null : 'none',
        pointerEvents: !u.value && E !== "stable" ? "none" : null
      }), r.style];
      let V = ce((x = o.default) === null || x === void 0 ? void 0 : x.call(o, {
        visible: e.visible
      }));
      V.length > 1 && (V = C("div", {
        class: `${A}-content`
      }, [V]));
      const F = fe(A, r.class, s.value, !e.arrow && `${A}-arrow-hidden`), G = u.value || !e.visible ? qh(T.value.name, T.value) : {};
      return C(Lt, K(K({
        ref: a
      }, G), {}, {
        onBeforeEnter: _
      }), {
        default: () => !O || e.visible ? aa(C(Yh, {
          target: w(),
          key: "popup",
          ref: i,
          monitorWindowResize: !0,
          disabled: P.value,
          align: S,
          onAlign: y
        }, {
          default: () => C("div", {
            class: F,
            onMouseenter: M,
            onMouseleave: N,
            onMousedown: vo(W, ["capture"]),
            [je ? "onTouchstartPassive" : "onTouchstart"]: vo(L, ["capture"]),
            style: R
          }, [V])
        }), [[dl, u.value]]) : null
      });
    };
  }
}), Zh = H({
  compatConfig: {
    MODE: 3
  },
  name: "Popup",
  inheritAttrs: !1,
  props: Ef,
  setup(e, t) {
    let {
      attrs: n,
      slots: r,
      expose: o
    } = t;
    const i = j(!1), a = j(!1), s = j(), l = j();
    return q([() => e.visible, () => e.mobile], () => {
      i.value = e.visible, e.visible && e.mobile && (a.value = !0);
    }, {
      immediate: !0,
      flush: "post"
    }), o({
      forceAlign: () => {
        var c;
        (c = s.value) === null || c === void 0 || c.forceAlign();
      },
      getElement: () => {
        var c;
        return (c = s.value) === null || c === void 0 ? void 0 : c.getElement();
      }
    }), () => {
      const c = d(d(d({}, e), n), {
        visible: i.value
      }), f = a.value ? C(Af, K(K({}, c), {}, {
        mobile: e.mobile,
        ref: s
      }), {
        default: r.default
      }) : C(Qh, K(K({}, c), {}, {
        ref: s
      }), {
        default: r.default
      });
      return C("div", {
        ref: l
      }, [C(hs, c, null), f]);
    };
  }
});
function Jh(e, t, n) {
  return n ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
}
function Mi(e, t, n) {
  const r = e[t] || {};
  return d(d({}, r), n);
}
function eg(e, t, n, r) {
  const {
    points: o
  } = n, i = Object.keys(e);
  for (let a = 0; a < i.length; a += 1) {
    const s = i[a];
    if (Jh(e[s].points, o, r))
      return `${t}-placement-${s}`;
  }
  return "";
}
const tg = {
  methods: {
    setState() {
      let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = typeof e == "function" ? e(this.$data, this.$props) : e;
      if (this.getDerivedStateFromProps) {
        const r = this.getDerivedStateFromProps(Jl(this), d(d({}, this.$data), n));
        if (r === null)
          return;
        n = d(d({}, n), r || {});
      }
      d(this.$data, n), this._.isMounted && this.$forceUpdate(), xe(() => {
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
}, zs = Symbol("PortalContextKey"), Fs = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    inTriggerContext: !0
  };
  Z(zs, {
    inTriggerContext: t.inTriggerContext,
    shouldRender: $(() => {
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
}, ng = () => {
  Fs({}, {
    inTriggerContext: !1
  });
  const e = Q(zs, {
    shouldRender: $(() => !1),
    inTriggerContext: !1
  });
  return {
    shouldRender: $(() => e.shouldRender.value || e.inTriggerContext === !1)
  };
}, rg = H({
  compatConfig: {
    MODE: 3
  },
  name: "Portal",
  inheritAttrs: !1,
  props: {
    getContainer: D.func.isRequired,
    didUpdate: Function
  },
  setup(e, t) {
    let {
      slots: n
    } = t, r = !0, o;
    const {
      shouldRender: i
    } = ng();
    function a() {
      i.value && (o = e.getContainer());
    }
    pl(() => {
      r = !1, a();
    }), We(() => {
      o || a();
    });
    const s = q(i, () => {
      i.value && !o && (o = e.getContainer()), o && s();
    });
    return An(() => {
      xe(() => {
        var l;
        i.value && ((l = e.didUpdate) === null || l === void 0 || l.call(e, e));
      });
    }), () => {
      var l;
      return i.value ? r ? (l = n.default) === null || l === void 0 ? void 0 : l.call(n) : o ? C(hl, {
        to: o
      }, n) : null : null;
    };
  }
});
let sr;
function ks(e) {
  if (typeof document > "u")
    return 0;
  if (sr === void 0) {
    const t = document.createElement("div");
    t.style.width = "100%", t.style.height = "200px";
    const n = document.createElement("div"), r = n.style;
    r.position = "absolute", r.top = "0", r.left = "0", r.pointerEvents = "none", r.visibility = "hidden", r.width = "200px", r.height = "150px", r.overflow = "hidden", n.appendChild(t), document.body.appendChild(n);
    const o = t.offsetWidth;
    n.style.overflow = "scroll";
    let i = t.offsetWidth;
    o === i && (i = n.clientWidth), document.body.removeChild(n), sr = o - i;
  }
  return sr;
}
function Ii(e) {
  const t = e.match(/^(.*)px$/), n = Number(t == null ? void 0 : t[1]);
  return Number.isNaN(n) ? ks() : n;
}
function m0(e) {
  if (typeof document > "u" || !e || !(e instanceof Element))
    return {
      width: 0,
      height: 0
    };
  const {
    width: t,
    height: n
  } = getComputedStyle(e, "::-webkit-scrollbar");
  return {
    width: Ii(t),
    height: Ii(n)
  };
}
const og = `vc-util-locker-${Date.now()}`;
let Di = 0;
function ig() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
function ag(e) {
  const t = $(() => !!e && !!e.value);
  Di += 1;
  const n = `${og}_${Di}`;
  Nt((r) => {
    if (de()) {
      if (t.value) {
        const o = ks(), i = ig();
        mn(`
html body {
  overflow-y: hidden;
  ${i ? `width: calc(100% - ${o}px);` : ""}
}`, n);
      } else
        gn(n);
      r(() => {
        gn(n);
      });
    }
  }, {
    flush: "post"
  });
}
let Ee = 0;
const un = de(), ji = (e) => {
  if (!un)
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
}, sg = H({
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
    getContainer: D.any,
    visible: {
      type: Boolean,
      default: void 0
    },
    autoLock: rt(),
    didUpdate: Function
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const r = j(), o = j(), i = j(), a = j(1), s = de() && document.createElement("div"), l = () => {
      var h, m;
      r.value === s && ((m = (h = r.value) === null || h === void 0 ? void 0 : h.parentNode) === null || m === void 0 || m.removeChild(r.value)), r.value = null;
    };
    let c = null;
    const f = function() {
      return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1) || r.value && !r.value.parentNode ? (c = ji(e.getContainer), c ? (c.appendChild(r.value), !0) : !1) : !0;
    }, u = () => un ? (r.value || (r.value = s, f(!0)), p(), r.value) : null, p = () => {
      const {
        wrapperClassName: h
      } = e;
      r.value && h && h !== r.value.className && (r.value.className = h);
    };
    return An(() => {
      p(), f();
    }), ag($(() => e.autoLock && e.visible && de() && (r.value === document.body || r.value === s))), We(() => {
      let h = !1;
      q([() => e.visible, () => e.getContainer], (m, v) => {
        let [w, b] = m, [y, T] = v;
        un && (c = ji(e.getContainer), c === document.body && (w && !y ? Ee += 1 : h && (Ee -= 1))), h && (typeof b == "function" && typeof T == "function" ? b.toString() !== T.toString() : b !== T) && l(), h = !0;
      }, {
        immediate: !0,
        flush: "post"
      }), xe(() => {
        f() || (i.value = ne(() => {
          a.value += 1;
        }));
      });
    }), ke(() => {
      const {
        visible: h
      } = e;
      un && c === document.body && (Ee = h && Ee ? Ee - 1 : Ee), l(), ne.cancel(i.value);
    }), () => {
      const {
        forceRender: h,
        visible: m
      } = e;
      let v = null;
      const w = {
        getOpenCount: () => Ee,
        getContainer: u
      };
      return a.value && (h || m || o.value) && (v = C(rg, {
        getContainer: u,
        ref: o,
        didUpdate: e.didUpdate
      }, {
        default: () => {
          var b;
          return (b = n.default) === null || b === void 0 ? void 0 : b.call(n, w);
        }
      })), v;
    };
  }
}), lg = ["onClick", "onMousedown", "onTouchstart", "onMouseenter", "onMouseleave", "onFocus", "onBlur", "onContextmenu"], cg = H({
  compatConfig: {
    MODE: 3
  },
  name: "Trigger",
  mixins: [tg],
  inheritAttrs: !1,
  props: Pf(),
  setup(e) {
    const t = $(() => {
      const {
        popupPlacement: o,
        popupAlign: i,
        builtinPlacements: a
      } = e;
      return o && a ? Mi(a, o, i) : i;
    }), n = j(null), r = (o) => {
      n.value = o;
    };
    return {
      vcTriggerContext: Q("vcTriggerContext", {}),
      popupRef: n,
      setPopupRef: r,
      triggerRef: j(null),
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
    return this.popupVisible !== void 0 ? t = !!e.popupVisible : t = !!e.defaultPopupVisible, lg.forEach((n) => {
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
    Z("vcTriggerContext", {
      onPopupMouseDown: this.onPopupMouseDown,
      onPopupMouseenter: this.onPopupMouseenter,
      onPopupMouseleave: this.onPopupMouseleave
    }), Fs(this);
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
    this.clearDelayTimer(), this.clearOutsideHandler(), clearTimeout(this.mouseDownTimeout), ne.cancel(this.attachId);
  },
  methods: {
    updatedCal() {
      const e = this.$props;
      if (this.$data.sPopupVisible) {
        let n;
        !this.clickOutsideHandler && (this.isClickToHide() || this.isContextmenuToShow()) && (n = e.getDocument(this.getRootDomNode()), this.clickOutsideHandler = yt(n, "mousedown", this.onDocumentClick)), this.touchOutsideHandler || (n = n || e.getDocument(this.getRootDomNode()), this.touchOutsideHandler = yt(n, "touchstart", this.onDocumentClick, je ? {
          passive: !1
        } : !1)), !this.contextmenuOutsideHandler1 && this.isContextmenuToShow() && (n = n || e.getDocument(this.getRootDomNode()), this.contextmenuOutsideHandler1 = yt(n, "scroll", this.onContextmenuClose)), !this.contextmenuOutsideHandler2 && this.isContextmenuToShow() && (this.contextmenuOutsideHandler2 = yt(window, "blur", this.onContextmenuClose));
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
      if (e && e.relatedTarget && !e.relatedTarget.setTimeout && Me((t = this.popupRef) === null || t === void 0 ? void 0 : t.getElement(), e.relatedTarget))
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
      Me(e.target, e.relatedTarget || document.activeElement) || (this.fireEvents("onBlur", e), this.clearDelayTimer(), this.isBlurToHide() && this.delaySetPopupVisible(!1, this.$props.blurDelay));
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
      (!Me(n, t) || this.isContextMenuOnly()) && !Me(r, t) && !this.hasPopupMouseDown && this.delaySetPopupVisible(!1, 0.1);
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
        const i = ((t = (e = this.triggerRef) === null || e === void 0 ? void 0 : e.$el) === null || t === void 0 ? void 0 : t.nodeName) === "#comment" ? null : De(this.triggerRef);
        return De(o(i));
      }
      try {
        const i = ((r = (n = this.triggerRef) === null || n === void 0 ? void 0 : n.$el) === null || r === void 0 ? void 0 : r.nodeName) === "#comment" ? null : De(this.triggerRef);
        if (i)
          return i;
      } catch {
      }
      return De(this);
    },
    handleGetPopupClassFromAlign(e) {
      const t = [], n = this.$props, {
        popupPlacement: r,
        builtinPlacements: o,
        prefixCls: i,
        alignPoint: a,
        getPopupClassNameFromAlign: s
      } = n;
      return r && o && t.push(eg(o, i, e, a)), s && t.push(s(e)), t.join(" ");
    },
    getPopupAlign() {
      const e = this.$props, {
        popupPlacement: t,
        popupAlign: n,
        builtinPlacements: r
      } = e;
      return t && r ? Mi(r, t, n) : n;
    },
    getComponent() {
      const e = {};
      this.isMouseEnterToShow() && (e.onMouseenter = this.onPopupMouseenter), this.isMouseLeaveToHide() && (e.onMouseleave = this.onPopupMouseleave), e.onMousedown = this.onPopupMouseDown, e[je ? "onTouchstartPassive" : "onTouchstart"] = this.onPopupMouseDown;
      const {
        handleGetPopupClassFromAlign: t,
        getRootDomNode: n,
        $attrs: r
      } = this, {
        prefixCls: o,
        destroyPopupOnHide: i,
        popupClassName: a,
        popupAnimation: s,
        popupTransitionName: l,
        popupStyle: c,
        mask: f,
        maskAnimation: u,
        maskTransitionName: p,
        zIndex: h,
        stretch: m,
        alignPoint: v,
        mobile: w,
        arrow: b,
        forceRender: y
      } = this.$props, {
        sPopupVisible: T,
        point: _
      } = this.$data, P = d(d({
        prefixCls: o,
        arrow: b,
        destroyPopupOnHide: i,
        visible: T,
        point: v ? _ : null,
        align: this.align,
        animation: s,
        getClassNameFromAlign: t,
        stretch: m,
        getRootDomNode: n,
        mask: f,
        zIndex: h,
        transitionName: l,
        maskAnimation: u,
        maskTransitionName: p,
        class: a,
        style: c,
        onAlign: r.onPopupAlign || ds
      }, e), {
        ref: this.setPopupRef,
        mobile: w,
        forceRender: y
      });
      return C(Zh, P, {
        default: this.$slots.popup || (() => ec(this, "popup"))
      });
    },
    attachParent(e) {
      ne.cancel(this.attachId);
      const {
        getPopupContainer: t,
        getDocument: n
      } = this.$props, r = this.getRootDomNode();
      let o;
      t ? (r || t.length === 0) && (o = t(r)) : o = n(this.getRootDomNode()).body, o ? o.appendChild(e) : this.attachId = ne(() => {
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
      this.clearDelayTimer(), r !== e && (Kl(this, "popupVisible") || this.setState({
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
      const n = xo(this);
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
    } = this, t = zt(Zl(this)), {
      alignPoint: n,
      getPopupContainer: r
    } = this.$props, o = t[0];
    this.childOriginEvents = xo(o);
    const i = {
      key: "trigger"
    };
    this.isContextmenuToShow() ? i.onContextmenu = this.onContextmenu : i.onContextmenu = this.createTwoChains("onContextmenu"), this.isClickToHide() || this.isClickToShow() ? (i.onClick = this.onClick, i.onMousedown = this.onMousedown, i[je ? "onTouchstartPassive" : "onTouchstart"] = this.onTouchstart) : (i.onClick = this.createTwoChains("onClick"), i.onMousedown = this.createTwoChains("onMousedown"), i[je ? "onTouchstartPassive" : "onTouchstart"] = this.createTwoChains("onTouchstart")), this.isMouseEnterToShow() ? (i.onMouseenter = this.onMouseenter, n && (i.onMousemove = this.onMouseMove)) : i.onMouseenter = this.createTwoChains("onMouseenter"), this.isMouseLeaveToHide() ? i.onMouseleave = this.onMouseleave : i.onMouseleave = this.createTwoChains("onMouseleave"), this.isFocusToShow() || this.isBlurToHide() ? (i.onFocus = this.onFocus, i.onBlur = this.onBlur) : (i.onFocus = this.createTwoChains("onFocus"), i.onBlur = (c) => {
      c && (!c.relatedTarget || !Me(c.target, c.relatedTarget)) && this.createTwoChains("onBlur")(c);
    });
    const a = fe(o && o.props && o.props.class, e.class);
    a && (i.class = a);
    const s = xn(o, d(d({}, i), {
      ref: "triggerRef"
    }), !0, !0), l = C(sg, {
      key: "portal",
      getContainer: r && (() => r(this.getRootDomNode())),
      didUpdate: this.handlePortalUpdate,
      visible: this.$data.sPopupVisible
    }, {
      default: this.getComponent
    });
    return C($e, null, [s, l]);
  }
});
function Ae(e) {
  const t = typeof e == "function" ? e() : e, n = U(t);
  function r(o) {
    n.value = o;
  }
  return [n, r];
}
var ug = Symbol("iconContext"), Ws = function() {
  return Q(ug, {
    prefixCls: U("anticon"),
    rootClassName: U(""),
    csp: U()
  });
};
function co() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function fg(e, t) {
  return e && e.contains ? e.contains(t) : !1;
}
var Ri = "data-vc-order", dg = "vc-icon-key", Hr = /* @__PURE__ */ new Map();
function Vs() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : dg;
}
function uo(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function pg(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function Xs(e) {
  return Array.from((Hr.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function Gs(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!co())
    return null;
  var n = t.csp, r = t.prepend, o = document.createElement("style");
  o.setAttribute(Ri, pg(r)), n && n.nonce && (o.nonce = n.nonce), o.innerHTML = e;
  var i = uo(t), a = i.firstChild;
  if (r) {
    if (r === "queue") {
      var s = Xs(i).filter(function(l) {
        return ["prepend", "prependQueue"].includes(l.getAttribute(Ri));
      });
      if (s.length)
        return i.insertBefore(o, s[s.length - 1].nextSibling), o;
    }
    i.insertBefore(o, a);
  } else
    i.appendChild(o);
  return o;
}
function hg(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = uo(t);
  return Xs(n).find(function(r) {
    return r.getAttribute(Vs(t)) === e;
  });
}
function gg(e, t) {
  var n = Hr.get(e);
  if (!n || !fg(document, n)) {
    var r = Gs("", t), o = r.parentNode;
    Hr.set(e, o), e.removeChild(r);
  }
}
function mg(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = uo(n);
  gg(r, n);
  var o = hg(t, n);
  if (o)
    return n.csp && n.csp.nonce && o.nonce !== n.csp.nonce && (o.nonce = n.csp.nonce), o.innerHTML !== e && (o.innerHTML = e), o;
  var i = Gs(e, n);
  return i.setAttribute(Vs(n), t), i;
}
function Hi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      vg(e, o, n[o]);
    });
  }
  return e;
}
function vg(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function yg(e, t) {
  process.env.NODE_ENV !== "production" && !e && console !== void 0 && console.error("Warning: ".concat(t));
}
function bg(e, t) {
  yg(e, "[@ant-design/icons-vue] ".concat(t));
}
function Bi(e) {
  return typeof e == "object" && typeof e.name == "string" && typeof e.theme == "string" && (typeof e.icon == "object" || typeof e.icon == "function");
}
function Br(e, t, n) {
  return n ? fr(e.tag, Hi({
    key: t
  }, n, e.attrs), (e.children || []).map(function(r, o) {
    return Br(r, "".concat(t, "-").concat(e.tag, "-").concat(o));
  })) : fr(e.tag, Hi({
    key: t
  }, e.attrs), (e.children || []).map(function(r, o) {
    return Br(r, "".concat(t, "-").concat(e.tag, "-").concat(o));
  }));
}
function Us(e) {
  return At(e)[0];
}
function Ys(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var wg = `
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
function qs(e) {
  return e && e.getRootNode && e.getRootNode();
}
function xg(e) {
  return co() ? qs(e) instanceof ShadowRoot : !1;
}
function Sg(e) {
  return xg(e) ? qs(e) : null;
}
var Cg = function() {
  var t = Ws(), n = t.prefixCls, r = t.csp, o = Bt(), i = wg;
  n && (i = i.replace(/anticon/g, n.value)), xe(function() {
    if (co()) {
      var a = o.vnode.el, s = Sg(a);
      mg(i, "@ant-design-vue-icons", {
        prepend: !0,
        csp: r.value,
        attachTo: s
      });
    }
  });
}, Tg = ["icon", "primaryColor", "secondaryColor"];
function Og(e, t) {
  if (e == null)
    return {};
  var n = $g(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function $g(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function fn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      Pg(e, o, n[o]);
    });
  }
  return e;
}
function Pg(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ct = kr({
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
});
function _g(e) {
  var t = e.primaryColor, n = e.secondaryColor;
  Ct.primaryColor = t, Ct.secondaryColor = n || Us(t), Ct.calculated = !!n;
}
function Eg() {
  return fn({}, Ct);
}
var Pe = function(t, n) {
  var r = fn({}, t, n.attrs), o = r.icon, i = r.primaryColor, a = r.secondaryColor, s = Og(r, Tg), l = Ct;
  if (i && (l = {
    primaryColor: i,
    secondaryColor: a || Us(i)
  }), bg(Bi(o), "icon should be icon definiton, but got ".concat(o)), !Bi(o))
    return null;
  var c = o;
  return c && typeof c.icon == "function" && (c = fn({}, c, {
    icon: c.icon(l.primaryColor, l.secondaryColor)
  })), Br(c.icon, "svg-".concat(c.name), fn({}, s, {
    "data-icon": c.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }));
};
Pe.props = {
  icon: Object,
  primaryColor: String,
  secondaryColor: String,
  focusable: String
};
Pe.inheritAttrs = !1;
Pe.displayName = "IconBase";
Pe.getTwoToneColors = Eg;
Pe.setTwoToneColors = _g;
function Ag(e, t) {
  return jg(e) || Dg(e, t) || Ig(e, t) || Mg();
}
function Mg() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ig(e, t) {
  if (e) {
    if (typeof e == "string")
      return Ni(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Ni(e, t);
  }
}
function Ni(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Dg(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r = [], o = !0, i = !1, a, s;
    try {
      for (n = n.call(e); !(o = (a = n.next()).done) && (r.push(a.value), !(t && r.length === t)); o = !0)
        ;
    } catch (l) {
      i = !0, s = l;
    } finally {
      try {
        !o && n.return != null && n.return();
      } finally {
        if (i)
          throw s;
      }
    }
    return r;
  }
}
function jg(e) {
  if (Array.isArray(e))
    return e;
}
function Ks(e) {
  var t = Ys(e), n = Ag(t, 2), r = n[0], o = n[1];
  return Pe.setTwoToneColors({
    primaryColor: r,
    secondaryColor: o
  });
}
function Rg() {
  var e = Pe.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var Hg = H({
  name: "InsertStyles",
  setup: function() {
    return Cg(), function() {
      return null;
    };
  }
}), Bg = ["class", "icon", "spin", "rotate", "tabindex", "twoToneColor", "onClick"];
function Ng(e, t) {
  return kg(e) || Fg(e, t) || zg(e, t) || Lg();
}
function Lg() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function zg(e, t) {
  if (e) {
    if (typeof e == "string")
      return Li(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Li(e, t);
  }
}
function Li(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Fg(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r = [], o = !0, i = !1, a, s;
    try {
      for (n = n.call(e); !(o = (a = n.next()).done) && (r.push(a.value), !(t && r.length === t)); o = !0)
        ;
    } catch (l) {
      i = !0, s = l;
    } finally {
      try {
        !o && n.return != null && n.return();
      } finally {
        if (i)
          throw s;
      }
    }
    return r;
  }
}
function kg(e) {
  if (Array.isArray(e))
    return e;
}
function zi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      wt(e, o, n[o]);
    });
  }
  return e;
}
function wt(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Wg(e, t) {
  if (e == null)
    return {};
  var n = Vg(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Vg(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
Ks(Eu.primary);
var Ke = function(t, n) {
  var r, o = zi({}, t, n.attrs), i = o.class, a = o.icon, s = o.spin, l = o.rotate, c = o.tabindex, f = o.twoToneColor, u = o.onClick, p = Wg(o, Bg), h = Ws(), m = h.prefixCls, v = h.rootClassName, w = (r = {}, wt(r, v.value, !!v.value), wt(r, m.value, !0), wt(r, "".concat(m.value, "-").concat(a.name), !!a.name), wt(r, "".concat(m.value, "-spin"), !!s || a.name === "loading"), r), b = c;
  b === void 0 && u && (b = -1);
  var y = l ? {
    msTransform: "rotate(".concat(l, "deg)"),
    transform: "rotate(".concat(l, "deg)")
  } : void 0, T = Ys(f), _ = Ng(T, 2), P = _[0], x = _[1];
  return C("span", zi({
    role: "img",
    "aria-label": a.name
  }, p, {
    onClick: u,
    class: [w, i],
    tabindex: b
  }), [C(Pe, {
    icon: a,
    primaryColor: P,
    secondaryColor: x,
    style: y
  }, null), C(Hg, null, null)]);
};
Ke.props = {
  spin: Boolean,
  rotate: Number,
  icon: Object,
  twoToneColor: [String, Array]
};
Ke.displayName = "AntdIcon";
Ke.inheritAttrs = !1;
Ke.getTwoToneColor = Rg;
Ke.setTwoToneColor = Ks;
var Xg = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" };
function Fi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      Gg(e, o, n[o]);
    });
  }
  return e;
}
function Gg(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Tn = function(t, n) {
  var r = Fi({}, t, n.attrs);
  return C(Ke, Fi({}, r, {
    icon: Xg
  }), null);
};
Tn.displayName = "LoadingOutlined";
Tn.inheritAttrs = !1;
var Ug = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" };
function ki(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      Yg(e, o, n[o]);
    });
  }
  return e;
}
function Yg(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Qs = function(t, n) {
  var r = ki({}, t, n.attrs);
  return C(Ke, ki({}, r, {
    icon: Ug
  }), null);
};
Qs.displayName = "CloseCircleFilled";
Qs.inheritAttrs = !1;
function fo(e) {
  const t = Symbol("contextKey");
  return {
    useProvide: (o, i) => {
      const a = kr({});
      return Z(t, a), Nt(() => {
        d(a, o, i || {});
      }), a;
    },
    useInject: () => Q(t, e) || {}
  };
}
const On = Symbol("ContextProps"), $n = Symbol("InternalContextProps"), v0 = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : $(() => !0);
  const n = U(/* @__PURE__ */ new Map()), r = (a, s) => {
    n.value.set(a, s), n.value = new Map(n.value);
  }, o = (a) => {
    n.value.delete(a), n.value = new Map(n.value);
  }, i = Bt();
  q([t, n], () => {
    if (process.env.NODE_ENV !== "production" && t.value && n.value.size > 1) {
      to(!1, "Form.Item", `FormItem can only collect one field item, you haved set ${[...n.value.values()].map((s) => `\`${s.name}\``).join(", ")} ${n.value.size} field items.
        You can set not need to be collected fields into \`a-form-item-rest\``);
      let a = i;
      for (; a.parent; )
        console.warn("at", a.type), a = a.parent;
    }
  }), Z(On, e), Z($n, {
    addFormItemField: r,
    removeFormItemField: o
  });
}, Nr = {
  id: $(() => {
  }),
  onFieldBlur: () => {
  },
  onFieldChange: () => {
  },
  clearValidate: () => {
  }
}, Lr = {
  addFormItemField: () => {
  },
  removeFormItemField: () => {
  }
}, y0 = () => {
  const e = Q($n, Lr), t = Symbol("FormItemFieldKey"), n = Bt();
  return e.addFormItemField(t, n.type), ke(() => {
    e.removeFormItemField(t);
  }), Z($n, Lr), Z(On, Nr), Q(On, Nr);
}, b0 = H({
  compatConfig: {
    MODE: 3
  },
  name: "AFormItemRest",
  setup(e, t) {
    let {
      slots: n
    } = t;
    return Z($n, Lr), Z(On, Nr), () => {
      var r;
      return (r = n.default) === null || r === void 0 ? void 0 : r.call(n);
    };
  }
}), qg = fo({}), w0 = H({
  name: "NoFormStatus",
  setup(e, t) {
    let {
      slots: n
    } = t;
    return qg.useProvide({}), () => {
      var r;
      return (r = n.default) === null || r === void 0 ? void 0 : r.call(n);
    };
  }
}), Kg = (e) => {
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
}, Qg = (e) => {
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
      [`${t}-item`]: {
        "&:empty": {
          display: "none"
        }
      }
    }
  };
}, Zg = Ft("Space", (e) => [Qg(e), Kg(e)]);
var Jg = "[object Symbol]";
function em(e) {
  return typeof e == "symbol" || Fe(e) && Ue(e) == Jg;
}
var tm = /\s/;
function nm(e) {
  for (var t = e.length; t-- && tm.test(e.charAt(t)); )
    ;
  return t;
}
var rm = /^\s+/;
function om(e) {
  return e && e.slice(0, nm(e) + 1).replace(rm, "");
}
var Wi = NaN, im = /^[-+]0x[0-9a-f]+$/i, am = /^0b[01]+$/i, sm = /^0o[0-7]+$/i, lm = parseInt;
function Vi(e) {
  if (typeof e == "number")
    return e;
  if (em(e))
    return Wi;
  if (Dt(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Dt(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = om(e);
  var n = am.test(e);
  return n || sm.test(e) ? lm(e.slice(2), n ? 2 : 8) : im.test(e) ? Wi : +e;
}
function cm(e, t, n, r) {
  for (var o = e.length, i = n + -1; ++i < o; )
    if (t(e[i], i, e))
      return i;
  return -1;
}
function um(e) {
  return e !== e;
}
function fm(e, t, n) {
  for (var r = n - 1, o = e.length; ++r < o; )
    if (e[r] === t)
      return r;
  return -1;
}
function dm(e, t, n) {
  return t === t ? fm(e, t, n) : cm(e, um, n);
}
function x0(e, t) {
  var n = e == null ? 0 : e.length;
  return !!n && dm(e, t, 0) > -1;
}
var pm = Hs(Object.getPrototypeOf, Object), hm = "[object Object]", gm = Function.prototype, mm = Object.prototype, Zs = gm.toString, vm = mm.hasOwnProperty, ym = Zs.call(Object);
function S0(e) {
  if (!Fe(e) || Ue(e) != hm)
    return !1;
  var t = pm(e);
  if (t === null)
    return !0;
  var n = vm.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && Zs.call(n) == ym;
}
var lr = function() {
  return me.Date.now();
}, bm = "Expected a function", wm = Math.max, xm = Math.min;
function C0(e, t, n) {
  var r, o, i, a, s, l, c = 0, f = !1, u = !1, p = !0;
  if (typeof e != "function")
    throw new TypeError(bm);
  t = Vi(t) || 0, Dt(n) && (f = !!n.leading, u = "maxWait" in n, i = u ? wm(Vi(n.maxWait) || 0, t) : i, p = "trailing" in n ? !!n.trailing : p);
  function h(x) {
    var g = r, S = o;
    return r = o = void 0, c = x, a = e.apply(S, g), a;
  }
  function m(x) {
    return c = x, s = setTimeout(b, t), f ? h(x) : a;
  }
  function v(x) {
    var g = x - l, S = x - c, A = t - g;
    return u ? xm(A, i - S) : A;
  }
  function w(x) {
    var g = x - l, S = x - c;
    return l === void 0 || g >= t || g < 0 || u && S >= i;
  }
  function b() {
    var x = lr();
    if (w(x))
      return y(x);
    s = setTimeout(b, v(x));
  }
  function y(x) {
    return s = void 0, p && r ? h(x) : (r = o = void 0, a);
  }
  function T() {
    s !== void 0 && clearTimeout(s), c = 0, r = l = o = s = void 0;
  }
  function _() {
    return s === void 0 ? a : y(lr());
  }
  function P() {
    var x = lr(), g = w(x);
    if (r = arguments, o = this, l = x, g) {
      if (s === void 0)
        return m(l);
      if (u)
        return clearTimeout(s), s = setTimeout(b, t), h(l);
    }
    return s === void 0 && (s = setTimeout(b, t)), a;
  }
  return P.cancel = T, P.flush = _, P;
}
var Sm = "[object Map]", Cm = "[object Set]", Tm = Object.prototype, Om = Tm.hasOwnProperty;
function Js(e) {
  if (e == null)
    return !0;
  if (Ns(e) && (Ht(e) || typeof e == "string" || typeof e.splice == "function" || Cn(e) || lo(e) || Ms(e)))
    return !e.length;
  var t = we(e);
  if (t == Sm || t == Cm)
    return !e.size;
  if (Rs(e))
    return !Bs(e).length;
  for (var n in e)
    if (Om.call(e, n))
      return !1;
  return !0;
}
const $m = () => ({
  compactSize: String,
  compactDirection: D.oneOf(hn("horizontal", "vertical")).def("horizontal"),
  isFirstItem: rt(),
  isLastItem: rt()
}), Fn = fo(null), Pm = (e, t) => {
  const n = Fn.useInject(), r = $(() => {
    if (!n || Js(n))
      return "";
    const {
      compactDirection: o,
      isFirstItem: i,
      isLastItem: a
    } = n, s = o === "vertical" ? "-vertical-" : "-";
    return fe({
      [`${e.value}-compact${s}item`]: !0,
      [`${e.value}-compact${s}first-item`]: i,
      [`${e.value}-compact${s}last-item`]: a,
      [`${e.value}-compact${s}item-rtl`]: t.value === "rtl"
    });
  });
  return {
    compactSize: $(() => n == null ? void 0 : n.compactSize),
    compactDirection: $(() => n == null ? void 0 : n.compactDirection),
    compactItemClassnames: r
  };
}, T0 = H({
  name: "NoCompactStyle",
  setup(e, t) {
    let {
      slots: n
    } = t;
    return Fn.useProvide(null), () => {
      var r;
      return (r = n.default) === null || r === void 0 ? void 0 : r.call(n);
    };
  }
}), _m = () => ({
  prefixCls: String,
  size: {
    type: String
  },
  direction: D.oneOf(hn("horizontal", "vertical")).def("horizontal"),
  align: D.oneOf(hn("start", "end", "center", "baseline")),
  block: {
    type: Boolean,
    default: void 0
  }
}), Em = H({
  name: "CompactItem",
  props: $m(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return Fn.useProvide(e), () => {
      var r;
      return (r = n.default) === null || r === void 0 ? void 0 : r.call(n);
    };
  }
});
H({
  name: "ASpaceCompact",
  inheritAttrs: !1,
  props: _m(),
  setup(e, t) {
    let {
      attrs: n,
      slots: r
    } = t;
    const {
      prefixCls: o,
      direction: i
    } = Xe("space-compact", e), a = Fn.useInject(), [s, l] = Zg(o), c = $(() => fe(o.value, l.value, {
      [`${o.value}-rtl`]: i.value === "rtl",
      [`${o.value}-block`]: e.block,
      [`${o.value}-vertical`]: e.direction === "vertical"
    }));
    return () => {
      var f;
      const u = ce(((f = r.default) === null || f === void 0 ? void 0 : f.call(r)) || []);
      return u.length === 0 ? null : s(C("div", K(K({}, n), {}, {
        class: [c.value, n.class]
      }), [u.map((p, h) => {
        var m;
        const v = p && p.key || `${o.value}-item-${h}`, w = !a || Js(a);
        return C(Em, {
          key: v,
          compactSize: (m = e.size) !== null && m !== void 0 ? m : "middle",
          compactDirection: e.direction,
          isFirstItem: h === 0 && (w || (a == null ? void 0 : a.isFirstItem)),
          isLastItem: h === u.length - 1 && (w || (a == null ? void 0 : a.isLastItem))
        }, {
          default: () => [p]
        });
      })]));
    };
  }
});
const Am = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), Mm = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), Im = function(e, t, n, r) {
  const i = (arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1) ? "&" : "";
  return {
    [`
      ${i}${e}-enter,
      ${i}${e}-appear
    `]: d(d({}, Am(r)), {
      animationPlayState: "paused"
    }),
    [`${i}${e}-leave`]: d(d({}, Mm(r)), {
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
}, Dm = new se("antZoomIn", {
  "0%": {
    transform: "scale(0.2)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), jm = new se("antZoomOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.2)",
    opacity: 0
  }
}), Xi = new se("antZoomBigIn", {
  "0%": {
    transform: "scale(0.8)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), Gi = new se("antZoomBigOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.8)",
    opacity: 0
  }
}), Rm = new se("antZoomUpIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  }
}), Hm = new se("antZoomUpOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  }
}), Bm = new se("antZoomLeftIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  }
}), Nm = new se("antZoomLeftOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  }
}), Lm = new se("antZoomRightIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  }
}), zm = new se("antZoomRightOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  }
}), Fm = new se("antZoomDownIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  }
}), km = new se("antZoomDownOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  }
}), Wm = {
  zoom: {
    inKeyframes: Dm,
    outKeyframes: jm
  },
  "zoom-big": {
    inKeyframes: Xi,
    outKeyframes: Gi
  },
  "zoom-big-fast": {
    inKeyframes: Xi,
    outKeyframes: Gi
  },
  "zoom-left": {
    inKeyframes: Bm,
    outKeyframes: Nm
  },
  "zoom-right": {
    inKeyframes: Lm,
    outKeyframes: zm
  },
  "zoom-up": {
    inKeyframes: Rm,
    outKeyframes: Hm
  },
  "zoom-down": {
    inKeyframes: Fm,
    outKeyframes: km
  }
}, Vm = (e, t) => {
  const {
    antCls: n
  } = e, r = `${n}-${t}`, {
    inKeyframes: o,
    outKeyframes: i
  } = Wm[t];
  return [Im(r, o, i, t === "zoom-big-fast" ? e.motionDurationFast : e.motionDurationMid), {
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
}, O0 = (e) => ({
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
function Xm(e, t, n) {
  const {
    focusElCls: r,
    focus: o,
    borderElCls: i
  } = n, a = i ? "> *" : "", s = ["hover", o ? "focus" : null, "active"].filter(Boolean).map((l) => `&:${l} ${a}`).join(",");
  return {
    [`&-item:not(${t}-last-item)`]: {
      marginInlineEnd: -e.lineWidth
    },
    "&-item": d(d({
      [s]: {
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
function Gm(e, t, n) {
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
function Um(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    focus: !0
  };
  const {
    componentCls: n
  } = e, r = `${n}-compact`;
  return {
    [r]: d(d({}, Xm(e, r, t)), Gm(n, r, t))
  };
}
const $0 = ["xxxl", "xxl", "xl", "lg", "md", "sm", "xs"], Ym = (e) => ({
  xs: `(max-width: ${e.screenXSMax}px)`,
  sm: `(min-width: ${e.screenSM}px)`,
  md: `(min-width: ${e.screenMD}px)`,
  lg: `(min-width: ${e.screenLG}px)`,
  xl: `(min-width: ${e.screenXL}px)`,
  xxl: `(min-width: ${e.screenXXL}px)`,
  xxxl: `{min-width: ${e.screenXXXL}px}`
});
function P0() {
  const [, e] = kt();
  return $(() => {
    const t = Ym(e.value), n = /* @__PURE__ */ new Map();
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
          const a = t[i], s = this.matchHandlers[a];
          s == null || s.mql.removeListener(s == null ? void 0 : s.listener);
        }), n.clear();
      },
      register() {
        Object.keys(t).forEach((i) => {
          const a = t[i], s = (c) => {
            let {
              matches: f
            } = c;
            this.dispatch(d(d({}, o), {
              [i]: f
            }));
          }, l = window.matchMedia(a);
          l.addListener(s), this.matchHandlers[a] = {
            mql: l,
            listener: s
          }, s(l);
        });
      },
      responsiveMap: t
    };
  });
}
const oe = {
  adjustX: 1,
  adjustY: 1
}, ie = [0, 0], el = {
  left: {
    points: ["cr", "cl"],
    overflow: oe,
    offset: [-4, 0],
    targetOffset: ie
  },
  right: {
    points: ["cl", "cr"],
    overflow: oe,
    offset: [4, 0],
    targetOffset: ie
  },
  top: {
    points: ["bc", "tc"],
    overflow: oe,
    offset: [0, -4],
    targetOffset: ie
  },
  bottom: {
    points: ["tc", "bc"],
    overflow: oe,
    offset: [0, 4],
    targetOffset: ie
  },
  topLeft: {
    points: ["bl", "tl"],
    overflow: oe,
    offset: [0, -4],
    targetOffset: ie
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: oe,
    offset: [-4, 0],
    targetOffset: ie
  },
  topRight: {
    points: ["br", "tr"],
    overflow: oe,
    offset: [0, -4],
    targetOffset: ie
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: oe,
    offset: [4, 0],
    targetOffset: ie
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: oe,
    offset: [0, 4],
    targetOffset: ie
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: oe,
    offset: [4, 0],
    targetOffset: ie
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: oe,
    offset: [0, 4],
    targetOffset: ie
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: oe,
    offset: [-4, 0],
    targetOffset: ie
  }
}, qm = {
  prefixCls: String,
  id: String,
  overlayInnerStyle: D.any
}, Km = H({
  compatConfig: {
    MODE: 3
  },
  name: "TooltipContent",
  props: qm,
  setup(e, t) {
    let {
      slots: n
    } = t;
    return () => {
      var r;
      return C("div", {
        class: `${e.prefixCls}-inner`,
        id: e.id,
        role: "tooltip",
        style: e.overlayInnerStyle
      }, [(r = n.overlay) === null || r === void 0 ? void 0 : r.call(n)]);
    };
  }
});
var Qm = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
function Ui() {
}
const Zm = H({
  compatConfig: {
    MODE: 3
  },
  name: "Tooltip",
  inheritAttrs: !1,
  props: {
    trigger: D.any.def(["hover"]),
    defaultVisible: {
      type: Boolean,
      default: void 0
    },
    visible: {
      type: Boolean,
      default: void 0
    },
    placement: D.string.def("right"),
    transitionName: String,
    animation: D.any,
    afterVisibleChange: D.func.def(() => {
    }),
    overlayStyle: {
      type: Object,
      default: void 0
    },
    overlayClassName: String,
    prefixCls: D.string.def("rc-tooltip"),
    mouseEnterDelay: D.number.def(0.1),
    mouseLeaveDelay: D.number.def(0.1),
    getPopupContainer: Function,
    destroyTooltipOnHide: {
      type: Boolean,
      default: !1
    },
    align: D.object.def(() => ({})),
    arrowContent: D.any.def(null),
    tipId: String,
    builtinPlacements: D.object,
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
    const i = j(), a = () => {
      const {
        prefixCls: f,
        tipId: u,
        overlayInnerStyle: p
      } = e;
      return [e.arrow ? C("div", {
        class: `${f}-arrow`,
        key: "arrow"
      }, [oc(n, e, "arrowContent")]) : null, C(Km, {
        key: "content",
        prefixCls: f,
        id: u,
        overlayInnerStyle: p
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
    const l = j(!1), c = j(!1);
    return Nt(() => {
      const {
        destroyTooltipOnHide: f
      } = e;
      if (typeof f == "boolean")
        l.value = f;
      else if (f && typeof f == "object") {
        const {
          keepParent: u
        } = f;
        l.value = u === !0, c.value = u === !1;
      }
    }), () => {
      const {
        overlayClassName: f,
        trigger: u,
        mouseEnterDelay: p,
        mouseLeaveDelay: h,
        overlayStyle: m,
        prefixCls: v,
        afterVisibleChange: w,
        transitionName: b,
        animation: y,
        placement: T,
        align: _,
        destroyTooltipOnHide: P,
        defaultVisible: x
      } = e, g = Qm(e, ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "afterVisibleChange", "transitionName", "animation", "placement", "align", "destroyTooltipOnHide", "defaultVisible"]), S = d({}, g);
      e.visible !== void 0 && (S.popupVisible = e.visible);
      const A = d(d(d({
        popupClassName: f,
        prefixCls: v,
        action: u,
        builtinPlacements: el,
        popupPlacement: T,
        popupAlign: _,
        afterPopupVisibleChange: w,
        popupTransitionName: b,
        popupAnimation: y,
        defaultPopupVisible: x,
        destroyPopupOnHide: l.value,
        autoDestroy: c.value,
        mouseLeaveDelay: h,
        popupStyle: m,
        mouseEnterDelay: p
      }, S), r), {
        onPopupVisibleChange: e.onVisibleChange || Ui,
        onPopupAlign: e.onPopupAlign || Ui,
        ref: i,
        arrow: !!e.arrow,
        popup: a()
      });
      return C(cg, A, {
        default: n.default
      });
    };
  }
}), Jm = () => ({
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
  overlayStyle: k(),
  overlayInnerStyle: k(),
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
  align: k(),
  builtinPlacements: k(),
  children: Array,
  /** @deprecated Please use `onOpenChange` instead. */
  onVisibleChange: Function,
  /** @deprecated Please use `onUpdate:open` instead. */
  "onUpdate:visible": Function,
  onOpenChange: Function,
  "onUpdate:open": Function
}), ev = {
  adjustX: 1,
  adjustY: 1
}, Yi = {
  adjustX: 0,
  adjustY: 0
}, tv = [0, 0];
function qi(e) {
  return typeof e == "boolean" ? e ? ev : Yi : d(d({}, Yi), e);
}
function nv(e) {
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
  return Object.keys(a).forEach((s) => {
    a[s] = i ? d(d({}, a[s]), {
      overflow: qi(o),
      targetOffset: tv
    }) : d(d({}, el[s]), {
      overflow: qi(o)
    }), a[s].ignoreShake = !0;
  }), a;
}
function rv() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  for (let t = 0, n = e.length; t < n; t++)
    if (e[t] !== void 0)
      return e[t];
}
const ov = yn.map((e) => `${e}-inverse`), iv = ["success", "processing", "error", "default", "warning"];
function av(e) {
  return (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0) ? [...ov, ...yn].includes(e) : yn.includes(e);
}
function _0(e) {
  return iv.includes(e);
}
function sv(e, t) {
  const n = av(t), r = fe({
    [`${e}-${t}`]: t && n
  }), o = {}, i = {};
  return t && !n && (o.background = t, i["--antd-arrow-background-color"] = t), {
    className: r,
    overlayStyle: o,
    arrowStyle: i
  };
}
function tn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return e.map((n) => `${t}${n}`).join(",");
}
const tl = 8;
function lv(e) {
  const t = tl, {
    sizePopupArrow: n,
    contentRadius: r,
    borderRadiusOuter: o,
    limitVerticalRadius: i
  } = e, a = n / 2 - Math.ceil(o * (Math.sqrt(2) - 1)), s = (r > 12 ? r + 2 : 12) - a, l = i ? t - a : s;
  return {
    dropdownArrowOffset: s,
    dropdownArrowOffsetVertical: l
  };
}
function cv(e, t) {
  const {
    componentCls: n,
    sizePopupArrow: r,
    marginXXS: o,
    borderRadiusXS: i,
    borderRadiusOuter: a,
    boxShadowPopoverArrow: s
  } = e, {
    colorBg: l,
    showArrowCls: c,
    contentRadius: f = e.borderRadiusLG,
    limitVerticalRadius: u
  } = t, {
    dropdownArrowOffsetVertical: p,
    dropdownArrowOffset: h
  } = lv({
    sizePopupArrow: r,
    contentRadius: f,
    borderRadiusOuter: a,
    limitVerticalRadius: u
  }), m = r / 2 + o;
  return {
    [n]: {
      // ============================ Basic ============================
      [`${n}-arrow`]: [d(d({
        position: "absolute",
        zIndex: 1,
        display: "block"
      }, ku(r, i, a, l, s)), {
        "&:before": {
          background: l
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
          value: h
        }
      },
      [`&-placement-topRight ${n}-arrow`]: {
        right: {
          _skip_check_: !0,
          value: h
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
          value: h
        }
      },
      [`&-placement-bottomRight ${n}-arrow`]: {
        right: {
          _skip_check_: !0,
          value: h
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
        top: p
      },
      [`&-placement-leftBottom ${n}-arrow`]: {
        bottom: p
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
        top: p
      },
      [`&-placement-rightBottom ${n}-arrow`]: {
        bottom: p
      },
      // =========================== Offset ============================
      // Offset the popover to account for the dropdown arrow
      // >>>>> Top
      [tn(["&-placement-topLeft", "&-placement-top", "&-placement-topRight"].map((v) => v += ":not(&-arrow-hidden)"), c)]: {
        paddingBottom: m
      },
      // >>>>> Bottom
      [tn(["&-placement-bottomLeft", "&-placement-bottom", "&-placement-bottomRight"].map((v) => v += ":not(&-arrow-hidden)"), c)]: {
        paddingTop: m
      },
      // >>>>> Left
      [tn(["&-placement-leftTop", "&-placement-left", "&-placement-leftBottom"].map((v) => v += ":not(&-arrow-hidden)"), c)]: {
        paddingRight: {
          _skip_check_: !0,
          value: m
        }
      },
      // >>>>> Right
      [tn(["&-placement-rightTop", "&-placement-right", "&-placement-rightBottom"].map((v) => v += ":not(&-arrow-hidden)"), c)]: {
        paddingLeft: {
          _skip_check_: !0,
          value: m
        }
      }
    }
  };
}
const uv = (e) => {
  const {
    componentCls: t,
    // ant-tooltip
    tooltipMaxWidth: n,
    tooltipColor: r,
    tooltipBg: o,
    tooltipBorderRadius: i,
    zIndexPopup: a,
    controlHeight: s,
    boxShadowSecondary: l,
    paddingSM: c,
    paddingXS: f,
    tooltipRadiusOuter: u
  } = e;
  return [
    {
      [t]: d(d(d(d({}, Vu(e)), {
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
          minWidth: s,
          minHeight: s,
          padding: `${c / 2}px ${f}px`,
          color: r,
          textAlign: "start",
          textDecoration: "none",
          wordWrap: "break-word",
          backgroundColor: o,
          borderRadius: i,
          boxShadow: l
        },
        // Limit left and right placement radius
        [["&-placement-left", "&-placement-leftTop", "&-placement-leftBottom", "&-placement-right", "&-placement-rightTop", "&-placement-rightBottom"].join(",")]: {
          [`${t}-inner`]: {
            borderRadius: Math.min(i, tl)
          }
        },
        [`${t}-content`]: {
          position: "relative"
        }
      }), Wu(e, (p, h) => {
        let {
          darkColor: m
        } = h;
        return {
          [`&${t}-${p}`]: {
            [`${t}-inner`]: {
              backgroundColor: m
            },
            [`${t}-arrow`]: {
              "--antd-arrow-background-color": m
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
    cv(Ve(e, {
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
}, fv = (e, t) => Ft("Tooltip", (r) => {
  if ((t == null ? void 0 : t.value) === !1)
    return [];
  const {
    borderRadius: o,
    colorTextLightSolid: i,
    colorBgDefault: a,
    borderRadiusOuter: s
  } = r, l = Ve(r, {
    // default variables
    tooltipMaxWidth: 250,
    tooltipColor: i,
    tooltipBorderRadius: o,
    tooltipBg: a,
    tooltipRadiusOuter: s > 4 ? 4 : s
  });
  return [uv(l), Vm(r, "zoom-big-fast")];
}, (r) => {
  let {
    zIndexPopupBase: o,
    colorBgSpotlight: i
  } = r;
  return {
    zIndexPopup: o + 70,
    colorBgDefault: i
  };
})(e), dv = (e, t) => {
  const n = {}, r = d({}, e);
  return t.forEach((o) => {
    e && o in e && (n[o] = e[o], delete r[o]);
  }), {
    picked: n,
    omitted: r
  };
}, pv = () => d(d({}, Jm()), {
  title: D.any
}), hv = H({
  compatConfig: {
    MODE: 3
  },
  name: "ATooltip",
  inheritAttrs: !1,
  props: ha(pv(), {
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
    process.env.NODE_ENV !== "production" && [["visible", "open"], ["onVisibleChange", "onOpenChange"]].forEach((O) => {
      let [M, N] = O;
      jn(e[M] === void 0, "Tooltip", `\`${M}\` is deprecated, please use \`${N}\` instead.`);
    });
    const {
      prefixCls: a,
      getPopupContainer: s,
      direction: l,
      rootPrefixCls: c
    } = Xe("tooltip", e), f = $(() => {
      var O;
      return (O = e.open) !== null && O !== void 0 ? O : e.visible;
    }), u = U(rv([e.open, e.visible])), p = U();
    let h;
    q(f, (O) => {
      ne.cancel(h), h = ne(() => {
        u.value = !!O;
      });
    });
    const m = () => {
      var O;
      const M = (O = e.title) !== null && O !== void 0 ? O : n.title;
      return !M && M !== 0;
    }, v = (O) => {
      const M = m();
      f.value === void 0 && (u.value = M ? !1 : O), M || (r("update:visible", O), r("visibleChange", O), r("update:open", O), r("openChange", O));
    };
    i({
      getPopupDomNode: () => p.value.getPopupDomNode(),
      open: u,
      forcePopupAlign: () => {
        var O;
        return (O = p.value) === null || O === void 0 ? void 0 : O.forcePopupAlign();
      }
    });
    const b = $(() => {
      var O;
      const {
        builtinPlacements: M,
        autoAdjustOverflow: N,
        arrow: L,
        arrowPointAtCenter: W
      } = e;
      let E = W;
      return typeof L == "object" && (E = (O = L.pointAtCenter) !== null && O !== void 0 ? O : W), M || nv({
        arrowPointAtCenter: E,
        autoAdjustOverflow: N
      });
    }), y = (O) => O || O === "", T = (O) => {
      const M = O.type;
      if (typeof M == "object" && O.props && ((M.__ANT_BUTTON === !0 || M === "button") && y(O.props.disabled) || M.__ANT_SWITCH === !0 && (y(O.props.disabled) || y(O.props.loading)) || M.__ANT_RADIO === !0 && y(O.props.disabled))) {
        const {
          picked: N,
          omitted: L
        } = dv(tc(O), ["position", "left", "right", "top", "bottom", "float", "display", "zIndex"]), W = d(d({
          display: "inline-block"
        }, N), {
          cursor: "not-allowed",
          lineHeight: 1,
          width: O.props && O.props.block ? "100%" : void 0
        }), E = d(d({}, L), {
          pointerEvents: "none"
        }), R = xn(O, {
          style: E
        }, !0);
        return C("span", {
          style: W,
          class: `${a.value}-disabled-compatible-wrapper`
        }, [R]);
      }
      return O;
    }, _ = () => {
      var O, M;
      return (O = e.title) !== null && O !== void 0 ? O : (M = n.title) === null || M === void 0 ? void 0 : M.call(n);
    }, P = (O, M) => {
      const N = b.value, L = Object.keys(N).find((W) => {
        var E, R;
        return N[W].points[0] === ((E = M.points) === null || E === void 0 ? void 0 : E[0]) && N[W].points[1] === ((R = M.points) === null || R === void 0 ? void 0 : R[1]);
      });
      if (L) {
        const W = O.getBoundingClientRect(), E = {
          top: "50%",
          left: "50%"
        };
        L.indexOf("top") >= 0 || L.indexOf("Bottom") >= 0 ? E.top = `${W.height - M.offset[1]}px` : (L.indexOf("Top") >= 0 || L.indexOf("bottom") >= 0) && (E.top = `${-M.offset[1]}px`), L.indexOf("left") >= 0 || L.indexOf("Right") >= 0 ? E.left = `${W.width - M.offset[0]}px` : (L.indexOf("right") >= 0 || L.indexOf("Left") >= 0) && (E.left = `${-M.offset[0]}px`), O.style.transformOrigin = `${E.left} ${E.top}`;
      }
    }, x = $(() => sv(a.value, e.color)), g = $(() => o["data-popover-inject"]), [S, A] = fv(a, $(() => !g.value));
    return () => {
      var O, M;
      const {
        openClassName: N,
        overlayClassName: L,
        overlayStyle: W,
        overlayInnerStyle: E
      } = e;
      let R = (M = zt((O = n.default) === null || O === void 0 ? void 0 : O.call(n))) !== null && M !== void 0 ? M : null;
      R = R.length === 1 ? R[0] : R;
      let V = u.value;
      if (f.value === void 0 && m() && (V = !1), !R)
        return null;
      const F = T(rc(R) && !nc(R) ? R : C("span", null, [R])), Qe = fe({
        [N || `${a.value}-open`]: !0,
        [F.props && F.props.class]: F.props && F.props.class
      }), G = fe(L, {
        [`${a.value}-rtl`]: l.value === "rtl"
      }, x.value.className, A.value), Ze = d(d({}, x.value.overlayStyle), E), Je = x.value.arrowStyle, et = d(d(d({}, o), e), {
        prefixCls: a.value,
        arrow: !!e.arrow,
        getPopupContainer: s == null ? void 0 : s.value,
        builtinPlacements: b.value,
        visible: V,
        ref: p,
        overlayClassName: G,
        overlayStyle: d(d({}, Je), W),
        overlayInnerStyle: Ze,
        onVisibleChange: v,
        onPopupAlign: P,
        transitionName: Kh(c.value, "zoom-big-fast", e.transitionName)
      });
      return S(C(Zm, et, {
        default: () => [u.value ? xn(F, {
          class: Qe
        }) : F],
        arrowContent: () => C("span", {
          class: `${a.value}-arrow-content`
        }, null),
        overlay: _
      }));
    };
  }
}), E0 = Xr(hv), gv = (e) => {
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
}, mv = Ft("Wave", (e) => [gv(e)]);
function vv(e) {
  const t = (e || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
  return t && t[1] && t[2] && t[3] ? !(t[1] === t[2] && t[2] === t[3]) : !0;
}
function cr(e) {
  return e && e !== "#fff" && e !== "#ffffff" && e !== "rgb(255, 255, 255)" && e !== "rgba(255, 255, 255, 1)" && vv(e) && !/rgba\((?:\d*, ){3}0\)/.test(e) && // any transparent rgba color
  e !== "transparent";
}
function yv(e) {
  const {
    borderTopColor: t,
    borderColor: n,
    backgroundColor: r
  } = getComputedStyle(e);
  return cr(t) ? t : cr(n) ? n : cr(r) ? r : null;
}
function ur(e) {
  return Number.isNaN(e) ? 0 : e;
}
const bv = H({
  props: {
    target: k(),
    className: String
  },
  setup(e) {
    const t = j(null), [n, r] = Ae(null), [o, i] = Ae([]), [a, s] = Ae(0), [l, c] = Ae(0), [f, u] = Ae(0), [p, h] = Ae(0), [m, v] = Ae(!1);
    function w() {
      const {
        target: g
      } = e, S = getComputedStyle(g);
      r(yv(g));
      const A = S.position === "static", {
        borderLeftWidth: O,
        borderTopWidth: M
      } = S;
      s(A ? g.offsetLeft : ur(-parseFloat(O))), c(A ? g.offsetTop : ur(-parseFloat(M))), u(g.offsetWidth), h(g.offsetHeight);
      const {
        borderTopLeftRadius: N,
        borderTopRightRadius: L,
        borderBottomLeftRadius: W,
        borderBottomRightRadius: E
      } = S;
      i([N, L, E, W].map((R) => ur(parseFloat(R))));
    }
    let b, y, T;
    const _ = () => {
      clearTimeout(T), ne.cancel(y), b == null || b.disconnect();
    }, P = () => {
      var g;
      const S = (g = t.value) === null || g === void 0 ? void 0 : g.parentElement;
      S && (Fr(null, S), S.parentElement && S.parentElement.removeChild(S));
    };
    We(() => {
      _(), T = setTimeout(() => {
        P();
      }, 5e3);
      const {
        target: g
      } = e;
      g && (y = ne(() => {
        w(), v(!0);
      }), typeof ResizeObserver < "u" && (b = new ResizeObserver(w), b.observe(g)));
    }), ke(() => {
      _();
    });
    const x = (g) => {
      g.propertyName === "opacity" && P();
    };
    return () => {
      if (!m.value)
        return null;
      const g = {
        left: `${a.value}px`,
        top: `${l.value}px`,
        width: `${f.value}px`,
        height: `${p.value}px`,
        borderRadius: o.value.map((S) => `${S}px`).join(" ")
      };
      return n && (g["--wave-color"] = n.value), C(Lt, {
        appear: !0,
        name: "wave-motion",
        appearFromClass: "wave-motion-appear",
        appearActiveClass: "wave-motion-appear",
        appearToClass: "wave-motion-appear wave-motion-appear-active"
      }, {
        default: () => [C("div", {
          ref: t,
          class: e.className,
          style: g,
          onTransitionend: x
        }, null)]
      });
    };
  }
});
function wv(e, t) {
  const n = document.createElement("div");
  n.style.position = "absolute", n.style.left = "0px", n.style.top = "0px", e == null || e.insertBefore(n, e == null ? void 0 : e.firstChild), Fr(C(bv, {
    target: e,
    className: t
  }, null), n);
}
function xv(e, t, n) {
  function r() {
    var o;
    const i = De(e);
    !((o = n == null ? void 0 : n.value) === null || o === void 0) && o.disabled || !i || wv(i, t.value);
  }
  return r;
}
const Sv = H({
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
    const r = Bt(), {
      prefixCls: o,
      wave: i
    } = Xe("wave", e), [, a] = mv(o), s = xv(r, $(() => fe(o.value, a.value)), i);
    let l;
    const c = () => {
      De(r).removeEventListener("click", l, !0);
    };
    return We(() => {
      q(() => e.disabled, () => {
        c(), xe(() => {
          const f = De(r);
          f == null || f.removeEventListener("click", l, !0), !(!f || f.nodeType !== 1 || e.disabled) && (l = (u) => {
            u.target.tagName === "INPUT" || !Ts(u.target) || // No need wave
            !f.getAttribute || f.getAttribute("disabled") || f.disabled || f.className.includes("disabled") || f.className.includes("-leave") || s();
          }, f.addEventListener("click", l, !0));
        });
      }, {
        immediate: !0,
        flush: "post"
      });
    }), ke(() => {
      c();
    }), () => {
      var f;
      return (f = n.default) === null || f === void 0 ? void 0 : f.call(n)[0];
    };
  }
});
function A0(e) {
  return e === "danger" ? {
    danger: !0
  } : {
    type: e
  };
}
const Cv = () => ({
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
  icon: D.any,
  href: String,
  target: String,
  title: String,
  onClick: Co(),
  onMousedown: Co()
}), Ki = (e) => {
  e && (e.style.width = "0px", e.style.opacity = "0", e.style.transform = "scale(0)");
}, Qi = (e) => {
  xe(() => {
    e && (e.style.width = `${e.scrollWidth}px`, e.style.opacity = "1", e.style.transform = "scale(1)");
  });
}, Zi = (e) => {
  e && e.style && (e.style.width = null, e.style.opacity = null, e.style.transform = null);
}, Tv = H({
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
        return C("span", {
          class: `${n}-loading-icon`
        }, [C(Tn, null, null)]);
      const o = !!r;
      return C(Lt, {
        name: `${n}-loading-icon-motion`,
        onBeforeEnter: Ki,
        onEnter: Qi,
        onAfterEnter: Zi,
        onBeforeLeave: Qi,
        onLeave: (i) => {
          setTimeout(() => {
            Ki(i);
          });
        },
        onAfterLeave: Zi
      }, {
        default: () => [o ? C("span", {
          class: `${n}-loading-icon`
        }, [C(Tn, null, null)]) : null]
      });
    };
  }
}), Ji = (e, t) => ({
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
}), Ov = (e) => {
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
      Ji(`${t}-primary`, o),
      Ji(`${t}-danger`, i)
    ]
  };
};
function $v(e, t) {
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
function Pv(e, t) {
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
function _v(e) {
  const t = `${e.componentCls}-compact-vertical`;
  return {
    [t]: d(d({}, $v(e, t)), Pv(e.componentCls, t))
  };
}
const Ev = (e) => {
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
      "&:not(:disabled)": d({}, Yu(e)),
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
}, Se = (e, t) => ({
  "&:not(:disabled)": {
    "&:hover": e,
    "&:active": t
  }
}), Av = (e) => ({
  minWidth: e.controlHeight,
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  borderRadius: "50%"
}), Mv = (e) => ({
  borderRadius: e.controlHeight,
  paddingInlineStart: e.controlHeight / 2,
  paddingInlineEnd: e.controlHeight / 2
}), zr = (e) => ({
  cursor: "not-allowed",
  borderColor: e.colorBorder,
  color: e.colorTextDisabled,
  backgroundColor: e.colorBgContainerDisabled,
  boxShadow: "none"
}), Pn = (e, t, n, r, o, i, a) => ({
  [`&${e}-background-ghost`]: d(d({
    color: t || void 0,
    backgroundColor: "transparent",
    borderColor: n || void 0,
    boxShadow: "none"
  }, Se(d({
    backgroundColor: "transparent"
  }, i), d({
    backgroundColor: "transparent"
  }, a))), {
    "&:disabled": {
      cursor: "not-allowed",
      color: r || void 0,
      borderColor: o || void 0
    }
  })
}), po = (e) => ({
  "&:disabled": d({}, zr(e))
}), nl = (e) => d({}, po(e)), _n = (e) => ({
  "&:disabled": {
    cursor: "not-allowed",
    color: e.colorTextDisabled
  }
}), rl = (e) => d(d(d(d(d({}, nl(e)), {
  backgroundColor: e.colorBgContainer,
  borderColor: e.colorBorder,
  boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlTmpOutline}`
}), Se({
  color: e.colorPrimaryHover,
  borderColor: e.colorPrimaryHover
}, {
  color: e.colorPrimaryActive,
  borderColor: e.colorPrimaryActive
})), Pn(e.componentCls, e.colorBgContainer, e.colorBgContainer, e.colorTextDisabled, e.colorBorder)), {
  [`&${e.componentCls}-dangerous`]: d(d(d({
    color: e.colorError,
    borderColor: e.colorError
  }, Se({
    color: e.colorErrorHover,
    borderColor: e.colorErrorBorderHover
  }, {
    color: e.colorErrorActive,
    borderColor: e.colorErrorActive
  })), Pn(e.componentCls, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder)), po(e))
}), Iv = (e) => d(d(d(d(d({}, nl(e)), {
  color: e.colorTextLightSolid,
  backgroundColor: e.colorPrimary,
  boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlOutline}`
}), Se({
  color: e.colorTextLightSolid,
  backgroundColor: e.colorPrimaryHover
}, {
  color: e.colorTextLightSolid,
  backgroundColor: e.colorPrimaryActive
})), Pn(e.componentCls, e.colorPrimary, e.colorPrimary, e.colorTextDisabled, e.colorBorder, {
  color: e.colorPrimaryHover,
  borderColor: e.colorPrimaryHover
}, {
  color: e.colorPrimaryActive,
  borderColor: e.colorPrimaryActive
})), {
  [`&${e.componentCls}-dangerous`]: d(d(d({
    backgroundColor: e.colorError,
    boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.colorErrorOutline}`
  }, Se({
    backgroundColor: e.colorErrorHover
  }, {
    backgroundColor: e.colorErrorActive
  })), Pn(e.componentCls, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder, {
    color: e.colorErrorHover,
    borderColor: e.colorErrorHover
  }, {
    color: e.colorErrorActive,
    borderColor: e.colorErrorActive
  })), po(e))
}), Dv = (e) => d(d({}, rl(e)), {
  borderStyle: "dashed"
}), jv = (e) => d(d(d({
  color: e.colorLink
}, Se({
  color: e.colorLinkHover
}, {
  color: e.colorLinkActive
})), _n(e)), {
  [`&${e.componentCls}-dangerous`]: d(d({
    color: e.colorError
  }, Se({
    color: e.colorErrorHover
  }, {
    color: e.colorErrorActive
  })), _n(e))
}), Rv = (e) => d(d(d({}, Se({
  color: e.colorText,
  backgroundColor: e.colorBgTextHover
}, {
  color: e.colorText,
  backgroundColor: e.colorBgTextActive
})), _n(e)), {
  [`&${e.componentCls}-dangerous`]: d(d({
    color: e.colorError
  }, _n(e)), Se({
    color: e.colorErrorHover,
    backgroundColor: e.colorErrorBg
  }, {
    color: e.colorErrorHover,
    backgroundColor: e.colorErrorBg
  }))
}), Hv = (e) => d(d({}, zr(e)), {
  [`&${e.componentCls}:hover`]: d({}, zr(e))
}), Bv = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-default`]: rl(e),
    [`${t}-primary`]: Iv(e),
    [`${t}-dashed`]: Dv(e),
    [`${t}-link`]: jv(e),
    [`${t}-text`]: Rv(e),
    [`${t}-disabled`]: Hv(e)
  };
}, ho = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  const {
    componentCls: n,
    iconCls: r,
    controlHeight: o,
    fontSize: i,
    lineHeight: a,
    lineWidth: s,
    borderRadius: l,
    buttonPaddingHorizontal: c
  } = e, f = Math.max(0, (o - i * a) / 2 - s), u = c - s, p = `${n}-icon-only`;
  return [
    // Size
    {
      [`${n}${t}`]: {
        fontSize: i,
        height: o,
        padding: `${f}px ${u}px`,
        borderRadius: l,
        [`&${p}`]: {
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
        [`&:not(${p}) ${n}-loading-icon > ${r}`]: {
          marginInlineEnd: e.marginXS
        }
      }
    },
    // Shape - patch prefixCls again to override solid border radius style
    {
      [`${n}${n}-circle${t}`]: Av(e)
    },
    {
      [`${n}${n}-round${t}`]: Mv(e)
    }
  ];
}, Nv = (e) => ho(e), Lv = (e) => {
  const t = Ve(e, {
    controlHeight: e.controlHeightSM,
    padding: e.paddingXS,
    buttonPaddingHorizontal: 8,
    borderRadius: e.borderRadiusSM
  });
  return ho(t, `${e.componentCls}-sm`);
}, zv = (e) => {
  const t = Ve(e, {
    controlHeight: e.controlHeightLG,
    fontSize: e.fontSizeLG,
    borderRadius: e.borderRadiusLG
  });
  return ho(t, `${e.componentCls}-lg`);
}, Fv = (e) => {
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
}, kv = Ft("Button", (e) => {
  const {
    controlTmpOutline: t,
    paddingContentHorizontal: n
  } = e, r = Ve(e, {
    colorOutlineDefault: t,
    buttonPaddingHorizontal: n
  });
  return [
    // Shared
    Ev(r),
    // Size
    Lv(r),
    Nv(r),
    zv(r),
    // Block
    Fv(r),
    // Group (type, ghost, danger, disabled, loading)
    Bv(r),
    // Button Group
    Ov(r),
    // Space Compact
    Um(e, {
      focus: !1
    }),
    _v(e)
  ];
}), Wv = () => ({
  prefixCls: String,
  size: {
    type: String
  }
}), ol = fo(), En = H({
  compatConfig: {
    MODE: 3
  },
  name: "AButtonGroup",
  props: Wv(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      prefixCls: r,
      direction: o
    } = Xe("btn-group", e), [, , i] = kt();
    ol.useProvide(kr({
      size: $(() => e.size)
    }));
    const a = $(() => {
      const {
        size: s
      } = e;
      let l = "";
      switch (s) {
        case "large":
          l = "lg";
          break;
        case "small":
          l = "sm";
          break;
        case "middle":
        case void 0:
          break;
        default:
          to(!s, "Button.Group", "Invalid prop `size`.");
      }
      return {
        [`${r.value}`]: !0,
        [`${r.value}-${l}`]: l,
        [`${r.value}-rtl`]: o.value === "rtl",
        [i.value]: !0
      };
    });
    return () => {
      var s;
      return C("div", {
        class: a.value
      }, [ce((s = n.default) === null || s === void 0 ? void 0 : s.call(n))]);
    };
  }
}), ea = /^[\u4e00-\u9fa5]{2}$/, ta = ea.test.bind(ea);
function nn(e) {
  return e === "text" || e === "link";
}
const Tt = H({
  compatConfig: {
    MODE: 3
  },
  name: "AButton",
  inheritAttrs: !1,
  __ANT_BUTTON: !0,
  props: ha(Cv(), {
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
      autoInsertSpaceInButton: s,
      direction: l,
      size: c
    } = Xe("btn", e), [f, u] = kv(a), p = ol.useInject(), h = Ur(), m = $(() => {
      var E;
      return (E = e.disabled) !== null && E !== void 0 ? E : h.value;
    }), v = j(null), w = j(void 0);
    let b = !1;
    const y = j(!1), T = j(!1), _ = $(() => s.value !== !1), {
      compactSize: P,
      compactItemClassnames: x
    } = Pm(a, l), g = $(() => typeof e.loading == "object" && e.loading.delay ? e.loading.delay || !0 : !!e.loading);
    q(g, (E) => {
      clearTimeout(w.value), typeof g.value == "number" ? w.value = setTimeout(() => {
        y.value = E;
      }, g.value) : y.value = E;
    }, {
      immediate: !0
    });
    const S = $(() => {
      const {
        type: E,
        shape: R = "default",
        ghost: V,
        block: F,
        danger: Qe
      } = e, G = a.value, Ze = {
        large: "lg",
        small: "sm",
        middle: void 0
      }, Je = P.value || (p == null ? void 0 : p.size) || c.value, et = Je && Ze[Je] || "";
      return [x.value, {
        [u.value]: !0,
        [`${G}`]: !0,
        [`${G}-${R}`]: R !== "default" && R,
        [`${G}-${E}`]: E,
        [`${G}-${et}`]: et,
        [`${G}-loading`]: y.value,
        [`${G}-background-ghost`]: V && !nn(E),
        [`${G}-two-chinese-chars`]: T.value && _.value,
        [`${G}-block`]: F,
        [`${G}-dangerous`]: !!Qe,
        [`${G}-rtl`]: l.value === "rtl"
      }];
    }), A = () => {
      const E = v.value;
      if (!E || s.value === !1)
        return;
      const R = E.textContent;
      b && ta(R) ? T.value || (T.value = !0) : T.value && (T.value = !1);
    }, O = (E) => {
      if (y.value || m.value) {
        E.preventDefault();
        return;
      }
      o("click", E);
    }, M = (E) => {
      o("mousedown", E);
    }, N = (E, R) => {
      const V = R ? " " : "";
      if (E.type === ia) {
        let F = E.children.trim();
        return ta(F) && (F = F.split("").join(V)), C("span", null, [F]);
      }
      return E;
    };
    return Nt(() => {
      to(!(e.ghost && nn(e.type)), "Button", "`link` or `text` button can't be a `ghost` button.");
    }), We(A), An(A), ke(() => {
      w.value && clearTimeout(w.value);
    }), i({
      focus: () => {
        var E;
        (E = v.value) === null || E === void 0 || E.focus();
      },
      blur: () => {
        var E;
        (E = v.value) === null || E === void 0 || E.blur();
      }
    }), () => {
      var E, R;
      const {
        icon: V = (E = n.icon) === null || E === void 0 ? void 0 : E.call(n)
      } = e, F = ce((R = n.default) === null || R === void 0 ? void 0 : R.call(n));
      b = F.length === 1 && !V && !nn(e.type);
      const {
        type: Qe,
        htmlType: G,
        href: Ze,
        title: Je,
        target: et
      } = e, sl = y.value ? "loading" : V, kn = d(d({}, r), {
        title: Je,
        disabled: m.value,
        class: [S.value, r.class, {
          [`${a.value}-icon-only`]: F.length === 0 && !!sl
        }],
        onClick: O,
        onMousedown: M
      });
      m.value || delete kn.disabled;
      const go = V && !y.value ? V : C(Tv, {
        existIcon: !!V,
        prefixCls: a.value,
        loading: !!y.value
      }, null), mo = F.map((Vn) => N(Vn, b && _.value));
      if (Ze !== void 0)
        return f(C("a", K(K({}, kn), {}, {
          href: Ze,
          target: et,
          ref: v
        }), [go, mo]));
      let Wn = C("button", K(K({}, kn), {}, {
        ref: v,
        type: G
      }), [go, mo]);
      if (!nn(Qe)) {
        const Vn = /* @__PURE__ */ function() {
          return Wn;
        }();
        Wn = C(Sv, {
          ref: "wave",
          disabled: !!y.value
        }, {
          default: () => [Vn]
        });
      }
      return f(Wn);
    };
  }
});
Tt.Group = En;
Tt.install = function(e) {
  return e.component(Tt.name, Tt), e.component(En.name, En), e;
};
const M0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ButtonGroup: En,
  default: Tt
}, Symbol.toStringTag, { value: "Module" }));
function il(e, t) {
  return e.classList ? e.classList.contains(t) : ` ${e.className} `.indexOf(` ${t} `) > -1;
}
function na(e, t) {
  e.classList ? e.classList.add(t) : il(e, t) || (e.className = `${e.className} ${t}`);
}
function ra(e, t) {
  if (e.classList)
    e.classList.remove(t);
  else if (il(e, t)) {
    const n = e.className;
    e.className = ` ${n} `.replace(` ${t} `, " ");
  }
}
const I0 = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "ant-motion-collapse", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return {
    name: e,
    appear: t,
    css: !0,
    onBeforeEnter: (n) => {
      n.style.height = "0px", n.style.opacity = "0", na(n, e);
    },
    onEnter: (n) => {
      xe(() => {
        n.style.height = `${n.scrollHeight}px`, n.style.opacity = "1";
      });
    },
    onAfterEnter: (n) => {
      n && (ra(n, e), n.style.height = null, n.style.opacity = null);
    },
    onBeforeLeave: (n) => {
      na(n, e), n.style.height = `${n.offsetHeight}px`, n.style.opacity = null;
    },
    onLeave: (n) => {
      setTimeout(() => {
        n.style.height = "0px", n.style.opacity = "0";
      });
    },
    onAfterLeave: (n) => {
      n && (ra(n, e), n.style && (n.style.height = null, n.style.opacity = null));
    }
  };
}, Vv = () => de() && window.document.documentElement, al = (e) => {
  if (de() && window.document.documentElement) {
    const t = Array.isArray(e) ? e : [e], {
      documentElement: n
    } = window.document;
    return t.some((r) => r in n.style);
  }
  return !1;
}, Xv = (e, t) => {
  if (!al(e))
    return !1;
  const n = document.createElement("div"), r = n.style[e];
  return n.style[e] = t, n.style[e] !== r;
};
function D0(e, t) {
  return !Array.isArray(e) && t !== void 0 ? Xv(e, t) : al(e);
}
let rn;
const j0 = () => {
  if (!Vv())
    return !1;
  if (rn !== void 0)
    return rn;
  const e = document.createElement("div");
  return e.style.display = "flex", e.style.flexDirection = "column", e.style.rowGap = "1px", e.appendChild(document.createElement("div")), e.appendChild(document.createElement("div")), document.body.appendChild(e), rn = e.scrollHeight === 1, document.body.removeChild(e), rn;
};
export {
  k as $,
  to as A,
  Tt as B,
  rt as C,
  Oo as D,
  ce as E,
  To as F,
  Qv as G,
  qg as H,
  Ke as I,
  zt as J,
  se as K,
  Tn as L,
  De as M,
  Gl as N,
  rc as O,
  D as P,
  E0 as Q,
  pr as R,
  Qs as S,
  cg as T,
  ne as U,
  Pm as V,
  Sv as W,
  T0 as X,
  w0 as Y,
  S0 as Z,
  d as _,
  Uu as a,
  Fs as a$,
  i0 as a0,
  Jl as a1,
  Cc as a2,
  ic as a3,
  a0 as a4,
  je as a5,
  yt as a6,
  tg as a7,
  Zl as a8,
  Kl as a9,
  r0 as aA,
  hr as aB,
  Dt as aC,
  Kp as aD,
  Yv as aE,
  rg as aF,
  sc as aG,
  ps as aH,
  Kv as aI,
  qv as aJ,
  mn as aK,
  At as aL,
  kt as aM,
  Bo as aN,
  Zu as aO,
  e0 as aP,
  ac as aQ,
  Pc as aR,
  Zr as aS,
  t0 as aT,
  Zv as aU,
  u0 as aV,
  n0 as aW,
  uc as aX,
  c0 as aY,
  l0 as aZ,
  Me as a_,
  f0 as aa,
  pv as ab,
  qr as ac,
  o0 as ad,
  Ae as ae,
  Kh as af,
  h0 as ag,
  es as ah,
  la as ai,
  Tc as aj,
  I0 as ak,
  O0 as al,
  jr as am,
  bp as an,
  Sn as ao,
  x0 as ap,
  gp as aq,
  qh as ar,
  Ul as as,
  Vm as at,
  de as au,
  Ih as av,
  Ns as aw,
  Ht as ax,
  Qn as ay,
  g0 as az,
  K as b,
  sg as b0,
  Vv as b1,
  A0 as b2,
  d0 as b3,
  Ts as b4,
  ku as b5,
  $o as b6,
  P0 as b7,
  Cv as b8,
  lv as b9,
  pm as bA,
  Rp as bB,
  di as bC,
  Fe as bD,
  we as bE,
  yi as bF,
  Ch as bG,
  Cn as bH,
  Oe as bI,
  wi as bJ,
  Ls as bK,
  Ds as bL,
  cm as bM,
  j0 as bN,
  $0 as bO,
  Dm as bP,
  v0 as bQ,
  Gh as bR,
  Jv as bS,
  b0 as bT,
  M0 as bU,
  nv as ba,
  rv as bb,
  ec as bc,
  Yl as bd,
  lc as be,
  D0 as bf,
  na as bg,
  ra as bh,
  p0 as bi,
  ks as bj,
  m0 as bk,
  C0 as bl,
  gt as bm,
  ut as bn,
  em as bo,
  Vi as bp,
  pt as bq,
  Os as br,
  Rs as bs,
  Ph as bt,
  qe as bu,
  Ms as bv,
  jp as bw,
  me as bx,
  zp as by,
  Bp as bz,
  fe as c,
  Um as d,
  s0 as e,
  Im as f,
  Ft as g,
  xn as h,
  ha as i,
  Uv as j,
  Wu as k,
  av as l,
  Ve as m,
  _0 as n,
  Co as o,
  J as p,
  Yu as q,
  Vu as r,
  Ql as s,
  Xr as t,
  Xe as u,
  hn as v,
  jn as w,
  y0 as x,
  Ur as y,
  oc as z
};
