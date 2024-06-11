import { defineComponent as _, defineAsyncComponent as j, ref as m, onMounted as N, watch as A, withDirectives as T, openBlock as a, createElementBlock as r, normalizeStyle as g, withModifiers as X, createVNode as d, unref as C, withCtx as O, createCommentVNode as E, Fragment as Y, renderList as $, mergeProps as z, createTextVNode as G, toDisplayString as H } from "vue";
import { D as U, C as W } from "./index-BK36I_Sb.js";
import { M as q } from "./index-Dmb_otuW.js";
const J = {
  key: 0,
  class: "btns"
}, ee = /* @__PURE__ */ _({
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
    showCloseBtn: { type: Boolean },
    onModalClick: { type: Function }
  },
  setup(S) {
    const h = j(() => import("./index-BK36I_Sb.js").then((t) => t.b$)), x = m(), M = (t) => {
      x.value = t;
    }, e = S, c = m({}), f = m(!1), y = m(e.schema);
    N(() => {
      Object.keys(e.init).length > 0 && (c.value = { ...e.init }), e.title && (y.value.title = e.title);
    });
    const F = () => {
      e.allowDirectClose ? e.onCancel() : q.confirm({
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
    }, D = () => {
      f.value = !0;
    }, L = () => {
      f.value = !1;
    }, P = {
      mounted(t) {
        if (!e.draggable)
          return;
        let o = t;
        const n = (s) => {
          const l = {
            x: o.getBoundingClientRect().x,
            y: o.getBoundingClientRect().y
          }, u = {
            x: s.clientX,
            y: s.clientY
          }, B = {
            width: o.getBoundingClientRect().width,
            height: o.getBoundingClientRect().height
          }, w = (k) => {
            o.style.cursor = "move";
            const b = {
              x: k.clientX - u.x,
              y: k.clientY - u.y
            }, i = {
              x: l.x + b.x,
              y: l.y + b.y
            };
            i.x < 15 || i.y < 15 || i.x + B.width > window.innerWidth - 30 || i.y + B.height > window.innerHeight - 15 || (o.style.left = i.x + "px", o.style.top = i.y + "px");
          };
          document.addEventListener("mousemove", w), document.addEventListener("mouseup", () => {
            o.style.cursor = "default", document.removeEventListener("mousemove", w);
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
    const R = {
      mounted(t, o) {
        v = t;
        const n = o.value;
        if (!n.enable)
          return;
        if (t.style.scale = "0.2", !e.mousePosition) {
          t.style.transformOrigin = "center";
          return;
        }
        const s = t.getBoundingClientRect(), l = e.mousePosition.x - s.left, u = e.mousePosition.y - s.top;
        t.style.transformOrigin = `${l}px ${u}px`, setTimeout(() => {
          t.style.transition = "scale " + n.fadeTime + "ms ease", t.style.scale = "1";
        });
      }
    };
    A(
      () => e.goClose.value,
      (t) => {
        t && (p && (p.style.opacity = "0"), v && (v.style.scale = "0.2"));
      }
    );
    const V = async () => {
      var t, o;
      return !!await ((o = (t = x.value) == null ? void 0 : t.exposed) == null ? void 0 : o.validateThenGetModel()) || !1;
    };
    return (t, o) => T((a(), r("div", {
      class: "fullscreen",
      onClick: o[2] || (o[2] = (n) => {
        var s;
        return (s = e.onModalClick) == null ? void 0 : s.call(e, {
          model: c.value,
          close: () => e.onCancel(),
          event: n
        });
      })
    }, [
      T((a(), r("div", {
        class: "full-form",
        style: g({
          ...e.style
        }),
        onClick: o[1] || (o[1] = X(() => {
        }, ["stop"]))
      }, [
        d(U, {
          schema: y.value,
          modelValue: c.value,
          "onUpdate:modelValue": o[0] || (o[0] = (n) => c.value = n),
          "show-btns": e.showBtns,
          class: "form",
          "on-before-submit": D,
          "on-submit": e.onSubmit,
          "on-after-submit": L,
          "registe-to-parent": M
        }, null, 8, ["schema", "modelValue", "show-btns", "on-submit"]),
        e.showCloseBtn ? (a(), r("div", J, [
          d(C(h), {
            shape: "circle",
            type: "primary",
            danger: "",
            onClick: F,
            disabled: f.value
          }, {
            default: O(() => [
              d(C(W))
            ]),
            _: 1
          }, 8, ["disabled"])
        ])) : E("", !0),
        e.customBtns && e.customBtns.length > 0 ? (a(), r("div", {
          key: 1,
          class: "custombtns",
          style: g({
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
            gap: "20px",
            ...y.value.customBtnsStyle
          })
        }, [
          (a(!0), r(Y, null, $(e.customBtns, (n) => (a(), r("div", {
            key: n.text,
            style: g({
              display: "inline",
              justifyContent: "center",
              ...n.outterStyle
            })
          }, [
            d(C(h), z({
              onClick: (s) => {
                var l;
                (l = n.onClick) == null || l.call(n, {
                  doCheck: () => V(),
                  close: () => e.onCancel(),
                  model: c.value,
                  event: s
                });
              },
              ref_for: !0
            }, n.props, {
              style: {
                ...n.style
              }
            }), {
              default: O(() => [
                G(H(n.text), 1)
              ]),
              _: 2
            }, 1040, ["onClick", "style"])
          ], 4))), 128))
        ], 4)) : E("", !0)
      ], 4)), [
        [P],
        [R, {
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
  ee as default
};
