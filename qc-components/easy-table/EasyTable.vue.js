/* __placeholder__ */
import { markRaw, computed } from "vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
// const ComponentsCacheMap = new Map<string, ComponentRender>();
const cachedComponentsInfo = (render, props) => {
    // if (ComponentsCacheMap.has(render.key)) {
    // 	return ComponentsCacheMap.get(render.key)!;
    // }
    if (!render.render) {
        return {
            component: "span",
            props: {},
            event: {},
        };
    }
    const rendered = render.render(props);
    const cache = {
        component: makeRawCpn.value(rendered.component),
        props: rendered.props,
        event: rendered.event,
    };
    // ComponentsCacheMap.set(render.key, cache);
    return cache;
};
const headerInfoCacheMap = new Map();
const cachedHeaderInfo = (render, props) => {
    if (headerInfoCacheMap.has(render.key)) {
        return headerInfoCacheMap.get(render.key);
    }
    if (!render.render) {
        return {
            component: "span",
            props: {},
            event: {},
        };
    }
    const rendered = render.render(props);
    const cache = {
        component: makeRawCpn.value(rendered.component),
        props: rendered.props,
        event: rendered.event,
    };
    headerInfoCacheMap.set(render.key, cache);
    return cache;
};
let __VLS_typeProps;
const props = defineProps();
const makeRawCpn = computed(() => (cpn) => {
    if (typeof cpn === "string") {
        return cpn;
    }
    return markRaw(cpn);
});
const baseSchema = computed(() => {
    const widthCache = [];
    return props.schema.columns
        .map((item, index) => {
        widthCache[index] = item.width;
        return item.body;
    })
        .map((render, index) => {
        if (typeof render === "string") {
            return {
                dataIndex: render,
                key: render,
                width: widthCache[index],
            };
        }
        return {
            dataIndex: render.index,
            key: render.index,
            ...render.columnProps,
            width: widthCache[index],
        };
    });
});
const renders = computed(() => {
    return props.schema.columns.map((item) => {
        if (typeof item.body === "string") {
            return {
                render: undefined,
                key: item.body,
            };
        }
        return {
            ...item.body,
            key: item.body.index,
        };
    });
});
const headers = computed(() => {
    return props.schema.columns.map((item) => {
        if (typeof item.header === "string") {
            return {
                title: item.header,
                key: typeof item.body == "string" ? item.body : item.body.index,
            };
        }
        return {
            ...item.header,
            key: typeof item.body == "string" ? item.body : item.body.index,
        };
    });
});
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("easy-table") }, });
    if (__VLS_ctx.schema.title) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("title") }, });
        (__VLS_ctx.schema.title);
        // @ts-ignore
        [schema, schema,];
    }
    const __VLS_0 = {}.ATable;
    ({}.ATable);
    ({}.ATable);
    __VLS_components.ATable;
    __VLS_components.aTable;
    __VLS_components.ATable;
    __VLS_components.aTable;
    // @ts-ignore
    [ATable, ATable,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ columns: ((__VLS_ctx.baseSchema)), dataSource: ((__VLS_ctx.data)), }));
    const __VLS_2 = __VLS_1({ columns: ((__VLS_ctx.baseSchema)), dataSource: ((__VLS_ctx.data)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ columns: ((__VLS_ctx.baseSchema)), dataSource: ((__VLS_ctx.data)), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const [{ title, column }] = __VLS_getSlotParams((__VLS_5.slots).headerCell);
        for (const [header] of __VLS_getVForSourceType((__VLS_ctx.headers))) {
            if (column.key === header.key) {
                const __VLS_6 = (__VLS_ctx.cachedHeaderInfo(header, {
                    title,
                    column,
                }).component);
                const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...(__VLS_ctx.cachedHeaderInfo(header, {
                        title,
                        column,
                    }).props), }));
                const __VLS_8 = __VLS_7({ ...(__VLS_ctx.cachedHeaderInfo(header, {
                        title,
                        column,
                    }).props), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
                ({}({ ...(__VLS_ctx.cachedHeaderInfo(header, {
                        title,
                        column,
                    }).props), }));
                ({
                    ...__VLS_ctx.cachedHeaderInfo(header, {
                        title,
                        column,
                    }).event,
                    onNull: () => { },
                });
                (header?.title);
                // @ts-ignore
                [baseSchema, data, headers, cachedHeaderInfo, cachedHeaderInfo, cachedHeaderInfo,];
                (__VLS_11.slots).default;
                const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
            }
        }
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const [{ text, record, index, column }] = __VLS_getSlotParams((__VLS_5.slots).bodyCell);
        for (const [render] of __VLS_getVForSourceType((__VLS_ctx.renders))) {
            if (column.key === render.key) {
                const __VLS_12 = (__VLS_ctx.cachedComponentsInfo(render, {
                    text,
                    record,
                    index,
                }).component);
                const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...(__VLS_ctx.cachedComponentsInfo(render, {
                        text,
                        record,
                        index,
                    }).props), }));
                const __VLS_14 = __VLS_13({ ...(__VLS_ctx.cachedComponentsInfo(render, {
                        text,
                        record,
                        index,
                    }).props), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
                ({}({ ...(__VLS_ctx.cachedComponentsInfo(render, {
                        text,
                        record,
                        index,
                    }).props), }));
                ({
                    ...__VLS_ctx.cachedComponentsInfo(render, {
                        text,
                        record,
                        index,
                    }).event,
                    onNull: () => { },
                });
                (text);
                // @ts-ignore
                [renders, cachedComponentsInfo, cachedComponentsInfo, cachedComponentsInfo,];
                (__VLS_17.slots).default;
                const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
            }
        }
    }
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['easy-table'];
        __VLS_styleScopedClasses['title'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    const __VLS_internalComponent = (await import('vue')).defineComponent({
        setup() {
            return {
                cachedComponentsInfo: cachedComponentsInfo,
                cachedHeaderInfo: cachedHeaderInfo,
                baseSchema: baseSchema,
                renders: renders,
                headers: headers,
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
//# sourceMappingURL=EasyTable.vue.js.map