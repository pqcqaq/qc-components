/* __placeholder__ */
import { onMounted, ref, watch, defineAsyncComponent, } from "vue";
import DynamicForm from "../DynamicForm.vue";
import { Modal } from "ant-design-vue";
import { CloseOutlined } from "@ant-design/icons-vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const AButton = defineAsyncComponent(() => import("ant-design-vue/es/button"));
const nextFormRefs = ref();
const register = (form) => {
    nextFormRefs.value = form;
};
let __VLS_typeProps;
const props = defineProps();
const formModel = ref({});
const isLoading = ref(false);
const schema = ref(props.schema);
onMounted(() => {
    if (Object.keys(props.init).length > 0) {
        formModel.value = { ...props.init };
    }
    if (props.title) {
        schema.value.title = props.title;
    }
});
const handleClose = () => {
    if (props.allowDirectClose) {
        props.onCancel();
    }
    else {
        // 确认框
        Modal.confirm({
            title: "确认关闭",
            content: "关闭后将不会保存当前数据，是否继续？",
            onOk: () => {
                props.onCancel();
            },
            okText: "确认关闭",
            okType: "primary",
            okButtonProps: { danger: true },
            cancelText: "返回",
            zIndex: 10000,
            centered: true,
        });
    }
};
const handleOnBeforeSubmit = () => {
    isLoading.value = true;
};
const handleOnAfterSubmit = () => {
    isLoading.value = false;
};
const vMove = {
    mounted(el) {
        if (!props.draggable) {
            return;
        }
        let moveEl = el;
        const mouseDown = (e) => {
            const elNowPos = {
                x: moveEl.getBoundingClientRect().x,
                y: moveEl.getBoundingClientRect().y,
            };
            const mouseBefore = {
                x: e.clientX,
                y: e.clientY,
            };
            const elShape = {
                width: moveEl.getBoundingClientRect().width,
                height: moveEl.getBoundingClientRect().height,
            };
            const move = (e) => {
                // 设置鼠标样式
                moveEl.style.cursor = "move";
                const mouseMove = {
                    x: e.clientX - mouseBefore.x,
                    y: e.clientY - mouseBefore.y,
                };
                const offset = {
                    x: elNowPos.x + mouseMove.x,
                    y: elNowPos.y + mouseMove.y,
                };
                // 判断是否超出边界
                if (offset.x < 15 || offset.y < 15) {
                    return;
                }
                // 判断右下边界
                if (offset.x + elShape.width > window.innerWidth - 30 ||
                    offset.y + elShape.height > window.innerHeight - 15) {
                    return;
                }
                // 更新拖拽元素的位置
                moveEl.style.left = offset.x + "px";
                moveEl.style.top = offset.y + "px";
            };
            document.addEventListener("mousemove", move);
            document.addEventListener("mouseup", () => {
                // 取消鼠标样式
                moveEl.style.cursor = "default";
                document.removeEventListener("mousemove", move);
            });
        };
        moveEl.style.position = "absolute"; // 确保拖拽元素的定位方式为绝对定位
        moveEl.addEventListener("mousedown", mouseDown);
    },
    // 取消挂载时注销事件
    unmounted(el) {
        if (!props.draggable) {
            return;
        }
        let moveEl = el;
        moveEl.removeEventListener("mousedown", () => { });
    },
};
let fadeElement = null;
const vFadeInOut = {
    mounted(el, binding) {
        // 保存元素
        fadeElement = el;
        const config = binding.value;
        if (!config.enable) {
            return;
        }
        el.style.opacity = "0"; // 初始状态设置为透明
        // 设置所有动画都在下一个事件循环中执行
        setTimeout(() => {
            el.style.transition = "opacity " + config.fadeTime + "ms ease";
            el.style.opacity = "1"; // 淡入
        }, 10);
    },
};
let scaleElement = null;
const vScaleIn = {
    mounted(el, binding) {
        // 保存元素
        scaleElement = el;
        const config = binding.value;
        if (!config.enable) {
            return;
        }
        // 设置初始缩放比例
        el.style.scale = "0.2";
        if (!props.mousePosition) {
            // 设置缩放中心在自己中心
            el.style.transformOrigin = "center";
            return;
        }
        // 获取元素的位置信息
        const rect = el.getBoundingClientRect();
        // 计算鼠标点击位置相对于元素位置的偏移量
        const offsetX = props.mousePosition.x - rect.left;
        const offsetY = props.mousePosition.y - rect.top;
        // 设置缩放中心为鼠标点击位置
        el.style.transformOrigin = `${offsetX}px ${offsetY}px`;
        // 设置所有动画都在下一个事件循环中执行
        setTimeout(() => {
            el.style.transition = "scale " + config.fadeTime + "ms ease";
            el.style.scale = "1";
        });
    },
};
watch(() => props.goClose.value, (val) => {
    if (val) {
        // 设置元素淡出和缩放
        if (fadeElement) {
            fadeElement.style.opacity = "0";
        }
        if (scaleElement) {
            scaleElement.style.scale = "0.2";
        }
    }
});
const checker = async () => {
    return (!!(await nextFormRefs.value?.exposed?.validateThenGetModel()) || false);
};
const __VLS_fnComponent = (await import('vue')).defineComponent({});
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                props.onModalClick?.({
                    model: __VLS_ctx.formModel,
                    close: () => props.onCancel(),
                    event: $event,
                });
                // @ts-ignore
                [formModel,];
            } }, ...{ class: ("fullscreen") }, });
    __VLS_directiveFunction(__VLS_ctx.vFadeInOut)(({
        fadeTime: props.fadeTime || 150,
        enable: props.fadeInOut || true,
    }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: () => { } }, ...{ class: ("full-form") }, ...{ style: (({
                ...props.style,
            })) }, });
    __VLS_directiveFunction(__VLS_ctx.vMove)(undefined);
    __VLS_directiveFunction(__VLS_ctx.vScaleIn)(({
        fadeTime: props.fadeTime || 150,
        enable: props.fadeInOut || true,
    }));
    // @ts-ignore
    [DynamicForm,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(DynamicForm, new DynamicForm({ schema: ((__VLS_ctx.schema)), modelValue: ((__VLS_ctx.formModel)), showBtns: ((props.showBtns)), ...{ class: ("form") }, onBeforeSubmit: ((__VLS_ctx.handleOnBeforeSubmit)), onSubmit: ((props.onSubmit)), onAfterSubmit: ((__VLS_ctx.handleOnAfterSubmit)), registeToParent: ((__VLS_ctx.register)), }));
    const __VLS_1 = __VLS_0({ schema: ((__VLS_ctx.schema)), modelValue: ((__VLS_ctx.formModel)), showBtns: ((props.showBtns)), ...{ class: ("form") }, onBeforeSubmit: ((__VLS_ctx.handleOnBeforeSubmit)), onSubmit: ((props.onSubmit)), onAfterSubmit: ((__VLS_ctx.handleOnAfterSubmit)), registeToParent: ((__VLS_ctx.register)), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    ({}({ schema: ((__VLS_ctx.schema)), modelValue: ((__VLS_ctx.formModel)), showBtns: ((props.showBtns)), ...{ class: ("form") }, onBeforeSubmit: ((__VLS_ctx.handleOnBeforeSubmit)), onSubmit: ((props.onSubmit)), onAfterSubmit: ((__VLS_ctx.handleOnAfterSubmit)), registeToParent: ((__VLS_ctx.register)), }));
    // @ts-ignore
    [formModel, vFadeInOut, vMove, vScaleIn, schema, handleOnBeforeSubmit, handleOnAfterSubmit, register,];
    const __VLS_4 = __VLS_pickFunctionalComponentCtx(DynamicForm, __VLS_1);
    if (!!props.showCloseBtn) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("btns") }, });
        // @ts-ignore
        const __VLS_5 = {}
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
        const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{ 'onClick': {} }, shape: ("circle"), type: ("primary"), danger: (true), disabled: ((__VLS_ctx.isLoading)), }));
        const __VLS_7 = __VLS_6({ ...{ 'onClick': {} }, shape: ("circle"), type: ("primary"), danger: (true), disabled: ((__VLS_ctx.isLoading)), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
        ({}({ ...{ 'onClick': {} }, shape: ("circle"), type: ("primary"), danger: (true), disabled: ((__VLS_ctx.isLoading)), }));
        let __VLS_11;
        const __VLS_12 = {
            onClick: (__VLS_ctx.handleClose)
        };
        // @ts-ignore
        const __VLS_13 = {}
            .CloseOutlined;
        ({}.CloseOutlined);
        __VLS_components.CloseOutlined;
        // @ts-ignore
        [CloseOutlined,];
        // @ts-ignore
        const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({}));
        const __VLS_15 = __VLS_14({}, ...__VLS_functionalComponentArgsRest(__VLS_14));
        ({}({}));
        // @ts-ignore
        [isLoading, handleClose,];
        const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_13, __VLS_15);
        (__VLS_10.slots).default;
        const __VLS_10 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
        let __VLS_8;
        let __VLS_9;
    }
    if (props.customBtns && props.customBtns.length > 0) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("custombtns") }, ...{ style: (({
                    ...{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '20px',
                        gap: '20px',
                    },
                    ...__VLS_ctx.schema.customBtnsStyle,
                })) }, });
        for (const [btn] of __VLS_getVForSourceType((props.customBtns))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((btn.text)), ...{ style: (({
                        ...{
                            display: 'inline',
                            justifyContent: 'center',
                        },
                        ...btn.outterStyle,
                    })) }, });
            // @ts-ignore
            const __VLS_19 = {}
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
            const __VLS_20 = __VLS_asFunctionalComponent(__VLS_19, new __VLS_19({ ...{ 'onClick': {} }, ...(btn.props), ...{ style: (({
                        ...btn.style,
                    })) }, }));
            const __VLS_21 = __VLS_20({ ...{ 'onClick': {} }, ...(btn.props), ...{ style: (({
                        ...btn.style,
                    })) }, }, ...__VLS_functionalComponentArgsRest(__VLS_20));
            ({}({ ...{ 'onClick': {} }, ...(btn.props), ...{ style: (({
                        ...btn.style,
                    })) }, }));
            let __VLS_25;
            const __VLS_26 = {
                onClick: (($event) => {
                    btn.onClick?.({
                        doCheck: () => __VLS_ctx.checker(),
                        close: () => props.onCancel(),
                        model: __VLS_ctx.formModel,
                        event: $event,
                    });
                })
            };
            (btn.text);
            // @ts-ignore
            [formModel, schema, checker,];
            (__VLS_24.slots).default;
            const __VLS_24 = __VLS_pickFunctionalComponentCtx(__VLS_19, __VLS_21);
            let __VLS_22;
            let __VLS_23;
        }
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['fullscreen'];
        __VLS_styleScopedClasses['full-form'];
        __VLS_styleScopedClasses['form'];
        __VLS_styleScopedClasses['btns'];
        __VLS_styleScopedClasses['custombtns'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                DynamicForm: DynamicForm,
                CloseOutlined: CloseOutlined,
                AButton: AButton,
                register: register,
                formModel: formModel,
                isLoading: isLoading,
                schema: schema,
                handleClose: handleClose,
                handleOnBeforeSubmit: handleOnBeforeSubmit,
                handleOnAfterSubmit: handleOnAfterSubmit,
                vMove: vMove,
                vFadeInOut: vFadeInOut,
                vScaleIn: vScaleIn,
                checker: checker,
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
//# sourceMappingURL=FullScreenDyForm.vue.js.map