import { defineComponent as V, defineAsyncComponent as k, ref as g, onMounted as R, watch as j, withDirectives as T, openBlock as i, createElementBlock as a, normalizeStyle as h, createVNode as m, unref as d, withCtx as O, createCommentVNode as E, Fragment as N, renderList as A, mergeProps as X, createTextVNode as Y, toDisplayString as z } from "vue";
import { C as $ } from "./index-DELjRDde.js";
import { M as H } from "./index-C-1l8VdM.js";
const U = { class: "fullscreen" }, W = {
  key: 0,
  class: "btns"
}, K = /* @__PURE__ */ V({
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
  setup(S) {
    const _ = k(() => import("./index-DELjRDde.js").then((t) => t.bf)), x = k(() => import("./index-DELjRDde.js").then((t) => t.be)), e = S, r = g({}), f = g(!1), y = g(e.schema);
    R(() => {
      Object.keys(e.init).length > 0 && (r.value = { ...e.init }), e.title && (y.value.title = e.title);
    });
    const D = () => {
      e.allowDirectClose ? e.onCancel() : H.confirm({
        title: "确认关闭",
        content: "关闭后将不会保存当前数据，是否继续？",
        onOk: () => {
          e.onCancel();
        },
        okText: "确认关闭",
        okType: "primary",
        okButtonProps: { danger: !0 },
        cancelText: "返回",
        zIndex: 1e4,
        centered: !0
      });
    }, F = () => {
      f.value = !0;
    }, L = () => {
      f.value = !1;
    }, P = {
      mounted(t) {
        if (!e.draggable)
          return;
        let o = t;
        const n = (s) => {
          const c = {
            x: o.getBoundingClientRect().x,
            y: o.getBoundingClientRect().y
          }, u = {
            x: s.clientX,
            y: s.clientY
          }, C = {
            width: o.getBoundingClientRect().width,
            height: o.getBoundingClientRect().height
          }, B = (w) => {
            o.style.cursor = "move";
            const b = {
              x: w.clientX - u.x,
              y: w.clientY - u.y
            }, l = {
              x: c.x + b.x,
              y: c.y + b.y
            };
            l.x < 15 || l.y < 15 || l.x + C.width > window.innerWidth - 30 || l.y + C.height > window.innerHeight - 15 || (o.style.left = l.x + "px", o.style.top = l.y + "px");
          };
          document.addEventListener("mousemove", B), document.addEventListener("mouseup", () => {
            o.style.cursor = "default", document.removeEventListener("mousemove", B);
          });
        };
        o.style.position = "absolute", o.addEventListener("mousedown", n);
      },
      // 取消挂载时注销事件
      unmounted(t) {
        if (!e.draggable)
          return;
        t.removeEventListener("mousedown", () => {
        });
      }
    };
    let p = null;
    const I = {
      mounted(t, o) {
        p = t;
        const n = o.value;
        n.enable && (t.style.opacity = "0", setTimeout(() => {
          t.style.transition = "opacity " + n.fadeTime + "ms ease", t.style.opacity = "1";
        }, 10));
      }
    };
    let v = null;
    const M = {
      mounted(t, o) {
        v = t;
        const n = o.value;
        if (!n.enable)
          return;
        if (t.style.scale = "0.2", !e.mousePosition) {
          t.style.transformOrigin = "center";
          return;
        }
        const s = t.getBoundingClientRect(), c = e.mousePosition.x - s.left, u = e.mousePosition.y - s.top;
        t.style.transformOrigin = `${c}px ${u}px`, setTimeout(() => {
          t.style.transition = "scale " + n.fadeTime + "ms ease", t.style.scale = "1";
        }, 10);
      }
    };
    return j(
      () => e.goClose.value,
      (t) => {
        t && (p && (p.style.opacity = "0"), v && (v.style.scale = "0.2"));
      }
    ), (t, o) => T((i(), a("div", U, [
      T((i(), a("div", {
        class: "full-form",
        style: h({
          ...e.style
        })
      }, [
        m(d(_), {
          schema: y.value,
          modelValue: r.value,
          "onUpdate:modelValue": o[0] || (o[0] = (n) => r.value = n),
          "show-btns": e.showBtns,
          class: "form",
          "on-before-submit": F,
          "on-submit": e.onSubmit,
          "on-after-submit": L
        }, null, 8, ["schema", "modelValue", "show-btns", "on-submit"]),
        e.showCloseBtn ? (i(), a("div", W, [
          m(d(x), {
            shape: "circle",
            type: "primary",
            danger: "",
            onClick: D,
            disabled: f.value
          }, {
            default: O(() => [
              m(d($))
            ]),
            _: 1
          }, 8, ["disabled"])
        ])) : E("", !0),
        e.customBtns && e.customBtns.length > 0 ? (i(), a("div", {
          key: 1,
          class: "custombtns",
          style: h({
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
            gap: "20px",
            ...y.value.customBtnsStyle
          })
        }, [
          (i(!0), a(N, null, A(e.customBtns, (n) => (i(), a("div", {
            key: n.text,
            style: h({
              display: "inline",
              justifyContent: "center",
              ...n.outterStyle
            })
          }, [
            m(d(x), X({
              onClick: () => {
                var s;
                (s = n.onClick) == null || s.call(n, r.value, e.onCancel);
              },
              ref_for: !0
            }, n.props, {
              style: {
                ...n.style
              }
            }), {
              default: O(() => [
                Y(z(n.text), 1)
              ]),
              _: 2
            }, 1040, ["onClick", "style"])
          ], 4))), 128))
        ], 4)) : E("", !0)
      ], 4)), [
        [P],
        [M, {
          fadeTime: e.fadeTime || 150,
          enable: e.fadeInOut || !0
        }]
      ])
    ])), [
      [I, {
        fadeTime: e.fadeTime || 150,
        enable: e.fadeInOut || !0
      }]
    ]);
  }
});
export {
  K as default
};
