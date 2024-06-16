/* __placeholder__ */
import Form from "./pages/form/Form.vue";
import Table from "./pages/table/Table.vue";
import Manage from "./pages/manage/Manage.vue";
import { ref, markRaw } from "vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const componentsList = [
    {
        name: "动态表单",
        path: "form",
        cpn: markRaw(Form),
    },
    {
        name: "表格",
        path: "table",
        cpn: markRaw(Table),
    },
    {
        name: "管理页面",
        path: "manage",
        cpn: markRaw(Manage),
    },
];
const viewComponent = ref();
// 获取当前页面的查询参数，然后根据查询参数来获取对应的组件
const getComponent = () => {
    const search = new URLSearchParams(location.search);
    const componentName = search.get("component");
    const component = componentsList.find((item) => item.path === componentName);
    if (component) {
        viewComponent.value = component.cpn;
    }
};
const location = window.location;
getComponent();
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("switch") }, });
    for (const [component, key] of __VLS_getVForSourceType((__VLS_ctx.componentsList))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("btns") }, key: ((key)), });
        // @ts-ignore
        const __VLS_0 = {}
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
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onClick': {} }, type: ("primary"), ...{ class: ("btn") }, }));
        const __VLS_2 = __VLS_1({ ...{ 'onClick': {} }, type: ("primary"), ...{ class: ("btn") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{ 'onClick': {} }, type: ("primary"), ...{ class: ("btn") }, }));
        let __VLS_6;
        const __VLS_7 = {
            onClick: (...[$event]) => {
                __VLS_ctx.location.href = `?component=${component.path}`;
                // @ts-ignore
                [componentsList, location,];
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
    // @ts-ignore
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
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                componentsList: componentsList,
                viewComponent: viewComponent,
                location: location,
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