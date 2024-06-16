/* __placeholder__ */
import { computed, onMounted, ref } from "vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const props = defineProps();
const emit = defineEmits(["update:value"]);
const list = ref([]);
const promptList = ref([]);
onMounted(async () => {
    if (!props.fetchList)
        return;
    if (props.fetchList instanceof Function) {
        const newList = await props.fetchList();
        list.value.push(...newList);
    }
    else {
        list.value.push(...props.fetchList);
    }
    promptList.value = list.value;
});
const alterData = computed({
    get() {
        return props.value;
    },
    set(value) {
        emit("update:value", value);
    },
});
const finalSplitWord = computed(() => props.splitWord || ",");
const title = computed(() => props.title || "");
const enableSplit = computed(() => !!props.enableSplit);
const createFilter = (arr, key) => {
    const finalKey = enableSplit.value
        ? key.split(finalSplitWord.value).pop()?.trim()
        : key;
    return arr.filter((item) => item.value.includes(finalKey || "") && item.value !== finalKey);
};
const handleSelect = (select) => {
    if (enableSplit.value) {
        const dataWithoutFinalKey = alterData.value
            ? alterData.value.endsWith(finalSplitWord.value)
                ? alterData.value.split(finalSplitWord.value).slice(0, -1)
                : alterData.value.split(finalSplitWord.value)
            : [];
        const newValue = alterData.value
            ? [...dataWithoutFinalKey, select].join(finalSplitWord.value)
            : select;
        alterData.value = newValue;
    }
    else {
        alterData.value = select;
    }
};
const onSearch = (searchText) => {
    promptList.value = createFilter(list.value, searchText);
};
const __VLS_fnComponent = (await import('vue')).defineComponent({
    emits: {},
});
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
        .AAutoComplete;
    ({}.AAutoComplete);
    __VLS_components.AAutoComplete;
    __VLS_components.aAutoComplete;
    // @ts-ignore
    [AAutoComplete,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onSelect': {} }, ...{ 'onSearch': {} }, value: ((__VLS_ctx.alterData)), placeholder: ((__VLS_ctx.placeholder
            ? __VLS_ctx.placeholder
            : `输入${__VLS_ctx.title}内容${__VLS_ctx.enableSplit ? '（以' + __VLS_ctx.splitWord + '分割）' : ''} 或选择已有${__VLS_ctx.title}`)), options: ((__VLS_ctx.promptList)), ...({
            ...__VLS_ctx.$attrs,
            style: props.style,
        }), }));
    const __VLS_2 = __VLS_1({ ...{ 'onSelect': {} }, ...{ 'onSearch': {} }, value: ((__VLS_ctx.alterData)), placeholder: ((__VLS_ctx.placeholder
            ? __VLS_ctx.placeholder
            : `输入${__VLS_ctx.title}内容${__VLS_ctx.enableSplit ? '（以' + __VLS_ctx.splitWord + '分割）' : ''} 或选择已有${__VLS_ctx.title}`)), options: ((__VLS_ctx.promptList)), ...({
            ...__VLS_ctx.$attrs,
            style: props.style,
        }), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ 'onSelect': {} }, ...{ 'onSearch': {} }, value: ((__VLS_ctx.alterData)), placeholder: ((__VLS_ctx.placeholder
            ? __VLS_ctx.placeholder
            : `输入${__VLS_ctx.title}内容${__VLS_ctx.enableSplit ? '（以' + __VLS_ctx.splitWord + '分割）' : ''} 或选择已有${__VLS_ctx.title}`)), options: ((__VLS_ctx.promptList)), ...({
            ...__VLS_ctx.$attrs,
            style: props.style,
        }), }));
    let __VLS_6;
    const __VLS_7 = {
        onSelect: (__VLS_ctx.handleSelect)
    };
    const __VLS_8 = {
        onSearch: (__VLS_ctx.onSearch)
    };
    // @ts-ignore
    [alterData, placeholder, placeholder, title, title, enableSplit, splitWord, promptList, $attrs, handleSelect, onSearch,];
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    let __VLS_3;
    let __VLS_4;
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
                promptList: promptList,
                alterData: alterData,
                title: title,
                enableSplit: enableSplit,
                handleSelect: handleSelect,
                onSearch: onSearch,
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
//# sourceMappingURL=AutoCompleteInput.vue.js.map