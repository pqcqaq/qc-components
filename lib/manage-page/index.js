(function(){"use strict";try{if(typeof document<"u"){var a=document.createElement("style");a.appendChild(document.createTextNode(`@charset "UTF-8";.fullscreen[data-v-f1092ce1]{position:fixed;z-index:1000;top:0;left:0;width:100%;height:100%;background-color:#00000080;justify-content:center;align-items:center;flex-direction:column;display:flex}.fullscreen .full-form[data-v-f1092ce1]{overflow-y:auto;overflow-x:hidden;background-color:#fff;padding:20px;border-radius:15px;border:1px solid #ccc;box-shadow:0 0 10px #0000001a;display:inline-block;max-width:80%;max-height:90%;position:relative}.fullscreen .full-form .form[data-v-f1092ce1]{width:100%}.fullscreen .full-form .btns[data-v-f1092ce1]{position:absolute;top:10px;right:12px;display:flex;justify-content:center;align-items:center;flex-direction:row-reverse;gap:10px}[data-v-f1092ce1]::-webkit-scrollbar{width:10px;background-color:#f5f5f5;border-radius:5px}[data-v-f1092ce1]::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);border-radius:10px;background-color:#f5f5f5}[data-v-f1092ce1]::-webkit-scrollbar-thumb{border-radius:10px;-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);background-color:#9a9a9a}
.avatar-uploader>.ant-upload[data-v-b402d346]{width:128px;height:128px}.ant-upload-select-picture-card i[data-v-b402d346]{font-size:32px;color:#999}.ant-upload-select-picture-card .ant-upload-text[data-v-b402d346]{margin-top:8px;color:#666}
#changeContab .language[data-v-0a39cb4b]{position:absolute;right:25px;z-index:1}#changeContab .ant-tabs-tabpane[data-v-0a39cb4b]{padding:20px}#changeContab .tabBody .ant-row[data-v-0a39cb4b]{margin:15px 0}#changeContab .tabBody .ant-row .long .ant-select[data-v-0a39cb4b]{width:350px}#changeContab .tabBody .ant-row .ant-input-number[data-v-0a39cb4b]{width:110px}#changeContab .tabBody .ant-row .ant-select[data-v-0a39cb4b]{width:350px}#changeContab .value-warp[data-v-0a39cb4b]{width:100%;text-align:center;padding:15px;position:relative;border-top:1px solid #e8e8e8}#changeContab .value-warp .value[data-v-0a39cb4b]{font-size:18px;vertical-align:middle;margin-right:20px}#changeContab .value-warp .ant-btn+.ant-btn[data-v-0a39cb4b]{margin-left:10px}#changeContab .btn-wrap[data-v-0a39cb4b]{padding-top:15px;border-top:1px solid #e8e8e8;text-align:right}#changeContab .btn-wrap .ant-btn+.ant-btn[data-v-0a39cb4b]{margin-left:10px}`)),document.head.appendChild(a)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import { defineComponent as R, defineAsyncComponent as f, ref as g, reactive as w, openBlock as c, createElementBlock as d, Fragment as T, toDisplayString as A, normalizeStyle as u, createCommentVNode as B, createElementVNode as E, createVNode as b, unref as S, mergeProps as M, withCtx as U, createTextVNode as $ } from "vue";
import { message as j } from "ant-design-vue";
import { _ as v, u as C } from "../static/assets/js/useFullScreenDyForm-IzbBmsmk.js";
import { B as q } from "../static/assets/js/styleChecker-DdDg1L8e.js";
v.install = function(i) {
  i.component(v.name || "", v);
};
const G = {
  key: 0,
  class: "title"
}, H = {
  name: "manage-page"
}, x = /* @__PURE__ */ R({
  ...H,
  props: {
    schema: {},
    enableDeepClone: { type: Boolean }
  },
  setup(i) {
    const V = f(
      () => import("../static/assets/js/DynamicForm-iM9Lfk9p.js")
    ), k = f(
      () => import("../static/assets/js/EasyTable-ZkIGvVr4.js")
    ), z = f(
      () => import("../static/assets/js/TableButtons-Dp1PKh6e.js")
    ), e = i, y = g(!1), P = w({
      formProps: {
        // 布局：水平布局
        layout: "inline"
      },
      customBtns: [
        {
          text: "搜索",
          props: {
            type: "primary"
          },
          onClick: async ({ doCheck: t, model: s, event: l }) => {
            await (t == null ? void 0 : t()) && await h();
          }
        },
        {
          text: "重置",
          onClick: async () => {
            await p();
          }
        }
      ],
      // schema
      items: e.schema.seacher.items || []
    }), m = g({}), p = async () => {
      m.value = {}, await r();
    }, h = async () => {
      await r();
    }, n = w({
      props: {},
      // schema
      columns: [...e.schema.table.columns]
    });
    if (n.props = {
      pagination: {
        current: 1
      },
      ...e.schema.table.props,
      loading: !1,
      onChange: (t, s, l, a) => {
        n.props.pagination = t, r();
      }
    }, e.schema.handleDelete !== void 0 || e.schema.handleEdit !== void 0) {
      const t = (s) => {
        const l = [];
        e.schema.handleEdit !== void 0 && l.push({
          text: e.schema.handleEdit.text || "编辑",
          onClick: () => {
            F(s);
          },
          props: {
            type: "primary",
            size: "small",
            ...e.schema.handleEdit.btnProps
          }
        }), e.schema.handleDelete !== void 0 && l.push({
          text: e.schema.handleDelete.text || "删除",
          onClick: async () => {
            var a, o;
            await ((o = (a = e.schema.handleDelete).deleteData) == null ? void 0 : o.call(a, {
              record: {
                ...s
              },
              doRefresh: r,
              doSearch: h,
              doReset: p
            }));
          },
          props: {
            type: "primary",
            size: "small",
            danger: !0,
            ...e.schema.handleDelete.btnProps
          }
        });
      };
      n.columns.push({
        header: "管理",
        body: {
          index: "action",
          render: ({ text: s, record: l, index: a }) => ({
            component: z,
            props: {
              btns: t(l)
            }
          })
        }
      });
    }
    const D = g([]), F = async (t) => {
      var s;
      C({
        showBtns: {
          submit: 1,
          reset: 1,
          clearAll: 1
        },
        ...(s = e.schema.handleEdit) == null ? void 0 : s.editor,
        defaultValues: {
          ...t
        },
        submit: async (l, a) => {
          var o, _;
          await ((_ = (o = e.schema.handleEdit) == null ? void 0 : o.editData) == null ? void 0 : _.call(o, {
            record: {
              ...t,
              ...l
            },
            doRefresh: r,
            doSearch: h,
            doReset: p,
            close: a
          }));
        }
      });
    }, r = async () => {
      n.props.loading = !0, y.value = !0;
      try {
        const t = await e.schema.fetchData({
          paginator: {
            pageSize: n.props.pagination ? n.props.pagination.pageSize : 10,
            current: n.props.pagination ? n.props.pagination.current : 1
          },
          model: {
            ...m.value
          }
        });
        D.value = t.data, n.props.pagination = {
          ...n.props.pagination,
          total: t.total,
          current: t.current
        };
      } catch {
        j.error("获取数据失败");
      } finally {
        n.props.loading = !1, y.value = !1;
      }
    };
    r();
    const N = async () => {
      var t;
      C({
        showBtns: {
          submit: 1,
          reset: 1,
          clearAll: 1
        },
        ...(t = e.schema.handleAdd) == null ? void 0 : t.creator,
        init: {},
        submit: async (s, l) => {
          var a, o;
          await ((o = (a = e.schema.handleAdd) == null ? void 0 : a.addData) == null ? void 0 : o.call(a, {
            record: {
              ...s
            },
            doRefresh: r,
            doSearch: h,
            doReset: p,
            close: l
          }));
        }
      });
    };
    return (t, s) => {
      const l = q;
      return c(), d("div", null, [
        e.schema.title !== void 0 ? (c(), d(T, { key: 0 }, [
          typeof e.schema.title == "string" ? (c(), d("div", G, A(e.schema.title || ""), 1)) : (c(), d("div", {
            key: 1,
            class: "title",
            style: u({
              ...e.schema.title.style
            })
          }, A(e.schema.title.text || ""), 5))
        ], 64)) : B("", !0),
        E("div", {
          class: "seacher",
          style: u({
            ...e.schema.seacher.style
          })
        }, [
          b(S(V), {
            class: "seacher-form",
            schema: P,
            modelValue: m.value,
            "onUpdate:modelValue": s[0] || (s[0] = (a) => m.value = a),
            disabled: y.value
          }, null, 8, ["schema", "modelValue", "disabled"])
        ], 4),
        e.schema.handleAdd !== void 0 ? (c(), d("div", {
          key: 1,
          style: u({
            display: "flex",
            ...e.schema.handleAdd.outerStyle
          }),
          class: "btns"
        }, [
          b(l, M({
            style: {
              "margin-left": "auto",
              "margin-top": "10px",
              "margin-right": "10px",
              "margin-bottom": "10px",
              ...e.schema.handleAdd.btnStyle
            }
          }, e.schema.handleAdd.btnProps, {
            type: "primary",
            onClick: N
          }), {
            default: U(() => [
              $(" 新增 ")
            ]),
            _: 1
          }, 16, ["style"])
        ], 4)) : B("", !0),
        E("div", {
          class: "list",
          style: u({
            ...e.schema.table.style
          })
        }, [
          b(S(k), {
            class: "list-table",
            data: D.value,
            schema: n,
            "enable-deep-clone": t.enableDeepClone
          }, null, 8, ["data", "schema", "enable-deep-clone"])
        ], 4)
      ]);
    };
  }
});
x.install = function(i) {
  i.component(x.name || "", x);
};
export {
  x as default
};
