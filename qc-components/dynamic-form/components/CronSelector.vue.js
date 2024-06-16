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
const __VLS_modelEmitsType = {};
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
    // @ts-ignore
    const __VLS_0 = {}
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
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onClick': {} }, ...{ class: ("language") }, type: ("text"), }));
    const __VLS_2 = __VLS_1({ ...{ 'onClick': {} }, ...{ class: ("language") }, type: ("text"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ 'onClick': {} }, ...{ class: ("language") }, type: ("text"), }));
    let __VLS_6;
    const __VLS_7 = {
        onClick: (...[$event]) => {
            __VLS_ctx.i18n = __VLS_ctx.i18n === 'en' ? 'cn' : 'en';
            // @ts-ignore
            [i18n, i18n,];
        }
    };
    (__VLS_ctx.i18n == "cn" ? "中文" : "English");
    // @ts-ignore
    [i18n,];
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    let __VLS_3;
    let __VLS_4;
    // @ts-ignore
    const __VLS_8 = {}
        .ATabs;
    ({}.ATabs);
    ({}.ATabs);
    __VLS_components.ATabs;
    __VLS_components.aTabs;
    __VLS_components.ATabs;
    __VLS_components.aTabs;
    // @ts-ignore
    [ATabs, ATabs,];
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({ defaultActiveKey: ("second"), }));
    const __VLS_10 = __VLS_9({ defaultActiveKey: ("second"), }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    ({}({ defaultActiveKey: ("second"), }));
    // @ts-ignore
    const __VLS_14 = {}
        .ATabPane;
    ({}.ATabPane);
    ({}.ATabPane);
    __VLS_components.ATabPane;
    __VLS_components.aTabPane;
    __VLS_components.ATabPane;
    __VLS_components.aTabPane;
    // @ts-ignore
    [ATabPane, ATabPane,];
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({ key: ("second"), }));
    const __VLS_16 = __VLS_15({ key: ("second"), }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    ({}({ key: ("second"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        (__VLS_19.slots).tab;
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: (true) }, });
        // @ts-ignore
        const __VLS_20 = {}
            .ScheduleOutlined;
        ({}.ScheduleOutlined);
        __VLS_components.ScheduleOutlined;
        // @ts-ignore
        [ScheduleOutlined,];
        // @ts-ignore
        const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({}));
        const __VLS_22 = __VLS_21({}, ...__VLS_functionalComponentArgsRest(__VLS_21));
        ({}({}));
        const __VLS_25 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
        (__VLS_ctx.text.Seconds.name);
        // @ts-ignore
        [text,];
    }
    // @ts-ignore
    const __VLS_26 = {}
        .ARadioGroup;
    ({}.ARadioGroup);
    ({}.ARadioGroup);
    __VLS_components.ARadioGroup;
    __VLS_components.aRadioGroup;
    __VLS_components.ARadioGroup;
    __VLS_components.aRadioGroup;
    // @ts-ignore
    [ARadioGroup, ARadioGroup,];
    // @ts-ignore
    const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({ name: ("second"), value: ((__VLS_ctx.second.cronEvery)), }));
    const __VLS_28 = __VLS_27({ name: ("second"), value: ((__VLS_ctx.second.cronEvery)), }, ...__VLS_functionalComponentArgsRest(__VLS_27));
    ({}({ name: ("second"), value: ((__VLS_ctx.second.cronEvery)), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("tabBody") }, });
    // @ts-ignore
    const __VLS_32 = {}
        .ARow;
    ({}.ARow);
    ({}.ARow);
    __VLS_components.ARow;
    __VLS_components.aRow;
    __VLS_components.ARow;
    __VLS_components.aRow;
    // @ts-ignore
    [ARow, ARow,];
    // @ts-ignore
    const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({}));
    const __VLS_34 = __VLS_33({}, ...__VLS_functionalComponentArgsRest(__VLS_33));
    ({}({}));
    // @ts-ignore
    const __VLS_38 = {}
        .ARadio;
    ({}.ARadio);
    ({}.ARadio);
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    // @ts-ignore
    [ARadio, ARadio,];
    // @ts-ignore
    const __VLS_39 = __VLS_asFunctionalComponent(__VLS_38, new __VLS_38({ value: ("1"), }));
    const __VLS_40 = __VLS_39({ value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_39));
    ({}({ value: ("1"), }));
    (__VLS_ctx.text.Seconds.every);
    // @ts-ignore
    [text, second,];
    (__VLS_43.slots).default;
    const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_38, __VLS_40);
    (__VLS_37.slots).default;
    const __VLS_37 = __VLS_pickFunctionalComponentCtx(__VLS_32, __VLS_34);
    // @ts-ignore
    const __VLS_44 = {}
        .ARow;
    ({}.ARow);
    ({}.ARow);
    __VLS_components.ARow;
    __VLS_components.aRow;
    __VLS_components.ARow;
    __VLS_components.aRow;
    // @ts-ignore
    [ARow, ARow,];
    // @ts-ignore
    const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({}));
    const __VLS_46 = __VLS_45({}, ...__VLS_functionalComponentArgsRest(__VLS_45));
    ({}({}));
    // @ts-ignore
    const __VLS_50 = {}
        .ARadio;
    ({}.ARadio);
    ({}.ARadio);
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    // @ts-ignore
    [ARadio, ARadio,];
    // @ts-ignore
    const __VLS_51 = __VLS_asFunctionalComponent(__VLS_50, new __VLS_50({ value: ("2"), }));
    const __VLS_52 = __VLS_51({ value: ("2"), }, ...__VLS_functionalComponentArgsRest(__VLS_51));
    ({}({ value: ("2"), }));
    (__VLS_ctx.text.Seconds.interval[0]);
    // @ts-ignore
    const __VLS_56 = {}
        .AInputNumber;
    ({}.AInputNumber);
    ({}.AInputNumber);
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    // @ts-ignore
    [AInputNumber, AInputNumber,];
    // @ts-ignore
    const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({ value: ((__VLS_ctx.second.incrementIncrement)), min: ((1)), max: ((60)), }));
    const __VLS_58 = __VLS_57({ value: ((__VLS_ctx.second.incrementIncrement)), min: ((1)), max: ((60)), }, ...__VLS_functionalComponentArgsRest(__VLS_57));
    ({}({ value: ((__VLS_ctx.second.incrementIncrement)), min: ((1)), max: ((60)), }));
    // @ts-ignore
    [text, second,];
    const __VLS_61 = __VLS_pickFunctionalComponentCtx(__VLS_56, __VLS_58);
    (__VLS_ctx.text.Seconds.interval[1] || "");
    // @ts-ignore
    const __VLS_62 = {}
        .AInputNumber;
    ({}.AInputNumber);
    ({}.AInputNumber);
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    // @ts-ignore
    [AInputNumber, AInputNumber,];
    // @ts-ignore
    const __VLS_63 = __VLS_asFunctionalComponent(__VLS_62, new __VLS_62({ value: ((__VLS_ctx.second.incrementStart)), min: ((0)), max: ((59)), }));
    const __VLS_64 = __VLS_63({ value: ((__VLS_ctx.second.incrementStart)), min: ((0)), max: ((59)), }, ...__VLS_functionalComponentArgsRest(__VLS_63));
    ({}({ value: ((__VLS_ctx.second.incrementStart)), min: ((0)), max: ((59)), }));
    // @ts-ignore
    [text, second,];
    const __VLS_67 = __VLS_pickFunctionalComponentCtx(__VLS_62, __VLS_64);
    (__VLS_ctx.text.Seconds.interval[2] || "");
    // @ts-ignore
    [text,];
    (__VLS_55.slots).default;
    const __VLS_55 = __VLS_pickFunctionalComponentCtx(__VLS_50, __VLS_52);
    (__VLS_49.slots).default;
    const __VLS_49 = __VLS_pickFunctionalComponentCtx(__VLS_44, __VLS_46);
    // @ts-ignore
    const __VLS_68 = {}
        .ARow;
    ({}.ARow);
    ({}.ARow);
    __VLS_components.ARow;
    __VLS_components.aRow;
    __VLS_components.ARow;
    __VLS_components.aRow;
    // @ts-ignore
    [ARow, ARow,];
    // @ts-ignore
    const __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68({}));
    const __VLS_70 = __VLS_69({}, ...__VLS_functionalComponentArgsRest(__VLS_69));
    ({}({}));
    // @ts-ignore
    const __VLS_74 = {}
        .ARadio;
    ({}.ARadio);
    ({}.ARadio);
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    // @ts-ignore
    [ARadio, ARadio,];
    // @ts-ignore
    const __VLS_75 = __VLS_asFunctionalComponent(__VLS_74, new __VLS_74({ ...{ class: ("long") }, value: ("3"), }));
    const __VLS_76 = __VLS_75({ ...{ class: ("long") }, value: ("3"), }, ...__VLS_functionalComponentArgsRest(__VLS_75));
    ({}({ ...{ class: ("long") }, value: ("3"), }));
    (__VLS_ctx.text.Seconds.specific);
    // @ts-ignore
    const __VLS_80 = {}
        .ASelect;
    ({}.ASelect);
    ({}.ASelect);
    __VLS_components.ASelect;
    __VLS_components.aSelect;
    __VLS_components.ASelect;
    __VLS_components.aSelect;
    // @ts-ignore
    [ASelect, ASelect,];
    // @ts-ignore
    const __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80({ mode: ("multiple"), value: ((__VLS_ctx.second.specificSpecific)), }));
    const __VLS_82 = __VLS_81({ mode: ("multiple"), value: ((__VLS_ctx.second.specificSpecific)), }, ...__VLS_functionalComponentArgsRest(__VLS_81));
    ({}({ mode: ("multiple"), value: ((__VLS_ctx.second.specificSpecific)), }));
    for (const [val] of __VLS_getVForSourceType((60))) {
        // @ts-ignore
        const __VLS_86 = {}
            .ASelectOption;
        ({}.ASelectOption);
        ({}.ASelectOption);
        __VLS_components.ASelectOption;
        __VLS_components.aSelectOption;
        __VLS_components.ASelectOption;
        __VLS_components.aSelectOption;
        // @ts-ignore
        [ASelectOption, ASelectOption,];
        // @ts-ignore
        const __VLS_87 = __VLS_asFunctionalComponent(__VLS_86, new __VLS_86({ key: ((val)), value: ((val - 1)), }));
        const __VLS_88 = __VLS_87({ key: ((val)), value: ((val - 1)), }, ...__VLS_functionalComponentArgsRest(__VLS_87));
        ({}({ key: ((val)), value: ((val - 1)), }));
        (val - 1);
        // @ts-ignore
        [text, second,];
        (__VLS_91.slots).default;
        const __VLS_91 = __VLS_pickFunctionalComponentCtx(__VLS_86, __VLS_88);
    }
    (__VLS_85.slots).default;
    const __VLS_85 = __VLS_pickFunctionalComponentCtx(__VLS_80, __VLS_82);
    (__VLS_79.slots).default;
    const __VLS_79 = __VLS_pickFunctionalComponentCtx(__VLS_74, __VLS_76);
    (__VLS_73.slots).default;
    const __VLS_73 = __VLS_pickFunctionalComponentCtx(__VLS_68, __VLS_70);
    // @ts-ignore
    const __VLS_92 = {}
        .ARow;
    ({}.ARow);
    ({}.ARow);
    __VLS_components.ARow;
    __VLS_components.aRow;
    __VLS_components.ARow;
    __VLS_components.aRow;
    // @ts-ignore
    [ARow, ARow,];
    // @ts-ignore
    const __VLS_93 = __VLS_asFunctionalComponent(__VLS_92, new __VLS_92({}));
    const __VLS_94 = __VLS_93({}, ...__VLS_functionalComponentArgsRest(__VLS_93));
    ({}({}));
    // @ts-ignore
    const __VLS_98 = {}
        .ARadio;
    ({}.ARadio);
    ({}.ARadio);
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    // @ts-ignore
    [ARadio, ARadio,];
    // @ts-ignore
    const __VLS_99 = __VLS_asFunctionalComponent(__VLS_98, new __VLS_98({ value: ("4"), }));
    const __VLS_100 = __VLS_99({ value: ("4"), }, ...__VLS_functionalComponentArgsRest(__VLS_99));
    ({}({ value: ("4"), }));
    (__VLS_ctx.text.Seconds.cycle[0]);
    // @ts-ignore
    const __VLS_104 = {}
        .AInputNumber;
    ({}.AInputNumber);
    ({}.AInputNumber);
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    // @ts-ignore
    [AInputNumber, AInputNumber,];
    // @ts-ignore
    const __VLS_105 = __VLS_asFunctionalComponent(__VLS_104, new __VLS_104({ value: ((__VLS_ctx.second.rangeStart)), min: ((1)), max: ((60)), }));
    const __VLS_106 = __VLS_105({ value: ((__VLS_ctx.second.rangeStart)), min: ((1)), max: ((60)), }, ...__VLS_functionalComponentArgsRest(__VLS_105));
    ({}({ value: ((__VLS_ctx.second.rangeStart)), min: ((1)), max: ((60)), }));
    // @ts-ignore
    [text, second,];
    const __VLS_109 = __VLS_pickFunctionalComponentCtx(__VLS_104, __VLS_106);
    (__VLS_ctx.text.Seconds.cycle[1] || "");
    // @ts-ignore
    const __VLS_110 = {}
        .AInputNumber;
    ({}.AInputNumber);
    ({}.AInputNumber);
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    // @ts-ignore
    [AInputNumber, AInputNumber,];
    // @ts-ignore
    const __VLS_111 = __VLS_asFunctionalComponent(__VLS_110, new __VLS_110({ value: ((__VLS_ctx.second.rangeEnd)), min: ((0)), max: ((59)), }));
    const __VLS_112 = __VLS_111({ value: ((__VLS_ctx.second.rangeEnd)), min: ((0)), max: ((59)), }, ...__VLS_functionalComponentArgsRest(__VLS_111));
    ({}({ value: ((__VLS_ctx.second.rangeEnd)), min: ((0)), max: ((59)), }));
    // @ts-ignore
    [text, second,];
    const __VLS_115 = __VLS_pickFunctionalComponentCtx(__VLS_110, __VLS_112);
    (__VLS_ctx.text.Seconds.cycle[2] || "");
    // @ts-ignore
    [text,];
    (__VLS_103.slots).default;
    const __VLS_103 = __VLS_pickFunctionalComponentCtx(__VLS_98, __VLS_100);
    (__VLS_97.slots).default;
    const __VLS_97 = __VLS_pickFunctionalComponentCtx(__VLS_92, __VLS_94);
    (__VLS_31.slots).default;
    const __VLS_31 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28);
    const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_14, __VLS_16);
    // @ts-ignore
    const __VLS_116 = {}
        .ATabPane;
    ({}.ATabPane);
    ({}.ATabPane);
    __VLS_components.ATabPane;
    __VLS_components.aTabPane;
    __VLS_components.ATabPane;
    __VLS_components.aTabPane;
    // @ts-ignore
    [ATabPane, ATabPane,];
    // @ts-ignore
    const __VLS_117 = __VLS_asFunctionalComponent(__VLS_116, new __VLS_116({ key: ("minute"), }));
    const __VLS_118 = __VLS_117({ key: ("minute"), }, ...__VLS_functionalComponentArgsRest(__VLS_117));
    ({}({ key: ("minute"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        (__VLS_121.slots).tab;
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        // @ts-ignore
        const __VLS_122 = {}
            .ScheduleOutlined;
        ({}.ScheduleOutlined);
        __VLS_components.ScheduleOutlined;
        // @ts-ignore
        [ScheduleOutlined,];
        // @ts-ignore
        const __VLS_123 = __VLS_asFunctionalComponent(__VLS_122, new __VLS_122({}));
        const __VLS_124 = __VLS_123({}, ...__VLS_functionalComponentArgsRest(__VLS_123));
        ({}({}));
        const __VLS_127 = __VLS_pickFunctionalComponentCtx(__VLS_122, __VLS_124);
        (__VLS_ctx.text.Minutes.name);
        // @ts-ignore
        [text,];
    }
    // @ts-ignore
    const __VLS_128 = {}
        .ARadioGroup;
    ({}.ARadioGroup);
    ({}.ARadioGroup);
    __VLS_components.ARadioGroup;
    __VLS_components.aRadioGroup;
    __VLS_components.ARadioGroup;
    __VLS_components.aRadioGroup;
    // @ts-ignore
    [ARadioGroup, ARadioGroup,];
    // @ts-ignore
    const __VLS_129 = __VLS_asFunctionalComponent(__VLS_128, new __VLS_128({ name: ("minute"), value: ((__VLS_ctx.minute.cronEvery)), }));
    const __VLS_130 = __VLS_129({ name: ("minute"), value: ((__VLS_ctx.minute.cronEvery)), }, ...__VLS_functionalComponentArgsRest(__VLS_129));
    ({}({ name: ("minute"), value: ((__VLS_ctx.minute.cronEvery)), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("tabBody") }, });
    // @ts-ignore
    const __VLS_134 = {}
        .ARow;
    ({}.ARow);
    ({}.ARow);
    __VLS_components.ARow;
    __VLS_components.aRow;
    __VLS_components.ARow;
    __VLS_components.aRow;
    // @ts-ignore
    [ARow, ARow,];
    // @ts-ignore
    const __VLS_135 = __VLS_asFunctionalComponent(__VLS_134, new __VLS_134({}));
    const __VLS_136 = __VLS_135({}, ...__VLS_functionalComponentArgsRest(__VLS_135));
    ({}({}));
    // @ts-ignore
    const __VLS_140 = {}
        .ARadio;
    ({}.ARadio);
    ({}.ARadio);
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    // @ts-ignore
    [ARadio, ARadio,];
    // @ts-ignore
    const __VLS_141 = __VLS_asFunctionalComponent(__VLS_140, new __VLS_140({ value: ("1"), }));
    const __VLS_142 = __VLS_141({ value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_141));
    ({}({ value: ("1"), }));
    (__VLS_ctx.text.Minutes.every);
    // @ts-ignore
    [text, minute,];
    (__VLS_145.slots).default;
    const __VLS_145 = __VLS_pickFunctionalComponentCtx(__VLS_140, __VLS_142);
    (__VLS_139.slots).default;
    const __VLS_139 = __VLS_pickFunctionalComponentCtx(__VLS_134, __VLS_136);
    // @ts-ignore
    const __VLS_146 = {}
        .ARow;
    ({}.ARow);
    ({}.ARow);
    __VLS_components.ARow;
    __VLS_components.aRow;
    __VLS_components.ARow;
    __VLS_components.aRow;
    // @ts-ignore
    [ARow, ARow,];
    // @ts-ignore
    const __VLS_147 = __VLS_asFunctionalComponent(__VLS_146, new __VLS_146({}));
    const __VLS_148 = __VLS_147({}, ...__VLS_functionalComponentArgsRest(__VLS_147));
    ({}({}));
    // @ts-ignore
    const __VLS_152 = {}
        .ARadio;
    ({}.ARadio);
    ({}.ARadio);
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    // @ts-ignore
    [ARadio, ARadio,];
    // @ts-ignore
    const __VLS_153 = __VLS_asFunctionalComponent(__VLS_152, new __VLS_152({ value: ("2"), }));
    const __VLS_154 = __VLS_153({ value: ("2"), }, ...__VLS_functionalComponentArgsRest(__VLS_153));
    ({}({ value: ("2"), }));
    (__VLS_ctx.text.Minutes.interval[0]);
    // @ts-ignore
    const __VLS_158 = {}
        .AInputNumber;
    ({}.AInputNumber);
    ({}.AInputNumber);
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    // @ts-ignore
    [AInputNumber, AInputNumber,];
    // @ts-ignore
    const __VLS_159 = __VLS_asFunctionalComponent(__VLS_158, new __VLS_158({ value: ((__VLS_ctx.minute.incrementIncrement)), min: ((1)), max: ((60)), }));
    const __VLS_160 = __VLS_159({ value: ((__VLS_ctx.minute.incrementIncrement)), min: ((1)), max: ((60)), }, ...__VLS_functionalComponentArgsRest(__VLS_159));
    ({}({ value: ((__VLS_ctx.minute.incrementIncrement)), min: ((1)), max: ((60)), }));
    // @ts-ignore
    [text, minute,];
    const __VLS_163 = __VLS_pickFunctionalComponentCtx(__VLS_158, __VLS_160);
    (__VLS_ctx.text.Minutes.interval[1]);
    // @ts-ignore
    const __VLS_164 = {}
        .AInputNumber;
    ({}.AInputNumber);
    ({}.AInputNumber);
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    // @ts-ignore
    [AInputNumber, AInputNumber,];
    // @ts-ignore
    const __VLS_165 = __VLS_asFunctionalComponent(__VLS_164, new __VLS_164({ value: ((__VLS_ctx.minute.incrementStart)), min: ((0)), max: ((59)), }));
    const __VLS_166 = __VLS_165({ value: ((__VLS_ctx.minute.incrementStart)), min: ((0)), max: ((59)), }, ...__VLS_functionalComponentArgsRest(__VLS_165));
    ({}({ value: ((__VLS_ctx.minute.incrementStart)), min: ((0)), max: ((59)), }));
    // @ts-ignore
    [text, minute,];
    const __VLS_169 = __VLS_pickFunctionalComponentCtx(__VLS_164, __VLS_166);
    (__VLS_ctx.text.Minutes.interval[2] || "");
    // @ts-ignore
    [text,];
    (__VLS_157.slots).default;
    const __VLS_157 = __VLS_pickFunctionalComponentCtx(__VLS_152, __VLS_154);
    (__VLS_151.slots).default;
    const __VLS_151 = __VLS_pickFunctionalComponentCtx(__VLS_146, __VLS_148);
    // @ts-ignore
    const __VLS_170 = {}
        .ARow;
    ({}.ARow);
    ({}.ARow);
    __VLS_components.ARow;
    __VLS_components.aRow;
    __VLS_components.ARow;
    __VLS_components.aRow;
    // @ts-ignore
    [ARow, ARow,];
    // @ts-ignore
    const __VLS_171 = __VLS_asFunctionalComponent(__VLS_170, new __VLS_170({}));
    const __VLS_172 = __VLS_171({}, ...__VLS_functionalComponentArgsRest(__VLS_171));
    ({}({}));
    // @ts-ignore
    const __VLS_176 = {}
        .ARadio;
    ({}.ARadio);
    ({}.ARadio);
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    // @ts-ignore
    [ARadio, ARadio,];
    // @ts-ignore
    const __VLS_177 = __VLS_asFunctionalComponent(__VLS_176, new __VLS_176({ ...{ class: ("long") }, value: ("3"), }));
    const __VLS_178 = __VLS_177({ ...{ class: ("long") }, value: ("3"), }, ...__VLS_functionalComponentArgsRest(__VLS_177));
    ({}({ ...{ class: ("long") }, value: ("3"), }));
    (__VLS_ctx.text.Minutes.specific);
    // @ts-ignore
    const __VLS_182 = {}
        .ASelect;
    ({}.ASelect);
    ({}.ASelect);
    __VLS_components.ASelect;
    __VLS_components.aSelect;
    __VLS_components.ASelect;
    __VLS_components.aSelect;
    // @ts-ignore
    [ASelect, ASelect,];
    // @ts-ignore
    const __VLS_183 = __VLS_asFunctionalComponent(__VLS_182, new __VLS_182({ mode: ("multiple"), value: ((__VLS_ctx.minute.specificSpecific)), }));
    const __VLS_184 = __VLS_183({ mode: ("multiple"), value: ((__VLS_ctx.minute.specificSpecific)), }, ...__VLS_functionalComponentArgsRest(__VLS_183));
    ({}({ mode: ("multiple"), value: ((__VLS_ctx.minute.specificSpecific)), }));
    for (const [val] of __VLS_getVForSourceType((60))) {
        // @ts-ignore
        const __VLS_188 = {}
            .ASelectOption;
        ({}.ASelectOption);
        ({}.ASelectOption);
        __VLS_components.ASelectOption;
        __VLS_components.aSelectOption;
        __VLS_components.ASelectOption;
        __VLS_components.aSelectOption;
        // @ts-ignore
        [ASelectOption, ASelectOption,];
        // @ts-ignore
        const __VLS_189 = __VLS_asFunctionalComponent(__VLS_188, new __VLS_188({ key: ((val)), value: ((val - 1)), }));
        const __VLS_190 = __VLS_189({ key: ((val)), value: ((val - 1)), }, ...__VLS_functionalComponentArgsRest(__VLS_189));
        ({}({ key: ((val)), value: ((val - 1)), }));
        (val - 1);
        // @ts-ignore
        [text, minute,];
        (__VLS_193.slots).default;
        const __VLS_193 = __VLS_pickFunctionalComponentCtx(__VLS_188, __VLS_190);
    }
    (__VLS_187.slots).default;
    const __VLS_187 = __VLS_pickFunctionalComponentCtx(__VLS_182, __VLS_184);
    (__VLS_181.slots).default;
    const __VLS_181 = __VLS_pickFunctionalComponentCtx(__VLS_176, __VLS_178);
    (__VLS_175.slots).default;
    const __VLS_175 = __VLS_pickFunctionalComponentCtx(__VLS_170, __VLS_172);
    // @ts-ignore
    const __VLS_194 = {}
        .ARow;
    ({}.ARow);
    ({}.ARow);
    __VLS_components.ARow;
    __VLS_components.aRow;
    __VLS_components.ARow;
    __VLS_components.aRow;
    // @ts-ignore
    [ARow, ARow,];
    // @ts-ignore
    const __VLS_195 = __VLS_asFunctionalComponent(__VLS_194, new __VLS_194({}));
    const __VLS_196 = __VLS_195({}, ...__VLS_functionalComponentArgsRest(__VLS_195));
    ({}({}));
    // @ts-ignore
    const __VLS_200 = {}
        .ARadio;
    ({}.ARadio);
    ({}.ARadio);
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    // @ts-ignore
    [ARadio, ARadio,];
    // @ts-ignore
    const __VLS_201 = __VLS_asFunctionalComponent(__VLS_200, new __VLS_200({ value: ("4"), }));
    const __VLS_202 = __VLS_201({ value: ("4"), }, ...__VLS_functionalComponentArgsRest(__VLS_201));
    ({}({ value: ("4"), }));
    (__VLS_ctx.text.Minutes.cycle[0]);
    // @ts-ignore
    const __VLS_206 = {}
        .AInputNumber;
    ({}.AInputNumber);
    ({}.AInputNumber);
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    // @ts-ignore
    [AInputNumber, AInputNumber,];
    // @ts-ignore
    const __VLS_207 = __VLS_asFunctionalComponent(__VLS_206, new __VLS_206({ value: ((__VLS_ctx.minute.rangeStart)), min: ((1)), max: ((60)), }));
    const __VLS_208 = __VLS_207({ value: ((__VLS_ctx.minute.rangeStart)), min: ((1)), max: ((60)), }, ...__VLS_functionalComponentArgsRest(__VLS_207));
    ({}({ value: ((__VLS_ctx.minute.rangeStart)), min: ((1)), max: ((60)), }));
    // @ts-ignore
    [text, minute,];
    const __VLS_211 = __VLS_pickFunctionalComponentCtx(__VLS_206, __VLS_208);
    (__VLS_ctx.text.Minutes.cycle[1]);
    // @ts-ignore
    const __VLS_212 = {}
        .AInputNumber;
    ({}.AInputNumber);
    ({}.AInputNumber);
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    // @ts-ignore
    [AInputNumber, AInputNumber,];
    // @ts-ignore
    const __VLS_213 = __VLS_asFunctionalComponent(__VLS_212, new __VLS_212({ value: ((__VLS_ctx.minute.rangeEnd)), min: ((0)), max: ((59)), }));
    const __VLS_214 = __VLS_213({ value: ((__VLS_ctx.minute.rangeEnd)), min: ((0)), max: ((59)), }, ...__VLS_functionalComponentArgsRest(__VLS_213));
    ({}({ value: ((__VLS_ctx.minute.rangeEnd)), min: ((0)), max: ((59)), }));
    // @ts-ignore
    [text, minute,];
    const __VLS_217 = __VLS_pickFunctionalComponentCtx(__VLS_212, __VLS_214);
    (__VLS_ctx.text.Minutes.cycle[2]);
    // @ts-ignore
    [text,];
    (__VLS_205.slots).default;
    const __VLS_205 = __VLS_pickFunctionalComponentCtx(__VLS_200, __VLS_202);
    (__VLS_199.slots).default;
    const __VLS_199 = __VLS_pickFunctionalComponentCtx(__VLS_194, __VLS_196);
    (__VLS_133.slots).default;
    const __VLS_133 = __VLS_pickFunctionalComponentCtx(__VLS_128, __VLS_130);
    const __VLS_121 = __VLS_pickFunctionalComponentCtx(__VLS_116, __VLS_118);
    // @ts-ignore
    const __VLS_218 = {}
        .ATabPane;
    ({}.ATabPane);
    ({}.ATabPane);
    __VLS_components.ATabPane;
    __VLS_components.aTabPane;
    __VLS_components.ATabPane;
    __VLS_components.aTabPane;
    // @ts-ignore
    [ATabPane, ATabPane,];
    // @ts-ignore
    const __VLS_219 = __VLS_asFunctionalComponent(__VLS_218, new __VLS_218({ key: ("hour"), }));
    const __VLS_220 = __VLS_219({ key: ("hour"), }, ...__VLS_functionalComponentArgsRest(__VLS_219));
    ({}({ key: ("hour"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        (__VLS_223.slots).tab;
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        // @ts-ignore
        const __VLS_224 = {}
            .ScheduleOutlined;
        ({}.ScheduleOutlined);
        __VLS_components.ScheduleOutlined;
        // @ts-ignore
        [ScheduleOutlined,];
        // @ts-ignore
        const __VLS_225 = __VLS_asFunctionalComponent(__VLS_224, new __VLS_224({}));
        const __VLS_226 = __VLS_225({}, ...__VLS_functionalComponentArgsRest(__VLS_225));
        ({}({}));
        const __VLS_229 = __VLS_pickFunctionalComponentCtx(__VLS_224, __VLS_226);
        (__VLS_ctx.text.Hours.name);
        // @ts-ignore
        [text,];
    }
    // @ts-ignore
    const __VLS_230 = {}
        .ARadioGroup;
    ({}.ARadioGroup);
    ({}.ARadioGroup);
    __VLS_components.ARadioGroup;
    __VLS_components.aRadioGroup;
    __VLS_components.ARadioGroup;
    __VLS_components.aRadioGroup;
    // @ts-ignore
    [ARadioGroup, ARadioGroup,];
    // @ts-ignore
    const __VLS_231 = __VLS_asFunctionalComponent(__VLS_230, new __VLS_230({ name: ("hour"), value: ((__VLS_ctx.hour.cronEvery)), }));
    const __VLS_232 = __VLS_231({ name: ("hour"), value: ((__VLS_ctx.hour.cronEvery)), }, ...__VLS_functionalComponentArgsRest(__VLS_231));
    ({}({ name: ("hour"), value: ((__VLS_ctx.hour.cronEvery)), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("tabBody") }, });
    // @ts-ignore
    const __VLS_236 = {}
        .ARow;
    ({}.ARow);
    ({}.ARow);
    __VLS_components.ARow;
    __VLS_components.aRow;
    __VLS_components.ARow;
    __VLS_components.aRow;
    // @ts-ignore
    [ARow, ARow,];
    // @ts-ignore
    const __VLS_237 = __VLS_asFunctionalComponent(__VLS_236, new __VLS_236({}));
    const __VLS_238 = __VLS_237({}, ...__VLS_functionalComponentArgsRest(__VLS_237));
    ({}({}));
    // @ts-ignore
    const __VLS_242 = {}
        .ARadio;
    ({}.ARadio);
    ({}.ARadio);
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    // @ts-ignore
    [ARadio, ARadio,];
    // @ts-ignore
    const __VLS_243 = __VLS_asFunctionalComponent(__VLS_242, new __VLS_242({ value: ("1"), }));
    const __VLS_244 = __VLS_243({ value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_243));
    ({}({ value: ("1"), }));
    (__VLS_ctx.text.Hours.every);
    // @ts-ignore
    [text, hour,];
    (__VLS_247.slots).default;
    const __VLS_247 = __VLS_pickFunctionalComponentCtx(__VLS_242, __VLS_244);
    (__VLS_241.slots).default;
    const __VLS_241 = __VLS_pickFunctionalComponentCtx(__VLS_236, __VLS_238);
    // @ts-ignore
    const __VLS_248 = {}
        .ARow;
    ({}.ARow);
    ({}.ARow);
    __VLS_components.ARow;
    __VLS_components.aRow;
    __VLS_components.ARow;
    __VLS_components.aRow;
    // @ts-ignore
    [ARow, ARow,];
    // @ts-ignore
    const __VLS_249 = __VLS_asFunctionalComponent(__VLS_248, new __VLS_248({}));
    const __VLS_250 = __VLS_249({}, ...__VLS_functionalComponentArgsRest(__VLS_249));
    ({}({}));
    // @ts-ignore
    const __VLS_254 = {}
        .ARadio;
    ({}.ARadio);
    ({}.ARadio);
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    // @ts-ignore
    [ARadio, ARadio,];
    // @ts-ignore
    const __VLS_255 = __VLS_asFunctionalComponent(__VLS_254, new __VLS_254({ value: ("2"), }));
    const __VLS_256 = __VLS_255({ value: ("2"), }, ...__VLS_functionalComponentArgsRest(__VLS_255));
    ({}({ value: ("2"), }));
    (__VLS_ctx.text.Hours.interval[0]);
    // @ts-ignore
    const __VLS_260 = {}
        .AInputNumber;
    ({}.AInputNumber);
    ({}.AInputNumber);
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    // @ts-ignore
    [AInputNumber, AInputNumber,];
    // @ts-ignore
    const __VLS_261 = __VLS_asFunctionalComponent(__VLS_260, new __VLS_260({ value: ((__VLS_ctx.hour.incrementIncrement)), min: ((0)), max: ((23)), }));
    const __VLS_262 = __VLS_261({ value: ((__VLS_ctx.hour.incrementIncrement)), min: ((0)), max: ((23)), }, ...__VLS_functionalComponentArgsRest(__VLS_261));
    ({}({ value: ((__VLS_ctx.hour.incrementIncrement)), min: ((0)), max: ((23)), }));
    // @ts-ignore
    [text, hour,];
    const __VLS_265 = __VLS_pickFunctionalComponentCtx(__VLS_260, __VLS_262);
    (__VLS_ctx.text.Hours.interval[1]);
    // @ts-ignore
    const __VLS_266 = {}
        .AInputNumber;
    ({}.AInputNumber);
    ({}.AInputNumber);
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    // @ts-ignore
    [AInputNumber, AInputNumber,];
    // @ts-ignore
    const __VLS_267 = __VLS_asFunctionalComponent(__VLS_266, new __VLS_266({ value: ((__VLS_ctx.hour.incrementStart)), min: ((0)), max: ((23)), }));
    const __VLS_268 = __VLS_267({ value: ((__VLS_ctx.hour.incrementStart)), min: ((0)), max: ((23)), }, ...__VLS_functionalComponentArgsRest(__VLS_267));
    ({}({ value: ((__VLS_ctx.hour.incrementStart)), min: ((0)), max: ((23)), }));
    // @ts-ignore
    [text, hour,];
    const __VLS_271 = __VLS_pickFunctionalComponentCtx(__VLS_266, __VLS_268);
    (__VLS_ctx.text.Hours.interval[2]);
    // @ts-ignore
    [text,];
    (__VLS_259.slots).default;
    const __VLS_259 = __VLS_pickFunctionalComponentCtx(__VLS_254, __VLS_256);
    (__VLS_253.slots).default;
    const __VLS_253 = __VLS_pickFunctionalComponentCtx(__VLS_248, __VLS_250);
    // @ts-ignore
    const __VLS_272 = {}
        .ARow;
    ({}.ARow);
    ({}.ARow);
    __VLS_components.ARow;
    __VLS_components.aRow;
    __VLS_components.ARow;
    __VLS_components.aRow;
    // @ts-ignore
    [ARow, ARow,];
    // @ts-ignore
    const __VLS_273 = __VLS_asFunctionalComponent(__VLS_272, new __VLS_272({}));
    const __VLS_274 = __VLS_273({}, ...__VLS_functionalComponentArgsRest(__VLS_273));
    ({}({}));
    // @ts-ignore
    const __VLS_278 = {}
        .ARadio;
    ({}.ARadio);
    ({}.ARadio);
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    // @ts-ignore
    [ARadio, ARadio,];
    // @ts-ignore
    const __VLS_279 = __VLS_asFunctionalComponent(__VLS_278, new __VLS_278({ ...{ class: ("long") }, value: ("3"), }));
    const __VLS_280 = __VLS_279({ ...{ class: ("long") }, value: ("3"), }, ...__VLS_functionalComponentArgsRest(__VLS_279));
    ({}({ ...{ class: ("long") }, value: ("3"), }));
    (__VLS_ctx.text.Hours.specific);
    // @ts-ignore
    const __VLS_284 = {}
        .ASelect;
    ({}.ASelect);
    ({}.ASelect);
    __VLS_components.ASelect;
    __VLS_components.aSelect;
    __VLS_components.ASelect;
    __VLS_components.aSelect;
    // @ts-ignore
    [ASelect, ASelect,];
    // @ts-ignore
    const __VLS_285 = __VLS_asFunctionalComponent(__VLS_284, new __VLS_284({ mode: ("multiple"), value: ((__VLS_ctx.hour.specificSpecific)), }));
    const __VLS_286 = __VLS_285({ mode: ("multiple"), value: ((__VLS_ctx.hour.specificSpecific)), }, ...__VLS_functionalComponentArgsRest(__VLS_285));
    ({}({ mode: ("multiple"), value: ((__VLS_ctx.hour.specificSpecific)), }));
    for (const [val] of __VLS_getVForSourceType((24))) {
        // @ts-ignore
        const __VLS_290 = {}
            .ASelectOption;
        ({}.ASelectOption);
        ({}.ASelectOption);
        __VLS_components.ASelectOption;
        __VLS_components.aSelectOption;
        __VLS_components.ASelectOption;
        __VLS_components.aSelectOption;
        // @ts-ignore
        [ASelectOption, ASelectOption,];
        // @ts-ignore
        const __VLS_291 = __VLS_asFunctionalComponent(__VLS_290, new __VLS_290({ key: ((val)), value: ((val - 1)), }));
        const __VLS_292 = __VLS_291({ key: ((val)), value: ((val - 1)), }, ...__VLS_functionalComponentArgsRest(__VLS_291));
        ({}({ key: ((val)), value: ((val - 1)), }));
        (val - 1);
        // @ts-ignore
        [text, hour,];
        (__VLS_295.slots).default;
        const __VLS_295 = __VLS_pickFunctionalComponentCtx(__VLS_290, __VLS_292);
    }
    (__VLS_289.slots).default;
    const __VLS_289 = __VLS_pickFunctionalComponentCtx(__VLS_284, __VLS_286);
    (__VLS_283.slots).default;
    const __VLS_283 = __VLS_pickFunctionalComponentCtx(__VLS_278, __VLS_280);
    (__VLS_277.slots).default;
    const __VLS_277 = __VLS_pickFunctionalComponentCtx(__VLS_272, __VLS_274);
    // @ts-ignore
    const __VLS_296 = {}
        .ARow;
    ({}.ARow);
    ({}.ARow);
    __VLS_components.ARow;
    __VLS_components.aRow;
    __VLS_components.ARow;
    __VLS_components.aRow;
    // @ts-ignore
    [ARow, ARow,];
    // @ts-ignore
    const __VLS_297 = __VLS_asFunctionalComponent(__VLS_296, new __VLS_296({}));
    const __VLS_298 = __VLS_297({}, ...__VLS_functionalComponentArgsRest(__VLS_297));
    ({}({}));
    // @ts-ignore
    const __VLS_302 = {}
        .ARadio;
    ({}.ARadio);
    ({}.ARadio);
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    // @ts-ignore
    [ARadio, ARadio,];
    // @ts-ignore
    const __VLS_303 = __VLS_asFunctionalComponent(__VLS_302, new __VLS_302({ value: ("4"), }));
    const __VLS_304 = __VLS_303({ value: ("4"), }, ...__VLS_functionalComponentArgsRest(__VLS_303));
    ({}({ value: ("4"), }));
    (__VLS_ctx.text.Hours.cycle[0]);
    // @ts-ignore
    const __VLS_308 = {}
        .AInputNumber;
    ({}.AInputNumber);
    ({}.AInputNumber);
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    // @ts-ignore
    [AInputNumber, AInputNumber,];
    // @ts-ignore
    const __VLS_309 = __VLS_asFunctionalComponent(__VLS_308, new __VLS_308({ value: ((__VLS_ctx.hour.rangeStart)), min: ((0)), max: ((23)), }));
    const __VLS_310 = __VLS_309({ value: ((__VLS_ctx.hour.rangeStart)), min: ((0)), max: ((23)), }, ...__VLS_functionalComponentArgsRest(__VLS_309));
    ({}({ value: ((__VLS_ctx.hour.rangeStart)), min: ((0)), max: ((23)), }));
    // @ts-ignore
    [text, hour,];
    const __VLS_313 = __VLS_pickFunctionalComponentCtx(__VLS_308, __VLS_310);
    (__VLS_ctx.text.Hours.cycle[1]);
    // @ts-ignore
    const __VLS_314 = {}
        .AInputNumber;
    ({}.AInputNumber);
    ({}.AInputNumber);
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    // @ts-ignore
    [AInputNumber, AInputNumber,];
    // @ts-ignore
    const __VLS_315 = __VLS_asFunctionalComponent(__VLS_314, new __VLS_314({ value: ((__VLS_ctx.hour.rangeEnd)), min: ((0)), max: ((23)), }));
    const __VLS_316 = __VLS_315({ value: ((__VLS_ctx.hour.rangeEnd)), min: ((0)), max: ((23)), }, ...__VLS_functionalComponentArgsRest(__VLS_315));
    ({}({ value: ((__VLS_ctx.hour.rangeEnd)), min: ((0)), max: ((23)), }));
    // @ts-ignore
    [text, hour,];
    const __VLS_319 = __VLS_pickFunctionalComponentCtx(__VLS_314, __VLS_316);
    (__VLS_ctx.text.Hours.cycle[2]);
    // @ts-ignore
    [text,];
    (__VLS_307.slots).default;
    const __VLS_307 = __VLS_pickFunctionalComponentCtx(__VLS_302, __VLS_304);
    (__VLS_301.slots).default;
    const __VLS_301 = __VLS_pickFunctionalComponentCtx(__VLS_296, __VLS_298);
    (__VLS_235.slots).default;
    const __VLS_235 = __VLS_pickFunctionalComponentCtx(__VLS_230, __VLS_232);
    const __VLS_223 = __VLS_pickFunctionalComponentCtx(__VLS_218, __VLS_220);
    // @ts-ignore
    const __VLS_320 = {}
        .ATabPane;
    ({}.ATabPane);
    ({}.ATabPane);
    __VLS_components.ATabPane;
    __VLS_components.aTabPane;
    __VLS_components.ATabPane;
    __VLS_components.aTabPane;
    // @ts-ignore
    [ATabPane, ATabPane,];
    // @ts-ignore
    const __VLS_321 = __VLS_asFunctionalComponent(__VLS_320, new __VLS_320({ key: ("day"), }));
    const __VLS_322 = __VLS_321({ key: ("day"), }, ...__VLS_functionalComponentArgsRest(__VLS_321));
    ({}({ key: ("day"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        (__VLS_325.slots).tab;
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        // @ts-ignore
        const __VLS_326 = {}
            .ScheduleOutlined;
        ({}.ScheduleOutlined);
        __VLS_components.ScheduleOutlined;
        // @ts-ignore
        [ScheduleOutlined,];
        // @ts-ignore
        const __VLS_327 = __VLS_asFunctionalComponent(__VLS_326, new __VLS_326({}));
        const __VLS_328 = __VLS_327({}, ...__VLS_functionalComponentArgsRest(__VLS_327));
        ({}({}));
        const __VLS_331 = __VLS_pickFunctionalComponentCtx(__VLS_326, __VLS_328);
        (__VLS_ctx.text.Day.name);
        // @ts-ignore
        [text,];
    }
    // @ts-ignore
    const __VLS_332 = {}
        .ARadioGroup;
    ({}.ARadioGroup);
    ({}.ARadioGroup);
    __VLS_components.ARadioGroup;
    __VLS_components.aRadioGroup;
    __VLS_components.ARadioGroup;
    __VLS_components.aRadioGroup;
    // @ts-ignore
    [ARadioGroup, ARadioGroup,];
    // @ts-ignore
    const __VLS_333 = __VLS_asFunctionalComponent(__VLS_332, new __VLS_332({ name: ("day"), value: ((__VLS_ctx.day.cronEvery)), }));
    const __VLS_334 = __VLS_333({ name: ("day"), value: ((__VLS_ctx.day.cronEvery)), }, ...__VLS_functionalComponentArgsRest(__VLS_333));
    ({}({ name: ("day"), value: ((__VLS_ctx.day.cronEvery)), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("tabBody") }, });
    // @ts-ignore
    const __VLS_338 = {}
        .ARow;
    ({}.ARow);
    ({}.ARow);
    __VLS_components.ARow;
    __VLS_components.aRow;
    __VLS_components.ARow;
    __VLS_components.aRow;
    // @ts-ignore
    [ARow, ARow,];
    // @ts-ignore
    const __VLS_339 = __VLS_asFunctionalComponent(__VLS_338, new __VLS_338({}));
    const __VLS_340 = __VLS_339({}, ...__VLS_functionalComponentArgsRest(__VLS_339));
    ({}({}));
    // @ts-ignore
    const __VLS_344 = {}
        .ARadio;
    ({}.ARadio);
    ({}.ARadio);
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    // @ts-ignore
    [ARadio, ARadio,];
    // @ts-ignore
    const __VLS_345 = __VLS_asFunctionalComponent(__VLS_344, new __VLS_344({ value: ("1"), }));
    const __VLS_346 = __VLS_345({ value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_345));
    ({}({ value: ("1"), }));
    (__VLS_ctx.text.Day.every);
    // @ts-ignore
    [text, day,];
    (__VLS_349.slots).default;
    const __VLS_349 = __VLS_pickFunctionalComponentCtx(__VLS_344, __VLS_346);
    (__VLS_343.slots).default;
    const __VLS_343 = __VLS_pickFunctionalComponentCtx(__VLS_338, __VLS_340);
    // @ts-ignore
    const __VLS_350 = {}
        .ARow;
    ({}.ARow);
    ({}.ARow);
    __VLS_components.ARow;
    __VLS_components.aRow;
    __VLS_components.ARow;
    __VLS_components.aRow;
    // @ts-ignore
    [ARow, ARow,];
    // @ts-ignore
    const __VLS_351 = __VLS_asFunctionalComponent(__VLS_350, new __VLS_350({}));
    const __VLS_352 = __VLS_351({}, ...__VLS_functionalComponentArgsRest(__VLS_351));
    ({}({}));
    // @ts-ignore
    const __VLS_356 = {}
        .ARadio;
    ({}.ARadio);
    ({}.ARadio);
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    // @ts-ignore
    [ARadio, ARadio,];
    // @ts-ignore
    const __VLS_357 = __VLS_asFunctionalComponent(__VLS_356, new __VLS_356({ value: ("2"), }));
    const __VLS_358 = __VLS_357({ value: ("2"), }, ...__VLS_functionalComponentArgsRest(__VLS_357));
    ({}({ value: ("2"), }));
    (__VLS_ctx.text.Day.intervalWeek[0]);
    // @ts-ignore
    const __VLS_362 = {}
        .AInputNumber;
    ({}.AInputNumber);
    ({}.AInputNumber);
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    // @ts-ignore
    [AInputNumber, AInputNumber,];
    // @ts-ignore
    const __VLS_363 = __VLS_asFunctionalComponent(__VLS_362, new __VLS_362({ value: ((__VLS_ctx.week.incrementIncrement)), min: ((1)), max: ((7)), }));
    const __VLS_364 = __VLS_363({ value: ((__VLS_ctx.week.incrementIncrement)), min: ((1)), max: ((7)), }, ...__VLS_functionalComponentArgsRest(__VLS_363));
    ({}({ value: ((__VLS_ctx.week.incrementIncrement)), min: ((1)), max: ((7)), }));
    // @ts-ignore
    [text, week,];
    const __VLS_367 = __VLS_pickFunctionalComponentCtx(__VLS_362, __VLS_364);
    (__VLS_ctx.text.Day.intervalWeek[1]);
    // @ts-ignore
    const __VLS_368 = {}
        .ASelect;
    ({}.ASelect);
    ({}.ASelect);
    __VLS_components.ASelect;
    __VLS_components.aSelect;
    __VLS_components.ASelect;
    __VLS_components.aSelect;
    // @ts-ignore
    [ASelect, ASelect,];
    // @ts-ignore
    const __VLS_369 = __VLS_asFunctionalComponent(__VLS_368, new __VLS_368({ value: ((__VLS_ctx.week.incrementStart)), }));
    const __VLS_370 = __VLS_369({ value: ((__VLS_ctx.week.incrementStart)), }, ...__VLS_functionalComponentArgsRest(__VLS_369));
    ({}({ value: ((__VLS_ctx.week.incrementStart)), }));
    for (const [val] of __VLS_getVForSourceType((7))) {
        // @ts-ignore
        const __VLS_374 = {}
            .ASelectOption;
        ({}.ASelectOption);
        ({}.ASelectOption);
        __VLS_components.ASelectOption;
        __VLS_components.aSelectOption;
        __VLS_components.ASelectOption;
        __VLS_components.aSelectOption;
        // @ts-ignore
        [ASelectOption, ASelectOption,];
        // @ts-ignore
        const __VLS_375 = __VLS_asFunctionalComponent(__VLS_374, new __VLS_374({ key: ((val)), value: ((val)), }));
        const __VLS_376 = __VLS_375({ key: ((val)), value: ((val)), }, ...__VLS_functionalComponentArgsRest(__VLS_375));
        ({}({ key: ((val)), value: ((val)), }));
        (__VLS_ctx.text.Week[val - 1]);
        // @ts-ignore
        [text, text, week,];
        (__VLS_379.slots).default;
        const __VLS_379 = __VLS_pickFunctionalComponentCtx(__VLS_374, __VLS_376);
    }
    (__VLS_373.slots).default;
    const __VLS_373 = __VLS_pickFunctionalComponentCtx(__VLS_368, __VLS_370);
    (__VLS_ctx.text.Day.intervalWeek[2]);
    // @ts-ignore
    [text,];
    (__VLS_361.slots).default;
    const __VLS_361 = __VLS_pickFunctionalComponentCtx(__VLS_356, __VLS_358);
    (__VLS_355.slots).default;
    const __VLS_355 = __VLS_pickFunctionalComponentCtx(__VLS_350, __VLS_352);
    // @ts-ignore
    const __VLS_380 = {}
        .ARow;
    ({}.ARow);
    ({}.ARow);
    __VLS_components.ARow;
    __VLS_components.aRow;
    __VLS_components.ARow;
    __VLS_components.aRow;
    // @ts-ignore
    [ARow, ARow,];
    // @ts-ignore
    const __VLS_381 = __VLS_asFunctionalComponent(__VLS_380, new __VLS_380({}));
    const __VLS_382 = __VLS_381({}, ...__VLS_functionalComponentArgsRest(__VLS_381));
    ({}({}));
    // @ts-ignore
    const __VLS_386 = {}
        .ARadio;
    ({}.ARadio);
    ({}.ARadio);
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    // @ts-ignore
    [ARadio, ARadio,];
    // @ts-ignore
    const __VLS_387 = __VLS_asFunctionalComponent(__VLS_386, new __VLS_386({ value: ("3"), }));
    const __VLS_388 = __VLS_387({ value: ("3"), }, ...__VLS_functionalComponentArgsRest(__VLS_387));
    ({}({ value: ("3"), }));
    (__VLS_ctx.text.Day.intervalDay[0]);
    // @ts-ignore
    const __VLS_392 = {}
        .AInputNumber;
    ({}.AInputNumber);
    ({}.AInputNumber);
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    // @ts-ignore
    [AInputNumber, AInputNumber,];
    // @ts-ignore
    const __VLS_393 = __VLS_asFunctionalComponent(__VLS_392, new __VLS_392({ value: ((__VLS_ctx.day.incrementIncrement)), min: ((1)), max: ((31)), }));
    const __VLS_394 = __VLS_393({ value: ((__VLS_ctx.day.incrementIncrement)), min: ((1)), max: ((31)), }, ...__VLS_functionalComponentArgsRest(__VLS_393));
    ({}({ value: ((__VLS_ctx.day.incrementIncrement)), min: ((1)), max: ((31)), }));
    // @ts-ignore
    [text, day,];
    const __VLS_397 = __VLS_pickFunctionalComponentCtx(__VLS_392, __VLS_394);
    (__VLS_ctx.text.Day.intervalDay[1]);
    // @ts-ignore
    const __VLS_398 = {}
        .AInputNumber;
    ({}.AInputNumber);
    ({}.AInputNumber);
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    // @ts-ignore
    [AInputNumber, AInputNumber,];
    // @ts-ignore
    const __VLS_399 = __VLS_asFunctionalComponent(__VLS_398, new __VLS_398({ value: ((__VLS_ctx.day.incrementStart)), min: ((1)), max: ((31)), }));
    const __VLS_400 = __VLS_399({ value: ((__VLS_ctx.day.incrementStart)), min: ((1)), max: ((31)), }, ...__VLS_functionalComponentArgsRest(__VLS_399));
    ({}({ value: ((__VLS_ctx.day.incrementStart)), min: ((1)), max: ((31)), }));
    // @ts-ignore
    [text, day,];
    const __VLS_403 = __VLS_pickFunctionalComponentCtx(__VLS_398, __VLS_400);
    (__VLS_ctx.text.Day.intervalDay[2]);
    // @ts-ignore
    [text,];
    (__VLS_391.slots).default;
    const __VLS_391 = __VLS_pickFunctionalComponentCtx(__VLS_386, __VLS_388);
    (__VLS_385.slots).default;
    const __VLS_385 = __VLS_pickFunctionalComponentCtx(__VLS_380, __VLS_382);
    // @ts-ignore
    const __VLS_404 = {}
        .ARow;
    ({}.ARow);
    ({}.ARow);
    __VLS_components.ARow;
    __VLS_components.aRow;
    __VLS_components.ARow;
    __VLS_components.aRow;
    // @ts-ignore
    [ARow, ARow,];
    // @ts-ignore
    const __VLS_405 = __VLS_asFunctionalComponent(__VLS_404, new __VLS_404({}));
    const __VLS_406 = __VLS_405({}, ...__VLS_functionalComponentArgsRest(__VLS_405));
    ({}({}));
    // @ts-ignore
    const __VLS_410 = {}
        .ARadio;
    ({}.ARadio);
    ({}.ARadio);
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    // @ts-ignore
    [ARadio, ARadio,];
    // @ts-ignore
    const __VLS_411 = __VLS_asFunctionalComponent(__VLS_410, new __VLS_410({ ...{ class: ("long") }, value: ("4"), }));
    const __VLS_412 = __VLS_411({ ...{ class: ("long") }, value: ("4"), }, ...__VLS_functionalComponentArgsRest(__VLS_411));
    ({}({ ...{ class: ("long") }, value: ("4"), }));
    (__VLS_ctx.text.Day.specificWeek);
    // @ts-ignore
    const __VLS_416 = {}
        .ASelect;
    ({}.ASelect);
    ({}.ASelect);
    __VLS_components.ASelect;
    __VLS_components.aSelect;
    __VLS_components.ASelect;
    __VLS_components.aSelect;
    // @ts-ignore
    [ASelect, ASelect,];
    // @ts-ignore
    const __VLS_417 = __VLS_asFunctionalComponent(__VLS_416, new __VLS_416({ mode: ("multiple"), value: ((__VLS_ctx.week.specificSpecific)), }));
    const __VLS_418 = __VLS_417({ mode: ("multiple"), value: ((__VLS_ctx.week.specificSpecific)), }, ...__VLS_functionalComponentArgsRest(__VLS_417));
    ({}({ mode: ("multiple"), value: ((__VLS_ctx.week.specificSpecific)), }));
    for (const [val] of __VLS_getVForSourceType((7))) {
        // @ts-ignore
        const __VLS_422 = {}
            .ASelectOption;
        ({}.ASelectOption);
        ({}.ASelectOption);
        __VLS_components.ASelectOption;
        __VLS_components.aSelectOption;
        __VLS_components.ASelectOption;
        __VLS_components.aSelectOption;
        // @ts-ignore
        [ASelectOption, ASelectOption,];
        // @ts-ignore
        const __VLS_423 = __VLS_asFunctionalComponent(__VLS_422, new __VLS_422({ key: ((val)), value: (([
                'SUN',
                'MON',
                'TUE',
                'WED',
                'THU',
                'FRI',
                'SAT',
            ][val - 1])), }));
        const __VLS_424 = __VLS_423({ key: ((val)), value: (([
                'SUN',
                'MON',
                'TUE',
                'WED',
                'THU',
                'FRI',
                'SAT',
            ][val - 1])), }, ...__VLS_functionalComponentArgsRest(__VLS_423));
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
        (__VLS_427.slots).default;
        const __VLS_427 = __VLS_pickFunctionalComponentCtx(__VLS_422, __VLS_424);
    }
    (__VLS_421.slots).default;
    const __VLS_421 = __VLS_pickFunctionalComponentCtx(__VLS_416, __VLS_418);
    (__VLS_415.slots).default;
    const __VLS_415 = __VLS_pickFunctionalComponentCtx(__VLS_410, __VLS_412);
    (__VLS_409.slots).default;
    const __VLS_409 = __VLS_pickFunctionalComponentCtx(__VLS_404, __VLS_406);
    // @ts-ignore
    const __VLS_428 = {}
        .ARow;
    ({}.ARow);
    ({}.ARow);
    __VLS_components.ARow;
    __VLS_components.aRow;
    __VLS_components.ARow;
    __VLS_components.aRow;
    // @ts-ignore
    [ARow, ARow,];
    // @ts-ignore
    const __VLS_429 = __VLS_asFunctionalComponent(__VLS_428, new __VLS_428({}));
    const __VLS_430 = __VLS_429({}, ...__VLS_functionalComponentArgsRest(__VLS_429));
    ({}({}));
    // @ts-ignore
    const __VLS_434 = {}
        .ARadio;
    ({}.ARadio);
    ({}.ARadio);
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    // @ts-ignore
    [ARadio, ARadio,];
    // @ts-ignore
    const __VLS_435 = __VLS_asFunctionalComponent(__VLS_434, new __VLS_434({ ...{ class: ("long") }, value: ("5"), }));
    const __VLS_436 = __VLS_435({ ...{ class: ("long") }, value: ("5"), }, ...__VLS_functionalComponentArgsRest(__VLS_435));
    ({}({ ...{ class: ("long") }, value: ("5"), }));
    (__VLS_ctx.text.Day.specificDay);
    // @ts-ignore
    const __VLS_440 = {}
        .ASelect;
    ({}.ASelect);
    ({}.ASelect);
    __VLS_components.ASelect;
    __VLS_components.aSelect;
    __VLS_components.ASelect;
    __VLS_components.aSelect;
    // @ts-ignore
    [ASelect, ASelect,];
    // @ts-ignore
    const __VLS_441 = __VLS_asFunctionalComponent(__VLS_440, new __VLS_440({ mode: ("multiple"), value: ((__VLS_ctx.day.specificSpecific)), }));
    const __VLS_442 = __VLS_441({ mode: ("multiple"), value: ((__VLS_ctx.day.specificSpecific)), }, ...__VLS_functionalComponentArgsRest(__VLS_441));
    ({}({ mode: ("multiple"), value: ((__VLS_ctx.day.specificSpecific)), }));
    for (const [val] of __VLS_getVForSourceType((31))) {
        // @ts-ignore
        const __VLS_446 = {}
            .ASelectOption;
        ({}.ASelectOption);
        ({}.ASelectOption);
        __VLS_components.ASelectOption;
        __VLS_components.aSelectOption;
        __VLS_components.ASelectOption;
        __VLS_components.aSelectOption;
        // @ts-ignore
        [ASelectOption, ASelectOption,];
        // @ts-ignore
        const __VLS_447 = __VLS_asFunctionalComponent(__VLS_446, new __VLS_446({ key: ((val)), value: ((val)), }));
        const __VLS_448 = __VLS_447({ key: ((val)), value: ((val)), }, ...__VLS_functionalComponentArgsRest(__VLS_447));
        ({}({ key: ((val)), value: ((val)), }));
        (val);
        // @ts-ignore
        [text, day,];
        (__VLS_451.slots).default;
        const __VLS_451 = __VLS_pickFunctionalComponentCtx(__VLS_446, __VLS_448);
    }
    (__VLS_445.slots).default;
    const __VLS_445 = __VLS_pickFunctionalComponentCtx(__VLS_440, __VLS_442);
    (__VLS_439.slots).default;
    const __VLS_439 = __VLS_pickFunctionalComponentCtx(__VLS_434, __VLS_436);
    (__VLS_433.slots).default;
    const __VLS_433 = __VLS_pickFunctionalComponentCtx(__VLS_428, __VLS_430);
    // @ts-ignore
    const __VLS_452 = {}
        .ARow;
    ({}.ARow);
    ({}.ARow);
    __VLS_components.ARow;
    __VLS_components.aRow;
    __VLS_components.ARow;
    __VLS_components.aRow;
    // @ts-ignore
    [ARow, ARow,];
    // @ts-ignore
    const __VLS_453 = __VLS_asFunctionalComponent(__VLS_452, new __VLS_452({}));
    const __VLS_454 = __VLS_453({}, ...__VLS_functionalComponentArgsRest(__VLS_453));
    ({}({}));
    // @ts-ignore
    const __VLS_458 = {}
        .ARadio;
    ({}.ARadio);
    ({}.ARadio);
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    // @ts-ignore
    [ARadio, ARadio,];
    // @ts-ignore
    const __VLS_459 = __VLS_asFunctionalComponent(__VLS_458, new __VLS_458({ value: ("6"), }));
    const __VLS_460 = __VLS_459({ value: ("6"), }, ...__VLS_functionalComponentArgsRest(__VLS_459));
    ({}({ value: ("6"), }));
    (__VLS_ctx.text.Day.lastDay);
    // @ts-ignore
    [text,];
    (__VLS_463.slots).default;
    const __VLS_463 = __VLS_pickFunctionalComponentCtx(__VLS_458, __VLS_460);
    (__VLS_457.slots).default;
    const __VLS_457 = __VLS_pickFunctionalComponentCtx(__VLS_452, __VLS_454);
    // @ts-ignore
    const __VLS_464 = {}
        .ARow;
    ({}.ARow);
    ({}.ARow);
    __VLS_components.ARow;
    __VLS_components.aRow;
    __VLS_components.ARow;
    __VLS_components.aRow;
    // @ts-ignore
    [ARow, ARow,];
    // @ts-ignore
    const __VLS_465 = __VLS_asFunctionalComponent(__VLS_464, new __VLS_464({}));
    const __VLS_466 = __VLS_465({}, ...__VLS_functionalComponentArgsRest(__VLS_465));
    ({}({}));
    // @ts-ignore
    const __VLS_470 = {}
        .ARadio;
    ({}.ARadio);
    ({}.ARadio);
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    // @ts-ignore
    [ARadio, ARadio,];
    // @ts-ignore
    const __VLS_471 = __VLS_asFunctionalComponent(__VLS_470, new __VLS_470({ value: ("7"), }));
    const __VLS_472 = __VLS_471({ value: ("7"), }, ...__VLS_functionalComponentArgsRest(__VLS_471));
    ({}({ value: ("7"), }));
    (__VLS_ctx.text.Day.lastWeekday);
    // @ts-ignore
    [text,];
    (__VLS_475.slots).default;
    const __VLS_475 = __VLS_pickFunctionalComponentCtx(__VLS_470, __VLS_472);
    (__VLS_469.slots).default;
    const __VLS_469 = __VLS_pickFunctionalComponentCtx(__VLS_464, __VLS_466);
    // @ts-ignore
    const __VLS_476 = {}
        .ARow;
    ({}.ARow);
    ({}.ARow);
    __VLS_components.ARow;
    __VLS_components.aRow;
    __VLS_components.ARow;
    __VLS_components.aRow;
    // @ts-ignore
    [ARow, ARow,];
    // @ts-ignore
    const __VLS_477 = __VLS_asFunctionalComponent(__VLS_476, new __VLS_476({}));
    const __VLS_478 = __VLS_477({}, ...__VLS_functionalComponentArgsRest(__VLS_477));
    ({}({}));
    // @ts-ignore
    const __VLS_482 = {}
        .ARadio;
    ({}.ARadio);
    ({}.ARadio);
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    // @ts-ignore
    [ARadio, ARadio,];
    // @ts-ignore
    const __VLS_483 = __VLS_asFunctionalComponent(__VLS_482, new __VLS_482({ value: ("8"), }));
    const __VLS_484 = __VLS_483({ value: ("8"), }, ...__VLS_functionalComponentArgsRest(__VLS_483));
    ({}({ value: ("8"), }));
    (__VLS_ctx.text.Day.lastWeek[0]);
    // @ts-ignore
    const __VLS_488 = {}
        .ASelect;
    ({}.ASelect);
    ({}.ASelect);
    __VLS_components.ASelect;
    __VLS_components.aSelect;
    __VLS_components.ASelect;
    __VLS_components.aSelect;
    // @ts-ignore
    [ASelect, ASelect,];
    // @ts-ignore
    const __VLS_489 = __VLS_asFunctionalComponent(__VLS_488, new __VLS_488({ value: ((__VLS_ctx.week.cronLastSpecificDomweek)), }));
    const __VLS_490 = __VLS_489({ value: ((__VLS_ctx.week.cronLastSpecificDomweek)), }, ...__VLS_functionalComponentArgsRest(__VLS_489));
    ({}({ value: ((__VLS_ctx.week.cronLastSpecificDomweek)), }));
    for (const [val] of __VLS_getVForSourceType((7))) {
        // @ts-ignore
        const __VLS_494 = {}
            .ASelectOption;
        ({}.ASelectOption);
        ({}.ASelectOption);
        __VLS_components.ASelectOption;
        __VLS_components.aSelectOption;
        __VLS_components.ASelectOption;
        __VLS_components.aSelectOption;
        // @ts-ignore
        [ASelectOption, ASelectOption,];
        // @ts-ignore
        const __VLS_495 = __VLS_asFunctionalComponent(__VLS_494, new __VLS_494({ key: ((val)), value: ((val)), }));
        const __VLS_496 = __VLS_495({ key: ((val)), value: ((val)), }, ...__VLS_functionalComponentArgsRest(__VLS_495));
        ({}({ key: ((val)), value: ((val)), }));
        (__VLS_ctx.text.Week[val - 1]);
        // @ts-ignore
        [text, text, week,];
        (__VLS_499.slots).default;
        const __VLS_499 = __VLS_pickFunctionalComponentCtx(__VLS_494, __VLS_496);
    }
    (__VLS_493.slots).default;
    const __VLS_493 = __VLS_pickFunctionalComponentCtx(__VLS_488, __VLS_490);
    (__VLS_ctx.text.Day.lastWeek[1] || "");
    // @ts-ignore
    [text,];
    (__VLS_487.slots).default;
    const __VLS_487 = __VLS_pickFunctionalComponentCtx(__VLS_482, __VLS_484);
    (__VLS_481.slots).default;
    const __VLS_481 = __VLS_pickFunctionalComponentCtx(__VLS_476, __VLS_478);
    // @ts-ignore
    const __VLS_500 = {}
        .ARow;
    ({}.ARow);
    ({}.ARow);
    __VLS_components.ARow;
    __VLS_components.aRow;
    __VLS_components.ARow;
    __VLS_components.aRow;
    // @ts-ignore
    [ARow, ARow,];
    // @ts-ignore
    const __VLS_501 = __VLS_asFunctionalComponent(__VLS_500, new __VLS_500({}));
    const __VLS_502 = __VLS_501({}, ...__VLS_functionalComponentArgsRest(__VLS_501));
    ({}({}));
    // @ts-ignore
    const __VLS_506 = {}
        .ARadio;
    ({}.ARadio);
    ({}.ARadio);
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    // @ts-ignore
    [ARadio, ARadio,];
    // @ts-ignore
    const __VLS_507 = __VLS_asFunctionalComponent(__VLS_506, new __VLS_506({ value: ("9"), }));
    const __VLS_508 = __VLS_507({ value: ("9"), }, ...__VLS_functionalComponentArgsRest(__VLS_507));
    ({}({ value: ("9"), }));
    // @ts-ignore
    const __VLS_512 = {}
        .AInputNumber;
    ({}.AInputNumber);
    ({}.AInputNumber);
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    // @ts-ignore
    [AInputNumber, AInputNumber,];
    // @ts-ignore
    const __VLS_513 = __VLS_asFunctionalComponent(__VLS_512, new __VLS_512({ value: ((__VLS_ctx.day.cronDaysBeforeEomMinus)), min: ((1)), max: ((31)), }));
    const __VLS_514 = __VLS_513({ value: ((__VLS_ctx.day.cronDaysBeforeEomMinus)), min: ((1)), max: ((31)), }, ...__VLS_functionalComponentArgsRest(__VLS_513));
    ({}({ value: ((__VLS_ctx.day.cronDaysBeforeEomMinus)), min: ((1)), max: ((31)), }));
    // @ts-ignore
    [day,];
    const __VLS_517 = __VLS_pickFunctionalComponentCtx(__VLS_512, __VLS_514);
    (__VLS_ctx.text.Day.beforeEndMonth[0]);
    // @ts-ignore
    [text,];
    (__VLS_511.slots).default;
    const __VLS_511 = __VLS_pickFunctionalComponentCtx(__VLS_506, __VLS_508);
    (__VLS_505.slots).default;
    const __VLS_505 = __VLS_pickFunctionalComponentCtx(__VLS_500, __VLS_502);
    // @ts-ignore
    const __VLS_518 = {}
        .ARow;
    ({}.ARow);
    ({}.ARow);
    __VLS_components.ARow;
    __VLS_components.aRow;
    __VLS_components.ARow;
    __VLS_components.aRow;
    // @ts-ignore
    [ARow, ARow,];
    // @ts-ignore
    const __VLS_519 = __VLS_asFunctionalComponent(__VLS_518, new __VLS_518({}));
    const __VLS_520 = __VLS_519({}, ...__VLS_functionalComponentArgsRest(__VLS_519));
    ({}({}));
    // @ts-ignore
    const __VLS_524 = {}
        .ARadio;
    ({}.ARadio);
    ({}.ARadio);
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    // @ts-ignore
    [ARadio, ARadio,];
    // @ts-ignore
    const __VLS_525 = __VLS_asFunctionalComponent(__VLS_524, new __VLS_524({ value: ("10"), }));
    const __VLS_526 = __VLS_525({ value: ("10"), }, ...__VLS_functionalComponentArgsRest(__VLS_525));
    ({}({ value: ("10"), }));
    (__VLS_ctx.text.Day.nearestWeekday[0]);
    // @ts-ignore
    const __VLS_530 = {}
        .AInputNumber;
    ({}.AInputNumber);
    ({}.AInputNumber);
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    // @ts-ignore
    [AInputNumber, AInputNumber,];
    // @ts-ignore
    const __VLS_531 = __VLS_asFunctionalComponent(__VLS_530, new __VLS_530({ value: ((__VLS_ctx.day.cronDaysNearestweekday)), min: ((1)), max: ((31)), }));
    const __VLS_532 = __VLS_531({ value: ((__VLS_ctx.day.cronDaysNearestweekday)), min: ((1)), max: ((31)), }, ...__VLS_functionalComponentArgsRest(__VLS_531));
    ({}({ value: ((__VLS_ctx.day.cronDaysNearestweekday)), min: ((1)), max: ((31)), }));
    // @ts-ignore
    [text, day,];
    const __VLS_535 = __VLS_pickFunctionalComponentCtx(__VLS_530, __VLS_532);
    (__VLS_ctx.text.Day.nearestWeekday[1]);
    // @ts-ignore
    [text,];
    (__VLS_529.slots).default;
    const __VLS_529 = __VLS_pickFunctionalComponentCtx(__VLS_524, __VLS_526);
    (__VLS_523.slots).default;
    const __VLS_523 = __VLS_pickFunctionalComponentCtx(__VLS_518, __VLS_520);
    // @ts-ignore
    const __VLS_536 = {}
        .ARow;
    ({}.ARow);
    ({}.ARow);
    __VLS_components.ARow;
    __VLS_components.aRow;
    __VLS_components.ARow;
    __VLS_components.aRow;
    // @ts-ignore
    [ARow, ARow,];
    // @ts-ignore
    const __VLS_537 = __VLS_asFunctionalComponent(__VLS_536, new __VLS_536({}));
    const __VLS_538 = __VLS_537({}, ...__VLS_functionalComponentArgsRest(__VLS_537));
    ({}({}));
    // @ts-ignore
    const __VLS_542 = {}
        .ARadio;
    ({}.ARadio);
    ({}.ARadio);
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    // @ts-ignore
    [ARadio, ARadio,];
    // @ts-ignore
    const __VLS_543 = __VLS_asFunctionalComponent(__VLS_542, new __VLS_542({ value: ("11"), }));
    const __VLS_544 = __VLS_543({ value: ("11"), }, ...__VLS_functionalComponentArgsRest(__VLS_543));
    ({}({ value: ("11"), }));
    (__VLS_ctx.text.Day.someWeekday[0]);
    // @ts-ignore
    const __VLS_548 = {}
        .AInputNumber;
    ({}.AInputNumber);
    ({}.AInputNumber);
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    // @ts-ignore
    [AInputNumber, AInputNumber,];
    // @ts-ignore
    const __VLS_549 = __VLS_asFunctionalComponent(__VLS_548, new __VLS_548({ value: ((__VLS_ctx.week.cronNthDayNth)), min: ((1)), max: ((5)), }));
    const __VLS_550 = __VLS_549({ value: ((__VLS_ctx.week.cronNthDayNth)), min: ((1)), max: ((5)), }, ...__VLS_functionalComponentArgsRest(__VLS_549));
    ({}({ value: ((__VLS_ctx.week.cronNthDayNth)), min: ((1)), max: ((5)), }));
    // @ts-ignore
    [text, week,];
    const __VLS_553 = __VLS_pickFunctionalComponentCtx(__VLS_548, __VLS_550);
    // @ts-ignore
    const __VLS_554 = {}
        .ASelect;
    ({}.ASelect);
    ({}.ASelect);
    __VLS_components.ASelect;
    __VLS_components.aSelect;
    __VLS_components.ASelect;
    __VLS_components.aSelect;
    // @ts-ignore
    [ASelect, ASelect,];
    // @ts-ignore
    const __VLS_555 = __VLS_asFunctionalComponent(__VLS_554, new __VLS_554({ value: ((__VLS_ctx.week.cronNthDayDay)), }));
    const __VLS_556 = __VLS_555({ value: ((__VLS_ctx.week.cronNthDayDay)), }, ...__VLS_functionalComponentArgsRest(__VLS_555));
    ({}({ value: ((__VLS_ctx.week.cronNthDayDay)), }));
    for (const [val] of __VLS_getVForSourceType((7))) {
        // @ts-ignore
        const __VLS_560 = {}
            .ASelectOption;
        ({}.ASelectOption);
        ({}.ASelectOption);
        __VLS_components.ASelectOption;
        __VLS_components.aSelectOption;
        __VLS_components.ASelectOption;
        __VLS_components.aSelectOption;
        // @ts-ignore
        [ASelectOption, ASelectOption,];
        // @ts-ignore
        const __VLS_561 = __VLS_asFunctionalComponent(__VLS_560, new __VLS_560({ key: ((val)), value: ((val)), }));
        const __VLS_562 = __VLS_561({ key: ((val)), value: ((val)), }, ...__VLS_functionalComponentArgsRest(__VLS_561));
        ({}({ key: ((val)), value: ((val)), }));
        (__VLS_ctx.text.Week[val - 1]);
        // @ts-ignore
        [text, week,];
        (__VLS_565.slots).default;
        const __VLS_565 = __VLS_pickFunctionalComponentCtx(__VLS_560, __VLS_562);
    }
    (__VLS_559.slots).default;
    const __VLS_559 = __VLS_pickFunctionalComponentCtx(__VLS_554, __VLS_556);
    (__VLS_ctx.text.Day.someWeekday[1]);
    // @ts-ignore
    [text,];
    (__VLS_547.slots).default;
    const __VLS_547 = __VLS_pickFunctionalComponentCtx(__VLS_542, __VLS_544);
    (__VLS_541.slots).default;
    const __VLS_541 = __VLS_pickFunctionalComponentCtx(__VLS_536, __VLS_538);
    (__VLS_337.slots).default;
    const __VLS_337 = __VLS_pickFunctionalComponentCtx(__VLS_332, __VLS_334);
    const __VLS_325 = __VLS_pickFunctionalComponentCtx(__VLS_320, __VLS_322);
    // @ts-ignore
    const __VLS_566 = {}
        .ATabPane;
    ({}.ATabPane);
    ({}.ATabPane);
    __VLS_components.ATabPane;
    __VLS_components.aTabPane;
    __VLS_components.ATabPane;
    __VLS_components.aTabPane;
    // @ts-ignore
    [ATabPane, ATabPane,];
    // @ts-ignore
    const __VLS_567 = __VLS_asFunctionalComponent(__VLS_566, new __VLS_566({ key: ("month"), }));
    const __VLS_568 = __VLS_567({ key: ("month"), }, ...__VLS_functionalComponentArgsRest(__VLS_567));
    ({}({ key: ("month"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        (__VLS_571.slots).tab;
        // @ts-ignore
        const __VLS_572 = {}
            .ScheduleOutlined;
        ({}.ScheduleOutlined);
        __VLS_components.ScheduleOutlined;
        // @ts-ignore
        [ScheduleOutlined,];
        // @ts-ignore
        const __VLS_573 = __VLS_asFunctionalComponent(__VLS_572, new __VLS_572({}));
        const __VLS_574 = __VLS_573({}, ...__VLS_functionalComponentArgsRest(__VLS_573));
        ({}({}));
        const __VLS_577 = __VLS_pickFunctionalComponentCtx(__VLS_572, __VLS_574);
        (__VLS_ctx.text.Month.name);
        // @ts-ignore
        [text,];
    }
    // @ts-ignore
    const __VLS_578 = {}
        .ARadioGroup;
    ({}.ARadioGroup);
    ({}.ARadioGroup);
    __VLS_components.ARadioGroup;
    __VLS_components.aRadioGroup;
    __VLS_components.ARadioGroup;
    __VLS_components.aRadioGroup;
    // @ts-ignore
    [ARadioGroup, ARadioGroup,];
    // @ts-ignore
    const __VLS_579 = __VLS_asFunctionalComponent(__VLS_578, new __VLS_578({ name: ("month"), value: ((__VLS_ctx.month.cronEvery)), }));
    const __VLS_580 = __VLS_579({ name: ("month"), value: ((__VLS_ctx.month.cronEvery)), }, ...__VLS_functionalComponentArgsRest(__VLS_579));
    ({}({ name: ("month"), value: ((__VLS_ctx.month.cronEvery)), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("tabBody") }, });
    // @ts-ignore
    const __VLS_584 = {}
        .ARow;
    ({}.ARow);
    ({}.ARow);
    __VLS_components.ARow;
    __VLS_components.aRow;
    __VLS_components.ARow;
    __VLS_components.aRow;
    // @ts-ignore
    [ARow, ARow,];
    // @ts-ignore
    const __VLS_585 = __VLS_asFunctionalComponent(__VLS_584, new __VLS_584({}));
    const __VLS_586 = __VLS_585({}, ...__VLS_functionalComponentArgsRest(__VLS_585));
    ({}({}));
    // @ts-ignore
    const __VLS_590 = {}
        .ARadio;
    ({}.ARadio);
    ({}.ARadio);
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    // @ts-ignore
    [ARadio, ARadio,];
    // @ts-ignore
    const __VLS_591 = __VLS_asFunctionalComponent(__VLS_590, new __VLS_590({ value: ("1"), }));
    const __VLS_592 = __VLS_591({ value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_591));
    ({}({ value: ("1"), }));
    (__VLS_ctx.text.Month.every);
    // @ts-ignore
    [text, month,];
    (__VLS_595.slots).default;
    const __VLS_595 = __VLS_pickFunctionalComponentCtx(__VLS_590, __VLS_592);
    (__VLS_589.slots).default;
    const __VLS_589 = __VLS_pickFunctionalComponentCtx(__VLS_584, __VLS_586);
    // @ts-ignore
    const __VLS_596 = {}
        .ARow;
    ({}.ARow);
    ({}.ARow);
    __VLS_components.ARow;
    __VLS_components.aRow;
    __VLS_components.ARow;
    __VLS_components.aRow;
    // @ts-ignore
    [ARow, ARow,];
    // @ts-ignore
    const __VLS_597 = __VLS_asFunctionalComponent(__VLS_596, new __VLS_596({}));
    const __VLS_598 = __VLS_597({}, ...__VLS_functionalComponentArgsRest(__VLS_597));
    ({}({}));
    // @ts-ignore
    const __VLS_602 = {}
        .ARadio;
    ({}.ARadio);
    ({}.ARadio);
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    // @ts-ignore
    [ARadio, ARadio,];
    // @ts-ignore
    const __VLS_603 = __VLS_asFunctionalComponent(__VLS_602, new __VLS_602({ value: ("2"), }));
    const __VLS_604 = __VLS_603({ value: ("2"), }, ...__VLS_functionalComponentArgsRest(__VLS_603));
    ({}({ value: ("2"), }));
    (__VLS_ctx.text.Month.interval[0]);
    // @ts-ignore
    const __VLS_608 = {}
        .AInputNumber;
    ({}.AInputNumber);
    ({}.AInputNumber);
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    // @ts-ignore
    [AInputNumber, AInputNumber,];
    // @ts-ignore
    const __VLS_609 = __VLS_asFunctionalComponent(__VLS_608, new __VLS_608({ value: ((__VLS_ctx.month.incrementIncrement)), min: ((0)), max: ((12)), }));
    const __VLS_610 = __VLS_609({ value: ((__VLS_ctx.month.incrementIncrement)), min: ((0)), max: ((12)), }, ...__VLS_functionalComponentArgsRest(__VLS_609));
    ({}({ value: ((__VLS_ctx.month.incrementIncrement)), min: ((0)), max: ((12)), }));
    // @ts-ignore
    [text, month,];
    const __VLS_613 = __VLS_pickFunctionalComponentCtx(__VLS_608, __VLS_610);
    (__VLS_ctx.text.Month.interval[1]);
    // @ts-ignore
    const __VLS_614 = {}
        .AInputNumber;
    ({}.AInputNumber);
    ({}.AInputNumber);
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    // @ts-ignore
    [AInputNumber, AInputNumber,];
    // @ts-ignore
    const __VLS_615 = __VLS_asFunctionalComponent(__VLS_614, new __VLS_614({ value: ((__VLS_ctx.month.incrementStart)), min: ((0)), max: ((12)), }));
    const __VLS_616 = __VLS_615({ value: ((__VLS_ctx.month.incrementStart)), min: ((0)), max: ((12)), }, ...__VLS_functionalComponentArgsRest(__VLS_615));
    ({}({ value: ((__VLS_ctx.month.incrementStart)), min: ((0)), max: ((12)), }));
    // @ts-ignore
    [text, month,];
    const __VLS_619 = __VLS_pickFunctionalComponentCtx(__VLS_614, __VLS_616);
    (__VLS_607.slots).default;
    const __VLS_607 = __VLS_pickFunctionalComponentCtx(__VLS_602, __VLS_604);
    (__VLS_601.slots).default;
    const __VLS_601 = __VLS_pickFunctionalComponentCtx(__VLS_596, __VLS_598);
    // @ts-ignore
    const __VLS_620 = {}
        .ARow;
    ({}.ARow);
    ({}.ARow);
    __VLS_components.ARow;
    __VLS_components.aRow;
    __VLS_components.ARow;
    __VLS_components.aRow;
    // @ts-ignore
    [ARow, ARow,];
    // @ts-ignore
    const __VLS_621 = __VLS_asFunctionalComponent(__VLS_620, new __VLS_620({}));
    const __VLS_622 = __VLS_621({}, ...__VLS_functionalComponentArgsRest(__VLS_621));
    ({}({}));
    // @ts-ignore
    const __VLS_626 = {}
        .ARadio;
    ({}.ARadio);
    ({}.ARadio);
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    // @ts-ignore
    [ARadio, ARadio,];
    // @ts-ignore
    const __VLS_627 = __VLS_asFunctionalComponent(__VLS_626, new __VLS_626({ ...{ class: ("long") }, value: ("3"), }));
    const __VLS_628 = __VLS_627({ ...{ class: ("long") }, value: ("3"), }, ...__VLS_functionalComponentArgsRest(__VLS_627));
    ({}({ ...{ class: ("long") }, value: ("3"), }));
    (__VLS_ctx.text.Month.specific);
    // @ts-ignore
    const __VLS_632 = {}
        .ASelect;
    ({}.ASelect);
    ({}.ASelect);
    __VLS_components.ASelect;
    __VLS_components.aSelect;
    __VLS_components.ASelect;
    __VLS_components.aSelect;
    // @ts-ignore
    [ASelect, ASelect,];
    // @ts-ignore
    const __VLS_633 = __VLS_asFunctionalComponent(__VLS_632, new __VLS_632({ mode: ("multiple"), value: ((__VLS_ctx.month.specificSpecific)), }));
    const __VLS_634 = __VLS_633({ mode: ("multiple"), value: ((__VLS_ctx.month.specificSpecific)), }, ...__VLS_functionalComponentArgsRest(__VLS_633));
    ({}({ mode: ("multiple"), value: ((__VLS_ctx.month.specificSpecific)), }));
    for (const [val] of __VLS_getVForSourceType((12))) {
        // @ts-ignore
        const __VLS_638 = {}
            .ASelectOption;
        ({}.ASelectOption);
        ({}.ASelectOption);
        __VLS_components.ASelectOption;
        __VLS_components.aSelectOption;
        __VLS_components.ASelectOption;
        __VLS_components.aSelectOption;
        // @ts-ignore
        [ASelectOption, ASelectOption,];
        // @ts-ignore
        const __VLS_639 = __VLS_asFunctionalComponent(__VLS_638, new __VLS_638({ key: ((val)), value: ((val)), }));
        const __VLS_640 = __VLS_639({ key: ((val)), value: ((val)), }, ...__VLS_functionalComponentArgsRest(__VLS_639));
        ({}({ key: ((val)), value: ((val)), }));
        (val);
        // @ts-ignore
        [text, month,];
        (__VLS_643.slots).default;
        const __VLS_643 = __VLS_pickFunctionalComponentCtx(__VLS_638, __VLS_640);
    }
    (__VLS_637.slots).default;
    const __VLS_637 = __VLS_pickFunctionalComponentCtx(__VLS_632, __VLS_634);
    (__VLS_631.slots).default;
    const __VLS_631 = __VLS_pickFunctionalComponentCtx(__VLS_626, __VLS_628);
    (__VLS_625.slots).default;
    const __VLS_625 = __VLS_pickFunctionalComponentCtx(__VLS_620, __VLS_622);
    // @ts-ignore
    const __VLS_644 = {}
        .ARow;
    ({}.ARow);
    ({}.ARow);
    __VLS_components.ARow;
    __VLS_components.aRow;
    __VLS_components.ARow;
    __VLS_components.aRow;
    // @ts-ignore
    [ARow, ARow,];
    // @ts-ignore
    const __VLS_645 = __VLS_asFunctionalComponent(__VLS_644, new __VLS_644({}));
    const __VLS_646 = __VLS_645({}, ...__VLS_functionalComponentArgsRest(__VLS_645));
    ({}({}));
    // @ts-ignore
    const __VLS_650 = {}
        .ARadio;
    ({}.ARadio);
    ({}.ARadio);
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    // @ts-ignore
    [ARadio, ARadio,];
    // @ts-ignore
    const __VLS_651 = __VLS_asFunctionalComponent(__VLS_650, new __VLS_650({ value: ("4"), }));
    const __VLS_652 = __VLS_651({ value: ("4"), }, ...__VLS_functionalComponentArgsRest(__VLS_651));
    ({}({ value: ("4"), }));
    (__VLS_ctx.text.Month.cycle[0]);
    // @ts-ignore
    const __VLS_656 = {}
        .AInputNumber;
    ({}.AInputNumber);
    ({}.AInputNumber);
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    // @ts-ignore
    [AInputNumber, AInputNumber,];
    // @ts-ignore
    const __VLS_657 = __VLS_asFunctionalComponent(__VLS_656, new __VLS_656({ value: ((__VLS_ctx.month.rangeStart)), min: ((1)), max: ((12)), }));
    const __VLS_658 = __VLS_657({ value: ((__VLS_ctx.month.rangeStart)), min: ((1)), max: ((12)), }, ...__VLS_functionalComponentArgsRest(__VLS_657));
    ({}({ value: ((__VLS_ctx.month.rangeStart)), min: ((1)), max: ((12)), }));
    // @ts-ignore
    [text, month,];
    const __VLS_661 = __VLS_pickFunctionalComponentCtx(__VLS_656, __VLS_658);
    (__VLS_ctx.text.Month.cycle[1]);
    // @ts-ignore
    const __VLS_662 = {}
        .AInputNumber;
    ({}.AInputNumber);
    ({}.AInputNumber);
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    // @ts-ignore
    [AInputNumber, AInputNumber,];
    // @ts-ignore
    const __VLS_663 = __VLS_asFunctionalComponent(__VLS_662, new __VLS_662({ value: ((__VLS_ctx.month.rangeEnd)), min: ((1)), max: ((12)), }));
    const __VLS_664 = __VLS_663({ value: ((__VLS_ctx.month.rangeEnd)), min: ((1)), max: ((12)), }, ...__VLS_functionalComponentArgsRest(__VLS_663));
    ({}({ value: ((__VLS_ctx.month.rangeEnd)), min: ((1)), max: ((12)), }));
    // @ts-ignore
    [text, month,];
    const __VLS_667 = __VLS_pickFunctionalComponentCtx(__VLS_662, __VLS_664);
    (__VLS_655.slots).default;
    const __VLS_655 = __VLS_pickFunctionalComponentCtx(__VLS_650, __VLS_652);
    (__VLS_649.slots).default;
    const __VLS_649 = __VLS_pickFunctionalComponentCtx(__VLS_644, __VLS_646);
    (__VLS_583.slots).default;
    const __VLS_583 = __VLS_pickFunctionalComponentCtx(__VLS_578, __VLS_580);
    const __VLS_571 = __VLS_pickFunctionalComponentCtx(__VLS_566, __VLS_568);
    // @ts-ignore
    const __VLS_668 = {}
        .ATabPane;
    ({}.ATabPane);
    ({}.ATabPane);
    __VLS_components.ATabPane;
    __VLS_components.aTabPane;
    __VLS_components.ATabPane;
    __VLS_components.aTabPane;
    // @ts-ignore
    [ATabPane, ATabPane,];
    // @ts-ignore
    const __VLS_669 = __VLS_asFunctionalComponent(__VLS_668, new __VLS_668({ key: ("year"), }));
    const __VLS_670 = __VLS_669({ key: ("year"), }, ...__VLS_functionalComponentArgsRest(__VLS_669));
    ({}({ key: ("year"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        (__VLS_673.slots).tab;
        // @ts-ignore
        const __VLS_674 = {}
            .ScheduleOutlined;
        ({}.ScheduleOutlined);
        __VLS_components.ScheduleOutlined;
        // @ts-ignore
        [ScheduleOutlined,];
        // @ts-ignore
        const __VLS_675 = __VLS_asFunctionalComponent(__VLS_674, new __VLS_674({}));
        const __VLS_676 = __VLS_675({}, ...__VLS_functionalComponentArgsRest(__VLS_675));
        ({}({}));
        const __VLS_679 = __VLS_pickFunctionalComponentCtx(__VLS_674, __VLS_676);
        (__VLS_ctx.text.Year.name);
        // @ts-ignore
        [text,];
    }
    // @ts-ignore
    const __VLS_680 = {}
        .ARadioGroup;
    ({}.ARadioGroup);
    ({}.ARadioGroup);
    __VLS_components.ARadioGroup;
    __VLS_components.aRadioGroup;
    __VLS_components.ARadioGroup;
    __VLS_components.aRadioGroup;
    // @ts-ignore
    [ARadioGroup, ARadioGroup,];
    // @ts-ignore
    const __VLS_681 = __VLS_asFunctionalComponent(__VLS_680, new __VLS_680({ name: ("year"), value: ((__VLS_ctx.year.cronEvery)), }));
    const __VLS_682 = __VLS_681({ name: ("year"), value: ((__VLS_ctx.year.cronEvery)), }, ...__VLS_functionalComponentArgsRest(__VLS_681));
    ({}({ name: ("year"), value: ((__VLS_ctx.year.cronEvery)), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("tabBody") }, });
    // @ts-ignore
    const __VLS_686 = {}
        .ARow;
    ({}.ARow);
    ({}.ARow);
    __VLS_components.ARow;
    __VLS_components.aRow;
    __VLS_components.ARow;
    __VLS_components.aRow;
    // @ts-ignore
    [ARow, ARow,];
    // @ts-ignore
    const __VLS_687 = __VLS_asFunctionalComponent(__VLS_686, new __VLS_686({}));
    const __VLS_688 = __VLS_687({}, ...__VLS_functionalComponentArgsRest(__VLS_687));
    ({}({}));
    // @ts-ignore
    const __VLS_692 = {}
        .ARadio;
    ({}.ARadio);
    ({}.ARadio);
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    // @ts-ignore
    [ARadio, ARadio,];
    // @ts-ignore
    const __VLS_693 = __VLS_asFunctionalComponent(__VLS_692, new __VLS_692({ value: ("1"), }));
    const __VLS_694 = __VLS_693({ value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_693));
    ({}({ value: ("1"), }));
    (__VLS_ctx.text.Year.every);
    // @ts-ignore
    [text, year,];
    (__VLS_697.slots).default;
    const __VLS_697 = __VLS_pickFunctionalComponentCtx(__VLS_692, __VLS_694);
    (__VLS_691.slots).default;
    const __VLS_691 = __VLS_pickFunctionalComponentCtx(__VLS_686, __VLS_688);
    // @ts-ignore
    const __VLS_698 = {}
        .ARow;
    ({}.ARow);
    ({}.ARow);
    __VLS_components.ARow;
    __VLS_components.aRow;
    __VLS_components.ARow;
    __VLS_components.aRow;
    // @ts-ignore
    [ARow, ARow,];
    // @ts-ignore
    const __VLS_699 = __VLS_asFunctionalComponent(__VLS_698, new __VLS_698({}));
    const __VLS_700 = __VLS_699({}, ...__VLS_functionalComponentArgsRest(__VLS_699));
    ({}({}));
    // @ts-ignore
    const __VLS_704 = {}
        .ARadio;
    ({}.ARadio);
    ({}.ARadio);
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    // @ts-ignore
    [ARadio, ARadio,];
    // @ts-ignore
    const __VLS_705 = __VLS_asFunctionalComponent(__VLS_704, new __VLS_704({ value: ("2"), }));
    const __VLS_706 = __VLS_705({ value: ("2"), }, ...__VLS_functionalComponentArgsRest(__VLS_705));
    ({}({ value: ("2"), }));
    (__VLS_ctx.text.Year.interval[0]);
    // @ts-ignore
    const __VLS_710 = {}
        .AInputNumber;
    ({}.AInputNumber);
    ({}.AInputNumber);
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    // @ts-ignore
    [AInputNumber, AInputNumber,];
    // @ts-ignore
    const __VLS_711 = __VLS_asFunctionalComponent(__VLS_710, new __VLS_710({ value: ((__VLS_ctx.year.incrementIncrement)), min: ((1)), max: ((99)), }));
    const __VLS_712 = __VLS_711({ value: ((__VLS_ctx.year.incrementIncrement)), min: ((1)), max: ((99)), }, ...__VLS_functionalComponentArgsRest(__VLS_711));
    ({}({ value: ((__VLS_ctx.year.incrementIncrement)), min: ((1)), max: ((99)), }));
    // @ts-ignore
    [text, year,];
    const __VLS_715 = __VLS_pickFunctionalComponentCtx(__VLS_710, __VLS_712);
    (__VLS_ctx.text.Year.interval[1]);
    // @ts-ignore
    const __VLS_716 = {}
        .AInputNumber;
    ({}.AInputNumber);
    ({}.AInputNumber);
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    // @ts-ignore
    [AInputNumber, AInputNumber,];
    // @ts-ignore
    const __VLS_717 = __VLS_asFunctionalComponent(__VLS_716, new __VLS_716({ value: ((__VLS_ctx.year.incrementStart)), min: ((2018)), max: ((2218)), }));
    const __VLS_718 = __VLS_717({ value: ((__VLS_ctx.year.incrementStart)), min: ((2018)), max: ((2218)), }, ...__VLS_functionalComponentArgsRest(__VLS_717));
    ({}({ value: ((__VLS_ctx.year.incrementStart)), min: ((2018)), max: ((2218)), }));
    // @ts-ignore
    [text, year,];
    const __VLS_721 = __VLS_pickFunctionalComponentCtx(__VLS_716, __VLS_718);
    (__VLS_709.slots).default;
    const __VLS_709 = __VLS_pickFunctionalComponentCtx(__VLS_704, __VLS_706);
    (__VLS_703.slots).default;
    const __VLS_703 = __VLS_pickFunctionalComponentCtx(__VLS_698, __VLS_700);
    // @ts-ignore
    const __VLS_722 = {}
        .ARow;
    ({}.ARow);
    ({}.ARow);
    __VLS_components.ARow;
    __VLS_components.aRow;
    __VLS_components.ARow;
    __VLS_components.aRow;
    // @ts-ignore
    [ARow, ARow,];
    // @ts-ignore
    const __VLS_723 = __VLS_asFunctionalComponent(__VLS_722, new __VLS_722({}));
    const __VLS_724 = __VLS_723({}, ...__VLS_functionalComponentArgsRest(__VLS_723));
    ({}({}));
    // @ts-ignore
    const __VLS_728 = {}
        .ARadio;
    ({}.ARadio);
    ({}.ARadio);
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    // @ts-ignore
    [ARadio, ARadio,];
    // @ts-ignore
    const __VLS_729 = __VLS_asFunctionalComponent(__VLS_728, new __VLS_728({ ...{ class: ("long") }, value: ("3"), }));
    const __VLS_730 = __VLS_729({ ...{ class: ("long") }, value: ("3"), }, ...__VLS_functionalComponentArgsRest(__VLS_729));
    ({}({ ...{ class: ("long") }, value: ("3"), }));
    (__VLS_ctx.text.Year.specific);
    // @ts-ignore
    const __VLS_734 = {}
        .ASelect;
    ({}.ASelect);
    ({}.ASelect);
    __VLS_components.ASelect;
    __VLS_components.aSelect;
    __VLS_components.ASelect;
    __VLS_components.aSelect;
    // @ts-ignore
    [ASelect, ASelect,];
    // @ts-ignore
    const __VLS_735 = __VLS_asFunctionalComponent(__VLS_734, new __VLS_734({ mode: ("multiple"), value: ((__VLS_ctx.year.specificSpecific)), }));
    const __VLS_736 = __VLS_735({ mode: ("multiple"), value: ((__VLS_ctx.year.specificSpecific)), }, ...__VLS_functionalComponentArgsRest(__VLS_735));
    ({}({ mode: ("multiple"), value: ((__VLS_ctx.year.specificSpecific)), }));
    for (const [val] of __VLS_getVForSourceType((200))) {
        // @ts-ignore
        const __VLS_740 = {}
            .ASelectOption;
        ({}.ASelectOption);
        ({}.ASelectOption);
        __VLS_components.ASelectOption;
        __VLS_components.aSelectOption;
        __VLS_components.ASelectOption;
        __VLS_components.aSelectOption;
        // @ts-ignore
        [ASelectOption, ASelectOption,];
        // @ts-ignore
        const __VLS_741 = __VLS_asFunctionalComponent(__VLS_740, new __VLS_740({ key: ((val)), value: ((2017 + val)), }));
        const __VLS_742 = __VLS_741({ key: ((val)), value: ((2017 + val)), }, ...__VLS_functionalComponentArgsRest(__VLS_741));
        ({}({ key: ((val)), value: ((2017 + val)), }));
        (2017 + val);
        // @ts-ignore
        [text, year,];
        (__VLS_745.slots).default;
        const __VLS_745 = __VLS_pickFunctionalComponentCtx(__VLS_740, __VLS_742);
    }
    (__VLS_739.slots).default;
    const __VLS_739 = __VLS_pickFunctionalComponentCtx(__VLS_734, __VLS_736);
    (__VLS_733.slots).default;
    const __VLS_733 = __VLS_pickFunctionalComponentCtx(__VLS_728, __VLS_730);
    (__VLS_727.slots).default;
    const __VLS_727 = __VLS_pickFunctionalComponentCtx(__VLS_722, __VLS_724);
    // @ts-ignore
    const __VLS_746 = {}
        .ARow;
    ({}.ARow);
    ({}.ARow);
    __VLS_components.ARow;
    __VLS_components.aRow;
    __VLS_components.ARow;
    __VLS_components.aRow;
    // @ts-ignore
    [ARow, ARow,];
    // @ts-ignore
    const __VLS_747 = __VLS_asFunctionalComponent(__VLS_746, new __VLS_746({}));
    const __VLS_748 = __VLS_747({}, ...__VLS_functionalComponentArgsRest(__VLS_747));
    ({}({}));
    // @ts-ignore
    const __VLS_752 = {}
        .ARadio;
    ({}.ARadio);
    ({}.ARadio);
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    __VLS_components.ARadio;
    __VLS_components.aRadio;
    // @ts-ignore
    [ARadio, ARadio,];
    // @ts-ignore
    const __VLS_753 = __VLS_asFunctionalComponent(__VLS_752, new __VLS_752({ value: ("4"), }));
    const __VLS_754 = __VLS_753({ value: ("4"), }, ...__VLS_functionalComponentArgsRest(__VLS_753));
    ({}({ value: ("4"), }));
    (__VLS_ctx.text.Year.cycle[0]);
    // @ts-ignore
    const __VLS_758 = {}
        .AInputNumber;
    ({}.AInputNumber);
    ({}.AInputNumber);
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    // @ts-ignore
    [AInputNumber, AInputNumber,];
    // @ts-ignore
    const __VLS_759 = __VLS_asFunctionalComponent(__VLS_758, new __VLS_758({ value: ((__VLS_ctx.year.rangeStart)), min: ((2018)), max: ((2218)), }));
    const __VLS_760 = __VLS_759({ value: ((__VLS_ctx.year.rangeStart)), min: ((2018)), max: ((2218)), }, ...__VLS_functionalComponentArgsRest(__VLS_759));
    ({}({ value: ((__VLS_ctx.year.rangeStart)), min: ((2018)), max: ((2218)), }));
    // @ts-ignore
    [text, year,];
    const __VLS_763 = __VLS_pickFunctionalComponentCtx(__VLS_758, __VLS_760);
    (__VLS_ctx.text.Year.cycle[1]);
    // @ts-ignore
    const __VLS_764 = {}
        .AInputNumber;
    ({}.AInputNumber);
    ({}.AInputNumber);
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    __VLS_components.AInputNumber;
    __VLS_components.aInputNumber;
    // @ts-ignore
    [AInputNumber, AInputNumber,];
    // @ts-ignore
    const __VLS_765 = __VLS_asFunctionalComponent(__VLS_764, new __VLS_764({ value: ((__VLS_ctx.year.rangeEnd)), min: ((2018)), max: ((2218)), }));
    const __VLS_766 = __VLS_765({ value: ((__VLS_ctx.year.rangeEnd)), min: ((2018)), max: ((2218)), }, ...__VLS_functionalComponentArgsRest(__VLS_765));
    ({}({ value: ((__VLS_ctx.year.rangeEnd)), min: ((2018)), max: ((2218)), }));
    // @ts-ignore
    [text, year,];
    const __VLS_769 = __VLS_pickFunctionalComponentCtx(__VLS_764, __VLS_766);
    (__VLS_757.slots).default;
    const __VLS_757 = __VLS_pickFunctionalComponentCtx(__VLS_752, __VLS_754);
    (__VLS_751.slots).default;
    const __VLS_751 = __VLS_pickFunctionalComponentCtx(__VLS_746, __VLS_748);
    (__VLS_685.slots).default;
    const __VLS_685 = __VLS_pickFunctionalComponentCtx(__VLS_680, __VLS_682);
    const __VLS_673 = __VLS_pickFunctionalComponentCtx(__VLS_668, __VLS_670);
    (__VLS_13.slots).default;
    const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("value-warp") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("value") }, });
    (__VLS_ctx.cron);
    // @ts-ignore
    [cron,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("btn-wrap") }, });
    // @ts-ignore
    const __VLS_770 = {}
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
    const __VLS_771 = __VLS_asFunctionalComponent(__VLS_770, new __VLS_770({ ...{ 'onClick': {} }, }));
    const __VLS_772 = __VLS_771({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_771));
    ({}({ ...{ 'onClick': {} }, }));
    let __VLS_776;
    const __VLS_777 = {
        onClick: (__VLS_ctx.close)
    };
    (__VLS_ctx.text.Close);
    // @ts-ignore
    [text, close,];
    (__VLS_775.slots).default;
    const __VLS_775 = __VLS_pickFunctionalComponentCtx(__VLS_770, __VLS_772);
    let __VLS_773;
    let __VLS_774;
    // @ts-ignore
    const __VLS_778 = {}
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
    const __VLS_779 = __VLS_asFunctionalComponent(__VLS_778, new __VLS_778({ ...{ 'onClick': {} }, type: ("primary"), }));
    const __VLS_780 = __VLS_779({ ...{ 'onClick': {} }, type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_779));
    ({}({ ...{ 'onClick': {} }, type: ("primary"), }));
    let __VLS_784;
    const __VLS_785 = {
        onClick: (__VLS_ctx.change)
    };
    (__VLS_ctx.text.Save);
    // @ts-ignore
    [text, change,];
    (__VLS_783.slots).default;
    const __VLS_783 = __VLS_pickFunctionalComponentCtx(__VLS_778, __VLS_780);
    let __VLS_781;
    let __VLS_782;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['language'];
        __VLS_styleScopedClasses['tabBody'];
        __VLS_styleScopedClasses['long'];
        __VLS_styleScopedClasses['tabBody'];
        __VLS_styleScopedClasses['long'];
        __VLS_styleScopedClasses['tabBody'];
        __VLS_styleScopedClasses['long'];
        __VLS_styleScopedClasses['tabBody'];
        __VLS_styleScopedClasses['long'];
        __VLS_styleScopedClasses['long'];
        __VLS_styleScopedClasses['tabBody'];
        __VLS_styleScopedClasses['long'];
        __VLS_styleScopedClasses['tabBody'];
        __VLS_styleScopedClasses['long'];
        __VLS_styleScopedClasses['value-warp'];
        __VLS_styleScopedClasses['value'];
        __VLS_styleScopedClasses['btn-wrap'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
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
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {},
    emits: {},
});
;
//# sourceMappingURL=CronSelector.vue.js.map