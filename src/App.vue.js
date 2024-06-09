/* __placeholder__ */
import Form from "./pages/form/Form.vue";
import Table from "./pages/table/Table.vue";
import { ref } from "vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const viewComponent = ref();
const componentsList = [
    {
        name: "动态表单",
        cpn: Form,
    },
    {
        name: "表格",
        cpn: Table,
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("switch") }, });
    for (const [component, key] of __VLS_getVForSourceType((__VLS_ctx.componentsList))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("btns") }, key: ((key)), });
        const __VLS_0 = {}.AButton;
        ({}.AButton);
        ({}.AButton);
        __VLS_components.AButton;
        __VLS_components.aButton;
        __VLS_components.AButton;
        __VLS_components.aButton;
        // @ts-ignore
        [AButton, AButton,];
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onClick': {} }, type: ("primary"), ...{ class: ("btn") }, }));
        const __VLS_2 = __VLS_1({ ...{ 'onClick': {} }, type: ("primary"), ...{ class: ("btn") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{ 'onClick': {} }, type: ("primary"), ...{ class: ("btn") }, }));
        let __VLS_6;
        const __VLS_7 = {
            onClick: (...[$event]) => {
                __VLS_ctx.viewComponent = component.cpn;
                // @ts-ignore
                [componentsList, viewComponent,];
            }
        };
        (component.name);
        (__VLS_5.slots).default;
        const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
        let __VLS_3;
        let __VLS_4;
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    const __VLS_8 = (__VLS_ctx.viewComponent);
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({}));
    const __VLS_10 = __VLS_9({}, ...__VLS_functionalComponentArgsRest(__VLS_9));
    ({}({}));
    // @ts-ignore
    [viewComponent,];
    const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['switch'];
        __VLS_styleScopedClasses['btns'];
        __VLS_styleScopedClasses['btn'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    const __VLS_internalComponent = (await import('vue')).defineComponent({
        setup() {
            return {
                viewComponent: viewComponent,
                componentsList: componentsList,
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

//# sourceMappingURL=App.vue.js.map