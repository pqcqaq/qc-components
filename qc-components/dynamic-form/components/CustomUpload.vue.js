/* __placeholder__ */
import { message } from "ant-design-vue";
import { computed, ref } from "vue";
import UploadOutlined from "@ant-design/icons-vue/UploadOutlined";
import LoadingOutlined from "@ant-design/icons-vue/LoadingOutlined";
import PlusOutlined from "@ant-design/icons-vue/PlusOutlined";
import InboxOutlined from "@ant-design/icons-vue/InboxOutlined";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const props = withDefaults(defineProps(), {
    uploadType: "Button",
});
const uploadMsg = computed(() => {
    return props.msg || "上传";
});
const emit = defineEmits(["update:value"]);
const model = computed({
    get() {
        return props.value;
    },
    set(value) {
        emit("update:value", value);
    },
});
// function getBase64(img: Blob, callback: (base64Url: string) => void) {
// 	const reader = new FileReader();
// 	reader.addEventListener("load", () => callback(reader.result as string));
// 	reader.readAsDataURL(img);
// }
const loading = ref(false);
// const imageUrl = ref<string>("");
const imageHandleChange = (info) => {
    if (info.file.status === "uploading") {
        loading.value = true;
        return;
    }
    if (info.file.status === "done") {
        // getBase64(info.file.originFileObj as Blob, (base64Url: string) => {
        // imageUrl.value = base64Url;
        loading.value = false;
        // });
    }
    if (info.file.status === "error") {
        loading.value = false;
        message.error("upload error");
    }
};
const handleChangeMap = {
    Image: imageHandleChange,
    Button: () => { },
    Dragger: () => { },
};
const handleChange = (info) => {
    handleChangeMap[props.uploadType]?.(info);
    props.uploadEvent?.change?.(info);
};
const imageBeforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
        message.error("请选择一个图片文件");
    }
    const isLt2M = file.size / 1024 / 1024 < 5;
    if (!isLt2M) {
        message.error("图片需要小于5MB");
    }
    return isJpgOrPng && isLt2M;
};
const beforeUploadMap = {
    Image: imageBeforeUpload,
    Button: () => true,
    Dragger: () => true,
};
const beforeUpload = (file, FileList) => {
    return (beforeUploadMap[props.uploadType]?.(file) &&
        props.uploadProps?.beforeUpload?.(file, FileList));
};
const __VLS_withDefaultsArg = (function (t) { return t; })({
    uploadType: "Button",
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
    if (props.uploadType !== 'Dragger') {
        const __VLS_0 = {}.AUpload;
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...({
                ...__VLS_ctx.$attrs,
                ...props.uploadProps,
                beforeUpload: __VLS_ctx.beforeUpload,
            }), fileList: ((__VLS_ctx.model)), }));
        ({}.AUpload);
        ({}.AUpload);
        __VLS_components.AUpload;
        __VLS_components.aUpload;
        __VLS_components.AUpload;
        __VLS_components.aUpload;
        // @ts-ignore
        [AUpload, AUpload,];
        const __VLS_2 = __VLS_1({ ...({
                ...__VLS_ctx.$attrs,
                ...props.uploadProps,
                beforeUpload: __VLS_ctx.beforeUpload,
            }), fileList: ((__VLS_ctx.model)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...({
                ...__VLS_ctx.$attrs,
                ...props.uploadProps,
                beforeUpload: __VLS_ctx.beforeUpload,
            }), fileList: ((__VLS_ctx.model)), }));
        $event => { ({ ...props.uploadEvent, change: __VLS_ctx.handleChange }); };
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ class: ("inner"), });
        if (props.uploadType == 'Button') {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ class: ("btn"), });
            const __VLS_5 = {}.AButton;
            const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({}));
            ({}.AButton);
            ({}.AButton);
            __VLS_components.AButton;
            __VLS_components.aButton;
            __VLS_components.AButton;
            __VLS_components.aButton;
            // @ts-ignore
            [AButton, AButton,];
            const __VLS_7 = __VLS_6({}, ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({}({}));
            const __VLS_10 = {}.UploadOutlined;
            const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({}));
            ({}.UploadOutlined);
            ({}.UploadOutlined);
            __VLS_components.UploadOutlined;
            __VLS_components.uploadOutlined;
            __VLS_components.UploadOutlined;
            __VLS_components.uploadOutlined;
            // @ts-ignore
            [UploadOutlined, UploadOutlined,];
            const __VLS_12 = __VLS_11({}, ...__VLS_functionalComponentArgsRest(__VLS_11));
            ({}({}));
            // @ts-ignore
            [$attrs, beforeUpload, model, handleChange,];
            const __VLS_14 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
            (__VLS_ctx.uploadMsg);
            // @ts-ignore
            [uploadMsg,];
            (__VLS_9.slots).default;
            const __VLS_9 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
        }
        if (props.uploadType == 'Image') {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ class: ("image"), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
            if (__VLS_ctx.loading) {
                const __VLS_15 = {}.LoadingOutlined;
                const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({}));
                ({}.LoadingOutlined);
                ({}.LoadingOutlined);
                __VLS_components.LoadingOutlined;
                __VLS_components.loadingOutlined;
                __VLS_components.LoadingOutlined;
                __VLS_components.loadingOutlined;
                // @ts-ignore
                [LoadingOutlined, LoadingOutlined,];
                const __VLS_17 = __VLS_16({}, ...__VLS_functionalComponentArgsRest(__VLS_16));
                ({}({}));
                // @ts-ignore
                [loading,];
                const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
            }
            else {
                const __VLS_20 = {}.PlusOutlined;
                const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({}));
                ({}.PlusOutlined);
                ({}.PlusOutlined);
                __VLS_components.PlusOutlined;
                __VLS_components.plusOutlined;
                __VLS_components.PlusOutlined;
                __VLS_components.plusOutlined;
                // @ts-ignore
                [PlusOutlined, PlusOutlined,];
                const __VLS_22 = __VLS_21({}, ...__VLS_functionalComponentArgsRest(__VLS_21));
                ({}({}));
                const __VLS_24 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
            }
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ class: ("ant-upload-text"), });
            (__VLS_ctx.uploadMsg);
            // @ts-ignore
            [uploadMsg,];
        }
        (__VLS_4.slots).default;
        const __VLS_4 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    else {
        const __VLS_25 = {}.AUploadDragger;
        const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ fileList: ((__VLS_ctx.model)), ...({
                ...__VLS_ctx.$attrs,
                ...props.uploadProps,
            }), }));
        ({}.AUploadDragger);
        ({}.AUploadDragger);
        __VLS_components.AUploadDragger;
        __VLS_components.aUploadDragger;
        __VLS_components.AUploadDragger;
        __VLS_components.aUploadDragger;
        // @ts-ignore
        [AUploadDragger, AUploadDragger,];
        const __VLS_27 = __VLS_26({ fileList: ((__VLS_ctx.model)), ...({
                ...__VLS_ctx.$attrs,
                ...props.uploadProps,
            }), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
        ({}({ fileList: ((__VLS_ctx.model)), ...({
                ...__VLS_ctx.$attrs,
                ...props.uploadProps,
            }), }));
        $event => { ({ ...props.uploadEvent }); };
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ class: ("ant-upload-drag-icon"), });
        const __VLS_30 = {}.InboxOutlined;
        const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({}));
        ({}.InboxOutlined);
        ({}.InboxOutlined);
        __VLS_components.InboxOutlined;
        __VLS_components.inboxOutlined;
        __VLS_components.InboxOutlined;
        __VLS_components.inboxOutlined;
        // @ts-ignore
        [InboxOutlined, InboxOutlined,];
        const __VLS_32 = __VLS_31({}, ...__VLS_functionalComponentArgsRest(__VLS_31));
        ({}({}));
        // @ts-ignore
        [$attrs, model,];
        const __VLS_34 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ class: ("ant-upload-text"), });
        (__VLS_ctx.uploadMsg);
        // @ts-ignore
        [uploadMsg,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ class: ("ant-upload-hint"), });
        (__VLS_29.slots).default;
        const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["inner"];
        __VLS_styleScopedClasses["btn"];
        __VLS_styleScopedClasses["image"];
        __VLS_styleScopedClasses["ant-upload-text"];
        __VLS_styleScopedClasses["ant-upload-drag-icon"];
        __VLS_styleScopedClasses["ant-upload-text"];
        __VLS_styleScopedClasses["ant-upload-hint"];
    }
    var __VLS_slots;
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            UploadOutlined: UploadOutlined,
            LoadingOutlined: LoadingOutlined,
            PlusOutlined: PlusOutlined,
            InboxOutlined: InboxOutlined,
            uploadMsg: uploadMsg,
            model: model,
            loading: loading,
            handleChange: handleChange,
            beforeUpload: beforeUpload,
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
//# sourceMappingURL=CustomUpload.vue.js.map