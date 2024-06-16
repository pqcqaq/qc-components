import { defineComponent as N, defineAsyncComponent as f, ref as g, reactive as _, openBlock as i, createElementBlock as c, Fragment as R, toDisplayString as w, normalizeStyle as h, createCommentVNode as A, createElementVNode as B, createVNode as b, unref as E, mergeProps as T, withCtx as M, createTextVNode as U } from "vue";
import { message as $ } from "ant-design-vue";
import { _ as v, u as S } from "./useFullScreenDyForm-D3p7oYDj.js";
import { B as j } from "./styleChecker-DxpCOgAe.js";
v.install = function(u) {
  u.component(v.name || "", v);
};
const q = {
  key: 0,
  class: "title"
}, G = {
  name: "manage-page"
}, L = /* @__PURE__ */ N({
  ...G,
  props: {
    schema: {},
    enableDeepClone: { type: Boolean }
  },
  setup(u) {
    const C = f(
      () => import("./DynamicForm-CQtwo5LY.js")
    ), V = f(
      () => import("./EasyTable-DFo6bNZq.js")
    ), k = f(
      () => import("./TableButtons-CWvYRwwr.js")
    ), e = u, y = g(!1), z = _({
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
            await (t == null ? void 0 : t()) && await p();
          }
        },
        {
          text: "重置",
          onClick: async () => {
            await m();
          }
        }
      ],
      // schema
      items: e.schema.seacher.items || []
    }), d = g({}), m = async () => {
      d.value = {}, await r();
    }, p = async () => {
      await r();
    }, n = _({
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
            P(s);
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
              doSearch: p,
              doReset: m
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
            component: k,
            props: {
              btns: t(l)
            }
          })
        }
      });
    }
    const x = g([]), P = async (t) => {
      var s;
      S({
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
          var o, D;
          await ((D = (o = e.schema.handleEdit) == null ? void 0 : o.editData) == null ? void 0 : D.call(o, {
            record: {
              ...t,
              ...l
            },
            doRefresh: r,
            doSearch: p,
            doReset: m,
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
            ...d.value
          }
        });
        x.value = t.data, n.props.pagination = {
          ...n.props.pagination,
          total: t.total,
          current: t.current
        };
      } catch {
        $.error("获取数据失败");
      } finally {
        n.props.loading = !1, y.value = !1;
      }
    };
    r();
    const F = async () => {
      var t;
      S({
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
            doSearch: p,
            doReset: m,
            close: l
          }));
        }
      });
    };
    return (t, s) => {
      const l = j;
      return i(), c("div", null, [
        e.schema.title !== void 0 ? (i(), c(R, { key: 0 }, [
          typeof e.schema.title == "string" ? (i(), c("div", q, w(e.schema.title || ""), 1)) : (i(), c("div", {
            key: 1,
            class: "title",
            style: h({
              ...e.schema.title.style
            })
          }, w(e.schema.title.text || ""), 5))
        ], 64)) : A("", !0),
        B("div", {
          class: "seacher",
          style: h({
            ...e.schema.seacher.style
          })
        }, [
          b(E(C), {
            class: "seacher-form",
            schema: z,
            modelValue: d.value,
            "onUpdate:modelValue": s[0] || (s[0] = (a) => d.value = a),
            disabled: y.value
          }, null, 8, ["schema", "modelValue", "disabled"])
        ], 4),
        e.schema.handleAdd !== void 0 ? (i(), c("div", {
          key: 1,
          style: h({
            display: "flex",
            ...e.schema.handleAdd.outerStyle
          }),
          class: "btns"
        }, [
          b(l, T({
            style: {
              "margin-left": "auto",
              "margin-top": "10px",
              "margin-right": "10px",
              "margin-bottom": "10px",
              ...e.schema.handleAdd.btnStyle
            }
          }, e.schema.handleAdd.btnProps, {
            type: "primary",
            onClick: F
          }), {
            default: M(() => [
              U(" 新增 ")
            ]),
            _: 1
          }, 16, ["style"])
        ], 4)) : A("", !0),
        B("div", {
          class: "list",
          style: h({
            ...e.schema.table.style
          })
        }, [
          b(E(V), {
            class: "list-table",
            data: x.value,
            schema: n,
            "enable-deep-clone": t.enableDeepClone
          }, null, 8, ["data", "schema", "enable-deep-clone"])
        ], 4)
      ]);
    };
  }
});
export {
  L as _
};
