import { P as n, T as V, b as g, c as B, s as D, h as m } from "./styleChecker-DdDg1L8e.js";
import { defineComponent as M, ref as v, watch as L, computed as y, createVNode as d, Fragment as W } from "vue";
const l = {
  adjustX: 1,
  adjustY: 1
}, s = [0, 0], $ = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: l,
    offset: [0, -4],
    targetOffset: s
  },
  topCenter: {
    points: ["bc", "tc"],
    overflow: l,
    offset: [0, -4],
    targetOffset: s
  },
  topRight: {
    points: ["br", "tr"],
    overflow: l,
    offset: [0, -4],
    targetOffset: s
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: l,
    offset: [0, 4],
    targetOffset: s
  },
  bottomCenter: {
    points: ["tc", "bc"],
    overflow: l,
    offset: [0, 4],
    targetOffset: s
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: l,
    offset: [0, 4],
    targetOffset: s
  }
};
var F = function(e, c) {
  var i = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && c.indexOf(o) < 0 && (i[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, o = Object.getOwnPropertySymbols(e); a < o.length; a++)
      c.indexOf(o[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[a]) && (i[o[a]] = e[o[a]]);
  return i;
};
const I = M({
  compatConfig: {
    MODE: 3
  },
  props: {
    minOverlayWidthMatchTrigger: {
      type: Boolean,
      default: void 0
    },
    arrow: {
      type: Boolean,
      default: !1
    },
    prefixCls: n.string.def("rc-dropdown"),
    transitionName: String,
    overlayClassName: n.string.def(""),
    openClassName: String,
    animation: n.any,
    align: n.object,
    overlayStyle: {
      type: Object,
      default: void 0
    },
    placement: n.string.def("bottomLeft"),
    overlay: n.any,
    trigger: n.oneOfType([n.string, n.arrayOf(n.string)]).def("hover"),
    alignPoint: {
      type: Boolean,
      default: void 0
    },
    showAction: n.array,
    hideAction: n.array,
    getPopupContainer: Function,
    visible: {
      type: Boolean,
      default: void 0
    },
    defaultVisible: {
      type: Boolean,
      default: !1
    },
    mouseEnterDelay: n.number.def(0.15),
    mouseLeaveDelay: n.number.def(0.1)
  },
  emits: ["visibleChange", "overlayClick"],
  setup(e, c) {
    let {
      slots: i,
      emit: o,
      expose: a
    } = c;
    const f = v(!!e.visible);
    L(() => e.visible, (t) => {
      t !== void 0 && (f.value = t);
    });
    const p = v();
    a({
      triggerRef: p
    });
    const b = (t) => {
      e.visible === void 0 && (f.value = !1), o("overlayClick", t);
    }, h = (t) => {
      e.visible === void 0 && (f.value = t), o("visibleChange", t);
    }, C = () => {
      var t;
      const r = (t = i.overlay) === null || t === void 0 ? void 0 : t.call(i), u = {
        prefixCls: `${e.prefixCls}-menu`,
        onClick: b
      };
      return d(W, {
        key: D
      }, [e.arrow && d("div", {
        class: `${e.prefixCls}-arrow`
      }, null), m(r, u, !1)]);
    }, w = y(() => {
      const {
        minOverlayWidthMatchTrigger: t = !e.alignPoint
      } = e;
      return t;
    }), O = () => {
      var t;
      const r = (t = i.default) === null || t === void 0 ? void 0 : t.call(i);
      return f.value && r ? m(r[0], {
        class: e.openClassName || `${e.prefixCls}-open`
      }, !1) : r;
    }, P = y(() => !e.hideAction && e.trigger.indexOf("contextmenu") !== -1 ? ["click"] : e.hideAction);
    return () => {
      const {
        prefixCls: t,
        arrow: r,
        showAction: u,
        overlayStyle: x,
        trigger: A,
        placement: N,
        align: j,
        getPopupContainer: S,
        transitionName: T,
        animation: _,
        overlayClassName: k
      } = e, E = F(e, ["prefixCls", "arrow", "showAction", "overlayStyle", "trigger", "placement", "align", "getPopupContainer", "transitionName", "animation", "overlayClassName"]);
      return d(V, g(g({}, E), {}, {
        prefixCls: t,
        ref: p,
        popupClassName: B(k, {
          [`${t}-show-arrow`]: r
        }),
        popupStyle: x,
        builtinPlacements: $,
        action: A,
        showAction: u,
        hideAction: P.value || [],
        popupPlacement: N,
        popupAlign: j,
        popupTransitionName: T,
        popupAnimation: _,
        popupVisible: f.value,
        stretch: w.value ? "minWidth" : "",
        onPopupVisibleChange: h,
        getPopupContainer: S
      }), {
        popup: C,
        default: O
      });
    };
  }
});
export {
  I as D
};
