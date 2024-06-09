/* __placeholder__ */
import { computed, ref } from "vue";
import ACheckbox from "ant-design-vue/es/checkbox";
import ACheckboxGroup from "ant-design-vue/es/checkbox/Group";
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
const msg = ref("加载中....");
const Realoptions = ref([]);
const getData = async () => {
    msg.value = "加载中....";
    try {
        if (props.options instanceof Function) {
            const optionsPromise = await props.options();
            Realoptions.value = optionsPromise;
        }
        else {
            if (props.options && !Array.isArray(props.options)) {
                console.error("options must be an array or a function that returns an array");
                return;
            }
            Realoptions.value = props.options;
        }
        if (Realoptions.value.length === 0) {
            msg.value = "暂无数据";
        }
        else {
            msg.value = "";
        }
    }
    catch (error) {
        msg.value = "数据加载失败";
    }
    checked.value = props.value;
};
getData();
const reflash = async () => {
    await getData();
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ onClick: (__VLS_ctx.reflash) }, ...{ style: ({}) }, });
    (__VLS_ctx.Realoptions.length > 0 ? "" : __VLS_ctx.msg);
    // @ts-ignore
    [reflash, Realoptions, msg,];
    const __VLS_0 = {}.ACheckboxGroup;
    ({}.ACheckboxGroup);
    ({}.ACheckboxGroup);
    __VLS_components.ACheckboxGroup;
    __VLS_components.aCheckboxGroup;
    __VLS_components.ACheckboxGroup;
    __VLS_components.aCheckboxGroup;
    // @ts-ignore
    [ACheckboxGroup, ACheckboxGroup,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ value: ((__VLS_ctx.checked)), ...(__VLS_ctx.$attrs), }));
    const __VLS_2 = __VLS_1({ value: ((__VLS_ctx.checked)), ...(__VLS_ctx.$attrs), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ value: ((__VLS_ctx.checked)), ...(__VLS_ctx.$attrs), }));
    for (const [option] of __VLS_getVForSourceType((__VLS_ctx.Realoptions))) {
        const __VLS_6 = {}.ACheckbox;
        ({}.ACheckbox);
        ({}.ACheckbox);
        __VLS_components.ACheckbox;
        __VLS_components.aCheckbox;
        __VLS_components.ACheckbox;
        __VLS_components.aCheckbox;
        // @ts-ignore
        [ACheckbox, ACheckbox,];
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ key: ((option.value)), value: ((option.value)), }));
        const __VLS_8 = __VLS_7({ key: ((option.value)), value: ((option.value)), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        ({}({ key: ((option.value)), value: ((option.value)), }));
        (option.label);
        // @ts-ignore
        [Realoptions, checked, $attrs,];
        (__VLS_11.slots).default;
        const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    }
    (__VLS_5.slots).default;
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
                ACheckbox: ACheckbox,
                ACheckboxGroup: ACheckboxGroup,
                checked: checked,
                msg: msg,
                Realoptions: Realoptions,
                reflash: reflash,
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
//# sourceMappingURL=AsyncCheckBox.vue.js.map