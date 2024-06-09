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
    const __VLS_0 = {}.ATable;
    ({}.ATable);
    ({}.ATable);
    __VLS_components.ATable;
    __VLS_components.aTable;
    __VLS_components.ATable;
    __VLS_components.aTable;
    // @ts-ignore
    [ATable, ATable,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ columns: ((__VLS_ctx.columns)), dataSource: ((__VLS_ctx.data)), }));
    const __VLS_2 = __VLS_1({ columns: ((__VLS_ctx.columns)), dataSource: ((__VLS_ctx.data)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ columns: ((__VLS_ctx.columns)), dataSource: ((__VLS_ctx.data)), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const [{ column }] = __VLS_getSlotParams((__VLS_5.slots).headerCell);
        if (column.key === 'name') {
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            const __VLS_6 = {}.SmileOutlined;
            ({}.SmileOutlined);
            __VLS_components.SmileOutlined;
            __VLS_components.smileOutlined;
            // @ts-ignore
            [SmileOutlined,];
            const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({}));
            const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
            ({}({}));
            // @ts-ignore
            [columns, data,];
            const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
        }
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const [{ column, record }] = __VLS_getSlotParams((__VLS_5.slots).bodyCell);
        if (column.key === 'name') {
            __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({});
            (record.name);
        }
        else if (column.key === 'tags') {
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            for (const [tag] of __VLS_getVForSourceType((record.tags))) {
                const __VLS_12 = {}.ATag;
                ({}.ATag);
                ({}.ATag);
                __VLS_components.ATag;
                __VLS_components.aTag;
                __VLS_components.ATag;
                __VLS_components.aTag;
                // @ts-ignore
                [ATag, ATag,];
                const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ key: ((tag)), color: ((tag === 'loser'
                        ? 'volcano'
                        : tag.length > 5
                            ? 'geekblue'
                            : 'green')), }));
                const __VLS_14 = __VLS_13({ key: ((tag)), color: ((tag === 'loser'
                        ? 'volcano'
                        : tag.length > 5
                            ? 'geekblue'
                            : 'green')), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
                ({}({ key: ((tag)), color: ((tag === 'loser'
                        ? 'volcano'
                        : tag.length > 5
                            ? 'geekblue'
                            : 'green')), }));
                (tag.toUpperCase());
                (__VLS_17.slots).default;
                const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
            }
        }
        else if (column.key === 'action') {
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({});
            (record.name);
            const __VLS_18 = {}.ADivider;
            ({}.ADivider);
            __VLS_components.ADivider;
            __VLS_components.aDivider;
            // @ts-ignore
            [ADivider,];
            const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ type: ("vertical"), }));
            const __VLS_20 = __VLS_19({ type: ("vertical"), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
            ({}({ type: ("vertical"), }));
            const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
            __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({});
            const __VLS_24 = {}.ADivider;
            ({}.ADivider);
            __VLS_components.ADivider;
            __VLS_components.aDivider;
            // @ts-ignore
            [ADivider,];
            const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ type: ("vertical"), }));
            const __VLS_26 = __VLS_25({ type: ("vertical"), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
            ({}({ type: ("vertical"), }));
            const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
            __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ class: ("ant-dropdown-link") }, });
            const __VLS_30 = {}.DownOutlined;
            ({}.DownOutlined);
            __VLS_components.DownOutlined;
            __VLS_components.downOutlined;
            // @ts-ignore
            [DownOutlined,];
            const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({}));
            const __VLS_32 = __VLS_31({}, ...__VLS_functionalComponentArgsRest(__VLS_31));
            ({}({}));
            const __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
        }
    }
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['ant-dropdown-link'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
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
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
//# sourceMappingURL=Table.vue.js.map