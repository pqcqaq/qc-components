/* __placeholder__ */
import ManagePage from "../../../lib/manage-page";
import Tags from "../table/components/Tags.vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let datas = [
    {
        id: 1,
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park",
        tags: ["nice", "developer"],
    },
    {
        id: 2,
        name: "Jim Green",
        age: 42,
        address: "London No. 1 Lake Park",
        tags: ["loser"],
    },
    {
        id: 3,
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher"],
    },
];
const getDataApi = async (props) => {
    return await new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                data: datas,
                total: datas.length,
                current: props.paginator.current || 1,
            });
        }, 200);
    });
};
const editSchema = {
    schema: {
        title: {
            text: "编辑",
            style: {
                fontSize: "20px",
                fontWeight: "bold",
            },
        },
        items: [
            {
                component: "Text",
                label: "姓名",
                field: "name",
                formItemProps: {
                    required: true,
                },
            },
            {
                component: "Text",
                label: "年龄",
                field: "age",
                formItemProps: {
                    required: true,
                },
            },
            {
                component: "Text",
                label: "地址",
                field: "address",
                formItemProps: {
                    required: true,
                },
            },
            {
                component: "Select",
                label: "标签",
                field: "tags",
                componentProps: {
                    mode: "multiple",
                    options: [
                        {
                            label: "nice",
                            value: "nice",
                        },
                        {
                            label: "cool",
                            value: "cool",
                        },
                        {
                            label: "loser",
                            value: "loser",
                        },
                        {
                            label: "teacher",
                            value: "teacher",
                        },
                        {
                            label: "developer",
                            value: "developer",
                        },
                    ],
                },
                formItemProps: {
                    required: true,
                },
            },
        ],
    },
};
const pageSchema = {
    title: "Manage Page",
    fetchData: async ({ paginator, model }) => {
        return await getDataApi({ paginator, model });
    },
    handleDelete: {
        deleteData: async ({ record, doRefresh }) => {
            datas = datas.filter((item) => item.id !== record.id);
            doRefresh();
        },
    },
    handleEdit: {
        editData: ({ record, doRefresh, close }) => {
            const index = datas.findIndex((item) => item.id === record.id);
            datas[index] = record;
            doRefresh();
            close();
        },
        editor: editSchema,
    },
    handleAdd: {
        addData: async ({ record, doRefresh, close }) => {
            datas.push({
                id: datas.length + 1,
                name: record.name,
                age: record.age,
                address: record.address,
                tags: record.tags,
            });
            doRefresh();
            close();
        },
        creator: editSchema,
    },
    seacher: {
        style: {
            padding: "10px",
            backgroundColor: "#f3f3f3",
            borderRadius: "10px",
        },
        items: [
            {
                component: "Text",
                label: "姓名",
                field: "name",
            },
            {
                component: "Text",
                label: "年龄",
                field: "age",
            },
            {
                component: "Text",
                label: "地址",
                field: "address",
            },
            {
                component: "Select",
                label: "标签",
                field: "tags",
                componentProps: {
                    options: [
                        {
                            label: "nice",
                            value: "nice",
                        },
                        {
                            label: "cool",
                            value: "cool",
                        },
                        {
                            label: "loser",
                            value: "loser",
                        },
                        {
                            label: "teacher",
                            value: "teacher",
                        },
                        {
                            label: "developer",
                            value: "developer",
                        },
                    ],
                    style: {
                        width: "120px",
                    },
                },
            },
        ],
    },
    table: {
        columns: [
            {
                header: "姓名",
                body: "name",
            },
            {
                header: "年龄",
                body: "age",
            },
            {
                header: "地址",
                body: "address",
                width: "200px",
            },
            {
                header: "标签",
                body: {
                    index: "tags",
                    render: ({ text }) => {
                        return {
                            component: Tags,
                            props: {
                                tags: text.map((item) => item.toUpperCase()),
                                type: "success",
                            },
                        };
                    },
                },
            },
        ],
        style: {
            padding: "10px",
            backgroundColor: "#f0f0f0",
            borderRadius: "10px",
        },
    },
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("page") }, });
    // @ts-ignore
    const __VLS_0 = {}
        .ManagePage;
    ({}.ManagePage);
    __VLS_components.ManagePage;
    // @ts-ignore
    [ManagePage,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ schema: ((__VLS_ctx.pageSchema)), enableDeepClone: ((true)), }));
    const __VLS_2 = __VLS_1({ schema: ((__VLS_ctx.pageSchema)), enableDeepClone: ((true)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ schema: ((__VLS_ctx.pageSchema)), enableDeepClone: ((true)), }));
    // @ts-ignore
    [pageSchema,];
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['page'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                ManagePage: ManagePage,
                pageSchema: pageSchema,
            };
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
//# sourceMappingURL=Manage.vue.js.map