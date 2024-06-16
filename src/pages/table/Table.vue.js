/* __placeholder__ */
import EasyTable from "../../../lib/easy-table";
import { data, empty } from "./data";
import { schema, simpleSchema } from "./schema";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
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
    // @ts-ignore
    const __VLS_0 = {}
        .EasyTable;
    ({}.EasyTable);
    __VLS_components.EasyTable;
    // @ts-ignore
    [EasyTable,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ schema: ((__VLS_ctx.schema)), data: ((__VLS_ctx.data)), }));
    const __VLS_2 = __VLS_1({ schema: ((__VLS_ctx.schema)), data: ((__VLS_ctx.data)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ schema: ((__VLS_ctx.schema)), data: ((__VLS_ctx.data)), }));
    // @ts-ignore
    [schema, data,];
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    // @ts-ignore
    const __VLS_6 = {}
        .EasyTable;
    ({}.EasyTable);
    __VLS_components.EasyTable;
    // @ts-ignore
    [EasyTable,];
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ schema: ((__VLS_ctx.simpleSchema)), data: ((__VLS_ctx.data)), }));
    const __VLS_8 = __VLS_7({ schema: ((__VLS_ctx.simpleSchema)), data: ((__VLS_ctx.data)), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ schema: ((__VLS_ctx.simpleSchema)), data: ((__VLS_ctx.data)), }));
    // @ts-ignore
    [data, simpleSchema,];
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    // @ts-ignore
    const __VLS_12 = {}
        .EasyTable;
    ({}.EasyTable);
    __VLS_components.EasyTable;
    // @ts-ignore
    [EasyTable,];
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ schema: ((__VLS_ctx.simpleSchema)), data: ((__VLS_ctx.empty)), }));
    const __VLS_14 = __VLS_13({ schema: ((__VLS_ctx.simpleSchema)), data: ((__VLS_ctx.empty)), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    ({}({ schema: ((__VLS_ctx.simpleSchema)), data: ((__VLS_ctx.empty)), }));
    // @ts-ignore
    [simpleSchema, empty,];
    const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                EasyTable: EasyTable,
                data: data,
                empty: empty,
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