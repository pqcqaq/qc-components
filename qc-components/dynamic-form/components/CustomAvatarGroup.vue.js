/* __placeholder__ */
import { AvatarGroup } from "ant-design-vue";
import { Avatar } from "ant-design-vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const props = defineProps();
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    const __VLS_0 = {}.AvatarGroup;
    ({}.AvatarGroup);
    ({}.AvatarGroup);
    __VLS_components.AvatarGroup;
    __VLS_components.AvatarGroup;
    // @ts-ignore
    [AvatarGroup, AvatarGroup,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...(props.groupProps), }));
    const __VLS_2 = __VLS_1({ ...(props.groupProps), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...(props.groupProps), }));
    for (const [option] of __VLS_getVForSourceType((props.avatarGroupValue))) {
        const __VLS_6 = {}.Avatar;
        ({}.Avatar);
        ({}.Avatar);
        __VLS_components.Avatar;
        __VLS_components.Avatar;
        // @ts-ignore
        [Avatar, Avatar,];
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ key: ((option.key)), ...(props.avatarProps), src: ((option.src)), }));
        const __VLS_8 = __VLS_7({ key: ((option.key)), ...(props.avatarProps), src: ((option.src)), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        ({}({ key: ((option.key)), ...(props.avatarProps), src: ((option.src)), }));
        (option.label);
        (__VLS_11.slots).default;
        const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    }
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    const __VLS_internalComponent = (await import('vue')).defineComponent({
        setup() {
            return {
                AvatarGroup: AvatarGroup,
                Avatar: Avatar,
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
//# sourceMappingURL=CustomAvatarGroup.vue.js.map