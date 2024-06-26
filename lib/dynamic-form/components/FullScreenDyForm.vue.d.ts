import { CSSProperties, Ref } from 'vue';
import { DyForm, FuncCustomBtn, ModalClickFn } from '../types';

type MousePosition = {
    x: number;
    y: number;
} | null;
type propType = {
    schema: DyForm;
    showBtns: {
        clearAll: 0 | 1;
        reset: 0 | 1;
        submit: 0 | 1;
    } | boolean;
    init: Record<string, any>;
    onCancel: () => void;
    allowDirectClose: boolean;
    onSubmit?: (formData: Record<string, any>) => void;
    style: CSSProperties;
    draggable?: boolean;
    title?: string;
    fadeInOut?: boolean;
    fadeTime?: number;
    mousePosition: MousePosition;
    goClose: Ref<boolean>;
    customBtns?: FuncCustomBtn[];
    showCloseBtn?: boolean;
    onModalClick?: ModalClickFn;
};
declare const _default: import('vue').DefineComponent<__VLS_TypePropsToRuntimeProps<propType>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<propType>>>, {}, {}>;
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
