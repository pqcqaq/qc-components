(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('@charset "UTF-8";.fullscreen[data-v-f1092ce1]{position:fixed;z-index:1000;top:0;left:0;width:100%;height:100%;background-color:#00000080;justify-content:center;align-items:center;flex-direction:column;display:flex}.fullscreen .full-form[data-v-f1092ce1]{overflow-y:auto;overflow-x:hidden;background-color:#fff;padding:20px;border-radius:15px;border:1px solid #ccc;box-shadow:0 0 10px #0000001a;display:inline-block;max-width:80%;max-height:90%;position:relative}.fullscreen .full-form .form[data-v-f1092ce1]{width:100%}.fullscreen .full-form .btns[data-v-f1092ce1]{position:absolute;top:10px;right:12px;display:flex;justify-content:center;align-items:center;flex-direction:row-reverse;gap:10px}[data-v-f1092ce1]::-webkit-scrollbar{width:10px;background-color:#f5f5f5;border-radius:5px}[data-v-f1092ce1]::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);border-radius:10px;background-color:#f5f5f5}[data-v-f1092ce1]::-webkit-scrollbar-thumb{border-radius:10px;-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);background-color:#9a9a9a}')),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
import { defineComponent as V, defineAsyncComponent as j, ref as m, onMounted as N, watch as A, withDirectives as T, openBlock as a, createElementBlock as r, normalizeStyle as g, withModifiers as X, createVNode as d, unref as C, withCtx as _, createCommentVNode as O, Fragment as Y, renderList as $, mergeProps as z, createTextVNode as U, toDisplayString as G } from "vue";
import { _ as H } from "./useFullScreenDyForm-D3p7oYDj.js";
import { Modal as W } from "ant-design-vue";
import { C as q } from "./CloseOutlined-CScod4_4.js";
import { _ as J } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const K = {
  key: 0,
  class: "btns"
}, Q = /* @__PURE__ */ V({
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
    const h = j(() => import("./styleChecker-DxpCOgAe.js").then((t) => t.bU)), x = m(), E = (t) => {
      x.value = t;
    }, e = S, c = m({}), f = m(!1), y = m(e.schema);
    N(() => {
      Object.keys(e.init).length > 0 && (c.value = { ...e.init }), e.title && (y.value.title = e.title);
    });
    const F = () => {
      e.allowDirectClose ? e.onCancel() : W.confirm({
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
    }, M = () => {
      f.value = !0;
    }, D = () => {
      f.value = !1;
    }, I = {
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
    const L = {
      mounted(t, o) {
        p = t;
        const n = o.value;
        n.enable && (t.style.opacity = "0", setTimeout(() => {
          t.style.transition = "opacity " + n.fadeTime + "ms ease", t.style.opacity = "1";
        }, 10));
      }
    };
    let v = null;
    const P = {
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
    const R = async () => {
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
        d(H, {
          schema: y.value,
          modelValue: c.value,
          "onUpdate:modelValue": o[0] || (o[0] = (n) => c.value = n),
          "show-btns": e.showBtns,
          class: "form",
          "on-before-submit": M,
          "on-submit": e.onSubmit,
          "on-after-submit": D,
          "registe-to-parent": E
        }, null, 8, ["schema", "modelValue", "show-btns", "on-submit"]),
        e.showCloseBtn ? (a(), r("div", K, [
          d(C(h), {
            shape: "circle",
            type: "primary",
            danger: "",
            onClick: F,
            disabled: f.value
          }, {
            default: _(() => [
              d(C(q))
            ]),
            _: 1
          }, 8, ["disabled"])
        ])) : O("", !0),
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
                  doCheck: () => R(),
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
              default: _(() => [
                U(G(n.text), 1)
              ]),
              _: 2
            }, 1040, ["onClick", "style"])
          ], 4))), 128))
        ], 4)) : O("", !0)
      ], 4)), [
        [I],
        [P, {
          fadeTime: e.fadeTime || 150,
          enable: e.fadeInOut || !0
        }]
      ])
    ])), [
      [L, {
        fadeTime: e.fadeTime || 150,
        enable: e.fadeInOut || !0
      }]
    ]);
  }
}), se = /* @__PURE__ */ J(Q, [["__scopeId", "data-v-f1092ce1"]]);
export {
  se as default
};
