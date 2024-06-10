/* __placeholder__ */
import { SmileOutlined } from "@ant-design/icons-vue";
import { EasyTable } from "../../../";
import Tags from "./components/Tags.vue";
import Icon from "./components/Icon.vue";
import { createSimpleTable } from "../../../";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const data = [
    {
        key: "1",
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park",
        tags: ["nice", "developer"],
    },
    {
        key: "2",
        name: "Jim Green",
        age: 42,
        address: "London No. 1 Lake Park",
        tags: ["loser"],
    },
    {
        key: "3",
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher"],
    },
];
const schema = {
    title: "Table Title",
    columns: [
        {
            header: {
                render: ({ title, column }) => {
                    console.log("title", title, column);
                    return {
                        component: Icon,
                        props: {
                            componentId: SmileOutlined,
                            info: "姓名",
                        },
                    };
                },
            },
            body: {
                index: "name",
                render: ({ text, record, index }) => {
                    console.log("text", text, record, index);
                    return {
                        component: "a",
                        event: {
                            click: (e) => {
                                console.log("click", e);
                            },
                        },
                    };
                },
            },
        },
        {
            header: {
                title: "年龄",
            },
            body: {
                index: "age",
            },
            width: "60px",
        },
        {
            header: "地址",
            body: "address",
            width: 300,
        },
        {
            header: {
                title: "标签",
            },
            body: {
                index: "tags",
                render: ({ text }) => {
                    console.log("tags", text);
                    return {
                        component: Tags,
                        props: {
                            tags: text,
                        },
                    };
                },
            },
        },
    ],
};
const simpleSchema = createSimpleTable({
    key: "主键",
    name: "姓名",
    age: "年龄",
    address: "地址",
    tags: "标签",
});
const __VLS_fnComponent = (await import('vue')).defineComponent({});
let __VLS_functionalComponentProps;
let __VLS_modelEmitsType;
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    const __VLS_0 = {}.EasyTable;
    ({}.EasyTable);
    __VLS_components.EasyTable;
    // @ts-ignore
    [EasyTable,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ schema: ((__VLS_ctx.schema)), data: ((__VLS_ctx.data)), }));
    const __VLS_2 = __VLS_1({ schema: ((__VLS_ctx.schema)), data: ((__VLS_ctx.data)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ schema: ((__VLS_ctx.schema)), data: ((__VLS_ctx.data)), }));
    // @ts-ignore
    [schema, data,];
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    const __VLS_6 = {}.EasyTable;
    ({}.EasyTable);
    __VLS_components.EasyTable;
    // @ts-ignore
    [EasyTable,];
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ schema: ((__VLS_ctx.simpleSchema)), data: ((__VLS_ctx.data)), }));
    const __VLS_8 = __VLS_7({ schema: ((__VLS_ctx.simpleSchema)), data: ((__VLS_ctx.data)), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ schema: ((__VLS_ctx.simpleSchema)), data: ((__VLS_ctx.data)), }));
    // @ts-ignore
    [data, simpleSchema,];
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    const __VLS_internalComponent = (await import('vue')).defineComponent({
        setup() {
            return {
                EasyTable: EasyTable,
                data: data,
                schema: schema,
                simpleSchema: simpleSchema,
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
//# sourceMappingURL=Table.vue.js.map