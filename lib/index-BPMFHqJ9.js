import { l as p, ba as w, _ as a } from "./index-DGUz0BTe.js";
import { defineComponent as C, reactive as x, getCurrentInstance as M, onMounted as H, onUpdated as W, onUnmounted as _, watch as B } from "vue";
const U = C({
  compatConfig: {
    MODE: 3
  },
  name: "ResizeObserver",
  props: {
    disabled: Boolean,
    onResize: Function
  },
  emits: ["resize"],
  setup(i, v) {
    let {
      slots: c
    } = v;
    const s = x({
      width: 0,
      height: 0,
      offsetHeight: 0,
      offsetWidth: 0
    });
    let h = null, n = null;
    const r = () => {
      n && (n.disconnect(), n = null);
    }, b = (e) => {
      const {
        onResize: t
      } = i, o = e[0].target, {
        width: O,
        height: R
      } = o.getBoundingClientRect(), {
        offsetWidth: f,
        offsetHeight: l
      } = o, g = Math.floor(O), u = Math.floor(R);
      if (s.width !== g || s.height !== u || s.offsetWidth !== f || s.offsetHeight !== l) {
        const m = {
          width: g,
          height: u,
          offsetWidth: f,
          offsetHeight: l
        };
        a(s, m), t && Promise.resolve().then(() => {
          t(a(a({}, m), {
            offsetWidth: f,
            offsetHeight: l
          }), o);
        });
      }
    }, z = M(), d = () => {
      const {
        disabled: e
      } = i;
      if (e) {
        r();
        return;
      }
      const t = p(z);
      t !== h && (r(), h = t), !n && t && (n = new w(b), n.observe(t));
    };
    return H(() => {
      d();
    }), W(() => {
      d();
    }), _(() => {
      r();
    }), B(() => i.disabled, () => {
      d();
    }, {
      flush: "post"
    }), () => {
      var e;
      return (e = c.default) === null || e === void 0 ? void 0 : e.call(c)[0];
    };
  }
});
export {
  U as R
};
