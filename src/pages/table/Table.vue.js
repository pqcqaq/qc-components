/* __placeholder__ */
import { SmileOutlined, DownOutlined } from "@ant-design/icons-vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const columns = [
    {
        name: "Name",
        dataIndex: "name",
        key: "name",
    },
    {
        title: "Age",
        dataIndex: "age",
        key: "age",
    },
    {
        title: "Address",
        dataIndex: "address",
        key: "address",
    },
    {
        title: "Tags",
        key: "tags",
        dataIndex: "tags",
    },
    {
        title: "Action",
        key: "action",
    },
];
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
let __VLS_functionalComponentProps;
let __VLS_modelEmitsType;
const __VLS_componentsOption = {};
let __VLS_name;
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    const __VLS_0 = {}.ATable;
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ columns: ((__VLS_ctx.columns)), dataSource: ((__VLS_ctx.data)), }));
    ({}.ATable);
    ({}.ATable);
    __VLS_components.ATable;
    __VLS_components.aTable;
    __VLS_components.ATable;
    __VLS_components.aTable;
    // @ts-ignore
    [ATable, ATable,];
    const __VLS_2 = __VLS_1({ columns: ((__VLS_ctx.columns)), dataSource: ((__VLS_ctx.data)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ columns: ((__VLS_ctx.columns)), dataSource: ((__VLS_ctx.data)), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const [{ column }] = __VLS_getSlotParams((__VLS_4.slots).headerCell);
        if (column.key === 'name') {
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            const __VLS_5 = {}.SmileOutlined;
            const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({}));
            ({}.SmileOutlined);
            __VLS_components.SmileOutlined;
            __VLS_components.smileOutlined;
            // @ts-ignore
            [SmileOutlined,];
            const __VLS_7 = __VLS_6({}, ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({}({}));
            // @ts-ignore
            [columns, data,];
            const __VLS_9 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
        }
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const [{ column, record }] = __VLS_getSlotParams((__VLS_4.slots).bodyCell);
        if (column.key === 'name') {
            __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({});
            (record.name);
        }
        else if (column.key === 'tags') {
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            for (const [tag] of __VLS_getVForSourceType((record.tags))) {
                const __VLS_10 = {}.ATag;
                const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({ key: ((tag)), color: ((tag === 'loser'
                        ? 'volcano'
                        : tag.length > 5
                            ? 'geekblue'
                            : 'green')), }));
                ({}.ATag);
                ({}.ATag);
                __VLS_components.ATag;
                __VLS_components.aTag;
                __VLS_components.ATag;
                __VLS_components.aTag;
                // @ts-ignore
                [ATag, ATag,];
                const __VLS_12 = __VLS_11({ key: ((tag)), color: ((tag === 'loser'
                        ? 'volcano'
                        : tag.length > 5
                            ? 'geekblue'
                            : 'green')), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
                ({}({ key: ((tag)), color: ((tag === 'loser'
                        ? 'volcano'
                        : tag.length > 5
                            ? 'geekblue'
                            : 'green')), }));
                (tag.toUpperCase());
                (__VLS_14.slots).default;
                const __VLS_14 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
            }
        }
        else if (column.key === 'action') {
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({});
            (record.name);
            const __VLS_15 = {}.ADivider;
            const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({ type: ("vertical"), }));
            ({}.ADivider);
            __VLS_components.ADivider;
            __VLS_components.aDivider;
            // @ts-ignore
            [ADivider,];
            const __VLS_17 = __VLS_16({ type: ("vertical"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
            ({}({ type: ("vertical"), }));
            const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
            __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({});
            const __VLS_20 = {}.ADivider;
            const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ type: ("vertical"), }));
            ({}.ADivider);
            __VLS_components.ADivider;
            __VLS_components.aDivider;
            // @ts-ignore
            [ADivider,];
            const __VLS_22 = __VLS_21({ type: ("vertical"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
            ({}({ type: ("vertical"), }));
            const __VLS_24 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
            __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ class: ("ant-dropdown-link"), });
            const __VLS_25 = {}.DownOutlined;
            const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({}));
            ({}.DownOutlined);
            __VLS_components.DownOutlined;
            __VLS_components.downOutlined;
            // @ts-ignore
            [DownOutlined,];
            const __VLS_27 = __VLS_26({}, ...__VLS_functionalComponentArgsRest(__VLS_26));
            ({}({}));
            const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27);
        }
    }
    const __VLS_4 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            SmileOutlined: SmileOutlined,
            DownOutlined: DownOutlined,
            columns: columns,
            data: data,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
//# sourceMappingURL=Table.vue.js.map