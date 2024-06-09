/* __placeholder__ */
// import DynamicForm from "../../../dynamic-form/src/DynamicForm.vue";
import { useFullScreenDyForm } from "../../../";
// import { useFullScreenDyForm } from "../../../dynamic-form/src";
import { DynamicForm } from "../../../";
// import { useFullScreenDyForm } from "qc-components/lib/dynamic-form/hooks/useFullScreenDyForm";
import { ref } from "vue";
import { message } from "ant-design-vue";
import { schema as formSchema, test, cornSchema, testAvatarGroup, testInline, testCustomBtnsSchema, } from "./schema";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const testCustomBtns = () => {
    useFullScreenDyForm({
        schema: testCustomBtnsSchema,
        init: {
            name: "test init",
            select: "222222",
        },
        showBtns: false,
        submit: async (model, close) => {
            const data = await new Promise((resolve) => {
                setTimeout(() => {
                    console.log("model", model);
                    resolve(model);
                }, 1500);
            });
            message.success("提交成功" + JSON.stringify(data));
            close();
        },
        style: {
            backgroundColor: "rgba(255,255,255,0.8)",
            backdropFilter: "blur(10px)",
        },
        draggable: true,
        customBtns: [
            {
                text: "自定义按钮",
                onClick: async ({ doCheck, close, model, event }) => {
                    if (!await doCheck()) {
                        return;
                    }
                    console.log("自定义按钮", model);
                    message.success("点击了自定义按钮" + JSON.stringify(model));
                },
                props: {
                    type: "primary",
                },
                style: {
                    margin: "0 10px",
                },
            },
            {
                text: "自定义关闭",
                onClick: async ({ doCheck, close, model, event }) => {
                    if (!await doCheck()) {
                        return;
                    }
                    console.log("自定义按钮", model);
                    message.success("点击了关闭按钮" + JSON.stringify(model));
                    close();
                },
                props: {
                    type: "primary",
                    danger: true,
                },
                style: {
                    margin: "0 10px",
                },
            },
        ],
        showCloseBtn: false,
        onModalClick: (e) => {
            console.log("modal click", e);
            e.close();
        },
    });
};
const testInlineLayout = () => {
    useFullScreenDyForm({
        schema: testInline,
        init: {
            name: "test init",
        },
        submit: async (model, close) => {
            const data = await new Promise((resolve) => {
                setTimeout(() => {
                    console.log("model", model);
                    resolve(model);
                }, 1500);
            });
            message.success("提交成功" + JSON.stringify(data));
            close();
        },
        style: {
            backgroundColor: "rgba(255,255,255,0.8)",
            backdropFilter: "blur(10px)",
        },
        draggable: true,
    });
};
const testCorn = () => {
    schema.value = cornSchema;
};
const testPopup = () => {
    useFullScreenDyForm({
        schema: test,
        init: {
            name: "test init",
        },
        submit: async (model, close) => {
            const data = await new Promise((resolve) => {
                setTimeout(() => {
                    console.log("model", model);
                    resolve(model);
                }, 1500);
            });
            message.success("提交成功" + JSON.stringify(data));
            close();
        },
        style: {
            backgroundColor: "rgba(255,255,255,0.8)",
            backdropFilter: "blur(10px)",
        },
        draggable: true,
        defaultValues: {
            name: "test",
            class: "test",
            studentId: "202020202020",
            mentions: "@百里守约",
        },
        fadeInOut: true,
        fadeTime: 150,
    });
};
console.log("test", test);
const schema = ref(formSchema);
const model = ref({
    name: "百里守约",
});
const testAvatars = () => {
    schema.value = testAvatarGroup;
};
const changeModel = () => {
    model.value = {
        name: "百里守约",
        sex: 1,
        birthday: "2024-04-28",
        hobby: [1, 2],
        country: 2,
        desc: "11111",
        switch: true,
        slider: 30,
        rate: 8,
        tree: ["0-1"],
        autoComplete: "百里守约",
        autoCompleteColor: "蓝色",
        next: {
            next: {
                next: {
                    next: {},
                    closeReason: "111111",
                },
                closeTime: "20:16:45",
            },
            openTime: "20:16:36",
            weapon: "1220204124@zust.deu.cn",
        },
    };
};
const changeSchema = () => {
    const items = [
        {
            label: "姓名",
            field: "name",
            component: "Text",
            componentProps: {
                allowClear: true,
                showCount: true,
                maxlength: 20,
                style: {
                    width: "400px",
                },
            },
            formItemProps: {
                rules: [
                    {
                        required: true,
                        message: "请输入姓名",
                        type: "string",
                        trigger: "blur",
                    },
                ],
            },
            value: "百里守约",
            next: (model) => {
                if (model == "百里守约") {
                    return {
                        items: [
                            {
                                label: "武器",
                                field: "weapon",
                                component: "Text",
                                componentProps: {
                                    allowClear: true,
                                    showCount: true,
                                    maxlength: 80,
                                },
                                formItemProps: {
                                    rules: [
                                        {
                                            required: true,
                                            message: "武器只能是ABCDE中的一个",
                                            trigger: "blur",
                                            type: "enum",
                                            enum: ["A", "B", "C", "D", "E"],
                                        },
                                    ],
                                },
                                componentEvent: {
                                    change: (value) => {
                                        console.log("change", value);
                                    },
                                },
                            },
                        ],
                        formEvent: {
                            submit: () => {
                                console.log("submit");
                            },
                        },
                    };
                }
            },
        },
        // 测试下拉选择
        {
            label: "性别",
            field: "sex",
            component: "Select",
            componentProps: {
                options: () => {
                    return new Promise((resolve) => {
                        setTimeout(() => {
                            resolve([
                                { label: "男", value: 1 },
                                { label: "女", value: 2 },
                            ]);
                        }, 1000);
                    });
                },
            },
            formItemProps: {
                rules: [
                    {
                        required: true,
                        message: "请选择性别",
                        type: "number",
                        trigger: "change",
                    },
                ],
            },
            value: 1,
            onShow: (model) => {
                return model.name !== "百里守约";
            },
        },
    ];
    schema.value = {
        title: "dynamicForm",
        formProps: {
            labelCol: { span: 4 },
            wrapperCol: { span: 20 },
            hideRequiredMark: false,
        },
        items,
        onSubmit: async (model) => {
            await new Promise((resolve) => {
                setTimeout(() => {
                    console.log("model", model);
                    resolve(null);
                }, 1000);
            });
        },
    };
};
const handleTest = async () => {
    schema.value = test;
};
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("change") }, });
    const __VLS_0 = {}.AButton;
    ({}.AButton);
    ({}.AButton);
    __VLS_components.AButton;
    __VLS_components.aButton;
    __VLS_components.AButton;
    __VLS_components.aButton;
    // @ts-ignore
    [AButton, AButton,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onClick': {} }, size: ("large"), }));
    const __VLS_2 = __VLS_1({ ...{ 'onClick': {} }, size: ("large"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ 'onClick': {} }, size: ("large"), }));
    let __VLS_6;
    const __VLS_7 = {
        onClick: (__VLS_ctx.changeModel)
    };
    // @ts-ignore
    [changeModel,];
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    let __VLS_3;
    let __VLS_4;
    const __VLS_8 = {}.AButton;
    ({}.AButton);
    ({}.AButton);
    __VLS_components.AButton;
    __VLS_components.aButton;
    __VLS_components.AButton;
    __VLS_components.aButton;
    // @ts-ignore
    [AButton, AButton,];
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({ ...{ 'onClick': {} }, size: ("large"), }));
    const __VLS_10 = __VLS_9({ ...{ 'onClick': {} }, size: ("large"), }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    ({}({ ...{ 'onClick': {} }, size: ("large"), }));
    let __VLS_14;
    const __VLS_15 = {
        onClick: (__VLS_ctx.changeSchema)
    };
    // @ts-ignore
    [changeSchema,];
    (__VLS_13.slots).default;
    const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10);
    let __VLS_11;
    let __VLS_12;
    const __VLS_16 = {}.AButton;
    ({}.AButton);
    ({}.AButton);
    __VLS_components.AButton;
    __VLS_components.aButton;
    __VLS_components.AButton;
    __VLS_components.aButton;
    // @ts-ignore
    [AButton, AButton,];
    const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({ ...{ 'onClick': {} }, size: ("large"), }));
    const __VLS_18 = __VLS_17({ ...{ 'onClick': {} }, size: ("large"), }, ...__VLS_functionalComponentArgsRest(__VLS_17));
    ({}({ ...{ 'onClick': {} }, size: ("large"), }));
    let __VLS_22;
    const __VLS_23 = {
        onClick: (__VLS_ctx.handleTest)
    };
    // @ts-ignore
    [handleTest,];
    (__VLS_21.slots).default;
    const __VLS_21 = __VLS_pickFunctionalComponentCtx(__VLS_16, __VLS_18);
    let __VLS_19;
    let __VLS_20;
    const __VLS_24 = {}.AButton;
    ({}.AButton);
    ({}.AButton);
    __VLS_components.AButton;
    __VLS_components.aButton;
    __VLS_components.AButton;
    __VLS_components.aButton;
    // @ts-ignore
    [AButton, AButton,];
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ ...{ 'onClick': {} }, size: ("large"), }));
    const __VLS_26 = __VLS_25({ ...{ 'onClick': {} }, size: ("large"), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    ({}({ ...{ 'onClick': {} }, size: ("large"), }));
    let __VLS_30;
    const __VLS_31 = {
        onClick: (__VLS_ctx.testPopup)
    };
    // @ts-ignore
    [testPopup,];
    (__VLS_29.slots).default;
    const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
    let __VLS_27;
    let __VLS_28;
    const __VLS_32 = {}.AButton;
    ({}.AButton);
    ({}.AButton);
    __VLS_components.AButton;
    __VLS_components.aButton;
    __VLS_components.AButton;
    __VLS_components.aButton;
    // @ts-ignore
    [AButton, AButton,];
    const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({ ...{ 'onClick': {} }, size: ("large"), }));
    const __VLS_34 = __VLS_33({ ...{ 'onClick': {} }, size: ("large"), }, ...__VLS_functionalComponentArgsRest(__VLS_33));
    ({}({ ...{ 'onClick': {} }, size: ("large"), }));
    let __VLS_38;
    const __VLS_39 = {
        onClick: (__VLS_ctx.testAvatars)
    };
    // @ts-ignore
    [testAvatars,];
    (__VLS_37.slots).default;
    const __VLS_37 = __VLS_pickFunctionalComponentCtx(__VLS_32, __VLS_34);
    let __VLS_35;
    let __VLS_36;
    const __VLS_40 = {}.AButton;
    ({}.AButton);
    ({}.AButton);
    __VLS_components.AButton;
    __VLS_components.aButton;
    __VLS_components.AButton;
    __VLS_components.aButton;
    // @ts-ignore
    [AButton, AButton,];
    const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({ ...{ 'onClick': {} }, size: ("large"), }));
    const __VLS_42 = __VLS_41({ ...{ 'onClick': {} }, size: ("large"), }, ...__VLS_functionalComponentArgsRest(__VLS_41));
    ({}({ ...{ 'onClick': {} }, size: ("large"), }));
    let __VLS_46;
    const __VLS_47 = {
        onClick: (__VLS_ctx.testCorn)
    };
    // @ts-ignore
    [testCorn,];
    (__VLS_45.slots).default;
    const __VLS_45 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42);
    let __VLS_43;
    let __VLS_44;
    const __VLS_48 = {}.AButton;
    ({}.AButton);
    ({}.AButton);
    __VLS_components.AButton;
    __VLS_components.aButton;
    __VLS_components.AButton;
    __VLS_components.aButton;
    // @ts-ignore
    [AButton, AButton,];
    const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({ ...{ 'onClick': {} }, size: ("large"), }));
    const __VLS_50 = __VLS_49({ ...{ 'onClick': {} }, size: ("large"), }, ...__VLS_functionalComponentArgsRest(__VLS_49));
    ({}({ ...{ 'onClick': {} }, size: ("large"), }));
    let __VLS_54;
    const __VLS_55 = {
        onClick: (__VLS_ctx.testInlineLayout)
    };
    // @ts-ignore
    [testInlineLayout,];
    (__VLS_53.slots).default;
    const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_48, __VLS_50);
    let __VLS_51;
    let __VLS_52;
    const __VLS_56 = {}.AButton;
    ({}.AButton);
    ({}.AButton);
    __VLS_components.AButton;
    __VLS_components.aButton;
    __VLS_components.AButton;
    __VLS_components.aButton;
    // @ts-ignore
    [AButton, AButton,];
    const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({ ...{ 'onClick': {} }, size: ("large"), }));
    const __VLS_58 = __VLS_57({ ...{ 'onClick': {} }, size: ("large"), }, ...__VLS_functionalComponentArgsRest(__VLS_57));
    ({}({ ...{ 'onClick': {} }, size: ("large"), }));
    let __VLS_62;
    const __VLS_63 = {
        onClick: (__VLS_ctx.testCustomBtns)
    };
    // @ts-ignore
    [testCustomBtns,];
    (__VLS_61.slots).default;
    const __VLS_61 = __VLS_pickFunctionalComponentCtx(__VLS_56, __VLS_58);
    let __VLS_59;
    let __VLS_60;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ style: ({}) }, });
    const __VLS_64 = {}.DynamicForm;
    ({}.DynamicForm);
    __VLS_components.DynamicForm;
    // @ts-ignore
    [DynamicForm,];
    const __VLS_65 = __VLS_asFunctionalComponent(__VLS_64, new __VLS_64({ schema: ((__VLS_ctx.schema)), modelValue: ((__VLS_ctx.model)), ...{ class: ("custom") }, showBtns: (({
            reset: 1,
            clearAll: 1,
            submit: 1,
        })), }));
    const __VLS_66 = __VLS_65({ schema: ((__VLS_ctx.schema)), modelValue: ((__VLS_ctx.model)), ...{ class: ("custom") }, showBtns: (({
            reset: 1,
            clearAll: 1,
            submit: 1,
        })), }, ...__VLS_functionalComponentArgsRest(__VLS_65));
    ({}({ schema: ((__VLS_ctx.schema)), modelValue: ((__VLS_ctx.model)), ...{ class: ("custom") }, showBtns: (({
            reset: 1,
            clearAll: 1,
            submit: 1,
        })), }));
    // @ts-ignore
    [schema, model,];
    const __VLS_69 = __VLS_pickFunctionalComponentCtx(__VLS_64, __VLS_66);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['change'];
        __VLS_styleScopedClasses['custom'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    const __VLS_internalComponent = (await import('vue')).defineComponent({
        setup() {
            return {
                DynamicForm: DynamicForm,
                testCustomBtns: testCustomBtns,
                testInlineLayout: testInlineLayout,
                testCorn: testCorn,
                testPopup: testPopup,
                schema: schema,
                model: model,
                testAvatars: testAvatars,
                changeModel: changeModel,
                changeSchema: changeSchema,
                handleTest: handleTest,
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
//# sourceMappingURL=Form.vue.js.map