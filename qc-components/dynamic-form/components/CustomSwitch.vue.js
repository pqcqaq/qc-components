/* __placeholder__ */
import { computed } from "vue";
import ASwitch from "ant-design-vue/es/switch";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const props = defineProps();
const emit = defineEmits(["update:value"]);
const checked = computed({
    get() {
        return props.value;
    },
    set(value) {
        emit("update:value", value);
    },
});
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
    const __VLS_0 = {}.ASwitch;
    ({}.ASwitch);
    __VLS_components.ASwitch;
    __VLS_components.aSwitch;
    // @ts-ignore
    [ASwitch,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ checked: ((__VLS_ctx.checked)), ...(__VLS_ctx.$attrs), }));
    const __VLS_2 = __VLS_1({ checked: ((__VLS_ctx.checked)), ...(__VLS_ctx.$attrs), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ checked: ((__VLS_ctx.checked)), ...(__VLS_ctx.$attrs), }));
    // @ts-ignore
    [checked, $attrs,];
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    const __VLS_internalComponent = (await import('vue')).defineComponent({
        setup() {
            return {
                ASwitch: ASwitch,
                checked: checked,
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
//# sourceMappingURL=CustomSwitch.vue.js.map