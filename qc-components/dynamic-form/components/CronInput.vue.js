/* __placeholder__ */
import { computed, ref } from "vue";
import CronSelector from "./CronSelector.vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const props = defineProps();
const emit = defineEmits(["update:value"]);
const input = computed({
    get: () => props.value || "",
    set: (value) => {
        emit("update:value", value);
    },
});
const visible = ref(false);
const showModal = () => {
    visible.value = true;
};
const handleChange = (value) => {
    console.log("change", value);
    input.value = `${value.second} ${value.minute} ${value.hour} ${value.day} ${value.month} ${value.Week}`;
};
const handleClose = () => {
    console.log("close");
    visible.value = false;
};
const __VLS_fnComponent = (await import('vue')).defineComponent({
    emits: {},
});
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    const __VLS_0 = {}.AInput;
    ({}.AInput);
    ({}.AInput);
    __VLS_components.AInput;
    __VLS_components.aInput;
    __VLS_components.AInput;
    __VLS_components.aInput;
    // @ts-ignore
    [AInput, AInput,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ value: ((__VLS_ctx.input)), ...{ style: ({}) }, }));
    const __VLS_2 = __VLS_1({ value: ((__VLS_ctx.input)), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ value: ((__VLS_ctx.input)), ...{ style: ({}) }, }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        (__VLS_5.slots).addonAfter;
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ onClick: (__VLS_ctx.showModal) }, type: ("primary"), ...{ style: ({}) }, });
        // @ts-ignore
        [input, showModal,];
    }
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    const __VLS_6 = {}.AModal;
    ({}.AModal);
    ({}.AModal);
    __VLS_components.AModal;
    __VLS_components.aModal;
    __VLS_components.AModal;
    __VLS_components.aModal;
    // @ts-ignore
    [AModal, AModal,];
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ title: ("corn 表达式"), open: ((__VLS_ctx.visible)), footer: ((null)), width: ("800px"), destroyOnClose: (true), }));
    const __VLS_8 = __VLS_7({ title: ("corn 表达式"), open: ((__VLS_ctx.visible)), footer: ((null)), width: ("800px"), destroyOnClose: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ title: ("corn 表达式"), open: ((__VLS_ctx.visible)), footer: ((null)), width: ("800px"), destroyOnClose: (true), }));
    // @ts-ignore
    [CronSelector, CronSelector,];
    const __VLS_12 = __VLS_asFunctionalComponent(CronSelector, new CronSelector({ ...{ 'onChange': {} }, ...{ 'onClose': {} }, i18n: (('cn')), expression: ((__VLS_ctx.input)), }));
    const __VLS_13 = __VLS_12({ ...{ 'onChange': {} }, ...{ 'onClose': {} }, i18n: (('cn')), expression: ((__VLS_ctx.input)), }, ...__VLS_functionalComponentArgsRest(__VLS_12));
    ({}({ ...{ 'onChange': {} }, ...{ 'onClose': {} }, i18n: (('cn')), expression: ((__VLS_ctx.input)), }));
    let __VLS_17;
    const __VLS_18 = {
        onChange: (__VLS_ctx.handleChange)
    };
    const __VLS_19 = {
        onClose: (__VLS_ctx.handleClose)
    };
    // @ts-ignore
    [input, visible, handleChange, handleClose,];
    const __VLS_16 = __VLS_pickFunctionalComponentCtx(CronSelector, __VLS_13);
    let __VLS_14;
    let __VLS_15;
    (__VLS_11.slots).default;
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
                CronSelector: CronSelector,
                input: input,
                visible: visible,
                showModal: showModal,
                handleChange: handleChange,
                handleClose: handleClose,
            };
        },
        props: {},
        emits: {},
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {},
    emits: {},
});
;
//# sourceMappingURL=CronInput.vue.js.map