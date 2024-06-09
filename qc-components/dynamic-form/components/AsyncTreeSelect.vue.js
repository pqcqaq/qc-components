/* __placeholder__ */
import ATreeSelect from "ant-design-vue/es/tree-select";
import { computed, ref } from "vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const props = defineProps();
const emit = defineEmits();
const realTreeData = ref([]);
const selected = computed({
    get() {
        return props.value;
    },
    set(value) {
        emit("update:value", value);
    },
});
const loading = ref(false);
const getData = async () => {
    loading.value = true;
    try {
        if (!props.treeData) {
            console.error("options must not be empty");
            return;
        }
        if (props.treeData instanceof Function) {
            const optionsPromise = await props.treeData();
            realTreeData.value = optionsPromise || [];
        }
        else {
            if (props.treeData && !Array.isArray(props.treeData)) {
                console.error("options must be an array or a function that returns an array");
                return;
            }
            realTreeData.value = props.treeData || [];
        }
    }
    catch (error) {
        console.error(error);
    }
    loading.value = false;
    selected.value = props.value;
};
getData();
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
    const __VLS_0 = {}.ATreeSelect;
    ({}.ATreeSelect);
    __VLS_components.ATreeSelect;
    __VLS_components.aTreeSelect;
    // @ts-ignore
    [ATreeSelect,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onChange': {} }, value: ((__VLS_ctx.selected)), loading: ((__VLS_ctx.loading)), treeData: ((__VLS_ctx.realTreeData)), ...(__VLS_ctx.$attrs), }));
    const __VLS_2 = __VLS_1({ ...{ 'onChange': {} }, value: ((__VLS_ctx.selected)), loading: ((__VLS_ctx.loading)), treeData: ((__VLS_ctx.realTreeData)), ...(__VLS_ctx.$attrs), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ 'onChange': {} }, value: ((__VLS_ctx.selected)), loading: ((__VLS_ctx.loading)), treeData: ((__VLS_ctx.realTreeData)), ...(__VLS_ctx.$attrs), }));
    let __VLS_6;
    const __VLS_7 = {
        onChange: (...[$event]) => {
            __VLS_ctx.selected = $event;
            // @ts-ignore
            [selected, selected, loading, realTreeData, $attrs,];
        }
    };
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    let __VLS_3;
    let __VLS_4;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    const __VLS_internalComponent = (await import('vue')).defineComponent({
        setup() {
            return {
                ATreeSelect: ATreeSelect,
                realTreeData: realTreeData,
                selected: selected,
                loading: loading,
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
//# sourceMappingURL=AsyncTreeSelect.vue.js.map