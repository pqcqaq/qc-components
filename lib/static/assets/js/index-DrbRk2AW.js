import { ad as Dr, _ as Y, b as N, c as ue, U as qe, b4 as Pr, h as Mr, a2 as Te, T as Or, ac as Nr, ae as Jn, g as Rr, m as sn, d as Tr, r as ea, b5 as Ir, a0 as Yr, A as Vt, B as Er, I as wn, $ as un, t as je, a3 as ct, q as ne, v as pt, p as nt, x as pa, F as ga, H as gt, u as ha, V as ma, aA as ba, b6 as wa, S as Ca } from "./styleChecker-DxpCOgAe.js";
import { useAttrs as Vr, provide as $a, inject as ya, createVNode as b, createTextVNode as ka, defineComponent as Ke, shallowRef as Ve, ref as z, watch as ge, onBeforeUnmount as Cn, nextTick as xa, computed as F, onBeforeUpdate as Hr, watchEffect as Bt, toRef as de, onMounted as Sa, getCurrentScope as Ar, onScopeDispose as _r, unref as Br, getCurrentInstance as Wr, Fragment as Ht } from "vue";
import { T as Fr } from "./index-BV6USJE0.js";
import { K as ce } from "./KeyCode-n3eOOGSl.js";
import { u as He } from "./useMergedState-6HyZ0xMy.js";
import { u as Lr, i as ta } from "./move-CqgfczsM.js";
import { s as jr } from "./shallowequal-BFA2Cg8a.js";
import { o as zr } from "./omit-BQe9TABq.js";
import { g as Da, a as Pa } from "./statusUtils-CU924PZO.js";
import { i as Ur, c as cn, e as qr, g as Kr } from "./index-C2weR3oL.js";
import { a as Gr, s as Qr, c as Xr, b as Zr, i as na } from "./slide-CJY2mPfA.js";
var rt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ot(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ma = { exports: {} };
(function(e, t) {
  (function(n, a) {
    e.exports = a();
  })(rt, function() {
    var n = 1e3, a = 6e4, r = 36e5, l = "millisecond", o = "second", i = "minute", c = "hour", s = "day", p = "week", u = "month", d = "quarter", m = "year", y = "date", v = "Invalid Date", f = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, $ = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, g = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(I) {
      var S = ["th", "st", "nd", "rd"], D = I % 100;
      return "[" + I + (S[(D - 20) % 10] || S[D] || S[0]) + "]";
    } }, M = function(I, S, D) {
      var w = String(I);
      return !w || w.length >= S ? I : "" + Array(S + 1 - w.length).join(D) + I;
    }, x = { s: M, z: function(I) {
      var S = -I.utcOffset(), D = Math.abs(S), w = Math.floor(D / 60), C = D % 60;
      return (S <= 0 ? "+" : "-") + M(w, 2, "0") + ":" + M(C, 2, "0");
    }, m: function I(S, D) {
      if (S.date() < D.date())
        return -I(D, S);
      var w = 12 * (D.year() - S.year()) + (D.month() - S.month()), C = S.clone().add(w, u), O = D - C < 0, h = S.clone().add(w + (O ? -1 : 1), u);
      return +(-(w + (D - C) / (O ? C - h : h - C)) || 0);
    }, a: function(I) {
      return I < 0 ? Math.ceil(I) || 0 : Math.floor(I);
    }, p: function(I) {
      return { M: u, y: m, w: p, d: s, D: y, h: c, m: i, s: o, ms: l, Q: d }[I] || String(I || "").toLowerCase().replace(/s$/, "");
    }, u: function(I) {
      return I === void 0;
    } }, R = "en", E = {};
    E[R] = g;
    var j = "$isDayjsObject", U = function(I) {
      return I instanceof _ || !(!I || !I[j]);
    }, q = function I(S, D, w) {
      var C;
      if (!S)
        return R;
      if (typeof S == "string") {
        var O = S.toLowerCase();
        E[O] && (C = O), D && (E[O] = D, C = O);
        var h = S.split("-");
        if (!C && h.length > 1)
          return I(h[0]);
      } else {
        var P = S.name;
        E[P] = S, C = P;
      }
      return !w && C && (R = C), C || !w && R;
    }, A = function(I, S) {
      if (U(I))
        return I.clone();
      var D = typeof S == "object" ? S : {};
      return D.date = I, D.args = arguments, new _(D);
    }, T = x;
    T.l = q, T.i = U, T.w = function(I, S) {
      return A(I, { locale: S.$L, utc: S.$u, x: S.$x, $offset: S.$offset });
    };
    var _ = function() {
      function I(D) {
        this.$L = q(D.locale, null, !0), this.parse(D), this.$x = this.$x || D.x || {}, this[j] = !0;
      }
      var S = I.prototype;
      return S.parse = function(D) {
        this.$d = function(w) {
          var C = w.date, O = w.utc;
          if (C === null)
            return /* @__PURE__ */ new Date(NaN);
          if (T.u(C))
            return /* @__PURE__ */ new Date();
          if (C instanceof Date)
            return new Date(C);
          if (typeof C == "string" && !/Z$/i.test(C)) {
            var h = C.match(f);
            if (h) {
              var P = h[2] - 1 || 0, V = (h[7] || "0").substring(0, 3);
              return O ? new Date(Date.UTC(h[1], P, h[3] || 1, h[4] || 0, h[5] || 0, h[6] || 0, V)) : new Date(h[1], P, h[3] || 1, h[4] || 0, h[5] || 0, h[6] || 0, V);
            }
          }
          return new Date(C);
        }(D), this.init();
      }, S.init = function() {
        var D = this.$d;
        this.$y = D.getFullYear(), this.$M = D.getMonth(), this.$D = D.getDate(), this.$W = D.getDay(), this.$H = D.getHours(), this.$m = D.getMinutes(), this.$s = D.getSeconds(), this.$ms = D.getMilliseconds();
      }, S.$utils = function() {
        return T;
      }, S.isValid = function() {
        return this.$d.toString() !== v;
      }, S.isSame = function(D, w) {
        var C = A(D);
        return this.startOf(w) <= C && C <= this.endOf(w);
      }, S.isAfter = function(D, w) {
        return A(D) < this.startOf(w);
      }, S.isBefore = function(D, w) {
        return this.endOf(w) < A(D);
      }, S.$g = function(D, w, C) {
        return T.u(D) ? this[w] : this.set(C, D);
      }, S.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, S.valueOf = function() {
        return this.$d.getTime();
      }, S.startOf = function(D, w) {
        var C = this, O = !!T.u(w) || w, h = T.p(D), P = function(te, Q) {
          var X = T.w(C.$u ? Date.UTC(C.$y, Q, te) : new Date(C.$y, Q, te), C);
          return O ? X : X.endOf(s);
        }, V = function(te, Q) {
          return T.w(C.toDate()[te].apply(C.toDate("s"), (O ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Q)), C);
        }, W = this.$W, G = this.$M, ee = this.$D, ie = "set" + (this.$u ? "UTC" : "");
        switch (h) {
          case m:
            return O ? P(1, 0) : P(31, 11);
          case u:
            return O ? P(1, G) : P(0, G + 1);
          case p:
            var oe = this.$locale().weekStart || 0, L = (W < oe ? W + 7 : W) - oe;
            return P(O ? ee - L : ee + (6 - L), G);
          case s:
          case y:
            return V(ie + "Hours", 0);
          case c:
            return V(ie + "Minutes", 1);
          case i:
            return V(ie + "Seconds", 2);
          case o:
            return V(ie + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, S.endOf = function(D) {
        return this.startOf(D, !1);
      }, S.$set = function(D, w) {
        var C, O = T.p(D), h = "set" + (this.$u ? "UTC" : ""), P = (C = {}, C[s] = h + "Date", C[y] = h + "Date", C[u] = h + "Month", C[m] = h + "FullYear", C[c] = h + "Hours", C[i] = h + "Minutes", C[o] = h + "Seconds", C[l] = h + "Milliseconds", C)[O], V = O === s ? this.$D + (w - this.$W) : w;
        if (O === u || O === m) {
          var W = this.clone().set(y, 1);
          W.$d[P](V), W.init(), this.$d = W.set(y, Math.min(this.$D, W.daysInMonth())).$d;
        } else
          P && this.$d[P](V);
        return this.init(), this;
      }, S.set = function(D, w) {
        return this.clone().$set(D, w);
      }, S.get = function(D) {
        return this[T.p(D)]();
      }, S.add = function(D, w) {
        var C, O = this;
        D = Number(D);
        var h = T.p(w), P = function(G) {
          var ee = A(O);
          return T.w(ee.date(ee.date() + Math.round(G * D)), O);
        };
        if (h === u)
          return this.set(u, this.$M + D);
        if (h === m)
          return this.set(m, this.$y + D);
        if (h === s)
          return P(1);
        if (h === p)
          return P(7);
        var V = (C = {}, C[i] = a, C[c] = r, C[o] = n, C)[h] || 1, W = this.$d.getTime() + D * V;
        return T.w(W, this);
      }, S.subtract = function(D, w) {
        return this.add(-1 * D, w);
      }, S.format = function(D) {
        var w = this, C = this.$locale();
        if (!this.isValid())
          return C.invalidDate || v;
        var O = D || "YYYY-MM-DDTHH:mm:ssZ", h = T.z(this), P = this.$H, V = this.$m, W = this.$M, G = C.weekdays, ee = C.months, ie = C.meridiem, oe = function(Q, X, se, re) {
          return Q && (Q[X] || Q(w, O)) || se[X].slice(0, re);
        }, L = function(Q) {
          return T.s(P % 12 || 12, Q, "0");
        }, te = ie || function(Q, X, se) {
          var re = Q < 12 ? "AM" : "PM";
          return se ? re.toLowerCase() : re;
        };
        return O.replace($, function(Q, X) {
          return X || function(se) {
            switch (se) {
              case "YY":
                return String(w.$y).slice(-2);
              case "YYYY":
                return T.s(w.$y, 4, "0");
              case "M":
                return W + 1;
              case "MM":
                return T.s(W + 1, 2, "0");
              case "MMM":
                return oe(C.monthsShort, W, ee, 3);
              case "MMMM":
                return oe(ee, W);
              case "D":
                return w.$D;
              case "DD":
                return T.s(w.$D, 2, "0");
              case "d":
                return String(w.$W);
              case "dd":
                return oe(C.weekdaysMin, w.$W, G, 2);
              case "ddd":
                return oe(C.weekdaysShort, w.$W, G, 3);
              case "dddd":
                return G[w.$W];
              case "H":
                return String(P);
              case "HH":
                return T.s(P, 2, "0");
              case "h":
                return L(1);
              case "hh":
                return L(2);
              case "a":
                return te(P, V, !0);
              case "A":
                return te(P, V, !1);
              case "m":
                return String(V);
              case "mm":
                return T.s(V, 2, "0");
              case "s":
                return String(w.$s);
              case "ss":
                return T.s(w.$s, 2, "0");
              case "SSS":
                return T.s(w.$ms, 3, "0");
              case "Z":
                return h;
            }
            return null;
          }(Q) || h.replace(":", "");
        });
      }, S.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, S.diff = function(D, w, C) {
        var O, h = this, P = T.p(w), V = A(D), W = (V.utcOffset() - this.utcOffset()) * a, G = this - V, ee = function() {
          return T.m(h, V);
        };
        switch (P) {
          case m:
            O = ee() / 12;
            break;
          case u:
            O = ee();
            break;
          case d:
            O = ee() / 3;
            break;
          case p:
            O = (G - W) / 6048e5;
            break;
          case s:
            O = (G - W) / 864e5;
            break;
          case c:
            O = G / r;
            break;
          case i:
            O = G / a;
            break;
          case o:
            O = G / n;
            break;
          default:
            O = G;
        }
        return C ? O : T.a(O);
      }, S.daysInMonth = function() {
        return this.endOf(u).$D;
      }, S.$locale = function() {
        return E[this.$L];
      }, S.locale = function(D, w) {
        if (!D)
          return this.$L;
        var C = this.clone(), O = q(D, w, !0);
        return O && (C.$L = O), C;
      }, S.clone = function() {
        return T.w(this.$d, this);
      }, S.toDate = function() {
        return new Date(this.valueOf());
      }, S.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, S.toISOString = function() {
        return this.$d.toISOString();
      }, S.toString = function() {
        return this.$d.toUTCString();
      }, I;
    }(), J = _.prototype;
    return A.prototype = J, [["$ms", l], ["$s", o], ["$m", i], ["$H", c], ["$W", s], ["$M", u], ["$y", m], ["$D", y]].forEach(function(I) {
      J[I[1]] = function(S) {
        return this.$g(S, I[0], I[1]);
      };
    }), A.extend = function(I, S) {
      return I.$i || (I(S, _, A), I.$i = !0), A;
    }, A.locale = q, A.isDayjs = U, A.unix = function(I) {
      return A(1e3 * I);
    }, A.en = E[R], A.Ls = E, A.p = {}, A;
  });
})(Ma);
var Jr = Ma.exports;
const pe = /* @__PURE__ */ ot(Jr);
var Oa = { exports: {} };
(function(e, t) {
  (function(n, a) {
    e.exports = a();
  })(rt, function() {
    return function(n, a) {
      a.prototype.weekday = function(r) {
        var l = this.$locale().weekStart || 0, o = this.$W, i = (o < l ? o + 7 : o) - l;
        return this.$utils().u(r) ? i : this.subtract(i, "day").add(r, "day");
      };
    };
  });
})(Oa);
var eo = Oa.exports;
const to = /* @__PURE__ */ ot(eo);
var Na = { exports: {} };
(function(e, t) {
  (function(n, a) {
    e.exports = a();
  })(rt, function() {
    return function(n, a, r) {
      var l = a.prototype, o = function(u) {
        return u && (u.indexOf ? u : u.s);
      }, i = function(u, d, m, y, v) {
        var f = u.name ? u : u.$locale(), $ = o(f[d]), g = o(f[m]), M = $ || g.map(function(R) {
          return R.slice(0, y);
        });
        if (!v)
          return M;
        var x = f.weekStart;
        return M.map(function(R, E) {
          return M[(E + (x || 0)) % 7];
        });
      }, c = function() {
        return r.Ls[r.locale()];
      }, s = function(u, d) {
        return u.formats[d] || function(m) {
          return m.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(y, v, f) {
            return v || f.slice(1);
          });
        }(u.formats[d.toUpperCase()]);
      }, p = function() {
        var u = this;
        return { months: function(d) {
          return d ? d.format("MMMM") : i(u, "months");
        }, monthsShort: function(d) {
          return d ? d.format("MMM") : i(u, "monthsShort", "months", 3);
        }, firstDayOfWeek: function() {
          return u.$locale().weekStart || 0;
        }, weekdays: function(d) {
          return d ? d.format("dddd") : i(u, "weekdays");
        }, weekdaysMin: function(d) {
          return d ? d.format("dd") : i(u, "weekdaysMin", "weekdays", 2);
        }, weekdaysShort: function(d) {
          return d ? d.format("ddd") : i(u, "weekdaysShort", "weekdays", 3);
        }, longDateFormat: function(d) {
          return s(u.$locale(), d);
        }, meridiem: this.$locale().meridiem, ordinal: this.$locale().ordinal };
      };
      l.localeData = function() {
        return p.bind(this)();
      }, r.localeData = function() {
        var u = c();
        return { firstDayOfWeek: function() {
          return u.weekStart || 0;
        }, weekdays: function() {
          return r.weekdays();
        }, weekdaysShort: function() {
          return r.weekdaysShort();
        }, weekdaysMin: function() {
          return r.weekdaysMin();
        }, months: function() {
          return r.months();
        }, monthsShort: function() {
          return r.monthsShort();
        }, longDateFormat: function(d) {
          return s(u, d);
        }, meridiem: u.meridiem, ordinal: u.ordinal };
      }, r.months = function() {
        return i(c(), "months");
      }, r.monthsShort = function() {
        return i(c(), "monthsShort", "months", 3);
      }, r.weekdays = function(u) {
        return i(c(), "weekdays", null, null, u);
      }, r.weekdaysShort = function(u) {
        return i(c(), "weekdaysShort", "weekdays", 3, u);
      }, r.weekdaysMin = function(u) {
        return i(c(), "weekdaysMin", "weekdays", 2, u);
      };
    };
  });
})(Na);
var no = Na.exports;
const ao = /* @__PURE__ */ ot(no);
var Ra = { exports: {} };
(function(e, t) {
  (function(n, a) {
    e.exports = a();
  })(rt, function() {
    var n = "week", a = "year";
    return function(r, l, o) {
      var i = l.prototype;
      i.week = function(c) {
        if (c === void 0 && (c = null), c !== null)
          return this.add(7 * (c - this.week()), "day");
        var s = this.$locale().yearStart || 1;
        if (this.month() === 11 && this.date() > 25) {
          var p = o(this).startOf(a).add(1, a).date(s), u = o(this).endOf(n);
          if (p.isBefore(u))
            return 1;
        }
        var d = o(this).startOf(a).date(s).startOf(n).subtract(1, "millisecond"), m = this.diff(d, n, !0);
        return m < 0 ? o(this).startOf("week").week() : Math.ceil(m);
      }, i.weeks = function(c) {
        return c === void 0 && (c = null), this.week(c);
      };
    };
  });
})(Ra);
var ro = Ra.exports;
const oo = /* @__PURE__ */ ot(ro);
var Ta = { exports: {} };
(function(e, t) {
  (function(n, a) {
    e.exports = a();
  })(rt, function() {
    return function(n, a) {
      a.prototype.weekYear = function() {
        var r = this.month(), l = this.week(), o = this.year();
        return l === 1 && r === 11 ? o + 1 : r === 0 && l >= 52 ? o - 1 : o;
      };
    };
  });
})(Ta);
var lo = Ta.exports;
const io = /* @__PURE__ */ ot(lo);
var Ia = { exports: {} };
(function(e, t) {
  (function(n, a) {
    e.exports = a();
  })(rt, function() {
    var n = "month", a = "quarter";
    return function(r, l) {
      var o = l.prototype;
      o.quarter = function(s) {
        return this.$utils().u(s) ? Math.ceil((this.month() + 1) / 3) : this.month(this.month() % 3 + 3 * (s - 1));
      };
      var i = o.add;
      o.add = function(s, p) {
        return s = Number(s), this.$utils().p(p) === a ? this.add(3 * s, n) : i.bind(this)(s, p);
      };
      var c = o.startOf;
      o.startOf = function(s, p) {
        var u = this.$utils(), d = !!u.u(p) || p;
        if (u.p(s) === a) {
          var m = this.quarter() - 1;
          return d ? this.month(3 * m).startOf(n).startOf("day") : this.month(3 * m + 2).endOf(n).endOf("day");
        }
        return c.bind(this)(s, p);
      };
    };
  });
})(Ia);
var so = Ia.exports;
const uo = /* @__PURE__ */ ot(so);
var Ya = { exports: {} };
(function(e, t) {
  (function(n, a) {
    e.exports = a();
  })(rt, function() {
    return function(n, a) {
      var r = a.prototype, l = r.format;
      r.format = function(o) {
        var i = this, c = this.$locale();
        if (!this.isValid())
          return l.bind(this)(o);
        var s = this.$utils(), p = (o || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(u) {
          switch (u) {
            case "Q":
              return Math.ceil((i.$M + 1) / 3);
            case "Do":
              return c.ordinal(i.$D);
            case "gggg":
              return i.weekYear();
            case "GGGG":
              return i.isoWeekYear();
            case "wo":
              return c.ordinal(i.week(), "W");
            case "w":
            case "ww":
              return s.s(i.week(), u === "w" ? 1 : 2, "0");
            case "W":
            case "WW":
              return s.s(i.isoWeek(), u === "W" ? 1 : 2, "0");
            case "k":
            case "kk":
              return s.s(String(i.$H === 0 ? 24 : i.$H), u === "k" ? 1 : 2, "0");
            case "X":
              return Math.floor(i.$d.getTime() / 1e3);
            case "x":
              return i.$d.getTime();
            case "z":
              return "[" + i.offsetName() + "]";
            case "zzz":
              return "[" + i.offsetName("long") + "]";
            default:
              return u;
          }
        });
        return l.bind(this)(p);
      };
    };
  });
})(Ya);
var co = Ya.exports;
const fo = /* @__PURE__ */ ot(co);
var Ea = { exports: {} };
(function(e, t) {
  (function(n, a) {
    e.exports = a();
  })(rt, function() {
    var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, a = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, r = /\d\d/, l = /\d\d?/, o = /\d*[^-_:/,()\s\d]+/, i = {}, c = function(v) {
      return (v = +v) + (v > 68 ? 1900 : 2e3);
    }, s = function(v) {
      return function(f) {
        this[v] = +f;
      };
    }, p = [/[+-]\d\d:?(\d\d)?|Z/, function(v) {
      (this.zone || (this.zone = {})).offset = function(f) {
        if (!f || f === "Z")
          return 0;
        var $ = f.match(/([+-]|\d\d)/g), g = 60 * $[1] + (+$[2] || 0);
        return g === 0 ? 0 : $[0] === "+" ? -g : g;
      }(v);
    }], u = function(v) {
      var f = i[v];
      return f && (f.indexOf ? f : f.s.concat(f.f));
    }, d = function(v, f) {
      var $, g = i.meridiem;
      if (g) {
        for (var M = 1; M <= 24; M += 1)
          if (v.indexOf(g(M, 0, f)) > -1) {
            $ = M > 12;
            break;
          }
      } else
        $ = v === (f ? "pm" : "PM");
      return $;
    }, m = { A: [o, function(v) {
      this.afternoon = d(v, !1);
    }], a: [o, function(v) {
      this.afternoon = d(v, !0);
    }], S: [/\d/, function(v) {
      this.milliseconds = 100 * +v;
    }], SS: [r, function(v) {
      this.milliseconds = 10 * +v;
    }], SSS: [/\d{3}/, function(v) {
      this.milliseconds = +v;
    }], s: [l, s("seconds")], ss: [l, s("seconds")], m: [l, s("minutes")], mm: [l, s("minutes")], H: [l, s("hours")], h: [l, s("hours")], HH: [l, s("hours")], hh: [l, s("hours")], D: [l, s("day")], DD: [r, s("day")], Do: [o, function(v) {
      var f = i.ordinal, $ = v.match(/\d+/);
      if (this.day = $[0], f)
        for (var g = 1; g <= 31; g += 1)
          f(g).replace(/\[|\]/g, "") === v && (this.day = g);
    }], M: [l, s("month")], MM: [r, s("month")], MMM: [o, function(v) {
      var f = u("months"), $ = (u("monthsShort") || f.map(function(g) {
        return g.slice(0, 3);
      })).indexOf(v) + 1;
      if ($ < 1)
        throw new Error();
      this.month = $ % 12 || $;
    }], MMMM: [o, function(v) {
      var f = u("months").indexOf(v) + 1;
      if (f < 1)
        throw new Error();
      this.month = f % 12 || f;
    }], Y: [/[+-]?\d+/, s("year")], YY: [r, function(v) {
      this.year = c(v);
    }], YYYY: [/\d{4}/, s("year")], Z: p, ZZ: p };
    function y(v) {
      var f, $;
      f = v, $ = i && i.formats;
      for (var g = (v = f.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(q, A, T) {
        var _ = T && T.toUpperCase();
        return A || $[T] || n[T] || $[_].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(J, I, S) {
          return I || S.slice(1);
        });
      })).match(a), M = g.length, x = 0; x < M; x += 1) {
        var R = g[x], E = m[R], j = E && E[0], U = E && E[1];
        g[x] = U ? { regex: j, parser: U } : R.replace(/^\[|\]$/g, "");
      }
      return function(q) {
        for (var A = {}, T = 0, _ = 0; T < M; T += 1) {
          var J = g[T];
          if (typeof J == "string")
            _ += J.length;
          else {
            var I = J.regex, S = J.parser, D = q.slice(_), w = I.exec(D)[0];
            S.call(A, w), q = q.replace(w, "");
          }
        }
        return function(C) {
          var O = C.afternoon;
          if (O !== void 0) {
            var h = C.hours;
            O ? h < 12 && (C.hours += 12) : h === 12 && (C.hours = 0), delete C.afternoon;
          }
        }(A), A;
      };
    }
    return function(v, f, $) {
      $.p.customParseFormat = !0, v && v.parseTwoDigitYear && (c = v.parseTwoDigitYear);
      var g = f.prototype, M = g.parse;
      g.parse = function(x) {
        var R = x.date, E = x.utc, j = x.args;
        this.$u = E;
        var U = j[1];
        if (typeof U == "string") {
          var q = j[2] === !0, A = j[3] === !0, T = q || A, _ = j[2];
          A && (_ = j[2]), i = this.$locale(), !q && _ && (i = $.Ls[_]), this.$d = function(D, w, C) {
            try {
              if (["x", "X"].indexOf(w) > -1)
                return new Date((w === "X" ? 1e3 : 1) * D);
              var O = y(w)(D), h = O.year, P = O.month, V = O.day, W = O.hours, G = O.minutes, ee = O.seconds, ie = O.milliseconds, oe = O.zone, L = /* @__PURE__ */ new Date(), te = V || (h || P ? 1 : L.getDate()), Q = h || L.getFullYear(), X = 0;
              h && !P || (X = P > 0 ? P - 1 : L.getMonth());
              var se = W || 0, re = G || 0, be = ee || 0, K = ie || 0;
              return oe ? new Date(Date.UTC(Q, X, te, se, re, be, K + 60 * oe.offset * 1e3)) : C ? new Date(Date.UTC(Q, X, te, se, re, be, K)) : new Date(Q, X, te, se, re, be, K);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(R, U, E), this.init(), _ && _ !== !0 && (this.$L = this.locale(_).$L), T && R != this.format(U) && (this.$d = /* @__PURE__ */ new Date("")), i = {};
        } else if (U instanceof Array)
          for (var J = U.length, I = 1; I <= J; I += 1) {
            j[1] = U[I - 1];
            var S = $.apply(this, j);
            if (S.isValid()) {
              this.$d = S.$d, this.$L = S.$L, this.init();
              break;
            }
            I === J && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          M.call(this, x);
      };
    };
  });
})(Ea);
var vo = Ea.exports;
const po = /* @__PURE__ */ ot(vo);
pe.extend(po);
pe.extend(fo);
pe.extend(to);
pe.extend(ao);
pe.extend(oo);
pe.extend(io);
pe.extend(uo);
pe.extend((e, t) => {
  const n = t.prototype, a = n.format;
  n.format = function(l) {
    const o = (l || "").replace("Wo", "wo");
    return a.bind(this)(o);
  };
});
const go = {
  // ar_EG:
  // az_AZ:
  // bg_BG:
  bn_BD: "bn-bd",
  by_BY: "be",
  // ca_ES:
  // cs_CZ:
  // da_DK:
  // de_DE:
  // el_GR:
  en_GB: "en-gb",
  en_US: "en",
  // es_ES:
  // et_EE:
  // fa_IR:
  // fi_FI:
  fr_BE: "fr",
  fr_CA: "fr-ca",
  // fr_FR:
  // ga_IE:
  // gl_ES:
  // he_IL:
  // hi_IN:
  // hr_HR:
  // hu_HU:
  hy_AM: "hy-am",
  // id_ID:
  // is_IS:
  // it_IT:
  // ja_JP:
  // ka_GE:
  // kk_KZ:
  // km_KH:
  kmr_IQ: "ku",
  // kn_IN:
  // ko_KR:
  // ku_IQ: // previous ku in antd
  // lt_LT:
  // lv_LV:
  // mk_MK:
  // ml_IN:
  // mn_MN:
  // ms_MY:
  // nb_NO:
  // ne_NP:
  nl_BE: "nl-be",
  // nl_NL:
  // pl_PL:
  pt_BR: "pt-br",
  // pt_PT:
  // ro_RO:
  // ru_RU:
  // sk_SK:
  // sl_SI:
  // sr_RS:
  // sv_SE:
  // ta_IN:
  // th_TH:
  // tr_TR:
  // uk_UA:
  // ur_PK:
  // vi_VN:
  zh_CN: "zh-cn",
  zh_HK: "zh-hk",
  zh_TW: "zh-tw"
}, ut = (e) => go[e] || e.split("_")[0], aa = () => {
  Dr(!1, "Not match any format. Please help to fire a issue about this.");
}, ho = /\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|k{1,2}|S/g;
function ra(e, t, n) {
  const a = [...new Set(e.split(n))];
  let r = 0;
  for (let l = 0; l < a.length; l++) {
    const o = a[l];
    if (r += o.length, r > t)
      return o;
    r += n.length;
  }
}
const oa = (e, t) => {
  if (!e)
    return null;
  if (pe.isDayjs(e))
    return e;
  const n = t.matchAll(ho);
  let a = pe(e, t);
  if (n === null)
    return a;
  for (const r of n) {
    const l = r[0], o = r.index;
    if (l === "Q") {
      const i = e.slice(o - 1, o), c = ra(e, o, i).match(/\d+/)[0];
      a = a.quarter(parseInt(c));
    }
    if (l.toLowerCase() === "wo") {
      const i = e.slice(o - 1, o), c = ra(e, o, i).match(/\d+/)[0];
      a = a.week(parseInt(c));
    }
    l.toLowerCase() === "ww" && (a = a.week(parseInt(e.slice(o, o + l.length)))), l.toLowerCase() === "w" && (a = a.week(parseInt(e.slice(o, o + l.length + 1))));
  }
  return a;
}, Hl = {
  // get
  getNow: () => pe(),
  getFixedDate: (e) => pe(e, ["YYYY-M-DD", "YYYY-MM-DD"]),
  getEndDate: (e) => e.endOf("month"),
  getWeekDay: (e) => {
    const t = e.locale("en");
    return t.weekday() + t.localeData().firstDayOfWeek();
  },
  getYear: (e) => e.year(),
  getMonth: (e) => e.month(),
  getDate: (e) => e.date(),
  getHour: (e) => e.hour(),
  getMinute: (e) => e.minute(),
  getSecond: (e) => e.second(),
  // set
  addYear: (e, t) => e.add(t, "year"),
  addMonth: (e, t) => e.add(t, "month"),
  addDate: (e, t) => e.add(t, "day"),
  setYear: (e, t) => e.year(t),
  setMonth: (e, t) => e.month(t),
  setDate: (e, t) => e.date(t),
  setHour: (e, t) => e.hour(t),
  setMinute: (e, t) => e.minute(t),
  setSecond: (e, t) => e.second(t),
  // Compare
  isAfter: (e, t) => e.isAfter(t),
  isValidate: (e) => e.isValid(),
  locale: {
    getWeekFirstDay: (e) => pe().locale(ut(e)).localeData().firstDayOfWeek(),
    getWeekFirstDate: (e, t) => t.locale(ut(e)).weekday(0),
    getWeek: (e, t) => t.locale(ut(e)).week(),
    getShortWeekDays: (e) => pe().locale(ut(e)).localeData().weekdaysMin(),
    getShortMonths: (e) => pe().locale(ut(e)).localeData().monthsShort(),
    format: (e, t, n) => t.locale(ut(e)).format(n),
    parse: (e, t, n) => {
      const a = ut(e);
      for (let r = 0; r < n.length; r += 1) {
        const l = n[r], o = t;
        if (l.includes("wo") || l.includes("Wo")) {
          const c = o.split("-")[0], s = o.split("-")[1], p = pe(c, "YYYY").startOf("year").locale(a);
          for (let u = 0; u <= 52; u += 1) {
            const d = p.add(u, "week");
            if (d.format("Wo") === s)
              return d;
          }
          return aa(), null;
        }
        const i = pe(o, l, !0).locale(a);
        if (i.isValid())
          return i;
      }
      return t || aa(), null;
    }
  },
  toDate: (e, t) => Array.isArray(e) ? e.map((n) => oa(n, t)) : oa(e, t),
  toString: (e, t) => Array.isArray(e) ? e.map((n) => pe.isDayjs(n) ? n.format(t) : n) : pe.isDayjs(e) ? e.format(t) : e
};
function fe(e) {
  const t = Vr();
  return Y(Y({}, e), t);
}
const Va = Symbol("PanelContextProps"), $n = (e) => {
  $a(Va, e);
}, Ae = () => ya(Va, {}), Ot = {
  visibility: "hidden"
};
function lt(e, t) {
  let {
    slots: n
  } = t;
  var a;
  const r = fe(e), {
    prefixCls: l,
    prevIcon: o = "‹",
    nextIcon: i = "›",
    superPrevIcon: c = "«",
    superNextIcon: s = "»",
    onSuperPrev: p,
    onSuperNext: u,
    onPrev: d,
    onNext: m
  } = r, {
    hideNextBtn: y,
    hidePrevBtn: v
  } = Ae();
  return b("div", {
    class: l
  }, [p && b("button", {
    type: "button",
    onClick: p,
    tabindex: -1,
    class: `${l}-super-prev-btn`,
    style: v.value ? Ot : {}
  }, [c]), d && b("button", {
    type: "button",
    onClick: d,
    tabindex: -1,
    class: `${l}-prev-btn`,
    style: v.value ? Ot : {}
  }, [o]), b("div", {
    class: `${l}-view`
  }, [(a = n.default) === null || a === void 0 ? void 0 : a.call(n)]), m && b("button", {
    type: "button",
    onClick: m,
    tabindex: -1,
    class: `${l}-next-btn`,
    style: y.value ? Ot : {}
  }, [i]), u && b("button", {
    type: "button",
    onClick: u,
    tabindex: -1,
    class: `${l}-super-next-btn`,
    style: y.value ? Ot : {}
  }, [s])]);
}
lt.displayName = "Header";
lt.inheritAttrs = !1;
function yn(e) {
  const t = fe(e), {
    prefixCls: n,
    generateConfig: a,
    viewDate: r,
    onPrevDecades: l,
    onNextDecades: o
  } = t, {
    hideHeader: i
  } = Ae();
  if (i)
    return null;
  const c = `${n}-header`, s = a.getYear(r), p = Math.floor(s / ze) * ze, u = p + ze - 1;
  return b(lt, N(N({}, t), {}, {
    prefixCls: c,
    onSuperPrev: l,
    onSuperNext: o
  }), {
    default: () => [p, ka("-"), u]
  });
}
yn.displayName = "DecadeHeader";
yn.inheritAttrs = !1;
function Ha(e, t, n, a, r) {
  let l = e.setHour(t, n);
  return l = e.setMinute(l, a), l = e.setSecond(l, r), l;
}
function Yt(e, t, n) {
  if (!n)
    return t;
  let a = t;
  return a = e.setHour(a, e.getHour(n)), a = e.setMinute(a, e.getMinute(n)), a = e.setSecond(a, e.getSecond(n)), a;
}
function mo(e, t, n, a, r, l) {
  const o = Math.floor(e / a) * a;
  if (o < e)
    return [o, 60 - r, 60 - l];
  const i = Math.floor(t / r) * r;
  if (i < t)
    return [o, i, 60 - l];
  const c = Math.floor(n / l) * l;
  return [o, i, c];
}
function bo(e, t) {
  const n = e.getYear(t), a = e.getMonth(t) + 1, r = e.getEndDate(e.getFixedDate(`${n}-${a}-01`)), l = e.getDate(r), o = a < 10 ? `0${a}` : `${a}`;
  return `${n}-${o}-${l}`;
}
function dt(e) {
  const {
    prefixCls: t,
    disabledDate: n,
    onSelect: a,
    picker: r,
    rowNum: l,
    colNum: o,
    prefixColumn: i,
    rowClassName: c,
    baseDate: s,
    getCellClassName: p,
    getCellText: u,
    getCellNode: d,
    getCellDate: m,
    generateConfig: y,
    titleCell: v,
    headerCells: f
  } = fe(e), {
    onDateMouseenter: $,
    onDateMouseleave: g,
    mode: M
  } = Ae(), x = `${t}-cell`, R = [];
  for (let E = 0; E < l; E += 1) {
    const j = [];
    let U;
    for (let q = 0; q < o; q += 1) {
      const A = E * o + q, T = m(s, A), _ = pn({
        cellDate: T,
        mode: M.value,
        disabledDate: n,
        generateConfig: y
      });
      q === 0 && (U = T, i && j.push(i(U)));
      const J = v && v(T);
      j.push(b("td", {
        key: q,
        title: J,
        class: ue(x, Y({
          [`${x}-disabled`]: _,
          [`${x}-start`]: u(T) === 1 || r === "year" && Number(J) % 10 === 0,
          [`${x}-end`]: J === bo(y, T) || r === "year" && Number(J) % 10 === 9
        }, p(T))),
        onClick: (I) => {
          I.stopPropagation(), _ || a(T);
        },
        onMouseenter: () => {
          !_ && $ && $(T);
        },
        onMouseleave: () => {
          !_ && g && g(T);
        }
      }, [d ? d(T) : b("div", {
        class: `${x}-inner`
      }, [u(T)])]));
    }
    R.push(b("tr", {
      key: E,
      class: c && c(U)
    }, [j]));
  }
  return b("div", {
    class: `${t}-body`
  }, [b("table", {
    class: `${t}-content`
  }, [f && b("thead", null, [b("tr", null, [f])]), b("tbody", null, [R])])]);
}
dt.displayName = "PanelBody";
dt.inheritAttrs = !1;
const dn = 3, la = 4;
function kn(e) {
  const t = fe(e), n = Ie - 1, {
    prefixCls: a,
    viewDate: r,
    generateConfig: l
  } = t, o = `${a}-cell`, i = l.getYear(r), c = Math.floor(i / Ie) * Ie, s = Math.floor(i / ze) * ze, p = s + ze - 1, u = l.setYear(r, s - Math.ceil((dn * la * Ie - ze) / 2)), d = (m) => {
    const y = l.getYear(m), v = y + n;
    return {
      [`${o}-in-view`]: s <= y && v <= p,
      [`${o}-selected`]: y === c
    };
  };
  return b(dt, N(N({}, t), {}, {
    rowNum: la,
    colNum: dn,
    baseDate: u,
    getCellText: (m) => {
      const y = l.getYear(m);
      return `${y}-${y + n}`;
    },
    getCellClassName: d,
    getCellDate: (m, y) => l.addYear(m, y * Ie)
  }), null);
}
kn.displayName = "DecadeBody";
kn.inheritAttrs = !1;
const Nt = /* @__PURE__ */ new Map();
function wo(e, t) {
  let n;
  function a() {
    Pr(e) ? t() : n = qe(() => {
      a();
    });
  }
  return a(), () => {
    qe.cancel(n);
  };
}
function fn(e, t, n) {
  if (Nt.get(e) && qe.cancel(Nt.get(e)), n <= 0) {
    Nt.set(e, qe(() => {
      e.scrollTop = t;
    }));
    return;
  }
  const r = (t - e.scrollTop) / n * 10;
  Nt.set(e, qe(() => {
    e.scrollTop += r, e.scrollTop !== t && fn(e, t, n - 10);
  }));
}
function mt(e, t) {
  let {
    onLeftRight: n,
    onCtrlLeftRight: a,
    onUpDown: r,
    onPageUpDown: l,
    onEnter: o
  } = t;
  const {
    which: i,
    ctrlKey: c,
    metaKey: s
  } = e;
  switch (i) {
    case ce.LEFT:
      if (c || s) {
        if (a)
          return a(-1), !0;
      } else if (n)
        return n(-1), !0;
      break;
    case ce.RIGHT:
      if (c || s) {
        if (a)
          return a(1), !0;
      } else if (n)
        return n(1), !0;
      break;
    case ce.UP:
      if (r)
        return r(-1), !0;
      break;
    case ce.DOWN:
      if (r)
        return r(1), !0;
      break;
    case ce.PAGE_UP:
      if (l)
        return l(-1), !0;
      break;
    case ce.PAGE_DOWN:
      if (l)
        return l(1), !0;
      break;
    case ce.ENTER:
      if (o)
        return o(), !0;
      break;
  }
  return !1;
}
function Aa(e, t, n, a) {
  let r = e;
  if (!r)
    switch (t) {
      case "time":
        r = a ? "hh:mm:ss a" : "HH:mm:ss";
        break;
      case "week":
        r = "gggg-wo";
        break;
      case "month":
        r = "YYYY-MM";
        break;
      case "quarter":
        r = "YYYY-[Q]Q";
        break;
      case "year":
        r = "YYYY";
        break;
      default:
        r = n ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD";
    }
  return r;
}
function _a(e, t, n) {
  const a = e === "time" ? 8 : 10, r = typeof t == "function" ? t(n.getNow()).length : t.length;
  return Math.max(a, r) + 2;
}
let yt = null;
const Rt = /* @__PURE__ */ new Set();
function Co(e) {
  return !yt && typeof window < "u" && window.addEventListener && (yt = (t) => {
    [...Rt].forEach((n) => {
      n(t);
    });
  }, window.addEventListener("mousedown", yt)), Rt.add(e), () => {
    Rt.delete(e), Rt.size === 0 && (window.removeEventListener("mousedown", yt), yt = null);
  };
}
function $o(e) {
  var t;
  const n = e.target;
  return e.composed && n.shadowRoot && ((t = e.composedPath) === null || t === void 0 ? void 0 : t.call(e)[0]) || n;
}
const yo = (e) => e === "month" || e === "date" ? "year" : e, ko = (e) => e === "date" ? "month" : e, xo = (e) => e === "month" || e === "date" ? "quarter" : e, So = (e) => e === "date" ? "week" : e, Do = {
  year: yo,
  month: ko,
  quarter: xo,
  week: So,
  time: null,
  date: null
};
function Ba(e, t) {
  return process.env.NODE_ENV === "test" ? !1 : e.some((n) => n && n.contains(t));
}
const Ie = 10, ze = Ie * 10;
function xn(e) {
  const t = fe(e), {
    prefixCls: n,
    onViewDateChange: a,
    generateConfig: r,
    viewDate: l,
    operationRef: o,
    onSelect: i,
    onPanelChange: c
  } = t, s = `${n}-decade-panel`;
  o.value = {
    onKeydown: (d) => mt(d, {
      onLeftRight: (m) => {
        i(r.addYear(l, m * Ie), "key");
      },
      onCtrlLeftRight: (m) => {
        i(r.addYear(l, m * ze), "key");
      },
      onUpDown: (m) => {
        i(r.addYear(l, m * Ie * dn), "key");
      },
      onEnter: () => {
        c("year", l);
      }
    })
  };
  const p = (d) => {
    const m = r.addYear(l, d * ze);
    a(m), c(null, m);
  }, u = (d) => {
    i(d, "mouse"), c("year", d);
  };
  return b("div", {
    class: s
  }, [b(yn, N(N({}, t), {}, {
    prefixCls: n,
    onPrevDecades: () => {
      p(-1);
    },
    onNextDecades: () => {
      p(1);
    }
  }), null), b(kn, N(N({}, t), {}, {
    prefixCls: n,
    onSelect: u
  }), null)]);
}
xn.displayName = "DecadePanel";
xn.inheritAttrs = !1;
const Et = 7;
function ft(e, t) {
  if (!e && !t)
    return !0;
  if (!e || !t)
    return !1;
}
function Po(e, t, n) {
  const a = ft(t, n);
  if (typeof a == "boolean")
    return a;
  const r = Math.floor(e.getYear(t) / 10), l = Math.floor(e.getYear(n) / 10);
  return r === l;
}
function Wt(e, t, n) {
  const a = ft(t, n);
  return typeof a == "boolean" ? a : e.getYear(t) === e.getYear(n);
}
function vn(e, t) {
  return Math.floor(e.getMonth(t) / 3) + 1;
}
function Wa(e, t, n) {
  const a = ft(t, n);
  return typeof a == "boolean" ? a : Wt(e, t, n) && vn(e, t) === vn(e, n);
}
function Sn(e, t, n) {
  const a = ft(t, n);
  return typeof a == "boolean" ? a : Wt(e, t, n) && e.getMonth(t) === e.getMonth(n);
}
function Ue(e, t, n) {
  const a = ft(t, n);
  return typeof a == "boolean" ? a : e.getYear(t) === e.getYear(n) && e.getMonth(t) === e.getMonth(n) && e.getDate(t) === e.getDate(n);
}
function Mo(e, t, n) {
  const a = ft(t, n);
  return typeof a == "boolean" ? a : e.getHour(t) === e.getHour(n) && e.getMinute(t) === e.getMinute(n) && e.getSecond(t) === e.getSecond(n);
}
function Fa(e, t, n, a) {
  const r = ft(n, a);
  return typeof r == "boolean" ? r : e.locale.getWeek(t, n) === e.locale.getWeek(t, a);
}
function ht(e, t, n) {
  return Ue(e, t, n) && Mo(e, t, n);
}
function Tt(e, t, n, a) {
  return !t || !n || !a ? !1 : !Ue(e, t, a) && !Ue(e, n, a) && e.isAfter(a, t) && e.isAfter(n, a);
}
function Oo(e, t, n) {
  const a = t.locale.getWeekFirstDay(e), r = t.setDate(n, 1), l = t.getWeekDay(r);
  let o = t.addDate(r, a - l);
  return t.getMonth(o) === t.getMonth(n) && t.getDate(o) > 1 && (o = t.addDate(o, -7)), o;
}
function xt(e, t, n) {
  let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
  switch (t) {
    case "year":
      return n.addYear(e, a * 10);
    case "quarter":
    case "month":
      return n.addYear(e, a);
    default:
      return n.addMonth(e, a);
  }
}
function we(e, t) {
  let {
    generateConfig: n,
    locale: a,
    format: r
  } = t;
  return typeof r == "function" ? r(e) : n.locale.format(a.locale, e, r);
}
function La(e, t) {
  let {
    generateConfig: n,
    locale: a,
    formatList: r
  } = t;
  return !e || typeof r[0] == "function" ? null : n.locale.parse(a.locale, e, r);
}
function pn(e) {
  let {
    cellDate: t,
    mode: n,
    disabledDate: a,
    generateConfig: r
  } = e;
  if (!a)
    return !1;
  const l = (o, i, c) => {
    let s = i;
    for (; s <= c; ) {
      let p;
      switch (o) {
        case "date": {
          if (p = r.setDate(t, s), !a(p))
            return !1;
          break;
        }
        case "month": {
          if (p = r.setMonth(t, s), !pn({
            cellDate: p,
            mode: "month",
            generateConfig: r,
            disabledDate: a
          }))
            return !1;
          break;
        }
        case "year": {
          if (p = r.setYear(t, s), !pn({
            cellDate: p,
            mode: "year",
            generateConfig: r,
            disabledDate: a
          }))
            return !1;
          break;
        }
      }
      s += 1;
    }
    return !0;
  };
  switch (n) {
    case "date":
    case "week":
      return a(t);
    case "month": {
      const i = r.getDate(r.getEndDate(t));
      return l("date", 1, i);
    }
    case "quarter": {
      const o = Math.floor(r.getMonth(t) / 3) * 3, i = o + 2;
      return l("month", o, i);
    }
    case "year":
      return l("month", 0, 11);
    case "decade": {
      const o = r.getYear(t), i = Math.floor(o / Ie) * Ie, c = i + Ie - 1;
      return l("year", i, c);
    }
  }
}
function Dn(e) {
  const t = fe(e), {
    hideHeader: n
  } = Ae();
  if (n.value)
    return null;
  const {
    prefixCls: a,
    generateConfig: r,
    locale: l,
    value: o,
    format: i
  } = t, c = `${a}-header`;
  return b(lt, {
    prefixCls: c
  }, {
    default: () => [o ? we(o, {
      locale: l,
      format: i,
      generateConfig: r
    }) : " "]
  });
}
Dn.displayName = "TimeHeader";
Dn.inheritAttrs = !1;
const It = Ke({
  name: "TimeUnitColumn",
  props: ["prefixCls", "units", "onSelect", "value", "active", "hideDisabledOptions"],
  setup(e) {
    const {
      open: t
    } = Ae(), n = Ve(null), a = z(/* @__PURE__ */ new Map()), r = z();
    return ge(() => e.value, () => {
      const l = a.value.get(e.value);
      l && t.value !== !1 && fn(n.value, l.offsetTop, 120);
    }), Cn(() => {
      var l;
      (l = r.value) === null || l === void 0 || l.call(r);
    }), ge(t, () => {
      var l;
      (l = r.value) === null || l === void 0 || l.call(r), xa(() => {
        if (t.value) {
          const o = a.value.get(e.value);
          o && (r.value = wo(o, () => {
            fn(n.value, o.offsetTop, 0);
          }));
        }
      });
    }, {
      immediate: !0,
      flush: "post"
    }), () => {
      const {
        prefixCls: l,
        units: o,
        onSelect: i,
        value: c,
        active: s,
        hideDisabledOptions: p
      } = e, u = `${l}-cell`;
      return b("ul", {
        class: ue(`${l}-column`, {
          [`${l}-column-active`]: s
        }),
        ref: n,
        style: {
          position: "relative"
        }
      }, [o.map((d) => p && d.disabled ? null : b("li", {
        key: d.value,
        ref: (m) => {
          a.value.set(d.value, m);
        },
        class: ue(u, {
          [`${u}-disabled`]: d.disabled,
          [`${u}-selected`]: c === d.value
        }),
        onClick: () => {
          d.disabled || i(d.value);
        }
      }, [b("div", {
        class: `${u}-inner`
      }, [d.label])]))]);
    };
  }
});
function ja(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0", a = String(e);
  for (; a.length < t; )
    a = `${n}${e}`;
  return a;
}
const No = function() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return t;
};
function za(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function Ua(e) {
  const t = {};
  return Object.keys(e).forEach((n) => {
    (n.startsWith("data-") || n.startsWith("aria-") || n === "role" || n === "name") && !n.startsWith("data-__") && (t[n] = e[n]);
  }), t;
}
function Z(e, t) {
  return e ? e[t] : null;
}
function Me(e, t, n) {
  const a = [Z(e, 0), Z(e, 1)];
  return a[n] = typeof t == "function" ? t(a[n]) : t, !a[0] && !a[1] ? null : a;
}
function rn(e, t, n, a) {
  const r = [];
  for (let l = e; l <= t; l += n)
    r.push({
      label: ja(l, 2),
      value: l,
      disabled: (a || []).includes(l)
    });
  return r;
}
const Ro = Ke({
  compatConfig: {
    MODE: 3
  },
  name: "TimeBody",
  inheritAttrs: !1,
  props: ["generateConfig", "prefixCls", "operationRef", "activeColumnIndex", "value", "showHour", "showMinute", "showSecond", "use12Hours", "hourStep", "minuteStep", "secondStep", "disabledHours", "disabledMinutes", "disabledSeconds", "disabledTime", "hideDisabledOptions", "onSelect"],
  setup(e) {
    const t = F(() => e.value ? e.generateConfig.getHour(e.value) : -1), n = F(() => e.use12Hours ? t.value >= 12 : !1), a = F(() => e.use12Hours ? t.value % 12 : t.value), r = F(() => e.value ? e.generateConfig.getMinute(e.value) : -1), l = F(() => e.value ? e.generateConfig.getSecond(e.value) : -1), o = z(e.generateConfig.getNow()), i = z(), c = z(), s = z();
    Hr(() => {
      o.value = e.generateConfig.getNow();
    }), Bt(() => {
      if (e.disabledTime) {
        const f = e.disabledTime(o);
        [i.value, c.value, s.value] = [f.disabledHours, f.disabledMinutes, f.disabledSeconds];
      } else
        [i.value, c.value, s.value] = [e.disabledHours, e.disabledMinutes, e.disabledSeconds];
    });
    const p = (f, $, g, M) => {
      let x = e.value || e.generateConfig.getNow();
      const R = Math.max(0, $), E = Math.max(0, g), j = Math.max(0, M);
      return x = Ha(e.generateConfig, x, !e.use12Hours || !f ? R : R + 12, E, j), x;
    }, u = F(() => {
      var f;
      return rn(0, 23, (f = e.hourStep) !== null && f !== void 0 ? f : 1, i.value && i.value());
    }), d = F(() => {
      if (!e.use12Hours)
        return [!1, !1];
      const f = [!0, !0];
      return u.value.forEach(($) => {
        let {
          disabled: g,
          value: M
        } = $;
        g || (M >= 12 ? f[1] = !1 : f[0] = !1);
      }), f;
    }), m = F(() => e.use12Hours ? u.value.filter(n.value ? (f) => f.value >= 12 : (f) => f.value < 12).map((f) => {
      const $ = f.value % 12, g = $ === 0 ? "12" : ja($, 2);
      return Y(Y({}, f), {
        label: g,
        value: $
      });
    }) : u.value), y = F(() => {
      var f;
      return rn(0, 59, (f = e.minuteStep) !== null && f !== void 0 ? f : 1, c.value && c.value(t.value));
    }), v = F(() => {
      var f;
      return rn(0, 59, (f = e.secondStep) !== null && f !== void 0 ? f : 1, s.value && s.value(t.value, r.value));
    });
    return () => {
      const {
        prefixCls: f,
        operationRef: $,
        activeColumnIndex: g,
        showHour: M,
        showMinute: x,
        showSecond: R,
        use12Hours: E,
        hideDisabledOptions: j,
        onSelect: U
      } = e, q = [], A = `${f}-content`, T = `${f}-time-panel`;
      $.value = {
        onUpDown: (I) => {
          const S = q[g];
          if (S) {
            const D = S.units.findIndex((C) => C.value === S.value), w = S.units.length;
            for (let C = 1; C < w; C += 1) {
              const O = S.units[(D + I * C + w) % w];
              if (O.disabled !== !0) {
                S.onSelect(O.value);
                break;
              }
            }
          }
        }
      };
      function _(I, S, D, w, C) {
        I !== !1 && q.push({
          node: Mr(S, {
            prefixCls: T,
            value: D,
            active: g === q.length,
            onSelect: C,
            units: w,
            hideDisabledOptions: j
          }),
          onSelect: C,
          value: D,
          units: w
        });
      }
      _(M, b(It, {
        key: "hour"
      }, null), a.value, m.value, (I) => {
        U(p(n.value, I, r.value, l.value), "mouse");
      }), _(x, b(It, {
        key: "minute"
      }, null), r.value, y.value, (I) => {
        U(p(n.value, a.value, I, l.value), "mouse");
      }), _(R, b(It, {
        key: "second"
      }, null), l.value, v.value, (I) => {
        U(p(n.value, a.value, r.value, I), "mouse");
      });
      let J = -1;
      return typeof n.value == "boolean" && (J = n.value ? 1 : 0), _(E === !0, b(It, {
        key: "12hours"
      }, null), J, [{
        label: "AM",
        value: 0,
        disabled: d.value[0]
      }, {
        label: "PM",
        value: 1,
        disabled: d.value[1]
      }], (I) => {
        U(p(!!I, a.value, r.value, l.value), "mouse");
      }), b("div", {
        class: A
      }, [q.map((I) => {
        let {
          node: S
        } = I;
        return S;
      })]);
    };
  }
}), To = (e) => e.filter((t) => t !== !1).length;
function Ft(e) {
  const t = fe(e), {
    generateConfig: n,
    format: a = "HH:mm:ss",
    prefixCls: r,
    active: l,
    operationRef: o,
    showHour: i,
    showMinute: c,
    showSecond: s,
    use12Hours: p = !1,
    onSelect: u,
    value: d
  } = t, m = `${r}-time-panel`, y = z(), v = z(-1), f = To([i, c, s, p]);
  return o.value = {
    onKeydown: ($) => mt($, {
      onLeftRight: (g) => {
        v.value = (v.value + g + f) % f;
      },
      onUpDown: (g) => {
        v.value === -1 ? v.value = 0 : y.value && y.value.onUpDown(g);
      },
      onEnter: () => {
        u(d || n.getNow(), "key"), v.value = -1;
      }
    }),
    onBlur: () => {
      v.value = -1;
    }
  }, b("div", {
    class: ue(m, {
      [`${m}-active`]: l
    })
  }, [b(Dn, N(N({}, t), {}, {
    format: a,
    prefixCls: r
  }), null), b(Ro, N(N({}, t), {}, {
    prefixCls: r,
    activeColumnIndex: v.value,
    operationRef: y
  }), null)]);
}
Ft.displayName = "TimePanel";
Ft.inheritAttrs = !1;
function Lt(e) {
  let {
    cellPrefixCls: t,
    generateConfig: n,
    rangedValue: a,
    hoverRangedValue: r,
    isInView: l,
    isSameCell: o,
    offsetCell: i,
    today: c,
    value: s
  } = e;
  function p(u) {
    const d = i(u, -1), m = i(u, 1), y = Z(a, 0), v = Z(a, 1), f = Z(r, 0), $ = Z(r, 1), g = Tt(n, f, $, u);
    function M(q) {
      return o(y, q);
    }
    function x(q) {
      return o(v, q);
    }
    const R = o(f, u), E = o($, u), j = (g || E) && (!l(d) || x(d)), U = (g || R) && (!l(m) || M(m));
    return {
      // In view
      [`${t}-in-view`]: l(u),
      // Range
      [`${t}-in-range`]: Tt(n, y, v, u),
      [`${t}-range-start`]: M(u),
      [`${t}-range-end`]: x(u),
      [`${t}-range-start-single`]: M(u) && !v,
      [`${t}-range-end-single`]: x(u) && !y,
      [`${t}-range-start-near-hover`]: M(u) && (o(d, f) || Tt(n, f, $, d)),
      [`${t}-range-end-near-hover`]: x(u) && (o(m, $) || Tt(n, f, $, m)),
      // Range Hover
      [`${t}-range-hover`]: g,
      [`${t}-range-hover-start`]: R,
      [`${t}-range-hover-end`]: E,
      // Range Edge
      [`${t}-range-hover-edge-start`]: j,
      [`${t}-range-hover-edge-end`]: U,
      [`${t}-range-hover-edge-start-near-range`]: j && o(d, v),
      [`${t}-range-hover-edge-end-near-range`]: U && o(m, y),
      // Others
      [`${t}-today`]: o(c, u),
      [`${t}-selected`]: o(s, u)
    };
  }
  return p;
}
const qa = Symbol("RangeContextProps"), Io = (e) => {
  $a(qa, e);
}, St = () => ya(qa, {
  rangedValue: z(),
  hoverRangedValue: z(),
  inRange: z(),
  panelPosition: z()
}), Yo = Ke({
  compatConfig: {
    MODE: 3
  },
  name: "PanelContextProvider",
  inheritAttrs: !1,
  props: {
    value: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = {
      rangedValue: z(e.value.rangedValue),
      hoverRangedValue: z(e.value.hoverRangedValue),
      inRange: z(e.value.inRange),
      panelPosition: z(e.value.panelPosition)
    };
    return Io(a), ge(() => e.value, () => {
      Object.keys(e.value).forEach((r) => {
        a[r] && (a[r].value = e.value[r]);
      });
    }), () => {
      var r;
      return (r = n.default) === null || r === void 0 ? void 0 : r.call(n);
    };
  }
});
function jt(e) {
  const t = fe(e), {
    prefixCls: n,
    generateConfig: a,
    prefixColumn: r,
    locale: l,
    rowCount: o,
    viewDate: i,
    value: c,
    dateRender: s
  } = t, {
    rangedValue: p,
    hoverRangedValue: u
  } = St(), d = Oo(l.locale, a, i), m = `${n}-cell`, y = a.locale.getWeekFirstDay(l.locale), v = a.getNow(), f = [], $ = l.shortWeekDays || (a.locale.getShortWeekDays ? a.locale.getShortWeekDays(l.locale) : []);
  r && f.push(b("th", {
    key: "empty",
    "aria-label": "empty cell"
  }, null));
  for (let x = 0; x < Et; x += 1)
    f.push(b("th", {
      key: x
    }, [$[(x + y) % Et]]));
  const g = Lt({
    cellPrefixCls: m,
    today: v,
    value: c,
    generateConfig: a,
    rangedValue: r ? null : p.value,
    hoverRangedValue: r ? null : u.value,
    isSameCell: (x, R) => Ue(a, x, R),
    isInView: (x) => Sn(a, x, i),
    offsetCell: (x, R) => a.addDate(x, R)
  }), M = s ? (x) => s({
    current: x,
    today: v
  }) : void 0;
  return b(dt, N(N({}, t), {}, {
    rowNum: o,
    colNum: Et,
    baseDate: d,
    getCellNode: M,
    getCellText: a.getDate,
    getCellClassName: g,
    getCellDate: a.addDate,
    titleCell: (x) => we(x, {
      locale: l,
      format: "YYYY-MM-DD",
      generateConfig: a
    }),
    headerCells: f
  }), null);
}
jt.displayName = "DateBody";
jt.inheritAttrs = !1;
jt.props = [
  "prefixCls",
  "generateConfig",
  "value?",
  "viewDate",
  "locale",
  "rowCount",
  "onSelect",
  "dateRender?",
  "disabledDate?",
  // Used for week panel
  "prefixColumn?",
  "rowClassName?"
];
function Pn(e) {
  const t = fe(e), {
    prefixCls: n,
    generateConfig: a,
    locale: r,
    viewDate: l,
    onNextMonth: o,
    onPrevMonth: i,
    onNextYear: c,
    onPrevYear: s,
    onYearClick: p,
    onMonthClick: u
  } = t, {
    hideHeader: d
  } = Ae();
  if (d.value)
    return null;
  const m = `${n}-header`, y = r.shortMonths || (a.locale.getShortMonths ? a.locale.getShortMonths(r.locale) : []), v = a.getMonth(l), f = b("button", {
    type: "button",
    key: "year",
    onClick: p,
    tabindex: -1,
    class: `${n}-year-btn`
  }, [we(l, {
    locale: r,
    format: r.yearFormat,
    generateConfig: a
  })]), $ = b("button", {
    type: "button",
    key: "month",
    onClick: u,
    tabindex: -1,
    class: `${n}-month-btn`
  }, [r.monthFormat ? we(l, {
    locale: r,
    format: r.monthFormat,
    generateConfig: a
  }) : y[v]]), g = r.monthBeforeYear ? [$, f] : [f, $];
  return b(lt, N(N({}, t), {}, {
    prefixCls: m,
    onSuperPrev: s,
    onPrev: i,
    onNext: o,
    onSuperNext: c
  }), {
    default: () => [g]
  });
}
Pn.displayName = "DateHeader";
Pn.inheritAttrs = !1;
const Eo = 6;
function Dt(e) {
  const t = fe(e), {
    prefixCls: n,
    panelName: a = "date",
    keyboardConfig: r,
    active: l,
    operationRef: o,
    generateConfig: i,
    value: c,
    viewDate: s,
    onViewDateChange: p,
    onPanelChange: u,
    onSelect: d
  } = t, m = `${n}-${a}-panel`;
  o.value = {
    onKeydown: (f) => mt(f, Y({
      onLeftRight: ($) => {
        d(i.addDate(c || s, $), "key");
      },
      onCtrlLeftRight: ($) => {
        d(i.addYear(c || s, $), "key");
      },
      onUpDown: ($) => {
        d(i.addDate(c || s, $ * Et), "key");
      },
      onPageUpDown: ($) => {
        d(i.addMonth(c || s, $), "key");
      }
    }, r))
  };
  const y = (f) => {
    const $ = i.addYear(s, f);
    p($), u(null, $);
  }, v = (f) => {
    const $ = i.addMonth(s, f);
    p($), u(null, $);
  };
  return b("div", {
    class: ue(m, {
      [`${m}-active`]: l
    })
  }, [b(Pn, N(N({}, t), {}, {
    prefixCls: n,
    value: c,
    viewDate: s,
    onPrevYear: () => {
      y(-1);
    },
    onNextYear: () => {
      y(1);
    },
    onPrevMonth: () => {
      v(-1);
    },
    onNextMonth: () => {
      v(1);
    },
    onMonthClick: () => {
      u("month", s);
    },
    onYearClick: () => {
      u("year", s);
    }
  }), null), b(jt, N(N({}, t), {}, {
    onSelect: (f) => d(f, "mouse"),
    prefixCls: n,
    value: c,
    viewDate: s,
    rowCount: Eo
  }), null)]);
}
Dt.displayName = "DatePanel";
Dt.inheritAttrs = !1;
const ia = No("date", "time");
function Mn(e) {
  const t = fe(e), {
    prefixCls: n,
    operationRef: a,
    generateConfig: r,
    value: l,
    defaultValue: o,
    disabledTime: i,
    showTime: c,
    onSelect: s
  } = t, p = `${n}-datetime-panel`, u = z(null), d = z({}), m = z({}), y = typeof c == "object" ? Y({}, c) : {};
  function v(M) {
    const x = ia.indexOf(u.value) + M;
    return ia[x] || null;
  }
  const f = (M) => {
    m.value.onBlur && m.value.onBlur(M), u.value = null;
  };
  a.value = {
    onKeydown: (M) => {
      if (M.which === ce.TAB) {
        const x = v(M.shiftKey ? -1 : 1);
        return u.value = x, x && M.preventDefault(), !0;
      }
      if (u.value) {
        const x = u.value === "date" ? d : m;
        return x.value && x.value.onKeydown && x.value.onKeydown(M), !0;
      }
      return [ce.LEFT, ce.RIGHT, ce.UP, ce.DOWN].includes(M.which) ? (u.value = "date", !0) : !1;
    },
    onBlur: f,
    onClose: f
  };
  const $ = (M, x) => {
    let R = M;
    x === "date" && !l && y.defaultValue ? (R = r.setHour(R, r.getHour(y.defaultValue)), R = r.setMinute(R, r.getMinute(y.defaultValue)), R = r.setSecond(R, r.getSecond(y.defaultValue))) : x === "time" && !l && o && (R = r.setYear(R, r.getYear(o)), R = r.setMonth(R, r.getMonth(o)), R = r.setDate(R, r.getDate(o))), s && s(R, "mouse");
  }, g = i ? i(l || null) : {};
  return b("div", {
    class: ue(p, {
      [`${p}-active`]: u.value
    })
  }, [b(Dt, N(N({}, t), {}, {
    operationRef: d,
    active: u.value === "date",
    onSelect: (M) => {
      $(Yt(r, M, !l && typeof c == "object" ? c.defaultValue : null), "date");
    }
  }), null), b(Ft, N(N(N(N({}, t), {}, {
    format: void 0
  }, y), g), {}, {
    disabledTime: null,
    defaultValue: void 0,
    operationRef: m,
    active: u.value === "time",
    onSelect: (M) => {
      $(M, "time");
    }
  }), null)]);
}
Mn.displayName = "DatetimePanel";
Mn.inheritAttrs = !1;
function On(e) {
  const t = fe(e), {
    prefixCls: n,
    generateConfig: a,
    locale: r,
    value: l
  } = t, o = `${n}-cell`, i = (p) => b("td", {
    key: "week",
    class: ue(o, `${o}-week`)
  }, [a.locale.getWeek(r.locale, p)]), c = `${n}-week-panel-row`, s = (p) => ue(c, {
    [`${c}-selected`]: Fa(a, r.locale, l, p)
  });
  return b(Dt, N(N({}, t), {}, {
    panelName: "week",
    prefixColumn: i,
    rowClassName: s,
    keyboardConfig: {
      onLeftRight: null
    }
  }), null);
}
On.displayName = "WeekPanel";
On.inheritAttrs = !1;
function Nn(e) {
  const t = fe(e), {
    prefixCls: n,
    generateConfig: a,
    locale: r,
    viewDate: l,
    onNextYear: o,
    onPrevYear: i,
    onYearClick: c
  } = t, {
    hideHeader: s
  } = Ae();
  if (s.value)
    return null;
  const p = `${n}-header`;
  return b(lt, N(N({}, t), {}, {
    prefixCls: p,
    onSuperPrev: i,
    onSuperNext: o
  }), {
    default: () => [b("button", {
      type: "button",
      onClick: c,
      class: `${n}-year-btn`
    }, [we(l, {
      locale: r,
      format: r.yearFormat,
      generateConfig: a
    })])]
  });
}
Nn.displayName = "MonthHeader";
Nn.inheritAttrs = !1;
const Ka = 3, Vo = 4;
function Rn(e) {
  const t = fe(e), {
    prefixCls: n,
    locale: a,
    value: r,
    viewDate: l,
    generateConfig: o,
    monthCellRender: i
  } = t, {
    rangedValue: c,
    hoverRangedValue: s
  } = St(), p = `${n}-cell`, u = Lt({
    cellPrefixCls: p,
    value: r,
    generateConfig: o,
    rangedValue: c.value,
    hoverRangedValue: s.value,
    isSameCell: (v, f) => Sn(o, v, f),
    isInView: () => !0,
    offsetCell: (v, f) => o.addMonth(v, f)
  }), d = a.shortMonths || (o.locale.getShortMonths ? o.locale.getShortMonths(a.locale) : []), m = o.setMonth(l, 0), y = i ? (v) => i({
    current: v,
    locale: a
  }) : void 0;
  return b(dt, N(N({}, t), {}, {
    rowNum: Vo,
    colNum: Ka,
    baseDate: m,
    getCellNode: y,
    getCellText: (v) => a.monthFormat ? we(v, {
      locale: a,
      format: a.monthFormat,
      generateConfig: o
    }) : d[o.getMonth(v)],
    getCellClassName: u,
    getCellDate: o.addMonth,
    titleCell: (v) => we(v, {
      locale: a,
      format: "YYYY-MM",
      generateConfig: o
    })
  }), null);
}
Rn.displayName = "MonthBody";
Rn.inheritAttrs = !1;
function Tn(e) {
  const t = fe(e), {
    prefixCls: n,
    operationRef: a,
    onViewDateChange: r,
    generateConfig: l,
    value: o,
    viewDate: i,
    onPanelChange: c,
    onSelect: s
  } = t, p = `${n}-month-panel`;
  a.value = {
    onKeydown: (d) => mt(d, {
      onLeftRight: (m) => {
        s(l.addMonth(o || i, m), "key");
      },
      onCtrlLeftRight: (m) => {
        s(l.addYear(o || i, m), "key");
      },
      onUpDown: (m) => {
        s(l.addMonth(o || i, m * Ka), "key");
      },
      onEnter: () => {
        c("date", o || i);
      }
    })
  };
  const u = (d) => {
    const m = l.addYear(i, d);
    r(m), c(null, m);
  };
  return b("div", {
    class: p
  }, [b(Nn, N(N({}, t), {}, {
    prefixCls: n,
    onPrevYear: () => {
      u(-1);
    },
    onNextYear: () => {
      u(1);
    },
    onYearClick: () => {
      c("year", i);
    }
  }), null), b(Rn, N(N({}, t), {}, {
    prefixCls: n,
    onSelect: (d) => {
      s(d, "mouse"), c("date", d);
    }
  }), null)]);
}
Tn.displayName = "MonthPanel";
Tn.inheritAttrs = !1;
function In(e) {
  const t = fe(e), {
    prefixCls: n,
    generateConfig: a,
    locale: r,
    viewDate: l,
    onNextYear: o,
    onPrevYear: i,
    onYearClick: c
  } = t, {
    hideHeader: s
  } = Ae();
  if (s.value)
    return null;
  const p = `${n}-header`;
  return b(lt, N(N({}, t), {}, {
    prefixCls: p,
    onSuperPrev: i,
    onSuperNext: o
  }), {
    default: () => [b("button", {
      type: "button",
      onClick: c,
      class: `${n}-year-btn`
    }, [we(l, {
      locale: r,
      format: r.yearFormat,
      generateConfig: a
    })])]
  });
}
In.displayName = "QuarterHeader";
In.inheritAttrs = !1;
const Ho = 4, Ao = 1;
function Yn(e) {
  const t = fe(e), {
    prefixCls: n,
    locale: a,
    value: r,
    viewDate: l,
    generateConfig: o
  } = t, {
    rangedValue: i,
    hoverRangedValue: c
  } = St(), s = `${n}-cell`, p = Lt({
    cellPrefixCls: s,
    value: r,
    generateConfig: o,
    rangedValue: i.value,
    hoverRangedValue: c.value,
    isSameCell: (d, m) => Wa(o, d, m),
    isInView: () => !0,
    offsetCell: (d, m) => o.addMonth(d, m * 3)
  }), u = o.setDate(o.setMonth(l, 0), 1);
  return b(dt, N(N({}, t), {}, {
    rowNum: Ao,
    colNum: Ho,
    baseDate: u,
    getCellText: (d) => we(d, {
      locale: a,
      format: a.quarterFormat || "[Q]Q",
      generateConfig: o
    }),
    getCellClassName: p,
    getCellDate: (d, m) => o.addMonth(d, m * 3),
    titleCell: (d) => we(d, {
      locale: a,
      format: "YYYY-[Q]Q",
      generateConfig: o
    })
  }), null);
}
Yn.displayName = "QuarterBody";
Yn.inheritAttrs = !1;
function En(e) {
  const t = fe(e), {
    prefixCls: n,
    operationRef: a,
    onViewDateChange: r,
    generateConfig: l,
    value: o,
    viewDate: i,
    onPanelChange: c,
    onSelect: s
  } = t, p = `${n}-quarter-panel`;
  a.value = {
    onKeydown: (d) => mt(d, {
      onLeftRight: (m) => {
        s(l.addMonth(o || i, m * 3), "key");
      },
      onCtrlLeftRight: (m) => {
        s(l.addYear(o || i, m), "key");
      },
      onUpDown: (m) => {
        s(l.addYear(o || i, m), "key");
      }
    })
  };
  const u = (d) => {
    const m = l.addYear(i, d);
    r(m), c(null, m);
  };
  return b("div", {
    class: p
  }, [b(In, N(N({}, t), {}, {
    prefixCls: n,
    onPrevYear: () => {
      u(-1);
    },
    onNextYear: () => {
      u(1);
    },
    onYearClick: () => {
      c("year", i);
    }
  }), null), b(Yn, N(N({}, t), {}, {
    prefixCls: n,
    onSelect: (d) => {
      s(d, "mouse");
    }
  }), null)]);
}
En.displayName = "QuarterPanel";
En.inheritAttrs = !1;
function Vn(e) {
  const t = fe(e), {
    prefixCls: n,
    generateConfig: a,
    viewDate: r,
    onPrevDecade: l,
    onNextDecade: o,
    onDecadeClick: i
  } = t, {
    hideHeader: c
  } = Ae();
  if (c.value)
    return null;
  const s = `${n}-header`, p = a.getYear(r), u = Math.floor(p / at) * at, d = u + at - 1;
  return b(lt, N(N({}, t), {}, {
    prefixCls: s,
    onSuperPrev: l,
    onSuperNext: o
  }), {
    default: () => [b("button", {
      type: "button",
      onClick: i,
      class: `${n}-decade-btn`
    }, [u, ka("-"), d])]
  });
}
Vn.displayName = "YearHeader";
Vn.inheritAttrs = !1;
const gn = 3, sa = 4;
function Hn(e) {
  const t = fe(e), {
    prefixCls: n,
    value: a,
    viewDate: r,
    locale: l,
    generateConfig: o
  } = t, {
    rangedValue: i,
    hoverRangedValue: c
  } = St(), s = `${n}-cell`, p = o.getYear(r), u = Math.floor(p / at) * at, d = u + at - 1, m = o.setYear(r, u - Math.ceil((gn * sa - at) / 2)), y = (f) => {
    const $ = o.getYear(f);
    return u <= $ && $ <= d;
  }, v = Lt({
    cellPrefixCls: s,
    value: a,
    generateConfig: o,
    rangedValue: i.value,
    hoverRangedValue: c.value,
    isSameCell: (f, $) => Wt(o, f, $),
    isInView: y,
    offsetCell: (f, $) => o.addYear(f, $)
  });
  return b(dt, N(N({}, t), {}, {
    rowNum: sa,
    colNum: gn,
    baseDate: m,
    getCellText: o.getYear,
    getCellClassName: v,
    getCellDate: o.addYear,
    titleCell: (f) => we(f, {
      locale: l,
      format: "YYYY",
      generateConfig: o
    })
  }), null);
}
Hn.displayName = "YearBody";
Hn.inheritAttrs = !1;
const at = 10;
function An(e) {
  const t = fe(e), {
    prefixCls: n,
    operationRef: a,
    onViewDateChange: r,
    generateConfig: l,
    value: o,
    viewDate: i,
    sourceMode: c,
    onSelect: s,
    onPanelChange: p
  } = t, u = `${n}-year-panel`;
  a.value = {
    onKeydown: (m) => mt(m, {
      onLeftRight: (y) => {
        s(l.addYear(o || i, y), "key");
      },
      onCtrlLeftRight: (y) => {
        s(l.addYear(o || i, y * at), "key");
      },
      onUpDown: (y) => {
        s(l.addYear(o || i, y * gn), "key");
      },
      onEnter: () => {
        p(c === "date" ? "date" : "month", o || i);
      }
    })
  };
  const d = (m) => {
    const y = l.addYear(i, m * 10);
    r(y), p(null, y);
  };
  return b("div", {
    class: u
  }, [b(Vn, N(N({}, t), {}, {
    prefixCls: n,
    onPrevDecade: () => {
      d(-1);
    },
    onNextDecade: () => {
      d(1);
    },
    onDecadeClick: () => {
      p("decade", i);
    }
  }), null), b(Hn, N(N({}, t), {}, {
    prefixCls: n,
    onSelect: (m) => {
      p(c === "date" ? "date" : "month", m), s(m, "mouse");
    }
  }), null)]);
}
An.displayName = "YearPanel";
An.inheritAttrs = !1;
function Ga(e, t, n) {
  return n ? b("div", {
    class: `${e}-footer-extra`
  }, [n(t)]) : null;
}
function Qa(e) {
  let {
    prefixCls: t,
    components: n = {},
    needConfirmButton: a,
    onNow: r,
    onOk: l,
    okDisabled: o,
    showNow: i,
    locale: c
  } = e, s, p;
  if (a) {
    const u = n.button || "button";
    r && i !== !1 && (s = b("li", {
      class: `${t}-now`
    }, [b("a", {
      class: `${t}-now-btn`,
      onClick: r
    }, [c.now])])), p = a && b("li", {
      class: `${t}-ok`
    }, [b(u, {
      disabled: o,
      onClick: (d) => {
        d.stopPropagation(), l && l();
      }
    }, {
      default: () => [c.ok]
    })]);
  }
  return !s && !p ? null : b("ul", {
    class: `${t}-ranges`
  }, [s, p]);
}
function _o() {
  return Ke({
    name: "PickerPanel",
    inheritAttrs: !1,
    props: {
      prefixCls: String,
      locale: Object,
      generateConfig: Object,
      value: Object,
      defaultValue: Object,
      pickerValue: Object,
      defaultPickerValue: Object,
      disabledDate: Function,
      mode: String,
      picker: {
        type: String,
        default: "date"
      },
      tabindex: {
        type: [Number, String],
        default: 0
      },
      showNow: {
        type: Boolean,
        default: void 0
      },
      showTime: [Boolean, Object],
      showToday: Boolean,
      renderExtraFooter: Function,
      dateRender: Function,
      hideHeader: {
        type: Boolean,
        default: void 0
      },
      onSelect: Function,
      onChange: Function,
      onPanelChange: Function,
      onMousedown: Function,
      onPickerValueChange: Function,
      onOk: Function,
      components: Object,
      direction: String,
      hourStep: {
        type: Number,
        default: 1
      },
      minuteStep: {
        type: Number,
        default: 1
      },
      secondStep: {
        type: Number,
        default: 1
      }
    },
    setup(e, t) {
      let {
        attrs: n
      } = t;
      const a = F(() => e.picker === "date" && !!e.showTime || e.picker === "time"), r = F(() => 24 % e.hourStep === 0), l = F(() => 60 % e.minuteStep === 0), o = F(() => 60 % e.secondStep === 0);
      process.env.NODE_ENV !== "production" && Bt(() => {
        const {
          generateConfig: w,
          value: C,
          hourStep: O = 1,
          minuteStep: h = 1,
          secondStep: P = 1
        } = e;
        Te(!C || w.isValidate(C), "Invalidate date pass to `value`."), Te(!C || w.isValidate(C), "Invalidate date pass to `defaultValue`."), Te(r.value, `\`hourStep\` ${O} is invalid. It should be a factor of 24.`), Te(l.value, `\`minuteStep\` ${h} is invalid. It should be a factor of 60.`), Te(o.value, `\`secondStep\` ${P} is invalid. It should be a factor of 60.`);
      });
      const i = Ae(), {
        operationRef: c,
        onSelect: s,
        hideRanges: p,
        defaultOpenValue: u
      } = i, {
        inRange: d,
        panelPosition: m,
        rangedValue: y,
        hoverRangedValue: v
      } = St(), f = z({}), [$, g] = He(null, {
        value: de(e, "value"),
        defaultValue: e.defaultValue,
        postState: (w) => !w && (u != null && u.value) && e.picker === "time" ? u.value : w
      }), [M, x] = He(null, {
        value: de(e, "pickerValue"),
        defaultValue: e.defaultPickerValue || $.value,
        postState: (w) => {
          const {
            generateConfig: C,
            showTime: O,
            defaultValue: h
          } = e, P = C.getNow();
          return w ? !$.value && e.showTime ? typeof O == "object" ? Yt(C, Array.isArray(w) ? w[0] : w, O.defaultValue || P) : h ? Yt(C, Array.isArray(w) ? w[0] : w, h) : Yt(C, Array.isArray(w) ? w[0] : w, P) : w : P;
        }
      }), R = (w) => {
        x(w), e.onPickerValueChange && e.onPickerValueChange(w);
      }, E = (w) => {
        const C = Do[e.picker];
        return C ? C(w) : w;
      }, [j, U] = He(() => e.picker === "time" ? "time" : E("date"), {
        value: de(e, "mode")
      });
      ge(() => e.picker, () => {
        U(e.picker);
      });
      const q = z(j.value), A = (w) => {
        q.value = w;
      }, T = (w, C) => {
        const {
          onPanelChange: O,
          generateConfig: h
        } = e, P = E(w || j.value);
        A(j.value), U(P), O && (j.value !== P || ht(h, M.value, M.value)) && O(C, P);
      }, _ = function(w, C) {
        let O = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
        const {
          picker: h,
          generateConfig: P,
          onSelect: V,
          onChange: W,
          disabledDate: G
        } = e;
        (j.value === h || O) && (g(w), V && V(w), s && s(w, C), W && !ht(P, w, $.value) && !(G != null && G(w)) && W(w));
      }, J = (w) => f.value && f.value.onKeydown ? ([ce.LEFT, ce.RIGHT, ce.UP, ce.DOWN, ce.PAGE_UP, ce.PAGE_DOWN, ce.ENTER].includes(w.which) && w.preventDefault(), f.value.onKeydown(w)) : (Te(!1, "Panel not correct handle keyDown event. Please help to fire issue about this."), !1), I = (w) => {
        f.value && f.value.onBlur && f.value.onBlur(w);
      }, S = () => {
        const {
          generateConfig: w,
          hourStep: C,
          minuteStep: O,
          secondStep: h
        } = e, P = w.getNow(), V = mo(w.getHour(P), w.getMinute(P), w.getSecond(P), r.value ? C : 1, l.value ? O : 1, o.value ? h : 1), W = Ha(
          w,
          P,
          V[0],
          // hour
          V[1],
          // minute
          V[2]
        );
        _(W, "submit");
      }, D = F(() => {
        const {
          prefixCls: w,
          direction: C
        } = e;
        return ue(`${w}-panel`, {
          [`${w}-panel-has-range`]: y && y.value && y.value[0] && y.value[1],
          [`${w}-panel-has-range-hover`]: v && v.value && v.value[0] && v.value[1],
          [`${w}-panel-rtl`]: C === "rtl"
        });
      });
      return $n(Y(Y({}, i), {
        mode: j,
        hideHeader: F(() => {
          var w;
          return e.hideHeader !== void 0 ? e.hideHeader : (w = i.hideHeader) === null || w === void 0 ? void 0 : w.value;
        }),
        hidePrevBtn: F(() => d.value && m.value === "right"),
        hideNextBtn: F(() => d.value && m.value === "left")
      })), ge(() => e.value, () => {
        e.value && x(e.value);
      }), () => {
        const {
          prefixCls: w = "ant-picker",
          locale: C,
          generateConfig: O,
          disabledDate: h,
          picker: P = "date",
          tabindex: V = 0,
          showNow: W,
          showTime: G,
          showToday: ee,
          renderExtraFooter: ie,
          onMousedown: oe,
          onOk: L,
          components: te
        } = e;
        c && m.value !== "right" && (c.value = {
          onKeydown: J,
          onClose: () => {
            f.value && f.value.onClose && f.value.onClose();
          }
        });
        let Q;
        const X = Y(Y(Y({}, n), e), {
          operationRef: f,
          prefixCls: w,
          viewDate: M.value,
          value: $.value,
          onViewDateChange: R,
          sourceMode: q.value,
          onPanelChange: T,
          disabledDate: h
        });
        switch (delete X.onChange, delete X.onSelect, j.value) {
          case "decade":
            Q = b(xn, N(N({}, X), {}, {
              onSelect: (K, ae) => {
                R(K), _(K, ae);
              }
            }), null);
            break;
          case "year":
            Q = b(An, N(N({}, X), {}, {
              onSelect: (K, ae) => {
                R(K), _(K, ae);
              }
            }), null);
            break;
          case "month":
            Q = b(Tn, N(N({}, X), {}, {
              onSelect: (K, ae) => {
                R(K), _(K, ae);
              }
            }), null);
            break;
          case "quarter":
            Q = b(En, N(N({}, X), {}, {
              onSelect: (K, ae) => {
                R(K), _(K, ae);
              }
            }), null);
            break;
          case "week":
            Q = b(On, N(N({}, X), {}, {
              onSelect: (K, ae) => {
                R(K), _(K, ae);
              }
            }), null);
            break;
          case "time":
            delete X.showTime, Q = b(Ft, N(N(N({}, X), typeof G == "object" ? G : null), {}, {
              onSelect: (K, ae) => {
                R(K), _(K, ae);
              }
            }), null);
            break;
          default:
            G ? Q = b(Mn, N(N({}, X), {}, {
              onSelect: (K, ae) => {
                R(K), _(K, ae);
              }
            }), null) : Q = b(Dt, N(N({}, X), {}, {
              onSelect: (K, ae) => {
                R(K), _(K, ae);
              }
            }), null);
        }
        let se, re;
        p != null && p.value || (se = Ga(w, j.value, ie), re = Qa({
          prefixCls: w,
          components: te,
          needConfirmButton: a.value,
          okDisabled: !$.value || h && h($.value),
          locale: C,
          showNow: W,
          onNow: a.value && S,
          onOk: () => {
            $.value && (_($.value, "submit", !0), L && L($.value));
          }
        }));
        let be;
        if (ee && j.value === "date" && P === "date" && !G) {
          const K = O.getNow(), ae = `${w}-today-btn`, Oe = h && h(K);
          be = b("a", {
            class: ue(ae, Oe && `${ae}-disabled`),
            "aria-disabled": Oe,
            onClick: () => {
              Oe || _(K, "mouse", !0);
            }
          }, [C.today]);
        }
        return b("div", {
          tabindex: V,
          class: ue(D.value, n.class),
          style: n.style,
          onKeydown: J,
          onBlur: I,
          onMousedown: oe
        }, [Q, se || re || be ? b("div", {
          class: `${w}-footer`
        }, [se, re, be]) : null]);
      };
    }
  });
}
const Bo = _o(), Xa = (e) => b(Bo, e), Wo = {
  bottomLeft: {
    points: ["tl", "bl"],
    offset: [0, 4],
    overflow: {
      adjustX: 1,
      adjustY: 1
    }
  },
  bottomRight: {
    points: ["tr", "br"],
    offset: [0, 4],
    overflow: {
      adjustX: 1,
      adjustY: 1
    }
  },
  topLeft: {
    points: ["bl", "tl"],
    offset: [0, -4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    }
  },
  topRight: {
    points: ["br", "tr"],
    offset: [0, -4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    }
  }
};
function Za(e, t) {
  let {
    slots: n
  } = t;
  const {
    prefixCls: a,
    popupStyle: r,
    visible: l,
    dropdownClassName: o,
    dropdownAlign: i,
    transitionName: c,
    getPopupContainer: s,
    range: p,
    popupPlacement: u,
    direction: d
  } = fe(e), m = `${a}-dropdown`;
  return b(Or, {
    showAction: [],
    hideAction: [],
    popupPlacement: u !== void 0 ? u : d === "rtl" ? "bottomRight" : "bottomLeft",
    builtinPlacements: Wo,
    prefixCls: m,
    popupTransitionName: c,
    popupAlign: i,
    popupVisible: l,
    popupClassName: ue(o, {
      [`${m}-range`]: p,
      [`${m}-rtl`]: d === "rtl"
    }),
    popupStyle: r,
    getPopupContainer: s
  }, {
    default: n.default,
    popup: n.popupElement
  });
}
const Ja = Ke({
  name: "PresetPanel",
  props: {
    prefixCls: String,
    presets: {
      type: Array,
      default: () => []
    },
    onClick: Function,
    onHover: Function
  },
  setup(e) {
    return () => e.presets.length ? b("div", {
      class: `${e.prefixCls}-presets`
    }, [b("ul", null, [e.presets.map((t, n) => {
      let {
        label: a,
        value: r
      } = t;
      return b("li", {
        key: n,
        onClick: (l) => {
          l.stopPropagation(), e.onClick(r);
        },
        onMouseenter: () => {
          var l;
          (l = e.onHover) === null || l === void 0 || l.call(e, r);
        },
        onMouseleave: () => {
          var l;
          (l = e.onHover) === null || l === void 0 || l.call(e, null);
        }
      }, [a]);
    })])]) : null;
  }
});
function hn(e) {
  let {
    open: t,
    value: n,
    isClickOutside: a,
    triggerOpen: r,
    forwardKeydown: l,
    onKeydown: o,
    blurToCancel: i,
    onSubmit: c,
    onCancel: s,
    onFocus: p,
    onBlur: u
  } = e;
  const d = Ve(!1), m = Ve(!1), y = Ve(!1), v = Ve(!1), f = Ve(!1), $ = F(() => ({
    onMousedown: () => {
      d.value = !0, r(!0);
    },
    onKeydown: (M) => {
      if (o(M, () => {
        f.value = !0;
      }), !f.value) {
        switch (M.which) {
          case ce.ENTER: {
            t.value ? c() !== !1 && (d.value = !0) : r(!0), M.preventDefault();
            return;
          }
          case ce.TAB: {
            d.value && t.value && !M.shiftKey ? (d.value = !1, M.preventDefault()) : !d.value && t.value && !l(M) && M.shiftKey && (d.value = !0, M.preventDefault());
            return;
          }
          case ce.ESC: {
            d.value = !0, s();
            return;
          }
        }
        !t.value && ![ce.SHIFT].includes(M.which) ? r(!0) : d.value || l(M);
      }
    },
    onFocus: (M) => {
      d.value = !0, m.value = !0, p && p(M);
    },
    onBlur: (M) => {
      if (y.value || !a(document.activeElement)) {
        y.value = !1;
        return;
      }
      i.value ? setTimeout(() => {
        let {
          activeElement: x
        } = document;
        for (; x && x.shadowRoot; )
          x = x.shadowRoot.activeElement;
        a(x) && s();
      }, 0) : t.value && (r(!1), v.value && c()), m.value = !1, u && u(M);
    }
  }));
  ge(t, () => {
    v.value = !1;
  }), ge(n, () => {
    v.value = !0;
  });
  const g = Ve();
  return Sa(() => {
    g.value = Co((M) => {
      const x = $o(M);
      if (t.value) {
        const R = a(x);
        R ? (!m.value || R) && r(!1) : (y.value = !0, qe(() => {
          y.value = !1;
        }));
      }
    });
  }), Cn(() => {
    g.value && g.value();
  }), [$, {
    focused: m,
    typing: d
  }];
}
function mn(e) {
  let {
    valueTexts: t,
    onTextChange: n
  } = e;
  const a = z("");
  function r(o) {
    a.value = o, n(o);
  }
  function l() {
    a.value = t.value[0];
  }
  return ge(() => [...t.value], function(o) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    o.join("||") !== i.join("||") && t.value.every((c) => c !== a.value) && l();
  }, {
    immediate: !0
  }), [a, r, l];
}
function At(e, t) {
  let {
    formatList: n,
    generateConfig: a,
    locale: r
  } = t;
  const l = Lr(() => {
    if (!e.value)
      return [[""], ""];
    let c = "";
    const s = [];
    for (let p = 0; p < n.value.length; p += 1) {
      const u = n.value[p], d = we(e.value, {
        generateConfig: a.value,
        locale: r.value,
        format: u
      });
      s.push(d), p === 0 && (c = d);
    }
    return [s, c];
  }, [e, n], (c, s) => s[0] !== c[0] || !jr(s[1], c[1])), o = F(() => l.value[0]), i = F(() => l.value[1]);
  return [o, i];
}
function bn(e, t) {
  let {
    formatList: n,
    generateConfig: a,
    locale: r
  } = t;
  const l = z(null);
  let o;
  function i(u) {
    let d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (qe.cancel(o), d) {
      l.value = u;
      return;
    }
    o = qe(() => {
      l.value = u;
    });
  }
  const [, c] = At(l, {
    formatList: n,
    generateConfig: a,
    locale: r
  });
  function s(u) {
    i(u);
  }
  function p() {
    let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    i(null, u);
  }
  return ge(e, () => {
    p(!0);
  }), Cn(() => {
    qe.cancel(o);
  }), [c, s, p];
}
function er(e, t) {
  return F(() => e != null && e.value ? e.value : t != null && t.value ? (Nr(!1, "`ranges` is deprecated. Please use `presets` instead."), Object.keys(t.value).map((a) => {
    const r = t.value[a], l = typeof r == "function" ? r() : r;
    return {
      label: a,
      value: l
    };
  })) : []);
}
function tr(e) {
  const {
    picker: t,
    disabledHours: n,
    disabledMinutes: a,
    disabledSeconds: r
  } = e;
  t === "time" && (n || a || r) && Te(!1, "'disabledHours', 'disabledMinutes', 'disabledSeconds' will be removed in the next major version, please use 'disabledTime' instead.");
}
function Fo() {
  return Ke({
    name: "Picker",
    inheritAttrs: !1,
    props: ["prefixCls", "id", "tabindex", "dropdownClassName", "dropdownAlign", "popupStyle", "transitionName", "generateConfig", "locale", "inputReadOnly", "allowClear", "autofocus", "showTime", "showNow", "showHour", "showMinute", "showSecond", "picker", "format", "use12Hours", "value", "defaultValue", "open", "defaultOpen", "defaultOpenValue", "suffixIcon", "presets", "clearIcon", "disabled", "disabledDate", "placeholder", "getPopupContainer", "panelRender", "inputRender", "onChange", "onOpenChange", "onPanelChange", "onFocus", "onBlur", "onMousedown", "onMouseup", "onMouseenter", "onMouseleave", "onContextmenu", "onClick", "onKeydown", "onSelect", "direction", "autocomplete", "showToday", "renderExtraFooter", "dateRender", "minuteStep", "hourStep", "secondStep", "hideDisabledOptions"],
    setup(e, t) {
      let {
        attrs: n,
        expose: a
      } = t;
      const r = z(null), l = F(() => e.presets), o = er(l), i = F(() => {
        var h;
        return (h = e.picker) !== null && h !== void 0 ? h : "date";
      }), c = F(() => i.value === "date" && !!e.showTime || i.value === "time");
      process.env.NODE_ENV !== "production" && tr(e);
      const s = F(() => za(Aa(e.format, i.value, e.showTime, e.use12Hours))), p = z(null), u = z(null), d = z(null), [m, y] = He(null, {
        value: de(e, "value"),
        defaultValue: e.defaultValue
      }), v = z(m.value), f = (h) => {
        v.value = h;
      }, $ = z(null), [g, M] = He(!1, {
        value: de(e, "open"),
        defaultValue: e.defaultOpen,
        postState: (h) => e.disabled ? !1 : h,
        onChange: (h) => {
          e.onOpenChange && e.onOpenChange(h), !h && $.value && $.value.onClose && $.value.onClose();
        }
      }), [x, R] = At(v, {
        formatList: s,
        generateConfig: de(e, "generateConfig"),
        locale: de(e, "locale")
      }), [E, j, U] = mn({
        valueTexts: x,
        onTextChange: (h) => {
          const P = La(h, {
            locale: e.locale,
            formatList: s.value,
            generateConfig: e.generateConfig
          });
          P && (!e.disabledDate || !e.disabledDate(P)) && f(P);
        }
      }), q = (h) => {
        const {
          onChange: P,
          generateConfig: V,
          locale: W
        } = e;
        f(h), y(h), P && !ht(V, m.value, h) && P(h, h ? we(h, {
          generateConfig: V,
          locale: W,
          format: s.value[0]
        }) : "");
      }, A = (h) => {
        e.disabled && h || M(h);
      }, T = (h) => g.value && $.value && $.value.onKeydown ? $.value.onKeydown(h) : (Te(!1, "Picker not correct forward Keydown operation. Please help to fire issue about this."), !1), _ = function() {
        e.onMouseup && e.onMouseup(...arguments), r.value && (r.value.focus(), A(!0));
      }, [J, {
        focused: I,
        typing: S
      }] = hn({
        blurToCancel: c,
        open: g,
        value: E,
        triggerOpen: A,
        forwardKeydown: T,
        isClickOutside: (h) => !Ba([p.value, u.value, d.value], h),
        onSubmit: () => (
          // When user typing disabledDate with keyboard and enter, this value will be empty
          !v.value || // Normal disabled check
          e.disabledDate && e.disabledDate(v.value) ? !1 : (q(v.value), A(!1), U(), !0)
        ),
        onCancel: () => {
          A(!1), f(m.value), U();
        },
        onKeydown: (h, P) => {
          var V;
          (V = e.onKeydown) === null || V === void 0 || V.call(e, h, P);
        },
        onFocus: (h) => {
          var P;
          (P = e.onFocus) === null || P === void 0 || P.call(e, h);
        },
        onBlur: (h) => {
          var P;
          (P = e.onBlur) === null || P === void 0 || P.call(e, h);
        }
      });
      ge([g, x], () => {
        g.value || (f(m.value), !x.value.length || x.value[0] === "" ? j("") : R.value !== E.value && U());
      }), ge(i, () => {
        g.value || U();
      }), ge(m, () => {
        f(m.value);
      });
      const [D, w, C] = bn(E, {
        formatList: s,
        generateConfig: de(e, "generateConfig"),
        locale: de(e, "locale")
      }), O = (h, P) => {
        (P === "submit" || P !== "key" && !c.value) && (q(h), A(!1));
      };
      return $n({
        operationRef: $,
        hideHeader: F(() => i.value === "time"),
        onSelect: O,
        open: g,
        defaultOpenValue: de(e, "defaultOpenValue"),
        onDateMouseenter: w,
        onDateMouseleave: C
      }), a({
        focus: () => {
          r.value && r.value.focus();
        },
        blur: () => {
          r.value && r.value.blur();
        }
      }), () => {
        const {
          prefixCls: h = "rc-picker",
          id: P,
          tabindex: V,
          dropdownClassName: W,
          dropdownAlign: G,
          popupStyle: ee,
          transitionName: ie,
          generateConfig: oe,
          locale: L,
          inputReadOnly: te,
          allowClear: Q,
          autofocus: X,
          picker: se = "date",
          defaultOpenValue: re,
          suffixIcon: be,
          clearIcon: K,
          disabled: ae,
          placeholder: Oe,
          getPopupContainer: Ye,
          panelRender: Ge,
          onMousedown: Qe,
          onMouseenter: ke,
          onMouseleave: _e,
          onContextmenu: Be,
          onClick: De,
          onSelect: he,
          direction: Ne,
          autocomplete: vt = "off"
        } = e, it = Y(Y(Y({}, e), n), {
          class: ue({
            [`${h}-panel-focused`]: !S.value
          }),
          style: void 0,
          pickerValue: void 0,
          onPickerValueChange: void 0,
          onChange: null
        });
        let xe = b("div", {
          class: `${h}-panel-layout`
        }, [b(Ja, {
          prefixCls: h,
          presets: o.value,
          onClick: (ve) => {
            q(ve), A(!1);
          }
        }, null), b(Xa, N(N({}, it), {}, {
          generateConfig: oe,
          value: v.value,
          locale: L,
          tabindex: -1,
          onSelect: (ve) => {
            he == null || he(ve), f(ve);
          },
          direction: Ne,
          onPanelChange: (ve, Kt) => {
            const {
              onPanelChange: bt
            } = e;
            C(!0), bt == null || bt(ve, Kt);
          }
        }), null)]);
        Ge && (xe = Ge(xe));
        const We = b("div", {
          class: `${h}-panel-container`,
          ref: p,
          onMousedown: (ve) => {
            ve.preventDefault();
          }
        }, [xe]);
        let Re;
        be && (Re = b("span", {
          class: `${h}-suffix`
        }, [be]));
        let Se;
        Q && m.value && !ae && (Se = b("span", {
          onMousedown: (ve) => {
            ve.preventDefault(), ve.stopPropagation();
          },
          onMouseup: (ve) => {
            ve.preventDefault(), ve.stopPropagation(), q(null), A(!1);
          },
          class: `${h}-clear`,
          role: "button"
        }, [K || b("span", {
          class: `${h}-clear-btn`
        }, null)]));
        const Xe = Y(Y(Y(Y({
          id: P,
          tabindex: V,
          disabled: ae,
          readonly: te || typeof s.value[0] == "function" || !S.value,
          value: D.value || E.value,
          onInput: (ve) => {
            j(ve.target.value);
          },
          autofocus: X,
          placeholder: Oe,
          ref: r,
          title: E.value
        }, J.value), {
          size: _a(se, s.value[0], oe)
        }), Ua(e)), {
          autocomplete: vt
        }), Pt = e.inputRender ? e.inputRender(Xe) : b("input", Xe, null);
        process.env.NODE_ENV !== "production" && Te(!re, "`defaultOpenValue` may confuse user for the current value status. Please use `defaultValue` instead.");
        const qt = Ne === "rtl" ? "bottomRight" : "bottomLeft";
        return b("div", {
          ref: d,
          class: ue(h, n.class, {
            [`${h}-disabled`]: ae,
            [`${h}-focused`]: I.value,
            [`${h}-rtl`]: Ne === "rtl"
          }),
          style: n.style,
          onMousedown: Qe,
          onMouseup: _,
          onMouseenter: ke,
          onMouseleave: _e,
          onContextmenu: Be,
          onClick: De
        }, [b("div", {
          class: ue(`${h}-input`, {
            [`${h}-input-placeholder`]: !!D.value
          }),
          ref: u
        }, [Pt, Re, Se]), b(Za, {
          visible: g.value,
          popupStyle: ee,
          prefixCls: h,
          dropdownClassName: W,
          dropdownAlign: G,
          getPopupContainer: Ye,
          transitionName: ie,
          popupPlacement: qt,
          direction: Ne
        }, {
          default: () => [b("div", {
            style: {
              pointerEvents: "none",
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0
            }
          }, null)],
          popupElement: () => We
        })]);
      };
    }
  });
}
const Lo = Fo();
function jo(e, t) {
  let {
    picker: n,
    locale: a,
    selectedValue: r,
    disabledDate: l,
    disabled: o,
    generateConfig: i
  } = e;
  const c = F(() => Z(r.value, 0)), s = F(() => Z(r.value, 1));
  function p(v) {
    return i.value.locale.getWeekFirstDate(a.value.locale, v);
  }
  function u(v) {
    const f = i.value.getYear(v), $ = i.value.getMonth(v);
    return f * 100 + $;
  }
  function d(v) {
    const f = i.value.getYear(v), $ = vn(i.value, v);
    return f * 10 + $;
  }
  return [(v) => {
    var f;
    if (l && (!((f = l == null ? void 0 : l.value) === null || f === void 0) && f.call(l, v)))
      return !0;
    if (o[1] && s)
      return !Ue(i.value, v, s.value) && i.value.isAfter(v, s.value);
    if (t.value[1] && s.value)
      switch (n.value) {
        case "quarter":
          return d(v) > d(s.value);
        case "month":
          return u(v) > u(s.value);
        case "week":
          return p(v) > p(s.value);
        default:
          return !Ue(i.value, v, s.value) && i.value.isAfter(v, s.value);
      }
    return !1;
  }, (v) => {
    var f;
    if (!((f = l.value) === null || f === void 0) && f.call(l, v))
      return !0;
    if (o[0] && c)
      return !Ue(i.value, v, s.value) && i.value.isAfter(c.value, v);
    if (t.value[0] && c.value)
      switch (n.value) {
        case "quarter":
          return d(v) < d(c.value);
        case "month":
          return u(v) < u(c.value);
        case "week":
          return p(v) < p(c.value);
        default:
          return !Ue(i.value, v, c.value) && i.value.isAfter(c.value, v);
      }
    return !1;
  }];
}
function zo(e, t, n, a) {
  const r = xt(e, n, a, 1);
  function l(o) {
    return o(e, t) ? "same" : o(r, t) ? "closing" : "far";
  }
  switch (n) {
    case "year":
      return l((o, i) => Po(a, o, i));
    case "quarter":
    case "month":
      return l((o, i) => Wt(a, o, i));
    default:
      return l((o, i) => Sn(a, o, i));
  }
}
function Uo(e, t, n, a) {
  const r = Z(e, 0), l = Z(e, 1);
  if (t === 0)
    return r;
  if (r && l)
    switch (zo(r, l, n, a)) {
      case "same":
        return r;
      case "closing":
        return r;
      default:
        return xt(l, n, a, -1);
    }
  return r;
}
function qo(e) {
  let {
    values: t,
    picker: n,
    defaultDates: a,
    generateConfig: r
  } = e;
  const l = z([Z(a, 0), Z(a, 1)]), o = z(null), i = F(() => Z(t.value, 0)), c = F(() => Z(t.value, 1)), s = (m) => l.value[m] ? l.value[m] : Z(o.value, m) || Uo(t.value, m, n.value, r.value) || i.value || c.value || r.value.getNow(), p = z(null), u = z(null);
  Bt(() => {
    p.value = s(0), u.value = s(1);
  });
  function d(m, y) {
    if (m) {
      let v = Me(o.value, m, y);
      l.value = Me(l.value, null, y) || [null, null];
      const f = (y + 1) % 2;
      Z(t.value, f) || (v = Me(v, m, f)), o.value = v;
    } else
      (i.value || c.value) && (o.value = null);
  }
  return [p, u, d];
}
function Ko(e) {
  return Ar() ? (_r(e), !0) : !1;
}
function Go(e) {
  return typeof e == "function" ? e() : Br(e);
}
function nr(e) {
  var t;
  const n = Go(e);
  return (t = n == null ? void 0 : n.$el) !== null && t !== void 0 ? t : n;
}
function Qo(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  Wr() ? Sa(e) : t ? e() : xa(e);
}
function Xo(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  const n = Ve(), a = () => n.value = !!e();
  return a(), Qo(a, t), n;
}
var on;
const ar = typeof window < "u";
ar && (!((on = window == null ? void 0 : window.navigator) === null || on === void 0) && on.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
const Zo = ar ? window : void 0;
var Jo = function(e, t) {
  var n = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, a = Object.getOwnPropertySymbols(e); r < a.length; r++)
      t.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[r]) && (n[a[r]] = e[a[r]]);
  return n;
};
function el(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    window: a = Zo
  } = n, r = Jo(n, ["window"]);
  let l;
  const o = Xo(() => a && "ResizeObserver" in a), i = () => {
    l && (l.disconnect(), l = void 0);
  }, c = ge(() => nr(e), (p) => {
    i(), o.value && a && p && (l = new ResizeObserver(t), l.observe(p, r));
  }, {
    immediate: !0,
    flush: "post"
  }), s = () => {
    i(), c();
  };
  return Ko(s), {
    isSupported: o,
    stop: s
  };
}
function kt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    width: 0,
    height: 0
  }, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    box: a = "content-box"
  } = n, r = Ve(t.width), l = Ve(t.height);
  return el(e, (o) => {
    let [i] = o;
    const c = a === "border-box" ? i.borderBoxSize : a === "content-box" ? i.contentBoxSize : i.devicePixelContentBoxSize;
    c ? (r.value = c.reduce((s, p) => {
      let {
        inlineSize: u
      } = p;
      return s + u;
    }, 0), l.value = c.reduce((s, p) => {
      let {
        blockSize: u
      } = p;
      return s + u;
    }, 0)) : (r.value = i.contentRect.width, l.value = i.contentRect.height);
  }, n), ge(() => nr(e), (o) => {
    r.value = o ? t.width : 0, l.value = o ? t.height : 0;
  }), {
    width: r,
    height: l
  };
}
function ua(e, t) {
  return e && e[0] && e[1] && t.isAfter(e[0], e[1]) ? [e[1], e[0]] : e;
}
function ca(e, t, n, a) {
  return !!(e || a && a[t] || n[(t + 1) % 2]);
}
function tl() {
  return Ke({
    name: "RangerPicker",
    inheritAttrs: !1,
    props: ["prefixCls", "id", "popupStyle", "dropdownClassName", "transitionName", "dropdownAlign", "getPopupContainer", "generateConfig", "locale", "placeholder", "autofocus", "disabled", "format", "picker", "showTime", "showNow", "showHour", "showMinute", "showSecond", "use12Hours", "separator", "value", "defaultValue", "defaultPickerValue", "open", "defaultOpen", "disabledDate", "disabledTime", "dateRender", "panelRender", "ranges", "allowEmpty", "allowClear", "suffixIcon", "clearIcon", "pickerRef", "inputReadOnly", "mode", "renderExtraFooter", "onChange", "onOpenChange", "onPanelChange", "onCalendarChange", "onFocus", "onBlur", "onMousedown", "onMouseup", "onMouseenter", "onMouseleave", "onClick", "onOk", "onKeydown", "components", "order", "direction", "activePickerIndex", "autocomplete", "minuteStep", "hourStep", "secondStep", "hideDisabledOptions", "disabledMinutes", "presets", "prevIcon", "nextIcon", "superPrevIcon", "superNextIcon"],
    setup(e, t) {
      let {
        attrs: n,
        expose: a
      } = t;
      const r = F(() => e.picker === "date" && !!e.showTime || e.picker === "time"), l = F(() => e.presets), o = F(() => e.ranges), i = er(l, o), c = z({}), s = z(null), p = z(null), u = z(null), d = z(null), m = z(null), y = z(null), v = z(null), f = z(null);
      process.env.NODE_ENV !== "production" && tr(e);
      const $ = F(() => za(Aa(e.format, e.picker, e.showTime, e.use12Hours))), [g, M] = He(0, {
        value: de(e, "activePickerIndex")
      }), x = z(null), R = F(() => {
        const {
          disabled: k
        } = e;
        return Array.isArray(k) ? k : [k || !1, k || !1];
      }), [E, j] = He(null, {
        value: de(e, "value"),
        defaultValue: e.defaultValue,
        postState: (k) => e.picker === "time" && !e.order ? k : ua(k, e.generateConfig)
      }), [U, q, A] = qo({
        values: E,
        picker: de(e, "picker"),
        defaultDates: e.defaultPickerValue,
        generateConfig: de(e, "generateConfig")
      }), [T, _] = He(E.value, {
        postState: (k) => {
          let B = k;
          if (R.value[0] && R.value[1])
            return B;
          for (let H = 0; H < 2; H += 1)
            R.value[H] && !Z(B, H) && !Z(e.allowEmpty, H) && (B = Me(B, e.generateConfig.getNow(), H));
          return B;
        }
      }), [J, I] = He([e.picker, e.picker], {
        value: de(e, "mode")
      });
      ge(() => e.picker, () => {
        I([e.picker, e.picker]);
      });
      const S = (k, B) => {
        var H;
        I(k), (H = e.onPanelChange) === null || H === void 0 || H.call(e, B, k);
      }, [D, w] = jo({
        picker: de(e, "picker"),
        selectedValue: T,
        locale: de(e, "locale"),
        disabled: R,
        disabledDate: de(e, "disabledDate"),
        generateConfig: de(e, "generateConfig")
      }, c), [C, O] = He(!1, {
        value: de(e, "open"),
        defaultValue: e.defaultOpen,
        postState: (k) => R.value[g.value] ? !1 : k,
        onChange: (k) => {
          var B;
          (B = e.onOpenChange) === null || B === void 0 || B.call(e, k), !k && x.value && x.value.onClose && x.value.onClose();
        }
      }), h = F(() => C.value && g.value === 0), P = F(() => C.value && g.value === 1), V = z(0), W = z(0), G = z(0), {
        width: ee
      } = kt(s);
      ge([C, ee], () => {
        !C.value && s.value && (G.value = ee.value);
      });
      const {
        width: ie
      } = kt(p), {
        width: oe
      } = kt(f), {
        width: L
      } = kt(u), {
        width: te
      } = kt(m);
      ge([g, C, ie, oe, L, te, () => e.direction], () => {
        W.value = 0, g.value ? u.value && m.value && (W.value = L.value + te.value, ie.value && oe.value && W.value > ie.value - oe.value - (e.direction === "rtl" || f.value.offsetLeft > W.value ? 0 : f.value.offsetLeft) && (V.value = W.value)) : g.value === 0 && (V.value = 0);
      }, {
        immediate: !0
      });
      const Q = z();
      function X(k, B) {
        if (k)
          clearTimeout(Q.value), c.value[B] = !0, M(B), O(k), C.value || A(null, B);
        else if (g.value === B) {
          O(k);
          const H = c.value;
          Q.value = setTimeout(() => {
            H === c.value && (c.value = {});
          });
        }
      }
      function se(k) {
        X(!0, k), setTimeout(() => {
          const B = [y, v][k];
          B.value && B.value.focus();
        }, 0);
      }
      function re(k, B) {
        let H = k, le = Z(H, 0), Ce = Z(H, 1);
        const {
          generateConfig: $e,
          locale: Ze,
          picker: Pe,
          order: wt,
          onCalendarChange: Je,
          allowEmpty: st,
          onChange: me,
          showTime: Fe
        } = e;
        le && Ce && $e.isAfter(le, Ce) && (// WeekPicker only compare week
        Pe === "week" && !Fa($e, Ze.locale, le, Ce) || // QuotaPicker only compare week
        Pe === "quarter" && !Wa($e, le, Ce) || // Other non-TimePicker compare date
        Pe !== "week" && Pe !== "quarter" && Pe !== "time" && !(Fe ? ht($e, le, Ce) : Ue($e, le, Ce)) ? (B === 0 ? (H = [le, null], Ce = null) : (le = null, H = [null, Ce]), c.value = {
          [B]: !0
        }) : (Pe !== "time" || wt !== !1) && (H = ua(H, $e))), _(H);
        const Ee = H && H[0] ? we(H[0], {
          generateConfig: $e,
          locale: Ze,
          format: $.value[0]
        }) : "", Ct = H && H[1] ? we(H[1], {
          generateConfig: $e,
          locale: Ze,
          format: $.value[0]
        }) : "";
        Je && Je(H, [Ee, Ct], {
          range: B === 0 ? "start" : "end"
        });
        const Mt = ca(le, 0, R.value, st), Qt = ca(Ce, 1, R.value, st);
        (H === null || Mt && Qt) && (j(H), me && (!ht($e, Z(E.value, 0), le) || !ht($e, Z(E.value, 1), Ce)) && me(H, [Ee, Ct]));
        let Le = null;
        B === 0 && !R.value[1] ? Le = 1 : B === 1 && !R.value[0] && (Le = 0), Le !== null && Le !== g.value && (!c.value[Le] || !Z(H, Le)) && Z(H, B) ? se(Le) : X(!1, B);
      }
      const be = (k) => C && x.value && x.value.onKeydown ? x.value.onKeydown(k) : (Te(!1, "Picker not correct forward Keydown operation. Please help to fire issue about this."), !1), K = {
        formatList: $,
        generateConfig: de(e, "generateConfig"),
        locale: de(e, "locale")
      }, [ae, Oe] = At(F(() => Z(T.value, 0)), K), [Ye, Ge] = At(F(() => Z(T.value, 1)), K), Qe = (k, B) => {
        const H = La(k, {
          locale: e.locale,
          formatList: $.value,
          generateConfig: e.generateConfig
        });
        H && !(B === 0 ? D : w)(H) && (_(Me(T.value, H, B)), A(H, B));
      }, [ke, _e, Be] = mn({
        valueTexts: ae,
        onTextChange: (k) => Qe(k, 0)
      }), [De, he, Ne] = mn({
        valueTexts: Ye,
        onTextChange: (k) => Qe(k, 1)
      }), [vt, it] = Jn(null), [xe, We] = Jn(null), [Re, Se, Xe] = bn(ke, K), [Pt, qt, ve] = bn(De, K), Kt = (k) => {
        We(Me(T.value, k, g.value)), g.value === 0 ? Se(k) : qt(k);
      }, bt = () => {
        We(Me(T.value, null, g.value)), g.value === 0 ? Xe() : ve();
      }, Bn = (k, B) => ({
        forwardKeydown: be,
        onBlur: (H) => {
          var le;
          (le = e.onBlur) === null || le === void 0 || le.call(e, H);
        },
        isClickOutside: (H) => !Ba([p.value, u.value, d.value, s.value], H),
        onFocus: (H) => {
          var le;
          M(k), (le = e.onFocus) === null || le === void 0 || le.call(e, H);
        },
        triggerOpen: (H) => {
          X(H, k);
        },
        onSubmit: () => {
          if (
            // When user typing disabledDate with keyboard and enter, this value will be empty
            !T.value || // Normal disabled check
            e.disabledDate && e.disabledDate(T.value[k])
          )
            return !1;
          re(T.value, k), B();
        },
        onCancel: () => {
          X(!1, k), _(E.value), B();
        }
      }), [sr, {
        focused: Wn,
        typing: Fn
      }] = hn(Y(Y({}, Bn(0, Be)), {
        blurToCancel: r,
        open: h,
        value: ke,
        onKeydown: (k, B) => {
          var H;
          (H = e.onKeydown) === null || H === void 0 || H.call(e, k, B);
        }
      })), [ur, {
        focused: Ln,
        typing: jn
      }] = hn(Y(Y({}, Bn(1, Ne)), {
        blurToCancel: r,
        open: P,
        value: De,
        onKeydown: (k, B) => {
          var H;
          (H = e.onKeydown) === null || H === void 0 || H.call(e, k, B);
        }
      })), cr = (k) => {
        var B;
        (B = e.onClick) === null || B === void 0 || B.call(e, k), !C.value && !y.value.contains(k.target) && !v.value.contains(k.target) && (R.value[0] ? R.value[1] || se(1) : se(0));
      }, dr = (k) => {
        var B;
        (B = e.onMousedown) === null || B === void 0 || B.call(e, k), C.value && (Wn.value || Ln.value) && !y.value.contains(k.target) && !v.value.contains(k.target) && k.preventDefault();
      }, fr = F(() => {
        var k;
        return !((k = E.value) === null || k === void 0) && k[0] ? we(E.value[0], {
          locale: e.locale,
          format: "YYYYMMDDHHmmss",
          generateConfig: e.generateConfig
        }) : "";
      }), vr = F(() => {
        var k;
        return !((k = E.value) === null || k === void 0) && k[1] ? we(E.value[1], {
          locale: e.locale,
          format: "YYYYMMDDHHmmss",
          generateConfig: e.generateConfig
        }) : "";
      });
      ge([C, ae, Ye], () => {
        C.value || (_(E.value), !ae.value.length || ae.value[0] === "" ? _e("") : Oe.value !== ke.value && Be(), !Ye.value.length || Ye.value[0] === "" ? he("") : Ge.value !== De.value && Ne());
      }), ge([fr, vr], () => {
        _(E.value);
      }), process.env.NODE_ENV !== "production" && Bt(() => {
        const {
          value: k,
          disabled: B
        } = e;
        k && Array.isArray(B) && (Z(B, 0) && !Z(k, 0) || Z(B, 1) && !Z(k, 1)) && Te(!1, "`disabled` should not set with empty `value`. You should set `allowEmpty` or `value` instead.");
      }), a({
        focus: () => {
          y.value && y.value.focus();
        },
        blur: () => {
          y.value && y.value.blur(), v.value && v.value.blur();
        }
      });
      const pr = F(() => C.value && xe.value && xe.value[0] && xe.value[1] && e.generateConfig.isAfter(xe.value[1], xe.value[0]) ? xe.value : null);
      function Gt() {
        let k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          generateConfig: H,
          showTime: le,
          dateRender: Ce,
          direction: $e,
          disabledTime: Ze,
          prefixCls: Pe,
          locale: wt
        } = e;
        let Je = le;
        if (le && typeof le == "object" && le.defaultValue) {
          const me = le.defaultValue;
          Je = Y(Y({}, le), {
            defaultValue: Z(me, g.value) || void 0
          });
        }
        let st = null;
        return Ce && (st = (me) => {
          let {
            current: Fe,
            today: Ee
          } = me;
          return Ce({
            current: Fe,
            today: Ee,
            info: {
              range: g.value ? "end" : "start"
            }
          });
        }), b(Yo, {
          value: {
            inRange: !0,
            panelPosition: k,
            rangedValue: vt.value || T.value,
            hoverRangedValue: pr.value
          }
        }, {
          default: () => [b(Xa, N(N(N({}, e), B), {}, {
            dateRender: st,
            showTime: Je,
            mode: J.value[g.value],
            generateConfig: H,
            style: void 0,
            direction: $e,
            disabledDate: g.value === 0 ? D : w,
            disabledTime: (me) => Ze ? Ze(me, g.value === 0 ? "start" : "end") : !1,
            class: ue({
              [`${Pe}-panel-focused`]: g.value === 0 ? !Fn.value : !jn.value
            }),
            value: Z(T.value, g.value),
            locale: wt,
            tabIndex: -1,
            onPanelChange: (me, Fe) => {
              g.value === 0 && Xe(!0), g.value === 1 && ve(!0), S(Me(J.value, Fe, g.value), Me(T.value, me, g.value));
              let Ee = me;
              k === "right" && J.value[g.value] === Fe && (Ee = xt(Ee, Fe, H, -1)), A(Ee, g.value);
            },
            onOk: null,
            onSelect: void 0,
            onChange: void 0,
            defaultValue: g.value === 0 ? Z(T.value, 1) : Z(T.value, 0)
          }), null)]
        });
      }
      const gr = (k, B) => {
        const H = Me(T.value, k, g.value);
        B === "submit" || B !== "key" && !r.value ? (re(H, g.value), g.value === 0 ? Xe() : ve()) : _(H);
      };
      return $n({
        operationRef: x,
        hideHeader: F(() => e.picker === "time"),
        onDateMouseenter: Kt,
        onDateMouseleave: bt,
        hideRanges: F(() => !0),
        onSelect: gr,
        open: C
      }), () => {
        const {
          prefixCls: k = "rc-picker",
          id: B,
          popupStyle: H,
          dropdownClassName: le,
          transitionName: Ce,
          dropdownAlign: $e,
          getPopupContainer: Ze,
          generateConfig: Pe,
          locale: wt,
          placeholder: Je,
          autofocus: st,
          picker: me = "date",
          showTime: Fe,
          separator: Ee = "~",
          disabledDate: Ct,
          panelRender: Mt,
          allowClear: Qt,
          suffixIcon: Xt,
          clearIcon: Le,
          inputReadOnly: Zt,
          renderExtraFooter: hr,
          onMouseenter: mr,
          onMouseleave: br,
          onMouseup: wr,
          onOk: zn,
          components: Cr,
          direction: $t,
          autocomplete: Un = "off"
        } = e, $r = $t === "rtl" ? {
          right: `${W.value}px`
        } : {
          left: `${W.value}px`
        };
        function yr() {
          let ye;
          const et = Ga(k, J.value[g.value], hr), Qn = Qa({
            prefixCls: k,
            components: Cr,
            needConfirmButton: r.value,
            okDisabled: !Z(T.value, g.value) || Ct && Ct(T.value[g.value]),
            locale: wt,
            onOk: () => {
              Z(T.value, g.value) && (re(T.value, g.value), zn && zn(T.value));
            }
          });
          if (me !== "time" && !Fe) {
            const tt = g.value === 0 ? U.value : q.value, Sr = xt(tt, me, Pe), nn = J.value[g.value] === me, Xn = Gt(nn ? "left" : !1, {
              pickerValue: tt,
              onPickerValueChange: (an) => {
                A(an, g.value);
              }
            }), Zn = Gt("right", {
              pickerValue: Sr,
              onPickerValueChange: (an) => {
                A(xt(an, me, Pe, -1), g.value);
              }
            });
            $t === "rtl" ? ye = b(Ht, null, [Zn, nn && Xn]) : ye = b(Ht, null, [Xn, nn && Zn]);
          } else
            ye = Gt();
          let tn = b("div", {
            class: `${k}-panel-layout`
          }, [b(Ja, {
            prefixCls: k,
            presets: i.value,
            onClick: (tt) => {
              re(tt, null), X(!1, g.value);
            },
            onHover: (tt) => {
              it(tt);
            }
          }, null), b("div", null, [b("div", {
            class: `${k}-panels`
          }, [ye]), (et || Qn) && b("div", {
            class: `${k}-footer`
          }, [et, Qn])])]);
          return Mt && (tn = Mt(tn)), b("div", {
            class: `${k}-panel-container`,
            style: {
              marginLeft: `${V.value}px`
            },
            ref: p,
            onMousedown: (tt) => {
              tt.preventDefault();
            }
          }, [tn]);
        }
        const kr = b("div", {
          class: ue(`${k}-range-wrapper`, `${k}-${me}-range-wrapper`),
          style: {
            minWidth: `${G.value}px`
          }
        }, [b("div", {
          ref: f,
          class: `${k}-range-arrow`,
          style: $r
        }, null), yr()]);
        let qn;
        Xt && (qn = b("span", {
          class: `${k}-suffix`
        }, [Xt]));
        let Kn;
        Qt && (Z(E.value, 0) && !R.value[0] || Z(E.value, 1) && !R.value[1]) && (Kn = b("span", {
          onMousedown: (ye) => {
            ye.preventDefault(), ye.stopPropagation();
          },
          onMouseup: (ye) => {
            ye.preventDefault(), ye.stopPropagation();
            let et = E.value;
            R.value[0] || (et = Me(et, null, 0)), R.value[1] || (et = Me(et, null, 1)), re(et, null), X(!1, g.value);
          },
          class: `${k}-clear`
        }, [Le || b("span", {
          class: `${k}-clear-btn`
        }, null)]));
        const Gn = {
          size: _a(me, $.value[0], Pe)
        };
        let Jt = 0, en = 0;
        u.value && d.value && m.value && (g.value === 0 ? en = u.value.offsetWidth : (Jt = W.value, en = d.value.offsetWidth));
        const xr = $t === "rtl" ? {
          right: `${Jt}px`
        } : {
          left: `${Jt}px`
        };
        return b("div", N({
          ref: s,
          class: ue(k, `${k}-range`, n.class, {
            [`${k}-disabled`]: R.value[0] && R.value[1],
            [`${k}-focused`]: g.value === 0 ? Wn.value : Ln.value,
            [`${k}-rtl`]: $t === "rtl"
          }),
          style: n.style,
          onClick: cr,
          onMouseenter: mr,
          onMouseleave: br,
          onMousedown: dr,
          onMouseup: wr
        }, Ua(e)), [b("div", {
          class: ue(`${k}-input`, {
            [`${k}-input-active`]: g.value === 0,
            [`${k}-input-placeholder`]: !!Re.value
          }),
          ref: u
        }, [b("input", N(N(N({
          id: B,
          disabled: R.value[0],
          readonly: Zt || typeof $.value[0] == "function" || !Fn.value,
          value: Re.value || ke.value,
          onInput: (ye) => {
            _e(ye.target.value);
          },
          autofocus: st,
          placeholder: Z(Je, 0) || "",
          ref: y
        }, sr.value), Gn), {}, {
          autocomplete: Un
        }), null)]), b("div", {
          class: `${k}-range-separator`,
          ref: m
        }, [Ee]), b("div", {
          class: ue(`${k}-input`, {
            [`${k}-input-active`]: g.value === 1,
            [`${k}-input-placeholder`]: !!Pt.value
          }),
          ref: d
        }, [b("input", N(N(N({
          disabled: R.value[1],
          readonly: Zt || typeof $.value[0] == "function" || !jn.value,
          value: Pt.value || De.value,
          onInput: (ye) => {
            he(ye.target.value);
          },
          placeholder: Z(Je, 1) || "",
          ref: v
        }, ur.value), Gn), {}, {
          autocomplete: Un
        }), null)]), b("div", {
          class: `${k}-active-bar`,
          style: Y(Y({}, xr), {
            width: `${en}px`,
            position: "absolute"
          })
        }, null), qn, Kn, b(Za, {
          visible: C.value,
          popupStyle: H,
          prefixCls: k,
          dropdownClassName: le,
          dropdownAlign: $e,
          getPopupContainer: Ze,
          transitionName: Ce,
          range: !0,
          direction: $t
        }, {
          default: () => [b("div", {
            style: {
              pointerEvents: "none",
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0
            }
          }, null)],
          popupElement: () => kr
        })]);
      };
    }
  });
}
const nl = tl(), ln = (e, t, n, a) => {
  const {
    lineHeight: r
  } = e, l = Math.floor(n * r) + 2, o = Math.max((t - l) / 2, 0), i = Math.max(t - l - o, 0);
  return {
    padding: `${o}px ${a}px ${i}px`
  };
}, al = (e) => {
  const {
    componentCls: t,
    pickerCellCls: n,
    pickerCellInnerCls: a,
    pickerPanelCellHeight: r,
    motionDurationSlow: l,
    borderRadiusSM: o,
    motionDurationMid: i,
    controlItemBgHover: c,
    lineWidth: s,
    lineType: p,
    colorPrimary: u,
    controlItemBgActive: d,
    colorTextLightSolid: m,
    controlHeightSM: y,
    pickerDateHoverRangeBorderColor: v,
    pickerCellBorderGap: f,
    pickerBasicCellHoverWithRangeColor: $,
    pickerPanelCellWidth: g,
    colorTextDisabled: M,
    colorBgContainerDisabled: x
  } = e;
  return {
    "&::before": {
      position: "absolute",
      top: "50%",
      insetInlineStart: 0,
      insetInlineEnd: 0,
      zIndex: 1,
      height: r,
      transform: "translateY(-50%)",
      transition: `all ${l}`,
      content: '""'
    },
    // >>> Default
    [a]: {
      position: "relative",
      zIndex: 2,
      display: "inline-block",
      minWidth: r,
      height: r,
      lineHeight: `${r}px`,
      borderRadius: o,
      transition: `background ${i}, border ${i}`
    },
    // >>> Hover
    [`&:hover:not(${n}-in-view),
    &:hover:not(${n}-selected):not(${n}-range-start):not(${n}-range-end):not(${n}-range-hover-start):not(${n}-range-hover-end)`]: {
      [a]: {
        background: c
      }
    },
    // >>> Today
    [`&-in-view${n}-today ${a}`]: {
      "&::before": {
        position: "absolute",
        top: 0,
        insetInlineEnd: 0,
        bottom: 0,
        insetInlineStart: 0,
        zIndex: 1,
        border: `${s}px ${p} ${u}`,
        borderRadius: o,
        content: '""'
      }
    },
    // >>> In Range
    [`&-in-view${n}-in-range`]: {
      position: "relative",
      "&::before": {
        background: d
      }
    },
    // >>> Selected
    [`&-in-view${n}-selected ${a},
      &-in-view${n}-range-start ${a},
      &-in-view${n}-range-end ${a}`]: {
      color: m,
      background: u
    },
    [`&-in-view${n}-range-start:not(${n}-range-start-single),
      &-in-view${n}-range-end:not(${n}-range-end-single)`]: {
      "&::before": {
        background: d
      }
    },
    [`&-in-view${n}-range-start::before`]: {
      insetInlineStart: "50%"
    },
    [`&-in-view${n}-range-end::before`]: {
      insetInlineEnd: "50%"
    },
    // >>> Range Hover
    [`&-in-view${n}-range-hover-start:not(${n}-in-range):not(${n}-range-start):not(${n}-range-end),
      &-in-view${n}-range-hover-end:not(${n}-in-range):not(${n}-range-start):not(${n}-range-end),
      &-in-view${n}-range-hover-start${n}-range-start-single,
      &-in-view${n}-range-hover-start${n}-range-start${n}-range-end${n}-range-end-near-hover,
      &-in-view${n}-range-hover-end${n}-range-start${n}-range-end${n}-range-start-near-hover,
      &-in-view${n}-range-hover-end${n}-range-end-single,
      &-in-view${n}-range-hover:not(${n}-in-range)`]: {
      "&::after": {
        position: "absolute",
        top: "50%",
        zIndex: 0,
        height: y,
        borderTop: `${s}px dashed ${v}`,
        borderBottom: `${s}px dashed ${v}`,
        transform: "translateY(-50%)",
        transition: `all ${l}`,
        content: '""'
      }
    },
    // Add space for stash
    "&-range-hover-start::after,\n      &-range-hover-end::after,\n      &-range-hover::after": {
      insetInlineEnd: 0,
      insetInlineStart: f
    },
    // Hover with in range
    [`&-in-view${n}-in-range${n}-range-hover::before,
      &-in-view${n}-range-start${n}-range-hover::before,
      &-in-view${n}-range-end${n}-range-hover::before,
      &-in-view${n}-range-start:not(${n}-range-start-single)${n}-range-hover-start::before,
      &-in-view${n}-range-end:not(${n}-range-end-single)${n}-range-hover-end::before,
      ${t}-panel
      > :not(${t}-date-panel)
      &-in-view${n}-in-range${n}-range-hover-start::before,
      ${t}-panel
      > :not(${t}-date-panel)
      &-in-view${n}-in-range${n}-range-hover-end::before`]: {
      background: $
    },
    // range start border-radius
    [`&-in-view${n}-range-start:not(${n}-range-start-single):not(${n}-range-end) ${a}`]: {
      borderStartStartRadius: o,
      borderEndStartRadius: o,
      borderStartEndRadius: 0,
      borderEndEndRadius: 0
    },
    // range end border-radius
    [`&-in-view${n}-range-end:not(${n}-range-end-single):not(${n}-range-start) ${a}`]: {
      borderStartStartRadius: 0,
      borderEndStartRadius: 0,
      borderStartEndRadius: o,
      borderEndEndRadius: o
    },
    [`&-range-hover${n}-range-end::after`]: {
      insetInlineStart: "50%"
    },
    // Edge start
    [`tr > &-in-view${n}-range-hover:first-child::after,
      tr > &-in-view${n}-range-hover-end:first-child::after,
      &-in-view${n}-start${n}-range-hover-edge-start${n}-range-hover-edge-start-near-range::after,
      &-in-view${n}-range-hover-edge-start:not(${n}-range-hover-edge-start-near-range)::after,
      &-in-view${n}-range-hover-start::after`]: {
      insetInlineStart: (g - r) / 2,
      borderInlineStart: `${s}px dashed ${v}`,
      borderStartStartRadius: s,
      borderEndStartRadius: s
    },
    // Edge end
    [`tr > &-in-view${n}-range-hover:last-child::after,
      tr > &-in-view${n}-range-hover-start:last-child::after,
      &-in-view${n}-end${n}-range-hover-edge-end${n}-range-hover-edge-end-near-range::after,
      &-in-view${n}-range-hover-edge-end:not(${n}-range-hover-edge-end-near-range)::after,
      &-in-view${n}-range-hover-end::after`]: {
      insetInlineEnd: (g - r) / 2,
      borderInlineEnd: `${s}px dashed ${v}`,
      borderStartEndRadius: s,
      borderEndEndRadius: s
    },
    // >>> Disabled
    "&-disabled": {
      color: M,
      pointerEvents: "none",
      [a]: {
        background: "transparent"
      },
      "&::before": {
        background: x
      }
    },
    [`&-disabled${n}-today ${a}::before`]: {
      borderColor: M
    }
  };
}, rl = (e) => {
  const {
    componentCls: t,
    pickerCellInnerCls: n,
    pickerYearMonthCellWidth: a,
    pickerControlIconSize: r,
    pickerPanelCellWidth: l,
    paddingSM: o,
    paddingXS: i,
    paddingXXS: c,
    colorBgContainer: s,
    lineWidth: p,
    lineType: u,
    borderRadiusLG: d,
    colorPrimary: m,
    colorTextHeading: y,
    colorSplit: v,
    pickerControlIconBorderWidth: f,
    colorIcon: $,
    pickerTextHeight: g,
    motionDurationMid: M,
    colorIconHover: x,
    fontWeightStrong: R,
    pickerPanelCellHeight: E,
    pickerCellPaddingVertical: j,
    colorTextDisabled: U,
    colorText: q,
    fontSize: A,
    pickerBasicCellHoverWithRangeColor: T,
    motionDurationSlow: _,
    pickerPanelWithoutTimeCellHeight: J,
    pickerQuarterPanelContentHeight: I,
    colorLink: S,
    colorLinkActive: D,
    colorLinkHover: w,
    pickerDateHoverRangeBorderColor: C,
    borderRadiusSM: O,
    colorTextLightSolid: h,
    borderRadius: P,
    controlItemBgHover: V,
    pickerTimePanelColumnHeight: W,
    pickerTimePanelColumnWidth: G,
    pickerTimePanelCellHeight: ee,
    controlItemBgActive: ie,
    marginXXS: oe
  } = e, L = l * 7 + o * 2 + 4, te = (L - i * 2) / 3 - a - o;
  return {
    [t]: {
      "&-panel": {
        display: "inline-flex",
        flexDirection: "column",
        textAlign: "center",
        background: s,
        border: `${p}px ${u} ${v}`,
        borderRadius: d,
        outline: "none",
        "&-focused": {
          borderColor: m
        },
        "&-rtl": {
          direction: "rtl",
          [`${t}-prev-icon,
              ${t}-super-prev-icon`]: {
            transform: "rotate(45deg)"
          },
          [`${t}-next-icon,
              ${t}-super-next-icon`]: {
            transform: "rotate(-135deg)"
          }
        }
      },
      // ========================================================
      // =                     Shared Panel                     =
      // ========================================================
      "&-decade-panel,\n        &-year-panel,\n        &-quarter-panel,\n        &-month-panel,\n        &-week-panel,\n        &-date-panel,\n        &-time-panel": {
        display: "flex",
        flexDirection: "column",
        width: L
      },
      // ======================= Header =======================
      "&-header": {
        display: "flex",
        padding: `0 ${i}px`,
        color: y,
        borderBottom: `${p}px ${u} ${v}`,
        "> *": {
          flex: "none"
        },
        button: {
          padding: 0,
          color: $,
          lineHeight: `${g}px`,
          background: "transparent",
          border: 0,
          cursor: "pointer",
          transition: `color ${M}`
        },
        "> button": {
          minWidth: "1.6em",
          fontSize: A,
          "&:hover": {
            color: x
          }
        },
        "&-view": {
          flex: "auto",
          fontWeight: R,
          lineHeight: `${g}px`,
          button: {
            color: "inherit",
            fontWeight: "inherit",
            verticalAlign: "top",
            "&:not(:first-child)": {
              marginInlineStart: i
            },
            "&:hover": {
              color: m
            }
          }
        }
      },
      // Arrow button
      "&-prev-icon,\n        &-next-icon,\n        &-super-prev-icon,\n        &-super-next-icon": {
        position: "relative",
        display: "inline-block",
        width: r,
        height: r,
        "&::before": {
          position: "absolute",
          top: 0,
          insetInlineStart: 0,
          display: "inline-block",
          width: r,
          height: r,
          border: "0 solid currentcolor",
          borderBlockStartWidth: f,
          borderBlockEndWidth: 0,
          borderInlineStartWidth: f,
          borderInlineEndWidth: 0,
          content: '""'
        }
      },
      "&-super-prev-icon,\n        &-super-next-icon": {
        "&::after": {
          position: "absolute",
          top: Math.ceil(r / 2),
          insetInlineStart: Math.ceil(r / 2),
          display: "inline-block",
          width: r,
          height: r,
          border: "0 solid currentcolor",
          borderBlockStartWidth: f,
          borderBlockEndWidth: 0,
          borderInlineStartWidth: f,
          borderInlineEndWidth: 0,
          content: '""'
        }
      },
      "&-prev-icon,\n        &-super-prev-icon": {
        transform: "rotate(-45deg)"
      },
      "&-next-icon,\n        &-super-next-icon": {
        transform: "rotate(135deg)"
      },
      // ======================== Body ========================
      "&-content": {
        width: "100%",
        tableLayout: "fixed",
        borderCollapse: "collapse",
        "th, td": {
          position: "relative",
          minWidth: E,
          fontWeight: "normal"
        },
        th: {
          height: E + j * 2,
          color: q,
          verticalAlign: "middle"
        }
      },
      "&-cell": Y({
        padding: `${j}px 0`,
        color: U,
        cursor: "pointer",
        // In view
        "&-in-view": {
          color: q
        }
      }, al(e)),
      // DatePanel only
      [`&-date-panel ${t}-cell-in-view${t}-cell-in-range${t}-cell-range-hover-start ${n},
        &-date-panel ${t}-cell-in-view${t}-cell-in-range${t}-cell-range-hover-end ${n}`]: {
        "&::after": {
          position: "absolute",
          top: 0,
          bottom: 0,
          zIndex: -1,
          background: T,
          transition: `all ${_}`,
          content: '""'
        }
      },
      [`&-date-panel
        ${t}-cell-in-view${t}-cell-in-range${t}-cell-range-hover-start
        ${n}::after`]: {
        insetInlineEnd: -(l - E) / 2,
        insetInlineStart: 0
      },
      [`&-date-panel ${t}-cell-in-view${t}-cell-in-range${t}-cell-range-hover-end ${n}::after`]: {
        insetInlineEnd: 0,
        insetInlineStart: -(l - E) / 2
      },
      // Hover with range start & end
      [`&-range-hover${t}-range-start::after`]: {
        insetInlineEnd: "50%"
      },
      "&-decade-panel,\n        &-year-panel,\n        &-quarter-panel,\n        &-month-panel": {
        [`${t}-content`]: {
          height: J * 4
        },
        [n]: {
          padding: `0 ${i}px`
        }
      },
      "&-quarter-panel": {
        [`${t}-content`]: {
          height: I
        }
      },
      // ======================== Footer ========================
      [`&-panel ${t}-footer`]: {
        borderTop: `${p}px ${u} ${v}`
      },
      "&-footer": {
        width: "min-content",
        minWidth: "100%",
        lineHeight: `${g - 2 * p}px`,
        textAlign: "center",
        "&-extra": {
          padding: `0 ${o}`,
          lineHeight: `${g - 2 * p}px`,
          textAlign: "start",
          "&:not(:last-child)": {
            borderBottom: `${p}px ${u} ${v}`
          }
        }
      },
      "&-now": {
        textAlign: "start"
      },
      "&-today-btn": {
        color: S,
        "&:hover": {
          color: w
        },
        "&:active": {
          color: D
        },
        [`&${t}-today-btn-disabled`]: {
          color: U,
          cursor: "not-allowed"
        }
      },
      // ========================================================
      // =                       Special                        =
      // ========================================================
      // ===================== Decade Panel =====================
      "&-decade-panel": {
        [n]: {
          padding: `0 ${i / 2}px`
        },
        [`${t}-cell::before`]: {
          display: "none"
        }
      },
      // ============= Year & Quarter & Month Panel =============
      "&-year-panel,\n        &-quarter-panel,\n        &-month-panel": {
        [`${t}-body`]: {
          padding: `0 ${i}px`
        },
        [n]: {
          width: a
        },
        [`${t}-cell-range-hover-start::after`]: {
          insetInlineStart: te,
          borderInlineStart: `${p}px dashed ${C}`,
          borderStartStartRadius: O,
          borderBottomStartRadius: O,
          borderStartEndRadius: 0,
          borderBottomEndRadius: 0,
          [`${t}-panel-rtl &`]: {
            insetInlineEnd: te,
            borderInlineEnd: `${p}px dashed ${C}`,
            borderStartStartRadius: 0,
            borderBottomStartRadius: 0,
            borderStartEndRadius: O,
            borderBottomEndRadius: O
          }
        },
        [`${t}-cell-range-hover-end::after`]: {
          insetInlineEnd: te,
          borderInlineEnd: `${p}px dashed ${C}`,
          borderStartStartRadius: 0,
          borderEndStartRadius: 0,
          borderStartEndRadius: P,
          borderEndEndRadius: P,
          [`${t}-panel-rtl &`]: {
            insetInlineStart: te,
            borderInlineStart: `${p}px dashed ${C}`,
            borderStartStartRadius: P,
            borderEndStartRadius: P,
            borderStartEndRadius: 0,
            borderEndEndRadius: 0
          }
        }
      },
      // ====================== Week Panel ======================
      "&-week-panel": {
        [`${t}-body`]: {
          padding: `${i}px ${o}px`
        },
        // Clear cell style
        [`${t}-cell`]: {
          [`&:hover ${n},
            &-selected ${n},
            ${n}`]: {
            background: "transparent !important"
          }
        },
        "&-row": {
          td: {
            transition: `background ${M}`,
            "&:first-child": {
              borderStartStartRadius: O,
              borderEndStartRadius: O
            },
            "&:last-child": {
              borderStartEndRadius: O,
              borderEndEndRadius: O
            }
          },
          "&:hover td": {
            background: V
          },
          "&-selected td,\n            &-selected:hover td": {
            background: m,
            [`&${t}-cell-week`]: {
              color: new Vt(h).setAlpha(0.5).toHexString()
            },
            [`&${t}-cell-today ${n}::before`]: {
              borderColor: h
            },
            [n]: {
              color: h
            }
          }
        }
      },
      // ====================== Date Panel ======================
      "&-date-panel": {
        [`${t}-body`]: {
          padding: `${i}px ${o}px`
        },
        [`${t}-content`]: {
          width: l * 7,
          th: {
            width: l
          }
        }
      },
      // ==================== Datetime Panel ====================
      "&-datetime-panel": {
        display: "flex",
        [`${t}-time-panel`]: {
          borderInlineStart: `${p}px ${u} ${v}`
        },
        [`${t}-date-panel,
          ${t}-time-panel`]: {
          transition: `opacity ${_}`
        },
        // Keyboard
        "&-active": {
          [`${t}-date-panel,
            ${t}-time-panel`]: {
            opacity: 0.3,
            "&-active": {
              opacity: 1
            }
          }
        }
      },
      // ====================== Time Panel ======================
      "&-time-panel": {
        width: "auto",
        minWidth: "auto",
        direction: "ltr",
        [`${t}-content`]: {
          display: "flex",
          flex: "auto",
          height: W
        },
        "&-column": {
          flex: "1 0 auto",
          width: G,
          margin: `${c}px 0`,
          padding: 0,
          overflowY: "hidden",
          textAlign: "start",
          listStyle: "none",
          transition: `background ${M}`,
          overflowX: "hidden",
          "&::after": {
            display: "block",
            height: W - ee,
            content: '""'
          },
          "&:not(:first-child)": {
            borderInlineStart: `${p}px ${u} ${v}`
          },
          "&-active": {
            background: new Vt(ie).setAlpha(0.2).toHexString()
          },
          "&:hover": {
            overflowY: "auto"
          },
          "> li": {
            margin: 0,
            padding: 0,
            [`&${t}-time-panel-cell`]: {
              marginInline: oe,
              [`${t}-time-panel-cell-inner`]: {
                display: "block",
                width: G - 2 * oe,
                height: ee,
                margin: 0,
                paddingBlock: 0,
                paddingInlineEnd: 0,
                paddingInlineStart: (G - ee) / 2,
                color: q,
                lineHeight: `${ee}px`,
                borderRadius: O,
                cursor: "pointer",
                transition: `background ${M}`,
                "&:hover": {
                  background: V
                }
              },
              "&-selected": {
                [`${t}-time-panel-cell-inner`]: {
                  background: ie
                }
              },
              "&-disabled": {
                [`${t}-time-panel-cell-inner`]: {
                  color: U,
                  background: "transparent",
                  cursor: "not-allowed"
                }
              }
            }
          }
        }
      },
      // https://github.com/ant-design/ant-design/issues/39227
      [`&-datetime-panel ${t}-time-panel-column:after`]: {
        height: W - ee + c * 2
      }
    }
  };
}, ol = (e) => {
  const {
    componentCls: t,
    colorBgContainer: n,
    colorError: a,
    colorErrorOutline: r,
    colorWarning: l,
    colorWarningOutline: o
  } = e;
  return {
    [t]: {
      [`&-status-error${t}`]: {
        "&, &:not([disabled]):hover": {
          backgroundColor: n,
          borderColor: a
        },
        "&-focused, &:focus": Y({}, cn(sn(e, {
          inputBorderActiveColor: a,
          inputBorderHoverColor: a,
          controlOutline: r
        }))),
        [`${t}-active-bar`]: {
          background: a
        }
      },
      [`&-status-warning${t}`]: {
        "&, &:not([disabled]):hover": {
          backgroundColor: n,
          borderColor: l
        },
        "&-focused, &:focus": Y({}, cn(sn(e, {
          inputBorderActiveColor: l,
          inputBorderHoverColor: l,
          controlOutline: o
        }))),
        [`${t}-active-bar`]: {
          background: l
        }
      }
    }
  };
}, ll = (e) => {
  const {
    componentCls: t,
    antCls: n,
    boxShadowPopoverArrow: a,
    controlHeight: r,
    fontSize: l,
    inputPaddingHorizontal: o,
    colorBgContainer: i,
    lineWidth: c,
    lineType: s,
    colorBorder: p,
    borderRadius: u,
    motionDurationMid: d,
    colorBgContainerDisabled: m,
    colorTextDisabled: y,
    colorTextPlaceholder: v,
    controlHeightLG: f,
    fontSizeLG: $,
    controlHeightSM: g,
    inputPaddingHorizontalSM: M,
    paddingXS: x,
    marginXS: R,
    colorTextDescription: E,
    lineWidthBold: j,
    lineHeight: U,
    colorPrimary: q,
    motionDurationSlow: A,
    zIndexPopup: T,
    paddingXXS: _,
    paddingSM: J,
    pickerTextHeight: I,
    controlItemBgActive: S,
    colorPrimaryBorder: D,
    sizePopupArrow: w,
    borderRadiusXS: C,
    borderRadiusOuter: O,
    colorBgElevated: h,
    borderRadiusLG: P,
    boxShadowSecondary: V,
    borderRadiusSM: W,
    colorSplit: G,
    controlItemBgHover: ee,
    presetsWidth: ie,
    presetsMaxWidth: oe
  } = e;
  return [
    {
      [t]: Y(Y(Y({}, ea(e)), ln(e, r, l, o)), {
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        background: i,
        lineHeight: 1,
        border: `${c}px ${s} ${p}`,
        borderRadius: u,
        transition: `border ${d}, box-shadow ${d}`,
        "&:hover, &-focused": Y({}, qr(e)),
        "&-focused": Y({}, cn(e)),
        [`&${t}-disabled`]: {
          background: m,
          borderColor: p,
          cursor: "not-allowed",
          [`${t}-suffix`]: {
            color: y
          }
        },
        [`&${t}-borderless`]: {
          backgroundColor: "transparent !important",
          borderColor: "transparent !important",
          boxShadow: "none !important"
        },
        // ======================== Input =========================
        [`${t}-input`]: {
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
          width: "100%",
          "> input": Y(Y({}, Kr(e)), {
            flex: "auto",
            // Fix Firefox flex not correct:
            // https://github.com/ant-design/ant-design/pull/20023#issuecomment-564389553
            minWidth: 1,
            height: "auto",
            padding: 0,
            background: "transparent",
            border: 0,
            "&:focus": {
              boxShadow: "none"
            },
            "&[disabled]": {
              background: "transparent"
            }
          }),
          "&:hover": {
            [`${t}-clear`]: {
              opacity: 1
            }
          },
          "&-placeholder": {
            "> input": {
              color: v
            }
          }
        },
        // Size
        "&-large": Y(Y({}, ln(e, f, $, o)), {
          [`${t}-input > input`]: {
            fontSize: $
          }
        }),
        "&-small": Y({}, ln(e, g, l, M)),
        [`${t}-suffix`]: {
          display: "flex",
          flex: "none",
          alignSelf: "center",
          marginInlineStart: x / 2,
          color: y,
          lineHeight: 1,
          pointerEvents: "none",
          "> *": {
            verticalAlign: "top",
            "&:not(:last-child)": {
              marginInlineEnd: R
            }
          }
        },
        [`${t}-clear`]: {
          position: "absolute",
          top: "50%",
          insetInlineEnd: 0,
          color: y,
          lineHeight: 1,
          background: i,
          transform: "translateY(-50%)",
          cursor: "pointer",
          opacity: 0,
          transition: `opacity ${d}, color ${d}`,
          "> *": {
            verticalAlign: "top"
          },
          "&:hover": {
            color: E
          }
        },
        [`${t}-separator`]: {
          position: "relative",
          display: "inline-block",
          width: "1em",
          height: $,
          color: y,
          fontSize: $,
          verticalAlign: "top",
          cursor: "default",
          [`${t}-focused &`]: {
            color: E
          },
          [`${t}-range-separator &`]: {
            [`${t}-disabled &`]: {
              cursor: "not-allowed"
            }
          }
        },
        // ======================== Range =========================
        "&-range": {
          position: "relative",
          display: "inline-flex",
          // Clear
          [`${t}-clear`]: {
            insetInlineEnd: o
          },
          "&:hover": {
            [`${t}-clear`]: {
              opacity: 1
            }
          },
          // Active bar
          [`${t}-active-bar`]: {
            bottom: -c,
            height: j,
            marginInlineStart: o,
            background: q,
            opacity: 0,
            transition: `all ${A} ease-out`,
            pointerEvents: "none"
          },
          [`&${t}-focused`]: {
            [`${t}-active-bar`]: {
              opacity: 1
            }
          },
          [`${t}-range-separator`]: {
            alignItems: "center",
            padding: `0 ${x}px`,
            lineHeight: 1
          },
          [`&${t}-small`]: {
            [`${t}-clear`]: {
              insetInlineEnd: M
            },
            [`${t}-active-bar`]: {
              marginInlineStart: M
            }
          }
        },
        // ======================= Dropdown =======================
        "&-dropdown": Y(Y(Y({}, ea(e)), rl(e)), {
          position: "absolute",
          // Fix incorrect position of picker popup
          // https://github.com/ant-design/ant-design/issues/35590
          top: -9999,
          left: {
            _skip_check_: !0,
            value: -9999
          },
          zIndex: T,
          [`&${t}-dropdown-hidden`]: {
            display: "none"
          },
          [`&${t}-dropdown-placement-bottomLeft`]: {
            [`${t}-range-arrow`]: {
              top: 0,
              display: "block",
              transform: "translateY(-100%)"
            }
          },
          [`&${t}-dropdown-placement-topLeft`]: {
            [`${t}-range-arrow`]: {
              bottom: 0,
              display: "block",
              transform: "translateY(100%) rotate(180deg)"
            }
          },
          [`&${n}-slide-up-enter${n}-slide-up-enter-active${t}-dropdown-placement-topLeft,
          &${n}-slide-up-enter${n}-slide-up-enter-active${t}-dropdown-placement-topRight,
          &${n}-slide-up-appear${n}-slide-up-appear-active${t}-dropdown-placement-topLeft,
          &${n}-slide-up-appear${n}-slide-up-appear-active${t}-dropdown-placement-topRight`]: {
            animationName: Gr
          },
          [`&${n}-slide-up-enter${n}-slide-up-enter-active${t}-dropdown-placement-bottomLeft,
          &${n}-slide-up-enter${n}-slide-up-enter-active${t}-dropdown-placement-bottomRight,
          &${n}-slide-up-appear${n}-slide-up-appear-active${t}-dropdown-placement-bottomLeft,
          &${n}-slide-up-appear${n}-slide-up-appear-active${t}-dropdown-placement-bottomRight`]: {
            animationName: Qr
          },
          [`&${n}-slide-up-leave${n}-slide-up-leave-active${t}-dropdown-placement-topLeft,
          &${n}-slide-up-leave${n}-slide-up-leave-active${t}-dropdown-placement-topRight`]: {
            animationName: Xr
          },
          [`&${n}-slide-up-leave${n}-slide-up-leave-active${t}-dropdown-placement-bottomLeft,
          &${n}-slide-up-leave${n}-slide-up-leave-active${t}-dropdown-placement-bottomRight`]: {
            animationName: Zr
          },
          // Time picker with additional style
          [`${t}-panel > ${t}-time-panel`]: {
            paddingTop: _
          },
          // ======================== Ranges ========================
          [`${t}-ranges`]: {
            marginBottom: 0,
            padding: `${_}px ${J}px`,
            overflow: "hidden",
            lineHeight: `${I - 2 * c - x / 2}px`,
            textAlign: "start",
            listStyle: "none",
            display: "flex",
            justifyContent: "space-between",
            "> li": {
              display: "inline-block"
            },
            // https://github.com/ant-design/ant-design/issues/23687
            [`${t}-preset > ${n}-tag-blue`]: {
              color: q,
              background: S,
              borderColor: D,
              cursor: "pointer"
            },
            [`${t}-ok`]: {
              marginInlineStart: "auto"
            }
          },
          [`${t}-range-wrapper`]: {
            display: "flex",
            position: "relative"
          },
          [`${t}-range-arrow`]: Y({
            position: "absolute",
            zIndex: 1,
            display: "none",
            marginInlineStart: o * 1.5,
            transition: `left ${A} ease-out`
          }, Ir(w, C, O, h, a)),
          [`${t}-panel-container`]: {
            overflow: "hidden",
            verticalAlign: "top",
            background: h,
            borderRadius: P,
            boxShadow: V,
            transition: `margin ${A}`,
            // ======================== Layout ========================
            [`${t}-panel-layout`]: {
              display: "flex",
              flexWrap: "nowrap",
              alignItems: "stretch"
            },
            // ======================== Preset ========================
            [`${t}-presets`]: {
              display: "flex",
              flexDirection: "column",
              minWidth: ie,
              maxWidth: oe,
              ul: {
                height: 0,
                flex: "auto",
                listStyle: "none",
                overflow: "auto",
                margin: 0,
                padding: x,
                borderInlineEnd: `${c}px ${s} ${G}`,
                li: Y(Y({}, Yr), {
                  borderRadius: W,
                  paddingInline: x,
                  paddingBlock: (g - Math.round(l * U)) / 2,
                  cursor: "pointer",
                  transition: `all ${A}`,
                  "+ li": {
                    marginTop: R
                  },
                  "&:hover": {
                    background: ee
                  }
                })
              }
            },
            // ======================== Panels ========================
            [`${t}-panels`]: {
              display: "inline-flex",
              flexWrap: "nowrap",
              direction: "ltr",
              [`${t}-panel`]: {
                borderWidth: `0 0 ${c}px`
              },
              "&:last-child": {
                [`${t}-panel`]: {
                  borderWidth: 0
                }
              }
            },
            [`${t}-panel`]: {
              verticalAlign: "top",
              background: "transparent",
              borderRadius: 0,
              borderWidth: 0,
              [`${t}-content,
            table`]: {
                textAlign: "center"
              },
              "&-focused": {
                borderColor: p
              }
            }
          }
        }),
        "&-dropdown-range": {
          padding: `${w * 2 / 3}px 0`,
          "&-hidden": {
            display: "none"
          }
        },
        "&-rtl": {
          direction: "rtl",
          [`${t}-separator`]: {
            transform: "rotate(180deg)"
          },
          [`${t}-footer`]: {
            "&-extra": {
              direction: "rtl"
            }
          }
        }
      })
    },
    // Follow code may reuse in other components
    na(e, "slide-up"),
    na(e, "slide-down"),
    ta(e, "move-up"),
    ta(e, "move-down")
  ];
}, il = (e) => {
  const {
    componentCls: n,
    controlHeightLG: a,
    controlHeightSM: r,
    colorPrimary: l,
    paddingXXS: o
  } = e;
  return {
    pickerCellCls: `${n}-cell`,
    pickerCellInnerCls: `${n}-cell-inner`,
    pickerTextHeight: a,
    pickerPanelCellWidth: r * 1.5,
    pickerPanelCellHeight: r,
    pickerDateHoverRangeBorderColor: new Vt(l).lighten(20).toHexString(),
    pickerBasicCellHoverWithRangeColor: new Vt(l).lighten(35).toHexString(),
    pickerPanelWithoutTimeCellHeight: a * 1.65,
    pickerYearMonthCellWidth: a * 1.5,
    pickerTimePanelColumnHeight: 28 * 8,
    pickerTimePanelColumnWidth: a * 1.4,
    pickerTimePanelCellHeight: 28,
    pickerQuarterPanelContentHeight: a * 1.4,
    pickerCellPaddingVertical: o,
    pickerCellBorderGap: 2,
    pickerControlIconSize: 7,
    pickerControlIconBorderWidth: 1.5
  };
}, rr = Rr("DatePicker", (e) => {
  const t = sn(Ur(e), il(e));
  return [
    ll(t),
    ol(t),
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    Tr(e, {
      focusElCls: `${e.componentCls}-focused`
    })
  ];
}, (e) => ({
  presetsWidth: 120,
  presetsMaxWidth: 200,
  zIndexPopup: e.zIndexPopupBase + 50
})), sl = (e, t) => {
  let {
    attrs: n,
    slots: a
  } = t;
  return b(Er, N(N({
    size: "small",
    type: "primary"
  }, e), n), a);
};
function ul(e, t) {
  let {
    slots: n,
    attrs: a
  } = t;
  return b(Fr, N(N({
    color: "blue"
  }, e), a), n);
}
var cl = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z" } }] }, name: "calendar", theme: "outlined" };
function da(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, a = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), a.forEach(function(r) {
      dl(e, r, n[r]);
    });
  }
  return e;
}
function dl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var zt = function(t, n) {
  var a = da({}, t, n.attrs);
  return b(wn, da({}, a, {
    icon: cl
  }), null);
};
zt.displayName = "CalendarOutlined";
zt.inheritAttrs = !1;
var fl = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { tag: "path", attrs: { d: "M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z" } }] }, name: "clock-circle", theme: "outlined" };
function fa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, a = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), a.forEach(function(r) {
      vl(e, r, n[r]);
    });
  }
  return e;
}
function vl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ut = function(t, n) {
  var a = fa({}, t, n.attrs);
  return b(wn, fa({}, a, {
    icon: fl
  }), null);
};
Ut.displayName = "ClockCircleOutlined";
Ut.inheritAttrs = !1;
function pl(e, t, n) {
  return n !== void 0 ? n : t === "year" && e.lang.yearPlaceholder ? e.lang.yearPlaceholder : t === "quarter" && e.lang.quarterPlaceholder ? e.lang.quarterPlaceholder : t === "month" && e.lang.monthPlaceholder ? e.lang.monthPlaceholder : t === "week" && e.lang.weekPlaceholder ? e.lang.weekPlaceholder : t === "time" && e.timePickerLocale.placeholder ? e.timePickerLocale.placeholder : e.lang.placeholder;
}
function gl(e, t, n) {
  return n !== void 0 ? n : t === "year" && e.lang.yearPlaceholder ? e.lang.rangeYearPlaceholder : t === "month" && e.lang.monthPlaceholder ? e.lang.rangeMonthPlaceholder : t === "week" && e.lang.weekPlaceholder ? e.lang.rangeWeekPlaceholder : t === "time" && e.timePickerLocale.placeholder ? e.timePickerLocale.rangePlaceholder : e.lang.rangePlaceholder;
}
function or(e, t) {
  const n = {
    adjustX: 1,
    adjustY: 1
  };
  switch (t) {
    case "bottomLeft":
      return {
        points: ["tl", "bl"],
        offset: [0, 4],
        overflow: n
      };
    case "bottomRight":
      return {
        points: ["tr", "br"],
        offset: [0, 4],
        overflow: n
      };
    case "topLeft":
      return {
        points: ["bl", "tl"],
        offset: [0, -4],
        overflow: n
      };
    case "topRight":
      return {
        points: ["br", "tr"],
        offset: [0, -4],
        overflow: n
      };
    default:
      return {
        points: e === "rtl" ? ["tr", "br"] : ["tl", "bl"],
        offset: [0, 4],
        overflow: n
      };
  }
}
function lr() {
  return {
    id: String,
    /**
     * @deprecated `dropdownClassName` is deprecated which will be removed in next major
     *   version.Please use `popupClassName` instead.
     */
    dropdownClassName: String,
    popupClassName: String,
    popupStyle: un(),
    transitionName: String,
    placeholder: String,
    allowClear: je(),
    autofocus: je(),
    disabled: je(),
    tabindex: Number,
    open: je(),
    defaultOpen: je(),
    /** Make input readOnly to avoid popup keyboard in mobile */
    inputReadOnly: je(),
    format: ct([String, Function, Array]),
    // Value
    // format:  string | CustomFormat<DateType> | (string | CustomFormat<DateType>)[];
    // Render
    // suffixIcon?: VueNode;
    // clearIcon?: VueNode;
    // prevIcon?: VueNode;
    // nextIcon?: VueNode;
    // superPrevIcon?: VueNode;
    // superNextIcon?: VueNode;
    getPopupContainer: ne(),
    panelRender: ne(),
    // // Events
    onChange: ne(),
    "onUpdate:value": ne(),
    onOk: ne(),
    onOpenChange: ne(),
    "onUpdate:open": ne(),
    onFocus: ne(),
    onBlur: ne(),
    onMousedown: ne(),
    onMouseup: ne(),
    onMouseenter: ne(),
    onMouseleave: ne(),
    onClick: ne(),
    onContextmenu: ne(),
    onKeydown: ne(),
    // WAI-ARIA
    role: String,
    name: String,
    autocomplete: String,
    direction: pt(),
    showToday: je(),
    showTime: ct([Boolean, Object]),
    locale: un(),
    size: pt(),
    bordered: je(),
    dateRender: ne(),
    disabledDate: ne(),
    mode: pt(),
    picker: pt(),
    valueFormat: String,
    placement: pt(),
    status: pt(),
    /** @deprecated Please use `disabledTime` instead. */
    disabledHours: ne(),
    /** @deprecated Please use `disabledTime` instead. */
    disabledMinutes: ne(),
    /** @deprecated Please use `disabledTime` instead. */
    disabledSeconds: ne()
  };
}
function hl() {
  return {
    defaultPickerValue: ct([Object, String]),
    defaultValue: ct([Object, String]),
    value: ct([Object, String]),
    presets: nt(),
    disabledTime: ne(),
    renderExtraFooter: ne(),
    showNow: je(),
    monthCellRender: ne(),
    // deprecated  Please use `monthCellRender"` instead.',
    monthCellContentRender: ne()
  };
}
function ml() {
  return {
    allowEmpty: nt(),
    dateRender: ne(),
    defaultPickerValue: nt(),
    defaultValue: nt(),
    value: nt(),
    presets: nt(),
    disabledTime: ne(),
    disabled: ct([Boolean, Array]),
    renderExtraFooter: ne(),
    separator: {
      type: String
    },
    showTime: ct([Boolean, Object]),
    ranges: un(),
    placeholder: nt(),
    mode: nt(),
    onChange: ne(),
    "onUpdate:value": ne(),
    onCalendarChange: ne(),
    onPanelChange: ne(),
    onOk: ne()
  };
}
var bl = function(e, t) {
  var n = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, a = Object.getOwnPropertySymbols(e); r < a.length; r++)
      t.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[r]) && (n[a[r]] = e[a[r]]);
  return n;
};
function wl(e, t) {
  function n(s, p) {
    const u = Y(Y(Y({}, lr()), hl()), t);
    return Ke({
      compatConfig: {
        MODE: 3
      },
      name: p,
      inheritAttrs: !1,
      props: u,
      slots: Object,
      setup(d, m) {
        let {
          slots: y,
          expose: v,
          attrs: f,
          emit: $
        } = m;
        const g = d, M = pa(), x = ga.useInject();
        process.env.NODE_ENV !== "production" && (gt(s !== "quarter", p || "DatePicker", `DatePicker.${p} is legacy usage. Please use DatePicker[picker='${s}'] directly.`), gt(!g.dropdownClassName, p || "DatePicker", "`dropdownClassName` is deprecated. Please use `popupClassName` instead."), gt(!(g.monthCellContentRender || y.monthCellContentRender), p || "DatePicker", '`monthCellContentRender` is deprecated. Please use `monthCellRender"` instead.'), gt(!f.getCalendarContainer, p || "DatePicker", '`getCalendarContainer` is deprecated. Please use `getPopupContainer"` instead.'));
        const {
          prefixCls: R,
          direction: E,
          getPopupContainer: j,
          size: U,
          rootPrefixCls: q,
          disabled: A
        } = ha("picker", g), {
          compactSize: T,
          compactItemClassnames: _
        } = ma(R, E), J = F(() => T.value || U.value), [I, S] = rr(R), D = z();
        v({
          focus: () => {
            var L;
            (L = D.value) === null || L === void 0 || L.focus();
          },
          blur: () => {
            var L;
            (L = D.value) === null || L === void 0 || L.blur();
          }
        });
        const w = (L) => g.valueFormat ? e.toString(L, g.valueFormat) : L, C = (L, te) => {
          const Q = w(L);
          $("update:value", Q), $("change", Q, te), M.onFieldChange();
        }, O = (L) => {
          $("update:open", L), $("openChange", L);
        }, h = (L) => {
          $("focus", L);
        }, P = (L) => {
          $("blur", L), M.onFieldBlur();
        }, V = (L, te) => {
          const Q = w(L);
          $("panelChange", Q, te);
        }, W = (L) => {
          const te = w(L);
          $("ok", te);
        }, [G] = ba("DatePicker", wa), ee = F(() => g.value ? g.valueFormat ? e.toDate(g.value, g.valueFormat) : g.value : g.value === "" ? void 0 : g.value), ie = F(() => g.defaultValue ? g.valueFormat ? e.toDate(g.defaultValue, g.valueFormat) : g.defaultValue : g.defaultValue === "" ? void 0 : g.defaultValue), oe = F(() => g.defaultPickerValue ? g.valueFormat ? e.toDate(g.defaultPickerValue, g.valueFormat) : g.defaultPickerValue : g.defaultPickerValue === "" ? void 0 : g.defaultPickerValue);
        return () => {
          var L, te, Q, X, se, re;
          const be = Y(Y({}, G.value), g.locale), K = Y(Y({}, g), f), {
            bordered: ae = !0,
            placeholder: Oe,
            suffixIcon: Ye = (L = y.suffixIcon) === null || L === void 0 ? void 0 : L.call(y),
            showToday: Ge = !0,
            transitionName: Qe,
            allowClear: ke = !0,
            dateRender: _e = y.dateRender,
            renderExtraFooter: Be = y.renderExtraFooter,
            monthCellRender: De = y.monthCellRender || g.monthCellContentRender || y.monthCellContentRender,
            clearIcon: he = (te = y.clearIcon) === null || te === void 0 ? void 0 : te.call(y),
            id: Ne = M.id.value
          } = K, vt = bl(K, ["bordered", "placeholder", "suffixIcon", "showToday", "transitionName", "allowClear", "dateRender", "renderExtraFooter", "monthCellRender", "clearIcon", "id"]), it = K.showTime === "" ? !0 : K.showTime, {
            format: xe
          } = K;
          let We = {};
          s && (We.picker = s);
          const Re = s || K.picker || "date";
          We = Y(Y(Y({}, We), it ? _t(Y({
            format: xe,
            picker: Re
          }, typeof it == "object" ? it : {})) : {}), Re === "time" ? _t(Y(Y({
            format: xe
          }, vt), {
            picker: Re
          })) : {});
          const Se = R.value, Xe = b(Ht, null, [Ye || (s === "time" ? b(Ut, null, null) : b(zt, null, null)), x.hasFeedback && x.feedbackIcon]);
          return I(b(Lo, N(N(N({
            monthCellRender: De,
            dateRender: _e,
            renderExtraFooter: Be,
            ref: D,
            placeholder: pl(be, Re, Oe),
            suffixIcon: Xe,
            dropdownAlign: or(E.value, g.placement),
            clearIcon: he || b(Ca, null, null),
            allowClear: ke,
            transitionName: Qe || `${q.value}-slide-up`
          }, vt), We), {}, {
            id: Ne,
            picker: Re,
            value: ee.value,
            defaultValue: ie.value,
            defaultPickerValue: oe.value,
            showToday: Ge,
            locale: be.lang,
            class: ue({
              [`${Se}-${J.value}`]: J.value,
              [`${Se}-borderless`]: !ae
            }, Da(Se, Pa(x.status, g.status), x.hasFeedback), f.class, S.value, _.value),
            disabled: A.value,
            prefixCls: Se,
            getPopupContainer: f.getCalendarContainer || j.value,
            generateConfig: e,
            prevIcon: ((Q = y.prevIcon) === null || Q === void 0 ? void 0 : Q.call(y)) || b("span", {
              class: `${Se}-prev-icon`
            }, null),
            nextIcon: ((X = y.nextIcon) === null || X === void 0 ? void 0 : X.call(y)) || b("span", {
              class: `${Se}-next-icon`
            }, null),
            superPrevIcon: ((se = y.superPrevIcon) === null || se === void 0 ? void 0 : se.call(y)) || b("span", {
              class: `${Se}-super-prev-icon`
            }, null),
            superNextIcon: ((re = y.superNextIcon) === null || re === void 0 ? void 0 : re.call(y)) || b("span", {
              class: `${Se}-super-next-icon`
            }, null),
            components: ir,
            direction: E.value,
            dropdownClassName: ue(S.value, g.popupClassName, g.dropdownClassName),
            onChange: C,
            onOpenChange: O,
            onFocus: h,
            onBlur: P,
            onPanelChange: V,
            onOk: W
          }), null));
        };
      }
    });
  }
  const a = n(void 0, "ADatePicker"), r = n("week", "AWeekPicker"), l = n("month", "AMonthPicker"), o = n("year", "AYearPicker"), i = n("time", "TimePicker"), c = n("quarter", "AQuarterPicker");
  return {
    DatePicker: a,
    WeekPicker: r,
    MonthPicker: l,
    YearPicker: o,
    TimePicker: i,
    QuarterPicker: c
  };
}
var Cl = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M873.1 596.2l-164-208A32 32 0 00684 376h-64.8c-6.7 0-10.4 7.7-6.3 13l144.3 183H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h695.9c26.8 0 41.7-30.8 25.2-51.8z" } }] }, name: "swap-right", theme: "outlined" };
function va(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, a = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), a.forEach(function(r) {
      $l(e, r, n[r]);
    });
  }
  return e;
}
function $l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var _n = function(t, n) {
  var a = va({}, t, n.attrs);
  return b(wn, va({}, a, {
    icon: Cl
  }), null);
};
_n.displayName = "SwapRightOutlined";
_n.inheritAttrs = !1;
var yl = function(e, t) {
  var n = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, a = Object.getOwnPropertySymbols(e); r < a.length; r++)
      t.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[r]) && (n[a[r]] = e[a[r]]);
  return n;
};
function kl(e, t) {
  return Ke({
    compatConfig: {
      MODE: 3
    },
    name: "ARangePicker",
    inheritAttrs: !1,
    props: Y(Y(Y({}, lr()), ml()), t),
    slots: Object,
    setup(a, r) {
      let {
        expose: l,
        slots: o,
        attrs: i,
        emit: c
      } = r;
      const s = a, p = pa(), u = ga.useInject();
      process.env.NODE_ENV !== "production" && (gt(!s.dropdownClassName, "RangePicker", "`dropdownClassName` is deprecated. Please use `popupClassName` instead."), gt(!i.getCalendarContainer, "DatePicker", '`getCalendarContainer` is deprecated. Please use `getPopupContainer"` instead.'));
      const {
        prefixCls: d,
        direction: m,
        getPopupContainer: y,
        size: v,
        rootPrefixCls: f,
        disabled: $
      } = ha("picker", s), {
        compactSize: g,
        compactItemClassnames: M
      } = ma(d, m), x = F(() => g.value || v.value), [R, E] = rr(d), j = z();
      l({
        focus: () => {
          var h;
          (h = j.value) === null || h === void 0 || h.focus();
        },
        blur: () => {
          var h;
          (h = j.value) === null || h === void 0 || h.blur();
        }
      });
      const U = (h) => s.valueFormat ? e.toString(h, s.valueFormat) : h, q = (h, P) => {
        const V = U(h);
        c("update:value", V), c("change", V, P), p.onFieldChange();
      }, A = (h) => {
        c("update:open", h), c("openChange", h);
      }, T = (h) => {
        c("focus", h);
      }, _ = (h) => {
        c("blur", h), p.onFieldBlur();
      }, J = (h, P) => {
        const V = U(h);
        c("panelChange", V, P);
      }, I = (h) => {
        const P = U(h);
        c("ok", P);
      }, S = (h, P, V) => {
        const W = U(h);
        c("calendarChange", W, P, V);
      }, [D] = ba("DatePicker", wa), w = F(() => s.value && s.valueFormat ? e.toDate(s.value, s.valueFormat) : s.value), C = F(() => s.defaultValue && s.valueFormat ? e.toDate(s.defaultValue, s.valueFormat) : s.defaultValue), O = F(() => s.defaultPickerValue && s.valueFormat ? e.toDate(s.defaultPickerValue, s.valueFormat) : s.defaultPickerValue);
      return () => {
        var h, P, V, W, G, ee, ie;
        const oe = Y(Y({}, D.value), s.locale), L = Y(Y({}, s), i), {
          prefixCls: te,
          bordered: Q = !0,
          placeholder: X,
          suffixIcon: se = (h = o.suffixIcon) === null || h === void 0 ? void 0 : h.call(o),
          picker: re = "date",
          transitionName: be,
          allowClear: K = !0,
          dateRender: ae = o.dateRender,
          renderExtraFooter: Oe = o.renderExtraFooter,
          separator: Ye = (P = o.separator) === null || P === void 0 ? void 0 : P.call(o),
          clearIcon: Ge = (V = o.clearIcon) === null || V === void 0 ? void 0 : V.call(o),
          id: Qe = p.id.value
        } = L, ke = yl(L, ["prefixCls", "bordered", "placeholder", "suffixIcon", "picker", "transitionName", "allowClear", "dateRender", "renderExtraFooter", "separator", "clearIcon", "id"]);
        delete ke["onUpdate:value"], delete ke["onUpdate:open"];
        const {
          format: _e,
          showTime: Be
        } = L;
        let De = {};
        De = Y(Y(Y({}, De), Be ? _t(Y({
          format: _e,
          picker: re
        }, Be)) : {}), re === "time" ? _t(Y(Y({
          format: _e
        }, zr(ke, ["disabledTime"])), {
          picker: re
        })) : {});
        const he = d.value, Ne = b(Ht, null, [se || (re === "time" ? b(Ut, null, null) : b(zt, null, null)), u.hasFeedback && u.feedbackIcon]);
        return R(b(nl, N(N(N({
          dateRender: ae,
          renderExtraFooter: Oe,
          separator: Ye || b("span", {
            "aria-label": "to",
            class: `${he}-separator`
          }, [b(_n, null, null)]),
          ref: j,
          dropdownAlign: or(m.value, s.placement),
          placeholder: gl(oe, re, X),
          suffixIcon: Ne,
          clearIcon: Ge || b(Ca, null, null),
          allowClear: K,
          transitionName: be || `${f.value}-slide-up`
        }, ke), De), {}, {
          disabled: $.value,
          id: Qe,
          value: w.value,
          defaultValue: C.value,
          defaultPickerValue: O.value,
          picker: re,
          class: ue({
            [`${he}-${x.value}`]: x.value,
            [`${he}-borderless`]: !Q
          }, Da(he, Pa(u.status, s.status), u.hasFeedback), i.class, E.value, M.value),
          locale: oe.lang,
          prefixCls: he,
          getPopupContainer: i.getCalendarContainer || y.value,
          generateConfig: e,
          prevIcon: ((W = o.prevIcon) === null || W === void 0 ? void 0 : W.call(o)) || b("span", {
            class: `${he}-prev-icon`
          }, null),
          nextIcon: ((G = o.nextIcon) === null || G === void 0 ? void 0 : G.call(o)) || b("span", {
            class: `${he}-next-icon`
          }, null),
          superPrevIcon: ((ee = o.superPrevIcon) === null || ee === void 0 ? void 0 : ee.call(o)) || b("span", {
            class: `${he}-super-prev-icon`
          }, null),
          superNextIcon: ((ie = o.superNextIcon) === null || ie === void 0 ? void 0 : ie.call(o)) || b("span", {
            class: `${he}-super-next-icon`
          }, null),
          components: ir,
          direction: m.value,
          dropdownClassName: ue(E.value, s.popupClassName, s.dropdownClassName),
          onChange: q,
          onOpenChange: A,
          onFocus: T,
          onBlur: _,
          onPanelChange: J,
          onOk: I,
          onCalendarChange: S
        }), null));
      };
    }
  });
}
const ir = {
  button: sl,
  rangeItem: ul
};
function xl(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
function _t(e) {
  const {
    format: t,
    picker: n,
    showHour: a,
    showMinute: r,
    showSecond: l,
    use12Hours: o
  } = e, i = xl(t)[0], c = Y({}, e);
  return i && typeof i == "string" && (!i.includes("s") && l === void 0 && (c.showSecond = !1), !i.includes("m") && r === void 0 && (c.showMinute = !1), !i.includes("H") && !i.includes("h") && a === void 0 && (c.showHour = !1), (i.includes("a") || i.includes("A")) && o === void 0 && (c.use12Hours = !0)), n === "time" ? c : (typeof i == "function" && delete c.format, {
    showTime: c
  });
}
function Al(e, t) {
  const {
    DatePicker: n,
    WeekPicker: a,
    MonthPicker: r,
    YearPicker: l,
    TimePicker: o,
    QuarterPicker: i
  } = wl(e, t), c = kl(e, t);
  return {
    DatePicker: n,
    WeekPicker: a,
    MonthPicker: r,
    YearPicker: l,
    TimePicker: o,
    QuarterPicker: i,
    RangePicker: c
  };
}
export {
  Hl as a,
  lr as c,
  hl as d,
  Al as g,
  ml as r
};
