/* __placeholder__ */
import { defineProps, ref, watch, computed } from "vue";
import Language from "./language";
import ScheduleOutlined from "@ant-design/icons-vue/ScheduleOutlined";
const { defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const props = defineProps();
const i18n = ref(props.i18n || "cn");
const output = ref({
    second: "",
    minute: "",
    hour: "",
    day: "",
    month: "",
    week: "",
    year: "",
});
const exps = ref([
    { type: "second", expression: "" },
    { type: "minute", expression: "" },
    { type: "hour", expression: "" },
    { type: "day", expression: "" },
    { type: "month", expression: "" },
    { type: "week", expression: "" },
    { type: "year", expression: "" },
]);
const second = ref({
    cronEvery: "3",
    incrementStart: 3,
    incrementIncrement: 5,
    rangeStart: 1,
    rangeEnd: 0,
    specificSpecific: [0],
});
const minute = ref({
    cronEvery: "3",
    incrementStart: 3,
    incrementIncrement: 5,
    rangeStart: 1,
    rangeEnd: 0,
    specificSpecific: [0],
});
const hour = ref({
    cronEvery: "1",
    incrementStart: 3,
    incrementIncrement: 5,
    rangeStart: "1",
    rangeEnd: 0,
    specificSpecific: [],
});
const day = ref({
    cronEvery: "1",
    incrementStart: 0,
    incrementIncrement: 0,
    rangeStart: 0,
    rangeEnd: 0,
    specificSpecific: [],
    cronLastSpecificDomDay: 0,
    cronDaysBeforeEomMinus: 0,
    cronDaysNearestweekday: 0,
});
const week = ref({
    cronEvery: "1",
    incrementStart: 1,
    incrementIncrement: 1,
    specificSpecific: [],
    cronNthDayDay: 1,
    cronNthDayNth: 1,
    cronLastSpecificDomweek: 1,
});
const month = ref({
    cronEvery: "1",
    incrementStart: 3,
    incrementIncrement: 5,
    rangeStart: 1,
    rangeEnd: 12,
    specificSpecific: [],
});
const year = ref({
    cronEvery: "1",
    incrementStart: 2018,
    incrementIncrement: 1,
    rangeStart: 2018,
    rangeEnd: 2018,
    specificSpecific: [],
});
const valueMap = {
    second,
    minute,
    hour,
    day,
    month,
    week,
    year,
};
const text = ref(Language[props.i18n || "cn"]);
const resolveExpression = () => {
    if (!props.expression || !props.expression.length)
        return;
    let expList = props.expression.split(" ");
    if (expList.length < 7) {
        throw new Error("表达式格式不正确");
    }
    for (let i = 0; i < expList.length; i++) {
        exps.value[i].expression = expList[i];
    }
    exps.value.forEach((exp) => {
        output.value[exp.type] = exp.expression;
        switch (exp.type) {
            case "year":
            case "month":
            case "hour":
            case "minute":
            case "second":
                commonParser(valueMap[exp.type], exp.expression);
                return;
            case "week":
                resolveweek(exp.expression);
                return;
            case "day":
                resolveDay(exp.expression);
                return;
        }
    });
};
const commonParser = (expressionType, str) => {
    if (str == "*") {
        resolveStar(expressionType);
    }
    else if (str.indexOf("-") >= 0) {
        resolveLine(expressionType, str);
    }
    else if (str.indexOf("/") >= 0) {
        resolveSlash(expressionType, str);
    }
    else {
        resolveComma(expressionType, str);
    }
};
const resolveweek = (str) => {
    if (str.indexOf("/") >= 0) {
        day.value.cronEvery = "2";
        resolveSlash(week, str);
    }
    else if (str.indexOf(",") >= 0) {
        day.value.cronEvery = "4";
        resolveComma(week, str);
    }
    else if (/\dL/.test(str)) {
        day.value.cronEvery = "8";
        week.value.cronLastSpecificDomweek = Number((str.match(/(\d)L/) || [0, 0])[1]);
    }
    else if (str.indexOf("#") >= 0) {
        day.value.cronEvery = "11";
        let range = str.split("#");
        week.value.cronNthDayDay = +range[0];
        week.value.cronNthDayNth = +range[1];
    }
};
const resolveDay = (str) => {
    if (str == "*") {
        resolveStar(day);
    }
    else if (str.indexOf("/") >= 0) {
        resolveSlash(day, str, "3");
    }
    else if (str == "L") {
        day.value.cronEvery = "6";
    }
    else if (str == "LW") {
        day.value.cronEvery = "7";
    }
    else if (/L-\d+/.test(str)) {
        day.value.cronEvery = "9";
        day.value.cronDaysBeforeEomMinus = Number((str.match(/L-(\d+)/) || [0, 0])[1]);
    }
    else if (/\d+W/.test(str)) {
        day.value.cronEvery = "10";
        day.value.cronDaysNearestweekday = Number((str.match(/(\d+)W/) || [0, 0])[1]);
    }
    else {
        resolveComma(day, str, "5");
    }
};
const resolveStar = (expressionObj, type = "1") => {
    expressionObj.value.cronEvery = type;
};
const resolveSlash = (expressionObj, expression, type = "2") => {
    expressionObj.value.cronEvery = type;
    let range = expression.split("/");
    expressionObj.value.incrementStart = Number(range[0]);
    expressionObj.value.incrementIncrement = Number(range[1]);
};
const resolveLine = (expressionObj, expression, type = "4") => {
    expressionObj.value.cronEvery = type;
    let range = expression.split("-");
    expressionObj.value.rangeStart = Number(range[0]);
    expressionObj.value.rangeEnd = Number(range[1]);
};
const resolveComma = (expressionObj, expression, type = "3") => {
    expressionObj.value.cronEvery = type;
    expressionObj.value.specificSpecific = expression.split(",").map((item) => {
        return Number(item);
    });
};
watch(() => props.expression, () => {
    resolveExpression();
}, { immediate: true, deep: true });
const emit = defineEmits(["change", "close"]);
const change = () => {
    emit("change", output.value);
    close();
};
const close = () => {
    emit("close");
};
const rest = (data) => {
    for (let i in data) {
        if (data[i] instanceof Object) {
            rest(data[i]);
        }
        else {
            switch (typeof data[i]) {
                case "object":
                    data[i] = [];
                    break;
                case "string":
                    data[i] = "";
                    break;
            }
        }
    }
};
const cron = computed(() => {
    return `${second.value.cronEvery} ${second.value.incrementStart}-${second.value.incrementIncrement} ${second.value.rangeStart}-${second.value.rangeEnd} ${second.value.specificSpecific.join(",")} * * *`;
});
const __VLS_fnComponent = (await import('vue')).defineComponent({
    emits: {},
});
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ id: ("changeContab"), });
    const __VLS_0 = {}.AButton;
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onClick': {}, }, class: ("language"), type: ("text"), }));
    ({}.AButton);
    ({}.AButton);
    __VLS_components.AButton;
    __VLS_components.aButton;
    __VLS_components.AButton;
    __VLS_components.aButton;
    // @ts-ignore
    [AButton, AButton,];
    const __VLS_2 = __VLS_1({ ...{ 'onClick': {}, }, class: ("language"), type: ("text"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ 'onClick': {}, }, class: ("language"), type: ("text"), }));
    let __VLS_5 = { 'click': __VLS_pickEvent(__VLS_3['click'], {}.onClick) };
    __VLS_5 = { click: $event => {
            __VLS_ctx.i18n = __VLS_ctx.i18n === 'en' ? 'cn' : 'en';
            // @ts-ignore
            [i18n, i18n,];
        } };
    (__VLS_ctx.i18n == "cn" ? "中文" : "English");
    // @ts-ignore
    [i18n,];
    (__VLS_4.slots).default;
    const __VLS_4 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    let __VLS_3;
    const __VLS_6 = {}.ATabs;
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ defaultActiveKey: ("second"), }));
    ({}.ATabs);
    ({}.ATabs);
    __VLS_components.ATabs;
    __VLS_components.aTabs;
    __VLS_components.ATabs;
    __VLS_components.aTabs;
    // @ts-ignore
    [ATabs, ATabs,];
    const __VLS_8 = __VLS_7({ defaultActiveKey: ("second"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ defaultActiveKey: ("second"), }));
    const __VLS_11 = {}.ATabPane;
    const __VLS_12 = __VLS_asFunctionalComponent(__VLS_11, new __VLS_11({ key: ("second"), }));
    ({}.ATabPane);
    ({}.ATabPane);
    __VLS_components.ATabPane;
    __VLS_components.aTabPane;
    __VLS_components.ATabPane;
    __VLS_components.aTabPane;
    // @ts-ignore
    [ATabPane, ATabPane,];
    const __VLS_13 = __VLS_12({ key: ("second"), }, ...__VLS_functionalComponentArgsRest(__VLS_12));
    ({}({ key: ("second"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        (__VLS_15.slots).tab;
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ class: (true), });
        const __VLS_16 = {}.ScheduleOutlined;
        const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({}));
        ({}.ScheduleOutlined);
        __VLS_components.ScheduleOutlined;
        // @ts-ignore
        [ScheduleOutlined,];
        const __VLS_18 = __VLS_17({}, ...__VLS_functionalComponentArgsRest(__VLS_17));
        ({}({}));
        const __VLS_20 = __VLS_pickFunctionalComponentCtx(__VLS_16, __VLS_18);
        (__VLS_ctx.text.Seconds.name);
        // @ts-ignore
        [text,];
    }
    const __VLS_21 = {}.ARadioGroup;
    const __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({ name: ("second"), value: ((__VLS_ctx.second.cronEvery)), }));
    ({}.ARadioGroup);
    ({}.ARadioGroup);
    __VLS_components.ARadioGroup;
    __VLS_components.aRadioGroup;
    __VLS_components.ARadioGroup;
    __VLS_components.aRadioGroup;
    // @ts-ignore
    [ARadioGroup, ARadioGroup,];
    const __VLS_23 = __VLS_22({ name: ("second"), value: ((__VLS_ctx.second.cronEvery)), }, ...__VLS_functionalComponentArgsRest(__VLS_22));
    ({}({ name: ("second"), value: ((__VLS_ctx.second.cronEvery)), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ class: ("tabBody"), });
    const __VLS_26 = {}.ARow;
    const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({}));
    ({}.ARow);
    ({}.ARow);
    __VLS_components.ARow;
    __VLS_components.aRow;
    __VLS_components.ARow;
    __VLS_components.aRow;
    // @ts-ignore
    [ARow, ARow,];
    const __VLS_28 = __VLS_27({}, ...__VLS_functionalComponentArgsRest(__VLS_27));
    ({}({}));
    const __VLS_31 = {}.ARadio;
    const __VLS_32 = __VLS_asFunctionalComponent(__VLS_31, new __VLS_31({ value: ("1"), }));
    ({}.ARadio);
    ({}.ARadio);
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    // @ts-ignore
    [ARadio, ARadio,];
    const __VLS_33 = __VLS_32({ value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_32));
    ({}({ value: ("1"), }));
    (__VLS_ctx.text.Seconds.every);
    // @ts-ignore
    [text, second,];
    (__VLS_35.slots).default;
    const __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_31, __VLS_33);
    (__VLS_30.slots).default;
    const __VLS_30 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28);
    const __VLS_36 = {}.ARow;
    const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({}));
    ({}.ARow);
    ({}.ARow);
    __VLS_components.ARow;
    __VLS_components.aRow;
    __VLS_components.ARow;
    __VLS_components.aRow;
    // @ts-ignore
    [ARow, ARow,];
    const __VLS_38 = __VLS_37({}, ...__VLS_functionalComponentArgsRest(__VLS_37));
    ({}({}));
    const __VLS_41 = {}.ARadio;
    const __VLS_42 = __VLS_asFunctionalComponent(__VLS_41, new __VLS_41({ value: ("2"), }));
    ({}.ARadio);
    ({}.ARadio);
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    // @ts-ignore
    [ARadio, ARadio,];
    const __VLS_43 = __VLS_42({ value: ("2"), }, ...__VLS_functionalComponentArgsRest(__VLS_42));
    ({}({ value: ("2"), }));
    (__VLS_ctx.text.Seconds.interval[0]);
    const __VLS_46 = {}.AInputNumber;
    const __VLS_47 = __VLS_asFunctionalComponent(__VLS_46, new __VLS_46({ value: ((__VLS_ctx.second.incrementIncrement)), min: ((1)), max: ((60)), }));
    ({}.AInputNumber);
    ({}.AInputNumber);
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    // @ts-ignore
    [AInputNumber, AInputNumber,];
    const __VLS_48 = __VLS_47({ value: ((__VLS_ctx.second.incrementIncrement)), min: ((1)), max: ((60)), }, ...__VLS_functionalComponentArgsRest(__VLS_47));
    ({}({ value: ((__VLS_ctx.second.incrementIncrement)), min: ((1)), max: ((60)), }));
    // @ts-ignore
    [text, second,];
    const __VLS_50 = __VLS_pickFunctionalComponentCtx(__VLS_46, __VLS_48);
    (__VLS_ctx.text.Seconds.interval[1] || "");
    const __VLS_51 = {}.AInputNumber;
    const __VLS_52 = __VLS_asFunctionalComponent(__VLS_51, new __VLS_51({ value: ((__VLS_ctx.second.incrementStart)), min: ((0)), max: ((59)), }));
    ({}.AInputNumber);
    ({}.AInputNumber);
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    // @ts-ignore
    [AInputNumber, AInputNumber,];
    const __VLS_53 = __VLS_52({ value: ((__VLS_ctx.second.incrementStart)), min: ((0)), max: ((59)), }, ...__VLS_functionalComponentArgsRest(__VLS_52));
    ({}({ value: ((__VLS_ctx.second.incrementStart)), min: ((0)), max: ((59)), }));
    // @ts-ignore
    [text, second,];
    const __VLS_55 = __VLS_pickFunctionalComponentCtx(__VLS_51, __VLS_53);
    (__VLS_ctx.text.Seconds.interval[2] || "");
    // @ts-ignore
    [text,];
    (__VLS_45.slots).default;
    const __VLS_45 = __VLS_pickFunctionalComponentCtx(__VLS_41, __VLS_43);
    (__VLS_40.slots).default;
    const __VLS_40 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38);
    const __VLS_56 = {}.ARow;
    const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({}));
    ({}.ARow);
    ({}.ARow);
    __VLS_components.ARow;
    __VLS_components.aRow;
    __VLS_components.ARow;
    __VLS_components.aRow;
    // @ts-ignore
    [ARow, ARow,];
    const __VLS_58 = __VLS_57({}, ...__VLS_functionalComponentArgsRest(__VLS_57));
    ({}({}));
    const __VLS_61 = {}.ARadio;
    const __VLS_62 = __VLS_asFunctionalComponent(__VLS_61, new __VLS_61({ class: ("long"), value: ("3"), }));
    ({}.ARadio);
    ({}.ARadio);
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    // @ts-ignore
    [ARadio, ARadio,];
    const __VLS_63 = __VLS_62({ class: ("long"), value: ("3"), }, ...__VLS_functionalComponentArgsRest(__VLS_62));
    ({}({ class: ("long"), value: ("3"), }));
    (__VLS_ctx.text.Seconds.specific);
    const __VLS_66 = {}.ASelect;
    const __VLS_67 = __VLS_asFunctionalComponent(__VLS_66, new __VLS_66({ mode: ("multiple"), value: ((__VLS_ctx.second.specificSpecific)), }));
    ({}.ASelect);
    ({}.ASelect);
    __VLS_components.ASelect;
    __VLS_components.aSelect;
    __VLS_components.ASelect;
    __VLS_components.aSelect;
    // @ts-ignore
    [ASelect, ASelect,];
    const __VLS_68 = __VLS_67({ mode: ("multiple"), value: ((__VLS_ctx.second.specificSpecific)), }, ...__VLS_functionalComponentArgsRest(__VLS_67));
    ({}({ mode: ("multiple"), value: ((__VLS_ctx.second.specificSpecific)), }));
    for (const [val] of __VLS_getVForSourceType((60))) {
        const __VLS_71 = {}.ASelectOption;
        const __VLS_72 = __VLS_asFunctionalComponent(__VLS_71, new __VLS_71({ key: ((val)), value: ((val - 1)), }));
        ({}.ASelectOption);
        ({}.ASelectOption);
        __VLS_components.ASelectOption;
        __VLS_components.aSelectOption;
        __VLS_components.ASelectOption;
        __VLS_components.aSelectOption;
        // @ts-ignore
        [ASelectOption, ASelectOption,];
        const __VLS_73 = __VLS_72({ key: ((val)), value: ((val - 1)), }, ...__VLS_functionalComponentArgsRest(__VLS_72));
        ({}({ key: ((val)), value: ((val - 1)), }));
        (val - 1);
        // @ts-ignore
        [text, second,];
        (__VLS_75.slots).default;
        const __VLS_75 = __VLS_pickFunctionalComponentCtx(__VLS_71, __VLS_73);
    }
    (__VLS_70.slots).default;
    const __VLS_70 = __VLS_pickFunctionalComponentCtx(__VLS_66, __VLS_68);
    (__VLS_65.slots).default;
    const __VLS_65 = __VLS_pickFunctionalComponentCtx(__VLS_61, __VLS_63);
    (__VLS_60.slots).default;
    const __VLS_60 = __VLS_pickFunctionalComponentCtx(__VLS_56, __VLS_58);
    const __VLS_76 = {}.ARow;
    const __VLS_77 = __VLS_asFunctionalComponent(__VLS_76, new __VLS_76({}));
    ({}.ARow);
    ({}.ARow);
    __VLS_components.ARow;
    __VLS_components.aRow;
    __VLS_components.ARow;
    __VLS_components.aRow;
    // @ts-ignore
    [ARow, ARow,];
    const __VLS_78 = __VLS_77({}, ...__VLS_functionalComponentArgsRest(__VLS_77));
    ({}({}));
    const __VLS_81 = {}.ARadio;
    const __VLS_82 = __VLS_asFunctionalComponent(__VLS_81, new __VLS_81({ value: ("4"), }));
    ({}.ARadio);
    ({}.ARadio);
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    // @ts-ignore
    [ARadio, ARadio,];
    const __VLS_83 = __VLS_82({ value: ("4"), }, ...__VLS_functionalComponentArgsRest(__VLS_82));
    ({}({ value: ("4"), }));
    (__VLS_ctx.text.Seconds.cycle[0]);
    const __VLS_86 = {}.AInputNumber;
    const __VLS_87 = __VLS_asFunctionalComponent(__VLS_86, new __VLS_86({ value: ((__VLS_ctx.second.rangeStart)), min: ((1)), max: ((60)), }));
    ({}.AInputNumber);
    ({}.AInputNumber);
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    // @ts-ignore
    [AInputNumber, AInputNumber,];
    const __VLS_88 = __VLS_87({ value: ((__VLS_ctx.second.rangeStart)), min: ((1)), max: ((60)), }, ...__VLS_functionalComponentArgsRest(__VLS_87));
    ({}({ value: ((__VLS_ctx.second.rangeStart)), min: ((1)), max: ((60)), }));
    // @ts-ignore
    [text, second,];
    const __VLS_90 = __VLS_pickFunctionalComponentCtx(__VLS_86, __VLS_88);
    (__VLS_ctx.text.Seconds.cycle[1] || "");
    const __VLS_91 = {}.AInputNumber;
    const __VLS_92 = __VLS_asFunctionalComponent(__VLS_91, new __VLS_91({ value: ((__VLS_ctx.second.rangeEnd)), min: ((0)), max: ((59)), }));
    ({}.AInputNumber);
    ({}.AInputNumber);
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    // @ts-ignore
    [AInputNumber, AInputNumber,];
    const __VLS_93 = __VLS_92({ value: ((__VLS_ctx.second.rangeEnd)), min: ((0)), max: ((59)), }, ...__VLS_functionalComponentArgsRest(__VLS_92));
    ({}({ value: ((__VLS_ctx.second.rangeEnd)), min: ((0)), max: ((59)), }));
    // @ts-ignore
    [text, second,];
    const __VLS_95 = __VLS_pickFunctionalComponentCtx(__VLS_91, __VLS_93);
    (__VLS_ctx.text.Seconds.cycle[2] || "");
    // @ts-ignore
    [text,];
    (__VLS_85.slots).default;
    const __VLS_85 = __VLS_pickFunctionalComponentCtx(__VLS_81, __VLS_83);
    (__VLS_80.slots).default;
    const __VLS_80 = __VLS_pickFunctionalComponentCtx(__VLS_76, __VLS_78);
    (__VLS_25.slots).default;
    const __VLS_25 = __VLS_pickFunctionalComponentCtx(__VLS_21, __VLS_23);
    const __VLS_15 = __VLS_pickFunctionalComponentCtx(__VLS_11, __VLS_13);
    const __VLS_96 = {}.ATabPane;
    const __VLS_97 = __VLS_asFunctionalComponent(__VLS_96, new __VLS_96({ key: ("minute"), }));
    ({}.ATabPane);
    ({}.ATabPane);
    __VLS_components.ATabPane;
    __VLS_components.aTabPane;
    __VLS_components.ATabPane;
    __VLS_components.aTabPane;
    // @ts-ignore
    [ATabPane, ATabPane,];
    const __VLS_98 = __VLS_97({ key: ("minute"), }, ...__VLS_functionalComponentArgsRest(__VLS_97));
    ({}({ key: ("minute"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        (__VLS_100.slots).tab;
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        const __VLS_101 = {}.ScheduleOutlined;
        const __VLS_102 = __VLS_asFunctionalComponent(__VLS_101, new __VLS_101({}));
        ({}.ScheduleOutlined);
        __VLS_components.ScheduleOutlined;
        // @ts-ignore
        [ScheduleOutlined,];
        const __VLS_103 = __VLS_102({}, ...__VLS_functionalComponentArgsRest(__VLS_102));
        ({}({}));
        const __VLS_105 = __VLS_pickFunctionalComponentCtx(__VLS_101, __VLS_103);
        (__VLS_ctx.text.Minutes.name);
        // @ts-ignore
        [text,];
    }
    const __VLS_106 = {}.ARadioGroup;
    const __VLS_107 = __VLS_asFunctionalComponent(__VLS_106, new __VLS_106({ name: ("minute"), value: ((__VLS_ctx.minute.cronEvery)), }));
    ({}.ARadioGroup);
    ({}.ARadioGroup);
    __VLS_components.ARadioGroup;
    __VLS_components.aRadioGroup;
    __VLS_components.ARadioGroup;
    __VLS_components.aRadioGroup;
    // @ts-ignore
    [ARadioGroup, ARadioGroup,];
    const __VLS_108 = __VLS_107({ name: ("minute"), value: ((__VLS_ctx.minute.cronEvery)), }, ...__VLS_functionalComponentArgsRest(__VLS_107));
    ({}({ name: ("minute"), value: ((__VLS_ctx.minute.cronEvery)), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ class: ("tabBody"), });
    const __VLS_111 = {}.ARow;
    const __VLS_112 = __VLS_asFunctionalComponent(__VLS_111, new __VLS_111({}));
    ({}.ARow);
    ({}.ARow);
    __VLS_components.ARow;
    __VLS_components.aRow;
    __VLS_components.ARow;
    __VLS_components.aRow;
    // @ts-ignore
    [ARow, ARow,];
    const __VLS_113 = __VLS_112({}, ...__VLS_functionalComponentArgsRest(__VLS_112));
    ({}({}));
    const __VLS_116 = {}.ARadio;
    const __VLS_117 = __VLS_asFunctionalComponent(__VLS_116, new __VLS_116({ value: ("1"), }));
    ({}.ARadio);
    ({}.ARadio);
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    // @ts-ignore
    [ARadio, ARadio,];
    const __VLS_118 = __VLS_117({ value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_117));
    ({}({ value: ("1"), }));
    (__VLS_ctx.text.Minutes.every);
    // @ts-ignore
    [text, minute,];
    (__VLS_120.slots).default;
    const __VLS_120 = __VLS_pickFunctionalComponentCtx(__VLS_116, __VLS_118);
    (__VLS_115.slots).default;
    const __VLS_115 = __VLS_pickFunctionalComponentCtx(__VLS_111, __VLS_113);
    const __VLS_121 = {}.ARow;
    const __VLS_122 = __VLS_asFunctionalComponent(__VLS_121, new __VLS_121({}));
    ({}.ARow);
    ({}.ARow);
    __VLS_components.ARow;
    __VLS_components.aRow;
    __VLS_components.ARow;
    __VLS_components.aRow;
    // @ts-ignore
    [ARow, ARow,];
    const __VLS_123 = __VLS_122({}, ...__VLS_functionalComponentArgsRest(__VLS_122));
    ({}({}));
    const __VLS_126 = {}.ARadio;
    const __VLS_127 = __VLS_asFunctionalComponent(__VLS_126, new __VLS_126({ value: ("2"), }));
    ({}.ARadio);
    ({}.ARadio);
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    // @ts-ignore
    [ARadio, ARadio,];
    const __VLS_128 = __VLS_127({ value: ("2"), }, ...__VLS_functionalComponentArgsRest(__VLS_127));
    ({}({ value: ("2"), }));
    (__VLS_ctx.text.Minutes.interval[0]);
    const __VLS_131 = {}.AInputNumber;
    const __VLS_132 = __VLS_asFunctionalComponent(__VLS_131, new __VLS_131({ value: ((__VLS_ctx.minute.incrementIncrement)), min: ((1)), max: ((60)), }));
    ({}.AInputNumber);
    ({}.AInputNumber);
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    // @ts-ignore
    [AInputNumber, AInputNumber,];
    const __VLS_133 = __VLS_132({ value: ((__VLS_ctx.minute.incrementIncrement)), min: ((1)), max: ((60)), }, ...__VLS_functionalComponentArgsRest(__VLS_132));
    ({}({ value: ((__VLS_ctx.minute.incrementIncrement)), min: ((1)), max: ((60)), }));
    // @ts-ignore
    [text, minute,];
    const __VLS_135 = __VLS_pickFunctionalComponentCtx(__VLS_131, __VLS_133);
    (__VLS_ctx.text.Minutes.interval[1]);
    const __VLS_136 = {}.AInputNumber;
    const __VLS_137 = __VLS_asFunctionalComponent(__VLS_136, new __VLS_136({ value: ((__VLS_ctx.minute.incrementStart)), min: ((0)), max: ((59)), }));
    ({}.AInputNumber);
    ({}.AInputNumber);
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    // @ts-ignore
    [AInputNumber, AInputNumber,];
    const __VLS_138 = __VLS_137({ value: ((__VLS_ctx.minute.incrementStart)), min: ((0)), max: ((59)), }, ...__VLS_functionalComponentArgsRest(__VLS_137));
    ({}({ value: ((__VLS_ctx.minute.incrementStart)), min: ((0)), max: ((59)), }));
    // @ts-ignore
    [text, minute,];
    const __VLS_140 = __VLS_pickFunctionalComponentCtx(__VLS_136, __VLS_138);
    (__VLS_ctx.text.Minutes.interval[2] || "");
    // @ts-ignore
    [text,];
    (__VLS_130.slots).default;
    const __VLS_130 = __VLS_pickFunctionalComponentCtx(__VLS_126, __VLS_128);
    (__VLS_125.slots).default;
    const __VLS_125 = __VLS_pickFunctionalComponentCtx(__VLS_121, __VLS_123);
    const __VLS_141 = {}.ARow;
    const __VLS_142 = __VLS_asFunctionalComponent(__VLS_141, new __VLS_141({}));
    ({}.ARow);
    ({}.ARow);
    __VLS_components.ARow;
    __VLS_components.aRow;
    __VLS_components.ARow;
    __VLS_components.aRow;
    // @ts-ignore
    [ARow, ARow,];
    const __VLS_143 = __VLS_142({}, ...__VLS_functionalComponentArgsRest(__VLS_142));
    ({}({}));
    const __VLS_146 = {}.ARadio;
    const __VLS_147 = __VLS_asFunctionalComponent(__VLS_146, new __VLS_146({ class: ("long"), value: ("3"), }));
    ({}.ARadio);
    ({}.ARadio);
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    // @ts-ignore
    [ARadio, ARadio,];
    const __VLS_148 = __VLS_147({ class: ("long"), value: ("3"), }, ...__VLS_functionalComponentArgsRest(__VLS_147));
    ({}({ class: ("long"), value: ("3"), }));
    (__VLS_ctx.text.Minutes.specific);
    const __VLS_151 = {}.ASelect;
    const __VLS_152 = __VLS_asFunctionalComponent(__VLS_151, new __VLS_151({ mode: ("multiple"), value: ((__VLS_ctx.minute.specificSpecific)), }));
    ({}.ASelect);
    ({}.ASelect);
    __VLS_components.ASelect;
    __VLS_components.aSelect;
    __VLS_components.ASelect;
    __VLS_components.aSelect;
    // @ts-ignore
    [ASelect, ASelect,];
    const __VLS_153 = __VLS_152({ mode: ("multiple"), value: ((__VLS_ctx.minute.specificSpecific)), }, ...__VLS_functionalComponentArgsRest(__VLS_152));
    ({}({ mode: ("multiple"), value: ((__VLS_ctx.minute.specificSpecific)), }));
    for (const [val] of __VLS_getVForSourceType((60))) {
        const __VLS_156 = {}.ASelectOption;
        const __VLS_157 = __VLS_asFunctionalComponent(__VLS_156, new __VLS_156({ key: ((val)), value: ((val - 1)), }));
        ({}.ASelectOption);
        ({}.ASelectOption);
        __VLS_components.ASelectOption;
        __VLS_components.aSelectOption;
        __VLS_components.ASelectOption;
        __VLS_components.aSelectOption;
        // @ts-ignore
        [ASelectOption, ASelectOption,];
        const __VLS_158 = __VLS_157({ key: ((val)), value: ((val - 1)), }, ...__VLS_functionalComponentArgsRest(__VLS_157));
        ({}({ key: ((val)), value: ((val - 1)), }));
        (val - 1);
        // @ts-ignore
        [text, minute,];
        (__VLS_160.slots).default;
        const __VLS_160 = __VLS_pickFunctionalComponentCtx(__VLS_156, __VLS_158);
    }
    (__VLS_155.slots).default;
    const __VLS_155 = __VLS_pickFunctionalComponentCtx(__VLS_151, __VLS_153);
    (__VLS_150.slots).default;
    const __VLS_150 = __VLS_pickFunctionalComponentCtx(__VLS_146, __VLS_148);
    (__VLS_145.slots).default;
    const __VLS_145 = __VLS_pickFunctionalComponentCtx(__VLS_141, __VLS_143);
    const __VLS_161 = {}.ARow;
    const __VLS_162 = __VLS_asFunctionalComponent(__VLS_161, new __VLS_161({}));
    ({}.ARow);
    ({}.ARow);
    __VLS_components.ARow;
    __VLS_components.aRow;
    __VLS_components.ARow;
    __VLS_components.aRow;
    // @ts-ignore
    [ARow, ARow,];
    const __VLS_163 = __VLS_162({}, ...__VLS_functionalComponentArgsRest(__VLS_162));
    ({}({}));
    const __VLS_166 = {}.ARadio;
    const __VLS_167 = __VLS_asFunctionalComponent(__VLS_166, new __VLS_166({ value: ("4"), }));
    ({}.ARadio);
    ({}.ARadio);
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    // @ts-ignore
    [ARadio, ARadio,];
    const __VLS_168 = __VLS_167({ value: ("4"), }, ...__VLS_functionalComponentArgsRest(__VLS_167));
    ({}({ value: ("4"), }));
    (__VLS_ctx.text.Minutes.cycle[0]);
    const __VLS_171 = {}.AInputNumber;
    const __VLS_172 = __VLS_asFunctionalComponent(__VLS_171, new __VLS_171({ value: ((__VLS_ctx.minute.rangeStart)), min: ((1)), max: ((60)), }));
    ({}.AInputNumber);
    ({}.AInputNumber);
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    // @ts-ignore
    [AInputNumber, AInputNumber,];
    const __VLS_173 = __VLS_172({ value: ((__VLS_ctx.minute.rangeStart)), min: ((1)), max: ((60)), }, ...__VLS_functionalComponentArgsRest(__VLS_172));
    ({}({ value: ((__VLS_ctx.minute.rangeStart)), min: ((1)), max: ((60)), }));
    // @ts-ignore
    [text, minute,];
    const __VLS_175 = __VLS_pickFunctionalComponentCtx(__VLS_171, __VLS_173);
    (__VLS_ctx.text.Minutes.cycle[1]);
    const __VLS_176 = {}.AInputNumber;
    const __VLS_177 = __VLS_asFunctionalComponent(__VLS_176, new __VLS_176({ value: ((__VLS_ctx.minute.rangeEnd)), min: ((0)), max: ((59)), }));
    ({}.AInputNumber);
    ({}.AInputNumber);
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    // @ts-ignore
    [AInputNumber, AInputNumber,];
    const __VLS_178 = __VLS_177({ value: ((__VLS_ctx.minute.rangeEnd)), min: ((0)), max: ((59)), }, ...__VLS_functionalComponentArgsRest(__VLS_177));
    ({}({ value: ((__VLS_ctx.minute.rangeEnd)), min: ((0)), max: ((59)), }));
    // @ts-ignore
    [text, minute,];
    const __VLS_180 = __VLS_pickFunctionalComponentCtx(__VLS_176, __VLS_178);
    (__VLS_ctx.text.Minutes.cycle[2]);
    // @ts-ignore
    [text,];
    (__VLS_170.slots).default;
    const __VLS_170 = __VLS_pickFunctionalComponentCtx(__VLS_166, __VLS_168);
    (__VLS_165.slots).default;
    const __VLS_165 = __VLS_pickFunctionalComponentCtx(__VLS_161, __VLS_163);
    (__VLS_110.slots).default;
    const __VLS_110 = __VLS_pickFunctionalComponentCtx(__VLS_106, __VLS_108);
    const __VLS_100 = __VLS_pickFunctionalComponentCtx(__VLS_96, __VLS_98);
    const __VLS_181 = {}.ATabPane;
    const __VLS_182 = __VLS_asFunctionalComponent(__VLS_181, new __VLS_181({ key: ("hour"), }));
    ({}.ATabPane);
    ({}.ATabPane);
    __VLS_components.ATabPane;
    __VLS_components.aTabPane;
    __VLS_components.ATabPane;
    __VLS_components.aTabPane;
    // @ts-ignore
    [ATabPane, ATabPane,];
    const __VLS_183 = __VLS_182({ key: ("hour"), }, ...__VLS_functionalComponentArgsRest(__VLS_182));
    ({}({ key: ("hour"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        (__VLS_185.slots).tab;
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        const __VLS_186 = {}.ScheduleOutlined;
        const __VLS_187 = __VLS_asFunctionalComponent(__VLS_186, new __VLS_186({}));
        ({}.ScheduleOutlined);
        __VLS_components.ScheduleOutlined;
        // @ts-ignore
        [ScheduleOutlined,];
        const __VLS_188 = __VLS_187({}, ...__VLS_functionalComponentArgsRest(__VLS_187));
        ({}({}));
        const __VLS_190 = __VLS_pickFunctionalComponentCtx(__VLS_186, __VLS_188);
        (__VLS_ctx.text.Hours.name);
        // @ts-ignore
        [text,];
    }
    const __VLS_191 = {}.ARadioGroup;
    const __VLS_192 = __VLS_asFunctionalComponent(__VLS_191, new __VLS_191({ name: ("hour"), value: ((__VLS_ctx.hour.cronEvery)), }));
    ({}.ARadioGroup);
    ({}.ARadioGroup);
    __VLS_components.ARadioGroup;
    __VLS_components.aRadioGroup;
    __VLS_components.ARadioGroup;
    __VLS_components.aRadioGroup;
    // @ts-ignore
    [ARadioGroup, ARadioGroup,];
    const __VLS_193 = __VLS_192({ name: ("hour"), value: ((__VLS_ctx.hour.cronEvery)), }, ...__VLS_functionalComponentArgsRest(__VLS_192));
    ({}({ name: ("hour"), value: ((__VLS_ctx.hour.cronEvery)), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ class: ("tabBody"), });
    const __VLS_196 = {}.ARow;
    const __VLS_197 = __VLS_asFunctionalComponent(__VLS_196, new __VLS_196({}));
    ({}.ARow);
    ({}.ARow);
    __VLS_components.ARow;
    __VLS_components.aRow;
    __VLS_components.ARow;
    __VLS_components.aRow;
    // @ts-ignore
    [ARow, ARow,];
    const __VLS_198 = __VLS_197({}, ...__VLS_functionalComponentArgsRest(__VLS_197));
    ({}({}));
    const __VLS_201 = {}.ARadio;
    const __VLS_202 = __VLS_asFunctionalComponent(__VLS_201, new __VLS_201({ value: ("1"), }));
    ({}.ARadio);
    ({}.ARadio);
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    // @ts-ignore
    [ARadio, ARadio,];
    const __VLS_203 = __VLS_202({ value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_202));
    ({}({ value: ("1"), }));
    (__VLS_ctx.text.Hours.every);
    // @ts-ignore
    [text, hour,];
    (__VLS_205.slots).default;
    const __VLS_205 = __VLS_pickFunctionalComponentCtx(__VLS_201, __VLS_203);
    (__VLS_200.slots).default;
    const __VLS_200 = __VLS_pickFunctionalComponentCtx(__VLS_196, __VLS_198);
    const __VLS_206 = {}.ARow;
    const __VLS_207 = __VLS_asFunctionalComponent(__VLS_206, new __VLS_206({}));
    ({}.ARow);
    ({}.ARow);
    __VLS_components.ARow;
    __VLS_components.aRow;
    __VLS_components.ARow;
    __VLS_components.aRow;
    // @ts-ignore
    [ARow, ARow,];
    const __VLS_208 = __VLS_207({}, ...__VLS_functionalComponentArgsRest(__VLS_207));
    ({}({}));
    const __VLS_211 = {}.ARadio;
    const __VLS_212 = __VLS_asFunctionalComponent(__VLS_211, new __VLS_211({ value: ("2"), }));
    ({}.ARadio);
    ({}.ARadio);
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    // @ts-ignore
    [ARadio, ARadio,];
    const __VLS_213 = __VLS_212({ value: ("2"), }, ...__VLS_functionalComponentArgsRest(__VLS_212));
    ({}({ value: ("2"), }));
    (__VLS_ctx.text.Hours.interval[0]);
    const __VLS_216 = {}.AInputNumber;
    const __VLS_217 = __VLS_asFunctionalComponent(__VLS_216, new __VLS_216({ value: ((__VLS_ctx.hour.incrementIncrement)), min: ((0)), max: ((23)), }));
    ({}.AInputNumber);
    ({}.AInputNumber);
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    // @ts-ignore
    [AInputNumber, AInputNumber,];
    const __VLS_218 = __VLS_217({ value: ((__VLS_ctx.hour.incrementIncrement)), min: ((0)), max: ((23)), }, ...__VLS_functionalComponentArgsRest(__VLS_217));
    ({}({ value: ((__VLS_ctx.hour.incrementIncrement)), min: ((0)), max: ((23)), }));
    // @ts-ignore
    [text, hour,];
    const __VLS_220 = __VLS_pickFunctionalComponentCtx(__VLS_216, __VLS_218);
    (__VLS_ctx.text.Hours.interval[1]);
    const __VLS_221 = {}.AInputNumber;
    const __VLS_222 = __VLS_asFunctionalComponent(__VLS_221, new __VLS_221({ value: ((__VLS_ctx.hour.incrementStart)), min: ((0)), max: ((23)), }));
    ({}.AInputNumber);
    ({}.AInputNumber);
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    // @ts-ignore
    [AInputNumber, AInputNumber,];
    const __VLS_223 = __VLS_222({ value: ((__VLS_ctx.hour.incrementStart)), min: ((0)), max: ((23)), }, ...__VLS_functionalComponentArgsRest(__VLS_222));
    ({}({ value: ((__VLS_ctx.hour.incrementStart)), min: ((0)), max: ((23)), }));
    // @ts-ignore
    [text, hour,];
    const __VLS_225 = __VLS_pickFunctionalComponentCtx(__VLS_221, __VLS_223);
    (__VLS_ctx.text.Hours.interval[2]);
    // @ts-ignore
    [text,];
    (__VLS_215.slots).default;
    const __VLS_215 = __VLS_pickFunctionalComponentCtx(__VLS_211, __VLS_213);
    (__VLS_210.slots).default;
    const __VLS_210 = __VLS_pickFunctionalComponentCtx(__VLS_206, __VLS_208);
    const __VLS_226 = {}.ARow;
    const __VLS_227 = __VLS_asFunctionalComponent(__VLS_226, new __VLS_226({}));
    ({}.ARow);
    ({}.ARow);
    __VLS_components.ARow;
    __VLS_components.aRow;
    __VLS_components.ARow;
    __VLS_components.aRow;
    // @ts-ignore
    [ARow, ARow,];
    const __VLS_228 = __VLS_227({}, ...__VLS_functionalComponentArgsRest(__VLS_227));
    ({}({}));
    const __VLS_231 = {}.ARadio;
    const __VLS_232 = __VLS_asFunctionalComponent(__VLS_231, new __VLS_231({ class: ("long"), value: ("3"), }));
    ({}.ARadio);
    ({}.ARadio);
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    // @ts-ignore
    [ARadio, ARadio,];
    const __VLS_233 = __VLS_232({ class: ("long"), value: ("3"), }, ...__VLS_functionalComponentArgsRest(__VLS_232));
    ({}({ class: ("long"), value: ("3"), }));
    (__VLS_ctx.text.Hours.specific);
    const __VLS_236 = {}.ASelect;
    const __VLS_237 = __VLS_asFunctionalComponent(__VLS_236, new __VLS_236({ mode: ("multiple"), value: ((__VLS_ctx.hour.specificSpecific)), }));
    ({}.ASelect);
    ({}.ASelect);
    __VLS_components.ASelect;
    __VLS_components.aSelect;
    __VLS_components.ASelect;
    __VLS_components.aSelect;
    // @ts-ignore
    [ASelect, ASelect,];
    const __VLS_238 = __VLS_237({ mode: ("multiple"), value: ((__VLS_ctx.hour.specificSpecific)), }, ...__VLS_functionalComponentArgsRest(__VLS_237));
    ({}({ mode: ("multiple"), value: ((__VLS_ctx.hour.specificSpecific)), }));
    for (const [val] of __VLS_getVForSourceType((24))) {
        const __VLS_241 = {}.ASelectOption;
        const __VLS_242 = __VLS_asFunctionalComponent(__VLS_241, new __VLS_241({ key: ((val)), value: ((val - 1)), }));
        ({}.ASelectOption);
        ({}.ASelectOption);
        __VLS_components.ASelectOption;
        __VLS_components.aSelectOption;
        __VLS_components.ASelectOption;
        __VLS_components.aSelectOption;
        // @ts-ignore
        [ASelectOption, ASelectOption,];
        const __VLS_243 = __VLS_242({ key: ((val)), value: ((val - 1)), }, ...__VLS_functionalComponentArgsRest(__VLS_242));
        ({}({ key: ((val)), value: ((val - 1)), }));
        (val - 1);
        // @ts-ignore
        [text, hour,];
        (__VLS_245.slots).default;
        const __VLS_245 = __VLS_pickFunctionalComponentCtx(__VLS_241, __VLS_243);
    }
    (__VLS_240.slots).default;
    const __VLS_240 = __VLS_pickFunctionalComponentCtx(__VLS_236, __VLS_238);
    (__VLS_235.slots).default;
    const __VLS_235 = __VLS_pickFunctionalComponentCtx(__VLS_231, __VLS_233);
    (__VLS_230.slots).default;
    const __VLS_230 = __VLS_pickFunctionalComponentCtx(__VLS_226, __VLS_228);
    const __VLS_246 = {}.ARow;
    const __VLS_247 = __VLS_asFunctionalComponent(__VLS_246, new __VLS_246({}));
    ({}.ARow);
    ({}.ARow);
    __VLS_components.ARow;
    __VLS_components.aRow;
    __VLS_components.ARow;
    __VLS_components.aRow;
    // @ts-ignore
    [ARow, ARow,];
    const __VLS_248 = __VLS_247({}, ...__VLS_functionalComponentArgsRest(__VLS_247));
    ({}({}));
    const __VLS_251 = {}.ARadio;
    const __VLS_252 = __VLS_asFunctionalComponent(__VLS_251, new __VLS_251({ value: ("4"), }));
    ({}.ARadio);
    ({}.ARadio);
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    // @ts-ignore
    [ARadio, ARadio,];
    const __VLS_253 = __VLS_252({ value: ("4"), }, ...__VLS_functionalComponentArgsRest(__VLS_252));
    ({}({ value: ("4"), }));
    (__VLS_ctx.text.Hours.cycle[0]);
    const __VLS_256 = {}.AInputNumber;
    const __VLS_257 = __VLS_asFunctionalComponent(__VLS_256, new __VLS_256({ value: ((__VLS_ctx.hour.rangeStart)), min: ((0)), max: ((23)), }));
    ({}.AInputNumber);
    ({}.AInputNumber);
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    // @ts-ignore
    [AInputNumber, AInputNumber,];
    const __VLS_258 = __VLS_257({ value: ((__VLS_ctx.hour.rangeStart)), min: ((0)), max: ((23)), }, ...__VLS_functionalComponentArgsRest(__VLS_257));
    ({}({ value: ((__VLS_ctx.hour.rangeStart)), min: ((0)), max: ((23)), }));
    // @ts-ignore
    [text, hour,];
    const __VLS_260 = __VLS_pickFunctionalComponentCtx(__VLS_256, __VLS_258);
    (__VLS_ctx.text.Hours.cycle[1]);
    const __VLS_261 = {}.AInputNumber;
    const __VLS_262 = __VLS_asFunctionalComponent(__VLS_261, new __VLS_261({ value: ((__VLS_ctx.hour.rangeEnd)), min: ((0)), max: ((23)), }));
    ({}.AInputNumber);
    ({}.AInputNumber);
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    // @ts-ignore
    [AInputNumber, AInputNumber,];
    const __VLS_263 = __VLS_262({ value: ((__VLS_ctx.hour.rangeEnd)), min: ((0)), max: ((23)), }, ...__VLS_functionalComponentArgsRest(__VLS_262));
    ({}({ value: ((__VLS_ctx.hour.rangeEnd)), min: ((0)), max: ((23)), }));
    // @ts-ignore
    [text, hour,];
    const __VLS_265 = __VLS_pickFunctionalComponentCtx(__VLS_261, __VLS_263);
    (__VLS_ctx.text.Hours.cycle[2]);
    // @ts-ignore
    [text,];
    (__VLS_255.slots).default;
    const __VLS_255 = __VLS_pickFunctionalComponentCtx(__VLS_251, __VLS_253);
    (__VLS_250.slots).default;
    const __VLS_250 = __VLS_pickFunctionalComponentCtx(__VLS_246, __VLS_248);
    (__VLS_195.slots).default;
    const __VLS_195 = __VLS_pickFunctionalComponentCtx(__VLS_191, __VLS_193);
    const __VLS_185 = __VLS_pickFunctionalComponentCtx(__VLS_181, __VLS_183);
    const __VLS_266 = {}.ATabPane;
    const __VLS_267 = __VLS_asFunctionalComponent(__VLS_266, new __VLS_266({ key: ("day"), }));
    ({}.ATabPane);
    ({}.ATabPane);
    __VLS_components.ATabPane;
    __VLS_components.aTabPane;
    __VLS_components.ATabPane;
    __VLS_components.aTabPane;
    // @ts-ignore
    [ATabPane, ATabPane,];
    const __VLS_268 = __VLS_267({ key: ("day"), }, ...__VLS_functionalComponentArgsRest(__VLS_267));
    ({}({ key: ("day"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        (__VLS_270.slots).tab;
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        const __VLS_271 = {}.ScheduleOutlined;
        const __VLS_272 = __VLS_asFunctionalComponent(__VLS_271, new __VLS_271({}));
        ({}.ScheduleOutlined);
        __VLS_components.ScheduleOutlined;
        // @ts-ignore
        [ScheduleOutlined,];
        const __VLS_273 = __VLS_272({}, ...__VLS_functionalComponentArgsRest(__VLS_272));
        ({}({}));
        const __VLS_275 = __VLS_pickFunctionalComponentCtx(__VLS_271, __VLS_273);
        (__VLS_ctx.text.Day.name);
        // @ts-ignore
        [text,];
    }
    const __VLS_276 = {}.ARadioGroup;
    const __VLS_277 = __VLS_asFunctionalComponent(__VLS_276, new __VLS_276({ name: ("day"), value: ((__VLS_ctx.day.cronEvery)), }));
    ({}.ARadioGroup);
    ({}.ARadioGroup);
    __VLS_components.ARadioGroup;
    __VLS_components.aRadioGroup;
    __VLS_components.ARadioGroup;
    __VLS_components.aRadioGroup;
    // @ts-ignore
    [ARadioGroup, ARadioGroup,];
    const __VLS_278 = __VLS_277({ name: ("day"), value: ((__VLS_ctx.day.cronEvery)), }, ...__VLS_functionalComponentArgsRest(__VLS_277));
    ({}({ name: ("day"), value: ((__VLS_ctx.day.cronEvery)), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ class: ("tabBody"), });
    const __VLS_281 = {}.ARow;
    const __VLS_282 = __VLS_asFunctionalComponent(__VLS_281, new __VLS_281({}));
    ({}.ARow);
    ({}.ARow);
    __VLS_components.ARow;
    __VLS_components.aRow;
    __VLS_components.ARow;
    __VLS_components.aRow;
    // @ts-ignore
    [ARow, ARow,];
    const __VLS_283 = __VLS_282({}, ...__VLS_functionalComponentArgsRest(__VLS_282));
    ({}({}));
    const __VLS_286 = {}.ARadio;
    const __VLS_287 = __VLS_asFunctionalComponent(__VLS_286, new __VLS_286({ value: ("1"), }));
    ({}.ARadio);
    ({}.ARadio);
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    // @ts-ignore
    [ARadio, ARadio,];
    const __VLS_288 = __VLS_287({ value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_287));
    ({}({ value: ("1"), }));
    (__VLS_ctx.text.Day.every);
    // @ts-ignore
    [text, day,];
    (__VLS_290.slots).default;
    const __VLS_290 = __VLS_pickFunctionalComponentCtx(__VLS_286, __VLS_288);
    (__VLS_285.slots).default;
    const __VLS_285 = __VLS_pickFunctionalComponentCtx(__VLS_281, __VLS_283);
    const __VLS_291 = {}.ARow;
    const __VLS_292 = __VLS_asFunctionalComponent(__VLS_291, new __VLS_291({}));
    ({}.ARow);
    ({}.ARow);
    __VLS_components.ARow;
    __VLS_components.aRow;
    __VLS_components.ARow;
    __VLS_components.aRow;
    // @ts-ignore
    [ARow, ARow,];
    const __VLS_293 = __VLS_292({}, ...__VLS_functionalComponentArgsRest(__VLS_292));
    ({}({}));
    const __VLS_296 = {}.ARadio;
    const __VLS_297 = __VLS_asFunctionalComponent(__VLS_296, new __VLS_296({ value: ("2"), }));
    ({}.ARadio);
    ({}.ARadio);
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    // @ts-ignore
    [ARadio, ARadio,];
    const __VLS_298 = __VLS_297({ value: ("2"), }, ...__VLS_functionalComponentArgsRest(__VLS_297));
    ({}({ value: ("2"), }));
    (__VLS_ctx.text.Day.intervalWeek[0]);
    const __VLS_301 = {}.AInputNumber;
    const __VLS_302 = __VLS_asFunctionalComponent(__VLS_301, new __VLS_301({ value: ((__VLS_ctx.week.incrementIncrement)), min: ((1)), max: ((7)), }));
    ({}.AInputNumber);
    ({}.AInputNumber);
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    // @ts-ignore
    [AInputNumber, AInputNumber,];
    const __VLS_303 = __VLS_302({ value: ((__VLS_ctx.week.incrementIncrement)), min: ((1)), max: ((7)), }, ...__VLS_functionalComponentArgsRest(__VLS_302));
    ({}({ value: ((__VLS_ctx.week.incrementIncrement)), min: ((1)), max: ((7)), }));
    // @ts-ignore
    [text, week,];
    const __VLS_305 = __VLS_pickFunctionalComponentCtx(__VLS_301, __VLS_303);
    (__VLS_ctx.text.Day.intervalWeek[1]);
    const __VLS_306 = {}.ASelect;
    const __VLS_307 = __VLS_asFunctionalComponent(__VLS_306, new __VLS_306({ value: ((__VLS_ctx.week.incrementStart)), }));
    ({}.ASelect);
    ({}.ASelect);
    __VLS_components.ASelect;
    __VLS_components.aSelect;
    __VLS_components.ASelect;
    __VLS_components.aSelect;
    // @ts-ignore
    [ASelect, ASelect,];
    const __VLS_308 = __VLS_307({ value: ((__VLS_ctx.week.incrementStart)), }, ...__VLS_functionalComponentArgsRest(__VLS_307));
    ({}({ value: ((__VLS_ctx.week.incrementStart)), }));
    for (const [val] of __VLS_getVForSourceType((7))) {
        const __VLS_311 = {}.ASelectOption;
        const __VLS_312 = __VLS_asFunctionalComponent(__VLS_311, new __VLS_311({ key: ((val)), value: ((val)), }));
        ({}.ASelectOption);
        ({}.ASelectOption);
        __VLS_components.ASelectOption;
        __VLS_components.aSelectOption;
        __VLS_components.ASelectOption;
        __VLS_components.aSelectOption;
        // @ts-ignore
        [ASelectOption, ASelectOption,];
        const __VLS_313 = __VLS_312({ key: ((val)), value: ((val)), }, ...__VLS_functionalComponentArgsRest(__VLS_312));
        ({}({ key: ((val)), value: ((val)), }));
        (__VLS_ctx.text.Week[val - 1]);
        // @ts-ignore
        [text, text, week,];
        (__VLS_315.slots).default;
        const __VLS_315 = __VLS_pickFunctionalComponentCtx(__VLS_311, __VLS_313);
    }
    (__VLS_310.slots).default;
    const __VLS_310 = __VLS_pickFunctionalComponentCtx(__VLS_306, __VLS_308);
    (__VLS_ctx.text.Day.intervalWeek[2]);
    // @ts-ignore
    [text,];
    (__VLS_300.slots).default;
    const __VLS_300 = __VLS_pickFunctionalComponentCtx(__VLS_296, __VLS_298);
    (__VLS_295.slots).default;
    const __VLS_295 = __VLS_pickFunctionalComponentCtx(__VLS_291, __VLS_293);
    const __VLS_316 = {}.ARow;
    const __VLS_317 = __VLS_asFunctionalComponent(__VLS_316, new __VLS_316({}));
    ({}.ARow);
    ({}.ARow);
    __VLS_components.ARow;
    __VLS_components.aRow;
    __VLS_components.ARow;
    __VLS_components.aRow;
    // @ts-ignore
    [ARow, ARow,];
    const __VLS_318 = __VLS_317({}, ...__VLS_functionalComponentArgsRest(__VLS_317));
    ({}({}));
    const __VLS_321 = {}.ARadio;
    const __VLS_322 = __VLS_asFunctionalComponent(__VLS_321, new __VLS_321({ value: ("3"), }));
    ({}.ARadio);
    ({}.ARadio);
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    // @ts-ignore
    [ARadio, ARadio,];
    const __VLS_323 = __VLS_322({ value: ("3"), }, ...__VLS_functionalComponentArgsRest(__VLS_322));
    ({}({ value: ("3"), }));
    (__VLS_ctx.text.Day.intervalDay[0]);
    const __VLS_326 = {}.AInputNumber;
    const __VLS_327 = __VLS_asFunctionalComponent(__VLS_326, new __VLS_326({ value: ((__VLS_ctx.day.incrementIncrement)), min: ((1)), max: ((31)), }));
    ({}.AInputNumber);
    ({}.AInputNumber);
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    // @ts-ignore
    [AInputNumber, AInputNumber,];
    const __VLS_328 = __VLS_327({ value: ((__VLS_ctx.day.incrementIncrement)), min: ((1)), max: ((31)), }, ...__VLS_functionalComponentArgsRest(__VLS_327));
    ({}({ value: ((__VLS_ctx.day.incrementIncrement)), min: ((1)), max: ((31)), }));
    // @ts-ignore
    [text, day,];
    const __VLS_330 = __VLS_pickFunctionalComponentCtx(__VLS_326, __VLS_328);
    (__VLS_ctx.text.Day.intervalDay[1]);
    const __VLS_331 = {}.AInputNumber;
    const __VLS_332 = __VLS_asFunctionalComponent(__VLS_331, new __VLS_331({ value: ((__VLS_ctx.day.incrementStart)), min: ((1)), max: ((31)), }));
    ({}.AInputNumber);
    ({}.AInputNumber);
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    // @ts-ignore
    [AInputNumber, AInputNumber,];
    const __VLS_333 = __VLS_332({ value: ((__VLS_ctx.day.incrementStart)), min: ((1)), max: ((31)), }, ...__VLS_functionalComponentArgsRest(__VLS_332));
    ({}({ value: ((__VLS_ctx.day.incrementStart)), min: ((1)), max: ((31)), }));
    // @ts-ignore
    [text, day,];
    const __VLS_335 = __VLS_pickFunctionalComponentCtx(__VLS_331, __VLS_333);
    (__VLS_ctx.text.Day.intervalDay[2]);
    // @ts-ignore
    [text,];
    (__VLS_325.slots).default;
    const __VLS_325 = __VLS_pickFunctionalComponentCtx(__VLS_321, __VLS_323);
    (__VLS_320.slots).default;
    const __VLS_320 = __VLS_pickFunctionalComponentCtx(__VLS_316, __VLS_318);
    const __VLS_336 = {}.ARow;
    const __VLS_337 = __VLS_asFunctionalComponent(__VLS_336, new __VLS_336({}));
    ({}.ARow);
    ({}.ARow);
    __VLS_components.ARow;
    __VLS_components.aRow;
    __VLS_components.ARow;
    __VLS_components.aRow;
    // @ts-ignore
    [ARow, ARow,];
    const __VLS_338 = __VLS_337({}, ...__VLS_functionalComponentArgsRest(__VLS_337));
    ({}({}));
    const __VLS_341 = {}.ARadio;
    const __VLS_342 = __VLS_asFunctionalComponent(__VLS_341, new __VLS_341({ class: ("long"), value: ("4"), }));
    ({}.ARadio);
    ({}.ARadio);
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    // @ts-ignore
    [ARadio, ARadio,];
    const __VLS_343 = __VLS_342({ class: ("long"), value: ("4"), }, ...__VLS_functionalComponentArgsRest(__VLS_342));
    ({}({ class: ("long"), value: ("4"), }));
    (__VLS_ctx.text.Day.specificWeek);
    const __VLS_346 = {}.ASelect;
    const __VLS_347 = __VLS_asFunctionalComponent(__VLS_346, new __VLS_346({ mode: ("multiple"), value: ((__VLS_ctx.week.specificSpecific)), }));
    ({}.ASelect);
    ({}.ASelect);
    __VLS_components.ASelect;
    __VLS_components.aSelect;
    __VLS_components.ASelect;
    __VLS_components.aSelect;
    // @ts-ignore
    [ASelect, ASelect,];
    const __VLS_348 = __VLS_347({ mode: ("multiple"), value: ((__VLS_ctx.week.specificSpecific)), }, ...__VLS_functionalComponentArgsRest(__VLS_347));
    ({}({ mode: ("multiple"), value: ((__VLS_ctx.week.specificSpecific)), }));
    for (const [val] of __VLS_getVForSourceType((7))) {
        const __VLS_351 = {}.ASelectOption;
        const __VLS_352 = __VLS_asFunctionalComponent(__VLS_351, new __VLS_351({ key: ((val)), value: (([
                'SUN',
                'MON',
                'TUE',
                'WED',
                'THU',
                'FRI',
                'SAT',
            ][val - 1])), }));
        ({}.ASelectOption);
        ({}.ASelectOption);
        __VLS_components.ASelectOption;
        __VLS_components.aSelectOption;
        __VLS_components.ASelectOption;
        __VLS_components.aSelectOption;
        // @ts-ignore
        [ASelectOption, ASelectOption,];
        const __VLS_353 = __VLS_352({ key: ((val)), value: (([
                'SUN',
                'MON',
                'TUE',
                'WED',
                'THU',
                'FRI',
                'SAT',
            ][val - 1])), }, ...__VLS_functionalComponentArgsRest(__VLS_352));
        ({}({ key: ((val)), value: (([
                'SUN',
                'MON',
                'TUE',
                'WED',
                'THU',
                'FRI',
                'SAT',
            ][val - 1])), }));
        (__VLS_ctx.text.Week[val - 1]);
        // @ts-ignore
        [text, text, week,];
        (__VLS_355.slots).default;
        const __VLS_355 = __VLS_pickFunctionalComponentCtx(__VLS_351, __VLS_353);
    }
    (__VLS_350.slots).default;
    const __VLS_350 = __VLS_pickFunctionalComponentCtx(__VLS_346, __VLS_348);
    (__VLS_345.slots).default;
    const __VLS_345 = __VLS_pickFunctionalComponentCtx(__VLS_341, __VLS_343);
    (__VLS_340.slots).default;
    const __VLS_340 = __VLS_pickFunctionalComponentCtx(__VLS_336, __VLS_338);
    const __VLS_356 = {}.ARow;
    const __VLS_357 = __VLS_asFunctionalComponent(__VLS_356, new __VLS_356({}));
    ({}.ARow);
    ({}.ARow);
    __VLS_components.ARow;
    __VLS_components.aRow;
    __VLS_components.ARow;
    __VLS_components.aRow;
    // @ts-ignore
    [ARow, ARow,];
    const __VLS_358 = __VLS_357({}, ...__VLS_functionalComponentArgsRest(__VLS_357));
    ({}({}));
    const __VLS_361 = {}.ARadio;
    const __VLS_362 = __VLS_asFunctionalComponent(__VLS_361, new __VLS_361({ class: ("long"), value: ("5"), }));
    ({}.ARadio);
    ({}.ARadio);
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    // @ts-ignore
    [ARadio, ARadio,];
    const __VLS_363 = __VLS_362({ class: ("long"), value: ("5"), }, ...__VLS_functionalComponentArgsRest(__VLS_362));
    ({}({ class: ("long"), value: ("5"), }));
    (__VLS_ctx.text.Day.specificDay);
    const __VLS_366 = {}.ASelect;
    const __VLS_367 = __VLS_asFunctionalComponent(__VLS_366, new __VLS_366({ mode: ("multiple"), value: ((__VLS_ctx.day.specificSpecific)), }));
    ({}.ASelect);
    ({}.ASelect);
    __VLS_components.ASelect;
    __VLS_components.aSelect;
    __VLS_components.ASelect;
    __VLS_components.aSelect;
    // @ts-ignore
    [ASelect, ASelect,];
    const __VLS_368 = __VLS_367({ mode: ("multiple"), value: ((__VLS_ctx.day.specificSpecific)), }, ...__VLS_functionalComponentArgsRest(__VLS_367));
    ({}({ mode: ("multiple"), value: ((__VLS_ctx.day.specificSpecific)), }));
    for (const [val] of __VLS_getVForSourceType((31))) {
        const __VLS_371 = {}.ASelectOption;
        const __VLS_372 = __VLS_asFunctionalComponent(__VLS_371, new __VLS_371({ key: ((val)), value: ((val)), }));
        ({}.ASelectOption);
        ({}.ASelectOption);
        __VLS_components.ASelectOption;
        __VLS_components.aSelectOption;
        __VLS_components.ASelectOption;
        __VLS_components.aSelectOption;
        // @ts-ignore
        [ASelectOption, ASelectOption,];
        const __VLS_373 = __VLS_372({ key: ((val)), value: ((val)), }, ...__VLS_functionalComponentArgsRest(__VLS_372));
        ({}({ key: ((val)), value: ((val)), }));
        (val);
        // @ts-ignore
        [text, day,];
        (__VLS_375.slots).default;
        const __VLS_375 = __VLS_pickFunctionalComponentCtx(__VLS_371, __VLS_373);
    }
    (__VLS_370.slots).default;
    const __VLS_370 = __VLS_pickFunctionalComponentCtx(__VLS_366, __VLS_368);
    (__VLS_365.slots).default;
    const __VLS_365 = __VLS_pickFunctionalComponentCtx(__VLS_361, __VLS_363);
    (__VLS_360.slots).default;
    const __VLS_360 = __VLS_pickFunctionalComponentCtx(__VLS_356, __VLS_358);
    const __VLS_376 = {}.ARow;
    const __VLS_377 = __VLS_asFunctionalComponent(__VLS_376, new __VLS_376({}));
    ({}.ARow);
    ({}.ARow);
    __VLS_components.ARow;
    __VLS_components.aRow;
    __VLS_components.ARow;
    __VLS_components.aRow;
    // @ts-ignore
    [ARow, ARow,];
    const __VLS_378 = __VLS_377({}, ...__VLS_functionalComponentArgsRest(__VLS_377));
    ({}({}));
    const __VLS_381 = {}.ARadio;
    const __VLS_382 = __VLS_asFunctionalComponent(__VLS_381, new __VLS_381({ value: ("6"), }));
    ({}.ARadio);
    ({}.ARadio);
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    // @ts-ignore
    [ARadio, ARadio,];
    const __VLS_383 = __VLS_382({ value: ("6"), }, ...__VLS_functionalComponentArgsRest(__VLS_382));
    ({}({ value: ("6"), }));
    (__VLS_ctx.text.Day.lastDay);
    // @ts-ignore
    [text,];
    (__VLS_385.slots).default;
    const __VLS_385 = __VLS_pickFunctionalComponentCtx(__VLS_381, __VLS_383);
    (__VLS_380.slots).default;
    const __VLS_380 = __VLS_pickFunctionalComponentCtx(__VLS_376, __VLS_378);
    const __VLS_386 = {}.ARow;
    const __VLS_387 = __VLS_asFunctionalComponent(__VLS_386, new __VLS_386({}));
    ({}.ARow);
    ({}.ARow);
    __VLS_components.ARow;
    __VLS_components.aRow;
    __VLS_components.ARow;
    __VLS_components.aRow;
    // @ts-ignore
    [ARow, ARow,];
    const __VLS_388 = __VLS_387({}, ...__VLS_functionalComponentArgsRest(__VLS_387));
    ({}({}));
    const __VLS_391 = {}.ARadio;
    const __VLS_392 = __VLS_asFunctionalComponent(__VLS_391, new __VLS_391({ value: ("7"), }));
    ({}.ARadio);
    ({}.ARadio);
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    // @ts-ignore
    [ARadio, ARadio,];
    const __VLS_393 = __VLS_392({ value: ("7"), }, ...__VLS_functionalComponentArgsRest(__VLS_392));
    ({}({ value: ("7"), }));
    (__VLS_ctx.text.Day.lastWeekday);
    // @ts-ignore
    [text,];
    (__VLS_395.slots).default;
    const __VLS_395 = __VLS_pickFunctionalComponentCtx(__VLS_391, __VLS_393);
    (__VLS_390.slots).default;
    const __VLS_390 = __VLS_pickFunctionalComponentCtx(__VLS_386, __VLS_388);
    const __VLS_396 = {}.ARow;
    const __VLS_397 = __VLS_asFunctionalComponent(__VLS_396, new __VLS_396({}));
    ({}.ARow);
    ({}.ARow);
    __VLS_components.ARow;
    __VLS_components.aRow;
    __VLS_components.ARow;
    __VLS_components.aRow;
    // @ts-ignore
    [ARow, ARow,];
    const __VLS_398 = __VLS_397({}, ...__VLS_functionalComponentArgsRest(__VLS_397));
    ({}({}));
    const __VLS_401 = {}.ARadio;
    const __VLS_402 = __VLS_asFunctionalComponent(__VLS_401, new __VLS_401({ value: ("8"), }));
    ({}.ARadio);
    ({}.ARadio);
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    // @ts-ignore
    [ARadio, ARadio,];
    const __VLS_403 = __VLS_402({ value: ("8"), }, ...__VLS_functionalComponentArgsRest(__VLS_402));
    ({}({ value: ("8"), }));
    (__VLS_ctx.text.Day.lastWeek[0]);
    const __VLS_406 = {}.ASelect;
    const __VLS_407 = __VLS_asFunctionalComponent(__VLS_406, new __VLS_406({ value: ((__VLS_ctx.week.cronLastSpecificDomweek)), }));
    ({}.ASelect);
    ({}.ASelect);
    __VLS_components.ASelect;
    __VLS_components.aSelect;
    __VLS_components.ASelect;
    __VLS_components.aSelect;
    // @ts-ignore
    [ASelect, ASelect,];
    const __VLS_408 = __VLS_407({ value: ((__VLS_ctx.week.cronLastSpecificDomweek)), }, ...__VLS_functionalComponentArgsRest(__VLS_407));
    ({}({ value: ((__VLS_ctx.week.cronLastSpecificDomweek)), }));
    for (const [val] of __VLS_getVForSourceType((7))) {
        const __VLS_411 = {}.ASelectOption;
        const __VLS_412 = __VLS_asFunctionalComponent(__VLS_411, new __VLS_411({ key: ((val)), value: ((val)), }));
        ({}.ASelectOption);
        ({}.ASelectOption);
        __VLS_components.ASelectOption;
        __VLS_components.aSelectOption;
        __VLS_components.ASelectOption;
        __VLS_components.aSelectOption;
        // @ts-ignore
        [ASelectOption, ASelectOption,];
        const __VLS_413 = __VLS_412({ key: ((val)), value: ((val)), }, ...__VLS_functionalComponentArgsRest(__VLS_412));
        ({}({ key: ((val)), value: ((val)), }));
        (__VLS_ctx.text.Week[val - 1]);
        // @ts-ignore
        [text, text, week,];
        (__VLS_415.slots).default;
        const __VLS_415 = __VLS_pickFunctionalComponentCtx(__VLS_411, __VLS_413);
    }
    (__VLS_410.slots).default;
    const __VLS_410 = __VLS_pickFunctionalComponentCtx(__VLS_406, __VLS_408);
    (__VLS_ctx.text.Day.lastWeek[1] || "");
    // @ts-ignore
    [text,];
    (__VLS_405.slots).default;
    const __VLS_405 = __VLS_pickFunctionalComponentCtx(__VLS_401, __VLS_403);
    (__VLS_400.slots).default;
    const __VLS_400 = __VLS_pickFunctionalComponentCtx(__VLS_396, __VLS_398);
    const __VLS_416 = {}.ARow;
    const __VLS_417 = __VLS_asFunctionalComponent(__VLS_416, new __VLS_416({}));
    ({}.ARow);
    ({}.ARow);
    __VLS_components.ARow;
    __VLS_components.aRow;
    __VLS_components.ARow;
    __VLS_components.aRow;
    // @ts-ignore
    [ARow, ARow,];
    const __VLS_418 = __VLS_417({}, ...__VLS_functionalComponentArgsRest(__VLS_417));
    ({}({}));
    const __VLS_421 = {}.ARadio;
    const __VLS_422 = __VLS_asFunctionalComponent(__VLS_421, new __VLS_421({ value: ("9"), }));
    ({}.ARadio);
    ({}.ARadio);
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    // @ts-ignore
    [ARadio, ARadio,];
    const __VLS_423 = __VLS_422({ value: ("9"), }, ...__VLS_functionalComponentArgsRest(__VLS_422));
    ({}({ value: ("9"), }));
    const __VLS_426 = {}.AInputNumber;
    const __VLS_427 = __VLS_asFunctionalComponent(__VLS_426, new __VLS_426({ value: ((__VLS_ctx.day.cronDaysBeforeEomMinus)), min: ((1)), max: ((31)), }));
    ({}.AInputNumber);
    ({}.AInputNumber);
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    // @ts-ignore
    [AInputNumber, AInputNumber,];
    const __VLS_428 = __VLS_427({ value: ((__VLS_ctx.day.cronDaysBeforeEomMinus)), min: ((1)), max: ((31)), }, ...__VLS_functionalComponentArgsRest(__VLS_427));
    ({}({ value: ((__VLS_ctx.day.cronDaysBeforeEomMinus)), min: ((1)), max: ((31)), }));
    // @ts-ignore
    [day,];
    const __VLS_430 = __VLS_pickFunctionalComponentCtx(__VLS_426, __VLS_428);
    (__VLS_ctx.text.Day.beforeEndMonth[0]);
    // @ts-ignore
    [text,];
    (__VLS_425.slots).default;
    const __VLS_425 = __VLS_pickFunctionalComponentCtx(__VLS_421, __VLS_423);
    (__VLS_420.slots).default;
    const __VLS_420 = __VLS_pickFunctionalComponentCtx(__VLS_416, __VLS_418);
    const __VLS_431 = {}.ARow;
    const __VLS_432 = __VLS_asFunctionalComponent(__VLS_431, new __VLS_431({}));
    ({}.ARow);
    ({}.ARow);
    __VLS_components.ARow;
    __VLS_components.aRow;
    __VLS_components.ARow;
    __VLS_components.aRow;
    // @ts-ignore
    [ARow, ARow,];
    const __VLS_433 = __VLS_432({}, ...__VLS_functionalComponentArgsRest(__VLS_432));
    ({}({}));
    const __VLS_436 = {}.ARadio;
    const __VLS_437 = __VLS_asFunctionalComponent(__VLS_436, new __VLS_436({ value: ("10"), }));
    ({}.ARadio);
    ({}.ARadio);
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    // @ts-ignore
    [ARadio, ARadio,];
    const __VLS_438 = __VLS_437({ value: ("10"), }, ...__VLS_functionalComponentArgsRest(__VLS_437));
    ({}({ value: ("10"), }));
    (__VLS_ctx.text.Day.nearestWeekday[0]);
    const __VLS_441 = {}.AInputNumber;
    const __VLS_442 = __VLS_asFunctionalComponent(__VLS_441, new __VLS_441({ value: ((__VLS_ctx.day.cronDaysNearestweekday)), min: ((1)), max: ((31)), }));
    ({}.AInputNumber);
    ({}.AInputNumber);
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    // @ts-ignore
    [AInputNumber, AInputNumber,];
    const __VLS_443 = __VLS_442({ value: ((__VLS_ctx.day.cronDaysNearestweekday)), min: ((1)), max: ((31)), }, ...__VLS_functionalComponentArgsRest(__VLS_442));
    ({}({ value: ((__VLS_ctx.day.cronDaysNearestweekday)), min: ((1)), max: ((31)), }));
    // @ts-ignore
    [text, day,];
    const __VLS_445 = __VLS_pickFunctionalComponentCtx(__VLS_441, __VLS_443);
    (__VLS_ctx.text.Day.nearestWeekday[1]);
    // @ts-ignore
    [text,];
    (__VLS_440.slots).default;
    const __VLS_440 = __VLS_pickFunctionalComponentCtx(__VLS_436, __VLS_438);
    (__VLS_435.slots).default;
    const __VLS_435 = __VLS_pickFunctionalComponentCtx(__VLS_431, __VLS_433);
    const __VLS_446 = {}.ARow;
    const __VLS_447 = __VLS_asFunctionalComponent(__VLS_446, new __VLS_446({}));
    ({}.ARow);
    ({}.ARow);
    __VLS_components.ARow;
    __VLS_components.aRow;
    __VLS_components.ARow;
    __VLS_components.aRow;
    // @ts-ignore
    [ARow, ARow,];
    const __VLS_448 = __VLS_447({}, ...__VLS_functionalComponentArgsRest(__VLS_447));
    ({}({}));
    const __VLS_451 = {}.ARadio;
    const __VLS_452 = __VLS_asFunctionalComponent(__VLS_451, new __VLS_451({ value: ("11"), }));
    ({}.ARadio);
    ({}.ARadio);
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    // @ts-ignore
    [ARadio, ARadio,];
    const __VLS_453 = __VLS_452({ value: ("11"), }, ...__VLS_functionalComponentArgsRest(__VLS_452));
    ({}({ value: ("11"), }));
    (__VLS_ctx.text.Day.someWeekday[0]);
    const __VLS_456 = {}.AInputNumber;
    const __VLS_457 = __VLS_asFunctionalComponent(__VLS_456, new __VLS_456({ value: ((__VLS_ctx.week.cronNthDayNth)), min: ((1)), max: ((5)), }));
    ({}.AInputNumber);
    ({}.AInputNumber);
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    // @ts-ignore
    [AInputNumber, AInputNumber,];
    const __VLS_458 = __VLS_457({ value: ((__VLS_ctx.week.cronNthDayNth)), min: ((1)), max: ((5)), }, ...__VLS_functionalComponentArgsRest(__VLS_457));
    ({}({ value: ((__VLS_ctx.week.cronNthDayNth)), min: ((1)), max: ((5)), }));
    // @ts-ignore
    [text, week,];
    const __VLS_460 = __VLS_pickFunctionalComponentCtx(__VLS_456, __VLS_458);
    const __VLS_461 = {}.ASelect;
    const __VLS_462 = __VLS_asFunctionalComponent(__VLS_461, new __VLS_461({ value: ((__VLS_ctx.week.cronNthDayDay)), }));
    ({}.ASelect);
    ({}.ASelect);
    __VLS_components.ASelect;
    __VLS_components.aSelect;
    __VLS_components.ASelect;
    __VLS_components.aSelect;
    // @ts-ignore
    [ASelect, ASelect,];
    const __VLS_463 = __VLS_462({ value: ((__VLS_ctx.week.cronNthDayDay)), }, ...__VLS_functionalComponentArgsRest(__VLS_462));
    ({}({ value: ((__VLS_ctx.week.cronNthDayDay)), }));
    for (const [val] of __VLS_getVForSourceType((7))) {
        const __VLS_466 = {}.ASelectOption;
        const __VLS_467 = __VLS_asFunctionalComponent(__VLS_466, new __VLS_466({ key: ((val)), value: ((val)), }));
        ({}.ASelectOption);
        ({}.ASelectOption);
        __VLS_components.ASelectOption;
        __VLS_components.aSelectOption;
        __VLS_components.ASelectOption;
        __VLS_components.aSelectOption;
        // @ts-ignore
        [ASelectOption, ASelectOption,];
        const __VLS_468 = __VLS_467({ key: ((val)), value: ((val)), }, ...__VLS_functionalComponentArgsRest(__VLS_467));
        ({}({ key: ((val)), value: ((val)), }));
        (__VLS_ctx.text.Week[val - 1]);
        // @ts-ignore
        [text, week,];
        (__VLS_470.slots).default;
        const __VLS_470 = __VLS_pickFunctionalComponentCtx(__VLS_466, __VLS_468);
    }
    (__VLS_465.slots).default;
    const __VLS_465 = __VLS_pickFunctionalComponentCtx(__VLS_461, __VLS_463);
    (__VLS_ctx.text.Day.someWeekday[1]);
    // @ts-ignore
    [text,];
    (__VLS_455.slots).default;
    const __VLS_455 = __VLS_pickFunctionalComponentCtx(__VLS_451, __VLS_453);
    (__VLS_450.slots).default;
    const __VLS_450 = __VLS_pickFunctionalComponentCtx(__VLS_446, __VLS_448);
    (__VLS_280.slots).default;
    const __VLS_280 = __VLS_pickFunctionalComponentCtx(__VLS_276, __VLS_278);
    const __VLS_270 = __VLS_pickFunctionalComponentCtx(__VLS_266, __VLS_268);
    const __VLS_471 = {}.ATabPane;
    const __VLS_472 = __VLS_asFunctionalComponent(__VLS_471, new __VLS_471({ key: ("month"), }));
    ({}.ATabPane);
    ({}.ATabPane);
    __VLS_components.ATabPane;
    __VLS_components.aTabPane;
    __VLS_components.ATabPane;
    __VLS_components.aTabPane;
    // @ts-ignore
    [ATabPane, ATabPane,];
    const __VLS_473 = __VLS_472({ key: ("month"), }, ...__VLS_functionalComponentArgsRest(__VLS_472));
    ({}({ key: ("month"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        (__VLS_475.slots).tab;
        const __VLS_476 = {}.ScheduleOutlined;
        const __VLS_477 = __VLS_asFunctionalComponent(__VLS_476, new __VLS_476({}));
        ({}.ScheduleOutlined);
        __VLS_components.ScheduleOutlined;
        // @ts-ignore
        [ScheduleOutlined,];
        const __VLS_478 = __VLS_477({}, ...__VLS_functionalComponentArgsRest(__VLS_477));
        ({}({}));
        const __VLS_480 = __VLS_pickFunctionalComponentCtx(__VLS_476, __VLS_478);
        (__VLS_ctx.text.Month.name);
        // @ts-ignore
        [text,];
    }
    const __VLS_481 = {}.ARadioGroup;
    const __VLS_482 = __VLS_asFunctionalComponent(__VLS_481, new __VLS_481({ name: ("month"), value: ((__VLS_ctx.month.cronEvery)), }));
    ({}.ARadioGroup);
    ({}.ARadioGroup);
    __VLS_components.ARadioGroup;
    __VLS_components.aRadioGroup;
    __VLS_components.ARadioGroup;
    __VLS_components.aRadioGroup;
    // @ts-ignore
    [ARadioGroup, ARadioGroup,];
    const __VLS_483 = __VLS_482({ name: ("month"), value: ((__VLS_ctx.month.cronEvery)), }, ...__VLS_functionalComponentArgsRest(__VLS_482));
    ({}({ name: ("month"), value: ((__VLS_ctx.month.cronEvery)), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ class: ("tabBody"), });
    const __VLS_486 = {}.ARow;
    const __VLS_487 = __VLS_asFunctionalComponent(__VLS_486, new __VLS_486({}));
    ({}.ARow);
    ({}.ARow);
    __VLS_components.ARow;
    __VLS_components.aRow;
    __VLS_components.ARow;
    __VLS_components.aRow;
    // @ts-ignore
    [ARow, ARow,];
    const __VLS_488 = __VLS_487({}, ...__VLS_functionalComponentArgsRest(__VLS_487));
    ({}({}));
    const __VLS_491 = {}.ARadio;
    const __VLS_492 = __VLS_asFunctionalComponent(__VLS_491, new __VLS_491({ value: ("1"), }));
    ({}.ARadio);
    ({}.ARadio);
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    // @ts-ignore
    [ARadio, ARadio,];
    const __VLS_493 = __VLS_492({ value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_492));
    ({}({ value: ("1"), }));
    (__VLS_ctx.text.Month.every);
    // @ts-ignore
    [text, month,];
    (__VLS_495.slots).default;
    const __VLS_495 = __VLS_pickFunctionalComponentCtx(__VLS_491, __VLS_493);
    (__VLS_490.slots).default;
    const __VLS_490 = __VLS_pickFunctionalComponentCtx(__VLS_486, __VLS_488);
    const __VLS_496 = {}.ARow;
    const __VLS_497 = __VLS_asFunctionalComponent(__VLS_496, new __VLS_496({}));
    ({}.ARow);
    ({}.ARow);
    __VLS_components.ARow;
    __VLS_components.aRow;
    __VLS_components.ARow;
    __VLS_components.aRow;
    // @ts-ignore
    [ARow, ARow,];
    const __VLS_498 = __VLS_497({}, ...__VLS_functionalComponentArgsRest(__VLS_497));
    ({}({}));
    const __VLS_501 = {}.ARadio;
    const __VLS_502 = __VLS_asFunctionalComponent(__VLS_501, new __VLS_501({ value: ("2"), }));
    ({}.ARadio);
    ({}.ARadio);
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    // @ts-ignore
    [ARadio, ARadio,];
    const __VLS_503 = __VLS_502({ value: ("2"), }, ...__VLS_functionalComponentArgsRest(__VLS_502));
    ({}({ value: ("2"), }));
    (__VLS_ctx.text.Month.interval[0]);
    const __VLS_506 = {}.AInputNumber;
    const __VLS_507 = __VLS_asFunctionalComponent(__VLS_506, new __VLS_506({ value: ((__VLS_ctx.month.incrementIncrement)), min: ((0)), max: ((12)), }));
    ({}.AInputNumber);
    ({}.AInputNumber);
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    // @ts-ignore
    [AInputNumber, AInputNumber,];
    const __VLS_508 = __VLS_507({ value: ((__VLS_ctx.month.incrementIncrement)), min: ((0)), max: ((12)), }, ...__VLS_functionalComponentArgsRest(__VLS_507));
    ({}({ value: ((__VLS_ctx.month.incrementIncrement)), min: ((0)), max: ((12)), }));
    // @ts-ignore
    [text, month,];
    const __VLS_510 = __VLS_pickFunctionalComponentCtx(__VLS_506, __VLS_508);
    (__VLS_ctx.text.Month.interval[1]);
    const __VLS_511 = {}.AInputNumber;
    const __VLS_512 = __VLS_asFunctionalComponent(__VLS_511, new __VLS_511({ value: ((__VLS_ctx.month.incrementStart)), min: ((0)), max: ((12)), }));
    ({}.AInputNumber);
    ({}.AInputNumber);
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    // @ts-ignore
    [AInputNumber, AInputNumber,];
    const __VLS_513 = __VLS_512({ value: ((__VLS_ctx.month.incrementStart)), min: ((0)), max: ((12)), }, ...__VLS_functionalComponentArgsRest(__VLS_512));
    ({}({ value: ((__VLS_ctx.month.incrementStart)), min: ((0)), max: ((12)), }));
    // @ts-ignore
    [text, month,];
    const __VLS_515 = __VLS_pickFunctionalComponentCtx(__VLS_511, __VLS_513);
    (__VLS_505.slots).default;
    const __VLS_505 = __VLS_pickFunctionalComponentCtx(__VLS_501, __VLS_503);
    (__VLS_500.slots).default;
    const __VLS_500 = __VLS_pickFunctionalComponentCtx(__VLS_496, __VLS_498);
    const __VLS_516 = {}.ARow;
    const __VLS_517 = __VLS_asFunctionalComponent(__VLS_516, new __VLS_516({}));
    ({}.ARow);
    ({}.ARow);
    __VLS_components.ARow;
    __VLS_components.aRow;
    __VLS_components.ARow;
    __VLS_components.aRow;
    // @ts-ignore
    [ARow, ARow,];
    const __VLS_518 = __VLS_517({}, ...__VLS_functionalComponentArgsRest(__VLS_517));
    ({}({}));
    const __VLS_521 = {}.ARadio;
    const __VLS_522 = __VLS_asFunctionalComponent(__VLS_521, new __VLS_521({ class: ("long"), value: ("3"), }));
    ({}.ARadio);
    ({}.ARadio);
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    // @ts-ignore
    [ARadio, ARadio,];
    const __VLS_523 = __VLS_522({ class: ("long"), value: ("3"), }, ...__VLS_functionalComponentArgsRest(__VLS_522));
    ({}({ class: ("long"), value: ("3"), }));
    (__VLS_ctx.text.Month.specific);
    const __VLS_526 = {}.ASelect;
    const __VLS_527 = __VLS_asFunctionalComponent(__VLS_526, new __VLS_526({ mode: ("multiple"), value: ((__VLS_ctx.month.specificSpecific)), }));
    ({}.ASelect);
    ({}.ASelect);
    __VLS_components.ASelect;
    __VLS_components.aSelect;
    __VLS_components.ASelect;
    __VLS_components.aSelect;
    // @ts-ignore
    [ASelect, ASelect,];
    const __VLS_528 = __VLS_527({ mode: ("multiple"), value: ((__VLS_ctx.month.specificSpecific)), }, ...__VLS_functionalComponentArgsRest(__VLS_527));
    ({}({ mode: ("multiple"), value: ((__VLS_ctx.month.specificSpecific)), }));
    for (const [val] of __VLS_getVForSourceType((12))) {
        const __VLS_531 = {}.ASelectOption;
        const __VLS_532 = __VLS_asFunctionalComponent(__VLS_531, new __VLS_531({ key: ((val)), value: ((val)), }));
        ({}.ASelectOption);
        ({}.ASelectOption);
        __VLS_components.ASelectOption;
        __VLS_components.aSelectOption;
        __VLS_components.ASelectOption;
        __VLS_components.aSelectOption;
        // @ts-ignore
        [ASelectOption, ASelectOption,];
        const __VLS_533 = __VLS_532({ key: ((val)), value: ((val)), }, ...__VLS_functionalComponentArgsRest(__VLS_532));
        ({}({ key: ((val)), value: ((val)), }));
        (val);
        // @ts-ignore
        [text, month,];
        (__VLS_535.slots).default;
        const __VLS_535 = __VLS_pickFunctionalComponentCtx(__VLS_531, __VLS_533);
    }
    (__VLS_530.slots).default;
    const __VLS_530 = __VLS_pickFunctionalComponentCtx(__VLS_526, __VLS_528);
    (__VLS_525.slots).default;
    const __VLS_525 = __VLS_pickFunctionalComponentCtx(__VLS_521, __VLS_523);
    (__VLS_520.slots).default;
    const __VLS_520 = __VLS_pickFunctionalComponentCtx(__VLS_516, __VLS_518);
    const __VLS_536 = {}.ARow;
    const __VLS_537 = __VLS_asFunctionalComponent(__VLS_536, new __VLS_536({}));
    ({}.ARow);
    ({}.ARow);
    __VLS_components.ARow;
    __VLS_components.aRow;
    __VLS_components.ARow;
    __VLS_components.aRow;
    // @ts-ignore
    [ARow, ARow,];
    const __VLS_538 = __VLS_537({}, ...__VLS_functionalComponentArgsRest(__VLS_537));
    ({}({}));
    const __VLS_541 = {}.ARadio;
    const __VLS_542 = __VLS_asFunctionalComponent(__VLS_541, new __VLS_541({ value: ("4"), }));
    ({}.ARadio);
    ({}.ARadio);
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    // @ts-ignore
    [ARadio, ARadio,];
    const __VLS_543 = __VLS_542({ value: ("4"), }, ...__VLS_functionalComponentArgsRest(__VLS_542));
    ({}({ value: ("4"), }));
    (__VLS_ctx.text.Month.cycle[0]);
    const __VLS_546 = {}.AInputNumber;
    const __VLS_547 = __VLS_asFunctionalComponent(__VLS_546, new __VLS_546({ value: ((__VLS_ctx.month.rangeStart)), min: ((1)), max: ((12)), }));
    ({}.AInputNumber);
    ({}.AInputNumber);
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    // @ts-ignore
    [AInputNumber, AInputNumber,];
    const __VLS_548 = __VLS_547({ value: ((__VLS_ctx.month.rangeStart)), min: ((1)), max: ((12)), }, ...__VLS_functionalComponentArgsRest(__VLS_547));
    ({}({ value: ((__VLS_ctx.month.rangeStart)), min: ((1)), max: ((12)), }));
    // @ts-ignore
    [text, month,];
    const __VLS_550 = __VLS_pickFunctionalComponentCtx(__VLS_546, __VLS_548);
    (__VLS_ctx.text.Month.cycle[1]);
    const __VLS_551 = {}.AInputNumber;
    const __VLS_552 = __VLS_asFunctionalComponent(__VLS_551, new __VLS_551({ value: ((__VLS_ctx.month.rangeEnd)), min: ((1)), max: ((12)), }));
    ({}.AInputNumber);
    ({}.AInputNumber);
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    // @ts-ignore
    [AInputNumber, AInputNumber,];
    const __VLS_553 = __VLS_552({ value: ((__VLS_ctx.month.rangeEnd)), min: ((1)), max: ((12)), }, ...__VLS_functionalComponentArgsRest(__VLS_552));
    ({}({ value: ((__VLS_ctx.month.rangeEnd)), min: ((1)), max: ((12)), }));
    // @ts-ignore
    [text, month,];
    const __VLS_555 = __VLS_pickFunctionalComponentCtx(__VLS_551, __VLS_553);
    (__VLS_545.slots).default;
    const __VLS_545 = __VLS_pickFunctionalComponentCtx(__VLS_541, __VLS_543);
    (__VLS_540.slots).default;
    const __VLS_540 = __VLS_pickFunctionalComponentCtx(__VLS_536, __VLS_538);
    (__VLS_485.slots).default;
    const __VLS_485 = __VLS_pickFunctionalComponentCtx(__VLS_481, __VLS_483);
    const __VLS_475 = __VLS_pickFunctionalComponentCtx(__VLS_471, __VLS_473);
    const __VLS_556 = {}.ATabPane;
    const __VLS_557 = __VLS_asFunctionalComponent(__VLS_556, new __VLS_556({ key: ("year"), }));
    ({}.ATabPane);
    ({}.ATabPane);
    __VLS_components.ATabPane;
    __VLS_components.aTabPane;
    __VLS_components.ATabPane;
    __VLS_components.aTabPane;
    // @ts-ignore
    [ATabPane, ATabPane,];
    const __VLS_558 = __VLS_557({ key: ("year"), }, ...__VLS_functionalComponentArgsRest(__VLS_557));
    ({}({ key: ("year"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        (__VLS_560.slots).tab;
        const __VLS_561 = {}.ScheduleOutlined;
        const __VLS_562 = __VLS_asFunctionalComponent(__VLS_561, new __VLS_561({}));
        ({}.ScheduleOutlined);
        __VLS_components.ScheduleOutlined;
        // @ts-ignore
        [ScheduleOutlined,];
        const __VLS_563 = __VLS_562({}, ...__VLS_functionalComponentArgsRest(__VLS_562));
        ({}({}));
        const __VLS_565 = __VLS_pickFunctionalComponentCtx(__VLS_561, __VLS_563);
        (__VLS_ctx.text.Year.name);
        // @ts-ignore
        [text,];
    }
    const __VLS_566 = {}.ARadioGroup;
    const __VLS_567 = __VLS_asFunctionalComponent(__VLS_566, new __VLS_566({ name: ("year"), value: ((__VLS_ctx.year.cronEvery)), }));
    ({}.ARadioGroup);
    ({}.ARadioGroup);
    __VLS_components.ARadioGroup;
    __VLS_components.aRadioGroup;
    __VLS_components.ARadioGroup;
    __VLS_components.aRadioGroup;
    // @ts-ignore
    [ARadioGroup, ARadioGroup,];
    const __VLS_568 = __VLS_567({ name: ("year"), value: ((__VLS_ctx.year.cronEvery)), }, ...__VLS_functionalComponentArgsRest(__VLS_567));
    ({}({ name: ("year"), value: ((__VLS_ctx.year.cronEvery)), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ class: ("tabBody"), });
    const __VLS_571 = {}.ARow;
    const __VLS_572 = __VLS_asFunctionalComponent(__VLS_571, new __VLS_571({}));
    ({}.ARow);
    ({}.ARow);
    __VLS_components.ARow;
    __VLS_components.aRow;
    __VLS_components.ARow;
    __VLS_components.aRow;
    // @ts-ignore
    [ARow, ARow,];
    const __VLS_573 = __VLS_572({}, ...__VLS_functionalComponentArgsRest(__VLS_572));
    ({}({}));
    const __VLS_576 = {}.ARadio;
    const __VLS_577 = __VLS_asFunctionalComponent(__VLS_576, new __VLS_576({ value: ("1"), }));
    ({}.ARadio);
    ({}.ARadio);
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    // @ts-ignore
    [ARadio, ARadio,];
    const __VLS_578 = __VLS_577({ value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_577));
    ({}({ value: ("1"), }));
    (__VLS_ctx.text.Year.every);
    // @ts-ignore
    [text, year,];
    (__VLS_580.slots).default;
    const __VLS_580 = __VLS_pickFunctionalComponentCtx(__VLS_576, __VLS_578);
    (__VLS_575.slots).default;
    const __VLS_575 = __VLS_pickFunctionalComponentCtx(__VLS_571, __VLS_573);
    const __VLS_581 = {}.ARow;
    const __VLS_582 = __VLS_asFunctionalComponent(__VLS_581, new __VLS_581({}));
    ({}.ARow);
    ({}.ARow);
    __VLS_components.ARow;
    __VLS_components.aRow;
    __VLS_components.ARow;
    __VLS_components.aRow;
    // @ts-ignore
    [ARow, ARow,];
    const __VLS_583 = __VLS_582({}, ...__VLS_functionalComponentArgsRest(__VLS_582));
    ({}({}));
    const __VLS_586 = {}.ARadio;
    const __VLS_587 = __VLS_asFunctionalComponent(__VLS_586, new __VLS_586({ value: ("2"), }));
    ({}.ARadio);
    ({}.ARadio);
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    // @ts-ignore
    [ARadio, ARadio,];
    const __VLS_588 = __VLS_587({ value: ("2"), }, ...__VLS_functionalComponentArgsRest(__VLS_587));
    ({}({ value: ("2"), }));
    (__VLS_ctx.text.Year.interval[0]);
    const __VLS_591 = {}.AInputNumber;
    const __VLS_592 = __VLS_asFunctionalComponent(__VLS_591, new __VLS_591({ value: ((__VLS_ctx.year.incrementIncrement)), min: ((1)), max: ((99)), }));
    ({}.AInputNumber);
    ({}.AInputNumber);
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    // @ts-ignore
    [AInputNumber, AInputNumber,];
    const __VLS_593 = __VLS_592({ value: ((__VLS_ctx.year.incrementIncrement)), min: ((1)), max: ((99)), }, ...__VLS_functionalComponentArgsRest(__VLS_592));
    ({}({ value: ((__VLS_ctx.year.incrementIncrement)), min: ((1)), max: ((99)), }));
    // @ts-ignore
    [text, year,];
    const __VLS_595 = __VLS_pickFunctionalComponentCtx(__VLS_591, __VLS_593);
    (__VLS_ctx.text.Year.interval[1]);
    const __VLS_596 = {}.AInputNumber;
    const __VLS_597 = __VLS_asFunctionalComponent(__VLS_596, new __VLS_596({ value: ((__VLS_ctx.year.incrementStart)), min: ((2018)), max: ((2218)), }));
    ({}.AInputNumber);
    ({}.AInputNumber);
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    // @ts-ignore
    [AInputNumber, AInputNumber,];
    const __VLS_598 = __VLS_597({ value: ((__VLS_ctx.year.incrementStart)), min: ((2018)), max: ((2218)), }, ...__VLS_functionalComponentArgsRest(__VLS_597));
    ({}({ value: ((__VLS_ctx.year.incrementStart)), min: ((2018)), max: ((2218)), }));
    // @ts-ignore
    [text, year,];
    const __VLS_600 = __VLS_pickFunctionalComponentCtx(__VLS_596, __VLS_598);
    (__VLS_590.slots).default;
    const __VLS_590 = __VLS_pickFunctionalComponentCtx(__VLS_586, __VLS_588);
    (__VLS_585.slots).default;
    const __VLS_585 = __VLS_pickFunctionalComponentCtx(__VLS_581, __VLS_583);
    const __VLS_601 = {}.ARow;
    const __VLS_602 = __VLS_asFunctionalComponent(__VLS_601, new __VLS_601({}));
    ({}.ARow);
    ({}.ARow);
    __VLS_components.ARow;
    __VLS_components.aRow;
    __VLS_components.ARow;
    __VLS_components.aRow;
    // @ts-ignore
    [ARow, ARow,];
    const __VLS_603 = __VLS_602({}, ...__VLS_functionalComponentArgsRest(__VLS_602));
    ({}({}));
    const __VLS_606 = {}.ARadio;
    const __VLS_607 = __VLS_asFunctionalComponent(__VLS_606, new __VLS_606({ class: ("long"), value: ("3"), }));
    ({}.ARadio);
    ({}.ARadio);
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    // @ts-ignore
    [ARadio, ARadio,];
    const __VLS_608 = __VLS_607({ class: ("long"), value: ("3"), }, ...__VLS_functionalComponentArgsRest(__VLS_607));
    ({}({ class: ("long"), value: ("3"), }));
    (__VLS_ctx.text.Year.specific);
    const __VLS_611 = {}.ASelect;
    const __VLS_612 = __VLS_asFunctionalComponent(__VLS_611, new __VLS_611({ mode: ("multiple"), value: ((__VLS_ctx.year.specificSpecific)), }));
    ({}.ASelect);
    ({}.ASelect);
    __VLS_components.ASelect;
    __VLS_components.aSelect;
    __VLS_components.ASelect;
    __VLS_components.aSelect;
    // @ts-ignore
    [ASelect, ASelect,];
    const __VLS_613 = __VLS_612({ mode: ("multiple"), value: ((__VLS_ctx.year.specificSpecific)), }, ...__VLS_functionalComponentArgsRest(__VLS_612));
    ({}({ mode: ("multiple"), value: ((__VLS_ctx.year.specificSpecific)), }));
    for (const [val] of __VLS_getVForSourceType((200))) {
        const __VLS_616 = {}.ASelectOption;
        const __VLS_617 = __VLS_asFunctionalComponent(__VLS_616, new __VLS_616({ key: ((val)), value: ((2017 + val)), }));
        ({}.ASelectOption);
        ({}.ASelectOption);
        __VLS_components.ASelectOption;
        __VLS_components.aSelectOption;
        __VLS_components.ASelectOption;
        __VLS_components.aSelectOption;
        // @ts-ignore
        [ASelectOption, ASelectOption,];
        const __VLS_618 = __VLS_617({ key: ((val)), value: ((2017 + val)), }, ...__VLS_functionalComponentArgsRest(__VLS_617));
        ({}({ key: ((val)), value: ((2017 + val)), }));
        (2017 + val);
        // @ts-ignore
        [text, year,];
        (__VLS_620.slots).default;
        const __VLS_620 = __VLS_pickFunctionalComponentCtx(__VLS_616, __VLS_618);
    }
    (__VLS_615.slots).default;
    const __VLS_615 = __VLS_pickFunctionalComponentCtx(__VLS_611, __VLS_613);
    (__VLS_610.slots).default;
    const __VLS_610 = __VLS_pickFunctionalComponentCtx(__VLS_606, __VLS_608);
    (__VLS_605.slots).default;
    const __VLS_605 = __VLS_pickFunctionalComponentCtx(__VLS_601, __VLS_603);
    const __VLS_621 = {}.ARow;
    const __VLS_622 = __VLS_asFunctionalComponent(__VLS_621, new __VLS_621({}));
    ({}.ARow);
    ({}.ARow);
    __VLS_components.ARow;
    __VLS_components.aRow;
    __VLS_components.ARow;
    __VLS_components.aRow;
    // @ts-ignore
    [ARow, ARow,];
    const __VLS_623 = __VLS_622({}, ...__VLS_functionalComponentArgsRest(__VLS_622));
    ({}({}));
    const __VLS_626 = {}.ARadio;
    const __VLS_627 = __VLS_asFunctionalComponent(__VLS_626, new __VLS_626({ value: ("4"), }));
    ({}.ARadio);
    ({}.ARadio);
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    // @ts-ignore
    [ARadio, ARadio,];
    const __VLS_628 = __VLS_627({ value: ("4"), }, ...__VLS_functionalComponentArgsRest(__VLS_627));
    ({}({ value: ("4"), }));
    (__VLS_ctx.text.Year.cycle[0]);
    const __VLS_631 = {}.AInputNumber;
    const __VLS_632 = __VLS_asFunctionalComponent(__VLS_631, new __VLS_631({ value: ((__VLS_ctx.year.rangeStart)), min: ((2018)), max: ((2218)), }));
    ({}.AInputNumber);
    ({}.AInputNumber);
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    // @ts-ignore
    [AInputNumber, AInputNumber,];
    const __VLS_633 = __VLS_632({ value: ((__VLS_ctx.year.rangeStart)), min: ((2018)), max: ((2218)), }, ...__VLS_functionalComponentArgsRest(__VLS_632));
    ({}({ value: ((__VLS_ctx.year.rangeStart)), min: ((2018)), max: ((2218)), }));
    // @ts-ignore
    [text, year,];
    const __VLS_635 = __VLS_pickFunctionalComponentCtx(__VLS_631, __VLS_633);
    (__VLS_ctx.text.Year.cycle[1]);
    const __VLS_636 = {}.AInputNumber;
    const __VLS_637 = __VLS_asFunctionalComponent(__VLS_636, new __VLS_636({ value: ((__VLS_ctx.year.rangeEnd)), min: ((2018)), max: ((2218)), }));
    ({}.AInputNumber);
    ({}.AInputNumber);
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    // @ts-ignore
    [AInputNumber, AInputNumber,];
    const __VLS_638 = __VLS_637({ value: ((__VLS_ctx.year.rangeEnd)), min: ((2018)), max: ((2218)), }, ...__VLS_functionalComponentArgsRest(__VLS_637));
    ({}({ value: ((__VLS_ctx.year.rangeEnd)), min: ((2018)), max: ((2218)), }));
    // @ts-ignore
    [text, year,];
    const __VLS_640 = __VLS_pickFunctionalComponentCtx(__VLS_636, __VLS_638);
    (__VLS_630.slots).default;
    const __VLS_630 = __VLS_pickFunctionalComponentCtx(__VLS_626, __VLS_628);
    (__VLS_625.slots).default;
    const __VLS_625 = __VLS_pickFunctionalComponentCtx(__VLS_621, __VLS_623);
    (__VLS_570.slots).default;
    const __VLS_570 = __VLS_pickFunctionalComponentCtx(__VLS_566, __VLS_568);
    const __VLS_560 = __VLS_pickFunctionalComponentCtx(__VLS_556, __VLS_558);
    (__VLS_10.slots).default;
    const __VLS_10 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ class: ("value-warp"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ class: ("value"), });
    (__VLS_ctx.cron);
    // @ts-ignore
    [cron,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ class: ("btn-wrap"), });
    const __VLS_641 = {}.AButton;
    const __VLS_642 = __VLS_asFunctionalComponent(__VLS_641, new __VLS_641({ ...{ 'onClick': {}, }, }));
    ({}.AButton);
    ({}.AButton);
    __VLS_components.AButton;
    __VLS_components.aButton;
    __VLS_components.AButton;
    __VLS_components.aButton;
    // @ts-ignore
    [AButton, AButton,];
    const __VLS_643 = __VLS_642({ ...{ 'onClick': {}, }, }, ...__VLS_functionalComponentArgsRest(__VLS_642));
    ({}({ ...{ 'onClick': {}, }, }));
    let __VLS_646 = { 'click': __VLS_pickEvent(__VLS_644['click'], {}.onClick) };
    __VLS_646 = { click: (__VLS_ctx.close) };
    (__VLS_ctx.text.Close);
    // @ts-ignore
    [text, close,];
    (__VLS_645.slots).default;
    const __VLS_645 = __VLS_pickFunctionalComponentCtx(__VLS_641, __VLS_643);
    let __VLS_644;
    const __VLS_647 = {}.AButton;
    const __VLS_648 = __VLS_asFunctionalComponent(__VLS_647, new __VLS_647({ ...{ 'onClick': {}, }, type: ("primary"), }));
    ({}.AButton);
    ({}.AButton);
    __VLS_components.AButton;
    __VLS_components.aButton;
    __VLS_components.AButton;
    __VLS_components.aButton;
    // @ts-ignore
    [AButton, AButton,];
    const __VLS_649 = __VLS_648({ ...{ 'onClick': {}, }, type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_648));
    ({}({ ...{ 'onClick': {}, }, type: ("primary"), }));
    let __VLS_652 = { 'click': __VLS_pickEvent(__VLS_650['click'], {}.onClick) };
    __VLS_652 = { click: (__VLS_ctx.change) };
    (__VLS_ctx.text.Save);
    // @ts-ignore
    [text, change,];
    (__VLS_651.slots).default;
    const __VLS_651 = __VLS_pickFunctionalComponentCtx(__VLS_647, __VLS_649);
    let __VLS_650;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            ScheduleOutlined: ScheduleOutlined,
            i18n: i18n,
            second: second,
            minute: minute,
            hour: hour,
            day: day,
            week: week,
            month: month,
            year: year,
            text: text,
            change: change,
            close: close,
            cron: cron,
        };
    },
    props: {},
    emits: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {},
    emits: {},
});
//# sourceMappingURL=CronSelector.vue.js.map