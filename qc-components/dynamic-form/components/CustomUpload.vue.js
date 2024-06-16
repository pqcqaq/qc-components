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
    if (props.uploadType !== 'Dragger') {
        // @ts-ignore
        const __VLS_0 = {}
            .AUpload;
        ({}.AUpload);
        ({}.AUpload);
        __VLS_components.AUpload;
        __VLS_components.aUpload;
        __VLS_components.AUpload;
        __VLS_components.aUpload;
        // @ts-ignore
        [AUpload, AUpload,];
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...({
                ...__VLS_ctx.$attrs,
                ...props.uploadProps,
                beforeUpload: __VLS_ctx.beforeUpload,
            }), fileList: ((__VLS_ctx.model)), }));
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
        ({ ...props.uploadEvent, change: __VLS_ctx.handleChange });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("inner") }, });
        if (props.uploadType == 'Button') {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("btn") }, });
            // @ts-ignore
            const __VLS_6 = {}
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
            const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({}));
            const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
            ({}({}));
            // @ts-ignore
            const __VLS_12 = {}
                .UploadOutlined;
            ({}.UploadOutlined);
            ({}.UploadOutlined);
            __VLS_components.UploadOutlined;
            __VLS_components.uploadOutlined;
            __VLS_components.UploadOutlined;
            __VLS_components.uploadOutlined;
            // @ts-ignore
            [UploadOutlined, UploadOutlined,];
            // @ts-ignore
            const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({}));
            const __VLS_14 = __VLS_13({}, ...__VLS_functionalComponentArgsRest(__VLS_13));
            ({}({}));
            // @ts-ignore
            [$attrs, beforeUpload, model, handleChange,];
            const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
            (__VLS_ctx.uploadMsg);
            // @ts-ignore
            [uploadMsg,];
            (__VLS_11.slots).default;
            const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
        }
        if (props.uploadType == 'Image') {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("image") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
            if (__VLS_ctx.loading) {
                // @ts-ignore
                const __VLS_18 = {}
                    .LoadingOutlined;
                ({}.LoadingOutlined);
                ({}.LoadingOutlined);
                __VLS_components.LoadingOutlined;
                __VLS_components.loadingOutlined;
                __VLS_components.LoadingOutlined;
                __VLS_components.loadingOutlined;
                // @ts-ignore
                [LoadingOutlined, LoadingOutlined,];
                // @ts-ignore
                const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({}));
                const __VLS_20 = __VLS_19({}, ...__VLS_functionalComponentArgsRest(__VLS_19));
                ({}({}));
                // @ts-ignore
                [loading,];
                const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
            }
            else {
                // @ts-ignore
                const __VLS_24 = {}
                    .PlusOutlined;
                ({}.PlusOutlined);
                ({}.PlusOutlined);
                __VLS_components.PlusOutlined;
                __VLS_components.plusOutlined;
                __VLS_components.PlusOutlined;
                __VLS_components.plusOutlined;
                // @ts-ignore
                [PlusOutlined, PlusOutlined,];
                // @ts-ignore
                const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({}));
                const __VLS_26 = __VLS_25({}, ...__VLS_functionalComponentArgsRest(__VLS_25));
                ({}({}));
                const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
            }
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("ant-upload-text") }, });
            (__VLS_ctx.uploadMsg);
            // @ts-ignore
            [uploadMsg,];
        }
        (__VLS_5.slots).default;
        const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    else {
        // @ts-ignore
        const __VLS_30 = {}
            .AUploadDragger;
        ({}.AUploadDragger);
        ({}.AUploadDragger);
        __VLS_components.AUploadDragger;
        __VLS_components.aUploadDragger;
        __VLS_components.AUploadDragger;
        __VLS_components.aUploadDragger;
        // @ts-ignore
        [AUploadDragger, AUploadDragger,];
        // @ts-ignore
        const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ fileList: ((__VLS_ctx.model)), ...({
                ...__VLS_ctx.$attrs,
                ...props.uploadProps,
            }), }));
        const __VLS_32 = __VLS_31({ fileList: ((__VLS_ctx.model)), ...({
                ...__VLS_ctx.$attrs,
                ...props.uploadProps,
            }), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
        ({}({ fileList: ((__VLS_ctx.model)), ...({
                ...__VLS_ctx.$attrs,
                ...props.uploadProps,
            }), }));
        ({ ...props.uploadEvent });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("ant-upload-drag-icon") }, });
        // @ts-ignore
        const __VLS_36 = {}
            .InboxOutlined;
        ({}.InboxOutlined);
        ({}.InboxOutlined);
        __VLS_components.InboxOutlined;
        __VLS_components.inboxOutlined;
        __VLS_components.InboxOutlined;
        __VLS_components.inboxOutlined;
        // @ts-ignore
        [InboxOutlined, InboxOutlined,];
        // @ts-ignore
        const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({}));
        const __VLS_38 = __VLS_37({}, ...__VLS_functionalComponentArgsRest(__VLS_37));
        ({}({}));
        // @ts-ignore
        [$attrs, model,];
        const __VLS_41 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("ant-upload-text") }, });
        (__VLS_ctx.uploadMsg);
        // @ts-ignore
        [uploadMsg,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("ant-upload-hint") }, });
        (__VLS_35.slots).default;
        const __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['inner'];
        __VLS_styleScopedClasses['btn'];
        __VLS_styleScopedClasses['image'];
        __VLS_styleScopedClasses['ant-upload-text'];
        __VLS_styleScopedClasses['ant-upload-drag-icon'];
        __VLS_styleScopedClasses['ant-upload-text'];
        __VLS_styleScopedClasses['ant-upload-hint'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
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
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {},
    emits: {},
});
;
//# sourceMappingURL=CustomUpload.vue.js.map