/* __placeholder__ */
import AButton from "ant-design-vue/es/button";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const props = defineProps();
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
    if (props.btns && props.btns.length > 0) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("custombtns") }, ...{ style: (({
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '20px',
                    ...props.customBtnsStyle,
                })) }, });
        for (const [btn] of __VLS_getVForSourceType((props.btns))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((btn.text)), ...{ style: (({
                        display: 'inline',
                        justifyContent: 'center',
                        ...btn.outterStyle,
                    })) }, });
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
            const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onClick': {} }, ...(btn.props), ...{ style: (({
                        ...btn.style,
                    })) }, }));
            const __VLS_2 = __VLS_1({ ...{ 'onClick': {} }, ...(btn.props), ...{ style: (({
                        ...btn.style,
                    })) }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
            ({}({ ...{ 'onClick': {} }, ...(btn.props), ...{ style: (({
                        ...btn.style,
                    })) }, }));
            let __VLS_6;
            const __VLS_7 = {
                onClick: (...[$event]) => {
                    if (!((props.btns && props.btns.length > 0)))
                        return;
                    btn.onClick({ event: $event });
                }
            };
            (btn.text);
            (__VLS_5.slots).default;
            const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
            let __VLS_3;
            let __VLS_4;
        }
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['custombtns'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                AButton: AButton,
            };
        },
        props: {},
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {},
});
;
//# sourceMappingURL=TableButtons.vue.js.map