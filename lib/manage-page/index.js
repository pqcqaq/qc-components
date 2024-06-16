import './FullScreenDyForm.css';
import { defineComponent as R, defineAsyncComponent as f, ref as g, reactive as w, openBlock as c, createElementBlock as d, Fragment as T, toDisplayString as A, normalizeStyle as u, createCommentVNode as B, createElementVNode as E, createVNode as b, unref as S, mergeProps as M, withCtx as I, createTextVNode as U } from "vue";
import { message as j } from "ant-design-vue";
import { D as v, u as C, _ as q } from "../useFullScreenDyForm-Bf0u-fRX.js";
import { B as G } from "../styleChecker-DdDg1L8e.js";
v.install = function(i) {
  i.component(v.name || "", v);
};
const H = {
  key: 0,
  class: "title"
}, J = {
  name: "manage-page"
}, K = /* @__PURE__ */ R({
  ...J,
  props: {
    schema: {},
    enableDeepClone: { type: Boolean }
  },
  setup(i) {
    const V = f(
      () => import("../useFullScreenDyForm-Bf0u-fRX.js").then((a) => a.e)
    ), k = f(
      () => import("../EasyTable-ZkIGvVr4.js")
    ), P = f(
      () => import("../TableButtons-Dp1PKh6e.js")
    ), e = i, y = g(!1), z = w({
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
          onClick: async ({ doCheck: a, model: s, event: o }) => {
            await (a == null ? void 0 : a()) && await h();
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
      onChange: (a, s, o, t) => {
        n.props.pagination = a, r();
      }
    }, e.schema.handleDelete !== void 0 || e.schema.handleEdit !== void 0) {
      const a = (s) => {
        const o = [];
        e.schema.handleEdit !== void 0 && o.push({
          text: e.schema.handleEdit.text || "编辑",
          onClick: () => {
            F(s);
          },
          props: {
            type: "primary",
            size: "small",
            ...e.schema.handleEdit.btnProps
          }
        }), e.schema.handleDelete !== void 0 && o.push({
          text: e.schema.handleDelete.text || "删除",
          onClick: async () => {
            var t, l;
            await ((l = (t = e.schema.handleDelete).deleteData) == null ? void 0 : l.call(t, {
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
          render: ({ text: s, record: o, index: t }) => ({
            component: P,
            props: {
              btns: a(o)
            }
          })
        }
      });
    }
    const D = g([]), F = async (a) => {
      var s;
      C({
        showBtns: {
          submit: 1,
          reset: 1,
          clearAll: 1
        },
        ...(s = e.schema.handleEdit) == null ? void 0 : s.editor,
        defaultValues: {
          ...a
        },
        submit: async (o, t) => {
          var l, _;
          await ((_ = (l = e.schema.handleEdit) == null ? void 0 : l.editData) == null ? void 0 : _.call(l, {
            record: {
              ...a,
              ...o
            },
            doRefresh: r,
            doSearch: h,
            doReset: p,
            close: t
          }));
        }
      });
    }, r = async () => {
      n.props.loading = !0, y.value = !0;
      try {
        const a = await e.schema.fetchData({
          paginator: {
            pageSize: n.props.pagination ? n.props.pagination.pageSize : 10,
            current: n.props.pagination ? n.props.pagination.current : 1
          },
          model: {
            ...m.value
          }
        });
        D.value = a.data, n.props.pagination = {
          ...n.props.pagination,
          total: a.total,
          current: a.current
        };
      } catch {
        j.error("获取数据失败");
      } finally {
        n.props.loading = !1, y.value = !1;
      }
    };
    r();
    const N = async () => {
      var a;
      C({
        showBtns: {
          submit: 1,
          reset: 1,
          clearAll: 1
        },
        ...(a = e.schema.handleAdd) == null ? void 0 : a.creator,
        init: {},
        submit: async (s, o) => {
          var t, l;
          await ((l = (t = e.schema.handleAdd) == null ? void 0 : t.addData) == null ? void 0 : l.call(t, {
            record: {
              ...s
            },
            doRefresh: r,
            doSearch: h,
            doReset: p,
            close: o
          }));
        }
      });
    };
    return (a, s) => {
      const o = G;
      return c(), d("div", null, [
        e.schema.title !== void 0 ? (c(), d(T, { key: 0 }, [
          typeof e.schema.title == "string" ? (c(), d("div", H, A(e.schema.title || ""), 1)) : (c(), d("div", {
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
            schema: z,
            modelValue: m.value,
            "onUpdate:modelValue": s[0] || (s[0] = (t) => m.value = t),
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
          b(o, M({
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
            default: I(() => [
              U(" 新增 ")
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
            "enable-deep-clone": a.enableDeepClone
          }, null, 8, ["data", "schema", "enable-deep-clone"])
        ], 4)
      ]);
    };
  }
}), x = /* @__PURE__ */ q(K, [["__scopeId", "data-v-f3b31cd6"]]);
x.install = function(i) {
  i.component(x.name || "", x);
};
export {
  x as default
};
