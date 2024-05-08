import { ComponentInternalInstance } from 'vue';
import { DyForm } from './';

type BtnsShow = {
    clearAll: 0 | 1;
    reset: 0 | 1;
    submit: 0 | 1;
};
type dynamicType = {
    schema: DyForm;
    modelValue: Record<string, any>;
    showBtns?: boolean | BtnsShow;
    registeToParent?: (selfIns: ComponentInternalInstance) => void;
    unRegisteFromParent?: (selfIns: ComponentInternalInstance) => void;
    disabled?: boolean;
    onBeforeSubmit?: (formData: Record<string, any>) => void;
    onSubmit?: (formData: Record<string, any>) => void;
    onAfterSubmit?: (formData: Record<string, any>) => void;
};
declare const _default: import('vue').DefineComponent<__VLS_TypePropsToRuntimeProps<dynamicType>, {
    validateFields: () => Promise<{
        [key: string]: any;
    }>;
    resetFields: (isInit?: boolean) => void;
    validateThenGetModel: () => Promise<{
        [key: string]: any;
    }>;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<dynamicType>>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
