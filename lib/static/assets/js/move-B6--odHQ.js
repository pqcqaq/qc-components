import { ref as s, watch as m } from "vue";
import { f, K as r } from "./styleChecker-DdDg1L8e.js";
function K(t, a, o) {
  const n = s(t());
  return m(a, (i, e) => {
    o ? o(i, e) && (n.value = t()) : n.value = t();
  }), n;
}
const c = new r("antMoveDownIn", {
  "0%": {
    transform: "translate3d(0, 100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
}), y = new r("antMoveDownOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(0, 100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
}), p = new r("antMoveLeftIn", {
  "0%": {
    transform: "translate3d(-100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
}), O = new r("antMoveLeftOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(-100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
}), v = new r("antMoveRightIn", {
  "0%": {
    transform: "translate3d(100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
}), u = new r("antMoveRightOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
}), g = new r("antMoveUpIn", {
  "0%": {
    transform: "translate3d(0, -100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
}), l = new r("antMoveUpOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(0, -100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
}), d = {
  "move-up": {
    inKeyframes: g,
    outKeyframes: l
  },
  "move-down": {
    inKeyframes: c,
    outKeyframes: y
  },
  "move-left": {
    inKeyframes: p,
    outKeyframes: O
  },
  "move-right": {
    inKeyframes: v,
    outKeyframes: u
  }
}, I = (t, a) => {
  const {
    antCls: o
  } = t, n = `${o}-${a}`, {
    inKeyframes: i,
    outKeyframes: e
  } = d[a];
  return [f(n, i, e, t.motionDurationMid), {
    [`
        ${n}-enter,
        ${n}-appear
      `]: {
      opacity: 0,
      animationTimingFunction: t.motionEaseOutCirc
    },
    [`${n}-leave`]: {
      animationTimingFunction: t.motionEaseInOutCirc
    }
  }];
};
export {
  I as i,
  K as u
};
