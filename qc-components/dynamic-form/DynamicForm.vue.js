/* __placeholder__ */
import { ref, onMounted, defineAsyncComponent, computed, onBeforeMount, watch, onUnmounted, getCurrentInstance, markRaw, } from "vue";
import { componentsMap } from "./cpnsMap";
import { message } from "ant-design-vue";
export default await (async () => {
    const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
    const rawComponents = computed(() => (cpns) => {
        return markRaw(cpns);
    });
    let __VLS_typeProps;
    const props = defineProps();
    const btnShow = computed(() => {
        // 若传入的是布尔值，则根据布尔值显示
        if (typeof props.showBtns === "boolean") {
            if (props.showBtns) {
                return {
                    clearAll: 0,
                    reset: 1,
                    submit: 1,
                };
            }
            else {
                return null;
            }
        }
        // 若传入的是对象，并且值不存在，则默认显示
        if (!props.showBtns) {
            return {
                clearAll: 0,
                reset: 1,
                submit: 1,
            };
        }
        // 若传入的是对象，则根据对象显示
        return props.showBtns;
    });
    const formRef = ref(null);
    const selfInstance = getCurrentInstance();
    const nextModel = ref({});
    const nextFormRefs = ref([]);
    onMounted(() => {
        if (props.registeToParent && selfInstance) {
            props.registeToParent(selfInstance);
        }
    });
    onUnmounted(() => {
        if (props.unRegisteFromParent && selfInstance) {
            props.unRegisteFromParent(selfInstance);
        }
    });
    const register = (form) => {
        nextFormRefs.value.push(form);
    };
    const unRegister = (form) => {
        const index = nextFormRefs.value.findIndex((item) => item.uid == form.uid);
        if (index > -1) {
            nextFormRefs.value.splice(index, 1);
        }
    };
    const emit = defineEmits(["update:modelValue"]);
    const formModel = computed({
        get: () => {
            return props.modelValue;
        },
        set: (value) => {
            emit("update:modelValue", value);
        },
    });
    // 表单初始化
    const initForm = () => {
        // model初始数据
        const rawModel = props.schema.items.reduce((pre, cur) => {
            if (!pre[cur.field]) {
                // 表单初始数据(默认值)
                pre[cur.field] = cur.value;
                return pre;
            }
            return {};
        }, {});
        formModel.value = { ...formModel.value, ...rawModel };
    };
    onBeforeMount(() => { });
    onMounted(() => {
        initForm();
        hasNext.value = props.schema.items.some((item) => item.next);
    });
    // 表单验证
    const validateFields = () => {
        return new Promise((resolve, reject) => {
            formRef.value
                ?.validateFields()
                .then((formData) => {
                resolve(formData);
            })
                .catch((err) => reject(err));
        });
    };
    // 表单重置
    const resetFields = (isInit = true) => {
        // 是否清空默认值
        // model初始数据
        const rawModel = props.schema.items.reduce((pre, cur) => {
            if (!pre[cur.field]) {
                // 表单初始数据(默认值)
                pre[cur.field] = isInit ? undefined : cur.value;
                return pre;
            }
            return {};
        }, {});
        formModel.value = { ...formModel.value, ...rawModel };
    };
    const DynamicForm = defineAsyncComponent(() => import("./DynamicForm.vue"));
    const hasNext = ref(false); // 是否有下一级表单
    const showNext = computed(() => (model, item) => {
        return nextFormSchema.value(model, item).items.length > 0;
    });
    const nextFormSchema = computed(() => (model, item) => {
        return item.next?.(model) || { title: "", items: [] };
    });
    const loading = ref(false);
    const handleSubmit = async () => {
        loading.value = true;
        props.onBeforeSubmit?.(formModel.value);
        try {
            const formData = await validateThenGetModel();
            await props.schema.onSubmit?.(formData);
            await props.onSubmit?.(formModel.value);
        }
        catch (error) {
            console.error("在数据提交时发生错误：", error);
            message.error("操作失败");
        }
        finally {
            loading.value = false;
            props.onAfterSubmit?.(formModel.value);
        }
    };
    const handleReset = () => {
        resetFields(false);
    };
    const handleClear = () => {
        resetFields();
    };
    const validateThenGetModel = async () => {
        const formData = await validateFields();
        for (let element of nextFormRefs.value) {
            await element.exposed?.validateThenGetModel();
        }
        formData["next"] = nextModel.value;
        return formData;
    };
    watch(() => nextModel.value, (newVal) => {
        formModel.value["next"] = newVal;
    }, {
        deep: true,
        immediate: true,
    });
    watch(() => formModel.value["next"], (newVal) => {
        if (newVal) {
            nextModel.value = newVal;
        }
    });
    // 暴露方法
    const __VLS_exposed = {
        validateFields,
        resetFields,
        validateThenGetModel,
    };
    defineExpose({
        validateFields,
        resetFields,
        validateThenGetModel,
    });
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
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        if (props.schema.title) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("title") }, ...{ style: (({
                        'font-size': '20px',
                        'font-weight': 'bold',
                    })) }, });
            if (typeof props.schema.title === 'string') {
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ style: ({}) }, });
                (__VLS_ctx.schema.title);
                // @ts-ignore
                [schema,];
            }
            else {
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ style: ((props.schema.title.style)) }, });
                (props.schema.title.text);
            }
        }
        // @ts-ignore
        const __VLS_0 = {}
            .AForm;
        ({}.AForm);
        ({}.AForm);
        __VLS_components.AForm;
        __VLS_components.aForm;
        __VLS_components.AForm;
        __VLS_components.aForm;
        // @ts-ignore
        [AForm, AForm,];
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ref: ("formRef"), model: ((__VLS_ctx.formModel)), ...({ ...__VLS_ctx.$attrs, ...props.schema.formProps }), disabled: ((__VLS_ctx.loading || props.disabled)), ...{ class: ((props.schema.className || 'dynamic-form')) }, ...{ style: ((props.schema.formProps?.layout == 'inline'
                    ? {
                        gap: '10px',
                        ...props.schema.formProps?.style,
                    }
                    : props.schema.formProps?.style)) }, }));
        const __VLS_2 = __VLS_1({ ref: ("formRef"), model: ((__VLS_ctx.formModel)), ...({ ...__VLS_ctx.$attrs, ...props.schema.formProps }), disabled: ((__VLS_ctx.loading || props.disabled)), ...{ class: ((props.schema.className || 'dynamic-form')) }, ...{ style: ((props.schema.formProps?.layout == 'inline'
                    ? {
                        gap: '10px',
                        ...props.schema.formProps?.style,
                    }
                    : props.schema.formProps?.style)) }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ref: ("formRef"), model: ((__VLS_ctx.formModel)), ...({ ...__VLS_ctx.$attrs, ...props.schema.formProps }), disabled: ((__VLS_ctx.loading || props.disabled)), ...{ class: ((props.schema.className || 'dynamic-form')) }, ...{ style: ((props.schema.formProps?.layout == 'inline'
                    ? {
                        gap: '10px',
                        ...props.schema.formProps?.style,
                    }
                    : props.schema.formProps?.style)) }, }));
        ({ ...props.schema.formEvent, onNull: () => { } });
        // @ts-ignore
        (__VLS_ctx.formRef);
        __VLS_styleScopedClasses = (props.schema.className || 'dynamic-form');
        for (const [item] of __VLS_getVForSourceType((props.schema.items))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("items") }, key: ((item.field)), });
            __VLS_directiveFunction(__VLS_ctx.vShow)((item.onShow ? item.onShow(__VLS_ctx.formModel) : true));
            // @ts-ignore
            const __VLS_6 = {}
                .AFormItem;
            ({}.AFormItem);
            ({}.AFormItem);
            __VLS_components.AFormItem;
            __VLS_components.aFormItem;
            __VLS_components.AFormItem;
            __VLS_components.aFormItem;
            // @ts-ignore
            [AFormItem, AFormItem,];
            // @ts-ignore
            const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ name: ((item.field)), label: ((item.label)), ...(item.formItemProps), ...{ class: ((item.formItemProps?.className || 'dynamic-form-item')) }, }));
            const __VLS_8 = __VLS_7({ name: ((item.field)), label: ((item.label)), ...(item.formItemProps), ...{ class: ((item.formItemProps?.className || 'dynamic-form-item')) }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
            ({}({ name: ((item.field)), label: ((item.label)), ...(item.formItemProps), ...{ class: ((item.formItemProps?.className || 'dynamic-form-item')) }, }));
            __VLS_styleScopedClasses = (item.formItemProps?.className || 'dynamic-form-item');
            const __VLS_12 = (typeof item.component === 'string'
                ? __VLS_ctx.rawComponents(__VLS_ctx.componentsMap[item.component]?.component)
                : __VLS_ctx.rawComponents(item.component));
            // @ts-ignore
            const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...({
                    ...item.componentProps,
                    ...(typeof item.component === 'string'
                        ? __VLS_ctx.componentsMap[item.component]?.defaultProps
                        : item.componentProps?.customProps),
                }), value: ((__VLS_ctx.formModel[item.field])), ...{ class: ((item.componentProps?.className ||
                        'dynamic-form-component')) }, disabled: ((props.disabled || __VLS_ctx.loading)), }));
            const __VLS_14 = __VLS_13({ ...({
                    ...item.componentProps,
                    ...(typeof item.component === 'string'
                        ? __VLS_ctx.componentsMap[item.component]?.defaultProps
                        : item.componentProps?.customProps),
                }), value: ((__VLS_ctx.formModel[item.field])), ...{ class: ((item.componentProps?.className ||
                        'dynamic-form-component')) }, disabled: ((props.disabled || __VLS_ctx.loading)), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
            ({}({ ...({
                    ...item.componentProps,
                    ...(typeof item.component === 'string'
                        ? __VLS_ctx.componentsMap[item.component]?.defaultProps
                        : item.componentProps?.customProps),
                }), value: ((__VLS_ctx.formModel[item.field])), ...{ class: ((item.componentProps?.className ||
                        'dynamic-form-component')) }, disabled: ((props.disabled || __VLS_ctx.loading)), }));
            ({ ...item.componentEvent, onNull: () => { } });
            __VLS_styleScopedClasses = (item.componentProps?.className ||
                'dynamic-form-component');
            // @ts-ignore
            [formModel, formModel, formModel, $attrs, loading, loading, formRef, vShow, rawComponents, rawComponents, componentsMap, componentsMap,];
            const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
            (__VLS_11.slots).default;
            const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
            if (__VLS_ctx.hasNext && __VLS_ctx.showNext(__VLS_ctx.formModel[item.field], item)) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("subForms") }, ...{ style: (item.nextFormStyle ||
                            {
                                'margin-left': '24px',
                                width: '100%',
                            }) }, });
                // @ts-ignore
                const __VLS_18 = {}
                    .DynamicForm;
                ({}.DynamicForm);
                __VLS_components.DynamicForm;
                // @ts-ignore
                [DynamicForm,];
                // @ts-ignore
                const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ schema: ((__VLS_ctx.nextFormSchema(__VLS_ctx.formModel[item.field], item))), modelValue: ((__VLS_ctx.nextModel)), registeToParent: ((__VLS_ctx.register)), unRegisteFromParent: ((__VLS_ctx.unRegister)), disabled: ((props.disabled || __VLS_ctx.loading)), showBtns: (({
                        clearAll: 0,
                        reset: 0,
                        submit: 0,
                    })), }));
                const __VLS_20 = __VLS_19({ schema: ((__VLS_ctx.nextFormSchema(__VLS_ctx.formModel[item.field], item))), modelValue: ((__VLS_ctx.nextModel)), registeToParent: ((__VLS_ctx.register)), unRegisteFromParent: ((__VLS_ctx.unRegister)), disabled: ((props.disabled || __VLS_ctx.loading)), showBtns: (({
                        clearAll: 0,
                        reset: 0,
                        submit: 0,
                    })), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
                ({}({ schema: ((__VLS_ctx.nextFormSchema(__VLS_ctx.formModel[item.field], item))), modelValue: ((__VLS_ctx.nextModel)), registeToParent: ((__VLS_ctx.register)), unRegisteFromParent: ((__VLS_ctx.unRegister)), disabled: ((props.disabled || __VLS_ctx.loading)), showBtns: (({
                        clearAll: 0,
                        reset: 0,
                        submit: 0,
                    })), }));
                // @ts-ignore
                [formModel, formModel, loading, hasNext, showNext, nextFormSchema, nextModel, register, unRegister,];
                const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
            }
        }
        if (!!__VLS_ctx.btnShow) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ style: ({}) }, });
            if (__VLS_ctx.btnShow?.clearAll) {
                // @ts-ignore
                const __VLS_24 = {}
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
                const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ ...{ 'onClick': {} }, }));
                const __VLS_26 = __VLS_25({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_25));
                ({}({ ...{ 'onClick': {} }, }));
                let __VLS_30;
                const __VLS_31 = {
                    onClick: (__VLS_ctx.handleClear)
                };
                // @ts-ignore
                [btnShow, btnShow, handleClear,];
                (__VLS_29.slots).default;
                const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
                let __VLS_27;
                let __VLS_28;
            }
            if (__VLS_ctx.btnShow?.reset) {
                // @ts-ignore
                const __VLS_32 = {}
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
                const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({ ...{ 'onClick': {} }, }));
                const __VLS_34 = __VLS_33({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_33));
                ({}({ ...{ 'onClick': {} }, }));
                let __VLS_38;
                const __VLS_39 = {
                    onClick: (__VLS_ctx.handleReset)
                };
                // @ts-ignore
                [btnShow, handleReset,];
                (__VLS_37.slots).default;
                const __VLS_37 = __VLS_pickFunctionalComponentCtx(__VLS_32, __VLS_34);
                let __VLS_35;
                let __VLS_36;
            }
            if (__VLS_ctx.btnShow?.submit) {
                // @ts-ignore
                const __VLS_40 = {}
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
                const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({ ...{ 'onClick': {} }, type: ("primary"), loading: ((props.disabled || __VLS_ctx.loading)), }));
                const __VLS_42 = __VLS_41({ ...{ 'onClick': {} }, type: ("primary"), loading: ((props.disabled || __VLS_ctx.loading)), }, ...__VLS_functionalComponentArgsRest(__VLS_41));
                ({}({ ...{ 'onClick': {} }, type: ("primary"), loading: ((props.disabled || __VLS_ctx.loading)), }));
                let __VLS_46;
                const __VLS_47 = {
                    onClick: (__VLS_ctx.handleSubmit)
                };
                // @ts-ignore
                [loading, btnShow, handleSubmit,];
                (__VLS_45.slots).default;
                const __VLS_45 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42);
                let __VLS_43;
                let __VLS_44;
            }
        }
        if (props.schema.customBtns &&
            props.schema.customBtns.length > 0) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("custombtns") }, ...{ style: (({
                        ...{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '20px',
                        },
                        ...props.schema.customBtnsStyle,
                    })) }, });
            for (const [btn] of __VLS_getVForSourceType((props.schema.customBtns))) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((btn.text)), ...{ style: (({
                            ...{
                                display: 'inline',
                                justifyContent: 'center',
                            },
                            ...btn.outterStyle,
                        })) }, });
                // @ts-ignore
                const __VLS_48 = {}
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
                const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({ ...{ 'onClick': {} }, ...(btn.props), ...{ style: (({
                            ...btn.style,
                        })) }, }));
                const __VLS_50 = __VLS_49({ ...{ 'onClick': {} }, ...(btn.props), ...{ style: (({
                            ...btn.style,
                        })) }, }, ...__VLS_functionalComponentArgsRest(__VLS_49));
                ({}({ ...{ 'onClick': {} }, ...(btn.props), ...{ style: (({
                            ...btn.style,
                        })) }, }));
                let __VLS_54;
                const __VLS_55 = {
                    onClick: (($event) => {
                        btn.onClick?.({
                            doCheck: async () => {
                                return (!!(await __VLS_ctx.validateThenGetModel()) ||
                                    false);
                            },
                            model: __VLS_ctx.formModel,
                            event: $event,
                        });
                    })
                };
                (btn.text);
                // @ts-ignore
                [formModel, validateThenGetModel,];
                (__VLS_53.slots).default;
                const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_48, __VLS_50);
                let __VLS_51;
                let __VLS_52;
            }
        }
        (__VLS_5.slots).default;
        const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
        if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
            __VLS_styleScopedClasses['title'];
            __VLS_styleScopedClasses['items'];
            __VLS_styleScopedClasses['subForms'];
            __VLS_styleScopedClasses['custombtns'];
        }
        var __VLS_slots;
        return __VLS_slots;
        const __VLS_componentsOption = {};
        const __VLS_name = "dynamic-form";
        let __VLS_defineComponent;
        const __VLS_internalComponent = __VLS_defineComponent({
            setup() {
                return {
                    componentsMap: componentsMap,
                    rawComponents: rawComponents,
                    btnShow: btnShow,
                    formRef: formRef,
                    nextModel: nextModel,
                    register: register,
                    unRegister: unRegister,
                    formModel: formModel,
                    DynamicForm: DynamicForm,
                    hasNext: hasNext,
                    showNext: showNext,
                    nextFormSchema: nextFormSchema,
                    loading: loading,
                    handleSubmit: handleSubmit,
                    handleReset: handleReset,
                    handleClear: handleClear,
                    validateThenGetModel: validateThenGetModel,
                };
            },
            props: {},
            emits: {},
            name: "dynamic-form",
        });
    }
    return (await import('vue')).defineComponent({
        setup() {
            return {
                ...__VLS_exposed,
            };
        },
        props: {},
        emits: {},
        name: "dynamic-form",
    });
})();
;
//# sourceMappingURL=DynamicForm.vue.js.map