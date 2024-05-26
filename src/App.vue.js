/* __placeholder__ */
// import DynamicForm from "../../../dynamic-form/src/DynamicForm.vue";
import { useFullScreenDyForm } from "../";
// import { useFullScreenDyForm } from "../../../dynamic-form/src";
import { DynamicForm } from "../";
// import { useFullScreenDyForm } from "qc-components/lib/dynamic-form/hooks/useFullScreenDyForm";
import { ref } from "vue";
import { message } from "ant-design-vue";
import { schema as formSchema, test, cornSchema, testAvatarGroup, testInline, } from "./schema";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const testCustomBtns = () => {
    useFullScreenDyForm({
        schema: {
            title: "test",
            items: [
                {
                    label: "姓名",
                    field: "name",
                    component: "Text",
                },
            ],
        },
        init: {
            name: "test init",
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
                onClick: (model) => {
                    console.log("自定义按钮", model);
                },
                props: {
                    type: "primary",
                },
                style: {
                    margin: "0 10px",
                },
            },
        ],
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
let __VLS_functionalComponentProps;
let __VLS_modelEmitsType;
const __VLS_componentsOption = {};
let __VLS_name;
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ class: ("change"), });
    const __VLS_0 = {}.AButton;
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onClick': {}, }, size: ("large"), }));
    ({}.AButton);
    ({}.AButton);
    __VLS_components.AButton;
    __VLS_components.aButton;
    __VLS_components.AButton;
    __VLS_components.aButton;
    // @ts-ignore
    [AButton, AButton,];
    const __VLS_2 = __VLS_1({ ...{ 'onClick': {}, }, size: ("large"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ 'onClick': {}, }, size: ("large"), }));
    let __VLS_5 = { 'click': __VLS_pickEvent(__VLS_3['click'], {}.onClick) };
    __VLS_5 = { click: (__VLS_ctx.changeModel) };
    // @ts-ignore
    [changeModel,];
    (__VLS_4.slots).default;
    const __VLS_4 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    let __VLS_3;
    const __VLS_6 = {}.AButton;
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ 'onClick': {}, }, size: ("large"), }));
    ({}.AButton);
    ({}.AButton);
    __VLS_components.AButton;
    __VLS_components.aButton;
    __VLS_components.AButton;
    __VLS_components.aButton;
    // @ts-ignore
    [AButton, AButton,];
    const __VLS_8 = __VLS_7({ ...{ 'onClick': {}, }, size: ("large"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ ...{ 'onClick': {}, }, size: ("large"), }));
    let __VLS_11 = { 'click': __VLS_pickEvent(__VLS_9['click'], {}.onClick) };
    __VLS_11 = { click: (__VLS_ctx.changeSchema) };
    // @ts-ignore
    [changeSchema,];
    (__VLS_10.slots).default;
    const __VLS_10 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    let __VLS_9;
    const __VLS_12 = {}.AButton;
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{ 'onClick': {}, }, size: ("large"), }));
    ({}.AButton);
    ({}.AButton);
    __VLS_components.AButton;
    __VLS_components.aButton;
    __VLS_components.AButton;
    __VLS_components.aButton;
    // @ts-ignore
    [AButton, AButton,];
    const __VLS_14 = __VLS_13({ ...{ 'onClick': {}, }, size: ("large"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    ({}({ ...{ 'onClick': {}, }, size: ("large"), }));
    let __VLS_17 = { 'click': __VLS_pickEvent(__VLS_15['click'], {}.onClick) };
    __VLS_17 = { click: (__VLS_ctx.handleTest) };
    // @ts-ignore
    [handleTest,];
    (__VLS_16.slots).default;
    const __VLS_16 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    let __VLS_15;
    const __VLS_18 = {}.AButton;
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ ...{ 'onClick': {}, }, size: ("large"), }));
    ({}.AButton);
    ({}.AButton);
    __VLS_components.AButton;
    __VLS_components.aButton;
    __VLS_components.AButton;
    __VLS_components.aButton;
    // @ts-ignore
    [AButton, AButton,];
    const __VLS_20 = __VLS_19({ ...{ 'onClick': {}, }, size: ("large"), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    ({}({ ...{ 'onClick': {}, }, size: ("large"), }));
    let __VLS_23 = { 'click': __VLS_pickEvent(__VLS_21['click'], {}.onClick) };
    __VLS_23 = { click: (__VLS_ctx.testPopup) };
    // @ts-ignore
    [testPopup,];
    (__VLS_22.slots).default;
    const __VLS_22 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
    let __VLS_21;
    const __VLS_24 = {}.AButton;
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ ...{ 'onClick': {}, }, size: ("large"), }));
    ({}.AButton);
    ({}.AButton);
    __VLS_components.AButton;
    __VLS_components.aButton;
    __VLS_components.AButton;
    __VLS_components.aButton;
    // @ts-ignore
    [AButton, AButton,];
    const __VLS_26 = __VLS_25({ ...{ 'onClick': {}, }, size: ("large"), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    ({}({ ...{ 'onClick': {}, }, size: ("large"), }));
    let __VLS_29 = { 'click': __VLS_pickEvent(__VLS_27['click'], {}.onClick) };
    __VLS_29 = { click: (__VLS_ctx.testAvatars) };
    // @ts-ignore
    [testAvatars,];
    (__VLS_28.slots).default;
    const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
    let __VLS_27;
    const __VLS_30 = {}.AButton;
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{ 'onClick': {}, }, size: ("large"), }));
    ({}.AButton);
    ({}.AButton);
    __VLS_components.AButton;
    __VLS_components.aButton;
    __VLS_components.AButton;
    __VLS_components.aButton;
    // @ts-ignore
    [AButton, AButton,];
    const __VLS_32 = __VLS_31({ ...{ 'onClick': {}, }, size: ("large"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    ({}({ ...{ 'onClick': {}, }, size: ("large"), }));
    let __VLS_35 = { 'click': __VLS_pickEvent(__VLS_33['click'], {}.onClick) };
    __VLS_35 = { click: (__VLS_ctx.testCorn) };
    // @ts-ignore
    [testCorn,];
    (__VLS_34.slots).default;
    const __VLS_34 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
    let __VLS_33;
    const __VLS_36 = {}.AButton;
    const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ ...{ 'onClick': {}, }, size: ("large"), }));
    ({}.AButton);
    ({}.AButton);
    __VLS_components.AButton;
    __VLS_components.aButton;
    __VLS_components.AButton;
    __VLS_components.aButton;
    // @ts-ignore
    [AButton, AButton,];
    const __VLS_38 = __VLS_37({ ...{ 'onClick': {}, }, size: ("large"), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
    ({}({ ...{ 'onClick': {}, }, size: ("large"), }));
    let __VLS_41 = { 'click': __VLS_pickEvent(__VLS_39['click'], {}.onClick) };
    __VLS_41 = { click: (__VLS_ctx.testInlineLayout) };
    // @ts-ignore
    [testInlineLayout,];
    (__VLS_40.slots).default;
    const __VLS_40 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38);
    let __VLS_39;
    const __VLS_42 = {}.AButton;
    const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({ ...{ 'onClick': {}, }, size: ("large"), }));
    ({}.AButton);
    ({}.AButton);
    __VLS_components.AButton;
    __VLS_components.aButton;
    __VLS_components.AButton;
    __VLS_components.aButton;
    // @ts-ignore
    [AButton, AButton,];
    const __VLS_44 = __VLS_43({ ...{ 'onClick': {}, }, size: ("large"), }, ...__VLS_functionalComponentArgsRest(__VLS_43));
    ({}({ ...{ 'onClick': {}, }, size: ("large"), }));
    let __VLS_47 = { 'click': __VLS_pickEvent(__VLS_45['click'], {}.onClick) };
    __VLS_47 = { click: (__VLS_ctx.testCustomBtns) };
    // @ts-ignore
    [testCustomBtns,];
    (__VLS_46.slots).default;
    const __VLS_46 = __VLS_pickFunctionalComponentCtx(__VLS_42, __VLS_44);
    let __VLS_45;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ style: ({}), });
    const __VLS_48 = {}.DynamicForm;
    const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({ schema: ((__VLS_ctx.schema)), modelValue: ((__VLS_ctx.model)), class: ("custom"), showBtns: (({
            reset: 1,
            clearAll: 1,
            submit: 1,
        })), }));
    ({}.DynamicForm);
    __VLS_components.DynamicForm;
    // @ts-ignore
    [DynamicForm,];
    const __VLS_50 = __VLS_49({ schema: ((__VLS_ctx.schema)), modelValue: ((__VLS_ctx.model)), class: ("custom"), showBtns: (({
            reset: 1,
            clearAll: 1,
            submit: 1,
        })), }, ...__VLS_functionalComponentArgsRest(__VLS_49));
    ({}({ schema: ((__VLS_ctx.schema)), modelValue: ((__VLS_ctx.model)), class: ("custom"), showBtns: (({
            reset: 1,
            clearAll: 1,
            submit: 1,
        })), }));
    // @ts-ignore
    [schema, model,];
    const __VLS_52 = __VLS_pickFunctionalComponentCtx(__VLS_48, __VLS_50);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["change"];
        __VLS_styleScopedClasses["custom"];
    }
    var __VLS_slots;
    return __VLS_slots;
}
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
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;

//# sourceMappingURL=App.vue.js.map