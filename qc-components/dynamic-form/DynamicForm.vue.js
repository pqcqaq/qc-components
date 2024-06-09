/* __placeholder__ */
import { ref, onMounted, defineAsyncComponent, computed, onBeforeMount, watch, onUnmounted, getCurrentInstance, } from "vue";
import { componentsMap } from "./cpnsMap";
import { message } from "ant-design-vue";
export default await (async () => {
    const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
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
    let __VLS_modelEmitsType;
    const __VLS_componentsOption = {};
    const __VLS_name = "dynamic-form";
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
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ class: ("title"), style: ({}), });
        (props.schema.title);
        const __VLS_0 = {}.AForm;
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ref: ("formRef"), model: ((__VLS_ctx.formModel)), ...({ ...__VLS_ctx.$attrs, ...props.schema.formProps }), disabled: ((__VLS_ctx.loading || props.disabled)), }));
        ({}.AForm);
        ({}.AForm);
        __VLS_components.AForm;
        __VLS_components.aForm;
        __VLS_components.AForm;
        __VLS_components.aForm;
        // @ts-ignore
        [AForm, AForm,];
        const __VLS_2 = __VLS_1({ ref: ("formRef"), model: ((__VLS_ctx.formModel)), ...({ ...__VLS_ctx.$attrs, ...props.schema.formProps }), disabled: ((__VLS_ctx.loading || props.disabled)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ref: ("formRef"), model: ((__VLS_ctx.formModel)), ...({ ...__VLS_ctx.$attrs, ...props.schema.formProps }), disabled: ((__VLS_ctx.loading || props.disabled)), }));
        (props.schema.className || 'dynamic-form');
        // @ts-ignore
        (__VLS_ctx.formRef);
        __VLS_styleScopedClasses = (props.schema.className || 'dynamic-form');
        $event => { ({ ...props.schema.formEvent, onNull: () => { } }); };
        for (const [item] of __VLS_getVForSourceType((props.schema.items))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ class: ("items"), key: ((item.field)), });
            __VLS_directiveFunction(__VLS_ctx.vShow)((item.onShow ? item.onShow(__VLS_ctx.formModel) : true));
            const __VLS_5 = {}.AFormItem;
            const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ name: ((item.field)), label: ((item.label)), ...(item.formItemProps), }));
            ({}.AFormItem);
            ({}.AFormItem);
            __VLS_components.AFormItem;
            __VLS_components.aFormItem;
            __VLS_components.AFormItem;
            __VLS_components.aFormItem;
            // @ts-ignore
            [AFormItem, AFormItem,];
            const __VLS_7 = __VLS_6({ name: ((item.field)), label: ((item.label)), ...(item.formItemProps), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({}({ name: ((item.field)), label: ((item.label)), ...(item.formItemProps), }));
            (item.formItemProps?.className || 'dynamic-form-item');
            __VLS_styleScopedClasses = (item.formItemProps?.className || 'dynamic-form-item');
            const __VLS_10 = (typeof item.component === 'string'
                ? __VLS_ctx.componentsMap[item.component]?.component
                : item.component);
            const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({ ...({
                    ...item.componentProps,
                    ...(typeof item.component === 'string'
                        ? __VLS_ctx.componentsMap[item.component]?.defaultProps
                        : item.componentProps?.customProps),
                }), value: ((__VLS_ctx.formModel[item.field])), disabled: ((props.disabled || __VLS_ctx.loading)), }));
            const __VLS_12 = __VLS_11({ ...({
                    ...item.componentProps,
                    ...(typeof item.component === 'string'
                        ? __VLS_ctx.componentsMap[item.component]?.defaultProps
                        : item.componentProps?.customProps),
                }), value: ((__VLS_ctx.formModel[item.field])), disabled: ((props.disabled || __VLS_ctx.loading)), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
            ({}({ ...({
                    ...item.componentProps,
                    ...(typeof item.component === 'string'
                        ? __VLS_ctx.componentsMap[item.component]?.defaultProps
                        : item.componentProps?.customProps),
                }), value: ((__VLS_ctx.formModel[item.field])), disabled: ((props.disabled || __VLS_ctx.loading)), }));
            (item.componentProps?.className ||
                'dynamic-form-component');
            __VLS_styleScopedClasses = (item.componentProps?.className ||
                'dynamic-form-component');
            $event => { ({ ...item.componentEvent, onNull: () => { } }); };
            // @ts-ignore
            [formModel, formModel, formModel, $attrs, loading, loading, formRef, vShow, componentsMap, componentsMap,];
            const __VLS_14 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
            (__VLS_9.slots).default;
            const __VLS_9 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
            if (__VLS_ctx.hasNext) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ class: ("subForms"), style: (item.nextFormStyle || {}), });
                if (__VLS_ctx.showNext(__VLS_ctx.formModel[item.field], item)) {
                    const __VLS_15 = {}.DynamicForm;
                    const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({ schema: ((__VLS_ctx.nextFormSchema(__VLS_ctx.formModel[item.field], item))), modelValue: ((__VLS_ctx.nextModel)), registeToParent: ((__VLS_ctx.register)), unRegisteFromParent: ((__VLS_ctx.unRegister)), disabled: ((props.disabled || __VLS_ctx.loading)), showBtns: (({
                            clearAll: 0,
                            reset: 0,
                            submit: 0,
                        })), }));
                    ({}.DynamicForm);
                    __VLS_components.DynamicForm;
                    // @ts-ignore
                    [DynamicForm,];
                    const __VLS_17 = __VLS_16({ schema: ((__VLS_ctx.nextFormSchema(__VLS_ctx.formModel[item.field], item))), modelValue: ((__VLS_ctx.nextModel)), registeToParent: ((__VLS_ctx.register)), unRegisteFromParent: ((__VLS_ctx.unRegister)), disabled: ((props.disabled || __VLS_ctx.loading)), showBtns: (({
                            clearAll: 0,
                            reset: 0,
                            submit: 0,
                        })), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
                    ({}({ schema: ((__VLS_ctx.nextFormSchema(__VLS_ctx.formModel[item.field], item))), modelValue: ((__VLS_ctx.nextModel)), registeToParent: ((__VLS_ctx.register)), unRegisteFromParent: ((__VLS_ctx.unRegister)), disabled: ((props.disabled || __VLS_ctx.loading)), showBtns: (({
                            clearAll: 0,
                            reset: 0,
                            submit: 0,
                        })), }));
                    // @ts-ignore
                    [formModel, formModel, loading, hasNext, showNext, nextFormSchema, nextModel, register, unRegister,];
                    const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
                }
            }
        }
        if (!!__VLS_ctx.btnShow) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ style: ({}), });
            if (__VLS_ctx.btnShow?.clearAll) {
                const __VLS_20 = {}.AButton;
                const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{ 'onClick': {}, }, }));
                ({}.AButton);
                ({}.AButton);
                __VLS_components.AButton;
                __VLS_components.aButton;
                __VLS_components.AButton;
                __VLS_components.aButton;
                // @ts-ignore
                [AButton, AButton,];
                const __VLS_22 = __VLS_21({ ...{ 'onClick': {}, }, }, ...__VLS_functionalComponentArgsRest(__VLS_21));
                ({}({ ...{ 'onClick': {}, }, }));
                let __VLS_25 = { 'click': __VLS_pickEvent(__VLS_23['click'], {}.onClick) };
                __VLS_25 = { click: (__VLS_ctx.handleClear) };
                // @ts-ignore
                [btnShow, btnShow, handleClear,];
                (__VLS_24.slots).default;
                const __VLS_24 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
                let __VLS_23;
            }
            if (__VLS_ctx.btnShow?.reset) {
                const __VLS_26 = {}.AButton;
                const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({ ...{ 'onClick': {}, }, }));
                ({}.AButton);
                ({}.AButton);
                __VLS_components.AButton;
                __VLS_components.aButton;
                __VLS_components.AButton;
                __VLS_components.aButton;
                // @ts-ignore
                [AButton, AButton,];
                const __VLS_28 = __VLS_27({ ...{ 'onClick': {}, }, }, ...__VLS_functionalComponentArgsRest(__VLS_27));
                ({}({ ...{ 'onClick': {}, }, }));
                let __VLS_31 = { 'click': __VLS_pickEvent(__VLS_29['click'], {}.onClick) };
                __VLS_31 = { click: (__VLS_ctx.handleReset) };
                // @ts-ignore
                [btnShow, handleReset,];
                (__VLS_30.slots).default;
                const __VLS_30 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28);
                let __VLS_29;
            }
            if (__VLS_ctx.btnShow?.submit) {
                const __VLS_32 = {}.AButton;
                const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({ ...{ 'onClick': {}, }, type: ("primary"), loading: ((props.disabled || __VLS_ctx.loading)), }));
                ({}.AButton);
                ({}.AButton);
                __VLS_components.AButton;
                __VLS_components.aButton;
                __VLS_components.AButton;
                __VLS_components.aButton;
                // @ts-ignore
                [AButton, AButton,];
                const __VLS_34 = __VLS_33({ ...{ 'onClick': {}, }, type: ("primary"), loading: ((props.disabled || __VLS_ctx.loading)), }, ...__VLS_functionalComponentArgsRest(__VLS_33));
                ({}({ ...{ 'onClick': {}, }, type: ("primary"), loading: ((props.disabled || __VLS_ctx.loading)), }));
                let __VLS_37 = { 'click': __VLS_pickEvent(__VLS_35['click'], {}.onClick) };
                __VLS_37 = { click: (__VLS_ctx.handleSubmit) };
                // @ts-ignore
                [loading, btnShow, handleSubmit,];
                (__VLS_36.slots).default;
                const __VLS_36 = __VLS_pickFunctionalComponentCtx(__VLS_32, __VLS_34);
                let __VLS_35;
            }
        }
        if (props.schema.customBtns &&
            props.schema.customBtns.length > 0) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ class: ("custombtns"), style: (({
                    ...{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '20px',
                        gap: '20px',
                    },
                    ...props.schema.customBtnsStyle,
                })), });
            for (const [btn] of __VLS_getVForSourceType((props.schema.customBtns))) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((btn.text)), style: (({
                        ...{
                            display: 'inline',
                            justifyContent: 'center',
                        },
                        ...btn.outterStyle,
                    })), });
                const __VLS_38 = {}.AButton;
                const __VLS_39 = __VLS_asFunctionalComponent(__VLS_38, new __VLS_38({ ...{ 'onClick': {}, }, ...(btn.props), }));
                ({}.AButton);
                ({}.AButton);
                __VLS_components.AButton;
                __VLS_components.aButton;
                __VLS_components.AButton;
                __VLS_components.aButton;
                // @ts-ignore
                [AButton, AButton,];
                const __VLS_40 = __VLS_39({ ...{ 'onClick': {}, }, ...(btn.props), }, ...__VLS_functionalComponentArgsRest(__VLS_39));
                ({}({ ...{ 'onClick': {}, }, ...(btn.props), }));
                ({
                    ...btn.style,
                });
                let __VLS_43 = { 'click': __VLS_pickEvent(__VLS_41['click'], {}.onClick) };
                __VLS_43 = { click: (() => {
                        btn.onClick?.(__VLS_ctx.formModel);
                    }) };
                (btn.text);
                // @ts-ignore
                [formModel,];
                (__VLS_42.slots).default;
                const __VLS_42 = __VLS_pickFunctionalComponentCtx(__VLS_38, __VLS_40);
                let __VLS_41;
            }
        }
        (__VLS_4.slots).default;
        const __VLS_4 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
        if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
            __VLS_styleScopedClasses["title"];
            __VLS_styleScopedClasses["items"];
            __VLS_styleScopedClasses["subForms"];
            __VLS_styleScopedClasses["custombtns"];
        }
        var __VLS_slots;
        return __VLS_slots;
    }
    const __VLS_internalComponent = (await import('vue')).defineComponent({
        setup() {
            return {
                componentsMap: componentsMap,
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
            };
        },
        props: {},
        emits: {},
        name: "dynamic-form",
    });
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
//# sourceMappingURL=DynamicForm.vue.js.map