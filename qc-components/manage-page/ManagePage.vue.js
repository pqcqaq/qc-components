/* __placeholder__ */
import { defineAsyncComponent, ref, reactive } from "vue";
import { message } from "ant-design-vue";
import { useFullScreenDyForm } from "../dynamic-form";
export default await (async () => {
    const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
    const DynamicForm = defineAsyncComponent(() => import("../dynamic-form/DynamicForm.vue"));
    const EasyTable = defineAsyncComponent(() => import("../easy-table/EasyTable.vue"));
    const TableButtons = defineAsyncComponent(() => import("../easy-table/components/TableButtons.vue"));
    let __VLS_typeProps;
    const props = defineProps();
    const disabled = ref(false);
    const formSchema = reactive({
        formProps: {
            // 布局：水平布局
            layout: "inline",
        },
        customBtns: [
            {
                text: "搜索",
                props: {
                    type: "primary",
                },
                onClick: async ({ doCheck, model, event }) => {
                    const result = (await doCheck?.()) || false;
                    if (!result) {
                        return;
                    }
                    await doSearch();
                },
            },
            {
                text: "重置",
                onClick: async () => {
                    await doReset();
                },
            },
        ],
        // schema
        items: props.schema.seacher.items || [],
    });
    const searchModel = ref({});
    const doReset = async () => {
        searchModel.value = {};
        await fetchData();
    };
    const doSearch = async () => {
        await fetchData();
    };
    const tableSchema = reactive({
        props: {},
        // schema
        columns: [...props.schema.table.columns],
    });
    // 单独配置props，因为类型实例化过深，会导致无法正确推导类型
    tableSchema.props = {
        pagination: {
            current: 1,
        },
        ...props.schema.table.props,
        loading: false,
        onChange: (pagination, filters, sorter, extra) => {
            tableSchema.props.pagination = pagination;
            fetchData();
        },
    };
    if (props.schema.handleDelete !== undefined ||
        props.schema.handleEdit !== undefined) {
        const getBtns = (record) => {
            const btns = [];
            if (props.schema.handleEdit !== undefined) {
                btns.push({
                    text: props.schema.handleEdit.text || "编辑",
                    onClick: () => {
                        handleEdit(record);
                    },
                    props: {
                        type: "primary",
                        size: "small",
                        ...props.schema.handleEdit.btnProps,
                    },
                });
            }
            if (props.schema.handleDelete !== undefined) {
                btns.push({
                    text: props.schema.handleDelete.text || "删除",
                    onClick: async () => {
                        await props.schema.handleDelete.deleteData?.({
                            record: {
                                ...record,
                            },
                            doRefresh: fetchData,
                            doSearch,
                            doReset,
                        });
                    },
                    props: {
                        type: "primary",
                        size: "small",
                        danger: true,
                        ...props.schema.handleDelete.btnProps,
                    },
                });
            }
        };
        tableSchema.columns.push({
            header: "管理",
            body: {
                index: "action",
                render: ({ text, record, index }) => {
                    return {
                        component: TableButtons,
                        props: {
                            btns: getBtns(record),
                        },
                    };
                },
            },
        });
    }
    const data = ref([]);
    const handleEdit = async (record) => {
        useFullScreenDyForm({
            showBtns: {
                submit: 1,
                reset: 1,
                clearAll: 1,
            },
            ...props.schema.handleEdit?.editor,
            defaultValues: {
                ...record,
            },
            submit: async (values, close) => {
                await props.schema.handleEdit?.editData?.({
                    record: {
                        ...record,
                        ...values,
                    },
                    doRefresh: fetchData,
                    doSearch,
                    doReset,
                    close: close,
                });
            },
        });
    };
    const fetchData = async () => {
        tableSchema.props.loading = true;
        disabled.value = true;
        try {
            const result = await props.schema.fetchData({
                paginator: {
                    pageSize: tableSchema.props.pagination
                        ? tableSchema.props.pagination.pageSize
                        : 10,
                    current: tableSchema.props.pagination
                        ? tableSchema.props.pagination.current
                        : 1,
                },
                model: {
                    ...searchModel.value,
                },
            });
            data.value = result.data;
            tableSchema.props.pagination = {
                ...tableSchema.props.pagination,
                total: result.total,
                current: result.current,
            };
        }
        catch (error) {
            message.error("获取数据失败");
        }
        finally {
            tableSchema.props.loading = false;
            disabled.value = false;
        }
    };
    fetchData();
    const handleAdd = async () => {
        useFullScreenDyForm({
            showBtns: {
                submit: 1,
                reset: 1,
                clearAll: 1,
            },
            ...props.schema.handleAdd?.creator,
            init: {},
            submit: async (values, close) => {
                await props.schema.handleAdd?.addData?.({
                    record: {
                        ...values,
                    },
                    doRefresh: fetchData,
                    doSearch,
                    doReset,
                    close: close,
                });
            },
        });
    };
    const __VLS_fnComponent = (await import('vue')).defineComponent({});
    let __VLS_functionalComponentProps;
    const __VLS_modelEmitsType = {};
    function __VLS_template() {
        let __VLS_ctx;
        /* Components */
        let __VLS_otherComponents;
        let __VLS_own;
        let __VLS_localComponents;
        let __VLS_components;
        let __VLS_styleScopedClasses;
        let __VLS_resolvedLocalAndGlobalComponents;
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        if (props.schema.title !== undefined) {
            if (typeof props.schema.title === 'string') {
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("title") }, });
                (props.schema.title || "");
            }
            else {
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("title") }, ...{ style: (({
                            ...props.schema.title.style,
                        })) }, });
                (props.schema.title.text || "");
            }
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("seacher") }, ...{ style: (({
                    ...props.schema.seacher.style,
                })) }, });
        // @ts-ignore
        const __VLS_0 = {}
            .DynamicForm;
        ({}.DynamicForm);
        __VLS_components.DynamicForm;
        // @ts-ignore
        [DynamicForm,];
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("seacher-form") }, schema: ((__VLS_ctx.formSchema)), modelValue: ((__VLS_ctx.searchModel)), disabled: ((__VLS_ctx.disabled)), }));
        const __VLS_2 = __VLS_1({ ...{ class: ("seacher-form") }, schema: ((__VLS_ctx.formSchema)), modelValue: ((__VLS_ctx.searchModel)), disabled: ((__VLS_ctx.disabled)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{ class: ("seacher-form") }, schema: ((__VLS_ctx.formSchema)), modelValue: ((__VLS_ctx.searchModel)), disabled: ((__VLS_ctx.disabled)), }));
        // @ts-ignore
        [formSchema, searchModel, disabled,];
        const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
        if (props.schema.handleAdd !== undefined) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ style: (({
                        display: 'flex',
                        ...props.schema.handleAdd.outerStyle,
                    })) }, ...{ class: ("btns") }, });
            // @ts-ignore
            const __VLS_6 = {}
                .AButton;
            ({}.AButton);
            ({}.AButton);
            __VLS_components.AButton;
            __VLS_components.aButton;
            __VLS_components.AButton;
            __VLS_components.aButton;
            // @ts-ignore
            [AButton, AButton,];
            // @ts-ignore
            const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ 'onClick': {} }, ...{ style: (({
                        'margin-left': 'auto',
                        'margin-top': '10px',
                        'margin-right': '10px',
                        'margin-bottom': '10px',
                        ...props.schema.handleAdd.btnStyle,
                    })) }, ...(props.schema.handleAdd.btnProps), type: ("primary"), }));
            const __VLS_8 = __VLS_7({ ...{ 'onClick': {} }, ...{ style: (({
                        'margin-left': 'auto',
                        'margin-top': '10px',
                        'margin-right': '10px',
                        'margin-bottom': '10px',
                        ...props.schema.handleAdd.btnStyle,
                    })) }, ...(props.schema.handleAdd.btnProps), type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
            ({}({ ...{ 'onClick': {} }, ...{ style: (({
                        'margin-left': 'auto',
                        'margin-top': '10px',
                        'margin-right': '10px',
                        'margin-bottom': '10px',
                        ...props.schema.handleAdd.btnStyle,
                    })) }, ...(props.schema.handleAdd.btnProps), type: ("primary"), }));
            let __VLS_12;
            const __VLS_13 = {
                onClick: (__VLS_ctx.handleAdd)
            };
            // @ts-ignore
            [handleAdd,];
            (__VLS_11.slots).default;
            const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
            let __VLS_9;
            let __VLS_10;
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("list") }, ...{ style: (({
                    ...props.schema.table.style,
                })) }, });
        // @ts-ignore
        const __VLS_14 = {}
            .EasyTable;
        ({}.EasyTable);
        __VLS_components.EasyTable;
        // @ts-ignore
        [EasyTable,];
        // @ts-ignore
        const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({ ...{ class: ("list-table") }, data: ((__VLS_ctx.data)), schema: ((__VLS_ctx.tableSchema)), enableDeepClone: ((__VLS_ctx.enableDeepClone)), }));
        const __VLS_16 = __VLS_15({ ...{ class: ("list-table") }, data: ((__VLS_ctx.data)), schema: ((__VLS_ctx.tableSchema)), enableDeepClone: ((__VLS_ctx.enableDeepClone)), }, ...__VLS_functionalComponentArgsRest(__VLS_15));
        ({}({ ...{ class: ("list-table") }, data: ((__VLS_ctx.data)), schema: ((__VLS_ctx.tableSchema)), enableDeepClone: ((__VLS_ctx.enableDeepClone)), }));
        // @ts-ignore
        [data, tableSchema, enableDeepClone,];
        const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_14, __VLS_16);
        if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
            __VLS_styleScopedClasses['title'];
            __VLS_styleScopedClasses['title'];
            __VLS_styleScopedClasses['seacher'];
            __VLS_styleScopedClasses['seacher-form'];
            __VLS_styleScopedClasses['btns'];
            __VLS_styleScopedClasses['list'];
            __VLS_styleScopedClasses['list-table'];
        }
        var __VLS_slots;
        return __VLS_slots;
        const __VLS_componentsOption = {};
        const __VLS_name = "manage-page";
        let __VLS_defineComponent;
        const __VLS_internalComponent = __VLS_defineComponent({
            setup() {
                return {
                    DynamicForm: DynamicForm,
                    EasyTable: EasyTable,
                    disabled: disabled,
                    formSchema: formSchema,
                    searchModel: searchModel,
                    tableSchema: tableSchema,
                    data: data,
                    handleAdd: handleAdd,
                };
            },
            props: {},
            name: "manage-page",
        });
    }
    return (await import('vue')).defineComponent({
        setup() {
            return {};
        },
        props: {},
        name: "manage-page",
    });
})();
;
//# sourceMappingURL=ManagePage.vue.js.map